'use strict';

// MÉTODO SOME:
// Devuelve un TRUE o FALSE.

const fruits = ['manzana', 'pera', 'platano', 'pera', 'naranja'];

const result = fruits.some((fruit) => {
    return fruit === 'sandía';
});

console.log(resutl); // Nos retorna si hay o no 'sandía' en fruit

// MÉTODO EVERY: (TRUE o FALSE) Nos dice si todos los elementos son iguales a uno que le digamos:

const result = fruits.every((fruit) => {
    return fruit === 'sandía';
});

// MÉTODO FIND: nos retorna el primer elemento único que cumpla la condición.

const number = [2, 5, 8, 8, 9, 2];

const result = numbers.find((num) => {
    return num > 4;
}); // En este caso nos retornará 5, el primer valor que cumple que es > 4.

const result = numbers.findIndex((num) => {
    return num > 4;
}); // findIndex: Lo mismo que .find pero devoviéndonos el índice del primer elemento que cumple la condición.
