import React from 'react'
import Item from './Item'
import './itemListContainer.css'
import {products} from './products.js'
import {Container, Row, Col} from 'react-bootstrap'

const ItemList = ({items}) => {
  return (
    <Container>
      <Row>
        
          {
                items.map((item) => <Item {...item} key={item.id} /> )
          }
        
      </Row>
    </Container>
    
  )
}
 export default ItemList
