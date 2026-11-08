import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
// mobile ki wajah se: route track karne ke liye useLocation import kiya hai
import Input from "../Input"; 
import Sort from '../Sort'; 
// mobile ki wajah se: mobile search toggle ke liye Search aur X icons import kiye hain
import { ShoppingCart, Heart, Home, Search, X } from 'lucide-react';

function Navbar({ inputValue, setInputValue, sortOption, setSortOption }) {
  // mobile ki wajah se: current URL check karne ke liye taake detail page par navbar hide ho sake
  const location = useLocation();

  // mobile ki wajah se: mobile screen par search box open/close karne ke liye local state
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  // mobile ki wajah se: agar user Product Detail Page par ho toh Navbar bilkul render na ho
  if (location.pathname.includes('/ProductDetailPage')) {
    return null; 
  }

  return (
    <nav className="bg-gray-100 border border-gray-100 px-3 sm:px-6 py-2.5 sm:py-3 mx-auto shadow-xl rounded-2xl max-w-7xl my-2 backdrop-blur-md">
      {/* mobile ki wajah se: elements screen se bahar na jayen is liye flex-wrap aur tight gaps rakhe hain */}
      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        
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

        {/* Center: Search Input (Desktop/Tablet par direct dikhega) */}
        {/* mobile ki wajah se: mobile screens par default search bar bada space leta hai is liye yahan hidden karke toggle banaya hai */}
        <div className="hidden md:flex flex-1 max-w-md mx-auto justify-center">
          <div className="w-full text-white">
            <Input inputValue={inputValue} setInputValue={setInputValue} />
          </div>
        </div>

        {/* Right Side: Sort + Icons */}
        <div className="flex items-center gap-1.5 sm:gap-3 relative z-50 shrink-0">
          
          {/* mobile ki wajah se: Mobile par search bar ki jagah ek chhota sa search icon show hoga jisko click karne par input khulega */}
          <button
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="md:hidden p-2 rounded-xl bg-gray-800 text-orange-400 hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center shadow-sm"
            title="Search"
          >
            {showMobileSearch ? <X className="w-4 h-4 text-white" /> : <Search className="w-4 h-4 text-orange-400" />}
          </button>

          {/* Sort Component */}
          {setSortOption && (
            <div className="w-auto relative max-w-[110px] sm:max-w-none">
              {/* mobile ki wajah se: Sort dropdown ko mobile par compact width di hai taake text aapas mein chipke nahi */}
              <Sort sortOption={sortOption} setSortOption={setSortOption} />
            </div>
          )}

          {/* Cart Icon */}
          <Link
            to="/Cart"
            // mobile ki wajah se: padding aur icon size ko responsive banaya hai taake cart option mobile par kabhi gayab na ho
            className="p-2 sm:p-2.5 rounded-xl bg-gray-800 hover:bg-orange-600 text-gray-200 hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center"
            title="Cart"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 hover:text-white" />
          </Link>

          {/* Wishlist Icon */}
          <Link
            to="/WishList"
            // mobile ki wajah se: Wishlist aur Cart ke darmiyan proper gap (`gap-1.5 sm:gap-3`) rakha hai taake yeh aapas mein chipke nahi
            className="p-2 sm:p-2.5 rounded-xl bg-gray-800 hover:bg-orange-600 text-gray-200 hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center"
            title="Wishlist"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 hover:text-white" />
          </Link>
        </div>

        {/* mobile ki wajah se: Jab mobile par chhota search icon click hoga, tab yeh input field poori width ke sath samne open ho jayegi */}
        {showMobileSearch && (
          <div className="w-full md:hidden mt-2 pt-2 border-t border-gray-200 animate-fadeIn">
            <Input inputValue={inputValue} setInputValue={setInputValue} />
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar