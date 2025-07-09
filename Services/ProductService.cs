using Ecommerce.Api.Dtos;
using Ecommerce.Api.Models;
using Ecommerce.Api.Data;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Api.Services
{
    public class ProductService : IProductService
    {
        private readonly ApplicationDbContext _context;

        public ProductService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<ProductDto>> GetFeaturedElectronicsAsync(int count)
        {
            return await _context.Products
                .Where(p => p.Category.Name == "Electronics")
                .OrderByDescending(p => p.Id)
                .Take(count)
                .Select(p => new ProductDto
                {
                    Id = p.Id,
                    Name = p.Name,
                    Slug = p.Slug,
                    Description = p.Description,
                    Price = p.Price,
                    Stock = p.Stock,
                    ImageUrl = p.ImageUrl
                })
                .ToListAsync();
        }
    }


}


