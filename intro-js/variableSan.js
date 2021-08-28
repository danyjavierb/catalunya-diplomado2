
//const nombre = prompt("Ingrese su nombre");
//const edad = Number(prompt("Ingrese edad"));

// pregunten la edad de un usuario y si es menor de edad digan q no puede acceder al sitio
// si es mayor de edad, un mensaje de bienvenida con el nombre
// si no ingresa un numero un mensaje de error o advertencia

/*if(!isNaN(edad)){
    //No ingresó un numero
    if(edad > 18){
        alert(`Bienvenido ${nombre} usted es mayor de edad!`);

        const numero = Number(prompt("Ingrese un número"));

        if(!isNaN(numero)){

            //Pregunte por un numero al usuario o muestren si es par o impar "el numero x es ???"
            // en caso de no ingresar un numero, error"
            if(numero %2 == 0){
                alert(`El número ${numero} es par`);
            }else{
                alert(`El número ${numero} es impar`);
            }
        }else{
            alert("No ingresó un numero");
        }
    }else{
        alert(`${nombre}, eres menor de edad y no puedes acceder a este sitio!`);
    }
}else{
    alert("No ingresó numero");
}*/

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
const numero = Number(prompt("Ingrese un número"));
const numero2 = numero * 2;

for(let i=0; i<= numero2 - 1; i++){
    for(let j=0; j<=numero - 1; j++){
        let cad = cad + '*';
        console.log(cad);
    }
}




//Un promgrama que sume los multiplos de 3 y 5 hasta donde el usuario escoja
//user input: 10






