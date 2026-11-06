import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import getProduct from "../Api/ProductsApi"
import Input from './Input'
import { useOutletContext } from 'react-router-dom'
import { Search, SlidersHorizontal, PackageX, Star } from 'lucide-react'

function AllProducts() {
  const [product, setProduct] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
 const { inputValue, sortOption } = useOutletContext() || {};

  const filterProducts = () => {
    const results = (product?.products || []).filter((item) =>
      (item.title || '').toLowerCase().includes(inputValue.toLowerCase())
    );
    return results;
  }

  const sortProducts = (products, option) => {
    if (!option) return products;
    const sorted = [...products].sort((a, b) => {
      if (option.value === 'price-asc') {
        return a.price - b.price;
      }
      if (option.value === 'price-desc') {
        return b.price - a.price;
      }
      if (option.value === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });
    return sorted;
  };

  useEffect(() => {
    async function fetchProducts(){
      try {
        const data = await getProduct();
        setProduct(data);
      } catch(error) {
        setError("Get Product API is not working");
      } finally {
        setLoading(false);  
      }
    }
    fetchProducts();
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-lg font-medium text-gray-500 animate-pulse">Products Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-red-500 font-semibold text-lg">{error}</p>
      </div>
    );
  }

  const finalProducts = sortProducts(filterProducts(), sortOption);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <div className="w-full md:w-1/2">
          <Input inputValue={inputValue} setInputValue={setInputValue} />
        </div>
        <div className="w-full md:w-auto">
          <Sort sortOption={sortOption} setSortOption={setSortOption} />
        </div>
      </div> */}
        <div>
        </div>
      {/* Products Grid */}
      {finalProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh]">
          <PackageX className="w-16 h-16 text-gray-400 mb-4 animate-bounce" />
          <h2 className="text-xl font-bold text-gray-700">Products Not Found</h2>
          <p className="text-gray-500 mt-1">Try searching for something else!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {finalProducts.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col justify-between"
            >
              <Link to={`/ProductDetailPage/${item.id}`} className="flex flex-col h-full">
                
                {/* Product Image with Hover Zoom */}
                <div className="relative w-full h-52 bg-gray-50 overflow-hidden flex items-center justify-center p-4">
                  <img 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                    src={item.thumbnail || item.images[0]} 
                    alt={item.title}
                  />
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h2 className="font-semibold text-gray-800 text-base line-clamp-1 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h2>
                    
                    {/* Rating if available */}
                    {item.rating && (
                      <div className="flex items-center gap-1 mt-1 text-yellow-500 text-sm">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="text-gray-600 font-medium">{item.rating}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-lg font-bold text-gray-900">
                      PKR {item.price}
                    </span>
                    <span className="text-xs bg-orange-50 text-orange-600 font-medium px-2.5 py-1 rounded-lg">
                      View Details
                    </span>
                  </div>
                </div>

              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AllProducts