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


// SUma todos los números hasta el 100

const SumarNumerosPrimos = (numero) => {
    result = 0
    for (let x = 1; x <= numero; x++) {
        if (x**2 > numero) {
            return result
        } else if (x > 1) {
            if ((x % 2) == 0)
        }

    }
}

console.log(SumarNumerosPrimos(100))

// Funcion usando arrays que alterne mayusculas
const MayusAlter = (palabra) => {
    for (let x = 0; x <= )
}