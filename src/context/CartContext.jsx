import { createContext, useReducer, useContext } from "react";

// Create context that will be used by the components
const CartContext = createContext()

// Provider where we will define the state and the actions (inside reducer)
const CartProvider = ({children}) => {

    const initialState = {
        cart:[]
    }

    const cartReducer = (state, action) => {
        switch (action.type){

            case 'ADD_ITEM':
                // If the item already in the cart, I will increase the quantity
                console.log(action.payload.item.id)
                console.log(state.cart)
                const existingItemIndexAdd = state.cart.findIndex(item => item.item.id === action.payload.item.id)
               
                // If Item is in the cart (If it is !== -1, it is in the cart)
                if (existingItemIndexAdd !== -1 ){
                   const updatedCart = [...state.cart]; // copy of array
                   // Add the quantity by 1
                   updatedCart[existingItemIndexAdd].quantity +=1
                   // Update back the cart in state
                   return {
                    ...state,
                    updatedCart
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

            case 'REMOVE_ITEM':
                // If the item is in the cart,  get the index
                // Check the quantity, if  the quantity is 1 = I will remove it from the cart
                const existingItemIndexDel = state.cart.findIndex(val=>val.item.id === action.payload.item.id)
                if (existingItemIndexDel >= -1){
                    const updatedCart = [...state.cart];
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
                            cart:state.cart.filter(val=> val.item.id !== action.payload.item.id)
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

const [state,dispatch]  = useReducer(cartReducer, initialState)

// What is Derived/Computed State?
// Derived state is any data that isn't stored directly in the state, 
//but is calculated from the existing state. 
//You're not storing totalPrice or totalItemsInCart in the state object directly — 
// you're computing them based on state.cart.


const totalItemsInCart = state.cart.reduce((acc,val)=> acc+val.quantity, 0)
const totalPrice = state.cart.reduce((acc,val) => acc + (val.item.price * val.quantity)+acc,0)

return (
    <CartContext.Provider value={{state,dispatch, totalItemsInCart, totalPrice}}>
        {children}
    </CartContext.Provider>
)
}

// Create the custom hook to check the usage of reducer and state within the <CartProvider>

const useCart = () => {
    const context = useContext(CartContext);
    if (!context){
        throw new Error('useCart needs to be used in Cart Provider')
    }
    return context
}

export {CartProvider,useCart}