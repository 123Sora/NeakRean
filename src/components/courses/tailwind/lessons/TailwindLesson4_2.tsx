import type { LessonContent } from '../../../../types/LessonTypes';

const TailwindLesson4_2Content: LessonContent = {
  title: 'Optimization (ការបង្កើនប្រសិទ្ធភាព)',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃការបង្កើនប្រសិទ្ធភាព CSS សម្រាប់ Production',
    'របៀបប្រើប្រាស់ `content` Configuration សម្រាប់ Purging Unused CSS',
    'របៀបប្រើប្រាស់ JIT (Just-In-Time) Mode',
    'គុណសម្បត្តិនៃការបង្កើនប្រសិទ្ធភាព (ទំហំ File តូច, ល្បឿន Load លឿន)'
  ],
  content: `
# Optimization (ការបង្កើនប្រសិទ្ធភាព) 🚀✨

---

Tailwind CSS ផ្តល់នូវ Classes រាប់ពាន់ ប៉ុន្តែនៅក្នុង Production Build ការបង្កើនប្រសិទ្ធភាពជួយកាត់បន្ថយទំហំ CSS File ដោយលុប Classes ដែលមិនបានប្រើ ដើម្បីឱ្យគេហទំព័រ Load លឿន និងមានប្រសិទ្ធភាព។

---

## 1. សារៈសំខាន់នៃការបង្កើនប្រសិទ្ធភាព CSS 💡

* **ទំហំ File តូច:** កាត់បន្ថយទំហំ CSS File សម្រាប់ការទាញយកលឿន។
* **ល្បឿន Load លឿន:** ធ្វើឱ្យគេហទំព័រដំណើរការលឿន បង្កើនបទពិសោធន៍អ្នកប្រើ និងជួយ SEO ។
* **សន្សំ Bandwidth:** កាត់បន្ថយទិន្នន័យដែលត្រូវផ្ទេរ ស័ក្តិសមសម្រាប់អ្នកប្រើប្រាស់ដែលមាន Internet យឺត។

---

## 2. ប្រើ \`content\` Configuration សម្រាប់ Purging Unused CSS 🗑️

\`content\` Array នៅក្នុង \`tailwind.config.js\` ប្រាប់ Tailwind ឱ្យស្កេន Files ដែលមាន Tailwind Classes និងលុប Classes ដែលមិនបានប្រើ។

\`\`\`javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

* **សំខាន់:** ត្រូវកំណត់ Path ឱ្យត្រឹមត្រូវនៅក្នុង \`content\` Array ដើម្បីជៀសវាងការលុប Classes ដែលត្រូវការ។

---

## 3. ប្រើ JIT (Just-In-Time) Mode ⚡

JIT Mode ជា Default ចាប់ពី Tailwind CSS 3.0 ឡើងទៅ ដែល Compile CSS ភ្លាមៗនៅពេលសរសេរ Code ។

**គុណសម្បត្តិ:**
* **Compile លឿន:** បង្កើត CSS នៅពេលរក្សាទុក File ។
* **ទំហំ File តូច:** បង្កើតតែ CSS ដែលត្រូវការក្នុង Development ។
* **Arbitrary Values:** អនុញ្ញាតឱ្យប្រើតម្លៃផ្ទាល់ខ្លួន (ឧ. \`w-[123px]\`, \`bg-[#bada55]\`) ។

**ការបើក JIT Mode (សម្រាប់ Tailwind < 3.0):**
\`\`\`javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

**ចំណាំ:** JIT Mode ជា Default នៅ Tailwind 3.0+ ដូច្នេះមិនចាំបាច់កំណត់ \`mode: 'jit'\` ទេ។

---

## 4. គុណសម្បត្តិនៃការបង្កើនប្រសិទ្ធភាព ✨

* **ទំហំ CSS File តូច:** បន្ទាប់ពី Purge CSS File អាចមានទំហំតែប៉ុន្មាន KB ។
* **ល្បឿន Load លឿន:** ធ្វើឱ្យគេហទំព័រ Load លឿន បង្កើនបទពិសោធន៍អ្នកប្រើ។
* **បង្កើន Performance Scores:** ជួយបង្កើន Core Web Vitals សម្រាប់ SEO ។
* **សន្សំ Bandwidth:** កាត់បន្ថយទិន្នន័យ ស័ក្តិសមសម្រាប់ Internet យឺត។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការកំណត់ \`content\` សម្រាប់ Production</h3>
<p>ឧទាហរណ៍នេះបង្ហាញការកំណត់ \`content\` Array និង HTML សម្រាប់ Purging ។</p>
<p><strong>\`tailwind.config.js\`:</strong></p>
\`\`\`javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

<p><strong>\`index.html\`:</strong></p>
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind Optimization Example</title>
    <link href="./dist/output.css" rel="stylesheet">
</head>
<body>
    <div class="flex items-center justify-center min-h-screen bg-blue-100">
        <div class="bg-white p-8 rounded-lg shadow-xl text-center">
            <h1 class="text-3xl font-bold text-green-600 mb-4">
                បង្កើនប្រសិទ្ធភាព Tailwind
            </h1>
            <p class="text-gray-700 text-lg">
                CSS នេះត្រូវបាន Purge ដើម្បីកាត់បន្ថយទំហំ File ។
            </p>
            <button class="mt-6 bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600">
                ប៊ូតុងសាកល្បង
            </button>
        </div>
    </div>
</body>
</html>
\`\`\`

<p><strong>ពាក្យបញ្ជា Compile សម្រាប់ Production:</strong></p>
\`\`\`bash
NODE_ENV=production npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
\`\`\`
<p>**ចំណាំ:** \`NODE_ENV=production\` បើក Purging, និង \`--minify\` បង្រួម CSS ។</p>
`
  ],
  quiz: [
    {
      question: 'តើគោលបំណងសំខាន់នៃការបង្កើនប្រសិទ្ធភាព Tailwind CSS គឺអ្វី?',
      options: [
        'បង្កើនទំហំ CSS File',
        'ធ្វើឱ្យ Load យឺត',
        'កាត់បន្ថយទំហំ CSS File និងបង្កើនល្បឿន Load',
        'បន្ថែម Classes'
      ],
      correct: 2,
      explanation: 'គោលបំណងគឺកាត់បន្ថយទំហំ CSS File និងបង្កើនល្បឿន Load ។'
    },
    {
      question: 'តើ Property ណាកំណត់ Files សម្រាប់ Purging Unused CSS?',
      options: ['`purge`', '`content`', '`optimize`', '`minify`'],
      correct: 1,
      explanation: '`content` Array កំណត់ Files សម្រាប់ Purging នៅ Tailwind 3.x+ ។'
    },
    {
      question: 'ហេតុអ្វីត្រូវកំណត់ Path ត្រឹមត្រូវនៅក្នុង `content` Array?',
      options: [
        'មិនសំខាន់',
        'បើខុស Tailwind អាចលុប Classes ដែលត្រូវការ',
        'Tailwind ស្កេនគ្រប់ Files ដោយស្វ័យប្រវត្តិ',
        'សម្រាប់ Development Mode'
      ],
      correct: 1,
      explanation: 'Path ត្រឹមត្រូវការពារ Classes ដែលត្រូវការពីការលុប។'
    },
    {
      question: 'តើ JIT Mode ធ្វើអ្វី?',
      options: [
        'Compile CSS នៅពេល Deploy',
        'Compile CSS ភ្លាមៗនៅពេលសរសេរ Code',
        'Compile CSS តែម្តង',
        'មិន Compile CSS'
      ],
      correct: 1,
      explanation: 'JIT Mode Compile CSS ភ្លាមៗ ធ្វើឱ្យ Development លឿន។'
    },
    {
      question: 'JIT Mode ជា Default ចាប់ពី Tailwind Version ណា?',
      options: ['1.0', '2.0', '2.1', '3.0'],
      correct: 3,
      explanation: 'JIT Mode ជា Default នៅ Tailwind CSS 3.0+ ។'
    },
    {
      question: 'តើអ្វីមិនមែនជាគុណសម្បត្តិនៃការបង្កើនប្រសិទ្ធភាព?',
      options: [
        'ទំហំ CSS File តូច',
        'ល្បឿន Load លឿន',
        'បង្កើន Bandwidth Usage',
        'Improved Performance Scores'
      ],
      correct: 2,
      explanation: 'ការបង្កើនប្រសិទ្ធភាពកាត់បន្ថយ Bandwidth មិនមែនបង្កើនទេ។'
    },
    {
      question: 'តើ `NODE_ENV=production` ប្រើសម្រាប់អ្វីនៅពេល Compile?',
      options: [
        'បើក Development Mode',
        'បើក Purging CSS',
        'បិទ Purging CSS',
        'បង្កើនល្បឿន Compile'
      ],
      correct: 1,
      explanation: '`NODE_ENV=production` បើក Purging CSS សម្រាប់ Production ។'
    },
    {
      question: 'តើ Arbitrary Values នៅក្នុង JIT Mode គឺជាអ្វី?',
      options: [
        'CSS Values កំណត់ជាមុន',
        'CSS Values ផ្ទាល់ខ្លួន (ឧ. `w-[123px]`)',
        'CSS Values មិនអាចប្ដូរបាន',
        'CSS Values ដែលលុបចោល'
      ],
      correct: 1,
      explanation: 'Arbitrary Values ជា CSS Values ផ្ទាល់ខ្លួននៅក្នុង JIT Mode ។'
    },
    {
      question: 'តើ `autoprefixer` ជួយបង្កើនប្រសិទ្ធភាពយ៉ាងដូចម្តេច?',
      options: [
        'លុប CSS មិនប្រើ',
        'បន្ថែម Vendor Prefixes',
        'បង្រួម CSS',
        'Compile CSS លឿន'
      ],
      correct: 1,
      explanation: '`autoprefixer` បន្ថែម Vendor Prefixes សម្រាប់ Browser Compatibility ។'
    },
    {
      question: 'តើ `--minify` Option ធ្វើអ្វី?',
      options: [
        'ធ្វើឱ្យ CSS File ធំ',
        'បង្រួម CSS Code',
        'បន្ថែម Comments',
        'លុប CSS មិនប្រើ'
      ],
      correct: 1,
      explanation: '`--minify` បង្រួម CSS Code ដើម្បីកាត់បន្ថយទំហំ File ។'
    },
    {
      question: 'ការបង្កើនប្រសិទ្ធភាពជួយ SEO យ៉ាងដូចម្តេច?',
      options: [
        'ធ្វើឱ្យ Load យឺត',
        'ធ្វើឱ្យ Load លឿន ជួយ SEO',
        'មិនមានឥទ្ធិពល',
        'បង្កើន Classes'
      ],
      correct: 1,
      explanation: 'Load លឿនជួយ Core Web Vitals និង SEO ។'
    },
    {
      question: 'ការបង្កើនប្រសិទ្ធភាពអនុវត្តនៅដំណាក់កាលណា?',
      options: [
        'Development',
        'Testing',
        'Production Build',
        'Design'
      ],
      correct: 2,
      explanation: 'ការបង្កើនប្រសិទ្ធភាពអនុវត្តនៅ Production Build ។'
    },
    {
      question: 'តើ Purging គឺជាអ្វី?',
      options: [
        'បន្ថែម CSS',
        'លុប CSS មិនប្រើ',
        'ផ្លាស់ប្តូរពណ៌',
        'កំណត់រចនាសម្ព័ន្ធ'
      ],
      correct: 1,
      explanation: 'Purging លុប CSS ដែលមិនបានប្រើចេញពី Output File ។'
    },
    {
      question: 'ហេតុអ្វី CSS File ធំនៅ Development Mode?',
      options: [
        'មាន Classes តិច',
        'មាន Classes ទាំងអស់សម្រាប់ Development',
        'ប្រើ JIT Mode នៅ Production',
        'Minify នៅ Development'
      ],
      correct: 1,
      explanation: 'Development Mode រួមបញ្ចូល Classes ទាំងអស់សម្រាប់ភាពងាយស្រួល។'
    },
    {
      question: 'ការបង្កើនប្រសិទ្ធភាពកាត់បន្ថយ Bandwidth យ៉ាងដូចម្តេច?',
      options: [
        'បង្កើនទំហំ CSS',
        'កាត់បន្ថយទំហំ CSS File',
        'ប្រើ CDN',
        'លុប JavaScript'
      ],
      correct: 1,
      explanation: 'កាត់បន្ថយទំហំ CSS File សន្សំ Bandwidth ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើនប្រសិទ្ធភាព Tailwind CSS

1. **កំណត់** \`tailwind.config.js\`:
   - បន្ថែម \`content\` Array ដែលរួមបញ្ចូល Path ទៅ \`"./*.html"\` និង \`"./src/**/*.{js,jsx,ts,tsx}"\` ។

2. **បង្កើត** \`production-test.html\`:
   - បន្ថែម Elements ជាមួយ Tailwind Classes ។
   - បន្ថែម Classes មិនប្រើ (ឧ. \`hidden\`, \`text-9xl\`) ដើម្បីសាកល្បង Purging ។

3. **Compile CSS** សម្រាប់ Production:
   \`\`\`bash
   NODE_ENV=production npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
   \`\`\`

4. **ពិនិត្យ**:
   - បើក \`dist/output.css\` ដើម្បីផ្ទៀងផ្ទាត់ថា Classes មិនប្រើត្រូវបានលុប។
   - ប្រៀបធៀបទំហំ File ជាមួយ Development Build ។
`,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Optimization Lab</title>
    <link href="./dist/output.css" rel="stylesheet">
</head>
<body>
    <div class="flex items-center justify-center min-h-screen bg-green-100 p-8">
        <div class="bg-white p-6 rounded-lg shadow-xl text-center">
            <h1 class="text-3xl font-bold text-blue-700 mb-4">
                បង្កើនប្រសិទ្ធភាពបានជោគជ័យ!
            </h1>
            <p class="text-gray-700 text-lg">
                Classes មិនប្រើត្រូវបានលុបចោល។
            </p>
            <button class="mt-6 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors">
                ប៊ូតុងសាកល្បង
            </button>
            <div class="hidden text-9xl font-black bg-yellow-900"></div>
            <span class="opacity-0 w-[1px] h-[1px]"></span>
        </div>
    </div>
</body>
</html>
<!--
    Steps to run:
    1. Update 'tailwind.config.js':
    \`\`\`javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./production-test.html",
        "./src/**/*.{js,jsx,ts,tsx,html}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    \`\`\`
    2. Save HTML as 'production-test.html'.
    3. Ensure 'src/input.css' exists.
    4. Run:
    \`\`\`bash
    NODE_ENV=production npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
    \`\`\`
    5. Check 'dist/output.css' to confirm unused classes (hidden, text-9xl, etc.) are purged.
-->
`
  }
};

export default TailwindLesson4_2Content;