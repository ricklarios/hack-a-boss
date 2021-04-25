'use strict';

let aleatorio = Math.round(Math.random() * (11 - 1) + 1);
console.log(aleatorio);

for (let i = 0; i <= 5; i++) {
    console.log(i);
    let contador = 5 - i;
    if (contador === 0) {
        alert('Has agotado tus intentos. La bomba ha explotado!!');
        break;
    } else {
        const num_A = Number(prompt('Introduce un número del 1 al 10: '));
        console.log(num_A);
        if (num_A === aleatorio) {
            alert('Enhorabuena! Has desactivado la bomba!!');
            break;
        } else {
            alert(`ERROR!! Cuidado, te quedan ${contador - 1} intentos`);
        }
    }
}

/**
 * Para redondear:
 *
 * - Math.round(); Redondeo clásico, por encima o debajo de 0.5
 *
 * - Math.ceil(); Redondea al alza
 *
 * - Math.floor(); Redondea a la baja
 */
