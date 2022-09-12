CREATE TABLE applicant (
  id int PRIMARY KEY,
  name TEXT,
  email TEXT
);

CREATE TABLE interviewer (
  id int PRIMARY KEY,
  name TEXT,
  email TEXT,
  companyId INTEGER
);

CREATE TABLE interview (
  id int PRIMARY KEY,
  applicantId INTEGER,
  interviewerId INTEGER,
  date TEXT,
  score INTEGER
);

CREATE TABLE company (
  id int PRIMARY KEY,
  name TEXT,
  city TEXT
);

CREATE TABLE employee (
  id int PRIMARY KEY,
  name TEXT,
  position TEXT,
  email TEXT,
  companyId INTEGER
);

ALTER TABLE interview ADD FOREIGN KEY (applicantId) REFERENCES applicant (id);

ALTER TABLE interview ADD FOREIGN KEY (interviewerId) REFERENCES interviewer (id);

ALTER TABLE interviewer ADD FOREIGN KEY (companyId) REFERENCES company (id);

ALTER TABLE employee ADD FOREIGN KEY (companyId) REFERENCES company (id);
