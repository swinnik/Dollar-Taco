DROP DATABASE IF EXISTS dollartaco; -- maybe move these to another file
CREATE DATABASE dollartaco;
\c dollartaco;


CREATE TABLE vendors (
  name VARCHAR(100),
  latitude NUMERIC,
  longitude NUMERIC,
  bestFilling VARCHAR(100),
  price numeric(4,2)
);