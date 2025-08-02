import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson2_2Content: LessonContent = {
  title: 'Operators',
  objectives: [
    'យល់ដឹងអំពីប្រភេទនៃ Operators នៅក្នុង JavaScript',
    'រៀនប្រើ Arithmetic Operators (+, -, *, /, %)',
    'ស្វែងយល់អំពី Comparison Operators (==, ===, !=, !==, >, <)',
    'ស្គាល់ Assignment Operators (=, +=, -=, *=, /=)',
    'រៀនប្រើ Logical Operators (&&, ||, !)',
    'អនុវត្តន៍ការប្រើ Operators ក្នុងកូដ'
  ],
  content: `
# Operators ⚙️

---

**Operators** គឺជានិមិត្តសញ្ញាដែលប្រើសម្រាប់ធ្វើប្រតិបត្តិការលើ Variables និងតម្លៃ។ នៅក្នុង JavaScript មាន Operators ជាច្រើនប្រភេទ ដែលសំខាន់ៗរួមមាន Arithmetic, Comparison, Assignment, និង Logical Operators។

---

## 1. Arithmetic Operators

ប្រើសម្រាប់ធ្វើប្រតិបត្តិការគណិតវិទ្យា។

| Operator | ន័យ                 | ឧទាហរណ៍          |
| :------- | :------------------- | :----------------- |
| \`+\`      | បូក                 | \`5 + 3\` // 8      |
| \`-\`      | ដក                 | \`5 - 3\` // 2      |
| \`*\`      | គុណ                | \`5 * 3\` // 15     |
| \`/\`      | ចែក                | \`6 / 2\` // 3      |
| \`%\`      | សល់ពីការចែក      | \`5 % 2\` // 1      |
| \`**\`     | ស្វ័កគុណ (Exponent) | \`2 ** 3\` // 8     |

**ឧទាហរណ៍:**
\`\`\`javascript
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** 2); // 100
\`\`\`

---

## 2. Comparison Operators

ប្រើសម្រាប់ប្រៀបធៀបតម្លៃ និងបង្ហាញលទ្ធផលជា Boolean (\`true\` ឬ \`false\`)។

| Operator | ន័យ                     | ឧទាហរណ៍             |
| :------- | :----------------------- | :------------------- |
| \`==\`     | ស្មើ (Loose Equality)    | \`5 == "5"\` // true   |
| \`===\`    | ស្មើ (Strict Equality)   | \`5 === "5"\` // false |
| \`!=\`     | មិនស្មើ (Loose)        | \`5 != "5"\` // false  |
| \`!==\`    | មិនស្មើ (Strict)       | \`5 !== "5"\` // true  |
| \`>\`      | ធំជាង                 | \`5 > 3\` // true      |
| \`<\`      | តូចជាង                | \`5 < 3\` // false     |
| \`>=\`     | ធំជាងឬស្មើ          | \`5 >= 5\` // true     |
| \`<=\`     | តូចជាងឬស្មើ         | \`5 <= 3\` // false    |

**ឧទាហរណ៍:**
\`\`\`javascript
let x = 10;
let y = "10";
console.log(x == y);  // true (ប្រៀបធៀបតម្លៃ)
console.log(x === y); // false (ប្រៀបធៀបទាំងតម្លៃនិងប្រភេទ)
console.log(x > 5);   // true
console.log(x <= 10); // true
\`\`\`

---

## 3. Assignment Operators

ប្រើសម្រាប់កំណត់តម្លៃទៅ Variables។

| Operator | ន័យ                     | ឧទាហរណ៍             |
| :------- | :----------------------- | :------------------- |
| \`=\`      | កំណត់តម្លៃ            | \`x = 5\`             |
| \`+=\`     | បូកហើយកំណត់          | \`x += 3\` // x = x + 3 |
| \`-=\`     | ដកហើយកំណត់          | \`x -= 2\` // x = x - 2 |
| \`*=\`     | គុណហើយកំណត់         | \`x *= 4\` // x = x * 4 |
| \`/=\`     | ចែកហើយកំណត់         | \`x /= 2\` // x = x / 2 |

**ឧទាហរណ៍:**
\`\`\`javascript
let num = 10;
num += 5; // num = 15
num *= 2; // num = 30
console.log(num); // 30
\`\`\`

---

## 4. Logical Operators

ប្រើសម្រាប់ផ្សំ Conditions ឬ Logic។

| Operator | ន័យ                     | ឧទាហរណ៍                     |
| :------- | :----------------------- | :--------------------------- |
| \`&&\`     | AND (និង)              | \`true && false\` // false     |
| \`// \`     | OR (ឬ)                 | \`true // false\` // true      |
| \`!\`      | NOT (មិន)              | \`!true\` // false             |

**ឧទាហរណ៍:**
\`\`\`javascript
let age = 25;
let hasLicense = true;
console.log(age >= 18 && hasLicense); // true
console.log(age < 18 || hasLicense); // true
console.log(!hasLicense); // false
\`\`\`

---

## 5. ការប្រើ Operators ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Operators</title>
</head>
<body>
  <h1>សាកល្បង Operators</h1>
  <p id="result"></p>
  <script>
    let a = 10;
    let b = 3;
    let sum = a + b;
    let isEqual = a === b;
    let canDrive = a >= 18 && b < 5;
    
    document.getElementById("result").innerText = 
      \`បូក: \${sum}, ស្មើគ្នា: \${isEqual}, អាចបើកបរ: \${canDrive}\`;
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** បូក: 13, ស្មើគ្នា: false, អាចបើកបរ: false
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Arithmetic Operators</h3>
<p id="mathResult">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let x = 20;
  let y = 7;
  console.log("បូក:", x + y);
  console.log("សល់ពីការចែក:", x % y);
</script>
<pre><code class="language-javascript">
let x = 20;
let y = 7;
console.log("បូក:", x + y);
console.log("សល់ពីការចែក:", x % y);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Comparison និង Logical Operators</h3>
<p id="logicResult">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let age = 16;
  let hasPermission = false;
  console.log("អាចចូលបាន:", age >= 18 && hasPermission);
</script>
<pre><code class="language-javascript">
let age = 16;
let hasPermission = false;
console.log("អាចចូលបាន:", age >= 18 && hasPermission);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Operator ណាមួយខាងក្រោមប្រើសម្រាប់គណនាសល់ពីការចែក?',
      options: ['+', '-', '%', '*'],
      correct: 2,
      explanation: '`%` គឺជា Modulus Operator ដែលប្រើសម្រាប់គណនាសល់ពីការចែក។'
    },
    {
      question: 'តើ `5 == "5"` នឹងបង្ហាញអ្វី?',
      options: ['true', 'false', 'undefined', 'null'],
      correct: 0,
      explanation: '`==` ប្រៀបធៀបតម្លៃប៉ុណ្ណោះ (Loose Equality) ដូច្នេះ `5 == "5"` បង្ហាញ `true`។'
    },
    {
      question: 'តើ `5 === "5"` នឹងបង្ហាញអ្វី?',
      options: ['true', 'false', 'undefined', 'null'],
      correct: 1,
      explanation: '`===` ប្រៀបធៀបទាំងតម្លៃនិងប្រភេទ (Strict Equality) ដូច្នេះ `5 === "5"` បង្ហាញ `false`។'
    },
    {
      question: 'តើ Operator ណាមួយខាងក្រោមជា Logical Operator?',
      options: ['+', '&&', '=', '>'],
      correct: 1,
      explanation: '`&&` គឺជា Logical AND Operator។'
    },
    {
      question: 'តើកូដ `let x = 10; x += 5;` នឹងធ្វើឱ្យ `x` មានតម្លៃប៉ុន្មាន?',
      options: ['5', '10', '15', '50'],
      correct: 2,
      explanation: '`x += 5` មានន័យថា `x = x + 5` ដូច្នេះ `x` នឹងមានតម្លៃ 15។'
    },
    {
      question: 'តើ Operator `**` ធ្វើអ្វី?',
      options: ['បូក', 'គុណ', 'ស្វ័កគុណ (Exponent)', 'ចែក'],
      correct: 2,
      explanation: '`**` គឺជា Exponentiation Operator សម្រាប់គណនាស្វ័កគុណ។'
    },
    {
      question: 'តើ `true && false` នឹងបង្ហាញអ្វី?',
      options: ['true', 'false', 'undefined', 'null'],
      correct: 1,
      explanation: '`&&` បង្ហាញ `true` លុះត្រាតែ Conditions ទាំងពីរជា `true`។'
    },
    {
      question: 'តើ `!true` នឹងបង្ហាញអ្វី?',
      options: ['true', 'false', 'undefined', 'null'],
      correct: 1,
      explanation: '`!` ប្តូរតម្លៃ Boolean ទៅជាផ្ទុយ ដូច្នេះ `!true` បង្ហាញ `false`។'
    },
    {
      question: 'តើ Operator ណាមួយប្រើសម្រាប់កំណត់តម្លៃ?',
      options: ['==', '=', '===', '&&'],
      correct: 1,
      explanation: '`=` គឺជា Assignment Operator សម្រាប់កំណត់តម្លៃទៅ Variable។'
    },
    {
      question: 'តើកូដ `let x = 8; x *= 2;` នឹងធ្វើឱ្យ `x` មានតម្លៃប៉ុន្មាន?',
      options: ['4', '8', '16', '10'],
      correct: 2,
      explanation: '`x *= 2` មានន័យថា `x = x * 2` ដូច្នេះ `x` នឹងមានតម្លៃ 16។'
    },
    {
      question: 'តើ `5 != "5"` នឹងបង្ហាញអ្វី?',
      options: ['true', 'false', 'undefined', 'null'],
      correct: 1,
      explanation: '`!=` ប្រៀបធៀបតម្លៃប៉ុណ្ណោះ (Loose Inequality) ដូច្នេះ `5 != "5"` បង្ហាញ `false`។'
    },
    {
      question: 'តើ Operator `||` ធ្វើអ្វី?',
      options: ['AND', 'OR', 'NOT', 'Exponent'],
      correct: 1,
      explanation: '`||` គឺជា Logical OR Operator ដែលបង្ហាញ `true` ប្រសិនបើ Condition មួយណាមួយជា `true`។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Operators ដើម្បីគណនា និងបង្ហាញលទ្ធផល។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Operator Calculator"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "កម្មវិធីគណនា"។
   - បន្ថែម \`<p id="calcResult">\` សម្រាប់បង្ហាញលទ្ធផល។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រកាស Variables:
     - \`const num1 = 15;\` (Number)
     - \`const num2 = 4;\` (Number)
   - ប្រើ Operators ដើម្បីគណនា:
     - បូក (\`+\`), ដក (\`-\`), គុណ (\`*\`), ចែក (\`/\`), និងសល់ពីការចែក (\`%\`)។
     - ប្រៀបធៀប \`num1\` និង \`num2\` ដោយប្រើ \`>\` និង \`===\`។
     - ប្រើ Logical Operator \`&&\` ដើម្បីពិនិត្យថាតើ \`num1 > 10\` និង \`num2 < 5\` ជា \`true\` ទាំងពីរ។
   - បង្ហាញលទ្ធផលនៅក្នុង \`<p id="calcResult">\` ដោយប្រើ Template Literal ដូចជា: "បូក: 19, ដក: 11, គុណ: 60, ចែក: 3.75, សល់: 3, ធំជាង: true, ស្មើ: false, លក្ខខណ្ឌ: true"។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 16px;\` និង \`color: #444;\` សម្រាប់ \`<p>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Operator Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p {
      font-size: 16px;
      color: #444;
    }
  </style>
</head>
<body>
  <h1>កម្មវិធីគណនា</h1>
  <p id="calcResult"></p>
  <script>
    const num1 = 15;
    const num2 = 4;
    let sum = num1 + num2;
    let subtract = num1 - num2;
    let multiply = num1 * num2;
    let divide = num1 / num2;
    let modulus = num1 % num2;
    let isGreater = num1 > num2;
    let isEqual = num1 === num2;
    let condition = num1 > 10 && num2 < 5;
    
    document.getElementById("calcResult").innerText = 
      \`บอก: \${sum}, ดก: \${subtract}, คูณ: \${multiply}, แบ่ง: \${divide}, เหลือ: \${modulus}, ใหญ่กว่า: \${isGreater}, เท่ากัน: \${isEqual}, เงื่อนไข: \${condition}\`;
  </script>
</body>
</html>
`
  }
};

export default JSLesson2_2Content;