/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Crea un programa que compruebe si un string es palíndromo, es decir, que se lee igual
 * del derecho que del revés. Por ejemplo, "Arriba la birra" es un palíndromo.
 *
 */

'use strict';

let myText = 'Arriba la birra';

// Limpiar la cadena de texto y transformarlo a minúscula.

function reverseString(string) {
    return string.split('').reverse().join('');
}
myText = myText.toLocaleLowerCase().replaceAll(' ', '');

// Creo una variable donde almaceno el string invertido.

const reversedText = reverseString(myText);

// Hago la comparación.

console.log(myText === reversedText);
