'use strict';

import State, { updateState, resetState, checkWinner } from './state.js';
// Seleccionamos el main.
const main = document.querySelector('body > main');

// Seleccionamos el tablero: div con clase "board".
const boardDiv = document.querySelector('div.board');

// Seleccionamos las tres lineas de cuadrados: los tres divs dentro del anterior.
const firstRowDiv = document.querySelector('div.first-row');
const secondRowDiv = document.querySelector('div.second-row');
const thirdRowDiv = document.querySelector('div.third-row');
/**
 * #######################
 * ## handleSquareClick ##
 * #######################
 *
 * Esta función manejadora dicta lo que sucede cada vez que un jugador
 * hace click en un cuadrado.
 *
 *  - Si el objetivo es el div con clase "square" comprobamos qué jugador
 *    está jugando: rondas pares "X" rondas impares "O".
 *
 *  - Posteriormente obtenemos el index del cuadrado sobre el que pulsamos.
 *
 *  - Actualizamos el tablero.
 *
 *  - Renderizamos los cambios en el HTML.
 *
 */
const handleSquareClick = (e) => {
    const { target } = e;
    if (target.textContent === '') {
        const roundPlay = State.round;
        const index = Number(target.getAttribute('data-index'));
        const value = () => {
            if (roundPlay % 2 === 0) {
                return 'X';
            } else {
                return 'O';
            }
        };
        updateState(index, value());
        render();
    }
};

// Agregamos el evento de click al div con clase "board".
boardDiv.addEventListener('click', handleSquareClick);
/**
 * ######################
 * ## Resetear partida ##
 * ######################
 *
 * Agregamos un manejador de evento al main que compruebe si el elemento
 * clickado es el div con clase "reset". Si es así:
 *
 *  - Eliminamos el elemento padre.
 *
 *  - Reseteamos el tablero.
 *
 *  - Activamos de nuevo la función manejadora "handleSquareClick"
 *
 */

main.addEventListener('click', (e) => {
    // Si hay un ganador...
    const { target } = e;

    if (target.matches('div.reset > *')) {
        target.parentElement.remove();
        resetState();
        boardDiv.addEventListener('click', handleSquareClick);
        render();
    }
});

/**
 * ############
 * ## Render ##
 * ############
 */

function render() {
    // Vaciamos las tres filas de casillas.
    firstRowDiv.innerHTML = '';
    secondRowDiv.innerHTML = '';
    thirdRowDiv.innerHTML = '';
    // Creamos las filas. Para ello debemos recorrer el tablero (board).
    for (let index = 0; index < State.board.length; index++) {
        // Creamos un div y le agregamos el contenido de la posición actual
        // del tablero.
        // Agregamos al div la clase "square" y el atributo "data-index"con
        //  el valor del index actual.

        const square = document.createElement('div');
        square.textContent = State.board[index];
        square.classList.add('square');
        square.setAttribute('data-index', index);
        //recuerda que el tablero tiene 9 elementos. Los tres primeros son
        // las casillas de la primera fila, los 3 siguientes las casillas de
        // la segunda fila, y los tres últimos son las casillas de la última
        // fila. Agrega las casillas como hijo de la fila correspondiente.
        if (index <= 2) firstRowDiv.append(square);
        if (index > 2 && index <= 5) secondRowDiv.append(square);
        if (index > 5) thirdRowDiv.append(square);
    }

    // Almacenamos el valor que retorne la función winner.
    const winner = checkWinner();
    // Si hay un ganador...
    if (winner) {
        // Eliminamos el event listener que permite clickar en los div
        boardDiv.removeEventListener('click', handleSquareClick);
        // es decir, en cada casilla.

        // Creamos un div y le agregamos la clase "reset".
        const panelResult = document.createElement('div');
        panelResult.classList.add('reset');
        // Agregamos al div un párrafo con un mensaje que indique el ganador
        const winnerFinal = document.createElement('p');
        winnerFinal.textContent = winner;
        // y un h2 que diga "Try againg".
        const tryAgain = document.createElement('h2');
        tryAgain.textContent = 'Try Again';
        // Agregamos al main el div.
        panelResult.append(winnerFinal, tryAgain);
        main.append(panelResult);
    }
}

render();
