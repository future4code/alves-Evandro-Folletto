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

SELECT labecommerce_users.name, labecommerce_products.name
FROM labecommerce_purchases
JOIN labecommerce_users
ON labecommerce_purchases.user_id = labecommerce_users.id
JOIN labecommerce_products
ON labecommerce_purchases.product_id = labecommerce_products.id
WHERE labecommerce_purchases.user_id = 1662053724548;

SELECT labecommerce_users.id as user_id, labecommerce_purchases.product_id, labecommerce_products.name, labecommerce_purchases.total_price
FROM labecommerce_users
LEFT JOIN labecommerce_purchases
ON labecommerce_users.id = labecommerce_purchases.user_id
LEFT JOIN labecommerce_products
ON labecommerce_purchases.product_id = labecommerce_products.id