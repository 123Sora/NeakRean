import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson5_5Content: LessonContent = {
  title: 'Project Structure និង Code Organization',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Project Structure នៅក្នុង Express.js',
    'រៀនរៀបចំ Project Structure ដែល Scalable',
    'អនុវត្ត Modular Code ជាមួយ Routes និង Middleware',
    'ស្វែងយល់ពី Best Practices សម្រាប់ Code Organization',
  ],
  content: `
# Project Structure និង Code Organization 🗂️

---

**Project Structure** និង **Code Organization** គឺជាវិធីសាស្ត្ររៀបចំ Code ដើម្បីឱ្យងាយស្រួលថែទាំ និង Scalable។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនរៀបចំ Express.js Project ដោយប្រើ Modular Structure។

---

## 1. សារៈសំខាន់នៃ Project Structure

Project Structure ជួយ:
- **ភាពងាយស្រួលក្នុងការថែទាំ:** ងាយរក Code។
- **Scalability:** គាំទ្រ Application ធំ។
- **Collaboration:** ងាយស្រួលសម្រាប់ Team។

---

## 2. រៀបចំ Project Structure

**ឧទាហរណ៍ Structure:**
\`\`\`
my-express-app/
├── config/
│   └── db.js
├── routes/
│   ├── index.js
│   └── users.js
├── middleware/
│   └── auth.js
├── controllers/
│   └── userController.js
├── .env
├── .gitignore
├── app.js
└── package.json
\`\`\`

- **config/**: រក្សាទុក Database Config, Environment Variables។
- **routes/**: កំណត់ Routes។
- **middleware/**: Middleware Functions។
- **controllers/**: Business Logic។

---

## 3. Modular Routes

បំបែក Routes ទៅជា Files ផ្សេងៗ។

**ឧទាហរណ៍ (routes/users.js):**
\`\`\`javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'User route' });
});

module.exports = router;
\`\`\`

**app.js:**
\`\`\`javascript
const express = require('express');
const userRoutes = require('./routes/users');
const app = express();

app.use('/users', userRoutes);

app.listen(3000);
\`\`\`

---

## 4. Modular Middleware

បង្កើត Middleware នៅក្នុង Files ផ្សេងៗ។

**ឧទាហរណ៍ (middleware/auth.js):**
\`\`\`javascript
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'No token provided' });
  }
  next();
};
\`\`\`

**app.js:**
\`\`\`javascript
const auth = require('./middleware/auth');
app.use('/protected', auth);
\`\`\`

---

## 5. Best Practices សម្រាប់ Code Organization

- **បំបែក Logic:** ប្រើ Controllers សម្រាប់ Business Logic។
- **Consistent Naming:** ប្រើឈ្មោះ File និង Folder ដែលច្បាស់លាស់។
- **Use Environment Variables:** សម្រាប់ Config។
- **Documentation:** បន្ថែម Comments និង README។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Modular Routes</h3>
<p>បង្កើត User Routes នៅក្នុង File ផ្សេង។</p>
<pre><code class="language-javascript">
// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'User route' });
});

module.exports = router;
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Modular Middleware</h3>
<p>បង្កើត Authentication Middleware។</p>
<pre><code class="language-javascript">
// middleware/auth.js
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Project Structure ជួយអ្វី?',
      options: ['Validate Input', 'ភាពងាយស្រួលក្នុងការថែទាំ', 'Hash Passwords', 'Serve Files'],
      correct: 1,
      explanation: 'Project Structure ជួយភាពងាយស្រួលក្នុងការថែទាំ និង Scalability។'
    },
    {
      question: 'តើ Folder `config` ប្រើសម្រាប់អ្វី?',
      options: ['Routes', 'Database Config', 'Middleware', 'Static Files'],
      correct: 1,
      explanation: '`config` រក្សាទុក Database Config និង Environment Variables។'
    },
    {
      question: 'តើ Modular Routes មានប្រយោជន៍អ្វី?',
      options: ['បង្ផើនល្បឿន', 'រៀបចំ Code', 'Validate Input', 'Log Requests'],
      correct: 1,
      explanation: 'Modular Routes រៀបចំ Code ឱ្យងាយស្រួលថែទាំ។'
    },
    {
      question: 'តើ `express.Router()` ធ្វើអ្វី?',
      options: ['បង្កើត Server', 'កំណត់ Routes', 'Validate Input', 'Log Requests'],
      correct: 1,
      explanation: '`express.Router()` បង្កើត Router សម្រាប់ Modular Routes។'
    },
    {
      question: 'តើ Controllers ប្រើសម្រាប់អ្វី?',
      options: ['Serve Files', 'Business Logic', 'Database Config', 'Middleware'],
      correct: 1,
      explanation: 'Controllers ប្រើសម្រាប់ Business Logic។'
    },
    {
      question: 'តើ Folder ណាមួយសម្រាប់ Middleware?',
      options: ['config', 'routes', 'middleware', 'controllers'],
      correct: 2,
      explanation: 'Folder `middleware` ប្រើសម្រាប់ Middleware Functions។'
    },
    {
      question: 'តើ Consistent Naming មានសារៈសំខាន់ដោយសារអ្វី?',
      options: ['បង្ផើនល្បឿន', 'ភាពងាយស្រួលក្នុងការអាន', 'Validate Input', 'Log Requests'],
      correct: 1,
      explanation: 'Consistent Naming ធ្វើឱ្យ Code ងាយស្រួលអាន និងថែទាំ។'
    },
    {
      question: 'តើ Modular Code ជួយ Collaboration ដោយរបៀបណា?',
      options: ['បង្ផើនល្បឿន', 'បំបែក Responsibilities', 'Validate Input', 'Serve Files'],
      correct: 1,
      explanation: 'Modular Code បំបែក Responsibilities សម្រាប់ Team។'
    },
    {
      question: 'តើ Environment Variables គួរប្រើនៅឯណា?',
      options: ['Routes', 'Config', 'Middleware', 'Controllers'],
      correct: 1,
      explanation: 'Environment Variables ប្រើនៅ `config` សម្រាប់ Configuration។'
    },
    {
      question: 'តើ README File មានប្រយោជន៍អ្វី?',
      options: ['Validate Input', 'Documentation', 'Log Requests', 'Serve Files'],
      correct: 1,
      explanation: 'README File ផ្តល់ Documentation សម្រាប់ Project។'
    },
    {
      question: 'តើ Scalability មានន័យដូចម្តេច?',
      options: ['បង្ផើនល្បឿន', 'គាំទ្រ Application ធំ', 'Validate Input', 'Log Requests'],
      correct: 1,
      explanation: 'Scalability គឺជាសមត្ថភាពគាំទ្រ Application ធំ។'
    },
    {
      question: 'តើ Folder `controllers` ប្រើសម្រាប់អ្វី?',
      options: ['Database Config', 'Business Logic', 'Routes', 'Middleware'],
      correct: 1,
      explanation: '`controllers` ប្រើសម្រាប់ Business Logic។'
    },
    {
      question: 'តើ Best Practice សម្រាប់ Code Organization រួមមានអ្វី?',
      options: ['Consistent Naming', 'Hash Passwords', 'Validate Input', 'Serve Files'],
      correct: 0,
      explanation: 'Best Practices រួមមាន Consistent Naming, Modular Code, Documentation។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ដែលប្រើ Modular Project Structure។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-structure\`។
   - ប្រើ \`npm init -y\`។
   - ដំឡើង Dependency: \`npm install express\`។

2. **បង្កើត Project Structure:**
   - Folders:
     - \`routes/\`: សម្រាប់ Routes
     - \`middleware/\`: សម្រាប់ Middleware
     - \`controllers/\`: សម្រាប់ Business Logic
   - Files:
     - \`routes/users.js\`: Route \`/users\` (GET) ឆ្លើយតប \`{ message: "Users" }\`។
     - \`middleware/auth.js\`: Middleware ពិនិត្យ \`Authorization\` Header។
     - \`controllers/userController.js\`: Logic សម្រាប់ \`/users\` Route១
     - \`app.js\`: Main Application File១

3. **បង្កើត Routes និង Middleware:**
   - Route \`/users\` (GET): ប្រើ Controller និង Middleware១
   - Route \`/\` (GET): ឆ្លើយតប \`{ message: "Home" }\`។
   - Middleware \`auth\`: ពិនិត្យ \`Authorization\` Header។

4. **Test Application:**
   - Run \`node app.js\`។
   - ប្រើ Postman:
     - GET \`/\`
     - GET \`/users\` ជាមួយ Header \`Authorization: Bearer token\`
     - GET \`/users\` ដោយគ្មាន Header

**ការណែនាំ:** ប្រើ Modular Structure និង Consistent Naming១
    `,
    solution: `
## app.js 
\`\`\`text
const express = require('express');
const userRoutes = require('./routes/users');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Home' });
});

app.use('/users', userRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
\`\`\`

## routes/users.js 
\`\`\`text
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/', auth, userController.getUsers);

module.exports = router;
\`\`\`

## middleware/auth.js 
\`\`\`text
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};
\`\`\`

## controllers/userController.js 
\`\`\`text
exports.getUsers = (req, res) => {
  res.json({ message: 'Users' });
};
\`\`\`
`
  }
};

export default ExpressLesson5_5Content;