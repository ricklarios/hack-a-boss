/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Define una función a la que le pases como parámetro un número y nos diga
 * si dicho número es primo (true) o no (false).
 *
 * [Opcional]: crea una segunda función a la que le pases como parámetro un nº
 * máximo y nos muestre por consola todos los nº primos del 2 al nº que hemos
 * pasado como parámetro. La función que creaste al principio comprueba si un
 * número es primo o no, quizás puedas hacer uso de ella.
 *
 */

// let num = Number(prompt('Introduce un número: '));

// for (i = 2; i <= num; i++) {
//     if (num % i === 0 && num !== i) {
//         console.log('El número no es PRIMO');
//         break;
//     } else {
//         console.log('El número es PRIMO');
//     }
// }

function isPrime(num) {
    for (let i = 2; i <= num / 2; i++) {
        // Podemos dividir hasta la mitad, no es necesario comprobarlo los nºs superiores a la mitad
        if (num % i === 0) return false;
    }
    return true;
}

function allPrimes(num) {
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) console.log(`El nº ${i} es primo`);
    }
}

allPrimes(100);
