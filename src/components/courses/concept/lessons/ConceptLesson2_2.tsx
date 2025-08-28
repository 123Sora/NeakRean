import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson2_2Content: LessonContent = {
  title: 'Data Types និងការប្រើប្រាស់',
  objectives: [
    'យល់ពីប្រភេទទិន្នន័យ (Data Types) មូលដ្ឋានក្នុងការសរសេរកម្មវិធី',
    'ស្វែងយល់ពីការប្រើប្រាស់ Data Types ក្នុងភាសា Python',
    'រៀនការបំប្លែង Data Types (Type Conversion)',
    'ស្គាល់ភាពខុសគ្នារវាង Static និង Dynamic Typing',
    'ប្រើ Data Types ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# Data Types និងការប្រើប្រាស់ 📊💻

---

**Data Types** គឺជាប្រភេទនៃទិន្នន័យដែល Variable អាចផ្ទុក។ វាកំណត់ថាតើទិន្នន័យអាចប្រើសម្រាប់អ្វី និងរបៀបដែលកម្មវិធីគ្រប់គ្រងវា។ នៅក្នុងភាសា Python មាន Data Types មូលដ្ឋានជាច្រើន។

---

## 1. ប្រភេទទិន្នន័យមូលដ្ឋានក្នុង Python

- **Integer (int):** លេខគត់ (ឧ. ១, ១០០, -៥)។
- **Float (float):** លេខទសភាគ (ឧ. ១.៥, ៣.១៤, -០.៥)។
- **String (str):** អត្ថបទ ឬតួអក្សរ (ឧ. "សុខា", "Hello")។
- **Boolean (bool):** តម្លៃ True ឬ False។
- **List (list):** បញ្ជីទិន្នន័យដែលអាចផ្លាស់ប្តូរបាន (ឧ. [1, 2, 3], ["សុខា", "រស្មី"])។
- **Tuple (tuple):** បញ្ជីទិន្នន័យដែលមិនអាចផ្លាស់ប្តូរបាន (ឧ. (1, 2, 3))។
- **Dictionary (dict):** ទិន្នន័យជា Key-Value Pairs (ឧ. {"name": "សុខា", "age": 25})។

---

## 2. ការប្រើប្រាស់ Data Types ក្នុង Python

**ឧទាហរណ៍កូដ:**

\`\`\`python
# ប្រភេទទិន្នន័យផ្សេងៗ
age = 25  # Integer
height = 1.75  # Float
name = "សុខា"  # String
is_student = True  # Boolean
numbers = [1, 2, 3]  # List
coordinates = (10, 20)  # Tuple
person = {"name": "សុខា", "age": 25}  # Dictionary

# បង្ហាញប្រភេទទិន្នន័យ
print(type(age))  # <class 'int'>
print(type(height))  # <class 'float'>
print(type(name))  # <class 'str'>
\`\`\`

---

## 3. ការបំប្លែង Data Types (Type Conversion)

Python អនុញ្ញាតឱ្យបំប្លែង Data Types៖
- **int():** បំប្លែងទៅជាលេខគត់ (ឧ. \`int("10")\` → ១០)។
- **float():** បំប្លែងទៅជាលេខទសភាគ (ឧ. \`float("3.14")\` → ៣.១៤)។
- **str():** បំប្លែងទៅជាអត្ថបទ (ឧ. \`str(25)\` → "២៥")។
- **list():** បំប្លែងទៅជា List (ឧ. \`list((1, 2, 3))\` → [1, 2, 3])។

**ឧទាហរណ៍:**

\`\`\`python
num_str = "100"
num_int = int(num_str)  # បំប្លែង String ទៅ Integer
print(num_int + 50)  # 150
\`\`\`

---

## 4. Static និង Dynamic Typing

- **Static Typing:** តម្រូវឱ្យបញ្ជាក់ Data Type ពេលប្រកាស Variable (ឧ. Java, C++)។
  \`\`\`java
  int age = 25;  // តម្រូវឱ្យបញ្ជាក់ int
  \`\`\`
- **Dynamic Typing:** មិនតម្រូវឱ្យបញ្ជាក់ Data Type, Python នឹងកំណត់ដោយស្វ័យប្រវត្តិ។
  \`\`\`python
  age = 25  # Python ដឹងថានេះជា int
  age = "ហាសិប"  # ឥឡូវជា String
  \`\`\`

---

## 5. ការប្រើ Data Types ក្នុងកម្មវិធី

Data Types ត្រូវបានប្រើសម្រាប់៖
- **គណនា:** Integer និង Float សម្រាប់ការគណនា។
- **ការបង្ហាញទិន្នន័យ:** String សម្រាប់អត្ថបទ។
- **ការសម្រេចចិត្ត:** Boolean សម្រាប់ Logic (True/False)។
- **ការរៀបចំទិន្នន័យ:** List, Tuple, Dictionary សម្រាប់ផ្ទុកទិន្នន័យច្រើន។

**ឧទាហរណ៍កូដ:**

\`\`\`python
# ប្រើ Data Types ផ្សេងៗ
student = {"name": "សុខា", "age": 25, "grades": [90, 85, 88]}
print(f"សិស្ស: {student['name']}, អាយុ: {student['age']}, ពិន្ទុ: {student['grades']}")
\`\`\`

---

## 6. ហេតុអ្វីត្រូវយល់ពី Data Types?

- **ភាពត្រឹមត្រូវ:** ការប្រើ Data Type ត្រឹមត្រូវធានាថាកម្មវិធីដំណើរការត្រឹមត្រូវ។
- **ប្រសិទ្ធភាព:** ការជ្រើសរើស Data Type សមស្របជួយសន្សំ Memory។
- **ភាពងាយស្រួល:** ធ្វើឱ្យកូដមានអត្ថន័យ និងអានបានស្រួល។
- **ការគ្រប់គ្រងទិន្នន័យ:** អនុញ្ញាតឱ្យរៀបចំទិន្នន័យស្មុគស្មាញ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Data Types ក្នុង Python</h3>
<p>បង្កើតកម្មវិធីដែលប្រើ Integer, Float, និង String។</p>
<pre><code class="language-python">
age = 25  # Integer
height = 1.75  # Float
name = "សុខា"  # String
print(f"សួស្តី {name}! អ្នកមានអាយុ {age} ឆ្នាំ និងកម្ពស់ {height} ម៉ែត្រ។")
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ List និង Dictionary</h3>
<p>បង្កើតកម្មវិធីដែលផ្ទុកទិន្នន័យសិស្សជា List និង Dictionary។</p>
<pre><code class="language-python">
student = {"name": "សុខា", "age": 25, "grades": [90, 85, 88]}
print(f"សិស្ស: {student['name']}, ពិន្ទុ: {student['grades']}")
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Data Type ណាដែលប្រើសម្រាប់លេខគត់?',
      options: ['Float', 'Integer', 'String', 'Boolean'],
      correct: 1,
      explanation: 'Integer ប្រើសម្រាប់លេខគត់ (ឧ. ១, ១០០)។'
    },
    {
      question: 'តើ Data Type ណាដែលប្រើសម្រាប់អត្ថបទ?',
      options: ['List', 'String', 'Tuple', 'Dictionary'],
      correct: 1,
      explanation: 'String ប្រើសម្រាប់អត្ថបទ ឬតួអក្សរ។'
    },
    {
      question: 'តើ Boolean Data Type មានតម្លៃអ្វីខ្លះ?',
      options: ['1 និង 0', 'True និង False', 'String និង Integer', 'List និង Tuple'],
      correct: 1,
      explanation: 'Boolean មានតម្លៃ True ឬ False។'
    },
    {
      question: 'តើ Data Type ណាដែលអាចផ្លាស់ប្តូរបាន?',
      options: ['Tuple', 'List', 'String', 'Integer'],
      correct: 1,
      explanation: 'List អាចផ្លាស់ប្តូរបាន (Mutable), ចំណែក Tuple និង String មិនអាចផ្លាស់ប្តូរបាន។'
    },
    {
      question: 'តើភាសា Python ប្រើ Typing ប្រភេទណា?',
      options: ['Static Typing', 'Dynamic Typing', 'No Typing', 'Manual Typing'],
      correct: 1,
      explanation: 'Python ប្រើ Dynamic Typing ដែលមិនតម្រូវឱ្យបញ្ជាក់ Data Type។'
    },
    {
      question: 'តើ Function ណាដែលបំប្លែង String ទៅជា Integer?',
      options: ['str()', 'int()', 'float()', 'list()'],
      correct: 1,
      explanation: '`int()` បំប្លែង String ទៅជា Integer (ឧ. `int("10")` → ១០)។'
    },
    {
      question: 'តើ Data Type ណាដែលប្រើ Key-Value Pairs?',
      options: ['List', 'Tuple', 'Dictionary', 'Boolean'],
      correct: 2,
      explanation: 'Dictionary ប្រើ Key-Value Pairs (ឧ. `{"name": "សុខា"}`)។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃ `type(3.14)` ក្នុង Python?',
      options: ['<class "int">', '<class "float">', '<class "str">', '<class "bool">'],
      correct: 1,
      explanation: '`type(3.14)` បង្ហាញ `<class "float">` ព្រោះ ៣.១៤ ជា Float។'
    },
    {
      question: 'តើ Data Type ណាដែលមិនអាចផ្លាស់ប្តូរបាន?',
      options: ['List', 'Dictionary', 'Tuple', 'Integer'],
      correct: 2,
      explanation: 'Tuple ជា Immutable មិនអាចផ្លាស់ប្តូរបាន។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃ `int("50") + 10` ក្នុង Python?',
      options: ['60', '"60"', '50', 'Error'],
      correct: 0,
      explanation: '`int("50")` បំប្លែង "50" ទៅ ៥០, បន្ទាប់មក ៥០ + ១០ = ៦០។'
    },
    {
      question: 'តើ Data Type ណាដែលសមស្របសម្រាប់ផ្ទុកបញ្ជីនៃពិន្ទុ?',
      options: ['String', 'List', 'Boolean', 'Integer'],
      correct: 1,
      explanation: 'List សមស្របសម្រាប់ផ្ទុកបញ្ជីនៃពិន្ទុ (ឧ. [90, 85, 88])។'
    },
    {
      question: 'តើ Static Typing ខុសពី Dynamic Typing ដូចម្តេច?',
      options: [
        'Static Typing មិនតម្រូវឱ្យបញ្ជាក់ Data Type',
        'Static Typing តម្រូវឱ្យបញ្ជាក់ Data Type',
        'Static Typing ប្រើសម្រាប់ String តែប៉ុណ្ណោះ',
        'Static Typing មិនអនុញ្ញាតឱ្យផ្លាស់ប្តូរតម្លៃ'
      ],
      correct: 1,
      explanation: 'Static Typing តម្រូវឱ្យបញ្ជាក់ Data Type ពេលប្រកាស Variable។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃ `str(123)` ក្នុង Python?',
      options: ['123', '"123"', 'Error', '123.0'],
      correct: 1,
      explanation: '`str(123)` បំប្លែង ១២៣ ទៅជា String `"123"`។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Data Types ផ្សេងៗដើម្បីគ្រប់គ្រងទិន្នន័យសិស្ស។

**តម្រូវការ:**
1. **ការប្រកាស Variables:**
   - ប្រកាស Variables សម្រាប់ឈ្មោះ (\`name\`, String), អាយុ (\`age\`, Integer), ពិន្ទុ (\`grades\`, List), និងស្ថានភាពសិស្ស (\`is_student\`, Boolean)។
2. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះ និងអាយុពីអ្នកប្រើ។
   - កំណត់ \`grades\` ជា List ដែលមានពិន្ទុ ៣ តម្លៃ (ឧ. [90, 85, 88])។
   - កំណត់ \`is_student\` ជា \`True\`។
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញឈ្មោះ, អាយុ, ពិន្ទុ, និងស្ថានភាពសិស្ស។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលអាយុមិនមែនជាលេខ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    age = int(input("បញ្ចូលអាយុរបស់អ្នក: "))
    grades = [90, 85, 88]
    is_student = True
    print(f"សិស្ស: {name}")
    print(f"អាយុ: {age} ឆ្នាំ")
    print(f"ពិន្ទុ: {grades}")
    print(f"ជាសិស្ស: {is_student}")
except ValueError:
    print("សូមបញ្ចូលអាយុជាលេខ!")
\`\`\`
`
  }
};

export default ConceptLesson2_2Content;
