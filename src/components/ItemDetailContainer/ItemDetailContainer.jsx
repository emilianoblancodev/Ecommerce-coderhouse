import React, { useEffect, useState } from 'react'
import { getfetch } from '../helpers/getfetch'
import { products } from '../ILContainer/products'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const[producto, setProducto] = useState ({})

    useEffect(()=>{
        getfetch
            .then(resp => setProducto(resp.find(products => products.id === 1)))
    },[])
  return (
    <>
        <ItemDetail producto={producto} />
    </>
  )
}

export default ItemDetailContainer