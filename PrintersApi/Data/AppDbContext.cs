using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext 
{
    public DbSet<Printer> Printers { get; set; }
    public DbSet<Tonner> Tonners { get; set; }
    public DbSet<Selb> Selbs { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {
    }
}