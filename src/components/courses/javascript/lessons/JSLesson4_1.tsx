import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson4_1Content: LessonContent = {
  title: 'ES6+ Features',
  objectives: [
    'យល់ដឹងអំពីលក្ខណៈពិសេសថ្មីៗនៃ ES6+',
    'រៀនប្រើ Arrow Functions និង Template Literals',
    'ស្វែងយល់អំពី Destructuring (Array និង Object)',
    'អនុវត្តន៍ Spread Operator និង Rest Parameters',
    'រៀនប្រើ Default Parameters និង Enhanced Object Literals'
  ],
  content: `
# ES6+ Features 🚀

---

**ES6 (ECMAScript 2015)** និងកំណែជាបន្តបន្ទាប់បានណែនាំលក្ខណៈពិសេសថ្មីៗដែលធ្វើឱ្យ JavaScript កាន់តែមានអានុភាព និងងាយស្រួលប្រើ។

---

## 1. Arrow Functions
Arrow Functions ផ្តល់នូវ Syntax ខ្លីជាង និងមានឥរិយាបទខុសគ្នាទាក់ទងនឹង \`this\`។

\`\`\`javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

const greet = name => \`សួស្តី, \${name}!\`;
console.log(greet("សុខា")); // សួស្តី, សុខា!
\`\`\`

**ចំណាំ:** Arrow Functions មិនមាន \`this\` ផ្ទាល់ខ្លួន ប៉ុន្តែទទួលយក \`this\` ពី Outer Scope។

---

## 2. Template Literals
Template Literals ប្រើ Backticks  និង \`\${}\` ដើម្បីបង្កើត Strings ដែលអនុញ្ញាតឱ្យបញ្ចូល Expressions។

\`\`\`javascript
let name = "លីណា";
let message = \`សួស្តី, \${name}! អាយុ: \${20 + 5} ឆ្នាំ\`;
console.log(message); // សួស្តី, លីណា! អាយុ: 25 ឆ្នាំ
\`\`\`

---

## 3. Destructuring
Destructuring អនុញ្ញាតឱ្យផ្ទុក Elements (Array) ឬ Properties (Object) ទៅ Variables យ៉ាងងាយស្រួល។

### 3.1 Array Destructuring
\`\`\`javascript
let fruits = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"];
let [first, second] = fruits;
console.log(first, second); // ផ្លែប៉ោម ចេក
\`\`\`

### 3.2 Object Destructuring
\`\`\`javascript
let person = { name: "សុខា", age: 25 };
let { name, age } = person;
console.log(name, age); // សុខា 25
\`\`\`

---

## 4. Spread Operator និង Rest Parameters
- **Spread Operator (\`...\`)**: ចម្លង Elements ឬ Properties។
- **Rest Parameters**: ប្រមូល Arguments ទៅជា Array។

\`\`\`javascript
// Spread Operator
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

let obj1 = { name: "សុខា" };
let obj2 = { ...obj1, age: 25 };
console.log(obj2); // { name: "សុខា", age: 25 }

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
\`\`\`

---

## 5. Default Parameters
Default Parameters កំណត់តម្លៃលំនាំដើមសម្រាប់ Parameters។

\`\`\`javascript
function greet(name = "ភ្ញៀវ") {
  return \`សួស្តី, \${name}!\`;
}
console.log(greet()); // សួស្តី, ភ្ញៀវ!
console.log(greet("លីណា")); // សួស្តី, លីណា!
\`\`\`

---

## 6. Enhanced Object Literals
ES6 ផ្តល់នូវ Syntax ខ្លីជាងសម្រាប់ Object Properties និង Methods។

\`\`\`javascript
let name = "សុខា";
let age = 25;
let person = {
  name, // Shorthand Property
  age,
  greet() { // Shorthand Method
    return \`សួស្តី, \${this.name}!\`;
  }
};
console.log(person.greet()); // សួស្តី, សុខា!
\`\`\`

---

## 7. ការប្រើ ES6+ Features ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>ES6+ Features</title>
</head>
<body>
  <h1>សាកល្បង ES6+ Features</h1>
  <p id="output"></p>
  <script>
    const person = { name: "លីណា", age: 20 };
    const { name, age } = person;
    const greet = (name = "ភ្ញៀវ") => \`សួស្តី, \${name}! អាយុ: \${age} ឆ្នាំ\`;
    document.getElementById("output").innerText = greet(name);
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** សួស្តី, លីណា! អាយុ: 20 ឆ្នាំ
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Template Literals និង Destructuring</h3>
<p id="example1">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let student = { name: "វិរៈ", grade: "A" };
  let { name, grade } = student;
  console.log(\`សិស្ស: \${name}, ពិន្ទុ: \${grade}\`); // សិស្ស: វិរៈ, ពិន្ទុ: A
</script>
<pre><code class="language-javascript">
let student = { name: "វិរៈ", grade: "A" };
let { name, grade } = student;
console.log(\`សិស្ស: \${name}, ពិន្ទុ: \${grade}\`);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Spread Operator</h3>
<p id="example2">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let arr1 = [1, 2];
  let arr2 = [...arr1, 3, 4];
  console.log(arr2); // [1, 2, 3, 4]
</script>
<pre><code class="language-javascript">
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Arrow Function ខុសពី Function Expression ដោយរបៀបណា?',
      options: [
        'មាន `this` ផ្ទាល់ខ្លួន',
        'ទទួលយក `this` ពី Outer Scope',
        'ត្រូវបាន Hoisted',
        'មិនអនុញ្ញាត Parameters'
      ],
      correct: 1,
      explanation: 'Arrow Functions ទទួលយក `this` ពី Outer Scope និងមាន Syntax ខ្លីជាង។'
    },
    {
      question: 'តើ Template Literals ប្រើ Symbol អ្វី?',
      options: ['Single Quotes', 'Double Quotes', 'Backticks', 'Parentheses'],
      correct: 2,
      explanation: 'Template Literals ប្រើ Backticks (\`) និង \`\${}\` សម្រាប់ Expressions។'
    },
    {
      question: 'តើកូដ `let [a, b] = [1, 2]; console.log(a, b);` នឹងបង្ហាញអ្វី?',
      options: ['1 2', 'undefined undefined', '[1, 2]', 'Error'],
      correct: 0,
      explanation: 'Array Destructuring ផ្ទុក 1 ទៅ `a` និង 2 ទៅ `b`។'
    },
    {
      question: 'តើ Spread Operator ប្រើសម្រាប់អ្វី?',
      options: [
        'បំលែង Array ទៅ String',
        'ចម្លង Elements ឬ Properties',
        'បង្កើត Function',
        'លុប Elements'
      ],
      correct: 1,
      explanation: 'Spread Operator (`...`) ចម្លង Elements ឬ Properties។'
    },
    {
      question: 'តើ Rest Parameters ធ្វើអ្វី?',
      options: [
        'ប្រមូល Arguments ទៅជា Array',
        'ចម្លង Array',
        'បំលែង String',
        'បង្កើត Object'
      ],
      correct: 0,
      explanation: 'Rest Parameters ប្រមូល Arguments ទៅជា Array។'
    },
    {
      question: 'តើកូដ `function greet(name = "ភ្ញៀវ") { return name; }` នឹងបង្ហាញអ្វីប្រសិនបើគ្មាន Argument?',
      options: ['undefined', 'ភ្ញៀវ', 'null', 'Error'],
      correct: 1,
      explanation: 'Default Parameter កំណត់ `name` ជា "ភ្ញៀវ" ប្រសិនបើគ្មាន Argument។'
    },
    {
      question: 'តើ Enhanced Object Literals អនុញ្ញាតឱ្យធ្វើអ្វី?',
      options: [
        'បង្កើត Array ថ្មី',
        'ប្រើ Shorthand សម្រាប់ Properties និង Methods',
        'បំលែង Object ទៅ String',
        'លុប Properties'
      ],
      correct: 1,
      explanation: 'Enhanced Object Literals ផ្តល់ Shorthand Syntax សម្រាប់ Properties និង Methods។'
    },
    {
      question: 'តើកូដ `let obj = { x: 1 }; let newObj = { ...obj, y: 2 };` នឹងបង្កើត `newObj` ជាអ្វី?',
      options: ['{ x: 1 }', '{ y: 2 }', '{ x: 1, y: 2 }', '{ x: 2, y: 1 }'],
      correct: 2,
      explanation: 'Spread Operator ចម្លង `obj` និងបន្ថែម `y: 2`។'
    },
    {
      question: 'តើកូដ `const sum = (...nums) => nums.reduce((a, b) => a + b, 0); console.log(sum(1, 2, 3));` នឹងបង្ហាញអ្វី?',
      options: ['6', 'undefined', 'Error', '[1, 2, 3]'],
      correct: 0,
      explanation: 'Rest Parameters ប្រមូល Arguments ទៅជា Array និង `reduce` គណនាបូក 1 + 2 + 3 = 6។'
    },
    {
      question: 'តើ Template Literals អនុញ្ញាតឱ្យបញ្ចូលអ្វី?',
      options: ['Functions', 'Expressions', 'Objects', 'Arrays'],
      correct: 1,
      explanation: 'Template Literals អនុញ្ញាតឱ្យបញ្ចូល Expressions ដោយប្រើ \`\${}\`។'
    },
    {
      question: 'តើ Arrow Functions ត្រូវបាន Hoisted ឬអត់?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Block Scope', 'បានតែក្នុង Global Scope'],
      correct: 1,
      explanation: 'Arrow Functions (Expression) មិនត្រូវបាន Hoisted។'
    },
    {
      question: 'តើកូដ `let { name } = { name: "សុខា" }; console.log(name);` នឹងបង្ហាញអ្វី?',
      options: ['សុខា', 'undefined', 'null', 'Error'],
      correct: 0,
      explanation: 'Object Destructuring ផ្ទុក Property `name` ទៅ Variable `name`។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ ES6+ Features ដើម្បីបង្ហាញបញ្ជីនិស្សិត។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Student List"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "បញ្ជីនិស្សិត"។
   - បន្ថែម \`<p id="studentList">\` សម្រាប់បង្ហាញលទ្ធផល។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រកាស Array \`const students = [{ name: "សុខា", grade: "A" }, { name: "លីណា", grade: "B" }];\`។
   - ប្រើ Destructuring ដើម្បីទាញ \`name\` និង \`grade\` ពី Object ដំបូង។
   - ប្រើ Arrow Function និង Template Literals ដើម្បីបង្កើត String សម្រាប់បង្ហាញ (ឧ. "1. សុខា: A")។
   - ប្រើ Spread Operator ដើម្បីចម្លង \`students\` និងបន្ថែម Object ថ្មី \`{ name: "វិរៈ", grade: "C" }\`។
   - បង្ហាញបញ្ជីនៅក្នុង \`<p id="studentList">\`។

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
  <title>Student List</title>
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
  <h1>បញ្ជីនិស្សិត</h1>
  <p id="studentList"></p>
  <script>
    const students = [{ name: "សុខា", grade: "A" }, { name: "លីណា", grade: "B" }];
    const [{ name, grade }] = students;
    const newStudents = [...students, { name: "វិរៈ", grade: "C" }];
    const displayList = newStudents.map((student, index) => \`\${index + 1}. \${student.name}: \${student.grade}\`).join("\\n");
    document.getElementById("studentList").innerText = displayList;
  </script>
</body>
</html>
`
  }
};

export default JSLesson4_1Content;