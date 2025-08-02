// src/components/lessons/Lesson5_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const Lesson5_1: LessonContent = {
  title: 'ការណែនាំអំពី CSS (ដើម្បីរចនាម៉ូត)',
  objectives: [
    'យល់ពីអ្វីទៅជា CSS? (Cascading Style Sheets)',
    'តើ CSS ប្រើសម្រាប់អ្វី? (រចនាម៉ូតគេហទំព័រ)',
    'យល់ពីរបៀបភ្ជាប់ CSS ជាមួយ HTML (Inline, Internal, External CSS)',
    'ស្គាល់មូលដ្ឋានគ្រឹះនៃ CSS Syntax (Selector, Property, Value)'
  ],
  content: `
# ការណែនាំអំពី CSS 🎨

បន្ទាប់ពីបានរៀនពី HTML ដែលជាគ្រោងឆ្អឹងនៃគេហទំព័រ យើងនឹងចាប់ផ្តើមរៀនអំពី **CSS** ដែលជាអ្វីដែលធ្វើឱ្យគេហទំព័ររបស់យើងមើលទៅទាក់ទាញ និងស្រស់ស្អាត។

---

## 1. អ្វីទៅជា CSS? (Cascading Style Sheets) 🌊

**CSS** តំណាងឱ្យ **Cascading Style Sheets**។ វាគឺជាភាសាដែលប្រើដើម្បី **រចនាម៉ូត (style)** ឯកសារ HTML។ CSS ពិពណ៌នាអំពីរបៀបដែលធាតុ HTML គួរតែត្រូវបានបង្ហាញនៅលើអេក្រង់ លើក្រដាស ឬក្នុងមេឌៀផ្សេងទៀត។

គិតថា HTML គឺជា **គ្រោងឆ្អឹង** ឬ **រចនាសម្ព័ន្ធ** នៃផ្ទះមួយ។ CSS គឺជា **ការតុបតែងខាងក្នុង** ដូចជាពណ៌ជញ្ជាំង គ្រឿងសង្ហារឹម ទីតាំងបង្អួច ល។ វាបំបែកមាតិកា (HTML) ចេញពីរចនាបថ (CSS) ដែលធ្វើឱ្យគេហទំព័រងាយស្រួលក្នុងការគ្រប់គ្រង និងថែទាំ។

---

## 2. តើ CSS ប្រើសម្រាប់អ្វី? (រចនាម៉ូតគេហទំព័រ) ✨

CSS អាចប្រើដើម្បីគ្រប់គ្រងទិដ្ឋភាពទាំងអស់នៃ Layout គេហទំព័រ រួមមាន:

* **ពណ៌ (Colors):** អក្សរ ផ្ទៃខាងក្រោយ ។ល។
* **ពុម្ពអក្សរ (Fonts):** ទំហំអក្សរ ប្រភេទអក្សរ ទ្រង់ទ្រាយអក្សរ។
* **ចន្លោះ (Spacing):** Margin, Padding ។
* **ប្លង់ (Layout):** ទីតាំងធាតុ, Grid, Flexbox ។
* **ចលនា (Animations) និង ការផ្លាស់ប្តូរ (Transitions)។**
* **Responsive Design:** ធ្វើឱ្យគេហទំព័រមើលទៅល្អលើទំហំអេក្រង់ផ្សេងៗគ្នា។

---

## 3. របៀបភ្ជាប់ CSS ជាមួយ HTML (Inline, Internal, External CSS) 🔗

មាន ៣ វិធីសំខាន់ៗដើម្បីភ្ជាប់ CSS ទៅឯកសារ HTML:

1.  **Inline CSS:**
    ប្រើ attribute \`style\` ដោយផ្ទាល់នៅក្នុង HTML element។ នេះត្រូវបានណែនាំឱ្យប្រើសម្រាប់តែការរចនាម៉ូតតូចតាច ឬការធ្វើតេស្តប៉ុណ្ណោះ ព្រោះវាមិនបំបែកមាតិកាចេញពីរចនាបថ។

    \`\`\`html
    <p style="color: blue; font-size: 18px;">នេះជាអត្ថបទពណ៌ខៀវ និងទំហំ 18px</p>
    \`\`\`

2.  **Internal CSS (Embedded CSS):**
    ដាក់កូដ CSS នៅខាងក្នុង tag \`<style>\` នៅក្នុងផ្នែក \`<head>\` នៃឯកសារ HTML។ នេះមានប្រយោជន៍សម្រាប់ទំព័រតែមួយដែលមានរចនាបថតែមួយគត់។

    \`\`\`html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Internal CSS Example</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
            }
            h1 {
                color: purple;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>ស្វាគមន៍</h1>
        <p>នេះជាមេរៀន CSS ដំបូងរបស់ខ្ញុំ។</p>
    </body>
    </html>
    \`\`\`

3.  **External CSS (វិធីដែលណែនាំ):**
    ដាក់កូដ CSS ទាំងអស់នៅក្នុងឯកសារដាច់ដោយឡែកមួយដែលមានផ្នែកបន្ថែម \`.css\` (ឧទាហរណ៍: \`styles.css\`)។ បន្ទាប់មកភ្ជាប់ឯកសារ CSS នេះទៅឯកសារ HTML ដោយប្រើ tag \`<link>\` នៅក្នុងផ្នែក \`<head>\`។ នេះគឺជាវិធីដែលត្រូវបានណែនាំបំផុតព្រោះវាអនុញ្ញាតឱ្យអ្នក:

    * រក្សាកូដ HTML របស់អ្នកឱ្យស្អាត។
    * ផ្លាស់ប្តូររចនាបថនៃគេហទំព័រទាំងមូលដោយកែសម្រួលតែឯកសារ CSS មួយប៉ុណ្ណោះ។
    * ប្រើឯកសារ CSS ដូចគ្នាសម្រាប់ទំព័រ HTML ច្រើន។

    **HTML file (index.html):**
    \`\`\`html
    <!DOCTYPE html>
    <html>
    <head>
        <title>External CSS Example</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>ស្វាគមន៍</h1>
        <p>នេះជាមេរៀន CSS ដំបូងរបស់ខ្ញុំ។</p>
    </body>
    </html>
    \`\`\`

    **CSS file (styles.css):**
    \`\`\`css
    /* styles.css */
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #e0f7fa;
    }
    h1 {
        color: teal;
        text-align: left;
    }
    \`\`\`

---

## 4. មូលដ្ឋានគ្រឹះនៃ CSS Syntax (Selector, Property, Value) ✍️

ក្បួន CSS នីមួយៗមាន ៣ ផ្នែកសំខាន់ៗ:

* **Selector:** នេះគឺជានរណា (ឬអ្វី) ដែលអ្នកចង់រចនាម៉ូត។ វាអាចជាឈ្មោះ Tag (ឧ. \`p\`, \`h1\`), Class (ឧ. \`.my-class\`), ឬ ID (ឧ. \`#my-id\`)។
* **Property:** នេះគឺជាលក្ខណៈសម្បត្តិដែលអ្នកចង់ផ្លាស់ប្តូរ។ ឧទាហរណ៍: \`color\`, \`font-size\`, \`background-color\`។
* **Value:** នេះគឺជាតម្លៃដែលអ្នកចង់ផ្តល់ឱ្យ Property នោះ។ ឧទាហរណ៍: \`blue\`, \`16px\`, \`#f0f0f0\`។

\`\`\`css
selector {
    property: value;
    property: value;
}

/* Example: */
p {
    color: green;
    font-weight: bold;
}
\`\`\`

> **ចំណាំ:** ❗ CSS rules បញ្ចប់ដោយសញ្ញា **semicolon (\`;\`)** ហើយ declarations (property-value pairs) ត្រូវបានហ៊ុំព័ទ្ធដោយ **curly braces (\`{}\`)** ។

  `,
  examples: [
    `<p style="color:red;">អត្ថបទពណ៌ក្រហម</p>`,
    `<style>
  h1 { color: blue; }
</style>`,
    `<link rel="stylesheet" href="style.css">`
  ],
  quiz: [
    {
      question: 'តើ CSS មានន័យថាម៉េច?',
      options: [
        'Creative Style Sheets',
        'Cascading Style Sheets',
        'Computer Style Syntax',
        'Colorful Styling System'
      ],
      correct: 1,
      explanation: 'CSS មានន័យថា Cascading Style Sheets។'
    },
    {
      question: 'តើវិធីណាដែលត្រូវបានណែនាំបំផុតសម្រាប់ភ្ជាប់ CSS ជាមួយ HTML?',
      options: ['Inline CSS', 'Internal CSS', 'External CSS', 'JavaScript'],
      correct: 2,
      explanation: 'External CSS គឺជាវិធីដែលត្រូវបានណែនាំបំផុតសម្រាប់ភាពងាយស្រួលក្នុងការគ្រប់គ្រង និងថែទាំ។'
    },
    {
      question: 'តើផ្នែកណាមួយនៃ CSS Syntax ដែលបង្ហាញពីធាតុដែលអ្នកចង់រចនាម៉ូត?',
      options: ['Property', 'Value', 'Selector', 'Declaration'],
      correct: 2,
      explanation: 'Selector គឺជាផ្នែកដែលបង្ហាញពីធាតុ HTML ដែលអ្នកចង់រចនាម៉ូត។'
    },
    {
      question: 'តើ Attribute \`style\` ត្រូវបានប្រើសម្រាប់វិធីភ្ជាប់ CSS ប្រភេទណា?',
      options: ['External CSS', 'Internal CSS', 'Inline CSS', 'Embedded CSS'],
      correct: 2,
      explanation: '\`style\` attribute ត្រូវបានប្រើសម្រាប់ Inline CSS ដែលត្រូវបានដាក់ដោយផ្ទាល់នៅក្នុង HTML element។'
    },
    {
      question: 'តើ \`<link rel="stylesheet" href="styles.css">\` គួរដាក់នៅទីណា ក្នុងឯកសារ HTML?',
      options: ['<body>', '<head>', '<footer>', '<main>'],
      correct: 1,
      explanation: 'tag <link> សម្រាប់ភ្ជាប់ External CSS គួរតែដាក់នៅក្នុងផ្នែក <head> នៃឯកសារ HTML។'
    },
    {
      question: 'តើ CSS Property មួយណាដែលប្រើសម្រាប់កំណត់ពណ៌អត្ថបទ?',
      options: ['background-color', 'text-color', 'font-color', 'color'],
      correct: 3,
      explanation: 'Property "color" ត្រូវបានប្រើដើម្បីកំណត់ពណ៌អត្ថបទ។'
    },
    {
      question: 'តើ CSS ជួយអ្វីដល់គេហទំព័រ?',
      options: [
        'បង្កើតរចនាសម្ព័ន្ធគេហទំព័រ',
        'បន្ថែមមុខងារអន្តរកម្ម',
        'រចនាម៉ូត និងប្លង់គេហទំព័រ',
        'គ្រប់គ្រងទិន្នន័យពី Server'
      ],
      correct: 2,
      explanation: 'CSS ត្រូវបានប្រើដើម្បីរចនាម៉ូត និងគ្រប់គ្រងប្លង់រូបរាងនៃគេហទំព័រ។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការប្រើ External CSS?',
      options: [
        'ធ្វើឱ្យកូដ HTML ខ្លីជាងមុន',
        'ផ្លាស់ប្តូររចនាបថនៃគេហទំព័រទាំងមូលដោយងាយស្រួល',
        'បង្កើនល្បឿន JavaScript',
        'កាត់បន្ថយចំនួនរូបភាព'
      ],
      correct: 1,
      explanation: 'អត្ថប្រយោជន៍ចម្បងនៃ External CSS គឺអ្នកអាចផ្លាស់ប្តូររចនាបថនៃគេហទំព័រទាំងមូលដោយកែសម្រួលតែឯកសារ CSS មួយប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ Property និង Value នៅក្នុង CSS Rule ត្រូវបានបំបែកដោយសញ្ញាអ្វី?',
      options: [':', '=', '-', ';'],
      correct: 0,
      explanation: 'Property និង Value ត្រូវបានបំបែកដោយសញ្ញា colon (:) ។'
    },
    {
      question: 'តើការរចនាម៉ូតប្រភេទណាដែលត្រូវបានណែនាំឱ្យប្រើសម្រាប់តែការធ្វើតេស្ត ឬរចនាម៉ូតតូចតាច?',
      options: ['External CSS', 'Internal CSS', 'Inline CSS', 'Scripted CSS'],
      correct: 2,
      explanation: 'Inline CSS ត្រូវបានណែនាំឱ្យប្រើសម្រាប់តែការរចនាម៉ូតតូចតាច ឬការធ្វើតេស្តប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ \`background-color: #f0f0f0;\` ជាឧទាហរណ៍នៃអ្វីខ្លះនៅក្នុង CSS Syntax?',
      options: ['Selector និង Property', 'Property និង Value', 'Selector និង Value', 'Declaration និង Selector'],
      correct: 1,
      explanation: '\`background-color\` គឺជា Property និង \`#f0f0f0\` គឺជា Value។'
    },
    {
      question: 'តើ Tag HTML មួយណាដែលប្រើសម្រាប់បង្កប់ Internal CSS?',
      options: ['<link>', '<style>', '<css>', '<script>'],
      correct: 1,
      explanation: 'Internal CSS ត្រូវបានបង្កប់ដោយប្រើ Tag <style> នៅក្នុងផ្នែក <head>។'
    }
  ],
  lab: {
    task: 'បង្កើតឯកសារ HTML មួយដែលមានចំណងជើង H1 និងកថាខណ្ឌមួយ។ ប្រើ Internal CSS ដើម្បីកំណត់ពណ៌ចំណងជើងជាពណ៌ខៀវ និងពណ៌អត្ថបទកថាខណ្ឌជាពណ៌បៃតង។',
    solution: `<!DOCTYPE html>
<html>
<head>
    <title>លំហាត់ទី ១៤</title>
    <style>
        h1 {
            color: blue;
        }
        p {
            color: green;
        }
    </style>
</head>
<body>
    <h1>ចំណងជើងរបស់ខ្ញុំ</h1>
    <p>នេះជាកថាខណ្ឌដែលមានរចនាបថដោយ CSS។</p>
</body>
</html>`
  }
};
export default Lesson5_1;