/**
 * #################
 * ## Ejercicio 8 ##
 * #################
 *
 * Dado el siguiente tablero (un array de arrays) haz las modificaciones necesarias para
 * lograr esto:
 *
 *     - Figura 1:
 *
 *      [
 *          ['X', '-', '-', '-', 'X'],
 *          ['-', 'X', '-', 'X', '-'],
 *          ['-', '-', 'X', '-', '-'],
 *          ['-', 'X', '-', 'X', '-'],
 *          ['X', '-', '-', '-', 'X']
 *      ];
 *
 *
 *     - Figura 2:
 *
 *      [
 *          ['X', 'X', 'X', 'X', 'X'],
 *          ['X', '-', '-', '-', 'X'],
 *          ['X', '-', '-', '-', 'X'],
 *          ['X', '-', '-', '-', 'X'],
 *          ['X', 'X', 'X', 'X', 'X']
 *      ];
 *
 */

'use strict';

const board = [
    ['-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-'],
];

const board = [
    ['-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-'],
];

//Figura 2

/*      [
 *          ['X', 'X', 'X', 'X', 'X'],
 *          ['X', '-', '-', '-', 'X'],
 *          ['X', '-', '-', '-', 'X'],
 *          ['X', '-', '-', '-', 'X'],
 *          ['X', 'X', 'X', 'X', 'X']
 *      ];
 *
 */

for (let filas = 0; filas < board.length; filas++) {
    for (let columnas = 0; columnas < board.length; columnas++) {
        if (
            filas === 0 ||
            filas === board.length - 1 ||
            columnas === 0 ||
            columnas == board.length - 1
        ) {
            board[filas][columnas] = 'X';
        } else {
            board[filas][columnas] = '-';
        }
    }
}

console.log(board);

console.log('#############');

for (let filas = 0; filas < board.length; filas++) {
    for (let columnas = 0; columnas < board.length; columnas++) {
        if (filas === columnas || board.length - filas - 1 === columnas) {
            board[filas][columnas] = 'X';
        } else {
            board[filas][columnas] = '-';
        }
    }
}
console.log(board);
