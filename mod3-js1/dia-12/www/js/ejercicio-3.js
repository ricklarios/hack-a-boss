/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dada la función "letterCapitalize(string)" tome el parámetro string que se le pasa y ponga
 * en mayúscula la primera letra de cada palabra. Las palabras estarán separadas por un solo espacio.
 *
 */

'use strict';

// const palabra = 'Estamos practicando javasctript con jose y ricardo';

// const letterCapitalized = (string) => {
//     const stringArray = string.split('');
//     for (let i = 0; i < stringArray.length - 1; i++) {
//         if (i === 0) {
//             stringArray[i] = stringArray[i].toUpperCase();
//         } else if (stringArray[i] === ' ') {
//             stringArray[i + 1] = stringArray[i + 1].toUpperCase();
//         }
//     }
//     return stringArray.join('');
// };

// console.log(letterCapitalized(palabra));

// Solución DAVID:

function letterCapitalized2(string) {
    string = string.split(' ');

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0];
    }
}

letterCapitalized2('estudiar javascript es una pasada');
