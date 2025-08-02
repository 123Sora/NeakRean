import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson6_2Content: LessonContent = {
  title: 'Deployment',
  objectives: [
    'យល់ដឹងពីដំណើរការ Deployment នៃ Express.js Applications',
    'រៀន Deploy ទៅ Platforms ដូចជា Render ឬ Heroku',
    'អនុវត្ត Environment Variables សម្រាប់ Production',
    'ស្វែងយល់ពី Best Practices សម្រាប់ Deployment',
  ],
  content: `
# Deployment 🚀

---

**Deployment** គឺជាដំណើរការដាក់ Express.js Application ទៅ Production Environment ដើម្បីឱ្យអ្នកប្រើអាចចូលប្រើបាន។ នៅក្នុងមេរៀននេះ យើងនឹងរៀន Deploy ទៅ Platform ដូចជា Render និងកំណត់ Configuration សម្រាប់ Production។

---

## 1. សារៈសំខាន់នៃ Deployment

Deployment ជួយ:
- **ធ្វើឱ្យ Application អាចចូលប្រើបាន:** តាម Internet។
- **ធានាស្ថេរភាព:** នៅ Production Environment។
- **Scalability:** គាំទ្រ Users ច្រើន។

---

## 2. ការត្រៀម Deployment

**ជំហាន:**
1. **កំណត់ \`start\` Script:** នៅក្នុង \`package.json\`។
2. **ប្រើ Environment Variables:** សម្រាប់ Config (ឧ. PORT, DB_URL)។
3. **បន្ថែម Error Handling:** ដើម្បីការពារ Crash។

**ឧទាហរណ៍ (package.json):**
\`\`\`json
{
  "scripts": {
    "start": "node app.js"
  }
}
\`\`\`

**ឧទាហរណ៍ (app.js):**
\`\`\`javascript
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(process.env.PORT || 3000);
\`\`\`

---

## 3. Deploy ទៅ Render

**Render** ជា Platform សម្រាប់ Deploy Web Applications។

**ជំហាន:**
1. បង្កើត Repository នៅ GitHub។
2. បង្កើត \`.env\` File និងបន្ថែមទៅ \`.gitignore\`។
3. កំណត់ \`start\` Script នៅក្នុង \`package.json\`។
4. Push Code ទៅ GitHub។
5. បង្កើត Web Service នៅ Render និងភ្ជាប់ជាមួយ Repository។
6. កំណត់ Environment Variables នៅ Render Dashboard។

**ឧទាហរណ៍ (.env):**
\`\`\`
PORT=3000
NODE_ENV=production
\`\`\`

---

## 4. Best Practices សម្រាប់ Deployment

- **ប្រើ HTTPS:** សម្រាប់ Security។
- **Monitor Application:** ប្រើ Tools ដូចជា New Relic។
- **Log Errors:** សម្រាប់ Debugging នៅ Production។
- **Backup Data:** ការពារ Data Loss។
- **អាន Documentation:** [Render](https://render.com/docs), [Heroku](https://devcenter.heroku.com)។

---

## 5. Production Configuration

- **NODE_ENV:** កំណត់ទៅ \`production\`។
- **Error Handling:** លាក់ Stack Traces។
- **Compression:** ប្រើ Middleware ដូចជា \`compression\`។

**ឧទាហរណ៍:**
\`\`\`javascript
const compression = require('compression');
app.use(compression());
\`\`\`
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ Prepare for Deployment</h3>
<p>កំណត់ Environment Variables និង Start Script។</p>
<pre><code class="language-javascript">
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.listen(process.env.PORT || 3000);
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Production Error Handling</h3>
<p>លាក់ Stack Traces នៅ Production១</p>
<pre><code class="language-javascript">
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    res.status(500).json({ error: err.message });
  }
});
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Deployment មានន័យដូចម្តេច?',
      options: ['Testing Code', 'ដាក់ Application ទៅ Production', 'Validate Input', 'Log Requests'],
      correct: 1,
      explanation: 'Deployment គឺជាការដាក់ Application ទៅ Production Environment១'
    },
    {
      question: 'តើ `start` Script នៅក្នុង `package.json` ប្រើសម្រាប់អ្វី?',
      options: ['Run Tests', 'Start Server', 'Validate Input', 'Log Requests'],
      correct: 1,
      explanation: '`start` Script ប្រើសម្រាប់ Start Server នៅ Production១'
    },
    {
      question: 'តើ Render ជាអ្វី?',
      options: ['Testing Framework', 'Deployment Platform', 'Logging Library', 'Validator'],
      correct: 1,
      explanation: 'Render ជា Platform សម្រាប់ Deploy Web Applications១'
    },
    {
      question: 'តើ Environment Variables នៅ Production គួរកំណត់នៅឯណា?',
      options: ['Source Code', 'Platform Dashboard', 'Database', 'Static Files'],
      correct: 1,
      explanation: 'Environment Variables គួរកំណត់នៅ Platform Dashboard (ឧ. Render)១'
    },
    {
      question: 'តើ `NODE_ENV=production` មានប្រយោជន៍អ្វី?',
      options: ['បង្កើនល្បឿន', 'កំណត់ Production Mode', 'Validate Input', 'Log Requests'],
      correct: 1,
      explanation: '`NODE_ENV=production` កំណត់ Application ទៅ Production Mode១'
    },
    {
      question: 'តើ HTTPS មានសារៈសំខាន់ដោយសារអ្វី?',
      options: ['បង្កើនល្បឿន', 'ការពារ Security', 'Validate Input', 'Serve Files'],
      correct: 1,
      explanation: 'HTTPS ការពារ Security ដោយអ៊ិនគ្រីប Data១'
    },
    {
      question: 'តើ Best Practice សម្រាប់ Deployment រួមមានអ្វី?',
      options: ['Log Errors', 'Hash Passwords', 'Validate Input', 'Serve Files'],
      correct: 0,
      explanation: 'Best Practices រួមមាន Log Errors, HTTPS, Monitoring១'
    },
    {
      question: 'តើ Compression Middleware ជួយអ្វី?',
      options: ['Validate Input', 'កាត់បន្ថយ Response Size', 'Log Requests', 'Hash Passwords'],
      correct: 1,
      explanation: 'Compression Middleware កាត់បន្ថយ Response Size ដើម្បីបង្កើនល្បឿន។'
    },
    {
      question: 'តើ `.gitignore` គួររួមបញ្ចូលអ្វី?',
      options: ['app.js', '.env', 'package.json', 'routes'],
      correct: 1,
      explanation: '`.gitignore` គួររួមបញ្ចូល `.env` ដើម្បីការពារ Sensitive Data១'
    },
    {
      question: 'តើ Monitoring Tools ដូចជា New Relic មានប្រយោជន៍អ្វី?',
      options: ['Validate Input', 'តាមដាន Performance', 'Hash Passwords', 'Serve Files'],
      correct: 1,
      explanation: 'Monitoring Tools តាមដាន Performance និង Errors នៅ Production១'
    },
    {
      question: 'តើ Stack Traces គួរបង្ហាញនៅ Production ដែរឬទេ?',
      options: ['បាន', 'មិនបាន', 'បាន ប៉ុន្តែតែនៅ Development', 'មិនបាន ព្រោះជា JSON'],
      correct: 1,
      explanation: 'Stack Traces មិនគួរបង្ហាញនៅ Production ដើម្បីការពារ Security១'
    },
    {
      question: 'តើ Environment Variables នៅ Render កំណត់នៅឯណា?',
      options: ['Source Code', 'Dashboard', 'Database', 'Static Files'],
      correct: 1,
      explanation: 'Environment Variables កំណត់នៅ Render Dashboard១'
    },
    {
      question: 'តើ Backup Data មានសារៈសំខាន់ដោយសារអ្វី?',
      options: ['បង្កើនល្បឿន', 'ការពារ Data Loss', 'Validate Input', 'Log Requests'],
      correct: 1,
      explanation: 'Backup Data ការពារ Data Loss នៅ Production១'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application សម្រាប់ Deployment។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-deployment\`។
   - ប្រើ \`npm init -y\`។
   - ដំឡើង Dependencies: \`npm install express dotenv compression\`។
   - កំណត់ \`"start": "node app.js"\` នៅក្នុង \`package.json\`។

2. **បង្កើត Application:**
   - File: \`app.js\`។
   - ប្រើ \`dotenv\` សម្រាប់ Environment Variables (\`PORT\`, \`NODE_ENV\`)។
   - Route \`/\` (GET): ឆ្លើយតប \`{ message: "Home" }\`។
   - Route \`/api\` (GET): ឆ្លើយតប \`{ env: process.env.NODE_ENV }\`។
   - បន្ថែម \`compression\` Middleware។
   - បន្ថែម Error Handling Middleware (លាក់ Stack Traces នៅ Production)។

3. **បង្កើត \`.env\` File:**
   - Variables: \`PORT=3000\`, \`NODE_ENV=production\`។
   - បន្ថែម \`.env\` ទៅ \`.gitignore\`។

4. **Test Application:**
   - Run \`node app.js\`។
   - ប្រើ Postman:
     - GET \`/\`
     - GET \`/api\`
   - សាកល្បងជាមួយ \`NODE_ENV=production\` និង \`development\`។

**ការណែនាំ:** ត្រៀម Application សម្រាប់ Deploy ទៅ Render ឬ Heroku១
    `,
    solution: `
## app.js 
\`\`\`text
const express = require('express');
const dotenv = require('dotenv');
const compression = require('compression');

dotenv.config();
const app = express();

app.use(compression());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Home' });
});

app.get('/api', (req, res) => {
  res.json({ env: process.env.NODE_ENV || 'development' });
});

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(\`Server running on port \${process.env.PORT || 3000}\`);
});
\`\`\`


## .gitignore 
\`\`\`text
.env
\`\`\`
`
  }
};

export default ExpressLesson6_2Content;