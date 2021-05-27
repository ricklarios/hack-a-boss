USE campeonato2;

/* NOMBRE Y APELLIDOS DE LOS JUGADORES DEL EQUIPO CON ID 5*/

SELECT nombre, apellidos
FROM jugadores
WHERE id_equipo = 5;

/* JUGADORES QUE EMPIEZAN POR LA LETRA A */

SELECT *
FROM jugadores
WHERE nombre LIKE 'A%';

/* JUGADORES DEl EQUIPO CON ID 1 Y QUE EMPIEZAN POR LA LETRA J */

SELECT *
FROM jugadores
WHERE id_equipo = 1 AND nombre LIKE 'J%';

/* TODOS LOS JUGADORES y EQUIPOS, INDEPENDIENTEMENTE DE QUE TENGAN JUGADORES EN PLANTILLA */

SELECT *
FROM equipos E LEFT JOIN jugadores J ON J.id_equipo = E.id;


/* EQUIPOS QUE NO TIENEN JUGADORES ASIGNADOS */

SELECT *
FROM equipos E LEFT JOIN jugadores J
ON E.id = J.id_equipo WHERE J.id_equipo is null;


/* JUGADORES Y EQUIPOS QUE TENGAN JUGADORES EN PLANTILLA*/

SELECT *
FROM jugadores J INNER JOIN equipos E
ON j.id_equipo = E.id;


/* NÚMERO DE JUGADORES POR EQUIPO */

SELECT E.nombre, COUNT(J.id)
FROM equipos E LEFT JOIN jugadores J
ON J.id_equipo = E.id
GROUP BY E.id;

/* NÚMERO DE PARTIDOS DISPUTADOS */

SELECT COUNT(*) AS 'Total Partidos'
FROM partidos P;

/* NÚMERO DE PARTIDOS DISPUTADOS POR EQUIPOS */

SELECT E.nombre, COUNT(*) AS 'Total Partidos'
FROM equipos E INNER JOIN equipos_partidos EP
ON EP.id_equipo = E.id
GROUP BY E.nombre;


/* NÚMERO DE PARTIDOS DISPUTADOS POR EQUIPOS CONSIDERANDO LOS EQUIPOS QUE NO HAN DISPUTADO PARTIDOS*/

SELECT E.nombre, COUNT(EP.id_partidos) AS 'Total Partidos'
FROM equipos E LEFT JOIN equipos_partidos EP
ON EP.id_equipo = E.id
GROUP BY E.nombre;


/*EQUIPOS QUE NO HAN DISPUTADO PARTIDOS*/

SELECT E.nombre
FROM equipos E LEFT JOIN eqipos_partidos EP 
ON EP.id_equipo = E.id
WHERE EP.id_partido IS NULL;



/* INCIDENCIAS OCURRIDAS EN LOS PARTIDOS DISPUTADOS DE UN DETERMINADO EQUIPO */

SELECT incidencia, id_equipo, EP.id_partido
FROM incidencias I
INNER JOIN partidos P ON P.id = I.id_partido
INNER JOIN equipos_partidos EP on EP.id_partido = P.id
WHERE EP.id_equipo = 5;

      

/* TODOS LOS GOLES DE UN DETERMINADO EQUIPO A LO LARGO DE LA TEMPORADA */

SELECT SUM(goles), E.nombre
FROM equipos E LEFT JOIN equipos_partidos EP
ON EP.id_equipo =  E.id
GROUP BY E.nombre;

/*EQUIPO MÁS GOLEADOR*/

SELECT E.nombre, SUM(EP.goles) AS Total
FROM equipos E, equipos_partidos EP
WHERE E.id = EP.id_equipo
GROUP BY E.nombre
ORDER BY Total DESC LIMIT 1;

/* LOS GOLES DE UN DETERMINADO EQUIPO EN UN DETERMINADO PARTIDO */

SELECT goles
FROM partidos P INNER JOIN equipos_partidos EP ON EP.id_partido = P.id
				INNER JOIN equipos E  ON E.id = EP.id_equipo
/* WHERE id_equipo = 1 AND id_partido = 3; */
WHERE E.nombre LIKE '%Gandía%' AND campo LIKE '%Rivas-Vaciamadrid%';



    
/* MEDIA DE GOLES DE UN EQUIPO A LO LARGO DE LA TEMPORADA */
				/* usamos ROUND para redondear, le decimos con 2 decimales, y aplicado a la media AVG()*/
SELECT E.nombre, ROUND(AVG(goles), 2) AS Media
FROM equipos E LEFT JOIN equipos_partidos EP ON EP.id_equipo = E.id
WHERE nombre LIKE 'Gandía%'
GROUP BY E.id;

/*¿Cuántos equipos se han apuntado al campeonato?*/ 

SELECT COUNT(id) AS 'Total Equipos'
FROM equipos;

/*¿Cuántos equipos se han apuntado al campeonato y jugado algún partido?*/ 

SELECT COUNT(E.id) AS 'Total Equipos'
FROM equipos E 
WHERE id IN (SELECT id_equipo FROM equipos_partidos);


/*
¿Cuántos jugadores juegan en el equipo con id 5?*/ 

SELECT E.nombre AS 'Nombre del equipo', COUNT(J.id) AS 'Total Jugadores'
FROM jugadores J, equipos E
WHERE J.id_equipo = E.id AND id_equipo = 5;


/*
Nombre y categoría de los equipos que juegan de violeta como primera equipación */

SELECT nombre, 1º_equipacion
FROM equipos
WHERE 1º_equipacion LIKE '%pink%';

 /*
Nombre y categoría de los equipos que juegan de blanco como primera equipación y de azul como segunda*/

SELECT nombre, 1º_equipacion, 2º_equipacion
FROM equipos
WHERE 1º_equipacion = 'purple' AND 2º_equipacion = 'blue';

/*Nombre de todos los árbitros que hay en el campeonato y nº de partidos que pitó*/

SELECT arbitro, COUNT(partidos.id) AS 'Total Partidos'
FROM partidos
GROUP BY arbitro
ORDER BY COUNT(partidos.id) DESC;

/*equipos que marcan mas goles que la media*/

SELECT E.nombre, AVG(goles) AS Media, SUM(goles) AS Total
FROM equipos E INNER JOIN equipos_partidos EP
ON EP.id_equipo = E.id
GROUP BY E.nombre 
HAVING Media > (SELECT AVG(goles) FROM equipos_partidos);



