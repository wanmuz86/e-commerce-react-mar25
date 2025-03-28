// Cart.js
import React from 'react'
import './Cart.css'
import { useCart } from '../../context/CartContext'
import CartItem from '../../components/cart-item/CartItem'

const Cart = () => {
  const { state, dispatch, totalPrice } = useCart()

  return (
    <div className="container py-4">
      <h2 className="mb-4">🛒 Your Cart</h2>
      {state.cart.length === 0 ? (
        <div className="alert alert-info">No item in the cart yet. Start shopping now!</div>
      ) : (
        <div>
          {state.cart.map((val) => (
            <CartItem key={val.item.id} cartItem={val} />
          ))
          
          }
           <h4>Total Price: USD {totalPrice.toFixed(2)}</h4>
       <button className="btn btn-outline-secondary" onClick={()=> dispatch({type:"EMPTY_CART"})}>Empty Cart</button>
        </div>
      )}
     
    </div>
  )
}

export default Cart