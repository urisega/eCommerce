import { useState } from 'react'
import {useRef} from 'react'
import {useEffect} from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ListItemContainer from './components/ListItemContainer'
import ListItemDetail from './components/ListItemDetail'
import ItemCount from './components/ItemCount'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComponentWithRouteParams from './components/ComponentWithRouteParams'
import {CartProvider} from './components/CartContext'

function App() {
  const [data, setData] = useState([])
  return (
    <>
     <div className="App">
        <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ListItemContainer productos = {data} greeting ={"Bienvenidos"} />}/>
            <Route path='/category/:categoryId' element={<ListItemContainer />}/>
            <Route path='/item/:itemId' element={<ListItemDetail />}/>
            <Route path='/user/:userId' element={<ComponentWithRouteParams />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            {/*<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad Agregada ', quantity)} />*/}
          </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
