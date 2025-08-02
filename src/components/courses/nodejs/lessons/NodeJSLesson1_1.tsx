import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី Node.js',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Node.js និងមុខងាររបស់វា',
    'ស្វែងយល់ពីការប្រើប្រាស់ Node.js ក្នុងការអភិវឌ្ឍន៍ Back-end',
    'ស្គាល់អត្ថប្រយោជន៍នៃ Node.js (Non-blocking I/O, Event-driven)',
    'ប្រៀបធៀប Node.js ជាមួយភាសា Back-end ផ្សេងទៀត',
    'រៀនរបៀបតំឡើងបរិស្ថានអភិវឌ្ឍន៍ (Node.js, npm, VS Code)'
  ],
  content: `
# ណែនាំអំពី Node.js 🚀

---

**Node.js** គឺជា **JavaScript Runtime Environment** ដែលអនុញ្ញាតឱ្យអ្នកសរសេរ JavaScript នៅខាង Server-side ដែលធ្វើឱ្យវាក្លាយជាឧបករណ៍ដ៏មានឥទ្ធិពលសម្រាប់ការអភិវឌ្ឍន៍ Back-end និង Full-stack Application។

---

## 1. តើ Node.js ជាអ្វី? 🤔

* **និយមន័យ:** Node.js គឺជា Runtime Environment ដែលប្រើ **V8 JavaScript Engine** (ដែលប្រើក្នុង Google Chrome) ដើម្បីប្រតិបត្តិ JavaScript នៅខាងក្រៅ Browser។
* **លក្ខណៈពិសេស:**
  * **Cross-platform:** ដំណើរការលើ Windows, macOS, Linux។
  * **Open-source:** មានសហគមន៍អ្នកអភិវឌ្ឍន៍ (DEV community) ធំទូលាយ។
  * **Server-side:** អនុញ្ញាតឱ្យសរសេរ Server-side Applications ដោយប្រើ JavaScript។

---

## 2. តើ Node.js ប្រើសម្រាប់អ្វី? 💻

Node.js ត្រូវបានប្រើសម្រាប់៖
* **Back-end Development:** បង្កើត APIs, Web Servers។
* **Real-time Applications:** ដូចជា Chat Apps, Online Gaming។
* **Microservices:** បង្កើតកម្មវិធីដែលបែងចែកជាសេវាកម្មតូចៗ។
* **CLI Tools:** បង្កើត Command-line Tools (ឧទាហរណ៍: npm, Webpack)។

---

## 3. មូលហេតុដែលត្រូវប្រើ Node.js 🌟

* **Non-blocking I/O:** Node.js ប្រើ Asynchronous Model ដែលអនុញ្ញាតឱ្យដំណើរការកិច្ចការជាច្រើនក្នុងពេលតែមួយ ដោយមិនចាំបាច់រង់ចាំ I/O Operations (ដូចជា Database Queries ឬ File Reading)។
* **Event-driven Architecture:** ប្រើ Event Loop ដើម្បីគ្រប់គ្រង Events និង Callbacks។
* **Scalability:** ស័ក្តិសមសម្រាប់កម្មវិធីដែលត្រូវការដោះស្រាយ Requests ច្រើនក្នុងពេលតែមួយ។
* **Single Language:** អ្នកអភិវឌ្ឍន៍អាចប្រើ JavaScript ទាំង Front-end និង Back-end។

---

## 4. ការប្រៀបធៀប Node.js ជាមួយភាសា Back-end ផ្សេងទៀត ⚖️

| លក្ខណៈ                | Node.js                           | Python (Django/Flask)         | PHP                       | Ruby (Rails)            |
|-------------------------|-----------------------------------|-------------------------------|---------------------------|-------------------------|
| **ភាសា**               | JavaScript                        | Python                        | PHP                       | Ruby                    |
| **ប្រតិបត្តិការ**     | លឿន (Non-blocking I/O)          | មធ្យម                       | មធ្យម                   | មធ្យម                 |
| **ភាពងាយស្រួលក្នុងការរៀន** | ងាយស្រួល (បើធ្លាប់ស្គាល់ JS) | ងាយស្រួល                   | ងាយស្រួល               | មធ្យម                 |
| **សហគមន៍**           | ធំទូលាយ                       | ធំទូលាយ                   | ធំទូលាយ               | តូចជាង               |
| **ករណីប្រើប្រាស់**    | Real-time Apps, APIs             | Data Science, APIs           | Web Apps                 | Web Apps               |

---

## 5. ការតំឡើងបរិស្ថានអភិវឌ្ឍន៍ 🛠️

* **Node.js និង npm:** ទាញយក និងតំឡើង Node.js ពី [nodejs.org](https://nodejs.org)។ npm (Node Package Manager) នឹងត្រូវបានតំឡើងជាមួយ Node.js។
* **VS Code:** ប្រើ Visual Studio Code ជា Code Editor ដែលមាន Extensions សម្រាប់ Node.js (ឧទាហរណ៍: JavaScript (ES6) Code Snippets, ESLint)។
* **ការត្រួតពិនិត្យកំណែ:** បើក Terminal ហើយវាយ៖
  \`\`\`bash
  node -v
  npm -v
  \`\`\`
  ដើម្បីត្រួតពិនិត្យកំណែ Node.js និង npm។

---
> **គន្លឹះ:** ត្រូវប្រាកដថាអ្នកបានតំឡើង Node.js LTS (Long Term Support) Version ដើម្បីភាពស្ថិរភាព។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: កម្មវិធី Node.js ដំបូង

បង្កើត File ឈ្មោះ \`hello.js\`:

\`\`\`javascript
console.log("Hello, Node.js!");
\`\`\`

ដំណើរការ File នេះនៅក្នុង Terminal:

\`\`\`bash
node hello.js
\`\`\`

**លទ្ធផល**:
\`\`\`
Hello, Node.js!
\`\`\`

# ឧទាហរណ៍ ២: បង្កើត Simple HTTP Server

បង្កើត File ឈ្មោះ \`server.js\`:

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Node.js Server!\n');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
\`\`\`

ដំណើរការ Server:

\`\`\`bash
node server.js
\`\`\`

បើក Browser នៅ \`http://localhost:3000/\` អ្នកនឹងឃើញ "Hello from Node.js Server!".
`
  ],
  quiz: [
    {
      question: 'តើ Node.js គឺជាអ្វី?',
      options: [
        'JavaScript Framework',
        'JavaScript Runtime Environment',
        'Web Browser',
        'Database System'
      ],
      correct: 1,
      explanation: 'Node.js គឺជា JavaScript Runtime Environment ដែលអនុញ្ញាតឱ្យប្រតិបត្តិ JavaScript នៅខាង Server-side។'
    },
    {
      question: 'តើ Node.js ប្រើ Engine អ្វីដើម្បីប្រតិបត្តိ JavaScript?',
      options: [
        'SpiderMonkey',
        'V8',
        'Chakra',
        'JavaScriptCore'
      ],
      correct: 1,
      explanation: 'Node.js ប្រើ V8 JavaScript Engine ដែលជា Engine ដូចគ្នាដែលប្រើក្នុង Google Chrome។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍សំខាន់មួយនៃ Node.js?',
      options: [
        'Blocking I/O',
        'Non-blocking I/O',
        'Multi-threading',
        'Compiled Language'
      ],
      correct: 1,
      explanation: 'Node.js ប្រើ Non-blocking I/O ដែលអនុញ្ញាតឱ្យដំណើរការកិច្ចការជាច្រើនក្នុងពេលតែមួយ។'
    },
    {
      question: 'តើ npm គឺជាអ្វី?',
      options: [
        'Node Package Manager',
        'Node Programming Module',
        'Network Package Manager',
        'Node Process Manager'
      ],
      correct: 0,
      explanation: 'npm គឺជា Node Package Manager ដែលជួយគ្រប់គ្រង Libraries និង Dependencies សម្រាប់ Node.js។'
    },
    {
      question: 'តើ Node.js ស័ក្តិសមសម្រាប់កម្មវិធីប្រភេទណា?',
      options: [
        'Real-time Applications',
        'Desktop GUI Applications',
        'Game Development',
        'Data Analysis'
      ],
      correct: 0,
      explanation: 'Node.js ស័ក្តិសមសម្រាប់ Real-time Applications ដូចជា Chat Apps និង APIs។'
    },
    {
      question: 'តើ Node.js LTS Version មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'មាន Features ថ្មីបំផុត',
        'ផ្តល់ភាពស្ថិរភាពសម្រាប់ Production',
        'គាំទ្រតែ Windows ប៉ុណ្ណោះ',
        'មិនតម្រូវឱ្យតំឡើង npm'
      ],
      correct: 1,
      explanation: 'Node.js LTS (Long Term Support) Version ផ្តល់ភាពស្ថិរភាព និងគាំទ្រយូរអង្វែងសម្រាប់ Production Applications។'
    },
    {
      question: 'តើអ្វីជាលក្ខណៈពិសេសមួយនៃ Node.js ដែលធ្វើឱ្យវាខុសពីភាសា Back-end ផ្សេងទៀត?',
      options: [
        'Event-driven Architecture',
        'Compiled Execution',
        'Static Typing',
        'Database Integration'
      ],
      correct: 0,
      explanation: 'Node.js ប្រើ Event-driven Architecture ជាមួយ Event Loop ដែលធ្វើឱ្យវាស័ក្តិសមសម្រាប់ Real-time Applications។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: ការតំឡើង និងសាកល្បង Node.js

គោលបំណង: តំឡើង Node.js និង npm នៅលើកុំព្យូទ័ររបស់អ្នក និងបង្កើតកម្មវិធី Node.js ដំបូង។

1. **តំឡើង Node.js និង npm**:
   * ចូលទៅកាន់ [nodejs.org](https://nodejs.org) ហើយទាញយក LTS Version។
   * ដំឡើង Node.js ដោយធ្វើតាមការណែនាំសម្រាប់ប្រព័ន្ធប្រតិបត្តិការរបស់អ្នក (Windows, macOS, Linux)។
   * បើក Terminal ឬ Command Prompt ហើយត្រួតពិនិត្យកំណែ៖
     \`\`\`bash
     node -v
     npm -v
     \`\`\`

2. **បង្កើត Project Folder**:
   * បង្កើត Folder ថ្មីឈ្មោះ \`node-first-app\`។
   * ចូលទៅក្នុង Folder នោះ៖
     \`\`\`bash
     mkdir node-first-app
     cd node-first-app
     \`\`\`

3. **បង្កើត File JavaScript**:
   * បង្កើត File ឈ្មោះ \`app.js\` ហើយបញ្ចូល Code ដូចខាងក្រោម៖
     \`\`\`javascript
     console.log("Welcome to Node.js!");
     \`\`\`

4. **ដំណើរការ File**:
   * នៅក្នុង Terminal ដំណើរការ File ដោយប្រើ៖
     \`\`\`bash
     node app.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ អ្នកគួរឃើញ "Welcome to Node.js!" នៅលើ Terminal។

5. **បង្កើត Simple HTTP Server**:
   * បង្កើត File ថ្មីឈ្មោះ \`server.js\` ហើយបញ្ចូល Code ដូចខាងក្រោម៖
     \`\`\`javascript
     const http = require('http');

     const server = http.createServer((req, res) => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       res.end('Hello from Node.js Server!\n');
     });

     server.listen(3000, 'localhost', () => {
       console.log('Server running at http://localhost:3000/');
     });
     \`\`\`
   * ដំណើរការ Server:
     \`\`\`bash
     node server.js
     \`\`\`
   * បើក Browser នៅ \`http://localhost:3000/\` ហើយត្រួតពិនិត្យលទ្ធផល។

6. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់កំណែ Node.js និង npm ដែលអ្នកបានតំឡើង។
   * កត់សម្គាល់លទ្ធផលនៃ \`app.js\` និង \`server.js\`។
`,
    solution: `
# ដំណោះស្រាយ៖ ការតំឡើង និងសាកល្បង Node.js

## ជំហានទី ១: តំឡើង Node.js និង npm
* អ្នកបានទាញយក និងតំឡើង Node.js LTS Version ពី [nodejs.org](https://nodejs.org)។
* លទ្ធផលនៃការត្រួតពិនិត្យកំណែ៖
  \`\`\`bash
  node -v
  # ឧទាហរណ៍: v18.18.0
  npm -v
  # ឧទាហរណ៍: 9.8.0
  \`\`\`

## ជំហានទី ២: បង្កើត Project Folder
* Folder \`node-first-app\` ត្រូវបានបង្កើត។
* អ្នកបានចូលទៅក្នុង Folder:
  \`\`\`bash
  mkdir node-first-app
  cd node-first-app
  \`\`\`

## ជំហានទី ៣: បង្កើត File JavaScript
* File \`app.js\` ត្រូវបានបង្កើតជាមួយ Code:
  \`\`\`javascript
  console.log("Welcome to Node.js!");
  \`\`\`

## ជំហានទី ៤: ដំណើរការ File
* លទ្ធផលនៃការដំណើរការ:
  \`\`\`bash
  node app.js
  # Output: Welcome to Node.js!
  \`\`\`

## ជំហានទី ៥: បង្កើត Simple HTTP Server
* File \`server.js\` ត្រូវបានបង្កើតជាមួយ Code:
  \`\`\`javascript
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Node.js Server!\n');
  });

  server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
  });
  \`\`\`
* លទ្ធផលនៃការដំណើរការ:
  \`\`\`bash
  node server.js
  # Output: Server running at http://localhost:3000/
  \`\`\`
* នៅ Browser (\`http://localhost:3000/\`): "Hello from Node.js Server!"

## លទ្ធផលផ្ទៀងផ្ទាត់
* **Node.js Version**: ឧទាហរណ៍ v18.18.0
* **npm Version**: ឧទាហរណ៍ 9.8.0
* **app.js Output**: "Welcome to Node.js!"
* **server.js Output**: "Hello from Node.js Server!" (នៅ Browser)
`
  }
};

export default NodeJSLesson1_1Content;