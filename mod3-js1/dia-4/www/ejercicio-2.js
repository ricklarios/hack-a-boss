'use strict';

// Ejercicio calculadora del dia-2 con function

function calculate(num_A, num_B, option) {
    switch (option) {
        case 0:
            return num_A + num_B;

        case 1:
            return num_A - num_B;

        case 2:
            return num_A * num_B;

        case 3:
            if (num_B === 0) {
                throw new Error('No se puede dividir entre 0');
            } else {
                return num_A / num_B;
            }
        case 4:
            return num_A ** num_B;

        default:
    }
}
