// src/components/lessons/Lesson3_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const Lesson3_1: LessonContent = {
  title: 'Tables (តារាង)',
  objectives: [
    'អាចបង្កើតតារាងដោយប្រើ <table>, <thead>, <tbody>, <tfoot>',
    'យល់ពី <tr> (Table Row - ជួរដេក)',
    'យល់ពី <th> (Table Header - ក្បាលតារាង)',
    'យល់ពី <td> (Table Data - ទិន្នន័យក្នុងតារាង)',
    'អាចប្រើ colspan និង rowspan'
  ],
  content: `
# Tables (តារាង) 📊

តារាង HTML ត្រូវបានប្រើដើម្បីបង្ហាញទិន្នន័យជាជួរដេក (rows) និងជួរឈរ (columns)។ វាមានសារៈសំខាន់ក្នុងការប្រើតារាងសម្រាប់តែ **ទិន្នន័យជាតារាង** ប៉ុណ្ណោះ មិនមែនសម្រាប់ការរៀបចំ Layout នៃគេហទំព័រនោះទេ។

---

## 1. រចនាសម្ព័ន្ធមូលដ្ឋានរបស់តារាង: \`<table>\`, \`<thead>\`, \`<tbody>\`, \`<tfoot>\`

HTML ផ្តល់នូវ Elements ជាច្រើនដើម្បីរៀបចំរចនាសម្ព័ន្ធតារាងឱ្យបានត្រឹមត្រូវ៖

* **\`<table>\`:** Element ឫស (root element) សម្រាប់បង្កើតតារាងទាំងមូល។ ធាតុ HTML ទាំងអស់សម្រាប់តារាងត្រូវតែដាក់នៅខាងក្នុង Tag នេះ។
* **\`<thead>\`:** ប្រើសម្រាប់ដាក់ **ក្បាលតារាង (table header)**។ វាជួយកំណត់ផ្នែក Header របស់តារាង ដែលជាធម្មតាមានចំណងជើងជួរឈរ។ Browser អាចប្រើ Header នេះសម្រាប់ Accessibility និងការបង្ហាញ (ឧទាហរណ៍: បោះពុម្ព Header នៅគ្រប់ទំព័រ ប្រសិនបើតារាងវែង)។
* **\`<tbody>\`:** ប្រើសម្រាប់ដាក់ **តួទិន្នន័យតារាង (table body)**។ នេះជាកន្លែងដែលទិន្នន័យពិតប្រាកដរបស់តារាងស្ថិតនៅ។ តារាងអាចមាន \`<tbody>\` មួយ ឬច្រើន។
* **\`<tfoot>\`:** ប្រើសម្រាប់ដាក់ **បាតតារាង (table footer)**។ វាអាចមានសរុប (totals) ព័ត៌មានសង្ខេប ឬកំណត់ចំណាំ។ គួរតែដាក់វាមុន \`<tbody>\` នៅក្នុងកូដ HTML ប៉ុន្តែ Browser នឹងបង្ហាញវាជាបាតតារាងជានិច្ច។

\`\`\`html
<table>
  <thead>
    <tr>
      <th>ឈ្មោះផលិតផល</th>
      <th>ចំនួន</th>
      <th>តម្លៃឯកតា</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>កុំព្យូទ័រយួរដៃ</td>
      <td>2</td>
      <td>1200$</td>
    </tr>
    <tr>
      <td>កណ្តុរ</td>
      <td>5</td>
      <td>15$</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">សរុបផលិតផល</td>
      <td>7</td>
    </tr>
  </tfoot>
</table>
\`\`\`

ការប្រើប្រាស់ \`<thead>\`, \`<tbody>\`, \`<tfoot>\` ជួយបង្កើន Accessibility (សម្រាប់ Screen Readers) និងអនុញ្ញាតឱ្យ browser រៀបចំតារាងបានត្រឹមត្រូវ។

---

## 2. \`<tr>\` (Table Row - ជួរដេក) ➡️

Tag \`<tr>\` តំណាងឱ្យ **ជួរដេក (table row)** នៅក្នុងតារាង។ ធាតុ \`<th>\` ឬ \`<td>\` ត្រូវតែដាក់នៅខាងក្នុង \`<tr>\` នីមួយៗ។

\`\`\`html
<table>
  <tr> <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
  <tr> <td>Cell 3</td>
    <td>Cell 4</td>
  </tr>
</table>
\`\`\`

---

## 3. \`<th>\` (Table Header - ក្បាលតារាង) ⬆️

Tag \`<th>\` ត្រូវបានប្រើដើម្បីកំណត់ **ក្បាលតារាង (table header cell)**។ មាតិកាដែលនៅខាងក្នុង \`<th>\` ជាធម្មតាត្រូវបានបង្ហាញជា **អក្សរដិត** និងនៅ **ចំកណ្តាល** ដោយ Browser។ វាជាធម្មតាត្រូវបានដាក់នៅខាងក្នុង \`<thead>\` ប៉ុន្តែវាក៏អាចប្រើក្នុង \`<tbody>\` ដើម្បីកំណត់ Header សម្រាប់ជួរដេក (Row Headers) ផងដែរ។

---

## 4. \`<td>\` (Table Data - ទិន្នន័យក្នុងតារាង) 📝

Tag \`<td>\` ត្រូវបានប្រើដើម្បីកំណត់ **ទិន្នន័យក្នុងតារាង (table data cell)**។ នេះគឺជាកន្លែងដែលមាតិកាពិតប្រាកដនៃតារាងស្ថិតនៅ។

\`\`\`html
<table>
  <tr>
    <th>ឈ្មោះ</th>
    <th>អាយុ</th>
    <th>ទីក្រុង</th>
  </tr>
  <tr>
    <td>កក្កដា</td>
    <td>២៥</td>
    <td>ភ្នំពេញ</td>
  </tr>
  <tr>
    <td>មករា</td>
    <td>៣០</td>
    <td>សៀមរាប</td>
  </tr>
</table>
\`\`\`

---

## 5. \`colspan\` និង \`rowspan\` Attributes ↔️↕️

Attributes ទាំងពីរនេះអនុញ្ញាតឱ្យ cells **បញ្ចូលគ្នា (merge)** គ្នា ដើម្បីបង្កើត Layout តារាងដែលស្មុគស្មាញជាងមុន៖

* **\`colspan\`:** បញ្ចូល cells តាម **ជួរឈរ (columns)**។ ឧទាហរណ៍ \`colspan="2"\` នឹងធ្វើឱ្យ cell នោះលាតសន្ធឹងលើជួរឈរចំនួន ២។ តម្លៃរបស់ \`colspan\` ត្រូវតែជាចំនួនគត់វិជ្ជមាន (ចំនួនជួរឈរដែលវាគ្របដណ្តប់)។
* **\`rowspan\`:** បញ្ចូល cells តាម **ជួរដេក (rows)**។ ឧទាហរណ៍ \`rowspan="2"\` នឹងធ្វើឱ្យ cell នោះលាតសន្ធឹងលើជួរដេកចំនួន ២។ តម្លៃរបស់ \`rowspan\` ត្រូវតែជាចំនួនគត់វិជ្ជមាន (ចំនួនជួរដេកដែលវាគ្របដណ្តប់)។

\`\`\`html
<table>
  <tr>
    <th>ឈ្មោះ</th>
    <th colspan="2">ព័ត៌មានទំនាក់ទំនង</th> </tr>
  <tr>
    <td>កក្កដា</td>
    <td>Email: kakada@example.com</td>
    <td>ទូរស័ព្ទ: 012345678</td>
  </tr>
  <tr>
    <th colspan="3">បញ្ជីទិញទំនិញ</th> </tr>
  <tr>
    <td rowspan="2">ផ្លែឈើ</td> <td>ផ្លែប៉ោម</td>
    <td>1$</td>
  </tr>
  <tr>
    <td>ផ្លែចេក</td>
    <td>0.5$</td>
  </tr>
</table>
\`\`\`

---

## 6. \`<caption>\` (Table Caption - ចំណងជើងតារាង) 📝

Tag \`<caption>\` ត្រូវបានប្រើដើម្បីផ្តល់នូវ **ចំណងជើង (caption)** សម្រាប់តារាង។ វាជាចំណងជើងសង្ខេបដែលពិពណ៌នាអំពីខ្លឹមសាររបស់តារាង។ វាគួរតែជាកូនដំបូងគេរបស់ Tag \`<table>\`។

\`\`\`html
<table>
  <caption>បញ្ជីសិស្សក្នុងថ្នាក់</caption>
  <thead>
    <tr>
      <th>ឈ្មោះ</th>
      <th>ភេទ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ពិសី</td>
      <td>ស្រី</td>
    </tr>
  </tbody>
</table>
\`\`\`

---

> **គន្លឹះសំខាន់:** 💡 ប្រើប្រាស់តារាងសម្រាប់តែ **ទិន្នន័យជាតារាង** ប៉ុណ្ណោះ! កុំប្រើវាសម្រាប់ការរៀបចំ Layout គេហទំព័ររបស់អ្នក ព្រោះវាធ្វើឱ្យ Accessibility ពិបាក (Screen Readers នឹងអានវាជាទិន្នន័យតារាង) និងមិនមែនជា Best Practice នៅក្នុង Web Development ទំនើបនោះទេ។ សម្រាប់ការរៀបចំ Layout សូមប្រើ CSS (Flexbox, Grid)។

  `,
  examples: [
    `<table>
  <caption>ពិន្ទុសិស្ស</caption>
  <thead>
    <tr><th>ឈ្មោះ</th><th>ភេទ</th></tr>
  </thead>
  <tbody>
    <tr><td>សីហា</td><td>ប្រុស</td></tr>
  </tbody>
</table>`,
    `<table>
  <tr><th colspan="2">ព័ត៌មាន</th></tr>
  <tr><td>ឈ្មោះ</td><td>សុខ</td></tr>
</table>`,
    `<table>
  <tr>
    <td rowspan="2">A</td>
    <td>B</td>
  </tr>
  <tr>
    <td>C</td>
  </tr>
</table>`
  ],
  quiz: [
    {
      question: 'តើ Tag មួយណាប្រើសម្រាប់កំណត់ក្បាលតារាង?',
      options: ['<td>', '<th>', '<tr>', '<table>'],
      correct: 1,
      explanation: '<th> Tag ប្រើសម្រាប់កំណត់ក្បាលតារាង (Table Header) ដែលជាធម្មតាបង្ហាញជាអក្សរដិត និងចំកណ្តាល។'
    },
    {
      question: 'តើ Attribute មួយណាប្រើសម្រាប់បញ្ចូល cells តាមជួរឈរ?',
      options: ['rowspan', 'colspan', 'merge', 'span'],
      correct: 1,
      explanation: 'colspan Attribute ប្រើសម្រាប់បញ្ចូល cells តាមជួរឈរ (horizontally)។'
    },
    {
      question: 'តើ Tag មួយណាជា Element ឫសសម្រាប់បង្កើតតារាងទាំងមូល?',
      options: ['<tbody>', '<tr>', '<td>', '<table>'],
      correct: 3,
      explanation: '<table> Tag គឺជា Element ឫសដែលរុំព័ទ្ធរចនាសម្ព័ន្ធតារាងទាំងមូល។'
    },
    {
      question: 'តើ \`<tr>\` Tag តំណាងឱ្យអ្វីនៅក្នុងតារាង HTML?',
      options: [
        'Table Header',
        'Table Data',
        'Table Row',
        'Table Column'
      ],
      correct: 2,
      explanation: '<tr> Tag តំណាងឱ្យជួរដេក (Table Row) នៅក្នុងតារាង។'
    },
    {
      question: 'តើ Tag \`<td>\` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ក្បាលតារាង',
        'កំណត់ជួរដេក',
        'កំណត់ទិន្នន័យក្នុងតារាង',
        'កំណត់ចំណងជើងតារាង'
      ],
      correct: 2,
      explanation: '<td> Tag ប្រើសម្រាប់កំណត់ទិន្នន័យក្នុងតារាង (Table Data Cell)។'
    },
    {
      question: 'តើ Attribute \`rowspan="3"\` នឹងធ្វើឱ្យ cell នោះលាតសន្ធឹងលើប៉ុន្មានជួរដេក?',
      options: ['1', '2', '3', 'គ្មានកំណត់'],
      correct: 2,
      explanation: '`rowspan="3"` នឹងធ្វើឱ្យ cell នោះលាតសន្ធឹងលើ ៣ ជួរដេក។'
    },
    {
      question: 'តើ Tag មួយណាដែលត្រូវបានណែនាំសម្រាប់ការដាក់តួទិន្នន័យតារាង?',
      options: ['<thead>', '<tfoot>', '<body>', '<tbody>'],
      correct: 3,
      explanation: '<tbody> Tag ត្រូវបានប្រើសម្រាប់ដាក់តួទិន្នន័យពិតប្រាកដរបស់តារាង។'
    },
    {
      question: 'តើ Tag \`<tfoot>\` គួរតែដាក់នៅទីតាំងណា?',
      options: [
        'មុន <thead>',
        'បន្ទាប់ពី <tbody>',
        'មុន <tbody> (នៅក្នុងកូដ HTML)',
        'នៅខាងក្រៅ <table>'
      ],
      correct: 2,
      explanation: 'នៅក្នុងកូដ HTML, <tfoot> គួរតែដាក់មុន <tbody> ប៉ុន្តែ Browser នឹងបង្ហាញវានៅបាតតារាងជានិច្ច។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើប្រាស់ \`<thead>\`, \`<tbody>\`, \`<tfoot>\`?',
      options: [
        'ធ្វើឱ្យតារាងមានពណ៌',
        'បង្កើន Accessibility និងការបង្ហាញដោយ Browser',
        'ធ្វើឱ្យតារាងតូចជាងមុន',
        'ធ្វើឱ្យតារាងមានចលនា (Animation)'
      ],
      correct: 1,
      explanation: 'ការប្រើ Tags ទាំងនេះជួយបង្កើន Accessibility (សម្រាប់ Screen Readers) និងអនុញ្ញាតឱ្យ Browser រៀបចំ និងបង្ហាញតារាងបានត្រឹមត្រូវ។'
    },
    {
      question: 'តើ HTML Tables ត្រូវបានប្រើសម្រាប់គោលបំណងចម្បងអ្វី?',
      options: [
        'រៀបចំ Layout គេហទំព័រ',
        'បង្ហាញទិន្នន័យជាតារាង',
        'បង្កើត Form',
        'បញ្ចូលរូបភាព'
      ],
      correct: 1,
      explanation: 'HTML Tables ត្រូវបានប្រើប្រាស់សម្រាប់តែបង្ហាញទិន្នន័យជាជួរដេក និងជួរឈរប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ Tag \`<th>\` ជាធម្មតាបង្ហាញមាតិកាយ៉ាងដូចម្តេច?',
      options: [
        'អក្សរធម្មតា, ខាងឆ្វេង',
        'អក្សរដិត, ខាងស្តាំ',
        'អក្សរដិត, ចំកណ្តាល',
        'អក្សរទ្រេត, ខាងឆ្វេង'
      ],
      correct: 2,
      explanation: '<th> Tag ជាធម្មតាបង្ហាញមាតិកាជាអក្សរដិត និងចំកណ្តាលដោយ Browser។'
    },
    {
      question: 'តើ \`colspan\` និង \`rowspan\` ជាប្រភេទអ្វី?',
      options: ['Tags', 'Elements', 'Attributes', 'Values'],
      correct: 2,
      explanation: 'colspan និង rowspan គឺជា Attributes របស់ Tag <th> ឬ <td>។'
    },
    {
      question: 'តើ Tag មួយណាដែលផ្តល់ចំណងជើងសង្ខេបសម្រាប់តារាង?',
      options: ['<title>', '<header>', '<caption>', '<label>'],
      correct: 2,
      explanation: '<caption> Tag ត្រូវបានប្រើដើម្បីផ្តល់ចំណងជើងសម្រាប់តារាង។'
    },
    {
      question: 'តើ \`<caption>\` Tag គួរតែជាកូនរបស់ Tag មួយណា?',
      options: ['<thead>', '<tbody>', '<table>', '<tr>'],
      correct: 2,
      explanation: '<caption> Tag គួរតែជាកូនដំបូងគេរបស់ Tag <table> ។'
    },
    {
      question: 'តើការប្រើប្រាស់តារាងសម្រាប់ការរៀបចំ Layout គេហទំព័រត្រូវបានណែនាំដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ'],
      correct: 1,
      explanation: 'ទេ ការប្រើប្រាស់តារាងសម្រាប់ការរៀបចំ Layout ត្រូវបានចាត់ទុកថាជា Bad Practice ហើយធ្វើឱ្យ Accessibility ពិបាក។ គួរប្រើ CSS (Flexbox, Grid) ជំនួសវិញ។'
    },
    {
      question: 'តើ Cell មួយណាដែលស័ក្តិសមបំផុតសម្រាប់បង្ហាញ "ចំនួនសរុប" នៅផ្នែកខាងក្រោមតារាង?',
      options: ['<th>', '<td>', '<ft>', '<summary>'],
      correct: 1, // While <th> can be used in <tfoot>, <td> is generally used for summary data that isn't a *header* for a column. Semantic best practice for totals is still a bit debated but <td> is more common for numerical summaries.
      explanation: '<td> Tag ត្រូវបានប្រើសម្រាប់បង្ហាញទិន្នន័យក្នុងតារាង រួមទាំងចំនួនសរុបនៅផ្នែកខាងក្រោមតារាង (footer)។'
    },
    {
      question: 'ប្រសិនបើអ្នកមានតារាងដែលមាន ៤ ជួរឈរ ហើយអ្នកចង់ឱ្យ Cell មួយលាតសន្ធឹងលើជួរឈរទី ១ និងទី ២ តើអ្នកនឹងប្រើ Attribute អ្វី?',
      options: [
        'colspan="2"',
        'rowspan="2"',
        'colspan="4"',
        'rowspan="4"'
      ],
      correct: 0,
      explanation: 'ដើម្បីឱ្យ Cell លាតសន្ធឹងលើជួរឈរទី ១ និងទី ២ (សរុប ២ ជួរឈរ) អ្នកនឹងប្រើ `colspan="2"` ។'
    }
  ],
  lab: {
    task: 'បង្កើតតារាងសាមញ្ញមួយដែលមាន ៣ ជួរឈរ (ឈ្មោះ, អាយុ, ទីក្រុង) និងទិន្នន័យសម្រាប់មនុស្ស ២ នាក់។ បន្ថែមក្បាលតារាង។',
    solution: `<!DOCTYPE html>
<html>
<head>
    <title>លំហាត់ទី ៩</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>បញ្ជីរឈ្មោះ</h1>
    <table>
        <thead>
            <tr>
                <th>ឈ្មោះ</th>
                <th>អាយុ</th>
                <th>ទីក្រុង</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>ពិសី</td>
                <td>28</td>
                <td>ភ្នំពេញ</td>
            </tr>
            <tr>
                <td>វណ្ណដា</td>
                <td>32</td>
                <td>បាត់ដំបង</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`
  }
};
export default Lesson3_1;