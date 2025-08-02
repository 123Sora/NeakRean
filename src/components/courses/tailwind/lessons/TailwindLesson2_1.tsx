// src/components/lessons/tailwind/TailwindLesson2_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const TailwindLesson2_1Content: LessonContent = {
  title: 'Layout ជាមួយ Flexbox',
  objectives: [
    'យល់ដឹងពីមូលដ្ឋានគ្រឹះនៃ Flexbox ក្នុង Tailwind CSS',
    'របៀបប្រើប្រាស់ `display` (flex, inline-flex)',
    'របៀបកំណត់ `flex-direction` (row, col)',
    'របៀបកំណត់ `justify-content` (start, end, center, between, around, evenly)',
    'របៀបកំណត់ `align-items` (start, end, center, baseline, stretch)',
    'របៀបកំណត់ `flex-wrap` (wrap, nowrap, wrap-reverse)',
    'របៀបកំណត់ `flex-grow`, `flex-shrink`, `flex-auto`, `flex-none`',
    'របៀបកំណត់ `order` របស់ Items',
    'របៀបកំណត់ `align-self`'
  ],
  content: `
# Layout ជាមួយ Flexbox 📦↔️

---

Flexbox (Flexible Box Module) គឺជាវិធីសាស្ត្រមួយវិមាត្រ (one-dimensional) សម្រាប់រៀបចំ Elements នៅក្នុង Container មួយ។ វាអនុញ្ញាតឱ្យអ្នករៀបចំ Elements ជាជួរដេក (row) ឬជួរឈរ (column) និងចែកចាយចន្លោះទំនេរនៅក្នុង Container ។

---

## 1. មូលដ្ឋានគ្រឹះនៃ Flexbox ក្នុង Tailwind CSS 💡

ដើម្បីប្រើប្រាស់ Flexbox ក្នុង Tailwind CSS អ្នកគ្រាន់តែបន្ថែម Class \`flex\` ទៅលើ Parent Element (Flex Container) ។

\`\`\`html
<div class="flex">
  </div>
\`\`\`

---

## 2. របៀបប្រើប្រាស់ \`display\` (flex, inline-flex) 🖥️

* \`flex\`: កំណត់ Element ជា Flex Container ដែលជា Block-level ។
* \`inline-flex\`: កំណត់ Element ជា Flex Container ដែលជា Inline-level ។

\`\`\`html
<div class="flex bg-blue-200 p-4">
  <div class="p-2 bg-blue-400 text-white">Item 1</div>
  <div class="p-2 bg-blue-500 text-white">Item 2</div>
</div>

<span class="inline-flex bg-green-200 p-4">
  <span class="p-2 bg-green-400 text-white">Item A</span>
  <span class="p-2 bg-green-500 text-white">Item B</span>
</span>
\`\`\`

---

## 3. របៀបកំណត់ \`flex-direction\` (row, col) ➡️⬇️

កំណត់ទិសដៅសំខាន់ (main axis) របស់ Flex Items ។

* \`flex-row\`: រៀបចំ Items ជាជួរដេក (Default) ។
* \`flex-row-reverse\`: រៀបចំ Items ជាជួរដេកបញ្ច្រាស។
* \`flex-col\`: រៀបចំ Items ជាជួរឈរ។
* \`flex-col-reverse\`: រៀបចំ Items ជាជួរឈរបញ្ច្រាស។

\`\`\`html
<div class="flex flex-row bg-gray-200 p-4 space-x-2">
  <div>1</div><div>2</div><div>3</div>
</div>

<div class="flex flex-col bg-gray-300 p-4 space-y-2 mt-4">
  <div>A</div><div>B</div><div>C</div>
</div>
\`\`\`

---

## 4. របៀបកំណត់ \`justify-content\` (start, end, center, between, around, evenly) ↔️Alignment

កំណត់របៀបចែកចាយចន្លោះទំនេរ និងតម្រឹម Items តាម Main Axis ។

* \`justify-start\`: តម្រឹម Items ទៅដើម Main Axis ។
* \`justify-end\`: តម្រឹម Items ទៅចុង Main Axis ។
* \`justify-center\`: តម្រឹម Items នៅកណ្តាល Main Axis ។
* \`justify-between\`: ចែកចាយចន្លោះរវាង Items ។
* \`justify-around\`: ចែកចាយចន្លោះជុំវិញ Items (មានចន្លោះនៅដើម និងចុង) ។
* \`justify-evenly\`: ចែកចាយចន្លោះស្មើៗគ្នាជុំវិញ Items (ចន្លោះនៅដើម ចុង និងរវាង Items គឺស្មើគ្នា) ។

\`\`\`html
<div class="flex justify-center bg-yellow-200 p-4">
  <div class="p-2 bg-yellow-400">1</div>
  <div class="p-2 bg-yellow-500">2</div>
</div>
\`\`\`

---

## 5. របៀបកំណត់ \`align-items\` (start, end, center, baseline, stretch) ↕️Alignment

កំណត់របៀបតម្រឹម Items តាម Cross Axis (អ័ក្សកាត់កែងនឹង Main Axis) ។

* \`items-start\`: តម្រឹម Items ទៅដើម Cross Axis ។
* \`items-end\`: តម្រឹម Items ទៅចុង Cross Axis ។
* \`items-center\`: តម្រឹម Items នៅកណ្តាល Cross Axis ។
* \`items-baseline\`: តម្រឹម Items តាម Baseline របស់អក្សរ។
* \`items-stretch\`: លាតសន្ធឹង Items ដើម្បីបំពេញ Container (Default) ។

\`\`\`html
<div class="flex items-center h-24 bg-purple-200 p-4">
  <div class="p-2 bg-purple-400">Item 1</div>
  <div class="p-2 bg-purple-500">Item 2</div>
</div>
\`\`\`

---

## 6. របៀបកំណត់ \`flex-wrap\` (wrap, nowrap, wrap-reverse) 🔄

កំណត់ថាតើ Flex Items គួរតែ Wrap ទៅបន្ទាត់ថ្មីឬអត់ នៅពេលដែលពួកគេលើសពីទំហំ Container ។

* \`flex-nowrap\`: Items នឹងមិន Wrap (Default) ។
* \`flex-wrap\`: Items នឹង Wrap ទៅបន្ទាត់ថ្មី។
* \`flex-wrap-reverse\`: Items នឹង Wrap ទៅបន្ទាត់ថ្មីតាមលំដាប់បញ្ច្រាស។

\`\`\`html
<div class="flex flex-wrap w-48 bg-teal-200 p-2">
  <div class="w-20 h-10 bg-teal-400 m-1"></div>
  <div class="w-20 h-10 bg-teal-500 m-1"></div>
  <div class="w-20 h-10 bg-teal-600 m-1"></div>
</div>
\`\`\`

---

## 7. របៀបកំណត់ \`flex-grow\`, \`flex-shrink\`, \`flex-auto\`, \`flex-none\` 🌱 Shrink

* \`flex-grow\`: អនុញ្ញាតឱ្យ Item លាតសន្ធឹងដើម្បីបំពេញចន្លោះទំនេរ។
* \`flex-shrink\`: អនុញ្ញាតឱ្យ Item រួមតូចនៅពេលដែលចន្លោះមិនគ្រប់គ្រាន់។
* \`flex-auto\`: កំណត់ \`flex: 1 1 auto;\` (grow, shrink, base size auto) ។
* \`flex-initial\`: កំណត់ \`flex: 0 1 auto;\` (no grow, shrink, base size auto) ។
* \`flex-none\`: កំណត់ \`flex: none;\` (no grow, no shrink) ។

\`\`\`html
<div class="flex bg-red-200 p-4">
  <div class="p-2 bg-red-400 flex-none">Fixed</div>
  <div class="p-2 bg-red-500 flex-grow">Grow</div>
  <div class="p-2 bg-red-600 flex-grow">Grow</div>
</div>
\`\`\`

---

## 8. របៀបកំណត់ \`order\` របស់ Items 🔢

អនុញ្ញាតឱ្យអ្នកផ្លាស់ប្តូរលំដាប់លំដោយរបស់ Flex Items ដោយមិនបាច់ផ្លាស់ប្តូរលំដាប់ក្នុង HTML ។

\`\`\`html
<div class="flex bg-indigo-200 p-4">
  <div class="p-2 bg-indigo-400 order-last">Last</div>
  <div class="p-2 bg-indigo-500 order-first">First</div>
  <div class="p-2 bg-indigo-600">Middle</div>
</div>
\`\`\`
* \`order-first\`: កំណត់ Item ឱ្យបង្ហាញមុនគេ។
* \`order-last\`: កំណត់ Item ឱ្យបង្ហាញចុងក្រោយគេ។
* \`order-none\`: កំណត់ Item ឱ្យត្រឡប់ទៅលំដាប់ធម្មតាវិញ (Default) ។

---

## 9. របៀបកំណត់ \`align-self\` 🧍

អនុញ្ញាតឱ្យអ្នក Override \`align-items\` Property សម្រាប់ Flex Item ជាក់លាក់មួយ។

* \`self-auto\`: (Default)
* \`self-start\`: តម្រឹម Item ទៅដើម Cross Axis ។
* \`self-end\`: តម្រឹម Item ទៅចុង Cross Axis ។
* \`self-center\`: តម្រឹម Item នៅកណ្តាល Cross Axis ។
* \`self-baseline\`: តម្រឹម Item តាម Baseline របស់អក្សរ។
* \`self-stretch\`: លាតសន្ធឹង Item ដើម្បីបំពេញ Container ។

\`\`\`html
<div class="flex items-start h-24 bg-pink-200 p-4">
  <div class="p-2 bg-pink-400">Item 1</div>
  <div class="p-2 bg-pink-500 self-end">Item 2 (End)</div>
  <div class="p-2 bg-pink-600">Item 3</div>
</div>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Responsive Navbar ជាមួយ Flexbox</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីរបៀបបង្កើត Navbar ដែលមាន Responsive ដោយប្រើ Flexbox ។</p>
<div class="container mx-auto p-4 bg-white shadow-lg rounded-lg">
  <nav class="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-gray-800 text-white rounded-md">
    <div class="text-2xl font-bold mb-4 md:mb-0">
      <a href="#" class="hover:text-blue-400 transition-colors">MySite</a>
    </div>
    
    <button class="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>

    <ul class="hidden md:flex space-x-6">
      <li><a href="#" class="hover:text-blue-400 transition-colors">ទំព័រដើម</a></li>
      <li><a href="#" class="hover:text-blue-400 transition-colors">អំពីយើង</a></li>
      <li><a href="#" class="hover:text-blue-400 transition-colors">សេវាកម្ម</a></li>
      <li><a href="#" class="hover:text-blue-400 transition-colors">ទំនាក់ទំនង</a></li>
    </ul>
  </nav>

  <div class="mt-8 p-6 bg-blue-50 rounded-md">
    <p class="text-blue-800 text-center text-lg md:text-left md:text-xl">
      ប្តូរទំហំ Browser របស់អ្នកដើម្បីមើលពីរបៀបដែល Layout ផ្លាស់ប្តូរ។
    </p>
  </div>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Flexbox Example</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

    <div class="container mx-auto p-4 mt-10 bg-white shadow-lg rounded-lg">
        <nav class="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-gray-800 text-white rounded-md">
            <div class="text-2xl font-bold mb-4 md:mb-0">
                <a href="#" class="hover:text-blue-400 transition-colors">MySite</a>
            </div>
            
            <button class="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>

            <ul class="hidden md:flex space-x-6">
                <li><a href="#" class="hover:text-blue-400 transition-colors">ទំព័រដើម</a></li>
                <li><a href="#" class="hover:text-blue-400 transition-colors">អំពីយើង</a></li>
                <li><a href="#" class="hover:text-blue-400 transition-colors">សេវាកម្ម</a></li>
                <li><a href="#" class="hover:text-blue-400 transition-colors">ទំនាក់ទំនង</a></li>
            </ul>
        </nav>

        <div class="mt-8 p-6 bg-blue-50 rounded-md">
            <p class="text-blue-800 text-center text-lg md:text-left md:text-xl">
                ប្តូរទំហំ Browser របស់អ្នកដើម្បីមើលពីរបៀបដែល Layout ផ្លាស់ប្តូរ។
            </p>
        </div>
    </div>

</body>
</html>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់ Element ជា Flex Container?',
      options: ['`block`', '`inline`', '`flex`', '`grid`'],
      correct: 2,
      explanation: 'Class `flex` ត្រូវបានប្រើដើម្បីកំណត់ Element ជា Flex Container ។'
    },
    {
      question: 'តើ Class `flex-col` ធ្វើអ្វី?',
      options: [
        'រៀបចំ Items ជាជួរដេក',
        'រៀបចំ Items ជាជួរឈរ',
        'រៀបចំ Items ជាជួរដេកបញ្ច្រាស',
        'រៀបចំ Items ជាជួរឈរបញ្ច្រាស'
      ],
      correct: 1,
      explanation: 'Class `flex-col` រៀបចំ Items ជាជួរឈរ (Column) ។'
    },
    {
      question: 'តើ Class `justify-center` ធ្វើអ្វី?',
      options: [
        'តម្រឹម Items ទៅដើម Main Axis',
        'តម្រឹម Items ទៅចុង Main Axis',
        'តម្រឹម Items នៅកណ្តាល Main Axis',
        'ចែកចាយចន្លោះរវាង Items'
      ],
      correct: 2,
      explanation: 'Class `justify-center` តម្រឹម Items នៅកណ្តាល Main Axis ។'
    },
    {
      question: 'តើ Class `items-end` ធ្វើអ្វី?',
      options: [
        'តម្រឹម Items ទៅដើម Cross Axis',
        'តម្រឹម Items ទៅចុង Cross Axis',
        'តម្រឹម Items នៅកណ្តាល Cross Axis',
        'លាតសន្ធឹង Items ដើម្បីបំពេញ Container'
      ],
      correct: 1,
      explanation: 'Class `items-end` តម្រឹម Items ទៅចុង Cross Axis ។'
    },
    {
      question: 'តើ Class `flex-wrap` ធ្វើអ្វី?',
      options: [
        'Items នឹងមិន Wrap',
        'Items នឹង Wrap ទៅបន្ទាត់ថ្មី',
        'Items នឹង Wrap ទៅបន្ទាត់ថ្មីតាមលំដាប់បញ្ច្រាស',
        'បង្កើនទំហំ Item'
      ],
      correct: 1,
      explanation: 'Class `flex-wrap` អនុញ្ញាតឱ្យ Items Wrap ទៅបន្ទាត់ថ្មីនៅពេលដែលចន្លោះមិនគ្រប់គ្រាន់។'
    },
    {
      question: 'តើ Class `flex-grow` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីឱ្យ Item រួមតូច',
        'ដើម្បីឱ្យ Item លាតសន្ធឹងដើម្បីបំពេញចន្លោះទំនេរ',
        'ដើម្បីកំណត់ទំហំថេររបស់ Item',
        'ដើម្បីផ្លាស់ប្តូរលំដាប់ Item'
      ],
      correct: 1,
      explanation: 'Class `flex-grow` អនុញ្ញាតឱ្យ Item លាតសន្ធឹងដើម្បីបំពេញចន្លោះទំនេរនៅក្នុង Flex Container ។'
    },
    {
      question: 'តើ Class `order-last` ធ្វើអ្វី?',
      options: [
        'កំណត់ Item ឱ្យបង្ហាញមុនគេ',
        'កំណត់ Item ឱ្យបង្ហាញចុងក្រោយគេ',
        'កំណត់ Item ឱ្យត្រឡប់ទៅលំដាប់ធម្មតាវិញ',
        'លាក់ Item'
      ],
      correct: 1,
      explanation: 'Class `order-last` កំណត់ Item ឱ្យបង្ហាញចុងក្រោយគេនៅក្នុង Flex Container ។'
    },
    {
      question: 'តើ Class `self-center` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ទិសដៅរបស់ Flex Container',
        'ដើម្បីតម្រឹម Item ជាក់លាក់មួយនៅកណ្តាល Cross Axis',
        'ដើម្បីចែកចាយចន្លោះរវាង Items',
        'ដើម្បីកំណត់ទំហំ Item'
      ],
      correct: 1,
      explanation: 'Class `self-center` អនុញ្ញាតឱ្យអ្នក Override `align-items` Property សម្រាប់ Flex Item ជាក់លាក់មួយ ដោយតម្រឹមវាទៅកណ្តាល Cross Axis ។'
    },
    {
      question: 'តើ `flex-shrink` ធ្វើអ្វី?',
      options: [
        'អនុញ្ញាតឱ្យ Item លាតសន្ធឹង',
        'អនុញ្ញាតឱ្យ Item រួមតូចនៅពេលដែលចន្លោះមិនគ្រប់គ្រាន់',
        'ការពារ Item ពីការរួតតូច',
        'កំណត់ទំហំ Item ដោយស្វ័យប្រវត្តិ'
      ],
      correct: 1,
      explanation: '`flex-shrink` អនុញ្ញាតឱ្យ Item រួមតូចនៅពេលដែលចន្លោះមិនគ្រប់គ្រាន់នៅក្នុង Flex Container ។'
    },
    {
      question: 'តើ `justify-evenly` ខុសពី `justify-around` យ៉ាងដូចម្តេច?',
      options: [
        '`justify-evenly` មានចន្លោះច្រើនជាងនៅចុង',
        '`justify-evenly` ចែកចាយចន្លោះស្មើៗគ្នាជុំវិញ Items (រួមទាំងដើម និងចុង)',
        '`justify-around` ចែកចាយចន្លោះស្មើៗគ្នាជុំវិញ Items (រួមទាំងដើម និងចុង)',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 1,
      explanation: '`justify-evenly` ចែកចាយចន្លោះស្មើៗគ្នាជុំវិញ Items (ចន្លោះនៅដើម ចុង និងរវាង Items គឺស្មើគ្នា) ខណៈ `justify-around` មានចន្លោះតិចជាងនៅដើម និងចុង។'
    },
    {
      question: 'តើ Class `flex-none` ធ្វើអ្វី?',
      options: [
        'អនុញ្ញាតឱ្យ Item លូតលាស់ និងរួតតូច',
        'ការពារ Item ពីការលូតលាស់ និងរួតតូច',
        'កំណត់ទំហំ Item ទៅ Auto',
        'ផ្លាស់ប្តូរទិសដៅ Flex'
      ],
      correct: 1,
      explanation: 'Class `flex-none` កំណត់ `flex: none;` ដែលការពារ Item ពីការលូតលាស់ និងរួតតូច។'
    },
    {
      question: 'តើ `align-items-stretch` គឺជា Behavior លំនាំដើមសម្រាប់ `align-items` ដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែពេលប្រើ `flex-col`', 'បានតែពេលប្រើ `flex-row`'],
      correct: 0,
      explanation: 'បាទ/ចាស `items-stretch` គឺជា Behavior លំនាំដើមសម្រាប់ `align-items` ដែលលាតសន្ធឹង Items ដើម្បីបំពេញ Container ។'
    },
    {
      question: 'តើ Class `flex-row-reverse` ធ្វើអ្វី?',
      options: [
        'រៀបចំ Items ជាជួរឈរបញ្ច្រាស',
        'រៀបចំ Items ជាជួរដេកបញ្ច្រាស',
        'រៀបចំ Items ជាជួរដេកធម្មតា',
        'រៀបចំ Items ជាជួរឈរធម្មតា'
      ],
      correct: 1,
      explanation: 'Class `flex-row-reverse` រៀបចំ Items ជាជួរដេកបញ្ច្រាស។'
    },
    {
      question: 'តើ `inline-flex` ខុសពី `flex` យ៉ាងដូចម្តេច?',
      options: [
        '`inline-flex` គឺជា Block-level Flex Container',
        '`flex` គឺជា Inline-level Flex Container',
        '`inline-flex` គឺជា Inline-level Flex Container',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 2,
      explanation: '`inline-flex` កំណត់ Element ជា Inline-level Flex Container ខណៈ `flex` កំណត់វាជា Block-level Flex Container ។'
    },
    {
      question: 'តើ Class `space-x-4` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វីនៅក្នុង Flex Container?',
      options: [
        'ដើម្បីបន្ថែម Margin Bottom ទៅ Items',
        'ដើម្បីបន្ថែម Padding ទៅ Items',
        'ដើម្បីបន្ថែម Space រវាង Items តាមអ័ក្ស X (horizontally)',
        'ដើម្បីបន្ថែម Space រវាង Items តាមអ័ក្ស Y (vertically)'
      ],
      correct: 2,
      explanation: 'Class `space-x-4` ត្រូវបានប្រើដើម្បីបន្ថែម Space រវាង Items តាមអ័ក្ស X (horizontally) នៅក្នុង Flex Container ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Layout Flexbox សាមញ្ញ

បង្កើតឯកសារ HTML ថ្មីមួយ (ឧទាហរណ៍៖ \`flex-lab.html\`) ហើយភ្ជាប់ **Tailwind CSS CDN** ។
នៅក្នុងឯកសារនោះ សូមបង្កើត Layout មួយដោយប្រើ **Flexbox** ដើម្បីបង្ហាញ Elements ចំនួន 3 នៅចំកណ្តាលទំព័រ។

**តម្រូវការ:**

1.  បង្កើត **Container ធំ** មួយ (\`div\`) ដែលមាន Class \`min-h-screen\` និង \`bg-gray-100\` ដើម្បីឱ្យវាបំពេញកម្ពស់អេក្រង់ និងមានផ្ទៃខាងក្រោយពណ៌ប្រផេះស្រាល។ ប្រើ Flexbox ដើម្បី **តម្រឹមមាតិកា (Container ផ្ទៃក្នុង) របស់វាឱ្យចំកណ្តាលទាំងផ្ដេក និងបញ្ឈរ** ។
2.  នៅក្នុង Container ធំនោះ បង្កើត **Flex Container ផ្ទៃក្នុង** មួយទៀត (\`div\`) ដែលជាកន្លែងដែល Items របស់អ្នកនឹងស្ថិតនៅ។
    * កំណត់វាជា **Flex Container** (\`flex\`) ។
    * កំណត់ **ទិសដៅ** របស់ Items ទៅជា **ជួរដេក** (\`flex-row\`) ។
    * **តម្រឹម Items** នៅក្នុង Container នេះឱ្យ **ចំកណ្តាលតាម Main Axis** (\`justify-center\`) ។
    * **តម្រឹម Items** នៅក្នុង Container នេះឱ្យ **ចំកណ្តាលតាម Cross Axis** (\`items-center\`) ។
    * ផ្តល់ **កម្ពស់** ដល់ Container ផ្ទៃក្នុងនេះ **24 units** (\`h-24\`) ។
    * ផ្តល់ **ផ្ទៃខាងក្រោយ** ពណ៌ប្រផេះ 200 (\`bg-gray-200\`) និង **Padding** 4 units (\`p-4\`) ។
    * ផ្តល់ **គម្លាតរវាង Items** តាម **អ័ក្ស X** ចំនួន 4 units (\`space-x-4\`) ។
3.  នៅក្នុង Flex Container ផ្ទៃក្នុងនោះ បង្កើត **Div 3 ផ្សេងគ្នា** ដែលជា Flex Items៖
    * **Item នីមួយៗ** គួរតែមាន **Padding** 4 units (\`p-4\`)។
    * **Item ទី 1**: ផ្ទៃខាងក្រោយពណ៌ខៀវ 400 (\`bg-blue-400\`) និងអត្ថបទ "Item 1" ។
    * **Item ទី 2**: ផ្ទៃខាងក្រោយពណ៌ខៀវ 500 (\`bg-blue-500\`) និងអត្ថបទ "Item 2" ។
    * **Item ទី 3**: ផ្ទៃខាងក្រោយពណ៌ខៀវ 600 (\`bg-blue-600\`) និងអត្ថបទ "Item 3" ។
    * បន្ថែម **Border Radius** ស្រាល (\`rounded-md\`) និង **Shadow** ស្រាល (\`shadow-sm\`) ទៅលើ Items នីមួយៗ។
    * កំណត់ **ពណ៌អត្ថបទ** ទៅជាពណ៌ស (\`text-white\`) សម្រាប់ Items ទាំង 3 ។

សូមប្រាកដថាអ្នកប្រើ **Tailwind CSS CDN** សម្រាប់ Lab នេះ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Flexbox Lab</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="flex flex-row justify-center items-center h-24 bg-gray-200 p-4 space-x-4">
            <div class="p-4 bg-blue-400 text-white rounded-md shadow-sm">Item 1</div>
            <div class="p-4 bg-blue-500 text-white rounded-md shadow-sm">Item 2</div>
            <div class="p-4 bg-blue-600 text-white rounded-md shadow-sm">Item 3</div>
        </div>
    </div>

</body>
</html>
`
  }
};

export default TailwindLesson2_1Content;