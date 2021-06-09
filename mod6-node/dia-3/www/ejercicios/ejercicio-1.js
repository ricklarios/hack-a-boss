/* Ejercicio 1
Usando el módulo `fs` de NodeJS, muestra por pantalla 
el contenido de file.txt. Puedes usar callbacks o promises, 
aunque lo recomendable es lo segundo.
 **Pista**: el contenido se lee como un Buffer de datos, 
usa UTF-8 para leerlo. */

const fs = require('fs/promises');

const readFile = async (filename) => {
    try {
        const data = await fs.readFile(filename, 'utf-8');

        console.log(data);
    } catch (error) {
        console.error('Ha habido un error');
    }
};

readFile('./file.txt');
