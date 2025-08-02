// src/components/lessons/bootstrap/BootstrapLesson3_4.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson3_4Content: LessonContent = {
  title: 'Popovers និង Badges',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Popovers',
    'របៀបបង្កើត Basic Popover',
    'របៀបកំណត់ទីតាំង Popover និងមាតិកា',
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Badges',
    'របៀបប្រើប្រាស់ Badges ជាមួយ Heading និង Buttons',
    'របៀបប្រើប្រាស់ Pill Badges'
  ],
  content: `
# Popovers និង Badges 💬🏷️

---

Bootstrap ផ្តល់ជូននូវ Components ដែលមានប្រយោជន៍សម្រាប់បង្ហាញព័ត៌មានបន្ថែម (**Popovers**) និងស្លាកសញ្ញា (**Badges**) ។

---

## 1. Popovers (ប្រអប់ព័ត៌មាន) ℹ️

Popovers គឺជាប្រអប់ Overlay តូចៗដែលបង្ហាញនៅពេលអ្នកប្រើប្រាស់ចុចលើ Element មួយ។ វារីកធំជាង Tooltip ហើយអាចផ្ទុកចំណងជើង និងអត្ថបទ។

### Basic Popover Structure
ដើម្បីបង្កើត Popover អ្នកត្រូវបន្ថែម Attributes \`data-bs-toggle="popover"\`, \`data-bs-title\` (សម្រាប់ចំណងជើង), \`data-bs-content\` (សម្រាប់មាតិកា) និង \`data-bs-placement\` ។ អ្នកក៏ត្រូវ **Init Popover ដោយ JavaScript** ផងដែរ។

\`\`\`html
<button type="button" class="btn btn-danger" data-bs-toggle="popover" data-bs-title="ចំណងជើង Popover" data-bs-content="នេះជាមាតិកាសម្រាប់ Popover របស់អ្នក។" data-bs-placement="right">
  ចុចខ្ញុំសម្រាប់ Popover
</button>

<script>
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
</script>
\`\`\`
* \`data-bs-toggle="popover"\`: កំណត់ថា Element នេះជា Popover ។
* \`data-bs-title\`: ចំណងជើងរបស់ Popover ។
* \`data-bs-content\`: មាតិកា Body របស់ Popover ។
* \`data-bs-placement\`: កំណត់ទីតាំង Popover (top, bottom, left, right) ។
* **JavaScript Initialization:** Popovers ត្រូវការ JavaScript ដើម្បីដំណើរការ។

### Popover Placement
អ្នកអាចកំណត់ទីតាំង Popover ទៅ Top, Right, Bottom, ឬ Left ។

\`\`\`html
<button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="top" data-bs-title="Popover Top" data-bs-content="មាតិកា Popover ។">
  Popover នៅខាងលើ
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="right" data-bs-title="Popover Right" data-bs-content="មាតិកា Popover ។">
  Popover នៅខាងស្តាំ
</button>
\`\`\`

---

## 2. Badges (ផ្លាកសញ្ញា) 🏷️

Badges គឺជា Component តូចៗដែលប្រើសម្រាប់បង្ហាញចំនួនរាប់ ឬស្លាកសញ្ញា។

### Basic Badges
Badges ត្រូវបានបង្កើតឡើងដោយ Class \`badge\` រួមជាមួយ Class ពណ៌ \`bg-*\` ។

\`\`\`html
<h1>ចំណងជើង <span class="badge bg-secondary">ថ្មី</span></h1>
<button type="button" class="btn btn-primary">
  ការជូនដំណឹង <span class="badge bg-danger">4</span>
</button>
\`\`\`
* \`badge\`: Class មូលដ្ឋានសម្រាប់ Badge ។
* \`bg-secondary\`, \`bg-danger\`: Classes សម្រាប់ពណ៌ផ្ទៃខាងក្រោយ។

### Pill Badges
អ្នកអាចធ្វើឱ្យ Badges មានរាងមូល (Pill shape) ដោយបន្ថែម Class \`rounded-pill\` ។

\`\`\`html
<span class="badge bg-primary rounded-pill">Primary</span>
<span class="badge bg-success rounded-pill">Success</span>
\`\`\`
* \`rounded-pill\`: ធ្វើឱ្យ Badge មានរាងមូល។

### Positioned Badges
អ្នកអាចដាក់ Badges នៅលើ Icon ឬ Button ដើម្បីបង្ហាញការជូនដំណឹង។

\`\`\`html
<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
\`\`\`
* \`position-relative\`, \`position-absolute\`, \`top-0\`, \`start-100\`, \`translate-middle\`: Classes សម្រាប់កំណត់ទីតាំង Badge ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Popover និង Badges</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីប៊ូតុងដែលបើក Popover និង Heading ជាមួយ Badges ។</p>
<div class="container mt-5">
  <button type="button" class="btn btn-info mb-5" data-bs-toggle="popover" data-bs-title="ព័ត៌មានលម្អិត" data-bs-content="នេះជាព័ត៌មានលម្អិតបន្ថែមអំពីមុខងារនេះ។" data-bs-placement="bottom">
    ចុចដើម្បីមើលព័ត៌មាន
  </button>

  <h2 class="mt-5">
    ផលិតផលថ្មី <span class="badge bg-success">ថ្មី!</span>
  </h2>
  <p>
    មានទំនិញក្នុងស្តុក <span class="badge bg-primary rounded-pill">25</span>
  </p>
  <button type="button" class="btn btn-dark position-relative">
    រទេះទិញទំនិញ
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
      3
      <span class="visually-hidden">items in cart</span>
    </span>
  </button>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Popovers & Badges Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <button type="button" class="btn btn-info mb-5" data-bs-toggle="popover" data-bs-title="ព័ត៌មានលម្អិត" data-bs-content="នេះជាព័ត៌មានលម្អិតបន្ថែមអំពីមុខងារនេះ។" data-bs-placement="bottom">
            ចុចដើម្បីមើលព័ត៌មាន
        </button>

        <h2 class="mt-5">
            ផលិតផលថ្មី <span class="badge bg-success">ថ្មី!</span>
        </h2>
        <p>
            មានទំនិញក្នុងស្តុក <span class="badge bg-primary rounded-pill">25</span>
        </p>
        <button type="button" class="btn btn-dark position-relative">
            រទេះទិញទំនិញ
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
              3
              <span class="visually-hidden">items in cart</span>
            </span>
        </button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    <script>
        // Initialize popovers
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
    </script>
</body>
</html>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ Popover?',
      options: ['`popup`', '`tooltip`', '`popover`', '`info-box`'],
      correct: 2,
      explanation: 'Class `popover` គឺជា Class មូលដ្ឋានសម្រាប់ Popover ។'
    },
    {
      question: 'តើ Attributes មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់ចំណងជើង Popover?',
      options: ['`data-bs-title`', '`data-popover-title`', '`title`', '`popover-header`'],
      correct: 0,
      explanation: 'Attributes `data-bs-title` ត្រូវបានប្រើដើម្បីកំណត់ចំណងជើង Popover ។'
    },
    {
      question: 'តើ Attributes មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់មាតិកា Body របស់ Popover?',
      options: ['`data-bs-body`', '`data-popover-content`', '`data-bs-content`', '`content`'],
      correct: 2,
      explanation: 'Attributes `data-bs-content` ត្រូវបានប្រើដើម្បីកំណត់មាតិកា Body របស់ Popover ។'
    },
    {
      question: 'តើ Popover ត្រូវការអ្វីខ្លះដើម្បីដំណើរការក្រៅពី HTML Attributes?',
      options: ['CSS ផ្ទាល់ខ្លួន', 'JavaScript Initialization', 'រូបភាព', 'គ្មានអ្វីទាំងអស់'],
      correct: 1,
      explanation: 'Popovers ត្រូវការ JavaScript Initialization ដើម្បីដំណើរការ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ Badges?',
      options: ['`tag`', '`label`', '`badge`', '`mark`'],
      correct: 2,
      explanation: 'Class `badge` ត្រូវបានប្រើសម្រាប់ Badges ។'
    },
    {
      question: 'ដើម្បីធ្វើឱ្យ Badge មានរាងមូល (Pill shape) តើ Class មួយណាដែលត្រូវបន្ថែម?',
      options: ['`rounded`', '`circle`', '`rounded-pill`', '`pill-shape`'],
      correct: 2,
      explanation: 'Class `rounded-pill` ត្រូវបានប្រើដើម្បីធ្វើឱ្យ Badge មានរាងមូល (Pill shape) ។'
    },
    {
      question: 'តើ Class `bg-danger` ផ្តល់ពណ៌អ្វីដល់ Badge?',
      options: ['ខៀវ', 'បៃតង', 'ក្រហម', 'លឿង'],
      correct: 2,
      explanation: 'Class `bg-danger` ផ្តល់ពណ៌ក្រហមដល់ Badge ។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នាសំខាន់រវាង Tooltip និង Popover?',
      options: [
        'Tooltip ធំជាង Popover',
        'Tooltip មានចំណងជើង ខណៈ Popover គ្មាន',
        'Tooltip លេចឡើងនៅពេលដាក់ Mouse ពីលើ ខណៈ Popover លេចឡើងនៅពេលចុច',
        'Tooltip ត្រូវការ JavaScript ខណៈ Popover មិនត្រូវការ'
      ],
      correct: 2,
      explanation: 'Tooltip លេចឡើងនៅពេលដាក់ Mouse ពីលើ Element ខណៈ Popover លេចឡើងនៅពេលចុចលើ Element ហើយអាចផ្ទុកមាតិកាច្រើនជាង Tooltip ។'
    },
    {
      question: 'តើ Class `position-absolute` ត្រូវបានប្រើសម្រាប់អ្វីនៅពេលកំណត់ទីតាំង Badge?',
      options: [
        'ដើម្បីកំណត់ទីតាំង Badge ទាក់ទងនឹង Viewport',
        'ដើម្បីកំណត់ទីតាំង Badge ទាក់ទងនឹង Parent Element ដែលមាន `position-relative`',
        'ដើម្បីលាក់ Badge',
        'ដើម្បីផ្លាស់ប្តូរទំហំ Badge'
      ],
      correct: 1,
      explanation: 'Class `position-absolute` ត្រូវបានប្រើដើម្បីកំណត់ទីតាំង Badge ទាក់ទងនឹង Parent Element ដែលមាន `position-relative` ។'
    },
    {
      question: 'តើ Class `visually-hidden` ត្រូវបានប្រើសម្រាប់អ្វីនៅក្នុង Positioned Badges?',
      options: [
        'ដើម្បីលាក់ Badge ពីការមើលឃើញ',
        'ដើម្បីលាក់អត្ថបទពីការមើលឃើញ ប៉ុន្តែអាចចូលប្រើបានសម្រាប់ Screen Readers',
        'ដើម្បីផ្លាស់ប្តូរពណ៌ Badge',
        'ដើម្បីធ្វើឱ្យ Badge អសកម្ម'
      ],
      correct: 1,
      explanation: 'Class `visually-hidden` លាក់អត្ថបទពីការមើលឃើញ ប៉ុន្តែអាចចូលប្រើបានសម្រាប់ Screen Readers សម្រាប់គោលបំណងដែលអាចចូលប្រើបាន។'
    },
    {
      question: 'តើ Attributes `data-bs-placement` អាចមានតម្លៃអ្វីខ្លះ?',
      options: ['`center`, `middle`, `corner`', '`in`, `out`, `over`', '`top`, `bottom`, `left`, `right`', '`start`, `end`, `top`, `bottom`'],
      correct: 2,
      explanation: 'Attributes `data-bs-placement` អាចមានតម្លៃ `top`, `bottom`, `left`, `right` ។'
    },
    {
      question: 'តើ Tag HTML មួយណាដែលជាទូទៅត្រូវបានប្រើសម្រាប់ Badge?',
      options: ['`<div>`', '`<span>`', '`<p>`', '`<a>`'],
      correct: 1,
      explanation: 'Tag `<span>` គឺជា Tag HTML ទូទៅបំផុតដែលប្រើសម្រាប់ Badge ។'
    },
    {
      question: 'តើ Class `translate-middle` ត្រូវបានប្រើសម្រាប់អ្វីនៅពេលកំណត់ទីតាំង Badge?',
      options: [
        'ដើម្បីផ្លាស់ប្តូរ Badge ទៅកណ្តាលនៃ Parent Element',
        'ដើម្បីផ្លាស់ប្តូរ Badge ទៅកណ្តាលនៃ Viewport',
        'ដើម្បីផ្លាស់ប្តូរ Badge ដោយ -50% តាមអ័ក្ស X និង Y',
        'ដើម្បីផ្លាស់ប្តូរ Badge ដោយ +50% តាមអ័ក្ស X និង Y'
      ],
      correct: 2,
      explanation: 'Class `translate-middle` ត្រូវបានប្រើដើម្បីផ្លាស់ប្តូរ Badge ដោយ -50% តាមអ័ក្ស X និង Y ដើម្បីឱ្យវាស្ថិតនៅចំកណ្តាលនៃ Element ដែលវាត្រូវបានដាក់។'
    },
    {
      question: 'តើ Class `top-0` និង `start-100` ត្រូវបានប្រើសម្រាប់អ្វីនៅក្នុង Positioned Badge?',
      options: [
        'កំណត់ Badge នៅកំពូល និងឆ្វេង',
        'កំណត់ Badge នៅកំពូល និងស្តាំ',
        'កំណត់ Badge នៅបាត និងឆ្វេង',
        'កំណត់ Badge នៅបាត និងស្តាំ'
      ],
      correct: 1,
      explanation: '`top-0` កំណត់ទីតាំងកំពូល 0% និង `start-100` កំណត់ទីតាំងឆ្វេង 100% (សម្រាប់ LTR) ដែលដាក់ Badge នៅជ្រុងខាងស្តាំខាងលើនៃ Parent Element ។'
    },
    {
      question: 'តើ Popover អាចផ្ទុកមាតិកាប្រភេទអ្វីខ្លះ?',
      options: [
        'តែអត្ថបទប៉ុណ្ណោះ',
        'តែរូបភាពប៉ុណ្ណោះ',
        'ចំណងជើង និងអត្ថបទ',
        'តែប៊ូតុងប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Popover អាចផ្ទុកទាំងចំណងជើង (title) និងអត្ថបទ (content) ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Popover និង Badges

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN** ។

នៅក្នុងឯកសារនោះ សូមបង្កើត៖

1.  **ប៊ូតុងមួយ** ដែលមានអត្ថបទ "ព័ត៌មានបន្ថែម" ដែលនៅពេលចុច នឹងបង្ហាញ **Popover នៅខាងក្រោម**។ Popover គួរតែមាន **ចំណងជើង "ចំណងជើង Popover"** និង **មាតិកា "នេះជាមាតិកា Popover សាមញ្ញ។"** ។
2.  **Heading មួយ** (ឧទាហរណ៍៖ \`<h2>\`) ដែលមានអត្ថបទ "ការជូនដំណឹង" រួមជាមួយ **Badge ពណ៌ខៀវ (Primary)** ដែលមានលេខ "5" និងមាន **រាងមូល (Pill)** ។
3.  ត្រូវប្រាកដថា Popover ដំណើរការដោយបន្ថែម **JavaScript Initialization** ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Popovers & Badges Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h1>ការអនុវត្តន៍ Popovers និង Badges</h1>
        
        <button type="button" class="btn btn-success mb-5" 
                data-bs-toggle="popover" 
                data-bs-title="ចំណងជើង Popover" 
                data-bs-content="នេះជាមាតិកា Popover សាមញ្ញ។" 
                data-bs-placement="bottom">
            ព័ត៌មានបន្ថែម
        </button>

        <h2 class="mt-5">
            ការជូនដំណឹង <span class="badge bg-primary rounded-pill">5</span>
        </h2>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    <script>
        // Initialize popovers
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
    </script>
</body>
</html>`
  }
};

export default BootstrapLesson3_4Content;