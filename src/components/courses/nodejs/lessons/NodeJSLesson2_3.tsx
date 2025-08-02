import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson2_3Content: LessonContent = {
  title: 'Event Loop និង Asynchronous Programming',
  objectives: [
    'យល់ដឹងអំពី Event Loop នៅក្នុង Node.js',
    'ស្វែងយល់ពី Asynchronous Programming និង Non-blocking I/O',
    'រៀនប្រើ Callbacks, Promises, និង Async/Await',
    'អនុវត្តការគ្រប់គ្រង Asynchronous Operations',
    'ស្គាល់ឧទាហរណ៍ជាក់ស្តែងនៃ Asynchronous Code'
  ],
  content: `
# Event Loop និង Asynchronous Programming 🔄

---

## 1. តើ Event Loop ជាអ្វី? 🤔

* **និយមន័យ:** Event Loop គឺជាយន្តការនៅក្នុង Node.js ដែលគ្រប់គ្រង Asynchronous Operations ដោយអនុញ្ញាតឱ្យ Code ដំណើរការដោយ Non-blocking។
* **របៀបដំណើរការ:** Event Loop ពិនិត្យ Call Stack និង Callback Queue ដើម្បីប្រតិបត្តិ Tasks នៅពេល Call Stack ទទេ។

---

## 2. Asynchronous Programming និង Non-blocking I/O 💻

* **Asynchronous Programming:** អនុញ្ញាតឱ្យ Code បន្តដំណើរការដោយមិនរង់ចាំ Operation បញ្ចប់ (ឧ. File Reading, HTTP Requests)។
* **Non-blocking I/O:** Node.js ប្រើ I/O Operations ដែលមិនរាំងស្ទះ ដើម្បីបង្កើន Performance។

---

## 3. វិធីសាស្ត្រនៃ Asynchronous Programming 🌟

* **Callbacks:** Functions ដែលបញ្ជូនជា Argument ដើម្បីប្រតិបត្តិនៅពេល Operation បញ្ចប់។
* **Promises:** Objects ដែលតំណាងឱ្យលទ្ធផលនៃ Asynchronous Operation (Resolved ឬ Rejected)។
* **Async/Await:** Syntax ទំនើបសម្រាប់គ្រប់គ្រង Promises ដោយធ្វើឱ្យ Code មើលទៅដូច Synchronous។

---

## 4. អត្ថប្រយោជន៍នៃ Asynchronous Programming ⚙️

* **Performance:** បង្កើនល្បឿនដោយមិនរង់ចាំ I/O Operations។
* **Scalability:** គ្រប់គ្រង Requests ច្រើនក្នុងពេលតែមួយ។
* **User Experience:** កាត់បន្ថយ Latency នៅក្នុង Applications។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង ⏱️

* **File Reading:** ប្រើ \`fs\` Module ដើម្បីអាន Files ដោយ Asynchronous។
* **HTTP Requests:** ប្រើ \`http\` Module ដើម្បីគ្រប់គ្រង Requests ដោយ Non-blocking។

---
> **គន្លឹះ:** ប្រើ Async/Await សម្រាប់ Code ដែលអានបានងាយស្រួល និងកាត់បន្ថយ Callback Hell។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ប្រើ Callback

បង្កើត File ឈ្មោះ \`callback.js\`:

\`\`\`javascript
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) console.error('Error:', err);
  else console.log('File Content:', data);
});
console.log('Reading file...');
\`\`\`

ដំណើរការ File:

\`\`\`bash
node callback.js
\`\`\`

**លទ្ធផល**:
\`\`\`
Reading file...
File Content: <content of example.txt>
\`\`\`

# ឧទាហរណ៍ ២: ប្រើ Promise

បង្កើត File ឈ្មោះ \`promise.js\`:

\`\`\`javascript
const fs = require('fs').promises;
fs.readFile('example.txt', 'utf8')
  .then(data => console.log('File Content:', data))
  .catch(err => console.error('Error:', err));
console.log('Reading file...');
\`\`\`

ដំណើរការ File:

\`\`\`bash
node promise.js
\`\`\`

**លទ្ធផល**:
\`\`\`
Reading file...
File Content: <content of example.txt>
\`\`\`

# ឧទាហរណ៍ ៣: ប្រើ Async/Await

បង្កើត File ឈ្មោះ \`async.js\`:

\`\`\`javascript
const fs = require('fs').promises;
async function readFile() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log('File Content:', data);
  } catch (err) {
    console.error('Error:', err);
  }
}
readFile();
console.log('Reading file...');
\`\`\`

ដំណើរការ File:

\`\`\`bash
node async.js
\`\`\`

**លទ្ធផល**:
\`\`\`
Reading file...
File Content: <content of example.txt>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Event Loop នៅក្នុង Node.js មានតួនាទីអ្វី?',
      options: [
        'គ្រប់គ្រង Database',
        'គ្រប់គ្រង Asynchronous Operations',
        'បង្កើត Web Servers',
        'គ្រប់គ្រង File Paths'
      ],
      correct: 1,
      explanation: 'Event Loop គ្រប់គ្រង Asynchronous Operations ដោយអនុញ្ញាតឱ្យ Code ដំណើរការដោយ Non-blocking។'
    },
    {
      question: 'តើ Asynchronous Programming មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'ធ្វើឱ្យ Code កាន់តែស្មុគស្មាញ',
        'បង្កើន Performance និង Scalability',
        'គ្រប់គ្រង Hardware',
        'បង្កើត Database'
      ],
      correct: 1,
      explanation: 'Asynchronous Programming បង្កើន Performance និង Scalability ដោយមិនរង់ចាំ I/O Operations។'
    },
    {
      question: 'តើ Callbacks ជាអ្វី?',
      options: [
        'Objects ដែលតំណាងឱ្យ Asynchronous Operations',
        'Functions ដែលបញ្ជូនជា Argument សម្រាប់ Asynchronous Code',
        'Syntax សម្រាប់ Synchronous Code',
        'Modules សម្រាប់ File Operations'
      ],
      correct: 1,
      explanation: 'Callbacks ជា Functions ដែលបញ្ជូនជា Argument ដើម្បីប្រតិបត្តិនៅពេល Operation បញ្ចប់។'
    },
    {
      question: 'តើ Promises មានស្ថានភាពអ្វីខ្លះ?',
      options: [
        'Running, Stopped',
        'Pending, Resolved, Rejected',
        'Started, Finished',
        'Active, Inactive'
      ],
      correct: 1,
      explanation: 'Promises មានស្ថានភាព Pending, Resolved, និង Rejected ដើម្បីតំណាងឱ្យលទ្ធផលនៃ Asynchronous Operation។'
    },
    {
      question: 'តើ Async/Await ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង File Paths',
        'ធ្វើឱ្យ Asynchronous Code មើលទៅដូច Synchronous',
        'បង្កើត HTTP Servers',
        'គ្រប់គ្រង Database'
      ],
      correct: 1,
      explanation: 'Async/Await ជា Syntax ទំនើបសម្រាប់គ្រប់គ្រង Promises ដោយធ្វើឱ្យ Code អានបានងាយស្រួល។'
    },
    {
      question: 'តើ Non-blocking I/O មានន័យដូចម្តេច?',
      options: [
        'Code រង់ចាំ Operation បញ្ចប់',
        'Code បន្តដំណើរការដោយមិនរង់ចាំ I/O Operations',
        'Code បញ្ឈប់ Process',
        'Code គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Non-blocking I/O អនុញ្ញាតឱ្យ Code បន្តដំណើរការដោយមិនរង់ចាំ I/O Operations។'
    },
    {
      question: 'តើ Callback Hell ជាអ្វី?',
      options: [
        'ការប្រើ Promises ច្រើនពេក',
        'ការប្រើ Callbacks ជាន់គ្នាច្រើនធ្វើឱ្យ Code ពិបាកអាន',
        'ការប្រើ Async/Await ខុស',
        'ការគ្រប់គ្រង File Operations'
      ],
      correct: 1,
      explanation: 'Callback Hell កើតឡើងនៅពេល Callbacks ជាន់គ្នាច្រើន ធ្វើឱ្យ Code ពិបាកអាន និងគ្រប់គ្រង។'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ `then` នៅក្នុង Promise?',
      options: [
        'បញ្ឈប់ Promise',
        'គ្រប់គ្រងលទ្ធផលនៅពេល Promise Resolved',
        'បង្កើត Promise ថ្មី',
        'គ្រប់គ្រង Errors'
      ],
      correct: 1,
      explanation: '`then` ប្រើសម្រាប់គ្រប់គ្រងលទ្ធផលនៅពេល Promise Resolved។'
    },
    {
      question: 'តើ `catch` នៅក្នុង Promise ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Promise',
        'គ្រប់គ្រង Errors នៅពេល Promise Rejected',
        'បន្ត Promise Chain',
        'បញ្ឈប់ Event Loop'
      ],
      correct: 1,
      explanation: '`catch` ប្រើសម្រាប់គ្រប់គ្រង Errors នៅពេល Promise Rejected�।'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ `async` Keyword?',
      options: [
        'ធ្វើឱ្យ Function បញ្ឈប់ Process',
        'បញ្ជាក់ថា Function នឹងត្រឡប់ Promise',
        'បង្កើត Callback',
        'គ្រប់គ្រង File Paths'
      ],
      correct: 1,
      explanation: '`async` បញ្ជាក់ថា Function នឹងត្រឡប់ Promise និងអនុញ្ញាតឱ្យប្រើ `await`។'
    },
    {
      question: 'តើ `await` អាចប្រើនៅកន្លែងណា?',
      options: [
        'នៅក្នុង Function ណាក៏បាន',
        'នៅក្នុង `async` Function ប៉ុណ្ណោះ',
        'នៅក្នុង Callback',
        'នៅក្នុង Event Loop'
      ],
      correct: 1,
      explanation: '`await` អាចប្រើបានតែនៅក្នុង `async` Function ដើម្បីរង់ចាំ Promise Resolution។'
    },
    {
      question: 'តើ Event Loop ពិនិត្យអ្វីមុននឹងប្រតិបត្តិ Callback?',
      options: [
        'Call Stack និង Callback Queue',
        'File System',
        'HTTP Requests',
        'Database'
      ],
      correct: 0,
      explanation: 'Event Loop ពិនិត្យ Call Stack និង Callback Queue ដើម្បីប្រតិបត្តិ Callbacks នៅពេល Call Stack ទទេ។'
    },
    {
      question: 'តើឧទាហរណ៍ណាមួយខាងក្រោមជា Asynchronous Operation?',
      options: [
        'ការបូកលេខសាមញ្ញ',
        'ការអាន File ជាមួយ `fs.readFile`',
        'ការបង្កើត Object',
        'ការបោះពុម្ព console.log'
      ],
      correct: 1,
      explanation: 'ការអាន File ជាមួយ `fs.readFile` ជា Asynchronous Operation ព្រោះវាមិនរាំងស្ទះ Code។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Event Loop និង Asynchronous Programming

គោលបំណង: អនុវត្តការប្រើ Callbacks, Promises, និង Async/Await សម្រាប់ Asynchronous Operations។

1. **ប្រើ Callback**:
   * បង្កើត File \`example.txt\` ដែលមានខ្លឹមសារ "Hello, Node.js!"។
   * បង្កើត File \`read-callback.js\`:
     \`\`\`javascript
     const fs = require('fs');
     fs.readFile('example.txt', 'utf8', (err, data) => {
       if (err) console.error('Error:', err);
       else console.log('Content:', data);
     });
     console.log('Reading file...');
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node read-callback.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ "Reading file..." និង "Content: Hello, Node.js!"។

2. **ប្រើ Promise**:
   * បង្កើត File \`read-promise.js\`:
     \`\`\`javascript
     const fs = require('fs').promises;
     fs.readFile('example.txt', 'utf8')
       .then(data => console.log('Content:', data))
       .catch(err => console.error('Error:', err));
     console.log('Reading file...');
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node read-promise.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ "Reading file..." និង "Content: Hello, Node.js!"។

3. **ប្រើ Async/Await**:
   * បង្កើត File \`read-async.js\`:
     \`\`\`javascript
     const fs = require('fs').promises;
     async function readFile() {
       try {
         const data = await fs.readFile('example.txt', 'utf8');
         console.log('Content:', data);
       } catch (err) {
         console.error('Error:', err);
       }
     }
     readFile();
     console.log('Reading file...');
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node read-async.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ "Reading file..." និង "Content: Hello, Node.js!"។

4. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ \`read-callback.js\`, \`read-promise.js\`, និង \`read-async.js\`។
`,
    solution: `
# ដំណោះស្រាយ៖ Event Loop និង Asynchronous Programming

## ជំហានទី ១: ប្រើ Callback
* **read-callback.js**:
  \`\`\`javascript
  const fs = require('fs');
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) console.error('Error:', err);
    else console.log('Content:', data);
  });
  console.log('Reading file...');
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node read-callback.js
  # Output:
  Reading file...
  Content: Hello, Node.js!
  \`\`\`

## ជំហានទី ២: ប្រើ Promise
* **read-promise.js**:
  \`\`\`javascript
  const fs = require('fs').promises;
  fs.readFile('example.txt', 'utf8')
    .then(data => console.log('Content:', data))
    .catch(err => console.error('Error:', err));
  console.log('Reading file...');
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node read-promise.js
  # Output:
  Reading file...
  Content: Hello, Node.js!
  \`\`\`

## ជំហានទី ៣: ប្រើ Async/Await
* **read-async.js**:
  \`\`\`javascript
  const fs = require('fs').promises;
  async function readFile() {
    try {
      const data = await fs.readFile('example.txt', 'utf8');
      console.log('Content:', data);
    } catch (err) {
      console.error('Error:', err);
    }
  }
  readFile();
  console.log('Reading file...');
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node read-async.js
  # Output:
  Reading file...
  Content: Hello, Node.js!
  \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **read-callback.js**: "Reading file..." និង "Content: Hello, Node.js!"
* **read-promise.js**: "Reading file..." និង "Content: Hello, Node.js!"
* **read-async.js**: "Reading file..." និង "Content: Hello, Node.js!"
`
  }
};

export default NodeJSLesson2_3Content;