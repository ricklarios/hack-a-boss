'use strict';

function sayHello() {
    return 'Hola';
}

const result_A = sayHello();

const result_B = sayHello; // No estamos llamando a la función, faltan las variable.
// Lo que estamos haciendo es una copia de sayHello

console.log(result_B); // Nos muestra la función entera!!! Faltan las variables

console.log(result_A); // Nos muestra el resultado por consola

// 2. EXPRESIÓN DE FUNCIÓN:
// Definimos una variable con el nombre de la función y a continuación la definimos. Mejor con 'const' q 'let'
// Al contrario que en DECLARACIÓN, solo podemos llamar a la función DESPUÉS de definirla.

const sayBye = function () {
    return 'Adios';
};

console.log(sayBye()); // El resto no cambia, llamamos igual

/** 3. ARROW FUNCTION:
 *
 *
 */

// Expresión de función:
const sayNothing = function () {
    return '.....';
};

const sayNothing1 = () => '.....'; // ARROW FUNCTION. Si eliminamos las llaves
//se da por hecho que hay un 'return'

const sayNothing2 = () => {
    // Esto es exactamente lo mismo que lo anterior.
    return '.....';
};

console.log(sayNothing2());

// Ejemplo: Arrow function con return implícito:
const calculate = (a, b) => a * b;
console.log(calculate(5, 8));
