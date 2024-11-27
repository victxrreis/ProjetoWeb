public class Selb
{
    public int Id { get; set; }
    public string SelbValue { get; set; }
    
    // Relacionamentos (mapeamento para Printer e Tonner)
    public Printer Printer { get; set; }
    public Tonner Tonner { get; set; }

    // Coleções de empréstimos e tickets
    public List<Loan> Loans { get; set; }
    public List<Ticket> Tickets { get; set; }

    // Construtor sem parâmetros
    public Selb()
    {
        Loans = new List<Loan>();
        Tickets = new List<Ticket>();
    }

    // Construtor com parâmetros
    public Selb(int id, string selbValue, Printer printer, Tonner tonner)
    {
        Id = id;
        SelbValue = selbValue;
        Printer = printer;
        Tonner = tonner;
    }

    // Método para adicionar empréstimo
    public void AddLoan(Loan loan)
    {
        Loans.Add(loan);
    }

    // Método para adicionar ticket
    public void AddTicket(Ticket ticket)
    {
        Tickets.Add(ticket);
    }
}