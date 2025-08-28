import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson4_3Content: LessonContent = {
  title: 'Scope និង Closures',
  objectives: [
    'យល់ពីគោលគំនិតនៃ Scope ក្នុងការសរសេរកម្មវិធី',
    'ស្វែងយល់ពីប្រភេទ Scope (Global, Local) និងផលប៉ះពាល់របស់វា',
    'រៀនគោលគំនិតនៃ Closures ក្នុង Python',
    'ស្គាល់ការគ្រប់គ្រង Variables នៅក្នុង Scope ផ្សេងៗ',
    'អនុវត្ត Scope និង Closures ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# Scope និង Closures 🔒💻

---

**Scope** និង **Closures** គឺជាគោលគំនិតសំខាន់ក្នុងការគ្រប់គ្រង Variables និងការប្រើប្រាស់ Functions។

---

## 1. គោលគំនិតនៃ Scope

**Scope** កំណត់ទីតាំងដែល Variable អាចប្រើបាន។
- **Global Scope:** Variables ដែលប្រកាសនៅក្រៅ Function អាចប្រើបានគ្រប់ទីកន្លែង។
- **Local Scope:** Variables ដែលប្រកាសនៅក្នុង Function អាចប្រើបានតែក្នុង Function នោះ។

**ឧទាហរណ៍កូដ Python:**

\`\`\`python
x = 10  # Global Variable
def my_function():
    x = 5  # Local Variable
    print(f"Local x: {x}")
my_function()
print(f"Global x: {x}")  # បង្ហាញ: Local x: 5, Global x: 10
\`\`\`

---

## 2. Global Keyword

ប្រើ \`global\` Keyword ដើម្បីកែប្រែ Global Variable ពីក្នុង Function។

**ឧទាហរណ៍:**

\`\`\`python
count = 0
def increment():
    global count
    count += 1
increment()
print(count)  # បង្ហាញ: 1
\`\`\`

---

## 3. Nonlocal Keyword

ប្រើ \`nonlocal\` Keyword ដើម្បីកែប្រែ Variable នៅក្នុង Parent Function។

**ឧទាហរណ៍:**

\`\`\`python
def outer():
    x = 10
    def inner():
        nonlocal x
        x += 5
    inner()
    print(x)  # បង្ហាញ: 15
outer()
\`\`\`

---

## 4. Closures

**Closure** គឺជា Function ដែលចងចាំ Variables ពី Scope ខាងក្រៅរបស់វា ទោះបី Function នោះត្រូវបានហៅនៅទីតាំងផ្សេង។

**ឧទាហរណ៍:**

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
\`\`\`

---

## 5. ការគ្រប់គ្រង Scope និង Closures

Scope និង Closures ត្រូវបានប្រើសម្រាប់៖
- **ការគ្រប់គ្រង Variables:** ការពារ Variable ពីការកែប្រែដោយចៃដន្យ។
- **ការបង្កើត Functions ឯករាជ្យ:** Closures អនុញ្ញាតឱ្យ Function រក្សាទិន្នន័យផ្ទាល់ខ្លួន។
- **ការរៀបចំកូដ:** ធ្វើឱ្យកូដមានរចនាសម្ព័ន្ធច្បាស់លាស់។

**ឧទាហរណ៍កូដ:**

\`\`\`python
def create_greeter(name):
    def greeter():
        return f"សួស្តី {name}!"
    return greeter
greet_sokha = create_greeter("សុខា")
print(greet_sokha())  # បង្ហាញ: សួស្តី សុខា!
\`\`\`

---

## 6. ហេតុអ្វីសំខាន់ក្នុងការយល់ Scope និង Closures?

- **ការពារទិន្នន័យ:** Scope ការពារ Variable ពីការកែប្រែដោយចៃដន្យ។
- **ភាពបត់បែន:** Closures អនុញ្ញាតឱ្យ Function រក្សាទិន្នន័យផ្ទាល់ខ្លួន។
- **ការគ្រប់គ្រងកូដ:** ធ្វើឱ្យកូដរៀបចំបានល្អ និងងាយយល់។
- **ការបង្កើត Functions ពិសេស:** Closures អនុញ្ញាតឱ្យបង្កើត Functions ដែលមានអាកប្បកិរិយាពិសេស។
`,
  examples: [
    `<h3>ឧទាហរណ៍��1: Scope</h3>
<p>បង្កើត Function ដែលបង្ហាញភាពខុសគ្នារវាង Global និង Local Scope។</p>
<pre><code class="language-python">
x = 100
def show_scope():
    x = 50
    print(f"Local x: {x}")
show_scope()
print(f"Global x: {x}")
</code></pre>
<hr>
<h3>ឧទាហរណ៍�2: Closure</h3>
<p>បង្កើត Function ដែលប្រើ Closure ដើម្បីរាប់ចំនួន។</p>
<pre><code class="language-python">
def make_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter
c = make_counter()
print(c())  # 1
print(c())  # 2
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Scope គឺជាអ្វី?',
      options: [
        'Function ដែលប្រតិបត្តិកូដ',
        'ទីតាំងដែល Variable អាចប្រើបាន',
        'Loop ដែលប្រតិបត្តិកូដដដែលៗ',
        'Condition សម្រាប់សម្រេចចិត្ត'
      ],
      correct: 1,
      explanation: 'Scope កំណត់ទីតាំងដែល Variable អាចប្រើបាន។'
    },
    {
      question: 'តើ Global Scope គឺជាអ្វី?',
      options: [
        'Variable ក្នុង Function',
        'Variable ក្រៅ Function',
        'Variable ក្នុង Loop',
        'Variable ក្នុង If Statement'
      ],
      correct: 1,
      explanation: 'Global Scope គឺ Variable ដែលប្រកាសក្រៅ Function។'
    },
    {
      question: 'តើ Local Scope គឺជាអ្វី?',
      options: [
        'Variable ក្រៅ Function',
        'Variable ក្នុង Function',
        'Variable ក្នុង Loop',
        'Variable ក្នុង Module'
      ],
      correct: 1,
      explanation: 'Local Scope គឺ Variable ដែលប្រកាសក្នុង Function។'
    },
    {
      question: 'តើ `global` Keyword ប្រើសម្រាប់អ្វី?',
      options: [
        'កែប្រែ Local Variable',
        'កែប្រែ Global Variable',
        'បង្កើត Closure',
        'បញ្ឈប់ Function'
      ],
      correct: 1,
      explanation: '`global` Keyword ប្រើដើម្បីកែប្រែ Global Variable ពីក្នុង Function�।'
    },
    {
      question: 'តើ `nonlocal` Keyword ប្រើសម្រាប់អ្វី?',
      options: [
        'កែប្រែ Global Variable',
        'កែប្រែ Variable ក្នុង Parent Function',
        'បង្កើត Local Variable',
        'បញ្ឈប់ Function'
      ],
      correct: 1,
      explanation: '`nonlocal` Keyword ប្រើដើម្បីកែប្រែ Variable ក្នុង Parent Function។'
    },
    {
      question: 'តើ Closure ជាអ្វី?',
      options: [
        'Function ដែលប្រើ Global Variable',
        'Function ដែលចងចាំ Variables ពី Scope ខាងក្រៅ',
        'Loop ដែលប្រតិបត្តិកូដដដែលៗ',
        'Condition សម្រាប់សម្រេចចិត្ត'
      ],
      correct: 1,
      explanation: 'Closure ជា Function ដែលចងចាំ Variables ពី Scope ខាងក្រៅ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nx = 10\ndef my_func():\n    x = 5\n    print(x)\nmy_func()\nprint(x)\n```',
      options: ['5, 5', '5, 10', '10, 10', 'Error'],
      correct: 1,
      explanation: 'Local `x=5` បង្ហាញ ៥, Global `x=10` នៅដដែល។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 5\n    inner()\n    print(x)\nouter()\n```',
      options: ['10', '15', 'Error', 'គ្មានលទ្ធផល'],
      correct: 1,
      explanation: '`nonlocal x` កែ `x` ពី ១០ ទៅ ១៥។'
    },
    {
      question: 'តើ Closure អនុញ្ញាតឱ្យ Function ធ្វើអ្វី?',
      options: [
        'បង្កើត Global Variable',
        'ចងចាំ Variables ពី Scope ខាងក្រៅ',
        'បញ្ឈប់កម្មវិធី',
        'បង្កើត Loop'
      ],
      correct: 1,
      explanation: 'Closure អនុញ្ញាតឱ្យ Function ចងចាំ Variables ពី Scope ខាងក្រៅ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ndef make_counter():\n    count = 0\n    def counter():\n        nonlocal count\n        count += 1\n        return count\n    return counter\nc = make_counter()\nprint(c())\nprint(c())\n```',
      options: ['1, 2', '1, 1', 'Error', 'គ្មានលទ្ធផល'],
      correct: 0,
      explanation: 'Closure `counter` ចងចាំ `count` និងបង្ហាញ ១, ២។'
    },
    {
      question: 'តើ Scope ជួយធ្វើអ្វី?',
      options: [
        'បង្កើនទំហំកម្មវិធី',
        'ការពារ Variable ពីការកែប្រែដោយចៃដន្យ',
        'បង្កើត UI',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Scope ការពារ Variable ពីការកែប្រែដោយចៃដន្យ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ncount = 0\ndef increment():\n    global count\n    count += 1\nincrement()\nprint(count)\n```',
      options: ['0', '1', 'Error', 'គ្មានលទ្ធផល'],
      correct: 1,
      explanation: '`global count` កែ `count` ពី ០ ទៅ ១។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Scope និង Closures។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
2. **ការបង្កើត Functions:**
   - បង្កើត Function \`make_greeter\` ដែលទទួល \`name\` និងបង្កើត Closure ដែលត្រឡប់សារស្វាគមន៍។
   - បង្កើត Function \`make_counter\` ដែលបង្កើត Closure សម្រាប់រាប់ចំនួនការហៅ។
3. **ការប្រើ Functions:**
   - ហៅ Closure ពី \`make_greeter\` ដើម្បីបង្ហាញសារស្វាគមន៍។
   - ហៅ Closure ពី \`make_counter\` ២ ដង ដើម្បីបង្ហាញចំនួនការហៅ។
4. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលឈ្មោះមិនត្រឹមត្រូវ (ឧ. ទទេ)។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរ� s កម្មវិធី។
    `,
    solution: `
\`\`\`python
def make_greeter(name):
    def greeter():
        return f"សួស្តី {name}!"
    return greeter

def make_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    if not name.strip():
        raise ValueError("ឈ្មោះមិនអាចទទេបាន!")
    greeter = make_greeter(name)
    counter = make_counter()
    print(greeter())
    print(f"ការហៅលើកទី 1: {counter()}")
    print(f"ការហៅលើកទី 2: {counter()}")
except ValueError as e:
    print(f"កំហុស: {e}")
\`\`\`
`
  }
};

export default ConceptLesson4_3Content;
