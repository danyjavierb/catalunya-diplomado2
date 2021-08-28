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

// ejercicios

// funcion q alterne mayusculas
// mayusAlter("java") -> JaVa

function alternador(cad) {
  let palabra = [""];
  cad.forEach((element, i) => {
    if (aux % 2 == 0) {
      palabra[i] = element.toUpperCase();
    } else {
      palabra[i] = element;
    }
  });

  return palabra;
}

// let cad = alternador(prompt("ingrese un string: ").split(""));
// console.log(cad.join(""));
const alternancia = (miTexto) => {
  let buffer = "";
  for (let i = 0; i < miTexto.length; i++) {
    if (i % 2 == 0) {
      buffer += miTexto[i].toUpperCase();
    } else {
      buffer += miTexto[i].toLowerCase();
    }
  }
  return buffer;
};

// console.log(alternancia("JAVAscript"));

// const palabra = prompt("Ingrese una palabra");

// const alterneMayusculas = (letra, i) => {
//   let textoFinal = "";
//   if (i % 2 == 0) {
//     textoFinal += letra.toUpperCase();
//   } else {
//     textoFinal += letra.toLowerCase();
//   }
//   return textoFinal;
// };

// const arraypalabra = palabra.split("");

// arraypalabra.forEach(alterneMayusculas);

// alert(textoFinal);

// funcion q retorne elementos no repetidos
// noRepe([1,1,2,2,3,4]) => [3,4]
//susana

// function noRepe(arreglo) {
//   const resultado = [];
//   arreglo.forEach((elem, i) => {
//     let flag = true;
//     arreglo.forEach((indx, j) => {
//       if (elem == indx && i != j) {
//         flag = false;
//       }
//     });
//     if (flag) {
//       resultado.push(elem);
//     }
//   });
//   return resultado;
// }

// funcion que retorne elementos no repetidos
const unico = (array) => {
  let res = [];
  array.forEach((element, ind, a) => {
    if (!(a.indexOf(element) != a.lastIndexOf(element))) {
      res.push(element);
    }
  });
  return res;
};

// console.log(noRepe([1, 1, 2, 3, 4, 4]));

//dividir un array por pares e impares
//dividirArray( funcion() // true si es par) => ([1,2,3,4]) -> [[2,4],[1,3]]
const dividirArray = (arr) => {
  let pares = [];
  let impares = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      pares.push(arr[i]);
    } else {
      impares.push(arr[i]);
    }
  }
  return [pares, impares];
};
console.log("Exercise Nro. 3:", dividirArray([1, 2, 3, 4]));

const dividirParesImpares = (array) => {
  let arrayPar = [];
  let arrayImpar = [];
  let newArray = [];
  array.forEach((element) => {
    if (ParImpar(element)) {
      arrayPar.push(element);
    } else {
      arrayImpar.push(element);
    }
  });
  newArray.push(arrayPar);
  newArray.push(arrayImpar);
  return newArray;
};
const ParImpar = (numero) => {
  if (numero % 2 == 0) {
    return true;
  }
  return false;
};
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(dividirParesImpares(array));
