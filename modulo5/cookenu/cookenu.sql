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

-- ALTER TABLE cookenu_users ADD COLUMN role enum("ADMIN", "NORMAL") DEFAULT "NORMAL" NOT NULL;
-- DROP TABLE cookenu_followers