/** PROMESAS
 * Recibe dos argumentos: parámetro 'resolve' y parámetro 'reject'
 *  'resolve' retorna la promesa si todo ha ido bien
 *   Si no se ejecuta el 'reject'
 */

'use strict';

const myPromise = new Promise((resolve, reject) => {
    const random = Math.ceil(Math.random() * 9);
    setTimeout(() => {
        if (random <= 5) {
            resolve('Toda ha ido bien');
        } else {
            reject('Todo mal');
        }
    }, 2000);
    //    resolve('El valor que quiero');
});

myPromise
    .then((data) => console.log(data)) // Para lo que se resuelve BIEN
    .catch((error) => console.error(error)) // Para lo que se resuelve MAL
    .finally(() => console.log('Me ejecuto sí o sí'));

// Vamos a usar el método 'then' para decirle que queremos que devuelba el objeto de 'promise' resuelto

/**
 *  Con JONS.stringify y JSON.parse podemos hacer una copia del elemento que queramos:
 *
 */

const Car = {
    brand: 'Opel',
    model: 'Astra',
    color: ['orange', 'blue'],
};

const jsonCar = JSON.stringify(Car);
const jsonToObject = JSON.parse(jsonCar);
console.log(jsonToObject);
