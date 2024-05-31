using FluentValidation;
using h2o_challenge.Api.Models.Error;
using h2o_challenge.Api.Models.GetMovements;
using h2o_challenge.Domain.Contracts.UseCases.GetMovements;
using Microsoft.AspNetCore.Mvc;

namespace h2o_challenge.Api.Controllers.Movements
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetMovements : ControllerBase
    {
        private readonly IGetMovementsUseCase _getMovementsUseCase;
        private readonly IValidator<GetMovementsInput> _getMovementsInputValidator;

        public GetMovements( IGetMovementsUseCase getMovementsUseCase, IValidator<GetMovementsInput> getMovementValidator)
        {
            _getMovementsUseCase = getMovementsUseCase; 
            _getMovementsInputValidator = getMovementValidator;
        }

        [HttpPost]
        public async Task<IActionResult> GetMovementsData(GetMovementsInput input) 
        {
            var validationResult = _getMovementsInputValidator.Validate(input);

            if (!validationResult.IsValid) 
            {
                return BadRequest(validationResult.Errors.ToCustomValidationFailure());
            }

            var response = await _getMovementsUseCase
                .GetMovements(
                    input.minValue ?? 0, 
                    input.maxValue ?? 999999999,                     
                    input.senderId, 
                    input.recipientId, 
                    input.startDate, 
                    input.endDate
                );

            if (response.StatusCode.ToString().StartsWith(char.ToString('2')))
                return Ok(response);
            else
                return BadRequest(response);

        }
    }
}
