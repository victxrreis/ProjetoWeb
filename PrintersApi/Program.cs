using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configuração para ignorar ciclos de referência no JSON
builder.Services.Configure<Microsoft.AspNetCore.Http.Json.JsonOptions>(options => 
    options.SerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles
);

// Configuração para usar banco de dados em memória
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("InMemoryDb"));

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod());
});


var app = builder.Build();

app.UseCors("AllowAllOrigins");

app.UseSwagger();
app.UseSwaggerUI();

app.MapLoanEndpoints();
app.MapPrinterEndpoints();
app.MapSelbEndpoints();
app.MapTicketEndpoints();
app.MapTonnerEndpoints();

app.Run();