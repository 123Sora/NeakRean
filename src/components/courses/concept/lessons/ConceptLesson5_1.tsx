import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson5_1Content: LessonContent = {
  title: 'Arrays និងការគ្រប់គ្រង',
  objectives: [
    'យល់ពីគោលគំនិតនៃ Arrays ក្នុងការសរសេរកម្មវិធី',
    'ស្វែងយល់ពីរបៀបបង្កើត និងប្រើ Arrays ក្នុង Python',
    'រៀនការគ្រប់គ្រង Arrays (បន្ថែម លុប កែប្រែ)',
    'ស្គាល់ Methods សម្រាប់ Arrays ដូចជា append, remove, និង pop',
    'អនុវត្តការប្រើ Arrays ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# Arrays និងការគ្រប់គ្រង 📚💻

---

**Arrays** ក្នុង Python ត្រូវបានគេហៅថា **Lists** ដែលជាទិន្នន័យសម្រាប់ផ្ទុកធាតុជាច្រើននៅក្នុង Variable តែមួយ។ Lists អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងទិន្នន័យបានយ៉ាងបត់បែន។

---

## 1. គោលគំនិតនៃ Arrays (Lists)

List គឺជាបណ្តុំនៃធាតុដែលអាចជាប្រភេទទិន្នន័យផ្សេងៗ (ឧ. លេខ, អក្សរ, Boolean)។
- **លក្ខណៈ:**
  - អាចផ្លាស់ប្តូរបាន (Mutable)។
  - មានលំដាប់ (Ordered)។
  - អនុញ្ញាតឱ្យមានធាតុស្ទួន (Duplicates)។

**ឧទាហរណ៍កូដ Python:**

\`\`\`python
fruits = ["ផ្លែប៉ោម", "ផ្លែចេក", "ផ្លែស្ត្របឺរី"]
print(fruits)  # បង្ហាញ: ['ផ្លែប៉ោម', 'ផ្លែចេក', 'ផ្លែស្ត្របឺរី']
\`\`\`

---

## 2. ការបង្កើត និងប្រើ Lists

- **ការបង្កើត List:**
  \`\`\`python
  numbers = [1, 2, 3, 4, 5]
  mixed = [1, "សួស្តី", True]
  \`\`\`
- **ការចូលប្រើធាតុ (Indexing):**
  \`\`\`python
  print(numbers[0])  # បង្ហាញ: 1
  print(numbers[-1])  # បង្ហាញ: 5 (ចូលប្រើពីចុង)
  \`\`\`
- **ការកែប្រែធាតុ:**
  \`\`\`python
  numbers[0] = 10
  print(numbers)  # បង្ហាញ: [10, 2, 3, 4, 5]
  \`\`\`

---

## 3. ការគ្រប់គ្រង Lists

- **បន្ថែមធាតុ:**
  - \`append()\`: បន្ថែមធាតុនៅចុង List។
    \`\`\`python
    fruits.append("ផ្លែទំពាំងបាយជូ")
    print(fruits)  # បង្ហាញ: ['ផ្លែប៉ោម', 'ផ្លែចេក', 'ផ្លែស្ត្របឺរី', 'ផ្លែទំពាំងបាយជូ']
    \`\`\`
  - \`insert()\`: បន្ថែមធាតុនៅ Index ជាក់លាក់។
    \`\`\`python
    fruits.insert(1, "ផ្លែក្រូច")
    print(fruits)  # បង្ហាញ: ['ផ្លែប៉ោម', 'ផ្លែក្រូច', 'ផ្លែចេក', 'ផ្លែស្ត្របឺរី', 'ផ្លែទំពាំងបាយជូ']
    \`\`\`
- **លុបធាតុ:**
  - \`remove()\`: លុបធាតុដោយផ្អែកលើតម្លៃ។
    \`\`\`python
    fruits.remove("ផ្លែចេក")
    print(fruits)  # បង្ហាញ: ['ផ្លែប៉ោម', 'ផ្លែក្រូច', 'ផ្លែស្ត្របឺរី', 'ផ្លែទំពាំងបាយជូ']
    \`\`\`
  - \`pop()\`: លុបធាតុដោយផ្អែកលើ Index។
    \`\`\`python
    fruits.pop(1)
    print(fruits)  # បង្ហាញ: ['ផ្លែប៉ោម', 'ផ្លែស្ត្របឺរី', 'ផ្លែទំពាំងបាយជូ']
    \`\`\`
- **ការតម្រៀប:**
  - \`sort()\`: តម្រៀប List។
    \`\`\`python
    numbers = [5, 2, 8, 1]
    numbers.sort()
    print(numbers)  # បង្ហាញ: [1, 2, 5, 8]
    \`\`\`

---

## 4. Methods សម្រាប់ Lists

- \`len()\`: រាប់ចំនួនធាតុ។
  \`\`\`python
  print(len(fruits))  # បង្ហាញ: 3
  \`\`\`
- \`extend()\`: បន្ថែម List មួយទៅ List ផ្សេង។
  \`\`\`python
  fruits.extend(["ផ្លែល្ហុង", "ផ្លែម្នាស់"])
  print(fruits)  # បង្ហាញ: ['ផ្លែប៉ោម', 'ផ្លែស្ត្របឺរី', 'ផ្លែទំពាំងបាយជូ', 'ផ្លែល្ហុង', 'ផ្លែម្នាស់']
  \`\`\`
- \`clear()\`: លុបធាតុទាំងអស់។
  \`\`\`python
  fruits.clear()
  print(fruits)  # បង្ហាញ: []
  \`\`\`

---

## 5. ការប្រើ Lists ក្នុងកម្មវិធី

Lists ត្រូវបានប្រើសម្រាប់៖
- **ការផ្ទុកទិន្នន័យ:** ឧទាហរណ៍ ផ្ទុកឈ្មោះ ឬពិន្ទុ។
- **ការគ្រប់គ្រងទិន្នន័យ:** ឧទាហរណ៍ តម្រៀប ឬច្រោះទិន្នន័យ។
- **ការងារដដែលៗ:** ឧទាហរណ៍ ឆ្លងកាត់ធាតុក្នុង List។

**ឧទាហរណ៍កូដ:**

\`\`\`python
scores = [85, 90, 78, 92]
scores.append(88)
print(scores)  # បង្ហាញ: [85, 90, 78, 92, 88]
scores.sort()
print(scores)  # បង្ហាញ: [78, 85, 88, 90, 92]
\`\`\`

---

## 6. ហេតុអ្វីសំខាន់ក្នុងការប្រើ Lists?

- **ភាពបត់បែន:** អនុញ្ញាតឱ្យផ្ទុកទិន្នន័យច្រើនប្រភេទ។
- **ការគ្រប់គ្រង:** ងាយស្រួលបន្ថែម លុប ឬកែប្រែធាតុ។
- **ប្រសិទ្ធភាព:** កាត់បន្ថយការប្រើ Variables ច្រើន។
- **ការប្រើឡើងវិញ:** អនុញ្ញាតឱ្យប្រើ Methods សម្រាប់ការងារផ្សេងៗ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការគ្រប់គ្រង List ផ្លែឈើ</h3>
<p>បង្កើត List និងគ្រប់គ្រងធាតុ។</p>
<pre><code class="language-python">
fruits = ["ផ្លែប៉ោម", "ផ្លែចេក"]
fruits.append("ផ្លែស្ត្របឺរី")
fruits.remove("ផ្លែចេក")
print(fruits)  # ['ផ្លែប៉ោម', 'ផ្លែស្ត្របឺរី']
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការតម្រៀប List ពិន្ទុ</h3>
<p>បង្កើត List ពិន្ទុ និងតម្រៀបវា។</p>
<pre><code class="language-python">
scores = [85, 70, 95, 80]
scores.sort()
print(scores)  # [70, 80, 85, 95]
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Array ក្នុង Python ត្រូវបានគេហៅថាអ្វី?',
      options: ['Tuple', 'List', 'Dictionary', 'Set'],
      correct: 1,
      explanation: 'Array ក្នុង Python ត្រូវបានគេហៅថា List។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumbers = [1, 2, 3]\nnumbers.append(4)\nprint(numbers)\n```',
      options: ['[1, 2, 3]', '[1, 2, 3, 4]', '[4, 1, 2, 3]', 'Error'],
      correct: 1,
      explanation: '`append(4)` បន្ថែម ៤ នៅចុង List។'
    },
    {
      question: 'តើ Method `pop()` ធ្វើអ្វី?',
      options: [
        'បន្ថែមធាតុនៅចុង List',
        'លុបធាតុដោយផ្អែកលើ Index',
        'តម្រៀប List',
        'រាប់ចំនួនធាតុ'
      ],
      correct: 1,
      explanation: '`pop()` លុបធាតុដោយផ្អែកលើ Index។'
    },
    {
      question: 'តើ Method `remove()` ធ្វើអ្វី?',
      options: [
        'បន្ថែមធាតុ',
        'លុបធាតុដោយផ្អែកលើតម្លៃ',
        'តម្រៀប List',
        'លុបធាតុទាំងអស់'
      ],
      correct: 1,
      explanation: '`remove()` លុបធាតុដោយផ្អែកលើតម្លៃ។'
    },
    {
      question: 'តើ List អនុញ្ញាតឱ្យមានធាតុស្ទួនទេ?',
      options: ['បាន', 'មិនបាន', 'បានតែនៅក្នុង Loop', 'បានតែនៅក្នុង Function'],
      correct: 0,
      explanation: 'List អនុញ្ញាតឱ្យមានធាតុស្ទួន។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nfruits = ["ផ្លែប៉ោម", "ផ្លែចេក"]\nfruits.insert(1, "ផ្លែក្រូច")\nprint(fruits)\n```',
      options: [
        '["ផ្លែប៉ោម", "ផ្លែចេក", "ផ្លែក្រូច"]',
        '["ផ្លែប៉ោម", "ផ្លែក្រូច", "ផ្លែចេក"]',
        '["ផ្លែក្រូច", "ផ្លែប៉ោម", "ផ្លែចេក"]',
        'Error'
      ],
      correct: 1,
      explanation: '`insert(1, "ផ្លែក្រូច")` បន្ថែម "ផ្លែក្រូច" នៅ Index ១។'
    },
    {
      question: 'តើ Method `sort()` ធ្វើអ្វី?',
      options: [
        'លុបធាតុ',
        'តម្រៀប List',
        'បន្ថែមធាតុ',
        'រាប់ចំនួនធាតុ'
      ],
      correct: 1,
      explanation: '`sort()` តម្រៀប List តាមលំដាប់។'
    },
    {
      question: 'តើ Method `len()` ធ្វើអ្វី?',
      options: [
        'បន្ថែមធាតុ',
        'លុបធាតុ',
        'រាប់ចំនួនធាតុ',
        'តម្រៀប List'
      ],
      correct: 2,
      explanation: '`len()` រាប់ចំនួនធាតុក្នុង List។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumbers = [1, 2, 3]\nnumbers.pop(0)\nprint(numbers)\n```',
      options: ['[1, 2]', '[2, 3]', '[1, 3]', 'Error'],
      correct: 1,
      explanation: '`pop(0)` លុបធាតុនៅ Index ០ (១)។'
    },
    {
      question: 'តើ List អាចផ្លាស់ប្តូរបានទេ?',
      options: ['បាន (Mutable)', 'មិនបាន (Immutable)', 'បានតែនៅក្នុង Loop', 'បានតែនៅក្នុង Function'],
      correct: 0,
      explanation: 'List ជា Mutable ដែលអាចផ្លាស់ប្តូរបាន។'
    },
    {
      question: 'តើ Method `extend()` ធ្វើអ្វី?',
      options: [
        'លុបធាតុទាំងអស់',
        'បន្ថែម List មួយទៅ List ផ្សេង',
        'តម្រៀប List',
        'រាប់ចំនួនធាតុ'
      ],
      correct: 1,
      explanation: '`extend()` បន្ថែម List មួយទៅ List ផ្សេង។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumbers = [3, 1, 4]\nnumbers.sort()\nprint(numbers)\n```',
      options: ['[1, 3, 4]', '[3, 1, 4]', '[4, 3, 1]', 'Error'],
      correct: 0,
      explanation: '`sort()` តម្រៀប List តាមលំដាប់កើនឡើង។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Lists ដើម្បីគ្រប់គ្រងទិន្នន័យ។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំឈ្មោះផ្លែឈើចំនួន ៣ ដើម្បីបន្ថែមទៅក្នុង List។
2. **ការគ្រប់គ្រង List:**
   - បង្កើត List ទទេ និងបន្ថែមផ្លែឈើដែលអ្នកប្រើបញ្ចូល។
   - លុបផ្លែឈើទី ២ ដោយប្រើ \`pop()\`។
   - បន្ថែមផ្លែឈើថ្មីមួយនៅចុង List ដោយប្រើ \`append()\`។
   - តម្រៀប List តាមលំដាប់អក្ខរក្រម។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារស្វាគមន៍ជាមួយឈ្មោះអ្នកប្រើ។
   - បង្ហាញ List ផ្លែឈើបន្ទាប់ពីការគ្រប់គ្រង។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលឈ្មោះទទេ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    fruits = []
    for i in range(3):
        fruit = input(f"បញ្ចូលឈ្មោះផ្លែឈើទី {i+1}: ")
        if not fruit.strip():
            raise ValueError("ឈ្មោះផ្លែឈើមិនអាចទទេបាន!")
        fruits.append(fruit)
    fruits.pop(1)
    fruits.append("ផ្លែទំពាំងបាយជូ")
    fruits.sort()
    print(f"សួស្តី {name}! នេះជា List ផ្លែឈើរបស់អ្នក: {fruits}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default ConceptLesson5_1Content;
