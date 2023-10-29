import {useState, useContext} from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from './CartContext'

const ItemDetail = ({id, name, category, description, price, stock}) => {
    const [quenatityAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
        const item = {id, name, price}

        addItem(item, quantity)
    }

  return (
    <>
    <header className="Header">
        <h2 className="ItemHeader">
            {name}
        </h2>
    </header>
    <section>
        <p className="Info">
            Descripcion: {description}
        </p>
        <p className="Info">
            Precio: {price}
        </p>
    </section>
    
    <footer className='ItemFooter'>
        {
            quenatityAdded > 0 ? 
            (<Link to='/cart' className='Option'>Terminar</Link>):
            (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />)
        }
    </footer>
    </>
  )
}

export default ItemDetail