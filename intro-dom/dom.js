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
// camilo barbosa
function printNames(list) {
  const container = document.createElement("div");
  list.forEach((prog) => {
    const progElement = document.createElement("div");
    progElement.innerHTML = `
        <h1>${prog.nombre}</h1>
        <ul>${prog.lenguajes.reduce(
          (ac, lang) => ac + `<li>${lang}</li>`,
          ""
        )} </ul>
        `;
    container.appendChild(progElement);
  });
  return container;
}
//title.appendChild(printNames(programadores));

// edwin

// programadores.forEach((element) => {
//   const nuevoElementoprogramador = document.createElement("div");
//   nuevoElementoprogramador.innerHTML = `<h1>${element.nombre}</h1>`;
//   title.appendChild(nuevoElementoprogramador);
// });

//wilmer

const nombresProgramadores = (array) => {
  const div1 = document.querySelector("#title");
  array.forEach((element) => {
    let h1_div = document.createElement("div");
    h1_div.innerHTML = `<h1>${element.nombre}</h1><br>`;
    div1.appendChild(h1_div);
  });
};

//camilo

const getDevNames = (array) => {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    const nuevoElemento = document.createElement("div");
    nuevoElemento.innerHTML = `<h1 > ${array[index].nombre}</h1>`;

    result.push(nuevoElemento);
  }
  return result;
};
getDevNames(programadores).forEach((elem) => {
  title.appendChild(elem);
});

// jose
const CreateList = (array) => {
  const bodyElement = document.querySelector("body");
  const newDiv = document.createElement("div");
  const elements = array.map((element) => {
    return `<h1>${
      element.nombre
    }</h1><ul><span>Lenguajes</span>${element.lenguajes
      .map((el) => `<li>${el}</li>`)
      .join("")}</ul>`;
  });
  newDiv.innerHTML = elements.join("");
  bodyElement.appendChild(newDiv);
};
CreateList(programadores);

// nombresProgramadores(programadores);

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

// Andres Gallo
//https://jsfiddle.net/a6wszhx0/2/

//jose

const createTable = (array) => {
  const bodyElement = document.querySelector("body");
  const newDiv = document.createElement("div");
  const table = document.createElement("table");
  if (array.length == 0)
    return bodyElement.appendChild("<h2>The array don't have elements</h2>");
  const headerText = Object.keys(array[0]);
  const tableHead = `<tr>${headerText
    .map((x) => `<th>${x}</th>`)
    .join("")}</tr>`;
  const tableBody = array
    .map((element) => {
      return `<tr>${headerText
        .map(
          (x) =>
            `<td>${
              typeof element[x] == "function" ? element[x]() : element[x]
            }</td>`
        )
        .join("")}</tr>`;
    })
    .join("");
  table.innerHTML = tableHead.concat(tableBody);
  newDiv.appendChild(table);
  bodyElement.appendChild(newDiv);
};

createTable(programadores);
