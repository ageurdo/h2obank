using FluentValidation;

namespace h2o_challenge.Api.Models.AddCustomer
{
    public class AddAccountInputValidator : AbstractValidator<AddAccountInput>
    {
        public AddAccountInputValidator()
        {
            RuleFor(a => a.Name).NotEmpty();
            RuleFor(a => a.Balance).NotEmpty();
        }
    }
}
