import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson4_1Content: LessonContent = {
  title: 'ការបង្កើតនិងប្រើ Functions',
  objectives: [
    'យល់ពីគោលគំនិតនៃ Functions ក្នុងការសរសេរកម្មវិធី',
    'ស្វែងយល់ពីរបៀបបង្កើត Functions ក្នុង Python',
    'រៀនការហៅ (Call) Functions និងប្រើប្រាស់វា',
    'ស្គាល់អត្ថប្រយោជន៍ consumer នៃការប្រើ Functions ដើម្បីរៀបចំកូដ',
    'អនុវត្តការបង្កើត Functions សម្រាប់ការងារសាមញ្ញ'
  ],
  content: `
# ការបង្កើតនិងប្រើ Functions 🛠️💻

---

**Functions** គឺជាប្លុកនៃកូដដែលអនុញ្ញាតឱ្យអ្នករៀបចំ និងប្រើប្រាស់កូដឡើងវិញបាន។ វាជួយធ្វើឱ្យកូដមានភាពច្បាស់លាស់ និងអាចប្រើឡើងវិញបាន។

---

## 1. គោលគំនិតនៃ Functions

Function គឺជាប្លុកកូដដែលមានឈ្មោះ និងប្រតិបត្តិការងារជាក់លាក់នៅពេលហៅវា។
- **គោលបំណង:** រៀបចំកូដ កាត់បន្ថយការសរសេរកូដដដែលៗ និងធ្វើឱ្យកម្មវិធីងាយស្រួលថែទាំ។
- **រចនាសម្ព័ន្ធ:** មានឈ្មោះ Function និងប្លុកកូដដែលប្រតិបត្តិ។

**ឧទាហរណ៍កូដ Python:**

\`\`\`python
def greet():
    print("សួស្តី! ស្វាគមន៍មកកាន់កម្មវិធី!")
greet()  # ហៅ Function
\`\`\`

---

## 2. ការបង្កើត Functions ក្នុង Python

ការបង្កើត Function ប្រើ Keyword \`def\` តាមដោយឈ្មោះ Function និងប្លុកកូដ។

**ឧទាហរណ៍:**

\`\`\`python
def say_hello(name):
    print(f"សួស្តី {name}!")
say_hello("សុខា")  # បង្ហាញ: សួស្តី សុខា!
\`\`\`

---

## 3. ការហៅ (Call) Functions

ការហៅ Function គឺជាការប្រើឈ្មោះ Function ដើម្បីប្រតិបត្តិកូដរបស់វា។
- **ឧទាហរណ៍:**
  \`\`\`python
  def add_numbers():
      result = 5 + 3
      print(f"ផលបូក: {result}")
  add_numbers()  # បង្ហាញ: ផលបូក: 8
  \`\`\`

---

## 4. អត្ថប្រយោជន៍នៃ Functions

- **ការប្រើឡើងវិញ:** អាចហៅ Function ច្រើនដងដោយមិនចាំបាច់សរសេរកូដឡើងវិញ។
- **ភាពច្បាស់លាស់:** ធ្វើឱ្យកូដអានបានស្រួល និងរៀបចំបានល្អ។
- **ការថែទាំ:** ងាយស្រួលកែប្រែកូដនៅក្នុង Function តែមួយ។
- **ការបំបែកការងារ:** បំបែកការងារធំទៅជា Function តូចៗ។

**ឧទាហរណ៍:**

\`\`\`python
def calculate_area(length, width):
    area = length * width
    print(f"ផ្ទៃក្រឡា: {area}")
calculate_area(5, 3)  # បង្ហាញ: ផ្ទៃក្រឡា: 15
\`\`\`

---

## 5. ការបង្កើត Functions ក្នុងកម្មវិធី

Functions ត្រូវបានប្រើសម្រាប់៖
- **ការគណនា:** ឧទាហរណ៍ គណនាផ្ទៃក្រឡា ឬផលបូក។
- **ការគ្រប់គ្រងទិន្នន័យ:** ឧទាហរណ៍ តម្រៀបបញ្ជី។
- **ការរៀបចំកូដ:** ធ្វើឱ្យកម្មវិធីមានរចនាសម្ព័ន្ធច្បាស់លាស់។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def welcome_user(name):
    print(f"ស្វាគមន៍ {name} មកកាន់កម្មវិធីរបស់យើង!")
welcome_user("សុខា")
welcome_user("លីនា")
\`\`\`

---

## 6. ហេតុអ្វីសំខាន់ក្នុងការប្រើ Functions?

- **ប្រសិទ្ធភាព:** កាត់បន្ថយការសរសេរកូដដដែលៗ។
- **ភាពបត់បែន:** អនុញ្ញាតឱ្យប្រើកូដឡើងវិញនៅទីតាំងផ្សេងៗ។
- **ភាពងាយស្រួល:** ធ្វើឱ្យកូដងាយយល់ និងថែទាំ។
- **ការបំបែកការងារ:** បំបែកកម្មវិធីទៅជា Function តូចៗ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្កើត Function សម្រាប់ស្វាគមន៍</h3>
<p>បង្កើត Function ដែលស្វាគមន៍អ្នកប្រើ។</p>
<pre><code class="language-python">
def welcome(name):
    print(f"សួស្តី {name}! ស្វាគមន៍!")
welcome("សុខា")
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបង្កើត Function សម្រាប់គណនាផ្ទៃក្រឡា</h3>
<p>បង្កើត Function ដែលគណនាផ្ទៃក្រឡាចតុកោណ។</p>
<pre><code class="language-python">
def calculate_area(length, width):
    area = length * width
    print(f"ផ្ទៃក្រឡា: {area}")
calculate_area(4, 6)
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Function គឺជាអ្វី?',
      options: [
        'ប្លុកកូដដែលប្រតិបត្តិការងារជាក់លាក់',
        'Variable ដែលផ្ទុកទិន្នន័យ',
        'Loop ដែលប្រតិបត្តិកូដដដែលៗ',
        'Condition សម្រាប់សម្រេចចិត្ត'
      ],
      correct: 0,
      explanation: 'Function គឺជាប្លុកកូដដែលប្រតិបត្តិការងារជាក់លាក់នៅពេលហៅ។'
    },
    {
      question: 'តើ Keyword ណាត្រូវបានប្រើដើម្បីបង្កើត Function ក្នុង Python?',
      options: ['func', 'def', 'function', 'create'],
      correct: 1,
      explanation: 'Keyword `def` ត្រូវបានប្រើដើម្បីបង្កើត Function ក្នុង Python។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef say_hi():\n    print("សួស្តី!")\nsay_hi()\n```',
      options: ['សួស្តី!', 'Error', 'say_hi', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function `say_hi` បង្ហាញ "សួស្តី!" នៅពេលហៅ។'
    },
    {
      question: 'តើការហៅ Function មានន័យថាអ្វី?',
      options: [
        'ការបង្កើត Function ថ្មី',
        'ការប្រតិបត្តិកូដនៅក្នុង Function',
        'ការលុប Function',
        'ការផ្លាស់ប្តូរ Function'
      ],
      correct: 1,
      explanation: 'ការហៅ Function គឺជាការប្រតិបត្តិកូដនៅក្នុង Function។'
    },
    {
      question: 'តើអត្ថប្រយោជន៍សំខាន់នៃ Function គឺអ្វី?',
      options: [
        'បង្កើនទំហំកម្មវិធី',
        'កាត់បន្ថយការសរសេរកូដដដែលៗ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Function កាត់បន្ថយការសរសេរកូដដដែលៗ និងធ្វើឱ្យកូដរៀបចំបានល្អ។'
    },
    {
      question: 'តើ Function អាចហៅបានច្រើនដងទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែម្តង', 'បានតែនៅក្នុង Loop'],
      correct: 0,
      explanation: 'Function អាចហៅបានច្រើនដងនៅទីតាំងផ្សេងៗ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef multiply():\n    result = 4 * 5\n    print(result)\nmultiply()\n```',
      options: ['20', '9', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function `multiply` គណនា ៤ * ៥ និងបង្ហាញ ២០។'
    },
    {
      question: 'តើ Function ជួយធ្វើឱ្យកូដ៖',
      options: [
        'ស្មុគស្មាញជាង',
        'អានបានស្រួល និងរៀបចំបានល្អ',
        'ដំណើរការយឺត',
        'ប្រើ Memory ច្រើន'
      ],
      correct: 1,
      explanation: 'Function ធ្វើឱ្យកូដអានបានស្រួល និងរៀបចំបានល្អ។'
    },
    {
      question: 'តើឈ្មោះ Function ដែលសមស្របគឺជាអ្វី?',
      options: ['1add', 'add_numbers', 'if', '#calculate'],
      correct: 1,
      explanation: '`add_numbers` ជាឈ្មោះសមស្រប ព្រោះវាមិនចាប់ផ្តើមដោយលេខ ឬ Keyword។'
    },
    {
      question: 'តើ Function អាចបំបែកកម្មវិធីធំទៅជាផ្នែកតូចៗបានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែនៅក្នុង Loop', 'បានតែជាមួយ If'],
      correct: 0,
      explanation: 'Function អាចបំបែកកម្មវិធីធំទៅជាផ្នែកតូចៗ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef print_message():\n    print("Hello World")\nprint_message()\nprint_message()\n```',
      options: [
        'Hello World (១ ដង)',
        'Hello World (២ ដង)',
        'Error',
        'គ្មានលទ្ធផល'
      ],
      correct: 1,
      explanation: 'Function `print_message` ត្រូវបានហៅ ២ ដង ដូច្នេះបង្ហាញ "Hello World" ២ ដង។'
    },
    {
      question: 'តើ Function អាចប្រើបាននៅក្នុងភាសាផ្សេងទៀតក្រៅពី Python ដែរឬទេ?',
      options: [
        'មិនបាន',
        'បាន ដូចជា Java, JavaScript',
        'បានតែនៅក្នុង C++',
        'បានតែនៅក្នុង Python'
      ],
      correct: 1,
      explanation: 'Function អាចប្រើបាននៅក្នុងភាសាជាច្រើន ដូចជា Java, JavaScript។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Functions ដើម្បីគណនា និងបង្ហាញទិន្នន័យ។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំប្រវែង និងទទឹងនៃចតុកោណ។
2. **ការបង្កើត Functions:**
   - បង្កើត Function \`calculate_area\` ដែលគណនាផ្ទៃក្រឡាចតុកោណ។
   - បង្កើត Function \`welcome_user\` ដែលបង្ហាញសារស្វាគមន៍។
3. **ការប្រើ Functions:**
   - ហៅ \`welcome_user\` ដើម្បីស្វាគមន៍អ្នកប្រើ។
   - ហៅ \`calculate_area\` ដើម្បីគណនា និងបង្ហាញផ្ទៃក្រឡា។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលប្រវែង ឬទទឹងមិនមែនជាលេខ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
def welcome_user(name):
    print(f"សួស្តី {name}! ស្វាគមន៍មកកាន់កម្មវិធី!")

def calculate_area(length, width):
    area = length * width
    print(f"ផ្ទៃក្រឡាចតុកោណ: {area}")

try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    length = float(input("បញ្ចូលប្រវែង: "))
    width = float(input("បញ្ចូលទទឹង: "))
    welcome_user(name)
    calculate_area(length, width)
except ValueError:
    print("សូមបញ្ចូលប្រវែង និងទទឹងជាលេខ!")
\`\`\`
`
  }
};

export default ConceptLesson4_1Content;
