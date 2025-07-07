import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ title, imageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to category page on click
    navigate(`/category/${encodeURIComponent(title)}`);
  };

  return (
    <div
      onClick={handleClick}
      className="min-w-[200px] h-[240px] bg-white rounded-2xl p-4 flex flex-col items-center justify-between shadow-lg cursor-pointer hover:shadow-xl transition"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-32 h-32 object-contain rounded-lg"
      />
      <h3 className="mt-4 font-medium text-lg text-center">{title}</h3>
    </div>
  );
};

export default CategoryCard;
