CREATE TABLE Arq_Users (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255),
	email VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255),
    role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
);

SELECT * FROM Arq_Users