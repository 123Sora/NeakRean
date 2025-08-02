import type { LessonContent } from '../../../../types/LessonTypes';

const TailwindLesson4_1Content: LessonContent = {
  title: 'Customization (ការប្ដូរតាមបំណង)',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃការប្ដូរតាមបំណង Tailwind CSS',
    'របៀបបន្ថែម Custom Colors, Fonts, Spacing, និង Breakpoints',
    'របៀប Override Default Theme Values',
    'របៀបបន្ថែម Custom Utilities (Plugins)',
    'របៀបប្រើប្រាស់ `@apply` Directive'
  ],
  content: `
# Customization (ការប្ដូរតាមបំណង) 🎨⚙️

---

Tailwind CSS ត្រូវបានរចនាឡើងឱ្យមានភាពបត់បែនខ្ពស់។ ឯកសារ \`tailwind.config.js\` គឺជាកន្លែងសម្រាប់ប្ដូរតាមបំណង Framework នេះ ដើម្បីឱ្យស៊ីគ្នាជាមួយ Design System ឬ Brand ផ្ទាល់ខ្លួន។

---

## 1. សារៈសំខាន់នៃការប្ដូរតាមបំណង Tailwind CSS 💡

ការប្ដូរតាមបំណងផ្តល់អត្ថប្រយោជន៍ដូចជា៖
* **បង្កើត Design System ផ្ទាល់ខ្លួន:** កំណត់ Colors, Fonts, Spacing, និង Breakpoints តាម Brand ។
* **ភាពស៊ីសង្វាក់គ្នា:** ធានាថាក្រុមប្រើ Styles ដូចគ្នា។
* **បង្រួម CSS:** បង្កើតតែ CSS ដែលចាំបាច់។
* **បង្កើនល្បឿនការងារ:** បង្កើត Classes ផ្ទាល់ខ្លួនដែលងាយយល់។

---

## 2. បន្ថែម Custom Colors, Fonts, Spacing, និង Breakpoints ➕

ប្រើ \`theme.extend\` នៅក្នុង \`tailwind.config.js\` ដើម្បីបន្ថែមតម្លៃថ្មីដោយរក្សា Default Theme ។

\`\`\`javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF5733',
        'secondary': '#33FF57',
        'dark-text': '#222222',
      },
      fontFamily: {
        'heading': ['"Roboto Slab"', 'serif'],
        'body': ['"Open Sans"', 'sans-serif'],
      },
      spacing: {
        '100': '25rem',
        '120': '30rem',
      },
      screens: {
        'tablet': '640px',
        'desktop': '1024px',
      },
    },
  },
  plugins: [],
}
\`\`\`

* **colors:** បន្ថែមពណ៌ថ្មី។
* **fontFamily:** បន្ថែម Font Families (ត្រូវភ្ជាប់ Fonts នៅក្នុង HTML/CSS) ។
* **spacing:** បន្ថែម Spacing Values សម្រាប់ Padding, Margin, Width, Height ។
* **screens:** បន្ថែម Custom Breakpoints ។

---

## 3. Override Default Theme Values ⚠️

ការកំណត់ Property ដោយផ្ទាល់នៅក្នុង \`theme\` (មិនមែន \`extend\`) នឹងជំនួស Default Values ទាំងអស់។

\`\`\`javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      'brand-blue': '#007bff',
      'brand-green': '#28a745',
      'gray': {
        100: '#f8f9fa',
        200: '#e9ecef',
      },
    },
  },
  plugins: [],
}
\`\`\`

**ការប្រុងប្រយ័ត្ន:** ការ Override លុប Default Classes ទាំងអស់។ ប្រើ \`extend\` វិញសម្រាប់ភាពបត់បែន។

---

## 4. បន្ថែម Custom Utilities (Plugins) 🔌

បន្ថែម Utility Classes ផ្ទាល់ខ្លួនដោយប្រើ Tailwind Plugin ។

\`\`\`javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.text-gradient': {
          'background-image': 'linear-gradient(to right, #f87979, #995cff)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}
\`\`\`

* **addUtilities:** បន្ថែម Utility Classes ថ្មី។
* **responsive, hover:** កំណត់ Variants សម្រាប់ Classes ។

---

## 5. ប្រើ \`@apply\` Directive 📝

\`@apply\` អនុញ្ញាតឱ្យបញ្ចូល Utility Classes ទៅក្នុង Custom CSS Class ។

\`\`\`css
/* src/input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md;
  }
  .btn-primary:hover {
    @apply bg-blue-600;
  }
  .card-base {
    @apply bg-white rounded-xl shadow-lg p-6;
  }
}
\`\`\`

* **@layer components:** ដាក់ Custom Classes ក្នុង Components Layer ។
* **ការប្រុងប្រយ័ត្ន:** កុំប្រើ \`@apply\` ច្រើនពេក ដើម្បីរក្សាគុណសម្បត្តិ Utility-First ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Custom Colors និង Fonts</h3>
<p>បង្ហាញការប្រើ Custom Colors, Fonts, និង Spacing ពី \`tailwind.config.js\` ។</p>
<div class="container mx-auto p-6">
  <div class="card-base max-w-md mx-auto">
    <h2 class="font-heading text-4xl text-primary mb-4">
      ចំណងជើងផ្ទាល់ខ្លួន
    </h2>
    <p class="font-body text-lg text-dark-text mb-6">
      អត្ថបទនេះប្រើ Font Family និង Colors ផ្ទាល់ខ្លួន។
    </p>
    <button class="btn-primary">
      ចុចខ្ញុំ
    </button>
    <div class="mt-100 p-4 bg-yellow-100 rounded-md">
      <p class="text-yellow-800">Element នេះប្រើ Custom Spacing (mt-100) ។</p>
    </div>
  </div>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Customization Example</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Slab:wght@700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer components {
        .btn-primary {
          @apply bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md;
        }
        .btn-primary:hover {
          @apply bg-blue-600;
        }
        .card-base {
          @apply bg-white rounded-xl shadow-lg p-6;
        }
      }
    </style>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              'primary': '#FF5733',
              'secondary': '#33FF57',
              'dark-text': '#222222',
            },
            fontFamily: {
              'heading': ['"Roboto Slab"', 'serif'],
              'body': ['"Open Sans"', 'sans-serif'],
            },
            spacing: {
              '100': '25rem',
              '120': '30rem',
            },
            screens: {
              'tablet': '640px',
              'desktop': '1024px',
            },
          },
        },
        plugins: [],
      };
    </script>
</head>
<body>
    <div class="container mx-auto p-6">
        <div class="card-base max-w-md mx-auto">
            <h2 class="font-heading text-4xl text-primary mb-4">
                ចំណងជើងផ្ទាល់ខ្លួន
            </h2>
            <p class="font-body text-lg text-dark-text mb-6">
                អត្ថបទនេះប្រើ Font Family និង Colors ផ្ទាល់ខ្លួន។
            </p>
            <button class="btn-primary">
                ចុចខ្ញុំ
            </button>
            <div class="mt-100 p-4 bg-yellow-100 rounded-md">
                <p class="text-yellow-800">Element នេះប្រើ Custom Spacing (mt-100) ។</p>
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
      question: 'តើឯកសារใดសម្រាប់ប្ដូរតាមបំណង Tailwind CSS?',
      options: ['`index.html`', '`style.css`', '`tailwind.config.js`', '`app.js`'],
      correct: 2,
      explanation: '`tailwind.config.js` គឺជាឯកសារសម្រាប់កំណត់រចនាសម្ព័ន្ធ Tailwind CSS ។'
    },
    {
      question: 'តើ Object ណាបន្ថែម Custom Colors ដោយរក្សា Default Palette?',
      options: ['`theme.colors`', '`theme.extend.colors`', '`plugins`', '`variants`'],
      correct: 1,
      explanation: '`theme.extend.colors` បន្ថែមពណ៌ថ្មីដោយរក្សា Default Palette ។'
    },
    {
      question: 'តើការកំណត់ `fontFamily` នៅក្នុង `theme` (មិនមែន `extend`) ធ្វើអ្វី?',
      options: [
        'បន្ថែម Font Families',
        'Override Default Font Families',
        'គ្មានឥទ្ធិពល',
        'បិទ Font Families'
      ],
      correct: 1,
      explanation: 'ការកំណត់ `fontFamily` នៅក្នុង `theme` នឹង Override Default Font Families ។'
    },
    {
      question: 'តើ `spacing` នៅក្នុង `extend` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់គម្លាតអក្សរ',
        'កំណត់គម្លាតបន្ទាត់',
        'បន្ថែម Spacing Values (Padding, Margin, Width, Height)',
        'កំណត់ Border Width'
      ],
      correct: 2,
      explanation: '`spacing` បន្ថែម Spacing Values សម្រាប់ Padding, Margin, Width, Height ។'
    },
    {
      question: 'តើ `screens` នៅក្នុង `extend` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Colors',
        'កំណត់ Shadows',
        'កំណត់ Custom Breakpoints',
        'កំណត់ Border Radius'
      ],
      correct: 2,
      explanation: '`screens` បន្ថែម Custom Breakpoints ។'
    },
    {
      question: 'តើ `addUtilities` នៅក្នុង Plugin ប្រើសម្រាប់អ្វី?',
      options: [
        'បន្ថែម Component Classes',
        'បន្ថែម Utility Classes',
        'Override Default Styles',
        'បិទ Core Plugins'
      ],
      correct: 1,
      explanation: '`addUtilities` បន្ថែម Utility Classes ផ្ទាល់ខ្លួន។'
    },
    {
      question: 'តើ `@apply` Directive ធ្វើអ្វី?',
      options: [
        'នាំចូល CSS File',
        'បញ្ចូល Utility Classes ទៅ Custom CSS Class',
        'បង្កើត CSS Variables',
        'លុប CSS'
      ],
      correct: 1,
      explanation: '`@apply` បញ្ចូល Utility Classes ទៅ Custom CSS Class ។'
    },
    {
      question: 'តើការใช้ `@apply` ច្រើនពេកបណ្តាលឱ្យមានបញ្ហាអ្វី?',
      options: [
        'CSS File តូច',
        'បាត់គុណសម្បត្តិ Utility-First',
        'បង្កើនល្បឿន Compile',
        'Code ងាយអាន'
      ],
      correct: 1,
      explanation: 'ការប្រើ `@apply` ច្រើនពេកអាចបាត់គុណសម្បត្តិ Utility-First ។'
    },
    {
      question: 'តើ `tailwind.config.js` ជា File ប្រភេទណា?',
      options: ['HTML', 'CSS', 'JavaScript', 'JSON'],
      correct: 2,
      explanation: '`tailwind.config.js` ជា JavaScript File ។'
    },
    {
      question: 'តើ `plugins` Array ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Font Sizes',
        'កំណត់ Colors',
        'បន្ថែម Plugins',
        'កំណត់ Breakpoints'
      ],
      correct: 2,
      explanation: '`plugins` Array បន្ថែម Custom ឬ Third-party Plugins ។'
    },
    {
      question: 'តើ `theme.extend` ខុសពី `theme` យ៉ាងដូចម្តេច?',
      options: [
        '`theme.extend` ลบ Default Values, `theme` บนธ่ม Values',
        '`theme.extend` បន្ថែម Values, `theme` ลบ Default Values',
        'គ្មានភាពខុសគ្នា',
        '`theme.extend` សម្រាប់ Production'
      ],
      correct: 1,
      explanation: '`theme.extend` បន្ថែម Values ដោយរក្សា Defaults, `theme` Override Defaults ។'
    },
    {
      question: 'តើការប្ដូរតាមបំណង Tailwind ជួយអ្វីដល់ Design System?',
      options: [
        'ពិបាកគ្រប់គ្រង',
        'រក្សាភាពស៊ីសង្វាក់គ្នា',
        'បង្កើនទំហំ CSS',
        'កាត់បន្ថយល្បឿន'
      ],
      correct: 1,
      explanation: 'ការប្ដូរតាមបំណងរក្សាភាពស៊ីសង្វាក់គ្នានៃ Design និង Brand ។'
    },
    {
      question: 'តើ Class `text-gradient` នៅក្នុង Plugin ធ្វើអ្វី?',
      options: [
        'កំណត់ពណ៌អត្ថបទ',
        'ផ្ទៃខាងក្រោយ Gradient សម្រាប់អត្ថបទ',
        'បន្ថែមស្រមោល',
        'បន្ថែមគម្លាត'
      ],
      correct: 1,
      explanation: '`text-gradient` បង្កើត Gradient Background សម្រាប់អត្ថបទ។'
    },
    {
      question: 'តើ `postcss` មានតួនាទីអ្វី?',
      options: [
        'JavaScript Framework',
        'CSS Preprocessor',
        'Transform CSS ជាមួយ Plugins',
        'Web Server'
      ],
      correct: 2,
      explanation: '`postcss` Transform CSS ជាមួយ Plugins, Tailwind ជា PostCSS Plugin ។'
    },
    {
      question: 'តើ `content` Array នៅក្នុង `tailwind.config.js` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Colors',
        'ស្កេន Files សម្រាប់ Classes (Purging)',
        'កំណត់ Plugins',
        'កំណត់ Fonts'
      ],
      correct: 1,
      explanation: '`content` Array ប្រាប់ Tailwind ស្កេន Files សម្រាប់ Classes ដើម្បី Purge CSS ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ ប្ដូរតាមបំណង Tailwind CSS

1. **កែសម្រួល** \`tailwind.config.js\`:
   - បន្ថែម Custom Colors:
     - \`'brand-primary': '#4CAF50'\` (បៃតង)
     - \`'brand-secondary': '#FFC107'\` (លឿង)
   - បន្ថែម Custom Spacing:
     - \`'72': '18rem'\` (288px)
   - បន្ថែម Custom Breakpoint:
     - \`'tablet-lg': '900px'\`

2. **បង្កើត HTML File** (\`custom-lab.html\`):
   - ប្រើ Classes ថ្មីដើម្បីរចនា Card Component:
     - Container: \`p-8 bg-gray-50 flex items-center justify-center min-h-screen\`
     - Card: \`max-w-md w-full bg-white p-6 rounded-xl shadow-lg\`
     - Heading: \`text-3xl font-bold text-brand-primary mb-4 tablet-lg:text-4xl\`
     - Paragraph: \`text-lg text-gray-700 mb-6\`
     - Button: \`bg-brand-secondary text-gray-800 px-6 py-3 rounded-md shadow-md hover:bg-yellow-600 transition-colors\`
     - Div: \`mt-72 p-4 bg-blue-100 rounded-md\` មាន Text: \`text-blue-800\`

3. **Compile CSS** បន្ទាប់ពីកែសម្រួល។
`,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Customization Lab</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        content: ["./*.html"],
        theme: {
          extend: {
            colors: {
              'brand-primary': '#4CAF50',
              'brand-secondary': '#FFC107',
            },
            spacing: {
              '72': '18rem',
            },
            screens: {
              'tablet-lg': '900px',
            },
          },
        },
        plugins: [],
      };
    </script>
</head>
<body>
    <div class="p-8 bg-gray-50 flex items-center justify-center min-h-screen">
        <div class="max-w-md w-full bg-white p-6 rounded-xl shadow-lg">
            <h1 class="text-3xl font-bold text-brand-primary mb-4 tablet-lg:text-4xl">
                ការប្ដូរតាមបំណង Tailwind
            </h1>
            <p class="text-lg text-gray-700 mb-6">
                ឧទាហរណ៍នេះបង្ហាញ Custom Colors និង Breakpoints ។
            </p>
            <button class="bg-brand-secondary text-gray-800 px-6 py-3 rounded-md shadow-md hover:bg-yellow-600 transition-colors">
                ចុចខ្ញុំ
            </button>
            <div class="mt-72 p-4 bg-blue-100 rounded-md">
                <p class="text-blue-800">Element នេះប្រើ Custom Spacing (mt-72) ។</p>
            </div>
        </div>
    </div>
</body>
</html>
`
  }
};

export default TailwindLesson4_1Content;