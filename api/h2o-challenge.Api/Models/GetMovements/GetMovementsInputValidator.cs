using FluentValidation;

namespace h2o_challenge.Api.Models.GetMovements
{
    public class GetMovementsInputValidator : AbstractValidator<GetMovementsInput>
    {
        public GetMovementsInputValidator() 
        {
            //RuleFor(a => a.recipientId).NotEmpty();
            //RuleFor(a => a.startDate).NotEmpty();
            //RuleFor(a => a.endDate).NotEmpty();
        }
    }
}
