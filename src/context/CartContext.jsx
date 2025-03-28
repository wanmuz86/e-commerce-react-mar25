import { createContext, useReducer, useContext } from "react";

// Create context that will be used by the components
const cartContext = createContext()

// Provider where we will define the state and the actions (inside reducer)
const cartProvider = ({children}) => {

    const initialState = {
        cart:[]
    }

    const cartReducer = (state, action) => {
        switch (action.type){

            case 'ADD_ITEM':
                // If the item already in the cart, I will increase the quantity
                const existingItemIndexAdd = state.cart.findIndex(item => item.item.id === action.payload.item.id)
               
                // If Item is in the cart (If it is !== -1, it is in the cart)
                if (existingItemIndexAdd !== -1 ){
                   const updatedCart = {...state.cart};
                   // Add the quantity by 1
                   updatedCart[existingItemIndexAdd].quantity +=1
                   // Update back the cart in state
                   return {
                    ...state,
                    cart:updatedCart
                   }
                }
                else {
                    // It is not in the cart
                
                    return {
                        ...state,
                          // Add the passed item, the payload, in the cart
                        cart:[...state.cart, action.payload]
                    }
                }
                

            return;

            case 'REMOVE_ITEM':
                // If the item is in the cart,  get the index
                // Check the quantity, if  the quantity is 1 = I will remove it from the cart
                const existingItemIndexDel = state.cart.findIndex(val=>val.item.id === action.payload.item.id)
                if (existingItemIndexDel >= -1){
                    const updatedCart = {...updatedCart};
                    if (updatedCart[existingItemIndexDel].quantity > 1){
                        updatedCart[existingItemIndexDel].quantity -= 1
                        return {
                            ...state,
                            cart:updatedCart
                        }
                    }
                    else {
                        // remove the item from the cart
                        return {
                            ...state,
                            cart:state.cart.filter(val=> val.item.id !== action.payload.id)
                        }
                    }
                }

                // If not I will remove the quantity by 1
        

            case 'EMPTY_CART':
                return {
                    ...state,
                    cart:[]
                }
            default:
            return state;
        }

    }

    return state

}