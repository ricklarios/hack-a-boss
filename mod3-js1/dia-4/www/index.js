'use strict';

// FUNCIONES
// Siempre que tengamos fragmentos de código que se repite,
// podemos crear una función.
// Hay 3 formas de declarar:

// 1. DECLARACIÓN DE FUNCIÓN:

// Podemos llamarla desde cualquier punto del código, incluso antes de declararla

function sayHello() {
    console.log('HELLO!!!');
}
sayHello(); // Llamamos a la función. Podemos hacerlo las veces que queramos.
// Se crea un nuevo contexto de ejecución cuando llamamos a una.

function sayHello2(name) {
    // Las variables como 'name' las declara function, no hace falta un let ni const
    console.log(`Hola ${name}`);
}
sayHello2('Manolo'); // Una vez ejecutada la función,
// la varible 'name' queda resetada, podemos volver a usarla:
sayHello2('María');
sayHello2('Roberto');
// function sayHello2(name = 'José') { Le damos un valor por defecto a 'name', deja de retornar 'undefined'

function sayHello3(name = 'José') {
    return `Hola ${name}`;
}
console.log(sayHello3('Laura'));

const myName = sayHello3('Pepe');
console.log(myName);

// Para documentar la función:
/**
 *
 * @param {Number} a Primer Número
 * @param {Number} b Segundo Número
 * @param {String} option Tipo de operación (+ o -)
 */
function calculate(a, b, option) {
    if (option === '+') {
        return a + b;
    } else if (option === '-') {
        return a - b;
    } else {
        throw new Error('No se reconoce el tipo de operación');
    }
}
console.log(calculate(2, 2, '+'));
console.log(calculate(10, 2, '-'));
console.log(calculate(10, 2, '*'));
