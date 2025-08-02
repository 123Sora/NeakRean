// src/components/lessons/css/CSSLesson3_3.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson3_3Content: LessonContent = {
  title: 'CSS Fonts (ពុម្ពអក្សរ)',
  objectives: [
    'ស្វែងយល់ពីរបៀបកំណត់ប្រភេទពុម្ពអក្សរ (font-family)',
    'រៀនពីរបៀបកំណត់ទំហំពុម្ពអក្សរ (font-size)',
    'ដឹងពីរបៀបកំណត់ទម្ងន់ពុម្ពអក្សរ (font-weight)',
    'ស្គាល់ពីរបៀបកំណត់រចនាប័ទ្មពុម្ពអក្សរ (font-style)',
    'យល់ដឹងពីរបៀបប្រើ Shorthand property សម្រាប់ Fonts (font)',
    'រៀនពីរបៀបនាំចូលពុម្ពអក្សរពី Google Fonts',
    'អនុវត្តការប្រើប្រាស់ Font properties ផ្សេងៗគ្នា'
  ],
  content: `
# CSS Fonts (ពុម្ពអក្សរ) 📝

---

**CSS Font properties** ត្រូវបានប្រើដើម្បីកំណត់រចនាប័ទ្មអក្សរនៃ Elements នានា។ ពួកវាអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងប្រភេទពុម្ពអក្សរ ទំហំ ទម្ងន់ និងរចនាប័ទ្ម។

---

## 1. font-family (ប្រភេទពុម្ពអក្សរ)

ទ្រព្យសម្បត្តិ \`font-family\` ត្រូវបានប្រើដើម្បីកំណត់ប្រភេទពុម្ពអក្សរសម្រាប់អក្សរ។ អ្នកអាចបញ្ជាក់ឈ្មោះពុម្ពអក្សរមួយ ឬច្រើន។ ប្រសិនបើឈ្មោះពុម្ពអក្សរមានចន្លោះ អ្នកត្រូវតែដាក់វាជាសញ្ញាសម្រង់ (\`""\`)។

\`\`\`css
/* ប្រើ Arial ជាពុម្ពអក្សរសំខាន់, បើអត់មានប្រើ sans-serif */
body {
  font-family: "Arial", sans-serif;
}

/* ប្រើ 'Times New Roman' */
h1 {
  font-family: "Times New Roman", serif;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<p style="font-family: 'Courier New', monospace;">នេះជាអក្សរប្រភេទ Courier New ។</p>
<p style="font-family: Georgia, serif;">នេះជាអក្សរប្រភេទ Georgia ។</p>
\`\`\`
**ចំណាំ:** តែងតែផ្តល់ឈ្មោះពុម្ពអក្សរទូទៅ (generic family) ដូចជា \`serif\`, \`sans-serif\`, \`monospace\`, \`cursive\`, ឬ \`fantasy\` ជានិច្ចនៅចុងបញ្ចប់នៃបញ្ជីជាជម្រើសជំនួស។

---

## 2. font-size (ទំហំពុម្ពអក្សរ)

ទ្រព្យសម្បត្តិ \`font-size\` កំណត់ទំហំអក្សរ។ អ្នកអាចប្រើតម្លៃជា Pixel (\`px\`), EM (\`em\`), REM (\`rem\`), ឬភាគរយ (\`%\`)។

* **Pixel (px):** តម្លៃដាច់ខាត 16px គឺ 16 pixel នៅលើអេក្រង់។
* **EM (em):** ទាក់ទងទៅនឹងទំហំពុម្ពអក្សររបស់ Element មេ (parent element)។ 1em = ទំហំពុម្ពអក្សរបច្ចុប្បន្នរបស់មេ។
* **REM (rem):** ទាក់ទងទៅនឹងទំហំពុម្ពអក្សររបស់ Root Element (ជាធម្មតា \`<html>\`)។ 1rem = ទំហំពុម្ពអក្សរនៃ \`<html>\` ។
* **Percentage (%):** ទាក់ទងទៅនឹងទំហំពុម្ពអក្សររបស់ Element មេ។

\`\`\`css
/* ទំហំ ១៦px */
p {
  font-size: 16px;
}

/* ទំហំ 1.2 ដងនៃ Element មេ */
.large-text {
  font-size: 1.2em;
}

/* ទំហំ 1.5 ដងនៃ root font size */
h1 {
  font-size: 1.5rem;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<div style="font-size: 18px;">
  <p style="font-size: 1.2em;">Paragraph នេះគឺ 1.2em នៃ 18px (21.6px)។</p>
  <p style="font-size: 1.2rem;">Paragraph នេះគឺ 1.2rem (ទាក់ទងនឹង root font size)។</p>
</div>
\`\`\`

---

## 3. font-weight (ទម្ងន់ពុម្ពអក្សរ)

ទ្រព្យសម្បត្តិ \`font-weight\` កំណត់កម្រិតដិតនៃពុម្ពអក្សរ។
* Keyword: \`normal\`, \`bold\`, \`bolder\`, \`lighter\`។
* លេខ: \`100\` ដល់ \`900\` (ក្នុងជំហាន 100) ដោយ \`400\` ស្មើនឹង \`normal\` និង \`700\` ស្មើនឹង \`bold\`។

\`\`\`css
/* អក្សរដិត */
strong {
  font-weight: bold;
}

/* អក្សរដិតខ្លាំង */
h2 {
  font-weight: 700;
}

/* អក្សរស្ដើង */
.thin-text {
  font-weight: 200;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<p style="font-weight: normal;">អក្សរធម្មតា។</p>
<p style="font-weight: bold;">អក្សរដិត។</p>
<p style="font-weight: 900;">អក្សរដិតបំផុត។</p>
\`\`\`

---

## 4. font-style (រចនាប័ទ្មពុម្ពអក្សរ)

ទ្រព្យសម្បត្តិ \`font-style\` កំណត់ថាតើអក្សរគួរជាធម្មតា ត្រូវ italic (ទ្រេត) ឬ oblique (ទ្រេតបន្តិច)។
* \`normal\`: អក្សរធម្មតា។
* \`italic\`: អក្សរទ្រេត (italic version នៃពុម្ពអក្សរ)។
* \`oblique\`: អក្សរទ្រេត (កំណែសំយោគនៃពុម្ពអក្សរប្រសិនបើ italic មិនមាន)។

\`\`\`css
/* អក្សរទ្រេត */
em {
  font-style: italic;
}

/* អក្សរធម្មតាសម្រាប់ Element ជាក់លាក់ */
.no-italic {
  font-style: normal;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<p style="font-style: normal;">អក្សរធម្មតា។</p>
<p style="font-style: italic;">អក្សរទ្រេត។</p>
\`\`\`

---

## 5. Shorthand Property: font

ទ្រព្យសម្បត្តិ \`font\` គឺជា Shorthand property ដែលអនុញ្ញាតឱ្យអ្នកកំណត់ Font properties ទាំងអស់ក្នុងពេលតែមួយ។ លំដាប់នៃតម្លៃគឺសំខាន់៖
\`font: [font-style] [font-variant] [font-weight] [font-size]/[line-height] [font-family];\`
**ចំណាំ:** \`font-size\` និង \`font-family\` គឺចាំបាច់។ \`line-height\` គឺស្រេចចិត្ត ប៉ុន្តែប្រសិនបើប្រើត្រូវដាក់បន្ទាប់ពី \`font-size\` ដោយមានសញ្ញា \` / \` ខណ្ឌ។

\`\`\`css
/* ឧទាហរណ៍ Shorthand */
p {
  font: italic bold 16px/1.5 Arial, sans-serif;
}

/* ឧទាហរណ៍សាមញ្ញជាង */
h3 {
  font: 20px "Times New Roman", serif;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .shorthand-font {
    font: normal 700 24px/1.2 'Roboto', sans-serif;
  }
</style>
<p class="shorthand-font">នេះជាអក្សរដែលកំណត់ដោយ Shorthand Font Property ។</p>
\`\`\`

---

## 6. Importing Google Fonts (ការនាំចូលពុម្ពអក្សរពី Google Fonts)

Google Fonts ផ្តល់នូវបណ្ណាល័យពុម្ពអក្សរដ៏ធំទូលាយដែលអ្នកអាចប្រើដោយឥតគិតថ្លៃ។
1.  **ចូលទៅកាន់ Google Fonts:** fonts.google.com
2.  **ជ្រើសរើសពុម្ពអក្សរ:** ស្វែងរកពុម្ពអក្សរដែលអ្នកចង់បាន ហើយចុចលើវា។
3.  **ជ្រើសរើស Style:** ជ្រើសរើស Style (ឧទាហរណ៍: Regular 400, Bold 700) ដែលអ្នកចង់ប្រើ។
4.  **Copy Code:** Google Fonts នឹងផ្តល់ឱ្យអ្នកនូវ Code សម្រាប់ដាក់ក្នុង \`<head>\` នៃឯកសារ HTML របស់អ្នក (ដោយប្រើ \`<link>\` tag) ឬសម្រាប់ដាក់ក្នុង CSS របស់អ្នក (ដោយប្រើ \`@import\` rule)។

\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
\`\`\`

\`\`\`css
/* ឧទាហរណ៍សម្រាប់ដាក់ក្នុង CSS file (នៅផ្នែកខាងលើ) */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Google Fonts Example</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
    }
    h1 {
      font-weight: 700;
      color: #333;
    }
    p {
      font-weight: 400;
      color: #555;
    }
  </style>
</head>
<body>
  <h1>នេះជាចំណងជើងជាមួយ Montserrat Bold ។</h1>
  <p>នេះជាកថាខណ្ឌជាមួយ Montserrat Regular ។</p>
</body>
</html>
\`\`\`

---
> **គន្លឹះ:** ការជ្រើសរើសពុម្ពអក្សរត្រឹមត្រូវអាចមានឥទ្ធិពលយ៉ាងខ្លាំងលើរូបរាង និងអារម្មណ៍នៃគេហទំព័ររបស់អ្នក។ ការប្រើប្រាស់ពុម្ពអក្សរតាម Web Fonts ដូចជា Google Fonts ធានាថាអ្នកទស្សនាគេហទំព័ររបស់អ្នកនឹងឃើញពុម្ពអក្សរដូចគ្នា។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ CSS Fonts</h3>
<style>
/* Import Google Font - Roboto */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');

body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f8f9fa;
}
div {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* 1. font-family */
.font-family-example h3 {
  font-family: 'Times New Roman', serif;
  color: #0056b3;
}
.font-family-example p {
  font-family: 'Courier New', monospace;
  color: #28a745;
}

/* 2. font-size */
.font-size-example .px-size {
  font-size: 20px;
}
.font-size-example .em-size {
  font-size: 1.5em; /* relative to parent's font-size (16px default in browser, so 24px) */
  color: #dc3545;
}
.font-size-example .rem-size {
  font-size: 1.2rem; /* relative to root's font-size (16px default, so 19.2px) */
  color: #ffc107; /* Note: text color from example for visibility */
}

/* 3. font-weight */
.font-weight-example .normal-weight {
  font-weight: normal;
}
.font-weight-example .bold-weight {
  font-weight: bold;
  color: #17a2b8;
}
.font-weight-example .numeric-weight {
  font-weight: 900;
  color: #6f42c1;
}

/* 4. font-style */
.font-style-example .italic-style {
  font-style: italic;
  color: #6c757d;
}
.font-style-example .normal-style {
  font-style: normal;
  color: #343a40;
}

/* 5. Shorthand font property & Google Font Usage */
.shorthand-google-font-example p {
  font: italic 700 22px/1.4 'Roboto', sans-serif; /* style, weight, size/line-height, family */
  color: #007bff;
}
</style>

<div>
  <h3>Font Family Examples</h3>
  <div class="font-family-example">
    <h3>ចំណងជើងជាមួយ 'Times New Roman'។</h3>
    <p>នេះជាកថាខណ្ឌជាមួយ 'Courier New' ។</p>
  </div>
</div>

<div>
  <h3>Font Size Examples</h3>
  <div class="font-size-example">
    <p class="px-size">នេះជាអក្សរទំហំ 20px ។</p>
    <p class="em-size">នេះជាអក្សរទំហំ 1.5em ។</p>
    <p class="rem-size">នេះជាអក្សរទំហំ 1.2rem ។</p>
  </div>
</div>

<div>
  <h3>Font Weight Examples</h3>
  <div class="font-weight-example">
    <p class="normal-weight">អក្សរទម្ងន់ធម្មតា។</p>
    <p class="bold-weight">អក្សរទម្ងន់ដិត។</p>
    <p class="numeric-weight">អក្សរទម្ងន់ 900 (ដិតខ្លាំង)។</p>
  </div>
</div>

<div>
  <h3>Font Style Examples</h3>
  <div class="font-style-example">
    <p class="italic-style">អក្សររចនាប័ទ្មទ្រេត (italic) ។</p>
    <p class="normal-style">អក្សររចនាប័ទ្មធម្មតា។</p>
  </div>
</div>

<div>
  <h3>Shorthand Font and Google Font Example (Roboto)</h3>
  <div class="shorthand-google-font-example">
    <p>នេះជាកថាខណ្ឌដែលប្រើ Shorthand property និងពុម្ពអក្សរ 'Roboto' ពី Google Fonts ។</p>
  </div>
</div>
`
  ],
  quiz: [
    {
      question: 'តើទ្រព្យសម្បត្តិ CSS មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់ប្រភេទពុម្ពអក្សរ?',
      options: ['`font-style`', '`font-size`', '`font-family`', '`font-weight`'],
      correct: 2,
      explanation: 'ទ្រព្យសម្បត្តិ `font-family` ត្រូវបានប្រើដើម្បីកំណត់ប្រភេទពុម្ពអក្សរ។'
    },
    {
      question: 'តើ `1.5rem` មានន័យដូចម្តេចចំពោះទំហំពុម្ពអក្សរ?',
      options: [
        '១.៥ ដងនៃទំហំពុម្ពអក្សររបស់ Element មេ',
        '១.៥ ដងនៃទំហំពុម្ពអក្សររបស់ Root Element (ជាធម្មតា `<html>`)',
        '១.៥ ភីកសែល',
        '១.៥ ដងនៃទំហំពុម្ពអក្សរលំនាំដើមរបស់ Browser'
      ],
      correct: 1,
      explanation: '`rem` គឺទាក់ទងទៅនឹងទំហំពុម្ពអក្សររបស់ Root Element (ជាធម្មតា `<html>`)។'
    },
    {
      question: 'តើតម្លៃលេខ `700` សម្រាប់ `font-weight` ស្មើនឹង Keyword មួយណា?',
      options: ['`normal`', '`lighter`', '`bold`', '`bolder`'],
      correct: 2,
      explanation: '`700` សម្រាប់ `font-weight` ស្មើនឹង Keyword `bold`។'
    },
    {
      question: 'តើទ្រព្យសម្បត្តិ `font` គឺជាអ្វី?',
      options: [
        'ទ្រព្យសម្បត្តិសម្រាប់កំណត់តែប្រភេទពុម្ពអក្សរប៉ុណ្ណោះ',
        'ទ្រព្យសម្បត្តិសម្រាប់កំណត់តែទំហំពុម្ពអក្សរប៉ុណ្ណោះ',
        'Shorthand property សម្រាប់កំណត់ Font properties ជាច្រើនក្នុងពេលតែមួយ',
        'ទ្រព្យសម្បត្តិសម្រាប់កំណត់តែពណ៌អក្សរប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: '`font` គឺជា Shorthand property ដែលអនុញ្ញាតឱ្យអ្នកកំណត់ Font properties ជាច្រើនក្នុងពេលតែមួយ។'
    },
    {
      question: 'តើអ្នកគួរដាក់ Keyword Generic Family ដូចជា `sans-serif` នៅត្រង់ណា នៅក្នុងបញ្ជី `font-family`?',
      options: [
        'នៅដើមបញ្ជី',
        'នៅកណ្តាលបញ្ជី',
        'នៅចុងបញ្ជីជាជម្រើសជំនួស',
        'វាមិនចាំបាច់ទេ'
      ],
      correct: 2,
      explanation: 'តែងតែផ្តល់ឈ្មោះពុម្ពអក្សរទូទៅ (generic family) ជានិច្ចនៅចុងបញ្ចប់នៃបញ្ជីជាជម្រើសជំនួស។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់ឱ្យអក្សររបស់អ្នកបង្ហាញជាទ្រេត (italic) តើទ្រព្យសម្បត្តិ `font-style` មួយណាដែលអ្នកគួរប្រើ?',
      options: ['`font-style: normal;`', '`font-style: bold;`', '`font-style: italic;`', '`font-style: oblique;`'],
      correct: 2,
      explanation: '`font-style: italic;` ត្រូវបានប្រើដើម្បីធ្វើឱ្យអក្សរទ្រេត។'
    },
    {
      question: 'តើ Google Fonts ផ្តល់មធ្យោបាយអ្វីខ្លះដើម្បីនាំចូលពុម្ពអក្សរទៅក្នុងគេហទំព័ររបស់អ្នក?',
      options: [
        'តាមរយៈ `<script>` tag តែប៉ុណ្ណោះ',
        'តាមរយៈ `<link>` tag ក្នុង HTML ឬ `@import` rule ក្នុង CSS',
        'តាមរយៈ CSS `@font-face` rule តែប៉ុណ្ណោះ',
        'តាមរយៈការទាញយកពុម្ពអក្សរដោយផ្ទាល់ទៅម៉ាស៊ីនបម្រើរបស់អ្នក'
      ],
      correct: 1,
      explanation: 'Google Fonts ផ្តល់ឱ្យអ្នកនូវ Code សម្រាប់ដាក់ក្នុង `<head>` នៃឯកសារ HTML របស់អ្នក (ដោយប្រើ `<link>` tag) ឬសម្រាប់ដាក់ក្នុង CSS របស់អ្នក (ដោយប្រើ `@import` rule)។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធដូចខាងក្រោម៖
* \`<body>\` ។
* \`<h1>\` មួយ។
* \`<h2>\` មួយ។
* \`<h3>\` មួយ។
* \`<div>\` មួយដែលមាន Paragraph ចំនួន ២។

សូមប្រើ **Internal CSS** និង Font properties ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  នាំចូលពុម្ពអក្សរ **'Open Sans'** ពី Google Fonts (ប្រើ style Regular 400 និង Bold 700) ។
2.  កំណត់ \`font-family\` សម្រាប់ \`body\` ទៅជា **'Open Sans', sans-serif** ។
3.  កំណត់ \`font-size\` សម្រាប់ \`h1\` ជា **3rem** និង \`font-weight\` ជា **700** ។
4.  កំណត់ \`font-size\` សម្រាប់ \`h2\` ជា **2em** និង \`font-style\` ជា **italic** ។
5.  កំណត់ \`font-family\` សម្រាប់ \`h3\` ជា **'Courier New', monospace** និង \`font-weight\` ជា **bold** ។
6.  Paragraph ទីមួយក្នុង Div កំណត់ \`font-size\` ជា **18px** និង Paragraph ទីពីរជា **1.1em** ។
7.  ប្រើ **Shorthand \`font\` property** ដើម្បីកំណត់រចនាប័ទ្មសម្រាប់ \`div\` ខ្លួនវា៖
    * \`font-style\`: \`normal\`
    * \`font-weight\`: \`400\`
    * \`font-size\`: \`16px\`
    * \`line-height\`: \`1.5\`
    * \`font-family\`: **'Open Sans', sans-serif**
`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Fonts Lab</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* General styling */
    body {
      padding: 20px;
      background-color: #f8f9fa;
      /* 2. Set font-family for body */
      font-family: 'Open Sans', sans-serif;
    }

    div {
      margin-bottom: 20px;
      padding: 15px;
      border: 1px solid #ced4da;
      border-radius: 8px;
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      /* 7. Shorthand font for div */
      font: normal 400 16px/1.5 'Open Sans', sans-serif;
    }

    /* 3. h1 styling */
    h1 {
      font-size: 3rem;
      font-weight: 700;
      color: #333;
    }

    /* 4. h2 styling */
    h2 {
      font-size: 2em;
      font-style: italic;
      color: #007bff;
    }

    /* 5. h3 styling */
    h3 {
      font-family: 'Courier New', monospace;
      font-weight: bold;
      color: #28a745;
    }

    /* 6. Paragraph sizes within the div */
    div p:first-child {
      font-size: 18px;
    }
    div p:last-child {
      font-size: 1.1em;
    }
  </style>
</head>
<body>
  <h1>ចំណងជើងធំ (Open Sans, 3rem, Bold)</h1>
  <h2>ចំណងជើងរង (Open Sans, 2em, Italic)</h2>
  <h3>ចំណងជើងតូច (Courier New, Bold)</h3>

  <div>
    <p>នេះជាកថាខណ្ឌទីមួយក្នុង Div (18px)។</p>
    <p>នេះជាកថាខណ្ឌទីពីរក្នុង Div (1.1em នៃ Div's font size)។</p>
  </div>
</body>
</html>`
  }
};

export default CSSLesson3_3Content;