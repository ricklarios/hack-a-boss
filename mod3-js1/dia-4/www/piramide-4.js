'use strict';

const altura = Number(prompt('Introduce la altura deseada'));

for (let lines = 0; lines < altura; lines++) {
    let lineContent = '';

    // Bucle Espacios
    for (let espacios = altura - lines - 1; espacios > 0; espacios--) {
        lineContent += ' ';
    }
    // Bucle Asteriscos
    for (let asterisk = lines + 1; asterisk > 0; asterisk--) {
        lineContent += '*';
    }

    console.log(lineContent);
}
