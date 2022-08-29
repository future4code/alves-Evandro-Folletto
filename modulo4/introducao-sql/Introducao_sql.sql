-- EXERCÍCIO 1
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- EXERCÍCIO 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

-- a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

-- b)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

-- c)
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- d)
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Rodrigo Santoro",
  400000,
  "1949-04-18", 
  "male"
);

-- e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);

-- f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Debora Secco",
  100000,
  "1980-04-18", 
  "female"
);

-- EXERCÍCIO 3
SELECT * FROM Actor;
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";
-- a)
	SELECT * from Actor WHERE gender = "female";	
-- b)
	SELECT salary from Actor WHERE name = "Tony Ramos";
-- c)
	SELECT * from Actor WHERE gender = "invalid";
-- d)
	SELECT id, name, salary from Actor WHERE salary <= 500000;
-- e)
	SELECT id, nome from Actor WHERE id = "002";
    SELECT id, name from Actor WHERE id = "002";
    
-- EXERCÍCIO 4
SELECT * FROM Actor 
WHERE (name LIKE "%A" OR name LIKE "%J") AND salary > 300000;
-- a) 
	-- a query seleciona atores com nome começando com letras "A" ou "J" cujos salários sejam maiores que 300000.
-- b)
	SELECT * FROM Actor 
    WHERE (name NOT LIKE "A%" AND salary > 350000);
-- c)
	SELECT * FROM Actor 
    WHERE (name LIKE "%G%" OR name LIKE "%g%");
-- d)
	SELECT * FROM Actor 
    WHERE ( (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000);

-- EXERCÍCIO 5
-- a)
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    relese_Date DATE NOT NULL,
    rating INT NOT NULL
);

-- b)
INSERT INTO Filmes (id, title, synopsis, relese_Date, rating)
VALUES(
  "001", 
  "Se eu fosse você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

-- c)
INSERT INTO Filmes (id, title, synopsis, relese_Date, rating)
VALUES(
  "002", 
  "Doce da mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

-- d)
INSERT INTO Filmes (id, title, synopsis, relese_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

-- e)
INSERT INTO Filmes (id, title, synopsis, relese_Date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

-- EXERCÍCIO 6
-- a)
	SELECT id, title, rating FROM Filmes WHERE id="001";
-- b)
	SELECT * FROM Filmes WHERE title="Deus é Brasileiro";
-- c)
	SELECT id, title, synopsis, rating FROM Filmes WHERE rating >= 7;


-- EXERCÍCIO 7
-- a)
	SELECT * FROM Filmes WHERE title LIKE "%vida%";
-- b)
	SELECT * FROM Filmes 
    WHERE (title LIKE "%vida%" OR synopsis LIKE "%vida%");
-- c)
	SELECT * FROM Filmes WHERE relese_Date < "2022-08-22";
-- d)
	SELECT * FROM Filmes 
    WHERE ( (relese_Date < "2022-08-22") AND (title LIKE "%vida%" OR synopsis LIKE "%vida%") AND (rating >= 7) );