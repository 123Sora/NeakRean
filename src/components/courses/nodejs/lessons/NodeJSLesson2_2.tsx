import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson2_2Content: LessonContent = {
  title: 'NPM (Node Package Manager)',
  objectives: [
    'យល់ដឹងអំពី NPM និងអត្ថប្រយោជន៍របស់វា',
    'រៀនប្រើ Command សំខាន់ៗរបស់ NPM (install, init, run)',
    'ស្វែងយល់ពី `package.json` និង Dependencies',
    'អនុវត្តការដំឡើង Third-party Modules',
    'គ្រប់គ្រង Project Dependencies និង Scripts'
  ],
  content: `
# NPM (Node Package Manager) 📦

---

## 1. តើ NPM ជាអ្វី? 🤔

* **និយមន័យ:** NPM (Node Package Manager) គឺជា Tool សម្រាប់គ្រប់គ្រង Packages (Modules) នៅក្នុង Node.js។ វាអនុញ្ញាតឱ្យដំឡើង និងប្រើ Third-party Modules។
* **អត្ថប្រយោជន៍:**
  * ចែករំលែក Code តាមរយៈ NPM Registry។
  * គ្រប់គ្រង Dependencies នៃ Project។
  * ប្រតិបត្តិ Scripts សម្រាប់ Automation។

---

## 2. ការប្រើប្រាស់ NPM Commands 🛠️

* **npm init:** បង្កើត \`package.json\` File សម្រាប់ Project។
* **npm install:** ដំឡើង Packages ឬ Dependencies។
* **npm run:** ប្រតិបត្តិ Scripts ដែលកំណត់នៅក្នុង \`package.json\`។
* **npm uninstall:** លុប Packages ចេញពី Project។

---

## 3. \`package.json\` File 📄

* **និយមន័យ:** \`package.json\` ជា File ដែលផ្ទុកព័ត៌មានអំពី Project និង Dependencies។
* **ផ្នែកសំខាន់ៗ:**
  * \`name\`: ឈ្មោះ Project។
  * \`version\`: កំណែ Project។
  * \`dependencies\`: Third-party Modules ដែល Project ប្រើ។
  * \`scripts\`: Commands សម្រាប់ Automation។

---

## 4. Dependencies និង DevDependencies ⚙️

* **Dependencies:** Modules ដែលត្រូវការសម្រាប់ Production (ឧ. \`express\`)។
* **DevDependencies:** Modules ដែលប្រើសម្រាប់ Development ឬ Testing (ឧ. \`nodemon\`)។
* **ការដំឡើង:**
  * Dependencies: \`npm install <package>\`
  * DevDependencies: \`npm install <package> --save-dev\`

---

## 5. NPM Registry និង Third-party Modules 🌐

* **NPM Registry:** ជាឃ្លាំងសម្រាប់ Packages ដែលអាចស្វែងរកបាននៅ npmjs.com។
* **ឧទាហរណ៍ Third-party Modules:**
  * \`express\`: បង្កើត Web Servers។
  * \`lodash\`: ផ្តល់ Utility Functions។
  * \`nodemon\`: Auto-restart Server ក្នុង Development។

---
> **គន្លឹះ:** ប្រើ \`nodemon\` ជា DevDependency ដើម្បី Auto-restart Server នៅពេល Code ផ្លាស់ប្តូរ។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Project ជាមួយ \`npm init\`

បង្កើត Folder ឈ្មោះ \`my-project\`:

\`\`\`bash
mkdir my-project
cd my-project
npm init -y
\`\`\`

**លទ្ធផល**: \`package.json\` File ត្រូវបានបង្កើត។

# ឧទាហរណ៍ ២: ដំឡើង \`express\`

បង្កើត File ឈ្មោះ \`server.js\`:

\`\`\`javascript
// server.js
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello, NPM!'));
app.listen(3000, () => console.log('Server running on port 3000'));
\`\`\`

ដំឡើង \`express\`:

\`\`\`bash
npm install express
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**: Server ដំណើរការនៅ \`http://localhost:3000\`។

# ឧទាហរណ៍ ៣: ប្រើ \`nodemon\` ជា DevDependency

ដំឡើង \`nodemon\`:

\`\`\`bash
npm install nodemon --save-dev
\`\`\`

បន្ថែម Script ទៅ \`package.json\`:

\`\`\`json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
\`\`\`

ដំណើរការ Server ជាមួយ \`nodemon\`:

\`\`\`bash
npm run dev
\`\`\`

**លទ្ធផល**: Server នឹង Auto-restart នៅពេល Code ផ្លាស់ប្តូរ។
`
  ],
  quiz: [
    {
      question: 'តើ NPM ជាអ្វី?',
      options: [
        'Programming Language',
        'Package Manager សម្រាប់ Node.js',
        'Web Server Framework',
        'Database Manager'
      ],
      correct: 1,
      explanation: 'NPM ជា Package Manager សម្រាប់ Node.js ដើម្បីគ្រប់គ្រង Modules និង Dependencies។'
    },
    {
      question: 'តើ Command ណាមួយប្រើសម្រាប់បង្កើត `package.json`?',
      options: ['npm install', 'npm init', 'npm run', 'npm uninstall'],
      correct: 1,
      explanation: '`npm init` ប្រើសម្រាប់បង្កើត `package.json` File សម្រាប់ Project។'
    },
    {
      question: 'តើ `package.json` ផ្ទុកព័ត៌មានអ្វីខ្លះ?',
      options: [
        'Source Code របស់ Project',
        'ព័ត៌មាន Project និង Dependencies',
        'Configuration សម្រាប់ Database',
        'HTML Templates'
      ],
      correct: 1,
      explanation: '`package.json` ផ្ទុកព័ត៌មាន Project ដូចជា Name, Version, Dependencies, និង Scripts។'
    },
    {
      question: 'តើ Command ណាមួយប្រើសម្រាប់ដំឡើង Package?',
      options: ['npm init', 'npm install', 'npm run', 'npm start'],
      correct: 1,
      explanation: '`npm install` ប្រើសម្រាប់ដំឡើង Packages ឬ Dependencies ទៅក្នុង Project។'
    },
    {
      question: 'តើ DevDependencies ប្រើសម្រាប់អ្វី?',
      options: [
        'Production Environment',
        'Development និង Testing',
        'Database Management',
        'File Operations'
      ],
      correct: 1,
      explanation: 'DevDependencies ប្រើសម្រាប់ Development និង Testing ដូចជា `nodemon`។'
    },
    {
      question: 'តើ Command ណាមួយប្រើសម្រាប់ប្រតិបត្តិ Script នៅក្នុង `package.json`?',
      options: ['npm init', 'npm install', 'npm run', 'npm uninstall'],
      correct: 2,
      explanation: '`npm run` ប្រើសម្រាប់ប្រតិបត្តិ Scripts ដែលកំណត់នៅក្នុង `package.json`។'
    },
    {
      question: 'តើ Third-party Module `express` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង File Paths',
        'បង្កើត Web Servers',
        'Auto-restart Server',
        'Utility Functions'
      ],
      correct: 1,
      explanation: '`express` ជា Third-party Module សម្រាប់បង្កើត Web Servers និង API។'
    },
    {
      question: 'តើ `nodemon` មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បង្កើត Database',
        'Auto-restart Server ក្នុង Development',
        'គ្រប់គ្រង File Operations',
        'បង្ហាញ Output'
      ],
      correct: 1,
      explanation: '`nodemon` Auto-restart Server នៅពេល Code ផ្លាស់ប្តូរ សម្រាប់ Development។'
    },
    {
      question: 'តើ Command ណាមួយប្រើសម្រាប់ដំឡើង DevDependency?',
      options: [
        'npm install <package>',
        'npm install <package> --save-dev',
        'npm init <package>',
        'npm run <package>'
      ],
      correct: 1,
      explanation: '`npm install <package> --save-dev` ប្រើសម្រាប់ដំឡើង DevDependency។'
    },
    {
      question: 'តើ NPM Registry ជាអ្វី?',
      options: [
        'Tool សម្រាប់បង្កើត Servers',
        'ឃ្លាំងសម្រាប់ Packages',
        'File System Module',
        'Command-line Tool'
      ],
      correct: 1,
      explanation: 'NPM Registry ជាឃ្លាំងសម្រាប់ Packages ដែលអាចស្វែងរកបាននៅ npmjs.com។'
    },
    {
      question: 'តើ Third-party Module `lodash` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Web Servers',
        'ផ្តល់ Utility Functions',
        'Auto-restart Server',
        'គ្រប់គ្រង File Paths'
      ],
      correct: 1,
      explanation: '`lodash` ផ្តល់ Utility Functions សម្រាប់ធ្វើការជាមួយ Arrays, Objects, និង Strings។'
    },
    {
      question: 'តើ Command ណាមួយប្រើសម្រាប់លុប Package?',
      options: ['npm init', 'npm install', 'npm uninstall', 'npm run'],
      correct: 2,
      explanation: '`npm uninstall` ប្រើសម្រាប់លុប Packages ចេញពី Project។'
    },
    {
      question: 'តើផ្នែក `scripts` នៅក្នុង `package.json` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង File Operations',
        'ប្រតិបត្តិ Commands សម្រាប់ Automation',
        'ផ្ទុក Source Code',
        'គ្រប់គ្រង Database'
      ],
      correct: 1,
      explanation: 'ផ្នែក `scripts` នៅក្នុង `package.json` ប្រើសម្រាប់ប្រតិបត្តិ Commands សម្រាប់ Automation�।'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: ប្រើ NPM ដើម្បីគ្រប់គ្រង Project

គោលបំណង: អនុវត្តការប្រើ NPM ដើម្បីបង្កើត Project និងដំឡើង Third-party Modules។

1. **បង្កើត Project**:
   * បង្កើត Folder ឈ្មោះ \`npm-project\`:
     \`\`\`bash
     mkdir npm-project
     cd npm-project
     npm init -y
     \`\`\`

2. **ដំឡើង \`express\`**:
   * ដំឡើង \`express\`:
     \`\`\`bash
     npm install express
     \`\`\`
   * បង្កើត File \`server.js\`:
     \`\`\`javascript
     // server.js
     const express = require('express');
     const app = express();
     app.get('/', (req, res) => res.send('Hello, NPM!'));
     app.listen(3000, () => console.log('Server running on port 3000'));
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node server.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000\`។

3. **ដំឡើង \`nodemon\` ជា DevDependency**:
   * ដំឡើង \`nodemon\`:
     \`\`\`bash
     npm install nodemon --save-dev
     \`\`\`
   * បន្ថែម Script ទៅ \`package.json\`:
     \`\`\`json
     {
       "scripts": {
         "start": "node server.js",
         "dev": "nodemon server.js"
       }
     }
     \`\`\`
   * ដំណើរការ Server ជាមួយ \`nodemon\`:
     \`\`\`bash
     npm run dev
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ Server នឹង Auto-restart នៅពេល Code ផ្លាស់ប្តូរ។

4. **ប្រើ \`lodash\`**:
   * ដំឡើង \`lodash\`:
     \`\`\`bash
     npm install lodash
     \`\`\`
   * បង្កើត File \`utils.js\`:
     \`\`\`javascript
     // utils.js
     const _ = require('lodash');
     const numbers = [1, 2, 3, 4, 5];
     console.log(_.sum(numbers));
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node utils.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ 15។

5. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ \`server.js\`, \`utils.js\`, និង Auto-restart របស់ \`nodemon\`។
`,
    solution: `
# ដំណោះស្រាយ៖ ប្រើ NPM ដើម្បីគ្រប់គ្រង Project

## ជំហានទី ១: បង្កើត Project
* បង្កើត Folder និង \`package.json\`:
  \`\`\`bash
  mkdir npm-project
  cd npm-project
  npm init -y
  \`\`\`
* លទ្ធផល: \`package.json\` File ត្រូវបានបង្កើត។

## ជំហានទី ២: ដំឡើង \`express\`
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const app = express();
  app.get('/', (req, res) => res.send('Hello, NPM!'));
  app.listen(3000, () => console.log('Server running on port 3000'));
  \`\`\`
* ដំឡើង:
  \`\`\`bash
  npm install express
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node server.js
  # Output: Server running on port 3000
  \`\`\`
  នៅ \`http://localhost:3000\`: "Hello, NPM!"

## ជំហានទី ៣: ដំឡើង \`nodemon\`
* ដំឡើង:
  \`\`\`bash
  npm install nodemon --save-dev
  \`\`\`
* **package.json**:
  \`\`\`json
  {
    "scripts": {
      "start": "node server.js",
      "dev": "nodemon server.js"
    }
  }
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  npm run dev
  # Output: Server running on port 3000 (Auto-restarts on code changes)
  \`\`\`

## ជំហានទី ៤: ប្រើ \`lodash\`
* **utils.js**:
  \`\`\`javascript
  const _ = require('lodash');
  const numbers = [1, 2, 3, 4, 5];
  console.log(_.sum(numbers));
  \`\`\`
* ដំឡើង:
  \`\`\`bash
  npm install lodash
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node utils.js
  # Output: 15
  \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **server.js**: "Hello, NPM!" នៅ \`http://localhost:3000\`
* **nodemon**: Auto-restart Server នៅពេល Code ផ្លាស់ប្តូរ
* **utils.js**: 15
`
  }
};

export default NodeJSLesson2_2Content;