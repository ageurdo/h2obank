using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace h2o_challenge.Infra.Data.Context
{
    public class BancoContext : DbContext
    {
        private IConfiguration _configuraciton;

        public DbSet<Accounts> Accounts { get; set; }        

        public BancoContext(IConfiguration configuraciton, DbContextOptions options) : base(options)
        {
            _configuraciton = configuraciton?? throw new ArgumentException(nameof(configuraciton));
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var typeDatabase = _configuraciton["TypeDatabase"];
            var connectionString = _configuraciton.GetConnectionString(typeDatabase);

            if(typeDatabase == "SqlServer")
            {
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

    }
}
