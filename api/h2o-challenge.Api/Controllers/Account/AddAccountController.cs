using FluentValidation;
using h2o_challenge.Api.Models.AddAccount;
using h2o_challenge.Api.Models.Error;
using h2o_challenge.Domain.Contracts.UseCases.AddAccount;
using h2o_challenge.Domain.Results;
using Microsoft.AspNetCore.Mvc;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace h2o_challenge.Api.Controllers.Account
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddAccountController : ControllerBase
    {
        private readonly IAddAccountUseCase _addAccountUseCase;
        private readonly IValidator<AddAccountInput> _addAccountInputValidator;

        public AddAccountController(IAddAccountUseCase addAccountUseCase, IValidator<AddAccountInput> addAccountInputValidator)
        {
            _addAccountUseCase = addAccountUseCase;
            _addAccountInputValidator = addAccountInputValidator;
        }

        [HttpPost]
        public async Task<IActionResult> AddAccount(AddAccountInput input)
        {
            try
            {
                var validationResult = _addAccountInputValidator.Validate(input);

                if (!validationResult.IsValid)
                {
                    return BadRequest(validationResult.Errors.ToCustomValidationFailure());
                }
                var customer = new Accounts(input.Name, input.Balance);
                var response = await _addAccountUseCase.AddAccount(customer);

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
