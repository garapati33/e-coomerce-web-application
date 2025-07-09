namespace Ecommerce.Api.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Slug { get; set; } // for SEO URLs
        public string Description { get; set; } = string.Empty ;
        public decimal Price { get; set; }
        public int Stock { get; set; }
        public string ImageUrl { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public List<ProductAttribute> Attributes { get; set; } = new();
    }

}