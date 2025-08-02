import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson3_3Content: LessonContent = {
  title: 'SQL Database ជាមួយ Sequelize/Knex.js',
  objectives: [
    'យល់ដឹងពី SQL Databases និង Relational Structure',
    'រៀនប្រើ Sequelize សម្រាប់ភ្ជាប់ SQL Database',
    'ស្វែងយល់ពី Knex.js សម្រាប់ Query Building',
    'អនុវត្ត CRUD Operations ជាមួយ Express និង Sequelize',
  ],
  content: `
# SQL Database ជាមួយ Sequelize/Knex.js 🗃️

---

**SQL Databases** (ឧ. MySQL, PostgreSQL, SQLite) ប្រើ Tables ដើម្បីរក្សាទុកទិន្នន័យ។ **Sequelize** ជា ORM សម្រាប់ SQL Databases និង **Knex.js** ជា Query Builder។ នៅក្នុងមេរៀននេះ យើងនឹងផ្តោតលើ Sequelize សម្រាប់ CRUD Operations។

---

## 1. SQL Databases និង Relational Structure

SQL Databases ប្រើ **Tables** ដែលមាន Relationships (Primary Key, Foreign Key)។

**ឧទាហរណ៍ Table:**
\`\`\`sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
\`\`\`

---

## 2. ការប្រើ Sequelize

**Sequelize** ជា ORM ដែលសម្រួលការធ្វើការជាមួយ SQL Databases។

**ជំហាន:**
1. ដំឡើង Sequelize និង Driver: \`npm install sequelize sqlite3\`
2. ភ្ជាប់ Database។
3. បង្កើត Model។

**ឧទាហរណ៍:**
\`\`\`javascript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false }
});
\`\`\`

---

## 3. Knex.js សម្រាប់ Query Building

**Knex.js** ជា Query Builder ដែលសម្រួលការសរសេរ SQL Queries។

**ឧទាហរណ៍:**
\`\`\`javascript
const knex = require('knex')({
  client: 'sqlite3',
  connection: { filename: ':memory:' }
});

knex('users').select('*').then(users => console.log(users));
\`\`\`

---

## 4. CRUD Operations ជាមួយ Sequelize

### Create
\`\`\`javascript
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});
\`\`\`

### Read
\`\`\`javascript
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});
\`\`\`

### Update
\`\`\`javascript
app.put('/users/:id', async (req, res) => {
  const user = await User.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'User ត្រូវបានធ្វើបច្ចុប្បន្នភាព' });
});
\`\`\`

### Delete
\`\`\`javascript
app.delete('/users/:id', async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.json({ message: 'User ត្រូវបានលុប' });
});
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Sequelize និង Knex.js

- **Sequelize:** ប្រើសម្រាប់ ORM និង Complex Relationships។
- **Knex.js:** ប្រើសម្រាប់ Raw Queries ឬ Simple Projects។
- **Handle Errors:** ប្រើ try-catch សម្រាប់ Async Operations។
- **អាន Documentation:** [sequelize.org](https://sequelize.org), [knexjs.org](https://knexjs.org)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បង្កើត User Model ជាមួយ Sequelize</h3>
<p>បង្កើត Model សម្រាប់ User។</p>
<pre><code class="language-javascript">
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false }
});
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ CRUD API ជាមួយ Sequelize</h3>
<p>បង្កើត API សម្រាប់ CRUD Operations។</p>
<pre><code class="language-javascript">
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
app.use(express.json());

const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', { name: DataTypes.STRING });

app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.listen(3000);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ SQL Databases ប្រើអ្វីសម្រាប់រចនាសម្ព័ន្ធ?',
      options: ['Documents', 'Tables', 'Key-Value Pairs', 'Graphs'],
      correct: 1,
      explanation: 'SQL Databases ប្រើ Tables ជាមួយ Rows និង Columns�।'
    },
    {
      question: 'តើ Sequelize ជាអ្វី?',
      options: ['ODM', 'ORM', 'Query Builder', 'Middleware'],
      correct: 1,
      explanation: 'Sequelize ជា ORM សម្រាប់ SQL Databases។'
    },
    {
      question: 'តើ Knex.js មានតួនាទីអ្វី?',
      options: ['Parse JSON', 'Query Builder', 'Serve Files', 'Log Requests'],
      correct: 1,
      explanation: 'Knex.js ជា Query Builder សម្រាប់ SQL Databases។'
    },
    {
      question: 'តើ SQLite ជា Database ប្រភេទណា?',
      options: ['NoSQL', 'Relational', 'Key-Value', 'Graph'],
      correct: 1,
      explanation: 'SQLite ជា Relational Database។'
    },
    {
      question: 'តើ Method ណាមួយប្រើសម្រាប់ Create Record ក្នុង Sequelize?',
      options: ['findAll()', 'create()', 'update()', 'destroy()'],
      correct: 1,
      explanation: '`create()` ប្រើសម្រាប់ Create Record។'
    },
    {
      question: 'តើ `User.findAll()` ធ្វើអ្វី?',
      options: ['បង្កើត Record', 'ទាញ Records ទាំងអស់', 'ធ្វើបច្ចុប្បន្នភាព', 'លុប Record'],
      correct: 1,
      explanation: '`User.findAll()` ទាញ Records ទាំងអស់។'
    },
    {
      question: 'តើ Middleware ណាមួយត្រូវការដើម្បី Parse `req.body`?',
      options: ['express.static()', 'express.json()', 'morgan()', 'express.router()'],
      correct: 1,
      explanation: '`express.json()` Parse JSON Request Body។'
    },
    {
      question: 'តើ Sequelize គាំទ្រ Database ណាមួយ?',
      options: ['MongoDB', 'MySQL', 'Redis', 'DynamoDB'],
      correct: 1,
      explanation: 'Sequelize គាំទ្រ MySQL (Relational Database)។'
    },
    {
      question: 'តើ `User.destroy()` ប្រើសម្រាប់អ្វី?',
      options: ['បង្កើត Record', 'ទាញ Record', 'លុប Record', 'ធ្វើបច្ចុប្បន្នភាព'],
      correct: 2,
      explanation: '`User.destroy()` លុប Record។'
    },
    {
      question: 'តើ Knex.js ស័ក្តិសមសម្រាប់អ្វី?',
      options: ['Complex Relationships', 'Raw SQL Queries', 'NoSQL Databases', 'Static Files'],
      correct: 1,
      explanation: 'Knex.js ស័ក្តិសមសម្រាប់ Raw SQL Queries។'
    },
    {
      question: 'តើ SQL Databases មានគុណសម្បត្តិអ្វី?',
      options: ['Flexibility', 'Strong Consistency', 'Unstructured Data', 'No Schema'],
      correct: 1,
      explanation: 'SQL Databases មាន Strong Consistency។'
    },
    {
      question: 'តើ `sequelize.define()` ប្រើសម្រាប់អ្វី?',
      options: ['ភ្ជាប់ Database', 'បង្កើត Model', 'ទាញ Records', 'លុប Table'],
      correct: 1,
      explanation: '`sequelize.define()` បង្កើត Model។'
    },
    {
      question: 'តើ Async/Await ត្រូវបានប្រើជាមួយ Sequelize ដែរឬទេ?',
      options: ['បាន', 'មិនបាន', 'បាន ប៉ុន្តែតែនៅ Production', 'មិនបាន ព្រោះជា NoSQL'],
      correct: 0,
      explanation: 'Async/Await ត្រូវបានប្រើជាមួយ Sequelize សម្រាប់ Async Operations។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ដែលប្រើ Sequelize សម្រាប់ CRUD Operations។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-sequelize\`។
   - ប្រើ \`npm init -y\` ដើម្បីបង្កើត \`package.json\`។
   - ដំឡើង Express.js និង Sequelize: \`npm install express sequelize sqlite3\`។

2. **ភ្ជាប់ SQLite:**
   - បង្កើត File: \`app.js\`។
   - ភ្ជាប់ SQLite Database (Memory Database: \`sqlite::memory:\`)។
   - បង្កើត Model \`User\` ជាមួយ Fields: \`name\` (String, required), \`email\` (String, required)។
   - Sync Database ដោយ \`sequelize.sync()\`។

3. **បង្កើត CRUD Routes:**
   - Route \`/users\` (POST): បង្កើត User ថ្មី, ឆ្លើយតប JSON នៃ User។
   - Route \`/users\` (GET): ទាញ Users ទាំងអស់, ឆ្លើយតប JSON Array។
   - Route \`/users/:id\` (PUT): Update User ដោយ ID, ឆ្លើយតប \`{ message: "User ត្រូវបានធ្វើបច្ចុប្បន្នភាព" }\`។
   - Route \`/users/:id\` (DELETE): លុប User ដោយ ID, ឆ្លើយតប \`{ message: "User ត្រូវបានលុប" }\`។

4. **Test Application:**
   - Run \`node app.js\`។
   - ប្រើ Postman:
     - POST \`/users\` ជាមួយ Body \`{ "name": "Chan", "email": "chan@example.com" }\`
     - GET \`/users\`
     - PUT \`/users/[id]\` ជាមួយ Body \`{ "name": "Chan Updated" }\`
     - DELETE \`/users/[id]\`

**ការណែនាំ:** ប្រើ \`nodemon\` និង try-catch សម្រាប់ Error Handling។
    `,
    solution: `
\`\`\`text
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
app.use(express.json());

const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false }
});

sequelize.sync()
  .then(() => console.log('Database Synced'))
  .catch(err => console.error('Sync Error:', err));

app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const [updated] = await User.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'User មិនមាន' });
    res.json({ message: 'User ត្រូវបានធ្វើបច្ចុប្បន្នភាព' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'User មិនមាន' });
    res.json({ message: 'User ត្រូវបានលុប' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`
`
  }
};

export default ExpressLesson3_3Content;