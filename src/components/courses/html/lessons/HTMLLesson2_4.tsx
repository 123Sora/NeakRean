// src/components/lessons/Lesson2_4.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const Lesson2_4: LessonContent = {
  title: 'Links (Hyperlinks)',
  objectives: [
    'យល់ពី Tag <a> (Anchor Tag)',
    'ស្គាល់ href Attribute សម្រាប់ Destination URL',
    'អាចបង្កើតតំណភ្ជាប់ទៅគេហទំព័រខាងក្រៅ',
    'អាចបង្កើតតំណភ្ជាប់ទៅទំព័រក្នុងគេហទំព័រតែមួយ',
    'អាចបង្កើតតំណភ្ជាប់ទៅកាន់ផ្នែកជាក់លាក់ក្នុងទំព័រតែមួយ (Anchor Links)',
    'យល់ពី target Attribute (_blank, _self ។ល។)'
  ],
  content: `
# Links (Hyperlinks) 🔗

តំណភ្ជាប់ (links) ឬ hyperlinks គឺជា **បេះដូងនៃគេហទំព័រ**។ ពួកវាអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ រុករកពីទំព័រមួយទៅទំព័រមួយទៀត ទាំងនៅក្នុងគេហទំព័រតែមួយ (Internal Links) ឬទៅកាន់គេហទំព័រខាងក្រៅ (External Links) ។

---

## 1. \`<a>\` Tag (Anchor Tag) ⚓

Tag \`<a>\` តំណាងឱ្យ **anchor** (យុថ្កា) ហើយត្រូវបានប្រើដើម្បីបង្កើតតំណភ្ជាប់។ ពាក្យ "anchor" សំដៅលើការពិតដែលថាអ្នកអាច "យុថ្កា" (link) ទៅផ្នែកជាក់លាក់នៃទំព័រមួយ។

## 2. \`href\` Attribute (Hypertext Reference) 🎯

Attribute ដ៏សំខាន់បំផុតសម្រាប់ tag \`<a>\` គឺ \`href\` (Hypertext Reference)។ វាបញ្ជាក់ **URL (Uniform Resource Locator)** នៃទិសដៅដែលតំណភ្ជាប់នោះនឹងនាំទៅ។

\`\`\`html
<a href="URL_Destination">អត្ថបទតំណភ្ជាប់ (Link Text)</a>
\`\`\`
> **Link Text:** គឺជាអត្ថបទដែលអាចចុចបាន ដែលអ្នកប្រើប្រាស់មើលឃើញ។

---

## 3. Linking to External Websites (តំណភ្ជាប់ទៅគេហទំព័រខាងក្រៅ) 🌐

ដើម្បីភ្ជាប់ទៅគេហទំព័រខាងក្រៅ អ្នកត្រូវប្រើ **Full URL** (រួមទាំង \`http://\` ឬ \`https://\`)។

\`\`\`html
<p>
    សូមចូលមើល <a href="https://www.google.com">Google</a> សម្រាប់ស្វែងរកព័ត៌មាន។
</p>
\`\`\`

---

## 4. Linking to Internal Pages (តំណភ្ជាប់ទៅទំព័រក្នុងគេហទំព័រតែមួយ) 📄

ដើម្បីភ្ជាប់ទៅទំព័រផ្សេងទៀតនៅក្នុងគេហទំព័ររបស់អ្នក (ដែលស្ថិតនៅក្នុង Folder ដូចគ្នា ឬ Folder ផ្សេងទៀត) អ្នកអាចប្រើ **Relative URL** (គ្រាន់តែឈ្មោះឯកសារ ឬ Path ទៅឯកសារ)។

* **ឯកសារនៅក្នុង Folder តែមួយ:**
    \`\`\`html
    <p>
        ស្វែងយល់បន្ថែមអំពីពួកយើង <a href="about.html">នៅទីនេះ</a> ។
    </p>
    \`\`\`
* **ឯកសារនៅក្នុង Sub-folder:** (ឧទាហរណ៍: \`pages/contact.html\`)
    \`\`\`html
    <a href="pages/contact.html">ទាក់ទងមកយើង</a>
    \`\`\`
* **ឯកសារនៅក្នុង Parent Folder:** (ឧទាហរណ៍: ពី \`pages/subpage.html\` ទៅ \`index.html\`)
    \`\`\`html
    <a href="../index.html">ត្រឡប់ទៅទំព័រដើម</a>
    \`\`\`

---

## 5. Linking to Sections within a Page (Anchor Links / Bookmarks) 🔗⬇️

អ្នកអាចបង្កើតតំណភ្ជាប់ដែលរមូរទៅផ្នែកជាក់លាក់មួយនៅលើទំព័រតែមួយ។ នេះមានប្រយោជន៍សម្រាប់ទំព័រវែងៗ។ ដើម្បីធ្វើដូច្នេះ អ្នកត្រូវ:
1.  **កំណត់ \`id\` attribute** ទៅកាន់ element គោលដៅ (target) ដែលអ្នកចង់ឱ្យតំណភ្ជាប់រមូរទៅ។ \`id\` ត្រូវតែប្លែក (unique) ក្នុងឯកសារ។
2.  ប្រើ \`href="#ID_of_target_element"\` នៅក្នុងតំណភ្ជាប់របស់អ្នក។

\`\`\`html
<a href="#section-introduction">ទៅកាន់ផ្នែកណែនាំ</a>
<a href="#section-conclusion">ទៅកាន់ផ្នែកសន្និដ្ឋាន</a>

<h2 id="section-introduction">ផ្នែកណែនាំ</h2>
<p>មាតិកានៃផ្នែកណែនាំ...</p>

<h2 id="section-conclusion">ផ្នែកសន្និដ្ឋាន</h2>
<p>មាតិកានៃផ្នែកសន្និដ្ឋាន...</p>
\`\`\`

---

## 6. \`target\` Attribute (\`_blank\`, \`_self\`, \`_parent\`, \`_top\`) 🆕

Attribute \`target\` បញ្ជាក់ពីរបៀបដែលឯកសារដែលបានភ្ជាប់នឹងបើក។ តម្លៃទូទៅបំផុតគឺ:

* **\`_self\` (Default):** បើកឯកសារនៅក្នុង Window/Tab តែមួយ (បច្ចុប្បន្ន)។ នេះគឺជាឥរិយាបថលំនាំដើម ប្រសិនបើអ្នកមិនបញ្ជាក់ \`target\`។
    \`\`\`html
    <a href="another-page.html" target="_self">បើកក្នុង Tab បច្ចុប្បន្ន</a>
    \`\`\`
* **\`_blank\`:** បើកឯកសារនៅក្នុង **Tab/Window ថ្មី**។ នេះមានប្រយោជន៍សម្រាប់តំណភ្ជាប់ខាងក្រៅ ដើម្បីកុំឱ្យអ្នកប្រើប្រាស់ចាកចេញពីគេហទំព័ររបស់អ្នក។
    \`\`\`html
    <a href="https://www.facebook.com" target="_blank">ទៅកាន់ Facebook</a>
    \`\`\`
* **\`_parent\`:** បើកឯកសារនៅក្នុង frame ដើម (parent frame) ។ ប្រើក្នុងករណី Nested Framesets/Iframes ។
* **\`_top\`:** បើកឯកសារនៅក្នុង Window ពេញលេញ ដោយបំបែកចេញពី frames ទាំងអស់។

> **អនុសាសន៍:** សម្រាប់តំណភ្ជាប់ទៅគេហទំព័រខាងក្រៅ គួរតែប្រើ \`target="_blank"\` ដើម្បីរក្សាអ្នកប្រើប្រាស់នៅលើគេហទំព័ររបស់អ្នក។

---

## 7. Email Links (\`mailto:\`) 📧

អ្នកអាចបង្កើតតំណភ្ជាប់ដើម្បីបើកកម្មវិធី Email របស់អ្នកប្រើប្រាស់ (Email Client) ដោយស្វ័យប្រវត្តិ។

\`\`\`html
<p>
    ផ្ញើអ៊ីមែលមកយើង: <a href="mailto:info@example.com">info@example.com</a>
</p>
\`\`\`
អ្នកក៏អាចបន្ថែមប្រធានបទ (subject) ឬតួអត្ថបទ (body) ផងដែរ:
\`\`\`html
<p>
    ផ្ញើអ៊ីមែលជាមួយប្រធានបទ: <a href="mailto:info@example.com?subject=សំណួរអំពីផលិតផល">សួរអំពីផលិតផល</a>
</p>
\`\`\`

---

## 8. Phone Links (\`tel:\`) 📞

អ្នកអាចបង្កើតតំណភ្ជាប់ដើម្បីទូរស័ព្ទទៅលេខណាមួយនៅលើឧបករណ៍ចល័ត។

\`\`\`html
<p>
    ទំនាក់ទំនងតាមទូរស័ព្pទ: <a href="tel:+85512345678">012 345 678</a>
</p>
\`\`\`

---

> **ចំណាំសំខាន់!** 🚀 ការប្រើប្រាស់តំណភ្ជាប់ (\`<a>\` tags) ប្រកបដោយប្រសិទ្ធភាព ធ្វើឱ្យគេហទំព័ររបស់អ្នកងាយស្រួលប្រើប្រាស់ និងរុករក។ ត្រូវប្រាកដថាអត្ថបទតំណភ្ជាប់របស់អ្នកច្បាស់លាស់ និងបង្ហាញថាវាទៅកាន់ទីណា!

  `,
  examples: [
    `<a href="https://www.google.com" target="_blank">ទៅ Google (Tab ថ្មី)</a>`,
    `<a href="about.html">អំពីយើង (ទំព័រក្នុង)</a>`,
    `<h3 id="top">ទៅលើ</h3><a href="#top">ត្រឡប់ទៅលើ</a>`,
    `<a href="mailto:support@example.com">ផ្ញើអ៊ីមែលមក Support</a>`,
    `<a href="tel:+1234567890">Call Us</a>`
  ],
  quiz: [
    {
      question: 'តើ Attribute មួយណាប្រើសម្រាប់បញ្ជាក់ URL គោលដៅនៃតំណភ្ជាប់?',
      options: ['src', 'link', 'href', 'url'],
      correct: 2,
      explanation: 'href Attribute ប្រើសម្រាប់បញ្ជាក់ URL គោលដៅនៃតំណភ្ជាប់។'
    },
    {
      question: 'តើ target="_blank" ធ្វើអ្វី?',
      options: [
        'បើកតំណភ្ជាប់ក្នុង Tab ថ្មី',
        'បើកតំណភ្ជាប់ក្នុង Window តែមួយ',
        'បិទតំណភ្ជាប់',
        'ផ្ទុកទំព័រឡើងវិញ'
      ],
      correct: 0,
      explanation: 'target="_blank" បើកតំណភ្ជាប់ក្នុង Tab ឬ Window ថ្មី។'
    },
    {
      question: 'តើ Tag មួយណាត្រូវបានប្រើដើម្បីបង្កើតតំណភ្ជាប់?',
      options: ['<link>', '<nav>', '<a>', '<url>'],
      correct: 2,
      explanation: 'Tag <a> (Anchor Tag) ត្រូវបានប្រើដើម្បីបង្កើតតំណភ្ជាប់។'
    },
    {
      question: 'ដើម្បីបង្កើតតំណភ្ជាប់ទៅកាន់ផ្នែកជាក់លាក់មួយនៅលើទំព័រតែមួយ តើ Attribute មួយណាដែលអ្នកត្រូវកំណត់ទៅកាន់ Element គោលដៅ?',
      options: ['name', 'class', 'id', 'section'],
      correct: 2,
      explanation: 'អ្នកត្រូវកំណត់ id Attribute ទៅកាន់ Element គោលដៅ ដើម្បីអាចបង្កើត Anchor Link ទៅកាន់វាបាន។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Full URL និង Relative URL?',
      options: [
        'Full URL សម្រាប់រូបភាព, Relative URL សម្រាប់អត្ថបទ',
        'Full URL រួមបញ្ចូល http/https ចំណែក Relative URL គ្រាន់តែឈ្មោះឯកសារ',
        'Full URL សម្រាប់ Internal Links, Relative URL សម្រាប់ External Links',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 1,
      explanation: 'Full URL រួមបញ្ចូល http:// ឬ https:// និង Domain Name ចំណែក Relative URL គ្រាន់តែ Path/Filename ដែលទាក់ទងនឹងឯកសារបច្ចុប្បន្ន។'
    },
    {
      question: 'តើ \`target="_self"\` មានន័យដូចម្តេច?',
      options: [
        'បើកតំណភ្ជាប់ក្នុង Tab ថ្មី',
        'បើកតំណភ្ជាប់ក្នុង Frame ខាងលើ',
        'បើកតំណភ្ជាប់ក្នុង Window/Tab បច្ចុប្បន្ន',
        'បិទ Tab បច្ចុប្បន្ន'
      ],
      correct: 2,
      explanation: 'target="_self" គឺជាតម្លៃលំនាំដើមដែលបើកឯកសារនៅក្នុង Window/Tab បច្ចុប្បន្ន។'
    },
    {
      question: 'តើ Link Text ត្រូវបានបង្ហាញនៅកន្លែងណា?',
      options: [
        'នៅក្នុង href attribute',
        'នៅចន្លោះ opening <a> tag និង closing </a> tag',
        'ជា tooltip នៅពេល hover',
        'នៅក្នុង id attribute'
      ],
      correct: 1,
      explanation: 'Link Text គឺជាអត្ថបទដែលអាចចុចបាន ដែលបង្ហាញនៅចន្លោះ opening <a> tag និង closing </a> tag។'
    },
    {
      question: 'តើ Prefix អ្វីដែលប្រើសម្រាប់ Email Link?',
      options: ['mail:', 'emailto:', 'mailto:', 'sendmail:'],
      correct: 2,
      explanation: 'Prefix "mailto:" ត្រូវបានប្រើសម្រាប់ Email Link (ឧទាហរណ៍: <a href="mailto:example@domain.com">)។'
    },
    {
      question: 'តើ Anchor Link មួយណាត្រឹមត្រូវដើម្បីទៅកាន់ Element ដែលមាន \`id="info-section"\` ?',
      options: [
        '<a href="info-section">',
        '<a id="info-section">',
        '<a href="#info-section">',
        '<a link="info-section">'
      ],
      correct: 2,
      explanation: 'Anchor Link ទៅកាន់ ID ជាក់លាក់ប្រើសញ្ញា # មុន ID នៅក្នុង href attribute (ឧទាហរណ៍: <a href="#info-section">)។'
    },
    {
      question: 'តើវាជាការអនុវត្តល្អបំផុតក្នុងការប្រើ \`target="_blank"\` សម្រាប់ Internal Link មែនទេ?',
      options: ['បាទ/ចាស', 'ទេ'],
      correct: 1,
      explanation: 'ទេ ជាទូទៅវាជាការអនុវត្តល្អបំផុតក្នុងការប្រើ \`target="_blank"\` សម្រាប់តែ External Link ដើម្បីរក្សាអ្នកប្រើប្រាស់នៅលើគេហទំព័ររបស់អ្នក។'
    },
    {
      question: 'តើ URL "pages/contact.html" ជាប្រភេទ URL អ្វី?',
      options: [
        'Full URL',
        'Absolute URL',
        'Relative URL',
        'Invalid URL'
      ],
      correct: 2,
      explanation: 'នេះគឺជា Relative URL ដែលបញ្ជាក់ទីតាំងឯកសារ Contact.html នៅក្នុង Sub-folder ឈ្មោះ "pages"។'
    },
    {
      question: 'តើ HTML Attribute មួយណាដែលបញ្ជាក់ពីរបៀបដែលឯកសារដែលបានភ្ជាប់នឹងបើក?',
      options: ['src', 'action', 'method', 'target'],
      correct: 3,
      explanation: 'target Attribute បញ្ជាក់ពីរបៀបដែលឯកសារដែលបានភ្ជាប់នឹងបើក (ឧទាហរណ៍: នៅក្នុង Tab ថ្មី)។'
    },
    {
      question: 'តើ Prefix អ្វីដែលប្រើសម្រាប់ Phone Link?',
      options: ['call:', 'phone:', 'tel:', 'dial:'],
      correct: 2,
      explanation: 'Prefix "tel:" ត្រូវបានប្រើសម្រាប់ Phone Link (ឧទាហរណ៍: <a href="tel:+85512345678">)។'
    },
    {
      question: 'តើការដាក់ \`id\` Attribute ទៅកាន់ Element គោលដៅ (target) សម្រាប់ Anchor Link ត្រូវតែប្លែក (unique) ក្នុងឯកសារមែនទេ?',
      options: ['បាទ/ចាស', 'ទេ'],
      correct: 0,
      explanation: 'បាទ/ចាស id Attribute ត្រូវតែប្លែក (unique) ក្នុងឯកសារ HTML ទាំងមូល។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់ឱ្យតំណភ្ជាប់បើកនៅក្នុង Frame ដើម (Parent Frame) តើអ្នកនឹងប្រើតម្លៃ \`target\` មួយណា?',
      options: ['_blank', '_self', '_top', '_parent'],
      correct: 3,
      explanation: 'target="_parent" ត្រូវបានប្រើដើម្បីបើកឯកសារនៅក្នុង Frame ដើម (Parent Frame)។'
    }
  ],
  lab: {
    task: 'បង្កើតឯកសារ HTML មួយដែលមានតំណភ្ជាប់ទៅ Google ដែលបើកក្នុង Tab ថ្មី និងតំណភ្ជាប់មួយទៀតទៅកាន់ផ្នែកមួយនៅក្នុងទំព័រតែមួយ។',
    solution: `<!DOCTYPE html>
<html>
<head>
    <title>លំហាត់ទី ៦</title>
</head>
<body>
    <h1>តំណភ្ជាប់</h1>
    <p>សូមចូលមើល <a href="https://www.google.com" target="_blank">Google</a> ។</p>
    <p><a href="#section-bottom">ទៅកាន់ផ្នែកខាងក្រោម</a></p>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <h2 id="section-bottom">ផ្នែកខាងក្រោម</h2>
    <p>នេះជាផ្នែកខាងក្រោមនៃទំព័រ។</p>
</body>
</html>`
  }
};
export default Lesson2_4;