CREATE TABLE labecommerce_users (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL
);

CREATE TABLE labecommerce_products (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	price FLOAT NOT NULL,
	image_url VARCHAR(255) NOT NULL
);

CREATE TABLE labecommerce_purchases (
	id VARCHAR(255) PRIMARY KEY,
	user_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
	product_id VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
	quantity INT NOT NULL,
    total_price FLOAT NOT NULL
);