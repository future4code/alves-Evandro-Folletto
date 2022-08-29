# `Exercício 1`
## a)
	deleta a coluna salário
## b)
	altera o nome da coluna "gender" para "sex", e o tipo da coluna é VARCHAR(6)
## c)
	altera o nome da coluna "gender" para "gender" (ou seja, mantém o mesmo), mas altera o tipo da variável para VARCHAR(255)
## d)
	ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

# `Exercício 2`
## a)
	UPDATE Actor
	SET name = "Moacyr Franco"
	WHERE id = "001";
## b)
	UPDATE Actor
	SET name = "JULIANA PAES"
	WHERE name = "Juliana Paes";

	UPDATE Actor
	SET name = "Juliana Paes"
	WHERE name = "JULIANA PAES";
## c)
	UPDATE Actor
	SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10",
	salary = 600000,
	gender = "male"
	WHERE id = "005";
## d)
	UPDATE Actor
	SET name = "Moacyr Franco 2"
	WHERE id = "029";
  
  Resposta: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0.
  A resposta diz que 0 linhas foram afetadas, pois o sql não encontrou nenhum id='029'

# `Exercício 3`
## a)
	DELETE FROM Actor WHERE name = "Fernanda Montenegro";
## b)
	DELETE FROM Actor 
  WHERE (gender = "male" AND salary > 1000000);

# `Exercício 4`
## a)
	SELECT MAX(salary) FROM Actor;
## b)
	SELECT MIN(salary) 
  FROM Actor 
  WHERE gender="female";
## c)
	SELECT COUNT(*) 
  FROM Actor
  WHERE gender="female";
## d)
	SELECT SUM(salary) 
  FROM Actor;

# `Exercício 5`
## a)
	foram somados os números totais de pessoas do sexo male e do sexo female.
## b)
	SELECT id, name 
  FROM Actor 
  WHERE gender="male" 
  ORDER BY name DESC;
## c)
	SELECT *
  FROM Actor 
  WHERE gender="male"
  ORDER BY salary ASC;
## d)
	SELECT *
  FROM Actor 
  WHERE gender="male"
  ORDER BY salary DESC
  LIMIT 3;
## e)
	SELECT AVG(salary), gender
  FROM Actor 
  GROUP BY gender;

# `Exercício 6`
## a)
	ALTER TABLE Filmes ADD playing_limit_date DATE;
## b)
	ALTER TABLE Filmes CHANGE rating rating FLOAT;
## c)
	UPDATE Filmes SET playing_limit_date="2022-09-01" WHERE id="001";
## d)
	DELETE FROM Filmes WHERE id="004";
  UPDATE Filmes SET synopsis="teste" WHERE id="004";
  0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
  o resultado é que nenhuma linha foi afetada pois não foi encontrado nenhum id="004"

# `Exercício 7`
## a)
	SELECT COUNT(*)
  FROM Filmes
  WHERE rating > 7.5;
## b)
	SELECT AVG(rating)
  FROM Filmes;
## c)
	SELECT COUNT(*) 
  FROM Filmes 
  WHERE playing_limit_date > CURDATE();
## d)
	SELECT COUNT(*) 
  FROM Filmes
  WHERE relese_date > CURDATE();
## e)
	SELECT MAX(rating)
  FROM Filmes;
## f)
	SELECT MIN(rating)
  FROM Filmes;

# `Exercício 8`
## a)
	SELECT *
  FROM Filmes
  ORDER BY title ASC;
## b)
	SELECT *
  FROM Filmes
  ORDER BY title DESC
  LIMIT 5;
## c)
	SELECT *
  FROM Filmes
  WHERE playing_limit_date > CURDATE()
  ORDER BY relese_date DESC
  LIMIT 3;
## d)
	SELECT *
  FROM Filmes
  ORDER BY rating DESC
  LIMIT 3;