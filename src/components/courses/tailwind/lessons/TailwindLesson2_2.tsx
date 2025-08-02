// src/components/lessons/tailwind/TailwindLesson2_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const TailwindLesson2_2Content: LessonContent = {
  title: 'Layout ជាមួយ Grid',
  objectives: [
    'យល់ដឹងពីមូលដ្ឋានគ្រឹះនៃ CSS Grid ក្នុង Tailwind CSS',
    'របៀបប្រើប្រាស់ `display` (grid, inline-grid)',
    'របៀបកំណត់ `grid-template-columns` (grid-cols-n, grid-cols-none, grid-cols-auto, grid-cols-max, grid-cols-min, grid-cols-fr)',
    'របៀបកំណត់ `grid-template-rows` (grid-rows-n)',
    'របៀបកំណត់ `gap` (gap-x, gap-y)',
    'របៀបកំណត់ `column-span` (col-span-n, col-start-n, col-end-n)',
    'របៀបកំណត់ `row-span` (row-span-n, row-start-n, row-end-n)',
    'របៀបកំណត់ `place-items`, `place-content`, `place-self`',
    'របៀបកំណត់ `grid-auto-flow` (row, col, dense)'
  ],
  content: `
# Layout ជាមួយ Grid 📐🌐

---

CSS Grid Layout គឺជាប្រព័ន្ធ Layout ពីរវិមាត្រ (two-dimensional) ដ៏មានឥទ្ធិពល ដែលអនុញ្ញាតឱ្យអ្នករៀបចំ Elements ទាំងជួរដេក (rows) និងជួរឈរ (columns) ក្នុងពេលតែមួយ។ វាល្អឥតខ្ចោះសម្រាប់ការបង្កើត Layouts ស្មុគស្មាញ។

---

## 1. មូលដ្ឋានគ្រឹះនៃ CSS Grid ក្នុង Tailwind CSS 💡

ដើម្បីប្រើប្រាស់ CSS Grid ក្នុង Tailwind CSS អ្នកគ្រាន់តែបន្ថែម Class \`grid\` ទៅលើ Parent Element (Grid Container) ។

\`\`\`html
<div class="grid">
  </div>
\`\`\`

---

## 2. របៀបប្រើប្រាស់ \`display\` (grid, inline-grid) 🖥️

* \`grid\`: កំណត់ Element ជា Grid Container ដែលជា Block-level ។
* \`inline-grid\`: កំណត់ Element ជា Grid Container ដែលជា Inline-level ។

\`\`\`html
<div class="grid grid-cols-2 gap-4 bg-blue-200 p-4">
  <div class="p-2 bg-blue-400 text-white">Item 1</div>
  <div class="p-2 bg-blue-500 text-white">Item 2</div>
</div>

<span class="inline-grid grid-cols-2 gap-4 bg-green-200 p-4">
  <span class="p-2 bg-green-400 text-white">Item A</span>
  <span class="p-2 bg-green-500 text-white">Item B</span>
</span>
\`\`\`

---

## 3. របៀបកំណត់ \`grid-template-columns\` 📊

កំណត់ចំនួន និងទំហំរបស់ Columns ។

* \`grid-cols-n\`: បង្កើត n Columns ដែលមានទំហំស្មើគ្នា (ឧទាហរណ៍ \`grid-cols-3\`) ។
* \`grid-cols-none\`: លុប Columns ដែលបានកំណត់។
* \`grid-cols-auto\`: Columns នឹងយកទំហំតាមមាតិកា។
* \`grid-cols-max\`: Columns នឹងយកទំហំធំបំផុតតាមមាតិកា។
* \`grid-cols-min\`: Columns នឹងយកទំហំតូចបំផុតតាមមាតិកា។
* \`grid-cols-fr\`: ប្រើ Fraction Unit (ឧទាហរណ៍ \`grid-cols-1fr\`, \`grid-cols-2fr\`) ។
* \`grid-flow-col\`: រៀបចំ Items តាម Columns ។

\`\`\`html
<div class="grid grid-cols-3 gap-4 bg-gray-200 p-4">
  <div class="p-2 bg-gray-400">1</div>
  <div class="p-2 bg-gray-500">2</div>
  <div class="p-2 bg-gray-600">3</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 bg-gray-300 p-4">
  <div class="p-2 bg-gray-500">Responsive Col</div>
  <div class="p-2 bg-gray-500">Responsive Col</div>
  <div class="p-2 bg-gray-500">Responsive Col</div>
  <div class="p-2 bg-gray-500">Responsive Col</div>
</div>
\`\`\`

---

## 4. របៀបកំណត់ \`grid-template-rows\` 📈

កំណត់ចំនួន និងទំហំរបស់ Rows ។

* \`grid-rows-n\`: បង្កើត n Rows ដែលមានទំហំស្មើគ្នា (ឧទាហរណ៍ \`grid-rows-2\`) ។

\`\`\`html
<div class="grid grid-rows-2 grid-flow-col gap-4 h-32 bg-yellow-200 p-4">
  <div class="p-2 bg-yellow-400">Item 1</div>
  <div class="p-2 bg-yellow-500">Item 2</div>
  <div class="p-2 bg-yellow-600">Item 3</div>
  <div class="p-2 bg-yellow-700">Item 4</div>
</div>
\`\`\`

---

## 5. របៀបកំណត់ \`gap\` (gap-x, gap-y) ↔️↕️

កំណត់គម្លាតរវាង Rows និង Columns ។

* \`gap-n\`: កំណត់គម្លាតទាំង Rows និង Columns ។
* \`gap-x-n\`: កំណត់គម្លាតតាមអ័ក្ស X (Columns) ។
* \`gap-y-n\`: កំណត់គម្លាតតាមអ័ក្ស Y (Rows) ។

\`\`\`html
<div class="grid grid-cols-2 gap-x-8 gap-y-4 bg-purple-200 p-4">
  <div class="p-2 bg-purple-400">Item 1</div>
  <div class="p-2 bg-purple-500">Item 2</div>
  <div class="p-2 bg-purple-600">Item 3</div>
  <div class="p-2 bg-purple-700">Item 4</div>
</div>
\`\`\`

---

## 6. របៀបកំណត់ \`column-span\` (col-span-n, col-start-n, col-end-n) ➡️ Span

អនុញ្ញាតឱ្យ Grid Item លាតសន្ធឹងលើ Columns ច្រើន។

* \`col-span-n\`: លាតសន្ធឹង Item លើ n Columns ។
* \`col-start-n\`: កំណត់ Item ឱ្យចាប់ផ្តើមនៅ Line ទី n ។
* \`col-end-n\`: កំណត់ Item ឱ្យបញ្ចប់នៅ Line ទី n ។
* \`col-auto\`: (Default)

\`\`\`html
<div class="grid grid-cols-3 gap-4 bg-teal-200 p-4">
  <div class="p-2 bg-teal-400 col-span-2">Span 2 Cols</div>
  <div class="p-2 bg-teal-500">Item 2</div>
  <div class="p-2 bg-teal-600">Item 3</div>
  <div class="p-2 bg-teal-700">Item 4</div>
</div>
\`\`\`

---

## 7. របៀបកំណត់ \`row-span\` (row-span-n, row-start-n, row-end-n) ↕️ Span

អនុញ្ញាតឱ្យ Grid Item លាតសន្ធឹងលើ Rows ច្រើន។

* \`row-span-n\`: លាតសន្ធឹង Item លើ n Rows ។
* \`row-start-n\`: កំណត់ Item ឱ្យចាប់ផ្តើមនៅ Line ទី n ។
* \`row-end-n\`: កំណត់ Item ឱ្យបញ្ចប់នៅ Line ទី n ។
* \`row-auto\`: (Default)

\`\`\`html
<div class="grid grid-cols-3 grid-rows-2 gap-4 h-48 bg-red-200 p-4">
  <div class="p-2 bg-red-400 row-span-2">Span 2 Rows</div>
  <div class="p-2 bg-red-500">Item 2</div>
  <div class="p-2 bg-red-600">Item 3</div>
  <div class="p-2 bg-red-700">Item 4</div>
  <div class="p-2 bg-red-800">Item 5</div>
</div>
\`\`\`

---

## 8. របៀបកំណត់ \`place-items\`, \`place-content\`, \`place-self\` 🎯

ទាំងនេះគឺជា Shorthand Properties សម្រាប់តម្រឹម Items ទាំងតាម Main Axis និង Cross Axis ក្នុងពេលតែមួយ។

* \`place-items-center\`: តម្រឹម Items នៅកណ្តាលទាំងពីរអ័ក្ស (សម្រាប់ Grid Container) ។
* \`place-content-center\`: តម្រឹម Content (Grid Tracks) នៅកណ្តាល Container (សម្រាប់ Grid Container) ។
* \`place-self-center\`: តម្រឹម Item ជាក់លាក់មួយនៅកណ្តាលទាំងពីរអ័ក្ស (សម្រាប់ Grid Item) ។

\`\`\`html
<div class="grid grid-cols-2 place-items-center h-48 bg-indigo-200 p-4">
  <div class="p-2 bg-indigo-400">Item 1</div>
  <div class="p-2 bg-indigo-500">Item 2</div>
</div>

<div class="grid grid-cols-2 gap-4 h-48 bg-pink-200 p-4">
  <div class="p-2 bg-pink-400 place-self-end">Item 1 (End)</div>
  <div class="p-2 bg-pink-500 place-self-center">Item 2 (Center)</div>
</div>
\`\`\`

---

## 9. របៀបកំណត់ \`grid-auto-flow\` (row, col, dense) ➡️⬇️ Flow

កំណត់របៀបដែល Grid Items ត្រូវបានដាក់ដោយស្វ័យប្រវត្តិទៅក្នុង Grid ។

* \`grid-flow-row\`: (Default) ដាក់ Items តាមជួរដេក រួចបន្តទៅជួរដេកបន្ទាប់។
* \`grid-flow-col\`: ដាក់ Items តាមជួរឈរ រួចបន្តទៅជួរឈរបន្ទាប់។
* \`grid-flow-row-dense\`: ដាក់ Items តាមជួរដេក ដោយព្យាយាមបំពេញចន្លោះទំនេរតូចៗ។
* \`grid-flow-col-dense\`: ដាក់ Items តាមជួរឈរ ដោយព្យាយាមបំពេញចន្លោះទំនេរតូចៗ។

\`\`\`html
<div class="grid grid-cols-3 grid-flow-col gap-4 h-32 bg-orange-200 p-4">
  <div class="p-2 bg-orange-400">1</div>
  <div class="p-2 bg-orange-500">2</div>
  <div class="p-2 bg-orange-600">3</div>
  <div class="p-2 bg-orange-700">4</div>
</div>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Responsive Photo Gallery ជាមួយ Grid</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីរបៀបបង្កើត Photo Gallery ដែលមាន Responsive ដោយប្រើ Grid ។</p>
<div class="container mx-auto p-4 bg-white shadow-lg rounded-lg">
  <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">វិចិត្រសាលរូបភាព</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <img src="https://placehold.co/400x300/E0F2F7/2C3E50?text=Image+1" alt="Image 1" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="font-semibold text-lg mb-2">ចំណងជើងរូបភាព ១</h3>
        <p class="text-gray-600 text-sm">ការពិពណ៌នារូបភាពខ្លីៗនៅទីនេះ។</p>
      </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <img src="https://placehold.co/400x300/E0F7FA/2C3E50?text=Image+2" alt="Image 2" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="font-semibold text-lg mb-2">ចំណងជើងរូបភាព ២</h3>
        <p class="text-gray-600 text-sm">ការពិពណ៌នារូបភាពខ្លីៗនៅទីនេះ។</p>
      </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <img src="https://placehold.co/400x300/E8F5E9/2C3E50?text=Image+3" alt="Image 3" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="font-semibold text-lg mb-2">ចំណងជើងរូបភាព ៣</h3>
        <p class="text-gray-600 text-sm">ការពិពណ៌នារូបភាពខ្លីៗនៅទីនេះ។</p>
      </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <img src="https://placehold.co/400x300/FFF3E0/2C3E50?text=Image+4" alt="Image 4" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="font-semibold text-lg mb-2">ចំណងជើងរូបភាព ៤</h3>
        <p class="text-gray-600 text-sm">ការពិពណ៌នារូបភាពខ្លីៗនៅទីនេះ។</p>
      </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <img src="https://placehold.co/400x300/FCE4EC/2C3E50?text=Image+5" alt="Image 5" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="font-semibold text-lg mb-2">ចំណងជើងរូបភាព ៥</h3>
        <p class="text-gray-600 text-sm">ការពិពណ៌នារូបភាពខ្លីៗនៅទីនេះ។</p>
      </div>
    </div>
    <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <img src="https://placehold.co/400x300/EDE7F6/2C3E50?text=Image+6" alt="Image 6" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="font-semibold text-lg mb-2">ចំណងជើងរូបភាព ៦</h3>
        <p class="text-gray-600 text-sm">ការពិពណ៌នារូបភាពខ្លីៗនៅទីនេះ។</p>
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
    <title>Tailwind CSS Grid Example</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

    <div class="container mx-auto p-4 mt-10 bg-white shadow-lg rounded-lg">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">វិចិត្រសាលរូបភាព</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img src="https://placehold.co/400x300/E0F2F7/2C3E50?text=Image+1" alt="Image 1" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-2">ចំណងជើងរូបភាព ១</h3>
                    <p class="text-gray-600 text-sm">ការពិពណ៌នារូបភាពខ្លីៗនៅទីនេះ។</p>
                </div>
            </div>
            <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img src="https://placehold.co/400x300/E0F7FA/2C3E50?text=Image+2" alt="Image 2" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-2">ចំណងជើងរូបភាព ២</h3>
                    <p class="text-gray-600 text-sm">ការពិពណ៌នារូបភាពខ្លីៗនៅទីនេះ។</p>
                </div>
            </div>
            <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img src="https://placehold.co/400x300/E8F5E9/2C3E50?text=Image+3" alt="Image 3" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-2">ចំណងជើងរូបភាព ៣</h3>
                    <p class="text-gray-600 text-sm">ការពិពណ៌នារូបភាពខ្លីៗនៅទីនេះ។</p>
                </div>
            </div>
            <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img src="https://placehold.co/400x300/FFF3E0/2C3E50?text=Image+4" alt="Image 4" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-2">ចំណងជើងរូបភាព ៤</h3>
                    <p class="text-gray-600 text-sm">ការពិពណ៌នារូបភាពខ្លីៗនៅទីនេះ។</p>
                </div>
            </div>
            <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img src="https://placehold.co/400x300/FCE4EC/2C3E50?text=Image+5" alt="Image 5" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-2">ចំណងជើងរូបភាព ៥</h3>
                    <p class="text-gray-600 text-sm">ការពិពណ៌នារូបភាពខ្លីៗនៅទីនេះ។</p>
                </div>
            </div>
            <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img src="https://placehold.co/400x300/EDE7F6/2C3E50?text=Image+6" alt="Image 6" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-2">ចំណងជើងរូបភាព ៦</h3>
                    <p class="text-gray-600 text-sm">ការពិពណ៌នារូបភាពខ្លីៗនៅទីនេះ។</p>
                </div>
            </div>
        </div>
    </div>

</body>
</html>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់ Element ជា Grid Container?',
      options: ['`flex`', '`block`', '`grid`', '`inline-block`'],
      correct: 2,
      explanation: 'Class `grid` ត្រូវបានប្រើដើម្បីកំណត់ Element ជា Grid Container ។'
    },
    {
      question: 'តើ Class `grid-cols-4` ធ្វើអ្វី?',
      options: [
        'បង្កើត 4 Rows ដែលមានទំហំស្មើគ្នា',
        'បង្កើត 4 Columns ដែលមានទំហំស្មើគ្នា',
        'កំណត់ Item ឱ្យលាតសន្ធឹង 4 Columns',
        'កំណត់ Item ឱ្យលាតសន្ធឹង 4 Rows'
      ],
      correct: 1,
      explanation: 'Class `grid-cols-4` បង្កើត 4 Columns ដែលមានទំហំស្មើគ្នា។'
    },
    {
      question: 'តើ Class `gap-4` ធ្វើអ្វី?',
      options: [
        'កំណត់គម្លាត 4 units តែតាមអ័ក្ស X',
        'កំណត់គម្លាត 4 units តែតាមអ័ក្ស Y',
        'កំណត់គម្លាត 4 units ទាំងតាមអ័ក្ស X និង Y',
        'មិនមានឥទ្ធិពលអ្វីទេ'
      ],
      correct: 2,
      explanation: 'Class `gap-4` កំណត់គម្លាត 4 units ទាំងតាមអ័ក្ស X និង Y រវាង Grid Items ។'
    },
    {
      question: 'តើ Class `col-span-2` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ Item ឱ្យលាតសន្ធឹងលើ 2 Rows',
        'ដើម្បីកំណត់ Item ឱ្យលាតសន្ធឹងលើ 2 Columns',
        'ដើម្បីកំណត់ Item ឱ្យចាប់ផ្តើមនៅ Column ទី 2',
        'ដើម្បីកំណត់ Item ឱ្យបញ្ចប់នៅ Column ទី 2'
      ],
      correct: 1,
      explanation: 'Class `col-span-2` អនុញ្ញាតឱ្យ Grid Item លាតសន្ធឹងលើ 2 Columns ។'
    },
    {
      question: 'តើ Class `row-span-3` ធ្វើអ្វី?',
      options: [
        'លាតសន្ធឹង Item លើ 3 Columns',
        'លាតសន្ធឹង Item លើ 3 Rows',
        'ចាប់ផ្តើម Item នៅ Row ទី 3',
        'បញ្ចប់ Item នៅ Row ទី 3'
      ],
      correct: 1,
      explanation: 'Class `row-span-3` អនុញ្ញាតឱ្យ Grid Item លាតសន្ធឹងលើ 3 Rows ។'
    },
    {
      question: 'តើ `grid-flow-col` ធ្វើអ្វី?',
      options: [
        'ដាក់ Items តាមជួរដេក',
        'ដាក់ Items តាមជួរឈរ',
        'ដាក់ Items តាមជួរដេកដោយព្យាយាមបំពេញចន្លោះ',
        'ដាក់ Items តាមជួរឈរដោយព្យាយាមបំពេញចន្លោះ'
      ],
      correct: 1,
      explanation: '`grid-flow-col` ដាក់ Items តាមជួរឈរ រួចបន្តទៅជួរឈរបន្ទាប់។'
    },
    {
      question: 'តើ Class `place-items-center` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីតម្រឹម Item ជាក់លាក់មួយនៅកណ្តាល',
        'ដើម្បីតម្រឹម Items ទាំងអស់នៅកណ្តាលទាំងពីរអ័ក្សនៅក្នុង Grid Container',
        'ដើម្បីចែកចាយចន្លោះរវាង Grid Tracks',
        'ដើម្បីកំណត់ទំហំ Grid'
      ],
      correct: 1,
      explanation: 'Class `place-items-center` តម្រឹម Items ទាំងអស់នៅកណ្តាលទាំងពីរអ័ក្ស (Main និង Cross Axis) នៅក្នុង Grid Container ។'
    },
    {
      question: 'តើ `inline-grid` ខុសពី `grid` យ៉ាងដូចម្តេច?',
      options: [
        '`inline-grid` គឺជា Block-level Grid Container',
        '`grid` គឺជា Inline-level Grid Container',
        '`inline-grid` គឺជា Inline-level Grid Container',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 2,
      explanation: '`inline-grid` កំណត់ Element ជា Inline-level Grid Container ខណៈ `grid` កំណត់វាជា Block-level Grid Container ។'
    },
    {
      question: 'តើ Class `grid-cols-auto` ធ្វើអ្វី?',
      options: [
        'Columns នឹងយកទំហំថេរ',
        'Columns នឹងយកទំហំតាមមាតិកា',
        'Columns នឹងយកទំហំធំបំផុតតាមមាតិកា',
        'Columns នឹងយកទំហំតូចបំផុតតាមមាតិកា'
      ],
      correct: 1,
      explanation: 'Class `grid-cols-auto` កំណត់ Columns ឱ្យយកទំហំតាមមាតិកា។'
    },
    {
      question: 'តើ Class `col-start-2` ធ្វើអ្វី?',
      options: [
        'កំណត់ Item ឱ្យលាតសន្ធឹង 2 Columns',
        'កំណត់ Item ឱ្យចាប់ផ្តើមនៅ Column Line ទី 2',
        'កំណត់ Item ឱ្យបញ្ចប់នៅ Column Line ទី 2',
        'ផ្លាស់ប្តូរលំដាប់ Item'
      ],
      correct: 1,
      explanation: 'Class `col-start-2` កំណត់ Item ឱ្យចាប់ផ្តើមនៅ Column Line ទី 2 ។'
    },
    {
      question: 'តើ `grid-flow-row-dense` ធ្វើអ្វី?',
      options: [
        'ដាក់ Items តាមជួរឈរ',
        'ដាក់ Items តាមជួរដេក រួចបន្តទៅជួរដេកបន្ទាប់',
        'ដាក់ Items តាមជួរដេក ដោយព្យាយាមបំពេញចន្លោះទំនេរតូចៗ',
        'ដាក់ Items តាមជួរឈរដោយព្យាយាមបំពេញចន្លោះទំនេរតូចៗ'
      ],
      correct: 2,
      explanation: '`grid-flow-row-dense` ដាក់ Items តាមជួរដេក ដោយព្យាយាមបំពេញចន្លោះទំនេរតូចៗ។'
    },
    {
      question: 'តើ Class `place-self-end` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីតម្រឹម Items ទាំងអស់នៅចុង',
        'ដើម្បីតម្រឹម Item ជាក់លាក់មួយនៅចុងទាំងពីរអ័ក្ស',
        'ដើម្បីចែកចាយចន្លោះរវាង Grid Tracks',
        'ដើម្បីកំណត់ទំហំ Grid'
      ],
      correct: 1,
      explanation: 'Class `place-self-end` តម្រឹម Item ជាក់លាក់មួយនៅចុងទាំងពីរអ័ក្ស (Main និង Cross Axis) ។'
    },
    {
      question: 'តើ `grid-template-rows` ត្រូវបានប្រើសម្រាប់កំណត់អ្វី?',
      options: [
        'ចំនួន Columns',
        'ចំនួន Rows',
        'គម្លាតរវាង Columns',
        'គម្លាតរវាង Rows'
      ],
      correct: 1,
      explanation: '`grid-template-rows` ត្រូវបានប្រើសម្រាប់កំណត់ចំនួន និងទំហំរបស់ Rows ។'
    },
    {
      question: 'តើ Grid Layout គឺជាប្រព័ន្ធ Layout ប្រភេទណា?',
      options: [
        'មួយវិមាត្រ (One-dimensional)',
        'ពីរវិមាត្រ (Two-dimensional)',
        'បីវិមាត្រ (Three-dimensional)',
        'គ្មានវិមាត្រ (No-dimensional)'
      ],
      correct: 1,
      explanation: 'Grid Layout គឺជាប្រព័ន្ធ Layout ពីរវិមាត្រ (two-dimensional) ។'
    },
    {
      question: 'តើ Class `gap-x-8` ធ្វើអ្វី?',
      options: [
        'កំណត់គម្លាត 8 units តាមអ័ក្ស Y',
        'កំណត់គម្លាត 8 units តាមអ័ក្ស X',
        'កំណត់គម្លាត 8 units ទាំងតាមអ័ក្ស X និង Y',
        'មិនមានឥទ្ធិពលអ្វីទេ'
      ],
      correct: 1,
      explanation: 'Class `gap-x-8` កំណត់គម្លាត 8 units តាមអ័ក្ស X (horizontally) រវាង Grid Items ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Layout Grid សាមញ្ញ

បង្កើតឯកសារ HTML ថ្មីមួយ (ឧទាហរណ៍៖ \`grid-lab.html\`) ហើយភ្ជាប់ **Tailwind CSS CDN** ។
នៅក្នុងឯកសារនោះ សូមបង្កើត Layout មួយដោយប្រើ **CSS Grid** ។

**តម្រូវការ:**

1.  បង្កើត **Container ធំ** មួយ (\`div\`) ដែលមាន Class \`min-h-screen\` និង \`bg-gray-50\` ដើម្បីឱ្យវាបំពេញកម្ពស់អេក្រង់ និងមានផ្ទៃខាងក្រោយពណ៌ប្រផេះស្រាល។ ប្រើ Flexbox ដើម្បី **តម្រឹមមាតិកា (Container ផ្ទៃក្នុង) របស់វាឱ្យចំកណ្តាលទាំងផ្ដេក និងបញ្ឈរ** ។
2.  នៅក្នុង Container ធំនោះ បង្កើត **Grid Container ផ្ទៃក្នុង** មួយទៀត (\`div\`) ដែលជាកន្លែងដែល Items របស់អ្នកនឹងស្ថិតនៅ។
    * កំណត់វាជា **Grid Container** (\`grid\`) ។
    * កំណត់វាឱ្យមាន **3 Columns ដែលមានទំហំស្មើគ្នា** (\`grid-cols-3\`) ។
    * ផ្តល់ **គម្លាតរវាង Grid Items** ចំនួន **6 units** (\`gap-6\`) ។
    * ផ្តល់ **Padding** 8 units (\`p-8\`) និង **ផ្ទៃខាងក្រោយ** ពណ៌ប្រផេះ 100 (\`bg-gray-100\`) ។
    * បន្ថែម **Border Radius** ស្រាល (\`rounded-lg\`) និង **Shadow** ស្រាល (\`shadow-md\`) ទៅលើ Container នេះ។
3.  នៅក្នុង Grid Container ផ្ទៃក្នុងនោះ បង្កើត **Div 5 ផ្សេងគ្នា** ដែលជា Grid Items៖
    * **Item នីមួយៗ** គួរតែមាន **Padding** 4 units (\`p-4\`)។
    * **Item ទី 1**: ផ្ទៃខាងក្រោយពណ៌ខៀវ 400 (\`bg-blue-400\`) និងអត្ថបទ "Item 1" ។
    * **Item ទី 2**: ផ្ទៃខាងក្រោយពណ៌ខៀវ 500 (\`bg-blue-500\`) និងអត្ថបទ "Item 2" ។
    * **Item ទី 3**: ផ្ទៃខាងក្រោយពណ៌ខៀវ 600 (\`bg-blue-600\`) និងអត្ថបទ "Item 3" ។
    * **Item ទី 4**: ផ្ទៃខាងក្រោយពណ៌ខៀវ 700 (\`bg-blue-700\`) និងអត្ថបទ "Item 4" ។
    * **Item ទី 5**: ផ្ទៃខាងក្រោយពណ៌ខៀវ 800 (\`bg-blue-800\`) និងអត្ថបទ "Item 5" ។
    * បន្ថែម **Border Radius** ស្រាល (\`rounded-md\`) និង **Shadow** ស្រាល (\`shadow-sm\`) ទៅលើ Items នីមួយៗ។
    * កំណត់ **ពណ៌អត្ថបទ** ទៅជាពណ៌ស (\`text-white\`) សម្រាប់ Items ទាំង 5 ។
    * ធ្វើឱ្យ **Div ទី ១ លាតសន្ធឹង 2 Columns** (\`col-span-2\`) ។

សូមប្រាកដថាអ្នកប្រើ **Tailwind CSS CDN** សម្រាប់ Lab នេះ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Grid Lab</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

    <div class="flex items-center justify-center min-h-screen bg-gray-50">
        <div class="grid grid-cols-3 gap-6 p-8 bg-gray-100 rounded-lg shadow-md">
            <div class="p-4 bg-blue-400 text-white rounded-md shadow-sm col-span-2">Item 1 (Span 2 Cols)</div>
            <div class="p-4 bg-blue-500 text-white rounded-md shadow-sm">Item 2</div>
            <div class="p-4 bg-blue-600 text-white rounded-md shadow-sm">Item 3</div>
            <div class="p-4 bg-blue-700 text-white rounded-md shadow-sm">Item 4</div>
            <div class="p-4 bg-blue-800 text-white rounded-md shadow-sm">Item 5</div>
        </div>
    </div>

</body>
</html>
`
  }
};

export default TailwindLesson2_2Content;