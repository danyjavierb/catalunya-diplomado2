// interactuar con el arbol de elementos de nuestro sitio web

// seleccionar elementos del dom

// // traer/seleccionar elementos por id
// const title = document.getElementById("title");
// //console.log(title);

// // traer/seleccionar elementos por nombre de clase
// const parrafos = document.getElementsByClassName("parrafo");
// //console.log(parrafos);

// // seleccionar elementos por tag name
// const elementosP = document.getElementsByTagName("p");
// console.log(elementosP);

// //seleccion de elementos usando selectores de css

// const elemById = document.querySelector("#title");
// console.log("querySelector", elemById);
// const elemByClassName = document.querySelector(".parrafo");
// const elemByTagName = document.querySelector("p");

// // colecciones de elementos

// const elemsByClassName = document.querySelectorAll(".parrafo");
// const elemsByTagName = document.querySelectorAll("p");

// atributos de un elemento

const title = document.querySelector("#title");

const input = document.querySelector(".nombreUsuario");

// setTimeout(() => {
//   title.style = "border: red solid 2px;";

//   title.classList.add("morado");

//   console.log(input.value);

//   //   const nuevaImagen = document.createElement("img");
//   //   nuevaImagen.src =
//   //     "https://elabismodenull.files.wordpress.com/2016/11/map-filter-reduce-in-emoji-1.png?w=519&h=391";

//   //title.appendChild(nuevaImagen);
//   const urlImagen =
//     "https://elabismodenull.files.wordpress.com/2016/11/map-filter-reduce-in-emoji-1.png?w=519&h=391";

//   title.innerHTML = `<img class='imgSmall' src=${urlImagen} />`;

// }, 3000);

// const nuevaImagen = document.createElement("img");
// nuevaImagen.src =
//   "https://elabismodenull.files.wordpress.com/2016/11/map-filter-reduce-in-emoji-1.png?w=519&h=391";
// nuevaImagen.classList.add("imgSmall");
// title.appendChild(nuevaImagen);

// setInterval(() => {
//   const img = document.querySelector("img");
//   img.classList.toggle("imgSmall");
// }, 1000);
const urlImagen =
  "https://elabismodenull.files.wordpress.com/2016/11/map-filter-reduce-in-emoji-1.png?w=519&h=391";

const nuevoElemento = document.createElement("div");
nuevoElemento.innerHTML = `<img class='imgSmall' src=${urlImagen} />`;

title.appendChild(nuevoElemento);

// ejercicios

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

// iterar sobre programadores y vamos a pintar un elemento
// h1 para cada nombre de programador

// iterar sobre programadores y
/**
 h1 Dany Bautista
  list
    - java
    - js
 */

// crear una tabla
/*
ID | nombre | lengs | edad | perfil
1     jose     ...     ...  

*/
