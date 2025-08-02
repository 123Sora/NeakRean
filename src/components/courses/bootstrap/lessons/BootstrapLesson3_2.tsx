// src/components/lessons/bootstrap/BootstrapLesson3_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson3_2Content: LessonContent = {
  title: 'Modals (ប្រអប់លេចឡើង)',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Modals',
    'របៀបបង្កើត Basic Modal',
    'របៀបបន្ថែម Header, Body, និង Footer ទៅ Modal',
    'របៀបបើក និងបិទ Modal',
    'ការកំណត់ទំហំ Modal'
  ],
  content: `
# Modals (ប្រអប់លេចឡើង) 

---

Modals គឺជាប្រអប់ Dialog ដែលលេចឡើងនៅពីលើមាតិកាទំព័រ ដែលទាមទារឱ្យអ្នកប្រើប្រាស់ធ្វើអន្តរកម្មជាមួយវា។ Bootstrap Modals គឺ Responsive តាមលំនាំដើម និងអាចប្ដូរតាមបំណងបានយ៉ាងងាយស្រួល។

---

## 1. Basic Modal Structure 🏗️

Modal ត្រូវបានបង្កើតឡើងដោយ Class \`modal\` និង \`fade\` ។ វាទាមទារ ID តែមួយគត់ (ឧទាហរណ៍៖ \`#myModal\`) ។

\`\`\`html
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">ចំណងជើង Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        មាតិកានៃ Modal របស់អ្នកនៅទីនេះ។
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">បិទ</button>
        <button type="button" class="btn btn-primary">រក្សាទុកការផ្លាស់ប្តូរ</button>
      </div>
    </div>
  </div>
</div>
\`\`\`
* \`modal\`, \`fade\`: Classes មូលដ្ឋានសម្រាប់ Modal ។
* \`id\`: ID តែមួយគត់សម្រាប់ Modal ។
* \`tabindex="-1"\`, \`aria-labelledby\`, \`aria-hidden="true"\`: Attributes សម្រាប់ Accessibility ។
* \`modal-dialog\`: Wrapper សម្រាប់មាតិកា Modal ។
* \`modal-content\`: Wrapper សម្រាប់ Header, Body, Footer ។
* \`modal-header\`, \`modal-body\`, \`modal-footer\`: ផ្នែកផ្សេងៗនៃ Modal ។
* \`btn-close\`: ប៊ូតុងបិទ Modal ។
* \`data-bs-dismiss="modal"\`: Attributes សម្រាប់បិទ Modal ។

---

## 2. Triggering Modals (ការបើក/បិទ Modal) 👆

អ្នកអាចបើក Modal ដោយប្រើប៊ូតុង ឬ Link ជាមួយនឹង Attributes \`data-bs-toggle="modal"\` និង \`data-bs-target="#yourModalId"\` ។

\`\`\`html
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  បើក Modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  </div>
\`\`\`

---

## 3. Modal Sizing (ការកំណត់ទំហំ Modal) 📏

អ្នកអាចផ្លាស់ប្តូរទំហំ Modal ដោយបន្ថែម Class ទៅលើ \`modal-dialog\` ។

| Size Class        | Description         |
| :---------------- | :------------------ |
| \`modal-sm\`      | Modal ទំហំតូច      |
| (Default)         | Modal ទំហំធម្មតា    |
| \`modal-lg\`      | Modal ទំហំធំ       |
| \`modal-xl\`      | Modal ទំហំធំខ្លាំងណាស់ |
| \`modal-fullscreen\` | Modal ពេញអេក្រង់    |

\`\`\`html
<div class="modal-dialog modal-sm">...</div>

<div class="modal-dialog modal-lg">...</div>

<div class="modal-dialog modal-fullscreen">...</div>
\`\`\`

---

## 4. Vertically Centered Modals (Modal កណ្តាលបញ្ឈរ) ↕️

ដើម្បីដាក់ Modal នៅចំកណ្តាលបញ្ឈរនៃអេក្រង់ អ្នកអាចបន្ថែម Class \`modal-dialog-centered\` ទៅលើ \`modal-dialog\` ។

\`\`\`html
<div class="modal-dialog modal-dialog-centered">
  </div>
\`\`\`

---

## 5. Scrolling Long Content (មាតិកាវែង) 📜

ប្រសិនបើមាតិការបស់ Modal វែងជាងកម្ពស់អេក្រង់ អ្នកអាចធ្វើឱ្យវាអាច Scroll បានដោយបន្ថែម Class \`modal-dialog-scrollable\` ទៅលើ \`modal-dialog\` ។

\`\`\`html
<div class="modal-dialog modal-dialog-scrollable">
  </div>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Modal សម្រាប់ព័ត៌មានលម្អិតផលិតផល</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពី Modal ដែលអាចបើកបានដោយប៊ូតុង និងមានព័ត៌មានលម្អិតផលិតផល។</p>
<div class="container mt-5">
  <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#productModal">
    មើលព័ត៌មានលម្អិតផលិតផល
  </button>

  <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productModalLabel">ព័ត៌មានលម្អិតផលិតផល: ស្មាតហ្វូន X</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-5">
              <img src="https://placehold.co/400x400/D1ECF1/0C5460?text=Smartphone+X" class="img-fluid rounded" alt="Smartphone X">
            </div>
            <div class="col-md-7">
              <h4>ស្មាតហ្វូន X ជំនាន់ថ្មី</h4>
              <p>ស្មាតហ្វូន X ផ្តល់ជូននូវបទពិសោធន៍ប្រើប្រាស់ដ៏អស្ចារ្យជាមួយនឹងកាមេរ៉ាគុណភាពខ្ពស់ អាយុកាលថ្មយូរអង្វែង និងដំណើរការលឿនរហ័ស។</p>
              <p><strong>តម្លៃ:</strong> $799.00</p>
              <p><strong>លក្ខណៈពិសេស:</strong></p>
              <ul>
                <li>អេក្រង់ OLED 6.5 អ៊ីញ</li>
                <li>កាមេរ៉ា 48MP</li>
                <li>ថ្ម 4500mAh</li>
                <li>RAM 8GB, ROM 128GB</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">បិទ</button>
          <button type="button" class="btn btn-primary">បន្ថែមទៅរទេះ</button>
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
    <title>Bootstrap Modals Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#productModal">
            មើលព័ត៌មានលម្អិតផលិតផល
        </button>

        <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="productModalLabel">ព័ត៌មានលម្អិតផលិតផល: ស្មាតហ្វូន X</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-5">
                                <img src="https://placehold.co/400x400/D1ECF1/0C5460?text=Smartphone+X" class="img-fluid rounded" alt="Smartphone X">
                            </div>
                            <div class="col-md-7">
                                <h4>ស្មាតហ្វូន X ជំនាន់ថ្មី</h4>
                                <p>ស្មាតហ្វូន X ផ្តល់ជូននូវបទពិសោធន៍ប្រើប្រាស់ដ៏អស្ចារ្យជាមួយនឹងកាមេរ៉ាគុណភាពខ្ពស់ អាយុកាលថ្មយូរអង្វែង និងដំណើរការលឿនរហ័ស។</p>
                                <p><strong>តម្លៃ:</strong> $799.00</p>
                                <p><strong>លក្ខណៈពិសេស:</strong></p>
                                <ul>
                                    <li>អេក្រង់ OLED 6.5 អ៊ីញ</li>
                                    <li>កាមេរ៉ា 48MP</li>
                                    <li>ថ្ម 4500mAh</li>
                                    <li>RAM 8GB, ROM 128GB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">បិទ</button>
                        <button type="button" class="btn btn-primary">បន្ថែមទៅរទេះ</button>
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
      question: 'តើ Class មួយណាដែលជាមូលដ្ឋានសម្រាប់បង្កើត Modal នៅក្នុង Bootstrap?',
      options: ['`dialog`', '`popup`', '`modal`', '`overlay`'],
      correct: 2,
      explanation: 'Class `modal` គឺជា Class មូលដ្ឋានសម្រាប់បង្កើត Modal ។'
    },
    {
      question: 'តើ Attributes មួយណាដែលត្រូវបានប្រើដើម្បីបើក Modal ពីប៊ូតុង ឬ Link?',
      options: ['`data-toggle="modal"`', '`data-bs-toggle="modal"`', '`onclick="openModal()"`', '`href="#modal"`'],
      correct: 1,
      explanation: 'Attributes `data-bs-toggle="modal"` ត្រូវបានប្រើដើម្បីបើក Modal ពីប៊ូតុង ឬ Link ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ផ្នែកចំណងជើងនៃ Modal?',
      options: ['`modal-title`', '`modal-heading`', '`modal-header`', '`modal-caption`'],
      correct: 2,
      explanation: 'Class `modal-header` ត្រូវបានប្រើសម្រាប់ផ្នែកចំណងជើងនៃ Modal ។'
    },
    {
      question: 'តើ Class មួយណាដែលធ្វើឱ្យ Modal មានទំហំធំខ្លាំងណាស់?',
      options: ['`modal-large`', '`modal-extra-large`', '`modal-xl`', '`modal-super-large`'],
      correct: 2,
      explanation: 'Class `modal-xl` ធ្វើឱ្យ Modal មានទំហំធំខ្លាំងណាស់។'
    },
    {
      question: 'តើ Class មួយណាដែលដាក់ Modal នៅចំកណ្តាលបញ្ឈរនៃអេក្រង់?',
      options: ['`modal-center`', '`modal-align-middle`', '`modal-dialog-centered`', '`modal-vertical-align`'],
      correct: 2,
      explanation: 'Class `modal-dialog-centered` ដាក់ Modal នៅចំកណ្តាលបញ្ឈរនៃអេក្រង់។'
    },
    {
      question: 'តើ Attributes `data-bs-dismiss="modal"` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីបើក Modal',
        'ដើម្បីបិទ Modal',
        'ដើម្បីកំណត់ទំហំ Modal',
        'ដើម្បីផ្លាស់ប្តូរពណ៌ Modal'
      ],
      correct: 1,
      explanation: 'Attributes `data-bs-dismiss="modal"` ត្រូវបានប្រើដើម្បីបិទ Modal ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីធ្វើឱ្យ Modal អាច Scroll បាន នៅពេលមាតិកាវវែង?',
      options: ['`modal-scroll`', '`modal-dialog-scrollable`', '`modal-overflow`', '`modal-content-scroll`'],
      correct: 1,
      explanation: 'Class `modal-dialog-scrollable` ត្រូវបានប្រើដើម្បីធ្វើឱ្យ Modal អាច Scroll បាន នៅពេលមាតិកាវវែង។'
    },
    {
      question: 'តើ `tabindex="-1"` Attribute នៅក្នុង Modal ធ្វើអ្វី?',
      options: [
        'ធ្វើឱ្យ Modal មិនអាច Focus បានដោយ Keyboard',
        'ធ្វើឱ្យ Modal អាច Focus បានដោយ Keyboard ប៉ុន្តែមិនអាច Tab ចូលបានដោយស្វ័យប្រវត្តិ',
        'លាក់ Modal ពីការមើលឃើញ',
        'កំណត់លំដាប់ Tab របស់ Modal'
      ],
      correct: 1,
      explanation: '`tabindex="-1"` ធ្វើឱ្យ Modal អាច Focus បានដោយ Keyboard (ឧទាហរណ៍៖ ដោយ JavaScript) ប៉ុន្តែមិនអាច Tab ចូលបានដោយស្វ័យប្រវត្តិពីធាតុផ្សេងទៀតនៅលើទំព័រ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ផ្នែកខាងក្រោមនៃ Modal?',
      options: ['`modal-bottom`', '`modal-end`', '`modal-footer`', '`modal-actions`'],
      correct: 2,
      explanation: 'Class `modal-footer` ត្រូវបានប្រើសម្រាប់ផ្នែកខាងក្រោមនៃ Modal ។'
    },
    {
      question: 'តើ Class `modal-fullscreen` នឹងធ្វើអ្វី?',
      options: [
        'ធ្វើឱ្យ Modal មានទំហំធំជាងគេ',
        'ធ្វើឱ្យ Modal បង្ហាញពេញអេក្រង់',
        'ធ្វើឱ្យ Modal លាក់',
        'ធ្វើឱ្យ Modal អាចអូសបាន'
      ],
      correct: 1,
      explanation: 'Class `modal-fullscreen` ធ្វើឱ្យ Modal បង្ហាញពេញអេក្រង់។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Modal សាមញ្ញមួយ

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN** ។

នៅក្នុងឯកសារនោះ សូមបង្កើត៖

1.  **ប៊ូតុងមួយ** ដែលមានអត្ថបទ "បើក Modal" ។
2.  **Modal មួយ** ដែលមានចំណងជើង "ព័ត៌មានសំខាន់" មាតិកា "នេះជាសារព័ត៌មានលម្អិតសម្រាប់អ្នក។" និងប៊ូតុង "យល់ព្រម" នៅខាងក្រោម។
3.  កំណត់ **Modal ឱ្យមានទំហំតូច (Small)** និងដាក់នៅ **ចំកណ្តាលបញ្ឈរនៃអេក្រង់** ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Modals Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h1>ការអនុវត្តន៍ Modals</h1>
        
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#infoModal">
            បើក Modal
        </button>

        <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="infoModalLabel">ព័ត៌មានសំខាន់</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        នេះជាសារព័ត៌មានលម្អិតសម្រាប់អ្នក។
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">យល់ព្រម</button>
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

export default BootstrapLesson3_2Content;