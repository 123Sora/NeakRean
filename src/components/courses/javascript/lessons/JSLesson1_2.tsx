import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson1_2Content: LessonContent = {
  title: 'ការដំឡើង និងចាប់ផ្តើមសរសេរ Code',
  objectives: [
    'ស្វែងយល់អំពីឧបករណ៍ចាំបាច់សម្រាប់សរសេរ JavaScript',
    'រៀនរបៀបភ្ជាប់ JavaScript ទៅកាន់ HTML',
    'យល់ពីការប្រើប្រាស់ `console.log()` សម្រាប់ Debugging',
    'សរសេរកូដ JavaScript ដំបូងរបស់អ្នក ("Hello World!")'
  ],
  content: `
# ការដំឡើង និងចាប់ផ្តើមសរសេរ Code 🛠️💻

---

នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបរៀបចំបរិស្ថានសម្រាប់សរសេរ JavaScript និងរបៀបសរសេរកូដ JavaScript ដំបូងរបស់អ្នក។

---

## 1. ឧបករណ៍ដែលត្រូវការ

ដើម្បីចាប់ផ្តើមសរសេរ JavaScript អ្នកត្រូវការឧបករណ៍សាមញ្ញៗមួយចំនួន៖

- **Web Browser:** Chrome, Firefox, Safari, ឬ Edge។ Browser ទាំងនេះមាន **Developer Tools** ដែលមាន Console សម្រាប់ Debugging។
- **Text Editor:** កម្មវិធីសរសេរកូដដូចជា **Visual Studio Code (VS Code)**, Sublime Text, ឬ Notepad++។
  - **VS Code** ត្រូវបានណែនាំព្រោះវាមាន Extensions ដូចជា Live Server និង IntelliSense។
- **កុំព្យូទ័រ:** មិនត្រូវការកុំព្យូទ័រដែលមានអនុភាពខ្លាំងនោះទេ គ្រាន់តែអាចដំណើរការ Browser និង Text Editor បាន។

---

## 2. របៀបភ្ជាប់ JavaScript ទៅកាន់ HTML

មាន ៣ វិធីសំខាន់ៗដើម្បីភ្ជាប់ JavaScript ទៅកាន់ HTML:

### 2.1 Inline JavaScript
សរសេរកូដ JavaScript ដោយផ្ទាល់នៅក្នុង HTML Attribute ដូចជា \`onclick\`។

\`\`\`html
<button onclick="alert('សួស្តី!')">ចុចខ្ញុំ</button>
\`\`\`

**គុណវិបត្តិ:** មិនសូវមានរបៀបរៀបរយ និងពិបាកថែទាំ។

---

### 2.2 Internal JavaScript
សរសេរកូដ JavaScript នៅក្នុង \`<script>\` Tag ក្នុង HTML។

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Internal JavaScript</title>
</head>
<body>
  <h1>សាកល្បង JavaScript</h1>
  <button onclick="myFunction()">ចុចខ្ញុំ</button>

  <script>
    function myFunction() {
      alert("នេះជា Internal JavaScript!");
    }
  </script>
</body>
</html>
\`\`\`

**គុណសម្បត្តិ:** ងាយស្រួលសម្រាប់គម្រោងតូចៗ។  
**គុណវិបត្តិ:** មិនស័ក្តិសមសម្រាប់គម្រោងធំៗ។

---

### 2.3 External JavaScript
សរសេរកូដ JavaScript នៅក្នុងឯកសារ \`.js\` ផ្សេង ហើយភ្ជាប់វាទៅ HTML ដោយប្រើ \`<script src="...">\`។

**ឧទាហរណ៍ (index.html):**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>External JavaScript</title>
</head>
<body>
  <h1>សាកល្បង JavaScript</h1>
  <button onclick="myFunction()">ចុចខ្ញុំ</button>

  <script src="script.js"></script>
</body>
</html>
\`\`\`

**ឧទាហរណ៍ (script.js):**
\`\`\`javascript
function myFunction() {
  alert("នេះជា External JavaScript!");
}
\`\`\`

**គុណសម្បត្តិ:** មានរបៀបរៀបរយ ងាយស្រួលថែទាំ និងប្រើឡើងវិញបាន។  
**គុណវិបត្តិ:** តម្រូវឱ្យបង្កើតឯកសារបន្ថែម។

---

## 3. ការប្រើប្រាស់ console.log() សម្រាប់ Debugging

**\`console.log()\`** គឺជាវិធីសាស្ត្រមួយនៅក្នុង JavaScript ដែលប្រើសម្រាប់បង្ហាញព័ត៌មាននៅក្នុង Browser Console។ វាមានប្រយោជន៍សម្រាប់ Debugging ដើម្បីពិនិត្យតម្លៃនៃ Variables ឬលទ្ធផលនៃកូដ។

**ឧទាហរណ៍:**
\`\`\`javascript
console.log("សួស្តី! នេះជា Console Message!");
let name = "សុខា";
console.log("ឈ្មោះ:", name);
console.log("តម្លៃ:", 42);
\`\`\`

**របៀបបើក Console:**
- នៅក្នុង Browser (Chrome/Firefox), ចុច **F12** ឬ Right-click -> **Inspect** -> ចុច Tab **Console**។
- អ្នកនឹងឃើញលទ្ធផលនៃ \`console.log()\` នៅទីនោះ។

---

## 4. ការសរសេរ Code JavaScript ដំបូងរបស់អ្នក ("Hello World!")

នៅក្នុង JavaScript, យើងអាចសរសេរកូដ "Hello World!" ដើម្បីសាកល្បង។

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Hello World</title>
</head>
<body>
  <h1>JavaScript ដំបូងរបស់ខ្ញុំ</h1>
  <script>
    console.log("Hello World!");
    alert("Hello World!");
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:**
- \`console.log("Hello World!")\` នឹងបង្ហាញ "Hello World!" នៅក្នុង Console។
- \`alert("Hello World!")\` នឹងបង្ហាញ Pop-up ជាមួយអត្ថបទ "Hello World!"។

---

## 5. គន្លឹះសម្រាប់អ្នកចាប់ផ្តើម

- **ប្រើ VS Code:** ដំឡើង Extensions ដូចជា **Live Server** ដើម្បីមើលលទ្ធផលភ្លាមៗ។
- **សាកល្បងនៅ Console:** បើក Browser Console ហើយសាកល្បងសរសេរ \`console.log(5 + 3)\` ឬ Commands ផ្សេងៗ។
- **រក្សាកូដឱ្យសាមញ្ញ:** ចាប់ផ្តើមជាមួយកូដតូចៗ ហើយបន្តបន្ថែមភាពស្មុគស្មាញ។
- **អានឯកសារ:** ស្វែងរកឯកសារនៅ MDN Web Docs ឬ W3Schools។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Console.log Debugging</h3>
<p>បើក Console (F12) ដើម្បីមើលលទ្ធផល។</p>
<script>
  let message = "សួស្តីពី JavaScript!";
  console.log(message);
  console.log("លេខ:", 123);
</script>
<pre><code class="language-javascript">
let message = "សួស្តីពី JavaScript!";
console.log(message);
console.log("លេខ:", 123);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ External JavaScript</h3>
<p>បង្កើតឯកសារ HTML និង JavaScript ដើម្បីបង្ហាញសារ។</p>
<p><strong>index.html:</strong></p>
<pre><code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html lang="km"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;External JS&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;សាកល្បង External JavaScript&lt;/h1&gt;
  &lt;button onclick="sayHello()"&gt;ចុចខ្ញុំ&lt;/button&gt;
  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p><strong>script.js:</strong></p>
<pre><code class="language-javascript">
function sayHello() {
  alert("សួស្តីពី External JavaScript!");
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើឧបករណ៍ណាមួយខាងក្រោមនេះចាំបាច់សម្រាប់សរសេរ JavaScript?',
      options: [
        'កម្មវិធីរចនារូបភាព',
        'Web Browser',
        'ម៉ាស៊ីនបម្រើ (Server)',
        'Database'
      ],
      correct: 1,
      explanation: 'Web Browser គឺជាឧបករណ៍ចាំបាច់សម្រាប់សរសេរ និងសាកល្បង JavaScript ព្រោះវាមាន JavaScript Engine និង Console សម្រាប់ Debugging។'
    },
    {
      question: 'តើវិធីណាមួយខាងក្រោមនេះល្អបំផុតសម្រាប់គម្រោងធំៗ?',
      options: [
        'Inline JavaScript',
        'Internal JavaScript',
        'External JavaScript',
        'ប្រើ JavaScript ដោយគ្មាន HTML'
      ],
      correct: 2,
      explanation: 'External JavaScript គឺល្អបំផុតសម្រាប់គម្រោងធំៗ ព្រោះវាមានរបៀបរៀបរយ និងងាយស្រួលថែទាំ។'
    },
    {
      question: 'តើ `console.log()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញ Pop-up នៅក្នុង Browser',
        'បង្ហាញព័ត៌មាននៅក្នុង Console សម្រាប់ Debugging',
        'ផ្លាស់ប្តូរអត្ថបទនៅលើគេហទំព័រ',
        'បន្ថែមរចនាបថទៅ HTML'
      ],
      correct: 1,
      explanation: '`console.log()` ប្រើសម្រាប់បង្ហាញព័ត៌មាននៅក្នុង Browser Console ដើម្បីជួយ Debugging។'
    },
    {
      question: 'តើឯកសារ `.js` ត្រូវបានភ្ជាប់ទៅ HTML ដោយរបៀបណា?',
      options: [
        'ប្រើ `<style>` Tag',
        'ប្រើ `<script src="file.js">` Tag',
        'ប្រើ `<link>` Tag',
        'ប្រើ `<div>` Tag'
      ],
      correct: 1,
      explanation: 'ឯកសារ `.js` ត្រូវបានភ្ជាប់ទៅ HTML ដោយប្រើ `<script src="file.js">`។'
    },
    {
      question: 'តើអ្វីជាគុណសម្បត្តិនៃការប្រើ External JavaScript?',
      options: [
        'កូដមានទំហំធំជាង',
        'កូដមានរបៀបរៀបរយ និងងាយស្រួលថែទាំ',
        'មិនអនុញ្ញាតឱ្យ Debugging',
        'តម្រូវឱ្យប្រើ Browser ពិសេស'
      ],
      correct: 1,
      explanation: 'External JavaScript មានរបៀបរៀបរយ និងងាយស្រួលថែទាំ ព្រោះកូដត្រូវបានញែកចេញពី HTML។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML និង JavaScript ដើម្បីបង្ហាញ "Hello World!" ដោយប្រើ External JavaScript។

**តម្រូវការ:**

1. **HTML Structure (index.html):**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` នៅក្នុង \`<head>\`។
   - កំណត់ Title៖ "My First JavaScript"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "កូដ JavaScript ដំបូងរបស់ខ្ញុំ"។
   - បន្ថែម \`<button>\` ដែលមានអត្ថបទ "បង្ហាញ Hello World!"។
   - ភ្ជាប់ឯកសារ JavaScript ឈ្មោះ \`script.js\` ដោយប្រើ \`<script src="script.js">\`។

2. **JavaScript File (script.js):**
   - បង្កើតឯកសារ \`script.js\`។
   - បង្កើត Function ឈ្មោះ \`showHelloWorld\` ដែលបង្ហាញ \`alert("Hello World!")\`។
   - ភ្ជាប់ Function នេះទៅនឹង Event \`onclick\` នៃ Button។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\` ដើម្បីកំណត់រចនាបថ៖
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`padding: 10px 20px;\`, \`background-color: #28a745;\`, \`color: white;\`, \`border: none;\`, និង \`cursor: pointer;\` សម្រាប់ Button។
     - កំណត់ \`background-color: #218838;\` សម្រាប់ Button នៅពេល Hover (\`:hover\`)។

**ការណែនាំ:** បង្កើតថតឯកសារមួយ ហើយរក្សាទុក \`index.html\` និង \`script.js\` នៅក្នុងថតនោះ។ សាកល្បងបើក \`index.html\` នៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `<!DOCTYPE html> //**index.html:**
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First JavaScript</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    button {
      padding: 10px 20px;
      background-color: #28a745;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #218838;
    }
  </style>
</head>
<body>
  <h1>កូដ JavaScript ដំបូងរបស់ខ្ញុំ</h1>
  <button onclick="showHelloWorld()">បង្ហាញ Hello World!</button>
  <script src="script.js"></script>
</body>
</html>

**script.js:**
function showHelloWorld() {
  alert("Hello World!");
}
`
  }
};

export default JSLesson1_2Content;