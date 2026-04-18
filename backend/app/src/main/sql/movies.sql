DROP SCHEMA IF EXISTS sights_and_sets CASCADE;
CREATE SCHEMA sights_and_sets;

SET search_path = sights_and_sets;

DROP TABLE IF EXISTS MOVIES CASCADE;

CREATE TABLE MOVIES 
(
    id SERIAL PRIMARY KEY,
    film_title VARCHAR(255) NOT NULL DEFAULT 'UNKOWN',
    latitude VARCHAR(50),
    longitude VARCHAR(50),
    city VARCHAR(100),
    country VARCHAR(100)
);

CREATE TABLE MOVIE_INFO (
    id SERIAL PRIMARY KEY,
    movie_id BIGINT NOT NULL,
    description TEXT,
    release_year INT,
    director VARCHAR(255),
    genre VARCHAR(100),
    rating DECIMAL(3,1),
    runtime_minutes INT,
    image_url TEXT,
    
    CONSTRAINT fk_movie
        FOREIGN KEY (movie_id)
        REFERENCES MOVIES(id)
        ON DELETE CASCADE
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


INSERT INTO MOVIE_INFO
VALUES
(DEFAULT, 1, 'Bruce Wayne returns to face the masked terrorist Bane, who threatens to destroy Gotham City.', 2012, 'Christopher Nolan', 'Action', 8.4, 165, 'https://example.com/dark_knight_rises.jpg'),
(DEFAULT, 2, 'FBI trainee Clarice Starling seeks the help of imprisoned cannibal Hannibal Lecter to catch a serial killer.', 1991, 'Jonathan Demme', 'Thriller', 8.6, 118, 'https://example.com/silence_lambs.jpg'),
(DEFAULT, 3, 'Nick Fury assembles Iron Man, Captain America, Thor, and others to stop Loki and an alien invasion.', 2012, 'Joss Whedon', 'Action', 8.0, 143, 'https://example.com/avengers.jpg'),
(DEFAULT, 4, 'An introverted high school freshman navigates friendship, love, and trauma.', 2012, 'Stephen Chbosky', 'Drama', 8.0, 103, 'https://example.com/perks.jpg'),
(DEFAULT, 5, 'A recent college grad takes a job at a rundown amusement park and finds romance and direction.', 2009, 'Greg Mottola', 'Comedy', 6.8, 107, 'https://example.com/adventureland.jpg'),
(DEFAULT, 6, 'Sam Witwicky is drawn back into the war between Autobots and Decepticons as ancient forces awaken.', 2009, 'Michael Bay', 'Action', 6.0, 150, 'https://example.com/transformers.jpg'),
(DEFAULT, 7, 'Small-time boxer Rocky Balboa gets an unexpected shot at the heavyweight championship.', 1976, 'John G. Avildsen', 'Drama', 8.1, 120, 'https://example.com/rocky.jpg'),
(DEFAULT, 8, 'Frodo Baggins begins a perilous journey to destroy a powerful ring before it falls into evil hands.', 2001, 'Peter Jackson', 'Fantasy', 8.8, 178, 'https://example.com/lotr.jpg'),
(DEFAULT, 9, 'Harry Potter discovers he is a wizard and begins his first year at Hogwarts School of Witchcraft and Wizardry.', 2001, 'Chris Columbus', 'Fantasy', 7.6, 152, 'https://example.com/hp1.jpg'),
(DEFAULT, 10, 'A skilled thief enters people’s dreams to steal secrets but is tasked with planting an idea instead.', 2010, 'Christopher Nolan', 'Sci-Fi', 8.8, 148, 'https://example.com/inception.jpg'),
(DEFAULT, 11, 'Batman faces the Joker, a chaotic criminal mastermind who plunges Gotham into anarchy.', 2008, 'Christopher Nolan', 'Action', 9.0, 152, 'https://example.com/dark_knight.jpg'),
(DEFAULT, 12, 'A theme park filled with cloned dinosaurs descends into chaos when the creatures escape containment.', 1993, 'Steven Spielberg', 'Adventure', 8.2, 127, 'https://example.com/jurassic.jpg'),
(DEFAULT, 13, 'Luke Skywalker joins forces to rescue a princess and help defeat the evil Galactic Empire.', 1977, 'George Lucas', 'Sci-Fi', 8.6, 121, 'https://example.com/starwars4.jpg'),
(DEFAULT, 14, 'James Bond investigates a cyberterrorist attack that leads to a personal confrontation with a former agent.', 2012, 'Sam Mendes', 'Action', 7.8, 143, 'https://example.com/skyfall.jpg'),
(DEFAULT, 15, 'A betrayed Roman general rises through the ranks of gladiators to seek vengeance against a corrupt emperor.', 2000, 'Ridley Scott', 'Action', 8.5, 155, 'https://example.com/gladiator.jpg'),
(DEFAULT, 16, 'Captain Jack Sparrow teams up with Will Turner to rescue Elizabeth and break a pirate curse.', 2003, 'Gore Verbinski', 'Adventure', 8.1, 143, 'https://example.com/pirates.jpg'),
(DEFAULT, 17, 'Bella Swan struggles with her feelings for Edward and Jacob as tensions rise between vampires and werewolves.', 2009, 'Chris Weitz', 'Romance', 4.7, 130, 'https://example.com/twilight.jpg'),
(DEFAULT, 18, 'A witty teenager navigates an unplanned pregnancy and considers adoption.', 2007, 'Jason Reitman', 'Comedy', 7.4, 96, 'https://example.com/juno.jpg'),
(DEFAULT, 19, 'Elizabeth Bennet deals with issues of class, marriage, and morality while navigating her relationship with Mr. Darcy.', 2005, 'Joe Wright', 'Romance', 7.8, 129, 'https://example.com/pride.jpg'),
(DEFAULT, 20, 'Anakin Skywalker begins his descent toward the dark side amid political conflict and forbidden love.', 2002, 'George Lucas', 'Sci-Fi', 6.6, 142, 'https://example.com/starwars2.jpg'),
(DEFAULT, 21, 'A young woman invites three men to her wedding, hoping to discover which is her father.', 2008, 'Phyllida Lloyd', 'Musical', 6.5, 108, 'https://example.com/mammamia.jpg'),
(DEFAULT, 22, 'A jazz musician and aspiring actress fall in love while chasing their dreams in Los Angeles.', 2016, 'Damien Chazelle', 'Romance', 8.0, 128, 'https://example.com/lalaland.jpg'),
(DEFAULT, 23, 'Katniss Everdeen volunteers for a televised fight to the death in a dystopian society.', 2012, 'Gary Ross', 'Action', 7.2, 142, 'https://example.com/hungergames.jpg'),
(DEFAULT, 24, 'A paraplegic Marine is sent to Pandora, where he becomes involved with the native Na’vi people.', 2009, 'James Cameron', 'Sci-Fi', 7.9, 162, 'https://example.com/avatar.jpg'),
(DEFAULT, 25, 'Two undercover cops pose as college students to take down a drug ring.', 2014, 'Phil Lord & Chris Miller', 'Comedy', 7.0, 112, 'https://example.com/22jump.jpg'),
(DEFAULT, 26, 'Harry Potter continues his first year at Hogwarts, uncovering the mystery of the Sorcerer’s Stone.', 2001, 'Chris Columbus', 'Fantasy', 7.6, 152, 'https://example.com/hp1b.jpg'),
(DEFAULT, 27, 'A teenager becomes involved in underground street racing in Tokyo.', 2006, 'Justin Lin', 'Action', 6.0, 104, 'https://example.com/tokyodrift.jpg'),
(DEFAULT, 28, 'Archaeologist Indiana Jones races to find a powerful artifact before it falls into the wrong hands.', 1981, 'Steven Spielberg', 'Adventure', 8.4, 115, 'https://example.com/indiana.jpg'),
(DEFAULT, 29, 'The story of Facebook’s founding and the legal battles that followed.', 2010, 'David Fincher', 'Drama', 7.7, 120, 'https://example.com/socialnetwork.jpg'),
(DEFAULT, 30, 'Max teams up with Furiosa to escape a tyrant in a high-speed desert chase.', 2015, 'George Miller', 'Action', 8.1, 120, 'https://example.com/madmax.jpg'),
(DEFAULT, 31, 'A quiet town is shaken by a mysterious series of events.', 2024, 'Unknown', 'Drama', 6.0, 100, 'https://example.com/companion.jpg'),
(DEFAULT, 32, 'An all-female a cappella group competes in college singing competitions.', 2012, 'Jason Moore', 'Comedy', 7.1, 112, 'https://example.com/pitchperfect.jpg');