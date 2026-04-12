DROP SCHEMA IF EXISTS sights_and_sets CASCADE;
CREATE SCHEMA sights_and_sets;

SET search_path = sights_and_sets;

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

INSERT INTO MOVIES
VALUES (DEFAULT, 'The Dark Knight Rises', '40.44616911986952', '-79.95114680364938', 'Pittsburgh', 'United States of America');