import type { LessonContent } from '../../../../types/LessonTypes';

const ReactLesson5_8Content: LessonContent = {
  title: 'ការដាក់ឱ្យប្រើប្រាស់ (Deployment)',
  objectives: [
    'យល់ដឹងអំពីការដាក់ឱ្យប្រើប្រាស់ React Applications',
    'ស្វែងយល់ពីការបង្កើត Production Build',
    'រៀនដាក់ឱ្យប្រើប្រាស់នៅលើ Vercel',
    'រៀនដាក់ឱ្យប្រើប្រាស់នៅលើ Netlify',
    'អនុវត្ត Static File Hosting',
    'ស្វែងយល់ពី Environment Variables',
    'រៀន Configure Domain និង HTTPS'
  ],
  content: `
# ការដាក់ឱ្យប្រើប្រាស់ (Deployment) 🚀

---

**Deployment** ជាដំណើរការដាក់ React Application ទៅលើ Server ដើម្បីឱ្យអ្នកប្រើប្រាស់ចូលប្រើបាន៕

---

## 1. ការបង្កើត Production Build
ប្រើ \`npm run build\` ដើម្បីបង្កើត Optimized Build៕

\`\`\`bash
npm run build
\`\`\`

នឹងបង្កើត Folder \`build/\` ដែលមាន Static Files៕

---

## 2. ដាក់ឱ្យប្រើប្រាស់នៅ Vercel
Vercel ជា Platform សម្រាប់ Deploy Next.js និង React Apps៕

\`\`\`bash
# ដំឡើង Vercel CLI
npm i -g vercel
# Deploy
vercel
\`\`\`

---

## 3. ដាក់ឱ្យប្រើប្រាស់នៅ Netlify
Netlify គាំទ្រ Static Site Deployment៕

\`\`\`bash
# ដំឡើង Netlify CLI
npm i -g netlify-cli
# Deploy
netlify deploy --prod
\`\`\`

---

## 4. Environment Variables
ប្រើ \`.env\` File ដើម្បី Store Sensitive Data៕

\`\`\`env
# .env
REACT_APP_API_KEY=your_api_key
\`\`\`

\`\`\`jsx
// src/App.js
function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  return <div>API Key: {apiKey}</div>;
}
\`\`\`

---

## 5. ឧទាហរណ៍រួមបញ្ចូល
បង្កើត Static React App ដែលបង្ហាញ Message៕

\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>សូមស្វាគមន៍មកកាន់ React App ដែល Deployed!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Static React App</h3>
<div id="root"></div>
<script type="text/babel">
  import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js';
  import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js';
  function App() {
    return <h1>សូមស្វាគមន៍មកកាន់ React App ដែល Deployed!</h1>;
  }
  ReactDOM.render(<App />, document.getElementById('root'));
</script>
<pre><code class="language-jsx">
function App() {
  return <h1>សូមស្វាគមន៍មកកាន់ React App ដែល Deployed!</h1>;
}
</code></pre>
` 
  ],
  quiz: [
    {
      question: 'តើ \`npm run build\` ធ្វើអ្វី?',
      options: [
        'Start Development Server',
        'Create Production Build',
        'Run Tests',
        'Install Dependencies'
      ],
      correct: 1,
      explanation: '\`npm run build\` Create Optimized Production Build៕'
    },
    {
      question: 'តើ Vercel គាំទ្រ Framework អ្វីខ្លះ?',
      options: [
        'React និង Next.js',
        'Vue.js ប៉ុណ្ណោះ',
        'Angular ប៉ុណ្ណោះ',
        'Svelte ប៉ុណ្ណោះ'
      ],
      correct: 0,
      explanation: 'Vercel គាំទ្រ React, Next.js, និង Frameworks ផ្សេងទៀត៕'
    },
    {
      question: 'តើ Netlify សមស្របសម្រាប់អ្វី?',
      options: [
        'Server-Side Rendering',
        'Static Site Deployment',
        'Database Hosting',
        'API Management'
      ],
      correct: 1,
      explanation: 'Netlify សមស្របសម្រាប់ Static Site Deployment៕'
    },
    {
      question: 'តើ Environment Variables ប្រើសម្រាប់អ្វី?',
      options: [
        'Store Sensitive Data',
        'Update State',
        'Render Components',
        'Test Components'
      ],
      correct: 0,
      explanation: 'Environment Variables Store Sensitive Data ដូចជា API Keys៕'
    },
    {
      question: 'តើ Folder ណាដែលបង្កើតដោយ \`npm run build\`?',
      options: [
        'dist/',
        'build/',
        'public/',
        'src/'
      ],
      correct: 1,
      explanation: '\`npm run build\` បង្កើត Folder \`build/\` ជាមួយ Static Files៕'
    },
    {
      question: 'តើ Vercel CLI Command សម្រាប់ Deploy គឺជាអ្វី?',
      options: [
        'vercel deploy',
        'vercel',
        'netlify deploy',
        'npm run deploy'
      ],
      correct: 1,
      explanation: '\`vercel\` Command Deploy App ទៅ Vercel៕'
    },
    {
      question: 'តើ Netlify CLI Command សម្រាប់ Deploy គឺជាអ្វី?',
      options: [
        'vercel',
        'netlify deploy --prod',
        'npm run build',
        'netlify run'
      ],
      correct: 1,
      explanation: '\`netlify deploy --prod\` Deploy App ទៅ Netlify៕'
    },
    {
      question: 'តើ Environment Variable ក្នុង React ចាប់ផ្តើមដោយអ្វី?',
      options: [
        'REACT_',
        'REACT_APP_',
        'ENV_',
        'APP_'
      ],
      correct: 1,
      explanation: 'Environment Variables ក្នុង React ចាប់ផ្តើមដោយ \`REACT_APP_\`៕'
    },
    {
      question: 'តើ Static Files ក្នុង React Build មានអ្វីខ្លះ?',
      options: [
        'HTML, CSS, JS',
        'JSX Files',
        'Node Modules',
        'Database Files'
      ],
      correct: 0,
      explanation: 'Static Files មាន HTML, CSS, និង JS៕'
    },
    {
      question: 'តើ HTTPS ត្រូវបាន Configure ដោយស្វ័យប្រវត្តិនៅលើ Platform ណា?',
      options: [
        'Vercel និង Netlify',
        'Local Server',
        'Node.js Server',
        'Apache Server'
      ],
      correct: 0,
      explanation: 'Vercel និង Netlify Configure HTTPS ដោយស្វ័យប្រវត្តិ៕'
    },
    {
      question: 'តើ Deployment Platform ណាដែលសមស្របសម្រាប់ Next.js?',
      options: [
        'Vercel',
        'AWS Lambda',
        'Firebase',
        'Heroku'
      ],
      correct: 0,
      explanation: 'Vercel ជា Platform ដ៏ល្អសម្រាប់ Deploy Next.js៕'
    },
    {
      question: 'តើ \`.env\` File គួរត្រូវ Commit ទៅ Git ទេ?',
      options: [
        'គួរ',
        'មិនគួរ',
        'គួរតែក្នុង Production',
        'គួរតែក្នុង Development'
      ],
      correct: 1,
      explanation: '\`.env\` File មិនគួរ Commit ទៅ Git ដើម្បីការពារ Sensitive Data៕'
    },
    {
      question: 'តើ Production Build ជួយអ្វី?',
      options: [
        'កាត់បន្ថយ File Size និង Optimize Performance',
        'Run Tests',
        'Update State',
        'Manage Routes'
      ],
      correct: 0,
      explanation: 'Production Build កាត់បន្ថយ File Size និង Optimize Performance៕'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្ហាញ Static React App សម្រាប់ Deployment៕

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`៕
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`៕
   - កំណត់ Title៖ "React Static App"៕
   - បន្ថែម \`<div id="root">\` នៅក្នុង \`<body>\`៕

2. **JavaScript:**
   - បន្ថែម CDN សម្រាប់ React, ReactDOM, និង Babel៕
   - បង្កើត Functional Component \`App\` ដែល Render \`<h1>សូមស្វាគមន៍មកកាន់ React App ដែល Deployed!</h1>\`៕
   - Render \`App\` Component ទៅក្នុង \`<div id="root">\`៕

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`៕
     - កំណត់ \`font-size: 24px; color: #2c3e50;\` សម្រាប់ \`h1\`៕

**ការណែនាំ:** Test កូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស៕ ឯកសារនេះអាចប្រើជា Static File សម្រាប់ Deployment នៅលើ Vercel ឬ Netlify៕
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Static App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    h1 {
      font-size: 24px;
      color: #2c3e50;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.20.6/Babel.min.js"></script>
  <script type="text/babel">
    function App() {
      return <h1>សូមស្វាគមន៍មកកាន់ React App ដែល Deployed!</h1>;
    }
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
`
  }
};

export default ReactLesson5_8Content;