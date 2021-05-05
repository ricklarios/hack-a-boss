/**
 * ###############################################################
 * ## Obtener un array con las series de las 5 primeras páginas ##
 * ###############################################################
 *
 * API: https://www.episodate.com/api
 *
 */

'use strict';

// let resultado = [];
// let resultadoFinal = [];
// for (let i = 1; i < 6; ++i) {
//     fetch(`https://www.episodate.com/api/most-popular?page=${i}`)
//         .then((response) => response.json())
//         .then((data) => {
//             // console.log(data.tv_);
//             resultado = data.tv_shows.map((nombre) => nombre.name);
//             // console.log(resultado);
//             for (let index = 0; index < resultado.length; index++) {
//                 resultadoFinal.push(resultado[index]);
//             }
//             if (i === 5) console.log(resultadoFinal);
//         })
//         .catch((error) => console.log(error));
// }

const getSeries = async (limit) => {
    const series = [];

    for (let i = 1; i <= limit; i++) {
        try {
            const response = await fetch(
                `https://www.episodate.com/api/most-popular?page=${i}`
            );
            const { tv_shows } = await response.json();
            series.push(...tv_shows);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(series);
};

getSeries(5);
