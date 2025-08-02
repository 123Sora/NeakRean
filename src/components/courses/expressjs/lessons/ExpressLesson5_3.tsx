import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson5_3Content: LessonContent = {
  title: 'Logging',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Logging នៅក្នុង Express.js',
    'រៀនប្រើ morgan សម្រាប់ HTTP Request Logging',
    'ស្វែងយល់ពី Custom Logging ជាមួយ winston',
    'អនុវត្ត Log Management សម្រាប់ Debugging និង Monitoring',
  ],
  content: `
# Logging 📝

---

**Logging** គឺជាដំណើរការកត់ត្រាព័ត៌មានអំពី Events នៅក្នុង Application។ Logging ជួយ Debugging, Monitoring, និងការពារ Security Issues។ នៅក្នុងមេរៀននេះ យើងនឹងប្រើ **morgan** និង **winston**។

---

## 1. សារៈសំខាន់នៃ Logging

Logging ជួយ:
- **Debugging:** ស្វែងរក Errors នៅក្នុង Code។
- **Monitoring:** តាមដាន Performance និង Usage។
- **Security:** កត់ត្រា Suspicious Activities។

---

## 2. ការប្រើ morgan

**morgan** ជា Middleware សម្រាប់ Log HTTP Requests។

**ឧទាហរណ៍:**
\`\`\`javascript
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000);
\`\`\`

**Log Formats:**
- \`combined\`: ស្តង់ដារ Apache Log Format។
- \`dev\`: សម្រាប់ Development ជាមួយ Colors។

---

## 3. Custom Logging ជាមួយ winston

**winston** ជា Logging Library ដែលអនុញ្ញាតឱ្យបង្កើត Custom Logs។

**ឧទាហរណ៍:**
\`\`\`javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

logger.info('Application started');
\`\`\`

---

## 4. Log Management

- **Log Levels:** debug, info, warn, error។
- **Log Rotation:** បង្កើត File ថ្មីនៅពេល Log ធំពេក។
- **Centralized Logging:** ប្រើ Tools ដូចជា ELK Stack។

**ឧទាហរណ៍ (Error Logging):**
\`\`\`javascript
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({ error: 'Something went wrong' });
});
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Logging

- **ប្រើ morgan សម្រាប់ HTTP Requests:** សម្រាប់ Simplicity។
- **ប្រើ winston សម្រាប់ Custom Logs:** សម្រាប់ Flexibility។
- **កុំ Log Sensitive Data:** ដូចជា Passwords។
- **អាន Documentation:** [morgan](https://github.com/expressjs/morgan), [winston](https://github.com/winstonjs/winston)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ morgan Logging</h3>
<p>បន្ផែម morgan សម្រាប់ Log HTTP Requests។</p>
<pre><code class="language-javascript">
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000);
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ winston Logging</h3>
<p>ប្រើ winston សម្រាប់ Custom Logging។</p>
<pre><code class="language-javascript">
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()]
});

app.get('/log', (req, res) => {
  logger.info('GET /log accessed');
  res.send('Logged');
});
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Logging ជួយអ្វី?',
      options: ['Validate Input', 'Debugging និង Monitoring', 'Hash Passwords', 'Serve Files'],
      correct: 1,
      explanation: 'Logging ជួយ Debugging, Monitoring, និង Security។'
    },
    {
      question: 'តើ morgan ប្រើសម្រាប់អ្វី?',
      options: ['Custom Logging', 'HTTP Request Logging', 'Error Handling', 'Input Validation'],
      correct: 1,
      explanation: 'morgan ប្រើសម្រាប់ Log HTTP Requests។'
    },
    {
      question: 'តើ winston ជាអ្វី?',
      options: ['Middleware', 'Logging Library', 'ORM', 'Validator'],
      correct: 1,
      explanation: 'winston ជា Logging Library សម្រាប់ Custom Logs�।'
    },
    {
      question: 'តើ Log Level `info` មានន័យដូចម្តេច?',
      options: ['Critical Error', 'General Information', 'Debug Data', 'Warning'],
      correct: 1,
      explanation: '`info` ប្រើសម្រាប់ General Information។'
    },
    {
      question: 'តើ morgan Format `dev` មានលក្ខណៈដូចម្តេច?',
      options: ['JSON Output', 'Colored Output', 'File Output', 'Encrypted Output'],
      correct: 1,
      explanation: '`dev` Format ផ្តល់ Colored Output សម្រាប់ Development។'
    },
    {
      question: 'តើ winston អាច Log ទៅឯណាបាន?',
      options: ['Console និង File', 'Database ប៉ុណ្ណោះ', 'Browser', 'Static Files'],
      correct: 0,
      explanation: 'winston អាច Log ទៅ Console, File, និង Destinations ផ្សេងៗ។'
    },
    {
      question: 'តើ Log Rotation មានប្រយោជន៍អ្វី?',
      options: ['Validate Input', 'ការពារ Log Files ធំពេក', 'Hash Logs', 'Serve Logs'],
      correct: 1,
      explanation: 'Log Rotation ការពារ Log Files ធំពេក។'
    },
    {
      question: 'តើ Logging គួរជៀសវាងអ្វី?',
      options: ['HTTP Requests', 'Sensitive Data', 'Errors', 'Timestamps'],
      correct: 1,
      explanation: 'Logging គួរជៀសវាង Sensitive Data ដូចជា Passwords។'
    },
    {
      question: 'តើ morgan ជា Middleware ដែរឬទេ?',
      options: ['បាន', 'មិនបាន', 'បាន ប៉ុន្តែតែនៅ Production', 'មិនបាន ព្រោះជា Library'],
      correct: 0,
      explanation: 'morgan ជា Middleware សម្រាប់ HTTP Request Logging�।'
    },
    {
      question: 'តើ winston គាំទ្រ Log Levels អ្វីខ្លះ?',
      options: ['debug, info, warn, error', 'get, post, put, delete', 'admin, user', 'read, write'],
      correct: 0,
      explanation: 'winston គាំទ្រ Log Levels: debug, info, warn, error។'
    },
    {
      question: 'តើ Centralized Logging ប្រើ Tools អ្វី?',
      options: ['express-validator', 'ELK Stack', 'jsonwebtoken', 'helmet'],
      correct: 1,
      explanation: 'Centralized Logging ប្រើ Tools ដូចជា ELK Stack។'
    },
    {
      question: 'តើ Logging ជួយ Security ដោយរបៀបណា?',
      options: ['Validate Input', 'កត់ត្រា Suspicious Activities', 'Hash Passwords', 'Serve Files'],
      correct: 1,
      explanation: 'Logging កត់ត្រា Suspicious Activities សម្រាប់ Security។'
    },
    {
      question: 'តើ `logger.error()` ប្រើសម្រាប់អ្វី?',
      options: ['Log General Information', 'Log Errors', 'Log HTTP Requests', 'Log Static Files'],
      correct: 1,
      explanation: '`logger.error()` ប្រើសម្រាប់ Log Errors។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ដែលអនុវត្ត Logging។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-logging\`។
   - ប្រើ \`npm init -y\`។
   - ដំឡើង Dependencies: \`npm install express morgan winston\`។

2. **បង្កើត Routes:**
   - បង្កើត File: \`app.js\`។
   - បន្ផែម \`morgan('dev')\` Middleware សម្រាប់ Log HTTP Requests។
   - បន្ផែម winston Logger ជាមួយ:
     - Console Transport (Log Level: info)។
     - File Transport (\`app.log\`, Log Level: error)។
   - Route \`/\` (GET): Log \`info\` Message និងឆ្លើយតប \`{ message: "Home" }\`។
   - Route \`/error\` (GET): បង្កើត Error និង Log ជាមួយ \`logger.error()\`។
   - បន្ផែម Error Handling Middleware ដើម្បី Log Errors។

3. **Test Application:**
   - Run \`node app.js\`។
   - ប្រើ Postman:
     - GET \`/\`
     - GET \`/error\`
   - ពិនិត្យ Console និង File \`app.log\` សម្រាប់ Logs។

**ការណែនាំ:** កុំ Log Sensitive Data។
    `,
    solution: `
\`\`\`text
const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const app = express();

app.use(morgan('dev'));

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log', level: 'error' })
  ]
});

app.get('/', (req, res) => {
  logger.info('Home route accessed');
  res.json({ message: 'Home' });
});

app.get('/error', (req, res, next) => {
  const err = new Error('Test error');
  next(err);
});

app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({ error: err.message });
});

app.listen(3000, () => {
  logger.info('Server started on http://localhost:3000');
});
\`\`\`
`
  }
};

export default ExpressLesson5_3Content;