import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson1_3Content: LessonContent = {
  title: 'ការប្រើប្រាស់វាក្យស័ព្ទក្នុងកូដ',
  objectives: [
    'យល់ពីការប្រើប្រាស់វាក្យស័ព្ទក្នុងការសរសេរកូដ',
    'ស្គាល់ការអនុវត្តវាក្យស័ព្ទដូចជា Variable, Function, និង Loop',
    'រៀនកំណត់អត្តសញ្ញាណវាក្យស័ព្ទក្នុងកូដ Python',
    'ស្វែងយល់ពីការប្រើវាក្យស័ព្ទឱ្យមានអត្ថន័យ',
    'អនុវត្តការប្រើវាក្យស័ព្ទក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# ការប្រើប្រាស់វាក្យស័ព្ទក្នុងកូដ 🛠️💻

---

**ការប្រើប្រាស់វាក្យស័ព្ទក្នុងកូដ (Using Terminology in Code)** គឺជាការអនុវត្តវាក្យស័ព្ទមូលដ្ឋានដើម្បីសរសេរកូដឱ្យមានអត្ថន័យ និងងាយយល់។

---

## 1. សារៈសំខាន់នៃការប្រើវាក្យស័ព្ទក្នុងកូដ

- **ភាពងាយយល់:** ការប្រើវាក្យស័ព្ទត្រឹមត្រូវធ្វើឱ្យកូដងាយអាន។
- **ការសហការ:** ជួយអ្នកអភិវឌ្ឍន៍ផ្សេងទៀតយល់កូដ។
- **ការថែទាំ:** ធ្វើឱ្យការកែប្រែកូដកាន់តែងាយស្រួល។

**ឧទាហរណ៍កូដ Python:**

\`\`\`python
# អថេរ (Variable) សម្រាប់ផ្ទុកចំនួន
count = 10
# អនុគមន៍ (Function) សម្រាប់គណនាការ៉េ
def square(number):
    return number * number
# បង្ហាញលទ្ធផល
print(square(count))  # បង្ហាញ: 100
\`\`\`

---

## 2. ការអនុវត្តវាក្យស័ព្ទសំខាន់ៗ

- **Variable:** ប្រើឈ្មោះដែលបង្ហាញអត្ថន័យ។
  \`\`\`python
  total_score = 85  # Variable ដែលបង្ហាញអត្ថន័យ
  \`\`\`
- **Function:** ប្រើសម្រាប់បែងចែកការងារ។
  \`\`\`python
  def calculate_total(price, quantity):  # Function ដែលបង្ហាញអត្ថន័យ
      return price * quantity
  \`\`\`
- **Loop:** ប្រើសម្រាប់ធ្វើការងារម្តងហើយម្តងទៀត។
  \`\`\`python
  for i in range(3):  # Loop សម្រាប់បង្ហាញចំនួន
      print(i)
  \`\`\`

---

## 3. ការប្រើវាក្យស័ព្ទឱ្យមានអត្ថន័យ

- **ឈ្មោះដែលច្បាស់:** ប្រើឈ្មោះដែលបង្ហាញអំពីគោលបំណង។
  - ល្អ: \`student_name\`, \`calculate_average\`
  - មិនល្អ: \`x\`, \`f\`
- **ការបែងចែកការងារ:** ប្រើ Function ដើម្បីរៀបចំកូដ។

**ឧទាហរណ៍កូដ:**

\`\`\`python
# អថេរ (Variable) សម្រាប់ផ្ទុកព័ត៌មានសិស្ស
student_name = "សុខា"
score = 90
# អនុគមន៍ (Function) សម្រាប់ពិនិត្យថ្នាក់
def check_grade(score):
    if score >= 80:
        return "ជាប់"
    return "ធ្លាក់"
# បង្ហាញលទ្ធផល
print(f"{student_name}: {check_grade(score)}")  # បង្ហាញ: សុខា: ជាប់
\`\`\`

---

## 4. ការអនុវត្តក្នុងកម្មវិធី

ការប្រើវាក្យស័ព្ទឱ្យត្រឹមត្រូវជួយធ្វើឱ្យកូដមានអត្ថន័យ។

**ឧទាហរណ៍កូដ:**

\`\`\`python
# អថេរ (Variable) សម្រាប់ផ្ទុកចំនួន
items = 5
# អនុគមន៍ (Function) សម្រាប់គណនាតម្លៃសរុប
def calculate_total(items, price_per_item):
    return items * price_per_item
# រង្វិលជុំ (Loop) សម្រាប់បង្ហាញតម្លៃ
for price in [10, 20]:
    print(f"តម្លៃសរុប: {calculate_total(items, price)}")
# បង្ហាញ: តម្លៃសរុប: 50, តម្លៃសរុប: 100
\`\`\`

---

## 5. ហេតុអ្វីសំខាន់ក្នុងការប្រើវាក្យស័ព្ទក្នុងកូដ?

- **ភាពងាយអាន:** ធ្វើឱ្យកូដងាយយល់។
- **ការថែទាំ:** ងាយស្រួលក្នុងការកែប្រែ។
- **ការអភិវឌ្ឍជំនាញ:** បង្កើនភាពជឿជាក់ក្នុងការសរសេរកម្មវិធី។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Variable និង Function</h3>
<p>ប្រើ Variable និង Function ដើម្បីពិនិត្យលទ្ធផល។</p>
<pre><code class="language-python">
student_name = "សុខា"  # អថេរ (Variable)
score = 85
def check_grade(score):  # អនុគមន៍ (Function)
    if score >= 80:
        return "ជាប់"
    return "ធ្លាក់"
print(f"{student_name}: {check_grade(score)}")  # បង្ហាញ: សុខា: ជាប់
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Loop និង Function</h3>
<p>ប្រើ Loop និង Function ដើម្បីគណនាតម្លៃ។</p>
<pre><code class="language-python">
items = 5  # អថេរ (Variable)
def calculate_total(items, price):  # អនុគមន៍ (Function)
    return items * price
for price in [10, 20]:  # រង្វិលជុំ (Loop)
    print(f"តម្លៃសរុប: {calculate_total(items, price)}")
# បង្ហាញ: តម្លៃសរុប: 50, តម្លៃសរុប: 100
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើការប្រើវាក្យស័ព្ទក្នុងកូដជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកូដងាយអាន និងថែទាំ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'ការប្រើវាក្យស័ព្ទក្នុងកូដជួយធ្វើឱ្យកូដងាយអាន និងថែទាំ។'
    },
    {
      question: 'តើឈ្មោះ Variable គួរមានលក្ខណៈអ្វី?',
      options: [
        'ខ្លី និងគ្មានអត្ថន័យ',
        'បង្ហាញអត្ថន័យច្បាស់លាស់',
        'ជាលេខសុទ្ធ',
        'ជា Loop'
      ],
      correct: 1,
      explanation: 'ឈ្មោះ Variable គួរបង្ហាញអត្ថន័យច្បាស់លាស់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ncount = 10\ndef square(number):\n    return number * number\nprint(square(count))\n```',
      options: ['100', '20', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function square គណនា 10 * 10 = 100។'
    },
    {
      question: 'តើ Function ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ទុកទិន្នន័យ',
        'បែងចែកការងារ',
        'បង្ហាញ UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Function ប្រើសម្រាប់បែងចែកការងារ។'
    },
    {
      question: 'តើ Loop ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ទុកទិន្នន័យ',
        'ធ្វើការងារម្តងហើយម្តងទៀត',
        'បង្ហាញ UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Loop ប្រើសម្រាប់ធ្វើការងារម្តងហើយម្តងទៀត។'
    },
    {
      question: 'ตើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nstudent_name = "សុខា"\nscore = 85\ndef check_grade(score):\n    if score >= 80:\n        return "ជាប់"\n    return "ធ្លាក់"\nprint(f"{student_name}: {check_grade(score)}")\n```',
      options: ['សុខា: ជាប់', 'សុខា: ធ្លាក់', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function check_grade បង្ហាញ "សុខា: ជាប់" ព្រោះ score = 85។'
    },
    {
      question: 'តើឈ្មោះដែលបង្ហាញអត្ថន័យច្បាស់លាស់គួរប្រើសម្រាប់អ្វី?',
      options: [
        'Variable និង Function',
        'UI',
        'Hardware',
        'Loop'
      ],
      correct: 0,
      explanation: 'ឈ្មោះដែលបង្ហាញអត្ថន័យច្បាស់លាស់គួរប្រើសម្រាប់ Variable និង Function។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nitems = 5\ndef calculate_total(items, price):\n    return items * price\nfor price in [10, 20]:\n    print(f"តម្លៃសរុប: {calculate_total(items, price)}")\n```',
      options: [
        'តម្លៃសរុប: 50, តម្លៃសរុប: 100',
        'តម្លៃសរុប: 15, តម្លៃសរុប: 25',
        'Error',
        'គ្មានលទ្ធផល'
      ],
      correct: 0,
      explanation: 'Loop បង្ហាញតម្លៃសរុប: 5 * 10 = 50, និង 5 * 20 = 100។'
    },
    {
      question: 'តើការប្រើវាក្យស័ព្ទឱ្យត្រឹមត្រូវជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកូដមានអត្ថន័យ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'ការប្រើវាក្យស័ព្ទឱ្យត្រឹមត្រូវធ្វើឱ្យកូដមានអត្ថន័យ។'
    },
    {
      question: 'តើឈ្មោះ `x` ឬ `f` ល្អសម្រាប់ Variable ឬ Function ឬទេ?',
      options: ['ល្អ', 'មិនល្អ', 'អាចប្រើបាន', 'ត្រូវតែប្រើ'],
      correct: 1,
      explanation: 'ឈ្មោះ `x` ឬ `f` មិនល្អព្រោះមិនបង្ហាញអត្ថន័យ។'
    },
    {
      question: 'តើ Variable `total_score` បង្ហាញអត្ថន័យអ្វី?',
      options: [
        'ចំនួនសរុបនៃពិន្ទុ',
        'ឈ្មោះសិស្ស',
        'ថ្នាក់',
        'តម្លៃ'
      ],
      correct: 0,
      explanation: '`total_score` បង្ហាញអត្ថន័យថាជាចំនួនសរុបនៃពិន្ទុ។'
    },
    {
      question: 'តើ Function `calculate_total` គួរប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ទុកទិន្នន័យ',
        'គណនាតម្លៃសរុប',
        'បង្ហាញ UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Function `calculate_total` គួរប្រើសម្រាប់គណនាតម្លៃសរុប។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើវាក្យស័ព្ទក្នុងកូដ។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំចំនួនទំនិញ (Integer)។
2. **ការអនុវត្តវាក្យស័ព្ទ:**
   - បង្កើត Variable ដើម្បីផ្ទុកឈ្មោះ និងចំនួនទំនិញ។
   - បង្កើត Function \`calculate_cost\` ដើម្បីគណនាតម្លៃសរុប (តម្លៃក្នុងមួយទំនិញ = 10)។
   - ប្រើ Loop ដើម្បីបង្ហាញតម្លៃសរុបចំនួន 2 ដង។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារជាមួយឈ្មោះ និងតម្លៃសរុប។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីចំនួនទំនិញមិនមែនជាលេខគត់។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរ�សេរកម្មវိធី។
    `,
    solution: `
\`\`\`python
def calculate_cost(name, items):
    """គណនាតម្លៃសរុបនៃទំនិញ។"""
    price_per_item = 10
    total = items * price_per_item
    return f"{name}: តម្លៃសរុប = {total} ដុល្លារ"

try:
    # អថេរ (Variable) សម្រាប់ផ្ទុកឈ្មោះ
    user_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # អថេរ (Variable) សម្រាប់ផ្ទុកចំនួនទំនិញ
    item_count = int(input("បញ្ចូលចំនួនទំនិញ: "))
    
    # រង្វិលជុំ (Loop) ដើម្បីបង្ហាញតម្លៃសរុប 2 ដង
    for i in range(2):
        print(calculate_cost(user_name, item_count))
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson1_3Content;
