import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson2_1Content: LessonContent = {
  title: 'Variables និង Constants',
  objectives: [
    'យល់ពីអត្ថន័យនៃ Variables និង Constants',
    'ស្គាល់ភាពខុសគ្នារវាង Variables និង Constants',
    'រៀនការប្រើ Variables និង Constants ក្នុង Python',
    'ស្វែងយល់ពីការដាក់ឈ្មោះ Variables និង Constants',
    'អនុវត្តការប្រើ Variables និង Constants ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# Variables និង Constants 📦💻

---

**Variables (អថេរ)** និង **Constants (ថេរ)** គឺជាវាក្យស័ព្ទសំខាន់សម្រាប់ផ្ទុកទិន្នន័យក្នុងការសរសេរកម្មវិធី។

---

## 1. អត្ថន័យនៃ Variables និង Constants

- **Variable (អថេរ):** ទីតាំងផ្ទុកទិន្នន័យដែលអាចផ្លាស់ប្តូរតម្លៃបាន។
  \`\`\`python
  age = 20  # Variable ឈ្មោះ age
  age = 21  # ផ្លាស់ប្តូរតម្លៃ
  \`\`\`
- **Constant (ថេរ):** ទីតាំងផ្ទុកទិន្នន័យដែលមិនអាចផ្លាស់ប្តូរតម្លៃបាន។
  \`\`\`python
  PI = 3.14159  # Constant ឈ្មោះ PI
  \`\`\`

---

## 2. ភាពខុសគ្នារវាង Variables និង Constants

- **Variables:** អាចផ្លាស់ប្តូរតម្លៃបានគ្រប់ពេល។
- **Constants:** តម្លៃនៅថេរ និងជាទូទៅប្រើអក្សរធំ។

**ឧទាហរណ៍ក្នុង Python:**

\`\`\`python
# Variable
score = 85
score = 90  # ផ្លាស់ប្តូរតម្លៃ
print(score)  # បង្ហាញ: 90

# Constant
MAX_SCORE = 100
print(MAX_SCORE)  # បង្ហាញ: 100
# MAX_SCORE = 200  # មិនគួរផ្លាស់ប្តូរ!
\`\`\`

---

## 3. ការដាក់ឈ្មោះ Variables និង Constants

- **ក្បួនដាក់ឈ្មោះ:**
  - ប្រើឈ្មោះដែលបង្ហាញអត្ថន័យ (ឧ. \`student_name\`, \`MAX_ATTEMPTS\`)។
  - Variables: ប្រើអក្សរតូច និង \`_\` (ឧ. \`total_score\`)។
  - Constants: ប្រើអក្សរធំទាំងអស់ (ឧ. \`PI\`, \`MAX_SIZE\`)។
- **ការហាមឃាត់:**
  - មិនចាប់ផ្តើមដោយលេខ (ឧ. \`1score\`)។
  - មិនប្រើអក្សរពិសេស លើកលែង \`_\`។
  - មិនប្រើពាក្យគន្លឹះ (ឧ. \`if\`, \`for\`)។

**ឧទាហរណ៍:**

\`\`\`python
# ឈ្មោះល្អ
student_name = "សុខា"
MAX_STUDENTS = 30

# ឈ្មោះមិនល្អ
x = "សុខា"  # មិនបង្ហាញអត្ថន័យ
1score = 90  # កំហុស: ចាប់ផ្តើមដោយលេខ
\`\`\`

---

## 4. ការប្រើ Variables និង Constants ក្នុងកូដ

**ឧទាហរណ៍កូដ:**

\`\`\`python
# Variables
name = "សុខា"
age = 20
# Constant
TAX_RATE = 0.1

# គណនាតម្លៃសរុប
price = 100
total_price = price + (price * TAX_RATE)
print(f"{name} ត្រូវបង់: {total_price} ដុល្លារ")  # បង្ហាញ: សុខា ត្រូវបង់: 110.0 ដុល្លារ
\`\`\`

---

## 5. ហេតុអ្វីសំខាន់?

- **ភាពងាយអាន:** ឈ្មោះដែលបង្ហាញអត្ថន័យធ្វើឱ្យកូដងាយយល់។
- **ការថែទាំ:** Constants ជួយធានាថាតម្លៃសំខាន់មិនផ្លាស់ប្តូរ។
- **ការសហការ:** ជួយអ្នកអភិវឌ្ឍន៍ផ្សេងទៀតយល់កូដ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Variable</h3>
<p>ប្រើ Variable ដើម្បីផ្ទុក និងផ្លាស់ប្តូរទិន្នន័យ។</p>
<pre><code class="language-python">
score = 85  # Variable
score = score + 5
print(score)  # បង្ហាញ: 90
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Constant</h3>
<p>ប្រើ Constant សម្រាប់តម្លៃថេរ។</p>
<pre><code class="language-python">
DISCOUNT = 0.2  # Constant
price = 100
final_price = price - (price * DISCOUNT)
print(final_price)  # បង្ហាញ: 80.0
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Variable គឺជាអ្វី?',
      options: [
        'ទីតាំងផ្ទុកទិន្នន័យដែលមិនផ្លាស់ប្តូរ',
        'ទីតាំងផ្ទុកទិន្នន័យដែលអាចផ្លាស់ប្តូរបាន',
        'បណ្តុំនៃកូដ',
        'ការធ្វើកិច្ចការម្តងហើយម្តងទៀត'
      ],
      correct: 1,
      explanation: 'Variable ជាទីតាំងផ្ទុកទិន្នន័យដែលអាចផ្លាស់ប្តូរបាន។'
    },
    {
      question: 'តើ Constant គឺជាអ្វី?',
      options: [
        'ទីតាំងផ្ទុកទិន្នន័យដែលអាចផ្លាស់ប្តូរបាន',
        'ទីតាំងផ្ទុកទិន្នន័យដែលមិនផ្លាស់ប្តូរ',
        'បណ្តុំនៃកូដ',
        'ការធ្វើកិច្ចការម្តងហើយម្តងទៀត'
      ],
      correct: 1,
      explanation: 'Constant ជាទីតាំងផ្ទុកទិន្នន័យដែលមិនផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើឈ្មោះ Constant គួរប្រើអក្សរបែបណា?',
      options: [
        'អក្សរតូចទាំងអស់',
        'អក្សរធំទាំងអស់',
        'ចាប់ផ្តើមដោយលេខ',
        'ប្រើអក្សរពិសេស'
      ],
      correct: 1,
      explanation: 'Constant គួរប្រើអក្សរធំទាំងអស់ (ឧ. `PI`, `MAX_SCORE`)។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nscore = 80\nscore = 90\nprint(score)\n```',
      options: ['80', '90', 'Error', 'គ្មានលទ្ធផល'],
      correct: 1,
      explanation: 'Variable score ផ្លាស់ប្តូរទៅ 90 ហើយបង្ហាញ 90។'
    },
    {
      question: 'តើឈ្មោះ `1score` ត្រឹមត្រូវសម្រាប់ Variable ឬទេ?',
      options: ['ត្រឹមត្រូវ', 'មិនត្រឹមត្រូវ', 'អាចប្រើបាន', 'ត្រូវតែប្រើ'],
      correct: 1,
      explanation: 'ឈ្មោះ `1score` មិនត្រឹមត្រូវព្រោះចាប់ផ្តើមដោយលេខ។'
    },
    {
      question: 'តើឈ្មោះ `student_name` ល្អសម្រាប់ Variable ឬទេ?',
      options: ['ល្អ', 'មិនល្អ', 'អាចប្រើបាន', 'មិនត្រឹមត្រូវ'],
      correct: 0,
      explanation: 'ឈ្មោះ `student_name` ល្អព្រោះបង្ហាញអត្ថន័យច្បាស់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nDISCOUNT = 0.2\nprice = 100\nfinal_price = price - (price * DISCOUNT)\nprint(final_price)\n```',
      options: ['80.0', '100.0', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Constant DISCOUNT ត្រូវបានប្រើដើម្បីគណនា 100 - (100 * 0.2) = 80.0។'
    },
    {
      question: 'តើ Variables អាចផ្លាស់ប្តូរតម្លៃបានឬទេ?',
      options: ['បាន', 'មិនបាន', 'អាស្រ័យលើភាសា', 'តែក្នុង Loop'],
      correct: 0,
      explanation: 'Variables អាចផ្លាស់ប្តូរតម្លៃបាន។'
    },
    {
      question: 'តើ Constants គួរផ្លាស់ប្តូរតម្លៃឬទេ?',
      options: ['គួរ', 'មិនគួរ', 'អាស្រ័យលើភាសា', 'តែក្នុង Function'],
      correct: 1,
      explanation: 'Constants មិនគួរផ្លាស់ប្តូរតម្លៃ។'
    },
    {
      question: 'តើឈ្មោះ Variable គួរមានលក្ខណៈអ្វី?',
      options: [
        'ចាប់ផ្តើមដោយលេខ',
        'បង្ហាញអត្ថន័យច្បាស់',
        'ប្រើអក្សរពិសេស',
        'ជាពាក្យគន្លឹះ'
      ],
      correct: 1,
      explanation: 'ឈ្មោះ Variable គួរបង្ហាញអត្ថន័យច្បាស់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nname = "សុខា"\nTAX_RATE = 0.1\nprice = 100\ntotal_price = price + (price * TAX_RATE)\nprint(f"{name} ត្រូវបង់: {total_price} ដុល្លារ")\n```',
      options: [
        'សុខា ត្រូវបង់: 110.0 ដុល្លារ',
        'សុខា ត្រូវបង់: 100.0 ដុល្លារ',
        'Error',
        'គ្មានលទ្ធផល'
      ],
      correct: 0,
      explanation: 'Constant TAX_RATE ត្រូវបានប្រើដើម្បីគណនា 100 + (100 * 0.1) = 110.0។'
    },
    {
      question: 'តើហេតុអ្វីត្រូវប្រើ Constants?',
      options: [
        'ដើម្បីផ្លាស់ប្តូរតម្លៃ',
        'ដើម្បីធានាថាតម្លៃមិនផ្លាស់ប្តូរ',
        'ដើម្បីបង្កើត UI',
        'ដើម្បីគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Constants ត្រូវបានប្រើដើម្បីធានាថាតម្លៃមិនផ្លាស់ប្តូរ។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Variables និង Constants។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំចំនួនទំនិញ (Integer)។
2. **ការអនុវត្តវាក្យស័ព្ទ:**
   - បង្កើត Variable ដើម្បីផ្ទុកឈ្មោះ និងចំនួនទំនិញ។
   - បង្កើត Constant \`PRICE_PER_ITEM\` ជាមួយតម្លៃ 15។
   - បង្កើត Function \`calculate_total\` ដើម្បីគណនាតម្លៃសរុប។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារជាមួយឈ្មោះ និងតម្លៃសរុប។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីចំនួនទំនិញមិនមែនជាលេខគត់។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
def calculate_total(name, items):
    """គណនាតម្លៃសរុបនៃទំនិញ។"""
    PRICE_PER_ITEM = 15  # Constant
    total = items * PRICE_PER_ITEM
    return f"{name}: តម្លៃសរុប = {total} ដុល្លារ"

try:
    # Variable
    user_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # Variable
    item_count = int(input("បញ្ចូលចំនួនទំនិញ: "))
    
    # បង្ហាញលទ្ធផល
    print(calculate_total(user_name, item_count))
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson2_1Content;
