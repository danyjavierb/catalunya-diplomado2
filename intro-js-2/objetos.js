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
/** */
/**
 * Por Camilo Andres Barbosa Gracia
 * 
 * @param {{id:number}[]} list 
 * @param {number} id 
 */
/** */
const programadorById = (list, id) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id == id) return list[i];
  }
  return null;
}
/**/
//todos los programadores menores a una edad
/**
 * Por Camilo Andres Barbosa Gracia
 * 
 * @param {{edad:number}[]} list 
 * @param {number} edad 
 * @returns 
 */
/** */
const programadoresMenoresDeUnaEdad = (list, edad) => {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].edad < edad) result.push(list[i]);
  }
  return result;
}
/** */
// una funcion que retorne los nombres
// traerNombres(programadores) // ["Jose Moreno",...]
/**
 * 
 * @param {{nombre: string}[]} list 
 * @returns 
 */
/** */
const traerNombres = (list) => {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(list[i].nombre);
  }
  return result;
}
/** */
// buscar programadores por lenguaje
// programadoresPorLenguaje(programadores,"R") [{id: 4,...}]
/**
 * Por Camilo Andres Barbosa Gracia
 * 
 * @param {{lenguajes: string[]}} list 
 * @param {string} lang 
 * @returns 
 */
/** */
const programadoresPorLenguaje = (list, lang) => {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].lenguajes.length; j++) {
      if (list[i].languajes[j] == lang) {
        result.push(list[i]);
        break;
      }
    }
  }
  return result;
}
/** */
// funcion que retorne un array de objetos solo con
// las propiedades que se pases como parametro
// generarObjetos(programadores, ['id','nombre'])
// [ { id: "xxxx", nombre: "xxxxx"}   ]
/**
 * Por Camilo Andres Barbosa Gracia
 * @param {[]} list 
 * @param {[]} props 
 * @returns 
 */
/** */
const generarObjetos = (list, props) => {
  const result = [];
  for (let i in list) {
    const prog = {};
    for (let j in props) {
      prog[props[j]] = list[i][props[j]];
    }
    result.push(prog)
  }
  return result;
}
/** */