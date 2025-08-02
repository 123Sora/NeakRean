// src/components/lessons/bootstrap/BootstrapLesson1_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson1_2Content: LessonContent = {
  title: 'របៀបបញ្ចូល Bootstrap',
  objectives: [
    'ស្វែងយល់ពីវិធីសាស្រ្តផ្សេងៗគ្នាក្នុងការបញ្ចូល Bootstrap',
    'រៀនពីរបៀបប្រើ Bootstrap CDN',
    'យល់ពីរបៀបភ្ជាប់ Bootstrap CSS និង JavaScript Files',
    'ដឹងពីគុណសម្បត្តិ និងគុណវិបត្តិនៃវិធីសាស្រ្តនីមួយៗ'
  ],
  content: `
# របៀបបញ្ចូល Bootstrap 🔗

---

ដើម្បីចាប់ផ្តើមប្រើប្រាស់ Bootstrap នៅក្នុងគម្រោងគេហទំព័រ (website projects) របស់អ្នក អ្នកត្រូវតែបញ្ចូល (Include) Bootstrap CSS និង JavaScript Files ទៅក្នុងឯកសារ HTML របស់អ្នក។ មានវិធីសាស្រ្តសំខាន់ៗមួយចំនួនសម្រាប់ធ្វើបែបនេះ៖

---

## 1. ការប្រើប្រាស់ Bootstrap CDN (Content Delivery Network) 🌐

នេះគឺជាវិធីសាស្រ្តដែលងាយស្រួលបំផុត និងលឿនបំផុតដើម្បីចាប់ផ្តើមប្រើ Bootstrap។ CDN គឺជាបណ្តាញ Server ដែលចែកចាយមាតិកា (ដូចជា CSS និង JavaScript Files) ទៅកាន់អ្នកប្រើប្រាស់ពីទីតាំងដែលនៅជិតពួកគេបំផុត ដែលធ្វើឱ្យការផ្ទុកទំព័រលឿន។

ដើម្បីប្រើ CDN អ្នកគ្រាន់តែត្រូវបន្ថែម \`<link>\` Tag សម្រាប់ CSS និង \`<script>\` Tag សម្រាប់ JavaScript ទៅក្នុងឯកសារ HTML របស់អ្នក។

### ជំហាន៖
1.  **CSS:** បន្ថែម \`<link>\` Tag នៅក្នុងផ្នែក \`<head>\` នៃឯកសារ HTML របស់អ្នក។
2.  **JavaScript:** បន្ថែម \`<script>\` Tag មុនពេលបិទ Tag \`</body>\` នៃឯកសារ HTML របស់អ្នក។ (សម្រាប់ Bootstrap 5 គឺគ្មាន jQuery ទៀតទេ គឺប្រើ JavaScript សុទ្ធ)។

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>បញ្ចូល Bootstrap ជាមួយ CDN</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>

  <h1>ស្វាគមន៍មកកាន់ Bootstrap!</h1>
  <button class="btn btn-primary">ប៊ូតុង Bootstrap</button>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
\`\`\`

---

## 2. ការទាញយក និងបញ្ចូល Files ដោយផ្ទាល់ (Local Files) 📁

អ្នកក៏អាចទាញយក Bootstrap Files ទៅកាន់កុំព្យូទ័ររបស់អ្នក ហើយបញ្ចូលវាទៅក្នុងគម្រោងរបស់អ្នកដោយផ្ទាល់។ វិធីសាស្រ្តនេះផ្តល់ឱ្យអ្នកនូវការគ្រប់គ្រងពេញលេញលើ Files ប៉ុន្តែទាមទារការរៀបចំបន្តិចបន្តួច។

### ជំហាន៖
1.  **ទាញយក:** ចូលទៅកាន់គេហទំព័រផ្លូវការរបស់ Bootstrap (getbootstrap.com) ហើយទាញយក Compiled CSS និង JS Files ។
2.  **ដាក់ Files:** ដាក់ Files ដែលបានទាញយកទៅក្នុង Folder គម្រោងរបស់អ្នក (ឧទាហរណ៍ ក្នុង Folder \`css/\` និង \`js/\`)។
3.  **ភ្ជាប់ Files:** ភ្ជាប់ Files ទាំងនោះទៅក្នុងឯកសារ HTML របស់អ្នក ស្រដៀងនឹងវិធី CDN ប៉ុន្តែប្រើ Path ក្នុងស្រុក។

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>បញ្ចូល Bootstrap ជាមួយ Local Files</title>
  <link href="path/to/your/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <h1>ស្វាគមន៍មកកាន់ Bootstrap!</h1>
  <button class="btn btn-success">ប៊ូតុង Bootstrap</button>

  <script src="path/to/your/js/bootstrap.bundle.min.js"></script>
</body>
</html>
\`\`\`

---

## 3. ការដំឡើងជាមួយ Package Manager (សម្រាប់គម្រោងទំនើប) 📦

សម្រាប់គម្រោង Front-end ទំនើបៗ (ដូចជា React, Vue, Angular) អ្នកអាចដំឡើង Bootstrap តាមរយៈ Package Manager ដូចជា npm ឬ Yarn។ វិធីសាស្រ្តនេះអនុញ្ញាតឱ្យអ្នករួមបញ្ចូល Bootstrap ទៅក្នុង Build Process របស់អ្នក។

\`\`\`bash
# ប្រើ npm
npm install bootstrap@5.3.3

# ប្រើ Yarn
yarn add bootstrap@5.3.3
\`\`\`

បន្ទាប់ពីដំឡើង អ្នកអាច Import Bootstrap Styles និង JavaScript ទៅក្នុង JavaScript Bundler របស់អ្នក (ដូចជា Webpack, Vite)។

---

>សម្រាប់អ្នកចាប់ផ្តើមដំបូង ការប្រើប្រាស់ **Bootstrap CDN** គឺជាវិធីសាស្រ្តដែលងាយស្រួលបំផុត និងលឿនបំផុតដើម្បីចាប់ផ្តើមរៀន និងប្រើប្រាស់ Bootstrap ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើប្រាស់ Bootstrap CDN ជាមួយ Component សាមញ្ញ</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីរបៀបដែល Bootstrap Styles ត្រូវបានអនុវត្តដោយស្វ័យប្រវត្តិ នៅពេលអ្នកប្រើ Classes របស់វា។</p>
<div class="alert alert-success" role="alert">
  នេះជាសារ Alert ពណ៌បៃតងពី Bootstrap!
</div>
<button type="button" class="btn btn-info">
  ប៊ូតុងព័ត៌មាន
</button>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap CDN Example</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>

  <div class="alert alert-success" role="alert">
    នេះជាសារ Alert ពណ៌បៃតងពី Bootstrap!
  </div>
  <button type="button" class="btn btn-info">
    ប៊ូតុងព័ត៌មាន
  </button>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើវិធីសាស្រ្តមួយណាដែលងាយស្រួលបំផុតដើម្បីចាប់ផ្តើមប្រើ Bootstrap?',
      options: ['ការដំឡើងជាមួយ npm', 'ការទាញយក Files ដោយផ្ទាល់', 'ការប្រើប្រាស់ Bootstrap CDN', 'ការសរសេរ CSS ដោយដៃ'],
      correct: 2,
      explanation: 'ការប្រើប្រាស់ Bootstrap CDN គឺជាវិធីសាស្រ្តដែលលឿនបំផុត និងងាយស្រួលបំផុតសម្រាប់អ្នកចាប់ផ្តើមដំបូង។'
    },
    {
      question: 'តើ Bootstrap CSS `<link>` Tag គួរដាក់នៅកន្លែងណា?',
      options: ['នៅក្នុង `<body>` Tag', 'នៅក្នុង `<head>` Tag', 'នៅចុងបញ្ចប់នៃឯកសារ', 'នៅក្នុង JavaScript File'],
      correct: 1,
      explanation: 'Bootstrap CSS `<link>` Tag គួរតែដាក់នៅក្នុងផ្នែក `<head>` នៃឯកសារ HTML ។'
    },
    {
      question: 'តើ Bootstrap JavaScript `<script>` Tag គួរដាក់នៅកន្លែងណា?',
      options: ['នៅក្នុង `<head>` Tag', 'មុនពេលបិទ Tag `</body>`', 'នៅក្នុង CSS File', 'នៅដើមដំបូងនៃឯកសារ'],
      correct: 1,
      explanation: 'Bootstrap JavaScript `<script>` Tag គួរតែដាក់មុនពេលបិទ Tag `</body>` ដើម្បីធានាថា HTML ត្រូវបានផ្ទុកពេញលេញមុនពេល JavaScript ដំណើរការ។'
    },
    {
      question: 'តើ CDN តំណាងឱ្យអ្វី?',
      options: ['Code Delivery Network', 'Content Data Network', 'Content Delivery Network', 'Centralized Data Node'],
      correct: 2,
      explanation: 'CDN តំណាងឱ្យ Content Delivery Network ដែលជួយចែកចាយមាតិកាគេហទំព័របានលឿន។'
    },
    {
      question: 'តើគុណសម្បត្តិមួយណាដែលអ្នកទទួលបានពីការប្រើប្រាស់ Bootstrap CDN?',
      options: [
        'អាចកែប្រែ Bootstrap Files ដោយផ្ទាល់',
        'ការផ្ទុកទំព័រយឺតជាង',
        'មិនចាំបាច់មានការតភ្ជាប់អ៊ីនធឺណិត',
        'ការផ្ទុកទំព័រលឿន និងងាយស្រួលប្រើ'
      ],
      correct: 3,
      explanation: 'ការប្រើប្រាស់ CDN ជួយឱ្យការផ្ទុកទំព័រលឿន និងងាយស្រួលក្នុងការបញ្ចូល Bootstrap ។'
    },
    {
      question: 'តើ Bootstrap 5 ប្រើ jQuery ដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'ពេលខ្លះ', 'អាស្រ័យលើ Browser'],
      correct: 1,
      explanation: 'Bootstrap 5 មិនពឹងផ្អែកលើ jQuery ទៀតទេ វាប្រើ JavaScript សុទ្ធ។'
    },
    {
      question: 'តើវិធីសាស្រ្តមួយណាដែលផ្តល់ការគ្រប់គ្រងពេញលេញបំផុតលើ Bootstrap Files?',
      options: ['ការប្រើប្រាស់ Bootstrap CDN', 'ការទាញយក Files ដោយផ្ទាល់', 'ការដំឡើងជាមួយ Package Manager', 'ការសរសេរ JavaScript ផ្ទាល់ខ្លួន'],
      correct: 1,
      explanation: 'ការទាញយក Bootstrap Files ដោយផ្ទាល់ទៅក្នុងគម្រោងរបស់អ្នកផ្តល់ឱ្យអ្នកនូវការគ្រប់គ្រងពេញលេញបំផុត។'
    },
    {
      question: 'តើ Package Manager ដូចជា npm ត្រូវបានប្រើសម្រាប់អ្វីក្នុងការដំឡើង Bootstrap?',
      options: [
        'ដើម្បីរចនាម៉ូត Components',
        'ដើម្បីគ្រប់គ្រង Database',
        'ដើម្បីដំឡើង និងគ្រប់គ្រង Dependencies របស់គម្រោង',
        'ដើម្បីបង្កើត Server-side Logic'
      ],
      correct: 2,
      explanation: 'Package Managers ដូចជា npm ត្រូវបានប្រើដើម្បីដំឡើង និងគ្រប់គ្រង Library និង Dependencies ផ្សេងៗក្នុងគម្រោង Front-end ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើតឯកសារ HTML ជាមួយ Bootstrap CDN

បង្កើតឯកសារ HTML ថ្មីមួយ។ ប្រើ **Bootstrap CDN** ដើម្បីភ្ជាប់ Bootstrap CSS និង JavaScript Files ។ បន្ទាប់មក បន្ថែមធាតុ Bootstrap ដូចខាងក្រោមទៅក្នុងឯកសាររបស់អ្នក៖

1.  **ប៊ូតុង** មួយដែលមាន Class \`btn\` និង \`btn-primary\` (ឧទាហរណ៍: \`<button class="btn btn-primary">ប៊ូតុងរបស់ខ្ញុំ</button>\`)។
2.  **សារ Alert** មួយដែលមាន Class \`alert\` និង \`alert-info\` (ឧទាហរណ៍: \`<div class="alert alert-info" role="alert">នេះជាសារព័ត៌មាន។</div>\`)។ ដាក់សារនេះនៅក្នុង Container មួយ (Class \`container\`) ដើម្បីឱ្យវាមានចន្លោះត្រឹមត្រូវ។
`,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap CDN Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h1>ការអនុវត្តន៍ Bootstrap CDN</h1>
        <button type="button" class="btn btn-primary">
            ចុចខ្ញុំ!
        </button>
        <div class="alert alert-info mt-3" role="alert">
            នេះជាសារព័ត៌មានពី Bootstrap ។
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>
`
  }
};

export default BootstrapLesson1_2Content;