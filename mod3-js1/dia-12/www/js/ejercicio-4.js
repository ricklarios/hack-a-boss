/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Dada la función "timeConvert(minutes)" toma el parámetro minutes y devuelve el número
 * de horas y minutos a los que el parámetro se convierte (es decir, si minutes = 63 entonces
 * la salida debería ser 1:03). Separe el número de horas y minutos con dos puntos.
 *
 */

'use strict';

// const timeConvert = (minutes) => {
//     if (minutes < 60) {
//         return `00:${minutes}`;
//     } else {
//         let horas = Math.floor(minutes / 60);
//         let minutos = minutes % 60;
//         if (minutos < 10) {
//             return `${horas}:0${minutos}`;
//         }
//     }
// };

// console.log(timeConvert(125));

// Solución DAVID:

function timeConvert(minutes) {
    let hour = 0;

    for (minutes; minutes >= 60; minutes -= 60) {
        hour++;
    }

    minutes = minutes < 10 ? '0' + minutes : minutes;
    console.log(`${hour}:${minutes}`);
}

timeConvert(63);
