import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson4_2Content: LessonContent = {
  title: 'វាក្យស័ព្ទទាក់ទងនឹងប៉ារ៉ាម៉ែត្រ និងអាគុយម៉ង់',
  objectives: [
    'យល់ពីអត្ថន័យនៃវាក្យស័ព្ទទាក់ទងនឹងប៉ារ៉ាម៉ែត្រ និងអាគុយម៉ង់ (Parameters and Arguments)',
    'ស្គាល់ភាពខុសគ្នារវាងប៉ារ៉ាម៉ែត្រ និងអាគុយម៉ង់',
    'រៀនការប្រើប៉ារ៉ាម៉ែត្រនៅក្នុងអនុគមន៍ Python',
    'ស្វែងយល់ពីប្រភេទនៃប៉ារ៉ាម៉ែត្រ (default, keyword, arbitrary)',
    'អនុវត្តការប្រើប៉ារ៉ាម៉ែត្រ និងអាគុយម៉ង់ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# វាក្យស័ព្ទទាក់ទងនឹងប៉ារ៉ាម៉ែត្រ និងអាគុយម៉ង់ 📥💻

---

**វាក្យស័ព្ទទាក់ទងនឹងប៉ារ៉ាម៉ែត្រ និងអាគុយម៉ង់ (Parameters and Arguments)** គឺជាពាក្យបច្ចេកទេសដែលប្រើសម្រាប់កំណត់ និងផ្តល់ទិន្នន័យទៅអនុគមន៍។

---

## 1. អ្វីទៅជា Parameters និង Arguments?

- **Parameters:** អថេរដែលកំណត់នៅក្នុងនិយមន័យអនុគមន៍សម្រាប់ទទួលទិន្នន័យ។
- **Arguments:** តម្លៃជាក់ស្តែងដែលផ្តល់ទៅអនុគមន៍នៅពេលហៅវា។
- **សារៈសំខាន់:**
  - អនុញ្ញាតឱ្យអនុគមន៍ទទួលទិន្នន័យផ្សេងៗគ្នា។
  - បង្កើនភាពបត់បែននៃអនុគមន៍។
  - ជួយធ្វើឱ្យកូដមានភាពច្បាស់លាស់។

**ពាក្យសំខាន់ៗ:**
- **Positional Arguments:** អាគុយម៉ង់ដែលផ្តល់តាមលំដាប់នៃប៉ារ៉ាម៉ែត្រ។
- **Keyword Arguments:** អាគុយម៉ង់ដែលបញ្ជាក់ឈ្មោះប៉ារ៉ាម៉ែត្រនៅពេលហៅអនុគមន៍។
- **Default Parameters:** ប៉ារ៉ាម៉ែត្រដែលមានតម្លៃលំនាំដើមប្រសិនបើមិនផ្តល់អាគុយម៉ង់។
- **Arbitrary Arguments (*args, **kwargs):** អនុញ្ញាតឱ្យទទួលចំនួនអាគុយម៉ង់មិនកំណត់។

---

## 2. ការប្រើ Parameters និង Arguments ក្នុង Python

- **Positional Arguments:**
  \`\`\`python
  def introduce(name, age):
      print(f"ខ្ញុំឈ្មោះ {name} អាយុ {age} ឆ្នាំ")
  introduce("សុខា", 20)  # បង្ហាញ: ខ្ញុំឈ្មោះ សុខា អាយុ 20 ឆ្នាំ
  \`\`\`
- **Keyword Arguments:**
  \`\`\`python
  def introduce(name, age):
      print(f"ខ្ញុំឈ្មោះ {name} អាយុ {age} ឆ្នាំ")
  introduce(age=25, name="វិច្ឆិកា")  # បង្ហាញ: ខ្ញុំឈ្មោះ វិច្ឆិកា អាយុ 25 ឆ្នាំ
  \`\`\`
- **Default Parameters:**
  \`\`\`python
  def greet(name="ភ្ញៀវ"):
      print(f"សួស្តី, {name}!")
  greet()  # បង្ហាញ: សួស្តី, ភ្ញៀវ!
  greet("សុភ័ក្ត្រ")  # បង្ហាញ: សួស្តី, សុភ័ក្ត្រ!
  \`\`\`
- **Arbitrary Arguments (*args):**
  \`\`\`python
  def sum_numbers(*args):
      return sum(args)
  print(sum_numbers(1, 2, 3, 4))  # បង្ហាញ: 10
  \`\`\`
- **Arbitrary Keyword Arguments (**kwargs):**
  \`\`\`python
  def display_info(**kwargs):
      for key, value in kwargs.items():
          print(f"{key}: {value}")
  display_info(name="សុខា", age=20, city="ភ្នំពេញ")  
  # បង្ហាញ:
  # name: សុខា
  # age: 20
  # city: ភ្នំពេញ
  \`\`\`

---

## 3. ការអនុវត្តក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ:**

\`\`\`python
# អនុគមន៍ជាមួយ default parameters
def calculate_total(price, tax=0.1):
    return price + (price * tax)

print(calculate_total(100))  # បង្ហាញ: 110.0
print(calculate_total(100, 0.2))  # បង្ហាញ: 120.0
\`\`\`

**ឧទាហរណ៍ជាមួយ *args:**

\`\`\`python
def average(*numbers):
    return sum(numbers) / len(numbers)

print(average(10, 20, 30))  # បង្ហាញ: 20.0
print(average(5, 15))  # បង្ហាញ: 10.0
\`\`\`

---

## 4. ហេតុអ្វីសំខាន់?

- **ភាពបត់បែន:** អនុញ្ញាតឱ្យអនុគមន៍ទទួលទិន្នន័យផ្សេងៗគ្នា។
- **ភាពងាយអាន:** ធ្វើឱ្យកូដមានអត្ថន័យ និងច្បាស់លាស់។
- **ការប្រើឡើងវិញ:** អនុញ្ញាតឱ្យប្រើអនុគមន៍ជាមួយទិន្នន័យផ្សេងៗ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Positional Arguments</h3>
<p>ប្រើ positional arguments ដើម្បីបង្ហាញព័ត៌មាន។</p>
<pre><code class="language-python">
def introduce(name, age):
    print(f"ឈ្មោះ: {name}, អាយុ: {age}")
introduce("សុភ័ក្ត្រ", 22)  # បង្ហាញ: ឈ្មោះ: សុភ័ក្ត្រ, អាយុ: 22
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Keyword Arguments និង Default Parameters</h3>
<p>ប្រើ keyword arguments និង default parameters ដើម្បីសម្រួលការហៅអនុគមន៍។</p>
<pre><code class="language-python">
def book_ticket(name, destination="ភ្នំពេញ"):
    print(f"សំបុត្រសម្រាប់ {name} ទៅ {destination}")
book_ticket(name="វិច្ឆិកា")  # បង្ហាញ: សំបុត្រសម្រាប់ វិច្ឆិកា ទៅ ភ្នំពេញ
book_ticket("សុខា", "សៀមរាប")  # បង្ហាញ: សំបុត្រសម្រាប់ សុខា ទៅ សៀមរាប
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Parameters និង Arguments ខុសគ្នាដោយរបៀបណា?',
      options: [
        'Parameters ជាតម្លៃ ហើយ Arguments ជាអថេរ',
        'Parameters ជាអថេរក្នុងនិយមន័យអនុគមន៍ ហើយ Arguments ជាតម្លៃដែលផ្តល់នៅពេលហៅ',
        'Parameters ប្រើសម្រាប់ Loop ហើយ Arguments ប្រើសម្រាប់ Conditions',
        'Parameters និង Arguments ដូចគ្នា'
      ],
      correct: 1,
      explanation: 'Parameters ជាអថេរក្នុងនិយមន័យអនុគមន៍ ហើយ Arguments ជាតម្លៃដែលផ្តល់នៅពេលហៅ។'
    },
    {
      question: 'តើពាក្យ `Positional Arguments` សំដៅលើអ្វី?',
      options: [
        'អាគុយម៉ង់ដែលផ្តល់តាមលំដាប់នៃប៉ារ៉ាម៉ែត្រ',
        'អាគុយម៉ង់ដែលបញ្ជាក់ឈ្មោះប៉ារ៉ាម៉ែត្រ',
        'អាគុយម៉ង់ដែលមានតម្លៃលំនាំដើម',
        'អាគុយម៉ង់ចំនួនមិនកំណត់'
      ],
      correct: 0,
      explanation: '`Positional Arguments` ជាអាគុយម៉ង់ដែលផ្តល់តាមលំដាប់នៃប៉ារ៉ាម៉ែត្រ។'
    },
    {
      question: 'តើពាក្យ `Keyword Arguments` ធ្វើអ្វី?',
      options: [
        'បញ្ឈប់អនុគមន៍',
        'បញ្ជាក់ឈ្មោះប៉ារ៉ាម៉ែត្រនៅពេលហៅអនុគមន៍',
        'ធ្វើការងារម្តងហើយម្តងទៀត',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`Keyword Arguments` បញ្ជាក់ឈ្មោះប៉ារ៉ាម៉ែត្រនៅពេលហៅអនុគមន៍។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef greet(name="ភ្ញៀវ"):\n    print(f"សួស្តី, {name}!")\ngreet()\n```',
      options: ['សួស្តី, ភ្ញៀវ!', 'សួស្តី!', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'អនុគមន៍ greet ប្រើ default parameter "ភ្ញៀវ" ដូច្នេះបង្ហាញ "សួស្តី, ភ្ញៀវ!"។'
    },
    {
      question: 'តើពាក្យ `*args` ប្រើសម្រាប់អ្វី?',
      options: [
        'ទទួលចំនួនអាគុយម៉ង់មិនកំណត់',
        'ទទួលអាគុយម៉ង់តែមួយ',
        'បញ្ជាក់ឈ្មោះប៉ារ៉ាម៉ែត្រ',
        'ផ្ទុកទិន្នន័យ'
      ],
      correct: 0,
      explanation: '`*args` អនុញ្ញាតឱ្យទទួលចំនួនអាគុយម៉ង់មិនកំណត់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef sum_numbers(*args):\n    return sum(args)\nprint(sum_numbers(1, 2, 3))\n```',
      options: ['6', '123', 'Error', '1'],
      correct: 0,
      explanation: 'អនុគមន៍ sum_numbers បូក 1 + 2 + 3 = 6។'
    },
    {
      question: 'តើ Parameters និង Arguments ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យអនុគមន៍អាចទទួលទិន្នន័យផ្សេងៗ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Parameters និង Arguments ធ្វើឱ្យអនុគមន៍អាចទទួលទិន្នន័យផ្សេងៗ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef introduce(name, age=18):\n    print(f"ឈ្មោះ: {name}, អាយុ: {age}")\nintroduce(name="សុខា")\n```',
      options: ['ឈ្មោះ: សុខា, អាយុ: 18', 'ឈ្មោះ: សុខា', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'អនុគមន៍ introduce ប្រើ default parameter age=18 ដូច្នេះបង្ហាញ "ឈ្មោះ: សុខា, អាយុ: 18"។'
    },
    {
      question: 'តើកូដខាងក្រោមមានប៉ុន្មានលទ្ធផលដែលអាចកើតមាន?\n```python\ndef check_age(age):\n    if age >= 18:\n        return "មនុស្សធំ"\n    else:\n        return "ក្មេង"\n```',
      options: ['1', '2', '3', '4'],
      correct: 1,
      explanation: 'កូដនេះមាន 2 លទ្ធផលអាចកើតមាន: "មនុស្សធំ" ឬ "ក្មេង"។'
    },
    {
      question: 'តើ `**kwargs` ប្រើសម្រាប់អ្វី?',
      options: [
        'ទទួលអាគុយម៉ង់តែមួយ',
        'ទទួលចំនួន keyword arguments មិនកំណត់',
        'បញ្ជាក់លំដាប់អាគុយម៉ង់',
        'បញ្ឈប់អនុគមន៍'
      ],
      correct: 1,
      explanation: '`**kwargs` អនុញ្ញាតឱ្យទទួលចំនួន keyword arguments មិនកំណត់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef display_info(**kwargs):\n    return kwargs.get("name", "គ្មានឈ្មោះ")\nprint(display_info(name="វិច្ឆិកា"))\n```',
      options: ['វិច្ឆិកា', 'គ្មានឈ្មោះ', 'Error', 'name'],
      correct: 0,
      explanation: 'អនុគមន៍ display_info ត្រឡប់ "វិច្ឆិកា" ពី kwargs.get("name")។'
    },
    {
      question: 'តើ Parameters និង Arguments ធ្វើឱ្យកូដមានអត្ថន័យដោយរបៀបណា?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកូដងាយអាន និងបត់បែន',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Parameters និង Arguments ធ្វើឱ្យកូដងាយអាន និងបត់បែន។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Parameters និង Arguments។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំលេខពីរដែលត្រូវគណនា (Integer)។
2. **ការអនុវត្ត:**
   - បង្កើតអនុគមន៍មួយឈ្មោះ \`calculate\` ដែលទទួលប៉ារ៉ាម៉ែត្រពីរ (num1, num2) និងប៉ារ៉ាម៉ែត្រ keyword មួយឈ្មោះ operation ដែលមានតម្លៃលំនាំដើមជា "sum"។
   - ប្រើ operation ដើម្បីជ្រើសរើសគណនាផលបូក (sum) ឬផលគុណ (product)។
   - បង្ហាញសារជាមួយឈ្មោះ និងលទ្ធផល។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដូចជា: "[ឈ្មោះ]: [ផលបូក/ផលគុណ] = [លទ្ធផល]"។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីលេខមិនមែនជាលេខគត់ ឬ operation មិនត្រឹមត្រូវ។

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
    
    # Variable សម្រាប់ operation
    operation = input("បញ្ចូលប្រភេទគណនា (sum ឬ product): ") or "sum"
    
    # កំណត់អនុគមន៍
    def calculate(num1, num2, operation="sum"):
        if operation == "sum":
            return num1 + num2
        elif operation == "product":
            return num1 * num2
        else:
            raise ValueError("ប្រភេទគណនាមិនត្រឹមត្រូវ!")
    
    # ហៅអនុគមន៍
    result = calculate(num1, num2, operation=operation)
    
    # បង្ហាញលទ្ធផល
    print(f"{user_name}: {operation} = {result}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson4_2Content;