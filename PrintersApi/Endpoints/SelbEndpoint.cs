using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

public static class SelbEndpoints
{
    public static void MapSelbEndpoints(this IEndpointRouteBuilder routes)
    {

        routes.MapGet("/selbs", async (AppDbContext dbContext) => 
            await dbContext.Selbs
                .Include(s => s.Printer)
                .Include(s => s.Tonner)
                .Include(s => s.Loans)
                .Include(s => s.Tickets)
                .ToListAsync());

        routes.MapGet("/selbs/{id}", async (int id, AppDbContext dbContext) =>
            await dbContext.Selbs
                .Include(s => s.Printer)
                .Include(s => s.Tonner)
                .Include(s => s.Loans)
                .Include(s => s.Tickets)
                .FirstOrDefaultAsync(s => s.Id == id) is Selb selb
                    ? Results.Ok(selb)
                    : Results.NotFound());

        routes.MapPost("/selbs", async (Selb selb, AppDbContext dbContext) =>
        {
            dbContext.Selbs.Add(selb);
            await dbContext.SaveChangesAsync();
            return Results.Created($"/selbs/{selb.Id}", selb);
        });

        routes.MapPut("/selbs/{id}", async (int id, Selb updatedSelb, AppDbContext dbContext) =>
        {
            var selb = await dbContext.Selbs.FindAsync(id);
            if (selb is null) return Results.NotFound();

            selb.SelbValue = updatedSelb.SelbValue;
            selb.Printer = updatedSelb.Printer;
            selb.Tonner = updatedSelb.Tonner;

            await dbContext.SaveChangesAsync();
            return Results.NoContent();
        });

        routes.MapDelete("/selbs/{id}", async (int id, AppDbContext dbContext) =>
        {
            if (await dbContext.Selbs.FindAsync(id) is Selb selb)
            {
                dbContext.Selbs.Remove(selb);
                await dbContext.SaveChangesAsync();
                return Results.NoContent();
            }
            return Results.NotFound();
        });

        routes.MapPost("/selbs/{id}/addLoan", async (int id, Loan loan, AppDbContext dbContext) =>
        {
            var selb = await dbContext.Selbs.FindAsync(id);
            if (selb is null) return Results.NotFound();

            selb.AddLoan(loan);
            await dbContext.SaveChangesAsync();
            return Results.Created($"/loans/{loan.Id}", loan);
        });

        routes.MapPost("/selbs/{id}/addTicket", async (int id, Ticket ticket, AppDbContext dbContext) =>
        {
            var selb = await dbContext.Selbs.FindAsync(id);
            if (selb is null) return Results.NotFound();

            selb.AddTicket(ticket);
            await dbContext.SaveChangesAsync();
            return Results.Created($"/tickets/{ticket.Id}", ticket);
        });
    }
}
