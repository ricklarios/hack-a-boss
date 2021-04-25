'use strict';

// Ejercicio BOMBA del dia-2 con function

// let aleatorio = Math.round(Math.random() * (11 - 1) + 1);

function getRandomNumber() {
    Math.round(Math.random() * (11 - 1) + 1);
}

let password = getRandomNumber();
console.log(password);

function deactivateBomb(limit, bombPassword) {
    for (let i = limit; i > 0; i--) {
        const userNumberA = Number(
            prompt(`Intento nº ${i}. Introduce un número del 1 al 10: `)
        );

        if (userNumberA === password) return true;
    }
    return false;
}

// let password = getRandomNumber();

if (deactivateBomb(3, getRandomNumber())) {
    alert('Vives un día más');
} else {
    alert('BOOOM!!!');
}
