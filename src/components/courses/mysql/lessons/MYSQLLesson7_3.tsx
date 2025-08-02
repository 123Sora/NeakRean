import type { LessonContent } from '../../../../types/LessonTypes';

const MySQLLesson7_3Content: LessonContent = {
  title: 'MySQL Backend API',
  objectives: [
    'បង្កើត Backend API ដោយប្រើ Node.js និង MySQL',
    'ភ្ជាប់ MySQL Database ជាមួយ Node.js',
    'បង្កើត RESTful Endpoints សម្រាប់ CRUD Operations',
    'អនុវត្ត Queries ដើម្បីគ្រប់គ្រងទិន្នន័យ',
    'រៀនគ្រប់គ្រង Errors នៅក្នុង API',
    'Test API ដោយប្រើ Postman',
  ],
  content: `
# MySQL Backend API 📚

---

**Backend API** គឺជាចំណុចប្រទាក់សម្រាប់ភ្ជាប់ Frontend ទៅ Database។

---

## 1. រៀបចំ Project

ប្រើ **Node.js** និង **Express** ដើម្បីបង្កើត API។

**ឧទាហរណ៍:**
\`\`\`bash
npm init -y
npm install express mysql2
\`\`\`

---

## 2. ភ្ជាប់ MySQL

**ឧទាហរណ៍:**
\`\`\`javascript
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'api_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});
\`\`\`

---

## 3. បង្កើត RESTful Endpoints

**GET /products** (ទាញផលិតផលទាំងអស់):
\`\`\`javascript
app.get('/products', (req, res) => {
  connection.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
\`\`\`

**POST /products** (បញ្ចូលផលិតផល):
\`\`\`javascript
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  connection.query(
    'INSERT INTO products (name, price) VALUES (?, ?)',
    [name, price],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: results.insertId });
    }
  );
});
\`\`\`

---

## 4. គ្រប់គ្រង Errors

**ឧទាហរណ៍:**
\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
\`\`\`

---

## 5. Test API

ប្រើ **Postman** ដើម្បីTest Endpoints។

**គន្លឹះ:** ប្រើ Prepared Statements ដើម្បីការពារ SQL Injection និង \`.env\` File សម្រាប់ Database Credentials។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ GET Endpoint</h3>
<p>ទាញផលិតផលទាំងអស់ពី Table \`products\`។</p>
<pre><code class="language-javascript">
app.get('/products', (req, res) => {
  connection.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ POST Endpoint</h3>
<p>បញ្ចូលផលិតផលថ្មីទៅក្នុង Table \`products\`</p>
<pre><code class="language-javascript">
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  connection.query(
    'INSERT INTO products (name, price) VALUES (?, ?)',
    [name, price],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: results.insertId });
    }
  );
});
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Express គឺជាអ្វី?',
      options: ['Database', 'Node.js Framework', 'MySQL Module', 'Frontend Library'],
      correct: 1,
      explanation: 'Express គឺជា Node.js Framework សម្រាប់បង្កើត API។'
    },
    {
      question: 'តើ Module ណាដែលប្រើសម្រាប់ភ្ជាប់ MySQL?',
      options: ['express', 'mysql2', 'http', 'fs'],
      correct: 1,
      explanation: '`mysql2` ប្រើសម្រាប់ភ្ជាប់ MySQL។'
    },
    {
      question: 'តើ HTTP Method ណាដែលប្រើសម្រាប់ទាញទិន្នន័យ?',
      options: ['POST', 'GET', 'PUT', 'DELETE'],
      correct: 1,
      explanation: '`GET` ប្រើសម្រាប់ទាញទិន្នន័យ។'
    },
    {
      question: 'តើ HTTP Method ណាដែលប្រើសម្រាប់បញ្ចូលទិន្នន័យ?',
      options: ['POST', 'GET', 'PUT', 'DELETE'],
      correct: 0,
      explanation: '`POST` ប្រើសម្រាប់បញ្ចូលទិន្នន័យ។'
    },
    {
      question: 'តើ Prepared Statements មានអត្ថប្រយោជន៍អ្វី?',
      options: ['បង្កើនល្បឿន API', 'ការពារ SQL Injection', 'បង្កើត Database', 'លុប Table'],
      correct: 1,
      explanation: 'Prepared Statements ការពារ SQL Injection។'
    },
    {
      question: 'តើ Status Code 201 មានន័យដូចម្តេច?',
      options: ['Error', 'Created', 'Not Found', 'Bad Request'],
      correct: 1,
      explanation: 'Status Code 201 មានន័យថា Created។'
    },
    {
      question: 'តើ Status Code 500 បង្ហាញអ្វី?',
      options: ['Success', 'Server Error', 'Not Found', 'Bad Request'],
      correct: 1,
      explanation: 'Status Code 500 បង្ហាញ Server Error។'
    },
    {
      question: 'តើ Postman ប្រើសម្រាប់អ្វី?',
      options: ['បង្កើត Database', 'Test API', 'បង្កើត Table', 'ភ្ជាប់ MySQL'],
      correct: 1,
      explanation: 'Postman ប្រើសម្រាប់Test API។'
    },
    {
      question: 'តើ `req.body` នៅក្នុង Express ផ្ទុកអ្វី?',
      options: ['Query Parameters', 'Request Data', 'Response Data', 'Database Credentials'],
      correct: 1,
      explanation: '`req.body` ផ្ទុក Request Data។'
    },
    {
      question: 'តើ `res.json()` ប្រើសម្រាប់អ្វី?',
      options: ['បញ្ជូន JSON Response', 'បញ្ចូលទិន្នន័យ', 'ភ្ជាប់ Database', 'លុប Record'],
      correct: 0,
      explanation: '`res.json()` បញ្ជូន JSON Response។'
    },
    {
      question: 'តើ `.env` File ប្រើសម្រាប់អ្វី?',
      options: ['ផ្ទុក Database Credentials', 'បង្កើត Table', 'ប្រតិបត្តิ Query', 'Test API'],
      correct: 0,
      explanation: '`.env` File ផ្ទុក Database Credentials។'
    },
    {
      question: 'តើ CRUD មានន័យដូចម្តេច?',
      options: ['Create, Read, Update, Delete', 'Connect, Run, Update, Delete', 'Create, Read, Upload, Download', 'Connect, Read, Update, Drop'],
      correct: 0,
      explanation: 'CRUD មានន័យថា Create, Read, Update, Delete។'
    },
    {
      question: 'តើ Endpoint ណាដែលប្រើសម្រាប់ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      correct: 2,
      explanation: '`PUT` ប្រើសម្រាប់ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ។'
    },
    {
      question: 'តើ Endpoint ណាដែលប្រើសម្រាប់លុបទិន្នន័យ?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      correct: 3,
      explanation: '`DELETE` ប្រើសម្រាប់លុបទិន្នន័យ�।'
    },
    {
      question: 'តើអ្នកគួរដោះស្រាយ Errors នៅក្នុង API ដោយរបៀបណា?',
      options: ['មិនអើពើ Errors', 'បញ្ជូន Status Code និង Error Message', 'បង្កើត Database ថ្មី', 'លុប Table'],
      correct: 1,
      explanation: 'គួរបញ្ជូន Status Code និង Error Message។'
    },
  ],
  lab: {
    task: `
បង្កើត MySQL Backend API។

**តម្រូវការ:**

1. **រៀបចំ Database:**
   - បង្កើត Database \`api_db\` និង Table \`products\` (product_id, name, price)។
   - បញ្ចូល 2 Records សម្រាប់ \`products\`។

2. **បង្កើត API:**
   - បង្កើត Node.js Project ជាមួយ Express។
   - បង្កើត Endpoints:
     - GET \`/products\`: ទាញផលិតផលទាំងអស់។
     - POST \`/products\`: បញ្ចូលផលិតផលថ្មី។

3. **Test:**
   - ប្រើ Postman ដើម្បីTest Endpoints។
   - ពិនិត្យ Errors ប្រសិនបើមាន។

**ការណែនាំ:** ប្រើ Prepared Statements និង \`.env\` File សម្រាប់សុវត្ថិភាព។
    `,
    solution: `
\`\`\`sql
-- បង្កើត Database
CREATE DATABASE api_db;
USE api_db;

-- បង្កើត Table
CREATE TABLE products (
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

-- បញ្ចូលទិន្នន័យ
INSERT INTO products (name, price) VALUES
  ('Laptop', 1200.00),
  ('Phone', 500.00);
\`\`\`

\`\`\`javascript
// app.js
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'api_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

// GET /products
app.get('/products', (req, res) => {
  connection.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// POST /products
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  connection.query(
    'INSERT INTO products (name, price) VALUES (?, ?)',
    [name, price],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: results.insertId });
    }
  );
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`
`
  }
};

export default MySQLLesson7_3Content;