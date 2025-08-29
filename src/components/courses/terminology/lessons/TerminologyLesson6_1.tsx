import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson6_1Content: LessonContent = {
  title: 'វាក្យស័ព្ទទាក់ទងនឹងក្បួនដោះស្រាយ',
  objectives: [
    'យល់ពីអត្ថន័យនៃវាក្យស័ព្ទទាក់ទងនឹងក្បួនដោះស្រាយ (Algorithm Terminology)',
    'ស្គាល់ពាក្យសំខាន់ៗដូចជា algorithm, complexity, iteration, និង recursion',
    'រៀនការប្រើក្បួនដោះស្រាយក្នុង Python',
    'ស្វែងយល់ពីគោលគំនិតនៃការវិភាគប្រសិទ្ធភាពនៃក្បួនដោះស្រាយ',
    'អនុវត្តការប្រើក្បួនដោះស្រាយក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# វាក្យស័ព្ទទាក់ទងនឹងក្បួនដោះស្រាយ 📚💻

---

**វាក្យស័ព្ទទាក់ទងនឹងក្បួនដោះស្រាយ (Algorithm Terminology)** គឺជាពាក្យបច្ចេកទេសដែលប្រើសម្រាប់ពន្យល់អំពីជំហាន និងវិធីសាស្ត្រក្នុងការដោះស្រាយបញ្ហាដោយប្រើកម្មវិធីកុំព្យូទ័រ។

---

## 1. អ្វីទៅជា Algorithm Terminology?

- **Algorithm:** សំណុំនៃជំហាន ឬការណែនាំដែលប្រើដើម្បីដោះស្រាយបញ្ហាមួយ។
- **សារៈសំខាន់:**
  - ផ្តល់វិធីសាស្ត្រច្បាស់លាស់សម្រាប់ដោះស្រាយបញ្ហា។
  - ជួយបង្កើនប្រសិទ្ធភាពនៃកម្មវិធី។
  - អនុញ្ញាតឱ្យគ្រប់គ្រងទិន្នន័យស្មុគស្មាញ។

**ពាក្យសំខាន់ៗ:**
- **Algorithm:** ក្បួនដោះស្រាយ ឬជំហានជាបន្តបន្ទាប់សម្រាប់ដោះស្រាយបញ្ហា។
- **Complexity:** ការវាស់វែងប្រសិទ្ធភាពនៃក្បួនដោះស្រាយ (ឧ. ពេលវេលា និងទំហំអង្គចងចាំ)។
- **Iteration:** ការធ្វើម្តងហើយម្តងទៀតនៃជំហានមួយ ឬច្រើនដើម្បីសម្រេចលទ្ធផល។
- **Recursion:** ក្បួនដោះស្រាយដែលហៅខ្លួនឯងជាមួយបញ្ហាតូចជាង។

---

## 2. ការប្រើ Algorithm Terminology ក្នុង Python

- **ឧទាហរណ៍ Algorithm (ការគណនាផលបូក):**
  \`\`\`python
  def calculate_sum(n):
      total = 0
      for i in range(n + 1):  # Iteration
          total += i
      return total
  print(calculate_sum(5))  # បង្ហាញ: 15 (0+1+2+3+4+5)
  \`\`\`
- **ឧទាហរណ៍ Recursion (ការគណនា factorial):**
  \`\`\`python
  def factorial(n):
      if n == 0 or n == 1:  # Base case
          return 1
      return n * factorial(n - 1)  # Recursive call
  print(factorial(5))  # បង្ហាញ: 120 (5*4*3*2*1)
  \`\`\`
- **ឧទាហរណ៍ Complexity:**
  - ក្បួន \`calculate_sum\` មាន **time complexity** O(n) ព្រោះវាធ្វើការ n ដង។
  - ក្បួន \`factorial\` មាន **space complexity** O(n) ដោយសារការហៅ recursion។

---

## 3. ការអនុវត្តក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ (Iteration):**

\`\`\`python
# គណនាផលបូកនៃលេខគូ
def sum_even_numbers(n):
    total = 0
    for i in range(2, n + 1, 2):
        total += i
    return total
print(sum_even_numbers(10))  # បង្ហាញ: 30 (2+4+6+8+10)
\`\`\`

**ឧទាហរណ៍កូដ (Recursion):**

\`\`\`python
# គណនាលេខ Fibonacci
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
print(fibonacci(6))  # បង្ហាញ: 8 (លេខ Fibonacci ទី 6)
\`\`\`

---

## 4. ហេតុអ្វីសំខាន់?

- **ប្រសិទ្ធភាព:** ក្បួនដោះស្រាយជួយកាត់បន្ថយពេលវេលា និងធនធាន។
- **ភាពច្បាស់លាស់:** ផ្តល់ជំហានច្បាស់លាស់សម្រាប់ដោះស្រាយបញ្ហា។
- **ភាពបត់បែន:** អាចអនុវត្តលើបញ្ហាផ្សេងៗ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Iteration</h3>
<p>គណនាផលបូកនៃលេខ។</p>
<pre><code class="language-python">
def sum_numbers(n):
    total = 0
    for i in range(1, n + 1):
        total += i
    return total
print(sum_numbers(5))  # បង្ហាញ: 15
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Recursion</h3>
<p>គណនា factorial។</p>
<pre><code class="language-python">
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)
print(factorial(4))  # បង្ហាញ: 24
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Algorithm សំដៅលើអ្វី?',
      options: [
        'រចនាសម្ព័ន្ធទិន្នន័យ',
        'សំណុំនៃជំហានដើម្បីដោះស្រាយបញ្ហា',
        'ការគ្រប់គ្រង Hardware',
        'ការបង្កើត UI'
      ],
      correct: 1,
      explanation: 'Algorithm ជាសំណុំនៃជំហានដើម្បីដោះស្រាយបញ្ហា។'
    },
    {
      question: 'តើ Complexity វាស់វែងអ្វី?',
      options: [
        'ទំហំកូដ',
        'ប្រសិទ្ធភាពនៃក្បួនដោះស្រាយ',
        'ចំនួនអថេរ',
        'ល្បឿននៃ Hardware'
      ],
      correct: 1,
      explanation: 'Complexity វាស់វែងប្រសិទ្ធភាពនៃក្បួនដោះស្រាយ។'
    },
    {
      question: 'តើ Iteration សំដៅលើអ្វី?',
      options: [
        'ការហៅខ្លួនឯង',
        'ការធ្វើម្តងហើយម្តងទៀតនៃជំហាន',
        'ការផ្ទុកទិន្នន័យ',
        'ការគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Iteration ជាការធ្វើម្តងហើយម្តងទៀតនៃជំហាន។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef sum_numbers(n):\n    total = 0\n    for i in range(n + 1):\n        total += i\n    return total\nprint(sum_numbers(3))\n```',
      options: ['6', '3', '9', 'Error'],
      correct: 0,
      explanation: 'កូដគណនា 0+1+2+3 = 6។'
    },
    {
      question: 'តើ Recursion សំដៅលើអ្វី?',
      options: [
        'ការធ្វើម្តងហើយម្តងទៀតនៃជំហាន',
        'ក្បួនដោះស្រាយដែលហៅខ្លួនឯង',
        'ការផ្ទុកទិន្នន័យ',
        'ការគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Recursion ជាក្បួនដោះស្រាយដែលហៅខ្លួនឯង។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    return n * factorial(n - 1)\nprint(factorial(3))\n```',
      options: ['3', '6', '9', 'Error'],
      correct: 1,
      explanation: 'Factorial(3) = 3*2*1 = 6។'
    },
    {
      question: 'តើ Algorithm ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ផ្តល់ជំហានច្បាស់លាស់សម្រាប់ដោះស្រាយបញ្ហា',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Algorithm ផ្តល់ជំហានច្បាស់លាស់សម្រាប់ដោះស្រាយបញ្ហា។'
    },
    {
      question: 'តើ Time Complexity O(n) មានន័យថាអ្វី?',
      options: [
        'ពេលវេលាថេរ',
        'ពេលវេលាកើនតាម n',
        'ពេលវេលាកាត់បន្ថយ',
        'គ្មានឥទ្ធិពល'
      ],
      correct: 1,
      explanation: 'O(n) មានន័យថាពេលវេលាកើនតាមទំហំ n។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef sum_even(n):\n    total = 0\n    for i in range(2, n + 1, 2):\n        total += i\n    return total\nprint(sum_even(6))\n```',
      options: ['12', '6', '18', 'Error'],
      correct: 0,
      explanation: 'កូដគណនា 2+4+6 = 12។'
    },
    {
      question: 'តើ Recursion ត្រូវការអ្វីដើម្បីបញ្ឈប់?',
      options: [
        'Loop',
        'Base case',
        'Variable',
        'Condition'
      ],
      correct: 1,
      explanation: 'Recursion ត្រូវការ base case ដើម្បីបញ្ឈប់។'
    },
    {
      question: 'តើ Algorithm ធ្វើឱ្យកូដមានអត្ថន័យដោយរបៀបណា?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យការដោះស្រាយបញ្ហាកាន់តែងាយស្រួល',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Algorithm ធ្វើឱ្យការដោះស្រាយបញ្ហាកាន់តែងាយស្រួល។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\nprint(fibonacci(4))\n```',
      options: ['2', '3', '5', 'Error'],
      correct: 1,
      explanation: 'Fibonacci(4) = Fibonacci(3) + Fibonacci(2) = 2 + 1 = 3។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Algorithm Terminology។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំលេខ n (Integer) ដើម្បីគណនាផលបូកនៃលេខគត់។
2. **ការអនុវត្ត:**
   - បង្កើតអនុគមន៍ដែលប្រើ **iteration** ដើម្បីគណនាផលបូកនៃលេខគត់ពី 1 ដល់ n។
   - បង្កើតអនុគមន៍ដែលប្រើ **recursion** ដើម្បីគណនាផលបូកនៃលេខគត់ពី 1 ដល់ n។
   - បង្ហាញលទ្ធផលទាំងពីរពី iteration និង recursion។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដូចជា: "[ឈ្មោះ]: ផលបូក (iteration) = [លទ្ធផល], ផលបូក (recursion) = [លទ្ធផល]"។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីលេខមិនមែនជាលេខគត់ ឬលេខអវិជ្ជមាន។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    # Variable សម្រាប់ផ្ទុកឈ្មោះ
    user_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # Variable សម្រាប់ផ្ទុកលេខ
    n = int(input("បញ្ចូលលេខ n: "))
    if n < 0:
        raise ValueError("លេខ n មិនអាចអវិជ្ជមានបាន!")
    
    # អនុគមន៍ប្រើ iteration
    def sum_iterative(n):
        total = 0
        for i in range(1, n + 1):
            total += i
        return total
    
    # អនុគមន៍ប្រើ recursion
    def sum_recursive(n):
        if n <= 0:
            return 0
        return n + sum_recursive(n - 1)
    
    # គណនាលទ្ធផល
    iterative_result = sum_iterative(n)
    recursive_result = sum_recursive(n)
    
    # បង្ហាញលទ្ធផល
    print(f"{user_name}: ផលបូក (iteration) = {iterative_result}, ផលបូក (recursion) = {recursive_result}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson6_1Content;