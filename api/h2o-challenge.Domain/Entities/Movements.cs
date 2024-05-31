
using System.ComponentModel.DataAnnotations.Schema;

namespace h2o_challenge.Domain.Entities
{
    public class Movements
    {
        public int Id { get; set; }

        [ForeignKey("SenderAccount")]
        public int IdSenderAccount { get; set; }
        public Accounts SenderAccount { get; set; }

        [ForeignKey("RecipientAccount")]
        public int IdRecipientAccount { get; set; }
        public Accounts RecipientAccount { get; set; }

        public decimal Amount { get; set; }
        public DateTimeOffset DateMovement { get; set; }
    }
}
