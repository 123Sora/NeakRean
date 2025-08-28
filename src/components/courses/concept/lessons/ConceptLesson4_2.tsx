import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson4_2Content: LessonContent = {
  title: 'Parameters និង Return Values',
  objectives: [
    'យល់ពីគោលគំនិតនៃ Parameters និង Return Values ក្នុង Functions',
    'ស្វែងយល់ពីរបៀបប្រើ Parameters ដើម្បីបញ្ចូលទិន្នន័យទៅក្នុង Functions',
    'រៀនការប្រើ Return Values ដើម្បីទទួលលទ្ធផលពី Functions',
    'ស្គាល់ប្រភេទ Parameters ផ្សេងៗ (Default, Keyword, Variable-length)',
    'អនុវត្តការប្រើ Parameters និង Return Values ក្នុងកម្មវិធី'
  ],
  content: `
# Parameters និង Return Values 📥📤💻

---

**Parameters** និង **Return Values** គឺជាផ្នែកសំខាន់នៃ Functions ដែលអនុញ្ញាតឱ្យ Functions ទទួលទិន្នន័យ និងបញ្ជូនលទ្ធផលត្រឡប់។

---

## 1. គោលគំនិតនៃ Parameters និង Return Values

- **Parameters:** ជា Variables ដែល Function ទទួលនៅពេលហៅ ដើម្បីប្រើក្នុងការងារ។
- **Return Values:** ជាលទ្ធផលដែល Function បញ្ជូនត្រឡប់ទៅអ្នកហៅ។

**ឧទាហរណ៍កូដ Python:**

\`\`\`python
def add(a, b):
    return a + b
result = add(3, 4)
print(result)  # បង្ហាញ: 7
\`\`\`

---

## 2. ការប្រើ Parameters

Parameters អនុញ្ញាតឱ្យ Function ទទួលទិន្នន័យពីខាងក្រៅ។
- **Simple Parameters:**
  \`\`\`python
  def greet(name):
      return f"សួស្តី {name}!"
  print(greet("សុខា"))  # បង្ហាញ: សួស្តី សុខា!
  \`\`\`
- **Default Parameters:**
  \`\`\`python
  def greet(name="ភ្ញៀវ"):
      return f"សួស្តី {name}!"
  print(greet())  # បង្ហាញ: សួស្តី ភ្ញៀវ!
  \`\`\`
- **Keyword Parameters:**
  \`\`\`python
  def introduce(name, age):
      return f"ខ្ញុំឈ្មោះ {name} អាយុ {age} ឆ្នាំ"
  print(introduce(age=25, name="សុខា"))  # បង្ហាញ: ខ្ញុំឈ្មោះ សុខា អាយុ 25 ឆ្នាំ
  \`\`\`

---

## 3. ការប្រើ Return Values

\`return\` Keyword បញ្ជូនលទ្ធផលត្រឡប់ពី Function។

**ឧទាហរណ៍:**

\`\`\`python
def square(number):
    return number * number
result = square(5)
print(result)  # បង្ហាញ: 25
\`\`\`

---

## 4. Variable-length Parameters

- **\`*args\`:** ទទួល Parameters ចំនួនមិនកំណត់ជា Tuple។
  \`\`\`python
  def sum_numbers(*args):
      total = 0
      for num in args:
          total += num
      return total
  print(sum_numbers(1, 2, 3, 4))  # បង្ហាញ: 10
  \`\`\`
- **\`**kwargs\`:** ទទួល Parameters ជា Dictionary។
  \`\`\`python
  def introduce(**kwargs):
      return f"ឈ្មោះ: {kwargs.get('name')}, អាយុ: {kwargs.get('age')}"
  print(introduce(name="សុខា", age=25))  # បង្ហាញ: ឈ្មោះ: សុខា, អាយុ: 25
  \`\`\`

---

## 5. ការប្រើ Parameters និង Return Values ក្នុងកម្មវិធី

Parameters និង Return Values ត្រូវបានប្រើសម្រាប់៖
- **ការគណនា:** ឧទាហរណ៍ គណនាផលបូក ឬផ្ទៃក្រឡា។
- **ការគ្រប់គ្រងទិន្នន័យ:** ឧទាហរណ៍ បញ្ចូលទិន្នន័យអ្នកប្រើ។
- **ការបង្កើតកូដឡើងវិញ:** ធ្វើឱ្យកូដអាចប្រើឡើងវិញបាន។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def calculate_total(price, quantity):
    return price * quantity
total = calculate_total(50, 3)
print(f"តម្លៃសរុប: {total}")  # បង្ហាញ: តម្លៃសរុប: 150
\`\`\`

---

## 6. ហេតុអ្វីសំខាន់ក្នុងការប្រើ Parameters និង Return Values?

- **ភាពបត់បែន:** អនុញ្ញាតឱ្យ Function ទទួលទិន្នន័យផ្សេងៗ។
- **ការប្រើឡើងវិញ:** អនុញ្ញាតឱ្យប្រើ Function ជាមួយទិន្នន័យផ្សេងៗ។
- **ភាពច្បាស់លាស់:** ធ្វើឱ្យកូដអានបានស្រួល។
- **ការគ្រប់គ្រងលទ្ធផល:** Return Values អនុញ្ញាតឱ្យប្រើលទ្ធផលនៅទីតាំងផ្សេង។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Function ជាមួយ Parameters និង Return Value</h3>
<p>បង្កើត Function ដែលគណនាផលបូក។</p>
<pre><code class="language-python">
def add_numbers(a, b):
    return a + b
result = add_numbers(10, 20)
print(f"ផលបូក: {result}")
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Function ជាមួយ Default Parameters</h3>
<p>បង្កើត Function ដែលស្វាគមន៍អ្នកប្រើជាមួយ Default Parameter។</p>
<pre><code class="language-python">
def greet(name="ភ្ញៀវ"):
    return f"សួស្តី {name}!"
print(greet())  # បង្ហាញ: សួស្តី ភ្ញៀវ!
print(greet("លីនា"))  # បង្ហាញ: សួស្តី លីនា!
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Parameter គឺជាអ្វី?',
      options: [
        'លទ្ធផលនៃ Function',
        'Variable ដែល Function ទទួល',
        'Loop ក្នុង Function',
        'Condition ក្នុង Function'
      ],
      correct: 1,
      explanation: 'Parameter គឺជា Variable ដែល Function ទទួលនៅពេលហៅ។'
    },
    {
      question: 'តើ `return` Keyword ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Function',
        'បញ្ជូនលទ្ធផលត្រឡប់ពី Function',
        'បញ្ចូល Parameter',
        'បញ្ឈប់ Function'
      ],
      correct: 1,
      explanation: '`return` បញ្ជូនលទ្ធផលត្រឡប់ពី Function។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef multiply(a, b):\n    return a * b\nresult = multiply(3, 4)\nprint(result)\n```',
      options: ['12', '7', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function `multiply` គណនា ៣ * ៤ និងត្រឡប់ ១២។'
    },
    {
      question: 'តើ Default Parameter គឺជាអ្វី?',
      options: [
        'Parameter ដែលត្រូវតែបញ្ចូល',
        'Parameter ដែលមានតម្លៃលំនាំដើម',
        'Parameter ដែលជា Constant',
        'Parameter ដែលជា Keyword'
      ],
      correct: 1,
      explanation: 'Default Parameter មានតម្លៃលំនាំដើមប្រសិនបើមិនបញ្ចូល។'
    },
    {
      question: 'តើ `*args` ក្នុង Python ប្រើសម្រាប់អ្វី?',
      options: [
        'ទទួល Parameter ជា Dictionary',
        'ទទួល Parameter ចំនួនមិនកំណត់ជា Tuple',
        'ទទួល Parameter ជា List',
        'ទទួល Parameter ជា String'
      ],
      correct: 1,
      explanation: '`*args` ទទួល Parameter ចំនួនមិនកំណត់ជា Tuple។'
    },
    {
      question: 'តើ `**kwargs` ក្នុង Python ប្រើសម្រាប់អ្វី?',
      options: [
        'ទទួល Parameter ជា Tuple',
        'ទទួល Parameter ជា Dictionary',
        'ទទួល Parameter ជា List',
        'ទទួល Parameter ជា String'
      ],
      correct: 1,
      explanation: '`**kwargs` ទទួល Parameter ជា Dictionary។'
    },
    {
      question: 'តើ Keyword Parameter អនុញ្ញាតឱ្យធ្វើអ្វី?',
      options: [
        'បញ្ចូល Parameter ដោយមិនអាស្រ័យលំដាប់',
        'បញ្ចូល Parameter តាមលំដាប់',
        'បញ្ចូល Parameter ជា Constant',
        'បញ្ចូល Parameter ជា List'
      ],
      correct: 0,
      explanation: 'Keyword Parameter អនុញ្ញាតឱ្យបញ្ចូល Parameter ដោយមិនអាស្រ័យលំដាប់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef greet(name="ភ្ញៀវ"):\n    return f"សួស្តី {name}!"\nprint(greet())\n```',
      options: ['សួស្តី ភ្ញៀវ!', 'Error', 'សួស្តី!', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function `greet` ប្រើ Default Parameter `name="ភ្ញៀវ"`, ដូច្នេះបង្ហាញ "សួស្តី ភ្ញៀវ!"។'
    },
    {
      question: 'តើ Return Value អាចប្រើនៅទីតាំងផ្សេងបានទេ?',
      options: [
        'បាន',
        'មិនបាន',
        'បានតែនៅក្នុង Loop',
        'បានតែនៅក្នុង If'
      ],
      correct: 0,
      explanation: 'Return Value អាចប្រើនៅទីតាំងផ្សេង ដូចជាការផ្ទុកក្នុង Variable។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef sum_numbers(*args):\n    total = 0\n    for num in args:\n        total += num\n    return total\nprint(sum_numbers(1, 2, 3))\n```',
      options: ['6', '12', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function `sum_numbers` បូក ១ + ២ + ៣ និងត្រឡប់ ៦។'
    },
    {
      question: 'តើ Parameters និង Return Values ជួយធ្វើឱ្យ Function៖',
      options: [
        'ស្មុគស្មាញជាង',
        'បត់បែនជាង',
        'ដំណើរការយឺត',
        'ប្រើ Memory ច្រើន'
      ],
      correct: 1,
      explanation: 'Parameters និង Return Values ធ្វើឱ្យ Function បត់បែនជាង។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef introduce(name, age=20):\n    return f"ឈ្មោះ: {name}, អាយុ: {age}"\nprint(introduce(name="សុខា"))\n```',
      options: [
        'ឈ្មោះ: សុខា, អាយុ: 20',
        'Error',
        'ឈ្មោះ: សុខា',
        'គ្មានលទ្ធផល'
      ],
      correct: 0,
      explanation: 'Function `introduce` ប្រើ Default Parameter `age=20`, ដូច្នេះបង្ហាញ "ឈ្មោះ: សុខា, អាយុ: 20"។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Functions ជាមួយ Parameters និង Return Values។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំតម្លៃផលិតផល និងបរិមាណ។
2. **ការបង្កើត Functions:**
   - បង្កើត Function \`calculate_total\` ដែលទទួល \`price\` និង \`quantity\` ហើយត្រឡប់តម្លៃសរុប។
   - បង្កើត Function \`greet_user\` ដែលទទួល \`name\` (Default = "ភ្ញៀវ") ហើយត្រឡប់សារស្វាគមន៍។
3. **ការប្រើ Functions:**
   - ហៅ \`greet_user\` ដើម្បីបង្ហាញសារស្វាគមន៍។
   - ហៅ \`calculate_total\` ដើម្បីគណនា និងបង្ហាញតម្លៃសរុប។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលតម្លៃ ឬបរិមាណមិនមែនជាលេខ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
def greet_user(name="ភ្ញៀវ"):
    return f"សួស្តី {name}!"

def calculate_total(price, quantity):
    return price * quantity

try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    price = float(input("បញ្ចូលតម្លៃផលិតផល: "))
    quantity = int(input("បញ្ចូលបរិមាណ: "))
    print(greet_user(name))
    total = calculate_total(price, quantity)
    print(f"តម្លៃសរុប: {total}")
except ValueError:
    print("សូមបញ្ចូលតម្លៃ និងបរិមាណជាលេខ!")
\`\`\`
`
  }
};

export default ConceptLesson4_2Content;
