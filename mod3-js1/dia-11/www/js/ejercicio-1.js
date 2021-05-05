'use strict';

/**
 *  =======================
 *  ··· P E R S O N A S ···
 *  =======================
 */
const persons = [
    {
        name: 'Pedro',
        age: 35,
        code: 'ES',
        infected: true,
        petName: 'Troski',
    },
    {
        name: 'Elisabeth',
        age: 14,
        code: 'UK',
        infected: true,
        petName: 'Firulais',
    },
    {
        name: 'Pablo',
        age: 25,
        code: 'ES',
        infected: false,
        petName: 'Berritxu',
    },
    {
        name: 'Angela',
        age: 18,
        code: 'DE',
        infected: false,
        petName: 'Noodle',
    },
    {
        name: 'Boris',
        age: 50,
        code: 'UK',
        infected: true,
        petName: 'Leon',
    },
    {
        name: 'Donald',
        age: 69,
        code: 'US',
        infected: false,
        petName: 'Pence',
    },
    {
        name: 'Pepito',
        age: 36,
        code: 'ES',
        infected: false,
        petName: 'Carbón',
    },
];

/**
 *  =======================
 *  ··· M A S C O T A S ···
 *  =======================
 */
const pets = [
    {
        petName: 'Troski',
        type: 'perro',
    },
    {
        petName: 'Firulais',
        type: 'perro',
    },
    {
        petName: 'Berritxu',
        type: 'loro',
    },
    {
        petName: 'Noodle',
        type: 'araña',
    },
    {
        petName: 'Leon',
        type: 'gato',
    },
    {
        petName: 'Pence',
        type: 'perro',
    },
    {
        petName: 'Carbón',
        type: 'gato',
    },
];

/**
 *  =======================
 *  ··· A N I M A L E S ···
 *  =======================
 */
const animals = [
    {
        type: 'perro',
        legs: 4,
    },
    {
        type: 'araña',
        legs: 8,
    },
    {
        type: 'gato',
        legs: 4,
    },
    {
        type: 'loro',
        legs: 2,
    },
    {
        type: 'gallina',
        legs: 2,
    },
];

/**
 *  ===================
 *  ··· P A Í S E S ···
 *  ===================
 */
const countries = [
    {
        code: 'CN',
        name: 'China',
        population: 1439,
        infected: 81999,
    },
    {
        code: 'US',
        name: 'Estados Unidos',
        population: 331,
        infected: 112468,
    },
    {
        code: 'DE',
        name: 'Alemania',
        population: 83,
        infected: 56202,
    },
    {
        code: 'ES',
        name: 'España',
        population: 46,
        infected: 72248,
    },
    {
        code: 'UK',
        name: 'Reino Unido',
        population: 67,
        infected: 17301,
    },
];

/**
 *  ###########################
 *  ## E J E R C I C I O   1 ##
 *  ###########################
 *
 *  Número total de infectados del array de personas.
 *
 */

const infectados = persons.reduce((acc, value) => {
    if (value.infeted) {
        acc++;
        return acc++;
    } else {
        return acc;
    }
}, 0);

// Solución DAVID:
const infected = persons.filter((person) => person.infected).length;

console.log(infectados);
console.log(infected);

/**
 *  ###########################
 *  ## E J E R C I C I O   2 ##
 *  ###########################
 *
 *  Número total de infectados en el array de países.
 *
 */

const infectadosCountries = countries.reduce((acc, value) => {
    acc += value.infected;
    return acc;
}, 0);

// Solución DAVID:
const totalInfected = countries.reduce((acc, country) => {
    return (acc += country.infected);
}, 0);

console.log(totalInfected);
console.log(infectadosCountries);

/**
 *  ###########################
 *  ## E J E R C I C I O   3 ##
 *  ###########################
 *
 *  País con más infectados.
 *
 */

const mostInfected = countries.reduce((acc, country) => {
    if (country.infected > acc.infected) acc = country;
    return acc;
});
console.log(mostInfected);

/**
 *  ###########################
 *  ## E J E R C I C I O   4 ##
 *  ###########################
 *
 *  Array con el nombre de todas las mascotas.
 *
 */

const petNames = pets.map((pet) => pet.petName);

console.log(petNames);

// const namePets = pets.map((valor) => {
//     if (valor.petName !== undefined) return valor.petName;
//     else return valor.name;
// });
// console.log(namePets);

/**
 *  ###########################
 *  ## E J E R C I C I O   5 ##
 *  ###########################
 *
 *  Array de españoles con perro.
 *
 */

const spanishPets = persons.filter((person) => {
    return pets.find((pet) => {
        return (
            person.petName === pet.petName &&
            person.code == 'ES' &&
            pet.type == 'perro'
        );
    });
});

console.log(spanishPets);

/**
 *  ###########################
 *  ## E J E R C I C I O   6 ##
 *  ###########################
 *
 *  Array con las personas. A mayores, este array debe incluír el objeto con los datos de su mascota
 *
 *  {
 *      name: 'Pedro',
 *      age: 35,
 *      country: 'ES',
 *      infected: true,
 *      petName: {
 *          petName: 'Troski',
 *          type: 'perro',
 *      }
 *  }
 *
 */

const personsWithAnimal = persons.map((person) => {
    return {
        name: person.name,
        age: person.age,
        country: person.code,
        infected: person.infected,
        petName: pets.find(
            (animal) =>
                person.petName === animal.petName ||
                person.petName === animal.name
        ),
    };
});
console.log(personsWithAnimal);

// Solución DAVID:
const personsWithAnimal2 = persons.map((person) => {
    return {
        ...person, // Copio todas las propiedades de persons y 'piso' petName con mi ocndición.
        petName: pets.find((animal) => person.petName === animal.petName),
    };
});
console.log(personsWithAnimal2);

/**
 *  ###########################
 *  ## E J E R C I C I O   7 ##
 *  ###########################
 *
 *  Número total de patas de las mascotas de las personas.
 *
 */

const numberOfLegs = persons.reduce((acc, person) => {
    pets.find((pet) => {
        pet.petName === person.petName &&
            animals.find((animal) => {
                if (animal.type === pet.type) acc += animal.legs;
            });
    });
    return acc;
}, 0);

console.log(numberOfLegs);

/**
 *  ###########################
 *  ## E J E R C I C I O   8 ##
 *  ###########################
 *
 *  Array con las personas que tienen animales de 4 patas
 *
 */

/**
 *  ###########################
 *  ## E J E R C I C I O   9 ##
 *  ###########################
 *
 *  Array de países que tienen personas con loros como mascota.
 *
 */

/**
 *  #############################
 *  ## E J E R C I C I O   1 0 ##
 *  #############################
 *
 *  Número de infectados totales (en el array de países) de los países con mascotas de ocho patas.
 *
 */
