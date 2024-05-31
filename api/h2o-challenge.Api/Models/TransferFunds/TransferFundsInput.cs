namespace h2o_challenge.Api.Models.TransferFunds
{
    public class TransferFundsInput
    {
        public int Sender { get; set; } = 0;
        public int Recipient { get; set; } = 0;
        public decimal Amount { get; set; } = decimal.Zero;
    }
}
