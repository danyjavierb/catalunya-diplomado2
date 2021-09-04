/* let nombre = "Susana";

let apellido = "Aguilera";

let nombreYApellido = `${nombre} ${apellido}`;
let nombreYApelidoCon = nombre + " " + apellido;

nombre = "Fernando";

nombreYApellido = `${nombre} ${apellido}`;

var otraCosa = "Otra cosa";

const variableInmutable = 2021;

variableInmutable = 2022;

const elementoSaludo = `<span>${nombreYApellido}</span>`;
 */
// funciones nativas del navegador

/* const nombreEstudiante = prompt("Ingrese su nombre por favor");

console.log(typeof nombreEstudiante); */

// Condicionales

//const edad = parseInt(prompt("ingrese edad"));
/* const nombre = prompt("Ingrese su nombre");
const edad = Number(prompt("ingrese edad"));

// if(Number.isNaN(edad)) {
//     // no ingreso un numero
// }else {
//     console.log(edad);
// }

if (!Number.isNaN(edad)) {
  alert(`el joven ${nombre} tiene ${edad} años`);
} else {
  alert("No ingresó un numero");
} */

// pregunten la edad de un usuario y si es menor de edad digan q no puede acceder al sitio
// si es mayor de edad, un mensaje de bienvenida con el nombre
// si no ingresa un numero un mensaje de error o advertencia
// Jonnatan
/* const nombre = prompt("ingrese su nombre");

const edad = Number(prompt("ingrese su edad"));

if (typeof edad === "number") {
  if (edad < 18) {
    alert("No puedes acceder");
  } else {
    alert(`Bienvenido ${nombre}`);
  }
} else {
  alert("No ingresó un numero  ${nombre}");
} */

// pregunten por un numero al usuario o muestren si es par o impar "el numero x es ???"
// en caso de no ingresar un numero un error
// Edwin V
/* const numero = parseInt(prompt("ingrese el numero"));
if (!Number.isNaN(numero)) {
  if (numero % 2 == 0) {
    alert(`${numero} es par`);
  } else {
    alert(`${numero} es impar`);
  }
} else {
  alert("No ingresó numero");
} */

// const numero1 = parseInt(prompt("ingrese primer numero"));

// const numero2 = parseInt(prompt("ingrese segundo numero"));

// if (!Number.isNaN(numero1) && !Number.isNaN(numero2)) {
//     console.log(`la suma de ${numero1} + ${numero2} = ${numero1+numero2}`)
// }

//swicht

// switch (prompt("ingrese nombre")) {
//   case "dany":
//     alert("es el profesor:");
//     break;
//   case "Alber":
//     alert("el programador:");
//     break;
//   default:
//     alert("usuario sin descripcion");
//     break;
// }

// Ejecucion condicional
// while

// let numeroCondicion = 1;
// while (numeroCondicion <= 20) {
//   console.log(numeroCondicion);
//   numeroCondicion = numeroCondicion + 1;
//   //break;
//   // numeroCondicion += 1
// }

// for
/* for (let numeroCondicion = 0; numeroCondicion < 20; numeroCondicion++) {
  if (numeroCondicion == 10) {
    console.log(numeroCondicion);
    break;
  }
} */

// for (let i = 0; i <= 10; i++) {
//   for (let j = 0; j <= 10; j++) {
//     console.log(` i:${i} j:${j}`);
//   }
// }

// una rutina que recibe un numero e imprime lo siguienten el la terminal
// user input: 7
// *  1
// **
// ***
// ****
// *****
// ******
// ******* 7
// *******
// ******
// *****
// ****
// ***
// **
// *
//Jhon Grisales
// const numero = parseInt( prompt("Ingrese un numero"));

// let imp
// imp= ""
// for (let i = 0; i < numero+1; i++) {
//     for (let j = 1; j < i; j++) {
//         imp = imp + "*";
//     }
//     console.log(imp);
//     imp = "";
// }
//  let impd
//  impd=""
// for (let i = numero+1; i > 0; i--) {
//     for (let j = i; j > 1; j--) {
//         impd = impd + "*";
//     }
//     console.log(impd);
//     impd = ""
// }

// sandra vergara

// const numero = Number(prompt("Ingrese un número"));
// const numero2 = numero * 2;
// let cad = "";
// for(let i=1; i<= numero2; i++){
//     if(i>numero){
//         cad = cad.substring(1);
//     }else{
//         cad = cad + '*';
//     }
//     console.log(cad);
// }

//Andres Gonzalez

// let numero = Number(prompt("escriba un numero"));
// for (let i = 1; i <= numero; i++) {
//   let asteriscos = "";
//   for (let j = 1; j <= i; j++) {
//     asteriscos += "*";

//     console.log(asteriscos);
//   }
// }

// for (let i = numero; i >= 1; i--) {
//   let asteriscos = "";
//   for (let j = 1; j <= i; j++) {
//     asteriscos += "*";
//   }
//   console.log(asteriscos);
// }

//Jose Moreno

// let numero = parseInt(Number(prompt("Ingrese un número")));
// if (!Number.isNaN(numero)) {
//   for (let x = 1; x <= numero; x++) {
//     console.log("*".repeat(x));
//   }
//   for (let x = numero; x >= 0; x--) {
//     console.log("*".repeat(x));
//   }
// } else {
//   alert("Debes ingresar un numero");
// }

const nivelesPiramide = parseInt(prompt("ingrese numero"));
let inicioPiramide = "";
let finalPiramide = "";
for (let as = "*"; as.length < nivelesPiramide; as += "*") {
  inicioPiramide += as + "\n";
  finalPiramide = `${as}\n` + finalPiramide;
}
console.log(inicioPiramide + finalPiramide);

// un programa que sume los multiplos de 3 y 5 hasta donde el usuario escoja
// user input: 10
//1
//2
//3 3
//4
//5 8
//6 14
//7
//8
//9 14 + 9
//10

// Edda Urdaneta
alert("Vamos a calcular un numero multiplo de 3 y 5");

let num = parseInt(prompt("Digite un numero"));
let sum = 0;
if (!Number.isNaN(num)) {
  for (let i = 0; i < num; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      console.log("num" + i);
      sum = sum + i;
      console.log("suma " + sum);
    }
  }
} else {
  alert(" ingrese un num");
}

alert(`El numero es ${num}, es multiplo del 3 y 5, la suma es ${sum}`);

/**
 * Escribe un programa que use console.log para imprimir todos los números de 1 a 100, 
 * con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, 
 * y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

   Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", 
   para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" 
   para números divisibles por solo uno de ellos).

   (Esta es en realidad una pregunta de entrevista que se ha dicho 
    elimina un porcentaje significativo de candidatos a programadores. 
    Así que si la puedes resolver, tu valor en el mercado laboral acaba de subir).
 */
// Susana Aguilera
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// ingrese n
// nxn
/*       01234567
         # # # # 0
        # # # #  1
         # # # # 2
        # # # #  3
         # # # # 4
        # # # #  5
         # # # # 6
        # # # #  7

*/
// John Dairo
const iter = Number(prompt("Ingrese el número"));
if (!Number.isNaN(iter)) {
  let buffer = "";
  for (let i = 0; i <= iter; i++) {
    for (let j = 0; j <= iter; j++) {
      if (i % 2 == 0) {
        buffer += " #";
      } else {
        buffer += "# ";
      }
    }
    console.log(`${buffer} ${i} \n`);
    buffer = "";
  }
} else {
  alert("No ingresó un número correcto");
}
