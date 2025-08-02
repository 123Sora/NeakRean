// src/components/lessons/css/CSSLesson2_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson2_1Content: LessonContent = {
  title: 'CSS Basic Selectors (ឧបករណ៍ជ្រើសរើសមូលដ្ឋាន)',
  objectives: [
    'ពង្រឹងការយល់ដឹងពី Element, Class, និង ID Selectors',
    'ស្វែងយល់ពី Universal Selector (*)',
    'រៀនពីរបៀបប្រើ Grouping Selector ដើម្បីអនុវត្ត Styles ដូចគ្នា',
    'យល់ដឹងពីសារៈសំខាន់នៃ Specificity ក្នុងការអនុវត្ត Styles'
  ],
  content: `
# CSS Basic Selectors (ឧបករណ៍ជ្រើសរើសមូលដ្ឋាន) 🎯

 ---

យើងបានរៀនអំពី Element, Class, និង ID Selectors រួចហើយ។ នៅក្នុងមេរៀននេះ យើងនឹងពង្រឹងការយល់ដឹងរបស់យើង និងស្វែងយល់បន្ថែមអំពី Universal Selector និង Grouping Selector ដែលជាមូលដ្ឋានគ្រឹះដ៏សំខាន់សម្រាប់ជ្រើសរើស Element HTML។

---

## 1. Element Selector (Type Selector) 🏷️

**Element Selector** ជ្រើសរើស Element HTML ទាំងអស់ដែលមានឈ្មោះ Tag ដូចគ្នា (ឧទាហរណ៍: \`p\`, \`h1\`, \`div\`, \`a\`)។ វាកំណត់រចនាប័ទ្មសម្រាប់ប្រភេទ Element ជាក់លាក់មួយ។

\`\`\`css
/* ជ្រើសរើសគ្រប់ Element <p> ទាំងអស់ */
p {
  color: #333; /* កំណត់ពណ៌អត្ថបទទៅជាប្រផេះចាស់ */
  font-size: 16px; /* កំណត់ទំហំអក្សរ */
}

/* ជ្រើសរើសគ្រប់ Element <h1> ទាំងអស់ */
h1 {
  text-align: center; /* តម្រឹមអត្ថបទទៅកណ្តាល */
  color: #0056b3; /* កំណត់ពណ៌អត្ថបទទៅជាខៀវចាស់ */
}
\`\`\`

---

## 2. Class Selector 🧑‍🤝‍🧑

**Class Selector** ជ្រើសរើស Element HTML ណាដែលបានកំណត់ \`class\` attribute ជាក់លាក់។ Class មួយអាចត្រូវបានប្រើលើ Element ច្រើន និង Element មួយក៏អាចមាន Class ច្រើនផងដែរ។ Class Selector ចាប់ផ្តើមជាមួយសញ្ញា **\`.\` (dot)** រួចតាមដោយឈ្មោះ Class។

\`\`\`html
<p class="intro">នេះជាកថាខណ្ឌណែនាំ។</p>
<h2 class="section-title">ចំណងជើងផ្នែក</h2>
<div class="card product-item">នេះជាកាតផលិតផល។</div>
\`\`\`

\`\`\`css
/* ជ្រើសរើសគ្រប់ Element ដែលមាន class="intro" */
.intro {
  color: green; /* ពណ៌អក្សរបៃតង */
  font-weight: bold; /* ធ្វើឱ្យអក្សរដិត */
}

/* ជ្រើសរើសគ្រប់ Element ដែលមាន class="section-title" */
.section-title {
  border-bottom: 2px solid #ccc; /* បន្ថែមបន្ទាត់ពីក្រោម */
  padding-bottom: 5px; /* ចន្លោះខាងក្រោមបន្ទាត់ */
}

/* Element មួយអាចមាន Class ច្រើន (ឧទាហរណ៍: .card.product-item) */
.card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* បន្ថែមស្រមោល */
  border-radius: 8px; /* ធ្វើឱ្យជ្រុងមូល */
  padding: 20px;
}
\`\`\`

---

## 3. ID Selector 🆔

**ID Selector** ជ្រើសរើស Element HTML តែមួយគត់ដែលមាន \`id\` attribute ជាក់លាក់។ ID គួរតែមានតែមួយគត់នៅក្នុងឯកសារ HTML ទាំងមូល (មិនត្រូវមាន ID ដូចគ្នាច្រើនដងទេ)។ ID Selector ចាប់ផ្តើមជាមួយសញ្ញា **\`#\` (hash)** រួចតាមដោយឈ្មោះ ID។

\`\`\`html
<div id="main-header">នេះជាបឋមកថាធំ។</div>
<p id="contact-info">ព័ត៌មានទំនាក់ទំនង។</p>
\`\`\`

\`\`\`css
/* ជ្រើសរើស Element ដែលមាន id="main-header" */
#main-header {
  background-color: #f8f9fa; /* ពណ៌ផ្ទៃខាងក្រោយ */
  color: #333; /* ពណ៌អក្សរ */
  padding: 15px;
  text-align: center;
}

/* ជ្រើសរើស Element ដែលមាន id="contact-info" */
#contact-info {
  font-style: italic; /* ធ្វើឱ្យអក្សរទ្រេត */
  border: 1px dashed blue; /* បន្ថែម Border បន្ទាត់ដាច់ៗ */
}
\`\`\`

---

## 4. Universal Selector (Wildcard Selector) ⭐

**Universal Selector** តំណាងដោយសញ្ញា **\`*\` (asterisk)** ជ្រើសរើស Element HTML ទាំងអស់នៅលើទំព័រ។ វាត្រូវបានប្រើដើម្បីអនុវត្តរចនាប័ទ្មមូលដ្ឋាន ឬកំណត់រចនាប័ទ្មឡើងវិញ (reset) សម្រាប់ Element ទាំងអស់។

\`\`\`css
/* កំណត់ margin និង padding សម្រាប់ Element ទាំងអស់ទៅជា 0 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* រួមបញ្ចូល padding និង border នៅក្នុងទទឹង/កម្ពស់សរុប */
}

/* កំណត់ font family លំនាំដើមសម្រាប់គ្រប់ Element ទាំងអស់ */
* {
  font-family: 'Roboto', sans-serif;
}
\`\`\`
> **ចំណាំ:** ការប្រើប្រាស់ Universal Selector ច្រើនពេកអាចធ្វើឱ្យ Website របស់អ្នកយឺត ព្រោះ Browser ត្រូវអនុវត្ត Styles ទៅកាន់ Element ទាំងអស់។ គួរប្រើវាតែនៅពេលចាំបាច់ប៉ុណ្ណោះ។

---

## 5. Grouping Selector (ឧបករណ៍ជ្រើសរើសជាក្រុម) ➕

**Grouping Selector** ត្រូវបានប្រើដើម្បីអនុវត្តរចនាប័ទ្មដូចគ្នាទៅកាន់ Element ច្រើនដោយសរសេរ Selector តែម្តង។ អ្នកគ្រាន់តែបំបែក Selector នីមួយៗដោយសញ្ញា **\`,\` (comma)** ។ នេះជួយកាត់បន្ថយការសរសេរកូដម្តងហើយម្តងទៀត និងធ្វើឱ្យ CSS របស់អ្នកមានរបៀបរៀបរយ។

\`\`\`css
/* អនុវត្ត Styles ដូចគ្នាទៅ h1, h2, និង p */
h1, h2, p {
  font-family: Arial, sans-serif;
  line-height: 1.5;
}

/* កំណត់ពណ៌អត្ថបទទៅជា navy សម្រាប់ h1, h2, និង h3 */
h1, h2, h3 {
  color: navy;
}

/* កំណត់ border សម្រាប់ .box, .container, និង #main-content */
.box, .container, #main-content {
  border: 1px solid #ddd;
  padding: 10px;
}
\`\`\`

---

## Specificity (ភាពជាក់លាក់) 📈

**Specificity** គឺជាក្បួនដែល Browser ប្រើដើម្បីកំណត់ថា CSS Rule មួយណាដែលសំខាន់ជាង ហើយគួរត្រូវបានអនុវត្តទៅកាន់ Element មួយ នៅពេលដែលមាន Rule ច្រើនកំណត់រចនាប័ទ្មដូចគ្នាសម្រាប់ Element នោះ។ Rule ដែលមាន Specificity ខ្ពស់ជាងនឹងត្រូវបានអនុវត្ត។

លំដាប់ Specificity (ពីទាបទៅខ្ពស់):

1.  **Element Selectors** (\`p\`, \`div\`, \`h1\`) និង Universal Selector (\`*\`)
2.  **Class Selectors** (\`.my-class\`), Attribute Selectors (\`[type="text"]\`), និង Pseudo-classes (\`:hover\`)
3.  **ID Selectors** (\`#my-id\`)
4.  **Inline Styles** (\`<p style="color: red;">\`) - មាន Specificity ខ្ពស់បំផុត។

\`\`\`css
p { /* Specificity ទាបបំផុត */
  color: blue; /* នឹងត្រូវជំនួសដោយ Rule ខាងក្រោម */
}

.my-text { /* Specificity ខ្ពស់ជាង Element */
  color: green; /* នឹងត្រូវជំនួសដោយ Rule ខាងក្រោម */
}

#unique-paragraph { /* Specificity ខ្ពស់បំផុតក្នុងចំណោម Selectors */
  color: red; /* ពណ៌នេះនឹងត្រូវបានអនុវត្ត */
}
\`\`\`

\`\`\`html
<p id="unique-paragraph" class="my-text">នេះជាកថាខណ្ឌមួយ។</p>
\`\`\`
ក្នុងឧទាហរណ៍នេះ ទោះបីជា \`p\` មានពណ៌ខៀវ និង \`.my-text\` មានពណ៌បៃតងក៏ដោយ ក៏ \`#unique-paragraph\` ដែលមានពណ៌ក្រហមនឹងត្រូវបានអនុវត្ត ព្រោះ ID Selector មាន Specificity ខ្ពស់ជាងគេ។

---
> **គន្លឹះ:** ការយល់ដឹងពី Selectors ផ្សេងៗគ្នា និង Specificity គឺជាមូលដ្ឋានគ្រឹះដ៏សំខាន់ក្នុងការសរសេរ CSS ដែលមានប្រសិទ្ធភាព និងអាចគ្រប់គ្រងបាន។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ Basic Selectors</h3>
<style>
/* Universal Selector: Reset default margin and padding for all elements */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Element Selector: Styling all paragraphs */
p {
  font-family: 'Verdana', sans-serif;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.6;
}

/* Class Selector: For highlighted text */
.highlight {
  background-color: #fffacd; /* lightyellow */
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 3px;
}

/* ID Selector: For a unique main section */
#main-content {
  background-color: #e9ecef; /* light gray background */
  padding: 20px;
  margin: 20px auto; /* Center the div with auto margins */
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

/* Grouping Selector: Applying similar styles to multiple headings */
h2, h3, h4 {
  color: #007bff; /* Blue color */
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>

<div id="main-content">
  <h2>ចំណងជើងធំ</h2>
  <p>នេះជាកថាខណ្ឌធម្មតាដែលត្រូវបានរចនាម៉ូតដោយ <span class="highlight">Element Selector (<code>p</code>)</span>។</p>
  <p>យើងអាចប្រើ <span class="highlight">Class Selector (<code>.highlight</code>)</span> ដើម្បីបន្លិចផ្នែកណាមួយនៃអត្ថបទ។</p>
  <h3>ចំណងជើងរង</h3>
  <p>Element ដែលមាន <span class="highlight">ID Selector (<code>#main-content</code>)</span> ទទួលបានរចនាប័ទ្មពិសេសនេះ។</p>
  <h4>ចំណងជើងតូច</h4>
  <p>សូមកត់សម្គាល់ពីរបៀបដែល <span class="highlight">Grouping Selector (<code>h2, h3, h4</code>)</span> ជួយកំណត់ពណ៌សម្រាប់ចំណងជើងជាច្រើន។</p>
</div>

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Basic Selectors Example</title>
  <style>
    /* Universal Selector */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* Element Selector */
    p {
      font-family: 'Verdana', sans-serif;
      color: #555;
      margin-bottom: 10px;
      line-height: 1.6;
    }

    /* Class Selector */
    .highlight {
      background-color: #fffacd;
      font-weight: bold;
      padding: 2px 5px;
      border-radius: 3px;
    }

    /* ID Selector */
    #main-content {
      background-color: #e9ecef;
      padding: 20px;
      margin: 20px auto;
      max-width: 800px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    /* Grouping Selector */
    h2, h3, h4 {
      color: #007bff;
      margin-top: 15px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div id="main-content">
    <h2>ចំណងជើងធំ</h2>
    <p>នេះជាកថាខណ្ឌធម្មតាដែលត្រូវបានរចនាម៉ូតដោយ <span class="highlight">Element Selector (<code>p</code>)</span>។</p>
    <p>យើងអាចប្រើ <span class="highlight">Class Selector (<code>.highlight</code>)</span> ដើម្បីបន្លិចផ្នែកណាមួយនៃអត្ថបទ។</p>
    <h3>ចំណងជើងរង</h3>
    <p>Element ដែលមាន <span class="highlight">ID Selector (<code>#main-content</code>)</span> ទទួលបានរចនាប័ទ្មពិសេសនេះ។</p>
    <h4>ចំណងជើងតូច</h4>
    <p>សូមកត់សម្គាល់ពីរបៀបដែល <span class="highlight">Grouping Selector (<code>h2, h3, h4</code>)</span> ជួយកំណត់ពណ៌សម្រាប់ចំណងជើងជាច្រើន។</p>
  </div>
</body>
</html>
\`\`\`

\`\`\`css
/* Universal Selector: Reset margin and padding for all elements */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Element Selector: Styling all <p> elements */
p {
  font-family: 'Verdana', sans-serif;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.6;
}

/* Class Selector: For any element with class="highlight" */
.highlight {
  background-color: #fffacd; /* lightyellow */
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 3px;
}

/* ID Selector: For the specific element with id="main-content" */
#main-content {
  background-color: #e9ecef;
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

/* Grouping Selector: Applying styles to h2, h3, and h4 elements */
h2, h3, h4 {
  color: #007bff;
  margin-top: 15px;
  margin-bottom: 10px;
}
\`\`\`
`
  ],
  quiz: [
     {
      question: 'តើ Selector មួយណាដែលជ្រើសរើស Element HTML ទាំងអស់នៅលើទំព័រ?',
      options: ['Element Selector', 'Class Selector', 'ID Selector', 'Universal Selector'],
      correct: 3,
      explanation: 'Universal Selector (*) ជ្រើសរើស Element HTML ទាំងអស់នៅលើទំព័រ។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការប្រើប្រាស់ Grouping Selector?',
      options: [
        'បង្កើន Specificity របស់ Rule',
        'អនុញ្ញាតឱ្យ Element មួយមាន ID ច្រើន',
        'អនុវត្តរចនាប័ទ្មដូចគ្នាទៅកាន់ Element ច្រើនដោយសរសេរកូដម្តង',
        'ជ្រើសរើស Element កូនរបស់ Element ផ្សេងទៀត'
      ],
      correct: 2,
      explanation: 'Grouping Selector (បំបែកដោយសញ្ញាក្បៀស) អនុញ្ញាតឱ្យអ្នកអនុវត្តរចនាប័ទ្មដូចគ្នាទៅកាន់ Selector ច្រើនដោយមិនចាំបាច់សរសេរកូដម្តងហើយម្តងទៀត។'
    },
    {
      question: 'ប្រសិនបើអ្នកមាន Rule ពីរដែលកំណត់ពណ៌អត្ថបទសម្រាប់ Element ដូចគ្នា មួយដោយប្រើ Class Selector និងមួយទៀតដោយប្រើ ID Selector តើ Rule មួយណាដែលមានអាទិភាព?',
      options: ['Class Selector', 'ID Selector', 'Rule ដែលបានសរសេរមុន', 'Rule ដែលបានសរសេរក្រោយ'],
      correct: 1,
      explanation: 'ID Selector មាន Specificity ខ្ពស់ជាង Class Selector ដូច្នេះ Rule របស់ ID នឹងមានអាទិភាព។'
    },
    {
      question: 'តើ Selector ប្រភេទណាដែលមាន Specificity ទាបបំផុតក្នុងចំណោម Element, Class, និង ID Selectors?',
      options: ['Element Selector', 'Class Selector', 'ID Selector', 'Universal Selector'],
      correct: 0,
      explanation: 'Element Selector មាន Specificity ទាបបំផុតក្នុងចំណោម Element, Class, និង ID Selectors ។ Universal Selector (*) គឺទាបជាង Element Selector ទៀត។'
    },
    {
      question: 'តើការប្រើប្រាស់ Universal Selector ច្រើនពេកអាចបណ្តាលឱ្យមានបញ្ហាអ្វី?',
      options: [
        'ធ្វើឱ្យ Website យឺត',
        'ធ្វើឱ្យ Browser Crash',
        'ធ្វើឱ្យ Font មិនដំណើរការ',
        'ធ្វើឱ្យ HTML មិនត្រឹមត្រូវ'
      ],
      correct: 0,
      explanation: 'ការប្រើប្រាស់ Universal Selector ច្រើនពេកអាចធ្វើឱ្យ Website របស់អ្នកយឺត ព្រោះ Browser ត្រូវដំណើរការ Rule នោះសម្រាប់ Element ទាំងអស់។'
    },
    {
      question: 'តើ Selector `p, h1, .info` គឺជាឧទាហរណ៍នៃ Selector ប្រភេទណា?',
      options: ['Element Selector', 'Class Selector', 'ID Selector', 'Grouping Selector'],
      correct: 3,
      explanation: 'នេះគឺជាឧទាហរណ៍នៃ Grouping Selector ដែលអនុវត្ត Styles ទៅកាន់ Element <p>, Element <h1>, និង Element ដែលមាន class "info" ។'
    },
    {
      question: 'តើ Selector មួយណាដែលគួរប្រើសម្រាប់ Element ដែលមានតែមួយគត់នៅលើទំព័រ?',
      options: ['Element Selector', 'Class Selector', 'ID Selector', 'Grouping Selector'],
      correct: 2,
      explanation: 'ID Selector ត្រូវបានរចនាឡើងសម្រាប់ Element ដែលមានលក្ខណៈពិសេស និងមានតែមួយគត់នៅលើទំព័រ។'
    },
    // Start of 18 new questions
    {
      question: 'តើ Selector `.product-card` គឺជាឧទាហរណ៍នៃ Selector ប្រភេទណា?',
      options: ['Element Selector', 'Class Selector', 'ID Selector', 'Universal Selector'],
      correct: 1,
      explanation: '`.product-card` ចាប់ផ្តើមដោយសញ្ញា `.` ដែលជាលក្ខណៈរបស់ Class Selector។'
    },
    {
      question: 'តើ Selector `div` ប្រើសម្រាប់ជ្រើសរើសអ្វី?',
      options: ['Element តែមួយគត់ដែលមាន ID "div"', 'គ្រប់ Element `<div`> ទាំងអស់', 'Element ដែលមាន class "div"', 'គ្រប់ Element ទាំងអស់'],
      correct: 1,
      explanation: '`div` គឺជា Element Selector ដែលជ្រើសរើសគ្រប់ Element `<div>` ទាំងអស់។'
    },
    {
      question: 'តើ Selector `#header` តំណាងឱ្យអ្វី?',
      options: ['គ្រប់ Element ដែលមាន class "header"', 'គ្រប់ Element ដែលមានឈ្មោះ tag "header"', 'Element តែមួយគត់ដែលមាន ID "header"', 'គ្រប់ Element ទាំងអស់ដែលមាន attribute "header"'],
      correct: 2,
      explanation: '`#header` ចាប់ផ្តើមដោយសញ្ញា `#` ដែលជាលក្ខណៈរបស់ ID Selector ហើយត្រូវបានប្រើសម្រាប់ Element តែមួយគត់។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់កំណត់រចនាប័ទ្មអត្ថបទធម្មតាទាំងអស់នៅក្នុង website របស់អ្នក តើ Selector ប្រភេទណាដែលសមរម្យជាងគេ?',
      options: ['ID Selector', 'Class Selector', 'Element Selector', 'Universal Selector'],
      correct: 2,
      explanation: 'Element Selector (ឧទាហរណ៍: `p`) គឺសមរម្យបំផុតសម្រាប់ការកំណត់រចនាប័ទ្ម Element ប្រភេទណាមួយ។'
    },
    {
      question: 'តើ Selector `*, p, h1` នឹងអនុវត្ត Styles ទៅកាន់ Element ណាខ្លះ?',
      options: ['គ្រប់ Element ទាំងអស់', 'គ្រប់ Element `<p>` និង `<h1>` ប៉ុណ្ណោះ', 'គ្រប់ Element ទាំងអស់ រួមទាំង Element `<p>` និង `<h1>`', 'គ្មាន Element ណាទេ'],
      correct: 2,
      explanation: 'នេះគឺជា Grouping Selector ដែលរួមបញ្ចូល Universal Selector (`*`) ដែលជ្រើសរើសគ្រប់ Element ទាំងអស់ រួមទាំង `p` និង `h1`។'
    },
    {
      question: 'តើ Specificity របស់ `p` ប្រៀបធៀបនឹង `.text` យ៉ាងដូចម្តេច?',
      options: ['`p` មាន Specificity ខ្ពស់ជាង', '`.text` មាន Specificity ខ្ពស់ជាង', 'ពួកវាមាន Specificity ស្មើគ្នា', 'វាមិនអាចប្រៀបធៀបបានទេ'],
      correct: 1,
      explanation: 'Class Selector (`.text`) មាន Specificity ខ្ពស់ជាង Element Selector (`p`)។'
    },
    {
      question: 'តើអ្នកនឹងប្រើ Selector ប្រភេទណាដើម្បីកំណត់រចនាប័ទ្មប៊ូតុង "submit" ទាំងអស់?',
      options: ['ID Selector', 'Class Selector', 'Element Selector', 'Universal Selector'],
      correct: 1,
      explanation: 'Class Selector គឺសមរម្យបំផុតសម្រាប់ការកំណត់រចនាប័ទ្ម Element ច្រើនដែលចែករំលែកលក្ខណៈពិសេសមួយ ដូចជាប៊ូតុងប្រភេទដូចគ្នា។'
    },
    {
      question: 'តើ Selector `#navigation-menu` មាន Specificity ខ្ពស់ជាង `.active-link` ឬទាបជាង?',
      options: ['ខ្ពស់ជាង', 'ទាបជាង', 'ស្មើគ្នា', 'អាស្រ័យលើទីតាំងក្នុង CSS'],
      correct: 0,
      explanation: 'ID Selector (`#navigation-menu`) មាន Specificity ខ្ពស់ជាង Class Selector (`.active-link`)។'
    },
    {
      question: 'តើ Inline Styles មាន Specificity កម្រិតណា?',
      options: ['ទាបបំផុត', 'ទាបជាងគេទីពីរ', 'ខ្ពស់បំផុត', 'ស្មើនឹង ID Selector'],
      correct: 2,
      explanation: 'Inline Styles មាន Specificity ខ្ពស់បំផុត។'
    },
    {
      question: 'ការកំណត់ `margin: 0; padding: 0;` សម្រាប់គ្រប់ Element ទាំងអស់ គឺជារបៀបប្រើប្រាស់ Selector ប្រភេទណា?',
      options: ['Element Selector', 'Class Selector', 'ID Selector', 'Universal Selector'],
      correct: 3,
      explanation: 'នេះគឺជារបៀបប្រើប្រាស់ Universal Selector (`*`) ដើម្បីកំណត់រចនាប័ទ្មមូលដ្ឋានសម្រាប់គ្រប់ Element។'
    },
    {
      question: 'តើ Class Selector អាចត្រូវបានប្រើនៅលើ Element ច្រើនបានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែលើ Element មួយប្រភេទប៉ុណ្ណោះ', 'បានតែក្នុងករណីពិសេស'],
      correct: 0,
      explanation: 'Class Selector ត្រូវបានរចនាឡើងដើម្បីប្រើប្រាស់លើ Element ច្រើន។'
    },
    {
      question: 'តើ ID មួយអាចត្រូវបានប្រើលើ Element ច្រើននៅក្នុងឯកសារ HTML ដូចគ្នាបានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែបើ Selector ខុសគ្នា', 'បានតែបើវាជា Class ផងដែរ'],
      correct: 1,
      explanation: 'ID គួរតែមានតែមួយគត់នៅក្នុងឯកសារ HTML ទាំងមូល។'
    },
    {
      question: 'តើ Selector `h1, .page-title, #main-heading` ជាប្រភេទ Selector រួមបញ្ចូលគ្នាអ្វី?',
      options: ['Element Selector', 'Class Selector', 'ID Selector', 'Grouping Selector'],
      correct: 3,
      explanation: 'នេះគឺជាឧទាហរណ៍នៃ Grouping Selector ដែលអនុវត្ត Styles ទៅកាន់ Selector ច្រើនប្រភេទ។'
    },
    {
      question: 'តើគោលបំណងសំខាន់នៃ Specificity នៅក្នុង CSS គឺជាអ្វី?',
      options: [
        'កំណត់លំដាប់នៃ Element នៅក្នុង HTML',
        'កំណត់ Rule មួយណាដែលគួរត្រូវបានអនុវត្តនៅពេលមានជម្លោះ',
        'បង្កើនល្បឿននៃការផ្ទុក Website',
        'ធ្វើឱ្យ CSS កូដខ្លីជាងមុន'
      ],
      correct: 1,
      explanation: 'Specificity គឺជាក្បួនដែល Browser ប្រើដើម្បីកំណត់ថា CSS Rule មួយណាដែលសំខាន់ជាងនៅពេលមានជម្លោះ។'
    },
    {
      question: 'តើ Selector `a` គឺជាប្រភេទ Selector អ្វី?',
      options: ['Element Selector', 'Class Selector', 'ID Selector', 'Pseudo-class'],
      correct: 0,
      explanation: '`a` គឺជា Element Selector ដែលជ្រើសរើស Element `<a>` ទាំងអស់។'
    },
    {
      question: 'ប្រសិនបើ Element មួយមាន both `class="active"` និង `id="current"` ហើយ Rule ទាំងពីរកំណត់ `color` តើពណ៌មួយណាដែលនឹងបង្ហាញ?',
      options: ['ពណ៌ពី Class', 'ពណ៌ពី ID', 'ពណ៌ដែលត្រូវបានកំណត់មុនក្នុង CSS', 'ពណ៌ដែលត្រូវបានកំណត់ក្រោយក្នុង CSS'],
      correct: 1,
      explanation: 'ID Selector មាន Specificity ខ្ពស់ជាង Class Selector ដូច្នេះពណ៌ពី ID នឹងត្រូវបានអនុវត្ត។'
    },
    {
      question: 'តើការប្រើប្រាស់ Grouping Selector ជួយដល់អ្វីខ្លះក្នុងការសរសេរ CSS?',
      options: [
        'ធ្វើឱ្យកូដកាន់តែស្មុគស្មាញ',
        'កាត់បន្ថយការសរសេរកូដម្តងហើយម្តងទៀត',
        'បង្កើនទំហំ File CSS',
        'ធ្វើឱ្យ Browser ដំណើរការយឺត'
      ],
      correct: 1,
      explanation: 'Grouping Selector ជួយកាត់បន្ថយការសរសេរកូដម្តងហើយម្តងទៀត និងធ្វើឱ្យ CSS មានរបៀបរៀបរយ។'
    },
    {
      question: 'តើ Selector មួយណាដែលអ្នកនឹងប្រើដើម្បីកំណត់រចនាប័ទ្មសម្រាប់ចំណងជើងធំតែមួយគត់នៅលើទំព័ររបស់អ្នក?',
      options: ['Element Selector `h1`', 'Class Selector `.main-heading`', 'ID Selector `#main-heading`', 'Universal Selector `*`'],
      correct: 2,
      explanation: 'ID Selector គឺសមរម្យសម្រាប់ Element ដែលមានតែមួយគត់នៅលើទំព័រ។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមាន Element ដូចខាងក្រោម៖
1.  ចំណងជើង \`<h1>\` មួយ
2.  ចំណងជើង \`<h2>\` ពីរ
3.  កថាខណ្ឌ \`<p>\` បី (មួយក្នុងចំណោមនោះមាន class "note")
4.  \`<div>\` មួយដែលមាន ID "main-container"

សូមប្រើ **Internal CSS** ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  ប្រើ **Universal Selector** ដើម្បីកំណត់ \`margin\` និង \`padding\` របស់គ្រប់ Element ទាំងអស់ទៅជា \`0\` ហើយកំណត់ \`box-sizing\` ទៅជា \`border-box\`។
2.  ប្រើ **Element Selector** ដើម្បីកំណត់ពណ៌អក្សរ \`<h1>\` ទៅជា \`#3498db\` (ខៀវ) និងតម្រឹមអត្ថបទទៅកណ្តាល។
3.  ប្រើ **Grouping Selector** ដើម្បីកំណត់ពណ៌អក្សរ \`<h2>\` និង \`<p>\` ទៅជា \`#2c3e50\` (ប្រផេះចាស់) និង \`font-family\` ទៅជា \`'Arial', sans-serif\`។
4.  ប្រើ **Class Selector** ដើម្បីកំណត់ \`.note\` ឱ្យមាន \`background-color\` \`#f9f9c9\` (លឿងខ្ចី) និង \`padding\` \`10px\`។
5.  ប្រើ **ID Selector** ដើម្បីកំណត់ \`#main-container\` ឱ្យមាន \`border\` \`2px solid #ddd\`, \`padding\` \`20px\`, និង \`margin\` \`20px\`។`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Basic Selectors Lab</title>
  <style>
    /* 1. Universal Selector */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* 2. Element Selector for h1 */
    h1 {
      color: #3498db;
      text-align: center;
      margin-bottom: 20px;
    }

    /* 3. Grouping Selector for h2 and p */
    h2, p {
      color: #2c3e50;
      font-family: 'Arial', sans-serif;
      margin-bottom: 10px;
    }

    /* 4. Class Selector for .note */
    .note {
      background-color: #f9f9c9;
      padding: 10px;
      border-left: 5px solid #f39c12; /* Add a little left border for emphasis */
    }

    /* 5. ID Selector for #main-container */
    #main-container {
      border: 2px solid #ddd;
      padding: 20px;
      margin: 20px;
      background-color: #ffffff;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div id="main-container">
    <h1>មេរៀន CSS Basic Selectors</h1>
    <h2>ចំណងជើងរងទី ១</h2>
    <p>នេះជាកថាខណ្ឌទីមួយ ដែលបង្ហាញពីការប្រើប្រាស់ Element Selector និង Grouping Selector ។</p>
    <p class="note">នេះជាកថាខណ្ឌទីពីរដែលមាន Class "note" ដែលបង្ហាញពីការប្រើប្រាស់ Class Selector ។</p>
    <p>នេះជាកថាខណ្ឌទីបី ដែលបង្ហាញពីការអនុវត្ត Styles ធម្មតា។</p>
    <h2>ចំណងជើងរងទី ២</h2>
    <p>Element នេះស្ថិតនៅខាងក្នុង "main-container" ដែលត្រូវបានរចនាម៉ូតដោយ ID Selector ។</p>
  </div>
</body>
</html>`
  }
};

export default CSSLesson2_1Content;