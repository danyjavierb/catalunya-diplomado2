const programadores = [{
    id: 1,
    nombre: "Jose Moreno",
    lenguajes: ["Kotlin", "C", "JS"],
    edad: 20,
    perfil: () => "Programador Joven backend"
},{
    id: 2,
    nombre: "Dani Bautista",
    lenguajes: ["Kotlin", "JS", "Java"],
    edad: 30,
    perfil: () => "Programador Backend"
},{
    id: 3,
    nombre: "Sandra Vergara",
    lenguajes: ["Kotlin", "C", "JS"],
    edad: 25,
    perfil: () => "Programadora Backend"
},{
    id: 4,
    nombre: "Susana Aguilera",
    lenguajes: ["Python", "Scala", "JS", "R"],
    edad: 28,
    perfil: () => "Programadora BigData y ML"
}]

//Traer programador por ID usando find

/* const GetByID = (array, id) => {
    return array.find((element) => element.id == id);
}

console.log(GetByID(programadores, 2)); */

//Trae todos los programadores menores a una edad usando filter

/* const GetByAge = (array, age) => {
    return array.filter((element) => element.edad < age);
}

console.log(GetByAge(programadores, 28)); */

// Traer los nombres de los programadores usando map
/* const GetNames = (array) => {
    return array.map((element) => element.nombre);
}

console.log(GetNames(programadores)); */

// Suma todas las edades de los estudiantes usando reduce
/* const SumEdades = (array) => {
    return array.reduce((acc, current) => {
        acc += current.edad
        return acc
    }, 0)
}

console.log(SumEdades(programadores)); */

//Ejercios

const productos = [
    {
      id: 1,
      nombre: "papitas francesas",
      precio: 5000,
    },
    {
      id: 2,
      nombre: "hamburguesa",
      precio: 10000,
    },
    {
      id: 3,
      nombre: "malteada",
      precio: 8000,
    },
  ];
  
  const ordenes = [
    {
      id: 1,
      idUsuario: 1,
      productos: [
        {
          idProducto: 1,
          cantidad: 1,
        },
        {
          idProducto: 3,
          cantidad: 2,
        },
      ],
    },
    {
      id: 2,
      idUsuario: 3,
      productos: [
        {
          idProducto: 1,
          cantidad: 1,
        },
        {
          idProducto: 2,
          cantidad: 1,
        },
        {
          idProducto: 3,
          cantidad: 1,
        },
      ],
    },
  ];
  
  // ejercicios
  
  // escribir una funcion que retorne orden con precio total
  // calcularPrecioOrden (idOrden) //2 {
  //  id: 2
  // precioTotal: 23000
  //}

/*   const GetTotalOrder = (array, id) => {
    const order = array.find((element) => element.id == id);
    return order.productos.reduce((acc, curr) => {
        product = productos.find((prod) => prod.id == curr.idProducto);
        return acc += (product.precio * curr.cantidad);
    }, 0) 
  }
  
  console.log(GetTotalOrder(ordenes, 2))
 */
  // una funcion que retornde los pedidos de un usuario
  // traerPedidosUsario (idUsuario)
  // [
  //     {
  //         id: 2,
  //         idUsuario: 3,
  //         productos: [{
  //             cantidad:1
  //             producto : {
  //                 ...
  //             }
  //         }]
  //     }
  // ]
/* 
  const GetOrderByUser = (array, id) => {
    return array.filter((order) => order.idUsuario == id).map(
        (element) => {
            return {
                ...element,
                productos: productos.map((prod) => prod.id == element.productos.find((el) => el.idProducto == prod.id))
            }
        }
    )
}

console.log(GetOrderByUser(ordenes, 3))
   */
  //funcion que retorne el promedio de gasto de un usuario

  
  // funcion que retorne el producto mas pedido
  
  //  funcion que retorne el usuario que mas ha gastado en nuestra app
  

