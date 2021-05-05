/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todos los municipios de la
 * provincia de Lugo.
 *
 * Además, el nombre de los municipios debe estar ordenado por orden alfabético inverso.
 *
 * - Resuélvelo con then & catch.
 *
 * - Resuélvelo con async / await.
 *
 * API: https://www.el-tiempo.net/api
 *  https://www.el-tiempo.net/api/json/v2/municipios
 *
 */

'use strict';

fetch('https://www.el-tiempo.net/api/json/v2/municipios')
    .then((response) => response.json())
    .then((municipios) => {
        const municipiosLugo = municipios
            .filter((municipio) => {
                return municipio.NOMBRE_PROVINCIA === 'Lugo';
            })
            .map((municipio) => municipio.NOMBRE);
        console.log(municipiosLugo.sort().reverse());
    })
    .catch((error) => console.log(error));

// - Resuélvelo con async / await.

const getMunicipalities = async (URL) => {
    try {
        const response = await fetch(URL);

        const municipios = await response.json();

        const municipiosLugo2 = municipios
            .filter((municipio) => municipio.NOMBRE_PROVINCIA === 'Lugo')
            .map((municipio) => municipio.NOMBRE);

        return municipiosLugo2.sort().reverse();
    } catch (error) {
        console.log(error);
    }
};

getMunicipalities('https://www.el-tiempo.net/api/json/v2/municipios')
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
