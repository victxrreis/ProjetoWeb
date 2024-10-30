using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.Configure<Microsoft.AspNetCore.Http.Json.JsonOptions>(options => 
    options.SerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles
);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySQL(builder.Configuration.GetConnectionString("DefaultConnection") 
    ?? throw new InvalidOperationException("A string de conexão não pode ser nula."))
);


var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapLoanEndpoints();
app.MapPrinterEndpoints();
app.MapSelbEndpoints();
app.MapTicketEndpoints();
app.MapTonnerEndpoints();

app.Run();