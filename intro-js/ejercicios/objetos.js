// Objetos JS
const profesor = {
    nombre : "Dany Bautista",
    edad: 30,
    lenguajes: ["Java", "Scala", "JS"],
    imprimirPres : () => {
        return "Dany es un ingeniero de software..."
    }
};

// Operaciones con objetos
// Acceder al valor de una llave
console.log(profesor.nombre);
console.log(profesor["nombre"]);
console.log(profesor.lenguajes);

console.log(`${profesor.nombre} escribe ${profesor.lenguajes.join(",")}`);

// Ver Llaves
console.log(Object.keys(profesor));

//Ver Valores
console.log(Object.values(profesor));


