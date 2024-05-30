
using h2o_challenge.Domain.Results;

namespace h2o_challenge.Domain.Contracts.Repositories.GetAccount
{
    public interface IGetAccountRepository
    {
        Task<RequestResult> GetAccount(string accountName);
    }
  
}
