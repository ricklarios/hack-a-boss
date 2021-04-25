'use strict';

const num_A = 4;
const num_B = 0;
const option = '+';

if (option === '+') {
    console.log(num_A + num_B);
} else if (option === '-') {
    console.log(num_A - num_B);
} else if (option === '*') {
    console.log(num_A * num_B);
} else if (option === '/') {
    if (num_B === 0) {
        throw new Error('no se puede dividir entre 0');
    } else {
        console.log(num_A / num_B);
    }
} else if (option === '^') {
    console.log(num_A ** num_B);
} else {
    throw new Error('Tipo de operación incorrecto');
}
