using FluentValidation.Results;
using h2o_challenge.Domain.Results;

namespace h2o_challenge.Api.Models.Error
{
    public static class ValidationFailureExtension
    {
        public static IList<CustomValidationFailure> ToCustomValidationFailure(this IList<ValidationFailure> failures)
        {
            return failures.Select(f => new CustomValidationFailure(f.PropertyName, f.ErrorMessage)).ToList();
        }
    }
}
 