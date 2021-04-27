// VALIDACIONES DE DATOS:

// Cómo comprobar que un NÚMERO ES UN NÚMERO: NaN / Not a Number

'use strict';

const num = Number('1234r');

console.log(num);

// Nos devuelve NaN

if (Number.isNaN(num)) console.error('No es un Número');
// typeof nos engañaría en este caso

// Cómo comprobar STRINGS:
const string = 12;

console.log(string);

if (typeof string !== 'string') console.error('No es un string');

// Cómo comprobar ARRAYS:
const myArray = ['Hola'];

console.log(myArray);

if (!Array.isArray(myArray)) {
    console.error(myArray, 'No es un Array');
} else {
    console.log(myArray, 'Es un Array');
}

// Cómo comprobar OBJECTS: propiedad CONSTRUCTOR

console.log(myArray.constructor.name);

const coche = {
    modelo: 'turismo',
    marca: 'hyundai',
    color: 'gris',
};

if (coche.constructor.name !== 'Object') {
    console.error('No es un objeto');
} else {
    console.error('Es un objeto');
}

// En los apuntes del dia-8 está DESTRUCTURING con ARRAYS + OBJECTS + Intercambio de valores /

/**
 * ############
 * ## Arrays ##
 * ############
 */

const nums = [12, 140, 35];

// let a = nums[0];
// let b = nums[1];
// let c = nums[2];

const [a, , c] = nums;

console.log(a, c);

/**
 * ############################
 * ## Intercambio de valores ##
 * ############################
 */

let x = 100;
let y = 1;

// const tmp = x; // tmp = 100;
// x = y; // x = 1;
// y = tmp; // y = 100;

// Si te fijas detenidamente no deja de ser destructuring con arrays.
// Se aplica la misma lógica.
[x, y] = [y, x];

console.log(x, y);

/**
 * #############
 * ## Objetos ##
 * #############
 */

const car = {
    brand: 'Opel',
    model: 'Corsa',
};

// let z = car.brand;
// let w = car.model;

let { model, brand: marca } = car;

console.log(model, marca);

// Parámetro de tipo objeto con valores por defecto en una función.
function getInfo({ name = 'David', age = 34 } = {}) {
    return `Me llamo ${name} y tengo ${age} años.`;
}

// Si llamo a la función y no le paso un objeto con un nombre y una edad...
console.log(getInfo());

const sara = {
    name: 'Sara',
    age: 25,
};

// Si le paso a la función el objeto "sara" creado anteriormente...
console.log(getInfo(sara));

// También es posible crear el objeto directamente dentro de los paréntisis
// del llamado a la función.
console.log(getInfo({ name: 'Raquel', age: 48 }));
