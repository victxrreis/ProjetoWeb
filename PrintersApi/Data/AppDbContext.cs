using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Ticket> Tickets { get; set; }
    public DbSet<Tonner> Tonners { get; set; }
    public DbSet<Loan> Loans { get; set; }
    public DbSet<Selb> Selbs { get; set; }
    public DbSet<Printer> Printers { get; set; }
}