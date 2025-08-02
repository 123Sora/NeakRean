// src/components/lessons/tailwind/TailwindLesson1_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const TailwindLesson1_2Content: LessonContent = {
  title: 'ការដំឡើង និងចាប់ផ្តើមប្រើប្រាស់ Tailwind CSS',
  objectives: [
    'យល់ដឹងពីតម្រូវការជាមុនសម្រាប់ការដំឡើង Tailwind CSS (Node.js, npm/yarn)',
    'របៀបដំឡើង Tailwind CSS ក្នុង Project (Using PostCSS, CLI, Vite, Next.js, etc.)',
    'ការបង្កើត File tailwind.config.js និង postcss.config.js',
    'ការភ្ជាប់ Tailwind CSS ទៅក្នុង File CSS មេ (@tailwind base;, @tailwind components;, @tailwind utilities;)',
    'របៀប Compile CSS (npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch)'
  ],
  content: `
# ការដំឡើង និងចាប់ផ្តើមប្រើប្រាស់ Tailwind CSS 🛠️

---

ដើម្បីប្រើប្រាស់ Tailwind CSS នៅក្នុង Project របស់អ្នក អ្នកត្រូវដំឡើងវាជា Package npm ។ នេះជាការណែនាំលម្អិតអំពីរបៀបដំឡើង និងចាប់ផ្តើមប្រើប្រាស់វា។

---

## 1. តម្រូវការជាមុន (Prerequisites) 📋

មុនពេលដំឡើង Tailwind CSS អ្នកត្រូវប្រាកដថាអ្នកមាន Tools ទាំងនេះដំឡើងនៅក្នុងកុំព្យូទ័ររបស់អ្នក៖

* **Node.js:** Tailwind CSS ត្រូវបានបង្កើតឡើងដោយប្រើ Node.js ។ អ្នកអាចទាញយកវាពី [nodejs.org](https://nodejs.org/) ។
* **npm (Node Package Manager) ឬ Yarn:** ទាំងនេះគឺជា Package Managers ដែលភ្ជាប់មកជាមួយ Node.js ។ យើងនឹងប្រើ \`npm\` នៅក្នុងមេរៀននេះ។

ដើម្បីពិនិត្យមើលថាអ្នកមាន Node.js និង npm ដំឡើងហើយឬនៅ សូមបើក **Command Prompt** (Windows) ឬ **Terminal** (macOS/Linux) ហើយវាយពាក្យបញ្ជាខាងក្រោម៖

\`\`\`bash
node -v
npm -v
\`\`\`
ប្រសិនបើវាបង្ហាញ Version Number នោះមានន័យថាអ្នកបានដំឡើងវាហើយ។

---

## 2. របៀបដំឡើង Tailwind CSS ក្នុង Project 🚀

យើងនឹងប្រើវិធីសាស្ត្រដំឡើង **Tailwind CSS CLI (Command Line Interface)** ដែលជាវិធីសាស្ត្រងាយស្រួលបំផុតសម្រាប់ Project ថ្មី។

### ជំហានទី ១: បង្កើត Project ថ្មី និង Initialize npm

បង្កើត Folder ថ្មីសម្រាប់ Project របស់អ្នក ហើយចូលទៅក្នុង Folder នោះនៅក្នុង Terminal ។

\`\`\`bash
mkdir my-tailwind-project
cd my-tailwind-project
npm init -y # Initialize a new npm project
\`\`\`

### ជំហានទី ២: ដំឡើង Tailwind CSS

ដំឡើង **Tailwind CSS**, **PostCSS** និង **Autoprefixer** ជា Development Dependencies ។

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
\`\`\`
* **tailwindcss:** Core Tailwind CSS Library ។
* **postcss:** Tool សម្រាប់ Transform CSS ជាមួយ JavaScript Plugins ។ Tailwind ត្រូវបានបង្កើតឡើងជា PostCSS Plugin ។
* **autoprefixer:** PostCSS Plugin ដែលបន្ថែម Vendor Prefixes ទៅ CSS របស់អ្នកដោយស្វ័យប្រវត្តិ។

### ជំហានទី ៣: បង្កើត File Configuration

បង្កើត File \`tailwind.config.js\` និង \`postcss.config.js\` ។

\`\`\`bash
npx tailwindcss init -p
\`\`\`
ពាក្យបញ្ជានេះនឹងបង្កើត Files ពីរ៖
* \`tailwind.config.js\`: សម្រាប់កំណត់រចនាសម្ព័ន្ធ Tailwind CSS (Colors, Fonts, Spacing, Breakpoints ។ល។) ។
* \`postcss.config.js\`: សម្រាប់កំណត់រចនាសម្ព័ន្ធ PostCSS Plugins ។

---

## 3. ការកំណត់រចនាសម្ព័ន្ធ File \`tailwind.config.js\` និង \`postcss.config.js\` ⚙️

### \`tailwind.config.js\`
បើក File \`tailwind.config.js\` ។ អ្នកត្រូវកំណត់ \`content\` Array ដើម្បីប្រាប់ Tailwind ថាត្រូវស្កេន Files ណាខ្លះសម្រាប់ Classes ដែលបានប្រើប្រាស់ (សម្រាប់ **Purging CSS** ដែលមិនចាំបាច់) ។

\`\`\`javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Scan all HTML, JS, TS, JSX, TSX files in src folder
    "./*.html", // Scan HTML files in the root directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`
* \`content\`: នេះជាកន្លែងសំខាន់បំផុត។ វាប្រាប់ Tailwind ថាត្រូវស្កេន Files ណាខ្លះដើម្បីរក Classes ដែលអ្នកកំពុងប្រើ។ បើមិនកំណត់ត្រឹមត្រូវទេ Tailwind នឹង Purge Classes ដែលអ្នកត្រូវការ។

### \`postcss.config.js\`
File នេះជាធម្មតាមិនចាំបាច់កែប្រែទេ ប្រសិនបើអ្នកទើបតែចាប់ផ្តើម។ វាគួរតែមានលក្ខណៈដូចនេះ៖

\`\`\`javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
\`\`\`

---

## 4. ការភ្ជាប់ Tailwind CSS ទៅក្នុង File CSS មេ 🔗

បង្កើត File CSS មេមួយ (ឧទាហរណ៍៖ \`src/input.css\`) ហើយបន្ថែម **Directives** របស់ Tailwind ទៅក្នុងវា។

\`\`\`css
/* src/input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`
* \`@tailwind base;\`: បញ្ចូល Tailwind's Base Styles (CSS Reset) ។
* \`@tailwind components;\`: បញ្ចូល Tailwind's Component Classes (ប្រសិនបើអ្នកប្រើ \`@apply\` ឬ Plugins) ។
* \`@tailwind utilities;\`: បញ្ចូល Tailwind's Utility Classes ទាំងអស់។

---

## 5. របៀប Compile CSS 📦

ដើម្បីឱ្យ Tailwind CSS Classes ដំណើរការ អ្នកត្រូវ **Compile File CSS** មេរបស់អ្នកទៅជា Output CSS File ។

\`\`\`bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
\`\`\`
* \`npx tailwindcss\`: ដំណើរការ Tailwind CSS CLI ។
* \`-i ./src/input.css\`: កំណត់ Input File (File CSS មេរបស់អ្នក) ។
* \`-o ./dist/output.css\`: កំណត់ Output File (File CSS ដែលបាន Compile) ។
* \`--watch\`: តាមដានការផ្លាស់ប្តូរនៅក្នុង Source Files របស់អ្នក ហើយ Compile ឡើងវិញដោយស្វ័យប្រវត្តិ។

បន្ទាប់ពី Compile រួច អ្នកអាចភ្ជាប់ File \`dist/output.css\` ទៅក្នុង HTML របស់អ្នក៖

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Tailwind Project</title>
  <link href="./dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការដំឡើង Tailwind CSS (HTML)</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីរបៀបដែល Project Structure គួរតែមើលទៅបន្ទាប់ពីការដំឡើង Tailwind CSS ។</p>
<p><strong>Project Structure:</strong></p>
<pre><code class="language-bash">
my-tailwind-project/
├── node_modules/
├── dist/
│   └── output.css
├── src/
│   └── input.css
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
└── postcss.config.js
</code></pre>

<p><strong>\`src/input.css\` Content:</strong></p>
<pre><code class="language-css">
/* src/input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
</code></pre>

<p><strong>\`tailwind.config.js\` Content:</strong></p>
<pre><code class="language-javascript">
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
</code></pre>

<p><strong>\`index.html\` Content:</strong></p>
<pre><code class="language-html">
&lt;!DOCTYPE html&gt;
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind Setup Example</title>
    <link href="./dist/output.css" rel="stylesheet">
</head>
<body>

    <div class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 class="text-3xl font-bold underline text-blue-600 text-center mt-10">
            ជំរាបសួរពិភពលោក!
        </h1>
        <p class="text-center text-gray-700 mt-4">
            នេះជាអត្ថបទដែលរចនាម៉ូតដោយ Tailwind CSS ។
        </p>
    </div>

</body>
</html>
</code></pre>

<p><strong>Command to Compile CSS:</strong></p>
<pre><code class="language-bash">
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Package Manager មួយណាដែលត្រូវបានប្រើដើម្បីដំឡើង Tailwind CSS?',
      options: ['`pip`', '`composer`', '`npm` ឬ `yarn`', '`gem`'],
      correct: 2,
      explanation: '`npm` ឬ `yarn` គឺជា Package Managers ដែលត្រូវបានប្រើដើម្បីដំឡើង Tailwind CSS ។'
    },
    {
      question: 'តើពាក្យបញ្ជា `npx tailwindcss init -p` ធ្វើអ្វី?',
      options: [
        'ដំឡើង Tailwind CSS',
        'Compile CSS File',
        'បង្កើត File `tailwind.config.js` និង `postcss.config.js`',
        'លុប Project Tailwind CSS'
      ],
      correct: 2,
      explanation: 'ពាក្យបញ្ជា `npx tailwindcss init -p` បង្កើត File `tailwind.config.js` និង `postcss.config.js` ។'
    },
    {
      question: 'តើ Directives ទាំងបីណាដែលត្រូវតែមាននៅក្នុង File CSS មេរបស់អ្នកដើម្បីភ្ជាប់ Tailwind CSS?',
      options: [
        '`@import`, `@font-face`, `@media`',
        '`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`',
        '`@include`, `@mixin`, `@function`',
        '`@css`, `@html`, `@js`'
      ],
      correct: 1,
      explanation: 'Directives ទាំងបីគឺ `@tailwind base;`, `@tailwind components;`, និង `@tailwind utilities;` ។'
    },
    {
      question: 'តើ `content` Array នៅក្នុង `tailwind.config.js` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ Colors ផ្ទាល់ខ្លួន',
        'ដើម្បីកំណត់ Font Families ផ្ទាល់ខ្លួន',
        'ដើម្បីប្រាប់ Tailwind ថាត្រូវស្កេន Files ណាខ្លះសម្រាប់ Classes ដែលបានប្រើប្រាស់ (សម្រាប់ Purging)',
        'ដើម្បីកំណត់ Plugins'
      ],
      correct: 2,
      explanation: '`content` Array ត្រូវបានប្រើដើម្បីប្រាប់ Tailwind ថាត្រូវស្កេន Files ណាខ្លះសម្រាប់ Classes ដែលបានប្រើប្រាស់ (សម្រាប់ Purging CSS ដែលមិនចាំបាច់) ។'
    },
    {
      question: 'តើពាក្យបញ្ជា `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch` ធ្វើអ្វី?',
      options: [
        'ដំឡើង Tailwind CSS',
        'បង្កើត File Configuration',
        'Compile CSS File និងតាមដានការផ្លាស់ប្តូរ',
        'លុប CSS File'
      ],
      correct: 2,
      explanation: 'ពាក្យបញ្ជានេះ Compile File CSS មេទៅជា Output CSS File ហើយ `—watch` តាមដានការផ្លាស់ប្តូរដើម្បី Compile ឡើងវិញដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ `autoprefixer` គឺជាអ្វីនៅក្នុងបរិបទនៃការដំឡើង Tailwind CSS?',
      options: [
        'ជា CSS Preprocessor',
        'ជា JavaScript Library',
        'ជា PostCSS Plugin ដែលបន្ថែម Vendor Prefixes',
        'ជា Web Server'
      ],
      correct: 2,
      explanation: '`autoprefixer` គឺជា PostCSS Plugin ដែលបន្ថែម Vendor Prefixes ទៅ CSS របស់អ្នកដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ File `postcss.config.js` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'សម្រាប់កំណត់រចនាសម្ព័ន្ធ Tailwind CSS',
        'សម្រាប់កំណត់រចនាសម្ព័ន្ធ PostCSS Plugins',
        'សម្រាប់កំណត់រចនាសម្ព័ន្ធ JavaScript',
        'សម្រាប់កំណត់រចនាសម្ព័ន្ធ HTML'
      ],
      correct: 1,
      explanation: 'File `postcss.config.js` ត្រូវបានប្រើសម្រាប់កំណត់រចនាសម្ព័ន្ធ PostCSS Plugins ។'
    },
    {
      question: 'តើវាចាំបាច់ក្នុងការដំឡើង Node.js មុនពេលដំឡើង Tailwind CSS ដែរឬទេ?',
      options: ['ទេ មិនចាំបាច់ទេ', 'បាទ/ចាស ព្រោះ Tailwind CSS ត្រូវបានបង្កើតឡើងដោយប្រើ Node.js', 'បានតែសម្រាប់ Production', 'បានតែសម្រាប់ Development'],
      correct: 1,
      explanation: 'បាទ/ចាស វាចាំបាច់ក្នុងការដំឡើង Node.js ព្រោះ Tailwind CSS ត្រូវបានបង្កើតឡើងដោយប្រើ Node.js ។'
    },
    {
      question: 'តើ File `dist/output.css` ត្រូវបានបង្កើតឡើងដោយរបៀបណា?',
      options: [
        'ដោយការសរសេរ CSS ដោយផ្ទាល់',
        'ដោយការ Compile File CSS មេដោយ Tailwind CLI',
        'ដោយការទាញយកពី CDN',
        'ដោយការប្រើប្រាស់ JavaScript'
      ],
      correct: 1,
      explanation: 'File `dist/output.css` ត្រូវបានបង្កើតឡើងដោយការ Compile File CSS មេដោយ Tailwind CLI ។'
    },
    {
      question: 'តើ `npm init -y` ធ្វើអ្វី?',
      options: [
        'ដំឡើង Dependencies',
        'បង្កើត Folder ថ្មី',
        'Initialize Project npm ថ្មីដោយគ្មានសំណួរ',
        'Compile CSS'
      ],
      correct: 2,
      explanation: '`npm init -y` Initialize Project npm ថ្មីដោយគ្មានសំណួរ (ឆ្លើយ `yes` ទៅគ្រប់សំណួរ) ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ អនុវត្តន៍ការដំឡើង Tailwind CSS

អនុវត្តន៍ជំហានដំឡើង Tailwind CSS នៅក្នុង Project ថ្មីមួយ។

1.  បង្កើត Folder ថ្មីមួយឈ្មោះ \`tailwind-lab-project\` ។
2.  ចូលទៅក្នុង Folder នោះនៅក្នុង Terminal ។
3.  Initialize Project npm ។
4.  ដំឡើង Tailwind CSS, PostCSS, និង Autoprefixer ជា Development Dependencies ។
5.  បង្កើត File \`tailwind.config.js\` និង \`postcss.config.js\` ។
6.  កែសម្រួល File \`tailwind.config.js\` ដើម្បីកំណត់ \`content\` Array ឱ្យស្កេន \`./*.html\` និង \`./src/**/*.css\` ។
7.  បង្កើត Folder \`src\` និង File \`src/input.css\` ។
8.  បន្ថែម Directives របស់ Tailwind ទៅក្នុង \`src/input.css\` ។
9.  បង្កើត File \`index.html\` នៅក្នុង Root Folder ។
10. បន្ថែម Code HTML សាមញ្ញមួយទៅក្នុង \`index.html\` ដែលមាន \`h1\` Tag ជាមួយ Class \`text-4xl font-bold text-center text-blue-500\` ។
11. ភ្ជាប់ \`./dist/output.css\` ទៅក្នុង \`index.html\` ។
12. ដំណើរការពាក្យបញ្ជា Compile CSS ជាមួយ \`--watch\` ។
13. បើក \`index.html\` នៅក្នុង Browser របស់អ្នកដើម្បីមើលលទ្ធផល។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Lab Project</title>
    <link href="./dist/output.css" rel="stylesheet">
</head>
<body>

    <div class="flex items-center justify-center min-h-screen bg-gray-50">
        <h1 class="text-4xl font-bold text-center text-blue-500">
            ជំរាបសួរ Tailwind!
        </h1>
    </div>

</body>
</html>
`
  }
};

export default TailwindLesson1_2Content;