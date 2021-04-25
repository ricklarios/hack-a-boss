/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Escribe un programa que permita al usuario introducir elementos en un array.
 * El programa finalizará cuando el usuario introduzca el string "fin", y se
 * mostrará por consola el contenido del array.
 *
 */

'use strict';

//* Array en el que iremos pusheando elementos.
const result = [];

let userContent;

do {
    // Pedimos al usuario añadir elementos:
    userContent = prompt('Introduce lo que sea: ');

    // Pusheamos el elemento introducido en el array 'result':
    if (userContent !== 'fin') {
        result.push(userContent);
    }
} while (userContent !== 'fin');

console.log(result);
