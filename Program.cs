using Microsoft.EntityFrameworkCore;
using Ecommerce.Api.Data;
using Ecommerce.Api.Services;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Register ApplicationDbContext with PostgreSQL
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Register services (DI container)
builder.Services.AddScoped<IProductService, ProductService>();

// Add controllers
builder.Services.AddControllers();

// Register CORS policy (before building the app)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Seed the database during startup (for dev only)
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    dbContext.Database.EnsureCreated(); // Not recommended for production
    SeedData.SeedDatabase(dbContext);
}

// Use middleware
app.UseHttpsRedirection();
app.UseCors("AllowFrontend");
app.UseAuthorization();

// Map controllers
app.MapControllers();

// Simple health check
app.MapGet("/", () => "API Running");

app.Run();
