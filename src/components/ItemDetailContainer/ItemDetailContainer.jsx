import React, { useEffect, useState } from 'react'
import { getfetch } from '../helpers/getfetch'
import { products } from '../ILContainer/products'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

    const[producto, setProducto] = useState ([])
    const [loading, setLoading] = useState(false)
    const {detalleId} = useParams()
    console.log(detalleId)

    useEffect(()=>{
        setLoading(true)
        getfetch
            .then(resp => setProducto(resp.find(products => products.id === detalleId)))
            .catch((err)=>console.log(err))
            .finally(()=>{
              setLoading(false)
          })
    },[detalleId])
    
  return (
    <>
        <ItemDetail producto={producto} />
        
    </>
  )
}

export default ItemDetailContainer