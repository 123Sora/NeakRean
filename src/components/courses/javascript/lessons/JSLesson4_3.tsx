import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson4_3Content: LessonContent = {
  title: 'Modules',
  objectives: [
    'យល់ដឹងអំពី Modules នៅក្នុង JavaScript',
    'រៀនប្រើ `import` និង `export`',
    'ស្វែងយល់អំពី Default និង Named Exports',
    'អនុវត្តន៍ការបែងចែកកូដទៅជា Modules ដើម្បីភាពងាយស្រួលថែទាំ',
    'រៀនប្រើ Modules ជាមួយ Browser'
  ],
  content: `
# Modules 📦

---

**Modules** អនុញ្ញាតឱ្យបែងចែកកូដទៅជា Files ដាច់ដោយឡែកដើម្បីភាពងាយស្រួលថែទាំ និងប្រើឡើងវិញ។ ES6 ណែនាំ \`import\` និង \`export\` សម្រាប់គ្រប់គ្រង Modules។

---

## 1. Exporting Modules
ប្រើ \`export\` ដើម្បីបញ្ជូន Variables, Functions, ឬ Classes ពី Module។

### 1.1 Named Exports
\`\`\`javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
\`\`\`

### 1.2 Default Export
Module អាចមាន Default Export តែមួយ។

\`\`\`javascript
// greet.js
export default function greet(name) {
  return \`សួស្តី, \${name}!\`;
}
\`\`\`

---

## 2. Importing Modules
ប្រើ \`import\` ដើម្បីទាញ Functions, Variables, ឬ Classes ពី Module។

### 2.1 Importing Named Exports
\`\`\`javascript
// main.js
import { add, subtract } from './math.js';
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
\`\`\`

### 2.2 Importing Default Export
\`\`\`javascript
// main.js
import greet from './greet.js';
console.log(greet("សុខា")); // សួស្តី, សុខា!
\`\`\`

---

## 3. Module Scope
Modules មាន Scope ផ្ទាល់ខ្លួន ដែលមានន័យថា Variables និង Functions មិនលេចធ្លាយទៅ Global Scope។

\`\`\`javascript
// utils.js
const secret = "Hidden";
export const reveal = () => secret;
// main.js
import { reveal } from './utils.js';
console.log(reveal()); // Hidden
console.log(typeof secret); // undefined
\`\`\`

---

## 4. ការប្រើ Modules ក្នុង Browser
ប្រើ Attribute \`type="module"\` នៅក្នុង \`<script>\` ដើម្បីប្រើ Modules។

\`\`\`html
<!-- index.html -->
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Modules</title>
</head>
<body>
  <h1>សាកល្បង Modules</h1>
  <p id="output"></p>
  <script type="module">
    import greet from './greet.js';
    document.getElementById("output").innerText = greet("លីណា");
  </script>
</body>
</html>
\`\`\`

**ចំណាំ:** ដើម្បីសាកល្បងកូដនេះ អ្នកត្រូវបម្រើ Files តាមរយៈ Server (ឧ. \`http://localhost\`) ព្រោះ Modules មិនដំណើរការនៅលើ \`file://\`។

---

## 5. ការប្រើ Modules ក្នុងកូដ
**ឧទាហរណ៍រួមបញ្ចូល:**

\`\`\`javascript
// calculator.js
export const multiply = (a, b) => a * b;
export default function calculateTotal(price, quantity) {
  return multiply(price, quantity);
}
\`\`\`

\`\`\`html
<!-- index.html -->
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Modules</title>
</head>
<body>
  <h1>សាកល្បង Modules</h1>
  <p id="output"></p>
  <script type="module">
    import calculateTotal, { multiply } from './calculator.js';
    const total = calculateTotal(10, 5);
    document.getElementById("output").innerText = \`តម្លៃសរុប: \${total} ដុល្លារ\`;
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** តម្លៃសរុប: 50 ដុល្លារ
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Named Exports</h3>
<p id="example1">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script type="module">
  import { add } from './math.js';
  console.log(add(2, 3)); // 5
</script>
<pre><code class="language-javascript">
// math.js
export const add = (a, b) => a + b;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Default Export</h3>
<p id="example2">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script type="module">
  import greet from './greet.js';
  console.log(greet("វិរៈ")); // សួស្តី, វិរៈ!
</script>
<pre><code class="language-javascript">
// greet.js
export default function greet(name) {
  return \`សួស្តី, \${name}!\`;
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Modules នៅក្នុង JavaScript ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Functions',
        'បែងចែកកូដទៅជា Files ដាច់ដោយឡែក',
        'បំលែង Objects',
        'លុប Variables'
      ],
      correct: 1,
      explanation: 'Modules បែងចែកកូដទៅជា Files ដើម្បីភាពងាយស្រួលថែទាំ។'
    },
    {
      question: 'តើ Keyword ណាមួយប្រើសម្រាប់បញ្ជូនទិន្នន័យពី Module?',
      options: ['import', 'export', 'require', 'module'],
      correct: 1,
      explanation: '`export` បញ្ជូន Variables, Functions, ឬ Classes ពី Module។'
    },
    {
      question: 'តើ Default Export អាចមានប៉ុន្មាននៅក្នុង Module មួយ?',
      options: ['តែមួយ', 'ច្រើន', 'គ្មាន', 'អាស្រ័យលើ Browser'],
      correct: 0,
      explanation: 'Module អាចមាន Default Export តែមួយ។'
    },
    {
      question: 'តើកូដ `import { add } from "./math.js";` ធ្វើអ្វី?',
      options: [
        'បញ្ជូន Function `add`',
        'បង្កើត Module ថ្មី',
        'លុប Function',
        'បំលែង Module'
      ],
      correct: 0,
      explanation: '`import { add }` ទាញ Function `add` ពី `math.js`។'
    },
    {
      question: 'តើ Attribute ណាមួយត្រូវបន្ថែមនៅ `<script>` ដើម្បីប្រើ Modules?',
      options: ['type="text"', 'type="module"', 'type="javascript"', 'type="es6"'],
      correct: 1,
      explanation: '`type="module"` អនុញ្ញាតឱ្យប្រើ Modules នៅក្នុង Browser។'
    },
    {
      question: 'តើ Named Exports ត្រូវបាន Imported ដោយរបៀបណា?',
      options: [
        'ប្រើ Curly Braces `{}`',
        'ប្រើ Backticks',
        'ប្រើ Parentheses `()`',
        'ប្រើ Square Brackets `[]`'
      ],
      correct: 0,
      explanation: 'Named Exports ត្រូវបាន Imported ដោយប្រើ Curly Braces `{}`។'
    },
    {
      question: 'តើ Modules មាន Scope ប្រភេទណា?',
      options: ['Global Scope', 'Function Scope', 'Block Scope', 'Module Scope'],
      correct: 3,
      explanation: 'Modules មាន Scope ផ្ទាល់ខ្លួន (Module Scope)។'
    },
    {
      question: 'តើកូด `export default function greet() {}` អនុញ្ញាតឱ្យ Import ដោយរបៀបណា?',
      options: [
        'import { greet } from "./file.js"',
        'import greet from "./file.js"',
        'import * as greet from "./file.js"',
        'import greet() from "./file.js"'
      ],
      correct: 1,
      explanation: 'Default Export ត្រូវបាន Imported ដោយគ្មាន Curly Braces។'
    },
    {
      question: 'តើកូដ `export const x = 10;` គឺជា Export ប្រភេទណា?',
      options: ['Default Export', 'Named Export', 'Static Export', 'Dynamic Export'],
      correct: 1,
      explanation: '`export const x` គឺជា Named Export។'
    },
    {
      question: 'តើ Modules អាចដំណើរការនៅលើ `file://` បានទេ?',
      options: [
        'បាន',
        'មិនបាន ត្រូវការ Server',
        'បានតែក្នុង Chrome',
        'បានតែក្នុង Node.js'
      ],
      correct: 1,
      explanation: 'Modules ត្រូវការ Server (ឧ. `http://localhost`) ដើម្បីដំណើរការ។'
    },
    {
      question: 'តើកូដ `import * as utils from "./utils.js";` ធ្វើអ្វី?',
      options: [
        'ទាញ Named Exports ទាំងអស់ជា Object',
        'ទាញ Default Export',
        'បង្កើត Module ថ្មី',
        'លុប Module'
      ],
      correct: 0,
      explanation: '`import * as utils` ទាញ Named Exports ទាំងអស់ជា Object។'
    },
    {
      question: 'តើកូដ `export { add, subtract };` ធ្វើអ្វី?',
      options: [
        'បញ្ជូន `add` និង `subtract` ជា Named Exports',
        'បញ្ជូន `add` ជា Default Export',
        'បង្កើត Functions ថ្មី',
        'លុប Functions'
      ],
      correct: 0,
      explanation: '`export { add, subtract }` បញ្ជូន `add` និង `subtract` ជា Named Exports។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML និង JavaScript Modules ដើម្បីគណនាតម្លៃសរុប។

**តម្រូវការ:**

1. **HTML Structure (index.html):**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Price Calculator"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "កម្មវិធីគណនាតម្លៃ"។
   - បន្ថែម \`<p id="result">\` សម្រាប់បង្ហាញលទ្ធផល។
   - បន្ថែម \`<script type="module">\`។

2. **JavaScript (calculator.js):**
   - បង្កើត File \`calculator.js\`។
   - Export Function \`multiply\` (Named Export) ដែលគណនា \`a * b\`។
   - Export Default Function \`calculateTotal(price, quantity)\` ដែលហៅ \`multiply\`។

3. **JavaScript (index.html):**
   - Import \`multiply\` និង \`calculateTotal\` ពី \`calculator.js\`។
   - ប្រើ \`calculateTotal(15, 4)\` ដើម្បីគណនាតម្លៃសរុប។
   - បង្ហាញលទ្ធផលនៅក្នុង \`<p id="result">\` (ឧ. "តម្លៃសរុប: 60 ដុល្លារ")។

4. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`<p>\`។

**ការណែនាំ:** បម្រើ Files តាមរយៈ Server (ឧ. \`http://localhost\`) ដើម្បីសាកល្បង Modules។
    `,
    solution: `
<!-- index.html -->
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Price Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p {
      font-size: 18px;
      color: #333;
    }
  </style>
</head>
<body>
  <h1>កម្មវិធីគណនាតម្លៃ</h1>
  <p id="result"></p>
  <script type="module">
    import calculateTotal, { multiply } from './calculator.js';
    const total = calculateTotal(15, 4);
    document.getElementById("result").innerText = \`តម្លៃសរុប: \${total} ដុល្លារ\`;
  </script>
</body>
</html>

<!-- calculator.js -->
export const multiply = (a, b) => a * b;
export default function calculateTotal(price, quantity) {
  return multiply(price, quantity);
}
`
  }
};

export default JSLesson4_3Content;