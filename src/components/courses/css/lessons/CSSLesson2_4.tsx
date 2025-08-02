// src/components/lessons/css/CSSLesson2_4.tsx
import type { LessonContent } from '../../../../types/LessonTypes';

const CSSLesson2_4Content: LessonContent = {
  title: 'CSS Attribute Selectors (ឧបករណ៍ជ្រើសរើស Attribute)',
  objectives: [
    'ស្វែងយល់ពីគោលបំណងនៃ Attribute Selectors',
    'រៀនពីរបៀបជ្រើសរើស Element តាមវត្តមាន Attribute ([attr])',
    'ដឹងពីរបៀបជ្រើសរើស Element តាមតម្លៃ Attribute ជាក់លាក់ ([attr="value"])',
    'ស្គាល់ពីរបៀបជ្រើសរើស Element តាមតម្លៃ Attribute ដែលមានពាក្យជាក់លាក់ ([attr~="value"])',
    'យល់ដឹងពីរបៀបជ្រើសរើស Element តាមតម្លៃ Attribute ដែលចាប់ផ្តើមដោយពាក្យជាក់លាក់ ([attr^="value"])',
    'ដឹងពីរបៀបជ្រើសរើស Element តាមតម្លៃ Attribute ដែលបញ្ចប់ដោយពាក្យជាក់លាក់ ([attr$="value"])',
    'រៀនពីរបៀបជ្រើសរើស Element តាមតម្លៃ Attribute ដែលមាន String ជាក់លាក់ ([attr*="value"])',
    'យល់ដឹងពីរបៀបប្រើ Attribute Selectors ដើម្បីកំណត់គោលដៅ Element យ៉ាងជាក់លាក់'
  ],
  content: `
# CSS Attribute Selectors (ឧបករណ៍ជ្រើសរើស Attribute) 🏷️

---

**Attribute Selectors** ត្រូវបានប្រើដើម្បីជ្រើសរើស Element HTML ដោយផ្អែកលើ **វត្តមាន (presence)** ឬ **តម្លៃ (value)** នៃ Attributes របស់ពួកវា។ ពួកវាផ្តល់នូវវិធីសាស្ត្រដ៏មានឥទ្ធិពល និងអាចបត់បែនបានក្នុងការកំណត់គោលដៅ Element ជាក់លាក់ ដោយមិនចាំបាច់ប្រើ Class ឬ ID តែមួយគត់នោះទេ។ Attribute Selectors ត្រូវបានសរសេរនៅក្នុង **វង់ក្រចកការ៉េ \`[]\`**។

---

## 1. Presence Attribute Selector ([attr])

ជ្រើសរើស Element ទាំងអស់ដែលមាន Attribute ជាក់លាក់ ដោយមិនគិតពីតម្លៃរបស់វា។

\`\`\`css
/* ជ្រើសរើសគ្រប់ Element <a> ទាំងអស់ដែលមាន attribute "href" */
a[href] {
  color: blue;
  text-decoration: none;
}

/* ជ្រើសរើសគ្រប់ Element <input> ទាំងអស់ដែលមាន attribute "required" */
input[required] {
  border: 1px solid red;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<input type="text" required>
<input type="email">
\`\`\`
ក្នុងឧទាហរណ៍នេះ \`input[required]\` នឹងជ្រើសរើសតែ Input ទីមួយប៉ុណ្ណោះ។

---

## 2. Exact Value Attribute Selector ([attr="value"])

ជ្រើសរើស Element ទាំងអស់ដែលមាន Attribute ជាក់លាក់ និងតម្លៃរបស់វាត្រូវតែ **ស្មើគ្នាពិតប្រាកដ** ទៅនឹង "value" ដែលបានកំណត់។

\`\`\`css
/* ជ្រើសរើសគ្រប់ Element <input> ដែលមាន type "text" */
input[type="text"] {
  width: 200px;
  padding: 5px;
}

/* ជ្រើសរើស Link ទៅកាន់ URL ជាក់លាក់ */
a[href="https://example.com/about"] {
  font-weight: bold;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<input type="text" value="Hello">
<input type="password" value="secret">
\`\`\`
ក្នុងឧទាហរណ៍នេះ \`input[type="text"]\` នឹងជ្រើសរើសតែ Input ទីមួយប៉ុណ្ណោះ។

---

## 3. Contains Word Attribute Selector ([attr~="value"])

ជ្រើសរើស Element ទាំងអស់ដែលមាន Attribute ជាក់លាក់ ដែលតម្លៃរបស់វាជាបញ្ជីនៃពាក្យដែលបំបែកដោយចន្លោះ (whitespace-separated list) ហើយ **ពាក្យមួយក្នុងចំណោមពាក្យទាំងនោះត្រូវតែស្មើគ្នាពិតប្រាកដ** ទៅនឹង "value" ដែលបានកំណត់។ នេះមានប្រយោជន៍ជាពិសេសសម្រាប់ Class Attributes។

\`\`\`css
/* ជ្រើសរើស Element ដែលមាន class "button" ក្នុងបញ្ជី Class របស់វា */
button[class~="button"] {
  background-color: #007bff;
  color: white;
}

/* ជ្រើសរើស Element ដែលមាន attribute "data-keywords" ដែលមានពាក្យ "primary" */
[data-keywords~="primary"] {
  border: 2px solid blue;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<p class="text highlight special">នេះជាកថាខណ្ឌពិសេស។</p>
<p class="intro text">នេះជាកថាខណ្ឌណែនាំ។</p>
\`\`\`
ក្នុងឧទាហរណ៍នេះ \`p[class~="highlight"]\` នឹងជ្រើសរើសតែកថាខណ្ឌទីមួយប៉ុណ្ណោះ។

---

## 4. Starts With Attribute Selector ([attr^="value"])

ជ្រើសរើស Element ទាំងអស់ដែលមាន Attribute ជាក់លាក់ ដែលតម្លៃរបស់វា **ចាប់ផ្តើមដោយ** "value" ដែលបានកំណត់។

\`\`\`css
/* ជ្រើសរើស Link ទាំងអស់ដែលចាប់ផ្តើមដោយ "https" */
a[href^="https"] {
  color: green;
}

/* ជ្រើសរើស Element ដែលមាន attribute "id" ចាប់ផ្តើមដោយ "item-" */
[id^="item-"] {
  margin-top: 10px;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<img src="images/photo.jpg">
<img src="icons/close.png">
\`\`\`
ក្នុងឧទាហរណ៍នេះ \`img[src^="images/"]\` នឹងជ្រើសរើសតែរូបភាពទីមួយប៉ុណ្ណោះ។

---

## 5. Ends With Attribute Selector ([attr$="value"])

ជ្រើសរើស Element ទាំងអស់ដែលមាន Attribute ជាក់លាក់ ដែលតម្លៃរបស់វា **បញ្ចប់ដោយ** "value" ដែលបានកំណត់។

\`\`\`css
/* ជ្រើសរើស Link ទាំងអស់ដែលបញ្ចប់ដោយ ".pdf" */
a[href$=".pdf"] {
  background-color: #f0f8ff; /* aliceblue */
  padding-right: 20px;
  background-image: url('pdf-icon.png'); /* ឧទាហរណ៍ */
  background-repeat: no-repeat;
  background-position: right center;
}

/* ជ្រើសរើស Element ដែលមាន attribute "class" បញ្ចប់ដោយ "-item" */
[class$="-item"] {
  border-left: 5px solid orange;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<link href="style.css">
<script src="script.js"></script>
\`\`\`
ក្នុងឧទាហរណ៍នេះ \`link[href$=".css"]\` នឹងជ្រើសរើសតែ Link ទីមួយប៉ុណ្ណោះ។

---

## 6. Contains Substring Attribute Selector ([attr*="value"])

ជ្រើសរើស Element ទាំងអស់ដែលមាន Attribute ជាក់លាក់ ដែលតម្លៃរបស់វា **មាន String ជាក់លាក់** នៅត្រង់ណាមួយ។

\`\`\`css
/* ជ្រើសរើស Link ទាំងអស់ដែលមាន "example" នៅត្រង់ណាមួយក្នុង URL របស់វា */
a[href*="example"] {
  text-decoration: underline;
  color: #ff8c00; /* darkorange */
}

/* ជ្រើសរើស Element ដែលមាន attribute "data-info" មាន "important" */
[data-info*="important"] {
  font-size: 1.2em;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<div data-animal="cat-family"></div>
<div data-animal="wild-dog"></div>
\`\`\`
ក្នុងឧទាហរណ៍នេះ \`div[data-animal*="cat"]\` នឹងជ្រើសរើសតែ div ទីមួយប៉ុណ្ណោះ។

---

## 7. Hyphen-separated Value Attribute Selector ([attr|="value"])

ជ្រើសរើស Element ទាំងអស់ដែលមាន Attribute ជាក់លាក់ ដែលតម្លៃរបស់វា **ស្មើគ្នាពិតប្រាកដ** ទៅនឹង "value" ដែលបានកំណត់ ឬ **ចាប់ផ្តើមដោយ** "value" តាមពីក្រោយដោយសញ្ញា Hyphen (\`-\`) ។ នេះមានប្រយោជន៍សម្រាប់ Language Codes (e.g., \`en\`, \`en-US\`).

\`\`\`css
/* ជ្រើសរើស Element ដែលមាន attribute "lang" ស្មើនឹង "en" ឬចាប់ផ្តើមដោយ "en-" */
[lang|="en"] {
  background-color: lightblue;
}
\`\`\`

### ឧទាហរណ៍៖
\`\`\`html
<div lang="en">Hello</div>
<div lang="en-US">Hi there</div>
<div lang="fr">Bonjour</div>
\`\`\`
ក្នុងឧទាហរណ៍នេះ \`[lang|="en"]\` នឹងជ្រើសរើស div ទីមួយ និងទីពីរ។

---
> **គន្លឹះ:** Attribute Selectors ផ្តល់នូវភាពបត់បែនដ៏អស្ចារ្យសម្រាប់ការរចនាម៉ូត Element ដោយផ្អែកលើព័ត៌មាននៅក្នុង HTML Attributes របស់ពួកវា។ ពួកវាជួយរក្សារចនាប័ទ្មរបស់អ្នកឱ្យស្អាត និងអាចគ្រប់គ្រងបាន។
`,
  examples: [
    `<h3>ឧទាហរណ៍រួមបញ្ចូលគ្នានៃ Attribute Selectors</h3>
<style>
/* General styling */
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

/* 1. Presence Attribute Selector */
a[target] {
  font-weight: bold;
  color: #0056b3;
}

/* 2. Exact Value Attribute Selector */
input[type="email"] {
  border: 2px solid #28a745;
}

/* 3. Contains Word Attribute Selector */
p[class~="warning"] {
  color: #dc3545;
  font-style: italic;
}

/* 4. Starts With Attribute Selector */
img[src^="img/"] {
  border: 2px dashed #ffc107;
  padding: 5px;
}

/* 5. Ends With Attribute Selector */
a[href$=".zip"] {
  background-color: #e0f7fa;
  padding: 3px 5px;
  border-radius: 3px;
}

/* 6. Contains Substring Attribute Selector */
[data-category*="web"] {
  text-decoration: underline;
  color: #6f42c1;
}

/* 7. Hyphen-separated Value Attribute Selector */
[lang|="fr"] {
  background-color: #ffeeba;
}
</style>

<div>
  <h3>Links with Target Attribute</h3>
  <a href="#" target="_blank">Open in New Tab</a>
  <a href="#">Normal Link</a>
</div>

<div>
  <h3>Input Types</h3>
  <label for="name">Name:</label>
  <input type="text" id="name" value="John Doe">
  <br>
  <label for="email">Email:</label>
  <input type="email" id="email" value="john@example.com">
</div>

<div>
  <h3>Paragraphs with specific words in class</h3>
  <p class="message success">ប្រតិបត្តិការជោគជ័យ។</p>
  <p class="status warning danger">មានបញ្ហា។</p>
  <p class="notification">ការជូនដំណឹងធម្មតា។</p>
</div>

<div>
  <h3>Images based on src start</h3>
  <img src="img/avatar.png" alt="Avatar" width="50">
  <img src="icons/menu.svg" alt="Menu Icon" width="30">
</div>

<div>
  <h3>Download Links</h3>
  <a href="/downloads/document.pdf">Download PDF</a>
  <a href="/downloads/archive.zip">Download ZIP</a>
  <a href="/downloads/image.jpg">View Image</a>
</div>

<div>
  <h3>Data Attributes</h3>
  <span data-category="frontend webdev">Frontend Development</span><br>
  <span data-category="backend database">Backend Development</span><br>
  <span data-category="mobile native">Mobile Development</span>
</div>

<div>
  <h3>Language Attributes</h3>
  <p lang="en">Hello, world!</p>
  <p lang="en-GB">Good morning!</p>
  <p lang="fr">Bonjour le monde!</p>
  <p lang="de">Hallo Welt!</p>
</div>

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Attribute Selectors Example</title>
  <style>
    /* General styling */
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

    /* 1. Presence Attribute Selector */
    a[target] {
      font-weight: bold;
      color: #0056b3;
    }

    /* 2. Exact Value Attribute Selector */
    input[type="email"] {
      border: 2px solid #28a745;
    }

    /* 3. Contains Word Attribute Selector */
    p[class~="warning"] {
      color: #dc3545;
      font-style: italic;
    }

    /* 4. Starts With Attribute Selector */
    img[src^="img/"] {
      border: 2px dashed #ffc107;
      padding: 5px;
    }

    /* 5. Ends With Attribute Selector */
    a[href$=".zip"] {
      background-color: #e0f7fa;
      padding: 3px 5px;
      border-radius: 3px;
    }

    /* 6. Contains Substring Attribute Selector */
    [data-category*="web"] {
      text-decoration: underline;
      color: #6f42c1;
    }

    /* 7. Hyphen-separated Value Attribute Selector */
    [lang|="fr"] {
      background-color: #ffeeba;
    }
  </style>
</head>
<body>
  <div>
    <h3>Links with Target Attribute</h3>
    <a href="#" target="_blank">Open in New Tab</a>
    <a href="#">Normal Link</a>
  </div>

  <div>
    <h3>Input Types</h3>
    <label for="name">Name:</label>
    <input type="text" id="name" value="John Doe">
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" value="john@example.com">
  </div>

  <div>
    <h3>Paragraphs with specific words in class</h3>
    <p class="message success">ប្រតិបត្តិការជោគជ័យ។</p>
    <p class="status warning danger">មានបញ្ហា។</p>
    <p class="notification">ការជូនដំណឹងធម្មតា។</p>
  </div>

  <div>
    <h3>Images based on src start</h3>
    <img src="img/avatar.png" alt="Avatar" width="50">
    <img src="icons/menu.svg" alt="Menu Icon" width="30">
  </div>

  <div>
    <h3>Download Links</h3>
    <a href="/downloads/document.pdf">Download PDF</a>
    <a href="/downloads/archive.zip">Download ZIP</a>
    <a href="/downloads/image.jpg">View Image</a>
  </div>

  <div>
    <h3>Data Attributes</h3>
    <span data-category="frontend webdev">Frontend Development</span><br>
    <span data-category="backend database">Backend Development</span><br>
    <span data-category="mobile native">Mobile Development</span>
  </div>

  <div>
    <h3>Language Attributes</h3>
    <p lang="en">Hello, world!</p>
    <p lang="en-GB">Good morning!</p>
    <p lang="fr">Bonjour le monde!</p>
    <p lang="de">Hallo Welt!</p>
  </div>
</body>
</html>
\`\`\`

\`\`\`css
/* 1. Presence Attribute Selector */
a[target] {
  font-weight: bold; /* Link ដែលមាន attribute 'target' */
  color: #0056b3;
}

/* 2. Exact Value Attribute Selector */
input[type="email"] {
  border: 2px solid #28a745; /* Input ដែលមាន type ជា 'email' */
}

/* 3. Contains Word Attribute Selector */
p[class~="warning"] {
  color: #dc3545; /* Paragraph ដែលមាន class "warning" */
  font-style: italic;
}

/* 4. Starts With Attribute Selector */
img[src^="img/"] {
  border: 2px dashed #ffc107; /* Image src ចាប់ផ្តើមដោយ 'img/' */
  padding: 5px;
}

/* 5. Ends With Attribute Selector */
a[href$=".zip"] {
  background-color: #e0f7fa; /* Link href បញ្ចប់ដោយ '.zip' */
  padding: 3px 5px;
  border-radius: 3px;
}

/* 6. Contains Substring Attribute Selector */
[data-category*="web"] {
  text-decoration: underline; /* Element ណាមួយដែលមាន data-category មានពាក្យ 'web' */
  color: #6f42c1;
}

/* 7. Hyphen-separated Value Attribute Selector */
[lang|="fr"] {
  background-color: #ffeeba; /* Element ដែលមាន lang="fr" ឬ "fr-XX" */
}
\`\`\`
`
  ],
  quiz: [
    {
      question: 'តើ Attribute Selector មួយណាដែលជ្រើសរើស Element ដោយផ្អែកលើវត្តមានរបស់ Attribute?',
      options: ['`[attr="value"]`', '`[attr]`', '`[attr~="value"]`', '`[attr^="value"]`'],
      correct: 1,
      explanation: '`[attr]` ជ្រើសរើស Element ទាំងអស់ដែលមាន Attribute ជាក់លាក់ ដោយមិនគិតពីតម្លៃរបស់វា។'
    },
    {
      question: 'តើ Selector `a[href="https://example.com"]` នឹងជ្រើសរើស Link ណា?',
      options: [
        'គ្រប់ Link ទាំងអស់ដែលមាន "example.com" នៅក្នុង href របស់វា',
        'គ្រប់ Link ទាំងអស់ដែល href ស្មើគ្នាពិតប្រាកដទៅនឹង "https://example.com"',
        'គ្រប់ Link ទាំងអស់ដែល href ចាប់ផ្តើមដោយ "https://example.com"',
        'គ្រប់ Link ទាំងអស់ដែលមាន href បញ្ចប់ដោយ "example.com"'
      ],
      correct: 1,
      explanation: '`a[href="https://example.com"]` ជ្រើសរើស Link ដែលមាន `href` ស្មើគ្នាពិតប្រាកដទៅនឹង "https://example.com"។'
    },
    {
      question: 'តើ Selector មួយណាដែលត្រូវបានប្រើដើម្បីកំណត់គោលដៅ Element ដែលមាន Attribute ដែលតម្លៃរបស់វាចាប់ផ្តើមដោយ String ជាក់លាក់?',
      options: ['`[attr$="value"]`', '`[attr*="value"]`', '`[attr^="value"]`', '`[attr~="value"]`'],
      correct: 2,
      explanation: '`[attr^="value"]` (Starts With Attribute Selector) ត្រូវបានប្រើដើម្បីកំណត់គោលដៅ Element ដែលមាន Attribute ដែលតម្លៃរបស់វាចាប់ផ្តើមដោយ String ជាក់លាក់។'
    },
    {
      question: 'តើ Selector `input[type="checkbox"]` ជាឧទាហរណ៍នៃ Selector ប្រភេទណា?',
      options: ['Presence Attribute Selector', 'Exact Value Attribute Selector', 'Contains Word Attribute Selector', 'General Sibling Selector'],
      correct: 1,
      explanation: '`input[type="checkbox"]` គឺជា Exact Value Attribute Selector ព្រោះវាជ្រើសរើស Element `input` ដែល `type` Attribute របស់វាមានតម្លៃស្មើគ្នាពិតប្រាកដនឹង "checkbox"។'
    },
    {
      question: 'តើ Selector `[class~="active"]` នឹងជ្រើសរើស Element ណាខ្លះ?',
      options: [
        'Element ទាំងអស់ដែលមាន Class ឈ្មោះ "active" តែមួយគត់',
        'Element ទាំងអស់ដែលមាន Class ឈ្មោះ "active" រួមបញ្ចូលក្នុងបញ្ជី Class ដែលបំបែកដោយចន្លោះ',
        'Element ទាំងអស់ដែលមាន Class ចាប់ផ្តើមដោយ "active"',
        'Element ទាំងអស់ដែលមាន Class បញ្ចប់ដោយ "active"'
      ],
      correct: 1,
      explanation: '`[class~="active"]` ជ្រើសរើស Element ទាំងអស់ដែលមាន Class ឈ្មោះ "active" រួមបញ្ចូលក្នុងបញ្ជី Class ដែលបំបែកដោយចន្លោះ (ឧទាហរណ៍៖ `<div class="menu active item">`)។'
    },
    {
      question: 'តើ Selector `a[href$=".pdf"]` នឹងជ្រើសរើស Element ណា?',
      options: [
        'Link ទាំងអស់ដែលមាន "pdf" នៅត្រង់ណាមួយក្នុង href របស់វា',
        'Link ទាំងអស់ដែល href របស់វាស្មើគ្នាពិតប្រាកដនឹង ".pdf"',
        'Link ទាំងអស់ដែល href របស់វាបញ្ចប់ដោយ ".pdf"',
        'Link ទាំងអស់ដែល href របស់វាចាប់ផ្តើមដោយ ".pdf"'
      ],
      correct: 2,
      explanation: '`a[href$=".pdf"]` ជ្រើសរើស Link ទាំងអស់ដែល `href` Attribute របស់វាបញ្ចប់ដោយ ".pdf"។'
    },
    {
      question: 'តើ Attribute Selectors ត្រូវបានសរសេរនៅក្នុងវង់ក្រចកប្រភេទណា?',
      options: ['`()` (Parentheses)', '`{}` (Curly Braces)', '`[]` (Square Brackets)', '`< >` (Angle Brackets)'],
      correct: 2,
      explanation: 'Attribute Selectors ត្រូវបានសរសេរនៅក្នុងវង់ក្រចកការ៉េ `[]`។'
    },
    {
      question: 'តើ Selector [data-info*="success"] នឹងជ្រើសរើស Element ណាខ្លះ?',
      options: [
        ' Element ទាំងអស់ដែលមាន Attribute data-info ដែលតម្លៃរបស់វាចាប់ផ្តើមដោយ "success" ',
        ' Element ទាំងអស់ដែលមាន Attribute data-info ដែលតម្លៃរបស់វាមាន String "success" នៅត្រង់ណាមួយ',
        ' Element ទាំងអស់ដែលមាន Attribute data-info ដែលតម្លៃរបស់វាស្មើគ្នាពិតប្រាកដនឹង "success"',
        ' Element ទាំងអស់ដែលមាន Attribute data-info ដែលតម្លៃរបស់វាជាបញ្ជីពាក្យដែលមាន "success"'
      ],
      correct: 1,
      explanation: '[attr*="value"] (Contains Substring Attribute Selector) ជ្រើសរើស Element ដែល Attribute របស់វាមាន String ជាក់លាក់នៅត្រង់ណាមួយ'
    },
    {
      question: ' តើ Selector [lang|="de"] នឹងជ្រើសរើស Element ណាខ្លះ?',
      options: [
        ' Element ទាំងអស់ដែលមាន Attribute lang ស្មើគ្នាពិតប្រាកដនឹង "de"',
        ' Element ទាំងអស់ដែលមាន Attribute lang ចាប់ផ្តើមដោយ "de"',
        ' Element ទាំងអស់ដែលមាន Attribute lang ស្មើគ្នាពិតប្រាកដនឹង "de" ឬចាប់ផ្តើមដោយ "de-"',
        ' Element ទាំងអស់ដែលមាន Attribute lang មាន String "de"'
      ],
      correct: 2,
      explanation: '[attr|="value"] (Hyphen-separated Value Attribute Selector) ជ្រើសរើស Element ដែល Attribute របស់វាស្មើគ្នាពិតប្រាកដនឹង "value" ឬចាប់ផ្តើមដោយ "value" តាមពីក្រោយដោយសញ្ញា Hyphen (-)។'
    },
    {
      question: ' តើ Attribute Selector មួយណាដែលមានប្រយោជន៍បំផុតសម្រាប់ការកំណត់គោលដៅ Class ជាក់លាក់ដែលជាផ្នែកមួយនៃបញ្ជី Class ដែលបំបែកដោយចន្លោះ?',
      options: [
        ' [attr="value"]',
        '[attr~="value"]',
        '[attr^="value"]',
        '[attr*="value"]'
      ],
      correct: 1,
      explanation: '[attr~="value"] (Contains Word Attribute Selector) ត្រូវបានប្រើជាពិសេសដើម្បីជ្រើសរើស Element ដែលតម្លៃ Attribute ជាបញ្ជីនៃពាក្យដែលបំបែកដោយចន្លោះ ហើយពាក្យមួយក្នុងចំណោមពាក្យទាំងនោះត្រូវតែស្មើគ្នាពិតប្រាកដនឹង "value" ដែលបានកំណត់។ នេះស័ក្តិសមបំផុតសម្រាប់ Class Attributes។'
    },
    {
      question: 'ប្រសិនបើអ្នកចង់កំណត់រចនាប័ទ្មរូបភាពទាំងអស់ដែល src Attribute របស់វាបញ្ចប់ដោយ .png តើ Selector មួយណាដែលអ្នកគួរប្រើ?',
      options: [
        ' img[src^=".png"]',
        'img[src*=".png"]',
        'img[src=".png"]',
        ' img[src$=".png"]'
      ],
      correct: 3,
      explanation: '[attr$="value"] (Ends With Attribute Selector) ត្រូវបានប្រើដើម្បីជ្រើសរើស Element ដែល Attribute របស់វាបញ្ចប់ដោយ String ជាក់លាក់។'
    },
    {
      question: 'តើគោលបំណងចម្បងនៃ Attribute Selectors គឺអ្វី?',
      options: [
        'ដើម្បីជ្រើសរើស Element ដោយផ្អែកលើ ID ឬ Class របស់ពួកវា។',
        'ដើម្បីជ្រើសរើស Element ដោយផ្អែកលើវត្តមាន ឬតម្លៃនៃ Attributes របស់ពួកវា។',
        'ដើម្បីកំណត់គោលដៅ Element កូនចៅរបស់ Element ផ្សេងទៀត។',
        ' ដើម្បីអនុវត្តរចនាប័ទ្មទៅគ្រប់ Element ទាំងអស់នៅលើទំព័រ។'
      ],
      correct: 1,
      explanation: 'Attribute Selectors ត្រូវបានប្រើដើម្បីជ្រើសរើស Element HTML ដោយផ្អែកលើវត្តមាន (presence) ឬតម្លៃ (value) នៃ Attributes របស់ពួកវា។'
    },
    {
      question: ' តើ Selector មួយណាដែលជ្រើសរើស Link ទាំងអស់ដែល href Attribute របស់វាចាប់ផ្តើមដោយ http://?',
      options: [
        'a[href="http://"]',
        'a[href*="http://"]',
        'a[href^="http://"]',
        '  a[href~="http://"]'
      ],
      correct: 2,
      explanation: '[attr^="value"] (Starts With Attribute Selector) ត្រូវបានប្រើដើម្បីជ្រើសរើស Element ដែល Attribute របស់វាចាប់ផ្តើមដោយ String ជាក់លាក់។'
    },
    {
      question: ' តើ Selector មួយណាដែលជ្រើសរើស Link ទាំងអស់ដែល href Attribute របស់វាចាប់ផ្តើមដោយ http://?',
      options: [
        'a[href="http://"]',
        'a[href*="http://"]',
        'a[href^="http://"]',
        '  a[href~="http://"]'
      ],
      correct: 2,
      explanation: '[attr^="value"] (Starts With Attribute Selector) ត្រូវបានប្រើដើម្បីជ្រើសរើស Element ដែល Attribute របស់វាចាប់ផ្តើមដោយ String ជាក់លាក់។'
    }
  ],
  lab: {
    task: `បង្កើតឯកសារ HTML មួយដែលមានរចនាសម្ព័ន្ធដូចខាងក្រោម៖
* \`<div>\` មួយដែលមាន Paragraph ចំនួន ៣៖
    * Paragraph ទីមួយមាន Attribute \`data-type="important"\` ។
    * Paragraph ទីពីរមាន Attribute \`data-role="admin-user"\` ។
    * Paragraph ទីបីមាន Attribute \`data-type="note"\` ។
* \`<input>\` Field ចំនួន ៣៖
    * មួយមាន \`type="text"\` ។
    * មួយមាន \`type="password"\` ។
    * មួយមាន \`type="submit"\` ។
* \`<a>\` Link ចំនួន ៣៖
    * មួយទៅកាន់ \`"https://www.example.com/download/file.zip"\` ។
    * មួយទៅកាន់ \`"http://blog.example.org"\` ។
    * មួយទៅកាន់ \`"https://photos.example.com/gallery"\` ។

សូមប្រើ **Internal CSS** និង **Attribute Selectors** ដើម្បីអនុវត្តកិច្ចការដូចខាងក្រោម៖

1.  កំណត់ \`background-color: #ffcccc;\` សម្រាប់ Paragraph ទាំងអស់ដែលមាន Attribute \`data-type\` ។
2.  កំណត់ \`border: 2px solid #007bff;\` សម្រាប់ Input Field ទាំងអស់ដែលមាន \`type="text"\` ។
3.  កំណត់ \`color: green;\` និង \`text-decoration: underline;\` សម្រាប់ Link ទាំងអស់ដែល \`href\` ចាប់ផ្តើមដោយ \`"https://"\` ។
4.  កំណត់ \`background-color: #d4edda;\` សម្រាប់ Element ទាំងអស់ដែលមាន Attribute \`data-role\` ដែលតម្លៃរបស់វាមានពាក្យ \`"admin"\` ។
5.  កំណត់ \`font-weight: bold;\` និង \`color: #8a2be2;\` សម្រាប់ Link ទាំងអស់ដែល \`href\` បញ្ចប់ដោយ \`".zip"\` ។
6.  កំណត់ \`box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\` សម្រាប់ Input Field ទាំងអស់ដែលមាន Attribute \`type\` (មិនថាប្រភេទអ្វីទេ)។`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Attribute Selectors Lab</title>
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

    /* 1. Presence Attribute Selector for data-type */
    p[data-type] {
      background-color: #ffcccc;
      padding: 5px;
      margin-bottom: 5px;
    }

    /* 2. Exact Value Attribute Selector for input type */
    input[type="text"] {
      border: 2px solid #007bff;
      padding: 8px;
      margin-bottom: 10px;
      display: block;
    }

    /* Input default styling */
    input {
        padding: 8px;
        margin-bottom: 10px;
        display: block;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    /* 3. Starts With Attribute Selector for links */
    a[href^="https://"] {
      color: green;
      text-decoration: underline;
      display: block;
      margin-bottom: 5px;
    }

    /* 4. Contains Word Attribute Selector for data-role */
    [data-role~="admin"] {
      background-color: #d4edda;
      padding: 8px;
      border-radius: 4px;
    }

    /* 5. Ends With Attribute Selector for links */
    a[href$=".zip"] {
      font-weight: bold;
      color: #8a2be2;
    }

    /* 6. Presence Attribute Selector for input type (all inputs) */
    input[type] {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
  </style>
</head>
<body>
  <div>
    <h3>Paragraphs with Data Attributes</h3>
    <p data-type="important">នេះជាសារសំខាន់។</p>
    <p data-role="admin-user">សម្រាប់អ្នកប្រើប្រាស់ Admin ។</p>
    <p data-type="note">នេះជាកំណត់ចំណាំធម្មតា។</p>
    <p>នេះជាកថាខណ្ឌធម្មតា។</p>
  </div>

  <div>
    <h3>Input Fields</h3>
    <label for="username">ឈ្មោះអ្នកប្រើប្រាស់:</label>
    <input type="text" id="username" placeholder="Username">

    <label for="password">ពាក្យសម្ងាត់:</label>
    <input type="password" id="password" placeholder="Password">

    <input type="submit" value="បញ្ជូន">
  </div>

  <div>
    <h3>Download/External Links</h3>
    <a href="https://www.example.com/download/report.zip">ទាញយករបាយការណ៍ (ZIP)</a>
    <a href="http://blog.example.org">អានប្លុករបស់យើង</a>
    <a href="https://photos.example.com/gallery">មើលវិចិត្រសាលរូបភាព</a>
  </div>
</body>
</html>`
  }
};

export default CSSLesson2_4Content;