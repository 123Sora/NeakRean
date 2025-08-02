  // src/components/lessons/css/CSSLesson2_3.tsx
  import type { LessonContent } from '../../../../types/LessonTypes';

  const CSSLesson2_3Content: LessonContent = {
    title: 'CSS Pseudo-class Selectors (ឧបករណ៍ជ្រើសរើស Pseudo-class)',
    objectives: [
      'ស្វែងយល់ពីគោលបំណងនៃ Pseudo-class Selectors',
      'រៀនពីរបៀបប្រើ Link-related pseudo-classes (:link, :visited, :hover, :active)',
      'ដឹងពីរបៀបប្រើ UI state pseudo-classes (:focus, :checked, :disabled, :enabled)',
      'ស្គាល់ពី Structural pseudo-classes (:first-child, :last-child, :nth-child())',
      'យល់ដឹងពីរបៀបប្រើ Pseudo-class Selectors ដើម្បីរចនាម៉ូត Element តាមស្ថានភាពរបស់ពួកវា'
    ],
    content: `
  # CSS Pseudo-class Selectors (ឧបករណ៍ជ្រើសរើស Pseudo-class) 💡

  ---

  **Pseudo-class Selectors** គឺជា Keyword ដែលត្រូវបានបន្ថែមទៅ Selector ធម្មតា ដើម្បីកំណត់ Element មួយដែលស្ថិតក្នុង **ស្ថានភាពជាក់លាក់**។ ពួកវាអនុញ្ញាតឱ្យអ្នករចនាម៉ូត Element នៅពេលដែលវាផ្លាស់ប្តូរស្ថានភាព (ឧទាហរណ៍៖ នៅពេល Mouse Pointer ដាក់ពីលើ Link ឬនៅពេល Input Field ត្រូវបានចុច)។ Pseudo-class ចាប់ផ្តើមដោយសញ្ញា **\`:\` (colon)**។

  ---

  ## 1. Link-related Pseudo-classes (Pseudo-class ទាក់ទងនឹង Link)

  ទាំងនេះត្រូវបានប្រើដើម្បីកំណត់គោលដៅ Link នៅស្ថានភាពខុសគ្នា។

  * **\`:link\`**: ជ្រើសរើស Link ដែលមិនទាន់បានចូលមើល។
      \`\`\`css
      /* កំណត់ពណ៌ Link ដែលមិនទាន់បានចូលមើល */
      a:link {
        color: #0000FF; /* ពណ៌ខៀវ */
      }
      \`\`\`

  * **\`:visited\`**: ជ្រើសរើស Link ដែលបានចូលមើលរួចហើយ។
      \`\`\`css
      /* កំណត់ពណ៌ Link ដែលបានចូលមើល */
      a:visited {
        color: #800080; /* ពណ៌ស្វាយ */
      }
      \`\`\`

  * **\`:hover\`**: ជ្រើសរើស Element នៅពេលដែល Mouse Pointer ត្រូវបានដាក់ពីលើវា។ ប្រើបានមិនត្រឹមតែ Link នោះទេ។
      \`\`\`css
      /* កំណត់រចនាប័ទ្មប៊ូតុងនៅពេលដាក់ Mouse ពីលើ */
      button:hover {
        background-color: #f0f0f0;
        cursor: pointer;
      }

      /* កំណត់រចនាប័ទ្ម Link នៅពេលដាក់ Mouse ពីលើ */
      a:hover {
        color: #FF0000; /* ពណ៌ក្រហម */
        text-decoration: underline;
      }
      \`\`\`

  * **\`:active\`**: ជ្រើសរើស Element នៅពេលដែលវាត្រូវបានចុច (activated)។
      \`\`\`css
      /* កំណត់រចនាប័ទ្មប៊ូតុងនៅពេលកំពុងចុច */
      button:active {
        background-color: #ccc;
        transform: translateY(1px); /* ធ្វើឱ្យមើលទៅដូចជាវាលិចចូល */
      }

      /* កំណត់រចនាប័ទ្ម Link នៅពេលកំពុងចុច */
      a:active {
        color: #00FF00; /* ពណ៌បៃតង */
      }
      \`\`\`

  ---

  ## 2. UI State Pseudo-classes (Pseudo-class ស្ថានភាព UI)

  ទាំងនេះត្រូវបានប្រើដើម្បីកំណត់គោលដៅ Element ផ្អែកលើស្ថានភាពរបស់វាទាក់ទងនឹងការ Interact របស់អ្នកប្រើប្រាស់។

  * **\`:focus\`**: ជ្រើសរើស Element (ជាធម្មតា Input Field ឬ Button) នៅពេលដែលវាទទួលបាន Focus (ឧទាហរណ៍៖ ដោយការចុចលើវា ឬដោយការប្រើ Tab Key)។
      \`\`\`css
      /* កំណត់រចនាប័ទ្ម Input Field នៅពេលទទួលបាន Focus */
      input:focus {
        border: 2px solid blue;
        outline: none; /* លុប outline លំនាំដើម */
      }
      \`\`\`

  * **\`:checked\`**: ជ្រើសរើស Radio Button ឬ Checkbox ដែលត្រូវបានជ្រើសរើស (checked)។
      \`\`\`css
      /* កំណត់រចនាប័ទ្ម Checkbox នៅពេលត្រូវបាន Checked */
      input[type="checkbox"]:checked + label {
        font-weight: bold;
        color: green;
      }
      \`\`\`

  * **\`:disabled\`**: ជ្រើសរើស Element Input ដែលត្រូវបានបិទ (disabled)។
      \`\`\`css
      /* កំណត់រចនាប័ទ្ម Input Field ដែលត្រូវបានបិទ */
      input:disabled {
        background-color: #e0e0e0;
        cursor: not-allowed;
      }
      \`\`\`

  * **\`:enabled\`**: ជ្រើសរើស Element Input ដែលត្រូវបានបើក (enabled)។
      \`\`\`css
      /* កំណត់រចនាប័ទ្ម Input Field ដែលត្រូវបានបើក */
      input:enabled {
        background-color: #ffffff;
      }
      \`\`\`

  ---

  ## 3. Structural Pseudo-classes (Pseudo-class រចនាសម្ព័ន្ធ)

  ទាំងនេះត្រូវបានប្រើដើម្បីកំណត់គោលដៅ Element ដោយផ្អែកលើទីតាំងរបស់វាទាក់ទងនឹងបងប្អូន (siblings) របស់វា។

  * **\`:first-child\`**: ជ្រើសរើស Element ដែលជាកូនទីមួយរបស់ Parent របស់វា។
      \`\`\`css
      /* កំណត់រចនាប័ទ្ម <p> ដំបូងនៅក្នុង div នីមួយៗ */
      div p:first-child {
        font-style: italic;
        color: #3498db;
      }
      \`\`\`

  * **\`:last-child\`**: ជ្រើសរើស Element ដែលជាកូនចុងក្រោយរបស់ Parent របស់វា។
      \`\`\`css
      /* កំណត់រចនាប័ទ្ម <li> ចុងក្រោយក្នុង <ul> នីមួយៗ */
      ul li:last-child {
        border-bottom: none;
      }
      \`\`\`

  * **\`:nth-child(n)\`**: ជ្រើសរើស Element ដែលជាកូនទី n របស់ Parent របស់វា។ "n" អាចជាលេខ Keywords (odd, even) ឬ Formula (2n, 2n+1)។
      \`\`\`css
      /* កំណត់រចនាប័ទ្ម Element <p> ទីពីរ */
      p:nth-child(2) {
        background-color: #f0e68c; /* khaki */
      }

      /* កំណត់រចនាប័ទ្ម List Item សេស */
      li:nth-child(odd) {
        background-color: #f2f2f2;
      }

      /* កំណត់រចនាប័ទ្ម List Item គូ */
      li:nth-child(even) {
        background-color: #e6e6e6;
      }

      /* កំណត់រចនាប័ទ្មរៀងរាល់ Item ទី 2 */
      li:nth-child(2n) {
        /* ដូចគ្នាទៅនឹង even */
      }
      \`\`\`

  ---
  > **គន្លឹះ:** Pseudo-class Selectors គឺជាឧបករណ៍ដ៏មានឥទ្ធិពលសម្រាប់បង្កើត User Interface ដែលមានភាពឆ្លើយតប និងមានលក្ខណៈពិសេស។ ការយល់ដឹងពីពួកវាអនុញ្ញាតឱ្យអ្នកបង្កើតរចនាប័ទ្មថាមវន្តដោយមិនចាំបាច់ប្រើ JavaScript។
  `,
    examples: [
      `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ Pseudo-class Selectors</h3>
  <style>
  /* General styling */
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f9f9f9;
  }
  div {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 8px;
  }

  /* Link-related */
  a {
    text-decoration: none;
    margin-right: 15px;
    padding: 5px 0;
    display: inline-block;
  }
  a:link {
    color: blue;
  }
  a:visited {
    color: purple;
  }
  a:hover {
    color: red;
    text-decoration: underline;
  }
  a:active {
    color: green;
  }

  /* UI State */
  input[type="text"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }
  input[type="text"]:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
  }
  button {
    padding: 8px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    margin-right: 10px;
  }
  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  input[type="checkbox"]:checked + label {
    color: #28a745;
    font-weight: bold;
  }

  /* Structural */
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 8px 0;
    border-bottom: 1px dashed #eee;
  }
  li:first-child {
    font-weight: bold;
    color: #0056b3;
  }
  li:last-child {
    border-bottom: none;
    font-style: italic;
    color: #6c757d;
  }
  li:nth-child(even) {
    background-color: #f2f2f2;
  }
  li:nth-child(odd) {
    background-color: #ffffff;
  }
  </style>

  <div>
    <h3>Link States</h3>
    <a href="#example1">Link ធម្មតា</a>
    <a href="https://www.google.com" target="_blank">ទៅ Google (អាចនឹងជា Visited)</a>
    <a href="#example2">Hover Me</a>
  </div>

  <div>
    <h3>UI States</h3>
    <label for="myInput">ឈ្មោះ:</label>
    <input type="text" id="myInput" placeholder="ចុចទីនេះដើម្បី Focus">
    <button>Submit</button>
    <button disabled>Disabled Button</button>
    <br><br>
    <input type="checkbox" id="myCheckbox">
    <label for="myCheckbox">យល់ព្រមលក្ខខណ្ឌ</label>
  </div>

  <div>
    <h3>List Item Structure</h3>
    <ul>
      <li>ធាតុទីមួយ (First Child)</li>
      <li>ធាតុទីពីរ (Even)</li>
      <li>ធាតុទីបី (Odd)</li>
      <li>ធាតុទីបួន (Even)</li>
      <li>ធាតុទីប្រាំ (Last Child, Odd)</li>
    </ul>
  </div>

  \`\`\`html
  <!DOCTYPE html>
  <html>
  <head>
    <title>CSS Pseudo-class Selectors Example</title>
    <style>
      /* General styling */
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
        background-color: #f9f9f9;
      }
      div {
        margin-bottom: 20px;
        padding: 15px;
        border: 1px solid #ddd;
        background-color: #fff;
        border-radius: 8px;
      }

      /* Link-related */
      a {
        text-decoration: none;
        margin-right: 15px;
        padding: 5px 0;
        display: inline-block;
      }
      a:link {
        color: blue;
      }
      a:visited {
        color: purple;
      }
      a:hover {
        color: red;
        text-decoration: underline;
      }
      a:active {
        color: green;
      }

      /* UI State */
      input[type="text"] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-right: 10px;
      }
      input[type="text"]:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
      }
      button {
        padding: 8px 15px;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        margin-right: 10px;
      }
      button:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
      }
      input[type="checkbox"]:checked + label {
        color: #28a745;
        font-weight: bold;
      }

      /* Structural */
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        padding: 8px 0;
        border-bottom: 1px dashed #eee;
      }
      li:first-child {
        font-weight: bold;
        color: #0056b3;
      }
      li:last-child {
        border-bottom: none;
        font-style: italic;
        color: #6c757d;
      }
      li:nth-child(even) {
        background-color: #f2f2f2;
      }
      li:nth-child(odd) {
        background-color: #ffffff;
      }
    </style>
  </head>
  <body>
    <div>
      <h3>Link States</h3>
      <a href="#example1">Link ធម្មតា</a>
      <a href="https://www.google.com" target="_blank">ទៅ Google (អាចនឹងជា Visited)</a>
      <a href="#example2">Hover Me</a>
    </div>

    <div>
      <h3>UI States</h3>
      <label for="myInput">ឈ្មោះ:</label>
      <input type="text" id="myInput" placeholder="ចុចទីនេះដើម្បី Focus">
      <button>Submit</button>
      <button disabled>Disabled Button</button>
      <br><br>
      <input type="checkbox" id="myCheckbox">
      <label for="myCheckbox">យល់ព្រមលក្ខខណ្ឌ</label>
    </div>

    <div>
      <h3>List Item Structure</h3>
      <ul>
        <li>ធាតុទីមួយ (First Child)</li>
        <li>ធាតុទីពីរ (Even)</li>
        <li>ធាតុទីបី (Odd)</li>
        <li>ធាតុទីបួន (Even)</li>
        <li>ធាតុទីប្រាំ (Last Child, Odd)</li>
      </ul>
    </div>
  </body>
  </html>
  \`\`\`

  \`\`\`css
  /* Link-related */
  a:link {
    color: blue; /* Link ដែលមិនទាន់ចូលមើល */
  }
  a:visited {
    color: purple; /* Link ដែលបានចូលមើល */
  }
  a:hover {
    color: red; /* Link នៅពេលដាក់ Mouse ពីលើ */
    text-decoration: underline;
  }
  a:active {
    color: green; /* Link នៅពេលកំពុងចុច */
  }

  /* UI State */
  input[type="text"]:focus {
    border-color: #007bff; /* Input ពេល Focus */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
  }
  button:disabled {
    background-color: #cccccc; /* Button ពេល Disabled */
    cursor: not-allowed;
  }
  input[type="checkbox"]:checked + label {
    color: #28a745; /* Label ជាប់ Checkbox ពេល Checked */
    font-weight: bold;
  }

  /* Structural */
  li:first-child {
    font-weight: bold; /* ធាតុ List ដំបូង */
    color: #0056b3;
  }
  li:last-child {
    border-bottom: none; /* ធាតុ List ចុងក្រោយ */
    font-style: italic;
    color: #6c757d;
  }
  li:nth-child(even) {
    background-color: #f2f2f2; /* ធាតុ List លេខគូ */
  }
  li:nth-child(odd) {
    background-color: #ffffff; /* ធាតុ List លេខសេស */
  }
  \`\`\`
  `
    ],
    quiz: [
      {
        question: 'តើ Pseudo-class Selector មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់រចនាប័ទ្ម Element នៅពេល Mouse Pointer ដាក់ពីលើវា?',
        options: ['`:link`', '`:visited`', '`:hover`', '`:active`'],
        correct: 2,
        explanation: '`:hover` Pseudo-class ត្រូវបានប្រើដើម្បីកំណត់រចនាប័ទ្ម Element នៅពេល Mouse Pointer ដាក់ពីលើវា។'
      },
      {
        question: 'តើ Selector `input:focus` នឹងកំណត់រចនាប័ទ្ម Element ណា?',
        options: [
          'គ្រប់ Element `input` ទាំងអស់',
          'Element `input` នៅពេលដែលវាត្រូវបានបិទ',
          'Element `input` នៅពេលដែលវាទទួលបាន Focus',
          'Element `input` នៅពេលដែលវាត្រូវបាន Checked'
        ],
        correct: 2,
        explanation: '`input:focus` កំណត់រចនាប័ទ្ម Element `input` នៅពេលដែលវាទទួលបាន Focus ពីអ្នកប្រើប្រាស់ (ឧទាហរណ៍៖ ដោយការចុច ឬ Tab Key)។'
      },
      {
        question: 'តើ `li:nth-child(odd)` នឹងជ្រើសរើស Element `<li>` ណាខ្លះ?',
        options: [
          'រៀងរាល់ Element `<li>` ទីមួយ',
          'រៀងរាល់ Element `<li>` ទីពីរ',
          'គ្រប់ Element `<li>` ដែលមានលេខរៀងសេស (1, 3, 5, ...)',
          'គ្រប់ Element `<li>` ដែលមានលេខរៀងគូ (2, 4, 6, ...)'
        ],
        correct: 2,
        explanation: '`li:nth-child(odd)` ជ្រើសរើសគ្រប់ Element `<li>` ដែលមានលេខរៀងសេស នៅក្នុងបញ្ជីរបស់វា។'
      },
      {
        question: 'តើ Pseudo-class មួយណាដែលជ្រើសរើស Radio Button ឬ Checkbox ដែលត្រូវបានជ្រើសរើស?',
        options: ['`:active`', '`:enabled`', '`:checked`', '`:focus`'],
        correct: 2,
        explanation: '`:checked` Pseudo-class ត្រូវបានប្រើដើម្បីជ្រើសរើស Radio Button ឬ Checkbox ដែលត្រូវបានជ្រើសរើស។'
      },
      {
        question: 'តើ `p:first-child` នឹងជ្រើសរើស Paragraph ណា ប្រសិនបើ Paragraph នោះមិនមែនជាកូនទីមួយរបស់ Parent របស់វា?',
        options: [
          'វានឹងជ្រើសរើស Paragraph ទីមួយ',
          'វានឹងជ្រើសរើស Paragraph ទាំងអស់',
          'វានឹងមិនជ្រើសរើស Paragraph នោះទេ',
          'វានឹងបណ្តាលឱ្យមាន Error'
        ],
        correct: 2,
        explanation: '`p:first-child` ជ្រើសរើស Element `<p>` លុះត្រាតែវាពិតជាកូនទីមួយរបស់ Parent របស់វា។ បើមិនដូច្នោះទេ វានឹងមិនជ្រើសរើសទេ។'
      },
      {
        question: 'តើ Pseudo-class Selectors ចាប់ផ្តើមដោយនិមិត្តសញ្ញាអ្វី?',
        options: ['`#` (hash)', '`.` (dot)', '`:` (colon)', '`::` (double colon)'],
        correct: 2,
        explanation: 'Pseudo-class Selectors ចាប់ផ្តើមដោយនិមិត្តសញ្ញា `:` (colon)។'
      },
      {
        question: 'តើ Pseudo-class មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់រចនាប័ទ្ម Link ដែលបានចូលមើលរួចហើយ?',
        options: ['`:link`', '`:visited`', '`:hover`', '`:active`'],
        correct: 1,
        explanation: '`:visited` Pseudo-class ត្រូវបានប្រើដើម្បីកំណត់រចនាប័ទ្ម Link ដែលអ្នកប្រើប្រាស់បានចូលមើលរួចហើយ។'
      },
      {
        question: 'តើ Pseudo-class មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់គោលដៅ Link ដែលមិនទាន់បានចូលមើល?',
        options: ['`:active`', '`:visited`', '`:focus`', '`:link`'],
        correct: 3,
        explanation: '`:link` Pseudo-class ត្រូវបានប្រើដើម្បីកំណត់គោលដៅ Link ដែលមិនទាន់បានចូលមើល។'
      },
      {
        question: 'តើ Pseudo-class `button:active` មានន័យយ៉ាងណា?',
        options: [
          'ប៊ូតុងនៅពេលដែល Mouse ដាក់ពីលើ',
          'ប៊ូតុងនៅពេលដែលវាត្រូវបានបិទ',
          'ប៊ូតុងនៅពេលដែលវាត្រូវបានចុច (active)',
          'ប៊ូតុងនៅពេលដែលវាទទួលបាន Focus'
        ],
        correct: 2,
        explanation: '`button:active` កំណត់រចនាប័ទ្មប៊ូតុងនៅពេលដែលវាត្រូវបានចុច ឬ "activated"។'
      },
      {
        question: 'តើ Selector `li:last-child` នឹងជ្រើសរើស Element ណា?',
        options: [
          'ធាតុ `<li>` ដំបូងបំផុត',
          'ធាតុ `<li>` ចុងក្រោយបង្អស់ក្នុងបញ្ជី',
          'ធាតុ `<li>` ណាមួយដែលមានកូនចុងក្រោយ',
          'ធាតុ `<li>` ទាំងអស់'
        ],
        correct: 1,
        explanation: '`li:last-child` ជ្រើសរើស Element `<li>` ដែលជាកូនចុងក្រោយនៃ Parent របស់វា។'
      },
      {
        question: 'ប្រសិនបើអ្នកចង់កំណត់រចនាប័ទ្មធាតុ `<input>` នៅពេលដែលវាត្រូវបានបើក (មិនមែនបិទ) តើ Pseudo-class មួយណាដែលអ្នកនឹងប្រើ?',
        options: ['`:disabled`', '`:enabled`', '`:focus`', '`:valid`'],
        correct: 1,
        explanation: '`:enabled` Pseudo-class ត្រូវបានប្រើដើម្បីកំណត់រចនាប័ទ្មធាតុ Input ដែលត្រូវបានបើក។'
      },
      {
        question: 'តើ `li:nth-child(2n)` នឹងជ្រើសរើស Element `<li>` ណាខ្លះ?',
        options: [
          'គ្រប់ធាតុ `<li>` ដែលមានលេខរៀងសេស',
          'គ្រប់ធាតុ `<li>` ដែលមានលេខរៀងគូ',
          'រៀងរាល់ធាតុ `<li>` ទីបី',
          'រៀងរាល់ធាតុ `<li>` ទីមួយ'
        ],
        correct: 1,
        explanation: '`li:nth-child(2n)` ជ្រើសរើសគ្រប់ Element `<li>` ដែលមានលេខរៀងគូ (ទី 2, ទី 4, ទី 6, ...)'
      },
      {
        question: 'តើ Pseudo-class មួយណាដែលប្រើសម្រាប់កំណត់គោលដៅ Element ផ្អែកលើទីតាំងរបស់វាទាក់ទងនឹងបងប្អូនរបស់វា?',
        options: ['Link-related pseudo-classes', 'UI state pseudo-classes', 'Structural pseudo-classes', 'Dynamic pseudo-classes'],
        correct: 2,
        explanation: 'Structural pseudo-classes (ដូចជា `:first-child`, `:last-child`, `:nth-child()`) ត្រូវបានប្រើដើម្បីកំណត់គោលដៅ Element ផ្អែកលើទីតាំងរបស់វាទាក់ទងនឹងបងប្អូនរបស់វា។'
      },
      {
        question: 'តើអ្វីជាភាពខុសគ្នារវាង `:hover` និង `:active`?',
        options: [
          '`:hover` គឺសម្រាប់ពេលចុច Mouse រីឯ `:active` គឺសម្រាប់ពេលដាក់ Mouse ពីលើ',
          '`:hover` គឺសម្រាប់ពេលដាក់ Mouse ពីលើ រីឯ `:active` គឺសម្រាប់ពេលកំពុងចុច',
          'ពួកវាដូចគ្នាបេះបិទ',
          '`:hover` ប្រើសម្រាប់ Link ចំណែក `:active` ប្រើសម្រាប់ប៊ូតុង'
        ],
        correct: 1,
        explanation: '`:hover` ត្រូវបានអនុវត្តនៅពេលដែល Mouse Pointer ដាក់ពីលើ Element ខណៈ `:active` ត្រូវបានអនុវត្តនៅពេលដែល Element ត្រូវបានចុច (activated)។'
      },
      {
        question: 'តើ Selector `input[type="checkbox"]:checked` នឹងកំណត់រចនាប័ទ្ម Element ណា?',
        options: [
          'Checkbox ទាំងអស់',
          'Checkbox ដែលមិនត្រូវបាន Checked',
          'Checkbox ដែលត្រូវបាន Checked',
          'Checkbox ដែលទទួលបាន Focus'
        ],
        correct: 2,
        explanation: '`input[type="checkbox"]:checked` កំណត់រចនាប័ទ្ម Element Checkbox នៅពេលដែលវាត្រូវបានជ្រើសរើស (checked)។'
      },
      {
        question: 'ប្រសិនបើអ្នកចង់កំណត់រចនាប័ទ្ម Paragraph ទីបីនៅក្នុង `<div>` មួយ តើ Selector មួយណាដែលត្រឹមត្រូវបំផុត?',
        options: [
          '`p:nth-child(3)`',
          '`div p:first-child + p + p`',
          '`p:last-child`',
          '`div p:nth-child(3)`'
        ],
        correct: 3,
        explanation: '`div p:nth-child(3)` គឺជា Selector ត្រឹមត្រូវបំផុតដើម្បីកំណត់រចនាប័ទ្ម Paragraph ទីបីដែលជាកូនរបស់ `div`។ `p:nth-child(3)` អាចនឹងជ្រើសរើស Paragraph ទីបីណាដែលជាកូនទីបីរបស់ Parent របស់វា មិនមែនតែនៅក្នុង `div` នោះទេ។'
      },
      {
        question: 'តើ Pseudo-class Selectors អនុញ្ញាតឱ្យអ្នកធ្វើអ្វីខ្លះក្នុងការរចនា CSS?',
        options: [
          'ជ្រើសរើស Element តាមឈ្មោះ Tag របស់វា',
          'ជ្រើសរើស Element តាម Class ឬ ID របស់វា',
          'រចនាម៉ូត Element ដោយផ្អែកលើស្ថានភាព ឬទីតាំងរបស់វា',
          'ផ្លាស់ប្តូររចនាសម្ព័ន្ធ HTML របស់ Element'
        ],
        correct: 2,
        explanation: 'Pseudo-class Selectors អនុញ្ញាតឱ្យអ្នករចនាម៉ូត Element ដោយផ្អែកលើស្ថានភាពបច្ចុប្បន្នរបស់វា (ឧទាហរណ៍៖ `:hover`, `:focus`) ឬទីតាំងរបស់វាក្នុងរចនាសម្ព័ន្ធឯកសារ (ឧទាហរណ៍៖ `:first-child`, `:nth-child`)។'
      }
    ],
    lab: {
      task: `បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធដូចខាងក្រោម៖
  * \`<nav>\` មួយដែលមាន Link ចំនួន ៣ (ប្រើ \`<a>\` Tag) ទៅកាន់ទំព័រផ្សេងៗ (ឧទាហរណ៍ Google, Facebook, Twitter)។
  * \`<form>\` មួយដែលមាន Input Field ប្រភេទ \`text\` ចំនួន ២ (មួយ enabled មួយ disabled) និង Checkbox មួយ។
  * \`<ul>\` មួយដែលមាន \`<li>\` Item ចំនួន ៥ ។

  សូមប្រើ **Internal CSS** និង **Pseudo-class Selectors** ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

  1.  កំណត់ពណ៌ Link ដែលមិនទាន់ចូលមើលទៅជា \`#007bff\` (ខៀវ) និង Link ដែលបានចូលមើលទៅជា \`#6610f2\` (ស្វាយ)។
  2.  នៅពេលដាក់ Mouse លើ Link ណាមួយ ត្រូវប្តូរពណ៌អក្សរទៅជា \`#dc3545\` (ក្រហម) និងលុបបន្ទាត់ពីក្រោម។
  3.  នៅពេល Input Field ប្រភេទ \`text\` ទទួលបាន Focus ត្រូវកំណត់ \`border\` របស់វាទៅជា \`2px solid #28a745\` ។
  4.  កំណត់ \`background-color\` សម្រាប់ Input Field ដែល \`disabled\` ទៅជា \`#e9ecef\` ។
  5.  នៅពេល Checkbox ត្រូវបាន \`checked\` ត្រូវកំណត់ \`font-weight: bold;\` និង \`color: #17a2b8;\` សម្រាប់ \`label\` ដែលនៅជាប់វា (អ្នកអាចប្រើ Adjacent Sibling Selector \`+\`)។
  6.  កំណត់ \`background-color\` សម្រាប់ Element \`<li>\` ទីមួយ ទៅជា \`#ffc107\` (លឿង)។
  7.  កំណត់ \`background-color\` សម្រាប់រៀងរាល់ Element \`<li>\` ទីពីរ (Even) ទៅជា \`#e2e6ea\` ។`,
      solution: `<!DOCTYPE html>
  <html>
  <head>
    <title>CSS Pseudo-class Selectors Lab</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
        background-color: #f8f9fa;
      }

      div {
        margin-bottom: 20px;
        padding: 15px;
        border: 1px solid #ced4da;
        border-radius: 8px;
        background-color: #ffffff;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      }

      nav a {
        text-decoration: none;
        margin-right: 15px;
        padding: 5px 0;
        display: inline-block;
      }

      /* 1. Link states */
      nav a:link {
        color: #007bff;
      }
      nav a:visited {
        color: #6610f2;
      }

      /* 2. Hover state */
      nav a:hover {
        color: #dc3545;
        text-decoration: none;
      }

      /* Form styling */
      form label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      form input[type="text"], form input[type="checkbox"] {
        margin-bottom: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      /* 3. Focus state */
      form input[type="text"]:focus {
        border: 2px solid #28a745;
        outline: none; /* Remove default focus outline */
      }

      /* 4. Disabled state */
      form input[type="text"]:disabled {
        background-color: #e9ecef;
        cursor: not-allowed;
      }

      /* 5. Checked state */
      input[type="checkbox"]:checked + label {
        font-weight: bold;
        color: #17a2b8;
      }

      /* List styling */
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        padding: 8px 10px;
        border-bottom: 1px solid #eee;
      }
      li:last-child {
        border-bottom: none;
      }

      /* 6. First child */
      li:first-child {
        background-color: #ffc107;
      }

      /* 7. Even child */
      li:nth-child(even) {
        background-color: #e2e6ea;
      }
    </style>
  </head>
  <body>
    <div>
      <h3>Navigation Links</h3>
      <nav>
        <a href="https://www.google.com" target="_blank">Google</a>
        <a href="https://www.facebook.com" target="_blank">Facebook</a>
        <a href="https://www.twitter.com" target="_blank">Twitter</a>
      </nav>
    </div>

    <div>
      <h3>Form Elements</h3>
      <form>
        <label for="username">ឈ្មោះអ្នកប្រើប្រាស់:</label>
        <input type="text" id="username" placeholder="បញ្ចូលឈ្មោះ">
        
        <label for="email">អ៊ីមែល (បិទ):</label>
        <input type="text" id="email" value="example@mail.com" disabled>
        
        <input type="checkbox" id="agreeTerms">
        <label for="agreeTerms">ខ្ញុំយល់ព្រមតាមលក្ខខណ្ឌ</label>
      </form>
    </div>

    <div>
      <h3>List of Items</h3>
      <ul>
        <li>ធាតុទីមួយ</li>
        <li>ធាតុទីពីរ</li>
        <li>ធាតុទីបី</li>
        <li>ធាតុទីបួន</li>
        <li>ធាតុទីប្រាំ</li>
      </ul>
    </div>
  </body>
  </html>`
    }
  };

  export default CSSLesson2_3Content;