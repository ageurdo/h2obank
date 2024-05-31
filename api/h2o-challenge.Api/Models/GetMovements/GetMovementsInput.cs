namespace h2o_challenge.Api.Models.GetMovements
{
    public class GetMovementsInput
    {
        public decimal? minValue { get; set; } = 0;
        public decimal? maxValue{get;set;} = 0;
        public int senderId {get;set;} = 0;
        public int recipientId{get;set;} = 0;
        public DateTimeOffset? startDate { get; set; } = DateTimeOffset.Now.AddDays(-30);
        public DateTimeOffset? endDate { get; set; } = DateTimeOffset.Now;
    }
}
