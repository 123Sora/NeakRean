import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson5_2Content: LessonContent = {
  title: 'Input Validation',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Input Validation',
    'រៀនប្រើ express-validator សម្រាប់ Validation និង Sanitization',
    'អនុវត្ត Custom Validation Rules',
    'ស្វែងយល់ពី Error Responses សម្រាប់ Invalid Input',
  ],
  content: `
# Input Validation ✅

---

**Input Validation** គឺជាដំណើរការពិនិត្យទិន្នន័យដែលអ្នកប្រើបញ្ចូល ដើម្បីធានាថាវាត្រឹមត្រូវ និងសុវត្ថិភាព។ **Sanitization** ជួយលុប Malicious Content។ នៅក្នុងមេរៀននេះ យើងនឹងប្រើ **express-validator**។

---

## 1. សារៈសំខាន់នៃ Input Validation

Input Validation ជួយ:
- **ការពារ Security Threats:** ដូចជា XSS និង SQL Injection។
- **ធានាទិន្នន័យត្រឹមត្រូវ:** ឧ. Email Format, Password Length។
- **ផ្តល់ User Feedback:** ប្រាប់អ្នកប្រើអំពី Errors។

---

## 2. ការប្រើ express-validator

**express-validator** ជា Middleware សម្រាប់ Validation និង Sanitization។

**ឧទាហរណ៍:**
\`\`\`javascript
const { body, validationResult } = require('express-validator');
const express = require('express');
const app = express();
app.use(express.json());

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

app.listen(3000);
\`\`\`

---

## 3. Custom Validation Rules

បង្កើត Custom Validators សម្រាប់តម្រូវការពិសេស។

**ឧទាហរណ៍:**
\`\`\`javascript
app.post('/register',
  body('username').custom(value => {
    if (value.length < 3) {
      throw new Error('Username must be at least 3 characters');
    }
    return true;
  }),
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

## 4. Sanitization

Sanitization លុប Malicious Content (ឧ. HTML Tags)។

**ឧទាហរណ៍:**
\`\`\`javascript
app.post('/profile',
  body('bio').trim().escape(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ message: 'Sanitized input' });
  }
);
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Input Validation

- **Validate គ្រប់ Input:** ទាំង Request Body, Query, Params។
- **ប្រើ Sanitization:** ដើម្បីការពារ XSS។
- **Clear Error Messages:** ផ្តល់ Feedback ដែលងាយយល់។
- **អាន Documentation:** [express-validator](https://express-validator.github.io)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Basic Validation</h3>
<p>Validate Email និង Password។</p>
<pre><code class="language-javascript">
const { body, validationResult } = require('express-validator');
app.post('/signup',
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
`,
    `
<h3>ឧទាហរណ៍៖ Custom Validation</h3>
<p>បង្កើត Custom Validator សម្រាប់ Username។</p>
<pre><code class="language-javascript">
app.post('/signup',
  body('username').custom(value => {
    if (!value.includes('user')) {
      throw new Error('Username must include "user"');
    }
    return true;
  }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ message: 'Valid username' });
  }
);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Input Validation ជួយអ្វី?',
      options: ['បង្ផើនល្បឿន', 'ការពារ Security Threats', 'បង្កើត Token', 'Serve Files'],
      correct: 1,
      explanation: 'Input Validation ការពារ Security Threats ដូចជា XSS និង SQL Injection។'
    },
    {
      question: 'តើ express-validator ជាអ្វី?',
      options: ['ORM', 'Middleware', 'Database', 'Static File Server'],
      correct: 1,
      explanation: 'express-validator ជា Middleware សម្រាប់ Validation និង Sanitization។'
    },
    {
      question: 'តើ Sanitization ធ្វើអ្វី?',
      options: ['Validate Input', 'លុប Malicious Content', 'Hash Password', 'Log Requests'],
      correct: 1,
      explanation: 'Sanitization លុប Malicious Content ដូចជា HTML Tags។'
    },
    {
      question: 'តើ `body(\'email\').isEmail()` ធ្វើអ្វី?',
      options: ['លុប Email', 'ពិនិត្យ Email Format', 'បង្កើត Email', 'Hash Email'],
      correct: 1,
      explanation: '`isEmail()` ពិនិត្យថា Input ជា Email Format។'
    },
    {
      question: 'តើ Custom Validation ប្រើ Method អ្វី?',
      options: ['isLength()', 'custom()', 'trim()', 'escape()'],
      correct: 1,
      explanation: '`custom()` ប្រើសម្រាប់ Custom Validation Rules។'
    },
    {
      question: 'តើ `validationResult(req)` ត្រលប់អ្វី?',
      options: ['Token', 'Errors Array', 'Request Body', 'Status Code'],
      correct: 1,
      explanation: '`validationResult(req)` ត្រលប់ Array នៃ Validation Errors។'
    },
    {
      question: 'តើ Sanitization ការពារអ្វី?',
      options: ['SQL Injection', 'XSS', 'Brute Force', 'CSRF'],
      correct: 1,
      explanation: 'Sanitization ការពារ XSS ដោយលុប Malicious Content។'
    },
    {
      question: 'តើ HTTP Status Code 400 មានន័យដូចម្តេច?',
      options: ['Not Found', 'Bad Request', 'Forbidden', 'Internal Server Error'],
      correct: 1,
      explanation: '400 Bad Request ប្រើសម្រាប់ Invalid Input។'
    },
    {
      question: 'តើ `trim()` ធ្វើអ្វី?',
      options: ['លុប HTML Tags', 'លុប Whitespace', 'Validate Email', 'Hash Input'],
      correct: 1,
      explanation: '`trim()` លុប Whitespace ពី Input។'
    },
    {
      question: 'តើ Validation គួរត្រូវបានអនុវត្តលើអ្វី?',
      options: ['Request Body ប៉ុណ្ណោះ', 'Query ប៉ុណ្ណោះ', 'គ្រប់ Input', 'Static Files'],
      correct: 2,
      explanation: 'Validation គួរត្រូវបានអនុវត្តលើគ្រប់ Input (Body, Query, Params)។'
    },
    {
      question: 'តើ `escape()` ធ្វើអ្វី?',
      options: ['Validate Input', 'លុប HTML Tags', 'Hash Input', 'Parse JSON'],
      correct: 1,
      explanation: '`escape()` លុប HTML Tags ដើម្បីការពារ XSS។'
    },
    {
      question: 'តើ express-validator តម្រូវឱ្យប្រើ Middleware អ្វី?',
      options: ['express.json()', 'helmet', 'jsonwebtoken', 'express.static()'],
      correct: 0,
      explanation: 'express-validator តម្រូវឱ្យប្រើ `express.json()` ដើម្បី Parse Request Body។'
    },
    {
      question: 'តើ Error Messages គួរមានលក្ខណៈដូចម្តេច?',
      options: ['Complex', 'Clear និង Understandable', 'Encrypted', 'Hidden'],
      correct: 1,
      explanation: 'Error Messages គួរជា Clear និង Understandable សម្រាប់ Users។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ដែលអនុវត្ត Input Validation។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-validation\`។
   - ប្រើ \`npm init -y\`។
   - ដំឡើង Dependencies: \`npm install express express-validator\`។

2. **បង្កើត Routes:**
   - បង្កើត File: \`app.js\`។
   - បន្ផែម \`express.json()\` Middleware។
   - Route \`/register\` (POST): Validate:
     - \`email\`: ត្រូវតែជា Email Format។
     - \`password\`: ត្រូវមានយ៉ាងតិច 6 តួអក្សរ។
     - \`username\`: Custom Validation (ត្រូវមានយ៉ាងតិច 3 តួអក្សរ)។
   - Route \`/profile\` (POST): Sanitize \`bio\` ដោយប្រើ \`trim()\` និង \`escape()\`។
   - ឆ្លើយតប JSON \`{ errors: [...] }\` បើ Invalid, ឬ \`{ message: "Valid input" }\`។

3. **Test Application:**
   - Run \`node app.js\`។
   - ប្រើ Postman:
     - POST \`/register\` ជាមួយ Body \`{ "email": "test@example.com", "password": "123456", "username": "sok" }\`
     - POST \`/register\` ជាមួយ Invalid Input
     - POST \`/profile\` ជាមួយ Body \`{ "bio": "<script>alert('xss')</script>" }\`

**ការណែនាំ:** ប្រើ try-catch សម្រាប់ Error Handling។
    `,
    solution: `
\`\`\`text
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
app.use(express.json());

app.post('/register', [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('username').custom(value => {
    if (value.length < 3) {
      throw new Error('Username must be at least 3 characters');
    }
    return true;
  })
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ message: 'Valid input' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/profile', [
  body('bio').trim().escape()
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ message: 'Sanitized input', bio: req.body.bio });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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

export default ExpressLesson5_2Content;