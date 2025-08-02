import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson6_2Content: LessonContent = {
  title: 'Web Storage API',
  objectives: [
    'យល់ដឹងអំពី Web Storage API និងប្រភេទរបស់វា',
    'រៀនប្រើ `localStorage` ដើម្បីរក្សាទុក Data ជាអចិន្ត្រៃយ៍',
    'រៀនប្រើ `sessionStorage` សម្រាប់ Data បណ្តោះអាសន្ន',
    'អនុវត្តន៍ការរក្សាទុក និងទាញ Data ពី Storage',
    'ស្វែងយល់អំពីការគ្រប់គ្រង Storage Limitations'
  ],
  content: `
# Web Storage API 💾

---

**Web Storage API** ផ្តល់នូវវិធីសម្រាប់រក្សាទុក Data នៅក្នុង Browser។ វាមាន 2 ប្រភេទ:
- **localStorage**: រក្សាទុក Data ជាអចិន្ត្រៃយ៍រហូតដល់លុប។
- **sessionStorage**: រក្សាទុក Data សម្រាប់ Session បច្ចុប្បន្នតែប៉ុណ្ណោះ។

---

## 1. ការប្រើ \`localStorage\`
រក្សាទុក និងទាញ Data ដោយប្រើ Key-Value Pairs។

\`\`\`javascript
localStorage.setItem('name', 'ឈ្មោះ');
let name = localStorage.getItem('name');
console.log(name); // ឈ្មោះ
\`\`\`

---

## 2. ការប្រើ \`sessionStorage\`
ស្រដៀងនឹង \`localStorage\` ប៉ុន្តែ Data បាត់នៅពេល Tab ត្រូវបានបិទ។

\`\`\`javascript
sessionStorage.setItem('temp', 'បណ្តោះអាសន្ន');
let temp = sessionStorage.getItem('temp');
console.log(temp); // បណ្តោះអាសន្ន
\`\`\`

---

## 3. ការលុប Data
- **លុប Key ជាក់លាក់**: \`removeItem\`
- **លុប Data ទាំងអស់**: \`clear\`

\`\`\`javascript
localStorage.setItem('key', 'value');
localStorage.removeItem('key');
localStorage.clear(); // លុបទាំងអស់
\`\`\`

---

## 4. ការគ្រប់គ្រង JSON
រក្សាទុក Objects ដោយបម្លែងទៅ String។

\`\`\`javascript
const user = { name: 'ឈ្មោះ', age: 25 };
localStorage.setItem('user', JSON.stringify(user));
let savedUser = JSON.parse(localStorage.getItem('user'));
console.log(savedUser.name); // ឈ្មោះ
\`\`\`

---

## 5. ការប្រើ Web Storage API ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Storage API</title>
</head>
<body>
  <h1>សាកល្បង Web Storage API</h1>
  <input id="input" type="text" placeholder="បញ្ចូលឈ្មោះ">
  <button id="save">រក្សាទុក</button>
  <p id="output"></p>
  <script>
    document.getElementById('save').addEventListener('click', () => {
      const name = document.getElementById('input').value;
      localStorage.setItem('name', name);
      document.getElementById('output').textContent = 'រក្សាទុក: ' + localStorage.getItem('name');
    });
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** បញ្ចូលឈ្មោះ ចុច "រក្សាទុក" នឹងបង្ហាញឈ្មោះនៅក្នុង \`<p>\`។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ localStorage</h3>
<input id="example1" type="text" placeholder="បញ្ចូលឈ្មោះ">
<button onclick="localStorage.setItem('name', document.getElementById('example1').value)">រក្សាទុក</button>
<p id="output1"></p>
<script>
  document.getElementById('output1').textContent = localStorage.getItem('name') || 'គ្មានឈ្មោះ';
</script>
<pre><code class="language-javascript">
localStorage.setItem('name', document.getElementById('example1').value);
document.getElementById('output1').textContent = localStorage.getItem('name') || 'គ្មានឈ្មោះ';
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ sessionStorage</h3>
<input id="example2" type="text" placeholder="បញ្ចូលទិន្នន័យ">
<button onclick="sessionStorage.setItem('temp', document.getElementById('example2').value)">រក្សាទុក</button>
<p id="output2"></p>
<script>
  document.getElementById('output2').textContent = sessionStorage.getItem('temp') || 'គ្មានទិន្នន័យ';
</script>
<pre><code class="language-javascript">
sessionStorage.setItem('temp', document.getElementById('example2').value);
document.getElementById('output2').textContent = sessionStorage.getItem('temp') || 'គ្មានទិន្នន័យ';
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Web Storage API មានប្រភេទអ្វីខ្លះ?',
      options: [
        'localStorage និង sessionStorage',
        'cacheStorage និង dbStorage',
        'fileStorage និង tempStorage',
        'sqlStorage និង jsonStorage'
      ],
      correct: 0,
      explanation: 'Web Storage API មាន `localStorage` និង `sessionStorage`។'
    },
    {
      question: 'តើ `localStorage` ខុសពី `sessionStorage` ដោយរបៀបណា?',
      options: [
        '`localStorage` បណ្តោះអាសន្ន',
        '`sessionStorage` ជាអចិន្ត្រៃយ៍',
        '`localStorage` ជាអចិន្ត្រៃយ៍',
        'គ្មានភាពខុសគ្នា'
      ],
      correct: 2,
      explanation: '`localStorage` រក្សាទុក Data ជាអចិន្ត្រៃយ៍ ចំណែក `sessionStorage` បណ្តោះអាសន្ន។'
    },
    {
      question: 'តើ Method ណាមួយរក្សាទុក Data នៅក្នុង Storage?',
      options: ['getItem', 'setItem', 'removeItem', 'clear'],
      correct: 1,
      explanation: '`setItem` រក្សាទុក Data ជា Key-Value Pair។'
    },
    {
      question: 'តើ `localStorage.getItem` បញ្ជូនអ្វីត្រឡប់មកវិញ?',
      options: ['Object', 'String', 'Array', 'null'],
      correct: 1,
      explanation: '`getItem` បញ្ជូន String ឬ `null` ប្រសិនបើ Key មិនមាន។'
    },
    {
      question: 'តើ Method ណាមួយលុប Key ជាក់លាក់?',
      options: ['setItem', 'removeItem', 'clear', 'getItem'],
      correct: 1,
      explanation: '`removeItem` លុប Key ជាក់លាក់ពី Storage។'
    },
    {
      question: 'តើ `localStorage.clear()` ធ្វើអ្វី?',
      options: [
        'លុប Key មួយ',
        'លុប Data ទាំងអស់',
        'ទាញ Data',
        'បន្ថែម Data'
      ],
      correct: 1,
      explanation: '`clear` លុប Data ទាំងអស់ពី Storage។'
    },
    {
      question: 'តើ Data នៅក្នុង `sessionStorage` នៅសល់រហូតដល់ណា?',
      options: [
        'ជាអចិន្ត្រៃយ៍',
        'រហូតដល់ Tab បិទ',
        'រហូតដល់ Browser បិទ',
        'រហូតដល់ Server Restart'
      ],
      correct: 1,
      explanation: '`sessionStorage` Data បាត់នៅពេល Tab បិទ។'
    },
    {
      question: 'តើកូដ `JSON.stringify` ប្រើសម្រាប់អ្វី?',
      options: [
        'បម្លែង String ទៅ JSON',
        'បម្លែង Object ទៅ String',
        'លុប Data',
        'ទាញ Data'
      ],
      correct: 1,
      explanation: '`JSON.stringify` បម្លែង Object ទៅ String សម្រាប់ Storage។'
    },
    {
      question: 'តើកូដ `JSON.parse` ប្រើសម្រាប់អ្វី?',
      options: [
        'បម្លែង String ទៅ Object',
        'បម្លែង Object ទៅ String',
        'រក្សាទុក Data',
        'លុប Data'
      ],
      correct: 0,
      explanation: '`JSON.parse` បម្លែង String ទៅ Object។'
    },
    {
      question: 'តើ `localStorage` អាចរក្សាទុក Data ប្រភេទណាខ្លះ?',
      options: [
        'String តែប៉ុណ្ណោះ',
        'Object តែប៉ុណ្ណោះ',
        'String និង Object (បន្ទាប់ពី Stringify)',
        'Number តែប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: '`localStorage` រក្សាទុក String ឬ Object បន្ទាប់ពីបម្លែងជា String។'
    },
    {
      question: 'តើកូដ \`localStorage.getItem(\'key\')\` បញ្ជូន \`null\` នៅពេលណា?',
      options: [
        'នៅពេល Key មាន',
        'នៅពេល Key មិនមាន',
        'នៅពេល Data ជា Object',
        'នៅពេល Storage ពេញ'
      ],
      correct: 1,
      explanation: '`getItem` បញ្ជូន `null` ប្រសិនបើ Key មិនមាន។'
    },
    {
      question: 'តើ Web Storage API រក្សាទុក Data នៅឯណា?',
      options: ['Server', 'Browser', 'Database', 'File'],
      correct: 1,
      explanation: 'Web Storage API រក្សាទុក Data នៅក្នុង Browser។'
    },
    {
      question: 'តើ `sessionStorage` អាចចែករំលែក Data រវាង Tabs បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Chrome', 'បានតែក្នុង Firefox'],
      correct: 1,
      explanation: '`sessionStorage` Data មានតែនៅក្នុង Tab បច្ចុប្បន្ន។'
    },
    {
      question: 'តើកូដ \`localStorage.setItem(\'key\', \'value\')\` ធ្វើអ្វីប្រសិនបើ Key មានរួច?',
      options: [
        'បន្ថែម Value ថ្មី',
        'ជំនួស Value ចាស់',
        'បណ្តាលឱ្យ Error',
        'មិនធ្វើអ្វី'
      ],
      correct: 1,
      explanation: '`setItem` ជំនួស Value ចាស់ប្រសិនបើ Key មានរួច។'
    },
    {
      question: 'តើ Web Storage API មានទំហំកំណត់ប៉ុន្មាន?',
      options: [
        'គ្មានកំណត់',
        'ជាធម្មតា 5-10 MB',
        '1 GB',
        '100 KB'
      ],
      correct: 1,
      explanation: 'Web Storage API មានទំហំកំណត់ជាធម្មតា 5-10 MB អាស្រ័យលើ Browser។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Web Storage API ដើម្បីរក្សាទុក និងបង្ហាញឈ្មោះអ្នកប្រើ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "User Storage"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "រក្សាទុកឈ្មោះ"។
   - បន្ថែម \`<input id="name-input" type="text" placeholder="បញ្ចូលឈ្មោះ">\`។
   - បន្ថែម \`<button id="save">រក្សាទុក</button>\`។
   - បន្ថែម \`<p id="output">គ្មានឈ្មោះ</p>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រើ \`addEventListener\` លើ Button ដើម្បីរក្សាទុក Value ពី \`<input>\` ទៅ \`localStorage\` ជាមួយ Key 'username'។
   - បង្ហាញ Value ពី \`localStorage\` នៅក្នុង \`<p id="output">\` (ឧ. "ឈ្មោះ: ឈ្មោះ")។
   - ប្រសិនបើ \`localStorage\` មាន 'username' នៅពេលផ្ទុក Page សូមបង្ហាញវា។

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
  <title>User Storage</title>
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
  <h1>រក្សាទុកឈ្មោះ</h1>
  <input id="name-input" type="text" placeholder="បញ្ចូលឈ្មោះ">
  <button id="save">រក្សាទុក</button>
  <p id="output">គ្មានឈ្មោះ</p>
  <script>
    const output = document.getElementById('output');
    const savedName = localStorage.getItem('username');
    if (savedName) output.textContent = 'ឈ្មោះ: ' + savedName;
    document.getElementById('save').addEventListener('click', () => {
      const name = document.getElementById('name-input').value;
      localStorage.setItem('username', name);
      output.textContent = 'ឈ្មោះ: ' + name;
    });
  </script>
</body>
</html>
`
  }
};

export default JSLesson6_2Content;