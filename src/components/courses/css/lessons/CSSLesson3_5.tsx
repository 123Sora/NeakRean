// src/components/lessons/css/CSSLesson3_5.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson3_5Content: LessonContent = {
  title: 'CSS Box Model (គំរូប្រអប់)',
  objectives: [
    'ស្វែងយល់ពីគោលគំនិតនៃ CSS Box Model',
    'ដឹងពីសមាសធាតុសំខាន់ៗនៃ Box Model: Content, Padding, Border, Margin',
    'រៀនពីរបៀបកំណត់ Padding (padding) ជុំវិញមាតិកា',
    'ស្គាល់ពីរបៀបកំណត់ Border (border) ជុំវិញ Padding',
    'យល់ដឹងពីរបៀបកំណត់ Margin (margin) ជុំវិញ Border',
    'រៀនពីរបៀបប្រើ Shorthand properties សម្រាប់ Padding, Border, និង Margin',
    'យល់ពីរបៀបដែល Box Model មានឥទ្ធិពលលើ Layout នៃទំព័រ',
    'អនុវត្តការប្រើប្រាស់ Box Model properties'
  ],
  content: `
# CSS Box Model (គំរូប្រអប់) 📦

---

រាល់ Element HTML ទាំងអស់នៅលើគេហទំព័រត្រូវបានចាត់ទុកថាជា **ប្រអប់ (box)** ។ **CSS Box Model** គឺជាគោលគំនិតដ៏សំខាន់មួយដែលពណ៌នាពីរបៀបដែល Elements ត្រូវបានបង្ហាញនៅលើទំព័រ។ វាមានសមាសធាតុសំខាន់ៗចំនួនបួនដែលរុំព័ទ្ធជុំវិញមាតិកា៖

1.  **Content (មាតិកា):** តំបន់ដែលមាតិការបស់ Element ស្ថិតនៅ (អត្ថបទ រូបភាព ។ល។)។
2.  **Padding (គម្លាតខាងក្នុង):** ចន្លោះថ្លារវាង Content និង Border ។
3.  **Border (ព្រំដែន):** បន្ទាត់ដែលរុំព័ទ្ធជុំវិញ Padding និង Content ។
4.  **Margin (គម្លាតខាងក្រៅ):** ចន្លោះថ្លារវាង Border របស់ Element មួយ និង Element ផ្សេងទៀត។

\`\`\`
+-------------------------------------------------+
|                    Margin                       |
|   +---------------------------------------+     |
|   |                 Border                |     |
|   |   +-------------------------------+   |     |
|   |   |           Padding             |   |     |
|   |   |   +-----------------------+   |   |     |
|   |   |   |        Content        |   |   |     |
|   |   |   +-----------------------+   |   |     |
|   |   |           Padding             |   |     |
|   |   +-------------------------------+   |     |
|   |                 Border                |     |
|   +---------------------------------------+     |
|                    Margin                       |
+-------------------------------------------------+
\`\`\`

---

## 1. Content (មាតិកា)

នេះគឺជាផ្នែកខាងក្នុងបំផុតនៃប្រអប់ ដែលអត្ថបទ រូបភាព វីដេអូ ឬ Element កូនៗរបស់អ្នកបង្ហាញ។ ទំហំរបស់វាត្រូវបានកំណត់ដោយ **Property** \`width\` និង \`height\`។

\`\`\`css
/* កំណត់ទទឹង និងកម្ពស់សម្រាប់ Element */
.my-box {
  width: 200px;
  height: 150px;
  background-color: lightcoral;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<div style="width: 100px; height: 100px; background-color: lightblue; text-align: center; line-height: 100px;">
  Content
</div>
\`\`\`

---

## 2. Padding (គម្លាតខាងក្នុង)

**Padding** គឺជាចន្លោះរវាង Content និង Border របស់ Element ។ វាជាផ្នែកមួយនៃ Element ខ្លួនវា ហើយត្រូវបានរួមបញ្ចូលនៅក្នុងផ្ទៃខាងក្រោយរបស់ Element ។

* **Individual sides:** \`padding-top\`, \`padding-right\`, \`padding-bottom\`, \`padding-left\`
* **Shorthand:**
    * \`padding: 10px;\` (ទាំងអស់ 10px)
    * \`padding: 10px 20px;\` (top/bottom 10px, left/right 20px)
    * \`padding: 10px 20px 30px;\` (top 10px, left/right 20px, bottom 30px)
    * \`padding: 10px 20px 30px 40px;\` (top 10px, right 20px, bottom 30px, left 40px - T R B L)

\`\`\`css
/* Padding គ្រប់ជ្រុងទាំងអស់ 15px */
.padded-box {
  padding: 15px;
  background-color: lightgreen;
}

/* Padding 20px ពីលើ/ក្រោម, 10px ពីឆ្វេង/ស្តាំ */
.custom-padding {
  padding: 20px 10px;
  background-color: lightyellow;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<div style="background-color: #f0f0f0; border: 1px solid #ccc;">
  <p style="padding: 20px; background-color: #e0e0e0;">
    Paragraph នេះមាន Padding 20px គ្រប់ជ្រុង។
  </p>
</div>
\`\`\`

---

## 3. Border (ព្រំដែន)

**Border** គឺជាបន្ទាត់ដែលព័ទ្ធជុំវិញ Padding និង Content របស់ Element ។ វាមាន Style, Width, និង Color ។

* **Individual properties:**
    * \`border-style\`: \`solid\`, \`dotted\`, \`dashed\`, \`double\`, \`none\` ។ល។
    * \`border-width\`: \`1px\`, \`thin\`, \`medium\`, \`thick\` ។ល។
    * \`border-color\`: ពណ៌ CSS ណាមួយ។
* **Shorthand:** \`border: [width] [style] [color];\`
* **Individual sides:** \`border-top\`, \`border-right\`, \`border-bottom\`, \`border-left\`

\`\`\`css
/* ព្រំដែន solid 1px ពណ៌ខ្មៅ */
.solid-border {
  border: 1px solid black;
}

/* ព្រំដែន dotted ពណ៌ខៀវ */
.dotted-border {
  border-style: dotted;
  border-width: 2px;
  border-color: blue;
}

/* ព្រំដែនតែខាងក្រោម */
.bottom-border {
  border-bottom: 3px dashed red;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<div style="padding: 10px; border: 2px solid green; background-color: #ccffcc;">
  នេះមានព្រំដែនពណ៌បៃតង solid 2px ។
</div>
<div style="padding: 10px; border: 3px dotted purple; margin-top: 10px; background-color: #f0e6fa;">
  នេះមានព្រំដែនពណ៌ស្វាយ dotted 3px ។
</div>
\`\`\`

---

## 4. Margin (គម្លាតខាងក្រៅ)

**Margin** គឺជាចន្លោះថ្លារវាង Border របស់ Element មួយ និង Element ផ្សេងទៀត។ Margin គឺនៅខាងក្រៅ Border ហើយមិនត្រូវបានរួមបញ្ចូលនៅក្នុងផ្ទៃខាងក្រោយរបស់ Element ទេ។ Margin ជួយគ្រប់គ្រងគម្លាតរវាង Elements ។

* **Individual sides:** \`margin-top\`, \`margin-right\`, \`margin-bottom\`, \`margin-left\`
* **Shorthand:** (ដូចគ្នាទៅនឹង Padding)
    * \`margin: 10px;\` (ទាំងអស់ 10px)
    * \`margin: 10px 20px;\` (top/bottom 10px, left/right 20px)
    * \`margin: 10px 20px 30px;\` (top 10px, left/right 20px, bottom 30px)
    * \`margin: 10px 20px 30px 40px;\` (top 10px, right 20px, bottom 30px, left 40px - T R B L)
* **\`margin: auto;\`**: សម្រាប់ Block-level elements, \`margin: auto;\` (ជាពិសេស \`margin: 0 auto;\` ឬ \`margin-left: auto; margin-right: auto;\`) អាចត្រូវបានប្រើដើម្បីដាក់ Element នៅកណ្តាលផ្ដេកនៅក្នុង Element មេរបស់វា។

\`\`\`css
/* Margin គ្រប់ជ្រុងទាំងអស់ 20px */
.margined-box {
  margin: 20px;
  border: 1px solid #ddd; /* For visualization */
}

/* Margin 10px ពីលើ/ក្រោម, auto ពីឆ្វេង/ស្តាំ (តម្រឹមនៅកណ្តាល) */
.center-div {
  width: 300px; /* Needs width to center */
  margin: 10px auto;
  border: 1px solid #ccc;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<div style="background-color: #f0f0f0; padding: 10px;">
  <div style="background-color: #ccddff; border: 1px solid blue; margin-bottom: 15px; padding: 5px;">
    នេះជា Div ទីមួយ។ វាមាន Margin 15px នៅខាងក្រោម។
  </div>
  <div style="background-color: #ffddcc; border: 1px solid orange; margin-left: 20px; padding: 5px;">
    នេះជា Div ទីពីរ។ វាមាន Margin 20px នៅខាងឆ្វេង។
  </div>
</div>
\`\`\`

---

## 5. Box-sizing Property (Property Box-sizing)

Property \`box-sizing\` កំណត់ពីរបៀបដែល \`width\` និង \`height\` របស់ Element ត្រូវបានគណនា។
* \`content-box\` (លំនាំដើម): \`width\` និង \`height\` រួមបញ្ចូលតែ Content ប៉ុណ្ណោះ។ Padding និង Border ត្រូវបានបន្ថែមពីលើ \`width\` និង \`height\` ដែលបានកំណត់។
* \`border-box\`: \`width\` និង \`height\` រួមបញ្ចូល Content, Padding, និង Border ។ នេះធ្វើឱ្យការរៀបចំ Layout កាន់តែងាយស្រួល ព្រោះទំហំសរុបរបស់ Element គឺពិតប្រាកដតាម \`width\` និង \`height\` ដែលអ្នកបានកំណត់។

\`\`\`css
/* Standard (default) box model */
.content-box-example {
  width: 100px;
  height: 100px;
  padding: 20px;
  border: 5px solid red;
  box-sizing: content-box; /* Total width = 100 + 20*2 + 5*2 = 150px */
}

/* More intuitive box model */
.border-box-example {
  width: 100px;
  height: 100px;
  padding: 20px;
  border: 5px solid blue;
  box-sizing: border-box; /* Total width = 100px (padding and border are inside) */
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  div {
    float: left; /* For comparison */
    margin: 10px;
    background-color: #eee;
    text-align: center;
    line-height: 50px;
  }
  .content-box {
    width: 100px;
    height: 50px;
    padding: 10px;
    border: 5px solid red;
    box-sizing: content-box;
  }
  .border-box {
    width: 100px;
    height: 50px;
    padding: 10px;
    border: 5px solid blue;
    box-sizing: border-box;
  }
</style>
<div class="content-box">Content Box</div>
<div class="border-box">Border Box</div>
\`\`\`

---
> **គន្លឹះ:** ការយល់ដឹងពី Box Model គឺចាំបាច់សម្រាប់ការរៀបចំ Layout គេហទំព័រឱ្យបានត្រឹមត្រូវ។ ការប្រើប្រាស់ \`box-sizing: border-box;\` គឺជាអនុសាសន៍ល្អសម្រាប់គម្រោងភាគច្រើន ដើម្បីធ្វើឱ្យការគណនាទំហំ Element កាន់តែងាយស្រួល។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ CSS Box Model</h3>
<style>
body { font-family: Arial, sans-serif; padding: 20px; background-color: #f8f9fa; }
.box-container {
  display: flex; /* For horizontal comparison */
  gap: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px dashed #ccc;
  background-color: #e9ecef;
}
.box {
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  padding: 15px; /* Default padding for all example boxes */
  text-align: center;
}

/* Content Box Example */
.content-box-example {
  width: 150px;
  height: 80px;
  background-color: #ffcccc; /* Light red */
  padding: 20px;
  border: 5px solid #dc3545; /* Darker red */
  margin: 10px;
  box-sizing: content-box; /* Default */
}

/* Border Box Example */
.border-box-example {
  width: 150px;
  height: 80px;
  background-color: #ccffcc; /* Light green */
  padding: 20px;
  border: 5px solid #28a745; /* Darker green */
  margin: 10px;
  box-sizing: border-box; /* Key difference */
}

/* Padding Example */
.padding-example {
  background-color: #e0f7fa; /* Light cyan */
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 10px;
  padding-left: 50px;
  border: 1px solid #00bcd4;
}

/* Border Example */
.border-example {
  background-color: #fff3e0; /* Light orange */
  border-top: 2px solid #ff9800;
  border-right: 4px dashed #ff9800;
  border-bottom: 2px double #ff9800;
  border-left: 6px solid #ff9800;
  padding: 10px;
}

/* Margin Example */
.margin-example-1 {
  background-color: #fce4ec; /* Light pink */
  margin-bottom: 30px; /* Affects space below */
  padding: 10px;
  border: 1px solid #e91e63;
}
.margin-example-2 {
  background-color: #e8eaf6; /* Light indigo */
  margin-left: 50px; /* Affects space to the left */
  padding: 10px;
  border: 1px solid #3f51b5;
}
</style>

<h3>CSS Box Model Examples</h3>

<div class="box-container">
  <div class="box content-box-example">
    <h4>Content Box</h4>
    <p>Width: 150px</p>
    <p>Total Width: 150 + (2*20) + (2*5) = 200px</p>
  </div>
  <div class="box border-box-example">
    <h4>Border Box</h4>
    <p>Width: 150px</p>
    <p>Total Width: 150px</p>
  </div>
</div>

<div>
  <h3>Padding Example</h3>
  <div class="box padding-example">
    <p>This box has different padding on each side.</p>
    <p>Top: 10px, Right: 30px, Bottom: 10px, Left: 50px</p>
  </div>
</div>

<div>
  <h3>Border Example</h3>
  <div class="box border-example">
    <p>This box has various border styles and widths.</p>
    <p>Top: solid, Right: dashed, Bottom: double, Left: solid</p>
  </div>
</div>

<div>
  <h3>Margin Example</h3>
  <div class="margin-example-1 box">
    <p>This box has a bottom margin of 30px.</p>
  </div>
  <div class="margin-example-2 box">
    <p>This box has a left margin of 50px.</p>
  </div>
</div>
`
  ],
  quiz: [
    {
      question: 'តើសមាសធាតុទាំងបួននៃ CSS Box Model មានអ្វីខ្លះ?',
      options: [
        'Content, Background, Text, Link',
        'Content, Padding, Border, Margin',
        'Header, Footer, Sidebar, Main',
        'Width, Height, Color, Font'
      ],
      correct: 1,
      explanation: 'សមាសធាតុទាំងបួននៃ CSS Box Model គឺ Content, Padding, Border, និង Margin ។'
    },
    {
      question: 'តើ Padding ស្ថិតនៅចន្លោះសមាសធាតុណាខ្លះ?',
      options: [
        'រវាង Border និង Margin',
        'រវាង Content និង Border',
        'រវាង Element ពីរផ្សេងគ្នា',
        'រវាងអក្សរ និងរូបភាព'
      ],
      correct: 1,
      explanation: 'Padding គឺជាចន្លោះថ្លារវាង Content និង Border ។'
    },
    {
      question: 'តើ Property `margin: 0 auto;` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ Margin 0 សម្រាប់គ្រប់ជ្រុងទាំងអស់',
        'ដើម្បីដាក់ Element នៅកណ្តាលបញ្ឈរ',
        'ដើម្បីដាក់ Element នៅកណ្តាលផ្ដេក (សម្រាប់ Block-level elements)',
        'ដើម្បីកំណត់ Margin 0 សម្រាប់ខាងលើ និងខាងក្រោម'
      ],
      correct: 2,
      explanation: '`margin: 0 auto;` សម្រាប់ Block-level elements ត្រូវបានប្រើដើម្បីដាក់ Element នៅកណ្តាលផ្ដេកនៅក្នុង Element មេរបស់វា។'
    },
    {
      question: 'តើ `border: 2px dashed red;` កំណត់អ្វី?',
      options: [
        'ព្រំដែន solid 2px ពណ៌ក្រហម',
        'ព្រំដែន dashed 2px ពណ៌ក្រហម',
        'ព្រំដែន dotted 2px ពណ៌ក្រហម',
        'ព្រំដែន double 2px ពណ៌ក្រហម'
      ],
      correct: 1,
      explanation: '`border: 2px dashed red;` កំណត់ព្រំដែនជាបន្ទាត់ឆ្នូត (dashed) កម្រាស់ 2px ពណ៌ក្រហម។'
    },
    {
      question: 'តើ `box-sizing: border-box;` មានន័យដូចម្តេច?',
      options: [
        '`width` និង `height` រួមបញ្ចូលតែ Content ប៉ុណ្ណោះ',
        '`width` និង `height` រួមបញ្ចូល Content និង Padding ប៉ុណ្ណោះ',
        '`width` និង `height` រួមបញ្ចូល Content, Padding, និង Border',
        '`width` និង `height` រួមបញ្ចូល Content, Padding, Border, និង Margin'
      ],
      correct: 2,
      explanation: '`box-sizing: border-box;` មានន័យថា `width` និង `height` ដែលអ្នកបានកំណត់សម្រាប់ Element នឹងរួមបញ្ចូល Content, Padding, និង Border ។'
    },
    {
      question: 'តើផ្នែកមួយណាដែលមិនមែនជាផ្នែកនៃ Element ខ្លួនវា ហើយមិនត្រូវបានរួមបញ្ចូលនៅក្នុងផ្ទៃខាងក្រោយរបស់ Element?',
      options: ['Content', 'Padding', 'Border', 'Margin'],
      correct: 3,
      explanation: 'Margin គឺជាចន្លោះថ្លារវាង Border របស់ Element មួយ និង Element ផ្សេងទៀត។ វាស្ថិតនៅខាងក្រៅ Border ហើយមិនត្រូវបានរួមបញ្ចូលនៅក្នុងផ្ទៃខាងក្រោយរបស់ Element ទេ។'
    },
    {
      question: 'តើមួយណាជា Shorthand property សម្រាប់កំណត់ Padding 20px ពីលើ/ក្រោម និង 10px ពីឆ្វេង/ស្តាំ?',
      options: [
        '`padding: 20px 10px 20px 10px;`',
        '`padding: 20px 10px;`',
        '`padding-top: 20px; padding-bottom: 20px; padding-left: 10px; padding-right: 10px;`',
        'Both B and C'
      ],
      correct: 1,
      explanation: '`padding: 20px 10px;` គឺជា Shorthand property សម្រាប់កំណត់ Padding 20px ពីលើ/ក្រោម និង 10px ពីឆ្វេង/ស្តាំ។'
    },
    {
      question: 'តើ Property `border-style` ណាដែលបង្ហាញព្រំដែនជាបន្ទាត់ដាច់ៗ?',
      options: [
        '`solid`',
        '`double`',
        '`dotted`',
        '`dashed`'
      ],
      correct: 3,
      explanation: '`dashed` ត្រូវបានប្រើដើម្បីបង្ហាញព្រំដែនជាបន្ទាត់ដាច់ៗ។'
    },
    {
      question: 'ប្រសិនបើអ្នកកំណត់ `width: 100px; padding: 10px; border: 2px solid black; box-sizing: content-box;` តើទទឹងសរុបនៃ Element នឹងមានប៉ុន្មាន?',
      options: [
        '100px',
        '110px',
        '120px',
        '124px'
      ],
      correct: 3,
      explanation: 'ជាមួយនឹង `content-box`, ទទឹងសរុបគឺ `width + (padding-left + padding-right) + (border-left-width + border-right-width)` = `100px + (10px + 10px) + (2px + 2px)` = `124px`។'
    },
    {
      question: 'តើ Propertyមួយណាដែលគ្រប់គ្រងចន្លោះរវាង Element មួយ និង Element ផ្សេងទៀត?',
      options: [
        '`padding`',
        '`border`',
        '`margin`',
        '`content`'
      ],
      correct: 2,
      explanation: '`margin` គ្រប់គ្រងចន្លោះខាងក្រៅរវាង Element នានា។'
    },
    {
      question: 'តើ Property `padding` មួយណាដែលផ្លាស់ប្តូរគម្លាតតែនៅខាងស្តាំនៃ Element?',
      options: [
        '`padding-right`',
        '`padding-left`',
        '`padding-top`',
        '`padding-bottom`'
      ],
      correct: 0,
      explanation: '`padding-right` ត្រូវបានប្រើដើម្បីកំណត់គម្លាតតែនៅខាងស្តាំនៃ Element ។'
    },
    {
      question: 'តើអ្នកអាចកំណត់ព្រំដែនតែនៅខាងក្រោមនៃ Element ដោយរបៀបណា?',
      options: [
        '`border-bottom: 1px solid black;`',
        '`border-style: bottom solid;`',
        '`border: bottom 1px solid black;`',
        'Cannot be done with a single property'
      ],
      correct: 0,
      explanation: '`border-bottom` គឺជា​ Property ដែលប្រើសម្រាប់កំណត់ព្រំដែនតែនៅខាងក្រោម។'
    },
    {
      question: 'តើការប្រើប្រាស់ `box-sizing: border-box;` ជាទូទៅត្រូវបានណែនាំដោយសារហេតុផលអ្វី?',
      options: [
        'វាធ្វើឱ្យ Element តូចជាងមុន',
        'វាធ្វើឱ្យការរៀបចំ Layout កាន់តែពិបាក',
        'វាធ្វើឱ្យការគណនាទំហំ Element កាន់តែងាយស្រួល ព្រោះ Padding និង Border ត្រូវបានរួមបញ្ចូលក្នុង Width/Height',
        'វាដក Padding និង Border ចេញពី Element'
      ],
      correct: 2,
      explanation: '`box-sizing: border-box;` ត្រូវបានណែនាំព្រោះវាធ្វើឱ្យការគណនាទំហំសរុបរបស់ Element កាន់តែងាយស្រួលនិងអាចទាយទុកមុនបាន ដោយសារ Padding និង Border ត្រូវបានរួមបញ្ចូលនៅក្នុង `width` និង `height` ដែលបានកំណត់។'
    },
    {
      question: 'ប្រសិនបើអ្នកមាន `padding: 10px 0 20px 5px;` តើ Padding ខាងលើ (top) នឹងមានប៉ុន្មាន?',
      options: [
        '0px',
        '5px',
        '10px',
        '20px'
      ],
      correct: 2,
      explanation: 'ក្នុង Shorthand `padding: top right bottom left;`, 10px គឺសម្រាប់ Padding ខាងលើ។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធដូចខាងក្រោម៖
* \`<body>\` ។
* \`<div>\` មួយដែលមាន Class \`box-model-container\` ។
* នៅក្នុង \`box-model-container\` មាន \`<div>\` ចំនួន ៣ ដោយមាន Class ដូចជា \`item-box\` និង Paragraph នៅក្នុងនោះ។

សូមប្រើ **Internal CSS** និង Box Model properties ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  កំណត់ \`box-sizing: border-box;\` សម្រាប់គ្រប់ Elements ទាំងអស់ (\`*\`) ។
2.  សម្រាប់ \`.box-model-container\` កំណត់ \`width: 90%;\`, \`max-width: 800px;\`, \`margin: 20px auto;\` (ដើម្បីតម្រឹមនៅកណ្តាល), \`padding: 15px;\`, \`border: 2px solid #3498db;\` និង \`background-color: #ecf0f1;\` ។
3.  សម្រាប់ \`item-box\` កំណត់ \`width: 200px;\`, \`height: 100px;\`, \`margin: 10px;\`, \`padding: 20px;\`, \`border: 1px solid #2ecc71;\` និង \`background-color: #a2d9ce;\` ។
4.  សម្រាប់ \`item-box\` ទីមួយ កំណត់ \`padding-top: 40px;\` និង \`padding-bottom: 40px;\` ។
5.  សម្រាប់ \`item-box\` ទីពីរ កំណត់ \`border-left: 5px solid #e74c3c;\` និង \`border-right: 5px solid #e74c3c;\` ។
6.  សម្រាប់ \`item-box\` ទីបី កំណត់ \`margin-left: auto;\` និង \`margin-right: auto;\` (ដើម្បីតម្រឹមនៅកណ្តាលដោយខ្លួនឯងក្នុង container)។
`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Box Model Lab</title>
  <style>
    /* 1. Set box-sizing to border-box for all elements */
    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #f4f7f6;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh; /* Ensures body takes full viewport height for centering effect */
    }

    /* 2. Styles for the main container */
    .box-model-container {
      width: 90%;
      max-width: 800px;
      margin: 20px auto; /* Center the container horizontally */
      padding: 15px;
      border: 2px solid #3498db; /* Blue border */
      background-color: #ecf0f1; /* Light gray background */
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      display: flex; /* To arrange item-boxes */
      flex-wrap: wrap; /* Allows items to wrap to next line if space runs out */
      justify-content: center; /* Center items horizontally within container */
    }

    /* 3. General styles for item-box */
    .item-box {
      width: 200px;
      height: 100px;
      margin: 10px; /* Space between items */
      padding: 20px;
      border: 1px solid #2ecc71; /* Green border */
      background-color: #a2d9ce; /* Light teal background */
      border-radius: 5px;
      display: flex; /* To center text vertically */
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #333;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
    }

    /* 4. Specific padding for the first item-box */
    .item-box:nth-child(1) {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    /* 5. Specific borders for the second item-box */
    .item-box:nth-child(2) {
      border-left: 5px solid #e74c3c; /* Red left border */
      border-right: 5px solid #e74c3c; /* Red right border */
    }

    /* 6. Centering the third item-box horizontally within the container */
    .item-box:nth-child(3) {
      /* margin: auto works better if it's the only item in a row,
         or with flexbox it tries to distribute space.
         To truly center it when flex-wrap is used and it's alone,
         you might need specific flex alignment or ensure it's on its own line.
         For this lab, given flex-wrap, margin:auto will just distribute space
         if other items are around it. If it's on a new line, it will center. */
      margin-left: auto;
      margin-right: auto;
    }
  </style>
</head>
<body>
  <div class="box-model-container">
    <h3>Box Model Container</h3>
    <div class="item-box">
      <p>Item 1: Custom Padding</p>
    </div>
    <div class="item-box">
      <p>Item 2: Custom Borders</p>
    </div>
    <div class="item-box">
      <p>Item 3: Auto Margins</p>
    </div>
  </div>
</body>
</html>`
  }
};

export default CSSLesson3_5Content;