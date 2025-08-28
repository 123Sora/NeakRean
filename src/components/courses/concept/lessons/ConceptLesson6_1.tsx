import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson6_1Content: LessonContent = {
  title: 'វិធីសាស្ត្រដោះស្រាយបញ្ហា',
  objectives: [
    'យល់ពីគោលគំនិតនៃការដោះស្រាយបញ្ហាក្នុងការសរសេរកម្មវិធី',
    'ស្វែងយល់ពីវិធីសាស្ត្រដោះស្រាយបញ្ហា (Problem Solving Techniques)',
    'រៀនជំហាននៃការវិភាគ និងបំបែកបញ្ហា',
    'ស្គាល់ឧបករណ៍ និងបច្ចេកទេសសម្រាប់ដោះស្រាយបញ្ហា',
    'អនុវត្តវិធីសាស្ត្រដោះស្រាយបញ្ហាក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# វិធីសាស្ត្រដោះស្រាយបញ្ហា 🧠💻

---

**វិធីសាស្ត្រដោះស្រាយបញ្ហា** គឺជាជំនាញសំខាន់សម្រាប់អ្នកសរសេរកម្មវិធី ដែលជួយបំបែកបញ្ហាស្មុគស្មាញទៅជាផ្នែកតូចៗ និងដោះស្រាយវាបានយ៉ាងមានប្រសិទ្ធភាព។

---

## 1. គោលគំនិតនៃការដោះស្រាយបញ្ហា

ការដោះស្រាយបញ្ហា គឺជាដំណើរការនៃការយល់ វិភាគ និងរកដំណោះស្រាយសម្រាប់បញ្ហាមួយ។
- **គោលបំណង:** បង្កើតកម្មវិធីដែលអាចដោះស្រាយបញ្ហាបានត្រឹមត្រូវ និងមានប្រសិទ្ធភាព។
- **ជំហានសំខាន់ៗ:**
  1. យល់បញ្ហា
  2. រៀបចំផែនការ
  3. បំបែកបញ្ហា
  4. សរសេរកូដ
  5. សាកល្បង និងកែប្រែ

**ឧទាហរណ៍កូដ Python (គណនាផលបូកគូរ):**

\`\`\`python
def sum_even_numbers(numbers):
    total = 0
    for num in numbers:
        if num % 2 == 0:
            total += num
    return total
print(sum_even_numbers([1, 2, 3, 4, 5, 6]))  # បង្ហាញ: 12 (2 + 4 + 6)
\`\`\`

---

## 2. វិធីសាស្ត្រដោះស្រាយបញ្ហា

- **វិភាគបញ្ហា:** កំណត់ Input, Output, និងលក្ខខណ្ឌ។
  - ឧទាហរណ៍: បញ្ហា "គណនាផលបូកគូរ" → Input: List លេខ, Output: ផលបូកនៃលេខគូរ។
- **បំបែកបញ្ហា:** បែងចែកបញ្ហាទៅជាផ្នែកតូចៗ។
  - ឧទាហរណ៍: (1) ឆ្លងកាត់ List, (2) ពិនិត្យលេខគូរ, (3) បូកលេខគូរ។
- **ប្រើ Pseudocode:** សរសេរផែនការជាភាសាសាមញ្ញ។
  \`\`\`
  យក List លេខ
  កំណត់ total = 0
  សម្រាប់លេខនីមួយៗក្នុង List:
      ប្រសិនបើលេខជាគូរ:
          បូកលេខទៅ total
  ត្រឡប់ total
  \`\`\`
- **សាកល្បងដំណោះស្រាយ:** សរសេរកូដ និងសាកល្បងជាមួយទិន្នន័យផ្សេងៗ។

---

## 3. ឧបករណ៍ និងបច្ចេកទេស

- **Flowcharts:** ប្រើដើម្បីគូរដំណើរការនៃកម្មវិធី។
- **Divide and Conquer:** បំបែកបញ្ហាទៅជាផ្នែកតូចៗ។
- **Pattern Recognition:** ស្វែងរកបញ្ហាស្រដៀងគ្នាដែលធ្លាប់ដោះស្រាយ។
- **Test Cases:** បង្កើតទិន្នន័យសាកល្បងសម្រាប់ផ្ទៀងផ្ទាត់។

**ឧទាហរណ៍កូដ (តម្រៀប List):**

\`\`\`python
def sort_list(numbers):
    return sorted(numbers)
print(sort_list([5, 2, 8, 1]))  # បង្ហាញ: [1, 2, 5, 8]
\`\`\`

---

## 4. ការអនុវត្តវិធីសាស្ត្រដោះស្រាយបញ្ហា

- **ការគណនា:** ឧទាហរណ៍ គណនាផលបូក ឬមធ្យមភាគ។
- **ការគ្រប់គ្រងទិន្នន័យ:** ឧទាហរណ៍ តម្រៀប ឬច្រោះទិន្នន័យ។
- **ការបង្កើតកម្មវិធី:** ប្រើវិធីសាស្ត្រដើម្បីរៀបចំកូដ។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def find_max(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num
print(find_max([3, 7, 2, 9, 1]))  # បង្ហាញ: 9
\`\`\`

---

## 5. ហេតុអ្វីសំខាន់ក្នុងការដោះស្រាយបញ្ហា?

- **ប្រសិទ្ធភាព:** ជួយសរសេរកូដដែលដំណើរការលឿន និងត្រឹមត្រូវ។
- **ភាពច្បាស់លាស់:** ធ្វើឱ្យកូដអានបានស្រួល និងរៀបចំបានល្អ។
- **ការដោះស្រាយបញ្ហាស្មុគស្មាញ:** អនុញ្ញាតឱ្យដោះស្រាយបញ្ហាធំៗបាន។
- **ការអភិវឌ្ឍជំនាញ:** បង្កើនសមត្ថភាពគិតបែបតក្កវិទ្យា។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការគណនាផលបូកលេខគូរ</h3>
<p>បង្កើត Function ដែលគណនាផលបូកនៃលេខគូរក្នុង List។</p>
<pre><code class="language-python">
def sum_even_numbers(numbers):
    total = 0
    for num in numbers:
        if num % 2 == 0:
            total += num
    return total
print(sum_even_numbers([1, 2, 3, 4]))  # 6
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការស្វែងរកលេខធំបំផុត</h3>
<p>បង្កើត Function ដែលស្វែងរកលេខធំបំផុតក្នុង List។</p>
<pre><code class="language-python">
def find_max(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num
print(find_max([3, 7, 2, 9, 1]))  # 9
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើការដោះស្រាយបញ្ហាគឺជាអ្វី?',
      options: [
        'ការសរសេរកូดដោយមិនគិត',
        'ការវិភាគ និងរកដំណោះស្រាយសម្រាប់បញ្ហា',
        'ការបង្កើត UI',
        'ការគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'ការដោះស្រាយបញ្ហាគឺជាការវិភាគ និងរកដំណោះស្រាយសម្រាប់បញ្ហា។'
    },
    {
      question: 'តើជំហានដំបូងក្នុងការដោះស្រាយបញ្ហាគឺអ្វី?',
      options: [
        'សរសេរកូដ',
        'យល់បញ្ហា',
        'សាកល្បងកម្មវិធី',
        'បង្កើត UI'
      ],
      correct: 1,
      explanation: 'ជំហានដំបូងគឺយល់បញ្ហាដើម្បីកំណត់ Input និង Output។'
    },
    {
      question: 'តើ Pseudocode គឺជាអ្វី?',
      options: [
        'កូដ Python',
        'ផែនការសរសេរជាភាសាសាមញ្ញ',
        'កូដ JavaScript',
        'កូដ HTML'
      ],
      correct: 1,
      explanation: 'Pseudocode ជាផែនការសរសេរជាភាសាសាមញ្ញ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef sum_even_numbers(numbers):\n    total = 0\n    for num in numbers:\n        if num % 2 == 0:\n            total += num\n    return total\nprint(sum_even_numbers([1, 2, 3, 4]))\n```',
      options: ['10', '6', 'Error', 'គ្មានលទ្ធផល'],
      correct: 1,
      explanation: 'Function គណនាផលបូកលេខគូរ (2 + 4 = 6)។'
    },
    {
      question: 'តើ Divide and Conquer គឺជាអ្វី?',
      options: [
        'ការបំបែកបញ្ហាទៅជាផ្នែកតូចៗ',
        'ការសរសេរកូដដោយមិនគិត',
        'ការបង្កើត Loop',
        'ការបង្កើត Function'
      ],
      correct: 0,
      explanation: 'Divide and Conquer ជាការបំបែកបញ្ហាទៅជាផ្នែកតូចៗ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef find_max(numbers):\n    max_num = numbers[0]\n    for num in numbers:\n        if num > max_num:\n            max_num = num\n    return max_num\nprint(find_max([3, 7, 2, 9, 1]))\n```',
      options: ['3', '7', '9', 'Error'],
      correct: 2,
      explanation: 'Function ស្វែងរកលេខធំបំផុត (9)។'
    },
    {
      question: 'តើ Flowchart ប្រើសម្រាប់អ្វី?',
      options: [
        'គូរដំណើរការនៃកម្មវិធី',
        'សរសេរកូដ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 0,
      explanation: 'Flowchart ប្រើសម្រាប់គូរដំណើរការនៃកម្មវិធី។'
    },
    {
      question: 'តើ Test Cases គឺជាអ្វី?',
      options: [
        'កូដសម្រាប់ UI',
        'ទិន្នន័យសាកល្បងសម្រាប់ផ្ទៀងផ្ទាត់',
        'កូដសម្រាប់ Loop',
        'កូដសម្រាប់ Function'
      ],
      correct: 1,
      explanation: 'Test Cases ជាទិន្នន័យសាកល្បងសម្រាប់ផ្ទៀងផ្ទាត់។'
    },
    {
      question: 'តើ Pattern Recognition ជួយអ្វីក្នុងការដោះស្រាយបញ្ហា?',
      options: [
        'ស្វែងរកបញ្ហាស្រដៀងគ្នា',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware',
        'សរសេរកូដដោយមិនគិត'
      ],
      correct: 0,
      explanation: 'Pattern Recognition ស្វែងរកបញ្ហាស្រដៀងគ្នាដែលធ្លាប់ដោះស្រាយ។'
    },
    {
      question: 'តើជំហានណាមួយសំខាន់ក្នុងការដោះស្រាយបញ្ហា?',
      options: [
        'រៀបចំផែនការ',
        'បង្កើត Loop',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 0,
      explanation: 'រៀបចំផែនការជាជំហានសំខាន់ក្នុងការដោះស្រាយបញ្ហា។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef sort_list(numbers):\n    return sorted(numbers)\nprint(sort_list([5, 2, 8, 1]))\n```',
      options: ['[5, 2, 8, 1]', '[1, 2, 5, 8]', '[8, 5, 2, 1]', 'Error'],
      correct: 1,
      explanation: '`sorted()` តម្រៀប List តាមលំដាប់កើនឡើង។'
    },
    {
      question: 'តើការដោះស្រាយបញ្ហាជួយធ្វើឱ្យកូដ៖',
      options: [
        'ស្មុគស្មាញជាង',
        'មានប្រសិទ្ធភាព និងច្បាស់លាស់',
        'ដំណើរការយឺត',
        'ប្រើ Memory ច្រើន'
      ],
      correct: 1,
      explanation: 'ការដោះស្រាយបញ្ហាជួយធ្វើឱ្យកូដមានប្រសិទ្ធភាព និងច្បាស់លាស់។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើវិធីសាស្ត្រដោះស្រាយបញ្ហាដើម្បីគណនាពិន្ទុមធ្យមភាគ។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំពិន្ទុចំនួន ៤ ដើម្បីបន្ថែមទៅក្នុង List។
2. **ការដោះស្រាយបញ្ហា:**
   - បំបែកបញ្ហា: (1) បញ្ចូលពិន្ទុ, (2) គណនាផលបូក, (3) គណនាមធ្យមភាគ។
   - បង្កើត Function \`calculate_average\` ដែលគណនាមធ្យមភាគនៃ List ពិន្ទុ។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារស្វាគមន៍ជាមួយឈ្មោះអ្នកប្រើ។
   - បង្ហាញពិន្ទុទាំងអស់ និងមធ្យមភាគ។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលពិន្ទុមិនមែនជាលេខ ឬ List ទទេ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
def calculate_average(scores):
    if not scores:
        raise ValueError("List ពិន្ទុមិនអាចទទេបាន!")
    total = 0
    for score in scores:
        total += score
    return total / len(scores)

try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    scores = []
    for i in range(4):
        score = float(input(f"បញ្ចូលពិន្ទុទី {i+1}: "))
        scores.append(score)
    average = calculate_average(scores)
    print(f"សួស្តី {name}! ពិន្ទុរបស់អ្នក: {scores}")
    print(f"មធ្យមភាគ: {average:.2f}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default ConceptLesson6_1Content;
