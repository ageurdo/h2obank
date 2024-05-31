
using h2o_challenge.Domain.Contracts.Repositories.GetMovements;
using h2o_challenge.Domain.Contracts.UseCases.GetMovements;
using h2o_challenge.Domain.Results;

namespace h2o_challenge.Application.useCases.GetMovements
{
    public class GetMovementsUseCase : IGetMovementsUseCase
    {
        private readonly IGetMovementsRepository _getMovementRepository;
        
        public GetMovementsUseCase(IGetMovementsRepository getMovementsRepository)
        {
            _getMovementRepository = getMovementsRepository;
        }

        public async Task<RequestResult> GetMovements(decimal? minValue, decimal? maxValue, int senderId, int recipientId, DateTimeOffset? startDate, DateTimeOffset? endDate)
        {
            try 
            {
                return await _getMovementRepository.GetMovements(minValue, maxValue, senderId, recipientId, startDate, endDate);
            }
            catch (Exception ex) 
            { 
                var error = new RequestResult().BadRequest(ex.Message);
                return new RequestResult() { Message = ex.Message, StatusCode = 400 };
            }
        }
    }
}
