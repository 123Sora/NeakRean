import type { LessonContent } from '../../../../types/LessonTypes';

const TailwindLesson5_1Content: LessonContent = {
  title: 'លំហាត់អនុវត្តន៍ (Practical Exercise)',
  objectives: [
    'អនុវត្តន៍ការរចនា Layout ជាមួយ Flexbox និង Grid',
    'អនុវត្តន៍ Responsive Design សម្រាប់ទំហំអេក្រង់ផ្សេងៗគ្នា',
    'អនុវត្តន៍ការរចនាម៉ូតអត្ថបទ Colors, Backgrounds, Borders, Shadows, និង Sizing',
    'បង្កើត Component ពេញលេញមួយដោយប្រើប្រាស់ Utility Classes របស់ Tailwind CSS'
  ],
  content: `
# លំហាត់អនុវត្តន៍ (Practical Exercise) 🎯🏗️

---

អ្នកបានរៀនមូលដ្ឋានគ្រឹះ និងបច្ចេកទេសសំខាន់ៗរបស់ Tailwind CSS ហើយ។ ឥឡូវនេះជាពេលដែលត្រូវអនុវត្តន៍ចំណេះដឹងទៅក្នុងការបង្កើត Component ពិតប្រាកដ។ លំហាត់នេះនឹងផ្តោតលើការបង្កើត Product Card Component ដែល Responsive និងប្រើ Utility Classes ទាំងអស់។

---

## ភារកិច្ច: បង្កើត Product Card Component 📦

បង្កើត Product Card Component ដែលបង្ហាញព័ត៌មានផលិតផលដោយប្រើ Tailwind CSS Utility Classes។

### លក្ខខណ្ឌតម្រូវ:

1. **Layout មូលដ្ឋាន:**
   - Card នៅកណ្តាលអេក្រង់។
   - Background ពណ៌ស (\`bg-white\`)។
   - Padding សមស្រប (\`p-6\`)។
   - ជ្រុងមូល (\`rounded-lg\`)។
   - ស្រមោលធំ (\`shadow-xl\`)។
   - Border ប្រផេះស្រាល (\`border border-gray-200\`)។

2. **រូបភាពផលិតផល:**
   - Image Tag (\`img\`) នៅផ្នែកខាងលើ។
   - ទទឹងពេញ Card (\`w-full\`)។
   - កម្ពស់ថេរ (\`h-48\`, \`object-cover\`)។
   - ជ្រុងមូលខាងលើ (\`rounded-t-lg\`)។
   - Margin Bottom (\`mb-4\`)។
   - ប្រើ Placeholder Image (ឧ. \`https://placehold.co/600x400/E0F2F7/2C3E50?text=Product+Image\`)។

3. **ចំណងជើងផលិតផល:**
   - Tag \`h2\` សម្រាប់ឈ្មោះផលិតផល (ឧ. "កាសស្តាប់ត្រចៀកឥតខ្សែ")។
   - Font Size \`text-2xl\`។
   - Font Weight \`font-bold\`។
   - Text Color ខៀវ 700 (\`text-blue-700\`)។
   - Margin Bottom (\`mb-2\`)។

4. **ការពិពណ៌នាផលិតផល:**
   - Tag \`p\` សម្រាប់ការពិពណ៌នាខ្លី (ឧ. "កាសស្តាប់ត្រចៀកដែលមានគុណភាពសំឡេងច្បាស់ល្អ និងផាសុកភាពខ្ពស់។")។
   - Font Size \`text-base\`។
   - Text Color ប្រផេះ 600 (\`text-gray-600\`)។
   - Margin Bottom (\`mb-4\`)។

5. **តម្លៃផលិតផល:**
   - Tag \`span\` សម្រាប់តម្លៃ (ឧ. "$49.99")។
   - Font Size \`text-xl\`។
   - Font Weight \`font-semibold\`។
   - Text Color បៃតង 600 (\`text-green-600\`)។

6. **ប៊ូតុង "បន្ថែមទៅរទេះ":**
   - Tag \`button\` នៅខាងក្រោម។
   - Background ទឹកក្រូច 500 (\`bg-orange-500\`)។
   - Text Color ស (\`text-white\`)។
   - Padding (\`px-5 py-2\`)។
   - ជ្រុងមូល (\`rounded-md\`)។
   - Hover Background ទឹកក្រូច 600 (\`hover:bg-orange-600\`)�।
   - Margin Top (\`mt-4\`)។
   - ទទឹងពេញលើ Mobile (\`w-full\`)។

7. **Responsive Behavior:**
   - **Mobile:** Card ទទឹងអតិបរមា \`max-w-xs\` (320px)។
   - **Medium (md):** Card ទទឹងអតិបរមា \`max-w-sm\` (384px)។
   - **Large (lg):** Card ទទឹងអតិបរមា \`max-w-md\` (448px)។
   - ប៊ូតុងជា Block លើ Mobile (\`w-full\`) និង Inline-block លើ Medium+ (\`md:inline-block md:mx-auto\`)។

### គន្លឹះ:
- ប្រើ Flexbox (\`flex\`, \`items-center\`, \`justify-center\`) សម្រាប់កណ្តាល Card។
- ប្រើ Responsive Prefixes (\`md:\`, \`lg:\`) សម្រាប់ Styles ផ្លាស់ប្តូរតាមអេក្រង់។
- ពិនិត្យ Tailwind Documentation ប្រសិនបើភ្លេច Classes។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Product Card Component</h3>
<p>ឧទាហរណ៍នៃ Product Card Component ដែល Responsive និងប្រើ Tailwind CSS។</p>
<div class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
  <div class="w-full max-w-xs md:max-w-sm lg:max-w-md bg-white p-6 rounded-lg shadow-xl border border-gray-200">
    <img src="https://placehold.co/600x400/E0F2F7/2C3E50?text=Product+Image" alt="Product Image" class="w-full h-48 object-cover rounded-t-lg mb-4">
    <h2 class="text-2xl font-bold text-blue-700 mb-2">
      កាសស្តាប់ត្រចៀកឥតខ្សែ
    </h2>
    <p class="text-base text-gray-600 mb-4">
      កាសស្តាប់ត្រចៀកដែលមានគុណភាពសំឡេងច្បាស់ល្អ និងផាសុកភាពខ្ពស់។
    </p>
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
      <span class="text-xl font-semibold text-green-600 mb-4 md:mb-0">$49.99</span>
      <button class="w-full bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition-colors md:w-auto md:inline-block">
        បន្ថែមទៅរទេះ
      </button>
    </div>
  </div>
</div>

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Practical Exercise</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 font-sans antialiased">
    <div class="flex items-center justify-center min-h-screen p-4">
        <div class="w-full max-w-xs md:max-w-sm lg:max-w-md bg-white p-6 rounded-lg shadow-xl border border-gray-200">
            <img src="https://placehold.co/600x400/E0F2F7/2C3E50?text=Product+Image" alt="Product Image" class="w-full h-48 object-cover rounded-t-lg mb-4">
            <h2 class="text-2xl font-bold text-blue-700 mb-2">
                កាសស្តាប់ត្រចៀកឥតខ្សែ
            </h2>
            <p class="text-base text-gray-600 mb-4">
                កាសស្តាប់ត្រចៀកដែលមានគុណភាពសំឡេងច្បាស់ល្អ និងផាសុកភាពខ្ពស់។
            </p>
            <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                <span class="text-xl font-semibold text-green-600 mb-4 md:mb-0">$49.99</span>
                <button class="w-full bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition-colors md:w-auto md:inline-block">
                    បន្ថែមទៅរទេះ
                </button>
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
      question: 'Class ណាកំណត់ទទឹងអតិបរមា 320px សម្រាប់ Card នៅ Mobile?',
      options: ['`max-w-sm`', '`max-w-xs`', '`w-full`', '`w-auto`'],
      correct: 1,
      explanation: '`max-w-xs` កំណត់ទទឹងអតិបរមា 320px។'
    },
    {
      question: 'Class `rounded-t-lg` ធ្វើអ្វី?',
      options: [
        'ជ្រុងខាងក្រោមមូល',
        'ជ្រុងខាងលើមូល',
        'ជ្រុងគ្រប់ជ្រុងមូល',
        'គ្មានឥទ្ធិពល'
      ],
      correct: 1,
      explanation: '`rounded-t-lg` ធ្វើឱ្យជ្រុងខាងលើ (Top-Left, Top-Right) មូលកម្រិត Large។'
    },
    {
      question: 'Class `object-cover` ប្រើសម្រាប់អ្វីលើ Image?',
      options: [
        'រួមតូច Image',
        'លាតសន្ធឹង Image បំពេញ Container ដោយរក្សាសមាមាត្រ',
        'ធ្វើឱ្យ Image ព្រាល',
        'តម្រឹម Image កណ្តាល'
      ],
      correct: 1,
      explanation: '`object-cover` លាតសន្ធឹង Image បំពេញ Container ដោយរក្សាសមាមាត្រ និងកាត់ផ្នែកលើស។'
    },
    {
      question: 'Class `shadow-xl` ធ្វើអ្វី?',
      options: [
        'បន្ថែមស្រមោលតូច',
        'បន្ថែមស្រមោលមធ្យម',
        'បន្ថែមស្រមោលធំ',
        'បន្ថែមស្រមោលខាងក្នុង'
      ],
      correct: 2,
      explanation: '`shadow-xl` បន្ថែមស្រមោលធំទៅ Element។'
    },
    {
      question: 'Class `flex items-center justify-center` ប្រើសម្រាប់អ្វីលើ Parent Container?',
      options: [
        'រៀបចំ Items ជាជួរឈរ',
        'តម្រឹម Items ទៅដើម',
        'តម្រឹម Items កណ្តាលទាំង Main និង Cross Axis',
        'លាក់ Items'
      ],
      correct: 2,
      explanation: '`flex items-center justify-center` តម្រឹម Items កណ្តាលទាំង Main និង Cross Axis ក្នុង Flex Container។'
    },
    {
      question: 'Class `text-blue-700` កំណត់អ្វី?',
      options: ['Background Color', 'Border Color', 'Text Color', 'Font Size'],
      correct: 2,
      explanation: '`text-blue-700` កំណត់ Text Color ទៅជាពណ៌ខៀវ 700។'
    },
    {
      question: 'Class `font-bold` តំណាងឱ្យ Font Weight ប៉ុន្មាន?',
      options: ['400', '500', '600', '700'],
      correct: 3,
      explanation: '`font-bold` តំណាងឱ្យ Font Weight 700។'
    },
    {
      question: 'Class `mb-4` ធ្វើអ្វី?',
      options: [
        'Margin Top 4 units',
        'Margin Bottom 4 units',
        'Padding Top 4 units',
        'Padding Bottom 4 units'
      ],
      correct: 1,
      explanation: '`mb-4` បន្ថែម Margin Bottom 4 units។'
    },
    {
      question: 'Class `px-5 py-2` ធ្វើអ្វី?',
      options: [
        'Padding 5px X, 2px Y',
        'Padding 5 units X, 2 units Y',
        'Margin 5 units X, 2 units Y',
        'Width 5 units, Height 2 units'
      ],
      correct: 1,
      explanation: '`px-5 py-2` កំណត់ Padding 5 units X (ឆ្វេង-ស្តាំ), 2 units Y (លើ-ក្រោម)។'
    },
    {
      question: 'Class `hover:bg-orange-600` ធ្វើអ្វី?',
      options: [
        'Background ទឹកក្រូច 600 នៅពេលចុច',
        'Background ទឹកក្រូច 600 នៅពេល Hover',
        'Text Color ទឹកក្រូច 600',
        'Border ទឹកក្រូច 600'
      ],
      correct: 1,
      explanation: '`hover:bg-orange-600` ផ្លាស់ប្តូរ� Background ទៅទឹកក្រូច 600 នៅពេល Hover។'
    },
    {
      question: 'Class `w-full md:inline-block` ប្រើសម្រាប់អ្វីលើប៊ូតុង?',
      options: [
        'ទទឹងពេញគ្រប់អេក្រង់',
        'ទទឹងពេញ Mobile, Inline-block Medium+',
        'Inline-block Mobile, ទទឹងពេញ Medium+',
        'លាក់លើ Mobile'
      ],
      correct: 1,
      explanation: '`w-full` កំណត់ទទឹងពេញលើ Mobile, `md:inline-block` ផ្លាស់ទៅ Inline-block លើ Medium+។'
    },
    {
      question: 'Class `max-w-md` កំណត់អ្វី?',
      options: [
        'ទទឹងពេញ',
        'ទទឹងអប្បបរមា',
        'ទទឹងអតិបរមា',
        'កម្ពស់អតិបរមា'
      ],
      correct: 2,
      explanation: '`max-w-md` កំណត់ទទឹងអតិបរមា 448px។'
    },
    {
      question: 'Class `border border-gray-200` ធ្វើអ្វី?',
      options: [
        'Border Width 2px, ប្រផេះ 200',
        'Border Width 1px, ប្រផេះ 200',
        'Background ប្រផេះ 200',
        'Text Color ប្រផេះ 200'
      ],
      correct: 1,
      explanation: '`border` កំណត់ Border Width 1px, `border-gray-200` កំណត់ពណ៌ប្រផេះ 200។'
    },
    {
      question: 'Class `h-48` កំណត់អ្វី?',
      options: [
        'ទទឹង 48 units',
        'កម្ពស់ 48 units',
        'Padding 48 units',
        'Margin 48 units'
      ],
      correct: 1,
      explanation: '`h-48` កំណត់កម្ពស់ 48 units (12rem/192px)។'
    },
    {
      question: 'Class `min-h-screen` ជួយអ្វី?',
      options: [
        'កម្ពស់អប្បបរមា 100px',
        'កម្ពស់អប្បបរមាពេញ Viewport',
        'កម្ពស់អប្បបរមា Auto',
        'កម្ពស់អប្បបរមា 50%'
      ],
      correct: 1,
      explanation: '`min-h-screen` កំណត់កម្ពស់អប្បបរមាពេញ Viewport សម្រាប់កណ្តាលបញ្ឈរ។'
    }
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើត Product Card Component

1. **បង្កើត** HTML File (\`product-card-lab.html\`) និងភ្ជាប់ Tailwind CSS CDN។
2. **អនុវត្តន៍** Product Card Component តាមលក្ខខណ្ឌតម្រូវខាងលើ។
   - ត្រូវប្រាកដថា Card មាន Responsive ត្រឹមត្រូវ។
   - ប្រើ Utility Classes សម្រាប់គ្រប់ Styles។
3. **ពិនិត្យ** Design លើទំហំអេក្រង់ផ្សេងៗ (ប្តូរទំហំ Browser)។
`,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Card Lab - Tailwind CSS</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 font-sans antialiased">
    <div class="flex items-center justify-center min-h-screen p-4">
        <div class="w-full max-w-xs md:max-w-sm lg:max-w-md bg-white p-6 rounded-lg shadow-xl border border-gray-200">
            <img src="https://placehold.co/600x400/E0F2F7/2C3E50?text=Product+Image" alt="Product Image" class="w-full h-48 object-cover rounded-t-lg mb-4">
            <h2 class="text-2xl font-bold text-blue-700 mb-2">
                កាសស្តាប់ត្រចៀកឥតខ្សែ
            </h2>
            <p class="text-base text-gray-600 mb-4">
                កាសស្តាប់ត្រចៀកដែលមានគុណភាពសំឡេងច្បាស់ល្អ និងផាសុកភាពខ្ពស់។
            </p>
            <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                <span class="text-xl font-semibold text-green-600 mb-4 md:mb-0">$49.99</span>
                <button class="w-full bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition-colors md:w-auto md:inline-block">
                    បន្ថែមទៅរទេះ
                </button>
            </div>
        </div>
    </div>
</body>
</html>
`
  }
};

export default TailwindLesson5_1Content;