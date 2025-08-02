import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson9_2Content: LessonContent = {
  title: 'Node.js',
  objectives: [
    'ស្វែងយល់អំពី Node.js និងការប្រើប្រាស់របស់វា',
    'រៀនបង្កើត Server សាមញ្ញជាមួយ Node.js',
    'អនុវត្តន៍ការប្រើ Module `http` សម្រាប់ HTTP Server',
    'ស្វែងយល់អំពី Module System នៅក្នុង Node.js',
    'រៀន Best Practices សម្រាប់ Node.js'
  ],
  content: `
# Node.js 🚀

---

**Node.js** គឺជា JavaScript Runtime ដែលអនុញ្ញាតឱ្យដំណើរការ JavaScript នៅខាង Server។ វាប្រើ V8 Engine ដូច Browser។

---

## 1. ការណែនាំអំពី Node.js
Node.js អនុញ្ញាតឱ្យអ្នកបង្កើត Server-Side Applications។

\`\`\`javascript
console.log('សួស្តីពី Node.js!');
\`\`\`

---

## 2. ការបង្កើត HTTP Server
ប្រើ Module \`http\` ដើម្បីបង្កើត Server។

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('សួស្តីពី Node.js Server!');
});

server.listen(3000, () => {
  console.log('Server កំពុងដំណើរការនៅ http://localhost:3000');
});
\`\`\`

---

## 3. Module System
Node.js ប្រើ CommonJS Modules។

\`\`\`javascript
// math.js
module.exports = {
  add: (a, b) => a + b
};

// main.js
const math = require('./math');
console.log(math.add(2, 3)); // ៥
\`\`\`

---

## 4. ការគ្រប់គ្រងកំហុស
ប្រើ \`try...catch\` ដើម្បីគ្រប់គ្រងកំហុស។

\`\`\`javascript
try {
  throw new Error('កំហុសឧទាហរណ៍');
} catch (error) {
  console.error('កំហុស:', error.message);
}
\`\`\`

---

## 5. ការប្រើ Node.js ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`javascript
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  try {
    if (req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1>សួស្តីពី Node.js!</h1>');
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('ទំព័រមិនត្រូវបានរកឃើញ');
    }
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('កំហុស Server');
  }
});

server.listen(3000, () => {
  console.log('Server កំពុងដំណើរការនៅ http://localhost:3000');
});
\`\`\`

**លទ្ធផល:** ចូលទៅ http://localhost:3000 ដើម្បីមើល "សួស្តីពី Node.js!"។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Console Log នៅក្នុង Node.js</h3>
<pre><code class="language-javascript">
console.log('សួស្តីពី Node.js!');
</code></pre>
**លទ្ធផល:** បង្ហាញ "សួស្តីពី Node.js!" នៅក្នុង Console។
<hr>
<h3>ឧទាហរណ៍៖ Module សាមញ្ញ</h3>
<pre><code class="language-javascript">
// math.js
module.exports = {
  add: (a, b) => a + b
};

// main.js
const math = require('./math');
console.log(math.add(2, 3));
</code></pre>
**លទ្ធផល:** បង្ហាញ "៥" នៅក្នុង Console។
`
  ],
  quiz: [
    {
      question: 'តើ Node.js គឺជាអ្វី?',
      options: [
        'JavaScript Runtime សម្រាប់ Server',
        'Browser Framework',
        'CSS Library',
        'Database'
      ],
      correct: 0,
      explanation: 'Node.js គឺជា JavaScript Runtime សម្រាប់ Server-Side Applications។'
    },
    {
      question: 'តើ Module ណាមួយបង្កើត HTTP Server?',
      options: ['http', 'fs', 'path', 'url'],
      correct: 0,
      explanation: 'Module `http` ប្រើសម្រាប់បង្កើត HTTP Server។'
    },
    {
      question: 'តើ `require` ធ្វើអ្វីនៅក្នុង Node.js?',
      options: [
        'នាំចូល Module',
        'បន្ថែម Element',
        'ផ្ញើ Request',
        'បង្កើត Component'
      ],
      correct: 0,
      explanation: '`require` នាំចូល Module នៅក្នុង Node.js។'
    },
    {
      question: 'តើ `module.exports` ប្រើសម្រាប់អ្វី?',
      options: [
        'នាំចេញ Functions ឬ Objects',
        'បន្ថែម Elements',
        'លុប Data',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: '`module.exports` នាំចេញ Functions ឬ Objects សម្រាប់ប្រើនៅ File ផ្សេង។'
    },
    {
      question: 'តើ `res.statusCode = 404` បញ្ជាក់អ្វី?',
      options: [
        'ទំព័រមិនត្រូវបានរកឃើញ',
        'ជោគជ័យ',
        'កំហុស Server',
        'Redirect'
      ],
      correct: 0,
      explanation: '`404` បញ្ជាក់ថាទំព័រមិនត្រូវបានរកឃើញ។'
    },
    {
      question: 'តើ `try...catch` នៅក្នុង Node.js ជួយអ្វី?',
      options: [
        'គ្រប់គ្រងកំហុស',
        'បន្ថែម Elements',
        'ផ្ញើ Request',
        'បង្កើត Component'
      ],
      correct: 0,
      explanation: '`try...catch` គ្រប់គ្រងកំហុសនៅក្នុង Node.js។'
    },
    {
      question: 'តើ `server.listen(3000)` ធ្វើអ្វី?',
      options: [
        'ចាប់ផ្តើម Server នៅ Port 3000',
        'បិទ Server',
        'បន្ថែម Element',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: '`server.listen(3000)` ចាប់ផ្តើម Server នៅ Port 3000។'
    },
    {
      question: 'តើ Best Practice នៅក្នុង Node.js គឺជាអ្វី?',
      options: [
        'បែងចែកកូដទៅជា Modules',
        'ប្រើ Global Variables',
        'សរសេរកូដវែង',
        'ជៀសវាង Error Handling'
      ],
      correct: 0,
      explanation: 'ការបែងចែកកូដទៅជា Modules ធ្វើឱ្យកូដងាយស្រួលថែទាំ។'
    },
    {
      question: 'តើ `res.end()` ធ្វើអ្វី?',
      options: [
        'បញ្ចប់ Response',
        'ចាប់ផ្តើម Server',
        'បន្ថែម Element',
        'លុប Data'
      ],
      correct: 0,
      explanation: '`res.end()` បញ្ចប់ HTTP Response។'
    },
    {
      question: 'តើ V8 Engine នៅក្នុង Node.js គឺជាអ្វី?',
      options: [
        'JavaScript Engine',
        'CSS Framework',
        'Database',
        'API Library'
      ],
      correct: 0,
      explanation: 'V8 Engine ជា JavaScript Engine ដែលប្រើដោយ Node.js។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ Node.js ដែលបង្កើត HTTP Server សាមញ្ញ។

**តម្រូវការ:**

1. **File Structure:**
   - បង្កើតឯកសារ \`server.js\`។

2. **JavaScript (Node.js):**
   - ប្រើ Module \`http\` ដើម្បីបង្កើត Server។
   - នៅពេលចូលទៅ URL \`/\`:
     - Return Status Code \`200\` និង Content-Type \`text/html\`។
     - Return \`<h1>សួស្តីពី Node.js!</h1>\`។
   - នៅពេលចូលទៅ URL ផ្សេង:
     - Return Status Code \`404\` និង Content-Type \`text/plain\`។
     - Return "ទំព័រមិនត្រូវបានរកឃើញ"។
   - ប្រើ \`try...catch\` ដើម្បីគ្រប់គ្រងកំហុស និង Return Status Code \`500\` ជាមួយ "កំហុស Server"។
   - ចាប់ផ្តើម Server នៅ Port 3000 និង Log "Server កំពុងដំណើរការនៅ http://localhost:3000"។
   - ប្រើ Descriptive Names និង Comments។

**ការណែនាំ:** 
- តម្លើង Node.js (https://nodejs.org)។
- ដំណើរការដោយ Command: \`node server.js\`។
- សាកល្បងនៅ Browser ដោយចូលទៅ http://localhost:3000។
`,
    solution: `
// server.js
const http = require('http');

// បង្កើត HTTP Server
const server = http.createServer((req, res) => {
  try {
    // ពិនិត្យ URL
    if (req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1>សួស្តីពី Node.js!</h1>');
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('ទំព័រមិនត្រូវបានរកឃើញ');
    }
  } catch (error) {
    // គ្រប់គ្រងកំហុស
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('កំហុស Server');
  }
});

// ចាប់ផ្តើម Server
server.listen(3000, () => {
  console.log('Server កំពុងដំណើរការនៅ http://localhost:3000');
});
`
  }
};

export default JSLesson9_2Content;