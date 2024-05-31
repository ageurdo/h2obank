using h2o_challenge.Domain.Entities;
using h2o_challenge.Domain.Results;

namespace h2o_challenge.Domain.Contracts.UseCases.GetMovements
{
    public interface IGetMovementsUseCase
    {
        Task<RequestResult> GetMovements(
           decimal? minValue,
           decimal? maxValue,
           int senderId,
           int recipientId,
           DateTimeOffset? startDate,
           DateTimeOffset? endDate
        );
    }
}
