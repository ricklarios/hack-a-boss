'use strict';

/** ARRAYS:
 *
 *
 *
 */

// const myArray = Array(); Puede definirse así, pero es más intuitivo:
const myArray0 = [];
console.log(myArray0);

// Posiciones:      0          1     2
const myArray = ['amarillo', false, 456];
console.log(myArray);

/** CONSOLA:
 *  (3) ["amarillo", false, 456]
 *  0: "amarillo"
 *  1: false
 *  2: 456
 *  length: 3
 *
 *  Las posiciones o index de cada elemento del ARRAY empiezan en 0!!
 */

// Para mostrar una posición del Array:
console.log(myArray[0]);
// Si queremos modificar un valor del Array:
myArray[1] = true;
console.log(myArray);

myArray[2] += 100;
console.log(myArray);

const numbers = [3, 56, 14, 9, 6, 78]; // Con los Arrays podemos modificar el valor de una const
// 'length': propiedad de los Arrays que nos da su longitud. en este caso 'numbres.length'
for (let i = 0; i < numbers.length; i++) {
    // Si cambiamos la longitud del Array, sigue mostrándonos todos los valores
    console.log(numbers[i]);
}
for (let i = numbers.length; i >= 0; i--) {
    // Nos mostraría los elementos a la inversa
    console.log(numbers[i]);
}

console.log('#################');

let index = 0;

while (index < numbers.length) {
    console.log(numbers[index]);
    index++;
}

console.log('#################');

const numbers1 = [3, 56, 14, 9, 6, 78];

const double = [];

// for (const 'value' of numbers) 'value' guarda el valor de una posición
for (const num of numbers1) { // Otra expresión de FOR: FOR - OF
    double.push(num * 2); // '.push'
}
console.log(double);

console.log('#################');

let total = 0;

for (const num of double) {
    total += ;
}
console.log(total);