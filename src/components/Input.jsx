  import React from 'react'
  import { Search } from 'lucide-react'

  function Input({ inputValue, setInputValue }) {
      
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