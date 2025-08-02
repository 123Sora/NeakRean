import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson2_3Content: LessonContent = {
  title: 'Middleware',
  objectives: [
    'យល់ដឹងពី Middleware និងតួនាទីរបស់វា',
    'រៀនប្រើ Application-Level Middleware',
    'ស្វែងយល់ពី Route-Level Middleware',
    'អនុវត្តន៍ Built-in និង Third-party Middleware',
    'បង្កើត Custom Middleware និងយល់ពីលំដាប់លំដោយ',
  ],
  content: `
# Middleware 🛠️

---

**Middleware** គឺជា Functions ដែលដំណើរការរវាង Request និង Response នៅក្នុង Express.js។ វាអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រង Requests, Validate Data, ឬបន្ផែម Logic បន្ថែម។

---

## 1. អ្វីទៅជា Middleware?

Middleware ជា Function ដែលទទួល Parameters បី:
- \`req\`: Request Object
- \`res\`: Response Object
- \`next\`: Function ដើម្បីបញ្ជូន Request ទៅ Middleware ឬ Route Handler បន្ទាប់

**ឧទាហរណ៍:**
\`\`\`javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(\`Request URL: \${req.url}\`);
  next();
});
\`\`\`

- \`next()\`: បញ្ជូន Request ទៅ Middleware/Route បន្ទាប់។

---

## 2. Application-Level Middleware

**Application-Level Middleware** ដំណើរការលើគ្រប់ Requests។

**ឧទាហរណ៍:**
\`\`\`javascript
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.get('/', (req, res) => {
  res.send(\`Request នៅ: \${req.requestTime}\`);
});
\`\`\`

- Middleware បន្ផែម \`requestTime\` ទៅ \`req\`។
- **លទ្ធផល:** បង្ហាញពេលវេលានៃ Request។

---

## 3. Route-Level Middleware

**Route-Level Middleware** ដំណើរការលើ Routes ជាក់លាក់។

**ឧទាហរណ៍:**
\`\`\`javascript
const authMiddleware = (req, res, next) => {
  if (req.query.token === 'secret') {
    next();
  } else {
    res.status(401).send('គ្មានសិទ្ធិចូលប្រើ');
  }
};

app.get('/protected', authMiddleware, (req, res) => {
  res.send('ទិន្នន័យសម្ងាត់');
});
\`\`\`

- **លទ្ធផល:** បើ \`/protected?token=secret\` នឹងបង្ហាញ "ទិន្នន័យសម្ងាត់"។

---

## 4. Built-in Middleware

Express ផ្តល់ **Built-in Middleware** ដូចជា:
- \`express.json()\`: Parse JSON Request Body
- \`express.urlencoded()\`: Parse URL-encoded Data
- \`express.static()\`: Serve Static Files

**ឧទាហរណ៍:**
\`\`\`javascript
app.use(express.json());

app.post('/data', (req, res) => {
  res.send(\`ទទួលបាន: \${req.body.name}\`);
});
\`\`\`

---

## 5. Third-party Middleware

**Third-party Middleware** ដូចជា \`morgan\` (សម្រាប់ Logging) ត្រូវបានដំឡើងដោយ npm។

**ឧទាហរណ៍:**
\`\`\`javascript
const morgan = require('morgan');
app.use(morgan('dev'));
\`\`\`

- \`npm install morgan\`: ដំឡើង Morgan។
- \`morgan('dev')\`: Log Requests ទៅ Console។

---

## 6. Custom Middleware

**Custom Middleware** អនុញ្ញាតឱ្យអ្នកបង្កើត Logic ផ្ទាល់ខ្លួន។

**ឧទាហរណ៍:**
\`\`\`javascript
const logMiddleware = (req, res, next) => {
  console.log(\`Method: \${req.method}, URL: \${req.url}\`);
  next();
};

app.use(logMiddleware);
\`\`\`

---

## 7. លំដាប់លំដោយនៃ Middleware

Middleware ដំណើរការតាមលំដាប់ដែលបានកំណត់។

**ឧទាហរណ៍:**
\`\`\`javascript
app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

app.get('/', (req, res) => {
  res.send('សួស្តី!');
});
\`\`\`

- **លទ្ធផល:** Log "Middleware 1", "Middleware 2", បន្ទាប់មក Response។

---

## 8. គន្លឹះសម្រាប់ Middleware

- **ប្រើ \`next()\`:** ដើម្បីបញ្ជូន Request ទៅ Middleware/Route បន្ទាប់។
- **កំណត់លំដាប់:** Middleware ដំណើរការតាមលំដាប់កំណត់។
- **ប្រើ Third-party Middleware:** ដើម្បីសន្សំពេលវេលា។
- **អាន Documentation:** [expressjs.com/en/guide/using-middleware](https://expressjs.com/en/guide/using-middleware)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Application-Level Middleware</h3>
<p>បន្ផែម Middleware ដើម្បី Log Request Time។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.get('/', (req, res) => {
  res.send(\`Request នៅ: \${req.requestTime}\`);
});

app.listen(3000);
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Route-Level Middleware</h3>
<p>បន្ផែម Middleware ដើម្បី Check Token។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();

const checkToken = (req, res, next) => {
  if (req.query.token === '12345') {
    next();
  } else {
    res.status(403).send('គ្មានសិទ្ធិ');
  }
};

app.get('/secret', checkToken, (req, res) => {
  res.send('ទិន្នន័យសម្ងាត់');
});

app.listen(3000);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Middleware ជាអ្វី?',
      options: [
        'Route Handler',
        'Function រវាង Request និង Response',
        'Database Connector',
        'Frontend Component'
      ],
      correct: 1,
      explanation: 'Middleware ជា Function ដែលដំណើរការរវាង Request និង Response។'
    },
    {
      question: 'តើ `next()` មានតួនាទីអ្វី?',
      options: [
        'បញ្ចប់ Response',
        'បញ្ជូន Request ទៅ Middleware/Route បន្ទាប់',
        'បង្កើត Route',
        'ភ្ជាប់ Database'
      ],
      correct: 1,
      explanation: '`next()` បញ្ជូន Request ទៅ Middleware/Route បន្ទាប់។'
    },
    {
      question: 'តើ Application-Level Middleware ដំណើរការលើអ្វី?',
      options: [
        'Route ជាក់លាក់',
        'គ្រប់ Requests',
        'Database Queries',
        'Frontend Components'
      ],
      correct: 1,
      explanation: 'Application-Level Middleware ដំណើរការលើគ្រប់ Requests។'
    },
    {
      question: 'តើ `express.json()` ជា Middleware ប្រភេទណា?',
      options: [
        'Custom Middleware',
        'Route-Level Middleware',
        'Built-in Middleware',
        'Third-party Middleware'
      ],
      correct: 2,
      explanation: '`express.json()` ជា Built-in Middleware។'
    },
    {
      question: 'តើ `morgan` ជា Middleware ប្រភេទណា?',
      options: [
        'Built-in Middleware',
        'Third-party Middleware',
        'Route-Level Middleware',
        'Custom Middleware'
      ],
      correct: 1,
      explanation: '`morgan` ជា Third-party Middleware សម្រាប់ Logging។'
    },
    {
      question: 'តើ Route-Level Middleware ដំណើរការលើអ្វី?',
      options: [
        'គ្រប់ Requests',
        'Route ជាក់លាក់',
        'Database Queries',
        'Frontend Components'
      ],
      correct: 1,
      explanation: 'Route-Level Middleware ដំណើរការលើ Route ជាក់លាក់។'
    },
    {
      question: 'តើ `express.static()` ប្រើសម្រាប់អ្វី?',
      options: [
        'Parse JSON',
        'Serve Static Files',
        'Log Requests',
        'Validate Data'
      ],
      correct: 1,
      explanation: '`express.static()` Serve Static Files (CSS, Images)។'
    },
    {
      question: 'តើ Custom Middleware ត្រូវការអ្វីដើម្បីដំណើរការ?',
      options: [
        'req, res, next',
        'req, res',
        'app.listen()',
        'express.Router()'
      ],
      correct: 0,
      explanation: 'Custom Middleware ត្រូវការ `req`, `res`, និង `next`។'
    },
    {
      question: 'តើ Middleware ដំណើរការតាមលំដាប់ណា?',
      options: [
        'ផ្អែកលើ HTTP Method',
        'ផ្អែកលើលំដាប់កំណត់',
        'ផ្អែកលើ Database',
        'ផ្អែកលើ Frontend'
      ],
      correct: 1,
      explanation: 'Middleware ដំណើរការតាមលំដាប់កំណត់។'
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
      question: 'តើ Middleware អាចបញ្ចប់ Response ដោយមិនហៅ `next()` បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅ Route-Level',
        'មិនបាន ព្រោះតែ Database'
      ],
      correct: 0,
      explanation: 'Middleware អាចបញ្ចប់ Response ដោយមិនហៅ `next()`។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ដែលប្រើ Middleware ដើម្បីគ្រប់គ្រង Requests។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-middleware\`។
   - ប្រើ \`npm init -y\` ដើម្បីបង្កើត \`package.json\`។
   - ដំឡើង Express.js និង Morgan ដោយ \`npm install express morgan\`។

2. **បន្ផែម Middleware:**
   - បង្កើត File: \`app.js\`។
   - បន្ផែម Application-Level Middleware ដើម្បី Log Request Time (បន្ផែម \`req.requestTime\`)។
   - បន្ផែម Morgan Middleware (\`morgan('dev')\`) សម្រាប់ Log Requests។
   - បន្ផែម Route-Level Middleware សម្រាប់ \`/protected\` ដើម្បី Check Query Parameter \`token=secret\`។
   - បន្ផែម Route សម្រាប់ \`/\` (GET) ដែលឆ្លើយតប: \`<h1>សួស្តី! Request នៅ: [requestTime]</h1>\`។
   - បន្ផែម Route សម្រាប់ \`/protected\` (GET) ដែលឆ្លើយតប: \`<h1>ទិន្នន័យសម្ងាត់</h1>\` (បើ Token ត្រឹមត្រូវ)។

3. **Test Application:**
   - Run \`node app.js\`។
   - បើក Browser នៅ:
     - \`http://localhost:3000\`
     - \`http://localhost:3000/protected?token=secret\`
     - \`http://localhost:3000/protected?token=wrong\`

**ការណែនាំ:** ប្រើ \`nodemon\` ដើម្បី Auto-restart Server។
    `,
    solution: `
\`\`\`text
const express = require('express');
const morgan = require('morgan');
const app = express();

// Application-Level Middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Morgan Middleware
app.use(morgan('dev'));

// Route-Level Middleware
const checkToken = (req, res, next) => {
  if (req.query.token === 'secret') {
    next();
  } else {
    res.status(403).send('<h1>គ្មានសិទ្ធិ</h1>');
  }
};

app.get('/', (req, res) => {
  res.send(\`<h1>សួស្តី! Request នៅ: \${req.requestTime}</h1>\`);
});

app.get('/protected', checkToken, (req, res) => {
  res.send('<h1>ទិន្នន័យសម្ងាត់</h1>');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`
`
  }
};

export default ExpressLesson2_3Content;