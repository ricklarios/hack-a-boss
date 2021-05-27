USE campeonato;

SET FOREIGN_KEY_CHECKS=0;

CREATE TABLE equipos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL UNIQUE,
    patrocinador VARCHAR(30),
    color_local VARCHAR(15) NOT NULL,
    color_visitante VARCHAR(15),
    categoría ENUM('masculina', 'femenino')
);


CREATE TABLE jugadores (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
	apellidos VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    direccion VARCHAR(50),
    telefono VARCHAR(15),
    id_equipo INT UNSIGNED,
    FOREIGN KEY (id_equipo) REFERENCES equipos (id)
);
    
CREATE TABLE partidos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    campo VARCHAR(20) NOT NULL,
    árbitro VARCHAR(50) NOT NULL,
    incidencias VARCHAR(50),
    fecha_partido DATETIME 
);

CREATE TABLE incidencias (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    incidencia TEXT NOT NULL,
    id_partido INT UNSIGNED,
    FOREIGN KEY (id_partido) REFERENCES partidos (id)
);

CREATE TABLE equipos_partidos (
id_equipo INT UNSIGNED, 
FOREIGN KEY (id_equipo) REFERENCES equipos (id),
id_partido INT UNSIGNED,
FOREIGN KEY (id_partido) REFERENCES partidos (id),
goles TINYINT  UNSIGNED,
local BOOLEAN,
PRIMARY KEY(id_equipo, id_partido)
);
    
SET FOREIGN_KEY_CHECKS=1;
    