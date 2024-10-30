using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

public static class LoanEndpoints
{
    public static void MapLoanEndpoints(this IEndpointRouteBuilder routes)
    {
        
        routes.MapGet("/loans", async (AppDbContext dbContext) => await dbContext.Loans.ToListAsync());

        
        routes.MapGet("/loans/{id}", async (int id, AppDbContext dbContext) => 
            await dbContext.Loans.FindAsync(id) is Loan loan
                ? Results.Ok(loan)
                : Results.NotFound());

        
        routes.MapPost("/loans", async (Loan loan, AppDbContext dbContext) =>
        {
            dbContext.Loans.Add(loan);
            await dbContext.SaveChangesAsync();
            return Results.Created($"/loans/{loan.Id}", loan);
        });

        
        routes.MapPut("/loans/{id}", async (int id, Loan updatedLoan, AppDbContext dbContext) =>
        {
            var loan = await dbContext.Loans.FindAsync(id);
            if (loan is null) return Results.NotFound();

            loan.SelbValue = updatedLoan.SelbValue;
            loan.TonnerColor = updatedLoan.TonnerColor;
            loan.LoanDate = updatedLoan.LoanDate;

            await dbContext.SaveChangesAsync();
            return Results.NoContent();
        });

        
        routes.MapDelete("/loans/{id}", async (int id, AppDbContext dbContext) =>
        {
            if (await dbContext.Loans.FindAsync(id) is Loan loan)
            {
                dbContext.Loans.Remove(loan);
                await dbContext.SaveChangesAsync();
                return Results.NoContent();
            }
            return Results.NotFound();
        });

        
        routes.MapPatch("/loans/{id}/return", async (int id, AppDbContext dbContext) =>
        {
            var loan = await dbContext.Loans.FindAsync(id);
            if (loan is null) return Results.NotFound();

            loan.ReturnLoan();
            await dbContext.SaveChangesAsync();
            return Results.NoContent();
        });

        
        routes.MapGet("/loans/{id}/isActive", async (int id, AppDbContext dbContext) =>
        {
            var loan = await dbContext.Loans.FindAsync(id);
            return loan is not null ? Results.Ok(loan.IsActive()) : Results.NotFound();
        });
    }
}
