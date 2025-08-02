import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson3_3Content: LessonContent = {
  title: 'Middleware ក្នុង Express.js',
  objectives: [
    'យល់ដឹងអំពី Middleware នៅក្នុង Express.js',
    'ស្វែងយល់ពីប្រភេទនៃ Middleware',
    'រៀនបង្កើត និងប្រើ Custom Middleware',
    'អនុវត្ត Middleware សម្រាប់ Logging, Authentication, និង Error Handling',
    'ស្គាល់ Built-in និង Third-party Middleware'
  ],
  content: `
# Middleware ក្នុង Express.js 🛠️

---

## 1. តើ Middleware ជាអ្វី? 🤔

* **និយមន័យ:** Middleware គឺជា Functions ដែលដំណើរការនៅចន្លោះ Request និង Response ដើម្បីគ្រប់គ្រង ឬកែប្រែ Request/Response Objects។
* **តួនាទី:** Logging, Authentication, Parsing Request Body, Error Handling, ជាដើម។
* **Syntax:**
  \`\`\`javascript
  function middleware(req, res, next) {
    // Logic
    next();
  }
  \`\`\`

---

## 2. ប្រភេទនៃ Middleware 🌟

* **Application-level Middleware:** ប្រើជាមួយ \`app.use()\` ឬ \`app.<method>()\`។
* **Router-level Middleware:** ប្រើជាមួយ \`router.use()\`។
* **Error-handling Middleware:** មាន 4 Parameters \`(err, req, res, next)\`។
* **Built-in Middleware:** ដូចជា \`express.json()\`, \`express.static()\`។
* **Third-party Middleware:** ដូចជា \`body-parser\`, \`cors\`។

---

## 3. ការបង្កើត Custom Middleware ⚙️

* **ជំហាន:**
  1. បង្កើត Function ដែលទទួល \`req\`, \`res\`, និង \`next\`។
  2. អនុវត្ត Logic (ឧ. Logging, Validation)។
  3. ហៅ \`next()\` ដើម្បីបន្ត Request Pipeline។
* **ឧទាហរណ៍:** Logger Middleware ដើម្បីកត់ត្រា Request Details។

---

## 4. Built-in និង Third-party Middleware 📦

* **Built-in:**
  * \`express.json()\`: Parse JSON Request Body។
  * \`express.urlencoded()\`: Parse URL-encoded Data។
  * \`express.static()\`: Serve Static Files (ឧ. HTML, CSS)។
* **Third-party (តម្រូវឱ្យដំឡើង):**
  * \`cors\`: អនុញ្ញាត Cross-origin Requests។
  * \`morgan\`: HTTP Request Logger។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📡

* **Logging:** កត់ត្រា Request Method និង URL។
* **Authentication:** ពិនិត្យ Token មុនពេលចូលប្រើ Route។
* **Error Handling:** បញ្ជូន Error Responses ដោយស្វ័យប្រវត្តិ។

---
> **គន្លឹះ:** តែងតែហៅ \`next()\` នៅក្នុង Middleware លើកលែងតែចង់បញ្ឈប់ Request Pipeline។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Custom Logger Middleware

បង្កើត File ឈ្មោះ \`logger.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
};

app.use(logger);

app.get('/', (req, res) => res.send('Home Page'));

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node logger.js
\`\`\`

**លទ្ធផល**:
* ចូល \`http://localhost:3000\` → "Home Page"
* Console: \`GET /\`

# ឧទាហរណ៍ ២: Built-in Middleware (express.json)

បង្កើត File ឈ្មោះ \`json-parser.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/user', (req, res) => {
  res.json({ received: req.body });
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node json-parser.js
\`\`\`

**លទ្ធផល**:
* POST Request (Postman) ទៅ \`/user\` ជាមួយ Body:
  \`\`\`json
  { "name": "Sokha" }
  \`\`\`
* Response: \`{ "received": { "name": "Sokha" } }\`

# ឧទាហរណ៍ ៣: Error-handling Middleware

បង្កើត File ឈ្មោះ \`error-handler.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node error-handler.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/error\` → JSON: \`{ "error": "Something went wrong!" }\`
`
  ],
  quiz: [
    {
      question: 'តើ Middleware នៅក្នុង Express.js ជាអ្វី?',
      options: [
        'Function ដែលបង្កើត Routes',
        'Function ដែលដំណើរការនៅចន្លោះ Request និង Response',
        'Module សម្រាប់ Database',
        'Method សម្រាប់ File Operations'
      ],
      correct: 1,
      explanation: 'Middleware ជា Function ដែលដំណើរការនៅចន្លោះ Request និង Response។'
    },
    {
      question: 'តើ `next()` នៅក្នុង Middleware ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជូន Response',
        'បន្ត Request Pipeline',
        'បញ្ឈប់ Server',
        'គ្រប់គ្រង Errors'
      ],
      correct: 1,
      explanation: '`next()` បន្ត Request Pipeline ទៅ Middleware ឬ Route បន្ទាប់។'
    },
    {
      question: 'តើ Middleware ប្រភេទណាដែលមាន 4 Parameters?',
      options: [
        'Application-level Middleware',
        'Router-level Middleware',
        'Error-handling Middleware',
        'Built-in Middleware'
      ],
      correct: 2,
      explanation: 'Error-handling Middleware មាន 4 Parameters: `(err, req, res, next)`។'
    },
    {
      question: 'តើ `express.json()` ជា Middleware ប្រភេទណា?',
      options: [
        'Third-party Middleware',
        'Built-in Middleware',
        'Custom Middleware',
        'Error-handling Middleware'
      ],
      correct: 1,
      explanation: '`express.json()` ជា Built-in Middleware សម្រាប់ Parse JSON Request Body។'
    },
    {
      question: 'តើ `app.use()` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Route',
        'ភ្ជាប់ Middleware ឬ Router',
        'បញ្ជូន JSON Response',
        'ចាប់ផ្តើម Server'
      ],
      correct: 1,
      explanation: '`app.use()` ភ្ជាប់ Middleware ឬ Router ទៅ Application។'
    },
    {
      question: 'តើ Middleware អាចប្រើសម្រាប់អ្វី?',
      options: [
        'Logging, Authentication, Error Handling',
        'Database Creation',
        'File Path Management',
        'Hardware Monitoring'
      ],
      correct: 0,
      explanation: 'Middleware ប្រើសម្រាប់ Logging, Authentication, Error Handling, ជាដើម។'
    },
    {
      question: 'តើ `express.static()` ប្រើសម្រាប់អ្វី?',
      options: [
        'Parse JSON',
        'Serve Static Files',
        'Handle Errors',
        'Create Routes'
      ],
      correct: 1,
      explanation: '`express.static()` ប្រើសម្រាប់ Serve Static Files ដូចជា HTML, CSS។'
    },
    {
      question: 'តើ Third-party Middleware តម្រូវឱ្យធ្វើអ្វី?',
      options: [
        'មានស្រាប់នៅក្នុង Express',
        'ដំឡើងជាមួយ npm',
        'បង្កើតដោយខ្លួនឯង',
        'ជា Core Module'
      ],
      correct: 1,
      explanation: 'Third-party Middleware (ឧ. `cors`) តម្រូវឱ្យដំឡើងជាមួយ npm។'
    },
    {
      question: 'តើ Custom Middleware ត្រូវការអ្វីជាចាំបាច់?',
      options: [
        'Status Code',
        'next() Function',
        'JSON Response',
        'Route Parameter'
      ],
      correct: 1,
      explanation: 'Custom Middleware ត្រូវការ `next()` ដើម្បីបន្ត Request Pipeline។'
    },
    {
      question: 'តើ Middleware ណាដែល Parse URL-encoded Data?',
      options: [
        'express.json()',
        'express.urlencoded()',
        'express.static()',
        'morgan'
      ],
      correct: 1,
      explanation: '`express.urlencoded()` Parse URL-encoded Data ពី Request Body�।'
    },
    {
      question: 'តើអ្វីជាឧទាហរណ៍នៃ Third-party Middleware?',
      options: ['express.json()', 'express.static()', 'cors', 'app.use()'],
      correct: 2,
      explanation: '`cors` ជា Third-party Middleware សម្រាប់ Cross-origin Requests។'
    },
    {
      question: 'តើ Error-handling Middleware បញ្ជូន Response ដោយរបៀបណា?',
      options: [
        'ប្រើ `res.send()`',
        'ប្រើ `res.status()` និង JSON',
        'ប្រើ `next()` ដើម្បីបន្ត',
        'ប្រើ `app.get()`'
      ],
      correct: 1,
      explanation: 'Error-handling Middleware បញ្ជូន Response ដោយ `res.status()` និង JSON។'
    },
    {
      question: 'តើឧទាហរណ៍ណាមួយខាងក្រោមជា Middleware?',
      options: [
        'កំណត់ Route ជាមួយ `app.get()`',
        'កត់ត្រា Request ជាមួយ Logger',
        'បង្កើត File Path',
        'ទាញ System Info'
      ],
      correct: 1,
      explanation: 'កត់ត្រា Request ជាមួយ Logger ជា Middleware។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Middleware ក្នុង Express.js

គោលបំណង: អនុវត្តការបង្កើត និងប្រើ Middleware សម្រាប់ Logging, Parsing, និង Error Handling។

1. **បង្កើត Custom Logger Middleware**:
   * បង្កើត Folder \`middleware-app\` និង Initialize npm:
     \`\`\`bash
     mkdir middleware-app
     cd middleware-app
     npm init -y
     npm install express
     \`\`\`
   * បង្កើត File \`server.js\`:
     \`\`\`javascript
     const express = require('express');
     const app = express();
     const port = 3000;
     const logger = (req, res, next) => {
       console.log(\`\${req.method} \${req.url}\`);
       next();
     };
     app.use(logger);
     app.get('/', (req, res) => res.send('Home Page'));
     app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000\` និង Console Log។

2. **ប្រើ Built-in Middleware (express.json)**:
   * កែសម្រួល \`server.js\`:
     \`\`\`javascript
     app.use(express.json());
     app.post('/data', (req, res) => res.json({ received: req.body }));
     \`\`\`
   * ដំណើរការ File ឡើងវិញ:
     \`\`\`bash
     node server.js
     \`\`\`
   * បញ្ជូន POST Request (Postman) ទៅ \`/data\` ជាមួយ Body:
     \`\`\`json
     { "key": "value" }
     \`\`\`
   * ត្រួតពិនិត្យ Response។

3. **បង្កើត Error-handling Middleware**:
   * បន្ថែម Route និង Error Middleware នៅក្នុង \`server.js\`:
     \`\`\`javascript
     app.get('/error', (req, res, next) => {
       const err = new Error('Test Error');
       next(err);
     });
     app.use((err, req, res, next) => {
       res.status(500).json({ error: err.message });
     });
     \`\`\`
   * ដំណើរការ File ឡើងវិញ:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/error\`។

4. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ Logger, JSON Parsing, និង Error Handling ។
`,
    solution: `
# ដំណោះស្រាយ៖ Middleware ក្នុង Express.js

## ជំហានទី ១: បង្កើត Custom Logger Middleware
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const app = express();
  const port = 3000;
  const logger = (req, res, next) => {
    console.log(\`\${req.method} \${req.url}\`);
    next();
  };
  app.use(logger);
  app.use(express.json());
  app.get('/', (req, res) => res.send('Home Page'));
  app.post('/data', (req, res) => res.json({ received: req.body }));
  app.get('/error', (req, res, next) => {
    const err = new Error('Test Error');
    next(err);
  });
  app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
  });
  app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node server.js
  # Output: Server running at http://localhost:3000
  \`\`\`
  * \`http://localhost:3000\` → "Home Page"
  * Console: \`GET /\`

## ជំហានទី ២: ប្រើ Built-in Middleware (express.json)
* POST Request (Postman) ទៅ \`/data\` ជាមួយ Body:
  \`\`\`json
  { "key": "value" }
  \`\`\`
* Response: \`{ "received": { "key": "value" } }\`

## ជំហានទី ៣: បង្កើត Error-handling Middleware
* \`http://localhost:3000/error\` → JSON: \`{ "error": "Test Error" }\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* Logger: Console Log បង្ហាញ \`GET /\` ឬ \`POST /data\`។
* JSON Parsing: Response ត្រឹមត្រូវសម្រាប់ POST \`/data\`។
* Error Handling: JSON Error Response សម្រាប់ \`/error\`។
`
  }
};

export default NodeJSLesson3_3Content;