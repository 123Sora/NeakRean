import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson8_2Content: LessonContent = {
  title: 'ម៉ាស៊ីនគិតលេខសាមញ្ញ (Simple Calculator)',
  objectives: [
    'រៀនបង្កើតម៉ាស៊ីនគិតលេខដែលអនុវត្តប្រមាណវិធីសាមញ្ញ',
    'អនុវត្តន៍ការគ្រប់គ្រង DOM សម្រាប់ការបញ្ចូល និងបង្ហាញលទ្ធផល',
    'ស្វែងយល់អំពីការប្រើ Event Listeners សម្រាប់ប៊ូតុង',
    'អនុវត្តន៍ការគ្រប់គ្រងកំហុសសម្រាប់ Inputs មិនត្រឹមត្រូវ',
    'រៀនប្រើ Best Practices សម្រាប់កូដ'
  ],
  content: `
# ម៉ាស៊ីនគិតលេខសាមញ្ញ (Simple Calculator) 🧮

---

**ម៉ាស៊ីនគិតលេខ** អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ ( users )ធ្វើប្រមាណវិធីសាមញ្ញ (បូក ដក គុណ ចែក) ជាមួយ Inputs ពីអ្នកប្រើប្រាស់ ( users )។

---

## 1. ការទទួល Inputs
ប្រើ \`<input>\` ដើម្បីទទួលលេខពីអ្នកប្រើប្រាស់ ( users )។

\`\`\`javascript
const num1 = Number(document.getElementById('num1').value);
const num2 = Number(document.getElementById('num2').value);
\`\`\`

---

## 2. ការគណនា
បង្កើត Functions សម្រាប់ប្រមាណវិធីនីមួយៗ។

\`\`\`javascript
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
\`\`\`

---

## 3. ការគ្រប់គ្រងកំហុស
ប្រើ \`try...catch\` ដើម្បីពិនិត្យ Inputs និងការចែកនឹងសូន្យ។

\`\`\`javascript
function divide(a, b) {
  try {
    if (b === 0) throw new Error('មិនអាចចែកនឹងសូន្យបានទេ');
    return a / b;
  } catch (error) {
    return error.message;
  }
}
\`\`\`

---

## 4. ការបង្ហាញលទ្ធផល
ធ្វើបច្ចុប្បន្នភាព DOM ដើម្បីបង្ហាញលទ្ធផល។

\`\`\`javascript
function updateResult(result) {
  document.getElementById('result').textContent = \`លទ្ធផល: \${result}\`;
}
\`\`\`

---

## 5. ការប្រើ Calculator ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Calculator</title>
</head>
<body>
  <h1>ម៉ាស៊ីនគិតលេខ</h1>
  <input id="num1" type="text" placeholder="លេខទី១">
  <input id="num2" type="text" placeholder="លេខទី២">
  <button id="add">បូក</button>
  <button id="subtract">ដក</button>
  <button id="multiply">គុណ</button>
  <button id="divide">ចែក</button>
  <p id="result">លទ្ធផលនឹងបង្ហាញនៅទីនេះ</p>
  <script>
    function calculate(operation, num1, num2) {
      try {
        const a = Number(num1);
        const b = Number(num2);
        if (isNaN(a) || isNaN(b)) throw new Error('សូមបញ្ចូលលេខត្រឹមត្រូវ');
        switch (operation) {
          case 'add': return a + b;
          case 'subtract': return a - b;
          case 'multiply': return a * b;
          case 'divide':
            if (b === 0) throw new Error('មិនអាចចែកនឹងសូន្យបានទេ');
            return a / b;
          default: throw new Error('ប្រមាណវិធីមិនត្រឹមត្រូវ');
        }
      } catch (error) {
        return error.message;
      }
    }

    function updateResult(result) {
      document.getElementById('result').textContent = \`លទ្ធផល: \${result}\`;
    }

    document.getElementById('add').addEventListener('click', () => {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;
      updateResult(calculate('add', num1, num2));
    });

    document.getElementById('subtract').addEventListener('click', () => {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;
      updateResult(calculate('subtract', num1, num2));
    });

    document.getElementById('multiply').addEventListener('click', () => {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;
      updateResult(calculate('multiply', num1, num2));
    });

    document.getElementById('divide').addEventListener('click', () => {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;
      updateResult(calculate('divide', num1, num2));
    });
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** បញ្ចូលលេខពីរ និងចុចប៊ូតុងប្រមាណវិធីដើម្បីបង្ហាញលទ្ធផល។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បូកលេខ</h3>
<input id="exNum1" type="text" placeholder="លេខទី១">
<input id="exNum2" type="text" placeholder="លេខទី២">
<button onclick="addExample()">បូក</button>
<p id="exResult">លទ្ធផល: </p>
<script>
  function addExample() {
    const num1 = Number(document.getElementById('exNum1').value);
    const num2 = Number(document.getElementById('exNum2').value);
    document.getElementById('exResult').textContent = \`លទ្ធផល: \${num1 + num2}\`;
  }
</script>
<pre><code class="language-javascript">
function addExample() {
  const num1 = Number(document.getElementById('exNum1').value);
  const num2 = Number(document.getElementById('exNum2').value);
  document.getElementById('exResult').textContent = \`លទ្ធផល: \${num1 + num2}\`;
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការគ្រប់គ្រងកំហុស</h3>
<input id="exNum3" type="text" placeholder="លេខទី១">
<input id="exNum4" type="text" placeholder="លេខទី២">
<button onclick="divideExample()">ចែក</button>
<p id="exResult2">លទ្ធផល: </p>
<script>
  function divideExample() {
    try {
      const num1 = Number(document.getElementById('exNum3').value);
      const num2 = Number(document.getElementById('exNum4').value);
      if (isNaN(num1) || isNaN(num2)) throw new Error('សូមបញ្ចូលលេខ');
      if (num2 === 0) throw new Error('មិនអាចចែកនឹងសូន្យបានទេ');
      document.getElementById('exResult2').textContent = \`លទ្ធផល: \${num1 / num2}\`;
    } catch (error) {
      document.getElementById('exResult2').textContent = error.message;
    }
  }
</script>
<pre><code class="language-javascript">
function divideExample() {
  try {
    const num1 = Number(document.getElementById('exNum3').value);
    const num2 = Number(document.getElementById('exNum4').value);
    if (isNaN(num1) || isNaN(num2)) throw new Error('សូមបញ្ចូលលេខ');
    if (num2 === 0) throw new Error('មិនអាចចែកនឹងសូន្យបានទេ');
    document.getElementById('exResult2').textContent = \`លទ្ធផល: \${num1 / num2}\`;
  } catch (error) {
    document.getElementById('exResult2').textContent = error.message;
  }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជាគោលបំណងនៃ Simple Calculator?',
      options: [
        'ធ្វើប្រមាណវិធីសាមញ្ញ',
        'រក្សាទុកកិច្ចការ',
        'បង្កើត Animation',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: 'Simple Calculator ធ្វើប្រមាណវិធីសាមញ្ញ (បូក, ដក, គុណ, ចែក)។'
    },
    {
      question: 'តើ Method ណាមួយបម្លែង String ទៅ Number?',
      options: ['Number', 'parseInt', 'toString', 'JSON.parse'],
      correct: 0,
      explanation: '`Number` បម្លែង String ទៅ Number។'
    },
    {
      question: 'តើ `isNaN` ធ្វើអ្វី?',
      options: [
        'ពិនិត្យថា Value មិនមែនជាលេខ',
        'បន្ថែម Element',
        'លុប Data',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: '`isNaN` ពិនិត្យថា Value មិនមែនជាលេខ។'
    },
    {
      question: 'តើកំហុសអ្វីកើតឡើងនៅពេលចែកនឹងសូន្យ?',
      options: [
        'Infinity ឬ Error',
        'TypeError',
        'SyntaxError',
        'ReferenceError'
      ],
      correct: 0,
      explanation: 'ការចែកនឹងសូន្យបញ្ជូន `Infinity` ឬអាច Throw Error។'
    },
    {
      question: 'តើ `try...catch` នៅក្នុង Calculator ជួយអ្វី?',
      options: [
        'គ្រប់គ្រង Inputs មិនត្រឹមត្រូវ',
        'បន្ថែម Elements',
        'លុប Data',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: '`try...catch` គ្រប់គ្រង Inputs មិនត្រឹមត្រូវ និងកំហុសផ្សេងៗ។'
    },
    {
      question: 'តើកូដ `document.getElementById(\'result\').textContent` ធ្វើអ្វី?',
      options: [
        'បង្ហាញលទ្ធផលនៅក្នុង Element',
        'បន្ថែម Element',
        'លុប Element',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: '`textContent` បង្ហាញលទ្ធផលនៅក្នុង Element។'
    },
    {
      question: 'តើ Switch Statement នៅក្នុង Calculator ប្រើសម្រាប់អ្វី?',
      options: [
        'ជ្រើសរើសប្រមាណវិធី',
        'បន្ថែម Elements',
        'លុប Data',
        'រក្សាទុក Data'
      ],
      correct: 0,
      explanation: 'Switch Statement ជ្រើសរើសប្រមាណវិធី (បូក, ដក, គុណ, ចែក)។'
    },
    {
      question: 'តើ Best Practice នៅក្នុង Calculator គឺជាអ្វី?',
      options: [
        'បែងចែកកូដទៅជា Functions',
        'ប្រើ Global Variables',
        'សរសេរកូដវែង',
        'ជៀសវាង Error Handling'
      ],
      correct: 0,
      explanation: 'បែងចែកកូដទៅជា Functions ធ្វើឱ្យកូដងាយស្រួលថែទាំ។'
    },
    {
      question: 'តើកូដ `Number(\'abc\')` បញ្ជូនអ្វី?',
      options: ['NaN', 'undefined', 'Error', '0'],
      correct: 0,
      explanation: '`Number(\'abc\')` បញ្ជូន `NaN` ព្រោះវាមិនមែនជាលេខ។'
    },
    {
      question: 'តើ Event Listener នៅក្នុង Calculator ដោះស្រាយអ្វី?',
      options: [
        'ការចុចប៊ូតុង',
        'រក្សាទុក Data',
        'បង្កើត Animation',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: 'Event Listeners ដោះស្រាយការចុចប៊ូតុងសម្រាប់ប្រមាណវិធី។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្កើតម៉ាស៊ីនគិតលេខសាមញ្ញ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Simple Calculator"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "ម៉ាស៊ីនគិតលេខ"។
   - បន្ថែម \`<input id="num1" type="text" placeholder="លេខទី១">\`, \`<input id="num2" type="text" placeholder="លេខទី២">\`។
   - បន្ថែម \`<button id="add">បូក</button>\`, \`<button id="subtract">ដក</button>\`, \`<button id="multiply">គុណ</button>\`, \`<button id="divide">ចែក</button>\`។
   - បន្ថែម \`<p id="result">លទ្ធផលនឹងបង្ហាញនៅទីនេះ</p>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - បង្កើត Function \`calculate\` ដែលទទួល Operation និងលេខពីរ ហើយ Return លទ្ធផល។
   - បន្ថែម Error Handling សម្រាប់ Inputs មិនត្រឹមត្រូវ និងការចែកនឹងសូន្យ។
   - បង្កើត Function \`updateResult\` ដើម្បីធ្វើបច្ចុប្បន្នភាព \`<p id="result">\`។
   - ប្រើ Event Listeners សម្រាប់ប៊ូតុងនីមួយៗ។
   - ប្រើ Descriptive Names និង Comments។

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
  <title>Simple Calculator</title>
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
  <button id="subtract">ដក</button>
  <button id="multiply">គុណ</button>
  <button id="divide">ចែក</button>
  <p id="result">លទ្ធផលនឹងបង្ហាញនៅទីនេះ</p>
  <script>
    // គណនាលទ្ធផលដោយផ្អែកលើប្រមាណវិធី
    function calculate(operation, num1, num2) {
      try {
        const a = Number(num1);
        const b = Number(num2);
        if (isNaN(a) || isNaN(b)) throw new Error('សូមបញ្ចូលលេខត្រឹមត្រូវ');
        switch (operation) {
          case 'add':
            return a + b;
          case 'subtract':
            return a - b;
          case 'multiply':
            return a * b;
          case 'divide':
            if (b === 0) throw new Error('មិនអាចចែកនឹងសូន្យបានទេ');
            return a / b;
          default:
            throw new Error('ប្រមាណវិធីមិនត្រឹមត្រូវ');
        }
      } catch (error) {
        return error.message;
      }
    }

    // ធ្វើបច្ចុប្បន្នភាព UI ជាមួយលទ្ធផល
    function updateResult(result) {
      const resultElement = document.getElementById('result');
      resultElement.textContent = \`លទ្ធផល: \${result}\`;
    }

    // ដោះស្រាយការចុចប៊ូតុង
    document.getElementById('add').addEventListener('click', () => {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;
      updateResult(calculate('add', num1, num2));
    });

    document.getElementById('subtract').addEventListener('click', () => {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;
      updateResult(calculate('subtract', num1, num2));
    });

    document.getElementById('multiply').addEventListener('click', () => {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;
      updateResult(calculate('multiply', num1, num2));
    });

    document.getElementById('divide').addEventListener('click', () => {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;
      updateResult(calculate('divide', num1, num2));
    });
  </script>
</body>
</html>
`
  }
};

export default JSLesson8_2Content;