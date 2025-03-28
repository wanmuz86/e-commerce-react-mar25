import React, { use } from 'react'
import './Cart.css'
import { useCart } from '../../context/CartContext'

const Cart = () => {
  const {state, dispatch} = useCart()

  return (
    <div className='container'>
      <h2>Cart</h2>
      {
        state.cart?.length === 0 ?
        <p>No item in the cart yet. Start shopping now!</p>
        :
        <div>
          {
            state.cart?.map(val=><p>{val.item.title} - {val.quantity}</p>)
          }
        </div>
      }
    </div>
  )
}

export default Cart