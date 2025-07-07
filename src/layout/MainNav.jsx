import React from "react";

const navItems = [
  "Amazon Haul",
  "Medical Care",
  "Saks",
  "Best Sellers",
  "Amazon Basics",
  "New Releases",
  "Registry",
  "Groceries",
  "Today's Deals",
  "Music",
  "Gift Cards",
  "Smart Home",
  "Prime",
  "Customer Service",
  "Books",
  "Pharmacy",
  "Luxury Stores",
  "Fashion",
];

const MainNav = () => {
  return (
    <nav className="bg-[#232F3E] text-white text-sm px-4 py-2 overflow-x-auto">
      <ul className="flex space-x-6 whitespace-nowrap">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="hover:underline cursor-pointer transition duration-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
