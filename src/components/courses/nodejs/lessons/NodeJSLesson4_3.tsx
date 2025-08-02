import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson4_3Content: LessonContent = {
  title: 'SQL Databases ជាមួយ Sequelize',
  objectives: [
    'យល់ដឹងអំពី SQL Databases និង ORM',
    'ស្វែងយល់ពីការប្រើ Sequelize សម្រាប់ SQL Databases',
    'រៀនបង្កើត Model និង Table ជាមួយ Sequelize',
    'អនុវត្ត CRUD Operations ជាមួយ Sequelize',
    'បង្កើត RESTful API ជាមួយ Express.js និង Sequelize'
  ],
  content: `
# SQL Databases ជាមួយ Sequelize 📋

---

## 1. តើ SQL Databases និង Sequelize ជាអ្វី? 🤔

* **SQL Databases:** Relational Databases ដែលប្រើ **Tables** និង **SQL Queries** (ឧ. SQLite, MySQL, PostgreSQL)។
* **Sequelize:** **ORM** (Object-Relational Mapping) Library សម្រាប់ Node.js ដែលសម្រួលការធ្វើការជាមួយ SQL Databases។
* **អត្ថប្រយោជន៍:** Sequelize ផ្តល់ **Model-based Queries** និង **Auto-generated SQL**។

---

## 2. ការភ្ជាប់ SQL Database ជាមួយ Sequelize 🛠️

* **ជំហាន:**
    1.  ដំឡើង Sequelize និង Database Driver: \`npm install sequelize sqlite3\`។
    2.  ភ្ជាប់ Database: \`new Sequelize('sqlite::memory:')\`។
    3.  បង្កើត Model និង Sync Tables។
* **ឧទាហរណ៍:** ប្រើ SQLite In-memory Database សម្រាប់ភាពងាយស្រួល។

---

## 3. ការបង្កើត Model និង Table 🌟

* **Model:** កំណត់ **Structure** នៃ Table (ឧ. Fields និង Data Types)។
* **Sync:** បង្កើត Table ក្នុង Database ដោយផ្អែកលើ Model។
* **Syntax:**
    \`\`\`javascript
    const User = sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING
    });
    await sequelize.sync();
    \`\`\`

---

## 4. CRUD Operations ជាមួយ Sequelize ⚙️

* **Create:** \`User.create({ id: 1, name: 'Sokha' })\`
* **Read:** \`User.findAll()\` ឬ \`User.findOne({ where: { id: 1 } })\`
* **Update:** \`User.update({ name: 'Sokha Updated' }, { where: { id: 1 } })\`
* **Delete:** \`User.destroy({ where: { id: 1 } })\`
* **Async/Await:** ប្រើ \`async/await\` សម្រាប់ Queries។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📂

* **RESTful API:** បង្កើត API សម្រាប់ CRUD Operations លើ Users។
* **Validation:** ប្រើ Model Validation ដើម្បីធានាថា Data ត្រឹមត្រូវ។

---
> **គន្លឹះ:** ប្រើ SQLite សម្រាប់ Testing ព្រោះវាមិនតម្រូវឱ្យមាន Database Server។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Model និង Create User

បង្កើត File \`sequelize-create.js\`:

\`\`\`javascript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Using an in-memory SQLite database

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Added autoIncrement for primary key
  name: { type: DataTypes.STRING, allowNull: false } // Added allowNull for validation
});

async function createUser() {
  try {
    await sequelize.authenticate(); // Test the connection
    console.log('Connection to database established successfully.');
    await sequelize.sync({ force: true }); // This will drop existing tables and recreate them
    console.log('Database synchronized.');

    const newUser = await User.create({ name: 'Sokha' }); // 'id' will be auto-generated
    console.log('User created:', newUser.toJSON());
  } catch (error) {
    console.error('Unable to connect to the database or create user:', error);
  } finally {
    await sequelize.close(); // Close the connection when done
  }
}

createUser();
\`\`\`

ដំណើរការ File:

\`\`\`bash
node sequelize-create.js
\`\`\`

**លទ្ធផល**:
* Console: \`Connection to database established successfully.\`
* Console: \`Database synchronized.\`
* Console: \`User created: { id: 1, name: "Sokha", createdAt: "...", updatedAt: "..." }\` (Output may vary slightly)

# ឧទាហរណ៍ ២: RESTful API ជាមួយ Sequelize

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

const sequelize = new Sequelize('sqlite::memory:'); // Using an in-memory SQLite database

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false }
});

// Sync database on startup
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    await sequelize.sync({ force: true }); // Drops existing tables and recreates them
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// CREATE a new user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ a user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* \`Server running at http://localhost:3000\`
* \`Database connection has been established successfully.\`
* \`Database synchronized.\`
* POST \`/users\` (Postman) ជាមួយ Body \`{ "name": "Sokha" }\` → JSON: \`{ "id": 1, "name": "Sokha", "createdAt": "...", "updatedAt": "..." }\`
* \`http://localhost:3000/users/1\` → JSON: \`{ "id": 1, "name": "Sokha", "createdAt": "...", "updatedAt": "..." }\`

# ឧទាហរណ៍ ៣: Update និង Delete Users

បន្ថែម Routes នៅក្នុង \`server.js\`:

\`\`\`javascript
// UPDATE a user by ID
app.put('/users/:id', async (req, res) => {
  try {
    const [updatedRows] = await User.update({ name: req.body.name }, { where: { id: req.params.id } });
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'User not found or no changes made' });
    }
    const user = await User.findOne({ where: { id: req.params.id } });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const deletedRows = await User.destroy({ where: { id: req.params.id } });
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
\`\`\`

ដំណើរការ File ឡើងវិញ:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* PUT \`/users/1\` (Postman) ជាមួយ Body \`{ "name": "Sokha Updated" }\` → JSON: \`{ "id": 1, "name": "Sokha Updated", "createdAt": "...", "updatedAt": "..." }\`
* DELETE \`/users/1\` → JSON: \`{ "message": "User deleted successfully" }\`
`
  ],
  quiz: [
    {
      question: 'តើ Sequelize ជាអ្វី?',
      options: [
        'NoSQL Database',
        'ORM Library សម្រាប់ SQL Databases',
        'ODM Library សម្រាប់ MongoDB',
        'Middleware សម្រាប់ Express'
      ],
      correct: 1,
      explanation: 'Sequelize ជា **ORM Library** សម្រាប់ SQL Databases ដូចជា SQLite។'
    },
    {
      question: 'តើ SQL Database ប្រើអ្វីជាឯកត្តាផ្ទុកទិន្នន័យ?',
      options: ['Documents', 'Tables', 'Key-Value Pairs', 'Graphs'],
      correct: 1,
      explanation: 'SQL Databases ប្រើ **Tables** ដែលមាន Rows និង Columns។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីដំឡើង Sequelize?',
      options: [
        'npm install mongoose',
        'npm install sequelize sqlite3',
        'npm install mongodb',
        'npm install express'
      ],
      correct: 1,
      explanation: '`npm install sequelize sqlite3` ប្រើសម្រាប់ដំឡើង Sequelize និង SQLite Driver។'
    },
    {
      question: 'តើ Model ក្នុង Sequelize ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Structure នៃ Table',
        'បង្កើត Routes',
        'បម្រើ Static Files',
        'គ្រប់គ្រង Middleware'
      ],
      correct: 0,
      explanation: 'Model កំណត់ **Structure** នៃ Table ដូចជា Fields និង Data Types។'
    },
    {
      question: 'តើ `sequelize.sync()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជូន JSON Response',
        'បង្កើត Table ក្នុង Database',
        'ភ្ជាប់ MongoDB',
        'បម្រើ Static Files'
      ],
      correct: 1,
      explanation: '`sequelize.sync()` បង្កើត Table ក្នុង Database ដោយផ្អែកលើ Model។'
    },
    {
      question: 'តើ Method ណាដែលប្រើសម្រាប់ Create Record ក្នុង Sequelize?',
      options: [
        'User.findOne()',
        'User.create()',
        'User.update()',
        'User.destroy()'
      ],
      correct: 1,
      explanation: '`User.create()` ប្រើសម្រាប់បង្កើត Record ថ្មី។'
    },
    {
      question: 'តើ Method ណាដែលប្រើសម្រាប់ Read Record មួយ?',
      options: [
        'User.create()',
        'User.findOne()',
        'User.update()',
        'User.destroy()'
      ],
      correct: 1,
      explanation: '`User.findOne()` ប្រើសម្រាប់ទាញ Record មួយ។'
    },
    {
      question: 'តើ SQLite ជា Database ប្រភេទណា?',
      options: [
        'NoSQL Database',
        'Relational Database',
        'Key-Value Database',
        'Graph Database'
      ],
      correct: 1,
      explanation: 'SQLite ជា **Relational Database** ដែលប្រើ Tables។'
    },
    {
      question: 'តើ `Sequelize` ប្រើ Database Driver អ្វីសម្រាប់ SQLite?',
      options: [
        'mongoose',
        'sqlite3',
        'mongodb',
        'knex'
      ],
      correct: 1,
      explanation: '`sqlite3` ជា Driver សម្រាប់ SQLite នៅក្នុង Sequelize។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Sequelize?',
      options: [
        'បម្រើ Static Files',
        'សម្រួលការធ្វើការជាមួយ SQL Databases',
        'បង្កើត Dynamic HTML',
        'គ្រប់គ្រង Routes'
      ],
      correct: 1,
      explanation: 'Sequelize សម្រួលការធ្វើការជាមួយ SQL Databases ដោយ Model-based Queries។'
    },
    {
      question: 'តើ Method ណាដែលប្រើសម្រាប់ Update Record?',
      options: [
        'User.findOne()',
        'User.update()',
        'User.create()',
        'User.destroy()'
      ],
      correct: 1,
      explanation: '`User.update()` ប្រើសម្រាប់កែប្រែ Record។'
    },
    {
      question: 'តើ Status Code ណាដែលប្រើនៅពេល Create Record ជោគជ័យ?',
      options: ['200', '201', '404', '500'],
      correct: 1,
      explanation: 'Status Code `201 Created` ប្រើនៅពេល Create Record ជោគជ័យ។'
    },
    {
      question: 'តើ SQLite តម្រូវឱ្យមាន Database Server ដែរឬទេ?',
      options: [
        'តម្រូវឱ្យមាន Server',
        'មិនតម្រូវឱ្យមាន Server',
        'តម្រូវឱ្យមាន MongoDB',
        'តម្រូវឱ្យមាន EJS'
      ],
      correct: 1,
      explanation: 'SQLite មិនតម្រូវឱ្យមាន Database Server ព្រោះវាជា File-based Database។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: SQL Databases ជាមួយ Sequelize

គោលបំណង: អនុវត្តការប្រើ Sequelize សម្រាប់ CRUD Operations។

1.  **ភ្ជាប់ SQLite និងបង្កើត Model**:
    * បង្កើត Folder \`sequelize-app\` និង Initialize npm:
        \`\`\`bash
        mkdir sequelize-app
        cd sequelize-app
        npm init -y
        npm install express sequelize sqlite3
        \`\`\`
    * បង្កើត File \`server.js\`:
        \`\`\`javascript
        const express = require('express');
        const { Sequelize, DataTypes } = require('sequelize');
        const app = express();
        const port = 3000;

        app.use(express.json()); // Middleware to parse JSON request bodies

        const sequelize = new Sequelize('sqlite::memory:'); // Use an in-memory SQLite database

        // Define User Model
        const User = sequelize.define('User', {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Set id to auto-increment
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false // Name cannot be null
          }
        });

        // Synchronize database (create tables if they don't exist)
        (async () => {
          try {
            await sequelize.authenticate();
            console.log('Database connection has been established successfully.');
            await sequelize.sync({ force: true }); // This will drop existing tables and recreate them. Good for testing.
            console.log('Database synchronized.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
        })();

        // CREATE a new user
        app.post('/users', async (req, res) => {
          try {
            const user = await User.create(req.body); // Sequelize will handle auto-incrementing ID
            res.status(201).json(user);
          } catch (err) {
            res.status(400).json({ error: err.message });
          }
        });

        app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
        \`\`\`
    * ដំណើរការ File:
        \`\`\`bash
        node server.js
        \`\`\`
    * ត្រួតពិនិត្យលទ្ធផលដោយបញ្ជូន POST Request (ប្រើ Postman ឬ Insomnia) ទៅ \`/users\` ជាមួយ Body \`{ "name": "Sokha" }\` (Note: No need to send 'id' as it's auto-incrementing).

2.  **បន្ថែម CRUD Operations**:
    * បន្ថែម Routes សម្រាប់ Read, Update, Delete នៅក្នុង \`server.js\` (បន្តពីកូដខាងលើ):
        \`\`\`javascript
        // READ a user by ID
        app.get('/users/:id', async (req, res) => {
          try {
            const user = await User.findOne({ where: { id: req.params.id } });
            if (!user) {
              return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
          } catch (err) {
            res.status(400).json({ error: err.message });
          }
        });

        // UPDATE a user by ID
        app.put('/users/:id', async (req, res) => {
          try {
            const [updatedRows] = await User.update({ name: req.body.name }, {
              where: { id: req.params.id },
              individualHooks: true // Run hooks for each instance
            });

            if (updatedRows === 0) {
              return res.status(404).json({ error: 'User not found or no changes made' });
            }
            const user = await User.findOne({ where: { id: req.params.id } }); // Fetch the updated user
            res.json(user);
          } catch (err) {
            res.status(400).json({ error: err.message });
          }
        });

        // DELETE a user by ID
        app.delete('/users/:id', async (req, res) => {
          try {
            const deletedRows = await User.destroy({ where: { id: req.params.id } });
            if (deletedRows === 0) {
              return res.status(404).json({ error: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
          } catch (err) {
            res.status(400).json({ error: err.message });
          }
        });
        \`\`\`
    * ដំណើរការ File ឡើងវិញ:
        \`\`\`bash
        node server.js
        \`\`\`
    * ត្រួតពិនិត្យលទ្ធផលដោយបញ្ជូន Requests (ប្រើ Postman ឬ Insomnia):
        * GET \`http://localhost:3000/users/1\` (Assuming you created a user with id 1)
        * PUT \`/users/1\` ជាមួយ Body \`{ "name": "Sokha Updated" }\`
        * DELETE \`/users/1\`

3.  **ចែករំលែកលទ្ធផល**:
    * កត់សម្គាល់លទ្ធផលនៃ Create, Read, Update, Delete Operations។
`,
    solution: `
# ដំណោះស្រាយ៖ SQL Databases ជាមួយ Sequelize

## ជំហានទី ១: SQLite និង CRUD Operations

* **server.js**:
    \`\`\`javascript
    const express = require('express');
    const { Sequelize, DataTypes } = require('sequelize');
    const app = express();
    const port = 3000;

    app.use(express.json()); // Middleware to parse JSON request bodies

    const sequelize = new Sequelize('sqlite::memory:'); // Use an in-memory SQLite database for simplicity

    // Define User Model
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Set id to auto-increment
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false // Name cannot be null
      }
    });

    // Synchronize database (create tables if they don't exist)
    (async () => {
      try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
        await sequelize.sync({ force: true }); // This will drop existing tables and recreate them.
        console.log('Database synchronized.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    })();

    // CREATE a new user
    app.post('/users', async (req, res) => {
      try {
        const user = await User.create(req.body);
        res.status(201).json(user);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });

    // READ a user by ID
    app.get('/users/:id', async (req, res) => {
      try {
        const user = await User.findOne({ where: { id: req.params.id } });
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
      });

    // UPDATE a user by ID
    app.put('/users/:id', async (req, res) => {
      try {
        const [updatedRows] = await User.update(req.body, {
          where: { id: req.params.id },
          individualHooks: true // Ensures validations and hooks are run
        });

        if (updatedRows === 0) {
          return res.status(404).json({ error: 'User not found or no changes made' });
        }
        const user = await User.findOne({ where: { id: req.params.id } }); // Fetch the updated user
        res.json(user);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });

    // DELETE a user by ID
    app.delete('/users/:id', async (req, res) => {
      try {
        const deletedRows = await User.destroy({ where: { id: req.params.id } });
        if (deletedRows === 0) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });

    app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
    \`\`\`
* លទ្ធផល:
    \`\`\`bash
    node server.js
    # Output:
    # Server running at http://localhost:3000
    # Database connection has been established successfully.
    # Database synchronized.
    \`\`\`
    * POST \`/users\` (Postman) ជាមួយ Body \`{ "name": "Sokha" }\` → JSON: \`{ "id": 1, "name": "Sokha", "createdAt": "...", "updatedAt": "..." }\`
    * \`http://localhost:3000/users/1\` → JSON: \`{ "id": 1, "name": "Sokha", "createdAt": "...", "updatedAt": "..." }\`
    * PUT \`/users/1\` ជាមួយ Body \`{ "name": "Sokha Updated" }\` → JSON: \`{ "id": 1, "name": "Sokha Updated", "createdAt": "...", "updatedAt": "..." }\`
    * DELETE \`/users/1\` → JSON: \`{ "message": "User deleted successfully" }\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Create**: បន្ថែម User ថ្មីជាមួយ \`POST /users\`។
* **Read**: ទាញ User ជាមួយ \`GET /users/:id\`។
* **Update**: កែប្រែ User ជាមួយ \`PUT /users/:id\`។
* **Delete**: លុប User ជាមួយ \`DELETE /users/:id\`។
`
  }
};

export default NodeJSLesson4_3Content;