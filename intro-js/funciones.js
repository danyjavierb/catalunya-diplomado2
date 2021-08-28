// definicion de funciones
// funciones con retorno
// funcion pura
function cuadrado(x) {
  return x * x;
}

//funcion pura
// arrow function
const cuadradoArrow = (x) => {
  return x * x;
};

const cuadradoSinLlaves = (x) => x * x;

// funcion sin retorno : undefined
// funcion impura
// efecto secundario
const saludar = (nombre) => {
  console.log(`hola ${nombre} como estas`);
};

//iterativa, imperativa
const cuentaRegresivaImp = (numero) => {
  for (let i = numero; i > 0; i--) {
    console.log(i);
  }
};

//recursive

const cuentaRegresivaRec = (numero) => {
  console.log(numero);

  const numeroDecrementado = numero - 1;
  if (numeroDecrementado > 0) {
    cuentaRegresivaRec(numeroDecrementado);
  }
};

// cuentaRegresivaRec(3)
// 3
// 2
// 1

// tail recursion -> oscar gonzales o Yoshua nos ayudara con una
// presentacion sobre tail recursion

const resultado = cuadrado(3);

console.log(resultado);

console.log(saludar("Yoshua"));

// currificacion -> composicion de funciones
//HOF
const multiplicador = (mult) => (num) => mult * num;

function multiplicador2(mult) {
  return function (num) {
    return mult * num;
  };
}

const doblar = multiplicador(2);

console.log(doblar(3));

const triplicar = multiplicador(3);

console.log(triplicar(4));

// ejercicios

// funcion pura q retorne el valor de un numero elevado a n potencia
// pow (3,3)
// 3 * 3 * 3

// const potenciacion = (numero, potencia) => numero ** potencia;
// let numero = parseInt(prompt("ingrese un numero"));
// let potencia = parseInt(prompt("ingrese potencia"));

// if (!Number.isNaN(numero)) {
//   alert(`${numero} ^ ${potencia} =  ${potenciacion(numero, potencia)}`);
// } else {
//   alert("No ingresó numero");
// }

// const potencia = (numero, veces) => {
//   for (let x = 1; x < veces; x++) {
//     numero *= numero;
//   }
//   return numero;
// };
// console.log(potencia(3, 2));

// alejando cifuentes

const pow = (num, pot) => {
  let res = 1;
  if (pot === 0) {
    res = 1;
  } else {
    for (let i = 0; i < Math.abs(pot); i++) {
      res *= num;
    }
    if (pot < 0) {
      res = 1 / res;
    }
  }
  return res;
};
// let numero = parseInt(prompt("ingrese un numero"));
// let potencia = parseInt(prompt("ingrese potencia"));

// console.log(pow(numero, potencia));

// function pura
// reverse un string
// rev("java") -> "avaj"
// fredy garcia
// const reverse = (palabra) => {
//   let size = palabra.length - 1;
//   let newPalabra = "";
//   for (let i = size; i >= 0; i--) {
//     newPalabra += palabra[i];
//   }
//   return newPalabra;
// };

// let palabra = prompt("Ingrese una palabra:");
// alert(reverse(palabra));
//wilmer
// function reversa(texto) {
//   var rev = "";
//   for (var i = texto.length - 1; i >= 0; i--) {
//     rev += texto.charAt(i);
//   }
//   return rev;
// }

// let string = prompt("ingrese un valor");

// alert(`${string} =  ${reversa(string)}`);

//reverse string
// jonnatan arias
// function reve(cad) {
//   let aux = "";
//   for (let i = cad.length; i > 0; i--) {
//     aux += cad[i - 1];
//     //console.log(cad[i-1]);
//   }
//   return aux;
// }

// let cad = reve(prompt("ingrese un string: "));
// console.log(cad);

// const reversar = (palabra) => {
//     texto = ""
//     for (let x=palabra.length-1; x >= 0; x--) {
//         texto = `${texto}${palabra[x]}`;
//     }
//     return texto
// }
// console.log(reversar("Java"));

// Angres gonzalez
// const reverse = (cadena) => {
//   let cadenaAlReves = "";
//   for (i = cadena.length - 1; i >= 0; i--) {
//     cadenaAlReves = cadenaAlReves.concat(cadena[i]);
//   }
// };

// reverse(prompt("Escriba algo"));

// function que determine si un string es palindromo
// isPal("apa") => true

const reverse = (cadena) => {
  let cadenaAlReves = "";
  for (i = cadena.length - 1; i >= 0; i--) {
    cadenaAlReves = cadenaAlReves.concat(cadena[i]);
  }
};

const esPalindromo = (palabra) => reverse(palabra) == palabra;

// funcion que capitalice la primera letra de cada palabra despues de un espacio
// cap("hola soy programador") -> Hola Soy Programador
// "hola"[0] -> h
// susana
// function mayusc(x) {
//   let r = "";
//   let cortar = "";
//   let ante = "";
//   for (let i = x.length; i > 1; i--) {
//     cortar = x.substring(i - 1, i);
//     ante = x.substring(i - 2, i - 1);
//     if (ante == " ") {
//       cortar = cortar.toUpperCase();
//     }
//     r = cortar + r;
//   }
//   r = x.substring(0, 1).toUpperCase() + r;
//   return r;
// }

// alert(mayusc(prompt("ingrese una palabra")));

const capPrimeraLetra = (frase) => {
  let resulMayus = frase[0].toUpperCase();

  for (let i = 0; i <= frase.length - 1; i++) {
    if (frase[i] == " ") {
      resulMayus += frase[i];
      resulMayus += frase[i + 1].toUpperCase();
      i++;
    } else {
      resulMayus += frase[i];
    }
  }
  return resulMayus;
};

// Ingresen un numero ie: 100
// sumatoria de todos los numeros primos entre 0 y 100
// usando funciones para cada calculo
/*
//suma primos
// jonnatan arias
// function sumapri(n){
//   let sum=0;
//   for(let i=0;i<n;i++){
    
//     let cont = 0;
//     for(let j=0;j<n;j++){
//       if(i%j === 0){
//         cont++;
//       }
//     }
//     if(cont <= 2){
//       sum=sum+i; 
//     }
//   }
//   return sum;
// }

//wilmer 

//prueba 12: Sumatoria de números primos
// const validaPrimo = numero => {
//     if (numero == 0 || numero == 1 || numero == 4) return false;
//     for (let x = 2; x < numero / 2; x++) {
//         if (numero % x == 0) return false;
//     }
//     return true;
// }
// const sumarPrimos = numMax => {
//     let resultado = 0
//     for (i = 0; i <= numMax; i++) {
//         if (validaPrimo(i) == true) {
//             resultado += i;
//             console.log(i)
//         }
//     };
//     return resultado;
// } */
