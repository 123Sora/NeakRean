// src/components/lessons/Lesson1_1.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const Lesson1_1: LessonContent = {
  title: 'ណែនាំអំពី HTML',
  objectives: [
    'យល់ពីអ្វីទៅជា HTML និងមុខងាររបស់វា',
    'ស្គាល់ឧបករណ៍ដែលត្រូវការសម្រាប់បង្កើតគេហទំព័រ',
    'អាចរក្សាទុកឯកសារ HTML បានត្រឹមត្រូវ',
    'យល់ពីប្រវត្តិនិងសារៈសំខាន់របស់ HTML'
  ],
  content: `
# ណែនាំអំពី HTML 🌐

---

## 1. អ្វីទៅជា HTML? 🤔

**HTML** ឬ **HyperText Markup Language** គឺជា **ភាសាសម្គាល់ (Markup Language)** ដែលប្រើសម្រាប់បង្កើត **រចនាសម្ព័ន្ធ (structure)** នៃគេហទំព័រ។ វាមិនមែនជាភាសាកម្មវិធី (Programming Language) ទេ ប៉ុន្តែជាភាសាដែលប្រើកំណត់រចនាសម្ព័ន្ធនិងមាតិកានៃគេហទំព័រ។

### ចំណុចសំខាន់គួរចងចាំ:
* **HTML ជាមូលដ្ឋានគ្រឹះ**នៃគេហទំព័រទាំងអស់។
* វាប្រើ **Tags** ដើម្បីកំណត់ធាតុផ្សេងៗ (ឧទាហរណ៍: \`<p>\` សម្រាប់កថាខណ្ឌ, \`<h1>\` សម្រាប់ចំណងជើងធំ)។
* គេហទំព័រទាំងអស់ដែលអ្នកបានមើលមានរចនាសម្ព័ន្ធ HTML។

---

## 2. តើ HTML ប្រើសម្រាប់អ្វី? 💡

HTML ប្រើសម្រាប់:
* **បង្កើតរចនាសម្ព័ន្ធគេហទំព័រ:** កំណត់ចំណងជើង, កថាខណ្ឌ, បញ្ជីរ, តារាង ជាដើម។
* **បន្ថែមតំណភ្ជាប់ (Links):** ភ្ជាប់ពីទំព័រមួយទៅទំព័រមួយទៀត ឬទៅកាន់គេហទំព័រខាងក្រៅ។
* **បង្កប់មេឌៀ (Embed Media):** បញ្ចូលរូបភាព, វីដេអូ, អូឌីយ៉ូ ទៅក្នុងទំព័រ។
* **បង្កើតទម្រង់ (Forms):** សម្រាប់ទទួលការបញ្ចូលទិន្នន័យពីអ្នកប្រើប្រាស់ (ឧទាហរណ៍: Form ចុះឈ្មោះ, Form ទំនាក់ទំនង)។
* **តារាង (Tables) និងការរៀបចំទិន្នន័យ:** រៀបចំទិន្នន័យជាជួរឈរ និងជួរដេក។

---

## 3. ឧបករណ៍ដែលត្រូវការ 🛠️

ដើម្បីចាប់ផ្តើមសរសេរ HTML អ្នកត្រូវការឧបករណ៍ពីរយ៉ាងសំខាន់:

### 3.1. Text Editor (កម្មវិធីសម្រាប់សរសេរកូដ)
* **VS Code** (Visual Studio Code): ណែនាំបំផុតព្រោះវាមានមុខងារច្រើន និងងាយស្រួលប្រើ។
* Sublime Text
* Notepad++ (សម្រាប់ Windows)
* Atom

### 3.2. Web Browser (កម្មវិធីរុករកគេហទំព័រ)
* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

### 3.3. ចំណេះដឹងមូលដ្ឋាន (Basic Knowledge)
* ការប្រើប្រាស់កុំព្យូទ័រមូលដ្ឋាន (បើក/បិទ File, Folder)
* ការយល់ដឹងអំពីឯកសារនិងថតឯកសារ (Files and Folders)

---

## 4. របៀបរក្សាទុកឯកសារ HTML 💾

ឯកសារ HTML ត្រូវរក្សាទុកជាមួយនឹង **extension (.html)** ដើម្បីឱ្យ Web Browser អាចស្គាល់និងបង្ហាញវាបានត្រឹមត្រូវ។

* **\`.html\`** (ត្រូវបានណែនាំ និងប្រើប្រាស់ទូទៅ)
* **\`.htm\`** (ជា extension ចាស់ ប៉ុន្តែនៅតែអាចប្រើបាន)

### ឧទាហរណ៍នៃការដាក់ឈ្មោះឯកសារ:
* \`index.html\` (ជាទូទៅ ឯកសារទំព័រដើមគេហទំព័រ)
* \`about.html\`
* \`contact.html\`

### ការណែនាំសម្រាប់ការដាក់ឈ្មោះឯកសារ:
* ប្រើ **អក្សរពីអង់គ្លេសតូចទាំងអស់ (lowercase)** ។
* **មិនប្រើដកឃ្លា (spaces)** នៅក្នុងឈ្មោះឯកសារ។
* ប្រើ **hyphen (\`-\`)** ឬ **underscore (\`_\`)** ជំនួសដកឃ្លា (ឧទាហរណ៍: \`my-page.html\` ឬ \`my_page.html\`) ។
* ឯកសារដំបូង (ទំព័រដើម) នៃគេហទំព័រគួរដាក់ឈ្មោះ **\`index.html\`** ។

---

## 5. ដំឡើង និងរៀបចំ VS Code សម្រាប់ HTML 🚀

VS Code គឺជា Text Editor ដ៏មានឥទ្ធិពល និងពេញនិយមបំផុតសម្រាប់អ្នកអភិវឌ្ឍន៍គេហទំព័រ។

### 5.1. របៀបដំឡើង VS Code:
1.  **ទាញយក VS Code:** ចូលទៅកាន់គេហទទំព័រផ្លូវការរបស់ VS Code: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
2.  ជ្រើសរើស Version សម្រាប់ប្រព័ន្ធប្រតិបត្តិការរបស់អ្នក (Windows, macOS, Linux) ហើយទាញយក។
3.  **ដំណើរការ File ដែលបានទាញយក:** អនុវត្តតាមការណែនាំនៅលើអេក្រង់ដើម្បីបញ្ចប់ការដំឡើង។ ត្រូវប្រាកដថាអ្នកធីកប្រអប់ "Add to PATH" (សម្រាប់ Windows) ដើម្បីងាយស្រួលប្រើ Command Line នៅពេលក្រោយ។

### 5.2. Extension សំខាន់ៗសម្រាប់ VS Code:
Extensions បន្ថែមមុខងារថ្មីៗ និងធ្វើឱ្យការសរសេរកូដកាន់តែងាយស្រួល។
1.  **បើក VS Code Extension Marketplace:** ចុចលើរូបសញ្ញា Extensions នៅរបារចំហៀងខាងឆ្វេង (មើលទៅដូចជាប្រអប់បួនជ្រុង) ឬចុច \`Ctrl+Shift+X\`។
2.  **ស្វែងរក និងដំឡើង Extensions ខាងក្រោម:**
    * **Live Server:** អនុញ្ញាតឱ្យអ្នកមើលការផ្លាស់ប្តូរ HTML/CSS/JS របស់អ្នកភ្លាមៗនៅក្នុង Browser ដោយមិនចាំបាច់ Refresh ទំព័រដោយដៃ។
        * ស្វែងរក: "Live Server" ដោយ Ritwick Dey
        * ចុច "Install"។
    * **Prettier - Code Formatter:** ជួយរៀបចំកូដរបស់អ្នកឱ្យមានរបៀបរៀបរយ និងស្របគ្នាដោយស្វ័យប្រវត្តិ។
        * ស្វែងរក: "Prettier - Code Formatter" ដោយ Prettier
        * ចុច "Install"។
    * **HTML CSS Support:** ផ្តល់នូវការណែនាំ និងការបំពេញដោយស្វ័យប្រវត្តិសម្រាប់ HTML Tags, Classes, និង IDs។
        * ស្វែងរក: "HTML CSS Support" ដោយ EMM
        * ចុច "Install"។
    * **Auto Rename Tag:** នៅពេលអ្នកប្តូរឈ្មោះ Opening Tag វានឹងប្តូរឈ្មោះ Closing Tag ដោយស្វ័យប្រវត្តិ។
        * ស្វែងរក: "Auto Rename Tag" ដោយ Jun Han
        * ចុច "Install"។

### 5.3. ការកំណត់ VS Code (Settings):
ការកំណត់ VS Code ឱ្យបានត្រឹមត្រូវអាចជួយបង្កើនល្បឿនការងាររបស់អ្នក។
1.  **បើក Settings:** ចុច \`Ctrl+,\` (Comma) នៅលើ Windows/Linux ឬ \`Cmd+,\` នៅលើ macOS។
2.  **ស្វែងរក "Auto Save":** នៅក្នុង Search Bar វាយ "Auto Save"។
3.  **កំណត់ Auto Save:** ជ្រើសរើស **"afterDelay"** ពី Dropdown Menu។ នេះនឹងរក្សាទុកការផ្លាស់ប្តូររបស់អ្នកដោយស្វ័យប្រវត្តិបន្ទាប់ពីអ្នកឈប់វាយមួយរយៈ។
4.  **ស្វែងរក "Default Formatter":** វាយ "Default Formatter" នៅក្នុង Search Bar។
5.  **កំណត់ Default Formatter:** ជ្រើសរើស **"Prettier - Code Formatter"** (esbenp.prettier-vscode) ពី Dropdown Menu។
6.  **បើក "Format On Save":** ស្វែងរក "Format On Save" ហើយធីកប្រអប់។ នេះនឹងធ្វើទ្រង់ទ្រាយកូដរបស់អ្នកដោយស្វ័យប្រវត្តិរាល់ពេលអ្នករក្សាទុក File។

---

> **គន្លឹះ:** 🌟 ចាប់ផ្តើមអនុវត្តភ្លាមៗបន្ទាប់ពីរៀនមេរៀននីមួយៗ! ការអនុវត្តជាក់ស្តែងនឹងជួយអ្នកឱ្យយល់កាន់តែច្បាស់។

  `,
  examples: [
    `<!DOCTYPE html>
<html>
<head>
    <title>ទំព័រដំបូងរបស់ខ្ញុំ</title>
</head>
<body>
    <h1>ស្វាគមន៍មកកាន់គេហទំព័របស់ខ្ញុំ!</h1>
    <p>នេះជាកថាខណ្ឌដំបូងរបស់ខ្ញុំ។</p>
</body>
</html>`,
    `<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    Hello World!
</body>
</html>`
  ],
  quiz: [
    {
      question: 'HTML មានន័យថាម៉េច?',
      options: [
        'Hyperlink Text Markup Language',
        'HyperText Markup Language',
        'High Tech Modern Language',
        'Home Tool Markup Language'
      ],
      correct: 1,
      explanation: 'HTML មានន័យថា HyperText Markup Language ដែលជាភាសាសម្គាល់សម្រាប់បង្កើតគេហទំព័រ។'
    },
    {
      question: 'extension អ្វីដែលប្រើសម្រាប់ឯកសារ HTML?',
      options: ['.txt', '.doc', '.html', '.css'],
      correct: 2,
      explanation: 'ឯកសារ HTML ប្រើ extension .html ឬ .htm'
    },
    {
      question: 'តើ HTML ជាភាសាកម្មវិធី (Programming Language) មែនទេ?',
      options: ['បាទ/ចាស', 'ទេ'],
      correct: 1,
      explanation: 'ទេ, HTML គឺជាភាសាសម្គាល់ (Markup Language) មិនមែនជាភាសាកម្មវិធីទេ។'
    },
    {
      question: 'តើឧបករណ៍មួយណាដែលត្រូវបានណែនាំបំផុតសម្រាប់សរសេរកូដ HTML?',
      options: ['Microsoft Word', 'VS Code', 'Paint', 'Excel'],
      correct: 1,
      explanation: 'VS Code (Visual Studio Code) ត្រូវបានណែនាំយ៉ាងខ្លាំងសម្រាប់សរសេរកូដ HTML ដោយសារមុខងាររបស់វា។'
    },
    {
      question: 'តើឯកសារទំព័រដើម (Homepage) របស់គេហទំព័រជាទូទៅគួរដាក់ឈ្មោះអ្វី?',
      options: ['main.html', 'homepage.html', 'index.html', 'start.html'],
      correct: 2,
      explanation: 'ឯកសារដំបូង (ទំព័រដើម) នៃគេហទំព័រជាទូទៅគួរតែដាក់ឈ្មោះថា index.html។'
    },
    {
      question: 'តើមួយណាជាការអនុវត្តល្អបំផុតសម្រាប់ការដាក់ឈ្មោះឯកសារ HTML?',
      options: [
        'My Home Page.html',
        'my-home-page.html',
        'MYHOMEPAGE.HTML',
        'my home page.html'
      ],
      correct: 1,
      explanation: 'ការប្រើអក្សរតូចទាំងអស់ និង hyphen (-) ជំនួសដកឃ្លា (my-home-page.html) គឺជាការអនុវត្តល្អបំផុត។'
    },
     {
      question: 'តើ Extension មួយណាដែលជួយឱ្យអ្នកមើលការផ្លាស់ប្តូរ HTML របស់អ្នកភ្លាមៗនៅក្នុង Browser?',
      options: ['Prettier', 'Auto Rename Tag', 'Live Server', 'HTML CSS Support'],
      correct: 2,
      explanation: 'Live Server Extension អនុញ្ញាតឱ្យអ្នកមើលការផ្លាស់ប្តូរ HTML/CSS/JS របស់អ្នកភ្លាមៗនៅក្នុង Browser ដោយមិនចាំបាច់ Refresh ទំព័រដោយដៃ។'
    },
    {
      question: 'តើការកំណត់ "Auto Save" ទៅ "afterDelay" នៅក្នុង VS Code មានន័យដូចម្តេច?',
      options: [
        'រក្សាទុកដោយដៃរាល់ពេល',
        'រក្សាទុកដោយស្វ័យប្រវត្តិបន្ទាប់ពីអ្នកឈប់វាយមួយរយៈ',
        'រក្សាទុកតែនៅពេលបិទ VS Code',
        'រក្សាទុកតែនៅពេលអ្នកបើក File'
      ],
      correct: 1,
      explanation: 'ការកំណត់ "Auto Save" ទៅ "afterDelay" នឹងរក្សាទុកការផ្លាស់ប្តូររបស់អ្នកដោយស្វ័យប្រវត្តិបន្ទាប់ពីអ្នកឈប់វាយមួយរយៈ។'
    }

  ],
  lab: {
    task: 'បង្កើតឯកសារ HTML ដំបូងរបស់អ្នកដែលមានចំណងជើង "គេហទំព័របស្់ខ្ញុំ" និងកថាខណ្ឌមួយណែនាំខ្លួនអ្នក។',
    solution: `<!DOCTYPE html>
<html>
<head>
    <title>គេហទំព័របស់ខ្ញុំ</title>
</head>
<body>
    <h1>ស្វាគមន៍មកកាន់គេហទំព័របស់ខ្ញុំ</h1>
    <p>ខ្ញុំឈ្មោះ [ឈ្មោះរបស់អ្នក] ហើយនេះជាគេហទំព័រដំបូងរបស់ខ្ញុំ។ ខ្ញុំកំពុងរៀន HTML ដើម្បីបង្កើតគេហទំព័រផ្ទាល់ខ្លួន។</p>
</body>
</html>`
  }
};

export default Lesson1_1;