 -- ------------------------------------------------
 --++++++++++++++++++- Schema ++++++++++++++++++    |
 
CREATE DATABASE burger_shop_DB;
USE burger_shop_DB;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    prepared BOOLEAN DEFAULT false,
	consumed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);