const { parse } = require('date-fns');
const { es } = require('date-fns/locale');

const badDate = '3/diciembre/94 7:45PM';

const newDate = parse(badDate, 'd/MMMM/yy h:ma', new Date(), {
    locale: es,
});

console.log(newDate.toLocaleDateString());
