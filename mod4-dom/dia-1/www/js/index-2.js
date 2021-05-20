'use strict';

// Seleccionamos el párrafo del body

const p = document.querySelector('body > p'); // querySelector permite seleccionar un çunico nódulo del HTML

// Seleccionamos el body:

// const body = document.body;
// Por destructuring (muy habitual):

const { body } = document;

// Inicializo un contador:

let seconds = 0;

// En CSS background-color: rgb(240, 0, 240);
// Función que retorne un número aleatorio entre 0 y un número máximo:

function getRandom(numMax) {
    return Math.round(Math.random() * numMax);
}

// setInterval que se repite cada segundo:

setInterval(() => {
    // Cambiamos el color de fondo aleatoriamente:
    body.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(
        255
    )}, ${getRandom(255)})`;

    //Cambiamos el contenido del párrafo:
    p.textContent = seconds++;
}, 1000);
