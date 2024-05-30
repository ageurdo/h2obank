using FluentValidation;
using h2o_challenge.Api.Models.GetAccount;
using h2o_challenge.Api.Models.Error;
using h2o_challenge.Domain.Contracts.UseCases.GetAccount;
using Microsoft.AspNetCore.Mvc;
using Azure;

namespace h2o_challenge.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetAccountController : ControllerBase
    {
        private readonly IGetAccountUseCase _getAccountUseCase;
        private readonly IValidator<GetAccountInput> _getAccountInputValidator;

        public GetAccountController(IGetAccountUseCase getAccountUseCase, IValidator<GetAccountInput> getAccountInputValidator)
        {
            _getAccountUseCase = getAccountUseCase;
            _getAccountInputValidator = getAccountInputValidator;
        }

        [HttpPost]
        public async Task<IActionResult> GetAccount(GetAccountInput input)
        {
            var validationResult = _getAccountInputValidator.Validate(input);

            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors.ToCustomValidationFailure());
            }
            var response = await _getAccountUseCase.GetAccount(input.Name);

            if (response.StatusCode.ToString().StartsWith(char.ToString('2')))
                return Ok(response);
            else
                return BadRequest(response);

        }
    }
}
