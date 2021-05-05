'use strict';

/**
 *  setTimeOut() / clearTimeout()
 *
 * Es código asíncrono, se ejecuta después del síncrono. No es código JS,
 * es el navegador quien lo solicita a una API. REcibe un callback y un tiempo en milisegundos.
 *
 */

setTimeout(() => {
    console.log('Hola!!');
}, 3000);

// Para poder llamarlo:

const myTimeout = setTimeout(() => {
    console.log('Hola!!');
}, 3000);

clearTimeout(myTimeout); // Para cancelar un setTimeout.
// Necesitmaos crear la 'const' para poder llamarlo y pararlo.

/**
 *  setInterval(): repite la condición cada intervalo que le marcamos.
 */

setInterval(() => console.log('¡ALARMA!'), 1000);
setTimeout(() => clearInterval(myInterval), 10000); // Este setTimeout pararía el setInterval.
// Tendríamos que crear también la const 'myInterval' para poder llamarlo.
