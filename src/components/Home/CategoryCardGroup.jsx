// src/components/Home/CategoryCardGroup.jsx
import React, { useEffect, useState } from "react";
import CategoryCard from "./categoryCard";

const CategoryCardGroup = ({ title, apiEndpoint }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories, using fallback", error);
        setCategories([
          { title: "Dresses", imageUrl: "https://source.unsplash.com/240x240/?dress" },
          { title: "Shoes", imageUrl: "https://source.unsplash.com/240x240/?shoes" },
          { title: "T-Shirts", imageUrl: "https://source.unsplash.com/240x240/?tshirt" },
          { title: "Sunglasses", imageUrl: "https://source.unsplash.com/240x240/?sunglasses" },
          { title: "Bags", imageUrl: "https://source.unsplash.com/240x240/?bags" },
          { title: "Watches", imageUrl: "https://source.unsplash.com/240x240/?watch" },
          { title: "Jeans", imageUrl: "https://source.unsplash.com/240x240/?jeans" },
        ]);
      }
    };

    fetchCategories();
  }, [apiEndpoint]);

  return (
    <section className="bg-white p-6 rounded shadow mb-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-auto gap-6 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 pr-4">
        {categories.map((item, index) => (
          <CategoryCard key={index} title={item.title} imageUrl={item.imageUrl} />
        ))}
      </div>
    </section>
  );
};

export default CategoryCardGroup;
