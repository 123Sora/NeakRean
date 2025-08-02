import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson5_1Content: LessonContent = {
  title: 'ការណែនាំអំពី DOM',
  objectives: [
    'យល់ដឹងអំពី DOM (Document Object Model) និងសារៈសំខាន់របស់វា',
    'ស្វែងយល់អំពីរចនាសម្ព័ន្ធនៃ DOM Tree',
    'រៀនអំពី Nodes និង Elements នៅក្នុង DOM',
    'យល់ពីរបៀបដែល JavaScript ធ្វើអន្តរកម្មជាមួយ DOM',
    'អនុវត្តន៍ការចូលប្រើ DOM ជាមួយ Window និង Document Objects'
  ],
  content: `
# ការណែនាំអំពី DOM 🌳

---

**DOM (Document Object Model)** គឺជាចំណុចប្រទាក់សម្រាប់ធ្វើអន្តរកម្មជាមួយឯកសារ HTML និង XML។ វាតំណាងឱ្យរចនាសម្ព័ន្ធនៃឯកសារជា Tree នៃ Nodes។

---

## 1. DOM ជាអ្វី?
DOM គឺជា Object Model ដែល Browser បង្កើតនៅពេលផ្ទុកឯកសារ HTML។ វាអនុញ្ញាតឱ្យ JavaScript:
- ចូលប្រើ និងផ្លាស់ប្តូរ Elements។
- បន្ថែម ឬលុប Elements។
- គ្រប់គ្រង Events។

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>DOM Example</title>
</head>
<body>
  <h1>សួស្តី ពិភពលោក!</h1>
  <p>នេះគឺជា DOM Example។</p>
</body>
</html>
\`\`\`

**DOM Tree**:
- \`<html>\`: Root Node
  - \`<head>\`: Child Node
  - \`<body>\`: Child Node
    - \`<h1>\`: Child Node
    - \`<p>\`: Child Node

---

## 2. Window និង Document Objects
- **Window**: Object កម្រិតខ្ពស់បំផុត តំណាងឱ្យ Browser Window។
- **Document**: Object ដែលតំណាងឱ្យឯកសារ HTML។

\`\`\`javascript
console.log(window); // Window Object
console.log(document); // Document Object
console.log(document.title); // DOM Example
\`\`\`

---

## 3. Nodes និង Elements
- **Node**: គ្រប់អ្វីនៅក្នុង DOM (ឧ. Element, Text, Comment)។
- **Element**: Node ដែលជា HTML Tag (ឧ. \`<div>\`, \`<p>\`)។

\`\`\`javascript
let body = document.body; // Element Node
let text = document.body.firstChild; // Text Node (Whitespace)
console.log(body); // <body>...</body>
\`\`\`

---

## 4. ការចូលប្រើ DOM
ប្រើ Properties ដូចជា \`document.body\`, \`document.title\` ដើម្បីចូលប្រើ DOM។

\`\`\`javascript
document.title = "ថ្មី!";
console.log(document.title); // ថ្មី!
\`\`\`

---

## 5. ការប្រើ DOM ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Intro</title>
</head>
<body>
  <h1>សួស្តី ពី DOM!</h1>
  <p id="output">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
  <script>
    console.log(document.title); // DOM Intro
    document.title = "សាកល្បង DOM";
    document.getElementById("output").innerText = "បានផ្លាស់ប្តូរ Title!";
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** Title នឹងផ្លាស់ប្តូរទៅជា "សាកល្បង DOM" និង \`<p>\` បង្ហាញ "បានផ្លាស់ប្តូរ Title!"
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ចូលប្រើ Document Object</h3>
<p id="example1">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  console.log(document.title); // Title នៃឯកសារ
  console.log(document.body); // <body>...</body>
</script>
<pre><code class="language-javascript">
console.log(document.title);
console.log(document.body);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ផ្លាស់ប្តូរ Title</h3>
<p id="example2">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  document.title = "ឧទាហរណ៍ DOM";
  console.log(document.title); // ឧទាហរណ៍ DOM
</script>
<pre><code class="language-javascript">
document.title = "ឧទាហរណ៍ DOM";
console.log(document.title);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ DOM គឺជាអ្វី?',
      options: [
        'Function សម្រាប់គណនា',
        'Object Model សម្រាប់ HTML/XML',
        'Array នៃ Elements',
        'String ដែលផ្ទុក HTML'
      ],
      correct: 1,
      explanation: 'DOM (Document Object Model) គឺជា Object Model សម្រាប់ធ្វើអន្តរកម្មជាមួយ HTML/XML។'
    },
    {
      question: 'តើ Object កម្រិតខ្ពស់បំផុតនៅក្នុង DOM គឺជាអ្វី?',
      options: ['Document', 'Window', 'Body', 'HTML'],
      correct: 1,
      explanation: 'Window Object គឺជាកម្រិតខ្ពស់បំផុត តំណាងឱ្យ Browser Window។'
    },
    {
      question: 'តើ Document Object តំណាងឱ្យអ្វី?',
      options: ['Browser Window', 'HTML Document', 'CSS Styles', 'JavaScript Code'],
      correct: 1,
      explanation: 'Document Object តំណាងឱ្យឯកសារ HTML។'
    },
    {
      question: 'តើ Node នៅក្នុង DOM គឺជាអ្វី?',
      options: [
        'HTML Tag តែប៉ុណ្ណោះ',
        'គ្រប់អ្វីនៅក្នុង DOM (Element, Text, Comment)',
        'CSS Rule',
        'JavaScript Function'
      ],
      correct: 1,
      explanation: 'Node គឺជាគ្រប់អ្វីនៅក្នុង DOM ដូចជា Element, Text, និង Comment។'
    },
    {
      question: 'តើ Element គឺជាអ្វី?',
      options: [
        'Text Node',
        'HTML Tag ដូចជា `<div>`, `<p>`',
        'Comment Node',
        'CSS Property'
      ],
      correct: 1,
      explanation: 'Element គឺជា Node ដែលជា HTML Tag។'
    },
    {
      question: 'តើកូដ `document.title` ធ្វើអ្វី?',
      options: [
        'បង្កើត Title ថ្មី',
        'ចូលប្រើឬផ្លាស់ប្តូរ Title នៃឯកសារ',
        'លុប Title',
        'បង្ហាញ Body'
      ],
      correct: 1,
      explanation: '`document.title` ចូលប្រើឬផ្លាស់ប្តូរ Title នៃឯកសារ។'
    },
    {
      question: 'តើ `document.body` បញ្ជូនអ្វីត្រឡប់មកវិញ?',
      options: ['Window Object', 'Body Element', 'HTML Element', 'Text Node'],
      correct: 1,
      explanation: '`document.body` បញ្ជូន `<body>` Element។'
    },
    {
      question: 'តើ DOM Tree មានរចនាសម្ព័ន្ធយ៉ាងដូចម្តេច?',
      options: [
        'Linear List',
        'Tree នៃ Nodes',
        'Array នៃ Elements',
        'Object តែមួយ'
      ],
      correct: 1,
      explanation: 'DOM Tree គឺជា Tree នៃ Nodes ដែលតំណាងឱ្យរចនាសម្ព័ន្ធ HTML។'
    },
    {
      question: 'តើកូដ `console.log(document)` នឹងបង្ហាញអ្វី?',
      options: ['Window Object', 'Document Object', 'HTML String', 'Error'],
      correct: 1,
      explanation: '`document` គឺជា Document Object ដែលតំណាងឱ្យ HTML�।'
    },
    {
      question: 'តើ Node ណាមួយជា Root Node នៃ DOM?',
      options: ['<body>', '<html>', '<head>', '<div>'],
      correct: 1,
      explanation: '`<html>` គឺជា Root Node នៃ DOM Tree។'
    },
    {
      question: 'តើ JavaScript ធ្វើអន្តរកម្មជាឮ DOM ដោយរបៀបណា?',
      options: [
        'តាមរយៈ CSS',
        'តាមរយៈ Window និង Document Objects',
        'តាមរយៈ Server',
        'តាមរយៈ HTML Attributes'
      ],
      correct: 1,
      explanation: 'JavaScript ធ្វើអន្តរកម្មជាមួយ DOM តាមរយៈ Window និង Document Objects។'
    },
    {
      question: 'តើកូដ `document.body.firstChild` អាចបញ្ជូនអ្វីត្រឡប់មកវិញ?',
      options: [
        'Element Node តែប៉ុណ្ណោះ',
        'Text Node ឬ Element Node',
        'CSS Rule',
        'Function'
      ],
      correct: 1,
      explanation: '`document.body.firstChild` អាចជា Text Node (Whitespace) ឬ Element Node។'
    },
    {
      question: 'តើ DOM ត្រូវបានបង្កើតនៅពេលណា?',
      options: [
        'នៅពេល JavaScript ដំណើរការ',
        'នៅពេល Browser ផ្ទុក HTML',
        'នៅពេល CSS ត្រូវបានអនុវត្ត',
        'នៅពេល Server ឆ្លើយតប'
      ],
      correct: 1,
      explanation: 'DOM ត្រូវបានបង្កើតនៅពេល Browser ផ្ទុកឯកសារ HTML។'
    },
    {
      question: 'តើកូដ `document.title = "ថ្មី";` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Element ថ្មី',
        'ផ្លាស់ប្តូរ Title នៃឯកសារ',
        'លុប Title',
        'បង្កើត DOM Tree'
      ],
      correct: 1,
      explanation: '`document.title = "ថ្មី";` ផ្លាស់ប្តូរ Title នៃឯកសារ។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ DOM ដើម្បីបង្ហាញព័ត៌មានអំពីឯកសារ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "DOM Exploration"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "ស្វែងយល់អំពី DOM"។
   - បន្ថែម \`<p id="info">\` សម្រាប់បង្ហាញលទ្ធផល។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រើ \`document.title\` ដើម្បីផ្លាស់ប្តូរ Title ទៅជា "សាកល្បង DOM"។
   - ប្រើ \`document.body\` ដើម្បីចូលប្រើ \`<body>\` Element។
   - បង្ហាញ String នៅក្នុង \`<p id="info">\` ដែលបង្ហាញ Title ថ្មី និងចំនួន Child Nodes នៃ \`<body>\` (ឧ. "Title: សាកល្បង DOM, Child Nodes: 2")។

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
  <title>DOM Exploration</title>
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
  <h1>ស្វែងយល់អំពី DOM</h1>
  <p id="info"></p>
  <script>
    document.title = "សាកល្បង DOM";
    const childCount = document.body.childElementCount;
    document.getElementById("info").innerText = \`Title: \${document.title}, Child Nodes: \${childCount}\`;
  </script>
</body>
</html>
`
  }
};

export default JSLesson5_1Content;