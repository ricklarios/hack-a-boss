/* ################
 * ## Pirámide 5 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir una
 * variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a
 * continuación se ha tomado como referencia una altura de 4:
 *
 * - Figura:
 *
 *        *
 *       ***
 *      *****
 *     *******
 */

'use strict';

const height = 4;

for (let lines = 0; lines < height; lines++) {
    let lineContent = '';

    // Espacios:
    for (let spaces = height - 1 - lines; spaces > 0; spaces--) {
        lineContent += ' ';
    }

    // Asteriscos:
    for (let asterisk = 2 * lines + 1; asterisk > 0; asterisk--) {
        lineContent += '😋';
    }
    console.log(lineContent);
}
