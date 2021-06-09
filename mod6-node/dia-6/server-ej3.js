require('dotenv').config();
const http = require('http');
const { HOST, PORT } = process.env;
const server = http.createServer();
const querystring = require('querystring');

const body = {
    curso: 'backend',
};
const message = {
    message: 'Hello world!',
};
const error = {
    message: 'No lo encuentro',
};

server.on('request', async (request, response) => {
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
        response.end(stringifyBody);
        response.statusCode = 404;
        response.setHeader('content-type', 'application/JSON');
        const stringifyError = JSON.stringify(error);
        response.end(stringifyError);
    }
});
