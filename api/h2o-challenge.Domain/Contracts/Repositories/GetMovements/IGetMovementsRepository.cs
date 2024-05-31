using h2o_challenge.Domain.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace h2o_challenge.Domain.Contracts.Repositories.GetMovements
{
    public interface IGetMovementsRepository
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
