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

INSERT
INTO Labook_Likes (id, post_id, user_id)
VALUES
	('001', '5d9a9583-fb9c-41a2-9b54-4acda0b3899a', '2cd8cd71-8097-4756-b594-57ce5769b986'),
	('002', 'c6768f8f-bbab-4235-8207-525321be0b31', '2cd8cd71-8097-4756-b594-57ce5769b986'),
    ('003', 'c6768f8f-bbab-4235-8207-525321be0b31', '7d66b891-00df-4d64-bed0-5e188d4415a9');

SELECT Labook_Posts.id as idPostagem, Labook_Users.name as user_name, Labook_Posts.content, COUNT(Labook_Likes.id) as curtidasTotais
FROM Labook_Posts
LEFT JOIN Labook_Likes
ON Labook_Posts.id = Labook_Likes.post_id
LEFT JOIN Labook_Users
ON Labook_Users.id = Labook_Posts.user_id
GROUP BY Labook_Posts.id;

-- DELETE 
-- FROM cookenu_recipies
-- WHERE (cookenu_recipies.user_id = 'a9a74c5b-bdae-4408-8ead-1bc29cfb1357')

-- DROP TABLE Labook_Likes