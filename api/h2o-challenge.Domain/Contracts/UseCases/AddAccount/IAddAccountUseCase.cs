using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace h2o_challenge.Domain.Contracts.UseCases.AddAccount
{
    public interface IAddAccountUseCase
    {
        void AddAccount(Accounts account);  
    }
}
