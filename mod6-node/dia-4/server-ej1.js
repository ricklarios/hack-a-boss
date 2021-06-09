const http = require('http');

const server = http.createServer();

const body = {
    curso: 'backend',
};

// const querystring = require('querystring');

server.on('request', async (request, response) => {
    const stringifyBody = JSON.stringify(body);

    response.statusCode = 200;
    response.setHeader('content-type', 'application/JSON');
    response.end(stringifyBody);
});

server.listen(PORT, () => {
    console.log(`Servidor funcionando`);
});
