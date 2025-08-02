import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson2_4Content: LessonContent = {
  title: 'DML - SELECT Statement',
  objectives: [
    'រៀនប្រើ `SELECT` ដើម្បីទាញទិន្នន័យ',
    'ស្វែងយល់អំពី `SELECT *` និងការជ្រើសរើស Columns ជាក់លាក់',
    'រៀនប្រើ `AS` (Alias) សម្រាប់ឈ្មោះបណ្តោះអាសន្ន',
    'រៀនប្រើ `DISTINCT` ដើម្បីជ្រើសរើស Unique Values',
    'រៀនប្រើ `WHERE` សម្រាប់ Filter Data',
    'ស្វែងយល់អំពី Operators (Comparison, Logical)',
    'រៀនប្រើ `ORDER BY`, `LIMIT`, និង `OFFSET`',
  ],
  content: `
# DML - SELECT Statement 📚

---

**SELECT Statement** គឺជា Command សំខាន់បំផុតនៅក្នុង SQL សម្រាប់ទាញទិន្នន័យពី Table។

---

## 1. Basic SELECT

ទាញ Columns ជាក់លាក់ពី Table។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT name, salary FROM employees;
\`\`\`

---

## 2. SELECT *

ទាញ Columns ទាំងអស់ពី Table។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT * FROM employees;
\`\`\`

---

## 3. AS (Alias)

កំណត់ឈ្មោះបណ្តោះអាសន្នសម្រាប់ Columns ឬ Tables។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT name AS employee_name, salary AS monthly_salary FROM employees;
\`\`\`

---

## 4. DISTINCT

ទាញ Unique Values។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT DISTINCT department FROM employees;
\`\`\`

---

## 5. WHERE Clause

កំណត់លក្ខខណ្ឌសម្រាប់ Filter Data។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT * FROM employees WHERE salary > 2000;
\`\`\`

### Comparison Operators
- \`=\` : ស្មើ
- \`!=\` : មិនស្មើ
- \`<\`, \`>\` : តូចជាង, ធំជាង
- \`<=\`, \`>=\` : តូចជាង ឬស្មើ, ធំជាង ឬស្មើ

### Logical Operators
- **AND**: ទាំងពីរលក្ខខណ្ឌត្រូវពិត
- **OR**: យ៉ាងហោចណាស់មួយលក្ខខណ្ឌត្រូវពិត
- **NOT**: បដិសេធ

**ឧទាហរណ៍:**
\`\`\`sql
SELECT * FROM employees WHERE salary > 2000 AND department = 'IT';
\`\`\`

### Special Operators
- **BETWEEN**: ជួរតម្លៃ
- **IN**: តម្លៃជាក់លាក់
- **LIKE**: Pattern Matching (%: អក្សរច្រើន, _: អក្សរតែមួយ)
- **IS NULL / IS NOT NULL**: ពិនិត្យតម្លៃទទេ

**ឧទាហរណ៍:**
\`\`\`sql
SELECT * FROM employees WHERE salary BETWEEN 1000 AND 2000;
SELECT * FROM employees WHERE name LIKE 'S%';
\`\`\`

---

## 6. ORDER BY

រៀបចំលំដាប់ Data។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT * FROM employees ORDER BY salary DESC;
\`\`\`

---

## 7. LIMIT / OFFSET

កំណត់ចំនួន Records ដែលត្រូវទាញ។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT * FROM employees LIMIT 5 OFFSET 2;
\`\`\`
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ ទាញទិន្នន័យជាមួយ WHERE</h3>
<p>ទាញ Records ដែល \`price > 50\` ពី Table <code>products</code>។</p>
<pre><code class="language-sql">
SELECT name, price FROM products WHERE price > 50;
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ ប្រើ ORDER BY និង LIMIT</h3>
<p>ទាញ ៣ Records ដែលមាន \`price\` ខ្ពស់បំផុត។</p>
<pre><code class="language-sql">
SELECT * FROM products ORDER BY price DESC LIMIT 3;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Command `SELECT` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'ទាញទិន្នន័យ',
        'លុបទិន្នន័យ',
        'កែប្រែ Table',
      ],
      correct: 1,
      explanation: '`SELECT` ទាញទិន្នន័យពី Table។'
    },
    {
      question: 'តើ `SELECT *` មានន័យដូចម្តេច?',
      options: [
        'ទាញ Columns ជាក់លាក់',
        'ទាញ Columns ទាំងអស់',
        'ទាញ Rows ជាក់លាក់',
        'ទាញ Tables ទាំងអស់',
      ],
      correct: 1,
      explanation: '`SELECT *` ទាញ Columns ទាំងអស់ពី Table។'
    },
    {
      question: 'តើ `AS` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ឈ្មោះបណ្តោះអាសន្ន',
        'លុបទិន្នន័យ',
        'បញ្ចូលទិន្នន័យ',
        'កែប្រែ Table',
      ],
      correct: 0,
      explanation: '`AS` កំណត់ឈ្មោះបណ្តោះអាសន្នសម្រាប់ Columns ឬ Tables។'
    },
    {
      question: 'តើ `DISTINCT` មានតួនាទីអ្វី?',
      options: [
        'ទាញ Unique Values',
        'ទាញ Duplicate Values',
        'កែប្រែ Records',
        'លុប Records',
      ],
      correct: 0,
      explanation: '`DISTINCT` ទាញ Unique Values តែប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ `WHERE` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់លក្ខខណ្ឌ Filter',
        'រៀបចំលំដាប់',
        'បញ្ចូលទិន្នន័យ',
        'កែប្រែ Table',
      ],
      correct: 0,
      explanation: '`WHERE` កំណត់លក្ខខណ្ឌសម្រាប់ Filter Data។'
    },
    {
      question: 'តើ Operator `LIKE` ប្រើសម្រាប់អ្វី?',
      options: [
        'ធៀបតម្លៃ',
        'Pattern Matching',
        'រៀបចំលំដាប់',
        'កំណត់ជួរតម្លៃ',
      ],
      correct: 1,
      explanation: '`LIKE` ប្រើសម្រាប់ Pattern Matching។'
    },
    {
      question: 'តើ `%` នៅក្នុង `LIKE` មានន័យដូចម្តេច?',
      options: [
        'អក្សរតែមួយ',
        'អក្សរច្រើន',
        'តម្លៃទទេ',
        'តម្លៃជាក់លាក់',
      ],
      correct: 1,
      explanation: '`%` តំណាងឱ្យអក្សរច្រើននៅក្នុង `LIKE`។'
    },
    {
      question: 'តើ `ORDER BY` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'រៀបចំលំដាប់ Data',
        'លុប Records',
        'កំណត់លក្ខខណ្ឌ',
      ],
      correct: 1,
      explanation: '`ORDER BY` រៀបចំលំដាប់ Data។'
    },
    {
      question: 'តើ `LIMIT` មានតួនាទីអ្វី?',
      options: [
        'កំណត់ចំនួន Records',
        'កំណត់លក្ខខណ្ឌ',
        'កែប្រែ Records',
        'លុប Records',
      ],
      correct: 0,
      explanation: '`LIMIT` កំណត់ចំនួន Records ដែលត្រូវទាញ។'
    },
    {
      question: 'តើ `OFFSET` ប្រើជាមួយអ្វី?',
      options: [
        'WHERE',
        'LIMIT',
        'ORDER BY',
        'DISTINCT',
      ],
      correct: 1,
      explanation: '`OFFSET` ប្រើជាមួយ `LIMIT` ដើម្បីរំលង Records។'
    },
    {
      question: 'តើ Operator `IN` មានតួនាទីអ្វី?',
      options: [
        'ធៀបជួរតម្លៃ',
        'ធៀបតម្លៃជាក់លាក់',
        'Pattern Matching',
        'រៀបចំលំដាប់',
      ],
      correct: 1,
      explanation: '`IN` ធៀបតម្លៃជាក់លាក់។'
    },
    {
      question: 'តើ `IS NULL` ប្រើសម្រាប់អ្វី?',
      options: [
        'ពិនិត្យតម្លៃទទេ',
        'ពិនិត្យតម្លៃមិនទទេ',
        'ធៀបជួរតម្លៃ',
        'រៀបចំលំដាប់',
      ],
      correct: 0,
      explanation: '`IS NULL` ពិនិត្យតម្លៃទទេ។'
    },
    {
      question: 'តើ `ORDER BY DESC` មានន័យដូចម្តេច?',
      options: [
        'រៀបចំពីតូចទៅធំ',
        'រៀបចំពីធំទៅតូច',
        'រៀបចំតាមលំដាប់អក្សរ',
        'រៀបចំតាមកាលបរិច្ឆេទ',
      ],
      correct: 1,
      explanation: '`ORDER BY DESC` រៀបចំពីធំទៅតូច។'
    },
    {
      question: 'តើ Operator `AND` តម្រូវឱ្យលក្ខខណ្ឌណាខ្លះពិត?',
      options: [
        'លក្ខខណ្ឌមួយ',
        'ទាំងពីរលក្ខខណ្ឌ',
        'យ៉ាងហោចណាស់មួយលក្ខខណ្ឌ',
        'គ្មានលក្ខខណ្ឌ',
      ],
      correct: 1,
      explanation: '`AND` តម្រូវឱ្យទាំងពីរលក្ខខណ្ឌពិត។'
    },
    {
      question: 'តើ `BETWEEN` ប្រើសម្រាប់អ្វី?',
      options: [
        'Pattern Matching',
        'ជួរតម្លៃ',
        'តម្លៃជាក់លាក់',
        'លុប Records',
      ],
      correct: 1,
      explanation: '`BETWEEN` ប្រើសម្រាប់ជួរតម្លៃ។'
    }
  ],
  lab: {
    task: `
ទាញទិន្នន័យដោយប្រើ SELECT Statement។

**តម្រូវការ:**

1. **បង្កើត Table:**
   - បង្កើត Table \`students\` ដែលមាន Columns: \`student_id\` (INT, PRIMARY KEY), \`name\` (VARCHAR), \`age\` (INT), \`grade\` (VARCHAR)។

2. **បញ្ចូលទិន្នន័យ:**
   - បញ្ចូល ៥ Records ទៅក្នុង \`students\`។

3. **ទាញទិន្នន័យ:**
   - ទាញ \`name\` និង \`age\` ដែល \`age > 18\`។
   - ទាញ \`grade\` ដែលមិនស្ទួន (\`DISTINCT\`)។
   - ទាញ ២ Records ដែលមាន \`age\` ខ្ពស់បំផុត។

4. **Test:**
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries និងពិនិត្យលទ្ធផល។

**ការណែនាំ:** ប្រើ \`SELECT * FROM students\` ដើម្បីពិនិត្យទិន្នន័យ។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Table
CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT,
  grade VARCHAR(2)
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO students (student_id, name, age, grade) 
VALUES 
  (1, 'សុខ', 20, 'A'),
  (2, 'សួន', 19, 'B'),
  (3, 'លី', 21, 'A'),
  (4, 'ចាន់', 17, 'C'),
  (5, 'ម៉ៅ', 22, 'B');

-- ទាញទិន្នន័យ
SELECT name, age FROM students WHERE age > 18;
SELECT DISTINCT grade FROM students;
SELECT * FROM students ORDER BY age DESC LIMIT 2;
\`\`\`
`
  }
};

export default MySQLLesson2_4Content;