'use strict';

// Como seleccionar un nodo por ID:
const secondLi = document.getElementById('dos');

// Seleccionando un único nodo de una forma más guay:
const body = document.querySelector('body'); // Nos permite seleccionar elementos de forma similar a CSS
console.log(body);

// Con querySelector podemos utilizar cualquier selector de CSS:

const header = document.querySelector('#princpial'); // '#' para ID

// Para seleccionar multiples nodos por CLASE:
const miClaseElements = document.getElementsByClassName('miClase');
// Devuelve siempre un ARRAY, aunque sea vacío
console.log(miClaseElements);
for (const element of miClaseElements) {
    console.log(element);
}

// Seleccionar elementos por nombre de ETIQUETA:
const allLi = document.getElementsByTagName('li');
console.log(allLi);

// La forma guay de hacerlo:

const allLi_2 = document.querySelectorAll('li');
console.log(allLi_2);

// Como movernos por los elementos del DOM
// Seleccionamos el nodo HTML:
const html = document.querySelector('html');
// Como mostrar los HIJOS:
console.log(html.children);

// Primer hijo del nodo seleccionado:
console.log(html.firstElementChild);
// Último hijo seleccionado:
console.log(html.lastElementChild);
// Otra forma de seleccionar el body:
const myBody = html.lastElementChild;

console.log(myBody);

// const liImpares = document.querySelector('li:nth-child(odd)');
// for (const li of liImpares) {
//     li.backgroundColor = 'lightcoral';
// }

// Mostrar el hermano anterior o siguiente (en este caso no hay)
console.log(myBody.previousElementSibling);

// En este caso seleccionamos el head desde el html y mostramos el hermano siguiente:
console.log(html.firstElementChild.nextElementSibling); // => body

// mostramos el padre de un elemento:
console.log(myBody.parentElement); // =>  html

// Podemos modificar el TEXTO de los elementos: textContent
// No es posible introducir nuevas eltiquetas HTML con esta propiedad

// Primero seleccionamos el nodo y guardamos la referencia.
secondLi.textContent += ', Adios';

// Podemos modificar el HTML de los elementos: innerHTML

const liName = 'Uno';

// body.innerHTML = '<h1>Hello</h1>'; // Así pisamos el contenido de body
// Esta propiedad si nos permite modificar e intorducir nuevas etiquetas
// body.innerHTML = `
//     <header>
//         <h1>Tope guay</h1>
//     </header>
//     <main>
//         <ul>
//             <li>${liName}</li>
//             <li>Dos</li>
//         </ul>
//     </main>`;

// Modificar atributos de los elementos:

const button = document.querySelector('button');

// Obtenemos el valor de un atributo del nodo (si existe):
console.log(body.getAttribute('lang'));
// Si no existe nos devulve 'null'

// Crear un atributo: p.ej. 'disable' le damos valor 'true'
console.log(button.setAttribute('disabled', true)); // Hemos desabilitado el button

// Comprobamos si un nodo tiene un atributo:
console.log(button.hasAttribute('disabled'));

// Eliminar un atributo:
button.removeAttribute('disabled');

// Modificar el CSS de los elementos:

// Seleccionamos el estilo backgroundColor del body y lo modificamos:
body.style.backgroundColor = 'lightcoral';

// Si queremos agregar varias propiedades de una vez: con cssText
secondLi.style.cssText = `
    color: white;
    background-color: darkblue;
`; // Escribimos con sintaxis de CSS

// Agragando varias propiedades con setAtribute:
secondLi.setAttribute('style', 'color: pink; background-color: black');

// Modifcar las CLASES de un elemento o nodo:

body.classList.add('principal'); // Añade la clase 'principal'
body.classList.remove('miClase'); // Eliminamos la calse 'miClase'
body.classList.toggle('principal'); // La añade si no la tiene y la elimina si ya la tenía
body.classList.toggle('principal');
// Vamos a comprobar si un nodo tiene una clase. Retorna true o false
console.log(body.classList.contains('principal'));

// Vamos a reemplazar una clase por otra:
body.classList.replace('principal', 'secundario');

// Creando, borrando y sustitueyndo elementos:

const ul = document.querySelector('body > main > ul');

// Crear un nuevo elemento:
const newLi = document.createElement('li');

// Agregamos un texto al nuevo li.
newLi.textContent = 'Soy un nuevo liiii...';

// Incorporamos el li como último hijo del ul:
ul.append(newLi);

// Movemos el li de posición. Ahora será el primer hijo del ul:
ul.prepend(newLi);

// Eliminamos un elemento:
newLi.remove();

// Veamos como incorporar multiples li al ul:
// Creamos un array de colores:
const colors = ['amarillo', 'azul', 'negro'];
// Creamos un fragmento de documento donde iremos almacenando
// los li del bucle. Esto se hace para no ir metiendo los li
// de uno en uno en el ul, no es recomendable.
const frag = document.createDocumentFragment();

// Recorremos el array y creamos un li en cada repetición con el valor
// del color en cuestión.
for (const color of colors) {
    // Creamos un li.
    const li = document.createElement('li');

    // Agregamos el color.
    li.textContent = color;

    // Lo "pusheamos" en el fragmento.
    frag.append(li);
}

// Ahora metemos todos los li a la vez en el ul.
ul.append(frag);
