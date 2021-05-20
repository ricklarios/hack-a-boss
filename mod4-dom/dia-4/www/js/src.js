'use strict';

// Manejador de eventos: EVENT MANAGER

// Estilo TRADICIONAL:

// const button = document.querySelector('button'); // Seleccionamos el botón en el HTML
// const input = document.querySelector('form > input');
// // Agregamos un evento de clickado:

// let count = 0;
// button.onclick = function () {
//     console.log('Acabas de hacer click');
//     console.log(count++); // Añadimos un contador de clicks
// };

// // Idem. al pasar el ratón por encima:
// button.onmouseover = function () {
//     console.log('Acabas de pasar el ratón por encima del botón');
// };

// // Idem. al hacer foco sobre el botón:

// button.onfocus = function () {
//     console.log('Foco sobre el botón');
// };
// // Idem. al hacer foco sobre el input:
// input.onfocus = function () {
//     console.log('Foco sobre el texto');
// };
// Podemos eliminar los eventos creados:
// button.onmouseover = function {}; // o button.onmouseover = null;

// Estilo MODERNO:
const button = document.querySelector('button'); // Seleccionamos el botón en el HTML
const input = document.querySelector('form > input');

// Método 1: Si queremos que siempre esté funcionando
button.addEventListener('click', function () {
    // Tiene dentro un callback
    console.log('Click en el botón!!'); // Pasamos como parámetros (evento, function)
});

// Método 2: siqueremos eleiminar este evento en algún momento lo referenciamos en una constante

const handleButtonMouseOver = () => {
    console.log('Has pasado el ratón por encima');
};

button.addEventListener('mouseover', handleButtonMouseOver);
button.addEventListener('mouseover', () => console.log('Hola!!')); // Esta función no la podremos deshabilitar

// Para eliminar el evento:

setTimeout(() => {
    button.removeEventListener('mouseover', handleButtonMouseOver);
}, 10000); // Eliminamos la función referenciada en la constante, pero no la que hemos declarado directamente.

//
