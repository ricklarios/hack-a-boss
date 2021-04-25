/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dado el array [3, 4, 13, 5, 6, 8], muestra por consola qué numeros son pares
 * y qué números son impares.
 *
 * Haz lo mismo pero en este caso indica qué números son primos y cuales no.
 *
 * Por último, crea un nuevo array en el que los valores sean el doble del array
 * original.
 *
 */

'use strict';

const nums = [3, 4, 13, 5, 6, 8];

function isPrime(num) {
    for (let counter = 2; counter <= num; counter++) {
        if (num % counter === 0) {
            return false;
        }
        return true;
    }
}

for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (isPrime(value) === true) {
        console.warn(`el ${value} es primo`);
    } else {
        console.error(`el ${value} No es primo`);
    }
}

/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Hemos visto como podemos recorrer automáticamente un array empleando el bloque
 * for y la propiedad nombreArray.length. Pues de igual modo que recorremos arrays
 * es posible recorrer strings utilizando ese mismo método.
 *
 * Tomemos como referencia el string "JavaScript mola mucho". En este ejercicio
 * deberás mostrar por consola el número total de caracteres que tiene este string
 * SIN CONTAR los espacios. El resultado debería ser 19 para el string anterior.
 *
 */

const text = 'JavaScript mola mucho';

console.log(text.length);

let counter = 0;

for (let i = 0; i < text.length; i++) {
    const space = ' ';
    if (space !== text[i]) counter++;
    
}

console.log(counter);


/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dados el siguiente array: [true, false, false, false, true, false, false, false, true]
 *
 *  - Los valores positivos son infectados.
 *
 *  - Los infectados transmiten su enfermedad a los no infectados que tienen a los lados.
 *
 * En este caso el resultado debería ser: [true, true, false, true, true, true, false, true, true];
 *
 */

'use strict';

const infected = [true, false, false, false, true, false, false, false, true];

// Spread Operator: Nos hace una copia del ARRAY 'infected' = [...array]

const result = [...infected];

for (let i =0; i < infected.length; i++) {
    if(infected[i]) { // Sería redundante preguntar si es = true
        if(i > 0) {
            result[i - 1] = true; // Me aseguro de no modificar la posición -1
    }
    if (i < infected.length - 1) { // Me aseguro de no modificar más allar del último
        result[i + 1] = true;
    }
    // result[i + 1] = true;
}

// BONUS: las personas infectadas deben curarse una vez liberado el virus