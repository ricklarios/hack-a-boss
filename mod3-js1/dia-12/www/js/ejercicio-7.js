/**
 * #################
 * ## Ejercicio 7 ##
 * #################
 *
 * Crea un nuevo array con los amigos en común que tienen dos usuarios de Instagram. El ejercicio
 * debe ser resuelto sin utilizar ningún método excepto push.
 *
 */

'use strict';

const pacosFollowers = ['Manolo', 'Marta', 'Pablo', 'Kevin'];

const luciasFollowers = ['Pablo', 'Marta', 'Ana'];

const amigosEnComun = [];

for (let i = 0; i < pacosFollowers.length; i++) {
    for (let x = 0; x < luciasFollowers.length; x++) {
        if (pacosFollowers[i] === luciasFollowers[x]) {
            amigosEnComun.push(pacosFollowers[i]);
        }
    }
}

for (let i = 0; i < amigosEnComun.length; i++) {
    console.log(amigosEnComun[i]);
}
