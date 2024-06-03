using h2o_challenge.Domain.Entities;
using h2o_challenge.Domain.Results;

namespace h2o_challenge.Domain.Contracts.UseCases.TransferFunds
{
    public interface ITransferFundsUseCase
    {
        Task<RequestResult> TransferFunds(int sender, string recipient, decimal amount);
    }
}
