// //operaciones tradicionales
// //creacion

const nombres = ["fredy", "Yoshua", "Dany"];
// //                   0         1        2

// // acceder a elementos de un array
// console.log(nombres[0]); // "fredy"
// console.log(nombres[1]); // "Yoshua"
// console.log(nombres[nombres.length - 1]); // "dany"
// console.log(nombres.length); // 3

// iteracion sobre un array
// imperativa
// olorosa
// tender a ser riesgoso

for (let index = 0; index < nombres.length; index++) {
  const element = nombres[index];
  //console.log(index, element);
}

// declarativo

const imprimir = (nombre, i) => {
  // console.log(nombre);
};

nombres.forEach(imprimir);

//agregar elementos al final del array
nombres.push("Susana");

//eliminar elemantos al inicio
const eliminadoInicio = nombres.shift();
console.log(`eliminamos a ${eliminadoInicio}`);

// eliminar un elemento al final
const eliminadoFinal = nombres.pop();
console.log(`eliminamos a ${eliminadoFinal}`);

// encontrar un indice

const indiceDany = nombres.indexOf("Dany");

//eliminar un elemento conociendo su indice
const eliminarDany = nombres.splice(indiceDany, 1);
console.log(`eliminamos a ${eliminarDany}`);

// string a un arreglo
const frase = "un string con espacios";
const arrayFrase = frase.split(" "); // ["un","string","con","espacios"]

// de array a string

const nuevaFrase = arrayFrase.join(" "); // "un string con espacios"
