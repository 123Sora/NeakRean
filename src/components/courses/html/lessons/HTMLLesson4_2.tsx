// src/components/lessons/Lesson4_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const Lesson4_2: LessonContent = {
  title: 'Multimedia (វីដេអូ និង អូឌីយ៉ូ)',
  objectives: [
    'អាចបង្កប់វីដេអូដោយប្រើ <video> Tag',
    'អាចបង្កប់អូឌីយ៉ូដោយប្រើ <audio> Tag',
    'ស្គាល់ controls, autoplay, loop, muted Attributes',
    'យល់ពីការប្រើ <source> Tag'
  ],
  content: `
# Multimedia (វីដេអូ និង អូឌីយ៉ូ) 🎬🎵

HTML5 បានធ្វើឱ្យវាកាន់តែងាយស្រួលក្នុងការបង្កប់មាតិកា Multimedia (ដូចជាវីដេអូ និងអូឌីយ៉ូ) ដោយផ្ទាល់ទៅក្នុងទំព័រគេហទំព័រ ដោយមិនចាំបាច់ប្រើ Plugins ខាងក្រៅដូចជា Flash នោះទេ។ នេះផ្តល់នូវបទពិសោធន៍អ្នកប្រើប្រាស់កាន់តែប្រសើរ និងភាពឆបគ្នាកាន់តែទូលំទូលាយ។

---

## 1. \`<video>\` Tag 🎞️

Tag \`<video>\` ត្រូវបានប្រើដើម្បី **បង្កប់វីដេអូ** ទៅក្នុងទំព័រ HTML។

* **\`src\` attribute:** (អាចប្រើបាន) បញ្ជាក់ផ្លូវទៅកាន់ឯកសារវីដេអូ។ ទោះជាយ៉ាងណាក៏ដោយ វាជាការល្អប្រសើរក្នុងការប្រើ Tag \`<source>\` នៅខាងក្នុង ដើម្បីផ្តល់ជម្រើស Format ច្រើន។
* **\`controls\` attribute:** បន្ថែម **controls** សម្រាប់វីដេអូ (Play/Pause, Volume, Fullscreen, Progress Bar, ល) ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់គ្រប់គ្រងការចាក់។
* **\`autoplay\` attribute:** ចាក់វីដេអូដោយស្វ័យប្រវត្តិនៅពេលទំព័រផ្ទុក។ (**ប្រយ័ត្ន!** អាចរំខានអ្នកប្រើប្រាស់)។ ជាធម្មតា browser ទំនើបៗត្រូវការ \`muted\` Attribute ជាមួយ \`autoplay\` ដើម្បីអនុញ្ញាតឱ្យវីដេអូចាក់ដោយស្វ័យប្រវត្តិ។
* **\`loop\` attribute:** ធ្វើឱ្យវីដេអូចាក់ម្តងហើយម្តងទៀតដោយគ្មានទីបញ្ចប់។
* **\`muted\` attribute:** បិទសំឡេងវីដេអូដោយស្វ័យប្រវត្តិ។ នេះមានសារៈសំខាន់បើប្រើ \`autoplay\` ព្រោះ Browser ជាច្រើនរារាំងការចាក់ស្វ័យប្រវត្តិដោយមានសំឡេង។
* **\`poster\` attribute:** បញ្ជាក់ URL របស់រូបភាពតូច (thumbnail) ដែលនឹងបង្ហាញមុនពេលវីដេអូចាប់ផ្តើមចាក់ ឬពេលវីដេអូកំពុងផ្ទុក។
* **\`width\` និង \`height\` attributes:** កំណត់ទំហំ (ទទឹង និងបណ្តោយ) របស់ Video Player ជា pixels ។

\`\`\`html
<video width="640" height="360" controls poster="video-thumbnail.jpg">
    <source src="myvideo.mp4" type="video/mp4">
    <source src="myvideo.webm" type="video/webm">
    <p>Browser របស់អ្នកមិនគាំទ្រ Tag វីដេអូទេ។ សូមសាកល្បង Browser ផ្សេង។</p>
</video>
\`\`\`

---

## 2. \`<audio>\` Tag 🔊

Tag \`<audio>\` ត្រូវបានប្រើដើម្បី **បង្កប់ឯកសារអូឌីយ៉ូ** ទៅក្នុងទំព័រ HTML។ វាមាន attributes ស្រដៀងទៅនឹង Tag \`<video>\`។

* **\`src\` attribute:** (អាចប្រើបាន) បញ្ជាក់ផ្លូវទៅកាន់ឯកសារអូឌីយ៉ូ។ វាជាការល្អប្រសើរក្នុងការប្រើ Tag \`<source>\` នៅខាងក្នុង។
* **\`controls\` attribute:** បន្ថែម controls សម្រាប់អូឌីយ៉ូ (Play/Pause, Volume, Progress Bar, ល)។
* **\`autoplay\` attribute:** ចាក់អូឌីយ៉ូដោយស្វ័យប្រវត្តិនៅពេលទំព័រផ្ទុក។ (**ប្រយ័ត្ន!** អាចរំខានអ្នកប្រើប្រាស់យ៉ាងខ្លាំង)។ Browser ទំនើបៗជាច្រើនរារាំងការចាក់អូឌីយ៉ូដោយស្វ័យប្រវត្តិដោយគ្មានការអនុញ្ញាតពីអ្នកប្រើប្រាស់។
* **\`loop\` attribute:** ធ្វើឱ្យអូឌីយ៉ូចាក់ម្តងហើយម្តងទៀត។
* **\`muted\` attribute:** បិទសំឡេងអូឌីយ៉ូដោយស្វ័យប្រវត្តិ។

\`\`\`html
<audio controls loop>
    <source src="myaudio.mp3" type="audio/mpeg">
    <source src="myaudio.ogg" type="audio/ogg">
    <p>Browser របស់អ្នកមិនគាំទ្រ Tag អូឌីយ៉ូទេ។</p>
</audio>
\`\`\`

---

## 3. \`<source>\` Tag 🌐

Tag \`<source>\` ត្រូវបានប្រើនៅខាងក្នុង \`<video>\` និង \`<audio>\` ដើម្បីបញ្ជាក់ **ឯកសារមេឌៀជាច្រើន (multiple media resources)** សម្រាប់ browser ជ្រើសរើស។ នេះអនុញ្ញាតឱ្យអ្នកផ្តល់ Format ផ្សេងៗគ្នានៃឯកសារមេឌៀ (ឧទាហរណ៍: MP4, WebM, Ogg សម្រាប់វីដេអូ; MP3, OGG, WAV សម្រាប់អូឌីយ៉ូ) ដើម្បីធានាបាននូវភាពឆបគ្នាជាមួយ browser ផ្សេងៗគ្នា និងឧបករណ៍ផ្សេងៗគ្នា។ Browser នឹងជ្រើសរើស Format ដំបូងដែលវាគាំទ្រ។

* **\`src\` attribute:** ផ្លូវទៅកាន់ឯកសារមេឌៀ។
* **\`type\` attribute:** ប្រភេទ MIME (Media Type) នៃឯកសារមេឌៀ (ឧទាហរណ៍: \`"video/mp4"\`, \`"audio/mpeg"\`, \`"audio/ogg"\`)។ ការបញ្ជាក់ \`type\` ជួយ Browser សម្រេចចិត្តយ៉ាងឆាប់រហ័សថាតើវាអាចចាក់ File នោះបានឬអត់ ដោយមិនចាំបាច់ទាញយកវាទាំងស្រុង។

\`\`\`html
<video controls width="600">
  <source src="clip.mp4" type="video/mp4">
  <source src="clip.ogg" type="video/ogg">
  <p>Browser របស់អ្នកមិនគាំទ្រវីដេអូនេះទេ។</p>
</video>

<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.wav" type="audio/wav">
  <p>Browser របស់អ្នកមិនគាំទ្រអូឌីយ៉ូនេះទេ។</p>
</audio>
\`\`\`

---

> **ចំណាំសំខាន់:** 🔊 ការប្រើប្រាស់ \`autoplay\` អាចរំខានអ្នកប្រើប្រាស់ និងត្រូវបាន Browser ជាច្រើនរារាំងដោយ Default ជាពិសេសសម្រាប់អូឌីយ៉ូ ឬវីដេអូដែលមានសំឡេង។ សម្រាប់វីដេអូដែលចាក់ដោយស្វ័យប្រវត្តិ អ្នកគួរតែបន្ថែម \`muted\` attribute ផងដែរ។ តែងតែផ្តល់ \`<source>\` ច្រើនប្រភេទដើម្បីធានាភាពឆបគ្នានៃមេឌៀរបស់អ្នកលើ Browser និងឧបករណ៍ផ្សេងៗគ្នា។ អត្ថបទដែលដាក់នៅចន្លោះ Tag \`<video>\` ឬ \`<audio>\` (ឧទាហរណ៍ "Your browser does not support...") នឹងបង្ហាញតែប៉ុណ្ណោះប្រសិនបើ Browser មិនគាំទ្រ Tag នោះ។

  `,
  examples: [
    `<video controls width="300" src="video.mp4"></video>`,
    `<audio controls src="audio.mp3"></audio>`,
    `<video controls><source src="myvideo.webm" type="video/webm"></video>`,
    `<audio autoplay muted loop><source src="background.mp3" type="audio/mpeg"></audio>`
  ],
  quiz: [
    {
      question: 'តើ Attribute មួយណាដែលបង្ហាញ controls សម្រាប់វីដេអូ?',
      options: ['play', 'controls', 'autoplay', 'loop'],
      correct: 1,
      explanation: '`controls` Attribute បង្ហាញ controls (Play/Pause, Volume, Fullscreen, ល) សម្រាប់វីដេអូ។'
    },
    {
      question: 'តើ Tag មួយណាប្រើដើម្បីផ្តល់ Format មេឌៀច្រើនសម្រាប់ Browser ជ្រើសរើស?',
      options: ['<media>', '<source>', '<format>', '<type>'],
      correct: 1,
      explanation: '`<source>` Tag ត្រូវបានប្រើនៅខាងក្នុង `<video>` និង `<audio>` ដើម្បីបញ្ជាក់ឯកសារមេឌៀជាច្រើនប្រភេទ។'
    },
    {
      question: 'តើ Attribute មួយណាដែលធ្វើឱ្យវីដេអូចាក់ដោយស្វ័យប្រវត្តិនៅពេលទំព័រផ្ទុក?',
      options: ['playonload', 'start', 'autoplay', 'run'],
      correct: 2,
      explanation: '`autoplay` Attribute ធ្វើឱ្យវីដេអូ ឬអូឌីយ៉ូចាក់ដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'ហេតុអ្វីបានជាវាល្អបំផុតក្នុងការប្រើ \`<source>\` Tag នៅខាងក្នុង \`<video>\` ឬ \`<audio>\` ជំនួសឱ្យ \`src\` Attribute តែមួយ?',
      options: [
        'ដើម្បីកាត់បន្ថយទំហំឯកសារ',
        'ដើម្បីបង្កើនសុវត្ថិភាព',
        'ដើម្បីធានាភាពឆបគ្នាជាមួយ Browser និង Format ជាច្រើន',
        'ដើម្បីធ្វើឱ្យមេឌៀលាក់'
      ],
      correct: 2,
      explanation: 'ការប្រើប្រាស់ `<source>` Tag ច្រើនអនុញ្ញាតឱ្យអ្នកផ្តល់ Format ផ្សេងៗគ្នា ដែលធានាថា Browser អាចចាក់មេឌៀរបស់អ្នកបាន ទោះបីជាវាមិនគាំទ្រ Format ដំបូងក៏ដោយ។'
    },
    {
      question: 'តើ Attribute មួយណាដែលធ្វើឱ្យវីដេអូចាក់ម្តងហើយម្តងទៀត?',
      options: ['repeat', 'loop', 'again', 'replay'],
      correct: 1,
      explanation: '`loop` Attribute ធ្វើឱ្យមេឌៀ (វីដេអូ ឬអូឌីយ៉ូ) ចាក់ម្តងហើយម្តងទៀត។'
    },
    {
      question: 'តើ Attribute \`muted\` ប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'កាត់បន្ថយគុណភាពសំឡេង',
        'បិទសំឡេងមេឌៀដោយស្វ័យប្រវត្តិ',
        'បង្កើនសំឡេង',
        'កំណត់កម្រិតសំឡេងដំបូង'
      ],
      correct: 1,
      explanation: '`muted` Attribute បិទសំឡេងមេឌៀដោយស្វ័យប្រវត្តិ ដែលជាទូទៅតម្រូវឱ្យ Browser អនុញ្ញាត `autoplay`។'
    },
    {
      question: 'តើ Attribute \`poster\` របស់ \`<video>\` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញអត្ថបទលើវីដេអូ',
        'បញ្ជាក់រូបភាពតូចដែលបង្ហាញមុនពេលវីដេអូចាក់',
        'បង្ហាញ Banner ផ្សព្វផ្សាយ',
        'កំណត់ផ្ទៃខាងក្រោយវីដេអូ'
      ],
      correct: 1,
      explanation: '`poster` Attribute បញ្ជាក់ URL របស់រូបភាពតូច (thumbnail) ដែលបង្ហាញមុនពេលវីដេអូចាប់ផ្តើមចាក់។'
    },
    {
      question: 'តើ Tag មួយណាប្រើដើម្បីបង្កប់ឯកសារអូឌីយ៉ូ?',
      options: ['<sound>', '<music>', '<audio>', '<mp3>'],
      correct: 2,
      explanation: '`<audio>` Tag ត្រូវបានប្រើដើម្បីបង្កប់ឯកសារអូឌីយ៉ូទៅក្នុងទំព័រ HTML។'
    },
    {
      question: 'ប្រសិនបើ Browser មិនគាំទ្រ Tag \`<video>\` តើអ្វីនឹងបង្ហាញដល់អ្នកប្រើប្រាស់?',
      options: [
        'គ្មានអ្វីទាំងអស់',
        'សារកំហុសដោយស្វ័យប្រវត្តិពី Browser',
        'អត្ថបទដែលបានដាក់នៅចន្លោះ Tag <video>...',
        'រូបភាពទទេ'
      ],
      correct: 2,
      explanation: 'អត្ថបទដែលដាក់នៅចន្លោះ Tag `<video>` (ឬ `<audio>`) នឹងបង្ហាញតែប៉ុណ្ណោះប្រសិនបើ Browser មិនគាំទ្រ Tag នោះ។'
    },
    {
      question: 'តើ Attribute \`type\` របស់ \`<source>\` ប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'កំណត់ប្រភេទ File សម្រាប់ Styling',
        'បញ្ជាក់ប្រភេទ MIME នៃឯកសារមេឌៀ',
        'កំណត់ប្រភេទនៃ Player Controls',
        'បញ្ជាក់ថាតើ File ជា Audio ឬ Video'
      ],
      correct: 1,
      explanation: '`type` Attribute បញ្ជាក់ប្រភេទ MIME នៃឯកសារមេឌៀ ដែលជួយ Browser សម្រេចចិត្តថាតើវាអាចចាក់ File នោះបានឬអត់។'
    },
    {
      question: 'តើការប្រើប្រាស់ \`autoplay\` ដោយគ្មាន \`muted\` អាចមានផលប៉ះពាល់អ្វីលើ Browser ទំនើបៗ?',
      options: [
        'បង្កើនល្បឿនផ្ទុកទំព័រ',
        'ធ្វើឱ្យវីដេអូមានគុណភាពខ្ពស់',
        'Browser អាចនឹងរារាំងការចាក់ដោយស្វ័យប្រវត្តិ',
        'ធ្វើឱ្យវីដេអូលេងដោយគ្មាន Controls'
      ],
      correct: 2,
      explanation: 'Browser ទំនើបៗជាច្រើនរារាំងការចាក់ស្វ័យប្រវត្តិដែលមានសំឡេង ដើម្បីកុំឱ្យរំខានអ្នកប្រើប្រាស់។'
    },
    {
      question: 'តើ Attribute មួយណាដែលកំណត់ទទឹង និងបណ្តោយរបស់ Video Player?',
      options: ['size', 'dimension', 'width និង height', 'scale'],
      correct: 2,
      explanation: '`width` និង `height` Attributes ត្រូវបានប្រើដើម្បីកំណត់ទំហំ (ទទឹង និងបណ្តោយ) របស់ Video Player។'
    },
    {
      question: 'តើ HTML5 បានធ្វើឱ្យការបង្កប់មេឌៀមានភាពងាយស្រួលដោយរបៀបណា?',
      options: [
        'ដោយតម្រូវឱ្យប្រើ Flash Plugins',
        'ដោយអនុញ្ញាតឱ្យបង្កប់ដោយផ្ទាល់ដោយគ្មាន Plugins',
        'ដោយលុបចោលការគាំទ្រវីដេអូ',
        'ដោយកំណត់ត្រឹមតែ Format មួយចំនួនតូច'
      ],
      correct: 1,
      explanation: 'HTML5 អនុញ្ញាតឱ្យបង្កប់មាតិកា Multimedia ដោយផ្ទាល់ ដោយមិនចាំបាច់ប្រើ Plugins ខាងក្រៅទៀតទេ។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់ឱ្យអូឌីយ៉ូ background លេងដោយស្វ័យប្រវត្តិនៅពេលទំព័រផ្ទុក ហើយអ្នកមិនចង់ឱ្យអ្នកប្រើប្រាស់ឮវាភ្លាមៗ តើ Attributes ពីរណាដែលអ្នកគួរប្រើ?',
      options: [
        'controls, loop',
        'autoplay, controls',
        'autoplay, muted',
        'loop, src'
      ],
      correct: 2,
      explanation: '`autoplay` នឹងធ្វើឱ្យវាលេងដោយស្វ័យប្រវត្តិ ហើយ `muted` នឹងបិទសំឡេង ដែលជួយឱ្យវាដំណើរការលើ Browser ទំនើបៗដោយមិនរំខាន។'
    }
  ], // Removed the trailing comma here
  lab: {
    task: 'បង្កើតឯកសារ HTML មួយដែលមានវីដេអូមួយ (ប្រើ placeholder video URL) ដែលមាន controls និងអូឌីយ៉ូមួយ (ប្រើ placeholder audio URL) ដែលមាន controls។ ត្រូវប្រាកដថាវីដេអូមានរូបភាព poster ផង។',
    solution: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>លំហាត់ទី ១២ - Multimedia</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        h1 {
            color: #0056b3;
        }
        video, audio {
            display: block; /* Makes them block-level elements */
            margin-bottom: 20px;
            max-width: 100%; /* Ensures responsiveness */
            height: auto;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <h1>វីដេអូគំរូ</h1>
    <video width="640" height="360" controls poster="https://via.placeholder.com/640x360?text=Video+Thumbnail">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
        <p>Browser របស់អ្នកមិនគាំទ្រ Tag វីដេអូទេ។</p>
    </video>

    <h1>អូឌីយ៉ូគំរូ</h1>
    <audio controls>
        <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
        <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
        <p>Browser របស់អ្នកមិនគាំទ្រ Tag អូឌីយ៉ូទេ។</p>
    </audio>
</body>
</html>`
  }
};
export default Lesson4_2;