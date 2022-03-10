import React from 'react'
import Item from './Item'
import Typing from '../Typing/Typing'
import './itemListContainer.css'
import {products} from './products.js'
import {Container, Row, Col} from 'react-bootstrap'

const ItemList = ({items}) => {
  return (
    <>
    <Typing />
    <Container>
      <Row>
        
          {
                items.map((item) => <Item {...item} key={item.id} /> )
          }
        
      </Row>
    </Container>
    </>
    
    
  )
}
 export default ItemList
