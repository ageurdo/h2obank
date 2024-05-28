using System.ComponentModel.DataAnnotations;

public class Accounts
{
    [Key]
    public int Id { get; private set; }
    public string Name { get; private set; }
    public decimal Balance { get; private set; }

    public Accounts() { }

    public Accounts(string nome, decimal balance)
    {
        Name = nome;
        Balance = balance;
    }
}
