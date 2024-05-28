using FluentValidation;
using h2o_challenge.Api.Models.AddCustomer;
using h2o_challenge.Application.useCases.ContaBancaria;
using h2o_challenge.Domain.Contracts.Repositories.AddAccount;
using h2o_challenge.Domain.Contracts.UseCases.AddAccount;
using h2o_challenge.Infra.Data.Context;
using h2o_challenge.Infra.Data.Repositories.AddAccount;
using System.Globalization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<IAddAccountRepository, AddAccountRepository>();
builder.Services.AddScoped<IAddAccountUseCase, AddAccountUseCase>();
builder.Services.AddScoped<IValidator<AddAccountInput>, AddAccountInputValidator>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<BancoContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.MapControllers();

var cultureInfo = new CultureInfo("pt-BR");
CultureInfo.DefaultThreadCurrentCulture = cultureInfo;
CultureInfo.DefaultThreadCurrentUICulture = cultureInfo;


app.Run();

internal record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}

