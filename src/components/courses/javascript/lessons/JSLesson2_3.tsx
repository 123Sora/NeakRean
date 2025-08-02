import type { LessonContent } from '../../../../types/LessonTypes';

const JSLesson2_3Content: LessonContent = {
  title: 'Control Flow',
  objectives: [
    'យល់ដឹងអំពី Control Flow នៅក្នុង JavaScript',
    'រៀនប្រើ `if`, `else if`, និង `else` Statements',
    'ស្វែងយល់អំពី `switch` Statement',
    'រៀនប្រើ Loops (`for`, `while`, `do...while`)',
    'អនុវត្តន៍ការប្រើ Control Flow ដើម្បីគ្រប់គ្រងលំហូរកម្មវិធី'
  ],
  content: `
# Control Flow 🔄

---

**Control Flow** គឺជាវិធីដែល JavaScript គ្រប់គ្រងលំដាប់នៃការប្រតិបត្តិកូដ។ យើងប្រើ **Conditional Statements** (\`if\`, \`switch\`) និង **Loops** (\`for\`, \`while\`) ដើម្បីគ្រប់គ្រងលំហូរនេះ។

---

## 1. Conditional Statements

### 1.1 if, else if, else
ប្រើសម្រាប់សម្រេចចិត្តផ្អែកលើ Conditions។

\`\`\`javascript
let age = 20;
if (age >= 18) {
  console.log("អ្នកជាមនុស្សពេញវ័យ");
} else if (age >= 13) {
  console.log("អ្នកជាក្មេងជំទង់");
} else {
  console.log("អ្នកជាកុមារ");
}
\`\`\`

**លទ្ធផល:** អ្នកជាមនុស្សពេញវ័យ

---

### 1.2 switch Statement
ប្រើសម្រាប់ប្រៀបធៀបតម្លៃមួយជាមួយនឹង Cases ជាច្រើន។

\`\`\`javascript
let day = "ច័ន្ទ";
switch (day) {
  case "ច័ន្ទ":
    console.log("ថ្ងៃដំបូងនៃសប្តាហ៍");
    break;
  case "អាទិត្យ":
    console.log("ថ្ងៃសម្រាក");
    break;
  default:
    console.log("ថ្ងៃផ្សេងទៀត");
}
\`\`\`

**លទ្ធផល:** ថ្ងៃដំបូងនៃសប្តាហ៍

**ចំណាំ:** \`break\` ចាំបាច់ដើម្បីបញ្ឈប់ការប្រតិបត្តិនៅ Case នីមួយៗ។

---

## 2. Loops

### 2.1 for Loop
ប្រើសម្រាប់ធ្វើអ្វីមួយចំនួនដងជាក់លាក់។

\`\`\`javascript
for (let i = 1; i <= 5; i++) {
  console.log("លេខ:", i);
}
\`\`\`

**លទ្ធផល:**
- លេខ: 1
- លេខ: 2
- លេខ: 3
- លេខ: 4
- លេខ: 5

---

### 2.2 while Loop
ប្រើសម្រាប់ធ្វើអ្វីមួយដរាបណា Condition ជា \`true\`។

\`\`\`javascript
let i = 1;
while (i <= 5) {
  console.log("លេខ:", i);
  i++;
}
\`\`\`

**លទ្ធផល:** ដូចគ្នានឹង \`for\` Loop។

---

### 2.3 do...while Loop
ប្រតិបត្តិកូដយ៉ាងហោចណាស់ម្តង មុនពេលពិនិត្យ Condition។

\`\`\`javascript
let i = 1;
do {
  console.log("លេខ:", i);
  i++;
} while (i <= 5);
\`\`\`

**លទ្ធផល:** ដូចគ្នានឹង \`for\` និង \`while\` Loop។

---

## 3. ការប្រើ Control Flow ក្នុងកូដ

**ឧទាហរណ៍រួមបញ្ចូល:**
\`\`\`html
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Control Flow</title>
</head>
<body>
  <h1>សាកល្បង Control Flow</h1>
  <p id="output"></p>
  <script>
    let score = 85;
    let grade;
    
    if (score >= 90) {
      grade = "A";
    } else if (score >= 80) {
      grade = "B";
    } else {
      grade = "C";
    }
    
    let result = "ពិន្ទុ: " + score + ", និទ្ទេស: " + grade;
    for (let i = 1; i <= 3; i++) {
      result += "\\nអបអរសាទរ " + i;
    }
    
    document.getElementById("output").innerText = result;
  </script>
</body>
</html>
\`\`\`

**លទ្ធផល:** 
- ពិន្ទុ: 85, និទ្ទេស: B
- អបអរសាទរ 1
- អបអរសាទរ 2
- អបអរសាទរ 3
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ if Statement</h3>
<p id="ifResult">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  let temperature = 30;
  if (temperature > 25) {
    console.log("អាកាសធាតុក្តៅ");
  } else {
    console.log("អាកាសធាតុត្រជាក់");
  }
</script>
<pre><code class="language-javascript">
let temperature = 30;
if (temperature > 25) {
  console.log("អាកាសធាតុក្តៅ");
} else {
  console.log("អាកាសធាតុត្រជាក់");
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ for Loop</h3>
<p id="loopResult">ចុច Console (F12) ដើម្បីមើលលទ្ធផល</p>
<script>
  for (let i = 1; i <= 3; i++) {
    console.log("ជុំទី:", i);
  }
</script>
<pre><code class="language-javascript">
for (let i = 1; i <= 3; i++) {
  console.log("ជុំទី:", i);
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Control Flow គឺជាអ្វី?',
      options: [
        'វិធីសរសេរកូដ JavaScript',
        'វិធីគ្រប់គ្រងលំដាប់នៃការប្រតិបត្តិកូដ',
        'ប្រភេទទិន្នន័យ',
        'ឧបករណ៍សម្រាប់ Debugging'
      ],
      correct: 1,
      explanation: 'Control Flow គឺជាវិធីគ្រប់គ្រងលំដាប់នៃការប្រតិបត្តិកូដដោយប្រើ Conditional Statements និង Loops។'
    },
    {
      question: 'តើ Statement ណាមួយខាងក្រោមប្រើសម្រាប់ Conditional Statement?',
      options: ['for', 'while', 'if', 'function'],
      correct: 2,
      explanation: '`if` គឺជា Conditional Statement ដែលប្រើសម្រាប់សម្រេចចិត្តផ្អែកលើ Conditions�।'
    },
    {
      question: 'តើ `break` នៅក្នុង `switch` Statement មានតួនាទីអ្វី?',
      options: [
        'បន្តទៅ Case បន្ទាប់',
        'បញ្ឈប់ការប្រតិបត្តិនៅ Case បច្ចុប្បន្ន',
        'បង្កើត Variable ថ្មី',
        'ប្តូរតម្លៃ Condition'
      ],
      correct: 1,
      explanation: '`break` បញ្ឈប់ការប្រតិបត្តិនៅ Case បច្ចុប្បន្ន និងចាកចេញពី `switch`។'
    },
    {
      question: 'តើ Loop ណាមួយខាងក្រោមប្រតិបត្តិយ៉ាងហោចណាស់ម្តង?',
      options: ['for', 'while', 'do...while', 'switch'],
      correct: 2,
      explanation: '`do...while` ប្រតិបត្តិកូដយ៉ាងហោចណាស់ម្តងមុនពេលពិនិត្យ Condition។'
    },
    {
      question: 'តើកូដ `for (let i = 0; i < 3; i++)` នឹងប្រតិបត្តិប៉ុន្មានដង?',
      options: ['2', '3', '4', '5'],
      correct: 1,
      explanation: 'Loop នឹងប្រតិបត្តិ 3 ដង (i = 0, 1, 2) ព្រោះ Condition គឺ `i < 3`។'
    },
    {
      question: 'តើ `else if` ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ឈប់ Loop',
        'ពិនិត្យ Condition បន្ថែមបន្ទាប់ពី `if`',
        'បង្កើត Function',
        'ប្រៀបធៀបតម្លៃ'
      ],
      correct: 1,
      explanation: '`else if` ប្រើសម្រាប់ពិនិត្យ Condition បន្ថែមបន្ទាប់ពី `if`។'
    },
    {
      question: 'តើ `default` នៅក្នុង `switch` Statement មានតួនាទីអ្វី?',
      options: [
        'បញ្ឈប់ `switch`',
        'ប្រតិបត្តិនៅពេលគ្មាន Case ណាមួយត្រូវគ្នា',
        'បង្កើត Case ថ្មី',
        'ប្តូរតម្លៃ Variable'
      ],
      correct: 1,
      explanation: '`default` ប្រតិបត្តិនៅពេលគ្មាន Case ណាមួយត្រូវគ្នានឹងតម្លៃ។'
    },
    {
      question: 'តើ Loop ណាមួយស័ក្តិសមសម្រាប់ធ្វើអ្វីមួយចំនួនដងជាក់លាក់?',
      options: ['if', 'while', 'for', 'switch'],
      correct: 2,
      explanation: '`for` Loop ស័ក្តិសមសម្រាប់ធ្វើអ្វីមួយចំនួនដងជាក់លាក់។'
    },
    {
      question: 'តើកូដ `while (false)` នឹងប្រតិបត្តិទេ?',
      options: ['ប្រតិបត្តិម្តង', 'មិនប្រតិបត្តិទេ', 'ប្រតិបត្តិជាបន្តបន្ទាប់', 'បណ្តាលឱ្យកំហុស'],
      correct: 1,
      explanation: '`while (false)` មិនប្រតិបត្តិទេ ព្រោះ Condition មិនមែនជា `true`។'
    },
    {
      question: 'តើ `do...while` ខុសពី `while` ដោយរបៀបណា?',
      options: [
        'វាមិនប្រើ Condition',
        'វាប្រតិបត្តិយ៉ាងហោចណាស់ម្តង',
        'វាមាន Scope ផ្សេង',
        'វាប្រើសម្រាប់ Conditional Statement'
      ],
      correct: 1,
      explanation: '`do...while` ប្រតិបត្តិកូដយ៉ាងហោចណាស់ម្តងមុនពេលពិនិត្យ Condition។'
    },
    {
      question: 'តើកូដខាងក្រោមនឹងបង្ហាញអ្វី? `let x = 10; if (x > 5) { console.log("ធំ"); } else { console.log("តូច"); }`',
      options: ['ធំ', 'តូច', 'undefined', 'null'],
      correct: 0,
      explanation: 'ព្រោះ `x > 5` ជា `true`, ដូច្នេះនឹងបង្ហាញ "ធំ"។'
    },
    {
      question: 'តើ `for` Loop ត្រូវការអ្វីខាងក្រោមនេះ?',
      options: [
        'Condition តែមួយ',
        'Initialization, Condition, Update',
        'Case និង Break',
        'Function Definition'
      ],
      correct: 1,
      explanation: '`for` Loop ត្រូវការ Initialization, Condition, និង Update (ឧ. `for (let i = 0; i < 5; i++)`)។'
    }
  ],
  lab: {
    task: `
បង្កើតឯកសារ HTML ដែលប្រើ Control Flow ដើម្បីបង្ហាញលទ្ធផលផ្អែកលើពិន្ទុ។

**តម្រូវការ:**

1. **HTML Structure:**
   - បង្កើតឯកសារ HTML ដែលមាន \`<html>\`, \`<head>\`, និង \`<body>\`។
   - បន្ថែម \`<meta charset="UTF-8">\` និង \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`។
   - កំណត់ Title៖ "Grade Calculator"។
   - បន្ថែម \`<h1>\` ដែលមានអត្ថបទ "កម្មវិធីគណនានិទ្ទេស"។
   - បន្ថែម \`<p id="gradeResult">\` សម្រាប់បង្ហាញលទ្ធផល។

2. **JavaScript:**
   - បន្ថែម \`<script>\` នៅក្នុង \`<body>\`។
   - ប្រកាស Variable \`const score = 92;\` (Number)។
   - ប្រើ \`if\`, \`else if\`, និង \`else\` ដើម្បីកំណត់និទ្ទេស:
     - ប្រសិនបើ \`score >= 90\`: និទ្ទេស = "A"
     - ប្រសិនបើ \`score >= 80\`: និទ្ទេស = "B"
     - ប្រសិនបើ \`score >= 70\`: និទ្ទេស = "C"
     - បើមិនដូច្នេះទេ: និទ្ទេស = "D"
   - ប្រើ \`for\` Loop ដើម្បីបន្ថែមសារអបអរសាទរចំនួន 3 ដង (ឧ. "អបអរសាទរ 1", "អបអរសាទរ 2", "អបអរសាទរ 3")។
   - បង្ហាញលទ្ធផលនៅក្នុង \`<p id="gradeResult">\` ដោយប្រើ Template Literal ដូចជា: "ពិន្ទុ: 92, និទ្ទេស: A\nអបអរសាទរ 1\nអបអរសាទរ 2\nអបអរសាទរ 3"។

3. **Basic Styling:**
   - បន្ថែម \`<style>\` នៅក្នុង \`<head>\`:
     - កំណត់ \`font-family: Arial, sans-serif;\` និង \`text-align: center;\` សម្រាប់ \`body\`។
     - កំណត់ \`font-size: 16px;\` និង \`color: #555;\` សម្រាប់ \`<p>\`។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង Browser និងបើក Console (F12) ដើម្បីពិនិត្យកំហុស។
    `,
    solution: `
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grade Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    p {
      font-size: 16px;
      color: #555;
    }
  </style>
</head>
<body>
  <h1>កម្មវិធីគណនានិទ្ទេស</h1>
  <p id="gradeResult"></p>
  <script>
    const score = 92;
    let grade;
    
    if (score >= 90) {
      grade = "A";
    } else if (score >= 80) {
      grade = "B";
    } else if (score >= 70) {
      grade = "C";
    } else {
      grade = "D";
    }
    
    let result = \`ពិន្ទុ: \${score}, និទ្ទេស: \${grade}\`;
    for (let i = 1; i <= 3; i++) {
      result += \`\\nអបអរសាទរ \${i}\`;
    }
    
    document.getElementById("gradeResult").innerText = result;
  </script>
</body>
</html>
`
  }
};

export default JSLesson2_3Content;