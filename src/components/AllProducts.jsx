  import React from 'react'
  //hum api file import kren ge...
  import getProduct from "../Api/ProductsApi"
  //hum data ko state me rakhen ge so import state
  //api fetch use kren ge aur behtar ye hai k useEffect use kiya jy so import useEffet
  import { useState, useEffect } from 'react'
  import { Link } from 'react-router-dom'
  import Input from './Input'

  function AllProducts() {
    // hum data ko state me rakhen so create the state
    const [product, setProduct] = useState([])
    const [error, setError] = useState("")
    const[loading, setLoading] = useState(true)
    useEffect(() => {
        // hum api use krny lagy hain so no risk use try catch
          // for waiting the response for API so async await use and create the function with then name of fetch
          async function fetch(){
          try {
            const data = await getProduct();
            setProduct(data);
          } catch(error) {
          setError("get Product API is not working");
        }finally{
          setLoading(false)  
        }
      }
      fetch()
      }, [])
      if (loading) {
        return (<p>Loading...</p>)
      }
      if (error) {
        return (<p>{error}</p>)
      }
    return (

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        <input getProduct={getProduct} />
        
    {product.products?.map((item) => (
      <div 
        key={item.id} 
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
      >
        {/* Product Image */}
        <Link to={`/ProductDetailPage/${item.id}`}>
        <img                                                                             
          className="w-full h-48 object-cover bg-gray-100" 
          src={item.images[0]} 
          alt={item.title}
        />

        {/* Content Section */}
        <div className="p-4 flex flex-col bg-gray-700 flex-grow">
          <h2 className="font-semibold text-lg text-gray-900 line-clamp-1 mb-2">
            {item.title}
          </h2>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-xl font-bold text-indigo-600">
              ${item.price}

            </span>
          </div>
        </div>
        </Link>
      </div>
    ))}
  </div>
    )
  }
  export default AllProducts
