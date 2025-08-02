// src/components/lessons/bootstrap/BootstrapLesson3_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson3_1Content: LessonContent = {
  title: 'Carousel (ស្លាយរូបភាព)',
  objectives: [
    'យល់ដឹងពីរបៀបបង្កើត Carousel មូលដ្ឋាន',
    'របៀបបន្ថែម Indicators និង Controls',
    'របៀបបន្ថែម Captions ទៅរូបភាព',
    'របៀបកំណត់ Carousel Auto-play និង Interval'
  ],
  content: `
# Carousel (ស្លាយរូបភាព) 📸

---

Carousel គឺជា Component សម្រាប់បង្ហាញមាតិកា (ជាទូទៅជារូបភាព ឬវីដេអូ) ជាទម្រង់ស្លាយ។ Bootstrap Carousels គឺ Responsive និងអាចប្ដូរតាមបំណងបានយ៉ាងងាយស្រួល។

---

## 1. Basic Carousel Structure 🏗️

Carousel ត្រូវបានបង្កើតឡើងដោយ Class \`carousel\` និង \`slide\` ។ វាទាមទារ ID តែមួយគត់ (ឧទាហរណ៍៖ \`#myCarousel\`) ដើម្បីដំណើរការ Controls និង Indicators ។

\`\`\`html
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://placehold.co/800x400/E0F7FA/007BFF?text=Slide+1" class="d-block w-100" alt="Slide 1">
    </div>
    <div class="carousel-item">
      <img src="https://placehold.co/800x400/E0F7FA/007BFF?text=Slide+2" class="d-block w-100" alt="Slide 2">
    </div>
    <div class="carousel-item">
      <img src="https://placehold.co/800x400/E0F7FA/007BFF?text=Slide+3" class="d-block w-100" alt="Slide 3">
    </div>
  </div>
</div>
\`\`\`
* \`carousel\`, \`slide\`: Classes មូលដ្ឋានសម្រាប់ Carousel ។
* \`data-bs-ride="carousel"\`: ធ្វើឱ្យ Carousel ចាប់ផ្តើម Auto-play នៅពេលទំព័រត្រូវបានផ្ទុក។
* \`carousel-inner\`: Wrapper សម្រាប់ Carousel Items ។
* \`carousel-item\`: ធាតុនីមួយៗនៅក្នុង Carousel ។
* \`active\`: Class សម្រាប់ធាតុដំបូងដែលត្រូវបង្ហាញ។
* \`d-block w-100\`: ធ្វើឱ្យរូបភាពបង្ហាញជា Block និងមានទទឹង 100% ។

---

## 2. Carousel Indicators (ចំណុចបង្ហាញ) ⚪

Indicators គឺជាចំណុចតូចៗនៅខាងក្រោម Carousel ដែលបង្ហាញពីចំនួន Slides សរុប និង Slide បច្ចុប្បន្ន។

\`\`\`html
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
\`\`\`
* \`carousel-indicators\`: Wrapper សម្រាប់ Indicators ។
* \`data-bs-target\`: ត្រូវតែផ្គូផ្គង ID របស់ Carousel ។
* \`data-bs-slide-to\`: កំណត់ Index របស់ Slide (ចាប់ផ្តើមពី 0) ។

---

## 3. Carousel Controls (ប៊ូតុងបញ្ជា) ◀️▶️

Controls គឺជាប៊ូតុង "Previous" និង "Next" ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ផ្លាស់ប្តូរ Slides ដោយដៃ។

\`\`\`html
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
\`\`\`
* \`carousel-control-prev\`, \`carousel-control-next\`: Classes សម្រាប់ Controls ។
* \`data-bs-slide="prev"\` / \`data-bs-slide="next"\`: កំណត់ទិសដៅនៃការផ្លាស់ប្តូរ Slide ។
* \`visually-hidden\`: លាក់អត្ថបទពីការមើលឃើញ ប៉ុន្តែអាចចូលប្រើបានសម្រាប់ Screen Readers ។

---

## 4. Carousel with Captions (អត្ថបទពិពណ៌នា) ✍️

អ្នកអាចបន្ថែម Captions (ចំណងជើង និងអត្ថបទពិពណ៌នា) ទៅក្នុង Slides ដោយប្រើ Class \`carousel-caption\` ។

\`\`\`html
<div class="carousel-item active">
  <img src="https://placehold.co/800x400/E0F7FA/007BFF?text=Slide+1" class="d-block w-100" alt="Slide 1">
  <div class="carousel-caption d-none d-md-block">
    <h5>ចំណងជើង Slide ទី ១</h5>
    <p>ការពិពណ៌នាខ្លីៗសម្រាប់ Slide ទី ១ ។</p>
  </div>
</div>
\`\`\`
* \`carousel-caption\`: Wrapper សម្រាប់ Caption ។
* \`d-none d-md-block\`: លាក់ Caption នៅលើអេក្រង់ Extra Small និង Small ប៉ុន្តែបង្ហាញវានៅលើអេក្រង់ Medium និងធំជាង (Responsive Caption) ។

---

## 5. Setting Auto-play Interval (រយៈពេលផ្លាស់ប្តូរ) ⏱️

អ្នកអាចកំណត់រយៈពេលដែល Slide នីមួយៗបង្ហាញមុននឹងផ្លាស់ប្តូរដោយស្វ័យប្រវត្តិ ដោយប្រើ Attributes \`data-bs-interval\` ។

\`\`\`html
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  </div>
\`\`\`
* \`data-bs-interval="3000"\`: កំណត់រយៈពេល 3000 មីលីវិនាទី (3 វិនាទី) សម្រាប់ Slide នីមួយៗ។

---
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Carousel ពេញលេញជាមួយ Indicators, Controls, និង Captions</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពី Carousel ដែលមានរូបភាព 3 ស្លាយ រួមជាមួយចំណុចបង្ហាញ ប៊ូតុងបញ្ជា និងអត្ថបទពិពណ៌នា។</p>
<div class="container mt-5">
  <div id="fullCarouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#fullCarouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#fullCarouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#fullCarouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://placehold.co/1200x500/A7D9F7/000000?text=Welcome+to+Our+Site" class="d-block w-100" alt="Slide 1">
        <div class="carousel-caption d-none d-md-block">
          <h5>សូមស្វាគមន៍មកកាន់គេហទំព័ររបស់យើង!</h5>
          <p>ស្វែងយល់ពីមាតិកាដ៏សម្បូរបែបរបស់យើង។</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://placehold.co/1200x500/A7D9F7/000000?text=Explore+New+Features" class="d-block w-100" alt="Slide 2">
        <div class="carousel-caption d-none d-md-block">
          <h5>ស្វែងយល់ពីលក្ខណៈពិសេសថ្មីៗ</h5>
          <p>យើងបានបន្ថែមមុខងារជាច្រើនទៀតសម្រាប់អ្នក។</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://placehold.co/1200x500/A7D9F7/000000?text=Join+Our+Community" class="d-block w-100" alt="Slide 3">
        <div class="carousel-caption d-none d-md-block">
          <h5>ចូលរួមជាមួយសហគមន៍របស់យើង</h5>
          <p>ភ្ជាប់ទំនាក់ទំនងជាមួយអ្នកប្រើប្រាស់ផ្សេងទៀត។</p>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#fullCarouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#fullCarouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Carousel Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <div id="fullCarouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#fullCarouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#fullCarouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#fullCarouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://placehold.co/1200x500/A7D9F7/000000?text=Welcome+to+Our+Site" class="d-block w-100" alt="Slide 1">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>សូមស្វាគមន៍មកកាន់គេហទំព័ររបស់យើង!</h5>
                        <p>ស្វែងយល់ពីមាតិកាដ៏សម្បូរបែបរបស់យើង។</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://placehold.co/1200x500/A7D9F7/000000?text=Explore+New+Features" class="d-block w-100" alt="Slide 2">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>ស្វែងយល់ពីលក្ខណៈពិសេសថ្មីៗ</h5>
                        <p>យើងបានបន្ថែមមុខងារជាច្រើនទៀតសម្រាប់អ្នក។</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://placehold.co/1200x500/A7D9F7/000000?text=Join+Our+Community" class="d-block w-100" alt="Slide 3">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>ចូលរួមជាមួយសហគមន៍របស់យើង</h5>
                        <p>ភ្ជាប់ទំនាក់ទំនងជាមួយអ្នកប្រើប្រាស់ផ្សេងទៀត។</p>
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#fullCarouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#fullCarouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
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
      question: 'តើ Class មួយណាដែលជាមូលដ្ឋានសម្រាប់បង្កើត Carousel នៅក្នុង Bootstrap?',
      options: ['`slider`', '`carousel`', '`slideshow`', '`gallery`'],
      correct: 1,
      explanation: 'Class `carousel` គឺជា Class មូលដ្ឋានសម្រាប់បង្កើត Carousel ។'
    },
    {
      question: 'តើ Attributes មួយណាដែលធ្វើឱ្យ Carousel ចាប់ផ្តើម Auto-play នៅពេលទំព័រត្រូវបានផ្ទុក?',
      options: ['`data-bs-autoplay="true"`', '`data-bs-start="auto"`', '`data-bs-ride="carousel"`', '`data-bs-play="true"`'],
      correct: 2,
      explanation: 'Attributes `data-bs-ride="carousel"` ធ្វើឱ្យ Carousel ចាប់ផ្តើម Auto-play នៅពេលទំព័រត្រូវបានផ្ទុក។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីរុំព័ទ្ធ Carousel Items ទាំងអស់?',
      options: ['`carousel-wrapper`', '`carousel-items`', '`carousel-inner`', '`carousel-container`'],
      correct: 2,
      explanation: 'Class `carousel-inner` គឺជា Wrapper សម្រាប់ Carousel Items ទាំងអស់។'
    },
    {
      question: 'ដើម្បីកំណត់រយៈពេលដែល Slide នីមួយៗបង្ហាញមុននឹងផ្លាស់ប្តូរដោយស្វ័យប្រវត្តិ តើ Attributes មួយណាដែលត្រូវប្រើ?',
      options: ['`data-bs-duration`', '`data-bs-delay`', '`data-bs-interval`', '`data-bs-speed`'],
      correct: 2,
      explanation: 'Attributes `data-bs-interval` ត្រូវបានប្រើដើម្បីកំណត់រយៈពេលដែល Slide នីមួយៗបង្ហាញ។'
    },
    {
      question: 'តើ Class មួយណាដែលបង្ហាញពី Slide បច្ចុប្បន្ននៅក្នុង Indicators?',
      options: ['`current`', '`selected`', '`active`', '`show`'],
      correct: 2,
      explanation: 'Class `active` ត្រូវបានប្រើសម្រាប់ធាតុដំបូងដែលត្រូវបង្ហាញ និងសម្រាប់ Indicator របស់ Slide បច្ចុប្បន្ន។'
    },
    {
      question: 'តើ Class `carousel-caption` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីលាក់ Captions',
        'ដើម្បីបន្ថែមចំណងជើង និងអត្ថបទពិពណ៌នាទៅក្នុង Slides',
        'ដើម្បីផ្លាស់ប្តូរទំហំរូបភាព',
        'ដើម្បីបន្ថែម Controls ទៅ Carousel'
      ],
      correct: 1,
      explanation: 'Class `carousel-caption` ត្រូវបានប្រើដើម្បីបន្ថែមចំណងជើង និងអត្ថបទពិពណ៌នាទៅក្នុង Slides ។'
    },
    {
      question: 'តើ Class `visually-hidden` ត្រូវបានប្រើសម្រាប់អ្វីនៅក្នុង Carousel Controls?',
      options: [
        'ដើម្បីលាក់ Controls ពីការមើលឃើញ',
        'ដើម្បីលាក់អត្ថបទពីការមើលឃើញ ប៉ុន្តែអាចចូលប្រើបានសម្រាប់ Screen Readers',
        'ដើម្បីផ្លាស់ប្តូរពណ៌ Controls',
        'ដើម្បីធ្វើឱ្យ Controls អសកម្ម'
      ],
      correct: 1,
      explanation: 'Class `visually-hidden` លាក់អត្ថបទពីការមើលឃើញ ប៉ុន្តែអាចចូលប្រើបានសម្រាប់ Screen Readers សម្រាប់គោលបំណងដែលអាចចូលប្រើបាន។'
    },
    {
      question: 'តើ Attributes `data-bs-slide="prev"` ត្រូវបានប្រើសម្រាប់ប៊ូតុងមួយណា?',
      options: ['ប៊ូតុង Next', 'ប៊ូតុង Previous', 'ប៊ូតុង Play', 'ប៊ូតុង Pause'],
      correct: 1,
      explanation: 'Attributes `data-bs-slide="prev"` ត្រូវបានប្រើសម្រាប់ប៊ូតុង "Previous" ។'
    },
    {
      question: 'តើ Carousel Indicators ត្រូវបានដាក់នៅក្នុង Tag HTML មួយណា?',
      options: ['`<ul>`', '`<ol>`', '`<div>`', '`<span>`'],
      correct: 2,
      explanation: 'Carousel Indicators ត្រូវបានដាក់នៅក្នុង `<div>` ជាមួយនឹង Class `carousel-indicators` ។'
    },
    {
      question: 'តើ Class `d-block w-100` ត្រូវបានប្រើសម្រាប់អ្វីនៅលើរូបភាព Carousel?',
      options: [
        'ដើម្បីកំណត់រូបភាពជា Block និងមានទទឹង 100%',
        'ដើម្បីលាក់រូបភាព',
        'ដើម្បីធ្វើឱ្យរូបភាពមាន Responsive',
        'ដើម្បីបន្ថែម Border ទៅរូបភាព'
      ],
      correct: 0,
      explanation: 'Class `d-block w-100` ធ្វើឱ្យរូបភាពបង្ហាញជា Block និងមានទទឹង 100% នៃ Parent Element របស់វា។'
    },
    {
      question: 'តើ Carousel ត្រូវការអ្វីខ្លះដើម្បីឱ្យ Controls និង Indicators ដំណើរការ?',
      options: [
        'CSS ផ្ទាល់ខ្លួន',
        'ID តែមួយគត់',
        'JavaScript ផ្ទាល់ខ្លួន',
        'គ្មានអ្វីទាំងអស់'
      ],
      correct: 1,
      explanation: 'Carousel ត្រូវការ ID តែមួយគត់ដើម្បីឱ្យ Controls និង Indicators អាចកំណត់គោលដៅបានត្រឹមត្រូវ។'
    },
    {
      question: 'តើ Class `d-none d-md-block` នៅក្នុង `carousel-caption` ធ្វើអ្វី?',
      options: [
        'បង្ហាញ Caption តែលើអេក្រង់ Extra Small ប៉ុណ្ណោះ',
        'លាក់ Caption នៅលើអេក្រង់ Extra Small និង Small ប៉ុន្តែបង្ហាញវានៅលើអេក្រង់ Medium និងធំជាង',
        'បង្ហាញ Caption តែលើអេក្រង់ Large ប៉ុណ្ណោះ',
        'លាក់ Caption នៅលើគ្រប់ទំហំអេក្រង់'
      ],
      correct: 1,
      explanation: 'Class `d-none d-md-block` លាក់ Caption នៅលើអេក្រង់ Extra Small និង Small ប៉ុន្តែបង្ហាញវានៅលើអេក្រង់ Medium និងធំជាង។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Carousel សាមញ្ញ

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN** ។

នៅក្នុងឯកសារនោះ សូមបង្កើត **Carousel សាមញ្ញមួយ** ដែលមាន៖

1.  **រូបភាព 2 ស្លាយ** (ប្រើ Placeholder Image ណាមួយ) ។
2.  **Indicators** (ចំណុចបង្ហាញ) ។
3.  **Controls** (ប៊ូតុង Previous/Next) ។
4.  កំណត់ **Auto-play** ឱ្យផ្លាស់ប្តូររៀងរាល់ **4 វិនាទី** ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Carousel Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h1>ការអនុវត្តន៍ Carousel</h1>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://placehold.co/800x400/D4EDDA/155724?text=First+Slide" class="d-block w-100" alt="First Slide">
                </div>
                <div class="carousel-item">
                    <img src="https://placehold.co/800x400/CCE5FF/004085?text=Second+Slide" class="d-block w-100" alt="Second Slide">
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>`
  }
};

export default BootstrapLesson3_1Content;