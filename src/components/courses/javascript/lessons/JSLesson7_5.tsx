import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson7_5Content: LessonContent = {
  title: 'Best Practices និង Code Quality',
  objectives: [
    'យល់ដឹងអំពីសារៈសំខាន់នៃការសរសេរកូដឱ្យមានគុណភាព',
    'រៀនប្រើ Naming Conventions ដែលច្បាស់លាស់ និងស្តង់ដារ',
    'ស្វែងយល់អំពីការប្រើ Comments និង Documentation',
    'អនុវត្តន៍ការបែងចែកកូដទៅជា Functions និង Modules',
    'រៀនអំពី Code Optimization និង Error Handling'
  ],
  content: `
# Best Practices និង Code Quality ✅

---

**Best Practices** និង **Code Quality** ជួយឱ្យកូដងាយស្រួលអាន ថែទាំ និងមានប្រសិទ្ធភាព។ ការអនុវត្តល្អធ្វើឱ្យកម្មវិធីមានភាពជឿជាក់ និងកាត់បន្ថយកំហុស។

---

## 1. Naming Conventions
ប្រើឈ្មោះដែលច្បាស់លាស់ និងមានន័យ។

\`\`\`javascript
// មិនល្អ
let x = 10;

// ល្អ
let userCount = 10;
\`\`\`

---

## 2. Comments និង Documentation
បន្ថែម Comments ដើម្បីពន្យល់កូដស្មុគស្មាញ។

\`\`\`javascript
// គណនាផ្ទៃក្រឡានៃចតុកោណ
function calculateRectangleArea(width, height) {
  return width * height;
}
\`\`\`

---

## 3. Modular Code
បែងចែកកូដទៅជា Functions ឬ Modules។

\`\`\`javascript
function greetUser(name) {
  return \`សួស្តី, \${name}!\`;
}

function displayGreeting(name) {
  console.log(greetUser(name));
}
displayGreeting('ឈ្មោះ');
\`\`\`

---

## 4. Error Handling
ប្រើ \`try...catch\` ដើម្បីគ្រប់គ្រងកំហុស។

\`\`\`javascript
function divide(a, b) {
  try {
    if (b === 0) throw new Error('មិនអាចចែកនឹងសូន្យបានទេ');
    return a / b;
  } catch (error) {
    console.error(error.message);
  }
}
divide(10, 0); // មិនអាចចែកនឹងសូន្យបានទេ
\`\`\`

---

## 5. Code Optimization
ជៀសវាងការធ្វើឱ្យកូដស្មុគស្មាញ និងប្រើ Algorithms ដែលមានប្រសិទ្ធភាព។

\`\`\`javascript
// មិនល្អ
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// ល្អ
const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);
\`\`\`

---

## 6. ការប្រើ Best Practices ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Best Practices</title>
</head>
<body>
  <h1>សាកល្បង Best Practices</h1>
  <input id="number" type="text" placeholder="បញ្ចូលលេខ">
  <button id="calculate">គណនា</button>
  <p id="output">លទ្ធផលនឹងបង្ហាញនៅទីនេះ</p>
  <script>
    // គណនាការ៉េនៃលេខ
    function calculateSquare(number) {
      try {
        const num = Number(number);
        if (isNaN(num)) throw new Error('សូមបញ្ចូលលេខ');
        return num * num;
      } catch (error) {
        return \`កំហុស: \${error.message}\`;
      }
    }

    // ធ្វើបច្ចុប្បន្នភាព UI
    function updateUI(result) {
      document.getElementById('output').textContent = result;
    }

    document.getElementById('calculate').addEventListener('click', () => {
      const input = document.getElementById('number').value;
      const result = calculateSquare(input);
      updateUI(result);
    });
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** បញ្ចូលលេខ និងចុច "គណនា" ដើម្បីបង្ហាញការ៉េនៃលេខ ឬសារកំហុស។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Naming Conventions</h3>
<p id="example1">ចុចដើម្បីសាកល្បង</p>
<button onclick="displayUserCount()">បង្ហាញចំនួនអ្នកប្រើ</button>
<script>
  // ប្រើឈ្មោះដែលច្បាស់លាស់
  let userCount = 10;
  function displayUserCount() {
    document.getElementById('example1').textContent = \`ចំនួនអ្នកប្រើ: \${userCount}\`;
  }
</script>
<pre><code class="language-javascript">
let userCount = 10;
function displayUserCount() {
  document.getElementById('example1').textContent = \`ចំនួនអ្នកប្រើ: \${userCount}\`;
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Modular Code</h3>
<p id="example2">ចុចដើម្បីសាកល្បង</p>
<button onclick="greetUser('ឈ្មោះ')">សួស្តី</button>
<script>
  function greetUser(name) {
    return \`សួស្តី, \${name}!\`;
  }
  function displayGreeting(name) {
    document.getElementById('example2').textContent = greetUser(name);
  }
</script>
<pre><code class="language-javascript">
function greetUser(name) {
  return \`សួស្តី, \${name}!\`;
}
function displayGreeting(name) {
  document.getElementById('example2').textContent = greetUser(name);
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជាគោលបំណងនៃ Naming Conventions?',
      options: [
        'ធ្វើឱ្យកូដងាយស្រួលអាន និងយល់',
        'បង្កើនល្បឿនកូដ',
        'បន្ថែម Elements',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: 'Naming Conventions ធ្វើឱ្យកូដងាយស្រួលអាន និងយល់។'
    },
    {
      question: 'តើ Comments គួរប្រើនៅពេលណា?',
      options: [
        'សម្រាប់កូដស្មុគស្មាញ',
        'គ្រប់ជួរនៃកូដ',
        'តែនៅក្នុង Functions',
        'តែនៅក្នុង Objects'
      ],
      correct: 0,
      explanation: 'Comments គួរប្រើសម្រាប់ពន្យល់កូដស្មុគស្មាញ ឬ Logic។'
    },
    {
      question: 'តើ Modular Code មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'ងាយស្រួលថែទាំ និង Reusable',
        'បង្កើន Memory',
        'បន្ថែម Elements',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: 'Modular Code ធ្វើឱ្យកូដងាយស្រួលថែទាំ និង Reusable។'
    },
    {
      question: 'តើកូដ `let x = 10;` មានបញ្ហាអ្វី?',
      options: [
        'ឈ្មោះមិនច្បាស់លាស់',
        'Syntax Error',
        'Type Error',
        'Memory Leak'
      ],
      correct: 0,
      explanation: 'ឈ្មោះ `x` មិនច្បាស់លាស់ និងមិនបង្ហាញអត្ថន័យ។'
    },
    {
      question: 'តើ Error Handling ជួយអ្វី?',
      options: [
        'ការពារកម្មវិធីពីការគាំង',
        'បង្កើនល្បឿនកូដ',
        'បន្ថែម Elements',
        'លុប Data'
      ],
      correct: 0,
      explanation: 'Error Handling ការពារកម្មវិធីពីការគាំង និងផ្តល់សារកំហុស។'
    },
    {
      question: 'តើកូដ `arr.reduce((sum, num) => sum + num, 0)` ល្អជាង Loop យ៉ាងដូចម្តេច?',
      options: [
        'ខ្លី និងច្បាស់លាស់',
        'បន្ថែម Memory',
        'លុប Data',
        'បន្ថែម Elements'
      ],
      correct: 0,
      explanation: '`reduce` ធ្វើឱ្យកូដខ្លី និងច្បាស់លាស់ជាង Loop។'
    },
    {
      question: 'តើអ្វីជា Best Practice សម្រាប់ Function?',
      options: [
        'ធ្វើឱ្យ Function មានទំនួលខុសត្រូវតែមួយ',
        'ប្រើ Global Variables',
        'សរសេរកូដវែង',
        'ជៀសវាង Comments'
      ],
      correct: 0,
      explanation: 'Function គួរមានទំនួលខុសត្រូវតែមួយដើម្បីងាយស្រួលថែទាំ។'
    },
    {
      question: 'តើការប្រើ `const` ជួយអ្វី?',
      options: [
        'ការពារការផ្លាស់ប្តូរ Variable',
        'បង្កើនល្បឿន',
        'បន្ថែម Elements',
        'លុប Data'
      ],
      correct: 0,
      explanation: '`const` ការពារការផ្លាស់ប្តូរ Variable ដើម្បីកាត់បន្ថយកំហុស។'
    },
    {
      question: 'តើកូដ `function fn(a, b) { return a + b; }` គួរធ្វើអ្វីបន្ថែម?',
      options: [
        'បន្ថែម Error Handling',
        'បន្ថែម Loop',
        'លុប Parameters',
        'បន្ថែម Elements'
      ],
      correct: 0,
      explanation: 'បន្ថែម Error Handling ដើម្បីគ្រប់គ្រង Inputs មិនត្រឹមត្រូវ។'
    },
    {
      question: 'តើការប្រើ Arrow Functions មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'ខ្លី និងច្បាស់លាស់',
        'បន្ថែម Memory',
        'លុប Data',
        'បន្ថែម Elements'
      ],
      correct: 0,
      explanation: 'Arrow Functions ធ្វើឱ្យកូដខ្លី និងច្បាស់លាស់។'
    },
    {
      question: 'តើកូដ `try { JSON.parse(input) } catch (e) {}` ជួយអ្វី?',
      options: [
        'ចាប់ SyntaxError',
        'បន្ថែម Data',
        'លុប Data',
        'បន្ថែម Elements'
      ],
      correct: 0,
      explanation: '`try...catch` ចាប់ `SyntaxError` ពី `JSON.parse`។'
    },
    {
      question: 'តើអ្វីជា Best Practice សម្រាប់ Variable Declaration?',
      options: [
        'ប្រើ `const` ឬ `let` ជំនួស `var`',
        'ប្រើ `var` ជានិច្ច',
        'ជៀសវាង Variables',
        'ប្រើ Global Variables'
      ],
      correct: 0,
      explanation: '`const` និង `let` មាន Block Scope ដែលកាត់បន្ថយកំហុស។'
    },
    {
      question: 'តើ Code Quality មានឥទ្ធិពលលើអ្វី?',
      options: [
        'ការថែទាំ និង Scalability',
        'បន្ថែម Memory',
        'លុប Data',
        'បន្ថែម Elements'
      ],
      correct: 0,
      explanation: 'Code Quality ធ្វើឱ្យកូដងាយស្រួលថែទាំ និង Scalable។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលអនុវត្ត Best Practices ដើម្បីបង្កើត Calculator សាមញ្ញ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Calculator with Best Practices"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "ម៉ាស៊ីនគិតលេខ"។
   - បន្ថែម \`<input id="num1" type="text" placeholder="លេខទី១">\`, \`<input id="num2" type="text" placeholder="លេខទី២">\`។
   - បន្ថែម \`<button id="add">បូក</button>\`។
   - បន្ថែម \`<p id="output">លទ្ធផលនឹងបង្ហាញនៅទីនេះ</p>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - បង្កើត Function \`calculateSum\` ដែលទទួល 2 Parameters និង Return ផលបូក។
   - បន្ថែម Error Handling ដើម្បីពិនិត្យថា Inputs ជាលេខ។
   - បង្កើត Function \`updateUI\` ដើម្បីធ្វើបច្ចុប្បន្នភាព \`<p id="output">\`។
   - ប្រើ Descriptive Names និង Comments។
   - ប្រើ \`const\` សម្រាប់ Variables ដែលមិនផ្លាស់ប្តូរ។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`<p>\`។
     - កំណត់ \`padding: 10px;\` និង \`cursor: pointer;\` សម្រាប់ \`<button>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator with Best Practices</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p {
      font-size: 18px;
      color: #333;
    }
    button {
      padding: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>ម៉ាស៊ីនគិតលេខ</h1>
  <input id="num1" type="text" placeholder="លេខទី១">
  <input id="num2" type="text" placeholder="លេខទី២">
  <button id="add">បូក</button>
  <p id="output">លទ្ធផលនឹងបង្ហាញនៅទីនេះ</p>
  <script>
    // គណនាផលបូកនៃលេខពីរ
    function calculateSum(firstNumber, secondNumber) {
      try {
        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);
        if (isNaN(num1) || isNaN(num2)) {
          throw new Error('សូមបញ្ចូលលេខត្រឹមត្រូវ');
        }
        return num1 + num2;
      } catch (error) {
        return \`កំហុស: \${error.message}\`;
      }
    }

    // ធ្វើបច្ចុប្បន្នភាព UI ជាមួយលទ្ធផល
    function updateUI(result) {
      const outputElement = document.getElementById('output');
      outputElement.textContent = result;
    }

    // ដោះស្រាយការចុចប៊ូតុង
    document.getElementById('add').addEventListener('click', () => {
      const firstInput = document.getElementById('num1').value;
      const secondInput = document.getElementById('num2').value;
      const result = calculateSum(firstInput, secondInput);
      updateUI(result);
    });
  </script>
</body>
</html>
`
  }
};

export default JSLesson7_5Content;