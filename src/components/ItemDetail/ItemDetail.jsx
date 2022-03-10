import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({producto}) => {
  
  return (
      
    <div>
      <h1>Estas en ItemDetail</h1>
        <Container>
            <Row>
                <Col>
                  <h2>Aca va la imagen del producto que debe ser leida del array "products"</h2>
                    {producto.titulo}
                </Col>
                <Col>
                    <h2>Aca va la descripcion del producto que debe ser leida del array "products"</h2>
                    <hr/>
                    <ItemCount />
                    
                    {producto.descripcion}
                </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default ItemDetail