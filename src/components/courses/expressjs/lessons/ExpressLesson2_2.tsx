import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson2_2Content: LessonContent = {
  title: 'Routing',
  objectives: [
    'យល់ដឹងពី HTTP Methods និង CRUD Operations',
    'រៀនកំណត់ Routes សម្រាប់ HTTP Methods (GET, POST, PUT, DELETE)',
    'ស្វែងយល់ពី Route Parameters និង Query Strings',
    'អនុវត្តន៍ Express Router សម្រាប់រៀបចំ Routes ក្នុង Project ធំ',
  ],
  content: `
# Routing 🛤️

---

**Routing** នៅក្នុង Express.js គឺជាវិធីសាស្ត្រដែលកំណត់ផ្លូវ (Routes) សម្រាប់គ្រប់គ្រង HTTP Requests។ វាជួយឱ្យ Application ឆ្លើយតបទៅ Client ដោយផ្អែកលើ URL និង HTTP Method។

---

## 1. HTTP Methods និង CRUD Operations

Express គាំទ្រ **HTTP Methods** ដូចជា:
- **GET**: ទាញយកទិន្នន័យ (Read)
- **POST**: បង្កើតទិន្នន័យថ្មី (Create)
- **PUT**: ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ (Update)
- **DELETE**: លុបទិន្នន័យ (Delete)

**ឧទាហរណ៍:**
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.send('ទាញយកអ្នកប្រើប្រាស់');
});

app.post('/users', (req, res) => {
  res.send('បង្កើតអ្នកប្រើប្រាស់');
});

app.listen(3000);
\`\`\`

---

## 2. Route Parameters

**Route Parameters** អនុញ្ញាតឱ្យទាញយកតម្លៃពី URL (ឧ. \`/users/:id\`)។

**ឧទាហរណ៍:**
\`\`\`javascript
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(\`អ្នកប្រើប្រាស់ ID: \${userId}\`);
});
\`\`\`

- \`req.params.id\`: យកតម្លៃពី \`:id\` នៅក្នុង URL។
- **លទ្ធផល:** បើចូល \`/users/123\` នឹងបង្ហាញ "អ្នកប្រើប្រាស់ ID: 123"។

---

## 3. Query Strings

**Query Strings** យកតម្លៃពី URL Query Parameters (ឧ. \`/search?q=keyword\`)។

**ឧទាហរណ៍:**
\`\`\`javascript
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(\`លទ្ធផលស្វែងរក: \${query}\`);
});
\`\`\`

- \`req.query.q\`: យកតម្លៃពី \`q\` នៅក្នុង Query String។
- **លទ្ធផល:** បើចូល \`/search?q=express\` នឹងបង្ហាញ "លទ្ធផលស្វែងរក: express"។

---

## 4. Express Router

**Express Router** ជួយរៀបចំ Routes ឱ្យមានរបៀប ស័ក្តិសមសម្រាប់ Projects ធំ។

**ឧទាហរណ៍:**
\`\`\`javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('ទំព័រដើមអ្នកប្រើប្រាស់');
});

router.get('/:id', (req, res) => {
  res.send(\`អ្នកប្រើប្រាស់ ID: \${req.params.id}\`);
});

app.use('/users', router);
\`\`\`

- \`express.Router()\`: បង្កើត Router Instance។
- \`app.use('/users', router)\`: ភ្ជាប់ Router ទៅ Base Path \`/users\`។
- **លទ្ធផល:** \`/users\` និង \`/users/:id\` នឹងដំណើរការ។

---

## 5. គន្លឹះសម្រាប់ Routing

- **ប្រើ HTTP Methods ឱ្យត្រឹមត្រូវ:** GET សម្រាប់ Read, POST សម្រាប់ Create, ជាដើម។
- **រៀបចំ Routes ឱ្យស្អាត:** ប្រើ Express Router សម្រាប់ Projects ធំ។
- **អាន Documentation:** [expressjs.com/en/starter/basic-routing](https://expressjs.com/en/starter/basic-routing)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ CRUD Routes</h3>
<p>បង្កើត Routes សម្រាប់ CRUD Operations។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();

app.get('/posts', (req, res) => {
  res.send('ទាញយក Posts');
});

app.post('/posts', (req, res) => {
  res.send('បង្កើត Post ថ្មី');
});

app.put('/posts/:id', (req, res) => {
  res.send(\`ធ្វើបច្ចុប្បន្នភាព Post ID: \${req.params.id}\`);
});

app.delete('/posts/:id', (req, res) => {
  res.send(\`លុប Post ID: \${req.params.id}\`);
});

app.listen(3000);
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Express Router</h3>
<p>ប្រើ Express Router ដើម្បីរៀបចំ Routes។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();
const router = express.Router();

router.get('/products', (req, res) => {
  res.send('បញ្ជីផលិតផល');
});

router.get('/products/:id', (req, res) => {
  res.send(\`ផលិតផល ID: \${req.params.id}\`);
});

app.use('/api', router);

app.listen(3000);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ HTTP Method ណាមួយប្រើសម្រាប់ទាញយកទិន្នន័យ?',
      options: [
        'POST',
        'GET',
        'PUT',
        'DELETE'
      ],
      correct: 1,
      explanation: 'GET ប្រើសម្រាប់ទាញយកទិន្នន័យ (Read)។'
    },
    {
      question: 'តើ Route Parameters យកតម្លៃពីណា?',
      options: [
        'Query String',
        'URL Path',
        'Request Body',
        'Headers'
      ],
      correct: 1,
      explanation: 'Route Parameters យកតម្លៃពី URL Path (ឧ. `:id`)។'
    },
    {
      question: 'តើ `req.query` ប្រើសម្រាប់អ្វី?',
      options: [
        'យក Route Parameters',
        'យក Query Strings',
        'យក Request Body',
        'យក Headers'
      ],
      correct: 1,
      explanation: '`req.query` យកតម្លៃពី Query Strings។'
    },
    {
      question: 'តើ Express Router មានប្រយោជន៍អ្វី?',
      options: [
        'គ្រប់គ្រង Database',
        'រៀបចំ Routes ឱ្យមានរបៀប',
        'បង្កើត Frontend',
        'Run Server'
      ],
      correct: 1,
      explanation: 'Express Router រៀបចំ Routes ឱ្យមានរបៀប។'
    },
    {
      question: 'តើ HTTP Method ណាមួយប្រើសម្រាប់បង្កើតទិន្នន័យ?',
      options: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
      ],
      correct: 1,
      explanation: 'POST ប្រើសម្រាប់បង្កើតទិន្នន័យ (Create)។'
    },
    {
      question: 'តើ `/users/:id` ជាអ្វី?',
      options: [
        'Query String',
        'Route Parameter',
        'Request Body',
        'Header'
      ],
      correct: 1,
      explanation: '\`/users/:id\` ជា Route Parameter។'
    },
    {
      question: 'តើ \`app.use(\'/api\', router)\` ធ្វើអ្វី?',
      options: [
        'បង្កើត Route Parameter',
        'ភ្ជាប់ Router ទៅ Base Path',
        'Run Server',
        'គ្រប់គ្រង Query Strings'
      ],
      correct: 1,
      explanation: '\`app.use(\'/api\', router)\` ភ្ជាប់ Router ទៅ Base Path \`/api\`។'
    },
    {
      question: 'តើ Query String មានទម្រង់បែបណា?',
      options: [
        '/users/:id',
        '/search?q=keyword',
        '/users',
        '/api'
      ],
      correct: 1,
      explanation: 'Query String មានទម្រង់ `/search?q=keyword`។'
    },
    {
      question: 'តើ HTTP Method ណាមួយប្រើសម្រាប់លុបទិន្នន័យ?',
      options: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
      ],
      correct: 3,
      explanation: 'DELETE ប្រើសម្រាប់លុបទិន្នន័យ។'
    },
    {
      question: 'តើ Express Router ត្រូវការនៅក្នុង Project តូចៗដែរឬទេ?',
      options: [
        'តម្រូវការ',
        'មិនតម្រូវការ',
        'តម្រូវការ ប៉ុន្តែតែនៅ Production',
        'តម្រូវការ ប៉ុន្តែតែនៅ Frontend'
      ],
      correct: 1,
      explanation: 'Express Router មិនតម្រូវការនៅ Project តូចៗ ប៉ុន្តែស័ក្តិសមសម្រាប់ Project ធំ។'
    },
    {
      question: 'តើ `req.params` ប្រើសម្រាប់អ្វី?',
      options: [
        'យក Query Strings',
        'យក Route Parameters',
        'យក Request Body',
        'យក Headers'
      ],
      correct: 1,
      explanation: '`req.params` យក Route Parameters។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ដែលប្រើ Routing និង Express Router។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-routing\`។
   - ប្រើ \`npm init -y\` ដើម្បីបង្កើត \`package.json\`។
   - ដំឡើង Express.js ដោយ \`npm install express\`។

2. **បង្កើត Routes:**
   - បង្កើត File: \`app.js\`។
   - បន្ផែម Route សម្រាប់ \`/\` (GET) ដែលឆ្លើយតប: \`<h1>ទំព័រដើម</h1>\`។
   - បន្ផែម Route សម្រាប់ \`/users/:id\` (GET) ដែលឆ្លើយតប: \`<h1>អ្នកប្រើប្រាស់ ID: [id]</h1>\`។
   - បន្ផែម Route សម្រាប់ \`/search\` (GET) ដែលឆ្លើយតប: \`<h1>ស្វែងរក: [query]</h1>\` (ប្រើ \`req.query.q\`)។

3. **ប្រើ Express Router:**
   - បង្កើត File: \`routes/users.js\`។
   - បន្ផែម Router ដែលគ្រប់គ្រង \`/\` (GET) និង \`/:id\` (GET) សម្រាប់ \`/api/users\`។
   - ភ្ជាប់ Router ទៅ \`app.js\` ដោយ \`app.use('/api/users', router)\`។

4. **Test Application:**
   - Run \`node app.js\`។
   - បើក Browser នៅ:
     - \`http://localhost:3000\`
     - \`http://localhost:3000/users/123\`
     - \`http://localhost:3000/search?q=express\`
     - \`http://localhost:3000/api/users\`
     - \`http://localhost:3000/api/users/456\`

**ការណែនាំ:** ប្រើ \`nodemon\` ដើម្បី Auto-restart Server។
    `,
    solution: `
## routes/users.js
\`\`\`text
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>បញ្ជីអ្នកប្រើប្រាស់</h1>');
});

router.get('/:id', (req, res) => {
  res.send(\`<h1>អ្នកប្រើប្រាស់ ID: \${req.params.id}</h1>\`);
});

module.exports = router;
\`\`\`

## app.js
\`\`\`text
const express = require('express');
const app = express();
const userRouter = require('./routes/users');

app.get('/', (req, res) => {
  res.send('<h1>ទំព័រដើម</h1>');
});

app.get('/users/:id', (req, res) => {
  res.send(\`<h1>អ្នកប្រើប្រាស់ ID: \${req.params.id}</h1>\`);
});

app.get('/search', (req, res) => {
  const query = req.query.q || 'គ្មានសំណួរ';
  res.send(\`<h1>ស្វែងរក: \${query}</h1>\`);
});

app.use('/api/users', userRouter);

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`
`
  }
};

export default ExpressLesson2_2Content;