using Microsoft.AspNetCore.Mvc;
using Ecommerce.Api.Dtos;
using System.Threading.Tasks;
using System.Collections.Generic;
using Ecommerce.Api.Services;

namespace Ecommerce.Api.Controller
{

    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("hero-banner")]
        public async Task<ActionResult<List<ProductDto>>> GetHeroBannerProducts()
        {
            var products = await _productService.GetFeaturedElectronicsAsync(5);
            return Ok(products);


        }

        [HttpGet("search")]
        public async Task<ActionResult<List<ProductDto>>> SearchProducts([FromQuery] string query, [FromQuery] int limit = 20)
        {
            if (string.IsNullOrWhiteSpace(query))
            {
                return BadRequest("Query cannot be empty");
            }

            var products = await _productService.SearchProductsAsync(query, limit);
            return Ok(products);
        }
    }
}





