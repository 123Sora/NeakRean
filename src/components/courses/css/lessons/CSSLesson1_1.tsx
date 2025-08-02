// src/components/lessons/css/CSSLesson1_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes'; // Adjust path if necessary

const CSSLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី CSS',
  objectives: [
    'យល់ដឹងពីគោលបំណង និងសារៈសំខាន់នៃ CSS',
    'ស្វែងយល់ពីរបៀបដែល CSS ត្រូវបានប្រើប្រាស់ដើម្បីរចនាម៉ូត HTML',
    'ដឹងពីគុណសម្បត្តិនៃការបំបែករចនាសម្ព័ន្ធ (HTML) និងរចនាប័ទ្ម (CSS)',
    'ស្គាល់ពីគំនិតមូលដ្ឋាននៃ Cascading Style Sheets'
  ],
  content: `
# ណែនាំអំពី CSS 🎨

---

CSS គឺជាអក្សរកាត់មកពីពាក្យ **Cascading Style Sheets**។ វាជាភាសាមួយដែលប្រើដើម្បីរចនាម៉ូត និងរៀបចំប្លង់ឯកសារ HTML។ ស្រមៃមើល HTML ជាគ្រោងឆ្អឹង ឬរចនាសម្ព័ន្ធនៃគេហទំព័រ ហើយ CSS គឺជាសម្លៀកបំពាក់ ពណ៌សម្បុរ និងការតុបតែងដែលធ្វើឱ្យគេហទំព័រនោះមើលទៅមានជីវិត និងទាក់ទាញ។

---

## តើ CSS ប្រើសម្រាប់អ្វី? 🤔

CSS ត្រូវបានប្រើដើម្បីកំណត់ពីរបៀបដែល Element របស់ HTML គួរតែបង្ហាញនៅលើអេក្រង់, លើក្រដាស, ឬនៅក្នុងប្រព័ន្ធផ្សព្វផ្សាយផ្សេងទៀត។ បើគ្មាន CSS គេហទំព័រនឹងមើលទៅសាមញ្ញបំផុត ដូចជាឯកសារអត្ថបទធម្មតា ពណ៌ខ្មៅលើផ្ទៃស។ CSS ផ្តល់នូវលទ្ធភាពយ៉ាងទូលំទូលាយក្នុងការគ្រប់គ្រង៖

* **ពណ៌ (Colors):** កំណត់ពណ៌អក្សរ, ពណ៌ផ្ទៃខាងក្រោយ, ពណ៌ព្រំដែន។
* **ពុម្ពអក្សរ (Fonts):** កំណត់ប្រភេទ, ទំហំ, ទម្ងន់ (bold/normal), និងរចនាប័ទ្មពុម្ពអក្សរ។
* **ចន្លោះ (Spacing):** កំណត់ចន្លោះរវាង Element (<code>margin</code>), ចន្លោះក្នុង Element (<code>padding</code>)។
* **ប្លង់ (Layout):** រៀបចំទីតាំង Element នានា ដូចជាការប្រើ Flexbox ឬ CSS Grid ដើម្បីបង្កើត Layout ដែលស្មុគស្មាញ។
* **Responsive Design:** ធ្វើឲ្យគេហទំព័រស្រួលមើលលើឧបករណ៍គ្រប់ប្រភេទ (កុំព្យូទ័រ, Tablet, ទូរស័ព្ទ) ដោយផ្លាស់ប្តូរ Layout តាមទំហំអេក្រង់។
* **ចលនា (Animations & Transitions):** បន្ថែមចលនា និងការផ្លាស់ប្តូរដោយរលូនដល់ Element។

---

## ឧទាហរណ៍មូលដ្ឋាននៃ CSS Syntax ✍️

CSS មានវាក្យសម្ព័ន្ធសាមញ្ញមួយ។ វាមាន **Selector** ដែលជ្រើសរើស Element HTML ដែលអ្នកចង់រចនាប័ទ្ម និង **Declaration Block** ដែលមាន Properties និង Values ដែលកំណត់រចនាប័ទ្មនោះ។

\`\`\`css
/* នេះជា CSS Comment */

body { /* Selector: ជ្រើសរើស Element <body> */
  font-family: Arial, sans-serif; /* Property: font-family, Value: Arial, sans-serif */
  background-color: #f4f4f4; /* Property: background-color, Value: #f4f4f4 */
}

h1 { /* Selector: ជ្រើសរើស Element <h1> */
  color: blue; /* Property: color, Value: blue */
  text-align: center; /* Property: text-align, Value: center */
}

p { /* Selector: ជ្រើសរើស Element <p> */
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid green; /* បន្ថែមព្រំដែន */
  padding: 10px; /* បន្ថែមចន្លោះខាងក្នុង */
}
\`\`\`

ការប្រើប្រាស់ CSS ជួយឱ្យយើងបំបែករចនាសម្ព័ន្ធ (HTML) ចេញពីរចនាប័ទ្ម (CSS) ដែលធ្វើឲ្យ Code កាន់តែងាយស្រួលក្នុងការគ្រប់គ្រង ថែទាំ និងអភិវឌ្ឍ។ វាអនុញ្ញាតឱ្យអ្នកផ្លាស់ប្តូររូបរាងគេហទំព័រទាំងមូល ដោយគ្រាន់តែកែប្រែ File CSS តែមួយ។

---

> **គន្លឹះ:** ការរៀន CSS នឹងបើកទ្វារឱ្យអ្នកបង្កើតគេហទំព័រដែលមិនត្រឹមតែដំណើរការប៉ុណ្ណោះទេ ថែមទាំងមើលទៅស្រស់ស្អាតទៀតផង!
`,
  examples: [
    `### ឧទាហរណ៍ទី ១: ការប្តូរពណ៌អក្សរ និងផ្ទៃខាងក្រោយ

<p style="color: purple; background-color: #e0ffff; padding: 5px;">
  នេះជាអក្សរពណ៌ស្វាយ ជាមួយផ្ទៃខាងក្រោយពណ៌ខៀវខ្ចី។
</p>

\`\`\`html
<p style="color: purple; background-color: #e0ffff; padding: 5px;">
  នេះជាអក្សរពណ៌ស្វាយ ជាមួយផ្ទៃខាងក្រោយពណ៌ខៀវខ្ចី។
</p>
\`\`\`
`,
    `### ឧទាហរណ៍ទី ២: ការប្តូរពុម្ពអក្សរ និងទំហំ

<span style="font-family: 'Times New Roman', serif; font-size: 20px; font-weight: bold;">
  អត្ថបទនេះមានពុម្ពអក្សរ Times New Roman ទំហំ 20px និងដិត។
</span>

\`\`\`html
<span style="font-family: 'Times New Roman', serif; font-size: 20px; font-weight: bold;">
  អត្ថបទនេះមានពុម្ពអក្សរ Times New Roman ទំហំ 20px និងដិត។
</span>
\`\`\`
`,
    `### ឧទាហរណ៍ទី ៣: ការប្រើប្រាស់ Margin និង Padding

<div style="background-color: #ccffcc; border: 2px solid green; margin: 15px; padding: 20px;">
  <p>នេះជាប្រអប់មួយដែលមាន Margin 15px និង Padding 20px ។</p>
</div>

\`\`\`html
<div style="background-color: #ccffcc; border: 2px solid green; margin: 15px; padding: 20px;">
  <p>នេះជាប្រអប់មួយដែលមាន Margin 15px និង Padding 20px ។</p>
</div>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ CSS ជាអក្សរកាត់របស់អ្វី?',
      options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
      correct: 1,
      explanation: 'CSS តំណាងឲ្យ Cascading Style Sheets ដែលជាភាសាសម្រាប់រចនាម៉ូតគេហទំព័រ។'
    },
    {
      question: 'តើគោលបំណងចម្បងរបស់ CSS គឺអ្វី?',
      options: [
        'បង្កើតរចនាសម្ព័ន្ធមាតិកាគេហទំព័រ',
        'គ្រប់គ្រងអាកប្បកិរិយាអន្តរកម្មរបស់គេហទំព័រ',
        'រចនាម៉ូត និងរៀបចំប្លង់ Element HTML',
        'ផ្ទុកទិន្នន័យគេហទំព័រ'
      ],
      correct: 2,
      explanation: 'គោលបំណងចម្បងរបស់ CSS គឺដើម្បីគ្រប់គ្រងរូបរាង និងប្លង់នៃ Element HTML ។'
    },
    {
      question: 'តើ Element មួយណាដែល CSS ត្រូវបានប្រើដើម្បីរចនាម៉ូត?',
      options: ['JavaScript Elements', 'HTML Elements', 'Server Elements', 'Database Elements'],
      correct: 1,
      explanation: 'CSS ត្រូវបានរចនាឡើងជាពិសេសដើម្បីរចនាម៉ូត Element របស់ HTML ។'
    },
    {
      question: 'តើគុណសម្បត្តិមួយណាដែលអ្នកទទួលបានពីការបំបែក HTML និង CSS?',
      options: [
        'ធ្វើឱ្យគេហទំព័រផ្ទុកយឺត',
        'ធ្វើឱ្យ Code កាន់តែស្មុគស្មាញ',
        'ធ្វើឱ្យ Code កាន់តែងាយស្រួលគ្រប់គ្រង និងថែទាំ',
        'បងា្ករការប្រើប្រាស់ JavaScript'
      ],
      correct: 2,
      explanation: 'ការបំបែករចនាសម្ព័ន្ធ (HTML) និងរចនាប័ទ្ម (CSS) ធ្វើឱ្យ Code កាន់តែមានរបៀបរៀបរយ ងាយស្រួលអាន និងងាយស្រួលក្នុងការធ្វើបច្ចុប្បន្នភាព។'
    },
    {
      question: 'តើផ្នែកណាមួយនៃ CSS rule set ដែលជ្រើសរើស Element HTML ដើម្បីរចនាប័ទ្ម?',
      options: ['Declaration', 'Value', 'Property', 'Selector'],
      correct: 3,
      explanation: 'Selector គឺជាផ្នែកនៃ CSS rule set ដែលកំណត់ថា Element ណាគួរត្រូវបានរចនាប័ទ្ម។'
    },
    {
      question: 'តើ "Responsive Design" នៅក្នុង CSS សំដៅលើអ្វី?',
      options: [
        'ការរចនាគេហទំព័រសម្រាប់តែ Desktop',
        'ការរចនាគេហទំព័រដែលផ្លាស់ប្តូរតាមទំហំអេក្រង់ឧបករណ៍',
        'ការរចនាគេហទំព័រដែលមិនមានចលនា',
        'ការរចនាគេហទំព័រដោយគ្មានពណ៌'
      ],
      correct: 1,
      explanation: 'Responsive Design គឺជាវិធីសាស្រ្តដែលអនុញ្ញាតឱ្យគេហទំព័ររបស់អ្នកមើលទៅ និងដំណើរការបានល្អលើឧបករណ៍គ្រប់ប្រភេទ មិនថាទំហំអេក្រង់ប៉ុនណាទេ។'
    },
    {
      question: 'តើ Property និង Value ត្រូវបានបំបែកដោយសញ្ញាអ្វីនៅក្នុង CSS Declaration?',
      options: ['; (semicolon)', ': (colon)', ', (comma)', '. (period)'],
      correct: 1,
      explanation: 'នៅក្នុង CSS declaration, Property និង Value ត្រូវបានបំបែកដោយសញ្ញា colon (:) ខណៈដែល declarations ផ្សេងគ្នាត្រូវបានបំបែកដោយ semicolon (;)។'
    }
  ],
  lab: {
    task: 'បង្កើតឯកសារ HTML ថ្មីមួយ ហើយភ្ជាប់ CSS ខាងក្នុង (internal CSS) ដើម្បីប្តូរពណ៌ផ្ទៃខាងក្រោយរបស់ Body ទៅជាពណ៌ខៀវខ្ចី (lightblue) និងពណ៌អក្សរ H1 ទៅជាពណ៌ទឹកក្រូច (orange)។ បន្ទាប់មក បន្ថែម Paragraph (<p>) មួយទៀត ហើយកំណត់ទំហំពុម្ពអក្សររបស់វា 18px និងពណ៌បៃតង។',
    solution: `<!DOCTYPE html>
<html>
<head>
    <title>My First CSS Page</title>
    <style>
        body {
            background-color: lightblue;
        }
        h1 {
            color: orange;
        }
        p {
            font-size: 18px;
            color: green;
        }
    </style>
</head>
<body>
    <h1>សូមស្វាគមន៍មកកាន់ CSS!</h1>
    <p>នេះជាមេរៀនទីមួយរបស់យើងស្តីពី CSS។</p>
    <p>នេះជា Paragraph ថ្មីមួយដែលត្រូវបានរចនាប័ទ្មដោយ CSS ។</p>
</body>
</html>`
  }
};

export default CSSLesson1_1Content;