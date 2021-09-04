const programadores = [
    {
      id: 1,
      nombre: "Jose Moreno",
      languajes: ["Kotlin", "C", "js"],
      edad: 20,
      perfil: () => "Programador joven backend",
    },
    {
      id: 2,
      nombre: "Dany Bautista",
      languajes: ["Kotlin", "js", "java"],
      edad: 30,
      perfil: () => "Programador backend",
    },
    {
      id: 3,
      nombre: "Sandra Vergara",
      languajes: ["js", "ts", "reScript"],
      edad: 25,
      perfil: () => "Programadora frontend",
    },
    {
      id: 4,
      nombre: "Susana Aguilera",
      languajes: ["python", "scala", "js", "R"],
      edad: 28,
      perfil: () => "programadora big data y ML",
    },
  ];
  
  // function que retorne un programador por id
  
const obtenerProgramadorporId = (id, programadores) => {
    let result = {};   
    programadores.forEach(element => {
        if(element.id == Number(id)){
            result = element;
        }
    });
    return result;
  };

console.log(obtenerProgramadorporId(1, programadores));

//todos los programadores menores a una edad
const obtenerProgramadorMenorEdad = (programadores) => {
    const arrayProgramadores = [];
    programadores.forEach(element => {
        if(element.edad >= 18){
            arrayProgramadores.push(element);
        }      
    });
    return arrayProgramadores;
  };
console.log(obtenerProgramadorMenorEdad(programadores));


  // una funcion que retorne los nombres
  // traerNombres(programadores) // ["Jose Moreno",...]
  const traerNombres = (programadores) => {
    let arrayProgramadores = [];
        programadores.forEach(element => {
            arrayProgramadores.push(element.nombre);
            
        });
        return arrayProgramadores;
      };
    console.log(traerNombres(programadores));

  
  // buscar programadores por lenguaje
  // programadoresPorLenguaje(programadores,"R") [{id: 4,...}]
  const programadoresPorLenguaje = (lenguaje) => {
    const arrayProgramadores = [];
        programadores.forEach(element => {
            element.languajes.forEach(leng => {
                if(leng == lenguaje){
                    arrayProgramadores.push(element);
                }
            })           
        });
        return arrayProgramadores;
      };
    console.log(programadoresPorLenguaje("R", programadores));
  
  // funcion que retorne un array de objetos solo con
  // las propiedades que se pases como parametro
  // generarObjetos(programadores, ['id','nombre'])
  // [ { id: "xxxx", nombre: "xxxxx"}   ]
  const generarObjetos = (programadores, propiedades) => {
    let result = [];
        programadores.forEach(element => {
            propiedades.forEach(props => {
                const key = Object.keys(programadores);
                if(key == propiedades) {
                    result.push(element);
                }    
            })             
        });
        return result;
      };
    console.log(generarObjetos(programadores, ['id','nombre']));
  