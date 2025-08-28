import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson2_3Content: LessonContent = {
  title: 'ការប្រកាសនិងផ្លាស់ប្តូរ Variables',
  objectives: [
    'យល់ពីរបៀបប្រកាស Variables ក្នុងភាសា Python និងភាសាផ្សេងទៀត',
    'ស្វែងយល់ពីការផ្លាស់ប្តូរតម្លៃ Variables និងផលប៉ះពាល់របស់វា',
    'រៀនការប្រើ Variables ក្នុងការគណនា និងការគ្រប់គ្រងទិន្នន័យ',
    'ស្គាល់គោលការណ៍សុវត្ថិភាពក្នុងការប្រើ Variables (ឧ. ការពារការផ្លាស់ប្តូរ Constants)',
    'អនុវត្តការប្រកាស និងផ្លាស់ប្តូរ Variables ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# ការប្រកាសនិងផ្លាស់ប្តូរ Variables 🔄💻

---

**ការប្រកាសនិងផ្លាស់ប្តូរ Variables** គឺជាជំនាញមូលដ្ឋានក្នុងការសរសេរកម្មវិធី។ Variable អនុញ្ញាតឱ្យអ្នករក្សាទុកទិន្នន័យ និងផ្លាស់ប្តូរវាតាមតម្រូវការ។ មេរៀននេះនឹងផ្តោតលើរបៀបប្រកាស Variables និងផ្លាស់ប្តូរតម្លៃរបស់ពួកវា។

---

## 1. ការប្រកាស Variables

ការប្រកាស Variable គឺជាការបង្កើត Variable ដើម្បីផ្ទុកទិន្នន័យ។ នៅក្នុងភាសាផ្សេងៗ វិធីសាស្ត្រនេះខុសគ្នា៖
- **Python:** គ្រាន់តែកំណត់ឈ្មោះ និងតម្លៃ។
  \`\`\`python
  name = "សុខា"
  age = 25
  \`\`\`
- **Java:** តម្រូវឱ្យបញ្ជាក់ Data Type។
  \`\`\`java
  String name = "សុខា";
  int age = 25;
  \`\`\`
- **JavaScript:** ប្រើ \`var\`, \`let\`, ឬ \`const\`។
  \`\`\`javascript
  let name = "សុខា";
  const age = 25;
  \`\`\`

---

## 2. ការផ្លាស់ប្តូរ Variables

ការផ្លាស់ប្តូរ Variable គឺជាការផ្លាស់ប្តូរតម្លៃរបស់វាបន្ទាប់ពីការប្រកាស។
- **Python:** គ្រាន់តែកំណត់តម្លៃថ្មី។
  \`\`\`python
  age = 25
  age = 26  # ផ្លាស់ប្តូរតម្លៃទៅ ២៦
  \`\`\`
- **JavaScript (let):** អនុញ្ញាតឱ្យផ្លាស់ប្តូរតម្លៃ។
  \`\`\`javascript
  let age = 25;
  age = 26;
  \`\`\`
- **JavaScript (const):** មិនអនុញ្ញាតឱ្យផ្លាស់ប្តូរតម្លៃ។
  \`\`\`javascript
  const age = 25;
  // age = 26; // នឹងបណ្តាលឱ្យមាន Error
  \`\`\`

---

## 3. ការប្រើ Variables ក្នុងការគណនា

Variables ត្រូវបានប្រើសម្រាប់ការគណនា និងគ្រប់គ្រងទិន្នន័យ៖
- **គណនាសាមញ្ញ:**
  \`\`\`python
  price = 100
  quantity = 5
  total = price * quantity
  print(f"តម្លៃសរុប: {total}")  # ៥០០
  \`\`\`
- **ការផ្លាស់ប្តូរដោយផ្អែកលើតម្លៃបច្ចុប្បន្ន:**
  \`\`\`python
  balance = 1000
  balance = balance + 500  # បន្ថែម ៥០០
  print(f"សមតុល្យថ្មី: {balance}")  # ១៥០០
  \`\`\`

---

## 4. គោលការណ៍សុវត្ថិភាពក្នុងការប្រើ Variables

- **ជៀសវាងការផ្លាស់ប្តូរ Constants:** ប្រើ \`const\` (JavaScript) ឬឈ្មោះអក្សរធំ (Python) សម្រាប់តម្លៃថេរ។
  \`\`\`python
  MAX_USERS = 100  # Convention សម្រាប់ Constant
  \`\`\`
- **ប្រើឈ្មោះដែលច្បាស់លាស់:** ឧទាហរណ៍ \`student_name\` ជំនួសឱ្យ \`x\`។
- **ជៀសវាង Variable Shadowing:** កុំប្រកាស Variable ដែលមានឈ្មោះដូចគ្នានៅក្នុង Scope ផ្សេងៗ។
  \`\`\`python
  count = 10
  def my_function():
      count = 5  # Local Variable, Shadowing Global Variable
      print(count)  # ៥
  \`\`\`

---

## 5. ការប្រកាស និងផ្លាស់ប្តូរ Variables ក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ Python:**

\`\`\`python
# ប្រកាស Variables
name = "សុខា"
age = 25
balance = 1000

# ផ្លាស់ប្តូរ Variables
age = age + 1
balance = balance - 200

# បង្ហាញលទ្ធផល
print(f"សួស្តី {name}! អាយុថ្មី: {age}, សមតុល្យ: {balance}")
\`\`\`

---

## 6. ហេតុអ្វីសំខាន់ក្នុងការយល់ពីការប្រកាសនិងផ្លាស់ប្តូរ Variables?

- **ភាពបត់បែន:** អនុញ្ញាតឱ្យផ្លាស់ប្តូរទិន្នន័យដោយមិនផ្លាស់ប្តូរកូដ។
- **ភាពងាយស្រួល:** ធ្វើឱ្យកូដអានបានស្រួល និងមានអត្ថន័យ។
- **ការគ្រប់គ្រងទិន្នន័យ:** ជួយគ្រប់គ្រង និងធ្វើបច្ចុប្បន្នភាពទិន្នន័យ។
- **ការការពារកំហុស:** ការប្រើ Constants និង Naming Conventions កាត់បន្ថយកំហុស។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រកាស និងផ្លាស់ប្តូរ Variables</h3>
<p>បង្កើតកម្មវិធី Python ដែលប្រកាស និងផ្លាស់ប្តូរ Variables។</p>
<pre><code class="language-python">
name = "សុខា"
age = 25
age = age + 1
print(f"សួស្តី {name}! អាឯុថ្មី: {age}")
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការគណនាជាមួយ Variables</h3>
<p>បង្កើតកម្មវិធីដែលគណនាតម្លៃសរុបនៃផលិតផល។</p>
<pre><code class="language-python">
price = 50
quantity = 10
total = price * quantity
print(f"តម្លៃសរុប: {total}")
quantity = quantity + 5
total = price * quantity
print(f"តម្លៃសរុបថ្មី: {total}")
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើការប្រកាស Variable មានន័យថាអ្វី?',
      options: [
        'ការផ្លាស់ប្តូរតម្លៃ Variable',
        'ការបង្កើត Variable ដើម្បីផ្ទុកទិន្នន័យ',
        'ការលុប Variable',
        'ការបង្ហាញ Variable នៅលើអេក្រង់'
      ],
      correct: 1,
      explanation: 'ការប្រកាស Variable គឺជាការបង្កើត Variable ដើម្បីផ្ទុកទិន្នន័យ។'
    },
    {
      question: 'តើភាសា Python តម្រូវឱ្យបញ្ជាក់ Data Type ពេលប្រកាស Variable ដែរឬទេ?',
      options: ['ត្រូវការ', 'មិនត្រូវការ', 'ត្រូវការសម្រាប់ String', 'ត្រូវការសម្រាប់ Integer'],
      correct: 1,
      explanation: 'Python មិនតម្រូវឱ្យបញ្ជាក់ Data Type ពេលប្រកាស Variable។'
    },
    {
      question: 'តើ `const` ក្នុង JavaScript អនុញ្ញាតឱ្យផ្លាស់ប្តូរតម្លៃ Variable ដែរឬទេ?',
      options: ['អនុញ្ញាត', 'មិនអនុញ្ញាត', 'អនុញ្ញាតបើជា String', 'អនុញ្ញាតបើជា Integer'],
      correct: 1,
      explanation: '`const` មិនអនុញ្ញាតឱ្យផ្លាស់ប្តូរតម្លៃ Variable បន្ទាប់ពីការប្រកាស។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nx = 10\nx = x + 5\nprint(x)\n```',
      options: ['10', '15', '5', 'Error'],
      correct: 1,
      explanation: '`x = x + 5` ផ្លាស់ប្តូរ `x` ពី ១០ ទៅ ១៥។'
    },
    {
      question: 'តើឈ្មោះ Variable ដែលសមស្របគឺជាអ្វី?',
      options: ['1count', 'count_1', 'if', '#count'],
      correct: 1,
      explanation: '`count_1` ជាឈ្មោះសមស្រប ព្រោះវាមិនចាប់ផ្តើមដោយលេខ ឬ Keyword។'
    },
    {
      question: 'តើការប្រើ Constant មានគោលបំណងអ្វី?',
      options: [
        'អនុញ្ញាតឱ្យផ្លាស់ប្តូរតម្លៃបាន',
        'ការពារការផ្លាស់ប្តូរតម្លៃ',
        'បង្កើត UI',
        'គ្រប់គ្រង Network'
      ],
      correct: 1,
      explanation: 'Constant ប្រើដើម្បីការពារការផ្លាស់ប្តូរតម្លៃ (ឧ. `MAX_USERS`)។'
    },
    {
      question: 'តើអ្វីជា Variable Shadowing?',
      options: [
        'ការប្រកាស Variable ដែលមានឈ្មោះដូចគ្នានៅក្នុង Scope ផ្សេងៗ',
        'ការផ្លាស់ប្តូរតម្លៃ Variable',
        'ការលុប Variable',
        'ការប្រកាស Variable ជា Constant'
      ],
      correct: 0,
      explanation: 'Variable Shadowing កើតឡើងនៅពេល Variable ក្នុង Local Scope មានឈ្មោះដូចគ្នានឹង Global Scope�।'
    },
    {
      question: 'តើភាសាណាប្រើ `let` សម្រាប់ការប្រកាស Variable?',
      options: ['Python', 'Java', 'JavaScript', 'C++'],
      correct: 2,
      explanation: 'JavaScript ប្រើ `let` សម្រាប់ការប្រកាស Variable ដែលអាចផ្លាស់ប្តូរបាន។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nprice = 20\nquantity = 3\ntotal = price * quantity\nprint(total)\n```',
      options: ['60', '23', 'Error', '20'],
      correct: 0,
      explanation: '`price * quantity` គឺ ២០ * ៣ = ៦០។'
    },
    {
      question: 'តើការផ្លាស់ប្តូរ Variable មានន័យថាអ្វី?',
      options: [
        'ការបង្កើត Variable ថ្មី',
        'ការផ្លាស់ប្តូរតម្លៃរបស់ Variable',
        'ការលុប Variable',
        'ការបង្ហាញ Variable'
      ],
      correct: 1,
      explanation: 'ការផ្លាស់ប្តូរ Variable គឺជាការផ្លាីប្តូរតម្លៃរបស់វាបន្ទាប់ពីការប្រកាស។'
    },
    {
      question: 'តើ Constant ក្នុង Python ត្រូវបានកំណត់ដោយរបៀបណា?',
      options: [
        'ប្រើ `const`',
        'ប្រើឈ្មោះអក្សរធំ (ឧ. MAX_USERS)',
        'ប្រើ `let`',
        'ប្រើ `static`'
      ],
      correct: 1,
      explanation: 'នៅក្នុង Python, Constant ត្រូវបានកំណត់ដោយឈ្មោះអក្សរធំ (Convention)។'
    },
    {
      question: 'តើភាសា Java តម្រូវឱ្យបញ្ជាក់អ្វីពេលប្រកាស Variable?',
      options: ['Scope', 'Data Type', 'Constant', 'Value'],
      correct: 1,
      explanation: 'Java តម្រូវឱ្យបញ្ជាក់ Data Type (ឧ. `int`, `String`) ពេលប្រកាស Variable។'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃការប្រើឈ្មោះ Variable ដែលមានអត្ថន័យ?',
      options: [
        'បង្កើន Performance',
        'ធ្វើឱ្យកូដអានបានស្រួល',
        'កាត់បន្ថយ Memory',
        'បង្កើត UI'
      ],
      correct: 1,
      explanation: 'ឈ្មោះ Variable ដែលមានអត្ថន័យធ្វើឱ្យកូដអានបានស្រួល និងងាយយល់។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python សាមញ្ញដែលប្រកាស និងផ្លាស់ប្តូរ Variables ដើម្បីគ្រប់គ្រងទិន្នន័យ។

**តម្រូវការ:**
1. **ការប្រកាស Variables:**
   - ប្រកាស Variables សម្រាប់ឈ្មោះ (\`name\`, String), សមតុល្យ (\`balance\`, Integer), និងអត្រាការប្រាក់ (\`interest_rate\`, Float)។
   - កំណត់ \`interest_rate\` ជា Constant (ឧ. ០.០៥)។
2. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះ និងសមតុល្យដើមពីអ្នកប្រើ។
3. **ការផ្លាស់ប្តូរ Variables:**
   - គណនាការប្រាក់ដោយប្រើរូបមន្ត: \`interest = balance * interest_rate\`។
   - ធ្វើបច្ចុប្បន្នភាព \`balance\` ដោយបន្ថែមការប្រាក់។
4. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញឈ្មោះ, សមតុល្យដើម, ការប្រាក់, និងសមតុល្យថ្មី។
5. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលសមតុល្យមិនមែនជាលេខ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    balance = float(input("បញ្ចូលសមតុល្យដើម: "))
    INTEREST_RATE = 0.05  # Constant
    interest = balance * INTEREST_RATE
    balance = balance + interest
    print(f"សួស្តី {name}!")
    print(f"សមតុល្យដើម: {balance - interest}")
    print(f"ការប្រាក់: {interest}")
    print(f"សមតុល្យថ្មី: {balance}")
except ValueError:
    print("សូមបញ្ចូលសមតុល្យជាលេខ!")
\`\`\`
`
  }
};

export default ConceptLesson2_3Content;
