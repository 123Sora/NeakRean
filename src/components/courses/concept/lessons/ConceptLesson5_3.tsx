import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson5_3Content: LessonContent = {
  title: 'Iterating Data Structures',
  objectives: [
    'យល់ពីគោលគំនិតនៃការឆ្លងកាត់ (Iterating) Data Structures',
    'ស្វែងយល់ពីរបៀបឆ្លងកាត់ Lists និង Dictionaries ក្នុង Python',
    'រៀនការប្រើ Loops (For, While) សម្រាប់ Iterating',
    'ស្គាល់ List Comprehensions និង Dictionary Comprehensions',
    'អនុវត្តការឆ្លងកាត់ Data Structures ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# Iterating Data Structures 🔄💻

---

**Iterating Data Structures** គឺជាដំណើរការនៃការឆ្លងកាត់ធាតុនៃ Data Structures (ដូចជា Lists និង Dictionaries) ដើម្បីចូលប្រើ ឬគ្រប់គ្រងទិន្នន័យ។

---

## 1. គោលគំនិតនៃ Iteration

Iteration គឺជាការចូលប្រើធាតុនៃ Data Structure ម្តងមួយៗ ដោយប្រើ Loops ឬ Methods ផ្សេងៗ។
- **Lists:** ឆ្លងកាត់ធាតុតាមលំដាប់។
- **Dictionaries:** ឆ្លងកាត់ Keys, Values, ឬ Key-Value Pairs។

**ឧទាហរណ៍កូដ Python:**

\`\`\`python
fruits = ["ផ្លែប៉ោម", "ផ្លែចេក", "ផ្លែស្ត្របឺរី"]
for fruit in fruits:
    print(fruit)  # បង្ហាញ: ផ្លែប៉ោម, ផ្លែចេក, ផ្លែស្ត្របឺរី
\`\`\`

---

## 2. ការឆ្លងកាត់ Lists

- **For Loop:**
  \`\`\`python
  numbers = [1, 2, 3, 4]
  for num in numbers:
      print(num)  # បង្ហាញ: 1, 2, 3, 4
  \`\`\`
- **While Loop:**
  \`\`\`python
  i = 0
  while i < len(numbers):
      print(numbers[i])
      i += 1  # បង្ហាញ: 1, 2, 3, 4
  \`\`\`
- **List Comprehension:**
  \`\`\`python
  squares = [num * num for num in numbers]
  print(squares)  # បង្ហាញ: [1, 4, 9, 16]
  \`\`\`

---

## 3. ការឆ្លងកាត់ Dictionaries

- **ឆ្លងកាត់ Keys:**
  \`\`\`python
  person = {"name": "សុខា", "age": 25, "city": "ភ្នំពេញ"}
  for key in person:
      print(key)  # បង្ហាញ: name, age, city
  \`\`\`
- **ឆ្លងកាត់ Values:**
  \`\`\`python
  for value in person.values():
      print(value)  # បង្ហាញ: សុខា, 25, ភ្នំពេញ
  \`\`\`
- **ឆ្លងកាត់ Key-Value Pairs:**
  \`\`\`python
  for key, value in person.items():
      print(f"{key}: {value}")  # បង្ហាញ: name: សុខា, age: 25, city: ភ្នំពេញ
  \`\`\`

---

## 4. List Comprehensions និង Dictionary Comprehensions

- **List Comprehension:** វិធីសង្ខេបសម្រាប់បង្កើត List ថ្មី។
  \`\`\`python
  numbers = [1, 2, 3, 4]
  even_numbers = [num for num in numbers if num % 2 == 0]
  print(even_numbers)  # បង្ហាញ: [2, 4]
  \`\`\`
- **Dictionary Comprehension:**
  \`\`\`python
  squares_dict = {num: num * num for num in numbers}
  print(squares_dict)  # បង្ហាញ: {1: 1, 2: 4, 3: 9, 4: 16}
  \`\`\`

---

## 5. ការប្រើ Iteration ក្នុងកម្មវិធី

Iteration ត្រូវបានប្រើសម្រាប់៖
- **ការចូលប្រើទិន្នន័យ:** ឧទាហរណ៍ បង្ហាញរាល់ធាតុក្នុង List។
- **ការគណនា:** ឧទាហរណ៍ គណនាផលបូកនៃ List។
- **ការច្រោះទិន្នន័យ:** ឧទាហរណ៍ ជ្រើសរើសធាតុដែលបំពេញលក្ខខណ្ឌ។

**ឧទាហរណ៍កូដ:**

\`\`\`python
scores = [85, 90, 78, 92]
total = 0
for score in scores:
    total += score
print(f"ផលបូក: {total}")  # បង្ហាញ: ផលបូក: 345
\`\`\`

---

## 6. ហេតុអ្វីសំខាន់ក្នុងការឆ្លងកាត់ Data Structures?

- **ប្រសិទ្ធភាព:** អនុញ្ញាតឱ្យចូលប្រើ និងគ្រប់គ្រងទិន្នន័យច្រើន។
- **ភាពបត់បែន:** អនុញ្ញាតឱ្យធ្វើការងារដូចជា ការច្រោះ ឬគណនា។
- **ភាពច្បាស់លាស់:** List/Dictionary Comprehensions ធ្វើឱ្យកូដសង្ខេប និងអានបានស្រួល។
- **ការប្រើឡើងវិញ:** Loops និង Comprehensions អាចប្រើបានជាមួយ Data Structures ផ្សេងៗ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការឆ្លងកាត់ List</h3>
<p>បង្កើត List និងឆ្លងកាត់ដោយប្រើ For Loop។</p>
<pre><code class="language-python">
fruits = ["ផ្លែប៉ោម", "ផ្លែចេក", "ផ្លែក្រូច"]
for fruit in fruits:
    print(fruit)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការឆ្លងកាត់ Dictionary</h3>
<p>បង្កើត Dictionary និងឆ្លងកាត់ Key-Value Pairs។</p>
<pre><code class="language-python">
student = {"name": "លីនា", "age": 20, "grade": "A"}
for key, value in student.items():
    print(f"{key}: {value}")
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Iteration គឺជាអ្វី?',
      options: [
        'ការផ្ទុកទិន្នន័យ',
        'ការឆ្លងកាត់ធាតុនៃ Data Structure',
        'ការបង្កើត Function',
        'ការសម្រេចចិត្ត'
      ],
      correct: 1,
      explanation: 'Iteration គឺជាការឆ្លងកាត់ធាតុនៃ Data Structure។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumbers = [1, 2, 3]\nfor num in numbers:\n    print(num)\n```',
      options: ['1, 2, 3', '1, 2', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'For Loop ឆ្លងកាត់ List និងបង្ហាញ ១, ២, ៣។'
    },
    {
      question: 'តើ Method `items()` ក្នុង Dictionary ធ្វើអ្វី?',
      options: [
        'បង្ហាញ Keys',
        'បង្ហាញ Values',
        'បង្ហាញ Key-Value Pairs',
        'លុប Key-Value Pairs'
      ],
      correct: 2,
      explanation: '`items()` បង្ហាញ Key-Value Pairs ទាំងអស់។'
    },
    {
      question: 'តើ List Comprehension គឺជាអ្វី?',
      options: [
        'វិធីសង្ខេបសម្រាប់បង្កើត List',
        'វិធីសម្រាប់លុប List',
        'វិធីសម្រាប់តម្រៀប List',
        'វិធីសម្រាប់បន្ថែម List'
      ],
      correct: 0,
      explanation: 'List Comprehension ជាវិធីសង្ខេបសម្រាប់បង្កើត List។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumbers = [1, 2, 3, 4]\nevens = [num for num in numbers if num % 2 == 0]\nprint(evens)\n```',
      options: ['[1, 3]', '[2, 4]', '[1, 2, 3, 4]', 'Error'],
      correct: 1,
      explanation: 'List Comprehension ជ្រើសរើសលេខគូ ដូច្នេះបង្ហាញ [2, 4]។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nperson = {"name": "សុខា", "age": 25}\nfor value in person.values():\n    print(value)\n```',
      options: ['name, age', 'សុខា, 25', 'name: សុខា, age: 25', 'Error'],
      correct: 1,
      explanation: '`values()` បង្ហាញ Values ទាំងអស់: សុខា, 25។'
    },
    {
      question: 'តើ Dictionary Comprehension ធ្វើអ្វី?',
      options: [
        'បង្កើត Dictionary ថ្មី',
        'លុប Dictionary',
        'តម្រៀប Dictionary',
        'បន្ថែម Key-Value Pairs'
      ],
      correct: 0,
      explanation: 'Dictionary Comprehension បង្កើត Dictionary ថ្មី។'
    },
    {
      question: 'តើ While Loop អាចប្រើសម្រាប់ Iterating List បានទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែនៅក្នុង Function', 'បានតែជាមួយ Dictionary'],
      correct: 0,
      explanation: 'While Loop អាចប្រើសម្រាប់ Iterating List ដោយប្រើ Index។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumbers = [1, 2, 3]\ni = 0\nwhile i < len(numbers):\n    print(numbers[i])\n    i += 1\n```',
      options: ['1, 2, 3', '1, 2', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'While Loop ឆ្លងកាត់ List ដោយប្រើ Index និងបង្ហាញ ១, ២, ៣។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumbers = [1, 2, 3]\nsquares = {num: num * num for num in numbers}\nprint(squares)\n```',
      options: ['{1: 1, 2: 4, 3: 9}', '[1, 4, 9]', 'Error', '{1, 4, 9}'],
      correct: 0,
      explanation: 'Dictionary Comprehension បង្កើត Dictionary: {1: 1, 2: 4, 3: 9}។'
    },
    {
      question: 'តើ Method `keys()` ក្នុង Dictionary ធ្វើអ្វី?',
      options: [
        'បង្ហាញ Keys ទាំងអស់',
        'បង្ហាញ Values ទាំងអស់',
        'បង្ហាញ Key-Value Pairs',
        'លុប Keys'
      ],
      correct: 0,
      explanation: '`keys()` បង្ហាញ Keys ទាំងអស់ក្នុង Dictionary។'
    },
    {
      question: 'តើ Iteration ជួយធ្វើអ្វី?',
      options: [
        'ផ្ទុកទិន្នន័យ',
        'ចូលប្រើ និងគ្រប់គ្រងទិន្នន័យ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Iteration ជួយចូលប្រើ និងគ្រប់គ្រងទិន្នន័យក្នុង Data Structures។'
    }
  ],
  lab: {
    task: `
บង្កើតកម្មវិធី Python ដែលប្រើ Iteration ដើម្បីគ្រប់គ្រង Lists និង Dictionaries។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំពិន្ទុចំនួន ៣ ដើម្បីបន្ថែមទៅក្នុង List។
2. **ការគ្រប់គ្រង Data Structures:**
   - បង្កើត List ទទេ និងបន្ថែមពិន្ទុ។
   - បង្កើត Dictionary ដែលផ្ទុកព័ត៌មានអ្នកប្រើ (ឈ្មោះ និងផលបូកនៃពិន្ទុ)។
   - ប្រើ For Loop ដើម្បីគណនាផលបូកនៃពិន្ទុក្នុង List។
   - ប្រើ List Comprehension ដើម្បីបង្កើត List ថ្មីដែលមានពិន្ទុលើសពី ៨៥។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារស្វាគមន៍ជាមួយឈ្មោះអ្នកប្រើ។
   - បង្ហាញ Dictionary និង List ពិន្ទុលើស ៨៥។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលពិន្ទុមិនមែនជាលេខ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    scores = []
    for i in range(3):
        score = int(input(f"បញ្ចូលពិន្ទុទី {i+1}: "))
        scores.append(score)
    total = 0
    for score in scores:
        total += score
    user = {"name": name, "total_score": total}
    high_scores = [score for score in scores if score > 85]
    print(f"សួស្តី {name}! ព័ត៌មានអ្នកប្រើ: {user}")
    print(f"ពិន្ទុលើស 85: {high_scores}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default ConceptLesson5_3Content;
