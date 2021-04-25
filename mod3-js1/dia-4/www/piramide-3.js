'use strict';

// let fila = '';
// const altura = Number(prompt('Introduce la altura deseada'));

// for (let i = 1; i < altura + 1; i++) {
//     fila += i;
//     console.log(fila);
// }

const altura = 5;

for (let lines = 0; lines < altura; lines++) {
    let lineContent = '';

    for (let nums = 0; nums <= lines; nums++) {
        lineContent += nums + 1;
    }
    console.log(lineContent);
}
