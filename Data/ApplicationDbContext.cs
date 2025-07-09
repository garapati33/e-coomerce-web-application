using Microsoft.EntityFrameworkCore;
using Ecommerce.Api.Models;
using System.Reflection; // Adjust namespace if needed

namespace Ecommerce.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            modelBuilder.Entity<Product>()
                .HasMany(p => p.Attributes)
                .WithOne(a => a.Product)
                .HasForeignKey(a => a.ProductId);


        }

        // Add DbSets
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<ProductAttribute> ProductAttributes {get;set;}





    }


   
}