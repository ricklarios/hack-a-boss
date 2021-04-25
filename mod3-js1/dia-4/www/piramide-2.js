'use strict';

const altura = Number(prompt('Introduce la altura deseada'));

for (let i = 0; i < altura; i++) {
    let fila = '';

    for (let nums = i + 1; nums < 0; nums--) {
        fila += i + 1;
    }
    console.log(fila);
}
