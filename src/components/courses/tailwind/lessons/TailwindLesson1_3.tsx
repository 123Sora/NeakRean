// src/components/lessons/tailwind/TailwindLesson1_3.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const TailwindLesson1_3Content: LessonContent = {
  title: 'ការយល់ដឹងពី Configuration File (tailwind.config.js)',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ File Configuration',
    'របៀបកំណត់ Default Theme (Colors, Fonts, Spacing, Breakpoints, etc.)',
    'ការបន្ថែម Custom Styles ផ្ទាល់ខ្លួន (Extend theme)',
    'ការបិទ / បើក (Enable/Disable) Core Plugins',
    'ការកំណត់ purge / content សម្រាប់ Production Optimization'
  ],
  content: `
# ការយល់ដឹងពី Configuration File (tailwind.config.js) ⚙️

---

File \`tailwind.config.js\` គឺជាបេះដូងនៃការប្ដូរតាមបំណង (Customization) របស់ Tailwind CSS ។ វាអនុញ្ញាតឱ្យអ្នកកំណត់រចនាសម្ព័ន្ធរាល់ Design Token របស់ Tailwind ដើម្បីឱ្យវាស៊ីគ្នាជាមួយ Brand ឬ Design System ផ្ទាល់ខ្លួនរបស់អ្នក។

---

## 1. សារៈសំខាន់នៃ File Configuration 💡

\`tailwind.config.js\` គឺជា JavaScript File ដែល Export Object មួយ។ Object នេះផ្ទុកនូវរាល់ការកំណត់ដែល Tailwind ប្រើដើម្បីបង្កើត Utility Classes របស់វា។

* **ភាពបត់បែន:** អ្នកអាចផ្លាស់ប្តូរ Colors, Font Sizes, Spacing, Breakpoints និងច្រើនទៀត។
* **ភាពស៊ីសង្វាក់គ្នា:** ធានាថា Design របស់អ្នកមានភាពស៊ីសង្វាក់គ្នាដោយកំណត់រាល់ Styles នៅក្នុងកន្លែងតែមួយ។
* **កាត់បន្ថយ CSS:** ដោយការកំណត់រចនាសម្ព័ន្ធយ៉ាងត្រឹមត្រូវ Tailwind អាចបង្កើត CSS ដែលត្រូវការតែប៉ុណ្ណោះ។

---

## 2. ការកំណត់ Default Theme (Colors, Fonts, Spacing, Breakpoints, etc.) 🎨

Object \`theme\` នៅក្នុង \`tailwind.config.js\` គឺជាកន្លែងដែលអ្នកកំណត់ Design Tokens របស់ Tailwind ។

\`\`\`javascript
// tailwind.config.js
module.exports = {
  // ...
  theme: {
    // Default Tailwind theme values go here.
    // If you define directly here, it will OVERRIDE Tailwind's default.
    // Use 'extend' to ADD to Tailwind's default.
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray': {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      // ...
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      // ...
    },
  },
  // ...
}
\`\`\`
* **សំខាន់:** ប្រសិនបើអ្នកកំណត់ Property ណាមួយ (ឧទាហរណ៍ \`colors\`) ដោយផ្ទាល់នៅក្នុង \`theme\` Object (មិនមែនក្នុង \`extend\`) វានឹង **Override** តម្លៃលំនាំដើមទាំងអស់របស់ Tailwind សម្រាប់ Property នោះ។

---

## 3. ការបន្ថែម Custom Styles ផ្ទាល់ខ្លួន (Extend theme) ➕

ដើម្បីបន្ថែម Styles ផ្ទាល់ខ្លួនរបស់អ្នកទៅលើ Default Theme របស់ Tailwind ដោយមិនចាំបាច់លុបវាចោល អ្នកគួរតែប្រើ Object \`extend\` នៅក្នុង \`theme\` Object ។ នេះជាវិធីសាស្ត្រដែលត្រូវបានណែនាំ។

\`\`\`javascript
// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        'primary-brand': '#FF6347', // Add a new custom color
        'secondary-brand': '#6A5ACD',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'], // Add a new custom font family
      },
      spacing: {
        '13': '3.25rem', // Add a new spacing value (52px)
      },
      screens: {
        'custom-lg': '1100px', // Add a new custom breakpoint
      },
    },
  },
  // ...
}
\`\`\`
* **extend:** អនុញ្ញាតឱ្យអ្នកបន្ថែមតម្លៃថ្មីទៅលើ Default Theme របស់ Tailwind ។ ឧទាហរណ៍ \`primary-brand\` នឹងត្រូវបានបន្ថែមទៅលើ Colors ដែលមានស្រាប់។

---

## 4. ការបិទ / បើក (Enable/Disable) Core Plugins 🔌

Tailwind CSS មាន Core Plugins រាប់សិបដែលត្រូវបានបើកដំណើរការដោយ Default ។ អ្នកអាចបិទ ឬបើកពួកវាបាននៅក្នុង \`tailwind.config.js\` នៅក្នុង Object \`corePlugins\` ។

\`\`\`javascript
// tailwind.config.js
module.exports = {
  // ...
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles (CSS Reset)
    // float: false, // Disable float utilities
  },
  // ...
}
\`\`\`
* **preflight:** គឺជា CSS Reset របស់ Tailwind ។ ការបិទវាអាចមានប្រយោជន៍ប្រសិនបើអ្នកកំពុងប្រើ Tailwind ជាមួយ Framework ផ្សេងទៀតដែលមាន CSS Reset ផ្ទាល់ខ្លួន។

---

## 5. ការកំណត់ \`purge\` / \`content\` សម្រាប់ Production Optimization 📦

នៅក្នុង Tailwind CSS 2.x គេប្រើ \`purge\` ។ ចាប់ពី Tailwind CSS 3.x ឡើងទៅ គេប្រើ \`content\` ។ មុខងាររបស់វាគឺដូចគ្នា គឺដើម្បី **Purge (លុបចោល) CSS ដែលមិនបានប្រើប្រាស់** នៅក្នុង Production Build ។ នេះជួយកាត់បន្ថយទំហំ CSS File ចុងក្រោយឱ្យតូចបំផុត។

\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Scan files in pages folder
    "./components/**/*.{js,ts,jsx,tsx}", // Scan files in components folder
    "./public/**/*.html", // Scan HTML files in public folder
  ],
  // ...
}
\`\`\`
* **content:** កំណត់ Path របស់ Files ទាំងអស់ដែល Tailwind គួរតែស្កេនដើម្បីរក Utility Classes ។
* **សំខាន់:** ការកំណត់ \`content\` ឱ្យបានត្រឹមត្រូវគឺសំខាន់ណាស់។ ប្រសិនបើអ្នកមិនកំណត់ Path ត្រឹមត្រូវទេ Tailwind អាចនឹងលុប Classes ដែលអ្នកកំពុងប្រើប្រាស់ ដែលបណ្តាលឱ្យ Styles របស់អ្នកបាត់បង់។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការកែសម្រួល \`tailwind.config.js\`</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីរបៀបកែសម្រួល \`tailwind.config.js\` ដើម្បីបន្ថែម Custom Colors, Fonts, Spacing, និង Breakpoints ។</p>
<p><strong>ជំហាន៖</strong></p>
<ol>
  <li>កែសម្រួល File \`tailwind.config.js\` របស់អ្នកដូចខាងក្រោម៖
    <pre><code class="language-javascript">
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Ensure your HTML files are scanned
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3498db', // A new custom blue color
        'custom-green': '#2ecc71', // A new custom green color
      },
      fontFamily: {
        'heading-font': ['Roboto', 'sans-serif'], // A new font family
        'body-font': ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '14': '3.5rem', // 56px
        '128': '32rem', // 512px
      },
      screens: {
        'tablet': '768px',
        'desktop-xl': '1440px', // New custom breakpoint
      },
    },
  },
  plugins: [],
}
    </code></pre>
  </li>
  <li>ត្រូវប្រាកដថាអ្នកបានដំឡើង Font Roboto និង Open Sans (ឧទាហរណ៍ តាមរយៈ Google Fonts) នៅក្នុង Project របស់អ្នក។</li>
  <li>បង្កើត File \`index.html\` ហើយប្រើ Classes ថ្មីទាំងនេះ៖
    <pre><code class="language-html">
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind Config Example</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Open+Sans:wght@400&display=swap" rel="stylesheet">
  <link href="./dist/output.css" rel="stylesheet">
</head>
<body class="font-body-font bg-gray-50 text-gray-800 p-8">
  <div class="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-xl">
    <h1 class="font-heading-font text-4xl font-bold text-custom-blue mb-4 tablet:text-5xl">
      ការកំណត់រចនាសម្ព័ន្ធ Tailwind
    </h1>
    <p class="text-custom-green text-lg mb-6">
      នេះជាឧទាហរណ៍នៃគេហទំព័រដែលប្រើ Custom Tailwind Theme ។
    </p>
    <button class="bg-custom-blue text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
      ចុចខ្ញុំ
    </button>
    <div class="mt-14 p-4 bg-yellow-100 rounded-md">
      <p class="text-yellow-800">នេះជា Element ដែលប្រើ Custom Spacing (mt-14) ។</p>
    </div>
    <div class="w-full h-128 bg-gray-200 mt-8 flex items-center justify-center text-gray-700 font-bold">
      <p>Height 128 (32rem)</p>
    </div>
  </div>
</body>
</html>
    </code></pre>
  </li>
  <li>ដំណើរការពាក្យបញ្ជា Compile CSS ជាមួយ \`--watch\` ហើយបើក \`index.html\` នៅក្នុង Browser របស់អ្នក។</li>
</ol>
`
  ],
  quiz: [
    {
      question: 'តើ File មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់រចនាសម្ព័ន្ធ Tailwind CSS?',
      options: ['`index.html`', '`style.css`', '`tailwind.config.js`', '`app.js`'],
      correct: 2,
      explanation: 'File `tailwind.config.js` ត្រូវបានប្រើដើម្បីកំណត់រចនាសម្ព័ន្ធ Tailwind CSS ។'
    },
    {
      question: 'តើ Object មួយណាដែលត្រូវបានប្រើដើម្បីបន្ថែម Styles ផ្ទាល់ខ្លួនទៅលើ Default Theme របស់ Tailwind ដោយមិនលុបវាចោល?',
      options: ['`theme`', '`extend`', '`plugins`', '`variants`'],
      correct: 1,
      explanation: 'Object `extend` នៅក្នុង `theme` Object ត្រូវបានប្រើដើម្បីបន្ថែម Styles ផ្ទាល់ខ្លួនទៅលើ Default Theme ។'
    },
    {
      question: 'ប្រសិនបើអ្នកកំណត់ `colors` ដោយផ្ទាល់នៅក្នុង `theme` Object (មិនមែនក្នុង `extend`) តើវានឹងធ្វើអ្វី?',
      options: [
        'បន្ថែម Colors ថ្មី',
        'Override Colors លំនាំដើមទាំងអស់',
        'មិនមានឥទ្ធិពលអ្វីទេ',
        'បិទការប្រើប្រាស់ Colors'
      ],
      correct: 1,
      explanation: 'ការកំណត់ `colors` ដោយផ្ទាល់នៅក្នុង `theme` Object នឹង Override Colors លំនាំដើមទាំងអស់របស់ Tailwind ។'
    },
    {
      question: 'តើ `content` Array នៅក្នុង `tailwind.config.js` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ Colors ផ្ទាល់ខ្លួន',
        'ដើម្បីប្រាប់ Tailwind ថាត្រូវស្កេន Files ណាខ្លះសម្រាប់ Classes ដែលបានប្រើប្រាស់ (សម្រាប់ Purging)',
        'ដើម្បីកំណត់ Plugins',
        'ដើម្បីកំណត់ Font Families'
      ],
      correct: 1,
      explanation: '`content` Array ត្រូវបានប្រើដើម្បីប្រាប់ Tailwind ថាត្រូវស្កេន Files ណាខ្លះសម្រាប់ Classes ដែលបានប្រើប្រាស់ (សម្រាប់ Purging CSS ដែលមិនចាំបាច់) ។'
    },
    {
      question: 'តើ `preflight` នៅក្នុង `corePlugins` គឺជាអ្វី?',
      options: [
        'ជា JavaScript Library',
        'ជា CSS Reset របស់ Tailwind',
        'ជា Plugin សម្រាប់ Forms',
        'ជា Plugin សម្រាប់ Typography'
      ],
      correct: 1,
      explanation: '`preflight` គឺជា CSS Reset របស់ Tailwind ដែលផ្តល់នូវ Base Styles សម្រាប់ Elements ។'
    },
    {
      question: 'តើការផ្លាស់ប្តូរនៅក្នុង `tailwind.config.js` ទាមទារឱ្យមានការ Compile CSS ឡើងវិញដែរឬទេ?',
      options: ['ទេ វានឹង Update ដោយស្វ័យប្រវត្តិ', 'បាទ/ចាស ជានិច្ច', 'បានតែពេលបន្ថែម Colors ថ្មី', 'បានតែពេលលុប Plugins'],
      correct: 1,
      explanation: 'បាទ/ចាស រាល់ការផ្លាស់ប្តូរនៅក្នុង `tailwind.config.js` ទាមទារឱ្យមានការ Compile CSS ឡើងវិញ ដើម្បីឱ្យការផ្លាស់ប្តូរមានប្រសិទ្ធភាព។'
    },
    {
      question: 'តើ `fontFamily` នៅក្នុង `extend` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ Font Size',
        'ដើម្បីកំណត់ Font Weight',
        'ដើម្បីបន្ថែម Font Families ផ្ទាល់ខ្លួន',
        'ដើម្បីកំណត់ Line Height'
      ],
      correct: 2,
      explanation: '`fontFamily` នៅក្នុង `extend` ត្រូវបានប្រើដើម្បីបន្ថែម Font Families ផ្ទាល់ខ្លួនរបស់អ្នក។'
    },
    {
      question: 'តើ `spacing` នៅក្នុង `extend` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់គម្លាតរវាងអក្សរ',
        'ដើម្បីកំណត់គម្លាតបន្ទាត់',
        'ដើម្បីកំណត់ Spacing Values ផ្ទាល់ខ្លួន (Padding, Margin, Width, Height)',
        'ដើម្បីកំណត់ Border Width'
      ],
      correct: 2,
      explanation: '`spacing` នៅក្នុង `extend` ត្រូវបានប្រើដើម្បីកំណត់ Spacing Values ផ្ទាល់ខ្លួន ដែលអាចប្រើសម្រាប់ Padding, Margin, Width, Height ។'
    },
    {
      question: 'តើ `screens` នៅក្នុង `extend` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីកំណត់ Colors',
        'ដើម្បីកំណត់ Shadows',
        'ដើម្បីកំណត់ Custom Breakpoints',
        'ដើម្បីកំណត់ Border Radius'
      ],
      correct: 2,
      explanation: '`screens` នៅក្នុង `extend` ត្រូវបានប្រើដើម្បីកំណត់ Custom Breakpoints ផ្ទាល់ខ្លួនរបស់អ្នក។'
    },
    {
      question: 'តើការកំណត់ `content` មិនត្រឹមត្រូវអាចបណ្តាលឱ្យមានបញ្ហាអ្វី?',
      options: [
        'ធ្វើឱ្យ CSS File ធំពេក',
        'ធ្វើឱ្យ Tailwind មិនអាច Compile បាន',
        'ធ្វើឱ្យ Styles របស់អ្នកបាត់បង់ដោយសារការ Purge មិនត្រឹមត្រូវ',
        'បង្កើនល្បឿនអភិវឌ្ឍន៍'
      ],
      correct: 2,
      explanation: 'ការកំណត់ `content` មិនត្រឹមត្រូវអាចបណ្តាលឱ្យ Tailwind លុប Classes ដែលអ្នកកំពុងប្រើប្រាស់ ដែលបណ្តាលឱ្យ Styles របស់អ្នកបាត់បង់។'
    },
    {
      question: 'តើ `tailwind.config.js` គឺជា File ប្រភេទណា?',
      options: [
        'HTML File',
        'CSS File',
        'JavaScript File',
        'JSON File'
      ],
      correct: 2,
      explanation: '`tailwind.config.js` គឺជា JavaScript File ដែល Export Object មួយ។'
    },
    {
      question: 'តើការកំណត់ `corePlugins` សម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីបន្ថែម Plugins ថ្មី',
        'ដើម្បីបិទ/បើក Core Plugins របស់ Tailwind',
        'ដើម្បីកំណត់រចនាសម្ព័ន្ធ CSS Preprocessors',
        'ដើម្បីកំណត់រចនាសម្ព័ន្ធ PostCSS Plugins'
      ],
      correct: 1,
      explanation: '`corePlugins` ត្រូវបានប្រើដើម្បីបិទ ឬបើក Core Plugins របស់ Tailwind ។'
    },
    {
      question: 'តើ `theme` Object នៅក្នុង `tailwind.config.js` ផ្ទុកនូវអ្វីខ្លះ?',
      options: [
        'តែ Colors ប៉ុណ្ណោះ',
        'តែ Font Families ប៉ុណ្ណោះ',
        'Design Tokens ទាំងអស់ដូចជា Colors, Fonts, Spacing, Breakpoints',
        'Plugins និង Extensions'
      ],
      correct: 2,
      explanation: '`theme` Object ផ្ទុកនូវ Design Tokens ទាំងអស់របស់ Tailwind ដូចជា Colors, Fonts, Spacing, Breakpoints ។'
    },
    {
      question: 'តើការប្រើប្រាស់ `extend` នៅក្នុង `theme` មានគុណសម្បត្តិអ្វី?',
      options: [
        'វាលុបចោល Default Theme របស់ Tailwind',
        'វាអនុញ្ញាតឱ្យអ្នកបន្ថែមតម្លៃថ្មីទៅលើ Default Theme ដោយមិនលុបវាចោល',
        'វាធ្វើឱ្យ CSS File ធំជាងមុន',
        'វាបិទការប្ដូរតាមបំណង'
      ],
      correct: 1,
      explanation: 'ការប្រើប្រាស់ `extend` អនុញ្ញាតឱ្យអ្នកបន្ថែមតម្លៃថ្មីទៅលើ Default Theme របស់ Tailwind ដោយមិនលុបវាចោល។'
    },
    {
      question: 'តើ `purge` (សម្រាប់ Tailwind 2.x) និង `content` (សម្រាប់ Tailwind 3.x) មានមុខងារសំខាន់អ្វី?',
      options: [
        'ដើម្បីបង្កើនទំហំ CSS File',
        'ដើម្បីលុប CSS ដែលមិនបានប្រើប្រាស់ក្នុង Production Build',
        'ដើម្បីបន្ថែម CSS ថ្មី',
        'ដើម្បី Compile CSS ឱ្យយឺត'
      ],
      correct: 1,
      explanation: 'ទាំង `purge` និង `content` មានមុខងារសំខាន់ដើម្បីលុប CSS ដែលមិនបានប្រើប្រាស់ក្នុង Production Build ដែលជួយកាត់បន្ថយទំហំ CSS File ចុងក្រោយ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ កែសម្រួល \`tailwind.config.js\` និងប្រើ Custom Styles

កែសម្រួល File \`tailwind.config.js\` នៅក្នុង Project Tailwind CSS របស់អ្នក ហើយបន្ទាប់មកបង្កើត File HTML ថ្មីមួយដើម្បីសាកល្បងការកំណត់ទាំងនោះ។

**ជំហានទី 1: កែសម្រួល \`tailwind.config.js\`**
នៅក្នុង File \`tailwind.config.js\` របស់អ្នក សូមអនុវត្តការផ្លាស់ប្តូរខាងក្រោមនៅក្នុង Object \`theme.extend\`៖

* **Custom Color:** បន្ថែម Custom Color ថ្មីមួយឈ្មោះ \`'app-primary'\` ដែលមានតម្លៃ \`'#6B46C1'\` (ពណ៌ស្វាយ)។
* **Custom Font Family:** បន្ថែម Custom Font Family ថ្មីមួយឈ្មោះ \`'headline'\` ដោយប្រើ Font \`'Montserrat'\` (ត្រូវប្រាកដថាបានភ្ជាប់ Font នេះក្នុង HTML របស់អ្នកពី Google Fonts)។
* **Custom Spacing Value:** បន្ថែម Custom Spacing Value ថ្មីមួយឈ្មោះ \`'72'\` ដែលមានតម្លៃ \`'18rem'\` (ស្មើនឹង 288px)។

**ជំហានទី 2: បង្កើត File HTML ថ្មី (\`config-lab.html\`)**
បង្កើត File HTML ថ្មីមួយឈ្មោះ \`config-lab.html\` នៅក្នុង Root Directory នៃ Project របស់អ្នក។ ភ្ជាប់ Font Montserrat ពី Google Fonts និង CSS File ដែលបាន Compile របស់ Tailwind។

**ជំហានទី 3: ប្រើប្រាស់ Custom Styles នៅក្នុង HTML**
នៅក្នុង File \`config-lab.html\` របស់អ្នក សូមបង្កើត Element មួយចំនួន ហើយប្រើប្រាស់ Custom Styles ដែលអ្នកបានកំណត់នៅក្នុង \`tailwind.config.js\`៖

* Header (ឧទាហរណ៍ \`<h1>\`) មួយដែលប្រើ \`font-headline\` និង \`text-app-primary\` ។
* Paragraph (ឧទាហរណ៍ \`<p>\`) មួយដែលមាន Text ធម្មតា។
* \`div\` មួយដែលប្រើ \`mt-72\` (margin-top 72) ដើម្បីបង្ហាញពី Custom Spacing ។

**ជំហានទី 4: Compile CSS និងមើលលទ្ធផល**
ត្រូវប្រាកដថា Compile CSS ឡើងវិញបន្ទាប់ពីការផ្លាស់ប្តូរនៅក្នុង \`tailwind.config.js\` (ឧទាហរណ៍៖ \`npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch\`)។ បន្ទាប់មក បើក File \`config-lab.html\` នៅក្នុង Browser របស់អ្នក ដើម្បីមើលលទ្ធផល។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Config Lab</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
    <link href="./dist/output.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">

    <div class="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h1 class="text-4xl font-headline text-app-primary mb-4 text-center">
            ការកំណត់រចនាសម្ព័ន្ធផ្ទាល់ខ្លួន
        </h1>
        <p class="text-lg text-gray-700 mb-6">
            នេះជាឧទាហរណ៍នៃគេហទំព័រដែលប្រើប្រាស់ Custom Theme របស់ Tailwind CSS ។
        </p>
        <div class="mt-72 p-4 bg-blue-100 rounded-md text-center">
            <p class="text-blue-800">
                នេះជា Element ដែលប្រើ Custom Spacing (mt-72) ។
            </p>
        </div>
    </div>

</body>
</html>
`
  }
};

export default TailwindLesson1_3Content;