import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson3_5Content: LessonContent = {
  title: 'Stored Procedures និង Functions',
  objectives: [
    'យល់ដឹងអំពី Stored Procedures និង Functions',
    'រៀនបង្កើត Stored Procedure ដោយប្រើ `CREATE PROCEDURE`',
    'រៀនបង្កើត Function ដោយប្រើ `CREATE FUNCTION`',
    'រៀនប្រើ Parameters នៅក្នុង Stored Procedures និង Functions',
    'រៀន Call Stored Procedures និង Functions',
    'ស្វែងយល់អំពីភាពខុសគ្នារវាង Stored Procedures និង Functions',
  ],
  content: `
# Stored Procedures និង Functions 📚

---

**Stored Procedures** និង **Functions** គឺជា Database Objects ដែលរក្សាទុកនៅក្នុង Database ដើម្បីប្រតិបត្តិការ Query ឬ Logic ដែលប្រើញឹកញាប់។

---

## 1. Stored Procedures

Stored Procedure គឺជាសំណុំនៃ SQL Statements ដែលរក្សាទុកនៅក្នុង Database។

**ឧទាហរណ៍:**
\`\`\`sql
DELIMITER //
CREATE PROCEDURE GetEmployeeCount()
BEGIN
  SELECT COUNT(*) AS employee_count FROM employees;
END //
DELIMITER ;
\`\`\`

**Call Procedure:**
\`\`\`sql
CALL GetEmployeeCount();
\`\`\`

---

## 2. Functions

Function គឺស្រដៀងនឹង Stored Procedure ប៉ុន្តែ Return តម្លៃតែមួយ។

**ឧទាហរណ៍:**
\`\`\`sql
DELIMITER //
CREATE FUNCTION GetAverageSalary() RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
  DECLARE avg_salary DECIMAL(10,2);
  SELECT AVG(salary) INTO avg_salary FROM employees;
  RETURN avg_salary;
END //
DELIMITER ;
\`\`\`

**Call Function:**
\`\`\`sql
SELECT GetAverageSalary();
\`\`\`

---

## 3. Parameters

Stored Procedures និង Functions អាចទទួល Parameters។

**ឧទាហរណ៍ (Procedure):**
\`\`\`sql
DELIMITER //
CREATE PROCEDURE GetEmployeesByDept(IN dept_id INT)
BEGIN
  SELECT name, salary FROM employees WHERE dept_id = dept_id;
END //
DELIMITER ;
\`\`\`

**Call Procedure:**
\`\`\`sql
CALL GetEmployeesByDept(1);
\`\`\`

**ឧទាហរណ៍ (Function):**
\`\`\`sql
DELIMITER //
CREATE FUNCTION GetEmployeeBonus(salary DECIMAL(10,2)) RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
  RETURN salary * 0.1;
END //
DELIMITER ;
\`\`\`

**Call Function:**
\`\`\`sql
SELECT name, salary, GetEmployeeBonus(salary) AS bonus FROM employees;
\`\`\`

---

## 4. ភាពខុសគ្នារវាង Stored Procedures និង Functions

- **Stored Procedures**:
  - មិនតម្រូវឱ្យ Return តម្លៃ។
  - អាចមាន Parameters ប្រភេទ IN, OUT, INOUT។
  - Call ដោយប្រើ \`CALL\`។
- **Functions**:
  - តម្រូវឱ្យ Return តម្លៃ។
  - ប្រើ Parameters ប្រភេទ IN តែប៉ុណ្ណោះ។
  - Call នៅក្នុង \`SELECT\`, \`WHERE\`, ឬ Expressions។

**គន្លឹះ:** Stored Procedures ស័ក្តិសមសម្រាប់ Logic ស្មុគស្មាញ ចំណែក Functions ស័ក្តិសមសម្រាប់គណនាតម្លៃ។
`,
  examples: [
    `
### ឧទាហរណ៍៖ Stored Procedure
បង្កើត Procedure ដើម្បីទាញផលិតផលតាម Category។
\`\`\`sql
DELIMITER //
CREATE PROCEDURE GetProductsByCategory(IN cat VARCHAR(50))
BEGIN
  SELECT name, price FROM products WHERE category = cat;
END //
DELIMITER ;
CALL GetProductsByCategory('Electronics');
\`\`\`
`,
    `### ឧទាហរណ៍៖ Function
បង្កើត Function ដើម្បីគណនា Discount។
\`\`\`sql
DELIMITER //
CREATE FUNCTION GetDiscount(price DECIMAL(10,2)) RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
  RETURN price * 0.2;
END //
DELIMITER ;
SELECT name, price, GetDiscount(price) AS discount FROM products;
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Stored Procedure គឺជាអ្វី?',
      options: [
        'Table ដែលផ្ទុកទិន្នន័យ',
        'សំណុំនៃ SQL Statements ដែលរក្សាទុក',
        'Query ដែលភ្ជាប់ Tables',
        'Function សម្រាប់ JOINs',
      ],
      correct: 1,
      explanation: 'Stored Procedure គឺជាសំណុំនៃ SQL Statements ដែលរក្សាទុក។'
    },
    {
      question: 'តើ Function ខុសពី Stored Procedure ដូចម្តេច?',
      options: [
        'Function មិន Return តម្លៃ',
        'Function តម្រូវឱ្យ Return តម្លៃ',
        'Function មិនអាចមាន Parameters',
        'Function ប្រើ `CALL`',
      ],
      correct: 1,
      explanation: 'Function តម្រូវឱ្យ Return តម្លៃ។'
    },
    {
      question: 'តើ Command `CREATE PROCEDURE` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត View',
        'បង្កើត Stored Procedure',
        'បង្កើត Function',
        'បង្កើត Table',
      ],
      correct: 1,
      explanation: '`CREATE PROCEDURE` បង្កើត Stored Procedure។'
    },
    {
      question: 'តើ Command `CREATE FUNCTION` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត View',
        'បង្កើត Stored Procedure',
        'បង្កើត Function',
        'បង្កើត Table',
      ],
      correct: 2,
      explanation: '`CREATE FUNCTION` បង្កើត Function។'
    },
    {
      question: 'តើ Stored Procedure អាចមាន Parameters ប្រភេទណាខ្លះ?',
      options: [
        'IN តែប៉ុណ្ណោះ',
        'IN, OUT, INOUT',
        'OUT តែប៉ុណ្ណោះ',
        'INOUT តែប៉ុណ្ណោះ',
      ],
      correct: 1,
      explanation: 'Stored Procedure អាចមាន Parameters ប្រភេទ IN, OUT, INOUT។'
    },
    {
      question: 'តើ Function អាចមាន Parameters ប្រភេទណាខ្លះ?',
      options: [
        'IN តែប៉ុណ្ណោះ',
        'IN, OUT, INOUT',
        'OUT តែប៉ុណ្ណោះ',
        'INOUT តែប៉ុណ្ណោះ',
      ],
      correct: 0,
      explanation: 'Function អាចមាន Parameters ប្រភេទ IN តែប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ Stored Procedure Call ដោយប្រើ Command អ្វី?',
      options: [
        'SELECT',
        'CALL',
        'EXECUTE',
        'RUN',
      ],
      correct: 1,
      explanation: 'Stored Procedure Call ដោយប្រើ `CALL`។'
    },
    {
      question: 'តើ Function Call នៅឯណា?',
      options: [
        'នៅក្នុង `CALL`',
        'នៅក្នុង `SELECT`, `WHERE`, Expressions',
        'នៅក្នុង `GROUP BY`',
        'នៅក្នុង `HAVING`',
      ],
      correct: 1,
      explanation: 'Function Call នៅក្នុង `SELECT`, `WHERE`, ឬ Expressions។'
    },
    {
      question: 'តើ `DELIMITER` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Parameter',
        'បំបែក SQL Statements',
        'បញ្ចប់ Procedure ឬ Function',
        'កំណត់ Alias',
      ],
      correct: 2,
      explanation: '`DELIMITER` ប្រើដើម្បីបញ្ចប់ Procedure ឬ Function។'
    },
    {
      question: 'តើ Function តម្រូវឱ្យមាន Keyword `DETERMINISTIC` នៅពេលណា?',
      options: [
        'នៅពេល Return តម្លៃថេរ',
        'នៅពេលមាន Parameters',
        'នៅពេលប្រើ `SELECT`',
        'នៅពេលប្រើ `WHERE`',
      ],
      correct: 0,
      explanation: '`DETERMINISTIC` តម្រូវនៅពេល Function Return តម្លៃថេរ។'
    },
    {
      question: 'តើ Stored Procedure អាច Return ច្រើន Rows បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `SELECT`',
        'បាន ប៉ុន្តែតែនៅក្នុង `WHERE`',
      ],
      correct: 0,
      explanation: 'Stored Procedure អាច Return ច្រើន Rows បាន។'
    },
    {
      question: 'តើ Function អាច Return ច្រើន Rows បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `SELECT`',
        'បាន ប៉ុន្តែតែនៅក្នុង `WHERE`',
      ],
      correct: 1,
      explanation: 'Function អាច Return តែមួយ Row ឬតម្លៃ។'
    },
    {
      question: 'តើ Stored Procedure អាចប្រើនៅក្នុង `SELECT` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `WHERE`',
        'បាន ប៉ុន្តែតែនៅក្នុង `GROUP BY`',
      ],
      correct: 1,
      explanation: 'Stored Procedure មិនអាចប្រើនៅក្នុង `SELECT`។'
    },
    {
      question: 'តើ Function អាចប្រើនៅក្នុង `WHERE` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `SELECT`',
        'បាន ប៉ុន្តែតែនៅក្នុង `GROUP BY`',
      ],
      correct: 0,
      explanation: 'Function អាចប្រើនៅក្នុង `WHERE`។'
    },
    {
      question: 'តើ Stored Procedure និង Function អាច Drop ដោយប្រើ Command អ្វី?',
      options: [
        'DROP PROCEDURE, DROP FUNCTION',
        'DELETE PROCEDURE, DELETE FUNCTION',
        'REMOVE PROCEDURE, REMOVE FUNCTION',
        'ALTER PROCEDURE, ALTER FUNCTION',
      ],
      correct: 0,
      explanation: 'Stored Procedure និង Function Drop ដោយ `DROP PROCEDURE` និង `DROP FUNCTION`។'
    },
    {
      question: 'តើ Stored Procedure អាចប្រើ Logic ស្មុគស្មាញបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅក្នុង `SELECT`',
        'បាន ប៉ុន្តែតែនៅក្នុង `WHERE`',
      ],
      correct: 0,
      explanation: 'Stored Procedure អាចប្រើ Logic ស្មុគស្មាញបាន។'
    },
  ],
  lab: {
    task: `
ប្រើ Stored Procedures និង Functions ដើម្បីគ្រប់គ្រងទិន្នន័យ។

**តម្រូវការ:**

**1. បង្កើត Table:**
   - បង្កើត Table \`employees\` ដែលមាន Columns: \`emp_id\` (INT, PRIMARY KEY), \`name\` (VARCHAR), \`salary\` (DECIMAL), \`dept_id\` (INT)។
   - បញ្ចូល ៤ Records ទៅក្នុង \`employees\`។

**2. បង្កើត Stored Procedure:**
   - បង្កើត Procedure \`GetHighSalaryEmployees\` ដែលទាញ \`name\` និង \`salary\` សម្រាប់បុគ្គលិកដែល \`salary\` លើសពី Parameter ដែលបញ្ចូល។

**3. បង្កើត Function:**
   - បង្កើត Function \`CalculateBonus\` ដែលគណនា Bonus (10% នៃ \`salary\`)។

**4. Test:**
   - Call \`GetHighSalaryEmployees\` ជាមួយ \`salary\` 2000។
   - Query \`name\`, \`salary\`, និង \`CalculateBonus(salary)\` សម្រាប់បុគ្គលិកទាំងអស់។
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Queries។

**ការណែនាំ:** ប្រើ \`SELECT * FROM employees\` ដើម្បីពិនិត្យទិន្នន័យ។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Table
CREATE TABLE employees (
  emp_id INT PRIMARY KEY,
  name VARCHAR(50),
  salary DECIMAL(10,2),
  dept_id INT
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO employees (emp_id, name, salary, dept_id) 
VALUES 
  (1, 'សុខ', 2500.00, 1),
  (2, 'សួន', 2000.00, 1),
  (3, 'លី', 1800.00, 2),
  (4, 'ចាន់', 2200.00, 2);

-- បង្កើត Stored Procedure
DELIMITER //
CREATE PROCEDURE GetHighSalaryEmployees(IN min_salary DECIMAL(10,2))
BEGIN
  SELECT name, salary 
  FROM employees 
  WHERE salary > min_salary;
END //
DELIMITER ;

-- បង្កើត Function
DELIMITER //
CREATE FUNCTION CalculateBonus(salary DECIMAL(10,2)) RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
  RETURN salary * 0.1;
END //
DELIMITER ;

-- Test
CALL GetHighSalaryEmployees(2000);
SELECT name, salary, CalculateBonus(salary) AS bonus FROM employees;
\`\`\`
`
  }
};

export default MySQLLesson3_5Content;