SET client_encoding = 'UTF8';
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE jobtitle(
    id                      UUID NOT NULL DEFAULT uuid_generate_v4(),
    name                    TEXT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO jobtitle (name)
VALUES ('Software Engineer'),
       ('QA Engineer'),
       ('DevOps Engineer'),
       ('Product Manager'),
       ('Scrum Master'),
       ('Architect'),
       ('Accountant'),
       ('Project Manager'),
       ('Data Scientist'),
       ('Developer');