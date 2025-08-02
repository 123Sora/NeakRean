// src/components/lessons/css/CSSLesson3_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson3_1Content: LessonContent = {
  title: 'CSS Colors (ពណ៌)',
  objectives: [
    'ស្វែងយល់ពីរបៀបកំណត់ពណ៌សម្រាប់អក្សរ (color property)',
    'រៀនពីរបៀបប្រើ Keyword Colors (ឧទាហរណ៍: red, blue, green)',
    'ដឹងពីរបៀបប្រើ RGB Colors (ឧទាហរណ៍: rgb(255, 0, 0))',
    'យល់ពីរបៀបប្រើ RGBA Colors (ឧទាហរណ៍: rgba(255, 0, 0, 0.5)) សម្រាប់តម្លាភាព',
    'ស្គាល់ពីរបៀបប្រើ Hexadecimal Colors (ឧទាហរណ៍: #FF0000)',
    'រៀនពីរបៀបប្រើ HSL Colors (ឧទាហរណ៍: hsl(0, 100%, 50%))',
    'យល់ពីរបៀបប្រើ HSLA Colors (ឧទាហរណ៍: hsla(0, 100%, 50%, 0.5))',
    'ដឹងពីរបៀបជ្រើសរើសទម្រង់ពណ៌ដែលសមរម្យសម្រាប់គម្រោងរបស់អ្នក។'
  ],
  content: `
# CSS Colors (ពណ៌) 🎨

---

**CSS Colors** ត្រូវបានប្រើដើម្បីកំណត់ពណ៌នៃ Elements នានានៅលើគេហទំព័រ។ អ្នកអាចកំណត់ពណ៌សម្រាប់អក្សរ ផ្ទៃខាងក្រោយ ព្រំដែន និងច្រើនទៀត។ CSS គាំទ្រទម្រង់ពណ៌ជាច្រើនដែលអនុញ្ញាតឱ្យអ្នកមានភាពបត់បែនខ្ពស់ក្នុងការរចនា។

---

## 1. Keyword Colors (ពណ៌ពាក្យគន្លឹះ)

វិធីសាមញ្ញបំផុតក្នុងការកំណត់ពណ៌គឺប្រើឈ្មោះពណ៌ដែលបានកំណត់ទុកជាមុន។ មានឈ្មោះពណ៌ជាង ១៤០ ដែល CSS ស្គាល់។

\`\`\`css
/* កំណត់ពណ៌អក្សរទៅជាខៀវ */
h1 {
  color: blue;
}

/* កំណត់ពណ៌ផ្ទៃខាងក្រោយទៅជាប្រផេះស្រាល */
body {
  background-color: lightgray;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<h1 style="color: tomato;">ចំណងជើងពណ៌ប៉េងប៉ោះ</h1>
<p style="color: mediumseagreen;">អក្សរពណ៌បៃតងសមុទ្រ</p>
\`\`\`

---

## 2. RGB Colors (ក្រហម-បៃតង-ខៀវ)

**RGB** តំណាងឱ្យ Red (ក្រហម), Green (បៃតង), Blue (ខៀវ)។ តម្លៃនីមួយៗស្ថិតនៅក្នុងចន្លោះពី **0 ដល់ 255** ដោយ 0 តំណាងឱ្យអវត្តមានពេញលេញនៃពណ៌នោះ និង 255 តំណាងឱ្យវត្តមានពេញលេញ។

\`\`\`css
/* ក្រហមសុទ្ធ */
.red-text {
  color: rgb(255, 0, 0);
}

/* ខៀវសុទ្ធ */
.blue-background {
  background-color: rgb(0, 0, 255);
}

/* ខ្មៅ (គ្មានពណ៌) */
.black-color {
  color: rgb(0, 0, 0);
}

/* ស (គ្រប់ពណ៌រួមបញ្ចូលគ្នា) */
.white-background {
  background-color: rgb(255, 255, 255);
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<p style="color: rgb(128, 0, 128);">អក្សរពណ៌ស្វាយ (Purple)</p>
<div style="background-color: rgb(255, 255, 0); padding: 10px;">ផ្ទៃខាងក្រោយពណ៌លឿង</div>
\`\`\`

---

## 3. RGBA Colors (ក្រហម-បៃតង-ខៀវ-អាល់ហ្វា)

**RGBA** ដូចគ្នានឹង RGB ដែរ ប៉ុន្តែបន្ថែម **Alpha (A)** channel ដែលកំណត់ **តម្លាភាព (opacity)** របស់ពណ៌។ តម្លៃ Alpha ស្ថិតនៅក្នុងចន្លោះពី **0.0 (ថ្លាទាំងស្រុង)** ដល់ **1.0 (ស្រអាប់ទាំងស្រុង)**។

\`\`\`css
/* ក្រហម ៥០% ថ្លា */
.semi-transparent-red {
  background-color: rgba(255, 0, 0, 0.5);
}

/* ខៀវ ៨០% ស្រអាប់ */
.almost-opaque-blue {
  color: rgba(0, 0, 255, 0.8);
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<div style="background-color: rgba(0, 128, 0, 0.3); padding: 10px;">
  ផ្ទៃខាងក្រោយពណ៌បៃតង ៣០% ថ្លា
</div>
<p style="color: rgba(0, 0, 0, 0.7);">អក្សរខ្មៅ ៧០% ស្រអាប់</p>
\`\`\`

---

## 4. Hexadecimal Colors (ពណ៌គោលដប់ប្រាំមួយ)

**Hexadecimal Colors** ប្រើលេខគោលដប់ប្រាំមួយ (0-9 និង A-F) ដើម្បីកំណត់តម្លៃ RGB ។ ពួកវាចាប់ផ្តើមដោយសញ្ញា \`#\` តាមពីក្រោយដោយលេខ ៦ ខ្ទង់ (ឧទាហរណ៍: \`#RRGGBB\`)។ ខ្ទង់ពីរដំបូងសម្រាប់ក្រហម ពីរសម្រាប់បៃតង និងពីរចុងក្រោយសម្រាប់ខៀវ។

\`\`\`css
/* ក្រហមសុទ្ធ */
.hex-red {
  color: #FF0000;
}

/* ខៀវសុទ្ធ */
.hex-blue-bg {
  background-color: #0000FF;
}

/* ប្រផេះ */
.hex-gray {
  color: #808080;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<p style="color: #336699;">អក្សរពណ៌ខៀវប្រផេះ</p>
<div style="background-color: #EE82EE; padding: 10px;">ផ្ទៃខាងក្រោយពណ៌ Violet</div>
\`\`\`
**ចំណាំ:** អ្នកក៏អាចប្រើ Hexadecimal ៣ ខ្ទង់ (ឧទាហរណ៍: \`#F00\` សម្រាប់ \`#FF0000\`) ប្រសិនបើខ្ទង់នីមួយៗត្រូវបានធ្វើម្តងទៀត (ឧទាហរណ៍: \`FF\` អាចសរសេរជា \`F\`)។

---

## 5. HSL Colors (ពណ៌ HSL)

**HSL** តំណាងឱ្យ Hue (ពណ៌), Saturation (តិត្ថិភាព), Lightness (ពន្លឺ)។
* **Hue:** គឺជាដឺក្រេនៅលើកង់ពណ៌ពី 0 ដល់ 360 (0 = ក្រហម, 120 = បៃតង, 240 = ខៀវ)។
* **Saturation:** គឺជាភាគរយនៃតិត្ថិភាព (0% = ប្រផេះ, 100% = ពណ៌ពេញលេញ)។
* **Lightness:** គឺជាភាគរយនៃពន្លឺ (0% = ខ្មៅ, 50% = ពណ៌ដើម, 100% = ស)។

\`\`\`css
/* ក្រហមសុទ្ធ */
.hsl-red {
  color: hsl(0, 100%, 50%);
}

/* បៃតងស្រាល */
.hsl-light-green {
  background-color: hsl(120, 70%, 70%);
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<p style="color: hsl(200, 80%, 30%);">អក្សរពណ៌ខៀវបៃតងចាស់</p>
<div style="background-color: hsl(60, 100%, 80%); padding: 10px;">ផ្ទៃខាងក្រោយពណ៌លឿងស្រាល</div>
\`\`\`

---

## 6. HSLA Colors (ពណ៌ HSLA)

**HSLA** ដូចគ្នានឹង HSL ដែរ ប៉ុន្តែបន្ថែម **Alpha (A)** channel សម្រាប់កំណត់តម្លាភាព (0.0 ដល់ 1.0)។

\`\`\`css
/* ពណ៌ស្វាយ ៦០% ស្រអាប់ */
.hsla-purple-transparent {
  background-color: hsla(270, 50%, 40%, 0.6);
}

/* ពណ៌ទឹកក្រូច ៣០% ថ្លា */
.hsla-orange-semi {
  color: hsla(30, 100%, 50%, 0.3);
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<div style="background-color: hsla(240, 100%, 50%, 0.2); padding: 10px;">
  ផ្ទៃខាងក្រោយពណ៌ខៀវ ២០% ថ្លា
</div>
<p style="color: hsla(180, 70%, 40%, 0.9);">អក្សរខៀវបៃតង ៩០% ស្រអាប់</p>
\`\`\`

---
> **គន្លឹះ:** ការយល់ដឹងពីទម្រង់ពណ៌ផ្សេងៗគ្នាអនុញ្ញាតឱ្យអ្នកជ្រើសរើសវិធីសាស្ត្រដែលសមស្របបំផុតសម្រាប់ការរចនារបស់អ្នក។ RGB/RGBA និង Hexadecimal ត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយ ខណៈ HSL/HSLA ផ្តល់នូវការត្រួតពិនិត្យវិចារណញាណកាន់តែច្រើនលើ Hue, Saturation និង Lightness។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ CSS Colors</h3>
<style>
body { font-family: Arial, sans-serif; padding: 20px; background-color: #f0f2f5; }
div { margin-bottom: 15px; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

/* Keyword Colors */
.keyword-example {
  background-color: peachpuff;
  color: darkslateblue;
}

/* RGB Colors */
.rgb-example {
  background-color: rgb(100, 149, 237); /* CornflowerBlue */
  color: rgb(255, 255, 255); /* White */
}

/* RGBA Colors */
.rgba-example {
  background-color: rgba(255, 99, 71, 0.7); /* Tomato with 70% opacity */
  color: rgb(255, 255, 255);
}

/* Hexadecimal Colors */
.hex-example {
  background-color: #FFD700; /* Gold */
  color: #333333; /* Dark Gray */
}

/* HSL Colors */
.hsl-example {
  background-color: hsl(150, 60%, 50%); /* A shade of green */
  color: hsl(0, 0%, 100%); /* White */
}

/* HSLA Colors */
.hsla-example {
  background-color: hsla(240, 70%, 40%, 0.4); /* A dark blue with 40% opacity */
  color: hsla(0, 0%, 100%, 0.9); /* White with 90% opacity */
}
</style>

<div class="keyword-example">
  <h4>Keyword Colors</h4>
  <p>នេះជាអក្សរពណ៌ **darkslateblue** លើផ្ទៃខាងក្រោយពណ៌ **peachpuff**។</p>
</div>

<div class="rgb-example">
  <h4>RGB Colors</h4>
  <p>នេះជាអក្សរពណ៌ **ស** លើផ្ទៃខាងក្រោយពណ៌ **CornflowerBlue** (rgb(100, 149, 237))។</p>
</div>

<div class="rgba-example">
  <h4>RGBA Colors</h4>
  <p>នេះជាអក្សរពណ៌ **ស** លើផ្ទៃខាងក្រោយពណ៌ **Tomato (70% ថ្លា)** (rgba(255, 99, 71, 0.7))។</p>
</div>

<div class="hex-example">
  <h4>Hexadecimal Colors</h4>
  <p>នេះជាអក្សរពណ៌ **ប្រផេះចាស់** លើផ្ទៃខាងក្រោយពណ៌ **Gold** (#FFD700)។</p>
</div>

<div class="hsl-example">
  <h4>HSL Colors</h4>
  <p>នេះជាអក្សរពណ៌ **ស** លើផ្ទៃខាងក្រោយពណ៌ **បៃតង** (hsl(150, 60%, 50%))។</p>
</div>

<div class="hsla-example">
  <h4>HSLA Colors</h4>
  <p>នេះជាអក្សរពណ៌ **ស (90% ស្រអាប់)** លើផ្ទៃខាងក្រោយពណ៌ **ខៀវចាស់ (40% ថ្លា)** (hsla(240, 70%, 40%, 0.4))។</p>
</div>
`
  ],
  quiz: [
    {
      question: 'តើទ្រព្យសម្បត្តិ CSS មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់ពណ៌អក្សរ?',
      options: ['`background-color`', '`font-color`', '`color`', '`text-color`'],
      correct: 2,
      explanation: 'ទ្រព្យសម្បត្តិ `color` ត្រូវបានប្រើដើម្បីកំណត់ពណ៌អក្សរ។'
    },
    {
      question: 'តើតម្លៃ RGB សម្រាប់ពណ៌ក្រហមសុទ្ធគឺអ្វី?',
      options: ['`rgb(0, 0, 255)`', '`rgb(255, 255, 0)`', '`rgb(255, 0, 0)`', '`rgb(0, 255, 0)`'],
      correct: 2,
      explanation: 'ក្រហមសុទ្ធក្នុង RGB គឺ `rgb(255, 0, 0)` (255 សម្រាប់ក្រហម, 0 សម្រាប់បៃតង, 0 សម្រាប់ខៀវ)។'
    },
    {
      question: 'តើ "A" នៅក្នុង RGBA តំណាងឱ្យអ្វី?',
      options: ['Alignment', 'Alpha (Opacity)', 'Animation', 'Attribute'],
      correct: 1,
      explanation: '"A" នៅក្នុង RGBA តំណាងឱ្យ Alpha ដែលគ្រប់គ្រងតម្លាភាព (opacity) របស់ពណ៌។'
    },
    {
      question: 'តើ Hexadecimal color code សម្រាប់ពណ៌សសុទ្ធគឺអ្វី?',
      options: ['`#000000`', '`#FFFFFF`', '`#FF0000`', '`#00FF00`'],
      correct: 1,
      explanation: 'Hexadecimal color code សម្រាប់ពណ៌សសុទ្ធគឺ `#FFFFFF`។'
    },
    {
      question: 'ក្នុង HSL តើតម្លៃ 0 ដល់ 360 តំណាងឱ្យអ្វី?',
      options: ['Saturation', 'Lightness', 'Hue', 'Opacity'],
      correct: 2,
      explanation: 'ក្នុង HSL, Hue គឺជាដឺក្រេនៅលើកង់ពណ៌ពី 0 ដល់ 360។'
    },
    {
      question: 'តើតម្លៃ alpha 0.0 នៅក្នុង RGBA ឬ HSLA មានន័យដូចម្តេច?',
      options: ['ស្រអាប់ទាំងស្រុង (opaque)', 'ថ្លាទាំងស្រុង (fully transparent)', 'ពណ៌ខ្មៅ', 'ពណ៌ស'],
      correct: 1,
      explanation: 'តម្លៃ alpha 0.0 មានន័យថាពណ៌គឺថ្លាទាំងស្រុង។'
    },
    {
      question: 'តើមួយណាជាឧទាហរណ៍នៃ Keyword Color?',
      options: ['`#ABC`', '`rgb(10, 20, 30)`', '`blue`', '`hsl(120, 50%, 50%)`'],
      correct: 2,
      explanation: '`blue` គឺជា Keyword Color។'
    },
    {
      question: 'តើវិធីកំណត់ពណ៌មួយណាដែលផ្តល់ការត្រួតពិនិត្យវិចារណញាណបំផុតលើ Hue, Saturation និង Lightness?',
      options: ['Keyword Colors', 'RGB Colors', 'Hexadecimal Colors', 'HSL/HSLA Colors'],
      correct: 3,
      explanation: 'HSL/HSLA Colors ផ្តល់នូវការត្រួតពិនិត្យវិចារណញាណកាន់តែច្រើនលើ Hue, Saturation និង Lightness។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមាន Elements ដូចខាងក្រោម៖
* \`<h1>\` មួយ។
* \`<h2>\` មួយ។
* \`<body>\` ។
* \`<div>\` ចំនួន ៣ ដោយមាន Paragraph នៅក្នុងនោះ។
* \`<a>\` Link មួយ។

សូមប្រើ **Internal CSS** និងទម្រង់ពណ៌ផ្សេងៗគ្នាដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  កំណត់ពណ៌អក្សរ \`h1\` ជា **ក្រហមសុទ្ធ** ដោយប្រើ **Hexadecimal** ។
2.  កំណត់ពណ៌ផ្ទៃខាងក្រោយ \`body\` ជា **ប្រផេះស្រាល** ដោយប្រើ **Keyword** ។
3.  កំណត់ពណ៌អក្សរ \`h2\` ជា **ខៀវសុទ្ធ** ដោយប្រើ **RGB** ។
4.  កំណត់ពណ៌ផ្ទៃខាងក្រោយ \`div\` ទីមួយជា **ពណ៌បៃតងខ្ចី (lime green)** ដោយប្រើ **HSL** ។
5.  កំណត់ពណ៌អក្សរ Paragraph នៅក្នុង \`div\` ទីពីរជា **ពណ៌ស្វាយ ៧០% ស្រអាប់** ដោយប្រើ **RGBA** ។
6.  កំណត់ពណ៌ផ្ទៃខាងក្រោយ \`div\` ទីបីជា **ពណ៌ទឹកក្រូច ៤០% ថ្លា** ដោយប្រើ **HSLA** ។
7.  កំណត់ពណ៌ Link (\`a\`) ជា **ពណ៌ទឹកសមុទ្រ (teal)** ដោយប្រើ **Keyword** និងដកបន្ទាត់ពីក្រោម (\`text-decoration: none;\`) ។
`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Colors Lab</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: lightgray; /* 2. Keyword */
    }

    h1 {
      color: #FF0000; /* 1. Hexadecimal Red */
    }

    h2 {
      color: rgb(0, 0, 255); /* 3. RGB Blue */
    }

    div {
      margin-bottom: 15px;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    div:nth-child(2) { /* First div in HTML structure */
      background-color: hsl(120, 100%, 50%); /* 4. HSL Lime Green */
    }

    div:nth-child(3) p { /* Paragraph in the second div */
      color: rgba(128, 0, 128, 0.7); /* 5. RGBA Purple 70% opacity */
    }
    
    div:nth-child(4) { /* Third div in HTML structure */
      background-color: hsla(30, 100%, 50%, 0.4); /* 6. HSLA Orange 40% transparent */
    }

    a {
      color: teal; /* 7. Keyword Teal */
      text-decoration: none;
      display: block; /* For better visibility in lab */
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>នេះជាចំណងជើងធំ។</h1>
  <h2>នេះជាចំណងជើងរង។</h2>

  <div>
    <p>នេះជាកថាខណ្ឌនៅក្នុង Div ទីមួយ (ផ្ទៃខាងក្រោយពណ៌បៃតងខ្ចី)។</p>
  </div>

  <div>
    <p>នេះជាកថាខណ្ឌដែលមានអក្សរពណ៌ស្វាយ ៧០% ស្រអាប់ នៅក្នុង Div ទីពីរ។</p>
  </div>

  <div>
    <p>នេះជាកថាខណ្ឌនៅក្នុង Div ទីបី (ផ្ទៃខាងក្រោយពណ៌ទឹកក្រូច ៤០% ថ្លា)។</p>
  </div>

  <a href="#">នេះជា Link មួយ។</a>
</body>
</html>`
  }
};

export default CSSLesson3_1Content;