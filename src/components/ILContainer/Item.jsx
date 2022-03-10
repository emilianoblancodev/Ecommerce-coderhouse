import React from 'react'
import './itemListContainer.css'
import {Card, Badge, Button, Container} from 'react-bootstrap'
import ItemList  from './ItemList'
import ILContainer from './ILContainer'
import top from '../../img/top.png'
import {Link} from 'react-router-dom'
import { products } from './products.js'

const Item = ({id, titulo, descripcion, imagen, precio, genero, stock}) => {
  return (
    <>
        <Card style={{ width: '20rem', margin:'20px', text: 'center' }}>
          <Card.Img variant="top" src={imagen} />
            <Card.Body className="text-center">
              <Card.Title >{titulo}</Card.Title>
              <Card.Text>{descripcion}</Card.Text>
                <div className='d-inline-flex mt-3 mx-4'>
                  <h2><Badge bg="danger">${precio}</Badge></h2>
                <h6 className='mx-4 my-2'><Badge bg="success">Stock:{stock}</Badge></h6>
          
                </div>
                  <div className="d-grid gap-2">
                    <Link to={`detalle/${id.id}`}>
                      <Button size="lg" variant="warning">Detalles del Producto</Button>
                    </Link>
                  </div>
                  <div>
                    <h6 className='mx-5 mt-2 d-inline-flex'><Badge bg="success">Genero: {genero}</Badge></h6>
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