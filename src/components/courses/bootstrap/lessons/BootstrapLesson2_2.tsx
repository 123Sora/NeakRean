// src/components/lessons/bootstrap/BootstrapLesson2_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson2_2Content: LessonContent = {
  title: 'Navigation Bar (Navbar)',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Navbar',
    'របៀបបង្កើត Basic Navbar',
    'របៀបបន្ថែម Links, Brand, និង Form ទៅក្នុង Navbar',
    'របៀបធ្វើឱ្យ Navbar Responsive សម្រាប់ទំហំអេក្រង់ផ្សេងៗគ្នា'
  ],
  content: `
# Navigation Bar (Navbar) 🧭

---

Navigation Bar (Navbar) គឺជា Component ដ៏សំខាន់មួយសម្រាប់គេហទំព័រ ដែលផ្តល់នូវ Navigation Links សម្រាប់អ្នកប្រើប្រាស់។ Bootstrap Navbars គឺ Responsive តាមលំនាំដើម និងអាចប្ដូរតាមបំណងបានយ៉ាងងាយស្រួល។

---

## 1. Basic Navbar Structure 🏗️

Navbar ត្រូវបានបង្កើតឡើងដោយប្រើ Class \`navbar\` និង Class \`navbar-expand-*\` សម្រាប់កំណត់ថា Navbar គួរតែ Expand នៅទំហំអេក្រង់ណា។

* \`navbar\`: Class មូលដ្ឋានសម្រាប់ Navbar ។
* \`navbar-expand-lg\`: កំណត់ថា Navbar នឹង Expand (បង្ហាញ Links ទាំងអស់) នៅលើអេក្រង់ Large (lg) និងធំជាង។ នៅលើអេក្រង់តូចជាង វានឹងប្តូរទៅជា Toggle Button (Hamburger icon) ។
* \`navbar-light\` / \`navbar-dark\`: កំណត់ពណ៌អក្សរ និង Icon សម្រាប់ Navbar (សម្រាប់ផ្ទៃខាងក្រោយស្រាល ឬងងឹត) ។
* \`bg-*\`: Class សម្រាប់កំណត់ពណ៌ផ្ទៃខាងក្រោយរបស់ Navbar (ឧទាហរណ៍៖ \`bg-light\`, \`bg-dark\`, \`bg-primary\`) ។

\`\`\`html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    </div>
</nav>
\`\`\`

---

## 2. Navbar Brand (Logo/Site Name) 🏷️

អ្នកអាចបន្ថែម Brand (ឈ្មោះគេហទំព័រ ឬ Logo) ទៅក្នុង Navbar ដោយប្រើ Class \`navbar-brand\` ។

\`\`\`html
<a class="navbar-brand" href="#">NeakRean</a>
\`\`\`

---

## 3. Navigation Links 🔗

Links នៅក្នុង Navbar ត្រូវបានដាក់នៅក្នុង List (\`<ul>\`) ជាមួយនឹង Class \`navbar-nav\` ។ Links នីមួយៗប្រើ Class \`nav-item\` និង \`nav-link\` ។

\`\`\`html
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">ទំព័រដើម</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">មេរៀន</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">ទំនាក់ទំនង</a>
  </li>
</ul>
\`\`\`
* \`me-auto\`: (Margin End Auto) រុញ Links ទៅខាងឆ្វេង។

---

## 4. Toggler (Hamburger Icon) for Responsiveness 🍔

សម្រាប់អេក្រង់តូចៗ Navbar នឹងលាក់ Links ហើយបង្ហាញប៊ូតុង Toggler (Hamburger Icon) វិញ។ នៅពេលចុច Toggler នោះ Links នឹងលេចឡើង។

\`\`\`html
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  </div>
\`\`\`
* \`data-bs-toggle="collapse"\`, \`data-bs-target="#navbarNav"\`: ទាំងនេះគឺជា Attributes របស់ Bootstrap JavaScript ដែលគ្រប់គ្រងការបើក/បិទមាតិកា។
* \`id="navbarNav"\`: ID នេះត្រូវតែផ្គូផ្គងជាមួយ \`data-bs-target\` របស់ Toggler ។

---

## 5. Forms in Navbar 📝

អ្នកអាចបញ្ចូល Forms (ដូចជា Search Bar) ទៅក្នុង Navbar ដោយប្រើ Class \`d-flex\` លើ Form Tag ។

\`\`\`html
<form class="d-flex">
  <input class="form-control me-2" type="search" placeholder="ស្វែងរក" aria-label="Search">
  <button class="btn btn-outline-success" type="submit">ស្វែងរក</button>
</form>
\`\`\`

---

> **គន្លឹះ:** តែងតែប្រើ \`container-fluid\` ឬ \`container\` នៅក្នុង Navbar ដើម្បីកំណត់ទទឹងមាតិការបស់វា។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Basic Responsive Navbar</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពី Navbar ដែលមាន Brand, Links, និង Search Form ដែលនឹងប្តូរទៅជា Hamburger Icon នៅលើអេក្រង់តូច។</p>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">NeakRean</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNavbar">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ទំព័រដើម</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">មេរៀន</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ទំនាក់ទំនង</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="ស្វែងរក..." aria-label="Search">
        <button class="btn btn-outline-light" type="submit">ស្វែងរក</button>
      </form>
    </div>
  </div>
</nav>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Navbar Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">NeakRean</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNavbar">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">ទំព័រដើម</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">មេរៀន</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ទំនាក់ទំនង</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="ស្វែងរក..." aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">ស្វែងរក</button>
                </form>
            </div>
        </div>
    </nav>

    <div class="container mt-5">
        <h1>មាតិកាទំព័រ</h1>
        <p>នេះជាមាតិកានៃទំព័ររបស់អ្នក។</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Class មួយណាដែលជាមូលដ្ឋានសម្រាប់បង្កើត Navbar នៅក្នុង Bootstrap?',
      options: ['`navigation`', '`header`', '`navbar`', '`menu`'],
      correct: 2,
      explanation: 'Class `navbar` គឺជា Class មូលដ្ឋានសម្រាប់ Navbar ។'
    },
    {
      question: 'តើ Class `navbar-expand-lg` មានន័យដូចម្តេច?',
      options: [
        'Navbar នឹង Expand នៅលើអេក្រង់ Extra Small ប៉ុណ្ណោះ',
        'Navbar នឹង Expand នៅលើអេក្រង់ Small និងធំជាង',
        'Navbar នឹង Expand នៅលើអេក្រង់ Large (≥ 992px) និងធំជាង',
        'Navbar នឹងមិន Expand ទាល់តែសោះ'
      ],
      correct: 2,
      explanation: '`navbar-expand-lg` កំណត់ថា Navbar នឹង Expand (បង្ហាញ Links ទាំងអស់) នៅលើអេក្រង់ Large (≥ 992px) និងធំជាង។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់ឈ្មោះគេហទំព័រ ឬ Logo នៅក្នុង Navbar?',
      options: ['`navbar-title`', '`navbar-logo`', '`navbar-brand`', '`navbar-name`'],
      correct: 2,
      explanation: 'Class `navbar-brand` ត្រូវបានប្រើដើម្បីកំណត់ Brand (ឈ្មោះគេហទំព័រ ឬ Logo) ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ Navigation Links នីមួយៗនៅក្នុង Navbar?',
      options: ['`link-item`', '`nav-item`', '`menu-item`', '`list-item`'],
      correct: 1,
      explanation: 'Links នីមួយៗនៅក្នុង Navbar ប្រើ Class `nav-item` ។'
    },
    {
      question: 'តើ Class មួយណាដែលផ្តល់ពណ៌ផ្ទៃខាងក្រោយងងឹតដល់ Navbar?',
      options: ['`bg-light`', '`bg-primary`', '`bg-dark`', '`bg-info`'],
      correct: 2,
      explanation: 'Class `bg-dark` ផ្តល់ពណ៌ផ្ទៃខាងក្រោយងងឹតដល់ Navbar ។'
    },
    {
      question: 'តើ Toggler (Hamburger Icon) ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីបិទ Navbar ទាំងស្រុង',
        'ដើម្បីបើក/បិទ Navigation Links នៅលើអេក្រង់តូចៗ',
        'ដើម្បីផ្លាស់ប្តូរពណ៌ Navbar',
        'ដើម្បីបន្ថែម Form ទៅក្នុង Navbar'
      ],
      correct: 1,
      explanation: 'Toggler ត្រូវបានប្រើដើម្បីបើក/បិទ Navigation Links ដែលបានលាក់នៅលើអេក្រង់តូចៗ។'
    },
    {
      question: 'តើ Class `me-auto` នៅក្នុង `navbar-nav` ធ្វើអ្វី?',
      options: [
        'កំណត់ Margin ស្វ័យប្រវត្តិនៅខាងលើ',
        'កំណត់ Margin ស្វ័យប្រប្រវត្តិនៅខាងស្តាំ (Margin End Auto)',
        'កំណត់ Margin ស្វ័យប្រវត្តិនៅខាងឆ្វេង (Margin Start Auto)',
        'កំណត់ Margin ស្វ័យប្រវត្តិនៅខាងក្រោម'
      ],
      correct: 1,
      explanation: '`me-auto` (Margin End Auto) រុញ Links ទៅខាងឆ្វេង (ឬខាងដើម) នៃ Navbar ។'
    },
    {
      question: 'តើ Attributes មួយណាដែលភ្ជាប់ Toggler ទៅនឹងមាតិកា Navbar ដែលត្រូវ Collapse?',
      options: [
        '`data-target` និង `data-toggle`',
        '`data-bs-target` និង `data-bs-toggle`',
        '`href` និង `id`',
        '`link` និង `collapse`'
      ],
      correct: 1,
      explanation: '`data-bs-target` និង `data-bs-toggle` គឺជា Attributes របស់ Bootstrap JavaScript ដែលភ្ជាប់ Toggler ទៅនឹងមាតិកា Navbar ដែលត្រូវ Collapse ។'
    },
    {
      question: 'តើ Class `navbar-light` គួរប្រើជាមួយផ្ទៃខាងក្រោយ Navbar ប្រភេទណា?',
      options: [
        'ផ្ទៃខាងក្រោយងងឹត',
        'ផ្ទៃខាងក្រោយស្រាល',
        'ផ្ទៃខាងក្រោយថ្លា',
        'មិនសំខាន់ទេ'
      ],
      correct: 1,
      explanation: '`navbar-light` ត្រូវបានប្រើសម្រាប់ Navbar ដែលមានផ្ទៃខាងក្រោយស្រាល ដើម្បីឱ្យអក្សរ និង Icon មានពណ៌ងងឹតអាចមើលឃើញច្បាស់។'
    },
    {
      question: 'តើ Class `d-flex` ត្រូវបានប្រើសម្រាប់អ្វី នៅពេលបញ្ចូល Form ទៅក្នុង Navbar?',
      options: [
        'ដើម្បីលាក់ Form',
        'ដើម្បីធ្វើឱ្យ Form មានទទឹងពេញ',
        'ដើម្បីធ្វើឱ្យធាតុ Form រៀបចំជាជួរដេក (Flexbox)',
        'ដើម្បីប្តូរពណ៌ Form'
      ],
      correct: 2,
      explanation: '`d-flex` (display: flex) ត្រូវបានប្រើដើម្បីធ្វើឱ្យធាតុ Form រៀបចំជាជួរដេក (Flexbox) ។'
    },
    {
      question: 'តើ `aria-label` Attribute ត្រូវបានប្រើសម្រាប់អ្វីនៅក្នុង Toggler Button?',
      options: [
        'ដើម្បីកំណត់ ID របស់ Toggler',
        'ដើម្បីកំណត់ពណ៌របស់ Toggler',
        'ដើម្បីផ្តល់ស្លាកដែលអាចចូលប្រើបានសម្រាប់ Screen Readers',
        'ដើម្បីផ្លាស់ប្តូរទំហំ Toggler'
      ],
      correct: 2,
      explanation: '`aria-label` ផ្តល់ស្លាកដែលអាចចូលប្រើបានសម្រាប់ Screen Readers ដែលជួយដល់អ្នកប្រើប្រាស់ដែលមានពិការភាព។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីធ្វើឱ្យ Navigation Link សកម្ម (Active)?',
      options: ['`link-active`', '`is-active`', '`active`', '`current`'],
      correct: 2,
      explanation: 'Class `active` ត្រូវបានប្រើដើម្បីធ្វើឱ្យ Navigation Link សកម្ម។'
    },
    {
      question: 'តើ `container-fluid` ខុសពី `container` ដូចម្តេច?',
      options: [
        '`container-fluid` មានទទឹងថេរ ខណៈ `container` មានទទឹងពេញ',
        '`container-fluid` មានទទឹងពេញ ខណៈ `container` មានទទឹងថេរ',
        'ពួកវាដូចគ្នា',
        '`container-fluid` ប្រើសម្រាប់ Mobile ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: '`container-fluid` កំណត់ទទឹងពេញ (full-width) សម្រាប់មាតិកា ខណៈ `container` កំណត់ទទឹងថេរ (fixed-width) ។'
    },
    {
      question: 'តើ Tag HTML មួយណាដែលជាទូទៅត្រូវបានប្រើដើម្បីរុំព័ទ្ធ Navigation Links នៅក្នុង Navbar?',
      options: ['`<ol>`', '`<div>`', '`<ul>`', '`<section>`'],
      correct: 2,
      explanation: '`<ul>` (unordered list) គឺជា Tag HTML ទូទៅបំផុតដែលប្រើដើម្បីរុំព័ទ្ធ Navigation Links នៅក្នុង Navbar ។'
    },
    {
      question: 'តើ Class `navbar-toggler-icon` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីផ្លាស់ប្តូរពណ៌ Icon',
        'ដើម្បីបង្កើត Icon សម្រាប់ Toggler',
        'ដើម្បីលាក់ Icon',
        'ដើម្បីបន្ថែម Text ទៅ Icon'
      ],
      correct: 1,
      explanation: '`navbar-toggler-icon` ត្រូវបានប្រើដើម្បីបង្កើត Icon សម្រាប់ Toggler (ជាធម្មតាជា Hamburger Icon) ។'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ `data-bs-target` Attribute នៅក្នុង Toggler Button?',
      options: [
        'កំណត់ URL សម្រាប់ Link',
        'កំណត់ ID នៃ Element ដែលនឹងត្រូវ Collapse',
        'កំណត់ប្រភេទនៃ Toggler',
        'កំណត់ Text របស់ Toggler'
      ],
      correct: 1,
      explanation: '`data-bs-target` កំណត់ ID នៃ Element ដែលនឹងត្រូវ Collapse ឬ Expand នៅពេល Toggler ត្រូវបានចុច។'
    },
    {
      question: 'តើ Class `mb-2 mb-lg-0` នៅក្នុង `navbar-nav` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Margin ខាងក្រោម 2 units នៅគ្រប់ទំហំអេក្រង់',
        'បន្ថែម Margin ខាងក្រោម 2 units នៅលើអេក្រង់តូច និងលុប Margin នៅលើអេក្រង់ Large',
        'លុប Margin ខាងក្រោម 2 units នៅលើអេក្រង់ Large',
        'បន្ថែម Margin ខាងក្រោម 0 units នៅគ្រប់ទំហំអេក្រង់'
      ],
      correct: 1,
      explanation: '`mb-2` ផ្តល់ Margin ខាងក្រោម 2 units នៅលើអេក្រង់តូច និងធំជាង រហូតដល់ `mb-lg-0` លុប Margin ខាងក្រោមនៅអេក្រង់ Large (lg) និងធំជាង។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Navigation Bar (Navbar)

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN**។

នៅក្នុងឯកសារនោះ សូមបង្កើត **Navbar** មួយដែលមានលក្ខណៈដូចខាងក្រោម៖

1.  មាន **Brand** ជា "My Website" ។
2.  មាន **Links 3** គឺ "Home", "About", "Services" ។
3.  មាន **Search Form** នៅខាងស្តាំដៃនៃ Navbar ។
4.  **Navbar** គួរតែមាន **ផ្ទៃខាងក្រោយពណ៌ខៀវ (Primary)** និង **អក្សរពណ៌ស (Dark)** ដើម្បីឱ្យមើលឃើញច្បាស់។
5.  **Navbar** គួរតែ **Responsive** ដោយបង្ហាញ **Hamburger Icon** នៅលើអេក្រង់ **តូច (sm)** និងធំជាង (ពោលគឺ Links នឹងត្រូវបានលាក់នៅទំហំអេក្រង់តូចជាង \`sm\` និងបង្ហាញនៅទំហំ \`sm\` និងធំជាង)។

**ចំណាំ:** ត្រូវប្រាកដថាបានដាក់ \`container-fluid\` ឱ្យបានត្រឹមត្រូវនៅក្នុង \`nav\` របស់អ្នក។
`,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Navbar Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Website</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div class="container mt-5">
        <h1>មាតិកាទំព័រ</h1>
        <p>នេះជាមាតិកានៃទំព័ររបស់អ្នកបន្ទាប់ពី Navbar ។</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>
`
  }
};

export default BootstrapLesson2_2Content;