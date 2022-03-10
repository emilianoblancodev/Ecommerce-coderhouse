import React from 'react'
import './itemListContainer.css'
import {Card, Badge, Button, Container} from 'react-bootstrap'
import ItemList  from './ItemList'
import ILContainer from './ILContainer'
import top from '../../img/top.png'
import {Link} from 'react-router-dom'

const Item = ({id, titulo, descripcion, src, precio,categoria, stock}) => {
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
                    <Link to={`detalle/${id.id}`}>
                      <Button size="lg" variant="warning">Detalles del Producto</Button>
                    </Link>
                    
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