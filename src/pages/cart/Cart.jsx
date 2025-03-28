import React, { use } from 'react'
import './Cart.css'
import { useCart } from '../../context/CartContext'
import CartItem from '../../components/cart-item/CartItem'

const Cart = () => {
  const {state, dispatch} = useCart()

  return (
    <div className='container py-3'>
      <h2>Cart</h2>
      {
        state.cart.length === 0 ?
        <p>No item in the cart yet. Start shopping now!</p>
        :
        <div>
          {
            state.cart.map(val=>
           <CartItem key={val.item.id} cartItem={val}/>
            )
          }
        </div>
      }
    </div>
  )
}

export default Cart