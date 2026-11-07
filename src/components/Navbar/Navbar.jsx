import React from 'react'
import { Link } from "react-router-dom";
import Input from "../Input"; 
import Sort from '../Sort'; 
import { ShoppingCart, Heart, Home } from 'lucide-react';

function Navbar({ inputValue, setInputValue, sortOption, setSortOption }) {
  return (
    <nav className="bg-gray-100 border border-gray-100 px-3 sm:px-6 py-2.5 sm:py-3 mx-auto shadow-xl rounded-2xl max-w-7xl my-2 backdrop-blur-md">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3 sm:gap-4">
        
        {/* Left Side: Home Icon */}
        <div className="flex items-center shrink-0">
          <Link
            to="/"
            className="p-2 sm:p-2.5 rounded-xl bg-gray-800 hover:bg-orange-600 text-gray-200 hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center"
            title="Home"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 hover:text-white" />
          </Link>
        </div>

        {/* Center: Search Input */}
        <div className="order-3 md:order-2 w-full md:w-auto flex-1 max-w-md mx-auto flex justify-center">
          <div className="w-full text-white">
            <Input inputValue={inputValue} setInputValue={setInputValue} />
          </div>
        </div>

        {/* Right Side: Sort + Cart & Wishlist Icons */}
        <div className="order-2 md:order-3 flex items-center gap-2 sm:gap-3 relative z-50 shrink-0">
          {/* Sort Component */}
          {setSortOption && (
            <div className="w-auto relative max-w-[130px] sm:max-w-none">
              <Sort sortOption={sortOption} setSortOption={setSortOption} />
            </div>
          )}

          {/* Cart Icon Only */}
          <Link
            to="/Cart"
            className="p-2 sm:p-2.5 rounded-xl bg-gray-800 hover:bg-orange-600 text-gray-200 hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center"
            title="Cart"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 hover:text-white" />
          </Link>

          {/* Wishlist Icon Only */}
          <Link
            to="/WishList"
            className="p-2 sm:p-2.5 rounded-xl bg-gray-800 hover:bg-orange-600 text-gray-200 hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center"
            title="Wishlist"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 hover:text-white" />
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar