using h2o_challenge.Domain.Contracts.Repositories.GetMovements;
using h2o_challenge.Domain.Entities;
using h2o_challenge.Domain.Results;
using h2o_challenge.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace h2o_challenge.Infra.Data.Repositories.GetMovements
{
    public class GetMovementsRepository : IGetMovementsRepository
    {
        private readonly BancoContext _context;

        public GetMovementsRepository(BancoContext context)
        {
            _context = context;
        }

        async Task<RequestResult> IGetMovementsRepository.GetMovements(
            decimal? minValue = null,
            decimal? maxValue = null,
            int senderId = 0,
            int recipientId = 0,
            DateTimeOffset? startDate = null,
            DateTimeOffset? endDate = null
        )
        {
            var query = _context.Movements.AsQueryable();

            if (minValue > 0)
            {
                query = query.Where(m => m.Amount >= minValue);
            }

            if (maxValue > 0)
            {
                query = query.Where(m => m.Amount <= maxValue);
            }


            if (recipientId != 0 && senderId !=0)
            {
                query = query.Where(m => m.IdRecipientAccount == recipientId).Where(s => s.IdSenderAccount == senderId);
            }

            if (startDate.HasValue && endDate.HasValue)
            {
                query = query.Where(m => m.DateMovement >= startDate.Value && m.DateMovement <= endDate.Value);
            }
            else if (startDate.HasValue)
            {
                query = query.Where(m => m.DateMovement >= startDate.Value);
            }
            else if (endDate.HasValue)
            {
                query = query.Where(m => m.DateMovement <= endDate.Value);
            }

            var movements = await query.ToListAsync();

            return new RequestResult { 
                Data = movements,
                StatusCode = 200,
                Message = "Consulta realizada com sucesso"
            };
        }

       
    }
}
