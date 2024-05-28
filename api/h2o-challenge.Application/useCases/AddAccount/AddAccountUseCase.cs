using h2o_challenge.Domain.Contracts.Repositories.AddAccount;
using h2o_challenge.Domain.Contracts.UseCases.AddAccount;

namespace h2o_challenge.Application.useCases.ContaBancaria
{
    public class AddAccountUseCase : IAddAccountUseCase
    {
        private readonly IAddAccountRepository _addAccountRepository;
        public AddAccountUseCase(IAddAccountRepository addAccountRepository)
        {
            _addAccountRepository = addAccountRepository;
        }

        public void AddAccount(Accounts account)
        {
            _addAccountRepository.AddAccount(account);
        }
    }
}
