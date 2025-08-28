import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson8_2Content: LessonContent = {
  title: 'ការបញ្ចេញមតិ និងឯកសារ',
  objectives: [
    'យល់ពីសារៈសំខាន់នៃការបញ្ចេញមតិ (Commenting) និងឯកសារ (Documentation)',
    'ស្វែងយល់ពីប្រភេទនៃ Comments នៅក្នុង Python',
    'រៀនការសរសេរ Comments និង Docstrings ដែលមានអត្ថន័យ',
    'ស្គាល់គោលការណ៍នៃការធ្វើឯកសារកម្មវិធី',
    'អនុវត្តការបញ្ចេញមតិ និងឯកសារក្នុងកម្មវិធី Python'
  ],
  content: `
# ការបញ្ចេញមតិ និងឯកសារ ✍️💻

---

**ការបញ្ចេញមតិ (Commenting)** និង**ឯកសារ (Documentation)** គឺជាការសរសេរព័ត៌មានបន្ថែមនៅក្នុងកូដដើម្បីពន្យល់អំពីអ្វីដែលកូដធ្វើ និងជួយអ្នកអានយល់បានច្បាស់។

---

## 1. សារៈសំខាន់នៃ Commenting និង Documentation

- **ការពន្យល់:** ជួយពន្យល់ Logic ឬគោលបំណងនៃកូដ។
- **ការសហការ:** ធ្វើឱ្យអ្នកអភិវឌ្ឍន៍ផ្សេងទៀតយល់បាន។
- **ការថែទាំ:** ងាយស្រួលក្នុងការកែប្រែកូដនៅពេលក្រោយ។
- **ការអភិវឌ្ឍជំនាញ:** បង្កើនទម្លាប់សរសេរកូដប្រកបដោយវិជ្ជាជីវៈ។

**ឧទាហរណ៍កូដ Python (គ្មាន Comments):**

\`\`\`python
def f(x):
    return x * x
print(f(5))
\`\`\`

**កូដជាមួយ Comments និង Docstring:**

\`\`\`python
def square_number(number):
    """គណនាការ៉េនៃលេខមួយ។
    
    Args:
        number (int): លេខដែលត្រូវគណនាការ៉េ។
    Returns:
        int: ការ៉េនៃលេខ។
    """
    return number * number

# បង្ហាញការ៉េនៃលេខ 5
result = square_number(5)
print(result)  # បង្ហាញ: 25
\`\`\`

---

## 2. ប្រភេទនៃ Comments ក្នុង Python

- **Single-line Comments:** ប្រើ \`#\` សម្រាប់ពន្យល់មួយជួរ។
  \`\`\`python
  # បន្ថែមលេខទៅក្នុង List
  numbers.append(10)
  \`\`\`
- **Multi-line Comments:** ប្រើ \`"""\` ឬ \`'''\` សម្រាប់ពន្យល់ច្រើនជួរ។
  \`\`\`python
  """
  នេះជា Multi-line Comment
  ប្រើសម្រាប់ពន្យល់ Logic ស្មុគស្មាញ
  """
  \`\`\`
- **Docstrings:** ប្រើ \`"""\` ឬ \`'''\` នៅខាងក្នុង Function/Class/Module សម្រាប់ឯកសារ។
  \`\`\`python
  def add_numbers(a, b):
      """បូកលេខពីរចំនួន។"""
      return a + b
  \`\`\`

---

## 3. គោលការណ៍នៃការសរសេរ Comments និង Docstrings

- **ភាពច្បាស់លាស់:** សរសេរ Comments ដែលបង្ហាញអត្ថន័យច្បាស់។
- **ជៀសវាងភាពច្បាស់ហួសហេតុ:** កុំសរសេរ Comments សម្រាប់កូដដែលច្បាស់ស្រាប់។
  - ឧទាហរណ៍ មិនល្អ: \`# return x\`។
- **ប្រើ Docstrings:** សម្រាប់ Functions, Classes, និង Modules។
- **ធ្វើបច្ចុប្បន្នភាព:** ធ្វើបច្ចុប្បន្នភាព Comments នៅពេលកែកូដ។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def calculate_average(scores):
    """គណនាមធ្យមភាគនៃ List ពិន្ទុ។
    
    Args:
        scores (list): List នៃពិន្ទុ។
    Returns:
        float: មធ្យមភាគនៃពិន្ទុ ឬ 0 ប្រសិនបើ List ទទេ។
    """
    return sum(scores) / len(scores) if scores else 0

# បង្ហាញមធ្យមភាគនៃពិន្ទុ
print(calculate_average([90, 80, 70]))  # បង្ហាញ: 80.0
\`\`\`

---

## 4. ការធ្វើឯកសារកម្មវិធី

- **Module Documentation:** ប្រើ Docstring នៅខាងលើនៃ File។
  \`\`\`python
  """Module សម្រាប់គណនាពិន្ទុសិស្ស។"""
  \`\`\`
- **Function Documentation:** ប្រើ Docstring ដើម្បីពន្យល់ Args និង Returns។
- **External Documentation:** បង្កើត README ឬ User Manual សម្រាប់ Project។

**ឧទាហរណ៍កូដ:**

\`\`\`python
"""Module សម្រាប់គ្រប់គ្រងព័ត៌មានសិស្ស។"""

def print_student_info(name, scores):
    """បង្ហាញព័ត៌មានសិស្ស និងមធ្យមភាគ។
    
    Args:
        name (str): ឈ្មោះសិស្ស។
        scores (list): List នៃពិន្ទុ។
    """
    average = calculate_average(scores)
    print(f"ឈ្មោះ: {name}, មធ្យមភាគ: {average:.2f}")

def calculate_average(scores):
    """គណនាមធ្យមភាគនៃ List ពិន្ទុ។"""
    return sum(scores) / len(scores) if scores else 0

# បង្ហាញព័ត៌មានសិស្ស
print_student_info("សុខា", [90, 80, 70])
\`\`\`

---

## 5. ការអនុវត្ត Commenting និង Documentation

- **ការបញ្ចេញមតិ:** បន្ថែម Comments ដើម្បីពន្យល់ Logic សំខាន់ៗ។
- **ការធ្វើឯកសារ:** ប្រើ Docstrings សម្រាប់ Functions និង Modules។
- **ការបង្ហាញលទ្ធផល:** បន្ថែម Comments ដើម្បីពន្យល់លទ្ធផល។

**ឧទាហរណ៍កូด:**

\`\`\`python
def is_even(number):
    """ពិនិត្យថាតើលេខជាគូរឬអត់។"""
    return number % 2 == 0

def filter_even_numbers(numbers):
    """ត្រងលេខគូរពី List។"""
    return [num for num in numbers if is_even(num)]

# ត្រងលេខគូរពី List
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = filter_even_numbers(numbers)
print(f"លេខគូរ: {even_numbers}")  # បង្ហាញ: លេខគូរ: [2, 4, 6]
\`\`\`

---

## 6. ហេតុអ្វីសំខាន់ក្នុងការបញ្ចេញមតិ និងធ្វើឯកសារ?

- **ការយល់ដឹង:** ជួយអ្នកអភិវឌ្ឍន៍ផ្សេងទៀតយល់កូដ។
- **ការថែទាំ:** ងាយស្រួលក្នុងការកែប្រែកូដ។
- **ការអភិវឌ្ឍជំនាញ:** បង្កើនទម្លាប់សរសេរកូដប្រកបដោយវិជ្ជាជីវៈ។
- **ភាពជឿជាក់:** ធ្វើឱ្យកម្មវិធីមានគុណភាពខ្ពស់។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Comments និង Docstring សម្រាប់ការគណនាមធ្យមភាគ</h3>
<p>បន្ថែម Comments និង Docstring ទៅក្នុង Function។</p>
<pre><code class="language-python">
def calculate_average(scores):
    """គណនាមធ្យមភាគនៃ List ពិន្ទុ។
    
    Args:
        scores (list): List នៃពិន្ទុ។
    Returns:
        float: មធ្យមភាគនៃពិន្ទុ ឬ 0 ប្រសិនបើ List ទទេ។
    """
    # គណនាផលបូកនៃពិន្ទុ
    total = sum(scores)
    # រាប់ចំនួនពិន្ទុ
    count = len(scores)
    # ត្រឡប់មធ្យមភាគ
    return total / count if count > 0 else 0
print(calculate_average([90, 80, 70]))  # បង្ហាញ: 80.0
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Comments និង Docstring សម្រាប់ត្រងលេខគូរ</h3>
<p>បន្ថែម Comments និង Docstring ទៅក្នុង Function។</p>
<pre><code class="language-python">
def is_even(number):
    """ពិនិត្យថាតើលេខជាគូរឬអត់។
    
    Args:
        number (int): លេខដែលត្រូវពិនិត្យ។
    Returns:
        bool: True ប្រសិនបើលេខជាគូរ, False បើមិនមែន។
    """
    return number % 2 == 0

def filter_even_numbers(numbers):
    """ត្រងលេខគូរពី List។
    
    Args:
        numbers (list): List នៃលេខ។
    Returns:
        list: List នៃលេខគូរ។
    """
    return [num for num in numbers if is_even(num)]

# ត្រងលេខគូរពី List
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = filter_even_numbers(numbers)
print(f"លេខគូរ: {even_numbers}")  # បង្ហាញ: លេខគូរ: [2, 4, 6]
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Commenting និង Documentation គឺជាអ្វី?',
      options: [
        'ការសរសេរកូដស្មុគស្មាញ',
        'ការសរសេរព័ត៌មានបន្ថែមដើម្បីពន្យល់កូដ',
        'ការបង្កើត UI',
        'ការគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Commenting និង Documentation ជាការសរសេរព័ត៌មានបន្ថែមដើម្បីពន្យល់កូដ។'
    },
    {
      question: 'តើ Single-line Comment ក្នុង Python ប្រើអ្វី?',
      options: [
        '"""',
        '#',
        '//',
        '/* */'
      ],
      correct: 1,
      explanation: 'Single-line Comment ក្នុង Python ប្រើ #។'
    },
    {
      question: 'តើ Docstring គឺជាអ្វី?',
      options: [
        'Comment សម្រាប់ពន្យល់ Function/Class/Module',
        'Comment សម្រាប់ Loop',
        'Comment សម្រាប់ UI',
        'Comment សម្រាប់ Hardware'
      ],
      correct: 0,
      explanation: 'Docstring ជា Comment សម្រាប់ពន្យល់ Function/Class/Module។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef square_number(number):\n    """គណនាការ៉េនៃលេខមួយ។"""\n    return number * number\nprint(square_number(5))\n```',
      options: ['25', '10', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function គណនាការ៉េនៃ 5 = 25។'
    },
    {
      question: 'តើ Multi-line Comment ក្នុង Python ប្រើអ្វី?',
      options: [
        '#',
        '"""',
        '//',
        '/* */'
      ],
      correct: 1,
      explanation: 'Multi-line Comment ក្នុង Python ប្រើ """ ' 
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef calculate_average(scores):\n    """គណនាមធ្យមភាគនៃ List ពិន្ទុ។"""\n    return sum(scores) / len(scores) if scores else 0\nprint(calculate_average([90, 80, 70]))\n```',
      options: ['80.0', '240', 'Error', '0'],
      correct: 0,
      explanation: 'Function គណនា (90 + 80 + 70) / 3 = 80.0។'
    },
    {
      question: 'តើហេតុអ្វីត្រូវធ្វើបច្ចុប្បន្នភាព Comments?',
      options: [
        'ដើម្បីបង្កើនភាពស្មុគស្មាញ',
        'ដើម្បីធ្វើឱ្យ Comments ស្របនឹងកូដ',
        'ដើម្បីបង្កើត UI',
        'ដើម្បីគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'ត្រូវធ្វើបច្ចុប្បន្នភាព Comments ដើម្បីធ្វើឱ្យស្របនឹងកូដ។'
    },
    {
      question: 'តើ Docstring គួរពន្យល់អ្វី?',
      options: [
        'Args និង Returns នៃ Function',
        'UI នៃកម្មវិធី',
        'Hardware នៃកម្មវិធី',
        'Loop នៃកម្មវិធី'
      ],
      correct: 0,
      explanation: 'Docstring គួរពន្យល់ Args និង Returns នៃ Function។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef is_even(number):\n    """ពិនិត្យថាតើលេខជាគូរឬអត់។"""\n    return number % 2 == 0\ndef filter_even_numbers(numbers):\n    """ត្រងលេខគូរពី List។"""\n    return [num for num in numbers if is_even(num)]\nprint(filter_even_numbers([1, 2, 3, 4]))\n```',
      options: ['[1, 3]', '[2, 4]', 'Error', '[1, 2, 3, 4]'],
      correct: 1,
      explanation: 'Function ត្រងលេខគូរ [2, 4]។'
    },
    {
      question: 'តើ Module Documentation គួរដាក់នៅឯណា?',
      options: [
        'ខាងក្រោម Function',
        'ខាងលើ File',
        'នៅក្នុង Loop',
        'នៅក្នុង UI'
      ],
      correct: 1,
      explanation: 'Module Documentation គួរដាក់នៅខាងលើ File។'
    },
    {
      question: 'តើ Commenting ជួយអ្វីក្នុងការសរសេរកម្មវិធី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ជួយពន្យល់ Logic និងធ្វើឱ្យកូដងាយយល់',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Commenting ជួយពន្យល់ Logic និងធ្វើឱ្យកូដងាយយល់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef print_student_info(name, scores):\n    """បង្ហាញព័ត៌មានសិស្ស និងមធ្យមភាគ។"""\n    average = calculate_average(scores)\n    print(f"ឈ្មោះ: {name}, មធ្យមភាគ: {average:.2f}")\ndef calculate_average(scores):\n    """គណនាមធ្យមភាគនៃ List ពិន្ទុ។"""\n    return sum(scores) / len(scores) if scores else 0\nprint_student_info("សុខា", [90, 80, 70])\n```',
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
បង្កើតកម្មវិធី Python ដែលប្រើ Commenting និង Documentation។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំលេខចំនួន ៤ ដើម្បីបន្ថែមទៅក្នុង List។
2. **ការអនុវត្ត Commenting និង Documentation:**
   - បង្កើត Function \`filter_positive_numbers\` ដែលត្រងលេខវិជ្ជមាន។
   - បន្ថែម Docstring សម្រាប់ Function និង Module។
   - បន្ថែម Single-line Comments ដើម្បីពន្យល់ Logic។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារស្វាគមន៍ជាមួយឈ្មោះអ្នកប្រើ។
   - បង្ហាញ List នៃលេខវិជ្ជមាន។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលលេខមិនត្រឹមត្រូវ ឬ List ទទេ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
"""Module សម្រាប់ត្រងលេខវិជ្ជមានពី List។"""

def is_positive(number):
    """ពិនិត្យថាតើលេខជាវិជ្ជមានឬអត់។
    
    Args:
        number (float): លេខដែលត្រូវពិនិត្យ។
    Returns:
        bool: True ប្រសិនបើលេខជាវិជ្ជមាន, False បើមិនមែន។
    """
    return number > 0

def filter_positive_numbers(numbers):
    """ត្រងលេខវិជ្ជមានពី List។
    
    Args:
        numbers (list): List នៃលេខ។
    Returns:
        list: List នៃលេខវិជ្ជមាន។
    """
    # ត្រងលេខវិជ្ជមានដោយប្រើ List Comprehension
    return [num for num in numbers if is_positive(num)]

try:
    # ស្នើសុំឈ្មោះអ្នកប្រើ
    user_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # ប្រមូលលេខចំនួន ៤
    numbers = []
    for i in range(4):
        num = float(input(f"បញ្ចូលលេខទី {i+1}: "))
        numbers.append(num)
    
    if not numbers:
        raise ValueError("List លេខមិនអាចទទេបាន!")
    
    # ត្រងលេខវិជ្ជមាន
    positive_numbers = filter_positive_numbers(numbers)
    
    # បង្ហាញលទ្ធផល
    print(f"សួស្តី {user_name}!")
    print(f"លេខវិជ្ជមាន: {positive_numbers}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default ConceptLesson8_2Content;
