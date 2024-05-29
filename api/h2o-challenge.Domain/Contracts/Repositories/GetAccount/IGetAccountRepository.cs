
namespace h2o_challenge.Domain.Contracts.Repositories.GetAccount
{
    public interface IGetAccountRepository
    {
        Task<Accounts> GetAccount(string accountName);

    }
}
