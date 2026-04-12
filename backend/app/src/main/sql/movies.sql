DROP SCHEMA IF EXISTS sightsAndSets CASCADE;
CREATE SCHEMA sightsAndSets;
SET SCHEMA 'sightsAndSets';

DROP TABLE IF EXISTS COFFEE CASCADE;


CREATE TABLE COFFEE
(
    coffeeID integer PRIMARY KEY,
    name varchar(50),
    intensity integer,
    price numeric(5,2)
);