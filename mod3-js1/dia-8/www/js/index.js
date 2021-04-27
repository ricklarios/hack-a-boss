'use strict';

/**
 *  OBJETOS:
 *
 */

// Podemos definirlos con LET o CONST:

// const Person = {}; Esto sería un OBJETO VACÍO

const person = {
    name: 'Carlos', // Le damos nombre a la propiedad seguida de = y las separamos con comas
    age: 32,
    favouriteFood: ['hamburguesa', 'pizza'],
    pet: {
        // Podemos definir un OBJETO dentro de OTRO:

        name: 'Carbón',
        type: 'gato',
    },
};

console.log(person);

// Para llamar al OBJETO y sus PROPIEDADES:

console.log(person.name);
console.log(person.favouriteFood[1]);

// Otra forma: POR CORCHETES

console.log(person['age']);
console.log(person.pet.name);

/**
 *  MÉTODOS:
 */

const person_2 = {
    name: 'Carlos', // Le damos nombre a la propiedad seguida de = y las separamos con comas
    age: 32,
    favouriteFood: ['hamburguesa', 'pizza'],
    pet: {
        // Podemos definir un OBJETO dentro de OTRO:

        name: 'Carbón',
        type: 'gato',
    },
    sayHello: function () {
        // Este sería el MÉTODO
        console.log(
            `Soy ${person_2.name} y tengo ${person_2.age} y mi gato se llama ${person_2.pet.name}`
        );
    },
};

person_2.sayHello();
// Podemos modificar una propiedad fuera de la expresión:

person_2.age = 45;

// Podemos definir una nueva propiedad fuera:

person_2.favouriteNumber = 14;

// Para hacer una COPIA de unn OBJETO:

const copiaPerson = {
    ...person,
    favoriteNumber: 14, // Y añadirle una nueva propiedad
}; // Hay que hacerlo con SPREAD OPERATOR!! Si no al modificar la copia modificamos el original

console.log(copiaPerson);

// Podemos agregar un MÉTODO a un OBJETO ya creado:

copiaPerson.sayNumber = function () {
    console.log(3);
};

console.log(copiaPerson);

// Para ver las propiedades/valores de un objeto:

console.log(Object.keys(person)); // PROPIEDADES Me devuelve un ARRAY
console.log(Object.values(person)); // VALORES Me devuelve un ARRAY

// Incompleto:
// const
// for (const key of Object.keys.person) {
//     console.log(key);
// }
