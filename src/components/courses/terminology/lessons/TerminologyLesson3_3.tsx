import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson3_3Content: LessonContent = {
  title: 'វាក្យស័ព្ទទាក់ទងនឹងការបែងចែក',
  objectives: [
    'យល់ពីអត្ថន័យនៃវាក្យស័ព្ទទាក់ទងនឹងការបែងចែក (Branching Terms)',
    'ស្គាល់ពាក្យសំខាន់ៗដូចជា if, else, elif, និង nested conditions',
    'រៀនការប្រើការបែងចែកក្នុង Python',
    'ស្វែងយល់ពីការប្រើការបែងចែកដើម្បីគ្រប់គ្រងលំហូរនៃកម្មវិធី',
    'អនុវត្តការប្រើវាក្យស័ព្ទបែងចែកក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# វាក្យស័ព្ទទាក់ទងនឹងការបែងចែក 🌳💻

---

**វាក្យស័ព្ទទាក់ទងនឹងការបែងចែក (Branching Terms)** គឺជាពាក្យបច្ចេកទេសដែលប្រើសម្រាប់ជ្រើសរើសផ្លូវផ្សេងៗគ្នានៅក្នុងកម្មវិធីដោយផ្អែកលើលក្ខខណ្ឌ។

---

## 1. អ្វីទៅជា Branching Terms?

- **Branching Terms:** ពាក្យដែលប្រើសម្រាប់កំណត់ទិសដៅនៃកម្មវិធីដោយផ្អែកលើលក្ខខណ្ឌ។
- **សារៈសំខាន់:**
  - អនុញ្ញាតឱ្យកម្មវិធីជ្រើសរើសផ្លូវផ្សេងៗគ្នា។
  - គ្រប់គ្រងស្ថានភាពស្មុគស្មាញ។
  - ធ្វើឱ្យកម្មវិធីមានភាពបត់បែន។

**ពាក្យសំខាន់ៗ:**
- **if:** ពិនិត្យលក្ខខណ្ឌថាតើពិតឬអត់។
- **else:** អនុវត្តប្រសិនបើលក្ខខណ្ឌមិនពិត។
- **elif:** ពិនិត្យលក្ខខណ្ឌបន្ថែមប្រសិនបើ \`if\` មិនពិត។
- **nested conditions:** លក្ខខណ្ឌដែលស្ថិតនៅក្នុងលក្ខខណ្ឌផ្សេងទៀត។

---

## 2. ការប្រើ Branching Terms ក្នុង Python

- **if Statement:**
  \`\`\`python
  temperature = 30
  if temperature > 25:
      print("ក្តៅ")  # បង្ហាញ: ក្តៅ
  \`\`\`
- **if-else Statement:**
  \`\`\`python
  temperature = 20
  if temperature > 25:
      print("ក្តៅ")
  else:
      print("ត្រជាក់")  # បង្ហាញ: ត្រជាក់
  \`\`\`
- **if-elif-else Statement:**
  \`\`\`python
  temperature = 22
  if temperature > 30:
      print("ក្តៅខ្លាំង")
  elif temperature > 20:
      print("ក្តៅល្មម")  # បង្ហាញ: ក្តៅល្មម
  else:
      print("ត្រជាក់")
  \`\`\`
- **Nested Conditions:**
  \`\`\`python
  age = 25
  has_id = True
  if age >= 18:
      if has_id:
          print("អនុញ្ញាតឱ្យចូល")  # បង្ហាញ: អនុញ្ញាតឱ្យចូល
      else:
          print("ត្រូវការអត្តសញ្ញាណប័ណ្ណ")
  else:
      print("អ្នកនៅក្មេងពេក")
  \`\`\`

---

## 3. ការអនុវត្តក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ:**

\`\`\`python
# Variable សម្រាប់ផ្ទុកពិន្ទុ
score = 85
# ប្រើ Branching Terms
if score >= 90:
    print("អស្ចារ្យ")
else:
    if score >= 70:
        print("ល្អ")  # បង្ហាញ: ល្អ
    else:
        print("ត្រូវការកែលម្អ")
\`\`\`

**ឧទាហរណ៍ជាមួយ elif:**

\`\`\`python
weather = "ភ្លៀង"
temperature = 20
if weather == "ភ្លៀង":
    if temperature < 25:
        print("ភ្លៀង និងត្រជាក់")  # បង្ហាញ: ភ្លៀង និងត្រជាក់
    else:
        print("ភ្លៀង និងក្តៅ")
else:
    print("អាកាសធាតុធម្មតា")
\`\`\`

---

## 4. ហេតុអ្វីសំខាន់?

- **ការសម្រេចចិត្ត:** អនុញ្ញាតឱ្យកម្មវិធីជ្រើសរើសផ្លូវត្រឹមត្រូវ។
- **ភាពស្មុគស្មាញ:** គ្រប់គ្រងស្ថានភាពច្រើនកម្រិត។
- **ភាពងាយអាន:** ធ្វើឱ្យកូដមានអត្ថន័យ និងច្បាស់លាស់។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ if-else</h3>
<p>ប្រើ if-else ដើម្បីពិនិត្យអាយុ។</p>
<pre><code class="language-python">
age = 16
if age >= 18:
    print("មនុស្សធំ")  
else:
    print("ក្មេង")  # បង្ហាញ: ក្មេង
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ nested conditions</h3>
<p>ប្រើ nested conditions ដើម្បីពិនិត្យអាយុ និងអត្តសញ្ញាណប័ណ្ណ។</p>
<pre><code class="language-python">
age = 20
has_id = False
if age >= 18:
    if has_id:
        print("អនុញ្ញាតឱ្យចូល")
    else:
        print("ត្រូវការអត្តសញ្ញាណប័ណ្ណ")  # បង្ហាញ: ត្រូវការអត្តសញ្ញាណប័ណ្ណ
else:
    print("អ្នកនៅក្មេងពេក")
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Branching Terms ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ទុកទិន្នន័យ',
        'ជ្រើសរើសផ្លូវផ្សេងៗក្នុងកម្មវិធី',
        'ធ្វើការងារម្តងហើយម្តងទៀត',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Branching Terms ប្រើសម្រាប់ជ្រើសរើសផ្លូវផ្សេងៗក្នុងកម្មវិធី។'
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
      question: 'តើពាក្យ `elif` ធ្វើអ្វី?',
      options: [
        'បញ្ឈប់កម្មវិធី',
        'ពិនិត្យលក្ខខណ្ឌបន្ថែម',
        'ធ្វើការងារម្តងហើយម្តងទៀត',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`elif` ពិនិត្យលក្ខខណ្ឌបន្ថែមប្រសិនបើ `if` មិនពិត�।'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ntemperature = 15\nif temperature > 25:\n    print("ក្តៅ")\nelse:\n    print("ត្រជាក់")\n```',
      options: ['ក្តៅ', 'ត្រជាក់', 'Error', 'គ្មានលទ្ធផល'],
      correct: 1,
      explanation: 'លក្ខខណ្ឌ temperature > 25 មិនពិត ដូច្នេះបង្ហាញ "ត្រជាក់"។'
    },
    {
      question: 'តើពាក្យ `nested conditions` សំដៅលើអ្វី?',
      options: [
        'លក្ខខណ្ឌដែលស្ថិតនៅក្នុងលក្ខខណ្ឌផ្សេងទៀត',
        'លក្ខខណ្ឌតែមួយ',
        'រង្វិលជុំ',
        'ការផ្ទុកទិន្នន័យ'
      ],
      correct: 0,
      explanation: '`nested conditions` សំដៅលើលក្ខខណ្ឌដែលស្ថិតនៅក្នុងលក្ខខណ្ឌផ្សេងទៀត។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nscore = 95\nif score >= 90:\n    print("អស្ចារ្យ")\nelse:\n    if score >= 70:\n        print("ល្អ")\n    else:\n        print("ត្រូវការកែលម្អ")\n```',
      options: ['អស្ចារ្យ', 'ល្អ', 'ត្រូវការកែលម្អ', 'Error'],
      correct: 0,
      explanation: 'លក្ខខណ្ឌ score >= 90 ពិត ដូច្នេះបង្ហាញ "អស្ចារ្យ"។'
    },
    {
      question: 'តើ Branching Terms ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'អនុញ្ញាតឱ្យកម្មវិធីជ្រើសរើសផ្លូវត្រឹមត្រូវ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Branching Terms អនុញ្ញាតឱ្យកម្មវិធីជ្រើសរើសផ្លូវត្រឹមត្រូវ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nage = 20\nhas_id = False\nif age >= 18:\n    if has_id:\n        print("អនុញ្ញាតឱ្យចូល")\n    else:\n        print("ត្រូវការអត្តសញ្ញាណប័ណ្ណ")\nelse:\n    print("អ្នកនៅក្មេងពេក")\n```',
      options: ['អនុញ្ញាតឱ្យចូល', 'ត្រូវការអត្តសញ្ញាណប័ណ្ណ', 'អ្នកនៅក្មេងពេក', 'Error'],
      correct: 1,
      explanation: 'លក្ខខណ្ឌ age >= 18 ពិត ប៉ុន្តែ has_id មិនពិត ដូច្នេះបង្ហាញ "ត្រូវការអត្តសញ្ញាណប័ណ្ណ"។'
    },
    {
      question: 'តើកូដខាងក្រោមមានប៉ុន្មានលទ្ធផលដែលអាចកើតមាន?\n```python\ntemperature = 22\nif temperature > 30:\n    print("ក្តៅខ្លាំង")\nelif temperature > 20:\n    print("ក្តៅល្មម")\nelse:\n    print("ត្រជាក់")\n```',
      options: ['1', '2', '3', '4'],
      correct: 2,
      explanation: 'កូដនេះមាន 3 លទ្ធផលអាចកើតមាន: "ក្តៅខ្លាំង", "ក្តៅល្មម", ឬ "ត្រជាក់"។'
    },
    {
      question: 'តើ `if-elif-else` ខុសពី `nested conditions` ដោយរបៀបណា?',
      options: [
        '`if-elif-else` អនុញ្ញាតឱ្យពិនិត្យលក្ខខណ្ឌច្រើនជាលំដាប់, `nested conditions` ពិនិត្យលក្ខខណ្ឌក្នុងលក្ខខណ្ឌ',
        '`if-elif-else` មិនអនុញ្ញាតឱ្យពិនិត្យលក្ខខណ្ឌ',
        '`nested conditions` ប្រើសម្រាប់ Loop',
        '`if-elif-else` ប្រើសម្រាប់ផ្ទុកទិន្នន័យ'
      ],
      correct: 0,
      explanation: '`if-elif-else` ពិនិត្យលក្ខខណ្ឌជាលំដាប់, ចំណែក `nested conditions` ពិនិត្យលក្ខខណ្ឌក្នុងលក្ខខណ្ឌ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumber = -5\nif number > 0:\n    print("វិជ្ជមាន")\nelif number < 0:\n    print("អវិជ្ជមាន")\nelse:\n    print("សូន្យ")\n```',
      options: ['វិជ្ជមាន', 'អវិជ្ជមាន', 'សូន្យ', 'Error'],
      correct: 1,
      explanation: 'លក្ខខណ្ឌ number < 0 ពិត ដូច្នេះបង្ហាញ "អវិជ្ជមាន"។'
    },
    {
      question: 'តើ Branching Terms ធ្វើឱ្យកូដមានអត្ថន័យដោយរបៀបណា?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកូដងាយអាន និងច្បាស់លាស់',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Branching Terms ធ្វើឱ្យកូដងាយអាន និងច្បាស់លាស់។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Branching Terms។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំអាយុ (Integer)។
   - ស្នើសុំថាតើមានអត្តសញ្ញាណប័ណ្ណឬអត់ (Boolean: True/False)។
2. **ការអនុវត្ត:**
   - បង្កើត Variable សម្រាប់ឈ្មោះ អាយុ និងអត្តសញ្ញាណប័ណ្ណ។
   - ប្រើ \`if-elif-else\` និង \`nested conditions\` ដើម្បីកំណត់ស្ថានភាព:
     - ប្រសិនបើអាយុ >= 18 និងមានអត្តសញ្ញាណប័ណ្ណ: "អនុញ្ញាតឱ្យចូល"។
     - ប្រសិនបើអាយុ >= 18 ប៉ុន្តែគ្មានអត្តសញ្ញាណប័ណ្ណ: "ត្រូវការអត្តសញ្ញាណប័ណ្ណ"។
     - បើអាយុ < 18: "អ្នកនៅក្មេងពេក"។
   - បង្ហាញសារជាមួយឈ្មោះ និងស្ថានភាព។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដូចជា: "[ឈ្មោះ]: [ស្ថានភាព]"។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីអាយុមិនមែនជាលេខគត់។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    # Variable សម្រាប់ផ្ទុកឈ្មោះ
    user_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # Variable សម្រាប់ផ្ទុកអាយុ
    age = int(input("បញ្ចូលអាយុរបស់អ្នក: "))
    
    # Variable សម្រាប់ផ្ទុកអត្តសញ្ញាណប័ណ្ណ
    has_id_input = input("តើអ្នកមានអត្តសញ្ញាណប័ណ្ណឬទេ? (បញ្ចូល True/False): ")
    has_id = has_id_input.lower() == 'true'
    
    # ប្រើ nested conditions ដើម្បីកំណត់ស្ថានភាព
    if age >= 18:
        if has_id:
            status = "អនុញ្ញាតឱ្យចូល"
        else:
            status = "ត្រូវការអត្តសញ្ញាណប័ណ្ណ"
    else:
        status = "អ្នកនៅក្មេងពេក"
    
    # បង្ហាញលទ្ធផល
    print(f"{user_name}: {status}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson3_3Content;