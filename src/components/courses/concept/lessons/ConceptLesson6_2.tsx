import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson6_2Content: LessonContent = {
  title: 'Debugging Basics',
  objectives: [
    'យល់ពីគោលគំនិតនៃ Debugging ក្នុងការសរសេរកម្មវិធី',
    'ស្វែងយល់ពីប្រភេទនៃកំហុស (Errors) ក្នុងកូដ',
    'រៀនបច្ចេកទេស Debugging ដូចជា Print Statements និង Breakpoints',
    'ស្គាល់ឧបករណ៍ Debugging ក្នុង Python (ឧ. VS Code Debugger)',
    'អនុវត្តការស្វែងរក និងកែកំហុសក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# Debugging Basics 🐞💻

---

**Debugging** គឺជាដំណើរការនៃការស្វែងរក និងកែកំហុស (Bugs) ក្នុងកម្មវិធី ដើម្បីធ្វើឱ្យកូដដំណើរការបានត្រឹមត្រូវ។

---

## 1. គោលគំនិតនៃ Debugging

Debugging គឺជាការវិភាគកូដដើម្បីរកមូលហេតុនៃកំហុស និងកែប្រែវា។
- **ប្រភេទកំហុស:**
  - **Syntax Errors:** កំហុសអក្ខរកម្ម។
  - **Runtime Errors:** កំហុសកើតឡើងនៅពេលកម្មវិធីដំណើរការ។
  - **Logical Errors:** កម្មវិធីដំណើរការ ប៉ុន្តែផ្តល់លទ្ធផលខុស។

**ឧទាហរណ៍កូដ Python (Logical Error):**

\`\`\`python
def calculate_average(numbers):
    total = 0
    for num in numbers:
        total += num
    return total / 0  # Logical Error: ចែកនឹង 0
print(calculate_average([1, 2, 3]))  # Runtime Error
\`\`\`

---

## 2. បច្ចេកទេស Debugging

- **Print Statements:** ប្រើ \`print()\` ដើម្បីតាមដានតម្លៃនៃ Variables។
  \`\`\`python
  def sum_numbers(numbers):
      total = 0
      for num in numbers:
          print(f"Current num: {num}, Total: {total}")
          total += num
      return total
  print(sum_numbers([1, 2, 3]))  # តាមដានការផ្លាស់ប្តូរ
  \`\`\`
- **Breakpoints:** ប្រើឧបករណ៍ Debugging ដើម្បីផ្អាកកម្មវិធីនៅចំណុចជាក់លាក់។
- **Try-Except:** ចាប់ Runtime Errors។
  \`\`\`python
  try:
      result = 10 / 0
  except ZeroDivisionError:
      print("កំហុស: មិនអាចចែកនឹង 0 បានទេ!")
  \`\`\`

---

## 3. ឧបករណ៍ Debugging

- **VS Code Debugger:** អនុញ្ញាតឱ្យកំណត់ Breakpoints និងតាមដាន Variables។
- **Python’s \`pdb\`:** ឧបករណ៍ Debugging ភ្ជាប់មកជាមួយ Python។
  \`\`\`python
  import pdb
  def calculate_sum(numbers):
      pdb.set_trace()  # ផ្អាកកម្មវិធី
      total = 0
      for num in numbers:
          total += num
      return total
  print(calculate_sum([1, 2, 3]))
  \`\`\`
- **Logging:** ប្រើ Module \`logging\` សម្រាប់តាមដានកម្មវិធី។

---

## 4. ការអនុវត្ត Debugging

- **កំណត់បញ្ហា:** ពិនិត្យលទ្ធផល និងសារកំហុស។
- **តាមដាន Variables:** ប្រើ \`print()\` ឬ Debugger ដើម្បីពិនិត្យតម្លៃ។
- **សាកល្បងកែប្រែ:** កែកូដ និងសាកល្បងជាមួយទិន្នន័យផ្សេងៗ។

**ឧទាហរណ៍កូដ (កែ Logical Error):**

\`\`\`python
def calculate_average(numbers):
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)  # កែពី / 0 ទៅ / len(numbers)
print(calculate_average([1, 2, 3]))  # បង្ហាញ: 2.0
\`\`\`

---

## 5. ហេតុអ្វីសំខាន់ក្នុងការរៀន Debugging?

- **ភាពត្រឹមត្រូវ:** ធ្វើឱ្យកម្មវិធីផ្តល់លទ្ធផលត្រឹមត្រូវ។
- **ប្រសិទ្ធភាព:** កាត់បន្ថយពេលវេលាក្នុងការស្វែងរកកំហុស។
- **ការអភិវឌ្ឍជំនាញ:** បង្កើនសមត្ថភាពវិភាគបញ្ហា។
- **ភាពជឿជាក់:** ធ្វើឱ្យកម្មវិធីមានគុណភាពខ្ពស់។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Debugging ដោយប្រើ Print Statements</h3>
<p>ប្រើ \`print()\` ដើម្បីតាមដានកំហុស។</p>
<pre><code class="language-python">
def calculate_sum(numbers):
    total = 0
    for num in numbers:
        print(f"Num: {num}, Total: {total}")
        total += num
    return total
print(calculate_sum([1, 2, 3]))  # តាមដានការផ្លាស់ប្តូរ
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Debugging ដោយប្រើ Try-Except</h3>
<p>ចាប់ Runtime Error។</p>
<pre><code class="language-python">
try:
    numbers = [1, 2, 3]
    print(numbers[5])  # IndexError
except IndexError:
    print("កំហុស: Index មិនត្រឹមត្រូវ!")
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Debugging គឺជាអ្វី?',
      options: [
        'ការសរសេរកូដថ្មី',
        'ការស្វែងរក និងកែកំហុសក្នុងកម្មវិធី',
        'ការបង្កើត UI',
        'ការគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Debugging ជាការស្វែងរក និងកែកំហុសក្នុងកម្មវិធី។'
    },
    {
      question: 'តើ Syntax Error គឺជាអ្វី?',
      options: [
        'កំហុសអក្ខរកម្មក្នុងកូដ',
        'កំហុសនៅពេលកម្មវិធីដំណើរការ',
        'កំហុសផ្តល់លទ្ធផលខុស',
        'កំហុសក្នុង Hardware'
      ],
      correct: 0,
      explanation: 'Syntax Error ជាកំហុសអក្ខរកម្មក្នុងកូដ។'
    },
    {
      question: 'តើ Logical Error គឺជាអ្វី?',
      options: [
        'កំហុសអក្ខរកម្ម',
        'កំហុសផ្តល់លទ្ធផលខុស',
        'កំហុសនៅពេលកម្មវិធីដំណើរការ',
        'កំហុសក្នុង Hardware'
      ],
      correct: 1,
      explanation: 'Logical Error ផ្តល់លទ្ធផលខុស ទោះបីកម្មវិធីដំណើរការក៏ដោយ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ntry:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("មិនអាចចែកនឹង 0!")\n```',
      options: ['10', 'Error', 'មិនអាចចែកនឹង 0!', 'គ្មានលទ្ធផល'],
      correct: 2,
      explanation: '`try-except` ចាប់ ZeroDivisionError និងបង្ហាញ "មិនអាចចែកនឹង 0!"។'
    },
    {
      question: 'តើ Print Statements ជួយអ្វីក្នុង Debugging?',
      options: [
        'បង្កើត UI',
        'តាមដានតម្លៃ Variables',
        'បង្កើត Function',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Print Statements ជួយតាមដានតម្លៃ Variables ក្នុងកម្មវិធី។'
    },
    {
      question: 'តើ Breakpoint គឺជាអ្វី?',
      options: [
        'ការបញ្ឈប់កម្មវិធីនៅចំណុចជាក់លាក់',
        'ការបង្កើត Loop',
        'ការបង្កើត Function',
        'ការបង្កើត UI'
      ],
      correct: 0,
      explanation: 'Breakpoint ផ្អាកកម្មវិធីនៅចំណុចជាក់លាក់សម្រាប់តាមដាន។'
    },
    {
      question: 'តើ `pdb` ក្នុង Python គឺជាអ្វី?',
      options: [
        'ឧបករណ៍ Debugging',
        'ឧបករណ៍បង្កើត UI',
        'Module សម្រាប់ Loop',
        'Module សម្រាប់ Function'
      ],
      correct: 0,
      explanation: '`pdb` ជាឧបករណ៍ Debugging ភ្ជាប់មកជាមួយ Python។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef calculate_average(numbers):\n    total = 0\n    for num in numbers:\n        total += num\n    return total / len(numbers)\nprint(calculate_average([1, 2, 3]))\n```',
      options: ['2.0', '6', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function គណនាមធ្យមភាគ (1 + 2 + 3) / 3 = 2.0។'
    },
    {
      question: 'តើ Try-Except ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Loop',
        'ចាប់ Runtime Errors',
        'បង្កើត Function',
        'បង្កើត UI'
      ],
      correct: 1,
      explanation: 'Try-Except ចាប់ Runtime Errors ដើម្បីការពារកម្មវិធី។'
    },
    {
      question: 'តើ Debugging ជួយធ្វើឱ្យកម្មវិធី៖',
      options: [
        'ស្មុគស្មាញជាង',
        'ផ្តល់លទ្ធផលត្រឹមត្រូវ',
        'ដំណើរការយឺត',
        'ប្រើ Memory ច្រើន'
      ],
      correct: 1,
      explanation: 'Debugging ជួយធ្វើឱ្យកម្មវិធីផ្តល់លទ្ធផលត្រឹមត្រូវ។'
    },
    {
      question: 'តើ Logging ក្នុង Python ប្រើសម្រាប់អ្វី?',
      options: [
        'តាមដានកម្មវិធី',
        'បង្កើត UI',
        'បង្កើត Loop',
        'បង្កើត Function'
      ],
      correct: 0,
      explanation: 'Logging ប្រើសម្រាប់តាមដានកម្មវិធី និងកត់ត្រាព័ត៌មាន។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ntry:\n    numbers = [1, 2, 3]\n    print(numbers[5])\nexcept IndexError:\n    print("Index មិនត្រឹមត្រូវ!")\n```',
      options: ['1', 'Index មិនត្រឹមត្រូវ!', 'Error', 'គ្មានលទ្ធផល'],
      correct: 1,
      explanation: '`try-except` ចាប់ IndexError និងបង្ហាញ "Index មិនត្រឹមត្រូវ!"។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើបច្ចេកទេស Debugging ដើម្បីកែកំហុស។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំលេខចំនួន ៣ ដើម្បីបន្ថែមទៅក្នុង List។
2. **ការដោះស្រាយបញ្ហា:**
   - បង្កើត Function \`calculate_sum\` ដែលគណនាផលបូកនៃ List លេខ។
   - បន្ថែម \`print()\` Statements ដើម្បីតាមដានតម្លៃនៃ Variables។
   - ប្រើ \`try-except\` ដើម្បីចាប់កំហុសបញ្ចូលទិន្នន័យ។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារស្វាគមន៍ជាមួយឈ្មោះអ្នកប្រើ។
   - បង្ហាញផលបូកនៃលេខ។
4. **Error Handling:**
   - គ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលលេខមិនត្រឹមត្រូវ ឬ List ទទេ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
def calculate_sum(numbers):
    total = 0
    for num in numbers:
        print(f"Current num: {num}, Total: {total}")
        total += num
    return total

try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    numbers = []
    for i in range(3):
        num = float(input(f"បញ្ចូលលេខទី {i+1}: "))
        numbers.append(num)
    if not numbers:
        raise ValueError("List លេខមិនអាចទទេបាន!")
    total = calculate_sum(numbers)
    print(f"សួស្តី {name}! ផលបូក: {total}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default ConceptLesson6_2Content;
