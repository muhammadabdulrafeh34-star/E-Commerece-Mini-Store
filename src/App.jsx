import './App.css'
import AllProducts from './components/AllProducts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetailPage from "./components/ProductDetailPage"
import RootLayout from './components/Navbar/RootLayout' 
import CartPage from './Pages/CartPage'
import WishList from './Pages/WishList'

const router = createBrowserRouter([
  {
    path:"/",
  element:<RootLayout/>,
  children:[
    {
    path: "/",
    element: <AllProducts/>
    },
    {
      path: "ProductDetailPage/:id",
      element: <ProductDetailPage/>
    },
    {
      path: "Cart",
      element:<CartPage/>
    },
    {
    path: "WishList",
    element:<WishList/>
    },
  ]
  }
])
  
function App() {

  return (  
   <RouterProvider router={router}/>
  )
}

export default App
