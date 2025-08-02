import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson7_3Content: LessonContent = {
  title: 'Best Practices និង Performance Optimization',
  objectives: [
    'យល់ដឹងអំពី Best Practices នៅក្នុង Node.js Development',
    'ស្វែងយល់ពីការបង្កើនប្រសិទ្ធភាព Performance នៃ Node.js Applications',
    'អនុវត្ត Code Organization និង Modularization',
    'រៀនប្រើ Logging និង Monitoring',
    'គ្រប់គ្រង Error Handling និង Security Practices'
  ],
  content: `
# Best Practices និង Performance Optimization 🛠️

---

## 1. តើ Best Practices ជាអ្វី? 🤔

* **និយមន័យ:** ការអនុវត្តន៍ដែលធានាគុណភាព Code, Maintainability, និង Performance។
* **ឧទាហរណ៍:** Modular Code, Error Handling, Security Practices។
* **អត្ថប្រយោជន៍:** កាត់បន្ថយ Bugs, ងាយស្រួល Maintain, Scalable។

---

## 2. Code Organization និង Modularization 🌟

* **Modularization:** បំបែក Code ជា Modules (ឧ. Routes, Controllers, Services)។
* **Structure:**
  \`\`\`
  project/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── middleware/
  ├── utils/
  └── server.js
  \`\`\`

---

## 3. Performance Optimization ⚙️

* **Techniques:**
  * Caching: ប្រើ \`redis\` ឬ In-memory Caching។
  * Async/Await: ប្រើ Asynchronous Code ដើម្បីជៀសវាង Blocking។
  * Clustering: ប្រើ \`cluster\` Module សម្រាប់ Multi-core CPUs។
* **Tools:** \`pm2\` សម្រាប់ Process Management។

---

## 4. Logging និង Monitoring 📊

* **Logging:** ប្រើ \`winston\` ឬ \`morgan\` សម្រាប់ Log Requests និង Errors។
* **Monitoring:** ប្រើ Tools ដូចជា New Relic ឬ Heroku Metrics។

---

## 5. Security Practices 🔒

* **Techniques:**
  * Validate Inputs ដើម្បីការពារ Injection Attacks។
  * Use HTTPS និង Helmet Middleware។
  * Store Sensitive Data នៅ Environment Variables។

---
> **គន្លឹះ:** តែងតែតេស្ត Performance នៅ Local Environment និងប្រើ Tools ដូចជា \`pm2\` សម្រាប់ Production។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Modular Code Structure

បង្កើត Folder \`optimized-app\`:
\`\`\`bash
mkdir optimized-app
cd optimized-app
npm init -y
npm install express morgan winston dotenv
\`\`\`

បង្កើត File \`.env\`:
\`\`\`
PORT=3000
\`\`\`

បង្កើត File \`controllers/userController.js\`:
\`\`\`javascript
const getUsers = (req, res) => {
  res.json({ users: [{ id: 1, name: 'Sokha' }] });
};

module.exports = { getUsers };
\`\`\`

បង្កើត File \`routes/userRoutes.js\`:
\`\`\`javascript
const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');

router.get('/users', getUsers);

module.exports = router;
\`\`\`

បង្កើត File \`middleware/logger.js\`:
\`\`\`javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

module.exports = logger;
\`\`\`

បង្កើត File \`server.js\`:
\`\`\`javascript
const express = require('express');
const morgan = require('morgan');
const logger = require('./middleware/logger');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined', { stream: { write: message => logger.info(message) } }));
app.use(express.json());
app.use('/api', userRoutes);

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

**លទ្ធផល**:
* GET \`/api/users\` → \`{ users: [{ id: 1, name: "Sokha" }] }\`
* Logs ត្រូវបានរក្សាទុកនៅ \`error.log\` និង \`combined.log\`

# ឧទាហរណ៍ ២: Performance Optimization ជាមួយ Clustering

បន្ថែម File \`cluster.js\`:
\`\`\`javascript
const cluster = require('cluster');
const os = require('os');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  app.get('/', (req, res) => {
    res.json({ message: \`Hello from worker \${process.pid}\` });
  });

  app.listen(port, () => console.log(\`Worker \${process.pid} running at http://localhost:\${port}\`));
}
\`\`\`

ដំណើរការ File:
\`\`\`bash
node cluster.js
\`\`\`

**លទ្ធផល**:
* GET \`/\` → \`{ message: "Hello from worker <pid>" }\`
* Multiple Workers ដំណើរការនៅ CPU Cores ផ្សេងៗ

# ឧទាហរណ៍ ៣: Security Practices

បន្ថែម \`helmet\` នៅក្នុង \`server.js\`:
\`\`\`javascript
const helmet = require('helmet');
app.use(helmet());
\`\`\`

**លទ្ធផល**:
* HTTP Headers ត្រូវបានកំណត់ដើម្បីបង្កើនសុវត្ថិភាព (ឧ. XSS Protection)
`
  ],
  quiz: [
    {
      question: 'តើ Best Practices នៅក្នុង Node.js មានគោលបំណងអ្វី?',
      options: [
        'បង្កើត Database',
        'ធានាគុណភាព Code និង Maintainability',
        'Serve Static Files',
        'Validate Tokens'
      ],
      correct: 1,
      explanation: 'Best Practices ធានាគុណភាព Code និង Maintainability។'
    },
    {
      question: 'តើ Modularization ជាអ្វី?',
      options: [
        'បំបែក Code ជា Modules',
        'បង្កើត Database Schema',
        'Log Requests',
        'Validate Inputs'
      ],
      correct: 0,
      explanation: 'Modularization បំបែក Code ជា Modules ដើម្បីងាយស្រួល Maintain។'
    },
    {
      question: 'តើ `cluster` Module ប្រើសម្រាប់អ្វី?',
      options: [
        'Database Connection',
        'Utilize Multi-core CPUs',
        'API Testing',
        'Logging'
      ],
      correct: 1,
      explanation: '`cluster` Module ប្រើសម្រាប់ Utilize Multi-core CPUs។'
    },
    {
      question: 'តើ `winston` ប្រើសម្រាប់អ្វី?',
      options: [
        'Logging',
        'Token Generation',
        'Database Queries',
        'Static File Serving'
      ],
      correct: 0,
      explanation: '`winston` ប្រើសម្រាប់ Logging Requests និង Errors។'
    },
    {
      question: 'តើ Helmet Middleware ធ្វើអ្វី?',
      options: [
        'Validate Inputs',
        'Enhance Security',
        'Create Routes',
        'Log Errors'
      ],
      correct: 1,
      explanation: 'Helmet Middleware បន្ថែម HTTP Headers ដើម្បី Enhance Security�।'
    },
    {
      question: 'តើ Async/Await ជួយ Performance ដោយរបៀបណា?',
      options: [
        'Blocking Code',
        'Non-blocking Code',
        'Database Connection',
        'Static File Serving'
      ],
      correct: 1,
      explanation: 'Async/Await ធ្វើឱ្យ Code មានលក្ខណៈ Non-blocking។'
    },
    {
      question: 'តើ `pm2` ប្រើសម្រាប់អ្វី?',
      options: [
        'Process Management',
        'API Testing',
        'Database Queries',
        'Token Generation'
      ],
      correct: 0,
      explanation: '`pm2` ប្រើសម្រាប់ Process Management នៅ Production�।'
    },
    {
      question: 'តើ Caching ជួយ Performance ដោយរបៀបណា?',
      options: [
        'Reduce Database Queries',
        'Increase Bugs',
        'Validate Inputs',
        'Log Requests'
      ],
      correct: 0,
      explanation: 'Caching Reduce Database Queries ដើម្បីបង្កើន Performance។'
    },
    {
      question: 'តើ Environment Variables គួរត្រូវបានរក្សាទុកនៅទីណា?',
      options: [
        'Source Code',
        '.env File',
        'Database',
        'Static Files'
      ],
      correct: 1,
      explanation: 'Environment Variables គួរត្រូវបានរក្សាទុកនៅ `.env` File។'
    },
    {
      question: 'តើ `morgan` ប្រើសម្រាប់អ្វី?',
      options: [
        'Logging HTTP Requests',
        'Token Generation',
        'Database Connection',
        'Validate Inputs'
      ],
      correct: 0,
      explanation: '`morgan` ប្រើសម្រាប់ Logging HTTP Requests។'
    },
    {
      question: 'តើ Security Practices រួមមានអ្វីខ្លះ?',
      options: [
        'Validate Inputs និង Use HTTPS',
        'Create Database',
        'Serve Static Files',
        'Log Errors'
      ],
      correct: 0,
      explanation: 'Security Practices រួមមាន Validate Inputs និង Use HTTPS។'
    },
    {
      question: 'តើ Performance Monitoring Tools មានអ្វីខ្លះ?',
      options: [
        'New Relic, Heroku Metrics',
        'Jest, Supertest',
        'Socket.io, Express',
        'MongoDB, Mongoose'
      ],
      correct: 0,
      explanation: 'New Relic និង Heroku Metrics ជា Monitoring Tools។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Best Practices?',
      options: [
        'កាត់បន្ថយ Bugs និង Scalable',
        'បង្កើត Dynamic HTML',
        'ភ្ជាប់ Database',
        'បម្រើ Static Files'
      ],
      correct: 0,
      explanation: 'Best Practices កាត់បន្ថយ Bugs និងធ្វើឱ្យ Application Scalable។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Best Practices និង Performance Optimization

គោលបំណង: អនុវត្តការបង្កើត Node.js Application ដោយប្រើ Best Practices និង Optimization។

1. **បង្កើត Modular Application**:
   * បង្កើត Folder \`optimized-app\` និង Initialize npm:
     \`\`\`bash
     mkdir optimized-app
     cd optimized-app
     npm init -y
     npm install express morgan winston helmet dotenv
     \`\`\`
   * បង្កើត File \`.env\`:
     \`\`\`
     PORT=3000
     \`\`\`
   * បង្កើត Folder Structure:
     \`\`\`
     optimized-app/
     ├── controllers/
     │   └── userController.js
     ├── routes/
     │   └── userRoutes.js
     ├── middleware/
     │   └── logger.js
     └── server.js
     \`\`\`
   * បង្កើត File \`controllers/userController.js\`, \`routes/userRoutes.js\`, \`middleware/logger.js\`, និង \`server.js\`:
     * បន្ថែម Logging ជាមួយ \`winston\` និង \`morgan\`។
     * បន្ថែម Security ជាមួយ \`helmet\`។
   * ដំណើរការ File:
     \`\`\`bash
     node server.js
     \`\`\`
   * តេស្ត API ដោយប្រើ Postman:
     * GET \`/api/users\`

2. **បន្ថែម Clustering**:
   * បង្កើត File \`cluster.js\`:
     * ប្រើ \`cluster\` Module ដើម្បី Utilize Multi-core CPUs។
   * ដំណើរការ File:
     \`\`\`bash
     node cluster.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល:
     * GET \`/\` → Check Worker PIDs

3. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ API Calls, Logs, និង Clustering។
`,
    solution: `
# ដំណោះស្រាយ៖ Best Practices និង Performance Optimization

## ជំហានទី ១: Modular Application
* **.env**:
  \`\`\`
  PORT=3000
  \`\`\`
* **controllers/userController.js**:
  \`\`\`javascript
  const getUsers = (req, res) => {
    res.json({ users: [{ id: 1, name: 'Sokha' }] });
  };

  module.exports = { getUsers };
  \`\`\`
* **routes/userRoutes.js**:
  \`\`\`javascript
  const express = require('express');
  const router = express.Router();
  const { getUsers } = require('../controllers/userController');

  router.get('/users', getUsers);

  module.exports = router;
  \`\`\`
* **middleware/logger.js**:
  \`\`\`javascript
  const winston = require('winston');

  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });

  module.exports = logger;
  \`\`\`
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const morgan = require('morgan');
  const helmet = require('helmet');
  const logger = require('./middleware/logger');
  require('dotenv').config();
  const userRoutes = require('./routes/userRoutes');
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(helmet());
  app.use(morgan('combined', { stream: { write: message => logger.info(message) } }));
  app.use(express.json());
  app.use('/api', userRoutes);

  app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });

  app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
  \`\`\`
* **cluster.js**:
  \`\`\`javascript
  const cluster = require('cluster');
  const os = require('os');
  const express = require('express');
  const app = express();
  const port = process.env.PORT || 3000;

  if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  } else {
    app.get('/', (req, res) => {
      res.json({ message: \`Hello from worker \${process.pid}\` });
    });

    app.listen(port, () => console.log(\`Worker \${process.pid} running at http://localhost:\${port}\`));
  }
  \`\`\`
* **package.json**:
  \`\`\`json
  {
    "name": "optimized-app",
    "version": "1.0.0",
    "scripts": {
      "start": "node server.js",
      "cluster": "node cluster.js"
    },
    "dependencies": {
      "express": "^4.17.1",
      "morgan": "^1.10.0",
      "winston": "^3.3.3",
      "helmet": "^4.6.0",
      "dotenv": "^10.0.0"
    }
  }
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node server.js
  # Output: Server running at http://localhost:3000
  node cluster.js
  # Output: Worker <pid> running at http://localhost:3000
  \`\`\`
  * GET \`/api/users\` → \`{ users: [{ id: 1, name: "Sokha" }] }\`
  * GET \`/\` (cluster) → \`{ message: "Hello from worker <pid>" }\`
  * Logs នៅ \`error.log\` និង \`combined.log\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* Modular Structure: Routes និង Controllers ដំណើរការត្រឹមត្រូវ។
* Logging: \`winston\` និង \`morgan\` រក្សាទុក Logs។
* Security: \`helmet\` បន្ថែម HTTP Headers។
* Clustering: Multiple Workers ដំណើរការនៅ CPU Cores។
`
  }
};

export default NodeJSLesson7_3Content;