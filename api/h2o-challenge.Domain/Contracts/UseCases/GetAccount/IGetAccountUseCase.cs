using h2o_challenge.Domain.Results;

namespace h2o_challenge.Domain.Contracts.UseCases.GetAccount
{
    public interface IGetAccountUseCase
    {
        Task<RequestResult> GetAccount(string account);

    }
}
