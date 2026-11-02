import React from 'react'
import { Search } from 'lucide-react'
import { useState } from 'react'

function Input({ inputValue, setInputValue }) {
  
        //  console.log("getProduct in Input.jsx:", getProduct); // Debugging line to check the value of getProduct
        //  console.log(getProduct?.products); // Debugging line to check the products array
    // Function ka naam 'Search' se change karke 'filterProducts' ya kuch aur rakh dein
    
  return (
      <>
    <div className="flex items-center justify-center h-10">
      <div className="flex items-center gap-2 border border-gray-300 w-150 rounded-md px-3 py-2">
        {/* Search Icon - Ab yeh lucide-react wala component sahi se render hoga */}
        <Search className="text-gray-900 shrink-0 w-5 h-5" />
        
        {/* Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search here..."
          className="w-full outline-none bg-transparent text-gray-700"
        />
      </div>
    </div>
    </>
    
  )
}

export default Input