using FluentValidation;

namespace h2o_challenge.Api.Models.GetAccount
{
    public class GetAccountInputValidator : AbstractValidator<GetAccountInput>
    {
        public GetAccountInputValidator()
        {
            RuleFor(a => a.Name).NotEmpty();
        }
    }
}
