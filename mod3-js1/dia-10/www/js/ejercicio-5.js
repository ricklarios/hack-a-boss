/* #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Ordena el siguiente array numérico de menor a mayor: [4, 10, 7, 1, 2]
 *
 * ¡No se puede usar el método sort()!
 *
 */

'use strict';

const nums = [4, 10, 7, 1, 2];

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
        if (nums[j] > nums[j + 1]) {
            let aux = nums[j];
            nums[j] = nums[j + 1];
            nums[j + 1] = aux;
        }
    }
}

console.log(nums);
