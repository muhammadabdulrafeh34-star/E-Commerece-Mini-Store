  import React, { useEffect, useState } from 'react'
  import { useDispatch } from 'react-redux'
  import { useParams } from 'react-router-dom';
  // import AllProducts from './AllProducts';

  function ProductDetailPage() {
    // const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const {id} = useParams()
    
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
          return (<p>product Loading...</p>)
        
        }
    return (
      <div className="p-8 m-10 w-130 h-150 bg-white items-center rounded-lg shadow-md border bg-transparent">
        <img 
          src={product.thumbnail}
          alt={product.title}
          className="w-100 h-100 object-cover mb-4 rounded-lg shadow-md border"
        />
        <p className="text-black mt-2">{product.title}</p>
        <p className="text-black mt-2">PKR {product.price}</p>
        <button
          // onClick={() => dispatch(addToCart(product))}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-4"
        >
          Add to Cart
        </button>
      {/* <p className="text-gray-600 mt-2">{product.description}</p> */}
      </div>
    )
  }

  export default ProductDetailPage
