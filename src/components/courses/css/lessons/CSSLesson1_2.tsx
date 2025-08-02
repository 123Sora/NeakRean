// src/components/lessons/css/CSSLesson1_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson1_2Content: LessonContent = {
  title: 'CSS Selectors: Class, ID, Element',
  objectives: [
    'យល់ពីអត្ថន័យនៃ CSS Selectors',
    'រៀនប្រើ Element Selector ដើម្បីជ្រើសរើស Tag HTML',
    'ស្វែងយល់ពី Class Selector សម្រាប់ជ្រើសរើស Element ច្រើន',
    'រៀនប្រើ ID Selector សម្រាប់ Element តែមួយគត់',
    'ស្វែងយល់ភាពខុសគ្នារវាង Class និង ID Selector',
  ],
  content: `
# CSS Selectors: Class, ID, Element 🎯

---

CSS Selectors គឺជាវិធីសាស្ត្រដែលយើងប្រើដើម្បី **ជ្រើសរើស** Element HTML ដែលចង់រចនាម៉ូត។ វាដូចជាការប្រាប់ Browser ថា "ខ្ញុំចង់ផ្លាស់ប្តូរពណ៌ ឬទំហំនៃ Element នេះ!"។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនអំពី Selector បីប្រភេទ៖ **Element**, **Class**, និង **ID**។

---

## 1. Element Selector (ជ្រើសរើសតាម Tag) 🏷️

Element Selector ជ្រើសរើស **គ្រប់ Element** ដែលមានឈ្មោះ Tag ដូចគ្នា។ ឧទាហរណ៍ បើអ្នកចង់ធ្វើឱ្យគ្រប់ \`<p>\` មានពណ៌ខៀវ អ្នកប្រើ Element Selector។

\`\`\`css
/* ជ្រើសរើសគ្រប់ <p> ទាំងអស់ ដើម្បីផ្លាស់ប្តូរពណ៌អក្សរ */
p {
  color: blue;
  font-size: 16px;
}

/* ជ្រើសរើសគ្រប់ <h1> ទាំងអស់ ដើម្បីផ្លាស់ប្តូរទីតាំងអក្សរ */
h1 {
  text-align: center;
}
\`\`\`

### ឧទាហរណ៍៖
បើអ្នកសរសេរ \`p { color: blue; }\` នោះគ្រប់កថាខណ្ឌ (\`<p>\`) នឹងមានអក្សរពណ៌ខៀវ។

---

## 2. Class Selector (ជ្រើសរើសតាម Class) 🧑‍🤝‍🧑

Class Selector អនុញ្ញាតឱ្យអ្នកជ្រើសរើស **Element ច្រើន** ដែលមាន **Class** ដូចគ្នា។ Class គឺជា Attribute ដែលអ្នកបន្ថែមទៅក្នុង HTML ដើម្បីកំណត់ក្រុម Element។

**របៀបប្រើ**:
- បន្ថែម \`class="ឈ្មោះ-class"\` ទៅក្នុង Element HTML។
- នៅក្នុង CSS ប្រើសញ្ញា \`.\` (ចុច) តាមដោយឈ្មោះ Class។

\`\`\`html
<!-- បន្ថែម Class ទៅក្នុង Element -->
<p class="highlight">នេះជាកថាខណ្ឌពិសេស។</p>
<h2 class="highlight">នេះជាចំណងជើងពិសេស។</h2>
\`\`\`

\`\`\`css
/* ជ្រើសរើសគ្រប់ Element ដែលមាន class="highlight" */
.highlight {
  background-color: yellow;
  font-weight: bold;
}
\`\`\`

### ឧទាហរណ៍៖
បើអ្នកចង់ធ្វើឱ្យ Paragraph និង Heading មួយចំនួនមានផ្ទៃខាងក្រោយពណ៌លឿង អ្នកអាចប្រើ Class Selector។

---

## 3. ID Selector (ជ្រើសរើសតាម ID) 🆔

ID Selector ជ្រើសរើស **Element តែមួយគត់** ដែលមាន **ID** ជាក់លាក់។ ID គួរតែមានតែមួយគត់ក្នុងទំព័រ HTML។

**របៀបប្រើ**:
- បន្ថែម \`id="ឈ្មោះ-id"\` ទៅក្នុង Element HTML។
- នៅក្នុង CSS ប្រើសញ្ញា \`#\` (hash) តាមដោយឈ្មោះ ID។

\`\`\`html
<!-- បន្ថែម ID ទៅក្នុង Element -->
<p id="main-title">នេះជាចំណងជើងសំខាន់។</p>
\`\`\`

\`\`\`css
/* ជ្រើសរើស Element ដែលមាន id="main-title" */
#main-title {
  color: red;
  border: 2px solid black;
  padding: 5px;
}
\`\`\`

### ឧទាហរណ៍៖
បើអ្នកចង់ធ្វើឱ្យ Paragraph មួយមានរចនាប័ទ្មពិសេស (ឧ. ពណ៌ក្រហម និងមានស៊ុម) អ្នកអាចប្រើ ID Selector។

---

## ភាពខុសគ្នារវាង Class និង ID 🥊

| លក្ខណៈ              | Class Selector (.name)         | ID Selector (#name)            |
|--------------------------------------|-------------------------------|-------------------------------|
| **ការប្រើប្រាស់**                 | អនុវត្តលើ Element ច្រើន       | អនុវត្តលើ Element តែមួយគត់  |
| **សញ្ញា**                        | ប្រើ \`.\` (ចុច)              | ប្រើ \`#\` (hash)             |
| **អាទិភាព**                      | អាទិភាពទាប (Low Specificity) | អាទិភាពខ្ពស់ (High Specificity) |
| **ករណីប្រើប្រាស់**                 | សម្រាប់រចនាប័ទ្មដែលប្រើឡើងវិញបាន (ឧ. ប៊ូតុង, កថាខណ្ឌ) | សម្រាប់ Element ពិសេសឬ JavaScript (ឧ. បឋមកថា, បាតកថា) |
---
> **ចំណាំ**:  
> - ប្រើ **Class** នៅពេលចង់អនុវត្តរចនាប័ទ្មដូចគ្នាទៅលើ Element ច្រើន (ឧ. ធ្វើឱ្យប៊ូតុងទាំងអស់មានពណ៌ដូចគ្នា)។  
> - ប្រើ **ID** នៅពេលចង់រចនា Element តែមួយគត់ ឬសម្រាប់ការគ្រប់គ្រងជាមួយ JavaScript (ឧ. បឋមកថា \`<header id="main-header">\`)។  
> **ឧទាហរណ៍**: បើអ្នកមានប៊ូតុងច្រើន ប្រើ \`class="btn"\` ដើម្បីធ្វើឱ្យពួកវាមានរចនាប័ទ្មដូចគ្នា។ ប៉ុន្តែបើអ្នកចង់ធ្វើឱ្យ \`<footer>\` មានរចនាប័ទ្មតែមួយគត់ ប្រើ \`id="footer"\`.
`,
  examples: [
    `
### ឧទាហរណ៍៖ ទំព័រអំពីវប្បធម៌ខ្មែរ

នេះជាឧទាហរណ៍ដែលបង្ហាញពីការប្រើ Element, Class, និង ID Selector ដើម្បីរចនាទំព័រអំពីវប្បធម៌ខ្មែរ។

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Element Selector: កំណត់រចនាប័ទ្មឱ្យគ្រប់ <h1> */
    h1 {
      color: navy;
      text-align: center;
    }

    /* Class Selector: កំណត់រចនាប័ទ្មឱ្យ Element ដែលមាន class="culture" */
    .culture {
      background-color: lightyellow;
      padding: 10px;
      margin: 5px;
    }

    /* ID Selector: កំណត់រចនាប័ទ្មឱ្យ Element ដែលមាន id="special-note" */
    #special-note {
      color: red;
      font-weight: bold;
      border: 1px solid red;
    }
  </style>
</head>
<body>
  <h1>វប្បធម៌ខ្មែរ</h1>
  <p class="culture">អប្សរាគឺជារបាំបុរាណខ្មែរដ៏ល្បី។</p>
  <p class="culture">អង្គរវត្តគឺជាប្រាសាទដ៏អស្ចារ្យបំផុត។</p>
  <p id="special-note">ចំណាំ៖ កុំភ្លេចទៅទស្សនាអង្គរវត្តនៅសៀមរាប!</p>
</body>
</html>
\`\`\`

**លទ្ធផល**:
- \`<h1>\` មានអក្សរពណ៌ខៀវសមុទ្រ និងនៅកណ្តាល។
- Paragraphs ដែលមាន \`class="culture"\` មានផ្ទៃខាងក្រោយពណ៌លឿងស្រាល។
- Paragraph ដែលមាន \`id="special-note"\` មានអក្សរក្រហម ដិត និងមានស៊ុមក្រហម។
`
  ],
  quiz: [
    {
      question: 'តើ Selector ប្រភេទណាដែលជ្រើសរើស Element ទាំងអស់ដែលមាន Tag ដូចគ្នា?',
      options: ['Class Selector', 'ID Selector', 'Element Selector', 'All Selector'],
      correct: 2,
      explanation: 'Element Selector ជ្រើសរើសគ្រប់ Element ដែលមានឈ្មោះ Tag ដូចគ្នា ដូចជា `p` ឬ `h1`។'
    },
    {
      question: 'តើ Selector មួយណាប្រើសញ្ញា `.` (ចុច)?',
      options: ['ID Selector', 'Element Selector', 'Class Selector', 'Tag Selector'],
      correct: 2,
      explanation: 'Class Selector ប្រើសញ្ញា `.` ដើម្បីជ្រើសរើស Element ដែលមាន Class ដូចគ្នា។'
    },
    {
      question: 'តើ Class Selector អាចប្រើលើ Element ប៉ុន្មាន?',
      options: ['តែមួយ', 'ពីរ', 'ច្រើន', 'មិនអាចប្រើបាន'],
      correct: 2,
      explanation: 'Class Selector អាចប្រើលើ Element ច្រើន ដើម្បីអនុវត្តរចនាប័ទ្មដូចគ្នា។'
    },
    {
      question: 'តើ ID Selector គួរប្រើលើ Element ប៉ុន្មាននៅក្នុងទំព័រ HTML?',
      options: ['ច្រើន', 'តែមួយគត់', 'ពីរ', 'បី'],
      correct: 1,
      explanation: 'ID Selector គួរប្រើលើ Element តែមួយគត់ក្នុងទំព័រ HTML។'
    },
    {
      question: 'តើ Selector មួយណាមានអាទិភាពខ្ពស់ជាង?',
      options: ['Class Selector', 'Element Selector', 'ID Selector', 'Tag Selector'],
      correct: 2,
      explanation: 'ID Selector មានអាទិភាព (Specificity) ខ្ពស់ជាង Class និង Element Selector។'
    },
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើតទំព័រអំពីអាហារខ្មែរ

បង្កើតឯកសារ HTML មួយដែលមានចំណងជើង \`<h1>\` មួយ និងកថាខណ្ឌ \`<p>\` បី។ ប្រើ **Internal CSS** ដើម្បីអនុវត្តរចនាប័ទ្មដូចខាងក្រោម៖

1. ធ្វើឱ្យ \`<h1>\` មានអក្សរពណ៌ខៀវ និងនៅកណ្តាលទំព័រ។
2. បង្កើត Class ឈ្មោះ "food" ដែលធ្វើឱ្យ Paragraph មានផ្ទៃខាងក្រោយពណ៌បៃតងស្រាល (\`lightgreen\`) និងអក្សរដិត។ អនុវត្ត Class នេះទៅ Paragraph ទីមួយ និងទីបី។
3. បង្កើត ID ឈ្មោះ "special-dish" ដែលធ្វើឱ្យ Paragraph ទីពីរមានអក្សរពណ៌ក្រហម និងមានស៊ុមពណ៌ខៀវ (\`blue\`)។
`,
    solution: `
<!DOCTYPE html>
<html>
<head>
  <title>អាហារខ្មែរ</title>
  <style>
    /* Element Selector: កំណត់រចនាប័ទ្មឱ្យ <h1> */
    h1 {
      color: blue;
      text-align: center;
    }

    /* Class Selector: កំណត់រចនាប័ទ្មឱ្យ Element ដែលមាន class="food" */
    .food {
      background-color: lightgreen;
      font-weight: bold;
      padding: 10px;
    }

    /* ID Selector: កំណត់រចនាប័ទ្មឱ្យ Element ដែលមាន id="special-dish" */
    #special-dish {
      color: red;
      border: 1px solid blue;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h1>អាហារខ្មែរដ៏ឈ្ងុយឆ្ងាញ់</h1>
  <p class="food">បាយឆាគឺជាអាហារដ៏ពេញនិយមនៅកម្ពុជា។</p>
  <p id="special-dish">អម៉ុកជាម្ហូបបុរាណដែលគេចូលចិត្តខ្លាំង។</p>
  <p class="food">លតគឺជាអាហារសម្រន់ដ៏ឆ្ងាញ់។</p>
</body>
</html>
`
  }
};

export default CSSLesson1_2Content;