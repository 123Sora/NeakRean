import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson3_1Content: LessonContent = {
  title: 'Aggregate Functions',
  objectives: [
    'យល់ដឹងអំពី Aggregate Functions និងសារៈសំខាន់របស់វា',
    'រៀនប្រើ `COUNT` ដើម្បីរាប់ Records',
    'រៀនប្រើ `SUM` និង `AVG` សម្រាប់គណនាសរុប និងមធ្យម',
    'រៀនប្រើ `MIN` និង `MAX` ដើម្បីស្វែងរកតម្លៃអប្បបរមា និងអតិបរមា',
    'ស្វែងយល់អំពីការប្រើ Aggregate Functions ជាមួយ `GROUP BY`',
    'រៀនប្រើ `HAVING` ដើម្បី Filter លទ្ធផលបន្ទាប់ពី Grouping',
  ],
  content: `
# Aggregate Functions 📚

---

**Aggregate Functions** គឺជា Functions នៅក្នុង SQL ដែលប្រើសម្រាប់គណនាទិន្នន័យជាក្រុម ដូចជាការរាប់ គណនាសរុប ឬស្វែងរកតម្លៃអប្បបរមា/អតិបរមា។

---

## 1. COUNT

រាប់ចំនួន Records ឬ Rows នៅក្នុង Table។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT COUNT(*) FROM employees;
SELECT COUNT(DISTINCT department) FROM employees;
\`\`\`

---

## 2. SUM

គណនាសរុបនៃ Column ជាក់លាក់។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT SUM(salary) AS total_salary FROM employees;
\`\`\`

---

## 3. AVG

គណនាមធ្យមនៃ Column ជាក់លាក់។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT AVG(salary) AS avg_salary FROM employees;
\`\`\`

---

## 4. MIN / MAX

ស្វែងរកតម្លៃអប្បបរមា និងអតិបរមានៃ Column។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT MIN(salary) AS min_salary, MAX(salary) AS max_salary FROM employees;
\`\`\`

---

## 5. GROUP BY

បែងចែកទិន្នន័យជាក្រុមសម្រាប់ប្រើជាមួយ Aggregate Functions។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT department, COUNT(*) AS employee_count 
FROM employees 
GROUP BY department;
\`\`\`

---

## 6. HAVING

Filter លទ្ធផលបន្ទាប់ពី Grouping។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT department, AVG(salary) AS avg_salary 
FROM employees 
GROUP BY department 
HAVING AVG(salary) > 2000;
\`\`\`

**គន្លឹះ:** \`HAVING\` ប្រើសម្រាប់ Filter Groups ខណៈ \`WHERE\` ប្រើសម្រាប់ Filter Rows។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ ប្រើ GROUP BY និង COUNT</h3>
<p>រាប់ចំនួនផលិតផលតាមប្រភេទនៅក្នុង Table <code>products</code>។</p>
<pre><code class="language-sql">
SELECT category, COUNT(*) AS product_count 
FROM products 
GROUP BY category;
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ ប្រើ HAVING</h3>
<p>ទាញប្រភេទផលិតផលដែលមានតម្លៃមធ្យមលើសពី 100។</p>
<pre><code class="language-sql">
SELECT category, AVG(price) AS avg_price 
FROM products 
GROUP BY category 
HAVING AVG(price) > 100;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Aggregate Functions ប្រើសម្រាប់អ្វី?',
      options: [
        'កែប្រែរចនាសម្ព័ន្ធ Table',
        'គណនាទិន្នន័យជាក្រុម',
        'បញ្ចូលទិន្នន័យ',
        'ភ្ជាប់ Tables',
      ],
      correct: 1,
      explanation: 'Aggregate Functions ប្រើសម្រាប់គណនាទិន្នន័យជាក្រុម។'
    },
    {
      question: 'តើ Function `COUNT` មានតួនាទីអ្វី?',
      options: [
        'គណនាសរុប',
        'រាប់ Records',
        'ស្វែងរកតម្លៃអប្បបរមា',
        'គណនាមធ្យម',
      ],
      correct: 1,
      explanation: '`COUNT` រាប់ចំនួន Records ឬ Rows។'
    },
    {
      question: 'តើ Function `SUM` ប្រើសម្រាប់អ្វី?',
      options: [
        'គណនាមធ្យម',
        'គណនាសរុប',
        'ស្វែងរកតម្លៃអតិបរមា',
        'រាប់ Records',
      ],
      correct: 1,
      explanation: '`SUM` គណនាសរុបនៃ Column។'
    },
    {
      question: 'តើ Function `AVG` មានន័យដូចម្តេច?',
      options: [
        'ស្វែងរកតម្លៃអប្បបរមា',
        'គណនាមធ្យម',
        'គណនាសរុប',
        'រាប់ Records',
      ],
      correct: 1,
      explanation: '`AVG` គណនាមធ្យមនៃ Column។'
    },
    {
      question: 'តើ Function `MAX` ប្រើសម្រាប់អ្វី?',
      options: [
        'ស្វែងរកតម្លៃអតិបរមា',
        'គណនាមធ្យម',
        'គណនាសរុប',
        'រាប់ Records',
      ],
      correct: 0,
      explanation: '`MAX` ស្វែងរកតម្លៃអតិបរមានៃ Column។'
    },
    {
      question: 'តើ `GROUP BY` មានតួនាទីអ្វី?',
      options: [
        'Filter Rows',
        'បែងចែកទិន្នន័យជាក្រុម',
        'ភ្ជាប់ Tables',
        'លុប Records',
      ],
      correct: 1,
      explanation: '`GROUP BY` បែងចែកទិន្នន័យជាក្រុមសម្រាប់ Aggregate Functions។'
    },
    {
      question: 'តើ `HAVING` ប្រើសម្រាប់អ្វី?',
      options: [
        'Filter Rows មុន Grouping',
        'Filter Groups បន្ទាប់ពី Grouping',
        'ភ្ជាប់ Tables',
        'បញ្ចូលទិន្នន័យ',
      ],
      correct: 1,
      explanation: '`HAVING` Filter Groups បន្ទាប់ពី Grouping។'
    },
    {
      question: 'តើ `COUNT(*)` រាប់អ្វី?',
      options: [
        'Columns ទាំងអស់',
        'Rows ទាំងអស់',
        'Unique Values',
        'NULL Values',
      ],
      correct: 1,
      explanation: '`COUNT(*)` រាប់ Rows ទាំងអស់។'
    },
    {
      question: 'តើ `COUNT(DISTINCT column)` មានន័យដូចម្តេច?',
      options: [
        'រាប់ Rows ទាំងអស់',
        'រាប់ Unique Values នៃ Column',
        'រាប់ NULL Values',
        'រាប់ Duplicate Values',
      ],
      correct: 1,
      explanation: '`COUNT(DISTINCT column)` រាប់ Unique Values នៃ Column។'
    },
    {
      question: 'តើ `HAVING` ខុសពី `WHERE` ដូចម្តេច?',
      options: [
        '`HAVING` ប្រើមុន Grouping, `WHERE` ប្រើបន្ទាប់',
        '`HAVING` ប្រើបន្ទាប់ Grouping, `WHERE` ប្រើមុន',
        '`HAVING` ប្រើសម្រាប់ Rows, `WHERE` ប្រើសម្រាប់ Groups',
        '`HAVING` និង `WHERE` ដូចគ្នា',
      ],
      correct: 1,
      explanation: '`HAVING` ប្រើបន្ទាប់ Grouping, `WHERE` ប្រើមុន។'
    },
    {
      question: 'តើ Aggregate Functions អាចប្រើដោយគ្មាន `GROUP BY` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `HAVING`',
        'មិនបាន ព្រោះជា DDL',
      ],
      correct: 0,
      explanation: 'Aggregate Functions អាចប្រើដោយគ្មាន `GROUP BY` ដើម្បីគណនាលទ្ធផលទាំងមូល។'
    },
    {
      question: 'តើ Function `MIN` អាចប្រើជាមួយ Data Type អ្វីបានខ្លះ?',
      options: [
        'Numbers តែប៉ុណ្ណោះ',
        'Numbers, Strings, Dates',
        'Strings តែប៉ុណ្ណោះ',
        'Dates តែប៉ុណ្ណោះ',
      ],
      correct: 1,
      explanation: '`MIN` អាចប្រើជាមួយ Numbers, Strings, និង Dates។'
    },
    {
      question: 'តើ `SUM` អាចប្រើជាមួយ Strings បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `GROUP BY`',
        'បាន ប៉ុន្តែតែនៅក្នុង `HAVING`',
      ],
      correct: 1,
      explanation: '`SUM` ប្រើបានតែជាមួយ Numbers។'
    },
    {
      question: 'តើ Query ខាងក្រោមនេះត្រឹមត្រូវទេ? `SELECT department, COUNT(*) FROM employees;`',
      options: [
        'មិនត្រឹមត្រូវ ព្រោះត្រូវការ `GROUP BY`',
        'ត្រឹមត្រូវ',
        'មិនត្រឹមត្រូវ ព្រោះត្រូវការ `HAVING`',
        'មិនត្រឹមត្រូវ ព្រោះត្រូវការ `WHERE`',
      ],
      correct: 0,
      explanation: 'Query នេះមិនត្រឹមត្រូវ ព្រោះនៅពេលប្រើ Aggregate Functions ជាមួយ Columns ផ្សេងទៀត ត្រូវការ `GROUP BY`។'
    },
    {
      question: 'តើ `HAVING` អាចប្រើជាមួយ Columns ដែលមិនមាននៅក្នុង `SELECT` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `GROUP BY`',
        'មិនបាន ព្រោះជា DML',
      ],
      correct: 0,
      explanation: '`HAVING` អាចប្រើជាមួយ Columns ដែលមិនមាននៅក្នុង `SELECT`។'
    },
    {
      question: 'តើ Function `AVG` គណនា NULL Values ដែរឬទេ?',
      options: [
        'គណនា',
        'មិនគណនា',
        'គណនា ប៉ុន្តែតែនៅក្នុង `GROUP BY`',
        'គណនា ប៉ុន្តែតែនៅក្នុង `HAVING`',
      ],
      correct: 1,
      explanation: '`AVG` មិនគណនា NULL Values។'
    }
  ],
  lab: {
    task: `
ប្រើ Aggregate Functions ដើម្បីវិភាគទិន្នន័យ។

**តម្រូវការ:**

1. **បង្កើត Table:**
   - បង្កើត Table \`sales\` ដែលមាន Columns: \`sale_id\` (INT, PRIMARY KEY), \`product_id\` (INT), \`amount\` (DECIMAL), \`sale_date\` (DATE)។

2. **បញ្ចូលទិន្នន័យ:**
   - បញ្ចូល ៥ Records ទៅក្នុង \`sales\`។

3. **វិភាគទិន្នន័យ:**
   - រាប់ចំនួន Sales ទាំងអស់។
   - គណនាសរុប និងមធ្យមនៃ \`amount\`។
   - ទាញ \`product_id\` និងចំនួន Sales តាម \`product_id\` ដោយប្រើ \`GROUP BY\`។
   - ទាញ \`product_id\` ដែលមាន \`amount\` សរុបលើសពី 100 ដោយប្រើ \`HAVING\`។

4. **Test:**
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries និងពិនិត្យលទ្ធផល។

**ការណែនាំ:** ប្រើ \`SELECT * FROM sales\` ដើម្បីពិនិត្យទិន្នន័យ។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Table
CREATE TABLE sales (
  sale_id INT PRIMARY KEY,
  product_id INT,
  amount DECIMAL(10,2),
  sale_date DATE
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO sales (sale_id, product_id, amount, sale_date) 
VALUES 
  (1, 101, 50.00, '2023-01-01'),
  (2, 101, 75.00, '2023-01-02'),
  (3, 102, 25.00, '2023-01-03'),
  (4, 102, 100.00, '2023-01-04'),
  (5, 103, 30.00, '2023-01-05');

-- វិភាគទិន្នន័យ
SELECT COUNT(*) AS total_sales FROM sales;
SELECT SUM(amount) AS total_amount, AVG(amount) AS avg_amount FROM sales;
SELECT product_id, COUNT(*) AS sale_count FROM sales GROUP BY product_id;
SELECT product_id, SUM(amount) AS total_amount 
FROM sales 
GROUP BY product_id 
HAVING SUM(amount) > 100;
\`\`\`
`
  }
};

export default MySQLLesson3_1Content;