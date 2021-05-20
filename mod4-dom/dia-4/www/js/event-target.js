'use strict';

// Seleccionamos todos los li
const allLi = document.querySelectorAll('ul > li');

// Creamos la función manejadora. Al evento lo llamamos 'e'
const handleLiClick = (e) => {
    // Seleccionamos el elemento actual de forma inequivoca sobre el cual hacemos click.
    const item = e.target;

    // Comprobamos si el elemtno seleccionado tiene atributo "data-count".
    // Si no lo creamos y le asignamos el valor "0"
    if (!item.hasAttribute('data-count')) {
        item.setAttribute('data-count', 0);
    }
    // Actualizamos el valor del contador. getAttribute devolverá el valor del contador como un string
    const updatedCount = Number(item.getAttribute('data-count')) + 1;

    // Actualizamos el contenido del li seleccionado:
    item.textContent = `${updatedCount} clicks`;
    // Actualizamos el valor del atributo 'data-count':
    item.setAttribute('data-count', updatedCount);
};

// Recorremos el array de li y les agregamos el evento de click:

for (const li of allLi) {
    li.addEventListener('click', handleLiClick);
}
