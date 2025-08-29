import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson5_2Content: LessonContent = {
  title: 'វាក្យស័ព្ទទាក់ទងនឹង Object',
  objectives: [
    'យល់ពីអត្ថន័យនៃវាក្យស័ព្ទទាក់ទងនឹង Object (Object Terms)',
    'ស្គាល់ពាក្យសំខាន់ៗដូចជា dictionary, key, value, និង get',
    'រៀនការប្រើ Object (dictionaries) ក្នុង Python',
    'ស្វែងយល់ពីការគ្រប់គ្រងទិន្នន័យជាគូ key-value',
    'អនុវត្តការប្រើ Objectក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# វាក្យស័ព្ទទាក់ទងនឹង Object 📖💻

---

**វាក្យស័ព្ទទាក់ទងនឹង Object (Object Terms)** គឺជាពាក្យបច្ចេកទេសដែលប្រើសម្រាប់គ្រប់គ្រងទិន្នន័យជាគូ key-value នៅក្នុងរចនាសម្ព័ន្ធដែលហៅថា  Object (dictionary ក្នុង Python)។

---

## 1. អ្វីទៅជា Object Terms?

- **Object (Dictionary):** រចនាសម្ព័ន្ធទិន្នន័យដែលផ្ទុកទិន្នន័យជាគូ key-value។
- **សារៈសំខាន់:**
  - អនុញ្ញាតឱ្យផ្ទុកទិន្នន័យដែលភ្ជាប់ជាមួយនឹងសញ្ញាសម្គាល់ (key)។
  - ងាយស្រួលក្នុងការស្វែងរក និងកែប្រែទិន្នន័យ។
  - បង្កើនភាពបត់បែនក្នុងការគ្រប់គ្រងទិន្នន័យស្មុគស្មាញ។

**ពាក្យសំខាន់ៗ:**
- **Dictionary:** បណ្តុំទិន្នន័យដែលផ្ទុកគូ key-value។
- **Key:** សញ្ញាសម្គាល់ដែលប្រើសម្រាប់ចូលប្រើ value។
- **Value:** ទិន្នន័យដែលភ្ជាប់ជាមួយ key។
- **Get:** វិធីសាស្ត្រដើម្បីចូលប្រើ value ដោយប្រើ key ដោយមានតម្លៃលំនាំដើមប្រសិនបើ key មិនមាន។

---

## 2. ការប្រើ Object Terms ក្នុង Python

- **ការបង្កើត Dictionary:**
  \`\`\`python
  student = {"name": "សុខា", "age": 20, "grade": "A"}
  print(student)  # បង្ហាញ: {'name': 'សុខា', 'age': 20, 'grade': 'A'}
  \`\`\`
- **ការប្រើ Key ដើម្បីចូលប្រើ Value:**
  \`\`\`python
  student = {"name": "សុខា", "age": 20}
  print(student["name"])  # បង្ហាញ: សុខា
  \`\`\`
- **ការប្រើ Get:**
  \`\`\`python
  student = {"name": "សុខា", "age": 20}
  print(student.get("grade", "មិនមាន"))  # បង្ហាញ: មិនមាន
  \`\`\`
- **ការកែប្រែ Dictionary:**
  \`\`\`python
  student = {"name": "សុខា", "age": 20}
  student["age"] = 21
  print(student)  # បង្ហាញ: {'name': 'សុខា', 'age': 21}
  \`\`\`

---

## 3. ការអនុវត្តក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ:**

\`\`\`python
# បង្កើត dictionary និងកែប្រែ
person = {"name": "វិច្ឆិកា", "city": "ភ្នំពេញ"}
person["city"] = "សៀមរាប"
print(f"អ្នករស់នៅ: {person['city']}")  # បង្ហាញ: អ្នករស់នៅ: សៀមរាប
\`\`\`

**ឧទាហរណ៍ជាមួយ get:**

\`\`\`python
info = {"name": "សុភ័ក្ត្រ", "age": 22}
status = info.get("status", "នៅលីវ")
print(f"ស្ថានភាព: {status}")  # បង្ហាញ: ស្ថានភាព: នៅលីវ
\`\`\`

---

## 4. ហេតុអ្វីសំខាន់?

- **ការផ្ទុកទិន្នន័យ:** អនុញ្ញាតឱ្យផ្ទុកទិន្នន័យជាគូ key-value។
- **ភាពងាយស្រួល:** ងាយស្រួលក្នុងការស្វែងរកទិន្នន័យដោយប្រើ key។
- **ភាពបត់បែន:** អាចគ្រប់គ្រងទិន្នន័យស្មុគស្មាញ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Dictionary និង Key</h3>
<p>ចូលប្រើ value ដោយប្រើ key។</p>
<pre><code class="language-python">
student = {"name": "សុខា", "age": 20}
print(student["name"])  # បង្ហាញ: សុខា
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Get</h3>
<p>ប្រើ get ដើម្បីចូលប្រើ value ដោយមានតម្លៃលំនាំដើម។</p>
<pre><code class="language-python">
person = {"name": "វិច្ឆិកា", "city": "ភ្នំពេញ"}
print(person.get("age", 25))  # បង្ហាញ: 25
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Object (Dictionary) ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ទុកទិន្នន័យជាលំដាប់',
        'ផ្ទុកទិន្នន័យជាគូ key-value',
        'ធ្វើការងារម្តងហើយម្តងទៀត',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Object (Dictionary) ប្រើសម្រាប់ផ្ទុកទិន្នន័យជាគូ key-value។'
    },
    {
      question: 'តើ Key សំដៅលើអ្វី?',
      options: [
        'ទិន្នន័យនៅក្នុង dictionary',
        'សញ្ញាសម្គាល់ដើម្បីចូលប្រើ value',
        'បណ្តុំនៃ values',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Key ជាសញ្ញាសម្គាល់ដើម្បីចូលប្រើ value។'
    },
    {
      question: 'តើពាក្យ `get` ធ្វើអ្វី?',
      options: [
        'លុប key ចេញពី dictionary',
        'ចូលប្រើ value ដោយប្រើ key ជាមួយតម្លៃលំនាំដើម',
        'បន្ថែម key-value ទៅ dictionary',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`get` ចូលប្រើ value ដោយប្រើ key ជាមួយតម្លៃលំនាំដើម។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nstudent = {"name": "សុខា", "age": 20}\nprint(student["age"])\n```',
      options: ['សុខា', '20', 'Error', 'គ្មានលទ្ធផល'],
      correct: 1,
      explanation: 'Key "age" ផ្តល់តម្លៃ 20។'
    },
    {
      question: 'តើ Value សំដៅលើអ្វី?',
      options: [
        'សញ្ញាសម្គាល់នៅក្នុង dictionary',
        'ទិន្នន័យដែលភ្ជាប់ជាមួយ key',
        'បណ្តុំនៃ keys',
        'រចនាសម្ព័ន្ធទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Value ជាទិន្នន័យដែលភ្ជាប់ជាមួយ key។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ninfo = {"name": "វិច្ឆិកា"}\nprint(info.get("city", "ភ្នំពេញ"))\n```',
      options: ['វិច្ឆិកា', 'ភ្នំពេញ', 'Error', 'គ្មានលទ្ធផល'],
      correct: 1,
      explanation: 'Key "city" មិនមាន ដូច្នេះ get ត្រឡប់តម្លៃលំនាំដើម "ភ្នំពេញ"។'
    },
    {
      question: 'តើ Dictionary ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ផ្ទុកទិន្នន័យជាគូ key-value',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Dictionary ផ្ទុកទិន្នន័យជាគូ key-value។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nperson = {"name": "សុភ័ក្ត្រ", "age": 22}\nperson["age"] = 23\nprint(person["age"])\n```',
      options: ['22', '23', 'Error', 'សុភ័ក្ត្រ'],
      correct: 1,
      explanation: 'Key "age" ត្រូវបានកែប្រែទៅ 23។'
    },
    {
      question: 'តើកូដខាងក្រោមមានប៉ុន្មាន key-value pairs?\n```python\ninfo = {"name": "សុខា", "city": "ភ្នំពេញ", "age": 20}\n```',
      options: ['1', '2', '3', '4'],
      correct: 2,
      explanation: 'Dictionary មាន 3 key-value pairs។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndata = {"x": 1, "y": 2}\nprint(data.get("x"))\n```',
      options: ['1', '2', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Key "x" ផ្តល់តម្លៃ 1។'
    },
    {
      question: 'តើ Dictionary ខុសពី List ដោយរបៀបណា?',
      options: [
        'Dictionary ផ្ទុកទិន្នន័យជាលំដាប់',
        'Dictionary ប្រើ key-value pairs ខណៈ List ប្រើ index',
        'Dictionary មិនអាចផ្លាស់ប្តូរបាន',
        'Dictionary ប្រើសម្រាប់ loop តែប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: 'Dictionary ប្រើ key-value pairs ខណៈ List ប្រើ index។'
    },
    {
      question: 'តើ Dictionary ធ្វើឱ្យកូដមានអត្ថន័យដោយរបៀបណា?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យការគ្រប់គ្រងទិន្នន័យកាន់តែងាយស្រួល',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Dictionary ធ្វើឱ្យការគ្រប់គ្រងទិន្នន័យកាន់តែងាយស្រួល។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Object Terms។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំព័ត៌មានអំពីនិស្សិត (ឈ្មោះ និងពិន្ទុ) ចំនួន 2 នាក់។
2. **ការអនុវត្ត:**
   - បង្កើត dictionary ដើម្បីផ្ទុកឈ្មោះ និងពិន្ទុរបស់និស្សិត។
   - ប្រើ get ដើម្បីចូលប្រើពិន្ទុដោយមានតម្លៃលំនាំដើម 0។
   - គណនាពិន្ទុជាមធ្យមរបស់និស្សិតទាំងពីរ។
   - បង្ហាញសារជាមួយឈ្មោះអ្នកប្រើ និងពិន្ទុជាមធ្យម។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដូចជា: "[ឈ្មោះ]: ពិន្ទុជាមធ្យមរបស់ [ឈ្មោះនិស្សិត1] និង [ឈ្មោះនិស្សិត2] = [ជាមធ្យម]"។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីពិន្ទុមិនមែនជាលេខគត់។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    # Variable សម្រាប់ផ្ទុកឈ្មោះអ្នកប្រើ
    user_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # បង្កើត dictionary សម្រាប់ផ្ទុកព័ត៌មាននិស្សិត
    students = {}
    
    # បញ្ចូលព័ត៌មាននិស្សិតទី 1
    name1 = input("បញ្ចូលឈ្មោះនិស្សិតទី 1: ")
    score1 = int(input(f"បញ្ចូលពិន្ទុរបស់ {name1}: "))
    students[name1] = score1
    
    # បញ្ចូលព័ត៌មាននិស្សិតទី 2
    name2 = input("បញ្ចូលឈ្មោះនិស្សិតទី 2: ")
    score2 = int(input(f"បញ្ចូលពិន្ទុរបស់ {name2}: "))
    students[name2] = score2
    
    # ប្រើ get ដើម្បីចូលប្រើពិន្ទុ
    score1 = students.get(name1, 0)
    score2 = students.get(name2, 0)
    
    # គណនាជាមធ្យម
    average = (score1 + score2) / 2
    
    # បង្ហាញលទ្ធផល
    print(f"{user_name}: ពិន្ទុជាមធ្យមរបស់ {name1} និង {name2} = {average}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson5_2Content;