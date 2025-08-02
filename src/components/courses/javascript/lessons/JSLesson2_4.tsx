import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson2_4Content: LessonContent = {
  title: 'Functions',
  objectives: [
    'យល់ដឹងអំពី Functions និងសារៈសំខាន់របស់វា',
    'រៀនបង្កើត Functions ដោយប្រើ Function Declaration និង Function Expression',
    'ស្វែងយល់អំពី Parameters និង Return Values',
    'ស្គាល់ Arrow Functions និងភាពខុសគ្នារបស់វា',
    'អនុវត្តន៍ការប្រើ Functions ក្នុងកូដ'
  ],
  content: `
# Functions 🛠️

---

**Functions** គឺជាប្លុកនៃកូដដែលអាចប្រើឡើងវិញបាន និងប្រតិបត្តិការងារជាក់លាក់នៅពេលហៅ។ Functions ជួយធ្វើឱ្យកូដមានរបៀបរៀបរយ និងងាយស្រួលថែទាំ។

---

## 1. ការបង្កើត Functions

មានវិធីចម្បងៗ ៣ យ៉ាងដើម្បីបង្កើត Functions នៅក្នុង JavaScript:

### 1.1 Function Declaration
ប្រកាស Function ដោយប្រើ Keyword \`function\`។

\`\`\`javascript
function greet(name) {
  return "សួស្តី, " + name + "!";
}
console.log(greet("សុខា")); // បង្ហាញ: សួស្តី, សុខា!
\`\`\`

**ចំណាំ:** Function Declaration ត្រូវបាន Hoisted ដែលមានន័យថាអាចហៅមុនការប្រកាស។

---

### 1.2 Function Expression
កំណត់ Function ទៅ Variable មួយ។

\`\`\`javascript
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3)); // បង្ហាញ: 8
\`\`\`

**ចំណាំ:** Function Expression មិនត្រូវបាន Hoisted ដូច្នេះត្រូវប្រកាសមុនពេលហៅ។

---

### 1.3 Arrow Function
វាជា Syntax ខ្លីជាងសម្រាប់ Function Expression ដែលបានណែនាំនៅក្នុង ES6។

\`\`\`javascript
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // បង្ហាញ: 20
\`\`\`

**ភាពខុសគ្នា:**
- Arrow Functions មាន Syntax ខ្លីជាង។
- មិនមាន \`this\` ផ្ទាល់ខ្លួន ប៉ុន្តែទទួលយក \`this\` ពីaje Scope។
- មិនស័ក្តិសមសម្រាប់គ្រប់ករណី (ឧ. Method នៅក្នុង Object)។

---

## 2. Parameters និង Return Values

- **Parameters:** ជាអថេរដែល Function ទទួលយកនៅពេលហៅ។
- **Return Values:** តម្លៃដែល Function បញ្ជូនត្រឡប់មកវិញបន្ទាប់ពីប្រតិបត្តិ។

**ឧទាហរណ៍:**
\`\`\`javascript
function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(5, 3)); // បង្ហាញ: 15
\`\`\`

**ចំណាំ:** ប្រសិនបើគ្មាន \`return\`, Function នឹងបញ្ជូន \`undefined\`។

---

## 3. Default Parameters

អនុញ្ញាតឱ្យកំណត់តម្លៃលំនាំដើមសម្រាប់ Parameters។

\`\`\`javascript
function sayHello(name = "ភ្ញៀវ") {
  return "សួស្តី, " + name + "!";
}
console.log(sayHello()); // បង្ហាញ: សួស្តី, ភ្ញៀវ!
console.log(sayHello("លីណា")); // បង្ហាញ: សួស្តី, លីណា!
\`\`\`

---

## 4. Anonymous Functions និង Immediately Invoked Function Expressions (IIFE)

- **Anonymous Function:** Function ដែលគ្មានឈ្មោះ ជាទូទៅប្រើជា Function Expression។
- **IIFE:** Function ដែលប្រតិបត្តិភ្លាមៗបន្ទាប់ពីប្រកាស។

\`\`\`javascript
// Anonymous Function
const sayHi = function() {
  console.log("សួស្តី!");
};
sayHi(); // បង្ហាញ: សួស្តី!

// IIFE
(function() {
  console.log("នេះជា IIFE!");
})();
\`\`\`

---

## 5. ការប្រើ Functions ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Functions</title>
</head>
<body>
  <h1>សាកល្បង Functions</h1>
  <p id="output"></p>
  <script>
    const calculateTotal = (price, quantity) => {
      return price * quantity;
    };
    
    const formatMessage = (total, item = "ទំនិញ") => {
      return \`តម្លៃសរុបសម្រាប់ \${item}: \${total} ដុល្លារ\`;
    };
    
    const total = calculateTotal(10, 5);
    const message = formatMessage(total, "សៀវភៅ");
    document.getElementById("output").innerText = message;
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** តម្លៃសរុបសម្រាប់ សៀវភៅ: 50 ដុល្លារ
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Function Declaration</h3>
<p id="example1">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  function greetUser(name) {
    return "សួស្តី, " + name + "!";
  }
  console.log(greetUser("វិរៈ"));
</script>
<pre><code class="language-javascript">
function greetUser(name) {
  return "សួស្តី, " + name + "!";
}
console.log(greetUser("វិរៈ"));
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Arrow Function</h3>
<p id="example2">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  const square = num => num * num;
  console.log(square(4));
</script>
<pre><code class="language-javascript">
const square = num => num * num;
console.log(square(4));
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Function នៅក្នុង JavaScript គឺជាអ្វី?',
      options: [
        'ប្រភេទទិន្នន័យ',
        'ប្លុកនៃកូដដែលអាចប្រើឡើងវិញបាន',
        'Variable សម្រាប់ផ្ទុកតម្លៃ',
        'Operator សម្រាប់គណនា'
      ],
      correct: 1,
      explanation: 'Function គឺជាប្លុកនៃកូដដែលអាចប្រើឡើងវិញបាន និងប្រតិបត្តិការងារជាក់លាក់។'
    },
    {
      question: 'តើវិធីណាមួយខាងក្រោមជា Function Declaration?',
      options: [
        'const add = function(a, b) { return a + b; };',
        'function add(a, b) { return a + b; }',
        'const add = (a, b) => a + b;',
        '(function() { console.log("IIFE"); })();'
      ],
      correct: 1,
      explanation: 'Function Declaration ប្រើ Keyword `function` និងមានឈ្មោះ (ឧ. `add`)។'
    },
    {
      question: 'តើ Arrow Function ខុសពី Function Expression ដោយរបៀបណា?',
      options: [
        'មាន Syntax ខ្លីជាង និងមិនមាន `this` ផ្ទាល់ខ្លួន',
        'មាន Scope ធំជាង',
        'ត្រូវបាន Hoisted',
        'មិនអនុញ្ញាតឱ្យប្រើ Parameters'
      ],
      correct: 0,
      explanation: 'Arrow Function មាន Syntax ខ្លីជាង និងទទួលយក `this` ពី Outer Scope។'
    },
    {
      question: 'តើកូដ `function sayHi() { console.log("Hi"); }` នឹងបង្ហាញអ្វីនៅពេលហៅ?',
      options: ['Hi', 'undefined', 'null', 'sayHi'],
      correct: 0,
      explanation: 'Function នឹងបង្ហាញ "Hi" នៅក្នុង Console ពេលហៅ។'
    },
    {
      question: 'តើ Function ដែលគ្មាន `return` Statement នឹងបញ្ជូនតម្លៃអ្វីត្រឡប់មកវិញ?',
      options: ['null', 'undefined', '0', 'true'],
      correct: 1,
      explanation: 'Function ដែលគ្មាន `return` នឹងបញ្ជូន `undefined` ត្រឡប់មកវិញ។'
    },
    {
      question: 'តើ Default Parameter ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់តម្លៃលំនាំដើមសម្រាប់ Parameter',
        'បញ្ឈប់ Function',
        'បង្កើត Variable ថ្មី',
        'ប្តូរតម្លៃ Return'
      ],
      correct: 0,
      explanation: 'Default Parameter កំណត់តម្លៃលំនាំដើមប្រសិនបើ Parameter មិនត្រូវបានផ្តល់។'
    },
    {
      question: 'តើ IIFE គឺជាអ្វី?',
      options: [
        'Function ដែលប្រតិបត្តិភ្លាមៗបន្ទាប់ពីប្រកាស',
        'Function ដែលមានឈ្មោះ',
        'Function ដែលមិនអនុញ្ញាត Parameters',
        'Variable សម្រាប់ផ្ទុក Function'
      ],
      correct: 0,
      explanation: 'IIFE (Immediately Invoked Function Expression) គឺជា Function ដែលប្រតិបត្តិភ្លាមៗបន្ទាប់ពីប្រកាស។'
    },
    {
      question: 'តើកូដ `const sum = (a, b = 10) => a + b; console.log(sum(5));` នឹងបង្ហាញអ្វី?',
      options: ['5', '10', '15', 'undefined'],
      correct: 2,
      explanation: '`b` នឹងយកតម្លៃលំនាំដើម 10 ដូច្នេះ `sum(5)` បង្ហាញ 5 + 10 = 15។'
    },
    {
      question: 'តើ Function Declaration ត្រូវបាន Hoisted ឬអត់?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Block Scope', 'បានតែក្នុង Module'],
      correct: 0,
      explanation: 'Function Declaration ត្រូវបាន Hoisted ដែលអនុញ្ញាតឱ្យហៅមុនការប្រកាស។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Function Declaration និង Function Expression?',
      options: [
        'Function Declaration ត្រូវបាន Hoisted, Function Expression មិនត្រូវបាន Hoisted',
        'Function Declaration មិនអនុញ្ញាត Parameters',
        'Function Expression មាន `this` ផ្ទាល់ខ្លួន',
        'Function Declaration មិនអាច Return តម្លៃ'
      ],
      correct: 0,
      explanation: 'Function Declaration ត្រូវបាន Hoisted ខណៈ Function Expression មិនត្រូវបាន Hoisted។'
    },
    {
      question: 'តើ Arrow Function អាចប្រើជា Method នៅក្នុង Object បានល្អឬទេ?',
      options: [
        'បាន ព្រោះវាមាន `this` ផ្ទាល់ខ្លួន',
        'មិនបាន ព្រោះវាទទួល `this` ពី Outer Scope',
        'បាន ព្រោះវាត្រូវបាន Hoisted',
        'មិនបាន ព្រោះវាមិនអនុញ្ញាត Parameters'
      ],
      correct: 1,
      explanation: 'Arrow Function មិនស័ក្តិសមជា Method នៅក្នុង Object ព្រោះវាទទួល `this` ពី Outer Scope។'
    },
    {
      question: 'តើកូដ `(function() { return "Test"; })();` នឹងបង្ហាញអ្វី?',
      options: ['Test', 'undefined', 'null', 'Error'],
      correct: 0,
      explanation: 'នេះជា IIFE ដែលប្រតិបត្តិភ្លាមៗ និងបញ្ជូន "Test" ត្រឡប់មកវិញ។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Functions ដើម្បីគណនា និងបង្ហាញតម្លៃសរុបនៃទំនិញ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Shopping Calculator"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "កម្មវិធីគណនាទំនិញ"។
   - បន្ថែម \`<p id="totalResult">\` សម្រាប់បង្ហាញលទ្ធផល។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - បង្កើត Functions ដូចខាងក្រោម:
     - Arrow Function \`calculateTotal(price, quantity)\`: គណនា \`price * quantity\` និង Return តម្លៃសរុប។
     - Function Declaration \`formatPrice(total, item = "ទំនិញ")\`: Return String ដែលបង្ហាញតម្លៃសរុប (ឧ. "តម្លៃសរុបសម្រាប់ សៀវភៅ: 50 ដុល្លារ")។
   - ប្រកាស Variables:
     - \`const price = 20;\` (Number)
     - \`const quantity = 3;\` (Number)
     - \`const itemName = "សៀវភៅ";\` (String)
   - ហៅ \`calculateTotal\` ដើម្បីគណនាតម្លៃសរុប ហើយប្រើ \`formatPrice\` ដើម្បីបង្កើតសារ។
   - បង្ហាញលទ្ធផលនៅក្នុង \`<p id="totalResult">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`<p>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shopping Calculator</title>
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
  <h1>កម្មវិធីគណនាទំនិញ</h1>
  <p id="totalResult"></p>
  <script>
    const calculateTotal = (price, quantity) => price * quantity;
    
    function formatPrice(total, item = "ទំនិញ") {
      return \`តម្លៃសរុបសម្រាប់ \${item}: \${total} ដុល្លារ\`;
    }
    
    const price = 20;
    const quantity = 3;
    const itemName = "សៀវភៅ";
    
    const total = calculateTotal(price, quantity);
    const message = formatPrice(total, itemName);
    document.getElementById("totalResult").innerText = message;
  </script>
</body>
</html>
`
  }
};

export default JSLesson2_4Content;