import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({producto}) => {
  
  return (
      
    <div>
      <h1 className="text-center mb-5">Detalle del producto</h1>
        <Container>
            <Row>
                <Col>
                    {producto.imagen}
                </Col>
                <Col>
                    <h2>{producto.descripcion}</h2>
                    <hr/>
                    <ItemCount />
                    

                </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default ItemDetail