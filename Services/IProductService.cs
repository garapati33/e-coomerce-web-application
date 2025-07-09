using Ecommerce.Api.Dtos;

namespace Ecommerce.Api.Services
{

    public interface IProductService
    {
        Task<List<ProductDto>> GetFeaturedElectronicsAsync(int count);
    }
}


