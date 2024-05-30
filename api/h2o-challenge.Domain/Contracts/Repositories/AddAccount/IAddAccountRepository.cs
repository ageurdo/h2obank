using h2o_challenge.Domain.Results;
using System.Security.Principal;

namespace h2o_challenge.Domain.Contracts.Repositories.AddAccount
{
    public interface IAddAccountRepository
    {
        Task<RequestResult> AddAccount(Accounts account);

    }
}
