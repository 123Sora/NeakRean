import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson4_2Content: LessonContent = {
  title: 'Normalization',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា Normalization',
    'ស្វែងយល់អំពី Normal Forms (1NF, 2NF, 3NF)',
    'រៀនអនុវត្ត 1NF ដើម្បីលុបបំបាត់ Repeating Groups',
    'រៀនអនុវត្ត 2NF ដើម្បីលុបបំបាត់ Partial Dependency',
    'រៀនអនុវត្ត 3NF ដើម្បីលុបបំបាត់ Transitive Dependency',
    'យល់ពីអត្ថប្រយោជន៍ និងគុណវិបត្តិនៃ Normalization',
  ],
  content: `
# Normalization 📚

---

**Normalization** គឺជាដំណើរការនៃការរៀបចំមូលដ្ឋានទិន្នន័យដើម្បីកាត់បន្ថយ **Data Redundancy** និងធានាថា **Data Integrity**។

---

## 1. First Normal Form (1NF)

**1NF** តម្រូវឱ្យ:
- គ្មាន Repeating Groups ឬ Arrays នៅក្នុង Column។
- រាល់ Column មាន Atomic Values (មិនអាចបំបែកបានទៀត)។
- មាន Primary Key ដើម្បីកំណត់ Record យ៉ាងប្លែក។

**ឧទាហរណ៍ (មិនមែន 1NF):**
\`\`\`text
Table: Students
| student_id | name   | courses            |
|------------|--------|--------------------|
| 1          | សុខ    | MySQL, Web Dev     |
| 2          | សួន    | Data Science, Java |
\`\`\`

**ឧទាហរណ៍ (1NF):**
\`\`\`text
Table: Students
| student_id | name   | course           |
|------------|--------|------------------|
| 1          | សុខ    | MySQL            |
| 1          | សុខ    | Web Dev          |
| 2          | សួន    | Data Science     |
| 2          | សួន    | Java             |
\`\`\`

---

## 2. Second Normal Form (2NF)

**2NF** តម្រូវឱ្យ:
- ត្រូវស្ថិតនៅក្នុង 1NF ជាមុន។
- លុបបំបាត់ **Partial Dependency** (Attributes ដែលអាស្រ័យលើផ្នែកខ្លះនៃ Primary Key)។

**ឧទាហរណ៍ (មិនមែន 2NF):**
\`\`\`text
Table: Enrollments
| student_id | course_id | student_name | course_name   |
|------------|-----------|------------- |--------------- |
| 1          | 101       | សុខ          | MySQL          |
| 1          | 102       | សុខ          | Web Dev        |
\`\`\`

**ឧទាហរណ៍ (2NF):**
\`\`\`text
Table: Students
| student_id | name   |
|------------|--------|
| 1          | សុខ    |

Table: Courses
| course_id | course_name |
|-----------|-------------|
| 101       | MySQL       |
| 102       | Web Dev     |

Table: Enrollments
| student_id | course_id |
|------------|-----------|
| 1          | 101       |
| 1          | 102       |
\`\`\`

---

## 3. Third Normal Form (3NF)

**3NF** តម្រូវឱ្យ:
- ត្រូវស្ថិតនៅក្នុង 2NF ជាមុន។
- លុបបំបាត់ **Transitive Dependency** (Attributes ដែលអាស្រ័យលើ Non-Key Attributes)។

**ឧទាហរណ៍ (មិនមែន 3NF):**
\`\`\`text
Table: Employees
| emp_id | name   | dept_id | dept_name   |
|--------|--------|---------|-------------|
| 1      | សុខ    | 10      | IT          |
| 2      | សួន    | 10      | IT          |
\`\`\`

**ឧទាហរណ៍ (3NF):**
\`\`\`text
Table: Departments
| dept_id | dept_name |
|---------|-----------|
| 10      | IT        |

Table: Employees
| emp_id | name   | dept_id |
|--------|--------|---------|
| 1      | សុខ    | 10      |
| 2      | សួន   | 10      |
\`\`\`

---

## 4. អត្ថប្រយោជន៍ និងគុណវិបត្តិ

- **អត្ថប្រយោជន៍**:
  - កាត់បន្ថយ Data Redundancy។
  - បង្កើន Data Integrity។
  - ងាយស្រួលថែទាំទិន្នន័យ។
- **គុណវិបត្តិ**:
  - អាចបន្ថយ Query Performance ដោយសារតែ JOINs។
  - តម្រូវឱ្យមាន Tables ច្រើន។

**គន្លឹះ:** Normalization ជួយធ្វើឱ្យមូលដ្ឋានទិន្នន័យមានភាពស៊ីសង្វាក់គ្នា ប៉ុន្តែត្រូវពិចារណាពី Performance។
`,
  examples: [
    `
### ឧទាហរណ៍៖ អនុវត្ត 1NF
បំប្លែង Table ដែលមាន Repeating Groups ទៅជា 1NF។
\`\`\`sql
មុន 1NF:
Table: Orders
| order_id | products           |
|----------|--------------------|
| 1        | Laptop, Phone      |
| 2        | Headphones         |

ក្រោយ 1NF:
Table: Order_Items
| order_id | product      |
|----------|--------------|
| 1        | Laptop       |
| 1        | Phone        |
| 2        | Headphones   |
\`\`\`
`,
    `
### ឧទាហរណ៍៖ អនុវត្ត 2NF និង 3NF
បំប្លែង Table ទៅជា 2NF និង 3NF។
\`\`\`sql
មុន:
Table: Enrollments
| student_id | course_id | student_name | course_name | dept_name |
|------------|-----------|-------------|-------------|-----------|
| 1          | 101       | សុខ         | MySQL       | IT        |

ក្រោយ 2NF និង 3NF:
Table: Students
| student_id | name   |
|------------|--------|
| 1          | សុខ    |

Table: Courses
| course_id | course_name | dept_id |
|-----------|-------------|---------|
| 101       | MySQL       | 10      |

Table: Departments
| dept_id | dept_name |
|---------|-----------|
| 10      | IT        |

Table: Enrollments
| student_id | course_id |
|------------|-----------|
| 1          | 101       |
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Normalization មានគោលបំណងអ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យច្រើន',
        'កាត់បន្ថយ Data Redundancy និងធានា Data Integrity',
        'បង្កើត Queries ស្មុគស្មាញ',
        'លុប Tables',
      ],
      correct: 1,
      explanation: 'Normalization កាត់បន្ថយ Data Redundancy និងធានា Data Integrity។'
    },
    {
      question: 'តើ 1NF តម្រូវឱ្យធ្វើអ្វី?',
      options: [
        'លុប Partial Dependency',
        'លុប Repeating Groups និងមាន Primary Key',
        'លុប Transitive Dependency',
        'បង្កើត Foreign Key',
      ],
      correct: 1,
      explanation: '1NF តម្រូវឱ្យលុប Repeating Groups និងមាន Primary Key។'
    },
    {
      question: 'តើ 2NF តម្រូវឱ្យធ្វើអ្វី?',
      options: [
        'លុប Repeating Groups',
        'លុប Partial Dependency',
        'លុប Transitive Dependency',
        'បង្កើត Primary Key',
      ],
      correct: 1,
      explanation: '2NF តម្រូវឱ្យលុប Partial Dependency។'
    },
    {
      question: 'តើ 3NF តម្រូវឱ្យធ្វើអ្វី?',
      options: [
        'លុប Repeating Groups',
        'លុប Partial Dependency',
        'លុប Transitive Dependency',
        'បង្កើត Foreign Key',
      ],
      correct: 2,
      explanation: '3NF តម្រូវឱ្យលុប Transitive Dependency។'
    },
    {
      question: 'តើ Repeating Groups គឺជាអ្វី?',
      options: [
        'Columns ដែលមាន Atomic Values',
        'Columns ដែលមាន Multiple Values ក្នុង Cell តែមួយ',
        'Columns ដែលមាន NULL Values',
        'Columns ដែលជា Primary Key',
      ],
      correct: 1,
      explanation: 'Repeating Groups គឺជា Columns ដែលមាន Multiple Values ក្នុង Cell តែមួយ។'
    },
    {
      question: 'តើ Partial Dependency គឺជាអ្វី?',
      options: [
        'Attribute អាស្រ័យលើផ្នែកខ្លះនៃ Primary Key',
        'Attribute អាស្រ័យលើ Non-Key Attribute',
        'Attribute អាស្រ័យលើ Foreign Key',
        'Attribute អាស្រ័យលើ Table ផ្សេង',
      ],
      correct: 0,
      explanation: 'Partial Dependency គឺជា Attribute ដែលអាស្រ័យលើផ្នែកខ្លះនៃ Primary Key។'
    },
    {
      question: 'តើ Transitive Dependency គឺជាអ្វី?',
      options: [
        'Attribute អាស្រ័យលើ Primary Key',
        'Attribute អាស្រ័យលើ Non-Key Attribute',
        'Attribute អាស្រ័យលើ Foreign Key',
        'Attribute អាស្រ័យលើ Table ផ្សេង',
      ],
      correct: 1,
      explanation: 'Transitive Dependency គឺជា Attribute ដែលអាស្រ័យលើ Non-Key Attribute។'
    },
    {
      question: 'តើ 1NF តម្រូវឱ្យ Column មានលក្ខណៈអ្វី?',
      options: [
        'Multiple Values',
        'Atomic Values',
        'NULL Values',
        'Unique Values',
      ],
      correct: 1,
      explanation: '1NF តម្រូវឱ្យ Column មាន Atomic Values។'
    },
    {
      question: 'តើ 2NF តម្រូវឱ្យ Table ស្ថិតនៅក្នុង Normal Form ណា?',
      options: [
        '1NF',
        '3NF',
        'BCNF',
        '4NF',
      ],
      correct: 0,
      explanation: '2NF តម្រូវឱ្យ Table ស្ថិតនៅក្នុង 1NF។'
    },
    {
      question: 'តើ 3NF តម្រូវឱ្យ Table ស្ថិតនៅក្នុង Normal Form ណា?',
      options: [
        '1NF',
        '2NF',
        'BCNF',
        '4NF',
      ],
      correct: 1,
      explanation: '3NF តម្រូវឱ្យ Table ស្ថិតនៅក្នុង 2NF�।'
    },
    {
      question: 'តើអត្ថប្រយោជន៍នៃ Normalization គឺជាអ្វី?',
      options: [
        'បង្កើត Queries ស្មុគស្មាញ',
        'កាត់បន្ថយ Data Redundancy និងបង្កើត Data Integrity',
        'បញ្ចូលទិន្នន័យច្រើន',
        'លុប Tables',
      ],
      correct: 1,
      explanation: 'Normalization កាត់បន្ថយ Data Redundancy និងបង្កើត Data Integrity។'
    },
    {
      question: 'តើគុណវិបត្តិនៃ Normalization គឺជាអ្វី?',
      options: [
        'បន្ថយ Query Performance ដោយសារ JOINs',
        'បញ្ចូលទិន្នន័យច្រើន',
        'បង្កើត Data Redundancy',
        'លុប Data Integrity',
      ],
      correct: 0,
      explanation: 'Normalization អាចបន្ថយ Query Performance ដោយសារ JOINs។'
    },
    {
      question: 'តើ Normalization ជួយថែទាំទិន្នន័យដូចម្តេច?',
      options: [
        'ធ្វើឱ្យងាយស្រួលថែទាំ',
        'ធ្វើឱ្យស្មុគស្មាញក្នុងការថែទាំ',
        'បញ្ចូលទិន្នន័យច្រើន',
        'លុប Tables',
      ],
      correct: 0,
      explanation: 'Normalization ធ្វើឱ្យងាយស្រួលថែទាំទិន្នន័យ។'
    },
    {
      question: 'តើ Atomic Value គឺជាអ្វី?',
      options: [
        'Value ដែលមាន Multiple Values',
        'Value ដែលមិនអាចបំបែកបានទៀត',
        'Value ដែលជា NULL',
        'Value ដែលជា Primary Key',
      ],
      correct: 1,
      explanation: 'Atomic Value គឺជា Value ដែលមិនអាចបំបែកបានទៀត។'
    },
  ],
  lab: {
    task: `
អនុវត្ត Normalization លើមូលដ្ឋានទិន្នន័យសម្រាប់ប្រព័ន្ធគ្រប់គ្រងហាង។

**តម្រូវការ:**

**1. Table ដើម (មិនមែន Normalized):**
   - បង្កើត Table \`orders\` ដែលមាន Columns: \`order_id\` (INT, PRIMARY KEY), \`customer_name\` (VARCHAR), \`customer_email\` (VARCHAR), \`product_name\` (VARCHAR), \`product_price\` (DECIMAL), \`order_date\` (DATE)។
   - បញ្ចូល ៣ Records ដែលមាន Repeating Groups។

**2. អនុវត្ត 1NF:**
   - បំប្លែង \`orders\` ទៅជា 1NF ដោយលុប Repeating Groups។

**3. អនុវត្ត 2NF:**
   - បំបែក Table ទៅជា Tables ដើម្បីលុប Partial Dependency។

**4. អនុវត្ត 3NF:**
   - បំបែក Table បន្ថែមទៀតដើម្បីលុប Transitive Dependency។

**5. Test:**
   - Query ដើម្បីទាញ \`customer_name\`, \`product_name\`, និង \`order_date\`។
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries។

**ការណែនាំ:** ប្រើ \`SELECT * FROM table_name\` ដើម្បីពិនិត្យទិន្នន័យ។
    `,
    solution: `
\`\`\`sql
-- Table ដើម (មិនមែន Normalized)
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_name VARCHAR(50),
  customer_email VARCHAR(100),
  product_name VARCHAR(100),
  product_price DECIMAL(10,2),
  order_date DATE
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO orders (order_id, customer_name, customer_email, product_name, product_price, order_date)
VALUES 
  (1, 'សុខ', 'sok@example.com', 'Laptop, Phone', 1499.98, '2025-01-01'),
  (2, 'សួន', 'suon@example.com', 'Headphones', 29.99, '2025-01-02'),
  (3, 'លី', 'ly@example.com', 'Tablet, Mouse', 349.98, '2025-01-03');

-- 1NF: លុប Repeating Groups
CREATE TABLE order_items (
  order_id INT,
  product_name VARCHAR(50),
  product_price DECIMAL(10,2),
  PRIMARY KEY (order_id, product_name)
);

CREATE TABLE orders_1nf (
  order_id INT PRIMARY KEY,
  customer_name VARCHAR(50),
  customer_email VARCHAR(100),
  order_date DATE
);

-- បញ្ចូលទិន្នន័យទៅ 1NF
INSERT INTO orders_1nf (order_id, customer_name, customer_email, order_date)
SELECT order_id, customer_name, customer_email, order_date
FROM orders;

INSERT INTO order_items (order_id, product_name, product_price)
VALUES 
  (1, 'Laptop', 999.99),
  (1, 'Phone', 499.99),
  (2, 'Headphones', 29.99),
  (3, 'Tablet', 299.99),
  (3, 'Mouse', 49.99);

-- 2NF: លុប Partial Dependency
CREATE TABLE customers (
  customer_id INT PRIMARY KEY AUTO_INCREMENT,
  customer_name VARCHAR(50),
  customer_email VARCHAR(100)
);

CREATE TABLE products (
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(50),
  product_price DECIMAL(10,2)
);

CREATE TABLE orders_2nf (
  order_id INT PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE order_items_2nf (
  order_id INT,
  product_id INT,
  PRIMARY KEY (order_id, product_id),
  FOREIGN KEY (order_id) REFERENCES orders_2nf(order_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- បញ្ចូលទិន្នន័យទៅ 2NF
INSERT INTO customers (customer_name, customer_email)
SELECT DISTINCT customer_name, customer_email
FROM orders_1nf;

INSERT INTO products (product_name, product_price)
SELECT DISTINCT product_name, product_price
FROM order_items;

INSERT INTO orders_2nf (order_id, customer_id, order_date)
SELECT o.order_id, c.customer_id, o.order_date
FROM orders_1nf o
JOIN customers c ON o.customer_name = c.customer_name;

INSERT INTO order_items_2nf (order_id, product_id)
SELECT oi.order_id, p.product_id
FROM order_items oi
JOIN products p ON oi.product_name = p.product_name;

-- 3NF: លុប Transitive Dependency (គ្មាន Transitive Dependency នៅទីនេះ)
-- រចនាសម្ព័ន្ធ 2NF គឺស្ថិតនៅក្នុង 3NF រួចហើយ

-- Test Query
SELECT c.customer_name, p.product_name, o.order_date
FROM orders_2nf o
JOIN customers c ON o.customer_id = c.customer_id
JOIN order_items_2nf oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id;
\`\`\`
`
  }
};

export default MySQLLesson4_2Content;