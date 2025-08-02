import type { LessonContent } from '../../../../types/LessonTypes';

// CSS Lesson 1.4: Content about CSS Comments
const CSSLesson1_4Content: LessonContent = {
  title: 'CSS Comments (ការដាក់ Comment)',
  objectives: [
    'យល់ពីសារៈសំខាន់នៃ Comment ក្នុង CSS',
    'រៀនរបៀបសរសេរ Comment ក្នុង CSS',
    'ប្រើ Comment ដើម្បីពន្យល់កូដឱ្យច្បាស់',
    'ប្រើ Comment ដើម្បីបិទកូដបណ្តោះអាសន្ន',
    'រៀបចំកូដ CSS ឱ្យមានសណ្តាប់ធ្នាប់ដោយ Comment',
  ],
  content: `
# CSS Comments (ការដាក់ Comment) 💬

CSS Comments គឺជាផ្នែកនៃកូដដែល Browser មិនអនុវត្ត។ វាត្រូវបានប្រើដើម្បីពន្យល់ រៀបចំ ឬបិទកូដ CSS បណ្តោះអាសន្ន ដើម្បីជួយអ្នកសរសេរកូដ និងអ្នកផ្សេងទៀតឱ្យយល់កូដបានស្រួល។

---

## 1. ហេតុអ្វីត្រូវប្រើ Comment? 🤔

- **ពន្យល់កូដ**: ពន្យល់ថាកូដនីមួយៗធ្វើអ្វី ដើម្បីងាយស្រួលអាន។
- **បិទកូដ (Debugging)**: បិទ Rule ឬ Property បណ្តោះអាសន្ន ដើម្បី test ឬស្វែងរកកំហុស។
- **រៀបចំកូដ**: បែងចែក Stylesheet ជាផ្នែកៗ ដើម្បីងាយស្រួលគ្រប់គ្រង។

---

## 2. របៀបសរសេរ Comment ✍️

Comment ក្នុង CSS ចាប់ផ្តើមដោយ \`/*\` និងបញ្ចប់ដោយ \`*/\`។ វាអាចជា **Single-line** ឬ **Multi-line**។

### 2.1 Single-line Comment
\`\`\`css
/* កំណត់ពណ៌ផ្ទៃខាងក្រោយសម្រាប់ body */
body {
  background-color: #f5f5f5;
}
\`\`\`

### 2.2 Multi-line Comment
\`\`\`css
/*
  កំណត់រចនាប័ទ្មសម្រាប់ចំណងជើង
  ប្រើសម្រាប់ធ្វើឱ្យអក្សរធំ និងនៅកណ្តាល
*/
h1 {
  font-size: 2em;
  text-align: center;
}
\`\`\`

---

## 3. ការប្រើ Comment ក្នុងស្ថានភាពផ្សេងៗ 🌟

### 3.1 ពន្យល់ Rule Set
\`\`\`css
/* កំណត់រចនាប័ទ្មសម្រាប់ Header */
header {
  background-color: #004aad; /* ពណ៌ខៀវសមុទ្រ */
  color: white; /* អក្សរពណ៌ស */
  padding: 15px; /* ចន្លោះខាងក្នុង */
}
\`\`\`

### 3.2 បិទកូដបណ្តោះអាសន្ន
\`\`\`css
p {
  color: #333; /* ពណ៌អក្សរប្រផេះ */
  /* font-size: 18px; */ /* បិទ Property នេះសម្រាប់សាកល្បង */
  line-height: 1.6; /* ចន្លោះបន្ទាត់ */
}
\`\`\`

### 3.3 រៀបចំ Stylesheet
\`\`\`css
/* ============================= */
/* ផ្នែកទូទៅ (Global Styles) */
/* ============================= */
body {
  font-family: Arial, sans-serif;
  margin: 0;
}

/* ============================= */
/* ផ្នែកបឋមកថា (Header)      */
/* ============================= */
header {
  background-color: #333;
  color: white;
}
\`\`\`

> **recommendation**: ប្រើ Comment ដើម្បីធ្វើឱ្យកូដច្បាស់លាស់ និងងាយស្រួលថែទាំ។ កុំប្រើ Comment ច្រើនហួសហេតុ ព្រោះវាអាចធ្វើឱ្យ Stylesheet មើលទៅរញ៉េរញ៉ៃ។
`,
  examples: [
    `
### ឧទាហរណ៍៖ ទំព័រអំពីសម្លៀកបំពាក់បុរាណខ្មែរ 👘

នេះជាឧទាហរណ៍ដែលបង្ហាញពីការប្រើ Comment ដើម្បីពន្យល់ និងរៀបចំ CSS ក្នុងទំព័រអំពីសម្លៀកបំពាក់បុរាណខ្មែរ។

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>សម្លៀកបំពាក់បុរាណខ្មែរ</title>
  <style>
    /* ============================= */
    /* ផ្នែកទូទៅ (Global Styles) */
    /* ============================= */
    body {
      font-family: Arial, sans-serif; /* កំណត់ Font */
      background-color: #f8f9fa; /* ផ្ទៃខាងក្រោយប្រផេះស្រាល */
      margin: 20px; /* ចន្លោះខាងក្រៅ */
    }

    /* ============================= */
    /* ផ្នែកចំណងជើង (Header)    */
    /* ============================= */
    h1 {
      color: #b71c1c; /* ពណ៌ក្រហមបុរាណ */
      text-align: center; /* តម្រឹមកណ្តាល */
      font-size: 2.2em; /* ទំហំអក្សរ */
    }

    /* ============================= */
    /* ផ្នែកកថាខណ្ឌ (Paragraph)   */
    /* ============================= */
    .clothing {
      background-color: #fff3e0; /* ផ្ទៃខាងក្រោយក្រហមស្រាល */
      padding: 15px; /* ចន្លោះខាងក្នុង */
      border: 1px solid #ff9800; /* ស៊ុមក្រហម */
      border-radius: 5px; /* ជ្រុងមូល */
      /* margin: 10px; */ /* បិទ Property នេះសម្រាប់សាកល្បង */
    }
  </style>
</head>
<body>
  <h1>សម្លៀកបំពាក់បុរាណខ្មែរ</h1>
  <p class="clothing">សំពត់ហូលគឺជាសម្លៀកបំពាក់បុរាណដ៏ស្រស់ស្អាត។</p>
  <p class="clothing">អាវក្រម៉ាគឺជាសម្លៀកបំពាក់ដែលគេចូលចិត្តសម្រាប់ពិធី។</p>
</body>
</html>
\`\`\`

**លទ្ធផល**:
- \`<body>\` មានផ្ទៃខាងក្រោយប្រផេះស្រាល និង Font Arial។
- \`<h1>\` មានអក្សរពណ៌ក្រហម នៅកណ្តាល។
- Paragraphs ដែលមាន \`class="clothing"\` មានផ្ទៃខាងក្រោយក្រហមស្រាល និងស៊ុមក្រហម។
`,
  ],
  quiz: [
    {
      question: 'តើ Comment ក្នុង CSS ចាប់ផ្តើមដោយអ្វី?',
      options: ['//', '/*', '#', '<!--'],
      correct: 1,
      explanation: 'Comment ក្នុង CSS ចាប់ផ្តើមដោយ `/*`។'
    },
    {
      question: 'តើ Comment ក្នុង CSS បញ្ចប់ដោយអ្វី?',
      options: ['*/', '//', '-->', '#'],
      correct: 0,
      explanation: 'Comment ក្នុង CSS បញ្ចប់ដោយ `*/`។'
    },
    {
      question: 'តើ Browser ធ្វើអ្វីជាមួយ Comment ក្នុង CSS?',
      options: ['បកស្រាយជារចនាប័ទ្ម', 'អើពើចោល', 'បង្ហាញជាអក្សរ', 'បន្ថែម Animation'],
      correct: 1,
      explanation: 'Browser អើពើចោល Comment ក្នុង CSS ដោយមិនបកស្រាយវា។'
    },
    {
      question: 'តើអ្វីជាគោលបំណងសំខាន់នៃ Comment ក្នុង CSS?',
      options: [
        'ធ្វើឱ្យ Website លឿន',
        'ពន្យល់ និងរៀបចំកូដ',
        'បន្ថែមរូបភាព',
        'កំណត់ពណ៌ផ្ទៃខាងក្រោយ',
      ],
      correct: 1,
      explanation: 'Comment ត្រូវបានប្រើដើម្បីពន្យល់ និងរៀបចំកូดឱ្យងាយស្រួលយល់។'
    },
    {
      question: 'តើ Comment អាចបិទកូដ CSS បណ្តោះអាសន្នបានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែ Single-line', 'បានតែ Multi-line'],
      correct: 0,
      explanation: 'Comment អាចបិទកូដ CSS បណ្តោះអាសន្ន ទាំង Single-line និង Multi-line។'
    },
  ],
  lab: {
    task: `
### កិច្ចការ៖ បង្កើតទំព័រអំពីអាហារខ្មែរ 🍲

បង្កើតឯកសារ HTML មួយដែលមានចំណងជើង \`<h1>\` មួយ និងកថាខណ្ឌ \`<p>\` ពីរ។ ប្រើ **Internal CSS** និងបន្ថែម Comment ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1. **Header Styles**:
   - បន្ថែម Comment: "រចនាប័ទ្មសម្រាប់ចំណងជើងអាហារខ្មែរ"។
   - កំណត់ \`<h1>\` ឱ្យមានពណ៌អក្សរ \`#d32f2f\` (ក្រហម) និងតម្រឹមកណ្តាល។
2. **Paragraph Styles**:
   - បន្ថែម Comment: "រចនាប័ទ្មសម្រាប់កថាខណ្ឌអំពីអាហារ"។
   - កំណត់ \`<p>\` ឱ្យមានពណ៌អក្សរ \`#424242\` (ប្រផេះ) និង \`font-size: 1.2em\`។
3. **Class Styles**:
   - បន្ថែម Multi-line Comment: ពន្យល់ថា Class \`special-dish\` ប្រើសម្រាប់រំលេចអាហារពិសេស។
   - បង្កើត Class \`special-dish\`:
     - កំណត់ \`background-color: #ffebee\` (ក្រហមស្រាល)។
     - កំណត់ \`border: 1px solid #ef5350\` (ស៊ុមក្រហម)។
     - កំណត់ \`padding: 10px\`។
     - អនុវត្ត Class នេះទៅកថាខណ្ឌទីពីរ។
4. **Experiment**:
   - បន្ថែម Property មួយ (ឧ. \`font-weight: bold;\`) ក្នុង Class \`special-dish\` ប៉ុន្តែបិទវាដោយ Comment សម្រាប់សាកល្បង។
`,
    solution: `
<!DOCTYPE html>
<html>
<head>
  <title>អាហារខ្មែរ</title>
  <style>
    /* រចនាប័ទ្មសម្រាប់ចំណងជើងអាហារខ្មែរ */
    h1 {
      color: #d32f2f; /* ពណ៌ក្រហម */
      text-align: center; /* តម្រឹមកណ្តាល */
    }

    /* រចនាប័ទ្មសម្រាប់កថាខណ្ឌអំពីអាហារ */
    p {
      color: #424242; /* ពណ៌ប្រផេះ */
      font-size: 1.2em; /* ទំហំអក្សរ */
    }

    /*
     * Class សម្រាប់រំលេចអាហារពិសេស
     * ប្រើសម្រាប់បន្ថែមផ្ទៃខាងក្រោយ និងស៊ុម
     */
    .special-dish {
      background-color: #ffebee; /* ផ្ទៃខាងក្រោយក្រហមស្រាល */
      border: 1px solid #ef5350; /* ស៊ុមក្រហម */
      padding: 10px; /* ចន្លោះខាងក្នុង */
      /* font-weight: bold; */ /* បិទ Property នេះសម្រាប់សាកល្បង */
    }
  </style>
</head>
<body>
  <h1>អាហារខ្មែរដ៏ឈ្ងុយឆ្ងាញ់</h1>
  <p>បាយឆាគឺជាអាហារដ៏ពេញនិយមនៅកម្ពុជា។</p>
  <p class="special-dish">អម៉ុកគឺជាម្ហូបបុរាណដែលគេចូលចិត្តខ្លាំង។</p>
</body>
</html>
`
  }
};

export default CSSLesson1_4Content;