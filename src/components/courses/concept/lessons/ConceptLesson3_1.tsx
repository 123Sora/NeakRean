import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson3_1Content: LessonContent = {
  title: 'If/Else Statements',
  objectives: [
    'យល់ពីគោលគំនិតនៃ If/Else Statements ក្នុងការសរសេរកម្មវិធី',
    'ស្វែងយល់ពីរបៀបប្រើ If, Else If, និង Else ក្នុង Python',
    'រៀនការប្រើ Logical Operators (and, or, not) ជាមួយ If/Else',
    'អនុវត្ត If/Else Statements ដើម្បីធ្វើការសម្រេចចិត្ត',
    'ស្គាល់ការប្រើ Nested If Statements និងផលប៉ះពាល់'
  ],
  content: `
# If/Else Statements 🤔💻

---

**If/Else Statements** គឺជា Control Structures ដែលអនុញ្ញាតឱ្យកម្មវិធីធ្វើការសម្រេចចិត្តដោយផ្អែកលើលក្ខខណ្ឌ។ វាជួយឱ្យកម្មវិធីជ្រើសរើសផ្លូវផ្សេងៗ អាស្រ័យលើតម្លៃ ឬស្ថានភាព។

---

## 1. គោលគំនិតនៃ If/Else Statements

If/Else Statements ពិនិត្យលក្ខខណ្ឌ និងប្រតិបត្តិកូដប្រសិនបើលក្ខខណ្ឌនោះជា \`True\`។
- **If:** ប្រតិបត្តិកូដប្រសិនបើលក្ខខណ្ឌជា \`True\`។
- **Else If:** ពិនិត្យលក្ខខណ្ឌបន្ថែមប្រសិនបើ \`If\` មិន \`True\`។
- **Else:** ប្រតិបត្តិកូដប្រសិនបើគ្មានលក្ខខណ្ឌណាមួយ \`True\`។

**ឧទាហរណ៍កូដ Python:**

\`\`\`python
age = 20
if age >= 18:
    print("អ្នកជាមនុស្សពេញវ័យ!")
else:
    print("អ្នកនៅជាអនីតិជន។")
\`\`\`

---

## 2. ការប្រើ If, Else If, និង Else

- **If Statement:**
  \`\`\`python
  score = 85
  if score >= 60:
      print("អ្នកបានជាប់!")
  \`\`\`
- **If/Else Statement:**
  \`\`\`python
  score = 55
  if score >= 60:
      print("អ្នកបានជាប់!")
  else:
      print("អ្នកមិនបានជាប់។")
  \`\`\`
- **If/Else If/Else Statement:**
  \`\`\`python
  score = 75
  if score >= 90:
      print("ពិន្ទុ A")
  elif score >= 80:
      print("ពិន្ទុ B")
  elif score >= 70:
      print("ពិន្ទុ C")
  else:
      print("ពិន្ទុ D ឬ F")
  \`\`\`

---

## 3. Logical Operators ជាមួយ If/Else

- **and:** លក្ខខណ្ឌទាំងពីរត្រូវតែ \`True\`។
- **or:** យ៉ាងហោចណាស់លក្ខខណ្ឌមួយត្រូវតែ \`True\`។
- **not:** បញ្ច្រាសលទ្ធផលនៃលក្ខខណ្ឌ។

**ឧទាហរណ៍:**

\`\`\`python
age = 25
has_id = True
if age >= 18 and has_id:
    print("អ្នកអាចចូលបាន!")
else:
    print("អ្នកមិនអាចចូលបាន។")
\`\`\`

---

## 4. Nested If Statements

Nested If Statements គឺជា If Statements ដែលស្ថិតនៅក្នុង If Statement ផ្សេងទៀត។

**ឧទាហរណ៍:**

\`\`\`python
age = 20
is_student = True
if age >= 18:
    if is_student:
        print("អ្នកជាមនុស្សពេញវ័យ និងជាសិស្ស!")
    else:
        print("អ្នកជាមនុស្សពេញវ័យ ប៉ុន្តែមិនមែនសិស្ស។")
else:
    print("អ្នកជាអនីតិជន។")
\`\`\`

---

## 5. ការប្រើ If/Else Statements ក្នុងកម្មវិធី

If/Else Statements ត្រូវបានប្រើសម្រាប់៖
- **ការសម្រេចចិត្ត:** ឧទាហរណ៍ ពិនិត្យថាតើអ្នកប្រើជាមនុស្សពេញវ័យ។
- **ការត្រួតពិនិត្យលក្ខខណ្ឌ:** ឧទាហរណ៍ កំណត់ចំណាត់ថ្នាក់ដោយផ្អែកលើពិន្ទុ។
- **ការគ្រប់គ្រងលំហូរ:** ជ្រើសរើសផ្លូវផ្សេងៗនៃកម្មវិធី។

**ឧទាហរណ៍កូដ:**

\`\`\`python
temperature = 30
if temperature > 35:
    print("ក្តៅខ្លាំង!")
elif temperature > 25:
    print("ក្តៅស្រាល។")
else:
    print("ត្រជាក់។")
\`\`\`

---

## 6. ហេតុអ្វីសំខាន់ក្នុងការប្រើ If/Else Statements?

- **ភាពបត់បែន:** អនុញ្ញាតឱ្យកម្មវិធីសម្រេចចិត្តដោយផ្អែកលើទិន្នន័យ។
- **ភាពច្បាស់លាស់:** ធ្វើឱ្យកូដអានបានស្រួល និងមានអត្ថន័យ។
- **ការគ្រប់គ្រងកំហុស:** អាចដោះស្រាយស្ថានភាពផ្សេងៗ។
- **ការប្រើឡើងវិញ:** អនុញ្ញាតឱ្យប្រើលក្ខខណ្ឌច្រើនក្នុងកម្មវិធី។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ If/Else ដើម្បីពិនិត្យអាយុ</h3>
<p>បង្កើតកម្មវិធីដែលពិនិត្យថាតើអ្នកប្រើជាមនុស្សពេញវ័យ។</p>
<pre><code class="language-python">
age = int(input("បញ្ចូលអាយុរបស់អ្នក: "))
if age >= 18:
    print("អ្នកជាមនុស្សពេញវ័យ!")
else:
    print("អ្នកជាអនីតិជន។")
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ If/Else If/Else ដើម្បីកំណត់ចំណាត់ថ្នាក់</h3>
<p>បង្កើតកម្មវិធីដែលកំណត់ចំណាត់ថ្នាក់ដោយផ្អែកលើពិន្ទុ។</p>
<pre><code class="language-python">
score = int(input("បញ្ចូលពិន្ទុរបស់អ្នក: "))
if score >= 90:
    print("ពិន្ទុ A")
elif score >= 80:
    print("ពិន្ទុ B")
elif score >= 70:
    print("ពិន្ទុ C")
else:
    print("ពិន្ទុ D ឬ F")
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ If/Else Statement ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ទុកទិន្នន័យ',
        'ធ្វើការសម្រេចចិត្ត',
        'បង្កើត Loop',
        'បង្កើត Function'
      ],
      correct: 1,
      explanation: 'If/Else Statement ប្រើសម្រាប់ធ្វើការសម្រេចចិត្តដោយផ្អែកលើលក្ខខណ្ឌ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nx = 10\nif x > 5:\n    print("ធំ")\nelse:\n    print("តូច")\n```',
      options: ['ធំ', 'តូច', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'លក្ខខណ្ឌ `x > 5` ជា `True` ព្រោះ ១០ > ៥, ដូច្នេះបង្ហាញ "ធំ"។'
    },
    {
      question: 'តើ Operator ណាដែលបញ្ច្រាសលទ្ធផលនៃលក្ខខណ្ឌ?',
      options: ['and', 'or', 'not', 'if'],
      correct: 2,
      explanation: '`not` បញ្ច្រាសលទ្ធផលនៃលក្ខខណ្ឌ (ឧ. `not True` → `False`)។'
    },
    {
      question: 'តើ `elif` មានន័យថាអ្វី?',
      options: ['Else If', 'Else', 'End If', 'Exit If'],
      correct: 0,
      explanation: '`elif` មានន័យថា Else If សម្រាប់ពិនិត្យលក្ខខណ្ឌបន្ថែម។'
    },
    {
      question: 'តើ Nested If Statement គឺជាអ្វី?',
      options: [
        'If Statement នៅក្នុង If Statement',
        'If Statement នៅក្នុង Loop',
        'If Statement ដែលប្រើ `and`',
        'If Statement ដែលមិនមាន `else`'
      ],
      correct: 0,
      explanation: 'Nested If Statement គឺជា If Statement ដែលស្ថិតនៅក្នុង If Statement ផ្សេងទៀត។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nx = 50\nif x >= 60:\n    print("ជាប់")\nelif x >= 50:\n    print("ជាប់ស្តើង")\nelse:\n    print("ធ្លាក់")\n```',
      options: ['ជាប់', 'ជាប់ស្តើង', 'ធ្លាក់', 'Error'],
      correct: 1,
      explanation: 'លក្ខខណ្ឌ `x >= 50` ជា `True` ព្រោះ ៥០ >= ៥០, ដូច្នេះបង្ហាញ "ជាប់ស្តើង"។'
    },
    {
      question: 'តើ Operator `and` តម្រូវឱ្យលក្ខខណ្ឌបែបណា?',
      options: [
        'លក្ខខណ្ឌមួយ `True`',
        'លក្ខខណ្ឌទាំងពីរ `True`',
        'លក្ខខណ្ឌទាំងពីរ `False`',
        'លក្ខខណ្ឌមួយ `False`'
      ],
      correct: 1,
      explanation: '`and` តម្រូវឱ្យលក្ខខណ្ឌទាំងពីរជា `True`។'
    },
    {
      question: 'តើកូដខាងក្រោមនឹងបង្ហាញអ្វី?\n```python\nage = 16\nif age >= 18:\n    print("ពេញវ័យ")\nelse:\n    print("អនីតិជន")\n```',
      options: ['ពេញវ័យ', 'អនីតិជន', 'Error', 'គ្មានលទ្ធផល'],
      correct: 1,
      explanation: 'លក្ខខណ្ឌ `age >= 18` ជា `False` ព្រោះ ១៦ < ១៨, ដូច្នេះបង្ហាញ "អនីតិជន"។'
    },
    {
      question: 'តើ Operator `or` ដំណើរការដូចម្តេច?',
      options: [
        'លក្ខខណ្ឌទាំងពីរត្រូវ `True`',
        'យ៉ាងហោចណាស់លក្ខខណ្ឌមួយ `True`',
        'បញ្ច្រាសលក្ខខណ្ឌ',
        'លក្ខខណ្ឌទាំងពីរត្រូវ `False`'
      ],
      correct: 1,
      explanation: '`or` តម្រូវឱ្យយ៉ាងហោចណាស់លក្ខខណ្ឌមួយជា `True`។'
    },
    {
      question: 'តើអ្វីជាគោលបំណងសំខាន់នៃ If/Else Statements?',
      options: [
        'ផ្ទុកទិន្នន័យ',
        'ធ្វើការសម្រេចចិត្ត',
        'បង្កើត Loop',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'If/Else Statements ប្រើសម្រាប់ធ្វើការសម្រេចចិត្តដោយផ្អែកលើលក្ខខណ្ឌ។'
    },
    {
      question: 'តើកូដខាងក្រោមនឹងបង្ហាញអ្វី?\n```python\nx = 25\nif x > 20 and x < 30:\n    print("នៅចន្លោះ")\nelse:\n    print("នៅក្រៅ")\n```',
      options: ['នៅចន្លោះ', 'នៅក្រៅ', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'លក្ខខណ្ឌ `x > 20 and x < 30` ជា `True` ព្រោះ ២៥ នៅចន្លោះ ២០ និង ៣០, ដូច្នេះបង្ហាញ "នៅចន្លោះ"។'
    },
    {
      question: 'តើ If Statement ដំណើរការដោយផ្អែកលើអ្វី?',
      options: ['Function', 'Loop', 'Condition', 'Variable'],
      correct: 2,
      explanation: 'If Statement ដំណើរការដោយផ្អែកលើ Condition (លក្ខខណ្ឌ)។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ If/Else Statements ដើម្បីកំណត់ស្ថានភាពអ្នកប្រើ។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះ និងអាយុពីអ្នកប្រើ។
   - ស្នើសុំថាតើអ្នកប្រើជាសិស្ស (\`True\` ឬ \`False\`)។
2. **ការប្រើ If/Else:**
   - ប្រើ If/Else Statements ដើម្បីពិនិត្យអាយុ និងស្ថានភាពសិស្ស។
   - ប្រសិនបើអាយុ >= ១៨ និងជាសិស្ស បង្ហាញសារថា "មនុស្សពេញវ័យ និងសិស្ស"។
   - ប្រសិនបើអាយុ >= ១៨ ប៉ុន្តែមិនមែនសិស្ស បង្ហាញ "មនុស្សពេញវ័យ"។
   - បើមិនមែន បង្ហាញ "អនីតិជន"។
3. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលអាយុមិនមែនជាលេខ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    age = int(input("បញ្ចូលអាយុរបស់អ្នក: "))
    is_student = input("តើអ្នកជាសិស្សទេ? (True/False): ").lower() == "true"
    if age >= 18 and is_student:
        print(f"សួស្តី {name}! អ្នកជាមនុស្សពេញវ័យ និងជាសិស្ស។")
    elif age >= 18:
        print(f"សួស្តី {name}! អ្នកជាមនុស្សពេញវ័យ។")
    else:
        print(f"សួស្តី {name}! អ្នកជាអនីតិជន។")
except ValueError:
    print("សូមបញ្ចូលអាយុជាលេខ!")
\`\`\`
`
  }
};

export default ConceptLesson3_1Content;
