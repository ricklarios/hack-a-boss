const http = require('http');
const querystring = require('querystring');
require('dotenv').config();

const server = http.createServer();
const PORT = 3000;

// Definimos una función que traduce el body:
const bodyParser = (req) => {
    return new Promise((resolve) => {
        let body = [];
        req.on('data', (buffer) => {
            body.push(buffer);
        });
        req.on('end', () => {
            body = Buffer.concat(body).toString();
            resolve(querystring.parse(body));
        });
    });
};

server.on('request', async (req, res) => {
    const method = req.method;
    const baseURL = `http://localhost:${PORT}`;
    const urlInfo = new URL(req.url, baseURL);
    const urlPath = urlInfo.pathname;
    // Llamamaos a la función "bodyParsed" y le pasamos la request:
    const body = await bodyParser(req);
    const stringifyBody = JSON.stringify(body);
    if (urlPath === '/data' && method === 'POST') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'Application/JSON');
        res.end(stringifyBody);
    } else {
        res.statusCode = 404;
        // response.setHeader('content-type', 'application/JSON');
        res.end();
    }
});
// Ponemos el servidor a 'escuchar' peticiones:
server.listen(PORT, () => {
    console.log(`El servidor está funcionando en http://localhost:${PORT}`);
});
