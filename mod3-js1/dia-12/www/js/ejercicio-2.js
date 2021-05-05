/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dada la función "primerFactorial(num)" toma el parámetro num y devuelve el factorial del mismo.
 *
 * Por ejemplo: si num = 4, entonces tu programa debería devolver (4 * 3 * 2 * 1) = 24.
 *
 */

'use strict';

const primerFactorial = (num) => {
    let temp = 1;
    for (let i = num; i > 1; i--) {
        temp = temp * i;
    }
    return temp;
};

console.log(primerFactorial(4));

// Solución DAVID:

function getFactorial(num) {
    let factorial = 1;

    for (let i = num; i > 1; i--) {
        factorial *= i;
    }

    console.log(factorial);
}

getFactorial(5);
