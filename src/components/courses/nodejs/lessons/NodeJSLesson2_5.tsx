import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson2_5Content: LessonContent = {
  title: 'Path Module និង OS Module',
  objectives: [
    'យល់ដឹងអំពី `path` Module នៅក្នុង Node.js',
    'ស្វែងយល់ពី `os` Module និងការប្រើប្រាស់របស់វា',
    'រៀនគ្រប់គ្រង File Paths ជាមួយ `path` Module',
    'រៀនទាញយកព័ត៌មាន System ជាមួយ `os` Module',
    'អនុវត្តការប្រើ `path` និង `os` ក្នុងកម្មវិធី'
  ],
  content: `
# Path Module និង OS Module 🛤️💻

---

## 1. តើ \`path\` Module ជាអ្វី? 🤔

* **និយមន័យ:** \`path\` Module គឺជា Core Module នៅក្នុង Node.js ដែលប្រើសម្រាប់គ្រប់គ្រង File Paths ដោយគាំទ្រទាំង Windows និង Unix-based Systems។
* **មុខងារសំខាន់ៗ:**
  * \`path.join()\`: បញ្ចូល Paths ជាមួយគ្នា។
  * \`path.resolve()\`: បង្កើត Absolute Path។
  * \`path.basename()\`: ទាញយកឈ្មោះ File។
  * \`path.dirname()\`: ទាញយក Directory Path។
  * \`path.extname()\`: ទាញយក File Extension។

---

## 2. តើ \`os\` Module ជាអ្វី? 💾

* **និយមន័យ:** \`os\` (Operating System) Module គឺជា Core Module ដែលផ្តល់ព័ត៌មានអំពី System ដែល Node.js កំពុងដំណើរការ។
* **មុខងារសំខាន់ៗ:**
  * \`os.platform()\`: បង្ហាញប្រភេទ OS (ឧ. 'win32', 'linux')។
  * \`os.cpus()\`: ផ្តល់ព័ត៌មានអំពី CPU Cores។
  * \`os.totalmem()\`: បង្ហាញទំហំ RAM សរុប។
  * \`os.freemem()\`: បង្ហាញទំហំ RAM ទំនេរ។
  * \`os.homedir()\`: បង្ហាញទីតាំង Home Directory។

---

## 3. អត្ថប្រយោជន៍នៃ \`path\` និង \`os\` Modules 🌟

* **Path Module:**
  * ធានាភាពឆបគ្នានៃ File Paths លើ Platforms ផ្សេងៗ។
  * កាត់បន្ថយ Errors នៅពេលធ្វើការជាមួយ File System ។
* **OS Module:**
  * ផ្តល់ព័ត៌មាន System សម្រាប់ Configuration ឬ Monitoring។
  * ជួយបង្កើត Applications ដែលអាស្រ័យលើ System។

---

## 4. ការប្រើ \`path\` និង \`os\` ក្នុងកម្មវិធី ⚙️

* **Path:** ប្រើសម្រាប់បង្កើត Paths ដែលអាចប្រើបានគ្រប់ Platforms (ឧ. ការអាន Files ឬបង្កើត Directories)។
* **OS:** ប្រើសម្រាប់ទាញយកព័ត៌មាន System ដូចជា CPU Usage ឬ Memory Status។

---

## 5. ឧទាហរណ៍ជាក់ស្តែង 📂

* **Path Module:** បង្កើត File Paths សម្រាប់ការអាន/សរសេរ Files។
* **OS Module:** បង្ហាញ System Information នៅក្នុង Admin Dashboard។

---
> **គន្លឹះ:** ប្រើ \`path.join()\` ជំនួសការបញ្ចូល Paths ដោយខ្លួនឯង (ឧ. '/folder/file') ដើម្បីធានាភាពឆបគ្នាលើ Platforms។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: ប្រើ \`path\` Module

បង្កើត File ឈ្មោះ \`path-example.js\`:

\`\`\`javascript
const path = require('path');
console.log('Joined Path:', path.join('folder', 'subfolder', 'file.txt'));
console.log('Absolute Path:', path.resolve('file.txt'));
console.log('Basename:', path.basename('/folder/file.txt'));
console.log('Dirname:', path.dirname('/folder/file.txt'));
console.log('Extension:', path.extname('file.txt'));
\`\`\`

ដំណើរការ File:

\`\`\`bash
node path-example.js
\`\`\`

**លទ្ធផល**:
\`\`\`
Joined Path: folder/subfolder/file.txt
Absolute Path: /current/directory/file.txt
Basename: file.txt
Dirname: /folder
Extension: .txt
\`\`\`

# ឧទាហរណ៍ ២: ប្រើ \`os\` Module

បង្កើត File ឈ្មោះ \`os-example.js\`:

\`\`\`javascript
const os = require('os');
console.log('Platform:', os.platform());
console.log('CPU Cores:', os.cpus().length);
console.log('Total Memory:', os.totalmem() / (1024 ** 3), 'GB');
console.log('Free Memory:', os.freemem() / (1024 ** 3), 'GB');
console.log('Home Directory:', os.homedir());
\`\`\`

ដំណើរការ File:

\`\`\`bash
node os-example.js
\`\`\`

**លទ្ធផល**:
\`\`\`
Platform: linux
CPU Cores: 4
Total Memory: 8 GB
Free Memory: 3.5 GB
Home Directory: /home/user
\`\`\`

# ឧទាហរណ៍ ៣: បញ្ចូល \`path\` និង \`fs\` Module

បង្កើត File ឈ្មោះ \`path-fs.js\`:

\`\`\`javascript
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'output.txt');
fs.writeFileSync(filePath, 'Hello, Node.js!');
console.log('File written to:', filePath);
\`\`\`

ដំណើរការ File:

\`\`\`bash
node path-fs.js
\`\`\`

**លទ្ធផល**:
\`\`\`
File written to: /current/directory/output.txt
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ `path` Module ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង System Memory',
        'គ្រប់គ្រង File Paths',
        'បង្កើត Web Servers',
        'គ្រប់គ្រង Database'
      ],
      correct: 1,
      explanation: '`path` Module ប្រើសម្រាប់គ្រប់គ្រង File Paths ដោយគាំទ្រទាំង Windows និង Unix-based Systems។'
    },
    {
      question: 'តើ `os` Module ផ្តល់ព័ត៌មានអ្វី?',
      options: [
        'File Paths',
        'System Information ដូចជា CPU និង Memory',
        'HTTP Requests',
        'Database Connections'
      ],
      correct: 1,
      explanation: '`os` Module ផ្តល់ព័ត៌មានអំពី System ដូចជា Platform, CPU, និង Memory។'
    },
    {
      question: 'តើ `path.join()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញយក File Extension',
        'បញ្ចូល Paths ជាមួយគ្នា',
        'បង្កើត Absolute Path',
        'ទាញយក Directory Name'
      ],
      correct: 1,
      explanation: '`path.join()` បញ្ចូល Paths ជាមួយគ្នាដោយប្រើ Path Separator សមស្របតាម Platform។'
    },
    {
      question: 'តើ `path.resolve()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ចូល Paths ជាមួយគ្នា',
        'បង្កើត Absolute Path',
        'ទាញយក File Name',
        'ទាញយក File Extension'
      ],
      correct: 1,
      explanation: '`path.resolve()` បង្កើត Absolute Path ដោយផ្អែកលើ Current Directory។'
    },
    {
      question: 'តើ `os.platform()` បង្ហាញអ្វី?',
      options: [
        'ទំហំ RAM ទំនេរ',
        'ប្រភេទ Operating System',
        'ទីតាំង File',
        'File Extension'
      ],
      correct: 1,
      explanation: '`os.platform()` បង្ហាញប្រភេទ OS ដូចជា "win32" ឬ "linux"។'
    },
    {
      question: 'តើ `path.basename()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញយក Directory Path',
        'ទាញយក File Name',
        'បង្កើត Absolute Path',
        'បញ្ចូល Paths'
      ],
      correct: 1,
      explanation: '`path.basename()` ទាញយកឈ្មោះ File ពី Path។'
    },
    {
      question: 'តើ `os.totalmem()` បង្ហាញអ្វី?',
      options: [
        'ទំហំ RAM សរុប',
        'ទំហំ RAM ទំនេរ',
        'ចំនួន CPU Cores',
        'Home Directory'
      ],
      correct: 0,
      explanation: '`os.totalmem()` បង្ហាញទំហំ RAM សរុបនៅក្នុង System។'
    },
    {
      question: 'តើ `path.extname()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញយក File Extension',
        'ទាញយក Directory Name',
        'បញ្ចូល Paths',
        'បង្កើត Absolute Path'
      ],
      correct: 0,
      explanation: '`path.extname()` ទាញយក File Extension ដូចជា ".txt" ឬ ".js"។'
    },
    {
      question: 'តើ `os.homedir()` បង្ហាញអ្វី?',
      options: [
        'ទីតាំង Current Directory',
        'ទីតាំង Home Directory',
        'ទំហំ RAM ទំនេរ',
        'ប្រភេទ OS'
      ],
      correct: 1,
      explanation: '`os.homedir()` បង្ហាញទីតាំង Home Directory របស់ User។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃ `path` Module?',
      options: [
        'គ្រប់គ្រង Database',
        'ធានាភាពឆបគ្នានៃ File Paths លើ Platforms',
        'បង្កើត Web Servers',
        'គ្រប់គ្រង System Memory'
      ],
      correct: 1,
      explanation: '`path` Module ធានាភាពឆបគ្នានៃ File Paths លើ Platforms ផ្សេងៗ។'
    },
    {
      question: 'តើ `os.cpus()` ផ្តល់ព័ត៌មានអ្វី?',
      options: [
        'ទំហំ RAM សរុប',
        'ព័ត៌មានអំពី CPU Cores',
        'File Paths',
        'Platform Type'
      ],
      correct: 1,
      explanation: '`os.cpus()` ផ្តល់ព័ត៌មានអំពី CPU Cores ដូចជា ចំនួន និង Model។'
    },
    {
      question: 'តើ Method ណាមួយខាងក្រោមជា `path` Module?',
      options: ['path.join()', 'os.platform()', 'fs.readFile()', 'http.createServer()'],
      correct: 0,
      explanation: '`path.join()` ជា Method នៃ `path` Module សម្រាប់បញ្ចូល Paths។'
    },
    {
      question: 'តើឧទាហរណ៍ណាមួយខាងក្រោមប្រើ `path` Module?',
      options: [
        'បង្កើត HTTP Server',
        'បង្កើត File Path សម្រាប់ File Writing',
        'ទាញយក Database Records',
        'គ្រប់គ្រង System Memory'
      ],
      correct: 1,
      explanation: 'បង្កើត File Path សម្រាប់ File Writing ជាការប្រើ `path` Module។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: Path Module និង OS Module

គោលបំណង: អនុវត្តការប្រើ \`path\` និង \`os\` Modules ដើម្បីគ្រប់គ្រង File Paths និងទាញយក System Information។

1. **ប្រើ \`path\` Module**:
   * បង្កើត File \`path-ops.js\`:
     \`\`\`javascript
     const path = require('path');
     const filePath = path.join('data', 'logs', 'app.log');
     console.log('Joined Path:', filePath);
     console.log('Absolute Path:', path.resolve('app.log'));
     console.log('Basename:', path.basename(filePath));
     console.log('Dirname:', path.dirname(filePath));
     console.log('Extension:', path.extname(filePath));
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node path-ops.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល។

2. **ប្រើ \`os\` Module**:
   * បង្កើត File \`os-ops.js\`:
     \`\`\`javascript
     const os = require('os');
     console.log('Platform:', os.platform());
     console.log('CPU Cores:', os.cpus().length);
     console.log('Total Memory:', (os.totalmem() / (1024 ** 3)).toFixed(2), 'GB');
     console.log('Free Memory:', (os.freemem() / (1024 ** 3)).toFixed(2), 'GB');
     console.log('Home Directory:', os.homedir());
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node os-ops.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល។

3. **បញ្ចូល \`path\` និង \`fs\` Module**:
   * បង្កើត File \`path-fs-ops.js\`:
     \`\`\`javascript
     const fs = require('fs');
     const path = require('path');
     const filePath = path.join(__dirname, 'logs', 'system.log');
     fs.mkdirSync(path.dirname(filePath), { recursive: true });
     fs.writeFileSync(filePath, \`System Platform: \${process.platform}\`);
     console.log('Log written to:', filePath);
     \`\`\`
   * ដំណើរការ File:
     \`\`\`bash
     node path-fs-ops.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល៖ File \`system.log\` នៅក្នុង Folder \`logs\`។

4. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ \`path-ops.js\`, \`os-ops.js\`, និង \`path-fs-ops.js\`។
`,
    solution: `
# ដំណោះស្រាយ៖ Path Module និង OS Module

## ជំហានទី ១: ប្រើ \`path\` Module
* **path-ops.js**:
  \`\`\`javascript
  const path = require('path');
  const filePath = path.join('data', 'logs', 'app.log');
  console.log('Joined Path:', filePath);
  console.log('Absolute Path:', path.resolve('app.log'));
  console.log('Basename:', path.basename(filePath));
  console.log('Dirname:', path.dirname(filePath));
  console.log('Extension:', path.extname(filePath));
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node path-ops.js
  # Output:
  Joined Path: data/logs/app.log
  Absolute Path: /current/directory/app.log
  Basename: app.log
  Dirname: data/logs
  Extension: .log
  \`\`\`

## ជំហានទី ២: ប្រើ \`os\` Module
* **os-ops.js**:
  \`\`\`javascript
  const os = require('os');
  console.log('Platform:', os.platform());
  console.log('CPU Cores:', os.cpus().length);
  console.log('Total Memory:', (os.totalmem() / (1024 ** 3)).toFixed(2), 'GB');
  console.log('Free Memory:', (os.freemem() / (1024 ** 3)).toFixed(2), 'GB');
  console.log('Home Directory:', os.homedir());
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node os-ops.js
  # Output:
  Platform: linux
  CPU Cores: 4
  Total Memory: 8.00 GB
  Free Memory: 3.50 GB
  Home Directory: /home/user
  \`\`\`

## ជំហានទី ៣: បញ្ចូល \`path\` និង \`fs\` Module
* **path-fs-ops.js**:
  \`\`\`javascript
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(__dirname, 'logs', 'system.log');
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, \`System Platform: \${process.platform}\`);
  console.log('Log written to:', filePath);
  \`\`\`
* លទ្ធផល:
  \`\`\`bash
  node path-fs-ops.js
  # Output:
  Log written to: /current/directory/logs/system.log
  \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **path-ops.js**: Paths ត្រឹមត្រូវសម្រាប់ \`join\`, \`resolve\`, \`basename\`, \`dirname\`, និង \`extname\`។
* **os-ops.js**: System Information ដូចជា Platform, CPU Cores, Memory, និង Home Directory។
* **path-fs-ops.js**: File \`system.log\` ត្រូវបានបង្កើតនៅក្នុង Folder \`logs\`។
`
  }
};

export default NodeJSLesson2_5Content;