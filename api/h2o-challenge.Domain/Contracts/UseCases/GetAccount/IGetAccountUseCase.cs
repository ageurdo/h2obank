namespace h2o_challenge.Domain.Contracts.UseCases.GetAccount
{
    public interface IGetAccountUseCase
    {
        Accounts GetAccount(string account);  
    }
}
