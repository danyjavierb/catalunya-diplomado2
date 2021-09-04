// objetos en JS

const profesor = {
  nombre: "dany bautista",
  edad: 30,
  lenguajes: ["java", "scala", "js"],
  imprimirPres: () => {
    return " Dany es un ingeniero de software...";
  },
};

// operaciones con objetos

//acceder al valor de una llave
// console.log(profesor.nombre);
// console.log(profesor["nombre"]);
// console.log(profesor.lenguajes);

// console.log(`${profesor.nombre} escribe ${profesor.lenguajes.join(",")}`);

// obtener llaves de un objeto

//console.log(Object.keys(profesor));

//obtener valores
//console.log(Object.values(profesor));

// objetos complejos

const programadores = [
  {
    id: 1,
    nombre: "Jose Moreno",
    languajes: ["Kotlin", "C", "js"],
    edad: 20,
    perfil: () => "Programador joven backend",
  },
  {
    id: 2,
    nombre: "Dany Bautista",
    languajes: ["Kotlin", "js", "java"],
    edad: 30,
    perfil: () => "Programador backend",
  },
  {
    id: 3,
    nombre: "Sandra Vergara",
    languajes: ["js", "ts", "reScript"],
    edad: 25,
    perfil: () => "Programadora frontend",
  },
  {
    id: 4,
    nombre: "Susana Aguilera",
    languajes: ["python", "scala", "js", "R"],
    edad: 28,
    perfil: () => "programadora big data y ML",
  },
];

// function que retorne un programador por id

//todos los programadores menores a una edad

// una funcion que retorne los nombres
// traerNombres(programadores) // ["Jose Moreno",...]

// buscar programadores por lenguaje
// programadoresPorLenguaje(programadores,"R") [{id: 4,...}]

// funcion que retorne un array de objetos solo con
// las propiedades que se pases como parametro
// generarObjetos(programadores, ['id','nombre'])
// [ { id: "xxxx", nombre: "xxxxx"}   ]
