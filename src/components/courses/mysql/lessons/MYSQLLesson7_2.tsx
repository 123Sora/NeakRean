import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson7_2Content: LessonContent = {
  title: 'Database សម្រាប់ E-commerce Website',
  objectives: [
    'រចនា Database Schema សម្រាប់ E-commerce Website',
    'បង្កើត Tables សម្រាប់ Products, Orders, និង Customers',
    'ប្រើ Relationships ដើម្បីភ្ជាប់ Tables',
    'រៀនបញ្ចូល និង Query ទិន្នន័យសម្រាប់ប្រព័ន្ធ',
    'អនុវត្ត Joins និង Aggregations ដើម្បីវិភាគទិន្នន័យ',
    'គ្រប់គ្រង Data Integrity ដោយប្រើ Constraints',
  ],
  content: `
# Database សម្រាប់ E-commerce Website 📚

---

**E-commerce Website** គឺជាប្រព័ន្ធសម្រាប់គ្រប់គ្រងផលិតផល ការបញ្ជាទិញ និងអតិថិជន។

---

## 1. រចនា Database Schema

- **Tables**:
  - \`customers\`: ផ្ទុកព័ត៌មានអតិថិជន (customer_id, name, email)
  - \`products\`: ផ្ទុកព័ត៌មានផលិតផល (product_id, name, price)
  - \`orders\`: ផ្ទុកការបញ្ជាទិញ (order_id, customer_id, order_date)
  - \`order_items\`: ផ្ទុកផលិតផលក្នុងការបញ្ជាទិញ (order_item_id, order_id, product_id, quantity)

**Relationships**:
- \`customers.customer_id\`, \`products.product_id\`, \`orders.order_id\`, និង \`order_items.order_item_id\` ជា Primary Keys។
- \`orders.customer_id\`, \`order_items.order_id\`, និង \`order_items.product_id\` ជា Foreign Keys។

---

## 2. បង្កើត Tables

**ឧទាហរណ៍:**
\`\`\`sql
CREATE TABLE customers (
  customer_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE
);

CREATE TABLE products (
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  customer_id INT,
  order_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE order_items (
  order_item_id INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,
  product_id INT,
  quantity INT NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);
\`\`\`

---

## 3. បញ្ចូលទិន្នន័យ

**ឧទាហរណ៍:**
\`\`\`sql
INSERT INTO customers (name, email) VALUES
  ('Sok Piseth', 'sok@example.com'),
  ('Srey Nuch', 'nuch@example.com');

INSERT INTO products (name, price) VALUES
  ('Laptop', 1200.00),
  ('Phone', 500.00);

INSERT INTO orders (customer_id, order_date) VALUES
  (1, '2025-08-01'),
  (2, '2025-08-02');

INSERT INTO order_items (order_id, product_id, quantity) VALUES
  (1, 1, 2),
  (2, 2, 1);
\`\`\`

---

## 4. Query ទិន្នន័យ

**SELECT ជាមួយ JOIN:**
\`\`\`sql
SELECT c.name, p.name AS product_name, oi.quantity
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id;
\`\`\`

**Aggregation:**
\`\`\`sql
SELECT c.name, SUM(p.price * oi.quantity) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
GROUP BY c.customer_id;
\`\`\`

---

## 5. គ្រប់គ្រង Data Integrity

ប្រើ **Constraints** ដូចជា \`NOT NULL\`, \`UNIQUE\`, និង \`FOREIGN KEY\` ដើម្បីធានា Data Integrity។

**គន្លឹះ:** ប្រើ Indexes លើ Columns ដែល Query ញឹកញាប់ ដូចជា \`customer_id\` និង \`product_id\`។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បង្កើត និងបញ្ចូលទិន្នន័យ</h3>
<p>បង្កើត Table និងបញ្ចូលទិន្នន័យសម្រាប់ផលិតផល។</p>
<pre><code class="language-sql">
CREATE TABLE products (
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);
INSERT INTO products (name, price) VALUES
  ('Tablet', 300.00);
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Query ជាមួយ JOIN និង Aggregation</h3>
<p>ទាញឈ្មោះអតិថិជន និងចំនួនទឹកប្រាក់សរុប។</p>
<pre><code class="language-sql">
SELECT c.name, SUM(p.price * oi.quantity) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
GROUP BY c.customer_id;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Table ណាដែលផ្ទុកការបញ្ជាទិញ?',
      options: ['customers', 'products', 'orders', 'order_items'],
      correct: 2,
      explanation: '`orders` ផ្ទុកការបញ្ជាទិញ។'
    },
    {
      question: 'តើ Table `order_items` ភ្ជាប់ Tables ណាខ្លះ?',
      options: ['customers និង products', 'orders និង products', 'customers និង orders', 'គ្មាន Table'],
      correct: 1,
      explanation: '`order_items` ភ្ជាប់ `orders` និង `products`។'
    },
    {
      question: 'តើ Primary Key នៅក្នុង Table `products` គឺជាអ្វី?',
      options: ['name', 'price', 'product_id', 'order_id'],
      correct: 2,
      explanation: '`product_id` ជា Primary Key នៅក្នុង `products`។'
    },
    {
      question: 'តើ Foreign Key នៅក្នុង Table `orders` ភ្ជាប់ទៅ Table ណា?',
      options: ['products', 'customers', 'order_items', 'គ្មាន Table'],
      correct: 1,
      explanation: '`customer_id` នៅក្នុង `orders` ភ្ជាប់ទៅ `customers`។'
    },
    {
      question: 'តើ `NOT NULL` Constraint ធ្វើអ្វី?',
      options: ['អនុញ្ញាតឱ្យ Column ទទេ', 'ធានា Column មិនអាចទទេ', 'ភ្ជាប់ Tables', 'ធានា Column តែមួយគត់'],
      correct: 1,
      explanation: '`NOT NULL` ធានា Column មិនអាចទទេ។'
    },
    {
      question: 'តើ `UNIQUE` Constraint ប្រើសម្រាប់អ្វី?',
      options: ['ភ្ជាប់ Tables', 'ធានា Column មានតម្លៃតែមួយគត់', 'បញ្ចូលទិន្នន័យ', 'លុប Record'],
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
      question: 'តើ `SUM` Aggregation ប្រើសម្រាប់អ្វី?',
      options: ['រាប់ Rows', 'គណនាសរុប', 'បែងចែកទិន្នន័យ', 'លុប Record'],
      correct: 1,
      explanation: '`SUM` គណនាសរុប។'
    },
    {
      question: 'តើ `GROUP BY` ប្រើសម្រាប់អ្វី?',
      options: ['បញ្ចូលទិន្នន័យ', 'បែងចែកទិន្នន័យតាម Column', 'ភ្ជាប់ Tables', 'លុប Record'],
      correct: 1,
      explanation: '`GROUP BY` បែងចែកទិន្នន័យតាម Column។'
    },
    {
      question: 'តើ Column `quantity` នៅក្នុង Table `order_items` មានន័យដូចម្តេច?',
      options: ['ចំនួនផលិតផលក្នុងការបញ្ជាទិញ', 'តម្លៃផលិតផល', 'ឈ្មោះអតិថិជន', 'កាលបរិច្ឆេទបញ្ជាទិញ'],
      correct: 0,
      explanation: '`quantity` បង្ហាញចំនួនផលិតផលក្នុងការបញ្ជាទិញ។'
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
      question: 'តើ Table `customers` ផ្ទុកទិន្នន័យអ្វី?',
      options: ['ព័ត៌មានផលិតផល', 'ព័ត៌មានអតិថិជន', 'ការបញ្ជាទិញ', 'ចំនួនផលិតផល'],
      correct: 1,
      explanation: '`customers` ផ្ទុកព័ត៌មានអតិថិជន។'
    },
    {
      question: 'តើ Query ណាដែលប្រើដើម្បីគណនាទឹកប្រាក់សរុប?',
      options: ['SELECT', 'SUM', 'JOIN', 'INSERT'],
      correct: 1,
      explanation: '`SUM` ប្រើដើម្បីគណនាទឹកប្រាក់សរុប។'
    },
    {
      question: 'តើ `order_date` នៅក្នុង Table `orders` មាន Data Type អ្វី?',
      options: ['INT', 'VARCHAR', 'DATE', 'DECIMAL'],
      correct: 2,
      explanation: '`order_date` ប្រើ Data Type `DATE`។'
    },
  ],
  lab: {
    task: `
បង្កើត Database សម្រាប់ E-commerce Website។

**តម្រូវការ:**

1. **បង្កើត Tables:**
   - បង្កើត Tables \`customers\`, \`products\`, \`orders\`, និង \`order_items\` ជាមួយ Constraints សមស្រប។
   - បញ្ចូល 2 Records សម្រាប់ \`customers\`, 2 Records សម្រាប់ \`products\`, 2 Records សម្រាប់ \`orders\`, និង 2 Records សម្រាប់ \`order_items\`។

2. **Query:**
   - Query ដើម្បីទាញឈ្មោះអតិថិជន ឈ្មោះផលិតផល និងចំនួន។
   - Query ដើម្បីគណនាទឹកប្រាក់សរុបរបស់អតិថិជននីមួយៗ។

3. **Test:**
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries។
   - ពិនិត្យទិន្នន័យដោយប្រើ \`SELECT * FROM\` សម្រាប់នីមួយៗ។

**ការណែនាំ:** ត្រូវប្រាកដថា Foreign Keys ត្រូវបានកំណត់ត្រឹមត្រូវ។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Database
CREATE DATABASE ecommerce;
USE ecommerce;

-- បង្កើត Tables
CREATE TABLE customers (
  customer_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE
);

CREATE TABLE products (
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  customer_id INT,
  order_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE order_items (
  order_item_id INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,
  product_id INT,
  quantity INT NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO customers (name, email) VALUES
  ('Sok Piseth', 'sok@example.com'),
  ('Srey Nuch', 'nuch@example.com');

INSERT INTO products (name, price) VALUES
  ('Laptop', 1200.00),
  ('Phone', 500.00);

INSERT INTO orders (customer_id, order_date) VALUES
  (1, '2025-08-01'),
  (2, '2025-08-02');

INSERT INTO order_items (order_id, product_id, quantity) VALUES
  (1, 1, 2),
  (2, 2, 1);

-- Query ទាញទិន្នន័យ
SELECT c.name, p.name AS product_name, oi.quantity
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id;

-- Query គណនាទឹកប្រាក់សរុប
SELECT c.name, SUM(p.price * oi.quantity) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
GROUP BY c.customer_id;

-- ពិនិត្យទិន្នន័យ
SELECT * FROM customers;
SELECT * FROM products;
SELECT * FROM orders;
SELECT * FROM order_items;
\`\`\`
`
  }
};

export default MySQLLesson7_2Content;