import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson3_2Content: LessonContent = {
  title: 'Loops (For, While)',
  objectives: [
    'យល់ពីគោលគំនិតនៃ Loops ក្នុងការសរសេរកម្មវិធី',
    'ស្វែងយល់ពីរបៀបប្រើ For Loop និង While Loop ក្នុង Python',
    'រៀនការប្រើ Break និង Continue ដើម្បីគ្រប់គ្រង Loop',
    'អនុវត្ត Loops ដើម្បីធ្វើការងារដដែលៗ',
    'ស្គាល់ភាពខុសគ្នារវាង For Loop និង While Loop'
  ],
  content: `
# Loops (For, While) 🔄💻

---

**Loops** គឺជា Control Structures ដែលអនុញ្ញាតឱ្យកម្មវិធីប្រតិបត្តិកូដម្តងហើយម្តងទៀត ដោយផ្អែកលើលក្ខខណ្ឌ ឬចំនួនជាក់លាក់។ នៅក្នុង Python មាន Loops ពីរប្រភេទសំខាន់៖ **For Loop** និង **While Loop**។

---

## 1. គោលគំនិតនៃ Loops

Loops ត្រូវបានប្រើដើម្បី៖
- ប្រតិបត្តិកូដដដែលៗ (ឧ. បង្ហាញលេខ ១ ដល់ ១០)។
- ឆ្លងកាត់ទិន្នន័យ (ឧ. បញ្ជី ឬអត្ថបទ)។
- ដំណើរការរហូតដល់លក្ខខណ្ឌមួយជា \`False\`។

---

## 2. For Loop

**For Loop** ប្រើសម្រាប់ឆ្លងកាត់ Iterable (ឧ. List, String, Range) ដោយចំនួនជាក់លាក់។

**ឧទាហរណ៍:**

\`\`\`python
# បង្ហាញលេខ 1 ដល់ 5
for i in range(1, 6):
    print(i)
\`\`\`

**ឆ្លងកាត់ List:**

\`\`\`python
fruits = ["ផ្លែប៉ោម", "ផ្លែចេក", "ផ្លែស្ត្របឺរី"]
for fruit in fruits:
    print(f"ផ្លែឈើ: {fruit}")
\`\`\`

---

## 3. While Loop

**While Loop** ប្រតិបត្តិកូដដរាបណាលក្ខខណ្ឌនៅតែ \`True\`។

**ឧទាហរណ៍:**

\`\`\`python
count = 1
while count <= 5:
    print(count)
    count += 1
\`\`\`

---

## 4. Break និង Continue

- **Break:** បញ្ឈប់ Loop ទាំងស្រុង។
  \`\`\`python
  for i in range(1, 10):
      if i == 5:
          break
      print(i)  # បង្ហាញ 1, 2, 3, 4
  \`\`\`
- **Continue:** រំលងអនុវត្តកូដនៅសល់ក្នុង Loop នោះ ហើយបន្តទៅវដ្តបន្ទាប់។
  \`\`\`python
  for i in range(1, 6):
      if i == 3:
          continue
      print(i)  # បង្ហាញ 1, 2, 4, 5
  \`\`\`

---

## 5. ភាពខុសគ្នារវាង For Loop និង While Loop

| លក្ខណៈ          | For Loop                            | While Loop                          |
|-------------------|-------------------------------------|-------------------------------------|
| **ការប្រើប្រាស់** | ឆ្លងកាត់ Iterable ឬចំនួនជាក់លាក់ | ប្រតិបត្តិដរាបណាលក្ខខណ្ឌ \`True\` |
| **ឧទាហរណ៍**      | \`for i in range(10)\`               | \`while count < 10\`                 |
| **ករណីប្រើ**      | ចំនួនវដ្តច្បាស់លាស់               | ចំនួនវដ្តមិនច្បាស់លាស់           |

---

## 6. ការប្រើ Loops ក្នុងកម្មវိធី

Loops ត្រូវបានប្រើសម្រាប់៖
- **ការគណនាដដែលៗ:** ឧទាហរណ៍ គណនាផលបូកនៃលេខ។
- **ការឆ្លងកាត់ទិន្នន័យ:** ឧទាហរណ៍ បង្ហាញរាល់ធាតុក្នុង List។
- **ការគ្រប់គ្រងលំហូរ:** ឧទាហរណ៍ រង់ចាំអ្នកប្រើបញ្ចូលទិន្នន័យត្រឹមត្រូវ។

**ឧទាហរណ៍កូដ:**

\`\`\`python
# គណនាផលបូកនៃលេខ 1 ដល់ 10
total = 0
for i in range(1, 11):
    total += i
print(f"ផលបូក: {total}")  # 55
\`\`\`

---

## 7. ហេតុអ្វីសំខាន់ក្នុងការប្រើ Loops?

- **ប្រសិទ្ធភាព:** កាត់បន្ថយការសរសេរកូដដដែលៗ។
- **ភាពបត់បែន:** អនុញ្ញាតឱ្យដំណើរការទិន្នន័យច្រើន។
- **ការគ្រប់គ្រងលំហូរ:** អនុញ្ញាតឱ្យគ្រប់គ្រងការប្រតិបត្តិកម្មវិធី។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ For Loop</h3>
<p>បង្កើតកម្មវិធីដែលបង្ហាញលេខ 1 ដល់ 5។</p>
<pre><code class="language-python">
for i in range(1, 6):
    print(i)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ While Loop</h3>
<p>បង្កើតកម្មវិធីដែលបង្ហាញលេខ 1 ដល់ 5 ដោយប្រើ While Loop។</p>
<pre><code class="language-python">
count = 1
while count <= 5:
    print(count)
    count += 1
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Loop ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើការសម្រេចចិត្ត',
        'ប្រតិបត្តិកូដដដែលៗ',
        'ផ្ទុកទិន្នន័យ',
        'បង្កើត Function'
      ],
      correct: 1,
      explanation: 'Loop ប្រើសម្រាប់ប្រតិបត្តិកូដដដែលៗ។'
    },
    {
      question: 'តើ For Loop សមស្របសម្រាប់អ្វី?',
      options: [
        'លក្ខខណ្ឌមិនច្បាស់លាស់',
        'ចំនួនវដ្តច្បាស់លាស់',
        'ការសម្រេចចិត្ត',
        'ការគ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'For Loop សមស្របសម្រាប់ចំនួនវដ្តច្បាស់លាស់ ដូចជា Iterable។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nfor i in range(1, 4):\n    print(i)\n```',
      options: ['1, 2, 3', '1, 2, 3, 4', '0, 1, 2', 'Error'],
      correct: 0,
      explanation: '`range(1, 4)` បង្ហាញលេខ ១, ២, ៣។'
    },
    {
      question: 'តើ While Loop ប្រតិបត្តិដរាបណាលក្ខខណ្ឌណាមួយ?',
      options: ['ជា `True`', 'ជា `False`', 'មាន Variable', 'មាន Iterable'],
      correct: 0,
      explanation: 'While Loop ប្រតិបត្តិដរាបណាលក្ខខណ្ឌជា `True`។'
    },
    {
      question: 'តើ `break` មានន័យថាអ្វី?',
      options: [
        'រំលងវដ្តបច្ចុប្បន្ន',
        'បញ្ឈប់ Loop ទាំងស្រុង',
        'បន្ត Loop ទៅវដ្តបន្ទាប់',
        'បង្កើត Loop ថ្មី'
      ],
      correct: 1,
      explanation: '`break` បញ្ឈប់ Loop ទាំងស្រុង។'
    },
    {
      question: 'តើ `continue` មានន័យថាអ្វី?',
      options: [
        'បញ្ឈប់ Loop',
        'រំលងវដ្តបច្ចុប្បន្ន និងបន្តទៅវដ្តបន្ទាប់',
        'បង្កើត Variable',
        'បង្ហាញទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`continue` រំលងវដ្តបច្ចុប្បន្ន និងបន្តទៅវដ្តបន្ទាប់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\ncount = 1\nwhile count <= 3:\n    print(count)\n    count += 1\n```',
      options: ['1, 2, 3', '1, 2, 3, 4', '0, 1, 2', 'Error'],
      correct: 0,
      explanation: 'While Loop បង្ហាញ ១, ២, ៣ ព្រោះ `count` ចាប់ផ្តើមពី ១ និងបញ្ឈប់នៅ ៣។'
    },
    {
      question: 'តើ For Loop អាចឆ្លងកាត់អ្វីបាន?',
      options: ['Function', 'Iterable', 'Condition', 'Hardware'],
      correct: 1,
      explanation: 'For Loop អាចឆ្លងកាត់ Iterable ដូចជា List, String, ឬ Range។'
    },
    {
      question: 'តើកូដខាងក្រោមនឹងបង្ហាញអ្វី?\n```python\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)\n```',
      options: ['1, 2, 3, 4, 5', '1, 2, 4, 5', '1, 2, 3', 'Error'],
      correct: 1,
      explanation: '`continue` រំលង `i == 3`, ដូច្នេះបង្ហាញ ១, ២, ៤, ៥។'
    },
    {
      question: 'តើ While Loop សមស្របសម្រាប់អ្វី?',
      options: [
        'ចំនួនវដ្តច្បាស់លាស់',
        'ចំនួនវដ្តមិនច្បាស់លាស់',
        'ការសម្រេចចិត្ត',
        'ការផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'While Loop សមស្របសម្រាប់ចំនួនវដ្តមិនច្បាស់លាស់។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូดខាងក្រោម?\n```python\nfor i in range(1, 6):\n    if i == 4:\n        break\n    print(i)\n```',
      options: ['1, 2, 3', '1, 2, 3, 4', '1, 2, 3, 4, 5', 'Error'],
      correct: 0,
      explanation: '`break` បញ្ឈប់ Loop នៅ `i == 4`, ដូច្នេះបង្ហាញ ១, ២, ៣។'
    },
    {
      question: 'តើ `range(1, 5)` ក្នុង Python បង្ហាញលេខអ្វីខ្លះ?',
      options: ['1, 2, 3, 4', '1, 2, 3, 4, 5', '0, 1, 2, 3, 4', '1, 2, 3'],
      correct: 0,
      explanation: '`range(1, 5)` បង្ហាញលេខ ១, ២, ៣, ៤។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Loops ដើម្បីគណនា និងបង្ហាញទិន្នន័យ។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំចំនួនលេខដែលអ្នកប្រើចង់គណនាផលបូក (ឧ. ១០ មានន័យថាគណនាផលបូក ១ ដល់ ១០)។
2. **ការប្រើ Loop:**
   - ប្រើ For Loop ដើម្បីគណនាផលបូកនៃលេខពី ១ ដល់ចំនួនដែលបញ្ចូល។
   - ប្រើ While Loop ដើម្បីបង្ហាញលេខពី ១ ដល់ចំនួនដែលបញ្ចូល។
3. **Error Handling:**
   - ប្រើ \`try-except\` ដើម្បីគ្រប់គ្រងករណីដែលអ្នកប្រើបញ្ចូលចំនួនមិនមែនជាលេខ។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។
    `,
    solution: `
\`\`\`python
try:
    name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
    n = int(input("បញ្ចូលចំនួនលេខដែលអ្នកចង់គណនាផលបូក: "))
    total = 0
    # For Loop សម្រាប់គណនាផលបូក
    for i in range(1, n + 1):
        total += i
    print(f"សួស្តី {name}! ផលបូកនៃលេខ 1 ដល់ {n} គឺ: {total}")
    # While Loop សម្រាប់បង្ហាញលេខ
    count = 1
    print(f"លេខពី 1 ដល់ {n}:")
    while count <= n:
        print(count)
        count += 1
except ValueError:
    print("សូមបញ្ចូលចំនួនជាលេខ!")
\`\`\`
`
  }
};

export default ConceptLesson3_2Content;
