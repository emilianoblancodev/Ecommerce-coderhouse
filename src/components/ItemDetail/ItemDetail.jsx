import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ItemDetail = (producto) => {
  return (

    <div>
        <Container>
            <Row>
                <Col>
                    {product.titulo}
                </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default ItemDetail