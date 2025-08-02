// src/components/lessons/css/CSSLesson4_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson4_1Content: LessonContent = {
  title: 'CSS Positioning (ការកំណត់ទីតាំង)',
  objectives: [
    'ស្វែងយល់ពីគោលបំណងនៃ Property `position`',
    'ដឹងពីលក្ខណៈសម្បត្តិរបស់ `static` Positioning',
    'ស្គាល់ពីលក្ខណៈសម្បត្តិរបស់ `relative` Positioning',
    'យល់ដឹងពីរបៀបដែល `absolute` Positioning ដំណើរការ',
    'រៀនពីរបៀបដែល `fixed` Positioning រក្សា Element នៅនឹងកន្លែង',
    'ស្គាល់ពីលក្ខណៈសម្បត្តិរបស់ `sticky` Positioning',
    'អនុវត្តការប្រើប្រាស់ `position` property ផ្សេងៗគ្នា'
  ],
  content: `
# CSS Positioning (ការកំណត់ទីតាំង) 📍

---

 Property **\`position\`** នៅក្នុង CSS អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងទីតាំងច្បាស់លាស់របស់ Element នៅលើទំព័រ។ វាត្រូវបានប្រើជាមួយ Properties ដូចជា \`top\`, \`right\`, \`bottom\`, និង \`left\` ដើម្បីកំណត់ទីតាំងចុងក្រោយរបស់ Element ។

---

## 1. position: static (លំនាំដើម)

តម្លៃលំនាំដើមសម្រាប់ Property \`position\` គឺ \`static\` ។ Element ដែលមាន \`position: static;\` ត្រូវបានកំណត់ទីតាំងតាមលំហូរធម្មតានៃឯកសារ (Normal Flow)។ Properties \`top\`, \`right\`, \`bottom\`, និង \`left\` **មិនមានផលប៉ះពាល់** លើ Element Static ទេ។

\`\`\`css
/* Element Static */
.static-box {
  position: static; /* Default behavior, not usually declared explicitly */
  background-color: lightgray;
  padding: 10px;
  border: 1px solid #ccc;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  div {
    background-color: #f0f0f0;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ddd;
  }
  .static-element {
    position: static; /* Explicitly set, but default behavior */
    background-color: lightblue;
    width: 200px;
  }
</style>
<div>នេះជា Div ធម្មតា។</div>
<div class="static-element">នេះជា Div Static ។ (មិនផ្លាស់ប្តូរដោយ top/left)</div>
<div>នេះជា Div ធម្មតាផ្សេងទៀត។</div>
\`\`\`

---

## 2. position: relative

Element ដែលមាន \`position: relative;\` ត្រូវបានកំណត់ទីតាំងទាក់ទងទៅនឹងទីតាំងធម្មតារបស់វា។
* ការកំណត់ Properties \`top\`, \`right\`, \`bottom\`, និង \`left\` នឹងផ្លាស់ប្តូរទីតាំង Element ពីទីតាំងធម្មតារបស់វា។
* ទំហំដើមរបស់ Element នៅក្នុងលំហូរឯកសារ **នៅតែត្រូវបានរក្សាទុក** (វាទុកកន្លែងសម្រាប់ខ្លួនវានៅក្នុង Layout)។
* វាបង្កើត "context" សម្រាប់ Elements កូនដែលមាន \`position: absolute;\` ។

\`\`\`css
/* Element Relative */
.relative-box {
  position: relative;
  top: 20px;   /* Move 20px down from its normal position */
  left: 30px;  /* Move 30px right from its normal position */
  background-color: lightgreen;
  padding: 10px;
  border: 1px solid #99cc99;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  div {
    background-color: #f0f0f0;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ddd;
  }
  .relative-element {
    position: relative;
    top: 15px;
    left: 20px;
    background-color: lightgreen;
    width: 200px;
  }
</style>
<div>នេះជា Div ធម្មតា។</div>
<div class="relative-element">នេះជា Div Relative ។ (ផ្លាស់ប្តូរចុះ 15px, ទៅស្តាំ 20px)</div>
<div>នេះជា Div ធម្មតាផ្សេងទៀត។</div>
\`\`\`

---

## 3. position: absolute

Element ដែលមាន \`position: absolute;\` ត្រូវបានកំណត់ទីតាំងទាក់ទងទៅនឹង Parent Element ដែលមាន \`position: relative;\`, \`absolute;\`, \`fixed;\`, ឬ \`sticky;\` (Non-static ancestor) ដែលជិតបំផុត។
* ប្រសិនបើគ្មាន Parent Element ដែលមាន position ក្រៅពី \`static\` ទេ Element Absolute នឹងត្រូវបានកំណត់ទីតាំងទាក់ទងទៅនឹង \`<body>\` របស់ឯកសារ (ឬ Viewport) ។
* Element Absolute **ត្រូវបានដកចេញពីលំហូរធម្មតា** របស់ឯកសារ។ វានឹងមិនទុកកន្លែងសម្រាប់ខ្លួនវានៅក្នុង Layout ទេ ដែលអាចបណ្តាលឱ្យ Elements ផ្សេងទៀតបិទបាំងវា។

\`\`\`css
/* Parent Container (context for absolute child) */
.parent-relative {
  position: relative; /* Crucial for absolute child positioning */
  width: 300px;
  height: 150px;
  border: 2px dashed blue;
  padding: 20px;
  background-color: #e6f7ff;
}

/* Absolute Child Element */
.absolute-child {
  position: absolute;
  top: 10px;    /* 10px from the top of its relatively positioned parent */
  right: 10px;  /* 10px from the right of its relatively positioned parent */
  background-color: lightcoral;
  padding: 8px;
  border: 1px solid red;
  font-size: 0.9em;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .absolute-parent {
    position: relative; /* This is key! */
    width: 300px;
    height: 150px;
    border: 2px solid purple;
    background-color: #f0e6fa;
    margin-bottom: 50px; /* To see the space taken by normal flow */
  }
  .absolute-child {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: yellow;
    padding: 10px;
    border: 1px solid orange;
  }
  .normal-div {
    background-color: #f0f0f0;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ddd;
  }
</style>
<div class="normal-div">នេះជា Div ធម្មតា មុន Parent ។</div>
<div class="absolute-parent">
  <p>នេះជា Parent Element (Relative) ។</p>
  <div class="absolute-child">នេះជា Child Absolute ។</div>
</div>
<div class="normal-div">នេះជា Div ធម្មតា ក្រោយ Parent ។</div>
\`\`\`

---

## 4. position: fixed

Element ដែលមាន \`position: fixed;\` ត្រូវបានកំណត់ទីតាំងទាក់ទងទៅនឹង **Viewport** (បង្អួច Browser) ។
* វានៅតែស្ថិតនៅកន្លែងដដែល ទោះបីជាទំព័រត្រូវបាន Scroll ក៏ដោយ។
* Element Fixed ក៏ **ត្រូវបានដកចេញពីលំហូរធម្មតា** របស់ឯកសារផងដែរ។
* ត្រូវបានប្រើជាទូទៅសម្រាប់ Header, Footer, ឬប៊ូតុង "Back to Top" ដែលស្អិតរមួត។

\`\`\`css
/* Fixed Header/Footer */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;
  z-index: 1000; /* Ensures it stays on top of other content */
}

.fixed-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 999;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  body {
    margin: 0;
    padding-top: 60px; /* Make space for the fixed header */
    padding-bottom: 60px; /* Make space for the fixed footer */
    height: 200vh; /* Make body tall enough to scroll */
    font-family: Arial, sans-serif;
  }
  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 15px 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    z-index: 1000;
  }
  .fixed-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
    z-index: 1000;
  }
  .content-placeholder {
    height: 1000px; /* Ensures there's enough content to scroll */
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
  }
</style>
<div class="fixed-header">នេះជា Header ដែល Fixed (ជាប់ជានិច្ច)។</div>
<div class="content-placeholder">
  <p>សូម Scroll ចុះក្រោមដើម្បីមើលថា Header និង Footer នៅនឹងកន្លែង។</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
  <p>... (More content to make the page scrollable) ...</p>
  <p>End of scrollable content.</p>
</div>
<div class="fixed-footer">នេះជា Footer ដែល Fixed (ជាប់ជានិច្ច)។</div>
\`\`\`

---

## 5. position: sticky

Element ដែលមាន \`position: sticky;\` ត្រូវបានកំណត់ទីតាំងដោយផ្អែកលើទីតាំង Normal Flow ប៉ុន្តែវាអាច "ស្អិត" ទៅនឹងទីតាំងជាក់លាក់មួយនៅលើ Viewport នៅពេលដែល Element មេរបស់វាត្រូវបាន Scroll ។
* វាប្រព្រឹត្តដូច \`relative\` រហូតដល់វាឈានដល់ចំណុច Offset (ឧទាហរណ៍ \`top: 0;\`) បន្ទាប់មកវាប្រព្រឹត្តដូច \`fixed\` ។
* វាត្រូវការ Property \`top\`, \`right\`, \`bottom\`, ឬ \`left\` ដើម្បីដំណើរការ។

\`\`\`css
/* Sticky Header within a scrolling container */
.sticky-container {
  height: 300px; /* Make container scrollable */
  overflow-y: scroll;
  border: 1px solid #ccc;
  background-color: #f7f7f7;
}

.sticky-header {
  position: sticky;
  top: 0; /* Sticks to the top of the container when scrolled */
  background-color: #ffeb3b; /* Amber */
  padding: 10px;
  border-bottom: 2px solid #ffc107;
  z-index: 99;
}

.content-block {
  height: 100px;
  background-color: #e0f2f7;
  margin-bottom: 5px;
  padding: 10px;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  .sticky-parent {
    height: 400px; /* This parent needs to be scrollable */
    overflow-y: auto;
    border: 2px solid #555;
    margin-bottom: 20px;
    background-color: #fcfcfc;
  }
  .sticky-element {
    position: sticky;
    top: 0; /* When this element reaches the top of its parent, it sticks */
    background-color: #ffebcd; /* BlanchedAlmond */
    padding: 15px;
    border-bottom: 2px solid #ffcc00;
    font-weight: bold;
    z-index: 10;
  }
  .content-filler {
    height: 120px; /* Add some content to enable scrolling */
    background-color: #e6e6fa;
    margin: 10px;
    padding: 10px;
    border: 1px dashed #aaa;
  }
  .extra-content {
    height: 600px; /* Make the page scrollable too */
    background-color: #eee;
    padding: 20px;
    margin-top: 20px;
  }
</style>
<h2>ឧទាហរណ៍ Sticky Positioning</h2>
<p>សូម Scroll ខាងក្នុងប្រអប់ Parent ដើម្បីមើលថា Element Sticky ដំណើរការយ៉ាងដូចម្តេច។</p>

<div class="sticky-parent">
  <div class="content-filler">Content មុន Sticky Item</div>
  <div class="content-filler">Content មុន Sticky Item</div>
  <div class="sticky-element">ខ្ញុំជា Element Sticky! ខ្ញុំនឹងជាប់នៅខាងលើនៅពេលអ្នក Scroll ។</div>
  <div class="content-filler">Content ក្រោយ Sticky Item</div>
  <div class="content-filler">Content ក្រោយ Sticky Item</div>
  <div class="content-filler">Content ក្រោយ Sticky Item</div>
  <div class="content-filler">Content ក្រោយ Sticky Item</div>
  <div class="content-filler">Content ក្រោយ Sticky Item</div>
  <div class="content-filler">Content ក្រោយ Sticky Item</div>
  <div class="content-filler">Content ក្រោយ Sticky Item</div>
</div>

<div class="extra-content">
  <p>នេះជាមាតិកាបន្ថែមនៅខាងក្រោម Parent Container ដែលអាច Scroll បាន។</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
  <p>Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
</div>
\`\`\`

---
> **គន្លឹះ:** ការយល់ដឹងពីប្រភេទ Positioning នីមួយៗ និងរបៀបដែលពួកវាទាក់ទងនឹងលំហូរឯកសារធម្មតា គឺជាមូលដ្ឋានគ្រឹះសម្រាប់ការបង្កើត Layout ដែលត្រឹមត្រូវ និងស្មុគស្មាញ។ \`z-index\` ក៏សំខាន់ផងដែរក្នុងការគ្រប់គ្រងលំដាប់ជង់របស់ Elements ដែលដាក់ជាន់គ្នា។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ CSS Positioning</h3>
<style>
body { font-family: Arial, sans-serif; padding: 20px; background-color: #f8f9fa; margin-bottom: 200px; }
section {
  margin-bottom: 40px;
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: relative; /* For nested absolute elements to demonstrate context */
  min-height: 150px; /* Ensure sections have some height */
}
h4 { color: #0056b3; margin-top: 0; }
.box-item {
  padding: 10px;
  border: 1px dashed #999;
  background-color: #e2f0fb;
  text-align: center;
}
.normal-flow-guide {
  background-color: #f0f0f0;
  padding: 5px;
  margin: 5px 0;
  border: 1px solid #ddd;
}

/* Static Example */
.static-ex {
  position: static;
  background-color: #e6e6fa; /* Lavender */
}

/* Relative Example */
.relative-ex {
  position: relative;
  top: 10px;
  left: 10px;
  background-color: #fffacd; /* LemonChiffon */
}

/* Absolute Example */
.absolute-parent-ex {
  position: relative; /* Crucial parent for absolute child */
  border: 2px dashed #a0d4db;
  padding: 20px;
  background-color: #e0f2f7;
  height: 200px; /* Give it a height */
  margin-top: 50px; /* To show displacement from normal flow */
  margin-bottom: 50px;
}
.absolute-child-ex {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #ffcccc; /* Light coral */
  border: 1px solid #dc3545;
  padding: 10px;
}

/* Fixed Example */
.fixed-header-ex {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #343a40; /* Dark grey */
  color: white;
  text-align: center;
  padding: 10px 0;
  z-index: 1000;
  font-size: 0.9em;
}
.fixed-button-ex {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #28a745; /* Green */
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 999;
}

/* Sticky Example */
.sticky-container-ex {
  height: 250px;
  overflow-y: scroll;
  border: 2px solid #6c757d;
  background-color: #f2f2f2;
  margin-top: 50px;
}
.sticky-element-ex {
  position: sticky;
  top: 0;
  background-color: #ffc107; /* Amber */
  padding: 10px;
  border-bottom: 1px solid #e0a800;
  font-weight: bold;
  z-index: 9;
}
.scroll-content-ex {
  height: 80px;
  background-color: #d1ecf1;
  margin: 5px;
  padding: 8px;
  border: 1px dashed #add8e6;
}
</style>

<div class="fixed-header-ex">នេះជា Fixed Header ។ (Scroll ដើម្បីមើល)</div>

<section>
  <h4>position: static (លំនាំដើម)</h4>
  <p>Elements ស្ថិតនៅក្នុងលំហូរធម្មតា។ top/left មិនមានប្រសិទ្ធិភាពទេ។</p>
  <div class="box-item static-ex">Div Static</div>
  <div class="normal-flow-guide">នេះជា Div ធម្មតា។</div>
</section>

<section>
  <h4>position: relative</h4>
  <p>កំណត់ទីតាំងទាក់ទងទៅនឹងទីតាំងធម្មតារបស់វា។ ទុកកន្លែងដើម។</p>
  <div class="normal-flow-guide">នេះជា Div ធម្មតា។</div>
  <div class="box-item relative-ex">Div Relative (ផ្លាស់ប្តូរ)</div>
  <div class="normal-flow-guide">នេះជា Div ធម្មតា ក្រោយ Relative ។ (កន្លែងនៅតែរក្សា)</div>
</section>

<section class="absolute-parent-ex">
  <h4>position: absolute</h4>
  <p>កំណត់ទីតាំងទាក់ទងនឹង Parent (non-static) ។ ដកចេញពីលំហូរធម្មតា។</p>
  <div class="box-item absolute-child-ex">Div Absolute Child</div>
  <p>មាតិកានៅក្នុង Parent Element (Relative) ។</p>
</section>
<div class="normal-flow-guide">Div ធម្មតានេះបន្តលំហូរ ទោះបី Child Absolute ត្រូវបានដកចេញក៏ដោយ។</div>


<section>
  <h4>position: sticky</h4>
  <p>ប្រព្រឹត្តដូច Relative រហូតដល់វាដល់ចំណុច Offset បន្ទាប់មកប្រព្រឹត្តដូច Fixed ។</p>
  <div class="sticky-container-ex">
    <div class="scroll-content-ex">Item 1</div>
    <div class="sticky-element-ex">Sticky Header (Scroll ក្នុងប្រអប់នេះ)</div>
    <div class="scroll-content-ex">Item 2</div>
    <div class="scroll-content-ex">Item 3</div>
    <div class="scroll-content-ex">Item 4</div>
    <div class="scroll-content-ex">Item 5</div>
    <div class="scroll-content-ex">Item 6</div>
  </div>
</section>

<button class="fixed-button-ex">Fixed Button</button>

<div style="height: 500px; background-color: #f1f1f1; margin-top: 50px; padding: 20px; text-align: center;">
  <p>សូម Scroll ទំព័រចុះក្រោមដើម្បីសាកល្បង Fixed Header/Button</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (More content to ensure scrolling)</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</div>
`
  ],
  quiz: [
    {
      question: 'តើ Property `position` គ្រប់គ្រងអ្វី?',
      options: [
        'ពណ៌ផ្ទៃខាងក្រោយរបស់ Element',
        'ទំហំពុម្ពអក្សររបស់ Element',
        'ទីតាំងរបស់ Element នៅលើទំព័រ',
        'ព្រំដែនជុំវិញ Element'
      ],
      correct: 2,
      explanation: ' Property `position` ត្រូវបានប្រើដើម្បីកំណត់ទីតាំងច្បាស់លាស់របស់ Element នៅលើទំព័រ។'
    },
    {
      question: 'តើ `position: static;` មានលក្ខណៈសម្បត្តិអ្វីខ្លះ?',
      options: [
        'វាអនុញ្ញាតឱ្យកំណត់ទីតាំងដោយ `top`, `left` ជាដើម',
        'វាត្រូវបានដកចេញពីលំហូរឯកសារធម្មតា',
        'វាគឺជាតម្លៃលំនាំដើម ហើយ Element ត្រូវបានកំណត់ទីតាំងតាមលំហូរធម្មតា',
        'វាស្ថិតនៅកន្លែងដដែល ទោះបីជាទំព័រត្រូវបាន Scroll ក៏ដោយ'
      ],
      correct: 2,
      explanation: '`position: static;` គឺជាតម្លៃលំនាំដើម ហើយ Element ត្រូវបានដាក់តាមលំដាប់លំដោយធម្មតារបស់ HTML ។ Properties ដូចជា `top` និង `left` មិនដំណើរការលើ Element Static ទេ។'
    },
    {
      question: 'តើ `position: relative;` ផ្លាស់ប្តូរទីតាំង Element ទាក់ទងទៅនឹងអ្វី?',
      options: [
        'Viewport (បង្អួច Browser)',
        'Element មេដែលនៅជិតបំផុត (Parent)',
        'ទីតាំងធម្មតារបស់វា',
        '`<body>` របស់ឯកសារ'
      ],
      correct: 2,
      explanation: '`position: relative;` ផ្លាស់ប្តូរទីតាំង Element ទាក់ទងទៅនឹងកន្លែងដែលវានឹងស្ថិតនៅជាធម្មតានៅក្នុងលំហូរឯកសារ។'
    },
    {
      question: 'តើអ្វីជាលក្ខណៈពិសេសសំខាន់នៃ `position: absolute;`?',
      options: [
        'វាទុកកន្លែងសម្រាប់ខ្លួនវានៅក្នុងលំហូរឯកសារធម្មតា',
        'វាត្រូវបានកំណត់ទីតាំងទាក់ទងទៅនឹង Viewport',
        'វាត្រូវបានដកចេញពីលំហូរឯកសារធម្មតា ហើយកំណត់ទីតាំងទាក់ទងនឹង Parent ដែល non-static ដែលជិតបំផុត',
        'វាស្អិតជាប់នឹងទីតាំងជាក់លាក់មួយនៅពេល Scroll'
      ],
      correct: 2,
      explanation: 'Element Absolute ត្រូវបានដកចេញពីលំហូរធម្មតា ហើយត្រូវបានកំណត់ទីតាំងទាក់ទងនឹង Parent ដែលមាន positioning ក្រៅពី `static` ។'
    },
    {
      question: 'ដើម្បីឱ្យ `position: absolute;` Element ត្រូវបានកំណត់ទីតាំងទាក់ទងទៅនឹង Parent Element ជាក់លាក់មួយ តើ Parent នោះត្រូវតែមាន `position` អ្វី?',
      options: [
        '`static`',
        '`relative`',
        '`block`',
        'គ្មានអ្វីទាំងអស់ (អាចជាអ្វីក៏បាន)'
      ],
      correct: 1,
      explanation: 'Parent Element ត្រូវតែមាន `position: relative;`, `absolute;`, `fixed;`, ឬ `sticky;` ដើម្បីបង្កើត "context" សម្រាប់ Child Absolute ។ `relative` គឺជាជម្រើសទូទៅបំផុត។'
    },
    {
      question: 'តើ `position: fixed;` ខុសពី `position: absolute;` យ៉ាងដូចម្តេច?',
      options: [
        '`fixed` ស្ថិតនៅកន្លែងដដែលពេល Scroll ខណៈ `absolute` មិនធ្វើ',
        '`fixed` ត្រូវបានកំណត់ទីតាំងទាក់ទងនឹង Parent ខណៈ `absolute` ទាក់ទងនឹង Viewport',
        '`fixed` ទុកកន្លែងក្នុងលំហូរឯកសារ ខណៈ `absolute` មិនធ្វើ',
        'គ្មានភាពខុសគ្នាធំដុំទេ'
      ],
      correct: 0,
      explanation: '`fixed` Element នៅតែស្ថិតនៅកន្លែងដដែលទាក់ទងនឹង Viewport ទោះបីជាទំព័រត្រូវបាន Scroll ក៏ដោយ។ `absolute` ត្រូវបានកំណត់ទីតាំងទាក់ទងនឹង Parent ដែល non-static ហើយនឹង Scroll ជាមួយមាតិកា Parent ។'
    },
    {
      question: 'តើ Property មួយណាដែលត្រូវបានប្រើជាទូទៅជាមួយ `position: fixed;` ដើម្បីដាក់ Element ដូចជា Header នៅផ្នែកខាងលើនៃអេក្រង់?',
      options: [
        '`bottom: 0;`',
        '`left: 0;`',
        '`right: 0;`',
        '`top: 0;`'
      ],
      correct: 3,
      explanation: '`top: 0;` ត្រូវបានប្រើដើម្បីដាក់ Element Fixed នៅផ្នែកខាងលើនៃ Viewport ។'
    },
    {
      question: 'តើ `position: sticky;` ដំណើរការដោយរបៀបណា?',
      options: [
        'វាប្រព្រឹត្តដូច `static` ជានិច្ច',
        'វាប្រព្រឹត្តដូច `fixed` ជានិច្ច',
        'វាប្រព្រឹត្តដូច `relative` រហូតដល់វាដល់ចំណុច Offset បន្ទាប់មកប្រព្រឹត្តដូច `fixed`',
        'វាផ្លាស់ប្តូរទីតាំង Element នៅពេលដែល Cursor ផ្លាស់ទី'
      ],
      correct: 2,
      explanation: '`position: sticky;` គឺជាការរួមបញ្ចូលគ្នារវាង `relative` និង `fixed` ។ វាស្អិតជាប់ (fixed) នៅពេលដែលវាឈានដល់ចំណុច Offset ដែលបានកំណត់អំឡុងពេល Scroll ។'
    },
    {
      question: 'តើ Property `z-index` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីក្នុងការ Positioning?',
      options: [
        'ដើម្បីកំណត់ទំហំពុម្ពអក្សរ',
        'ដើម្បីកំណត់ពណ៌ផ្ទៃខាងក្រោយ',
        'ដើម្បីគ្រប់គ្រងលំដាប់ជង់ (Stacking Order) របស់ Elements ដែលដាក់ជាន់គ្នា',
        'ដើម្បីផ្លាស់ប្តូរទិសដៅអត្ថបទ'
      ],
      correct: 2,
      explanation: '`z-index` គ្រប់គ្រងលំដាប់ជង់របស់ Elements ដែលដាក់ជាន់គ្នា (ឧទាហរណ៍ មួយណាគួរលេចឡើងពីលើមួយណាទៀត)។'
    },
    {
      question: 'តើ `position: relative;` Element នៅតែទុកកន្លែងសម្រាប់ខ្លួនវានៅក្នុងលំហូរឯកសារធម្មតាដែរឬទេ បន្ទាប់ពីផ្លាស់ប្តូរទីតាំងដោយ `top`/`left`?',
      options: [
        'ទេ វាមិនទុកកន្លែងទេ',
        'បាទ/ចាស៎ វានៅតែទុកកន្លែង',
        'អាស្រ័យលើ Browser',
        'អាស្រ័យលើមាតិការបស់វា'
      ],
      correct: 1,
      explanation: 'បាទ/ចាស៎ `position: relative;` Element នៅតែទុកកន្លែងដើមរបស់វានៅក្នុងលំហូរឯកសារធម្មតា ទោះបីជាទីតាំងដែលមើលឃើញរបស់វាផ្លាស់ប្តូរក៏ដោយ។'
    },
    {
      question: 'តើ Element ដែលមាន `position: fixed;` ត្រូវបានដកចេញពីលំហូរឯកសារធម្មតាដែរឬទេ?',
      options: [
        'ទេ វាមិនត្រូវបានដកចេញទេ',
        'បាទ/ចាស៎ វានឹងត្រូវបានដកចេញ',
        'អាស្រ័យលើ `z-index` របស់វា',
        'អាស្រ័យលើ `width` របស់វា'
      ],
      correct: 1,
      explanation: 'Element ដែលមាន `position: fixed;` ត្រូវបានដកចេញពីលំហូរឯកសារធម្មតា ស្រដៀងទៅនឹង Element Absolute ។'
    },
    {
      question: 'តើ Property មួយណាដែល **មិន** មានប្រសិទ្ធិភាពលើ Element ដែលមាន `position: static;`?',
      options: [
        '`width`',
        '`height`',
        '`background-color`',
        '`top`'
      ],
      correct: 3,
      explanation: 'Properties `top`, `right`, `bottom`, និង `left` មិនមានផលប៉ះពាល់លើ Element Static ទេ។'
    },
    {
      question: 'តើការប្រើប្រាស់ `position: absolute;` ដោយមិនមាន Parent Element ដែល non-static នឹងមានផលប៉ះពាល់អ្វី?',
      options: [
        'វានឹងបង្កក Browser',
        'វានឹងកំណត់ទីតាំង Element ទាក់ទងទៅនឹង `<body>` របស់ឯកសារ (ឬ Viewport)',
        'វានឹងធ្វើឱ្យ Element មើលមិនឃើញ',
        'វានឹងប្រព្រឹត្តដូច `static`'
      ],
      correct: 1,
      explanation: 'ប្រសិនបើគ្មាន Parent Element ដែលមាន position ក្រៅពី `static` ទេ Element Absolute នឹងត្រូវបានកំណត់ទីតាំងទាក់ទងទៅនឹង `<body>` របស់ឯកសារ (ឬ Viewport) ។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធដូចខាងក្រោម៖
* \`<body>\` ។
* \`<div>\` មួយដែលមាន Class \`container\` ។
* នៅក្នុង \`container\` មាន \`<div>\` មួយដែលមាន Class \`relative-parent\` ។
* នៅក្នុង \`relative-parent\` មាន \`<div>\` មួយដែលមាន Class \`absolute-child\` ។
* បន្ថែម \`<div>\` មួយទៀតដែលមាន Class \`fixed-element\` នៅខាងក្រៅ \`container\` ។
* បន្ថែមមាតិកាគ្រប់គ្រាន់ក្នុង \`body\` ដើម្បីឱ្យទំព័រអាច Scroll បាន (ឧទាហរណ៍ Paragraph វែងៗ)។

សូមប្រើ **Internal CSS** និង Positioning properties ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  សម្រាប់ \`body\` កំណត់ \`font-family: Arial, sans-serif;\` និង \`margin: 0;\`, បន្ទាប់មកបន្ថែមកម្ពស់ខ្ពស់ (ឧទាហរណ៍ \`min-height: 200vh;\`) ដើម្បីឱ្យមាន Scroll ។
2.  សម្រាប់ \`.container\` កំណត់ \`width: 80%;\`, \`max-width: 700px;\`, \`margin: 30px auto;\`, \`border: 2px solid #555;\`, \`padding: 20px;\`, \`background-color: #f2f2f2;\` ។
3.  សម្រាប់ \`.relative-parent\` កំណត់ \`position: relative;\`, \`width: 80%;\`, \`height: 200px;\`, \`margin: 20px auto;\`, \`border: 2px dashed #007bff;\`, \`background-color: #e6f7ff;\` ។
4.  សម្រាប់ \`.absolute-child\` កំណត់ \`position: absolute;\`, \`top: 10px;\`, \`right: 10px;\`, \`background-color: #ffc107;\`, \`padding: 15px;\`, \`border: 1px solid #e0a800;\`, \`color: #333;\`, \`font-weight: bold;\` ។
5.  សម្រាប់ \`.fixed-element\` កំណត់ \`position: fixed;\`, \`bottom: 20px;\`, \`left: 20px;\`, \`background-color: #28a745;\`, \`color: white;\`, \`padding: 15px 20px;\`, \`border-radius: 8px;\`, \`z-index: 1000;\`, \`cursor: pointer;\` ។
6.  បន្ថែម Paragraph មួយចំនួននៅខាងក្រៅ \`container\` ដើម្បីឱ្យ \`fixed-element\` អាចត្រូវបានសាកល្បងដោយការ Scroll ។
`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Positioning Lab</title>
  <style>
    /* 1. Body for scrolling */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      min-height: 200vh; /* Make the page scrollable */
      background-color: #f8f9fa;
    }

    /* 2. Main container */
    .container {
      width: 80%;
      max-width: 700px;
      margin: 30px auto;
      border: 2px solid #555;
      padding: 20px;
      background-color: #f2f2f2;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      text-align: center; /* For centering content inside */
    }

    /* 3. Relative Parent */
    .relative-parent {
      position: relative;
      width: 80%;
      height: 200px;
      margin: 20px auto;
      border: 2px dashed #007bff; /* Blue dashed border */
      background-color: #e6f7ff; /* Light blue background */
      padding: 10px;
      display: flex; /* For centering child text */
      align-items: center;
      justify-content: center;
      font-size: 1.1em;
      color: #333;
    }

    /* 4. Absolute Child */
    .absolute-child {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #ffc107; /* Amber */
      padding: 15px;
      border: 1px solid #e0a800; /* Darker amber border */
      color: #333;
      font-weight: bold;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    /* 5. Fixed Element */
    .fixed-element {
      position: fixed;
      bottom: 20px;
      left: 20px;
      background-color: #28a745; /* Green */
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      z-index: 1000; /* Ensure it's on top */
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      text-align: center;
    }

    /* Placeholder content for scrolling */
    .scroll-content {
      margin-top: 50px;
      padding: 20px;
      background-color: #eee;
      border-top: 1px solid #ccc;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>CSS Positioning Lab</h1>
    <p>ស្វែងយល់ពីរបៀបដែល \`position\` property ដំណើរការ:</p>

    <div class="relative-parent">
      <p>នេះជា Parent Relative ។ (Child Absolute ស្ថិតនៅខាងក្នុង)</p>
      <div class="absolute-child">ខ្ញុំជា Child Absolute!</div>
    </div>

    <p>មាតិកាធម្មតានៅក្នុង Container ។</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
  </div>

  <div class="fixed-element">ខ្ញុំជា Fixed Element! (Scroll ទំព័រ)</div>

  <div class="scroll-content">
    <h3>មាតិកាបន្ថែមដើម្បីឱ្យទំព័រ Scroll បាន</h3>
    <p>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
  </div>
</body>
</html>`
  }
};

export default CSSLesson4_1Content;