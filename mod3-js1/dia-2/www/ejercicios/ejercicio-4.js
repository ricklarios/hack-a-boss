'use strict';

const num_A = 4;
const num_B = 5;
const option = 5;

switch (option) {
    case 0:
        console.log(num_A + num_B);
        break;
    case 1:
        console.log(num_A - num_B);
        break;
    case 2:
        console.log(num_A * num_B);
        break;
    case 3:
        if (num_B === 0) {
            throw new Error(`No se puede dividir entre 0`);
        } else {
        }
        console.log(num_A / num_B);
        console.log(num_A / num_B);
        break;
    case 4:
        console.log(num_A ** num_B);
        break;
    default:
        throw new Error('Tipo de operación incorrecto');
}
