/* #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Dado el array = [1, 3, 9, 14, 17, 22]
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "while" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for of" y mostrarlos en pantalla.
 *
 *  - Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
 *
 *  - Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push?
 *
 *  - Calcular el promedio.
 *
 */

'use strict';

const nums = [1, 3, 9, 14, 17, 22];

let index = 0;

while (index < nums.length) {
    console.log(nums[index]);
    index++;
}

console.log('####################');

for (let i = 0; i < nums.length; i++) {
    console - log(nums[i]);
}

console.log('####################');

for (const num of nums) {
    console.log(num);
}

console.log('####################');

for (const num of nums) {
    console.log(num + 1);
}

console.log('####################');

const nums_2 = []; // O  const nums_2 = Array();

for (const num of nums) {
    nums_2.push(num + 1);
}

console.log(nums_2);

console.log('####################');

let total = 0;

for (const num of nums) {
    total += num;
}

console.log(total / nums.length);
