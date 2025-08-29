import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson5_3Content: LessonContent = {
  title: 'វាក្យស័ព្ទទាក់ទងនឹងបណ្តុំ',
  objectives: [
    'យល់ពីអត្ថន័យនៃវាក្យស័ព្ទទាក់ទងនឹងបណ្តុំ (Collection Terms)',
    'ស្គាល់ពាក្យសំខាន់ៗដូចជា set, tuple, iterable, និង comprehension',
    'រៀនការប្រើបណ្តុំផ្សេងៗ (set, tuple) ក្នុង Python',
    'ស្វែងយល់ពីការប្រើ comprehension ដើម្បីបង្កើតបណ្តុំ',
    'អនុវត្តការប្រើបណ្តុំក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# វាក្យស័ព្ទទាក់ទងនឹងបណ្តុំ 📦💻

---

**វាក្យស័ព្ទទាក់ទងនឹងបណ្តុំ (Collection Terms)** គឺជាពាក្យបច្ចេកទេសដែលប្រើសម្រាប់គ្រប់គ្រងរចនាសម្ព័ន្ធទិន្នន័យផ្សេងៗដូចជា set និង tuple។

---

## 1. អ្វីទៅជា Collection Terms?

- **Collection:** រចនាសម្ព័ន្ធទិន្នន័យដែលផ្ទុកធាតុច្រើន ដូចជា list, set, tuple។
- **សារៈសំខាន់:**
  - អនុញ្ញាតឱ្យគ្រប់គ្រងទិន្នន័យជាបណ្តុំប្រកបដោយប្រសិទ្ធភាព។
  - ផ្តល់ជម្រើសផ្សេងៗសម្រាប់ការផ្ទុកទិន្នន័យ
  - គាំទ្រការធ្វើប្រតិបត្តិការលើទិន្នន័យជាច្រើន

**ពាក្យសំខាន់ៗ:**
- **Set:** បណ្តុំទិន្នន័យដែលមានធាតុតែមួយគត់ និងគ្មានលំដាប់។
- **Tuple:** បណ្តុំទិន្នន័យដែលមានលំដាប់ និងមិនអាចផ្លាស់ប្តូរបាន។
- **Iterable:** វត្ថុដែលអាចធ្វើការវិលជុំ (loop) លើធាតុរបស់វា។
- **Comprehension:** វិធីសាស្ត្រសង្ខេបសម្រាប់បង្កើត list, set, ឬ dictionary។

---

## 2. ការប្រើ Collection Terms ក្នុង Python

- **ការបង្កើត Set:**
  \`\`\`python
  numbers = {1, 2, 2, 3}
  print(numbers)  # បង្ហាញ: {1, 2, 3}
  \`\`\`
- **ការបង្កើត Tuple:**
  \`\`\`python
  coordinates = (10, 20)
  print(coordinates[0])  # បង្ហាញ: 10
  \`\`\`
- **ការប្រើ Iterable:**
  \`\`\`python
  fruits = ["ផ្លែប៉ោម", "ចេក", "ក្រូច"]
  for fruit in fruits:
      print(fruit)
  # បង្ហាញ:
  # ផ្លែប៉ោម
  # ចេក
  # ក្រូច
  \`\`\`
- **ការប្រើ List Comprehension:**
  \`\`\`python
  squares = [x**2 for x in range(5)]
  print(squares)  # បង្ហាញ: [0, 1, 4, 9, 16]
  \`\`\`

---

## 3. ការអនុវត្តក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ:**

\`\`\`python
# ប្រើ set ដើម្បីលុបធាតុស្ទួន
numbers = [1, 2, 2, 3, 3, 4]
unique_numbers = set(numbers)
print(f"លេខតែមួយគត់: {unique_numbers}")  # បង្ហាញ: លេខតែមួយគត់: {1, 2, 3, 4}
\`\`\`

**ឧទាហរណ៍ជាមួយ comprehension:**

\`\`\`python
evens = [x for x in range(10) if x % 2 == 0]
print(f"លេខគូ: {evens}")  # បង្ហាញ: លេខគូ: [0, 2, 4, 6, 8]
\`\`\`

---

## 4. ហេតុអ្វីសំខាន់?

- **ភាពបត់បែន:** ផ្តល់ជម្រើសផ្សេងៗសម្រាប់ការផ្ទុកទិន្នន័យ។
- **ប្រសិទ្ធភាព:** អនុញ្ញាតឱ្យគ្រប់គ្រងទិន្នន័យជាមួយប្រតិបត្តិការលឿន។
- **ភាពងាយអាន:** Comprehension ធ្វើឱ្យកូដសង្ខេប និងច្បាស់លាស់។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Set</h3>
<p>លុបធាតុស្ទួនដោយប្រើ set។</p>
<pre><code class="language-python">
items = [1, 1, 2, 3, 3]
unique_items = set(items)
print(unique_items)  # បង្ហាញ: {1, 2, 3}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ List Comprehension</h3>
<p>បង្កើត list នៃលេខការ៉េ។</p>
<pre><code class="language-python">
squares = [x**2 for x in range(5)]
print(squares)  # បង្ហាញ: [0, 1, 4, 9, 16]
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Collection សំដៅលើអ្វី?',
      options: [
        'អថេរតែមួយ',
        'រចនាសម្ព័ន្ធទិន្នន័យដែលផ្ទុកធាតុច្រើន',
        'ការហៅអនុគមន៍',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Collection ជារចនាសម្ព័ន្ធទិន្នន័យដែលផ្ទុកធាតុច្រើន។'
    },
    {
      question: 'តើ Set ខុសពី List ដោយរបៀបណា?',
      options: [
        'Set មានលំដាប់',
        'Set មានធាតុតែមួយគត់ និងគ្មានលំដាប់',
        'Set មិនអាចផ្លាស់ប្តូរបាន',
        'Set ប្រើសម្រាប់ conditions'
      ],
      correct: 1,
      explanation: 'Set មានធាតុតែមួយគត់ និងគ្មានលំដាប់។'
    },
    {
      question: 'តើ Tuple ធ្វើអ្វី?',
      options: [
        'ផ្ទុកធាតុដែលអាចផ្លាស់ប្តូរបាន',
        'ផ្ទុកធាតុដែលមានលំដាប់ និងមិនអាចផ្លាស់ប្តូរបាន',
        'លុបធាតុស្ទួន',
        'ផ្ទុកទិន្នន័យជាគូ key-value'
      ],
      correct: 1,
      explanation: 'Tuple ផ្ទុកធាតុដែលមានលំដាប់ និងមិនអាចផ្លាស់ប្តូរបាន�।'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumbers = {1, 2, 2, 3}\nprint(numbers)\n```',
      options: ['{1, 2, 2, 3}', '{1, 2, 3}', 'Error', '[1, 2, 3]'],
      correct: 1,
      explanation: 'Set លុបធាតុស្ទួន ដូច្នេះបង្ហាញ {1, 2, 3}។'
    },
    {
      question: 'តើ Iterable សំដៅលើអ្វី?',
      options: [
        'វត្ថុដែលអាចធ្វើការវិលជុំលើធាតុរបស់វា',
        'វត្ថុដែលមិនអាចផ្លាស់ប្តូរបាន',
        'វត្ថុដែលមាន key-value pairs',
        'វត្ថុដែលប្រើសម្រាប់ conditions'
      ],
      correct: 0,
      explanation: 'Iterable ជាវត្ថុដែលអាចធ្វើការវិលជុំលើធាតុរបស់វា។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nevens = [x for x in range(6) if x % 2 == 0]\nprint(evens)\n```',
      options: ['[0, 2, 4]', '[1, 3, 5]', 'Error', '[0, 1, 2, 3, 4, 5]'],
      correct: 0,
      explanation: 'List comprehension បង្កើត list នៃលេខគូ ដូច្នេះបង្ហាញ [0, 2, 4]។'
    },
    {
      question: 'តើ Collection ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'គ្រប់គ្រងទិន្នន័យជាបណ្តុំប្រកបដោយប្រសិទ្ធភាព',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Collection គ្រប់គ្រងទិន្នន័យជាបណ្តុំប្រកបដោយប្រសិទ្ធភាព។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nt = (10, 20, 30)\nprint(t[1])\n```',
      options: ['10', '20', '30', 'Error'],
      correct: 1,
      explanation: 'Index 1 នៅក្នុង tuple ផ្តល់តម្លៃ 20។'
    },
    {
      question: 'តើកូដខាងក្រោមមានប៉ុន្មានធាតុ?\n```python\ns = {1, 2, 2, 3, 3}\n```',
      options: ['1', '2', '3', '5'],
      correct: 2,
      explanation: 'Set លុបធាតុស្ទួន ដូច្នេះមាន 3 ធាតុ។'
    },
    {
      question: 'តើ Comprehension ធ្វើអ្វី?',
      options: [
        'លុបធាតុចេញពី collection',
        'បង្កើត collection ដោយវិធីសាស្ត្រសង្ខេប',
        'កែប្រែ collection',
        'ផ្ទុកទិន្នន័យជាគូ key-value'
      ],
      correct: 1,
      explanation: 'Comprehension បង្កើត collection ដោយវិធីសាស្ត្រសង្ខេប។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nt = (1, 2, 3)\nfor x in t:\n    print(x, end=" ")\n```',
      options: ['1 2 3', '1, 2, 3', 'Error', '[1, 2, 3]'],
      correct: 0,
      explanation: 'Tuple ជា iterable ដូច្នេះបង្ហាញ "1 2 3"។'
    },
    {
      question: 'តើ Collection ធ្វើឱ្យកូដមានអត្ថន័យដោយរបៀបណា?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យការគ្រប់គ្រងទិន្នន័យកាន់តែងាយស្រួល',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Collection ធ្វើឱ្យការគ្រប់គ្រងទិន្នន័យកាន់តែងាយស្រួល។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Collection Terms។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំចំនួនលេខដែលចង់បញ្ចូល (Integer)។
2. **ការអនុវត្ត:**
   - បង្កើត list ដើម្បីផ្ទុកលេខដែលបញ្ចូល។
   - បម្លែង list ទៅជា set ដើម្បីលុបលេខស្ទួន។
   - ប្រើ list comprehension ដើម្បីបង្កើត list នៃលេខការ៉េ។
   - បង្ហាញសារជាមួយឈ្មោះ លេខតែមួយគត់ និងលេខការ៉េ។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដូចជា: "[ឈ្មោះ]: លេខតែមួយគត់ = [set], លេខការ៉េ = [squares]"។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីចំនួន ឬលេខមិនមែនជាលេខគត់។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរ�សេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    # Variable សម្រាប់ផ្ទុកឈ្មោះ
    user_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # Variable សម្រាប់ផ្ទុកចំនួនលេខ
    num_count = int(input("បញ្ចូលចំនួនលេខដែលអ្នកចង់បញ្ចូល: "))
    if num_count <= 0:
        raise ValueError("ចំនួនលេខត្រូវតែធំជាង 0!")
    
    # បង្កើត list សម្រាប់ផ្ទុកលេខ
    numbers = []
    for i in range(num_count):
        num = int(input(f"បញ្ចូលលេខទី {i+1}: "))
        numbers.append(num)
    
    # បម្លែងទៅជា set ដើម្បីលុបលេខស្ទួន
    unique_numbers = set(numbers)
    
    # ប្រើ list comprehension ដើម្បីបង្កើតលេខការ៉េ
    squares = [x**2 for x in numbers]
    
    # បង្ហាញលទ្ធផល
    print(f"{user_name}: លេខតែមួយគត់ = {unique_numbers}, លេខការ៉េ = {squares}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson5_3Content;