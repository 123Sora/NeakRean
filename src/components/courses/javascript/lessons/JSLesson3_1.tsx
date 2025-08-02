import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson3_1Content: LessonContent = {
  title: 'Arrays',
  objectives: [
    'យល់ដឹងអំពី Arrays និងសារៈសំខាន់របស់វា',
    'រៀនបង្កើត និងប្រើ Arrays ក្នុង JavaScript',
    'ស្វែងយល់អំពី Array Methods ដូចជា push, pop, map, filter និង reduce',
    'អនុវត្តន៍ការប្រើ Arrays ដើម្បីគ្រប់គ្រងទិន្នន័យ',
    'យល់ពី Iteration និង Array Destructuring'
  ],
  content: `
# Arrays 📋

---

**Arrays** គឺជាប្រភេទទិន្នន័យដែលប្រើសម្រាប់ផ្ទុកបញ្ជីនៃទិន្នន័យជាលំដាប់។ Arrays អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងទិន្នន័យច្រើនក្នុងពេលតែមួយ។

---

## 1. ការបង្កើត Arrays

អ្នកអាចបង្កើត Array ដោយប្រើ Square Brackets \`[]\` ឬ \`Array\` Constructor។

\`\`\`javascript
let fruits = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"];
let numbers = new Array(1, 2, 3);
console.log(fruits); // ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"]
console.log(numbers); // [1, 2, 3]
\`\`\`

---

## 2. ការចូលប្រើ និងកែប្រែ Elements

Arrays ប្រើ Index (ចាប់ផ្តើមពី 0) ដើម្បីចូលប្រើ ឬកែប្រែ Elements។

\`\`\`javascript
let fruits = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"];
console.log(fruits[0]); // ផ្លែប៉ោម
fruits[1] = "ទំពាំងបាយជូរ";
console.log(fruits); // ["ផ្លែប៉ោម", "ទំពាំងបាយជូរ", "ស្វាយ"]
\`\`\`

---

## 3. Array Methods

JavaScript ផ្តល់ជូននូវ Methods ជាច្រើនសម្រាប់ធ្វើការជាមួយ Arrays។

### 3.1 Mutating Methods
- \`push()\`: បន្ថែម Element នៅចុង Array
- \`pop()\`: លុប Element ចុងក្រោយ
- \`shift()\`: លុប Element ដំបូង
- \`unshift()\`: បន្ថែម Element នៅដើម Array

\`\`\`javascript
let fruits = ["ផ្លែប៉ោម", "ចេក"];
fruits.push("ស្វាយ"); // ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"]
fruits.pop(); // ["ផ្លែប៉ោម", "ចេក"]
fruits.unshift("ល្មើ"); // ["ល្មើ", "ផ្លែប៉ោម", "ចេក"]
console.log(fruits);
\`\`\`

### 3.2 Non-Mutating Methods
- \`concat()\`: បញ្ចូល Arrays ច្រើនជាមួយគ្នា
- \`slice()\`: យកផ្នែកមួយនៃ Array
- \`join()\`: បំលែង Array ទៅជា String

\`\`\`javascript
let fruits = ["ផ្លែប៉ោម", "ចេក"];
let moreFruits = fruits.concat(["ស្វាយ", "ល្មើ"]);
console.log(moreFruits); // ["ផ្លែប៉ោម", "ចេក", "ស្វាយ", "ល្មើ"]
console.log(fruits.slice(0, 2)); // ["ផ្លែប៉ោម", "ចេក"]
console.log(fruits.join(", ")); // ផ្លែប៉ោម, ចេក
\`\`\`

### 3.3 Higher-Order Methods
- \`map()\`: បង្កើត Array ថ្មីដោយអនុវត្ត Function លើគ្រប់ Element
- \`filter()\`: បង្កើត Array ថ្មីដែលមាន Elements ដែលត្រូវនឹង Condition
- \`reduce()\`: បំលែង Array ទៅជាតម្លៃតែមួយ

\`\`\`javascript
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]
let evens = numbers.filter(num => num % 2 === 0); // [2, 4]
let sum = numbers.reduce((acc, num) => acc + num, 0); // 10
console.log(doubled, evens, sum);
\`\`\`

---

## 4. Array Iteration

ប្រើ \`for\`, \`for...of\`, ឬ \`forEach()\` ដើម្បីឆ្លងកាត់ Elements។

\`\`\`javascript
let fruits = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"];
fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});
// 0: ផ្លែប៉ោម
// 1: ចេក
// 2: ស្វាយ
\`\`\`

---

## 5. Array Destructuring

អនុញ្ញាតឱ្យផ្ទុក Elements ទៅ Variables យ៉ាងងាយស្រួល។

\`\`\`javascript
let fruits = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"];
let [first, second] = fruits;
console.log(first, second); // ផ្លែប៉ោម ចេក
\`\`\`

---

## 6. ការប្រើ Arrays ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Arrays</title>
</head>
<body>
  <h1>សាកល្បង Arrays</h1>
  <p id="output"></p>
  <script>
    const fruits = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"];
    fruits.push("ល្មើ");
    const fruitList = fruits.map((fruit, index) => \`\${index + 1}. \${fruit}\`).join("\\n");
    document.getElementById("output").innerText = fruitList;
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:**
1. ផ្លែប៉ោម
2. ចេក
3. ស្វាយ
4. ល្មើ
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Array Methods</h3>
<p id="example1">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let numbers = [1, 2, 3, 4];
  let squares = numbers.map(num => num ** 2);
  console.log(squares); // [1, 4, 9, 16]
</script>
<pre><code class="language-javascript">
let numbers = [1, 2, 3, 4];
let squares = numbers.map(num => num ** 2);
console.log(squares);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Filter និង Reduce</h3>
<p id="example2">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let scores = [85, 90, 75, 95];
  let passing = scores.filter(score => score >= 80);
  let total = scores.reduce((acc, score) => acc + score, 0);
  console.log(passing, total); // [85, 90, 95], 345
</script>
<pre><code class="language-javascript">
let scores = [85, 90, 75, 95];
let passing = scores.filter(score => score >= 80);
let total = scores.reduce((acc, score) => acc + score, 0);
console.log(passing, total);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Array នៅក្នុង JavaScript គឺជាអ្វី?',
      options: [
        'ប្រភេទទិន្នន័យសម្រាប់ផ្ទុកតម្លៃតែមួយ',
        'បញ្ជីនៃទិន្នន័យជាលំដាប់',
        'Object ដែលមាន Key-Value Pairs',
        'Function សម្រាប់គណនា'
      ],
      correct: 1,
      explanation: 'Array គឺជាបញ្ជីនៃទិន្នន័យជាលំដាប់ដែលអាចផ្ទុកតម្លៃច្រើន។'
    },
    {
      question: 'តើ Index នៃ Element ដំបូងនៅក្នុង Array គឺជាអ្វី?',
      options: ['-1', '0', '1', 'undefined'],
      correct: 1,
      explanation: 'Index នៃ Element ដំបូងនៅក្នុង Array ចាប់ផ្តើមពី 0។'
    },
    {
      question: 'តើ Method ណាមួយបន្ថែម Element នៅចុង Array?',
      options: ['push()', 'pop()', 'shift()', 'unshift()'],
      correct: 0,
      explanation: '`push()` បន្ថែម Element នៅចុង Array។'
    },
    {
      question: 'តើ Method `map()` ធ្វើអ្វី?',
      options: [
        'លុប Elements',
        'បង្កើត Array ថ្មីដោយអនុវត្ត Function លើគ្រប់ Element',
        'បញ្ចូល Arrays',
        'បំលែង Array ទៅជា String'
      ],
      correct: 1,
      explanation: '`map()` បង្កើត Array ថ្មីដោយអនុវត្ត Function លើគ្រប់ Element។'
    },
    {
      question: 'តើកូដ `let arr = [1, 2, 3]; arr.pop();` នឹងធ្វើឱ្យ `arr` មានតម្លៃអ្វី?',
      options: ['[1, 2]', '[1, 2, 3]', '[2, 3]', '[1, 3]'],
      correct: 0,
      explanation: '`pop()` លុប Element ចុងក្រោយ ដូច្នេះ `arr` នឹងជា `[1, 2]`។'
    },
    {
      question: 'តើ Method `filter()` បង្ហាញលទ្ធផលអ្វី?',
      options: [
        'Array ថ្មីដែលមាន Elements ដែលត្រូវនឹង Condition',
        'តម្លៃតែមួយ',
        'Array ដើម',
        'String'
      ],
      correct: 0,
      explanation: '`filter()` បង្កើត Array ថ្មីដែលមាន Elements ដែលត្រូវនឹង Condition។'
    },
    {
      question: 'តើ `reduce()` Method ប្រើសម្រាប់អ្វី?',
      options: [
        'បន្ថែម Elements',
        'បំលែង Array ទៅជាតម្លៃតែមួយ',
        'តម្រៀប Array',
        'បញ្ចូល Arrays'
      ],
      correct: 1,
      explanation: '`reduce()` បំលែង Array ទៅជាតម្លៃតែមួយដោយប្រើ Accumulator។'
    },
    {
      question: 'តើកូដ `let arr = ["a", "b", "c"]; arr.join("-");` នឹងបង្ហាញអ្វី?',
      options: ['a-b-c', 'abc', '[a, b, c]', 'a, b, c'],
      correct: 0,
      explanation: '`join("-")` បំលែង Array ទៅជា String ដោយប្រើ "-" ជា Separator។'
    },
    {
      question: 'តើ Array Destructuring ធ្វើអ្វី?',
      options: [
        'បំផ្លាញ Array',
        'ផ្ទុក Elements ទៅ Variables យ៉ាងងាយស្រួល',
        'បន្ថែម Elements',
        'តម្រៀប Array'
      ],
      correct: 1,
      explanation: 'Array Destructuring អនុញ្ញាតឱ្យផ្ទុក Elements ទៅ Variables យ៉ាងងាយស្រួល។'
    },
    {
      question: 'តើ Method `forEach()` បង្ហាញលទ្ធផលអ្វី?',
      options: [
        'Array ថ្មី',
        'តម្លៃតែមួយ',
        'គ្មានលទ្ធផល (undefined)',
        'String'
      ],
      correct: 2,
      explanation: '`forEach()` អនុវត្ត Function លើគ្រប់ Element ប៉ុន្តែបញ្ជូន `undefined` ត្រឡប់មកវិញ។'
    },
    {
      question: 'តើកូដ `let arr = [1, 2, 3]; arr.slice(1, 3);` នឹងបង្ហាញអ្វី?',
      options: ['[1, 2]', '[2, 3]', '[1, 3]', '[2]'],
      correct: 1,
      explanation: '`slice(1, 3)` យក Elements ពី Index 1 ដល់ 2 (មិនរាប់ 3)។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Arrays ដើម្បីបង្ហាញបញ្ជីនៃទំនិញនៅក្នុងហាង។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Store Inventory"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "បញ្ជីទំនិញនៅក្នុងហាង"។
   - បន្ថែម \`<p id="inventory">\` សម្រាប់បង្ហាញលទ្ធផល។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រកាស Array \`const items = ["សៀវភៅ", "ប៊ិច", "កាបូប", "នាឡិកា"];\`។
   - ប្រើ \`push()\` ដើម្បីបន្ថែម "ស្បែកជើង" ទៅចុង Array។
   - ប្រើ \`map()\` ដើម្បីបង្កើត Array ថ្មីដែលបន្ថែមលេខរៀង (ឧ. "1. សៀវភៅ")។
   - ប្រើ \`join("\\n")\` ដើម្បីបំលែង Array ទៅជា String ដែលមានបន្ទាត់ថ្មី។
   - បង្ហាញលទ្ធផលនៅក្នុង \`<p id="inventory">\`។

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
  <title>Store Inventory</title>
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
  <h1>បញ្ជីទំនិញនៅក្នុងហាង</h1>
  <p id="inventory"></p>
  <script>
    const items = ["សៀវភៅ", "ប៊ិច", "កាបូប", "នាឡិកា"];
    items.push("ស្បែកជើង");
    const itemList = items.map((item, index) => \`\${index + 1}. \${item}\`).join("\\n");
    document.getElementById("inventory").innerText = itemList;
  </script>
</body>
</html>
`
  }
};

export default JSLesson3_1Content;