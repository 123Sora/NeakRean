import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson4_1Content: LessonContent = {
  title: 'វាក្យស័ព្ទទាក់ទងនឹងការកំណត់អនុគមន៍',
  objectives: [
    'យល់ពីអត្ថន័យនៃវាក្យស័ព្ទទាក់ទងនឹងការកំណត់អនុគមន៍ (Function Definitions)',
    'ស្គាល់ពាក្យសំខាន់ៗដូចជា def, return, និង function call',
    'រៀនការបង្កើត និងប្រើអនុគមន៍ក្នុង Python',
    'ស្វែងយល់ពីសារៈសំខាន់នៃអនុគមន៍ក្នុងការរៀបចំកូដ',
    'អនុវត្តការប្រើអនុគមន៍ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# វាក្យស័ព្ទទាក់ទងនឹងការកំណត់អនុគមន៍ 🛠️💻

---

**វាក្យស័ព្ទទាក់ទងនឹងការកំណត់អនុគមន៍ (Function Definitions)** គឺជាពាក្យបច្ចេកទេសដែលប្រើសម្រាប់បង្កើតបណ្តុំនៃកូដដែលអាចប្រើឡើងវិញបាន។

---

## 1. អ្វីទៅជា Function Definitions?

- **Function Definitions:** ការកំណត់និយមន័យនៃអនុគមន៍ដែលជាបណ្តុំកូដសម្រាប់អនុវត្តភារកិច្ចជាក់លាក់។
- **សារៈសំខាន់:**
  - ជួយរៀបចំកូដឱ្យមានរបៀប និងងាយអាន។
  - អនុញ្ញាតឱ្យប្រើកូដឡើងវិញបានច្រើនដង។
  - កាត់បន្ថយភាពស្មុគស្មាញនៃកម្មវិធី។

**ពាក្យសំខាន់ៗ:**
- **def:** ប្រើសម្រាប់កំណត់អនុគមន៍។
- **return:** បញ្ជូនតម្លៃត្រឡប់ពីអនុគមន៍។
- **function call:** ការហៅអនុគមន៍ឱ្យដំណើរការ។

---

## 2. ការប្រើ Function Definitions ក្នុង Python

- **កំណត់អនុគមន៍:**
  \`\`\`python
  def greet():
      print("សួស្តី!")
  greet()  # បង្ហាញ: សួស្តី!
  \`\`\`
- **អនុគមន៍ជាមួយ return:**
  \`\`\`python
  def add(a, b):
      return a + b
  result = add(3, 5)
  print(result)  # បង្ហាញ: 8
  \`\`\`
- **អនុគមន៍ជាមួយ default parameter:**
  \`\`\`python
  def welcome(name="ភ្ញៀវ"):
      print(f"សូមស្វាគមន៍, {name}!")
  welcome()  # បង្ហាញ: សូមស្វាគមន៍, ភ្ញៀវ!
  welcome("សុខា")  # បង្ហាញ: សូមស្វាគមន៍, សុខា!
  \`\`\`

---

## 3. ការអនុវត្តក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ:**

\`\`\`python
# កំណត់អនុគមន៍សម្រាប់គណនាការ៉េ
def square(number):
    return number * number

# ហៅអនុគមន៍
num = 4
result = square(num)
print(f"ការ៉េនៃ {num} គឺ {result}")  # បង្ហាញ: ការ៉េនៃ 4 គឺ 16
\`\`\`

**ឧទាហរណ៍ជាមួយ multiple returns:**

\`\`\`python
def check_number(num):
    if num > 0:
        return "វិជ្ជមាន"
    elif num < 0:
        return "អវិជ្ជមាន"
    else:
        return "សូន្យ"

print(check_number(10))  # បង្ហាញ: វិជ្ជមាន
print(check_number(-5))  # បង្ហាញ: អវិជ្ជមាន
print(check_number(0))   # បង្ហាញ: សូន្យ
\`\`\`

---

## 4. ហេតុអ្វីសំខាន់?

- **ភាពអាចប្រើឡើងវិញ:** អនុគមន៍អនុញ្ញាតឱ្យប្រើកូដឡើងវិញបាន។
- **ភាពរៀបរយ:** ធ្វើឱ្យកូដមានរបៀប និងងាយថែទាំ។
- **ភាពងាយអាន:** ធ្វើឱ្យកម្មវិធីមានអត្ថន័យច្បាស់លាស់។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្កើតអនុគមន៍សាមញ្ញ</h3>
<p>ប្រើ def ដើម្បីបង្កើតអនុគមន៍សម្រាប់សួស្តី។</p>
<pre><code class="language-python">
def greet():
    print("សួស្តី ពិភពលោក!")
greet()  # បង្ហាញ: សួស្តី ពិភពលោក!
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ អនុគមន៍ជាមួយ return</h3>
<p>ប្រើ return ដើម្បីគណនាផលបូក។</p>
<pre><code class="language-python">
def add_numbers(a, b):
    return a + b
result = add_numbers(10, 20)
print(f"ផលបូក: {result}")  # បង្ហាញ: ផលបូក: 30
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Function Definitions ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ទុកទិន្នន័យ',
        'បង្កើតបណ្តុំកូដដែលអាចប្រើឡើងវិញបាន',
        'ធ្វើការងារម្តងហើយម្តងទៀត',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Function Definitions ប្រើសម្រាប់បង្កើតបណ្តុំកូដដែលអាចប្រើឡើងវិញបាន។'
    },
    {
      question: 'តើពាក្យ `def` មានន័យអ្វី?',
      options: [
        'បង្ហាញទិន្នន័យ',
        'កំណត់អនុគមន៍',
        'ពិនិត្យលក្ខខណ្ឌ',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`def` ប្រើសម្រាប់កំណត់អនុគមន៍។'
    },
    {
      question: 'តើពាក្យ `return` ធ្វើអ្វី?',
      options: [
        'បញ្ឈប់កម្មវិធី',
        'បញ្ជូនតម្លៃត្រឡប់ពីអនុគមន៍',
        'ធ្វើការងារម្តងហើយម្តងទៀត',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`return` បញ្ជូនតម្លៃត្រឡប់ពីអនុគមន៍។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef square(num):\n    return num * num\nprint(square(5))\n```',
      options: ['25', '5', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'អនុគមន៍ square គណនា 5 * 5 = 25។'
    },
    {
      question: 'តើពាក្យ `function call` សំដៅលើអ្វី?',
      options: [
        'ការកំណត់អនុគមន៍',
        'ការហៅអនុគមន៍ឱ្យដំណើរការ',
        'ការផ្ទុកទិន្នន័យ',
        'ការពិនិត្យលក្ខខណ្ឌ'
      ],
      correct: 1,
      explanation: '`function call` សំដៅលើការហៅអនុគមន៍ឱ្យដំណើរការ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef greet(name="ភ្ញៀវ"):\n    return f"សួស្តី, {name}!"\nprint(greet())\n```',
      options: ['សួស្តី, ភ្ញៀវ!', 'សួស្តី!', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'អនុគមន៍ greet ប្រើ default parameter "ភ្ញៀវ" ដូច្នេះបង្ហាញ "សួស្តី, ភ្ញៀវ!"។'
    },
    {
      question: 'តើ Function Definitions ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកូដអាចប្រើឡើងវិញបាន និងរៀបរយ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Function Definitions ធ្វើឱ្យកូដអាចប្រើឡើងវិញបាន និងរៀបរយ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef is_even(num):\n    if num % 2 == 0:\n        return True\n    return False\nprint(is_even(4))\n```',
      options: ['True', 'False', 'Error', '4'],
      correct: 0,
      explanation: 'លេខ 4 ជាលេខគូ ដូច្នេះអនុគមន៍ is_even ត្រឡប់ True។'
    },
    {
      question: 'តើកូដខាងក្រោមមានប៉ុន្មានលទ្ធផលដែលអាចកើតមាន?\n```python\ndef check_number(num):\n    if num > 0:\n        return "វិជ្ជមាន"\n    elif num < 0:\n        return "អវិជ្ជមាន"\n    else:\n        return "សូន្យ"\n```',
      options: ['1', '2', '3', '4'],
      correct: 2,
      explanation: 'កូដនេះមាន 3 លទ្ធផលអាចកើតមាន: "វិជ្ជមាន", "អវិជ្ជមាន", ឬ "សូន្យ"។'
    },
    {
      question: 'តើអនុគមន៍ខុសពីកូដធម្មតាដោយរបៀបណា?',
      options: [
        'អនុគមន៍អនុញ្ញាតឱ្យប្រើកូដឡើងវិញបាន',
        'អនុគមន៍មិនអាចប្រើបានច្រើនដង',
        'អនុគមន៍ប្រើសម្រាប់ Loop តែប៉ុណ្ណោះ',
        'អនុគមន៍ប្រើសម្រាប់ផ្ទុកទិន្នន័យ'
      ],
      correct: 0,
      explanation: 'អនុគមន៍អនុញ្ញាតឱ្យប្រើកូដឡើងវិញបាន។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef multiply(a, b):\n    return a * b\nprint(multiply(3, 4))\n```',
      options: ['7', '12', 'Error', '34'],
      correct: 1,
      explanation: 'អនុគមន៍ multiply គណនា 3 * 4 = 12។'
    },
    {
      question: 'តើ Function Definitions ធ្វើឱ្យកូដមានអត្ថន័យដោយរបៀបណា?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកូដងាយអាន និងរៀបរយ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Function Definitions ធ្វើឱ្យកូដងាយអាន និងរៀបរយ។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Function Definitions។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំលេខពីរដែលត្រូវគណនា (Integer)។
2. **ការអនុវត្ត:**
   - បង្កើតអនុគមន៍មួយឈ្មោះ \`calculate_sum\` ដែលទទួលលេខពីរ និងត្រឡប់ផលបូក។
   - បង្កើតអនុគមន៍មួយឈ្មោះ \`calculate_product\` ដែលទទួលលេខពីរ និងត្រឡប់ផលគុណ។
   - ប្រើអនុគមន៍ទាំងពីរដើម្បីគណនាលទ្ធផល។
   - បង្ហាញសារជាមួយឈ្មោះ និងលទ្ធផល។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដូចជា: "[ឈ្មោះ]: ផលបូក = [ផលបូក], ផលគុណ = [ផលគុណ]"។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីលេខមិនមែនជាលេខគត់។

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
    num1 = int(input("បញ្ចូលលេខទីមួយ: "))
    num2 = int(input("បញ្ចូលលេខទីពីរ: "))
    
    # កំណត់អនុគមន៍
    def calculate_sum(a, b):
        return a + b
    
    def calculate_product(a, b):
        return a * b
    
    # ហៅអនុគមន៍
    sum_result = calculate_sum(num1, num2)
    product_result = calculate_product(num1, num2)
    
    # បង្ហាញលទ្ធផល
    print(f"{user_name}: ផលបូក = {sum_result}, ផលគុណ = {product_result}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson4_1Content;