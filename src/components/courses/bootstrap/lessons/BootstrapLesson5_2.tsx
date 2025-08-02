// src/components/lessons/bootstrap/BootstrapLesson5_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson5_2Content: LessonContent = {
  title: 'Scrollspy',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Scrollspy',
    'របៀបអនុវត្ត Scrollspy ទៅលើ Navigation Bar',
    'របៀបអនុវត្ត Scrollspy ទៅលើ List Group',
    'របៀបកំណត់ Offset សម្រាប់ Scrollspy',
    'របៀបប្រើប្រាស់ Scrollspy ជាមួយ Target Element'
  ],
  content: `
# Scrollspy 📜

---

**Scrollspy** គឺជា Component របស់ Bootstrap ដែលធ្វើបច្ចុប្បន្នភាព **Navigation Component** ឬ **List Group** ដោយស្វ័យប្រវត្តិ ដើម្បីបង្ហាញពី Links ដែលកំពុងសកម្ម (Active) ដោយផ្អែកលើទីតាំង scroll របស់អ្នកប្រើប្រាស់។

---

## 1. Basic Scrollspy with Navbar 🏗️

ដើម្បីអនុវត្ត Scrollspy ទៅលើ Navbar អ្នកត្រូវបន្ថែម Attributes \`data-bs-spy="scroll"\`, \`data-bs-target="#navbar-example"\` (ID របស់ Navbar) និង \`data-bs-root-margin="0px 0px -40%"\` ទៅលើ \`<body>\` Element ។ ផ្នែកនៃមាតិកាដែលអ្នកចង់តាមដានត្រូវតែមាន ID តែមួយគត់។

\`\`\`html
<body data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0">
  <nav id="navbar-example" class="navbar navbar-light bg-light px-3">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#section1">ផ្នែកទី ១</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section2">ផ្នែកទី ២</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section3">ផ្នែកទី ៣</a>
      </li>
    </ul>
  </nav>

  <div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0" tabindex="0" style="height: 200px; overflow-y: scroll;">
    <h4 id="section1">ផ្នែកទី ១</h4>
    <p>មាតិកាសម្រាប់ផ្នែកទី ១...</p>
    <h4 id="section2">ផ្នែកទី ២</h4>
    <p>មាតិកាសម្រាប់ផ្នែកទី ២...</p>
    <h4 id="section3">ផ្នែកទី ៣</h4>
    <p>មាតិកាសម្រាប់ផ្នែកទី ៣...</p>
  </div>
</body>
\`\`\`
* \`data-bs-spy="scroll"\`: បើកដំណើរការ Scrollspy ។
* \`data-bs-target="#navbar-example"\`: កំណត់ Navbar ដែល Scrollspy នឹងធ្វើបច្ចុប្បន្នភាព។
* \`data-bs-offset="0"\`: កំណត់ Offset (ចម្ងាយពីកំពូល) មុនពេល Links ក្លាយជា Active ។
* \`nav-pills\`: រចនាម៉ូត Navigation Links ជា Pills ។
* \`tabindex="0"\`: ធ្វើឱ្យ Element អាច Focus បាន (សម្រាប់ Accessibility) ។
* \`style="height: 200px; overflow-y: scroll;"\`: កំណត់កម្ពស់ថេរ និងធ្វើឱ្យមាតិកាអាច scroll បាន។

---

## 2. Scrollspy with List Group 📋

អ្នកក៏អាចប្រើ Scrollspy ជាមួយ **List Group** ផងដែរ។

\`\`\`html
<div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group">
      <a class="list-group-item list-group-item-action" href="#list-item-1">ធាតុទី ១</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">ធាតុទី ២</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">ធាតុទី ៣</a>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0" style="height: 300px; overflow-y: scroll;">
      <h4 id="list-item-1">ធាតុទី ១</h4>
      <p>មាតិកាសម្រាប់ធាតុទី ១...</p>
      <h4 id="list-item-2">ធាតុទី ២</h4>
      <p>មាតិកាសម្រាប់ធាតុទី ២...</p>
      <h4 id="list-item-3">ធាតុទី ៣</h4>
      <p>មាតិកាសម្រាប់ធាតុទី ៣...</p>
    </div>
  </div>
</div>
\`\`\`
* \`list-group\`, \`list-group-item\`, \`list-group-item-action\`: Classes សម្រាប់ List Group ។
* \`scrollspy-example\`: Class ផ្ទាល់ខ្លួនសម្រាប់កំណត់រចនាបទ scroll ។

---

## 3. Offset (ចម្ងាយ) 📏

Attributes \`data-bs-offset\` អនុញ្ញាតឱ្យអ្នកកំណត់ចំនួន Pixels ពីកំពូលនៃ Viewport ដែល Links របស់អ្នកនឹងក្លាយជា Active ។ នេះមានប្រយោជន៍ជាពិសេសនៅពេលអ្នកមាន Navbar ថេរ (Fixed Navbar) ។

\`\`\`html
<body data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="70">
  </body>
\`\`\`
* \`data-bs-offset="70"\`: កំណត់ Offset 70px ។

---

## 4. Scrollable Area (តំបន់ដែលអាច scroll បាន) ↕️

ប្រសិនបើអ្នកចង់ឱ្យ Scrollspy តាមដានតែផ្នែកជាក់លាក់មួយនៃទំព័រ (មិនមែន \`<body>\` ទាំងមូលទេ) អ្នកអាចបន្ថែម Attributes Scrollspy ទៅលើ Element នោះផ្ទាល់ ហើយកំណត់ \`overflow-y: scroll;\` ។

\`\`\`html
<div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" tabindex="0" style="height: 300px; overflow-y: scroll;">
  </div>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Scrollspy ជាមួយ Fixed Navbar និង Content Sections</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីរបៀបដែល Scrollspy ធ្វើបច្ចុប្បន្នភាព Navigation Links នៅក្នុង Fixed Navbar នៅពេលអ្នក scroll តាមផ្នែកផ្សេងៗនៃមាតិកា។</p>
<style>
  body {
    position: relative; /* Required for scrollspy to work correctly */
  }
  .fixed-navbar {
    position: sticky;
    top: 0;
    z-index: 1020; /* Ensure it's above other content */
  }
  .content-section {
    padding-top: 70px; /* Adjust based on navbar height + offset */
    margin-top: -70px; /* Counteract padding-top to keep content aligned */
    min-height: 500px; /* Ensure sections are tall enough to scroll */
  }
</style>

<body data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="60">

  <nav id="mainNav" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">គេហទំព័ររបស់ខ្ញុំ</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#intro">សេចក្តីផ្តើម</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">អំពីយើង</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">សេវាកម្ម</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">ទំនាក់ទំនង</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-5">
    <section id="intro" class="content-section bg-light p-5 border-bottom">
      <h2>សេចក្តីផ្តើម</h2>
      <p>សូមស្វាគមន៍មកកាន់គេហទំព័ររបស់យើង! យើងផ្តល់ជូននូវដំណោះស្រាយបច្ចេកវិទ្យាដ៏ទំនើបបំផុត។</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </section>

    <section id="about" class="content-section bg-white p-5 border-bottom">
      <h2>អំពីយើង</h2>
      <p>យើងជាក្រុមអ្នកជំនាញដែលមានបទពិសោធន៍ជាច្រើនឆ្នាំក្នុងការអភិវឌ្ឍន៍គេហទំព័រ និងកម្មវិធីទូរស័ព្ទ។</p>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    </section>

    <section id="services" class="content-section bg-light p-5 border-bottom">
      <h2>សេវាកម្ម</h2>
      <p>យើងផ្តល់ជូននូវសេវាកម្មជាច្រើនដូចជា ការរចនាគេហទំព័រ ការអភិវឌ្ឍន៍កម្មវិធី និងការប្រឹក្សាយោបល់បច្ចេកវិទ្យា។</p>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
      <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
    </section>

    <section id="contact" class="content-section bg-white p-5">
      <h2>ទំនាក់ទំនង</h2>
      <p>ប្រសិនបើអ្នកមានសំណួរ ឬត្រូវការជំនួយ សូមកុំស្ទាក់ស្ទើរក្នុងការទាក់ទងមកយើងខ្ញុំ។</p>
      <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    </section>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Attributes មួយណាដែលបើកដំណើរការ Scrollspy?',
      options: ['`data-spy="scroll"`', '`data-bs-spy="scroll"`', '`data-scrollspy="true"`', '`data-active-scroll="true"`'],
      correct: 1,
      explanation: 'Attributes `data-bs-spy="scroll"` បើកដំណើរការ Scrollspy ។'
    },
    {
      question: 'តើ Attributes មួយណាដែលកំណត់ Navbar ដែល Scrollspy នឹងធ្វើបច្ចុប្បន្នភាព?',
      options: ['`data-bs-target-nav`', '`data-bs-navbar`', '`data-bs-target`', '`data-nav-id`'],
      correct: 2,
      explanation: 'Attributes `data-bs-target` កំណត់ Navbar ដែល Scrollspy នឹងធ្វើបច្ចុប្បន្នភាព (ដោយប្រើ ID របស់ Navbar) ។'
    },
    {
      question: 'តើ Attributes `data-bs-offset` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ល្បឿន scroll ',
        'ដើម្បីកំណត់ចម្ងាយពីកំពូលមុនពេល Links ក្លាយជា Active',
        'ដើម្បីកំណត់ទំហំ Font របស់ Links',
        'ដើម្បីលាក់ Links'
      ],
      correct: 1,
      explanation: 'Attributes `data-bs-offset` កំណត់ចំនួន Pixels ពីកំពូលនៃ Viewport ដែល Links របស់អ្នកនឹងក្លាយជា Active ។'
    },
    {
      question: 'តើ Scrollspy អាចប្រើជាមួយ Component ណាខ្លះ?',
      options: [
        'តែ Navbar ប៉ុណ្ណោះ',
        'តែ List Group ប៉ុណ្ណោះ',
        'Navbar និង List Group',
        'Buttons និង Forms'
      ],
      correct: 2,
      explanation: 'Scrollspy អាចប្រើជាមួយ Navbar និង List Group ។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់ឱ្យ Scrollspy តាមដានតែផ្នែកជាក់លាក់មួយនៃទំព័រ តើអ្នកគួរធ្វើអ្វី?',
      options: [
        'បន្ថែម `data-bs-spy` ទៅ `<body>`',
        'បន្ថែម `data-bs-spy` ទៅ Element នោះផ្ទាល់',
        'ប្រើ JavaScript ផ្ទាល់ខ្លួន',
        'មិនអាចធ្វើបានទេ'
      ],
      correct: 1,
      explanation: 'ប្រសិនបើអ្នកចង់ឱ្យ Scrollspy តាមដានតែផ្នែកជាក់លាក់មួយនៃទំព័រ អ្នកអាចបន្ថែម Attributes Scrollspy ទៅលើ Element នោះផ្ទាល់ ហើយកំណត់ `overflow-y: scroll;` ។'
    },
    {
      question: 'តើ `position: relative;` នៅលើ `<body>` មានសារៈសំខាន់សម្រាប់ Scrollspy ដូចម្តេច?',
      options: [
        'ដើម្បីធ្វើឱ្យទំព័រ Responsive',
        'ដើម្បីឱ្យ Scrollspy ដំណើរការបានត្រឹមត្រូវ',
        'ដើម្បីកំណត់ពណ៌ផ្ទៃខាងក្រោយ',
        'ដើម្បីធ្វើឱ្យ Font ធំ'
      ],
      correct: 1,
      explanation: '`position: relative;` នៅលើ `<body>` គឺចាំបាច់សម្រាប់ Scrollspy ដើម្បីកំណត់ទីតាំង scroll បានត្រឹមត្រូវ។'
    },
    {
      question: 'តើ Class `nav-pills` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីរចនាម៉ូត Links ជា Buttons',
        'ដើម្បីរចនាម៉ូត Links ជា Pills (រាងមូល)',
        'ដើម្បីលាក់ Links',
        'ដើម្បីបន្ថែម Icon ទៅ Links'
      ],
      correct: 1,
      explanation: 'Class `nav-pills` រចនាម៉ូត Navigation Links ជា Pills (រាងមូល) ។'
    },
    {
      question: 'តើ `tabindex="0"` Attribute ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីនៅក្នុង Scrollspy?',
      options: [
        'ដើម្បីលាក់ Element',
        'ដើម្បីធ្វើឱ្យ Element អាច Focus បាន (សម្រាប់ Accessibility)',
        'ដើម្បីកំណត់លំដាប់ Tab',
        'ដើម្បីផ្លាស់ប្តូរទំហំ Element'
      ],
      correct: 1,
      explanation: '`tabindex="0"` ធ្វើឱ្យ Element អាច Focus បានដោយ Keyboard (សម្រាប់ Accessibility) ។'
    },
    {
      question: 'តើ Scrollspy ធ្វើបច្ចុប្បន្នភាព Links ដោយផ្អែកលើអ្វី?',
      options: [
        'ការចុច Mouse',
        'ការដាក់ Mouse ពីលើ',
        'ទីតាំង scroll របស់អ្នកប្រើប្រាស់',
        'ពេលវេលា'
      ],
      correct: 2,
      explanation: 'Scrollspy ធ្វើបច្ចុប្បន្នភាព Links ដោយផ្អែកលើទីតាំង scroll របស់អ្នកប្រើប្រាស់។'
    },
    {
      question: 'តើ `data-bs-root-margin` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'កំណត់ Margin ជុំវិញ Root Element',
        'កំណត់ Margin សម្រាប់ Intersection Observer API (សម្រាប់ Scrollspy)',
        'កំណត់ Margin សម្រាប់ Navbar',
        'កំណត់ Margin សម្រាប់ Content Sections'
      ],
      correct: 1,
      explanation: '`data-bs-root-margin` ត្រូវបានប្រើដើម្បីកំណត់ Margin សម្រាប់ Intersection Observer API ដែល Scrollspy ប្រើដើម្បីតាមដានទីតាំង scroll ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើតទំព័រ Scrollspy ជាមួយ Fixed Navbar

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN** ។
នៅក្នុងឯកសារនោះ សូមបង្កើតទំព័រមួយដែលមាន **Fixed Navbar** នៅខាងលើ និង **Content Sections** ចំនួន 3 (ឧទាហរណ៍៖ "Home", "Features", "Pricing") ។

1.  **Navbar** គួរតែមាន Links ទៅកាន់ Content Sections ទាំង 3 ។
2.  អនុវត្ត **Scrollspy** ដើម្បីធ្វើបច្ចុប្បន្នភាព Links នៅក្នុង Navbar នៅពេលដែលអ្នក scroll តាមផ្នែកនីមួយៗនៃមាតិកា។
3.  កំណត់ **Offset** ឱ្យបានត្រឹមត្រូវដើម្បីឱ្យ Links ក្លាយជា Active នៅពេលដែលផ្នែកមាតិកាអាចមើលឃើញយ៉ាងពេញលេញ។ ត្រូវប្រាកដថាផ្នែកនីមួយៗមានកម្ពស់គ្រប់គ្រាន់ដើម្បី scroll ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Scrollspy Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <style>
        body {
            position: relative; /* Required for scrollspy to work correctly */
        }
        .fixed-navbar {
            position: sticky;
            top: 0;
            z-index: 1020;
        }
        .content-section {
            padding-top: 80px; /* Adjust based on navbar height + offset */
            margin-top: -80px; /* Counteract padding-top to keep content aligned */
            min-height: 700px; /* Ensure sections are tall enough to scroll */
        }
    </style>
</head>
<body data-bs-spy="scroll" data-bs-target="#labNavbar" data-bs-offset="80">

    <nav id="labNavbar" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">មេរៀន</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#labNavCollapse" aria-controls="labNavCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="labNavCollapse">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#labHome">ទំព័រដើម</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#labFeatures">លក្ខណៈពិសេស</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#labPricing">តម្លៃ</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container mt-5">
        <section id="labHome" class="content-section bg-light p-5 border-bottom">
            <h2>ទំព័រដើម</h2>
            <p>សូមស្វាគមន៍មកកាន់ទំព័រដើមរបស់យើង។ ស្វែងយល់ពីអ្វីដែលយើងផ្តល់ជូន។</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </section>

        <section id="labFeatures" class="content-section bg-white p-5 border-bottom">
            <h2>លក្ខណៈពិសេស</h2>
            <p>យើងមានលក្ខណៈពិសេសជាច្រើនដែលនឹងជួយអ្នកឱ្យសម្រេចបានគោលដៅរបស់អ្នក។</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </section>

        <section id="labPricing" class="content-section bg-light p-5">
            <h2>តម្លៃ</h2>
            <p>យើងផ្តល់ជូននូវគម្រោងតម្លៃដែលអាចបត់បែនបានដើម្បីបំពេញតម្រូវការរបស់អ្នក។</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
        </section>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>`
  }
};

export default BootstrapLesson5_2Content;