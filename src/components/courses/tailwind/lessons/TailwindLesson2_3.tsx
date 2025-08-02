// src/components/lessons/tailwind/TailwindLesson2_3.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const TailwindLesson2_3Content: LessonContent = {
  title: 'Responsive Design ជាមួយ Tailwind CSS',
  objectives: [
    'យល់ដឹងពី Mobile-First Approach របស់ Tailwind CSS',
    'របៀបប្រើប្រាស់ Breakpoints (sm, md, lg, xl, 2xl) សម្រាប់លក្ខខណ្ឌអេក្រង់ផ្សេងៗគ្នា',
    'របៀបអនុវត្ត Styles តាមទំហំអេក្រង់ជាក់លាក់',
    'របៀបលាក់ និងបង្ហាញ Elements តាមទំហំអេក្រង់'
  ],
  content: `
# Responsive Design ជាមួយ Tailwind CSS 📱💻

---

**Responsive Design** គឺជាការរចនាគេហទំព័រដែលសម្របខ្លួនទៅនឹងទំហំអេក្រង់ផ្សេងៗគ្នា។ Tailwind CSS ត្រូវបានបង្កើតឡើងដោយប្រើ **Mobile-First Approach** ដែលធ្វើឱ្យការបង្កើត Responsive Layouts មានភាពងាយស្រួល និងមានប្រសិទ្ធភាព។

---

## 1. ការយល់ដឹងពី Mobile-First Approach របស់ Tailwind 💡

"**Mobile-First**" មានន័យថា Styles លំនាំដើមរបស់ Tailwind ត្រូវបានអនុវត្តសម្រាប់ទំហំអេក្រង់តូចបំផុត (Mobile) ។ បន្ទាប់មក អ្នកប្រើ **Breakpoints** ដើម្បី Override Styles ទាំងនោះសម្រាប់ទំហំអេក្រង់ធំជាង។

**ឧទាហរណ៍៖**
\`\`\`html
<div class="text-center md:text-left">
  <p>អត្ថបទនេះតម្រឹមកណ្តាលលើ Mobile, តម្រឹមឆ្វេងលើ Medium+ ។</p>
</div>
\`\`\`
* \`text-center\`: ត្រូវបានអនុវត្តលើគ្រប់ទំហំអេក្រង់។
* \`md:text-left\`: **Override** \`text-center\` នៅលើអេក្រង់ Medium (**768px**) និងធំជាង។

---

## 2. ការប្រើប្រាស់ Breakpoints (sm, md, lg, xl, 2xl) 📏

Tailwind CSS ប្រើប្រាស់ **Breakpoints** ដែលបានកំណត់ជាមុន ដើម្បីអនុវត្ត Styles តាមលក្ខខណ្ឌអេក្រង់ផ្សេងៗគ្នា។

| Prefix  | Minimum Width | Description                                 |
| :------ | :------------ | :------------------------------------------ |
| \`sm\`  | 640px         | Styles សម្រាប់ Small Screens (និងធំជាង)     |
| \`md\`  | 768px         | Styles សម្រាប់ Medium Screens (និងធំជាង)    |
| \`lg\`  | 1024px        | Styles សម្រាប់ Large Screens (និងធំជាង)     |
| \`xl\`  | 1280px        | Styles សម្រាប់ Extra Large Screens (និងធំជាង) |
| \`2xl\` | 1536px        | Styles សម្រាប់ 2 Extra Large Screens (និងធំជាង) |

**ឧទាហរណ៍៖**

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3 bg-blue-200 p-4">
  <p>ទទឹងពេញលើ Mobile, 1/2 លើ Medium+, 1/3 លើ Large+ ។</p>
</div>

<div class="flex flex-col lg:flex-row items-center lg:items-start">
  <p>Flex Column លើ Mobile, Flex Row លើ Large+ ។</p>
</div>
\`\`\`
* \`w-full\`: ទទឹង 100% លើគ្រប់អេក្រង់។
* \`md:w-1/2\`: ទទឹង 50% លើអេក្រង់ Medium និងធំជាង។
* \`lg:w-1/3\`: ទទឹង 33.33% លើអេក្រង់ Large និងធំជាង។
* \`flex-col\`: Flex Direction Column លើគ្រប់អេក្រង់។
* \`lg:flex-row\`: Flex Direction Row លើអេក្រង់ Large និងធំជាង។

---

## 3. ការលាក់ និងបង្ហាញ Elements តាមទំហំអេក្រង់ 🙈🙉

អ្នកអាចលាក់ ឬបង្ហាញ Elements នៅ Breakpoints ជាក់លាក់ដោយប្រើ Classes \`hidden\` និង Display Utilities (e.g., \`block\`, \`flex\`, \`grid\`, \`inline-block\`) ។

\`\`\`html
<div class="hidden md:block bg-green-200 p-4">
  <p>ធាតុនេះលាក់លើ Mobile, បង្ហាញលើ Medium+ ។</p>
</div>

<div class="block lg:hidden bg-yellow-200 p-4">
  <p>ធាតុនេះបង្ហាញលើ Mobile/Medium, លាក់លើ Large+ ។</p>
</div>

<button class="bg-blue-500 text-white px-4 py-2 rounded-md block md:hidden">
  ប៊ូតុងសម្រាប់ Mobile
</button>
<button class="bg-green-500 text-white px-4 py-2 rounded-md hidden md:block">
  ប៊ូតុងសម្រាប់ Desktop
</button>
\`\`\`
* \`hidden\`: \`display: none;\` ។
* \`md:block\`: \`display: block;\` នៅលើអេក្រង់ Medium និងធំជាង។
* \`lg:hidden\`: \`display: none;\` នៅលើអេក្រង់ Large និងធំជាង។

---

## 4. ការអនុវត្ត Styles តាមទំហំអេក្រង់ជាក់លាក់ 🎯

អ្នកអាចអនុវត្ត Styles សម្រាប់ Range នៃ Breakpoints ដោយការរួមបញ្ចូលគ្នានៃ Classes ។

\`\`\`html
<div class="bg-red-200 md:bg-blue-200 lg:bg-green-200 p-4">
  <p>ផ្ទៃខាងក្រោយក្រហមលើ Mobile, ខៀវលើ Medium, បៃតងលើ Large ។</p>
</div>

<p class="text-sm md:text-base lg:text-lg">
  ទំហំអក្សរតូចលើ Mobile, មធ្យមលើ Medium, ធំលើ Large ។
</p>
\`\`\`
* Styles ត្រូវបានអនុវត្តពីតូចទៅធំ។ ឧទាហរណ៍ \`md:bg-blue-200\` នឹង Override \`bg-red-200\` នៅលើអេក្រង់ \`md\` ឡើងទៅ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Navbar Responsive</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីរបៀបបង្កើត Navbar ដែលមាន Responsive ដោយប្រើ Tailwind CSS ។</p>
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
    <title>Tailwind CSS Responsive Design Example</title>
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
      question: 'តើ Tailwind CSS ត្រូវបានបង្កើតឡើងដោយប្រើវិធីសាស្ត្រ Responsive Design បែបណា?',
      options: ['Desktop-First', 'Mobile-First', 'Tablet-First', 'Component-First'],
      correct: 1,
      explanation: 'Tailwind CSS ត្រូវបានបង្កើតឡើងដោយប្រើ Mobile-First Approach ។'
    },
    {
      question: 'តើ Prefix `md:` ត្រូវបានអនុវត្ត Styles នៅលើអេក្រង់ដែលមានទទឹងអប្បបរមាប៉ុន្មាន?',
      options: ['640px', '768px', '1024px', '1280px'],
      correct: 1,
      explanation: 'Prefix `md:` ត្រូវបានអនុវត្ត Styles នៅលើអេក្រង់ដែលមានទទឹងអប្បបរមា 768px (និងធំជាង) ។'
    },
    {
      question: 'តើ Class `hidden md:block` ធ្វើអ្វី?',
      options: [
        'លាក់ Element លើគ្រប់អេក្រង់',
        'បង្ហាញ Element លើគ្រប់អេក្រង់',
        'លាក់ Element លើ Mobile, បង្ហាញលើ Medium+ Screens',
        'បង្ហាញ Element លើ Mobile, លាក់លើ Medium+ Screens'
      ],
      correct: 2,
      explanation: 'Class `hidden md:block` លាក់ Element លើ Mobile (Default) ហើយបង្ហាញវាជា Block នៅលើអេក្រង់ Medium (768px) និងធំជាង។'
    },
    {
      question: 'ប្រសិនបើអ្នកមាន `text-center` និង `lg:text-right` នៅលើ Element មួយ តើវានឹងតម្រឹមអត្ថបទយ៉ាងដូចម្តេចនៅលើអេក្រង់ Large (1024px)?',
      options: ['កណ្តាល', 'ឆ្វេង', 'ស្តាំ', 'ពេញទទឹង'],
      correct: 2,
      explanation: '`lg:text-right` នឹង Override `text-center` នៅលើអេក្រង់ Large (1024px) ធ្វើឱ្យអត្ថបទតម្រឹមស្តាំ។'
    },
    {
      question: 'តើ Breakpoint `xl` តំណាងឱ្យទទឹងអប្បបរមាប៉ុន្មាន?',
      options: ['1024px', '1280px', '1536px', '768px'],
      correct: 1,
      explanation: 'Breakpoint `xl` តំណាងឱ្យទទឹងអប្បបរមា 1280px ។'
    },
    {
      question: 'តើអ្នកអាចកំណត់ Custom Breakpoints នៅក្នុង Tailwind CSS បានដែរឬទេ?',
      options: ['ទេ មិនអាចទេ', 'បាទ/ចាស នៅក្នុង `tailwind.config.js`', 'បានតែជាមួយ JavaScript', 'បានតែជាមួយ CSS ផ្ទាល់ខ្លួន'],
      correct: 1,
      explanation: 'បាទ/ចាស អ្នកអាចកំណត់ Custom Breakpoints នៅក្នុង `tailwind.config.js` នៅក្នុង `theme.extend.screens` ។'
    },
    {
      question: 'តើ Class `w-full lg:w-1/2` ធ្វើអ្វី?',
      options: [
        'ទទឹង 1/2 លើគ្រប់អេក្រង់',
        'ទទឹងពេញលើ Mobile, 1/2 លើ Large+ Screens',
        'ទទឹង 1/2 លើ Mobile, ពេញលើ Large+ Screens',
        'ទទឹងពេញលើគ្រប់អេក្រង់'
      ],
      correct: 1,
      explanation: 'Class `w-full lg:w-1/2` កំណត់ទទឹងពេញលើ Mobile (Default) ហើយទទឹង 1/2 នៅលើអេក្រង់ Large (1024px) និងធំជាង។'
    },
    {
      question: 'តើការប្រើប្រាស់ Mobile-First Approach ជួយអ្វីខ្លះក្នុងការអភិវឌ្ឍន៍ Responsive Design?',
      options: [
        'ធ្វើឱ្យ Code កាន់តែវែង',
        'ធ្វើឱ្យការរចនាសម្រាប់ Desktop ពិបាក',
        'ជួយឱ្យ Styles មើលទៅល្អលើឧបករណ៍តូចៗជាមុនសិន និងងាយស្រួល Override សម្រាប់ឧបករណ៍ធំ',
        'បង្កើនទំហំ CSS File'
      ],
      correct: 2,
      explanation: 'Mobile-First Approach ជួយឱ្យ Styles មើលទៅល្អលើឧបករណ៍តូចៗជាមុនសិន ហើយងាយស្រួល Override Styles សម្រាប់ឧបករណ៍ធំជាង។'
    },
    {
      question: 'តើ Class `block sm:hidden` ធ្វើអ្វី?',
      options: [
        'បង្ហាញ Element លើ Mobile, លាក់លើ Small+ Screens',
        'លាក់ Element លើ Mobile, បង្ហាញលើ Small+ Screens',
        'បង្ហាញ Element លើគ្រប់អេក្រង់',
        'លាក់ Element លើគ្រប់អេក្រង់'
      ],
      correct: 0,
      explanation: 'Class `block sm:hidden` បង្ហាញ Element លើ Mobile (Default) ហើយលាក់វាចាប់ពីអេក្រង់ Small (640px) ឡើងទៅ។'
    },
    {
      question: 'តើ Tailwind CSS ប្រើប្រាស់ Media Queries ផ្ទាល់ខ្លួនដែរឬទេ?',
      options: ['ទេ វាប្រើ JavaScript', 'បាទ/ចាស វាបង្កើត Media Queries ដោយស្វ័យប្រវត្តិពី Prefixes', 'ទេ វាប្រើ Inline Styles', 'បាទ/ចាស តែសម្រាប់ Dark Mode'],
      correct: 1,
      explanation: 'បាទ/ចាស Tailwind CSS បង្កើត Media Queries ដោយស្វ័យប្រវត្តិពី Responsive Prefixes ដែលអ្នកប្រើ។'
    },
    {
      question: 'តើ Breakpoint `sm` តំណាងឱ្យទទឹងអប្បបរមាប៉ុន្មាន?',
      options: ['480px', '640px', '768px', '1024px'],
      correct: 1,
      explanation: 'Breakpoint `sm` តំណាងឱ្យទទឹងអប្បបរមា 640px ។'
    },
    {
      question: 'តើ Class `lg:flex-row` នឹងមានប្រសិទ្ធភាពនៅពេលណា?',
      options: [
        'នៅពេលអេក្រង់តូចជាង 1024px',
        'នៅពេលអេក្រង់ធំជាង ឬស្មើ 1024px',
        'នៅពេលអេក្រង់តូចជាង 768px',
        'នៅពេលអេក្រង់ធំជាង ឬស្មើ 768px'
      ],
      correct: 1,
      explanation: 'Class `lg:flex-row` នឹងមានប្រសិទ្ធភាពនៅពេលអេក្រង់ធំជាង ឬស្មើ 1024px ។'
    },
    {
      question: 'តើ Class `md:text-xl` ធ្វើអ្វី?',
      options: [
        'កំណត់ទំហំអក្សរ XL លើគ្រប់អេក្រង់',
        'កំណត់ទំហំអក្សរ XL តែលើ Mobile',
        'កំណត់ទំហំអក្សរ XL ចាប់ពីអេក្រង់ Medium (768px) ឡើងទៅ',
        'កំណត់ទំហំអក្សរ XL តែលើ Desktop'
      ],
      correct: 2,
      explanation: 'Class `md:text-xl` កំណត់ទំហំអក្សរ XL ចាប់ពីអេក្រង់ Medium (768px) ឡើងទៅ។'
    },
    {
      question: 'តើ Class `2xl:` តំណាងឱ្យទទឹងអប្បបរមាប៉ុន្មាន?',
      options: ['1280px', '1440px', '1536px', '1920px'],
      correct: 2,
      explanation: 'Breakpoint `2xl` តំណាងឱ្យទទឹងអប្បបរមា 1536px ។'
    },
    {
      question: 'តើការប្រើប្រាស់ Responsive Prefixes នៅក្នុង Tailwind CSS ជួយអ្វីខ្លះ?',
      options: [
        'ធ្វើឱ្យ Code កាន់តែពិបាកអាន',
        'អនុញ្ញាតឱ្យ Styles ផ្លាស់ប្តូរតាមទំហំអេក្រង់ផ្សេងៗគ្នា',
        'បង្កើនទំហំ CSS File ដោយមិនចាំបាច់',
        'លុបចោល Styles លំនាំដើម'
      ],
      correct: 1,
      explanation: 'ការប្រើប្រាស់ Responsive Prefixes អនុញ្ញាតឱ្យ Styles ផ្លាស់ប្តូរតាមទំហំអេក្រង់ផ្សេងៗគ្នា ដែលធ្វើឱ្យ Design មាន Responsive ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Layout Grid សាមញ្ញ

បង្កើតឯកសារ HTML ថ្មីមួយ (ឧទាហរណ៍៖ \`responsive-grid-lab.html\`) ហើយភ្ជាប់ **Tailwind CSS CDN** ។
នៅក្នុងឯកសារនោះ សូមបង្កើត Layout មួយដោយប្រើ **CSS Grid** ។

**តម្រូវការ:**

1.  បង្កើត **Container ធំ** មួយ (\`div\`) ដែលមាន Class \`min-h-screen\` និង \`bg-gray-50\` ដើម្បីឱ្យវាបំពេញកម្ពស់អេក្រង់ និងមានផ្ទៃខាងក្រោយពណ៌ប្រផេះស្រាល។ ប្រើ Flexbox ដើម្បី **តម្រឹមមាតិកា (Container ផ្ទៃក្នុង) របស់វាឱ្យចំកណ្តាលទាំងផ្ដេក និងបញ្ឈរ** ។
2.  នៅក្នុង Container ធំនោះ បង្កើត **Grid Container ផ្ទៃក្នុង** មួយទៀត (\`div\`) ដែលជាកន្លែងដែល Items របស់អ្នកនឹងស្ថិតនៅ។
    * កំណត់វាជា **Grid Container** (\`grid\`) ។
    * សម្រាប់ **Mobile** (Default): កំណត់វាឱ្យមាន **1 Column** (\`grid-cols-1\`) ។
    * សម្រាប់ **Medium Screens** (\`md\`): កំណត់វាឱ្យមាន **2 Columns** (\`md:grid-cols-2\`) ។
    * សម្រាប់ **Large Screens** (\`lg\`): កំណត់វាឱ្យមាន **3 Columns** (\`lg:grid-cols-3\`) ។
    * ផ្តល់ **គម្លាតរវាង Grid Items** ចំនួន **4 units** (\`gap-4\`) ។ នៅលើ **Large Screens** គួរតែជា **6 units** (\`lg:gap-6\`) ។
    * ផ្តល់ **Padding** 8 units (\`p-8\`) និង **ផ្ទៃខាងក្រោយ** ពណ៌ប្រផេះ 100 (\`bg-gray-100\`) ។
    * បន្ថែម **Border Radius** ស្រាល (\`rounded-lg\`) និង **Shadow** ស្រាល (\`shadow-md\`) ទៅលើ Container នេះ។
    * កំណត់ **Max-width** ទៅជា \`max-w-4xl\` នៅលើ Grid Container នេះ ដើម្បីកុំឱ្យវារីកធំពេកលើ Desktop ។
3.  នៅក្នុង Grid Container ផ្ទៃក្នុងនោះ បង្កើត **Div 5 ផ្សេងគ្នា** ដែលជា Grid Items៖
    * **Item នីមួយៗ** គួរតែមាន **Padding** 4 units (\`p-4\`)។
    * **Item ទី 1**: ផ្ទៃខាងក្រោយពណ៌ខៀវ 400 (\`bg-blue-400\`) និងអត្ថបទ "Item 1" ។
    * **Item ទី 2**: ផ្ទៃខាងក្រោយពណ៌ខៀវ 500 (\`bg-blue-500\`) និងអត្ថបទ "Item 2" ។
    * **Item ទី 3**: ផ្ទៃខាងក្រោយពណ៌ខៀវ 600 (\`bg-blue-600\`) និងអត្ថបទ "Item 3" ។
    * **Item ទី 4**: ផ្ទៃខាងក្រោយពណ៌ខៀវ 700 (\`bg-blue-700\`) និងអត្ថបទ "Item 4" ។
    * **Item ទី 5**: ផ្ទៃខាងក្រោយពណ៌ខៀវ 800 (\`bg-blue-800\`) និងអត្ថបទ "Item 5" ។
    * បន្ថែម **Border Radius** ស្រាល (\`rounded-md\`) និង **Shadow** ស្រាល (\`shadow-sm\`) ទៅលើ Items នីមួយៗ។
    * កំណត់ **ពណ៌អត្ថបទ** ទៅជាពណ៌ស (\`text-white\`) និង **Text-center** (\`text-center\`) សម្រាប់ Items ទាំង 5 ។
    * ធ្វើឱ្យ **Div ទី ១ លាតសន្ធឹង 1 Column** នៅលើ Mobile (\`col-span-1\`) ប៉ុន្តែ **លាតសន្ធឹង 2 Columns** (\`md:col-span-2\`) នៅលើ Medium Screens និងធំជាង។

សូមប្រាកដថាអ្នកប្រើ **Tailwind CSS CDN** សម្រាប់ Lab នេះ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Responsive Grid Lab</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

    <div class="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <div class="grid grid-cols-1 gap-4 p-8 bg-gray-100 rounded-lg shadow-md max-w-4xl w-full
                    md:grid-cols-2 md:gap-4
                    lg:grid-cols-3 lg:gap-6">
            <div class="p-4 bg-blue-400 text-white rounded-md shadow-sm text-center col-span-1 md:col-span-2">Item 1 (Responsive Span)</div>
            <div class="p-4 bg-blue-500 text-white rounded-md shadow-sm text-center">Item 2</div>
            <div class="p-4 bg-blue-600 text-white rounded-md shadow-sm text-center">Item 3</div>
            <div class="p-4 bg-blue-700 text-white rounded-md shadow-sm text-center">Item 4</div>
            <div class="p-4 bg-blue-800 text-white rounded-md shadow-sm text-center">Item 5</div>
        </div>
    </div>

</body>
</html>
`
  }
};

export default TailwindLesson2_3Content;