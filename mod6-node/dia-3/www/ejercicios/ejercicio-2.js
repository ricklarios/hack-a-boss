/* Ejercicio 2
Usando el módulo `fs` de NodeJS, escribe una función que acepte 
como argumentos dos strings. El primer argumento representará un 
nombre de archivo y el segundo un contenido a escribir en el archivo. */

const fs = require('fs/promises');
const [myRoute, myContent] = process.argv.slice(2);

const newFile = async (route, content) => {
    try {
        await fs.writeFile(route, content);
    } catch (error) {
        throw new Error(error.message);
    }
};

newFile(myRoute, myContent);
