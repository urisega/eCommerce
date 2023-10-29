import ListItem from './ListItem'
import {getProductos, getProductosByCategory} from '../asyncmoc'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const ListItemContainer = ({greeting}) => {
    const[productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect(() =>{
      const asyncFunc = categoryId ? getProductosByCategory : getProductos
      asyncFunc(categoryId)
        .then(response =>{
          setProductos(response)
        })
        .catch(error =>{
          console.error(error)
        }, [categoryId])
    })
    /*
    useEffect(()=>{
      getProductos()
      .then(response =>{
        setProductos(response)
      })
      .catch(error => {
        console.error(error)
      })
    },[])
    */

    return (
    <div>
      <h1>{greeting}</h1>
        {productos.map(producto => <ListItem key={producto.id} producto = {producto}/>)}
    </div>
    /*voy a mapear el array. por cada producto, tiene que crear un listitem*/
  )
}

export default ListItemContainer