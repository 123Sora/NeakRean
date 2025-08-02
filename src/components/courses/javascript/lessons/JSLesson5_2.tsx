import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson5_2Content: LessonContent = {
  title: 'ការជ្រើសរើស Elements',
  objectives: [
    'រៀនប្រើ Methods ផ្សេងៗដើម្បីជ្រើសរើស DOM Elements',
    'ស្វែងយល់អំពី `getElementById`, `getElementsByClassName`, និង `getElementsByTagName`',
    'អនុវត្តន៍ការប្រើ `querySelector` និង `querySelectorAll`',
    'យល់ពីភាពខុសគ្នារវាង Live និង Static Node Lists',
    'អនុវត្តន៍ការជ្រើសរើស Elements ដើម្បីធ្វើអន្តរកម្ម'
  ],
  content: `
# ការជ្រើសរើស Elements 🔍

---

ការជ្រើសរើស DOM Elements គឺជាជំហានដំបូងសម្រាប់ធ្វើអន្តរកម្មជាមួយ HTML។ JavaScript ផ្តល់នូវ Methods ជាច្រើនដើម្បីជ្រើសរើស Elements។

---

## 1. \`getElementById\`
ជ្រើសរើស Element ដោយផ្អែកលើ ID។

\`\`\`html
<p id="myId">សួស្តី!</p>
<script>
  let element = document.getElementById("myId");
  console.log(element.innerText); // សួស្តី!
</script>
\`\`\`

---

## 2. \`getElementsByClassName\`
ជ្រើសរើស Elements ទាំងអស់ដែលមាន Class ជាក់លាក់ (Return HTMLCollection)។

\`\`\`html
<p class="text">អត្ថបទ 1</p>
<p class="text">អត្ថបទ 2</p>
<script>
  let elements = document.getElementsByClassName("text");
  console.log(elements[0].innerText); // អត្ថបទ 1
</script>
\`\`\`

---

## 3. \`getElementsByTagName\`
ជ្រើសរើស Elements ទាំងអស់ដែលមាន Tag ជាក់លាក់ (Return HTMLCollection)។

\`\`\`html
<div>Div 1</div>
<div>Div 2</div>
<script>
  let divs = document.getElementsByTagName("div");
  console.log(divs[1].innerText); // Div 2
</script>
\`\`\`

---

## 4. \`querySelector\` និង \`querySelectorAll\`
- **\`querySelector\`**: ជ្រើសរើស Element ដំបូងដែលផ្គូផ្គង CSS Selector។
- **\`querySelectorAll\`**: ជ្រើសរើស Elements ទាំងអស់ដែលផ្គូផ្គង CSS Selector (Return NodeList)។

\`\`\`html
<p class="text">អត្ថបទ 1</p>
<p class="text">អត្ថបទ 2</p>
<script>
  let first = document.querySelector(".text");
  let all = document.querySelectorAll(".text");
  console.log(first.innerText); // អត្ថបទ 1
  console.log(all.length); // 2
</script>
\`\`\`

---

## 5. Live vs Static Node Lists
- **HTMLCollection** (ឧ. \`getElementsByClassName\`): Live - ធ្វើបច្ចុប្បន្នភាពនៅពេល DOM ផ្លាស់ប្តូរ។
- **NodeList** (ឧ. \`querySelectorAll\`): Static - មិនធ្វើបច្ចុប្បន្នភាព។

\`\`\`html
<p class="text">អត្ថបទ</p>
<script>
  let live = document.getElementsByClassName("text");
  let static = document.querySelectorAll(".text");
  document.body.innerHTML += '<p class="text">ថ្មី</p>';
  console.log(live.length); // 2 (Live)
  console.log(static.length); // 1 (Static)
</script>
\`\`\`

---

## 6. ការប្រើ Methods ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Selecting Elements</title>
</head>
<body>
  <h1>សាកល្បងជ្រើសរើស Elements</h1>
  <p id="output" class="text">ចុច Console (F12)</p>
  <script>
    let byId = document.getElementById("output");
    let byClass = document.getElementsByClassName("text")[0];
    let byQuery = document.querySelector(".text");
    byId.innerText = "ជ្រើសរើសដោយ ID, Class, និង Query!";
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** \`<p>\` បង្ហាញ "ជ្រើសរើសដោយ ID, Class, និង Query!"
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ getElementById</h3>
<p id="example1">អត្ថបទ</p>
<script>
  let elem = document.getElementById("example1");
  console.log(elem.innerText); // អត្ថបទ
</script>
<pre><code class="language-javascript">
let elem = document.getElementById("example1");
console.log(elem.innerText);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ querySelectorAll</h3>
<p class="example2">អត្ថបទ 1</p>
<p class="example2">អត្ថបទ 2</p>
<script>
  let elems = document.querySelectorAll(".example2");
  console.log(elems.length); // 2
</script>
<pre><code class="language-javascript">
let elems = document.querySelectorAll(".example2");
console.log(elems.length);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `getElementById` បញ្ជូនអ្វីត្រឡប់មកវិញ?',
      options: ['NodeList', 'HTMLCollection', 'Element', 'Array'],
      correct: 2,
      explanation: '`getElementById` បញ្ជូន Element ដែលផ្គូផ្គង ID។'
    },
    {
      question: 'តើ `getElementsByClassName` បញ្ជូនអ្វីត្រឡប់មកវិញ?',
      options: ['Element', 'HTMLCollection', 'NodeList', 'Object'],
      correct: 1,
      explanation: '`getElementsByClassName` បញ្ជូន HTMLCollection នៃ Elements។'
    },
    {
      question: 'តើ `querySelectorAll` បញ្ជូនអ្វីត្រឡប់មកវិញ?',
      options: ['Element', 'HTMLCollection', 'NodeList', 'Array'],
      correct: 2,
      explanation: '`querySelectorAll` បញ្ជូន NodeList នៃ Elements ដែលផ្គូផ្គង CSS Selector។'
    },
    {
      question: 'តើ Method ណាមួយជ្រើសរើស Element ដំបូងដែលផ្គូផ្គង CSS Selector?',
      options: ['getElementById', 'querySelector', 'querySelectorAll', 'getElementsByClassName'],
      correct: 1,
      explanation: '`querySelector` ជ្រើសរើស Element ដំបូងដែលផ្គូផ្គង CSS Selector។'
    },
    {
      question: 'តើ HTMLCollection ខុសពី NodeList ដោយរបៀបណា?',
      options: [
        'HTMLCollection គឺ Static',
        'NodeList គឺ Live',
        'HTMLCollection គឺ Live',
        'គ្មានភាពខុសគ្នា'
      ],
      correct: 2,
      explanation: 'HTMLCollection គឺ Live (ធ្វើបច្ចុប្បន្នភាព) ចំណែក NodeList គឺ Static។'
    },
    {
      question: 'តើកូដ `document.querySelector(".text")` នឹងបញ្ជូនអ្វីប្រសិនបើគ្មាន Element ផ្គូផ្គង?',
      options: ['undefined', 'null', 'Error', 'Empty NodeList'],
      correct: 1,
      explanation: '`querySelector` បញ្ជូន `null` ប្រសិនបើគ្មាន Element ផ្គូផ្គង។'
    },
    {
      question: 'តើកូដ `document.getElementsByTagName("p")` បញ្ជូនអ្វីត្រឡប់មកវិញ?',
      options: ['Element', 'HTMLCollection', 'NodeList', 'Array'],
      correct: 1,
      explanation: '`getElementsByTagName` បញ្ជូន HTMLCollection នៃ `<p>` Elements។'
    },
    {
      question: 'តើ `querySelectorAll` អាចប្រើ CSS Selector ប្រភេទណាខ្លះ?',
      options: [
        'ID តែប៉ុណ្ណោះ',
        'Class តែប៉ុណ្ណោះ',
        'គ្រប់ CSS Selector',
        'Tag តែប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: '`querySelectorAll` អាចប្រើគ្រប់ CSS Selector (ឧ. ID, Class, Tag)។'
    },
    {
      question: 'តើកូដ `document.getElementById("test").innerText` នឹងបញ្ជូនអ្វីប្រសិនបើគ្មាន ID "test"?',
      options: ['undefined', 'null', 'Error', 'Empty String'],
      correct: 2,
      explanation: 'ប្រសិនបើគ្មាន ID "test" នឹងបណ្តាលឱ្យ Error ព្រោះ `null.innerText`។'
    },
    {
      question: 'តើ Method ណាមួយបញ្ជូន Element តែមួយ?',
      options: ['getElementsByClassName', 'querySelectorAll', 'getElementById', 'getElementsByTagName'],
      correct: 2,
      explanation: '`getElementById` បញ្ជូន Element តែមួយ។'
    },
    {
      question: 'តើ NodeList អាចប្រើ Method ដូចជា `forEach` បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Chrome', 'បានតែក្នុង Node.js'],
      correct: 0,
      explanation: 'NodeList អាចប្រើ `forEach` ដើម្បី Loop លើ Elements។'
    },
    {
      question: 'តើកូដ `document.querySelectorAll("div")` នឹងបញ្ជូនអ្វី?',
      options: ['Element', 'HTMLCollection', 'NodeList', 'Array'],
      correct: 2,
      explanation: '`querySelectorAll("div")` បញ្ជូន NodeList នៃ `<div>` Elements។'
    },
    {
      question: 'តើ HTMLCollection ធ្វើបច្ចុប្បន្នភាពនៅពេល DOM ផ្លាស់ប្តូរឬទេ?',
      options: ['បាន', 'មិនបាន', 'អាស្រ័យលើ Browser', 'អាស្រ័យលើ Method'],
      correct: 0,
      explanation: 'HTMLCollection គឺ Live ដូច្នេះធ្វើបច្ចុប្បន្នភាពនៅពេល DOM ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើកូដ `document.querySelector("#myId")` ស្មើនឹង Method ណាមួយ?',
      options: ['getElementById("myId")', 'getElementsByClassName("myId")', 'getElementsByTagName("myId")', 'querySelectorAll("#myId")'],
      correct: 0,
      explanation: '`querySelector("#myId")` ស្មើនឹង `getElementById("myId")`។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Methods ផ្សេងៗដើម្បីជ្រើសរើស Elements និងបង្ហាញព័ត៌មាន។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Element Selection"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "ជ្រើសរើស Elements"។
   - បន្ថែម \`<p id="output" class="info">ចុច Console (F12)</p>\`។
   - បន្ថែម \`<div class="info">អត្ថបទ Div</div>\`។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រើ \`getElementById\` ដើម្បីជ្រើសរើស Element ដែលមាន ID "output"។
   - ប្រើ \`querySelectorAll\` ដើម្បីជ្រើសរើស Elements ដែលមាន Class "info"។
   - បង្ហាញ String នៅក្នុង \`<p id="output">\` ដែលបង្ហាញចំនួន Elements ដែលមាន Class "info" (ឧ. "រកឃើញ 2 Elements ដែលមាន Class info")។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 18px;\` និង \`color: #333;\` សម្រាប់ \`.info\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Element Selection</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    .info {
      font-size: 18px;
      color: #333;
    }
  </style>
</head>
<body>
  <h1>ជ្រើសរើស Elements</h1>
  <p id="output" class="info">ចុច Console (F12)</p>
  <div class="info">អត្ថបទ Div</div>
  <script>
    const output = document.getElementById("output");
    const infoElements = document.querySelectorAll(".info");
    output.innerText = \`រកឃើញ \${infoElements.length} Elements ដែលមាន Class info\`;
  </script>
</body>
</html>
`
  }
};

export default JSLesson5_2Content;