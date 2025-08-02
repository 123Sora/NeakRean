import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson3_5Content: LessonContent = {
  title: 'Templating Engines',
  objectives: [
    'យល់ដឹងអំពី Templating Engines ក្នុង Express.js',
    'ស្វែងយល់ពីការប្រើ EJS ជា Templating Engine',
    'រៀនកំណត់ និងប្រើ Templates សម្រាប់ Dynamic HTML',
    'អនុវត្តការបញ្ជូន Data ទៅ Templates',
    'ស្គាល់ Templating Engines ផ្សេងទៀតដូចជា Pug'
  ],
  content: `
# Templating Engines 🌐

---

## 1. តើ Templating Engines ជាអ្វី? 🤔

* **និយមន័យ:** Templating Engines ជា Tools ដែលអនុញ្ញាតឱ្យបង្កើត Dynamic HTML ដោយបញ្ចូល Data ទៅក្នុង Templates។
* **ឧទាហរណ៍:** EJS, Pug, Handlebars។
* **អត្ថប្រយោជន៍:** ធ្វើឱ្យការបង្កើត Web Pages ដែលមាន Dynamic Content កាន់តែងាយស្រួល។

---

## 2. ការប្រើ EJS ជា Templating Engine 📝

* **EJS (Embedded JavaScript):** អនុញ្ញាតឱ្យបញ្ចូល JavaScript Code ក្នុង HTML។
* **ជំហាន:**
  1. ដំឡើង EJS: \`npm install ejs\`។
  2. កំណត់ EJS ជា View Engine: \`app.set('view engine', 'ejs')\`។
  3. បង្កើត Folder \`views\` សម្រាប់ Templates។
  4. ប្រើ \`res.render()\` ដើម្បី Render Templates ជាមួយ Data។

---

## 3. ការបញ្ជូន Data ទៅ Templates 🌟

* **Syntax នៅក្នុង EJS:**
  * \`<%= variable %>\`: បង្ហាញ Escaped Output (ការពារ XSS)។
  * \`<%- variable %>\`: បង្ហាញ Unescaped Output (ឧ. HTML)។
  * \`<% code %>\`: ប្រតិបត្តិ JavaScript Code។
* **ឧទាហរណ៍:** បញ្ជូន \`{ name: 'Sokha' }\` ទៅ Template ដើម្បីបង្ហាញ "Hello, Sokha!"។

---

## 4. Templating Engines ផ្សេងទៀត ⚙️

* **Pug:** Syntax សង្ខេប ប្រើ Indentation ជំនួស HTML Tags។
* **Handlebars:** ប្រើ Syntax ដូច \`{{variable}}\` សម្រាប់ Rendering។
* **អត្ថប្រយោជន៍:** ជ្រើសរើស Engine ដែលសមស្របនឹង Project។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📂

* **Dynamic Pages:** បង្កើត User Profile Page ដែលបង្ហាញ Data ពី \`req.params\`។
* **List Rendering:** បង្ហាញ List នៃ Items ដោយប្រើ Loop ក្នុង Template។

---
> **គន្លឹះ:** បង្កើត Folder \`views\` និងទុក Template Files ដូចជា \`index.ejs\` នៅទីនោះ។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ប្រើ EJS សម្រាប់ Dynamic HTML

បង្កើត Folder \`views\` និង File \`views/index.ejs\`:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1><%= message %></h1>
</body>
</html>
\`\`\`

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', message: 'Welcome to EJS!' });
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/\` → HTML Page ជាមួយ \`<h1>Welcome to EJS!</h1>\`

# ឧទាហរណ៍ ២: EJS ជាមួយ Loop

បង្កើត File \`views/users.ejs\`:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>User List</title>
</head>
<body>
  <h1>Users</h1>
  <ul>
    <% users.forEach(user => { %>
      <li><%= user.name %></li>
    <% }) %>
  </ul>
</body>
</html>
\`\`\`

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/users', (req, res) => {
  const users = [
    { name: 'Sokha' },
    { name: 'Rithy' }
  ];
  res.render('users', { users });
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/users\` → HTML Page ជាមួយ List:
  \`\`\`html
  <ul>
    <li>Sokha</li>
    <li>Rithy</li>
  </ul>
  \`\`\`

# ឧទាហរណ៍ ៣: EJS ជាមួយ Route Parameters

បង្កើត File \`views/profile.ejs\`:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>User Profile</title>
</head>
<body>
  <h1>Profile: <%= userId %></h1>
</body>
</html>
\`\`\`

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/profile/:id', (req, res) => {
  res.render('profile', { userId: req.params.id });
});

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/profile/123\` → HTML Page ជាមួយ \`<h1>Profile: 123</h1>\`
`
  ],
  quiz: [
    {
      question: 'តើ Templating Engine ជាអ្វី?',
      options: [
        'Tool សម្រាប់គ្រប់គ្រង Database',
        'Tool សម្រាប់បង្កើត Dynamic HTML',
        'Module សម្រាប់ Routing',
        'Middleware សម្រាប់ Parsing'
      ],
      correct: 1,
      explanation: 'Templating Engine បង្កើត Dynamic HTML ដោយបញ្ចូល Data ទៅក្នុង Templates។'
    },
    {
      question: 'តើ EJS មានន័យដូចម្តេច?',
      options: [
        'Embedded JavaScript',
        'Express JavaScript',
        'Extended JSON',
        'External JavaScript'
      ],
      correct: 0,
      explanation: 'EJS ជា Embedded JavaScript សម្រាប់បញ្ចូល JavaScript ក្នុង HTML។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីដំឡើង EJS?',
      options: [
        'npm install express',
        'npm install ejs',
        'npm init ejs',
        'npm start ejs'
      ],
      correct: 1,
      explanation: '`npm install ejs` ប្រើសម្រាប់ដំឡើង EJS។'
    },
    {
      question: 'តើ Method ណាដែលប្រើសម្រាប់ Render Template?',
      options: [
        'res.send()',
        'res.json()',
        'res.render()',
        'res.redirect()'
      ],
      correct: 2,
      explanation: '`res.render()` ប្រើសម្រាប់ Render Template ជាមួយ Data។'
    },
    {
      question: 'តើ Folder ណាដែលប្រើសម្រាប់ទុក EJS Templates?',
      options: ['public', 'views', 'routes', 'static'],
      correct: 1,
      explanation: 'Folder `views` ប្រើសម្រាប់ទុក EJS Templates។'
    },
    {
      question: 'តើ Syntax ណាក្នុង EJS បង្ហាញ Escaped Output?',
      options: ['<% code %>', '<%= variable %>', '<%- variable %>', '{% variable %}'],
      correct: 1,
      explanation: '`<%= variable %>` បង្ហាញ Escaped Output ការពារ XSS Attacks។'
    },
    {
      question: 'តើ Syntax ណាក្នុង EJS បង្ហាញ Unescaped Output?',
      options: ['<% code %>', '<%= variable %>', '<%- variable %>', '{% variable %}'],
      correct: 2,
      explanation: '`<%- variable %>` បង្ហាញ Unescaped Output ដូចជា HTML។'
    },
    {
      question: 'តើ `app.set(\'view engine\', \'ejs\')` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Static File Folder',
        'កំណត់ Templating Engine',
        'កំណត់ Route',
        'កំណត់ Middleware'
      ],
      correct: 1,
      explanation: '`app.set(\'view engine\', \'ejs\')` កំណត់ EJS ជា Templating Engine។'
    },
    {
      question: 'តើ Pug ខុសគ្នាពី EJS ដោយរបៀបណា?',
      options: [
        'ប្រើ JSON សម្រាប់ Rendering',
        'ប្រើ Indentation ជំនួស HTML Tags',
        'មិនគាំទ្រ Dynamic Data',
        'ជា Built-in Module'
      ],
      correct: 1,
      explanation: 'Pug ប្រើ Indentation ជំនួស HTML Tags សម្រាប់ Syntax សង្ខេប។'
    },
    {
      question: 'តើអ្វីជាឧទាហរណ៍នៃ Templating Engine?',
      options: ['express.json()', 'EJS', 'express.Router()', 'body-parser'],
      correct: 1,
      explanation: 'EJS ជា Templating Engine សម្រាប់ Dynamic HTML។'
    },
    {
      question: 'តើ EJS Loop ប្រើ Syntax អ្វី?',
      options: [
        '<% users.forEach(user => { %>',
        '<%= users.forEach(user => { %>',
        '<%- users.forEach(user => { %>',
        '{% users.forEach(user => { %}'
      ],
      correct: 0,
      explanation: '`<% users.forEach(user => { %>` ប្រើសម្រាប់ Loop ក្នុង EJS។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ Templating Engines?',
      options: [
        'គ្រប់គ្រង Database',
        'បង្កើត Dynamic HTML',
        'បញ្ជូន JSON Response',
        'គ្រប់គ្រង File System'
      ],
      correct: 1,
      explanation: 'Templating Engines ជួយបង្កើត Dynamic HTML ដោយបញ្ចូល Data។'
    },
    {
      question: 'តើ File Extension សម្រាប់ EJS Templates គឺជាអ្វី?',
      options: ['.html', '.ejs', '.js', '.json'],
      correct: 1,
      explanation: 'EJS Templates ប្រើ Extension `.ejs`។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Templating Engines

គោលបំណង: អនុវត្តការប្រើ EJS សម្រាប់ Dynamic HTML។

1. **បង្កើត Simple EJS Template**:
    * បង្កើត Folder \`template-app\` និង Initialize npm:
      \`\`\`bash
      mkdir template-app
      cd template-app
      npm init -y
      npm install express ejs
      \`\`\`
    * បង្កើត Folder \`views\` និង File \`views/index.ejs\`:
      \`\`\`html
      <!DOCTYPE html>
      <html>
      <head>
        <title><%= title %></title>
      </head>
      <body>
        <h1><%= message %></h1>
      </body>
      </html>
      \`\`\`
    * បង្កើត File \`server.js\`:
      \`\`\`javascript
      const express = require('express');
      const app = express();
      const port = 3000;
      app.set('view engine', 'ejs');
      app.get('/', (req, res) => {
        res.render('index', { title: 'Home Page', message: 'Welcome to EJS!' });
      });
      app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
      \`\`\`
    * ដំណើរការ File:
      \`\`\`bash
      node server.js
      \`\`\`
    * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000\`។

2. **បង្កើត Template ជាមួយ Loop**:
    * បង្កើត File \`views/users.ejs\`:
      \`\`\`html
      <!DOCTYPE html>
      <html>
      <head>
        <title>User List</title>
      </head>
      <body>
        <h1>Users</h1>
        <ul>
          <% users.forEach(user => { %>
            <li><%= user.name %></li>
          <% }) %>
        </ul>
      </body>
      </html>
      \`\`\`
    * បន្ថែម Route នៅក្នុង \`server.js\`:
      \`\`\`javascript
      app.get('/users', (req, res) => {
        const users = [
          { name: 'Sokha' },
          { name: 'Rithy' }
        ];
        res.render('users', { users });
      });
      \`\`\`
    * ដំណើរការ File ឡើងវិញ:
      \`\`\`bash
      node server.js
      \`\`\`
    * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/users\`។

3. **បង្កើត Template ជាមួយ Route Parameters**:
    * បង្កើត File \`views/profile.ejs\`:
      \`\`\`html
      <!DOCTYPE html>
      <html>
      <head>
        <title>User Profile</title>
      </head>
      <body>
        <h1>Profile: <%= userId %></h1>
      </body>
      </html>
      \`\`\`
    * បន្ថែម Route នៅក្នុង \`server.js\`:
      \`\`\`javascript
      app.get('/profile/:id', (req, res) => {
        res.render('profile', { userId: req.params.id });
      });
      \`\`\`
    * ដំណើរការ File ឡើងវិញ:
      \`\`\`bash
      node server.js
      \`\`\`
    * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/profile/123\`។

4. **ចែករំលែកលទ្ធផល**:
    * កត់សម្គាល់លទ្ធផលនៃ Simple Template, Loop, និង Route Parameters។
`,
    solution: `
# ដំណោះស្រាយ៖ Templating Engines

## ជំហានទី ១: Simple EJS Template
* **views/index.ejs**:
  \`\`\`html
  <!DOCTYPE html>
  <html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <h1><%= message %></h1>
  </body>
  </html>
  \`\`\`
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const app = express();
  const port = 3000;

  app.set('view engine', 'ejs');

  app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to EJS!' });
  });

  app.get('/users', (req, res) => {
    const users = [
      { name: 'Sokha' },
      { name: 'Rithy' }
    ];
    res.render('users', { users });
  });

  app.get('/profile/:id', (req, res) => {
    res.render('profile', { userId: req.params.id });
  });

  app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node server.js
  # Output: Server running at http://localhost:3000
  \`\`\`
  * \`http://localhost:3000/\` → HTML: \`<h1>Welcome to EJS!</h1>\`
  * \`http://localhost:3000/users\` → HTML:
    \`\`\`html
    <ul>
      <li>Sokha</li>
      <li>Rithy</li>
    </ul>
    \`\`\`
  * \`http://localhost:3000/profile/123\` → HTML: \`<h1>Profile: 123</h1>\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* Simple Template: \`index.ejs\` បង្ហាញ \`Welcome to EJS!\`។
* Loop: \`users.ejs\` បង្ហាញ List នៃ Users។
* Route Parameters: \`profile.ejs\` បង្ហាញ \`userId\` ពី \`req.params\`។
`
  }
};

export default NodeJSLesson3_5Content;