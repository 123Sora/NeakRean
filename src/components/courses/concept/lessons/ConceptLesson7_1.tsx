import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson7_1Content: LessonContent = {
  title: 'ក្បួនដោះស្រាយបញ្ហាមូលដ្ឋាន',
  objectives: [
    'យល់ពីគោលគំនិតនៃក្បួនដោះស្រាយបញ្ហា (Algorithms)',
    'ស្វែងយល់ពីក្បួនដោះស្រាយបញ្ហាមូលដ្ឋានក្នុងការសរសេរកម្មវិធី',
    'រៀនការអនុវត្តក្បួនដោះស្រាយបញ្ហាសាមញ្ញ',
    'ស្គាល់គោលគំនិត Time Complexity និង Space Complexity',
    'អនុវត្តក្បួនដោះស្រាយបញ្ហាក្នុងកម្មវិធី Python'
  ],
  content: `
# ក្បួនដោះស្រាយបញ្ហាមូលដ្ឋាន 🧩💻

---

**ក្បួនដោះស្រាយបញ្ហា (Algorithms)** គឺជាសំណុំនៃជំហានៗដែលប្រើដើម្បីដោះស្រាយបញ្ហាមួយបានយ៉ាងមានប្រសិទ្ធភាព។

---

## 1. គោលគំនិតនៃ Algorithms

Algorithm គឺជាការណែនាំជាជំហានៗដែលកម្មវិធីអនុវត្តដើម្បីសម្រេចគោលដៅ។
- **លក្ខណៈសំខាន់ៗ:**
  - **ច្បាស់លាស់:** ជំហាននីមួយៗត្រូវតែច្បាស់។
  - **មានកំណត់:** Algorithm ត្រូវមានចំណុចបញ្ចប់។
  - **ប្រសិទ្ធភាព:** ប្រើធនធាន (ពេលវេលា និង Memory) តិចបំផុត។

**ឧទាហរណ៍កូដ Python (គណនា Factorial):**

\`\`\`python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
print(factorial(5))  # បង្ហាញ: 120 (5 * 4 * 3 * 2 * 1)
\`\`\`

---

## 2. ក្បួនដោះស្រាយបញ្ហាមូលដ្ឋាន

- **ការគណនា:** ឧទាហរណ៍ គណនាផលបូក ឬ Factorial។
- **ការស្វែងរក:** ឧទាហរណ៍ ស្វែងរកលេខធំបំផុតក្នុង List។
- **ការតម្រៀប:** ឧទាហរណ៍ តម្រៀប List តាមលំដាប់។

**ឧទាហរណ៍កូដ (ស្វែងរកលេខធំបំផុត):**

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

## 3. Time Complexity និង Space Complexity

- **Time Complexity:** វាស់ចំនួនប្រតិបត្តិការដែល Algorithm ត្រូវការ។
  - O(n): Linear Time (ឧ. ឆ្លងកាត់ List ម្តង)។
  - O(1): Constant Time (ឧ. ចូលប្រើ Element ក្នុង Array)។
- **Space Complexity:** វាស់ចំនួន Memory ដែល Algorithm ប្រើ។
  - O(n): ប្រើ Memory សមាមាត្រនឹងទំហំ Input។
  - O(1): ប្រើ Memory ថេរ។

**ឧទាហរណ៍កូដ (ផលបូកលេខគូរ):**

\`\`\`python
def sum_even_numbers(numbers):
    total = 0  # Space Complexity: O(1)
    for num in numbers:  # Time Complexity: O(n)
        if num % 2 == 0:
            total += num
    return total
print(sum_even_numbers([1, 2, 3, 4]))  # បង្ហាញ: 6
\`\`\`

---

## 4. ការអនុវត្ត Algorithms

- **ការបញ្ចូលទិន្នន័យ:** ប្រមូល Input ពីអ្នកប្រើ។
- **ការគណនា:** អនុវត្ត Algorithm ដើម្បីគណនាលទ្ធផល។
- **ការបង្ហាញលទ្ធផល:** បង្ហាញលទ្ធផលច្បាស់លាស់។

**ឧទាហរណ៍កូដ (គណនា Fibonacci):**

\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
print(fibonacci(6))  # បង្ហាញ: 8 (0, 1, 1, 2, 3, 5, 8)
\`\`\`

---

## 5. ហេតុអ្វីសំខាន់ក្នុងការរៀន Algorithms?

- **ប្រសិទ្ធភាព:** ធ្វើឱ្យកម្មវិធីដំណើរការលឿន។
- **ភាពច្បាស់លាស់:** ធ្វើឱ្យកូដងាយស្រួលយល់។
- **ការដោះស្រាយបញ្ហាស្មុគស្មាញ:** អនុញ្ញាតឱ្យដោះស្រាយបញ្ហាធំៗបាន។
- **ការអភិវឌ្ឍជំនាញ:** បង្កើនសមត្ថភាពគិតបែបតក្កវិទ្យា។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការគណនា Factorial</h3>
<p>បង្កើត Function ដែលគណនា Factorial នៃលេខមួយ។</p>
<pre><code class="language-python">
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
print(factorial(5))  # 120
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
      question: 'តើ Algorithm គឺជាអ្វី?',
      options: [
        'ការសរសេរកូដដោយមិនគិត',
        'សំណុំជំហានៗដើម្បីដោះស្រាយបញ្ហា',
        'ការបង្កើត UI',
        'ការគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Algorithm ជាសំណុំជំហានៗដើម្បីដោះស្រាយបញ្ហា។'
    },
    {
      question: 'តើលក្ខណៈសំខាន់នៃ Algorithm គឺអ្វី?',
      options: [
        'មានកំណត់ និងច្បាស់លាស់',
        'ស្មុគស្មាញ និងប្រើ Memory ច្រើន',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 0,
      explanation: 'Algorithm ត្រូវមានកំណត់ និងច្បាស់លាស់។'
    },
    {
      question: 'តើ Time Complexity វាស់អ្វី?',
      options: [
        'ចំនួន Memory',
        'ចំនួនប្រតិបត្តិការ',
        'ការបង្កើត UI',
        'ការបង្កើត Function'
      ],
      correct: 1,
      explanation: 'Time Complexity វាស់ចំនួនប្រតិបត្តិការដែល Algorithm ត្រូវការ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\nprint(factorial(5))\n```',
      options: ['24', '120', 'Error', 'គ្មានលទ្ធផល'],
      correct: 1,
      explanation: 'Factorial នៃ 5 គឺ 5 * 4 * 3 * 2 * 1 = 120។'
    },
    {
      question: 'តើ Space Complexity វាស់អ្វី?',
      options: [
        'ចំនួនប្រតិបត្តិការ',
        'ចំនួន Memory ដែលប្រើ',
        'ការបង្កើត Loop',
        'ការបង្កើត UI'
      ],
      correct: 1,
      explanation: 'Space Complexity វាស់ចំនួន Memory ដែល Algorithm ប្រើ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef find_max(numbers):\n    max_num = numbers[0]\n    for num in numbers:\n        if num > max_num:\n            max_num = num\n    return max_num\nprint(find_max([3, 7, 2, 9, 1]))\n```',
      options: ['3', '7', '9', 'Error'],
      correct: 2,
      explanation: 'Function ស្វែងរកលេខធំបំផុត (9)។'
    },
    {
      question: 'តើ O(n) មានន័យអ្វី?',
      options: [
        'Constant Time',
        'Linear Time',
        'Quadratic Time',
        'Logarithmic Time'
      ],
      correct: 1,
      explanation: 'O(n) សំដៅលើ Linear Time ដែលប្រតិបត្តិការសមាមាត្រនឹងទំហំ Input។'
    },
    {
      question: 'តើ O(1) មានន័យអ្វី?',
      options: [
        'Constant Time',
        'Linear Time',
        'Quadratic Time',
        'Logarithmic Time'
      ],
      correct: 0,
      explanation: 'O(1) សំដៅលើ Constant Time ដែលប្រតិបត្តិការមានចំនួនថេរ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef sum_even_numbers(numbers):\n    total = 0\n    for num in numbers:\n        if num % 2 == 0:\n            total += num\n    return total\nprint(sum_even_numbers([1, 2, 3, 4]))\n```',
      options: ['6', '10', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function គណនាផលបូកលេខគូរ (2 + 4 = 6)។'
    },
    {
      question: 'តើ Algorithm មួយណាដែលមាន Space Complexity O(1)?',
      options: [
        'ការបង្កើត List ថ្មី',
        'ការប្រើ Variable ថេរ',
        'ការបង្កើត Array ទំហំ n',
        'ការបង្កើត UI'
      ],
      correct: 1,
      explanation: 'ការប្រើ Variable ថេរមាន Space Complexity O(1)។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\nprint(fibonacci(6))\n```',
      options: ['5', '8', 'Error', '13'],
      correct: 1,
      explanation: 'Fibonacci នៃ 6 គឺ 8 (0, 1, 1, 2, 3, 5, 8)។'
    },
    {
      question: 'តើ Algorithms ជួយអ្វីក្នុងការសរសេរកម្មវិធី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកម្មវិធីលឿន និងច្បាស់លាស់',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Algorithms ធ្វើឱ្យកម្មវិធីលឿន និងច្បាស់លាស់។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលអនុវត្ត Algorithm មូលដ្ឋានដើម្បីគណនាផលបូកនៃលេខការ៉េ។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំលេខចំនួន ៤ ដើម្បីបន្ថែមទៅក្នុង List។
2. **ការអនុវត្ត Algorithm:**
   - បង្កើត Function \`sum_squares\` ដែលគណនាផលបូកនៃលេខការ៉េក្នុង List។
   - ប្រើ Loop សម្រាប់គណនាលេខការ៉េ និងផលបូក។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារស្វាគមន៍ជាមួយឈ្មោះអ្នកប្រើ។
   - បង្ហាញផលបូកនៃលេខការ៉េ។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលលេខមិនត្រឹមត្រូវ ឬ List ទទេ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
def sum_squares(numbers):
    total = 0
    for num in numbers:
        total += num * num
    return total

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
    total = sum_squares(numbers)
    print(f"សួស្តី {name}! ផលបូកនៃលេខការ៉េ: {total}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default ConceptLesson7_1Content;
