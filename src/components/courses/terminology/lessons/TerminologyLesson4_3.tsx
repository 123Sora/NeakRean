import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson4_3Content: LessonContent = {
  title: 'វាក្យស័ព្ទទាក់ទងនឹងវិសាលភាព ( Scope ) និងការបិទអនុគមន៍ ( Closure Terms )',
  objectives: [
    'យល់ពីអត្ថន័យនៃវាក្យស័ព្ទទាក់ទងនឹងវិសាលភាព និងការបិទអនុគមន៍ (Scope and Closure Terms)',
    'ស្គាល់ពាក្យសំខាន់ៗដូចជា local scope, global scope, nonlocal, និង closure',
    'រៀនការគ្រប់គ្រងវិសាលភាពនៃអថេរក្នុង Python',
    'ស្វែងយល់ពីការប្រើ closure ដើម្បីរក្សាទិន្នន័យរវាងការហៅអនុគមន៍',
    'អនុវត្តការប្រើវិសាលភាព និង closure ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# វាក្យស័ព្ទទាក់ទងនឹងវិសាលភាព និងការបិទអនុគមន៍ 🔒💻

---

**វាក្យស័ព្ទទាក់ទងនឹងវិសាលភាព និងការបិទអនុគមន៍ (Scope and Closure Terms)** គឺជាពាក្យបច្ចេកទេសដែលប្រើសម្រាប់កំណត់ និងគ្រប់គ្រងអថេរនៅក្នុងផ្នែកផ្សេងៗនៃកម្មវិធី។

---

## 1. អ្វីទៅជា Scope និង Closure?

- **Scope:** តំបន់នៅក្នុងកម្មវិធីដែលអថេរអាចត្រូវបានចូលប្រើ ឬប្រើប្រាស់។
- **Closure:** អនុគមន៍ខាងក្នុងដែលរក្សាទិន្នន័យពីវិសាលភាពខាងក្រៅរបស់វា។
- **សារៈសំខាន់:**
  - ជួយគ្រប់គ្រងអថេរដើម្បីជៀសវាងការប៉ះទង្គិចឈ្មោះ។
  - អនុញ្ញាតឱ្យអនុគមន៍រក្សាទិន្នន័យរវាងការហៅ។
  - ធ្វើឱ្យកូដមានភាពរៀបរយ និងមានសុវត្ថិភាព។

**ពាក្យសំខាន់ៗ:**
- **Local Scope:** អថេរដែលកំណត់នៅក្នុងអនុគមន៍ និងអាចប្រើបានតែនៅក្នុងអនុគមន៍នោះ។
- **Global Scope:** អថេរដែលកំណត់នៅខាងក្រៅអនុគមន៍ និងអាចប្រើបានគ្រប់ទីកន្លែង។
- **Nonlocal:** ប្រើសម្រាប់ចូលប្រើអថេរនៅក្នុងវិសាលភាពខាងក្រៅ ប៉ុន្តែមិនមែនជា global។
- **Closure:** អនុគមន៍ដែលចងចាំតម្លៃនៃអថេរពីវិសាលភាពខាងក្រៅ។

---

## 2. ការប្រើ Scope និង Closure ក្នុង Python

- **Local Scope:**
  \`\`\`python
  def my_function():
      x = 10  # Local variable
      print(x)
  my_function()  # បង្ហាញ: 10
  # print(x)  # Error: x មិនមាននៅខាងក្រៅអនុគមន៍
  \`\`\`
- **Global Scope:**
  \`\`\`python
  y = 20  # Global variable
  def my_function():
      print(y)
  my_function()  # បង្ហាញ: 20
  print(y)  # បង្ហាញ: 20
  \`\`\`
- **Global Keyword:**
  \`\`\`python
  count = 0
  def increment():
      global count
      count += 1
  increment()
  print(count)  # បង្ហាញ: 1
  \`\`\`
- **Nonlocal Keyword:**
  \`\`\`python
  def outer():
      x = "outer"
      def inner():
          nonlocal x
          x = "inner"
      inner()
      print(x)
  outer()  # បង្ហាញ: inner
  \`\`\`
- **Closure:**
  \`\`\`python
  def make_counter():
      count = 0
      def counter():
          nonlocal count
          count += 1
          return count
      return counter
  c1 = make_counter()
  print(c1())  # បង្ហាញ: 1
  print(c1())  # បង្ហាញ: 2
  c2 = make_counter()
  print(c2())  # បង្ហាញ: 1
  \`\`\`

---

## 3. ការអនុវត្តក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ:**

\`\`\`python
# ប្រើ global scope
total = 0
def add_to_total(amount):
    global total
    total += amount
add_to_total(50)
print(f"សរុប: {total}")  # បង្ហាញ: សរុប: 50
\`\`\`

**ឧទាហរណ៍ជាមួយ closure:**

\`\`\`python
def make_greeter(greeting):
    def greet(name):
        return f"{greeting}, {name}!"
    return greet

hello_greeter = make_greeter("សួស្តី")
print(hello_greeter("សុខា"))  # បង្ហាញ: សួស្តី, សុខា!
hi_greeter = make_greeter("ជំរាបសួរ")
print(hi_greeter("វិច្ឆិកា"))  # បង្ហាញ: ជំរាបសួរ, វិច្ឆិកា!
\`\`\`

---

## 4. ហេតុអ្វីសំខាន់?

- **ការគ្រប់គ្រងអថេរ:** វិសាលភាពជួយការពារការប៉ះទង្គិចឈ្មោះអថេរ។
- **ភាពឯករាជ្យ:** Closure អនុញ្ញាតឱ្យអនុគមន៍រក្សាទិន្នន័យឯករាជ្យ។
- **ភាពងាយអាន:** ធ្វើឱ្យកូដមានអត្ថន័យ និងសុវត្ថិភាព។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Local និង Global Scope</h3>
<p>បង្ហាញភាពខុសគ្នារវាង local និង global scope។</p>
<pre><code class="language-python">
x = "global"
def my_function():
    x = "local"
    print(f"នៅក្នុងអនុគមន៍: {x}")
my_function()  # បង្ហាញ: នៅក្នុងអនុគមន៍: local
print(f"នៅខាងក្រៅ: {x}")  # បង្ហាញ: នៅខាងក្រៅ: global
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Closure</h3>
<p>ប្រើ closure ដើម្បីបង្កើតអនុគមន៍រាប់។</p>
<pre><code class="language-python">
def make_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter
counter1 = make_counter()
print(counter1())  # បង្ហាញ: 1
print(counter1())  # បង្ហាញ: 2
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Scope សំដៅលើអ្វី?',
      options: [
        'តំបន់ដែលអថេរអាចត្រូវបានចូលប្រើ',
        'អនុគមន៍ដែលរក្សាទិន្នន័យ',
        'ការហៅអនុគមន៍',
        'ការផ្ទុកទិន្នន័យ'
      ],
      correct: 0,
      explanation: 'Scope សំដៅលើតំបន់ដែលអថេរអាចត្រូវបានចូលប្រើ។'
    },
    {
      question: 'តើអ្វីជា Local Scope?',
      options: [
        'អថេរដែលកំណត់នៅខាងក្រៅអនុគមន៍',
        'អថេរដែលកំណត់នៅក្នុងអនុគមន៍',
        'អថេរដែលប្រើបានគ្រប់ទីកន្លែង',
        'អថេរដែលប្រើតែនៅក្នុង closure'
      ],
      correct: 1,
      explanation: 'Local Scope ជាអថេរដែលកំណត់នៅក្នុងអនុគមន៍។'
    },
    {
      question: 'តើពាក្យ `global` ធ្វើអ្វី?',
      options: [
        'បញ្ឈប់អនុគមន៍',
        'ចូលប្រើអថេរនៅ global scope',
        'ចូលប្រើអថេរនៅ local scope',
        'បង្កើត closure'
      ],
      correct: 1,
      explanation: '`global` ប្រើសម្រាប់ចូលប្រើអថេរនៅ global scope។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nx = 5\ndef my_function():\n    x = 10\n    print(x)\nmy_function()\n```',
      options: ['5', '10', 'Error', 'គ្មានលទ្ធផល'],
      correct: 1,
      explanation: 'អថេរ x នៅក្នុងអនុគមន៍ជា local scope ដូច្នេះបង្ហាញ 10។'
    },
    {
      question: 'តើពាក្យ `nonlocal` ប្រើសម្រាប់អ្វី?',
      options: [
        'ចូលប្រើអថេរនៅ global scope',
        'ចូលប្រើអថេរនៅ enclosing scope',
        'បង្កើត local scope',
        'បញ្ឈប់អនុគមន៍'
      ],
      correct: 1,
      explanation: '`nonlocal` ប្រើសម្រាប់ចូលប្រើអថេរនៅ enclosing scope។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef outer():\n    x = 1\n    def inner():\n        nonlocal x\n        x += 1\n        return x\n    return inner\nf = outer()\nprint(f())\n```',
      options: ['1', '2', 'Error', '0'],
      correct: 1,
      explanation: 'អនុគមន៍ inner ប្រើ nonlocal x ដើម្បីបង្កើន x ពី 1 ទៅ 2។'
    },
    {
      question: 'តើ Closure ជួយអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'រក្សាទិន្នន័យរវាងការហៅអនុគមន៍',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Closure រក្សាទិន្នន័យរវាងការហៅអនុគមន៍។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nglobal_var = "global"\ndef my_function():\n    local_var = "local"\n    print(global_var, local_var)\nmy_function()\n```',
      options: ['global local', 'global', 'Error', 'local'],
      correct: 0,
      explanation: 'អនុគមន៍ my_function អាចចូលប្រើ global_var និង local_var ដូច្នេះបង្ហាញ "global local"។'
    },
    {
      question: 'តើកូដខាងក្រោមមានប៉ុន្មានលទ្ធផលដែលអាចកើតមាន?\n```python\ndef check_scope(x):\n    if x > 0:\n        return "positive"\n    return "non-positive"\n```',
      options: ['1', '2', '3', '4'],
      correct: 1,
      explanation: 'កូដនេះមាន 2 លទ្ធផលអាចកើតមាន: "positive" ឬ "non-positive"។'
    },
    {
      question: 'តើ Closure ខុសពីអនុគមន៍ធម្មតាដោយរបៀបណា?',
      options: [
        'Closure មិនអាចប្រើអថេរ',
        'Closure ចងចាំតម្លៃនៃអថេរពី enclosing scope',
        'Closure ប្រើសម្រាប់ loop តែប៉ុណ្ណោះ',
        'Closure ប្រើសម្រាប់ global scope'
      ],
      correct: 1,
      explanation: 'Closure ចងចាំតម្លៃនៃអថេរពី enclosing scope។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef make_counter():\n    count = 0\n    def counter():\n        nonlocal count\n        count += 1\n        return count\n    return counter\nc = make_counter()\nprint(c(), c())\n```',
      options: ['1 1', '1 2', 'Error', '0 1'],
      correct: 1,
      explanation: 'Closure counter បង្កើន count ពី 0 ទៅ 1 និង 1 ទៅ 2 ដូច្នេះបង្ហាញ "1 2"។'
    },
    {
      question: 'តើ Scope និង Closure ធ្វើឱ្យកូដមានអត្ថន័យដោយរបៀបណា?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកូដមានសុវត្ថិភាព និងរៀបរយ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Scope និង Closure ធ្វើឱ្យកូដមានសុវត្ថិភាព និងរៀបរយ។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Scope និង Closure។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំចំនួនលេខដែលចង់រាប់ (Integer)។
2. **ការអនុវត្ត:**
   - បង្កើតអនុគមន៍មួយឈ្មោះ \`make_counter\` ដែលប្រើ closure ដើម្បីបង្កើតអនុគមន៍រាប់។
   - ប្រើ global variable ដើម្បីរក្សាទុកចំនួនសរុបនៃការហៅ counter។
   - បង្ហាញសារជាមួយឈ្មោះ និងលទ្ធផលនៃការរាប់។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដូចជា: "[ឈ្មោះ]: រាប់លើកទី [លេខ], សរុបការហៅ: [ចំនួន]"។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីចំនួនមិនមែនជាលេខគត់។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    # Global variable សម្រាប់រាប់ចំនួនសរុប
    total_calls = 0

    # Variable សម្រាប់ផ្ទុកឈ្មោះ
    user_name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # Variable សម្រាប់ផ្ទុកចំនួន
    count_limit = int(input("បញ្ចូលចំនួនលេខដែលអ្នកចង់រាប់: "))
    
    # កំណត់អនុគមន៍ closure
    def make_counter():
        count = 0
        def counter():
            nonlocal count
            global total_calls
            count += 1
            total_calls += 1
            return count
        return counter
    
    # បង្កើត counter
    my_counter = make_counter()
    
    # ប្រើ counter ដើម្បីរាប់
    for _ in range(count_limit):
        result = my_counter()
        print(f"{user_name}: រាប់លើកទី {result}, សរុបការហៅ: {total_calls}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson4_3Content;