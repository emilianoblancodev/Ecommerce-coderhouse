import React, {useState} from 'react'
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad'

const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setCantidad]= useState (initial)

    const [goToCart, setGoToCart] = useState(false)


    function res (){
        if (cantidad > 0 ){
          setCantidad (cantidad - 1)
        } 
      }

      function sum (){
        if (cantidad < stock ){
          setCantidad (cantidad + 1)
        } 
      }

      const agregar = () => {
          onAdd( cantidad )
          setGoToCart(true)
      }


  return (
    <>
    <button  className= "btn btn-warning mx-1 my-5" disabled={cantidad === 1} onClick={res} >-</button>
    <span className= "mx-3">{cantidad}</span>
    <button  className= "btn btn-warning"disabled={cantidad === stock} onClick={sum} >+</button>
    {/* <button  className= "btn btn-success mx-4"disabled={cantidad === 0} onClick={ agregar} >Agregar al carrito</button> */}
    <Intercambiabilidad />

    </>
  )
}

export default ItemCount