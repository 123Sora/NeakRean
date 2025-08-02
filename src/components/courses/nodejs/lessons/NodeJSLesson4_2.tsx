import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson4_2Content: LessonContent = {
  title: 'MongoDB ជាមួយ Mongoose',
  objectives: [
    'យល់ដឹងអំពី MongoDB និង NoSQL Databases',
    'ស្វែងយល់ពីការប្រើ Mongoose សម្រាប់ភ្ជាប់ MongoDB',
    'រៀនបង្កើត Schema និង Model ជាមួយ Mongoose',
    'អនុវត្ត CRUD Operations ជាមួយ MongoDB',
    'បង្កើត RESTful API ជាមួយ Express.js និង Mongoose'
  ],
  content: `
# MongoDB ជាមួយ Mongoose 📊

---

## 1. តើ MongoDB និង Mongoose ជាអ្វី? 🤔

* **MongoDB:** NoSQL Database ដែលផ្ទុកទិន្នន័យជា **Documents** (JSON-like) ក្នុង Collections។
* **Mongoose:** **ODM** (Object Data Modeling) Library សម្រាប់ MongoDB នៅក្នុង Node.js។
* **អត្ថប្រយោជន៍:** Mongoose ផ្តល់ **Schema Validation** និង **Query Building** ងាយស្រួល។

---

## 2. ការភ្ជាប់ MongoDB ជាមួយ Mongoose 🛠️

* **ជំហាន:**
    1.  ដំឡើង Mongoose: \`npm install mongoose\`។
    2.  ភ្ជាប់ MongoDB: \`mongoose.connect('mongodb://localhost/dbname')\`។
    3.  បង្កើត Schema និង Model។
* **ឧទាហរណ៍:** ភ្ជាប់ Database \`mydb\` និងបង្កើត Collection \`users\`។

---

## 3. ការបង្កើត Schema និង Model 🌟

* **Schema:** កំណត់ **Structure** នៃ Document (ឧ. Fields និង Data Types)។
* **Model:** Wrapper សម្រាប់ Collection ដែលអនុញ្ញាតឱ្យធ្វើ CRUD Operations។
* **Syntax:**
    \`\`\`javascript
    const userSchema = new mongoose.Schema({
      id: Number,
      name: String
    });
    const User = mongoose.model('User', userSchema);
    \`\`\`

---

## 4. CRUD Operations ជាមួយ Mongoose ⚙️

* **Create:** \`User.create({ id: 1, name: 'Sokha' })\`
* **Read:** \`User.find()\` ឬ \`User.findOne({ id: 1 })\`
* **Update:** \`User.updateOne({ id: 1 }, { name: 'Sokha Updated' })\`
* **Delete:** \`User.deleteOne({ id: 1 })\`
* **Async/Await:** ប្រើ \`async/await\` សម្រាប់ Queries។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📂

* **RESTful API:** បង្កើត API សម្រាប់ CRUD Operations លើ Users។
* **Validation:** ប្រើ Schema Validation ដើម្បីធានាថា Data ត្រឹមត្រូវ។

---
> **គន្លឹះ:** ត្រូវប្រាកដថា MongoDB Server កំពុងដំណើរការ (ឧ. \`mongod\`) មុននឹងភ្ជាប់។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Model និង Create User

បង្កើត File \`mongoose-create.js\`:

\`\`\`javascript
const mongoose = require('mongoose');

// Always use 'localhost' if running on your local machine and ensure the MongoDB server is running.
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true }, // Added unique and required for better schema
  name: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

async function createUser() {
  try {
    const newUser = await User.create({ id: 1, name: 'Sokha' });
    console.log('User created:', newUser);
  } catch (err) {
    console.error('Error creating user:', err.message);
  } finally {
    mongoose.connection.close();
  }
}

createUser();
\`\`\`

ដំណើរការ File (តម្រូវឱ្យ MongoDB Server ដំណើរការ):

\`\`\`bash
node mongoose-create.js
\`\`\`

**លទ្ធផល**:
* Console: \`Connected to MongoDB\`
* Console: \`User created: { _id: ..., id: 1, name: "Sokha", __v: 0 }\` (Output may vary slightly)

# ឧទាហរណ៍ ២: RESTful API ជាមួយ Mongoose

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  name: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

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
    const user = await User.findOne({ id: req.params.id });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
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
* POST \`/users\` (Postman) ជាមួយ Body \`{ "id": 1, "name": "Sokha" }\` → JSON: \`{ "_id": "...", "id": 1, "name": "Sokha", "__v": 0 }\`
* \`http://localhost:3000/users/1\` → JSON: \`{ "_id": "...", "id": 1, "name": "Sokha", "__v": 0 }\`

# ឧទាហរណ៍ ៣: Update និង Delete Users

បន្ថែម Routes នៅក្នុង \`server.js\`:

\`\`\`javascript
// UPDATE a user by ID
app.put('/users/:id', async (req, res) => {
  try {
    // findOneAndUpdate by 'id' field, update 'name', return the new document
    const user = await User.findOneAndUpdate({ id: req.params.id }, { name: req.body.name }, { new: true, runValidators: true });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const result = await User.deleteOne({ id: req.params.id });
    if (result.deletedCount === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json({ message: 'User deleted successfully' });
    }
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
* PUT \`/users/1\` (Postman) ជាមួយ Body \`{ "name": "Sokha Updated" }\` → JSON: \`{ "_id": "...", "id": 1, "name": "Sokha Updated", "__v": 0 }\`
* DELETE \`/users/1\` → JSON: \`{ "message": "User deleted successfully" }\`
`
  ],
  quiz: [
    {
      question: 'តើ MongoDB ជា Database ប្រភេទណា?',
      options: [
        'Relational Database',
        'NoSQL Database',
        'Key-Value Database',
        'Graph Database'
      ],
      correct: 1,
      explanation: 'MongoDB ជា **NoSQL Database** ដែលផ្ទុកទិន្នន័យជា Documents។'
    },
    {
      question: 'តើ Mongoose ជាអ្វី?',
      options: [
        'Database Server',
        'ODM Library សម្រាប់ MongoDB',
        'ORM Library សម្រាប់ SQL',
        'Middleware សម្រាប់ Express'
      ],
      correct: 1,
      explanation: 'Mongoose ជា **ODM Library** សម្រាប់ MongoDB នៅក្នុង Node.js។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីដំឡើង Mongoose?',
      options: [
        'npm install express',
        'npm install mongoose',
        'npm install mongodb',
        'npm install sequelize'
      ],
      correct: 1,
      explanation: '`npm install mongoose` ប្រើសម្រាប់ដំឡើង Mongoose។'
    },
    {
      question: 'តើ Schema ក្នុង Mongoose ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Structure នៃ Document',
        'បង្កើត Routes',
        'បម្រើ Static Files',
        'គ្រប់គ្រង Middleware'
      ],
      correct: 0,
      explanation: 'Schema កំណត់ **Structure** នៃ Document ដូចជា Fields និង Data Types។'
    },
    {
      question: 'តើ Model ក្នុង Mongoose តំណាងឱ្យអ្វី?',
      options: [
        'Database Connection',
        'Collection ក្នុង MongoDB',
        'Static File',
        'Template File'
      ],
      correct: 1,
      explanation: 'Model ជា Wrapper សម្រាប់ **Collection** ដែលអនុញ្ញាតឱ្យធ្វើ CRUD Operations។'
    },
    {
      question: 'តើ Method ណាដែលប្រើសម្រាប់ Create Document ក្នុង Mongoose?',
      options: [
        'User.find()',
        'User.create()',
        'User.updateOne()',
        'User.deleteOne()'
      ],
      correct: 1,
      explanation: '`User.create()` ប្រើសម្រាប់បង្កើត Document ថ្មី។'
    },
    {
      question: 'តើ Method ណាដែលប្រើសម្រាប់ Read Document មួយ?',
      options: [
        'User.create()',
        'User.findOne()',
        'User.updateOne()',
        'User.deleteOne()'
      ],
      correct: 1,
      explanation: '`User.findOne()` ប្រើសម្រាប់ទាញ Document មួយ។'
    },
    {
      question: 'តើ MongoDB ផ្ទុកទិន្នន័យជាអ្វី?',
      options: ['Tables', 'Documents', 'Rows', 'Columns'],
      correct: 1,
      explanation: 'MongoDB ផ្ទុកទិន្នន័យជា **Documents** (JSON-like) ក្នុង Collections។'
    },
    {
      question: 'តើ `mongoose.connect()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Schema',
        'ភ្ជាប់ MongoDB Database',
        'បម្រើ Static Files',
        'កំណត់ Routes'
      ],
      correct: 1,
      explanation: '`mongoose.connect()` ប្រើសម្រាប់ភ្ជាប់ **MongoDB Database**។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Mongoose?',
      options: [
        'បម្រើ Static Files',
        'ផ្តល់ Schema Validation និង Query Building',
        'បង្កើត Dynamic HTML',
        'គ្រប់គ្រង Routes'
      ],
      correct: 1,
      explanation: 'Mongoose ផ្តល់ **Schema Validation** និង **Query Building** ងាយស្រួល។'
    },
    {
      question: 'តើ Method ណាដែលប្រើសម្រាប់ Update Document?',
      options: [
        'User.findOne()',
        'User.updateOne()',
        'User.create()',
        'User.deleteOne()'
      ],
      correct: 1,
      explanation: '`User.updateOne()` ប្រើសម្រាប់កែប្រែ Document។'
    },
    {
      question: 'តើ Status Code ណាដែលប្រើនៅពេល Create Document ជោគជ័យ?',
      options: ['200', '201', '404', '500'],
      correct: 1,
      explanation: 'Status Code `201 Created` ប្រើនៅពេល Create Document ជោគជ័យ។'
    },
    {
      question: 'តើអ្វីត្រូវបានទាមទារមុននឹងភ្ជាប់ MongoDB?',
      options: [
        'MongoDB Server ដំណើរការ',
        'SQLite Database',
        'EJS Template',
        'Static Files'
      ],
      correct: 0,
      explanation: '**MongoDB Server** ត្រូវដំណើរការ (ឧ. `mongod`) មុននឹងភ្ជាប់។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: MongoDB ជាមួយ Mongoose

គោលបំណង: អនុវត្តការប្រើ Mongoose សម្រាប់ CRUD Operations។

1.  **ភ្ជាប់ MongoDB និងបង្កើត Model**:
    * បង្កើត Folder \`mongoose-app\` និង Initialize npm:
        \`\`\`bash
        mkdir mongoose-app
        cd mongoose-app
        npm init -y
        npm install express mongoose
        \`\`\`
    * បង្កើត File \`server.js\`:
        \`\`\`javascript
        const express = require('express');
        const mongoose = require('mongoose');
        const app = express();
        const port = 3000;

        app.use(express.json()); // Middleware to parse JSON request bodies

        // Connect to MongoDB
        mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
          .then(() => console.log('Connected to MongoDB'))
          .catch(err => console.error('Could not connect to MongoDB:', err));

        // Define User Schema
        const userSchema = new mongoose.Schema({
          id: { type: Number, unique: true, required: true },
          name: { type: String, required: true }
        });

        // Create User Model
        const User = mongoose.model('User', userSchema);

        // CREATE User Route
        app.post('/users', async (req, res) => {
          try {
            const user = await User.create(req.body);
            res.status(201).json(user);
          } catch (err) {
            // Handle duplicate key error (id already exists)
            if (err.code === 11000) {
              return res.status(409).json({ error: 'User with this ID already exists.' });
            }
            res.status(400).json({ error: err.message });
          }
        });

        app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
        \`\`\`
    * ដំណើរការ MongoDB Server (ឧ. \`mongod\`) និង File:
        \`\`\`bash
        # Start your MongoDB server in a separate terminal
        mongod

        # Then run your Node.js server
        node server.js
        \`\`\`
    * ត្រួតពិនិត្យលទ្ធផលដោយបញ្ជូន POST Request (ប្រើ Postman ឬ Insomnia) ទៅ \`/users\` ជាមួយ Body \`{ "id": 1, "name": "Sokha" }\`។

2.  **បន្ថែម CRUD Operations**:
    * បន្ថែម Routes សម្រាប់ Read, Update, Delete នៅក្នុង \`server.js\` (បន្តពីកូដខាងលើ):
        \`\`\`javascript
        // READ User by ID
        app.get('/users/:id', async (req, res) => {
          try {
            const user = await User.findOne({ id: req.params.id });
            if (!user) {
              return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
          } catch (err) {
            res.status(400).json({ error: err.message });
          }
        });

        // UPDATE User by ID
        app.put('/users/:id', async (req, res) => {
          try {
            // findOneAndUpdate by 'id' field, update 'name', return the new document, run schema validators
            const user = await User.findOneAndUpdate({ id: req.params.id }, { name: req.body.name }, { new: true, runValidators: true });
            if (!user) {
              return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
          } catch (err) {
            res.status(400).json({ error: err.message });
          }
        });

        // DELETE User by ID
        app.delete('/users/:id', async (req, res) => {
          try {
            const result = await User.deleteOne({ id: req.params.id });
            if (result.deletedCount === 0) {
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
        * GET \`http://localhost:3000/users/1\`
        * PUT \`/users/1\` ជាមួយ Body \`{ "name": "Sokha Updated" }\`
        * DELETE \`/users/1\`

3.  **ចែករំលែកលទ្ធផល**:
    * កត់សម្គាល់លទ្ធផលនៃ Create, Read, Update, Delete Operations ។
`,
    solution: `
# ដំណោះស្រាយ៖ MongoDB ជាមួយ Mongoose

## ជំហានទី ១: MongoDB និង CRUD Operations

* **server.js**:
    \`\`\`javascript
    const express = require('express');
    const mongoose = require('mongoose');
    const app = express();
    const port = 3000;

    app.use(express.json()); // Middleware to parse JSON request bodies

    // Connect to MongoDB
    mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Could not connect to MongoDB:', err));

    // Define User Schema
    const userSchema = new mongoose.Schema({
      id: { type: Number, unique: true, required: true },
      name: { type: String, required: true }
    });

    // Create User Model
    const User = mongoose.model('User', userSchema);

    // CREATE a new user
    app.post('/users', async (req, res) => {
      try {
        const user = await User.create(req.body);
        res.status(201).json(user);
      } catch (err) {
        // Handle duplicate key error (e.g., if 'id' is not unique)
        if (err.code === 11000) {
          return res.status(409).json({ error: 'User with this ID already exists.' });
        }
        res.status(400).json({ error: err.message });
      }
    });

    // READ a user by ID
    app.get('/users/:id', async (req, res) => {
      try {
        const user = await User.findOne({ id: req.params.id });
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
        const user = await User.findOneAndUpdate(
          { id: req.params.id },
          { name: req.body.name },
          { new: true, runValidators: true } // 'new: true' returns the updated document, 'runValidators: true' ensures schema validation on update
        );
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });

    // DELETE a user by ID
    app.delete('/users/:id', async (req, res) => {
      try {
        const result = await User.deleteOne({ id: req.params.id });
        if (result.deletedCount === 0) {
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
    # Output: Server running at http://localhost:3000
    Connected to MongoDB
    \`\`\`
    * POST \`/users\` (Postman) ជាមួយ Body \`{ "id": 1, "name": "Sokha" }\` → JSON: \`{ "_id": "...", "id": 1, "name": "Sokha", "__v": 0 }\`
    * \`http://localhost:3000/users/1\` → JSON: \`{ "_id": "...", "id": 1, "name": "Sokha", "__v": 0 }\`
    * PUT \`/users/1\` ជាមួយ Body \`{ "name": "Sokha Updated" }\` → JSON: \`{ "_id": "...", "id": 1, "name": "Sokha Updated", "__v": 0 }\`
    * DELETE \`/users/1\` → JSON: \`{ "message": "User deleted successfully" }\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Create**: បន្ថែម User ថ្មីជាមួយ \`POST /users\`។
* **Read**: ទាញ User ជាមួយ \`GET /users/:id\`។
* **Update**: កែប្រែ User ជាមួយ \`PUT /users/:id\`។
* **Delete**: លុប User ជាមួយ \`DELETE /users/:id\`។
`
  }
};

export default NodeJSLesson4_2Content;