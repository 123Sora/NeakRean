import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson5_2Content: LessonContent = {
  title: 'Objects និង Properties',
  objectives: [
    'យល់ពីគោលគំនិតនៃ Objects និង Properties ក្នុងការសរសេរកម្មវិធី',
    'ស្វែងយល់ពីរបៀបបង្កើត Objects ក្នុង Python ដោយប្រើ Dictionaries',
    'រៀនការចូលប្រើ និងកែប្រែ Properties នៃ Objects',
    'ស្គាល់ Methods សម្រាប់ Dictionaries ដូចជា get, update, និង pop',
    'អនុវត្តការប្រើ Objects ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# Objects និង Properties 🗂️💻

---

**Objects** ក្នុង Python ត្រូវបានតំណាងដោយ **Dictionaries** ដែលជាទិន្នន័យសម្រាប់ផ្ទុក Key-Value Pairs។ Dictionary អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងទិន្នន័យជាមួយ Properties ដែលមានឈ្មោះ។

---

## 1. គោលគំនិតនៃ Objects (Dictionaries)

Dictionary គឺជាបណ្តុំនៃ Key-Value Pairs។
- **Key:** ឈ្មោះឬសញ្ញាសម្គាល់។
- **Value:** ទិន្នន័យដែលភ្ជាប់ជាមួយ Key។
- **លក្ខណៈ:**
  - Mutable (អាចផ្លាស់ប្តូរបាន)។
  - Unordered (គ្មានលំដាប់) មុន Python 3.7។
  - Keys ត្រូវតែ Unique។

**ឧទាហរណ៍កូដ Python:**

\`\`\`python
person = {"name": "សុខា", "age": 25, "is_student": True}
print(person)  # បង្ហាញ: {'name': 'សុខា', 'age': 25, 'is_student': True}
\`\`\`

---

## 2. ការបង្កើត និងប្រើ Dictionaries

- **ការបង្កើត Dictionary:**
  \`\`\`python
  student = {"id": 1, "name": "លីនា", "grade": "A"}
  \`\`\`
- **ការចូលប្រើ Properties:**
  \`\`\`python
  print(student["name"])  # បង្ហាញ: លីនា
  print(student.get("grade"))  # បង្ហាញ: A
  \`\`\`
- **ការកែប្រែ Properties:**
  \`\`\`python
  student["grade"] = "B"
  print(student)  # បង្ហាញ: {'id': 1, 'name': 'លីនា', 'grade': 'B'}
  \`\`\`

---

## 3. Methods សម្រាប់ Dictionaries

- **\`get()\`:** ចូលប្រើ Value ដោយ Key ដោយមិនបង្កឲ្យមាន Error។
  \`\`\`python
  print(student.get("age", 0))  # បង្ហាញ: 0 (ប្រសិនបើ Key មិនមាន)
  \`\`\`
- **\`update()\`:** បន្ថែម ឬកែប្រែ Key-Value Pairs។
  \`\`\`python
  student.update({"age": 20, "city": "ភ្នំពេញ"})
  print(student)  # បង្ហាញ: {'id': 1, 'name': 'លីនា', 'grade': 'B', 'age': 20, 'city': 'ភ្នំពេញ'}
  \`\`\`
- **\`pop()\`:** លុប Key-Value Pair ដោយផ្អែកលើ Key។
  \`\`\`python
  student.pop("grade")
  print(student)  # បង្ហាញ: {'id': 1, 'name': 'លីនា', 'age': 20, 'city': 'ភ្នំពេញ'}
  \`\`\`
- **\`keys()\`, \`values()\`, \`items()\`:**
  \`\`\`python
  print(student.keys())  # បង្ហាញ: dict_keys(['id', 'name', 'age', 'city'])
  print(student.values())  # បង្ហាញ: dict_values([1, 'លីនា', 20, 'ភ្នំពេញ'])
  print(student.items())  # បង្ហាញ: dict_items([('id', 1), ('name', 'លីនា'), ('age', 20), ('city', 'ភ្នំពេញ')])
  \`\`\`

---

## 4. ការប្រើ Dictionaries ក្នុងកម្មវិធី

Dictionaries ត្រូវបានប្រើសម្រាប់៖
- **ការផ្ទុកទិន្នន័យស្មុគស្មាញ:** ឧទាហរណ៍ ព័ត៌មានអ្នកប្រើ។
- **ការគ្រប់គ្រងទិន្នន័យ:** ឧទាហរណ៍ ការច្រោះ ឬកែប្រែទិន្នន័យ។
- **ការរៀបចំទិន្នន័យ:** ធ្វើឱ្យទិន្នន័យមានរចនាសម្ព័ន្ធ។

**ឧទាហរណ៍កូដ:**

\`\`\`python
car = {"brand": "Toyota", "model": "Camry", "year": 2020}
car["year"] = 2021
car.update({"color": "Black"})
print(car)  # បង្ហាញ: {'brand': 'Toyota', 'model': 'Camry', 'year': 2021, 'color': 'Black'}
\`\`\`

---

## 5. ហេតុអ្វីសំខាន់ក្នុងការប្រើ Dictionaries?

- **ភាពបត់បែន:** អនុញ្ញាតឱ្យផ្ទុកទិន្នន័យជាមួយ Keys ដែលមានអត្ថន័យ។
- **ការគ្រប់គ្រង:** ងាយស្រួលចូលប្រើ និងកែប្រែ Properties។
- **ប្រសិទ្ធភាព:** កាត់បន្ថយការប្រើ Variables ច្រើន។
- **ការប្រើឡើងវិញ:** Methods ដូចជា \`get()\` និង \`update()\` ធ្វើឱ្យការងារកាន់តែងាយស្រួល។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការគ្រប់គ្រង Dictionary អ្នកប្រើ</h3>
<p>បង្កើត Dictionary និងកែប្រែ Properties។</p>
<pre><code class="language-python">
user = {"name": "សុខា", "age": 25}
user["age"] = 26
user.update({"city": "ភ្នំពេញ"})
print(user)  # {'name': 'សុខា', 'age': 26, 'city': 'ភ្នំពេញ'}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការចូលប្រើ Properties</h3>
<p>បង្កើត Dictionary និងចូលប្រើ Properties ដោយប្រើ \`get()\`។</p>
<pre><code class="language-python">
student = {"id": 1, "name": "លីនា"}
print(student.get("name"))  # លីនា
print(student.get("grade", "មិនមាន"))  # មិនមាន
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Object ក្នុង Python ត្រូវបានតំណាងដោយអ្វី?',
      options: ['List', 'Tuple', 'Dictionary', 'Set'],
      correct: 2,
      explanation: 'Object ក្នុង Python ត្រូវបានតំណាងដោយ Dictionary។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nperson = {"name": "សុខា", "age": 25}\nperson["age"] = 26\nprint(person)\n```',
      options: [
        '{"name": "សុខា", "age": 25}',
        '{"name": "សុខា", "age": 26}',
        'Error',
        '{"age": 26}'
      ],
      correct: 1,
      explanation: '`person["age"] = 26` កែប្រែ Value នៃ Key "age"។'
    },
    {
      question: 'តើ Method `get()` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Key-Value Pair',
        'ចូលប្រើ Value ដោយ Key',
        'លុប Key-Value Pair',
        'តម្រៀប Dictionary'
      ],
      correct: 1,
      explanation: '`get()` ចូលប្រើ Value ដោយ Key ដោយមិនបង្កឲ្យមាន Error។'
    },
    {
      question: 'តើ Method `update()` ធ្វើអ្វី?',
      options: [
        'លុប Key-Value Pair',
        'បន្ថែម ឬកែប្រែ Key-Value Pairs',
        'រាប់ចំនួន Keys',
        'តម្រៀប Dictionary'
      ],
      correct: 1,
      explanation: '`update()` បន្ថែម ឬកែប្រែ Key-Value Pairs។'
    },
    {
      question: 'តើ Keys ក្នុង Dictionary ត្រូវតែជាអ្វី?',
      options: ['Unique', 'Duplicates', 'Numbers', 'Strings'],
      correct: 0,
      explanation: 'Keys ក្នុង Dictionary ត្រូវតែ Unique។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ncar = {"brand": "Toyota", "year": 2020}\ncar.pop("year")\nprint(car)\n```',
      options: [
        '{"brand": "Toyota", "year": 2020}',
        '{"brand": "Toyota"}',
        'Error',
        '{"year": 2020}'
      ],
      correct: 1,
      explanation: '`pop("year")` លុប Key-Value Pair នៃ "year"។'
    },
    {
      question: 'តើ Method `keys()` ធ្វើអ្វី?',
      options: [
        'បង្ហាញ Values ទាំងអស់',
        'បង្ហាញ Keys ទាំងអស់',
        'បង្ហាញ Key-Value Pairs',
        'លុប Keys'
      ],
      correct: 1,
      explanation: '`keys()` បង្ហាញ Keys ទាំងអស់ក្នុង Dictionary។'
    },
    {
      question: 'តើ Method `values()` ធ្វើអ្វី?',
      options: [
        'បង្ហាញ Values ទាំងអស់',
        'បង្ហាញ Keys ទាំងអស់',
        'បង្ហាញ Key-Value Pairs',
        'លុប Values'
      ],
      correct: 0,
      explanation: '`values()` បង្ហាញ Values ទាំងអស់ក្នុង Dictionary។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nstudent = {"name": "លីនា"}\nstudent.update({"grade": "A"})\nprint(student)\n```',
      options: [
        '{"name": "លីនា"}',
        '{"name": "លីនា", "grade": "A"}',
        'Error',
        '{"grade": "A"}'
      ],
      correct: 1,
      explanation: '`update({"grade": "A"})` បន្ថែម Key-Value Pair ថ្មី។'
    },
    {
      question: 'តើ Dictionary អាចផ្លាស់ប្តូរបានទេ?',
      options: ['បាន (Mutable)', 'មិនបាន (Immutable)', 'បានតែនៅក្នុង Loop', 'បានតែនៅក្នុង Function'],
      correct: 0,
      explanation: 'Dictionary ជា Mutable ដែលអាចផ្លាស់ប្តូរបាន។'
    },
    {
      question: 'តើ Method `items()` ធ្វើអ្វី?',
      options: [
        'បង្ហាញ Keys ទាំងអស់',
        'បង្ហាញ Values ទាំងអស់',
        'បង្ហាញ Key-Value Pairs',
        'លុប Key-Value Pairs'
      ],
      correct: 2,
      explanation: '`items()` បង្ហាញ Key-Value Pairs ទាំងអស់ក្នុង Dictionary។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nperson = {"name": "សុខា", "age": 25}\nprint(person.get("city", "មិនមាន"))\n```',
      options: ['សុខា', '25', 'មិនមាន', 'Error'],
      correct: 2,
      explanation: '`get("city", "មិនមាន")` ត្រឡប់ "មិនមាន" ព្រោះ Key "city" មិនមាន។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Dictionaries ដើម្បីគ្រប់គ្រងទិន្នន័យអ្នកប្រើ។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំព័ត៌មានអ្នកប្រើ (ឈ្មោះ អាយុ និងទីកន្លែង)។
2. **ការគ្រប់គ្រង Dictionary:**
   - បង្កើត Dictionary ទទេ និងបន្ថែមព័ត៌មានអ្នកប្រើ។
   - កែប្រែអាយុដោយបន្ថែម ១ ឆ្នាំ។
   - បន្ថែម Property ថ្មី "is_student" ដោយប្រើ \`update()\`។
   - លុប Property "place" ដោយប្រើ \`pop()\`។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារស្វាគមន៍ជាមួយឈ្មោះអ្នកប្រើ។
   - បង្ហាញ Dictionary បន្ទាប់ពីការគ្រប់គ្រង។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលអាយុមិនមែនជាលេខ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    user = {}
    user["name"] = input("បញ្ចូលឈ្មោះអ្នកប្រើ: ")
    user["age"] = int(input("បញ្ចូលអាយុ: "))
    user["place"] = input("បញ្ចូលទីកន្លែង: ")
    user["age"] += 1
    user.update({"is_student": True})
    user.pop("place")
    print(f"សួស្តី {name}! ព័ត៌មានអ្នកប្រើ: {user}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default ConceptLesson5_2Content;
