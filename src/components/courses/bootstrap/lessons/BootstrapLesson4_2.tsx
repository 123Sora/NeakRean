// src/components/lessons/bootstrap/BootstrapLesson4_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson4_2Content: LessonContent = {
  title: 'Utilities (ឧបករណ៍ប្រើប្រាស់)',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Utility Classes',
    'របៀបប្រើប្រាស់ Classes សម្រាប់ Colors និង Backgrounds',
    'របៀបប្រើប្រាស់ Classes សម្រាប់ Borders',
    'របៀបប្រើប្រាស់ Classes សម្រាប់ Spacing (Margin និង Padding)',
    'របៀបប្រើប្រាស់ Classes សម្រាប់ Display Properties',
    'របៀបប្រើប្រាស់ Flexbox Utilities',
    'របៀបប្រើប្រាស់ Shadows'
  ],
  content: `
# Utilities (ឧបករណ៍ប្រើប្រាស់) 🛠️

---

**Bootstrap Utilities** គឺជា Class តូចៗ ដែលអាចប្រើដើម្បីអនុវត្តរចនាប័ទ្មយ៉ាងរហ័ស ដោយមិនចាំបាច់សរសេរ CSS ផ្ទាល់ខ្លួន។ ពួកវាមានភាពបត់បែនខ្ពស់ និងជួយឱ្យការអភិវឌ្ឍន៍មានល្បឿនលឿន។

---

## 1. Colors and Backgrounds (ពណ៌ និងផ្ទៃខាងក្រោយ) 🎨

អ្នកអាចកំណត់**ពណ៌អត្ថបទ** និង**ផ្ទៃខាងក្រោយ**ដោយប្រើ Classes \`text-*\` និង \`bg-*\` ។

\`\`\`html
<p class="text-primary">អត្ថបទ Primary</p>
<p class="text-success">អត្ថបទ Success</p>
<div class="p-3 mb-2 bg-info text-white">ផ្ទៃខាងក្រោយ Info</div>
<div class="p-3 mb-2 bg-dark text-white">ផ្ទៃខាងក្រោយ Dark</div>
\`\`\`
* \`text-*\`: កំណត់ពណ៌អត្ថបទ (e.g., \`text-primary\`, \`text-success\`, \`text-danger\`, \`text-warning\`, \`text-info\`, \`text-light\`, \`text-dark\`, \`text-muted\`, \`text-white\`) ។
* \`bg-*\`: កំណត់ពណ៌ផ្ទៃខាងក្រោយ (e.g., \`bg-primary\`, \`bg-success\`, \`bg-danger\`, \`bg-warning\`, \`bg-info\`, \`bg-light\`, \`bg-dark\`, \`bg-white\`, \`bg-transparent\`) ។

---

## 2. Borders (ព្រំដែន) 🖼️

អ្នកអាចបន្ថែម **Border** ទៅ Element ដោយប្រើ Class \`border\` រួមជាមួយ Class ពណ៌ និងទីតាំង។

\`\`\`html
<div class="p-3 mb-2 border">Border លំនាំដើម</div>
<div class="p-3 mb-2 border border-primary">Border Primary</div>
<div class="p-3 mb-2 border border-top-0">Border គ្មានកំពូល</div>
<div class="p-3 mb-2 border rounded">Border មានជ្រុងមូល</div>
<div class="p-3 mb-2 border rounded-circle" style="width: 100px; height: 100px;"></div>
\`\`\`
* \`border\`: បន្ថែម Border ទាំងអស់។
* \`border-top-0\`, \`border-bottom-0\`, \`border-start-0\`, \`border-end-0\`: លុប Border ជាក់លាក់។
* \`border-primary\`: កំណត់ពណ៌ Border ។
* \`rounded\`, \`rounded-circle\`: ធ្វើឱ្យជ្រុងមូល។

---

## 3. Spacing (Margin និង Padding) ↔️↕️

**Spacing Utilities** ត្រូវបានប្រើដើម្បីកំណត់ **Margin** និង **Padding** ។

* **Property:** \`m\` (margin) ឬ \`p\` (padding)
* **Sides:** \`t\` (top), \`b\` (bottom), \`s\` (start/left), \`e\` (end/right), \`x\` (left & right), \`y\` (top & bottom), (blank) (all sides)
* **Sizes:** \`0\`, \`1\`, \`2\`, \`3\`, \`4\`, \`5\`, \`auto\` (សម្រាប់ Margin)

\`\`\`html
<div class="p-3 bg-light border">Padding គ្រប់ជ្រុង (p-3)</div>
<div class="mt-5 bg-light border">Margin Top (mt-5)</div>
<div class="py-4 bg-light border">Padding Top/Bottom (py-4)</div>
<div class="mx-auto bg-light border" style="width: 200px;">Margin Auto (mx-auto)</div>
\`\`\`

---

## 4. Display Properties (លក្ខណៈសម្បត្តិបង្ហាញ) 🖥️

អ្នកអាចផ្លាស់ប្តូរ \`display\` Property របស់ Element ។

\`\`\`html
<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-block p-2 bg-success text-white">d-block</div>
<span class="d-none">លាក់ Element</span>
<span class="d-md-block d-none">បង្ហាញតែលើ Medium និងធំជាង</span>
\`\`\`
* \`d-inline\`, \`d-block\`, \`d-flex\`, \`d-grid\`, \`d-none\`: កំណត់ \`display\` Property ។
* **Responsive variations:** \`d-sm-block\`, \`d-md-none\`, etc.

---

## 5. Flexbox Utilities (ឧបករណ៍ប្រើប្រាស់ Flexbox) 📦

**Flexbox Utilities** ជួយក្នុងការរៀបចំ Layout យ៉ាងងាយស្រួល។

\`\`\`html
<div class="d-flex justify-content-center align-items-center bg-light border p-3" style="height: 100px;">
  <div class="p-2 border">ធាតុ 1</div>
  <div class="p-2 border">ធាតុ 2</div>
</div>
\`\`\`
* \`d-flex\`: បង្កើត **Flex Container** ។
* \`justify-content-*\`: តម្រឹមធាតុតាមអ័ក្សសំខាន់ (main axis) ។
* \`align-items-*\`: តម្រឹមធាតុតាមអ័ក្សឆ្លងកាត់ (cross axis) ។

---

## 6. Shadows (ស្រមោល) 🌑

អ្នកអាចបន្ថែម **Shadow** ទៅ Element ។

\`\`\`html
<div class="shadow-sm p-3 mb-3 bg-white rounded">ស្រមោលតូច</div>
<div class="shadow p-3 mb-3 bg-white rounded">ស្រមោលធម្មតា</div>
<div class="shadow-lg p-3 mb-3 bg-white rounded">ស្រមោលធំ</div>
\`\`\`
* \`shadow-sm\`, \`shadow\`, \`shadow-lg\`: បន្ថែម Shadow ទំហំផ្សេងៗគ្នា។

---
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើប្រាស់ Utility Classes</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីការរួមបញ្ចូលគ្នានៃ Utility Classes ផ្សេងៗគ្នាដើម្បីរចនាម៉ូត Element ។</p>
<div class="container mt-5">
  <div class="p-4 mb-4 bg-primary text-white rounded shadow">
    <h4 class="mb-3">កាតព័ត៌មាន</h4>
    <p class="text-light">នេះជាអត្ថបទព័ត៌មានដែលមានផ្ទៃខាងក្រោយពណ៌ខៀវ និងស្រមោល។</p>
  </div>

  <div class="d-flex justify-content-between align-items-center border border-success p-3 mb-4 rounded-pill">
    <span class="text-success fw-bold">ស្ថានភាព:</span>
    <span class="badge bg-success rounded-pill">រួចរាល់</span>
  </div>

  <div class="d-block d-md-flex justify-content-around mt-5">
    <div class="p-3 m-2 border border-info rounded-3 shadow-sm text-center">
      <p class="text-info mb-0">ធាតុទី ១</p>
    </div>
    <div class="p-3 m-2 border border-warning rounded-3 shadow-sm text-center">
      <p class="text-warning mb-0">ធាតុទី ២</p>
    </div>
    <div class="p-3 m-2 border border-danger rounded-3 shadow-sm text-center">
      <p class="text-danger mb-0">ធាតុទី ៣</p>
    </div>
  </div>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Utilities Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <div class="p-4 mb-4 bg-primary text-white rounded shadow">
            <h4 class="mb-3">កាតព័ត៌មាន</h4>
            <p class="text-light">នេះជាអត្ថបទព័ត៌មានដែលមានផ្ទៃខាងក្រោយពណ៌ខៀវ និងស្រមោល។</p>
        </div>

        <div class="d-flex justify-content-between align-items-center border border-success p-3 mb-4 rounded-pill">
            <span class="text-success fw-bold">ស្ថានភាព:</span>
            <span class="badge bg-success rounded-pill">រួចរាល់</span>
        </div>

        <div class="d-block d-md-flex justify-content-around mt-5">
            <div class="p-3 m-2 border border-info rounded-3 shadow-sm text-center">
                <p class="text-info mb-0">ធាតុទី ១</p>
            </div>
            <div class="p-3 m-2 border border-warning rounded-3 shadow-sm text-center">
                <p class="text-warning mb-0">ធាតុទី ២</p>
            </div>
            <div class="p-3 m-2 border border-danger rounded-3 shadow-sm text-center">
                <p class="text-danger mb-0">ធាតុទី ៣</p>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់ពណ៌អត្ថបទ?',
      options: ['`color-*`', '`text-*`', '`font-color-*`', '`style-text-*`'],
      correct: 1,
      explanation: 'Class `text-*` ត្រូវបានប្រើដើម្បីកំណត់ពណ៌អត្ថបទ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់ពណ៌ផ្ទៃខាងក្រោយ?',
      options: ['`background-*`', '`bg-*`', '`color-bg-*`', '`fill-*`'],
      correct: 1,
      explanation: 'Class `bg-*` ត្រូវបានប្រើដើម្បីកំណត់ពណ៌ផ្ទៃខាងក្រោយ។'
    },
    {
      question: 'តើ Class មួយណាដែលបន្ថែម Border គ្រប់ជ្រុង?',
      options: ['`border-all`', '`border`', '`add-border`', '`full-border`'],
      correct: 1,
      explanation: 'Class `border` បន្ថែម Border គ្រប់ជ្រុង។'
    },
    {
      question: 'តើ Class `mt-5` មានន័យដូចម្តេច?',
      options: ['Margin Top 5px', 'Margin Top 5 units', 'Margin Bottom 5 units', 'Margin Left 5 units'],
      correct: 1,
      explanation: '`mt-5` មានន័យថា Margin Top 5 units ។'
    },
    {
      question: 'តើ Class `py-4` មានន័យដូចម្តេច?',
      options: ['Padding Top 4 units', 'Padding Bottom 4 units', 'Padding Top និង Bottom 4 units', 'Padding Left និង Right 4 units'],
      correct: 2,
      explanation: '`py-4` មានន័យថា Padding Top និង Bottom 4 units ។'
    },
    {
      question: 'តើ Class មួយណាដែលធ្វើឱ្យ Element បង្ហាញជា Block?',
      options: ['`d-block`', '`display-block`', '`block-element`', '`make-block`'],
      correct: 0,
      explanation: 'Class `d-block` ធ្វើឱ្យ Element បង្ហាញជា Block ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីបង្កើត Flex Container?',
      options: ['`flex-container`', '`d-flex`', '`flexbox`', '`container-flex`'],
      correct: 1,
      explanation: 'Class `d-flex` ត្រូវបានប្រើដើម្បីបង្កើត Flex Container ។'
    },
    {
      question: 'តើ Class `justify-content-center` ធ្វើអ្វី?',
      options: [
        'តម្រឹមធាតុទៅកណ្តាលតាមអ័ក្សឆ្លងកាត់',
        'តម្រឹមធាតុទៅកណ្តាលតាមអ័ក្សសំខាន់',
        'តម្រឹមធាតុទៅខាងឆ្វេង',
        'តម្រឹមធាតុទៅខាងស្តាំ'
      ],
      correct: 1,
      explanation: 'Class `justify-content-center` តម្រឹមធាតុទៅកណ្តាលតាមអ័ក្សសំខាន់ (main axis) ។'
    },
    {
      question: 'តើ Class មួយណាដែលបន្ថែមស្រមោលធំ?',
      options: ['`shadow-big`', '`shadow-xl`', '`shadow-lg`', '`large-shadow`'],
      correct: 2,
      explanation: 'Class `shadow-lg` បន្ថែមស្រមោលធំ។'
    },
    {
      question: 'តើ Class `rounded-circle` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ធ្វើឱ្យ Element មានរាងការ៉េ',
        'ធ្វើឱ្យ Element មានរាងមូលពេញ',
        'ធ្វើឱ្យ Element មានជ្រុងមូលបន្តិច',
        'ធ្វើឱ្យ Element មានរាងពងក្រពើ'
      ],
      correct: 1,
      explanation: 'Class `rounded-circle` ធ្វើឱ្យ Element មានរាងមូលពេញ។'
    },
    {
      question: 'តើ `mx-auto` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'កំណត់ Margin ស្វ័យប្រវត្តិនៅខាងលើ និងខាងក្រោម',
        'កំណត់ Margin ស្វ័យប្រវត្តិនៅខាងឆ្វេង និងខាងស្តាំ (សម្រាប់តម្រឹមកណ្តាល)',
        'កំណត់ Margin ស្វ័យប្រវត្តិនៅគ្រប់ជ្រុង',
        'កំណត់ Margin ស្វ័យប្រវត្តិនៅខាងឆ្វេង'
      ],
      correct: 1,
      explanation: '`mx-auto` កំណត់ Margin ស្វ័យប្រវត្តិនៅខាងឆ្វេង និងខាងស្តាំ ដែលជាធម្មតាប្រើសម្រាប់តម្រឹមកណ្តាល Block Element ។'
    },
    {
      question: 'តើ Class `d-none` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: ['ដើម្បីបង្ហាញ Element', 'ដើម្បីលាក់ Element', 'ដើម្បីផ្លាស់ប្តូរពណ៌ Element', 'ដើម្បីកំណត់ទំហំ Element'],
      correct: 1,
      explanation: 'Class `d-none` ត្រូវបានប្រើដើម្បីលាក់ Element ។'
    },
    {
      question: 'តើ Class `border-info` ផ្តល់ពណ៌អ្វីដល់ Border?',
      options: ['ខៀវខ្ចី', 'បៃតង', 'ក្រហម', 'លឿង'],
      correct: 0,
      explanation: 'Class `border-info` ផ្តល់ពណ៌ខៀវខ្ចីដល់ Border ។'
    },
    {
      question: 'តើ Class `align-items-center` ធ្វើអ្វីនៅក្នុង Flexbox?',
      options: [
        'តម្រឹមធាតុទៅកណ្តាលតាមអ័ក្សសំខាន់',
        'តម្រឹមធាតុទៅកណ្តាលតាមអ័ក្សឆ្លងកាត់',
        'តម្រឹមធាតុទៅខាងលើ',
        'តម្រឹមធាតុទៅខាងក្រោម'
      ],
      correct: 1,
      explanation: 'Class `align-items-center` តម្រឹមធាតុទៅកណ្តាលតាមអ័ក្សឆ្លងកាត់ (cross axis) ។'
    },
    {
      question: 'តើ Utility Classes របស់ Bootstrap ជួយអ្វីខ្លះក្នុងការអភិវឌ្ឍន៍?',
      options: [
        'ធ្វើឱ្យការអភិវឌ្ឍន៍យឺត',
        'បង្កើនទំហំ File CSS',
        'ជួយឱ្យការអភិវឌ្ឍន៍មានល្បឿនលឿន និងបត់បែនខ្ពស់',
        'ធ្វើឱ្យគេហទំព័រមិន Responsive'
      ],
      correct: 2,
      explanation: 'Utility Classes ជួយឱ្យការអភិវឌ្ឍន៍មានល្បឿនលឿន និងបត់បែនខ្ពស់ ដោយមិនចាំបាច់សរសេរ CSS ផ្ទាល់ខ្លួនច្រើន។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Layout ដោយប្រើ Utility Classes

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN** ។
នៅក្នុងឯកសារនោះ សូមបង្កើត Layout សាមញ្ញមួយដោយប្រើ Utility Classes ដូចខាងក្រោម៖

1.  \`div\` មួយដែលមាន**ផ្ទៃខាងក្រោយពណ៌បៃតង (Success)**, **អត្ថបទពណ៌ស (White)**, **Padding 4 units គ្រប់ជ្រុង**, **Margin Bottom 3 units** និងមាន**ជ្រុងមូលបន្តិច (rounded)** ។
2.  \`div\` មួយទៀតដែលមាន**Border ពណ៌ខៀវ (Primary) តែនៅខាងឆ្វេងប៉ុណ្ណោះ** និងមាន**Padding 3 units គ្រប់ជ្រុង**។
3.  ក្រុមនៃ \`div\` បីដែលត្រូវបានរៀបចំដោយ **Flexbox** ឱ្យនៅ**ចំកណ្តាលតាមអ័ក្សសំខាន់ (justify-content-center)** និងមាន**គម្លាត 2 units រវាងគ្នា (m-2)** ។ \`div\` នីមួយៗគួរតែមាន **Border**, **ស្រមោលតូច (shadow-sm)** និង**អត្ថបទពណ៌ប្រផេះ (muted)** ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Utilities Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h1>ការអនុវត្តន៍ Utilities</h1>
        
        <div class="bg-success text-white p-4 mb-3 rounded">
            <p class="mb-0">នេះជាប្រអប់ដែលមានផ្ទៃខាងក្រោយពណ៌បៃតង អត្ថបទពណ៌ស Padding និងជ្រុងមូល។</p>
        </div>

        <div class="border border-start border-primary p-3 mb-3">
            <p class="mb-0">នេះជាប្រអប់ដែលមាន Border ពណ៌ខៀវតែនៅខាងឆ្វេង។</p>
        </div>

        <div class="d-flex justify-content-center mt-4">
            <div class="p-3 m-2 border shadow-sm text-muted">
                <p class="mb-0">ធាតុទី ១</p>
            </div>
            <div class="p-3 m-2 border shadow-sm text-muted">
                <p class="mb-0">ធាតុទី ២</p>
            </div>
            <div class="p-3 m-2 border shadow-sm text-muted">
                <p class="mb-0">ធាតុទី ៣</p>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>`
  }
};

export default BootstrapLesson4_2Content;