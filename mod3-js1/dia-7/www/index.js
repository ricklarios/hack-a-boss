/**
 *
 * METODOS CON STRINGS II:
 *
 *
 *
 *
 */

'use strict';

const myString = '¡Métodos con strings!';

console.log(myString.repeat(3)); // Repite un STRING las veces que le digamos

console.log(myString.replace('o', 'i')); // Le decimos qué valor queremos sustituir y
// seguido de coma por el que sustituimos

console.log(myString.replaceAll('o', 'i')); // Reenplaza todas las coincidencias de 'o' por 'i'.
// replace y replaceAll devuelve un string nuevo, no modifica el STRING original, interesa meterlo en una constante

// SPLIT:
// Hay que indicarle un separador, que elemento es el que sirve como división
// Nos crea un nuevo ARRAY:

console.log(myString.split('')); // En este caso el separador es un string vacío ''
// ["¡", "M", "é", "t", "o", "d", "o", "s", " ", "c", "o", "n", " ", "s", "t", "r", "i", "n", "g", "s", "!"]

console.log(myString.split(' ')); // En este caso el separador es cada espacio ' ' que encuentra
// ["¡Métodos", "con", "strings!"]

console.log(myString.split('/n')); // El separador /n se refiere a los SALTOS DE LINEA

console.log(myString.split(' ', 2)); // Así le decimos cuantas divisones queremos que haga.
// Nos devolvería: ["¡Métodos", "con"]

console.log(myString.slice(4)); // Devuelve un nuevo string desde la posición que le marcamos.
// En este caso: 'odos con strings!'
console.log(myString.slice(1, 8)); // Devuelve desde la pos 1 (incluida) a la 8 (no incluida)
// En este caso: 'Métodos', como es hasta la posición 8, el ' ' no está incluido

console.log(myString.charAt(1)); // Nos devuelve el caracter que haya en la posición '1'
// En este caso: 'M'

console.log(myString.concat('Hola', 'Adiós')); // sería igual que hacer una suma
// En este caso: '¡Métodos con strings!HolaAdiós'

console.log(myString.includes('strings')); // Devulve true o false
console.log(myString.includes('0', 11)); // Busca a partir de la posición que le indicamos.
// En este caso 'false'

const miAnimal_1 = 'áraña';
const miAnimal_2 = 'ARANA';

console.log(miAnimal_1.localeCompare(miAnimal_2)); // Compara si los string son iguales
// Devulve 1 (true) o -1 (false) / En este caso devuelve 1 (a pesar de las diferencias)

const myString_2 = '      ¡Métodos con strings!      ';
console.log(myString_2.trim()); // Elimina los espacios vacios al INICIO y FIN del array
// En este caso devuelve un nuevo string: '¡Métodos con strings!'
