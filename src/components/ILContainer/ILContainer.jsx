import React, {useState, useEffect} from 'react'
import { products } from './products'
import { listarArray } from './listarArray'
import  ItemList from './ItemList'
import './itemListContainer.css'
import { Container, Row, Spinner } from 'react-bootstrap'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import {useParams} from 'react-router-dom'
import Carrousel from '../Carrousel/Carrousel'

const ILContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoriaId} = useParams
    useEffect(()=>{

        if(categoriaId){
            setLoading(true)
            listarArray(products)
            .then((res)=>{
                setItems(res.filter(items => items.categoria === categoriaId))
            })
            .catch((err)=>console.log(err))
            .finally(()=>{
                        setLoading(false)
            })
        }else{
            setLoading(true)
            listarArray(products)
            .then((res)=>{
                setItems(res)
            })
            .catch((err)=>console.log(err))
            .finally(()=>{
                        setLoading(false)
            })
        }

        
    },[categoriaId])

  return (
    <>
    
    <Container>
        <Row>
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
                    
        </Row>
    </Container>
    <Carrousel />
    </>  
    
    
  )
}

export default ILContainer