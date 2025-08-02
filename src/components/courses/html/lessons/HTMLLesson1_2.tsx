// src/components/lessons/Lesson1_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const Lesson1_2: LessonContent = {
  title: 'រចនាសម្ព័ន្ធមូលដ្ឋានរបស់ HTML Document',
  objectives: [
    'យល់ពីរចនាសម្ព័ន្ធទូទៅនៃឯកសារ HTML',
    'ស្គាល់ការប្រើប្រាស់ DOCTYPE',
    'យល់ពីតួនាទី html, head, និង body tags',
    'អាចបង្កើតឯកសារ HTML ដែលមានរចនាសម្ព័ន្ធត្រឹមត្រូវ'
  ],
  content: `
# រចនាសម្ព័ន្ធមូលដ្ឋានរបស់ HTML Document 🏗️

---

## ទិដ្ឋភាពទូទៅនៃរចនាសម្ព័ន្ធ HTML ឯកសារ

រាល់ឯកសារ HTML ដែលមានលក្ខណៈត្រឹមត្រូវគួរតែមានរចនាសម្ព័ន្ធមូលដ្ឋានដូចខាងក្រោម:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    </head>
<body>
    </body>
</html>
\`\`\`

---

## 1. DOCTYPE Declaration (\`<!DOCTYPE html>\`) 📄

\`<!DOCTYPE html>\` គឺជាការប្រកាសប្រភេទឯកសារដែលប្រាប់ browser ថាឯកសារនេះគឺជា **HTML5**។

### សារៈសំខាន់:
* **ត្រូវដាក់នៅបន្ទាត់ដំបូងគេ**បំផុតនៃឯកសារ។
* ធ្វើឱ្យ browser **render (បង្ហាញ)** ទំព័របានត្រឹមត្រូវនៅក្នុង "standard mode"។
* ការពារពីបញ្ហា **compatibility (ភាពស៊ីគ្នារវាង Browser)** (គេហៅថា "quirks mode")។

---

## 2. HTML Tag (\`<html>\`) 🌐

Tag \`<html>\` គឺជា **root element** ដែលឡោមព័ទ្ធធាតុ HTML ផ្សេងៗទាំងអស់នៅក្នុងទំព័រ។

### Attributes សំខាន់:
* **\`lang\` attribute:** កំណត់ **ភាសារបស់ទំព័រ** (ឧទាហរណ៍: \`lang="km"\` សម្រាប់ភាសាខ្មែរ, \`lang="en"\` សម្រាប់ភាសាអង់គ្លេស)។ នេះមានប្រយោជន៍សម្រាប់ Screen Readers និង Search Engines។

  \`\`\`html
  <html lang="km"> 
  <html lang="en"> 
  \`\`\`

---

## 3. HEAD Section (\`<head>\`) 🧠

ផ្នែក \`<head>\` មាន **ព័ត៌មាន metadata** អំពីទំព័រ ប៉ុន្តែ **មិនបង្ហាញដល់អ្នកប្រើប្រាស់** ដោយផ្ទាល់នៅលើទំព័រនោះទេ។

### ធាតុសំខាន់ៗដែលដាក់ក្នុង \`<head>\`:
* **\`<title>\`:** កំណត់ **ចំណងជើងទំព័រ** ដែលបង្ហាញនៅ Tab Browser ឬចំណងជើងនៅ Search Engine Results។
* **\`<meta>\`:** ផ្តល់ **ព័ត៌មានបន្ថែមអំពីទំព័រ** (ដូចជា character encoding, viewport settings, description សម្រាប់ SEO)។
* **\`<link>\`:** ប្រើសម្រាប់ **ភ្ជាប់ឯកសារខាងក្រៅ** ទៅកាន់ឯកសារ HTML (ភាគច្រើនគឺឯកសារ **CSS** សម្រាប់រចនាម៉ូត)។
* **\`<style>\`:** អនុញ្ញាតឱ្យអ្នកសរសេរ **CSS កូដផ្ទាល់** នៅខាងក្នុងឯកសារ HTML (Internal CSS)។
* **\`<script>\`:** ភ្ជាប់ឯកសារ **JavaScript ខាងក្រៅ** ឬសរសេរ JavaScript កូដផ្ទាល់ (ជាទូទៅដាក់នៅចុង \`<body>\` វិញដើម្បីបង្កើនល្បឿនផ្ទុក)។

### ឧទាហរណ៍នៃការប្រើប្រាស់ក្នុង \`<head>\`:
\`\`\`html
<head>
    <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>ទំព័ររបស់ខ្ញុំ</title>
    <link rel="stylesheet" href="style.css"> </head>
\`\`\`

---

## 4. BODY Section (\`<body>\`) 👁️‍🗨️

ផ្នែក \`<body>\` មាន **មាតិកាទាំងអស់ដែលនឹងបង្ហាញដល់អ្នកប្រើប្រាស់** នៅលើ Web Browser។

### អ្វីដែលអាចដាក់ក្នុង \`<body>\`:
* **ចំណងជើង (Headings):** \`<h1>\` ដល់ \`<h6>\`
* **កថាខណ្ឌ (Paragraphs):** \`<p>\`
* **រូបភាព (Images):** \`<img>\`
* **តំណភ្ជាប់ (Links):** \`<a>\`
* **បញ្ជីរ (Lists):** \`<ul>\`, \`<ol>\`, \`<li>\`
* **តារាង (Tables):** \`<table>\`
* **ទម្រង់ (Forms):** \`<form>\` និងធាតុបញ្ចូលផ្សេងៗ
* និងធាតុ HTML ជាច្រើនទៀត...

---

## 5. Meta Tags សំខាន់ៗបន្ថែម ℹ️

### 5.1. Character Encoding (\`charset\`)
\`\`\`html
<meta charset="UTF-8">
\`\`\`
Tag នេះមានសារៈសំខាន់ខ្លាំងណាស់ក្នុងការកំណត់ **Character Encoding** ដើម្បីបង្ហាញតួអក្សរពិសេស រួមទាំង **អក្សរខ្មែរ** បានត្រឹមត្រូវ ដោយមិនមានបញ្ហា "square boxes" (□□□)។

### 5.2. Viewport (\`viewport\`)
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`
Tag នេះគឺជាគន្លឹះសម្រាប់ធ្វើឱ្យទំព័រ **responsive** (អាចបង្ហាញបានល្អនៅលើទំហំអេក្រង់ផ្សេងៗគ្នា) នៅលើឧបករណ៍ចល័ត (Mobile Devices)។

### 5.3. Description (\`description\`)
\`\`\`html
<meta name="description" content="ការពិពណ៌នាខ្លីអំពីទំព័រ">
\`\`\`
Tag នេះផ្តល់នូវ **ការពិពណ៌នាខ្លីៗ** អំពីខ្លឹមសារនៃទំព័រ។ វាមានសារៈសំខាន់សម្រាប់ **SEO (Search Engine Optimization)** ព្រោះ Search Engines អាចប្រើការពិពណ៌នានេះដើម្បីបង្ហាញនៅក្នុងលទ្ធផលស្វែងរក។

---

> **ចងចាំ:** រចនាសម្ព័ន្ធត្រឹមត្រូវគឺជាមូលដ្ឋានគ្រឹះសម្រាប់គេហទំព័រដែលមានប្រសិទ្ធភាព និងអាចចូលប្រើបាន!

  `,
  examples: [
    `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="គេហទំព័រអំពីការរៀន HTML">
    <title>រៀន HTML ជាភាសាខ្មែរ</title>
</head>
<body>
    <h1>មេរៀនទី ១: HTML មូលដ្ឋាន</h1>
    <p>នេះជាឧទាហរណ៍នៃឯកសារ HTML ដែលមានរចនាសម្ព័ន្ធគ្រប់គ្រាន់។</p>
</body>
</html>`,
    `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ក្រុមហ៊ុន ABC - សេវាកម្មគុណភាព">
    <meta name="keywords" content="ធុរកិច្ច, សេវាកម្មរ, ក្រុមហ៊ុន">
    <title>ក្រុមហ៊ុន ABC - ទំព័រដើម</title>
</head>
<body>
    <h1>ស្វាគមន៍មកកាន់ក្រុមហ៊ុន ABC</h1>
    <p>យើងផ្តល់សេវាកម្មគុណភាពខ្ពស់ជូនអតិថិជន។</p>
</body>
</html>`
  ],
  quiz: [
    {
      question: 'តើ DOCTYPE declaration ត្រូវដាក់នៅកន្លែងណា?',
      options: [
        'នៅក្នុង head section',
        'នៅបន្ទាត់ដំបូងគេនៃឯកសារ',
        'នៅក្នុង body section',
        'នៅចុងឯកសារ'
      ],
      correct: 1,
      explanation: 'DOCTYPE declaration ត្រូវដាក់នៅបន្ទាត់ដំបូងគេបំផុតនៃឯកសារ HTML។'
    },
    {
      question: 'តើ meta charset="UTF-8" ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ពណ៌អក្សរ',
        'កំណត់ការ encoding សម្រាប់បង្ហាញតួអក្សរ',
        'កំណត់ទំហំអក្សរ',
        'កំណត់ប្រភេទអក្សរ'
      ],
      correct: 1,
      explanation: 'meta charset="UTF-8" ប្រើសម្រាប់កំណត់ការ encoding ដើម្បីឱ្យតួអក្សរខ្មែរនិងអក្សរពិសេសបង្ហាញបានត្រឹមត្រូវ។'
    },
    {
      question: 'តើព័ត៌មាននៅក្នុង Tag \`<head>\` ត្រូវបានបង្ហាញដល់អ្នកប្រើប្រាស់ដោយផ្ទាល់ទេ?',
      options: ['បាទ/ចាស', 'ទេ'],
      correct: 1,
      explanation: 'ព័ត៌មាននៅក្នុង Tag <head> គឺជា metadata ដែលមិនត្រូវបានបង្ហាញដោយផ្ទាល់ទៅអ្នកប្រើប្រាស់នៅលើទំព័រនោះទេ។'
    },
    {
      question: 'តើ Tag មួយណាដែលជា "root element" នៃឯកសារ HTML?',
      options: ['<head>', '<body>', '<html>', '<title>'],
      correct: 2,
      explanation: '<html> Tag គឺជា root element ដែលឡោមព័ទ្ធធាតុ HTML ផ្សេងៗទាំងអស់។'
    },
    {
      question: 'តើ \`lang="km"\` នៅក្នុង \`<html>\` Tag បញ្ជាក់អ្វី?',
      options: [
        'ទំហំគេហទំព័រ',
        'ប្រភេទឯកសារ',
        'ភាសារបស់ទំព័រ',
        'ទីតាំងភូមិសាស្ត្រ'
      ],
      correct: 2,
      explanation: 'lang attribute កំណត់ភាសារបស់ទំព័រ (ឧទាហរណ៍ "km" សម្រាប់ភាសាខ្មែរ) ដែលមានប្រយោជន៍សម្រាប់ Accessibility និង Search Engines។'
    },
    {
      question: 'តើ Tag មួយណាដែលប្រើសម្រាប់កំណត់ចំណងជើងទំព័រ ដែលបង្ហាញនៅ Tab Browser?',
      options: ['<meta>', '<h1>', '<title>', '<body>'],
      correct: 2,
      explanation: '<title> Tag ប្រើសម្រាប់កំណត់ចំណងជើងទំព័រ។'
    },
    {
      question: 'តើធាតុ HTML ដូចជា Paragraphs និង Images គួរដាក់ក្នុង Tag មួយណា?',
      options: ['<head>', '<body>', '<html>', '<meta>'],
      correct: 1,
      explanation: 'Paragraphs និង Images គឺជាមាតិកាដែលបង្ហាញនៅលើទំព័រ ដូច្នេះពួកវាគួរតែដាក់ក្នុង Tag <body>។'
    },
    {
      question: 'តើ Meta Tag មួយណាដែលសំខាន់សម្រាប់ការធ្វើឱ្យគេហទំព័រ Responsive នៅលើឧបករណ៍ចល័ត?',
      options: [
        '<meta charset="UTF-8">',
        '<meta name="description" ...>',
        '<meta name="viewport" ...>',
        '<meta name="keywords" ...>'
      ],
      correct: 2,
      explanation: '<meta name="viewport" content="width=device-width, initial-scale=1.0"> គឺសំខាន់សម្រាប់ Responsive Web Design។'
    },
    {
      question: 'តើ \`<link>\` Tag ត្រូវបានប្រើសម្រាប់ភ្ជាប់ឯកសារប្រភេទណាជាទូទៅ?',
      options: ['JavaScript', 'HTML', 'CSS', 'Images'],
      correct: 2,
      explanation: '<link> Tag ត្រូវបានប្រើជាទូទៅបំផុតដើម្បីភ្ជាប់ឯកសារ CSS ខាងក្រៅ។'
    },
    {
      question: 'តើអ្វីជាមុខងារសំខាន់របស់ \`<meta name="description">\`?',
      options: [
        'កំណត់ប្រភេទអក្សរ',
        'ផ្តល់ការពិពណ៌នាខ្លីសម្រាប់ SEO',
        'កំណត់កម្រិតពង្រីកដំបូង',
        'ភ្ជាប់ Script ខាងក្រៅ'
      ],
      correct: 1,
      explanation: '\`<meta name="description">\` ផ្តល់ការពិពណ៌នាខ្លីៗអំពីទំព័រ ដែលជួយដល់ SEO និងការបង្ហាញនៅលទ្ធផលស្វែងរក។'
    },
    {
      question: 'តើការមិនដាក់ DOCTYPE declaration អាចបណ្តាលឱ្យមានបញ្ហាអ្វី?',
      options: [
        'ធ្វើឱ្យទំព័រដំណើរការយឺត',
        'បណ្តាលឱ្យ Browser ដំណើរការក្នុង "quirks mode" (បង្ហាញមិនត្រឹមត្រូវ)',
        'បិទការប្រើប្រាស់ JavaScript',
        'ធ្វើឱ្យ Font មិនបង្ហាញ'
      ],
      correct: 1,
      explanation: 'ការមិនដាក់ DOCTYPE declaration អាចបណ្តាលឱ្យ Browser ដំណើរការក្នុង "quirks mode" ដែលធ្វើឱ្យទំព័រមិនបង្ហាញត្រឹមត្រូវតាមស្តង់ដារ។'
    },
    {
      question: 'តើធាតុ HTML មួយណាដែលជាទូទៅមិនត្រូវបានបង្ហាញដោយផ្ទាល់នៅលើទំព័រនោះទេ?',
      options: ['<p>', '<img>', '<h1>', '<meta>'],
      correct: 3,
      explanation: 'Tag <meta> ផ្ទុកព័ត៌មាន metadata អំពីទំព័រ ដែលមិនបង្ហាញដោយផ្ទាល់ទៅអ្នកប្រើប្រាស់។'
    }
  ],
  lab: {
    task: 'បង្កើតឯកសារ HTML ដែលមានរចនាសម្ព័ន្ធគ្រប់គ្រាន់ រួមមាន DOCTYPE, meta tags សំខាន់, និងមាតិកាងាយៗអំពីខ្លួនអ្នក។',
    solution: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ទំព័រផ្ទាល់ខ្លួនរបស់ [ឈ្មោះអ្នក]">
    <meta name="author" content="[ឈ្មោះអ្នក]">
    <title>[ឈ្មោះអ្នក] - ទំព័រផ្ទាល់ខ្លួន</title>
</head>
<body>
    <h1>ស្វាគមន៍មកកាន់ទំព័រផ្ទាល់ខ្លួនរបស់ខ្ញុំ</h1>
    
    <h2>អំពីខ្ញុំ</h2>
    <p>ខ្ញុំឈ្មោះ [ឈ្មោះអ្នក] ហើយខ្ញុំកំពុងរៀន HTML ដើម្បីបង្កើតគេហទំព័រ។</p>
    
    <h2>ចំណាប់អារម្មណ៍របស់ខ្ញុំ</h2>
    <p>ខ្ញុំចូលចិត្តបច្ចេកវិទ្យា, ការសរសេរកម្មវិធី, និងការរៀនសូត្រអ្វីថ្មីៗ។</p>
    
    <h2>គោលដៅ</h2>
    <p>ខ្ញុំចង់ក្លាយជា Web Developer ដ៏ល្អម្នាក់ និងបង្កើតគេហទំព័រដ៏ស្រស់ស្អាត។</p>
</body>
</html>`
  }
};

export default Lesson1_2;