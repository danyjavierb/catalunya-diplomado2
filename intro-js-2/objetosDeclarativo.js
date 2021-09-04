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

// traer programador por id
const traerProgramadorId = (id) => programadores.find((prod) => prod.id == id);
//console.log(traerProgramadorIdFilter(1));

// traer programadores menores a una edad

const traerProgramadoresMenoresA = (edad) =>
  programadores.filter((prog) => prog.edad < edad);
//console.log(traerProgramadoresMenoresA(26));

const traerNombresProgramadores = programadores.map((prog) => prog.nombre);
//console.log(traerNombresProgramadores);

// reduce
// sumar todas las edades de los programadores

const edadesProgramadores = programadores.reduce((acc, curr) => {
  acc += curr.edad;
  return acc;
}, 0);

// console.log(edadesProgramadores);

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

//susana
const calcularPrecioOrden = (idBuscar) => {
  let precio = 0;
  const orden = ordenes.find((o) => {
    return o.id == idBuscar;
  });

  orden.productos.forEach((element) => {
    const prod = productos.find((p) => {
      return p.id == element.idProducto;
    });
    precio += prod.precio * element.cantidad;
  });

  return precio;
};
//console.log(calcularPrecioOrden(2));
//jose moreno

const GetTotalOrder = (array, id) => {
  const order = array.find((element) => element.id == id);
  return order.productos.reduce((acc, curr) => {
    const currProduct = productos.find((prod) => prod.id == curr.idProducto);
    return (acc += currProduct.precio * curr.cantidad);
  }, 0);
};

console.log(GetTotalOrder(ordenes, 2));

// una funcion que retorne los pedidos de un usuario
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

const traerPedidosUsuario = (idUsuario) => {
  const ordenesUsuario = ordenes.filter(
    (orden) => orden.idUsuario == idUsuario
  );

  return ordenesUsuario.map((orden) => {
    return {
      ...orden,
      productos: orden.productos.map((prod) => {
        return {
          cantidad: prod.cantidad,
          producto: productos.find((pro) => pro.id == prod.idProducto),
        };
      }),
    };
  });
};
console.log(traerPedidosUsuario(1));

//Daniel Gallo

const traerPedidosUsuario = (userId) => {
  return ordenes
    .filter((order) => order.idUsuario == userId)
    .map(({ idUsuario, productos: productosOrden, ...infoOrder }) => {
      return {
        ...infoOrder,
        productos: productosOrden.map(({ idProducto, cantidad }) => {
          const productoEncontrado = productos.find(
            (pro) => pro.id === idProducto
          );
          return {
            ...productoEncontrado,
            cantidad,
            total: productoEncontrado.precio * cantidad,
          };
        }),
      };
    });
};

//funcion que retorne el promedio de gasto de un usuario

// funcion que retorne el producto mas pedido

//  funcion que retorne el usuario que mas ha gastado en nuestra app
