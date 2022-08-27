CREATE TABLE Users (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
	nickname VARCHAR(255) NOT NULL,
    email VARCHAR(255) not null
);

CREATE TABLE Tasks (
	TaskId VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
    limitDate DATE not null,
    status VARCHAR(255) NOT NULL,
    creatorUserId VARCHAR(255),
    FOREIGN KEY (creatorUserId) REFERENCES Users(id)
);

DROP TABLE Users;

DROP TABLE Tasks;