import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson6_6Content: LessonContent = {
  title: 'Deployment',
  objectives: [
    'យល់ដឹងអំពីការដាក់ឱ្យដំណើរការ Node.js Applications',
    'ស្វែងយល់ពី Heroku សម្រាប់ Cloud Deployment',
    'រៀនប្រើ Environment Variables នៅក្នុង Deployment',
    'អនុវត្តការដាក់ឱ្យដំណើរការ Express.js Application',
    'គ្រប់គ្រង Dependencies និង Production Setup'
  ],
  content: `
# Deployment 🚀

---

## 1. តើ Deployment ជាអ្វី? 🤔

* **និយមន័យ:** Deployment ជាដំណើរការដាក់ឱ្យ Application ដំណើរការនៅ Production Environment។
* **ឧទាហរណ៍:** ដាក់ឱ្យ Express.js App ដំណើរការនៅ Heroku។
* **អត្ឥប្រយោជន៍:** ធ្វើឱ្យ Application អាចចូលប្រើបានជាសាធារណៈ។

---

## 2. Heroku Platform 🛠️

* **Heroku:** Cloud Platform សម្រាប់ Deploying Node.js Applications។
* **Installation:** ដំឡើង Heroku CLI (\`heroku\` command)។
* **Features:** Easy Deployment, Environment Variables, Scaling។

---

## 3. Environment Variables នៅក្នុង Production 🌟

* **Setup:** ប្រើ Heroku Config Vars ដើម្បីរក្សាទុក Variables ដូចជា \`PORT\`។
* **Syntax:**
  \`\`\`bash
  heroku config:set KEY=VALUE
  \`\`\`

---

## 4. Deployment ជាមួយ Express.js ⚙️

* **Steps:**
  1. បង្កើត \`Procfile\` ដើម្បីកំណត់ Command សម្រាប់ Start Server។
  2. កំណត់ \`start\` Script នៅក្នុង \`package.json\`។
  3. Deploy ទៅ Heroku ដោយប្រើ Git។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📂

* **Simple Deployment:** Deploy Express.js App ទៅ Heroku។
* **Environment Variables:** ប្រើ Config Vars សម្រាប់ Port។

---
> **គន្លឹះ:** តែងតែតេស្ត Application នៅ Local Environment មុននឹង Deploy និងប្រើ \`.gitignore\` សម្រាប់ Sensitive Files។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បង្កើត Express App សម្រាប់ Deployment

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

បង្កើត File \`Procfile\`:

\`\`\`
web: node server.js
\`\`\`

បន្ថែម Script នៅក្នុង \`package.json\`:
\`\`\`json
"scripts": {
  "start": "node server.js"
}
\`\`\`

# ឧទាហរណ៍ ២: Deploy ទៅ Heroku

បង្កើត Folder \`deploy-app\` និង Initialize npm:
\`\`\`bash
mkdir deploy-app
cd deploy-app
npm init -y
npm install express
\`\`\`

បន្ថែម Files ពីឧទាហរណ៍ ១។

បង្កើត Git Repository:
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
\`\`\`

Login ទៅ Heroku:
\`\`\`bash
heroku login
\`\`\`

បង្កើត Heroku App:
\`\`\`bash
heroku create my-app-name
\`\`\`

Deploy ទៅ Heroku:
\`\`\`bash
git push heroku main
\`\`\`

**លទ្ធផល**:
* ៖ \`https://my-app-name.herokuapp.com/\` → JSON: \`{ message: "Hello World" }\`

# ឧទាហរណ៍ ៣: Environment Variables នៅ Heroku

កំណត់ Environment Variable:
\`\`\`bash
heroku config:set APP_NAME=MyApp
\`\`\`

បន្ថែមនៅក្នុង \`server.js\`:

\`\`\`javascript
app.get('/config', (req, res) => {
  res.json({ appName: process.env.APP_NAME });
});
\`\`\`

Deploy ឡើងវិញ:
\`\`\`bash
git add .
git commit -m "Add config route"
git push heroku main
\`\`\`

**លទ្ធផល**:
* ៖ \`https://my-app-name.herokuapp.com/config\` → JSON: \`{ appName: "MyApp" }\`
`
  ],
  quiz: [
    {
      question: 'តើ Deployment ជាអ្វី?',
      options: [
        'ការបង្កើត Database',
        'ការដាក់ឱ្យ Application ដំណើរការនៅ Production',
        'ការបម្រើ Static Files',
        'ការផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់'
      ],
      correct: 1,
      explanation: 'Deployment ជាការដាក់ឱ្យ Application ដំណើរការនៅ Production Environment។'
    },
    {
      question: 'តើ Heroku ជាអ្វី?',
      options: [
        'Database',
        'Cloud Platform',
        'Testing Framework',
        'Logging Library'
      ],
      correct: 1,
      explanation: 'Heroku ជា Cloud Platform សម្រាប់ Deploying Applications។'
    },
    {
      question: 'តើ `Procfile` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Command សម្រាប់ Start Server',
        'រក្សាទុក Logs',
        'ភ្ជាប់ Database',
        'បង្កើត Routes'
      ],
      correct: 0,
      explanation: '`Procfile` កំណត់ Command សម្រាប់ Start Server នៅ Heroku។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បី Deploy ទៅ Heroku?',
      options: [
        'git push origin main',
        'git push heroku main',
        'npm start',
        'heroku start'
      ],
      correct: 1,
      explanation: '`git push heroku main` ប្រើសម្រាប់ Deploy ទៅ Heroku។'
    },
    {
      question: 'តើ Environment Variables នៅ Heroku កំណត់ដោយ Command ណា?',
      options: [
        'heroku config:set',
        'heroku env:set',
        'heroku variable:set',
        'heroku set:config'
      ],
      correct: 0,
      explanation: '`heroku config:set` ប្រើសម្រាប់កំណត់ Environment Variables។'
    },
    {
      question: 'តើ `package.json` Script ណាដែលតម្រូវសម្រាប់ Heroku?',
      options: [
        'test',
        'start',
        'build',
        'deploy'
      ],
      correct: 1,
      explanation: '`start` Script តម្រូវសម្រាប់ Heroku ដើម្បី Start Server។'
    },
    {
      question: 'តើ `.gitignore` ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុក Environment Variables',
        'ការពារ Files ពី Git',
        'បង្កើត Routes',
        'Log Errors'
      ],
      correct: 1,
      explanation: '`.gitignore` ការពារ Files ពីការបញ្ចូលទៅ Git។'
    },
    {
      question: 'តើ Port នៅ Heroku ត្រូវបានកំណត់ដោយអ្វី?',
      options: [
        'process.env.PORT',
        'process.env.HOST',
        'process.env.URL',
        'process.env.SERVER'
      ],
      correct: 0,
      explanation: '`process.env.PORT` កំណត់ Port នៅ Heroku។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Deployment?',
      options: [
        'បង្កើត Dynamic HTML',
        'ធ្វើឱ្យ Application អាចចូលប្រើបានជាសាធារណៈ',
        'ភ្ជាប់ Database',
        'បម្រើ Static Files'
      ],
      correct: 1,
      explanation: 'Deployment ធ្វើឱ្យ Application អាចចូលប្រើបានជាសាធារណៈ។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីបង្កើត Heroku App?',
      options: [
        'heroku create',
        'heroku init',
        'heroku app',
        'heroku new'
      ],
      correct: 0,
      explanation: '`heroku create` ប្រើសម្រាប់បង្កើត Heroku App។'
    },
    {
      question: 'តើ Sensitive Data គួរត្រូវបានរក្សាទុកនៅទីណា?',
      options: [
        'Source Code',
        'Heroku Config Vars',
        'Database Schema',
        'Static Files'
      ],
      correct: 1,
      explanation: 'Sensitive Data គួរត្រូវបានរក្សាទុកនៅ Heroku Config Vars។'
    },
    {
      question: 'តើ Heroku CLI តម្រូវឱ្យមានអ្វី?',
      options: [
        'MongoDB Server',
        'Git Repository',
        'Jest Framework',
        'Socket.io'
      ],
      correct: 1,
      explanation: 'Heroku CLI តម្រូវឱ្យមាន Git Repository សម្រាប់ Deployment។'
    },
    {
      question: 'តើអ្វីជាជំហានដំបូងមុននឹង Deploy?',
      options: [
        'តេស្ត Application នៅ Local Environment',
        'បង្កើត Database',
        'Log Errors',
        'Validate Tokens'
      ],
      correct: 0,
      explanation: 'ត្រូវតេស្ត Application នៅ Local Environment មុននឹង Deploy។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Deployment

គោលបំណង: អនុវត្តការដាក់ឱ្យដំណើរការ Express.js Application ទៅ Heroku។

1. **បង្កើត Express App**:
   * បង្កើត Folder \`deploy-app\` និង Initialize npm:
     \`\`\`bash
     mkdir deploy-app
     cd deploy-app
     npm init -y
     npm install express
     \`\`\`
   * បង្កើត File \`server.js\`:
     \`\`\`javascript
     const express = require('express');
     const app = express();
     const port = process.env.PORT || 3000;

     app.get('/', (req, res) => {
       res.json({ message: 'Hello World' });
     });

     app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
     \`\`\`
   * បង្កើត File \`Procfile\`:
     \`\`\`
     web: node server.js
     \`\`\`
   * បន្ថែម Script នៅក្នុង \`package.json\`:
     \`\`\`json
     "scripts": {
       "start": "node server.js"
     }
     \`\`\`

2. **Deploy ទៅ Heroku**:
   * បង្កើត Git Repository:
     \`\`\`bash
     git init
     echo "node_modules/" > .gitignore
     git add .
     git commit -m "Initial commit"
     \`\`\`
   * Login ទៅ Heroku:
     \`\`\`bash
     heroku login
     \`\`\`
   * បង្កើត Heroku App:
     \`\`\`bash
     heroku create my-app-name
     \`\`\`
   * Deploy:
     \`\`\`bash
     git push heroku main
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល:
     * ៖ \`https://my-app-name.herokuapp.com/\`

3. **បន្ថែម Environment Variable**:
   * កំណត់ Variable:
     \`\`\`bash
     heroku config:set APP_NAME=MyApp
     \`\`\`
   * បន្ថែម Route នៅក្នុង \`server.js\`:
     \`\`\`javascript
     app.get('/config', (req, res) => {
       res.json({ appName: process.env.APP_NAME });
     });
     \`\`\`
   * Deploy ឡើងវិញ:
     \`\`\`bash
     git add .
     git commit -m "Add config route"
     git push heroku main
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល:
     * ៖ \`https://my-app-name.herokuapp.com/config\`

4. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់ URL នៃ Deployed App និង Config Route។
`,
    solution: `
# ដំណោះស្រាយ៖ Deployment

## ជំហានទី ១: Express App និង Deployment
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const app = express();
  const port = process.env.PORT || 3000;

  app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
  });

  app.get('/config', (req, res) => {
    res.json({ appName: process.env.APP_NAME });
  });

  app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
  \`\`\`
* **Procfile**:
  \`\`\`
  web: node server.js
  \`\`\`
* **package.json**:
  \`\`\`json
  {
    "name": "deploy-app",
    "version": "1.0.0",
    "scripts": {
      "start": "node server.js"
    },
    "dependencies": {
      "express": "^4.17.1"
    }
  }
  \`\`\`
* **.gitignore**:
  \`\`\`
  node_modules/
  \`\`\`
* Deployment Commands:
  \`\`\`bash
  git init
  git add .
  git commit -m "Initial commit"
  heroku login
  heroku create my-app-name
  git push heroku main
  heroku config:set APP_NAME=MyApp
  \`\`\`
* លទ្ធផល:
  * ៖ \`https://my-app-name.herokuapp.com/\` → JSON: \`{ message: "Hello World" }\`
  * ៖ \`https://my-app-name.herokuapp.com/config\` → JSON: \`{ appName: "MyApp" }\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* Deployment: Express App ដំណើរការនៅ Heroku។
* Environment Variable: Config Var \`APP_NAME\` បង្ហាញនៅ \`/config\` Route។
`
  }
};

export default NodeJSLesson6_6Content;