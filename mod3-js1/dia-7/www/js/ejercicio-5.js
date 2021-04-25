/* #################
 * ## Ejercicio 5 ##
 * #################
 *
 * - Cuenta el número de letras "r" en el siguiente fragmento de texto:
 *   "Tres tristes tigres tragan trigo en un trigal."
 *
 * - Ahora cuenta las "t". Debes contar las mayúsculas y las minúsculas.
 *
 * - Sustituye todas las "e" por "i".
 *
 */

'use strict';

const myText = 'Tres tristes tigres tragan trigo en un trigal.';

// let counter = 0;
// const letterR = 'r';
// for (let i = 0; i < myText.length; i++) {
//     if (letterR === myText[i]) {
//         counter++;
//     }
// }

// console.log(counter);

function countT(text, letter, caseSensitive) {
    let counter = 0;
    if (!caseSensitive) {
        text = text.toLowerCase();
    }
    for (let i = 0; i < text.length; i++) {
        if (letter === text[i]) {
            counter++;
        }
    }
    return counter;
}

console.log(countT(myText, 'r', true));
console.log(countT(myText, 'T', true));
