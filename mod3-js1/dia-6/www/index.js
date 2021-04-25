'use strict';

const myString = '¡Métodos con strings!';

console.log(myString.length); // length es una PROPIEDAD!!

console.log(myString.toLowerCase()); // Me convierte un STRING a minúsculas
console.log(myString.toUpperCase()); // Me convierte un STRING a MAYÚSCULAS

console.log(myString.indexOf('o')); // Recorre de izq a dcha el STRING y me dice la posición del elemento
// Si la letra no está en el string me devuelve -1

console.log(myString.indexOf('o', 5)); // Así le decimos que recorra desde la posición 5

console.log(myString.lastIndexOf('o')); // igual pero de dcha a izq
 