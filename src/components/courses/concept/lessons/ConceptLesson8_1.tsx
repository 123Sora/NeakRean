import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson8_1Content: LessonContent = {
  title: 'ភាពងាយស្រួលអានកូដ',
  objectives: [
    'យល់ពីសារៈសំខាន់នៃភាពងាយស្រួលអានកូដ',
    'ស្វែងយល់ពីបច្ចេកទេសដើម្បីធ្វើឱ្យកូដមានភាពច្បាស់លាស់',
    'រៀនការប្រើ Naming Conventions និង Formatting',
    'ស្គាល់គោលការណ៍នៃ Clean Code',
    'អនុវត្តការសរសេរកូដដែលងាយស្រួលអានក្នុង Python'
  ],
  content: `
# ភាពងាយស្រួលអានកូດ 📖💻

---

**ភាពងាយស្រួលអានកូដ (Code Readability)** គឺជាការសរសេរកូដដែលធ្វើឱ្យអ្នកអាន (អ្នកអភិវឌ្ឍន៍ផ្សេងទៀត ឬខ្លួនឯង) អាចយល់បានយ៉ាងងាយស្រួល។

---

## 1. សារៈសំខាន់នៃភាពងាយស្រួលអានកូដ

- **ការយល់ដឹង:** កូដដែលច្បាស់ធ្វើឱ្យអ្នកអភិវឌ្ឍន៍ផ្សេងទៀតយល់បានលឿន។
- **ការថែទាំ:** ងាយស្រួលក្នុងការកែប្រែ ឬបន្ថែម Features ថ្មី។
- **កាត់បន្ថយកំហុស:** កូដច្បាស់លាស់ជួយកាត់បន្ថយកំហុស។

**ឧទាហរណ៍កូដ Python (មិន Readable):**

\`\`\`python
def f(x,y):return x+y
print(f(5,3))
\`\`\`

**កូដ Readable:**

\`\`\`python
def add_numbers(num1, num2):
    return num1 + num2
result = add_numbers(5, 3)
print(result)  # បង្ហាញ: 8
\`\`\`

---

## 2. បច្ចេកទេសសម្រាប់ភាពងាយស្រួលអានកូដ

- **Naming Conventions:** ប្រើឈ្មោះដែលបង្ហាញអត្ថន័យ។
  - Variables: \`total_price\`, \`user_name\` (ជៀសវាង \`x\`, \`y\`)។
  - Functions: \`calculate_average\`, \`print_message\` (ជៀសវាង \`f\`, \`g\`)។
- **Consistent Formatting:** ប្រើ Indentation និង Spacing ស្របគ្នា។
  - ប្រើ PEP 8 (Python’s Style Guide)។
- **Modular Code:** បែងចែកកូដទៅជា Functions តូចៗ។
- **Avoid Complex Logic:** បំបែក Logic ស្មុគស្មាញទៅជាផ្នែកតូចៗ។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def calculate_average(scores):
    total = sum(scores)
    count = len(scores)
    return total / count if count > 0 else 0
print(calculate_average([90, 80, 70]))  # បង្ហាញ: 80.0
\`\`\`

---

## 3. Clean Code Principles

- **Single Responsibility:** Function មួយគួរធ្វើការងារតែមួយ។
- **Keep It Simple:** ជៀសវាងការសរសេរកូដស្មុគស្មាញ។
- **Use Meaningful Names:** ប្រើឈ្មោះដែលបង្ហាញអត្ថន័យ។
- **Avoid Duplication:** ប្រើ Functions ដើម្បីកាត់បន្ថយកូដដដែលៗ។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def print_student_info(name, scores):
    average = calculate_average(scores)
    print(f"ឈ្មោះ: {name}, មធ្យមភាគ: {average:.2f}")

def calculate_average(scores):
    return sum(scores) / len(scores) if scores else 0

print_student_info("សុខា", [90, 80, 70])  # បង្ហាញ: ឈ្មោះ: សុខា, មធ្យមភាគ: 80.00
\`\`\`

---

## 4. ការអនុវត្តភាពងាយស្រួលអានកូដ

- **ការបញ្ចូលទិន្នន័យ:** ប្រើឈ្មោះ Variables ដែលច្បាស់។
- **ការគណនា:** បែងចែក Logic ទៅជា Functions តូចៗ។
- **ការបង្ហាញលទ្ធផល:** បង្ហាញលទ្ធផលឱ្យច្បាស់លាស់។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def is_even(number):
    return number % 2 == 0

def filter_even_numbers(numbers):
    return [num for num in numbers if is_even(num)]

numbers = [1, 2, 3, 4, 5, 6]
even_numbers = filter_even_numbers(numbers)
print(f"លេខគូរ: {even_numbers}")  # បង្ហាញ: លេខគូរ: [2, 4, 6]
\`\`\`

---

## 5. ហេតុអ្វីសំខាន់ក្នុងការសរសេរកូដឱ្យងាយស្រួលអាន?

- **ការសហការ:** ងាយស្រួលសម្រាប់ក្រុមការងារ។
- **ការថែទាំ:** ងាយស្រួលកែប្រែកូដនៅពេលក្រោយ។
- **កាត់បន្ថយកំហុស:** កូដច្បាស់លាស់កាត់បន្ថយឱកាសកើតកំហុស។
- **ការអភិវឌ្ឍជំនាញ:** បង្កើនទម្លាប់សរសេរកូដប្រកបដោយវិជ្ជាជីវៈ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ កូដ Readable សម្រាប់ការគណនាមធ្យមភាគ</h3>
<p>បង្កើត Function ដែលគណនាមធ្យមភាគដោយប្រើឈ្មោះច្បាស់លាស់។</p>
<pre><code class="language-python">
def calculate_average(scores):
    total = sum(scores)
    count = len(scores)
    return total / count if count > 0 else 0
print(calculate_average([90, 80, 70]))  # 80.0
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ កូដ Readable សម្រាប់ត្រងលេខគូរ</h3>
<p>បង្កើត Function ដែលត្រងលេខគូរដោយប្រើ Modular Code។</p>
<pre><code class="language-python">
def is_even(number):
    return number % 2 == 0
def filter_even_numbers(numbers):
    return [num for num in numbers if is_even(num)]
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = filter_even_numbers(numbers)
print(f"លេខគូរ: {even_numbers}")  # លេខគូរ: [2, 4, 6]
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើភាពងាយស្រួលអានកូដ (Code Readability) គឺជាអ្វី?',
      options: [
        'ការសរសេរកូដស្មុគស្មាញ',
        'ការសរសេរកូដឱ្យងាយយល់',
        'ការបង្កើត UI',
        'ការគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Code Readability គឺជាការសរសេរកូដឱ្យងាយយល់។'
    },
    {
      question: 'តើហេតុអ្វីភាពងាយស្រួលអានកូដសំខាន់?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ជួយការថែទាំ និងកាត់បន្ថយកំហុស',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Code Readability ជួយការថែទាំ និងកាត់បន្ថយកំហុស។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef add_numbers(num1, num2):\n    return num1 + num2\nresult = add_numbers(5, 3)\nprint(result)\n```',
      options: ['8', '15', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function បូក 5 + 3 = 8។'
    },
    {
      question: 'តើ Naming Conventions ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកូដងាយយល់',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Naming Conventions ធ្វើឱ្យកូដងាយយល់។'
    },
    {
      question: 'តើ PEP 8 គឺជាអ្វី?',
      options: [
        'Python’s Style Guide',
        'Module សម្រាប់ Loop',
        'Module សម្រាប់ Function',
        'ឧបករណ៍ Debugging'
      ],
      correct: 0,
      explanation: 'PEP 8 ជា Python’s Style Guide សម្រាប់ Formatting។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef calculate_average(scores):\n    total = sum(scores)\n    count = len(scores)\n    return total / count if count > 0 else 0\nprint(calculate_average([90, 80, 70]))\n```',
      options: ['80.0', '240', 'Error', '0'],
      correct: 0,
      explanation: 'Function គណនា (90 + 80 + 70) / 3 = 80.0។'
    },
    {
      question: 'តើ Single Responsibility Principle មានន័យអ្វី?',
      options: [
        'Function មួយធ្វើការងារច្រើន',
        'Function មួយធ្វើការងារតែមួយ',
        'ការបង្កើត UI',
        'ការគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Single Responsibility Principle មានន័យថា Function មួយធ្វើការងារតែមួយ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef is_even(number):\n    return number % 2 == 0\ndef filter_even_numbers(numbers):\n    return [num for num in numbers if is_even(num)]\nnumbers = [1, 2, 3, 4]\nprint(filter_even_numbers(numbers))\n```',
      options: ['[1, 3]', '[2, 4]', 'Error', '[1, 2, 3, 4]'],
      correct: 1,
      explanation: 'Function ត្រងលេខគូរ [2, 4]។'
    },
    {
      question: 'តើការប្រើ Modular Code ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'បែងចែកកូដទៅជា Functions តូចៗ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Modular Code បែងចែកកូដទៅជា Functions តូចៗ។'
    },
    {
      question: 'តើអ្វីជាគោលបំណងនៃ Clean Code?',
      options: [
        'បង្កើនការប្រើ Memory',
        'ធ្វើឱ្យកូដងាយស្រួលអាន និងថែទាំ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Clean Code ធ្វើឱ្យកូដងាយស្រួលអាន និងថែទាំ។'
    },
    {
      question: 'តើការប្រើ Meaningful Names ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកូដបង្ហាញអត្ថន័យច្បាស់លាស់',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Meaningful Names ធ្វើឱ្យកូដបង្ហាញអត្ថន័យច្បាស់លាស់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef print_student_info(name, scores):\n    average = calculate_average(scores)\n    print(f"ឈ្មោះ: {name}, មធ្យមភាគ: {average:.2f}")\ndef calculate_average(scores):\n    return sum(scores) / len(scores) if scores else 0\nprint_student_info("សុខា", [90, 80, 70])\n```',
      options: [
        'ឈ្មោះ: សុខា, មធ្យមភាគ: 80.00',
        'ឈ្មោះ: សុខា, មធ្យមភាគ: 240.00',
        'Error',
        'គ្មានលទ្ធផល'
      ],
      correct: 0,
      explanation: 'Function បង្ហាញឈ្មោះ និងមធ្យមភាគ (90 + 80 + 70) / 3 = 80.00។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើបច្ចេកទេស Code Readability។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំពិន្ទុចំនួន ៣ ដើម្បីបន្ថែមទៅក្នុង List។
2. **ការអនុវត្ត Code Readability:**
   - បង្កើត Function \`calculate_average\` ដែលគណនាមធ្យមភាគ។
   - បង្កើត Function \`print_student_info\` ដើម្បីបង្ហាញឈ្មោះ និងមធ្យមភាគ។
   - ប្រើ Meaningful Names និង Consistent Formatting។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារស្វាគមន៍ជាមួយឈ្មោះអ្នកប្រើ។
   - បង្ហាញពិន្ទុ និងមធ្យមភាគ។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលពិន្ទុមិនត្រឹមត្រូវ ឬ List ទទេ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
def calculate_average(scores):
    total = sum(scores)
    count = len(scores)
    return total / count if count > 0 else 0

def print_student_info(name, scores):
    average = calculate_average(scores)
    print(f"សួស្តី {name}!")
    print(f"ពិន្ទុ: {scores}")
    print(f"មធ្យមភាគ: {average:.2f}")

try:
    student_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not student_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    scores = []
    for i in range(3):
        score = float(input(f"បញ្ចូលពិន្ទុទី {i+1}: "))
        scores.append(score)
    if not scores:
        raise ValueError("List ពិន្ទុមិនអាចទទេបាន!")
    print_student_info(student_name, scores)
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default ConceptLesson8_1Content;
