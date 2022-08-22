# `Exercício 1`
## a)
	id VARCHAR(255) PRIMARY KEY,
		-- VARCHAR(255): no máximo 255 caracteres.
		-- PRIMARY KEY: chave primária
	name VARCHAR (255) NOT NULL,
		-- VARCHAR(255): no máximo 255 caracteres.
		-- NOT NULL: não pode ser nulo
	salary FLOAT NOT NULL,
		-- FLOAT: número não inteiro, que pode ter valores decimais
		-- NOT NULL: não pode ser nulo
	birth_date DATE NOT NULL,
		-- DATE: variável do tipo data
		-- NOT NULL: não pode ser nulo
	gender VARCHAR(6) NOT NULL
		-- VARCHAR(6): no máximo 6 caracteres.
		-- NOT NULL: não pode ser nulo

## b)
	SHOW DATABASES;
		-- mostra o database atual
	SHOW TABLES;
		-- mostra todas as tabelas 

## c)
	DESCRIBE Actor
		-- mostra todas as colunas, tidos das variáveis das colunas, a opção de ser nulo ou não, chave primária.

# `Exercício 2`
## a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

## b)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Juliana Paes",
  1000000,
  "1970-02-21", 
  "female"
);

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'. </br>
Este erro significa que foi tentado adicionar uma key que já está cadastrada.

## c)
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

Error Code: 1136. Column count doesn't match value count at row 1. </br>
Foram repassadas três colunas (id, name, salary) e preenchidas 5 colunas.

## d)
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

Error Code: 1364. Field 'name' doesn't have a default value. </br>
A variável "name" está marcada como não nula e não foi atribuído valor para está.

## e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. </br>
O formato de entrada do dado data está errado.
