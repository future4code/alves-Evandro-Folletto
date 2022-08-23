SET SQL_SAFE_UPDATES = 0;

-- EXERCÍCIO 1
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
-- a)
	-- deleta a coluna salário
-- b)
	-- altera o nome da coluna "gender" para "sex", e o tipo da coluna é VARCHAR(6)
-- c)
	-- altera o nome da coluna "gender" para "gender" (ou seja, mantém o mesmo), mas altera o tipo da variável para VARCHAR(255)
-- d)
	ALTER TABLE Actor CHANGE gender gender VARCHAR(100);