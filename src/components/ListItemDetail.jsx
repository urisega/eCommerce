
import { useState } from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getProductoById } from '../asyncmoc'
import ListItem from './ListItem'
import ItemDetail from './ItemDetail'
import {collection, doc, getDoc, getDocs, query, getFirestore, where, limit} from 'firebase/firestore'
import { firebaseApp } from '../main.jsx'

const ListItemDetail = () => {
  const [producto, setProducto] = useState(null)
  const {itemId} = useParams()
  useEffect(() =>{
    const db = getFirestore(firebaseApp)
    const collectionRef = collection(db, "productos")
    console.log("ItemId: ", itemId)
    const q = query(collectionRef, where('id', '==', /*itemId*/ 1))
    
    getDocs(q).then((snapshot)  =>{
      if (snapshot.size !== 0){
        const productList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        //setProducto(productList)
        setProducto(productList[0])
        
        console.log(productList[0])
      }else{
        console.log("Producto inexistente")
      }
    })  

    /*
    getProductoById(itemId)
      .then(response =>{
        setProducto(response)
      })
      .catch(error => {
        console.error(error)
      })
     */ 
  }, [])
  return (
    <>
    <div className='ItemDetailContainer'>
      <ItemDetail {...producto} />
    </div>
      {/*
      <h3>Nombre del producto: {producto.name}</h3>
      <h5>Precio: {producto.price}</h5>
      <p>Descripcion: {producto.description}</p>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad Agregada ', quantity)} />
      */}
    </>
  )
}

export default ListItemDetail