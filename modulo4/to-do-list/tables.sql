CREATE TABLE Users (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
	nickname VARCHAR(255) NOT NULL,
    email VARCHAR(255) not null
);

CREATE TABLE Tasks (
	TaskId VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
    limitDate DATE not null,
    status VARCHAR(255) NOT NULL,
    creatorUserId VARCHAR(255),
    FOREIGN KEY (creatorUserId) REFERENCES Users(id)
);

-- CREATE TABLE Responsible (
-- 	responsible_id VARCHAR(255) PRIMARY KEY,
-- 	task_id VARCHAR(255) NOT NULL,
--  responsible_user_id VARCHAR(255) NOT NULL,
--  FOREIGN KEY (responsible_user_id) REFERENCES Users(id)
-- );

CREATE TABLE Responsible (
	task_id VARCHAR(255) NOT NULL,
    responsible_user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (task_id) REFERENCES Tasks(TaskId),
    FOREIGN KEY (responsible_user_id) REFERENCES Users(id)
);

DROP TABLE Users;
DROP TABLE Tasks;
DROP TABLE Responsible;

SELECT *
FROM Tasks
JOIN Users
ON Users.id = Tasks.creatorUserId
WHERE Users.id = 1661555153887;

-- SELECT *
-- FROM Users
-- JOIN Responsible
-- ON Users.id = Responsible.responsible_user_id
-- JOIN Tasks
-- ON Responsible.task_id = Tasks.TaskId
-- WHERE Responsible.task_id = 1661609777500;

SELECT *
FROM Users
JOIN Responsible
ON Users.id = Responsible.responsible_user_id
JOIN Tasks
ON Responsible.task_id = Tasks.TaskId
WHERE Responsible.task_id = 1661609777500;