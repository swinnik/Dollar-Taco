DROP DATABASE IF EXISTS dollartaco; -- maybe move these to another file
CREATE DATABASE dollartaco;
\c dollartaco;


CREATE TABLE venders (
  name VARCHAR(100),
  latitude INTEGER,
  longitude INTEGER,
  bestFilling VARCHAR(100)
);