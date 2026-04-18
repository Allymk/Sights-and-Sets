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
VALUES (DEFAULT, 'The Dark Knight Rises', '40.44616911986952', '-79.95114680364938', 'Pittsburgh', 'United States of America'), 
(DEFAULT, 'The Silence of the Lambs', '40.09043981468102', '-79.72194207226823', 'Layton', 'United States of America'), 
(DEFAULT, 'The Avengers', '40.84239883527834', '-79.61560673197472', 'Worthington', 'United States of America'), 
(DEFAULT, 'The Perks of Being A Wallflower', '40.437389495059705', '-80.01437214096043', 'Pittsburgh', 'United States of America'), 
(DEFAULT, 'Adventureland', '40.451639484634114', '-79.99092503574697', 'Pittsburgh', 'United States of America'), 
(DEFAULT, 'Transformers: Revenge of the Fallen', '40.60665465727727', '-75.37853896530378', 'Pittsburgh', 'United States of America'), 
(DEFAULT, 'Rocky', '39.96476375650955', '-75.17979217248724', 'Philadelphia', 'United States of America'), 
(DEFAULT, 'The Lord of the Rings: The Fellowship of the Ring', '-37.8720', '175.6829', 'Matamata', 'New Zealand'), 
(DEFAULT, 'Harry Potter and the Sorcerers Stone', '51.7503', '-1.2540', 'Oxford', 'United Kingdom'), 
(DEFAULT, 'Inception', '48.8584', '2.2945', 'Paris', 'France'), 
(DEFAULT, 'The Dark Knight', '41.8885', '-87.6354', 'Chicago', 'USA'), 
(DEFAULT, 'Jurassic Park', '22.0886', '-159.3390', 'Kauai', 'USA'), 
(DEFAULT, 'Star Wars: Episode IV: A New Hope', '33.542499789637006','9.9670393612651','Matmatat-Al-Qadimal', 'Tunisia'), 
(DEFAULT, 'Skyfall', '56.56652692733995', '-5.048631731419528', 'Glen Etive', 'United Kingdom'), 
(DEFAULT, 'Gladiator', '30.9189', '-6.8930', 'Ouarzazate', 'Morocco'), 
(DEFAULT, 'Pirates of the Caribbean: The Curse of the Black Pearl', '13.246578468139605', '-61.2713038254717', 'Keartons', 'St. Vincent & Grenadines'), 
(DEFAULT, 'The Twilight Saga: New Moon', '49.369613480225745', '-123.29266293595487', 'West Vancouver', 'Canada'), 
(DEFAULT, 'Juno', '49.24361767990788', '-123.19538287392287', 'Vancouver', 'Canada'), 
(DEFAULT, 'Pride and Prejudice', '53.34352794402241', '-1.6250969861376399', 'Hope Valley', 'United Kingdom'), 
(DEFAULT, 'Star Wars Episode II: Attack of the Clones', '45.965186153058504', '9.202535212429218', 'Tremezzina', 'Italy'), 
(DEFAULT, 'Mamma Mia!', '39.12139029217233', '23.65498664705689', 'Skopelos', 'Greece'), 
(DEFAULT, 'La La Land', '33.92832671814268', '-118.27656717075625', 'Los Angeles', 'United States of America'), 
(DEFAULT, 'Hunger Games', '35.74892505555138', '-82.24897719998204', 'Asheville', 'United States of America'), 
(DEFAULT, 'Avatar', '22.07177443729827', '-159.41811541537734', 'Kapaa', 'United States of America'), 
(DEFAULT, '22 Jump Street', '29.940624047302528', '-90.12068235264987', 'New Orleans', 'United States of America'), 
(DEFAULT, 'Harry Potter and the Sorcerers Stone', '56.8764628157918', '-5.432296038116747', 'Glenfinnan', 'United Kingdom'), 
(DEFAULT, 'The Fast and the Furious: Tokyo Drift', '35.65946280161688', '139.70049367209077', 'Tokyo', 'Japan'), 
(DEFAULT, 'Indiana Jones', '30.322129913654017', '35.45178861182413', 'Petra', 'Jordan'), 
(DEFAULT, 'The Social Network', '39.32988654163803', '-76.62044857785699', 'Baltimore', 'United States of America'), 
(DEFAULT, 'Mad Max: Fury Road', '-22.62871193480111', '14.55105811642845', 'Swakopmund', 'Namibia'), 
(DEFAULT, 'Companion', '41.41525926653285', '-73.84161519061763', 'Putnam Valley', 'United States of America'), 
(DEFAULT, 'Pitch Perfect', '30.408454004122085', '-91.18395983527914', 'Baton Rouge', 'United States of America');