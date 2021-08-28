// funcion pura q retorne el valor de un numero elevado a n potencia
// pow (3,3)
// 3 * 3 * 3

/*function ValorElevado(numero, potencia){
    let resultado = numero;
    for(let i=1; i<=potencia-1;i++){
        resultado *= numero;
    }
    return resultado;
}


const numero = Number(prompt("Ingrese un número"));
const potencia = Number(prompt("Ingrese la potencia"));

const numeroElevado = ValorElevado(numero, potencia);
console.log(`${numero} elevado a la ${potencia} es igual a ${numeroElevado}` );*/


// function pura
// reverse un string
// rev("java") -> "avaj"

/*function Reverse(cadena){
    let cad = cadena;
    let cadReverse = "";
    let cadNew = "";
    for(let i=0;i<=cad.length-1;i--){
        cadReverse += cad.charAt(cad.length-1);
        //Eliminar caracter posición 
        cadNew += cad.replaceAt(0,cadReverse);
    }
    return cadReverse;
}

let cadena = prompt("Ingrese cadena");
const cadenaRevertida = Reverse(cadena);

console.log(`El nombre revertido de ${cadena} es ${cadenaRevertida}` );
*/


// function que determine si un string es palindromo
// isPal("apa") => true

// funcion que capitalice la primera letra de cada palabra despues de un espacio
// cap("hola soy programador") -> Hola Soy Programador
// "hola"[0] -> h

const Capitizar = (cadena) => {
let resulMayus = cadena[0].toUpperCase();
    for(let i=0;i<=cadena.length-1;i++){

        if(cadena[i] == ' '){
            resulMayus += cadena[i];
            resulMayus += cadena[i+1].toUpperCase();
            i++;
        }else{
            resulMayus += cadena[i];
        }
    }
    return resulMayus; 
}

let cadena = prompt("Ingrese cadena");
console.log(Capitizar(cadena));
