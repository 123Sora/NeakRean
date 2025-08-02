import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson3_2Content: LessonContent = {
  title: 'SQL JOINs',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា SQL JOINs',
    'រៀនប្រើ `INNER JOIN` ដើម្បីទាញទិន្នន័យដែលត្រូវគ្នា',
    'រៀនប្រើ `LEFT JOIN` និង `RIGHT JOIN`',
    'រៀនប្រើ `FULL OUTER JOIN`',
    'ស្វែងយល់អំពី `CROSS JOIN`',
    'រៀនប្រើ JOINs ជាមួយ Conditions និង Aliases',
  ],
  content: `
# SQL JOINs 📚

---

**SQL JOINs** គឺជា Command ដែលប្រើសម្រាប់ភ្ជាប់ទិន្នន័យពី Tables ច្រើនជាមួយគ្នា ដោយផ្អែកលើ Column ដែលទាក់ទងគ្នា។

---

## 1. INNER JOIN

ទាញ Records ដែលមានតម្លៃត្រូវគ្នានៅក្នុង Tables ទាំងពីរ។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT employees.name, departments.name AS dept_name 
FROM employees 
INNER JOIN departments ON employees.dept_id = departments.dept_id;
\`\`\`

---

## 2. LEFT JOIN (LEFT OUTER JOIN)

ទាញ Records ទាំងអស់ពី Table ខាងឆ្វេង និង Records ដែលត្រូវគ្នាពី Table ខាងស្តាំ។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT employees.name, departments.name AS dept_name 
FROM employees 
LEFT JOIN departments ON employees.dept_id = departments.dept_id;
\`\`\`

---

## 3. RIGHT JOIN (RIGHT OUTER JOIN)

ទាញ Records ទាំងអស់ពី Table ខាងស្តាំ និង Records ដែលត្រូវគ្នាពី Table ខាងឆ្វេង។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT employees.name, departments.name AS dept_name 
FROM employees 
RIGHT JOIN departments ON employees.dept_id = departments.dept_id;
\`\`\`

---

## 4. FULL OUTER JOIN

ទាញ Records ទាំងអស់ពី Tables ទាំងពីរ ដោយបំពេញ NULL នៅកន្លែងដែលមិនត្រូវគ្នា។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT employees.name, departments.name AS dept_name 
FROM employees 
FULL OUTER JOIN departments ON employees.dept_id = departments.dept_id;
\`\`\`

**គន្លឹះ:** MySQL មិនគាំទ្រ \`FULL OUTER JOIN\` ដោយផ្ទាល់ ប៉ុន្តែអាចប្រើ \`UNION\` នៃ \`LEFT JOIN\` និង \`RIGHT JOIN\`។

---

## 5. CROSS JOIN

ភ្ជាប់ Records ទាំងអស់ពី Table មួយទៅ Table មួយទៀត (Cartesian Product)។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT employees.name, departments.name 
FROM employees 
CROSS JOIN departments;
\`\`\`

---

## 6. JOINs ជាមួយ Conditions និង Aliases

ប្រើ Conditions និង Aliases ដើម្បីធ្វើឱ្យ Query កាន់តែច្បាស់។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT e.name, d.name AS dept_name 
FROM employees e 
INNER JOIN departments d ON e.dept_id = d.dept_id 
WHERE e.salary > 2000;
\`\`\`
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ INNER JOIN</h3>
<p>ភ្ជាប់ Table <code>orders</code> និង <code>customers</code>។</p>
<pre><code class="language-sql">
SELECT c.name, o.total 
FROM customers c 
INNER JOIN orders o ON c.customer_id = o.customer_id;
</code></pre>
`,
    `
<h3>ឧទាហរណ៍�： LEFT JOIN</h3>
<p>ទាញអតិថិជនទាំងអស់ និង Orders ដែលត្រូវគ្នា។</p>
<pre><code class="language-sql">
SELECT c.name, o.total 
FROM customers c 
LEFT JOIN orders o ON c.customer_id = o.customer_id;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ SQL JOINs ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'ភ្ជាប់ Tables',
        'លុប Records',
        'កែប្រែរចនាសម្ព័ន្ធ',
      ],
      correct: 1,
      explanation: 'SQL JOINs ប្រើសម្រាប់ភ្ជាប់ Tables។'
    },
    {
      question: 'តើ `INNER JOIN` ទាញ Records អ្វី?',
      options: [
        'Records ទាំងអស់ពី Table ខាងឆ្វេង',
        'Records ដែលត្រូវគ្នានៅ Tables ទាំងពីរ',
        'Records ទាំងអស់ពី Table ខាងស្តាំ',
        'Records ទាំងអស់ពី Tables ទាំងពីរ',
      ],
      correct: 1,
      explanation: '`INNER JOIN` ទាញ Records ដែលត្រូវគ្នានៅ Tables ទាំងពីរ។'
    },
    {
      question: 'តើ `LEFT JOIN` មានន័យដូចម្តេច?',
      options: [
        'ទាញ Records ទាំងអស់ពី Table ខាងស្តាំ',
        'ទាញ Records ទាំងអស់ពី Table ខាងឆ្វេង',
        'ទាញ Records ដែលត្រូវគ្នានៅ Tables ទាំងពីរ',
        'ទាញ Records ទាំងអស់ពី Tables ទាំងពីរ',
      ],
      correct: 1,
      explanation: '`LEFT JOIN` ទាញ Records ទាំងអស់ពី Table ខាងឆ្វេង។'
    },
    {
      question: 'តើ `RIGHT JOIN` ទាញ Records អ្វី?',
      options: [
        'Records ទាំងអស់ពី Table ខាងឆ្វេង',
        'Records ទាំងអស់ពី Table ខាងស្តាំ',
        'Records ដែលត្រូវគ្នានៅ Tables ទាំងពីរ',
        'Records ទាំងអស់ពី Tables ទាំងពីរ',
      ],
      correct: 1,
      explanation: '`RIGHT JOIN` ទាញ Records ទាំងអស់ពី Table ខាងស្តាំ។'
    },
    {
      question: 'តើ `FULL OUTER JOIN` មានន័យដូចម្តេច?',
      options: [
        'ទាញ Records ដែលត្រូវគ្នានៅ Tables ទាំងពីរ',
        'ទាញ Records ទាំងអស់ពី Tables ទាំងពីរ',
        'ទាញ Records ទាំងអស់ពី Table ខាងឆ្វេង',
        'ទាញ Records ទាំងអស់ពី Table ខាងស្តាំ',
      ],
      correct: 1,
      explanation: '`FULL OUTER JOIN` ទាញ Records ទាំងអស់ពី Tables ទាំងពីរ។'
    },
    {
      question: 'តើ `CROSS JOIN` បង្កើតអ្វី?',
      options: [
        'Records ដែលត្រូវគ្នា',
        'Cartesian Product',
        'Records ទាំងអស់ពី Table ខាងឆ្វេង',
        'Records ទាំងអស់ពី Table ខាងស្តាំ',
      ],
      correct: 1,
      explanation: '`CROSS JOIN` បង្កើត Cartesian Product នៃ Tables។'
    },
    {
      question: 'តើ MySQL គាំទ្រ `FULL OUTER JOIN` ដោយផ្ទាល់ទេ?',
      options: [
        'គាំទ្រ',
        'មិនគាំទ្រ',
        'គាំទ្រ ប៉ុន្តែតែនៅក្នុង Version ថ្មី',
        'គាំទ្រ ប៉ុន្តែតែនៅក្នុង `UNION`',
      ],
      correct: 1,
      explanation: 'MySQL មិនគាំទ្រ `FULL OUTER JOIN` ដោយផ្ទាល់។'
    },
    {
      question: 'តើ Keyword `ON` ប្រើសម្រាប់អ្វីនៅក្នុង JOINs?',
      options: [
        'កំណត់លក្ខខណ្ឌភ្ជាប់',
        'កំណត់លំដាប់',
        'កំណត់ចំនួន Records',
        'កំណត់ Alias',
      ],
      correct: 0,
      explanation: '`ON` កំណត់លក្ខខណ្ឌភ្ជាប់នៅក្នុង JOINs។'
    },
    {
      question: 'តើ Alias នៅក្នុង JOINs មានតួនាទីអ្វី?',
      options: [
        'ធ្វើឱ្យ Query កាន់តែខ្លី និងច្បាស់',
        'បញ្ចូលទិន្នន័យ',
        'លុប Records',
        'កែប្រែរចនាសម្ព័ន្ធ',
      ],
      correct: 0,
      explanation: 'Alias ធ្វើឱ្យ Query កាន់តែខ្លី និងច្បាស់។'
    },
    {
      question: 'តើ `INNER JOIN` នឹង Return NULL នៅក្នុងករណីណា?',
      options: [
        'នៅពេល Records មិនត្រូវគ្នា',
        'នៅពេល Records ត្រូវគ្នា',
        'នៅពេល Table ទទេ',
        'នៅពេលប្រើ `WHERE`',
      ],
      correct: 0,
      explanation: '`INNER JOIN` មិន Return Records ដែលមិនត្រូវគ្នា។'
    },
    {
      question: 'តើ `LEFT JOIN` Return NULL នៅឯណា?',
      options: [
        'នៅ Table ខាងឆ្វេង',
        'នៅ Table ខាងស្តាំ នៅពេលមិនត្រូវគ្នា',
        'នៅ Tables ទាំងពីរ',
        'មិន Return NULL',
      ],
      correct: 1,
      explanation: '`LEFT JOIN` Return NULL នៅ Table ខាងស្តាំ នៅពេលមិនត្រូវគ្នា។'
    },
    {
      question: 'តើ Query ខាងក្រោមនេះជា JOIN ប្រភេទណា? `FROM employees e, departments d WHERE e.dept_id = d.dept_id;`',
      options: [
        'INNER JOIN',
        'LEFT JOIN',
        'RIGHT JOIN',
        'CROSS JOIN',
      ],
      correct: 0,
      explanation: 'Query នេះស្មើនឹង `INNER JOIN`។'
    },
    {
      question: 'តើ `CROSS JOIN` ត្រូវការ `ON` ដែរឬទេ?',
      options: [
        'តម្រូវ',
        'មិនតម្រូវ',
        'តម្រូវ ប៉ុន្តែតែនៅក្នុង `WHERE`',
        'តម្រូវ ប៉ុន្តែតែនៅក្នុង `GROUP BY`',
      ],
      correct: 1,
      explanation: '`CROSS JOIN` មិនតម្រូវឱ្យប្រើ `ON`។'
    },
    {
      question: 'តើ JOIN អាចប្រើជាមួយ Tables ច្រើនជាងពីរបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `INNER JOIN`',
        'បាន ប៉ុន្តែតែនៅក្នុង `CROSS JOIN`',
      ],
      correct: 0,
      explanation: 'JOIN អាចប្រើជាមួយ Tables ច្រើនជាងពីរ។'
    },
    {
      question: 'តើ `RIGHT JOIN` និង `LEFT JOIN` អាចផ្លាស់ប្តូរគ្នាបានទេ?',
      options: [
        'បាន ដោយផ្លាស់ប្តូរលំដាប់ Tables',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `WHERE`',
        'បាន ប៉ុន្តែតែនៅក្នុង `ON`',
      ],
      correct: 0,
      explanation: '`RIGHT JOIN` និង `LEFT JOIN` អាចផ្លាស់ប្តូរគ្នាបានដោយផ្លាស់ប្តូរលំដាប់ Tables។'
    },
    {
      question: 'តើ JOINs តម្រូវឱ្យមាន Foreign Key ដែរឬទេ?',
      options: [
        'តម្រូវ',
        'មិនតម្រូវ',
        'តម្រូវ ប៉ុន្តែតែនៅក្នុង `INNER JOIN`',
        'តម្រូវ ប៉ុន្តែតែនៅក្នុង `CROSS JOIN`',
      ],
      correct: 1,
      explanation: 'JOINs មិនតម្រូវឱ្យមាន Foreign Key។'
    }
  ],
  lab: {
    task: `
ប្រើ SQL JOINs ដើម្បីភ្ជាប់ទិន្នន័យពី Tables ច្រើន។

**តម្រូវការ:**

1. **បង្កើត Tables:**
   - បង្កើត Table \`customers\` ដែលមាន Columns: \`customer_id\` (INT, PRIMARY KEY), \`name\` (VARCHAR)។
   - បង្កើត Table \`orders\` ដែលមាន Columns: \`order_id\` (INT, PRIMARY KEY), \`customer_id\` (INT), \`total\` (DECIMAL)។

2. **បញ្ចូលទិន្នន័យ:**
   - បញ្ចូល ៣ Records ទៅក្នុង \`customers\`។
   - បញ្ចូល ៤ Records ទៅក្នុង \`orders\`។

3. **ទាញទិន្នន័យ:**
   - ប្រើ \`INNER JOIN\` ដើម្បីទាញ \`name\` និង \`total\`។
   - ប្រើ \`LEFT JOIN\` ដើម្បីទាញ \`name\` និង \`total\` សម្រាប់អតិថិជនទាំងអស់។
   - ប្រើ \`RIGHT JOIN\` ដើម្បីទាញ \`name\` និង \`total\`។

4. **Test:**
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries និងពិនិត្យលទ្ធផល។

**ការណែនាំ:** ប្រើ \`SELECT * FROM customers\` និង \`SELECT * FROM orders\` ដើម្បីពិនិត្យទិន្នន័យ។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Tables
CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  total DECIMAL(10,2)
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO customers (customer_id, name) 
VALUES 
  (1, 'សុខ'),
  (2, 'សួន'),
  (3, 'លី');

INSERT INTO orders (order_id, customer_id, total) 
VALUES 
  (1, 1, 50.00),
  (2, 1, 75.00),
  (3, 2, 100.00),
  (4, 4, 25.00);

-- ទាញទិន្នន័យ
SELECT c.name, o.total 
FROM customers c 
INNER JOIN orders o ON c.customer_id = o.customer_id;

SELECT c.name, o.total 
FROM customers c 
LEFT JOIN orders o ON c.customer_id = o.customer_id;

SELECT c.name, o.total 
FROM customers c 
RIGHT JOIN orders o ON c.customer_id = o.customer_id;
\`\`\`
`
  }
};

export default MySQLLesson3_2Content;