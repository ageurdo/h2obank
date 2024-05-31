using h2o_challenge.Domain.Contracts.Repositories.TransferFunds;
using h2o_challenge.Domain.Entities;
using h2o_challenge.Domain.Results;
using h2o_challenge.Infra.Data.Context;

namespace h2o_challenge.Infra.Data.Repositories.TransferFunds
{
    public class TransferFundsRepository : ITransferFundsRepository
    {
        private readonly BancoContext _context;

        public TransferFundsRepository(BancoContext context)
        {
            _context = context;
        }

        public async Task<RequestResult> TransferFunds(int idSenderAccount, int idRecipientAccount, decimal amount)
        {
            // Verificar se a conta do remetente existe
            var senderAccount = await _context.Accounts.FindAsync(idSenderAccount);
            if (senderAccount == null)
            {
                return new RequestResult
                {
                    Data = {},
                    StatusCode = 400,
                    Message = $"Conta do remetente com o ID {idSenderAccount} não encontrada."
                };
            }

            // Verificar se a conta do destinatário existe
            var recipientAccount = await _context.Accounts.FindAsync(idRecipientAccount);
            if (recipientAccount == null)
            {
                return new RequestResult
                {
                    Data = { },
                    StatusCode = 400,
                    Message = $"Conta do destinatário com o ID {idRecipientAccount} não encontrada."
                };
            }

            // Verificar se a conta do remetente tem saldo suficiente
            if (senderAccount.Balance < amount)
            {
                return new RequestResult
                {
                    Data = { },
                    StatusCode = 400,
                    Message = $"Saldo insuficiente na conta do remetente com o ID {idSenderAccount}."
                };
            }

            // Realizar a transferência
            senderAccount.Withdraw(amount);

            recipientAccount.Deposit(amount);

            _context.Accounts.Update(senderAccount);
            _context.Accounts.Update(recipientAccount);

            var movement = new Movements
            {
                IdSenderAccount = idSenderAccount,
                IdRecipientAccount = idRecipientAccount,
                Amount = amount,
                DateMovment = DateTime.Now
            };

            _context.Movements.Add(movement);

            await _context.SaveChangesAsync();

            return new RequestResult
            {
                Data = { },
                StatusCode = 200,
                Message = "Transferência realizada com sucesso.",
            };
        }
    }
}
