// Objetos JS
/* const profesor = {
    nombre : "Dany Bautista",
    edad: 30,
    lenguajes: ["Java", "Scala", "JS"],
    imprimirPres : () => {
        return "Dany es un ingeniero de software..."
    }
};
 */
// Operaciones con objetos
// Acceder al valor de una llave
//console.log(profesor.nombre);
//console.log(profesor["nombre"]);
//console.log(profesor.lenguajes);

//console.log(`${profesor.nombre} escribe ${profesor.lenguajes.join(",")}`);

// Ver Llaves
//console.log(Object.keys(profesor));

//Ver Valores
//console.log(Object.values(profesor));

// Objetos complejos
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


// Función que retorne a un programador por ID
const GetById = (id, array) => {
    let result = {}
    for (let index = 0; index < array.length; index++) {
        if (array[index].id == id) {
            result = array[index];
            break;
        };
    };
    return result
};
        
console.log(GetById(3, programadores));


// Función que retorne todos los programadores menores de una edad
const GetByAge = (age, array) => {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index].edad < age) {
            result.push(array[index]);
        }
    }
    return result;
};

console.log(GetByAge(28, programadores))

// Una Función que retorne los nombres: [Jose Moreno, ...]
const GetNames = (array) => {
    let result = []
    for (let index = 0; index < array.length; index++) {
        result.push(array[index].nombre);
    }
    return result;
};

console.log(GetNames(programadores))

// Funcion que retorne programadores por lenguajes de programación: [{id: 4}]
const GetByLanguage = (lang, array) => {
    let result = []
    for (let x = 0; x < array.length; x++) {
        for (let i = 0; i < array[x].lenguajes.length; i++) {
            if (array[x].lenguajes[i].toLowerCase() == lang.toLowerCase()) {
                result.push(array[x])
                break;
            }
        }     
    }
    return result; 
};

console.log(GetByLanguage("Kotlin", programadores))

// Funcion que retorne un array de objetos con las propiedades que se pasen como parametros.
// Generar Objetos(programaodres, ['id', 'nombre'])
const GetObject = (array, params) => {
    let result = [];
    for (let x = 0; x < array.length; x++) {
        const new_dict = {}
        for (let i = 0; i < params.length; i++) {
            new_dict[params[i]] = array[x][params[i]]
        }
        result.push(new_dict)
    }
    return result;
}

console.log(GetObject(programadores, ['id', 'nombre']))
