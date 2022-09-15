CREATE TABLE cookenu_users (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL
);

CREATE TABLE cookenu_recipies (
	id VARCHAR(255) PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	date VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES cookenu_users(id)
);

CREATE TABLE cookenu_followers (
	id VARCHAR(255) PRIMARY KEY,
	id_origin VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_origin) REFERENCES cookenu_users(id),
    id_destination VARCHAR(255) NOT NULL,
	FOREIGN KEY (id_destination) REFERENCES cookenu_users(id)
);

SELECT * FROM cookenu_users;
SELECT * FROM cookenu_recipies;
SELECT * FROM cookenu_followers;

SELECT cookenu_recipies.id, cookenu_recipies.title, cookenu_recipies.description, cookenu_recipies.date, cookenu_recipies.user_id, cookenu_users.name
FROM cookenu_followers
JOIN cookenu_recipies
ON cookenu_followers.id_destination = cookenu_recipies.user_id
JOIN cookenu_users
ON cookenu_users.id = cookenu_recipies.user_id
WHERE (cookenu_followers.id_origin = '2c4872dc-a4cc-478f-a942-da9b3868abe4');

-- DROP TABLE cookenu_followers