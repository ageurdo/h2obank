using h2o_challenge.Domain.Contracts.Repositories.GetAccount;
using h2o_challenge.Domain.Contracts.UseCases.GetAccount;
using h2o_challenge.Domain.Results;

namespace h2o_challenge.Application.useCases.GetAccount
{
    public class GetAccountUseCase : IGetAccountUseCase
    {
        private readonly IGetAccountRepository _getAccountRepository;
        public GetAccountUseCase(IGetAccountRepository getAccountRepository)
        {
            _getAccountRepository = getAccountRepository;
        }

        public async Task<RequestResult> GetAccount(string account)
        {
            try
            {
                return await _getAccountRepository.GetAccount(account);
            }
            catch (Exception ex)
            {
                var error = new RequestResult().BadRequest(ex.Message);
                return new RequestResult() { Message = ex.Message, StatusCode = 400 };
            }
        }
    }
}
