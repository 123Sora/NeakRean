import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson4_1Content: LessonContent = {
  title: 'គោលការណ៍នៃការរចនាមូលដ្ឋានទិន្នន័យ',
  objectives: [
    'យល់ដឹងអំពីគោលការណ៍នៃការរចនាមូលដ្ឋានទិន្នន័យ',
    'រៀនអំពី Entity-Relationship Model (ER Model)',
    'ស្វែងយល់អំពី Entities, Attributes, និង Relationships',
    'រៀនបង្កើត ER Diagram',
    'ស្វែងយល់អំពី Primary Key និង Foreign Key',
    'យល់ពីសារៈសំខាន់នៃ Data Integrity',
  ],
  content: `
# គោលការណ៍នៃការរចនាមូលដ្ឋានទិន្នន័យ 📚

---

**ការរចនាមូលដ្ឋានទិន្នន័យ** គឺជាដំណើរការនៃការបង្កើតរចនាសម្ព័ន្ធមូលដ្ឋានទិន្នន័យដែលមានប្រសិទ្ធភាព ងាយស្រួលថែទាំ និងអាចគ្រប់គ្រងទិន្នន័យបានយ៉ាងល្អ។

---

## 1. Entity-Relationship Model (ER Model)

**ER Model** គឺជាគំនូសតាងដែលបង្ហាញពីរចនាសម្ព័ន្ធនៃមូលដ្ឋានទិន្នន័យ ដោយប្រើ **Entities**, **Attributes**, និង **Relationships**។

- **Entity**: វត្ថុឬអ្វីមួយដែលមានទិន្នន័យផ្ទុក (ឧទាហរណ៍: បុគ្គលិក, ផលិតផល)។
- **Attribute**: លក្ខណៈរបស់ Entity (ឧទាហរណ៍: ឈ្មោះ, ប្រាក់ខែ)។
- **Relationship**: ទំនាក់ទំនងរវាង Entities (ឧទាហរណ៍: បុគ្គលិកធ្វើការនៅនាយកដ្ឋាន)។

**ឧទាហរណ៍:**
- Entity: \`Employee\`, \`Department\`
- Attribute: \`emp_id\`, \`name\` (សម្រាប់ Employee), \`dept_id\`, \`dept_name\` (សម្រាប់ Department)
- Relationship: \`Employee\` ធ្វើការនៅ \`Department\`

---

## 2. ER Diagram

**ER Diagram** គឺជាគំនូសតាងដែលបង្ហាញ Entities, Attributes, និង Relationships ជាមួយនឹងសញ្ញាសម្គាល់។

- **Rectangle**: តំណាងឱ្យ Entity
- **Oval**: តំណាងឱ្យ Attribute
- **Diamond**: តំណាងឱ្យ Relationship

**ឧទាហរណ៍:**
\`\`\`text
[Employee] --- (Works_In) --- [Department]
  | emp_id        | dept_id
  | name          | dept_name
  | salary
\`\`\`

---

## 3. Primary Key និង Foreign Key

- **Primary Key**: Column ឬក្រុម Columns ដែលកំណត់អត្តសញ្ញាណ Record យ៉ាងប្លែក (Unique) និងមិនអនុញ្ញាត NULL។
- **Foreign Key**: Column ដែលភ្ជាប់ Table មួយទៅ Table ផ្សេងទៀត ដោយយោងទៅ Primary Key។

**ឧទាហរណ៍:**
\`\`\`sql
CREATE TABLE departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(50)
);

CREATE TABLE employees (
  emp_id INT PRIMARY KEY,
  name VARCHAR(50),
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);
\`\`\`

---

## 4. Data Integrity

**Data Integrity** ធានាថាទិន្នន័យមានភាពត្រឹមត្រូវ និងស៊ីសង្វាក់គ្នា។

- **Entity Integrity**: Primary Key មិនអនុញ្ញាត NULL និងត្រូវ Unique។
- **Referential Integrity**: Foreign Key ត្រូវតែយោងទៅ Primary Key ដែលមានស្រាប់។
- **Domain Integrity**: ទិន្នន័យនៅក្នុង Column ត្រូវគោរពតាម Data Type និង Constraints។

**គន្លឹះ:** ការរចនាដ៏ល្អជួយកាត់បន្ថយ Data Redundancy និងបង្កើនប្រសិទ្ធភាព។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បង្កើត ER Diagram</h3>
<p>បង្កើត ER Diagram សម្រាប់ប្រព័ន្ធគ្រប់គ្រងហាង។</p>
<pre><code class="language-text">
[Customer] --- (Places) --- [Order] --- (Contains) --- [Product]
  | cust_id             | order_id          | product_id
  | name                | order_date        | name
  | email               | total             | price
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ បង្កើត Tables ជាមួយ Foreign Key</h3>
<p>បង្កើត Tables សម្រាប់ Customers និង Orders។</p>
<pre><code class="language-sql">
CREATE TABLE customers (
  cust_id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100)
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  cust_id INT,
  order_date DATE,
  FOREIGN KEY (cust_id) REFERENCES customers(cust_id)
);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើការរចនាមូលដ្ឋានទិន្នន័យមានគោលបំណងអ្វី?',
      options: [
        'បង្កើត Queries ស្មុគស្មាញ',
        'បង្កើនប្រសិទ្ធភាពនិងភាពងាយស្រួលក្នុងការថែទាំ',
        'បញ្ចូលទិន្នន័យច្រើន',
        'លុប Tables',
      ],
      correct: 1,
      explanation: 'ការរចនាមូលដ្ឋានទិន្នន័យមានគោលបំណងបង្កើនប្រសិទ្ធភាពនិងភាពងាយស្រួលក្នុងការថែទាំ។'
    },
    {
      question: 'តើ ER Model ជាអ្វី?',
      options: [
        'គំនូសតាងសម្រាប់បង្ហាញរចនាសម្ព័ន្ធមូលដ្ឋានទិន្នន័យ',
        'ប្រភេទនៃ Query',
        'Table ដែលផ្ទុកទិន្នន័យ',
        'Function សម្រាប់គណនា',
      ],
      correct: 0,
      explanation: 'ER Model គឺជាគំនូសតាងសម្រាប់បង្ហាញរចនាសម្ព័ន្ធមូលដ្ឋានទិន្នន័យ។'
    },
    {
      question: 'តើ Entity គឺជាអ្វី?',
      options: [
        'លក្ខណៈរបស់ Table',
        'វត្ថុដែលមានទិន្នន័យផ្ទុក',
        'ទំនាក់ទំនងរវាង Tables',
        'Column នៅក្នុង Table',
      ],
      correct: 1,
      explanation: 'Entity គឺជាវត្ថុដែលមានទិន្នន័យផ្ទុក។'
    },
    {
      question: 'តើ Attribute គឺជាអ្វី?',
      options: [
        'វត្ថុដែលមានទិន្នន័យ',
        'លក្ខណៈរបស់ Entity',
        'ទំនាក់ទំនងរវាង Entities',
        'Primary Key',
      ],
      correct: 1,
      explanation: 'Attribute គឺជាលក្ខណៈរបស់ Entity។'
    },
    {
      question: 'តើ Relationship តំណាងឱ្យអ្វីនៅក្នុង ER Diagram?',
      options: [
        'លក្ខណៈរបស់ Entity',
        'ទំនាក់ទំនងរវាង Entities',
        'Primary Key',
        'Table ថ្មី',
      ],
      correct: 1,
      explanation: 'Relationship តំណាងឱ្យទំនាក់ទំនងរវាង Entities។'
    },
    {
      question: 'តើ Primary Key មានលក្ខណៈអ្វី?',
      options: [
        'អនុញ្ញាត NULL Values',
        'កំណត់អត្តសញ្ញាណ Record យ៉ាងប្លែក និងមិនអនុញ្ញាត NULL',
        'ភ្ជាប់ Tables',
        'បញ្ចូលទិន្នន័យ',
      ],
      correct: 1,
      explanation: 'Primary Key កំណត់អត្តសញ្ញាណ Record យ៉ាងប្លែក និងមិនអនុញ្ញាត NULL។'
    },
    {
      question: 'តើ Foreign Key មានតួនាទីអ្វី?',
      options: [
        'កំណត់អត្តសញ្ញាណ Record',
        'ភ្ជាប់ Table មួយទៅ Table ផ្សេង',
        'បង្កើត Index',
        'លុប Table',
      ],
      correct: 1,
      explanation: 'Foreign Key ភ្ជាប់ Table មួយទៅ Table ផ្សេង។'
    },
    {
      question: 'តើ Data Integrity មានគោលបំណងអ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យច្រើន',
        'ធានាថាទិន្នន័យត្រឹមត្រូវ និងស៊ីសង្វាក់គ្នា',
        'បង្កើត Queries',
        'លុប Tables',
      ],
      correct: 1,
      explanation: 'Data Integrity ធានាថាទិន្នន័យត្រឹមត្រូវ និងស៊ីសង្វាក់គ្នា។'
    },
    {
      question: 'តើ Entity Integrity តម្រូវឱ្យ Primary Key មានលក្ខណៈអ្វី?',
      options: [
        'អនុញ្ញាត NULL',
        'Unique និងមិនអនុញ្ញាត NULL',
        'អនុញ្ញាត Duplicate Values',
        'មាន Foreign Key',
      ],
      correct: 1,
      explanation: 'Entity Integrity តម្រូវឱ្យ Primary Key ជា Unique និងមិនអនុញ្ញាត NULL។'
    },
    {
      question: 'តើ Referential Integrity តម្រូវឱ្យ Foreign Key ធ្វើអ្វី?',
      options: [
        'យោងទៅ Primary Key ដែលមានស្រាប់',
        'កំណត់អត្តសញ្ញាណ Record',
        'បញ្ចូលទិន្នន័យថ្មី',
        'លុប Table',
      ],
      correct: 0,
      explanation: 'Referential Integrity តម្រូវឱ្យ Foreign Key យោងទៅ Primary Key ដែលមានស្រាប់។'
    },
    {
      question: 'តើ Domain Integrity គឺជាអ្វី?',
      options: [
        'ធានាថាទិន្នន័យគោរពតាម Data Type និង Constraints',
        'ភ្ជាប់ Tables',
        'កំណត់ Primary Key',
        'បង្កើត ER Diagram',
      ],
      correct: 0,
      explanation: 'Domain Integrity ធានាថាទិន្នន័យគោរពតាម Data Type និង Constraints។'
    },
    {
      question: 'តើ ER Diagram ប្រើ Rectangle ដើម្បីតំណាងឱ្យអ្វី?',
      options: [
        'Attribute',
        'Relationship',
        'Entity',
        'Foreign Key',
      ],
      correct: 2,
      explanation: 'Rectangle តំណាងឱ្យ Entity នៅក្នុង ER Diagram។'
    },
    {
      question: 'តើ ER Diagram ប្រើ Oval ដើម្បីតំណាងឱ្យអ្វី?',
      options: [
        'Entity',
        'Attribute',
        'Relationship',
        'Primary Key',
      ],
      correct: 1,
      explanation: 'Oval តំណាងឱ្យ Attribute នៅក្នុង ER Diagram។'
    },
    {
      question: 'តើ ER Diagram ប្រើ Diamond ដើម្បីតំណាងឱ្យអ្វី?',
      options: [
        'Entity',
        'Attribute',
        'Relationship',
        'Foreign Key',
      ],
      correct: 2,
      explanation: 'Diamond តំណាងឱ្យ Relationship នៅក្នុង ER Diagram។'
    },
    {
      question: 'តើការរចនាមូលដ្ឋានទិន្នន័យជួយកាត់បន្ថយអ្វី?',
      options: [
        'Data Redundancy',
        'Data Types',
        'Queries',
        'Tables',
      ],
      correct: 0,
      explanation: 'ការរចនាមូលដ្ឋានទិន្នន័យជួយកាត់បន្ថយ Data Redundancy។'
    },
  ],
  lab: {
    task: `
បង្កើតរចនាសម្ព័ន្ធមូលដ្ឋានទិន្នន័យសម្រាប់ប្រព័ន្ធគ្រប់គ្រងសិស្ស។

**តម្រូវការ:**

1. **បង្កើត ER Diagram:**
   - បង្កើត ER Diagram ដែលមាន Entities: \`Students\`, \`Courses\`, និង \`Enrollments\`។
   - \`Students\` មាន Attributes: \`student_id\`, \`name\`, \`email\`។
   - \`Courses\` មាន Attributes: \`course_id\`, \`course_name\`។
   - \`Enrollments\` មាន Attributes: \`enrollment_id\`, \`student_id\`, \`course_id\`, \`enroll_date\`។
   - បង្ហាញ Relationship ថា Student ចុះឈ្មោះនៅក្នុង Course។

2. **បង្កើត Tables:**
   - បង្កើត Tables សម្រាប់ \`Students\`, \`Courses\`, និង \`Enrollments\` ដោយប្រើ Primary Key និង Foreign Key។
   - បញ្ចូល ៣ Records ទៅក្នុង \`Students\` និង \`Courses\`។
   - បញ្ចូល ២ Records ទៅក្នុង \`Enrollments\`។

3. **Test:**
   - Query \`Enrollments\` ដើម្បីទាញឈ្មោះសិស្ស និងឈ្មោះវគ្គសិក្សា។
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries។

**ការណែនាំ:** ប្រើ \`SELECT * FROM table_name\` ដើម្បីពិនិត្យទិន្នន័យ។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Tables
CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100)
);

CREATE TABLE courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(50)
);

CREATE TABLE enrollments (
  enrollment_id INT PRIMARY KEY,
  student_id INT,
  course_id INT,
  enroll_date DATE,
  FOREIGN KEY (student_id) REFERENCES students(student_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO students (student_id, name, email)
VALUES 
  (1, 'សុខ', 'sok@example.com'),
  (2, 'សួន', 'suon@example.com'),
  (3, 'លី', 'ly@example.com');

INSERT INTO courses (course_id, course_name)
VALUES 
  (101, 'MySQL Basics'),
  (102, 'Web Development'),
  (103, 'Data Science');

INSERT INTO enrollments (enrollment_id, student_id, course_id, enroll_date)
VALUES 
  (1, 1, 101, '2025-01-01'),
  (2, 2, 102, '2025-01-02');

-- Test Query
SELECT s.name, c.course_name
FROM enrollments e
JOIN students s ON e.student_id = s.student_id
JOIN courses c ON e.course_id = c.course_id;
\`\`\`
`
  }
};

export default MySQLLesson4_1Content;