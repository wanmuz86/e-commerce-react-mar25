import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css' // <- for custom styles
import {useCart} from '../../context/CartContext'

const Card = ({ product }) => {
    const {dispatch} = useCart()

    const addItemToCart = () => {
        dispatch({type:'ADD_ITEM',payload:{item:product,quantity:1}})
    }
  return (
    <div className="card product-card h-100">
      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted mb-1">{product.category}</p>
        <p className="card-text fw-bold text-primary">USD {product.price}</p>
        <div className="mt-auto d-flex gap-2">
          <Link to={`./products/${product.id}`} className="btn btn-sm btn-outline-primary w-100">
            More Detail
          </Link>
          <button className="btn btn-sm btn-primary w-100" onClick={addItemToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card