/**
 * Cada <li> debería tener una estructura similar a esta:
 *
 * <article>
 *      <header>
 *          <img src="${imagenUsuario}" alt="${nombreCompleto}">
 *          <h1>${nombreCompleto}</h1>
 *      </header>
 *      <p>${ciudad} (${país}), ${añoNacimiento}</p>
 * </article>
 *
 *
 * API: https://randomuser.me/api/?results=10
 */

'use strict';

// Seleccionamos los nodos que vamos a necesitar:

const ul = document.querySelector('ul.userlist');
const li = document.querySelector('li.loading');

const frag = document.createDocumentFragment();
const liLoading = document.querySelector('li.loading');

// Obtenemos numero de usuarios:

// Le pedimos a la API los usuarios aleatorios:
// Función asíncrona que crea un número x de usuarios:
// DAVID: const getUsers = async(limit) => {}
async function getUsers() {
    try {
        const response = await fetch(
            `https://randomuser.me/api/?results=${numUsuarios}`
        );
        // Obtenemos el array de usuarios con desconstructing:
        const { results } = await response.json();
        // Recorremos el array:
        for (const user of results) {
            // Almacenamos la info que nos interesa:
            const imagenUsuario = user.picture.large;
            const { first, last } = user.name;
            const { city, country } = user.location;
            const birthYear = new Date(user.dob.date).getFullYear();
            const nombreCompleto = `${user.name.title} ${user.name.first} ${user.name.last}`;

            // Creamos un li:
            const li = document.createElement('li');
            //Insertamos en el li toda la estructura:
            li.innerHTML = `
                <article>
                    <header>
                        <img src="${imagenUsuario}" alt="${first} ${last}">
                        <h1>${first} ${last}</h1>
                    </header>
                    <p>${city} (${country}), ${birthYear}</p>
                 </article>           
            `;

            frag.append(li);
        }

        liLoading.remove();
        ul.append(frag);
    } catch (error) {
        console.log(error);
    }
}

// Llamamos a getUsers. Usamos un setTimeout para que de tiempo a cargar la página:
setTimeout(() => {
    const numUsuarios = Number(
        prompt('Introduce el número de usuarios a crear:')
    );
    getUsers(numUsuarios);
}, 300);
