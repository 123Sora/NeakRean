// src/components/lessons/css/CSSLesson5_7.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson5_7Content: LessonContent = {
  title: 'CSS Positioning (ការកំណត់ទីតាំងធាតុ)',
  objectives: [
    'ស្វែងយល់ពីគោលបំណងនៃ Property `position` និងតម្លៃរបស់វា។',
    'ដឹងពីរបៀបប្រើ `position: static;` និងឥរិយាបថលំនាំដើមរបស់វា។',
    'យល់ដឹងពី `position: relative;` និងការប្រើប្រាស់ `top`, `right`, `bottom`, `left`។',
    'ស្ទាត់ជំនាញក្នុងការប្រើ `position: absolute;` ទាក់ទងនឹង Parent ដែលកំណត់ទីតាំង។',
    'រៀនពីរបៀបធ្វើឱ្យ Elements ស្ថិតនៅនឹងកន្លែងជាមួយ `position: fixed;`។',
    'យល់ពី `position: sticky;` សម្រាប់ Header ឬ Navbar ដែលជាប់។',
    'ស្គាល់ពីការប្រើប្រាស់ Property `z-index` សម្រាប់ការត្រួតលើគ្នា (overlapping) នៃ Elements ។',
    'អាចអនុវត្តបច្ចេកទេសកំណត់ទីតាំងសម្រាប់ Layout និង Interactions ជាក់លាក់។'
  ],
  content: `
# CSS Positioning (ការកំណត់ទីតាំងធាតុ) 📍

---

**CSS Positioning** អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងទីតាំងច្បាស់លាស់នៃ Elements នៅលើទំព័រគេហទំព័រ។ វាត្រូវបានប្រើដើម្បីផ្លាស់ទី Elements ចេញពីលំហូរឯកសារធម្មតា (Normal Flow) ដែលខុសពីរបៀបដែល Floats ធ្វើការ។

Property \`position\` គឺជា Property សំខាន់ក្នុងការកំណត់ទីតាំង ហើយវាមានតម្លៃសំខាន់ៗចំនួនប្រាំ៖

1.  **\`static\`** (លំនាំដើម)
2.  **\`relative\`**
3.  **\`absolute\`**
4.  **\`fixed\`**
5.  **\`sticky\`**

---

## 1. \`position: static;\` (លំនាំដើម)

នេះគឺជាតម្លៃលំនាំដើមសម្រាប់ Elements ទាំងអស់។ Elements ដែលមាន \`position: static;\` ស្ថិតនៅក្នុងលំហូរធម្មតារបស់ឯកសារ ហើយមិនត្រូវបានប៉ះពាល់ដោយ Properties \`top\`, \`right\`, \`bottom\`, \`left\` ឬ \`z-index\` ឡើយ។

\`\`\`html
<style>
  .static-box {
    width: 100px;
    height: 50px;
    background-color: lightgray;
    border: 1px solid black;
    margin-bottom: 10px;
    /* top, left, etc. will have no effect here */
    top: 20px; /* This will not move the box */
  }
</style>
<div class="static-box">Static Box 1</div>
<div class="static-box">Static Box 2</div>
<p>These boxes are in the normal flow.</p>
\`\`\`

---

## 2. \`position: relative;\`

នៅពេល Element មួយត្រូវបានកំណត់ \`position: relative;\` វាត្រូវបានកំណត់ទីតាំងទាក់ទងនឹងទីតាំងធម្មតារបស់វា។ អ្នកអាចប្រើ Properties \`top\`, \`right\`, \`bottom\`, \`left\` ដើម្បីផ្លាស់ទីវាពីទីតាំងដើមរបស់វា។ ទោះបីជាវាត្រូវបានផ្លាស់ទីក៏ដោយ វានៅតែទុកកន្លែងទំនេរនៅក្នុងលំហូរធម្មតាដូចជាវាមិនត្រូវបានផ្លាស់ទីសោះ។

* **Uses:**
    * ការផ្លាស់ទី Elements បន្តិចបន្តួច។
    * ជា Parent Container សម្រាប់ Elements ដែលមាន \`position: absolute;\` ។

\`\`\`html
<style>
  .relative-box {
    width: 150px;
    height: 70px;
    background-color: lightblue;
    border: 2px solid blue;
    position: relative; /* Set to relative */
    top: 20px; /* Moves 20px down from its normal top position */
    left: 30px; /* Moves 30px right from its normal left position */
    margin-bottom: 30px; /* Add margin to account for relative movement */
  }
  .normal-sibling {
    background-color: lightgoldenrodyellow;
    padding: 10px;
  }
</style>
<div class="relative-box">Relative Box</div>
<div class="normal-sibling">
  <p>This content is a normal sibling. Notice that the relative box still occupies its original space, pushing this content down.</p>
</div>
\`\`\`

---

## 3. \`position: absolute;\`

Elements ដែលមាន \`position: absolute;\` ត្រូវបានដកចេញពីលំហូរធម្មតារបស់ឯកសារទាំងស្រុង។ ពួកវាត្រូវបានកំណត់ទីតាំងទាក់ទងនឹង **Parent Element ដែលនៅជិតបំផុតរបស់វាដែលមាន \`position\` ណាមួយក្រៅពី \`static\`** ។ ប្រសិនបើគ្មាន Parent Element ណាដែលមាន \`position\` ផ្សេងក្រៅពី \`static\` ទេនោះ វាត្រូវបានកំណត់ទីតាំងទាក់ទងនឹង \`<body>\` Element ។

* **Uses:**
    * Overlay Elements (Popups, Tooltips).
    * Placing Icons inside Inputs.
    * Complex Layouts where elements need to overlap or be placed precisely.

\`\`\`html
<style>
  .parent-relative {
    position: relative; /* This is the positioning context for absolute children */
    width: 300px;
    height: 200px;
    border: 2px dashed green;
    padding: 20px;
    margin: 50px auto;
    background-color: #e0ffe0;
  }

  .absolute-child {
    position: absolute; /* Absolute positioning */
    width: 80px;
    height: 80px;
    background-color: #ffcc00; /* Yellow */
    border: 1px solid orange;
    text-align: center;
    line-height: 80px;
    color: #333;
  }

  .top-left {
    top: 0;
    left: 0;
  }

  .bottom-right {
    bottom: 10px; /* 10px from parent's bottom */
    right: 10px;  /* 10px from parent's right */
  }

  .center-absolute {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centering trick */
  }
</style>

<div class="parent-relative">
  <p>This is a relatively positioned parent.</p>
  <div class="absolute-child top-left">Top-Left</div>
  <div class="absolute-child bottom-right">Bottom-Right</div>
  <div class="absolute-child center-absolute">Center</div>
</div>
<p>This content is in the normal flow and is not affected by the absolute children.</p>
\`\`\`

---

## 4. \`position: fixed;\`

Elements ដែលមាន \`position: fixed;\` ត្រូវបានដកចេញពីលំហូរធម្មតា ហើយត្រូវបានកំណត់ទីតាំងទាក់ទងនឹង **Viewport** របស់ Browser ។ ពួកវានឹងនៅតែស្ថិតនៅកន្លែងដដែល ទោះបីជាអ្នក Scroll ទំព័រឡើងចុះក៏ដោយ។

* **Uses:**
    * Fixed Navigation Bars (Header/Footer).
    * "Go to Top" Buttons.
    * Floating Social Share Buttons.

\`\`\`html
<style>
  .fixed-header {
    position: fixed; /* Fixed positioning */
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: white;
    padding: 10px 0;
    text-align: center;
    z-index: 1000; /* Ensure it stays on top */
  }
  .fixed-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #28a745;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 0.9em;
    z-index: 1000;
  }
  body {
    margin-top: 50px; /* Add margin to body to prevent content from hiding behind fixed header */
    height: 1500px; /* To enable scrolling */
  }
  .content-filler {
    padding: 20px;
    text-align: center;
    background-color: #f0f0f0;
    margin-top: 60px; /* Ensure content is below header */
  }
</style>

<div class="fixed-header">
  <h2>Fixed Header Example</h2>
</div>

<div class="content-filler">
  <p>Scroll down to see the fixed header and button in action!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <p>Keep scrolling... The header and button stay put.</p>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <p>End of content.</p>
</div>

<a href="#" class="fixed-button">Go to Top</a>
\`\`\`

---

## 5. \`position: sticky;\`

Elements ដែលមាន \`position: sticky;\` ត្រូវបានកំណត់ទីតាំងផ្អែកលើទីតាំង Scroll របស់អ្នកប្រើប្រាស់។ Element នឹងប្រព្រឹត្តដូចជា \`position: relative;\` រហូតដល់វាឈានដល់ Threshold ដែលបានកំណត់ (ឧទាហរណ៍ \`top: 0;\`) នៅចំណុចនោះ វា "ជាប់" ទៅនឹង Viewport ដូចជា \`position: fixed;\` ។

* **Uses:**
    * Sticky Navigation Bars.
    * Headers that stick to the top when scrolled past.
    * Sidebar sections that remain visible.

\`\`\`html
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    height: 1800px; /* To enable scrolling */
    background-color: #f9f9f9;
  }
  .sticky-nav {
    position: sticky; /* Sticky positioning */
    top: 0; /* Sticks to the top of the viewport when scrolled past */
    background-color: #f1f1f1;
    padding: 10px;
    border-bottom: 2px solid #ccc;
    text-align: center;
    z-index: 900; /* Lower than fixed elements if any */
  }
  .section {
    height: 400px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: white;
    border: 1px solid #ddd;
    text-align: center;
  }
  .section:nth-child(even) {
    background-color: #e6f7ff;
  }
</style>

<div class="sticky-nav">
  <h3>Sticky Navigation Bar (Scroll Down!)</h3>
</div>

<div class="section">
  <p>This is the first section of content.</p>
  <p>The sticky navigation bar will appear at the top once you scroll past its initial position.</p>
</div>
<div class="section">
  <p>This is the second section.</p>
  <p>The sticky element remains visible at the top as you continue to scroll.</p>
</div>
<div class="section">
  <p>This is the third section.</p>
  <p>It acts like relative until it hits the 'top' threshold, then like fixed.</p>
</div>
<div class="section">
  <p>This is the fourth section.</p>
  <p>Continue scrolling to observe the sticky behavior.</p>
</div>
\`\`\`

---

## 6. \`z-index\` Property

Property \`z-index\` គ្រប់គ្រងលំដាប់ជង់ (stacking order) នៃ Elements ដែលមានទីតាំង។ Element ដែលមាន \`z-index\` ខ្ពស់ជាងនឹងបង្ហាញនៅពីលើ Element ដែលមាន \`z-index\` ទាបជាង។ វាដំណើរការតែលើ Elements ដែលមាន \`position\` ខុសពី \`static\` ប៉ុណ្ណោះ។

* **Higher \`z-index\` = Higher on stack.**
* \`z-index\` អាចជាលេខវិជ្ជមាន ឬអវិជ្ជមាន។
* Parent/Child \`z-index\`: Child Element នឹងមិនអាចត្រូវបានដាក់ខ្ពស់ជាង Parent របស់វាបានទេ ទោះបីជាវាមាន \`z-index\` ខ្ពស់ជាងក៏ដោយ ប្រសិនបើ Parent នោះមាន Stacking Context ផ្ទាល់ខ្លួន។

\`\`\`html
<style>
  .z-container {
    position: relative; /* Create a stacking context */
    width: 300px;
    height: 200px;
    border: 2px dashed gray;
    margin: 30px;
    background-color: #f5f5f5;
  }

  .overlapping-box {
    width: 150px;
    height: 100px;
    position: absolute;
    text-align: center;
    line-height: 100px;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
  }

  .box-a {
    background-color: #e74c3c; /* Red */
    top: 20px;
    left: 20px;
    z-index: 1; /* Default if not specified, or lower */
  }

  .box-b {
    background-color: #3498db; /* Blue */
    top: 50px;
    left: 50px;
    z-index: 2; /* This will be on top of Box A */
  }

  .box-c {
    background-color: #2ecc71; /* Green */
    top: 80px;
    left: 80px;
    z-index: 3; /* This will be on top of Box B and A */
  }
</style>

<div class="z-container">
  <div class="overlapping-box box-a">Box A (z-index: 1)</div>
  <div class="overlapping-box box-b">Box B (z-index: 2)</div>
  <div class="overlapping-box box-c">Box C (z-index: 3)</div>
</div>
\`\`\`

---
> **គន្លឹះ:** ការយល់ដឹងពី Positioning គឺមានសារៈសំខាន់សម្រាប់ការបង្កើត User Interface (UI) ដែលទាក់ទាញ និងអន្តរកម្ម។ ទោះជាយ៉ាងណាក៏ដោយ សម្រាប់ Layout ទូទៅ វាត្រូវបានណែនាំឱ្យប្រើ **Flexbox** និង **CSS Grid** មុននឹងងាកទៅរក Positioning ព្រោះពួកវាផ្តល់នូវវិធីសាស្ត្រដែលមានលក្ខណៈរឹងមាំ និងងាយស្រួលគ្រប់គ្រងជាងសម្រាប់ Layout រួម។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ CSS Positioning</h3>
<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  background-color: #f0f2f5;
  line-height: 1.6;
  min-height: 1500px; /* For fixed/sticky demo */
}
section {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  margin-bottom: 40px;
  padding: 25px;
  position: relative; /* For nested absolute elements */
}
h4 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-top: 0;
}
p {
  color: #555;
}

/* Example 1: Relative Positioning */
.relative-example .box {
  width: 100px;
  height: 60px;
  background-color: #a2d9ce; /* Light teal */
  border: 1px solid #1abc9c; /* Teal */
  text-align: center;
  line-height: 60px;
  margin-bottom: 10px;
}
.relative-example .moved-box {
  position: relative;
  top: 15px;
  left: 30px;
  background-color: #85c1e9; /* Light blue */
  border-color: #3498db; /* Blue */
}

/* Example 2: Absolute Positioning */
.absolute-example {
  height: 250px; /* Define height for parent */
  border: 2px dashed #f39c12; /* Orange */
  background-color: #fff9e0;
}
.absolute-element {
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: #f1c40f; /* Yellow */
  border: 1px solid #e67e22; /* Darker orange */
  text-align: center;
  line-height: 70px;
  color: #333;
}
.absolute-element.top-right {
  top: 10px;
  right: 10px;
}
.absolute-element.bottom-left {
  bottom: 10px;
  left: 10px;
}

/* Example 3: Fixed Positioning */
.fixed-scroll-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #27ae60; /* Green */
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9em;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
.fixed-scroll-button:hover {
  background-color: #229954;
}

/* Example 4: Sticky Positioning */
.sticky-header {
  position: sticky;
  top: 0;
  background-color: #d1ecf1; /* Light cyan */
  padding: 15px;
  border-bottom: 2px solid #bee5eb;
  text-align: center;
  font-weight: bold;
  z-index: 999;
}
.sticky-content {
  height: 300px; /* Make sections long enough to scroll */
  background-color: #ecf0f1;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}
</style>

<section class="relative-example">
  <h4>Relative Positioning (ទីតាំងធៀប)</h4>
  <p>Element ខាងក្រោមត្រូវបានកំណត់ទីតាំងធៀបនឹងទីតាំងធម្មតារបស់វា។</p>
  <div class="box">Original Position</div>
  <div class="box moved-box">Moved (Relative)</div>
  <div class="box">Another Box (Normal Flow)</div>
</section>

<section class="absolute-example">
  <h4>Absolute Positioning (ទីតាំងដាច់ខាត)</h4>
  <p>Element ខាងក្នុងនេះត្រូវបានកំណត់ទីតាំងដាច់ខាតទាក់ទងនឹង Parent Section នេះ។</p>
  <div class="absolute-element top-right">Top-Right</div>
  <div class="absolute-element bottom-left">Bottom-Left</div>
</section>

<section>
  <h4>Fixed Positioning (ទីតាំងថេរ)</h4>
  <p>ប៊ូតុង "Scroll Top" នៅខាងស្តាំក្រោមអេក្រង់នឹងនៅតែថេរ ទោះបីជាអ្នក Scroll ក៏ដោយ។</p>
  <p>Scroll ចុះក្រោមដើម្បីមើលឥទ្ធិពល។</p>
  <a href="#" class="fixed-scroll-button">Scroll Top ⬆️</a>
</section>

<section>
  <h4>Sticky Positioning (ទីតាំងជាប់)</h4>
  <p>Header ខាងក្រោមនេះនឹង "ជាប់" នៅផ្នែកខាងលើនៃអេក្រង់នៅពេលអ្នក Scroll ដល់វា។</p>
  <div class="sticky-header">
    Sticky Section Header
  </div>
  <div class="sticky-content">Content for Sticky Section 1</div>
  <div class="sticky-content">Content for Sticky Section 2</div>
  <div class="sticky-content">Content for Sticky Section 3</div>
</section>
`
  ],
  quiz: [
    {
      question: 'តើ Property CSS មួយណាដែលត្រូវបានប្រើដើម្បីគ្រប់គ្រងទីតាំងច្បាស់លាស់នៃ Elements?',
      options: [
        '`display`',
        '`float`',
        '`position`',
        '`align-items`'
      ],
      correct: 2,
      explanation: 'Property `position` ត្រូវបានប្រើដើម្បីគ្រប់គ្រងទីតាំងច្បាស់លាស់នៃ Elements នៅលើទំព័រគេហទំព័រ។'
    },
    {
      question: 'តើតម្លៃលំនាំដើមនៃ Property `position` គឺអ្វី?',
      options: [
        '`relative`',
        '`absolute`',
        '`static`',
        '`fixed`'
      ],
      correct: 2,
      explanation: 'តម្លៃលំនាំដើមសម្រាប់ Elements ទាំងអស់គឺ `static`។'
    },
    {
      question: 'តើ Elements ដែលមាន `position: static;` ត្រូវបានប៉ះពាល់ដោយ Properties `top`, `right`, `bottom`, `left` ដែរឬទេ?',
      options: [
        'បាទ/ចាស៎ ពួកវាត្រូវបានប៉ះពាល់ជានិច្ច',
        'ទេ ពួកវាមិនត្រូវបានប៉ះពាល់ឡើយ',
        'តែនៅពេលដែល Element ត្រូវបាន Floating ប៉ុណ្ណោះ',
        'តែនៅពេលដែល Browser គាំទ្រ CSS Grid ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'Elements ដែលមាន `position: static;` ស្ថិតនៅក្នុងលំហូរធម្មតារបស់ឯកសារ ហើយមិនត្រូវបានប៉ះពាល់ដោយ Properties `top`, `right`, `bottom`, `left` ឡើយ។'
    },
    {
      question: 'តើ `position: relative;` កំណត់ទីតាំង Element ទាក់ទងនឹងអ្វី?',
      options: [
        'គែមរបស់ Browser Viewport',
        'Parent Element ដែលនៅជិតបំផុតរបស់វាដែលមាន `position` ណាមួយក្រៅពី `static`',
        'ទីតាំងធម្មតាដើមរបស់វា',
        'មាតិកាអត្ថបទនៅជុំវិញវា'
      ],
      correct: 2,
      explanation: 'Element ដែលមាន `position: relative;` ត្រូវបានកំណត់ទីតាំងទាក់ទងនឹងទីតាំងធម្មតាដើមរបស់វា។'
    },
    {
      question: 'នៅពេល Element មួយត្រូវបានកំណត់ `position: relative;` តើវានៅតែទុកកន្លែងទំនេរនៅក្នុងលំហូរធម្មតាដែរឬទេ?',
      options: [
        'ទេ វាមិនទុកកន្លែងទំនេរឡើយ',
        'បាទ/ចាស៎ វានៅតែទុកកន្លែងទំនេរដូចជាវាមិនត្រូវបានផ្លាស់ទីសោះ',
        'វាអាស្រ័យលើ `margin` Property',
        'តែនៅពេលដែលវាមាន `width: 100%;` ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'បាទ/ចាស៎ ទោះបីជា Element ដែលមាន `position: relative;` ត្រូវបានផ្លាស់ទីក៏ដោយ វានៅតែទុកកន្លែងទំនេរនៅក្នុងលំហូរធម្មតាដូចជាវាមិនត្រូវបានផ្លាស់ទីសោះ។'
    },
    {
      question: 'តើ `position: absolute;` កំណត់ទីតាំង Element ទាក់ទងនឹងអ្វី?',
      options: [
        'គែមរបស់ Browser Viewport',
        'Parent Element ដែលនៅជិតបំផុតរបស់វាដែលមាន `position` ណាមួយក្រៅពី `static`',
        'ទីតាំងធម្មតាដើមរបស់វា',
        'បងប្អូនប្រុសស្រី (Sibling Elements) របស់វា'
      ],
      correct: 1,
      explanation: 'Elements ដែលមាន `position: absolute;` ត្រូវបានកំណត់ទីតាំងទាក់ទងនឹង Parent Element ដែលនៅជិតបំផុតរបស់វាដែលមាន `position` ណាមួយក្រៅពី `static` ។'
    },
    {
      question: 'តើមានអ្វីកើតឡើងប្រសិនបើ Element ដែលមាន `position: absolute;` មិនមាន Parent Element ណាដែលមាន `position` ផ្សេងក្រៅពី `static`?',
      options: [
        'វានឹងមិនបង្ហាញនៅលើទំព័រឡើយ',
        'វានឹងត្រូវបានកំណត់ទីតាំងទាក់ទងនឹង `<body>` Element',
        'វានឹងប្រព្រឹត្តដូចជា `position: relative;`',
        'Browser នឹងបង្ហាញ Error'
      ],
      correct: 1,
      explanation: 'ប្រសិនបើគ្មាន Parent Element ណាដែលមាន `position` ផ្សេងក្រៅពី `static` ទេ Element ដែលមាន `position: absolute;` ត្រូវបានកំណត់ទីតាំងទាក់ទងនឹង `<body>` Element ។'
    },
    {
      question: 'តើ `position: fixed;` កំណត់ទីតាំង Element ទាក់ទងនឹងអ្វី?',
      options: [
        'Parent Element ដែលនៅជិតបំផុតរបស់វា',
        'គែមរបស់ Browser Viewport',
        'ទីតាំងធម្មតាដើមរបស់វា',
        'មាតិកានៃឯកសារ'
      ],
      correct: 1,
      explanation: 'Elements ដែលមាន `position: fixed;` ត្រូវបានកំណត់ទីតាំងទាក់ទងនឹង Viewport របស់ Browser ហើយវានឹងនៅតែស្ថិតនៅកន្លែងដដែល ទោះបីជាអ្នក Scroll ទំព័រឡើងចុះក៏ដោយ។'
    },
    {
      question: 'តើ Property មួយណាដែលត្រូវបានប្រើដើម្បីគ្រប់គ្រងលំដាប់ជង់ (stacking order) នៃ Elements ដែលមានទីតាំង?',
      options: [
        '`order`',
        '`level`',
        '`z-index`',
        '`depth`'
      ],
      correct: 2,
      explanation: 'Property `z-index` គ្រប់គ្រងលំដាប់ជង់ (stacking order) នៃ Elements ដែលមានទីតាំង។ Element ដែលមាន `z-index` ខ្ពស់ជាងនឹងបង្ហាញនៅពីលើ Element ដែលមាន `z-index` ទាបជាង។'
    },
    {
      question: 'តើ `z-index` ដំណើរការលើ Elements ដែលមាន `position: static;` ដែរឬទេ?',
      options: [
        'បាទ/ចាស៎ វាតែងតែដំណើរការ',
        'ទេ វាមិនដំណើរការឡើយ',
        'តែនៅពេលដែល Element ត្រូវបានលាក់ប៉ុណ្ណោះ',
        'តែនៅពេលដែលវាមាន `width` ជាក់លាក់ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'ទេ `z-index` ដំណើរការតែលើ Elements ដែលមាន `position` ខុសពី `static` ប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ `position: sticky;` ប្រព្រឹត្តដូចជា `position: relative;` រហូតដល់ពេលណា?',
      options: [
        'រហូតដល់ Browser ត្រូវបានបិទ',
        'រហូតដល់វាឈានដល់ Threshold ដែលបានកំណត់ (ឧទាហរណ៍ `top: 0;`) នៅចំណុចនោះ វា "ជាប់" ទៅនឹង Viewport ដូចជា `position: fixed;`',
        'រហូតដល់វាត្រូវបានចុច',
        'រហូតដល់វាត្រូវបានលាក់'
      ],
      correct: 1,
      explanation: 'Element ដែលមាន `position: sticky;` នឹងប្រព្រឹត្តដូចជា `position: relative;` រហូតដល់វាឈានដល់ Threshold ដែលបានកំណត់ (ឧទាហរណ៍ `top: 0;`) នៅចំណុចនោះ វា "ជាប់" ទៅនឹង Viewport ដូចជា `position: fixed;` ។'
    },
    {
      question: 'តើ `position: sticky;` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីខ្លះ?',
      options: [
        'សម្រាប់បង្កើត Pop-up Windows តែប៉ុណ្ណោះ',
        'សម្រាប់ Fixed Navigation Bars, Headers ដែលជាប់ ឬ Sidebar sections ដែលនៅតែអាចមើលឃើញនៅពេល Scrolling',
        'សម្រាប់ Animations 2D',
        'សម្រាប់ផ្លាស់ប្តូរទំហំរូបភាព'
      ],
      correct: 1,
      explanation: '`position: sticky;` ត្រូវបានប្រើសម្រាប់ Fixed Navigation Bars, Headers ដែលជាប់ ឬ Sidebar sections ដែលនៅតែអាចមើលឃើញនៅពេល Scrolling ។'
    },
    {
      question: 'ប្រសិនបើ Parent Element មួយមាន `z-index: 5` និង Child Element របស់វាមាន `z-index: 10` តើ Child Element អាចបង្ហាញនៅពីលើ Parent របស់វាបានដែរឬទេ?',
      options: [
        'បាទ/ចាស៎ ជានិច្ច',
        'ទេ វាមិនអាចទេ ប្រសិនបើ Parent នោះមាន Stacking Context ផ្ទាល់ខ្លួន',
        'តែក្នុង Chrome ប៉ុណ្ណោះ',
        'តែប្រសិនបើ Child ត្រូវបាន Floating ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'ទេ Child Element នឹងមិនអាចត្រូវបានដាក់ខ្ពស់ជាង Parent របស់វាបានទេ ទោះបីជាវាមាន `z-index` ខ្ពស់ជាងក៏ដោយ ប្រសិនបើ Parent នោះបង្កើត Stacking Context ផ្ទាល់ខ្លួន។'
    },
    {
      question: 'តើ Properties មួយណាដែលជា "Offset Properties" ដែលប្រើជាមួយ Positioning?',
      options: [
        '`width`, `height`',
        '`margin`, `padding`',
        '`font-size`, `color`',
        '`top`, `right`, `bottom`, `left`'
      ],
      correct: 3,
      explanation: 'Properties `top`, `right`, `bottom`, `left` គឺជា Offset Properties ដែលត្រូវបានប្រើដើម្បីផ្លាស់ទី Elements ដែលមាន Positioned (មិនមែន `static`)។'
    },
    {
      question: 'តើការប្រើប្រាស់ `position: absolute;` ល្អបំផុតសម្រាប់ករណីណា?',
      options: [
        'ការបង្កើត Layout Columns',
        'ការដាក់ Icons នៅខាងក្នុង Inputs ឬ Overlays (Popups)',
        'ការធ្វើឱ្យ Navigation Bar នៅជាប់នឹងកំពូលទំព័រជានិច្ច',
        'ការផ្លាស់ទីអត្ថបទបន្តិចបន្តួចពីទីតាំងធម្មតា'
      ],
      correct: 1,
      explanation: '`position: absolute;` ល្អបំផុតសម្រាប់ការដាក់ Icons នៅខាងក្នុង Inputs ឬ Overlays (Popups) ដែលត្រូវការទីតាំងច្បាស់លាស់ ដោយមិនប៉ះពាល់ដល់លំហូរឯកសារ។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នាសំខាន់រវាង `position: fixed;` និង `position: sticky;`?',
      options: [
        '`fixed` ដំណើរការតែលើទូរស័ព្ទដៃប៉ុណ្ណោះ ចំណែក `sticky` ដំណើរការលើ Desktop',
        '`fixed` ជាប់នឹង Viewport ជានិច្ច ចំណែក `sticky` ជាប់នៅពេលដែលវាឈានដល់ Threshold Scroll',
        '`fixed` ត្រូវបានដកចេញពីលំហូរធម្មតា ចំណែក `sticky` មិនត្រូវបានដកចេញទេ',
        'គ្មានភាពខុសគ្នាទេ ពួកវាដូចគ្នា'
      ],
      correct: 1,
      explanation: '`fixed` ត្រូវបានកំណត់ទីតាំងទាក់ទងនឹង Viewport ហើយនៅតែថេរនៅពេល Scroll ។ `sticky` ប្រព្រឹត្តដូច `relative` រហូតដល់វាឈានដល់ Offset ដែលបានកំណត់ (ឧទាហរណ៍ `top: 0`) បន្ទាប់មកវា "ជាប់" ដូច `fixed` ។'
    },
    {
      question: 'ហេតុអ្វីបានជាវាត្រូវបានណែនាំឱ្យប្រើ Flexbox និង CSS Grid មុននឹងងាកទៅរក Positioning សម្រាប់ Layout ទូទៅ?',
      options: [
        'Flexbox និង Grid មិនមានបញ្ហា Compatibility ជាមួយ Browser ទេ',
        'Flexbox និង Grid គឺពិបាករៀនជាង',
        'Flexbox និង Grid ផ្តល់នូវវិធីសាស្ត្រដែលមានលក្ខណៈរឹងមាំ អាចទាយទុកមុនបាន និងងាយស្រួលគ្រប់គ្រងជាងសម្រាប់ Layout រួម',
        'Positioning មិនអាចត្រូវបានប្រើសម្រាប់ Layout ទេ'
      ],
      correct: 2,
      explanation: 'Flexbox និង CSS Grid ត្រូវបានរចនាឡើងសម្រាប់ការរៀបចំប្លង់ទូទៅ ហើយផ្តល់នូវការគ្រប់គ្រងដែលប្រសើរជាង ភាពបត់បែន និងភាពងាយស្រួលក្នុងការគ្រប់គ្រង Layout ដែលស្មុគស្មាញ បើប្រៀបធៀបទៅនឹង Positioning ។'
    },
    {
      question: 'តើ `z-index` មួយណាដែលនឹងបង្ហាញនៅពីមុខគេ: `z-index: -1`, `z-index: 0`, `z-index: 5`?',
      options: [
        '`z-index: -1`',
        '`z-index: 0`',
        '`z-index: 5`',
        'ពួកវាទាំងអស់នឹងបង្ហាញនៅកម្រិតដូចគ្នា។'
      ],
      correct: 2,
      explanation: 'Element ដែលមាន `z-index` ខ្ពស់ជាងនឹងបង្ហាញនៅពីលើ Element ដែលមាន `z-index` ទាបជាង។ ដូច្នេះ `z-index: 5` នឹងនៅពីមុខគេ។'
    },
    {
      question: 'តើ `top: 0; left: 0;` ធ្វើអ្វីចំពោះ Element ដែលមាន `position: fixed;`?',
      options: [
        'ដាក់ Element នៅចំកណ្តាលទំព័រ',
        'ដាក់ Element នៅកំពូលឆ្វេងនៃ Parent Container របស់វា',
        'ដាក់ Element នៅកំពូលឆ្វេងនៃ Browser Viewport',
        'ដាក់ Element នៅបាតស្តាំនៃទំព័រ'
      ],
      correct: 2,
      explanation: 'សម្រាប់ Element ដែលមាន `position: fixed;` `top: 0; left: 0;` នឹងដាក់វាទៅកំពូលឆ្វេងនៃ Browser Viewport ហើយវានឹងនៅទីនោះនៅពេល Scroll ។'
    },
    {
      question: 'តើ `position: relative;` អាចត្រូវបានប្រើជា "Positioning Context" សម្រាប់ `position: absolute;` បានដែរឬទេ?',
      options: [
        'ទេ មិនអាចទេ',
        'បាទ/ចាស៎ វាជាការប្រើប្រាស់ទូទៅបំផុតមួយ',
        'តែប្រសិនបើ Parent នោះជា `div` ប៉ុណ្ណោះ',
        'តែក្នុង IE តែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'បាទ/ចាស៎ `position: relative;` គឺជាវិធីសាស្ត្រទូទៅបំផុតក្នុងការបង្កើត "Positioning Context" សម្រាប់ Child Elements ដែលមាន `position: absolute;` ។'
    },
    {
      question: 'តើតម្លៃ `left: 20px;` ជាមួយ `position: relative;` ផ្លាស់ទី Element ទៅទិសណា?',
      options: [
        '20px ទៅឆ្វេង',
        '20px ទៅស្តាំ',
        '20px ទៅខាងក្រោម',
        '20px ទៅខាងលើ'
      ],
      correct: 1,
      explanation: '`left: 20px;` ជាមួយ `position: relative;` ផ្លាស់ទី Element 20px ទៅខាងស្តាំពីទីតាំងធម្មតាដើមរបស់វា។ ស្រមៃថាអ្នកកំពុងប្រាប់វាថា "ពីទីតាំងធម្មតាដើមរបស់ឯង ត្រូវផ្លាស់ទី ២០px ពីគែមឆ្វេង"។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធដូចខាងក្រោម៖

1.  **HTML Structure (\`index.html\`):**
    * ត្រូវមាន \`<!DOCTYPE html>\`, \`<html>\`, \`<head>\`, និង \`<body>\` ។
    * **External CSS:** ភ្ជាប់ទៅឯកសារ CSS ខាងក្រៅ (\`style.css\`) ក្នុង \`<head>\` ។
    * **Header:** \`<header>\` ជាមួយ \`<h1>\` Title សម្រាប់ Fixed Header ។
    * **Main Content:**
        * \`<div class="content-section">\` ចំនួន 3 (មាន Paragraph វែងៗ ដើម្បីបង្កឱ្យមាន Scroll) ។
    * **Sticky Element:**
        * \`<div class="sticky-promo">\` នៅចន្លោះ \`content-section\` ទី 1 និងទី 2 ។ ត្រូវមាន \`<h2>\` ។
    * **Parent for Absolute:**
        * \`<div class="absolute-parent">\` (នៅខាងក្នុង \`content-section\` ទី 3) ។
        * ខាងក្នុង \`absolute-parent\` បង្កើត \`<div class="absolute-box">\` ចំនួន 2 ។
    * **Fixed Button:**
        * \`<a href="#" class="fixed-scroll-top-btn">\` នៅផ្នែកខាងក្រោមស្តាំនៃទំព័រ។

2.  **CSS Styling (\`style.css\`):**

    * **Global Styles:** \`body\` (padding-top, font-family, margin, min-height for scrolling) ។
    * **Fixed Header:**
        * \`.fixed-header\`: \`position: fixed;\`, \`top: 0;\`, \`left: 0;\`, \`width: 100%;\`, \`background-color\`, \`color\`, \`padding\`, \`text-align\`, \`z-index\` ។
    * **Content Sections:**
        * \`.content-section\`: \`padding\`, \`margin-bottom\`, \`background-color\`, \`border\`, \`border-radius\`, \`box-shadow\`, \`min-height\` (e.g., 400px) ។
    * **Sticky Promotion:**
        * \`.sticky-promo\`: \`position: sticky;\`, \`top: 60px;\` (or similar, below fixed header), \`background-color\`, \`padding\`, \`text-align\`, \`border\`, \`z-index\` ។
    * **Absolute Positioning:**
        * \`.absolute-parent\`: \`position: relative;\`, \`height\` (e.g., 200px), \`border\`, \`background-color\`, \`margin-top\` ។
        * \`.absolute-box\`: \`position: absolute;\`, \`width\`, \`height\`, \`background-color\`, \`border\`, \`text-align\`, \`line-height\` ។
        * កំណត់ទីតាំង \`absolute-box\` ទី 1 ទៅកំពូលឆ្វេង (\`top: 10px; left: 10px;\`) ។
        * កំណត់ទីតាំង \`absolute-box\` ទី 2 ទៅបាតស្តាំ (\`bottom: 10px; right: 10px;\`) ។
        * ប្រើ \`z-index\` ដើម្បីឱ្យ \`absolute-box\` ទី 2 នៅពីលើទី 1 (ឧ. \`z-index: 2;\`) ។
    * **Fixed Scroll Top Button:**
        * \`.fixed-scroll-top-btn\`: \`position: fixed;\`, \`bottom: 20px;\`, \`right: 20px;\`, \`background-color\`, \`color\`, \`padding\`, \`border-radius\`, \`text-decoration\`, \`z-index\` ។

**ការណែនាំ:**
* ត្រូវប្រាកដថា \`<body>\` មាន \`min-height\` គ្រប់គ្រាន់ដើម្បីឱ្យអ្នកអាច Scroll បាន។
* ប្រើ \`z-index\` ដើម្បីគ្រប់គ្រងលំដាប់ជង់នៃ Elements ដែលត្រួតលើគ្នា។
* សាកល្បងដោយការ Scroll ទំព័រឡើងចុះដើម្បីមើលឥទ្ធិពល Fixed និង Sticky ។
    `,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Positioning Lab</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

  <header class="fixed-header">
    <h1>Fixed Website Header</h1>
  </header>

  <main>
    <div class="content-section">
      <h2>Section One: Introduction</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>This section is designed to provide enough content to make the page scrollable, allowing you to observe the effects of fixed and sticky positioning.</p>
      <p>Please scroll down to see the sticky navigation and fixed button in action. Notice how the content flows normally, but some elements are taken out of the normal flow for specific positioning purposes.</p>
    </div>

    <div class="sticky-promo">
      <h2>Sticky Promotion: Scroll Past Me!</h2>
      <p>This element will stick to the top of the viewport once you scroll past its initial position.</p>
    </div>

    <div class="content-section">
      <h2>Section Two: More Content</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p>The fixed header remains visible at the very top, and the sticky element will join it when its threshold is met.</p>
    </div>

    <div class="content-section">
      <h2>Section Three: Absolute Positioning Example</h2>
      <p>This section contains a parent container for absolute positioned elements.</p>
      <div class="absolute-parent">
        <p>This is the relative parent container. Absolute children will be positioned relative to this box.</p>
        <div class="absolute-box box-1">Box 1 (Top-Left, z-index: 1)</div>
        <div class="absolute-box box-2">Box 2 (Bottom-Right, z-index: 2)</div>
      </div>
      <p style="margin-top: 220px;">Content after the absolute parent. Notice how the absolute boxes do not affect the normal flow of this paragraph.</p>
    </div>

  </main>

  <a href="#" class="fixed-scroll-top-btn">Scroll to Top ⬆️</a>

</body>
</html>
`,
    css: `/* style.css */

/* Global Styles */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding-top: 50px; /* Space for fixed header */
  background-color: #f8f9fa;
  line-height: 1.6;
  min-height: 1800px; /* Ensure enough height for scrolling */
  color: #333;
}

h1, h2 {
  color: #2c3e50;
}

/* Fixed Header */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #34495e; /* Dark blue-gray */
  color: white;
  padding: 10px 0;
  text-align: center;
  z-index: 1000; /* Ensure it's on top of other content */
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.fixed-header h1 {
  margin: 0;
  font-size: 1.8em;
}

/* Content Sections */
.content-section {
  background-color: white;
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  min-height: 400px; /* Make sections tall for scrolling effect */
}

/* Sticky Promotion */
.sticky-promo {
  position: sticky;
  top: 50px; /* Sticks just below the fixed header */
  background-color: #d1ecf1; /* Light cyan */
  padding: 15px;
  margin: 20px auto;
  max-width: 800px;
  border: 1px solid #bee5eb;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  z-index: 900; /* Lower than fixed header */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.sticky-promo h2 {
    margin-top: 0;
    font-size: 1.5em;
    color: #0056b3;
}

/* Absolute Positioning Parent */
.absolute-parent {
  position: relative; /* Crucial for absolute children positioning */
  height: 200px; /* Define height to contain absolute children */
  border: 2px dashed #f39c12; /* Orange dashed border */
  background-color: #fff9e0; /* Light yellow background */
  margin-top: 30px;
  padding: 15px;
  border-radius: 5px;
  overflow: hidden; /* To prevent absolute elements from "overflowing" parent visually */
}

/* Absolute Boxes */
.absolute-box {
  position: absolute;
  width: 120px;
  height: 80px;
  background-color: #f1c40f; /* Yellow */
  border: 1px solid #e67e22; /* Darker orange */
  text-align: center;
  line-height: 80px;
  color: #333;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.absolute-box.box-1 {
  top: 10px;
  left: 10px;
  z-index: 1;
}

.absolute-box.box-2 {
  bottom: 10px;
  right: 10px;
  background-color: #e74c3c; /* Red */
  border-color: #c0392b; /* Darker red */
  z-index: 2; /* Box 2 will be on top of Box 1 if they overlap */
}


/* Fixed Scroll to Top Button */
.fixed-scroll-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #28a745; /* Green */
  color: white;
  padding: 12px 20px;
  border-radius: 50px; /* Pill shape */
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  z-index: 1000; /* Ensure it's on top */
  transition: background-color 0.3s ease;
}

.fixed-scroll-top-btn:hover {
  background-color: #218838;
}
`
  }
};

export default CSSLesson5_7Content;