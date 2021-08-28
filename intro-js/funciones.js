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

// function pura
// reverse un string
// rev("java") -> "avaj"

// function que determine si un string es palindromo
// isPal("apa") => true

// funcion que capitalice la primera letra de cada palabra despues de un espacio
// cap("hola soy programador") -> Hola Soy Programador
// "hola"[0] -> h
