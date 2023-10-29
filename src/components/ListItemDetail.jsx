
import { useState } from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getProductoById } from '../asyncmoc'
import ListItem from './ListItem'
import ItemDetail from './ItemDetail'

const ListItemDetail = () => {
  const [producto, setProducto] = useState(null)
  const {itemId} = useParams()
  useEffect(() =>{
    getProductoById(itemId)
      .then(response =>{
        setProducto(response)
      })
      .catch(error => {
        console.error(error)
      })
  })
  return (
    <>
    <div className='ItemDetailContainer'>
      <ItemDetail {...producto} />
    </div>
    {/*}
    <h3>Nombre del producto: {name}</h3>
    <h5>Precio: {price}</h5>
    <p>Descripcion: {description}</p>
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad Agregada ', quantity)} />
  */}
    </>
  )
}

export default ListItemDetail