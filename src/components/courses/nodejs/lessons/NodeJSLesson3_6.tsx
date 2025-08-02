import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson3_6Content: LessonContent = {
  title: 'Static Files',
  objectives: [
    'យល់ដឹងអំពី Static Files ក្នុង Express.js',
    'ស្វែងយល់ពីការប្រើ `express.static()` Middleware',
    'រៀនបម្រើ Static Files ដូចជា HTML, CSS, និង Images',
    'អនុវត្តការបង្កើត Static File Server',
    'ស្គាល់ការគ្រប់គ្រង File Paths និង Folder Structure'
  ],
  content: `
# Static Files 📁

---

## 1. តើ Static Files ជាអ្វី? 🤔

* **និយមន័យ:** Static Files ជា Files ដែលមិនផ្លាស់ប្តូរ Content ដោយស្វ័យប្រវត្តិ ដូចជា HTML, CSS, JavaScript, Images, ឬ Fonts។
* **ឧទាហរណ៍:** \`index.html\`, \`style.css\`, \`logo.png\`។
* **អត្ថប្រយោជន៍:** ប្រើប្រាស់ Files ដោយផ្ទាល់ទៅ Browser ដោយមិនចាំបាច់ Render។

---

## 2. ការប្រើ \`express.static()\` Middleware 🛠️

* **និយមន័យ:** \`express.static()\` ជា Built-in Middleware សម្រាប់បម្រើ Static Files ពី Folder ជាក់លាក់។
* **ជំហាន:**
  1. បង្កើត Folder (ឧ. \`public\`) សម្រាប់ Static Files។
  2. ប្រើ \`app.use(express.static('folder'))\` ដើម្បីបម្រើ Files។
  3. ចូលប្រើ Files តាម URL (ឧ. \`/style.css\`)។

---

## 3. ការគ្រប់គ្រង File Paths 🌟

* **Default Path:** Files នៅក្នុង Folder ដែលកំណត់ដោយ \`express.static()\` អាចចូលប្រើបានតាម Relative Path។
* **ឧទាហរណ៍:** ប្រសិនបើ Folder ឈ្មោះ \`public\` មាន \`style.css\`, ចូលប្រើតាម \`/style.css\`។
* **Multiple Folders:** ប្រើ \`express.static()\` ច្រើនដងសម្រាប់ Folders ផ្សេងៗ។

---

## 4. ការបម្រើ Static Files ជាក់ស្តែង ⚙️

* **HTML Pages:** បម្រើ \`index.html\` ជា Homepage។
* **CSS and Images:** បម្រើ \`style.css\` និង \`logo.png\` សម្រាប់ Styling និង Visuals។
* **Client-side JavaScript:** បម្រើ \`script.js\` សម្រាប់ Interactive Features។

---

## 5. ការប្រើ Virtual Path Prefix 📂

* **និយមន័យ:** បន្ថែម Prefix (ឧ. \`/assets\`) ដើម្បីចូលប្រើ Static Files។
* **Syntax:**
  \`\`\`javascript
  app.use('/assets', express.static('public'));
  \`\`\`
* **ឧទាហរណ៍:** \`public/style.css\` ចូលប្រើបានតាម \`/assets/style.css\`។

---
> **គន្លឹះ:** បង្កើត Folder \`public\` សម្រាប់ Static Files និងប្រើ \`express.static()\` ដើម្បីបម្រើ។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: បម្រើ Static HTML File

បង្កើត Folder \`public\` និង File \`public/index.html\`:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Static Page</title>
</head>
<body>
  <h1>Welcome to Static Files!</h1>
</body>
</html>
\`\`\`

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/index.html\` → HTML: \`<h1>Welcome to Static Files!</h1>\`

# ឧទាហរណ៍ ២: បម្រើ CSS និង Images

បង្កើត File \`public/style.css\`:

\`\`\`css
body {
  background-color: lightblue;
}
h1 {
  color: navy;
}
\`\`\`

បង្កើត File \`public/logo.png\` (ដាក់ Image File នៅទីនេះ)។

កែសម្រួល File \`public/index.html\`:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Static Page</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <h1>Welcome to Static Files!</h1>
  <img src="/logo.png" alt="Logo">
</body>
</html>
\`\`\`

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/index.html\` → HTML Page ជាមួយ Styling និង Image។

# ឧទាហរណ៍ ៣: ប្រើ Virtual Path Prefix

បង្កើត File \`public/style.css\` (ដូចខាងលើ)។

បង្កើត File \`server.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.use('/assets', express.static('public'));

app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node server.js
\`\`\`

**លទ្ធផល**:
* \`http://localhost:3000/assets/style.css\` → CSS File ត្រូវបានបម្រើ។
`
  ],
  quiz: [
    {
      question: 'តើ Static Files ជាអ្វី?',
      options: [
        'Files ដែលផ្លាស់ប្តូរ Content ដោយស្វ័យប្រវត្តិ',
        'Files ដូចជា HTML, CSS, Images ដែលមិនផ្លាស់ប្តូរ',
        'Files សម្រាប់ Database',
        'Files សម្រាប់ Routing'
      ],
      correct: 1,
      explanation: 'Static Files ជា Files ដែលមិនផ្លាស់ប្តូរ Content ដូចជា HTML, CSS, និង Images។'
    },
    {
      question: 'តើ Middleware ណាដែលប្រើសម្រាប់បម្រើ Static Files?',
      options: [
        'express.json()',
        'express.static()',
        'express.Router()',
        'express.urlencoded()'
      ],
      correct: 1,
      explanation: '`express.static()` ជា Built-in Middleware សម្រាប់បម្រើ Static Files។'
    },
    {
      question: 'តើ Folder ណាដែលប្រើជាទូទៅសម្រាប់ Static Files?',
      options: ['views', 'routes', 'public', 'src'],
      correct: 2,
      explanation: 'Folder `public` ប្រើជាទូទៅសម្រាប់ទុក Static Files។'
    },
    {
      question: 'តើអ្វីជាឧទាហរណ៍នៃ Static File?',
      options: ['index.ejs', 'style.css', 'server.js', 'users.json'],
      correct: 1,
      explanation: '`style.css` ជា Static File ដែលបម្រើដោយ `express.static()`។'
    },
    {
      question: 'តើ `app.use(express.static(\'public\'))` អនុញ្ញាតឱ្យចូលប្រើ File ដោយរបៀបណា?',
      options: [
        'តាម Absolute Path',
        'តាម Relative Path ក្នុង `public`',
        'តាម Database Query',
        'តាម Route Parameters'
      ],
      correct: 1,
      explanation: 'Files ក្នុង `public` ចូលប្រើបានតាម Relative Path (ឧ. `/style.css`)។'
    },
    {
      question: 'តើ Virtual Path Prefix ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជូន JSON Response',
        'បន្ថែម Prefix ដល់ URL សម្រាប់ Static Files',
        'កំណត់ Route',
        'គ្រប់គ្រង Middleware'
      ],
      correct: 1,
      explanation: 'Virtual Path Prefix (ឧ. `/assets`) បន្ថែម Prefix ដល់ URL សម្រាប់ Static Files។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃ URL `/style.css` ប្រសិនបើប្រើ `express.static(\'public\')`?',
      options: [
        'បម្រើ File `public/style.css`',
        'បម្រើ File `views/style.css`',
        'បញ្ជូន JSON Response',
        'បង្កើត Error'
      ],
      correct: 0,
      explanation: '`/style.css` បម្រើ File `public/style.css` នៅពេលប្រើ `express.static(\'public\')`។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ `express.static()`?',
      options: [
        'បង្កើត Dynamic HTML',
        'បម្រើ Files ដោយផ្ទាល់ទៅ Browser',
        'គ្រប់គ្រង Database',
        'បង្កើត Routes'
      ],
      correct: 1,
      explanation: '`express.static()` បម្រើ Files ដោយផ្ទាល់ទៅ Browser ដោយមិនចាំបាច់ Render។'
    },
    {
      question: 'តើ File ណាដែលអាចបម្រើជាមួយ `express.static()`?',
      options: [
        'index.ejs',
        'style.css',
        'server.js',
        'database.json'
      ],
      correct: 1,
      explanation: '`style.css` ជា Static File ដែលអាចបម្រើជាមួយ `express.static()`។'
    },
    {
      question: 'តើ Multiple Static Folders អាចប្រើបានដែរឬទេ?',
      options: [
        'មិនអាចទេ',
        'អាចបានដោយប្រើ `express.static()` ច្រើនដង',
        'អាចបានតែជាមួយ EJS',
        'អាចបានតែជាមួយ Middleware'
      ],
      correct: 1,
      explanation: 'ប្រើ `express.static()` ច្រើនដងសម្រាប់ Multiple Static Folders។'
    },
    {
      question: 'តើ URL ណាដែលត្រឹមត្រូវសម្រាប់ File `public/logo.png` ជាមួយ `app.use(\'/assets\', express.static(\'public\'))`?',
      options: [
        '/logo.png',
        '/public/logo.png',
        '/assets/logo.png',
        '/static/logo.png'
      ],
      correct: 2,
      explanation: '`/assets/logo.png` ជា URL ត្រឹមត្រូវសម្រាប់ `public/logo.png` ជាមួយ Prefix `/assets`។'
    },
    {
      question: 'តើ Static Files ត្រូវការ Templating Engine ដែរឬទេ?',
      options: [
        'ត្រូវការសម្រាប់ HTML',
        'មិនត្រូវការទេ',
        'ត្រូវការសម្រាប់ CSS',
        'ត្រូវការសម្រាប់ Images'
      ],
      correct: 1,
      explanation: 'Static Files មិនត្រូវការ Templating Engine ព្រោះវាបម្រើដោយផ្ទាល់។'
    },
    {
      question: 'តើអ្វីជាឧទាហរណ៍នៃ Static File Server?',
      options: [
        'បម្រើ `index.html` ជាមួយ `express.static()`',
        'បម្រើ JSON Response',
        'បម្រើ Template ជាមួយ EJS',
        'គ្រប់គ្រង Database'
      ],
      correct: 0,
      explanation: 'បម្រើ `index.html` ជាមួយ `express.static()` ជា Static File Server។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Static Files

គោលបំណង: អនុវត្តការបម្រើ Static Files ជាមួយ \`express.static()\`.

1. **បម្រើ Static HTML File**:
    * បង្កើត Folder \`static-app\` និង Initialize npm:
      \`\`\`bash
      mkdir static-app
      cd static-app
      npm init -y
      npm install express
      \`\`\`
    * បង្កើត Folder \`public\` និង File \`public/index.html\`:
      \`\`\`html
      <!DOCTYPE html>
      <html>
      <head>
        <title>Static Page</title>
      </head>
      <body>
        <h1>Welcome to Static Files!</h1>
      </body>
      </html>
      \`\`\`
    * បង្កើត File \`server.js\`:
      \`\`\`javascript
      const express = require('express');
      const app = express();
      const port = 3000;
      app.use(express.static('public'));
      app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
      \`\`\`
    * ដំណើរការ File:
      \`\`\`bash
      node server.js
      \`\`\`
    * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/index.html\`។

2. **បម្រើ CSS និង Image**:
    * បង្កើត File \`public/style.css\`:
      \`\`\`css
      body {
        background-color: lightblue;
      }
      h1 {
        color: navy;
      }
      \`\`\`
    * បង្កើត File \`public/logo.png\` (ដាក់ Image File នៅទីនេះ)។
    * កែសម្រួល \`public/index.html\`:
      \`\`\`html
      <!DOCTYPE html>
      <html>
      <head>
        <title>Static Page</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Welcome to Static Files!</h1>
        <img src="/logo.png" alt="Logo">
      </body>
      </html>
      \`\`\`
    * ដំណើរការ File ឡើងវិញ:
      \`\`\`bash
      node server.js
      \`\`\`
    * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/index.html\`។

3. **ប្រើ Virtual Path Prefix**:
    * កែសម្រួល \`server.js\`:
      \`\`\`javascript
      // Keep the existing app.use(express.static('public')); if you want both / and /assets to work
      app.use('/assets', express.static('public'));
      \`\`\`
    * កែសម្រួល \`public/index.html\`:
      \`\`\`html
      <!DOCTYPE html>
      <html>
      <head>
        <title>Static Page</title>
        <link rel="stylesheet" href="/assets/style.css">
      </head>
      <body>
        <h1>Welcome to Static Files!</h1>
        <img src="/assets/logo.png" alt="Logo">
      </body>
      </html>
      \`\`\`
    * ដំណើរការ File ឡើងវិញ:
      \`\`\`bash
      node server.js
      \`\`\`
    * ត្រួតពិនិត្យលទ្ធផលនៅ \`http://localhost:3000/assets/style.css\`។

4. **ចែករំលែកលទ្ធផល**:
    * កត់សម្គាល់លទ្ធផលនៃ HTML, CSS, Image, និង Virtual Path Prefix។
`,
    solution: `
# ដំណោះស្រាយ៖ Static Files

## ជំហានទី ១: បម្រើ Static HTML File
* **public/index.html**:
  \`\`\`html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Static Page</title>
    <link rel="stylesheet" href="/assets/style.css">
  </head>
  <body>
    <h1>Welcome to Static Files!</h1>
    <img src="/assets/logo.png" alt="Logo">
  </body>
  </html>
  \`\`\`
* **public/style.css**:
  \`\`\`css
  body {
    background-color: lightblue;
  }
  h1 {
    color: navy;
  }
  \`\`\`
* **server.js**:
  \`\`\`javascript
  const express = require('express');
  const app = express();
  const port = 3000;

  // This line allows direct access to files in 'public' at the root URL (e.g., /index.html)
  app.use(express.static('public'));
  // This line allows access to files in 'public' with the /assets prefix (e.g., /assets/style.css)
  app.use('/assets', express.static('public'));

  app.listen(port, () => console.log(\`Server running at http://localhost:\${port}\`));
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node server.js
  # Output: Server running at http://localhost:3000
  \`\`\`
  * \`http://localhost:3000/index.html\` → HTML Page ជាមួយ Styling និង Image។
  * \`http://localhost:3000/assets/style.css\` → CSS File។

## លទ្ធផលផ្ទៀងផ្ទាត់
* HTML: \`index.html\` បង្ហាញ \`<h1>Welcome to Static Files!</h1>\`។
* CSS: \`style.css\` ផ្តល់ Styling (Lightblue Background, Navy Header)។
* Image: \`logo.png\` បង្ហាញនៅក្នុង HTML Page។
* Virtual Path: \`/assets/style.css\` បម្រើ CSS File ត្រឹមត្រូវ។
`
  }
};

export default NodeJSLesson3_6Content;