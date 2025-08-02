import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson5_3Content: LessonContent = {
  title: 'ការកែសម្រួលប្រសិទ្ធភាព',
  objectives: [
    'យល់ដឹងអំពីការកែសម្រួលប្រសិទ្ធភាពនៃ MySQL',
    'រៀនប្រើ `EXPLAIN` ដើម្បីវិភាគ Query Performance',
    'ស្វែងយល់អំពីការប្រើ Indexes ដើម្បីបង្កើនល្បឿន Query',
    'រៀនកែសម្រួល Query ដើម្បីបង្កើនប្រសិទ្ធភាព',
    'ស្វែងយល់អំពី Configuration Parameters ដូចជា `innodb_buffer_pool_size`',
    'យល់ពីការបែងចែក Table (Partitioning)',
  ],
  content: `
# ការកែសម្រួលប្រសិទ្ធភាព 📚

---

**ការកែសម្រួលប្រសិទ្ធភាព** គឺជាដំណើរការនៃការធ្វើឱ្យ Database ដំណើរការលឿន និងមានប្រសិទ្ធភាព។

---

## 1. ប្រើ EXPLAIN ដើម្បីវិភាគ Query

**\`EXPLAIN\`** បង្ហាញព័ត៌មានអំពីរបៀបដែល MySQL ប្រតិបត្តិ Query។

**ឧទាហរណ៍:**
\`\`\`sql
EXPLAIN SELECT * FROM employees WHERE dept_id = 10;
\`\`\`

---

## 2. ប្រើ Indexes

Indexes បង្កើនល្បឿន Query ប៉ុន្តែបន្ថយល្បឿន INSERT/UPDATE។

**ឧទាហរណ៍:**
\`\`\`sql
CREATE INDEX idx_dept_id ON employees(dept_id);
\`\`\`

---

## 3. កែសម្រួល Query

- ជៀសវាង \`SELECT *\` ហើយជ្រើសរើស Columns ជាក់លាក់។
- ប្រើ JOIN ជំនួស Subqueries នៅពេលអាចធ្វើបាន។

**ឧទាហរណ៍:**
\`\`\`sql
-- មិនល្អ
SELECT * FROM employees WHERE dept_id IN (SELECT dept_id FROM departments WHERE location = 'Phnom Penh');

-- ល្អជាង
SELECT e.* FROM employees e JOIN departments d ON e.dept_id = d.dept_id WHERE d.location = 'Phnom Penh';
\`\`\`

---

## 4. Configuration Parameters

- **\`innodb_buffer_pool_size\`**: កំណត់ទំហំ Memory សម្រាប់ Cache Data។
- **\`query_cache_size\`**: កំណត់ទំហំ Cache សម្រាប់ Query Results (MySQL 5.7 និងមុន)។

**ឧទាហរណ៍ (my.cnf):**
\`\`\`ini
[mysqld]
innodb_buffer_pool_size = 2G
\`\`\`

---

## 5. Table Partitioning

**Partitioning** បែងចែក Table ធំទៅជាផ្នែកតូចៗដើម្បីបង្កើនប្រីទ្ធភាព។

**ឧទាហរណ៍:**
\`\`\`sql
CREATE TABLE orders (
  order_id INT,
  order_date DATE,
  total DECIMAL(10,2)
) PARTITION BY RANGE (YEAR(order_date)) (
  PARTITION p0 VALUES LESS THAN (2023),
  PARTITION p1 VALUES LESS THAN (2024),
  PARTITION p2 VALUES LESS THAN (2025)
);
\`\`\`

**គន្លឹះ:** កែសម្រួលប្រសិទ្ធភាពដោយផ្តោតលើ Query និង Hardware។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ ប្រើ EXPLAIN</h3>
<p>វិភាគ Query ដើម្បីពិនិត្យការប្រើ Index។</p>
<pre><code class="language-sql">
EXPLAIN SELECT * FROM products WHERE category = 'Electronics';
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ បង្កើត Index</h3>
<p>បង្កើត Index លើ Column \`category\`។</p>
<pre><code class="language-sql">
CREATE INDEX idx_category ON products(category);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើការកែសម្រួលប្រសិទ្ធភាពមានគោលបំណងអ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យច្រើន',
        'ធ្វើឱ្យ Database ដំណើរការលឿន',
        'លុប Database',
        'បង្កើត Database',
      ],
      correct: 1,
      explanation: 'ការកែសម្រួលប្រសិទ្ធភាពធ្វើឱ្យ Database ដំណើរការលឿន។'
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
        'បង្កើនល្បឿន SELECT, បន្ថយល្បឿន INSERT/UPDATE',
        'បង្កើនល្បឿន INSERT/UPDATE',
        'បន្ថយល្បឿន SELECT',
        'មិនប៉ះពាល់ Performance',
      ],
      correct: 0,
      explanation: 'Index បង្កើនល្បឿន SELECT ប៉ុន្តែបន្ថយល្បឿន INSERT/UPDATE�।'
    },
    {
      question: 'តើគួរជៀសវាងអ្វីនៅក្នុង Query?',
      options: [
        'SELECT *',
        'JOIN',
        'WHERE',
        'ORDER BY',
      ],
      correct: 0,
      explanation: 'គួរជៀសវាង `SELECT *` ហើយជ្រើសរើស Columns ជាក់លាក់។'
    },
    {
      question: 'តើ `innodb_buffer_pool_size` គឺជាអ្វី?',
      options: [
        'ទំហំ Memory សម្រាប់ Cache Data',
        'ទំហំ Disk សម្រាប់ Backup',
        'ទំហំ Cache សម្រាប់ Indexes',
        'ទំហំ Memory សម្រាប់ Queries',
      ],
      correct: 0,
      explanation: '`innodb_buffer_pool_size` គឺជាទំហំ Memory សម្រាប់ Cache Data។'
    },
    {
      question: 'តើ Table Partitioning មានគោលបំណងអ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យច្រើន',
        'បែងចែក Table ធំទៅជាផ្នែកតូចៗ',
        'លុប Table',
        'បង្កើត Database',
      ],
      correct: 1,
      explanation: 'Table Partitioning បែងចែក Table ធំទៅជាផ្នែកតូចៗ។'
    },
    {
      question: 'តើ Subquery អាចប៉ះពាល់ដល់ Performance ដែរឬទេ?',
      options: [
        'ប៉ះពាល់',
        'មិនប៉ះពាល់',
        'ប៉ះពាល់តែនៅក្នុង SELECT',
        'ប៉ះពាល់តែនៅក្នុង INSERT',
      ],
      correct: 0,
      explanation: 'Subquery អាចប៉ះពាល់ដល់ Performance ដោយសារតែភាពស្មុគស្មាញ។'
    },
    {
      question: 'តើ JOIN មានប្រសិទ្ធភាពជាង Subquery ដែរឬទេ?',
      options: [
        'ជួនកាល',
        'មិនដែល',
        'តែងតែ',
        'អាស្រ័យលើ Database',
      ],
      correct: 0,
      explanation: 'JOIN មានប្រសិទ្ធភាពជាង Subquery ជួនកាល។'
    },
    {
      question: 'តើ `query_cache_size` ប្រើសម្រាប់អ្វី?',
      options: [
        'Cache Data',
        'Cache Query Results',
        'Cache Indexes',
        'Cache Tables',
      ],
      correct: 1,
      explanation: '`query_cache_size` ប្រើសម្រាប់ Cache Query Results។'
    },
    {
      question: 'តើ Partitioning អាចប្រើលើ Column ប្រភេទណា?',
      options: [
        'VARCHAR',
        'DATE',
        'TEXT',
        'BLOB',
      ],
      correct: 1,
      explanation: 'Partitioning អាចប្រើលើ Column ប្រភេទ DATE។'
    },
    {
      question: 'តើ Indexes គួរបង្កើតនៅលើ Column ណា?',
      options: [
        'Column ដែលញឹកញាប់នៅក្នុង `WHERE`, `JOIN`, `ORDER BY`',
        'Column ដែលមាន NULL Values',
        'Column ដែលមាន Unique Values តែប៉ុណ្ណោះ',
        'Column ដែលមិនប្រើនៅក្នុង Query',
      ],
      correct: 0,
      explanation: 'Indexes គួរបង្កើតនៅលើ Column ដែលញឹកញាប់នៅក្នុង `WHERE`, `JOIN`, `ORDER BY`។'
    },
    {
      question: 'តើការប្រើ `SELECT *` មានគុណវិបត្តិអ្វី?',
      options: [
        'ប្រើ Memory ច្រើន',
        'បន្ថយល្បឿន Query',
        'បង្កើនល្បឿន Query',
        'មិនប៉ះពាល់',
      ],
      correct: 1,
      explanation: 'ការប្រើ `SELECT *` បន្ថយល្បឿន Query។'
    },
    {
      question: 'តើ Configuration Parameters អាចជួយប្រសិទ្ធភាពដែរឬទេ?',
      options: [
        'អាច',
        'មិនអាច',
        'អាច ប៉ុន្តែតែនៅក្នុង Database ធំៗ',
        'អាច ប៉ុន្តែតែនៅក្នុង Database តូចៗ',
      ],
      correct: 0,
      explanation: 'Configuration Parameters អាចជួយប្រសិទ្ធភាព។'
    },
    {
      question: 'តើ Partitioning ជួយប្រសិទ្ធភាពដូចម្តេច?',
      options: [
        'កាត់បន្ថយទំហំ Database',
        'បែងចែក Data ដើម្បីស្វែងរកលឿនជាង',
        'បញ្ចូលទិន្នន័យច្រើន',
        'លុប Indexes',
      ],
      correct: 1,
      explanation: 'Partitioning បែងចែក Data ដើម្បីស្វែងរកលឿនជាង។'
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
  ],
  lab: {
    task: `
កែសម្រួលប្រសិទ្ធភាពនៃ Database។

**តម្រូវការ:**

1. **បង្កើត Table:**
   - បង្កើត Table \`orders\` ដែលមាន Columns: \`order_id\` (INT, PRIMARY KEY), \`customer_id\` (INT), \`order_date\` (DATE), \`total\` (DECIMAL)។
   - បញ្ចូល ៥ Records។

2. **បង្កើត Index:**
   - បង្កើត Index លើ \`customer_id\`។

3. **Test:**
   - Query \`orders\` ដោយប្រើ \`customer_id\`។
   - ប្រើ \`EXPLAIN\` ដើម្បីពិនិត្យការប្រើ Index។
   - កែ Query ដើម្បីជៀសវាង \`SELECT *\`។
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries។

**ការណែនាំ:** ប្រើ \`SELECT * FROM orders\` ដើម្បីពិនិត្យទិន្នន័យ។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Table
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  total DECIMAL(10,2)
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO orders (order_id, customer_id, order_date, total)
VALUES 
  (1, 101, '2025-01-01', 150.50),
  (2, 102, '2025-01-02', 200.75),
  (3, 101, '2025-01-03', 99.99),
  (4, 103, '2025-01-04', 300.00),
  (5, 102, '2025-01-05', 50.25);

-- បង្កើត Index
CREATE INDEX idx_customer_id ON orders(customer_id);

-- Test Query
SELECT order_id, order_date, total FROM orders WHERE customer_id = 101;

-- វិភាគ Query
EXPLAIN SELECT order_id, order_date, total FROM orders WHERE customer_id = 101;
\`\`\`
`
  }
};

export default MySQLLesson5_3Content;