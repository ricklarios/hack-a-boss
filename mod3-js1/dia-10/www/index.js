'use strict';

// METODO SORT
// METODO MAP

const words = ['rebanada', 'tomate', 'algo', 'ahora', 'montaña'];

// El MÉTODO SORT nos ordena un array de la A - Z.

console.log(words.sort());

// Puede comparar también números:

const numbers = [3, 31, 100, 1, 11, 34, 5];

// console.log(numbers.sort()); // Esto lo ordena también, pero daría:
// [1, 100, 11, 3, 31, 3, 4, 5]
// Para solucionar esto podemos usar un función comparadora:

const orderNumbers = (a, b) => a - b; // De menor a mayor
const orderNumbers_2 = (a, b) => b - a; // De mayor a menor

console.log(numbers.sort(orderNumbers));

// Lo habitual es hacerlo:

console.log(numbers.sort((a, b) => a - b));

// otra manera de expresar todo esto:

const orderedNums = numbers.sort((num_1, num_2) => num_1 - num_2);
console.log(orderedNums);

// MÉTODO MAP:
// Tenemos que pasarle un callback. Tiene 3 parámetros: un valor (un número, un color, etc), index, array.
// el parámetro 'array' no suele usarse
const numbers = [2, 4, 13, 24];

const myMapCallback = (num, index, array) => {
    console.log('value: ', num);
    console.log('index: ', index);
    console.log('array: ', array);
    console.log('==============');
    return num + 1; // Podemos retornar operaciones: [3, 5, 14, 25]
};

const result = numbers.map(myMapCallback);

console.log(result);
