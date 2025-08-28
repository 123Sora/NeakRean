import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson7_3Content: LessonContent = {
  title: 'Searching Algorithms',
  objectives: [
    'យល់ពីគោលគំនិតនៃ Searching Algorithms',
    'ស្វែងយល់ពី Searching Algorithms មូលដ្ឋានដូចជា Linear Search និង Binary Search',
    'រៀនការអនុវត្ត Searching Algorithms ក្នុង Python',
    'ស្គាល់ Time Complexity នៃ Searching Algorithms',
    'អនុវត្ត Searching Algorithms ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# Searching Algorithms 🔍💻

---

**Searching Algorithms** គឺជា Algorithm ដែលប្រើដើម្បីស្វែងរក Element ជាក់លាក់នៅក្នុងទិន្នន័យ (ឧ. List)។

---

## 1. គោលគំនិតនៃ Searching Algorithms

Searching Algorithms ត្រូវបានប្រើដើម្បីស្វែងរក Element ឬពិនិត្យថាតើ Element មាននៅក្នុងទិន្នន័យឬអត់។
- **ប្រភេទនៃ Searching:**
  - **Linear Search:** ពិនិត្យ Element ម្តងមួយៗ។
  - **Binary Search:** ប្រើទៅលើ List ដែលតម្រៀបរួច ដោយបែងចែកជួរ។

**ឧទាហរណ៍កូដ Python (Linear Search):**

\`\`\`python
def linear_search(numbers, target):
    for i in range(len(numbers)):
        if numbers[i] == target:
            return i
    return -1
print(linear_search([5, 2, 8, 1], 8))  # បង្ហាញ: 2
\`\`\`

---

## 2. Linear Search

- **របៀបដំណើរការ:** ពិនិត្យ Element ម្តងមួយៗរហូតដល់រកឃើញ ឬអស់ List។
- **Time Complexity:** O(n) (Linear Time)។
- **Space Complexity:** O(1) (Constant Space)។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def linear_search(numbers, target):
    for i in range(len(numbers)):
        if numbers[i] == target:
            return i
    return -1
print(linear_search([3, 1, 4, 1], 4))  # បង្ហាញ: 2
\`\`\`

---

## 3. Binary Search

- **របៀបដំណើរការ:** បែងចែក List ជាពាក់កណ្តាល និងស្វែងរកនៅផ្នែកដែលសមស្រប។
- **លក្ខខណ្ឌ:** List ត្រូវតម្រៀបជាមុន។
- **Time Complexity:** O(log n) (Logarithmic Time)។
- **Space Complexity:** O(1) (Constant Space)។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def binary_search(numbers, target):
    left, right = 0, len(numbers) - 1
    while left <= right:
        mid = (left + right) // 2
        if numbers[mid] == target:
            return mid
        elif numbers[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
print(binary_search([1, 2, 5, 8], 5))  # បង្ហាញ: 2
\`\`\`

---

## 4. ការប្រៀបធៀប Linear Search និង Binary Search

- **Linear Search:** សាកសមសម្រាប់ List តូច ឬមិនតម្រៀប។
- **Binary Search:** លឿនជាង ប៉ុន្តែតម្រូវឱ្យ List តម្រៀបជាមុន។

**ឧទាហរណ៍កូដ (Binary Search):**

\`\`\`python
def binary_search(numbers, target):
    left, right = 0, len(numbers) - 1
    while left <= right:
        mid = (left + right) // 2
        if numbers[mid] == target:
            return mid
        elif numbers[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
print(binary_search([1, 2, 3, 4], 3))  # បង្ហាញ: 2
\`\`\`

---

## 5. ការអនុវត្ត Searching Algorithms

- **ការបញ្ចូលទិន្នន័យ:** ប្រមូល List លេខ និង Target ពីអ្នកប្រើ។
- **ការស្វែងរក:** អនុវត្ត Linear Search ឬ Binary Search។
- **ការបង្ហាញលទ្ធផល:** បង្ហាញ Index ឬសារបរាជ័យ។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def linear_search(numbers, target):
    for i in range(len(numbers)):
        if numbers[i] == target:
            return i
    return -1
print(linear_search([4, 2, 7, 3], 7))  # បង្ហាញ: 2
\`\`\`

---

## 6. ហេតុអ្វីសំខាន់ក្នុងការរៀន Searching Algorithms?

- **ប្រសិទ្ធភាព:** ធ្វើឱ្យការស្វែងរកទិន្នន័យលឿនជាង។
- **ភាពច្បាស់លាស់:** ធ្វើឱ្យកម្មវិធីមានភាពត្រឹមត្រូវ។
- **ការអភិវឌ្ឍជំនាញ:** បង្កើនសមត្ថភាពគិតបែប Algorithmic។
- **ការប្រើប្រាស់ក្នុងកម្មវិធី:** ចាំបាច់សម្រាប់កម្មវិធីធំៗ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Linear Search</h3>
<p>បង្កើត Function Linear Search ដើម្បីស្វែងរក Target ក្នុង List។</p>
<pre><code class="language-python">
def linear_search(numbers, target):
    for i in range(len(numbers)):
        if numbers[i] == target:
            return i
    return -1
print(linear_search([5, 2, 8, 1], 8))  # 2
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Binary Search</h3>
<p>បង្កើត Function Binary Search ដើម្បីស្វែងរក Target ក្នុង List ដែលតម្រៀបរួច។</p>
<pre><code class="language-python">
def binary_search(numbers, target):
    left, right = 0, len(numbers) - 1
    while left <= right:
        mid = (left + right) // 2
        if numbers[mid] == target:
            return mid
        elif numbers[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
print(binary_search([1, 2, 5, 8], 5))  # 2
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Searching Algorithm គឺជាអ្វី?',
      options: [
        'ការរៀបចំទិន្នន័យតាមលំដាប់',
        'ការស្វែងរក Element ក្នុងទិន្នន័យ',
        'ការបង្កើត UI',
        'ការគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Searching Algorithm ស្វែងរក Element ក្នុងទិន្នន័យ។'
    },
    {
      question: 'តើ Linear Search មាន Time Complexity អ្វី?',
      options: [
        'O(n)',
        'O(log n)',
        'O(n²)',
        'O(1)'
      ],
      correct: 0,
      explanation: 'Linear Search មាន Time Complexity O(n)។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef linear_search(numbers, target):\n    for i in range(len(numbers)):\n        if numbers[i] == target:\n            return i\n    return -1\nprint(linear_search([5, 2, 8, 1], 8))\n```',
      options: ['0', '2', '-1', 'Error'],
      correct: 1,
      explanation: 'Linear Search រកឃើញ 8 នៅ Index 2។'
    },
    {
      question: 'តើ Binary Search មាន Time Complexity អ្វី?',
      options: [
        'O(n)',
        'O(log n)',
        'O(n²)',
        'O(1)'
      ],
      correct: 1,
      explanation: 'Binary Search មាន Time Complexity O(log n)។'
    },
    {
      question: 'តើ Binary Search តម្រូវឱ្យ List មានលក្ខណៈអ្វី?',
      options: [
        'មិនតម្រៀប',
        'តម្រៀបរួច',
        'ទទេ',
        'មាន Duplicates'
      ],
      correct: 1,
      explanation: 'Binary Search តម្រូវឱ្យ List តម្រៀបរួច។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef binary_search(numbers, target):\n    left, right = 0, len(numbers) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if numbers[mid] == target:\n            return mid\n        elif numbers[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\nprint(binary_search([1, 2, 5, 8], 5))\n```',
      options: ['0', '2', '-1', 'Error'],
      correct: 1,
      explanation: 'Binary Search រកឃើញ 5 នៅ Index 2។'
    },
    {
      question: 'តើ Linear Search មាន Space Complexity អ្វី?',
      options: [
        'O(n)',
        'O(1)',
        'O(n²)',
        'O(log n)'
      ],
      correct: 1,
      explanation: 'Linear Search ប្រើ Memory ថេរ (O(1))។'
    },
    {
      question: 'តើ Binary Search មាន Space Complexity អ្វី?',
      options: [
        'O(n)',
        'O(1)',
        'O(n²)',
        'O(log n)'
      ],
      correct: 1,
      explanation: 'Binary Search ប្រើ Memory ថេរ (O(1))។'
    },
    {
      question: 'តើ Linear Search សាកសមសម្រាប់ List ប្រភេទណា?',
      options: [
        'List ដែលតម្រៀបរួច',
        'List តូច ឬមិនតម្រៀប',
        'List ទទេ',
        'List ដែលមាន Duplicates'
      ],
      correct: 1,
      explanation: 'Linear Search សាកសមសម្រាប់ List តូច ឬមិនតម្រៀប។'
    },
    {
      question: 'តើ Searching Algorithms ជួយអ្វីក្នុងការសរសេរកម្មវិធី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យការស្វែងរកទិន្នន័យលឿនជាង',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Searching Algorithms ធ្វើឱ្យការស្វែងរកទិន្នន័យលឿនជាង។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef linear_search(numbers, target):\n    for i in range(len(numbers)):\n        if numbers[i] == target:\n            return i\n    return -1\nprint(linear_search([4, 2, 7, 3], 9))\n```',
      options: ['0', '2', '-1', 'Error'],
      correct: 2,
      explanation: 'Linear Search មិនរកឃើញ 9 ទេ ដូច្នេះត្រឡប់ -1។'
    },
    {
      question: 'តើ Binary Search លឿនជាង Linear Search ព្រោះអ្វី?',
      options: [
        'វាប្រើ Memory តិច',
        'វាបែងចែក List ជាពាក់កណ្តាល',
        'វាមិនតម្រូវឱ្យតម្រៀប',
        'វាប្រើ Loop ច្រើន'
      ],
      correct: 1,
      explanation: 'Binary Search បែងចែក List ជាពាក់កណ្តាល ដែលធ្វើឱ្យវាលឿនជាង (O(log n))។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលអនុវត្ត Linear Search Algorithm។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំលេខចំនួន ៥ ដើម្បីបន្ថែមទៅក្នុង List។
   - ស្នើសុំ Target លេខដែលត្រូវស្វែងរក។
2. **ការអនុវត្ត Algorithm:**
   - បង្កើត Function \`linear_search\` ដែលស្វែងរក Target ក្នុង List។
   - ត្រឡប់ Index ប្រសិនបើរកឃើញ ឬ -1 ប្រសិនបើមិនរកឃើញ។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារស្វាគមន៍ជាមួយឈ្មោះអ្នកប្រើ។
   - បង្ហាញ Index ឬសារបរាជ័យ។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលលេខមិនត្រឹមត្រូវ ឬ List ទទេ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
def linear_search(numbers, target):
    for i in range(len(numbers)):
        if numbers[i] == target:
            return i
    return -1

try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    numbers = []
    for i in range(5):
        num = float(input(f"បញ្ចូលលេខទី {i+1}: "))
        numbers.append(num)
    if not numbers:
        raise ValueError("List លេខមិនអាចទទេបាន!")
    target = float(input("បញ្ចូលលេខដែលត្រូវស្វែងរក: "))
    result = linear_search(numbers, target)
    print(f"សួស្តី {name}!")
    if result != -1:
        print(f"លេខ {target} ស្ថិតនៅ Index: {result}")
    else:
        print(f"លេខ {target} មិនមានក្នុង List!")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default ConceptLesson7_3Content;
