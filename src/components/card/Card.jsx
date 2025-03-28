import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
  return (
    <div className="card">
        <img src={product.image} className="card-img-top" alt="..."/>
        <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.category} - USD {product.price}</p>
    <Link to={`./product/${product.id}`} className="btn btn-primary">More Detail</Link>
    <button className="btn btn-secondary">Add to cart</button>
  </div>
</div>
  )
}

export default Card