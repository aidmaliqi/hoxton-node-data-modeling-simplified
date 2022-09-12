import Database from "better-sqlite3";

const db = Database("./db/data.db", { verbose: console.log });

const applicants = [
  {
    name: "shiznit",
    email: "shiznit625@omtecha.com",
  },
  {
    name: "anastasia",
    email: "anastasia130383@meleni.xyz",
  },
  {
    name: "jimkirk",
    email: "jimkirk50@cudimex.com",
  },
  {
    name: "isantillan",
    email: "isantillan@indozoom.net",
  },
  {
    name: "udayth",
    email: "udayth@indozoom.net",
  },
  {
    name: "igyan",
    email: "igyan@pickuplanet.com",
  },
  {
    name: "pitiriti",
    email: "pitiriti@espadahost.com",
  },
  {
    name: "shload",
    email: "shload@mitakian.com",
  },
  {
    name: "petar",
    email: "petar123@playfunplus.com",
  },
  {
    name: "ivanezovano",
    email: "ivanezovano@otpku.com",
  },
];

const interviewers = [
  {
    name: "de",
    email: "de52150@debb.me",
    companyId: 1
  },
  {
    name: "erbhan",
    email: "erbhan@camachohome.com",
    companyId: 2
  },
  {
    name: "elolvido",
    email: "elolvido@hansenhu.com",
    companyId: 3
  },
  {
    name: "arturo",
    email: "arturo8@bukanimers.com",
    companyId: 4
  },
  {
    name: "mhandwe",
    email: "mhandwe1@dropthespot.com",
    companyId: 5
  },
  {
    name: "scribb",
    email: "scribb1e@fickdate-lamou.de",
    companyId: 1
  },
  {
    name: "glenophobia",
    email: "glenophobia@santonicrotone.it",
    companyId: 2
  },
  {
    name: "nomyac",
    email: "nomyac@o0i.es",
    companyId: 3
  },
  {
    name: "cdcalvetty",
    email: "cdcalvetty@supercoolrecipe.com",
    companyId: 4
  },
  {
    name: "abyyu",
    email: "abyyu@soccerfit.com",
    companyId: 5
  },
];
const interviews = [
  {
    applicantId: 1,
    interviewerId: 3,
    date: "21/4/21",
    score: 53,
  },
  {
    applicantId: 10,
    interviewerId: 4,
    date: "7/3/21",
    score: 64,
  },
  {
    applicantId: 2,
    interviewerId: 8,
    date: "14/9/21",
    score: 90,
  },
  {
    applicantId: 5,
    interviewerId: 6,
    date: "1/3/20",
    score: 15,
  },
  {
    applicantId: 7,
    interviewerId: 9,
    date: "7/8/22",
    score: 99,
  },
  {
    applicantId: 10,
    interviewerId: 3,
    date: "30/1/21",
    score: 45,
  },
  {
    applicantId: 1,
    interviewerId: 9,
    date: "27/12/21",
    score: 92,
  },
  {
    applicantId: 4,
    interviewerId: 2,
    date: "1/1/21",
    score: 83,
  },
  {
    applicantId: 7,
    interviewerId: 8,
    date: "5/4/21",
    score: 54,
  },
  {
    applicantId: 9,
    interviewerId: 10,
    date: "6/3/21",
    score: 61,
  },
];
const company = [
  {
    id: 1,
    name: "Green",
    city: "Moskow",
  },
  {
    id: 2,
    name: "Time Cop",
    city: "Athens",
  },
  {
    id: 3,
    name: "Rift Energy",
    city: "Kabul",
  },
  {
    id: 4,
    name: "Arctic Coal",
    city: "Hong Kong",
  },
  {
    id: 5,
    name: "Tint Visions",
    city: "Bern",
  },
];
const employees = [
  {
    id: 1,
    name: "Helsley",
    position: "CEO",
    email: "PaulCEllsworth@rhyta.com",
    companyId: 2,
  },
  {
    id: 2,
    name: " Guy",
    position: "EMT",
    email: "DarleneDOrtiz@armyspy.com",
    companyId: 3,
  },
  {
    id: 3,
    name: "Martin",
    position: "Insurance underwriter",
    email: "DianeFJenks@dayrep.com",
    companyId: 4,
  },
  {
    id: 4,
    name: "Hickman",
    position: "Business office assistant",
    email: "EdwardCVelazquez@rhyta.com",
    companyId: 5,
  },
  {
    id: 5,
    name: "Tyre",
    position: "Student affairs administrator",
    email: "CandelariaAGross@jourrapide.com",
    companyId: 1,
  },
  {
    id: 6,
    name: "Vinson",
    position: "Encoder",
    email: "ShirleyJJohnson@armyspy.com",
    companyId: 1,
  },
];

const dropTableInterview = db.prepare(`DROP TABLE IF EXISTS interviews `);
dropTableInterview.run();
const dropTableApplicants = db.prepare("DROP TABLE IF EXISTS applicants");
dropTableApplicants.run();
const dropTableInterviews = db.prepare(`DROP TABLE IF EXISTS interviewers`);
dropTableInterviews.run();
const dropTableEmployee = db.prepare(`DROP TABLE IF EXISTS employee`);
dropTableEmployee.run();
const dropTableCompany = db.prepare(`DROP TABLE IF EXISTS company`);
dropTableCompany.run();

const createTableCompany = db.prepare(`CREATE TABLE IF NOT EXISTS company (
    id INTEGER ,
    name TEXT,
    city TEXT,
    PRIMARY KEY (id)
  )`);
createTableCompany.run();
const createCompany = db.prepare(
  `INSERT INTO company (name, city) VALUES (@name , @city)`
);
for (const iterator of company) {
  createCompany.run(iterator);
}

const createTableApplicants = db.prepare(
  `CREATE TABLE IF NOT EXISTS applicants (
    id INTEGER NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    PRIMARY KEY (id))`
);
createTableApplicants.run();
const createApplicant = db.prepare(
  `INSERT INTO applicants (name, email) VALUES (@name, @email)`
);
for (const iterator of applicants) {
  createApplicant.run(iterator);
}

const createTableEmployee = db.prepare(`
 CREATE TABLE IF NOT EXISTS employee(
  id INTEGER PRIMARY KEY,
  name TEXT,
  position TEXT,
  email TEXT,
  companyId INTEGER,
  FOREIGN KEY (companyId) REFERENCES company (id))
`);
createTableEmployee.run();
const createEmployee = db.prepare(
  `INSERT INTO employee (name, position, email, companyId) VALUES (@name, @position, @email, @companyId)`
);
for (const iterator of employees) {
  createEmployee.run(iterator);
}

const createTableInterviewers =
  db.prepare(`CREATE TABLE IF NOT EXISTS interviewers (
  id INTEGER NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  companyId INTEGER NOT NULL,
  FOREIGN KEY (companyId) REFERENCES company (id),
  PRIMARY KEY (id)
)`);
createTableInterviewers.run();
const createInterviewer = db.prepare(
  ` INSERT INTO interviewers (name, email, companyId) VALUES (@name, @email, @companyId)`
);
for (const iterator of interviewers) {
  createInterviewer.run(iterator);
}

const createTableInterview = db.prepare(`
CREATE TABLE IF NOT EXISTS interviews (
    id INTEGER NOT NULL,
    applicantId INTEGER NOT NULL,
    interviewerId INTEGER NOT NULL,
    date TEXT NOT NULL,
    score INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (applicantId) REFERENCES applicants(id) ON DELETE CASCADE,
    FOREIGN KEY (interviewerId) REFERENCES interviewers(id) ON DELETE CASCADE
)
`);
createTableInterview.run();

const createInterview = db.prepare(
  `INSERT INTO interviews (applicantId, interviewerId, date, score) VALUES (@applicantId , @interviewerId, @date, @score)`
);
for (const iterator of interviews) {
  createInterview.run(iterator);
}
