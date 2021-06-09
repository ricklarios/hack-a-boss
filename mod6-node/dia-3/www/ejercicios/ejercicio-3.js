/* ### Ejercicio 3
Usando el módulo `fs` de NodeJS, escribe una función que acepte 
como argumento un *string*.
La función deberá imprimir el string `Es un directorio` 
si el `Path` que le pasamos es un directorio.
La función deberá imprimir el string `Es un archivo` 
si el `Path` que le pasamos es un archivo.
La función deberá imprimir el string `No existe` 
si el `Path` que le pasamos no existe.
**Pista**: Puedes usar callbacks o promises, aunque lo recomendable es lo segundo. */

const fs = require('fs/promises');

const getMetadata = async (route) => {
    try {
        const data = await fs.stat(route, 'utf-8');
        if (data.isFile() === true) console.log('Es un archivo');
        if (data.isDirectory() === true) console.log('Es una ruta');
    } catch (error) {
        console.error('No existe');
    }
};

getMetadata('../www');
