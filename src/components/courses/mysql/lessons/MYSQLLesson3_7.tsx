import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson3_7Content: LessonContent = {
  title: 'Indexes',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា Index និងសារៈសំខាន់របស់វា',
    'រៀនបង្កើត Index ដោយប្រើ `CREATE INDEX`',
    'ស្វែងយល់អំពីប្រភេទ Index (PRIMARY, UNIQUE, INDEX)',
    'រៀនលុប Index ដោយប្រើ `DROP INDEX`',
    'រៀនប្រើ `EXPLAIN` ដើម្បីវិភាគ Query Performance',
    'ស្វែងយល់អំពីផលប៉ះពាល់នៃ Indexes លើ Performance',
  ],
  content: `
# Indexes 📚

---

**Index** គឺជា Database Object ដែលបង្កើនល្បឿននៃការស្វែងរកទិន្នន័យនៅក្នុង Table ដោយបង្កើត Data Structure ពិសេស។

---

## 1. បង្កើត Index

ប្រើ \`CREATE INDEX\` ដើម្បីបង្កើត Index។

**ឧទាហរណ៍:**
\`\`\`sql
CREATE INDEX idx_employee_name ON employees(name);
\`\`\`

---

## 2. ប្រភេទ Index

- **PRIMARY KEY**: Index ដែលកំណត់ Unique Identifier និងមិនអនុញ្ញាត NULL។
- **UNIQUE**: ធានាថា Values នៅក្នុង Column ជា Unique។
- **INDEX**: Index ធម្មតា ដើម្បីបង្កើនល្បឿន Query។

**ឧទាហរណ៍:**
\`\`\`sql
CREATE UNIQUE INDEX idx_employee_email ON employees(email);
\`\`\`

---

## 3. លុប Index

ប្រើ \`DROP INDEX\` ដើម្បីលុប Index។

**ឧទាហរណ៍:**
\`\`\`sql
DROP INDEX idx_employee_name ON employees;
\`\`\`

---

## 4. វិភាគ Query Performance

ប្រើ \`EXPLAIN\` ដើម្បីមើលថា Query ប្រើ Index ឬអត់។

**ឧទាហរណ៍:**
\`\`\`sql
EXPLAIN SELECT * FROM employees WHERE name = 'សុខ';
\`\`\`

---

## 5. ផលប៉ះពាល់នៃ Indexes

- **អត្ថប្រយោជន៍**: បង្កើតល្បឿន Query (SELECT, WHERE, JOIN)។
- **គុណវិបត្តិ**: បន្ថយល្បឿន INSERT, UPDATE, DELETE និងប្រើទំហំផ្ទុកបន្ថែម។

**គន្លឹះ:** ប្រើ Indexes លើ Columns ដែលញឹកញាប់នៅក្នុង \`WHERE\`, \`JOIN\`, ឬ \`ORDER BY\`។
`,
  examples: [
    `
### ឧទាហរណ៍៖ បង្កើត Index
បង្កើត Index លើ Column \`category\` នៃ Table \`products\`។
\`\`\`sql
CREATE INDEX idx_product_category ON products(category);
\`\`\`
`,
    `
### ឧទាហរណ៍៖ ប្រើ EXPLAIN
វិភាគ Query ដើម្បីពិនិត្យការប្រើ Index។
\`\`\`sql
EXPLAIN SELECT * FROM products WHERE category = 'Electronics';
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Index គឺជាអ្វី?',
      options: [
        'Table ដែលផ្ទុកទិន្នន័យ',
        'Data Structure ដើម្បីបង្កើតល្បឿន Query',
        'Query ដែលភ្ជាប់ Tables',
        'Function សម្រាប់គណនា',
      ],
      correct: 1,
      explanation: 'Index គឺជា Data Structure ដើម្បីបង្កើតល្បឿន Query។'
    },
    {
      question: 'តើ Command `CREATE INDEX` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត View',
        'បង្កើត Index',
        'បង្កើត Function',
        'បង្កើត Table',
      ],
      correct: 1,
      explanation: '`CREATE INDEX` បង្កើត Index។'
    },
    {
      question: 'តើ PRIMARY KEY ជា Index ប្រភេទណា?',
      options: [
        'Unique និងមិនអនុញ្ញាត NULL',
        'Unique តែប៉ុណ្ណោះ',
        'Index ធម្មតា',
        'Index សម្រាប់ JOINs',
      ],
      correct: 0,
      explanation: 'PRIMARY KEY ជា Index ដែល Unique និងមិនអនុញ្ញាត NULL។'
    },
    {
      question: 'តើ UNIQUE Index មានតួនាទីអ្វី?',
      options: [
        'អនុញ្ញាត NULL Values',
        'ធានាថា Values ជា Unique',
        'បង្កើតល្បឿន INSERT',
        'បង្កើត Table',
      ],
      correct: 1,
      explanation: 'UNIQUE Index ធានាថា Values ជា Unique។'
    },
    {
      question: 'តើ Command `DROP INDEX` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Index',
        'លុប Index',
        'កែប្រែ Index',
        'បញ្ចូលទិន្នន័យ',
      ],
      correct: 1,
      explanation: '`DROP INDEX` លុប Index។'
    },
    {
      question: 'តើ `EXPLAIN` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Index',
        'វិភាគ Query Performance',
        'បញ្ចូលទិន្នន័យ',
        'លុប Table',
      ],
      correct: 1,
      explanation: '`EXPLAIN` វិភាគ Query Performance។'
    },
    {
      question: 'តើ Index ប៉ះពាល់ដល់ Performance ដូចម្តេច?',
      options: [
        'បង្កើតល្បឿន SELECT, បន្ថយល្បឿន INSERT/UPDATE',
        'បង្កើតល្បឿន INSERT/UPDATE',
        'បន្ថយល្បឿន SELECT',
        'មិនប៉ះពាល់ Performance',
      ],
      correct: 0,
      explanation: 'Index បង្កើតល្បឿន SELECT ប៉ុន្តែបន្ថយល្បឿន INSERT/UPDATE។'
    },
    {
      question: 'តើ Index ប្រើទំហំផ្ទុកបន្ថែមដែរឬទេ?',
      options: [
        'ប្រើ',
        'មិនប្រើ',
        'ប្រើ ប៉ុន្តែតែនៅក្នុង PRIMARY KEY',
        'ប្រើ ប៉ុន្តែតែនៅក្នុង UNIQUE',
      ],
      correct: 0,
      explanation: 'Index ប្រើទំហំផ្ទុកបន្ថែម។'
    },
    {
      question: 'តើ Index គួរបង្កើតនៅលើ Column ណា?',
      options: [
        'Column ដែលញឹកញាប់នៅក្នុង `WHERE`, `JOIN`, `ORDER BY`',
        'Column ដែលមាន NULL Values',
        'Column ដែលមាន Unique Values តែប៉ុណ្ណោះ',
        'Column ដែលមិនប្រើនៅក្នុង Query',
      ],
      correct: 0,
      explanation: 'Index គួរបង្កើតនៅលើ Column ដែលញឹកញាប់នៅក្នុង `WHERE`, `JOIN`, `ORDER BY`។'
    },
    {
      question: 'តើ PRIMARY KEY បង្កើត Index ដោយស្វ័យប្រវត្តិដែរឬទេ?',
      options: [
        'បង្កើត',
        'មិនបង្កើត',
        'បង្កើត ប៉ុន្តែតែនៅក្នុង `SELECT`',
        'បង្កើត ប៉ុន្តែតែនៅក្នុង `WHERE`',
      ],
      correct: 0,
      explanation: 'PRIMARY KEY បង្កើត Index ដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ UNIQUE Index អនុញ្ញាត NULL Values ដែរឬទេ?',
      options: [
        'អនុញ្ញាត',
        'មិនអនុញ្ញាត',
        'អនុញ្ញាត ប៉ុន្តែតែមួយ NULL',
        'មិនអនុញ្ញាត ប៉ុន្តែតែនៅក្នុង MySQL',
      ],
      correct: 0,
      explanation: 'UNIQUE Index អនុញ្ញាត NULL Values។'
    },
    {
      question: 'តើ Index អាចបង្កើតនៅលើ Columns ច្រើនបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង PRIMARY KEY',
        'បាន ប៉ុន្តែតែនៅក្នុង UNIQUE',
      ],
      correct: 0,
      explanation: 'Index អាចបង្កើតនៅលើ Columns ច្រើនបាន (Composite Index)។'
    },
    {
      question: 'តើ `EXPLAIN` បង្ហាញព័ត៌មានអ្វី?',
      options: [
        'ទិន្នន័យនៅក្នុង Table',
        'របៀបដែល Query ត្រូវបានប្រតិបត្តិ',
        'រចនាសម្ព័ន្ធ Table',
        'ទិន្នន័យនៅក្នុង Index',
      ],
      correct: 1,
      explanation: '`EXPLAIN` បង្ហាញរបៀបដែល Query ត្រូវបានប្រតិបត្តិ។'
    },
    {
      question: 'តើ Index អាចប៉ះពាល់ដល់ INSERT Performance ដែរឬទេ?',
      options: [
        'ប៉ះពាល់',
        'មិនប៉ះពាល់',
        'ប៉ះពាល់ ប៉ុន្តែតែនៅក្នុង PRIMARY KEY',
        'ប៉ះពាល់ ប៉ុន្តែតែនៅក្នុង UNIQUE',
      ],
      correct: 0,
      explanation: 'Index ប៉ះពាល់ដល់ INSERT Performance ដោយសារតែត្រូវ Update Index។'
    },
    {
      question: 'តើ Index គួរបង្កើតនៅលើ Table ដែលមាន Rows តិចដែរឬទេ?',
      options: [
        'គួរ',
        'មិនគួរ',
        'គួរ ប៉ុន្តែតែនៅក្នុង PRIMARY KEY',
        'គួរ ប៉ុន្តែតែនៅក្នុង UNIQUE',
      ],
      correct: 1,
      explanation: 'Index មិនគួរបង្កើតនៅលើ Table ដែលមាន Rows តិច ព្រោះផលប៉ះពាល់តិចតួច។'
    },
    {
      question: 'តើ Index អាចបង្កើតនៅលើ View បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង Updatable Views',
        'បាន ប៉ុន្តែតែនៅក្នុង Materialized Views',
      ],
      correct: 1,
      explanation: 'Index មិនអាចបង្កើតនៅលើ View បាន (លើកលែង Materialized Views ក្នុង Database មួយចំនួន)។'
    },
  ],
  lab: {
    task: `
ប្រើ Indexes ដើម្បីបង្កើត Query Performance។

**តម្រូវការ:**

**1. បង្កើត Table:**
   - បង្កើត Table \`orders\` ដែលមាន Columns: \`order_id\` (INT, PRIMARY KEY), \`customer_id\` (INT), \`total\` (DECIMAL), \`order_date\` (DATE)។
   - បញ្ចូល ៥ Records ទៅក្នុង \`orders\`។

**2. បង្កើត Indexes:**
   - បង្កើត Index \`idx_customer_id\` លើ \`customer_id\`។
   - បង្កើត UNIQUE Index \`idx_order_date\` លើ \`order_date\`។

**3. Test:**
   - Query \`orders\` ដោយប្រើ \`customer_id\` និង \`order_date\`។
   - ប្រើ \`EXPLAIN\` ដើម្បីពិនិត្យការប្រើ Index។
   - លុប \`idx_customer_id\`។
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries។

**ការណែនាំ:** ប្រើ \`SELECT * FROM orders\` ដើម្បីពិនិត្យទិន្នន័យ។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Table
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  total DECIMAL(10,2),
  order_date DATE
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO orders (order_id, customer_id, total, order_date)
VALUES 
  (1, 101, 150.50, '2025-01-01'),
  (2, 102, 200.75, '2025-01-02'),
  (3, 101, 99.99, '2025-01-03'),
  (4, 103, 300.00, '2025-01-04'),
  (5, 102, 50.25, '2025-01-05');

-- បង្កើត Indexes
CREATE INDEX idx_customer_id ON orders(customer_id);
CREATE UNIQUE INDEX idx_order_date ON orders(order_date);

-- Test Queries
SELECT * FROM orders WHERE customer_id = 101;
SELECT * FROM orders WHERE order_date = '2025-01-03';

-- វិភាគ Query Performance
EXPLAIN SELECT * FROM orders WHERE customer_id = 101;
EXPLAIN SELECT * FROM orders WHERE order_date = '2025-01-03';

-- លុប Index
DROP INDEX idx_customer_id ON orders;
\`\`\`
`
  }
};

export default MySQLLesson3_7Content;