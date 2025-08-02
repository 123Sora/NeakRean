// src/components/lessons/css/CSSLesson3_6.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson3_6Content: LessonContent = {
  title: 'CSS Display Property',
  objectives: [
    'ស្វែងយល់ពីគោលបំណងនៃ Property `display`',
    'ដឹងពីលក្ខណៈសម្បត្តិរបស់ `block` Elements',
    'ដឹងពីលក្ខណៈសម្បត្តិរបស់ `inline` Elements',
    'ស្គាល់ពីលក្ខណៈសម្បត្តិរបស់ `inline-block` Elements',
    'យល់ដឹងពីរបៀបដែល `none` លាក់ Elements',
    'រៀនពីរបៀបដែល `flex` និង `grid` ផ្លាស់ប្តូរ Layout',
    'អនុវត្តការប្រើប្រាស់ `display` property ផ្សេងៗគ្នា'
  ],
  content: `
# CSS Display Property 🖥️

---

 Property **\`display\`** គឺជា Property CSS ដ៏សំខាន់បំផុតមួយសម្រាប់ការគ្រប់គ្រង Layout នៃគេហទំព័រ។ វាគ្រប់គ្រងពីរបៀបដែល Element មួយត្រូវបានបង្ហាញនៅលើទំព័រ។ Element HTML នីមួយៗមានតម្លៃ \`display\` លំនាំដើមរបស់វា។

---

## 1. display: block

Elements ដែលមាន \`display: block;\` តែងតែចាប់ផ្តើមនៅបន្ទាត់ថ្មី និងកាន់កាប់ទទឹងពេញដែលមាន (លាតសន្ធឹងពីឆ្វេងទៅស្តាំតាមដែលអាចធ្វើទៅបាន)។

**ឧទាហរណ៍ Block Elements (លំនាំដើម):** \`<div>\`, \`<h1>\`-\`<h6>\`, \`<p>\`, \`<ul>\`, \`<li>\`, \`<form>\` ។ល។

\`\`\`css
/* Div ជា Block element */
div {
  background-color: lightblue;
  padding: 10px;
  margin: 10px 0;
}

/* Span ដែលផ្លាស់ប្តូរទៅជា Block element */
span.block-span {
  display: block;
  background-color: lightcoral;
  padding: 5px;
  margin: 5px 0;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  div { background-color: #f0f0f0; margin: 5px; padding: 5px; border: 1px solid #ccc; }
</style>
<div>នេះជា div ធម្មតា (block)។</div>
<div>នេះជា div មួយទៀត (block)។</div>
<span style="background-color: yellow; border: 1px solid orange; display: block; margin-top: 10px;">Span នេះត្រូវបានផ្លាស់ប្តូរទៅជា Block ។</span>
\`\`\`

---

## 2. display: inline

Elements ដែលមាន \`display: inline;\` មិនចាប់ផ្តើមនៅបន្ទាត់ថ្មីទេ ហើយពួកវាគ្រាន់តែយកទទឹងដែលចាំបាច់ដើម្បីគ្របដណ្តប់មាតិការបស់ពួកវាប៉ុណ្ណោះ។
**អ្នកមិនអាច** កំណត់ \`width\`, \`height\`, \`margin-top\`, ឬ \`margin-bottom\` សម្រាប់ Inline elements បានទេ។

**ឧទាហរណ៍ Inline Elements (លំនាំដើម):** \`<span>\`, \`<a>\`, \`<strong>\`, \`<em>\`, \`<img>\` ។ល។

\`\`\`css
/* Span ជា Inline element */
span {
  background-color: lightgreen;
  padding: 5px; /* Padding works horizontally */
}

/* Div ដែលផ្លាស់ប្តូរទៅជា Inline element */
div.inline-div {
  display: inline;
  background-color: lightyellow;
  padding: 5px;
  margin: 5px;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  span { background-color: #e0f0e0; margin: 2px; padding: 2px; border: 1px solid #99cc99; }
</style>
<span>នេះជា span ធម្មតា (inline)។</span>
<span>នេះជា span មួយទៀត (inline)។</span>
<div style="background-color: pink; border: 1px solid red; display: inline; margin-top: 10px;">Div នេះត្រូវបានផ្លាស់ប្តូរទៅជា Inline ។</div>
<div style="background-color: lightblue; border: 1px solid blue; display: inline;">Div នេះក៏ inline ដែរ។</div>
\`\`\`

---

## 3. display: inline-block

Elements ដែលមាន \`display: inline-block;\` គឺស្រដៀងទៅនឹង Inline elements ដែរ ពោលគឺពួកវាមិនចាប់ផ្តើមនៅបន្ទាត់ថ្មីទេ។ ទោះជាយ៉ាងណាក៏ដោយ មិនដូច Inline elements ទេ **អ្នកអាច** កំណត់ \`width\`, \`height\`, \`margin-top\`, \`margin-bottom\`, និង \`padding\` សម្រាប់ Inline-block elements ។
ពួកវាមានប្រយោជន៍សម្រាប់បង្កើត Elements ដែលអង្គុយនៅក្បែរគ្នា ប៉ុន្តែនៅតែមានលក្ខណៈសម្បត្តិដូច Block សម្រាប់ការរចនា។

\`\`\`css
/* ប៊ូតុងជា Inline-block */
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 5px;
}

/* Link ដែលផ្លាស់ប្តូរទៅជា Inline-block */
a.inline-block-link {
  display: inline-block;
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px; /* Vertically center text */
  background-color: lightcyan;
  border: 1px solid blue;
  margin: 10px;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .box {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 10px;
    background-color: #d1ecf1;
    border: 1px solid #bee5eb;
    text-align: center;
    line-height: 100px;
  }
</style>
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>
\`\`\`

---

## 4. display: none

 Property \`display: none;\` ត្រូវបានប្រើដើម្បី **លាក់ Element ទាំងស្រុង** ។ Element នឹងមិនបង្ហាញនៅលើទំព័រទេ ហើយក៏មិនយកកន្លែងណាមួយនៅក្នុង Layout ដែរ។ វាដូចជា Element មិនមានទាល់តែសោះ។

\`\`\`css
/* លាក់ Element */
.hidden-element {
  display: none;
}

/* លាក់រូបភាព */
img.hidden-image {
  display: none;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<p>នេះជាអក្សរដែលនៅខាងលើ Element ដែលលាក់។</p>
<div style="background-color: red; padding: 20px; display: none;">
  Div នេះត្រូវបានលាក់។ អ្នកមិនអាចឃើញវាទេ។
</div>
<p>នេះជាអក្សរដែលនៅខាងក្រោម Element ដែលលាក់។</p>
\`\`\`
**ចំណាំ:** \`visibility: hidden;\` ក៏លាក់ Element ដែរ ប៉ុន្តែវាទុកកន្លែងសម្រាប់ Element នោះនៅក្នុង Layout ។ \`display: none;\` មិនទុកកន្លែងទេ។

---

## 5. display: flex (Flexbox)

**Flexbox** គឺជាប្រព័ន្ធ Layout មួយវិមាត្រ (one-dimensional) ដែលរចនាឡើងសម្រាប់រៀបចំ Element នៅក្នុងបន្ទាត់មួយ (row) ឬជួរឈរមួយ (column) ។ វាធ្វើឱ្យការតម្រឹម និងការចែកចាយចន្លោះរវាង Elements នៅក្នុង Container មួយកាន់តែងាយស្រួល។

\`\`\`css
/* កំណត់ Container ជា Flexbox */
.flex-container {
  display: flex; /* Makes direct children flex items */
  justify-content: space-around; /* Distributes items with space around them */
  align-items: center; /* Vertically centers items */
  height: 100px;
  border: 1px solid blue;
}

.flex-item {
  background-color: lightgray;
  padding: 10px;
  margin: 5px;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .flex-container {
    display: flex;
    border: 2px solid #2ecc71;
    padding: 10px;
    min-height: 100px;
    gap: 10px; /* Space between items */
    justify-content: center;
    align-items: flex-end; /* Align to the bottom */
  }
  .flex-item {
    background-color: #92d1c6;
    padding: 15px;
    border: 1px solid #4a8c80;
    flex-grow: 1; /* Allows items to grow */
  }
  .flex-item:nth-child(2) {
    flex-grow: 2; /* This item will grow twice as much */
  }
</style>
<div class="flex-container">
  <div class="flex-item">Flex Item 1</div>
  <div class="flex-item">Flex Item 2 (Longer)</div>
  <div class="flex-item">Flex Item 3</div>
</div>
\`\`\`

---

## 6. display: grid (CSS Grid Layout)

**CSS Grid Layout** គឺជាប្រព័ន្ធ Layout ពីរវិមាត្រ (two-dimensional) ដែលរចនាឡើងសម្រាប់រៀបចំ Element ជាជួរដេក (rows) និងជួរឈរ (columns) ។ វាអនុញ្ញាតឱ្យអ្នកបង្កើត Layout ស្មុគស្មាញដោយគ្រប់គ្រងទាំងបន្ទាត់ និងជួរឈរក្នុងពេលតែមួយ។

\`\`\`css
/* កំណត់ Container ជា Grid */
.grid-container {
  display: grid; /* Makes direct children grid items */
  grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
  gap: 10px; /* Space between grid cells */
  border: 1px solid green;
  padding: 10px;
}

.grid-item {
  background-color: lightblue;
  padding: 10px;
  text-align: center;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    gap: 15px;
    border: 2px solid #dc3545;
    padding: 15px;
  }
  .grid-item {
    background-color: #ffcccc;
    padding: 20px;
    border: 1px solid #dc3545;
    text-align: center;
  }
  .grid-item:nth-child(1) {
    grid-column: 1 / 3; /* Spans 2 columns */
  }
</style>
<div class="grid-container">
  <div class="grid-item">Grid Item 1 (Spans 2 columns)</div>
  <div class="grid-item">Grid Item 2</div>
  <div class="grid-item">Grid Item 3</div>
  <div class="grid-item">Grid Item 4</div>
  <div class="grid-item">Grid Item 5</div>
</div>
\`\`\`

---
> **គន្លឹះ:** ការយល់ដឹងពី Property \`display\` គឺជាមូលដ្ឋានគ្រឹះសម្រាប់ការបង្កើត Layout ដែលមានប្រសិទ្ធភាព និងឆ្លើយតប (responsive) ។ \`block\`, \`inline\`, និង \`inline-block\` គឺជាមូលដ្ឋានគ្រឹះ ខណៈ \`flex\` និង \`grid\` គឺជាឧបករណ៍ដ៏មានឥទ្ធិពលសម្រាប់ការរៀបចំ Layout ដ៏ស្មុគស្មាញ។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ CSS Display Property</h3>
<style>
body { font-family: Arial, sans-serif; padding: 20px; background-color: #f8f9fa; }
section {
  margin-bottom: 25px;
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.header-text {
  text-align: center;
  margin-bottom: 20px;
}
.element-box {
  padding: 10px;
  margin: 5px;
  text-align: center;
  border: 1px dashed #999;
}

/* Block example */
.block-element {
  display: block;
  background-color: #e6e6fa; /* Lavender */
  width: 80%; /* Takes full width available by default, but can be set */
  margin: 10px auto; /* Centered block */
}

/* Inline example */
.inline-element {
  display: inline;
  background-color: #fffacd; /* LemonChiffon */
  padding: 5px; /* Only horizontal padding works visually */
  margin: 5px; /* Only horizontal margin works visually */
}

/* Inline-block example */
.inline-block-element {
  display: inline-block;
  width: 120px;
  height: 60px;
  background-color: #b0e0e6; /* PowderBlue */
  line-height: 60px; /* Vertically center text */
  margin: 10px;
  border: 1px solid #5f9ea0;
}

/* Display None example */
.none-element {
  display: none;
  background-color: #ff6347; /* Tomato */
  padding: 10px;
}

/* Flexbox example */
.flex-container {
  display: flex;
  background-color: #d4edda; /* Light Green */
  padding: 15px;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
}
.flex-item {
  background-color: #28a745;
  color: white;
  padding: 15px;
  border-radius: 5px;
}

/* Grid example */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* One small, one medium, one small */
  gap: 15px;
  background-color: #ffeeba; /* Light Yellow */
  padding: 15px;
}
.grid-item {
  background-color: #ffc107;
  color: #333;
  padding: 20px;
  border-radius: 5px;
}
.grid-item.span-two {
  grid-column: span 2; /* Span two columns */
}
</style>

<h3 class="header-text">CSS Display Property Examples</h3>

<section>
  <h4>display: block</h4>
  <p>Block elements take up full width and start on new lines.</p>
  <div class="element-box block-element">នេះជា Block Div</div>
  <span class="element-box block-element">Span នេះត្រូវបានធ្វើជា Block</span>
</section>

<section>
  <h4>display: inline</h4>
  <p>Inline elements flow in line and don't respect width/height.</p>
  <span class="element-box inline-element">Inline 1</span>
  <span class="element-box inline-element">Inline 2</span>
  <a href="#" class="element-box inline-element" style="text-decoration: none;">Inline Link</a>
</section>

<section>
  <h4>display: inline-block</h4>
  <p>Inline-block elements flow inline but respect width/height.</p>
  <div class="element-box inline-block-element">IB 1</div>
  <div class="element-box inline-block-element">IB 2</div>
  <div class="element-box inline-block-element">IB 3</div>
</section>

<section>
  <h4>display: none</h4>
  <p>Element is completely hidden and takes no space.</p>
  <p>នេះជាកថាខណ្ឌមុន Element ដែលលាក់។</p>
  <div class="element-box none-element">Div នេះត្រូវបានលាក់ដោយ display: none;</div>
  <p>នេះជាកថាខណ្ឌបន្ទាប់ពី Element ដែលលាក់។</p>
</section>

<section>
  <h4>display: flex (Flexbox)</h4>
  <p>For one-dimensional layouts (rows or columns).</p>
  <div class="flex-container">
    <div class="flex-item">Item A</div>
    <div class="flex-item">Item B</div>
    <div class="flex-item">Item C</div>
  </div>
</section>

<section>
  <h4>display: grid (CSS Grid Layout)</h4>
  <p>For two-dimensional layouts (rows and columns).</p>
  <div class="grid-container">
    <div class="grid-item span-two">Header Area</div>
    <div class="grid-item">Sidebar</div>
    <div class="grid-item">Main Content</div>
    <div class="grid-item">Footer</div>
  </div>
</section>
`
  ],
  quiz: [
    {
      question: 'តើ Property `display` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ពណ៌ផ្ទៃខាងក្រោយ',
        'ដើម្បីកំណត់ទំហំពុម្ពអក្សរ',
        'ដើម្បីគ្រប់គ្រងរបៀបដែល Element មួយត្រូវបានបង្ហាញនៅលើទំព័រ (Layout)',
        'ដើម្បីបន្ថែមព្រំដែនទៅ Element មួយ'
      ],
      correct: 2,
      explanation: ' Property `display` គ្រប់គ្រងពីរបៀបដែល Element មួយត្រូវបានបង្ហាញនៅលើទំព័រ ដែលមានឥទ្ធិពលលើ Layout របស់វា។'
    },
    {
      question: 'តើអ្វីជាលក្ខណៈសម្បត្តិចម្បងនៃ `block` Element?',
      options: [
        'មិនចាប់ផ្តើមនៅបន្ទាត់ថ្មី និងមិនអាចកំណត់ `width`/`height` បានទេ',
        'តែងតែចាប់ផ្តើមនៅបន្ទាត់ថ្មី និងកាន់កាប់ទទឹងពេញដែលមាន',
        'អង្គុយនៅក្បែរគ្នា និងអាចកំណត់ `width`/`height` បាន',
        'ត្រូវបានលាក់ទាំងស្រុងពីទំព័រ'
      ],
      correct: 1,
      explanation: 'Block Elements តែងតែចាប់ផ្តើមនៅបន្ទាត់ថ្មី និងកាន់កាប់ទទឹងពេញដែលមាន។'
    },
    {
      question: 'តើមួយណាជាឧទាហរណ៍នៃ Element ដែលមាន `display: inline;` ដោយលំនាំដើម?',
      options: ['`div`', '`p`', '`span`', '`h1`'],
      correct: 2,
      explanation: '`span` គឺជា Inline Element ដោយលំនាំដើម។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នាសំខាន់រវាង `inline` និង `inline-block`?',
      options: [
        '`inline-block` មិនចាប់ផ្តើមបន្ទាត់ថ្មីទេ ខណៈ `inline` ធ្វើ',
        '`inline` អាចកំណត់ `width`/`height` បាន ខណៈ `inline-block` មិនអាច',
        '`inline-block` អាចកំណត់ `width` /`height` បាន ខណៈ `inline` មិនអាច',
        'គ្មានភាពខុសគ្នាទេ ពួកវាដូចគ្នា'
      ],
      correct: 2,
      explanation: 'ភាពខុសគ្នាសំខាន់គឺ `inline-block` អនុញ្ញាតឱ្យអ្នកកំណត់ `width`, `height`, `margin-top`, និង `margin-bottom` ដែល `inline` មិនអាចធ្វើបាន។'
    },
    {
      question: 'តើ `display: none;` ធ្វើអ្វីចំពោះ Element មួយ?',
      options: [
        'ធ្វើឱ្យ Element ថ្លា (transparent) ប៉ុន្តែនៅតែយកកន្លែង',
        'លាក់ Element ប៉ុន្តែនៅតែទុកកន្លែងសម្រាប់វា',
        'លាក់ Element ទាំងស្រុង និងមិនយកកន្លែងណាមួយក្នុង Layout',
        'ធ្វើឱ្យ Element រំកិលចេញពីអេក្រង់'
      ],
      correct: 2,
      explanation: '`display: none;` លាក់ Element ទាំងស្រុងពីទំព័រ និងមិនទុកកន្លែងសម្រាប់វាឡើយ។'
    },
    {
      question: 'តើ `display: flex;` ត្រូវបានប្រើសម្រាប់ Layout ប្រភេទណា?',
      options: [
        'Layout ពីរវិមាត្រ (rows and columns)',
        'Layout មួយវិមាត្រ (rows ឬ columns)',
        'Layout ដែលមានតែ Block elements ប៉ុណ្ណោះ',
        'Layout ដែលមានតែ Inline elements ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: '`display: flex;` (Flexbox) ត្រូវបានរចនាឡើងសម្រាប់ Layout មួយវិមាត្រ (row-based ឬ column-based)។'
    },
    {
      question: 'តើ Grid Layout (display: grid) ខុសពី Flexbox យ៉ាងដូចម្តេច?',
      options: [
        'Grid សម្រាប់ Layout មួយវិមាត្រ ខណៈ Flexbox សម្រាប់ពីរវិមាត្រ',
        'Flexbox សម្រាប់ Layout មួយវិមាត្រ ខណៈ Grid សម្រាប់ពីរវិមាត្រ',
        'Flexbox អាចកំណត់ជួរដេក និងជួរឈរ ខណៈ Grid មិនអាច',
        'គ្មានភាពខុសគ្នាទេ ពួកវាអាចផ្លាស់ប្តូរគ្នាបាន'
      ],
      correct: 1,
      explanation: 'Flexbox គឺសម្រាប់ Layout មួយវិមាត្រ (បន្ទាត់ ឬជួរឈរ) ខណៈ Grid គឺសម្រាប់ Layout ពីរវិមាត្រ (ទាំងបន្ទាត់ និងជួរឈរ)។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធដូចខាងក្រោម៖
* \`<body>\` ។
* \`<div>\` មួយដែលមាន Class \`container\` ។
* នៅក្នុង \`container\` មាន Paragraph ចំនួន ៤ ដោយមាន Class \`item\` ។

សូមប្រើ **Internal CSS** និង Display properties ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  កំណត់ \`background-color: #f0f8ff;\` សម្រាប់ \`body\` ។
2.  សម្រាប់ \`container\` កំណត់ \`width: 80%;\`, \`max-width: 600px;\`, \`margin: 20px auto;\`, \`border: 2px solid #a0d4db;\`, \`padding: 15px;\`, \`background-color: #e0f2f7;\` ។
3.  សម្រាប់ \`item\` Paragraphs ទាំងអស់ កំណត់ \`padding: 10px;\`, \`margin: 5px;\`, \`border: 1px solid #c0e6f0;\`, \`background-color: #f0faff;\` ។
4.  Paragraph ទីមួយ (Class \`item\` ទីមួយ) កំណត់ \`display: inline;\` ។
5.  Paragraph ទីពីរ (Class \`item\` ទីពីរ) កំណត់ \`display: inline-block;\`, \`width: 150px;\`, \`height: 50px;\` និង \`line-height: 50px;\` (ដើម្បីតម្រឹមអក្សរនៅកណ្តាលបញ្ឈរ) ។
6.  Paragraph ទីបី (Class \`item\` ទីបី) កំណត់ \`display: block;\` និង \`background-color: #ffe0e0;\` ។
7.  Paragraph ទីបួន (Class \`item\` ទីបួន) កំណត់ \`display: none;\` ។
`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Display Property Lab</title>
  <style>
    /* 1. Body background color */
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f8ff; /* aliceblue */
      margin: 0;
      padding: 20px;
    }

    /* 2. Container styling */
    .container {
      width: 80%;
      max-width: 600px;
      margin: 20px auto; /* Center horizontally */
      border: 2px solid #a0d4db; /* Light blue border */
      padding: 15px;
      background-color: #e0f2f7; /* Lighter blue background */
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
      text-align: center; /* For inline-block alignment */
    }

    /* 3. General item styling */
    .item {
      padding: 10px;
      margin: 5px;
      border: 1px solid #c0e6f0; /* Even lighter blue border */
      background-color: #f0faff; /* Very light blue background */
      border-radius: 5px;
      color: #333;
    }

    /* 4. First item: display: inline */
    .item:nth-child(1) {
      display: inline;
    }

    /* 5. Second item: display: inline-block */
    .item:nth-child(2) {
      display: inline-block;
      width: 150px;
      height: 50px;
      line-height: 50px; /* Vertically center text */
      background-color: #d1ecf1; /* Light cyan */
    }

    /* 6. Third item: display: block */
    .item:nth-child(3) {
      display: block;
      background-color: #ffe0e0; /* Light red */
      margin: 10px auto; /* Center this block item */
      width: 80%; /* Give it a specific width to show block behavior */
    }

    /* 7. Fourth item: display: none */
    .item:nth-child(4) {
      display: none;
    }

    /* Optional: Some text to show before/after hidden element */
    .hidden-info {
      text-align: center;
      margin-top: 10px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <p>សូមមើលពីរបៀបដែល Elements ប្រព្រឹត្តតាម Display Property:</p>
    <p class="item">Paragraph 1 (inline): នេះជាអក្សរ inline។</p>
    <p class="item">Paragraph 2 (inline-block): ខ្ញុំជា inline-block។</p>
    <p class="item">Paragraph 3 (block): ខ្ញុំជា block ។</p>
    <p class="item">Paragraph 4 (none): Paragraph នេះត្រូវបានលាក់ទាំងស្រុង។</p>
    <p class="hidden-info">Paragraph ទី ៤ គួរតែត្រូវបានលាក់ ហើយមិនយកកន្លែងទេ។</p>
  </div>
</body>
</html>`
  }
};

export default CSSLesson3_6Content;