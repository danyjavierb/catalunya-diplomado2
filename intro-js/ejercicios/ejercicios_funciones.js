// Función pura que retorne el valor de un número elevado a la n potencia
/* const potencia = (numero, veces) => {
    for (let x = 1; x < veces; x++){
        numero *= numero
    }
    return numero;
}
console.log(potencia(3, 2)); */

// Función que reverse un string
/* 
const reversar = (palabra) => {
    texto = ""
    for (let x=palabra.length-1; x >= 0; x--) {
        texto = `${texto}${palabra[x]}`;
    }
    return texto
}

console.log(reversar("Java")); */

// Funcion que determine si un string es un palindromo

/* const palindromo = (palabra) => {
    return (reversar(palabra) == palabra) ? `La palabra ${palabra} es un palindromo`: `la palabra ${palabra} no es un palindromo`; 
}

console.log(palindromo("apapa"))
console.log(palindromo("amama"))
console.log(palindromo("Consola")) */

// Funcion que capitalize las mayusculas de un texto

/* const capitalizar = (texto) => {
    result = ""
    ntexto = ""
    for (let x=0; x <= texto.length-1; x++){
        if ((x == 0)) {
            result = (texto[x] == " ") ? `${texto[x]}`: `${texto[x].toUpperCase()}`    
        } else if ((x > 0))
            ntexto = (texto[x-1] == " ") ? texto[x].toUpperCase() : texto[x]
            result = `${result}${ntexto}`
    }
    return result
}

console.log(capitalizar("hola mundo"))
console.log(capitalizar("la vaca lola tiene manchas y no tiene cola")) */


// SUma todos los números primos hasta el 100

// Esta seria una solución optima pero JS no soporta números tan grandes con decimales
/* 
const SumarNumerosPrimos = (numero) => {
    // El número es primo cuando (n-1)! + 1 / n es igual a un entero
    result = 0;
    // Se descarta el 1 porque no se considera primo
    for (let x = 2; x <= numero; x++) {
        // Calculamos el factorial (n-1)!
        factorial = (x - 1);
        for (let i = 1; i < (x - 1); i++) {
            factorial = factorial * i;
        }
        console.log(factorial)
        // Aplicamos (n-1)! + 1 / n
        primo = ((factorial + 1) / x)
        if (Number.isInteger(primo)) {
            console.log("El numero: ", x)
            console.log("El resultado fue: ", primo)
            result += x;
        }
    }
    return result;
}

console.log(SumarNumerosPrimos(100)) 
*/

/* const SumarNumerosPrimos = (numero) => {
    result = 0;
    if (numero > 100) {
        return "Invalid Operation"
    }

    for (let x = 0; x <= numero; x++) {
        if (x == 1 || x == 4 || x== 0 ) {
            result += x;
        }
        for (let y = 2; y < x / 2; y++){
            if (x % y == 0) {
                result += x;
                break;
            }
        }
    }
    total = ((numero * (numero + 1) / 2) - result);
    return total;
}

console.log(SumarNumerosPrimos(100))  */

/*  const validaPrimo = numero => {
     if (numero == 0 || numero == 1 || numero == 4) return false;
     for (let x = 2; x < numero / 2; x++) {
         if (numero % x == 0) return false;
     }
     return true;
 }

 const sumarPrimos = numMax => {
     let resultado = 0
     for (i = 0; i <= numMax; i++) {
         if (validaPrimo(i) == true) {
             resultado += i;
             console.log(i)
         }
    };
     return resultado;
 }

console.log(sumarPrimos(100)) */

// Funcion usando arrays que alterne mayusculas
/* 
const MayusAlter = (letra, x, vector) => {
    result = ""
    if ((x > 0) && ((x % 2) == 0)) {
        result = letra.toUpperCase();
    } else if (x == 0) {
        result = letra.toUpperCase();
    } else
        result = letra;
    
    vector[x] = result
    console.log(result)

}

const palabra = "gregorio".split("");
palabra.forEach(MayusAlter);
console.log(palabra.join(""))
 */

// Funcion que retorne elementos no repetidos
//noRepe([1,1,2,2,3,4])
/* 
const noRepe = (coleccion) => {
    let count = 0;
    const unicos = []; 
    for (let n = 0; n <= coleccion.length-1; n++) {
        for (let x=0; x <= coleccion.length-1; x++){
            if (coleccion[x] == coleccion[n]) count += 1;
        }
        if (count - 1 == 0) unicos.push(coleccion[n]);
        count = 0;
    }
    return unicos;
}

console.log(noRepe([1,1,2,2,3,4]))
 */
// Función que separe pares de impares
// dividirArray( funcion() // true si es par) => ([1,2,3,4]) -> [[2,4],[1,3]]
const SplitArray = (coleccion) => {
    let par = [];
    let impar = [];
    let result = [];
    for (let x=0; x<= coleccion.length -1; x++) {
        if ((coleccion[x] % 2) == 0) {
            par.push(coleccion[x]);
        } else {
            impar.push(coleccion[x]);
        }
    }
    result.push(par);
    result.push(impar);
    return result
}

console.log(SplitArray([1,2,3,4]))