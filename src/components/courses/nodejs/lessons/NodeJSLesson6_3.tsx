import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson6_3Content: LessonContent = {
  title: 'Environment Variables',
  objectives: [
    'យល់ដឹងអំពី Environment Variables នៅក្នុង Node.js',
    'ស្វែងយល់ពីការប្រើ dotenv Library សម្រាប់គ្រប់គ្រង Environment Variables',
    'រៀនកំណត់ Configuration សម្រាប់ Application',
    'អនុវត្ត Environment Variables ជាមួយ Express.js',
    'ធានាសុវត្ថិភាពនៃ Sensitive Data ដូចជា API Keys'
  ],
  content: `
# Environment Variables 🌍

---

## 1. តើ Environment Variables ជាអ្វី? 🤔

* **និយមន័យ:** Environment Variables ជា Variables ដែលរក្សាទុកនៅក្នុង Environment របស់ Application សម្រាប់ Configuration។
* **ឧទាហរណ៍:** Database URL, API Keys, Port Number។
* **អត្ថប្រយោជន៍:** ធ្វើឱ្យ Application មានភាពបត់បែន និងសុវត្ថិភាព។

---

## 2. dotenv Library 🛠️

* **dotenv:** Library សម្រាប់ Load Environment Variables ពី \`.env\` File។
* **Installation:** \`npm install dotenv\`
* **Syntax:**
  \`\`\`javascript
  require('dotenv').config();
  console.log(process.env.DB_URL);
  \`\`\`

---

## 3. ការបង្កើត .env File 🌟

* **Structure:** Key-Value Pairs នៅក្នុង File \`.env\`។
* **ឧទាហរណ៍:**
  \`\`\`
  DB_URL=mongodb://localhost/mydb
  PORT=3000
  SECRET_KEY=mysecret
  \`\`\`
* **គន្លឹះ:** បន្ថែម \`.env\` ទៅ \`.gitignore\` ដើម្បីការពារការបញ្ចូលទៅ Git។

---

## 4. Environment Variables នៅក្នុង Express.js ⚙️

* **Usage:** ប្រើ \`process.env\` ដើម្បីទាញ Configuration នៅក្នុង Express App។
* **ឧទាហរណ៍:** កំណត់ Port និង Database URL ពី \`.env\`។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📂

* **Dynamic Configuration:** ប្រើ Environment Variables សម្រាប់ Database Connection។
* **Security:** រក្សាទុក Sensitive Data ដូចជា Secret Keys នៅក្នុង \`.env\`។

---
> **គន្លឹះ:** តែងតែ Validate Environment Variables ដើម្បីជៀសវាង Errors ពេល Missing Values។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ប្រើ dotenv

បង្កើត File \`.env\`:
\`\`\`
PORT=3000
DB_URL=mongodb://localhost/mydb
\`\`\`

បង្កើត File \`config.js\`:

\`\`\`javascript
require('dotenv').config();

console.log('Port:', process.env.PORT);
console.log('Database URL:', process.env.DB_URL);
\`\`\`

ដំណើរការ File:

\`\`\`bash
node config.js
\`\`\`

**លទ្ធផល**:
* Console: \`Port: 3000\`
* Console: \`Database URL: mongodb://localhost/mydb\`

# ឧទាហរណ៍ ២: Express.js ជាមួយ Environment Variables

បង្កើត File \`.env\`:
\`\`\`
PORT=3000
DB_URL=mongodb://localhost/mydb
\`\`\`

បង្កើត File \`server.js\`:

\`\`\`javascript
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File (តម្រូវឱ្យ MongoDB Server ដំណើរការ):

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/\` → JSON: \`{ message: "Hello World" }\`
* Console: \`Server running at http://localhost:3000\`

# ឧទាហរណ៍ ៣: Validate Environment Variables

បន្ថែម Validation នៅក្នុង \`server.js\`:

\`\`\`javascript
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

if (!process.env.DB_URL) {
  console.error('Error: DB_URL is not defined');
  process.exit(1);
}

app.use(express.json());

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File ដោយលុប \`DB_URL\` ពី \`.env\`:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* Console: \`Error: DB_URL is not defined\`
`
  ],
  quiz: [
    {
      question: 'តើ Environment Variables ជាអ្វី?',
      options: [
        'Variables សម្រាប់ Routing',
        'Variables សម្រាប់ Configuration',
        'Variables សម្រាប់ Logging',
        'Variables សម្រាប់ Authentication'
      ],
      correct: 1,
      explanation: 'Environment Variables ជា Variables សម្រាប់ Configuration ដូចជា Port ឬ Database URL។'
    },
    {
      question: 'តើ Library ណាដែលប្រើសម្រាប់ Load Environment Variables?',
      options: ['winston', 'dotenv', 'mongoose', 'bcrypt'],
      correct: 1,
      explanation: 'dotenv ប្រើសម្រាប់ Load Environment Variables ពី `.env` File។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីដំឡើង dotenv?',
      options: [
        'npm install express',
        'npm install dotenv',
        'npm install mongoose',
        'npm install winston'
      ],
      correct: 1,
      explanation: '`npm install dotenv` ប្រើសម្រាប់ដំឡើង dotenv។'
    },
    {
      question: 'តើ `.env` File គួរត្រូវបានបញ្ចូលទៅ Git ឬទេ?',
      options: [
        'បញ្ចូលទៅ Git',
        'បន្ថែមទៅ .gitignore',
        'បញ្ចូលទៅ Database',
        'បញ្ចូលទៅ Static Files'
      ],
      correct: 1,
      explanation: '`.env` File គួរត្រូវបានបន្ថែមទៅ `.gitignore` ដើម្បីការពារសុវត្ថិភាព។'
    },
    {
      question: 'តើ `process.env` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Routes',
        'ទាញ Environment Variables',
        'Log Errors',
        'Hash Passwords'
      ],
      correct: 1,
      explanation: '`process.env` ប្រើសម្រាប់ទាញ Environment Variables។'
    },
    {
      question: 'តើ Environment Variables ផ្តល់អត្ថប្រយោជន៍អ្វី?',
      options: [
        'បង្កើត Dynamic HTML',
        'ធ្វើឱ្យ Application មានភាពបត់បែននិងសុវត្ថិភាព',
        'ភ្ជាប់ Database',
        'បម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'Environment Variables ធ្វើឱ្យ Application មានភាពបត់បែននិងសុវត្ថិភាព។'
    },
    {
      question: 'តើអ្វីជាឧទាហរណ៍នៃ Environment Variable?',
      options: [
        'Database URL',
        'Static File Path',
        'Route Handler',
        'Middleware Function'
      ],
      correct: 0,
      explanation: 'Database URL ជាឧទាហរណ៍នៃ Environment Variable។'
    },
    {
      question: 'តើ Command ណាដែល Load `.env` File?',
      options: [
        'require("dotenv").config()',
        'require("winston").config()',
        'require("mongoose").connect()',
        'require("express").listen()'
      ],
      correct: 0,
      explanation: '`require("dotenv").config()` Load Environment Variables ពី `.env` File�।'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ Validation នៃ Environment Variables?',
      options: [
        'បង្កើត Token',
        'ជៀសវាង Errors ពេល Missing Values',
        'Log HTTP Requests',
        'Hash Passwords'
      ],
      correct: 1,
      explanation: 'Validation ជៀសវាង Errors ពេល Environment Variables មិនមាន។'
    },
    {
      question: 'តើ Sensitive Data គួរត្រូវបានរក្សាទុកនៅទីណា?',
      options: [
        'Source Code',
        '`.env` File',
        'Database Schema',
        'Static Files'
      ],
      correct: 1,
      explanation: 'Sensitive Data គួរត្រូវបានរក្សាទុកនៅក្នុង `.env` File។'
    },
    {
      question: 'តើ Environment Variables អាចប្រើបាននៅ Environment ណា?',
      options: [
        'Development តែប៉ុណ្ណោះ',
        'Production តែប៉ុណ្ណោះ',
        'ទាំង Development និង Production',
        'Testing តែប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Environment Variables អាចប្រើបានទាំង Development និង Production។'
    },
    {
      question: 'តើ Default Value សម្រាប់ `process.env.PORT` គួរត្រូវបានកំណត់ដោយរបៀបណា?',
      options: [
        'process.env.PORT || 3000',
        'process.env.PORT = 3000',
        'process.env.PORT()',
        'process.env.setPort(3000)'
      ],
      correct: 0,
      explanation: '`process.env.PORT || 3000` កំណត់ Default Value សម្រាប់ Port។'
    },
    {
      question: 'តើ `.env` File គួរមាន Format អ្វី?',
      options: [
        'JSON',
        'Key-Value Pairs',
        'YAML',
        'XML'
      ],
      correct: 1,
      explanation: '`.env` File មាន Format Key-Value Pairs។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Environment Variables

គោលបំណង: អនុវត្តការប្រើ Environment Variables ជាមួយ Express.js។

1. **បង្កើត API ជាមួយ Environment Variables**:
   * បង្កើត Folder \`env-app\` និង Initialize npm:
     \`\`\`bash
     mkdir env-app
     cd env-app
     npm init -y
     npm install express mongoose dotenv
     \`\`\`
   * បង្កើត File \`.env\`:
     \`\`\`
     PORT=3000
     DB_URL=mongodb://localhost/mydb
     \`\`\`
   * បង្កើត File \`server.js\`:
     \`\`\`javascript
     require('dotenv').config();
     const express = require('express');
     const mongoose = require('mongoose');
     const app = express();
     const port = process.env.PORT || 3000;

     if (!process.env.DB_URL) {
       console.error('Error: DB_URL is not defined');
       process.exit(1);
     }

     app.use(express.json());

     mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

     app.get('/', (req, res) => {
       res.json({ message: 'Hello World' });
     });

     app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
     \`\`\`
   * ដំណើរការ MongoDB Server (ឧ. \`mongod\`) និង File:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល:
     * \`http://localhost:3000/\`

2. **បន្ថែម Database Route**:
   * បន្ថែម Route \`/users\` ដើម្បីបង្កើត User:
     \`\`\`javascript
     const userSchema = new mongoose.Schema({
       name: String
     });

     const User = mongoose.model('User', userSchema);

     app.post('/users', async (req, res) => {
       try {
         const user = await User.create(req.body);
         res.status(201).json(user);
       } catch (err) {
         res.status(400).json({ error: err.message });
       }
     });
     \`\`\`
   * ដំណើរការ File ឡើងវិញ:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល:
     * POST \`/users\` (Postman) ជាមួយ Body \`{ "name": "Sokha" }\`

3. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ Server Startup និង Database Connection។
`,
    solution: `
# ដំណោះស្រាយ៖ Environment Variables

## ជំហានទី ១: API ជាមួយ Environment Variables
* **.env**:
  \`\`\`
  PORT=3000
  DB_URL=mongodb://localhost/mydb
  \`\`\`
* **server.js**:
  \`\`\`javascript
  require('dotenv').config();
  const express = require('express');
  const mongoose = require('mongoose');
  const app = express();
  const port = process.env.PORT || 3000;

  if (!process.env.DB_URL) {
    console.error('Error: DB_URL is not defined');
    process.exit(1);
  }

  app.use(express.json());

  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

  const userSchema = new mongoose.Schema({
    name: String
  });

  const User = mongoose.model('User', userSchema);

  app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
  });

  app.post('/users', async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
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
  \`\`\`
  * \`http://localhost:3000/\` → JSON: \`{ message: "Hello World" }\`
  * POST \`/users\` (Postman) ជាមួយ Body \`{ "name": "Sokha" }\` → JSON: \`{ _id: ..., name: "Sokha" }\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* Server Startup: Server ដំណើរការលើ Port ពី \`.env\`។
* Database Connection: ភ្ជាប់ MongoDB ដោយប្រើ \`DB_URL\`។
* User Creation: បង្កើត User ដោយជោគជ័យ។
`
  }
};

export default NodeJSLesson6_3Content;