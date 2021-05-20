/**
 * Crea un reloj que se actualice en tiempo real:
 *
 *  - La hora debe ir en el <h1>
 *  - La fecha debe ir en el <h2>
 *
 * En función de la hora del día la imagen de fondo debe cambiar.
 * Para este punto puedes ayudarte de las clases:
 *
 *  - morning: a partir de las 7:00.
 *
 *  - afternoon: a partir de las 13:00.
 *
 *  - night: a partir de las 21:00.
 *
 */

// Seleccionamos todos los nodos

'use strict';

import { formatHour } from './helpers.js'; // Importamos nuestra función de 'helpers.js'. Podemos importar
// funciones, variables, etc.

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const body = document.body;

setInterval(() => {
    // Obtenemos la fecha actual:
    const now = new Date();
    // Obtenemos la hora, minutos y segundos:
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    h1.textContent = formatHour(hours, minutes, seconds);

    // Obtenemos la fecha:
    const date = now
        .toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        .replace('é', 'e')
        .replace('á', 'a');
    // Asignamos la fecha al h2:
    h2.textContent = `${date}`;

    // Cambiamos la clase del body en función de la hora:
    if (hours >= 7 && hours < 13) {
        body.classList.remove('night');
        body.classList.add('morning');
    } else if (hours >= 13 && hours < 21) {
        body.classList.remove('morning');
        body.classList.add('afternoon');
    } else if (hours >= 21 || hours < 7) {
        body.classList.remove('morning');
    }
}, 1000);
