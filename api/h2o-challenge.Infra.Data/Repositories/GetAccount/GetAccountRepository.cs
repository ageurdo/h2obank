using Azure;
using h2o_challenge.Domain.Contracts.Repositories.GetAccount;
using h2o_challenge.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace h2o_challenge.Infra.Data.Repositories.GetAccount
{
    public class GetAccountRepository : IGetAccountRepository
    {
        private readonly BancoContext _context;

        public GetAccountRepository(BancoContext context) { 
            _context = context;
        }

        async Task<Accounts> IGetAccountRepository.GetAccount(string accountName)
        {
            var response = await _context.Accounts
                .AsNoTracking()
                .FirstOrDefaultAsync(a => a.Name == accountName);

            return response;
        }

        
    }
}
