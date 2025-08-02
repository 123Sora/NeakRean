import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson2_4Content: LessonContent = {
  title: 'File System (fs Module)',
  objectives: [
    'យល់ដឹងអំពី `fs` Module នៅក្នុង Node.js',
    'ស្វែងយល់ពីការប្រើ Synchronous និង Asynchronous Methods',
    'រៀនអាន សរសេរ និងគ្រប់គ្រង Files',
    'អនុវត្តការប្រើ `fs` ជាមួយ Callbacks, Promises, និង Async/Await',
    'ស្គាល់ឧទាហរណ៍ជាក់ស្តែងនៃ File Operations'
  ],
  content: `
# File System (fs Module) 📁

---

## 1. តើ \`fs\` Module ជាអ្វី? 🤔

* **និយមន័យ:** \`fs\` (File System) Module គឺជា Core Module នៅក្នុង Node.js ដែលប្រើសម្រាប់គ្រប់គ្រង Files និង Directories។
* **ប្រភេទ Methods:**
  * **Synchronous:** Blocking, រង់ចាំ Operation បញ្ចប់ (ឧ. \`readFileSync\`)។
  * **Asynchronous:** Non-blocking, ប្រើ Callbacks, Promises, ឬ Async/Await (ឧ. \`readFile\`)។

---

## 2. ការប្រើ \`fs\` Module Methods 🛠️

* **readFile/readFileSync:** អានខ្លឹមសារពី File។
* **writeFile/writeFileSync:** សរសេរទិន្នន័យទៅ File។
* **appendFile/appendFileSync:** បន្ថែមទិន្នន័យទៅ File។
* **unlink/unlinkSync:** លុប File។
* **mkdir/mkdirSync:** បង្កើត Directory។

---

## 3. Asynchronous vs. Synchronous 🌟

* **Asynchronous:** ស័ក្តិសមសម្រាប់ Applications ដែលត្រូវការ Performance ខ្ពស់ (ឧ. Web Servers)។
* **Synchronous:** ងាយស្រួលប្រើ ប៉ុន្តែអាចរាំងស្ទះ Code (ស័ក្តិសមសម្រាប់ Scripts សាមញ្ញ)។

---

## 4. ការប្រើ \`fs\` ជាមួយ Promises និង Async/Await ⚙️

* **Promises:** ប្រើ \`fs.promises\` សម្រាប់ Asynchronous Operations ដែលអានបានងាយស្រួល។
* **Async/Await:** ធ្វើឱ្យ Code មើលទៅស្អាត និងគ្រប់គ្រង Errors បានល្អ។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📝

* **Log Files:** ប្រើ \`fs\` ដើម្បីសរសេរ Logs។
* **Configuration Files:** អាន JSON Configuration Files។
* **File Management:** បង្កើត លុប ឬផ្លាស់ទី Files។

---
> **គន្លឹះ:** ប្រើ Asynchronous Methods (\`fs.promises\`) និង Async/Await សម្រាប់ Applications ដែលត្រូវការ Scalability។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Synchronous File Reading/Writing

បង្កើត File ឈ្មោះ \`sync.js\`:

\`\`\`javascript
const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello, Node.js!');
const data = fs.readFileSync('test.txt', 'utf8');
console.log('Content:', data);
\`\`\`

ដំណើរការ File:

\`\`\`bash
node sync.js
\`\`\`

**លទ្ធផល**:
\`\`\`
Content: Hello, Node.js!
\`\`\`

# ឧទាហរណ៍ ២: Asynchronous File Reading/Writing (Callback)

បង្កើត File ឈ្មោះ \`async-callback.js\`:

\`\`\`javascript
const fs = require('fs');
fs.writeFile('test.txt', 'Hello, Async!', (err) => {
  if (err) console.error('Error:', err);
  else {
    fs.readFile('test.txt', 'utf8', (err, data) => {
      if (err) console.error('Error:', err);
      else console.log('Content:', data);
    });
  }
});
\`\`\`

ដំណើរការ File:

\`\`\`bash
node async-callback.js
\`\`\`

**លទ្ធផល**:
\`\`\`
Content: Hello, Async!
\`\`\`

# ឧទាហរណ៍ ៣: Asynchronous File Reading/Writing (Async/Await)

បង្កើត File ឈ្មោះ \`async-await.js\`:

\`\`\`javascript
const fs = require('fs').promises;
async function fileOperations() {
  try {
    await fs.writeFile('test.txt', 'Hello, Async/Await!');
    const data = await fs.readFile('test.txt', 'utf8');
    console.log('Content:', data);
  } catch (err) {
    console.error('Error:', err);
  }
}
fileOperations();
\`\`\`

ដំណើរការ File:

\`\`\`bash
node async-await.js
\`\`\`

**លទ្ធផល**:
\`\`\`
Content: Hello, Async/Await!
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `fs` Module ជាអ្វី?',
      options: [
        'Module សម្រាប់បង្កើត Web Servers',
        'Core Module សម្រាប់គ្រប់គ្រង Files និង Directories',
        'Module សម្រាប់ Database',
        'Module សម្រាប់ HTTP Requests'
      ],
      correct: 1,
      explanation: '`fs` Module ជា Core Module សម្រាប់គ្រប់គ្រង Files និង Directories នៅក្នុង Node.js។'
    },
    {
      question: 'តើ Synchronous Methods នៅក្នុង `fs` Module មានលក្ខណៈដូចម្តេច?',
      options: [
        'Non-blocking, ប្រើ Callbacks',
        'Blocking, រង់ចាំ Operation បញ្ចប់',
        'ប្រើ Promises ស្វ័យប្រវត្តិ',
        'គ្រប់គ្រង HTTP Requests'
      ],
      correct: 1,
      explanation: 'Synchronous Methods ជា Blocking ដែលរង់ចាំ Operation បញ្ចប់មុននឹងបន្ត Code។'
    },
    {
      question: 'តើ `fs.readFileSync` ប្រើសម្រាប់អ្វី?',
      options: [
        'សរសេរ File',
        'អាន File ដោយ Synchronous',
        'លុប File',
        'បន្ថែមទិន្នន័យទៅ File'
      ],
      correct: 1,
      explanation: '`fs.readFileSync` ប្រើសម្រាប់អាន File ដោយ Synchronous ដែល Blocking Code។'
    },
    {
      question: 'តើ `fs.writeFile` ប្រើសម្រាប់អ្វី?',
      options: [
        'អាន File',
        'សរសេរ File ដោយ Asynchronous',
        'លុប File',
        'បង្កើត Directory'
      ],
      correct: 1,
      explanation: '`fs.writeFile` ប្រើសម្រាប់សរសេរ File ដោយ Asynchronous ដែល Non-blocking។'
    },
    {
      question: 'តើ `fs.promises` មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'ធ្វើឱ្យ Code Blocking',
        'អនុញ្ញាតឱ្យប្រើ Promises និង Async/Await',
        'គ្រប់គ្រង Database',
        'បង្កើត Web Servers'
      ],
      correct: 1,
      explanation: '`fs.promises` អនុញ្ញាតឱ្យប្រើ Promises និង Async/Await សម្រាប់ Asynchronous Operations។'
    },
    {
      question: 'តើ `fs.unlink` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត File',
        'លុប File',
        'អាន File',
        'បន្ថែមទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`fs.unlink` ប្រើសម្រាប់លុប File ដោយ Asynchronous។'
    },
    {
      question: 'តើ Asynchronous Methods ស័ក្តិសមសម្រាប់អ្វី?',
      options: [
        'Scripts សាមញ្ញ',
        'Applications ដែលត្រូវការ Performance ខ្ពស់',
        'Database Management',
        'Synchronous Operations'
      ],
      correct: 1,
      explanation: 'Asynchronous Methods ស័ក្តិសមសម្រាប់ Applications ដែលត្រូវការ Performance ខ្ពស់ ដូចជា Web Servers។'
    },
    {
      question: 'តើ `fs.appendFile` ប្រើសម្រាប់អ្វី?',
      options: [
        'អាន File',
        'បន្ថែមទិន្នន័យទៅ File',
        'លុប File',
        'បង្កើត Directory'
      ],
      correct: 1,
      explanation: '`fs.appendFile` ប្រើសម្រាប់បន្ថែមទិន្នន័យទៅ File ដោយ Asynchronous�।'
    },
    {
      question: 'តើ `fs.mkdirSync` ប្រើសម្រាប់អ្វី?',
      options: [
        'លុប Directory',
        'បង្កើត Directory ដោយ Synchronous',
        'អាន Directory',
        'សរសេរ File'
      ],
      correct: 1,
      explanation: '`fs.mkdirSync` ប្រើសម្រាប់បង្កើត Directory ដោយ Synchronous។'
    },
    {
      question: 'តើអ្វីជាគុណវិបត្តិនៃ Synchronous Methods?',
      options: [
        'បង្កើន Performance',
        'អាចរាំងស្ទះ Code',
        'គ្រប់គ្រង Errors បានល្អ',
        'Non-blocking'
      ],
      correct: 1,
      explanation: 'Synchronous Methods អាចរាំងស្ទះ Code ដែលធ្វើឱ្យ Performance ថយចុះនៅក្នុង Applications ធំ។'
    },
    {
      question: 'តើ Method ណាមួយខាងក្រោមជា Asynchronous?',
      options: ['fs.readFileSync', 'fs.writeFileSync', 'fs.readFile', 'fs.unlinkSync'],
      correct: 2,
      explanation: '`fs.readFile` ជា Asynchronous Method ដែល Non-blocking និងប្រើ Callback ឬ Promise។'
    },
    {
      question: 'តើ `fs` Module តម្រូវឱ្យ Import ដែរឬទេ?',
      options: [
        'តម្រូវឱ្យ Import ជាមួយ `require("fs")`',
        'ជា Global Module មិនចាំបាច់ Import',
        'តម្រូវឱ្យដំឡើងជាមួយ NPM',
        'មានតែនៅក្នុង Browser'
      ],
      correct: 0,
      explanation: '`fs` Module ជា Core Module ដែលតម្រូវឱ្យ Import ជាមួយ `require("fs")`។'
    },
    {
      question: 'តើឧទាហរណ៍ណាមួយខាងក្រោមជា File Operation?',
      options: [
        'បង្កើត HTTP Server',
        'សរសេរ Log File',
        'គ្រប់គ្រង Database',
        'បង្ហាញ Output'
      ],
      correct: 1,
      explanation: 'សរសេរ Log File ជា File Operation ដែលអាចធ្វើបានជាមួយ `fs` Module។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: File System (fs Module)

គោលបំណង: អនុវត្តការប្រើ \`fs\` Module សម្រាប់ File Operations ជាមួយ Synchronous និង Asynchronous Methods។

1. **Synchronous File Operations**:
   * បង្កើត File \`sync-ops.js\`:
     \`\`\`javascript
     const fs = require('fs');
     fs.writeFileSync('log.txt', 'Synchronous Log\n');
     const data = fs.readFileSync('log.txt', 'utf8');
     console.log('Content:', data);
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node sync-ops.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ "Content: Synchronous Log"។

2. **Asynchronous File Operations (Callback)**:
   * បង្កើត File \`callback-ops.js\`:
     \`\`\`javascript
     const fs = require('fs');
     fs.writeFile('log.txt', 'Asynchronous Log\n', (err) => {
       if (err) console.error('Error:', err);
       else {
         fs.readFile('log.txt', 'utf8', (err, data) => {
           if (err) console.error('Error:', err);
           else console.log('Content:', data);
         });
       }
     });
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node callback-ops.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ "Content: Asynchronous Log"។

3. **Asynchronous File Operations (Async/Await)**:
   * បង្កើត File \`async-ops.js\`:
     \`\`\`javascript
     const fs = require('fs').promises;
     async function fileOperations() {
       try {
         await fs.writeFile('log.txt', 'Async/Await Log\n');
         const data = await fs.readFile('log.txt', 'utf8');
         console.log('Content:', data);
       } catch (err) {
         console.error('Error:', err);
       }
     }
     fileOperations();
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node async-ops.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ "Content: Async/Await Log"។

4. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ \`sync-ops.js\`, \`callback-ops.js\`, និង \`async-ops.js\`។
`,
    solution: `
# ដំណោះស្រាយ៖ File System (fs Module)

## ជំហានទី ១: Synchronous File Operations
* **sync-ops.js**:
  \`\`\`javascript
  const fs = require('fs');
  fs.writeFileSync('log.txt', 'Synchronous Log\n');
  const data = fs.readFileSync('log.txt', 'utf8');
  console.log('Content:', data);
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node sync-ops.js
  # Output:
  Content: Synchronous Log
  \`\`\`

## ជំហានទី ២: Asynchronous File Operations (Callback)
* **callback-ops.js**:
  \`\`\`javascript
  const fs = require('fs');
  fs.writeFile('log.txt', 'Asynchronous Log\n', (err) => {
    if (err) console.error('Error:', err);
    else {
      fs.readFile('log.txt', 'utf8', (err, data) => {
        if (err) console.error('Error:', err);
        else console.log('Content:', data);
      });
    }
  });
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node callback-ops.js
  # Output:
  Content: Asynchronous Log
  \`\`\`

## ជំហានទី ៣: Asynchronous File Operations (Async/Await)
* **async-ops.js**:
  \`\`\`javascript
  const fs = require('fs').promises;
  async function fileOperations() {
    try {
      await fs.writeFile('log.txt', 'Async/Await Log\n');
      const data = await fs.readFile('log.txt', 'utf8');
      console.log('Content:', data);
    } catch (err) {
      console.error('Error:', err);
    }
  }
  fileOperations();
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node async-ops.js
  # Output:
  Content: Async/Await Log
  \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **sync-ops.js**: "Content: Synchronous Log"
* **callback-ops.js**: "Content: Asynchronous Log"
* **async-ops.js**: "Content: Async/Await Log"
`
  }
};

export default NodeJSLesson2_4Content;