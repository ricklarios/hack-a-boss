// En métodos en los que recibimos un body (POST, DELETE, PUT)

const http = require('http');
const querystring = require('querystring');

// Creamos un servidor HTTP.
const server = http.createServer();
// Definimos el puerto:
const PORT = 3000;

// Definimos una función que traduce el body:
const bodyParser = (req) => {
    return new Promise((resolve) => {
        let body = []; // Cremaos un array vacío
        req.on('data', (buffer) => {
            // Pusheamos la respuesta del buffer
            body.push(buffer);
        });
        req.on('end', () => {
            // cuando acaba el req.on('data')...
            body = Buffer.concat(body).toString();
            resolve(querystring.parse(body));
        });
    });
};

// Creamos una función que se ejecutará cuando al servidor le llegue una petición
server.on('request', async (req, res) => {
    // Llamamaos a la función "bodyParsed" y le pasamos la request:
    const body = await bodyParsed(req);

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Hello World</h1>');
});
// Ponemos el servidor a 'escuchar' peticiones:
server.listen(PORT, () => {
    console.log(`El servidor está funcionando en http://localhost:${PORT}`);
});
