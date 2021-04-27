/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea el objeto persona con las propiedades name y age. A mayores, crea un método que reciba un
 * array de animales y genere una nueva propiedad favoriteAnimals que almacene dicho array.
 *
 * Crea un segundo método que permita modificar cualquier propiedad del objeto. Este método debe
 * recibir dos argumentos, el nombre de la propiedad en formato string, y el valor que queremos
 * meter en la misma.
 *
 */

'use strict';

const person = {
    name: 'Manolo',
    age: 12,
    getAnimals: function (animalList) {
        this.favoriteAnimals = animalList;
    },
    changePropiedad: function (propiedad, valor) {
        this[propiedad] = valor;
    },
};

console.log(person);
person.getAnimals(['gato', 'perro']);
console.log(person);

person.changePropiedad('name', 'pepito');
console.log(person.name);
