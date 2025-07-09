import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = () => {
   const [searchQuery, setSearchQuery] = useState('');

   const navigate = useNavigate(); 

   const handleSearch = () => {
    if (!searchQuery.trim()) return;
    navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="bg-[#131921] text-white px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-3">
      
      {/* Logo + Location */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="w-24 h-auto object-contain"
        />
        <div className="flex items-center text-sm">
          <FaMapMarkerAlt className="mr-1 text-lg" />
          <div>
            <p className="text-gray-300 leading-none">Deliver to</p>
            <p className="font-semibold">Long Beach 90815</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-grow max-w-3xl w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products"
        className="flex-grow p-2 rounded-l-md text-black text-sm focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-yellow-400 p-2 px-4 rounded-r-md"
      >
        <FaSearch className="text-black" />
      </button>
    </div>

      {/* Right Controls */}
      <div className="flex items-center gap-6 text-sm">
        <div className="flex flex-col">
          <span className="text-gray-300 text-xs">Hello, sign in</span>
          <span className="font-bold">Account & Lists</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-300 text-xs">Returns</span>
          <span className="font-bold">& Orders</span>
        </div>
        <div className="flex items-center">
          <FaShoppingCart className="text-xl mr-1" />
          <span className="font-bold">Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
