import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson2_4Content: LessonContent = {
  title: 'Request និង Response Objects',
  objectives: [
    'យល់ដឹងពី Request Object (`req`) និងតួនាទីរបស់វា',
    'ស្វែងយល់ពី Response Object (`res`) និង Methods សំខាន់ៗ',
    'រៀនទាញទិន្នន័យពី `req.params`, `req.query`, និង `req.body`',
    'អនុវត្តការប្រើ `res.status()`, `res.send()`, `res.json()` និង `res.redirect()`',
  ],
  content: `
# Request និង Response Objects 📨

---

**Request** (\`req\`) និង **Response** (\`res\`) Objects គឺជាសមាសធាតុស្នូលនៃ Express.js។ \`req\` ផ្ទុកទិន្នន័យពី Client ហើយ \`res\` ប្រើសម្រាប់ឆ្លើយតបទៅ Client។ នៅក្នុងមេរៀននេះ យើងនឹងស្វែងយល់ពីរបៀបប្រើ Objects ទាំងនេះ។

---

## 1. Request Object (\`req\`)

**Request Object** ផ្ទុកព័ត៌មានអំពី HTTP Request ពី Client ដូចជា URL, Parameters, Body, Headers។

### សមាសធាតុសំខាន់ៗ:
- **\`req.params\`**: ទាញ Route Parameters (ឧ. \`/users/:id\`).
- **\`req.query\`**: ទាញ Query Strings (ឧ. \`/search?q=keyword\`).
- **\`req.body\`**: ទាញ Data ពី Request Body (ឧ. POST Form Data).
- **\`req.headers\`**: ទាញ HTTP Headers.
- **\`req.method\`**: HTTP Method (GET, POST, ជាដើម).
- **\`req.url\`**: URL នៃ Request.

**ឧទាហរណ៍:**
\`\`\`javascript
const express = require('express');
const app = express();
app.use(express.json()); // Parse JSON Body

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const query = req.query.name;
  res.send(\`ID: \${id}, Query Name: \${query || 'គ្មាន'}\`);
});

app.post('/users', (req, res) => {
  const name = req.body.name;
  res.send(\`បានទទួល Name: \${name}\`);
});

app.listen(3000);
\`\`\`

- **លទ្ធផល:**
  - \`/users/123?name=John\` → "ID: 123, Query Name: John"
  - POST \`/users\` ជាមួយ Body \`{ "name": "Sok" }\` → "បានទទួល Name: Sok"

---

## 2. Response Object (\`res\`)

**Response Object** ប្រើសម្រាប់ឆ្លើយតបទៅ Client ដោយផ្ញើ Data, Status Codes, ឬ Redirect។

### Methods សំខាន់ៗ:
- **\`res.send(data)\`**: ផ្ញើ String, Buffer, ឬ Object.
- **\`res.json(data)\`**: ផ្ញើ JSON Data.
- **\`res.status(code)\`**: កំណត់ HTTP Status Code (ឧ. 200, 404).
- **\`res.redirect(url)\`**: Redirect ទៅ URL ផ្សេង.
- **\`res.set(header, value)\`**: កំណត់ Headers.

**ឧទាហរណ៍:**
\`\`\`javascript
app.get('/', (req, res) => {
  res.send('<h1>សួស្តីពី Express!</h1>');
});

app.get('/api/users', (req, res) => {
  res.json({ users: ['Sok', 'Chan'] });
});

app.get('/not-found', (req, res) => {
  res.status(404).send('មិនមានទំព័រនេះ');
});

app.get('/go-home', (req, res) => {
  res.redirect('/');
});
\`\`\`

- **លទ្ធផល:**
  - \`/\` → "<h1>សួស្តីពី Express!</h1>"
  - \`/api/users\` → \`{ "users": ["Sok", "Chan"] }\`
  - \`/not-found\` → Status 404, "មិនមានទំព័រនេះ"
  - \`/go-home\` → Redirect ទៅ \`/\`

---

## 3. ការប្រើ \`req.body\`

ដើម្បីទាញ \`req.body\`, ត្រូវប្រើ Middleware \`express.json()\` ឬ \`express.urlencoded()\`។

**ឧទាហរណ៍:**
\`\`\`javascript
app.use(express.json());

app.post('/submit', (req, res) => {
  const { username, password } = req.body;
  res.json({ message: \`ទទួលបាន Username: \${username}\` });
});
\`\`\`

- **លទ្ធផល:** POST \`/submit\` ជាមួយ Body \`{ "username": "admin", "password": "123" }\` → \`{ "message": "ទទួលបាន Username: admin" }\`

---

## 4. គន្លឹះសម្រាប់ Request និង Response

- **ប្រើ \`express.json()\`:** សម្រាប់ Parse JSON Request Body។
- **កំណត់ Status Codes:** ប្រើ \`res.status()\` ដើម្បីបញ្ជាក់ Response Status។
- **Validate Input:** ពិនិត្យ \`req.body\` មុននឹងប្រើ។
- **អាន Documentation:** [expressjs.com/en/api.html#req](https://expressjs.com/en/api.html#req) និង [expressjs.com/en/api.html#res](https://expressjs.com/en/api.html#res)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ ទាញ \`req.params\` និង \`req.query\`</h3>
<p>បង្កើត Route ដែលទាញ ID និង Query Parameter។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();

app.get('/profile/:id', (req, res) => {
  const id = req.params.id;
  const role = req.query.role || 'user';
  res.send(\`<h1>Profile ID: \${id}, Role: \${role}</h1>\`);
});

app.listen(3000);
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ ប្រើ \`res.json()\` និង \`res.redirect()\`</h3>
<p>បង្កើត API Route និង Redirect Route។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  res.json({ message: 'API Data', status: 'success' });
});

app.get('/go-login', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.send('<h1>ទំព័រ Login</h1>');
});

app.listen(3000);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `req.params` ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញ Query Strings',
        'ទាញ Route Parameters',
        'ទាញ Request Body',
        'ទាញ Headers'
      ],
      correct: 1,
      explanation: '`req.params` ទាញ Route Parameters (ឧ. `:id`)។'
    },
    {
      question: 'តើ `res.json()` ផ្ញើទិន្នន័យប្រភេទណា?',
      options: [
        'HTML',
        'JSON',
        'Text',
        'Binary'
      ],
      correct: 1,
      explanation: '`res.json()` ផ្ញើ JSON Data។'
    },
    {
      question: 'តើ Middleware ណាមួយត្រូវការដើម្បីទាញ `req.body`?',
      options: [
        'express.static()',
        'express.json()',
        'express.router()',
        'morgan()'
      ],
      correct: 1,
      explanation: '`express.json()` Parse JSON Request Body។'
    },
    {
      question: 'តើ `res.status(404)` ធ្វើអ្វី?',
      options: [
        'ផ្ញើ JSON Data',
        'កំណត់ Status Code 404',
        'Redirect URL',
        'Parse Body'
      ],
      correct: 1,
      explanation: '`res.status(404)` កំណត់ Status Code 404។'
    },
    {
      question: 'តើ `req.query` ទាញទិន្នន័យពីណា?',
      options: [
        'Route Parameters',
        'Query Strings',
        'Request Body',
        'Headers'
      ],
      correct: 1,
      explanation: '`req.query` ទាញ Query Strings (ឧ. `?q=keyword`)�।'
    },
    {
      question: 'តើ `res.redirect()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ញើ JSON Data',
        'Redirect ទៅ URL ផ្សេង',
        'Parse Body',
        'កំណត់ Headers'
      ],
      correct: 1,
      explanation: '`res.redirect()` Redirect ទៅ URL ផ្សេង។'
    },
    {
      question: 'តើ `req.method` ផ្តល់តម្លៃអ្វី?',
      options: [
        'URL',
        'HTTP Method',
        'Status Code',
        'Body Data'
      ],
      correct: 1,
      explanation: '`req.method` ផ្តល់ HTTP Method (ឧ. GET, POST)។'
    },
    {
      question: 'តើ `res.send()` អាចផ្ញើអ្វីបាន?',
      options: [
        'តែ JSON',
        'String, Buffer, Object',
        'តែ HTML',
        'តែ Status Code'
      ],
      correct: 1,
      explanation: '`res.send()` ផ្ញើ String, Buffer, ឬ Object។'
    },
    {
      question: 'តើ `req.headers` ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញ Query Strings',
        'ទាញ Route Parameters',
        'ទាញ HTTP Headers',
        'ទាញ Body Data'
      ],
      correct: 2,
      explanation: '`req.headers` ទាញ HTTP Headers។'
    },
    {
      question: 'តើ `express.urlencoded()` ប្រើសម្រាប់អ្វី?',
      options: [
        'Parse JSON',
        'Parse URL-encoded Data',
        'Serve Static Files',
        'Log Requests'
      ],
      correct: 1,
      explanation: '`express.urlencoded()` Parse URL-encoded Data។'
    },
    {
      question: 'តើ `res.set()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ញើ JSON',
        'កំណត់ Headers',
        'Redirect URL',
        'Parse Body'
      ],
      correct: 1,
      explanation: '`res.set()` កំណត់ HTTP Headers។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ដែលប្រើ Request និង Response Objects។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-req-res\`។
   - ប្រើ \`npm init -y\` ដើម្បីបង្កើត \`package.json\`។
   - ដំឡើង Express.js ដោយ \`npm install express\`។

2. **បង្កើត Routes:**
   - បង្កើត File: \`app.js\`។
   - បន្ផែម Middleware \`express.json()\` ដើម្បី Parse JSON Body។
   - Route \`/profile/:id\` (GET): ទាញ \`req.params.id\` និង \`req.query.role\`, ឆ្លើយតប \`<h1>Profile ID: [id], Role: [role]</h1>\` (Default Role: "user").
   - Route \`/api/users\` (POST): ទាញ \`req.body.name\`, ឆ្លើយតប JSON \`{ "message": "បានបង្កើត User: [name]" }\`.
   - Route \`/error\` (GET): ឆ្លើយតប Status 404 ជាមួយ \`<h1>ទំព័រមិនមាន</h1>\`។
   - Route \`/go-home\` (GET): Redirect ទៅ \`/\`។
   - Route \`/\` (GET): ឆ្លើយតប \`<h1>ទំព័រដើម</h1>\`។

3. **Test Application:**
   - Run \`node app.js\`។
   - បើក Browser ឬ Postman:
     - \`http://localhost:3000\`
     - \`http://localhost:3000/profile/123?role=admin\`
     - POST \`/api/users\` ជាមួយ Body \`{ "name": "Sok" }\`
     - \`http://localhost:3000/error\`
     - \`http://localhost:3000/go-home\`

**ការណែនាំ:** ប្រើ \`nodemon\` ដើម្បី Auto-restart Server។
    `,
    solution: `
\`\`\`text
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>ទំព័រដើម</h1>');
});

app.get('/profile/:id', (req, res) => {
  const id = req.params.id;
  const role = req.query.role || 'user';
  res.send(\`<h1>Profile ID: \${id}, Role: \${role}</h1>\`);
});

app.post('/api/users', (req, res) => {
  const name = req.body.name || 'Unknown';
  res.json({ message: \`បានបង្កើត User: \${name}\` });
});

app.get('/error', (req, res) => {
  res.status(404).send('<h1>ទំព័រមិនមាន</h1>');
});

app.get('/go-home', (req, res) => {
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`
`
  }
};

export default ExpressLesson2_4Content;