import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson3_2Content: LessonContent = {
  title: 'Routing ក្នុង Express.js',
  objectives: [
    'យល់ដឹងអំពី Routing នៅក្នុង Express.js',
    'ស្វែងយល់ពីការកំណត់ Routes សម្រាប់ HTTP Methods',
    'រៀនប្រើ Route Parameters និង Query Strings',
    'អនុវត្តការបង្កើត RESTful Routes',
    'ស្គាល់ការប្រើ Router Object សម្រាប់ Modular Routing'
  ],
  content: `
# Routing ក្នុង Express.js 🛤️

---

## 1. តើ Routing ជាអ្វី? 🤔

* **និយមន័យ:** Routing គឺជាដំណើរការកំណត់ផ្លូវ (Routes) សម្រាប់ HTTP Requests ដើម្បីបញ្ជូន Responses ដោយផ្អែកលើ URL និង HTTP Method (GET, POST, etc.)។
* **ឧទាហរណ៍:** \`/users\` សម្រាប់ទាញយក User Data, \`/users/:id\` សម្រាប់ទាញ User ជាក់លាក់។

---

## 2. ការកំណត់ Routes ក្នុង Express 🛠️

* **HTTP Methods:**
  * \`app.get()\`: សម្រាប់ GET Requests។
  * \`app.post()\`: សម្រាប់ POST Requests។
  * \`app.put()\`: សម្រាប់ PUT Requests។
  * \`app.delete()\`: សម្រាប់ DELETE Requests។
* **Syntax:**
  \`\`\`javascript
  app.<method>(path, (req, res) => {
    // Handle request
  });
  \`\`\`

---

## 3. Route Parameters និង Query Strings 🌟

* **Route Parameters:** ប្រើ \`:param\` ដើម្បីទាញ Dynamic Values ពី URL (ឧ. \`/users/:id\`)។
  * ចូលប្រើជាមួយ \`req.params.param\`។
* **Query Strings:** ទាញ Values ពី URL Query (ឧ. \`/search?q=term\`)។
  * ចូលប្រើជាមួយ \`req.query\`។

---

## 4. Modular Routing ជាមួយ Router Object ⚙️

* **និយមន័យ:** \`express.Router()\` អនុញ្ញាតឱ្យបង្កើត Modular Routes នៅក្នុង Files ផ្សេងៗ។
* **អត្ថប្រយោជន៍:** ធ្វើឱ្យ Code រៀបចំបានល្អ និងងាយស្រួលថែទាំ។
* **Syntax:**
  \`\`\`javascript
  const router = express.Router();
  router.get('/path', (req, res) => { /* Handle */ });
  app.use('/prefix', router);
  \`\`\`

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📂

* **RESTful API:** បង្កើត Routes សម្រាប់ CRUD Operations (Create, Read, Update, Delete)។
* **Dynamic Pages:** បង្កើត Routes ដែលប្រើ Parameters ឬ Query Strings។

---
> **គន្លឹះ:** ប្រើ \`express.Router()\` សម្រាប់ Projects ធំ ដើម្បីរៀបចំ Routes ឱ្យមានរបៀប។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Basic Routing

បង្កើត File ឈ្មោះ \`basic-routing.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Home Page'));
app.get('/about', (req, res) => res.send('About Page'));
app.post('/submit', (req, res) => res.send('Form Submitted'));

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node basic-routing.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/\` → "Home Page"
* \`http://localhost:3000/about\` → "About Page"
* POST Request ទៅ \`/submit\` (ឧ. ប្រើ Postman) → "Form Submitted"

# ឧទាហរណ៍ ២: Route Parameters និង Query Strings

បង្កើត File ឈ្មោះ \`params-query.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/users/:id', (req, res) => {
  res.send(\`User ID: \${req.params.id}\`);
});

app.get('/search', (req, res) => {
  const query = req.query.q || 'No query';
  res.send(\`Search Query: \${query}\`);
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node params-query.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/users/123\` → "User ID: 123"
* \`http://localhost:3000/search?q=nodejs\` → "Search Query: nodejs"

# ឧទាហរណ៍ ៣: Modular Routing

បង្កើត File \`routes/users.js\`:

\`\`\`javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json([{ id: 1, name: 'Sokha' }]));
router.get('/:id', (req, res) => res.json({ id: req.params.id, name: 'User' }));

module.exports = router;
\`\`\`

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/users');

app.use('/users', userRoutes);

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/users\` → JSON: \`[{ "id": 1, "name": "Sokha" }]\`
* \`http://localhost:3000/users/123\` → JSON: \`{ "id": "123", "name": "User" }\`
`
  ],
  quiz: [
    {
      question: 'តើ Routing ក្នុង Express.js មានន័យដូចម្តេច?',
      options: [
        'ការគ្រប់គ្រង File Paths',
        'ការកំណត់ផ្លូវសម្រាប់ HTTP Requests',
        'ការគ្រប់គ្រង Database',
        'ការបង្កើត Middleware'
      ],
      correct: 1,
      explanation: 'Routing កំណត់ផ្លូវសម្រាប់ HTTP Requests ដោយផ្អែកលើ URL និង HTTP Method។'
    },
    {
      question: 'តើ Method ណាដែលប្រើសម្រាប់ GET Requests?',
      options: ['app.post()', 'app.get()', 'app.put()', 'app.delete()'],
      correct: 1,
      explanation: '`app.get()` ប្រើសម្រាប់កំណត់ Route សម្រាប់ GET Requests។'
    },
    {
      question: 'តើ Route Parameters ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញ Query Strings',
        'ទាញ Dynamic Values ពី URL',
        'បញ្ជូន JSON Response',
        'គ្រប់គ្រង Middleware'
      ],
      correct: 1,
      explanation: 'Route Parameters (ឧ. `:id`) ទាញ Dynamic Values ពី URL ដូចជា User ID។'
    },
    {
      question: 'តើ `req.params` ផ្តល់ព័ត៌មានអ្វី?',
      options: [
        'Query Strings',
        'Route Parameters',
        'HTTP Headers',
        'Body Data'
      ],
      correct: 1,
      explanation: '`req.params` ផ្តល់ Route Parameters ដូចជា `:id` ពី URL។'
    },
    {
      question: 'តើ `req.query` ផ្តល់ព័ត៌មានអ្វី?',
      options: [
        'Route Parameters',
        'Query Strings',
        'HTTP Method',
        'Status Code'
      ],
      correct: 1,
      explanation: '`req.query` ផ្តល់ Query Strings ពី URL (ឧ. `?q=term`)។'
    },
    {
      question: 'តើ `express.Router()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជូន Response',
        'បង្កើត Modular Routes',
        'គ្រប់គ្រង File System',
        'ចាប់ផ្តើម Server'
      ],
      correct: 1,
      explanation: '`express.Router()` ប្រើសម្រាប់បង្កើត Modular Routes នៅក្នុង Files ផ្សេងៗ។'
    },
    {
      question: 'តើ `app.post()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញ Data ពី Server',
        'កំណត់ Route សម្រាប់ POST Requests',
        'លុប Data',
        'ផ្លាស់ប្តូរ Data'
      ],
      correct: 1,
      explanation: '`app.post()` កំណត់ Route សម្រាប់ POST Requests ដើម្បីបង្កើត Data។'
    },
    {
      question: 'តើ RESTful Routes មានន័យដូចម្តេច?',
      options: [
        'Routes សម្រាប់ File Operations',
        'Routes សម្រាប់ CRUD Operations',
        'Routes សម្រាប់ Database Management',
        'Routes សម្រាប់ Middleware'
      ],
      correct: 1,
      explanation: 'RESTful Routes ជា Routes សម្រាប់ CRUD Operations (Create, Read, Update, Delete)។'
    },
    {
      question: 'តើ `app.use()` ជាមួយ Router ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជូន JSON Response',
        'ភ្ជាប់ Router ទៅ Prefix Path',
        'ចាប់ផ្តើម Server',
        'គ្រប់គ្រង Errors'
      ],
      correct: 1,
      explanation: '`app.use()` ភ្ជាប់ Router ទៅ Prefix Path (ឧ. `/users`)។'
    },
    {
      question: 'តើអ្វីជាឧទាហរណ៍នៃ Route Parameter?',
      options: ['/users?q=1', '/users/:id', '/users', '/search'],
      correct: 1,
      explanation: '`/users/:id` ជា Route Parameter ដែល `:id` ជា Dynamic Value។'
    },
    {
      question: 'តើអ្វីជាឧទាហរណ៍នៃ Query String?',
      options: ['/users/:id', '/users', '/search?q=nodejs', '/about'],
      correct: 2,
      explanation: '`/search?q=nodejs` មាន Query String `q=nodejs`។'
    },
    {
      question: 'តើ Method ណាដែលប្រើសម្រាប់ DELETE Requests?',
      options: ['app.get()', 'app.post()', 'app.delete()', 'app.put()'],
      correct: 2,
      explanation: '`app.delete()` ប្រើសម្រាប់កំណត់ Route សម្រាប់ DELETE Requests។'
    },
    {
      question: 'តើឧទាហរណ៍ណាមួយខាងក្រោមជា Modular Routing?',
      options: [
        'បង្កើត Route នៅក្នុង `app.get()`',
        'ប្រើ `express.Router()` នៅក្នុង File ផ្សេង',
        'បញ្ជូន JSON Response',
        'គ្រប់គ្រង File Paths'
      ],
      correct: 1,
      explanation: 'ប្រើ `express.Router()` នៅក្នុង File ផ្សេង ជា Modular Routing។'
    },
    {
      question: 'តើ Route ណាមួយត្រូវបានដំណើរការមុនគេប្រសិនបើមាន Routes `/users` និង `/users/:id`?',
      options: [
        '`/users/:id`',
        '`/users`',
        'ទាំងពីរក្នុងពេលតែមួយ',
        'អាស្រ័យលើ HTTP Method'
      ],
      correct: 1,
      explanation: 'Express ដំណើរការ Routes តាមលំដាប់កំណត់។ `/users` ត្រូវបានកំណត់មុន ដូច្នេះវាត្រូវបានដំណើរការមុន `/users/:id` ប្រសិនបើ URL ត្រូវគ្នា។'
    },
    {
      question: 'តើ HTTP Method ណាដែលសមស្របសម្រាប់ការបង្កើត Resource ថ្មី?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      correct: 1,
      explanation: '`POST` ប្រើសម្រាប់បង្កើត Resource ថ្មីនៅក្នុង RESTful API។'
    },
    {
      question: 'តើ Status Code ណាដែលជាទូទៅបញ្ជូនជាមួយ `app.post()` នៅពេលបង្កើត Resource ដោយជោគជ័យ?',
      options: ['200', '201', '404', '500'],
      correct: 1,
      explanation: 'Status Code `201 Created` ជាទូទៅប្រើនៅពេលបង្កើត Resource ដោយជោគជ័យជាមួយ `app.post()`។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃ URL `/users/123?name=Sokha` នៅក្នុង Route `/users/:id`?',
      options: [
        '`req.params.id = 123`, `req.query.name = Sokha`',
        '`req.params.name = Sokha`, `req.query.id = 123`',
        '`req.params.id = Sokha`, `req.query.name = 123`',
        'គ្មាន `req.params` ឬ `req.query`'
      ],
      correct: 0,
      explanation: '`/users/123?name=Sokha` ផ្តល់ `req.params.id = 123` (ពី `:id`) និង `req.query.name = Sokha` (ពី Query String)។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Modular Routing?',
      options: [
        'បញ្ជូន Response លឿនជាង',
        'ធ្វើឱ្យ Code រៀបចំបានល្អ និងងាយថែទាំ',
        'កាត់បន្ថយការប្រើ Memory',
        'គ្រប់គ្រង Database Connections'
      ],
      correct: 1,
      explanation: 'Modular Routing ជាមួយ `express.Router()` ធ្វើឱ្យ Code រៀបចំបានល្អ និងងាយថែទាំ។'
    },
    {
      question: 'តើ Route `/products/:id` នឹងត្រូវគ្នានឹង URL ណាខាងក្រោម?',
      options: [
        '`/products`',
        '`/products/123`',
        '`/products?q=123`',
        '`/products/123/456`'
      ],
      correct: 1,
      explanation: '`/products/:id` ត្រូវគ្នានឹង URL ដែលមាន Single Parameter ដូចជា `/products/123`។'
    },
    {
      question: 'តើ Method `app.all()` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Route សម្រាប់ HTTP Methods ទាំងអស់',
        'បញ្ជូន JSON Response',
        'គ្រប់គ្រង Middleware',
        'ចាប់ផ្តើម Server'
      ],
      correct: 0,
      explanation: '`app.all()` កំណត់ Route ដែលឆ្លើយតបទៅនឹង HTTP Methods ទាំងអស់ (GET, POST, etc.) សម្រាប់ Path ជាក់លាក់។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Routing ក្នុង Express.js

គោលបំណង: អនុវត្តការកំណត់ Routes, Route Parameters, Query Strings, និង Modular Routing�।

1. **បង្កើត Basic Routes**:
   * បង្កើត Folder \`routing-app\` និង Initialize npm:
     \`\`\`bash
     mkdir routing-app
     cd routing-app
     npm init -y
     npm install express
     \`\`\`
   * បង្កើត File \`server.js\`:
     \`\`\`javascript
     const express = require('express');
     const app = express();
     const port = 3000;
     app.get('/', (req, res) => res.send('Home Page'));
     app.get('/about', (req, res) => res.send('About Page'));
     app.post('/submit', (req, res) => res.send('Form Submitted'));
     app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/\`, \`/about\`, និង POST \`/submit\` (ប្រើ Postman)។

2. **ប្រើ Route Parameters និង Query Strings**:
   * បន្ថែម Routes នៅក្នុង \`server.js\`:
     \`\`\`javascript
     app.get('/products/:id', (req, res) => res.send(\`Product ID: \${req.params.id}\`));
     app.get('/search', (req, res) => {
       const query = req.query.q || 'No query';
       res.send(\`Search Query: \${query}\`);
     });
     \`\`\`
   * ដំណើរការ File ឡើងវិញ:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/products/123\` និង \`http://localhost:3000/search?q=phone\`។

3. **បង្កើត Modular Routing**:
   * បង្កើត Folder \`routes\` និង File \`routes/products.js\`:
     \`\`\`javascript
     const express = require('express');
     const router = express.Router();
     router.get('/', (req, res) => res.json([{ id: 1, name: 'Phone' }]));
     router.get('/:id', (req, res) => res.json({ id: req.params.id, name: 'Product' }));
     module.exports = router;
     \`\`\`
   * កែសម្រួល \`server.js\`:
     \`\`\`javascript
     const express = require('express');
     const app = express();
     const port = 3000;
     const productRoutes = require('./routes/products');
     app.use('/products', productRoutes);
     app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/products\` និង \`http://localhost:3000/products/123\`។

4. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ Basic Routes, Route Parameters, Query Strings, និង Modular Routing។
`,
    solution: `
# ដំណោះស្រាយ៖ Routing ក្នុង Express.js

## ជំហានទី ១: បង្កើត Basic Routes
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const app = express();
  const port = 3000;
  app.get('/', (req, res) => res.send('Home Page'));
  app.get('/about', (req, res) => res.send('About Page'));
  app.post('/submit', (req, res) => res.send('Form Submitted'));
  app.get('/products/:id', (req, res) => res.send(\`Product ID: \${req.params.id}\`));
  app.get('/search', (req, res) => {
    const query = req.query.q || 'No query';
    res.send(\`Search Query: \${query}\`);
  });
  app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node server.js
  # Output: Server running at http://localhost:3000
  \`\`\`
  * \`http://localhost:3000/\` → "Home Page"
  * \`http://localhost:3000/about\` → "About Page"
  * POST \`/submit\` (Postman) → "Form Submitted"
  * \`http://localhost:3000/products/123\` → "Product ID: 123"
  * \`http://localhost:3000/search?q=phone\` → "Search Query: phone"

## ជំហានទី ២: បង្កើត Modular Routing
* **routes/products.js**:
  \`\`\`javascript
  const express = require('express');
  const router = express.Router();
  router.get('/', (req, res) => res.json([{ id: 1, name: 'Phone' }]));
  router.get('/:id', (req, res) => res.json({ id: req.params.id, name: 'Product' }));
  module.exports = router;
  \`\`\`
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const app = express();
  const port = 3000;
  const productRoutes = require('./routes/products');
  app.use('/products', productRoutes);
  app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node server.js
  # Output: Server running at http://localhost:3000
  \`\`\`
  * \`http://localhost:3000/products\` → JSON: \`[{ "id": 1, "name": "Phone" }]\`
  * \`http://localhost:3000/products/123\` → JSON: \`{ "id": "123", "name": "Product" }\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* Basic Routes: Responses ត្រឹមត្រូវសម្រាប់ \`/\`, \`/about\`, និង \`/submit\`។
* Route Parameters: \`Product ID: 123\` សម្រាប់ \`/products/123\`។
* Query Strings: \`Search Query: phone\` សម្រាប់ \`/search?q=phone\`។
* Modular Routing: JSON Responses ត្រឹមត្រូវសម្រាប់ \`/products\` និង \`/products/123\` ។
`
  }
};

export default NodeJSLesson3_2Content;