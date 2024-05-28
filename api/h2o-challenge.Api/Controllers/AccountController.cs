using FluentValidation;
using h2o_challenge.Api.Models.AddCustomer;
using h2o_challenge.Api.Models.Error;
using h2o_challenge.Application.useCases.ContaBancaria;
using h2o_challenge.Domain.Contracts.UseCases.AddAccount;
using Microsoft.AspNetCore.Mvc;

namespace h2o_challenge.Api.Controllers
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
        public IActionResult AddAccount(AddAccountInput input)
        {
            var validationResult = _addAccountInputValidator.Validate(input);

            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors.ToCustomValidationFailure());
            }
            var customer = new Accounts(input.Name, input.Balance);
            _addAccountUseCase.AddAccount(customer);
            return Created("", input);
        }
    }
}
