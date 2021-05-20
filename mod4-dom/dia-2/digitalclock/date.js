'use strict';

// Obetenemos la fecha actual:

const now = new Date();

// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());

// setInterval(() => {
//     const current = new Date();
//     const hour = current.getHours();
//     const minutes = current.getMinutes();
//     const seconds = current.getSeconds();

//     console.log(`${hour}:${minutes}:${seconds}`);
// }, 1000);

const options = {
    weekday: 'long', // Para que aperezca como palabra
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
const formatDate = now.toLocaleDateString('es-ES', options);

console.log(formatDate);
