import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson1_3Content: LessonContent = {
  title: 'Node.js Global Objects និង Process',
  objectives: [
    'យល់ដឹងអំពី Global Objects នៅក្នុង Node.js',
    'ស្វែងយល់ពីការប្រើប្រាស់ `process` object នៅក្នុង Node.js',
    'ស្គាល់ Global Objects សំខាន់ៗដូចជា `console`, `setTimeout`, `setInterval`',
    'រៀនគ្រប់គ្រង Environment Variables និង Command-line Arguments',
    'អនុវត្តការប្រើ `process` ដើម្បីគ្រប់គ្រង Application Lifecycle'
  ],
  content: `
# Node.js Global Objects និង Process 🌐

---

## 1. តើ Global Objects ជាអ្វី? 🤔

* **និយមន័យ:** Global Objects គឺជា Objects ដែលអាចប្រើប្រាស់បានគ្រប់ទីកន្លែងនៅក្នុង Node.js ដោយមិនចាំបាច់ Import។ ពួកវាត្រូវបានផ្តល់ជូនដោយ Node.js Runtime Environment។
* **ឧទាហរណ៍ Global Objects:**
  * \`console\`: ប្រើសម្រាប់បង្ហាញ Output ទៅ Terminal។
  * \`setTimeout\`, \`setInterval\`: ប្រើសម្រាប់កំណត់ពេលវេលាក្នុងការប្រតិបត្តិ ។
  * \`process\`: ផ្តល់ព័ត៌មាន និងគ្រប់គ្រង Node.js Process។

---

## 2. ការយល់ដឹងអំពី \`process\` Object 💻

* **និយមន័យ:** \`process\` គឺជា Global Object ដែលផ្តល់នូវព័ត៌មាន និងគ្រប់គ្រង Node.js Process ដែលកំពុងដំណើរការ។
* **លក្ខណៈសំខាន់ៗ:**
  * **Environment Variables (\`process.env\`)**: អនុញ្ញាតឱ្យអាន និងកំណត់ Configuration ដូចជា \`.env\` ឬ System Variables។
  * **Command-line Arguments (\`process.argv\`)**: ទទួលបាន Arguments ដែលបញ្ជូននៅពេលដំណើរការ Node.js Script។
  * **Process Control (\`process.exit()\`)**: បញ្ឈប់ Process ដោយប្រើ Exit Code ។
  * **Standard I/O (\`process.stdin\`, \`process.stdout\`)**: គ្រប់គ្រង Input/Output Streams។

---

## 3. អត្ថប្រយោជន៍នៃ Global Objects និង \`process\` 🌟

* **ភាពងាយស្រួល:** Global Objects ដូចជា \`console\` និង \`setTimeout\` មិនតម្រូវឱ្យ Import។
* **គ្រប់គ្រង Application:** \`process\` ជួយគ្រប់គ្រង Runtime Environment និង Application Lifecycle។
* **ភាពបត់បែន:** អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ធ្វើការជាមួយ System-level Operations។

---

## 4. ការប្រើប្រាស់ \`process\` ជាមួយ Environment Variables ⚙️

* **Environment Variables** ជួយកំណត់ Configuration ដែលអាចប្រើបាននៅក្នុង Application។
* **ឧទាហរណ៍:** ប្រើ \`.env\` File ឬ Command-line Arguments ដើម្បីកំណត់ Port ឬ API Keys។

---

## 5. ការប្រើប្រាស់ Global Objects ផ្សេងទៀត ⏱️

* **setTimeout** និង **setInterval**: ប្រើសម្រាប់កំណត់ពេលវេលាក្នុងការប្រតិបត្តិ Functions។
* **__dirname** និង **__filename**: ផ្តល់ទីតាំងនៃ File ឬ Directory បច្ចុប្បន្ន។

---
> **គន្លឹះ:** ប្រើ \`process.env\` ដើម្បីគ្រប់គ្រង Configuration នៅក្នុង Application ដោយប្រើ \`.env\` File ដើម្បីភាពសុវត្ថិភាព។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ប្រើ \`console\` និង \`setTimeout\`

បង្កើត File ឈ្មោះ \`global.js\`:

\`\`\`javascript
console.log("Starting Node.js App...");

setTimeout(() => {
  console.log("This message appears after 2 seconds!");
}, 2000);
\`\`\`

ដំណើរការ File:

\`\`\`bash
node global.js
\`\`\`

**លទ្ធផល**:
\`\`\`
Starting Node.js App...
(This message appears after 2 seconds!)
This message appears after 2 seconds!
\`\`\`

# ឧទាហរណ៍ ២: ប្រើ \`process.argv\`

បង្កើត File ឈ្មោះ \`args.js\`:

\`\`\`javascript
console.log("Command-line Arguments:", process.argv);
\`\`\`

ដំណើរការ File ជាមួយ Arguments:

\`\`\`bash
node args.js --name John --age 25
\`\`\`

**លទ្ធផល**:
\`\`\`
Command-line Arguments: ['node', 'args.js', '--name', 'John', '--age', '25']
\`\`\`

# ឧទាហរណ៍ ៣: ប្រើ \`process.env\`

បង្កើត File ឈ្មោះ \`env.js\`:

\`\`\`javascript
console.log("Environment Variable PORT:", process.env.PORT);
\`\`\`

ដំណើរការ File ជាមួយ Environment Variable:

\`\`\`bash
PORT=3000 node env.js
\`\`\`

**លទ្ធផល**:
\`\`\`
Environment Variable PORT: 3000
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Global Object ណាមួយខាងក្រោមប្រើសម្រាប់បង្ហាញ Output ទៅ Terminal?',
      options: ['process', 'console', 'setTimeout', '__dirname'],
      correct: 1,
      explanation: '`console` ជា Global Object ដែលប្រើសម្រាប់បង្ហាញ Output ទៅ Terminal។'
    },
    {
      question: 'តើ `process.argv` ប្រើសម្រាប់អ្វី?',
      options: [
        'អាន Environment Variables',
        'ទទួល Command-line Arguments',
        'គ្រប់គ្រង Events',
        'កំណត់ Timer'
      ],
      correct: 1,
      explanation: '`process.argv` ប្រើសម្រាប់ទទួល Command-line Arguments ដែលបញ្ជូននៅពេលដំណើរការ Script។'
    },
    {
      question: 'តើ Global Object ណាមួយផ្តល់ទីតាំងនៃ File បច្ចុប្បន្ន?',
      options: ['__dirname', '__filename', 'process', 'console'],
      correct: 1,
      explanation: '`__filename` ផ្តល់ទីតាំងនៃ File បច្ចុប្បន្ន ខណៈ `__dirname` ផ្តល់ទីតាំងនៃ Directory។'
    },
    {
      question: 'តើ `process.exit()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ចាប់ផ្តើម Process',
        'បញ្ឈប់ Process',
        'អាន Input',
        'បង្កើត Timer'
      ],
      correct: 1,
      explanation: '`process.exit()` ប្រើសម្រាប់បញ្ឈប់ Node.js Process ដោយប្រើ Exit Code។'
    },
    {
      question: 'តើ Global Object ណាមួយប្រើសម្រាប់កំណត់ពេលវេលា?',
      options: ['console', 'process', 'setTimeout', '__filename'],
      correct: 2,
      explanation: '`setTimeout` និង `setInterval` ប្រើសម្រាប់កំណត់ពេលវេលាក្នុងការប្រតិបត្តិ Functions។'
    },
    {
      question: 'តើ `__dirname` ផ្តល់ព័ត៌មានអ្វី?',
      options: [
        'ទីតាំងនៃ File បច្ចុប្បន្ន',
        'ទីតាំងនៃ Directory បច្ចុប្បន្ន',
        'Command-line Arguments',
        'Environment Variables'
      ],
      correct: 1,
      explanation: '`__dirname` ផ្តល់ទីតាំងនៃ Directory បច្ចុប្បន្នដែល File កំពុងដំណើរការ។'
    },
    {
      question: 'តើ `process.env` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Command-line Arguments',
        'អាន និងកំណត់ Environment Variables',
        'បង្កើត Timer',
        'បង្ហាញ Output'
      ],
      correct: 1,
      explanation: '`process.env` ប្រើសម្រាប់អាន និងកំណត់ Environment Variables ដើម្បីគ្រប់គ្រង Configuration។'
    },
    {
      question: 'តើ Global Objects ក្នុង Node.js មានលក្ខណៈពិសេសអ្វី?',
      options: [
        'តម្រូវឱ្យ Import មុនពេលប្រើ',
        'អាចប្រើបានគ្រប់ទីកន្លែងដោយមិនចាំបាច់ Import',
        'មានតែនៅក្នុង Browser',
        'គ្រប់គ្រង Database'
      ],
      correct: 1,
      explanation: 'Global Objects អាចប្រើបានគ្រប់ទីកន្លែងនៅក្នុង Node.js ដោយមិនចាំបាច់ Import។'
    },
    {
      question: 'តើ `setInterval` ខុសពី `setTimeout` ដោយរបៀបណា?',
      options: [
        '`setInterval` ប្រតិបត្តិ Function ម្តងគត់, `setTimeout` ប្រតិបត្តិច្រើនដង',
        '`setInterval` ប្រតិបត្តិ Function ច្រើនដង, `setTimeout` ប្រតិបត្តិម្តងគត់',
        'ទាំងពីរប្រតិបត្តិ Function ច្រើនដង',
        'ទាំងពីរប្រើសម្រាប់ Input/Output'
      ],
      correct: 1,
      explanation: '`setInterval` ប្រតិបត្តិ Function ច្រើនដងជាប្រចាំ, ខណៈ `setTimeout` ប្រតិបត្តិម្តងគត់បន្ទាប់ពី Delay។'
    },
    {
      question: 'តើ `process.stdout` ប្រើសម្រាប់អ្វី?',
      options: [
        'អាន Input ពី User',
        'បង្ហាញ Output ទៅ Terminal',
        'គ្រប់គ្រង Environment Variables',
        'បញ្ឈប់ Process'
      ],
      correct: 1,
      explanation: '`process.stdout` ប្រើសម្រាប់បង្ហាញ Output ទៅ Terminal ជា Standard Output Stream។'
    },
    {
      question: 'តើ Exit Code នៅក្នុង `process.exit(0)` មានន័យដូចម្តេច?',
      options: [
        'Process បរាជ័យ',
        'Process បញ្ចប់ដោយជោ Hawkins',
        'Process បញ្ចប់ដោយជោគជ័យ',
        'Process កំពុងដំណើរការ'
      ],
      correct: 2,
      explanation: '`process.exit(0)` បញ្ចប់ Process ដោយបង្ហាញថាវាបញ្ចប់ដោយជោគជ័យ, ខណៈ Exit Code ផ្សេងទៀត (ឧ. 1) បង្ហាញពី Error។'
    },
    {
      question: 'តើ Global Object ណាមួយប្រើសម្រាប់គ្រប់គ្រង Input Stream?',
      options: ['console', 'setTimeout', 'process.stdin', '__filename'],
      correct: 2,
      explanation: '`process.stdin` ប្រើសម្រាប់គ្រប់គ្រង Input Stream ពី User ទៅកាន់ Node.js Process។'
    },
    {
      question: 'តើ Environment Variables មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'បង្កើត Timer',
        'គ្រប់គ្រង Application Configuration',
        'បង្ហាញ Output',
        'គ្រប់គ្រង Events'
      ],
      correct: 1,
      explanation: 'Environment Variables ប្រើសម្រាប់គ្រប់គ្រង Application Configuration ដូចជា Port ឬ API Keys។'
    },
    {
      question: 'តើ Command-line Arguments នៅក្នុង `process.argv` ចាប់ផ្តើមពី Index ណា?',
      options: [
        '0',
        '1',
        '2',
        '3'
      ],
      correct: 2,
      explanation: '`process.argv` ចាប់ផ្តើម Command-line Arguments ពី Index 2 ព្រោះ Index 0 និង 1 គឺជា Path នៃ Node.js និង Script។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: ប្រើ Global Objects និង \`process\`

គោលបំណង: អនុវត្តការប្រើ Global Objects និង \`process\` ដើម្បីគ្រប់គ្រង Command-line Arguments និង Environment Variables។

1. **បង្កើត File JavaScript**:
   * បង្កើត File ឈ្មោះ \`greet.js\`។
   * បញ្ចូល Code ដើម្បីអាន Command-line Argument (\`--name\`) និងបង្ហាញសារ៖
     \`\`\`javascript
     const name = process.argv[2] ? process.argv[2] : 'Guest';
     console.log(\`Hello, \${name}!\`);
     \`\`\`

2. **ដំណើរការ File**:
   * ដំណើរការ File ជាមួយ Argument:
     \`\`\`bash
     node greet.js John
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ គួរឃើញ "Hello, John!"។
   * បើគ្មាន Argument:
     \`\`\`bash
     node greet.js
     \`\`\`
   * លទ្ធផលគួរជា "Hello, Guest!"។

3. **ប្រើ \`process.env\`**:
   * បង្កើត File ឈ្មោះ \`config.js\`។
   * បញ្ចូល Code ដើម្បីអាន Environment Variable \`PORT\`:
     \`\`\`javascript
     const port = process.env.PORT || 3000;
     console.log(\`Server will run on port: \${port}\`);
     \`\`\`
   * ដំណើរការ File ជាមួយ Environment Variable:
     \`\`\`bash
     PORT=8080 node config.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ គួរឃើញ "Server will run on port: 8080"។

4. **ប្រើ \`setTimeout\`**:
   * បង្កើត File ឈ្មោះ \`timer.js\`។
   * បញ្ចូល Code ដើម្បីបង្ហាញសារបន្ទាប់ពី 3 វិនាទី:
     \`\`\`javascript
     console.log("Starting Timer...");
     setTimeout(() => {
       console.log("Timer finished after 3 seconds!");
     }, 3000);
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node timer.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល។

5. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ \`greet.js\`, \`config.js\`, និង \`timer.js\`។
`,
    solution: `
# ដំណោះស្រាយ៖ ប្រើ Global Objects និង \`process\`

## ជំហានទី ១: បង្កើត File \`greet.js\`
* Code:
  \`\`\`javascript
  const name = process.argv[2] ? process.argv[2] : 'Guest';
  console.log(\`Hello, \${name}!\`);
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node greet.js John
  # Output: Hello, John!
  node greet.js
  # Output: Hello, Guest!
  \`\`\`

## ជំហានទី ២: បង្កើត File \`config.js\`
* Code:
  \`\`\`javascript
  const port = process.env.PORT || 3000;
  console.log(\`Server will run on port: \${port}\`);
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  PORT=8080 node config.js
  # Output: Server will run on port: 8080
  node config.js
  # Output: Server will run on port: 3000
  \`\`\`

## ជំហានទី ៣: បង្កើត File \`timer.js\`
* Code:
  \`\`\`javascript
  console.log("Starting Timer...");
  setTimeout(() => {
    console.log("Timer finished after 3 seconds!");
  }, 3000);
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node timer.js
  # Output:
  Starting Timer...
  (After 3 seconds)
  Timer finished after 3 seconds!
  \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **greet.js**: "Hello, John!" និង "Hello, Guest!"
* **config.js**: "Server will run on port: 8080" និង "Server will run on port: 3000"
* **timer.js**: "Timer finished after 3 seconds!"
`
  }
};

export default NodeJSLesson1_3Content;