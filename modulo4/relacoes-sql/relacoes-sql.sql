-- ------------------------------------
-- EXERCÍCIO 1
-- ------------------------------------

-- letra a)
	-- é uma referência para uma tabela
-- letra b)
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);

INSERT INTO Rating VALUES
("a", "Bom filme, mas não sou você", 7, "001"),
("b", "Bom filme, e não fosse", 8, "001"),
("c", "Bom filme, mas as vezes amargo ", 9, "002"),
("d", "Bom filme, e sempre doce", 10, "002"),
("e", "Bom filme, mas eram 3", 7, "003"),
("f", "Bom filme e muito teste", 8, "004"),
("g", "Bom filme e capitão nascimento", 9, "005");

-- letra c)
INSERT INTO Rating VALUES
("h", "Bom filme, mas não sou você", 7, "006");
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-evandro-folletto`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
-- Não foi possível adicionar ou atualizar pois a chave estrangeira pois a mesma não foi encontrada.

-- letra d)
ALTER TABLE Filmes DROP COLUMN rating;

-- letra e)
DELETE FROM Filmes WHERE id="001";
-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. Cannot use range access on index 'PRIMARY' due to type or collation conversion on field 'id' To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
-- Este erro é um modo de segurança. Para contornar isso, é possível desabilitar essa opção nas configurações.

DELETE FROM Filmes WHERE title="teste";
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-evandro-folletto`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
-- Este erro é causado pelo fato de tentarmos excluir ou atualizar uma linha pai.

-- ------------------------------------
-- EXERCÍCIO 2
-- ------------------------------------

CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- letra a)
-- criar duas colunas (movie_id e actor_id) e depois referencia as chaves estrangeiras com ids dos filmes e dos atores

-- letra b)
 INSERT INTO MovieCast(movie_id, actor_id)
 VALUES
 ("001", "007"),
 ("001", "008"),
 ("002", "001"),
 ("002", "002"),
 ("005", "007"),
 ("005", "004");
 
 -- letra c)
 INSERT INTO MovieCast(movie_id, actor_id)
 VALUES
 ("001", "009");
--  Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-evandro-folletto`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
-- Não é possível adicionar ou atualizar a linha pois houve algum problema com a chave estrangeira. Motivo: o id do ator indicado não existe.

-- letra d)
DELETE FROM Actor WHERE id="007";
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-evandro-folletto`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
-- Este erro é causado pelo fato de tentarmos excluir ou atualizar uma linha pai.

-- ------------------------------------
-- EXERCÍCIO 3
-- ------------------------------------
SELECT * FROM Filmes 
INNER JOIN Rating ON Filmes.id = Rating.movie_id;

-- letra a)
-- Seleciona a tabela Movie e junta com Rating onde existe a igualdade entre os valores de id nas duas tabelas.

-- letra b)
SELECT Filmes.title, Filmes.id, Rating.rate FROM Filmes 
INNER JOIN Rating ON Filmes.id = Rating.movie_id;

-- ------------------------------------
-- EXERCÍCIO 4
-- ------------------------------------

-- letra a)
SELECT title, Filmes.id, Rating.rate, Rating.comment 
FROM Filmes
LEFT JOIN Rating ON Filmes.id = Rating.movie_id;

-- letra b)
SELECT Filmes.id, Filmes.title, MovieCast.actor_id 
FROM Filmes
RIGHT JOIN MovieCast ON Filmes.id = MovieCast.movie_id;

-- letra c)
SELECT AVG(Rating.rate), Filmes.title
FROM Filmes
LEFT JOIN Rating ON Filmes.id = Rating.movie_id
GROUP BY Filmes.title;

-- ------------------------------------
-- EXERCÍCIO 5
-- ------------------------------------
SELECT * 
FROM Filmes f
LEFT JOIN MovieCast mc ON f.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

-- letra a)
-- Primeiro junta as tabelas de Filmes e MovieCast onde os id's são iguais. Depois, junta também a tabela Actor onde o id desta tabela coincide com o id da tabela MovieCast.

-- letra b)
SELECT f.id as movie_id, f.title, a.name, a.id as actor_id
FROM Filmes f
LEFT JOIN MovieCast mc ON f.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

-- letra c)
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name 
FROM Filmes m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

-- letra d)
-- SELECT f.id as movie_id, f.title, a.name, a.id as actor_id
SELECT f.id, f.title, a.name, Rating.rate
FROM Filmes f
LEFT JOIN MovieCast mc ON f.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
JOIN Rating ON Rating.movie_id = mc.movie_id;