'use strict';

const button = document.querySelector('button');
const input = document.querySelector('form > input');
const header = document.querySelector('header');
// Todas las funciones manejadoras reciben por defecto un objeto
// que define el evento en sí. Este objeto tiene una serie de propiedas y métodos útiles.

const handleClick = (event) => {
    // Objeto event
    console.log(event);
    // event.target localiza de forma específica el evento sobre el que hace click el usuario
    console.log(event.target); // siempre apunta al elemento exacto

    // event.currentTarget
    console.log(event.currentTarget); // siempre apunta al nodo en que está elemento
};

header.addEventListener('click', handleClick);

input.addEventListener('keypress', (e) => {
    // La 'e' es de event
    // Nos muestra las teclas que vamos presionando
    console.log(e.target.value);
}); // 'value' nos muestra el contenido del input
