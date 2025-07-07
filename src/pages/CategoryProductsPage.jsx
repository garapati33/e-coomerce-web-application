import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryProductsPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetch
    const fetchProducts = async () => {
      try {
        // Replace this with a real API if you have one
        const response = await fetch('https://mocki.io/v1/4a9070cc-aaaa-bbbb-cccc-ddddeeeeffff');
        const data = await response.json();

        // Filter by category from param
        const filtered = data.filter(
          (item) => item.category.toLowerCase() === categoryName.toLowerCase()
        );
        setProducts(filtered);
      } catch (err) {
        console.error('Error fetching products:', err);
        // fallback
        setProducts([
          {
            id: 1,
            name: 'Sample T-Shirt',
            price: '$25',
            imageUrl: 'https://source.unsplash.com/200x200/?tshirt',
            category: categoryName,
          },
        ]);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Showing products for: <span className="text-indigo-600">{categoryName}</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProductsPage;
