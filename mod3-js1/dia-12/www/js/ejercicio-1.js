/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dada la función "longestWord(wordsArray)" tome el parámetro wordsArray y devuelve la palabra
 * más larga del array.
 *
 * Si hay dos o más palabras que tienen la misma longitud, devuelve la primera palabra.
 *
 */

'use strict';

// const wordsArray = [
//     'perro',
//     'raton',
//     'dinosaurio',
//     'langosta',
//     'tomate',
//     'guitarra',
//     'murcielago',
// ];

// const longestWord = (array) => {
//     let temp = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i].length > temp.length) {
//             temp = array[i];
//         }
//     }
//     return temp;
// };

// con

// Solución DAVID:

function longestWord(string) {
    const wordsArray = string.split(' ');

    let longestWord = wordsArray[0];

    for (let i = 1; i < wordsArray.length; i++) {
        if (wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i];
        }
    }

    console.log(longestWord);
}
longestWord('Hola ola caracola');
