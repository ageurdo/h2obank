namespace h2o_challenge.Domain.Results
{
    public class BusinessException : Exception
    {
        public RequestResult Result { get; }

        public BusinessException(RequestResult result) : base(result.Message)
        {
            Result = result;
        }
    }
}
