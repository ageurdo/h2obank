using h2o_challenge.Domain.Contracts.Repositories.AddAccount;
using h2o_challenge.Infra.Data.Context;

namespace h2o_challenge.Infra.Data.Repositories.AddAccount
{
    public class AddAccountRepository : IAddAccountRepository
    {
        private readonly BancoContext _context;

        public AddAccountRepository(BancoContext context) { 
            _context = context;
        }

        public void AddAccount(Accounts account)
        {
            _context.Accounts.Add(account);
            _context.SaveChanges();
        }
    }
}
