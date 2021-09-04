const programadores = [
    {
      id: 1,
      nombre: "Jose Moreno",
      lenguajes: ["Kotlin", "C", "js"],
      edad: 20,
      perfil: () => "Programador joven backend",
    },
    {
      id: 2,
      nombre: "Dany Bautista",
      lenguajes: ["Kotlin", "js", "java"],
      edad: 30,
      perfil: () => "Programador backend",
    },
    {
      id: 3,
      nombre: "Sandra Vergara",
      lenguajes: ["js", "ts", "reScript"],
      edad: 25,
      perfil: () => "Programadora frontend",
    },
    {
      id: 4,
      nombre: "Susana Aguilera",
      lenguajes: ["python", "scala", "js", "R"],
      edad: 28,
      perfil: () => "programadora big data y ML",
    },
  ];
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

const calcularPrecioOrden = (idOrden, ordenes, productos) => { 
    
    const orden = ordenes.filter((ord) => ord.id == idOrden);

    orden.productos.forEach(element => {
        const produc = element.filter((prod) => prod.productos == orden.productos);
    });

    
    /*const precioTotal = productos.reduce((acc, curr) => {
        acc += curr.precio * ;
        
        return acc;
      }, 0);*/
      return {  id: idOrden,
                precioTotal : 0
             };             
};

//console.log(calcularPrecioOrden(1,ordenes, productos));

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
const traerPedidosUsario = (idUsuario) => {     
    const pedidos = ordenes.filter((ord) => ord.idUsuario == idUsuario);
    let result = [];
    pedidos.forEach(element => {
        result = {
            id: element.id,
            idUsuario: idUsuario,
            productos: productos.filter((prod) => prod.id == element.idProducto)
        };
    }); 
    
    return result;
};

console.log(traerPedidosUsario(3));

//funcion que retorne el promedio de gasto de un usuario

// funcion que retorne el producto mas pedido

//  funcion que retorne el usuario que mas ha gastado en nuestra app

