import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson7_1Content: LessonContent = {
  title: 'Database សម្រាប់ Student Management System',
  objectives: [
    'រចនា Database Schema សម្រាប់ Student Management System',
    'បង្កើត Tables សម្រាប់ Students, Courses, និង Enrollments',
    'ប្រើ Relationships ដើម្បីភ្ជាប់ Tables',
    'រៀនបញ្ចូល និង Query ទិន្នន័យសម្រាប់ប្រព័ន្ធ',
    'អនុវត្ត Joins ដើម្បីទាញទិន្នន័យពី Tables ច្រើន',
    'គ្រប់គ្រង Data Integrity ដោយប្រើ Constraints',
  ],
  content: `
# Database សម្រាប់ Student Management System 📚

---

**Student Management System** គឺជាប្រព័ន្ធសម្រាប់គ្រប់គ្រងទិន្នន័យនិស្សិត វគ្គសិក្សា និងការចុះឈ្មោះ។

---

## 1. រចនា Database Schema

- **Tables**:
  - \`students\`: ផ្ទុកព័ត៌មាននិស្សិត (student_id, name, email)
  - \`courses\`: ផ្ទុកព័ត៌មានវគ្គសិក្សា (course_id, course_name)
  - \`enrollments\`: ផ្ទុកការចុះឈ្មោះ (enrollment_id, student_id, course_id)

**Relationships**:
- \`students.student_id\` និង \`courses.course_id\` ជា Primary Keys។
- \`enrollments\` មាន Foreign Keys ភ្ជាប់ទៅ \`students\` និង \`courses\`។

---

## 2. បង្កើត Tables

**ឧទាហរណ៍:**
\`\`\`sql
CREATE TABLE students (
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE
);

CREATE TABLE courses (
  course_id INT PRIMARY KEY AUTO_INCREMENT,
  course_name VARCHAR(100) NOT NULL
);

CREATE TABLE enrollments (
  enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  course_id INT,
  FOREIGN KEY (student_id) REFERENCES students(student_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
\`\`\`

---

## 3. បញ្ចូលទិន្នន័យ

**ឧទាហរណ៍:**
\`\`\`sql
INSERT INTO students (name, email) VALUES
  ('Sok Piseth', 'sok@example.com'),
  ('Srey Nuch', 'nuch@example.com');

INSERT INTO courses (course_name) VALUES
  ('Mathematics'),
  ('Programming');

INSERT INTO enrollments (student_id, course_id) VALUES
  (1, 1),
  (2, 2);
\`\`\`

---

## 4. Query ទិន្នន័យ

**SELECT ជាមួយ JOIN:**
\`\`\`sql
SELECT s.name, c.course_name
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id;
\`\`\`

---

## 5. គ្រប់គ្រង Data Integrity

ប្រើ **Constraints** ដូចជា \`NOT NULL\`, \`UNIQUE\`, និង \`FOREIGN KEY\` ដើម្បីធានា Data Integrity។

**គន្លឹះ:** ប្រើ Indexes លើ Columns ដែល Query ញឹកញាប់ ដើម្បីបង្កើន Performance។
`,
  examples: [
    `
### ឧទាហរណ៍៖ បង្កើត និងបញ្ចូលទិន្នន័យ
បង្កើត Table និងបញ្ចូលទិន្នន័យសម្រាប់និស្សិត។
\`\`\`sql
CREATE TABLE students (
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE
);
INSERT INTO students (name, email) VALUES
  ('Sok Piseth', 'sok@example.com');
\`\`\`
`,
    `
### ឧទាហរណ៍៖ Query ជាមួយ JOIN
ទាញឈ្មោះនិស្សិត និងវគ្គសិក្សា។
\`\`\`sql
SELECT s.name, c.course_name
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id;
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Table ណាដែលផ្ទុកការចុះឈ្មោះនិស្សិត?',
      options: ['students', 'courses', 'enrollments', 'classes'],
      correct: 2,
      explanation: '`enrollments` ផ្ទុកការចុះឈ្មោះនិស្សិត។'
    },
    {
      question: 'តើ Primary Key ប្រើសម្រាប់អ្វី?',
      options: ['ភ្ជាប់ Tables', 'កំណត់អត្តសញ្ញាណ Record តែមួយគត់', 'បញ្ចូលទិន្នន័យ', 'លុប Table'],
      correct: 1,
      explanation: 'Primary Key កំណត់អត្តសញ្ញាណ Record តែមួយគត់។'
    },
    {
      question: 'តើ Foreign Key មានតួនាទីអ្វី?',
      options: ['បង្កើត Table', 'ភ្ជាប់ Tables', 'លុប Record', 'បញ្ចូលទិន្នន័យ'],
      correct: 1,
      explanation: 'Foreign Key ភ្ជាប់ Tables។'
    },
    {
      question: 'តើ `AUTO_INCREMENT` ប្រើសម្រាប់អ្វី?',
      options: ['បង្កើតលេខអត្តសញ្ញាណដោយស្វ័យប្រវត្តិ', 'បញ្ចូលទិន្នន័យ', 'ភ្ជាប់ Tables', 'លុប Table'],
      correct: 0,
      explanation: '`AUTO_INCREMENT` បង្កើតលេខអត្តសញ្ញាណដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ `NOT NULL` Constraint ធានាអ្វី?',
      options: ['Column មិនអាចទទេ', 'Column តែមួយគត់', 'Column ភ្ជាប់ Tables', 'Column អាចទទេ'],
      correct: 0,
      explanation: '`NOT NULL` ធានា Column មិនអាចទទេ។'
    },
    {
      question: 'តើ `UNIQUE` Constraint ធ្វើអ្វី?',
      options: ['អនុញ្ញាតឱ្យ Column ទទេ', 'ធានា Column មានតម្លៃតែមួយគត់', 'ភ្ជាប់ Tables', 'លុប Record'],
      correct: 1,
      explanation: '`UNIQUE` ធានា Column មានតម្លៃតែមួយគត់។'
    },
    {
      question: 'តើ JOIN ប្រើសម្រាប់អ្វី?',
      options: ['បញ្ចូលទិន្នន័យ', 'ទាញទិន្នន័យពី Tables ច្រើន', 'លុប Table', 'បង្កើត Table'],
      correct: 1,
      explanation: 'JOIN ទាញទិន្នន័យពី Tables ច្រើន។'
    },
    {
      question: 'តើ Table `enrollments` ភ្ជាប់ Tables ណាខ្លះ?',
      options: ['students និង courses', 'students និង classes', 'courses និង classes', 'គ្មាន Table'],
      correct: 0,
      explanation: '`enrollments` ភ្ជាប់ `students` និង `courses`។'
    },
    {
      question: 'តើ Column ណាដែលជា Primary Key នៅក្នុង Table `students`?',
      options: ['name', 'email', 'student_id', 'course_id'],
      correct: 2,
      explanation: '`student_id` ជា Primary Key នៅក្នុង Table `students`។'
    },
    {
      question: 'តើ Column ណាដែលជា Foreign Key នៅក្នុង Table `enrollments`?',
      options: ['enrollment_id', 'student_id', 'course_name', 'name'],
      correct: 1,
      explanation: '`student_id` និង `course_id` ជា Foreign Keys នៅក្នុង `enrollments`។'
    },
    {
      question: 'តើអ្វីជាគុណសម្បត្តិនៃ Foreign Key?',
      options: ['បង្កើនល្បឿន Query', 'ធានា Referential Integrity', 'លុប Table', 'បញ្ចូលទិន្នន័យ'],
      correct: 1,
      explanation: 'Foreign Key ធានា Referential Integrity។'
    },
    {
      question: 'តើ Query ណាដែលប្រើ JOIN ដើម្បីទាញទិន្នន័យ?',
      options: ['INSERT', 'SELECT', 'UPDATE', 'DELETE'],
      correct: 1,
      explanation: '`SELECT` ប្រើ JOIN ដើម្បីទាញទិន្នន័យ។'
    },
    {
      question: 'តើ Indexes មានអត្ថប្រយោជន៍អ្វី?',
      options: ['បង្កើនល្បឿន Query', 'ភ្ជាប់ Tables', 'លុប Record', 'បញ្ចូលទិន្នន័យ'],
      correct: 0,
      explanation: 'Indexes បង្កើនល្បឿន Query។'
    },
    {
      question: 'តើអ្នកគួរប្រើ Constraint ណាដើម្បីធានា Email តែមួយគត់?',
      options: ['NOT NULL', 'UNIQUE', 'FOREIGN KEY', 'PRIMARY KEY'],
      correct: 1,
      explanation: '`UNIQUE` ធានា Email តែមួយគត់។'
    },
    {
      question: 'តើ Table `courses` ផ្ទុកទិន្នន័យអ្វី?',
      options: ['ព័ត៌មាននិស្សិត', 'ព័ត៌មានវគ្គសិក្សា', 'ការចុះឈ្មោះ', 'គ្រូបង្រៀន'],
      correct: 1,
      explanation: '`courses` ផ្ទុកព័ត៌មានវគ្គសិក្សា។'
    },
  ],
  lab: {
    task: `
បង្កើត Database សម្រាប់ Student Management System។

**តម្រូវការ:**

1. **បង្កើត Tables:**
   - បង្កើត Tables \`students\`, \`courses\`, និង \`enrollments\` ជាមួយ Constraints សមស្រប។
   - បញ្ចូល 2 Records សម្រាប់ \`students\`, 2 Records សម្រាប់ \`courses\`, និង 2 Records សម្រាប់ \`enrollments\`។

2. **Query:**
   - Query ដើម្បីទាញឈ្មោះនិស្សិត និងវគ្គសិក្សាដែលគេបានចុះឈ្មោះ។

3. **Test:**
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries។
   - ពិនិត្យទិន្នន័យដោយប្រើ \`SELECT * FROM\` សម្រាប់នីមួយៗ។

**ការណែនាំ:** ត្រូវប្រាកដថា Foreign Keys ត្រូវបានកំណត់ត្រឹមត្រូវ។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Database
CREATE DATABASE student_management;
USE student_management;

-- បង្កើត Tables
CREATE TABLE students (
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE
);

CREATE TABLE courses (
  course_id INT PRIMARY KEY AUTO_INCREMENT,
  course_name VARCHAR(100) NOT NULL
);

CREATE TABLE enrollments (
  enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  course_id INT,
  FOREIGN KEY (student_id) REFERENCES students(student_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO students (name, email) VALUES
  ('Sok Piseth', 'sok@example.com'),
  ('Srey Nuch', 'nuch@example.com');

INSERT INTO courses (course_name) VALUES
  ('Mathematics'),
  ('Programming');

INSERT INTO enrollments (student_id, course_id) VALUES
  (1, 1),
  (2, 2);

-- Query ទាញទិន្នន័យ
SELECT s.name, c.course_name
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id;

-- ពិនិត្យទិន្នន័យ
SELECT * FROM students;
SELECT * FROM courses;
SELECT * FROM enrollments;
\`\`\`
`
  }
};

export default MySQLLesson7_1Content;