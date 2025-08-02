// src/components/lessons/bootstrap/BootstrapLesson3_5.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson3_5Content: LessonContent = {
  title: 'Progress Bars',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Progress Bars',
    'របៀបបង្កើត Basic Progress Bar',
    'របៀបបង្ហាញ Label (ភាគរយ)',
    'របៀបកំណត់ពណ៌ Progress Bar',
    'របៀបបង្កើត Striped និង Animated Progress Bars'
  ],
  content: `
# Progress Bars (របារវឌ្ឍនភាព) 📊

---

**Progress Bars** គឺជា Component ដែលប្រើសម្រាប់បង្ហាញវឌ្ឍនភាពនៃការងារ ឬស្ថានភាពណាមួយ។ Bootstrap Progress Bars គឺ **Responsive** និងអាចប្ដូរតាមបំណងបានយ៉ាងងាយស្រួល។

---

## 1. Basic Progress Bar Structure 🏗️

Progress Bar ត្រូវបានបង្កើតឡើងដោយ Class \`progress\` សម្រាប់ Wrapper Element និង \`progress-bar\` សម្រាប់របារខាងក្នុង។

\`\`\`html
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
\`\`\`
* \`progress\`: Class មូលដ្ឋានសម្រាប់ **Progress Bar Container** ។
* \`progress-bar\`: Class សម្រាប់ **Process Bar ពិតប្រាកដ**។
* \`role="progressbar"\`, \`aria-valuenow\`, \`aria-valuemin\`, \`aria-valuemax\`: Attributes សម្រាប់ **Accessibility** (ភាពងាយស្រួលប្រើប្រាស់) ។
* \`style="width: X%"\`: កំណត់**ទទឹងរបស់របារ** (ភាគរយ) ។

---

## 2. Showing Labels (ការបង្ហាញភាគរយ) 🔢

អ្នកអាចបង្ហាញ**ភាគរយ ឬអត្ថបទផ្សេងទៀត**នៅក្នុង Progress Bar ដោយដាក់អត្ថបទនោះនៅខាងក្នុង Element ដែលមាន Class \`progress-bar\` ។

\`\`\`html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>
\`\`\`

---

## 3. Background Colors (ពណ៌ផ្ទៃខាងក្រោយ) 🎨

អ្នកអាចកំណត់ពណ៌ Progress Bar ដោយប្រើ **Classes ពណ៌ផ្ទៃខាងក្រោយរបស់ Bootstrap** (ឧទាហរណ៍៖ \`bg-success\`, \`bg-info\`, \`bg-warning\`, \`bg-danger\`) ។

\`\`\`html
<div class="progress mb-3">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-3">
  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress mb-3">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
\`\`\`

---

## 4. Striped Progress Bars (របារឆ្នូតៗ) 🦓

ដើម្បីបង្កើត Progress Bar ដែលមាន**ឆ្នូតៗ** អ្នកត្រូវបន្ថែម Class \`progress-bar-striped\` ។

\`\`\`html
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
\`\`\`

---

## 5. Animated Progress Bars (របារមានចលនា) 🏃‍♀️

ដើម្បីធ្វើឱ្យ Striped Progress Bar មាន**ចលនា** អ្នកត្រូវបន្ថែម Class \`progress-bar-animated\` ។

\`\`\`html
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
\`\`\`

---

## 6. Multiple Progress Bars (របារច្រើន) 📈

អ្នកអាចដាក់ Progress Bars ច្រើននៅក្នុង Container តែមួយ។

\`\`\`html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemax="100"></div>
</div>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ របារវឌ្ឍនភាពចម្រុះ</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីរបារវឌ្ឍនភាពប្រភេទផ្សេងៗគ្នា រួមមាន Basic, Labeled, Colored, Striped, Animated និង Multiple Bars ។</p>
<div class="container mt-5">
  <h4 class="mb-3">វឌ្ឍនភាពទាញយក</h4>
  <div class="progress mb-4">
    <div class="progress-bar bg-primary" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
  </div>

  <h4 class="mb-3">វឌ្ឍនភាពកិច្ចការ</h4>
  <div class="progress mb-4">
    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70% រួចរាល់</div>
  </div>

  <h4 class="mb-3">ការផ្ទុកទិន្នន័យ</h4>
  <div class="progress mb-4">
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%"></div>
  </div>

  <h4 class="mb-3">វឌ្ឍនភាពគម្រោង</h4>
  <div class="progress" style="height: 25px;">
    <div class="progress-bar bg-danger" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">រៀបចំ</div>
    <div class="progress-bar bg-warning" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">កំពុងដំណើរការ</div>
    <div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">បញ្ចប់</div>
  </div>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Progress Bars Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h4 class="mb-3">វឌ្ឍនភាពទាញយក</h4>
        <div class="progress mb-4">
            <div class="progress-bar bg-primary" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
        </div>

        <h4 class="mb-3">វឌ្ឍនភាពកិច្ចការ</h4>
        <div class="progress mb-4">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70% រួចរាល់</div>
        </div>

        <h4 class="mb-3">ការផ្ទុកទិន្នន័យ</h4>
        <div class="progress mb-4">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%"></div>
        </div>

        <h4 class="mb-3">វឌ្ឍនភាពគម្រោង</h4>
        <div class="progress" style="height: 25px;">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">រៀបចំ</div>
            <div class="progress-bar bg-warning" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">កំពុងដំណើរការ</div>
            <div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">បញ្ចប់</div>
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
      question: 'តើ Class មួយណាដែលជា Wrapper Element សម្រាប់ Progress Bar?',
      options: ['`progress-wrapper`', '`progress-container`', '`progress`', '`bar-group`'],
      correct: 2,
      explanation: 'Class `progress` គឺជា Wrapper Element សម្រាប់ Progress Bar ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់របារវឌ្ឍនភាពពិតប្រាកដ?',
      options: ['`progress-item`', '`progress-bar`', '`bar-fill`', '`progress-line`'],
      correct: 1,
      explanation: 'Class `progress-bar` ត្រូវបានប្រើសម្រាប់របារវឌ្ឍនភាពពិតប្រាកដ។'
    },
    {
      question: 'ដើម្បីបង្ហាញភាគរយនៅក្នុង Progress Bar តើអ្នកដាក់អត្ថបទនៅកន្លែងណា?',
      options: [
        'នៅក្នុង `div` ខាងក្រៅ `progress`',
        'នៅក្នុង `div` ខាងក្នុង `progress-bar`',
        'នៅក្នុង `span` ជាមួយ `visually-hidden`',
        'នៅក្នុង `p` ខាងក្រោម Progress Bar'
      ],
      correct: 1,
      explanation: 'អ្នកដាក់អត្ថបទភាគរយនៅខាងក្នុង Element ដែលមាន Class `progress-bar` ។'
    },
    {
      question: 'តើ Class មួយណាដែលផ្តល់ពណ៌បៃតងដល់ Progress Bar?',
      options: ['`bg-primary`', '`bg-info`', '`bg-success`', '`bg-warning`'],
      correct: 2,
      explanation: 'Class `bg-success` ផ្តល់ពណ៌បៃតងដល់ Progress Bar ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីបង្កើត Striped Progress Bar?',
      options: ['`progress-striped`', '`progress-bar-striped`', '`striped-bar`', '`bar-pattern`'],
      correct: 1,
      explanation: 'Class `progress-bar-striped` ត្រូវបានប្រើដើម្បីបង្កើត Striped Progress Bar ។'
    },
    {
      question: 'ដើម្បីធ្វើឱ្យ Striped Progress Bar មានចលនា តើ Class មួយណាដែលត្រូវបន្ថែម?',
      options: ['`progress-animate`', '`progress-bar-moving`', '`progress-bar-animated`', '`animated-bar`'],
      correct: 2,
      explanation: 'Class `progress-bar-animated` ត្រូវបានប្រើដើម្បីធ្វើឱ្យ Striped Progress Bar មានចលនា។'
    },
    {
      question: 'តើ Attributes `aria-valuenow`, `aria-valuemin`, `aria-valuemax` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ទំហំ Progress Bar',
        'ដើម្បីកំណត់ពណ៌ Progress Bar',
        'សម្រាប់ Accessibility (សម្រាប់ Screen Readers)',
        'ដើម្បីធ្វើឱ្យ Progress Bar មានចលនា'
      ],
      correct: 2,
      explanation: 'Attributes `aria-valuenow`, `aria-valuemin`, `aria-valuemax` ត្រូវបានប្រើសម្រាប់ Accessibility (សម្រាប់ Screen Readers) ដើម្បីផ្តល់ព័ត៌មានអំពីតម្លៃបច្ចុប្បន្ន តិចបំផុត និងច្រើនបំផុត។'
    },
    {
      question: 'តើអ្នកអាចដាក់ Progress Bars ច្រើននៅក្នុង Container តែមួយបានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែជាមួយ JavaScript', 'បានតែជាមួយ CSS ផ្ទាល់ខ្លួន'],
      correct: 0,
      explanation: 'អ្នកអាចដាក់ Progress Bars ច្រើននៅក្នុង Container តែមួយដោយដាក់ Element `progress-bar` ច្រើននៅខាងក្នុង `progress` Container ។'
    },
    {
      question: 'តើ `style="width: X%"` ត្រូវបានប្រើសម្រាប់អ្វីនៅក្នុង Progress Bar?',
      options: [
        'ដើម្បីកំណត់កម្ពស់ Progress Bar',
        'ដើម្បីកំណត់ទទឹង Progress Bar (ភាគរយ)',
        'ដើម្បីកំណត់ Border របស់ Progress Bar',
        'ដើម្បីកំណត់ Margin របស់ Progress Bar'
      ],
      correct: 1,
      explanation: '`style="width: X%"` ត្រូវបានប្រើដើម្បីកំណត់ទទឹងរបស់របារ (ភាគរយ) ដែលបង្ហាញពីវឌ្ឍនភាព។'
    },
    {
      question: 'តើ Class `bg-warning` ផ្តល់ពណ៌អ្វីដល់ Progress Bar?',
      options: ['ខៀវ', 'បៃតង', 'ក្រហម', 'លឿង'],
      correct: 3,
      explanation: 'Class `bg-warning` ផ្តល់ពណ៌លឿងដល់ Progress Bar ។'
    },
    {
      question: 'តើ `role="progressbar"` Attribute ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ប្រភេទ Element ជាប៊ូតុង',
        'ដើម្បីកំណត់ប្រភេទ Element ជា Progress Bar សម្រាប់ Accessibility',
        'ដើម្បីកំណត់ប្រភេទ Element ជា Link',
        'ដើម្បីកំណត់ប្រភេទ Element ជា Form'
      ],
      correct: 1,
      explanation: '`role="progressbar"` Attribute ត្រូវបានប្រើដើម្បីកំណត់ប្រភេទ Element ជា Progress Bar សម្រាប់ Accessibility (សម្រាប់ Screen Readers) ។'
    },
    {
      question: 'តើ Progress Bar របស់ Bootstrap គឺ Responsive តាមលំនាំដើមដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែជាមួយ JavaScript', 'បានតែជាមួយ CSS ផ្ទាល់ខ្លួន'],
      correct: 0,
      explanation: 'បាទ/ចាស Bootstrap Progress Bars គឺ Responsive តាមលំនាំដើម។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Progress Bars ចម្រុះ

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN** ។
នៅក្នុងឯកសារនោះ សូមបង្កើត **Progress Bars ចំនួន 3** ដូចខាងក្រោម៖

1.  **Process Bar ពណ៌ខៀវ (Primary)** ដែលបង្ហាញ **30%** ។
2.  **Process Bar ពណ៌បៃតង (Success)** ដែលមាន**ឆ្នូតៗ** និងបង្ហាញ **60%** ។
3.  **Process Bar ពណ៌ក្រហម (Danger)** ដែលមាន**ឆ្នូតៗ** និងមាន**ចលនា (Animated)** ដែលបង្ហាញ **90%** ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Progress Bars Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h1>ការអនុវត្តន៍ Progress Bars</h1>
        
        <div class="mb-4">
            <h4>វឌ្ឍនភាពទី ១ (30%)</h4>
            <div class="progress">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
            </div>
        </div>

        <div class="mb-4">
            <h4>វឌ្ឍនភាពទី ២ (60% - Striped)</h4>
            <div class="progress">
                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
            </div>
        </div>

        <div>
            <h4>វឌ្ឍនភាពទី ៣ (90% - Animated)</h4>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%">90%</div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>`
  }
};

export default BootstrapLesson3_5Content;