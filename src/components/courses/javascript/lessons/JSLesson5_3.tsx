import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson5_3Content: LessonContent = {
  title: 'ការផ្លាស់ប្តូរ Elements',
  objectives: [
    'រៀនផ្លាស់ប្តូរ Content និង Attributes នៃ Elements',
    'ស្វែងយល់អំពី Properties ដូចជា `innerHTML`, `textContent`',
    'អនុវត្តន៍ការបន្ថែម និងលុប Elements',
    'រៀនផ្លាស់ប្តូរ CSS Styles តាមរយៈ JavaScript',
    'អនុវត្តន៍ការគ្រប់គ្រង DOM Structure'
  ],
  content: `
# ការផ្លាស់ប្តូរ Elements ✏️

---

ការផ្លាស់ប្តូរ Elements អនុញ្ញាតឱ្យផ្លាស់ប្តូរ Content, Attributes, Styles, និង Structure នៃ DOM។

---

## 1. ផ្លាស់ប្តូរ Content
- **\`textContent\`**: ផ្លាស់ប្តូរ Text នៃ Element។
- **\`innerHTML\`**: ផ្លាស់ប្តូរ HTML Content នៃ Element។

\`\`\`html
<p id="myId">សួស្តី!</p>
<script>
  let elem = document.getElementById("myId");
  elem.textContent = "ជំរាបសួរ!";
  elem.innerHTML = "<strong>ជំរាបសួរ!</strong>";
</script>
\`\`\`

---

## 2. ផ្លាស់ប្តូរ Attributes
ប្រើ Methods ដូចជា \`setAttribute\`, \`getAttribute\`, និង \`removeAttribute\`។

\`\`\`html
<img id="myImg" src="old.jpg">
<script>
  let img = document.getElementById("myImg");
  img.setAttribute("src", "new.jpg");
  console.log(img.getAttribute("src")); // new.jpg
</script>
\`\`\`

---

## 3. បន្ថែម និងលុប Elements
- **\`createElement\`**: បង្កើត Element ថ្មី។
- **\`appendChild\`**: បន្ថែម Child Element។
- **\`remove\`**: លុប Element។

\`\`\`html
<div id="container"></div>
<script>
  let div = document.getElementById("container");
  let p = document.createElement("p");
  p.textContent = "អត្ថបទថ្មី";
  div.appendChild(p);
  // p.remove(); // លុប <p>
</script>
\`\`\`

---

## 4. ផ្លាស់ប្តូរ CSS Styles
ប្រើ Property \`style\` ដើម្បីផ្លាស់ប្តូរ CSS។

\`\`\`html
<p id="myId">អត្ថបទ</p>
<script>
  let elem = document.getElementById("myId");
  elem.style.color = "blue";
  elem.style.fontSize = "20px";
</script>
\`\`\`

---

## 5. ការប្រើការផ្លាស់ប្តូរ Elements ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manipulating Elements</title>
</head>
<body>
  <h1>សាកល្បងផ្លាស់ប្តូរ Elements</h1>
  <div id="container"></div>
  <script>
    let container = document.getElementById("container");
    let p = document.createElement("p");
    p.textContent = "អត្ថបទថ្មី";
    p.style.color = "red";
    container.appendChild(p);
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** \`<p>\` ដែលមានអត្ថបទ "អត្ថបទថ្មី" និងពណ៌ក្រហមនឹងត្រូវបានបន្ថែមទៅ \`<div>\`។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ផ្លាស់ប្តូរ Content</h3>
<p id="example1">អត្ថបទចាស់</p>
<script>
  let elem = document.getElementById("example1");
  elem.textContent = "អត្ថបទថ្មី";
</script>
<pre><code class="language-javascript">
let elem = document.getElementById("example1");
elem.textContent = "អត្ថបទថ្មី";
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បន្ថែម Element</h3>
<div id="example2"></div>
<script>
  let div = document.getElementById("example2");
  let p = document.createElement("p");
  p.textContent = "បន្ថែមហើយ!";
  div.appendChild(p);
</script>
<pre><code class="language-javascript">
let div = document.getElementById("example2");
let p = document.createElement("p");
p.textContent = "បន្ថែមហើយ!";
div.appendChild(p);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `textContent` ធ្វើអ្វី?',
      options: [
        'ផ្លាស់ប្តូរ HTML',
        'ផ្លាស់ប្តូរ Text នៃ Element',
        'បន្ថែម Element',
        'ផ្លាស់ប្តូរ Attribute'
      ],
      correct: 1,
      explanation: '`textContent` ផ្លាស់ប្តូរ Text នៃ Element។'
    },
    {
      question: 'តើ `innerHTML` ខុសពី `textContent` ដោយរបៀបណា?',
      options: [
        '`innerHTML` ផ្លាស់ប្តូរ Text តែប៉ុណ្ណោះ',
        '`innerHTML` អនុញ្ញាតឱ្យបញ្ចូល HTML',
        '`innerHTML` លុប Element',
        '`innerHTML` ផ្លាស់ប្តូរ Style'
      ],
      correct: 1,
      explanation: '`innerHTML` អនុញ្ញាតឱ្យបញ្ចូល HTML ចំណែក `textContent` គឺ Text តែប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ Method ណាមួយប្រើដើម្បីកំណត់ Attribute?',
      options: ['setAttribute', 'getAttribute', 'removeAttribute', 'style'],
      correct: 0,
      explanation: '`setAttribute` កំណត់ Attribute នៃ Element។'
    },
    {
      question: 'តើកូដ `document.createElement("div")` ធ្វើអ្វី?',
      options: [
        'បន្ថែម `<div>` ទៅ DOM',
        'បង្កើត `<div>` Element ថ្មី',
        'លុប `<div>`',
        'ផ្លាស់ប្តូរ `<div>`'
      ],
      correct: 1,
      explanation: '`createElement` បង្កើត Element ថ្មី ប៉ុន្តែមិនបន្ថែមទៅ DOM ទេរហូតដល់ប្រើ `appendChild`។'
    },
    {
      question: 'តើ `appendChild` ធ្វើអ្វី?',
      options: [
        'លុប Child Element',
        'បន្ថែម Child Element',
        'ផ្លាស់ប្តូរ Text',
        'កំណត់ Style'
      ],
      correct: 1,
      explanation: '`appendChild` បន្ថែម Child Element ទៅ Parent Element។'
    },
    {
      question: 'តើកូដ `elem.style.color = "blue";` ធ្វើអ្វី?',
      options: [
        'ផ្លាស់ប្តូរ Text Color',
        'ផ្លាស់ប្តូរ Background Color',
        'បន្ថែម Element',
        'លុប Style'
      ],
      correct: 0,
      explanation: '`style.color` ផ្លាស់ប្តូរ Text Color នៃ Element។'
    },
    {
      question: 'តើ Method `remove` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Element',
        'លុប Element ពី DOM',
        'ផ្លាស់ប្តូរ Attribute',
        'បង្កើត Element'
      ],
      correct: 1,
      explanation: '`remove` លុប Element ពី DOM។'
    },
    {
      question: 'តើកូដ `elem.setAttribute("class", "new")` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Class ថ្មី',
        'លុប Class',
        'ផ្លាស់ប្តូរ Text',
        'បន្ថែម Style'
      ],
      correct: 0,
      explanation: '`setAttribute("class", "new")` កំណត់ Class Attribute ទៅ "new"។'
    },
    {
      question: 'តើ `innerHTML` អាចបង្កើត Element ថ្មីបានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែក្នុង Chrome', 'បានតែក្នុង `<div>`'],
      correct: 0,
      explanation: '`innerHTML` អាចបញ្ចូល HTML ដើម្បីបង្កើត Elements ថ្មី។'
    },
    {
      question: 'តើកូដ `elem.removeAttribute("id")` ធ្វើអ្វី?',
      options: [
        'បន្ថែម ID',
        'លុប ID Attribute',
        'ផ្លាស់ប្តូរ ID',
        'បង្កើត Element'
      ],
      correct: 1,
      explanation: '`removeAttribute("id")` លុប ID Attribute ពី Element។'
    },
    {
      question: 'តើ Properties ណាមួយប្រើសម្រាប់ផ្លាស់ប្តូរ CSS?',
      options: ['textContent', 'innerHTML', 'style', 'setAttribute'],
      correct: 2,
      explanation: '`style` Property ប្រើសម្រាប់ផ្លាស់ប្តូរ CSS។'
    },
    {
      question: 'តើកូដ `document.getElementById("test").innerHTML = "<b>Hi</b>"` នឹងបង្ហាញអ្វី?',
      options: ['Hi (Bold)', 'Hi (Text)', '<b>Hi</b>', 'Error'],
      correct: 0,
      explanation: '`innerHTML` បញ្ចូល HTML ដូច្នេះ "Hi" នឹងបង្ហាញជា Bold។'
    },
    {
      question: 'តើកូដ `elem.style.fontSize = "16px";` ធ្វើអ្វី?',
      options: [
        'ផ្លាស់ប្តូរ Font Size',
        'ផ្លាស់ប្តូរ Font Color',
        'បន្ថែម Element',
        'លុប Style'
      ],
      correct: 0,
      explanation: '`style.fontSize` ផ្លាស់ប្តូរ Font Size នៃ Element។'
    },
    {
      question: 'តើ Method ណាមួយបញ្ជូន Attribute Value?',
      options: ['setAttribute', 'getAttribute', 'removeAttribute', 'style'],
      correct: 1,
      explanation: '`getAttribute` បញ្ជូន Value នៃ Attribute។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលផ្លាស់ប្តូរ Elements ដើម្បីបង្កើតបញ្ជីថ្មី។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Dynamic List"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "បញ្ជីថ្មី"។
   - បន្ថែម \`<div id="list">\` សម្រាប់បង្ហាញបញ្ជី។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - បង្កើត Array \`const items = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"]\`។
   - ប្រើ \`createElement\` និង \`appendChild\` ដើម្បីបន្ថែម \`<p>\` Element សម្រាប់ Item នីមួយៗទៅ \`<div id="list">\`។
   - កំណត់ Style ឱ្យ \`<p>\` នីមួយៗមាន \`color: green;\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 16px;\` សម្រាប់ \`<p>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p {
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>បញ្ជីថ្មី</h1>
  <div id="list"></div>
  <script>
    const items = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"];
    const list = document.getElementById("list");
    items.forEach(item => {
      const p = document.createElement("p");
      p.textContent = item;
      p.style.color = "green";
      list.appendChild(p);
    });
  </script>
</body>
</html>
`
  }
};

export default JSLesson5_3Content;