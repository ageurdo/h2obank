using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace h2o_challenge.Api.Models.Error
{
    public class CustomValidationFailure
    {
        public CustomValidationFailure(string propertyName, string errorMessage)
        {
            PropertyName = propertyName;
            ErrorMessage = errorMessage;
        }

        public string PropertyName { get; set; }
        public string ErrorMessage{ get; set; }

        
    }
}
