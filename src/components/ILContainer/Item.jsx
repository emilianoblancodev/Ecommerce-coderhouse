import React from 'react'
import './itemListContainer.css'
import {Card, Badge, Button} from 'react-bootstrap'
import ItemList  from './ItemList'
import top from '../../img/top.png'


const Item = ({titulo, descripcion, src, precio, stock}) => {
  return (
    <>
        <Card style={{ width: '20rem', margin:'20px', text: 'center' }}>
          <Card.Img variant="top" src={src} />
            <Card.Body>
              <Card.Title className='text-center'>{titulo}</Card.Title>
              <Card.Text>{descripcion}</Card.Text>
                <div className='d-inline-flex'>
                  <h2><Badge bg="danger">${precio}</Badge></h2>
                <h6 className='mx-5 my-2'><Badge bg="success">Stock:{stock}</Badge></h6>
                </div>
                  <div className="d-grid gap-2">
                    <Button size="lg" variant="warning">Detalles del Producto</Button>
                  </div>
            </Card.Body>
        </Card>
    </>
    

        // <div className='container item'>
        //     <div className='titulo'>{titulo}</div>  
        //     <img src={imagen} alt={titulo} />
        //     <div className='descripcion'>{descripcion}</div>  
        //     <button>Detalles</button>
        //     <div className='precio'>${precio}</div>
        // </div>
      
        
  )
}

export default Item