import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson2_1Content: LessonContent = {
  title: 'Modules ក្នុង Node.js',
  objectives: [
    'យល់ដឹងអំពី Modules នៅក្នុង Node.js',
    'ស្វែងយល់ពី CommonJS Modules និង ES Modules',
    'រៀនប្រើ `module.exports` និង `require` ក្នុង CommonJS',
    'រៀនប្រើ `import` និង `export` ក្នុង ES Modules',
    'អនុវត្តការបង្កើត និងប្រើ Custom Modules'
  ],
  content: `
# Modules ក្នុង Node.js 📦

---

## 1. តើ Modules ជាអ្វី? 🤔

* **និយមន័យ:** Modules គឺជា File ឬ Code ដែលបែងចែកជាផ្នែកៗដើម្បីឱ្យអាចប្រើឡើងវិញបាន។ Node.js ប្រើ Modules ដើម្បីរៀបចំ និងគ្រប់គ្រង Code។
* **ប្រភេទ Modules:**
  * **Core Modules:** ផ្តល់ដោយ Node.js (ឧ. \`fs\`, \`http\`, \`path\`)។
  * **Custom Modules:** បង្កើតដោយអ្នកអភិវឌ្ឍន៍។
  * **Third-party Modules:** ដំឡើងតាមរយៈ NPM។

---

## 2. CommonJS Modules 🛠️

* **និយមន័យ:** CommonJS ជា Module System ដែល Node.js ប្រើជាលំនាំដើម។
* **ការប្រើប្រាស់:**
  * **Export:** ប្រើ \`module.exports\` ដើម្បីនាំចេញ Functions, Objects, ឬ Values។
  * **Import:** ប្រើ \`require\` ដើម្បីនាំចូល Modules។

---

## 3. ES Modules 🌟

* **និយមន័យ:** ES Modules ជា Module System ស្តង់ដារនៃ ECMAScript (ES6+)។
* **ការប្រើប្រាស់:**
  * **Export:** ប្រើ \`export\` ដើម្បីនាំចេញ។
  * **Import:** ប្រើ \`import\` ដើម្បីនាំចូល។
* **ការកំណត់:** តម្រូវឱ្យបន្ថែម \`"type": "module"\` នៅក្នុង \`package.json\`។

---

## 4. អត្ថប្រយោជន៍នៃ Modules 💡

* **ភាពរៀបចំ:** បែងចែក Code ជាផ្នែកៗសម្រាប់ភាពងាយស្រួលក្នុងការគ្រប់គ្រង។
* **ភាពប្រើឡើងវិញ:** អាចប្រើ Modules នៅកន្លែងផ្សេងៗ។
* **ភាពឯករាជ្យ:** កាត់បន្ថយឱកាសនៃ Naming Conflicts។

---

## 5. ការប្រើ Core Modules 🧩

* **ឧទាហរណ៍ Core Modules:**
  * \`fs\` (File System): គ្រប់គ្រង File Operations។
  * \`path\`: គ្រប់គ្រង File Paths។
  * \`http\`: បង្កើត Servers និង Requests។

---
> **គន្លឹះ:** ប្រើ ES Modules សម្រាប់ Projects ថ្មី ព្រោះវាជាស្តង់ដារទំនើប ប៉ុន្តែ CommonJS នៅតែប្រើបានសម្រាប់ Projects ចាស់។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: CommonJS Module

បង្កើត File ឈ្មោះ \`math.js\`:

\`\`\`javascript
// math.js
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};
\`\`\`

បង្កើត File ឈ្មោះ \`app.js\`:

\`\`\`javascript
// app.js
const math = require('./math');
console.log(math.add(5, 3)); // 8
console.log(math.subtract(5, 3)); // 2
\`\`\`

ដំណើរការ File:

\`\`\`bash
node app.js
\`\`\`

**លទ្ធផល**:
\`\`\`
8
2
\`\`\`

# ឧទាហរណ៍ ២: ES Module

បន្ថែម \`"type": "module"\` ទៅ \`package.json\`:

\`\`\`json
{
  "type": "module"
}
\`\`\`

បង្កើត File ឈ្មោះ \`math.mjs\`:

\`\`\`javascript
// math.mjs
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
\`\`\`

បង្កើត File ឈ្មោះ \`app.mjs\`:

\`\`\`javascript
// app.mjs
import { add, subtract } from './math.mjs';
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
\`\`\`

ដំណើរការ File:

\`\`\`bash
node app.mjs
\`\`\`

**លទ្ធផល**:
\`\`\`
8
2
\`\`\`

# ឧទាហរណ៍ ៣: ប្រើ Core Module \`fs\`

បង្កើត File ឈ្មោះ \`file.js\`:

\`\`\`javascript
// file.js
const fs = require('fs');
fs.writeFileSync('example.txt', 'Hello, Node.js!');
console.log('File created!');
\`\`\`

ដំណើរការ File:

\`\`\`bash
node file.js
\`\`\`

**លទ្ធផល**:
\`\`\`
File created!
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Modules ក្នុង Node.js មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បង្កើត Database',
        'រៀបចំ និងប្រើ Code ឡើងវិញ',
        'គ្រប់គ្រង Hardware',
        'បង្ហាញ Output'
      ],
      correct: 1,
      explanation: 'Modules ជួយរៀបចំ Code និងអនុញ្ញាតឱ្យប្រើឡើងវិញ ដើម្បីងាយស្រួលគ្រប់គ្រង។'
    },
    {
      question: 'តើ Core Modules ជាអ្វី?',
      options: [
        'Modules ដែលបង្កើតដោយអ្នកអភិវឌ្ឍន៍',
        'Modules ដែលផ្តល់ដោយ Node.js',
        'Modules ដែលដំឡើងតាម NPM',
        'Modules សម្រាប់ Browser'
      ],
      correct: 1,
      explanation: 'Core Modules ជា Modules ដែលផ្តល់ដោយ Node.js ដូចជា `fs`, `http`, `path`។'
    },
    {
      question: 'តើ CommonJS ប្រើអ្វីដើម្បីនាំចេញ Module?',
      options: ['import', 'export', 'module.exports', 'require'],
      correct: 2,
      explanation: 'CommonJS ប្រើ `module.exports` ដើម្បីនាំចេញ Functions, Objects, ឬ Values។'
    },
    {
      question: 'តើ ES Modules តម្រូវឱ្យធ្វើអ្វីនៅក្នុង `package.json`?',
      options: [
        'បន្ថែម `"type": "commonjs"`',
        'បន្ថែម `"type": "module"`',
        'បន្ថែម `"module": true`',
        'មិនតម្រូវអ្វីទាំងអស់'
      ],
      correct: 1,
      explanation: 'ES Modules តម្រូវឱ្យបន្ថែម `"type": "module"` នៅក្នុង `package.json`។'
    },
    {
      question: 'តើ `require` ប្រើក្នុង Module System ណា?',
      options: ['ES Modules', 'CommonJS', 'Browser Modules', 'Python Modules'],
      correct: 1,
      explanation: '`require` ប្រើក្នុង CommonJS ដើម្បីនាំចូល Modules។'
    },
    {
      question: 'តើ Core Module `fs` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង File Operations',
        'បង្កើត HTTP Server',
        'គ្រប់គ្រង File Paths',
        'គ្រប់គ្រង Events'
      ],
      correct: 0,
      explanation: 'Core Module `fs` ប្រើសម្រាប់គ្រប់គ្រង File Operations ដូចជា ការអាន ឬសរសេរ Files។'
    },
    {
      question: 'តើ `import` និង `export` ប្រើក្នុង Module System ណា?',
      options: ['CommonJS', 'ES Modules', 'Global Modules', 'Third-party Modules'],
      correct: 1,
      explanation: '`import` និង `export` ប្រើក្នុង ES Modules សម្រាប់នាំចូល និងនាំចេញ Code។'
    },
    {
      question: 'តើ Custom Modules ជាអ្វី?',
      options: [
        'Modules ដែលផ្តល់ដោយ Node.js',
        'Modules ដែលបង្កើតដោយអ្នកអភិវឌ្ឍន៍',
        'Modules ដែលដំឡើងតាម NPM',
        'Modules សម្រាប់ Browser'
      ],
      correct: 1,
      explanation: 'Custom Modules ជា Modules ដែលបង្កើតដោយអ្នកអភិវឌ្ឍន៍សម្រាប់ប្រើក្នុង Project។'
    },
    {
      question: 'តើ Core Module `path` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង File Operations',
        'គ្រប់គ្រង File Paths',
        'បង្កើត HTTP Server',
        'គ្រប់គ្រង Timers'
      ],
      correct: 1,
      explanation: 'Core Module `path` ប្រើសម្រាប់គ្រប់គ្រង File Paths ដូចជា ការបង្កើត ឬ Resolve Paths�।'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើ Modules?',
      options: [
        'បង្កើន Naming Conflicts',
        'ធ្វើឱ្យ Code កាន់តែស្មុគស្មាញ',
        'រៀបចំ និងប្រើ Code ឡើងវិញ',
        'បង្កើត Database'
      ],
      correct: 2,
      explanation: 'Modules ជួយរៀបចំ Code និងអនុញ្ញាតឱ្យប្រើឡើងវិញ ដើម្បីភាពងាយស្រួល។'
    },
    {
      question: 'តើ Module ណាមួយខាងក្រោមជា Core Module?',
      options: ['express', 'fs', 'lodash', 'axios'],
      correct: 1,
      explanation: '`fs` ជា Core Module ដែលផ្តល់ដោយ Node.js សម្រាប់ File Operations។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង CommonJS និង ES Modules?',
      options: [
        'CommonJS ប្រើ `import`, ES Modules ប្រើ `require`',
        'CommonJS ប្រើ `require` និង `module.exports`, ES Modules ប្រើ `import` និង `export`',
        'CommonJS មានតែនៅក្នុង Browser',
        'ES Modules មិនគាំទ្រនៅក្នុង Node.js'
      ],
      correct: 1,
      explanation: 'CommonJS ប្រើ `require` និង `module.exports`, ខណៈ ES Modules ប្រើ `import` និង `export`។'
    },
    {
      question: 'តើ Core Module `http` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង File Paths',
        'បង្កើត HTTP Servers និង Requests',
        'គ្រប់គ្រង File Operations',
        'គ្រប់គ្រង Environment Variables'
      ],
      correct: 1,
      explanation: 'Core Module `http` ប្រើសម្រាប់បង្កើត HTTP Servers និងធ្វើ Requests។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: បង្កើត និងប្រើ Modules ក្នុង Node.js

គោលបំណង: អនុវត្តការបង្កើត និងប្រើ CommonJS និង ES Modules។

1. **បង្កើត CommonJS Module**:
   * បង្កើត File ឈ្មោះ \`utils.js\`:
     \`\`\`javascript
     // utils.js
     module.exports = {
       greet: (name) => \`Hello, \${name}!\`,
       square: (num) => num * num
     };
     \`\`\`
   * បង្កើត File ឈ្មោះ \`app.js\`:
     \`\`\`javascript
     // app.js
     const utils = require('./utils');
     console.log(utils.greet('Sok'));
     console.log(utils.square(5));
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node app.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ "Hello, Sok!" និង 25។

2. **បង្កើត ES Module**:
   * បន្ថែម \`"type": "module"\` ទៅ \`package.json\`:
     \`\`\`json
     {
       "type": "module"
     }
     \`\`\`
   * បង្កើត File ឈ្មោះ \`utils.mjs\`:
     \`\`\`javascript
     // utils.mjs
     export const greet = (name) => \`Hello, \${name}!\`;
     export const square = (num) => num * num;
     \`\`\`
   * បង្កើត File ឈ្មោះ \`app.mjs\`:
     \`\`\`javascript
     // app.mjs
     import { greet, square } from './utils.mjs';
     console.log(greet('Phea'));
     console.log(square(4));
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node app.mjs
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ "Hello, Phea!" និង 16។

3. **ប្រើ Core Module \`fs\`**:
   * បង្កើត File ឈ្មោះ \`file.js\`:
     \`\`\`javascript
     // file.js
     const fs = require('fs');
     fs.writeFileSync('test.txt', 'Hello from Node.js!');
     console.log('File created!');
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node file.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ "File created!" និង File \`test.txt\`។

4. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ \`app.js\`, \`app.mjs\`, និង \`file.js\`។
`,
    solution: `
# ដំណោះស្រាយ៖ បង្កើត និងប្រើ Modules ក្នុង Node.js

## ជំហានទី ១: CommonJS Module
* **utils.js**:
  \`\`\`javascript
  module.exports = {
    greet: (name) => \`Hello, \${name}!\`,
    square: (num) => num * num
  };
  \`\`\`
* **app.js**:
  \`\`\`javascript
  const utils = require('./utils');
  console.log(utils.greet('Sok'));
  console.log(utils.square(5));
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node app.js
  # Output:
  Hello, Sok!
  25
  \`\`\`

## ជំហានទី ២: ES Module
* **package.json**:
  \`\`\`json
  {
    "type": "module"
  }
  \`\`\`
* **utils.mjs**:
  \`\`\`javascript
  export const greet = (name) => \`Hello, \${name}!\`;
  export const square = (num) => num * num;
  \`\`\`
* **app.mjs**:
  \`\`\`javascript
  import { greet, square } from './utils.mjs';
  console.log(greet('Phea'));
  console.log(square(4));
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node app.mjs
  # Output:
  Hello, Phea!
  16
  \`\`\`

## ជំហានទី ៣: Core Module \`fs\`
* **file.js**:
  \`\`\`javascript
  const fs = require('fs');
  fs.writeFileSync('test.txt', 'Hello from Node.js!');
  console.log('File created!');
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node file.js
  # Output:
  File created!
  \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **app.js**: "Hello, Sok!" និង 25
* **app.mjs**: "Hello, Phea!" និង 16
* **file.js**: "File created!" និង File \`test.txt\` ត្រូវបានបង្កើត។
`
  }
};

export default NodeJSLesson2_1Content;