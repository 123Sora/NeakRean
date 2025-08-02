// src/components/lessons/tailwind/TailwindLesson1_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const TailwindLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី Tailwind CSS',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Tailwind CSS (ជា Utility-First CSS Framework)',
    'តើ Tailwind CSS ប្រើសម្រាប់អ្វី? (ជួយអភិវឌ្ឍ UI បានលឿន ដោយប្រើ Utility Classes ដោយផ្ទាល់ក្នុង HTML)',
    'គោលការណ៍ "Utility-First" មានន័យដូចម្តេច?',
    'គុណសម្បត្តិ និងគុណវិបត្តិនៃការប្រើប្រាស់ Tailwind CSS (ឧ. កាត់បន្ថយ CSS File Size, រចនាបានលឿន, អាចរៀនដំបូងពិបាកបន្តិច)',
    'ប្រៀបធៀប Tailwind CSS ជាមួយ Frameworks ផ្សេងទៀត (ដូចជា Bootstrap)'
  ],
  content: `
# ណែនាំអំពី Tailwind CSS 🚀

---

សូមស្វាគមន៍មកកាន់មេរៀន Tailwind CSS! នៅក្នុងមេរៀននេះ យើងនឹងស្វែងយល់ពីមូលដ្ឋានគ្រឹះនៃ Tailwind CSS និងរបៀបដែលវាអាចជួយអ្នកក្នុងការអភិវឌ្ឍន៍ User Interface (UI) យ៉ាងមានប្រសិទ្ធភាព។

---

## 1. អ្វីទៅជា Tailwind CSS? 🤔

**Tailwind CSS** គឺជា **Utility-First CSS Framework** ។ នេះមានន័យថា ជំនួសឱ្យការសរសេរ CSS ផ្ទាល់ខ្លួនរបស់អ្នកនៅក្នុង File CSS ធំមួយ Tailwind ផ្តល់នូវ **Utility Classes** តូចៗរាប់ពាន់ ដែលអ្នកអាចប្រើដោយផ្ទាល់នៅក្នុង Markup (HTML) របស់អ្នក។

* **Utility-First:** មានន័យថាអ្នកប្រើប្រាស់ **Utility Classes** តូចៗ (ឧទាហរណ៍ \`flex\`, \`pt-4\`, \`text-center\`, \`bg-blue-500\`) ដើម្បីរចនាម៉ូត Elements របស់អ្នកដោយផ្ទាល់នៅក្នុង HTML ។

---

## 2. តើ Tailwind CSS ប្រើសម្រាប់អ្វី? 🎯

Tailwind CSS ត្រូវបានប្រើដើម្បី **អភិវឌ្ឍ User Interface (UI) បានលឿន និងមានប្រសិទ្ធភាព** ។ វាអនុញ្ញាតឱ្យអ្នកបង្កើត Designs ទំនើប និង Responsive ដោយមិនចាំបាច់ចាកចេញពី File HTML របស់អ្នក។

* **ល្បឿន:** ដោយសារអ្នកមិនចាំបាច់ប្តូររវាង HTML និង CSS Files ញឹកញាប់ អ្នកអាចរចនាបានលឿនជាងមុន។
* **ភាពស៊ីសង្វាក់គ្នា:** ងាយស្រួលរក្សាភាពស៊ីសង្វាក់គ្នានៃ Design ដោយប្រើប្រាស់ Utility Classes ដែលបានកំណត់ជាមុន។
* **Responsive Design:** ត្រូវបានបង្កើតឡើងដោយប្រើ **Mobile-First Approach** ដែលធ្វើឱ្យការបង្កើត Responsive Layouts មានភាពងាយស្រួល។

---

## 3. គោលការណ៍ "Utility-First" មានន័យដូចម្តេច? 💡

គោលការណ៍ "**Utility-First**" គឺជាបេះដូងនៃ Tailwind CSS ។ វាមានន័យថា រាល់ Styles ដែលអ្នកត្រូវការត្រូវបានផ្តល់ជូនជា **Classes តូចៗ** ដែលធ្វើកិច្ចការតែមួយ។

**ឧទាហរណ៍:**
ជំនួសឱ្យការសរសេរ CSS បែបនេះ៖
\`\`\`css
.my-button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
\`\`\`

អ្នកនឹងប្រើ Utility Classes របស់ Tailwind ដោយផ្ទាល់នៅក្នុង HTML៖
\`\`\`html
<button class="bg-blue-500 text-white px-5 py-2 rounded-md">
  ចុចខ្ញុំ
</button>
\`\`\`
* \`bg-blue-500\`: កំណត់ Background Color ។
* \`text-white\`: កំណត់ Text Color ។
* \`px-5\`: កំណត់ Padding តាមអ័ក្ស X (ឆ្វេង-ស្តាំ) ។
* \`py-2\`: កំណត់ Padding តាមអ័ក្ស Y (លើ-ក្រោម) ។
* \`rounded-md\`: កំណត់ Border Radius ។

---

## 4. គុណសម្បត្តិ និងគុណវិបត្តិនៃការប្រើប្រាស់ Tailwind CSS ✅❌

### គុណសម្បត្តិ
* **ល្បឿនអភិវឌ្ឍន៍លឿន:** រចនា UI បានលឿនដោយមិនចាំបាច់សរសេរ CSS ផ្ទាល់ខ្លួន។
* **ទំហំ CSS File តូច:** Tailwind នឹង **Purge CSS** ដែលមិនបានប្រើប្រាស់ក្នុង Production Build ធ្វើឱ្យ File CSS ចុងក្រោយមានទំហំតូច។
* **គ្មាន Class Naming Conflicts:** ដោយសារ Classes ត្រូវបានប្រើដោយផ្ទាល់ក្នុង HTML វាមិនមានបញ្ហាឈ្មោះ Class ជាន់គ្នាទេ។
* **ភាពបត់បែនខ្ពស់:** មិនមាន Components ដែលបានកំណត់ជាមុនបង្ខំអ្នកឱ្យប្រើ Styles ជាក់លាក់នោះទេ។ អ្នកអាចបង្កើត Designs ផ្ទាល់ខ្លួនបានពេញលេញ។
* **Responsive Design ងាយស្រួល:** Built-in Responsive Prefixes (e.g., \`md:\`, \`lg:\`) ។

### គុណវិបត្តិ
* **HTML ក្លាយជាវែង:** Markup របស់អ្នកអាចមាន Classes ច្រើន ដែលអាចធ្វើឱ្យវាពិបាកអានបន្តិចសម្រាប់អ្នកចាប់ផ្តើមដំបូង។
* **Learning Curve (ខ្សែកោងសិក្សា) ដំបូង:** ត្រូវការពេលវេលាដើម្បីរៀន Utility Classes ទាំងអស់។
* **មិនស័ក្តិសមសម្រាប់ Project តូចៗ:** សម្រាប់ Project តូចៗដែលមាន Styles សាមញ្ញ ការដំឡើង Tailwind អាចមើលទៅហាក់ដូចជាស្មុគស្មាញពេក។

---

## 5. ប្រៀបធៀប Tailwind CSS ជាមួយ Frameworks ផ្សេងទៀត (ដូចជា Bootstrap) 🆚

| លក្ខណៈពិសេស          | Tailwind CSS                                   | Bootstrap                                           |
| :-------------------- | :--------------------------------------------- | :-------------------------------------------------- |
| **ទស្សនវិជ្ជា** | Utility-First (Classes តូចៗ)                   | Component-First (Components ដែលបានរចនាម៉ូតរួច)         |
| **ការប្ដូរតាមបំណង** | ងាយស្រួលប្ដូរតាមបំណងពេញលេញ (តាម \`tailwind.config.js\`) | អាចប្ដូរតាមបំណងបាន ប៉ុន្តែមានដែនកំណត់ (តាម Sass Variables) |
| **ទំហំ CSS File** | តូចជាង (ដោយសារ Purging)                       | ធំជាង (មាន Styles ច្រើនដែលមិនចាំបាច់)              |
| **ល្បឿនអភិវឌ្ឍន៍** | លឿនសម្រាប់អ្នកដែលស្គាល់ Classes ច្បាស់          | លឿនសម្រាប់ Components ស្តង់ដារ                     |
| **HTML Markup** | វែងជាង (Classes ច្រើន)                         | ខ្លីជាង (Classes តិច)                               |
| **Responsive Design** | Mobile-First, ងាយស្រួលប្រើ Prefixes           | Mobile-First, ប្រើ Grid System និង Responsive Classes |

**សេចក្តីសន្និដ្ឋាន:**
* **Tailwind CSS** ផ្តល់នូវភាពបត់បែនខ្ពស់ និងការគ្រប់គ្រងពេញលេញលើ Design ។ ល្អសម្រាប់ Project ដែលត្រូវការ Unique Design ឬ Custom Design System ។
* **Bootstrap** ល្អសម្រាប់ Project ដែលត្រូវការ Prototype លឿន ឬប្រើ Components ស្តង់ដារ។ វាមាន Learning Curve ទាបជាងបន្តិចសម្រាប់អ្នកចាប់ផ្តើមដំបូង។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្កើត Card សាមញ្ញជាមួយ Tailwind CSS</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីរបៀបបង្កើត Card សាមញ្ញមួយដោយប្រើ Utility Classes របស់ Tailwind CSS ។</p>
<div class="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
  <h2 class="text-2xl font-bold text-gray-800 mb-2">ចំណងជើងកាត</h2>
  <p class="text-gray-600 text-base mb-4">
    នេះជាមាតិកានៃកាតរបស់យើង។ យើងប្រើ Utility Classes ដើម្បីរចនាម៉ូតវា។
  </p>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
    អានបន្ថែម
  </button>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Introduction Example</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

    <div class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div class="bg-white rounded-lg shadow-md p-6 max-w-sm w-full">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">ចំណងជើងកាត</h2>
            <p class="text-gray-600 text-base mb-4">
                នេះជាមាតិកានៃកាតរបស់យើង។ យើងប្រើ Utility Classes ដើម្បីរចនាម៉ូតវា។
            </p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                អានបន្ថែម
            </button>
        </div>
    </div>

</body>
</html>
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Tailwind CSS ត្រូវបានចាត់ទុកថាជា Framework ប្រភេទណា?',
      options: ['Component-First', 'Utility-First', 'JavaScript-First', 'Library-First'],
      correct: 1,
      explanation: 'Tailwind CSS គឺជា Utility-First CSS Framework ។'
    },
    {
      question: 'តើគោលការណ៍ "Utility-First" មានន័យដូចម្តេចនៅក្នុង Tailwind CSS?',
      options: [
        'អ្នកសរសេរ CSS ផ្ទាល់ខ្លួនច្រើនជាងមុន',
        'អ្នកប្រើ Classes តូចៗដែលធ្វើកិច្ចការតែមួយដោយផ្ទាល់ក្នុង HTML',
        'អ្នកប្រើ JavaScript ដើម្បីរចនាម៉ូត Elements',
        'អ្នកប្រើ Components ដែលបានរចនាម៉ូតរួច'
      ],
      correct: 1,
      explanation: 'គោលការណ៍ "Utility-First" មានន័យថាអ្នកប្រើប្រាស់ Utility Classes តូចៗដែលធ្វើកិច្ចការតែមួយដោយផ្ទាល់នៅក្នុង HTML ។'
    },
    {
      question: 'តើគុណសម្បត្តិមួយណាដែលជាលទ្ធផលនៃការប្រើប្រាស់ Tailwind CSS?',
      options: ['HTML កាន់តែខ្លី', 'ទំហំ CSS File ធំជាងមុន', 'គ្មាន Class Naming Conflicts', 'Learning Curve ទាប'],
      correct: 2,
      explanation: 'ដោយសារ Classes ត្រូវបានប្រើដោយផ្ទាល់ក្នុង HTML វាមិនមានបញ្ហាឈ្មោះ Class ជាន់គ្នាទេ។'
    },
    {
      question: 'តើ Tailwind CSS ប្រើប្រាស់វិធីសាស្ត្រ Responsive Design បែបណា?',
      options: ['Desktop-First', 'Mobile-First', 'Tablet-First', 'Design-First'],
      correct: 1,
      explanation: 'Tailwind CSS ត្រូវបានបង្កើតឡើងដោយប្រើ Mobile-First Approach ។'
    },
    {
      question: 'តើ Class `bg-blue-500` ធ្វើអ្វី?',
      options: ['កំណត់ Text Color', 'កំណត់ Border Color', 'កំណត់ Background Color', 'កំណត់ Font Size'],
      correct: 2,
      explanation: 'Class `bg-blue-500` កំណត់ Background Color របស់ Element ។'
    },
    {
      question: 'តើគុណវិបត្តិមួយណាដែលត្រូវបានលើកឡើងសម្រាប់ការប្រើប្រាស់ Tailwind CSS?',
      options: ['ល្បឿនអភិវឌ្ឍន៍យឺត', 'ទំហំ CSS File ធំ', 'HTML Markup ក្លាយជាវែង', 'ភាពបត់បែនទាប'],
      correct: 2,
      explanation: 'គុណវិបត្តិមួយនៃការប្រើប្រាស់ Tailwind CSS គឺ HTML Markup របស់អ្នកអាចមាន Classes ច្រើន ដែលធ្វើឱ្យវាវែង។'
    },
    {
      question: 'តើ Tailwind CSS ខុសពី Bootstrap យ៉ាងដូចម្តេច?',
      options: [
        'Tailwind ផ្តោតលើ Components, Bootstrap ផ្តោតលើ Utilities',
        'Tailwind ផ្តោតលើ Utilities, Bootstrap ផ្តោតលើ Components',
        'Tailwind ប្រើ JavaScript, Bootstrap ប្រើ CSS',
        'Tailwind មិនមាន Responsive Design ទេ'
      ],
      correct: 1,
      explanation: 'Tailwind CSS ផ្តោតលើ Utility-First ខណៈ Bootstrap ផ្តោតលើ Component-First ។'
    },
    {
      question: 'តើ Class `px-4` ធ្វើអ្វី?',
      options: ['កំណត់ Padding Top & Bottom', 'កំណត់ Padding Left & Right', 'កំណត់ Margin Top & Bottom', 'កំណត់ Margin Left & Right'],
      correct: 1,
      explanation: 'Class `px-4` កំណត់ Padding តាមអ័ក្ស X (Left & Right) ។'
    },
    {
      question: 'តើ Tailwind CSS ជួយកាត់បន្ថយទំហំ CSS File ចុងក្រោយដោយរបៀបណា?',
      options: [
        'ដោយការសរសេរ CSS តិច',
        'ដោយការ Purge CSS ដែលមិនបានប្រើប្រាស់ក្នុង Production Build',
        'ដោយការប្រើប្រាស់ JavaScript',
        'ដោយការប្រើប្រាស់ CDN'
      ],
      correct: 1,
      explanation: 'Tailwind CSS ជួយកាត់បន្ថយទំហំ CSS File ចុងក្រោយដោយការ Purge CSS ដែលមិនបានប្រើប្រាស់ក្នុង Production Build ។'
    },
    {
      question: 'តើ Tailwind CSS ត្រូវបានណែនាំសម្រាប់ Project ប្រភេទណា?',
      options: [
        'Project តូចៗដែលមាន Styles សាមញ្ញ',
        'Project ដែលត្រូវការ Prototype លឿនដោយប្រើ Components ស្តង់ដារ',
        'Project ដែលត្រូវការ Unique Design ឬ Custom Design System',
        'Project ដែលមិនត្រូវការ Responsive Design'
      ],
      correct: 2,
      explanation: 'Tailwind CSS ផ្តល់នូវភាពបត់បែនខ្ពស់ និងការគ្រប់គ្រងពេញលេញលើ Design ដែលល្អសម្រាប់ Project ដែលត្រូវការ Unique Design ឬ Custom Design System ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើតប៊ូតុង Tailwind CSS

បង្កើតឯកសារ HTML ថ្មីមួយ (ឧទាហរណ៍៖ \`index.html\`) ហើយភ្ជាប់ **Tailwind CSS CDN** ។
នៅក្នុងឯកសារនោះ សូមបង្កើតប៊ូតុងមួយដែលមាន Styles ដូចខាងក្រោមដោយប្រើ **Utility Classes** របស់ Tailwind៖

* ផ្ទៃខាងក្រោយពណ៌បៃតង 500 (\`bg-green-500\`)
* អត្ថបទពណ៌ស (\`text-white\`)
* Padding តាមអ័ក្ស X ចំនួន 6 units (\`px-6\`)
* Padding តាមអ័ក្ស Y ចំនួន 3 units (\`py-3\`)
* ជ្រុងមូលពេញ (\`rounded-full\`)
* Font ដិត (\`font-bold\`)
* Hover State ដែលផ្លាស់ប្តូរផ្ទៃខាងក្រោយទៅពណ៌បៃតង 600 (\`hover:bg-green-600\`)
* បន្ថែមអត្ថបទ "ចុចខ្ញុំ" ទៅក្នុងប៊ូតុង។`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Introduction Lab</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <button class="bg-green-500 text-white px-6 py-3 rounded-full font-bold
                       hover:bg-green-600 transition-colors duration-300">
            ចុចខ្ញុំ
        </button>
    </div>

</body>
</html>`
  }
};

export default TailwindLesson1_1Content;