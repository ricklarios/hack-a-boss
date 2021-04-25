'use strict';

// TODO 1. Generar un numero entero aleatorio del 1 al 6

const dice = () => Math.ceil(Math.random() * 6);

//* contador para almacenar las tiradas:
let total = 0;

// TODO 2. Tiramos los dados:

for (let i = 0; total < 100; i++) {
    //* Valor de la tirada:
    const diceValue = dice();

    //* En cada tirada acumulamos los valores que saque el dado:
    total += dice;

    //* Lo mostramos por consola:

    console.log(`Tirada ${i}, ha salido un ${diceValue}.`);
    console.log(`Tienes un total de ${total} puntos.`);
    console.log('========================================');
}
//* Cuando acaba la partida:
console.log('¡Fin de la partida!!');
