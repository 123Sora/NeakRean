import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson7_1Content: LessonContent = {
  title: 'ការគ្រប់គ្រងកំហុស (Error Handling)',
  objectives: [
    'យល់ដឹងអំពីសារៈសំខាន់នៃការគ្រប់គ្រងកំហុសនៅក្នុង JavaScript',
    'រៀនប្រើ `try...catch` សម្រាប់គ្រប់គ្រងកំហុស',
    'ស្វែងយល់អំពី Error Objects និង Properties របស់វា',
    'អនុវត្តន៍ការបង្កើត Custom Errors',
    'រៀនគ្រប់គ្រងកំហុសនៅក្នុង Asynchronous Code'
  ],
  content: `
# ការគ្រប់គ្រងកំហុស (Error Handling) 🚨

---

**ការគ្រប់គ្រងកំហុស** គឺជាដំណើរការនៃការចាប់ និងដោះស្រាយកំហុសដែលកើតឡើងនៅក្នុងកូដ។ វាជួយការពារកម្មវិធីពីការគាំង និងផ្តល់បទពិសោធន៍អ្នកប្រើប្រាស់ល្អប្រសើរ។

---

## 1. ការប្រើ \`try...catch\`
\`try...catch\` អនុញ្ញាតឱ្យចាប់កំហុសនៅក្នុង Block កូដ។

\`\`\`javascript
try {
  let result = undefinedVariable; // បណ្តាលឱ្យ ReferenceError
} catch (error) {
  console.error('កំហុស:', error.message);
}
\`\`\`

---

## 2. Error Objects
Error Objects មាន Properties ដូចជា \`name\` និង \`message\`។

\`\`\`javascript
try {
  throw new Error('មានអ្វីមួយខុស!');
} catch (error) {
  console.log(error.name); // Error
  console.log(error.message); // មានអ្វីមួយខុស!
}
\`\`\`

---

## 3. ការបង្កើត Custom Errors
អាចបង្កើត Error Classes ផ្ទាល់ខ្លួនដោយ Extend \`Error\`។

\`\`\`javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

try {
  throw new CustomError('កំហុសផ្ទាល់ខ្លួន!');
} catch (error) {
  console.error(error.name, error.message);
}
\`\`\`

---

## 4. Error Handling ក្នុង Asynchronous Code
ប្រើ \`try...catch\` ជាមួយ Async/Await។

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://invalid-url');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('កំហុស:', error.message);
  }
}
fetchData();
\`\`\`

---

## 5. ការប្រើ Error Handling ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error Handling</title>
</head>
<body>
  <h1>សាកល្បងការគ្រប់គ្រងកំហុស</h1>
  <button id="test">សាកល្បងកំហុស</button>
  <p id="output">ចុចដើម្បីសាកល្បង</p>
  <script>
    document.getElementById('test').addEventListener('click', () => {
      try {
        let result = undefinedVariable; // បណ្តាលឱ្យ ReferenceError
        document.getElementById('output').textContent = result;
      } catch (error) {
        document.getElementById('output').textContent = 'កំហុស: ' + error.message;
      }
    });
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** ចុច "សាកល្បងកំហុស" នឹងបង្ហាញសារកំហុសនៅក្នុង \`<p>\`។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ try...catch</h3>
<p id="example1">ចុចដើម្បីសាកល្បង</p>
<button onclick="try { let x = undefinedVariable; } catch (error) { document.getElementById('example1').textContent = 'កំហុស: ' + error.message; }">សាកល្បង</button>
<pre><code class="language-javascript">
try {
  let x = undefinedVariable;
} catch (error) {
  document.getElementById('example1').textContent = 'កំហុស: ' + error.message;
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Custom Error</h3>
<p id="example2">ចុចដើម្បីសាកល្បង</p>
<script>
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
  }
  document.getElementById('example2').addEventListener('click', () => {
    try {
      throw new CustomError('កំហុសផ្ទាល់ខ្លួន!');
    } catch (error) {
      document.getElementById('example2').textContent = \`\${error.name}: \${error.message}\`;
    }
  });
</script>
<pre><code class="language-javascript">
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}
try {
  throw new CustomError('កំហុសផ្ទាល់ខ្លួន!');
} catch (error) {
  document.getElementById('example2').textContent = \`\${error.name}: \${error.message}\`;
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `try...catch` ប្រើសម្រាប់អ្វី?',
      options: [
        'បន្ថែម Element',
        'គ្រប់គ្រងកំហុស',
        'ធ្វើ HTTP Request',
        'រក្សាទុក Data'
      ],
      correct: 1,
      explanation: '`try...catch` ប្រើសម្រាប់ចាប់ និងគ្រប់គ្រងកំហុសនៅក្នុងកូដ។'
    },
    {
      question: 'តើ Error Object មាន Property អ្វីសំខាន់?',
      options: ['name និង message', 'id និង value', 'type និង data', 'key និង value'],
      correct: 0,
      explanation: 'Error Object មាន Properties `name` និង `message`។'
    },
    {
      question: 'តើកូដ `throw new Error(\'Error\')` ធ្វើអ្វី?',
      options: [
        'បញ្ជូន Error',
        'បន្ថែម Element',
        'លុប Data',
        'បម្លែង JSON'
      ],
      correct: 0,
      explanation: '`throw` បញ្ជូន Error ដែលត្រូវបានចាប់ដោយ `catch`។'
    },
    {
      question: 'តើ `catch` Block ទទួល Parameter អ្វី?',
      options: ['String', 'Error Object', 'Array', 'Function'],
      correct: 1,
      explanation: '`catch` ទទួល Error Object ដែលមាន `name` និង `message`។'
    },
    {
      question: 'តើកូដ `try { fetch(\'invalid\') } catch (error) {}` អាចចាប់កំហុស Fetch បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Chrome', 'បានតែក្នុង Async'],
      correct: 1,
      explanation: 'Fetch Errors ត្រូវការ `try...catch` ក្នុង Async Function។'
    },
    {
      question: 'តើ Custom Error ត្រូវ Extend Class អ្វី?',
      options: ['Object', 'Error', 'Function', 'Array'],
      correct: 1,
      explanation: 'Custom Error ត្រូវ Extend `Error` Class។'
    },
    {
      question: 'តើ Property `error.message` បញ្ជូនអ្វី?',
      options: [
        'ប្រភេទនៃកំហុស',
        'សារពន្យល់កំហុស',
        'ទីតាំងកំហុស',
        'ពេលវេលាកំហុស'
      ],
      correct: 1,
      explanation: '`error.message` បញ្ជូនសារពន្យល់អំពីកំហុស។'
    },
    {
      question: 'តើកូដ `try { JSON.parse(\'invalid\') } catch (error) {}` ចាប់កំហុសប្រភេទណា?',
      options: ['ReferenceError', 'TypeError', 'SyntaxError', 'CustomError'],
      correct: 2,
      explanation: '`JSON.parse(\'invalid\')` បញ្ជូន `SyntaxError`។'
    },
    {
      question: 'តើ `finally` Block ធ្វើអ្វី?',
      options: [
        'ប្រតិបត្តិមុន `try`',
        'ប្រតិបត្តិបន្ទាប់ពី `try` ឬ `catch`',
        'ចាប់កំហុស',
        'បញ្ឈប់កូដ'
      ],
      correct: 1,
      explanation: '`finally` ប្រតិបត្តិបន្ទាប់ពី `try` ឬ `catch` មិនថាមានកំហុសឬអត់។'
    },
    {
      question: 'តើកូដ `async function fn() { try { await fetch(\'invalid\') } catch (e) { console.log(e) } }` ធ្វើអ្វី?',
      options: [
        'បញ្ជូន Error ទៅ Console',
        'បញ្ឈប់ Function',
        'បន្ថែម Data',
        'បម្លែង JSON'
      ],
      correct: 0,
      explanation: 'វាចាប់ Fetch Error និងបញ្ជូនទៅ Console។'
    },
    {
      question: 'តើកំហុស `ReferenceError` កើតឡើងនៅពេលណា?',
      options: [
        'ប្រើ Variable មិនបានកំណត់',
        'បម្លែង JSON ខុស',
        'Network បរាជ័យ',
        'Permission Denied'
      ],
      correct: 0,
      explanation: '`ReferenceError` កើតឡើងនៅពេលប្រើ Variable មិនបានកំណត់។'
    },
    {
      question: 'តើ `error.name` បញ្ជូនអ្វី?',
      options: [
        'ប្រភេទនៃកំហុស',
        'សារកំហុស',
        'ទីតាំងកំហុស',
        'ពេលវេលាកំហុស'
      ],
      correct: 0,
      explanation: '`error.name` បញ្ជូនប្រភេទនៃកំហុស (ឧ. Error, TypeError)។'
    },
    {
      question: 'តើកូដ `throw new TypeError(\'Invalid\')` ធ្វើអ្វី?',
      options: [
        'បញ្ជូន TypeError',
        'បញ្ជូន ReferenceError',
        'បន្ថែម Element',
        'លុប Data'
      ],
      correct: 0,
      explanation: '`throw new TypeError` បញ្ជូន TypeError ជាមួយសារ។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ \`try...catch\` ដើម្បីគ្រប់គ្រងកំហុសនៅពេលបញ្ចូលលេខ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Error Handling"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "គណនាលេខ"។
   - បន្ថែម \`<input id="number" type="text" placeholder="បញ្ចូលលេខ">\`។
   - បន្ថែម \`<button id="calculate">គណនា</button>\`។
   - បន្ថែម \`<p id="output">លទ្ធផលនឹងបង្ហាញនៅទីនេះ</p>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រើ \`addEventListener\` លើ Button ដើម្បីទទួល Value ពី \`<input>\`។
   - ប្រើ \`try...catch\` ដើម្បីគណនា Square (លេខ * លេខ) នៃ Input។
   - ប្រសិនបើ Input មិនមែនជាលេខ បញ្ជូន \`TypeError\` ជាមួយសារ "សូមបញ្ចូលលេខ"។
   - បង្ហាញលទ្ធផល (ឧ. "លទ្ធផល: 16") ឬសារកំហុសនៅក្នុង \`<p id="output">\`។

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
  <title>Error Handling</title>
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
  <h1>គណនាលេខ</h1>
  <input id="number" type="text" placeholder="បញ្ចូលលេខ">
  <button id="calculate">គណនា</button>
  <p id="output">លទ្ធផលនឹងបង្ហាញនៅទីនេះ</p>
  <script>
    document.getElementById('calculate').addEventListener('click', () => {
      try {
        const input = document.getElementById('number').value;
        const num = Number(input);
        if (isNaN(num)) throw new TypeError('សូមបញ្ចូលលេខ');
        const result = num * num;
        document.getElementById('output').textContent = \`លទ្ធផល: \${result}\`;
      } catch (error) {
        document.getElementById('output').textContent = \`កំហុស: \${error.message}\`;
      }
    });
  </script>
</body>
</html>
`
  }
};

export default JSLesson7_1Content;