### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INTEGER(20) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(100),
	devoured BOOLEAN DEFAULT FALSE,
	date TIMESTAMP,
	PRIMARY KEY (id)
);