/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que pida una cadena de texto y la devuelva al revés.
 * Es decir, si tecleo "hola que tal" deberá mostrar "lat euq aloh".
 *
 */

'use strict';

function reverseString(string) {
    //    const result = string.split('').reverse().join('');
    //   console.log(result);
    return string.split('').reverse().join('');
}

console.log(reverseString('Hola que tal'));
