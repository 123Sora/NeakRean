// src/components/lessons/bootstrap/BootstrapLesson3_6.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson3_6Content: LessonContent = {
  title: 'Spinners (ឧបករណ៍បង្វិល)',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Spinners',
    'របៀបបង្កើត Border Spinners',
    'របៀបបង្កើត Growing Spinners',
    'របៀបកំណត់ពណ៌ Spinners',
    'របៀបកំណត់ទំហំ Spinners',
    'របៀបប្រើប្រាស់ Spinners ជាមួយ Buttons'
  ],
  content: `
# Spinners (ឧបករណ៍បង្វិល) 🔄

---

**Spinners** គឺជា Component ដែលប្រើសម្រាប់បង្ហាញពី**ស្ថានភាពកំពុងផ្ទុក (Loading state)** នៃ Element ឬទំព័រណាមួយ។

---

## 1. Border Spinners (ឧបករណ៍បង្វិល Border) 🌀

**Border Spinners** គឺជា Spinners លំនាំដើមរបស់ Bootstrap ដែលមានរាងជារង្វង់បង្វិល។

\`\`\`html
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
\`\`\`
* \`spinner-border\`: Class មូលដ្ឋានសម្រាប់ Border Spinner ។
* \`role="status"\`: Attributes សម្រាប់ **Accessibility** (ភាពងាយស្រួលប្រើប្រាស់) ។
* \`visually-hidden\`: លាក់អត្ថបទ "Loading..." ពីការមើលឃើញ ប៉ុន្តែអាចចូលប្រើបានសម្រាប់ **Screen Readers** ។

---

## 2. Growing Spinners (ឧបករណ៍បង្វិលរីកធំ) 🌿

**Growing Spinners** គឺជារាងមូលតូចមួយដែលរីកធំ និងរួញតូច ដើម្បីបង្ហាញពីចលនា។

\`\`\`html
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
\`\`\`
* \`spinner-grow\`: Class មូលដ្ឋានសម្រាប់ Growing Spinner ។

---

## 3. Colors (ពណ៌) 🌈

អ្នកអាចកំណត់ពណ៌ Spinners ដោយប្រើ **Classes ពណ៌អត្ថបទរបស់ Bootstrap** (ឧទាហរណ៍៖ \`text-primary\`, \`text-success\`, \`text-danger\`) ។

\`\`\`html
<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
\`\`\`
* \`text-*\`: Classes សម្រាប់ពណ៌អត្ថបទ (ដែលត្រូវបានប្រើសម្រាប់ពណ៌ Spinner) ។

---

## 4. Sizing (ការកំណត់ទំហំ) 🤏

អ្នកអាចកំណត់ទំហំ Spinners ដោយប្រើ Classes \`spinner-border-sm\` ឬ \`spinner-grow-sm\` សម្រាប់**ទំហំតូច**។

\`\`\`html
<div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
\`\`\`
* \`spinner-border-sm\`, \`spinner-grow-sm\`: Classes សម្រាប់ Spinners ទំហំតូច។

---

## 5. Spinners in Buttons (Spinners នៅក្នុងប៊ូតុង) 🔘

Spinners ត្រូវបានប្រើជាញឹកញាប់នៅក្នុង Buttons ដើម្បីបង្ហាញពី**ស្ថានភាពកំពុងដំណើរការ**បន្ទាប់ពីចុចប៊ូតុង។

\`\`\`html
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>
  កំពុងផ្ទុក...
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  កំពុងផ្ទុក...
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  កំពុងផ្ទុក...
</button>
\`\`\`
* \`disabled\`: ធ្វើឱ្យប៊ូតុងអសកម្ម។
* \`aria-hidden="true"\`: លាក់ Spinner ពី Screen Readers នៅពេលដែលអត្ថបទ "Loading..." ត្រូវបានផ្តល់ជូន។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Spinners ប្រភេទផ្សេងៗគ្នា</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពី Border Spinners និង Growing Spinners ដែលមានពណ៌ និងទំហំខុសៗគ្នា រួមទាំងការប្រើប្រាស់ Spinner នៅក្នុងប៊ូតុង។</p>
<div class="container mt-5">
  <h4 class="mb-4">Border Spinners</h4>
  <div class="d-flex justify-content-around mb-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-warning spinner-border-sm" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <h4 class="mb-4">Growing Spinners</h4>
  <div class="d-flex justify-content-around mb-5">
    <div class="spinner-grow text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-secondary spinner-grow-sm" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <h4 class="mb-4">Spinners នៅក្នុងប៊ូតុង</h4>
  <div class="d-flex justify-content-around">
    <button class="btn btn-primary" type="button" disabled>
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span class="ms-2">កំពុងបញ្ជូន...</span>
    </button>
    <button class="btn btn-success" type="button" disabled>
      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      <span class="ms-2">កំពុងផ្ទុក...</span>
    </button>
    <button class="btn btn-dark" type="button" disabled>
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    </button>
  </div>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Spinners Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h4 class="mb-4">Border Spinners</h4>
        <div class="d-flex justify-content-around mb-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-warning spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <h4 class="mb-4">Growing Spinners</h4>
        <div class="d-flex justify-content-around mb-5">
            <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary spinner-grow-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <h4 class="mb-4">Spinners នៅក្នុងប៊ូតុង</h4>
        <div class="d-flex justify-content-around">
            <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span class="ms-2">កំពុងបញ្ជូន...</span>
            </button>
            <button class="btn btn-success" type="button" disabled>
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                <span class="ms-2">កំពុងផ្ទុក...</span>
            </button>
            <button class="btn btn-dark" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </button>
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
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ Border Spinner?',
      options: ['`spinner-circle`', '`spinner-border`', '`loading-spinner`', '`rotate-spinner`'],
      correct: 1,
      explanation: 'Class `spinner-border` គឺជា Class មូលដ្ឋានសម្រាប់ Border Spinner ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ Growing Spinner?',
      options: ['`spinner-grow`', '`spinner-expand`', '`grow-spinner`', '`blob-spinner`'],
      correct: 0,
      explanation: 'Class `spinner-grow` គឺជា Class មូលដ្ឋានសម្រាប់ Growing Spinner ។'
    },
    {
      question: 'ដើម្បីកំណត់ពណ៌ Spinner តើ Class មួយណាដែលត្រូវប្រើ?',
      options: ['`color-*`', '`bg-*`', '`text-*`', '`spinner-color-*`'],
      correct: 2,
      explanation: 'Classes ពណ៌អត្ថបទរបស់ Bootstrap (ឧទាហរណ៍៖ `text-primary`) ត្រូវបានប្រើដើម្បីកំណត់ពណ៌ Spinners ។'
    },
    {
      question: 'តើ Class មួយណាដែលធ្វើឱ្យ Spinner មានទំហំតូច?',
      options: ['`spinner-small`', '`spinner-xs`', '`spinner-border-sm`', '`spinner-mini`'],
      correct: 2,
      explanation: 'Class `spinner-border-sm` ឬ `spinner-grow-sm` ត្រូវបានប្រើដើម្បីធ្វើឱ្យ Spinner មានទំហំតូច។'
    },
    {
      question: 'តើ `visually-hidden` Class ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីនៅក្នុង Spinner?',
      options: [
        'ដើម្បីលាក់ Spinner ពីការមើលឃើញ',
        'ដើម្បីលាក់អត្ថបទ "Loading..." ពីការមើលឃើញ ប៉ុន្តែអាចចូលប្រើបានសម្រាប់ Screen Readers',
        'ដើម្បីផ្លាស់ប្តូរទំហំ Spinner',
        'ដើម្បីធ្វើឱ្យ Spinner អសកម្ម'
      ],
      correct: 1,
      explanation: 'Class `visually-hidden` លាក់អត្ថបទ "Loading..." ពីការមើលឃើញ ប៉ុន្តែអាចចូលប្រើបានសម្រាប់ Screen Readers ។'
    },
    {
      question: 'តើ Attributes `disabled` ត្រូវបានប្រើសម្រាប់អ្វីនៅលើប៊ូតុងដែលមាន Spinner?',
      options: [
        'ដើម្បីធ្វើឱ្យ Spinner បង្វិលលឿនជាងមុន',
        'ដើម្បីធ្វើឱ្យប៊ូតុងអសកម្ម',
        'ដើម្បីផ្លាស់ប្តូរពណ៌ប៊ូតុង',
        'ដើម្បីលាក់ Spinner'
      ],
      correct: 1,
      explanation: 'Attributes `disabled` ត្រូវបានប្រើដើម្បីធ្វើឱ្យប៊ូតុងអសកម្ម នៅពេលដែលវាបង្ហាញ Spinner ។'
    },
    {
      question: 'តើ `role="status"` Attribute ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីនៅក្នុង Spinner?',
      options: [
        'ដើម្បីកំណត់ប្រភេទ Element ជាប៊ូតុង',
        'ដើម្បីកំណត់ប្រភេទ Element ជា Spinner សម្រាប់ Accessibility',
        'ដើម្បីកំណត់ប្រភេទ Element ជា Link',
        'ដើម្បីកំណត់ប្រភេទ Element ជា Form'
      ],
      correct: 1,
      explanation: '`role="status"` Attribute ត្រូវបានប្រើដើម្បីកំណត់ប្រភេទ Element ជា Spinner សម្រាប់ Accessibility (សម្រាប់ Screen Readers) ។'
    },
    {
      question: 'តើ Spinners ត្រូវបានប្រើជាទូទៅបំផុតសម្រាប់បង្ហាញអ្វី?',
      options: [
        'ព័ត៌មានលម្អិតផលិតផល',
        'ស្ថានភាពកំពុងផ្ទុក (Loading state)',
        'បញ្ជីជម្រើស',
        'សារជូនដំណឹង'
      ],
      correct: 1,
      explanation: 'Spinners ត្រូវបានប្រើជាទូទៅបំផុតសម្រាប់បង្ហាញពីស្ថានភាពកំពុងផ្ទុក (Loading state) ។'
    },
    {
      question: 'តើអ្នកអាចដាក់ Spinner តែមួយគត់នៅក្នុងប៊ូតុងមួយបានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែជាមួយ JavaScript', 'បានតែជាមួយ CSS ផ្ទាល់ខ្លួន'],
      correct: 0,
      explanation: 'បាទ/ចាស អ្នកអាចដាក់ Spinner តែមួយគត់នៅក្នុងប៊ូតុងមួយ។'
    },
    {
      question: 'តើ Class `text-info` ផ្តល់ពណ៌អ្វីដល់ Spinner?',
      options: ['ខៀវខ្ចី', 'បៃតង', 'ក្រហម', 'លឿង'],
      correct: 0,
      explanation: 'Class `text-info` ផ្តល់ពណ៌ខៀវខ្ចីដល់ Spinner ។'
    },
    {
      question: 'តើ `aria-hidden="true"` Attribute ត្រូវបានប្រើសម្រាប់អ្វីនៅក្នុង Spinner នៅក្នុងប៊ូតុង?',
      options: [
        'ដើម្បីលាក់ប៊ូតុង',
        'ដើម្បីលាក់ Spinner ពី Screen Readers នៅពេលដែលអត្ថបទ "Loading..." ត្រូវបានផ្តល់ជូន',
        'ដើម្បីផ្លាស់ប្តូរទំហំ Spinner',
        'ដើម្បីធ្វើឱ្យ Spinner អសកម្ម'
      ],
      correct: 1,
      explanation: '`aria-hidden="true"` លាក់ Spinner ពី Screen Readers នៅពេលដែលអត្ថបទ "Loading..." ត្រូវបានផ្តល់ជូនរួចហើយ ដើម្បីជៀសវាងការអានម្តងហើយម្តងទៀត។'
    },
    {
      question: 'តើ Spinners របស់ Bootstrap គឺ Responsive តាមលំនាំដើមដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែជាមួយ JavaScript', 'បានតែជាមួយ CSS ផ្ទាល់ខ្លួន'],
      correct: 0,
      explanation: 'បាទ/ចាស Spinners របស់ Bootstrap គឺ Responsive តាមលំនាំដើម។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Spinners ប្រភេទផ្សេងៗគ្នា

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN** ។
នៅក្នុងឯកសារនោះ សូមបង្កើត៖

1.  **Border Spinner ពណ៌បៃតង (Success)** ។
2.  **Growing Spinner ពណ៌ក្រហម (Danger)** ដែលមាន**ទំហំតូច**។
3.  **ប៊ូតុងមួយ**ដែលមានអត្ថបទ "**កំពុងដំណើរការ...**" និងមាន **Border Spinner ពណ៌ខៀវ (Primary)** នៅខាងឆ្វេងអត្ថបទ។ ប៊ូតុងនេះគួរតែ**អសកម្ម (disabled)** ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Spinners Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h1>ការអនុវត្តន៍ Spinners</h1>
        
        <div class="mb-4">
            <h4>Border Spinner (Success)</h4>
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div class="mb-4">
            <h4>Growing Spinner (Danger - Small)</h4>
            <div class="spinner-grow text-danger spinner-grow-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div>
            <h4>ប៊ូតុងកំពុងដំណើរការ</h4>
            <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span class="ms-2">កំពុងដំណើរការ...</span>
            </button>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>`
  }
};

export default BootstrapLesson3_6Content;