import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson3_6Content: LessonContent = {
  title: 'Triggers',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា Trigger',
    'រៀនបង្កើត Trigger ដោយប្រើ `CREATE TRIGGER`',
    'ស្វែងយល់អំពី Trigger Types (BEFORE, AFTER)',
    'រៀនប្រើ Trigger Events (INSERT, UPDATE, DELETE)',
    'រៀនប្រើ `NEW` និង `OLD` នៅក្នុង Triggers',
    'រៀនលុប Trigger ដោយប្រើ `DROP TRIGGER`',
  ],
  content: `
# Triggers 📚

---

**Trigger** គឺជា Database Object ដែលប្រតិបត្តិដោយស្វ័យប្រវត្តិនៅពេលមាន Event ជាក់លាក់ (ដូចជា INSERT, UPDATE, DELETE) កើតឡើងនៅលើ Table។

---

## 1. បង្កើត Trigger

ប្រើ \`CREATE TRIGGER\` ដើម្បីបង្កើត Trigger។

**ឧទាហរណ៍:**
\`\`\`sql
DELIMITER //
CREATE TRIGGER after_employee_insert 
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
  INSERT INTO employee_log (action, emp_id, action_date)
  VALUES ('INSERT', NEW.emp_id, NOW());
END //
DELIMITER ;
\`\`\`

---

## 2. Trigger Types

- **BEFORE**: ប្រតិបត្តិមុនពេល Event កើតឡើង។
- **AFTER**: ប្រតិបត្តិបន្ទាប់ពី Event កើតឡើង។

---

## 3. Trigger Events

- **INSERT**: ប្រតិបត្តិនៅពេលបញ្ចូល Record ថ្មី។
- **UPDATE**: ប្រតิបត្តិនៅពេលកែប្រែ Record។
- **DELETE**: ប្រតិបត្តិនៅពេលលុប Record។

**ឧទាហរណ៍:**
\`\`\`sql
DELIMITER //
CREATE TRIGGER before_employee_update 
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
  IF NEW.salary < 0 THEN
    SET NEW.salary = 0;
  END IF;
END //
DELIMITER ;
\`\`\`

---

## 4. NEW និង OLD

- **NEW**: យោងទៅ Record ថ្មី (សម្រាប់ INSERT, UPDATE)។
- **OLD**: យោងទៅ Record ចាស់ (សម្រាប់ UPDATE, DELETE)។

**ឧទាហរណ៍:**
\`\`\`sql
DELIMITER //
CREATE TRIGGER after_employee_delete 
AFTER DELETE ON employees
FOR EACH ROW
BEGIN
  INSERT INTO employee_log (action, emp_id, action_date)
  VALUES ('DELETE', OLD.emp_id, NOW());
END //
DELIMITER ;
\`\`\`

---

## 5. លុប Trigger

ប្រើ \`DROP TRIGGER\` ដើម្បីលុប Trigger។

**ឧទាហរណ៍:**
\`\`\`sql
DROP TRIGGER after_employee_insert;
\`\`\`

**គន្លឹះ:** Triggers ជួយអនុវត្ត Logic ស្វ័យប្រវត្តិ ដូចជាការកត់ត្រា Log ឬការត្រួតពិនិត្យទិន្នន័យ។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Trigger សម្រាប់ INSERT</h3>
<p>បង្កើត Trigger ដើម្បីកត់ត្រា Log នៅពេលបញ្ចូលផលិតផល។</p>
<pre><code class="language-sql">
DELIMITER //
CREATE TRIGGER after_product_insert 
AFTER INSERT ON products
FOR EACH ROW
BEGIN
  INSERT INTO product_log (action, product_id, action_date)
  VALUES ('INSERT', NEW.product_id, NOW());
END //
DELIMITER ;
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Trigger សម្រាប់ UPDATE</h3>
<p>បង្កើត Trigger ដើម្បីការពារតម្លៃអវិជ្ជមាន។</p>
<pre><code class="language-sql">
DELIMITER //
CREATE TRIGGER before_product_update 
BEFORE UPDATE ON products
FOR EACH ROW
BEGIN
  IF NEW.price < 0 THEN
    SET NEW.price = 0;
  END IF;
END //
DELIMITER ;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Trigger គឺជាអ្វី?',
      options: [
        'Table ដែលផ្ទុកទិន្នន័យ',
        'Database Object ដែលប្រតិបត្តិដោយស្វ័យប្រវត្តិ',
        'Query ដែលភ្ជាប់ Tables',
        'Function សម្រាប់គណនា',
      ],
      correct: 1,
      explanation: 'Trigger គឺជា Database Object ដែលប្រតិបត្តិដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ Command `CREATE TRIGGER` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត View',
        'បង្កើត Trigger',
        'បង្កើត Function',
        'បង្កើត Table',
      ],
      correct: 1,
      explanation: '`CREATE TRIGGER` បង្កើត Trigger។'
    },
    {
      question: 'តើ Trigger Type ណាដែលប្រតិបត្តិមុន Event?',
      options: [
        'AFTER',
        'BEFORE',
        'DURING',
        'INSTEAD OF',
      ],
      correct: 1,
      explanation: '`BEFORE` ប្រតិបត្តិមុន Event។'
    },
    {
      question: 'តើ Trigger Type ណាដែលប្រតិបត្តិបន្ទាប់ពី Event?',
      options: [
        'AFTER',
        'BEFORE',
        'DURING',
        'INSTEAD OF',
      ],
      correct: 0,
      explanation: '`AFTER` ប្រតិបត្តិបន្ទាប់ពី Event។'
    },
    {
      question: 'តើ Trigger Event ណាដែលប្រតិបត្តិនៅពេលបញ្ចូល Record?',
      options: [
        'UPDATE',
        'DELETE',
        'INSERT',
        'SELECT',
      ],
      correct: 2,
      explanation: '`INSERT` ប្រតិបត្តិនៅពេលបញ្ចូល Record។'
    },
    {
      question: 'តើ `NEW` យោងទៅ Record ណា�?',
      options: [
        'Record ចាស់',
        'Record ថ្មី',
        'Record ទាំងអស់',
        'Record ដែលលុប',
      ],
      correct: 1,
      explanation: '`NEW` យោងទៅ Record ថ្មី។'
    },
    {
      question: 'តើ `OLD` យោងទៅ Record ណា�?',
      options: [
        'Record ចាស់',
        'Record ថ្មី',
        'Record ទាំងអស់',
        'Record ដែលបញ្ចូល',
      ],
      correct: 0,
      explanation: '`OLD` យោងទៅ Record ចាស់�।'
    },
    {
      question: 'តើ Command `DROP TRIGGER` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Trigger',
        'លុប Trigger',
        'កែប្រែ Trigger',
        'បញ្ចូលទិន្នន័យ',
      ],
      correct: 1,
      explanation: '`DROP TRIGGER` លុប Trigger។'
    },
    {
      question: 'តើ Trigger អាចប្រើនៅលើ Views បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង Updatable Views',
        'បាន ប៉ុន្តែតែនៅក្នុង `SELECT`',
      ],
      correct: 2,
      explanation: 'Trigger អាចប្រើនៅលើ Updatable Views។'
    },
    {
      question: 'តើ Trigger អាចប្រើ Logic ស្មុគស្មាញបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `BEFORE`',
        'បាន ប៉ុន្តែតែនៅក្នុង `AFTER`',
      ],
      correct: 0,
      explanation: 'Trigger អាចប្រើ Logic ស្មុគស្មាញបាន។'
    },
    {
      question: 'តើ Trigger អាច Call Stored Procedure បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `BEFORE`',
        'បាន ប៉ុន្តែតែនៅក្នុង `AFTER`',
      ],
      correct: 0,
      explanation: 'Trigger អាច Call Stored Procedure បាន។'
    },
    {
      question: 'តើ `NEW` អាចប្រើនៅក្នុង Trigger Event ណាខ្លះ?',
      options: [
        'INSERT, UPDATE',
        'UPDATE, DELETE',
        'INSERT, DELETE',
        'DELETE តែប៉ុណ្ណោះ',
      ],
      correct: 0,
      explanation: '`NEW` អាចប្រើនៅក្នុង `INSERT` និង `UPDATE`។'
    },
    {
      question: 'តើ `OLD` អាចប្រើនៅក្នុង Trigger Event ណាខ្លះ?',
      options: [
        'INSERT, UPDATE',
        'UPDATE, DELETE',
        'INSERT, DELETE',
        'INSERT តែប៉ុណ្ណោះ',
      ],
      correct: 1,
      explanation: '`OLD` អាចប្រើនៅក្នុង `UPDATE` និង `DELETE`។'
    },
    {
      question: 'តើ Trigger អាចប្រតិបត្តិដោយស្វ័យប្រវត្តិបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `BEFORE`',
        'បាន ប៉ុន្តែតែនៅក្នុង `AFTER`',
      ],
      correct: 0,
      explanation: 'Trigger ប្រតិបត្តិដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ Trigger អាចប្រើនៅលើ Table ច្រើនក្នុងពេលតែមួយបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `INSERT`',
        'បាន ប៉ុន្តែតែនៅក្នុង `UPDATE`',
      ],
      correct: 1,
      explanation: 'Trigger អាចប្រើនៅលើ Table តែមួយក្នុងពេលតែមួយ។'
    },
    {
      question: 'តើ Trigger អាចប្រើសម្រាប់កត់ត្រា Log បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `BEFORE`',
        'បាន ប៉ុន្តែតែនៅក្នុង `AFTER`',
      ],
      correct: 0,
      explanation: 'Trigger អាចប្រើសម្រាប់កត់ត្រា Log បាន។'
    },
  ],
  lab: {
    task: `
ប្រើ Triggers ដើម្បីគ្រប់គ្រងទិន្នន័យដោយស្វ័យប្រវត្តិ។

**តម្រូវការ:**

1. **បង្កើត Tables:**
   - បង្កើត Table \`products\` ដែលមាន Columns: \`product_id\` (INT, PRIMARY KEY), \`name\` (VARCHAR), \`price\` (DECIMAL)។
   - បង្កើត Table \`product_log\` ដែលមាន Columns: \`log_id\` (INT, PRIMARY KEY), \`action\` (VARCHAR), \`product_id\` (INT), \`action_date\` (DATETIME)។
   - បញ្ចូល ៣ Records ទៅក្នុង \`products\`។

2. **បង្កើត Triggers:**
   - បង្កើត Trigger \`after_product_insert\` ដើម្បីកត់ត្រា Log នៅពេលបញ្ចូលផលិតផល។
   - បង្កើត Trigger \`before_product_update\` ដើម្បីការពារតម្លៃ \`price\` អវិជ្ជមាន។

3. **Test:**
   - បញ្ចូល Record ថ្មីទៅក្នុង \`products\`។
   - Update \`price\` ទៅជាតម្លៃអវិជ្ជមាន និងតម្លៃវិជ្ជមាន។
   - Query \`product_log\` ដើម្បីពិនិត្យ Log។
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries។

**ការណែនាំ:** ប្រើ \`SELECT * FROM products\` និង \`SELECT * FROM product_log\` ដើម្បីពិនិត្យទិន្នន័យ។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Tables
CREATE TABLE products (
  product_id INT PRIMARY KEY,
  name VARCHAR(50),
  price DECIMAL(10,2)
);

CREATE TABLE product_log (
  log_id INT PRIMARY KEY AUTO_INCREMENT,
  action VARCHAR(50),
  product_id INT,
  action_date DATETIME
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO products (product_id, name, price) 
VALUES 
  (1, 'Laptop', 999.99),
  (2, 'Phone', 499.99),
  (3, 'Headphones', 29.99);

-- បង្កើត Triggers
DELIMITER //
CREATE TRIGGER after_product_insert 
AFTER INSERT ON products
FOR EACH ROW
BEGIN
  INSERT INTO product_log (action, product_id, action_date)
  VALUES ('INSERT', NEW.product_id, NOW());
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER before_product_update 
BEFORE UPDATE ON products
FOR EACH ROW
BEGIN
  IF NEW.price < 0 THEN
    SET NEW.price = 0;
  END IF;
END //
DELIMITER ;

-- Test
INSERT INTO products (product_id, name, price) 
VALUES (4, 'Tablet', 299.99);

UPDATE products 
SET price = -50.00 
WHERE product_id = 1;

UPDATE products 
SET price = 1099.99 
WHERE product_id = 1;

SELECT * FROM product_log;
\`\`\`
`
  }
};

export default MySQLLesson3_6Content;