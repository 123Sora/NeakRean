// src/components/lessons/bootstrap/BootstrapLesson4_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson4_1Content: LessonContent = {
  title: 'Forms (ទម្រង់បែបបទ)',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Forms',
    'របៀបបង្កើត Basic Form Controls (Input, Textarea, Select)',
    'របៀបប្រើប្រាស់ Checkboxes និង Radios',
    'របៀបអនុវត្ត Form Validation',
    'របៀបប្រើប្រាស់ Input Groups'
  ],
  content: `
# Forms (ទម្រង់បែបបទ) 📝

---

**Forms** គឺជាផ្នែកសំខាន់មួយនៃគេហទំព័រ ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បញ្ចូលទិន្នន័យ។ Bootstrap ផ្តល់ជូននូវ Class ដ៏ស្រស់ស្អាត និង Responsive សម្រាប់ Form Controls ។

---

## 1. Basic Form Controls 🏗️

Form Controls ដូចជា **Input**, **Textarea**, និង **Select** ត្រូវបានរចនាម៉ូតដោយ Class \`form-control\` និង \`form-select\` ។

\`\`\`html
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">អាសយដ្ឋានអ៊ីមែល</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">ឧទាហរណ៍ Textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="mb-3">
  <label for="exampleFormControlSelect1" class="form-label">ជ្រើសរើសជម្រើស</label>
  <select class="form-select" id="exampleFormControlSelect1">
    <option selected>ជ្រើសរើស...</option>
    <option value="1">មួយ</option>
    <option value="2">ពីរ</option>
    <option value="3">បី</option>
  </select>
</div>
\`\`\`
* \`mb-3\`: **Margin Bottom** 3 units ។
* \`form-label\`: Class សម្រាប់ **Label** ។
* \`form-control\`: Class សម្រាប់ Inputs និង Textareas ។
* \`form-select\`: Class សម្រាប់ Select elements ។

---

## 2. Checkboxes and Radios ✅🔘

Checkboxes និង Radios ត្រូវបានរចនាម៉ូតដោយ Class \`form-check\` ។

\`\`\`html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
\`\`\`
* \`form-check\`: **Wrapper** សម្រាប់ Checkbox/Radio ។
* \`form-check-input\`: Class សម្រាប់ Input (Checkbox/Radio) ។
* \`form-check-label\`: Class សម្រាប់ Label ។

---

## 3. Form Validation (ការផ្ទៀងផ្ទាត់ទម្រង់) ✔️

Bootstrap ផ្តល់នូវរចនាប័ទ្មសម្រាប់បង្ហាញស្ថានភាព **Validation (Valid/Invalid)** ។

\`\`\`html
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="validationCustom01" class="form-label">ឈ្មោះដំបូង</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
    <div class="valid-feedback">
      មើលទៅល្អ!
    </div>
  </div>
  <div class="mb-3">
    <label for="validationCustom02" class="form-label">នាមត្រកូល</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
    <div class="invalid-feedback">
      សូមបញ្ចូលនាមត្រកូល។
    </div>
  </div>
  <button class="btn btn-primary" type="submit">បញ្ជូនទម្រង់</button>
</form>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
</script>
\`\`\`
* \`needs-validation\`: Class សម្រាប់ Form ដែលត្រូវការ Validation ។
* \`novalidate\`: បិទ Validation លំនាំដើមរបស់ Browser ។
* \`required\`: HTML5 Attribute ដែលធ្វើឱ្យ Input ត្រូវការបំពេញ។
* \`valid-feedback\`, \`invalid-feedback\`: Classes សម្រាប់បង្ហាញសារ Feedback ។
* \`was-validated\`: Class ដែលត្រូវបានបន្ថែមដោយ JavaScript នៅពេល Form ត្រូវបានផ្ទៀងផ្ទាត់។

---

## 4. Input Groups (ក្រុម Input) ➕

**Input Groups** អនុញ្ញាតឱ្យអ្នកបន្ថែម Text, Buttons, ឬ Button Groups ទៅ Inputs ។

\`\`\`html
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="ឈ្មោះអ្នកប្រើប្រាស់" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="ឈ្មោះអ្នកទទួល" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">ប៊ូតុង</button>
</div>
\`\`\`
* \`input-group\`: Wrapper សម្រាប់ Input Group ។
* \`input-group-text\`: Class សម្រាប់ Text នៅក្នុង Input Group ។
* \`btn-outline-secondary\`: ប៊ូតុងដែលមាន Border តែប៉ុណ្ណោះ។

---
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ទម្រង់ចុះឈ្មោះ</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីទម្រង់ចុះឈ្មោះពេញលេញជាមួយនឹង Form Controls ផ្សេងៗគ្នា Validation និង Input Group ។</p>
<div class="container mt-5">
  <h2 class="mb-4">ទម្រង់ចុះឈ្មោះ</h2>
  <form class="needs-validation" novalidate>
    <div class="mb-3">
      <label for="regUsername" class="form-label">ឈ្មោះអ្នកប្រើប្រាស់</label>
      <div class="input-group has-validation">
        <span class="input-group-text" id="inputGroupPrepend">@</span>
        <input type="text" class="form-control" id="regUsername" aria-describedby="inputGroupPrepend validationUsernameFeedback" required>
        <div id="validationUsernameFeedback" class="invalid-feedback">
          សូមជ្រើសរើសឈ្មោះអ្នកប្រើប្រាស់។
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="regEmail" class="form-label">អាសយដ្ឋានអ៊ីមែល</label>
      <input type="email" class="form-control" id="regEmail" placeholder="you@example.com" required>
      <div class="invalid-feedback">
        សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលមានសុពលភាព។
      </div>
    </div>
    <div class="mb-3">
      <label for="regPassword" class="form-label">ពាក្យសម្ងាត់</label>
      <input type="password" class="form-control" id="regPassword" required>
      <div class="invalid-feedback">
        សូមបញ្ចូលពាក្យសម្ងាត់។
      </div>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="termsCheck" required>
      <label class="form-check-label" for="termsCheck">ខ្ញុំយល់ព្រមតាមលក្ខខណ្ឌ</label>
      <div class="invalid-feedback">
        អ្នកត្រូវតែយល់ព្រមមុននឹងបញ្ជូន។
      </div>
    </div>
    <button class="btn btn-primary" type="submit">ចុះឈ្មោះ</button>
  </form>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Forms Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h2 class="mb-4">ទម្រង់ចុះឈ្មោះ</h2>
        <form class="needs-validation" novalidate>
            <div class="mb-3">
                <label for="regUsername" class="form-label">ឈ្មោះអ្នកប្រើប្រាស់</label>
                <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" class="form-control" id="regUsername" aria-describedby="inputGroupPrepend validationUsernameFeedback" required>
                    <div id="validationUsernameFeedback" class="invalid-feedback">
                        សូមជ្រើសរើសឈ្មោះអ្នកប្រើប្រាស់។
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="regEmail" class="form-label">អាសយដ្ឋានអ៊ីមែល</label>
                <input type="email" class="form-control" id="regEmail" placeholder="you@example.com" required>
                <div class="invalid-feedback">
                    សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលមានសុពលភាព។
                </div>
            </div>
            <div class="mb-3">
                <label for="regPassword" class="form-label">ពាក្យសម្ងាត់</label>
                <input type="password" class="form-control" id="regPassword" required>
                <div class="invalid-feedback">
                    សូមបញ្ចូលពាក្យសម្ងាត់។
                </div>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="termsCheck" required>
                <label class="form-check-label" for="termsCheck">ខ្ញុំយល់ព្រមតាមលក្ខខណ្ឌ</label>
                <div class="invalid-feedback">
                    អ្នកត្រូវតែយល់ព្រមមុននឹងបញ្ជូន។
                </div>
            </div>
            <button class="btn btn-primary" type="submit">ចុះឈ្មោះ</button>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    <script>
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function () {
          'use strict'

          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.querySelectorAll('.needs-validation')

          // Loop over them and prevent submission
          Array.prototype.slice.call(forms)
            .forEach(function (form) {
              form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
                }

                form.classList.add('was-validated')
              }, false)
            })
        })()
    </script>
</body>
</html>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ Input និង Textarea?',
      options: ['`form-input`', '`form-control`', '`input-field`', '`text-input`'],
      correct: 1,
      explanation: 'Class `form-control` ត្រូវបានប្រើសម្រាប់ Inputs និង Textareas ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ Select Element?',
      options: ['`form-dropdown`', '`form-select`', '`select-box`', '`dropdown-control`'],
      correct: 1,
      explanation: 'Class `form-select` ត្រូវបានប្រើសម្រាប់ Select elements ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ Wrapper របស់ Checkbox/Radio?',
      options: ['`check-group`', '`form-check`', '`radio-group`', '`input-check`'],
      correct: 1,
      explanation: 'Class `form-check` គឺជា Wrapper សម្រាប់ Checkbox/Radio ។'
    },
    {
      question: 'តើ Attributes មួយណាដែលបិទ Validation លំនាំដើមរបស់ Browser នៅលើ Form?',
      options: ['`no-validate`', '`disable-validation`', '`novalidate`', '`html-validate="false"`'],
      correct: 2,
      explanation: 'Attributes `novalidate` បិទ Validation លំនាំដើមរបស់ Browser ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានបន្ថែមទៅ Form ដោយ JavaScript នៅពេលដែលវាត្រូវបានផ្ទៀងផ្ទាត់?',
      options: ['`validated`', '`is-valid`', '`was-validated`', '`form-checked`'],
      correct: 2,
      explanation: 'Class `was-validated` ត្រូវបានបន្ថែមដោយ JavaScript នៅពេល Form ត្រូវបានផ្ទៀងផ្ទាត់។'
    },
    {
      question: 'តើ Class `input-group-text` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ទំហំ Input Group',
        'ដើម្បីបន្ថែម Text ទៅក្នុង Input Group',
        'ដើម្បីផ្លាស់ប្តូរពណ៌ Input Group',
        'ដើម្បីលាក់ Text នៅក្នុង Input Group'
      ],
      correct: 1,
      explanation: 'Class `input-group-text` ត្រូវបានប្រើសម្រាប់ Text នៅក្នុង Input Group ។'
    },
    {
      question: 'តើ Class `invalid-feedback` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញសារជោគជ័យ',
        'បង្ហាញសារកំហុស Validation',
        'បង្ហាញសារព្រមាន',
        'បង្ហាញសារព័ត៌មាន'
      ],
      correct: 1,
      explanation: 'Class `invalid-feedback` ត្រូវបានប្រើសម្រាប់បង្ហាញសារកំហុស Validation ។'
    },
    {
      question: 'តើ HTML5 Attributes `required` ធ្វើអ្វី?',
      options: [
        'ធ្វើឱ្យ Input មិនអាចកែប្រែបាន',
        'ធ្វើឱ្យ Input ត្រូវការបំពេញ',
        'ធ្វើឱ្យ Input មានទំហំធំ',
        'ធ្វើឱ្យ Input មានពណ៌ខុសគ្នា'
      ],
      correct: 2,
      explanation: 'HTML5 Attributes `required` ធ្វើឱ្យ Input ត្រូវការបំពេញ។'
    },
    {
      question: 'តើ Class `form-label` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីរចនាម៉ូត Input',
        'ដើម្បីរចនាម៉ូត Label',
        'ដើម្បីរចនាម៉ូត Button',
        'ដើម្បីរចនាម៉ូត Form Container'
      ],
      correct: 1,
      explanation: 'Class `form-label` ត្រូវបានប្រើដើម្បីរចនាម៉ូត Label ។'
    },
    {
      question: 'តើ Input Groups អនុញ្ញាតឱ្យអ្នកបន្ថែមអ្វីខ្លះទៅ Inputs?',
      options: [
        'តែ Text ប៉ុណ្ណោះ',
        'តែ Buttons ប៉ុណ្ណោះ',
        'Text, Buttons, ឬ Button Groups',
        'តែ Icons ប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Input Groups អនុញ្ញាតឱ្យអ្នកបន្ថែម Text, Buttons, ឬ Button Groups ទៅ Inputs ។'
    },
    {
      question: 'តើ Class `has-validation` ត្រូវបានប្រើសម្រាប់អ្វីនៅក្នុង Input Group?',
      options: [
        'ដើម្បីបង្ហាញថា Input Group ត្រូវបានផ្ទៀងផ្ទាត់',
        'ដើម្បីបន្ថែម Icon ទៅ Input Group',
        'ដើម្បីបង្ហាញ Feedback សម្រាប់ Validation នៅខាងក្នុង Input Group',
        'ដើម្បីកំណត់ទំហំ Input Group'
      ],
      correct: 2,
      explanation: 'Class `has-validation` ត្រូវបានប្រើដើម្បីបង្ហាញ Feedback សម្រាប់ Validation នៅខាងក្នុង Input Group ។'
    },
    {
      question: 'តើ Bootstrap Forms គឺ Responsive តាមលំនាំដើមដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែជាមួយ JavaScript', 'បានតែជាមួយ CSS ផ្ទាល់ខ្លួន'],
      correct: 0,
      explanation: 'បាទ/ចាស Bootstrap Forms គឺ Responsive តាមលំនាំដើម។'
    },
    {
      question: 'តើ `name` Attribute មានសារៈសំខាន់សម្រាប់ Radio Buttons ដូចម្តេច?',
      options: [
        'ដើម្បីកំណត់ពណ៌ Radio Button',
        'ដើម្បីឱ្យ Radio Buttons មួយក្រុមអាចជ្រើសរើសបានតែមួយប៉ុណ្ណោះ',
        'ដើម្បីកំណត់ទំហំ Radio Button',
        'ដើម្បីលាក់ Radio Button'
      ],
      correct: 1,
      explanation: '`name` Attribute សម្រាប់ Radio Buttons ធានាថាមានតែ Radio Button មួយប៉ុណ្ណោះក្នុងក្រុមដែលមាន `name` ដូចគ្នាអាចត្រូវបានជ្រើសរើសក្នុងពេលតែមួយ។'
    },
    {
      question: 'តើ Class `form-check-input` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Label របស់ Checkbox/Radio',
        'សម្រាប់ Input របស់ Checkbox/Radio',
        'សម្រាប់ Wrapper របស់ Checkbox/Radio',
        'សម្រាប់ Text របស់ Checkbox/Radio'
      ],
      correct: 1,
      explanation: 'Class `form-check-input` ត្រូវបានប្រើសម្រាប់ Input (Checkbox/Radio) ។'
    },
    {
      question: 'តើ `aria-describedby` Attribute ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីនៅក្នុង Form Controls?',
      options: [
        'ដើម្បីកំណត់ ID របស់ Control',
        'ដើម្បីភ្ជាប់ Control ទៅនឹង Element ដែលផ្តល់ការពិពណ៌នា (សម្រាប់ Accessibility)',
        'ដើម្បីកំណត់ Placeholder Text',
        'ដើម្បីកំណត់ Value លំនាំដើម'
      ],
      correct: 1,
      explanation: '`aria-describedby` Attribute ត្រូវបានប្រើដើម្បីភ្ជាប់ Control ទៅនឹង Element ដែលផ្តល់ការពិពណ៌នាបន្ថែម ឬសារ Feedback (សម្រាប់ Accessibility) ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើតទម្រង់ទំនាក់ទំនងសាមញ្ញ

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN** ។
នៅក្នុងឯកសារនោះ សូមបង្កើត**ទម្រង់ទំនាក់ទំនងសាមញ្ញមួយ**ដែលមាន៖

1.  **Input** សម្រាប់ "**ឈ្មោះពេញ**" (Full Name) ។
2.  **Input** សម្រាប់ "**អ៊ីមែល**" (Email) ដែលមាន Placeholder "**yourname@example.com**" ។
3.  **Textarea** សម្រាប់ "**សារ**" (Message) ។
4.  **Checkbox មួយ**ដែលមានអត្ថបទ "**ខ្ញុំយល់ព្រមតាមលក្ខខណ្ឌ**" (I agree to the terms) ។
5.  **ប៊ូតុង "បញ្ជូន"** (Submit) ។
6.  ត្រូវប្រាកដថា Inputs ទាំងអស់**ត្រូវការបំពេញ (required)** ហើយបង្ហាញ**សារ Feedback សម្រាប់ Validation** ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Forms Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h1>ទម្រង់ទំនាក់ទំនង</h1>
        <form class="needs-validation" novalidate>
            <div class="mb-3">
                <label for="fullName" class="form-label">ឈ្មោះពេញ</label>
                <input type="text" class="form-control" id="fullName" required>
                <div class="invalid-feedback">
                    សូមបញ្ចូលឈ្មោះពេញរបស់អ្នក។
                </div>
            </div>
            <div class="mb-3">
                <label for="emailAddress" class="form-label">អាសយដ្ឋានអ៊ីមែល</label>
                <input type="email" class="form-control" id="emailAddress" placeholder="yourname@example.com" required>
                <div class="invalid-feedback">
                    សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលមានសុពលភាព។
                </div>
            </div>
            <div class="mb-3">
                <label for="messageTextarea" class="form-label">សារ</label>
                <textarea class="form-control" id="messageTextarea" rows="4" required></textarea>
                <div class="invalid-feedback">
                    សូមបញ្ចូលសាររបស់អ្នក។
                </div>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="termsAgree" required>
                <label class="form-check-label" for="termsAgree">ខ្ញុំយល់ព្រមតាមលក្ខខណ្ឌ</label>
                <div class="invalid-feedback">
                    អ្នកត្រូវតែយល់ព្រមតាមលក្ខខណ្ឌ។
                </div>
            </div>
            <button class="btn btn-primary" type="submit">បញ្ជូន</button>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    <script>
        // JavaScript for form validation
        (function () {
          'use strict'
          var forms = document.querySelectorAll('.needs-validation')
          Array.prototype.slice.call(forms)
            .forEach(function (form) {
              form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
                }
                form.classList.add('was-validated')
              }, false)
            })
        })()
    </script>
</body>
</html>`
  }
};

export default BootstrapLesson4_1Content;