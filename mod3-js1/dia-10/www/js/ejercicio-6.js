/**
 * #################
 * ## Ejercicio 6 ##
 * #################
 *
 *   1. Obtén todos los coches de la marca Audi.
 *
 *   2. Obtén una lista con todos los colores de los coches de marca BMW.
 *
 *   3. Obtén la media de precio de los coches de marca Ford.
 *
 *   4. Obtén un array con las distintas marcas de coches (no se pueden repetir).
 *
 *   5. Obtén un array con los coches de transmisión manual y de color negro.
 *
 *   6. Obtén la suma total de todos los precios.
 *
 */

'use strict';

const coches = [
    {
        marca: 'BMW',
        modelo: 'Serie 3',
        year: 2012,
        precio: 30000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico',
    },
    {
        marca: 'Audi',
        modelo: 'A4',
        year: 2018,
        precio: 40000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico',
    },
    {
        marca: 'Ford',
        modelo: 'Mustang',
        year: 2015,
        precio: 20000,
        puertas: 2,
        color: 'Blanco',
        transmision: 'automatico',
    },
    {
        marca: 'Audi',
        modelo: 'A6',
        year: 2010,
        precio: 35000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico',
    },
    {
        marca: 'BMW',
        modelo: 'Serie 5',
        year: 2016,
        precio: 70000,
        puertas: 4,
        color: 'Rojo',
        transmision: 'automatico',
    },
    {
        marca: 'Mercedes Benz',
        modelo: 'Clase C',
        year: 2015,
        precio: 25000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico',
    },
    {
        marca: 'Chevrolet',
        modelo: 'Camaro',
        year: 2018,
        precio: 60000,
        puertas: 2,
        color: 'Rojo',
        transmision: 'manual',
    },
    {
        marca: 'Ford',
        modelo: 'Mustang',
        year: 2019,
        precio: 80000,
        puertas: 2,
        color: 'Rojo',
        transmision: 'manual',
    },
    {
        marca: 'Dodge',
        modelo: 'Challenger',
        year: 2017,
        precio: 40000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico',
    },
    {
        marca: 'Audi',
        modelo: 'A3',
        year: 2017,
        precio: 55000,
        puertas: 2,
        color: 'Negro',
        transmision: 'manual',
    },
    {
        marca: 'Dodge',
        modelo: 'Challenger',
        year: 2012,
        precio: 25000,
        puertas: 2,
        color: 'Rojo',
        transmision: 'manual',
    },
    {
        marca: 'Mercedes Benz',
        modelo: 'Clase C',
        year: 2018,
        precio: 45000,
        puertas: 4,
        color: 'Azul',
        transmision: 'automatico',
    },
    {
        marca: 'BMW',
        modelo: 'Serie 5',
        year: 2019,
        precio: 90000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico',
    },
    {
        marca: 'Ford',
        modelo: 'Mustang',
        year: 2017,
        precio: 60000,
        puertas: 2,
        color: 'Negro',
        transmision: 'manual',
    },
    {
        marca: 'Dodge',
        modelo: 'Challenger',
        year: 2015,
        precio: 35000,
        puertas: 2,
        color: 'Azul',
        transmision: 'automatico',
    },
    {
        marca: 'BMW',
        modelo: 'Serie 3',
        year: 2018,
        precio: 50000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico',
    },
    {
        marca: 'BMW',
        modelo: 'Serie 5',
        year: 2017,
        precio: 80000,
        puertas: 4,
        color: 'Negro',
        transmision: 'automatico',
    },
    {
        marca: 'Mercedes Benz',
        modelo: 'Clase C',
        year: 2018,
        precio: 40000,
        puertas: 4,
        color: 'Blanco',
        transmision: 'automatico',
    },
    {
        marca: 'Audi',
        modelo: 'A4',
        year: 2016,
        precio: 30000,
        puertas: 4,
        color: 'Azul',
        transmision: 'automatico',
    },
];

// PARTE 1: Obtén todos los coches de la marca Audi.

const audiCars = coches.filter((coche) => coche.marca === 'Audi');

console.log(audiCars);

// PARTE 2: Obtén una lista con todos los colores de los coches de marca BMW.

const bmwColors = coches
    .filter((coche) => coche.marca === 'BMW')
    .map((coche) => coche.color);

console.log(bmwColors);

// PARTE 3: Obtén la media de precio de los coches de marca Ford.

const pricesFord = coches
    .filter((coche) => coche.marca === 'Ford')
    .map((coche) => coche.precio);

let total = 0;

for (const price of pricesFord) {
    total += price;
}

console.log(total / pricesFord.length);

// PARTE 4. Obtén un array con las distintas marcas de coches (no se pueden repetir).

const brands = coches.map((coche) => coche.marca);

const uniqueBrands = new Set(brands); // con 'new Set()' nos devuelve un ONJETO en el que ninguna propiedad se repite
const result = [...uniqueBrands]; // Creamos un ARRAY
// También lo pod´riamos haber hecho con: const result = array.from(result);

console.log(result);

// PARTE 5. Obtén un array con los coches de transmisión manual y de color negro.

const manualBlack = coches.filter(
    (coche) => coche.transmision === 'manual' && coche.color === 'Negro'
);

console.log(manualBlack);

// PARTE 6. Obtén la suma total de todos los precios.

let total_2 = 0;

for (const coche of coches) {
    total_2 += coche.precio;
}

console.log(total_2);
