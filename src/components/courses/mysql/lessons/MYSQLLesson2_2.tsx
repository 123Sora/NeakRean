import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson2_2Content: LessonContent = {
  title: 'DDL - ការបង្កើត និងគ្រប់គ្រង Database Structure',
  objectives: [
    'រៀនបង្កើត Database ជាមួយ `CREATE DATABASE`',
    'រៀនជ្រើសរើស Database ជាមួយ `USE`',
    'រៀនបង្កើត Tables ជាមួយ `CREATE TABLE`',
    'ស្វែងយល់អំពី Data Types និង Constraints',
    'រៀនកែប្រែ Table ជាមួយ `ALTER TABLE`',
    'រៀនលុប Database ឬ Table ជាមួយ `DROP`',
  ],
  content: `
# DDL - ការបង្កើត និងគ្រប់គ្រង Database Structure 📚

---

**DDL (Data Definition Language)** គឺជាផ្នែកនៃ SQL ដែលប្រើសម្រាប់កំណត់ និងគ្រប់គ្រងរចនាសម្ព័ន្ធ Database។

---

## 1. CREATE DATABASE

បង្កើត Database ថ្មី។

**ឧទាហរណ៍:**
\`\`\`sql
CREATE DATABASE company;
\`\`\`

---

## 2. USE Database

ជ្រើសរើស Database ដើម្បីប្រើប្រាស់។

**ឧទាហរណ៍:**
\`\`\`sql
USE company;
\`\`\`

---

## 3. CREATE TABLE

បង្កើត Table ដើម្បីផ្ទុកទិน្នន័យ។

**ឧទាហរណ៍:**
\`\`\`sql
CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  salary DECIMAL(10,2),
  hire_date DATE
);
\`\`\`

### Data Types
- **INT**: ចំនួនគត់
- **VARCHAR(n)**: អក្សរអថេរ (ឧ. VARCHAR(50))
- **TEXT**: អក្សរវែង
- **DATE**: កាលបរិច្ឆេទ
- **DECIMAL(m,n)**: ចំនួនទសភាគ
- **BOOLEAN**: True/False
- **DATETIME**: កាលបរិច្ឆេទ និងម៉ោង

### Constraints
- **PRIMARY KEY**: កំណត់អត្តសញ្ញាណ Record
- **FOREIGN KEY**: ភ្ជាប់ Table
- **NOT NULL**: មិនអនុញ្ញាតឱ្យទទេ
- **UNIQUE**: តម្លៃមិនអនុញ្ញាតឱ្យស្ទួន
- **DEFAULT**: តម្លៃលំនាំដើម
- **CHECK**: កំណត់លក្ខខណ្ឌ

**ឧទាហរណ៍:**
\`\`\`sql
CREATE TABLE departments (
  dept_id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  budget DECIMAL(10,2) DEFAULT 0.00,
  CHECK (budget >= 0)
);
\`\`\`

---

## 4. ALTER TABLE

កែប្រែរចនាសម្ព័ន្ធ Table។

**ឧទាហរណ៍:**
\`\`\`sql
ALTER TABLE employees ADD email VARCHAR(100);
ALTER TABLE employees MODIFY salary DECIMAL(12,2);
ALTER TABLE employees DROP COLUMN email;
\`\`\`

---

## 5. DROP DATABASE / DROP TABLE

លុប Database ឬ Table។

**ឧទាហរណ៍:**
\`\`\`sql
DROP TABLE employees;
DROP DATABASE company;
\`\`\`
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បង្កើត Table ជាមួយ Constraints</h3>
<p>បង្កើត Table <code>products</code> ដែលមាន Constraints។</p>
<pre><code class="language-sql">
CREATE TABLE products (
  product_id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) CHECK (price > 0),
  category VARCHAR(50) DEFAULT 'General'
);
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ កែប្រែ Table</h3>
<p>បន្ថែម Column និងកែប្រែ Column នៅក្នុង Table <code>products</code>។</p>
<pre><code class="language-sql">
ALTER TABLE products ADD stock INT;
ALTER TABLE products MODIFY price DECIMAL(12,2);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Command `CREATE DATABASE` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Table',
        'បង្កើត Database',
        'បញ្ចូលទិន្នន័យ',
        'លុប Database',
      ],
      correct: 1,
      explanation: '`CREATE DATABASE` បង្កើត Database ថ្មី។'
    },
    {
      question: 'តើ Command `USE` មានតួនាទីអ្វី?',
      options: [
        'លុប Database',
        'ជ្រើសរើស Database',
        'បង្កើត Table',
        'កែប្រែ Table',
      ],
      correct: 1,
      explanation: '`USE` ជ្រើសរើស Database ដើម្បីប្រើប្រាស់។'
    },
    {
      question: 'តើ Data Type `VARCHAR` ប្រើសម្រាប់អ្វី?',
      options: [
        'ចំនួនគត់',
        'អក្សរអថេរ',
        'កាលបរិច្ឆេទ',
        'ចំនួនទសភាគ',
      ],
      correct: 1,
      explanation: '`VARCHAR` ប្រើសម្រាប់ផ្ទុកអក្សរអថេរ។'
    },
    {
      question: 'តើ Constraint `PRIMARY KEY` មានតួនាទីអ្វី?',
      options: [
        'ភ្ជាប់ Tables',
        'កំណត់អត្តសញ្ញាណ Record',
        'មិនអនុញ្ញាតឱ្យទទេ',
        'កំណត់តម្លៃលំនាំដើម',
      ],
      correct: 1,
      explanation: '`PRIMARY KEY` កំណត់អត្តសញ្ញាណ Record នីមួយៗ។'
    },
    {
      question: 'តើ Constraint `NOT NULL` មានន័យដូចម្តេច?',
      options: [
        'អនុញ្ញាតឱ្យទទេ',
        'មិនអនុញ្ញាតឱ្យទទេ',
        'ភ្ជាប់ Tables',
        'កំណត់តម្លៃស្ទួន',
      ],
      correct: 1,
      explanation: '`NOT NULL` មិនអនុញ្ញាតឱ្យ Column ទទេ។'
    },
    {
      question: 'តើ Command `ALTER TABLE` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'កែប្រែរចនាសម្ព័ន្ធ Table',
        'លុប Table',
        'ទាញទិន្នន័យ',
      ],
      correct: 1,
      explanation: '`ALTER TABLE` កែប្រែរចនាសម្ព័ន្ធ Table។'
    },
    {
      question: 'តើ Command `DROP TABLE` មានតួនាទីអ្វី?',
      options: [
        'បង្កើត Table',
        'លុប Table',
        'កែប្រែ Table',
        'បញ្ចូលទិន្នន័យ',
      ],
      correct: 1,
      explanation: '`DROP TABLE` លុប Table។'
    },
    {
      question: 'តើ Data Type `DECIMAL` ប្រើសម្រាប់អ្វី?',
      options: [
        'អក្សរវែង',
        'ចំនួនទសភាគ',
        'កាលបរិច្ឆេទ',
        'True/False',
      ],
      correct: 1,
      explanation: '`DECIMAL` ប្រើសម្រាប់ចំនួនទសភាគ។'
    },
    {
      question: 'តើ Constraint `CHECK` មានតួនាទីអ្វី?',
      options: [
        'កំណត់លក្ខខណ្ឌ',
        'ភ្ជាប់ Tables',
        'កំណត់អត្តសញ្ញាណ',
        'មិនអនុញ្ញាតឱ្យស្ទួន',
      ],
      correct: 0,
      explanation: '`CHECK` កំណត់លក្ខខណ្ឌសម្រាប់ Column។'
    },
    {
      question: 'តើ Command `ALTER TABLE ADD` ប្រើសម្រាប់អ្វី?',
      options: [
        'លុប Column',
        'បន្ថែម Column',
        'កែប្រែ Column',
        'ទាញទិន្នន័យ',
      ],
      correct: 1,
      explanation: '`ALTER TABLE ADD` បន្ថែម Column ទៅ Table។'
    },
    {
      question: 'តើ Constraint `UNIQUE` មានន័យដូចម្តេច?',
      options: [
        'មិនអនុញ្ញាតឱ្យទទេ',
        'តម្លៃមិនអនុញ្ញាតឱ្យស្ទួន',
        'កំណត់តម្លៃលំនាំដើម',
        'ភ្ជាប់ Tables',
      ],
      correct: 1,
      explanation: '`UNIQUE` មិនអនុញ្ញាតឱ្យតម្លៃស្ទួន។'
    },
    {
      question: 'តើ Data Type `DATE` ប្រើសម្រាប់អ្វី?',
      options: [
        'អក្សរអថេរ',
        'កាលបរិច្ឆេទ',
        'ចំនួនគត់',
        'True/False',
      ],
      correct: 1,
      explanation: '`DATE` ប្រើសម្រាប់ផ្ទុកកាលបរិច្ឆេទ។'
    },
    {
      question: 'តើ Command `DROP DATABASE` លុបអ្វី?',
      options: [
        'Table តែប៉ុណ្ណោះ',
        'Database ទាំងមូល',
        'Records ទាំងអស់',
        'Column មួយ',
      ],
      correct: 1,
      explanation: '`DROP DATABASE` លុប Database ទាំងមូល។'
    },
    {
      question: 'តើ Constraint `FOREIGN KEY` មានតួនាទីអ្វី?',
      options: [
        'កំណត់អត្តសញ្ញាណ',
        'ភ្ជាប់ Tables',
        'មិនអនុញ្ញាតឱ្យទទេ',
        'កំណត់លក្ខខណ្ឌ',
      ],
      correct: 1,
      explanation: '`FOREIGN KEY` ភ្ជាប់ Table មួយទៅ Table ផ្សេង។'
    },
    {
      question: 'តើ Command `ALTER TABLE MODIFY` ប្រើសម្រាប់អ្វី?',
      options: [
        'បន្ថែម Column',
        'កែប្រែ Column',
        'លុប Column',
        'បញ្ចូលទិន្នន័យ',
      ],
      correct: 1,
      explanation: '`ALTER TABLE MODIFY` កែប្រែ Column នៅក្នុង Table។'
    }
  ],
  lab: {
    task: `
បង្កើត និងគ្រប់គ្រង Database Structure ដោយប្រើ DDL Commands។

**តម្រូវការ:**

1. **បង្កើត Database:**
   - បង្កើត Database ឈ្មោះ \`store\`។

2. **បង្កើត Table:**
   - បង្កើត Table \`customers\` ដែលមាន Columns: \`customer_id\` (INT, PRIMARY KEY), \`name\` (VARCHAR, NOT NULL), \`email\` (VARCHAR, UNIQUE), \`balance\` (DECIMAL, DEFAULT 0.00, CHECK balance >= 0)។

3. **កែប្រែ Table:**
   - បន្ថែម Column \`phone\` (VARCHAR)។
   - កែប្រែ \`balance\` ទៅជា DECIMAL(12,2)។

4. **Test:**
   - ប្រើ MySQL Workbench ឬ phpMyAdmin ដើម្បី Run Commands និងពិនិត្យរចនាសម្ព័ន្ធ។

**ការណែនាំ:** ពិនិត្យ Syntax នៅក្នុង MySQL Documentation។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Database
CREATE DATABASE store;
USE store;

-- បង្កើត Table
CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE,
  balance DECIMAL(10,2) DEFAULT 0.00,
  CHECK (balance >= 0)
);

-- កែប្រែ Table
ALTER TABLE customers ADD phone VARCHAR(20);
ALTER TABLE customers MODIFY balance DECIMAL(12,2);
\`\`\`
`
  }
};

export default MySQLLesson2_2Content;