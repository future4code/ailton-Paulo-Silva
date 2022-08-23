/_Exercício 1_/

CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

/_Exercício 2_/

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

/_
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002",
"Glória Pires (AGAIN)",
1200000,
"1963-08-23",
"female"
);
_/

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Antônio Fagundes",
400000,
"1949-04-18",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Sônia Braga",
450000,
"1950-06-08",
"female"
);

/_Exercício 3_/

SELECT \* FROM Actor;

SELECT name, salary FROM Actor;

SELECT name, salary FROM Actor WHERE gender = "female";

SELECT \* FROM Actor WHERE gender = "female";

SELECT salary FROM Actor WHERE name = "Tony Ramos";

SELECT \* FROM Actor WHERE gender = "invalid";

SELECT id, name, salary FROM Actor WHERE salary <= 500000;

SELECT id, name FROM Actor WHERE id = "002";

/_Exercício 4_/

SELECT \* FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT \* FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

SELECT \* FROM Actor WHERE name like "%a%" OR name like "%A%" OR name LIKE "%g%" OR name LIKE "%G%" AND salary BETWEEN 350000 AND 900000;

/_Exercício 5_/

CREATE TABLE Movies (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
release_date DATE NOT NULL,
rating INT NOT NULL
);

INSERT INTO Movies (id, title, synopsis, release_date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

INSERT INTO Movies (id, title, synopsis, release_date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

INSERT INTO Movies (id, title, synopsis, release_date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

INSERT INTO Movies (id, title, synopsis, release_date, rating)
VALUES(
"004",
"Cidade de Deus",
"Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio.",
"2002-08-30",
10
);

/_Exercício 6_/

SELECT id, title, rating FROM Movies WHERE id = "004";

SELECT \* FROM Movies WHERE title = "Se Eu Fosse Você";

SELECT id, title, synopsis FROM Movies WHERE rating > 7;

/_Exercício 7_/

SELECT \* FROM Movies WHERE title LIKE "%Você%";

SELECT \* from Movies WHERE title LIKE "%Dona%" or synopsis LIKE "%Dona%";

SELECT \* from Movies WHERE release_date < "2022-08-22";

SELECT \* from Movies WHERE title LIKE "%Dona%" or synopsis LIKE "%Dona%" AND release_date < CURDATE() AND rating > 7;
