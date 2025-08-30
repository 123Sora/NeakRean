import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson1_2Content: LessonContent = {
  title: 'មូលដ្ឋានភាសា JavaScript សម្រាប់ React Native',
  objectives: [
    'យល់ដឹងអំពីភាសា JavaScript និងរចនាសម្ព័ន្ធមូលដ្ឋានរបស់វា',
    'ស្វែងយល់ពី Variables, Data Types, និង Operators ក្នុង JavaScript',
    'រៀនប្រើ Control Flow (if, for, while) និង Functions',
    'ស្គាល់ការប្រើប្រាស់ Arrays និង Objects ក្នុង JavaScript',
    'អនុវត្តន៍ការសរសេរ JavaScript Code សម្រាប់ React Native'
  ],
  content: `
# មូលដ្ឋានភាសា JavaScript សម្រាប់ React Native 📱✨

---

**JavaScript** គឺជាភាសាសរសេរកម្មវិធីដ៏សំខាន់សម្រាប់ React Native។ វាត្រូវបានប្រើដើម្បីបង្កើត Components, គ្រប់គ្រង State, និង Logic នៅក្នុងកម្មវិធីទូរស័ព្ទ។ JavaScript មាន Syntax ដែលងាយស្រួលរៀន និងគាំទ្រលក្ខណៈពិសេសទំនើបដូចជា Arrow Functions, Async/Await, និង Destructuring។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនអំពីមូលដ្ឋាននៃ JavaScript ដែលចាំបាច់សម្រាប់ React Native។

---

## 1. អ្វីទៅជា JavaScript?

JavaScript គឺជាភាសាសរសេរកម្មវិធីដែលប្រើសម្រាប់អភិវឌ្ឍ Web និង Mobile Apps (ជាពិសេសជាមួយ React Native)។ លក្ខណៈពិសេសរបស់ JavaScript រួមមាន៖
- **Dynamic Typing:** អនុញ្ញាតឱ្យ Variables ផ្លាស់ប្តូរប្រភេទទិន្នន័យដោយភាពបត់បែន។
- **Functional Programming:** គាំទ្រ Functions ជា First-Class Citizens។
- **Asynchronous Programming:** ប្រើ \`async\`/\`await\` ឬ Promises សម្រាប់ Operations ដែលចំណាយពេល។
- **Object-Oriented:** គាំទ្រ Objects, Prototypes, និង Classes (ES6+)។
- **Rich Ecosystem:** មាន Libraries និង Packages ជាច្រើននៅ npm។

នៅក្នុង React Native, JavaScript ត្រូវបានប្រើដើម្បីបង្កើត UI Components, គ្រប់គ្រង Navigation, និងធ្វើការជាមួយ APIs។

---

## 2. Variables និង Data Types

JavaScript មាន Data Types ជាច្រើន៖
- **Number:** ចំនួនគត់ឬទសភាគ (ឧទាហរណ៍៖ \`42\`, \`3.14\`)។
- **String:** អក្សរឬឃ្លា (ឧទាហរណ៍៖ \`"Sokha"\`)។
- **Boolean:** \`true\` ឬ \`false\`។
- **Array:** បណ្តុំទិន្នន័យដែលមានលំដាប់ (ឧទាហរណ៍៖ \`[1, 2, 3]\`)។
- **Object:** បណ្តុំទិន្នន័យបែប Key-Value (ឧទាហរណ៍៖ \`{name: "Sokha", age: 25}\`)។
- **Undefined/Null:** តម្លៃមិនទាន់កំណត់ (\`undefined\`) ឬគ្មានតម្លៃ (\`null\`)។

**ឧទាហរណ៍កូដ៖**

\`\`\`javascript
// Variables និង Data Types
let name = "Sokha";
const age = 25;
let height = 1.75;
let isStudent = true;

console.log('ឈ្មោះ:', name);
console.log('អាយុ:', age);
console.log('កម្ពស់:', height);
console.log('ជានិស្សិត:', isStudent);
\`\`\`

**លទ្ធផល:**
\`\`\`
ឈ្មោះ: Sokha
អាយុ: 25
កម្ពស់: 1.75
ជានិស្សិត: true
\`\`\`

**ចំណាំ:** 
- ប្រើ \`let\` សម្រាប់ Variables ដែលអាចផ្លាស់ប្តូរតម្លៃ។
- ប្រើ \`const\` សម្រាប់ Variables ដែលមិនផ្លាស់ប្តូរ។
- \`var\` ជាវិធីចាស់ ហើយមិនសូវប្រើទៀតទេ។

---

## 3. Control Flow

JavaScript គាំទ្រ Control Flow ដូចជា \`if\`, \`for\`, \`while\`, និង \`switch\`៖
- **if Statement:** ប្រើសម្រាប់លក្ខខណ្ឌ។
- **for Loop:** ប្រើសម្រាប់ការធ្វើឡើងវិញ។
- **while Loop:** ប្រើសម្រាប់ការធ្វើឡើងវិញផ្អែកលើលក្ខខណ្ឌ។

**ឧទាហរណ៍កូដ៖**

\`\`\`javascript
let score = 85;

// if Statement
if (score >= 80) {
  console.log('អបអរសាទរ! អ្នកបាននិទ្ទេស A។');
} else {
  console.log('សូមព្យាយាមបន្ត។');
}

// for Loop
for (let i = 1; i <= 5; i++) {
  console.log('លេខ:', i);
}
\`\`\`

**លទ្ធផល:**
\`\`\`
អបអរសាទរ! អ្នកបាននិទ្ទេស A។
លេខ: 1
លេខ: 2
លេខ: 3
លេខ: 4
លេខ: 5
\`\`\`

---

## 4. Functions

Functions នៅក្នុង JavaScript ជួយរៀបចំ Code និងអនុវត្ត Logic។ JavaScript គាំទ្រ Regular Functions និង Arrow Functions (ES6)។

**ឧទាហរណ៍កូដ៖**

\`\`\`javascript
// Regular Function
function sayHello(name) {
  return 'សួស្តី ' + name + '!';
}

// Arrow Function
const addNumbers = (a, b) => a + b;

console.log(sayHello('Sokha'));
console.log('បូក:', addNumbers(5, 10));
\`\`\`

**លទ្ធផល:**
\`\`\`
សួស្តី Sokha!
បូក: 15
\`\`\`

**ចំណាំ:** Arrow Functions មាន Syntax ខ្លីជាង និងជាទូទៅប្រើនៅក្នុង React Native Components។

---

## 5. Arrays និង Objects

JavaScript មាន Collections ដ៏សំខាន់ដូចជា Arrays និង Objects៖
- **Arrays:** បណ្តុំទិន្នន័យដែលមានលំដាប់។
- **Objects:** បណ្តុំទិន្នន័យបែប Key-Value។

**ឧទាហរណ៍កូដ៖**

\`\`\`javascript
// Array
let names = ['Sokha', 'Dara', 'Srey'];
console.log('ឈ្មោះ:', names);
names.push('Vannak');
console.log('បន្ទាប់ពីបន្ថែម:', names);

// Object
let person = { name: 'Sokha', age: 25 };
console.log('មនុស្ស:', person);
person.age = 26;
console.log('បន្ទាប់ពីកែ:', person);
\`\`\`

**លទ្ធផល:**
\`\`\`
ឈ្មោះ: ["Sokha", "Dara", "Srey"]
បន្ទាប់ពីបន្ថែម: ["Sokha", "Dara", "Srey", "Vannak"]
មនុស្ស: {name: "Sokha", age: 25}
បន្ទាប់ពីកែ: {name: "Sokha", age: 26}
\`\`\`

---

## 6. Asynchronous Programming

JavaScript គាំទ្រ Asynchronous Programming ដោយប្រើ Promises និង \`async\`/\`await\`, ដែលសំខាន់សម្រាប់ React Native នៅពេលធ្វើការជាមួយ APIs ឬ AsyncStorage។

**ឧទាហរណ៍កូដ៖**

\`\`\`javascript
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log('ទិន្នន័យ:', data);
  } catch (error) {
    console.log('កំហុស:', error);
  }
}

fetchData();
\`\`\`

**ចំណាំ:** នៅក្នុង React Native, \`fetch\` និង \`async\`/\`await\` ត្រូវបានប្រើជាទូទៅសម្រាប់ទាញទិន្នន័យពី APIs។

---

## 7. ការប្រើ JavaScript ជាមួយ React Native

JavaScript ត្រូវបានប្រើនៅក្នុង React Native ដើម្បីបង្កើត Components និង Logic។ ឧទាហរណ៍ខាងក្រោមបង្ហាញពីការប្រើ JavaScript នៅក្នុង React Native Component៖

\`\`\`javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  const name = 'Sokha';
  const greetUser = (user) => 'សួស្តី ' + user + '!';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{greetUser(name)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});

export default App;
\`\`\`

**លទ្ធផល:** បង្ហាញអត្ថបទ "សួស្តី Sokha!" នៅកណ្តាលអេក្រង់។

---

## 8. ហេតុអ្វីត្រូវរៀន JavaScript?

- **សាមញ្ញនិងទំនើប:** Syntax ងាយស្រួលរៀន និងគាំទ្រលក្ខណៈទំនើប។
- **ប្រើជាមួយ React Native:** JavaScript គឺជាភាសាចម្បងសម្រាប់ React Native។
- **Ecosystem ដ៏ធំ:** មាន Libraries និង Tools ជាច្រើននៅ npm។
- **Asynchronous Support:** ស័ក្តិសមសម្រាប់ APIs និង Real-Time Apps។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ប្រើ Variables និង Data Types</h3>
<p>បង្ហាញព័ត៌មានអ្នកប្រើប្រាស់ជាមួយ Variables។</p>
<pre><code class="language-javascript">
let name = "Sokha";
const age = 25;
let height = 1.75;
let isStudent = true;
console.log('ឈ្មោះ:', name, 'អាយុ:', age, 'កម្ពស់:', height, 'ជានិស្សិត:', isStudent);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ប្រើ Control Flow</h3>
<p>ប្រើ if និង for ដើម្បីពិនិត្យនិទ្ទេស។</p>
<pre><code class="language-javascript">
let score = 90;
if (score >= 80) {
  console.log('និទ្ទេស A');
} else {
  console.log('និទ្ទេសផ្សេង');
}
for (let i = 1; i <= 3; i++) {
  console.log('ការពិនិត្យលើកទី:', i);
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ប្រើ Function</h3>
<p>បង្កើត Function សម្រាប់គណនាផលបូក។</p>
<pre><code class="language-javascript">
const add = (a, b) => a + b;
console.log('ផលបូក:', add(10, 20));
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ប្រើ Array និង Object</h3>
<p>គ្រប់គ្រងទិន្នន័យជាមួយ Arrays និង Objects។</p>
<pre><code class="language-javascript">
let students = ['Sokha', 'Dara'];
students.push('Vannak');
console.log('និស្សិត:', students);
let scores = { Sokha: 85, Dara: 90 };
scores.Vannak = 88;
console.log('និទ្ទេស:', scores);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ JavaScript គឺជាអ្វី?',
      options: [
        'Database Management System',
        'ភាសាសរសេរកម្មវិធីសម្រាប់ React Native',
        'Web Browser',
        'UI Framework'
      ],
      correct: 1,
      explanation: 'JavaScript គឺជាភាសាសរសេរកម្មវិធីសម្រាប់ React Native។'
    },
    {
      question: 'តើ Keyword ណាដែលប្រើសម្រាប់ Variable ដែលមិនផ្លាស់ប្តូរតម្លៃ?',
      options: ['let', 'const', 'var', 'static'],
      correct: 1,
      explanation: '`const` ប្រើសម្រាប់ Variables ដែលមិនផ្លាស់ប្តូរតម្លៃ។'
    },
    {
      question: 'តើ Array នៅក្នុង JavaScript មានលក្ខណៈអ្វី?',
      options: [
        'បណ្តុំទិន្នន័យដែលមានលំដាប់',
        'បណ្តុំទិន្នន័យបែប Key-Value',
        'មិនអនុញ្ញាតឱ្យបន្ថែមទិន្នន័យ',
        'មានតែចំនួនគត់'
      ],
      correct: 0,
      explanation: 'Array ជាបណ្តុំទិន្នន័យដែលមានលំដាប់។'
    },
    {
      question: 'តើអ្វីជា Arrow Function?',
      options: [
        'Function ដែលមាន Syntax ខ្លី',
        'Function សម្រាប់ Database',
        'Function សម្រាប់ UI',
        'Function សម្រាប់ Web Only'
      ],
      correct: 0,
      explanation: 'Arrow Function មាន Syntax ខ្លី និងប្រើជាទូទៅនៅក្នុង React Native�।'
    },
    {
      question: 'តើអ្វីជា Control Flow នៅក្នុង JavaScript?',
      options: [
        'Functions សម្រាប់គណនា',
        'if, for, while',
        'Components សម្រាប់ UI',
        'Packages សម្រាប់ npm'
      ],
      correct: 1,
      explanation: 'Control Flow នៅក្នុង JavaScript គឺ if, for, while។'
    },
    {
      question: 'តើ Object នៅក្នុង JavaScript មានលក្ខណៈអ្វី?',
      options: [
        'បណ្តុំទិន្នន័យបែប Key-Value',
        'មិនអនុញ្ញាតឱ្យមានទិន្នន័យស្ទួន',
        'មានលំដាប់',
        'តែចំនួនទសភាគ'
      ],
      correct: 0,
      explanation: 'Object ជាបណ្តុំទិន្នន័យបែប Key-Value។'
    },
    {
      question: 'តើអ្វីជា Asynchronous Programming នៅក្នុង JavaScript?',
      options: [
        'ការគ្រប់គ្រង UI',
        'ការគ្រប់គ្រង Operations ដែលចំណាយពេល',
        'ការគ្រប់គ្រង Database',
        'ការបង្កើត Components'
      ],
      correct: 1,
      explanation: 'Asynchronous Programming គ្រប់គ្រង Operations ដែលចំណាយពេលដូចជា API Calls។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដ `let numbers = [1, 2, 2]; numbers.push(3); console.log(numbers);`?',
      options: [
        '[1, 2, 2]',
        '[1, 2, 3]',
        '[1, 2, 2, 3]',
        '[1, 2]'
      ],
      correct: 2,
      explanation: 'កូដនេះបន្ថែម 3 ទៅ Array ដូច្នេះលទ្ធផលគឺ [1, 2, 2, 3]�।'
    },
    {
      question: 'តើ JavaScript គាំទ្រ Classes ដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'តែនៅក្នុង React Native ប៉ុណ្ណោះ', 'តែនៅក្នុង Web Apps'],
      correct: 0,
      explanation: 'JavaScript គាំទ្រ Classes តាមរយៈ ES6។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដ `const obj = {name: "Sokha"}; obj.name = "Dara"; console.log(obj.name);`?',
      options: [
        'Sokha',
        'Dara',
        'undefined',
        'null'
      ],
      correct: 1,
      explanation: 'កូดនេះផ្លាស់ប្តូរ `name` ទៅ "Dara" ដូច្នេះលទ្ធផលគឺ Dara។'
    }
  ],
  lab: {
    task: `
បង្កើត JavaScript Program សាមញ្ញមួយដែលបង្ហាញពីមុខងារជាមូលដ្ឋាននៃ JavaScript សម្រាប់ React Native។

**តម្រូវការ:**

1. **Variables និង Data Types:**
   - បង្កើត Variables ដើម្បីរក្សាទុកឈ្មោះ (String), អាយុ (Number), និងនិទ្ទេស (Number)។
   - បង្ហាញ Variables ទាំងនេះជាមួយ \`console.log\`។

2. **Control Flow:**
   - ប្រើ \`if\` Statement ដើម្បីពិនិត្យថាតើនិទ្ទេសធំជាងឬស្មើ 80 ដើម្បីបង្ហាញសារ "និទ្ទេស A" ឬ "និទ្ទេសផ្សេង"។

3. **Function:**
   - បង្កើត Arrow Function មួយឈ្មោះ \`calculateAverage\` ដែលទទួល Parameters ជា Array នៃនិទ្ទេស (Array<Number>) ហើយត្រឡប់នូវនិទ្ទេសជាមធ្យម។

4. **Collections:**
   - បង្កើត Array ដែលមានឈ្មោះនិស្សិត និង Object ដែលរក្សាទុកឈ្មោះនិងនិទ្ទេស។
   - បន្ថែមទិន្នន័យថ្មីទៅ Array និង Object។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser Console (ឧទាហរណ៍៖ Chrome DevTools) ឬ React Native Project។
    `,
    solution: `
\`\`\`javascript
// Variables និង Data Types
let name = "Sokha";
const age = 25;
let grade = 85.5;
console.log('ឈ្មោះ:', name, 'អាយុ:', age, 'និទ្ទេស:', grade);

// Control Flow
if (grade >= 80) {
  console.log('និទ្ទេស A');
} else {
  console.log('និទ្ទេសផ្សេង');
}

// Function
const calculateAverage = (grades) => {
  let sum = 0;
  for (let grade of grades) {
    sum += grade;
  }
  return sum / grades.length;
};
let grades = [90, 85.5, 88];
console.log('និទ្ទេសជាមធ្យម:', calculateAverage(grades));

// Collections
let students = ['Sokha', 'Dara'];
students.push('Vannak');
console.log('និស្សិត:', students);

let studentGrades = { Sokha: 85.5, Dara: 90 };
studentGrades.Vannak = 88;
console.log('និទ្ទេស:', studentGrades);
\`\`\`
`
  }
};

export default ReactNativeLesson1_2Content;