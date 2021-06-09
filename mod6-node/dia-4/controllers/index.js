const { html } = require('../components');

/* HOME */

const guestBook = [
    {
        name: 'Manolo',
        message: 'Esta web es la caña!!!',
    },
    {
        name: 'Rigodoberto',
        message: 'Tu html es lo más',
    },
];

function home(request, response) {
    response.statusCode = 200;

    response.setHeader('content-type', 'text/html'); // 'text/html' => Tipos MIME (ver en MDN)

    const guestBook = (guestBookList = guestBook.map((item) => {
        return `
            <li>
                <p>${item.message}</p>
                <p><strong>${item.name}</strong></p>
        `;
    }));

    response.end(
        html({
            title: 'Bienvenid@s a mi web',
            content: `
                <h2>Libro de visitas</h2>

                <ul>${guestBookList.join(',')}</ul>
                <form method="POST" action="/guestbook">
                    <fieldset>
                    <label for="name">Nombre</label>
                        <input type="text" name="name" id="name"/>
                    </fieldset>

                    <fieldset>
                    <label for="message">Comentario</label>
                        <textarea name="message"/></textarea>
                    </fieldset>

                    <button>Enviar</button>

                </form>
            
            `,
        })
    );
}

/* NUEVO MENSAJE */

function newMessage(request, response) {
    const body = request.body;

    // Comprobamos si en el body está la propiedad 'name' y 'message' o lanzamos un error
    if (!body.name || !body.message) {
        response.statusCode = 400;
        response.setHeader('content-type', 'text/html');
        response.end('Faltan campos en el formulario');
    } else {
        guestBook.unshift({
            name: body.name,
            message: body.message,
        });

        response.statusCode = 302;
        response.setHeader('Location', '/');
        response.end();
    }
}

/* NOTICIAS */

function news(request, response) {
    response.statusCode = 200;

    response.setHeader('content-type', 'text/html');

    response.end(
        html({
            title: 'Noticias del día',
            content: '<p>Hoy pasaron muchas cosas</p>',
        })
    );
}

module.exports = { news, home, newMessage };
