import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson1_2Content: LessonContent = {
  title: 'បរិបទនៃវាក្យស័ព្ទ',
  objectives: [
    'យល់ពីបរិបទនៃការប្រើវាក្យស័ព្ទក្នុងការសរសេរកម្មវិធី',
    'ស្គាល់ភាពខុសគ្នារវាងវាក្យស័ព្ទក្នុងភាសាផ្សេងៗ',
    'រៀនកំណត់អត្តសញ្ញាណវាក្យស័ព្ទក្នុង Python',
    'ស្វែងយល់ពីការបកប្រែវាក្យស័ព្ទទៅជាភាសាខ្មែរ',
    'អនុវត្តការប្រើវាក្យស័ព្ទក្នុងបរិបទជាក់លាក់'
  ],
  content: `
# បរិបទនៃវាក្យស័ព្ទ 🌐💻

---

**បរិបទនៃវាក្យស័ព្ទ (Context of Terminology)** សំដៅលើការប្រើប្រាស់វាក្យស័ព្ទក្នុងស្ថានភាព ឬភាសាសរសេរកម្មវិធីផ្សេងៗ។ វាក្យស័ព្ទអាចមានអត្ថន័យខុសគ្នាអាស្រ័យលើបរិបទ។

---

## 1. សារៈសំខាន់នៃបរិបទ

- **ភាពច្បាស់លាស់:** ការយល់បរិបទជួយបកស្រាយវាក្យស័ព្ទបានត្រឹមត្រូវ។
- **ភាពខុសគ្នារវាងភាសា:** ពាក្យដូចគ្នាអាចមានអត្ថន័យខុសគ្នាក្នុងភាសាផ្សេងៗ។
- **ការបកប្រែ:** ការបកប្រែវាក្យស័ព្ទទៅជាភាសាខ្មែរត្រូវការបរិបទ។

**ឧទាហរណ៍ក្នុង Python:**
- **Variable:** ក្នុង Python, Variable គឺជាឈ្មោះសម្រាប់ផ្ទុកទិន្នន័យ។
  \`\`\`python
  score = 95  # Variable ក្នុង Python
  \`\`\`
- **Function:** ក្នុង Python, Function ប្រើ \`def\` ដើម្បីកំណត់។
  \`\`\`python
  def add(a, b):  # Function ក្នុង Python
      return a + b
  \`\`\`

---

## 2. ភាពខុសគ្នារវាងភាសា

- **Python vs JavaScript:**
  - Python: \`print("Hello")\` (បង្ហាញអក្សរ)
  - JavaScript: \`console.log("Hello")\` (បង្ហាញអក្សរ)
- **Variable Declaration:**
  - Python: \`x = 10\` (គ្មាន keyword)
  - JavaScript: \`let x = 10;\` (ប្រើ \`let\` ឬ \`const\`)

**ឧទាហរណ៍ក្នុង Python:**

\`\`\`python
# Variable ក្នុង Python
count = 5
# Function ក្នុង Python
def multiply(x, y):
    return x * y
print(multiply(count, 2))  # បង្ហាញ: 10
\`\`\`

**ឧទាហរណ៍ក្នុង JavaScript:**

\`\`\`javascript
// Variable ក្នុង JavaScript
let count = 5;
// Function ក្នុង JavaScript
function multiply(x, y) {
    return x * y;
}
console.log(multiply(count, 2)); // បង្ហាញ: 10
\`\`\`

---

## 3. ការបកប្រែវាក្យស័ព្ទទៅជាភាសាខ្មែរ

- **Variable:** អថេរ
- **Function:** អនុគមន៍
- **Loop:** រង្វិលជុំ
- **String:** ខ្សែអក្សរ
- **Integer:** ចំនួនគត់

**ឧទាហរណ៍ក្នុង Python:**

\`\`\`python
# អថេរ (Variable) សម្រាប់ផ្ទុកឈ្មោះ
name = "សុខា"
# អនុគមន៍ (Function) សម្រាប់បង្ហាញសារ
def welcome(name):
    return f"សួស្តី {name}!"
# រង្វិលជុំ (Loop) សម្រាប់បង្ហាញសារ 2 ដង
for i in range(2):
    print(welcome(name))  # បង្ហាញ: សួស្តី សុខា!
\`\`\`

---

## 4. ការអនុវត្តវាក្យស័ព្ទក្នុងបរិបទ

ការយល់បរិបទជួយអ្នកប្រើវាក្យស័ព្ទបានត្រឹមត្រូវ។ ឧទាហរណ៍:

\`\`\`python
# អថេរ (Variable) សម្រាប់ផ្ទុកពិន្ទុ
score = 90
# អនុគមន៍ (Function) សម្រាប់ពិនិត្យថ្នាក់
def get_grade(score):
    if score >= 80:
        return "A"
    return "B"
# បង្ហាញថ្នាក់
print(f"ថ្នាក់: {get_grade(score)}")  # បង្ហាញ: ថ្នាក់: A
\`\`\`

---

## 5. ហេតុអ្វីសំខាន់ក្នុងការយល់បរិបទ?

- **ការបកស្រាយ:** ជួយបកស្រាយអត្ថន័យនៃវាក្យស័ព្ទបានត្រឹមត្រូវ។
- **ការប្រៀបធៀប:** យល់ភាពខុសគ្នារវាងភាសាសរសេរកម្មវិធី។
- **ការបកប្រែ:** ធ្វើឱ្យការបកប្រែវាក្យស័ព្ទទៅជាភាសាខ្មែរកាន់តែច្បាស់។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Variable និង Function ក្នុង Python</h3>
<p>ប្រើ Variable និង Function ក្នុងបរិបទ Python។</p>
<pre><code class="language-python">
score = 95  # អថេរ (Variable)
def add_bonus(score):  # អនុគមន៍ (Function)
    return score + 5
print(add_bonus(score))  # បង្ហាញ: 100
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Variable និង Function ក្នុង JavaScript</h3>
<p>ប្រើ Variable និង Function ក្នុងបរិបទ JavaScript។</p>
<pre><code class="language-javascript">
let score = 95; // អថេរ (Variable)
function addBonus(score) { // អនុគមន៍ (Function)
    return score + 5;
}
console.log(addBonus(score)); // បង្ហាញ: 100
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើបរិបទនៃវាក្យស័ព្ទមានន័យអ្វី?',
      options: [
        'ការបង្កើត UI',
        'ការប្រើវាក្យស័ព្ទក្នុងស្ថានភាពផ្សេងៗ',
        'ការគ្រប់គ្រង Hardware',
        'ការបង្កើនភាពស្មុគស្មាញ'
      ],
      correct: 1,
      explanation: 'បរិបទនៃវាក្យស័ព្ទសំដៅលើការប្រើវាក្យស័ព្ទក្នុងស្ថានភាពផ្សេងៗ។'
    },
    {
      question: 'តើការបកប្រែវាក្យស័ព្ទទៅជាភាសាខ្មែរត្រូវការអ្វី?',
      options: [
        'បរិបទ',
        'UI',
        'Hardware',
        'Loop'
      ],
      correct: 0,
      explanation: 'ការបកប្រែវាក្យស័ព្ទទៅជាភាសាខ្មែរត្រូវការបរិបទ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nscore = 90\ndef get_grade(score):\n    if score >= 80:\n        return "A"\n    return "B"\nprint(f"ថ្នាក់: {get_grade(score)}")\n```',
      options: ['ថ្នាក់: A', 'ថ្នាក់: B', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function get_grade បង្ហាញ "ថ្នាក់: A" ព្រោះ score = 90។'
    },
    {
      question: 'តើការបង្ហាញអក្សរក្នុង Python ប្រើពាក្យអ្វី?',
      options: ['console.log', 'print', 'return', 'input'],
      correct: 1,
      explanation: 'ក្នុង Python ប្រើ `print` ដើម្បីបង្ហាញអក្សរ។'
    },
    {
      question: 'តើការបង្ហាញអក្សរក្នុង JavaScript ប្រើពាក្យអ្វី?',
      options: ['print', 'console.log', 'return', 'input'],
      correct: 1,
      explanation: 'ក្នុង JavaScript ប្រើ `console.log` ដើម្បីបង្ហាញអក្សរ។'
    },
    {
      question: 'តើពាក្យ "អថេរ" បកប្រែពីវាក្យស័ព្ទអ្វី?',
      options: ['Function', 'Variable', 'Loop', 'String'],
      correct: 1,
      explanation: '"អថេរ" បកប្រែពី "Variable"។'
    },
    {
      question: 'តើពាក្យ "អនុគមន៍" បកប្រែពីវាក្យស័ព្ទអ្វី?',
      options: ['Variable', 'Function', 'Loop', 'String'],
      correct: 1,
      explanation: '"អនុគមន៍" បកប្រែពី "Function"។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ncount = 5\ndef multiply(x, y):\n    return x * y\nprint(multiply(count, 2))\n```',
      options: ['10', '7', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function multiply គណនា 5 * 2 = 10។'
    },
    {
      question: 'តើក្នុង JavaScript, Variable ត្រូវបានកំណត់ដោយប្រើ keyword អ្វី?',
      options: ['def', 'let', 'print', 'for'],
      correct: 1,
      explanation: 'ក្នុង JavaScript, Variable ប្រើ `let` ឬ `const`។'
    },
    {
      question: 'តើហេតុអ្វីបរិបទសំខាន់ក្នុងការប្រើវាក្យស័ព្ទ?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ជួយបកស្រាយអត្ថន័យបានត្រឹមត្រូវ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'បរិបទជួយបកស្រាយអត្ថន័យនៃវាក្យស័ព្ទបានត្រឹមត្រូវ។'
    },
    {
      question: 'តើពាក្យ "រង្វិលជុំ" បកប្រែពីវាក្យស័ព្ទអ្វី?',
      options: ['Variable', 'Function', 'Loop', 'String'],
      correct: 2,
      explanation: '"រង្វិលជុំ" បកប្រែពី "Loop"។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nname = "សុខា"\ndef welcome(name):\n    return f"សួស្តី {name}!"\nfor i in range(2):\n    print(welcome(name))\n```',
      options: [
        'សួស្តី សុខា! (2 ដង)',
        'សួស្តី សុខា! (1 ដង)',
        'Error',
        'គ្មានលទ្ធផល'
      ],
      correct: 0,
      explanation: 'Loop បង្ហាញ "សួស្តី សុខា!" 2 ដង។'
    }
  ],
  lab: {
    task: `
บង្កើតកម្មវិធី Python ដែលប្រើវាក្យស័ព្ទក្នុងបរិបទ។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំពិន្ទុ (Integer)។
2. **ការអនុវត្តវាក្យស័ព្ទ:**
   - បង្កើត Variable ដើម្បីផ្ទុកឈ្មោះ និងពិន្ទុ។
   - បង្កើត Function \`get_result\` ដើម្បីពិនិត្យលទ្ធផល (លើសពី 50 គឺ "ជាប់", បើមិនអញ្ចឹងគឺ "ធ្លាក់")។
   - ប្រើ Loop ដើម្បីបង្ហាញលទ្ធផលចំនួន 2 ដង។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារជាមួយឈ្មោះ និងលទ្ធផល។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីពិន្ទុមិនមែនជាលេខគត់។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
def get_result(name, score):
    """បង្ហាញលទ្ធផលជាប់ ឬធ្លាក់។"""
    if score >= 50:
        return f"{name}: ជាប់"
    return f"{name}: ធ្លាក់"

try:
    # អថេរ (Variable) សម្រាប់ផ្ទុកឈ្មោះ
    user_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # អថេរ (Variable) សម្រាប់ផ្ទុកពិន្ទុ
    user_score = int(input("បញ្ចូលពិន្ទុរបស់អ្នក: "))
    
    # រង្វិលជុំ (Loop) ដើម្បីបង្ហាញលទ្ធផល 2 ដង
    for i in range(2):
        print(get_result(user_name, user_score))
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson1_2Content;
