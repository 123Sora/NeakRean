import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson3_4Content: LessonContent = {
  title: 'Views',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា View និងសារៈសំខាន់របស់វា',
    'រៀនបង្កើត View ដោយប្រើ `CREATE VIEW`',
    'រៀនប្រើ View ដើម្បីសម្រួលការ Query',
    'រៀនកែប្រែ View ដោយប្រើ `CREATE OR REPLACE VIEW`',
    'រៀនលុប View ដោយប្រើ `DROP VIEW`',
    'ស្វែងយល់អំពី Updatable Views និងលក្ខខណ្ឌរបស់វា',
  ],
  content: `
# Views 📚

---

**View** គឺជា Virtual Table ដែលផ្អែកលើ Query មួយ។ វាមិនផ្ទុកទិន្នន័យផ្ទាល់ខ្លួនទេ ប៉ុន្តែទាញទិន្នន័យពី Tables ដើម ដើម្បីបង្ហាញនៅពេល Query។

---

## 1. បង្កើត View

ប្រើ \`CREATE VIEW\` ដើម្បីបង្កើត View ដែលរក្សាទុក Query។

**ឧទាហរណ៍:**
\`\`\`sql
CREATE VIEW employee_summary AS
SELECT name, salary, department 
FROM employees;
\`\`\`

---

## 2. ប្រើ View

View អាចប្រើដូច Table ធម្មតាក្នុង Query។

**ឧទាហរណ៍:**
\`\`\`sql
SELECT * FROM employee_summary WHERE salary > 2000;
\`\`\`

---

## 3. កែប្រែ View

ប្រើ \`CREATE OR REPLACE VIEW\` ដើម្បីកែប្រែ View ដែលមានស្រាប់។

**ឧទាហរណ៍:**
\`\`\`sql
CREATE OR REPLACE VIEW employee_summary AS
SELECT name, salary, department, hire_date 
FROM employees;
\`\`\`

---

## 4. លុប View

ប្រើ \`DROP VIEW\` ដើម្បីលុប View។

**ឧទាហរណ៍:**
\`\`\`sql
DROP VIEW employee_summary;
\`\`\`

---

## 5. Updatable Views

View ដែលអនុញ្ញាតឱ្យកែប្រែ ឬបញ្ចូលទិន្នន័យទៅក្នុង Table ដើម។

**លក្ខខណ្ឌ:**
- មិនមាន Aggregate Functions, JOINs, GROUP BY, ឬ Subqueries។
- មាន Columns ដែលត្រូវការទាំងអស់សម្រាប់ Table ដើម។

**ឧទាហរណ៍:**
\`\`\`sql
CREATE VIEW updatable_employee AS
SELECT emp_id, name, salary 
FROM employees;

UPDATE updatable_employee 
SET salary = 2500 
WHERE emp_id = 1;
\`\`\`

**គន្លឹះ:** Views ជួយសម្រួល Query និងបង្កើនសុវត្ថិភាពដោយកំណត់ទិន្នន័យដែលអាចមើលឃើញ។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បង្កើត View</h3>
<p>បង្កើត View ដើម្បីទាញព័ត៌មានផលិតផល។</p>
<pre><code class="language-sql">
CREATE VIEW product_summary AS
SELECT name, price, category 
FROM products;
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Updatable View</h3>
<p>បង្កើត View ដែលអនុញ្ញាតឱ្យកែប្រែតម្លៃផលិតផល។</p>
<pre><code class="language-sql">
CREATE VIEW product_price AS
SELECT product_id, name, price 
FROM products;

UPDATE product_price 
SET price = 39.99 
WHERE product_id = 1;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ View គឺជាអ្វី?',
      options: [
        'Table ដែលផ្ទុកទិន្នន័យផ្ទាល់ខ្លួន',
        'Virtual Table ផ្អែកលើ Query',
        'Query ដែលភ្ជាប់ Tables',
        'Function សម្រាប់គណនា',
      ],
      correct: 1,
      explanation: 'View គឺជា Virtual Table ផ្អែកលើ Query។'
    },
    {
      question: 'តើ Command `CREATE VIEW` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Table',
        'បង្កើត View',
        'បញ្ចូលទិន្នន័យ',
        'លុប View',
      ],
      correct: 1,
      explanation: '`CREATE VIEW` បង្កើត View។'
    },
    {
      question: 'តើ View ផ្ទុកទិន្នន័យផ្ទាល់ខ្លួនដែរឬទេ?',
      options: [
        'ផ្ទុក',
        'មិនផ្ទុក',
        'ផ្ទុក ប៉ុន្តែតែនៅក្នុង Updatable Views',
        'ផ្ទុក ប៉ុន្តែតែនៅក្នុង `SELECT`',
      ],
      correct: 1,
      explanation: 'View មិនផ្ទុកទិន្នន័យផ្ទាល់ខ្លួន។'
    },
    {
      question: 'តើ Command `CREATE OR REPLACE VIEW` មានតួនាទីអ្វី?',
      options: [
        'លុប View',
        'កែប្រែ View',
        'បញ្ចូលទិន្នន័យ',
        'បង្កើត Table',
      ],
      correct: 1,
      explanation: '`CREATE OR REPLACE VIEW` កែប្រែ View ដែលមានស្រាប់។'
    },
    {
      question: 'តើ Command `DROP VIEW` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត View',
        'លុប View',
        'កែប្រែ View',
        'បញ្ចូលទិន្នន័យ',
      ],
      correct: 1,
      explanation: '`DROP VIEW` លុប View។'
    },
    {
      question: 'តើ Updatable View អនុញ្ញាតឱ្យធ្វើអ្វី?',
      options: [
        'បញ្ចូល និងកែប្រែទិន្នន័យ',
        'ទាញទិន្នន័យតែប៉ុណ្ណោះ',
        'ភ្ជាប់ Tables',
        'គណនាទិន្នន័យ',
      ],
      correct: 0,
      explanation: 'Updatable View អនុញ្ញាតឱ្យបញ្ចូល និងកែប្រែទិន្នន័យ។'
    },
    {
      question: 'តើ View អាចប្រើ Aggregate Functions បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង Updatable Views',
        'បាន ប៉ុន្តែតែនៅក្នុង `WHERE`',
      ],
      correct: 0,
      explanation: 'View អាចប្រើ Aggregate Functions បាន។'
    },
    {
      question: 'តើ Updatable View អាចមាន JOINs បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `SELECT`',
        'បាន ប៉ុន្តែតែនៅក្នុង `WHERE`',
      ],
      correct: 1,
      explanation: 'Updatable View មិនអាចមាន JOINs។'
    },
    {
      question: 'តើ View អាចប្រើ Subqueries បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង Updatable Views',
        'បាន ប៉ុន្តែតែនៅក្នុង `GROUP BY`',
      ],
      correct: 0,
      explanation: 'View អាចប្រើ Subqueries បាន។'
    },
    {
      question: 'តើ View អាចប្រើជាមួយ `WHERE` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង Updatable Views',
        'បាន ប៉ុន្តែតែនៅក្នុង `SELECT`',
      ],
      correct: 0,
      explanation: 'View អាចប្រើជាមួយ `WHERE` ដើម្បី Filter Data។'
    },
    {
      question: 'តើ View អាច Update Table ដើមបានទេ?',
      options: [
        'បាន ប្រសិនបើជា Updatable View',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `SELECT`',
        'បាន ប៉ុន្តែតែនៅក្នុង `WHERE`',
      ],
      correct: 0,
      explanation: 'View អាច Update Table ដើមបាន ប្រសិនបើជា Updatable View។'
    },
    {
      question: 'តើ View អាចបង្កើតពី Tables ច្រើនបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង Updatable Views',
        'បាន ប៉ុន្តែតែនៅក្នុង `GROUP BY`',
      ],
      correct: 0,
      explanation: 'View អាចបង្កើតពី Tables ច្រើនបាន។'
    },
    {
      question: 'តើ View អាចមាន Alias បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង Updatable Views',
        'បាន ប៉ុន្តែតែនៅក្នុង `WHERE`',
      ],
      correct: 0,
      explanation: 'View អាចមាន Alias សម្រាប់ Columns។'
    },
    {
      question: 'តើ Command `CREATE VIEW` អាចប្រើជាមួយ `GROUP BY` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង Updatable Views',
        'បាន ប៉ុន្តែតែនៅក្នុង `WHERE`',
      ],
      correct: 0,
      explanation: '`CREATE VIEW` អាចប្រើជាមួយ `GROUP BY`។'
    },
    {
      question: 'តើ View អាចប្រើសម្រាប់ Security បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង Updatable Views',
        'បាន ប៉ុន្តែតែនៅក្នុង `SELECT`',
      ],
      correct: 0,
      explanation: 'View អាចប្រើសម្រាប់ Security ដោយកំណត់ទិន្នន័យដែលអាចមើលឃើញ។'
    },
    {
      question: 'តើ View អាច Drop Table ដើមបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង Updatable Views',
        'បាន ប៉ុន្តែតែនៅក្នុង `WHERE`',
      ],
      correct: 1,
      explanation: 'View មិនអាច Drop Table ដើមបាន។'
    },
  ],
  lab: {
    task: `
ប្រើ Views ដើម្បីសម្រួលការគ្រប់គ្រងទិន្នន័យ។

**តម្រូវការ:**

1. **បង្កើត Tables:**
   - បង្កើត Table \`products\` ដែលមាន Columns: \`product_id\` (INT, PRIMARY KEY), \`name\` (VARCHAR), \`price\` (DECIMAL), \`category\` (VARCHAR)។
   - បញ្ចូល ៥ Records ទៅក្នុង \`products\`។

2. **បង្កើត Views:**
   - បង្កើត View \`product_summary\` ដែលបង្ហាញ \`name\`, \`price\`, \`category\`។
   - បង្កើត Updatable View \`product_price\` ដែលបង្ហាញ \`product_id\`, \`name\`, \`price\`។

3. **ទាញទិន្នន័យ:**
   - Query \`product_summary\` ដើម្បីទាញផលិតផលដែល \`price\` លើសពី 50។
   - Update \`price\` នៅក្នុង \`product_price\` សម្រាប់ \`product_id = 1\`។

4. **កែប្រែ View:**
   - កែប្រែ \`product_summary\` ដើម្បីបន្ថែម Column \`product_id\`។
   - លុប \`product_summary\`។

5. **Test:**
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries និងពិនិត្យលទ្ធផល។

**ការណែនាំ:** ប្រើ \`SELECT * FROM products\` ដើម្បីពិនិត្យទិន្នន័យ។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Table
CREATE TABLE products (
  product_id INT PRIMARY KEY,
  name VARCHAR(50),
  price DECIMAL(10,2),
  category VARCHAR(50)
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO products (product_id, name, price, category) 
VALUES 
  (1, 'Laptop', 999.99, 'Electronics'),
  (2, 'Phone', 499.99, 'Electronics'),
  (3, 'Desk', 150.00, 'Furniture'),
  (4, 'Chair', 75.00, 'Furniture'),
  (5, 'Headphones', 29.99, 'Electronics');

-- បង្កើត Views
CREATE VIEW product_summary AS
SELECT name, price, category 
FROM products;

CREATE VIEW product_price AS
SELECT product_id, name, price 
FROM products;

-- ទាញទិន្នន័យ
SELECT * FROM product_summary WHERE price > 50;

-- Update View
UPDATE product_price 
SET price = 1099.99 
WHERE product_id = 1;

-- កែប្រែ View
CREATE OR REPLACE VIEW product_summary AS
SELECT product_id, name, price, category 
FROM products;

-- លុប View
DROP VIEW product_summary;
\`\`\`
`
  }
};

export default MySQLLesson3_4Content;