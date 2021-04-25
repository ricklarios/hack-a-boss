'use strict';

/**
 *
 * METODOS CON ARRAYS
 */

const fruits = ['manzana', 'pera', 'plátano', 'pera', 'naranja'];

console.log(fruits.length);

console.log(fruits.indexOf('pera')); // => Devulve 1 (primero que encuentra)
// Si no existe devuelve -1

console.log(fruits.lastIndexOf('pera')); // => En este caso devulve 3
console.log(fruits.indexOf('pera', 2)); // => Deveulve 3
console.log(fruits.lastIndexOf('pera', 2)); // => Devuelve 1

fruits.push('uva'); // Añade 'uva' al final del ARRAY
console.log(fruits);
// Devulve: ["manzana", "pera", "plátano", "pera", "naranja", "uva"]

fruits.unshift('uva'); // Añade 'uva' al principio del ARRAY
console.log(fruits);
// Devulve: ["uva", "manzana", "pera", "plátano", "pera", "naranja", "uva"]

fruits.pop(); // Elimina el último elemento y lo devuelve:
const removedItem = fruits.pop();

// console.log(removedItem); Nos devolvería el item eliminado

fruits.shift(); // Elimina el primer elemento. Bajan todos de índice

fruits.reverse(); // Invierte el orden de todos los elementos del ARRAY

let food = 'tortilla';

food = food.split(''); // Devuelve un ARRAY separado por lo que le digamos:
console.log(food); // ["t", "o", "r", "t", "i", "l", "l", "a"]
food = food.reverse();
console.log(food); // ["a", "l", "l", "i", "t", "r", "o", "t"]
food = food.join('');
console.log(food); // Devulve 'allitrot'

// Podríamos unirlo todo en una línea:
food = food.split('').reverse().join();

const fruits_2 = ['manzana', 'pera', 'plátano', 'pera', 'naranja'];
const removedItems = fruits_2.splice(1, 2); // Eliminba o añade nuevos elementos a nuestro ARRAY. En este caso le decimos que desde la posición 1 elimine 2 elementos
console.log(removedItems); // devulve: ["pera", "plátano"]

const fruits_3 = ['manzana', 'pera', 'plátano', 'pera', 'naranja'];
const newFruits = fruits_3.slice(2, 4); // Extrae una sección, crea un nuevo ARRAY
console.log(newFruits); // Devulve ["plátano", "pera"]
