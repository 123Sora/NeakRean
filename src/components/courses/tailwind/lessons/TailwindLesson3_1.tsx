import type { LessonContent } from '../../../../types/LessonTypes';

const TailwindLesson3_1Content: LessonContent = {
  title: 'Styling Text (Typography)',
  objectives: [
    'យល់ដឹងពីរបៀបកំណត់ Font Size (text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, ...)',
    'របៀបកំណត់ Font Weight (font-thin, font-extralight, font-light, font-normal, font-medium, font-semibold, font-bold, font-extrabold, font-black)',
    'របៀបកំណត់ Text Color (text-color-shade)',
    'របៀបកំណត់ Text Alignment (text-left, text-center, text-right, text-justify)',
    'របៀបកំណត់ Line Height (leading-none, leading-tight, leading-snug, leading-normal, leading-relaxed, leading-loose)',
    'របៀបកំណត់ Letter Spacing (tracking-tighter, tracking-tight, tracking-normal, tracking-wide, tracking-wider, tracking-widest)',
    'របៀបកំណត់ Text Decoration (underline, overline, line-through, no-underline)',
    'របៀបកំណត់ Text Transform (uppercase, lowercase, capitalize, normal-case)',
    'របៀបកំណត់ Font Style (italic, not-italic)',
    'របៀបកំណត់ Text Overflow (truncate, overflow-ellipsis, overflow-clip)'
  ],
  content: `
# Styling Text (Typography) ✍️

---

Typography គឺជាផ្នែកសំខាន់មួយនៃការរចនាគេហទំព័រ។ Tailwind CSS ផ្តល់នូវ Utility Classes យ៉ាងទូលំទូលាយសម្រាប់រចនាម៉ូតអត្ថបទរបស់អ្នក។

---

## 1. របៀបកំណត់ Font Size 📏

Tailwind ផ្តល់នូវ Scale នៃ Font Size ដែលបានកំណត់ជាមុន។

| Class          | Font Size | Line Height |
| :------------- | :-------- | :---------- |
| \`text-xs\`    | 0.75rem   | 1rem        |
| \`text-sm\`    | 0.875rem  | 1.25rem     |
| \`text-base\`  | 1rem      | 1.5rem      |
| \`text-lg\`    | 1.125rem  | 1.75rem     |
| \`text-xl\`    | 1.25rem   | 1.75rem     |
| \`text-2xl\`   | 1.5rem    | 2rem        |
| \`text-3xl\`   | 1.875rem  | 2.25rem     |
| \`text-4xl\`   | 2.25rem   | 2.5rem      |
| \`text-5xl\`   | 3rem      | 1           |
| \`text-6xl\`   | 3.75rem   | 1           |
| \`text-7xl\`   | 4.5rem    | 1           |
| \`text-8xl\`   | 6rem      | 1           |
| \`text-9xl\`   | 8rem      | 1           |

\`\`\`html
<p class="text-sm">អត្ថបទតូច</p>
<h1 class="text-4xl font-bold">ចំណងជើងធំ</h1>
\`\`\`

---

## 2. របៀបកំណត់ Font Weight ⚖️

កំណត់កម្រាស់របស់អក្សរ។

| Class           | Font Weight |
| :-------------- | :---------- |
| \`font-thin\`   | 100         |
| \`font-extralight\` | 200         |
| \`font-light\`  | 300         |
| \`font-normal\` | 400         |
| \`font-medium\` | 500         |
| \`font-semibold\` | 600         |
| \`font-bold\`   | 700         |
| \`font-extrabold\`| 800         |
| \`font-black\`  | 900         |

\`\`\`html
<p class="font-light">អត្ថបទស្រាល</p>
<p class="font-extrabold">អត្ថបទដិតខ្លាំង</p>
\`\`\`

---

## 3. របៀបកំណត់ Text Color 🎨

កំណត់ពណ៌របស់អត្ថបទដោយប្រើ Color Palette របស់ Tailwind ។

\`\`\`html
<p class="text-blue-500">អត្ថបទពណ៌ខៀវ</p>
<p class="text-gray-700">អត្ថបទពណ៌ប្រផេះ</p>
\`\`\`

---

## 4. របៀបកំណត់ Text Alignment ↔️

កំណត់ការតម្រឹមអត្ថបទ។

* \`text-left\`
* \`text-center\`
* \`text-right\`
* \`text-justify\`

\`\`\`html
<p class="text-center">អត្ថបទតម្រឹមកណ្តាល</p>
<p class="text-right">អត្ថបទតម្រឹមស្តាំ</p>
\`\`\`

---

## 5. របៀបកំណត់ Line Height (Leading) ↕️

កំណត់គម្លាតរវាងបន្ទាត់អត្ថបទ។

| Class             | Line Height |
| :---------------- | :---------- |
| \`leading-none\`  | 1           |
| \`leading-tight\` | 1.25        |
| \`leading-snug\`  | 1.375       |
| \`leading-normal\`| 1.5         |
| \`leading-relaxed\` | 1.625       |
| \`leading-loose\` | 2           |

\`\`\`html
<p class="leading-loose">
  នេះជាអត្ថបទដែលមានគម្លាតបន្ទាត់ធំ។
  នេះជាអត្ថបទដែលមានគម្លាតបន្ទាត់ធំ។
</p>
\`\`\`

---

## 6. របៀបកំណត់ Letter Spacing (Tracking) ↔️

កំណត់គម្លាតរវាងអក្សរ។

| Class             | Letter Spacing |
| :---------------- | :------------- |
| \`tracking-tighter\`| -0.05em        |
| \`tracking-tight\`  | -0.025em       |
| \`tracking-normal\` | 0em            |
| \`tracking-wide\`   | 0.025em        |
| \`tracking-wider\`  | 0.05em         |
| \`tracking-widest\` | 0.1em          |

\`\`\`html
<p class="tracking-wide">អត្ថបទមានគម្លាតធំ</p>
<p class="tracking-tight">អត្ថបទមានគម្លាតតូច</p>
\`\`\`

---

## 7. របៀបកំណត់ Text Decoration 🖌️

កំណត់ការតុបតែងអត្ថបទ។

* \`underline\`
* \`overline\`
* \`line-through\`
* \`no-underline\`

\`\`\`html
<a href="#" class="underline hover:no-underline">តំណភ្ជាប់</a>
<p class="line-through">អត្ថបទកាត់ចោល</p>
\`\`\`

---

## 8. របៀបកំណត់ Text Transform 🔠

កំណត់ការបំប្លែងអក្សរ (អក្សរធំ អក្សរតូច) ។

* \`uppercase\`
* \`lowercase\`
* \`capitalize\`
* \`normal-case\`

\`\`\`html
<p class="uppercase">អត្ថបទអក្សរធំទាំងអស់</p>
<p class="capitalize">អក្សរដំបូងជាអក្សរធំ</p>
\`\`\`

---

## 9. របៀបកំណត់ Font Style 🇮

កំណត់រចនាប័ទ្ម Font (ទ្រេត ឬមិនទ្រេត) ។

* \`italic\`
* \`not-italic\`

\`\`\`html
<p class="italic">អត្ថបទទ្រេត</p>
<p class="not-italic">អត្ថបទមិនទ្រេត</p>
\`\`\`

---

## 10. របៀបកំណត់ Text Overflow ✂️

គ្រប់គ្រងរបៀបដែលអត្ថបទបង្ហាញនៅពេលវាលើសពីទំហំ Container ។

* \`truncate\`: កាត់អត្ថបទហើយបន្ថែម Ellipsis (\`...\`) ។
* \`overflow-ellipsis\`: បន្ថែម Ellipsis នៅពេលអត្ថបទលើស។
* \`overflow-clip\`: កាត់អត្ថបទដោយគ្មាន Ellipsis ។

\`\`\`html
<div class="w-32 border border-gray-400 p-2">
  <p class="truncate">នេះជាអត្ថបទវែងណាស់ដែលនឹងត្រូវបានកាត់។</p>
</div>
\`\`\`
* **ចំណាំ:** \`truncate\` គឺជា Shorthand សម្រាប់ \`overflow: hidden;\` \`text-overflow: ellipsis;\` និង \`white-space: nowrap;\` ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការរចនាម៉ូត Header និង Paragraph</h3>
<p>ឧទាហរណ៍នេះបង្ហាញពីរបៀបរចនាម៉ូតចំណងជើង និងកថាខណ្ឌដោយប្រើ Utility Classes របស់ Tailwind CSS ។</p>
<div class="container mx-auto p-4 bg-white shadow-lg rounded-lg">
  <h1 class="text-5xl font-extrabold text-blue-700 leading-tight mb-4 tracking-tight">
    ស្វាគមន៍មកកាន់គេហទំព័រ
  </h1>
  <p class="text-lg text-gray-800 leading-relaxed mb-6">
    នេះជាកថាខណ្ឌដែលត្រូវបានរចនាម៉ូតដោយប្រើ Tailwind CSS Utility Classes ។ 
    យើងបានកំណត់ទំហំអក្សរ ទម្ងន់អក្សរ ពណ៌អក្សរ និងគម្លាតបន្ទាត់។
  </p>
  <p class="text-sm text-gray-600 italic text-right">
    - អត្ថបទតូច និងទ្រេត
  </p>
  <div class="w-full border border-red-400 p-2 mt-4">
    <p class="text-red-700 truncate">
      នេះជាអត្ថបទវែងខ្លាំងណាស់ដែលនឹងត្រូវបានកាត់បន្ថយដោយប្រើ truncate class ។
    </p>
  </div>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Typography Example</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="container mx-auto p-4 mt-10 bg-white shadow-lg rounded-lg">
        <h1 class="text-5xl font-extrabold text-blue-700 leading-tight mb-4 tracking-tight">
            ស្វាគមន៍មកកាន់គេហទំព័រ
        </h1>
        <p class="text-lg text-gray-800 leading-relaxed mb-6">
            នេះជាកថាខណ្ឌដែលត្រូវបានរចនាម៉ូតដោយប្រើ Tailwind CSS Utility Classes ។ 
            យើងបានកំណត់ទំហំអក្សរ ទម្ងន់អក្សរ ពណ៌អក្សរ និងគម្លាតបន្ទាត់។
        </p>
        <p class="text-sm text-gray-600 italic text-right">
            - អត្ថបទតូច និងទ្រេត
        </p>
        <div class="w-full border border-red-400 p-2 mt-4">
            <p class="text-red-700 truncate">
                នេះជាអត្ថបទវែងខ្លាំងណាស់ដែលនឹងត្រូវបានកាត់បន្ថយដោយប្រើ truncate class ។
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
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់ Font Size ទៅ 1.5rem?',
      options: ['`text-xl`', '`text-lg`', '`text-2xl`', '`text-3xl`'],
      correct: 2,
      explanation: 'Class `text-2xl` កំណត់ Font Size ទៅ 1.5rem ។'
    },
    {
      question: 'តើ Class `font-bold` តំណាងឱ្យ Font Weight ប៉ុន្មាន?',
      options: ['400', '500', '600', '700'],
      correct: 3,
      explanation: 'Class `font-bold` តំណាងឱ្យ Font Weight 700 ។'
    },
    {
      question: 'តើ Class `text-center` ធ្វើអ្វី?',
      options: ['តម្រឹមអត្ថបទទៅឆ្វេង', 'តម្រឹមអត្ថបទទៅស្តាំ', 'តម្រឹមអត្ថបទទៅកណ្តាល', 'តម្រឹមអត្ថបទពេញទទឹង'],
      correct: 2,
      explanation: 'Class `text-center` តម្រឹមអត្ថបទទៅកណ្តាល។'
    },
    {
      question: 'តើ Class `leading-loose` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'កំណត់គម្លាតរវាងអក្សរ',
        'កំណត់គម្លាតរវាងបន្ទាត់អត្ថបទធំ',
        'កំណត់ទំហំអក្សរ',
        'កំណត់ទម្ងន់អក្សរ'
      ],
      correct: 1,
      explanation: 'Class `leading-loose` កំណត់គម្លាតរវាងបន្ទាត់អត្ថបទឱ្យធំ (Line Height 2) ។'
    },
    {
      question: 'តើ Class `tracking-wide` ធ្វើអ្វី?',
      options: [
        'កំណត់គម្លាតអក្សរតូច',
        'កំណត់គម្លាតអក្សរធំ',
        'កំណត់គម្លាតអក្សរធម្មតា',
        'លុបគម្លាតអក្សរ'
      ],
      correct: 1,
      explanation: 'Class `tracking-wide` កំណត់គម្លាតរវាងអក្សរឱ្យធំ (0.025em) ។'
    },
    {
      question: 'តើ Class `underline` ធ្វើអ្វី?',
      options: ['បន្ថែមបន្ទាត់ពីលើអត្ថបទ', 'បន្ថែមបន្ទាត់ពីក្រោមអត្ថបទ', 'បន្ថែមបន្ទាត់កាត់អត្ថបទ', 'លុបការតុបតែងអត្ថបទ'],
      correct: 1,
      explanation: 'Class `underline` បន្ថែមបន្ទាត់ពីក្រោមអត្ថបទ។'
    },
    {
      question: 'តើ Class `uppercase` ធ្វើអ្វី?',
      options: ['បំប្លែងអក្សរទាំងអស់ទៅជាអក្សរតូច', 'បំប្លែងអក្សរទាំងអស់ទៅជាអក្សរធំ', 'បំប្លែងអក្សរដំបូងនៃពាក្យនីមួយៗទៅជាអក្សរធំ', 'មិនផ្លាស់ប្តូរទម្រង់អក្សរ'],
      correct: 1,
      explanation: 'Class `uppercase` បំប្លែងអក្សរទាំងអស់ទៅជាអក្សរធំ។'
    },
    {
      question: 'តើ Class `italic` ធ្វើអ្វី?',
      options: ['ធ្វើឱ្យអត្ថបទដិត', 'ធ្វើឱ្យអត្ថបទទ្រេត', 'ធ្វើឱ្យអត្ថបទមានបន្ទាត់កាត់', 'ធ្វើឱ្យអត្ថបទមានបន្ទាត់ពីក្រោម'],
      correct: 1,
      explanation: 'Class `italic` ធ្វើឱ្យអត្ថបទទ្រេត។'
    },
    {
      question: 'តើ Class `truncate` ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ដើម្បីបង្កើនទំហំអត្ថបទ',
        'ដើម្បីកាត់អត្ថបទហើយបន្ថែម Ellipsis (`...`) នៅពេលវាលើសពីទំហំ Container',
        'ដើម្បីផ្លាស់ប្តូរពណ៌អត្ថបទ',
        'ដើម្បីកំណត់ Font Weight'
      ],
      correct: 1,
      explanation: 'Class `truncate` កាត់អត្ថបទហើយបន្ថែម Ellipsis (`...`) នៅពេលវាលើសពីទំហំ Container ។'
    },
    {
      question: 'តើ Class `text-gray-700` ធ្វើអ្វី?',
      options: ['កំណត់ Background Color', 'កំណត់ Border Color', 'កំណត់ Text Color ទៅជាពណ៌ប្រផេះ 700', 'កំណត់ Font Size'],
      correct: 2,
      explanation: 'Class `text-gray-700` កំណត់ Text Color ទៅជាពណ៌ប្រផេះ 700 ។'
    },
    {
      question: 'តើ Class `font-extralight` តំណាងឱ្យ Font Weight ប៉ុន្មាន?',
      options: ['100', '200', '300', '400'],
      correct: 1,
      explanation: 'Class `font-extralight` តំណាងឱ្យ Font Weight 200 ។'
    },
    {
      question: 'តើ Class `text-justify` ធ្វើអ្វី?',
      options: ['តម្រឹមអត្ថបទទៅឆ្វេង', 'តម្រឹមអត្ថបទទៅស្តាំ', 'តម្រឹមអត្ថបទទៅកណ្តាល', 'តម្រឹមអត្ថបទឱ្យពេញទទឹង (Justify)'],
      correct: 3,
      explanation: 'Class `text-justify` តម្រឹមអត្ថបទឱ្យពេញទទឹង (Justify) ។'
    },
    {
      question: 'តើ Class `leading-none` ធ្វើអ្វី?',
      options: [
        'កំណត់ Line Height ធម្មតា',
        'កំណត់ Line Height ធំ',
        'កំណត់ Line Height ទៅ 1 (គ្មានគម្លាតបន្ថែម)',
        'កំណត់ Line Height តូច'
      ],
      correct: 2,
      explanation: 'Class `leading-none` កំណត់ Line Height ទៅ 1 (ដែលជា Line Height តូចបំផុត) ។'
    },
    {
      question: 'តើ Class `tracking-tighter` ធ្វើអ្វី?',
      options: [
        'កំណត់គម្លាតអក្សរធំជាងគេ',
        'កំណត់គម្លាតអក្សរតូចជាងគេ',
        'កំណត់គម្លាតអក្សរធម្មតា',
        'លុបគម្លាតអក្សរ'
      ],
      correct: 1,
      explanation: 'Class `tracking-tighter` កំណត់គម្លាតអក្សរតូចជាងគេ (-0.05em) ។'
    },
    {
      question: 'តើ Class `capitalize` ធ្វើអ្វី?',
      options: [
        'បំប្លែងអក្សរទាំងអស់ទៅជាអក្សរធំ',
        'បំប្លែងអក្សរទាំងអស់ទៅជាអក្សរតូច',
        'បំប្លែងអក្សរដំបូងនៃពាក្យនីមួយៗទៅជាអក្សរធំ',
        'មិនផ្លាស់ប្តូរទម្រង់អក្សរ'
      ],
      correct: 2,
      explanation: 'Class `capitalize` បំប្លែងអក្សរដំបូងនៃពាក្យនីមួយៗទៅជាអក្សរធំ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Typography Layout សាមញ្ញ

បង្កើតឯកសារ HTML ថ្មីមួយ (ឧទាហរណ៍៖ \`typography-lab.html\`) ហើយភ្ជាប់ **Tailwind CSS CDN** ។
នៅក្នុងឯកសារនោះ សូមបង្កើត Layout មួយដែលបង្ហាញពីការប្រើប្រាស់ Utility Classes សម្រាប់ Typography ។

**តម្រូវការ:**

1.  បង្កើត **Container ធំ** មួយ (\`div\`) ដែលមាន Class \`min-h-screen\` និង \`bg-gray-50\` ដើម្បីឱ្យវាបំពេញកម្ពស់អេក្រង់ និងមានផ្ទៃខាងក្រោយពណ៌ប្រផេះស្រាល។ ប្រើ Flexbox ដើម្បី **តម្រឹមមាតិកា (Container ផ្ទៃក្នុង) របស់វាឱ្យចំកណ្តាលទាំងផ្ដេក និងបញ្ឈរ** ។
2.  នៅក្នុង Container ធំនោះ បង្កើត **Container ផ្ទៃក្នុង** (\`div\`) ដែលជាកន្លែងដែល Elements របស់អ្នកនឹងស្ថិតនៅ។
    * ផ្តល់ **Padding** 8 units (\`p-8\`) និង **ផ្ទៃខាងក្រោយ** ពណ៌ស (\`bg-white\`) ។
    * បន្ថែម **Border Radius** ស្រាល (\`rounded-lg\`) និង **Shadow** ស្រាល (\`shadow-md\`) ។
    * កំណត់ **ទទឹងអតិបរមា** ទៅជា \`max-w-xl\` និង **ទទឹងពេញ** (\`w-full\`) ។
3.  នៅក្នុង Container ផ្ទៃក្នុងនោះ បង្កើត Elements ដូចខាងក្រោម៖
    * **ចំណងជើង (\`h1\`)**: មានអត្ថបទ "Tailwind Typography Lab" ។
      - កំណត់ Font Size ទៅជា \`text-4xl\` ។
      - កំណត់ Font Weight ទៅជា \`font-black\` ។
      - កំណត់ Text Color ទៅជា \`text-purple-700\` ។
      - តម្រឹមកណ្តាល (\`text-center\`) ។
      - Margin Bottom 4 units (\`mb-4\`) ។
    * **កថាខណ្ឌ (\`p\`)**: មានអត្ថបទវែងមួយ (ឧទាហរណ៍៖ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.") ។
      - កំណត់ Font Size ទៅជា \`text-lg\` ។
      - កំណត់ Text Color ទៅជា \`text-gray-600\` ។
      - កំណត់ Line Height ទៅជា \`leading-relaxed\` ។
      - កំណត់ Letter Spacing ទៅជា \`tracking-wide\` ។
      - Margin Bottom 6 units (\`mb-6\`) ។
    * **កថាខណ្ឌមួយទៀត (\`p\`)**: មានអត្ថបទ "This is a call to action." ។
      - កំណត់ Font Weight ទៅជា \`font-semibold\` ។
      - កំណត់ Text Color ទៅជា \`text-green-500\` ។
      - ធ្វើឱ្យអត្ថបទទ្រេត (\`italic\`) ។
      - ធ្វើឱ្យអត្ថបទទាំងអស់ជាអក្សរធំ (\`uppercase\`) ។
      - តម្រឹមស្តាំ (\`text-right\`) ។

សូមប្រាកដថាអ្នកប្រើ **Tailwind CSS CDN** សម្រាប់ Lab នេះ។
`,
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Typography Lab</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="flex items-center justify-center min-h-screen bg-gray-50">
        <div class="p-8 bg-white rounded-lg shadow-md max-w-xl w-full">
            <h1 class="text-4xl font-black text-purple-700 text-center mb-4">
                Tailwind Typography Lab
            </h1>
            <p class="text-lg text-gray-600 leading-relaxed tracking-wide mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p class="font-semibold text-green-500 italic uppercase text-right">
                This is a call to action.
            </p>
        </div>
    </div>
</body>
</html>
`
  }
};

export default TailwindLesson3_1Content;