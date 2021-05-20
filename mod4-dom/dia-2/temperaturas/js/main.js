/**
 * Completa la tabla de temperaturas tomando como referencia
 * este array de ciudades. Tendrás que usar las siguientes
 * clases para cambiar el color de fondo de cada temperatura.
 *
 *  - lower: temp. menor que 4: fondo azul.
 *
 *  - low: temp. entre 4 y 20: fondo verde
 *
 *  - medium: temp. entre 20 y 30: fondo naranja
 *
 *  - high: temp. mayor de 30: fondo rojo
 *
 */

const temperaturas = [
    {
        city: 'A Coruña',
        min: 17,
        max: 23,
    },
    {
        city: 'Ferrol',
        min: 15,
        max: 32,
    },
    {
        city: 'Lugo',
        min: -20,
        max: 31,
    },
    {
        city: 'Ourense',
        min: 18,
        max: 35,
    },
    {
        city: 'Pontevedra',
        min: 18,
        max: 29,
    },
];

// Seleccionamos el tbody:
const tbody = document.querySelector('table#temperaturas > tbody');

// Función que recibe una tempreatura y retorna un string:
function getTemp(temp) {
    if (temp < 4) {
        return 'lower';
    } else if (temp >= 4 && temp < 20) {
        return 'low';
    } else if (temp >= 20 && temp < 30) {
        return 'medium';
    } else if (temp >= 30) {
        return 'high';
    }
}

/**
 * ################
 * ## Solución 1 ##
 * ################
 */

// Creamos un fragmento de docuemnto:
const frag = document.createDocumentFragment();

// Recorremos el arry de temperaturas:

for (const city of temperaturas) {
    // Creamos el elemento tr (table row)
    const tr = document.createElement('tr');
    // Creamos los 3 td:
    const cityTD = document.createElement('td');
    const minTD = document.createElement('td');
    const maxTD = document.createElement('td');

    // Asigno el contenido a los 3 'td' que hemos creado:
    cityTD.textContent = city.city;
    minTD.textContent = city.min;
    maxTD.textContent = city.max;

    // Asignamos una clase a las temperaturas:
    minTD.classList.add(getTemp(city.min));
    maxTD.className = getTemp(city.max); // Otra forma de hacer los mismo

    // Agreagmos los 3 'td' como hijos de 'tr'
    tr.append(cityTD, minTD, maxTD); // Agregamos por orden

    // Agregamos el 'tr' al fragmento:
    frag.append(tr);
}

// Agregamos el fragmento al tbody:
tbody.append(frag);
