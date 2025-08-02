// src/components/lessons/bootstrap/BootstrapLesson3_3.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson3_3Content: LessonContent = {
  title: 'Dropdowns និង Tooltips',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Dropdowns',
    'របៀបបង្កើត Basic Dropdown',
    'របៀបបន្ថែម Dropdown Items និង Dividers',
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Tooltips',
    'របៀបបង្កើត Basic Tooltip',
    'របៀបកំណត់ទីតាំង Tooltip (Top, Bottom, Left, Right)'
  ],
  content: `
# Dropdowns និង Tooltips 🔽💡

---

Bootstrap ផ្តល់ជូននូវ Components ដែលមានប្រយោជន៍សម្រាប់អន្តរកម្មអ្នកប្រើប្រាស់ដូចជា **Dropdowns** (បញ្ជីទម្លាក់ចុះ) និង **Tooltips** (ព័ត៌មានជំនួយ) ។

---

## 1. Dropdowns (បញ្ជីទម្លាក់ចុះ) 🖱️

Dropdowns គឺជាបញ្ជីនៃ Links ឬ Actions ដែលអាចបិទបើកបាន។

### Basic Dropdown Structure
ដើម្បីបង្កើត Dropdown អ្នកត្រូវប្រើ Class \`dropdown\` សម្រាប់ Wrapper Element, \`dropdown-toggle\` សម្រាប់ប៊ូតុងដែលបិទបើក Dropdown, និង \`dropdown-menu\` សម្រាប់បញ្ជីធាតុ Dropdown ។

\`\`\`html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown Button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
\`\`\`
* \`dropdown\`: Wrapper សម្រាប់ Dropdown ។
* \`dropdown-toggle\`: ប៊ូតុងដែលបើក/បិទ Dropdown ។
* \`data-bs-toggle="dropdown"\`: Attributes សម្រាប់បើក/បិទ Dropdown ។
* \`dropdown-menu\`: បញ្ជីធាតុ Dropdown ។
* \`dropdown-item\`: ធាតុនីមួយៗនៅក្នុង Dropdown ។

### Dropdown Items and Dividers
អ្នកអាចបន្ថែម Dividers (បន្ទាត់បែងចែក) រវាងធាតុ Dropdown ដោយប្រើ Class \`dropdown-divider\` ។

\`\`\`html
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><hr class="dropdown-divider"></li>
  <li><a class="dropdown-item" href="#">Separated link</a></li>
</ul>
\`\`\`
* \`dropdown-divider\`: បង្កើតបន្ទាត់បែងចែក។

### Dropdown Headers
អ្នកអាចបន្ថែម Header ទៅក្នុង Dropdown ដោយប្រើ Class \`dropdown-header\` ។

\`\`\`html
<ul class="dropdown-menu">
  <li><h6 class="dropdown-header">Dropdown Header</h6></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
</ul>
\`\`\`

---

## 2. Tooltips (ព័ត៌មានជំនួយ) 💬

Tooltips គឺជា Popover តូចៗដែលលេចឡើងនៅពេលអ្នកប្រើប្រាស់ដាក់ Mouse ពីលើ Element មួយ។

### Basic Tooltip
ដើម្បីបង្កើត Tooltip អ្នកត្រូវបន្ថែម Attributes \`data-bs-toggle="tooltip"\`, \`data-bs-placement="top"\` (ឬ bottom, left, right) និង \`title\` ។ អ្នកក៏ត្រូវ Init Tooltip ដោយ JavaScript ផងដែរ។

\`\`\`html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip នៅខាងលើ
</button>

<script>
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
</script>
\`\`\`
* \`data-bs-toggle="tooltip"\`: កំណត់ថា Element នេះជា Tooltip ។
* \`data-bs-placement\`: កំណត់ទីតាំង Tooltip (top, bottom, left, right) ។
* \`title\`: អត្ថបទដែលនឹងបង្ហាញក្នុង Tooltip ។
* **JavaScript Initialization:** Tooltips ត្រូវការ JavaScript ដើម្បីដំណើរការ។

### Tooltip Placement
អ្នកអាចកំណត់ទីតាំង Tooltip ទៅ Top, Right, Bottom, ឬ Left ។

\`\`\`html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip នៅខាងលើ
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
  Tooltip នៅខាងស្តាំ
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  Tooltip នៅខាងក្រោម
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Tooltip នៅខាងឆ្វេង
</button>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Dropdown Menu និង Tooltip</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីប៊ូតុង Dropdown ដែលមាន Links និង Tooltip នៅលើប៊ូតុងមួយ។</p>
<div class="container mt-5">
  <div class="dropdown mb-5">
    <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
      ជម្រើស
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><a class="dropdown-item" href="#">កែសម្រួល Profile</a></li>
      <li><a class="dropdown-item" href="#">ការកំណត់</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">ចេញពីប្រព័ន្ធ</a></li>
    </ul>
  </div>

  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="ចុចដើម្បីមើលព័ត៌មានបន្ថែម។">
    ដាក់ Mouse ពីលើខ្ញុំ
  </button>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Dropdowns & Tooltips Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <div class="dropdown mb-5">
            <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                ជម្រើស
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">កែសម្រួល Profile</a></li>
                <li><a class="dropdown-item" href="#">ការកំណត់</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">ចេញពីប្រព័ន្ធ</a></li>
            </ul>
        </div>

        <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="ចុចដើម្បីមើលព័ត៌មានបន្ថែម។">
            ដាក់ Mouse ពីលើខ្ញុំ
        </button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    <script>
        // Initialize tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    </script>
</body>
</html>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ Wrapper Element របស់ Dropdown?',
      options: ['`dropdown-container`', '`dropdown-wrapper`', '`dropdown`', '`menu-wrapper`'],
      correct: 2,
      explanation: 'Class `dropdown` ត្រូវបានប្រើសម្រាប់ Wrapper Element របស់ Dropdown ។'
    },
    {
      question: 'តើ Attributes មួយណាដែលត្រូវបានប្រើដើម្បីបើក/បិទ Dropdown?',
      options: ['`data-toggle="dropdown"`', '`data-bs-toggle="dropdown"`', '`onclick="toggleDropdown()"`', '`href="#dropdown"`'],
      correct: 1,
      explanation: 'Attributes `data-bs-toggle="dropdown"` ត្រូវបានប្រើដើម្បីបើក/បិទ Dropdown ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីបង្កើតបន្ទាត់បែងចែកនៅក្នុង Dropdown Menu?',
      options: ['`dropdown-line`', '`dropdown-separator`', '`dropdown-divider`', '`menu-line`'],
      correct: 2,
      explanation: 'Class `dropdown-divider` ត្រូវបានប្រើដើម្បីបង្កើតបន្ទាត់បែងចែកនៅក្នុង Dropdown Menu ។'
    },
    {
      question: 'តើ Attributes មួយណាដែលកំណត់ទីតាំង Tooltip នៅខាងក្រោម?',
      options: ['`data-bs-position="bottom"`', '`data-bs-place="bottom"`', '`data-bs-placement="bottom"`', '`data-bs-tooltip-bottom`'],
      correct: 2,
      explanation: 'Attributes `data-bs-placement="bottom"` កំណត់ទីតាំង Tooltip នៅខាងក្រោម។'
    },
    {
      question: 'តើ Tooltip ត្រូវការអ្វីខ្លះដើម្បីដំណើរការក្រៅពី HTML Attributes?',
      options: ['CSS ផ្ទាល់ខ្លួន', 'JavaScript Initialization', 'រូបភាព', 'គ្មានអ្វីទាំងអស់'],
      correct: 1,
      explanation: 'Tooltips ត្រូវការ JavaScript Initialization ដើម្បីដំណើរការ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ធាតុនីមួយៗនៅក្នុង Dropdown Menu?',
      options: ['`menu-item`', '`dropdown-link`', '`dropdown-item`', '`list-item`'],
      correct: 2,
      explanation: 'Class `dropdown-item` ត្រូវបានប្រើសម្រាប់ធាតុនីមួយៗនៅក្នុង Dropdown Menu ។'
    },
    {
      question: 'តើ Attributes `title` នៅក្នុង Tooltip ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ ID របស់ Tooltip',
        'ដើម្បីកំណត់ពណ៌ Tooltip',
        'ដើម្បីកំណត់អត្ថបទដែលនឹងបង្ហាញក្នុង Tooltip',
        'ដើម្បីកំណត់ទំហំ Tooltip'
      ],
      correct: 2,
      explanation: 'Attributes `title` ត្រូវបានប្រើដើម្បីកំណត់អត្ថបទដែលនឹងបង្ហាញក្នុង Tooltip ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីបន្ថែម Header ទៅក្នុង Dropdown Menu?',
      options: ['`dropdown-title`', '`dropdown-heading`', '`dropdown-header`', '`menu-header`'],
      correct: 2,
      explanation: 'Class `dropdown-header` ត្រូវបានប្រើដើម្បីបន្ថែម Header ទៅក្នុង Dropdown Menu ។'
    },
    {
      question: 'តើ `data-bs-toggle="tooltip"` ត្រូវបានដាក់នៅលើ Element មួយណា?',
      options: ['`<div>`', '`<p>`', '`<button>` ឬ `<a>`', '`<span>`'],
      correct: 2,
      explanation: '`data-bs-toggle="tooltip"` ត្រូវបានដាក់នៅលើ Element ដែលអ្នកចង់ឱ្យ Tooltip លេចឡើង (ជាធម្មតា `<button>` ឬ `<a>`) ។'
    },
    {
      question: 'តើ Dropdown Menu ត្រូវបានរុំព័ទ្ធដោយ Tag HTML មួយណា?',
      options: ['`<ol>`', '`<ul>`', '`<div>`', '`<span>`'],
      correct: 1,
      explanation: 'Dropdown Menu ត្រូវបានរុំព័ទ្ធដោយ Tag `<ul>` ជាមួយនឹង Class `dropdown-menu` ។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នាសំខាន់រវាង Dropdown និង Modal?',
      options: [
        'Dropdown គឺជា Popover តូចមួយ ខណៈ Modal គឺជាប្រអប់ Dialog ពេញអេក្រង់',
        'Dropdown ប្រើសម្រាប់ Navigation ខណៈ Modal ប្រើសម្រាប់ Form',
        'Dropdown មិនត្រូវការ JavaScript ទេ ខណៈ Modal ត្រូវការ',
        'Dropdown បង្ហាញបញ្ជីជម្រើស ខណៈ Modal ទាមទារអន្តរកម្មអ្នកប្រើប្រាស់'
      ],
      correct: 3,
      explanation: 'Dropdown បង្ហាញបញ្ជីជម្រើសដែលជាធម្មតាសម្រាប់ Navigation ឬ Actions ខណៈ Modal គឺជាប្រអប់ Dialog ដែលលេចឡើងនៅពីលើមាតិកាទំព័រ និងទាមទារឱ្យអ្នកប្រើប្រាស់ធ្វើអន្តរកម្មជាមួយវា។'
    },
    {
      question: 'តើ Class `dropdown-toggle` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីផ្លាស់ប្តូរពណ៌ប៊ូតុង',
        'ដើម្បីបន្ថែម Icon ទៅប៊ូតុង',
        'ដើម្បីកំណត់ប៊ូតុងជា Trigger សម្រាប់ Dropdown',
        'ដើម្បីលាក់ប៊ូតុង'
      ],
      correct: 2,
      explanation: 'Class `dropdown-toggle` ត្រូវបានប្រើដើម្បីកំណត់ប៊ូតុងជា Trigger សម្រាប់ Dropdown និងបន្ថែម Caret Icon ។'
    },
    {
      question: 'តើ Tooltip អាចបង្ហាញនៅទីតាំងប៉ុន្មាន?',
      options: ['1', '2', '3', '4'],
      correct: 3,
      explanation: 'Tooltip អាចបង្ហាញនៅ 4 ទីតាំងគឺ Top, Right, Bottom, និង Left ។'
    },
    {
      question: 'តើ `aria-expanded="false"` Attribute នៅក្នុង Dropdown Button ធ្វើអ្វី?',
      options: [
        'បង្ហាញថា Dropdown កំពុងបើក',
        'បង្ហាញថា Dropdown កំពុងបិទ',
        'កំណត់ទំហំ Dropdown',
        'លាក់ Dropdown'
      ],
      correct: 1,
      explanation: '`aria-expanded="false"` បង្ហាញថា Dropdown កំពុងបិទ (មិនទាន់ Expand) ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Dropdown Menu និង Tooltip

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN** ។

នៅក្នុងឯកសារនោះ សូមបង្កើត៖

1.  **ប៊ូតុង Dropdown មួយ** ដែលមានអត្ថបទ "Menu" ។
2.  នៅក្នុង **Dropdown Menu** សូមដាក់ Links 2 គឺ "Profile" និង "Settings" បន្ទាប់មកមាន **បន្ទាត់បែងចែក (Divider)** និង Link "Logout" ។
3.  **ប៊ូតុងមួយទៀត** ដែលមានអត្ថបទ "ព័ត៌មានជំនួយ" ហើយនៅពេលដាក់ Mouse ពីលើវា សូមបង្ហាញ **Tooltip** ដែលមានអត្ថបទ "នេះជា Tooltip នៅខាងស្តាំ" (កំណត់ Tooltip នៅខាងស្តាំ) ។
4.  ត្រូវប្រាកដថា Tooltip ដំណើរការដោយបន្ថែម **JavaScript Initialization** ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Dropdowns & Tooltips Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h1>ការអនុវត្តន៍ Dropdowns និង Tooltips</h1>
        
        <div class="dropdown mb-5">
            <button class="btn btn-info dropdown-toggle" type="button" id="labDropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
            </button>
            <ul class="dropdown-menu" aria-labelledby="labDropdownMenu">
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
        </div>

        <button type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="right" title="នេះជា Tooltip នៅខាងស្តាំ">
            ព័ត៌មានជំនួយ
        </button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    <script>
        // Initialize tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    </script>
</body>
</html>`
  }
};

export default BootstrapLesson3_3Content;