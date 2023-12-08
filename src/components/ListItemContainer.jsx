import ListItem from './ListItem'
/*import {getProductos, getProductosByCategory} from '../asyncmoc'*/
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {collection, doc, getDocs, query, getFirestore, where} from 'firebase/firestore'
import { firebaseApp } from '../main.jsx'

const ListItemContainer = ({greeting}) => {
    const {categoryId} = useParams()
    /*COMENTADO 20231127    const[productos, setProductos] = useState([])*/ 
    /*

    useEffect(() =>{
      getProductosByCategory(categoryId)
        .then(response =>{
          setProductos(response)
        })
        .catch(error => {
          console.error(error)
        })
    })
    */
    
    const [productos, setProductos] = useState([])

    /*useEffect*/
    const getProductos = () =>{
      //console.log("entra sin categoria")
      const db = getFirestore(firebaseApp)
      const collectionRef = collection(db, "productos")
      
      getDocs(collectionRef).then((snapshot) =>{
        if (snapshot.size !== 0){
          const productList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          setProductos(productList)
          console.log(productList)
        }else{
          console.log("Item no encontrado")
        }
      })
    };

    const getProductosByCategory = (categoryId) =>{
      /*console.log("entra por categoria", categoryId)*/
      const db = getFirestore(firebaseApp)
      const collectionRef = collection(db, "productos")
      console.log("categoryId, ", categoryId)
      const q = query(collectionRef, where('category', '==', 1/*NO FUNCIONA!! categoryId*/))

      getDocs(q).then((snapshot)  =>{
        if (snapshot.size !== 0){
          const productList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          setProductos(productList)
          console.log(productList)
        }else{
          console.log("Categoria sin items")
        }
      })
    };

    
    useEffect(() =>{
      console.log(categoryId)
      /*const asyncFunc =*/ categoryId ? getProductosByCategory(categoryId) : getProductos()
      /*
      asyncFunc(categoryId)
        .then(response =>{
          setProductos(response)
        })
        .catch(error =>{
          console.error(error)
        }, [categoryId])
      */}, [])
    
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
        {/*console.log("size de productos", productos.size)*/}
        {productos.map(producto => <ListItem key={producto.id} producto = {producto}/>)}
    </div>
    /*voy a mapear el array. por cada producto, tiene que crear un listitem*/
  )
}

export default ListItemContainer