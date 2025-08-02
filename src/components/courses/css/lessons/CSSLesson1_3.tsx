import type { LessonContent } from '../../../../types/LessonTypes';

// CSS Lesson 1.3: Content about CSS Syntax
const CSSLesson1_3Content: LessonContent = {
  title: 'CSS Syntax (វាក្យសម្ព័ន្ធ)',
  objectives: [
    'យល់ពីអត្ថន័យនៃវាក្យសម្ព័ន្ធ CSS',
    'រៀនរបៀបសរសេរ Rule Set ក្នុង CSS',
    'ស្គាល់ផ្នែកនៃ Rule Set (Selector, Declaration, Property, Value)',
    'រៀនប្រើ Semicolon ដើម្បីបំបែក Declaration',
    'យល់ពីសារៈសំខាន់នៃ Curly Braces {}',
  ],
  content: `
# CSS Syntax (វាក្យសម្ព័ន្ធ) 📝

CSS មានរចនាសម្ព័ន្ធជាក់លាក់ដែលហៅថា **Rule Set** ដើម្បីប្រាប់ Browser ពីរបៀបរចនាម៉ូត Element HTML។ ការយល់ដឹងពីវាក្យសម្ព័ន្ធ CSS គឺជាមូលដ្ឋានសម្រាប់ការសរសេរកូដ CSS ប្រកបដោយប្រសិទ្ធភាព។

---

## 1. រចនាសម្ព័ន្ធនៃ Rule Set 🛠️

Rule Set មានពីរផ្នែកសំខាន់៖

1. **Selector**: កំណត់ថា Element HTML ណាដែលត្រូវរចនាម៉ូត (ឧ. Tag ដូចជា \`p\`, Class ដូចជា \`.my-class\`, ឬ ID ដូចជា \`#my-id\`)។
2. **Declaration Block**: ផ្ទុកនូវ **Declaration** មួយ ឬច្រើន ដែលនៅក្នុង **Curly Braces {}**។ វាកំណត់រចនាប័ទ្មសម្រាប់ Selector។

\`\`\`css
/* ទម្រង់ទូទៅនៃ Rule Set */
selector {
  property: value; /* Declaration ទី 1 */
  property: value; /* Declaration ទី 2 */
}
\`\`\`

**ឧទាហរណ៍**:
\`\`\`css
/* Selector 'p' ជ្រើសរើសគ្រប់ <p> */
p {
  color: blue; /* Declaration: កំណត់ពណ៌អក្សរ */
  font-size: 16px; /* Declaration: កំណត់ទំហំអក្សរ */
}
\`\`\`

---

## 2. Declaration (ការប្រកាស) 🎨

Declaration គឺជាការកំណត់រចនាប័ទ្មតែមួយ ដែលមានពីរផ្នែក៖

1. **Property**: បញ្ជាក់ថាតើអ្នកចង់ផ្លាស់ប្តូរអ្វី (ឧ. \`color\`, \`font-size\`, \`background-color\`)។
2. **Value**: បញ្ជាក់ថាតើ Property នោះត្រូវផ្លាស់ប្តូរទៅជាអ្វី (ឧ. \`blue\`, \`16px\`, \`#ffffff\`)។

Property និង Value ត្រូវបំបែកដោយ **Colon (:)**។

\`\`\`css
/* ទម្រង់នៃ Declaration */
property: value;
\`\`\`

**ឧទាហរណ៍**:
\`\`\`css
color: red; /* Property: color, Value: red */
font-size: 18px; /* Property: font-size, Value: 18px */
background-color: #f0f0f0; /* Property: background-color, Value: #f0f0f0 */
\`\`\`

---

## 3. Semicolon (;) និង Curly Braces ({}) 🔧

- **Semicolon (;)**: បំបែក Declaration នីមួយៗ ដើម្បីប្រាប់ Browser ថា Declaration មួយបានបញ្ចប់។
  - **ចំណាំ**: Semicolon គឺស្រេចចិត្តសម្រាប់ Declaration ចុងក្រោយក្នុង Declaration Block ប៉ុន្តែគួរប្រើជានិច្ចសម្រាប់ភាពស៊ីសង្វាក់។
- **Curly Braces ({})**: ព័ទ្ធជុំវិញ Declaration Block ដើម្បីកំណត់ថា Declaration ណាខ្លះជាកម្មសិទ្ធិរបស់ Selector នោះ។

\`\`\`css
/* Rule Set ពេញលេញ */
h2 {
  color: navy; /* Declaration ទី 1 */
  font-size: 24px; /* Declaration ទី 2 */
  text-align: center; /* Declaration ទី 3 */
}
\`\`\`

---

## 4. ឧទាហរណ៍រួមបញ្ចូលគ្នា 🌟

នេះជាឧទាហរណ៍ Rule Set ដែលបង្ហាញពីការប្រើ Selector, Declaration, Property, Value, Semicolon, និង Curly Braces៖

\`\`\`css
/* Selector: ជ្រើសរើសគ្រប់ <p> */
p {
  color: #333333; /* ពណ៌អក្សរប្រផេះ */
  font-size: 16px; /* ទំហំអក្សរ 16px */
  line-height: 1.5; /* ចន្លោះរវាងបន្ទាត់ */
}

/* Selector: ជ្រើសរើស Element ដែលមាន class="highlight" */
.highlight {
  background-color: lightyellow; /* ផ្ទៃខាងក្រោយលឿងស្រាល */
  padding: 10px; /* ចន្លោះខាងក្នុង */
  border: 1px solid #ccc; /* ស៊ុមប្រផេះ */
}
\`\`\`

> **ចំណាំ**: ការរៀបចំកូដ CSS ដោយប្រើចន្លោះ និងបន្ទាត់ថ្មីជួយឱ្យអានកូដបានស្រួល។ Browser មិនខ្វល់ពីចន្លោះទេ ប៉ុន្តែការសរសេរកូដឱ្យមានរបៀបជួយអ្នក និងអ្នកផ្សេងទៀតក្នុងការសហការ។
`,
  examples: [
    `
### ឧទាហរណ៍៖ ទំព័រអំពីពិធីបុណ្យខ្មែរ 🎉

នេះជាឧទាហរណ៍ដែលបង្ហាញពីការប្រើវាក្យសម្ព័ន្ធ CSS ដើម្បីរចនាទំព័រអំពីពិធីបុណ្យខ្មែរ។

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>ពិធីបុណ្យខ្មែរ</title>
  <style>
    /* Rule Set 1: កំណត់រចនាប័ទ្មឱ្យ <body> */
    body {
      font-family: Arial, sans-serif; /* កំណត់ Font */
      margin: 20px; /* ចន្លោះខាងក្រៅ */
      background-color: #f5f5f5; /* ពណ៌ផ្ទៃខាងក្រោយ */
    }

    /* Rule Set 2: កំណត់រចនាប័ទ្មឱ្យ <h1> */
    h1 {
      color: #004aad; /* ពណ៌ខៀវសមុទ្រ */
      font-size: 2.5em; /* ទំហំអក្សរ */
      text-align: center; /* តម្រឹមកណ្តាល */
    }

    /* Rule Set 3: កំណត់រចនាប័ទ្មឱ្យ class="festival" */
    .festival {
      background-color: #fff3e0; /* ផ្ទៃខាងក្រោយក្រហមស្រាល */
      padding: 15px; /* ចន្លោះខាងក្នុង */
      border: 1px solid #ff9800; /* ស៊ុមក្រហម */
      border-radius: 5px; /* ជ្រុងមូល */
    }
  </style>
</head>
<body>
  <h1>ពិធីបុណ្យខ្មែរ</h1>
  <p class="festival">បុណ្យភ្ជុំបិណ្ឌគឺជាពិធីបុណ្យសំខាន់មួយនៅកម្ពុជា។</p>
  <p class="festival">បុណ្យចូលឆ្នាំខ្មែរគឺជាពេលដែលគ្រួសារជួបជុំគ្នា។</p>
</body>
</html>
\`\`\`

**លទ្ធផល**:
- \`<body>\` មានផ្ទៃខាងក្រោយប្រផេះស្រាល និង Font Arial។
- \`<h1>\` មានអក្សរពណ៌ខៀវ ទំហំធំ និងនៅកណ្តាល។
- Paragraphs ដែលមាន \`class="festival"\` មានផ្ទៃខាងក្រោយក្រហមស្រាល ស៊ុមក្រហម និងជ្រុងមូល។
`,
  ],
  quiz: [
    {
      question: 'តើ Rule Set ក្នុង CSS មានផ្នែកសំខាន់អ្វីខ្លះ?',
      options: ['Selector និង Declaration Block', 'Property និង Value', 'Semicolon និង Curly Braces', 'Tag និង Attribute'],
      correct: 0,
      explanation: 'Rule Set មាន Selector ដែលជ្រើសរើស Element និង Declaration Block ដែលមាន Declaration មួយ ឬច្រើន។'
    },
    {
      question: 'តើ Selector មានតួនាទីអ្វីក្នុង CSS?',
      options: [
        'កំណត់ពណ៌អក្សរ',
        'ជ្រើសរើស Element HTML ដែលត្រូវរចនា',
        'បំបែក Declaration',
        'បន្ថែម Animation',
      ],
      correct: 1,
      explanation: 'Selector ជ្រើសរើស Element HTML ដែលត្រូវអនុវត្តរចនាប័ទ្ម។'
    },
    {
      question: 'តើ Property និង Value ត្រូវបំបែកដោយអ្វី?',
      options: ['Semicolon (;)', 'Colon (:)', 'Comma (,)', 'Period (.)'],
      correct: 1,
      explanation: 'Property និង Value ត្រូវបំបែកដោយ Colon (:) ក្នុង Declaration។'
    },
    {
      question: 'តើ Declaration នីមួយៗត្រូវបញ្ចប់ដោយអ្វី?',
      options: ['Colon (:)', 'Semicolon (;)', 'Curly Brace (})', 'Comma (,)'],
      correct: 1,
      explanation: 'Declaration នីមួយៗត្រូវបញ្ចប់ដោយ Semicolon (;) ដើម្បីបំបែកពី Declaration ផ្សេង។'
    },
    {
      question: 'តើ Curly Braces ({}) មានតួនាទីអ្វីក្នុង CSS?',
      options: [
        'ព័ទ្ធជុំវិញ Selector',
        'ព័ទ្ធជុំវិញ Declaration Block',
        'បំបែក Property និង Value',
        'កំណត់ Animation',
      ],
      correct: 1,
      explanation: 'Curly Braces ({}) ព័ទ្ធជុំវិញ Declaration Block ដើម្បីកំណត់ Declaration សម្រាប់ Selector។'
    },
    {
      question: 'នៅក្នុង Declaration "font-size: 20px;" តើ "font-size" ជាអ្វី?',
      options: ['Value', 'Property', 'Selector', 'Declaration'],
      correct: 1,
      explanation: '"font-size" ជា Property ដែលកំណត់ទំហំអក្សរ។'
    },
    {
      question: 'នៅក្នុង Declaration "color: green;" តើ "green" ជាអ្វី?',
      options: ['Property', 'Value', 'Selector', 'Semicolon'],
      correct: 1,
      explanation: '"green" ជា Value ដែលកំណត់ពណ៌អក្សរ។'
    },
    {
      question: 'តើ Property "background-color" ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ទំហំអក្សរ',
        'កំណត់ពណ៌ផ្ទៃខាងក្រោយ',
        'កំណត់ចន្លោះខាងក្នុង',
        'កំណត់ស៊ុម',
      ],
      correct: 1,
      explanation: 'Property "background-color" កំណត់ពណ៌ផ្ទៃខាងក្រោយរបស់ Element។'
    },
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើតទំព័រអំពីទេសភាពកម្ពុជា

បង្កើតឯកសារ HTML មួយដែលមានចំណងជើង \`<h1>\` មួយ និងកថាខណ្ឌ \`<p>\` ពីរ។ ប្រើ **Internal CSS** ដើម្បីអនុវត្តរចនាប័ទ្មដូចខាងក្រោម៖

1. សម្រាប់ \`<h1>\`:
   - កំណត់ពណ៌អក្សរទៅជា \`#00695c\` (បៃតងសមុទ្រ)។
   - កំណត់ទំហំអក្សរទៅជា \`2.5em\`។
   - តម្រឹមអក្សរទៅកណ្តាល។
2. សម្រាប់ \`<p>\` ទាំងអស់:
   - កំណត់ពណ៌អក្សរទៅជា \`#333333\` (ប្រផេះចាស់)។
   - កំណត់ទំហំអក្សរទៅជា \`1.2em\`។
   - កំណត់ \`line-height\` ទៅជា \`1.8\`។
3. បង្កើត Class ឈ្មោះ \`highlight-text\`:
   - កំណត់ពណ៌អក្សរទៅជា \`#d81b60\` (ផ្កាឈូក)។
   - ធ្វើឱ្យអក្សរដិត (\`font-weight: bold;\`)។
   - អនុវត្ត Class នេះទៅកាន់កថាខណ្ឌទីពីរ។
`,
    solution: `
<!DOCTYPE html>
<html>
<head>
  <title>ទេសភាពកម្ពុជា</title>
  <style>
    /* Rule Set 1: កំណត់រចនាប័ទ្មឱ្យ <h1> */
    h1 {
      color: #00695c; /* ពណ៌បៃតងសមុទ្រ */
      font-size: 2.5em; /* ទំហំអក្សរ */
      text-align: center; /* តម្រឹមកណ្តាល */
    }

    /* Rule Set 2: កំណត់រចនាប័ទ្មឱ្យ <p> */
    p {
      color: #333333; /* ពណ៌ប្រផេះចាស់ */
      font-size: 1.2em; /* ទំហំអក្សរ */
      line-height: 1.8; /* ចន្លោះបន្ទាត់ */
    }

    /* Rule Set 3: កំណត់រចនាប័ទ្មឱ្យ class="highlight-text" */
    .highlight-text {
      color: #d81b60; /* ពណ៌ផ្កាឈូក */
      font-weight: bold; /* អក្សរដិត */
    }
  </style>
</head>
<body>
  <h1>ទេសភាពកម្ពុជា</h1>
  <p>ភ្នំបូកគោជាទីតាំងទេសចរណ៍ដ៏ស្រស់ស្អាតនៅខេត្តកំពត។</p>
  <p class="highlight-text">អង្គរវត្តគឺជានិមិត្តរូបនៃវប្បធម៌ខ្មែរ និងជាបេតិកភណ្ឌពិភពលោក។</p>
</body>
</html>
`
  }
};

export default CSSLesson1_3Content;