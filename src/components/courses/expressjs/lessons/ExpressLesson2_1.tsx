import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson2_1Content: LessonContent = {
  title: 'Basic Express Application Structure',
  objectives: [
    'យល់ដឹងពីរចនាសម្ព័ន្ធជាមូលដ្ឋាននៃ Express Application',
    'រៀនបង្កើត app Instance ជាមួយ `express()`',
    'ស្វែងយល់ពីការចាប់ផ្តើម Server ដោយប្រើ `app.listen()`',
    'អនុវត្តន៍ការបង្កើត Basic Routes សម្រាប់ Application',
  ],
  content: `
# Basic Express Application Structure 🏗️

---

ការយល់ដឹងពី **រចនាសម្ព័ន្ធជាមូលដ្ឋាន** នៃ Express Application គឺជាជំហានសំខាន់ដើម្បីចាប់ផ្តើមអភិវឌ្ឍន៍ Backend។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបបង្កើត Express App និងការកំណត់ Routes សាមញ្ញ។

---

## 1. ការបង្កើត app Instance

Express.js ចាប់ផ្តើមដោយការបង្កើត **app Instance** ដោយប្រើ \`express()\`។ វាជាចំណុចចាប់ផ្តើមសម្រាប់ Application។

**ឧទាហរណ៍:**
\`\`\`javascript
const express = require('express');
const app = express();
\`\`\`

- \`express()\`: បង្កើត Instance នៃ Express Application។
- \`app\`: ជា Object ដែលគ្រប់គ្រង Routes, Middleware, និង Server។

---

## 2. ការចាប់ផ្តើម Server

បន្ទាប់ពីបង្កើត \`app\` យើងប្រើ \`app.listen()\` ដើម្បីចាប់ផ្តើម Server នៅ Port ជាក់លាក់។

**ឧទាហរណ៍:**
\`\`\`javascript
app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`

- \`3000\`: ជា Port ដែល Server ដំណើរការ។
- Callback Function: ដំណើរការនៅពេល Server ចាប់ផ្តើម។

---

## 3. ការប្រើប្រាស់ Basic Routes

**Routes** កំណត់ផ្លូវដែល Client អាចចូលប្រើ (ឧ. \`/\`, \`/about\`)។ Express ប្រើ HTTP Methods (GET, POST, ជាដើម) ដើម្បីគ្រប់គ្រង Requests។

**ឧទាហរណ៍:**
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('សួស្តីពី Express!');
});

app.get('/about', (req, res) => {
  res.send('អំពីយើង');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`

- \`app.get()\`: គ្រប់គ្រង GET Requests។
- \`req\`: Request Object (ទិន្នន័យពី Client)។
- \`res\`: Response Object (ឆ្លើយតបទៅ Client)។

**លទ្ធផល:**
- \`http://localhost:3000/\`: បង្ហាញ "សួស្តីពី Express!"។
- \`http://localhost:3000/about\`: បង្ហាញ "អំពីយើង"។

---

## 4. គន្លឹះសម្រាប់ Basic Express Application

- **រក្សា Code សាមញ្ញ:** ចាប់ផ្តើមជាមួយ Routes តិចៗ មុននឹងបន្ថែម Complexity។
- **ប្រើ \`nodemon\`:** ដើម្បី Auto-restart Server នៅពេលកែ Code (\`npm install -g nodemon\`)។
- **អាន Documentation:** [expressjs.com/en/starter/basic-routing](https://expressjs.com/en/starter/basic-routing)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បង្កើត Basic Express App</h3>
<p>បង្កើត Express App ជាមួយ Route សម្រាប់ \`/\`។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>សួស្តីពី Express App!</h1>');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ បន្ថែម Multiple Routes</h3>
<p>បន្ថែម Routes សម្រាប់ \`/home\` និង \`/contact\`។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.send('<h1>ទំព័រដើម</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>ទំនាក់ទំនង</h1>');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `express()` ធ្វើអ្វី?',
      options: [
        'ចាប់ផ្តើម Server',
        'បង្កើត app Instance',
        'គ្រប់គ្រង Routes',
        'ភ្ជាប់ Database'
      ],
      correct: 1,
      explanation: '`express()` បង្កើត app Instance សម្រាប់ Express Application។'
    },
    {
      question: 'តើ `app.listen()` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Requests',
        'ចាប់ផ្តើម Server',
        'បង្កើត Routes',
        'ដំឡើង Middleware'
      ],
      correct: 1,
      explanation: '`app.listen()` ចាប់ផ្តើម Server នៅ Port ជាក់លាក់។'
    },
    {
      question: 'តើ `app.get()` គ្រប់គ្រង HTTP Method ណាមួយ?',
      options: [
        'POST',
        'PUT',
        'GET',
        'DELETE'
      ],
      correct: 2,
      explanation: '`app.get()` គ្រប់គ្រង GET Requests។'
    },
    {
      question: 'តើ `req` នៅក្នុង Route Handler គឺជាអ្វី?',
      options: [
        'Response Object',
        'Request Object',
        'Server Instance',
        'Middleware'
      ],
      correct: 1,
      explanation: '`req` ជា Request Object ដែលផ្ទុកទិន្នន័យពី Client។'
    },
    {
      question: 'តើ `res.send()` ធ្វើអ្វី?',
      options: [
        'ផ្ញើ JSON Data',
        'ផ្ញើ String/Buffer',
        'ផ្ញើ HTML Template',
        'ផ្ញើ Database Query'
      ],
      correct: 1,
      explanation: '`res.send()` ផ្ញើ String ឬ Buffer ទៅ Client។'
    },
    {
      question: 'តើ Port ដែល Express ប្រើជាទូទៅគឺជាអ្វី?',
      options: [
        '8080',
        '3000',
        '5000',
        '80'
      ],
      correct: 1,
      explanation: 'Port 3000 ជា Default សម្រាប់ Express។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `nodemon` ដើម្បីអ្វី?',
      options: [
        'Run Database',
        'Auto-restart Server',
        'Create Routes',
        'Install Packages'
      ],
      correct: 1,
      explanation: '`nodemon` Auto-restart Server នៅពេលកែ Code។'
    },
    {
      question: 'តើ Route `/about` នឹងឆ្លើយតបនៅពេលណា?',
      options: [
        'នៅពេល Client ផ្ញើ POST Request',
        'នៅពេល Client ផ្ញើ GET Request ទៅ `/about`',
        'នៅពេល Server បិទ',
        'នៅពេល Database ភ្ជាប់'
      ],
      correct: 1,
      explanation: 'Route `/about` ឆ្លើយតបនៅពេល GET Request ទៅ `/about`។'
    },
    {
      question: 'តើ `app` Instance មានតួនាទីអ្វី?',
      options: [
        'គ្រប់គ្រង Routes និង Middleware',
        'ផ្ទុក Database',
        'បង្កើត Frontend',
        'Run Browser'
      ],
      correct: 0,
      explanation: '`app` Instance គ្រប់គ្រង Routes និង Middleware។'
    },
    {
      question: 'តើ Express Application ត្រូវការ `app.listen()` ដើម្បីដំណើរការដែរឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅ Production',
        'មិនបាន ព្រោះជា Frontend'
      ],
      correct: 0,
      explanation: '`app.listen()` ត្រូវការដើម្បីចាប់ផ្តើម Server។'
    },
    {
      question: 'តើ `res` នៅក្នុង Route Handler គឺជាអ្វី?',
      options: [
        'Request Object',
        'Response Object',
        'Server Instance',
        'Middleware'
      ],
      correct: 1,
      explanation: '`res` ជា Response Object សម្រាប់ឆ្លើយតបទៅ Client។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ជាមួយរចនាសម្ព័ន្ធជាមូលដ្ឋាន។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-basic-app\`។
   - ប្រើ \`npm init -y\` ដើម្បីបង្កើត \`package.json\`។
   - ដំឡើង Express.js ដោយ \`npm install express\`។

2. **បង្កើត Server:**
   - បង្កើត File: \`app.js\`។
   - បង្កើត \`app\` Instance ដោយ \`express()\`។
   - បន្ថែម Route សម្រាប់ \`/\` ដែលឆ្លើយតប: \`<h1>Express App ដំបូង!</h1>\`។
   - បន្ថែម Route សម្រាប់ \`/welcome\` ដែលឆ្លើយតប: \`<h1>សូមស្វាគមន៍!</h1>\`។
   - ចាប់ផ្តើម Server នៅ Port 3000 ជាមួយ \`console.log('Server ដំណើរការ!')\`។

3. **Test Application:**
   - Run \`node app.js\`។
   - បើក Browser នៅ \`http://localhost:3000\` និង \`http://localhost:3000/welcome\`។

**ការណែនាំ:** ប្រើ \`nodemon\` ដើម្បី Auto-restart Server។
    `,
    solution: `
\`\`\`text
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Express App ដំបូង!</h1>');
});

app.get('/welcome', (req, res) => {
  res.send('<h1>សូមស្វាគមន៍!</h1>');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការ!');
});
\`\`\`
`
  }
};

export default ExpressLesson2_1Content;