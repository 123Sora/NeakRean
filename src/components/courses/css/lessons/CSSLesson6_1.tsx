// src/components/lessons/css/CSSLesson6_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson6_1Content: LessonContent = {
  title: 'CSS Box Model (ម៉ូដែលប្រអប់ CSS)',
  objectives: [
    'ស្វែងយល់ពីគោលគំនិតនៃ CSS Box Model។',
    'ដឹងពីសមាសធាតុនីមួយៗនៃ Box Model គឺ Content, Padding, Border, និង Margin។',
    'យល់ពីរបៀបដែល Padding ប៉ះពាល់ដល់ទំហំ Element និងគម្លាតខាងក្នុង។',
    'យល់ពីរបៀបដែល Border ប៉ះពាល់ដល់ទំហំ Element និងរបៀបកំណត់រចនាប័ទ្មរបស់វា។',
    'យល់ពីរបៀបដែល Margin ប៉ះពាល់ដល់គម្លាតរវាង Elements ។',
    'ស្គាល់ពីការលប់ចោល Margin (Margin Collapsing)។',
    'រៀនពីរបៀបប្រើ Property `box-sizing` ដើម្បីផ្លាស់ប្តូររបៀបដែល Browser គណនាទំហំ Elements។',
    'អាចអនុវត្ត Box Model សម្រាប់ការរៀបចំ Layout និងការគណនាទំហំបានត្រឹមត្រូវ។'
  ],
  content: `
# CSS Box Model (ម៉ូដែលប្រអប់ CSS) 📦

---

រាល់ Element HTML ទាំងអស់នៅលើទំព័រគេហទំព័រត្រូវបានចាត់ទុកជា **"ប្រអប់" (Box)** មួយដោយ Browser ។ CSS Box Model គឺជាគោលគំនិតគ្រឹះដែលពិពណ៌នាអំពីរបៀបដែល Elements នីមួយៗត្រូវបានរៀបចំឡើង ហើយរបៀបដែលទំហំរបស់វាត្រូវបានគណនា។

Box Model មានសមាសធាតុសំខាន់ៗចំនួនបួន (ស្រទាប់ពីក្នុងទៅក្រៅ)៖

1.  **Content (មាតិកា)**: តំបន់ដែលមាតិកាពិតប្រាកដរបស់ Element ស្ថិតនៅ (អត្ថបទ រូបភាព វីដេអូ ។ល។)។ នេះគឺជាកន្លែងដែលទទឹង (\`width\`) និងកម្ពស់ (\`height\`) ត្រូវបានអនុវត្ត។
2.  **Padding (គម្លាតខាងក្នុង)**: តំបន់គម្លាតរវាង Content និង Border ។ Padding គឺជាគម្លាតខាងក្នុងរបស់ Element ។ វាជាកន្លែងទំនេរជុំវិញមាតិកាខាងក្នុងប្រអប់។
3.  **Border (ស៊ុម)**: បន្ទាត់ដែលព័ទ្ធជុំវិញ Padding និង Content ។ Border គឺជាព្រំដែននៃប្រអប់។
4.  **Margin (គម្លាតខាងក្រៅ)**: តំបន់គម្លាតនៅខាងក្រៅ Border ដែលបំបែក Element មួយពី Elements ផ្សេងទៀត។ Margin គឺជាគម្លាតខាងក្រៅប្រអប់។

\`\`\`css
/* Visual representation of the Box Model */
.box {
  /* Content */
  width: 200px;
  height: 100px;
  background-color: lightcyan; /* To see the content area */

  /* Padding */
  padding: 20px; /* Space inside the box, between content and border */
  background-clip: content-box; /* Ensures background only covers content-box by default */
  /* Or padding-top, padding-right, padding-bottom, padding-left */

  /* Border */
  border: 5px solid blue; /* The line around the padding */
  /* Or border-width, border-style, border-color, border-top, etc. */

  /* Margin */
  margin: 30px; /* Space outside the box, between this box and other boxes */
  /* Or margin-top, margin-right, margin-bottom, margin-left */
}
\`\`\`

---

## 1. Content (មាតិកា)

នេះគឺជាតំបន់ស្នូលនៃ Element របស់អ្នក។ Property \`width\` និង \`height\` ធម្មតាត្រូវបានកំណត់ទៅតំបន់ Content នេះ។

\`\`\`html
<style>
  .content-box {
    width: 150px;
    height: 80px;
    background-color: #ffe0b2; /* Light orange */
    border: 1px dashed #ff9800;
    margin: 10px;
    text-align: center;
    line-height: 80px;
    font-size: 1.2em;
  }
</style>
<div class="content-box">Content Area</div>
\`\`\`

---

## 2. Padding (គម្លាតខាងក្នុង)

Padding គឺជាគម្លាតរវាង Content របស់ Element និង Border របស់វា។ វាបន្ថែមទំហំទៅខាងក្នុងប្រអប់។

* **Syntax:**
    * \`padding: 20px;\` (គ្រប់ជ្រុងទាំងអស់)
    * \`padding: 10px 20px;\` (Top/Bottom, Left/Right)
    * \`padding: 5px 10px 15px 20px;\` (Top, Right, Bottom, Left)
    * \`padding-top\`, \`padding-right\`, \`padding-bottom\`, \`padding-left\`

\`\`\`html
<style>
  .padding-box {
    width: 150px;
    height: 80px;
    background-color: #cceeff; /* Light blue */
    border: 2px solid #007bff;
    margin: 10px;
    padding: 20px; /* Adds 20px space on all sides inside the border */
    text-align: center;
    line-height: 80px; /* Note: line-height here is for the content area */
    font-size: 1.1em;
  }
</style>
<div class="padding-box">Box with Padding</div>
<p>Total width = Content (150px) + Padding-left (20px) + Padding-right (20px) + Border-left (2px) + Border-right (2px) = 194px (by default, content-box).</p>
\`\`\`

---

## 3. Border (ស៊ុម)

Border គឺជាបន្ទាត់ដែលព័ទ្ធជុំវិញ Padding និង Content របស់ Element ។ អ្នកអាចកំណត់រចនាប័ទ្ម ទទឹង និងពណ៌នៃ Border ។

* **Syntax (Shorthand):**
    * \`border: 2px solid black;\` (Width, Style, Color)
* **Individual Properties:**
    * \`border-width\`, \`border-style\`, \`border-color\`
    * \`border-top\`, \`border-right\`, \`border-bottom\`, \`border-left\` (for specific sides)
    * \`border-radius\` (សម្រាប់ជ្រុងមូល)

\`\`\`html
<style>
  .border-box {
    width: 150px;
    height: 80px;
    background-color: #d4edda; /* Light green */
    padding: 15px;
    margin: 10px;
    border: 5px dashed #28a745; /* Adds 5px border on all sides */
    border-radius: 10px; /* Rounded corners */
    text-align: center;
    line-height: 80px;
    font-size: 1.1em;
  }
</style>
<div class="border-box">Box with Border</div>
<p>Total width = Content (150px) + Padding (2x15px) + Border (2x5px) = 190px (by default, content-box).</p>
\`\`\`

---

## 4. Margin (គម្លាតខាងក្រៅ)

Margin គឺជាគម្លាតនៅខាងក្រៅ Border ដែលបំបែក Element មួយពី Elements ផ្សេងទៀត។ Margin មិនមែនជាផ្នែកនៃ Element ពិតប្រាកដនោះទេ តែវាជាគម្លាតជុំវិញវា។

* **Syntax:**
    * \`margin: 20px;\` (គ្រប់ជ្រុងទាំងអស់)
    * \`margin: 10px 20px;\` (Top/Bottom, Left/Right)
    * \`margin: 5px 10px 15px 20px;\` (Top, Right, Bottom, Left)
    * \`margin-top\`, \`margin-right\`, \`margin-bottom\`, \`margin-left\`
    * \`margin: auto;\` (ប្រើសម្រាប់ Central Block Elements)

### Margin Collapsing (ការលប់ចោល Margin)

នៅពេលដែល Margins នៃ Elements Block ពីរជាន់គ្នា (ឧទាហរណ៍ Margin-bottom នៃ Element មួយ និង Margin-top នៃ Element បន្ទាប់) នោះ Margin ដែលធំជាងនឹងត្រូវប្រើ ហើយ Margin ទាំងពីរនឹង "លប់ចោល" ចូលគ្នាទៅជា Margin តែមួយ។ នេះកើតឡើងតែជាមួយ Vertical Margins ប៉ុណ្ណោះ មិនមែន Horizontal Margins ទេ។

\`\`\`html
<style>
  .margin-box {
    width: 150px;
    height: 80px;
    background-color: #f8d7da; /* Light red */
    border: 1px solid #dc3545;
    padding: 10px;
    margin: 30px; /* Adds 30px space outside on all sides */
    text-align: center;
    line-height: 80px;
    font-size: 1.1em;
  }
  .margin-collapse-example {
    background-color: #e2e6ea;
    padding: 10px;
    border: 1px dashed #6c757d;
  }
  .box-a {
    margin-bottom: 40px;
    background-color: #cfe2ff;
    width: 100px; height: 50px;
  }
  .box-b {
    margin-top: 20px;
    background-color: #d4edda;
    width: 100px; height: 50px;
  }
</style>
<div class="margin-box">Box with Margin</div>
<p>The space outside this box is its margin.</p>

<h3>Margin Collapsing Example</h3>
<div class="margin-collapse-example">
  <div class="box-a">Box A (margin-bottom: 40px)</div>
  <div class="box-b">Box B (margin-top: 20px)</div>
  <p>The effective margin between Box A and Box B will be 40px, not 60px, due to margin collapsing.</p>
</div>
\`\`\`

---

## 5. \`box-sizing\` Property

Property \`box-sizing\` ផ្លាស់ប្តូររបៀបដែល \`width\` និង \`height\` របស់ Element ត្រូវបានគណនា។

* **\`content-box\`** (លំនាំដើម):
    * \`width\` និង \`height\` រួមបញ្ចូលតែ Content ប៉ុណ្ណោះ។
    * Padding និង Border ត្រូវបាន **បន្ថែម** ទៅលើ \`width\` និង \`height\` ដែលបានកំណត់។
    * **Total width = width + padding-left + padding-right + border-left + border-right**
    * **Total height = height + padding-top + padding-bottom + border-top + border-bottom**
* **\`border-box\`**:
    * \`width\` និង \`height\` រួមបញ្ចូល Content, Padding, និង Border ។
    * Padding និង Border ត្រូវបាន **បញ្ចូល** នៅខាងក្នុង \`width\` និង \`height\` ដែលបានកំណត់។
    * នេះធ្វើឱ្យ Layout កាន់តែងាយស្រួលក្នុងការទាយទុកមុន ព្រោះទំហំពិតប្រាកដនៃប្រអប់មិនផ្លាស់ប្តូរដោយសារ Padding ឬ Border ឡើយ។

\`\`\`css
/* Common practice for modern layouts */
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
\`\`\`
This rule sets \`box-sizing: border-box;\` for all elements, making sizing calculations much more intuitive.

\`\`\`html
<style>
  .box-sizing-example {
    display: flex; /* For side-by-side comparison */
    justify-content: space-around;
    margin: 20px auto;
    max-width: 600px;
    border: 1px solid #ccc;
    padding: 10px;
    background-color: #f0f0f0;
  }
  .sizing-box {
    width: 150px;
    height: 100px;
    padding: 20px;
    border: 5px solid black;
    background-color: lightgreen;
    text-align: center;
    line-height: 100px;
  }
  .content-box-demo {
    box-sizing: content-box; /* Default */
    background-color: #ffe0b2;
  }
  .border-box-demo {
    box-sizing: border-box;
    background-color: #cceeff;
  }
</style>
<div class="box-sizing-example">
  <div class="sizing-box content-box-demo">
    Content-Box <br> (150px + P + B)
  </div>
  <div class="sizing-box border-box-demo">
    Border-Box <br> (150px includes P + B)
  </div>
</div>
<p>Observe how the "Border-Box" stays at its defined 150px width, while "Content-Box" expands.</p>
\`\`\`

---
> **គន្លឹះ:** ការយល់ដឹងពី Box Model គឺមានសារៈសំខាន់បំផុតសម្រាប់ការរៀបចំ Layout ក្នុង CSS ។ ជារឿយៗអ្នកអភិវឌ្ឍន៍ប្រើ \`box-sizing: border-box;\` សម្រាប់ Elements ទាំងអស់ព្រោះវាធ្វើឱ្យការគណនាទំហំកាន់តែងាយស្រួល និងអាចទាយទុកមុនបាន។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ CSS Box Model</h3>
<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  background-color: #f0f2f5;
  line-height: 1.6;
}
section {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  margin-bottom: 40px;
  padding: 25px;
}
h4 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-top: 0;
}
p {
  color: #555;
  margin-bottom: 15px;
}

/* Example Box Styles */
.demo-box {
  background-color: #e0f7fa; /* Light cyan */
  border: 1px solid #00bcd4; /* Cyan */
  margin: 15px 0;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  color: #333;
}

.content-padding-border-margin {
  width: 200px;
  height: 100px;
  background-color: #c8e6c9; /* Light green */
  padding: 20px; /* Internal space */
  border: 5px solid #4caf50; /* Border */
  margin: 30px auto; /* External space, centered */
  box-sizing: content-box; /* Default behavior */
  display: block; /* Ensure it behaves like a block element for margin: auto */
  line-height: 100px; /* Center text vertically */
}

.box-sizing-comparison-container {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
}

.sizing-box-comp {
  width: 150px;
  height: 80px;
  padding: 15px;
  border: 3px solid #fbc02d; /* Amber */
  background-color: #fffde7; /* Light yellow */
  text-align: center;
  line-height: 80px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.sizing-box-comp.content {
  box-sizing: content-box;
  background-color: #ffe0b2; /* Light orange */
}

.sizing-box-comp.border {
  box-sizing: border-box;
  background-color: #cceeff; /* Light blue */
}

.margin-collapse-demo {
  background-color: #e8eaf6; /* Light indigo */
  padding: 10px;
  border: 1px dashed #3f51b5; /* Indigo */
}
.margin-collapse-item {
  width: 100px;
  height: 50px;
  background-color: #fce4ec; /* Pink */
  border: 1px solid #e91e63; /* Deep pink */
  text-align: center;
  line-height: 50px;
  color: #333;
}
.margin-collapse-top { margin-bottom: 30px; }
.margin-collapse-bottom { margin-top: 20px; }

</style>

<section>
  <h4>Elements of the Box Model (សមាសធាតុនៃ Box Model)</h4>
  <p>Element ខាងក្រោមបង្ហាញពី Content, Padding, Border, និង Margin ។</p>
  <div class="content-padding-border-margin">
    Content Area
  </div>
  <p>
    **Content:** 200px width, 100px height.<br>
    **Padding:** 20px on all sides.<br>
    **Border:** 5px solid green.<br>
    **Margin:** 30px on all sides (horizontally centered with auto).<br>
    *Total width (visual) = 200 (content) + 2*20 (padding) + 2*5 (border) = 250px.*
  </p>
</section>

<section>
  <h4>\`box-sizing\` Comparison (ប្រៀបធៀប \`box-sizing\`)</h4>
  <p>ប្រអប់ទាំងពីរខាងក្រោមត្រូវបានកំណត់ \`width: 150px\`, \`padding: 15px\`, និង \`border: 3px\`។</p>
  <div class="box-sizing-comparison-container">
    <div class="sizing-box-comp content">
      Content-Box
    </div>
    <div class="sizing-box-comp border">
      Border-Box
    </div>
  </div>
  <p>
    **Content-Box:** ទទឹងសរុបគឺ Content (150px) + 2*Padding (30px) + 2*Border (6px) = **186px**.<br>
    **Border-Box:** ទទឹងសរុបគឺ **150px** (រួមបញ្ចូល Padding និង Border)។
  </p>
</section>

<section>
  <h4>Margin Collapsing (ការលប់ចោល Margin)</h4>
  <p>Margin-bottom នៃប្រអប់ទីមួយគឺ 30px ហើយ Margin-top នៃប្រអប់ទីពីរគឺ 20px ។</p>
  <div class="margin-collapse-demo">
    <div class="margin-collapse-item margin-collapse-top">Box A</div>
    <div class="margin-collapse-item margin-collapse-bottom">Box B</div>
  </div>
  <p>គម្លាតបញ្ឈររវាង Box A និង Box B នឹងមាន 30px (Margin ដែលធំជាងគេ) មិនមែន 50px ទេ។</p>
</section>
`
  ],
  quiz: [
    {
      question: 'តើ CSS Box Model ពិពណ៌នាអំពីអ្វី?',
      options: [
        'របៀបដែល Font ត្រូវបានបង្ហាញនៅលើទំព័រ',
        'របៀបដែល Elements នីមួយៗត្រូវបានរៀបចំឡើង និងរបៀបដែលទំហំរបស់វាត្រូវបានគណនា',
        'របៀបដែល JavaScript ធ្វើអន្តរកម្មជាមួយ HTML',
        'របៀបដែលរូបភាពត្រូវបានផ្ទុកទៅក្នុង Browser'
      ],
      correct: 1,
      explanation: 'CSS Box Model គឺជាគោលគំនិតគ្រឹះដែលពិពណ៌នាអំពីរបៀបដែល Elements នីមួយៗត្រូវបានរៀបចំឡើង ហើយរបៀបដែលទំហំរបស់វាត្រូវបានគណនា។'
    },
    {
      question: 'តើអ្វីជាសមាសធាតុទាំងបួននៃ Box Model តាមលំដាប់ពីក្នុងទៅក្រៅ?',
      options: [
        'Margin, Border, Padding, Content',
        'Content, Padding, Border, Margin',
        'Border, Content, Padding, Margin',
        'Padding, Content, Margin, Border'
      ],
      correct: 1,
      explanation: 'សមាសធាតុទាំងបួននៃ Box Model ពីក្នុងទៅក្រៅគឺ Content, Padding, Border, និង Margin ។'
    },
    {
      question: 'តើ Property មួយណាដែលបង្កើតគម្លាតខាងក្នុងរវាង Content និង Border របស់ Element?',
      options: [
        '`margin`',
        '`border`',
        '`padding`',
        '`space`'
      ],
      correct: 2,
      explanation: '`padding` គឺជាគម្លាតខាងក្នុងរបស់ Element រវាង Content និង Border របស់វា។'
    },
    {
      question: 'តើ Margin ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ទំហំពិតប្រាកដនៃ Content',
        'ដើម្បីបន្ថែមបន្ទាត់ព័ទ្ធជុំវិញ Element',
        'ដើម្បីបង្កើតគម្លាតខាងក្រៅរវាង Element មួយនិង Elements ផ្សេងទៀត',
        'ដើម្បីផ្លាស់ប្តូរពណ៌ផ្ទៃខាងក្រោយរបស់ Element'
      ],
      correct: 2,
      explanation: 'Margin គឺជាគម្លាតនៅខាងក្រៅ Border ដែលបំបែក Element មួយពី Elements ផ្សេងទៀត។'
    },
    {
      question: 'តើ `box-sizing: border-box;` ផ្លាស់ប្តូររបៀបដែល `width` និង `height` ត្រូវបានគណនាយ៉ាងដូចម្តេច?',
      options: [
        'វារួមបញ្ចូលតែ Content ក្នុង `width` និង `height`',
        'វារួមបញ្ចូល Content, Padding, និង Border ក្នុង `width` និង `height`',
        'វាមិនប៉ះពាល់ដល់ការគណនាទំហំទេ',
        'វារួមបញ្ចូលតែ Margin ក្នុង `width` និង `height`'
      ],
      correct: 1,
      explanation: 'នៅពេល `box-sizing: border-box;` ត្រូវបានកំណត់ `width` និង `height` រួមបញ្ចូល Content, Padding, និង Border ។'
    },
    {
      question: 'តើអ្វីជាតម្លៃលំនាំដើមនៃ Property `box-sizing`?',
      options: [
        '`border-box`',
        '`padding-box`',
        '`content-box`',
        '`initial`'
      ],
      correct: 2,
      explanation: 'តម្លៃលំនាំដើមនៃ Property `box-sizing` គឺ `content-box`។'
    },
    {
      question: 'តើ "Margin Collapsing" កើតឡើងនៅពេលណា?',
      options: [
        'នៅពេលដែល Margins ផ្តេក (horizontal) នៃ Elements ពីរជាន់គ្នា',
        'នៅពេលដែល Margins បញ្ឈរ (vertical) នៃ Elements Block ពីរជាន់គ្នា',
        'នៅពេលដែល Padding នៃ Elements ពីរជាន់គ្នា',
        'នៅពេលដែល Border នៃ Elements ពីរជាន់គ្នា'
      ],
      correct: 1,
      explanation: 'Margin Collapsing កើតឡើងនៅពេលដែល Margins បញ្ឈរ (vertical) នៃ Elements Block ពីរជាន់គ្នា ហើយ Margin ដែលធំជាងនឹងត្រូវបានប្រើ។'
    },
    {
      question: 'ប្រសិនបើ Element មួយមាន `width: 100px`, `padding: 10px;` និង `border: 2px solid;` តើទទឹងសរុបរបស់វាជាប៉ុន្មាន ប្រសិនបើ `box-sizing: content-box;`?',
      options: [
        '100px',
        '110px',
        '124px',
        '134px'
      ],
      correct: 2,
      explanation: 'សម្រាប់ `content-box`, Total width = width + (2 * padding) + (2 * border) = 100px + (2 * 10px) + (2 * 2px) = 100 + 20 + 4 = 124px ។'
    },
    {
      question: 'ប្រសិនបើ Element មួយមាន `width: 100px`, `padding: 10px;` និង `border: 2px solid;` តើទទឹងសរុបរបស់វាជាប៉ុន្មាន ប្រសិនបើ `box-sizing: border-box;`?',
      options: [
        '100px',
        '110px',
        '124px',
        '134px'
      ],
      correct: 0,
      explanation: 'សម្រាប់ `border-box`, `width` ដែលបានកំណត់ (100px) រួមបញ្ចូល Padding និង Border រួចជាស្រេច ដូច្នេះទទឹងសរុបគឺ 100px ។'
    },
    {
      question: 'តើ Syntax មួយណាដែលត្រឹមត្រូវសម្រាប់ការកំណត់ Padding តែ Top និង Bottom 10px និង Left និង Right 20px?',
      options: [
        '`padding: 10px 20px 0 0;`',
        '`padding: 10px 20px;`',
        '`padding-vertical: 10px; padding-horizontal: 20px;`',
        '`padding-top-bottom: 10px; padding-left-right: 20px;`'
      ],
      correct: 1,
      explanation: '`padding: 10px 20px;` កំណត់ Padding 10px សម្រាប់ Top និង Bottom និង 20px សម្រាប់ Left និង Right ។'
    },
    {
      question: 'តើ Property មួយណាដែលត្រូវបានប្រើដើម្បីធ្វើឱ្យជ្រុងនៃ Element មានរាងមូល?',
      options: [
        '`border-style`',
        '`border-color`',
        '`border-radius`',
        '`border-shape`'
      ],
      correct: 2,
      explanation: '`border-radius` ត្រូវបានប្រើដើម្បីធ្វើឱ្យជ្រុងនៃ Element មានរាងមូល។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML និង CSS ពីរដាច់ដោយឡែកពីគ្នាដើម្បីបង្ហាញពី CSS Box Model ។

1.  **HTML Structure (\`index.html\`):**
    * ត្រូវមាន \`<!DOCTYPE html>\`, \`<html>\`, \`<head>\`, និង \`<body>\` ។
    * ភ្ជាប់ទៅឯកសារ CSS ខាងក្រៅ (\`style.css\`) ក្នុង \`<head>\` ។
    * **Main Container:** \`<div class="container">\` ។
    * **Box Model Demo 1 (Content-Box):** \`<div class="box content-box-demo">\` ជាមួយអត្ថបទ "Content-Box Example" ។
    * **Box Model Demo 2 (Border-Box):** \`<div class="box border-box-demo">\` ជាមួយអត្ថបទ "Border-Box Example" ។
    * **Margin Collapsing Demo:**
        * \`<h2>\` "Margin Collapsing Demo" ។
        * \`<div class="margin-parent">\`
            * \`<div class="margin-child top-margin">\` ជាមួយអត្ថបទ "Box A" ។
            * \`<div class="margin-child bottom-margin">\` ជាមួយអត្ថបទ "Box B" ។
    * **Interactive Box:** \`<div class="interactive-box">\` ជាមួយអត្ថបទ "Hover over me!" ។

2.  **CSS Styling (\`style.css\`):**

    * **Global Styles:**
        * \`html\`: កំណត់ \`box-sizing: border-box;\` (នេះជាការអនុវត្តល្អបំផុត) ។
        * \`*, *::before, *::after\`: កំណត់ \`box-sizing: inherit;\` (ដើម្បីឱ្យ Elements កូនទទួលយកតម្លៃពី Parent) ។
        * \`body\`: \`font-family\`, \`margin\`, \`background-color\` ។
        * \`h1\`, \`h2\`: \`color\`, \`text-align\` ។

    * **Container Styles:**
        * \`.container\`: \`display: flex;\`, \`justify-content: space-around;\`, \`align-items: flex-start;\`, \`max-width: 900px;\`, \`margin: 20px auto;\`, \`padding: 20px;\`, \`background-color\`, \`border\`, \`border-radius\`, \`box-shadow\` ។

    * **Common Box Styles:**
        * \`.box\`: \`width: 200px;\`, \`height: 100px;\`, \`padding: 20px;\`, \`border: 5px solid;\`, \`margin: 20px;\`, \`text-align: center;\`, \`line-height: 100px;\`, \`font-weight: bold;\`, \`color: white;\` ។

    * **Specific Box Sizing Styles:**
        * \`.content-box-demo\`: \`box-sizing: content-box;\` (សម្រាប់ប្រៀបធៀប), \`background-color: #e74c3c;\` (ក្រហម), \`border-color: #c0392b;\` ។
        * \`.border-box-demo\`: \`box-sizing: border-box;\`, \`background-color: #2ecc71;\` (បៃតង), \`border-color: #27ae60;\` ។

    * **Margin Collapsing Styles:**
        * \`.margin-parent\`: \`background-color: #f8f9fa;\`, \`border: 2px dashed #6c757d;\`, \`padding: 10px;\`, \`max-width: 400px;\`, \`margin: 30px auto;\` ។
        * \`.margin-child\`: \`width: 150px;\`, \`height: 70px;\`, \`background-color: #a2d9ce;\`, \`border: 1px solid #1abc9c;\`, \`text-align: center;\`, \`line-height: 70px;\`, \`font-weight: bold;\` ។
        * \`.top-margin\`: \`margin-bottom: 40px;\` ។
        * \`.bottom-margin\`: \`margin-top: 20px;\` ។

    * **Interactive Box Styles:**
        * \`.interactive-box\`: \`width: 180px;\`, \`height: 80px;\`, \`background-color: #3498db;\`, \`color: white;\`, \`padding: 15px;\`, \`border: 3px solid #2980b9;\`, \`margin: 40px auto;\`, \`text-align: center;\`, \`line-height: 80px;\`, \`font-weight: bold;\`, \`transition: all 0.3s ease-in-out;\` ។
        * \`.interactive-box:hover\`: \`background-color: #e67e22;\`, \`border-color: #d35400;\`, \`padding: 25px;\` (សង្កេតមើលពីរបៀបដែល \`border-box\` ជួយរក្សាទំហំ) ។

**ការណែនាំ:**
* ប្រើ Lorem Ipsum សម្រាប់អត្ថបទវែងៗ ប្រសិនបើអ្នកចង់បំពេញមាតិកា។
* បើក \`index.html\` នៅក្នុង Browser របស់អ្នក ដើម្បីមើលលទ្ធផល។
* ប្រើ Browser's Developer Tools (Inspect Element) ដើម្បីមើល Box Model សម្រាប់ Elements នីមួយៗ។
    `,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Box Model Lab</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Khmer&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

  <h1>CSS Box Model Demonstration</h1>

  <div class="container">
    <div class="box content-box-demo">
      Content-Box Example <br> (Width = Content Only)
    </div>
    <div class="box border-box-demo">
      Border-Box Example <br> (Width = Content + Padding + Border)
    </div>
  </div>

  <h2>Margin Collapsing Demo</h2>
  <div class="margin-parent">
    <div class="margin-child top-margin">
      Box A (margin-bottom: 40px)
    </div>
    <div class="margin-child bottom-margin">
      Box B (margin-top: 20px)
    </div>
    <p>The vertical space between Box A and Box B is the larger of the two margins (40px), not their sum.</p>
  </div>

  <h2>Interactive Box Model</h2>
  <div class="interactive-box">
    Hover over me! <br> (Watch Padding and Border grow, but total size remains!)
  </div>

</body>
</html>
`,
    css: `/* style.css */

/* Global Box Sizing - Best Practice */
html {
  box-sizing: border-box; /* Sets default box model for HTML element */
}
*, *::before, *::after {
  box-sizing: inherit; /* All elements inherit box-sizing from HTML */
}

/* Base Body Styles */
body {
  font-family: 'Roboto', 'Khmer', sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f7f6; /* Light background */
  color: #333;
  line-height: 1.6;
}

h1, h2 {
  color: #2c3e50; /* Dark blue-gray */
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}

p {
  text-align: center;
  margin-bottom: 15px;
}

/* Container for Box Sizing Demos */
.container {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  justify-content: space-around;
  align-items: flex-start;
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff; /* White background */
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

/* Common Styles for Box Demos */
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid; /* Border color set in specific classes */
  margin: 20px; /* External space */
  text-align: center;
  line-height: 100px; /* Vertically center text if no padding/border*/
  font-weight: bold;
  color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 5px;
  flex-shrink: 0; /* Prevent shrinking in flex container */
}

/* Specific Box Sizing Demos */
.content-box-demo {
  box-sizing: content-box; /* This overrides the global border-box for demonstration */
  background-color: #e74c3c; /* Red */
  border-color: #c0392b; /* Darker red */
}

.border-box-demo {
  box-sizing: border-box; /* This is the same as the global setting but explicitly stated */
  background-color: #2ecc71; /* Green */
  border-color: #27ae60; /* Darker green */
}

/* Margin Collapsing Demo */
.margin-parent {
  background-color: #f8f9fa;
  border: 2px dashed #6c757d;
  padding: 15px;
  max-width: 400px;
  margin: 30px auto; /* Centered */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  text-align: center;
}

.margin-child {
  width: 150px;
  height: 70px;
  background-color: #a2d9ce; /* Light teal */
  border: 1px solid #1abc9c; /* Teal */
  text-align: center;
  line-height: 70px;
  font-weight: bold;
  color: #333;
  margin: 0 auto; /* Center children horizontally */
}

.top-margin {
  margin-bottom: 40px; /* Large bottom margin */
}

.bottom-margin {
  margin-top: 20px; /* Smaller top margin */
}

/* Interactive Box */
.interactive-box {
  width: 180px;
  height: 80px;
  background-color: #3498db; /* Blue */
  color: white;
  padding: 15px;
  border: 3px solid #2980b9; /* Darker blue */
  margin: 40px auto; /* Centered */
  text-align: center;
  line-height: 80px;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  transition: all 0.3s ease-in-out; /* Smooth transition for hover effect */
  box-sizing: border-box; /* Ensure it behaves as border-box */
}

.interactive-box:hover {
  background-color: #e67e22; /* Orange on hover */
  border-color: #d35400; /* Darker orange */
  padding: 25px; /* Increase padding */
  /* Notice how the total width and height remain 180px and 80px respectively
     because of box-sizing: border-box; Even with increased padding and border. */
}
`
  }
};

export default CSSLesson6_1Content;