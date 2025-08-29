import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson2_2Content: LessonContent = {
  title: 'Data Types',
  objectives: [
    'យល់ពីអត្ថន័យនៃ Data Types',
    'ស្គាល់ប្រភេទទិន្នន័យសំខាន់ៗក្នុង Python',
    'រៀនការប្រើ Data Types ក្នុងកូដ',
    'ស្វែងយល់ពីការបំប្លែង Data Types',
    'អនុវត្តការប្រើ Data Types ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# Data Types 📊💻

---

**Data Types (ប្រភេទទិន្នន័យ)** គឺជាការចាត់ថ្នាក់នៃទិន្នន័យដែលកំណត់ថាទិន្នន័យនោះអាចធ្វើអ្វីបាន។

---

## 1. អត្ថន័យនៃ Data Types

- **Data Type:** ប្រភេទនៃទិន្នន័យដែលកំណត់លក្ខណៈ និងប្រតិបត្តិការដែលអាចធ្វើបាន។
- **សារៈសំខាន់:**
  - ជួយឱ្យកម្មវិធីដឹងពីរបៀបគ្រប់គ្រងទិន្នន័យ។
  - ការពារកំហុសក្នុងការប្រើទិន្នន័យ។

---

## 2. ប្រភេទទិន្នន័យសំខាន់ៗក្នុង Python

- **String (ខ្សែអក្សរ):** ទិន្នន័យប្រភេទអក្សរ។
  \`\`\`python
  name = "សុខា"  # String
  \`\`\`
- **Integer (ចំនួនគត់):** ទិن្នន័យប្រភេទលេខគត់។
  \`\`\`python
  age = 20  # Integer
  \`\`\`
- **Float (ចំនួនទសភាគ):** ទិន្នន័យប្រភេទលេខទសភាគ។
  \`\`\`python
  price = 19.99  # Float
  \`\`\`
- **Boolean (ប៊ូលីន):** ទិន្នន័យប្រភេទ \`True\` ឬ \`False\`។
  \`\`\`python
  is_student = True  # Boolean
  \`\`\`
- **List (បញ្ជី):** បណ្តុំទិន្នន័យដែលអាចផ្លាស់ប្តូរបាន។
  \`\`\`python
  scores = [80, 90, 95]  # List
  \`\`\`

---

## 3. ការប្រើ Data Types ក្នុងកូດ

**ឧទាហរណ៍កូដ:**

\`\`\`python
# String
name = "សុខា"
# Integer
age = 20
# Float
price = 19.99
# Boolean
is_student = True
# List
scores = [80, 90, 95]

print(f"{name} អាយុ {age} ឆ្នាំ, តម្លៃ: {price}, សិស្ស: {is_student}, ពិន្ទុ: {scores}")
# បង្ហាញ: សុខា អាយុ 20 ឆ្នាំ, តម្លៃ: 19.99, សិស្ស: True, ពិន្ទុ: [80, 90, 95]
\`\`\`

---

## 4. ការបំប្លែង Data Types

- **ការបំប្លែង (Type Conversion):** ផ្លាស់ប្តូរទិន្នន័យពីប្រភេទមួយទៅប្រភេទមួយទៀត។
  - \`int()\`: បំប្លែងទៅ Integer
  - \`str()\`: បំប្លែងទៅ String
  - \`float()\`: បំប្លែងទៅ Float

**ឧទាហរណ៍:**

\`\`\`python
number = "25"  # String
number_int = int(number)  # បំប្លែងទៅ Integer
print(number_int + 5)  # បង្ហាញ: 30
\`\`\`

---

## 5. ហេតុអ្វីសំខាន់?

- **ភាពត្រឹមត្រូវ:** ការប្រើ Data Type ត្រឹមត្រូវការពារកំហុស។
- **ប្រសិទ្ធភាព:** ជួយកម្មវិធីដំណើរការលឿន។
- **ការសហការ:** ធ្វើឱ្យកូដងាយយល់សម្រាប់អ្នកអភិវឌ្ឍន៍ផ្សេង។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Data Types</h3>
<p>ប្រើ Data Types ផ្សេងៗក្នុងកូដ។</p>
<pre><code class="language-python">
name = "សុខា"  # String
age = 20  # Integer
price = 19.99  # Float
is_student = True  # Boolean
print(f"{name}, {age}, {price}, {is_student}")
# បង្ហាញ: សុខា, 20, 19.99, True
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបំប្លែង Data Types</h3>
<p>បំប្លែង String ទៅ Integer។</p>
<pre><code class="language-python">
score = "85"  # String
score_int = int(score)  # Integer
print(score_int + 15)  # បង្ហាញ: 100
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Data Type គឺជាអ្វី?',
      options: [
        'បណ្តុំនៃកូដ',
        'ការចាត់ថ្នាក់នៃទិន្នន័យ',
        'ការធ្វើកិច្ចការម្តងហើយម្តងទៀត',
        'ទីតាំងផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Data Type ជាការចាត់ថ្នាក់នៃទិន្នន័យ។'
    },
    {
      question: 'តើ String គឺជាអ្វី?',
      options: [
        'ទិន្នន័យប្រភេទអក្សរ',
        'ទិន្នន័យប្រភេទលេខគត់',
        'ទិន្នន័យប្រភេទលេខទសភាគ',
        'ទិន្នន័យប្រភេទ True/False'
      ],
      correct: 0,
      explanation: 'String ជាទិន្នន័យប្រភេទអក្សរ។'
    },
    {
      question: 'តើ Integer គឺជាអ្វី?',
      options: [
        'ទិន្នន័យប្រភេទអក្សរ',
        'ទិន្នន័យប្រភេទលេខគត់',
        'ទិន្នន័យប្រភេទលេខទសភាគ',
        'ទិន្នន័យប្រភេទ True/False'
      ],
      correct: 1,
      explanation: 'Integer ជាទិន្នន័យប្រភេទលេខគត់។'
    },
    {
      question: 'តើ Float គឺជាអ្វី?',
      options: [
        'ទិន្នន័យប្រភេទអក្សរ',
        'ទិន្នន័យប្រភេទលេខគត់',
        'ទិន្នន័យប្រភេទលេខទសភាគ',
        'ទិន្នន័យប្រភេទ True/False'
      ],
      correct: 2,
      explanation: 'Float ជាទិន្នន័យប្រភេទលេខទសភាគ។'
    },
    {
      question: 'តើ Boolean គឺជាអ្វី?',
      options: [
        'ទិន្នន័យប្រភេទអក្សរ',
        'ទិន្នន័យប្រភេទលេខគត់',
        'ទិន្នន័យប្រភេទលេខទសភាគ',
        'ទិន្នន័យប្រភេទ True/False'
      ],
      correct: 3,
      explanation: 'Boolean ជាទិន្នន័យប្រភេទ True/False។'
    },
    {
      question: 'តើ List គឺជាអ្វី?',
      options: [
        'ទិន្នន័យប្រភេទអក្សរ',
        'បណ្តុំទិន្នន័យដែលអាចផ្លាស់ប្តូរបាន',
        'ទីតាំងផ្ទុកទិន្នន័យ',
        'ការធ្វើកិច្ចការម្តងហើយម្តងទៀត'
      ],
      correct: 1,
      explanation: 'List ជាបណ្តុំទិន្នន័យដែលអាចផ្លាស់ប្តូរបាន។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nscore = "85"\nscore_int = int(score)\nprint(score_int + 15)\n```',
      options: ['100', '85', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'String "85" ត្រូវបានបំប្លែងទៅ Integer ហើយបូក 15 = 100។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nname = "សុខា"\nage = 20\nprint(f"{name}, {age}")\n```',
      options: ['សុខា, 20', 'សុខា', '20', 'Error'],
      correct: 0,
      explanation: 'String និង Integer ត្រូវបានបង្ហាញជា "សុខា, 20"។'
    },
    {
      question: 'តើអ្វីប្រើដើម្បីបំប្លែងទៅ Integer?',
      options: ['str()', 'int()', 'float()', 'bool()'],
      correct: 1,
      explanation: '`int()` ប្រើសម្រាប់បំប្លែងទៅ Integer។'
    },
    {
      question: 'តើ Data Types ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ការពារកំហុស និងធ្វើឱ្យកម្មវិធីលឿន',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Data Types ការពារកំហុស និងធ្វើឱ្យកម្មវិធីលឿន។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nprice = 19.99\nis_student = True\nprint(price, is_student)\n```',
      options: ['19.99, True', '19.99', 'True', 'Error'],
      correct: 0,
      explanation: 'Float និង Boolean ត្រូវបានបង្ហាញជា "19.99, True"។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nscores = [80, 90, 95]\nprint(scores)\n```',
      options: ['[80, 90, 95]', '80, 90, 95', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'List ត្រូវបានបង្ហាញជា "[80, 90, 95]"។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Data Types។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំពិន្ទុ (String ដែលត្រូវបំប្លែងទៅ Integer)។
2. **ការអនុវត្ត Data Types:**
   - បង្កើត Variable សម្រាប់ឈ្មោះ (String) និងពិន្ទុ (Integer)។
   - បង្កើត Constant \`PASSING_SCORE\` ជាមួយតម្លៃ 50 (Integer)។
   - បង្កើត Function \`check_pass\` ដើម្បីពិនិត្យថាជាប់ឬធ្លាក់ (Boolean)។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារជាមួយឈ្មោះ និងលទ្ធផល (True/False)។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីពិន្ទុមិនមែនជាលេខ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
def check_pass(name, score):
    """ពិនិត្យថាជាប់ឬធ្លាក់។"""
    PASSING_SCORE = 50  # Constant (Integer)
    is_passed = score >= PASSING_SCORE  # Boolean
    return f"{name}: ជាប់ = {is_passed}"

try:
    # Variable (String)
    user_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # Variable (String -> Integer)
    user_score = int(input("បញ្ចូលពិន្ទុរបស់អ្នក: "))
    
    # បង្ហាញលទ្ធផល
    print(check_pass(user_name, user_score))
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson2_2Content;
