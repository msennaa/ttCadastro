DROP database IF EXISTS CDC;
CREATE DATABASE IF NOT EXISTS CDC;
USE CDC;

CREATE TABLE IF NOT EXISTS employees (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR (50) NOT NULL,
  `department` VARCHAR(50) NULL,
  `salary` FLOAT NOT NULL,
  `cpf` VARCHAR (14) NOT NULL,
  `birthDate` VARCHAR(10) NOT NULL);


INSERT INTO employees (name, department, salary, cpf, birthDate)
VALUES('Fulano Diniz', 'TI', 2500.55, '871.033.877-31', '22/12/1995');
INSERT INTO employees (name, department, salary, cpf, birthDate)
VALUES('Ciclano Diniz', 'Financeiro', 2300, '123.456.789-10', '21/02/1985')