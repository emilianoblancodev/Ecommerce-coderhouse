import React, {useState, useEffect} from 'react'
import { products } from './products'
import { listarArray } from './listarArray'
import  ItemList from './ItemList'
import './itemListContainer.css'
import { Container, Row, Col, Spinner } from 'react-bootstrap'


const ILContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        listarArray(products)
        .then((res)=>{
            setItems(res)
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    },[])

  return (
    
    <Container>
        <Row>
            {/* <Col> */}
                {/* <div className='d-flex justify-content-center '> */}
                    {
                        loading ? 
                            <div className='cargando'>
                            <Spinner animation="border" variant="primary" />
                            <Spinner animation="border" variant="secondary" />
                            <Spinner animation="border" variant="success" />
                            Cargando...
                            <Spinner animation="border" variant="danger" />
                            <Spinner animation="border" variant="warning" />
                            <Spinner animation="border" variant="info" />
                            </div>
                        :
                            
                        <ItemList items={items}/>
                    }    
                            {/* </div> */}
            {/* </Col> */}
        </Row>
    </Container>
    
  )
}

export default ILContainer