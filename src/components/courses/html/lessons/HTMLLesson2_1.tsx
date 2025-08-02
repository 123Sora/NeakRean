// src/components/lessons/Lesson2_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const Lesson2_1: LessonContent = {
  title: 'HTML Elements និង Attributes',
  objectives: [
    'យល់ដឹងអំពីរចនាសម្ព័ន្ធរបស់ HTML Elements',
    'ស្គាល់ការប្រើប្រាស់ Attributes',
    'អាចសរសេរ Nested Elements បានត្រឹមត្រូវ',
    'ដឹងពីភាពខុសគ្នារវាង Container និង Empty Elements'
  ],
  content: `
# HTML Elements និង Attributes 🧱

---

## 1. អ្វីទៅជា HTML Element? 🏷️

HTML Element គឺជា **building block មូលដ្ឋាន** របស់គេហទំព័រ។ វាមានរចនាសម្ព័ន្ធដូចខាងក្រោម:

\`\`\`html
<tagname attribute="value">Content</tagname>
\`\`\`

### ផ្នែកសំខាន់នៃ Element:
1.  **Opening Tag (Tag បើក)**: \`<tagname>\` (ឧទាហរណ៍: \`<h1>\`, \`<p>\`, \`<a>\`)
2.  **Attributes (លក្ខណៈសម្បត្តិ)**: \`attribute="value"\` (ផ្តល់ព័ត៌មានបន្ថែម)
3.  **Content (មាតិកា)**: អ្វីដែលនៅចន្លោះ opening tag និង closing tag ។
4.  **Closing Tag (Tag បិទ)**: \`</tagname>\` (ឧទាហរណ៍: \`</h1>\`, \`</p>\`, \`</a>\`)

### ឧទាហរណ៍នៃការប្រើប្រាស់ Elements:
\`\`\`html
<h1>នេះជាចំណងជើងធំ</h1>
<p>នេះជាកថាខណ្ឌសាមញ្ញមួយ។</p>
<a href="https://google.com">តំណភ្ជាប់ទៅកាន់ Google</a>
\`\`\`

---

## 2. អ្វីទៅជា HTML Attributes? ⚙️

Attributes គឺជា **ព័ត៌មានបន្ថែម** ដែលផ្តល់ជូន HTML elements ដើម្បីកំណត់លក្ខណៈ ឬឥរិយាបថរបស់វា។

### លក្ខណៈសម្បត្តិសំខាន់ៗរបស់ Attributes:
* ត្រូវសរសេរនៅក្នុង **opening tag** របស់ element នោះ។
* មានទម្រង់ជា **\`name="value"\`** (ឧទាហរណ៍: \`src="image.jpg"\`, \`alt="Description"\`) ។
* **Value (តម្លៃ)** របស់ attribute ត្រូវដាក់ក្នុង quotes (អនុសាសន៍គឺប្រើ **double quotes \`"\`** ) ។
* Element មួយ **អាចមាន Attributes ច្រើន** ។

### Attributes ទូទៅដែលអ្នកនឹងប្រើប្រាស់ញឹកញាប់:

#### 2.1. Global Attributes (Attributes ដែលអាចប្រើបានជាមួយ Element ណាក៏បាន)
* **\`id\`**: កំណត់ **អត្តសញ្ញាណតែមួយគត់ (unique identifier)** សម្រាប់ element មួយនៅក្នុងទំព័រ។ ប្រើសម្រាប់ CSS, JavaScript ឬតំណភ្ជាប់ផ្ទៃក្នុង។
* **\`class\`**: កំណត់ **ក្រុម styling** សម្រាប់ elements មួយ ឬច្រើន។ ប្រើសម្រាប់ CSS ។
* **\`style\`**: អនុនុញ្ញាតឱ្យអ្នកសរសេរ **CSS ផ្ទាល់ (Inline CSS)** ទៅលើ element មួយ។ (មិនត្រូវបានណែនាំសម្រាប់ការរចនាធំៗទេ) ។
* **\`title\`**: ផ្តល់ **ព័ត៌មានបន្ថែម** អំពី element ។ ជាទូទៅវាបង្ហាញជា "tooltip" នៅពេលអ្នកប្រើប្រាស់ដាក់ Mouse ពីលើ element នោះ។

#### 2.2. Specific Attributes (Attributes សម្រាប់ Element ជាក់លាក់)
* **\`href\`**: សម្រាប់ Tag \`<a>\` (Anchor Tag) ដើម្បីបញ្ជាក់ **URL គោលដៅ** នៃតំណភ្ជាប់។
* **\`src\`**: សម្រាប់ Tag \`<img>\` (Image Tag) ដើម្បីបញ្ជាក់ **ទីតាំង (URL)** របស់រូបភាព។
* **\`alt\`**: សម្រាប់ Tag \`<img>\` ដើម្បីផ្តល់ **អត្ថបទជំនួស (alternative text)** សម្រាប់រូបភាព។ វាសំខាន់សម្រាប់ Accessibility (សម្រាប់ Screen Readers) និងនៅពេលរូបភាពមិនអាចបង្ហាញបាន។
* **\`width\` / \`height\`**: សម្រាប់ \`<img>\` ដើម្បីកំណត់ **ទំហំ** ទទឹង និងបណ្តោយរបស់រូបភាព។
* **\`type\`**: សម្រាប់ Tag \`<input>\` ដើម្បីកំណត់ **ប្រភេទ** នៃប្រអប់បញ្ចូល (ឧទាហរណ៍: \`text\`, \`email\`, \`password\`, \`submit\`)។

### ឧទាហរណ៍នៃការប្រើប្រាស់ Attributes:
\`\`\`html
<img src="photo.jpg" alt="រូបភាពផ្ទះដ៏ស្រស់ស្អាត" width="300" height="200" title="ផ្ទះរបស់ខ្ញុំ">
<a href="https://facebook.com" target="_blank" title="ទៅកាន់ Facebook">Facebook Profile</a>
<p id="first-paragraph" class="intro-text" style="color: blue;">កថាខណ្ឌណែនាំពណ៌ខៀវ</p>
<input type="email" placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក" required>
\`\`\`

---

## 3. Nested Elements (Elements ក្នុង Elements) 🧩

HTML អនុញ្ញាតឱ្យដាក់ elements នៅក្នុង elements ផ្សេងទៀត។ នេះត្រូវបានគេហៅថា "nesting" ។ វាជារឿងធម្មតាណាស់ក្នុងការបង្កើតរចនាសម្ព័ន្ធស្មុគស្មាញនៃគេហទំព័រ។

### ឧទាហរណ៍នៃ Nested Elements:
\`\`\`html
<div class="card">
    <h2>ចំណងជើងកាត</h2>
    <p>នេះជា <strong>អក្សរដិត</strong> និង <em>អក្សរទ្រេត</em> នៅក្នុងកថាខណ្ឌ។</p>
    <ul>
        <li>ធាតុបញ្ជីទី ១</li>
        <li>ធាតុបញ្ជីទី ២ ដែលមាន <a href="#">តំណភ្ជាប់</a></li>
    </ul>
</div>
\`\`\`

### ច្បាប់សំខាន់សម្រាប់ Nesting ត្រឹមត្រូវ:
1.  **Element ខាងក្នុងត្រូវបិទមុន Element ខាងក្រៅ**: នេះជាកំហុសទូទៅបំផុត។
2.  **រក្សា Indentation**: ប្រើ Tab ឬ Space ដើម្បីរៀបចំកូដឱ្យមានគម្លាតត្រឹមត្រូវ។ នេះធ្វើឱ្យកូដងាយស្រួលអាននិងយល់។
3.  **មិនអាច Nest Elements ជាក់លាក់មួយចំនួន**: ឧទាហរណ៍ អ្នកមិនអាចដាក់ \`<div>\` នៅក្នុង \`<p>\` បានទេ។

### ឧទាហរណ៍ត្រឹមត្រូវនៃ Nesting:
\`\`\`html
<p>នេះជា <strong>អក្សរដិត</strong> ដែលបិទត្រឹមត្រូវ។</p>
\`\`\`

### ឧទាហរណ៍មិនត្រឹមត្រូវនៃ Nesting (Overlapping Tags):
\`\`\`html
<p>នេះជា <strong>អក្សរដិត</p> មិនត្រឹមត្រូវ</strong> 
\`\`\`
> **ចំណាំ:** កូដខាងលើមិនត្រឹមត្រូវទេព្រោះ Tag \`<strong>\` មិនបានបិទមុន Tag \`<p>\` ។

---

## 4. Empty Elements (Self-closing Elements) 💨

Empty elements គឺជា elements ដែល **មិនមាន content** នៅចន្លោះ opening tag និង closing tag របស់វា ហើយដូច្នេះ **មិនត្រូវការ closing tag** ទេ។

### Elements ទូទៅដែលជា Empty Elements:
* \`<br>\`: បង្កើត **បន្ទាត់ថ្មី (Line Break)** ។
* \`<hr>\`: បង្កើត **បន្ទាត់បែងចែក (Horizontal Rule)** ដែលជាបន្ទាត់ផ្ដេកសម្រាប់បែងចែកមាតិកា។
* \`<img>\`: សម្រាប់ **បង្ហាញរូបភាព** ។
* \`<input>\`: សម្រាប់ **ប្រអប់បញ្ចូលទិន្នន័យ** នៅក្នុង Form ។
* \`<meta>\`: សម្រាប់ **metadata** នៅក្នុង \`<head>\` ។
* \`<link>\`: សម្រាប់ **ភ្ជាប់ឯកសារខាងក្រៅ** (ដូចជា CSS) ។

### ឧទាហរណ៍នៃការប្រើប្រាស់ Empty Elements:
\`\`\`html
<p>កថាខណ្ឌទី ១</p>
<br> <p>កថាខណ្ឌទី ២</p>
<hr> <img src="avatar.png" alt="រូបភាព Profile">
<input type="text" placeholder="ឈ្មោះ">
\`\`\`

### កំណត់ចំណាំអំពី Empty Elements:
នៅក្នុង XHTML ឬ XML style, empty elements ត្រូវបានសរសេរដោយスラッシュនៅចុងបញ្ចប់ ដូចជា \`<br />\` ឬ \`<img src="x.jpg" />\` ។ ប៉ុន្តែនៅក្នុង **HTML5 វាមិនចាំបាច់ទេ** ហើយ \`<br>\`, \`<img>\` គឺគ្រប់គ្រាន់។

---

## 5. Best Practices 🏆

1.  **ប្រើ lowercase tags**: តែងតែប្រើអក្សរតូចសម្រាប់ Tag Name (ឧទាហរណ៍: \`<p>\` ជំនួស \`<P>\`) ។
2.  **ដាក់ quotes លើ attribute values**: តែងតែដាក់តម្លៃរបស់ Attribute ក្នុង quotes (ឧទាហរណ៍: \`class="myclass"\` មិនមែន \`class=myclass\`) ។ Double quotes គឺត្រូវបានណែនាំ។
3.  **រក្សា indentation**: រៀបចំកូដដោយប្រើគម្លាត (Tab ឬ Space) ដើម្បីឱ្យកូដងាយស្រួលអាន ជាពិសេសនៅពេល Nesting elements ។
4.  **ប្រើ semantic tags**: ជ្រើសរើស Tag ដែលមានអត្ថន័យស្របតាមមាតិកា (ឧទាហរណ៍: \`<h1>\` សម្រាប់ចំណងជើងធំ, \`<p>\` សម្រាប់កថាខណ្ឌ) ។
5.  **Validate HTML**: ប្រើ HTML Validator (ដូចជា W3C Markup Validation Service) ដើម្បីពិនិត្យរកកំហុសបច្ចេកទេសនៅក្នុងកូដរបស់អ្នក។
  `,
  examples: [
    `<div id="main-content" class="container">
    <h1 title="ចំណងជើងសំខាន់">ស្វាគមន៍មកកាន់គេហទំព័របស់យើង</h1>
    
    <p class="intro">
        នេះជា <strong>កថាខណ្ឌណែនាំ</strong> ដែលមាន 
        <em>អក្សរទ្រេត</em> និង 
        <a href="https://example.com" title="តំណភ្ជាប់ខាងក្រៅ">តំណភ្ជាប់</a>
    </p>
    
    <img src="welcome.jpg" 
          alt="រូបភាពស្វាគមន៍" 
          width="400" 
          height="300" 
          title="រូបភាពស្វាគមន៍របស់យើង">
    
    <hr>
    
    <div class="contact-info">
        <h2>ព័ត៌មានទំនាក់ទំនង</h2>
        <p>អ្នកអាចទាក់ទងយើងបាន<br>
        តាមរយៈ email ឬ ទូរស័ព្ទ</p>
    </div>
</div>`,
    `<article>
    <header>
        <h1>ចំណងជើងអត្ថបទ</h1>
        <p class="meta">
            ពេលវេលា: <time datetime="2024-01-15">15 មករា 2024</time> |
            អ្នកនិពន្ធ: <span class="author">សុផល</span>
        </p>
    </header>
    
    <section class="content">
        <p>
            នេះជាកថាខណ្ឌដំបូងដែលមាន <strong>អក្សរដិត</strong>, 
            <em>អក្សរទ្រេត</em>, និង 
            <mark>អក្សរ highlight</mark>។
        </p>
        
        <ul>
            <li>ចំណុចទី ១</li>
            <li>ចំណុចទី ២ ដែលមាន <a href="#section2">តំណភ្ជាប់</a></li>
            <li>ចំណុចទី ៣</li>
        </ul>
    </section>
    
    <footer>
        <p><small>© 2024 ពីអ្នកនិពន្ធ</small></p>
    </footer>
</article>`
  ],
  quiz: [
    {
      question: 'តើ HTML Element មានផ្នែកសំខាន់ប៉ុន្មានផ្នែក?',
      options: ['2 ផ្នែក', '3 ផ្នែក', '4 ផ្នែក', '5 ផ្នែក'],
      correct: 2, // Index 2 corresponds to "4 ផ្នែក"
      explanation: 'HTML Element មាន 4 ផ្នែកសំខាន់: Opening Tag, Attributes, Content, និង Closing Tag។'
    },
    {
      question: 'តើ Empty Elements អ្វីដែលមិនត្រូវការ closing tag?',
      options: [
        '<p> និង <div>',
        '<br> និង <img>',
        '<h1> និង <span>',
        '<ul> និង <li>'
      ],
      correct: 1,
      explanation: '<br> និង <img> គឺជា Empty Elements ដែលមិនត្រូវការ closing tag ព្រោះវាមិនមាន content។'
    },
    {
      question: 'តើ Attributes ត្រូវបានសរសេរនៅក្នុងផ្នែកណាខ្លះនៃ Element?',
      options: [
        'នៅក្នុង Closing Tag',
        'នៅក្នុង Content',
        'នៅក្នុង Opening Tag',
        'នៅក្នុង Opening Tag',
        'នៅខាងក្រៅ Element'
      ],
      correct: 2,
      explanation: 'Attributes ត្រូវតែសរសេរនៅក្នុង Opening Tag របស់ Element នោះ។'
    },
    {
      question: 'តើ Attribute មួយណាដែលផ្តល់អត្តសញ្ញាណតែមួយគត់សម្រាប់ Element?',
      options: ['class', 'name', 'id', 'type'],
      correct: 2,
      explanation: 'id Attribute ផ្តល់អត្តសញ្ញាណតែមួយគត់សម្រាប់ Element មួយ។'
    },
    {
      question: 'តើ Attribute \`src\` ប្រើសម្រាប់ Element មួយណា?',
      options: ['<a>', '<p>', '<img>', '<div>'],
      correct: 2,
      explanation: 'src Attribute ត្រូវបានប្រើសម្រាប់ Element <img> ដើម្បីបញ្ជាក់ទីតាំងរូបភាព។'
    },
    {
      question: 'តើអ្វីទៅជា "Nesting" នៅក្នុង HTML?',
      options: [
        'ការដាក់ CSS នៅក្នុង HTML',
        'ការដាក់ Element មួយនៅខាងក្នុង Element មួយទៀត',
        'ការប្រើប្រាស់ JavaScript',
        'ការរក្សាទុកឯកសារ HTML'
      ],
      correct: 1,
      explanation: 'Nesting គឺសំដៅលើការដាក់ Element មួយនៅខាងក្នុង Element មួយទៀត។'
    },
    {
      question: 'តើការអនុវត្តល្អបំផុតមួយណាដែលជួយឱ្យកូដ HTML ងាយស្រួលអាន?',
      options: [
        'ប្រើអក្សរធំសម្រាប់ Tag Names',
        'មិនបាច់ដាក់ quotes លើ Attribute Values',
        'រក្សា Indentation (គម្លាត)',
        'មិនបាច់បិទ Tags'
      ],
      correct: 2,
      explanation: 'ការរក្សា Indentation (គម្លាត) ធ្វើឱ្យកូដ HTML ងាយស្រួលអាន និងយល់ពីភាពទំនាក់ទំនងរបស់ Elements ។'
    },
    {
      question: 'តើ Tag \`<a>\` ប្រើ Attribute មួយណាដើម្បីបញ្ជាក់ URL គោលដៅ?',
      options: ['src', 'link', 'href', 'url'],
      correct: 2,
      explanation: 'Tag <a> ប្រើ Attribute href ដើម្បីបញ្ជាក់ URL គោលដៅនៃតំណភ្ជាប់។'
    },
    {
      question: 'តើ Empty Element មួយណាដែលបង្កើតបន្ទាត់ផ្ដេកសម្រាប់បែងចែកមាតិកា?',
      options: ['<br>', '<hr>', '<line>', '<div>'],
      correct: 1,
      explanation: '<hr> Empty Element បង្កើតបន្ទាត់ផ្ដេកសម្រាប់បែងចែកមាតិកា។'
    },
    {
      question: 'តើ Attribute \`alt\` សម្រាប់ \`<img>\` Element មានសារៈសំខាន់អ្វីខ្លះ?',
      options: [
        'កំណត់ទំហំរូបភាព',
        'ផ្តល់អត្ថបទជំនួសសម្រាប់ Accessibility និងនៅពេលរូបភាពមិនបង្ហាញ',
        'កំណត់ទីតាំងរូបភាព',
        'ផ្លាស់ប្តូរពណ៌រូបភាព'
      ],
      correct: 1,
      explanation: 'alt Attribute ផ្តល់អត្ថបទជំនួសសម្រាប់ Accessibility (Screen Readers) និងជាអត្ថបទបង្ហាញនៅពេលរូបភាពមិនអាចផ្ទុកបាន។'
    },
    {
      question: 'តើមួយណាជា Global Attribute?',
      options: ['href', 'src', 'alt', 'class'],
      correct: 3,
      explanation: 'class គឺជា Global Attribute ដែលអាចប្រើបានជាមួយ Element HTML ណាក៏បាន។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Container Element និង Empty Element?',
      options: [
        'Container Element ត្រូវការ Content និង Closing Tag ចំណែក Empty Element មិនត្រូវការ Content និង Closing Tag ទេ',
        'Container Element ប្រើសម្រាប់ Styling ចំណែក Empty Element សម្រាប់ Structure',
        'Empty Element អាច Nest បាន ចំណែក Container Element មិនអាច Nest បាន',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 0,
      explanation: 'Container Element មាន Content និងត្រូវការ Closing Tag ខណៈដែល Empty Element មិនមាន Content និងមិនត្រូវការ Closing Tag។'
    },
    {
      question: 'តើ Attribute \`title\` បង្ហាញនៅពេលណា?',
      options: [
        'នៅពេលចុចលើ Element',
        'នៅពេលដាក់ Mouse ពីលើ Element (Hover)',
        'នៅពេលទំព័រផ្ទុក',
        'វាជា Attribute លាក់'
      ],
      correct: 1,
      explanation: 'title Attribute ជាទូទៅបង្ហាញជា "tooltip" នៅពេលអ្នកប្រើប្រាស់ដាក់ Mouse ពីលើ Element នោះ។'
    },
    {
      question: 'តើការប្រើអក្សរធំ (uppercase) សម្រាប់ Tag Names (ឧទាហរណ៍: \`<P>\` ) គឺជាការអនុវត្តល្អបំផុតមែនទេ?',
      options: ['បាទ/ចាស', 'ទេ'],
      correct: 1,
      explanation: 'ទេ ការប្រើអក្សរតូច (lowercase) សម្រាប់ Tag Names គឺជាការអនុវត្តល្អបំផុតនៅក្នុង HTML5។'
    }
  ],
  lab: {
    task: 'បង្កើតឯកសារ HTML ដែលមាន nested elements, attributes ផ្សេងៗ, និង empty elements។ រួមបញ្ចូលចំណងជើង, កថាខណ្ឌមាន formatting, រូបភាព, តំណភ្ជាប់, និងបញ្ជីរ។',
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>លំហាត់អនុវត្តន៍ HTML Elements</title>
</head>
<body>
    <div id="main-container" class="page-wrapper">
        <header>
            <h1 title="ចំណងជើងទំព័រ">ការអនុវត្តន៍ HTML Elements</h1>
            <hr>
        </header>
        
        <main>
            <section id="intro">
                <h2>ផ្នែកណែនាំ</h2>
                <p class="highlight">
                    នេះជា <strong>ឧទាហរណ៍</strong> នៃការប្រើប្រាស់ 
                    <em>HTML elements</em> និង <mark>attributes</mark> 
                    ជាច្រើនប្រភេទ។
                </p>
                
                <img src="https://via.placeholder.com/300x200?text=Example+Image" 
                    alt="រូបភាពឧទាហរណ៍" 
                    width="300" 
                    height="200" 
                    title="នេះជារូបភាពឧទាហរណ៍">
            </section>
            
            <br>
            
            <section id="content">
                <h2>មាតិកាសំខាន់</h2>
                <p>
                    ក្នុងផ្នែកនេះ យើងនឹងរៀនអំពី:
                </p>
                
                <ul>
                    <li>ការប្រើប្រាស់ <strong>nested elements</strong></li>
                    <li>ការដាក់ <em>attributes</em> ត្រឹមត្រូវ</li>
                    <li>ការប្រើ <a href="#links" title="ទៅកាន់ផ្នែកតំណភ្ជាប់">តំណភ្ជាប់</a></li>
                </ul>
                
                <div class="note">
                    <h3>កំណត់ចំណាំ</h3>
                    <p>
                        <small>
                            សូមចងចាំថា HTML គឺជាភាសាសម្គាល់ 
                            (<span class="term">Markup Language</span>) 
                            មិនមែនភាសាកម្មវិធីទេ។
                        </small>
                    </p>
                </div>
            </section>
            
            <hr>
            
            <section id="links">
                <h2>តំណភ្ជាប់មានប្រយោជន៍</h2>
                <p>តំណភ្ជាប់ខាងក្រោមនេះនឹងបើកនៅ tab ថ្មី:</p>
                <ul>
                    <li>
                        <a href="https://www.w3schools.com" 
                            target="_blank" 
                            title="រៀន HTML នៅ W3Schools">
                            W3Schools HTML Tutorial
                        </a>
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org" 
                            target="_blank" 
                            title="MDN Web Docs">
                            MDN Web Documentation
                        </a>
                    </li>
                </ul>
            </section>
        </main>
        
        <footer>
            <br>
            <p>
                <small>
                    &copy; 2024 - បង្កើតដោយ 
                    <span class="author">[ឈ្មោះអ្នក]</span>
                </small>
            </p>
        </footer>
    </div>
</body>
</html>`
  }
};

export default Lesson2_1;