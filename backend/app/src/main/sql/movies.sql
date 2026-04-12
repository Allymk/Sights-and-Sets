DROP SCHEMA IF EXISTS sightsAndSets CASCADE;
CREATE SCHEMA sightsAndSets;

SET search_path = sightsAndSets;

DROP TABLE IF EXISTS MOVIES CASCADE;

CREATE TABLE MOVIES 
(
    id SERIAL PRIMARY KEY,
    filmTitle VARCHAR(255) NOT NULL,
    latitude VARCHAR(50),
    longitude VARCHAR(50),
    city VARCHAR(100),
    country VARCHAR(100)
);