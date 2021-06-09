/* Modifica el ejercicio anterior para que cuando el argumento que le llega 
a la función double(x) del módulo simple-maths no sea un número, se tire 
un error. */

function double(x) {
    if (Number.isNaN(x)) throw new Error('El argumento debe ser un número');

    return x * 2;
}

module.exports = double;
