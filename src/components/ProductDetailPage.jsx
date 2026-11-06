import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { addToCart } from "../Cart/Cart"
import { addToWishList } from "../Cart/WishList"
import { ShoppingCart, Heart, Star, CheckCircle, Package } from 'lucide-react'

function ProductDetailPage() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    async function productDetail(){
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json();
        setProduct(data); 
      } catch (error) {
         console.log(error)
      }
    }
    productDetail();
  }, [id])

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-lg font-medium text-gray-500 animate-pulse">Product Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
        
        {/* Left Side: Product Image with Zoom/Hover effect */}
        <div className="relative bg-gray-50 rounded-2xl p-6 flex items-center justify-center border border-gray-100 group overflow-hidden">
          <img 
            src={product.thumbnail} 
            alt={product.title}
            className="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side: Product Details & Actions */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Category / Stock Badge */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold tracking-wider uppercase bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                {product.category || "Product"}
              </span>
              <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                <CheckCircle className="w-4 h-4" />
                <span>In Stock ({product.stock})</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mt-2 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
            </div>

            {/* Price */}
            <div className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-4">
              PKR {product.price}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* Add to Cart Button */}
            <button
              onClick={() => dispatch(addToCart(product))}
              className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-orange-600 active:scale-95 transition-all shadow-md shadow-orange-500/20"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Add to Wishlist Button */}
            <button
              onClick={() => dispatch(addToWishList(product))}
              className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3.5 px-6 rounded-xl font-medium hover:bg-red-50 hover:text-red-500 hover:border-red-200 border border-gray-200 active:scale-95 transition-all"
            >
              <Heart className="w-5 h-5" />
              Wishlist
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage