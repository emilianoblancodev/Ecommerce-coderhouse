import React, { useContext, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad'


const ItemDetail = ({producto}) => {
  const [count, setCount] = useState(null)
  
  const {AgregarCart} = useCartContext()

  const onAdd = cant => {
    console.log(cant)
    setCount(cant)
    AgregarCart({...producto, cantidad: cant})
  }
  
  return (
      
    <div>
      <h1 className="text-center mb-5">Detalle del producto</h1>
        <Container>
            <Row>
                <Col>
                    <img src={producto.imagen} alt={producto.titulo} width="500px" heigth="500px"/>
                </Col>
                <Col>
                    <h2>{producto.descripcion}</h2>
                    <hr/>
                    
                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                    {/* <Intercambiabilidad /> */}

                </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default ItemDetail