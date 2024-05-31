using FluentValidation;

namespace h2o_challenge.Api.Models.GetMovements
{
    public class GetMovementsInputValidator : AbstractValidator<GetMovementsInput>
    {
        public GetMovementsInputValidator() 
        {
            RuleFor(a => a.senderId).NotEqual(0).NotEmpty().NotNull();
            RuleFor(a => a.recipientId).NotEqual(0).NotEmpty().NotNull();
        }
    }
}
