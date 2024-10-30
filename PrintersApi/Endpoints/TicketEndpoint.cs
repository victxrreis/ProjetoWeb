using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

public static class TicketEndpoints
{
    public static void MapTicketEndpoints(this IEndpointRouteBuilder routes)
    {

        routes.MapGet("/tickets", async (AppDbContext dbContext) =>
            await dbContext.Tickets.ToListAsync());

        routes.MapGet("/tickets/{id}", async (int id, AppDbContext dbContext) =>
            await dbContext.Tickets.FindAsync(id) is Ticket ticket
                ? Results.Ok(ticket)
                : Results.NotFound());

        routes.MapPost("/tickets", async (Ticket ticket, AppDbContext dbContext) =>
        {
            dbContext.Tickets.Add(ticket);
            await dbContext.SaveChangesAsync();
            return Results.Created($"/tickets/{ticket.Id}", ticket);
        });

        routes.MapPut("/tickets/{id}", async (int id, Ticket updatedTicket, AppDbContext dbContext) =>
        {
            var ticket = await dbContext.Tickets.FindAsync(id);
            if (ticket is null) return Results.NotFound();

            ticket.TicketType = updatedTicket.TicketType;
            ticket.ExternalLink = updatedTicket.ExternalLink;

            await dbContext.SaveChangesAsync();
            return Results.NoContent();
        });

        routes.MapDelete("/tickets/{id}", async (int id, AppDbContext dbContext) =>
        {
            if (await dbContext.Tickets.FindAsync(id) is Ticket ticket)
            {
                dbContext.Tickets.Remove(ticket);
                await dbContext.SaveChangesAsync();
                return Results.NoContent();
            }
            return Results.NotFound();
        });

        routes.MapPatch("/tickets/{id}/resolve", async (int id, AppDbContext dbContext) =>
        {
            var ticket = await dbContext.Tickets.FindAsync(id);
            if (ticket is null) return Results.NotFound();

            ticket.ResolveTicket();
            await dbContext.SaveChangesAsync();
            return Results.NoContent();
        });

        routes.MapGet("/tickets/{id}/isActive", async (int id, AppDbContext dbContext) =>
        {
            var ticket = await dbContext.Tickets.FindAsync(id);
            return ticket is not null ? Results.Ok(ticket.IsActive()) : Results.NotFound();
        });
    }
}
