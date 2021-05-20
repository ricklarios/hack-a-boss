'use strict';

// Obtenemos todos los elementos necesarios desde el localStorage.
const storageBoard = window.localStorage.getItem('board');

const storageRound = window.localStorage.getItem('round');

/**
 *  Inicializamosel estado. Si hay algún valor en el localStorage lo tomamos de ahí,
 *  de lo contrario inicializamos por defecto:
 *
 *      - board = Array(9).fill(null)
 *      - round = 0
 *
 */

const State = {
    board: storageBoard ? JSON.parse(storageBoard) : Array(9).fill(null),
    round: storageRound ? JSON.parse(storageRound) : 0,
};

/**
 * ###############
 * ## saveState ##
 * ###############
 *
 * Función que se encargade guardar en localStorage el estado actual del State.
 * Recuerda que el State tiene dos propiedades, debes guardar las dos.
 *
 */

const saveState = () => {
    const boardJSON = JSON.stringify(State.board);
    localStorage.setItem('board', boardJSON);
    //  Se puede resumir en una línea: localStorage.setItem('board', JSON.stringify(State.board));
    const roundJSON = JSON.stringify(State.round);
    localStorage.setItem('round', roundJSON);
};

/**
 * #################
 * ## updateState ##
 * #################
 *
 * En funcion de la casilla que seleccione el jugador actual cambiamos el valor
 * del tablero y pasamos a la siguiente ronda.
 *
 * Guardamos el State.
 *
 */

const updateState = (index, value) => {
    State.board[index] = value;
    State.round++;

    saveState();
};

/**
 * ################
 * ## resetState ##
 * ################
 *
 * Si el juego finaliza debemos permitir al jugador resetear la partida a los valores
 * por defecto.
 *
 * Guardamos el State.
 *
 */

const resetState = () => {
    State.board = Array(9).fill(null);
    State.round = 0;

    saveState();
};

/**
 * #################
 * ## checkWinner ##
 * #################
 *
 * Comprobamos si ya hay un ganador. Para ello debemos comprobar todas las combinaciones ganadoras
 * posibles.
 *
 *  - Si el ganador es el jugador 1 (la X) retornamos un mensaje de victoria.
 *
 *  - Si el ganador es el jugador 2 (la O) retornamos un mensaje de victoria.
 *
 *  - Si no hay más intentos y hubo empate retornamos un mensaje de empate.
 *
 *  - En cualquier otra circunstancia retornamos un false;
 *
 */
const checkWinner = () => {
    // Combinaciones posibles para una victoria.
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // Recorremos las combinaciones posibles.
    for (let i = 0; i < winningLines.length; i++) {
        // Desestructuramos los 3 valores de  la linea actual.
        const [a, b, c] = winningLines[i];
        // Si esto se cumple...
        if (
            State.board[a] &&
            State.board[a] === State.board[b] &&
            State.board[a] === State.board[c]
        ) {
            return `Jugador ${State.board[a]} es el ganador!!`;
        } else if (State.round === 8) {
            return 'Es un empate';
        }
    }
    return false;
};

export default State;
export { updateState, resetState, checkWinner };
