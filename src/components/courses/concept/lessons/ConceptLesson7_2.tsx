import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson7_2Content: LessonContent = {
  title: 'Sorting Algorithms',
  objectives: [
    'យល់ពីគោលគំនិតនៃ Sorting Algorithms',
    'ស្វែងយល់ពី Sorting Algorithms មូលដ្ឋានដូចជា Bubble Sort និង Selection Sort',
    'រៀនការអនុវត្ត Sorting Algorithms ក្នុង Python',
    'ស្គាល់ Time Complexity នៃ Sorting Algorithms',
    'អនុវត្ត Sorting Algorithms ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# Sorting Algorithms 📊💻

---

**Sorting Algorithms** គឺជា Algorithm ដែលរៀបចំទិន្នន័យ (ឧ. List) តាមលំដាប់ជាក់លាក់ (កើនឡើង ឬថយចុះ)។

---

## 1. គោលគំនិតនៃ Sorting Algorithms

Sorting Algorithms ត្រូវបានប្រើដើម្បីរៀបចំទិន្នន័យឱ្យងាយស្រួលស្វែងរក ឬប្រើប្រាស់។
- **ប្រភេទនៃ Sorting:**
  - **Bubble Sort:** ប្តូរ Element ជាប់គ្នាប្រសិនបើនៅខុសលំដាប់។
  - **Selection Sort:** ជ្រើសរើស Element តូចបំផុត ហើយដាក់នៅខាងដើម។
  - **Built-in Sort:** Python’s \`sorted()\` ឬ \`.sort()\`។

**ឧទាហរណ៍កូដ Python (Bubble Sort):**

\`\`\`python
def bubble_sort(numbers):
    n = len(numbers)
    for i in range(n):
        for j in range(0, n - i - 1):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
    return numbers
print(bubble_sort([5, 2, 8, 1]))  # បង្ហាញ: [1, 2, 5, 8]
\`\`\`

---

## 2. Bubble Sort

- **របៀបដំណើរការ:** ប្រៀបធៀប Element ជាប់គ្នា និងប្តូរទីតាំងប្រសិនបើខុសលំដាប់។
- **Time Complexity:** O(n²) (Quadratic Time)។
- **Space Complexity:** O(1) (Constant Space)។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def bubble_sort(numbers):
    n = len(numbers)
    for i in range(n):
        for j in range(0, n - i - 1):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
    return numbers
print(bubble_sort([3, 1, 4, 1]))  # បង្ហាញ: [1, 1, 3, 4]
\`\`\`

---

## 3. Selection Sort

- **របៀបដំណើរការ:** ជ្រើសរើស Element តូចបំផុត ហើយដាក់នៅខាងដើម List។
- **Time Complexity:** O(n²) (Quadratic Time)។
- **Space Complexity:** O(1) (Constant Space)។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def selection_sort(numbers):
    n = len(numbers)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if numbers[j] < numbers[min_idx]:
                min_idx = j
        numbers[i], numbers[min_idx] = numbers[min_idx], numbers[i]
    return numbers
print(selection_sort([5, 2, 8, 1]))  # បង្ហាញ: [1, 2, 5, 8]
\`\`\`

---

## 4. Built-in Sort ក្នុង Python

- Python មាន Built-in Functions ដូចជា \`sorted()\` និង \`.sort()\`។
- **Time Complexity:** O(n log n) (Timsort Algorithm)។
- **ឧទាហរណ៍:**

\`\`\`python
numbers = [5, 2, 8, 1]
numbers.sort()
print(numbers)  # បង្ហាញ: [1, 2, 5, 8]
\`\`\`

---

## 5. ការអនុវត្ត Sorting Algorithms

- **ការបញ្ចូលទិន្នន័យ:** ប្រមូល List លេខពីអ្នកប្រើ។
- **ការតម្រៀប:** អនុវត្ត Bubble Sort ឬ Selection Sort។
- **ការបង្ហាញលទ្ធផល:** បង្ហាញ List ដែលបានតម្រៀប។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def bubble_sort(numbers):
    n = len(numbers)
    for i in range(n):
        for j in range(0, n - i - 1):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
    return numbers
print(bubble_sort([4, 2, 7, 3]))  # បង្ហាញ: [2, 3, 4, 7]
\`\`\`

---

## 6. ហេតុអ្វីសំខាន់ក្នុងការរៀន Sorting Algorithms?

- **ប្រសិទ្ធភាព:** ធ្វើឱ្យការស្វែងរកទិន្នន័យលឿនជាង។
- **ភាពច្បាស់លាស់:** ធ្វើឱ្យទិន្នន័យមានលំដាប់។
- **ការអភិវឌ្ឍជំនាញ:** បង្កើនសមត្ថភាពគិតបែប Algorithmic។
- **ការប្រើប្រាស់ក្នុងកម្មវិធី:** ចាំបាច់សម្រាប់កម្មវិធីធំៗ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Bubble Sort</h3>
<p>បង្កើត Function Bubble Sort ដើម្បីតម្រៀប List។</p>
<pre><code class="language-python">
def bubble_sort(numbers):
    n = len(numbers)
    for i in range(n):
        for j in range(0, n - i - 1):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
    return numbers
print(bubble_sort([5, 2, 8, 1]))  # [1, 2, 5, 8]
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Selection Sort</h3>
<p>បង្កើត Function Selection Sort ដើម្បីតម្រៀប List�।</p>
<pre><code class="language-python">
def selection_sort(numbers):
    n = len(numbers)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if numbers[j] < numbers[min_idx]:
                min_idx = j
        numbers[i], numbers[min_idx] = numbers[min_idx], numbers[i]
    return numbers
print(selection_sort([5, 2, 8, 1]))  # [1, 2, 5, 8]
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Sorting Algorithm គឺជាអ្វី?',
      options: [
        'ការស្វែងរកលេខធំបំផុត',
        'ការរៀបចំទិន្នន័យតាមលំដាប់',
        'ការបង្កើត UI',
        'ការគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Sorting Algorithm រៀបចំទិន្នន័យតាមលំដាប់។'
    },
    {
      question: 'តើ Bubble Sort មាន Time Complexity អ្វី?',
      options: [
        'O(n)',
        'O(n²)',
        'O(n log n)',
        'O(1)'
      ],
      correct: 1,
      explanation: 'Bubble Sort មាន Time Complexity O(n²)។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef bubble_sort(numbers):\n    n = len(numbers)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if numbers[j] > numbers[j + 1]:\n                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]\n    return numbers\nprint(bubble_sort([5, 2, 8, 1]))\n```',
      options: ['[5, 2, 8, 1]', '[1, 2, 5, 8]', '[8, 5, 2, 1]', 'Error'],
      correct: 1,
      explanation: 'Bubble Sort តម្រៀប List តាមលំដាប់កើនឡើង។'
    },
    {
      question: 'តើ Selection Sort មាន Space Complexity អ្វី?',
      options: [
        'O(n)',
        'O(1)',
        'O(n²)',
        'O(n log n)'
      ],
      correct: 1,
      explanation: 'Selection Sort ប្រើ Memory ថេរ (O(1))។'
    },
    {
      question: 'តើ Python’s `sorted()` មាន Time Complexity អ្វី?',
      options: [
        'O(n)',
        'O(n²)',
        'O(n log n)',
        'O(1)'
      ],
      correct: 2,
      explanation: 'Python’s `sorted()` ប្រើ Timsort ដែលមាន Time Complexity O(n log n)។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef selection_sort(numbers):\n    n = len(numbers)\n    for i in range(n):\n        min_idx = i\n        for j in range(i + 1, n):\n            if numbers[j] < numbers[min_idx]:\n                min_idx = j\n        numbers[i], numbers[min_idx] = numbers[min_idx], numbers[i]\n    return numbers\nprint(selection_sort([5, 2, 8, 1]))\n```',
      options: ['[5, 2, 8, 1]', '[1, 2, 5, 8]', '[8, 5, 2, 1]', 'Error'],
      correct: 1,
      explanation: 'Selection Sort តម្រៀប List តាមលំដាប់កើនឡើង។'
    },
    {
      question: 'តើ Bubble Sort ធ្វើអ្វី?',
      options: [
        'ជ្រើសរើស Element តូចបំផុត',
        'ប្តូរ Element ជាប់គ្នាប្រសិនបើខុសលំដាប់',
        'ស្វែងរកលេខធំបំផុត',
        'បង្កើត UI'
      ],
      correct: 1,
      explanation: 'Bubble Sort ប្តូរ Element ជាប់គ្នាប្រសិនបើខុសលំដាប់។'
    },
    {
      question: 'តើ Selection Sort ធ្វើអ្វី?',
      options: [
        'ប្តូរ Element ជាប់គ្នា',
        'ជ្រើសរើស Element តូចបំផុត ហើយដាក់នៅខាងដើម',
        'ស្វែងរកលេខធំបំផុត',
        'បង្កើត UI'
      ],
      correct: 1,
      explanation: 'Selection Sort ជ្រើសរើស Element តូចបំផុត ហើយដាក់នៅខាងដើម។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nnumbers = [5, 2, 8, 1]\nnumbers.sort()\nprint(numbers)\n```',
      options: ['[5, 2, 8, 1]', '[1, 2, 5, 8]', '[8, 5, 2, 1]', 'Error'],
      correct: 1,
      explanation: '`.sort()` តម្រៀប List តាមលំដាប់កើនឡើង។'
    },
    {
      question: 'តើ Sorting Algorithms ជួយអ្វីក្នុងការសរសេរកម្មវិធី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យការស្វែងរកទិន្នន័យលឿនជាង',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Sorting Algorithms ធ្វើឱ្យការស្វែងរកទិន្នន័យលឿនជាង។'
    },
    {
      question: 'តើ Bubble Sort មាន Space Complexity អ្វី?',
      options: [
        'O(n)',
        'O(1)',
        'O(n²)',
        'O(n log n)'
      ],
      correct: 1,
      explanation: 'Bubble Sort ប្រើ Memory ថេរ (O(1))។'
    },
    {
      question: 'តើ Sorting Algorithm មួយណាដែលមាន Time Complexity O(n log n)?',
      options: [
        'Bubble Sort',
        'Selection Sort',
        'Python’s `sorted()`',
        'ការស្វែងរកលេខធំបំផុត'
      ],
      correct: 2,
      explanation: 'Python’s `sorted()` ប្រើ Timsort ដែលមាន Time Complexity O(n log n)។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលអនុវត្ត Bubble Sort Algorithm។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំលេខចំនួន ៥ ដើម្បីបន្ថែមទៅក្នុង List។
2. **ការអនុវត្ត Algorithm:**
   - បង្កើត Function \`bubble_sort\` ដែលអនុវត្ត Bubble Sort។
   - ប្តូរ Element ជាប់គ្នាប្រសិនបើខុសលំដាប់។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារស្វាគមន៍ជាមួយឈ្មោះអ្នកប្រើ។
   - បង្ហាញ List មុន និងក្រោយតម្រៀប។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលលេខមិនត្រឹមត្រូវ ឬ List ទទេ�।

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
def bubble_sort(numbers):
    n = len(numbers)
    for i in range(n):
        for j in range(0, n - i - 1):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
    return numbers

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
    print(f"សួស្តី {name}! List មុនតម្រៀប: {numbers}")
    sorted_numbers = bubble_sort(numbers)
    print(f"List ក្រោយតម្រៀប: {sorted_numbers}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default ConceptLesson7_2Content;
