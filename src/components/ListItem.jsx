import {Link} from 'react-router-dom'

const ListItem = ({producto}) => {
  const {id, name, description, price} = producto;
    return (
    <div>
    <h2>Codigo del producto: {id}</h2>
    <h3>Nombre del producto: {name}</h3>
    <h5>Precio: {price}</h5>
    <p>Descripcion: {description}</p>
    <footer>
      <Link to={`/item/${id}`}>Ver Detalle</Link>
    </footer>
    </div>
  )
}

export default ListItem




