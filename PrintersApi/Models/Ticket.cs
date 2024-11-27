public class Ticket
{
    public int Id { get; set; }
    public string TicketType { get; set; }
    public string ExternalLink { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? ResolvedDate { get; set; }

    // Construtor
    public Ticket(string ticketType, string externalLink)
    {
        TicketType = ticketType;
        ExternalLink = externalLink;
        CreatedDate = DateTime.Now;
    }

    // Método para resolver ticket
    public void ResolveTicket()
    {
        ResolvedDate = DateTime.Now;
    }

    // Método para verificar se o ticket está ativo
    public bool IsActive()
    {
        return !ResolvedDate.HasValue;
    }
}