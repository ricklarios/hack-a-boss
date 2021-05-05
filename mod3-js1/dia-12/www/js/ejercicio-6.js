/**
 * #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Dada la función "simpleMode(numsArray)" tome el aprámetro numsArray y devuelva el número
 * que aparece con más frecuencia.
 *
 * Por ejemplo: si numsArray contiene [10, 4, 5, 2, 4] la salida debería ser 4. Si hay existen
 * dos números que se repiten el mismo número de veces devuelve el que apareció primero en el
 * array (por ejemplo [5, 10, 10, 6, 5] debería devolver 5 porque apareció primero).
 *
 * Si no hay ningún modo, devuelve -1. El array no estará vacío.
 *
 */

'use strict';

const numsArray = [4, 5, 7, 5, 4, 3, 2, 1];

const simpleMode = (array) => {
    let masRepetido = numsArray[0];
    let contador = 0;
    let contadorMasRepetido = 0;

    for (let i = 0; i < numsArray.length; i++) {
        for (let x = i + 1; x < numsArray.length; x++) {
            if (numsArray[x] === numsArray[i]) {
                contador++;
            }
        }
        if (contador > contadorMasRepetido) {
            masRepetido = numsArray[i];
            contadorMasRepetido = contador;
        }
        contador = 0;
    }
    return masRepetido;
};

console.log(simpleMode(numsArray));
