import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson5_1Content: LessonContent = {
  title: 'Error Handling',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Error Handling នៅក្នុង Express.js',
    'រៀនប្រើ Error Handling Middleware',
    'អនុវត្ត Async Error Handling ជាមួយ try-catch',
    'ស្វែងយល់ពី Custom Error Responses',
  ],
  content: `
# Error Handling 🚨

---

**Error Handling** គឺជាដំណើរការគ្រប់គ្រង Errors ដែលកើតឡើងនៅក្នុង Application។ នៅក្នុង Express.js យើងប្រើ **Error Handling Middleware** ដើម្បីគ្រប់គ្រង Errors និងផ្តល់ Responses ដែលសមស្រប។

---

## 1. សារៈសំខាន់នៃ Error Handling

Error Handling ជួយ:
- **ការពារ Application Crash:** ទប់ស្កាត់ការដួលរលំនៃ Server។
- **ផ្តល់ User Feedback:** ផ្ញើ Messages ដែលងាយយល់។
- **ការពារ Security:** លាក់ Sensitive Information។

---

## 2. Error Handling Middleware

Express.js ប្រើ Middleware ដែលមាន 4 Parameters (\`err, req, res, next\`) សម្រាប់ Error Handling។

**ឧទាហរណ៍:**
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(3000);
\`\`\`

---

## 3. Async Error Handling

សម្រាប់ Async Routes ប្រើ **try-catch** ដើម្បីគ្រប់គ្រង Errors។

**ឧទាហរណ៍:**
\`\`\`javascript
app.get('/async', async (req, res, next) => {
  try {
    const data = await someAsyncFunction();
    res.json(data);
  } catch (err) {
    next(err);
  }
});
\`\`\`

---

## 4. Custom Error Responses

បង្កើត Custom Error Classes ដើម្បីផ្តល់ Responses ដែលច្បាស់លាស់។

**ឧទាហរណ៍:**
\`\`\`javascript
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

app.get('/user/:id', (req, res, next) => {
  const user = null; // Mock no user
  if (!user) throw new NotFoundError('User not found');
  res.json(user);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Error Handling

- **ប្រើ try-catch:** សម្រាប់ Async Code។
- **លាក់ Sensitive Data:** កុំបង្ហាញ Stack Traces ទៅ Client។
- **Log Errors:** សម្រាប់ Debugging។
- **អាន Documentation:** [Express Error Handling](https://expressjs.com/en/guide/error-handling.html)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Error Handling Middleware</h3>
<p>បង្កើត Middleware សម្រាប់គ្រប់គ្រង Errors។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();

app.get('/error', (req, res, next) => {
  throw new Error('Test error');
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(3000);
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Async Error Handling</h3>
<p>ប្រើ try-catch សម្រាប់ Async Route។</p>
<pre><code class="language-javascript">
app.get('/async', async (req, res, next) => {
  try {
    throw new Error('Async error');
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Error Handling Middleware មាន Parameters ប៉ុន្មាន?',
      options: ['2', '3', '4', '5'],
      correct: 2,
      explanation: 'Error Handling Middleware មាន 4 Parameters: `err, req, res, next`។'
    },
    {
      question: 'តើ Error Handling ជួយអ្វី?',
      options: ['បង្កើនល្បឿន', 'ការពារ Application Crash', 'បង្កើត Token', 'Serve Files'],
      correct: 1,
      explanation: 'Error Handling ការពារ Application Crash និងផ្តល់ Feedback។'
    },
    {
      question: 'តើ `next(err)` ធ្វើអ្វី?',
      options: ['បញ្ចប់ Request', 'ហៅ Error Handling Middleware', 'បង្កើត Error', 'Parse JSON'],
      correct: 1,
      explanation: '`next(err)` ហៅ Error Handling Middleware។'
    },
    {
      question: 'តើ try-catch ប្រើសម្រាប់អ្វី?',
      options: ['Sync Code', 'Async Code', 'Middleware Creation', 'Static Files'],
      correct: 1,
      explanation: 'try-catch ប្រើសម្រាប់គ្រប់គ្រង Errors នៅក្នុង Async Code។'
    },
    {
      question: 'តើ Custom Error Classes មានប្រយោជន៍អ្វី?',
      options: ['បង្ផើនល្បឿន', 'ផ្តល់ Responses ច្បាស់លាស់', 'Validate Input', 'Log Requests'],
      correct: 1,
      explanation: 'Custom Error Classes ផ្តល់ Responses ដែលច្បាស់លាស់។'
    },
    {
      question: 'តើ HTTP Status Code 500 មានន័យដូចម្តេច?',
      options: ['Not Found', 'Bad Request', 'Internal Server Error', 'Forbidden'],
      correct: 2,
      explanation: '500 មានន័យថា Internal Server Error។'
    },
    {
      question: 'តើ Stack Traces គួរត្រូវបានបង្ផាញទៅ Client ដែរឬទេ?',
      options: ['បាន', 'មិនបាន', 'បាន ប៉ុន្តែតែនៅ Development', 'មិនបាន ព្រោះជា JSON'],
      correct: 1,
      explanation: 'Stack Traces មិនគួរត្រូវបានបង្ផាញទៅ Client ដើម្បីការពារ Security។'
    },
    {
      question: 'តើ Error Handling Middleware ត្រូវដាក់នៅឯណា?',
      options: ['ដើម Application', 'ចុង Application', 'មុន Routes', 'ក្នុង Route'],
      correct: 1,
      explanation: 'Error Handling Middleware ត្រូវដាក់នៅចុង Application។'
    },
    {
      question: 'តើ Async Error Handling ត្រូវការអ្វី?',
      options: ['express.json()', 'try-catch', 'jsonwebtoken', 'helmet'],
      correct: 1,
      explanation: 'Async Error Handling ត្រូវការ try-catch។'
    },
    {
      question: 'តើ Custom Error អាចកំណត់អ្វីបាន?',
      options: ['Status Code', 'Request Body', 'Middleware', 'Static Files'],
      correct: 0,
      explanation: 'Custom Error អាចកំណត់ Status Code និង Message។'
    },
    {
      question: 'តើ Error Handling ជួយការពារ Security ដោយរបៀបណា?',
      options: ['បង្ផើនល្បឿន', 'លាក់ Sensitive Data', 'Validate Input', 'Create Tokens'],
      correct: 1,
      explanation: 'Error Handling លាក់ Sensitive Data ដើម្បីការពារ Security។'
    },
    {
      question: 'តើ `err.status` ប្រើសម្រាប់អ្វី?',
      options: ['បង្កើត Error', 'កំណត់ HTTP Status Code', 'Parse JSON', 'Log Requests'],
      correct: 1,
      explanation: '`err.status` កំណត់ HTTP Status Code សម្រាប់ Response។'
    },
    {
      question: 'តើ Express.js មាន Built-in Error Handling ដែរឬទេ?',
      options: ['បាន', 'មិនបាន', 'បាន ប៉ុន្តែតែនៅ Production', 'មិនបាន ព្រោះជា Async'],
      correct: 1,
      explanation: 'Express.js មិនមាន Built-in Error Handling ទេ ត្រូវបង្កើត Middleware។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ដែលអនុវត្ត Error Handling។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-error-handling\`។
   - ប្រើ \`npm init -y\`។
   - ដំឡើង Dependency: \`npm install express\`។

2. **បង្កើត Routes:**
   - បង្កើត File: \`app.js\`។
   - Route \`/error\` (GET): បង្កើត Error ដោយប្រើ \`throw new Error('Test error')\`។
   - Route \`/notfound\` (GET): បង្កើត Custom Error \`NotFoundError\` ជាមួយ Status 404។
   - Route \`/async\` (GET): បង្កើត Async Error ដោយប្រើ try-catch។
   - បន្ផែម Error Handling Middleware ដើម្បីឆ្លើយតប JSON \`{ error: message }\`។

3. **Test Application:**
   - Run \`node app.js\`។
   - ប្រើ Postman:
     - GET \`/error\`
     - GET \`/notfound\`
     - GET \`/async\`

**ការណែនាំ:** ប្រើ Custom Error Class និង try-catch សម្រាប់ Async Route។
    `,
    solution: `
\`\`\`text
const express = require('express');
const app = express();

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

app.get('/error', (req, res, next) => {
  throw new Error('Test error');
});

app.get('/notfound', (req, res, next) => {
  throw new NotFoundError('Resource not found');
});

app.get('/async', async (req, res, next) => {
  try {
    throw new Error('Async error');
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`
`
  }
};

export default ExpressLesson5_1Content;