import './App.css'
import AllProducts from './components/AllProducts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetailPage from "./components/ProductDetailPage"

const router = createBrowserRouter([
  {
    path:"/",
  // element:<RootLayout/>,
  children:[
    {
    path: "/",
    element: <AllProducts/>
    },
    {
      path: "ProductDetailPage/:id",
      element: <ProductDetailPage/>
    }
  ]
  }
])
  
function App() {

  return (  
   <RouterProvider router={router}/>
  )
}

export default App
