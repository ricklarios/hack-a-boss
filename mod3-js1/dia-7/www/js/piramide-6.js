'use strict';

const height = 4;

// Rombo - Parte 1

for (let lines = 0; lines < height; lines++) {
    let lineContent = '';

    // Espacios:
    for (let spaces = height - 1 - lines; spaces > 0; spaces--) {
        lineContent += ' ';
    }

    // Asteriscos:
    for (let asterisk = 2 * lines + 1; asterisk > 0; asterisk--) {
        lineContent += '😋';
    }
    console.log(lineContent);
}

// Rombo - Parte 2

for (let lines = height - 1; lines > 0; lines--) {
    let lineContent = '';

    // Espacios:
    for (let spaces = height - lines; spaces > 0; spaces--) {
        lineContent += ' ';
    }

    // Asteriscos:
    for (let asterisk = 2 * lines - 1; asterisk > 0; asterisk--) {
        lineContent += '😋';
    }
    console.log(lineContent);
}
