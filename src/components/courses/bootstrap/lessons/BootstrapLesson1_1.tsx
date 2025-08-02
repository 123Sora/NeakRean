// src/components/lessons/bootstrap/BootstrapLesson1_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const BootstrapLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី Bootstrap',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Bootstrap',
    'ស្វែងយល់ពីគោលបំណង និងសារៈសំខាន់របស់ Bootstrap',
    'ដឹងពីមូលហេតុដែលត្រូវប្រើ Bootstrap ក្នុងការអភិវឌ្ឍន៍គេហទំព័រ',
    'ប្រៀបធៀប Bootstrap ជាមួយការសរសេរ CSS ដោយដៃ'
  ],
  content: `
# ណែនាំអំពី Bootstrap 🚀

---

Bootstrap គឺជា **Front-end Framework** ដ៏ពេញនិយមបំផុតមួយសម្រាប់បង្កើតគេហទំព័រ។ វាជាបណ្តុំនៃ HTML, CSS, និង JavaScript (ឬ jQuery/Popper.js សម្រាប់កំណែចាស់) ដែលបានសរសេររួចជាស្រេច ដែលជួយអ្នកសាងសង់គេហទំព័រដែលមានរូបរាងស្អាត និង Responsive បានយ៉ាងឆាប់រហ័ស។ ស្រមៃថាវាជា "ប្រអប់ឧបករណ៍" ដែលមានប៊ូតុង, Navigations, Forms, និង Layouts ដែលត្រៀមរួចជាស្រេចសម្រាប់ប្រើប្រាស់។

---

## អ្វីទៅជា Bootstrap? 🛠️

Bootstrap ត្រូវបានបង្កើតឡើងដោយ Twitter ហើយត្រូវបានចេញផ្សាយជា Open-Source ក្នុងឆ្នាំ 2011។ គោលបំណងចម្បងរបស់វាគឺដើម្បីជួយអ្នកអភិវឌ្ឍន៍បង្កើតគេហទំព័រដែលមើលទៅល្អ និងដំណើរការបានល្អលើឧបករណ៍គ្រប់ប្រភេទ (Desktop, Tablet, Mobile) ដោយមិនចាំបាច់សរសេរ CSS ទាំងអស់ពីដំបូងឡើយ។

វាផ្អែកលើទស្សនវិជ្ជា **"Mobile-first"** ដែលមានន័យថាវាត្រូវបានរចនាឡើងដំបូងសម្រាប់អេក្រង់តូចៗ (ទូរស័ព្ទ) ហើយបន្ទាប់មកពង្រីកទៅអេក្រង់ធំៗ។

---

## តើ Bootstrap ប្រើសម្រាប់អ្វី? 🎯

Bootstrap ត្រូវបានប្រើដើម្បី៖

* **បង្កើតគេហទំព័រ Responsive:** គេហទំព័ររបស់អ្នកនឹងសម្របខ្លួនដោយស្វ័យប្រវត្តិទៅតាមទំហំអេក្រង់ផ្សេងៗគ្នា។
* **សន្សំសំចៃពេលវេលា:** មិនចាំបាច់សរសេរ CSS សម្រាប់ Components ទូទៅដូចជា Buttons, Forms, Navigation Bars ឡើងវិញទេ។
* **ធានាភាពស៊ីគ្នា (Consistency):** ផ្តល់នូវរូបរាង និងអារម្មណ៍ដូចគ្នា (consistent look and feel) នៅទូទាំងគេហទំព័ររបស់អ្នក។
* **ងាយស្រួលប្រើ:** មាន Classes CSS ដែលងាយស្រួលយល់ និងអនុវត្ត។
* **មាន Components ត្រៀមរួចជាស្រេច:** មានបណ្ណាល័យដ៏ធំនៃ Components ដែលអាចប្រើបានភ្លាមៗ។

---

## មូលហេតុដែលត្រូវប្រើ Bootstrap? ✨

* **ល្បឿននៃការអភិវឌ្ឍន៍:** បង្កើត Prototype ឬគេហទំព័រពេញលេញបានលឿនជាងមុន។
* **ភាពស៊ីគ្នាឆ្លង Browser:** ជួយដោះស្រាយបញ្ហាភាពស៊ីគ្នារវាង Browser ផ្សេងៗគ្នា។
* **Responsive ដោយស្វ័យប្រវត្តិ:** Grid System របស់វាធ្វើឱ្យការរៀបចំប្លង់ Responsive មានភាពងាយស្រួល។
* **សហគមន៍ធំទូលាយ:** មានឯកសារល្អ, ធនធានច្រើន, និងសហគមន៍អ្នកប្រើប្រាស់ដ៏ធំ។

---

## ប្រៀបធៀប Bootstrap ជាមួយការសរសេរ CSS ដោយដៃ 🥊

| លក្ខណៈ             | Bootstrap                                     | ការសរសេរ CSS ដោយដៃ (Custom CSS)          |
| :----------------- | :-------------------------------------------- | :----------------------------------------- |
| **ល្បឿន** | លឿនបំផុតក្នុងការអភិវឌ្ឍន៍                     | យឺតជាង ព្រោះត្រូវសរសេរគ្រប់យ៉ាងពីដំបូង   |
| **ភាពស្មុគស្មាញ** | ងាយស្រួលសម្រាប់អ្នកចាប់ផ្តើមដំបូង            | ទាមទារចំណេះដឹងស៊ីជម្រៅពី CSS              |
| **ទំហំ File** | ធំជាងបន្តិច (ព្រោះមាន Code ច្រើន)            | តូចជាង (សរសេរតែអ្វីដែលចាំបាច់)            |
| **ភាពបត់បែន** | មានកំណត់បន្តិច (ត្រូវតាមរចនាប័ទ្ម Framework) | ខ្ពស់បំផុត (អាចរចនាបានតាមចិត្ត)             |
| **Responsive** | ងាយស្រួល និងស្វ័យប្រវត្តិ                       | ទាមទារការកំណត់ Media Queries ដោយខ្លួនឯង |


`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ប៊ូតុងសាមញ្ញមួយដោយគ្មាន Bootstrap</h3>
<button style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
  ចុចខ្ញុំ
</button>

\`\`\`html
<button style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
  ចុចខ្ញុំ
</button>
\`\`\`

\`\`\`css
/* CSS ដែលត្រូវសរសេរដោយដៃសម្រាប់ប៊ូតុងខាងលើ */
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
\`\`\`
`,
    `<h3>ឧទាហរណ៍៖ ប៊ូតុងដូចគ្នាដោយប្រើ Bootstrap</h3>
<!-- ស្រមៃថា Bootstrap CSS ត្រូវបានភ្ជាប់រួចហើយ -->
<button class="btn btn-primary">
  ចុចខ្ញុំ
</button>

\`\`\`html
<!-- ស្រមៃថា Bootstrap CSS ត្រូវបានភ្ជាប់រួចហើយ -->
<button class="btn btn-primary">
  ចុចខ្ញុំ
</button>
\`\`\`

\`\`\`css
/* ជាមួយ Bootstrap អ្នកគ្រាន់តែប្រើ Classes ដែលមានស្រាប់ */
/* .btn និង .btn-primary ផ្តល់រចនាប័ទ្មទាំងអស់ */
/* មិនចាំបាច់សរសេរ CSS ផ្ទាល់ខ្លួនច្រើនទេ */
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Bootstrap ជាអ្វី?',
      options: [
        'ជាភាសាកម្មវិធីសម្រាប់ Backend',
        'ជា Database System',
        'ជា Front-end Framework',
        'ជាឧបករណ៍សម្រាប់បង្កើត Animations'
      ],
      correct: 2,
      explanation: 'Bootstrap គឺជា Front-end Framework មួយដែលជួយក្នុងការរចនាគេហទំព័រ។'
    },
    {
      question: 'តើគោលបំណងចម្បងរបស់ Bootstrap គឺអ្វី?',
      options: [
        'បង្កើត Mobile Apps',
        'បង្កើតគេហទំព័រ Responsive និង Mobile-first បានលឿន',
        'គ្រប់គ្រង Server-side Logic',
        'វិភាគទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'គោលបំណងចម្បងរបស់ Bootstrap គឺជួយបង្កើតគេហទំព័រ Responsive និង Mobile-first បានយ៉ាងឆាប់រហ័ស។'
    },
    {
      question: 'តើ "Mobile-first" មានន័យដូចម្តេចនៅក្នុងបរិបទ Bootstrap?',
      options: [
        'រចនាសម្រាប់កុំព្យូទ័រមុន បន្ទាប់មកសម្រាប់ទូរស័ព្ទ',
        'រចនាសម្រាប់ទូរស័ព្ទមុន បន្ទាប់មកពង្រីកទៅអេក្រង់ធំៗ',
        'ប្រើតែលើទូរស័ព្ទប៉ុណ្ណោះ',
        'មិនគាំទ្រឧបករណ៍ចល័តទេ'
      ],
      correct: 1,
      explanation: 'Mobile-first មានន័យថាការរចនាចាប់ផ្តើមពីអេក្រង់តូចៗ (ទូរស័ព្ទ) ហើយបន្ទាប់មកត្រូវបានសម្របទៅតាមទំហំអេក្រង់ធំៗ។'
    },
    {
      question: 'តើគុណសម្បត្តិមួយណាដែល Bootstrap ផ្តល់ជូន?',
      options: [
        'ធ្វើឱ្យគេហទំព័រផ្ទុកយឺត',
        'ធ្វើឱ្យ Code កាន់តែស្មុគស្មាញ',
        'ជួយសន្សំសំចៃពេលវេលាអភិវឌ្ឍន៍ និងធានាភាពស៊ីគ្នា',
        'បងា្ករការប្រើប្រាស់ JavaScript'
      ],
      correct: 2,
      explanation: 'Bootstrap ជួយសន្សំសំចៃពេលវេលាអភិវឌ្ឍន៍ និងធានាភាពស៊ីគ្នានៃការរចនា។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នាដ៏សំខាន់រវាង Bootstrap និងការសរសេរ CSS ដោយដៃ?',
      options: [
        'Bootstrap ប្រើ JavaScript ច្រើនជាង',
        'Bootstrap ផ្តល់នូវ Components ដែលត្រៀមរួចជាស្រេច ខណៈ CSS ដោយដៃតម្រូវឱ្យសរសេរពីដំបូង',
        'Bootstrap មិនអាចបង្កើតគេហទំព័រ Responsive បានទេ',
        'CSS ដោយដៃគឺលឿនជាង Bootstrap'
      ],
      correct: 1,
      explanation: 'ភាពខុសគ្នាដ៏សំខាន់គឺ Bootstrap ផ្តល់នូវ Components និង Styles ដែលត្រៀមរួចជាស្រេច ដែលជួយសន្សំពេលវេលា។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML ថ្មីមួយ។ នៅក្នុងឯកសារនោះ សូមសរសេរចំណងជើង <h1> មួយ និងកថាខណ្ឌ <p> មួយ។ បន្ទាប់មក សូមសរសេរ CSS ដោយដៃដើម្បីកំណត់ពណ៌អក្សរ <h1> ទៅជាពណ៌ខៀវ និងផ្ទៃខាងក្រោយ <p> ទៅជាពណ៌លឿងខ្ចី (lightyellow)។`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Intro Lab</title>
    <style>
        h1 {
            color: blue;
        }
        p {
            background-color: lightyellow;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>ស្វាគមន៍មកកាន់មេរៀន Bootstrap!</h1>
    <p>នេះជាការអនុវត្តន៍សរសេរ CSS ដោយដៃ មុននឹងយើងចាប់ផ្តើមប្រើ Bootstrap ។</p>
</body>
</html>`
  }
};

export default BootstrapLesson1_1Content;