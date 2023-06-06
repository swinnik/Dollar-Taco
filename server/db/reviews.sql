DROP DATABASE IF EXISTS venders; -- maybe move these to another file
CREATE DATABASE venders;
\c venders;


CREATE TABLE vender (
  name VARCHAR(50) NOT NULL,
  lattitude INTEGER NOT NULL,
  longitude INTEGER NOT NULL,
  bestFilling VARCHAR(50)
);