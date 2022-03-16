import React, { useState, createContext, useContext } from "react";

 const CartContext = createContext([]);

 export const useCartContext = ()=> useContext(CartContext)
 
const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList]=useState([])

    const AgregarCart = (item)=>{
      // Hay que hacer un if para preguntar si el producto esta en el array y asi que no se repita
      setCartList([...cartList, item])
    }

    const clearCart = ()=>{
      setCartList([])
    }

    return (
      <CartContext.Provider value={{
        cartList, 
        AgregarCart,
        clearCart
        }}>
            {children}
      </CartContext.Provider>
    )
 }
 
 export default CartContextProvider