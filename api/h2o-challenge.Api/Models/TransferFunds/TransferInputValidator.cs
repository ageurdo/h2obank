using FluentValidation;

namespace h2o_challenge.Api.Models.TransferFunds
{
    public class TransferFundsInputValidator : AbstractValidator<TransferFundsInput>
    {
        public TransferFundsInputValidator()
        {
            RuleFor(a => a.Sender).NotEmpty();
            RuleFor(a => a.Recipient).NotEmpty();
            RuleFor(a => a.Amount).NotEqual(0);
        }
    }
}
