import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson3_3Content: LessonContent = {
  title: 'Subqueries',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា Subquery',
    'រៀនប្រើ Subqueries នៅក្នុង `SELECT`',
    'រៀនប្រើ Subqueries នៅក្នុង `WHERE`',
    'រៀនប្រើ Subqueries នៅក្នុង `FROM`',
    'ស្វែងយល់អំពី Correlated Subqueries',
    'រៀនប្រើ Operators ជាមួយ Subqueries (`IN`, `ANY`, `ALL`)',
  ],
  content: `
# Subqueries 📚

---

**Subquery** គឺជា Query ដែលនៅខាងក្នុង Query មួយទៀត។ វាប្រើសម្រាប់ទាញទិន្នន័យជាជំហានៗ។

---

## 1. Subquery នៅក្នុង SELECT

ប្រើ Subquery ដើម្បីបន្ថែម Column ដែលគណនាពី Query ផ្សេង។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT name, salary, 
       (SELECT AVG(salary) FROM employees) AS avg_salary 
FROM employees;
\`\`\`

---

## 2. Subquery នៅក្នុង WHERE

ប្រើ Subquery ដើម្បី Filter Data។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT name, salary 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);
\`\`\`

---

## 3. Subquery នៅក្នុង FROM

ប្រើ Subquery ជា Table បណ្តោះអាសន្ន។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT dept_name, avg_salary 
FROM (SELECT department, AVG(salary) AS avg_salary 
      FROM employees 
      GROUP BY department) AS dept_avg;
\`\`\`

---

## 4. Correlated Subqueries

Subquery ដែលអាស្រ័យលើ Outer Query។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT name, salary 
FROM employees e1 
WHERE salary > (SELECT AVG(salary) 
                FROM employees e2 
                WHERE e2.department = e1.department);
\`\`\`

---

## 5. Operators ជាមួយ Subqueries

- **IN**: ពិនិត្យតម្លៃនៅក្នុង List
- **ANY**: ពិនិត្យតម្លៃធៀបនឹងតម្លៃណាមួយ
- **ALL**: ពិនិត្យតម្លៃធៀបនឹងតម្លៃទាំងអស់

**ឧទាហរណ៍:**
\`\`\`sql
SELECT name 
FROM employees 
WHERE dept_id IN (SELECT dept_id FROM departments WHERE budget > 10000);
\`\`\`
`,
  examples: [
    `
### ឧទាហរណ៍៖ Subquery នៅក្នុង WHERE
ទាញផលិតផលដែលមានតម្លៃលើសពីតម្លៃមធ្យម។
\`\`\`sql
SELECT name, price 
FROM products 
WHERE price > (SELECT AVG(price) FROM products);
\`\`\`
`,
    `
### ឧទាហរណ៍៖ Correlated Subquery
ទាញអតិថិជនដែលមាន Orders លើសពីតម្លៃមធ្យមនៃ Orders ទាំងអស់។
\`\`\`sql
SELECT name 
FROM customers c 
WHERE EXISTS (SELECT 1 FROM orders o 
              WHERE o.customer_id = c.customer_id 
              AND o.total > (SELECT AVG(total) FROM orders));
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Subquery គឺជាអ្វី?',
      options: [
        'Query ដែលនៅខាងក្រៅ',
        'Query ដែលនៅខាងក្នុង Query មួយទៀត',
        'Query ដែលភ្ជាប់ Tables',
        'Query ដែលបញ្ចូលទិន្នន័យ',
      ],
      correct: 1,
      explanation: 'Subquery គឺជា Query ដែលនៅខាងក្នុង Query មួយទៀត។'
    },
    {
      question: 'តើ Subquery អាចប្រើនៅឯណា?',
      options: [
        '`SELECT` តែប៉ុណ្ណោះ',
        '`WHERE` តែប៉ុណ្ណោះ',
        '`SELECT`, `WHERE`, `FROM`',
        '`GROUP BY` តែប៉ុណ្ណោះ',
      ],
      correct: 2,
      explanation: 'Subquery អាចប្រើនៅក្នុង `SELECT`, `WHERE`, និង `FROM`។'
    },
    {
      question: 'តើ Correlated Subquery គឺជាអ្វី?',
      options: [
        'Subquery ដែលមិនអាស្រ័យលើ Outer Query',
        'Subquery ដែលអាស្រ័យលើ Outer Query',
        'Subquery ដែលប្រើ `GROUP BY`',
        'Subquery ដែលប្រើ `JOIN`',
      ],
      correct: 1,
      explanation: 'Correlated Subquery អាស្រ័យលើ Outer Query។'
    },
    {
      question: 'តើ Operator `IN` ប្រើសម្រាប់អ្វីជាមួយ Subquery?',
      options: [
        'ធៀបជួរតម្លៃ',
        'ធៀបតម្លៃនៅក្នុង List',
        'ធៀបតម្លៃទាំងអស់',
        'ធៀបតម្លៃណាមួយ',
      ],
      correct: 1,
      explanation: '`IN` ធៀបតម្លៃនៅក្នុង List។'
    },
    {
      question: 'តើ Operator `ANY` មានន័យដូចម្តេច?',
      options: [
        'ធៀបតម្លៃទាំងអស់',
        'ធៀបតម្លៃណាមួយ',
        'ធៀបតម្លៃនៅក្នុង List',
        'ធៀបជួរតម្លៃ',
      ],
      correct: 1,
      explanation: '`ANY` ធៀបតម្លៃណាមួយ។'
    },
    {
      question: 'តើ Operator `ALL` ប្រើសម្រាប់អ្វី?',
      options: [
        'ធៀបតម្លៃណាមួយ',
        'ធៀបតម្លៃទាំងអស់',
        'ធៀបតម្លៃនៅក្នុង List',
        'ធៀបជួរតម្លៃ',
      ],
      correct: 1,
      explanation: '`ALL` ធៀបតម្លៃទាំងអស់។'
    },
    {
      question: 'តើ Subquery នៅក្នុង `FROM` ត្រូវការ Alias ដែរឬទេ?',
      options: [
        'តម្រូវ',
        'មិនតម្រូវ',
        'តម្រូវ ប៉ុន្តែតែនៅក្នុង `WHERE`',
        'តម្រូវ ប៉ុន្តែតែនៅក្នុង `SELECT`',
      ],
      correct: 0,
      explanation: 'Subquery នៅក្នុង `FROM` ត្រូវការ Alias។'
    },
    {
      question: 'តើ Correlated Subquery ដំណើរការយឺតជាង Subquery ធម្មតាដែរឬទេ?',
      options: [
        'ជួនកាល',
        'មិនដែល',
        'តែងតែ',
        'អាស្រ័យលើ Database',
      ],
      correct: 0,
      explanation: 'Correlated Subquery ជួនកាលដំណើរការយឺតជាង ព្រោះវាអាស្រ័យលើ Outer Query។'
    },
    {
      question: 'តើ Subquery អាច Return ច្រើន Rows បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `SELECT`',
        'បាន ប៉ុន្តែតែនៅក្នុង `FROM`',
      ],
      correct: 0,
      explanation: 'Subquery អាច Return ច្រើន Rows បាន អាស្រ័យលើ Context។'
    },
    {
      question: 'តើ Subquery នៅក្នុង `WHERE` តម្រូវឱ្យ Return តែមួយ Column ដែរឬទេ?',
      options: [
        'តម្រូវ',
        'មិនតម្រូវ',
        'តម្រូវ ប៉ុន្តែតែនៅក្នុង `IN`',
        'តម្រូវ ប៉ុន្តែតែនៅក្នុង `ANY`',
      ],
      correct: 0,
      explanation: 'Subquery នៅក្នុង `WHERE` តម្រូវឱ្យ Return តែមួយ Column។'
    },
    {
      question: 'តើ Query ខាងក្រោមនេះត្រឹមត្រូវទេ? `SELECT name FROM employees WHERE salary > (SELECT MAX(salary) FROM employees);`',
      options: [
        'ត្រឹមត្រូវ',
        'មិនត្រឹមត្រូវ ព្រោះ Subquery Return ច្រើន Rows',
        'មិនត្រឹមត្រូវ ព្រោះត្រូវការ `GROUP BY`',
        'មិនត្រឹមត្រូវ ព្រោះត្រូវការ `HAVING`',
      ],
      correct: 0,
      explanation: 'Query នេះត្រឹមត្រូវ ព្រោះ Subquery Return តែមួយ Row�।'
    },
    {
      question: 'តើ Subquery អាចប្រើជាមួយ `EXISTS` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `SELECT`',
        'បាន ប៉ុន្តែតែនៅក្នុង `FROM`',
      ],
      correct: 0,
      explanation: 'Subquery អាចប្រើជាមួយ `EXISTS`។'
    },
    {
      question: 'តើ `EXISTS` ពិនិត្យអ្វី?',
      options: [
        'ចំនួន Rows',
        'តម្លៃជាក់លាក់',
        'ការមាន Rows នៅក្នុង Subquery',
        'តម្លៃទាំងអស់',
      ],
      correct: 2,
      explanation: '`EXISTS` ពិនិត្យការមាន Rows នៅក្នុង Subquery។'
    },
    {
      question: 'តើ Subquery អាចប្រើនៅក្នុង `GROUP BY` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `HAVING`',
        'បាន ប៉ុន្តែតែនៅក្នុង `ORDER BY`',
      ],
      correct: 1,
      explanation: 'Subquery មិនអាចប្រើនៅក្នុង `GROUP BY`។'
    },
    {
      question: 'តើ Subquery អាច Nest ច្រើនកម្រិតបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `SELECT`',
        'បាន ប៉ុន្តែតែនៅក្នុង `WHERE`',
      ],
      correct: 0,
      explanation: 'Subquery អាច Nest ច្រើនកម្រិតបាន។'
    },
    {
      question: 'តើ Correlated Subquery តម្រូវឱ្យ Outer Query មាន Alias ដែរឬទេ?',
      options: [
        'តម្រូវ',
        'មិនតម្រូវ',
        'តម្រូវ ប៉ុន្តែតែនៅក្នុង `WHERE`',
        'តម្រូវ ប៉ុន្តែតែនៅក្នុង `SELECT`',
      ],
      correct: 0,
      explanation: 'Correlated Subquery តម្រូវឱ្យ Outer Query មាន Alias ដើម្បីជៀសវាងភាពច្របូកច្របល់។'
    }
  ],
  lab: {
    task: `
ប្រើ Subqueries ដើម្បីទាញទិន្នន័យស្មុគស្មាញ។

**តម្រូវការ:**

**1. បង្កើត Tables:**
   - បង្កើត Table \`employees\` ដែលមាន Columns: \`emp_id\` (INT, PRIMARY KEY), \`name\` (VARCHAR), \`salary\` (DECIMAL), \`dept_id\` (INT)។
   - បង្កើត Table \`departments\` ដែលមាន Columns: \`dept_id\` (INT, PRIMARY KEY), \`name\` (VARCHAR)។

**2. បញ្ចូលទិន្នន័យ:**
   - បញ្ចូល ៤ Records ទៅក្នុង \`employees\`។
   - បញ្ចូល ២ Records ទៅក្នុង \`departments\`។

**3. ទាញទិន្នន័យ:**
   - ប្រើ Subquery នៅក្នុង \`WHERE\` ដើម្បីទាញ \`name\` និង \`salary\` ដែល \`salary\` លើសពីមធ្យម។
   - ប្រើ Subquery នៅក្នុង \`FROM\` ដើម្បីទាញ \`dept_name\` និងមធ្យម \`salary\` តាម Department។
   - ប្រើ Correlated Subquery ដើម្បីទាញ \`name\` ដែល \`salary\` លើសពីមធ្យមនៃ Department របស់ខ្លួន។

**4. Test:**
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries និងពិនិត្យលទ្ធផល។

**ការណែនាំ:** ប្រើ \`SELECT * FROM employees\` និង \`SELECT * FROM departments\` ដើម្បីពិនិត្យទិន្នន័យ។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Tables
CREATE TABLE departments (
  dept_id INT PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE employees (
  emp_id INT PRIMARY KEY,
  name VARCHAR(50),
  salary DECIMAL(10,2),
  dept_id INT
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO departments (dept_id, name) 
VALUES 
  (1, 'IT'),
  (2, 'HR');

INSERT INTO employees (emp_id, name, salary, dept_id) 
VALUES 
  (1, 'សុខ', 2500.00, 1),
  (2, 'សួន', 2000.00, 1),
  (3, 'លី', 1800.00, 2),
  (4, 'ចាន់', 2200.00, 2);

-- ទាញទិន្នន័យ
SELECT name, salary 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);

SELECT dept_name, avg_salary 
FROM (SELECT d.name AS dept_name, AVG(e.salary) AS avg_salary 
      FROM employees e 
      JOIN departments d ON e.dept_id = d.dept_id 
      GROUP BY d.name) AS dept_avg;

SELECT name, salary 
FROM employees e1 
WHERE salary > (SELECT AVG(salary) 
                FROM employees e2 
                WHERE e2.dept_id = e1.dept_id);
\`\`\`
`
  }
};

export default MySQLLesson3_3Content;