import React from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useCart } from '../../context/CartContext'

const Product = () => {
  const { id } = useParams()
  const url = `https://fakestoreapi.com/products/${id}`
  const { data, error, loading } = useFetch(url)
  const {dispatch} = useCart()
  
  const addItemToCart = () => {
    dispatch({type:'ADD_ITEM', payload:{item:data,quantity:1}})
  }

  return (
    <div className="container my-5">
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-3">Loading product details...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">
          Something went wrong. Please try again.
        </div>
      ) : (
        <div className="row g-5 align-items-start product-page">
          <div className="col-md-6 text-center">
            <img
              src={data?.image}
              alt={data?.title}
              className="img-fluid product-img"
            />
          </div>

          <div className="col-md-6 card p-5">
            <h2 className="mb-3">{data?.title}</h2>
            <h4 className="text-success mb-2">USD {data?.price}</h4>
            <p className="badge bg-secondary mb-3">{data?.category}</p>
            <p className="text-muted">{data?.description}</p>
            <button className="btn btn-primary mt-3" onClick={addItemToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product