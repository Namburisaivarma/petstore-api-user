CREATE TABLE user(
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone integer NOT NULL,
    PRIMARY KEY(id)
);