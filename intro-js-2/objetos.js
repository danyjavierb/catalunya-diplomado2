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

// function que retorne un programador por id
// Andres Gonzalez

const traerProgramadorPorId = (id) => {
  for (p of programadores) {
    if (p.id === Number(id)) {
      return p;
    }
  }
};

// console.log(traerProgramadorPorId(1));

//jose moreno
const GetById = (id, array) => {
  let result = {};
  for (let index = 0; index < array.length; index++) {
    if (array[index].id == id) {
      result = array[index];
      break;
    }
  }
  return result;
};

// console.log(GetById(1, programadores));

//sandra

function progXid(progs, buscar) {
  let result = {};
  progs.forEach((element) => {
    if (element.id == buscar) {
      result = element;
    }
  });
  return result;
}

// console.log(progXid(programadores, 1));

//todos los programadores menores a una edad
//sandra vergara
/* const obtenerProgramadorMenorEdad = (programadores, edad) => {
  const arrayProgramadores = [];
  programadores.forEach((element) => {
    if (element.edad < edad) {
      arrayProgramadores.push(element);
    }
  });
  return arrayProgramadores;
}; */
//console.log(obtenerProgramadorMenorEdad(programadores, 22));

const GetByAge = (age, array) => {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index].edad < age) {
      result.push(array[index]);
    }
  }
  return result;
};

// console.log(GetByAge(22, programadores));

//camilo
const programadoresMenoresDeUnaEdad = (list, edad) => {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].edad < edad) result.push(list[i]);
  }
  return result;
};
// console.log(programadoresMenoresDeUnaEdad(programadores, 22));

// una funcion que retorne los nombres
// traerNombres(programadores) // ["Jose Moreno",...]

//sandra

const traerNombres = (programadores) => {
  const arrayProgramadores = [];
  programadores.forEach((element) => {
    arrayProgramadores.push(element.nombre);
  });
  return arrayProgramadores;
};
//console.log(traerNombres(programadores));

const GetNames = (array) => {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    result.push(array[index].nombre);
  }
  return result;
};

//console.log(GetNames(programadores));

const traerNombres2 = (list) => {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(list[i].nombre);
  }
  return result;
};
//console.log(traerNombres2(programadores));
//susana

function traerNombres3(progs) {
  const names = [];
  progs.forEach((element) => {
    names.push(element.nombre);
  });
  return names;
}

// buscar programadores por lenguaje
// programadoresPorLenguaje(programadores,"R") [{id: 4,...}]

//jose moreno
const GetByLanguage = (lang, array) => {
  const result = [];
  for (let x = 0; x < array.length; x++) {
    for (let i = 0; i < array[x].lenguajes.length; i++) {
      if (array[x].lenguajes[i].toLowerCase() == lang.toLowerCase()) {
        result.push(array[x]);
        break;
      }
    }
  }
  return result;
};

//console.log(GetByLanguage("Kotlin", programadores));
//camilo

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
};

//sandra

const programadoresPorLenguaje2 = (lenguaje) => {
  const arrayProgramadores = [];
  programadores.forEach((element) => {
    element.lenguajes.forEach((leng) => {
      if (leng == lenguaje) {
        arrayProgramadores.push(element);
      }
    });
  });
  return arrayProgramadores;
};
console.log(programadoresPorLenguaje2("R", programadores));

//susana

function programadoresPorLenguaje3(progs, buscar) {
  let resultado = [];
  progs.forEach((element) => {
    if (element.languajes.indexOf(buscar) > -1) {
      resultado.push(element);
    }
  });
  return resultado;
}

// funcion que retorne un array de objetos solo con
// las propiedades que se pases como parametro
// generarObjetos(programadores, ['id','nombre'])
// [ { id: "xxxx", nombre: "xxxxx"}   ]
//Camilo B
const generarObjetos = (list, props) => {
  const result = [];
  for (let i in list) {
    const prog = {};
    for (let j in props) {
      prog[props[j]] = list[i][props[j]];
    }
    result.push(prog);
  }
  return result;
};
console.log(generarObjetos(programadores, ["id", "nombre"]));

//Daniel Gallo
const programadorPorPropiedades = (propiedades) => {
  const ojetos = [];
  programadores.forEach((pro) => {
    let obj = {};
    for (const key in pro) {
      if (propiedades.some((proper) => proper === key)) {
        obj = {
          ...obj,
          [key]: pro[key],
        };
      }
    }
    ojetos.push(obj);
  });
  return ojetos;
};

const propsA = { a: 1, b: 2 };
const propsB = { ...propsA, c: 3 };
console.log(propsB);

//jose
const GetObject3 = (array, params) => {
  let result = [];
  for (let x = 0; x < array.length; x++) {
    const new_dict = {};
    for (let i = 0; i < params.length; i++) {
      new_dict[params[i]] = array[x][params[i]];
    }
    result.push(new_dict);
  }
  return result;
};

console.log(GetObject3(programadores, ["id", "nombre", "edad"]));

// Juan Camilo

programadores.forEach(getProgrammerByLanguage);

function getProgrammerByLanguage(programador) {
  console.log(programador.lenguajes);
}
