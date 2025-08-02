import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson3_4Content: LessonContent = {
  title: 'Scope និង Hoisting',
  objectives: [
    'យល់ដឹងអំពី Scope នៅក្នុង JavaScript (Global, Function, Block)',
    'ស្វែងយល់អំពី Hoisting និងរបៀបដែលវាដំណើរការ',
    'រៀនភាពខុសគ្នារវាង var, let, និង const ទាក់ទងនឹង Scope និង Hoisting',
    'អនុវត្តន៍ការប្រើ Scope និង Hoisting ក្នុងកូដ',
    'ជៀសវាងកំហុសទូទៅទាក់ទងនឹង Scope និង Hoisting'
  ],
  content: `
# Scope និង Hoisting 🔍

---

**Scope** គឺជាតំបន់នៅក្នុងកូដដែល Variables និង Functions អាចត្រូវបានចូលប្រើ។ **Hoisting** គឺជាយន្តការនៅក្នុង JavaScript ដែលផ្លាស់ទីការប្រកាស Variables និង Functions ទៅកំពូលនៃ Scope មុនពេលកូដត្រូវបានប្រតិបត្តិ។

---

## 1. ប្រភេទនៃ Scope

### 1.1 Global Scope
Variables ដែលប្រកាសនៅខាងក្រៅ Function មាន Global Scope និងអាចចូលប្រើបានគ្រប់ទីកន្លែង។

\`\`\`javascript
let globalVar = "ខ្ញុំជា Global";
function test() {
  console.log(globalVar);
}
test(); // បង្ហាញ: ខ្ញុំជា Global
\`\`\`

### 1.2 Function Scope
Variables ដែលប្រកាសនៅក្នុង Function មាន Function Scope និងអាចចូលប្រើបានតែនៅក្នុង Function នោះ។

\`\`\`javascript
function test() {
  let localVar = "ខ្ញុំជា Local";
  console.log(localVar);
}
test(); // បង្ហាញ: ខ្ញុំជា Local
console.log(localVar); // Error: localVar is not defined
\`\`\`

### 1.3 Block Scope
Variables ដែលប្រកាសដោយ \`let\` ឬ \`const\` នៅក្នុង Block \`{}\` (ឧ. if, for) មាន Block Scope។

\`\`\`javascript
if (true) {
  let blockVar = "ខ្ញុំជា Block";
  console.log(blockVar); // បង្ហាញ: ខ្ញុំជា Block
}
console.log(blockVar); // Error: blockVar is not defined
\`\`\`

**ចំណាំ:** \`var\` មិនគោរព Block Scope ប៉ុន្តែគោរព Function Scope។

\`\`\`javascript
if (true) {
  var noBlock = "ខ្ញុំមិនមាន Block Scope";
}
console.log(noBlock); // បង្ហាញ: ខ្ញុំមិនមាន Block Scope
\`\`\`

---

## 2. Hoisting

Hoisting ផ្លាស់ទីការប្រកាស Variables (\`var\`) និង Function Declarations ទៅកំពូលនៃ Scope។

### 2.1 Variable Hoisting
- \`var\`: ប្រកាសត្រូវបាន Hoisted ប៉ុន្តែ Initialization មិនត្រូវបាន Hoisted។
- \`let\` និង \`const\`: ប្រកាសត្រូវបាន Hoisted ប៉ុន្តែនៅក្នុង Temporal Dead Zone (TDZ) ដែលបណ្តាលឱ្យមាន Error ប្រសិនបើចូលប្រើមុន Initialization។

\`\`\`javascript
console.log(x); // undefined
var x = 10;

console.log(y); // Error: Cannot access 'y' before initialization
let y = 20;
\`\`\`

### 2.2 Function Hoisting
Function Declarations ត្រូវបាន Hoisted ទាំងស្រុង (រួមទាំង Body)។

\`\`\`javascript
sayHello(); // បង្ហាញ: សួស្តី
function sayHello() {
  console.log("សួស្តី");
}
\`\`\`

**ចំណាំ:** Function Expressions មិនត្រូវបាន Hoisted ទាំងស្រុង។

\`\`\`javascript
sayHi(); // Error: sayHi is not a function
var sayHi = function() {
  console.log("ជំរាបសួរ");
};
\`\`\`

---

## 3. var, let, និង const

- \`var\`: Function Scope, Hoisted, អនុញ្ញាតឱ្យ Re-declare និង Re-assign។
- \`let\`: Block Scope, Hoisted (TDZ), អនុញ្ញាតឱ្យ Re-assign ប៉ុន្តែមិនអនុញ្ញាត Re-declare។
- \`const\`: Block Scope, Hoisted (TDZ), មិនអនុញ្ញាត Re-assign ឬ Re-declare (ប៉ុន្តែអនុញ្ញាតឱ្យកែប្រែ Object Properties)។

\`\`\`javascript
const person = { name: "សុខា" };
person.name = "លីណា"; // អនុញ្ញាត
console.log(person); // { name: "លីណា" }
person = {}; // Error: Assignment to constant variable
\`\`\`

---

## 4. ការប្រើ Scope និង Hoisting ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Scope និង Hoisting</title>
</head>
<body>
  <h1>សាកល្បង Scope និង Hoisting</h1>
  <p id="output"></p>
  <script>
    let result = "";
    function testScope() {
      let localVar = "ខ្ញុំជា Local";
      if (true) {
        let blockVar = "ខ្ញុំជា Block";
        result += localVar + "\\n" + blockVar;
      }
    }
    testScope();
    document.getElementById("output").innerText = result;
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:**
ខ្ញុំជា Local
ខ្ញុំជា Block
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Hoisting ជាមួយ var</h3>
<p id="example1">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
</script>
<pre><code class="language-javascript">
console.log(x);
var x = 5;
console.log(x);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Block Scope ជាមួយ let</h3>
<p id="example2">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  if (true) {
    let blockVar = "Block Scope";
    console.log(blockVar); // Block Scope
  }
  console.log(typeof blockVar); // undefined
</script>
<pre><code class="language-javascript">
if (true) {
  let blockVar = "Block Scope";
  console.log(blockVar);
}
console.log(typeof blockVar);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Scope នៅក្នុង JavaScript គឺជាអ្វី?',
      options: [
        'ប្រភេទទិន្នន័យ',
        'តំបន់ដែល Variables អាចចូលប្រើបាន',
        'Function សម្រាប់គណនា',
        'Object ដែលផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Scope គឺជាតំបន់នៅក្នុងកូដដែល Variables និង Functions អាចចូលប្រើបាន។'
    },
    {
      question: 'តើ Hoisting ធ្វើអ្វី?',
      options: [
        'លុប Variables',
        'ផ្លាស់ទីការប្រកាសទៅកំពូលនៃ Scope',
        'បំលែង Variables ទៅជា Constants',
        'បង្កើត Scope ថ្មី'
      ],
      correct: 1,
      explanation: 'Hoisting ផ្លាស់ទីការប្រកាស Variables និង Functions ទៅកំពូលនៃ Scope។'
    },
    {
      question: 'តើ `var` មាន Scope ប្រភេទណា?',
      options: ['Global Scope', 'Function Scope', 'Block Scope', 'Module Scope'],
      correct: 1,
      explanation: '`var` មាន Function Scope និងមិនគោរព Block Scope។'
    },
    {
      question: 'តើកូដ `console.log(x); var x = 10;` នឹងបង្ហាញអ្វី?',
      options: ['10', 'undefined', 'Error', 'null'],
      correct: 1,
      explanation: '`var x` ត្រូវបាន Hoisted ប៉ុន្តែ Initialization មិនត្រូវបាន Hoisted ដូច្នេះបង្ហាញ `undefined`។'
    },
    {
      question: 'តើ `let` និង `const` ត្រូវបាន Hoisted ឬអត់?',
      options: [
        'បាន ប៉ុន្តែនៅក្នុង Temporal Dead Zone',
        'មិនបាន',
        'បាន ដូច `var`',
        'បានតែក្នុង Global Scope'
      ],
      correct: 0,
      explanation: '`let` និង `const` ត្រូវបាន Hoisted ប៉ុន្តែនៅក្នុង TDZ ដែលបណ្តាលឱ្យមាន Error ប្រសិនបើចូលប្រើមុន Initialization។'
    },
    {
      question: 'តើ Function Declaration ត្រូវបាន Hoisted ឬអត់?',
      options: ['បាន ទាំងស្រុង', 'មិនបាន', 'បានតែក្នុង Block Scope', 'បានតែឈ្មោះ'],
      correct: 0,
      explanation: 'Function Declaration ត្រូវបាន Hoisted ទាំងស្រុង (រួមទាំង Body)។'
    },
    {
      question: 'តើកូដ `if (true) { var x = 5; } console.log(x);` នឹងបង្ហាញអ្វី?',
      options: ['5', 'undefined', 'Error', 'null'],
      correct: 0,
      explanation: '`var` មិនគោរព Block Scope ដូច្នេះ `x` អាចចូលប្រើបាន និងបង្ហាញ 5។'
    },
    {
      question: 'តើ `const` អនុញ្ញាតឱ្យ Re-assign ឬអត់?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Block Scope', 'បានតែក្នុង Object'],
      correct: 1,
      explanation: '`const` មិនអនុញ្ញាតឱ្យ Re-assign ប៉ុន្តែអនុញ្ញាតឱ្យកែប្រែ Object Properties។'
    },
    {
      question: 'តើ Temporal Dead Zone (TDZ) គឺជាអ្វី?',
      options: [
        'តំបន់ដែល Variables មិនអាចចូលប្រើបានមុន Initialization',
        'Scope សម្រាប់ Functions',
        'តំបន់សម្រាប់ Global Variables',
        'Error នៅក្នុង Function Scope'
      ],
      correct: 0,
      explanation: 'TDZ គឺជាតំបន់ដែល `let` និង `const` មិនអាចចូលប្រើបានមុន Initialization។'
    },
    {
      question: 'តើកូដ `sayHi(); function sayHi() { console.log("Hi"); }` នឹងបង្ហាញអ្វី?',
      options: ['Hi', 'undefined', 'Error', 'null'],
      correct: 0,
      explanation: 'Function Declaration ត្រូវបាន Hoisted ទាំងស្រុង ដូច្នេះបង្ហាញ "Hi"។'
    },
    {
      question: 'តើ `var` អនុញ្ញាតឱ្យ Re-declare ឬអត់?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Block Scope', 'បានតែក្នុង Global Scope'],
      correct: 0,
      explanation: '`var` អនុញ្ញាតឱ្យ Re-declare និង Re-assign។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្ហាញអំពីការប្រើ Scope និង Hoisting។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Scope and Hoisting Demo"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "សាកល្បង Scope និង Hoisting"។
   - បន្ថែម \`<p id="output">\` សម្រាប់បង្ហាញលទ្ធផល។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - បង្កើត Function Declaration \`showMessage()\` ដែល:
     - ប្រកាស \`let localVar = "ខ្ញុំជា Local";\`។
     - មាន Block \`{}\` ដែលប្រកាស \`const blockVar = "ខ្ញុំជា Block";\`។
     - Return String ដែលរួមបញ្ចូល \`localVar\` និង \`blockVar\` (ប្រើ Template Literal)។
   - ប្រកាស \`var globalVar = "ខ្ញុំជា Global";\` នៅ Global Scope។
   - ហៅ \`showMessage()\` និងបន្ថែម \`globalVar\` ទៅលទ្ធផល។
   - បង្ហាញលទ្ធផលនៅក្នុង \`<p id="output">\`។

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
  <title>Scope and Hoisting Demo</title>
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
  <h1>សាកល្បង Scope និង Hoisting</h1>
  <p id="output"></p>
  <script>
    var globalVar = "ខ្ញុំជា Global";
    function showMessage() {
      let localVar = "ខ្ញុំជា Local";
      if (true) {
        const blockVar = "ខ្ញុំជា Block";
        return \`\${localVar}\\n\${blockVar}\`;
      }
    }
    const result = showMessage() + "\\n" + globalVar;
    document.getElementById("output").innerText = result;
  </script>
</body>
</html>
`
  }
};

export default JSLesson3_4Content;