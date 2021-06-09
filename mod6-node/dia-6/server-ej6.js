const http = require('http');
const querystring = require('querystring');
const path = require('path');
const staticPath = path.join(__dirname, 'database');
const fs = require('fs').promises;

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
    const method = req.method;
    const baseURL = `http://localhost:${PORT}`;
    const urlInfo = new URL(req.url, baseURL);
    const urlPath = urlInfo.pathname;
    // Llamamaos a la función "bodyParsed" y le pasamos la request:
    const body = await bodyParser(req);
    const stringifyBody = JSON.stringify(body);
    if (urlPath === '/api/messages' && method === 'GET') {
        try {
            const data = await fs.readFile('./database/database.json');
            // const dataResponse = await bodyParser(JSON.stringify(data));
            res.statusCode = 200;
            res.setHeader('Content-type', 'Application/JSON');
            res.end(data);
        } catch (error) {
            res.statusCode = 404;
            res.setHeader('Content-type', 'text/html');
            res.end('No puedo leerse el archivo');
        }
    } else if (urlPath === '/api/messages' && method === 'POST') {
        try {
            const data2 = await fs.readFile('./database/database.json');
            await fs.writeFile(
                './database/database.json',
                stringifyBody.concat(`,${data2}`)
            );
            // await fs.writeFile('./database/database.json', dataConcated);
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end('Archivo sobreescrito');
        } catch (error) {
            res.statusCode = 404;
            res.setHeader('Content-type', 'text/html');
            res.end('No pudo escribirse el archivo');
        }
    } else {
        res.statusCode = 404;
        res.end();
    }
});
// Ponemos el servidor a 'escuchar' peticiones:
server.listen(PORT, () => {
    console.log(`El servidor está funcionando en http://localhost:${PORT}`);
});
