// src/components/lessons/bootstrap/BootstrapLesson3_7.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson3_7Content: LessonContent = {
  title: 'Pagination (ទំព័ររាប់) និង Breadcrumbs (ផ្លូវរុករក)',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Pagination',
    'របៀបបង្កើត Basic Pagination',
    'របៀបបន្ថែម Active និង Disabled States',
    'របៀបកំណត់ទំហំ Pagination',
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Breadcrumbs',
    'របៀបបង្កើត Basic Breadcrumb'
  ],
  content: `
# Pagination (ទំព័ររាប់) និង Breadcrumbs (ផ្លូវរុករក) 📄🗺️

---

**Pagination** និង **Breadcrumbs** គឺជា Components ដែលជួយអ្នកប្រើប្រាស់ក្នុងការរុករកគេហទំព័រ។ **Pagination** ជួយបែងចែកមាតិកាជាច្រើនទំព័រ ខណៈ **Breadcrumbs** បង្ហាញពីទីតាំងបច្ចុប្បន្នរបស់អ្នកប្រើប្រាស់នៅក្នុងឋានានុក្រមនៃគេហទំព័រ។

---

## 1. Pagination (ទំព័ររាប់) 🔢

**Pagination** គឺជាសំណុំនៃ Links ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់រុករករវាងទំព័រផ្សេងៗគ្នា។

### Basic Pagination Structure
Pagination ត្រូវបានបង្កើតឡើងដោយ Class \`pagination\` សម្រាប់ Wrapper Element និង \`page-item\` សម្រាប់ធាតុនីមួយៗ រួមជាមួយ \`page-link\` សម្រាប់ Link ។

\`\`\`html
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
\`\`\`
* \`pagination\`: Class មូលដ្ឋានសម្រាប់ **Pagination Container** ។
* \`page-item\`: Class សម្រាប់ធាតុនីមួយៗ (Link, Span, Button) នៅក្នុង Pagination ។
* \`page-link\`: Class សម្រាប់ **Link ជាក់ស្តែង**នៅក្នុង \`page-item\` ។

### Active and Disabled States
អ្នកអាចកំណត់ស្ថានភាព **Active** ឬ **Disabled** សម្រាប់ធាតុ Pagination ។

\`\`\`html
<ul class="pagination">
  <li class="page-item disabled">
    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
  </li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item active" aria-current="page">
    <a class="page-link" href="#">2</a>
  </li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item">
    <a class="page-link" href="#">Next</a>
  </li>
</ul>
\`\`\`
* \`disabled\`: ធ្វើឱ្យធាតុ Pagination **អសកម្ម**។
* \`active\`: បង្ហាញថាធាតុ Pagination នោះជា**ទំព័របច្ចុប្បន្ន**។
* \`aria-current="page"\`: សម្រាប់ **Accessibility** ដើម្បីបង្ហាញថាវាជាទំព័របច្ចុប្បន្ន។

### Sizing (ការកំណត់ទំហំ)
អ្នកអាចកំណត់ទំហំ Pagination ទៅ **Small (\`pagination-sm\`)** ឬ **Large (\`pagination-lg\`)** ។

\`\`\`html
<nav aria-label="Page navigation example">
  <ul class="pagination pagination-lg">
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
  </ul>
</nav>
<nav aria-label="Page navigation example">
  <ul class="pagination pagination-sm">
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
  </ul>
</nav>
\`\`\`

### Alignment (ការតម្រឹម)
អ្នកអាចតម្រឹម Pagination ទៅ**កណ្តាល (\`justify-content-center\`)** ឬ**ខាងស្តាំ (\`justify-content-end\`)** ។

\`\`\`html
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
  </ul>
</nav>
\`\`\`

---

## 2. Breadcrumbs (ផ្លូវរុករក) 🍞

**Breadcrumbs** គឺជា Navigation Aid ដែលបង្ហាញពី**ទីតាំងបច្ចុប្បន្នរបស់ទំព័រ**នៅក្នុងឋានានុក្រមនៃគេហទំព័រ។

### Basic Breadcrumb Structure
Breadcrumbs ត្រូវបានបង្កើតឡើងដោយ Class \`breadcrumb\` សម្រាប់ Wrapper Element និង \`breadcrumb-item\` សម្រាប់ធាតុនីមួយៗ។

\`\`\`html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">ទំព័រដើម</a></li>
    <li class="breadcrumb-item"><a href="#">បណ្ណាល័យ</a></li>
    <li class="breadcrumb-item active" aria-current="page">ទិន្នន័យ</li>
  </ol>
</nav>
\`\`\`
* \`breadcrumb\`: Class មូលដ្ឋានសម្រាប់ **Breadcrumb Container** ។
* \`breadcrumb-item\`: Class សម្រាប់**ធាតុនីមួយៗ**នៅក្នុង Breadcrumb ។
* \`active\`, \`aria-current="page"\`: សម្រាប់ធាតុចុងក្រោយ (ទំព័របច្ចុប្បន្ន) ។

---
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Pagination និង Breadcrumbs ពេញលេញ</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីរបៀបប្រើប្រាស់ Pagination និង Breadcrumbs ជាមួយគ្នាដើម្បីបង្កើនបទពិសោធន៍រុករកគេហទំព័រ។</p>
<div class="container mt-5">
  <h4>ផ្លូវរុករកបច្ចុប្បន្ន</h4>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">ទំព័រដើម</a></li>
      <li class="breadcrumb-item"><a href="#">ផលិតផល</a></li>
      <li class="breadcrumb-item active" aria-current="page">ស្មាតហ្វូន</li>
    </ol>
  </nav>

  <h4 class="mt-5">ទំព័រផលិតផល</h4>
  <p>នេះជាមាតិកាសម្រាប់ទំព័រផលិតផលស្មាតហ្វូន។</p>

  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center mt-5">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">មុន</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#">បន្ទាប់</a>
      </li>
    </ul>
  </nav>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Pagination & Breadcrumbs Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h4>ផ្លូវរុករកបច្ចុប្បន្ន</h4>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">ទំព័រដើម</a></li>
                <li class="breadcrumb-item"><a href="#">ផលិតផល</a></li>
                <li class="breadcrumb-item active" aria-current="page">ស្មាតហ្វូន</li>
            </ol>
        </nav>

        <h4 class="mt-5">ទំព័រផលិតផល</h4>
        <p>នេះជាមាតិកាសម្រាប់ទំព័រផលិតផលស្មាតហ្វូន។</p>

        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center mt-5">
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">មុន</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">បន្ទាប់</a>
                </li>
            </ul>
        </nav>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Class មួយណាដែលជា Wrapper Element សម្រាប់ Pagination?',
      options: ['`pages`', '`pagination`', '`nav-pages`', '`page-list`'],
      correct: 1,
      explanation: 'Class `pagination` គឺជា Wrapper Element សម្រាប់ Pagination ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ Link នីមួយៗនៅក្នុង Pagination?',
      options: ['`page-link`', '`nav-link`', '`item-link`', '`pagination-link`'],
      correct: 0,
      explanation: 'Class `page-link` ត្រូវបានប្រើសម្រាប់ Link នីមួយៗនៅក្នុង Pagination ។'
    },
    {
      question: 'ដើម្បីធ្វើឱ្យធាតុ Pagination សកម្ម (Active) តើ Class មួយណាដែលត្រូវបន្ថែម?',
      options: ['`current`', '`selected`', '`active`', '`highlight`'],
      correct: 2,
      explanation: 'Class `active` ត្រូវបានប្រើដើម្បីធ្វើឱ្យធាតុ Pagination សកម្ម។'
    },
    {
      question: 'តើ Class មួយណាដែលធ្វើឱ្យ Pagination មានទំហំធំ?',
      options: ['`pagination-big`', '`pagination-large`', '`pagination-lg`', '`pagination-xl`'],
      correct: 2,
      explanation: 'Class `pagination-lg` ធ្វើឱ្យ Pagination មានទំហំធំ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ Wrapper Element របស់ Breadcrumbs?',
      options: ['`path`', '`navigation`', '`breadcrumb`', '`crumbs`'],
      correct: 2,
      explanation: 'Class `breadcrumb` គឺជា Wrapper Element សម្រាប់ Breadcrumbs ។'
    },
    {
      question: 'តើ Attributes `aria-current="page"` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីនៅក្នុង Pagination ឬ Breadcrumbs?',
      options: [
        'ដើម្បីកំណត់ URL បច្ចុប្បន្ន',
        'ដើម្បីបង្ហាញថាវាជាទំព័របច្ចុប្បន្នសម្រាប់ Accessibility',
        'ដើម្បីធ្វើឱ្យ Link អសកម្ម',
        'ដើម្បីផ្លាស់ប្តូរពណ៌ Link'
      ],
      correct: 1,
      explanation: 'Attributes `aria-current="page"` ត្រូវបានប្រើសម្រាប់ Accessibility ដើម្បីបង្ហាញថាវាជាទំព័របច្ចុប្បន្ន។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីតម្រឹម Pagination ទៅកណ្តាល?',
      options: ['`text-center`', '`align-center`', '`justify-content-center`', '`center-items`'],
      correct: 2,
      explanation: 'Class `justify-content-center` ត្រូវបានប្រើដើម្បីតម្រឹម Pagination ទៅកណ្តាល។'
    },
    {
      question: 'តើ Breadcrumbs ជួយអ្នកប្រើប្រាស់ក្នុងអ្វី?',
      options: [
        'បែងចែកមាតិកាជាច្រើនទំព័រ',
        'បង្ហាញពីទីតាំងបច្ចុប្បន្នរបស់អ្នកប្រើប្រាស់នៅក្នុងគេហទំព័រ',
        'បង្ហាញសារកំហុស',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Breadcrumbs ជួយអ្នកប្រើប្រាស់ក្នុងការបង្ហាញពីទីតាំងបច្ចុប្បន្នរបស់ពួកគេនៅក្នុងឋានានុក្រមនៃគេហទំព័រ។'
    },
    {
      question: 'តើ Class `page-item disabled` ធ្វើអ្វី?',
      options: [
        'ធ្វើឱ្យ Link មានពណ៌ខុសគ្នា',
        'ធ្វើឱ្យ Link មិនអាចចុចបាន',
        'លាក់ Link',
        'បន្ថែម Icon ទៅ Link'
      ],
      correct: 1,
      explanation: 'Class `page-item disabled` ធ្វើឱ្យ Link មិនអាចចុចបាន។'
    },
    {
      question: 'តើ Tag HTML មួយណាដែលជាទូទៅត្រូវបានប្រើសម្រាប់ Breadcrumb Container?',
      options: ['`<ul>`', '`<ol>`', '`<div>`', '`<nav>`'],
      correct: 3,
      explanation: 'Tag `<nav>` ជាមួយនឹង `aria-label="breadcrumb"` ត្រូវបានប្រើជាទូទៅសម្រាប់ Breadcrumb Container ។'
    },
    {
      question: 'តើ Class `breadcrumb-item` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Link នីមួយៗនៅក្នុង Breadcrumb',
        'សម្រាប់ Container របស់ Breadcrumb',
        'សម្រាប់ Icon នៅក្នុង Breadcrumb',
        'សម្រាប់អត្ថបទជំនួយ'
      ],
      correct: 0,
      explanation: 'Class `breadcrumb-item` ត្រូវបានប្រើសម្រាប់ធាតុនីមួយៗនៅក្នុង Breadcrumb ។'
    },
    {
      question: 'តើ Pagination របស់ Bootstrap គឺ Responsive តាមលំនាំដើមដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែជាមួយ JavaScript', 'បានតែជាមួយ CSS ផ្ទាល់ខ្លួន'],
      correct: 0,
      explanation: 'បាទ/ចាស Pagination របស់ Bootstrap គឺ Responsive តាមលំនាំដើម។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Pagination និង Breadcrumbs

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN** ។
នៅក្នុងឯកសារនោះ សូមបង្កើត៖

1.  **Breadcrumb មួយ**ដែលមានផ្លូវរុករក "**ទំព័រដើម > ផលិតផល > កុំព្យូទ័រ**" ។
2.  **Pagination មួយ**ដែលមានទំព័រ **1, 2, 3, 4, 5** ។ ទំព័រទី **3** គួរតែ**សកម្ម (active)** ហើយ Pagination គួរតែដាក់នៅ**ខាងស្តាំ**។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Pagination & Breadcrumbs Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h1>ការអនុវត្តន៍ Pagination និង Breadcrumbs</h1>
        
        <nav aria-label="breadcrumb" class="mb-4">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">ទំព័រដើម</a></li>
                <li class="breadcrumb-item"><a href="#">ផលិតផល</a></li>
                <li class="breadcrumb-item active" aria-current="page">កុំព្យូទ័រ</li>
            </ol>
        </nav>

        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
            </ul>
        </nav>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>`
  }
};

export default BootstrapLesson3_7Content;