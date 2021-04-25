'use strict';

function result() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1) return '1';
    if (randomNumber === 2) return '2';
    if (randomNumber === 0) return 'X';
}

function getQuiniela(limit) {
    for (let i = 0; i < limit; i++) {
        console.log(`Resultado ${i + 1}: ${result()}`);
    }
}

getQuiniela(14);
