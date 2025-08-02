// src/components/lessons/bootstrap/BootstrapLesson2_3.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson2_3Content: LessonContent = {
  title: 'Forms (ទម្រង់)',
  objectives: [
    'យល់ដឹងពីមូលដ្ឋានគ្រឹះនៃ Bootstrap Forms',
    'របៀបប្រើប្រាស់ Form Controls (Input, Textarea, Select)',
    'របៀបបង្កើត Form Groups និង Labels',
    'ការកំណត់ទំហំ Form Controls',
    'ការប្រើប្រាស់ Form Validation States'
  ],
  content: `
# Forms (ទម្រង់) 📝

---

Forms គឺជាផ្នែកសំខាន់មួយនៃគេហទំព័រសម្រាប់ប្រមូលព័ត៌មានពីអ្នកប្រើប្រាស់។ Bootstrap ផ្តល់នូវ Classes ដែលមានរូបរាងស្អាត និង Responsive សម្រាប់ Form Controls ទាំងអស់។

---

## 1. Basic Form Structure 🏗️

ដើម្បីរចនាម៉ូត Form Controls ឱ្យបានត្រឹមត្រូវ អ្នកត្រូវប្រើ Class \`form-control\` សម្រាប់ \`<input>\`, \`<textarea>\`, និង \`<select>\` ។

\`\`\`html
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">អាសយដ្ឋានអ៊ីមែល</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">យើងនឹងមិនចែករំលែកអ៊ីមែលរបស់អ្នកជាមួយអ្នកដទៃទេ។</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">ពាក្យសម្ងាត់</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">ពិនិត្យខ្ញុំ</label>
  </div>
  <button type="submit" class="btn btn-primary">បញ្ជូន</button>
</form>
\`\`\`
* \`mb-3\`: (Margin Bottom 3) ផ្តល់គម្លាតខាងក្រោមសម្រាប់ Form Group ។
* \`form-label\`: Class សម្រាប់ Label ។
* \`form-control\`: Class សម្រាប់ Input, Textarea, Select ។
* \`form-text\`: Class សម្រាប់អត្ថបទជំនួយតូចៗ។
* \`form-check\`, \`form-check-input\`, \`form-check-label\`: Classes សម្រាប់ Checkboxes និង Radios ។

---

## 2. Form Controls ⚙️

### Input
Input គឺជា Control ទូទៅបំផុត។

\`\`\`html
<input type="text" class="form-control" placeholder="ឈ្មោះពេញ">
<input type="number" class="form-control" placeholder="លេខទូរស័ព្ទ">
\`\`\`

### Textarea
សម្រាប់អត្ថបទច្រើនបន្ទាត់។

\`\`\`html
<textarea class="form-control" rows="3" placeholder="សាររបស់អ្នក"></textarea>
\`\`\`

### Select
សម្រាប់ជ្រើសរើសជម្រើសពីបញ្ជី។

\`\`\`html
<select class="form-select">
  <option selected>ជ្រើសរើស...</option>
  <option value="1">ជម្រើសទី ១</option>
  <option value="2">ជម្រើសទី ២</option>
  <option value="3">ជម្រើសទី ៣</option>
</select>
\`\`\`

### Checkboxes and Radios
សម្រាប់ជម្រើសច្រើន ឬជម្រើសតែមួយ។

\`\`\`html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    ខ្ញុំយល់ព្រមតាមលក្ខខណ្ឌ
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
  <label class="form-check-label" for="flexRadioDefault1">
    ជម្រើសទី ១
  </label>
</div>
\`\`\`

---

## 3. Form Sizing 📏

អ្នកអាចកំណត់ទំហំ Form Controls ដោយប្រើ Classes \`form-control-lg\` (Large) ឬ \`form-control-sm\` (Small) ។

\`\`\`html
<input class="form-control form-control-lg" type="text" placeholder="ទំហំធំ" aria-label=".form-control-lg example">
<input class="form-control" type="text" placeholder="ទំហំធម្មតា" aria-label="default example">
<input class="form-control form-control-sm" type="text" placeholder="ទំហំតូច" aria-label=".form-control-sm example">
\`\`\`

---

## 4. Validation States ✅❌

Bootstrap ផ្តល់នូវ Styles សម្រាប់បង្ហាញពីស្ថានភាព Validation (Valid ឬ Invalid) របស់ Form Controls ។

* \`is-valid\`: សម្រាប់ Input ដែលត្រឹមត្រូវ។
* \`is-invalid\`: សម្រាប់ Input ដែលមិនត្រឹមត្រូវ។
* \`valid-feedback\`: សារមតិកែលម្អនៅពេល Valid ។
* \`invalid-feedback\`: សារមតិកែលម្អនៅពេល Invalid ។

\`\`\`html
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="validationCustom01" class="form-label">ឈ្មោះ</label>
    <input type="text" class="form-control is-valid" id="validationCustom01" value="John" required>
    <div class="valid-feedback">
      មើលទៅល្អ!
    </div>
  </div>
  <div class="mb-3">
    <label for="validationCustom02" class="form-label">អ៊ីមែល</label>
    <input type="email" class="form-control is-invalid" id="validationCustom02" value="invalid-email" required>
    <div class="invalid-feedback">
      សូមបញ្ចូលអ៊ីមែលដែលត្រឹមត្រូវ។
    </div>
  </div>
</form>
\`\`\`
* **ចំណាំ:** ដើម្បីឱ្យ Validation Styles ដំណើរការ អ្នកប្រហែលជាត្រូវបន្ថែម JavaScript តិចតួច (ជាធម្មតាសម្រាប់ \`needs-validation\` Class) ។

---
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ទម្រង់ចុះឈ្មោះ Responsive</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីទម្រង់ចុះឈ្មោះដែលមាន Input ប្រភេទផ្សេងៗគ្នា និងការប្រើប្រាស់ Grid System សម្រាប់ Layout Responsive ។</p>
<div class="container mt-5">
  <h2 class="mb-4">ទម្រង់ចុះឈ្មោះ</h2>
  <form class="row g-3 needs-validation" novalidate>
    <div class="col-md-6">
      <label for="firstName" class="form-label">ឈ្មោះ</label>
      <input type="text" class="form-control" id="firstName" value="" required>
      <div class="invalid-feedback">
        សូមបញ្ចូលឈ្មោះរបស់អ្នក។
      </div>
    </div>
    <div class="col-md-6">
      <label for="lastName" class="form-label">ត្រកូល</label>
      <input type="text" class="form-control" id="lastName" value="" required>
      <div class="invalid-feedback">
        សូមបញ្ចូលត្រកូលរបស់អ្នក។
      </div>
    </div>
    <div class="col-md-12">
      <label for="email" class="form-label">អាសយដ្ឋានអ៊ីមែល</label>
      <input type="email" class="form-control" id="email" required>
      <div class="invalid-feedback">
        សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលត្រឹមត្រូវ។
      </div>
    </div>
    <div class="col-md-6">
      <label for="password" class="form-label">ពាក្យសម្ងាត់</label>
      <input type="password" class="form-control" id="password" required>
      <div class="invalid-feedback">
        សូមបញ្ចូលពាក្យសម្ងាត់។
      </div>
    </div>
    <div class="col-md-6">
      <label for="confirmPassword" class="form-label">បញ្ជាក់ពាក្យសម្ងាត់</label>
      <input type="password" class="form-control" id="confirmPassword" required>
      <div class="invalid-feedback">
        ពាក្យសម្ងាត់មិនត្រូវគ្នាទេ។
      </div>
    </div>
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="termsCheck" required>
        <label class="form-check-label" for="termsCheck">
          ខ្ញុំយល់ព្រមតាម <a href="#" class="text-decoration-none">លក្ខខណ្ឌ</a>។
        </label>
        <div class="invalid-feedback">
          អ្នកត្រូវតែយល់ព្រមមុននឹងបន្ត។
        </div>
      </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">ចុះឈ្មោះ</button>
    </div>
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
        <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-6">
                <label for="firstName" class="form-label">ឈ្មោះ</label>
                <input type="text" class="form-control" id="firstName" value="" required>
                <div class="invalid-feedback">
                    សូមបញ្ចូលឈ្មោះរបស់អ្នក។
                </div>
            </div>
            <div class="col-md-6">
                <label for="lastName" class="form-label">ត្រកូល</label>
                <input type="text" class="form-control" id="lastName" value="" required>
                <div class="invalid-feedback">
                    សូមបញ្ចូលត្រកូលរបស់អ្នក។
                </div>
            </div>
            <div class="col-md-12">
                <label for="email" class="form-label">អាសយដ្ឋានអ៊ីមែល</label>
                <input type="email" class="form-control" id="email" required>
                <div class="invalid-feedback">
                    សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលត្រឹមត្រូវ។
                </div>
            </div>
            <div class="col-md-6">
                <label for="password" class="form-label">ពាក្យសម្ងាត់</label>
                <input type="password" class="form-control" id="password" required>
                <div class="invalid-feedback">
                    សូមបញ្ចូលពាក្យសម្ងាត់។
                </div>
            </div>
            <div class="col-md-6">
                <label for="confirmPassword" class="form-label">បញ្ជាក់ពាក្យសម្ងាត់</label>
                <input type="password" class="form-control" id="confirmPassword" required>
                <div class="invalid-feedback">
                    ពាក្យសម្ងាត់មិនត្រូវគ្នាទេ។
                </div>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="termsCheck" required>
                    <label class="form-check-label" for="termsCheck">
                        ខ្ញុំយល់ព្រមតាម <a href="#" class="text-decoration-none">លក្ខខណ្ឌ</a>។
                    </label>
                    <div class="invalid-feedback">
                        អ្នកត្រូវតែយល់ព្រមមុននឹងបន្ត។
                    </div>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">ចុះឈ្មោះ</button>
            </div>
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
      question: 'តើ Class មួយណាដែលត្រូវប្រើសម្រាប់ Input, Textarea, និង Select controls នៅក្នុង Bootstrap?',
      options: ['`input-control`', '`form-input`', '`form-control`', '`field-control`'],
      correct: 2,
      explanation: 'Class `form-control` ត្រូវបានប្រើសម្រាប់ Input, Textarea, និង Select controls នៅក្នុង Bootstrap ។'
    },
    {
      question: 'តើ Class មួយណាដែលផ្តល់គម្លាតខាងក្រោមសម្រាប់ Form Group?',
      options: ['`mt-3`', '`mb-3`', '`p-3`', '`mx-3`'],
      correct: 1,
      explanation: 'Class `mb-3` (margin-bottom: 1rem) ត្រូវបានប្រើដើម្បីផ្តល់គម្លាតខាងក្រោមសម្រាប់ Form Group ។'
    },
    {
      question: 'តើ Class មួយណាដែលប្រើសម្រាប់ Label របស់ Form Control?',
      options: ['`input-label`', '`control-label`', '`form-label`', '`label-text`'],
      correct: 2,
      explanation: 'Class `form-label` ត្រូវបានប្រើសម្រាប់ Label របស់ Form Control ។'
    },
    {
      question: 'ដើម្បីធ្វើឱ្យ Input មានទំហំធំ អ្នកត្រូវបន្ថែម Class មួយណា?',
      options: ['`form-control-big`', '`form-control-lg`', '`input-lg`', '`form-large`'],
      correct: 1,
      explanation: 'Class `form-control-lg` ត្រូវបានប្រើដើម្បីធ្វើឱ្យ Input មានទំហំធំ។'
    },
    {
      question: 'តើ Class មួយណាដែលបង្ហាញថា Input មិនត្រឹមត្រូវ (Invalid)?',
      options: ['`is-error`', '`is-wrong`', '`is-invalid`', '`has-error`'],
      correct: 2,
      explanation: 'Class `is-invalid` ត្រូវបានប្រើដើម្បីបង្ហាញថា Input មិនត្រឹមត្រូវ។'
    },
    {
      question: 'តើ Class `form-text` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីកំណត់ចំណងជើង Form',
        'ដើម្បីផ្តល់អត្ថបទជំនួយតូចៗសម្រាប់ Form Control',
        'ដើម្បីបង្ហាញសារកំហុស',
        'ដើម្បីរចនាម៉ូត Textarea'
      ],
      correct: 1,
      explanation: 'Class `form-text` ត្រូវបានប្រើដើម្បីផ្តល់អត្ថបទជំនួយតូចៗសម្រាប់ Form Control ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ Checkboxes និង Radios?',
      options: ['`form-check`', '`form-radio`', '`form-checkbox`', '`form-select-option`'],
      correct: 0,
      explanation: 'Class `form-check` ត្រូវបានប្រើសម្រាប់ Checkboxes និង Radios ។'
    },
    {
      question: 'តើ Attributes `novalidate` នៅក្នុង Tag `<form>` ធ្វើអ្វី?',
      options: [
        'ធ្វើឱ្យ Form មិនអាចបញ្ជូនបាន',
        'បិទការ Validation លំនាំដើមរបស់ Browser',
        'ធ្វើឱ្យ Form ដំណើរការលឿនជាងមុន',
        'បន្ថែម Validation ដោយស្វ័យប្រវត្តិ'
      ],
      correct: 1,
      explanation: 'Attributes `novalidate` ត្រូវបានប្រើដើម្បីបិទការ Validation លំនាំដើមរបស់ Browser ។'
    },
    {
      question: 'តើ Class `valid-feedback` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីបង្ហាញសារកំហុស',
        'ដើម្បីបង្ហាញសារជោគជ័យនៅពេល Input ត្រឹមត្រូវ',
        'ដើម្បីកំណត់ពណ៌ផ្ទៃខាងក្រោយ',
        'ដើម្បីផ្លាស់ប្តូរទំហំ Form'
      ],
      correct: 1,
      explanation: 'Class `valid-feedback` ត្រូវបានប្រើដើម្បីបង្ហាញសារជោគជ័យនៅពេល Input ត្រឹមត្រូវ។'
    },
    {
      question: 'តើ Class `form-select` ត្រូវបានប្រើសម្រាប់ Element មួយណា?',
      options: ['`<input type="text">`', '`<textarea>`', '`<button>`', '`<select>`'],
      correct: 3,
      explanation: 'Class `form-select` ត្រូវបានប្រើសម្រាប់ Element `<select>` ។'
    },
    {
      question: 'តើ `row g-3` នៅក្នុង Form ធ្វើអ្វី?',
      options: [
        'បង្កើតជួរដេកដែលមានគម្លាត 3 units រវាង Columns',
        'បង្កើតជួរដេកដែលមានគម្លាត 3 units រវាង Rows',
        'កំណត់ទំហំ Font របស់ Form',
        'ធ្វើឱ្យ Form Controls មានទទឹងពេញ'
      ],
      correct: 0,
      explanation: '`row g-3` ប្រើ Grid System ដើម្បីរៀបចំ Form Controls ជាជួរដេក ហើយ `g-3` ផ្តល់គម្លាត (gutters) 3 units រវាង Columns ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីធ្វើឱ្យ Input មានទំហំតូច?',
      options: ['`form-control-small`', '`form-control-xs`', '`form-control-sm`', '`input-small`'],
      correct: 2,
      explanation: 'Class `form-control-sm` ត្រូវបានប្រើដើម្បីធ្វើឱ្យ Input មានទំហំតូច។'
    },
    {
      question: 'តើ `aria-describedby` Attribute ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីកំណត់ ID របស់ Input',
        'ដើម្បីភ្ជាប់ Input ទៅនឹង Label',
        'ដើម្បីភ្ជាប់ Input ទៅនឹង Element ដែលផ្តល់ការពិពណ៌នា',
        'ដើម្បីកំណត់ Placeholder Text'
      ],
      correct: 2,
      explanation: '`aria-describedby` ភ្ជាប់ Input ទៅនឹង Element ដែលផ្តល់ការពិពណ៌នាបន្ថែម (ដូចជាអត្ថបទជំនួយ) សម្រាប់គោលបំណងដែលអាចចូលប្រើបាន។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើតទម្រង់ទំនាក់ទំនងសាមញ្ញ

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN** ។

នៅក្នុងឯកសារនោះ សូមបង្កើត **ទម្រង់ទំនាក់ទំនងសាមញ្ញ** មួយដែលមានធាតុដូចខាងក្រោម៖

1.  **Input** មួយសម្រាប់ "**ឈ្មោះពេញ**" (Full Name) ។
2.  **Input** មួយសម្រាប់ "**អ៊ីមែល**" (Email) ដែលមាន **Validation State ជា Invalid** និងមាន **សារកំហុស** ថា "សូមបញ្ចូលអ៊ីមែលត្រឹមត្រូវ" ។ (អ្នកអាចកំណត់ \`value\` ទៅជាអ៊ីមែលមិនត្រឹមត្រូវសម្រាប់គោលបំណងបង្ហាញ)។
3.  **Textarea** មួយសម្រាប់ "**សារ**" (Message) ។
4.  **ប៊ូតុង** "បញ្ជូន" (Submit) ។

ត្រូវប្រាកដថាបានប្រើ **Class របស់ Bootstrap** ត្រឹមត្រូវដើម្បីរចនាម៉ូត **Form Controls** ទាំងអស់ ដូចជា \`form-control\` និង \`form-label\` ។ ដាក់ Form របស់អ្នកនៅក្នុង \`container\` មួយដើម្បីឱ្យមើលទៅមានរបៀបរៀបរយ។
`,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Forms Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h2 class="mb-4">ទម្រង់ទំនាក់ទំនង</h2>
        <form class="needs-validation" novalidate>
            <div class="mb-3">
                <label for="fullName" class="form-label">ឈ្មោះពេញ</label>
                <input type="text" class="form-control" id="fullName" required>
                <div class="invalid-feedback">
                    សូមបញ្ចូលឈ្មោះពេញរបស់អ្នក។
                </div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">អ៊ីមែល</label>
                <input type="email" class="form-control is-invalid" id="email" value="invalid@example.com" required>
                <div class="invalid-feedback">
                    សូមបញ្ចូលអ៊ីមែលត្រឹមត្រូវ។
                </div>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">សារ</label>
                <textarea class="form-control" id="message" rows="3" required></textarea>
                <div class="invalid-feedback">
                    សូមបញ្ចូលសាររបស់អ្នក។
                </div>
            </div>
            <button type="submit" class="btn btn-primary">បញ្ជូន</button>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    <script>
        // Example starter JavaScript for disabling form submissions if there are invalid fields
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
</html>
`
  }
};

export default BootstrapLesson2_3Content;