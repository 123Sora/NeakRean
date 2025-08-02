import type { LessonContent } from '../../../../types/LessonTypes';

const NodeJSLesson1_2Content: LessonContent = {
  title: 'JavaScript Fundamentals សម្រាប់ Node.js',
  objectives: [
    'ស្វែងយល់ពី ES6+ Features ដែលសំខាន់សម្រាប់ Node.js',
    'រៀនប្រើ Array Methods (map, filter, reduce, forEach)',
    'យល់ពី Object-Oriented Programming (OOP) Concepts ក្នុង JavaScript',
    'ស្វែងយល់ពី Asynchronous JavaScript (Callbacks, Promises, Async/Await)',
    'យល់ពី this Keyword និង Context'
  ],
  content: `
# JavaScript Fundamentals សម្រាប់ Node.js 🧠

---

**JavaScript** គឺជាភាសាស្នូល ( Core language ) របស់ Node.js។ ដើម្បីប្រើ Node.js ប្រកបដោយប្រសិទ្ធភាព អ្នកត្រូវយល់ច្បាស់ពីមូលដ្ឋានគ្រឹះ JavaScript ជាពិសេស **ES6+ Features** និង **Asynchronous Programming**។

---

## 1. ES6+ Features 🌟

* **Arrow Functions:** វាក្យសម្ព័ន្ធ (Syntax) សង្ខេបសម្រាប់សរសេរ Functions។
  \`\`\`javascript
  // មុន ES6
  function add(a, b) {
    return a + b;
  }
  // ES6 Arrow Function
  const add = (a, b) => a + b;
  \`\`\`
* **let/const:** ប្រើ \`let\` សម្រាប់ Variables ដែលអាចផ្លាស់ប្តូរតម្លៃបាន និង \`const\` សម្រាប់ Variables ដែលមិនផ្លាស់ប្តូរតម្លៃ។
  \`\`\`javascript
  let count = 0;
  count = 1; // អាចផ្លាស់ប្តូរបាន
  const name = "Node.js";
  // name = "JS"; // Error: Assignment to constant variable
  \`\`\`
* **Destructuring:** អនុញ្ញាតឱ្យ "Unpack" Values ពី Arrays ឬ Objects។
  \`\`\`javascript
  const person = { name: "Sok", age: 25 };
  const { name, age } = person;
  console.log(name, age); // Sok 25
  \`\`\`
* **Spread/Rest Operators:** ប្រើសម្រាប់ Copy Arrays/Objects ឬ Gather Arguments។
  \`\`\`javascript
  const arr = [1, 2, 3];
  const copy = [...arr]; // Spread
  const sum = (...numbers) => numbers.reduce((a, b) => a + b); // Rest
  console.log(sum(1, 2, 3)); // 6
  \`\`\`
* **Template Literals:** វាក្យសម្ព័ន្ធសង្ខេបសម្រាប់ Strings។
  \`\`\`javascript
  const name = "Node.js";
  console.log(\`Hello, \${name}!\`); // Hello, Node.js!
  \`\`\`
* **Classes:** គាំទ្រ Object-Oriented Programming។
  \`\`\`javascript
  class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log(\`Hello, I'm \${this.name}\`);
    }
  }
  const person = new Person("Sok");
  person.greet(); // Hello, I'm Sok
  \`\`\`

---

## 2. Array Methods 🛠️

* **map:** បង្កើត Array ថ្មីដោយអនុវត្ត Function លើធាតុនីមួយៗ។
  \`\`\`javascript
  const numbers = [1, 2, 3];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled); // [2, 4, 6]
  \`\`\`
* **filter:** បង្កើត Array ថ្មីដែលមានធាតុឆ្លងកាត់ Condition។
  \`\`\`javascript
  const evens = numbers.filter(num => num % 2 === 0);
  console.log(evens); // [2]
  \`\`\`
* **reduce:** បញ្ចូល Array ទៅជា Single Value។
  \`\`\`javascript
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(sum); // 6
  \`\`\`
* **forEach:** អនុវត្ត Function លើធាតុនីមួយៗដោយមិនបង្កើត Array ថ្មី។
  \`\`\`javascript
  numbers.forEach(num => console.log(num)); // 1, 2, 3
  \`\`\`

---

## 3. Object-Oriented Programming (OOP) Concepts 🎓

* **Classes and Objects:** បង្កើត Objects ដែលមាន Properties និង Methods។
  \`\`\`javascript
  class Car {
    constructor(brand) {
      this.brand = brand;
    }
    drive() {
      console.log(\`\${this.brand} is driving!\`);
    }
  }
  const car = new Car("Toyota");
  car.drive(); // Toyota is driving!
  \`\`\`
* **Inheritance:** បន្តពី Class មួយទៅ Class មួយទៀត។
  \`\`\`javascript
  class ElectricCar extends Car {
    charge() {
      console.log(\`\${this.brand} is charging!\`);
    }
  }
  const tesla = new ElectricCar("Tesla");
  tesla.drive(); // Tesla is driving!
  tesla.charge(); // Tesla is charging!
  \`\`\`

---

## 4. Asynchronous JavaScript (Callbacks, Promises, Async/Await) ⏳

* **Callbacks:** Functions ដែលបញ្ជូនទៅ Function ផ្សេងទៀត។
  \`\`\`javascript
  setTimeout(() => console.log("Delayed!"), 1000);
  \`\`\`
* **Promises:** តំណាងឱ្យ Value ដែលនឹងមាននៅពេលអនាគត។
  \`\`\`javascript
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
  });
  promise.then(result => console.log(result)); // Success!
  \`\`\`
* **Async/Await:** វាក្យសម្ព័ន្ធសង្ខេបសម្រាប់ Promises�।
  \`\`\`javascript
  async function fetchData() {
    const result = await new Promise(resolve => {
      setTimeout(() => resolve("Data fetched!"), 1000);
    });
    console.log(result); // Data fetched!
  }
  fetchData();
  \`\`\`

---

## 5. this Keyword និង Context 🔍

* **this** សំដៅទៅលើ Object ដែលកំពុងប្រតិបត្តិ Function។
  \`\`\`javascript
  const person = {
    name: "Sok",
    greet: function() {
      console.log(\`Hello, I'm \${this.name}\`);
    }
  };
  person.greet(); // Hello, I'm Sok
  \`\`\`
* **Context បាត់បង់នៅក្នុង Callbacks:**
  \`\`\`javascript
  const person = {
    name: "Sok",
    greet: function() {
      setTimeout(function() {
        console.log(this.name); // undefined (this មិនមែន person)
      }, 1000);
    }
  };
  person.greet();
  \`\`\`
* **ជួសជុល Context ដោយប្រើ Arrow Function:**
  \`\`\`javascript
  const person = {
    name: "Sok",
    greet: function() {
      setTimeout(() => {
        console.log(this.name); // Sok (Arrow Function រក្សា this)
      }, 1000);
    }
  };
  person.greet();
  \`\`\`

---
> **គន្លឹះ:** Asynchronous Programming គឺជាគន្លឹះសំខាន់សម្រាប់ Node.js ដោយសារវាជួយគ្រប់គ្រង I/O Operations ប្រកបដោយប្រសិទ្ធភាព។
`,
  examples: [
    `
# ឧទាហរណ៍ ១: Array Methods

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// map
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

// filter
const odds = numbers.filter(num => num % 2 !== 0);
console.log(odds); // [1, 3, 5]

// reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
\`\`\`

# ឧទាហរណ៍ ២: Async/Await ជាមួយ Timeout

\`\`\`javascript
async function delayedMessage() {
  console.log("Starting...");
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("1 second later!");
}
delayedMessage();
// Starting...
// 1 second later!
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Arrow Function ខុសគ្នាពី Regular Function ដោយរបៀបណា?',
      options: [
        'Arrow Function មិនអាចមាន Parameters',
        'Arrow Function មាន Syntax សង្ខេប និងរក្សា Context នៃ this',
        'Arrow Function តែងតែត្រឡប់ Value',
        'Arrow Function មិនអាចប្រើបានក្នុង Node.js'
      ],
      correct: 1,
      explanation: 'Arrow Function មាន Syntax សង្ខេបជាង និងរក្សា Context នៃ this ពី Parent Scope។'
    },
    {
      question: 'តើ `let` និង `const` ខុសគ្នាដោយរបៀបណា?',
      options: [
        '`let` មិនអាចផ្លាស់ប្តូរតម្លៃបាន ឯ `const` អាចផ្លាស់ប្តូរបាន',
        '`let` អាចផ្លាស់ប្តូរតម្លៃបាន ឯ `const` មិនអាចផ្លាស់ប្តូរបាន',
        'ទាំងពីរមិនអាចផ្លាស់ប្តូរតម្លៃបាន',
        'ទាំងពីរអាចផ្លាស់ប្តូរតម្លៃបាន'
      ],
      correct: 1,
      explanation: '`let` អនុញ្ញាតឱ្យផ្លាស់ប្តូរតម្លៃ Variable បាន ឯ `const` មិនអនុញ្ញាតឱ្យផ្លាស់ប្តូរតម្លៃបានទេ។'
    },
    {
      question: 'តើ Array Method `map` ធ្វើអ្វី?',
      options: [
        'លុបធាតុចេញពី Array',
        'បង្កើត Array ថ្មីដោយអនុវត្ត Function លើធាតុនីមួយៗ',
        'បញ្ចូល Array ទៅជា Single Value',
        'តម្រៀប Array'
      ],
      correct: 1,
      explanation: '`map` បង្កើត Array ថ្មីដោយអនុវត្ត Function លើធាតុនីមួយៗ។'
    },
    {
      question: 'តើ Asynchronous JavaScript ប្រើអ្វីខ្លះដើម្បីគ្រប់គ្រង Operations ដែលត្រូវការពេលវេលា?',
      options: [
        'Loops',
        'Callbacks, Promises, Async/Await',
        'Classes',
        'Arrays'
      ],
      correct: 1,
      explanation: 'Asynchronous JavaScript ប្រើ Callbacks, Promises, និង Async/Await ដើម្បីគ្រប់គ្រង Operations ដែលត្រូវការពេលវេលា។'
    },
    {
      question: 'តើ `this` Keyword សំដៅទៅលើអ្វី?',
      options: [
        'Function បច្ចុប្បន្ន',
        'Object ដែលកំពុងប្រតិបត្តិ Function',
        'Global Object',
        'Array ដែលមាន Function'
      ],
      correct: 1,
      explanation: '`this` សំដៅទៅលើ Object ដែលកំពុងប្រតិបត្តိ Function�।'
    },
    {
      question: 'តើ Destructuring ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Array ថ្មី',
        'Unpack Values ពី Arrays ឬ Objects',
        'បញ្ចូល Array ទៅជា Single Value',
        'កំណត់ Context នៃ this'
      ],
      correct: 1,
      explanation: 'Destructuring អនុញ្ញាតឱ្យ Unpack Values ពី Arrays ឬ Objects ទៅជា Variables ដាច់ដោយឡែក។'
    },
    {
      question: 'តើ Spread Operator (`...`) អាចប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Class ថ្មី',
        'Copy Arrays ឬ Objects',
        'គ្រប់គ្រង Asynchronous Operations',
        'កំណត់ Variables'
      ],
      correct: 1,
      explanation: 'Spread Operator (`...`) អនុញ្ញាតឱ្យ Copy Arrays ឬ Objects ឬបញ្ចូល Elements ទៅក្នុង Array/Object ថ្មី។'
    },
    {
      question: 'តើ Array Method `reduce` ធ្វើអ្វី?',
      options: [
        'បង្កើត Array ថ្មីដោយអនុវត្ត Function',
        'បញ្ចូល Array ទៅជា Single Value',
        'តម្រៀប Array',
        'លុបធាតុចេញពី Array'
      ],
      correct: 1,
      explanation: '`reduce` បញ្ចូល Array ទៅជា Single Value ដោយអនុវត្ត Function លើធាតុនីមួយៗ។'
    },
    {
      question: 'តើ `async/await` មានទំនាក់ទំនងជាមួយអ្វី?',
      options: [
        'Callbacks',
        'Promises',
        'Classes',
        'Array Methods'
      ],
      correct: 1,
      explanation: '`async/await` ជាវាក្យសម្ព័ន្ធសង្ខេបសម្រាប់គ្រប់គ្រង Promises ក្នុង Asynchronous JavaScript។'
    },
    {
      question: 'តើ Template Literals ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Functions',
        'គ្រប់គ្រង Strings ដោយបញ្ចូល Expressions',
        'Unpack Arrays',
        'កំណត់ Context'
      ],
      correct: 1,
      explanation: 'Template Literals ប្រើសម្រាប់គ្រប់គ្រង Strings ដោយអនុញ្ញាតឱ្យបញ្ចូល Expressions ជាមួយ \`${}\`។'
    },
    {
      question: 'តើ Inheritance ក្នុង OOP មានន័យដូចម្តេច?',
      options: [
        'បង្កើត Object ថ្មី',
        'បន្ត Properties និង Methods ពី Class មួយទៅ Class មួយទៀត',
        'គ្រប់គ្រង Asynchronous Operations',
        'Copy Arrays'
      ],
      correct: 1,
      explanation: 'Inheritance អនុញ្ញាតឱ្យ Class មួយបន្ត Properties និង Methods ពី Class មួយទៀត។'
    },
    {
      question: 'តើ Array Method `forEach` ខុសពី `map` ដោយរបៀបណា?',
      options: [
        '`forEach` បង្កើត Array ថ្មី ឯ `map` មិនបង្កើត',
        '`forEach` មិនបង្កើត Array ថ្មី ឯ `map` បង្កើត Array ថ្មី',
        'ទាំងពីរបញ្ចូល Array ទៅជា Single Value',
        'ទាំងពីរលុបធាតុចេញពី Array'
      ],
      correct: 1,
      explanation: '`forEach` អនុវត្ត Function លើធាតុនីមួយៗដោយមិនបង្កើត Array ថ្មី ឯ `map` បង្កើត Array ថ្មី។'
    },
    {
      question: 'តើអ្វីជាមូលហេតុដែល `this` អាចបាត់បង់ Context នៅក្នុង Callbacks?',
      options: [
        'Arrow Functions ប្រើ Context ខុស',
        'Regular Functions បង្កើត Context ថ្មី',
        'Promises ផ្លាស់ប្តូរ Context',
        'Classes មិនគាំទ្រ this'
      ],
      correct: 1,
      explanation: 'Regular Functions នៅក្នុង Callbacks បង្កើត Context ថ្មី ដែលធ្វើឱ្យ `this` មិនសំដៅទៅ Object ដើម។'
    }
  ],
  lab: {
    task: `
# លំហាត់អនុវត្តន៍: អនុវត្ត ES6+ Features និង Asynchronous JavaScript

គោលបំណង: អនុវត្តន៍ ES6+ Features និង Asynchronous Programming ដើម្បីបង្កើតកម្មវិធី JavaScript សាមញ្ញ។

1. **បង្កើត Project Folder**:
   * បង្កើត Folder ថ្មីឈ្មោះ \`js-fundamentals\`។
   * ចូលទៅក្នុង Folder:
     \`\`\`bash
     mkdir js-fundamentals
     cd js-fundamentals
     \`\`\`

2. **បង្កើត File JavaScript**:
   * បង្កើត File ឈ្មោះ \`fundamentals.js\` ហើយបញ្ចូល Code ដូចខាងក្រោម៖
     \`\`\`javascript
     // Array Methods
     const numbers = [1, 2, 3, 4, 5];
     const squares = numbers.map(num => num * num);
     console.log("Squares:", squares);

     const evens = numbers.filter(num => num % 2 === 0);
     console.log("Evens:", evens);

     const sum = numbers.reduce((acc, num) => acc + num, 0);
     console.log("Sum:", sum);

     numbers.forEach(num => console.log("Number:", num));

     // Class
     class Person {
       constructor(name) {
         this.name = name;
       }
       greet() {
         console.log(\`Hello, I'm \${this.name}\`);
       }
     }
     const person = new Person("Sok");
     person.greet();

     // Async/Await
     async function delayedMessage() {
       console.log("Starting...");
       await new Promise(resolve => setTimeout(resolve, 1000));
       console.log("1 second later!");
     }
     delayedMessage();
     \`\`\`

3. **ដំណើរការ File**:
   * នៅក្នុង Terminal ដំណើរការ File:
     \`\`\`bash
     node fundamentals.js
     \`\`\`
   * ត្រួតពិនិត្យលទ្ធផល។

4. **បន្ថែម Async/Await ជាមួយ Promise**:
   * បន្ថែម Code ដូចខាងក្រោមទៅ \`fundamentals.js\`:
     \`\`\`javascript
     async function fetchUsers() {
       const users = await new Promise(resolve => {
         setTimeout(() => resolve(["Sok", "Phea", "Chan"]), 1000);
       });
       console.log("Users:", users);
     }
     fetchUsers();
     \`\`\`
   * ដំណើរការ File ម្តងទៀត ហើយត្រួតពិនិត្យលទ្ធផល។

5. **ចែករំលែកលទ្ធផល**:
   * កត់សម្គាល់លទ្ធផលនៃ \`fundamentals.js\`។
`,
    solution: `
# ដំណោះស្រាយ៖ អនុវត្ត ES6+ Features និង Asynchronous JavaScript

## ជំហានទី ១: បង្កើត Project Folder
* Folder \`js-fundamentals\` ត្រូវបានបង្កើត។
* អ្នកបានចូលទៅក្នុង Folder:
  \`\`\`bash
  mkdir js-fundamentals
  cd js-fundamentals
  \`\`\`

## ជំហានទី ២: បង្កើត File JavaScript
* File \`fundamentals.js\` ត្រូវបានបង្កើតជាមួយ Code:
  \`\`\`javascript
  // Array Methods
  const numbers = [1, 2, 3, 4, 5];
  const squares = numbers.map(num => num * num);
  console.log("Squares:", squares);

  const evens = numbers.filter(num => num % 2 === 0);
  console.log("Evens:", evens);

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log("Sum:", sum);

  numbers.forEach(num => console.log("Number:", num));

  // Class
  class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log(\`Hello, I'm \${this.name}\`);
    }
  }
  const person = new Person("Sok");
  person.greet();

  // Async/Await
  async function delayedMessage() {
    console.log("Starting...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("1 second later!");
  }
  delayedMessage();
  \`\`\`

## ជំហានទី ៣: ដំណើរការ File
* លទ្ធផលនៃការដំណើរការ:
  \`\`\`
  Squares: [1, 4, 9, 16, 25]
  Evens: [2, 4]
  Sum: 15
  Number: 1
  Number: 2
  Number: 3
  Number: 4
  Number: 5
  Hello, I'm Sok
  Starting...
  1 second later!
  \`\`\`

## ជំហានទី ៤: បន្ថែម Async/Await ជាមួយ Promise
* Code បន្ថែម:
  \`\`\`javascript
  async function fetchUsers() {
    const users = await new Promise(resolve => {
      setTimeout(() => resolve(["Sok", "Phea", "Chan"]), 1000);
    });
    console.log("Users:", users);
  }
  fetchUsers();
  \`\`\`
* លទ្ធផលបន្ថែម:
  \`\`\`
  Users: ["Sok", "Phea", "Chan"]
  \`\`\`

## លទ្ធផលផ្ទៀងផ្ទាត់
* **File**: \`fundamentals.js\`
* **លទ្ធផល**:
  * Squares: \`[1, 4, 9, 16, 25]\`
  * Evens: \`[2, 4]\`
  * Sum: \`15\`
  * Numbers: \`1, 2, 3, 4, 5\`
  * Person: \`Hello, I'm Sok\`
  * Delayed Message: \`Starting...\` និង \`1 second later!\`
  * Users: \`["Sok", "Phea", "Chan"]\`
`
  }
};

export default NodeJSLesson1_2Content;