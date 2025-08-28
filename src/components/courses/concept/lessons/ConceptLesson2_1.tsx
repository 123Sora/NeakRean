import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson2_1Content: LessonContent = {
  title: 'ការយល់ដឹងអំពី Variables',
  objectives: [
    'យល់ពីនិយមន័យ និងសារៈសំខាន់នៃ Variables ក្នុងការសរសេរកម្មវិធី',
    'ស្វែងយល់ពីរបៀបប្រកាស (Declare) Variables ក្នុងភាសាផ្សេងៗ',
    'រៀនពីការដាក់ឈ្មោះ Variables តាម Naming Conventions',
    'ស្គាល់ Scope និង Lifetime នៃ Variables',
    'ប្រើ Variables ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# ការយល់ដឹងអំពី Variables 📚💻

---

**Variables** គឺជាទីតាំងផ្ទុកទិន្នន័យនៅក្នុងកម្មវិធី ដែលអនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍រក្សាទុក និងគ្រប់គ្រងទិន្នន័យ។ វាដូចជាប្រអប់ដែលមានឈ្មោះ និងអាចផ្ទុកតម្លៃផ្សេងៗ ដូចជាលេខ អត្ថបទ ឬទិន្នន័យស្មុគស្មាញ។

---

## 1. និយមន័យនៃ Variables

Variable គឺជាឈ្មោះដែលតំណាងឱ្យទីតាំងផ្ទុកទិន្នន័យនៅក្នុង Memory។ លក្ខណៈសំខាន់ៗរួមមាន៖
- **ឈ្មោះ (Name):** ឈ្មោះដែលអ្នកប្រើដើម្បីសំដៅទៅ Variable (ឧ. \`age\`, \`name\`)។
- **តម្លៃ (Value):** ទិន្នន័យដែល Variable ផ្ទុក (ឧ. ២៥, "សុខា")។
- **ប្រភេទទិន្នន័យ (Data Type):** បញ្ជាក់ប្រភេទទិន្នន័យដែល Variable អាចផ្ទុក (ឧ. Integer, String)។

---

## 2. ការប្រកាស Variables

ការប្រកាស Variable អាស្រ័យលើភាសាសរសេរកម្មវិធី៖
- **Python:** មិនតម្រូវឱ្យបញ្ជាក់ Data Type។
  \`\`\`python
  age = 25
  name = "សុខា"
  \`\`\`
- **Java:** តម្រូវឱ្យបញ្ជាក់ Data Type។
  \`\`\`java
  int age = 25;
  String name = "សុខា";
  \`\`\`
- **JavaScript:** ប្រើ \`var\`, \`let\`, ឬ \`const\`។
  \`\`\`javascript
  let age = 25;
  const name = "សុខា";
  \`\`\`

---

## 3. Naming Conventions

ការដាក់ឈ្មោះ Variable គួរតែធ្វើតាមច្បាប់៖
- ប្រើអក្សរតូច និងធំ (a-z, A-Z), លេខ (0-9), និង Underscore (\`_\`)។
- ឈ្មោះមិនអាចចាប់ផ្តើមដោយលេខ។
- ជៀសវាងប្រើ Keywords (ឧ. \`if\`, \`for\`)។
- ប្រើឈ្មោះដែលមានអត្ថន័យ (ឧ. \`student_name\` ជំនួសឱ្យ \`x\`)។
- **Conventions ទូទៅ:**
  - **CamelCase:** \`studentName\` (JavaScript, Java)
  - **Snake_case:** \`student_name\` (Python)
  - **អក្សរធំ:** \`MAX_VALUE\` (Constants)

---

## 4. Scope និង Lifetime នៃ Variables

- **Scope:** តំបន់ដែល Variable អាចប្រើបាន។
  - **Local Scope:** Variable ប្រកាសនៅក្នុង Function ឬ Block (ឧ. ក្នុង \`{}\`)។
  - **Global Scope:** Variable ប្រកាសនៅខាងក្រៅ Function។
- **Lifetime:** រយៈពេលដែល Variable មាននៅក្នុង Memory។
  - Local Variables ត្រូវបានបំផ្លាញនៅពេល Function បញ្ចប់។
  - Global Variables មានរហូតដល់កម្មវិធីបញ្ចប់។

---

## 5. ការប្រើ Variables ក្នុងកម្មវិធី

Variables ត្រូវបានប្រើដើម្បី៖
- រក្សាទុកទិន្នន័យ (ឧ. ឈ្មោះអ្នកប្រើ, ពិន្ទុ)។
- គណនា (ឧ. ផលបូក, ផលគុណ)។
- គ្រប់គ្រង Logic (ឧ. ប្រៀបធៀបតម្លៃ)។

**ឧទាហរណ៍កូដ Python:**

\`\`\`python
# ប្រកាស Variables
name = "សុខា"
age = 25
height = 1.75

# ប្រើ Variables
print(f"សួស្តី {name}! អ្នកមានអាយុ {age} ឆ្នាំ និងកម្ពស់ {height} ម៉ែត្រ។")
\`\`\`

---

## 6. ហេតុអ្វីត្រូវប្រើ Variables?

- **ភាពងាយស្រួល:** ធ្វើឱ្យកូដអានបានស្រួល និងមានអត្ថន័យ។
- **ភាពបត់បែន:** អនុញ្ញាតឱ្យផ្លាស់ប្តូរតម្លៃដោយមិនផ្លាស់ប្តូរកូដ។
- **ការគ្រប់គ្រងទិន្នន័យ:** ជួយរក្សាទុក និងគ្រប់គ្រងទិន្នន័យ។
- **ការប្រើឡើងវិញ:** Variables អាចប្រើនៅច្រើនកន្លែងក្នុងកម្មវិធី។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រកាស Variables ក្នុង Python</h3>
<p>បង្កើតកម្មវិធីដែលប្រកាស Variables និងបង្ហាញសារ។</p>
<pre><code class="language-python">
name = "សុខា"
age = 25
print(f"សួស្តី {name}! អ្នកមានអាឯុ {age} ឆ្នាំ។")
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Variables ក្នុងការគណនា</h3>
<p>បង្កើតកម្មវိធីដែលគណនាផលបូកនៃលេខពីរ។</p>
<pre><code class="language-python">
num1 = 10
num2 = 20
sum = num1 + num2
print(f"ផលបូកនៃ {num1} និង {num2} គឺ: {sum}")
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Variable គឺជាអ្វី?',
      options: [
        'ភាសាសរសេរកម្មវិធី',
        'ទីតាំងផ្ទុកទិន្នន័យនៅក្នុង Memory',
        'បញ្ជា Command Line',
        'កម្មវិធីសម្រាប់ Debug'
      ],
      correct: 1,
      explanation: 'Variable គឺជាទីតាំងផ្ទុកទិន្នន័យនៅក្នុង Memory។'
    },
    {
      question: 'តើភាសាណាដែលមិនតម្រូវឱ្យបញ្ជាក់ Data Type ពេលប្រកាស Variable?',
      options: ['Java', 'C++', 'Python', 'C'],
      correct: 2,
      explanation: 'Python មិនតម្រូវឱ្យបញ្ជាក់ Data Type ពេលប្រកាស Variable។'
    },
    {
      question: 'តើឈ្មោះ Variable អាចចាប់ផ្តើមដោយអ្វី?',
      options: ['លេខ', 'អក្សរ', 'សញ្ញា !', 'សញ្ញា #'],
      correct: 1,
      explanation: 'ឈ្មោះ Variable អាចចាប់ផ្តើមដោយអក្សរ ឬ Underscore។'
    },
    {
      question: 'តើ Keyword អាចប្រើជាឈ្មោះ Variable បានទេ?',
      options: ['បាន', 'មិនបាន', 'បាន បើប្រើជាមួយលេខ', 'បាន បើជាអក្សរធំ'],
      correct: 1,
      explanation: 'Keyword ដូចជា `if`, `for` មិនអាចប្រើជាឈ្មោះ Variable បានទេ។'
    },
    {
      question: 'តើអ្វីជា Local Scope?',
      options: [
        'Variable ដែលប្រើបានពេញកម្មវិធី',
        'Variable ដែលប្រើបានតែក្នុង Function ឬ Block',
        'Variable ដែលមានជានិច្ច',
        'Variable ដែលផ្ទុកលេខតែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'Local Scope គឺជា Variable ដែលប្រើបានតែក្នុង Function ឬ Block។'
    },
    {
      question: 'តើ `const` ក្នុង JavaScript មានន័យថាអ្វី?',
      options: [
        'Variable អាចផ្លាស់ប្តូរតម្លៃបាន',
        'Variable មិនអាចផ្លាស់ប្តូរតម្លៃបាន',
        'Variable មាន Scope ពេញកម្មវិធី',
        'Variable សម្រាប់លេខតែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: '`const` ក្នុង JavaScript ប្រើសម្រាប់ Variable ដែលមិនអាចផ្លាស់ប្តូរតម្លៃបាន។'
    },
    {
      question: 'តើ Naming Convention ណាដែលប្រើអក្សរតូច និង Underscore?',
      options: ['CamelCase', 'Snake_case', 'PascalCase', 'UpperCase'],
      correct: 1,
      explanation: 'Snake_case ប្រើអក្សរតូច និង Underscore (ឧ. `student_name`)។'
    },
    {
      question: 'តើ Global Variable មាន Lifetime ដូចម្តេច?',
      options: [
        'បញ្ចប់នៅពេល Function បញ្ចប់',
        'មានរហូតដល់កម្មវិធីបញ្ចប់',
        'មានតែនៅក្នុង Loop',
        'បញ្ចប់បន្ទាប់ពីការប្រើម្តង'
      ],
      correct: 1,
      explanation: 'Global Variable មានរហូតដល់កម្មវិធីបញ្ចប់។'
    },
    {
      question: 'តើភាសាណាប្រើ `int` ដើម្បីប្រកាស Variable សម្រាប់លេខគត់?',
      options: ['Python', 'JavaScript', 'Java', 'Ruby'],
      correct: 2,
      explanation: 'Java ប្រើ `int` ដើម្បីប្រកាស Variable សម្រាប់លេខគត់។'
    },
    {
      question: 'តើអ្វីជាគោលបំណងសំខាន់នៃ Variable?',
      options: [
        'រចនា UI',
        'ផ្ទុក និងគ្រប់គ្រងទិន្នន័យ',
        'គ្រប់គ្រង Hardware',
        'បង្កើត Network'
      ],
      correct: 1,
      explanation: 'Variable ប្រើដើម្បីផ្ទុក និងគ្រប់គ្រងទិន្នន័យ។'
    },
    {
      question: 'តើឈ្មោះ Variable ដូចជា `student_name` ប្រើ Naming Convention អ្វី?',
      options: ['CamelCase', 'Snake_case', 'PascalCase', 'Kebab-case'],
      correct: 1,
      explanation: '`student_name` ប្រើ Snake_case។'
    },
    {
      question: 'តើ Variable ក្នុង Python ត្រូវការបញ្ជាក់ Data Type ដែរឬទេ?',
      options: ['ត្រូវការ', 'មិនត្រូវការ', 'ត្រូវការសម្រាប់លេខតែប៉ុណ្ណោះ', 'ត្រូវការសម្រាប់ String'],
      correct: 1,
      explanation: 'Python មិនតម្រូវឱ្យបញ្ជាក់ Data Type ពេលប្រកាស Variable។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python សាមញ្ញដែលប្រើ Variables ដើម្បីគណនា និងបង្ហាញទិន្នន័យ។

**តម្រូវការ:**
1. **ការប្រកាស Variables:**
   - ប្រកាស Variables សម្រាប់ឈ្មោះ (\`name\`), អាយុ (\`age\`), និងកម្ពស់ (\`height\`)។
   - ប្រើ Snake_case សម្រាប់ឈ្មោះ Variables។
2. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះ និងអាយុពីអ្នកប្រើដោយប្រើ \`input()\`។
   - កំណត់កម្ពស់ជាតម្លៃថេរ (ឧ. ១.៧៥)។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដែលរួមបញ្ចូលឈ្មោះ អាយុ និងកម្ពស់។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលអាយុមិនមែនជាលេខ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី និងសាកល្បង។
    `,
    solution: `
\`\`\`python
try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    age = int(input("បញ្ចូលអាយុរបស់អ្នក: "))
    height = 1.75
    print(f"សួស្តី {name}! អ្នកមានអាយុ {age} ឆ្នាំ និងកម្ពស់ {height} ម៉ែត្រ។")
except ValueError:
    print("សូមបញ្ចូលអាយុជាលេខ!")
\`\`\`
`
  }
};

export default ConceptLesson2_1Content;
