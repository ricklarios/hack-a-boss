'use strict';

// Propiedades más importantes de WINDOW

// Altura del area del contenido de la ventana (pix):
console.log(window.innerHeight); // Mide las dimensiones del rectángulo de la ventana,
// no de pestaña, zona de la URL, etc.
// Ancho del area del contenido de la ventana (pix):
console.log(window.innerWidth);
// Altura del area del contenido de la ventana COMPLETA(pix):
console.log(window.outerHeight);
// Ancho del area del contenido de la ventana COMPLETA(pix):
console.log(window.outerWidth);

// Propiedad (de window) u objeto LOCATION:
console.log(window.location);
// Podemos usarlo para redirigir a un usuario a otra págnina:
// console.log((window.location.href = 'https://google.com'));

// userAgent (dia-1 de DAVID)

// Mostrar el SCROLL horizontal y vertical (en px):
console.log(window.scrollX, window.scrollY);

// Objeto CONSOLE:
console.log(window.console); // Nos enseña todos sus métodos

// Vamos a abrir una persataña y guardar la referencia en una variable.
const google = window.open('https://google.com');

// Podemos usar la referencia anterior para cerrar la pestaña:
setTimeout(() => google.close(), 3000);

// Abrimos la ventana de IMPRESORA:
console.log(window.print()); // Deja todo el código en espera hasta que cerramos la venta de impresión.
