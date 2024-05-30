
namespace h2o_challenge.Domain.Results
{
    public class RequestResult
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }
        public RequestResult Ok(object data)
        { 
            this.StatusCode = 200;
            this.Message = "Requisição realizada com sucesso";
            this.Data = data; 
            return this;
        }

        public RequestResult BadRequest(string detail, int statusCode = 400, object data = null)
        {
            this.StatusCode = statusCode != 400 ? statusCode : 400;
            this.Message = $"Erro: {detail}";
            this.Data= data;
            return this;

        }

    }
}
