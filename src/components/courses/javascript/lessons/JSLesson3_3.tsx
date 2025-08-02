import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson3_3Content: LessonContent = {
  title: 'String Methods',
  objectives: [
    'យល់ដឹងអំពី String Methods នៅក្នុង JavaScript',
    'រៀនប្រើ Methods ដូចជា slice, substring, replace, និង split',
    'ស្វែងយល់អំពី Case Conversion និង Trimming',
    'អនុវត្តន៍ការប្រើ String Methods ដើម្បីគ្រប់គ្រងអត្ថបទ',
    'រៀនប្រើ Regular Expressions ជាមួយ String Methods'
  ],
  content: `
# String Methods ✍️

---

**String Methods** គឺជា Functions ដែលប្រើសម្រាប់ធ្វើការជាមួយ Strings ដូចជា កាត់, បំលែង, ឬស្វែងរកអត្ថបទ។ Strings នៅក្នុង JavaScript គឺ Immutable ដែលមានន័យថា Methods ទាំងនេះបង្កើត String ថ្មីជំនួសឱ្យកែប្រែ String ដើម។

---

## 1. ការចូលប្រើ Characters

ប្រើ Index ឬ Method \`charAt()\` ដើម្បីចូលប្រើ Characters។

\`\`\`javascript
let text = "សួស្តី";
console.log(text[0]); // ស
console.log(text.charAt(1)); // ួ
\`\`\`

---

## 2. String Extraction Methods

- \`slice(start, end)\`: យកផ្នែកមួយនៃ String (មិនរាប់ \`end\`)
- \`substring(start, end)\`: ស្រដៀងនឹង \`slice\` ប៉ុន្តែមិនអនុញ្ញាតឱ្យមាន Negative Index
- \`substr(start, length)\`: យកផ្នែកមួយផ្អែកលើប្រវែង

\`\`\`javascript
let text = "សួស្តី ពិភពលោក";
console.log(text.slice(0, 6)); // សួស្តី
console.log(text.substring(7, 12)); // ពិភព
console.log(text.substr(7, 5)); // ពិភព
\`\`\`

---

## 3. String Transformation Methods

- \`toUpperCase()\`: បំលែងទៅជាអក្សរធំ
- \`toLowerCase()\`: បំលែងទៅជាអក្សរតូច
- \`trim()\`: លុប Whitespace នៅដើម និងចុង
- \`replace(search, new)\`: ជំនួសអត្ថបទដំបូងដែលត្រូវគ្នា
- \`replaceAll(search, new)\`: ជំនួសអត្ថបទទាំងអស់ដែលត្រូវគ្នា

\`\`\`javascript
let text = "  សួស្តី ពិភពលោក  ";
console.log(text.toUpperCase()); // សួស្តី ពិភពលោក
console.log(text.trim()); // សួស្តី ពិភពលោក
console.log(text.replace("ពិភពលោក", "កម្ពុជា")); // សួស្តី កម្ពុជា
console.log(text.replaceAll(" ", "_")); // _សួស្តី_ពិភពលោក_
\`\`\`

---

## 4. String Splitting and Joining

- \`split(separator)\`: បំបែក String ទៅជា Array
- \`join(separator)\`: បញ្ចូល Array ទៅជា String

\`\`\`javascript
let text = "ផ្លែប៉ោម,ចេក,ស្វាយ";
let fruits = text.split(",");
console.log(fruits); // ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"]
console.log(fruits.join(" - ")); // ផ្លែប៉ោម - ចេក - ស្វាយ
\`\`\`

---

## 5. String Searching Methods

- \`includes(search)\`: ពិនិត្យថាតើ String មានអត្ថបទនោះទេ
- \`startsWith(search)\`: ពិនិត្យថាតើ String ចាប់ផ្តើមដោយអត្ថបទនោះទេ
- \`endsWith(search)\`: ពិនិត្យថាតើ String បញ្ចប់ដោយអត្ថបទនោះទេ
- \`indexOf(search)\`: បញ្ជូន Index ដំបូងនៃអត្ថបទដែលត្រូវគ្នា

\`\`\`javascript
let text = "សួស្តី ពិភពលោក";
console.log(text.includes("ពិភព")); // true
console.log(text.startsWith("សួស្តី")); // true
console.log(text.endsWith("លោក")); // true
console.log(text.indexOf("ពិភព")); // 7
\`\`\`

---

## 6. Regular Expressions ជាមួយ String Methods

ប្រើ Regular Expressions (RegExp) ជាមួយ \`replace()\` ឬ \`match()\`។

\`\`\`javascript
let text = "សួស្តី 123 ពិភពលោក";
console.log(text.replace(/\d+/, "ABC")); // សួស្តី ABC ពិភពលោក
console.log(text.match(/\d+/)); // ["123"]
\`\`\`

---

## 7. ការប្រើ String Methods ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>String Methods</title>
</head>
<body>
  <h1>សាកល្បង String Methods</h1>
  <p id="output"></p>
  <script>
    const message = "  សួស្តី ពិភពលោក!  ";
    const formatted = message.trim().toUpperCase().replace("ពិភពលោក", "កម្ពុជា");
    document.getElementById("output").innerText = formatted;
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** សួស្តី កម្ពុជា!
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ String Extraction</h3>
<p id="example1">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let text = "សួស្តី កម្ពុជា";
  console.log(text.slice(0, 6)); // សួស្តី
</script>
<pre><code class="language-javascript">
let text = "សួស្តី កម្ពុជា";
console.log(text.slice(0, 6));
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ String Splitting</h3>
<p id="example2">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let text = "ផ្លែប៉ោម,ចេក,ស្វាយ";
  let fruits = text.split(",");
  console.log(fruits); // ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"]
</script>
<pre><code class="language-javascript">
let text = "ផ្លែប៉ោម,ចេក,ស្វាយ";
let fruits = text.split(",");
console.log(fruits);
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ String Methods នៅក្នុង JavaScript ធ្វើអ្វី?',
      options: [
        'កែប្រែ String ដើម',
        'បង្កើត String ថ្មី',
        'បំលែង String ទៅ Array',
        'លុប String'
      ],
      correct: 1,
      explanation: 'String Methods បង្កើត String ថ្មីព្រោះ Strings គឺ Immutable។'
    },
    {
      question: 'តើ Method ណាមួយបំលែង String ទៅជាអក្សរធំ?',
      options: ['toLowerCase()', 'toUpperCase()', 'trim()', 'slice()'],
      correct: 1,
      explanation: '`toUpperCase()` បំលែង String ទៅជាអក្សរធំ។'
    },
    {
      question: 'តើកូដ `let text = "សួស្តី"; console.log(text.charAt(0));` នឹងបង្ហាញអ្វី?',
      options: ['ស', 'ួ', 'សួ', 'undefined'],
      correct: 0,
      explanation: '`charAt(0)` បញ្ជូន Character នៅ Index 0 គឺ "ស"។'
    },
    {
      question: 'តើ Method `split()` ធ្វើអ្វី?',
      options: [
        'បំបែក String ទៅជា Array',
        'បញ្ចូល Strings',
        'កាត់ String',
        'ជំនួស String'
      ],
      correct: 0,
      explanation: '`split()` បំបែក String ទៅជា Array ដោយប្រើ Separator�।'
    },
    {
      question: 'តើ Method `trim()` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Whitespace',
        'លុប Whitespace នៅដើម និងចុង',
        'បំលែង String ទៅជាអក្សរធំ',
        'កាត់ String'
      ],
      correct: 1,
      explanation: '`trim()` លុប Whitespace នៅដើម និងចុង String។'
    },
    {
      question: 'តើកូដ `let text = "សួស្តី កម្ពុជា"; console.log(text.slice(7, 12));` នឹងបង្ហាញអ្វី?',
      options: ['សួស្តី', 'កម្ពុជា', 'សួស្តី កម្ពុជា', 'undefined'],
      correct: 1,
      explanation: '`slice(7, 12)` យកផ្នែកពី Index 7 ដល់ 11 គឺ "កម្ពុជា"។'
    },
    {
      question: 'តើ Method `includes()` បញ្ជូនលទ្ធផលអ្វី?',
      options: ['String', 'Number', 'Boolean', 'Array'],
      correct: 2,
      explanation: '`includes()` បញ្ជូន `true` ឬ `false` អាស្រ័យលើអត្ថបទដែលស្វែងរក។'
    },
    {
      question: 'តើកូដ `let text = "សួស្តី"; console.log(text.replace("សួ", "ជំរាប"));` នឹងបង្ហាញអ្វី?',
      options: ['ជំរាបស្តី', 'សួស្តី', 'ជំរាប', 'undefined'],
      correct: 0,
      explanation: '`replace("សួ", "ជំរាប")` ជំនួស "សួ" ដោយ "ជំរាប"។'
    },
    {
      question: 'តើ Method `startsWith()` ពិនិត្យអ្វី?',
      options: [
        'អត្ថបទនៅចុង String',
        'អត្ថបទនៅដើម String',
        'អត្ថបទនៅកណ្តាល String',
        'ប្រវែង String'
      ],
      correct: 1,
      explanation: '`startsWith()` ពិនិត្យថាតើ String ចាប់ផ្តើមដោយអត្ថបទនោះទេ។'
    },
    {
      question: 'តើ Regular Expressions ប្រើជាមួយ Method ណាខ្លះ?',
      options: ['slice()', 'trim()', 'replace()', 'toUpperCase()'],
      correct: 2,
      explanation: 'Regular Expressions ត្រូវបានប្រើជាមួយ `replace()` និង `match()`។'
    },
    {
      question: 'តើកូដ `let text = "a,b,c"; console.log(text.split(",").join("-"));` នឹងបង្ហាញអ្វី?',
      options: ['a-b-c', 'a,b,c', '[a, b, c]', 'undefined'],
      correct: 0,
      explanation: '`split(",")` បំបែកទៅជា Array និង `join("-")` បញ្ចូលជា "a-b-c"�।'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ String Methods ដើម្បីធ្វើទ្រង់ទ្រាយអត្ថបទ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Text Formatter"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "កម្មវិធីធ្វើទ្រង់ទ្រាយអត្ថបទ"។
   - បន្ថែម \`<p id="formattedText">\` សម្រាប់បង្ហាញលទ្ធផល។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រកាស String \`const text = "  សួស្តី ពិភពលោក, កម្ពុជា  ";\`។
   - ប្រើ \`trim()\` ដើម្បីលុប Whitespace។
   - ប្រើ \`toUpperCase()\` ដើម្បីបំលែងទៅជាអក្សរធំ។
   - ប្រើ \`replace("ពិភពលោក", "អាស៊ី")\` ដើម្បីជំនួសអត្ថបទ។
   - ប្រើ \`split(",")\` និង \`join(" - ")\` ដើម្បីបំលែង Separator។
   - បង្ហាញលទ្ធផលនៅក្នុង \`<p id="formattedText">\`។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 16px;\` និង \`color: #444;\` សម្រាប់ \`<p>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Formatter</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p {
      font-size: 16px;
      color: #444;
    }
  </style>
</head>
<body>
  <h1>កម្មវិធីធ្វើទ្រង់ទ្រាយអត្ថបទ</h1>
  <p id="formattedText"></p>
  <script>
    const text = "  សួស្តី ពិភពលោក, កម្ពុជា  ";
    const formatted = text.trim().toUpperCase().replace("ពិភពលោក", "អាស៊ី").split(",").join(" - ");
    document.getElementById("formattedText").innerText = formatted;
  </script>
</body>
</html>
`
  }
};

export default JSLesson3_3Content;