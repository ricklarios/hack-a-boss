'use strict';

/**
 *  REDUCE:
 *  .reduce((acc, value, index, array) / acc = accumulator
 * Suelen usarse solmanete acc y value. Se usa para reducir algo a un solo elemento
 *  >>> Es obligatorio decirle que retorn acc!!
 */

const numbers = [3, 2, 5, 10];

const total = numbers.reduce((acc, num, i) => {
    console.log(`Index ${i}. acc =`, acc);
    return (acc += num); // Nos daría la suma de todos los elementos del array
});
// Podemos añadir otro argumento al callback del REDUCE:
// Añadimos al final ',' y un valor: le especificamos al acumulador el valor inicial.
// Esto nos sirve también para especificarle al acumulador el tipo de valor inicial, por ejemplo si tenemos
// un objeto con propiedades de varios tipos. Usamos 0para números, string vacío '', objeto {}, etc.
// Si no lo definimos, el acumularó tomará al empezar el primer valor (i=0) y le sumará el siguiente (i=1);

const total_2 = numbers.reduce((acc, num) => (acc += num), 100); // Si antes nos daba 20, ahora nos dará 120
