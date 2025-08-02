import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson7_4Content: LessonContent = {
  title: 'this Keyword',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ `this` Keyword នៅក្នុង JavaScript',
    'រៀនអំពីបរិបទ (Context) នៃ `this` នៅក្នុង Functions ផ្សេងៗ',
    'ស្វែងយល់អំពីការប្រើ `this` ជាមួយ Methods, Constructors, និង Event Listeners',
    'អនុវត្តន៍ការគ្រប់គ្រង `this` ដោយប្រើ `bind`, `call`, និង `apply`',
    'រៀនអំពី `this` នៅក្នុង Arrow Functions'
  ],
  content: `
# this Keyword 🔑

---

**\`this\` Keyword** នៅក្នុង JavaScript សំដៅទៅលើ Object ដែល Function ត្រូវបានហៅ។ តម្លៃរបស់ \`this\` អាស្រ័យលើបរិបទ (Context) នៃការហៅ។

---

## 1. \`this\` នៅក្នុង Global Context
នៅក្នុង Global Scope, \`this\` សំដៅទៅលើ \`window\` (នៅក្នុង Browser)។

\`\`\`javascript
console.log(this === window); // true
\`\`\`

---

## 2. \`this\` នៅក្នុង Object Methods
នៅពេល Function ជា Method នៃ Object, \`this\` សំដៅទៅលើ Object នោះ។

\`\`\`javascript
const person = {
  name: 'ឈ្មោះ',
  greet: function() {
    console.log(\`សួស្តី, \${this.name}!\`);
  }
};
person.greet(); // សួស្តី, ឈ្មោះ!
\`\`\`

---

## 3. \`this\` នៅក្នុង Constructor Functions
នៅក្នុង Constructor, \`this\` សំដៅទៅលើ Instance ថ្មី។

\`\`\`javascript
function Person(name) {
  this.name = name;
}
const person = new Person('ឈ្មោះ');
console.log(person.name); // ឈ្មោះ
\`\`\`

---

## 4. \`this\` នៅក្នុង Event Listeners
នៅក្នុង Event Listeners, \`this\` ជាទូទៅសំដៅទៅលើ Element ដែល Trigger Event។

\`\`\`javascript
document.getElementById('btn').addEventListener('click', function() {
  console.log(this.id); // btn
});
\`\`\`

---

## 5. \`this\` នៅក្នុង Arrow Functions
Arrow Functions មិនមាន \`this\` ផ្ទាល់ខ្លួនទេ; ពួកវាចាប់យក \`this\` ពី Lexical Scope។

\`\`\`javascript
const person = {
  name: 'ឈ្មោះ',
  greet: () => {
    console.log(\`សួស្តី, \${this.name}!\`);
  }
};
person.greet(); // សួស្តី, undefined! (this គឺ window)
\`\`\`

---

## 6. ការគ្រប់គ្រង \`this\` ដោយប្រើ \`bind\`, \`call\`, \`apply\`
- **\`bind\`**: បង្កើត Function ថ្មីជាមួយ \`this\` ដែលបានកំណត់។
- **\`call\` / \`apply\`**: ហៅ Function ដោយកំណត់ \`this\` និង Arguments។

\`\`\`javascript
function greet() {
  console.log(\`សួស្តី, \${this.name}!\`);
}
const person = { name: 'ឈ្មោះ' };
greet.bind(person)(); // សួស្តី, ឈ្មោះ!
greet.call(person); // សួស្តី, ឈ្មោះ!
greet.apply(person); // សួស្តី, ឈ្មោះ!
\`\`\`

---

## 7. ការប្រើ \`this\` ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>this Keyword</title>
</head>
<body>
  <h1>សាកល្បង this Keyword</h1>
  <button id="btn">ចុចខ្ញុំ</button>
  <p id="output">ចុចដើម្បីសាកល្បង</p>
  <script>
    const person = {
      name: 'ឈ្មោះ',
      greet: function() {
        document.getElementById('output').textContent = \`សួស្តី, \${this.name}!\`;
      }
    };
    document.getElementById('btn').addEventListener('click', person.greet.bind(person));
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** ចុច Button នឹងបង្ហាញ "សួស្តី, ឈ្មោះ!" នៅក្នុង \`<p>\`។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ this នៅក្នុង Object Method</h3>
<p id="example1">ចុចដើម្បីសាកល្បង</p>
<button onclick="person1.greet()">ចុចខ្ញុំ</button>
<script>
  const person1 = {
    name: 'ឈ្មោះ ១',
    greet: function() {
      document.getElementById('example1').textContent = \`សួស្តី, \${this.name}!\`;
    }
  };
</script>
<pre><code class="language-javascript">
const person1 = {
  name: 'ឈ្មោះ ១',
  greet: function() {
    document.getElementById('example1').textContent = \`សួស្តី, \${this.name}!\`;
  }
};
person1.greet();
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ this នៅក្នុង Event Listener</h3>
<p id="example2">ចុចដើម្បីសាកល្បង</p>
<button id="exampleBtn">ចុចខ្ញុំ</button>
<script>
  document.getElementById('exampleBtn').addEventListener('click', function() {
    document.getElementById('example2').textContent = \`ប៊ូតុង ID: \${this.id}\`;
  });
</script>
<pre><code class="language-javascript">
document.getElementById('exampleBtn').addEventListener('click', function() {
  document.getElementById('example2').textContent = \`ប៊ូតុង ID: \${this.id}\`;
});
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `this` Keyword សំដៅទៅលើអ្វីនៅក្នុង Global Scope?',
      options: ['Object', 'Function', 'window', 'undefined'],
      correct: 2,
      explanation: 'នៅក្នុង Global Scope, `this` សំដៅទៅលើ `window` (នៅក្នុង Browser)។'
    },
    {
      question: 'តើ `this` សំដៅទៅលើអ្វីនៅក្នុង Object Method?',
      options: ['Global Object', 'Object ដែលមាន Method', 'Function', 'Event'],
      correct: 1,
      explanation: 'នៅក្នុង Object Method, `this` សំដៅទៅលើ Object ដែលមាន Method នោះ។'
    },
    {
      question: 'តើ `this` នៅក្នុង Constructor Function សំដៅទៅលើអ្វី?',
      options: ['Prototype', 'Instance ថ្មី', 'Global Object', 'Parent Object'],
      correct: 1,
      explanation: 'នៅក្នុង Constructor, `this` សំដៅទៅលើ Instance ថ្មី។'
    },
    {
      question: 'តើ `this` នៅក្នុង Event Listener ជាទូទៅសំដៅទៅលើអ្វី?',
      options: ['window', 'Function', 'Element ដែល Trigger Event', 'Object'],
      correct: 2,
      explanation: 'នៅក្នុង Event Listener, `this` សំដៅទៅលើ Element ដែល Trigger Event។'
    },
    {
      question: 'តើ Arrow Function មាន `this` ផ្ទាល់ខ្លួនទេ?',
      options: ['មាន', 'មិនមាន', 'មានតែក្នុង Chrome', 'មានតែក្នុង Node.js'],
      correct: 1,
      explanation: 'Arrow Functions ចាប់យក `this` ពី Lexical Scope។'
    },
    {
      question: 'តើ `bind` Method ធ្វើអ្វី?',
      options: [
        'បង្កើត Function ថ្មីជាមួយ `this` ដែលបានកំណត់',
        'ហៅ Function',
        'លុប `this`',
        'បន្ថែម Element'
      ],
      correct: 0,
      explanation: '`bind` បង្កើត Function ថ្មីជាមួយ `this` ដែលបានកំណត់។'
    },
    {
      question: 'តើ `call` Method ធ្វើអ្វី?',
      options: [
        'ហៅ Function ជាមួយ `this` និង Arguments',
        'បង្កើត Object',
        'លុប Function',
        'បន្ថែម Element'
      ],
      correct: 0,
      explanation: '`call` ហៅ Function ដោយកំណត់ `this` និង Arguments។'
    },
    {
      question: 'តើ `apply` ខុសពី `call` យ៉ាងដូចម្តេច?',
      options: [
        'ទទួល Arguments ជា Array',
        'ទទួល Arguments ជា String',
        'មិនទទួល Arguments',
        'បង្កើត Function ថ្មី'
      ],
      correct: 0,
      explanation: '`apply` ទទួល Arguments ជា Array ខុសពី `call`។'
    },
    {
      question: 'តើកូដ `const obj = { name: \'ឈ្មោះ\', fn: function() { return this.name; } }; obj.fn()` បញ្ជូនអ្វី?',
      options: ['ឈ្មោះ', 'undefined', 'window', 'Error'],
      correct: 0,
      explanation: '`this` នៅក្នុង Method សំដៅទៅលើ Object (`obj`)។'
    },
    {
      question: 'តើកូដ `function fn() { console.log(this); } fn()` បញ្ជូនអ្វី?',
      options: ['window', 'undefined', 'Function', 'Object'],
      correct: 0,
      explanation: 'នៅក្នុង Global Function, `this` គឺ `window`។'
    },
    {
      question: 'តើ `this` នៅក្នុង Arrow Function នៅក្នុង Object Method សំដៅទៅលើអ្វី?',
      options: ['Object', 'window', 'Function', 'undefined'],
      correct: 1,
      explanation: 'Arrow Function ចាប់យក `this` ពី Lexical Scope, ជាទូទៅ `window`។'
    },
    {
      question: 'តើកូដ `const fn = person.greet; fn()` នឹងបញ្ជូនអ្វីប្រសិនបើ `person.greet` ប្រើ `this`?',
      options: ['undefined', 'person.name', 'window', 'Error'],
      correct: 0,
      explanation: 'នៅពេល Function ត្រូវបានហៅដោយគ្មាន Context, `this` គឺ `window`, ដែលធ្វើឱ្យ `this.name` ជា `undefined`។'
    },
    {
      question: 'តើកូដ `document.getElementById(\'btn\').addEventListener(\'click\', function() { console.log(this); })` បញ្ជូនអ្វី?',
      options: ['window', 'Button Element', 'Function', 'undefined'],
      correct: 1,
      explanation: '`this` នៅក្នុង Event Listener សំដៅទៅលើ Element ដែល Trigger Event។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ \`this\` Keyword ដើម្បីបង្កើត Object សម្រាប់ការគ្រប់គ្រងប៊ូតុង។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "this Keyword"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "សាកល្បង this Keyword"។
   - បន្ថែម \`<button id="btn1">ប៊ូតុង ១</button>\` និង \`<button id="btn2">ប៊ូតុង ២</button>\`។
   - បន្ថែម \`<p id="output">ចុចប៊ូតុងដើម្បីសាកល្បង</p>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - បង្កើត Object \`buttonManager\` ជាមួយ Property \`name\` (ឧ. "អ្នកគ្រប់គ្រង") និង Method \`handleClick\`។
   - Method \`handleClick\` ប្រើ \`this\` ដើម្បីបង្ហាញ "ចុច [name] នៅលើ [button id]" នៅក្នុង \`<p id="output">\`។
   - ប្រើ \`bind\` ដើម្បីភ្ជាប់ \`handleClick\` ទៅ Buttons ទាំងពីរ។

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
  <title>this Keyword</title>
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
  <h1>សាកល្បង this Keyword</h1>
  <button id="btn1">ប៊ូតុង ១</button>
  <button id="btn2">ប៊ូតុង ២</button>
  <p id="output">ចុចប៊ូតុងដើម្បីសាកល្បង</p>
  <script>
    const buttonManager = {
      name: 'អ្នកគ្រប់គ្រង',
      handleClick: function(event) {
        document.getElementById('output').textContent = \`ចុច \${this.name} នៅលើ \${event.target.id}\`;
      }
    };
    document.getElementById('btn1').addEventListener('click', buttonManager.handleClick.bind(buttonManager));
    document.getElementById('btn2').addEventListener('click', buttonManager.handleClick.bind(buttonManager));
  </script>
</body>
</html>
`
  }
};

export default JSLesson7_4Content;