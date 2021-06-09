/* ### Ejercicio 4
Usando el módulo `fs` de NodeJS, escribe una función que acepte 
como argumento un nombre de archivo.
La función deberá borrar ese archivo del directorio actual.
La función deberá imprimir el string `No existe` si el 
nombre de archivo que le pasamos no existe.
Si se produce algun error, deberá imprimir el error.
**Pista**: Puedes usar callbacks o promises, aunque lo recomendable es lo segundo. */

const fs = require('fs/promises');

const myRoute = process.argv[2];

const removeFile = async (route) => {
    try {
        await fs.unlink(route);
        console.log('El archivo ha sido eliminado');
    } catch (error) {
        console.error('No existe');
    }
};

removeFile(myRoute);
