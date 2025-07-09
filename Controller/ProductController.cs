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
    }


}


