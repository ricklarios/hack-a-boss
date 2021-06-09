// Date-fns. Documentación: https://date-fns.org/

const { format } = require('date-fns');
const { es } = require('date-fns/locale'); // Para importar la fecha en ESPAÑOL

const now = new Date();

// const formatDate = format(now, 'dd/MM/yyyy');
// const formatDate = format(now, `EEEE, d 'de' MMMM y`);

const formatDate = format(now, `EEEE, d 'de' MMMM y`, { locale: es });

console.log(formatDate);
