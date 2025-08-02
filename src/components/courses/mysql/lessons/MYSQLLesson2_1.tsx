import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson2_1Content: LessonContent = {
  title: 'ណែនាំអំពី SQL (Structured Query Language)',
  objectives: [
    'យល់ដឹងអំពីអ្វីជា SQL និងសារៈសំខាន់របស់វា',
    'ស្វែងយល់អំពីប្រភេទនៃ SQL Commands',
    'ស្វែងយល់អំពី DDL (Data Definition Language)',
    'ស្វែងយល់អំពី DML (Data Manipulation Language)',
    'ស្វែងយល់អំពី DCL (Data Control Language)',
    'ស្វែងយល់អំពី TCL (Transaction Control Language)',
  ],
  content: `
# ណែនាំអំពី SQL (Structured Query Language) 📚

---

**SQL (Structured Query Language)** គឺជាភាសាសម្រាប់ទំនាក់ទំនងជាមួយ Relational Databases។ វាអនុញ្ញាតឱ្យអ្នកបង្កើត គ្រប់គ្រង និងទាញទិន្នន័យពី Database។

---

## 1. អ្វីទៅជា SQL?

SQL គឺជាភាសាស្តង់ដារសម្រាប់ធ្វើការជាមួយ RDBMS ដូចជា MySQL, PostgreSQL, និង SQL Server។

**គោលបំណង:**
- បង្កើត និងកែប្រែ Database Structure
- បញ្ចូល កែប្រែ និងលុបទិន្នន័យ
- ទាញទិន្នន័យតាមលក្ខខណ្ឌជាក់លាក់

**ឧទាហរណ៍:**
\`\`\`sql
SELECT * FROM users;
\`\`\`

---

## 2. ប្រភេទនៃ SQL Commands

SQL Commands ត្រូវបានបែងចែកជា ៤ ប្រភេទសំខាន់ៗ:

### 2.1 DDL (Data Definition Language)
- ប្រើសម្រាប់កំណត់រចនាសម្ព័ន្ធ Database។
- **Commands:**
  - **CREATE**: បង្កើត Database ឬ Table
  - **ALTER**: កែប្រែរចនាសម្ព័ន្ធ
  - **DROP**: លុប Database ឬ Table

**ឧទាហរណ៍:**
\`\`\`sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50)
);
\`\`\`

### 2.2 DML (Data Manipulation Language)
- ប្រើសម្រាប់គ្រប់គ្រងទិន្នន័យនៅក្នុង Table។
- **Commands:**
  - **SELECT**: ទាញទិន្នន័យ
  - **INSERT**: បញ្ចូលទិន្នន័យ
  - **UPDATE**: កែប្រែទិន្នន័យ
  - **DELETE**: លុបទិន្នន័យ

**ឧទាហរណ៍:**
\`\`\`sql
INSERT INTO users (id, name) VALUES (1, 'សុខ');
\`\`\`

### 2.3 DCL (Data Control Language)
- ប្រើសម្រាប់គ្រប់គ្រងសិទ្ធិចូលប្រើ Database។
- **Commands:**
  - **GRANT**: ផ្តល់សិទ្ធិ
  - **REVOKE**: ដកហូតសិទ្ធិ

**ឧទាហរណ៍:**
\`\`\`sql
GRANT SELECT ON users TO 'user1';
\`\`\`

### 2.4 TCL (Transaction Control Language)
- ប្រើសម្រាប់គ្រប់គ្រង Transactions។
- **Commands:**
  - **COMMIT**: រក្សាទុកការផ្លាស់ប្តូរ
  - **ROLLBACK**: លុបចោលការផ្លាស់ប្តូរ

**ឧទាហរណ៍:**
\`\`\`sql
COMMIT;
\`\`\`
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ ប្រើ DDL ដើម្បីបង្កើត Table</h3>
<p>បង្កើត Table <code>students</code> ដើម្បីផ្ទុកព័ត៌មាននិស្សិត។</p>
<pre><code class="language-sql">
CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT
);
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ ប្រើ DML ដើម្បីបញ្ចូលទិន្នន័យ</h3>
<p>បញ្ចូលទិន្នន័យនិស្សិតទៅក្នុង Table <code>students</code>។</p>
<pre><code class="language-sql">
INSERT INTO students (student_id, name, age) VALUES (1, 'សុខ', 20);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ SQL មានន័យដូចម្តេច?',
      options: [
        'Structured Query Language',
        'Simple Query Language',
        'System Query Language',
        'Standard Query Language',
      ],
      correct: 0,
      explanation: 'SQL គឺ Structured Query Language សម្រាប់ទំនាក់ទំនងជាមួយ Database។'
    },
    {
      question: 'តើ DDL មានន័យដូចម្តេច?',
      options: [
        'Data Definition Language',
        'Data Manipulation Language',
        'Data Control Language',
        'Transaction Control Language',
      ],
      correct: 0,
      explanation: 'DDL គឺ Data Definition Language សម្រាប់កំណត់រចនាសម្ព័ន្ធ Database។'
    },
    {
      question: 'តើ Command ណាមួយជា DML?',
      options: [
        'CREATE',
        'SELECT',
        'GRANT',
        'COMMIT',
      ],
      correct: 1,
      explanation: '`SELECT` ជា DML Command សម្រាប់ទាញទិន្នន័យ។'
    },
    {
      question: 'តើ Command `GRANT` ជាផ្នែកនៃអ្វី?',
      options: [
        'DDL',
        'DML',
        'DCL',
        'TCL',
      ],
      correct: 2,
      explanation: '`GRANT` ជា DCL Command សម្រាប់ផ្តល់សិទ្ធិ។'
    },
    {
      question: 'តើ Command `COMMIT` មានតួនាទីអ្វី?',
      options: [
        'លុបទិន្នន័យ',
        'រក្សាទុកការផ្លាស់ប្តូរ',
        'បង្កើត Table',
        'ទាញទិន្នន័យ',
      ],
      correct: 1,
      explanation: '`COMMIT` រក្សាទុកការផ្លាស់ប្តូរក្នុង Transaction។'
    },
    {
      question: 'តើ Command `CREATE` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'កែប្រែទិន្នន័យ',
        'បង្កើត Database ឬ Table',
        'ផ្តល់សិទ្ធិ',
      ],
      correct: 2,
      explanation: '`CREATE` ប្រើសម្រាប់បង្កើត Database ឬ Table។'
    },
    {
      question: 'តើ DML ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់រចនាសម្ព័ន្ធ Database',
        'គ្រប់គ្រងទិន្នន័យ',
        'គ្រប់គ្រងសិទ្ធិ',
        'គ្រប់គ្រង Transactions',
      ],
      correct: 1,
      explanation: 'DML ប្រើសម្រាប់គ្រប់គ្រងទិន្នន័យ។'
    },
    {
      question: 'តើ Command `DROP` ជាផ្នែកនៃអ្វី?',
      options: [
        'DDL',
        'DML',
        'DCL',
        'TCL',
      ],
      correct: 0,
      explanation: '`DROP` ជា DDL Command សម្រាប់លុប Database ឬ Table។'
    },
    {
      question: 'តើ Command `INSERT` មានតួនាទីអ្វី?',
      options: [
        'បញ្ចូលទិន្នន័យ',
        'លុបទិន្នន័យ',
        'កែប្រែរចនាសម្ព័ន្ធ',
        'ផ្តល់សិទ្ធិ',
      ],
      correct: 0,
      explanation: '`INSERT` បញ្ចូលទិន្នន័យទៅក្នុង Table។'
    },
    {
      question: 'តើ TCL មានន័យដូចម្តេច?',
      options: [
        'Table Control Language',
        'Transaction Control Language',
        'Type Control Language',
        'Test Control Language',
      ],
      correct: 1,
      explanation: 'TCL គឺ Transaction Control Language។'
    },
    {
      question: 'តើ Command `REVOKE` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Database',
        'ដកហូតសិទ្ធិ',
        'ទាញទិន្នន័យ',
        'កែប្រែ Table',
      ],
      correct: 1,
      explanation: '`REVOKE` ដកហូតសិទ្ធិពី User។'
    },
    {
      question: 'តើ SQL ប្រើសម្រាប់អ្វី?',
      options: [
        'សរសេរកម្មវិធី Frontend',
        'ទំនាក់ទំនងជាមួយ Database',
        'គ្រប់គ្រង Server',
        'បង្កើត Website',
      ],
      correct: 1,
      explanation: 'SQL ប្រើសម្រាប់ទំនាក់ទំនងជាមួយ Database។'
    },
    {
      question: 'តើ Command `ALTER` ជាផ្នែកនៃអ្វី?',
      options: [
        'DDL',
        'DML',
        'DCL',
        'TCL',
      ],
      correct: 0,
      explanation: '`ALTER` ជា DDL Command សម្រាប់កែប្រែរចនាសម្ព័ន្ធ។'
    },
    {
      question: 'តើ Command `SELECT` មានតួនាទីអ្វី?',
      options: [
        'លុបទិន្នន័យ',
        'ទាញទិន្នន័យ',
        'បង្កើត Table',
        'ផ្តល់សិទ្ធិ',
      ],
      correct: 1,
      explanation: '`SELECT` ទាញទិន្នន័យពី Table។'
    },
    {
      question: 'តើ Command `ROLLBACK` ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុកការផ្លាស់ប្តូរ',
        'លុបចោលការផ្លាស់ប្តូរ',
        'បង្កើត Database',
        'ទាញទិន្នន័យ',
      ],
      correct: 1,
      explanation: '`ROLLBACK` លុបចោលការផ្លាស់ប្តូរក្នុង Transaction។'
    }
  ],
  lab: {
    task: `
សរសេរ SQL Commands ដើម្បីស្វែងយល់អំពីប្រភេទនៃ SQL Commands។

**តម្រូវការ:**

1. **បង្កើត Database:**
   - បង្កើត Database ឈ្មោះ \`test_sql\`។

2. **បង្កើត Table:**
   - បង្កើត Table \`products\` ដែលមាន Columns: \`id\` (INT, PRIMARY KEY), \`name\` (VARCHAR), \`price\` (DECIMAL)។

3. **បញ្ចូលទិន្នន័យ:**
   - បញ្ចូល Record មួយទៅក្នុង \`products\`។

4. **ផ្តល់សិទ្ធិ:**
   - ផ្តល់សិទ្ធិ \`SELECT\` ទៅ User ឈ្មោះ \`test_user\`។

5. **Test:**
   - ប្រើ MySQL Command-Line Client ឬ phpMyAdmin ដើម្បី Run Commands។

**ការណែនាំ:** ពិនិត្យ Syntax នៅក្នុង MySQL Documentation។
    `,
    solution: `
\`\`\`sql
-- DDL: បង្កើត Database
CREATE DATABASE test_sql;
USE test_sql;

-- DDL: បង្កើត Table
CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  price DECIMAL(10,2)
);

-- DML: បញ្ចូលទិន្នន័យ
INSERT INTO products (id, name, price) VALUES (1, 'កាបូប', 29.99);

-- DCL: ផ្តល់សិទ្ធិ
GRANT SELECT ON products TO 'test_user'@'localhost';
\`\`\`
`
  }
};

export default MySQLLesson2_1Content;