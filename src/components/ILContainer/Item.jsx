import React from 'react'
import './itemListContainer.css'
import { products } from './products.js'
import {Card, Badge, Button} from 'react-bootstrap'
import ItemList  from './ItemList'


export const Item = ({titulo, descripcion, imagen, precio, stock}) => {
  return (

    <Card style={{ width: '20rem', margin:'20px', text: 'center' }}>
      <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
            <h2><Badge bg="danger">${precio}</Badge></h2>
              <div className="d-grid gap-2">
                <Button size="lg" variant="warning">Comprar</Button>
              </div>
        </Card.Body>
    </Card>

        // <div className='container item'>
        //     <div className='titulo'>{titulo}</div>  
        //     <img src={imagen} alt={titulo} />
        //     <div className='descripcion'>{descripcion}</div>  
        //     <button>Detalles</button>
        //     <div className='precio'>${precio}</div>
        // </div>
      
        
  )
}

