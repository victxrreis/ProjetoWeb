public class Ticket
{
    public int Id { get; set; }
    public string TicketType { get; set; }
    public string ExternalLink { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? ResolvedDate { get; set; }

    public Ticket(string ticketType, string externalLink)
    {
        TicketType = ticketType;
        ExternalLink = externalLink;
        CreatedDate = DateTime.Now;
    }

    public void ResolveTicket()
    {
        ResolvedDate = DateTime.Now;
    }

    public bool IsActive()
    {
        return !ResolvedDate.HasValue;
    }
}