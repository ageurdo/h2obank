using h2o_challenge.Domain.Contracts.Repositories.AddAccount;
using h2o_challenge.Domain.Contracts.UseCases.AddAccount;
using h2o_challenge.Domain.Results;

namespace h2o_challenge.Application.useCases.AddAccount
{
    public class AddAccountUseCase : IAddAccountUseCase
    {
        private readonly IAddAccountRepository _addAccountRepository;

        public AddAccountUseCase(IAddAccountRepository addAccountRepository)
        {
            _addAccountRepository = addAccountRepository;
        }

        public async Task<RequestResult> AddAccount(Accounts account)
        {
            try
            {
                return await _addAccountRepository.AddAccount(account);
            }
            catch (Exception ex)
            {
                var error = new RequestResult().BadRequest(ex.Message);
                return new RequestResult() { Message = ex.Message, StatusCode = 400 };
            }
        }
    }
}
