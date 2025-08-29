import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson3_1Content: LessonContent = {
  title: 'វាក្យស័ព្ទទាក់ទងនឹងលក្ខខណ្ឌ',
  objectives: [
    'យល់ពីអត្ថន័យនៃវាក្យស័ព្ទទាក់ទងនឹងលក្ខខណ្ឌ (Conditional Terms)',
    'ស្គាល់ពាក្យសំខាន់ៗដូចជា if, else, និង elif',
    'រៀនការប្រើលក្ខខណ្ឌក្នុង Python',
    'ស្វែងយល់ពីការប្រើលក្ខខណ្ឌដើម្បីសម្រេចចិត្ត',
    'អនុវត្តការប្រើវាក្យស័ព្ទលក្ខខណ្ឌក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# វាក្យស័ព្ទទាក់ទងនឹងលក្ខខណ្ឌ 🤔💻

---

**វាក្យស័ព្ទទាក់ទងនឹងលក្ខខណ្ឌ (Conditional Terms)** គឺជាពាក្យបច្ចេកទេសដែលប្រើសម្រាប់គ្រប់គ្រងលំហូរនៃកម្មវិធីដោយផ្អែកលើលក្ខខណ្ឌ។

---

## 1. អ្វីទៅជា Conditional Terms?

- **Conditional Terms:** ពាក្យដែលប្រើសម្រាប់សម្រេចចិត្តនៅក្នុងកម្មវិធី។
- **សារៈសំខាន់:**
  - អនុញ្ញាតឱ្យកម្មវិធីជ្រើសរើសផ្លូវផ្សេងៗគ្នា។
  - ជួយគ្រប់គ្រងស្ថានភាពផ្សេងៗ។

**ពាក្យសំខាន់ៗ:**
- **if:** ពិនិត្យលក្ខខណ្ឌថាតើពិតឬអត់។
- **else:** អនុវត្តប្រសិនបើលក្ខខណ្ឌមិនពិត។
- **elif:** ពិនិត្យលក្ខខណ្ឌបន្ថែមប្រសិនបើ \`if\` មិនពិត។

---

## 2. ការប្រើ Conditional Terms ក្នុង Python

- **if Statement:**
  \`\`\`python
  score = 85
  if score >= 80:
      print("ជាប់")  # បង្ហាញ: ជាប់
  \`\`\`
- **if-else Statement:**
  \`\`\`python
  score = 65
  if score >= 80:
      print("ជាប់")
  else:
      print("ធ្លាក់")  # បង្ហាញ: ធ្លាក់
  \`\`\`
- **if-elif-else Statement:**
  \`\`\`python
  score = 75
  if score >= 80:
      print("A")
  elif score >= 60:
      print("B")  # បង្ហាញ: B
  else:
      print("C")
  \`\`\`

---

## 3. ការអនុវត្តក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ:**

\`\`\`python
# Variable សម្រាប់ផ្ទុកអាយុ
age = 20
# ប្រើ Conditional Terms
if age >= 18:
    print("អ្នកជាមនុស្សធំ")
else:
    print("អ្នកនៅក្មេង")  # បង្ហាញ: អ្នកជាមនុស្សធំ
\`\`\`

**ឧទាហរណ៍ជាមួយ elif:**

\`\`\`python
temperature = 25
if temperature > 30:
    print("ក្តៅ")
elif temperature > 20:
    print("ក្តៅល្មម")  # បង្ហាញ: ក្តៅល្មម
else:
    print("ត្រជាក់")
\`\`\`

---

## 4. ហេតុអ្វីសំខាន់?

- **ការសម្រេចចិត្ត:** អនុញ្ញាតឱ្យកម្មវិធីធ្វើការសម្រេចចិត្ត។
- **ភាពបត់បែន:** គ្រប់គ្រងស្ថានភាពផ្សេងៗបាន។
- **ភាពងាយអាន:** ធ្វើឱ្យកូដមានអត្ថន័យ និងច្បាស់លាស់។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ if-else</h3>
<p>ប្រើ if-else ដើម្បីពិនិត្យលទ្ធផល។</p>
<pre><code class="language-python">
score = 90
if score >= 80:
    print("ជាប់")  # បង្ហាញ: ជាប់
else:
    print("ធ្លាក់")
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ if-elif-else</h3>
<p>ប្រើ if-elif-else ដើម្បីកំណត់ថ្នាក់។</p>
<pre><code class="language-python">
score = 75
if score >= 80:
    print("A")
elif score >= 60:
    print("B")  # បង្ហាញ: B
else:
    print("C")
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Conditional Terms ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ទុកទិន្នន័យ',
        'សម្រេចចិត្តក្នុងកម្មវិធី',
        'ធ្វើការងារម្តងហើយម្តងទៀត',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Conditional Terms ប្រើសម្រាប់សម្រេចចិត្តក្នុងកម្មវិធី។'
    },
    {
      question: 'តើពាក្យ `if` មានន័យអ្វី?',
      options: [
        'បង្ហាញទិន្នន័យ',
        'ពិនិត្យលក្ខខណ្ឌ',
        'ធ្វើការងារម្តងហើយម្តងទៀត',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`if` ប្រើសម្រាប់ពិនិត្យលក្ខខណ្ឌ។'
    },
    {
      question: 'តើពាក្យ `else` ធ្វើអ្វី?',
      options: [
        'ពិនិត្យលក្ខខណ្ឌបន្ថែម',
        'អនុវត្តប្រសិនបើលក្ខខណ្ឌមិនពិត',
        'ធ្វើការងារម្តងហើយម្តងទៀត',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`else` អនុវត្តប្រសិនបើលក្ខខណ្ឌមិនពិត។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nscore = 85\nif score >= 80:\n    print("ជាប់")\nelse:\n    print("ធ្លាក់")\n```',
      options: ['ជាប់', 'ធ្លាក់', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'លក្ខខណ្ឌ score >= 80 ពិត ដូច្នេះបង្ហាញ "ជាប់"។'
    },
    {
      question: 'តើពាក្យ `elif` ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ទុកទិន្នន័យ',
        'ពិនិត្យលក្ខខណ្ឌបន្ថែម',
        'ធ្វើការងារម្តងហើយម្តងទៀត',
        'បង្ហាញទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`elif` ប្រើសម្រាប់ពិនិត្យលក្ខខណ្ឌបន្ថែម។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nscore = 75\nif score >= 80:\n    print("A")\nelif score >= 60:\n    print("B")\nelse:\n    print("C")\n```',
      options: ['A', 'B', 'C', 'Error'],
      correct: 1,
      explanation: 'លក្ខខណ្ឌ score >= 60 ពិត ដូច្នេះបង្ហាញ "B"។'
    },
    {
      question: 'តើ Conditional Terms ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'អនុញ្ញាតឱ្យកម្មវិធីសម្រេចចិត្ត',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Conditional Terms អនុញ្ញាតឱ្យកម្មវិធីសម្រេចចិត្ត។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nage = 16\nif age >= 18:\n    print("មនុស្សធំ")\nelse:\n    print("ក្មេង")\n```',
      options: ['មនុស្សធំ', 'ក្មេង', 'Error', 'គ្មានលទ្ធផល'],
      correct: 1,
      explanation: 'លក្ខខណ្ឌ age >= 18 មិនពិត ដូច្នេះបង្ហាញ "ក្មេង"។'
    },
    {
      question: 'តើកូដខាងក្រោមមានប៉ុន្មានលទ្ធផលដែលអាចកើតមាន?\n```python\ntemperature = 25\nif temperature > 30:\n    print("ក្តៅ")\nelif temperature > 20:\n    print("ក្តៅល្មម")\nelse:\n    print("ត្រជាក់")\n```',
      options: ['1', '2', '3', '4'],
      correct: 2,
      explanation: 'កូដនេះមាន 3 លទ្ធផលអាចកើតមាន: "ក្តៅ", "ក្តៅល្មម", ឬ "ត្រជាក់"។'
    },
    {
      question: 'តើ `if-elif-else` ខុសពី `if-else` ដោយរបៀបណា?',
      options: [
        '`if-elif-else` អនុញ្ញាតឱ្យពិនិត្យលក្ខខណ្ឌច្រើន',
        '`if-elif-else` មិនអនុញ្ញាតឱ្យពិនិត្យលក្ខខណ្ឌ',
        '`if-elif-else` ប្រើសម្រាប់ Loop',
        '`if-elif-else` ប្រើសម្រាប់ផ្ទុកទិន្នន័យ'
      ],
      correct: 0,
      explanation: '`if-elif-else` អនុញ្ញាតឱ្យពិនិត្យលក្ខខណ្ឌច្រើន។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumber = 10\nif number > 0:\n    print("វិជ្ជមាន")\nelif number < 0:\n    print("អវិជ្ជមាន")\nelse:\n    print("សូន្យ")\n```',
      options: ['វិជ្ជមាន', 'អវិជ្ជមាន', 'សូន្យ', 'Error'],
      correct: 0,
      explanation: 'លក្ខខណ្ឌ number > 0 ពិត ដូច្នេះបង្ហាញ "វិជ្ជមាន"។'
    },
    {
      question: 'តើ Conditional Terms ធ្វើឱ្យកូដមានអត្ថន័យដោយរបៀបណា?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកូដងាយអាន និងច្បាស់លាស់',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Conditional Terms ធ្វើឱ្យកូដងាយអាន និងច្បាស់លាស់។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Conditional Terms។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំពិន្ទុ (Integer)។
2. **ការអនុវត្ត:**
   - បង្កើត Variable សម្រាប់ឈ្មោះ និងពិន្ទុ។
   - ប្រើ \`if-elif-else\` ដើម្បីកំណត់ថ្នាក់:
     - >= 80: "A"
     - >= 60: "B"
     - >= 40: "C"
     - < 40: "D"
   - បង្ហាញសារជាមួយឈ្មោះ និងថ្នាក់។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដូចជា: "[ឈ្មោះ]: ថ្នាក់=[A/B/C/D]"។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីពិន្ទុមិនមែនជាលេខគត់។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    # Variable សម្រាប់ផ្ទុកឈ្មោះ
    user_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # Variable សម្រាប់ផ្ទុកពិន្ទុ
    score = int(input("បញ្ចូលពិន្ទុរបស់អ្នក: "))
    
    # ប្រើ if-elif-else ដើម្បីកំណត់ថ្នាក់
    if score >= 80:
        grade = "A"
    elif score >= 60:
        grade = "B"
    elif score >= 40:
        grade = "C"
    else:
        grade = "D"
    
    # បង្ហាញលទ្ធផល
    print(f"{user_name}: ថ្នាក់={grade}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson3_1Content;
