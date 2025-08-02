// src/components/lessons/bootstrap/BootstrapLesson5_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson5_1Content: LessonContent = {
  title: 'Accordion (ផ្ទាំងបិទបើក)',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Accordion',
    'របៀបបង្កើត Basic Accordion',
    'របៀបធ្វើឱ្យ Accordion Items បិទបើកដោយឯករាជ្យ',
    'របៀបធ្វើឱ្យ Accordion Items បិទបើកតែមួយក្នុងពេលតែមួយ',
    'របៀបបន្ថែម Flush Accordion'
  ],
  content: `
# Accordion (ផ្ទាំងបិទបើក) 🎶

---

**Accordion** គឺជា Component ដែលអនុញ្ញាតឱ្យអ្នកបង្ហាញ និងលាក់មាតិកាជាក្រុម។ វាមានប្រយោជន៍សម្រាប់ **FAQ (សំណួរដែលសួរញឹកញាប់)** ឬផ្នែកដែលលាក់មាតិកាដើម្បីសន្សំទំហំ។

---

## 1. Basic Accordion Structure 🏗️

Accordion ត្រូវបានបង្កើតឡើងដោយ Class \`accordion\` ។ ធាតុនីមួយៗនៅក្នុង Accordion ត្រូវបានរុំព័ទ្ធដោយ \`accordion-item\` ។

\`\`\`html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>នេះជា Body របស់ Accordion Item ទី ១ ។</strong> វាត្រូវបានបង្ហាញតាមលំនាំដើម។
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>នេះជា Body របស់ Accordion Item ទី ២ ។</strong> មាតិកាអាចជាអ្វីក៏បាន។
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>នេះជា Body របស់ Accordion Item ទី ៣ ។</strong>
      </div>
    </div>
  </div>
</div>
\`\`\`
* \`accordion\`: Wrapper មូលដ្ឋានសម្រាប់ Accordion ។
* \`accordion-item\`: ធាតុនីមួយៗនៅក្នុង Accordion ។
* \`accordion-header\`: Wrapper សម្រាប់ប៊ូតុង Accordion ។
* \`accordion-button\`: ប៊ូតុងដែលបិទបើកមាតិកា។
* \`data-bs-toggle="collapse"\`: Attributes សម្រាប់បិទបើកមាតិកា។
* \`data-bs-target="#collapseOne"\`: កំណត់ ID នៃមាតិកាដែលត្រូវបិទបើក។
* \`aria-expanded="true/false"\`: សម្រាប់ Accessibility (បង្ហាញថាវាបើក ឬបិទ) ។
* \`accordion-collapse\`: Wrapper សម្រាប់មាតិកាដែលអាចបិទបើកបាន។
* \`collapse show\`: Class សម្រាប់មាតិកាដែលបង្ហាញតាមលំនាំដើម។
* \`data-bs-parent="#accordionExample"\`: ធ្វើឱ្យ Accordion Items បិទបើកតែមួយក្នុងពេលតែមួយ (សម្រាប់ Accordion តែមួយ) ។

---

## 2. Always Open Accordion Items (បើកជានិច្ច) 🔓

ប្រសិនបើអ្នកចង់ឱ្យ Accordion Items អាចបើកបានច្រើនក្នុងពេលតែមួយ អ្នកគ្រាន់តែលុប Attributes \`data-bs-parent\` ចេញពី \`accordion-collapse\` ។

\`\`\`html
<div class="accordion" id="accordionAlwaysOpen">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingAlwaysOpenOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAlwaysOpenOne" aria-expanded="true" aria-controls="collapseAlwaysOpenOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseAlwaysOpenOne" class="accordion-collapse collapse show" aria-labelledby="headingAlwaysOpenOne">
      <div class="accordion-body">
        មាតិកានេះអាចបើកបាន ទោះបីជាធាតុផ្សេងទៀតបើកក៏ដោយ។
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingAlwaysOpenTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAlwaysOpenTwo" aria-expanded="false" aria-controls="collapseAlwaysOpenTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseAlwaysOpenTwo" class="accordion-collapse collapse" aria-labelledby="headingAlwaysOpenTwo">
      <div class="accordion-body">
        មាតិកានេះក៏អាចបើកបានផងដែរ។
      </div>
    </div>
  </div>
</div>
\`\`\`

---

## 3. Flush Accordion (គ្មាន Border) 💧

ដើម្បីលុប Border ខាងក្រៅ និង Rounded Corners របស់ Accordion អ្នកអាចបន្ថែម Class \`accordion-flush\` ទៅលើ \`accordion\` Container ។

\`\`\`html
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        នេះជា Accordion Flush ។
      </div>
    </div>
  </div>
</div>
\`\`\`
* \`accordion-flush\`: លុប Border ខាងក្រៅ និង Rounded Corners ។

---
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ FAQ (សំណួរដែលសួរញឹកញាប់)</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពី Accordion ដែលប្រើសម្រាប់ FAQ ដែលមានធាតុ 3 ហើយអាចបិទបើកតែមួយក្នុងពេលតែមួយ។</p>
<div class="container mt-5">
  <h2 class="mb-4">សំណួរដែលសួរញឹកញាប់ (FAQ)</h2>
  <div class="accordion" id="faqAccordion">
    <div class="accordion-item">
      <h2 class="accordion-header" id="faqHeadingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseOne" aria-expanded="true" aria-controls="faqCollapseOne">
          តើខ្ញុំអាចចុះឈ្មោះដោយរបៀបណា?
        </button>
      </h2>
      <div id="faqCollapseOne" class="accordion-collapse collapse show" aria-labelledby="faqHeadingOne" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          អ្នកអាចចុះឈ្មោះដោយចុចលើប៊ូតុង "ចុះឈ្មោះ" នៅជ្រុងខាងស្តាំខាងលើនៃគេហទំព័រ ហើយបំពេញព័ត៌មានដែលបានស្នើសុំ។
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="faqHeadingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseTwo" aria-expanded="false" aria-controls="faqCollapseTwo">
          តើខ្ញុំអាចផ្លាស់ប្តូរពាក្យសម្ងាត់របស់ខ្ញុំដោយរបៀបណា?
        </button>
      </h2>
      <div id="faqCollapseTwo" class="accordion-collapse collapse" aria-labelledby="faqHeadingTwo" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          ចូលទៅកាន់ Profile របស់អ្នក បន្ទាប់មកជ្រើសរើស "ការកំណត់" ហើយអ្នកនឹងឃើញជម្រើសសម្រាប់ផ្លាស់ប្តូរពាក្យសម្ងាត់។
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="faqHeadingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseThree" aria-expanded="false" aria-controls="faqCollapseThree">
          តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយដោយរបៀបណា?
        </button>
      </h2>
      <div id="faqCollapseThree" class="accordion-collapse collapse" aria-labelledby="faqHeadingThree" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          អ្នកអាចទាក់ទងផ្នែកជំនួយរបស់យើងតាមរយៈទំព័រ "ទំនាក់ទំនង" ឬផ្ញើអ៊ីមែលមកកាន់ support@example.com ។
        </div>
      </div>
    </div>
  </div>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Accordion Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h2 class="mb-4">សំណួរដែលសួរញឹកញាប់ (FAQ)</h2>
        <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="faqHeadingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseOne" aria-expanded="true" aria-controls="faqCollapseOne">
                        តើខ្ញុំអាចចុះឈ្មោះដោយរបៀបណា?
                    </button>
                </h2>
                <div id="faqCollapseOne" class="accordion-collapse collapse show" aria-labelledby="faqHeadingOne" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        អ្នកអាចចុះឈ្មោះដោយចុចលើប៊ូតុង "ចុះឈ្មោះ" នៅជ្រុងខាងស្តាំខាងលើនៃគេហទំព័រ ហើយបំពេញព័ត៌មានដែលបានស្នើសុំ។
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="faqHeadingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseTwo" aria-expanded="false" aria-controls="faqCollapseTwo">
                        តើខ្ញុំអាចផ្លាស់ប្តូរពាក្យសម្ងាត់របស់ខ្ញុំដោយរបៀបណា?
                    </button>
                </h2>
                <div id="faqCollapseTwo" class="accordion-collapse collapse" aria-labelledby="faqHeadingTwo" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        ចូលទៅកាន់ Profile របស់អ្នក បន្ទាប់មកជ្រើសរើស "ការកំណត់" ហើយអ្នកនឹងឃើញជម្រើសសម្រាប់ផ្លាស់ប្តូរពាក្យសម្ងាត់។
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="faqHeadingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseThree" aria-expanded="false" aria-controls="faqCollapseThree">
                        តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយដោយរបៀបណា?
                    </button>
                </h2>
                <div id="faqCollapseThree" class="accordion-collapse collapse" aria-labelledby="faqHeadingThree" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        អ្នកអាចទាក់ទងផ្នែកជំនួយរបស់យើងតាមរយៈទំព័រ "ទំនាក់ទំនង" ឬផ្ញើអ៊ីមែលមកកាន់ support@example.com ។
                    </div>
                </div>
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
      question: 'តើ Class មួយណាដែលជា Wrapper មូលដ្ឋានសម្រាប់ Accordion?',
      options: ['`collapsible`', '`accordion`', '`toggle-panel`', '`expand-collapse`'],
      correct: 1,
      explanation: 'Class `accordion` គឺជា Wrapper មូលដ្ឋានសម្រាប់ Accordion ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ធាតុនីមួយៗនៅក្នុង Accordion?',
      options: ['`accordion-panel`', '`accordion-section`', '`accordion-item`', '`accordion-content`'],
      correct: 2,
      explanation: 'Class `accordion-item` ត្រូវបានប្រើសម្រាប់ធាតុនីមួយៗនៅក្នុង Accordion ។'
    },
    {
      question: 'តើ Attributes មួយណាដែលធ្វើឱ្យ Accordion Items បិទបើកតែមួយក្នុងពេលតែមួយ?',
      options: ['`data-bs-group`', '`data-bs-parent`', '`data-bs-single`', '`data-bs-exclusive`'],
      correct: 1,
      explanation: 'Attributes `data-bs-parent` ត្រូវបានប្រើដើម្បីធ្វើឱ្យ Accordion Items បិទបើកតែមួយក្នុងពេលតែមួយ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ប៊ូតុងដែលបិទបើកមាតិកា Accordion?',
      options: ['`accordion-toggle`', '`accordion-button`', '`accordion-trigger`', '`accordion-control`'],
      correct: 1,
      explanation: 'Class `accordion-button` ត្រូវបានប្រើសម្រាប់ប៊ូតុងដែលបិទបើកមាតិកា Accordion ។'
    },
    {
      question: 'តើ Class `collapse show` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីលាក់មាតិកា Accordion',
        'ដើម្បីបង្ហាញមាតិកា Accordion តាមលំនាំដើម',
        'ដើម្បីបន្ថែម Animation ទៅ Accordion',
        'ដើម្បីធ្វើឱ្យ Accordion អសកម្ម'
      ],
      correct: 1,
      explanation: 'Class `collapse show` ត្រូវបានប្រើដើម្បីបង្ហាញមាតិកា Accordion តាមលំនាំដើម។'
    },
    {
      question: 'ដើម្បីធ្វើឱ្យ Accordion Items អាចបើកបានច្រើនក្នុងពេលតែមួយ តើអ្នកគួរធ្វើអ្វី?',
      options: [
        'បន្ថែម Class `accordion-multiple`',
        'លុប Attributes `data-bs-parent` ចេញ',
        'បន្ថែម JavaScript ផ្ទាល់ខ្លួន',
        'ផ្លាស់ប្តូរ Class `accordion` ទៅ `accordion-open`'
      ],
      correct: 1,
      explanation: 'ដើម្បីធ្វើឱ្យ Accordion Items អាចបើកបានច្រើនក្នុងពេលតែមួយ អ្នកគ្រាន់តែលុប Attributes `data-bs-parent` ចេញ។'
    },
    {
      question: 'តើ Class `accordion-flush` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីបន្ថែម Border ក្រាស់',
        'ដើម្បីលុប Border ខាងក្រៅ និង Rounded Corners',
        'ដើម្បីផ្លាស់ប្តូរពណ៌ Accordion',
        'ដើម្បីធ្វើឱ្យ Accordion មាន Responsive'
      ],
      correct: 1,
      explanation: 'Class `accordion-flush` ត្រូវបានប្រើដើម្បីលុប Border ខាងក្រៅ និង Rounded Corners របស់ Accordion ។'
    },
    {
      question: 'តើ `aria-expanded="true/false"` Attribute ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ ID របស់ Accordion',
        'សម្រាប់ Accessibility (បង្ហាញថាវាបើក ឬបិទ)',
        'ដើម្បីកំណត់ទំហំ Accordion',
        'ដើម្បីផ្លាស់ប្តូរទិសដៅប៊ូតុង'
      ],
      correct: 1,
      explanation: '`aria-expanded="true/false"` Attribute ត្រូវបានប្រើសម្រាប់ Accessibility ដើម្បីបង្ហាញថា Accordion Item នោះកំពុងបើក ឬបិទ។'
    },
    {
      question: 'តើ Accordion របស់ Bootstrap ត្រូវការ JavaScript ដើម្បីដំណើរការដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែសម្រាប់ Animation', 'បានតែសម្រាប់ Flush Accordion'],
      correct: 0,
      explanation: 'បាទ/ចាស Accordion របស់ Bootstrap ត្រូវការ JavaScript ដើម្បីដំណើរការ (សម្រាប់មុខងារបិទបើក) ។'
    },
    {
      question: 'តើ Class `accordion-header` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីរុំព័ទ្ធមាតិកា Body',
        'ដើម្បីរុំព័ទ្ធប៊ូតុង Accordion',
        'ដើម្បីកំណត់ចំណងជើង Accordion',
        'ដើម្បីបន្ថែម Icon ទៅ Accordion'
      ],
      correct: 1,
      explanation: 'Class `accordion-header` ត្រូវបានប្រើដើម្បីរុំព័ទ្ធប៊ូតុង Accordion ។'
    },
    {
      question: 'តើ Accordion ត្រូវបានប្រើជាទូទៅបំផុតសម្រាប់អ្វី?',
      options: [
        'បង្ហាញរូបភាពជាស្លាយ',
        'បង្ហាញសារជូនដំណឹង',
        'FAQ (សំណួរដែលសួរញឹកញាប់)',
        'ទម្រង់ចុះឈ្មោះ'
      ],
      correct: 2,
      explanation: 'Accordion ត្រូវបានប្រើជាទូទៅបំផុតសម្រាប់ FAQ (សំណួរដែលសួរញឹកញាប់) ឬផ្នែកដែលលាក់មាតិកា។'
    },
    {
      question: 'តើ Class `accordion-button collapsed` ធ្វើអ្វី?',
      options: [
        'ធ្វើឱ្យប៊ូតុងបើកតាមលំនាំដើម',
        'ធ្វើឱ្យប៊ូតុងបិទតាមលំនាំដើម',
        'ផ្លាស់ប្តូរពណ៌ប៊ូតុង',
        'លាក់ប៊ូតុង'
      ],
      correct: 1,
      explanation: 'Class `accordion-button collapsed` ធ្វើឱ្យប៊ូតុងបិទតាមលំនាំដើម។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Accordion សាមញ្ញ

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN** ។
នៅក្នុងឯកសារនោះ សូមបង្កើត Accordion មួយដែលមានធាតុ 2 ។

1.  ធាតុទី ១ មានចំណងជើង "**ព័ត៌មានទូទៅ**" និងមាតិកា "**នេះជាព័ត៌មានទូទៅអំពីគេហទំព័ររបស់យើង។**" ។ ធាតុនេះគួរតែ**បើកតាមលំនាំដើម**។
2.  ធាតុទី ២ មានចំណងជើង "**គោលការណ៍ឯកជនភាព**" និងមាតិកា "**យើងគោរពឯកជនភាពរបស់អ្នក។**" ។ ធាតុនេះគួរតែ**បិទតាមលំនាំដើម**។
3.  ត្រូវប្រាកដថាមានតែ **Accordion Item មួយប៉ុណ្ណោះដែលអាចបើកបានក្នុងពេលតែមួយ**។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Accordion Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h1>ការអនុវត្តន៍ Accordion</h1>
        
        <div class="accordion" id="myLabAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="labHeadingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#labCollapseOne" aria-expanded="true" aria-controls="labCollapseOne">
                        ព័ត៌មានទូទៅ
                    </button>
                </h2>
                <div id="labCollapseOne" class="accordion-collapse collapse show" aria-labelledby="labHeadingOne" data-bs-parent="#myLabAccordion">
                    <div class="accordion-body">
                        នេះជាព័ត៌មានទូទៅអំពីគេហទំព័ររបស់យើង។ យើងផ្តល់ជូននូវមាតិកាអប់រំជាច្រើនប្រភេទ។
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="labHeadingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#labCollapseTwo" aria-expanded="false" aria-controls="labCollapseTwo">
                        គោលការណ៍ឯកជនភាព
                    </button>
                </h2>
                <div id="labCollapseTwo" class="accordion-collapse collapse" aria-labelledby="labHeadingTwo" data-bs-parent="#myLabAccordion">
                    <div class="accordion-body">
                        យើងគោរពឯកជនភាពរបស់អ្នកយ៉ាងខ្លាំង។ ព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នកនឹងត្រូវបានការពារ។
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>`
  }
};

export default BootstrapLesson5_1Content;