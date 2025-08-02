import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson2_5Content: LessonContent = {
  title: 'Serving Static Files',
  objectives: [
    'យល់ដឹងពី Static Files និងសារៈសំខាន់របស់វា',
    'រៀនប្រើ `express.static()` Middleware',
    'ស្វែងយល់ពីការបម្រើ CSS, JavaScript, និង Images',
    'អនុវត្តការបង្កើត Web Page សាមញ្ញជាមួយ Static Files',
  ],
  content: `
# Serving Static Files 📁

---

**Static Files** គឺជា Files ដែលមិនផ្លាស់ប្តូរ Dynamically (ឧ. CSS, JavaScript, Images)។ Express.js ប្រើ \`express.static()\` Middleware ដើម្បីបម្រើ Files ទាំងនេះ។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនរបៀបបម្រើ Static Files និងបង្កើត Web Page សាមញ្ញ។

---

## 1. អ្វីទៅជា Static Files?

Static Files គឺជា Resources ដែល Server ផ្ញើទៅ Client ដោយផ្ទាល់ ដូចជា:
- **CSS**: សម្រាប់ Styling Web Pages.
- **JavaScript**: សម្រាប់ Client-side Logic.
- **Images**: PNG, JPG, SVG.
- **HTML**: Static HTML Pages.

**ឧទាហរណ៍:** File \`styles.css\` ឬ \`logo.png\` នៅក្នុង Folder \`public\`។

---

## 2. ការប្រើ \`express.static()\`

**\`express.static()\`** ជា Built-in Middleware ដែលបម្រើ Files ពី Folder ជាក់លាក់។

**ឧទាហរណ៍:**
\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h1>សួស្តី!</h1>');
});

app.listen(3000);
\`\`\`

- \`express.static('public')\`: បម្រើ Files ពី Folder \`public\`.
- **រចនាសម្ព័ន្ធ Folder:**
  \`\`\`
  project/
  ├── public/
  │   ├── styles.css
  │   ├── script.js
  │   ├── logo.png
  ├── app.js
  \`\`\`
- **លទ្ធផល:**
  - \`/styles.css\` → Serve \`public/styles.css\`
  - \`/logo.png\` → Serve \`public/logo.png\`

---

## 3. ការបម្រើ Web Page ជាមួយ Static Files

អ្នកអាចបង្កើត HTML File ដែល Link ទៅ CSS និង JavaScript នៅក្នុង Folder \`public\`។

**ឧទាហរណ៍:**
\`\`\`javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000);
\`\`\`

**\`public/index.html\`:**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Express Static</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <h1>សួស្តីពី Express!</h1>
  <img src="/logo.png" alt="Logo">
  <script src="/script.js"></script>
</body>
</html>
\`\`\`

**\`public/styles.css\`:**
\`\`\`css
body {
  font-family: Arial, sans-serif;
  text-align: center;
}
h1 {
  color: blue;
}
\`\`\`

**\`public/script.js\`:**
\`\`\`javascript
console.log('Script Loaded!');
\`\`\`

- \`res.sendFile()\`: ផ្ញើ HTML File។
- \`path.join()\`: បង្កើត File Path ដែលឆបគ្នានឹង OS។
- **លទ្ធផល:** \`/\` បង្ហាញ Styled Web Page ជាមួយ Image និង JavaScript។

---

## 4. ការប្រើ Multiple Static Folders

អ្នកអាចបម្រើ Files ពី Multiple Folders។

**ឧទាហរណ៍:**
\`\`\`javascript
app.use('/static', express.static('public'));
app.use('/assets', express.static('assets'));
\`\`\`

- \`/static/styles.css\` → Serve \`public/styles.css\`
- \`/assets/logo.png\` → Serve \`assets/logo.png\`

---

## 5. គន្លឹះសម្រាប់ Serving Static Files

- **ប្រើ Folder \`public\`:** ជា Convention សម្រាប់ Static Files។
- **ប្រើ \`path\` Module:** ដើម្បីគ្រប់គ្រង File Paths។
- **Cache Static Files:** ប្រើ Middleware ដូចជា \`serve-favicon\` សម្រាប់ Performance។
- **អាន Documentation:** [expressjs.com/en/starter/static-files](https://expressjs.com/en/starter/static-files)។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ បម្រើ Static Files</h3>
<p>បង្កើត Server ដែលបម្រើ CSS និង Image។</p>
<pre><code class="language-javascript">
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(\`
    <h1>សួស្តី!</h1>
    <link rel="stylesheet" href="/styles.css">
    <img src="/logo.png">
  \`);
});

app.listen(3000);
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ បម្រើ HTML File</h3>
<p>បម្រើ HTML File ជាមួយ Static Resources។</p>
<pre><code class="language-javascript">
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(3000);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `express.static()` ប្រើសម្រាប់អ្វី?',
      options: [
        'Parse JSON',
        'Serve Static Files',
        'Log Requests',
        'Redirect URL'
      ],
      correct: 1,
      explanation: '`express.static()` Serve Static Files (CSS, JS, Images)។'
    },
    {
      question: 'តើ Static Files គឺជាអ្វី?',
      options: [
        'Dynamic APIs',
        'Files ដែលមិនផ្លាស់ប្តូរ (CSS, JS, Images)',
        'Database Queries',
        'Server Logic'
      ],
      correct: 1,
      explanation: 'Static Files ជា Files ដែលមិនផ្លាស់ប្តូរ (CSS, JS, Images)។'
    },
    {
      question: 'តើ Folder ណាមួយជា Convention សម្រាប់ Static Files?',
      options: [
        'src',
        'public',
        'routes',
        'views'
      ],
      correct: 1,
      explanation: 'Folder `public` ជា Convention សម្រាប់ Static Files។'
    },
    {
      question: 'តើ `res.sendFile()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ញើ JSON',
        'ផ្ញើ File (ឧ. HTML)',
        'Redirect URL',
        'Parse Body'
      ],
      correct: 1,
      explanation: '`res.sendFile()` ផ្ញើ File (ឧ. HTML)។'
    },
    {
      question: 'តើ Module ណាមួយជួយគ្រប់គ្រង File Paths?',
      options: [
        'express',
        'path',
        'morgan',
        'fs'
      ],
      correct: 1,
      explanation: 'Module `path` ជួយគ្រប់គ្រង File Paths។'
    },
    {
      question: 'តើ `/static/styles.css` នឹង Serve File ពី Folder ណា បើប្រើ `app.use(\'/static\', express.static(\'public\'))`?',
      options: [
        'static',
        'public',
        'assets',
        'styles'
      ],
      correct: 1,
      explanation: 'Serve File ពី `public/styles.css`។'
    },
    {
      question: 'តើ `express.static()` ជា Middleware ប្រភេទណា?',
      options: [
        'Third-party',
        'Custom',
        'Built-in',
        'Route-Level'
      ],
      correct: 2,
      explanation: '`express.static()` ជា Built-in Middleware។'
    },
    {
      question: 'តើអ្នកអាចបម្រើ Files ពី Multiple Folders បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែ HTML',
        'បាន ប៉ុន្តែតែ CSS'
      ],
      correct: 0,
      explanation: 'អ្នកអាចបម្រើ Files ពី Multiple Folders ដោយប្រើ `express.static()`។'
    },
    {
      question: 'តើ `path.join()` មានតួនាទីអ្វី?',
      options: [
        'Parse JSON',
        'បង្កើត File Path',
        'Serve Static Files',
        'Log Requests'
      ],
      correct: 1,
      explanation: '`path.join()` បង្កើត File Path ដែលឆបគ្នានឹង OS។'
    },
    {
      question: 'តើ Static Files ត្រូវការ Dynamic Logic ដែរឬទេ?',
      options: [
        'តម្រូវការ',
        'មិនតម្រូវការ',
        'តម្រូវការ ប៉ុន្តែតែនៅ Production',
        'តម្រូវការ ប៉ុន្តែតែនៅ Frontend'
      ],
      correct: 1,
      explanation: 'Static Files មិនតម្រូវការ Dynamic Logic។'
    },
    {
      question: 'តើ HTML File អាច Link ទៅ Static CSS និង JS បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែ CSS',
        'បាន ប៉ុន្តែតែ JS'
      ],
      correct: 0,
      explanation: 'HTML File អាច Link ទៅ Static CSS និង JS។'
    },
  ],
  lab: {
    task: `
បង្កើត Express Application ដែលបម្រើ Static Files និង Web Page។

**តម្រូវការ:**

1. **បង្កើត Project:**
   - បង្កើត Folder: \`express-static\`។
   - ប្រើ \`npm init -y\` ដើម្បីបង្កើត \`package.json\`។
   - ដំឡើង Express.js ដោយ \`npm install express\`។

2. **បង្កើត Static Files:**
   - បង្កើត Folder: \`public\`។
   - បង្កើត \`public/index.html\`:
     \`\`\`html
     <!DOCTYPE html>
     <html>
     <head>
       <title>Express Static</title>
       <link rel="stylesheet" href="/styles.css">
     </head>
     <body>
       <h1>សួស្តីពី Express Static!</h1>
       <img src="/logo.png" alt="Logo">
       <script src="/script.js"></script>
     </body>
     </html>
     \`\`\`
   - បង្កើត \`public/styles.css\`: Style \`h1\` ជា \`color: green\` និង \`body\` ជា \`text-align: center\`.
   - បង្កើត \`public/script.js\`: Log "Page Loaded!" ទៅ Console.
   - បន្ផែម \`public/logo.png\` (ប្រើ Image ណាមួយ ឬ Placeholder).

3. **បង្កើត Server:**
   - បង្កើត File: \`app.js\`។
   - បន្ផែម \`express.static('public')\`។
   - Route \`/\` (GET): Serve \`public/index.html\` ដោយប្រើ \`res.sendFile()\`។
   - Route \`/about\` (GET): Serve \`public/about.html\` (បង្កើត HTML សាមញ្ញដែល Link ទៅ \`/styles.css\`).

4. **Test Application:**
   - Run \`node app.js\`។
   - បើក Browser:
     - \`http://localhost:3000\`
     - \`http://localhost:3000/about\`
     - \`http://localhost:3000/styles.css\`
     - \`http://localhost:3000/logo.png\`
   - ពិនិត្យ Console សម្រាប់ "Page Loaded!"។

**ការណែនាំ:** ប្រើ \`nodemon\` ដើម្បី Auto-restart Server។
    `,
    solution: `
## app.js
\`\`\`text
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`

## public/index.html
\`\`\`text
<!DOCTYPE html>
<html>
<head>
  <title>Express Static</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <h1>សួស្តីពី Express Static!</h1>
  <img src="/logo.png" alt="Logo">
  <script src="/script.js"></script>
</body>
</html>
\`\`\`

## public/about.html
\`\`\`text
<!DOCTYPE html>
<html>
<head>
  <title>About</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <h1>អំពីយើង</h1>
</body>
</html>
\`\`\`

## public/styles.css
\`\`\`text
body {
  text-align: center;
}
h1 {
  color: green;
}
\`\`\`

## public/script.js
\`\`\`text
console.log('Page Loaded!');
\`\`\`
`
  }
};

export default ExpressLesson2_5Content;