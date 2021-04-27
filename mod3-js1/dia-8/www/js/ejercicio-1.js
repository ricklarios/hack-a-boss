'use strict';

const coche = {
    modelo: 'turismo',
    marca: 'hyundai',
    color: 'gris',
};

console.table(coche);

coche.color = 'azul';
coche.matriculacion = 2015;

console.table(coche);

const result = confirm('');

if (result) {
    console.table(Object.keys(coche));
} else {
    console.table(Object.values(coche));
}
