using h2o_challenge.Domain.Contracts.Repositories.TransferFunds;
using h2o_challenge.Domain.Contracts.UseCases.TransferFunds;
using h2o_challenge.Domain.Results;

namespace h2o_challenge.Application.useCases.TransferFunds
{
    public class TransferFundsUseCase : ITransferFundsUseCase
    {
        private readonly ITransferFundsRepository _transferRepository;

        public TransferFundsUseCase(ITransferFundsRepository transferRepository)
        {
            _transferRepository = transferRepository;
        }

        public async Task<RequestResult> TransferFunds(int idSenderAccount, int idRecipientAccount, decimal amount)
        {
            try
            {
                return await _transferRepository.TransferFunds(idSenderAccount, idRecipientAccount, amount);
            }

            catch (Exception ex)
            {
                var error = new RequestResult().BadRequest(ex.Message);
                return new RequestResult() { Message = ex.Message, StatusCode = 400 };
            }
        }
    }
}
