// src/components/lessons/Lesson2_5.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const Lesson2_5: LessonContent = {
  title: 'Images (រូបភាព)',
  objectives: [
    'យល់ពី Tag <img>',
    'ស្គាល់ src Attribute (Source of image)',
    'ស្គាល់ alt Attribute (Alternative text)',
    'អាចកំណត់ width និង height Attributes'
  ],
  content: `
# Images (រូបភាព) 🏞️📸

រូបភាពគឺជាផ្នែកមួយដ៏សំខាន់នៃគេហទំព័រស្ទើរតែទាំងអស់។ HTML ផ្តល់នូវ tag មួយដើម្បីបញ្ចូលរូបភាពទៅក្នុងទំព័ររបស់អ្នក។

---

## 1. \`<img>\` Tag 🖼️

Tag \`<img>\` ត្រូវបានប្រើដើម្បី **បង្កប់រូបភាព (embed image)** ទៅក្នុងឯកសារ HTML។ វាគឺជា **empty tag** ដែលមានន័យថាវាមិនមាន tag បិទទេ។ ព័ត៌មានអំពីទីតាំងរូបភាព និងលក្ខណៈសម្បត្តិផ្សេងទៀតត្រូវបានផ្តល់តាមរយៈ attributes។

\`\`\`html
<img src="https://via.placeholder.com/150" alt="Placeholder Image" />
\`\`\`

---

## 2. \`src\` Attribute (Source of image) 🔗

Attribute \`src\` (source) គឺជា attribute **ចាំបាច់** សម្រាប់ tag \`<img>\`។ វាបញ្ជាក់ **URL (Uniform Resource Locator)** ឬ **ផ្លូវ (path)** ទៅកាន់ឯកសាររូបភាព។ ផ្លូវអាចជា:

* **Relative path:** ប្រសិនបើរូបភាពស្ថិតនៅក្នុង folder ដូចគ្នា (ឧទាហរណ៍: \`"myimage.jpg"\`) ឬនៅក្នុង sub-folder (ឧទាហរណ៍: \`"images/myimage.jpg"\`)។ នេះត្រូវបានណែនាំសម្រាប់ការគ្រប់គ្រងរូបភាពក្នុងគម្រោងតែមួយ។
    \`\`\`html
    <img src="my-local-image.jpg" alt="រូបភាពក្នុង Folder តែមួយ">
    <img src="assets/photos/profile.png" alt="រូបភាពក្នុង Sub-folder">
    \`\`\`
* **Absolute path (Full URL):** ប្រសិនបើរូបភាពស្ថិតនៅលើម៉ាស៊ីនបម្រើ (server) ផ្សេងទៀត (ឧទាហរណ៍: \`"https://www.example.com/images/myimage.jpg"\`)។
    \`\`\`html
    <img src="https://picsum.photos/200/300" alt="រូបភាពពី URL ខាងក្រៅ">
    \`\`\`

---

## 3. \`alt\` Attribute (Alternative text) ✍️👁️‍🗨️

Attribute \`alt\` (alternative text) គឺជា attribute **ចាំបាច់** មួយទៀត។ វាផ្តល់នូវ **អត្ថបទពិពណ៌នា** សម្រាប់រូបភាព។ អត្ថបទនេះនឹងបង្ហាញប្រសិនបើរូបភាព មិនអាចផ្ទុកបាន (ឧទាហរណ៍: ផ្លូវខុស បញ្ហា network) ឬត្រូវបានអានដោយ **Screen Readers** សម្រាប់អ្នកដែលមានបញ្ហាភ្នែក។ វាក៏សំខាន់ផងដែរសម្រាប់ **SEO** (Search Engine Optimization) ដើម្បីជួយ Search Engines យល់ពីមាតិការូបភាព។

\`\`\`html
<img src="broken-image.jpg" alt="រូបភាពមិនអាចផ្ទុកបាន: រូបភាពទេសភាពភ្នំ" />
\`\`\`
> **គន្លឹះ:** ផ្តល់អត្ថបទ \`alt\` ដែលមានន័យ និងពិពណ៌នាបានល្អ។ ប្រសិនបើរូបភាពជាគ្រឿងតុបតែង (decorative) សុទ្ធសាធ ហើយមិនមានព័ត៌មានសំខាន់ទេ អ្នកអាចទុក \`alt=""\` (empty string)។

---

## 4. \`width\` និង \`height\` Attributes 📏

Attributes \`width\` និង \`height\` ត្រូវបានប្រើដើម្បីកំណត់ **ទទឹង (width)** និង **កំពស់ (height)** នៃរូបភាពគិតជា **pixels**។ ការកំណត់ទំហំទាំងនេះអាចជួយ browser រៀបចំ Layout ទំព័របានលឿនជាងមុន មុនពេលរូបភាពពិតប្រាកដត្រូវបានផ្ទុក។

\`\`\`html
<img
    src="https://via.placeholder.com/300x200"
    alt="ទេសភាពស្រុកខ្មែរ"
    width="300"
    height="200"
/>
\`\`\`

> **ចំណាំសំខាន់:** 💡 សម្រាប់ **Responsive Web Design** (គេហទំព័រដែលសម្របតាមទំហំអេក្រង់ផ្សេងៗ) វាជាទូទៅត្រូវបានណែនាំឱ្យគ្រប់គ្រងទំហំរូបភាពដោយប្រើ **CSS** ជំនួសឱ្យ attributes \`width\` និង \`height\` ផ្ទាល់នៅក្នុង HTML។ ទោះជាយ៉ាងណាក៏ដោយ ការផ្តល់នូវទំហំទាំងនេះអាចជួយកាត់បន្ថយ **"Layout Shift"** (ការផ្លាស់ប្តូរ Layout ដែលមិនបានរំពឹងទុក) នៅពេលផ្ទុកទំព័រដំបូង ដែលធ្វើឱ្យបទពិសោធន៍អ្នកប្រើប្រាស់កាន់តែប្រសើរ។

---

## 5. លក្ខខណ្ឌបន្ថែមសម្រាប់ \`<img>\` Element (Optional)

* **\`title\` Attribute:** ផ្តល់ព័ត៌មានបន្ថែមអំពីមាតិការូបភាព។ វាបង្ហាញជា "tooltip" នៅពេលអ្នកប្រើប្រាស់ដាក់ Mouse ពីលើរូបភាព។
    \`\`\`html
    <img src="cat.jpg" alt="ឆ្មាកំពុងដេក" title="ឆ្មាតូចគួរឱ្យស្រលាញ់">
    \`\`\`
* **\`loading="lazy"\` Attribute:** ប្រាប់ Browser ឱ្យផ្ទុករូបភាពនៅពេលដែលវាជិតដល់ Viewport (តំបន់ដែលអាចមើលឃើញ) របស់អ្នកប្រើប្រាស់។ នេះអាចជួយបង្កើនល្បឿនផ្ទុកទំព័រដំបូង។
    \`\`\`html
    <img src="large-image.jpg" alt="រូបភាពធំ" loading="lazy">
    \`\`\`

  `,
  examples: [
    `<img src="https://via.placeholder.com/200" alt="រូបភាពតូច" width="200" height="200">`,
    `<img src="wrong-path.jpg" alt="រូបភាពមិនអាចផ្ទុកបាន">`,
    `<img src="https://via.placeholder.com/100x100" alt="រូបភាពការ៉េ" title="នេះគឺជារូបភាពការ៉េ" loading="lazy">`
  ],
  quiz: [
    {
      question: 'តើ Attribute មួយណាដែលចាំបាច់សម្រាប់ Tag <img> ដើម្បីបញ្ជាក់ផ្លូវរូបភាព?',
      options: ['alt', 'width', 'src', 'title'],
      correct: 2,
      explanation: 'src Attribute គឺចាំបាច់ដើម្បីបញ្ជាក់ផ្លូវទៅកាន់រូបភាព។ បើគ្មាន src រូបភាពនឹងមិនបង្ហាញទេ។'
    },
    {
      question: 'តើ alt Attribute ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ទំហំរូបភាព',
        'ផ្តល់អត្ថបទជំនួសសម្រាប់រូបភាព',
        'កំណត់ទីតាំងរូបភាព',
        'ផ្លាស់ប្តូរពណ៌រូបភាព'
      ],
      correct: 1,
      explanation: 'alt Attribute ផ្តល់អត្ថបទជំនួស ដែលបង្ហាញនៅពេលរូបភាពមិនអាចផ្ទុកបាន ឬសម្រាប់ Screen Readers ដើម្បីជួយអ្នកប្រើប្រាស់ពិការភ្នែក។'
    },
    {
      question: 'តើ Tag \`<img>\` គឺជាប្រភេទ Element អ្វី?',
      options: ['Container Tag', 'Paired Tag', 'Closing Tag', 'Empty Tag'],
      correct: 3,
      explanation: '<img> គឺជា Empty Tag (Self-closing tag) ព្រោះវាមិនមាន Content នៅចន្លោះ Tags និងមិនមាន Closing Tag ដាច់ដោយឡែក។'
    },
    {
      question: 'តើ Attribute មួយណាដែលជួយ Browser រៀបចំ Layout ទំព័របានលឿនជាងមុន មុនពេលរូបភាពពិតប្រាកដត្រូវបានផ្ទុក?',
      options: ['src', 'alt', 'width និង height', 'title'],
      correct: 2,
      explanation: 'ការកំណត់ width និង height Attributes អាចជួយ Browser កំណត់ទំហំរូបភាពជាមុន ដែលកាត់បន្ថយ Layout Shift (ការរើបម្រាស់នៃធាតុទំព័រ) នៅពេលផ្ទុក។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការប្រើប្រាស់ \`alt\` Attribute សម្រាប់ SEO?',
      options: [
        'ធ្វើឱ្យរូបភាពមានចលនា (Animation)',
        'ជួយ Search Engines យល់ពីមាតិការូបភាព',
        'ផ្លាស់ប្តូរទំហំរូបភាពដោយស្វ័យប្រវត្តិ',
        'បង្កើនល្បឿនផ្ទុកទំព័រ'
      ],
      correct: 1,
      explanation: 'alt Attribute ជួយ Search Engines យល់ពីមាតិការូបភាព និងបរិបទរបស់វា ដែលអាចជួយក្នុងការចំណាត់ថ្នាក់ Search Result។'
    },
    {
      question: 'តើការប្រើប្រាស់ "https://www.example.com/image.jpg" សម្រាប់ \`src\` Attribute គឺជាប្រភេទផ្លូវអ្វី?',
      options: ['Relative Path', 'Local Path', 'Absolute Path', 'Internal Path'],
      correct: 2,
      explanation: 'នេះគឺជា Absolute Path (Full URL) ព្រោះវាបញ្ជាក់ទីតាំងពេញលេញរបស់រូបភាពនៅលើ Server ផ្សេង ឬ Domain ផ្សេង។'
    },
    {
      question: 'តើ Attribute មួយណាដែលប្រើដើម្បីបង្ហាញ "tooltip" នៅពេលដាក់ Mouse ពីលើរូបភាព?',
      options: ['alt', 'src', 'title', 'tooltip'],
      correct: 2,
      explanation: 'title Attribute ត្រូវបានប្រើដើម្បីបង្ហាញ "tooltip" (អត្ថបទតូចមួយ) នៅពេលដាក់ Mouse ពីលើ Element។'
    },
    {
      question: 'តើការគ្រប់គ្រងទំហំរូបភាពដោយប្រើ CSS ជាទូទៅត្រូវបានណែនាំសម្រាប់អ្វី?',
      options: [
        'ការកំណត់ទីតាំងរូបភាព',
        'Responsive Web Design',
        'ការផ្លាស់ប្តូរពណ៌រូបភាព',
        'ការបន្ថែម Border ដល់រូបភាព'
      ],
      correct: 1,
      explanation: 'ការគ្រប់គ្រងទំហំរូបភាពដោយប្រើ CSS គឺមានប្រសិទ្ធភាពជាងសម្រាប់ Responsive Web Design ដែលអនុញ្ញាតឱ្យរូបភាពសម្របតាមទំហំអេក្រង់ផ្សេងៗដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'ប្រសិនបើរូបភាពគ្រាន់តែជាគ្រឿងតុបតែងសុទ្ធសាធ ហើយមិនមានព័ត៌មានសំខាន់ តើអ្នកគួរកំណត់ \`alt\` Attribute យ៉ាងដូចម្តេច?',
      options: [
        'លុប alt Attribute ចោល',
        'កំណត់ alt="decorative image"',
        'កំណត់ alt=""',
        'កំណត់ alt="none"'
      ],
      correct: 2,
      explanation: 'ប្រសិនបើរូបភាពជាគ្រឿងតុបតែងសុទ្ធសាធ អ្នកគួរតែកំណត់ \`alt=""\` (empty string) ដើម្បីប្រាប់ Screen Readers ឱ្យរំលងវា ហើយមិនអានវាថាជាមាតិកាសំខាន់ទេ។'
    },
    {
      question: 'តើ Attribute \`loading="lazy"\` ជួយអ្វីខ្លះដល់ល្បឿនផ្ទុកទំព័រ?',
      options: [
        'ធ្វើឱ្យរូបភាពមានចលនា',
        'ផ្ទុករូបភាពទាំងអស់ភ្លាមៗ',
        'ផ្ទុករូបភាពនៅពេលវាជិតដល់ Viewport',
        'កាត់បន្ថយទំហំឯកសាររូបភាព'
      ],
      correct: 2,
      explanation: '`loading="lazy"` ប្រាប់ Browser ឱ្យពន្យារពេលផ្ទុករូបភាពរហូតដល់អ្នកប្រើប្រាស់រមូរទៅជិតតំបន់ដែលរូបភាពនោះអាចមើលឃើញ ដែលជួយបង្កើនល្បឿនផ្ទុកទំព័រដំបូង។'
    },
    {
      question: 'តើ Relative Path មួយណាដែលត្រឹមត្រូវ ប្រសិនបើរូបភាព "logo.png" ស្ថិតនៅក្នុង Folder ឈ្មោះ "assets" ដែលស្ថិតនៅកម្រិតដូចឯកសារ HTML បច្ចុប្បន្ន?',
      options: [
        '"../assets/logo.png"',
        '"logo.png"',
        '"/assets/logo.png"',
        '"assets/logo.png"'
      ],
      correct: 3,
      explanation: 'ប្រសិនបើរូបភាពនៅក្នុង sub-folder ដែលនៅកម្រិតដូចឯកសារ HTML បច្ចុប្បន្ន ផ្លូវដែលត្រឹមត្រូវគឺ "folder_name/image_name.ext" ដូចនេះ "assets/logo.png"។'
    },
    {
      question: 'តើមានអ្វីកើតឡើងប្រសិនបើ \`src\` Attribute ត្រូវបានកំណត់ខុស?',
      options: [
        'រូបភាពនឹងបង្ហាញជាផ្ទៃខ្មៅ',
        'រូបភាពនឹងបង្ហាញជាពណ៌ប្រផេះ',
        'រូបភាពនឹងមិនបង្ហាញទេ ហើយអត្ថបទ \`alt\` នឹងបង្ហាញជំនួស',
        'Browser នឹងគាំង'
      ],
      correct: 2,
      explanation: 'ប្រសិនបើ src Attribute ត្រូវបានកំណត់ខុស រូបភាពនឹងមិនបង្ហាញទេ ហើយ Browser នឹងបង្ហាញអត្ថបទដែលបានកំណត់នៅក្នុង alt Attribute ជំនួស។'
    },
    {
      question: 'តើ Attribute មួយណាដែលកំណត់ទទឹងរបស់រូបភាព?',
      options: ['height', 'size', 'width', 'dimension'],
      correct: 2,
      explanation: 'width Attribute ត្រូវបានប្រើដើម្បីកំណត់ទទឹងរបស់រូបភាពគិតជា pixels។'
    },
    {
      question: 'តើមួយណាជាការអនុវត្តល្អបំផុតសម្រាប់ការផ្តល់ទំហំរូបភាពនៅក្នុង HTML?',
      options: [
        'ប្រើតែ width attribute',
        'ប្រើតែ height attribute',
        'ប្រើ width និង height attributes ទាំងពីរ',
        'មិនបាច់ប្រើ attributes ទាំងពីរនេះទេ'
      ],
      correct: 2,
      explanation: 'ការប្រើ width និង height attributes ទាំងពីរ ជួយ Browser គណនាលំហសម្រាប់រូបភាពជាមុន ដែលកាត់បន្ថយ Layout Shift។'
    },
    {
      question: 'តើ HTML \`<img>\` tag ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើតតំណភ្ជាប់រូបភាព',
        'ផ្ទុកវីដេអូ',
        'បង្កប់រូបភាពទៅក្នុងទំព័រ HTML',
        'បង្កើតរូបភាពថ្មី'
      ],
      correct: 2,
      explanation: 'HTML <img> tag ត្រូវបានប្រើដើម្បីបង្កប់ (embed) រូបភាពដែលមានស្រាប់ទៅក្នុងឯកសារ HTML។'
    },
    {
      question: 'តើប្រភេទផ្លូវ (path) មួយណាដែលត្រូវបានណែនាំសម្រាប់ការគ្រប់គ្រងរូបភាពក្នុងគម្រោងតែមួយ?',
      options: ['Absolute Path', 'Full URL', 'Relative Path', 'External Path'],
      correct: 2,
      explanation: 'Relative Path ត្រូវបានណែនាំសម្រាប់ការគ្រប់គ្រងរូបភាពក្នុងគម្រោងតែមួយ ព្រោះវាធ្វើឱ្យងាយស្រួលក្នុងការផ្លាស់ប្តូរទីតាំង Folder គម្រោងដោយមិនបាច់កែ URL ទាំងអស់។'
    },
    {
      question: 'តើអ្វីជា "Layout Shift" ដែលត្រូវបានកាត់បន្ថយដោយការកំណត់ width និង height?',
      options: [
        'ការផ្លាស់ប្តូរទិសដៅរបស់រូបភាព',
        'ការផ្លាស់ប្តូរទីតាំងនៃ Element ផ្សេងទៀតនៅលើទំព័រនៅពេលរូបភាពផ្ទុកពេញ',
        'ការផ្លាស់ប្តូរទំហំអក្សរ',
        'ការផ្លាស់ប្តូរពណ៌ផ្ទៃខាងក្រោយ'
      ],
      correct: 1,
      explanation: '"Layout Shift" គឺសំដៅលើការរើបម្រាស់ ឬការផ្លាស់ប្តូរទីតាំងនៃធាតុទំព័រ (Elements) នៅពេលដែលមាតិកា (ដូចជារូបភាព) ផ្ទុកពេញ ដែលអាចរំខានដល់បទពិសោធន៍អ្នកប្រើប្រាស់។'
    },
    {
      question: 'តើ Tag \`<img>\` អាចមានអត្ថបទនៅចន្លោះ Opening Tag និង Closing Tag បានទេ?',
      options: ['បាទ/ចាស', 'ទេ'],
      correct: 1,
      explanation: 'ទេ <img> គឺជា Empty Tag ដូច្នេះវាមិនមាន Closing Tag ហើយក៏មិនអាចមានអត្ថបទនៅចន្លោះវាបានដែរ។'
    },
    {
      question: 'តើ Attribute មួយណាដែលមានសារៈសំខាន់សម្រាប់ Accessibility (សម្រាប់អ្នកប្រើប្រាស់ Screen Readers)?',
      options: ['src', 'width', 'height', 'alt'],
      correct: 3,
      explanation: 'alt Attribute គឺមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ Accessibility ព្រោះ Screen Readers ប្រើអត្ថបទនេះដើម្បីពិពណ៌នារូបភាពដល់អ្នកប្រើប្រាស់ដែលមានបញ្ហាភ្នែក។'
    },
    {
      question: 'តើគោលបំណងចម្បងនៃ \`loading="lazy"\` Attribute គឺអ្វី?',
      options: [
        'ធ្វើឱ្យរូបភាពតូចជាងមុន',
        'បង្កើនល្បឿនផ្ទុកទំព័រដំបូង',
        'ធ្វើឱ្យរូបភាពមានគុណភាពកាន់តែច្បាស់',
        'ធ្វើឱ្យរូបភាពអាចចុចបាន'
      ],
      correct: 1,
      explanation: 'គោលបំណងចម្បងនៃ `loading="lazy"` គឺបង្កើនល្បឿនផ្ទុកទំព័រដំបូង (initial page load) ដោយពន្យារការផ្ទុករូបភាពដែលនៅឆ្ងាយពី Viewport។'
    },
    {
      question: 'តើការប្រើប្រាស់ \`width\` និង \`height\` Attributes ផ្ទាល់នៅក្នុង HTML ត្រូវបានណែនាំឱ្យធ្វើជំនួសការប្រើ CSS សម្រាប់ Responsive Web Design ដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ'],
      correct: 1,
      explanation: 'ទេ ជាទូទៅវាត្រូវបានណែនាំឱ្យគ្រប់គ្រងទំហំរូបភាពដោយប្រើ CSS សម្រាប់ Responsive Web Design ព្រោះ CSS ផ្តល់នូវការគ្រប់គ្រងកាន់តែបត់បែន និងងាយស្រួលសម្របទៅតាមទំហំអេក្រង់ផ្សេងៗ។'
    }
  ],
  lab: {
    task: 'បង្កើតឯកសារ HTML មួយដែលមានរូបភាពមួយ។ ប្រើ src ទៅកាន់ URL រូបភាពណាមួយ (ឧទាហរណ៍: placeholder.com), កំណត់ alt attribute, និងកំណត់ width/height របស់វា។',
    solution: `<!DOCTYPE html>
<html>
<head>
    <title>លំហាត់ទី ៧</title>
</head>
<body>
    <h1>រូបភាពរបស់ខ្ញុំ</h1>
    <img src="https://via.placeholder.com/400x300/FF5733/FFFFFF?text=MyImage"
          alt="រូបភាពឧទាហរណ៍"
          width="400"
          height="300">
</body>
</html>`
  }
};
export default Lesson2_5;