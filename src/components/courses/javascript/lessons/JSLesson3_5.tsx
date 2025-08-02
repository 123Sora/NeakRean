import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson3_5Content: LessonContent = {
  title: 'Type Conversion និង Coercion',
  objectives: [
    'យល់ដឹងអំពី Type Conversion និង Type Coercion នៅក្នុង JavaScript',
    'រៀនបំលែងប្រភេទទិន្នន័យដោយចេតនា (Explicit Conversion)',
    'ស្វែងយល់អំពី Type Coercion ដែលកើតឡើងដោយស្វ័យប្រវត្តិ',
    'អនុវត្តន៍ការប្រើ Type Conversion និងការគ្រប់គ្រង Coercion',
    'ជៀសវាងកំហុសទូទៅទាក់ទងនឹង Type Coercion'
  ],
  content: `
# Type Conversion និង Coercion 🔄

---

**Type Conversion** គឺជាការបំលែងប្រភេទទិន្នន័យដោយចេតនា។ **Type Coercion** គឺជាការបំលែងប្រភេទទិន្នន័យដោយស្វ័យប្រវត្តិដែល JavaScript ធ្វើនៅពេលប្រតិបត្តិ Operator។

---

## 1. Type Conversion (Explicit)

ប្រើ Methods ឬ Functions ដើម្បីបំលែងប្រភេទទិន្នន័យ។

### 1.1 បំលែងទៅជា String
- \`String()\` ឬ \`.toString()\`

\`\`\`javascript
let num = 123;
console.log(String(num)); // "123"
console.log(num.toString()); // "123"
\`\`\`

### 1.2 បំលែងទៅជា Number
- \`Number()\`, \`parseInt()\`, \`parseFloat()\`

\`\`\`javascript
let str = "123.45";
console.log(Number(str)); // 123.45
console.log(parseInt(str)); // 123
console.log(parseFloat("123.45abc")); // 123.45
\`\`\`

### 1.3 បំលែងទៅជា Boolean
- \`Boolean()\`

\`\`\`javascript
let value = 0;
console.log(Boolean(value)); // false
console.log(Boolean("hello")); // true
\`\`\`

**ចំណាំ:** Falsy Values គឺ \`0\`, \`""\`, \`null\`, \`undefined\`, \`NaN\`, \`false\`។ តម្លៃផ្សេងទៀតគឺ Truthy។

---

## 2. Type Coercion (Implicit)

JavaScript បំលែងប្រភេទទិន្នន័យដោយស្វ័យប្រវត្តិនៅពេលប្រើ Operators ដូចជា \`+\`, \`==\`, ឬ \`>\`។

### 2.1 String Coercion
Operator `+` បំលែង Numbers ទៅជា Strings ប្រសិនបើមាន String ពាក់ព័ន្ធ។

\`\`\`javascript
let num = 5;
console.log(num + "10"); // "510"
\`\`\`

### 2.2 Number Coercion
Operators ដូចជា \`-\`, \`*\`, \`/\` បំលែង Strings ទៅជា Numbers។

\`\`\`javascript
let str = "20";
console.log(str - 10); // 10
console.log(str * 2); // 40
\`\`\`

### 2.3 Boolean Coercion
Conditions (ឧ. \`if\`) បំលែងតម្លៃទៅជា Boolean។

\`\`\`javascript
if ("hello") {
  console.log("Truthy"); // បង្ហាញ: Truthy
}
\`\`\`

---

## 3. Equality Operators និង Coercion

- \`==\` (Loose Equality): បំលែងប្រភេទមុនពេលប្រៀបធៀប
- \`===\` (Strict Equality): មិនបំលែងប្រភេទ

\`\`\`javascript
console.log("5" == 5); // true
console.log("5" === 5); // false
\`\`\`

**ការណែនាំ:** ប្រើ \`===\` ដើម្បីជៀសវាងកំហុសពី Coercion។

---

## 4. ការប្រើ Type Conversion និង Coercion ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Type Conversion និង Coercion</title>
</head>
<body>
  <h1>សាកល្បង Type Conversion និង Coercion</h1>
  <p id="output"></p>
  <script>
    const input = "123.45";
    const num = parseFloat(input);
    const result = \`តម្លៃ: \${num}, ប្រភេទ: \${typeof num}\\nបូកជាមួយ String: \${num + " ដុល្លារ"}\`;
    document.getElementById("output").innerText = result;
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:**
តម្លៃ: 123.45, ប្រភេទ: number
បូកជាមួយ String: 123.45 ដុល្លារ
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Type Conversion</h3>
<p id="example1">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let str = "100";
  console.log(Number(str) + 50); // 150
</script>
<pre><code class="language-javascript">
let str = "100";
console.log(Number(str) + 50);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Type Coercion</h3>
<p id="example2">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let num = 10;
  console.log(num + "5"); // "105"
  console.log(num - "5"); // 5
</script>
<pre><code class="language-javascript">
let num = 10;
console.log(num + "5");
console.log(num - "5");
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Type Conversion គឺជាអ្វី?',
      options: [
        'ការបំលែងប្រភេទទិន្នន័យដោយស្វ័យប្រវត្តិ',
        'ការបំលែងប្រភេទទិន្នន័យដោយចេតនា',
        'ការលុបប្រភេទទិន្នន័យ',
        'ការបង្កើត Variable ថ្មី'
      ],
      correct: 1,
      explanation: 'Type Conversion គឺជាការបំលែងប្រភេទទិន្នន័យដោយចេតនា (Explicit)។'
    },
    {
      question: 'តើ Type Coercion កើតឡើងនៅពេលណា?',
      options: [
        'នៅពេលប្រើ Function',
        'នៅពេលប្រើ Operator ដូចជា `+`',
        'នៅពេលប្រកាស Variable',
        'នៅពេលប្រើ `let`'
      ],
      correct: 1,
      explanation: 'Type Coercion កើតឡើងដោយស្វ័យប្រវត្តិនៅពេលប្រើ Operators។'
    },
    {
      question: 'តើ Method ណាមួយបំលែង Number ទៅជា String?',
      options: ['Number()', 'String()', 'Boolean()', 'parseInt()'],
      correct: 1,
      explanation: '`String()` ឬ `.toString()` បំលែង Number ទៅជា String។'
    },
    {
      question: 'តើកូដ `console.log("10" - 5);` នឹងបង្ហាញអ្វី?',
      options: ['105', '5', '10', 'Error'],
      correct: 1,
      explanation: 'Operator `-` បំលែង "10" ទៅជា Number ដូច្នេះ 10 - 5 = 5។'
    },
    {
      question: 'តើ Falsy Value មួយណាខាងក្រោម?',
      options: ['"hello"', '0', '1', '{}'],
      correct: 1,
      explanation: '`0` គឺជា Falsy Value។'
    },
    {
      question: 'តើ `===` ខុសពី `==` ដោយរបៀបណា?',
      options: [
        '`===` បំលែងប្រភេទទិន្នន័យ',
        '`==` មិនប្រៀបធៀបប្រភេទទិន្នន័យ',
        '`===` មិនប្រៀបធៀបតម្លៃ',
        '`==` មិនអនុញ្ញាត Coercion'
      ],
      correct: 1,
      explanation: '`==` បំលែងប្រភេទទិន្នន័យ (Coercion) ខណៈ `===` ប្រៀបធៀបទាំងតម្លៃ និងប្រភេទ។'
    },
    {
      question: 'តើកូដ `console.log(Boolean(""));` នឹងបង្ហាញអ្វី?',
      options: ['true', 'false', 'undefined', 'null'],
      correct: 1,
      explanation: 'Empty String `""` គឺជា Falsy Value ដូច្នេះ `Boolean("")` បញ្ជូន `false`។'
    },
    {
      question: 'តើ Method `parseInt()` ធ្វើអ្វី?',
      options: [
        'បំលែង String ទៅជា Integer',
        'បំលែង String ទៅជា Float',
        'បំលែង Number ទៅជា String',
        'បំលែង Boolean ទៅជា Number'
      ],
      correct: 0,
      explanation: '`parseInt()` បំលែង String ទៅជា Integer។'
    },
    {
      question: 'តើកូដ `console.log(10 + "5");` នឹងបង្ហាញអ្វី?',
      options: ['15', '105', '10', 'Error'],
      correct: 1,
      explanation: 'Operator `+` បំលែង Number ទៅជា String ដូច្នេះ 10 + "5" = "105"។'
    },
    {
      question: 'តើការប្រើ `===` មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'អនុញ្ញាត Coercion',
        'ជៀសវាងកំហុសពី Coercion',
        'បំលែងប្រភេទទិន្នន័យ',
        'បង្កើត Variable ថ្មី'
      ],
      correct: 1,
      explanation: '`===` មិនអនុញ្ញាត Coercion ដែលជួយជៀសវាងកំហុស។'
    },
    {
      question: 'តើកូដ `console.log(parseFloat("12.34abc"));` នឹងបង្ហាញអ្វី?',
      options: ['12', '12.34', 'Error', '12.34abc'],
      correct: 1,
      explanation: '`parseFloat()` បំលែង String ទៅជា Float និងឈប់នៅអក្សរមិនមែនជា Number ដូច្នេះបញ្ជូន 12.34។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Type Conversion និង Coercion ដើម្បីគណនា និងបង្ហាញតម្លៃ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Price Calculator"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "កម្មវិធីគណនាតម្លៃ"។
   - បន្ថែម \`<p id="result">\` សម្រាប់បង្ហាញលទ្ធផល។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រកាស Variables:
     - \`const priceInput = "50.75";\` (String)
     - \`const quantity = "3";\` (String)
   - ប្រើ \`parseFloat()\` ដើម្បីបំលែង \`priceInput\` ទៅជា Number។
   - ប្រើ Type Coercion ដើម្បីបំលែង \`quantity\` ទៅជា Number ដោយប្រើ Operator \`-\` (ឧ. \`quantity - 0\`)។
   - គណនាតម្លៃសរុប (\`price * quantity\`)។
   - បំលែងតម្លៃសរុបទៅជា String ដោយប្រើ \`String()\` និងបន្ថែម " ដុល្លារ"។
   - បង្ហាញលទ្ធផលនៅក្នុង \`<p id="result">\`។

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
  <script>
    const priceInput = "50.75";
    const quantity = "3";
    const price = parseFloat(priceInput);
    const qty = quantity - 0;
    const total = price * qty;
    const result = String(total) + " ដុល្លារ";
    document.getElementById("result").innerText = result;
  </script>
</body>
</html>
`
  }
};

export default JSLesson3_5Content;