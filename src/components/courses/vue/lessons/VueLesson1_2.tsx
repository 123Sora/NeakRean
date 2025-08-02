import type { LessonContent } from '../../../../types/LessonTypes';

const VueLesson1_2Content: LessonContent = {
  title: 'JavaScript Fundamentals សម្រាប់ Vue.js',
  objectives: [
    'យល់ដឹងពី ES6+ Features ដែលសំខាន់សម្រាប់ Vue.js',
    'រៀនប្រើ Array Methods ដូចជា map, filter, reduce',
    'ស្វែងយល់ពី Asynchronous JavaScript ជាមួយ Promises និង Async/Await',
    'យល់ពី `this` Keyword នៅក្នុង JavaScript',
  ],
  content: `
# JavaScript Fundamentals សម្រាប់ Vue.js 📜

---

Vue.js ពឹងផ្អែកលើ **JavaScript** ជាមូលដ្ឋានគ្រឹះ។ ដើម្បីរៀន Vue.js ប្រកបដោយប្រសិទ្ធភាព អ្នកត្រូវយល់ច្បាស់ពី **ES6+ Features** និង Concepts សំខាន់ៗ។

---

## 1. ES6+ Features

**ES6 (ECMAScript 2015)** និង Versions ក្រោយៗ បានណែនាំ Features ដែលធ្វើឱ្យ JavaScript កាន់តែងាយស្រួល និងមានអានុភាព។

- **Arrow Functions:**
  \`\`\`javascript
  // មុន ES6
  function add(a, b) {
    return a + b;
  }

  // ES6 Arrow Function
  const add = (a, b) => a + b;
  \`\`\`

- **let/const:**
  \`\`\`javascript
  let name = 'សុខ'; // Reassignable
  const age = 25; // Non-reassignable
  \`\`\`

- **Destructuring:**
  \`\`\`javascript
  const person = { name: 'សុខ', age: 25 };
  const { name, age } = person;
  console.log(name, age); // សុខ 25
  \`\`\`

- **Spread/Rest Operators:**
  \`\`\`javascript
  const arr1 = [1, 2];
  const arr2 = [...arr1, 3, 4]; // Spread
  console.log(arr2); // [1, 2, 3, 4]

  const sum = (...numbers) => numbers.reduce((a, b) => a + b); // Rest
  console.log(sum(1, 2, 3)); // 6
  \`\`\`

- **Template Literals:**
  \`\`\`javascript
  const name = 'សុខ';
  console.log(\`សួស្តី \${name}!\`); // សួស្តី សុខ!
  \`\`\`

- **Classes:**
  \`\`\`javascript
  class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      return \`សួស្តី, ខ្ញុំឈ្មោះ \${this.name}\`;
    }
  }
  const sok = new Person('សុខ');
  console.log(sok.greet()); // សួស្តី, ខ្ញុំឈ្មោះ សុខ
  \`\`\`

---

## 2. Array Methods

Array Methods ដូចជា \`map\`, \`filter\`, \`reduce\`, និង \`forEach\` ត្រូវបានប្រើជាញឹកញាប់នៅក្នុង Vue.js។

- **map:**
  \`\`\`javascript
  const numbers = [1, 2, 3];
  const doubled = numbers.map(n => n * 2);
  console.log(doubled); // [2, 4, 6]
  \`\`\`

- **filter:**
  \`\`\`javascript
  const numbers = [1, 2, 3, 4];
  const evens = numbers.filter(n => n % 2 === 0);
  console.log(evens); // [2, 4]
  \`\`\`

- **reduce:**
  \`\`\`javascript
  const numbers = [1, 2, 3];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(sum); // 6
  \`\`\`

- **forEach:**
  \`\`\`javascript
  const names = ['សុខ', 'ពេជ្រ'];
  names.forEach(name => console.log(name));
  // សុខ
  // ពេជ្រ
  \`\`\`

---

## 3. Asynchronous JavaScript

Vue.js ច្រើនតែធ្វើការជាមួយ **APIs** ដែលទាមទារ Asynchronous Operations។

- **Promises:**
  \`\`\`javascript
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('ទិន្នន័យ!'), 1000);
    });
  };

  fetchData()
    .then(data => console.log(data)) // ទិន្នន័យ!
    .catch(err => console.error(err));
  \`\`\`

- **Async/Await:**
  \`\`\`javascript
  const fetchData = async () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('ទិន្នន័យ!'), 1000);
    });
  };

  const getData = async () => {
    const data = await fetchData();
    console.log(data); // ទិន្នន័យ!
  };
  getData();
  \`\`\`

---

## 4. \`this\` Keyword

**\`this\`** នៅក្នុង JavaScript សំដៅទៅលើ Object ដែល Function ត្រូវបានហៅ។

\`\`\`javascript
const person = {
  name: 'សុខ',
  greet() {
    console.log(this.name);
  }
};
person.greet(); // សុខ

// Arrow Function មិនមាន \`this\` ផ្ទាល់ខ្លួន
const greet = () => console.log(this.name);
greet(); // undefined
\`\`\`

**ក្នុង Vue.js:** Vue Methods និង Computed Properties ប្រើ \`this\` ដើម្បីចូលប្រើ Data Properties។

\`\`\`javascript
Vue.createApp({
  data() {
    return { name: 'សុខ' };
  },
  methods: {
    greet() {
      console.log(this.name); // សុខ
    }
  }
}).mount('#app');
\`\`\`

---

## 5. គន្លឹះសម្រាប់ JavaScript Fundamentals

- **អនុវត្តន៍ ES6+ Features:** ប្រើ Arrow Functions, Destructuring នៅក្នុង Projects។
- **យល់ពី Asynchronous JavaScript:** សំខាន់សម្រាប់ API Calls នៅក្នុង Vue.js។
- **ប្រយ័ត្នជាមួយ \`this\`:** ប្រើ Regular Functions នៅក្នុង Vue Methods។
`,
  examples: [
    `
<h3>ឧទាហរណ៍៖ ប្រើ Array Methods</h3>
<p>ប្រើ <code>map</code> និង <code>filter</code> ដើម្បីដំណើរការទិន្នន័យ។</p>
<pre><code class="language-javascript">
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evens); // [2, 4]
</code></pre>
`,
    `
<h3>ឧទាហរណ៍៖ Async/Await</h3>
<p>ប្រើ <code>async/await</code> ដើម្បី Fetch ទិន្នន័យ។</p>
<pre><code class="language-javascript">
const fetchData = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('ទិន្នន័យ!'), 1000);
  });
};

const getData = async () => {
  const data = await fetchData();
  console.log(data);
};
getData(); // ទិន្នន័យ!
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Arrow Function ខុសពី Regular Function ដោយរបៀបណា?',
      options: [
        'មាន Syntax ខ្លីជាង',
        'មិនមាន `this` ផ្ទាល់ខ្លួន',
        'ទាំងពីរ',
        'គ្មានភាពខុសគ្នា'
      ],
      correct: 2,
      explanation: 'Arrow Function មាន Syntax ខ្លីជាង និងមិនមាន `this` ផ្ទាល់ខ្លួន។'
    },
    {
      question: 'តើ `const` អនុញ្ញាតឱ្យ Reassign Value បានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បាន ប៉ុន្តែត្រូវប្រើ `let`',
        'បាន ប៉ុន្តែត្រូវប្រើ `var`'
      ],
      correct: 1,
      explanation: '`const` មិនអនុញ្ញាតឱ្យ Reassign Value។'
    },
    {
      question: 'តើ Destructuring មានតួនាទីអ្វី?',
      options: [
        'បង្កើត Array',
        'Extract Values ពី Object/Array',
        'បន្ថែម Elements ទៅ Array',
        'បង្កើត Function'
      ],
      correct: 1,
      explanation: 'Destructuring Extract Values ពី Object ឬ Array។'
    },
    {
      question: 'តើ Spread Operator ប្រើសម្រាប់អ្វី?',
      options: [
        'Copy Array/Object',
        'Delete Elements',
        'Sort Array',
        'Create Function'
      ],
      correct: 0,
      explanation: 'Spread Operator ប្រើសម្រាប់ Copy Array ឬ Object។'
    },
    {
      question: 'តើ Array Method ណាមួយប្រើសម្រាប់ Transform Elements?',
      options: [
        'filter',
        'map',
        'reduce',
        'forEach'
      ],
      correct: 1,
      explanation: '`map` ប្រើសម្រាប់ Transform Elements។'
    },
    {
      question: 'តើ `reduce` Method ប្រើសម្រាប់អ្វី?',
      options: [
        'Filter Elements',
        'Transform Elements',
        'Combine Elements ទៅជា Single Value',
        'Loop លើ Array'
      ],
      correct: 2,
      explanation: '`reduce` Combine Elements ទៅជា Single Value។'
    },
    {
      question: 'តើ Promises ប្រើសម្រាប់អ្វី?',
      options: [
        'Synchronous Operations',
        'Asynchronous Operations',
        'DOM Manipulation',
        'Styling'
      ],
      correct: 1,
      explanation: 'Promises ប្រើសម្រាប់ Asynchronous Operations�।'
    },
    {
      question: 'តើ Async/Await ជាអ្វី?',
      options: [
        'Syntax សម្រាប់ Synchronous Code',
        'Syntax សម្រាប់ Promises',
        'Array Method',
        'Class Constructor'
      ],
      correct: 1,
      explanation: 'Async/Await ជា Syntax សម្រាប់ធ្វើការជាមួយ Promises។'
    },
    {
      question: 'តើ `this` នៅក្នុង Arrow Function សំដៅទៅអ្វី?',
      options: [
        'Object ដែលហៅ Function',
        'Global Object',
        'Lexical `this`',
        'undefined'
      ],
      correct: 2,
      explanation: 'Arrow Function ប្រើ Lexical `this`។'
    },
    {
      question: 'តើ Method ណាមួយនៅក្នុង Vue.js ប្រើ `this` ដើម្បីចូលប្រើ Data?',
      options: [
        'map',
        'Methods',
        'reduce',
        'filter'
      ],
      correct: 1,
      explanation: 'Vue.js Methods ប្រើ `this` ដើម្បីចូលប្រើ Data Properties�।'
    },
    {
      question: 'តើ Template Literals ប្រើសម្រាប់អ្វី?',
      options: [
        'Create Arrays',
        'String Interpolation',
        'DOM Manipulation',
        'Asynchronous Operations'
      ],
      correct: 1,
      explanation: 'Template Literals ប្រើសម្រាប់ String Interpolation។'
    },
    {
      question: 'តើ `forEach` Method ត្រឡប់អ្វី?',
      options: [
        'New Array',
        'Single Value',
        'undefined',
        'Boolean'
      ],
      correct: 2,
      explanation: '`forEach` មិនត្រឡប់ Value អ្វីឡើយ (undefined)។'
    },
  ],
  lab: {
    task: `
បង្កើត JavaScript File ដែលប្រើ ES6+ Features និង Array Methods ដើម្បីគណនាទិន្នន័យ។

**តម្រូវការ:**

1. **បង្កើត File:**
   - បង្កើត File: \`array-utils.js\`។

2. **ប្រើ ES6+ Features:**
   - ប្រើ \`const\` និង Arrow Functions។
   - ប្រើ Destructuring ដើម្បី Extract Values។
   - ប្រើ Template Literals សម្រាប់ Output។

3. **បន្ថែម Array Methods:**
   - បង្កើត Function \`doubleNumbers\` ដែលប្រើ \`map\` ដើម្បីគុណ Numbers នីមួយៗនៅក្នុង Array នឹង 2។
   - បង្កើត Function \`filterEvens\` ដែលប្រើ \`filter\` ដើម្បីត្រឡប់តែ Numbers ដែលជា Even។
   - បង្កើត Function \`sumNumbers\` ដែលប្រើ \`reduce\` ដើម្បីគណនាផលបូក។

4. **ប្រើ Async/Await:**
   - បង្កើត Async Function \`fetchNumbers\` ដែល Return Array \`[1, 2, 3, 4, 5]\` បន្ទាប់ពី Delay 1 វិនាទី (ប្រើ \`setTimeout\` នៅក្នុង Promise)។

5. **Run និង Test:**
   - ប្រើ Node.js ដើម្បី Run File: \`node array-utils.js\`។
   - Output គួរបង្ហាញ:
     - Doubled: \`[2, 4, 6, 8, 10]\`
     - Evens: \`[2, 4]\`
     - Sum: \`15\`

**ការណែនាំ:** ពិនិត្យ Syntax Errors នៅក្នុង Terminal។
    `,
    solution: `
## array-utils.js 
\`\`\`text
const fetchNumbers = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve([1, 2, 3, 4, 5]), 1000);
  });
};

const doubleNumbers = numbers => numbers.map(n => n * 2);
const filterEvens = numbers => numbers.filter(n => n % 2 === 0);
const sumNumbers = numbers => numbers.reduce((acc, curr) => acc + curr, 0);

const processData = async () => {
  const numbers = await fetchNumbers();
  const { length } = numbers; // Destructuring
  console.log(\`Array Length: \${length}\`);
  console.log(\`Doubled: \${doubleNumbers(numbers)}\`);
  console.log(\`Evens: \${filterEvens(numbers)}\`);
  console.log(\`Sum: \${sumNumbers(numbers)}\`);
};

processData();
\`\`\`
`
  }
};

export default VueLesson1_2Content;