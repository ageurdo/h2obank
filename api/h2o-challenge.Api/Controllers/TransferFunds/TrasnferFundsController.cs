using FluentValidation;
using h2o_challenge.Api.Models.Error;
using h2o_challenge.Api.Models.TransferFunds;
using h2o_challenge.Domain.Contracts.UseCases.TransferFunds;
using Microsoft.AspNetCore.Mvc;

namespace h2o_challenge.Api.Controllers.TransferFunds
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransferFundsController : ControllerBase
    {
        private readonly ITransferFundsUseCase _transferFundsUseCase;
        private readonly IValidator<TransferFundsInput> _transferFundsInputValidator;

        public TransferFundsController(ITransferFundsUseCase transferFundsUseCase, IValidator<TransferFundsInput> transferInputValidator)
        {
            _transferFundsUseCase = transferFundsUseCase;
            _transferFundsInputValidator = transferInputValidator;
        }

        [HttpPost]
        public async Task<IActionResult> TransferFunds(TransferFundsInput input)
        {
                try
                {
                    var validationResult = _transferFundsInputValidator.Validate(input);

                    if (!validationResult.IsValid)
                    {
                        return BadRequest(validationResult.Errors.ToCustomValidationFailure());
                    }

                    var response = await _transferFundsUseCase.TransferFunds(input.Sender, input.Recipient, input.Amount);

                    if (response.StatusCode.ToString().StartsWith(char.ToString('2')))
                        return Ok(response);
                    else
                        return BadRequest(response);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
        }
    }
}


