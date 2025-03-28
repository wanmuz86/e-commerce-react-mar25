// CartItem.js
import React from 'react'
import { useCart } from '../../context/CartContext'
import './CartItem.css' // for custom styling

const CartItem = ({ cartItem }) => {
  const { dispatch } = useCart()

  return (
    <div className="card mb-4 cart-item p-3">
      <div className="row g-0 align-items-center">
        <div className="col-md-3 text-center">
          <img
            src={cartItem.item.image}
            alt={cartItem.item.title}
            className="img-fluid rounded"
            style={{ maxHeight: '150px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{cartItem.item.title}</h5>
            <p className="card-text text-muted mb-2">USD ${cartItem.item.price.toFixed(2)}</p>

            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() =>
                  dispatch({ type: 'REMOVE_ITEM', payload: { item: cartItem.item, quantity: 1 } })
                }
              >
                −
              </button>

              <span className="quantity">{cartItem.quantity}</span>

              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() =>
                  dispatch({ type: 'ADD_ITEM', payload: { item: cartItem.item, quantity: 1 } })
                }
              >
                +
              </button>

    
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem