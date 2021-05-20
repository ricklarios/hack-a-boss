/**
 * #################
 * ## 👻 B O O 👻 ##
 * #################
 *
 * Haz que, cada segundo que pase, el div "boo" aparezca ubicado en una
 * posición aleatoria de la ventana y que el color del body cambie, también
 * de forma aleatoria "rgb(?, ?, ?)".
 *
 * ¡Ojo! No dejes que Boo se salga de los márgenes de la ventana, debemos
 * poder ver a Boo sin hacer scroll en ningún momento.
 *
 * element.getBoundingClientRect() --> devuelve una serie de propiedades
 * del nodo seleccionado, entre ellas, la altura y el ancho del elemento.
 *
 * Bonus point --> haz que aparezcan más emojis acompañando a Boo. Para ello
 *                 deberás crear más divs y seleccionarlos a todos. Esto
 *                 requerirá a mayores que cambies cositas en el código.
 *
 */

const div = document.querySelector('div');
console.log(div);
const divProps = div.getBoundingClientRect('div');
console.log(divProps);
const body = document.querySelector('body');

function getRandomX(min, max) {
    return Math.random() * (max - min);
}
function getRandomY(min, max) {
    return Math.random() * (max - min);
}
function getRandom(max) {
    return Math.round(Math.random() * max);
}
const divWidth = divProps.width;
const divHeight = divProps.height;
console.log(divWidth);
// setInterval que se repite cada segundo.
setInterval(() => {
    // Cambiamos el color de fondo del body aleatoriamente.
    body.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(
        255
    )}, ${getRandom(255)})`;

    // Cambiamos el contenido del párrafo.
    div.style.fontSize = `${getRandomX(120, 500)}px`;
    div.style.left = `${getRandomX(divWidth, innerWidth)}px`;
    div.style.top = `${getRandomY(divHeight, innerHeight)}px `;
}, 1000);
