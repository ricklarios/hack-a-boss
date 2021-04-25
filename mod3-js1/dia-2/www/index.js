// Esto es un comentario
/** Esto es un comentario de bloque.
 * Podemos usar varias líneas
 *
 */

'use strict'; // Primera línea / El modo estricto tiene varios cambios en la semántica normal de JavaScript

let edad = 43; // para declarar una variable que puede sufrir cambios en un futuro

const nombre = 'Ricardo'; // para declarar variables que no sufrirán alteración ninguna

let esAdulto = true; // Este tipo de dato almacena 1 bit. Este bit puede ser true (1) o false (0)

let variableIndefinida; // Este tipo de dato se utiliza cuando no sabemos el contenido de una variable o todavía no fue definido

let variableVacia = null; // No es lo mismo variable indefinida que null

console.log(typeof nombre);

console.log(typeof edad);

console.log(typeof esAdulto);

console.log(typeof variableIndefinida);

console.log(typeof variableVacia);

edad += 5; // Esto es lo mismo que decir: edad = edad +5

edad++; // Equivale a decir: edad = edad + 1

let mayorDeEdad = true;

if (mayorDeEdad) {
    console.log('Mayor de edad');
} else {
    console.log('Menor de edad');
}

// let animal = 1;

// if (animal === 0) {
//     console.log('perro');
// } else if (animal === 1) {
//     console.log('gato');
// } else if (animal === 2) {
//     console.log('ratón');
// } else {
//     console.log('No se reconoce');
// }

// Otra forma de definir un if-else:

let animal = 1;

switch (animal) {
    case 0:
        console.log('perro');
        break;

    case 1:
        console.log('gato');
        break;

    case 2:
        console.log('ratón');
        break;

    default:
        console.log('No se reconoce el animal');
}
