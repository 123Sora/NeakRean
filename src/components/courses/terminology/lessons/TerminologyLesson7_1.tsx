import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson7_1Content: LessonContent = {
  title: 'វាក្យស័ព្ទទាក់ទងនឹងភាពងាយអាននៃកូដ',
  objectives: [
    'យល់ពីអត្ថន័យនៃវាក្យស័ព្ទទាក់ទងនឹងភាពងាយអាននៃកូដ (Code Readability Terms)',
    'ស្គាល់ពាក្យសំខាន់ៗដូចជា indentation, naming convention, modularity, និង comment',
    'រៀនការប្រើបច្ចេកទេសធ្វើឱ្យកូដងាយអានក្នុង Python',
    'ស្វែងយល់ពីសារៈសំខាន់នៃការសរសេរកូដឱ្យច្បាស់លាស់ និងមានរចនាសម្ព័ន្ធ',
    'អនុវត្តការប្រើបច្ចេកទេសភាពងាយអានក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# វាក្យស័ព្ទទាក់ទងនឹងភាពងាយអាននៃកូដ 📝💻

---

**វាក្យស័ព្ទទាក់ទងនឹងភាពងាយអាននៃកូដ (Code Readability Terms)** គឺជាពាក្យបច្ចេកទេសដែលប្រើសម្រាប់ពន្យល់អំពីវិធីសាស្ត្រក្នុងការសរសេរកូដឱ្យងាយយល់ និងថែទាំ។

---

## 1. អ្វីទៅជា Code Readability Terms?

- **Code Readability:** ការសរសេរកូដឱ្យងាយអាន និងយល់សម្រាប់អ្នកអានទាំងអ្នកសរសេរ និងអ្នកផ្សេងទៀត។
- **សារៈសំខាន់:**
  - ជួយកាត់បន្ថយកំហុសក្នុងការសរសេរកូដ។
  - ធ្វើឱ្យការថែទាំ និងការកែប្រែកូដកាន់តែងាយស្រួល។
  - បង្កើនកិច្ចសហការក្នុងក្រុម។

**ពាក្យសំខាន់ៗ:**
- **Indentation:** ការដកឃ្លាដើមបន្ទាត់កូដដើម្បីបង្ហាញរចនាសម្ព័ន្ធ។
- **Naming Convention:** ក្បួនក្នុងការដាក់ឈ្មោះអថេរ និងអនុគមន៍ឱ្យមានអត្ថន័យ។
- **Modularity:** ការបែងចែកកូដជាផ្នែកតូចៗដែលមានមុខងារជាក់លាក់។
- **Comment:** ការបន្ថែមកំណត់សម្គាល់ក្នុងកូដដើម្បីពន្យល់។

---

## 2. ការប្រើ Code Readability Terms ក្នុង Python

- **ការប្រើ Indentation:**
  \`\`\`python
  def calculate_average(numbers):
      total = sum(numbers)
      count = len(numbers)
      average = total / count
      return average
  numbers = [1, 2, 3, 4, 5]
  print(calculate_average(numbers))  # បង្ហាញ: 3.0
  \`\`\`
- **ការប្រើ Naming Convention:**
  \`\`\`python
  # ឈ្មោះមានអត្ថន័យ
  student_scores = [85, 90, 78]
  average_score = sum(student_scores) / len(student_scores)
  print(average_score)  # បង្ហាញ: 84.33
  \`\`\`
- **ការប្រើ Modularity:**
  \`\`\`python
  def calculate_sum(numbers):
      return sum(numbers)

  def calculate_count(numbers):
      return len(numbers)

  def calculate_average(numbers):
      return calculate_sum(numbers) / calculate_count(numbers)

  scores = [10, 20, 30]
  print(calculate_average(scores))  # បង្ហាញ: 20.0
  \`\`\`
- **ការប្រើ Comment:**
  \`\`\`python
  # គណនាផលបូកនៃលេខនៅក្នុង list
  def calculate_sum(numbers):
      total = 0  # ផលបូកដំបូង
      for num in numbers:
          total += num  # បន្ថែមលេខនីមួយៗ
      return total
  print(calculate_sum([1, 2, 3]))  # បង្ហាញ: 6
  \`\`\`

---

## 3. ការអនុវត្តក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ:**

\`\`\`python
# គណនាពិន្ទុជាមធ្យមរបស់និស្សិត
def get_average_score(scores):
    # ពិនិត្យថាតើ list ទទេឬអត់
    if not scores:
        return 0
    # គណនាផលបូក និងចំនួន
    total = sum(scores)
    count = len(scores)
    # គណនាជាមធ្យម
    return total / count

student_scores = [85, 90, 95]
average = get_average_score(student_scores)
print(f"ពិន្ទុជាមធ្យម: {average}")  # បង្ហាញ: ពិន្ទុជាមធ្យម: 90.0
\`\`\`

---

## 4. ហេតុអ្វីសំខាន់?

- **ភាពងាយស្រួល:** កូដងាយអានជួយសម្រួលការយល់ និងការថែទាំ។
- **ការកាត់បន្ថយកំហុស:** ការប្រើ naming convention និង comment កាត់បន្ថយកំហុស។
- **កិច្ចសហការ:** ធ្វើឱ្យការងារក្រុមកាន់តែរលូន។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Indentation និង Comment</h3>
<p>កូដដែលមានរចនាសម្ព័ន្ធ និងកំណត់សម្គាល់។</p>
<pre><code class="language-python">
# គណនាផលបូកនៃលេខគូ
def sum_even_numbers(numbers):
    total = 0  # ផលបូកដំបូង
    for num in numbers:
        if num % 2 == 0:  # ពិនិត្យលេខគូ
            total += num
    return total
print(sum_even_numbers([1, 2, 3, 4]))  # បង្ហាញ: 6
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Naming Convention និង Modularity</h3>
<p>បែងចែកកូដជាអនុគមន៍តូចៗ។</p>
<pre><code class="language-python">
def calculate_total(scores):
    return sum(scores)

def calculate_count(scores):
    return len(scores)

def get_average(scores):
    return calculate_total(scores) / calculate_count(scores)

scores = [80, 90, 100]
print(get_average(scores))  # បង្ហាញ: 90.0
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Code Readability សំដៅលើអ្វី?',
      options: [
        'ការសរសេរកូដឱ្យស្មុគស្មាញ',
        'ការសរសេរកូដឱ្យងាយអាន និងយល់',
        'ការគ្រប់គ្រង Hardware',
        'ការបង្កើត UI'
      ],
      correct: 1,
      explanation: 'Code Readability ជាការសរសេរកូដឱ្យងាយអាន និងយល់។'
    },
    {
      question: 'តើ Indentation ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'បង្ហាញរចនាសម្ព័ន្ធនៃកូដ',
        'លុបកូដ',
        'បង្កើត UI'
      ],
      correct: 1,
      explanation: 'Indentation បង្ហាញរចនាសម្ព័ន្ធនៃកូដ។'
    },
    {
      question: 'តើ Naming Convention សំដៅលើអ្វី?',
      options: [
        'ការដាក់ឈ្មោះអថេរដោយចៃដន្យ',
        'ក្បួនក្នុងការដាក់ឈ្មោះអថេរ និងអនុគមន៍ឱ្យមានអត្ថន័យ',
        'ការបន្ថែមកំណត់សម្គាល់',
        'ការបែងចែកកូដ'
      ],
      correct: 1,
      explanation: 'Naming Convention ជាក្បួនក្នុងការដាក់ឈ្មោះឱ្យមានអត្ថន័យ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef calculate_sum(numbers):\n    total = 0\n    for num in numbers:\n        total += num\n    return total\nprint(calculate_sum([1, 2, 3]))\n```',
      options: ['6', '3', '9', 'Error'],
      correct: 0,
      explanation: 'កូដគណនា 1+2+3 = 6។'
    },
    {
      question: 'តើ Modularity សំដៅលើអ្វី?',
      options: [
        'ការបន្ថែមកំណត់សម្គាល់',
        'ការបែងចែកកូដជាផ្នែកតូចៗ',
        'ការដកឃ្លាកូដ',
        'ការដាក់ឈ្មោះអថេរ'
      ],
      correct: 1,
      explanation: 'Modularity ជាការបែងចែកកូដជាផ្នែកតូចៗ។'
    },
    {
      question: 'តើ Comment ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ពន្យល់អំពីកូដ',
        'លុបកូដ',
        'បង្កើត UI'
      ],
      correct: 1,
      explanation: 'Comment ពន្យល់អំពីកូដ។'
    },
    {
      question: 'តើ Code Readability ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យការថែទាំកូដកាន់តែងាយស្រួល',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Code Readability ធ្វើឱ្យការថែទាំកូดកាន់តែងាយស្រួល។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef get_average(numbers):\n    if not numbers:\n        return 0\n    return sum(numbers) / len(numbers)\nprint(get_average([10, 20, 30]))\n```',
      options: ['20.0', '10.0', '30.0', 'Error'],
      correct: 0,
      explanation: 'កូដគណនា (10+20+30)/3 = 20.0។'
    },
    {
      question: 'តើ Naming Convention ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកូដមានអត្ថន័យច្បាស់លាស់',
        'លុបកូដ',
        'បង្កើត UI'
      ],
      correct: 1,
      explanation: 'Naming Convention ធ្វើឱ្យកូដមានអត្ថន័យច្បាស់លាស់។'
    },
    {
      question: 'តើ Indentation ជួយអ្នកអានកូដដោយរបៀបណា?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'បង្ហាញរចនាសម្ព័ន្ធនៃកូដ',
        'លុបកូដ',
        'បង្កើត UI'
      ],
      correct: 1,
      explanation: 'Indentation បង្ហាញរចនាសម្ព័ន្ធនៃកូដ។'
    },
    {
      question: 'តើ Modularity ធ្វើឱ្យកូដមានអត្ថន័យដោយរបៀបណា?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកូដងាយថែទាំ និងប្រើឡើងវិញ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Modularity ធ្វើឱ្យកូដងាយថែទាំ និងប្រើឡើងវិញ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef count_positive(numbers):\n    count = 0\n    for num in numbers:\n        if num > 0:\n            count += 1\n    return count\nprint(count_positive([-1, 2, 3]))\n```',
      options: ['1', '2', '3', 'Error'],
      correct: 1,
      explanation: 'កូដរាប់លេខវិជ្ជមាន (2, 3) = 2។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Code Readability Terms។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំចំនួនលេខដែលចង់បញ្ចូល (Integer)។
2. **ការអនុវត្ត:**
   - បង្កើត list ដើម្បីផ្ទុកលេខដែលបញ្ចូល។
   - បង្កើតអនុគមន៍ដែលមានឈ្មោះច្បាស់លាស់ និងបែងចែកជាមុខងារតូចៗ (modularity)។
   - បន្ថែម comment ដើម្បីពន្យល់កូដ។
   - ប្រើ indentation ឱ្យត្រឹមត្រូវ។
   - គណនាផលបូក និងចំនួនលេខវិជ្ជមាន។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដូចជា: "[ឈ្មោះ]: ផលបូក = [លទ្ធផល], ចំនួនលេខវិជ្ជមាន = [លទ្ធផល]"។
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
    
    # អនុគមន៍គណនាផលបូក
    def calculate_total(numbers):
        total = 0  # ផលបូកដំបូង
        for num in numbers:
            total += num  # បន្ថែមលេខនីមួយៗ
        return total
    
    # អនុគមន៍រាប់លេខវិជ្ជមាន
    def count_positive(numbers):
        count = 0  # ចំនួនលេខវិជ្ជមាន
        for num in numbers:
            if num > 0:  # ពិនិត្យលេខវិជ្ជមាន
                count += 1
        return count
    
    # គណនាលទ្ធផល
    total_sum = calculate_total(numbers)
    positive_count = count_positive(numbers)
    
    # បង្ហាញលទ្ធផល
    print(f"{user_name}: ផលបូក = {total_sum}, ចំនួនលេខវិជ្ជមាន = {positive_count}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson7_1Content;