import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson6_1Content: LessonContent = {
  title: 'ការភ្ជាប់ MySQL ជាមួយ Node.js',
  objectives: [
    'យល់ដឹងអំពីការភ្ជាប់ MySQL ជាមួយ Node.js',
    'រៀនដំឡើង និងប្រើ Module `mysql2`',
    'រៀនភ្ជាប់ទៅ MySQL Database ពី Node.js',
    'ស្វែងយល់អំពីការប្រតិបត្តិ Queries ដូចជា SELECT, INSERT, UPDATE',
    'រៀនគ្រប់គ្រង Connection Pooling',
    'យល់ពីការដោះស្រាយ Errors នៅក្នុង Node.js',
  ],
  content: `
# ការភ្ជាប់ MySQL ជាមួយ Node.js 📚

---

**Node.js** គឺជា Runtime Environment ដែលអនុញ្ញាតឱ្យអ្នកភ្ជាប់ទៅ MySQL ដើម្បីគ្រប់គ្រងទិន្នន័យ។

---

## 1. ដំឡើង Module mysql2

ប្រើ npm ដើម្បីដំឡើង \`mysql2\`។

**ឧទាហរណ៍:**
\`\`\`bash
npm install mysql2
\`\`\`

---

## 2. ភ្ជាប់ទៅ MySQL

បង្កើត Connection ទៅ MySQL Database។

**ឧទាហរណ៍:**
\`\`\`javascript
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'company_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});
\`\`\`

---

## 3. ប្រតិបត្តិ Queries

**SELECT Query:**
\`\`\`javascript
connection.query('SELECT * FROM employees', (err, results) => {
  if (err) throw err;
  console.log(results);
});
\`\`\`

**INSERT Query:**
\`\`\`javascript
connection.query(
  'INSERT INTO employees (name, dept_id) VALUES (?, ?)',
  ['Sok', 1],
  (err, results) => {
    if (err) throw err;
    console.log('Inserted:', results.affectedRows);
  }
);
\`\`\`

---

## 4. Connection Pooling

**Connection Pooling** ជួយគ្រប់គ្រង Connections ច្រើន។

**ឧទាហរណ៍:**
\`\`\`javascript
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'company_db',
  waitForConnections: true,
  connectionLimit: 10
});

pool.query('SELECT * FROM employees', (err, results) => {
  if (err) throw err;
  console.log(results);
});
\`\`\`

---

## 5. ការដោះស្រាយ Errors

ត្រូវពិនិត្យ Errors នៅពេលភ្ជាប់ ឬប្រតិបត្តិ Query។

**ឧទាហរណ៍:**
\`\`\`javascript
connection.query('SELECT * FROM nonexistent_table', (err, results) => {
  if (err) {
    console.error('Error:', err.message);
    return;
  }
  console.log(results);
});
\`\`\`

**គន្លឹះ:** ប្រើ \`mysql2/promise\` សម្រាប់ Async/Await Syntax ដើម្បីគ្រប់គ្រង Queries កាន់តែងាយស្រួល។
`,
  examples: [
    `### ឧទាហរណ៍៖ ភ្ជាប់ និង Query
ភ្ជាប់ទៅ Database និងទាញទិន្នន័យពី Table \`products\`។
\`\`\`sql
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'shop_db'
});

connection.query('SELECT * FROM products', (err, results) => {
  if (err) throw err;
  console.log(results);
});
\`\`\`
`,
    `### ឧទាហរណ៍៖ បញ្ចូលទិន្នន័យ
បញ្ចូល Record ថ្មីទៅក្នុង Table \`products\`។
\`\`\`sql
connection.query(
  'INSERT INTO products (name, price) VALUES (?, ?)',
  ['Laptop', 1200],
  (err, results) => {
    if (err) throw err;
    console.log('Inserted:', results.affectedRows);
  }
);
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Module ណាដែលប្រើសម្រាប់ភ្ជាប់ MySQL ជាមួយ Node.js?',
      options: ['mysql', 'mysql2', 'sequelize', 'knex'],
      correct: 1,
      explanation: '`mysql2` គឺជា Module ដែលប្រើសម្រាប់ភ្ជាប់ MySQL ជាមួយ Node.js។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីដំឡើង `mysql2`?',
      options: ['npm install mysql2', 'npm add mysql2', 'node install mysql2', 'npm setup mysql2'],
      correct: 0,
      explanation: '`npm install mysql2` ប្រើសម្រាប់ដំឡើង `mysql2`។'
    },
    {
      question: 'តើ Method ណាដែលប្រើដើម្បីភ្ជាប់ទៅ MySQL?',
      options: ['connect()', 'query()', 'createConnection()', 'pool()'],
      correct: 0,
      explanation: '`connect()` ប្រើសម្រាប់ភ្ជាប់ទៅ MySQL។'
    },
    {
      question: 'តើ `createPool` ប្រើសម្រាប់អ្វី?',
      options: ['បង្កើត Database', 'គ្រប់គ្រង Connections ច្រើន', 'ប្រតិបត្តិ Query', 'លុប Database'],
      correct: 1,
      explanation: '`createPool` ប្រើសម្រាប់គ្រប់គ្រង Connections ច្រើន។'
    },
    {
      question: 'តើ Parameter ណាមិនមែនជាផ្នែកនៃ Connection Configuration?',
      options: ['host', 'user', 'password', 'table'],
      correct: 3,
      explanation: '`table` មិនមែនជាផ្នែកនៃ Connection Configuration។'
    },
    {
      question: 'តើ `mysql2/promise` ផ្តល់អត្ថប្រយោជន៍អ្វី?',
      options: ['បង្កើនល្បឿន Query', 'អនុញ្ញាត Async/Await', 'គ្រប់គ្រង Errors', 'បង្កើត Database'],
      correct: 1,
      explanation: '`mysql2/promise` អនុញ្ញាតឱ្យប្រើ Async/Await។'
    },
    {
      question: 'តើការប្រើ `?` នៅក្នុង Query មានន័យដូចម្តេច?',
      options: ['Placeholder សម្រាប់ Parameters', 'Variable សម្រាប់ Query', 'Column ជាក់លាក់', 'Table ជាក់លាក់'],
      correct: 0,
      explanation: '`?` គឺជា Placeholder សម្រាប់ Parameters។'
    },
    {
      question: 'តើ Connection Pooling មានអត្ថប្រយោជន៍អ្វី?',
      options: ['បន្ថយ Connections', 'គ្រប់គ្រង Connections ច្រើនប្រកបដោយប្រសិទ្ធភាព', 'លុប Database', 'បង្កើត Table'],
      correct: 1,
      explanation: 'Connection Pooling គ្រប់គ្រង Connections ច្រើនប្រកបដោយប្រសិទ្ធភាព។'
    },
    {
      question: 'តើ Method `query` ត្រឡប់អ្វី?',
      options: ['Connection Object', 'Results និង Errors', 'Database Structure', 'Table Schema'],
      correct: 1,
      explanation: '`query` ត្រឡប់ Results និង Errors។'
    },
    {
      question: 'តើអ្វីជាគុណវិបត្តិនៃការមិនប្រើ Connection Pooling?',
      options: ['បន្ថយ Performance', 'បង្កើន Connections', 'ប្រើ Memory ច្រើន', 'មិនអាចភ្ជាប់ Database'],
      correct: 2,
      explanation: 'ការមិនប្រើ Connection Pooling អាចប្រើ Memory ច្រើន។'
    },
    {
      question: 'តើអ្នកគួរដោះស្រាយ Errors ដោយរបៀបណា?',
      options: ['មិនអើពើ Errors', 'ពិនិត្យ Errors នៅក្នុង Callback', 'បង្កើត Database ថ្មី', 'លុប Table'],
      correct: 1,
      explanation: 'គួរពិនិត្យ Errors នៅក្នុង Callback។'
    },
    {
      question: 'តើ `waitForConnections` នៅក្នុង Pool Configuration មានន័យដូចម្តេច?',
      options: ['រង់ចាំ Connections ទំនេរ', 'បង្កើត Connection ថ្មី', 'បិទ Connection', 'លុប Database'],
      correct: 0,
      explanation: '`waitForConnections` រង់ចាំ Connections ទំនេរ។'
    },
    {
      question: 'តើ `connectionLimit` កំណត់អ្វី?',
      options: ['ចំនួន Database', 'ចំនួន Connections អតិបរមា', 'ចំនួន Queries', 'ចំនួន Tables'],
      correct: 1,
      explanation: '`connectionLimit` កំណត់ចំនួន Connections អតិបរមា។'
    },
    {
      question: 'តើ Async/Await ធ្វើឱ្យ Code ដូចម្តេច?',
      options: ['ស្មុគស្មាញជាង', 'អានងាយស្រួលជាង', 'លឿនជាង', 'ប្រើ Memory ច្រើន'],
      correct: 1,
      explanation: 'Async/Await ធ្វើឱ្យ Code អានងាយស្រួលជាង។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `mysql2` ដើម្បីប្រតិបត្តិ Query ប្រភេទណា?',
      options: ['SELECT តែប៉ុណ្ណោះ', 'INSERT តែប៉ុណ្ណោះ', 'គ្រប់ប្រភេទ Query', 'UPDATE តែប៉ុណ្ណោះ'],
      correct: 2,
      explanation: '`mysql2` អាចប្រើសម្រាប់គ្រប់ប្រភេទ Query។'
    },
  ],
  lab: {
    task: `
ភ្ជាប់ MySQL ជាមួយ Node.js។

**តម្រូវការ:**

**1. ដំឡើង និងភ្ជាប់:**
   - បង្កើត Project ថ្មី និងដំឡើង \`mysql2\`។
   - ភ្ជាប់ទៅ Database \`shop_db\`។

**2. ប្រតិបត្តិ Queries:**
   - Query \`SELECT * FROM products\` ដើម្បីបង្ហាញទិន្នន័យ។
   - បញ្ចូល Product ថ្មីជាមួយ \`name\` ជា "Phone" និង \`price\` ជា 500។

**3. Test:**
   - បង្ហាញ Results នៃ Query នៅក្នុង Console។
   - ពិនិត្យ Errors ប្រសិនបើមាន។
   - ប្រើ Node.js CLI ឬ VS Code ដើម្បី Run Code។

**ការណែនាំ:** ត្រូវប្រាកដថា MySQL Server កំពុង Run និងមាន Database \`shop_db\`។
    `,
    solution: `
\`\`\`javascript
// app.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'shop_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Connection Error:', err.message);
    return;
  }
  console.log('Connected to MySQL!');
});

// SELECT Query
connection.query('SELECT * FROM products', (err, results) => {
  if (err) {
    console.error('Query Error:', err.message);
    return;
  }
  console.log('Products:', results);
});

// INSERT Query
connection.query(
  'INSERT INTO products (name, price) VALUES (?, ?)',
  ['Phone', 500],
  (err, results) => {
    if (err) {
      console.error('Insert Error:', err.message);
      return;
    }
    console.log('Inserted:', results.affectedRows);
  }
);

connection.end();
\`\`\`
`
  }
};

export default MySQLLesson6_1Content;