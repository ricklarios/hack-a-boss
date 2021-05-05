/* ############
 * ## Alarma ##
 * ############
 *
 * Simula un despertador que suene cuando pasan "x" segundos.
 *
 * - Muestra los segundos por consola.
 *
 * - Cuando la cuenta llegue a 0, muestra un mensaje indicando que suena la alarma.
 *
 */

function alarm(secondsToRing) {
    let seconds = 1;
    const clock = setInterval(() => {
        if (seconds === secondsToRing) {
            console.log('RIIIING!!!');
            clearInterval(clock);
        } else {
            console.log(`Faltan ${secondsToRing - seconds} segundos`);
            seconds++;
        }
    }, 1000);
}

// SOLUCION DAVID:

alarm2(5);

function alarm2(seconds2) {
    const interval = setInterval(() => {
        if (seconds2 > 0) {
            console.log(seconds2);
            seconds2--;
        } else {
            console.log('RIIINNNGGGG!!');
            clearInterval(interval);
        }
    }, 1000);
}

alarm2(10);
