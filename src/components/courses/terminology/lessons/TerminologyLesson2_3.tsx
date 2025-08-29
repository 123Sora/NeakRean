import type { LessonContent } from '../../../../types/LessonTypes';

const TerminologyLesson2_3Content: LessonContent = {
  title: 'Type Systems',
  objectives: [
    'យល់ពីអត្ថន័យនៃ Type Systems ក្នុងការសរសេរកម្មវិធី',
    'ស្គាល់ភាពខុសគ្នារវាង Static និង Dynamic Type Systems',
    'រៀនការប្រើ Type Systems ក្នុង Python',
    'ស្វែងយល់ពី Type Hints នៅក្នុង Python',
    'អនុវត្តការប្រើ Type Systems ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# Type Systems 🛠️📊

---

**Type Systems (ប្រព័ន្ធប្រភេទ)** គឺជាវាក្យស័ព្ទដែលសំដៅលើរបៀបដែលភាសាសរសេរកម្មវិធីគ្រប់គ្រងប្រភេទទិន្នន័យ (Data Types) ដើម្បីធានាថាកម្មវិធីដំណើរការបានត្រឹមត្រូវ។

---

## 1. អ្វីទៅជា Type Systems?

- **Type System:** ច្បាប់ដែលកំណត់របៀបដែលទិន្នន័យត្រូវបានកំណត់ប្រភេទ និងប្រើប្រាស់។
- **សារៈសំខាន់:**
  - ការពារកំហុសទាក់ទងនឹងប្រភេទទិន្នន័យ។
  - ជួយធ្វើឱ្យកូដងាយយល់ និងថែទាំ។
- **ប្រភេទនៃ Type Systems:**
  - **Static Type System:** កំណត់ប្រភេទទិន្នន័យមុនពេលដំណើរការ (ឧ. C++, Java)។
  - **Dynamic Type System:** កំណត់ប្រភេទទិន្នន័យនៅពេលដំណើរការ (ឧ. Python, JavaScript)។

---

## 2. Static និង Dynamic Type Systems

- **Static Type System:**
  - ទាមទារការកំណត់ប្រភេទទិន្នន័យនៅពេលសរសេរកូដ។
  - ឧទាហរណ៍ (C++):

\`\`\`cpp
int age = 20; // កំណត់ប្រភេទ int
age = "Sokha"; // កំហុស: មិនអាចប្តូរទៅ String
\`\`\`

- **Dynamic Type System:**
  - អនុញ្ញាតឱ្យផ្លាស់ប្តូរប្រភេទទិន្នន័យនៅពេលដំណើរការ។
  - **ឧទាហរណ៍ក្នុង Python:**

\`\`\`python
age = 20  # Integer
age = "Sokha"  # ប្តូរទៅ String
print(age)  # បង្ហាញ: Sokha
\`\`\`

---

## 3. Type Systems ក្នុង Python

- Python ប្រើ **Dynamic Type System**។
- មិនចាំបាច់កំណត់ប្រភេទទិន្នន័យជាមុន។
- ប៉ុន្តែ Python មាន **Type Hints** ដើម្បីបង្កើនភាពច្បាស់លាស់។

**ឧទាហរណ៍ Type Hints ក្នុង Python:**

\`\`\`python
def greet(name: str) -> str:
    return f"សួស្តី {name}!"
print(greet("សុខា"))  # បង្ហាញ: សួស្តី សុខា!
\`\`\`

- \`name: str\` បញ្ជាក់ថា \`name\` គឺជា String។
- \`-> str\` បញ្ជាក់ថា Function ត្រឡប់ String។

---

## 4. ការប្រើ Type Hints ក្នុង Python

- **Type Hints:** ជួយបញ្ជាក់ប្រភេទទិន្នន័យដើម្បីធ្វើឱ្យកូដងាយអាន។
- មិនប៉ះពាល់ដល់ការដំណើរការកម្មវិធី។
- ប្រើឧបករណ៍ដូចជា \`mypy\` ដើម្បីពិនិត្យកំហុសប្រភេទ។

**ឧទាហរណ៍ Type Hints:**

\`\`\`python
def calculate_total(items: int, price: float) -> float:
    return items * price
total: float = calculate_total(5, 10.5)
print(total)  # បង្ហាញ: 52.5
\`\`\`

---

## 5. ការអនុវត្ត Type Systems ក្នុងកម្មវិធី

**ឧទាហរណ៍កូដ:**

\`\`\`python
def add_numbers(a: int, b: int) -> int:
    return a + b

def is_adult(age: int) -> bool:
    return age >= 18

# ប្រើ Variables ជាមួយ Type Hints
name: str = "សុខា"
age: int = 20
total: int = add_numbers(5, 3)
is_adult_status: bool = is_adult(age)

print(f"{name}: អាយុ={age}, សរុប={total}, ជាមនុស្សធំ={is_adult_status}")
# បង្ហាញ: សុខា: អាយុ=20, សរុប=8, ជាមនុស្សធំ=True
\`\`\`

---

## 6. ហេតុអ្វី Type Systems សំខាន់?

- **ការការពារកំហុស:** កាត់បន្ថយកំហុសទាក់ទងនឹងប្រភេទទិន្នន័យ។
- **ភាពងាយអាន:** Type Hints ធ្វើឱ្យកូដច្បាស់លាស់។
- **ការសហការ:** ជួយអ្នកអភិវឌ្ឍន៍ផ្សេងទៀតយល់កូដ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Dynamic Type System ក្នុង Python</h3>
<p>បង្ហាញភាពបត់បែននៃ Dynamic Type System។</p>
<pre><code class="language-python">
value = 10  # Integer
value = "Hello"  # ប្តូរទៅ String
print(value)  # បង្ហាញ: Hello
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Type Hints</h3>
<p>ប្រើ Type Hints ដើម្បីបញ្ជាក់ប្រភេទទិន្នន័យ។</p>
<pre><code class="language-python">
def calculate_area(radius: float) -> float:
    PI: float = 3.14
    return PI * radius * radius
area: float = calculate_area(5.0)
print(f"ផ្ទៃរង្វង់: {area}")  # បង្ហាញ: ផ្ទៃរង្វង់: 78.5
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Type System គឺជាអ្វី?',
      options: [
        'បណ្តុំនៃកូដ',
        'ច្បាប់សម្រាប់គ្រប់គ្រងប្រភេទទិន្នន័យ',
        'ការធ្វើកិច្ចការម្តងហើយម្តងទៀត',
        'ការគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Type System ជាច្បាប់សម្រាប់គ្រប់គ្រងប្រភេទទិន្នន័យ។'
    },
    {
      question: 'តើ Static Type System ធ្វើការនៅពេលណា?',
      options: [
        'នៅពេលដំណើរការ',
        'មុនពេលដំណើរការ',
        'នៅពេលបង្កើត UI',
        'នៅពេលគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Static Type System កំណត់ប្រភេទទិន្នន័យមុនពេលដំណើរការ។'
    },
    {
      question: 'តើ Dynamic Type System អនុញ្ញាតឱ្យធ្វើអ្វី?',
      options: [
        'ផ្លាស់ប្តូរប្រភេទទិន្នន័យនៅពេលដំណើរការ',
        'កំណត់ប្រភេទទិន្នន័យមុនពេលដំណើរការ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 0,
      explanation: 'Dynamic Type System អនុញ្ញាតឱ្យផ្លាស់ប្តូរប្រភេទទិន្នន័យនៅពេលដំណើរការ។'
    },
    {
      question: 'តើ Python ប្រើ Type System ប្រភេទណា?',
      options: ['Static', 'Dynamic', 'Hybrid', 'គ្មាន'],
      correct: 1,
      explanation: 'Python ប្រើ Dynamic Type System។'
    },
    {
      question: 'តើ Type Hints ក្នុង Python មានគោលបំណងអ្វី?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ធ្វើឱ្យកូដងាយអាន និងការពារកំហុស',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Type Hints ធ្វើឱ្យកូដងាយអាន និងការពារកំហុស។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nvalue = 10\nvalue = "Hello"\nprint(value)\n```',
      options: ['10', 'Hello', 'Error', 'គ្មានលទ្ធផល'],
      correct: 1,
      explanation: 'Dynamic Type System អនុញ្ញាតឱ្យ value ប្តូរទៅ String "Hello"។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef greet(name: str) -> str:\n    return f"សួស្តី {name}!"\nprint(greet("សុខា"))\n```',
      options: ['សួស្តី សុខា!', 'Error', 'True', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function greet ប្រើ Type Hints និងបង្ហាញ "សួស្តី សុខា!"។'
    },
    {
      question: 'តើឧបករណ៍ណាមួយប្រើដើម្បីពិនិត្យ Type Hints ក្នុង Python?',
      options: ['VS Code', 'mypy', 'PyCharm', 'JavaScript'],
      correct: 1,
      explanation: '`mypy` ជាឧបករណ៍សម្រាប់ពិនិត្យ Type Hints ក្នុង Python។'
    },
    {
      question: 'តើ Static Type System មាននៅក្នុងភាសាណាខ្លះ?',
      options: ['Python, JavaScript', 'C++, Java', 'Python, Ruby', 'JavaScript, Ruby'],
      correct: 1,
      explanation: 'C++ និង Java ប្រើ Static Type System។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef calculate_total(items: int, price: float) -> float:\n    return items * price\ntotal: float = calculate_total(5, 10.5)\nprint(total)\n```',
      options: ['52.5', '15.5', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Function calculate_total គណនា 5 * 10.5 = 52.5។'
    },
    {
      question: 'តើ Type Hints ប៉ះពាល់ដល់ការដំណើរការកម្មវិធីទេ?',
      options: ['ប៉ះពាល់', 'មិនប៉ះពាល់', 'ប៉ះពាល់តែនៅពេលកំហុស', 'ប៉ះពាល់តែនៅ Static Type System'],
      correct: 1,
      explanation: 'Type Hints មិនប៉ះពាល់ដល់ការដំណើរការកម្មវិធី។'
    },
    {
      question: 'តើហេតុអ្វី Type Systems សំខាន់?',
      options: [
        'បង្កើនភាពស្មុគស្មាញ',
        'ការពារកំហុសទាក់ទងនឹងប្រភេទទិន្នន័យ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Type Systems ការពារកំហុសទាក់ទងនឹងប្រភេទទិន្នន័យ។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Type Systems និង Type Hints។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ (String)។
   - ស្នើសុំអាយុអ្នកប្រើ (Integer)។
2. **ការអនុវត្ត:**
   - បង្កើត Variable ជាមួយ Type Hints សម្រាប់ឈ្មោះ (str) និងអាយុ (int)។
   - បង្កើត Function \`is_adult\` ជាមួយ Type Hints ដើម្បីពិនិត្យថាអ្នកប្រើជាមនុស្សធំ (អាយុ >= 18) ឬអត់។
   - បង្កើត Function \`greet_user\` ជាមួយ Type Hints ដើម្បីបង្ហាញសារស្វាគមន៍។
   - ប្រើ Loop ដើម្បីបង្ហាញសារស្វាគមន៍ចំនួន 2 ដង។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញសារដូចជា: "[ឈ្មោះ]: ជាមនុស្សធំ=[True/False]"។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីអាយុមិនមែនជាលេខគត់។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
def is_adult(age: int) -> bool:
    """ពិនិត្យថាអ្នកប្រើជាមនុស្សធំឬអត់។"""
    return age >= 18

def greet_user(name: str, is_adult_status: bool) -> str:
    """បង្ហាញសារស្វាគមន៍។"""
    return f"{name}: ជាមនុស្សធំ={is_adult_status}"

try:
    # Variable ជាមួយ Type Hints
    user_name: str = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not user_name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    
    # Variable ជាមួយ Type Hints
    user_age: int = int(input("បញ្ចូលអាយុរបស់អ្នក: "))
    
    # ប្រើ Function ជាមួយ Type Hints
    adult_status: bool = is_adult(user_age)
    
    # Loop ដើម្បីបង្ហាញសារ 2 ដង
    for i in range(2):
        print(greet_user(user_name, adult_status))
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default TerminologyLesson2_3Content;
