/_Exercício 1_/

A)
ALTER TABLE Actor DROP COLUMN salary;

R: Remove a coluna "salary" da tabela "Actor"

B)
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

R: Altera altera a coluna "gender" para "sex" e define o tipo de de entrada para varchar de 6 caracteres.

C)
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

R: Altera o tipo de entrada da coluna "gender" para varchar de 255 caracteres

D)

R: ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

/_Exercício 2_/

-- A)
UPDATE Actor
SET
name = "Tarcísio Meira",
birth_date = "1935-10-5",
gender = "male"
WHERE id = "005";

-- B)
UPDATE Actor
SET name = "TONY RAMOS"
WHERE name = "Tony Ramos";

UPDATE Actor
SET name = "Tony Ramos"
WHERE name = "TONY RAMOS";

-- C)

UPDATE Actor
SET
name = "Ary Fontoura",
salary = 350000,
birth_date = "1933-01-27",
gender = "male"
WHERE id = "005";

-- D)

UPDATE Actor
SET name = "Osmar Prado"
WHERE id = "006";

-- R: Apesar de não dar erro, não ocorre nenhuma alteração, devido ao id ainda inexistente

/_Exercício 3_/

-- A)

DELETE FROM Actor
WHERE name = "Ary Fontoura";

-- B)

DELETE FROM Actor
WHERE gender = "male" AND salary > 10000000;

/_Exercício 4_/

-- A)

SELECT MAX(salary) from Actor;

-- B)

SELECT MIN(salary) from Actor WHERE gender = "female";

-- C)

SELECT COUNT(\*) from Actor WHERE gender = "female";

-- D)

SELECT SUM(salary) from Actor;

/_Exercício 5_/

-- A)

SELECT COUNT(\*), gender
FROM Actor
GROUP BY gender;

-- R: Retorna a quantidade de atores e atrizes separada por gênero.

-- B)

SELECT id, name FROM Actor ORDER BY name DESC;

-- C)

SELECT \* FROM Actor ORDER BY salary DESC;

-- D)

SELECT \* FROM Actor ORDER BY salary DESC LIMIT 3;

-- E)

SELECT AVG(salary), gender FROM Actor GROUP BY gender;

/_Exercício 6_/

-- A)

ALTER TABLE Movies ADD playing_limit_date DATE;

-- B)

ALTER TABLE Movies CHANGE rating rating FLOAT;

-- C)

UPDATE Movies SET playing_limit_date = "2022-10-08" WHERE id = "002";
UPDATE Movies SET playing_limit_date = "2023-01-16" WHERE id = "003";
UPDATE Movies SET playing_limit_date = "2008-05-24" WHERE id = "001";
UPDATE Movies SET playing_limit_date = "2004-02-07" WHERE id = "004";

-- D)

DELETE FROM Movies WHERE id = "002";
UPDATE Actor SET synopsys = "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela"
WHERE id = "002";

-- R: Unknown column 'synopsys' in 'field list'
