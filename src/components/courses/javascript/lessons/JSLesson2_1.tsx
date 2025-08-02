import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson2_1Content: LessonContent = {
  title: 'Variables និង Data Types',
  objectives: [
    'យល់ដឹងអំពី Variables និងរបៀបប្រកាសវា',
    'ស្គាល់ប្រភេទទិន្នន័យ (Data Types) នៅក្នុង JavaScript',
    'រៀនប្រើ `let`, `const`, និង `var`',
    'យល់ពីភាពខុសគ្នារវាង Primitive និង Non-Primitive Data Types',
    'អនុវត្តន៍ការប្រើ Variables និង Data Types ក្នុងកូដ'
  ],
  content: `
# Variables និង Data Types 📦

---

**Variables** គឺជាទីតាំងសម្រាប់ផ្ទុកទិន្នន័យនៅក្នុង JavaScript។ **Data Types** គឺជាប្រភេទនៃទិន្នន័យដែលអាចផ្ទុកនៅក្នុង Variables នេះ។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបប្រកាស Variables និងប្រភេទទិន្នន័យផ្សេងៗ។

---

## 1. ការប្រកាស Variables

នៅក្នុង JavaScript យើងប្រើ \`var\`, \`let\`, និង \`const\` ដើម្បីប្រកាស Variables។

- **var:** ប្រើក្នុង JavaScript ជំនាន់ចាស់ មាន Scope ធំទូលាយ (Function/Global Scope) និងអាច Reassign/Re-declare បាន។
- **let:** មាន Block Scope និងអាច Reassign បាន ប៉ុន្តែមិនអាច Re-declare ក្នុង Scope ដូចគ្នា។
- **const:** មាន Block Scope និងមិនអាច Reassign ឬ Re-declare បាន។

**ឧទាហរណ៍:**
\`\`\`javascript
var name = "សុខា"; // អាច Re-declare និង Reassign
let age = 25;       // អាច Reassign ប៉ុន្តែមិនអាច Re-declare
const country = "កម្ពុជា"; // មិនអាច Reassign ឬ Re-declare

console.log(name); // បង្ហាញ: សុខា
console.log(age);  // បង្ហាញ: 25
console.log(country); // បង្ហាញ: កម្ពុជា

// Reassign
name = "វិរៈ";
age = 30;
// country = "ថៃ"; // នឹងបណ្តាលឱ្យកំហុស (Error)
\`\`\`

---

## 2. ប្រភេទទិន្នន័យ (Data Types)

JavaScript មាន **Primitive** និង **Non-Primitive Data Types**។

### 2.1 Primitive Data Types
- **String:** អត្ថបទ (ឧ. "សួស្តី", 'កម្ពុជា')
- **Number:** លេខទាំងអស់ (ឧ. 42, 3.14)
- **Boolean:** តម្លៃ \`true\` ឬ \`false\`
- **Undefined:** Variable ដែលបានប្រកាស ប៉ុន្តែមិនទាន់មានតម្លៃ
- **Null:** តម្លៃទទេ
- **Symbol:** តម្លៃតែមួយគត់ (Unique) ប្រើសម្រាប់ Identifiers
- **BigInt:** លេខគត់ធំខ្លាំងដែលលើសពី Number

**ឧទាហរណ៍:**
\`\`\`javascript
let name = "សុខា"; // String
let age = 25;       // Number
let isStudent = true; // Boolean
let job;            // Undefined
let car = null;     // Null
let id = Symbol("id"); // Symbol
let bigNumber = 12345678901234567890n; // BigInt

console.log(typeof name); // បង្ហាញ: string
console.log(typeof age);  // បង្ហាញ: number
console.log(typeof job);  // បង្ហាញ: undefined
\`\`\`

### 2.2 Non-Primitive Data Types
- **Object:** ផ្ទុកទិន្នន័យជាគូ Key-Value
- **Array:** បញ្ជីនៃទិន្នន័យ
- **Function:** ប្លុកនៃកូដដែលអាចប្រើឡើងវិញបាន

**ឧទាហរណ៍:**
\`\`\`javascript
let person = { name: "សុខា", age: 25 }; // Object
let numbers = [1, 2, 3, 4]; // Array
let greet = function() { console.log("សួស្តី!"); }; // Function

console.log(person.name); // បង្ហាញ: សុខា
console.log(numbers[0]);  // បង្ហាញ: 1
greet(); // បង្ហាញ: សួស្តី!
\`\`\`

---

## 3. ភាពខុសគ្នារវាង \`var\`, \`let\`, និង \`const\`

| លក្ខណៈ         | var                     | let                     | const                   |
| :--------------- | :---------------------- | :---------------------- | :---------------------- |
| **Scope**        | Function/Global        | Block                   | Block                   |
| **Re-declare**   | អាចបាន               | មិនអាចបាន           | មិនអាចបាន           |
| **Reassign**     | អាចបាន               | អាចបាន               | មិនអាចបាន           |
| **Hoisting**     | បាន (ជាមួយ Undefined) | បាន (ប៉ុន្តែមិន Initialize) | បាន (ប៉ុន្តែមិន Initialize) |
---
**គន្លឹះ:** ប្រើ \`const\` នៅពេលដែលតម្លៃមិនផ្លាស់ប្តូរ, ប្រើ \`let\` នៅពេលត្រូវការ Reassign, និងជៀសវាង \`var\` ព្រោះវាមានភាពច្របូកច្របល់។

---

## 4. ការប្រើ Variables និង Data Types

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Variables and Data Types</title>
</head>
<body>
  <h1>សាកល្បង Variables និង Data Types</h1>
  <p id="output"></p>
  <script>
    const name = "វិរៈ";
    let age = 30;
    const isEmployed = true;
    const person = { name: name, age: age, job: "អ្នកអភិវឌ្ឍន៍" };
    
    document.getElementById("output").innerText = 
      \`\${name} មានអាយុ \${age} ឆ្នាំ និងជា \${person.job}\`;
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** វិរៈ មានអាយុ 30 ឆ្នាំ និងជា អ្នកអភិវឌ្ឍន៍
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ប្រើ Variables និង String</h3>
<p id="example1">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let greeting = "សួស្តី!";
  const user = "សុខា";
  console.log(greeting + " " + user);
</script>
<pre><code class="language-javascript">
let greeting = "សួស្តី!";
const user = "សុខា";
console.log(greeting + " " + user);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ប្រើ Object និង Array</h3>
<p id="example2">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  const student = { name: "លីណា", grade: 85 };
  const scores = [90, 85, 88];
  console.log("ឈ្មោះ:", student.name);
  console.log("ពិន្ទុទីមួយ:", scores[0]);
</script>
<pre><code class="language-javascript">
const student = { name: "លីណា", grade: 85 };
const scores = [90, 85, 88];
console.log("ឈ្មោះ:", student.name);
console.log("ពិន្ទុទីមួយ:", scores[0]);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជា Variable នៅក្នុង JavaScript?',
      options: [
        'ភាសាសរសេរកម្មវិធី',
        'ទីតាំងសម្រាប់ផ្ទុកទិន្នន័យ',
        'ប្រភេទទិន្នន័យ',
        'ឧបករណ៍សម្រាប់ Debugging'
      ],
      correct: 1,
      explanation: 'Variable គឺជាទីតាំងសម្រាប់ផ្ទុកទិន្នន័យដែលអាចផ្លាស់ប្តូរឬប្រើឡើងវិញបាន។'
    },
    {
      question: 'តើ Keyword ណាមួយខាងក្រោមនេះមិនអនុញ្ញាតឱ្យ Reassign តម្លៃ?',
      options: ['var', 'let', 'const', 'function'],
      correct: 2,
      explanation: '`const` មិនអនុញ្ញាតឱ្យ Reassign តម្លៃបន្ទាប់ពីការប្រកាស។'
    },
    {
      question: 'តើប្រភេទទិន្នន័យណាមួយខាងក្រោមជា Primitive Data Type?',
      options: ['Object', 'Array', 'String', 'Function'],
      correct: 2,
      explanation: 'String គឺជា Primitive Data Type ខណៈ Object, Array, និង Function ជា Non-Primitive។'
    },
    {
      question: 'តើ `typeof null` នឹងបង្ហាញអ្វី?',
      options: ['null', 'undefined', 'object', 'number'],
      correct: 2,
      explanation: 'នៅក្នុង JavaScript, `typeof null` បង្ហាញ "object" ដែលជាភាពមិនស៊ីសង្វាក់គ្នាមួយ។'
    },
    {
      question: 'តើ Variable ដែលប្រកាសដោយ `let` មាន Scope ប្រភេទណា?',
      options: ['Global Scope', 'Function Scope', 'Block Scope', 'Module Scope'],
      correct: 2,
      explanation: '`let` មាន Block Scope ដែលមានន័យថាវាដំណើរការតែនៅក្នុង Block `{}`។'
    },
    {
      question: 'តើតម្លៃណាមួយខាងក្រោមតំណាងឱ្យ Undefined?',
      options: ['null', '0', '"" (Empty String)', 'Variable ដែលមិនទាន់មានតម្លៃ'],
      correct: 3,
      explanation: 'Undefined គឺជា Variable ដែលបានប្រកាស ប៉ុន្តែមិនទាន់មានតម្លៃ។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង `var` និង `let`?',
      options: [
        '`var` មាន Block Scope, `let` មាន Global Scope',
        '`var` អាច Re-declare, `let` មិនអាច',
        '`var` មិនអនុញ្ញាត Reassign, `let` អនុញ្ញាត',
        '`var` និង `let` មានដូចគ្នាទាំងអស់'
      ],
      correct: 1,
      explanation: '`var` អនុញ្ញាតឱ្យ Re-declare និងមាន Function/Global Scope, ខណៈ `let` មិនអនុញ្ញាត Re-declare និងមាន Block Scope។'
    },
    {
      question: 'តើ Symbol Data Type ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ទុកលេខធំៗ',
        'បង្កើត Unique Identifiers',
        'ផ្ទុកអត្ថបទ',
        'ផ្ទុក Array'
      ],
      correct: 1,
      explanation: 'Symbol ត្រូវបានប្រើដើម្បីបង្កើត Unique Identifiers សម្រាប់ Objects។'
    },
    {
      question: 'តើអ្វីជា Non-Primitive Data Type?',
      options: ['String', 'Number', 'Object', 'Boolean'],
      correct: 2,
      explanation: 'Object គឺជា Non-Primitive Data Type ខណៈ String, Number, និង Boolean ជា Primitive។'
    },
    {
      question: 'តើកូដខាងក្រោមនឹងបង្ហាញអ្វី? `console.log(typeof 42);`',
      options: ['string', 'number', 'boolean', 'undefined'],
      correct: 1,
      explanation: '`typeof 42` បង្ហាញ "number" ព្រោះ 42 ជា Number Data Type។'
    },
    {
      question: 'តើអ្វីនឹងកើតឡើងប្រសិនបើអ្នកព្យាយាម Reassign តម្លៃទៅ `const` Variable?',
      options: [
        'តម្លៃនឹងផ្លាស់ប្តូរដោយជោគជ័យ',
        'នឹងបណ្តាលឱ្យកំហុស (Error)',
        'នឹងបង្ហាញ Undefined',
        'នឹងបង្កើត Variable ថ្មី'
      ],
      correct: 1,
      explanation: 'ការព្យាយាម Reassign `const` Variable នឹងបណ្តាលឱ្យកំហុស (TypeError)។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលបង្ហាញព័ត៌មានអំពីនិស្សិតដោយប្រើ Variables និង Data Types។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Student Information"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "ព័ត៌មាននិស្សិត"។
   - បន្ថែម \`<p id="studentInfo">\` សម្រាប់បង្ហាញព័ត៌មាន។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រកាស Variables ដូចខាងក្រោម:
     - \`const studentName\` (String): ឈ្មោះនិស្សិត (ឧ. "សុខា")។
     - \`let studentAge\` (Number): អាយុ (ឧ. 20)។
     - \`const isEnrolled\` (Boolean): ស្ថានភាពចុះឈ្មោះ (true)។
     - \`const student\` (Object): មាន Properties \`name\`, \`age\`, និង \`major\` (ឧ. "Computer Science")។
     - \`const grades\` (Array): ពិន្ទុ 3 មុខវិជ្ជា (ឧ. [85, 90, 88])។
   - បង្ហាញព័ត៌មាននៅក្នុង \`<p id="studentInfo">\` ដោយប្រើ Template Literal (\`\${variable}\`) ដូចជា: "ឈ្មោះ: សុខា, អាយុ: 20, ឯកទេស: Computer Science, ពិន្ទុ: 85,90,88"។

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
  <title>Student Information</title>
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
  <h1>ព័ត៌មាននិស្សិត</h1>
  <p id="studentInfo"></p>
  <script>
    const studentName = "សុខា";
    let studentAge = 20;
    const isEnrolled = true;
    const student = { name: studentName, age: studentAge, major: "Computer Science" };
    const grades = [85, 90, 88];
    
    document.getElementById("studentInfo").innerText = 
      \`ឈ្មោះ: \${student.name}, អាយុ: \${student.age}, ឯកទេស: \${student.major}, ពិន្ទុ: \${grades.join(",")}\`;
  </script>
</body>
</html>
`
  }
};

export default JSLesson2_1Content;