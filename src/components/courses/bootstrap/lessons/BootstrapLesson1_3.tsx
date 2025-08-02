// src/components/lessons/bootstrap/BootstrapLesson1_3.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson1_3Content: LessonContent = {
  title: 'Bootstrap Grid System',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Grid System',
    'ស្គាល់ពីរបៀបប្រើ `container`, `row`, និង `col` Classes',
    'រៀនពីរបៀបបង្កើត Responsive Layouts ដោយប្រើ Grid System',
    'យល់ពី Breakpoints របស់ Bootstrap (sm, md, lg, xl)'
  ],
  content: `
# Bootstrap Grid System 📐

---

Bootstrap Grid System គឺជាផ្នែកដ៏សំខាន់បំផុតមួយរបស់ Bootstrap ដែលអនុញ្ញាតឱ្យអ្នកបង្កើត **Responsive Layouts** យ៉ាងងាយស្រួល។ វាត្រូវបានបង្កើតឡើងដោយប្រើ CSS Flexbox ហើយវាអនុញ្ញាតឱ្យអ្នករៀបចំមាតិកាគេហទំព័ររបស់អ្នកជាជួរដេក (Rows) និងជួរឈរ (Columns) ។

---

## គោលគំនិតសំខាន់ៗ 💡

Bootstrap Grid System គឺផ្អែកលើប្រព័ន្ធ **12 ជួរឈរ (12-column system)**។ នេះមានន័យថា ទទឹងសរុបនៃ Layout របស់អ្នកត្រូវបានបែងចែកជា 12 ជួរឈរតូចៗ។ អ្នកអាចផ្សំជួរឈរទាំងនេះដើម្បីបង្កើត Layout ផ្សេងៗគ្នា។

សមាសធាតុសំខាន់ៗនៃ Grid System រួមមាន៖

1.  **Containers:**
    * \`container\`: កំណត់ទទឹងថេរ (fixed-width) សម្រាប់មាតិកា។
    * \`container-fluid\`: កំណត់ទទឹងពេញ (full-width) សម្រាប់មាតិកា។
    * Containers ផ្តល់ Padding ជុំវិញមាតិកា។

2.  **Rows:**
    * \`row\`: ត្រូវតែដាក់នៅខាងក្នុង \`container\` ឬ \`container-fluid\` ។
    * Rows គឺជា Wrapper សម្រាប់ Columns ។
    * Rows លុប Margin អវិជ្ជមាន (negative margins) ពី Columns ។

3.  **Columns:**
    * \`col\`: ត្រូវតែដាក់នៅខាងក្នុង \`row\` ។
    * Columns គឺជាកន្លែងដែលមាតិកាពិតប្រាកដរបស់អ្នកត្រូវបានដាក់។
    * Columns មាន Padding ផ្ដេក (horizontal padding) ដែលបង្កើតជាគម្លាត (gutters) រវាង Columns ។

\`\`\`html
<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</div>
\`\`\`

---

## Responsive Breakpoints 📱💻🖥️

Bootstrap Grid System ប្រើប្រាស់ Breakpoints ដើម្បីសម្របសម្រួល Layout ទៅតាមទំហំអេក្រង់ផ្សេងៗគ្នា។

| Breakpoint | Class Prefix | Dimensions (min-width) |
| :--------- | :----------- | :--------------------- |
| Extra small | (none)       | < 576px                |
| Small      | \`sm\`       | ≥ 576px                |
| Medium     | \`md\`       | ≥ 768px                |
| Large      | \`lg\`       | ≥ 992px                |
| Extra large | \`xl\`       | ≥ 1200px               |
| XXL        | \`xxl\`      | ≥ 1400px               |

### ឧទាហរណ៍ការប្រើប្រាស់ Breakpoints:

* \`col-md-6\`: ជួរឈរនេះនឹងមានទទឹង 6 ជួរឈរ (ពាក់កណ្តាល) នៅលើអេក្រង់ទំហំ Medium (≥ 768px) និងធំជាង។ នៅលើអេក្រង់តូចជាង (Extra small, Small) វានឹងលាតពេញទទឹង (stacked)។
* \`col-sm-4 col-lg-6\`: ជួរឈរនេះនឹងមានទទឹង 4 ជួរឈរនៅអេក្រង់ Small (≥ 576px) និងធំជាង រហូតដល់អេក្រង់ Large (≥ 992px) ដែលវានឹងប្តូរទៅជា 6 ជួរឈរ។

---

## ការបង្កើត Layout ជាមួយ Grid System 🏗️

### ឧទាហរណ៍ 1: ជួរឈរស្មើគ្នា (Equal-width Columns)

\`\`\`html
<div class="container">
  <div class="row">
    <div class="col">
      <div class="p-3 border bg-light">ជួរឈរ</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">ជួរឈរ</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">ជួរឈរ</div>
    </div>
  </div>
</div>
\`\`\`
* \`col\` ដោយគ្មានលេខកំណត់ថាជួរឈរនឹងបែងចែកទទឹងស្មើៗគ្នា។

### ឧទាហរណ៍ 2: ជួរឈរមិនស្មើគ្នា (Unequal-width Columns)

\`\`\`html
<div class="container">
  <div class="row">
    <div class="col-4">
      <div class="p-3 border bg-light">ជួរឈរ 4</div>
    </div>
    <div class="col-8">
      <div class="p-3 border bg-light">ជួរឈរ 8</div>
    </div>
  </div>
</div>
\`\`\`
* \`col-4\` និង \`col-8\` បូកបញ្ចូលគ្នាគឺ 12 ជួរឈរ (4 + 8 = 12) ។

### ឧទាហរណ៍ 3: Responsive Layout

\`\`\`html
<div class="container">
  <div class="row">
    <div class="col-md-6 col-lg-4">
      <div class="p-3 border bg-light">ជួរឈរ Responsive 1</div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="p-3 border bg-light">ជួរឈរ Responsive 2</div>
    </div>
    <div class="col-md-12 col-lg-4">
      <div class="p-3 border bg-light">ជួរឈរ Responsive 3</div>
    </div>
  </div>
</div>
\`\`\`
* នៅលើអេក្រង់តូច (Extra small, Small) ជួរឈរទាំងនេះនឹងលាតពេញទទឹង (stacked) ។
* នៅលើអេក្រង់មធ្យម (\`md\`) ជួរឈរទី 1 និងទី 2 នឹងមានទទឹងពាក់កណ្តាល (6/12) ហើយជួរឈរទី 3 នឹងលាតពេញទទឹង (12/12) ។
* នៅលើអេក្រង់ធំ (\`lg\`) ជួរឈរទាំងបីនឹងមានទទឹងមួយភាគបី (4/12) ។

> **គន្លឹះ:** តែងតែចាប់ផ្តើមជាមួយ \`container\` បន្ទាប់មក \`row\` ហើយបន្ទាប់មក \`col\` ។ នេះជាមូលដ្ឋានគ្រឹះនៃ Grid System ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Layout 2 ជួរឈរ Responsive</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីរបៀបដែលជួរឈរពីរនឹងលាតពេញទទឹងនៅលើអេក្រង់តូច ហើយប្តូរទៅជាពាក់កណ្តាលអេក្រង់នៅលើទំហំមធ្យម និងធំជាង។</p>
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6">
      <div class="p-3 border bg-info text-white text-center">
        ជួរឈរទី ១ (ពេញទំហំតូច, ពាក់កណ្តាលទំហំមធ្យម+)
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="p-3 border bg-success text-white text-center">
        ជួរឈរទី ២ (ពេញទំហំតូច, ពាក់កណ្តាលទំហំមធ្យម+)
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
    <title>Responsive Grid Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="p-3 border bg-info text-white text-center">
                    ជួរឈរទី ១ (ពេញទំហំតូច, ពាក់កណ្តាលទំហំមធ្យម+)
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="p-3 border bg-success text-white text-center">
                    ជួរឈរទី ២ (ពេញទំហំតូច, ពាក់កណ្តាលទំហំមធ្យម+)
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Bootstrap Grid System ផ្អែកលើប្រព័ន្ធប៉ុន្មានជួរឈរ?',
      options: ['6 ជួរឈរ', '9 ជួរឈរ', '12 ជួរឈរ', '16 ជួរឈរ'],
      correct: 2,
      explanation: 'Bootstrap Grid System គឺផ្អែកលើប្រព័ន្ធ 12 ជួរឈរ។'
    },
    {
      question: 'តើ Class មួយណាដែលកំណត់ទទឹងពេញ (full-width) សម្រាប់មាតិកា?',
      options: ['`container`', '`container-fluid`', '`row`', '`col`'],
      correct: 1,
      explanation: '`container-fluid` កំណត់ទទឹងពេញសម្រាប់មាតិកា។'
    },
    {
      question: 'តើ Class `col-md-4` មានន័យដូចម្តេច?',
      options: [
        'ជួរឈរនឹងមានទទឹង 4 ជួរឈរនៅគ្រប់ទំហំអេក្រង់',
        'ជួរឈរនឹងមានទទឹង 4 ជួរឈរនៅអេក្រង់ Medium (≥ 768px) និងធំជាង',
        'ជួរឈរនឹងមានទទឹង 4 ជួរឈរនៅអេក្រង់ Small (≥ 576px) និងធំជាង',
        'ជួរឈរនឹងមានទទឹង 4 ជួរឈរនៅអេក្រង់ Extra large (≥ 1200px) និងធំជាង'
      ],
      correct: 1,
      explanation: '`col-md-4` មានន័យថាជួរឈរនឹងមានទទឹង 4 ជួរឈរនៅអេក្រង់ Medium (≥ 768px) និងធំជាង។'
    },
    {
      question: 'តើ Element `col` ត្រូវតែដាក់នៅខាងក្នុង Element មួយណា?',
      options: ['`body`', '`html`', '`container`', '`row`'],
      correct: 3,
      explanation: 'Columns (`col`) ត្រូវតែដាក់នៅខាងក្នុង Rows (`row`) ។'
    },
    {
      question: 'តើ Breakpoint `lg` តំណាងឱ្យទំហំអេក្រង់អប្បបរមាប៉ុន្មាន?',
      options: ['≥ 576px', '≥ 768px', '≥ 992px', '≥ 1200px'],
      correct: 2,
      explanation: 'Breakpoint `lg` តំណាងឱ្យទំហំអេក្រង់អប្បបរមា 992px ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីបង្កើតជួរដេក (Row) នៅក្នុង Grid System?',
      options: ['`grid`', '`column`', '`row`', '`flex`'],
      correct: 2,
      explanation: 'Class `row` ត្រូវបានប្រើដើម្បីបង្កើតជួរដេកសម្រាប់ដាក់ Columns ។'
    },
    {
      question: 'តើ Class `col-sm` មានន័យដូចម្តេច?',
      options: [
        'ជួរឈរនឹងលាតពេញទទឹងនៅគ្រប់ទំហំអេក្រង់',
        'ជួរឈរនឹងមានទទឹងស្មើគ្នាសម្រាប់អេក្រង់ Small (≥ 576px) និងធំជាង',
        'ជួរឈរនឹងមានទទឹងស្មើគ្នាសម្រាប់អេក្រង់ Medium (≥ 768px) និងធំជាង',
        'ជួរឈរនឹងលាតពេញទទឹងតែលើអេក្រង់ Extra Small ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: '`col-sm` កំណត់ថាជួរឈរនឹងមានទទឹងស្មើគ្នាសម្រាប់អេក្រង់ Small (≥ 576px) និងធំជាង។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការប្រើប្រាស់ Bootstrap Grid System?',
      options: [
        'ធ្វើឱ្យគេហទំព័រផ្ទុកយឺត',
        'ធ្វើឱ្យ Code កាន់តែស្មុគស្មាញ',
        'ជួយបង្កើត Responsive Layouts យ៉ាងងាយស្រួល',
        'បងា្ករការប្រើប្រាស់ JavaScript'
      ],
      correct: 2,
      explanation: 'អត្ថប្រយោជន៍ចម្បងគឺជួយបង្កើត Responsive Layouts យ៉ាងងាយស្រួលដោយប្រើប្រព័ន្ធជួរឈរ។'
    },
    {
      question: 'តើ Class `col-12` នឹងធ្វើអ្វីនៅលើអេក្រង់ទំហំតូច (Extra Small)?',
      options: [
        'វានឹងលាក់ជួរឈរ',
        'វានឹងធ្វើឱ្យជួរឈរមានទទឹង 12 ជួរឈរ (ពេញទទឹង)',
        'វានឹងបែងចែកជួរឈរជា 12 ជួរឈរតូចៗ',
        'វានឹងធ្វើឱ្យជួរឈរមានទទឹងពាក់កណ្តាល'
      ],
      correct: 1,
      explanation: '`col-12` នឹងធ្វើឱ្យជួរឈរមានទទឹងពេញ (12 ជួរឈរ) នៅលើអេក្រង់ Extra Small និងទំហំផ្សេងទៀត លុះត្រាតែមាន Breakpoint ផ្សេងទៀតកំណត់វាឡើងវិញ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Layout ជួរឈរ Responsive

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN**។

បន្ទាប់មក បង្កើត Layout មួយដែលមាន **3 ជួរឈរ** ដែលមានលក្ខណៈដូចខាងក្រោម៖

1.  ជួរឈរទាំងបីគួរតែស្ថិតនៅក្នុង \`container\` មួយ។
2.  នៅលើ **អេក្រង់ Extra Small (ទូរស័ព្ទ)** ជួរឈរនីមួយៗគួរតែ **លាតពេញទទឹង (stacked)** ពោលគឺប្រើ Class \`col-12\`។
3.  នៅលើ **អេក្រង់ Medium (Tablet)** និងទំហំធំជាង ជួរឈរទាំងបីគួរតែបង្ហាញជា **3 ជួរឈរជិតគ្នា (side-by-side)** ដោយបែងចែកទទឹងស្មើៗគ្នា។ គណនាចំនួនជួរឈរដែលត្រូវការសម្រាប់ទំហំអេក្រង់នេះ (ឧទាហរណ៍ 12 / 3 = 4) ហើយប្រើ Class ត្រឹមត្រូវ (ឧទាហរណ៍ \`col-md-4\`)។

**ចំណាំ:** អ្នកអាចបន្ថែម Style CSS តិចតួចដើម្បីមើលព្រំដែន (border) និងផ្ទៃខាងក្រោយ (background) នៃជួរឈរដើម្បីឱ្យងាយស្រួលមើលឃើញ Layout ។
`,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Grid Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <style>
        /* Optional: Add some styling for visibility */
        .col-12 > div, .col-md-4 > div { /* Apply to direct child div inside columns */
            background-color: #e0f7fa; /* Light cyan */
            border: 1px solid #00bcd4; /* Cyan border */
            padding: 20px;
            text-align: center;
            margin-bottom: 10px; /* Space between stacked columns on small screens */
        }
        /* Remove bottom margin for the last column in a row on medium+ screens */
        @media (min-width: 768px) {
            .col-md-4 > div {
                margin-bottom: 0;
            }
        }
    </style>
</head>
<body>

    <div class="container mt-5">
        <h1>ការអនុវត្តន៍ Bootstrap Grid System</h1>
        <div class="row">
            <div class="col-12 col-md-4">
                <div>ជួរឈរទី ១</div>
            </div>
            <div class="col-12 col-md-4">
                <div>ជួរឈរទី ២</div>
            </div>
            <div class="col-12 col-md-4">
                <div>ជួរឈរទី ៣</div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>
`
  }
};

export default BootstrapLesson1_3Content;