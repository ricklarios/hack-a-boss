import './tic-tac-toe.css';
import Header from './components/header/Header.js';
import GameBoard from './components/game-board/GameBoard.js';
import Footer from './components/footer/Footer.js';
import getRandomPosition from './helpers.js';
import { useState } from 'react';

const INITIAL_BOARD = new Array(9).fill(null);

function TicTacToe() {
    const [gameBoard, setGameBoard] = useState(INITIAL_BOARD);
    const [isGameOver, setGameOver] = useState(false);

    function onClickGameBox(playerPosition) {
        //TODO Comprobar que es una casilla vacía

        const isValidPosition = !gameBoard[playerPosition];
        if (isValidPosition && !isGameOver) {
            // marcar una casilla con X (jugador)
            gameBoard[playerPosition] = 'X';
            const isGameFinished = getGameOver(gameBoard);
            setGameBoard(gameBoard);
            getGameOver(isGameFinished);
            //TODO (máquina) marca una casilla con O
            // Solución secilla: marcar la primera casilla vacía
            if (!isGameOver) {
                machineIA(gameBoard);
                const isGameFinished = getGameOver(gameBoard);
                setGameBoard(gameBoard);
                setGameOver(isGameFinished);
            }
        }

        //TODO Identificar si la partida ha terminado
    }
    function resetGameBoard() {
        setGameBoard(Array(9).fill(null));
        setGameOver(false);
    }

    const winner = getGameWinner(gameBoard);

    return (
        <div className='App'>
            <Header getGameOver={getGameOver} />
            <GameBoard gameBoard={gameBoard} onClickGameBox={onClickGameBox} />
            <Footer getGameOver={getGameOver} />
        </div>
    );
}

export default TicTacToe;

function machineIA(gameBoard) {
    let freeBoxes = [];

    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === null) {
            freeBoxes.push(i);
        }
    }

    const nextMove = freeBoxes[getRandomPosition(freeBoxes.length)];
    gameBoard[nextMove] = 'O';
    setTimeout(() => setGameBoard([...gameBoard]), 1000);
}

function getWinner(gameBoard) {
    const winGameConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const positionWinner = winGameConditions.find(
        ([x, y, z]) =>
            gameBoard[x] === gameBoard[y] &&
            gameBoard[y] === gameBoard[z] &&
            gameBoard[x] !== null
    );
    if (positionWinner) {
        return gameBoard[positionWinner[0]];
    }
}

function getGameOver(gameBoard) {
    // Si hay un ganador
    const winner = getWinner(gameBoard);

    // Empate: todas las casillas ocupadas

    return gameBoard.every((position) => position !== null);
}

// function getMachMove(gameBoard) {
//     return gameBoard.findIndex((position) => !position);
// }
