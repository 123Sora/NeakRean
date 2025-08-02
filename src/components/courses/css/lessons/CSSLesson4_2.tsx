// src/components/lessons/css/CSSLesson4_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson4_2Content: LessonContent = {
  title: 'CSS Floats (អក្សរព័ទ្ធរូបភាព)',
  objectives: [
    'ស្វែងយល់ពីគោលបំណងនៃ `float` Property ',
    'ដឹងពីរបៀបប្រើ `float: left;` និង `float: right;`',
    'យល់ដឹងពីផលប៉ះពាល់នៃ `float` លើលំហូរឯកសារធម្មតា',
    'រៀនពីរបៀបប្រើ `clear` Property  ដើម្បីដោះស្រាយបញ្ហា Clearing Floats',
    'ស្គាល់ពីបច្ចេកទេស Clearing Floats ដូចជា Clearfix Hack',
    'អនុវត្តការប្រើប្រាស់ Floats សម្រាប់ការរៀបចំប្លង់សាមញ្ញ'
  ],
  content: `
# CSS Floats (អក្សរព័ទ្ធរូបភាព) 🌊

---

**Floats** គឺជា Property  CSS ដែលត្រូវបានប្រើប្រាស់ជាប្រវត្តិសាស្ត្រសម្រាប់ការរៀបចំ Layout ដែលមាន Elements អង្គុយនៅក្បែរគ្នា (ឧទាហរណ៍ សម្រាប់ Column ឬរូបភាពដែលមានអត្ថបទព័ទ្ធជុំវិញ)។ វាត្រូវបានរចនាឡើងដំបូងដើម្បីឱ្យរូបភាពអាច "អណ្តែត" នៅក្នុងប្លុកអត្ថបទ ដែលអត្ថបទនឹងព័ទ្ធជុំវិញវា។

នៅពេល Element មួយត្រូវបាន Floating វាត្រូវបានដកចេញពីលំហូរធម្មតានៃឯកសារ (Normal Flow) ហើយផ្លាស់ទីទៅខាងឆ្វេង ឬស្តាំរហូតទាល់តែវាប៉ះគែមនៃ Container របស់វា ឬ Element Floating ផ្សេងទៀត។

---

## 1. How Floats Work (របៀបដែល Floats ដំណើរការ)

* **\`float: left;\`**: ផ្លាស់ទី Element ទៅខាងឆ្វេងនៃ Container របស់វា។ Elements បន្ទាប់នឹងព័ទ្ធជុំវិញវាទៅខាងស្តាំ។
* **\`float: right;\`**: ផ្លាស់ទី Element ទៅខាងស្តាំនៃ Container របស់វា។ Elements បន្ទាប់នឹងព័ទ្ធជុំវិញវាទៅខាងឆ្វេង។
* **\`float: none;\`**: តម្លៃលំនាំដើម។ Element មិនអណ្តែតទេ (ស្ថិតក្នុងលំហូរធម្មតា)។
* **\`float: inherit;\`**: Element ទទួលយកតម្លៃ float ពី Parent របស់វា។

\`\`\`css
/* Float an image to the left */
img.float-left {
  float: left;
  margin-right: 15px; /* Add space to the right of the image */
  margin-bottom: 10px; /* Add space below the image */
}

/* Float a div to the right */
.float-right-box {
  float: right;
  width: 150px;
  height: 80px;
  background-color: lightblue;
  border: 1px solid blue;
  margin-left: 15px;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<style>
  .image-container {
    background-color: #f0f0f0;
    padding: 15px;
    border: 1px solid #ddd;
    overflow: auto; /* For clearing floats within this container */
    margin-bottom: 20px;
  }
  .float-img {
    float: left;
    margin-right: 15px;
    border: 2px solid #3498db;
    padding: 5px;
  }
  .float-div {
    float: right;
    width: 120px;
    height: 80px;
    background-color: #ffe0b2;
    border: 1px solid #ff9800;
    margin-left: 15px;
    text-align: center;
    line-height: 80px;
  }
  p {
    line-height: 1.6;
  }
</style>
<div class="image-container">
  <h3>រូបភាពអណ្តែត (Float Image)</h3>
  <img src="https://via.placeholder.com/100x80" alt="Placeholder Image" class="float-img">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<div class="image-container">
  <h3>Div អណ្តែត (Float Div)</h3>
  <div class="float-div">Float Right</div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
</div>
\`\`\`

---

## 2. The Problem with Floats (បញ្ហាជាមួយ Floats)

នៅពេល Element មួយត្រូវបាន Floating វាត្រូវបានដកចេញពីលំហូរធម្មតា។ នេះមានន័យថា Element បន្ទាប់នឹងប្រព្រឹត្តដូចជា Element Floating មិនមាននៅទីនោះទេ ហើយអាចនឹងឡើងទៅខាងលើ ឬខាងក្រោម Element Floating នោះ។

បញ្ហាមួយទៀតគឺ Parent Container របស់ Elements Floating នឹង "បាក់" (collapse) ព្រោះវាលែងឃើញកម្ពស់របស់ Elements Floating ទៀតហើយ។

### ឧទាហរណ៍បញ្ហា៖
\`\`\`html
<style>
  .parent-container {
    border: 2px solid red; /* To see the collapsed height */
    background-color: #ffebee;
    padding: 10px;
    margin-bottom: 20px;
  }
  .float-box {
    float: left;
    width: 100px;
    height: 100px;
    background-color: lightgreen;
    margin: 10px;
  }
  .normal-content {
    background-color: lightgray;
    padding: 10px;
    margin: 10px;
  }
</style>
<h3>Parent Collapsed (Parent បាក់)</h3>
<div class="parent-container">
  <div class="float-box">Float Box</div>
  </div>
<div class="normal-content">
  <p>មាតិកានេះនឹងឡើងទៅខាងក្រោម float-box ព្រោះ Parent Container បានបាក់។</p>
</div>
\`\`\`

---

## 3. Clearing Floats (ការសម្អាត Floats)

ដើម្បីដោះស្រាយបញ្ហាដែលបណ្តាលមកពី Floats (ដូចជា Parent Collapsed ឬមាតិកាឡើងលើ) យើងប្រើ **Clearing**។

Property \`clear\` ត្រូវបានប្រើដើម្បីបញ្ជាក់ថា Element មួយមិនអាចមាន Elements Floating ទៅខាងឆ្វេង ឬស្តាំរបស់វាបានទេ។
* **\`clear: left;\`**: បង្កើត Break មុន Element ដែលមាន \`clear: left;\` ដើម្បីឱ្យវាស្ថិតនៅក្រោម Elements Floating ទៅខាងឆ្វេង។
* **\`clear: right;\`**: បង្កើត Break មុន Element ដែលមាន \`clear: right;\` ដើម្បីឱ្យវាស្ថិតនៅក្រោម Elements Floating ទៅខាងស្តាំ។
* **\`clear: both;\`**: បង្កើត Break មុន Element ដែលមាន \`clear: both;\` ដើម្បីឱ្យវាស្ថិតនៅក្រោម Elements Floating ទាំងទៅខាងឆ្វេង និងស្តាំ។

### បច្ចេកទេស Clearing Floats៖

1.  **Adding a Clearing Element (ការបន្ថែម Element សម្អាត):**
    បន្ថែម Empty Element ទៅក្នុង HTML របស់អ្នក ហើយកំណត់ \`clear: both;\` ទៅវា។ នេះមិនត្រូវបានណែនាំទេព្រោះវាកខ្វក់ HTML ។
    \`\`\`html
    <div style="clear: both;"></div>
    \`\`\`

2.  **Using \`overflow\` Property  (ការប្រើប្រាស់ Property \`overflow\`):**
    កំណត់ \`overflow: auto;\` ឬ \`overflow: hidden;\` ទៅ Parent Container របស់ Elements Floating ។ នេះបង្ខំ Parent ឱ្យមានកម្ពស់ត្រឹមត្រូវដើម្បីព័ទ្ធជុំវិញ Elements Floating របស់វា។ នេះជាវិធីសាមញ្ញ ប៉ុន្តែអាចមានផលប៉ះពាល់ដែលមិនចង់បានប្រសិនបើមាតិកាពិតជាលើស។
    \`\`\`css
    .parent-container {
      overflow: auto; /* Or hidden */
    }
    \`\`\`

3.  **The Clearfix Hack (បច្ចេកទេស Clearfix Hack) - ត្រូវបានណែនាំជាទូទៅបំផុត:**
    នេះគឺជាវិធីសាស្ត្រដែលត្រូវបានណែនាំបំផុតសម្រាប់ Clearing Floats ដោយមិនចាំបាច់បន្ថែម Markup ទៅ HTML ។ វាប្រើ Pseudo-element \`::after\` ដើម្បីសម្អាត Floats ក្នុង Parent Container ។

    \`\`\`css
    .clearfix::after {
      content: "";
      display: table; /* Or block, but table handles vertical margins better */
      clear: both;
    }
    \`\`\`
    អ្នកគ្រាន់តែបន្ថែម Class \`clearfix\` នេះទៅ Parent Container របស់អ្នក។

### ឧទាហរណ៍ Clearing Floats៖
\`\`\`html
<style>
  .parent-container-cleared {
    border: 2px solid green;
    background-color: #e8f5e9;
    padding: 10px;
    margin-bottom: 20px;
  }
  .float-box-cleared {
    float: left;
    width: 100px;
    height: 100px;
    background-color: lightcoral;
    margin: 10px;
  }
  .content-after-float {
    background-color: lightcyan;
    padding: 10px;
    margin: 10px;
  }

  /* Clearfix Hack */
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }

  /* Using overflow: auto; */
  .overflow-cleared-parent {
    border: 2px solid purple;
    background-color: #f3e5f5;
    padding: 10px;
    margin-bottom: 20px;
    overflow: auto; /* Clearing method */
  }
</style>

<h3>Clearfix Hack</h3>
<div class="parent-container-cleared clearfix">
  <div class="float-box-cleared">Float Box 1</div>
  <div class="float-box-cleared">Float Box 2</div>
  <p>Parent នេះឥឡូវព័ទ្ធជុំវិញ Elements Floating របស់វាហើយ។</p>
</div>
<div class="content-after-float">
  <p>មាតិកានេះនឹងមិនឡើងទៅខាងក្រោម Elements Floating ទេ។</p>
</div>

<h3>Using \`overflow: auto;\`</h3>
<div class="overflow-cleared-parent">
  <div class="float-box-cleared">Float Box 1</div>
  <div class="float-box-cleared">Float Box 2</div>
  <p>Parent នេះក៏ត្រូវបានសម្អាតដោយប្រើ \`overflow: auto;\` ។</p>
</div>
<div class="content-after-float">
  <p>មាតិកានេះនឹងមិនឡើងទៅខាងក្រោម Elements Floating ទេ។</p>
</div>
\`\`\`

---
> **គន្លឹះ:** ពីមុន Floats គឺជាវិធីសាស្ត្រចម្បងសម្រាប់ការបង្កើត Layout ដែលស្មុគស្មាញ ប៉ុន្តែបច្ចុប្បន្ន **Flexbox** និង **CSS Grid** គឺជាវិធីសាស្ត្រដែលត្រូវបានណែនាំ និងមានថាមពលខ្លាំងជាងសម្រាប់ការរៀបចំប្លង់។ ទោះជាយ៉ាងណាក៏ដោយ ការយល់ដឹងពី Floats នៅតែមានសារៈសំខាន់សម្រាប់ការថែទាំ Code ចាស់ ឬសម្រាប់ករណីប្រើប្រាស់ជាក់លាក់មួយចំនួន (ដូចជារូបភាពព័ទ្ធជុំវិញដោយអត្ថបទ)។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ CSS Floats</h3>
<style>
body { font-family: Arial, sans-serif; padding: 20px; background-color: #f8f9fa; }
section {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
h4 { color: #0056b3; margin-top: 0; }
.text-block {
  line-height: 1.6;
  color: #333;
}
.float-item {
  width: 120px;
  height: 90px;
  background-color: #b3e5fc; /* Light blue */
  border: 1px solid #03a9f4; /* Blue */
  text-align: center;
  line-height: 90px;
  margin: 10px;
}
img.float-right-img {
  float: right;
  margin-left: 15px;
  margin-bottom: 10px;
  border: 2px solid #673ab7; /* Deep Purple */
  padding: 5px;
}

/* Clearfix Utility */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Parent for float demonstration (will collapse if not cleared) */
.float-demo-parent {
  border: 2px solid #f44336; /* Red */
  background-color: #ffebee;
  padding: 10px;
}

/* Clearfix applied to parent */
.cleared-parent {
  border: 2px solid #4caf50; /* Green */
  background-color: #e8f5e9;
  padding: 10px;
}
</style>

<section>
  <h4>Floating Image (អត្ថបទព័ទ្ធរូបភាព)</h4>
  <img src="https://via.placeholder.com/150x100" alt="Sample Image" class="float-right-img">
  <p class="text-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</section>

<section>
  <h4>Floating Boxes (ប្រអប់អណ្តែត) - បញ្ហា Parent Collapsed</h4>
  <p>Parent ខាងក្រោមនេះនឹងបាក់ (collapsed) កម្ពស់របស់វាព្រោះ Elements កូនត្រូវបាន Floating ចេញពីលំហូរធម្មតា។</p>
  <div class="float-demo-parent">
    <div class="float-item" style="float: left;">Box 1 (Left)</div>
    <div class="float-item" style="float: left;">Box 2 (Left)</div>
    <div class="float-item" style="float: right;">Box 3 (Right)</div>
    </div>
  <p>មាតិកានេះឡើងទៅខាងក្រោម Elements Floating ។</p>
</section>

<section>
  <h4>Clearing Floats ជាមួយ Clearfix Hack</h4>
  <p>Parent ខាងក្រោមនេះប្រើ Clearfix ដើម្បីព័ទ្ធជុំវិញ Elements Floating របស់វា។</p>
  <div class="cleared-parent clearfix">
    <div class="float-item" style="float: left;">Box 1 (Left)</div>
    <div class="float-item" style="float: left;">Box 2 (Left)</div>
    <div class="float-item" style="float: right;">Box 3 (Right)</div>
  </div>
  <p>មាតិកានេះស្ថិតនៅក្រោម Parent ដែលបានសម្អាតត្រឹមត្រូវ។</p>
</section>

<section>
  <h4>Clearing Floats ជាមួយ \`overflow: auto;\`</h4>
  <p>Parent ខាងក្រោមនេះប្រើ \`overflow: auto;\` ដើម្បីព័ទ្ធជុំវិញ Elements Floating របស់វា។</p>
  <div class="cleared-parent" style="overflow: auto;">
    <div class="float-item" style="float: left;">Box 1 (Left)</div>
    <div class="float-item" style="float: left;">Box 2 (Left)</div>
    <div class="float-item" style="float: right;">Box 3 (Right)</div>
  </div>
  <p>មាតិកានេះស្ថិតនៅក្រោម Parent ដែលបានសម្អាតត្រឹមត្រូវ។</p>
</section>
`
  ],
  quiz: [
    {
      question: 'តើ Property `float` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីដំបូង?',
      options: [
        'ដើម្បីតម្រឹមអត្ថបទនៅកណ្តាល',
        'ដើម្បីបង្កើតគម្លាតខាងក្រៅរវាង Elements',
        'ដើម្បីឱ្យរូបភាពអាច "អណ្តែត" នៅក្នុងប្លុកអត្ថបទ ដែលអត្ថបទនឹងព័ទ្ធជុំវិញវា',
        'ដើម្បីប្តូរទិសដៅនៃ Flex Container'
      ],
      correct: 2,
      explanation: 'Floats ត្រូវបានរចនាឡើងដំបូងដើម្បីឱ្យរូបភាពអាច "អណ្តែត" នៅក្នុងប្លុកអត្ថបទ ដែលអត្ថបទនឹងព័ទ្ធជុំវិញវា។'
    },
    {
      question: 'តើមានអ្វីកើតឡើងនៅពេល Element មួយត្រូវបាន Floating?',
      options: [
        'វាត្រូវបានប្តូរទៅជា Block Element',
        'វាត្រូវបានដកចេញពីលំហូរធម្មតានៃឯកសារ',
        'វាត្រូវបានលាក់ពីទំព័រ',
        'វាត្រូវបានកំណត់ទីតាំងទាក់ទងនឹង Viewport'
      ],
      correct: 1,
      explanation: 'នៅពេល Element មួយត្រូវបាន Floating វាត្រូវបានដកចេញពីលំហូរធម្មតានៃឯកសារ។'
    },
    {
      question: 'តើ `float: left;` ធ្វើអ្វី?',
      options: [
        'ផ្លាស់ទី Element ទៅខាងស្តាំនៃ Container របស់វា',
        'ផ្លាស់ទី Element ទៅខាងឆ្វេងនៃ Container របស់វា ហើយ Elements បន្ទាប់នឹងព័ទ្ធជុំវិញវាទៅខាងស្តាំ',
        'បង្កក Element នៅផ្នែកខាងឆ្វេងនៃអេក្រង់',
        'តម្រឹមអត្ថបទទាំងអស់ទៅខាងឆ្វេង'
      ],
      correct: 1,
      explanation: '`float: left;` ផ្លាស់ទី Element ទៅខាងឆ្វេងនៃ Container របស់វា ហើយ Elements បន្ទាប់នឹងព័ទ្ធជុំវិញវាទៅខាងស្តាំ។'
    },
    {
      question: 'តើអ្វីជាបញ្ហាចម្បងមួយនៅពេលប្រើ Floats?',
      options: [
        'Floats ធ្វើឱ្យអត្ថបទមិនអាចអានបាន',
        'Parent Container របស់ Elements Floating អាចនឹង "បាក់" (collapse)',
        'Floats មិនត្រូវបានគាំទ្រដោយ Browsers ទំនើប',
        'Floats ធ្វើឱ្យទំព័រដំណើរការយឺត'
      ],
      correct: 1,
      explanation: 'បញ្ហាចម្បងមួយគឺ Parent Container របស់ Elements Floating អាចនឹង "បាក់" (collapse) ព្រោះវាលែងឃើញកម្ពស់របស់ Elements Floating ទៀតហើយ។'
    },
    {
      question: 'តើ Property `clear: both;` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីសម្អាត Cache របស់ Browser',
        'ដើម្បីបញ្ជាក់ថា Element មិនអាចមាន Elements Floating ទាំងទៅខាងឆ្វេង និងស្តាំរបស់វាបានទេ',
        'ដើម្បីដក Border ចេញពី Element',
        'ដើម្បីធ្វើឱ្យ Element ថ្លា'
      ],
      correct: 1,
      explanation: '`clear: both;` ត្រូវបានប្រើដើម្បីបញ្ជាក់ថា Element មួយមិនអាចមាន Elements Floating ទាំងទៅខាងឆ្វេង និងស្តាំរបស់វាបានទេ។'
    },
    {
      question: 'តើវិធីសាស្ត្រ "Clearfix Hack" ប្រើប្រាស់ Pseudo-element មួយណាដើម្បីសម្អាត Floats?',
      options: [
        '`::before`',
        '`::first-line`',
        '`::after`',
        '`::selection`'
      ],
      correct: 2,
      explanation: 'Clearfix Hack ប្រើ Pseudo-element `::after` ដើម្បីសម្អាត Floats ។'
    },
    {
      question: 'តើវិធីសាស្ត្រមួយណាដែលជាវិធីសាស្ត្រ Clearing Floats ដែលត្រូវបានណែនាំបំផុតនៅក្នុងប្រភពទំនើប (មុន Flexbox/Grid)?',
      options: [
        'បន្ថែម `<br clear="all">` ទៅ HTML',
        'ប្រើ `overflow: scroll;` លើ Parent',
        'Clearfix Hack',
        'កំណត់ `height` ថេរលើ Parent'
      ],
      correct: 2,
      explanation: 'Clearfix Hack ត្រូវបានចាត់ទុកថាជាវិធីសាស្ត្រដែលត្រូវបានណែនាំបំផុតសម្រាប់ Clearing Floats ដោយមិនបន្ថែម Markup ដែលមិនចាំបាច់ទៅ HTML ។'
    },
    {
      question: 'នៅពេលដែល Element មួយត្រូវបាន Floating តើ Elements បន្ទាប់នឹងធ្វើអ្វី?',
      options: [
        'ពួកវានឹងរុញទៅខាងក្រោម Element Floating',
        'ពួកវានឹងកំណត់ទីតាំងនៅខាងក្នុង Element Floating',
        'ពួកវានឹងប្រព្រឹត្តដូចជា Element Floating មិនមាននៅទីនោះទេ ហើយអាចនឹងឡើងទៅខាងលើ ឬខាងក្រោម Element Floating នោះ',
        'ពួកវានឹងផ្លាស់ប្តូរពណ៌ផ្ទៃខាងក្រោយរបស់ពួកគេ'
      ],
      correct: 2,
      explanation: 'Elements បន្ទាប់នឹងប្រព្រឹត្តដូចជា Element Floating មិនមាននៅទីនោះទេ ហើយអាចនឹងឡើងទៅខាងលើ ឬខាងក្រោម Element Floating នោះ ព្រោះវាត្រូវបានដកចេញពីលំហូរធម្មតា។'
    },
    {
      question: 'តើ `overflow: auto;` អាចត្រូវបានប្រើដើម្បីសម្អាត Floats ក្នុង Parent Container ដែរឬទេ?',
      options: [
        'ទេ វាមិនអាចធ្វើបានទេ',
        'បាទ/ចាស៎ វានឹងបង្ខំ Parent ឱ្យមានកម្ពស់ត្រឹមត្រូវដើម្បីព័ទ្ធជុំវិញ Elements Floating របស់វា',
        'បាទ/ចាស៎ តែវានឹងលាក់មាតិកាដែលលើសជានិច្ច',
        'តែក្នុង Internet Explorer ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'បាទ/ចាស៎ ការកំណត់ `overflow: auto;` (ឬ `hidden;`) លើ Parent Container គឺជាវិធីមួយដើម្បីបង្ខំ Parent ឱ្យព័ទ្ធជុំវិញ Elements Floating របស់វា។'
    },
    {
      question: 'ហេតុអ្វីបានជា Flexbox និង CSS Grid ត្រូវបានគេពេញចិត្តជាង Floats សម្រាប់ការរៀបចំប្លង់ទំនើប?',
      options: [
        'ពួកវាមិនត្រូវបានគាំទ្រដោយ Browsers ទាំងអស់ទេ',
        'ពួកវាមានភាពស្មុគស្មាញក្នុងការប្រើប្រាស់',
        'ពួកវាមានថាមពលខ្លាំងជាង អាចទាយទុកមុនបាន និងងាយស្រួលគ្រប់គ្រង Layout ដែលស្មុគស្មាញ',
        'ពួកវាប្រើ HTML ច្រើនជាង'
      ],
      correct: 2,
      explanation: 'Flexbox និង CSS Grid ត្រូវបានរចនាឡើងជាពិសេសសម្រាប់ការរៀបចំប្លង់ ហើយផ្តល់នូវការគ្រប់គ្រងដែលប្រសើរជាង ភាពបត់បែន និងភាពងាយស្រួលក្នុងការទាយទុកមុនសម្រាប់ Layout ដែលស្មុគស្មាញ បើប្រៀបធៀបទៅនឹង Floats ។'
    },
    {
      question: 'តើ `float: none;` ធ្វើអ្វីចំពោះ Element?',
      options: [
        'លាក់ Element',
        'ធ្វើឱ្យ Element អណ្តែតទៅខាងឆ្វេង',
        'ធ្វើឱ្យ Element អណ្តែតទៅខាងស្តាំ',
        'ដកឥទ្ធិពល Floating ចេញ ហើយដាក់ Element ត្រឡប់ទៅលំហូរធម្មតាវិញ'
      ],
      correct: 3,
      explanation: '`float: none;` គឺជាតម្លៃលំនាំដើម ហើយធានាថា Element មិនអណ្តែតទេ ហើយស្ថិតនៅក្នុងលំហូរធម្មតារបស់ឯកសារ។'
    },
    {
      question: 'តើ `clear: right;` មានន័យដូចម្តេច?',
      options: [
        'Element នេះនឹងត្រូវបានរុញទៅខាងស្តាំ',
        'Elements Floating ទាំងអស់នៅខាងស្តាំនឹងត្រូវបានសម្អាត',
        'Element នេះនឹងផ្លាស់ទីទៅក្រោម Elements Floating ទៅខាងស្តាំ',
        'Element នេះនឹងមាន Margin ធំនៅខាងស្តាំ'
      ],
      correct: 2,
      explanation: '`clear: right;` នឹងបង្ខំ Element ឱ្យបំបែកបន្ទាត់ ហើយស្ថិតនៅក្រោម Elements Floating ទាំងអស់ដែលនៅខាងស្តាំរបស់វា។'
    },
    {
      question: 'តើការបន្ថែម `div` ទទេដែលមាន `clear: both;` គឺជាវិធីសាស្ត្រ Clearing Floats ដែលត្រូវបានណែនាំនៅក្នុងការអនុវត្តទំនើបដែរឬទេ?',
      options: [
        'បាទ/ចាស៎ វាជាវិធីសាស្ត្រល្អបំផុត',
        'ទេ វាមិនត្រូវបានណែនាំទេព្រោះវាកខ្វក់ HTML (Adds unnecessary markup)',
        'វាអាស្រ័យលើចំនួន Elements Floating',
        'វាដំណើរការតែក្នុង Internet Explorer ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'ទេ ការបន្ថែម Empty Div សម្រាប់ Clearing មិនត្រូវបានណែនាំទេ ព្រោះវាបន្ថែម Markup ដែលមិនចាំបាច់ទៅ HTML របស់អ្នក។ Clearfix Hack ឬការប្រើប្រាស់ Flexbox/Grid គឺល្អជាង។'
    },
    {
      question: 'តើ `float: inherit;` ធ្វើអ្វី?',
      options: [
        'ធ្វើឱ្យ Element អណ្តែតទៅខាងឆ្វេងដោយស្វ័យប្រវត្តិ',
        'ធ្វើឱ្យ Element អណ្តែតទៅខាងស្តាំដោយស្វ័យប្រវត្តិ',
        'ទទួលយកតម្លៃ `float` ពី Parent របស់វា',
        'ដកឥទ្ធិពល Floating ទាំងអស់ចេញ'
      ],
      correct: 2,
      explanation: '`float: inherit;` ធ្វើឱ្យ Element ទទួលយកតម្លៃ `float` របស់ Parent Element របស់វា។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធដូចខាងក្រោម៖
* \`<body>\` ។
* បន្ថែម Paragraph ធម្មតាពីរបីនៅខាងលើ។
* \`<div>\` មួយដែលមាន Class \`float-container\` ។
* នៅក្នុង \`float-container\` បន្ថែម \`<img>\` មួយដែលមាន Class \`left-float-image\` និង Paragraph វែងមួយនៅក្បែរវា។
* បន្ថែម \`<div>\` មួយទៀតនៅក្រោម \`float-container\` ដែលមាន Class \`below-float-content\` ។

សូមប្រើ **Internal CSS** និង Float properties ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  សម្រាប់ \`body\` កំណត់ \`font-family: Arial, sans-serif;\` និង \`line-height: 1.6;\` ។
2.  សម្រាប់ \`.float-container\` កំណត់ \`width: 80%;\`, \`max-width: 700px;\`, \`margin: 20px auto;\`, \`border: 2px solid #3498db;\`, \`padding: 15px;\`, \`background-color: #ecf0f1;\` ។
3.  សម្រាប់ \`.left-float-image\` កំណត់ \`float: left;\`, \`margin-right: 20px;\`, \`margin-bottom: 10px;\`, \`border: 3px solid #e74c3c;\`, \`padding: 5px;\` ។ ប្រើរូបភាព placeholder ដូចជា \`https://via.placeholder.com/150x100\` ។
4.  សម្រាប់ Paragraph នៅក្នុង \`float-container\` ផ្តល់ពណ៌អត្ថបទ \`#333\` ។
5.  សម្រាប់ \`.below-float-content\` កំណត់ \`background-color: #cceeff;\`, \`padding: 15px;\`, \`border: 1px solid #007bff;\`, \`margin: 20px auto;\` (ដើម្បីតម្រឹមជាមួយ Container ខាងលើ), \`width: 80%;\`, \`max-width: 700px;\` ។
6.  **សង្កេតមើល** ពីរបៀបដែល \`.below-float-content\` ឡើងទៅខាងក្រោមរូបភាព។
7.  **អនុវត្ត Clearfix Hack** ទៅលើ \`.float-container\` ដើម្បីដោះស្រាយបញ្ហា Parent Collapsed និងរុញ \`.below-float-content\` ទៅខាងក្រោមត្រឹមត្រូវ។
`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Floats Lab</title>
  <style>
    /* 1. Body styles */
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      background-color: #f8f9fa;
    }

    p {
      margin-bottom: 1em;
    }

    /* 2. Float Container */
    .float-container {
      width: 80%;
      max-width: 700px;
      margin: 20px auto;
      border: 2px solid #3498db; /* Blue border */
      padding: 15px;
      background-color: #ecf0f1; /* Light gray background */
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      /* 7. Apply Clearfix Hack here */
      /* overflow: auto;  <-- Alternative simple clearing method */
    }

    /* Clearfix Hack */
    .float-container.clearfix::after {
      content: "";
      display: table;
      clear: both;
    }

    /* 3. Left Floated Image */
    .left-float-image {
      float: left;
      margin-right: 20px;
      margin-bottom: 10px;
      border: 3px solid #e74c3c; /* Red border */
      padding: 5px;
      border-radius: 5px;
    }

    /* 4. Paragraph text in container */
    .float-container p {
      color: #333;
    }

    /* 5. Content Below Float */
    .below-float-content {
      background-color: #cceeff; /* Light blue */
      padding: 15px;
      border: 1px solid #007bff; /* Darker blue */
      margin: 20px auto;
      width: 80%;
      max-width: 700px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
      color: #333;
    }
  </style>
</head>
<body>
  <h2>CSS Floats Lab: Clearing Floats</h2>

  <p>នេះជាមាតិកាធម្មតា មុន Container ដែលមាន Element អណ្តែត។</p>
  <p>សូមសង្កេតមើលពីរបៀបដែលមាតិកាត្រូវបានប៉ះពាល់ដោយ Element អណ្តែត។</p>

  <div class="float-container clearfix">
    <h3>Container ជាមួយ Element អណ្តែត</h3>
    <img src="https://via.placeholder.com/150x100?text=Left+Float" alt="Left floated image" class="left-float-image">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
  </div>

  <div class="below-float-content">
    <h3>មាតិកាខាងក្រោម Element អណ្តែត</h3>
    <p>បន្ទាប់ពីអនុវត្ត Clearfix លើ Container ខាងលើ មាតិកានេះនឹងស្ថិតនៅខាងក្រោមវាបានត្រឹមត្រូវ ដោយមិនឡើងទៅខាងក្រោមរូបភាពដែលអណ្តែតទៀតទេ។</p>
  </div>
</body>
</html>`
  }
};

export default CSSLesson4_2Content;