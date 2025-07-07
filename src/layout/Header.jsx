import React from "react";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
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
          placeholder="Search Amazon"
          className="flex-grow p-2 rounded-l-md text-white text-sm focus:outline-none"
        />
        <button className="bg-yellow-400 p-2 px-4 rounded-r-md">
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
