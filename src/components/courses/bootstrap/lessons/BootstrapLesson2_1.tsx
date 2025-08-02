// src/components/lessons/bootstrap/BootstrapLesson2_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson2_1Content: LessonContent = {
  title: 'ប៊ូតុង និង សារ Alert',
  objectives: [
    'របៀបប្រើប្រាស់ Bootstrap Buttons',
    'ស្គាល់ពី Button Styles (primary, secondary, success, danger, etc.)',
    'របៀបប្រើប្រាស់ Button Sizes',
    'របៀបប្រើប្រាស់ Bootstrap Alerts',
    'ស្គាល់ពី Alert Styles និងរបៀបបិទវា'
  ],
  content: `
# ប៊ូតុង និង សារ Alert 🔘⚠️

---

Bootstrap ផ្តល់ជូននូវ Class ជាច្រើនសម្រាប់បង្កើតប៊ូតុង (Buttons) និងសារ Alert ដែលមានរូបរាងស្អាត និងងាយស្រួលប្រើ។

---

## 1. Bootstrap Buttons 🖱️

ប៊ូតុងគឺជាធាតុសំខាន់មួយនៃគេហទំព័រ។ Bootstrap ធ្វើឱ្យការបង្កើតប៊ូតុងមានភាពងាយស្រួលជាមួយនឹង Classes ដែលបានកំណត់ជាមុន។

### Basic Button
ដើម្បីបង្កើតប៊ូតុងមូលដ្ឋាន អ្នកគ្រាន់តែបន្ថែម Class \`btn\` ទៅលើធាតុ \`<button>\` ឬ \`<a>\` ។

\`\`\`html
<button type="button" class="btn">ប៊ូតុងធម្មតា</button>
\`\`\`

### Button Styles (Contextual Classes)
Bootstrap ផ្តល់នូវពណ៌ផ្សេងៗគ្នាសម្រាប់ប៊ូតុង ដើម្បីបង្ហាញពីគោលបំណងផ្សេងៗគ្នា។

| Style Class     | Description          |
| :-------------- | :------------------- |
| \`btn-primary\`   | ប៊ូតុងសំខាន់ (ខៀវ)    |
| \`btn-secondary\` | ប៊ូតុងបន្ទាប់បន្សំ (ប្រផេះ) |
| \`btn-success\`   | ប៊ូតុងជោគជ័យ (បៃតង)    |
| \`btn-danger\`    | ប៊ូតុងគ្រោះថ្នាក់ (ក្រហម) |
| \`btn-warning\`   | ប៊ូតុងព្រមាន (លឿង)     |
| \`btn-info\`      | ប៊ូតុងព័ត៌មាន (ខៀវស្រាល) |
| \`btn-light\`     | ប៊ូតុងស្រាល (ស)       |
| \`btn-dark\`      | ប៊ូតុងងងឹត (ខ្មៅ)      |
| \`btn-link\`      | ប៊ូតុងដូច Link        |

\`\`\`html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
\`\`\`

### Outline Buttons
ប្រសិនបើអ្នកចង់បានប៊ូតុងដែលមានតែគ្រោង (outline) អ្នកអាចប្រើ Class \`btn-outline-*\` ។

\`\`\`html
<button type="button" class="btn btn-outline-primary">Primary Outline</button>
<button type="button" class="btn btn-outline-success">Success Outline</button>
\`\`\`

### Button Sizes
អ្នកអាចផ្លាស់ប្តូរទំហំប៊ូតុងដោយប្រើ Classes \`btn-lg\` (Large), \`btn-sm\` (Small) ។

\`\`\`html
<button type="button" class="btn btn-primary btn-lg">ប៊ូតុងធំ</button>
<button type="button" class="btn btn-secondary">ប៊ូតុងធម្មតា</button>
<button type="button" class="btn btn-info btn-sm">ប៊ូតុងតូច</button>
\`\`\`

### Disabled State
ដើម្បីធ្វើឱ្យប៊ូតុងអសកម្ម (មិនអាចចុចបាន) អ្នកអាចបន្ថែម Class \`disabled\` ។

\`\`\`html
<button type="button" class="btn btn-primary" disabled>ប៊ូតុងអសកម្ម</button>
\`\`\`

---

## 2. Bootstrap Alerts 🔔

សារ Alert ត្រូវបានប្រើដើម្បីផ្តល់មតិកែលម្អដល់អ្នកប្រើប្រាស់ (ឧទាហរណ៍៖ សារជោគជ័យ សារកំហុស សារព្រមាន)។

### Basic Alert
ដើម្បីបង្កើត Alert អ្នកប្រើ Class \`alert\` រួមជាមួយ Class ពណ៌ \`alert-*\` ។

| Alert Class     | Description          |
| :-------------- | :------------------- |
| \`alert-primary\`   | Alert សំខាន់ (ខៀវ)    |
| \`alert-secondary\` | Alert បន្ទាប់បន្សំ (ប្រផេះ) |
| \`alert-success\`   | Alert ជោគជ័យ (បៃតង)    |
| \`alert-danger\`    | Alert គ្រោះថ្នាក់ (ក្រហម) |
| \`alert-warning\`   | Alert ព្រមាន (លឿង)     |
| \`alert-info\`      | Alert ព័ត៌មាន (ខៀវស្រាល) |
| \`alert-light\`     | Alert ស្រាល (ស)       |
| \`alert-dark\`      | Alert ងងឹត (ខ្មៅ)       |

\`\`\`html
<div class="alert alert-success" role="alert">
  នេះជាសារជោគជ័យ!
</div>
<div class="alert alert-danger" role="alert">
  មានកំហុសកើតឡើង!
</div>
\`\`\`

### Dismissing Alerts
អ្នកអាចធ្វើឱ្យ Alert អាចបិទបាន (dismissible) ដោយបន្ថែម Class \`alert-dismissible fade show\` និងប៊ូតុងបិទ \`<button type="button" class="btn-close" data-bs-dismiss="alert"></button>\` ។

\`\`\`html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>ព្រមាន!</strong> ទិន្នន័យរបស់អ្នកអាចនឹងបាត់បង់។
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ប៊ូតុង និង Alert ចម្រុះ</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីប៊ូតុងដែលមានទំហំខុសៗគ្នា និងសារ Alert ដែលអាចបិទបាន។</p>
<div class="container mt-5">
  <button type="button" class="btn btn-primary btn-lg mb-3">ចុចដើម្បីបន្ត</button>
  <button type="button" class="btn btn-outline-secondary mb-3">បោះបង់</button>
  <button type="button" class="btn btn-danger btn-sm mb-3" disabled>លុប (អសកម្ម)</button>

  <div class="alert alert-success alert-dismissible fade show mt-4" role="alert">
    <strong>ជោគជ័យ!</strong> ទិន្នន័យរបស់អ្នកត្រូវបានរក្សាទុកដោយជោគជ័យ។
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>

  <div class="alert alert-info mt-3" role="alert">
    ព័ត៌មានសំខាន់សម្រាប់អ្នក។
  </div>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Buttons and Alerts Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <button type="button" class="btn btn-primary btn-lg mb-3">ចុចដើម្បីបន្ត</button>
        <button type="button" class="btn btn-outline-secondary mb-3">បោះបង់</button>
        <button type="button" class="btn btn-danger btn-sm mb-3" disabled>លុប (អសកម្ម)</button>

        <div class="alert alert-success alert-dismissible fade show mt-4" role="alert">
            <strong>ជោគជ័យ!</strong> ទិន្នន័យរបស់អ្នកត្រូវបានរក្សាទុកដោយជោគជ័យ។
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <div class="alert alert-info mt-3" role="alert">
            ព័ត៌មានសំខាន់សម្រាប់អ្នក។
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
      question: 'តើ Class មួយណាដែលត្រូវប្រើដើម្បីបង្កើតប៊ូតុងសំខាន់ (Primary Button) នៅក្នុង Bootstrap?',
      options: ['`btn-default`', '`btn-main`', '`btn-primary`', '`btn-blue`'],
      correct: 2,
      explanation: 'Class `btn-primary` ត្រូវបានប្រើដើម្បីបង្កើតប៊ូតុងសំខាន់ពណ៌ខៀវ។'
    },
    {
      question: 'ដើម្បីធ្វើឱ្យប៊ូតុងមានទំហំធំ អ្នកត្រូវបន្ថែម Class មួយណា?',
      options: ['`btn-large`', '`btn-big`', '`btn-xl`', '`btn-lg`'],
      correct: 3,
      explanation: 'Class `btn-lg` ត្រូវបានប្រើដើម្បីធ្វើឱ្យប៊ូតុងមានទំហំធំ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីបង្កើតសារ Alert ពណ៌បៃតង (Success Alert)?',
      options: ['`alert-green`', '`alert-success`', '`alert-ok`', '`alert-positive`'],
      correct: 1,
      explanation: 'Class `alert-success` ត្រូវបានប្រើដើម្បីបង្កើតសារ Alert ពណ៌បៃតង។'
    },
    {
      question: 'តើ Class មួយណាដែលធ្វើឱ្យប៊ូតុងមានតែគ្រោង (Outline Button)?',
      options: ['`btn-border`', '`btn-outline`', '`btn-outline-primary`', '`btn-empty`'],
      correct: 2,
      explanation: 'Class `btn-outline-*` ត្រូវបានប្រើដើម្បីបង្កើតប៊ូតុងដែលមានតែគ្រោង។'
    },
    {
      question: 'ដើម្បីធ្វើឱ្យសារ Alert អាចបិទបាន (Dismissible) អ្នកត្រូវបន្ថែម Class មួយណា?',
      options: ['`alert-close`', '`alert-hide`', '`alert-dismissible`', '`alert-removable`'],
      correct: 2,
      explanation: 'Class `alert-dismissible` ត្រូវបានប្រើដើម្បីធ្វើឱ្យសារ Alert អាចបិទបាន។'
    },
    {
      question: 'តើ Class មួយណាដែលធ្វើឱ្យប៊ូតុងអសកម្ម (Disabled Button)?',
      options: ['`inactive`', '`disabled`', '`btn-off`', '`btn-inactive`'],
      correct: 1,
      explanation: 'Class `disabled` ត្រូវបានប្រើដើម្បីធ្វើឱ្យប៊ូតុងអសកម្ម។'
    },
    {
      question: 'តើ Tag HTML មួយណាដែលជាទូទៅត្រូវបានប្រើសម្រាប់ប៊ូតុងនៅក្នុង Bootstrap?',
      options: ['`<div>`', '`<span>`', '`<button>`', '`<input type="text">`'],
      correct: 2,
      explanation: 'Tag `<button>` គឺជា Tag HTML ទូទៅបំផុតដែលប្រើសម្រាប់ប៊ូតុងនៅក្នុង Bootstrap ។'
    },
    {
      question: 'តើ Class `btn-info` ផ្តល់ពណ៌អ្វីដល់ប៊ូតុង?',
      options: ['ក្រហម', 'បៃតង', 'ខៀវស្រាល', 'លឿង'],
      correct: 2,
      explanation: 'Class `btn-info` ផ្តល់ពណ៌ខៀវស្រាលដល់ប៊ូតុង។'
    },
    {
      question: 'តើ Class មួយណាដែលប្រើសម្រាប់ប៊ូតុងដែលមានផ្ទៃខាងក្រោយងងឹត?',
      options: ['`btn-light`', '`btn-dark`', '`btn-secondary`', '`btn-default`'],
      correct: 1,
      explanation: 'Class `btn-dark` ត្រូវបានប្រើសម្រាប់ប៊ូតុងដែលមានផ្ទៃខាងក្រោយងងឹត។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីបង្កើតប៊ូតុងដែលមើលទៅដូចជា Link?',
      options: ['`btn-text`', '`btn-link`', '`btn-anchor`', '`btn-plain`'],
      correct: 1,
      explanation: 'Class `btn-link` ត្រូវបានប្រើដើម្បីបង្កើតប៊ូតុងដែលមើលទៅដូចជា Link ។'
    },
    {
      question: 'តើ Attributes មួយណាដែលត្រូវបន្ថែមទៅប៊ូតុងបិទ Alert ដើម្បីឱ្យវាដំណើរការ?',
      options: ['`data-toggle="alert"`', '`data-bs-dismiss="alert"`', '`onclick="closeAlert()"`', '`data-hide="true"`'],
      correct: 1,
      explanation: 'Attributes `data-bs-dismiss="alert"` ត្រូវបានប្រើដើម្បីធ្វើឱ្យប៊ូតុងបិទ Alert ដំណើរការ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីបន្ថែម Animation ទៅ Alert នៅពេលវាបិទ?',
      options: ['`alert-animate`', '`fade`', '`alert-transition`', '`show`'],
      correct: 1,
      explanation: 'Class `fade` ត្រូវបានប្រើដើម្បីបន្ថែម Animation ទៅ Alert នៅពេលវាបិទ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើតប៊ូតុង និងសារ Alert

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN**។

នៅក្នុងឯកសារនោះ សូមបង្កើតធាតុ Bootstrap ដូចខាងក្រោម៖

1.  **ប៊ូតុង** មួយដែលមានពណ៌ **បៃតង (Success)** និងមាន **ទំហំធម្មតា**។
2.  **ប៊ូតុង** មួយទៀតដែលមានពណ៌ **ក្រហម (Danger)**, មានតែ **គ្រោង (Outline)**, និងមាន **ទំហំតូច**។
3.  **សារ Alert** មួយដែលមានពណ៌ **លឿង (Warning)** ដែល **អាចបិទបាន (Dismissible)**។ ត្រូវប្រាកដថាវាមានប៊ូតុងបិទត្រឹមត្រូវ។

**ចំណាំ:** អ្នកអាចដាក់ធាតុទាំងនេះនៅក្នុង \`container\` មួយដើម្បីឱ្យមើលទៅមានរបៀបរៀបរយ។
`,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Buttons & Alerts Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h1>ការអនុវត្តន៍ប៊ូតុង និង Alert</h1>
        
        <button type="button" class="btn btn-success mb-3">
            រក្សាទុក
        </button>

        <button type="button" class="btn btn-outline-danger btn-sm mb-3">
            លុប
        </button>

        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>ប្រយ័ត្ន!</strong> សូមពិនិត្យមើលព័ត៌មានរបស់អ្នកឡើងវិញ។
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>
`
  }
};

export default BootstrapLesson2_1Content;