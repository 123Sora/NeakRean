import type { LessonContent } from '../../../../types/LessonTypes';

const TailwindLesson3_2Content: LessonContent = {
  title: 'Colors and Backgrounds',
  objectives: [
    'យល់ដឹងពី Color Palette របស់ Tailwind CSS',
    'របៀបកំណត់ Text Color (text-color-shade)',
    'របៀបកំណត់ Background Color (bg-color-shade)',
    'របៀបកំណត់ Border Color (border-color-shade)',
    'របៀបកំណត់ Color Opacity (text-opacity, bg-opacity, border-opacity)',
    'របៀបប្ដូរតាមបំណង Colors នៅក្នុង tailwind.config.js'
  ],
  content: `
# Colors and Backgrounds 🎨🖌️

---

Colors និង Backgrounds គឺជាធាតុសំខាន់បំផុតក្នុងការរចនាគេហទំព័រ។ Tailwind CSS ផ្តល់នូវ Utility Classes យ៉ាងទូលំទូលាយសម្រាប់គ្រប់គ្រងពណ៌ និងផ្ទៃខាងក្រោយ។

---

## 1. ការយល់ដឹងពី Color Palette របស់ Tailwind CSS 🌈

Tailwind CSS ភ្ជាប់មកជាមួយ Color Palette លំនាំដើមដ៏ទូលំទូលាយ ដែលរួមមានពណ៌ជាច្រើនប្រភេទ និងស្រមោល (shades) ចាប់ពី 50 (ស្រាលបំផុត) ដល់ 900 (ដិតបំផុត) ។

**ឧទាហរណ៍ Color Shades:**
* \`blue-50\` (ស្រាល)
* \`blue-100\`
* \`blue-200\`
* \`blue-300\`
* \`blue-400\`
* \`blue-500\` (ពណ៌មូលដ្ឋាន)
* \`blue-600\`
* \`blue-700\`
* \`blue-800\`
* \`blue-900\` (ដិត)

អ្នកអាចមើល Color Palette ពេញលេញនៅក្នុង [Tailwind CSS Documentation](https://tailwindcss.com/docs/customizing-colors) ។

---

## 2. របៀបកំណត់ Text Color (text-color-shade) ✍️

ប្រើ Class \`text-{color}-{shade}\` ដើម្បីកំណត់ពណ៌អត្ថបទ។

\`\`\`html
<p class="text-red-500">អត្ថបទពណ៌ក្រហម</p>
<p class="text-green-700">អត្ថបទពណ៌បៃតងដិត</p>
<p class="text-indigo-400">អត្ថបទពណ៌ស្វាយស្រាល</p>
\`\`\`

---

## 3. របៀបកំណត់ Background Color (bg-color-shade) 🖼️

ប្រើ Class \`bg-{color}-{shade}\` ដើម្បីកំណត់ពណ៌ផ្ទៃខាងក្រោយ។

\`\`\`html
<div class="bg-blue-500 p-4 text-white">ផ្ទៃខាងក្រោយពណ៌ខៀវ</div>
<div class="bg-yellow-100 p-4">ផ្ទៃខាងក្រោយពណ៌លឿងស្រាល</div>
<button class="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded">ប៊ូតុង</button>
\`\`\`

---

## 4. របៀបកំណត់ Border Color (border-color-shade) 🖼️

ប្រើ Class \`border-{color}-{shade}\` ដើម្បីកំណត់ពណ៌ Border ។

\`\`\`html
<div class="border border-red-500 p-4">Border ពណ៌ក្រហម</div>
<div class="border-2 border-green-400 p-4 mt-2">Border ពណ៌បៃតង</div>
\`\`\`
* \`border\`: កំណត់ Border Width លំនាំដើម (1px) ។
* \`border-2\`: កំណត់ Border Width 2px ។

---

## 5. របៀបកំណត់ Color Opacity (text-opacity, bg-opacity, border-opacity) 👻

អ្នកអាចគ្រប់គ្រងកម្រិតថ្លា (opacity) នៃពណ៌អត្ថបទ ផ្ទៃខាងក្រោយ និង Border ។

* \`text-opacity-{value}\`
* \`bg-opacity-{value}\`
* \`border-opacity-{value}\`

**តម្លៃ** (\`{value}\`) មានដូចជា 0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100 ។

\`\`\`html
<div class="bg-blue-500 bg-opacity-75 p-4 text-white">
  <p class="text-white text-opacity-90">ផ្ទៃខាងក្រោយខៀវ 75% opacity, អត្ថបទ 90% opacity</p>
</div>
<div class="border-2 border-green-500 border-opacity-50 p-4 mt-2">
  <p>Border បៃតង 50% opacity</p>
</div>
\`\`\`

---

## 6. របៀបប្ដូរតាមបំណង Colors នៅក្នុង \`tailwind.config.js\` 🛠️

អ្នកអាចបន្ថែម Custom Colors ឬ Override Default Colors នៅក្នុងឯកសារ \`tailwind.config.js\` ។

### ការបន្ថែម Custom Colors (Extend)
ប្រើ \`theme.extend.colors\` ដើម្បីបន្ថែមពណ៌ថ្មីដោយមិនលុប Default Palette ។

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1ABC9C',
        'brand-secondary': '#3498DB',
        'custom-gray': '#333333',
      },
    },
  },
}
\`\`\`

បន្ទាប់មក អ្នកអាចប្រើ៖
* \`bg-brand-primary\`
* \`text-brand-secondary\`
* \`border-custom-gray\`

### ការបដិសេធ Default Colors
ការកំណត់ \`colors\` នៅក្នុង \`theme\` (មិនមែន \`extend\`) នឹងជំនួស Default Palette ទាំងស្រុង។

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      'custom-blue': '#007bff',
      'custom-red': '#dc3545',
      'gray': {
        100: '#f8f9fa',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#6b7280',
        700: '#4b5563',
        800: '#374151',
        900: '#1f2a44',
      },
    },
  },
}
\`\`\`

**កំណត់ចំណាំ:** ការប្រើ \`extend\` ត្រូវបានណែនាំជាង ដើម្បីរក្សា Default Palette និងបន្ថែមតែពណ៌ផ្ទាល់ខ្លួន។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ កាតជាមួយ Custom Colors និង Opacity</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីការប្រើ Custom Colors និង Opacity សម្រាប់អត្ថបទ ផ្ទៃខាងក្រោយ និង Border ។</p>
<div class="container mx-auto p-6">
  <div class="bg-brand-primary bg-opacity-90 p-6 rounded-lg shadow-md border-2 border-brand-secondary border-opacity-75 max-w-md mx-auto">
    <h2 class="text-2xl font-bold text-white text-opacity-95 mb-2">
      កាតផ្ទាល់ខ្លួន
    </h2>
    <p class="text-white text-opacity-80 text-base mb-4">
      នេះជាកាតដែលប្រើ Custom Colors និង Opacity ពី tailwind.config.js ។
    </p>
    <button class="bg-custom-gray text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
      ស្វែងយល់បន្ថែម
    </button>
  </div>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Colors Example</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'brand-primary': '#1ABC9C',
                        'brand-secondary': '#3498DB',
                        'custom-gray': '#333333',
                    },
                },
            },
        }
    </script>
</head>
<body>
    <div class="container mx-auto p-6">
        <div class="bg-brand-primary bg-opacity-90 p-6 rounded-lg shadow-md border-2 border-brand-secondary border-opacity-75 max-w-md mx-auto">
            <h2 class="text-2xl font-bold text-white text-opacity-95 mb-2">
                កាតផ្ទាល់ខ្លួន
            </h2>
            <p class="text-white text-opacity-80 text-base mb-4">
                នេះជាកាតដែលប្រើ Custom Colors និង Opacity ពី tailwind.config.js ។
            </p>
            <button class="bg-custom-gray text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                ស្វែងយល់បន្ថែម
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
      question: 'តើ Class `text-blue-600` ធ្វើអ្វី?',
      options: [
        'កំណត់ផ្ទៃខាងក្រោយពណ៌ខៀវ 600',
        'កំណត់ពណ៌អត្ថបទពណ៌ខៀវ 600',
        'កំណត់ Border ពណ៌ខៀវ 600',
        'កំណត់ Opacity ពណ៌ខៀវ 600'
      ],
      correct: 1,
      explanation: 'Class `text-blue-600` កំណត់ពណ៌អត្ថបទទៅជាពណ៌ខៀវស្រមោល 600 ។'
    },
    {
      question: 'តើ Class មួយណាកំណត់ផ្ទៃខាងក្រោយពណ៌លឿង 200?',
      options: ['`color-yellow-200`', '`background-yellow-200`', '`bg-yellow-200`', '`fill-yellow-200`'],
      correct: 2,
      explanation: 'Class `bg-yellow-200` កំណត់ផ្ទៃខាងក្រោយទៅជាពណ៌លឿងស្រមោល 200 ។'
    },
    {
      question: 'តើ Class `border-red-500` ធ្វើអ្វី?',
      options: [
        'កំណត់ពណ៌អត្ថបទក្រហម 500',
        'កំណត់ផ្ទៃខាងក្រោយក្រហម 500',
        'កំណត់ពណ៌ Border ក្រហម 500',
        'កំណត់ Opacity ក្រហម 500'
      ],
      correct: 2,
      explanation: 'Class `border-red-500` កំណត់ពណ៌ Border ទៅជាពណ៌ក្រហមស្រមោល 500 ។'
    },
    {
      question: 'តើ Class `bg-opacity-50` ធ្វើអ្វី?',
      options: [
        'កំណត់ផ្ទៃខាងក្រោយឱ្យមាន opacity 50%',
        'កំណត់ផ្ទៃខាងក្រោយឱ្យមាន opacity 100%',
        'កំណត់ Border opacity 50%',
        'កំណត់ Text opacity 50%'
      ],
      correct: 0,
      explanation: 'Class `bg-opacity-50` កំណត់ opacity នៃផ្ទៃខាងក្រោយទៅ 50% ។'
    },
    {
      question: 'តើ Object មួយណាបន្ថែម Custom Colors ដោយរក្សា Default Palette?',
      options: ['`theme.colors`', '`theme.extend.colors`', '`plugins`', '`variants`'],
      correct: 1,
      explanation: '`theme.extend.colors` បន្ថែម Custom Colors ដោយរក្សា Default Palette ។'
    },
    {
      question: 'តើការកំណត់ `colors` នៅក្នុង `theme` (មិនមែន `extend`) ធ្វើអ្វី?',
      options: [
        'បន្ថែម Colors ថ្មី',
        'ជំនួស Default Palette ទាំងស្រុង',
        'គ្មានផលប៉ះពាល់',
        'បិទ Colors'
      ],
      correct: 1,
      explanation: 'ការកំណត់ `colors` នៅក្នុង `theme` ជំនួស Default Palette ទាំងស្រុង។'
    },
    {
      question: 'តើ Class `text-opacity-75` ធ្វើអ្វី?',
      options: [
        'កំណត់ Font Size 75%',
        'កំណត់ Text opacity 75%',
        'កំណត់ Background opacity 75%',
        'កំណត់ Border opacity 75%'
      ],
      correct: 1,
      explanation: 'Class `text-opacity-75` កំណត់ opacity នៃអត្ថបទទៅ 75% ។'
    },
    {
      question: 'តើ Class `border-opacity-25` ធ្វើអ្វី?',
      options: [
        'កំណត់ Border Width 25px',
        'កំណត់ Border opacity 25%',
        'កំណត់ Border Radius 25%',
        'កំណត់ Text opacity 25%'
      ],
      correct: 1,
      explanation: 'Class `border-opacity-25` កំណត់ opacity នៃ Border ទៅ 25% ។'
    },
    {
      question: 'តើ Shade មួយណាស្រាលបំផុតនៅក្នុង Tailwind?',
      options: ['50', '100', '500', '900'],
      correct: 0,
      explanation: 'Shade 50 ជាពណ៌ស្រាលបំផុត។'
    },
    {
      question: 'តើ Shade មួយណាដិតបំផុតនៅក្នុង Tailwind?',
      options: ['50', '100', '500', '900'],
      correct: 3,
      explanation: 'Shade 900 ជាពណ៌ដិតបំផុត។'
    },
    {
      question: 'តើ Tailwind Color Palette កំណត់ដោយអ្វី?',
      options: [
        'Hex Codes តែប៉ុណ្ណោះ',
        'RGB Values តែប៉ុណ្ណោះ',
        'ឈ្មោះពណ៌ និង Shades',
        'HSL Values តែប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Tailwind Color Palette កំណត់ដោយឈ្មោះពណ៌ និង Shades (ឧ. blue-500) ។'
    },
    {
      question: 'តើ Class `border` (គ្មានលេខ) កំណត់ Border Width ប៉ុន្មាន?',
      options: ['0px', '1px', '2px', '4px'],
      correct: 1,
      explanation: 'Class `border` កំណត់ Border Width 1px ។'
    },
    {
      question: 'តើ Class `bg-gradient-to-r` ធ្វើអ្វី?',
      options: [
        'កំណត់ Background Image',
        'កំណត់ Gradient ពីឆ្វេងទៅស្តាំ',
        'កំណត់ Gradient ពីលើចុះក្រោម',
        'កំណត់ Solid Color'
      ],
      correct: 1,
      explanation: 'Class `bg-gradient-to-r` បង្កើត Gradient ពីឆ្វេងទៅស្តាំ។'
    },
    {
      question: 'តើ `theme.extend.colors` មានអត្ថប្រយោជន៍អ្វី?',
      options: [
        'លុប Default Palette',
        'បន្ថែម Custom Colors ដោយរក្សា Default Palette',
        'បង្កើនទំហំ CSS',
        'បិទ Colors'
      ],
      correct: 1,
      explanation: '`theme.extend.colors` បន្ថែម Custom Colors ដោយរក្សា Default Palette ។'
    },
    {
      question: 'តើ Class `bg-white` ធ្វើអ្វី?',
      options: [
        'កំណត់ផ្ទៃខាងក្រោយពណ៌ស',
        'កំណត់អត្ថបទពណ៌ស',
        'កំណត់ Border ពណ៌ស',
        'កំណត់ Opacity ពណ៌ស'
      ],
      correct: 0,
      explanation: 'Class `bg-white` កំណត់ផ្ទៃខាងក្រោយទៅជាពណ៌ស។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Card Component ជាមួយ Tailwind CSS

បង្កើតឯកសារ HTML ថ្មី ហើយភ្ជាប់ **Tailwind CSS CDN** ។ បង្កើត Card Component ដែលមាន Styles ដូចខាងក្រោម៖

1. **Container ធំ** (\`div\`):
   - Padding 8 units (\`p-8\`)
   - Background ពណ៌ប្រផេះ 50 (\`bg-gray-50\`)
   - ប្រើ Flexbox ដើម្បីតម្រឹម Card នៅកណ្តាលអេក្រង់ (\`flex items-center justify-center min-h-screen\`)

2. **Card Div** (\`div\`):
   - Background ពណ៌ខៀវ 600 (\`bg-blue-600\`)
   - Padding 6 units (\`p-6\`)
   - Border Radius ធំ (\`rounded-xl\`)
   - Shadow ធំ (\`shadow-lg\`)
   - Border Width 2px (\`border-2\`)
   - Border Color ពណ៌ខៀវ 800 (\`border-blue-800\`)
   - Background Opacity 90% (\`bg-opacity-90\`)
   - ទទឹងអតិបរមា 80 units (\`max-w-md\`), ទទឹងពេញ (\`w-full\`)

3. **មាតិកាក្នុង Card**:
   - **ចំណងជើង** (\`h2\`): "ផលិតផលថ្មី"
     - Text Color ពណ៌ស (\`text-white\`)
     - Font Weight ដិត (\`font-bold\`)
     - Font Size 2xl (\`text-2xl\`)
     - Margin Bottom 2 units (\`mb-2\`)
     - Text Opacity 95% (\`text-opacity-95\`)
   - **កថាខណ្ឌ** (\`p\`): "ស្វែងយល់ពីផលិតផលចុងក្រោយបំផុតរបស់យើងជាមួយនឹងលក្ខណៈពិសេសប្លែកៗ។"
     - Text Color ពណ៌ស (\`text-white\`)
     - Font Size base (\`text-base\`)
     - Text Opacity 80% (\`text-opacity-80\`)
     - Margin Bottom 4 units (\`mb-4\`)
   - **ប៊ូតុង** (\`button\`):
     - Background ពណ៌បៃតង 500 (\`bg-green-500\`)
     - Text Color ពណ៌ស (\`text-white\`)
     - Padding X 4 units (\`px-4\`), Padding Y 2 units (\`py-2\`)
     - Border Radius មធ្យម (\`rounded-md\`)
     - Hover: Background ពណ៌បៃតង 600 (\`hover:bg-green-600\`)
     - Transition សម្រាប់ពណ៌ (\`transition-colors\`)
     - Margin Top 4 units (\`mt-4\`)
`,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Colors Lab</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="flex items-center justify-center min-h-screen bg-gray-50 p-8">
        <div class="bg-blue-600 bg-opacity-90 p-6 rounded-xl shadow-lg border-2 border-blue-800 max-w-md w-full">
            <h2 class="text-white font-bold text-2xl mb-2 text-opacity-95">
                ផលិតផលថ្មី
            </h2>
            <p class="text-white text-base text-opacity-80 mb-4">
                ស្វែងយល់ពីផលិតផលចុងក្រោយបំផុតរបស់យើងជាមួយនឹងលក្ខណៈពិសេសប្លែកៗ។
            </p>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors mt-4">
                មើលលម្អិត
            </button>
        </div>
    </div>
</body>
</html>
`
  }
};

export default TailwindLesson3_2Content;