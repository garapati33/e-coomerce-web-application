using System.Collections.Generic;

namespace Ecommerce.Api.Models
{
    public class ProductAttribute
    {
        public int Id { get; set; }

        public int ProductId { get; set; } 
       
        public Product Product { get; set; } = null!;

     
        public string Key { get; set; } 

        public string Value { get; set; } = string.Empty;

 
    }


}