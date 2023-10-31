const productos = [
    {
      id: '1',
      name: 'Remera MC',
      description: 'Remera manga corta',
      price: 10.99,
      stock: 100,
      category:'1',
    },
    {
      id: '2',
      name: 'Pantalón',
      description: 'Pantalon de Jean',
      price: 19.99,
      stock: 50,
      category:'2',
    },
    {
      id: '3',
      name: 'Remera ML',
      description: 'Remera Manga Larga',
      price: 7.99,
      stock: 75,
      category:'1',
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
  console.log("entra al getcategory, ", producategoryId);
  return new Promise((resolve) => {
      setTimeout(() =>{
          resolve(productos.find(prod =>prod.category === producategoryId))
      }, 500)
  })
}