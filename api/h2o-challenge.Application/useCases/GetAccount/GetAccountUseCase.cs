using h2o_challenge.Domain.Contracts.Repositories.GetAccount;
using h2o_challenge.Domain.Contracts.UseCases.GetAccount;

namespace h2o_challenge.Application.useCases.GetAccount
{
    public class GetAccountUseCase : IGetAccountUseCase
    {
        private readonly IGetAccountRepository _getAccountRepository;
        public GetAccountUseCase(IGetAccountRepository getAccountRepository)
        {
            _getAccountRepository = getAccountRepository;
        }

        public Accounts GetAccount(string account)
        {
            return _getAccountRepository.GetAccount(account).Result;
        }
    }
}
