// src/components/lessons/css/CSSLesson3_4.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson3_4Content: LessonContent = {
  title: 'CSS Text (អក្សរ)',
  objectives: [
    'ស្វែងយល់ពីរបៀបកំណត់ពណ៌អក្សរ (color)',
    'រៀនពីរបៀបតម្រឹមអក្សរ (text-align)',
    'ដឹងពីរបៀបតុបតែងអក្សរ (text-decoration)',
    'ស្គាល់ពីរបៀបផ្លាស់ប្តូរទម្រង់អក្សរ (text-transform)',
    'យល់ដឹងពីរបៀបធ្វើឱ្យមានគម្លាតរវាងអក្សរ (letter-spacing) និងពាក្យ (word-spacing)',
    'រៀនពីរបៀបកំណត់កម្ពស់បន្ទាត់ (line-height)',
    'ស្គាល់ពីរបៀបកំណត់ការចូលបន្ទាត់ដំបូង (text-indent)',
    'អនុវត្តការប្រើប្រាស់ Text properties ផ្សេងៗគ្នា'
  ],
  content: `
# CSS Text (អក្សរ) ✒️

---

**CSS Text properties** ត្រូវបានប្រើដើម្បីកំណត់រចនាប័ទ្មអក្សរនៃ Elements នានា។ ពួកវាអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងពណ៌ ការតម្រឹម ការតុបតែង ការផ្លាស់ប្តូរទម្រង់ គម្លាត និងកម្ពស់បន្ទាត់។

---

## 1. color (ពណ៌អក្សរ)

Property \`color\` ត្រូវបានប្រើដើម្បីកំណត់ពណ៌អក្សរ។ នេះត្រូវបានពន្យល់លម្អិតនៅក្នុងមេរៀន CSS Colors ។

\`\`\`css
/* កំណត់ពណ៌អក្សរទៅជាក្រហម */
p {
  color: red;
}

/* កំណត់ពណ៌អក្សរចំណងជើងជាខៀវ */
h1 {
  color: #0000FF; /* blue */
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<p style="color: green;">អក្សរនេះមានពណ៌បៃតង។</p>
\`\`\`

---

## 2. text-align (ការតម្រឹមអក្សរ)

Property \`text-align\` កំណត់ការតម្រឹមផ្ដេកនៃមាតិកាអក្សរនៅក្នុង Element មួយ។
* \`left\`: តម្រឹមទៅឆ្វេង (លំនាំដើម)។
* \`right\`: តម្រឹមទៅស្តាំ។
* \`center\`: តម្រឹមនៅកណ្តាល។
* \`justify\`: តម្រឹមទាំងឆ្វេង និងស្តាំ ដោយបន្ថែមគម្លាតរវាងពាក្យដើម្បីបំពេញបន្ទាត់។

\`\`\`css
/* តម្រឹមអក្សរនៅកណ្តាល */
h1 {
  text-align: center;
}

/* តម្រឹមអក្សរទៅស្តាំ */
.footer-text {
  text-align: right;
}

/* តម្រឹមអក្សរឱ្យស្មើគ្នា */
.article-paragraph {
  text-align: justify;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<p style="text-align: left;">អក្សរតម្រឹមឆ្វេង។</p>
<p style="text-align: center;">អក្សរតម្រឹមនៅកណ្តាល។</p>
<p style="text-align: right;">អក្សរតម្រឹមស្តាំ។</p>
\`\`\`

---

<h2>3. text-decoration (ការតុបតែងអក្សរ)</h2>

Property \`text-decoration\` ត្រូវបានប្រើដើម្បីកំណត់ឬដកការតុបតែងអក្សរដូចជាបន្ទាត់ពីក្រោម (underline), ឆ្នូតកាត់ (line-through), ឬបន្ទាត់ពីលើ (overline)។
* \`none\`: ដកការតុបតែងណាមួយ (មានប្រយោជន៍សម្រាប់ Links)។
* \`underline\`: បន្ទាត់ពីក្រោមអក្សរ។
* \`overline\`: បន្ទាត់ពីលើអក្សរ។
* \`line-through\`: ឆ្នូតកាត់អក្សរ។

\`\`\`css
/* ដកបន្ទាត់ពីក្រោម Links */
a {
  text-decoration: none;
}

/* បន្ទាត់ពីក្រោមអក្សរ */
.underline-text {
  text-decoration: underline;
}
\`\`\`

<h3>ឧទាហរណ៍៖</h3>
\`\`\`html
<a href="#" style="text-decoration: none;">Link គ្មានបន្ទាត់ពីក្រោម។</a>
<p style="text-decoration: line-through;">អក្សរមានឆ្នូតកាត់។</p>
\`\`\`

---

<h2>4. text-transform (ការផ្លាស់ប្តូរទម្រង់អក្សរ)</h2>

Property \`text-transform\` ត្រូវបានប្រើដើម្បីកំណត់អក្សរទៅជាអក្សរធំ (uppercase), អក្សរតូច (lowercase), ឬអក្សរធំនៅដើមពាក្យ (capitalize)។
* \`none\`: គ្មានការផ្លាស់ប្តូរ (លំនាំដើម)។
* \`uppercase\`: បំប្លែងអក្សរទាំងអស់ទៅជាអក្សរធំ។
* \`lowercase\`: បំប្លែងអក្សរទាំងអស់ទៅជាអក្សរតូច។
* \`capitalize\`: បំប្លែងអក្សរដំបូងនៃពាក្យនីមួយៗទៅជាអក្សរធំ។

\`\`\`css
/* អក្សរធំទាំងអស់ */
h1 {
  text-transform: uppercase;
}

/* អក្សរតូចទាំងអស់ */
.small-case {
  text-transform: lowercase;
}

/* អក្សរធំនៅដើមពាក្យ */
.title-case {
  text-transform: capitalize;
}
\`\`\`

<h3>ឧទាហរណ៍៖</h3>
\`\`\`html
<p style="text-transform: uppercase;">Hello World!</p>
<p style="text-transform: lowercase;">HELLO WORLD!</p>
<p style="text-transform: capitalize;">hello world!</p>
\`\`\`

---

<h2>5. letter-spacing & word-spacing (គម្លាតអក្សរ និងពាក្យ)</h2>

* **\`letter-spacing\`**: កំណត់គម្លាតបន្ថែមរវាងតួអក្សរនីមួយៗ។
* **\`word-spacing\`**: កំណត់គម្លាតបន្ថែមរវាងពាក្យនីមួយៗ។

តម្លៃអាចជា \`normal\` (លំនាំដើម) ឬតម្លៃជា \`px\`, \`em\`, \`rem\` ។

\`\`\`css
/* គម្លាតអក្សរធំជាងមុន */
h2 {
  letter-spacing: 2px;
}

/* គម្លាតពាក្យធំជាងមុន */
.spaced-paragraph {
  word-spacing: 5px;
}
\`\`\`

<h3>ឧទាហរណ៍៖</h3>
\`\`\`html
<p style="letter-spacing: 1.5px;">អក្សរមានគម្លាត។</p>
<p style="word-spacing: 10px;">ពាក្យមាន គម្លាត។</p>
\`\`\`

---

<h2>6. line-height (កម្ពស់បន្ទាត់)</h2>

Property \`line-height\` កំណត់កម្ពស់នៃបន្ទាត់នីមួយៗនៃអក្សរ។ វាកំណត់ទំហំសរុបនៃបន្ទាត់ រួមទាំងអក្សរ និងគម្លាតខាងលើ/ក្រោម។

\`\`\`css
/* កម្ពស់បន្ទាត់ 1.6 ដងនៃ font-size */
p {
  line-height: 1.6; /* Values without units are relative to font-size */
}

/* កម្ពស់បន្ទាត់ 24px */
.tight-lines {
  line-height: 24px;
}
\`\`\`

<h3>ឧទាហរណ៍៖</h3>
\`\`\`html
<p style="line-height: 1.2;">
  នេះជាអក្សរដែលមានកម្ពស់បន្ទាត់តូច។
  បន្ទាត់នៅជិតគ្នា។
</p>
<p style="line-height: 2;">
  នេះជាអក្សរដែលមានកម្ពស់បន្ទាត់ធំ។
  បន្ទាត់មានគម្លាតឆ្ងាយពីគ្នា។
</p>
\`\`\`

---

<h2>7. text-indent (ការចូលបន្ទាត់ដំបូង)</h2>

Property \`text-indent\` កំណត់ចំនួនចន្លោះទទេដែលត្រូវដាក់មុនបន្ទាត់ទីមួយនៃអក្សរនៅក្នុង Element មួយ។

\`\`\`css
/* ចូលបន្ទាត់ 30px */
.intro-paragraph {
  text-indent: 30px;
}

/* ចូលបន្ទាត់ជាភាគរយ */
.chapter-start {
  text-indent: 5%;
}
\`\`\`

<h3>ឧទាហរណ៍៖</h3>
\`\`\`html
<p style="text-indent: 50px; border: 1px solid #ccc; padding: 5px;">
  នេះជាកថាខណ្ឌដែលបន្ទាត់ដំបូងត្រូវបានចូលបន្ទាត់ 50px ។
  បន្ទាត់បន្ទាប់ចាប់ផ្តើមពីទីតាំងធម្មតា។
</p>
\`\`\`

---
> **គន្លឹះ:** Text properties ផ្តល់នូវការគ្រប់គ្រងយ៉ាងល្អិតល្អន់លើរបៀបដែលអក្សររបស់អ្នកបង្ហាញ។ ប្រើពួកវាដើម្បីបង្កើនភាពងាយស្រួលក្នុងការអាន និងសោភ័ណភាពនៃគេហទំព័ររបស់អ្នក។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ CSS Text Properties</h3>
<style>
body { font-family: Arial, sans-serif; padding: 20px; background-color: #f8f9fa; }
div {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* 1. Color */
.color-example p {
  color: #007bff; /* Blue */
}

/* 2. Text Align */
.text-align-example h4 {
  text-align: center;
  color: #6f42c1;
}
.text-align-example p.justify-text {
  text-align: justify;
  border: 1px dashed #ccc;
  padding: 5px;
}

/* 3. Text Decoration */
.text-decoration-example a {
  text-decoration: none; /* Remove underline */
  color: #dc3545;
  font-weight: bold;
}
.text-decoration-example span {
  text-decoration: overline;
  color: #28a745;
}

/* 4. Text Transform */
.text-transform-example .upper {
  text-transform: uppercase;
  font-size: 1.1em;
  color: #ffc107;
}
.text-transform-example .cap {
  text-transform: capitalize;
  font-size: 1.1em;
  color: #17a2b8;
}

/* 5. Letter/Word Spacing */
.spacing-example .letter {
  letter-spacing: 3px;
  color: #e83e8c;
}
.spacing-example .word {
  word-spacing: 10px;
  color: #fd7e14;
}

/* 6. Line Height */
.line-height-example .normal-lh {
  line-height: 1.2;
  border: 1px solid #dee2e6;
  padding: 5px;
}
.line-height-example .large-lh {
  line-height: 2;
  border: 1px solid #dee2e6;
  padding: 5px;
  margin-top: 10px;
}

/* 7. Text Indent */
.text-indent-example p {
  text-indent: 40px;
  border: 1px solid #6c757d;
  padding: 5px;
  background-color: #e9ecef;
}
</style>

<div>
  <h3>Color Example</h3>
  <div class="color-example">
    <p>អក្សរនេះមានពណ៌ខៀវ។</p>
  </div>
</div>

<div>
  <h3>Text Align Examples</h3>
  <div class="text-align-example">
    <h4>ចំណងជើងនៅកណ្តាល</h4>
    <p>អក្សរធម្មតា តម្រឹមទៅឆ្វេង (លំនាំដើម)។</p>
    <p class="justify-text">នេះជាកថាខណ្ឌដែលបានតម្រឹមស្មើគ្នា។ វានឹងពង្រីកដើម្បីបំពេញទទឹងនៃ Element មេរបស់វា។ នេះជួយឱ្យអត្ថបទមើលទៅស្អាតនៅលើទំព័រ។</p>
  </div>
</div>

<div>
  <h3>Text Decoration Examples</h3>
  <div class="text-decoration-example">
    <a href="#">Link គ្មានបន្ទាត់ពីក្រោម។</a><br>
    <span>អក្សរមានបន្ទាត់ពីលើ។</span><br>
    <p style="text-decoration: underline;">អក្សរមានបន្ទាត់ពីក្រោម។</p>
  </div>
</div>

<div>
  <h3>Text Transform Examples</h3>
  <div class="text-transform-example">
    <p class="upper">នេះជាអក្សរធំទាំងអស់។</p>
    <p class="cap">នេះជាអក្សរធំនៅដើមពាក្យនីមួយៗ។</p>
  </div>
</div>

<div>
  <h3>Letter/Word Spacing Examples</h3>
  <div class="spacing-example">
    <p class="letter">អក្សរ គម្លាត ធំ។</p>
    <p class="word">ពាក្យ គម្លាត ធំ។</p>
  </div>
</div>

<div>
  <h3>Line Height Examples</h3>
  <div class="line-height-example">
    <p class="normal-lh">នេះជាអក្សរដែលមានកម្ពស់បន្ទាត់ធម្មតា (1.2)។ បន្ទាត់នៅជិតគ្នា។</p>
    <p class="large-lh">នេះជាអក្សរដែលមានកម្ពស់បន្ទាត់ធំ (2)។ បន្ទាត់មានគម្លាតឆ្ងាយពីគ្នា។</p>
  </div>
</div>

<div>
  <h3>Text Indent Example</h3>
  <div class="text-indent-example">
    <p>នេះជាកថាខណ្ឌដែលមានការចូលបន្ទាត់ 40px នៅបន្ទាត់ដំបូង។ វាធ្វើឱ្យអត្ថបទចាប់ផ្តើមពីខាងក្នុងបន្តិច។</p>
  </div>
</div>
`
  ],
  quiz: [
    {
      question: 'តើ Property CSS មួយណាដែលត្រូវបានប្រើដើម្បីតម្រឹមអក្សរនៅកណ្តាល?',
      options: ['`align-text: center;`', '`text-align: middle;`', '`text-align: center;`', '`align: center;`'],
      correct: 2,
      explanation: '`text-align: center;` ត្រូវបានប្រើដើម្បីតម្រឹមអក្សរនៅកណ្តាល។'
    },
    {
      question: 'តើ `text-decoration: none;` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីបន្ថែមបន្ទាត់ពីក្រោមអក្សរ',
        'ដើម្បីដកការតុបតែងអក្សរដូចជាបន្ទាត់ពីក្រោម',
        'ដើម្បីផ្លាស់ប្តូរពណ៌អក្សរ',
        'ដើម្បីធ្វើឱ្យអក្សរដិត'
      ],
      correct: 1,
      explanation: '`text-decoration: none;` ត្រូវបានប្រើជាទូទៅដើម្បីដកបន្ទាត់ពីក្រោម Links ។'
    },
    {
      question: 'តើ `text-transform: uppercase;` ធ្វើអ្វី?',
      options: [
        'បំប្លែងអក្សរទាំងអស់ទៅជាអក្សរតូច',
        'បំប្លែងអក្សរធំនៅដើមពាក្យនីមួយៗ',
        'បំប្លែងអក្សរទាំងអស់ទៅជាអក្សរធំ',
        'រក្សាអក្សរធម្មតា'
      ],
      correct: 2,
      explanation: '`text-transform: uppercase;` បំប្លែងអក្សរទាំងអស់ទៅជាអក្សរធំ។'
    },
    {
      question: 'តើ Property CSS មួយណាដែលកំណត់គម្លាតរវាងតួអក្សរនីមួយៗ?',
      options: ['`word-spacing`', '`line-height`', '`letter-spacing`', '`text-indent`'],
      correct: 2,
      explanation: '`letter-spacing` កំណត់គម្លាតបន្ថែមរវាងតួអក្សរនីមួយៗ។'
    },
    {
      question: 'តើ `line-height` កំណត់អ្វី?',
      options: [
        'ទំហំអក្សរ',
        'កម្ពស់នៃបន្ទាត់នីមួយៗនៃអក្សរ',
        'គម្លាតរវាងកថាខណ្ឌ',
        'គម្លាតរវាងពាក្យ'
      ],
      correct: 1,
      explanation: '`line-height` កំណត់កម្ពស់នៃបន្ទាត់នីមួយៗនៃអក្សរ។'
    },
    {
      question: 'តើ `text-indent` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីតម្រឹមអក្សរនៅកណ្តាល',
        'ដើម្បីធ្វើឱ្យអក្សរដិត',
        'ដើម្បីកំណត់ចំនួនចន្លោះទទេដែលត្រូវដាក់មុនបន្ទាត់ទីមួយនៃអក្សរ',
        'ដើម្បីបន្ថែមបន្ទាត់ពីក្រោមអក្សរ'
      ],
      correct: 2,
      explanation: '`text-indent` កំណត់ចំនួនចន្លោះទទេដែលត្រូវដាក់មុនបន្ទាត់ទីមួយនៃអក្សរនៅក្នុង Element មួយ។'
    },
    {
      question: 'តើ `text-align: justify;` ធ្វើអ្វី?',
      options: [
        'តម្រឹមអក្សរទៅឆ្វេង',
        'តម្រឹមអក្សរទៅស្តាំ',
        'តម្រឹមអក្សរនៅកណ្តាល',
        'តម្រឹមអក្សរទាំងឆ្វេង និងស្តាំ ដោយបន្ថែមគម្លាតរវាងពាក្យដើម្បីបំពេញបន្ទាត់'
      ],
      correct: 3,
      explanation: '`text-align: justify;` តម្រឹមអក្សរទាំងឆ្វេង និងស្តាំ ដោយបន្ថែមគម្លាតរវាងពាក្យដើម្បីបំពេញបន្ទាត់។'
    },
    {
      question: 'តើ Property CSS មួយណាដែលត្រូវបានប្រើដើម្បីបំប្លែងអក្សរដំបូងនៃពាក្យនីមួយៗទៅជាអក្សរធំ?',
      options: [
        '`text-transform: lowercase;`',
        '`text-transform: uppercase;`',
        '`text-transform: capitalize;`',
        '`text-transform: none;`'
      ],
      correct: 2,
      explanation: '`text-transform: capitalize;` បំប្លែងអក្សរដំបូងនៃពាក្យនីមួយៗទៅជាអក្សរធំ។'
    },
    {
      question: 'ដើម្បីកំណត់ពណ៌អក្សរទៅជាខៀវ តើអ្នកគួរប្រើ Property និងតម្លៃមួយណា?',
      options: [
        '`font-color: blue;`',
        '`text-color: blue;`',
        '`color: blue;`',
        '`text-style: blue;`'
      ],
      correct: 2,
      explanation: 'Property `color` ត្រូវបានប្រើដើម្បីកំណត់ពណ៌អក្សរ។'
    },
    {
      question: 'តើ Property `word-spacing` កំណត់អ្វី?',
      options: [
        'គម្លាតរវាងបន្ទាត់',
        'គម្លាតរវាងតួអក្សរ',
        'គម្លាតរវាងពាក្យ',
        'កម្ពស់នៃ Element'
      ],
      correct: 2,
      explanation: '`word-spacing` កំណត់គម្លាតបន្ថែមរវាងពាក្យនីមួយៗ។'
    },
    {
      question: 'តើការតម្រឹមអក្សរតាមលំនាំដើមសម្រាប់ Element ភាគច្រើនគឺអ្វី?',
      options: [
        '`center`',
        '`right`',
        '`justify`',
        '`left`'
      ],
      correct: 3,
      explanation: 'ការតម្រឹមអក្សរតាមលំនាំដើមសម្រាប់ Element ភាគច្រើនគឺ `left`។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធដូចខាងក្រោម៖
* \`<body>\` ។
* \`<h1>\` មួយ។
* \`<h2>\` មួយ។
* \`<a>\` Link មួយ។
* \`<div>\` មួយដែលមាន Paragraph ចំនួន ២។
* \`<span>\` មួយ។

សូមប្រើ **Internal CSS** និង Text properties ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  កំណត់ពណ៌អក្សរ \`body\` ជា **#333** ។
2.  កំណត់ \`text-align\` សម្រាប់ \`h1\` ជា **center** និង \`text-transform\` ជា **uppercase** ។
3.  កំណត់ \`color\` សម្រាប់ \`h2\` ជា **darkblue** និង \`letter-spacing\` ជា **1.5px** ។
4.  ដក \`text-decoration\` ចេញពី \`a\` Link និងកំណត់ \`color\` ជា **green** ។
5.  Paragraph ទីមួយក្នុង Div កំណត់ \`line-height\` ជា **1.8** និង \`text-indent\` ជា **30px** ។
6.  Paragraph ទីពីរក្នុង Div កំណត់ \`text-align\` ជា **justify** និង \`word-spacing\` ជា **3px** ។
7.  កំណត់ \`text-transform\` សម្រាប់ \`span\` ជា **capitalize** និង \`color\` ជា **purple** ។
`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Text Lab</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f8f9fa;
      color: #333; /* 1. Body text color */
    }

    div {
      margin-bottom: 20px;
      padding: 15px;
      border: 1px solid #ced4da;
      border-radius: 8px;
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    h1 {
      text-align: center; /* 2. text-align */
      text-transform: uppercase; /* 2. text-transform */
      color: #dc3545; /* Example color for h1 */
    }

    h2 {
      color: darkblue; /* 3. h2 color */
      letter-spacing: 1.5px; /* 3. letter-spacing */
    }

    a {
      text-decoration: none; /* 4. Remove text-decoration */
      color: green; /* 4. Link color */
      display: block; /* Make link block for better styling visibility */
      margin-top: 15px;
    }

    /* 5. First paragraph in div */
    div p:first-child {
      line-height: 1.8; /* 5. line-height */
      text-indent: 30px; /* 5. text-indent */
    }

    /* 6. Second paragraph in div */
    div p:last-child {
      text-align: justify; /* 6. text-align */
      word-spacing: 3px; /* 6. word-spacing */
    }

    /* 7. Span styling */
    span {
      text-transform: capitalize; /* 7. text-transform */
      color: purple; /* 7. color */
      font-weight: bold; /* Optional: to make it stand out */
    }
  </style>
</head>
<body>
  <h1>នេះជាចំណងជើងធំ។</h1>
  <h2>នេះជាចំណងជើងរង។</h2>

  <a href="#">នេះជា Link មួយដែលគ្មានបន្ទាត់ពីក្រោម។</a>

  <div>
    <p>
      នេះជាកថាខណ្ឌទីមួយ។ វាមានកម្ពស់បន្ទាត់ (line-height) ធំជាងធម្មតា
      និងមានការចូលបន្ទាត់ (text-indent) នៅបន្ទាត់ដំបូង។
    </p>
    <p>
      នេះជាកថាខណ្ឌទីពីរ។ វាត្រូវបានតម្រឹមស្មើគ្នា (justify) ដែលធ្វើឱ្យ
      អត្ថបទលាតសន្ធឹងពេញទទឹង និងមានគម្លាតពាក្យធំជាងធម្មតា។
    </p>
  </div>

  <p>នេះជាឧទាហរណ៍នៃ <span class="capitalize-span">អក្សរ capitalize</span>។</p>
</body>
</html>`
  }
};

export default CSSLesson3_4Content;