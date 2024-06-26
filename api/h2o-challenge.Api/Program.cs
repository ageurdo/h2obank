using FluentValidation;
using h2o_challenge.Api.Models.AddCustomer;
using h2o_challenge.Application.useCases.AddAccount;
using h2o_challenge.Domain.Contracts.Repositories.AddAccount;
using h2o_challenge.Domain.Contracts.UseCases.AddAccount;
using h2o_challenge.Infra.Data.Repositories.AddAccount;
using h2o_challenge.Api.Models.GetAccount;
using h2o_challenge.Application.useCases.GetAccount;
using h2o_challenge.Domain.Contracts.Repositories.GetAccount;
using h2o_challenge.Domain.Contracts.UseCases.GetAccount;
using h2o_challenge.Infra.Data.Repositories.GetAccount;
using h2o_challenge.Infra.Data.Context;
using System.Globalization;
using h2o_challenge.Api.Models.AddAccount;
using h2o_challenge.Domain.Contracts.Repositories.TransferFunds;
using h2o_challenge.Infra.Data.Repositories.TransferFunds;
using h2o_challenge.Infra.Data.Repositories.GetMovements;
using h2o_challenge.Domain.Contracts.UseCases.TransferFunds;
using h2o_challenge.Application.useCases.TransferFunds;
using h2o_challenge.Api.Models.TransferFunds;
using h2o_challenge.Application.useCases.GetMovements;
using h2o_challenge.Domain.Contracts.UseCases.GetMovements;
using h2o_challenge.Api.Models.GetMovements;
using h2o_challenge.Domain.Contracts.Repositories.GetMovements;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<IAddAccountRepository, AddAccountRepository>();          
builder.Services.AddScoped<IAddAccountUseCase, AddAccountUseCase>();                
builder.Services.AddScoped<IValidator<AddAccountInput>, AddAccountInputValidator>();

builder.Services.AddScoped<IGetAccountRepository, GetAccountRepository>();
builder.Services.AddScoped<IGetAccountUseCase, GetAccountUseCase>();
builder.Services.AddScoped<IValidator<GetAccountInput>, GetAccountInputValidator>();

builder.Services.AddScoped<ITransferFundsRepository, TransferFundsRepository>();
builder.Services.AddScoped<ITransferFundsUseCase, TransferFundsUseCase>();
builder.Services.AddScoped<IValidator<TransferFundsInput>, TransferFundsInputValidator>();

builder.Services.AddScoped<IGetMovementsRepository, GetMovementsRepository>();
builder.Services.AddScoped<IGetMovementsUseCase, GetMovementsUseCase>();
builder.Services.AddScoped<IValidator<GetMovementsInput>, GetMovementsInputValidator>();

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
    app.UseExceptionHandler("/Error");

}

app.UseCors(options =>
{
    options.AllowAnyOrigin();
    options.AllowAnyMethod();
    options.AllowAnyHeader();
});


app.MapControllers();

var cultureInfo = new CultureInfo("pt-BR");
CultureInfo.DefaultThreadCurrentCulture = cultureInfo;
CultureInfo.DefaultThreadCurrentUICulture = cultureInfo;


app.Run();

internal record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}

