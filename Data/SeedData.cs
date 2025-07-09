using Bogus;
using Ecommerce.Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;
using System.Linq;

namespace Ecommerce.Api.Data
{
    public static class SeedData
    {
        public static void SeedDatabase(ApplicationDbContext context)
        {
            if (context.Categories.Any() || context.Products.Any())
                return; // Don't seed again

            Randomizer.Seed = new Random(12345); // Deterministic seeding

            // Step 1: Seed Categories
            var categories = new List<Category>
            {
                new Category { Name = "Electronics" },
                new Category { Name = "Clothing" },
                new Category { Name = "Books" },
                new Category { Name = "Home & Kitchen" },
                new Category { Name = "Fitness" }
            };

            context.Categories.AddRange(categories);
            context.SaveChanges();

            // Helper dictionary to map category name to Unsplash image search keywords
            var categoryImages = new Dictionary<string, string>
            {
                { "Electronics", "electronics" },
                { "Clothing", "fashion" },
                { "Books", "books" },
                { "Home & Kitchen", "kitchen" },
                { "Fitness", "fitness" }
            };

            // Step 2: Seed Products
            var productFaker = new Faker<Product>()
                .RuleFor(p => p.Name, f => f.Commerce.ProductName())
                .RuleFor(p => p.Slug, (f, p) => p.Name.ToLower().Replace(" ", "-"))
                .RuleFor(p => p.Description, f => f.Commerce.ProductDescription())
                .RuleFor(p => p.Price, f => f.Random.Decimal(5, 500))
                .RuleFor(p => p.Stock, f => f.Random.Int(0, 200))
                .RuleFor(p => p.CategoryId, f => f.PickRandom(categories).Id)
                .RuleFor(p => p.Attributes, f => new List<ProductAttribute>());

            var products = productFaker.Generate(20000);

            // Step 3: Assign realistic images based on category
            foreach (var product in products)
            {
                var category = categories.First(c => c.Id == product.CategoryId);
                var keyword = categoryImages[category.Name];
                var randomSuffix = Guid.NewGuid().ToString().Substring(0, 8);
                product.ImageUrl = $"https://source.unsplash.com/300x300/?{keyword}&sig={randomSuffix}";
            }

            // Step 4: Generate Attributes for each product
            var attributeFaker = new Faker<ProductAttribute>()
                .RuleFor(a => a.Key, f => f.Commerce.ProductAdjective())
                .RuleFor(a => a.Value, f => f.Commerce.Color());

            foreach (var product in products)
            {
                var attributeCount = new Random().Next(1, 4);
                for (int i = 0; i < attributeCount; i++)
                {
                    var attr = attributeFaker.Generate();
                    attr.Product = product;
                    product.Attributes.Add(attr);
                }
            }

            context.Products.AddRange(products);
            context.SaveChanges();
        }
    }
}
