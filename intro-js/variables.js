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
const nombre = prompt("Ingrese su nombre");
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
}

// pregunten la edad de un usuario y si es menor de edad digan q no puede acceder al sitio
// si es mayor de edad, un mensaje de bienvenida con el nombre
// si no ingresa un numero un mensaje de error o advertencia
