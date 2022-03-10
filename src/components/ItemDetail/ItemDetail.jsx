import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'


const ItemDetail = (producto) => {
  
  return (
      
    <div>
      <h1>Estas en ItemDetail</h1>
        <Container>
            <Row>
                <Col>
                    {producto.titulo}
                </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default ItemDetail