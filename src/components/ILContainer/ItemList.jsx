import React from 'react'
import { Item } from './Item'
import './itemListContainer.css'
import {products} from './products.js'
import {Container, Row} from 'react-bootstrap'

export const ItemList = ({titulo, descripcion, imagen, precio, stock}) => {
  return (
    <Container>
      <Row>
        <div className='il'>
        {
            // items.map((item)=> <Item {...item} key={item.id} /> )
            products.map((product)=>{
              
              <Item titulo={product.titulo} descripcion={product.descripcion} imagen={product.src}
               precio={product.precio} stock={product.stock}  key={product.id} />
            })
        }

        </div>
      </Row>
    </Container>
    
  )
}

