
namespace h2o_challenge.Domain.Entities
{
    public class Movements
    {
        public int Id { get; set; }
        public int IdSenderAccount { get; set; }
        public int IdRecipientAccount { get; set; }
        public decimal Amount { get; set; }
        public DateTimeOffset DateMovement { get; set; }
    }
}
