/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Crea una función que interprete el contenido entre paréntisis de
 * un string dado.
 *
 *      - El programa debe devolver el texto rodeando por paréntisis.
 *
 *      - Si no hay paréntisis se devolverá un string vacío.
 *
 *      - Si existe paréntisis de apertura pero no de cierre se devolverá
 *        el contenido desde el primer paréntisis hasta el final del string.
 *
 *      - Si existe paréntisis de cierre pero no de apertura se devolverá
 *        el contenido desde el inicio hasta el paréntisis de cierre.
 *
 * Por ejemplo, si el string fuera "Hola (que) tal" se mostrará el "que".
 *
 * Si fuera "Hola (que tal" se devolvería "que tal".
 *
 */

'use strict';

const text = 'Hola (que tal';
function formatString(string) {
    const leftPar = string.indexOf('(');
    const rightPar = string.indexOf(')');

    if (leftPar >= 0 && rightPar >= 0) {
        return string.slice(leftPar + 1, rightPar);
    } else if (leftPar >= 0 && rightPar === -1) {
        return string.slice(leftPar + 1);
    } else if (leftPar === -1 && rightPar >= 0) {
        return string.slice(0, rigthPar);
    } else {
        return '';
    }
}

console.log(formatString(text));
