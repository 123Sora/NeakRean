// src/components/lessons/bootstrap/BootstrapLesson2_4.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson2_4Content: LessonContent = {
  title: 'Cards (កាត)',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃ Bootstrap Cards',
    'របៀបបង្កើត Basic Card Structure (header, body, footer)',
    'របៀបបន្ថែម Images, Titles, Text, និង Links ទៅក្នុង Card',
    'របៀបប្រើប្រាស់ Card Groups និង Card Decks'
  ],
  content: `
# Cards (កាត) 🃏

---

Cards គឺជា Component ដែលមានភាពបត់បែនខ្ពស់នៅក្នុង Bootstrap ដែលត្រូវបានប្រើដើម្បីបង្ហាញមាតិកាជាក្រុម។ វាជា Container ដែលអាចផ្ទុកនូវប្រភេទមាតិកាជាច្រើនដូចជា រូបភាព ចំណងជើង អត្ថបទ ប៊ូតុង និងបញ្ជី។

---

## 1. Basic Card Structure 🏗️

Card ត្រូវបានបង្កើតឡើងដោយ Class \`card\` ។ នៅខាងក្នុង \`card\` អ្នកអាចប្រើ Classes ដូចជា \`card-body\`, \`card-title\`, \`card-text\`, \`card-header\`, \`card-footer\` ។

\`\`\`html
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">ចំណងជើង Card</h5>
    <p class="card-text">នេះជាអត្ថបទខ្លីៗសម្រាប់បង្ហាញព័ត៌មាននៅក្នុង Card ។</p>
    <a href="#" class="btn btn-primary">ចូលមើល</a>
  </div>
</div>
\`\`\`
* \`card\`: Class មូលដ្ឋានសម្រាប់ Card ។
* \`card-body\`: កន្លែងសម្រាប់ដាក់មាតិកាសំខាន់របស់ Card ។
* \`card-title\`: ចំណងជើងរបស់ Card ។
* \`card-text\`: អត្ថបទនៅក្នុង Card ។
* \`btn btn-primary\`: ប៊ូតុងនៅក្នុង Card ។

---

## 2. Card Content Types 🖼️✍️

### Images
អ្នកអាចដាក់រូបភាពនៅខាងលើ ឬខាងក្រោម Card ដោយប្រើ Class \`card-img-top\` ឬ \`card-img-bottom\` ។

\`\`\`html
<div class="card" style="width: 18rem;">
  <img src="https://placehold.co/300x180/E0F2F7/007BFF?text=Image" class="card-img-top" alt="Placeholder Image">
  <div class="card-body">
    <h5 class="card-title">Card ជាមួយរូបភាព</h5>
    <p class="card-text">រូបភាពនៅខាងលើ Card ។</p>
  </div>
</div>
\`\`\`

### Header and Footer
អ្នកអាចបន្ថែម Header និង Footer ទៅក្នុង Card ។

\`\`\`html
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Card Header
  </div>
  <div class="card-body">
    <h5 class="card-title">ចំណងជើង Card</h5>
    <p class="card-text">មាតិកានៅក្នុង Card Body ។</p>
  </div>
  <div class="card-footer">
    Card Footer
  </div>
</div>
\`\`\`
* \`card-header\`: ផ្នែកខាងលើនៃ Card ។
* \`card-footer\`: ផ្នែកខាងក្រោមនៃ Card ។

### List Groups
អ្នកអាចបញ្ចូល List Group ទៅក្នុង Card ។

\`\`\`html
<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ធាតុទី ១</li>
    <li class="list-group-item">ធាតុទី ២</li>
    <li class="list-group-item">ធាតុទី ៣</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
  </div>
</div>
\`\`\`
* \`list-group\`, \`list-group-flush\`, \`list-group-item\`: Classes សម្រាប់ List Group ។

---

## 3. Card Groups and Decks 🎴🎴🎴

### Card Group
ប្រើ \`card-group\` ដើម្បីបង្ហាញ Cards ជាជួរដេកដែលមានទទឹង និងកម្ពស់ស្មើគ្នា។ Cards នៅក្នុង Card Group នឹងលាតពេញទទឹងនៅលើអេក្រង់តូច។

\`\`\`html
<div class="card-group">
  <div class="card">
    <img src="https://placehold.co/300x180/E0F2F7/007BFF?text=Card 1" class="card-img-top" alt="Card 1">
    <div class="card-body">
      <h5 class="card-title">Card 1</h5>
      <p class="card-text">អត្ថបទសម្រាប់ Card ទី ១ ។</p>
    </div>
  </div>
  <div class="card">
    <img src="https://placehold.co/300x180/E0F2F7/007BFF?text=Card 2" class="card-img-top" alt="Card 2">
    <div class="card-body">
      <h5 class="card-title">Card 2</h5>
      <p class="card-text">អត្ថបទសម្រាប់ Card ទី ២ ។</p>
    </div>
  </div>
  <div class="card">
    <img src="https://placehold.co/300x180/E0F2F7/007BFF?text=Card 3" class="card-img-top" alt="Card 3">
    <div class="card-body">
      <h5 class="card-title">Card 3</h5>
      <p class="card-text">អត្ថបទសម្រាប់ Card ទី ៣ ។</p>
    </div>
  </div>
</div>
\`\`\`

### Card Deck (Deprecated in Bootstrap 5, use Grid instead)
នៅក្នុង Bootstrap 4, \`card-deck\` ត្រូវបានប្រើដើម្បីដាក់ Cards ឱ្យនៅជិតគ្នាដោយមានគម្លាតស្មើគ្នា។ នៅក្នុង Bootstrap 5 វិញ វាត្រូវបានណែនាំឱ្យប្រើ **Grid System** ជំនួសវិញ ដើម្បីសម្រេចបាន Layout ស្រដៀងគ្នា។

\`\`\`html
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://placehold.co/300x180/E0F2F7/007BFF?text=Grid Card 1" class="card-img-top" alt="Grid Card 1">
      <div class="card-body">
        <h5 class="card-title">Grid Card 1</h5>
        <p class="card-text">អត្ថបទសម្រាប់ Grid Card ទី ១ ។</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://placehold.co/300x180/E0F2F7/007BFF?text=Grid Card 2" class="card-img-top" alt="Grid Card 2">
      <div class="card-body">
        <h5 class="card-title">Grid Card 2</h5>
        <p class="card-text">អត្ថបទសម្រាប់ Grid Card ទី ២ ។</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://placehold.co/300x180/E0F2F7/007BFF?text=Grid Card 3" class="card-img-top" alt="Grid Card 3">
      <div class="card-body">
        <h5 class="card-title">Grid Card 3</h5>
        <p class="card-text">អត្ថបទសម្រាប់ Grid Card ទី ៣ ។</p>
      </div>
    </div>
  </div>
</div>
\`\`\`
* \`row-cols-1 row-cols-md-3\`: កំណត់ថាមាន 1 Column ក្នុងមួយជួរដេកនៅលើអេក្រង់តូច ហើយ 3 Columns ក្នុងមួយជួរដេកនៅលើអេក្រង់ Medium និងធំជាង។
* \`g-4\`: ផ្តល់គម្លាត (gutters) 4 units រវាង Cards ។
* \`h-100\`: ធ្វើឱ្យ Card មានកម្ពស់ 100% នៃ Parent Element របស់វា ដើម្បីធានាថា Cards ក្នុងជួរដេកតែមួយមានកម្ពស់ស្មើគ្នា។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Card Group ជាមួយរូបភាព និងអត្ថបទ</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពី Cards បីដែលដាក់ជាក្រុម ដែលមានរូបភាព ចំណងជើង និងអត្ថបទ។</p>
<div class="container mt-5">
  <div class="card-group">
    <div class="card">
      <img src="https://placehold.co/400x250/F0F8FF/007BFF?text=Product+1" class="card-img-top" alt="Product 1">
      <div class="card-body">
        <h5 class="card-title">ផលិតផលទី ១</h5>
        <p class="card-text">ការពិពណ៌នាខ្លីៗអំពីផលិតផលទី ១ ។</p>
        <p class="card-text"><small class="text-muted">បានធ្វើបច្ចុប្បន្នភាពចុងក្រោយ 3 នាទីមុន</small></p>
      </div>
    </div>
    <div class="card">
      <img src="https://placehold.co/400x250/F0F8FF/007BFF?text=Product+2" class="card-img-top" alt="Product 2">
      <div class="card-body">
        <h5 class="card-title">ផលិតផលទី ២</h5>
        <p class="card-text">ការពិពណ៌នាខ្លីៗអំពីផលិតផលទី ២ ។</p>
        <p class="card-text"><small class="text-muted">បានធ្វើបច្ចុប្បន្នភាពចុងក្រោយ 5 នាទីមុន</small></p>
      </div>
    </div>
    <div class="card">
      <img src="https://placehold.co/400x250/F0F8FF/007BFF?text=Product+3" class="card-img-top" alt="Product 3">
      <div class="card-body">
        <h5 class="card-title">ផលិតផលទី ៣</h5>
        <p class="card-text">ការពិពណ៌នាខ្លីៗអំពីផលិតផលទី ៣ ។</p>
        <p class="card-text"><small class="text-muted">បានធ្វើបច្ចុប្បន្នភាពចុងក្រោយ 10 នាទីមុន</small></p>
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
    <title>Bootstrap Cards Example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <div class="card-group">
            <div class="card">
                <img src="https://placehold.co/400x250/F0F8FF/007BFF?text=Product+1" class="card-img-top" alt="Product 1">
                <div class="card-body">
                    <h5 class="card-title">ផលិតផលទី ១</h5>
                    <p class="card-text">ការពិពណ៌នាខ្លីៗអំពីផលិតផលទី ១ ។</p>
                    <p class="card-text"><small class="text-muted">បានធ្វើបច្ចុប្បន្នភាពចុងក្រោយ 3 នាទីមុន</small></p>
                </div>
            </div>
            <div class="card">
                <img src="https://placehold.co/400x250/F0F8FF/007BFF?text=Product+2" class="card-img-top" alt="Product 2">
                <div class="card-body">
                    <h5 class="card-title">ផលិតផលទី ២</h5>
                    <p class="card-text">ការពិពណ៌នាខ្លីៗអំពីផលិតផលទី ២ ។</p>
                    <p class="card-text"><small class="text-muted">បានធ្វើបច្ចុប្បន្នភាពចុងក្រោយ 5 នាទីមុន</small></p>
                </div>
            </div>
            <div class="card">
                <img src="https://placehold.co/400x250/F0F8FF/007BFF?text=Product+3" class="card-img-top" alt="Product 3">
                <div class="card-body">
                    <h5 class="card-title">ផលិតផលទី ៣</h5>
                    <p class="card-text">ការពិពណ៌នាខ្លីៗអំពីផលិតផលទី ៣ ។</p>
                    <p class="card-text"><small class="text-muted">បានធ្វើបច្ចុប្បន្នភាពចុងក្រោយ 10 នាទីមុន</small></p>
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
      question: 'តើ Class មួយណាដែលជាមូលដ្ឋានសម្រាប់បង្កើត Card នៅក្នុង Bootstrap?',
      options: ['`box`', '`panel`', '`card`', '`container`'],
      correct: 2,
      explanation: 'Class `card` គឺជា Class មូលដ្ឋានសម្រាប់បង្កើត Card ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ដាក់មាតិកាសំខាន់របស់ Card?',
      options: ['`card-content`', '`card-body`', '`card-main`', '`card-area`'],
      correct: 1,
      explanation: 'Class `card-body` ត្រូវបានប្រើសម្រាប់ដាក់មាតិកាសំខាន់របស់ Card ។'
    },
    {
      question: 'ដើម្បីដាក់រូបភាពនៅខាងលើ Card តើ Class មួយណាដែលត្រូវប្រើ?',
      options: ['`card-img-top`', '`card-image`', '`img-card`', '`top-img`'],
      correct: 0,
      explanation: 'Class `card-img-top` ត្រូវបានប្រើដើម្បីដាក់រូបភាពនៅខាងលើ Card ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ចំណងជើង Card?',
      options: ['`card-heading`', '`card-title`', '`card-header-text`', '`card-name`'],
      correct: 1,
      explanation: 'Class `card-title` ត្រូវបានប្រើសម្រាប់ចំណងជើង Card ។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់ផ្នែកខាងក្រោមនៃ Card?',
      options: ['`card-bottom`', '`card-footer`', '`card-end`', '`card-sub`'],
      correct: 1,
      explanation: 'Class `card-footer` ត្រូវបានប្រើសម្រាប់ផ្នែកខាងក្រោមនៃ Card ។'
    },
    {
      question: 'តើ Class `card-group` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីដាក់ Cards ក្នុងជួរឈរតែមួយ',
        'ដើម្បីដាក់ Cards ជាជួរដេកដែលមានទទឹង និងកម្ពស់ស្មើគ្នា',
        'ដើម្បីបន្ថែមគម្លាតរវាង Cards',
        'ដើម្បីធ្វើឱ្យ Cards មាន Responsive'
      ],
      correct: 1,
      explanation: 'Class `card-group` ត្រូវបានប្រើដើម្បីដាក់ Cards ជាជួរដេកដែលមានទទឹង និងកម្ពស់ស្មើគ្នា។'
    },
    {
      question: 'តើ Class `list-group-flush` ត្រូវបានប្រើសម្រាប់អ្វីនៅក្នុង Card?',
      options: [
        'ដើម្បីលាក់ List Group',
        'ដើម្បីបន្ថែម Border ជុំវិញ List Group',
        'ដើម្បីលុប Border ខាងក្រៅ និង Rounded Corners របស់ List Group',
        'ដើម្បីផ្លាស់ប្តូរពណ៌ List Group'
      ],
      correct: 2,
      explanation: 'Class `list-group-flush` ត្រូវបានប្រើដើម្បីលុប Border ខាងក្រៅ និង Rounded Corners របស់ List Group នៅពេលវាត្រូវបានដាក់នៅក្នុង Card ។'
    },
    {
      question: 'នៅក្នុង Bootstrap 5 តើ Class មួយណាដែលត្រូវបានណែនាំឱ្យប្រើជំនួស `card-deck`?',
      options: ['`card-row`', '`card-columns`', '`Grid System`', '`flex-cards`'],
      correct: 2,
      explanation: 'នៅក្នុង Bootstrap 5 គឺត្រូវបានណែនាំឱ្យប្រើ Grid System ជំនួស `card-deck` ។'
    },
    {
      question: 'តើ Class `h-100` ត្រូវបានប្រើសម្រាប់អ្វីនៅពេលប្រើ Cards ជាមួយ Grid System?',
      options: [
        'កំណត់កម្ពស់ Card ទៅ 100px',
        'ធ្វើឱ្យ Card មានកម្ពស់ 100% នៃ Parent Element',
        'ធ្វើឱ្យ Card មានទទឹង 100%',
        'បិទ Card'
      ],
      correct: 1,
      explanation: 'Class `h-100` ត្រូវបានប្រើដើម្បីធ្វើឱ្យ Card មានកម្ពស់ 100% នៃ Parent Element របស់វា ដើម្បីធានាថា Cards ក្នុងជួរដេកតែមួយមានកម្ពស់ស្មើគ្នា។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើសម្រាប់អត្ថបទនៅក្នុង Card?',
      options: ['`card-description`', '`card-paragraph`', '`card-text`', '`card-body-text`'],
      correct: 2,
      explanation: 'Class `card-text` ត្រូវបានប្រើសម្រាប់អត្ថបទនៅក្នុង Card ។'
    },
    {
      question: 'តើ `card-header` Class ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីដាក់រូបភាពនៅខាងលើ Card',
        'ដើម្បីបង្កើតចំណងជើង Card',
        'ដើម្បីបន្ថែមផ្នែកខាងលើសម្រាប់ Card',
        'ដើម្បីកំណត់ទំហំ Card'
      ],
      correct: 2,
      explanation: '`card-header` Class ត្រូវបានប្រើដើម្បីបន្ថែមផ្នែកខាងលើសម្រាប់ Card ដែលអាចផ្ទុកចំណងជើង ឬធាតុផ្សេងទៀត។'
    },
    {
      question: 'តើ Class `card-img-bottom` នឹងដាក់រូបភាពនៅកន្លែងណា?',
      options: [
        'នៅកណ្តាល Card',
        'នៅខាងលើ Card',
        'នៅខាងក្រោម Card',
        'នៅខាងឆ្វេង Card'
      ],
      correct: 2,
      explanation: 'Class `card-img-bottom` នឹងដាក់រូបភាពនៅខាងក្រោម Card ។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង `card-group` និងការប្រើ Grid System សម្រាប់ Cards?',
      options: [
        '`card-group` មិន Responsive ទេ',
        '`card-group` ធានាថា Cards មានកម្ពស់ស្មើគ្នាដោយស្វ័យប្រវត្តិ ខណៈ Grid System ត្រូវការ `h-100`',
        'Grid System មិនអាចដាក់ Cards ក្នុងជួរដេកបានទេ',
        '`card-group` ត្រូវបាន Deprecated នៅក្នុង Bootstrap 5'
      ],
      correct: 1,
      explanation: '`card-group` ត្រូវបានរចនាឡើងដើម្បីធានាថា Cards ទាំងអស់នៅក្នុងក្រុមមានកម្ពស់ស្មើគ្នាដោយស្វ័យប្រវត្តិ ខណៈពេលដែល Grid System ត្រូវការ Class ដូចជា `h-100` ដើម្បីសម្រេចបានដូចគ្នា។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើតទម្រង់ទំនាក់ទំនងសាមញ្ញ

បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ **Bootstrap CDN** ។

នៅក្នុងឯកសារនោះ សូមបង្កើត **Card Group** មួយដែលមាន **Cards ចំនួន 3** ។

Card នីមួយៗគួរតែមាន៖

1.  **រូបភាព** នៅខាងលើ (ប្រើ Placeholder Image ណាមួយ) ។
2.  **ចំណងជើង Card** (ឧទាហរណ៍៖ "សេវាកម្មទី ១", "សេវាកម្មទី ២", "សេវាកម្មទី ៣") ។
3.  **អត្ថបទខ្លីៗ** (Lorem ipsum) ។
4.  **ប៊ូតុង** "អានបន្ថែម" ។

ត្រូវប្រាកដថា **Cards ទាំងបីមានកម្ពស់ស្មើគ្នា** ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Cards Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>

    <div class="container mt-5">
        <h1>ការអនុវត្តន៍ Cards</h1>
        <div class="card-group">
            <div class="card">
                <img src="https://placehold.co/400x250/ADD8E6/000000?text=Service+1" class="card-img-top" alt="Service 1">
                <div class="card-body">
                    <h5 class="card-title">សេវាកម្មទី ១</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" class="btn btn-primary">អានបន្ថែម</a>
                </div>
            </div>
            <div class="card">
                <img src="https://placehold.co/400x250/ADD8E6/000000?text=Service+2" class="card-img-top" alt="Service 2">
                <div class="card-body">
                    <h5 class="card-title">សេវាកម្មទី ២</h5>
                    <p class="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#" class="btn btn-primary">អានបន្ថែម</a>
                </div>
            </div>
            <div class="card">
                <img src="https://placehold.co/400x250/ADD8E6/000000?text=Service+3" class="card-img-top" alt="Service 3">
                <div class="card-body">
                    <h5 class="card-title">សេវាកម្មទី ៣</h5>
                    <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a href="#" class="btn btn-primary">អានបន្ថែម</a>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>`
  }
};

export default BootstrapLesson2_4Content;