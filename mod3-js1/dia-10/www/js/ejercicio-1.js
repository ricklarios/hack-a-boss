/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Declara la arrow function "sayHello" y pásale como parámetro otra función llamada
 * "userInfo".
 *
 * - La función "userInfo" solicitará dos parámetros (nombre y apellido). Esta función
 *   nos devolverá un saludo que incluya el nombre y el apellido.
 *
 * - "sayHello(myCallback)" solicitará como parámetro un callback. En el interior de la
 *   función deben existir dos variables que almacenen un nombre y un apellido. Serán los
 *   argumentos que pasaremos al llamado del callback dentro de "sayHello". Debemos mostrar
 *   con un "alert" lo que retorne el callback.
 *
 * - Una vez hayas terminado, ¿serías capaz de crear la función "userInfo" dentro del llamado
 *   a "sayHello"?
 *
 */

'use strict';

const userInfo = (nombre, apellido) => `Hola ${nombre} ${apellido}`;

function sayHello(myCallBack) {
    const name = 'David';
    const lastName = 'Gonzales';
    alert(myCallBack(name, lastName));
}

sayHello(userInfo);
