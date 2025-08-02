import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson1_2Content: LessonContent = {
  title: 'Setup Development Environment',
  objectives: [
    'រៀនដំឡើង Node.js និង npm',
    'បង្កើត Node.js Project ដំបូង',
    'ដំឡើង Express.js នៅក្នុង Project',
    'បង្កើត Simple Express Server',
  ],
  content: `
# Setup Development Environment 🛠️

---

ការរៀបចំ **Development Environment** គឺជាជំហានដំបូងដើម្បីអភិវឌ្ឍន៍ជាមួយ Express.js។ នៅទីនេះ យើងនឹងរៀនដំឡើង Node.js, npm, និងបង្កើត Express Server ដំបូង។

---

## 1. ការដំឡើង Node.js និង npm

**Node.js** គឺជា JavaScript Runtime ដែល Express.js ដំណើរការលើ។ **npm** ជា Node Package Manager សម្រាប់ដំឡើង Libraries។

**ជំហាន:**
1. ទាញយក Node.js ពី [nodejs.org](https://nodejs.org)។
2. ដំឡើង Node.js (npm នឹងត្រូវបានដំឡើងដោយស្វ័យប្រវត្តិ)។
3. ពិនិត្យ Version ដោយប្រើ:
   \`\`\`bash
   node -v
   npm -v
   \`\`\`

---

## 2. បង្កើត Node.js Project

**ជំហាន:**
1. បង្កើត Folder សម្រាប់ Project (ឧ. \`my-express-app\`)។
2. ចូលទៅ Folder នោះ:
   \`\`\`bash
   cd my-express-app
   \`\`\`
3. ប្រើ \`npm init\` ដើម្បីបង្កើត \`package.json\`:
   \`\`\`bash
   npm init -y
   \`\`\`

---

## 3. ការដំឡើង Express.js

**ជំហាន:**
1. ដំឡើង Express.js:
   \`\`\`bash
   npm install express
   \`\`\`
2. ពិនិត្យថា Express ត្រូវបានបន្ថែមទៅ \`package.json\`។

---

## 4. បង្កើត Simple Express Server

**ឧទាហរណ៍:**
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('សួស្តីពី Express Server!');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`

**ជំហាន:**
1. បង្កើត File \`server.js\` ជាមួយ Code ខាងលើ។
2. Run Server:
   \`\`\`bash
   node server.js
   \`\`\`
3. បើក Browser នៅ \`http://localhost:3000\`។

**គន្លឹះ:** ប្រើ \`nodemon\` (ដំឡើងដោយ \`npm install -g nodemon\`) ដើម្បី Auto-restart Server នៅពេលកែ Code។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បង្កើត Project និង Express Server</h3>
<p>បង្កើត Project និង Server ដែលឆ្លើយតបនឹង Route \`/\`។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('សួស្តីពី Express!');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ បន្ថែម Route \`/hello\`</h3>
<p>បន្ថែម Route ថ្មីសម្រាប់ \`/hello\`។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('ទំព័រដើម');
});

app.get('/hello', (req, res) => {
  res.send('សួស្តី!');
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជា Node.js?',
      options: [
        'Web Framework',
        'JavaScript Runtime',
        'Database',
        'Browser'
      ],
      correct: 1,
      explanation: 'Node.js គឺជា JavaScript Runtime។'
    },
    {
      question: 'តើ npm ជាអ្វី?',
      options: [
        'Node Package Manager',
        'Node Programming Module',
        'Node Project Maker',
        'Node Performance Monitor'
      ],
      correct: 0,
      explanation: 'npm គឺជា Node Package Manager។'
    },
    {
      question: 'តើ Command ណាមួយប្រើដើម្បីបង្កើត `package.json`?',
      options: [
        'npm start',
        'npm init',
        'node init',
        'npm install'
      ],
      correct: 1,
      explanation: '`npm init` បង្កើត `package.json`។'
    },
    {
      question: 'តើ Command ណាមួយប្រើដើម្បីដំឡើង Express.js?',
      options: [
        'npm install express',
        'node install express',
        'npm start express',
        'node express'
      ],
      correct: 0,
      explanation: '`npm install express` ដំឡើង Express.js។'
    },
    {
      question: 'តើ Port ដែល Express Server ដំណើរការជាទូទៅគឺជាអ្វី?',
      options: [
        '8080',
        '3000',
        '5000',
        '80'
      ],
      correct: 1,
      explanation: 'Port 3000 ជា Default សម្រាប់ Express Server។'
    },
    {
      question: 'តើ `nodemon` មានប្រយោជន៍អ្វី?',
      options: [
        'Run Database',
        'Auto-restart Server',
        'Install Packages',
        'Create Routes'
      ],
      correct: 1,
      explanation: '`nodemon` Auto-restart Server នៅពេលកែ Code។'
    },
    {
      question: 'តើ File ណាមួយត្រូវបានបង្កើតដោយ `npm init`?',
      options: [
        'server.js',
        'package.json',
        'index.html',
        'app.js'
      ],
      correct: 1,
      explanation: '`npm init` បង្កើត `package.json`។'
    },
    {
      question: 'តើ Command ណាមួយប្រើដើម្បី Run Express Server?',
      options: [
        'npm start',
        'node server.js',
        'npm run server',
        'node start'
      ],
      correct: 1,
      explanation: '`node server.js` Run Express Server។'
    },
    {
      question: 'តើ Express.js តម្រូវឱ្យមាន Node.js ដែរឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅ Windows',
        'មិនបាន ព្រោះជា Frontend Framework'
      ],
      correct: 0,
      explanation: 'Express.js តម្រូវឱ្យមាន Node.js។'
    },
    {
      question: 'តើអ្នកអាចពិនិត្យ Node.js Version ដោយ Command ណា?',
      options: [
        'node -v',
        'npm version',
        'node version',
        'npm -v'
      ],
      correct: 0,
      explanation: '`node -v` ពិនិត្យ Node.js Version។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Express.js ដោយមិនដំឡើង npm បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ Yarn',
        'បាន ប៉ុន្តែត្រូវប្រើ TypeScript'
      ],
      correct: 1,
      explanation: 'Express.js តម្រូវឱ្យមាន npm ឬ Package Manager។'
    },
    {
      question: 'តើ `package.json` មានតួនាទីអ្វី?',
      options: [
        'Run Server',
        'Store Project Dependencies',
        'Create Routes',
        'Style Website'
      ],
      correct: 1,
      explanation: '`package.json` Store Project Dependencies។'
    },
  ],
  lab: {
    task: `
បង្កើត Express.js Project និង Server សាមញ្ញ។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`my-express-app\`។
   - ប្រើ \`npm init -y\` ដើម្បីបង្កើត \`package.json\`។
   - ដំឡើង Express.js ដោយ \`npm install express\`។

2. **បង្កើត Server:**
   - បង្កើត File: \`server.js\`។
   - បង្កើត Route សម្រាប់ \`/\` ដែលឆ្លើយតប: \`<h1>Express.js Project ដំបូង!</h1>\`។
   - Run Server នៅ Port 3000។

3. **បន្ថែម Logging:**
   - បន្ថែម \`console.log('Server ចាប់ផ្តើម!')\` នៅពេល Server Run។

4. **Test Application:**
   - Run \`node server.js\`។
   - បើក Browser នៅ \`http://localhost:3000\`។

**ការណែនាំ:** ប្រើ \`nodemon\` ដើម្បី Auto-restart Server។
    `,
    solution: `
\`\`\`text
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Express.js Project ដំបូង!</h1>');
});

app.listen(3000, () => {
  console.log('Server ចាប់ផ្តើម!');
});
\`\`\`
`
  }
};

export default ExpressLesson1_2Content;