/**
 * #################
 * ## Ejercicio 9 ##
 * #################
 *
 * Dada la función "stringScramble(string1, string2)" toma los dos parámetros y devuelve true
 * si una parte de los caracteres de string1 se pueden reordenar para que coincidan con los
 * de string2, en caso contrario devuelve false.
 *
 * Por ejemplo: si string1 es "rkqodlw" y string2 es "world" la salida debería devolver true.
 *
 */

'use strict';

const string1 = 'worsdasdrldasdasdasdasd';
const string2 = 'world';

const string1Array = string1.split('');
const string2Array = string2.split('');

console.log(string1Array);
console.log(string2Array);

const stringScramble = (stringuno, stringdos) => {
    let estaIncluida = false;
    for (let i = 0; i < string2Array.length; i++) {
        for (let x = 0; x < string1Array.length; x++) {
            if (string2Array[i] === string1Array[x]) {
                estaIncluida = true;
                break;
            } else {
                estaIncluida = false;
            }
        }

        if (!estaIncluida) {
            break;
        }
    }
    return estaIncluida;
};

console.log(stringScramble(string1, string2));
