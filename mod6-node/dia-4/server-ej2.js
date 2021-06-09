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

server.on('request', async (request, response) => {
    const baseURL = `http://${HOST}:${PORT}`;
    const urlInfo = new URL(request.url, baseURL);
    const urlPath = urlInfo.pathname;
    request.querystring = urlInfo.searchParams;

    response.statusCode = 200;
    response.setHeader('content-type', 'application/JSON');
    if (urlPath === '/curso') {
        const stringifyBody = JSON.stringify(body);
        response.end(stringifyBody);
    } else {
        const stringifyMessage = JSON.stringify(message);
        response.end(stringifyMessage);
    }
});

server.listen(PORT, () => {
    console.log(`Servidor funcionando`);
});
