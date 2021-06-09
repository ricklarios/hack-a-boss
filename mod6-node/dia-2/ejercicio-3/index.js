/* Modifica el módulo index para capturar el error y mostrarle 
al usuario el mensaje El argumento debe ser un número por pantalla.

Pista 1: Hay varias formas de comprobar si una 
variable contiene un número en JS, las más fáciles 
de usar son usar Number.isFinite(x) o Number.isNaN(x).

Pista 2: puedes usar throw new Error() para tirar un 
error, y un bloque try-catch para capturarlo */

const double = require('./simple-maths');

const value = Number(process.argv[2]);

try {
    const result = double(value);

    console.log(result);
} catch (error) {
    console.log(error.message);
}
