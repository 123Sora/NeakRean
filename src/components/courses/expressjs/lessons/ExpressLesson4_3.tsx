import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson4_3Content: LessonContent = {
  title: 'Security Best Practices',
  objectives: [
    'យល់ដឹងពី Security Threats នៅក្នុង Web Applications',
    'រៀនប្រើ Helmet សម្រាប់ HTTP Headers Security',
    'ស្វែងយល់ពី Input Validation និង Sanitization',
    'អនុវត្ត Security Best Practices ជាមួយ Express',
  ],
  content: `
# Security Best Practices 🛡️

---

**Security** គឺជាផ្នែកសំខាន់នៃ Web Development។ នៅក្នុងមេរៀននេះ យើងនឹងស្វែងយល់ពី Security Threats និង Best Practices សម្រាប់ Express.js Applications។

---

## 1. Security Threats

- **Cross-Site Scripting (XSS):** ការបញ្ចូល Malicious Scripts តាមរយៈ Input។
- **SQL Injection:** ការបញ្ចូល Malicious SQL Queries។
- **Cross-Site Request Forgery (CSRF):** ការបង្ខំអ្នកប្រើធ្វើ Actions ដោយគ្មានការអនុញ្ញាត។
- **Man-in-the-Middle (MITM):** ការលួចទិន្នន័យតាម Network។

---

## 2. ការប្រើ Helmet

**Helmet** ជា Middleware ដែលកំណត់ HTTP Headers ដើម្បីបង្ផើនសុវត្ថិភាព។

**ឧទាហរណ៍:**
\`\`\`javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.get('/', (req, res) => {
  res.send('Secure App');
});

app.listen(3000);
\`\`\`

**Headers សំខាន់ៗ:**
- \`X-Content-Type-Options: nosniff\`
- \`X-Frame-Options: DENY\`
- \`Content-Security-Policy\`

---

## 3. Input Validation និង Sanitization

- **Validation:** ពិនិត្យថាទិន្នន័យត្រឹមត្រូវ (ឧ. Email Format)។
- **Sanitization:** លុប Malicious Content (ឧ. Scripts)។

**ឧទាហរណ៍ (express-validator):**
\`\`\`javascript
const { body, validationResult } = require('express-validator');

app.post('/user',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ message: 'Valid input' });
  }
);
\`\`\`

---

## 4. Security Best Practices

- **ប្រើ HTTPS:** អ៊ិនគ្រីបទិន្នន័យ។
- **Environment Variables:** រក្សាទុក Secrets (ឧ. Database URL)។
- **Rate Limiting:** ការពារ Brute Force Attacks។
- **Error Handling:** កុំបង្ហាញ Sensitive Data។

**ឧទាហរណ៍ (Rate Limiting):**
\`\`\`javascript
const rateLimit = require('express-rate-limit');

app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 នាទី
  max: 100 // 100 Requests
}));
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Security

- **Update Dependencies:** ប្រើ \`npm audit\` ដើម្បីពិនិត្យ Vulnerabilities។
- **Use Strong Passwords:** សម្រាប់ Database និង Secrets។
- **Log Security Events:** ដើម្បីតាមដាន Attacks។
- **អាន Documentation:** [helmet](https://helmetjs.github.io), [express-validator](https://express-validator.github.io)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Helmet Middleware</h3>
<p>បន្ផែម Helmet សម្រាប់ Secure Headers។</p>
<pre><code class="language-javascript">
const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());

app.get('/', (req, res) => {
  res.send('Secure App');
});

app.listen(3000);
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Input Validation</h3>
<p>ប្រើ express-validator សម្រាប់ Validation។</p>
<pre><code class="language-javascript">
const { body, validationResult } = require('express-validator');

app.post('/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ message: 'Valid input' });
  }
);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Security Threats រួមមានអ្វីខ្លះ?',
      options: ['XSS, SQL Injection', 'HTML, CSS', 'APIs, JSON', 'Static Files'],
      correct: 0,
      explanation: 'Security Threats រួមមាន XSS, SQL Injection, CSRF, MITM។'
    },
    {
      question: 'តើ Helmet ធ្វើអ្វី?',
      options: ['Hash Passwords', 'កំណត់ HTTP Headers', 'Validate Input', 'Serve Files'],
      correct: 1,
      explanation: 'Helmet កំណត់ Secure HTTP Headers។'
    },
    {
      question: 'តើ XSS គឺជាអ្វី?',
      options: ['Cross-Site Scripting', 'Cross-Site Request Forgery', 'SQL Injection', 'Man-in-the-Middle'],
      correct: 0,
      explanation: 'XSS គឺជា Cross-Site Scripting។'
    },
    {
      question: 'តើ Input Validation មានសារៈសំខាន់ដោយសារអ្វី?',
      options: ['បង្ផើនល្បឿន', 'ការពារ Malicious Input', 'បង្កើត Token', 'Serve Files'],
      correct: 1,
      explanation: 'Input Validation ការពារ Malicious Input។'
    },
    {
      question: 'តើ express-validator ប្រើសម្រាប់អ្វី?',
      options: ['Rate Limiting', 'Validation និង Sanitization', 'Token Creation', 'Logging'],
      correct: 1,
      explanation: 'express-validator ប្រើសម្រាប់ Validation និង Sanitization។'
    },
    {
      question: 'តើ HTTPS មានតួនាទីអ្វី?',
      options: ['បង្ផើនល្បឿន', 'អ៊ិនគ្រីបទិន្នន័យ', 'Validate Input', 'Hash Passwords'],
      correct: 1,
      explanation: 'HTTPS អ៊ិនគ្រីបទិន្នន័យ។'
    },
    {
      question: 'តើ Rate Limiting ការពារអ្វី?',
      options: ['XSS', 'Brute Force Attacks', 'SQL Injection', 'CSRF'],
      correct: 1,
      explanation: 'Rate Limiting ការពារ Brute Force Attacks។'
    },
    {
      question: 'តើ Environment Variables ប្រើសម្រាប់អ្វី?',
      options: ['Serve Files', 'រក្សាទុក Secrets', 'Validate Input', 'Create Tokens'],
      correct: 1,
      explanation: 'Environment Variables រក្សាទុក Secrets ដូចជា Database URL។'
    },
    {
      question: 'តើ `X-Frame-Options: DENY` ធ្វើអ្វី?',
      options: ['ការពារ XSS', 'ការពារ Clickjacking', 'ការពារ SQL Injection', 'ការពារ CSRF'],
      correct: 1,
      explanation: '`X-Frame-Options: DENY` ការពារ Clickjacking។'
    },
    {
      question: 'តើ Sanitization មានន័យដូចម្តេច?',
      options: ['Hashing Passwords', 'លុប Malicious Content', 'បង្កើត Token', 'Serve Files'],
      correct: 1,
      explanation: 'Sanitization លុប Malicious Content ចេញពី Input។'
    },
    {
      question: 'តើ `npm audit` ប្រើសម្រាប់អ្វី?',
      options: ['Validate Input', 'Check Vulnerabilities', 'Create Tokens', 'Log Requests'],
      correct: 1,
      explanation: '`npm audit` ពិនិត្យ Vulnerabilities នៅក្នុង Dependencies។'
    },
    {
      question: 'តើ CSRF គឺជាអ្វី?',
      options: ['Cross-Site Scripting', 'Cross-Site Request Forgery', 'SQL Injection', 'Man-in-the-Middle'],
      correct: 1,
      explanation: 'CSRF គឺជា Cross-Site Request Forgery។'
    },
    {
      question: 'តើ Error Handling គួរជៀសវាងអ្វី?',
      options: ['បង្ផាញ Sensitive Data', 'បង្ផើនល្បឿន', 'Validate Input', 'Create Tokens'],
      correct: 0,
      explanation: 'Error Handling គួរជៀសវាងបង្ផាញ Sensitive Data។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ដែលអនុវត្ត Security Best Practices។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-security\`។
   - ប្រើ \`npm init -y\`។
   - ដំឡើង Dependencies: \`npm install express helmet express-validator express-rate-limit\`។

2. **បង្កើត Routes:**
   - បង្កើត File: \`app.js\`។
   - បន្ផែម \`helmet()\` Middleware។
   - បន្ផែម Rate Limiting (max 100 requests ក្នុង 15 នាទី)។
   - Route \`/register\` (POST): Validate Email និង Password (min 6 characters) ជាមួយ express-validator។
   - Route \`/secure\` (GET): ឆ្លើយតប \`{ message: "Secure route" }\`។
   - បន្ផែម Error Handling សម្រាប់ Invalid Input។

3. **Test Application:**
   - Run \`node app.js\`។
   - ប្រើ Postman:
     - POST \`/register\` ជាមួយ Body \`{ "email": "test@example.com", "password": "123456" }\`
     - POST \`/register\` ជាមួយ Invalid Input (ឧ. Password ខ្លី)
     - GET \`/secure\`
     - សាកល្បង Rate Limiting ដោយ Request ច្រើន។

**ការណែនាំ:** ប្រើ try-catch សម្រាប់ Error Handling។
    `,
    solution: `
\`\`\`text
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(helmet());
app.use(express.json());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 នាទី
  max: 100 // 100 Requests
}));

app.post('/register', 
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      res.json({ message: 'Registration successful' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

app.get('/secure', (req, res) => {
  res.json({ message: 'Secure route' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`
`
  }
};

export default ExpressLesson4_3Content;