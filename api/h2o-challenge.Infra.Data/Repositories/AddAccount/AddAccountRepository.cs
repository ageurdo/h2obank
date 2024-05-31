using h2o_challenge.Domain.Contracts.Repositories.AddAccount;
using h2o_challenge.Domain.Results;
using h2o_challenge.Infra.Data.Context;


namespace h2o_challenge.Infra.Data.Repositories.AddAccount
{
    public class AddAccountRepository : IAddAccountRepository
    {
        private readonly BancoContext _context;

        public AddAccountRepository(BancoContext context) { 
            _context = context;
        }

        Task<RequestResult> IAddAccountRepository.AddAccount(Accounts account)
        {
            if (_context.Accounts.Any(c => c.Name.ToLower() == account.Name.ToLower()))
            {
                var result = "Já existe uma conta com esse nome.";
                throw new Exception(new RequestResult().BadRequest(result).Message);
            }

            _context.Accounts.Add(account);
            _context.SaveChanges();

            return Task.FromResult(new RequestResult().Ok(new object()));
        }
    }
}
