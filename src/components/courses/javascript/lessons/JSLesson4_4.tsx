import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson4_4Content: LessonContent = {
  title: 'Promises និង Async/Await',
  objectives: [
    'យល់ដឹងអំពី Promises និងសារៈសំខាន់របស់វា',
    'រៀនបង្កើត និងប្រើ Promises',
    'ស្វែងយល់អំពី Async/Await សម្រាប់ការគ្រប់គ្រង Asynchronous Code',
    'អនុវត្តន៍ការប្រើ Promises និង Async/Await ក្នុងកូដ',
    'រៀនគ្រប់គ្រង Errors ជាមួយ Promises និង Async/Await'
  ],
  content: `
# Promises និង Async/Await ⏳

---

**Promises** គឺជា Object ដែលតំណាងឱ្យការបញ្ចប់ (ឬបរាជ័យ) នៃ Operation Asynchronous។ **Async/Await** គឺជា Syntax ដែលធ្វើឱ្យ Asynchronous Code មើលទៅដូច Synchronous Code។

---

## 1. Promises
Promise មាន 3 ស្ថានភាព: \`pending\`, \`fulfilled\`, និង \`rejected\`។

\`\`\`javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ជោគជ័យ!");
  }, 1000);
});
promise.then(result => console.log(result)); // ជោគជ័យ! (បន្ទាប់ពី 1 វិនាទី)
\`\`\`

### 1.1 Handling Errors
ប្រើ \`.catch()\` ដើម្បីគ្រប់គ្រង Errors។

\`\`\`javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("កំហុស!");
  }, 1000);
});
promise
  .then(result => console.log(result))
  .catch(error => console.log(error)); // កំហុស!
\`\`\`

---

## 2. Chaining Promises
Promises អាចត្រូវបាន Chained ដើម្បីប្រតិបត្តិ Operations ជាលំដាប់។

\`\`\`javascript
let promise = new Promise((resolve) => {
  setTimeout(() => resolve(5), 1000);
});
promise
  .then(num => num * 2)
  .then(result => console.log(result)); // 10
\`\`\`

---

## 3. Async/Await
\`async\` បង្កើត Function ដែល Return Promise។ \`await\` ផ្អាកការប្រតិបត្តិរហូតដល់ Promise ត្រូវបាន Resolved។

\`\`\`javascript
async function fetchData() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("ទិន្នន័យ!"), 1000);
  });
  let result = await promise;
  console.log(result); // ទិន្នន័យ!
}
fetchData();
\`\`\`

### 3.1 Error Handling ជាមួយ Async/Await
ប្រើ \`try/catch\` ដើម្បីគ្រប់គ្រង Errors។

\`\`\`javascript
async function fetchData() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => reject("កំហុស!"), 1000);
    });
    let result = await promise;
  } catch (error) {
    console.log(error); // កំហុស!
  }
}
fetchData();
\`\`\`

---

## 4. Promise Methods
- \`Promise.all()\`: រង់ចាំ Promises ទាំងអស់ Resolved។
- \`Promise.race()\`: Return Promise ដំបូងដែល Resolved ឬ Rejected។

\`\`\`javascript
let p1 = new Promise(resolve => setTimeout(() => resolve("P1"), 1000));
let p2 = new Promise(resolve => setTimeout(() => resolve("P2"), 500));
Promise.all([p1, p2]).then(results => console.log(results)); // ["P1", "P2"]
Promise.race([p1, p2]).then(result => console.log(result)); // P2
\`\`\`

---

## 5. ការប្រើ Promises និង Async/Await ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Promises និង Async/Await</title>
</head>
<body>
  <h1>សាកល្បង Promises និង Async/Await</h1>
  <p id="output"></p>
  <script>
    async function displayMessage() {
      let promise = new Promise((resolve) => {
        setTimeout(() => resolve("សួស្តី ពី Async/Await!"), 1000);
      });
      let result = await promise;
      document.getElementById("output").innerText = result;
    }
    displayMessage();
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** សួស្តី ពី Async/Await!
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Promise</h3>
<p id="example1">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("ជោគជ័យ!"), 1000);
  });
  promise.then(result => console.log(result)); // ជោគជ័យ!
</script>
<pre><code class="language-javascript">
let promise = new Promise((resolve) => {
  setTimeout(() => resolve("ជោគជ័យ!"), 1000);
});
promise.then(result => console.log(result));
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Async/Await</h3>
<p id="example2">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  async function fetchData() {
    let promise = new Promise((resolve) => {
      setTimeout(() => resolve("ទិន្នន័យ!"), 500);
    });
    let result = await promise;
    console.log(result); // ទិន្នន័យ!
  }
  fetchData();
</script>
<pre><code class="language-javascript">
async function fetchData() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("ទិន្នន័យ!"), 500);
  });
  let result = await promise;
  console.log(result);
}
fetchData();
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Promise គឺជាអ្វី?',
      options: [
        'Function សម្រាប់គណនា',
        'Object ដែលតំណាងឱ្យ Asynchronous Operation',
        'Array ដែលផ្ទុក Promises',
        'String ដែលមាន Status'
      ],
      correct: 1,
      explanation: 'Promise គឺជា Object ដែលតំណាងឱ្យការបញ្ចប់ឬបរាជ័យនៃ Asynchronous Operation។'
    },
    {
      question: 'តើ Promise មានស្ថានភាពប៉ុន្មាន?',
      options: ['2', '3', '4', '5'],
      correct: 1,
      explanation: 'Promise មាន 3 ស្ថានភាព: `pending`, `fulfilled`, និង `rejected`។'
    },
    {
      question: 'តើ Method ណាមួយប្រើសម្រាប់គ្រប់គ្រង Error នៅក្នុង Promise?',
      options: ['then()', 'catch()', 'finally()', 'resolve()'],
      correct: 1,
      explanation: '`.catch()` ប្រើសម្រាប់គ្រប់គ្រង Errors នៅក្នុង Promise។'
    },
    {
      question: 'តើ `async` Function បញ្ជូនអ្វីត្រឡប់មកវិញ?',
      options: ['String', 'Promise', 'Array', 'Object'],
      correct: 1,
      explanation: '`async` Function តែងតែបញ្ជូន Promise ត្រឡប់មកវិញ។'
    },
    {
      question: 'តើ `await` អាចប្រើនៅកន្លែងណា?',
      options: [
        'ក្នុង Global Scope',
        'ក្នុង `async` Function',
        'ក្នុង Regular Function',
        'ក្នុង Object Method'
      ],
      correct: 1,
      explanation: '`await` អាចប្រើបានតែនៅក្នុង `async` Function។'
    },
    {
      question: 'តើកូដ `Promise.all([p1, p2])` ធ្វើអ្វី?',
      options: [
        'រង់ចាំ Promise ដំបូង',
        'រង់ចាំ Promises ទាំងអស់',
        'បញ្ជូន Error',
        'បង្កើត Promise ថ្មី'
      ],
      correct: 1,
      explanation: '`Promise.all()` រង់ចាំ Promises ទាំងអស់ Resolved ឬ Rejected។'
    },
    {
      question: 'តើកូដ `Promise.race([p1, p2])` បញ្ជូនអ្វីត្រឡប់មកវិញ?',
      options: [
        'Promise ដំបូងដែល Resolved ឬ Rejected',
        'Promises ទាំងអស់',
        'Array នៃ Results',
        'Error'
      ],
      correct: 0,
      explanation: '`Promise.race()` បញ្ជូន Promise ដំបូងដែល Resolved ឬ Rejected។'
    },
    {
      question: 'តើ `try/catch` ប្រើសម្រាប់អ្វីនៅក្នុង Async/Await?',
      options: [
        'បង្កើត Promise',
        'គ្រប់គ្រង Errors',
        'បញ្ជូន Results',
        'បំលែង Promises'
      ],
      correct: 1,
      explanation: '`try/catch` ប្រើសម្រាប់គ្រប់គ្រង Errors នៅក្នុង Async/Await។'
    },
    {
      question: 'តើកូដ `async function test() { return "Hello"; }` បញ្ជូនអ្វីត្រឡប់មកវិញ?',
      options: ['String', 'Promise', 'Object', 'undefined'],
      correct: 1,
      explanation: '`async` Function បញ្ជូន Promise ដែល Resolve ទៅ "Hello"។'
    },
    {
      question: 'តើកូដ `new Promise((resolve) => resolve(10)).then(x => x * 2)` នឹងបញ្ជូនអ្វី?',
      options: ['10', '20', 'Promise', 'Error'],
      correct: 2,
      explanation: '`.then()` បញ្ជូន Promise ដែល Resolve ទៅ 20។'
    },
    {
      question: 'តើកូដ `async function test() { await Promise.resolve("Hi"); }` នឹងបង្ហាញអ្វី?',
      options: ['Hi', 'Promise', 'undefined', 'Error'],
      correct: 2,
      explanation: 'Function មិន Return អ្វីទេ ដូច្នេះបញ្ជូន `undefined`។'
    },
    {
      question: 'តើកូដ `Promise.all([Promise.resolve(1), Promise.resolve(2)])` នឹងបញ្ជូនអ្វី?',
      options: ['[1, 2]', '1', '2', 'Error'],
      correct: 0,
      explanation: '`Promise.all()` បញ្ជូន Array នៃ Resolved Values។'
    },
    {
      question: 'តើ Method `finally()` នៅក្នុង Promise ធ្វើអ្វី?',
      options: [
        'ប្រតិបត្តិបន្ទាប់ពី Resolve ឬ Reject',
        'បង្កើត Promise ថ្មី',
        'លុប Promise',
        'បញ្ជូន Error'
      ],
      correct: 0,
      explanation: '`.finally()` ប្រតិបត្តិ Code បន្ទាប់ពី Promise Resolve ឬ Reject។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Promises និង Async/Await ដើម្បីបង្ហាញសារបន្ទាប់ពីការពន្យារពេល។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Async Message"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "សាកល្បង Async/Await"។
   - បន្ថែម \`<p id="message">\` សម្រាប់បង្ហាញលទ្ធផល។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - បង្កើត Function \`delayMessage(msg, ms)\` ដែល Return Promise ដែល Resolve \`msg\` បន្ទាប់ពី \`ms\` មិល្លីវិនាទី។
   - បង្កើត \`async\` Function \`displayMessages()\` ដែល:
     - ប្រើ \`await\` ដើម្បីហៅ \`delayMessage("សួស្តី!", 1000)\`។
     - ប្រើ \`await\` ដើម្បីហៅ \`delayMessage("ពិភពលោក!", 500)\`។
     - Return String ដែលបញ្ចូល Results ទាំងពីរ (ឧ. "សួស្តី! ពិភពលោក!")។
   - បង្ហាញលទ្ធផលនៅក្នុង \`<p id="message">\`។

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
  <title>Async Message</title>
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
  <h1>សាកល្បង Async/Await</h1>
  <p id="message"></p>
  <script>
    function delayMessage(msg, ms) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(msg), ms);
      });
    }
    async function displayMessages() {
      const msg1 = await delayMessage("សួស្តី!", 1000);
      const msg2 = await delayMessage("ពិភពលោក!", 500);
      return \`\${msg1} \${msg2}\`;
    }
    displayMessages().then(result => {
      document.getElementById("message").innerText = result;
    });
  </script>
</body>
</html>
`
  }
};

export default JSLesson4_4Content;