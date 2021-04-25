'use strict';

const name = prompt('Dime tu nombre');
const surname = prompt('Dime tu apellido');

if (confirm('Quieres un café?')) {
    alert(`Bienvenid@ ${name} ${surname}!! En breve estará su café`);
} else {
    alert(
        `Bienvenid@ ${name} ${surname}!! Para el que no quiere tengo yo mucho`
    );
}
