import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Trash2, ShoppingCart, HeartCrack } from 'lucide-react'
// Apne slices ke path yahan apne project ke mutabiq adjust kar lijiyega
import { removeFromWishList } from '../Cart/WishList'
import { addToCart } from '../Cart/Cart'

function WishList() {
  const dispatch = useDispatch()
  const wishList = useSelector((state) => state.wishList.wishListItems || [])

  // Agar wishlist khali ho toh aik pyara sa empty state dikhayein
  if (wishList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <HeartCrack className="w-16 h-16 text-gray-400 mb-4 animate-bounce" />
        <h2 className="text-2xl font-bold text-gray-700">Your Wishlist is Empty</h2>
        <p className="text-gray-500 mt-2 text-center">Save your favorite items here so you can easily find them later!</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
        My Wishlist <span className="text-sm font-normal text-gray-500">({wishList.length} items)</span>
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishList.map((product) => (
          <div 
            key={product.id} 
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col justify-between"
          >
            {/* Image Container with Zoom Effect */}
            <div className="relative w-full h-52 bg-gray-50 overflow-hidden flex items-center justify-center p-4">
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              {/* Remove Icon Button on Top Right */}
              <button
                onClick={() => dispatch(removeFromWishList(product.id))}
                className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white shadow-md transition-colors duration-200"
                title="Remove from Wishlist"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Product Details */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 text-base line-clamp-1 group-hover:text-orange-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-lg font-bold text-gray-900 mt-1">
                  PKR {product.price}
                </p>
              </div>

              {/* Action Button (Move to Cart) */}
              <button 
                onClick={() => {
                  dispatch(addToCart(product));
                  dispatch(removeFromWishList(product.id)); // Optional: Cart me bhej kar wishlist se hata sakte hain
                }}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-2.5 px-4 rounded-xl font-medium hover:bg-orange-600 active:scale-95 transition-all shadow-md shadow-orange-500/20 text-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WishList