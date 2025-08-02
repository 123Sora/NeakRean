import type { LessonContent } from '../../../../types/LessonTypes';

const TailwindLesson3_3Content: LessonContent = {
  title: 'Borders, Shadows, and Sizing',
  objectives: [
    'របៀបកំណត់ Border Width (border, border-t, border-r, border-b, border-l, border-x, border-y)',
    'របៀបកំណត់ Border Color (border-color-shade)',
    'របៀបកំណត់ Border Radius (rounded, rounded-t, rounded-r, rounded-b, rounded-l, rounded-tl, rounded-tr, rounded-br, rounded-bl)',
    'របៀបកំណត់ Box Shadows (shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl, shadow-inner, shadow-none)',
    'របៀបកំណត់ Width (w-n, w-auto, w-full, w-screen, w-min, w-max, w-fit)',
    'របៀបកំណត់ Height (h-n, h-auto, h-full, h-screen, h-min, h-max, h-fit)',
    'របៀបកំណត់ Min/Max Width/Height (min-w-n, max-w-n, min-h-n, max-h-n)',
    'របៀបកំណត់ Aspect Ratio (aspect-auto, aspect-square, aspect-video)'
  ],
  content: `
# Borders, Shadows, and Sizing 🖼️📏

---

Borders, Shadows, និង Sizing គឺជាផ្នែកសំខាន់ក្នុងការរចនា Elements ដើម្បីឱ្យមានរូបរាង និងទំហំសមស្រប។ Tailwind CSS ផ្តល់នូវ Utility Classes ដែលងាយស្រួលសម្រាប់គ្រប់គ្រង Properties ទាំងនេះ។

---

## 1. កំណត់ Border Width 📏

អ្នកអាចកំណត់ទទឹង Border សម្រាប់គ្រប់ជ្រុង ឬជ្រុងជាក់លាក់។

* \`border\`: Border 1px លើគ្រប់ជ្រុង
* \`border-{n}\`: Border n-pixel (ឧ. \`border-2\`, \`border-4\`, \`border-8\`)
* \`border-t\`, \`border-r\`, \`border-b\`, \`border-l\`: Border តែលើជ្រុង Top, Right, Bottom, Left
* \`border-x\`: Border លើឆ្វេង និងស្តាំ
* \`border-y\`: Border លើលើ និងក្រោម
* \`border-0\`: លុប Border

\`\`\`html
<div class="border p-4">Border 1px</div>
<div class="border-4 border-blue-500 p-4 mt-2">Border 4px ពណ៌ខៀវ</div>
<div class="border-b-2 border-red-500 p-4 mt-2">Border ក្រោម 2px ពណ៌ក្រហម</div>
\`\`\`

---

## 2. កំណត់ Border Color 🎨

ប្រើ Class \`border-{color}-{shade}\` ដើម្បីកំណត់ពណ៌ Border ។

\`\`\`html
<div class="border-2 border-green-500 p-4">Border ពណ៌បៃតង</div>
<div class="border border-purple-400 p-4 mt-2">Border ពណ៌ស្វាយស្រាល</div>
\`\`\`

---

## 3. កំណត់ Border Radius 🔄

កំណត់ភាពមូលនៃជ្រុង។

* \`rounded\`: ជ្រុងមូលលំនាំដើម
* \`rounded-{size}\`: កម្រិតភាពមូល (ឧ. \`rounded-sm\`, \`rounded-md\`, \`rounded-lg\`, \`rounded-xl\`, \`rounded-2xl\`, \`rounded-3xl\`)
* \`rounded-full\`: ជ្រុងមូលពេញ (រង្វង់)
* \`rounded-none\`: គ្មានភាពមូល
* \`rounded-t\`, \`rounded-r\`, \`rounded-b\`, \`rounded-l\`: ជ្រុងមូលតែលើ Top, Right, Bottom, Left
* \`rounded-tl\`, \`rounded-tr\`, \`rounded-br\`, \`rounded-bl\`: ជ្រុងមូលតែលើជ្រុង Top-Left, Top-Right, Bottom-Right, Bottom-Left

\`\`\`html
<div class="bg-blue-500 w-24 h-24 rounded-lg flex items-center justify-center text-white">មូល LG</div>
<div class="bg-green-500 w-24 h-24 rounded-full flex items-center justify-center text-white mt-2">មូលពេញ</div>
\`\`\`

---

## 4. កំណត់ Box Shadows 🌑

បន្ថែមស្រមោលដល់ Element ។

* \`shadow-sm\`, \`shadow\`, \`shadow-md\`, \`shadow-lg\`, \`shadow-xl\`, \`shadow-2xl\`: កម្រិតស្រមោល
* \`shadow-inner\`: ស្រមោលខាងក្នុង
* \`shadow-none\`: លុបស្រមោល

\`\`\`html
<div class="bg-white p-4 shadow-md rounded-md">ស្រមោលមធ្យម</div>
<div class="bg-white p-4 shadow-xl rounded-md mt-2">ស្រមោលធំ</div>
\`\`\`

---

## 5. កំណត់ Width និង Height ↔️↕️

កំណត់ទទឹង និងកម្ពស់ជាមួយ Scale ដែលបានកំណត់ជាមុន។

* **Width**: \`w-0\`, \`w-auto\`, \`w-full\`, \`w-screen\`, \`w-min\`, \`w-max\`, \`w-fit\`, \`w-1/2\`, \`w-1/3\` ។ល។
* **Height**: \`h-0\`, \`h-auto\`, \`h-full\`, \`h-screen\`, \`h-min\`, \`h-max\`, \`h-fit\`, \`h-1/2\` ។ល។

\`\`\`html
<div class="w-48 h-32 bg-red-200">ទទឹង 48, កម្ពស់ 32</div>
<div class="w-full h-screen bg-green-200 mt-2">ទទឹងពេញ, កម្ពស់អេក្រង់</div>
\`\`\`

* \`w-screen\`: ទទឹងពេញ Viewport
* \`h-screen\`: កម្ពស់ពេញ Viewport

---

## 6. កំណត់ Min/Max Width/Height 🤏✊

កំណត់ទទឹង/កម្ពស់អប្បបរមា ឬអតិបរមា។

* **Min Width**: \`min-w-0\`, \`min-w-full\`, \`min-w-max\`, \`min-w-min\`, \`min-w-fit\`
* **Max Width**: \`max-w-xs\`, \`max-w-sm\`, \`max-w-md\`, \`max-w-lg\`, \`max-w-xl\`, \`max-w-full\`, \`max-w-prose\`, \`max-w-screen-sm\` ។ល។
* **Min Height**: \`min-h-0\`, \`min-h-full\`, \`min-h-screen\`, \`min-h-max\`, \`min-h-min\`, \`min-h-fit\`
* **Max Height**: \`max-h-0\`, \`max-h-full\`, \`max-h-screen\`, \`max-h-min\`, \`max-h-max\`, \`max-h-fit\`

\`\`\`html
<div class="min-w-64 max-w-sm bg-yellow-200 p-4">
  <p>ទទឹងអប្បបរមា 64, អតិបរមា Sm</p>
</div>
<div class="min-h-32 max-h-64 bg-purple-200 p-4 mt-2">
  <p>កម្ពស់អប្បបរមា 32, អតិបរមា 64</p>
</div>
\`\`\`

---

## 7. កំណត់ Aspect Ratio 🖼️

គ្រប់គ្រងសមាមាត្រទទឹងទៅកម្ពស់។

* \`aspect-auto\`: សមាមាត្រលំនាំដើម
* \`aspect-square\`: 1:1 (ទទឹង = កម្ពស់)
* \`aspect-video\`: 16:9 (សម្រាប់វីដេអូ)

\`\`\`html
<div class="w-64 aspect-square bg-teal-200 flex items-center justify-center">
  <p>Square (1:1)</p>
</div>
<div class="w-64 aspect-video bg-orange-200 flex items-center justify-center mt-2">
  <p>Video (16:9)</p>
</div>
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Card Component ជាមួយ Borders, Shadows និង Sizing</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីការបង្កើត Card Component ដោយប្រើ Utility Classes សម្រាប់ Borders, Shadows និង Sizing ។</p>
<div class="container mx-auto p-6">
  <div class="w-full max-w-md mx-auto bg-white border-4 border-indigo-600 rounded-2xl shadow-xl p-6">
    <img src="https://placehold.co/400x200/6366F1/FFFFFF?text=Product+Image" alt="Product Image" class="w-full h-48 object-cover rounded-lg mb-4 shadow-md">
    <h2 class="text-3xl font-bold text-indigo-700 mb-2">
      ផលិតផលពិសេស
    </h2>
    <p class="text-gray-700 text-base mb-4">
      នេះជាការពិពណ៌នាអំពីផលិតផលរបស់យើង។ យើងបានប្រើ Borders, Shadows និង Sizing Utilities ដើម្បីបង្កើត Card នេះ។
    </p>
    <div class="flex justify-between items-center mb-4">
      <span class="text-2xl font-semibold text-green-600">$99.99</span>
      <button class="bg-indigo-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-indigo-700 transition-colors">
        ទិញឥឡូវ
      </button>
    </div>
    <div class="w-full h-24 border-t-2 border-gray-300 pt-4 text-sm text-gray-500">
      <p>ព័ត៌មានបន្ថែមអំពីផលិតផល។</p>
    </div>
  </div>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Borders, Shadows & Sizing Example</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="container mx-auto p-6">
        <div class="w-full max-w-md mx-auto bg-white border-4 border-indigo-600 rounded-2xl shadow-xl p-6">
            <img src="https://placehold.co/400x200/6366F1/FFFFFF?text=Product+Image" alt="Product Image" class="w-full h-48 object-cover rounded-lg mb-4 shadow-md">
            <h2 class="text-3xl font-bold text-indigo-700 mb-2">
                ផលិតផលពិសេស
            </h2>
            <p class="text-gray-700 text-base mb-4">
                នេះជាការពិពណ៌នាអំពីផលិតផលរបស់យើង។ យើងបានប្រើ Borders, Shadows និង Sizing Utilities ដើម្បីបង្កើត Card នេះ។
            </p>
            <div class="flex justify-between items-center mb-4">
                <span class="text-2xl font-semibold text-green-600">$99.99</span>
                <button class="bg-indigo-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-indigo-700 transition-colors">
                    ទិញឥឡូវ
                </button>
            </div>
            <div class="w-full h-24 border-t-2 border-gray-300 pt-4 text-sm text-gray-500">
                <p>ព័ត៌មានបន្ថែមអំពីផលិតផល។</p>
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
      question: 'តើ Class `border-4` ធ្វើអ្វី?',
      options: [
        'កំណត់ Border Width 1px',
        'កំណត់ Border Width 4px',
        'កំណត់ Border Radius 4px',
        'កំណត់ Border Color'
      ],
      correct: 1,
      explanation: 'Class `border-4` កំណត់ Border Width 4px លើគ្រប់ជ្រុង។'
    },
    {
      question: 'តើ Class `rounded-full` ធ្វើអ្វី?',
      options: [
        'ជ្រុងមូលបន្តិច',
        'ជ្រុងមូលពេញ (រង្វង់)',
        'ជ្រុងមូលធំ',
        'គ្មានភាពមូល'
      ],
      correct: 1,
      explanation: 'Class `rounded-full` ធ្វើឱ្យជ្រុងមូលពេញ ស័ក្តិសមសម្រាប់រង្វង់។'
    },
    {
      question: 'តើ Class `shadow-lg` ធ្វើអ្វី?',
      options: [
        'បន្ថែមស្រមោលតូច',
        'បន្ថែមស្រមោលមធ្យម',
        'បន្ថែមស្រមោលធំ',
        'បន្ថែមស្រមោលខាងក្នុង'
      ],
      correct: 2,
      explanation: 'Class `shadow-lg` បន្ថែមស្រមោលធំ។'
    },
    {
      question: 'តើ Class `w-screen` កំណត់ទទឹងទៅជាអ្វី?',
      options: [
        'ទទឹងពេញ Parent Container',
        'ទទឹងពេញ Viewport',
        'ទទឹងអប្បបរមា',
        'ទទឹងអតិបរមា'
      ],
      correct: 1,
      explanation: 'Class `w-screen` កំណត់ទទឹងពេញ Viewport ។'
    },
    {
      question: 'តើ Class `max-w-md` ធ្វើអ្វី?',
      options: [
        'កំណត់ទទឹងអប្បបរមា Medium',
        'កំណត់ទទឹងអតិបរមា Medium',
        'កំណត់ទទឹងថេរ Medium',
        'កំណត់ទទឹងពេញ'
      ],
      correct: 1,
      explanation: 'Class `max-w-md` កំណត់ទទឹងអតិបរមា Medium ។'
    },
    {
      question: 'តើ Class `aspect-square` កំណត់សមាមាត្រទៅជាអ្វី?',
      options: ['16:9', '4:3', '1:1', 'Auto'],
      correct: 2,
      explanation: 'Class `aspect-square` កំណត់សមាមាត្រ 1:1 (ទទឹង = កម្ពស់) ។'
    },
    {
      question: 'តើ Class `border-b-2` ធ្វើអ្វី?',
      options: [
        'Border 2px គ្រប់ជ្រុង',
        'Border 2px ខាងក្រោម',
        'Border 2px ខាងលើ',
        'Border 2px ខាងឆ្វេង'
      ],
      correct: 1,
      explanation: 'Class `border-b-2` កំណត់ Border 2px ខាងក្រោម។'
    },
    {
      question: 'តើ Class `rounded-tl-lg` ធ្វើអ្វី?',
      options: [
        'ជ្រុងមូល Top-Left',
        'ជ្រុងមូល Top-Right',
        'ជ្រុងមូល Bottom-Left',
        'ជ្រុងមូល Bottom-Right'
      ],
      correct: 0,
      explanation: 'Class `rounded-tl-lg` ធ្វើឱ្យជ្រុង Top-Left មូលកម្រិត Large ។'
    },
    {
      question: 'តើ Class `shadow-inner` ធ្វើអ្វី?',
      options: [
        'ស្រមោលខាងក្រៅ',
        'ស្រមោលខាងក្នុង',
        'លុបស្រមោល',
        'បង្កើនស្រមោល'
      ],
      correct: 1,
      explanation: 'Class `shadow-inner` បន្ថែមស្រមោលខាងក្នុង។'
    },
    {
      question: 'តើ Class `h-screen` កំណត់កម្ពស់ទៅជាអ្វី?',
      options: [
        'កម្ពស់ពេញ Parent Container',
        'កម្ពស់ពេញ Viewport',
        'កម្ពស់អប្បបរមា',
        'កម្ពស់អតិបរមា'
      ],
      correct: 1,
      explanation: 'Class `h-screen` កំណត់កម្ពស់ពេញ Viewport ។'
    },
    {
      question: 'តើ Class `min-h-full` ធ្វើអ្វី?',
      options: [
        'កម្ពស់អប្បបរមា 0',
        'កម្ពស់អប្បបរមាពេញ Parent Container',
        'កម្ពស់អប្បបរមាពេញ Viewport',
        'កម្ពស់អប្បបរមា Auto'
      ],
      correct: 1,
      explanation: 'Class `min-h-full` កំណត់កម្ពស់អប្បបរមាពេញ Parent Container ។'
    },
    {
      question: 'តើ Class `aspect-video` កំណត់សមាមាត្រទៅជាអ្វី?',
      options: ['1:1', '16:9', '4:3', 'Auto'],
      correct: 1,
      explanation: 'Class `aspect-video` កំណត់សមាមាត្រ 16:9 សម្រាប់វីដេអូ។'
    },
    {
      question: 'តើ Class `border-x-4` ធ្វើអ្វី?',
      options: [
        'Border 4px លើ និងក្រោម',
        'Border 4px ឆ្វេង និងស្តាំ',
        'Border 4px គ្រប់ជ្រុង',
        'លុប Border'
      ],
      correct: 1,
      explanation: 'Class `border-x-4` កំណត់ Border 4px ឆ្វេង និងស្តាំ។'
    },
    {
      question: 'តើ Class `w-fit` ធ្វើអ្វី?',
      options: [
        'ទទឹងពេញ Parent Container',
        'ទទឹងតាមមាតិកា (fit-content)',
        'ទទឹងពេញ Viewport',
        'ទទឹងអប្បបរមា'
      ],
      correct: 1,
      explanation: 'Class `w-fit` កំណត់ទទឹងតាមមាតិកា (fit-content) ។'
    },
    {
      question: 'តើ Class `shadow-none` ធ្វើអ្វី?',
      options: [
        'ស្រមោលតូចបំផុត',
        'លុបស្រមោល',
        'ส្រមោលខាងក្នុង',
        'ផ្លាស់ប្តូរពណ៌ស្រមោល'
      ],
      correct: 1,
      explanation: 'Class `shadow-none` លុបស្រមោលទាំងអស់។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Card Component

បង្កើតឯកសារ HTML ថ្មី និងភ្ជាប់ **Tailwind CSS CDN** ។ បង្កើត Card Component ដែលមាន Styles ដូចខាងក្រោម៖

1. **Container ធំ** (\`div\`):
   - Padding 8 units (\`p-8\`)
   - Background ពណ៌ប្រផេះ 50 (\`bg-gray-50\`)
   - ប្រើ Flexbox ដើម្បីតម្រឹម Card នៅកណ្តាល (\`flex items-center justify-center min-h-screen\`)

2. **Card Div** (\`div\`):
   - ទទឹងអតិបរមា 96 units (\`max-w-96\`), ទទឹងពេញ (\`w-full\`)
   - Background ពណ៌ស (\`bg-white\`)
   - Padding 6 units (\`p-6\`)
   - Border Radius 2xl (\`rounded-2xl\`)
   - Shadow 2xl (\`shadow-2xl\`)
   - Border Width 4px (\`border-4\`)
   - Border Color ពណ៌ខៀវ 600 (\`border-blue-600\`)

3. **មាតិកា Card**:
   - **ចំណងជើង** (\`h2\`): "កាតផលិតផលពិសេស"
     - Font Size 3xl (\`text-3xl\`)
     - Font Weight Bold (\`font-bold\`)
     - Text Color ពណ៌ខៀវ 800 (\`text-blue-800\`)
     - Margin Bottom 2 units (\`mb-2\`)
   - **កថាខណ្ឌ** (\`p\`): "នេះជាផលិតផលដែលមានគុណភាពខ្ពស់បំផុតរបស់យើង ជាមួយនឹងការរចនាដ៏ស្រស់ស្អាត និងមុខងារទំនើប។"
     - Text Color ពណ៌ប្រផេះ 700 (\`text-gray-700\`)
     - Font Size base (\`text-base\`)
     - Margin Bottom 4 units (\`mb-4\`)
   - **ប៊ូតុង** (\`button\`):
     - Background ពណ៌បៃតង 500 (\`bg-green-500\`)
     - Text Color ពណ៌ស (\`text-white\`)
     - Padding X 6 units (\`px-6\`), Padding Y 3 units (\`py-3\`)
     - Border Radius ពេញ (\`rounded-full\`)
     - Shadow មធ្យម (\`shadow-md\`)
     - Hover: Background ពណ៌បៃតង 600 (\`hover:bg-green-600\`)
     - Transition ពណ៌ (\`transition-colors\`)
     - Margin Top 4 units (\`mt-4\`)
`,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Borders, Shadows & Sizing Lab</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="flex items-center justify-center min-h-screen bg-gray-50 p-8">
        <div class="max-w-96 w-full bg-white p-6 rounded-2xl shadow-2xl border-4 border-blue-600">
            <h2 class="text-3xl font-bold text-blue-800 mb-2">
                កាតផលិតផលពិសេស
            </h2>
            <p class="text-gray-700 text-base mb-4">
                នេះជាផលិតផលដែលមានគុណភាពខ្ពស់បំផុតរបស់យើង ជាមួយនឹងការរចនាដ៏ស្រស់ស្អាត និងមុខងារទំនើប។
            </p>
            <button class="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition-colors mt-4">
                ទិញឥឡូវ
            </button>
        </div>
    </div>
</body>
</html>
`
  }
};

export default TailwindLesson3_3Content;