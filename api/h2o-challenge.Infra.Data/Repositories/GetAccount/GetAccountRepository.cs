using Azure;
using h2o_challenge.Domain.Contracts.Repositories.AddAccount;
using h2o_challenge.Domain.Contracts.Repositories.GetAccount;
using h2o_challenge.Domain.Results;
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

        public async Task<RequestResult> GetAccount(string accountName)
        {
            var account = await _context.Accounts
             .AsNoTracking()
             .FirstOrDefaultAsync(a => a.Name == accountName);

            if (account == null)
            {
                var error = $"Conta não encontrada com o nome: {accountName}";
                throw new Exception(new RequestResult().BadRequest(error, 409).Message);
            }

            return new RequestResult().Ok(account);

        }

        //public async Task<IEnumerable<Accounts>> GetAccountsByName(string name)
        //{
        //var response = await _context.Accounts
        //    .AsNoTracking()
        //    .Where(a => a.Name == name)
        //    .ToListAsync();

        //return response;
        //}

       

        
    }
}
