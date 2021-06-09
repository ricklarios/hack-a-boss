const dotenv = require('dotenv');

dotenv.config();

// console.log(process.env.MYSQL_HOST);
// console.log(process.env.MYSQL_PASSWORD);

const { MYSQL_HOST, MYSQL_PASSWORD } = process.env;

console.log(MYSQL_HOST);
console.log(MYSQL_PASSWORD);
