import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson7_2Content: LessonContent = {
  title: 'វាក្យស័ព្ទទាក់ទងនឹងឯកសារ',
  objectives: [
    'យល់ពីអត្ថន័យនៃវាក្យស័ព្ទទាក់ទងនឹងឯកសារ (Documentation Terms)',
    'ស្គាល់ពាក្យសំខាន់ៗដូចជា docstring, inline comment, README, និង API documentation',
    'រៀនការប្រើឯកសារក្នុង Python',
    'ស្វែងយល់ពីសារៈសំខាន់នៃការសរសេរឯកសារសម្រាប់កូដ',
    'អនុវត្តការប្រើឯកសារក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# វាក្យស័ព្ទទាក់ទងនឹងឯកសារ 📜💻

---

**វាក្យស័ព្ទទាក់ទងនឹងឯកសារ (Documentation Terms)** គឺជាពាក្យបច្ចេកទេសដែលប្រើសម្រាប់ពន្យល់អំពីការបន្ថែមព័ត៌មានក្នុងកូដដើម្បីជួយអ្នកអានយល់ពីមុខងារ និងការប្រើប្រាស់។

---

## 1. អ្វីទៅជា Documentation Terms?

- **Documentation:** ការបន្ថែមព័ត៌មាន ឬកំណត់សម្គាល់ទៅក្នុងកូដ ឬឯកសារដើម្បីពន្យល់អំពីកូដ។
- **សារៈសំខាន់:**
  - ជួយអ្នកអភិវឌ្ឍន៍ផ្សេងទៀតយល់ពីកូដ។
  - សម្រួលការប្រើប្រាស់ និងការថែទាំកូដ។
  - ចាំបាច់សម្រាប់ការងារក្រុម និងការប្រើប្រាស់ API។

**ពាក្យសំខាន់ៗ:**
- **Docstring:** កំណត់សម្គាល់ពហុបន្ទាត់នៅខាងក្នុងអនុគមន៍ ឬ module ដើម្បីពន្យល់មុខងារ។
- **Inline Comment:** កំណត់សម្គាល់ខ្លីៗនៅក្នុងបន្ទាត់កូដ។
- **README:** ឯកសារដែលផ្តល់ទិដ្ឋភាពទូទៅអំពីគម្រោង។
- **API Documentation:** ឯកសារដែលពន្យល់ពីរបៀបប្រើអនុគមន៍ ឬ library។

---

## 2. ការប្រើ Documentation Terms ក្នុង Python

- **ការប្រើ Docstring:**
  \`\`\`python
  def calculate_average(numbers):
      """គណនាពិន្ទុជាមធ្យមនៃ list លេខ។
      
      Args:
          numbers (list): List នៃលេខ។
      Returns:
          float: ពិន្ទុជាមធ្យម។
      """
      return sum(numbers) / len(numbers) if numbers else 0
  print(calculate_average([1, 2, 3]))  # បង្ហាញ: 2.0
  \`\`\`
- **ការប្រើ Inline Comment:**
  \`\`\`python
  def sum_numbers(numbers):
      total = 0  # ផលបូកដំបូង
      for num in numbers:
          total += num  # បន្ថែមលេខនីមួយៗ
      return total
  print(sum_numbers([1, 2, 3]))  # បង្ហាញ: 6
  \`\`\`
- **ការបង្កើត README (ឧទាហរណ៍អត្ថបទ):**
  \`\`\`markdown
  # គម្រោងគណនាពិន្ទុ
  គម្រោងនេះគណនាពិន្ទុជាមធ្យមនៃនិស្សិត។

  ## ការប្រើប្រាស់
  - បញ្ចូលលេខចំនួនណាមួយ។
  - កម្មវិធីនឹងគណនាផលបូក និងជាមធ្យម។
  \`\`\`
- **ការប្រើ API Documentation (ឧទាហរណ៍):**
  \`\`\`python
  def get_student_info(name, scores):
      """ផ្តល់ព័ត៌មានអំពីនិស្សិត។
      
      Args:
          name (str): ឈ្មោះនិស្សិត។
          scores (list): List នៃពិន្ទុ។
      Returns:
          dict: ព័ត៌មាននិស្សិតរួមមានឈ្មោះ និងពិន្ទុជាមធ្យម។
      """
      return {"name": name, "average": sum(scores) / len(scores) if scores else 0}
  print(get_student_info("សុខា", [85, 90, 95]))  # បង្ហាញ: {'name': 'សុខា', 'average': 90.0}
  \`\`\`

---

## 3. ការអនុវត្តក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ:**

\`\`\`python
def calculate_grade(score):
    """គណនាកម្រិតពិន្ទុ (grade) ដោយផ្អែកលើពិន្ទុ។
    
    Args:
        score (float): ពិន្ទុរបស់និស្សិត។
    Returns:
        str: កម្រិតពិន្ទុ (A, B, C, D, ឬ F)។
    """
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# បញ្ចូលពិន្ទុ និងបង្ហាញកម្រិត
score = 85
grade = calculate_grade(score)
print(f"ពិន្ទុ {score} ទទួលបានកម្រិត: {grade}")  # បង្ហាញ: ពិន្ទុ 85 ទទួលបានកម្រិត: B
\`\`\`

---

## 4. ហេតុអ្វីសំខាន់?

- **ភាពច្បាស់លាស់:** ឯកសារជួយអ្នកអភិវឌ្ឍន៍ផ្សេងទៀតយល់ពីកូដ។
- **ការថែទាំ:** សម្រួលការកែប្រែ និងធ្វើបច្ចុប្បន្នភាពកូដ។
- **កិច្ចសហការ:** ធ្វើឱ្យការងារក្រុមកាន់តែរលូន។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Docstring</h3>
<p>បន្ថែម docstring ដើម្បីពន្យល់អនុគមន៍។</p>
<pre><code class="language-python">
def calculate_sum(numbers):
    """គណនាផលបូកនៃលេខនៅក្នុង list។
    
    Args:
        numbers (list): List នៃលេខ។
    Returns:
        int: ផលបូកនៃលេខ។
    """
    return sum(numbers)
print(calculate_sum([1, 2, 3]))  # បង្ហាញ: 6
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Inline Comment</h3>
<p>បន្ថែមកំណត់សម្គាល់ខ្លីៗនៅក្នុងកូដ។</p>
<pre><code class="language-python">
def count_positive(numbers):
    count = 0  # ចំនួនលេខវិជ្ជមាន
    for num in numbers:
        if num > 0:  # ពិនិត្យលេខវិជ្ជមាន
            count += 1
    return count
print(count_positive([-1, 2, 3]))  # បង្ហាញ: 2
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Documentation សំដៅលើអ្វី?',
      options: [
        'ការសរសេរកូដស្មុគស្មាញ',
        'ការបន្ថែមព័ត៌មាន ឬកំណត់សម្គាល់ក្នុងកូដ',
        'ការគ្រប់គ្រង Hardware',
        'ការបង្កើត UI'
      ],
      correct: 1,
      explanation: 'Documentation ជាការបន្ថែមព័ត៌មាន ឬកំណត់សម្គាល់ក្នុងកូដ។'
    },
    {
      question: 'តើ Docstring សំដៅលើអ្វី?',
      options: [
        'កំណត់សម្គាល់ខ្លីៗនៅក្នុងបន្ទាត់',
        'កំណត់សម្គាល់ពហុបន្ទាត់នៅក្នុងអនុគមន៍',
        'ឯកសារទិដ្ឋភាពទូទៅនៃគម្រោង',
        'ការដាក់ឈ្មោះអថេរ'
      ],
      correct: 1,
      explanation: 'Docstring ជាកំណត់សម្គាល់ពហុបន្ទាត់នៅក្នុងអនុគមន៍។'
    },
    {
      question: 'តើ Inline Comment ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ពន្យល់កូដនៅក្នុងបន្ទាត់',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Inline Comment ពន្យល់កូដនៅក្នុងបន្ទាត់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef calculate_sum(numbers):\n    """គណនាផលបូក។"""\n    return sum(numbers)\nprint(calculate_sum([1, 2, 3]))\n```',
      options: ['6', '3', '9', 'Error'],
      correct: 0,
      explanation: 'កូដគណនា 1+2+3 = 6។'
    },
    {
      question: 'តើ README សំដៅលើអ្វី?',
      options: [
        'កំណត់សម្គាល់នៅក្នុងកូដ',
        'ឯកសារដែលផ្តល់ទិដ្ឋភាពទូទៅនៃគម្រោង',
        'ការដាក់ឈ្មោះអថេរ',
        'ការបែងចែកកូដ'
      ],
      correct: 1,
      explanation: 'README ជាឯកសារដែលផ្តល់ទិដ្ឋភាពទូទៅនៃគម្រោង។'
    },
    {
      question: 'តើ API Documentation ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ពន្យល់របៀបប្រើអនុគមន៍ ឬ library',
        'លុបកូដ',
        'បង្កើត UI'
      ],
      correct: 1,
      explanation: 'API Documentation ពន្យល់របៀបប្រើអនុគមន៍ ឬ library។'
    },
    {
      question: 'តើ Documentation ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'សម្រួលការប្រើប្រាស់ និងការថែទាំកូដ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Documentation សម្រួលការប្រើប្រាស់ និងការថែទាំកូដ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef get_grade(score):\n    """គណនាកម្រិតពិន្ទុ។"""\n    if score >= 80:\n        return "B"\n    return "F"\nprint(get_grade(85))\n```',
      options: ['B', 'F', 'Error', '80'],
      correct: 0,
      explanation: 'ពិន្ទុ 85 >= 80 ដូច្នេះបង្ហាញ B។'
    },
    {
      question: 'តើ Inline Comment ខុសពី Docstring ដោយរបៀបណា?',
      options: [
        'Inline Comment ពន្យល់ពហុបន្ទាត់',
        'Inline Comment ពន្យល់ខ្លីៗនៅក្នុងបន្ទាត់',
        'Inline Comment ប្រើសម្រាប់ UI',
        'Inline Comment ប្រើសម្រាប់ Hardware'
      ],
      correct: 1,
      explanation: 'Inline Comment ពន្យល់ខ្លីៗនៅក្នុងបន្ទាត់។'
    },
    {
      question: 'តើ Docstring ត្រូវបានប្រើនៅឯណា?',
      options: [
        'នៅក្នុងបន្ទាត់កូដ',
        'នៅខាងក្នុងអនុគមន៍ ឬ module',
        'នៅក្នុង README',
        'នៅក្នុង UI'
      ],
      correct: 1,
      explanation: 'Docstring ត្រូវបានប្រើនៅខាងក្នុងអនុគមន៍ ឬ module។'
    },
    {
      question: 'តើ Documentation ធ្វើឱ្យកូដមានអត្ថន័យដោយរបៀបណា?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យការយល់កូដកាន់តែងាយស្រួល',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Documentation ធ្វើឱ្យការយល់កូដកាន់តែងាយស្រួល។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef count_positive(numbers):\n    """រាប់លេខវិជ្ជមាន។"""\n    count = 0\n    for num in numbers:\n        if num > 0:\n            count += 1\n    return count\nprint(count_positive([-1, 2, 3]))\n```',
      options: ['1', '2', '3', 'Error'],
      correct: 1,
      explanation: 'កូដរាប់លេខវិជ្ជមាន (2, 3) = 2។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Documentation Terms។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំចំនួនលេខដែលចង់បញ្ចូល (Integer)
2. **ការអនុវត្ត:**
   - បង្កើត list ដើម្បីផ្ទុកលេខដែលបញ្ចូល។
   - បង្កើតអនុគមន៍ដែលមាន docstring ដើម្បីគណនាផលបូក និងចំនួនលេខអវិជ្ជមាន។
   - បន្ថែម inline comment ដើម្បីពន្យល់ជំហានសំខាន់ៗ។
   - បង្ហាញលទ្ធផល។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដូចជា: "[ឈ្មោះ]: ផលបូក = [លទ្ធផល], ចំនួនលេខអវិជ្ជមាន = [លទ្ធផល]"។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីចំនួន ឬលេខមិនមែនជាលេខគត់។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    # ស្នើសុំឈ្មោះអ្នកប្រើ
    user_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # ស្នើសុំចំនួនលេខ
    num_count = int(input("បញ្ចូលចំនួនលេខដែលអ្នកចង់បញ្ចូល: "))
    if num_count <= 0:
        raise ValueError("ចំនួនលេខត្រូវតែធំជាង 0!")
    
    # បង្កើត list សម្រាប់ផ្ទុកលេខ
    numbers = []
    for i in range(num_count):
        num = int(input(f"បញ្ចូលលេខទី {i+1}: "))
        numbers.append(num)
    
    def calculate_total(numbers):
        """គណនាផលបូកនៃលេខនៅក្នុង list។
        
        Args:
            numbers (list): List នៃលេខ។
        Returns:
            int: ផលបូកនៃលេខ។
        """
        total = 0  # ផលបូកដំបូង
        for num in numbers:
            total += num  # បន្ថែមលេខនីមួយៗ
        return total
    
    def count_negative(numbers):
        """រាប់ចំនួនលេខអវិជ្ជមាននៅក្នុង list។
        
        Args:
            numbers (list): List នៃលេខ។
        Returns:
            int: ចំនួនលេខអវិជ្ជមាន។
        """
        count = 0  # ចំនួនលេខអវិជ្ជមាន
        for num in numbers:
            if num < 0:  # ពិនិត្យលេខអវិជ្ជមាន
                count += 1
        return count
    
    # គណនាលទ្ធផល
    total_sum = calculate_total(numbers)
    negative_count = count_negative(numbers)
    
    # បង្ហាញលទ្ធផល
    print(f"{user_name}: ផលបូក = {total_sum}, ចំនួនលេខអវិជ្ជមាន = {negative_count}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson7_2Content;