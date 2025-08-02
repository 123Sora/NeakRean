import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson5_4Content: LessonContent = {
  title: 'Environment Variables',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Environment Variables នៅក្នុង Express.js',
    'រៀនប្រើ dotenv សម្រាប់គ្រប់គ្រង Environment Variables',
    'អនុវត្តការប្រើ Environment Variables សម្រាប់ Configuration',
    'ស្វែងយល់ពី Security Practices ជាមួយ Environment Variables',
  ],
  content: `
# Environment Variables 🌍

---

**Environment Variables** គឺជាវិធីសាស្ត្រសម្រាប់រក្សាទុក Configuration Data (ឧ. API Keys, Database URLs) ដោយមិនបញ្ចូលក្នុង Source Code។ នៅក្នុងមេរៀននេះ យើងនឹងប្រើ **dotenv** ដើម្បីគ្រប់គ្រង Environment Variables នៅក្នុង Express.js។

---

## 1. សារៈសំខាន់នៃ Environment Variables

Environment Variables ជួយ:
- **ការពារ Security:** លាក់ Sensitive Data ដូចជា API Keys។
- **ភាពបត់បែន:** ផ្លាស់ប្តូរ Config ដោយមិនតម្រូវឱ្យកែ Code។
- **គាំទ្រ Environments ផ្សេងៗ:** Development, Production, Testing។

---

## 2. ការប្រើ dotenv

**dotenv** ជា Library ដែលផ្ទុក Variables ពី File \`.env\` ទៅ \`process.env\`។

**ឧទាហរណ៍:**
\`\`\`javascript
// .env
PORT=3000
DB_URL=mongodb://localhost:27017/myapp
API_KEY=your-secret-key
\`\`\`

\`\`\`javascript
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send(\`Server running on port \${process.env.PORT}\`);
});

app.listen(process.env.PORT);
\`\`\`

---

## 3. Configuration ជាមួយ Environment Variables

ប្រើ Environment Variables សម្រាប់:
- **Port:** កំណត់ Port របស់ Server។
- **Database Connection:** រក្សាទុក Database URL។
- **API Keys:** សម្រាប់ External Services។

**ឧទាហរណ៍:**
\`\`\`javascript
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
\`\`\`

---

## 4. Security Practices

- **កុំ Commit \`.env\` File:** បន្ថែម \`.env\` ទៅ \`.gitignore\`។
- **ប្រើ Default Values:** សម្រាប់ Variables ដែលអាចខ្វះ។
- **Validate Variables:** ពិនិត្យថា Variables មាន។

**ឧទាហរណ៍:**
\`\`\`javascript
if (!process.env.API_KEY) {
  throw new Error('API_KEY is not defined');
}
\`\`\`

---

## 5. គន្លឹះសម្រាប់ Environment Variables

- **ប្រើ \`.env.example\`:** បង្ហាញ Structure នៃ \`.env\` File។
- **Secure Secrets:** ប្រើ Strong Passwords និង Encryption។
- **Validate Early:** ពិនិត្យ Variables នៅពេល Start Application។
- **អាន Documentation:** [dotenv](https://github.com/motdotla/dotenv)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ ប្រើ dotenv</h3>
<p>ផ្ទុក PORT ពី \`.env\` File។</p>
<pre><code class="language-javascript">
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(process.env.PORT, () => {
  console.log(\`Server running on port \${process.env.PORT}\`);
});
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Validate Environment Variables</h3>
<p>ពិនិត្យថា API_KEY មាន។</p>
<pre><code class="language-javascript">
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

if (!process.env.API_KEY) {
  throw new Error('API_KEY is not defined');
}

const app = express();

app.get('/api', (req, res) => {
  res.json({ key: process.env.API_KEY });
});

app.listen(process.env.PORT);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Environment Variables ប្រើសម្រាប់អ្វី?',
      options: ['Serve Files', 'រក្សាទុក Configuration', 'Validate Input', 'Log Requests'],
      correct: 1,
      explanation: 'Environment Variables រក្សាទុក Configuration Data ដូចជា API Keys។'
    },
    {
      question: 'តើ dotenv ធ្វើអ្វី?',
      options: ['Hash Passwords', 'ផ្ទុក Variables ពី `.env`', 'Validate Input', 'Log HTTP Requests'],
      correct: 1,
      explanation: 'dotenv ផ្ទុក Variables ពី `.env` File ទៅ `process.env`។'
    },
    {
      question: 'តើ `.env` File គួរត្រូវ Commit ទៅ Git ដែរឬទេ?',
      options: ['បាន', 'មិនបាន', 'បាន ប៉ុន្តែតែនៅ Development', 'មិនបាន ព្រោះជា JSON'],
      correct: 1,
      explanation: '`.env` File មិនគួរត្រូវ Commit ទេ ដើម្បីការពារ Security។'
    },
    {
      question: 'តើ `process.env` ជាអ្វី?',
      options: ['Database Connection', 'Node.js Object សម្រាប់ Variables', 'Middleware', 'Static File'],
      correct: 1,
      explanation: '`process.env` ជា Object សម្រាប់ Environment Variables។'
    },
    {
      question: 'តើ Environment Variables ជួយ Security ដោយរបៀបណា?',
      options: ['Validate Input', 'លាក់ Sensitive Data', 'Log Requests', 'Serve Files'],
      correct: 1,
      explanation: 'Environment Variables លាក់ Sensitive Data ដូចជា API Keys។'
    },
    {
      question: 'តើ `.env.example` មានប្រយោជន៍អ្វី?',
      options: ['បង្កើត API Keys', 'បង្ហាញ Structure នៃ `.env`', 'Log Requests', 'Validate Input'],
      correct: 1,
      explanation: '`.env.example` បង្ហាញ Structure នៃ `.env` File។'
    },
    {
      question: 'តើ Default Values គួរប្រើនៅពេលណា?',
      options: ['Variables មាន', 'Variables ខ្វះ', 'Application Start', 'Production Only'],
      correct: 1,
      explanation: 'Default Values ប្រើនៅពេល Variables ខ្វះ។'
    },
    {
      question: 'តើ Validation នៃ Environment Variables គួរធ្វើនៅពេលណា?',
      options: ['នៅចុង Application', 'នៅពេល Start Application', 'នៅពេល Request', 'នៅ Production'],
      correct: 1,
      explanation: 'Validation គួរធ្វើនៅពេល Start Application។'
    },
    {
      question: 'តើ Environment Variables គាំទ្រ Environments អ្វីខ្លះ?',
      options: ['Development, Production, Testing', 'Client, Server', 'Public, Private', 'Read, Write'],
      correct: 0,
      explanation: 'Environment Variables គាំទ្រ Development, Production, Testing។'
    },
    {
      question: 'តើ `.gitignore` ប្រើសម្រាប់អ្វី?',
      options: ['Validate Input', 'ការពារ `.env` File', 'Log Requests', 'Serve Files'],
      correct: 1,
      explanation: '`.gitignore` ការពារ `.env` File ពីការ Commit។'
    },
    {
      question: 'តើ dotenv តម្រូវឱ្យហៅ Method អ្វី?',
      options: ['dotenv.init()', 'dotenv.config()', 'dotenv.load()', 'dotenv.start()'],
      correct: 1,
      explanation: '`dotenv.config()` ផ្ទុក Variables ពី `.env` File។'
    },
    {
      question: 'តើ Environment Variables អាចប្រើសម្រាប់អ្វី?',
      options: ['Database URLs', 'Static Files', 'HTML Templates', 'Middleware'],
      correct: 0,
      explanation: 'Environment Variables ប្រើសម្រាប់ Database URLs, API Keys, ជាដើម។'
    },
    {
      question: 'តើ Security Practice សំខាន់សម្រាប់ Environment Variables គឺអ្វី?',
      options: ['បង្កើនល្បឿន', 'លាក់ Sensitive Data', 'Validate Input', 'Log Requests'],
      correct: 1,
      explanation: 'លាក់ Sensitive Data គឺជា Security Practice សំខាន់។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ដែលប្រើ Environment Variables។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-env\`។
   - ប្រើ \`npm init -y\`។
   - ដំឡើង Dependency: \`npm install express dotenv\`។

2. **បង្កើត \`.env\` File:**
   - បន្ថែម Variables:
     - \`PORT=3000\`
     - \`API_KEY=your-secret-key\`
     - \`ENV=development\`
   - បន្ថែម \`.env\` ទៅ \`.gitignore\`។

3. **បង្កើត Routes:**
   - បង្កើត File: \`app.js\`។
   - ប្រើ \`dotenv.config()\`។
   - Validate \`API_KEY\` នៅពេល Start Application។
   - Route \`/\` (GET): ឆ្លើយតប \`{ message: "Home", env: process.env.ENV }\`។
   - Route \`/api\` (GET): ឆ្លើយតប \`{ key: process.env.API_KEY }\` បើ \`API_KEY\` មាន។
   - បន្ថែម Error Handling Middleware។

4. **Test Application:**
   - Run \`node app.js\`។
   - ប្រើ Postman:
     - GET \`/\`
     - GET \`/api\`
   - សាកល្បងដោយលុប \`API_KEY\` ពី \`.env\` ដើម្បីឃើញ Error។

**ការណែនាំ:** ប្រើ try-catch និង Default Values។
    `,
    solution: `
\`\`\`text
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

if (!process.env.API_KEY) {
  throw new Error('API_KEY is not defined');
}

const app = express();

app.get('/', (req, res) => {
  try {
    res.json({ message: 'Home', env: process.env.ENV || 'development' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api', (req, res) => {
  try {
    res.json({ key: process.env.API_KEY });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(\`Server running on port \${process.env.PORT || 3000}\`);
});
\`\`\`
`
  }
};

export default ExpressLesson5_4Content;