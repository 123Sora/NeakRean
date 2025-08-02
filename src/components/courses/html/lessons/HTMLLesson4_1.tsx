// src/components/lessons/Lesson4_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const Lesson4_1: LessonContent = {
  title: 'HTML5 Semantic Elements',
  objectives: [
    'យល់ពីការប្រើប្រាស់ <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>',
    'យល់ពីមូលហេតុដែលត្រូវប្រើ Semantic Elements (SEO, Accessibility)'
  ],
  content: `
# HTML5 Semantic Elements 💡

HTML5 បានណែនាំនូវ Elements ថ្មីៗជាច្រើនដែលត្រូវបានគេហៅថា **"Semantic Elements"**។ "Semantic" មានន័យថា "មានន័យ"។ ធាតុទាំងនេះផ្តល់នូវ **អត្ថន័យ** ដល់រចនាសម្ព័ន្ធនៃគេហទំព័រ ទាំងសម្រាប់ Browser និងសម្រាប់អ្នកអភិវឌ្ឍន៍។

---

## 1. Semantic Elements សំខាន់ៗ: 🏗️

* **\`<header>\`:** កំណត់ **header (បឋមកថា)** សម្រាប់ឯកសារ ឬសម្រាប់ផ្នែកជាក់លាក់មួយ។ ជាធម្មតាវាមាន Logo, ចំណងជើងគេហទំព័រ, Navigation, ឬព័ត៌មានណែនាំផ្សេងទៀត។ ឯកសារ HTML អាចមាន \`<header>\` ច្រើន។
    \`\`\`html
    <header>
      <h1>ឈ្មោះគេហទំព័ររបស់ខ្ញុំ</h1>
      <img src="logo.png" alt="Logo">
    </header>
    \`\`\`
* **\`<nav>\`:** កំណត់ **navigation links (ប្លុកនៃតំណភ្ជាប់រុករក)** ដូចជា Main Menu របស់គេហទំព័រ។ វាត្រូវបានប្រើដើម្បីរៀបចំតំណភ្ជាប់ទៅផ្នែកផ្សេងៗនៃគេហទំព័រ ឬទៅទំព័រផ្សេងទៀត។
    \`\`\`html
    <nav>
      <ul>
        <li><a href="/">ទំព័រដើម</a></li>
        <li><a href="/products">ផលិតផល</a></li>
        <li><a href="/contact">ទំនាក់ទំនង</a></li>
      </ul>
    </nav>
    \`\`\`
* **\`<main>\`:** កំណត់ **មាតិកាសំខាន់ និងពិសេស (main content)** របស់ឯកសារ។ មាតិកាដែលនៅខាងក្នុង \`<main>\` គួរតែមានតែមួយគត់សម្រាប់ឯកសារ ហើយមិនគួរមានមាតិកាដដែលៗដូចជា Sidebar, Navigation Links, ឬ Footer ឡើយ។ វាគួរតែមានតែមួយនៅក្នុងឯកសារនីមួយៗ។
    \`\`\`html
    <main>
      <h2>ស្វាគមន៍មកកាន់គេហទំព័ររបស់យើង!</h2>
      <p>នេះគឺជាមាតិកាសំខាន់នៃទំព័រ។</p>
    </main>
    \`\`\`
* **\`<section>\`:** កំណត់ **ផ្នែក (section)** មួយនៅក្នុងឯកសារ ដូចជាជំពូក ផ្នែកមួយនៃមាតិកា ឬធាតុផ្សេងទៀតដែលមានរចនាសម្ព័ន្ធស្រដៀងគ្នា។ \`<section>\` គួរតែមានចំណងជើង (\`<h1>\`-\`<h6>\`) ដើម្បីកំណត់ខ្លឹមសាររបស់វា។
    \`\`\`html
    <section>
      <h2>អំពីក្រុមហ៊ុនរបស់យើង</h2>
      <p>យើងជាក្រុមហ៊ុនដែលផ្តល់សេវាកម្មល្អបំផុត...</p>
    </section>
    \`\`\`
* **\`<article>\`:** កំណត់ **មាតិកាឯករាជ្យ (independent content)** ដែលអាចឈរនៅម្នាក់ឯង និងអាចចែកចាយឡើងវិញបានដោយឯករាជ្យពីមាតិកាដែលនៅសល់នៃទំព័រ។ ឧទាហរណ៍: អត្ថបទ Blog, ប្រកាស Forum, ខ្សែព័ត៌មាន (News Feed Item), Comment ពីអ្នកប្រើប្រាស់។
    \`\`\`html
    <article>
      <h3>ចំណងជើងអត្ថបទ Blog</h3>
      <p>កាលបរិច្ឆេទ: 19 កក្កដា 2025</p>
      <p>នេះជាមាតិកាពេញលេញនៃអត្ថបទ Blog...</p>
    </article>
    \`\`\`
* **\`<aside>\`:** កំណត់ **មាតិកាដែលទាក់ទង** នឹងមាតិកាសំខាន់ ប៉ុន្តែអាចឈរនៅម្នាក់ឯងបាន។ វាជាធម្មតាត្រូវបានប្រើសម្រាប់ Sidebar, Callouts, Blockquotes, Adverts, ឬធាតុផ្សេងទៀតដែល "បែកចេញ" ពីមាតិកាសំខាន់។
    \`\`\`html
    <aside>
      <h4>អត្ថបទដែលពាក់ព័ន្ធ</h4>
      <ul>
        <li><a href="#">អត្ថបទទី 1</a></li>
        <li><a href="#">អត្ថបទទី 2</a></li>
      </ul>
    </aside>
    \`\`\`
* **\`<footer>\`:** កំណត់ **footer (បាតកថា)** សម្រាប់ឯកសារ ឬសម្រាប់ផ្នែកជាក់លាក់មួយ។ ជាធម្មតាមានព័ត៌មានរក្សាសិទ្ធិ, ព័ត៌មានទំនាក់ទំនង, តំណភ្ជាប់ទៅកាន់គោលការណ៍ឯកជនភាព, ឬតំណភ្ជាប់បន្ថែម។ ឯកសារ HTML អាចមាន \`<footer>\` ច្រើន។
    \`\`\`html
    <footer>
      <p>&copy; 2025 ក្រុមហ៊ុន ABC. រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
      <address>
        ទំនាក់ទំនង: <a href="mailto:info@example.com">info@example.com</a>
      </address>
    </footer>
    \`\`\`

---

## 2. មូលហេតុដែលត្រូវប្រើ Semantic Elements (SEO, Accessibility) 🚀

ការប្រើប្រាស់ Semantic Elements គឺមានសារៈសំខាន់ណាស់សម្រាប់ហេតុផលជាច្រើន:

* **ភាពងាយស្រួលក្នុងការអានកូដ (Readability):** កូដរបស់អ្នកនឹងងាយស្រួលអាន និងយល់ជាង សម្រាប់អ្នកអភិវឌ្ឍន៍ផ្សេងទៀត។ នៅពេលអ្នកឃើញ \`<nav>\` អ្នកដឹងភ្លាមថាវាជាប្លុក Navigation ។
* **Accessibility (ភាពងាយស្រួលប្រើប្រាស់):** ជួយ **Screen Readers** (កម្មវិធីដែលប្រើដោយអ្នកពិការភ្នែក ឬអ្នកមានបញ្ហាភ្នែក) យល់ពីមាតិកា និងរចនាសម្ព័ន្ធនៃទំព័រ។ ឧទាហរណ៍ Screen Reader អាចប្រាប់អ្នកប្រើប្រាស់ថា "ឥឡូវនេះអ្នកនៅក្នុង Navigation" ឬ "អ្នកបានចូលដល់ Main Content" ដែលជួយពួកគេរុករកគេហទំព័របានកាន់តែងាយស្រួល។
* **SEO (Search Engine Optimization):** Search Engines (ដូចជា Google, Bing) ប្រើ Semantic Elements ដើម្បីយល់ពីសារៈសំខាន់ បរិបទ និងរចនាសម្ព័ន្ធនៃមាតិកានៅលើទំព័ររបស់អ្នក។ ឧទាហរណ៍ Search Engine នឹងផ្តល់សារៈសំខាន់កាន់តែច្រើនចំពោះមាតិកាដែលនៅខាងក្នុង \`<main>\` ឬ \`<article>\`។ នេះអាចជួយ improve ranking គេហទំព័ររបស់អ្នកនៅក្នុងលទ្ធផលស្វែងរក។
* **ភាពងាយស្រួលក្នុងការថែទាំ (Maintainability):** កូដដែលមានរចនាសម្ព័ន្ធល្អ និងមានអត្ថន័យ គឺងាយស្រួលក្នុងការថែទាំ ធ្វើបច្ចុប្បន្នភាព និង Debugging នៅពេលក្រោយ។
* **ការអភិវឌ្ឍន៍ទៅមុខ (Future-Proofing):** Browser និងបច្ចេកវិទ្យាជំនួយ (Assistive Technologies) ថ្មីៗនឹងបន្តប្រើប្រាស់ Semantic Markup ដើម្បីផ្តល់នូវបទពិសោធន៍ល្អបំផុតដល់អ្នកប្រើប្រាស់។

> **ចំណាំ:** ❗ ជំនួសឱ្យការប្រើប្រាស់ \`<div>\` រាប់មិនអស់សម្រាប់រាល់ផ្នែកនៃគេហទំព័រ (ឧទាហរណ៍: \`<div id="header">\`, \`<div class="main-content">\`) Semantic Elements ផ្តល់នូវអត្ថន័យជាក់លាក់ ដែលធ្វើឱ្យកូដរបស់អ្នកមានលក្ខណៈវិជ្ជាជីវៈ មានស្តង់ដារ និងមានប្រសិទ្ធភាពជាង។ ទោះជាយ៉ាងណាក៏ដោយ \`<div>\` នៅតែមានប្រយោជន៍សម្រាប់គោលបំណងរចនាម៉ូដ (styling) ជាក់លាក់នៅពេលដែលមិនមាន Semantic Element សមរម្យ។
---

## ឧទាហរណ៍ពេញលេញនៃការប្រើប្រាស់ Semantic Elements:

\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>គេហទំព័រគំរូដោយ HTML5 Semantic Elements</title>
</head>
<body>

    <header>
        <h1>My Awesome Blog</h1>
        <nav>
            <ul>
                <li><a href="/">ទំព័រដើម</a></li>
                <li><a href="/categories">ប្រភេទ</a></li>
                <li><a href="/about">អំពី</a></li>
                <li><a href="/contact">ទំនាក់ទំនង</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>អត្ថបទថ្មីៗ</h2>
            <article>
                <h3>របៀបរៀន HTML យ៉ាងលឿន</h3>
                <p>ដោយ: សុខា, កាលបរិច្ឆេទ: 19 កក្កដា 2025</p>
                <p>នេះគឺជាអត្ថបទមួយដែលពិភាក្សាអំពីវិធីសាស្រ្តល្អបំផុតក្នុងការរៀន HTML...</p>
                <a href="/read-more-html">អានបន្ត</a>
            </article>
            <article>
                <h3>មូលដ្ឋានគ្រឹះ CSS សម្រាប់អ្នកចាប់ផ្តើមដំបូង</h3>
                <p>ដោយ: សុផល, កាលបរិច្ឆេទ: 18 កក្កដា 2025</p>
                <p>ស្វែងយល់ពីរបៀបរចនាម៉ូតគេហទំព័ររបស់អ្នកដោយប្រើ CSS...</p>
                <a href="/read-more-css">អានបន្ត</a>
            </article>
        </section>

        <aside>
            <h4>ប្រភេទពេញនិយម</h4>
            <ul>
                <li><a href="/category/web-dev">ការអភិវឌ្ឍន៍គេហទំព័រ</a></li>
                <li><a href="/category/programming">ការសរសេរកម្មវិធី</a></li>
                <li><a href="/category/design">ការរចនា</a></li>
            </ul>
            <h4>ផ្សព្វផ្សាយ</h4>
            <p>ទទួលបានការបញ្ចុះតម្លៃ 20% សម្រាប់ការរៀន HTML ឥឡូវនេះ!</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2025 គេហទំព័រខ្ញុំ. រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
        <p><a href="/privacy-policy">គោលការណ៍ឯកជនភាព</a> | <a href="/terms-of-service">លក្ខខណ្ឌប្រើប្រាស់</a></p>
    </footer>

</body>
</html>
\`\`\`
  `,
  examples: [
    `<header><h1>My Site</h1><nav>...</nav></header>`,
    `<main><section><h2>Section Title</h2><article>...</article></section></main>`,
    `<footer><p>Copyright</p></footer>`,
    `<aside><h4>Related Links</h4><ul><li><a href="#">Link 1</a></li></ul></aside>`,
    `<body><main></main></body>` // Example of main being a direct child of body
  ],
  quiz: [
    {
      question: 'តើ Tag មួយណាដែលគួរប្រើសម្រាប់ប្លុកនៃតំណភ្ជាប់រុករក?',
      options: ['<header>', '<section>', '<nav>', '<footer>'],
      correct: 2,
      explanation: '<nav> Tag ត្រូវបានប្រើសម្រាប់ប្លុកនៃតំណភ្ជាប់រុករក (Navigation Links)។'
    },
    {
      question: 'តើ Semantic Elements ជួយអ្វីខ្លះដល់ SEO?',
      options: [
        'ធ្វើឱ្យគេហទំព័រផ្ទុកលឿន',
        'ជួយ Search Engines យល់ពីមាតិកា និងបរិបទ',
        'ផ្លាស់ប្តូររូបរាងគេហទំព័រដោយស្វ័យប្រវត្តិ',
        'បង្កើនសុវត្ថិភាពគេហទំព័រ'
      ],
      correct: 1,
      explanation: 'Semantic Elements ជួយ Search Engines យល់ពីសារៈសំខាន់ និងបរិបទនៃមាតិកា ដែលអាចជួយបង្កើនចំណាត់ថ្នាក់នៅក្នុងលទ្ធផលស្វែងរក។'
    },
    {
      question: 'តើ Tag មួយណាដែលតំណាងឱ្យមាតិកាឯករាជ្យដែលអាចឈរនៅម្នាក់ឯងបាន (ដូចជាអត្ថបទ Blog ឬ Comment)?',
      options: ['<section>', '<main>', '<article>', '<aside>'],
      correct: 2,
      explanation: '<article> Tag ត្រូវបានប្រើសម្រាប់មាតិកាឯករាជ្យដូចជាអត្ថបទ Blog, ប្រកាស Forum, ឬ Comment ពីអ្នកប្រើប្រាស់។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការប្រើប្រាស់ Semantic Elements សម្រាប់ Accessibility?',
      options: [
        'ពួកគេធ្វើឱ្យគេហទំព័រមានពណ៌ស្រស់ស្អាត',
        'ពួកគេអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ Screen Readers យល់ពីរចនាសម្ព័ន្ធទំព័របានល្អប្រសើរ',
        'ពួកគេកាត់បន្ថយទំហំឯកសារ HTML',
        'ពួកគេបង្កើនល្បឿនផ្ទុកទំព័រ'
      ],
      correct: 1,
      explanation: 'Semantic Elements ជួយ Screen Readers ឱ្យយល់ពីមាតិកា និងរចនាសម្ព័ន្ធទំព័រ ដែលធ្វើឱ្យគេហទំព័រងាយស្រួលប្រើសម្រាប់អ្នកពិការភ្នែក ឬអ្នកមានបញ្ហាភ្នែក។'
    },
    {
      question: 'តើ Tag មួយណាដែលកំណត់ផ្នែក footer សម្រាប់ឯកសារ ឬផ្នែកជាក់លាក់មួយ?',
      options: ['<head>', '<bottom>', '<footer>', '<end>'],
      correct: 2,
      explanation: '<footer> Tag កំណត់ផ្នែក footer ដែលជាធម្មតាមានព័ត៌មានរក្សាសិទ្ធិ ឬព័ត៌មានទំនាក់ទំនង។'
    },
    {
      question: 'តើ Tag \`<main>\` គួរតែមានប៉ុន្មានដងក្នុងឯកសារ HTML មួយ?',
      options: ['សូន្យ', 'មួយ', 'ច្រើន', 'ពីរ'],
      correct: 1,
      explanation: 'Tag <main> គួរតែមានតែមួយនៅក្នុងឯកសារ HTML នីមួយៗ ដោយសារវាតំណាងឱ្យមាតិកាសំខាន់ និងពិសេសរបស់ទំព័រ។'
    },
    {
      question: 'តើ Tag \`<aside>\` ជាធម្មតាត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'មាតិកាសំខាន់នៃទំព័រ',
        'បឋមកថាគេហទំព័រ',
        'Sidebar ឬព័ត៌មានដែលទាក់ទងនឹងមាតិកាសំខាន់',
        'បញ្ជីរទម្លាក់ចុះ'
      ],
      correct: 2,
      explanation: '<aside> Tag ត្រូវបានប្រើសម្រាប់ Sidebar, Callouts, Adverts ឬព័ត៌មានផ្សេងទៀតដែលទាក់ទងនឹងមាតិកាសំខាន់ ប៉ុន្តែអាចឈរនៅម្នាក់ឯងបាន។'
    },
    {
      question: 'តើ "Semantic" មានន័យថាអ្វីនៅក្នុងបរិបទ HTML?',
      options: [
        'មានពណ៌ស្រស់ស្អាត',
        'មានអត្ថន័យ',
        'មានទំហំតូច',
        'ងាយស្រួលក្នុងការសរសេរ'
      ],
      correct: 1,
      explanation: '"Semantic" មានន័យថា "មានអត្ថន័យ" ដោយផ្តល់នូវអត្ថន័យដល់រចនាសម្ព័ន្ធនៃគេហទំព័រ។'
    },
    {
      question: 'តើ Tag \`<header>\` អាចមាន Tag ផ្សេងទៀតនៅខាងក្នុងវាបានទេ?',
      options: ['បាទ/ចាស', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស <header> អាចមាន Tags ផ្សេងទៀតដូចជា <h1>, <nav>, <img> ជាដើម។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នាចម្បងរវាង \`<div>\` និង Semantic Elements ដូចជា \`<section>\`?',
      options: [
        '<div> ត្រូវបានប្រើសម្រាប់តែអត្ថបទប៉ុណ្ណោះ',
        'Semantic Elements ផ្តល់អត្ថន័យដល់ខ្លឹមសាររបស់វា ខណៈ <div> មិនផ្តល់',
        '<div> មានល្បឿនលឿនជាង Semantic Elements',
        'Semantic Elements មិនអាចរចនាម៉ូដជាមួយ CSS បានទេ'
      ],
      correct: 1,
      explanation: 'ភាពខុសគ្នាចម្បងគឺ Semantic Elements ផ្តល់នូវអត្ថន័យរចនាសម្ព័ន្ធ ខណៈ <div> គឺជា Generic Container ដែលគ្មានអត្ថន័យដោយខ្លួនឯង។'
    },
    {
      question: 'តើ Tag មួយណាដែលគួរតែមានចំណងជើង (\`<h1>\`-\`<h6>\`) ដើម្បីកំណត់ខ្លឹមសាររបស់វា?',
      options: ['<nav>', '<aside>', '<section>', '<footer>'],
      correct: 2,
      explanation: '<section> Tag គួរតែមានចំណងជើង ដើម្បីកំណត់ខ្លឹមសាររបស់ផ្នែកនោះ។'
    },
    {
      question: 'តើ Semantic Markup ជួយអ្នកអភិវឌ្ឍន៍ដោយរបៀបណា?',
      options: [
        'កាត់បន្ថយពេលវេលាក្នុងការសរសេរកូដ',
        'ធ្វើឱ្យកូដងាយស្រួលអាន និងយល់',
        'លុបបំបាត់តម្រូវការសម្រាប់ CSS',
        'បង្កើនទំហំឯកសារ HTML'
      ],
      correct: 1,
      explanation: 'Semantic Markup ធ្វើឱ្យកូដមានលក្ខណៈវិជ្ជាជីវៈ និងងាយស្រួលអាន យល់ និងថែទាំសម្រាប់អ្នកអភិវឌ្ឍន៍។'
    },
    {
      question: 'តើ Tag មួយណាដែលជាកន្លែងសម្រាប់មាតិកាសំខាន់នៃទំព័រ ដែលមិនគួរមានមាតិកាដដែលៗ (boilerplate)?',
      options: ['<header>', '<main>', '<section>', '<body>'],
      correct: 1,
      explanation: '<main> Tag គឺជាកន្លែងសម្រាប់មាតិកាសំខាន់ និងពិសេសរបស់ទំព័រ ហើយមិនគួរមានមាតិកាដែលដដែលៗនោះទេ។'
    },
    {
      question: 'តើឯកសារ HTML អាចមាន Tag \`<header>\` ច្រើនជាងមួយបានទេ?',
      options: ['បាទ/ចាស', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស Tag <header> អាចប្រើសម្រាប់ header របស់ឯកសារទាំងមូល ឬ header សម្រាប់ផ្នែកជាក់លាក់ (ឧទាហរណ៍ ក្នុង <article> ឬ <section>) ដូច្នេះវាអាចមានច្រើនជាងមួយ។'
    },
    {
      question: 'តើ Tag \`<article>\` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្នែកនៃទំព័រ',
        'មាតិកាដែលមិនពាក់ព័ន្ធ',
        'មាតិកាឯករាជ្យដែលអាចឈរនៅម្នាក់ឯង',
        'footer នៃទំព័រ'
      ],
      correct: 2,
      explanation: '<article> គឺសម្រាប់មាតិកាឯករាជ្យ ដូចជាអត្ថបទ Blog, News Article, ឬ Comment ដែលអាចអានបានដោយខ្លួនឯង។'
    },
    {
      question: 'ហេតុអ្វីបានជាការប្រើប្រាស់ Semantic Elements ជា "Best Practice" នៅក្នុង Web Development?',
      options: [
        'ព្រោះវាធ្វើឱ្យគេហទំព័រមើលទៅទំនើប',
        'ព្រោះវាជាតម្រូវការសម្រាប់ Browser ទាំងអស់',
        'ព្រោះវាធ្វើឱ្យកូដមានរចនាសម្ព័ន្ធល្អ មានអត្ថន័យ និងងាយស្រួលសម្រាប់ Search Engines និង Accessibility',
        'ព្រោះវាជួយកាត់បន្ថយតម្រូវការសម្រាប់ JavaScript'
      ],
      correct: 2,
      explanation: 'Semantic Elements គឺជា Best Practice ព្រោះវាផ្តល់រចនាសម្ព័ន្ធដែលមានអត្ថន័យ ជួយ Search Engines, Assistive Technologies, និងធ្វើឱ្យកូដងាយស្រួលថែទាំ។'
    },
    {
      question: 'តើ Tag មួយណាដែលបង្ហាញថាខ្លឹមសាររបស់វាគឺជា "ប្លុកនៃតំណភ្ជាប់រុករក"?',
      options: ['<a>', '<link>', '<menu>', '<nav>'],
      correct: 3,
      explanation: '<nav> Tag បង្ហាញយ៉ាងច្បាស់ថាខ្លឹមសាររបស់វាជាប្លុកនៃតំណភ្ជាប់រុករក។'
    }
  ],
  lab: {
   task: 'បង្កើតរចនាសម្ព័ន្ធ HTML សាមញ្ញមួយសម្រាប់ទំព័រ Blog ដោយប្រើ Semantic Elements ដូចជា header, nav, main, section (សម្រាប់អត្ថបទថ្មីៗ), article (សម្រាប់អត្ថបទ Blog នីមួយៗ), aside (សម្រាប់ Sidebar), និង footer ។',
    solution: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>លំហាត់ទី ១១ - Semantic HTML</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
        }
        header {
            background: #333;
            color: #fff;
            padding: 1rem 0;
            text-align: center;
        }
        header h1 {
            margin: 0;
        }
        nav ul {
            padding: 0;
            list-style: none;
        }
        nav ul li {
            display: inline;
            margin-right: 20px;
        }
        nav a {
            color: #fff;
            text-decoration: none;
        }
        main {
            display: flex; /* Use flexbox for main content and sidebar layout */
            margin: 20px auto;
            max-width: 1200px;
            padding: 0 20px;
        }
        section {
            flex: 3; /* Main content takes more space */
            background: #fff;
            padding: 20px;
            margin-right: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        article {
            border-bottom: 1px solid #eee;
            margin-bottom: 20px;
            padding-bottom: 20px;
        }
        article:last-of-type {
            border-bottom: none;
            margin-bottom: 0;
        }
        aside {
            flex: 1; /* Sidebar takes less space */
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        aside ul {
            padding: 0;
            list-style: none;
        }
        aside li {
            margin-bottom: 10px;
        }
        aside a {
            color: #007bff;
            text-decoration: none;
        }
        footer {
            text-align: center;
            padding: 20px 0;
            background: #333;
            color: #fff;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1>គេហទំព័រ Blog របស់ខ្ញុំ</h1>
        <nav>
            <ul>
                <li><a href="#">ទំព័រដើម</a></li>
                <li><a href="#">អត្ថបទ</a></li>
                <li><a href="#">ទំនាក់ទំនង</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>អត្ថបទថ្មីៗ</h2>
            <article>
                <h3>ការចាប់ផ្ដើមជាមួយ HTML5</h3>
                <p>កាលបរិច្ឆេទ: 19 កក្កដា 2025</p>
                <p>មេរៀននេះនឹងណែនាំអ្នកអំពីមូលដ្ឋានគ្រឹះនៃ HTML5 និងរបៀបចាប់ផ្តើមសរសេរកូដ។</p>
                <a href="#">អានបន្ត...</a>
            </article>
            <article>
                <h3>របៀបរចនាម៉ូត CSS ដំបូងរបស់អ្នក</h3>
                <p>កាលបរិច្ឆេទ: 15 កក្កដា 2025</p>
                <p>ស្វែងយល់ពីរបៀបបន្ថែម Style ទៅគេហទំព័ររបស់អ្នកដោយប្រើ CSS។</p>
                <a href="#">អានបន្ត...</a>
            </article>
        </section>

        <aside>
            <h3>ប្រភេទអត្ថបទ</h3>
            <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Programming</a></li>
            </ul>
            <h3>ស្វែងរក</h3>
            <input type="search" placeholder="ស្វែងរកអត្ថបទ...">
        </aside>
    </main>

    <footer>
        <p>&copy; 2025 គេហទំព័រ Blog របស់ខ្ញុំ. រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
    </footer>
</body>
</html>`
  },
};
export default Lesson4_1;