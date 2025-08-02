import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី JavaScript',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា JavaScript និងតួនាទីរបស់វា',
    'ស្វែងយល់ពីប្រវត្តិសង្ខេបនៃ JavaScript',
    'ស្គាល់ការប្រើប្រាស់ JavaScript ក្នុង Frontend, Backend, Mobile, និង Desktop',
    'យល់ពីរបៀបដែល JavaScript ដំណើរការនៅក្នុង Browser និង Node.js',
    'ប្រៀបធៀប JavaScript ជាមួយ HTML និង CSS'
  ],
  content: `
# ណែនាំអំពី JavaScript 🌐✨

---

**JavaScript** គឺជាភាសាសរសេរកម្មវិធីដែលប្រើសម្រាប់បង្កើតគេហទំព័រដែលមានអន្តរកម្ម (Interactive) និង Dynamic។ វាត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយមិនត្រឹមតែសម្រាប់ Frontend Development ប៉ុណ្ណោះទេ ប៉ុន្តែថែមទាំង Backend, Mobile Apps, និង Desktop Apps ផងដែរ។

---

## 1. អ្វីទៅជា JavaScript?

JavaScript គឺជាភាសាសរសេរកម្មវិធីដែលអនុញ្ញាតឱ្យអ្នកបន្ថែមអន្តរកម្មទៅក្នុងគេហទំព័រ។ ឧទាហរណ៍ អ្នកអាចប្រើ JavaScript ដើម្បី:
- បង្កើត Form Validation
- បង្កើត Animations និង Effects
- ទាញទិន្នន័យពី API
- បង្កើត Web Applications ដែលមានភាពស្មុគស្មាញ

JavaScript ត្រូវបានគេហៅថាជា **"ភាសាសម្រាប់ Web"** ព្រោះវាដំណើរការនៅក្នុង Browser ទាំងអស់។

---

## 2. ប្រវត្តិសង្ខេបនៃ JavaScript

- **១៩៩៥:** JavaScript ត្រូវបានបង្កើតឡើងដោយ **Brendan Eich** នៅក្រុមហ៊ុន Netscape ក្រោមឈ្មោះ **Mocha** និងក្រោយមកប្តូរទៅជា **LiveScript** មុននឹងក្លាយជា **JavaScript**។
- **១៩៩៧:** ក្លាយជាស្តង់ដារ **ECMAScript** (ECMA-262) ដែលជាស្តង់ដារសម្រាប់ភាសានេះ។
- **២០១៥:** ការចេញផ្សាយ **ES6 (ECMAScript 2015)** បាននាំមកនូវមុខងារទំនើបៗដូចជា Arrow Functions, Classes និង Modules។
- បច្ចុប្បន្ន JavaScript គឺជាភាសាដ៏សំខាន់សម្រាប់ Web Development។

---

## 3. តើ JavaScript ប្រើសម្រាប់អ្វី?

JavaScript មានការប្រើប្រាស់ច្រើនយ៉ាង រួមមាន៖
- **Frontend Development:** បន្ថែមអន្តរកម្មទៅក្នុងគេហទំព័រ (ឧទាហរណ៍៖ React, Vue.js, Angular)។
- **Backend Development:** បង្កើត Server-side Applications ជាមួយ **Node.js**។
- **Mobile Apps:** បង្កើត Mobile Apps ដោយប្រើ **React Native** ឬ **Ionic**។
- **Desktop Apps:** បង្កើត Desktop Applications ដោយប្រើ **Electron** (ឧទាហរណ៍៖ VS Code, Slack)។

---

## 4. តើ JavaScript ដំណើរការនៅទីណា?

- **Browser:** JavaScript ដំណើរការនៅក្នុង Browser (Chrome, Firefox, Safari) ដើម្បីគ្រប់គ្រង DOM (Document Object Model) និងធ្វើអន្តរកម្មជាមួយអ្នកប្រើប្រាស់។
- **Node.js:** បរិស្ថាន Runtime ដែលអនុញ្ញាតឱ្យ JavaScript ដំណើរការនៅខាង Server ដោយមិនចាំបាច់ប្រើ Browser។

---

## 5. ការប្រៀបធៀប JavaScript ជាមួយ HTML និង CSS

| ភាសា      | គោលបំណង                              | ឧទាហរណ៍ការប្រើប្រាស់                       |
| :--------- | :------------------------------------- | :------------------------------------------ |
| **HTML**   | កំណត់រចនាសម្ព័ន្ធ (Structure) នៃគេហទំព័រ | បង្កើត Elements ដូចជា \`<h1>\`, \`<p>\`, \`<div>\` |
| **CSS**    | កំណត់រចនាបថ (Style) និងការបង្ហាញ     | កែប្រែពណ៌, ទំហំ, ប្លង់ (Layout)            |
| **JavaScript** | បន្ថែមអន្តរកម្ម (Interactivity) និង Logic | គ្រប់គ្រង Events, Animations, API Calls   |

**ឧទាហរណ៍រួមគ្នា:**

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Intro</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; }
    button { padding: 10px 20px; background-color: #007bff; color: white; border: none; cursor: pointer; }
    button:hover { background-color: #0056b3; }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ JavaScript!</h1>
  <button onclick="sayHello()">ចុចខ្ញុំ</button>
  <p id="output"></p>

  <script>
    function sayHello() {
      document.getElementById("output").innerText = "សួស្តី! នេះជា JavaScript!";
    }
  </script>
</body>
</html>
\`\`\`

នៅក្នុងឧទាហរណ៍ខាងលើ:
- **HTML** បង្កើតរចនាសម្ព័ន្ធ (Structure)។
- **CSS** កែប្រែរចនាបថ (Style) នៃ Button។
- **JavaScript** បន្ថែមអន្តរកម្ម (Interactivity) ដោយប្តូរអត្ថបទនៅពេលចុច Button។

---

## 6. ហេតុអ្វីត្រូវរៀន JavaScript?

- **ភាពបត់បែន:** អាចប្រើបានទាំង Frontend និង Backend។
- **តម្រូវការទីផ្សារ:** JavaScript គឺជាភាសាដ៏ពេញនិយមបំផុតមួយសម្រាប់អ្នកអភិវឌ្ឍន៍។
- **សហគមន៍ធំ:** មានឯកសារ និងឧបករណ៍ជំនួយជាច្រើន (ឧទាហរណ៍៖ MDN, Stack Overflow)។
- **អន្តរកម្មទំនើប:** ផ្តល់អនុភាពក្នុងការបង្កើត Web Apps ដែលស្មុគស្មាញ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្កើត Alert ដោយប្រើ JavaScript</h3>
<p>បើក Browser Console (F12) ដើម្បីមើលលទ្ធផល។</p>
<button onclick="showAlert()">បង្ហាញ Alert</button>
<script>
  function showAlert() {
    alert("សួស្តី! នេះជា JavaScript Alert!");
  }
</script>
<pre><code class="language-html">
&lt;button onclick="showAlert()"&gt;បង្ហាញ Alert&lt;/button&gt;
&lt;script&gt;
  function showAlert() {
    alert("សួស្តី! នេះជា JavaScript Alert!");
  }
&lt;/script&gt;
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ប្តូរអត្ថបទនៅពេលចុច Button</h3>
<p id="demo">ចុចប៊ូតុងខាងក្រោមដើម្បីប្តូរអត្ថបទ។</p>
<button onclick="changeText()">ប្តូរអត្ថបទ</button>
<script>
  function changeText() {
    document.getElementById("demo").innerText = "អត្ថបទត្រូវបានប្តូរ!";
  }
</script>
<pre><code class="language-html">
&lt;p id="demo"&gt;ចុចប៊ូតុងខាងក្រោមដើម្បីប្តូរអត្ថបទ។&lt;/p&gt;
&lt;button onclick="changeText()"&gt;ប្តូរអត្ថបទ&lt;/button&gt;
&lt;script&gt;
  function changeText() {
    document.getElementById("demo").innerText = "អត្ថបទត្រូវបានប្តូរ!";
  }
&lt;/script&gt;
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ JavaScript គឺជាអ្វី?',
      options: [
        'ភាសាសម្រាប់រចនារចនាបថគេហទំព័រ',
        'ភាសាសរសេរកម្មវិធីសម្រាប់បន្ថែមអន្តរកម្មនៅក្នុងគេហទំព័រ',
        'ភាសាសម្រាប់បង្កើតរចនាសម្ព័ន្ធ HTML',
        'ឧបករណ៍សម្រាប់ Testing Code'
      ],
      correct: 1,
      explanation: 'JavaScript គឺជាភាសាសរសេរកម្មវិធីដែលប្រើសម្រាប់បន្ថែមអន្តរកម្ម និង Logic ទៅក្នុងគេហទំព័រ។'
    },
    {
      question: 'តើនរណាបានបង្កើត JavaScript?',
      options: [
        'Bill Gates',
        'Brendan Eich',
        'Tim Berners-Lee',
        'Mark Zuckerberg'
      ],
      correct: 1,
      explanation: 'JavaScript ត្រូវបានបង្កើតឡើងដោយ Brendan Eich នៅក្រុមហ៊ុន Netscape ក្នុងឆ្នាំ ១៩៩៥។'
    },
    {
      question: 'តើ JavaScript អាចប្រើប្រាស់សម្រាប់អ្វីខ្លះ?',
      options: [
        'Frontend Development ប៉ុណ្ណោះ',
        'Backend Development ប៉ុណ្ណោះ',
        'Frontend, Backend, Mobile, និង Desktop Apps',
        'ការរចនារូបភាព'
      ],
      correct: 2,
      explanation: 'JavaScript មានភាពបត់បែនខ្ពស់ និងអាចប្រើប្រាស់សម្រាប់ Frontend, Backend, Mobile, និង Desktop Apps។'
    },
    {
      question: 'តើ JavaScript ដំណើរការនៅទីណា?',
      options: [
        'នៅក្នុង Browser ប៉ុណ្ណោះ',
        'នៅក្នុង Node.js ប៉ុណ្ណោះ',
        'នៅក្នុង Browser និង Node.js',
        'នៅក្នុង Database'
      ],
      correct: 2,
      explanation: 'JavaScript អាចដំណើរការទាំងនៅក្នុង Browser (សម្រាប់ Frontend) និង Node.js (សម្រាប់ Backend)។'
    },
    {
      question: 'តើភាពខុសគ្នារវាង JavaScript និង CSS គឺជាអ្វី?',
      options: [
        'JavaScript កំណត់រចនាបថ ឯ CSS បន្ថែមអន្តរកម្ម',
        'JavaScript បន្ថែមអន្តរកម្ម ឯ CSS កំណត់រចនាបថ',
        'ទាំងពីរបន្ថែមរចនាសម្ព័ន្ធ',
        'ទាំងពីរប្រើសម្រាប់ Database'
      ],
      correct: 1,
      explanation: 'JavaScript បន្ថែមអន្តរកម្ម និង Logic ខណៈ CSS កំណត់រចនាបថ និងការបង្ហាញ។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML មួយដែលបង្ហាញអំពីមុខងារជាមូលដ្ឋានរបស់ JavaScript។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` នៅក្នុង \`<head>\`។
   - កំណត់ Title នៃឯកសារ៖ "JavaScript Introduction Lab"។

2. **Main Content:**
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "សូមស្វាគមន៍មកកាន់ JavaScript!"។
   - បន្ថែម \`<p id="greeting">\` ដែលមានអត្ថបទដំបូង "ចុចប៊ូតុងដើម្បីស្វាគមន៍!"។
   - បន្ថែម \`<button>\` ដែលមានអត្ថបទ "បង្ហាញសារស្វាគមន៍"។
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\` ដើម្បីបន្ថែម JavaScript។

3. **JavaScript Functionality:**
   - បង្កើត Function មួយឈ្មោះ \`welcomeMessage\` ដែលប្តូរអត្ថបទនៃ \`<p id="greeting">\` ទៅជា "សួស្តី! អ្នកបានចាប់ផ្តើមរៀន JavaScript!"។
   - ភ្ជាប់ Function នេះទៅនឹង Event \`onclick\` នៃ Button។

4. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\` ដើម្បីកំណត់រចនាបថ៖
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`padding: 10px 20px;\`, \`background-color: #007bff;\`, \`color: white;\`, \`border: none;\`, និង \`cursor: pointer;\` សម្រាប់ Button។
     - កំណត់ \`background-color: #0056b3;\` សម្រាប់ Button នៅពេល Hover (\`:hover\`)។

**ការណែនាំ:** សាកល្បង Code នៅក្នុង Browser ហើយបើក Console (F12) ដើម្បីពិនិត្យកំហុសប្រសិនបើមាន។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Introduction Lab</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <h1>សូមស្វាគមន៍មកកាន់ JavaScript!</h1>
  <p id="greeting">ចុចប៊ូតុងដើម្បីស្វាគមន៍!</p>
  <button onclick="welcomeMessage()">បង្ហាញសារស្វាគមន៍</button>

  <script>
    function welcomeMessage() {
      document.getElementById("greeting").innerText = "សួស្តី! អ្នកបានចាប់ផ្តើមរៀន JavaScript!";
    }
  </script>
</body>
</html>
`
  }
};

export default JSLesson1_1Content;