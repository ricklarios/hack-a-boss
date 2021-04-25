'use strict';

const mediaEquipo = (a, b, c, d) => (a + b + c + d) / 4;

const teamA = mediaEquipo(53, 46, 29, 58);
console.log(teamA);
const teamB = mediaEquipo(46, 72, 26, 36);
console.log(teamB);
const teamC = mediaEquipo(38, 62, 47, 44);
console.log(teamC);

if (teamA > teamB && teamA > teamC) {
    console.log(`Equipo A tiene la mejor media: ${teamA} puntos`);
}
if (teamB > teamA && teamB > teamC) {
    console.log(`Equipo B tiene la mejor media: ${teamB} puntos`);
} else {
    console.log(`Equipo C tiene la mejor media: ${teamC} puntos`);
}
