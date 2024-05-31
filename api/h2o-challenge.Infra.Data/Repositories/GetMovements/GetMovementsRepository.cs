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
            var query = _context.Movements
                .AsQueryable();

            if (senderId > 0 && senderId > 0)
            {
                query = query.Where(m => m.IdSenderAccount == senderId);
            }

            if (recipientId > 0 && recipientId > 0)
            {
                query = query.Where(m => m.IdRecipientAccount == recipientId);
            }

            if (minValue.HasValue && minValue.Value > 0)
            {
                query = query.Where(m => m.Amount >= minValue.Value);
            }

            if (maxValue.HasValue && maxValue.Value > 0)
            {
                query = query.Where(m => m.Amount <= maxValue.Value);
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

            var movements = await query
                .Include(m => m.SenderAccount)
                .Include(m => m.RecipientAccount)
                .ToListAsync();

            return new RequestResult
            {
                Data = movements.Select(m => new MovementResponse
                {
                    Id = m.Id,
                    Amount = m.Amount,
                    DateMovement = m.DateMovement,
                    SenderAccount = new AccountResponse
                    {
                        Id = m.SenderAccount.Id,
                        Name = m.SenderAccount.Name,
                        Balance = m.SenderAccount.Balance
                    },
                    RecipientAccount = new AccountResponse
                    {
                        Id = m.RecipientAccount.Id,
                        Name = m.RecipientAccount.Name,
                        Balance = m.RecipientAccount.Balance
                    }
                }),
                StatusCode = 200,
                Message = "Consulta realizada com sucesso"
            };
        }

        public class MovementResponse
        {
            public int Id { get; set; }
            public decimal Amount { get; set; }
            public DateTimeOffset DateMovement { get; set; }
            public AccountResponse SenderAccount { get; set; }
            public AccountResponse RecipientAccount { get; set; }
        }

        public class AccountResponse
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public decimal Balance { get; set; }
        }
    }
}
