/*const nombreEstudiante = prompt("Ingrese su nombre por favor");

console.log(nombreEstudiante);*/
const nombre = prompt("Ingrese su nombre");
const edad = Number(prompt("Ingrese edad"));

/*if(!Number.isNaN(edad)){
    //No ingresó un numero
    alert(`El(la) joven ${nombre} tiene ${edad}  años`);
}else{
    alert("No ingresó numero");
}*/

// pregunten la edad de un usuario y si es menor de edad digan q no puede acceder al sitio
// si es mayor de edad, un mensaje de bienvenida con el nombre
// si no ingresa un numero un mensaje de error o advertencia

if(!Number.isNaN(edad)){
    //No ingresó un numero
    if(edad > 18){
        alert(`Bienvenido ${nombre} usted es mayo de edad!`);
    }else{
        alert(`${nombre} no puedes acceder a este sitio!`);
    }
}else{
    alert("No ingresó numero");
}