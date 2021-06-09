/* Crea otro módulo index que hace uso del anterior. Este módulo usará 
como entrada el primer argumento que se le pasa a la ejecución del módulo, 
y se lo pasará al módulo simple-maths, quien calculará el doble del número, 
e index se encargará de imprimir el resultado por pantalla.

Pista 1: los valores almacenados en argv son siempre considerados strings, 
por lo que deberemos hacer la conversión a número con Number(x). */

const double = require('./simple-maths');

const value = Number(process.argv[2]);

const result = double(value);

console.log(result);
