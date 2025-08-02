import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson7_3Content: LessonContent = {
  title: 'Prototypes និង Prototypal Inheritance',
  objectives: [
    'យល់ដឹងអំពី Prototypes នៅក្នុង JavaScript',
    'រៀនអំពី Prototypal Inheritance និង Prototype Chain',
    'ស្វែងយល់អំពី `__proto__` និង `prototype` Property',
    'អនុវត្តន៍ការបង្កើត Objects ដោយប្រើ Prototypes',
    'រៀនប្រើ `Object.create` និង Constructor Functions'
  ],
  content: `
# Prototypes និង Prototypal Inheritance 🧬

---

**Prototypes** គឺជាយន្តការនៅក្នុង JavaScript ដែលអនុញ្ញាតឱ្យ Objects ទទួលមរតក Properties និង Methods ពី Object ផ្សេងទៀត។

---

## 1. ការយល់ដឹងអំពី Prototypes
គ្រប់ Object នៅក្នុង JavaScript មាន Prototype ដែលជា Object ផ្សេងទៀត។

\`\`\`javascript
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true
\`\`\`

---

## 2. Prototype Chain
នៅពេលចូលប្រើ Property, JavaScript ស្វែងរកនៅក្នុង Object និង Prototype Chain។

\`\`\`javascript
const person = {
  name: 'ឈ្មោះ'
};
console.log(person.toString()); // [object Object] (ពី Object.prototype)
\`\`\`

---

## 3. Constructor Functions
Constructor Functions បង្កើត Objects ជាមួយ Prototype ដូចគ្នា។

\`\`\`javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(\`សួស្តី, \${this.name}!\`);
};
const person1 = new Person('ឈ្មោះ');
person1.greet(); // សួស្តី, ឈ្មោះ!
\`\`\`

---

## 4. \`Object.create\`
បង្កើត Object ដោយកំណត់ Prototype ដោយផ្ទាល់។

\`\`\`javascript
const parent = {
  greet: function() {
    console.log('សួស្តី!');
  }
};
const child = Object.create(parent);
child.greet(); // សួស្តី!
\`\`\`

---

## 5. ការប្រើ Prototypes ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prototypes</title>
</head>
<body>
  <h1>សាកល្បង Prototypes</h1>
  <p id="output">ចុចដើម្បីសាកល្បង</p>
  <button id="test">សាកល្បង</button>
  <script>
    function Person(name) {
      this.name = name;
    }
    Person.prototype.greet = function() {
      return \`សួស្តី, \${this.name}!\`;
    };
    const person = new Person('ឈ្មោះ');
    document.getElementById('test').addEventListener('click', () => {
      document.getElementById('output').textContent = person.greet();
    });
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** ចុច "សាកល្បង" នឹងបង្ហាញ "សួស្តី, ឈ្មោះ!" នៅក្នុង \`<p>\`។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Constructor Function</h3>
<p id="example1">ចុចដើម្បីសាកល្បង</p>
<script>
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function() {
    document.getElementById('example1').textContent = \`សួស្តី, \${this.name}!\`;
  };
  const person1 = new Person('ឈ្មោះ ១');
  person1.greet();
</script>
<pre><code class="language-javascript">
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  document.getElementById('example1').textContent = \`សួស្តី, \${this.name}!\`;
};
const person1 = new Person('ឈ្មោះ ១');
person1.greet();
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Object.create</h3>
<p id="example2">ចុចដើម្បីសាកល្បង</p>
<script>
  const parent = {
    greet: function() {
      document.getElementById('example2').textContent = 'សួស្តី!';
    }
  };
  const child = Object.create(parent);
  child.greet();
</script>
<pre><code class="language-javascript">
const parent = {
  greet: function() {
    document.getElementById('example2').textContent = 'សួស្តី!';
  }
};
const child = Object.create(parent);
child.greet();
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Prototype គឺជាអ្វី?',
      options: [
        'Object ដែល Objects ផ្សេងទៀតទទួលមរតក',
        'Function សម្រាប់ DOM',
        'Variable ក្នុង Scope',
        'Class ក្នុង JavaScript'
      ],
      correct: 0,
      explanation: 'Prototype គឺជា Object ដែល Objects ផ្សេងទៀតទទួលមរតក Properties និង Methods។'
    },
    {
      question: 'តើ `__proto__` ជាអ្វី?',
      options: [
        'Property ចង្អុលទៅ Prototype',
        'Method សម្រាប់ DOM',
        'Variable ក្នុង Function',
        'Object ក្នុង Array'
      ],
      correct: 0,
      explanation: '`__proto__` ចង្អុលទៅ Prototype នៃ Object។'
    },
    {
      question: 'តើ Prototype Chain ធ្វើអ្វី?',
      options: [
        'ស្វែងរក Properties នៅក្នុង Object និង Prototypes',
        'បន្ថែម Elements',
        'ផ្ញើ Request',
        'លុប Data'
      ],
      correct: 0,
      explanation: 'Prototype Chain ស្វែងរក Properties នៅក្នុង Object និង Prototypes របស់វា។'
    },
    {
      question: 'តើ `Object.prototype` ជាអ្វី?',
      options: [
        'Prototype នៃគ្រប់ Objects',
        'Function សម្រាប់ DOM',
        'Object សម្រាប់ Storage',
        'Class សម្រាប់ Errors'
      ],
      correct: 0,
      explanation: '`Object.prototype` ជា Prototype នៃគ្រប់ Objects ក្នុង JavaScript។'
    },
    {
      question: 'តើ Constructor Function ធ្វើអ្វី?',
      options: [
        'បង្កើត Objects ជាមួយ Prototype ដូចគ្នា',
        'លុប Objects',
        'បន្ថែម Elements',
        'ផ្ញើ Request'
      ],
      correct: 0,
      explanation: 'Constructor Function បង្កើត Objects ជាមួយ Prototype ដូចគ្នា។'
    },
    {
      question: 'តើ `Object.create` ធ្វើអ្វី?',
      options: [
        'បង្កើត Object ជាមួយ Prototype ដែលបានកំណត់',
        'បង្កើត Array',
        'លុប Object',
        'បន្ថែម Method'
      ],
      correct: 0,
      explanation: '`Object.create` បង្កើត Object ជាមួយ Prototype ដែលបានកំណត់។'
    },
    {
      question: 'តើ `prototype` Property មាននៅក្នុងអ្វី?',
      options: ['Function', 'Object', 'Array', 'String'],
      correct: 0,
      explanation: '`prototype` Property មាននៅក្នុង Function សម្រាប់ Constructor។'
    },
    {
      question: 'តើកូដ `const obj = new Person();` ធ្វើអ្វី?',
      options: [
        'បង្កើត Object ជាមួយ Person.prototype',
        'បង្កើត Array',
        'លុប Object',
        'បន្ថែម Element'
      ],
      correct: 0,
      explanation: '`new Person()` បង្កើត Object ជាមួយ `Person.prototype`។'
    },
    {
      question: 'តើ `obj.__proto__ === Person.prototype` បញ្ជូនអ្វី?',
      options: ['true', 'false', 'undefined', 'null'],
      correct: 0,
      explanation: '`__proto__` នៃ Object ចង្អុលទៅ `prototype` នៃ Constructor។'
    },
    {
      question: 'តើ Prototypal Inheritance អនុញ្ញាតឱ្យធ្វើអ្វី?',
      options: [
        'ទទួលមរតក Properties និង Methods',
        'បន្ថែម Elements',
        'ផ្ញើ Request',
        'លុប Data'
      ],
      correct: 0,
      explanation: 'Prototypal Inheritance អនុញ្ញាតឱ្យ Objects ទទួលមរតក Properties និង Methods។'
    },
    {
      question: 'តើកូដ `Object.prototype.toString` បញ្ជូនអ្វី?',
      options: [
        '[object Object]',
        'undefined',
        'Function',
        'Error'
      ],
      correct: 0,
      explanation: '`Object.prototype.toString` បញ្ជូន String ដែលតំណាងឱ្យ Object។'
    },
    {
      question: 'តើ `Function.prototype` ជាអ្វី?',
      options: [
        'Prototype នៃគ្រប់ Functions',
        'Object សម្រាប់ DOM',
        'Array សម្រាប់ Data',
        'String សម្រាប់ Text'
      ],
      correct: 0,
      explanation: '`Function.prototype` ជា Prototype នៃគ្រប់ Functions។'
    },
    {
      question: 'តើកូດ `const child = Object.create(parent)` ធ្វើអ្វី?',
      options: [
        'បង្កើត Object ដែលមាន `parent` ជា Prototype',
        'បង្កើត Array',
        'លុប Object',
        'បន្ថែម Method'
      ],
      correct: 0,
      explanation: '`Object.create` បង្កើត Object ដែលមាន `parent` ជា Prototype។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Prototypes ដើម្បីបង្កើត Object Hierarchy។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Prototypal Inheritance"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "សាកល្បង Prototypes"។
   - បន្ថែម \`<button id="greet">សួស្តី</button>\`។
   - បន្ថែម \`<p id="output">ចុចដើម្បីសាកល្បង</p>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - បង្កើត Constructor Function \`Person\` ជាមួយ Property \`name\`។
   - បន្ថែម Method \`greet\` ទៅ \`Person.prototype\` ដែល Return "សួស្តី, [name]!"។
   - បង្កើត Constructor Function \`Student\` ដែល Extend \`Person\` ដោយប្រើ \`Object.create\`។
   - បន្ថែម Method \`study\` ទៅ \`Student.prototype\` ដែល Return "[name] កំពុងសិក្សា"។
   - បង្កើត Instance នៃ \`Student\` ជាមួយឈ្មោះ "សិស្ស"។
   - នៅពេលចុច Button, បង្ហាញលទ្ធផលនៃ \`greet\` និង \`study\` នៅក្នុង \`<p id="output">\`។

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
  <title>Prototypal Inheritance</title>
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
  <h1>សាកល្បង Prototypes</h1>
  <button id="greet">សួស្តី</button>
  <p id="output">ចុចដើម្បីសាកល្បង</p>
  <script>
    function Person(name) {
      this.name = name;
    }
    Person.prototype.greet = function() {
      return \`សួស្តី, \${this.name}!\`;
    };
    function Student(name) {
      Person.call(this, name);
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.study = function() {
      return \`\${this.name} កំពុងសិក្សា\`;
    };
    const student = new Student('សិស្ស');
    document.getElementById('greet').addEventListener('click', () => {
      document.getElementById('output').textContent = \`\${student.greet()} \${student.study()}\`;
    });
  </script>
</body>
</html>
`
  }
};

export default JSLesson7_3Content;