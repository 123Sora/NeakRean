import type { LessonContent } from '../../../../types/LessonTypes';

const ExpressLesson1_3Content: LessonContent = {
  title: 'Node.js Core Concepts សម្រាប់ Express.js',
  objectives: [
    'យល់ដឹងពី Modules នៅក្នុង Node.js (CommonJS)',
    'ស្វែងយល់ពី Asynchronous JavaScript (Promises, Async/Await)',
    'រៀនអំពី HTTP Module នៅក្នុង Node.js',
    'ស្វែងយល់ពី `console.log()` និង `process.env`',
  ],
  content: `
# Node.js Core Concepts សម្រាប់ Express.js 📚

---

ការយល់ដឹងពី **Node.js Core Concepts** គឺចាំបាច់សម្រាប់ការប្រើ Express.js ប្រកបដោយប្រសិទ្ធភាព។ នៅទីនេះ យើងនឹងរំលឹកឡើងវិញនូវគោលគំនិតសំខាន់ៗ។

---

## 1. Modules (CommonJS)

Node.js ប្រើ **CommonJS** សម្រាប់ Module System។ Modules ជួយរៀបចំ Code និង Reuse បាន។

**ឧទាហរណ៍:**
\`\`\`javascript
// math.js
module.exports = {
  add: (a, b) => a + b
};

// app.js
const math = require('./math');
console.log(math.add(2, 3)); // លទ្ធផល: 5
\`\`\`

**គន្លឹះ:** \`require()\` នាំចូល Module, \`module.exports\` នាំចេញ Functions/Variables។

---

## 2. Asynchronous JavaScript

Node.js គឺ Asynchronous ដែលប្រើ **Promises** និង **Async/Await** សម្រាប់គ្រប់គ្រង Operations។

**ឧទាហរណ៍ (Promises):**
\`\`\`javascript
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('ទិន្នន័យបានទាញ!'), 1000);
  });
};

fetchData().then(data => console.log(data)); // លទ្ធផល: ទិន្នន័យបានទាញ!
\`\`\`

**ឧទាហរណ៍ (Async/Await):**
\`\`\`javascript
async function fetchDataAsync() {
  const data = await fetchData();
  console.log(data); // លទ្ធផល: ទិន្នន័យបានទាញ!
}
fetchDataAsync();
\`\`\`

---

## 3. HTTP Module

**HTTP Module** នៅក្នុង Node.js អនុញ្ញាតឱ្យបង្កើត Web Server។ Express.js ប្រើ HTTP Module នៅខាងក្រោម។

**ឧទាហរណ៍:**
\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('សួស្តីពី Node.js!');
});

server.listen(3000, () => {
  console.log('Server ដំណើរការនៅ http://localhost:3000');
});
\`\`\`

**គន្លឹះ:** Express.js សម្រួលការប្រើ HTTP Module។

---

## 4. console.log() និង process.env

- **\`console.log()\`**: ប្រើសម្រាប់ Debugging និង Logging។
  \`\`\`javascript
  console.log('សារ Debug');
  \`\`\`

- **\`process.env\`**: យក Environment Variables។
  \`\`\`javascript
  console.log(process.env.NODE_ENV); // ឧ. development
  \`\`\`

**គន្លឹះ:** ប្រើ \`.env\` File ជាមួយ \`dotenv\` Package ដើម្បីគ្រប់គ្រង Environment Variables។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ CommonJS Module</h3>
<p>បង្កើត Module សម្រាប់ Functions គណនា។</p>
<pre><code class="language-javascript">
// math.js
module.exports = {
  multiply: (a, b) => a * b
};

// app.js
const math = require('./math');
console.log(math.multiply(4, 5)); // លទ្ធផល: 20
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Async/Await</h3>
<p>ប្រើ Async/Await ដើម្បី Simulate Data Fetching។</p>
<pre><code class="language-javascript">
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('ទិន្នន័យ!'), 1000);
  });
};

async function main() {
  const data = await fetchData();
  console.log(data);
}
main(); // លទ្ធផល: ទិន្នន័យ!
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ CommonJS ប្រើអ្វីដើម្បីនាំចូល Module?',
      options: [
        'import',
        'require()',
        'module.exports',
        'export'
      ],
      correct: 1,
      explanation: '`require()` ប្រើសម្រាប់នាំចូល Module នៅក្នុង CommonJS។'
    },
    {
      question: 'តើ `module.exports` មានតួនាទីអ្វី?',
      options: [
        'Run Server',
        'Export Functions/Variables',
        'Create Routes',
        'Install Packages'
      ],
      correct: 1,
      explanation: '`module.exports` Export Functions/Variables ពី Module។'
    },
    {
      question: 'តើ Asynchronous JavaScript ប្រើអ្វីដើម្បីគ្រប់គ្រង Operations?',
      options: [
        'Promises និង Async/Await',
        'Loops',
        'Functions',
        'Classes'
      ],
      correct: 0,
      explanation: 'Promises និង Async/Await ប្រើសម្រាប់ Asynchronous Operations�।'
    },
    {
      question: 'តើ HTTP Module នៅក្នុង Node.js មានតួនាទីអ្វី?',
      options: [
        'Create Database',
        'Create Web Server',
        'Style Website',
        'Run Frontend'
      ],
      correct: 1,
      explanation: 'HTTP Module បង្កើត Web Server។'
    },
    {
      question: 'តើ `console.log()` ប្រើសម្រាប់អ្វី?',
      options: [
        'Create Routes',
        'Debugging និង Logging',
        'Run Server',
        'Install Packages'
      ],
      correct: 1,
      explanation: '`console.log()` ប្រើសម្រាប់ Debugging និង Logging។'
    },
    {
      question: 'តើ `process.env` ប្រើដើម្បីអ្វី?',
      options: [
        'Run Server',
        'Access Environment Variables',
        'Create Modules',
        'Handle Requests'
      ],
      correct: 1,
      explanation: '`process.env` Access Environment Variables។'
    },
    {
      question: 'តើ Promises មានតួនាទីអ្វី?',
      options: [
        'Handle Synchronous Code',
        'Handle Asynchronous Operations',
        'Create Modules',
        'Run Server'
      ],
      correct: 1,
      explanation: 'Promises Handle Asynchronous Operations។'
    },
    {
      question: 'តើ Async/Await ជាអ្វី?',
      options: [
        'Synchronous Code',
        'Syntax សម្រាប់ Promises',
        'Module System',
        'HTTP Method'
      ],
      correct: 1,
      explanation: 'Async/Await ជា Syntax សម្រាប់ Promises។'
    },
    {
      question: 'តើ HTTP Module ត្រូវបាន Express.js ប្រើដែរឬទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែតែនៅ Frontend',
        'មិនបាន ព្រោះជា Database'
      ],
      correct: 0,
      explanation: 'Express.js ប្រើ HTTP Module នៅខាងក្រោម។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `process.env` ដោយគ្មាន `.env` File បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ npm',
        'បាន ប៉ុន្តែត្រូវប្រើ HTTP Module'
      ],
      correct: 0,
      explanation: '`process.env` អាចប្រើបាន ប៉ុន្តែ `.env` File ជួយគ្រប់គ្រង Variables។'
    },
    {
      question: 'តើ Module System នៅក្នុង Node.js ហៅថាអ្វី?',
      options: [
        'ES Modules',
        'CommonJS',
        'TypeScript',
        'React'
      ],
      correct: 1,
      explanation: 'Node.js ប្រើ CommonJS ជា Module System។'
    },
    {
      question: 'តើ `nodemon` មានប្រយោជន៍អ្វីនៅពេលអភិវឌ្ឍន៍?',
      options: [
        'Create Database',
        'Auto-restart Server',
        'Install Packages',
        'Run Frontend'
      ],
      correct: 1,
      explanation: '`nodemon` Auto-restart Server នៅពេលកែ Code។'
    },
  ],
  lab: {
    task: `
បង្កើត Node.js Application ដើម្បីស្វែងយល់ពី CommonJS និង Asynchronous JavaScript។

**តម្រូវការ:**

1. **បង្កើត Module:**
   - បង្កើត File: \`utils.js\`។
   - បន្ថែម Function \`delayMessage\` ដែល Return Promise ដែល Resolve បន្ទាប់ពី 1 វិនាទីជាមួយសារ: "សារពី Promise!"។

2. **បង្កើត Main File:**
   - បង្កើត File: \`app.js\`។
   - នាំចូល \`delayMessage\` ពី \`utils.js\`។
   - ប្រើ Async/Await ដើម្បី Call \`delayMessage\` និង Log សារទៅ Console។
   - បន្ថែម \`console.log('App ចាប់ផ្តើម!')\` នៅដើម។

3. **Test Application:**
   - Run \`node app.js\`។
   - ពិនិត្យថាសារត្រូវបាន Log ត្រឹមត្រូវ។

**ការណែនាំ:** ប្រើ Browser Console ឬ Terminal ដើម្បីពិនិត្យ Errors។
    `,
    solution: `
## utils.js
\`\`\`text
module.exports = {
  delayMessage: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('សារពី Promise!'), 1000);
    });
  }
};
\`\`\`

## app.js
\`\`\`text
const { delayMessage } = require('./utils');

console.log('App ចាប់ផ្តើម!');

async function main() {
  const message = await delayMessage();
  console.log(message);
}
main();
\`\`\`
`
  }
};

export default ExpressLesson1_3Content;