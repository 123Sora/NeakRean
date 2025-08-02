import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson3_2Content: LessonContent = {
  title: 'Objects',
  objectives: [
    'យល់ដឹងអំពី Objects និងរបៀបប្រើប្រាស់វា',
    'រៀនបង្កើត និងចូលប្រើ Properties នៅក្នុង Objects',
    'ស្វែងយល់អំពី Methods នៅក្នុង Objects',
    'អនុវត្តន៍ Object Destructuring និង Spread Operator',
    'រៀនគ្រប់គ្រងទិន្នន័យស្មុគស្មាញជាមួយ Objects'
  ],
  content: `
# Objects 🗂️

---

**Objects** គឺជាប្រភេទទិន្នន័យដែលផ្ទុកទិន្នន័យជាគូ Key-Value Pairs។ Objects ស័ក្តិសមសម្រាប់គ្រប់គ្រងទិន្នន័យស្មុគស្មាញ។

---

## 1. ការបង្កើត Objects

អ្នកអាចបង្កើត Object ដោយប្រើ Curly Braces \`{}\` ឬ \`Object\` Constructor។

\`\`\`javascript
let person = {
  name: "សុខា",
  age: 25,
  city: "ភ្នំពេញ"
};
let car = new Object();
car.brand = "Toyota";
console.log(person); // { name: "សុខា", age: 25, city: "ភ្នំពេញ" }
console.log(car); // { brand: "Toyota" }
\`\`\`

---

## 2. ការចូលប្រើ និងកែប្រែ Properties

ប្រើ Dot Notation (\`.\`) ឬ Bracket Notation (\`[]\`) ដើម្បីចូលប្រើ ឬកែប្រែ Properties។

\`\`\`javascript
let person = { name: "សុខា", age: 25 };
console.log(person.name); // សុខា
console.log(person["age"]); // 25
person.age = 30;
person["city"] = "សៀមរាប";
console.log(person); // { name: "សុខា", age: 30, city: "សៀមរាប" }
\`\`\`

---

## 3. Object Methods

Methods គឺជា Functions ដែលកំណត់នៅក្នុង Object។

\`\`\`javascript
let person = {
  name: "សុខា",
  age: 25,
  greet: function() {
    return \`សួស្តី, ខ្ញុំឈ្មោះ \${this.name}\`;
  }
};
console.log(person.greet()); // សួស្តី, ខ្ញុំឈ្មោះ សុខា
\`\`\`

**ES6 Shorthand:**
\`\`\`javascript
let person = {
  name: "សុខា",
  age: 25,
  greet() {
    return \`សួស្តី, ខ្ញុំឈ្មោះ \${this.name}\`;
  }
};
\`\`\`

---

## 4. Object Destructuring

អនុញ្ញាតឱ្យផ្ទុក Properties ទៅ Variables យ៉ាងងាយស្រួល។

\`\`\`javascript
let person = { name: "សុខា", age: 25 };
let { name, age } = person;
console.log(name, age); // សុខា 25
\`\`\`

---

## 5. Spread Operator

ប្រើ \`...\` ដើម្បីចម្លង ឬបញ្ចូល Objects។

\`\`\`javascript
let person = { name: "សុខា", age: 25 };
let updatedPerson = { ...person, city: "ភ្នំពេញ" };
console.log(updatedPerson); // { name: "សុខា", age: 25, city: "ភ្នំពេញ" }
\`\`\`

---

## 6. ការប្រើ Objects ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Objects</title>
</head>
<body>
  <h1>សាកល្បង Objects</h1>
  <p id="output"></p>
  <script>
    const student = {
      name: "លីណា",
      age: 20,
      major: "Computer Science",
      introduce() {
        return \`ខ្ញុំឈ្មោះ \${this.name}, អាយុ \${this.age} ឆ្នាំ, ឯកទេស \${this.major}\`;
      }
    };
    document.getElementById("output").innerText = student.introduce();
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** ខ្ញុំឈ្មោះ លីណា, អាយុ 20 ឆ្នាំ, ឯកទេស Computer Science
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Object Properties</h3>
<p id="example1">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let car = { brand: "Honda", model: "Civic" };
  console.log(car.brand); // Honda
  car.model = "Accord";
  console.log(car); // { brand: "Honda", model: "Accord" }
</script>
<pre><code class="language-javascript">
let car = { brand: "Honda", model: "Civic" };
console.log(car.brand);
car.model = "Accord";
console.log(car);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Object Destructuring</h3>
<p id="example2">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let person = { name: "វិរៈ", age: 30 };
  let { name, age } = person;
  console.log(name, age); // វិរៈ 30
</script>
<pre><code class="language-javascript">
let person = { name: "វិរៈ", age: 30 };
let { name, age } = person;
console.log(name, age);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Object នៅក្នុង JavaScript គឺជាអ្វី?',
      options: [
        'បញ្ជីនៃទិន្នន័យជាលំដាប់',
        'ប្រភេទទិន្នន័យដែលផ្ទុកគូ Key-Value Pairs',
        'Function សម្រាប់គណនា',
        'String ដែលមាន Properties'
      ],
      correct: 1,
      explanation: 'Object ផ្ទុកទិន្នន័យជាគូ Key-Value Pairs។'
    },
    {
      question: 'តើវិធីណាមួយខាងក្រោមប្រើសម្រាប់ចូលប្រើ Property?',
      options: ['Dot Notation', 'Arrow Notation', 'Curly Notation', 'Square Notation'],
      correct: 0,
      explanation: 'Dot Notation (`.`) ឬ Bracket Notation (`[]`) ប្រើសម្រាប់ចូលប្រើ Property។'
    },
    {
      question: 'តើ Method នៅក្នុង Object គឺជាអ្វី?',
      options: ['String', 'Number', 'Function', 'Array'],
      correct: 2,
      explanation: 'Method គឺជា Function ដែលកំណត់នៅក្នុង Object។'
    },
    {
      question: 'តើកូដ `let obj = { x: 10 }; obj.x = 20;` នឹងធ្វើឱ្យ `obj.x` មានតម្លៃអ្វី?',
      options: ['10', '20', 'undefined', 'null'],
      correct: 1,
      explanation: 'ការកែប្រែ Property ធ្វើឱ្យ `obj.x` មានតម្លៃ 20។'
    },
    {
      question: 'តើ Object Destructuring ធ្វើអ្វី?',
      options: [
        'បំផ្លាញ Object',
        'ផ្ទុក Properties ទៅ Variables',
        'បន្ថែម Properties',
        'បំលែង Object ទៅ Array'
      ],
      correct: 1,
      explanation: 'Object Destructuring ផ្ទុក Properties ទៅ Variables យ៉ាងងាយស្រួល។'
    },
    {
      question: 'តើ Spread Operator (`...`) ប្រើសម្រាប់អ្វី?',
      options: [
        'លុប Properties',
        'ចម្លង ឬបញ្ចូល Objects',
        'បង្កើត Method',
        'បំលែង Object ទៅ String'
      ],
      correct: 1,
      explanation: 'Spread Operator ប្រើសម្រាប់ចម្លង ឬបញ្ចូល Objects។'
    },
    {
      question: 'តើកូដ `let obj = { name: "សុខា" }; console.log(obj["name"]);` នឹងបង្ហាញអ្វី?',
      options: ['សុខា', 'undefined', 'null', 'name'],
      correct: 0,
      explanation: 'Bracket Notation (`["name"]`) ចូលប្រើ Property `name` និងបង្ហាញ "សុខា"។'
    },
    {
      question: 'តើ `this` នៅក្នុង Object Method សំដៅលើអ្វី?',
      options: ['Window Object', 'Parent Object', 'Current Object', 'Global Scope'],
      correct: 2,
      explanation: '`this` នៅក្នុង Method សំដៅលើ Object ដែល Method នោះស្ថិតនៅ។'
    },
    {
      question: 'តើ ES6 Shorthand សម្រាប់ Method មានទម្រង់ដូចម្តេច?',
      options: [
        'function name() {}',
        'name: function() {}',
        'name() {}',
        'name => {}'
      ],
      correct: 2,
      explanation: 'ES6 Shorthand សម្រាប់ Method គឺ `name() {}`។'
    },
    {
      question: 'តើកូដ `let { x } = { x: 5, y: 10 }; console.log(x);` នឹងបង្ហាញអ្វី?',
      options: ['5', '10', 'undefined', '{ x: 5, y: 10 }'],
      correct: 0,
      explanation: 'Destructuring ផ្ទុក Property `x` ទៅ Variable `x` និងបង្ហាញ 5។'
    },
    {
      question: 'តើកូដ `let obj1 = { a: 1 }; let obj2 = { ...obj1, b: 2 };` នឹងធ្វើឱ្យ `obj2` មានតម្លៃអ្វី?',
      options: ['{ a: 1 }', '{ b: 2 }', '{ a: 1, b: 2 }', '{ a: 2, b: 1 }'],
      correct: 2,
      explanation: 'Spread Operator ចម្លង `obj1` និងបន្ថែម `b: 2` ដូច្នេះ `obj2` ជា `{ a: 1, b: 2 }`។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Objects ដើម្បីបង្ហាញព័ត៌មានអំពីនិស្សិត។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Student Profile"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "ប្រវត្តិនិស្សិត"។
   - បន្ថែម \`<p id="profile">\` សម្រាប់បង្ហាញលទ្ធផល។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រកាស Object \`const student = { name: "សុខា", age: 22, major: "Computer Science", introduce() { ... } };\`។
   - បន្ថែម Method \`introduce\` ដែល Return String ដូចជា "ខ្ញុំឈ្មោះ សុខា, អាយុ 22 ឆ្នាំ, ឯកទេស Computer Science"។
   - ប្រើ Object Destructuring ដើម្បីផ្ទុក \`name\` និង \`major\` ទៅ Variables។
   - បង្ហាញលទ្ធផលនៅក្នុង \`<p id="profile">\` ដោយប្រើ Method \`introduce\`។

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
  <title>Student Profile</title>
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
  <h1>ប្រវត្តិនិស្សិត</h1>
  <p id="profile"></p>
  <script>
    const student = {
      name: "សុខា",
      age: 22,
      major: "Computer Science",
      introduce() {
        return \`ខ្ញុំឈ្មោះ \${this.name}, អាយុ \${this.age} ឆ្នាំ, ឯកទេស \${this.major}\`;
      }
    };
    let { name, major } = student;
    document.getElementById("profile").innerText = student.introduce();
  </script>
</body>
</html>
`
  }
};

export default JSLesson3_2Content;