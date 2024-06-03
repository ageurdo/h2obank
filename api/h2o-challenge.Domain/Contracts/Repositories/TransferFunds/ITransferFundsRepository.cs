using h2o_challenge.Domain.Entities;
using h2o_challenge.Domain.Results;

namespace h2o_challenge.Domain.Contracts.Repositories.TransferFunds
{
    public interface ITransferFundsRepository
    {
        Task<RequestResult> TransferFunds(int idSenderAccount, string recipient, decimal amount);
    }
}
