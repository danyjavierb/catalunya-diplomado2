const programadores = [{
    id: 1,
    nombre: "Jose Moreno",
    lenguajes: ["Kotlin", "C", "JS"],
    edad: 20,
    perfil: () => "Programador Joven backend"
},{
    id: 2,
    nombre: "Dani Bautista",
    lenguajes: ["Kotlin", "JS", "Java"],
    edad: 30,
    perfil: () => "Programador Backend"
},{
    id: 3,
    nombre: "Sandra Vergara",
    lenguajes: ["Kotlin", "C", "JS"],
    edad: 25,
    perfil: () => "Programadora Backend"
},{
    id: 4,
    nombre: "Susana Aguilera",
    lenguajes: ["Python", "Scala", "JS", "R"],
    edad: 28,
    perfil: () => "Programadora BigData y ML"
}]

//Traer programador por ID usando find

/* const GetByID = (array, id) => {
    return array.find((element) => element.id == id);
}

console.log(GetByID(programadores, 2)); */

//Trae todos los programadores menores a una edad usando filter

/* const GetByAge = (array, age) => {
    return array.filter((element) => element.edad < age);
}

console.log(GetByAge(programadores, 28)); */

// Traer los nombres de los programadores usando map
/* const GetNames = (array) => {
    return array.map((element) => element.nombre);
}

console.log(GetNames(programadores)); */

// Suma todas las edades de los estudiantes usando reduce
/* const SumEdades = (array) => {
    return array.reduce((acc, current) => {
        acc += current.edad
        return acc
    }, 0)
}

console.log(SumEdades(programadores)); */

// Ejercicios

