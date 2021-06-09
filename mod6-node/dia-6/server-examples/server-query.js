const http = require('http');
const querystring = require('querystring');

// Creamos un servidor HTTP.
const server = http.createServer();
// Definimos el puerto:
const PORT = 3000;
// Creamos una función que se ejecutará cuando al servidor le llegue una petición
server.on('request', async (req, res) => {
    // Para leer los queryparams necesitamos crear el objeto URL
    const urlInfo = new URL(req.url, `http://localhost:${PORT}`); // => ('ruta que viene del frontend', 'servidor:puerto que escucha')
    // obtenemos el querystring:
    const myQueryString = urlInfo.searchParams;
    // Lo convertimos en objeto JS(parseamos):
    const parsedQueryString = querystring.parse(myQueryString);

    // OTRA FORMA!!:
    /* 1. Creamos un objeto vacío donde meter los parámetros:
        const obj = {};
        2. Recorremos el Array que nos llega con parametros del query y los
        metemos en nuestro objeto:
        for (const param of myQueryString) {
            const [key, value] = param; // Guardamos los datos haciendo destructuring de los parámetros
            obj[key] = value; // los añadimos a nuestro objeto vacío
        }
        console.log(obj); */

    // Definimos la respuesta:
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Hello World</h1>');
});
// Ponemos el servidor a 'escuchar' peticiones:
server.listen(PORT, () => {
    console.log(`El servidor está funcionando en http://localhost:${PORT}`);
});
