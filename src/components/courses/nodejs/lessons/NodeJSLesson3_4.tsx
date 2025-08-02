import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson3_4Content: LessonContent = {
  title: 'Request និង Response Objects',
  objectives: [
    'យល់ដឹងអំពី Request និង Response Objects ក្នុង Express.js',
    'ស្វែងយល់ពី Properties និង Methods សំខាន់ៗនៃ `req` និង `res`',
    'រៀនប្រើ `req` ដើម្បីទាញ Data ពី Client',
    'រៀនប្រើ `res` ដើម្បីបញ្ជូន Response ទៅ Client',
    'អនុវត្តការគ្រប់គ្រង HTTP Requests និង Responses'
  ],
  content: `
# Request និង Response Objects 🛠️

---

## 1. តើ Request និង Response Objects ជាអ្វី? 🤔

* **Request Object (\`req\`):** តំណាងឱ្យ HTTP Request ពី Client ដែលផ្ទុកព័ត៌មានដូចជា URL, Parameters, Headers, និង Body។
* **Response Object (\`res\`):** ប្រើសម្រាប់បញ្ជូន Response ទៅ Client ដូចជា HTML, JSON, ឬ Status Codes។
* **ឧទាហរណ៍:** ទាញ User ID ពី \`req.params\` និងបញ្ជូន JSON ជាមួយ \`res.json()\`។

---

## 2. Properties និង Methods សំខាន់ៗនៃ Request Object 📥

* **Properties:**
  * \`req.params\`: ទាញ Route Parameters (ឧ. \`/users/:id\`)។
  * \`req.query\`: ទាញ Query Strings (ឧ. \`/search?q=term\`)។
  * \`req.body\`: ទាញ Data ពី Request Body (តម្រូវឱ្យប្រើ \`express.json()\`)។
  * \`req.headers\`: ទាញ HTTP Headers។
* **Methods:**
  * \`req.get(header)\`: ទាញ Header ជាក់លាក់ (ឧ. \`req.get('Content-Type')\`)។

---

## 3. Properties និង Methods សំខាន់ៗនៃ Response Object 📤

* **Properties:**
  * \`res.statusCode\`: កំណត់ HTTP Status Code (ឧ. 200, 404)។
  * \`res.locals\`: ទុក Data សម្រាប់ Request Scope។
* **Methods:**
  * \`res.send()\`: បញ្ជូន Response (Text, HTML, etc.)។
  * \`res.json()\`: បញ្ជូន JSON Response។
  * \`res.status()\`: កំណត់ Status Code (ឧ. \`res.status(404)\`)។
  * \`res.redirect()\`: បញ្ជូន Client ទៅ URL ផ្សេង។

---

## 4. ការប្រើ Request និង Response ជាក់ស្តែង ⚙️

* **ទាញ Data:** ប្រើ \`req.params\`, \`req.query\`, ឬ \`req.body\` ដើម្បីទទួល Data ពី Client។
* **បញ្ជូន Response:** ប្រើ \`res.send()\`, \`res.json()\`, ឬ \`res.redirect()\` ដើម្បីឆ្លើយតប។
* **ឧទាហរណ៍:** បង្កើត API ដែលទទួល User Data និងបញ្ជូន Response ជា JSON។

---

## 5. ការគ្រប់គ្រង Errors ជាមួយ Response 🌟

* ប្រើ \`res.status()\` និង \`res.json()\` ដើម្បីបញ្ជូន Error Responses (ឧ. 404, 500)។
* **ឧទាហរណ៍:** បញ្ជូន \`{ error: 'Not Found' }\` នៅពេល Route មិនត្រូវគ្នា។

---
> **គន្លឹះ:** ត្រូវប្រើ \`express.json()\` ឬ \`express.urlencoded()\` ដើម្បី Parse \`req.body\` សម្រាប់ POST Requests។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ប្រើ Request និង Response Objects

បង្កើត File ឈ្មោះ \`req-res.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  res.json({ userId: id, message: 'User fetched' });
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node req-res.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/users/123\` → JSON: \`{ "userId": "123", "message": "User fetched" }\`

# ឧទាហរណ៍ ២: ប្រើ Query Strings និង Response Status

បង្កើត File ឈ្មោះ \`query-status.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/search', (req, res) => {
  const query = req.query.q || 'No query';
  if (query === 'No query') {
    res.status(400).json({ error: 'Query parameter required' });
  } else {
    res.status(200).json({ search: query });
  }
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node query-status.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/search?q=nodejs\` → JSON: \`{ "search": "nodejs" }\`
* \`http://localhost:3000/search\` → JSON: \`{ "error": "Query parameter required" }\`

# ឧទាហរណ៍ ៣: POST Request ជាមួយ Request Body

បង្កើត File \`post-body.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: 'Name is required' });
  } else {
    res.status(201).json({ message: \`User \${name} created\` });
  }
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node post-body.js
\`\`\`

**លទ្ធផល**:
* POST Request (Postman) ទៅ \`/users\` ជាមួយ Body:
  \`\`\`json
  { "name": "Sokha" }
  \`\`\`
  → JSON: \`{ "message": "User Sokha created" }\`
* POST Request ដោយគ្មាន \`name\` → JSON: \`{ "error": "Name is required" }\`
`
  ],
  quiz: [
    {
      question: 'តើ Request Object (`req`) មានន័យដូចម្តេច?',
      options: [
        'បញ្ជូន Response ទៅ Client',
        'តំណាងឱ្យ HTTP Request ពី Client',
        'គ្រប់គ្រង Server',
        'បង្កើត Routes'
      ],
      correct: 1,
      explanation: '`req` តំណាងឱ្យ HTTP Request ពី Client ដែលផ្ទុកព័ត៌មានដូចជា Parameters និង Body។'
    },
    {
      question: 'តើ Response Object (`res`) ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញ Data ពី Client',
        'បញ្ជូន Response ទៅ Client',
        'គ្រប់គ្រង Database',
        'កំណត់ Routes'
      ],
      correct: 1,
      explanation: '`res` ប្រើសម្រាប់បញ្ជូន Response ទៅ Client ដូចជា JSON ឬ HTML។'
    },
    {
      question: 'តើ `req.params` ផ្តល់ព័ត៌មានអ្វី?',
      options: [
        'Query Strings',
        'Route Parameters',
        'Request Body',
        'HTTP Headers'
      ],
      correct: 1,
      explanation: '`req.params` ផ្តល់ Route Parameters ដូចជា `:id` ពី URL។'
    },
    {
      question: 'តើ `req.body` តម្រូវឱ្យប្រើ Middleware អ្វី?',
      options: [
        'express.static()',
        'express.json()',
        'express.Router()',
        'express.query()'
      ],
      correct: 1,
      explanation: '`express.json()` តម្រូវឱ្យ Parse `req.body` សម្រាប់ JSON Data។'
    },
    {
      question: 'តើ `res.json()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជូន Text Response',
        'បញ្ជូន JSON Response',
        'ទាញ Query Strings',
        'កំណត់ Route'
      ],
      correct: 1,
      explanation: '`res.json()` បញ្ជូន JSON Response ទៅ Client។'
    },
    {
      question: 'តើ `res.status()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញ Request Headers',
        'កំណត់ HTTP Status Code',
        'បញ្ជូន Query Strings',
        'គ្រប់គ្រង Middleware'
      ],
      correct: 1,
      explanation: '`res.status()` កំណត់ HTTP Status Code ដូចជា 200 ឬ 404។'
    },
    {
      question: 'តើ `req.query` ផ្តល់ព័ត៌មានអ្វី?',
      options: [
        'Route Parameters',
        'Query Strings',
        'Request Body',
        'Status Code'
      ],
      correct: 1,
      explanation: '`req.query` ផ្តល់ Query Strings ពី URL (ឧ. `?q=term`)។'
    },
    {
      question: 'តើ `res.redirect()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជូន JSON Response',
        'បញ្ជូន Client ទៅ URL ផ្សេង',
        'ទាញ Request Body',
        'កំណត់ Route'
      ],
      correct: 1,
      explanation: '`res.redirect()` បញ្ជូន Client ទៅ URL ផ្សេង (ឧ. `/home`)។'
    },
    {
      question: 'តើ Status Code ណាដែលបញ្ជាក់ថា Request ជោគជ័យ?',
      options: ['200', '404', '500', '400'],
      correct: 0,
      explanation: 'Status Code `200 OK` បញ្ជាក់ថា Request ជោគជ័យ។'
    },
    {
      question: 'តើ `req.get(header)` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Status Code',
        'ទាញ Header ជាក់លាក់',
        'បញ្ជូន JSON Response',
        'ទាញ Query Strings'
      ],
      correct: 1,
      explanation: '`req.get(header)` ទាញ Header ជាក់លាក់ ដូចជា `Content-Type`។'
    },
    {
      question: 'តើ Status Code ណាដែលបញ្ជាក់ថា Resource មិនមាន?',
      options: ['200', '201', '404', '500'],
      correct: 2,
      explanation: 'Status Code `404 Not Found` បញ្ជាក់ថា Resource មិនមាន។'
    },
    {
      question: 'តើ `res.locals` ប្រើសម្រាប់អ្វី?',
      options: [
        'ទុក Data សម្រាប់ Request Scope',
        'បញ្ជូន JSON Response',
        'ទាញ Route Parameters',
        'គ្រប់គ្រង Server'
      ],
      correct: 0,
      explanation: '`res.locals` ទុក Data សម្រាប់ Request Scope ដើម្បីប្រើក្នុង Middleware ឬ Routes។'
    },
    {
      question: 'តើអ្វីជាឧទាហរណ៍នៃ Request Body?',
      options: [
        '`/users?q=name`',
        '`{ "name": "Sokha" }`',
        '`/users/:id`',
        '`Content-Type: application/json`'
      ],
      correct: 1,
      explanation: 'Request Body ជា Data ដូចជា `{ "name": "Sokha" }` នៅក្នុង POST Request។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Request និង Response Objects

គោលបំណង: អនុវត្តការប្រើ \`req\` និង \`res\` ដើម្បីគ្រប់គ្រង HTTP Requests និង Responses។

1. **បង្កើត Route ជាមួយ Route Parameters**:
   * បង្កើត Folder \`req-res-app\` និង Initialize npm:
     \`\`\`bash
     mkdir req-res-app
     cd req-res-app
     npm init -y
     npm install express
     \`\`\`
   * បង្កើត File \`server.js\`:
     \`\`\`javascript
     const express = require('express');
     const app = express();
     const port = 3000;
     app.get('/users/:id', (req, res) => {
       res.json({ userId: req.params.id, message: 'User fetched' });
     });
     app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/users/123\`។

2. **ប្រើ Query Strings និង Response Status**:
   * បន្ថែម Route នៅក្នុង \`server.js\`:
     \`\`\`javascript
     app.get('/search', (req, res) => {
       const query = req.query.q || 'No query';
       if (query === 'No query') {
         res.status(400).json({ error: 'Query parameter required' });
       } else {
         res.status(200).json({ search: query });
       }
     });
     \`\`\`
   * ដំណើរការ File ឡើងវិញ:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/search?q=nodejs\` និង \`http://localhost:3000/search\`។

3. **បង្កើត POST Route ជាមួយ Request Body**:
   * បន្ថែម Middleware និង Route នៅក្នុង \`server.js\`:
     \`\`\`javascript
     app.use(express.json());
     app.post('/users', (req, res) => {
       const { name } = req.body;
       if (!name) {
         res.status(400).json({ error: 'Name is required' });
       } else {
         res.status(201).json({ message: \`User \${name} created\` });
       }
     });
     \`\`\`
   * ដំណើរការ File ឡើងវិញ:
     \`\`\`bash
     node server.js
     \`\`\`
   * បញ្ជូន POST Request (Postman) ទៅ \`/users\` ជាមួយ Body:
     \`\`\`json
     { "name": "Sokha" }
     \`\`\`
   * ត្រួតពិនិត្យ Response។

4. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ \`req.params\`, \`req.query\`, \`req.body\`, និង \`res.status()\`។
`,
    solution: `
# ដំណោះស្រាយ៖ Request និង Response Objects

## ជំហានទី ១: Route ជាមួយ Route Parameters
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const app = express();
  const port = 3000;

  app.use(express.json());

  app.get('/users/:id', (req, res) => {
    res.json({ userId: req.params.id, message: 'User fetched' });
  });

  app.get('/search', (req, res) => {
    const query = req.query.q || 'No query';
    if (query === 'No query') {
      res.status(400).json({ error: 'Query parameter required' });
    } else {
      res.status(200).json({ search: query });
    }
  });

  app.post('/users', (req, res) => {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ error: 'Name is required' });
    } else {
      res.status(201).json({ message: \`User \${name} created\` });
    }
  });

  app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node server.js
  # Output: Server running at http://localhost:3000
  \`\`\`
  * \`http://localhost:3000/users/123\` → JSON: \`{ "userId": "123", "message": "User fetched" }\`
  * \`http://localhost:3000/search?q=nodejs\` → JSON: \`{ "search": "nodejs" }\`
  * \`http://localhost:3000/search\` → JSON: \`{ "error": "Query parameter required" }\`
  * POST \`/users\` (Postman) ជាមួយ Body \`{ "name": "Sokha" }\` → JSON: \`{ "message": "User Sokha created" }\`
  * POST \`/users\` ដោយគ្មាន \`name\` → JSON: \`{ "error": "Name is required" }\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* Route Parameters: \`req.params.id\` បង្ហាញ \`123\` សម្រាប់ \`/users/123\`។
* Query Strings: \`req.query.q\` បង្ហាញ \`nodejs\` ឬ \`No query\`។
* Request Body: \`req.body.name\` បង្ហាញ \`Sokha\` ឬ Error ប្រសិនបើគ្មាន \`name\`។
* Response Status: Status Codes \`200\`, \`201\`, និង \`400\` ត្រូវបានបញ្ជូនត្រឹមត្រូវ។
`
  }
};

export default NodeJSLesson3_4Content;