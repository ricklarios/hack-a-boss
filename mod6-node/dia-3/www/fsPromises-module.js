const fs = require('fs').promises; // también: = require('fs/promises');

const readFile = async (filename) => {
    try {
        const data = await fs.readFile(filename, 'utf-8');

        return data.toString();
    } catch (error) {
        console.error('Ha habido un error');
    }
};

// readFile('./file2.txt').then((data) => console.log(data));

const writeFile = async (content) => {
    try {
        await fs.writeFile('file3.txt', content);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('No se encuentra el directorio');
        } else {
            console.error(error.message);
        }
    }
};

// writeFile('Viva Node_modules!!!');

const removeFile = async (route) => {
    try {
        await fs.unlink(route);
    } catch (error) {
        console.error(error.message);
    }
};

// removeFile('./file3.txt');

const getMetadata = async (route) => {
    try {
        const data = await fs.stat(route, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
};

// getMetadata('./file2.txt');

// console.log(readFile('./provincias.json'));

const { provincias } = require(provincias);

// console.log(provincias);

const persons = [
    {
        name: 'Laura',
        age: 32,
    },
    {
        name: 'Paco',
        age: 43,
    },
];

writeFile('./data/persons.json', JSON.stringify(persons));
