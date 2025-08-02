import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson4_1Content: LessonContent = {
  title: 'ណែនាំអំពី Databases',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Databases និងប្រភេទរបស់វា',
    'ស្វែងយល់អំពី Relational និង NoSQL Databases',
    'រៀនអំពីការប្រើ Databases ជាមួយ Express.js',
    'ស្គាល់ Database Operations ដូចជា CRUD',
    'អនុវត្តការភ្ជាប់ Database នៅក្នុង Web Applications'
  ],
  content: `
# ណែនាំអំពី Databases 📚

---

## 1. តើ Database ជាអ្វី? 🤔

* **និយមន័យ:** **Database** ជាកន្លែងផ្ទុកទិន្នន័យដែលរៀបចំជាប្រព័ន្ធ ដើម្បីងាយស្រួលរកមើល និងគ្រប់គ្រង។
* **ឧទាហរណ៍:** ផ្ទុកទិន្នន័យអ្នកប្រើប្រាស់ (Users) ឬផលិតផល (Products)។
* **អត្ថប្រយោជន៍:** ធ្វើឱ្យការគ្រប់គ្រងទិន្នន័យមានប្រសិទ្ធភាព។

---

## 2. ប្រភេទនៃ Databases 🌟

* **Relational Databases (SQL):**
    * ប្រើ **Tables** ដែលមាន Rows និង Columns។
    * ឧទាហរណ៍: MySQL, PostgreSQL, SQLite។
    * ប្រើ **SQL (Structured Query Language)** សម្រាប់ Queries។
* **NoSQL Databases:**
    * មិនប្រើ Tables ទេ ប៉ុន្តែប្រើ **Documents, Key-Value,** ឬ **Graphs**។
    * ឧទាហរណ៍: MongoDB, Redis, DynamoDB។
    * ស័ក្តិសមសម្រាប់ទិន្នន័យមិនទៀងទាត់។

---

## 3. Database Operations (CRUD) 🛠️

* **CRUD:**
    * **Create:** បន្ថែមទិន្នន័យ (ឧ. បញ្ចូល User ថ្មី)។
    * **Read:** ទាញទិន្នន័យ (ឧ. ទាញ List នៃ Users)។
    * **Update:** កែប្រែទិន្នន័យ (ឧ. ផ្លាស់ប្តូរ Username)។
    * **Delete:** លុបទិន្នន័យ (ឧ. លុប User)។
* **ឧទាហរណ៍:** RESTful API ប្រើ CRUD Operations សម្រាប់ \`/users\`។

---

## 4. ការប្រើ Databases ជាមួយ Express.js ⚙️

* **ជំហាន:**
    1.  ដំឡើង **Database Driver** (ឧ. \`mongoose\` សម្រាប់ MongoDB, \`sequelize\` សម្រាប់ SQL)។
    2.  ភ្ជាប់ Database នៅក្នុង Express App។
    3.  បង្កើត Routes សម្រាប់ CRUD Operations។
* **ឧទាហរណ៍:** បង្កើត Route \`/users\` ដើម្បីទាញ User Data។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📂

* **Relational Database:** ប្រើ SQLite ដើម្បីផ្ទុក User Data ក្នុង Table។
* **NoSQL Database:** ប្រើ MongoDB ដើម្បីផ្ទុក Documents។
* **RESTful API:** បង្កើត API សម្រាប់ CRUD Operations។

---
> **គន្លឹះ:** ជ្រើសរើស Database ដែលសមស្របនឹង Project របស់អ្នក (SQL សម្រាប់ Structured Data, NoSQL សម្រាប់ Flexible Data)។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត SQLite Database

បង្កើត File \`sqlite-example.js\` (ប្រើ \`sqlite3\`):

\`\`\`javascript
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE users (id INT, name TEXT)');
  db.run('INSERT INTO users (id, name) VALUES (?, ?)', [1, 'Sokha']);
  db.get('SELECT * FROM users WHERE id = ?', [1], (err, row) => {
    console.log(row); // { id: 1, name: 'Sokha' }
  });
});

db.close();
\`\`\`

ដំណើរការ File:

\`\`\`bash
node sqlite-example.js
\`\`\`

**លទ្ធផល**:
* Console: \`{ id: 1, name: "Sokha" }\`

# ឧទាហរណ៍ ២: បង្កើត MongoDB Database

បង្កើត File \`mongo-example.js\` (ប្រើ \`mongodb\`):

\`\`\`javascript
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

async function run() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('users');
    await collection.insertOne({ id: 1, name: 'Sokha' });
    const user = await collection.findOne({ id: 1 });
    console.log(user); // { _id: ..., id: 1, name: 'Sokha' }
  } finally {
    await client.close();
  }
}

run().catch(console.error);
\`\`\`

ដំណើរការ File (តម្រូវឱ្យ MongoDB Server ដំណើរការ):

\`\`\`bash
node mongo-example.js
\`\`\`

**លទ្ធផល**:
* Console: \`{ _id: ..., id: 1, name: "Sokha" }\`

# ឧទាហរណ៍ ៣: Express.js ជាមួយ SQLite

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE users (id INT, name TEXT)');
  db.run('INSERT INTO users (id, name) VALUES (?, ?)', [1, 'Sokha']);
});

app.get('/users/:id', (req, res) => {
  db.get('SELECT * FROM users WHERE id = ?', [req.params.id], (err, row) => {
    if (err || !row) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(row);
    }
  });
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/users/1\` → JSON: \`{ id: 1, name: "Sokha" }\`
* \`http://localhost:3000/users/2\` → JSON: \`{ error: "User not found" }\`
`
  ],
  quiz: [
    {
      question: 'តើ Database ជាអ្វី?',
      options: [
        'Tool សម្រាប់បង្កើត Routes',
        'កន្លែងផ្ទុកទិន្នន័យដែលរៀបចំជាប្រព័ន្ធ',
        'Module សម្រាប់ Templating',
        'Middleware សម្រាប់ Parsing'
      ],
      correct: 1,
      explanation: 'Database ជាកន្លែងផ្ទុកទិន្នន័យដែលរៀបចំជាប្រព័ន្ធ ដើម្បីងាយស្រួលគ្រប់គ្រង។'
    },
    {
      question: 'តើ Relational Database ប្រើអ្វីជាឯកត្តាផ្ទុកទិន្នន័យ?',
      options: ['Documents', 'Tables', 'Key-Value Pairs', 'Graphs'],
      correct: 1,
      explanation: 'Relational Databases ប្រើ Tables ដែលមាន Rows និង Columns។'
    },
    {
      question: 'តើ NoSQL Database ស័ក្តិសមសម្រាប់អ្វី?',
      options: [
        'ទិន្នន័យទៀងទាត់',
        'ទិន្នន័យមិនទៀងទាត់',
        'ទិន្នន័យតែមួយប្រភេទ',
        'ទិន្នន័យតូចៗ'
      ],
      correct: 1,
      explanation: 'NoSQL Databases ស័ក្តិសមសម្រាប់ទិន្នន័យមិនទៀងទាត់ ដូចជា Documents។'
    },
    {
      question: 'តើ CRUD តំណាងឱ្យអ្វី?',
      options: [
        'Create, Read, Update, Delete',
        'Connect, Retrieve, Update, Destroy',
        'Create, Render, Update, Drop',
        'Call, Read, Upgrade, Delete'
      ],
      correct: 0,
      explanation: 'CRUD តំណាងឱ្យ Create, Read, Update, Delete។'
    },
    {
      question: 'តើឧទាហរណ៍នៃ Relational Database មួយណា?',
      options: ['MongoDB', 'Redis', 'SQLite', 'DynamoDB'],
      correct: 2,
      explanation: 'SQLite ជា Relational Database ដែលប្រើ Tables។'
    },
    {
      question: 'តើឧទាហរណ៍នៃ NoSQL Database មួយណា?',
      options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
      correct: 2,
      explanation: 'MongoDB ជា NoSQL Database ដែលប្រើ Documents។'
    },
    {
      question: 'តើ SQL ជាអ្វី?',
      options: [
        'Structured Query Language',
        'Simple Query Language',
        'System Query Language',
        'Standard Query Library'
      ],
      correct: 0,
      explanation: 'SQL ជា Structured Query Language សម្រាប់ Relational Databases។'
    },
    {
      question: 'តើ Operation ណាក្នុង CRUD ប្រើសម្រាប់បន្ថែមទិន្នន័យ?',
      options: ['Read', 'Update', 'Create', 'Delete'],
      correct: 2,
      explanation: 'Create ប្រើសម្រាប់បន្ថែមទិន្នន័យថ្មី។'
    },
    {
      question: 'តើ Database Driver អ្វីត្រូវបានប្រើសម្រាប់ MongoDB?',
      options: ['sequelize', 'mongoose', 'sqlite3', 'knex'],
      correct: 1,
      explanation: '`mongoose` ជា Driver សម្រាប់ MongoDB នៅក្នុង Node.js។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជ្យនៃ Database?',
      options: [
        'បង្កើត Dynamic HTML',
        'ធ្វើឱ្យការគ្រប់គ្រងទិន្នន័យមានប្រសិទ្ធភាព',
        'បម្រើ Static Files',
        'គ្រប់គ្រង Routes'
      ],
      correct: 1,
      explanation: 'Database ធ្វើឱ្យការគ្រប់គ្រងទិន្នន័យមានប្រសិទ្ធភាព។'
    },
    {
      question: 'តើ RESTful API ប្រើ Database Operations ដោយរបៀបណា?',
      options: [
        'បម្រើ Static Files',
        'អនុវត្ត CRUD Operations',
        'បង្កើត Templates',
        'គ្រប់គ្រង Middleware'
      ],
      correct: 1,
      explanation: 'RESTful API ប្រើ CRUD Operations សម្រាប់ទិន្នន័យ។'
    },
    {
      question: 'តើ Database ណាដែលស័ក្តិសមសម្រាប់ Structured Data?',
      options: ['MongoDB', 'Redis', 'MySQL', 'DynamoDB'],
      correct: 2,
      explanation: 'MySQL ជា Relational Database ស័ក្តិសមសម្រាប់ Structured Data។'
    },
    {
      question: 'តើជំហានដំបូងដើម្បីប្រើ Database ជាមួយ Express.js គឺជាអ្វី?',
      options: [
        'បង្កើត Routes',
        'ដំឡើង Database Driver',
        'កំណត់ Templating Engine',
        'បម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'តម្រូវឱ្យដំឡើង Database Driver (ឧ. `mongoose`, `sequelize`) មុននឹងភ្ជាប់ Database។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: ណែនាំអំពី Databases

គោលបំណង: អនុវត្តការបង្កើត Database និង CRUD Operations ជាមួយ SQLite។

1. **បង្កើត SQLite Database**:
    * បង្កើត Folder \`db-app\` និង Initialize npm:
      \`\`\`bash
      mkdir db-app
      cd db-app
      npm init -y
      npm install express sqlite3
      \`\`\`
    * បង្កើត File \`server.js\`:
      \`\`\`javascript
      const express = require('express');
      const sqlite3 = require('sqlite3').verbose();
      const app = express();
      const port = 3000;
      const db = new sqlite3.Database(':memory:');

      db.serialize(() => {
        db.run('CREATE TABLE users (id INT, name TEXT)');
        db.run('INSERT INTO users (id, name) VALUES (?, ?)', [1, 'Sokha']);
      });

      app.get('/users/:id', (req, res) => {
        db.get('SELECT * FROM users WHERE id = ?', [req.params.id], (err, row) => {
          if (err || !row) {
            res.status(404).json({ error: 'User not found' });
          } else {
            res.json(row);
          }
        });
      });

      app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
      \`\`\`
    * ដំណើរការ File:
      \`\`\`bash
      node server.js
      \`\`\`
    * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/users/1\`។

2. **បន្ថែម CRUD Operations**:
    * បន្ថែម Routes សម្រាប់ Create, Update, Delete នៅក្នុង \`server.js\`:
      \`\`\`javascript
      app.use(express.json()); // Add this line to parse JSON request bodies

      app.post('/users', (req, res) => {
        const { id, name } = req.body;
        db.run('INSERT INTO users (id, name) VALUES (?, ?)', [id, name], function(err) {
          if (err) {
            res.status(400).json({ error: 'Error creating user' });
          } else {
            res.status(201).json({ id, name });
          }
        });
      });

      app.put('/users/:id', (req, res) => {
        const { name } = req.body;
        db.run('UPDATE users SET name = ? WHERE id = ?', [name, req.params.id], function(err) {
          if (err || this.changes === 0) {
            res.status(404).json({ error: 'User not found' });
          } else {
            res.json({ id: req.params.id, name });
          }
        });
      });

      app.delete('/users/:id', (req, res) => {
        db.run('DELETE FROM users WHERE id = ?', [req.params.id], function(err) {
          if (err || this.changes === 0) {
            res.status(404).json({ error: 'User not found' });
          } else {
            res.json({ message: 'User deleted' });
          }
        });
      });
      \`\`\`
    * ដំណើរការ File ឡើងវិញ:
      \`\`\`bash
      node server.js
      \`\`\`
    * ត្រួតពិនិត្យលទ្ធផលដោយបញ្ជូន POST, PUT, DELETE Requests (ប្រើ Postman):
      * POST \`/users\` ជាមួយ Body \`{ "id": 2, "name": "Rithy" }\`
      * PUT \`/users/2\` ជាមួយ Body \`{ "name": "Rithy Updated" }\`
      * DELETE \`/users/2\`

3. **ចែករំលែកលទ្ធផល**:
    * កត់សម្គាល់លទ្ធផលនៃ Create, Read, Update, Delete Operations។
`,
    solution: `
# ដំណោះស្រាយ៖ ណែនាំអំពី Databases

## ជំហានទី ១: SQLite Database និង CRUD Operations
* **server.js**:
    \`\`\`javascript
    const express = require('express');
    const sqlite3 = require('sqlite3').verbose();
    const app = express();
    const port = 3000;
    const db = new sqlite3.Database(':memory:');

    app.use(express.json()); // Middleware to parse JSON request bodies

    db.serialize(() => {
      db.run('CREATE TABLE users (id INT, name TEXT)');
      db.run('INSERT INTO users (id, name) VALUES (?, ?)', [1, 'Sokha']);
    });

    // Read operation
    app.get('/users/:id', (req, res) => {
      db.get('SELECT * FROM users WHERE id = ?', [req.params.id], (err, row) => {
        if (err || !row) {
          res.status(404).json({ error: 'User not found' });
        } else {
          res.json(row);
        }
      });
    });

    // Create operation
    app.post('/users', (req, res) => {
      const { id, name } = req.body;
      db.run('INSERT INTO users (id, name) VALUES (?, ?)', [id, name], function(err) {
        if (err) {
          res.status(400).json({ error: 'Error creating user' });
        } else {
          res.status(201).json({ id: this.lastID || id, name }); // Use this.lastID for auto-incrementing IDs
        }
      });
    });

    // Update operation
    app.put('/users/:id', (req, res) => {
      const { name } = req.body;
      db.run('UPDATE users SET name = ? WHERE id = ?', [name, req.params.id], function(err) {
        if (err || this.changes === 0) {
          res.status(404).json({ error: 'User not found or no changes made' });
        } else {
          res.json({ id: req.params.id, name });
        }
      });
    });

    // Delete operation
    app.delete('/users/:id', (req, res) => {
      db.run('DELETE FROM users WHERE id = ?', [req.params.id], function(err) {
        if (err || this.changes === 0) {
          res.status(404).json({ error: 'User not found' });
        } else {
          res.json({ message: 'User deleted successfully' });
        }
      });
    });

    app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
    \`\`\`
* លទ្ធផល:
    \`\`\`bash
    node server.js
    # Output: Server running at http://localhost:3000
    \`\`\`
    * \`http://localhost:3000/users/1\` → JSON: \`{ id: 1, name: "Sokha" }\`
    * POST \`/users\` (Postman) ជាមួយ Body \`{ "id": 2, "name": "Rithy" }\` → JSON: \`{ id: 2, name: "Rithy" }\`
    * PUT \`/users/2\` ជាមួយ Body \`{ "name": "Rithy Updated" }\` → JSON: \`{ id: "2", name: "Rithy Updated" }\`
    * DELETE \`/users/2\` → JSON: \`{ message: "User deleted successfully" }\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Create**: បន្ថែម User ថ្មីជាមួយ \`POST /users\`។
* **Read**: ទាញ User ជាមួយ \`GET /users/:id\`។
* **Update**: កែប្រែ User ជាមួយ \`PUT /users/:id\`។
* **Delete**: លុប User ជាមួយ \`DELETE /users/:id\`។
`
  }
};

export default NodeJSLesson4_1Content;