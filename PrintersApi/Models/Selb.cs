public class Selb
{
    public int Id { get; set; }
    public string SelbValue { get; set; }
    public Printer Printer { get; set; }
    public Tonner Tonner { get; set; }

    public List<Loan> Loans { get; set; }
    public List<Ticket> Tickets { get; set; }

    public Selb()
    {
        Loans = new List<Loan>();
        Tickets = new List<Ticket>();
    }

    public Selb(int id, string selbValue, Printer printer, Tonner tonner)
    {
        Id = id;
        SelbValue = selbValue;
        Printer = printer;
        Tonner = tonner;
        Loans = new List<Loan>();
        Tickets = new List<Ticket>();
    }

    public void AddLoan(Loan loan)
    {
        Loans.Add(loan);
    }

    public void AddTicket(Ticket ticket)
    {
        Tickets.Add(ticket);
    }
}