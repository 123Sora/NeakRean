import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson6_3Content: LessonContent = {
  title: 'Code Optimization',
  objectives: [
    'យល់ពីគោលគំនិតនៃការបង្កើនប្រសិទ្ធភាពកូដ',
    'ស្វែងយល់ពីបច្ចេកទេស Code Optimization ក្នុង Python',
    'រៀនការកាត់បន្ថយភាពស្មុគស្មាញនៃកូដ',
    'ស្គាល់វិធីសាស្ត្រដើម្បីបង្កើនល្បឿន និងកាត់បន្ថយការប្រើ Memory',
    'អនុវត្តការបង្កើនប្រសិទ្ធភាពកូដក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# Code Optimization ⚡💻

---

**Code Optimization** គឺជាដំណើរការនៃការកែប្រែកូដដើម្បីធ្វើឱ្យវាដំណើរការលឿនជាងមុន ប្រើ Memory តិច និងមានភាពច្បាស់លាស់។

---

## 1. គោលគំនិតនៃ Code Optimization

Code Optimization ផ្តោតលើការធ្វើឱ្យកម្មវិធីមានប្រសិទ្ធភាព។
- **គោលបំណង:**
  - បង្កើនល្បឿនដំណើរការ។
  - កាត់បន្ថយការប្រើ Memory។
  - ធ្វើឱ្យកូដអានបានស្រួល។

**ឧទាហរណ៍កូដ Python (មិន Optimized):**

\`\`\`python
def sum_squares(numbers):
    result = []
    for num in numbers:
        result.append(num * num)
    total = 0
    for num in result:
        total += num
    return total
print(sum_squares([1, 2, 3]))  # បង្ហាញ: 14 (1 + 4 + 9)
\`\`\`

---

## 2. បច្ចេកទេស Code Optimization

- **ប្រើ List Comprehension:** កាត់បន្ថយ Loop និងបង្កើនល្បឿន។
  \`\`\`python
  def sum_squares_optimized(numbers):
      return sum([num * num for num in numbers])
  print(sum_squares_optimized([1, 2, 3]))  # បង្ហាញ: 14
  \`\`\`
- **ជៀសវាងការគណនាដដែលៗ:** ផ្ទុកលទ្ធផលសម្រាប់ប្រើឡើងវិញ។
  \`\`\`python
  def calculate_total(numbers):
      length = len(numbers)  # ផ្ទុក len ម្តងគត់
      total = 0
      for i in range(length):
          total += numbers[i]
      return total
  \`\`\`
- **ប្រើ Data Structures សមស្រប:** ឧទាហរណ៍ ប្រើ Set សម្រាប់ការស្វែងរកលឿន។
  \`\`\`python
  def has_duplicate(numbers):
      return len(numbers) != len(set(numbers))
  print(has_duplicate([1, 2, 2, 3]))  # True
  \`\`\`

---

## 3. ការកាត់បន្ថយភាពស្មុគស្មាញ

- **Time Complexity:** កាត់បន្ថយចំនួនប្រតិបត្តិការក្នុងកម្មវិធី។
  - ឧទាហរណ៍: ប្រើ \`sum()\` ជំនួស Loop សម្រាប់ផលបូក។
- **Space Complexity:** កាត់បន្ថយការប្រើ Memory។
  - ឧទាហរណ៍: ជៀសវាងបង្កើត List បណ្តោះអាសន្ន។

**ឧទាហរណ៍កូដ Optimized:**

\`\`\`python
def sum_even_numbers(numbers):
    return sum(num for num in numbers if num % 2 == 0)
print(sum_even_numbers([1, 2, 3, 4]))  # បង្ហាញ: 6
\`\`\`

---

## 4. វិធីសាស្ត្របង្កើនប្រសិទ្ធភាព

- **ប្រើ Built-in Functions:** ដូចជា \`sum()\`, \`max()\`, \`min()\`។
- **ជៀសវាង Nested Loops:** ប្រសិនបើអាចជំនួសដោយ Algorithm លឿនជាង។
- **ប្រើ Generator Expressions:** សម្រាប់កាត់បន្ថយការប្រើ Memory។
  \`\`\`python
  def sum_large_list(numbers):
      return sum(num for num in numbers)  # Generator Expression
  \`\`\`
- **ការប្រើ Modules:** ឧទាហរណ៍ Module \`collections\` ឬ \`itertools\`។

---

## 5. ការអនុវត្ត Code Optimization

- **ការគណនា:** ឧទាហរណ៍ គណនាផលបូក ឬមធ្យមភាគ។
- **ការគ្រប់គ្រងទិន្នន័យ:** ឧទាហរណ៍ តម្រៀប ឬច្រោះទិន្នន័យ។
- **ការបង្កើនល្បឿន:** ធ្វើឱ្យកម្មវិធីដំណើរការលឿន។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def find_unique(numbers):
    return list(set(numbers))  # Optimized ដោយប្រើ Set
print(find_unique([1, 2, 2, 3, 3]))  # [1, 2, 3]
\`\`\`

---

## 6. ហេតុអ្វីសំខាន់ក្នុងការបង្កើនប្រសិទ្ធភាពកូដ?

- **ល្បឿន:** ធ្វើឱ្យកម្មវិធីដំណើរការលឿនជាង។
- **ប្រសិទ្ធភាព:** កាត់បន្ថយការប្រើ Memory។
- **ភាពច្បាស់លាស់:** ធ្វើឱ្យកូដអានបានស្រួល។
- **ភាពជឿជាក់:** ធ្វើឱ្យកម្មវិធីអាចទប់ទល់នឹងទិន្នន័យធំ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Optimization ដោយប្រើ List Comprehension</h3>
<p>បង្កើត Function Optimized សម្រាប់គណនាផលបូកនៃលេខការ៉េ។</p>
<pre><code class="language-python">
def sum_squares_optimized(numbers):
    return sum([num * num for num in numbers])
print(sum_squares_optimized([1, 2, 3]))  # 14
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Optimization ដោយប្រើ Set</h3>
<p>បង្កើត Function Optimized សម្រាប់ស្វែងរកលេខ Unique។</p>
<pre><code class="language-python">
def find_unique(numbers):
    return list(set(numbers))
print(find_unique([1, 2, 2, 3, 3]))  # [1, 2, 3]
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Code Optimization គឺជាអ្វី?',
      options: [
        'ការសរសេរកូដថ្មី',
        'ការកែប្រែកូដឱ្យលឿន និងប្រើ Memory តិច',
        'ការបង្កើត UI',
        'ការគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Code Optimization កែប្រែកូដឱ្យលឿន និងប្រើ Memory តិច។'
    },
    {
      question: 'តើ List Comprehension ជួយអ្វីក្នុង Optimization?',
      options: [
        'បង្កើនការប្រើ Memory',
        'កាត់បន្ថយ Loop និងបង្កើនល្បឿន',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'List Comprehension កាត់បន្ថយ Loop និងបង្កើនល្បឿន។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef sum_squares_optimized(numbers):\n    return sum([num * num for num in numbers])\nprint(sum_squares_optimized([1, 2, 3]))\n```',
      options: ['14', '6', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'List Comprehension គណនា (1*1 + 2*2 + 3*3) = 14។'
    },
    {
      question: 'តើ Time Complexity គឺជាអ្វី?',
      options: [
        'ចំនួន Memory ដែលប្រើ',
        'ចំនួនប្រតិបត្តិការក្នុងកម្មវិធី',
        'ការបង្កើត UI',
        'ការបង្កើត Function'
      ],
      correct: 1,
      explanation: 'Time Complexity វាស់ចំនួនប្រតិបត្តិការក្នុងកម្មវិធី។'
    },
    {
      question: 'តើ Space Complexity គឺជាអ្វី?',
      options: [
        'ចំនួនប្រតិបត្តិការ',
        'ចំនួន Memory ដែលប្រើ',
        'ការបង្កើត Loop',
        'ការបង្កើត UI'
      ],
      correct: 1,
      explanation: 'Space Complexity វាស់ចំនួន Memory ដែលប្រើ។'
    },
    {
      question: 'តើ Set ជួយអ្វីក្នុង Optimization?',
      options: [
        'បង្កើនការប្រើ Memory',
        'បង្កើនល្បឿនការស្វែងរក',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Set បង្កើនល្បឿនការស្វែងរក ព្រោះវាមាន Time Complexity O(1)។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef find_unique(numbers):\n    return list(set(numbers))\nprint(find_unique([1, 2, 2, 3, 3]))\n```',
      options: ['[1, 2, 3]', '[1, 2, 2, 3, 3]', 'Error', '[2, 3]'],
      correct: 0,
      explanation: '`set()` លុប Duplicates និងត្រឡប់ [1, 2, 3]។'
    },
    {
      question: 'តើ Generator Expression ជួយអ្វីក្នុង Optimization?',
      options: [
        'បង្កើនការប្រើ Memory',
        'កាត់បន្ថយការប្រើ Memory',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Generator Expression កាត់បន្ថយការប្រើ Memory ដោយមិនបង្កើត List បណ្តោះអាសន្ន។'
    },
    {
      question: 'តើ Built-in Functions ដូចជា `sum()` ជួយអ្វី?',
      options: [
        'បង្កើនការប្រើ Memory',
        'បង្កើនល្បឿនកម្មវិធី',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Built-in Functions ដូចជា `sum()` បង្កើនល្បឿនកម្មវិធី។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef sum_even_numbers(numbers):\n    return sum(num for num in numbers if num % 2 == 0)\nprint(sum_even_numbers([1, 2, 3, 4]))\n```',
      options: ['6', '10', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Generator Expression គណនាផលបូកលេខគូរ (2 + 4 = 6)។'
    },
    {
      question: 'តើការជៀសវាង Nested Loops ជួយអ្វី?',
      options: [
        'បង្កើន Time Complexity',
        'កាត់បន្ថយ Time Complexity',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'ការជៀសវាង Nested Loops កាត់បន្ថយ Time Complexity។'
    },
    {
      question: 'តើ Code Optimization ជួយធ្វើឱ្យកម្មវិធី៖',
      options: [
        'ស្មុគស្មាញជាង',
        'លឿន និងប្រើ Memory តិច',
        'ដំណើរការយឺត',
        'ប្រើ Memory ច្រើន'
      ],
      correct: 1,
      explanation: 'Code Optimization ធ្វើឱ្យកម្មវិធីលឿន និងប្រើ Memory តិច�।'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើបច្ចេកទេស Code Optimization ដើម្បីគណនាផលបូកនៃលេខការ៉េ។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំលេខចំនួន ៤ ដើម្បីបន្ថែមទៅក្នុង List។
2. **ការបង្កើនប្រសិទ្ធភាព:**
   - បង្កើត Function \`sum_squares_optimized\` ដែលប្រើ List Comprehension ឬ Generator Expression ដើម្បីគណនាផលបូកនៃលេខការ៉េ។
   - ប្រើ \`sum()\` Built-in Function ជំនួស Loop។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារស្វាគមន៍ជាមួយឈ្មោះអ្នកប្រើ។
   - បង្ហាញផលបូកនៃលេខការ៉េ។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលលេខមិនត្រឹមត្រូវ ឬ List ទទេ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
def sum_squares_optimized(numbers):
    return sum(num * num for num in numbers)

try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    numbers = []
    for i in range(4):
        num = float(input(f"បញ្ចូលលេខទី {i+1}: "))
        numbers.append(num)
    if not numbers:
        raise ValueError("List លេខមិនអាចទទេបាន!")
    total = sum_squares_optimized(numbers)
    print(f"សួស្តី {name}! ផលបូកនៃលេខការ៉េ: {total}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default ConceptLesson6_3Content;
