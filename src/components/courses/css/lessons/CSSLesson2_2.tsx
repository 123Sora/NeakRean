// src/components/lessons/css/CSSLesson2_2.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson2_2Content: LessonContent = {
  title: 'CSS Combinator Selectors (ឧបករណ៍ជ្រើសរើសរួមបញ្ចូលគ្នា)',
  objectives: [
    'ស្វែងយល់ពី Descendant Selector (space)',
    'រៀនពី Child Selector (>)',
    'ដឹងពី Adjacent Sibling Selector (+)',
    'ស្គាល់ពី General Sibling Selector (~)',
    'យល់ដឹងពីរបៀបប្រើ Combinator Selectors ដើម្បីជ្រើសរើស Element យ៉ាងជាក់លាក់'
  ],
  content: `
# CSS Combinator Selectors (ឧបករណ៍ជ្រើសរើសរួមបញ្ចូលគ្នា) 🔗

---

**Combinator Selectors** ត្រូវបានប្រើដើម្បីជ្រើសរើស Element ដោយផ្អែកលើទំនាក់ទំនងរបស់ពួកវាទៅវិញទៅមកនៅក្នុងឯកសារ HTML (DOM tree)។ ពួកវាអនុញ្ញាតឱ្យអ្នកកំណត់គោលដៅ Element យ៉ាងជាក់លាក់ដោយផ្អែកលើទីតាំងរបស់វាទាក់ទងនឹង Element ផ្សេងទៀត។

---

## 1. Descendant Selector (Selector កូនចៅ) (Space)

**Descendant Selector** តំណាងដោយ **ចន្លោះ (space)** រវាង Selector ពីរ ជ្រើសរើស Element ទាំងអស់ដែលជា **descendant** (កូនចៅ) របស់ Element ទីមួយ។ Descendant មានន័យថា Element នោះអាចជាកូន (child) ចៅ (grandchild) ឬ descendant កម្រិតណាក៏ដោយ។

\`\`\`css
/* ជ្រើសរើសគ្រប់ Element <p> ទាំងអស់ដែលជាកូនចៅរបស់ Element <div> */
div p {
  color: blue; /* កថាខណ្ឌទាំងអស់ក្នុង div នឹងមានពណ៌ខៀវ */
  font-size: 1.1em;
}

/* ជ្រើសរើសគ្រប់ Element <a> ទាំងអស់ដែលជាកូនចៅរបស់ Element ដែលមាន class "nav-menu" */
.nav-menu a {
  text-decoration: none; /* លុបបន្ទាត់ពីក្រោម Link */
  color: #333;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<div class="container">
  <p>នេះជាកថាខណ្ឌនៅក្នុង container ។</p>
  <span>
    <p>នេះជាកថាខណ្ឌនៅក្នុង span ដែលនៅក្នុង container ផងដែរ។</p>
  </span>
</div>

<p>នេះជាកថាខណ្ឌនៅខាងក្រៅ container ។</p>
\`\`\`
ក្នុងឧទាហរណ៍ខាងលើ \`div p\` នឹងជ្រើសរើសទាំងកថាខណ្ឌទីមួយ និងទីពីរ ប៉ុន្តែមិនមែនកថាខណ្ឌទីបីឡើយ។

---

## 2. Child Selector (Selector កូនផ្ទាល់) (>)

**Child Selector** តំណាងដោយសញ្ញា **\`>\` (greater than)** ជ្រើសរើស Element ទាំងអស់ដែលជា **កូនផ្ទាល់ (direct child)** របស់ Element ទីមួយ។ វាខុសពី Descendant Selector ដែលជ្រើសរើសកូនចៅគ្រប់កម្រិត។

\`\`\`css
/* ជ្រើសរើសគ្រប់ Element <p> ទាំងអស់ដែលជាកូនផ្ទាល់របស់ Element <div> */
div > p {
  background-color: yellow; /* កថាខណ្ឌដែលជាកូនផ្ទាល់របស់ div នឹងមានផ្ទៃខាងក្រោយពណ៌លឿង */
}

/* ជ្រើសរើសគ្រប់ Element <li> ទាំងអស់ដែលជាកូនផ្ទាល់របស់ Element <ul> */
ul > li {
  list-style: square; /* កំណត់ bullet point ទៅជាការ៉េ */
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<div class="parent">
  <p>នេះជាកូនផ្ទាល់របស់ div ។</p>
  <span>
    <p>នេះជាចៅរបស់ div (មិនមែនកូនផ្ទាល់)។</p>
  </span>
</div>
\`\`\`
ក្នុងឧទាហរណ៍ខាងលើ \`div > p\` នឹងជ្រើសរើសតែកថាខណ្ឌទីមួយប៉ុណ្ណោះ មិនមែនកថាខណ្ឌទីពីរឡើយ។

---

## 3. Adjacent Sibling Selector (Selector បងប្អូនជាប់គ្នា) (+)

**Adjacent Sibling Selector** តំណាងដោយសញ្ញា **\`+\` (plus)** ជ្រើសរើស Element ទីពីរដែល **នៅជាប់គ្នាភ្លាមៗ (immediately preceded)** ដោយ Element ទីមួយ និងមាន Parent ដូចគ្នា។

\`\`\`css
/* ជ្រើសរើស Element <p> ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី Element <h1> */
h1 + p {
  margin-top: 30px; /* កំណត់ margin ខាងលើសម្រាប់កថាខណ្ឌនោះ */
  font-weight: bold;
}

/* ជ្រើសរើស Element <div> ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី Element <p> */
p + div {
  border-top: 1px solid #ccc;
  padding-top: 10px;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<h1>ចំណងជើង</h1>
<p>នេះជាកថាខណ្ឌទីមួយ (នឹងត្រូវបានជ្រើសរើស)។</p>
<p>នេះជាកថាខណ្ឌទីពីរ (នឹងមិនត្រូវបានជ្រើសរើស)។</p>
\`\`\`
ក្នុងឧទាហរណ៍ខាងលើ \`h1 + p\` នឹងជ្រើសរើសតែកថាខណ្ឌទីមួយប៉ុណ្ណោះ ព្រោះវាជាបងប្អូនជាប់គ្នាភ្លាមៗរបស់ \`h1\`។

---

## 4. General Sibling Selector (Selector បងប្អូនទូទៅ) (~)

**General Sibling Selector** តំណាងដោយសញ្ញា **\`~\` (tilde)** ជ្រើសរើស Element ទីពីរដែលជា **បងប្អូន (sibling)** របស់ Element ទីមួយ (មាន Parent ដូចគ្នា) និង **នៅពីក្រោយ (comes after)** Element ទីមួយ។ វាមិនចាំបាច់នៅជាប់គ្នាភ្លាមៗនោះទេ។

\`\`\`css
/* ជ្រើសរើសគ្រប់ Element <p> ទាំងអស់ដែលជាបងប្អូនរបស់ Element <h1> និងនៅពីក្រោយវា */
h1 ~ p {
  color: purple; /* កថាខណ្ឌទាំងអស់បន្ទាប់ពី h1 នឹងមានពណ៌ស្វាយ */
  font-style: italic;
}

/* ជ្រើសរើសគ្រប់ Element <li> ទាំងអស់ដែលនៅពីក្រោយ Element <li> ទីមួយ (ដែលជាបងប្អូន) */
li:first-child ~ li {
  background-color: #f0f0f0;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<div>
  <h2>ចំណងជើង</h2>
  <p>កថាខណ្ឌទីមួយ</p>
  <span>អត្ថបទផ្សេង</span>
  <p>កថាខណ្ឌទីពីរ</p>
  <p>កថាខណ្ឌទីបី</p>
</div>
\`\`\`
ក្នុងឧទាហរណ៍ខាងលើ \`h2 ~ p\` នឹងជ្រើសរើសកថាខណ្ឌទីមួយ ទីពីរ និងទីបី ព្រោះពួកវាទាំងអស់ជាបងប្អូនរបស់ \`h2\` ហើយនៅពីក្រោយវា។

---
> **គន្លឹះ:** Combinator Selectors ផ្តល់ឱ្យអ្នកនូវការគ្រប់គ្រងដ៏មានឥទ្ធិពលលើការជ្រើសរើស Element ដោយផ្អែកលើទំនាក់ទំនងរវាងពួកវា។ ការយល់ដឹងពីពួកវាគឺសំខាន់ណាស់សម្រាប់ការសរសេរ CSS ដែលមានប្រសិទ្ធភាព និងរៀបរយ។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ Combinator Selectors</h3>
<style>
/* Universal Selector for basic reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* General styling for demonstration */
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f4f4f4;
}

div {
  border: 2px solid #a2a2a2;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 8px;
}

/* 1. Descendant Selector: Styles all <span> elements INSIDE a <div> */
div span {
  color: #c0392b; /* Dark red */
  font-weight: bold;
}

/* 2. Child Selector: Styles only direct <p> children of a <div> */
div > p {
  background-color: #e6f7ff; /* Light blue */
  padding: 8px;
  border-left: 4px solid #3498db;
  margin-bottom: 10px;
}

/* 3. Adjacent Sibling Selector: Styles a <p> element immediately after an <h2> */
h2 + p {
  font-style: italic;
  color: #27ae60; /* Green */
}

/* 4. General Sibling Selector: Styles all <p> elements that are siblings of an <h2> and come after it */
h2 ~ p {
  text-decoration: underline; /* Underline all paragraphs after h2 */
}

/* A specific override for the h2+p to show adjacent selector works */
h2 + p {
  text-decoration: none; /* Removes underline for the adjacent one */
  border-bottom: 1px dashed #27ae60;
  padding-bottom: 5px;
}
</style>

<div>
  <h2>ចំណងជើងក្នុង Div</h2>
  <p>នេះជាកថាខណ្ឌ <b>កូនផ្ទាល់</b> របស់ div (<code>div > p</code>) និងជា <b>បងប្អូនជាប់គ្នា</b> របស់ h2 (<code>h2 + p</code>) ។</p>
  <span>នេះជា <b>span</b> មួយក្នុង div (<code>div span</code>) ។</span>
  <p>នេះជាកថាខណ្ឌ <b>កូនផ្ទាល់</b> របស់ div មួយទៀត និងជា <b>បងប្អូនទូទៅ</b> របស់ h2 (<code>h2 ~ p</code>) ។</p>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
  <span>នេះជា span មួយទៀត។</span>
  <p>នេះជាកថាខណ្ឌចុងក្រោយក្នុង div របស់ div (<code>div > p</code>) និងជា <b>បងប្អូនទូទៅ</b> របស់ h2 (<code>h2 ~ p</code>) ។</p>
</div>

<h3>ចំណងជើងនៅខាងក្រៅ Div</h3>
<p>នេះជាកថាខណ្ឌនៅខាងក្រៅ div ។</p>

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Combinator Selectors Example</title>
  <style>
    /* Universal Selector for basic reset */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* General styling for demonstration */
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f4f4f4;
    }

    div {
      border: 2px solid #a2a2a2;
      padding: 15px;
      margin-bottom: 20px;
      background-color: #ffffff;
      border-radius: 8px;
    }

    /* 1. Descendant Selector: Styles all <span> elements INSIDE a <div> */
    div span {
      color: #c0392b; /* Dark red */
      font-weight: bold;
    }

    /* 2. Child Selector: Styles only direct <p> children of a <div> */
    div > p {
      background-color: #e6f7ff; /* Light blue */
      padding: 8px;
      border-left: 4px solid #3498db;
      margin-bottom: 10px;
    }

    /* 3. Adjacent Sibling Selector: Styles a <p> element immediately after an <h2> */
    h2 + p {
      font-style: italic;
      color: #27ae60; /* Green */
    }

    /* 4. General Sibling Selector: Styles all <p> elements that are siblings of an <h2> and come after it */
    h2 ~ p {
      text-decoration: underline;
    }

    /* Override for adjacent sibling to demonstrate specificity */
    h2 + p {
      text-decoration: none;
      border-bottom: 1px dashed #27ae60;
      padding-bottom: 5px;
    }
  </style>
</head>
<body>
  <div>
    <h2>ចំណងជើងក្នុង Div</h2>
    <p>នេះជាកថាខណ្ឌ <b>កូនផ្ទាល់</b> របស់ div (<code>div > p</code>) និងជា <b>បងប្អូនជាប់គ្នា</b> របស់ h2 (<code>h2 + p</code>) ។</p>
    <span>នេះជា <b>span</b> មួយក្នុង div (<code>div span</code>) ។</span>
    <p>នេះជាកថាខណ្ឌ <b>កូនផ្ទាល់</b> របស់ div មួយទៀត និងជា <b>បងប្អូនទូទៅ</b> របស់ h2 (<code>h2 ~ p</code>) ។</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
    <span>នេះជា span មួយទៀត។</span>
    <p>នេះជាកថាខណ្ឌចុងក្រោយក្នុង div របស់ div (<code>div > p</code>) និងជា <b>បងប្អូនទូទៅ</b> របស់ h2 (<code>h2 ~ p</code>) ។</p>
  </div>

  <h3>ចំណងជើងនៅខាងក្រៅ Div</h3>
  <p>នេះជាកថាខណ្ឌនៅខាងក្រៅ div ។</p>
</body>
</html>
\`\`\`

\`\`\`css
/* 1. Descendant Selector: Styles all <span> elements that are descendants of a <div> */
div span {
  color: #c0392b; /* កំណត់ពណ៌អក្សរ */
  font-weight: bold; /* ធ្វើឱ្យអក្សរដិត */
}

/* 2. Child Selector: Styles only direct <p> children of a <div> */
div > p {
  background-color: #e6f7ff; /* កំណត់ពណ៌ផ្ទៃខាងក្រោយ */
  padding: 8px; /* កំណត់ padding */
  border-left: 4px solid #3498db; /* បន្ថែម border ខាងឆ្វេង */
  margin-bottom: 10px; /* កំណត់ margin ខាងក្រោម */
}

/* 3. Adjacent Sibling Selector: Styles a <p> element immediately after an <h2> */
h2 + p {
  font-style: italic; /* ធ្វើឱ្យអក្សរទ្រេត */
  color: #27ae60; /* កំណត់ពណ៌អក្សរ */
  text-decoration: none; /* លុប underline (ប្រសិនបើមានពី General Sibling) */
  border-bottom: 1px dashed #27ae60; /* បន្ថែម border ខាងក្រោម */
  padding-bottom: 5px; /* កំណត់ padding ខាងក្រោម */
}

/* 4. General Sibling Selector: Styles all <p> elements that are siblings of an <h2> and come after it */
h2 ~ p {
  text-decoration: underline; /* ដាក់បន្ទាត់ពីក្រោមអត្ថបទ */
}
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Selector មួយណាដែលជ្រើសរើស Element កូនចៅ (Descendant) គ្រប់កម្រិត?',
      options: ['`>` (Child Selector)', '`+` (Adjacent Sibling Selector)', '` ` (Descendant Selector)', '`~` (General Sibling Selector)'],
      correct: 2,
      explanation: 'Descendant Selector (ប្រើចន្លោះ) ជ្រើសរើស Element កូនចៅគ្រប់កម្រិត។'
    },
    {
      question: 'តើ Selector មួយណាដែលជ្រើសរើស Element កូនផ្ទាល់ (Direct Child) របស់ Parent Element?',
      options: ['` ` (Descendant Selector)', '`>` (Child Selector)', '`+` (Adjacent Sibling Selector)', '`~` (General Sibling Selector)'],
      correct: 1,
      explanation: 'Child Selector (>) ជ្រើសរើស Element ដែលជាកូនផ្ទាល់របស់ Parent Element ។'
    },
    {
      question: 'តើ Selector `h1 + p` នឹងជ្រើសរើស Element ណា?',
      options: [
        'គ្រប់ Element `p` ទាំងអស់នៅក្នុង `h1`',
        'គ្រប់ Element `p` ទាំងអស់ដែលមាន Parent ដូច `h1`',
        'Element `p` ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី `h1` និងមាន Parent ដូចគ្នា',
        'គ្រប់ Element `p` ទាំងអស់ដែលនៅពីក្រោយ `h1` និងមាន Parent ដូចគ្នា'
      ],
      correct: 2,
      explanation: '`h1 + p` ជ្រើសរើស Element `p` ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី `h1` ហើយមាន Parent ដូចគ្នា។'
    },
    {
      question: 'តើ Selector `div ~ p` នឹងជ្រើសរើស Element ណា?',
      options: [
        'គ្រប់ Element `p` ទាំងអស់នៅក្នុង `div`',
        'គ្រប់ Element `p` ទាំងអស់ដែលមាន Parent ដូច `div` និងនៅពីក្រោយ `div`',
        'Element `p` ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី `div`',
        'Element `p` ដែលជាកូនផ្ទាល់របស់ `div`'
      ],
      correct: 1,
      explanation: '`div ~ p` ជ្រើសរើសគ្រប់ Element `p` ទាំងអស់ដែលជាបងប្អូនរបស់ `div` (មាន Parent ដូចគ្នា) និងនៅពីក្រោយ `div`។'
    },
    {
      question: 'តើ Combinator Selector មួយណាដែលអ្នកនឹងប្រើដើម្បីកំណត់គោលដៅ Link (<code>&lt;a&gt;</code>) ទាំងអស់នៅក្នុង Navigation Bar (<code>&lt;nav&gt;</code>) របស់អ្នក ដោយមិនគិតពីកម្រិត Nesting របស់វា?',
      options: ['`nav > a`', '`nav + a`', '`nav a`', '`nav ~ a`'],
      correct: 2,
      explanation: '`nav a` (Descendant Selector) នឹងជ្រើសរើស Link ទាំងអស់ (<code>&lt;a&gt;</code>) ដែលជាកូនចៅរបស់ Element <code>&lt;nav&gt;</code> មិនថាវាជ្រៅប៉ុណ្ណាក្នុង Hierarchy នោះទេ។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង `div p` និង `div > p`?',
      options: [
        '`div p` ជ្រើសរើសកូនផ្ទាល់ ចំណែក `div > p` ជ្រើសរើសកូនចៅ',
        '`div p` ជ្រើសរើសកូនចៅគ្រប់កម្រិត ចំណែក `div > p` ជ្រើសរើសតែកូនផ្ទាល់',
        'ពួកវាដូចគ្នាបេះបិទ',
        'មួយសម្រាប់ Class មួយទៀតសម្រាប់ ID'
      ],
      correct: 1,
      explanation: '`div p` (Descendant Selector) ជ្រើសរើស Element `p` ទាំងអស់ដែលជាកូនចៅរបស់ `div` គ្រប់កម្រិត។ `div > p` (Child Selector) ជ្រើសរើសតែកូនផ្ទាល់របស់ `div` ប៉ុណ្ណោះ។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់កំណត់រចនាប័ទ្មតែ Paragraph ទីមួយដែលនៅពីក្រោយរូបភាព (<code>&lt;img&gt;</code>) និងមាន Parent ដូចគ្នា តើ Selector មួយណាដែលសមរម្យជាងគេ?',
      options: ['`img p`', '`img > p`', '`img + p`', '`img ~ p`'],
      correct: 2,
      explanation: '`img + p` (Adjacent Sibling Selector) ជ្រើសរើស Element `p` ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី `img` និងមាន Parent ដូចគ្នា។'
    },
    // Start of 15 new questions
    {
      question: 'តើ Combinator Selectors ត្រូវបានប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'ជ្រើសរើស Element ដោយផ្អែកលើ ID របស់ពួកវា',
        'ជ្រើសរើស Element ដោយផ្អែកលើលក្ខណៈសម្បត្តិ (attributes) របស់ពួកវា',
        'ជ្រើសរើស Element ដោយផ្អែកលើទំនាក់ទំនងរបស់ពួកវាទៅវិញទៅមក',
        'ជ្រើសរើស Element ទាំងអស់នៅលើទំព័រ'
      ],
      correct: 2,
      explanation: 'Combinator Selectors ត្រូវបានប្រើដើម្បីជ្រើសរើស Element ដោយផ្អែកលើទំនាក់ទំនងរបស់ពួកវាទៅវិញទៅមកនៅក្នុងឯកសារ HTML (DOM tree)។'
    },
    {
      question: 'តើ Selector `ul li` នឹងជ្រើសរើសអ្វី?',
      options: [
        'តែ Element `<li>` ដែលជាកូនផ្ទាល់របស់ `<ul>`',
        'គ្រប់ Element `<li>` ទាំងអស់ដែលជាកូនចៅរបស់ `<ul>` គ្រប់កម្រិត',
        'Element `<li>` ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី `<ul>`',
        'Element `<ul>` ខ្លួនឯង'
      ],
      correct: 1,
      explanation: '`ul li` (Descendant Selector) ជ្រើសរើសគ្រប់ Element `<li>` ទាំងអស់ដែលជាកូនចៅរបស់ `<ul>` មិនថាវាជ្រៅប៉ុណ្ណានោះទេ។'
    },
    {
      question: 'តើ Selector `.sidebar > a` នឹងជ្រើសរើសអ្វី?',
      options: [
        'គ្រប់ Element `<a>` ទាំងអស់នៅក្នុង Element ដែលមាន class "sidebar"',
        'Element `<a>` ដែលជាកូនផ្ទាល់របស់ Element ដែលមាន class "sidebar"',
        'Element `<a>` ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី Element ដែលមាន class "sidebar"',
        'Element `<a>` ទាំងអស់ដែលមាន class "sidebar"'
      ],
      correct: 1,
      explanation: '`.sidebar > a` (Child Selector) ជ្រើសរើស Element `<a>` ដែលជាកូនផ្ទាល់របស់ Element ដែលមាន class "sidebar"។'
    },
    {
      question: 'តើ Selector `img + p` នឹងមិនជ្រើសរើស `p` ក្នុងករណីណា?',
      options: [
        'នៅពេល `p` គឺជាកូនចៅរបស់ `img`',
        'នៅពេល `p` គឺជាបងប្អូនរបស់ `img` ប៉ុន្តែមាន Element ផ្សេងនៅចន្លោះ',
        'នៅពេល `p` នៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី `img`',
        'នៅពេល `p` និង `img` មាន Parent ដូចគ្នា'
      ],
      correct: 1,
      explanation: '`img + p` (Adjacent Sibling Selector) ជ្រើសរើសតែ Element `p` ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី `img` ប៉ុណ្ណោះ។ ប្រសិនបើមាន Element ផ្សេងនៅចន្លោះ វានឹងមិនជ្រើសរើសទេ។'
    },
    {
      question: 'តើ Selector `div ~ h3` មានន័យយ៉ាងណា?',
      options: [
        'ជ្រើសរើសគ្រប់ `h3` ទាំងអស់ដែលជាកូនចៅរបស់ `div`',
        'ជ្រើសរើស `h3` ដែលជាកូនផ្ទាល់របស់ `div`',
        'ជ្រើសរើស `h3` ទាំងអស់ដែលមាន Parent ដូច `div` និងនៅពីក្រោយ `div`',
        'ជ្រើសរើស `h3` ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី `div`'
      ],
      correct: 2,
      explanation: '`div ~ h3` (General Sibling Selector) ជ្រើសរើសគ្រប់ Element `<h3>` ទាំងអស់ដែលជាបងប្អូនរបស់ `div` (មាន Parent ដូចគ្នា) និងនៅពីក្រោយ `div`។'
    },
    {
      question: 'តើ Selector មួយណាដែលត្រូវបានប្រើដើម្បីជ្រើសរើស Element មួយដែលនៅពីក្រោយ Element មួយទៀត ប៉ុន្តែមិនចាំបាច់នៅជាប់គ្នាភ្លាមៗនោះទេ?',
      options: ['Descendant Selector', 'Child Selector', 'Adjacent Sibling Selector', 'General Sibling Selector'],
      correct: 3,
      explanation: 'General Sibling Selector (~) ត្រូវបានប្រើដើម្បីជ្រើសរើស Element មួយដែលនៅពីក្រោយ Element មួយទៀត ប៉ុន្តែមិនចាំបាច់នៅជាប់គ្នាភ្លាមៗនោះទេ។'
    },
    {
      question: 'ពិចារណា HTML ខាងក្រោម៖ `<div> <p>Hello</p> <span>World</span> <p>Again</p> </div>` តើ Selector `div > p` នឹងជ្រើសរើស Element ណាខ្លះ?',
      options: [
        'ទាំង `<p>Hello</p>` និង `<p>Again</p>`',
        'តែ `<p>Hello</p>` ប៉ុណ្ណោះ',
        'តែ `<p>Again</p>` ប៉ុណ្ណោះ',
        'គ្មាន Element ណាទេ'
      ],
      correct: 0,
      explanation: 'Both `<p>Hello</p>` and `<p>Again</p>` are direct children of the `div` element.'
    },
    {
      question: 'ពិចារណា HTML ខាងក្រោម៖ `<h1>Title</h1> <div> <p>Text</p> </div> <p>Paragraph</p>` តើ Selector `h1 + div` នឹងជ្រើសរើស Element ណា?',
      options: [
        'Element `<h1>`',
        'Element `<div>`',
        'Element `<p>Text</p>`',
        'Element `<p>Paragraph</p>`'
      ],
      correct: 1,
      explanation: '`h1 + div` (Adjacent Sibling Selector) ជ្រើសរើស Element `<div>` ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី `<h1>`។'
    },
    {
      question: 'តើ Child Selector (`) អាចត្រូវបានផ្សំជាមួយ Class Selector ដែរឬទេ? ឧទាហរណ៍: `.container > .item`',
      options: ['បាន', 'មិនបាន', 'បានតែជាមួយ Element Selector', 'បានតែជាមួយ ID Selector'],
      correct: 0,
      explanation: 'Combinator Selectors អាចត្រូវបានផ្សំជាមួយ Selector ផ្សេងៗទៀត រួមទាំង Class Selector ផងដែរ។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់កំណត់រចនាប័ទ្ម Header (<code>&lt;h1&gt;</code>) ទាំងអស់ដែលស្ថិតនៅក្នុង Section (<code>&lt;section&gt;</code>) តើ Selector មួយណាដែលសមរម្យបំផុត?',
      options: ['`section > h1`', '`section + h1`', '`section h1`', '`section ~ h1`'],
      correct: 2,
      explanation: '`section h1` (Descendant Selector) គឺសមរម្យបំផុតព្រោះវាជ្រើសរើស Header ទាំងអស់ដែលជាកូនចៅរបស់ `section` មិនថាវាជាកូនផ្ទាល់ ឬនៅកម្រិតជ្រៅប៉ុណ្ណានោះទេ។'
    },
    {
      question: 'តើលំដាប់នៃ Selector សំខាន់នៅពេលប្រើ Combinator Selectors ដែរឬទេ?',
      options: ['សំខាន់ណាស់', 'មិនសំខាន់ទាល់តែសោះ', 'សំខាន់តែសម្រាប់ Child Selector', 'សំខាន់តែសម្រាប់ Adjacent Sibling Selector'],
      correct: 0,
      explanation: 'លំដាប់នៃ Selector គឺសំខាន់ណាស់នៅក្នុង Combinator Selectors ព្រោះវាជាអ្នកកំណត់ទំនាក់ទំនងរវាង Element នីមួយៗ។'
    },
    {
      question: 'តើ Combinator Selectors ប៉ះពាល់ដល់ Specificity របស់ Rule ដែរឬទេ?',
      options: [
        'ទេ ពួកវាគ្រាន់តែជ្រើសរើស Element ប៉ុណ្ណោះ',
        'បាទ/ចាស ពួកវាអាចបង្កើន Specificity ដោយការបន្ថែមលក្ខខណ្ឌជ្រើសរើស',
        'ទេ ពួកវាធ្វើឱ្យ Specificity ទាបជាង',
        'បាទ/ចាស ពួកវាធ្វើឱ្យ Specificity ក្លាយជា 0'
      ],
      correct: 1,
      explanation: 'Combinator Selectors អាចបង្កើន Specificity របស់ Rule ដោយការបន្ថែមលក្ខខណ្ឌជ្រើសរើសជាក់លាក់ ដែលធ្វើឱ្យ Rule នោះកាន់តែមានទម្ងន់។'
    },
    {
      question: 'តើ Selector `article > p + p` នឹងជ្រើសរើស Element ណា?',
      options: [
        'គ្រប់ Element `p` ទាំងអស់នៅក្នុង `article`',
        'Element `p` ទីពីរនៅក្នុង `article` ដែលជាកូនផ្ទាល់បន្ទាប់ពី `p` មួយទៀត',
        'Element `p` ទាំងអស់ដែលជាបងប្អូនរបស់ `article`',
        'Element `p` ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី `article`'
      ],
      correct: 1,
      explanation: '`article > p + p` នឹងជ្រើសរើស Element `p` ទីពីរដែលជាកូនផ្ទាល់របស់ `article` ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី Element `p` មួយទៀត។'
    },
    {
      question: 'តើ Selector `nav a:hover` គឺជាឧទាហរណ៍នៃអ្វី?',
      options: [
        'Descendant Selector ផ្សំជាមួយ Pseudo-class',
        'Child Selector ផ្សំជាមួយ Pseudo-class',
        'Adjacent Sibling Selector ផ្សំជាមួយ Pseudo-class',
        'General Sibling Selector ផ្សំជាមួយ Pseudo-class'
      ],
      correct: 0,
      explanation: '`nav a` គឺជា Descendant Selector ហើយ `:hover` គឺជា Pseudo-class ដូច្នេះវាគឺជាការផ្សំគ្នារបស់ Selector ទាំងពីរប្រភេទនេះ។'
    },
    {
      question: 'តើ Selector `main ~ footer` នឹងជ្រើសរើសអ្វី?',
      options: [
        'Element `<footer>` ទាំងអស់ដែលនៅខាងក្នុង `main`',
        'Element `<footer>` ដែលជាកូនផ្ទាល់របស់ `main`',
        'Element `<footer>` ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី `main`',
        'Element `<footer>` ទាំងអស់ដែលមាន Parent ដូច `main` និងនៅពីក្រោយ `main`'
      ],
      correct: 3,
      explanation: '`main ~ footer` (General Sibling Selector) ជ្រើសរើសគ្រប់ Element `<footer>` ទាំងអស់ដែលជាបងប្អូនរបស់ `main` (មាន Parent ដូចគ្នា) និងនៅពីក្រោយ `main`។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធដូចខាងក្រោម៖
* \`<div>\` មួយដែលមាន Class "main-content"
    * នៅខាងក្នុង \`<div>\` នោះ មាន \`<h2>\` មួយ
    * មាន \`<p>\` មួយ (ជាកូនផ្ទាល់របស់ \`div\`)
    * មាន \`<ul>\` មួយ
        * នៅខាងក្នុង \`<ul>\` នោះ មាន \`<li>\` ចំនួន ៣ (ជាកូនផ្ទាល់របស់ \`ul\`)
    * មាន \`<p>\` មួយទៀត (ជាកូនផ្ទាល់របស់ \`div\`)

សូមប្រើ **Internal CSS** និង **Combinator Selectors** ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  កំណត់ពណ៌អក្សរ **គ្រប់ Element \`<li>\` ទាំងអស់ដែលស្ថិតនៅក្នុង Element \`<div>\` (មិនថាជ្រៅប៉ុណ្ណា)** ទៅជា \`#28a745\` (បៃតង)។
2.  កំណត់ \`background-color\` សម្រាប់ **គ្រប់ Element \`<p>\` ដែលជាកូនផ្ទាល់របស់ \`<div>\`** ទៅជា \`#e2f0cb\` (បៃតងខ្ចី)។
3.  កំណត់ \`border-top\` \`2px dashed #ffc107\` សម្រាប់ **Element \`<p>\` ដែលនៅជាប់គ្នាភ្លាមៗបន្ទាប់ពី \`<h2>\`**។
4.  កំណត់ \`color\` \`#6f42c1\` (ស្វាយ) និង \`font-weight: bold;\` សម្រាប់ **គ្រប់ Element \`<li>\` ទាំងអស់ដែលនៅពីក្រោយ \`<li>\` ទីមួយ និងមាន Parent ដូចគ្នា**។`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Combinator Selectors Lab</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f8f9fa;
    }

    .main-content {
      border: 1px solid #ced4da;
      padding: 20px;
      margin: 20px auto;
      max-width: 600px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    /* 1. Descendant Selector: Styles all <li> inside any <div> */
    div li {
      color: #28a745;
    }

    /* 2. Child Selector: Styles direct <p> children of a <div> */
    div > p {
      background-color: #e2f0cb;
      padding: 5px;
      margin-bottom: 10px;
    }

    /* 3. Adjacent Sibling Selector: Styles <p> immediately after <h2> */
    h2 + p {
      border-top: 2px dashed #ffc107;
      padding-top: 10px;
      margin-top: 10px;
    }

    /* 4. General Sibling Selector: Styles all <li> after the first <li> */
    li:first-child ~ li {
      color: #6f42c1;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="main-content">
    <h2>មេរៀន Combinator Selectors</h2>
    <p>នេះជាកថាខណ្ឌទីមួយ ជាកូនផ្ទាល់របស់ Div ។</p>
    <ul>
      <li>Item 1 (លីសទីមួយ)</li>
      <li>Item 2 (លីសទីពីរ)</li>
      <li>Item 3 (លីសទីបី)</li>
    </ul>
    <p>នេះជាកថាខណ្ឌទីពីរ ជាកូនផ្ទាល់របស់ Div ផងដែរ។</p>
  </div>
</body>
</html>`
  }
};

export default CSSLesson2_2Content;