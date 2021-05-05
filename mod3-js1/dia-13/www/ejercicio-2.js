/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Crear un array con todas las privencias:
 *
 * API: https://www.el-tiempo.net/api
 *      https://www.el-tiempo.net/api/json/v1/provincias


 *
 */

'use strict';

fetch('https://www.el-tiempo.net/api/json/v1/provincias')
    .then((response) => response.json())
    .then((array) =>
        console.log(
            array.map((provincias) => {
                return provincias.NOMBRE_PROVINCIA;
            })
        )
    )
    .catch((error) => console.log(error));

fetch('https://www.el-tiempo.net/api/json/v2/provincias')
    .then((response) => response.json())
    .then((data) => {
        const { provincias } = data;
        const nombreProvincias = provincias.map((provincia) => {
            return provincia.NOMBRE_PROVINCIA;
        });
        console.log(nombreProvincias);
    })
    .catch((error) => console.log(error));
