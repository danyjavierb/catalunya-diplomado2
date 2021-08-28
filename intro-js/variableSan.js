
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
/*const numero = Number(prompt("Ingrese un número"));
const numero2 = numero * 2;
let cad = "";
for(let i=1; i<= numero2; i++){
    if(i>numero){
        cad = cad.substring(1);        
    }else{
        cad = cad + '*';
    }
    console.log(cad);
}*/

// un programa que sume los multiplos de 3 y 5 hasta donde el usuario escoja
// user input: 10
//1
//2
//3 3
//4
//5 8
//6 14
//7
//8
//9 14 + 9
//10 14 + 9 + 10

/*const numeroMult = Number(prompt("Ingrese un número"));

if(!isNaN(numeroMult)){
    let multiplo = 0;
    for(let i = 1; i<= numeroMult -1; i++){      
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(`${i}`);
        }else{
            multiplo += i;
            console.log(`${i} ${multiplo}`); 
        }
    }
}else{
    console.log("No es un número válido");
}*/


/**
 * Escribe un programa que use console.log para imprimir todos los números de 1 a 100, 
 * con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, 
 * y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

   Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", 
   para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" 
   para números divisibles por solo uno de ellos).

   (Esta es en realidad una pregunta de entrevista que se ha dicho 
    elimina un porcentaje significativo de candidatos a programadores. 
    Así que si la puedes resolver, tu valor en el mercado laboral acaba de subir).
 */

// ingrese n
// nxn
/*       01234567
         # # # # 0
        # # # #  1
         # # # # 2
        # # # #  3
         # # # # 4
        # # # #  5
         # # # # 6
        # # # #  7

*/

/*const n = Number(prompt("Ingrese un número 1"));

for(let i=0;i<=n-1;i++){

        console.log(`# # # #${i}`);     
    
}*/




