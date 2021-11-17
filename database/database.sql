CREATE DATABASE ng_user;

USE ng_user;

CREATE TABLE usuario (
    usuario INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    apellido VARCHAR(180),
    sexo VARCHAR(180),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE usuario to usuarios;

DESCRIBE game;