import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './Cart.css'


const Cart = () => {
  const {cartList, clearCart} = useCartContext()
  
  return (
    <>
    <h2>Carrito</h2>
      {/* {cartList.map(item => <li>{item.imagen}{item.titulo}{item.precio}</li>)} */}

      {cartList.map(item => <table>
                              <tr>
                                <td>
                                  {item.imagen}
                                </td>
                                <td>
                                  {item.titulo}
                                </td>
                                <td>
                                  {item.precio}
                                </td>
                              </tr>
                            </table>
      
      )}

      <button onClick={clearCart}>Vaciar Carrito</button>
    </>
    
  )
}

export default Cart