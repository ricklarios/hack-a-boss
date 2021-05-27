USE campeonato;

SELECT * FROM equipos;
SELECT * FROM jugadores;

INSERT INTO equipos (nombre, color_local, color_visitante, categoría)
	VALUES ('España', 'roja', 'blanca', 'masculina'),
    ('Francia', 'azul', 'blanca', 'masculina');
    
    
INSERT INTO jugadores (nombre, apellidos, fecha_nacimiento, id_equipo)
	VALUES ('Iker', 'Casillas', '1978-05-21', 1),
	('Xavi', 'Hernández', '1977-02-13', 1),
    ('Fernando', 'Torres', '1980-08-21',1);
    
INSERT INTO jugadores (nombre, apellidos, fecha_nacimiento, id_equipo)
	VALUES ('Jean Paul', 'Foiegras', '1978-05-15', 2),
	('Mourice', 'Lamerde', '1977-02-12', 2),
    ('Fransoise', 'Miterrand', '1978-05-02',2);
    
INSERT INTO partidos (campo, árbitro, incidencias, fecha_partido)
	VALUES ('Benito Villamarín', 'Mateu Lahoz', 'Paul Pogba fue expulsado', '2021-05-22');
    
INSERT INTO incidencias (incidencia, id_partido)
	VALUES ('en el minuto 71, Paul Pogba fue expulsado', 1);
 
 
INSERT INTO equipos_partidos (id_equipo, id_partido, goles, local)
	VALUES (1, 1, 2, 1),
		(2, 1, 1, 0);
        
        
 
 
 
SELECT id, nombre
FROM equipos
WHERE nombre IN('España', 'Francia');
    
DELETE FROM jugadores WHERE id <= 6;
	

    
    






