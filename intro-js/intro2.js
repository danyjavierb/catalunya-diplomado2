// tipos de datos, operadores

// numeros
10;
11;
9.3;
2.5;
4.567e8; //-> 456.700.000

// operaciones

40 + 1 + 2 * (2 * 4) + 1;
4 % 2; // modulo, representa el residuo en la division

// numeros especiales

Infinity - Infinity;

NaN; // Not a number

// Strings

("Hola soy Dany");
("Hola soy Dany nuevamente");
("Hola soy dany entre parentesis");
("Esta el la primera \n clase del");

"Fredy" + " sabe " + "python"; // "Fredy sabe python"

`Dany tiene ${30} años `;

// operadores unarios
typeof "Fernando"; // string
typeof 1 - // number
  9;
!true; // false

// valores booleanos
true;
false;

typeof true; // boolean

//operadores de comparacion

3 < 2; //
3 > 2; //
2 <= 2; //
1 >= 0; //
1 == 1; // comparar valor
1 === 1; // comparar valor y tipo
1 != 1; //
1 !== 1; //

// curiosidad solo exite en JS un valor q no es igual a si mismo
NaN == NaN; // false

// operadores logicos

true && true; // and, ambas deden ser verdaderas
true ||
true(
  // or , una de las dos debe ser true

  // Operador ternario
  true && true
)
  ? 1
  : 2;

// Valores de vacio
null;
undefined; // deberiamos obtener un valor y no se pudo

// short circuit usando operadores logicos

null || "valor definido"; // valor definido

//const PORT = process.env.PORT || 3000

true && "valor"; // "valor"
