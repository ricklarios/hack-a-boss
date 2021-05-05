// Array con todos los personajes humanos que estén muertos.
// API de Rick y Morty.
// No usar filter / se puede filtrar en la propia URL
/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 *  Obtener un array con los todos personajes humanos que esten muertos.
 *  Debe existir la posibilidad de filtrar por "status" y "species".
 *
 * ¡No utilizar el método filter!
 *
 * API: https://rickandmortyapi.com/
 *
 */

'use strict';

async function getCharacters(status, species) {
    try {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character/?status=${status}&species=${species}`
        );
        const data = await response.json();
        let numPages = data.info.pages;
        const characters = [];
        for (let i = 1; i <= numPages; i++) {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/?status=${status}&species=${species}&page=${i}`
            );
            const data = await response.json();

            for (const personaje of data.results) {
                characters.push(personaje);
            }
        }
        console.log(characters);
    } catch (error) {
        console.error(error);
    }
}

getCharacters('unknown', 'alien');
