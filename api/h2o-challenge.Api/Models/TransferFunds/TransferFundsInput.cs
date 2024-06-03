namespace h2o_challenge.Api.Models.TransferFunds
{
    public class TransferFundsInput
    {
        public int Sender { get; set; } = 0;
        public string Recipient { get; set; } = "";
        public decimal Amount { get; set; } = decimal.Zero;
    }
}
