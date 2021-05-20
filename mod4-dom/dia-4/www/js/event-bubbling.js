'use strict';

// El efecto burbuja hace que cuando se produce un evento en un
// elemento del HTML, se propaga a todos los padres del elemento.

// const body = document.body;
// const li = document.querySelector('ul > li');

// body.addEventListener('click', () => console.log('Soy el body'));
// li.addEventListener('click', () => console.log('Soy el li'));
// Vemos que al hacer click en el 'li' se me activa también el 'body'

// li.addEventListener('click', (e) => {
//     e.stopPropagation(); // Con stopPropagation deja de actuar el efecto burbuja
//     console.log('Soy el li');
// });

const button = document.querySelector('button.add');
const ul = document.querySelector('ul.items');

let liCount = 0;

// Función manejadora que crea un nuevo li dentro del ul
const handleAddClick = (e) => {
    // Creamos el li:
    const li = document.createElement('li');

    // Creamos un nodo de texto plano y le asignamos el contenido (método nuevo: createTextNode)
    const textNode = document.createTextNode(`Item ${liCount++}`);

    // Creamos un botón para borrar el li:
    const deleteButton = document.createElement('button');

    // Asignamos una clase al botón:
    deleteButton.classList.add('delete');
    // Asignamos un texto al botón:
    deleteButton.textContent = 'Bórrame!!!';

    // Agregamos como hijos del li el nodo de texto y el botón:
    li.append(textNode, deleteButton);
    ul.append(li);

    // Alternativa a todo esto:
    // li.innerHTML = `Item ${ul.children.length} <button class="delete">Bórrame!!!</button>`;
};

// Agrego la función manejadora al evento de click del botón:
button.addEventListener('click', handleAddClick);

// Función manejadora que comprueba si elelemnto seleccionado tiene un
// selector concreto antes de actuar:
const handleListClick = (e) => {
    // Obtenemos el item concreto sobre el que hicimos click con destructuring:
    const { target } = e;

    // Si elemento clickado es un botón con la clase 'detele'...
    if (target.matches('button.delete')) {
        // Seleccionamos el padre (el li):
        const parentLi = target.parentElement;

        // eliminamos el li:
        parentLi.remove();
    }
};

// Agreago el segundo manejador como evento de click al ul:
ul.addEventListener('click', handleListClick); // Event delegation: delegamos
// al ul un evento que es pripio de otro (botón).
