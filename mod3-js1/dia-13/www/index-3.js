/**
 *  FETCH: recibe una URL (la de mi petición) y devuelve una promesa ('then')
 *
 */

fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json()) // Está en JSON, por eso lo utilizamos para traducirlo
    .then((characters) => console.log(characters)) // Para que nos devulva los personajes
    .catch((error) => console.log(error));

// La información que nos interesa del 'fetch' está en el 'body' del console.log.

/** Funciones ASINCRONAS
 * async / await
 *
 */

async function getCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');

    const data = await response.json();

    console.log(data);
}

getCharacters();
