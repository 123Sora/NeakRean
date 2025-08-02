// src/components/lessons/Lesson4_3.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const Lesson4_3: LessonContent = {
  title: 'Iframes (បង្កប់មាតិកា)',
  objectives: [
    'យល់ពី <iframe> Tag (បង្កប់ទំព័រគេហទំព័រផ្សេង)',
    'ស្គាល់ src, width, height Attributes'
  ],
  content: `
# Iframes (បង្កប់មាតិកា) 🧩

An **iframe** (Inline Frame) ត្រូវបានប្រើដើម្បី **បង្កប់ឯកសារ HTML មួយទៀត** ទៅក្នុងឯកសារ HTML បច្ចុប្បន្ន។ នេះមានន័យថាអ្នកអាចបង្ហាញគេហទំព័រផ្សេង (ឧទាហរណ៍: វីដេអូ YouTube, Google Maps) ដោយផ្ទាល់នៅលើទំព័ររបស់អ្នក។

---

## 1. \`<iframe>\` Tag (បង្កប់ទំព័រគេហទំព័រផ្សេង)

Tag \`<iframe>\` បង្កើតជា **"បង្អួច"** ឬ **"frame"** មួយ ដែលផ្ទុកមាតិកាពី URL ផ្សេង។

* **\`src\` attribute:** **ចាំបាច់**។ បញ្ជាក់ **URL** នៃឯកសារដែលត្រូវបង្កប់។
* **\`width\` attribute:** កំណត់ **ទទឹង** របស់ iframe (គិតជា pixels)។
* **\`height\` attribute:** កំណត់ **កំពស់** របស់ iframe (គិតជា pixels)។
* **\`title\` attribute:** **ចាំបាច់** សម្រាប់ Accessibility។ ផ្តល់នូវចំណងជើងពិពណ៌នាសម្រាប់មាតិកា iframe ។ Screen Readers ប្រើចំណងជើងនេះដើម្បីប្រាប់អ្នកប្រើប្រាស់ពីខ្លឹមសារនៃ iframe ។
* **\`frameborder\` attribute:** (លែងប្រើក្នុង HTML5) ធ្លាប់ប្រើដើម្បីកំណត់ថា តើ border គួរត្រូវបានបង្ហាញជុំវិញ iframe ដែរឬទេ។ ឥឡូវនេះគួរប្រើ CSS ជំនួសវិញ (ឧទាហរណ៍: \`style="border:0;"\`)។
* **\`allowfullscreen\` attribute:** អនុញ្ញាតឱ្យ iframe ចូលទៅក្នុងរបៀប Fullscreen ។ នេះមានប្រយោជន៍ជាពិសេសសម្រាប់វីដេអូ។
* **\`allow\` attribute:** (ថ្មីជាង) កំណត់ Permission Policy សម្រាប់ iframe ដើម្បីគ្រប់គ្រងមុខងារជាក់លាក់ (ឧទាហរណ៍: \`autoplay\`, \`geolocation\`, \`microphone\`) ។ នេះជួយបង្កើនសុវត្ថិភាពដោយកំណត់សិទ្ធិរបស់មាតិកាដែលបានបង្កប់។

---

## 2. ការប្រើប្រាស់ Iframes ទូទៅ:

* បង្កប់វីដេអូពី YouTube ឬ Vimeo (នេះជាការប្រើប្រាស់ទូទៅបំផុត)។
* បង្កប់ផែនទីពី Google Maps។
* បង្កប់ Widgets ពីបណ្តាញសង្គម (Twitter feeds, Instagram posts) ឬគេហទំព័រផ្សេងទៀត។
* បង្កប់ Form ឬឯកសារ (ដូចជា PDF)។

---

## 3. ចំណាំសំខាន់អំពីសុវត្ថិភាព (Security) និងការអនុវត្ត (Performance): ⚠️

* **Security (សុវត្ថិភាព):** ការបង្កប់មាតិកាពីប្រភពដែលមិនស្គាល់អាចជាហានិភ័យសុវត្ថិភាព។ គេហទំព័រដែលបានបង្កប់អាចមាន Script ដែលអាចព្យាយាមចូលប្រើទិន្នន័យរបស់អ្នកប្រើប្រាស់នៅលើគេហទំព័ររបស់អ្នក។ ត្រូវប្រាកដថាអ្នកទុកចិត្តប្រភព \`src\` ជានិច្ច។ Attributes ដូចជា \`sandbox\` (មិនបានរៀបរាប់លម្អិតនៅទីនេះ) និង \`allow\` ជួយក្នុងការគ្រប់គ្រងសិទ្ធិទាំងនេះ។
* **Performance (ការអនុវត្ត):** Iframes អាចប៉ះពាល់ដល់ដំណើរការផ្ទុកទំព័រ ព្រោះ browser ត្រូវផ្ទុកឯកសារ HTML មួយទៀត (រួមទាំង CSS, JavaScript, រូបភាព) ពីប្រភពខាងក្រៅ។ ប្រើវាតាមការចាំបាច់ប៉ុណ្ណោះ។
* **X-Frame-Options / CSP:** គេហទំព័រជាច្រើន (ដូចជា Google, YouTube's main page) រារាំងការបង្កប់ដោយប្រើ HTTP Header (X-Frame-Options ឬ Content Security Policy) ដើម្បីការពារការចុចបោកប្រាស់ (clickjacking)។ នេះមានន័យថាអ្នកមិនអាចបង្កប់គេហទំព័រទាំងមូលដោយគ្រាន់តែប្រើ URL របស់វាបានទេ។ YouTube ផ្តល់ URL ពិសេសសម្រាប់បង្កប់វីដេអូ។

---

## ឧទាហរណ៍ Iframes:

### ឧទាហរណ៍ ១: បង្កប់វីដេអូ YouTube

នេះគឺជាវិធីទូទៅបំផុតក្នុងការបង្កប់វីដេអូ YouTube។ YouTube ផ្តល់នូវ URL "embed" ពិសេសសម្រាប់វីដេអូនីមួយៗ។

\`\`\`html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"  title="YouTube video player (Rick Astley - Never Gonna Give You Up)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
\`\`\`
**លទ្ធផល:** វីដេអូ YouTube នឹងបង្ហាញនៅលើទំព័ររបស់អ្នក រួមជាមួយនឹង controls របស់ YouTube ។ អ្នកប្រើប្រាស់អាចចុចប៊ូតុង Fullscreen ដើម្បីមើលវីដេអូពេញអេក្រង់។

### ឧទាហរណ៍ ២: បង្កប់គេហទំព័រ Example.com

គេហទំព័រ \`example.com\` ជាធម្មតាអនុញ្ញាតឱ្យមានការបង្កប់។ គេហទំព័រផ្សេងទៀតដូចជា Google.com នឹងមិនអនុញ្ញាតឡើយ។

\`\`\`html
<iframe
    src="https://www.example.com"
    width="800"
    height="600"
    title="Example Website for demonstration"
    style="border:1px solid #ccc; border-radius: 5px;"
>
    <p>Your browser does not support iframes. Please update your browser.</p>
</iframe>
\`\`\`
**លទ្ធផល:** ទំព័រដើមរបស់ example.com នឹងបង្ហាញនៅខាងក្នុង frame នៅលើគេហទំព័ររបស់អ្នក។ ប្រសិនបើ Browser មិនគាំទ្រ iframe (កម្រណាស់បច្ចុប្បន្ន) អត្ថបទ "Your browser does not support iframes." នឹងបង្ហាញជំនួសវិញ។

### ឧទាហរណ៍ ៣: iframe ដែលគ្មាន border (ប្រើ CSS)

\`\`\`html
<iframe
    src="https://www.w3schools.com/html/default.asp"
    width="700"
    height="450"
    title="HTML Tutorial from W3Schools"
    style="border: none;"  >
    <p>Your browser does not support iframes.</p>
</iframe>
\`\`\`
**លទ្ធផល:** ទំព័រ HTML Tutorial ពី W3Schools នឹងបង្ហាញដោយគ្មាន border ជុំវិញ frame។

> **គន្លឹះ:** 💡 ប្រើប្រាស់ \`title\` attribute ជានិច្ចសម្រាប់ \`<iframe>\` ដើម្បីបង្កើន Accessibility សម្រាប់អ្នកប្រើប្រាស់ Screen Readers!

  `,
  examples: [
    `<iframe src="https://www.w3schools.com" width="400" height="300" title="W3Schools"></iframe>`,
    `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="560" height="315" title="YouTube Video Example"></iframe>`,
    `<iframe src="https://www.example.com" style="border:0;" width="100%" height="400" title="Another Example"></iframe>`
  ],
  quiz: [
    {
      question: 'តើ Tag មួយណាប្រើសម្រាប់បង្កប់ឯកសារ HTML មួយទៀត?',
      options: ['<embed>', '<object>', '<iframe>', '<frame>'],
      correct: 2,
      explanation: '`<iframe>` Tag ប្រើសម្រាប់បង្កប់ឯកសារ HTML មួយទៀតទៅក្នុងទំព័របច្ចុប្បន្ន។'
    },
    {
      question: 'តើ Attribute មួយណាដែលចាំបាច់សម្រាប់ `<iframe>` Tag ដើម្បីបញ្ជាក់ URL នៃមាតិកាដែលត្រូវបង្កប់?',
      options: ['width', 'height', 'src', 'title'],
      correct: 2,
      explanation: '`src` Attribute គឺចាំបាច់ដើម្បីបញ្ជាក់ URL នៃឯកសារដែលត្រូវបង្កប់។'
    },
    {
      question: 'ហេតុអ្វីបានជាការប្រើប្រាស់ iframe ច្រើនពេកអាចប៉ះពាល់ដល់ Performance?',
      options: [
        'វាមិនប៉ះពាល់ដល់ Performance ទេ',
        'វាធ្វើឱ្យទំព័រមានទំហំធំពេក',
        'Browser ត្រូវផ្ទុកឯកសារ HTML មួយទៀត',
        'វាត្រូវការ JavaScript ច្រើន'
      ],
      correct: 2,
      explanation: 'iframe នីមួយៗតម្រូវឱ្យ browser ផ្ទុកឯកសារ HTML មួយទៀត (រួមទាំងធនធានរបស់វា) ដែលអាចធ្វើឱ្យដំណើរការផ្ទុកទំព័រយឺត។'
    },
    {
      question: 'តើ Attribute មួយណាដែលត្រូវបានណែនាំឱ្យប្រើសម្រាប់ Accessibility ជាមួយ `<iframe>`?',
      options: ['name', 'id', 'class', 'title'],
      correct: 3,
      explanation: '`title` Attribute ផ្តល់នូវចំណងជើងពិពណ៌នាសម្រាប់មាតិកា iframe ដែលសំខាន់សម្រាប់ Accessibility (ឧទាហរណ៍ Screen Readers)។'
    },
    {
      question: 'តើ Attribute `allowfullscreen` នៅក្នុង `<iframe>` ធ្វើអ្វី?',
      options: [
        'អនុញ្ញាតឱ្យ iframe បើកក្នុង Tab ថ្មី',
        'អនុញ្ញាតឱ្យ iframe ចូលទៅក្នុងរបៀប Fullscreen',
        'អនុញ្ញាតឱ្យ iframe លេងវីដេអូដោយស្វ័យប្រវត្តិ',
        'អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់កែប្រែខ្លឹមសារ iframe'
      ],
      correct: 1,
      explanation: '`allowfullscreen` attribute អនុញ្ញាតឱ្យមាតិកាដែលបានបង្កប់នៅក្នុង iframe (ដូចជាវីដេអូ YouTube) ចូលទៅក្នុងរបៀប Fullscreen។'
    },
    {
      question: 'តើ Attribute មួយណាដែលលែងប្រើ (deprecated) សម្រាប់ការកំណត់ Border របស់ iframe?',
      options: ['border', 'frameborder', 'style', 'outline'],
      correct: 1,
      explanation: '`frameborder` Attribute ត្រូវបានលែងប្រើក្នុង HTML5 ហើយគួរប្រើ CSS (`style="border:0;"`) ជំនួសវិញ។'
    },
    {
      question: 'តើគេហទំព័រដូចជា Google.com ឬ Facebook.com អាចត្រូវបានបង្កប់ដោយផ្ទាល់នៅក្នុង `<iframe>` ដែរឬទេ?',
      options: [
        'បាទ/ចាស ជានិច្ចកាល',
        'ទេ ពួកគេតែងតែរារាំងការបង្កប់ដើម្បីសុវត្ថិភាព',
        'បាទ/ចាស លុះត្រាតែអ្នកប្រើ `allowfullscreen`',
        'ទេ លុះត្រាតែអ្នកប្រើ `srcdoc` attribute'
      ],
      correct: 1,
      explanation: 'គេហទំព័រធំៗជាច្រើនរារាំងការបង្កប់ដោយផ្ទាល់ដោយប្រើ HTTP Headers (X-Frame-Options, CSP) ដើម្បីការពារបញ្ហាសុវត្ថិភាពដូចជា clickjacking។'
    },
    {
      question: 'តើ Attribute `allow` នៅក្នុង `<iframe>` ជួយអ្វី?',
      options: [
        'អនុញ្ញាតឱ្យ Browser បង្កើនល្បឿន',
        'កំណត់ Permission Policy សម្រាប់ iframe ដើម្បីគ្រប់គ្រងមុខងារជាក់លាក់',
        'អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ Download ឯកសារពី iframe',
        'អនុញ្ញាតឱ្យ iframe ដំណើរការ JavaScript ទាំងអស់'
      ],
      correct: 1,
      explanation: '`allow` attribute កំណត់ Permission Policy សម្រាប់ iframe ដើម្បីគ្រប់គ្រងការចូលប្រើមុខងារ Browser ជាក់លាក់ (ឧទាហរណ៍ autoplay, geolocation) ដើម្បីបង្កើនសុវត្ថិភាព។'
    },
    {
      question: 'តើការបង្កប់វីដេអូ YouTube នៅក្នុង `<iframe>` ជាការប្រើប្រាស់ទូទៅដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស ការបង្កប់វីដេអូ YouTube គឺជាការប្រើប្រាស់ទូទៅបំផុតមួយនៃ `<iframe>`។'
    }
  ],
  lab: {
    task: 'បង្កើតឯកសារ HTML មួយដែលមាន iframe ពីរ: ទីមួយបង្កប់វីដេអូ YouTube (ប្រើ URL ណាមួយពី YouTube embed) និងទីពីរបង្កប់គេហទំព័រ W3Schools (https://www.w3schools.com) ។ ត្រូវប្រាកដថា iframe ទាំងពីរមាន `title` attribute និងកំណត់ `width` និង `height` សមរម្យ។',
    solution: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>លំហាត់ទី ១៣ - Iframes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        h1, h2 {
            color: #0056b3;
            text-align: center;
        }
        .iframe-container {
            margin: 20px auto;
            max-width: 900px;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-align: center;
        }
        iframe {
            border: 1px solid #ddd;
            border-radius: 5px;
            max-width: 100%; /* Make iframes responsive */
            height: auto; /* Adjust height automatically */
            display: block; /* Remove extra space below iframe */
            margin: 0 auto; /* Center iframe */
        }
    </style>
</head>
<body>
    <h1>ការបង្កប់មាតិកាដោយប្រើ Iframes</h1>

    <div class="iframe-container">
        <h2>វីដេអូ YouTube គំរូ</h2>
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PjW3_N1u4V4" title="មេរៀនសរសេរកូដ HTML សម្រាប់អ្នកចាប់ផ្តើមដំបូង"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
    </div>

    <div class="iframe-container">
        <h2>គេហទំព័រ W3Schools</h2>
        <iframe
            src="https://www.w3schools.com"
            width="800"
            height="500"
            title="W3Schools Online Web Tutorials"
            style="border:1px solid #ccc;"
        >
            <p>Your browser does not support iframes.</p>
        </iframe>
    </div>
</body>
</html>`
  }
};
export default Lesson4_3;