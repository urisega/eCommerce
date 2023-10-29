const productos = [
    {
      id: '1',
      name: 'Producto 1',
      description: 'Descripción del Producto 1',
      price: 10.99,
      stock: 100,
      category:1,
    },
    {
      id: '2',
      name: 'Producto 2',
      description: 'Descripción del Producto 2',
      price: 19.99,
      stock: 50,
      category:2,
    },
    {
      id: '3',
      name: 'Producto 3',
      description: 'Descripción del Producto 3',
      price: 7.99,
      stock: 75,
      category:1,
    },
  ];



export const getProductos = () =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(productos)
        }, 500)
    })
}



export const getProductoById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(productos.find(prod =>prod.id === productId))
        }, 500)
    })
}

export const getProductosByCategory = (producategoryId) =>{
  return new Promise((resolve) => {
      setTimeout(() =>{
          resolve(productos.find(prod =>prod.category === producategoryId))
      }, 500)
  })
}