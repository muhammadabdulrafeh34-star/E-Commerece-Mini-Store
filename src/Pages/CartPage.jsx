import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    IncreaseQty,
    DecreaseQty,
    removeItem
} from "../Cart/Cart"; 
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'

function CartPage(){
  const dispatch = useDispatch();
  
  const cartItems = useSelector(
    (state) => state.cart.cartItems || []  
  );

  // Total price calculate karne ke liye (agar backend ya slice se total na aa raha ho)
  const total = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  // Agar Cart khali ho toh empty state dikhayein
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <ShoppingBag className="w-16 h-16 text-gray-400 mb-4 animate-bounce" />
        <h2 className="text-2xl font-bold text-gray-700">Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2 text-center">Looks like you haven't added anything to your cart yet!</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
        Shopping Cart <span className="text-sm font-normal text-gray-500">({cartItems.length} items)</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              {/* Product Thumbnail */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 rounded-xl p-2 flex-shrink-0 flex items-center justify-center border border-gray-100">
                <img 
                  src={product.thumbnail} 
                  alt={product.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Info & Controls */}
              <div className="flex-grow flex flex-col justify-between w-full">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-semibold text-gray-800 text-base sm:text-lg line-clamp-1">
                    {product.title}
                  </h3>
                  {/* Remove Button */}
                  <button 
                    onClick={() => dispatch(removeItem(product.id))}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-900 font-bold text-base sm:text-lg mt-1">
                  PKR {product.price}
                </p>

                {/* Quantity Controls & Subtotal */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                  
                  {/* Quantity Pill */}
                  <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 overflow-hidden shadow-sm">
                    <button 
                      onClick={() => dispatch(DecreaseQty(product.id))}
                      className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 active:bg-gray-300 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    
                    <span className="px-4 text-gray-800 font-semibold text-sm">
                      {product.quantity || 1}
                    </span>
                    
                    <button 
                      onClick={() => dispatch(IncreaseQty(product.id))}
                      className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 active:bg-gray-300 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Item Subtotal */}
                  <div className="text-sm font-medium text-gray-600">
                    Subtotal: <span className="font-bold text-gray-900">PKR {product.price * (product.quantity || 1)}</span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Order Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-fit sticky top-6">
          <h2 className="text-lg font-bold text-gray-800 border-b pb-3 mb-4">Order Summary</h2>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-800">PKR {total}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <div className="border-t pt-3 flex justify-between text-base font-bold text-gray-900">
              <span>Total Amount</span>
              <span className="text-orange-600">PKR {total}</span>
            </div>
          </div>

          <button 
            onClick={() => alert("Proceeding to checkout...")}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-orange-600 active:scale-95 transition-all shadow-md shadow-orange-500/20"
          >
            Proceed to Checkout
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default CartPage;