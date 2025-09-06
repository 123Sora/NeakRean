import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson2_3Content: LessonContent = {
  title: 'DML - ការបញ្ចូល, កែប្រែ, លុប Data',
  objectives: [
    'រៀនបញ្ចូលទិន្នន័យជាមួយ `INSERT INTO`',
    'រៀនកែប្រែទិន្នន័យជាមួយ `UPDATE`',
    'រៀនលុបទិន្នន័យជាមួយ `DELETE FROM`',
    'រៀនលុប Records ទាំងអស់ជាមួយ `TRUNCATE TABLE`',
  ],
  content: `
# DML - ការបញ្ចូល, កែប្រែ, លុប Data 📚

---

**DML (Data Manipulation Language)** គឺជាផ្នែកនៃ SQL ដែលប្រើសម្រាប់គ្រប់គ្រងទិន្នន័យនៅក្នុង Table។

---

## 1. INSERT INTO

បញ្ចូល Records ថ្មីទៅក្នុង Table។

**ឧទាហរណ៍:**
\`\`\`sql
INSERT INTO employees (id, name, salary, hire_date) 
VALUES (1, 'សុខ', 1500.00, '2023-01-01');
\`\`\`

**ឧទាហរណ៍ (បញ្ចូលច្រើន Records):**
\`\`\`sql
INSERT INTO employees (id, name, salary, hire_date) 
VALUES 
  (2, 'សួន', 2000.00, '2023-02-01'),
  (3, 'លី', 1800.00, '2023-03-01');
\`\`\`

---

## 2. UPDATE

កែប្រែ Records ដែលមានស្រាប់។

**ឧទាហរណ៍:**
\`\`\`sql
UPDATE employees 
SET salary = 1600.00 
WHERE id = 1;
\`\`\`

---

## 3. DELETE FROM

លុប Records ពី Table។

**ឧទាហរណ៍:**
\`\`\`sql
DELETE FROM employees 
WHERE id = 3;
\`\`\`

---

## 4. TRUNCATE TABLE

លុប Records ទាំងអស់ក្នុង Table ប៉ុន្តែរក្សារចនាសម្ព័ន្ធ។

**ឧទាហរណ៍:**
\`\`\`sql
TRUNCATE TABLE employees;
\`\`\`

**គន្លឹះ:** \`TRUNCATE\` លឿនជាង \`DELETE\` ប៉ុន្តែមិនអនុញ្ញាតឱ្យប្រើ \`WHERE\`។
`,
  examples: [
    `
### ឧទាហរណ៍៖ បញ្ចូលទិន្នន័យ
បញ្ចូល Record ទៅក្នុង Table \`products\`។
\`\`\`sql
INSERT INTO products (product_id, name, price) 
VALUES (1, 'កាបូប', 29.99);
\`\`\`
`,
    `
### ឧទាហរណ៍៖ កែប្រែ និងលុបទិន្នន័យ
កែប្រែ និងលុប Record នៅក្នុង Table \`products\`។
\`\`\`sql
UPDATE products SET price = 39.99 WHERE product_id = 1;
DELETE FROM products WHERE product_id = 1;
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Command `INSERT INTO` ប្រើសម្រាប់អ្វី?',
      options: [
        'កែប្រែទិន្នន័យ',
        'បញ្ចូលទិន្នន័យ',
        'លុបទិន្នន័យ',
        'បង្កើត Table',
      ],
      correct: 1,
      explanation: '`INSERT INTO` បញ្ចូល Records ថ្មីទៅក្នុង Table�।'
    },
    {
      question: 'តើ Command `UPDATE` មានតួនាទីអ្វី?',
      options: [
        'លុប Records',
        'កែប្រែ Records',
        'បង្កើត Database',
        'ទាញទិន្នន័យ',
      ],
      correct: 1,
      explanation: '`UPDATE` កែប្រែ Records ដែលមានស្រាប់។'
    },
    {
      question: 'តើ Command `DELETE FROM` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'លុប Records',
        'កែប្រែ Table',
        'បង្កើត Table',
      ],
      correct: 1,
      explanation: '`DELETE FROM` លុប Records ពី Table។'
    },
    {
      question: 'តើ Command `TRUNCATE TABLE` មានន័យដូចម្តេច?',
      options: [
        'លុប Records ទាំងអស់ និងរចនាសម្ព័ន្ធ',
        'លុប Records ទាំងអស់ ប៉ុន្តែរក្សារចនាសម្ព័ន្ធ',
        'កែប្រែ Records',
        'បញ្ចូល Records',
      ],
      correct: 1,
      explanation: '`TRUNCATE TABLE` លុប Records ទាំងអស់ ប៉ុន្តែរក្សារចនាសម្ព័ន្ធ។'
    },
    {
      question: 'តើ `WHERE` ក្នុង `UPDATE` មានតួនាទីអ្វី?',
      options: [
        'កំណត់លក្ខខណ្ឌសម្រាប់កែប្រែ',
        'បញ្ចូលទិន្នន័យ',
        'លុប Table',
        'បង្កើត Database',
      ],
      correct: 0,
      explanation: '`WHERE` កំណត់លក្ខខណ្ឌសម្រាប់កែប្រែ Records។'
    },
    {
      question: 'តើ `INSERT INTO` អាចបញ្ចូលច្រើន Records ក្នុងពេលតែមួយបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែមួយ Record',
        'មិនបាន ព្រោះជា DDL',
      ],
      correct: 0,
      explanation: '`INSERT INTO` អាចបញ្ចូលច្រើន Records ក្នុងពេលតែមួយ។'
    },
    {
      question: 'តើ `DELETE FROM` អាចប្រើ `WHERE` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `UPDATE`',
        'មិនបាន ព្រោះជា DDL',
      ],
      correct: 0,
      explanation: '`DELETE FROM` អាចប្រើ `WHERE` ដើម្បីកំណត់ Records ដែលត្រូវលុប។'
    },
    {
      question: 'តើ `TRUNCATE TABLE` ខុសពី `DELETE FROM` ដូចម្តេច?',
      options: [
        '`TRUNCATE` លឿនជាង និងមិនប្រើ `WHERE`',
        '`TRUNCATE` លុបរចនាសម្ព័ន្ធ',
        '`TRUNCATE` បញ្ចូលទិន្នន័យ',
        '`TRUNCATE` កែប្រែ Records',
      ],
      correct: 0,
      explanation: '`TRUNCATE` លឿនជាង និងមិនប្រើ `WHERE`។'
    },
    {
      question: 'តើ Command ណាមួយជា DML?',
      options: [
        'CREATE',
        'ALTER',
        'INSERT',
        'GRANT',
      ],
      correct: 2,
      explanation: '`INSERT` ជា DML Command។'
    },
    {
      question: 'តើ `UPDATE` ត្រូវការ `SET` ដែរឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `INSERT`',
        'មិនបាន ព្រោះជា DDL',
      ],
      correct: 0,
      explanation: '`UPDATE` ត្រូវការ `SET` ដើម្បីកំណត់តម្លៃថ្មី។'
    },
    {
      question: 'តើ `INSERT INTO` តម្រូវឱ្យបញ្ជាក់ Columns ទាំងអស់ទេ?',
      options: [
        'មិនតម្រូវ',
        'តម្រូវ',
        'តម្រូវ ប៉ុន្តែតែនៅក្នុង `UPDATE`',
        'មិនតម្រូវ ប៉ុន្តែតែនៅក្នុង `DELETE`',
      ],
      correct: 0,
      explanation: '`INSERT INTO` មិនតម្រូវឱ្យបញ្ជាក់ Columns ទាំងអស់ ប៉ុន្តែ Columns ដែលមិនបញ្ចូលនឹងទទេ ឬប្រើ DEFAULT។'
    },
    {
      question: 'តើ Command `DELETE FROM` លុបរចនាសម្ព័ន្ធ Table ដែរឬទេ?',
      options: [
        'មិនលុប',
        'លុប',
        'លុប ប៉ុន្តែតែនៅក្នុង `TRUNCATE`',
        'លុប ប៉ុន្តែតែនៅក្នុង `DROP`',
      ],
      correct: 0,
      explanation: '`DELETE FROM` លុប Records តែប៉ុណ្ណោះ មិនលុបរចនាសម្ព័ន្ធ Table។'
    },
    {
      question: 'តើ `TRUNCATE TABLE` អាចប្រើ `WHERE` បានទេ?',
      options: [
        'មិនបាន',
        'បាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `UPDATE`',
        'មិនបាន ព្រោះជា DDL',
      ],
      correct: 0,
      explanation: '`TRUNCATE TABLE` មិនអនុញ្ញាតឱ្យប្រើ `WHERE`។'
    },
    {
      question: 'តើ Command `INSERT INTO` អាចបញ្ចូលតម្លៃ DEFAULT បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `UPDATE`',
        'មិនបាន ព្រោះជា DDL',
      ],
      correct: 0,
      explanation: '`INSERT INTO` អាចបញ្ចូលតម្លៃ DEFAULT បាន។'
    },
    {
      question: 'តើ Command ណាមួយលឿនជាងសម្រាប់លុប Records ទាំងអស់?',
      options: [
        'DELETE FROM',
        'TRUNCATE TABLE',
        'DROP TABLE',
        'ALTER TABLE',
      ],
      correct: 1,
      explanation: '`TRUNCATE TABLE` លឿនជាង `DELETE FROM` សម្រាប់លុប Records ទាំងអស់។'
    }
  ],
  lab: {
    task: `
គ្រប់គ្រងទិន្នន័យដោយប្រើ DML Commands។

**តម្រូវការ:**

**1. បង្កើត Table:**
   - បង្កើត Table \`orders\` ដែលមាន Columns: \`order_id\` (INT, PRIMARY KEY), \`customer_id\` (INT), \`total\` (DECIMAL), \`order_date\` (DATE)។

**2. បញ្ចូលទិន្នន័យ:**
   - បញ្ចូល ៣ Records ទៅក្នុង \`orders\`។

**3. កែប្រែទិន្នន័យ:**
   - កែប្រែ \`total\` នៃ Record ដែល \`order_id = 1\` ទៅជា 99.99។

**4. លុបទិន្នន័យ:**
   - លុប Record ដែល \`order_id = 3\`។

**5. Test:**
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Commands និងពិនិត្យទិន្នន័យ។

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
  (1, 101, 50.00, '2023-01-01'),
  (2, 102, 75.00, '2023-01-02'),
  (3, 103, 25.00, '2023-01-03');

-- កែប្រែទិន្នន័យ
UPDATE orders SET total = 99.99 WHERE order_id = 1;

-- លុបទិន្នន័យ
DELETE FROM orders WHERE order_id = 3;
\`\`\`
`
  }
};

export default MySQLLesson2_3Content;