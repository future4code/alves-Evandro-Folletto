CREATE TABLE Labook_Users (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
    role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL"
);

CREATE TABLE Labook_Posts (
	id VARCHAR(255) PRIMARY KEY,
	content VARCHAR(255) NOT NULL,
	user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Labook_Users(id)
);

CREATE TABLE Labook_Likes (
	id VARCHAR(255) PRIMARY KEY,
	post_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (post_id ) REFERENCES Labook_Posts(id),
	user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Labook_Users(id)
);

SELECT * FROM Labook_Users;
SELECT * FROM Labook_Posts;
SELECT * FROM Labook_Likes;

-- DELETE 
-- FROM cookenu_recipies
-- WHERE (cookenu_recipies.user_id = 'a9a74c5b-bdae-4408-8ead-1bc29cfb1357')

-- ALTER TABLE cookenu_users ADD COLUMN role enum("ADMIN", "NORMAL") DEFAULT "NORMAL" NOT NULL;
-- DROP TABLE cookenu_followers