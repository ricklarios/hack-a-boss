'use strict';

/** FOR
 * 1. Declaramon contador con let y le damos un valor.
 * punto y coma al final;
 *
 * 2. Condición.
 * punto y coma al final;
 *
 * 3. Incremento/decremento en el contador.
 */

// for (let contador = 10; contador > 0; contador--) {
//     console.log(contador);
// }

/** WHILE
 *
 */

let counter = 0;

while (counter < 10) {
    console.log(counter);
    counter += 2;
}

/** DO-WHILE
 *
 */

let counter_B = 10;

do {
    console.log('Hola');
} while (counter_B < 8);

let A = 12;
let B = '2';

// B = parseInt(B); Convierte un STRING en números ENTEROS
// B = parseFloat(B); Idem. número de punto flotante
// B = Number(B); PREFERIBLE

// console.log(A + B); Nos daría 122, un string
console.log(A + Number(B));

for (let i = 0; i < 10; i++) {
    console.log(`Repetición nº ${i}`); // Introducimos una variable dentro de un texto con ${}.
    // Tenemos que hacerlo dentro de comillas fracesas``
}

alert('ALERT!!!'); // No se ejecuta el resto del código hasta q se cierre la ventana

confirm('Está de acuerdo?'); // Devuelve un boleano TRUE o FALSE

console.log(confirm('Está de acuerdo?')); // Podemos visualizarlo en consola

if (confirm('Está de acuerdo?')) {
    alert('Has aceptado los términos.');
} else {
    alert('Has rechazado los términos');
}
// podemos hacer sin llaves en un sola línea:
if (confirm('Está de acuerdo?')) alert('Has aceptado los términos.');

const response = confirm(''); // Podemos guardar en una variable la respuesta de confirm

// PROMPT: nos pide un dato por pantalla

const num_C = Number(prompt('Dime un nº: '));
console.log(num_C);

const name = prompt('Dime tu nombre');
const age = prompt('Dime tu edad');

alert(`Hola ${name}! tienes ${age} años.`);
