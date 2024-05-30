using h2o_challenge.Domain.Results;
using System.Security.Principal;

namespace h2o_challenge.Domain.Contracts.UseCases.AddAccount
{
    public interface IAddAccountUseCase
    {
        Task<RequestResult> AddAccount(Accounts account);
    }
}
