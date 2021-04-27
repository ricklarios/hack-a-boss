'use strict'; // Evita que en el contexto global llamemos a 'window'

// Usamos 'this' para llamar al objeto del contexto actual.
// No tiene sentido usar 'this' fuera de un método.

console.log(this);
const person = {
    name: 'Sonia',
    age: 34,
    thisWord: this, // -> this apunta a Window
    getThis: function () {
        console.log(this); // -> this apunta a 'person' / Mientras no llame a esta función seguiremos en el contexto global
    },
};

console.log(person.thisWord);

person.getThis(); // Aquí sí se crea un nuevo contexto

// Creación de espacio s de Memoria

const name = 'David';

let age = 12;

const sayHello = () => 'Helooooo!';
function sayMyName() {
    console.log('Saraaaaa');
}
