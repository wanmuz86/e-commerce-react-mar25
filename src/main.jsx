import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import ProductCategory from './pages/category/ProductCategory'
import Product from './pages/product/Product.jsx'
import Cart from './pages/cart/Cart.jsx'
import Home from './pages/home/Home.jsx'
import { RouterProvider } from 'react-router'
import banner2 from './assets/banner2.jpg'
import banner3 from './assets/banner3.jpg'

const router = createBrowserRouter([
  {
    path:'/',   //Template
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:'/categories/electronics',
        element:<ProductCategory title="Electronics" subtitle="Collection of Electronics" image={banner2}/>
      },
      {
        path:'/categories/jewelery',
        element:<ProductCategory title="Jewelery" subtitle="Collection of Jewelery" image={banner3}/>
      },
      {
        path:"/categories/men's clothing",
        element:<ProductCategory title="Men's clothing" subtitle="Collection of Men's clothing" image={banner3}/>
      },
      {
        path:"/categories/women's clothing",
        element:<ProductCategory title="Women's clothing" subtitle="Collection of Women's clothing" image={banner2}/>
      },
      {
        path:"/products/:id",
        element:<Product/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
