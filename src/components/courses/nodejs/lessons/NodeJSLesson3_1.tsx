import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson3_1Content: LessonContent = {
  title: 'ណែនាំអំពី Express.js',
  objectives: [
    'យល់ដឹងអំពី Express.js និងសារៈសំខាន់របស់វា',
    'ស្វែងយល់ពីការដំឡើង និងការបង្កើត Express Application',
    'រៀនបង្កើត Simple Web Server ជាមួយ Express',
    'ស្គាល់ Structure និង Features សំខាន់ៗរបស់ Express',
    'អនុវត្តការប្រើ Express សម្រាប់ Handling HTTP Requests'
  ],
  content: `
# ណែនាំអំពី Express.js 🌐

---

## 1. តើ Express.js ជាអ្វី? 🤔

* **និយមន័យ:** Express.js គឺជា Web Framework សម្រាប់ Node.js ដែលជួយសម្រួលការបង្កើត Web Applications និង APIs ដោយផ្តល់នូវ Features ដូចជា Routing, Middleware, និង HTTP Utilities។
* **អត្ថប្រយោជន៍:**
  * ងាយស្រួលប្រើ និងអាចបត់បែនបាន។
  * គាំទ្រការបង្កើត RESTful APIs។
  * មាន Community និង Plugins ច្រើន។

---

## 2. ការដំឡើង Express.js 📦

* **តម្រូវការ:** Node.js និង npm ត្រូវបានដំឡើង។
* **ជំហានដំឡើង:**
  1. បង្កើត Project Folder និង Initialize npm:
     \`\`\`bash
     mkdir my-express-app
     cd my-express-app
     npm init -y
     \`\`\`
  2. ដំឡើង Express:
     \`\`\`bash
     npm install express
     \`\`\`
  3. (ស្រេចចិត្ត) ដំឡើង TypeScript និង Types:
     \`\`\`bash
     npm install typescript @types/express --save-dev
     npx tsc --init
     \`\`\`

---

## 3. ការបង្កើត Express Application 🛠️

* **ជំហានសំខាន់ៗ:**
  1. Import \`express\` Module។
  2. បង្កើត Express App។
  3. កំណត់ Routes សម្រាប់ HTTP Requests។
  4. ចាប់ផ្តើម Server នៅ Port ជាក់លាក់។

---

## 4. Features សំខាន់ៗរបស់ Express 🌟

* **Routing:** គ្រប់គ្រង HTTP Methods (GET, POST, etc.) និង URLs។
* **Middleware:** Functions ដែលដំណើរការមុនពេល Response ត្រូវបានបញ្ជូន។
* **Template Engines:** គាំទ្រ Engines ដូចជា EJS ឬ Pug សម្រាប់ Dynamic HTML។
* **Error Handling:** គ្រប់គ្រង Errors ដោយ Middleware។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📡

* **Web Server:** បង្កើត Server ដែលបញ្ជូន HTML ឬ JSON។
* **API Server:** បង្កើត​ RESTful API សម្រាប់ CRUD Operations។

---
> **គន្លឹះ:** ប្រើ \`nodemon\` (npm install nodemon --save-dev) ដើម្បី Auto-restart Server នៅពេល Code ផ្លាស់ប្តូរ។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Simple Express Server

បង្កើត File ឈ្មោះ \`server.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* ចូលទៅ \`http://localhost:3000\` នៅ Browser ដើម្បីឃើញ "Hello, Express.js!"។

# ឧទាហរណ៍ ២: Express Server ជាមួយ JSON Response

បង្កើត File ឈ្មោះ \`api.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/user', (req, res) => {
  res.json({ id: 1, name: 'Sokha', role: 'Developer' });
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
\`\`\`

ដំណើរការ File:

\`\`\`bash
node api.js
\`\`\`

**លទ្ធផល**:
* ចូលទៅ \`http://localhost:3000/api/user\` ដើម្បីឃើញ JSON:
  \`\`\`json
  { "id": 1, "name": "Sokha", "role": "Developer" }
  \`\`\`

# ឧទាហរណ៍ ៣: Express Server ជាមួយ TypeScript

បង្កើត File ឈ্ঘោះ \`server.ts\`:

\`\`\`typescript
import express, { Request, Response } from 'express';
const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
\`\`\`

Compile និងដំណើរការ:

\`\`\`bash
tsc
node dist/server.js
\`\`\`

**លទ្ធផល**:
* ចូលទៅ \`http://localhost:3000\` ដើម្បីឃើញ "Hello, Express with TypeScript!"។
`
  ],
  quiz: [
    {
      question: 'តើ Express.js ជាអ្វី?',
      options: [
        'Database Management System',
        'Web Framework សម្រាប់ Node.js',
        'Programming Language',
        'Core Module នៃ Node.js'
      ],
      correct: 1,
      explanation: 'Express.js ជា Web Framework សម្រាប់ Node.js ដែលជួយសម្រួលការបង្កើត Web Applications និង APIs។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Express.js?',
      options: [
        'គ្រប់គ្រង Hardware',
        'សម្រួលការបង្កើត Web Applications និង APIs',
        'បង្កើត Desktop Applications',
        'គ្រប់គ្រង File System'
      ],
      correct: 1,
      explanation: 'Express.js សម្រួលការបង្កើត Web Applications និង APIs ដោយផ្តល់ Routing និង Middleware។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីដំឡើង Express?',
      options: [
        'npm install node',
        'npm install express',
        'npm init express',
        'npm start express'
      ],
      correct: 1,
      explanation: '`npm install express` ប្រើសម្រាប់ដំឡើង Express.js នៅក្នុង Project។'
    },
    {
      question: 'តើ Method ណាដែលប្រើសម្រាប់កំណត់ Route នៅក្នុង Express?',
      options: [
        'app.listen()',
        'app.get()',
        'app.send()',
        'app.json()'
      ],
      correct: 1,
      explanation: '`app.get()` ប្រើសម្រាប់កំណត់ Route សម្រាប់ HTTP GET Requests។'
    },
    {
      question: 'តើ `app.listen()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជូន JSON Response',
        'ចាប់ផ្តើម Express Server',
        'កំណត់ Route',
        'គ្រប់គ្រង Middleware'
      ],
      correct: 1,
      explanation: '`app.listen()` ប្រើសម្រាប់ចាប់ផ្តើម Express Server នៅ Port ជាក់លាក់។'
    },
    {
      question: 'តើ Feature ណាមួយជាផ្នែកសំខាន់នៃ Express?',
      options: [
        'File System Management',
        'Routing និង Middleware',
        'Database Creation',
        'Hardware Monitoring'
      ],
      correct: 1,
      explanation: 'Routing និង Middleware ជា Features សំខាន់នៃ Express.js។'
    },
    {
      question: 'តើ `res.send()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ចាប់ផ្តើម Server',
        'បញ្ជូន Response ទៅ Client',
        'កំណត់ Route',
        'គ្រប់គ្រង Errors'
      ],
      correct: 1,
      explanation: '`res.send()` បញ្ជូន Response (ឧ. Text, HTML) ទៅ Client។'
    },
    {
      question: 'តើ `res.json()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជូន JSON Response',
        'កំណត់ Status Code',
        'ចាប់ផ្តើម Server',
        'គ្រប់គ្រង File Paths'
      ],
      correct: 0,
      explanation: '`res.json()` បញ្ជូន JSON Response ទៅ Client។'
    },
    {
      question: 'តើ Express.js តម្រូវឱ្យដំឡើងដែរឬទេ?',
      options: [
        'ជា Core Module មិនចាំបាច់ដំឡើង',
        'តម្រូវឱ្យដំឡើងជាមួយ npm',
        'មានតែនៅក្នុង Browser',
        'ជា Global Module'
      ],
      correct: 1,
      explanation: 'Express.js តម្រូវឱ្យដំឡើងជាមួយ `npm install express`។'
    },
    {
      question: 'តើ Port អ្វីដែលគេប្រើជាទូទៅសម្រាប់ Express Server?',
      options: ['80', '3000', '8080', '5000'],
      correct: 1,
      explanation: 'Port 3000 ត្រូវបានប្រើជាទូទៅសម្រាប់ Express Server ក្នុង Development។'
    },
    {
      question: 'តើ Middleware នៅក្នុង Express មានតួនាទីអ្វី?',
      options: [
        'បញ្ជូន JSON Response',
        'ដំណើរការមុនពេល Response ត្រូវបានបញ្ជូន',
        'បង្កើត Database',
        'គ្រប់គ្រង File System'
      ],
      correct: 1,
      explanation: 'Middleware ដំណើរការមុនពេល Response ត្រូវបានបញ្ជូន ដើម្បីគ្រប់គ្រង Requests។'
    },
    {
      question: 'តើឧទាហរណ៍ណាមួយខាងក្រោមប្រើ Express.js?',
      options: [
        'អាន File ជាមួយ `fs`',
        'បង្កើត Web Server ជាមួយ `app.get()`',
        'ទាញយក System Info ជាមួយ `os`',
        'បង្កើត Path ជាមួយ `path`'
      ],
      correct: 1,
      explanation: 'បង្កើត Web Server ជាមួយ `app.get()` ជាការប្រើ Express.js។'
    },
    {
      question: 'តើ Command ណាដែលប្រើសម្រាប់ Initialize npm Project?',
      options: [
        'npm start',
        'npm init -y',
        'npm install',
        'npm run'
      ],
      correct: 1,
      explanation: '`npm init -y` ប្រើសម្រាប់ Initialize npm Project ដោយបង្កើត `package.json`។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: ណែនាំអំពី Express.js

គោលបំណង: អនុវត្តការបង្កើត Express Server និង Handling HTTP Requests។

1. **បង្កើត Simple Express Server**:
   * បង្កើត Folder \`my-express-app\` និង Initialize npm:
     \`\`\`bash
     mkdir my-express-app
     cd my-express-app
     npm init -y
     \`\`\`
   * ដំឡើង Express:
     \`\`\`bash
     npm install express
     \`\`\`
   * បង្កើត File \`server.js\`:
     \`\`\`javascript
     const express = require('express');
     const app = express();
     const port = 3000;
     app.get('/', (req, res) => {
       res.send('Welcome to Express Server!');
     });
     app.listen(port, () => {
       console.log(\`Server running at http://localhost:\${port}\`);
     });
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000\`។

2. **បង្កើត API Endpoint**:
   * បន្ថែម Route នៅក្នុង \`server.js\`:
     \`\`\`javascript
     app.get('/api/users', (req, res) => {
       res.json([
         { id: 1, name: 'Sokha' },
         { id: 2, name: 'Rithy' }
       ]);
     });
     \`\`\`
   * ដំណើរការ File ឡើងវិញ:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/api/users\`។

3. **ប្រើ Express ជាមួយ TypeScript**:
   * ដំឡើង TypeScript និង Types:
     \`\`\`bash
     npm install typescript @types/express --save-dev
     npx tsc --init
     \`\`\`
   * បង្កើត File \`server.ts\`:
     \`\`\`typescript
     import express, { Request, Response } from 'express';
     const app = express();
     const port = 3000;
     app.get('/', (req: Request, res: Response) => {
       res.send('Express with TypeScript!');
     });
     app.listen(port, () => {
       console.log(\`Server running at http://localhost:\${port}\`);
     });
     \`\`\`
   * Compile និងដំណើរការ:
     \`\`\`bash
     tsc
     node dist/server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000\`។

4. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ \`server.js\` (JavaScript) និង \`server.ts\` (TypeScript)។
`,
    solution: `
# ដំណោះស្រាយ៖ ណែនាំអំពី Express.js

## ជំហានទី ១: បង្កើត Simple Express Server
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const app = express();
  const port = 3000;
  app.get('/', (req, res) => {
    res.send('Welcome to Express Server!');
  });
  app.get('/api/users', (req, res) => {
    res.json([
      { id: 1, name: 'Sokha' },
      { id: 2, name: 'Rithy' }
    ]);
  });
  app.listen(port, () => {
    console.log(\`Server running at http://localhost:\${port}\`);
  });
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node server.js
  # Output: Server running at http://localhost:3000
  \`\`\`
  * \`http://localhost:3000\` → "Welcome to Express Server!"
  * \`http://localhost:3000/api/users\` → JSON:
    \`\`\`json
    [{ "id": 1, "name": "Sokha" }, { "id": 2, "name": "Rithy" }]
    \`\`\`

## ជំហានទី ២: ប្រើ Express ជាមួយ TypeScript
* **server.ts**:
  \`\`\`typescript
  import express, { Request, Response } from 'express';
  const app = express();
  const port = 3000;
  app.get('/', (req: Request, res: Response) => {
    res.send('Express with TypeScript!');
  });
  app.listen(port, () => {
    console.log(\`Server running at http://localhost:\${port}\`);
  });
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  tsc
  node dist/server.js
  # Output: Server running at http://localhost:3000
  \`\`\`
  * \`http://localhost:3000\` → "Express with TypeScript!"

## លទ្ធផលផ្ទៀងផ្ទាត់
* **server.js**: Responses ត្រឹមត្រូវសម្រាប់ \`/\` និង \`/api/users\`។
* **server.ts**: Response ត្រឹមត្រូវសម្រាប់ \`/\` ជាមួយ TypeScript។
`
  }
};

export default NodeJSLesson3_1Content;