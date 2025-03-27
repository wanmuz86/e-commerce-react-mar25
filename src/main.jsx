import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'

import ProductCategory from './pages/category/ProductCategory'
import Product from './pages/product/Product.jsx'
import Cart from './pages/cart/Cart.jsx'
import Home
 from './pages/home/Home.jsx'
import { RouterProvider } from 'react-router'
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
        element:<ProductCategory title="Electronics" subtitle="Collection of Electronics" image="product2.jpg"/>
      },
      {
        path:'/categories/jewelery',
        element:<ProductCategory title="Jewelery" subtitle="Collection of Jewelery" image="product3.jpg"/>
      },
      {
        path:"/categories/men's clothing",
        element:<ProductCategory title="Men's clothing" subtitle="Collection of Men's clothing" image="product1.jpg"/>
      },
      {
        path:"/categories/women's clothing",
        element:<ProductCategory title="Women's clothing" subtitle="Collection of Women's clothing" image="product2.jpg"/>
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
