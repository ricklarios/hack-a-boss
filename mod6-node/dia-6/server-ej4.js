require('dotenv').config();
const http = require('http');
const { HOST, PORT } = process.env;
const server = http.createServer();
const querystring = require('querystring');

server.on('request', async (request, response) => {
    const method = request.method;
    const body = {
        curso: 'backend',
        metodo: `${method}`,
        url: `${request.url}`,
    };
    const message = {
        message: 'Hello world!',
        metodo: `${method}`,
        url: `${request.url}`,
    };
    const error = {
        message: 'No lo encuentro',
    };
    const baseURL = `http://${HOST}:${PORT}`;
    const urlInfo = new URL(request.url, baseURL);
    const urlPath = urlInfo.pathname;

    request.querystring = urlInfo.searchParams;

    if (urlPath === '/curso') {
        response.statusCode = 200;
        response.setHeader('content-type', 'application/JSON');
        const stringifyBody = JSON.stringify(body);
        response.end(stringifyBody);
    } else if (urlPath === '/message') {
        response.statusCode = 200;
        response.setHeader('content-type', 'application/JSON');
        const stringifyMessage = JSON.stringify(message);
        response.end(stringifyMessage);
    } else {
        response.statusCode = 404;
        response.setHeader('content-type', 'application/JSON');
        const stringifyError = JSON.stringify(error);
        response.end(stringifyError);
    }
});
