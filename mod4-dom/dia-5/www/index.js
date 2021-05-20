'use strict';

// Para manejar el LOCAL STORAGE:

const users = [
    {
        name: 'Paco',
        age: 34,
    },
    {
        name: 'Laura',
        age: 23,
    },
];

// Convertimos a JSON
const usersJSON = JSON.stringify(users);
// Podemos comprobarlo observando las comillas dobles en la consola

// Lo almacenamos en el Local storage:
window.localStorage.setItem('users', usersJSON);
// Lo podemos hacer en una sola línea:
window.localStorage.setItem('users', JSON.stringify(users));

// Recuperamos un valor del local storage y lo reconvertimos a JavaScript.
const usersCopy = JSON.parse(window.localStorage.getItem('users'));
