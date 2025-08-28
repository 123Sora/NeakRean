import type { LessonContent } from '../../../../types/LessonTypes';

const ConceptLesson3_3Content: LessonContent = {
  title: 'Switch Statements',
  objectives: [
    'យល់ពីគោលគំនិតនៃ Switch Statements ក្នុងការសរសេរកម្មវិធី',
    'ស្វែងយល់ពីរបៀបប្រើ Switch Statements ក្នុងភាសាដែលគាំទ្រ (ឧ. Java, JavaScript)',
    'រៀនការប្រើ Match Case ក្នុង Python (ជំនួស Switch)',
    'ស្គាល់ភាពខុសគ្នារវាង Switch Statements និង If/Else Statements',
    'អនុវត្ត Switch Statements ឬ Match Case ក្នុងកម្មវិធីសាមញ្ញ'
  ],
  content: `
# Switch Statements 🔀💻

---

**Switch Statements** គឺជា Control Structures ដែលអនុញ្ញាតឱ្យកម្មវិធីជ្រើសរើសផ្លូវប្រតិបត្តិកូដដោយផ្អែកលើតម្លៃនៃ Variable។ នៅក្នុង Python, Switch Statement មិនមានជាផ្លូវការ ប៉ុន្តែ Python 3.10+ បានណែនាំ **Match Case** ជាជម្រើសស្រដៀងគ្នា។

---

## 1. គោលគំនិតនៃ Switch Statements

Switch Statement ពិនិត្យតម្លៃនៃ Variable និងប្រតិបត្តិកូដដែលត្រូវគ្នានឹង Case ជាក់លាក់។
- **Switch:** កំណត់ Variable ដែលត្រូវពិនិត្យ។
- **Case:** បញ្ជាក់តម្លៃដែលត្រូវផ្គូផ្គង។
- **Break:** បញ្ឈប់ការប្រតិបត្តិបន្ទាប់ពី Case ត្រូវគ្នា។
- **Default:** ប្រតិបត្តិប្រសិនបើគ្មាន Case ណាមួយត្រូវគ្នា។

**ឧទាហរណ៍កូដ Java:**

\`\`\`java
int day = 3;
switch (day) {
    case 1:
        System.out.println("ថ្ងៃចន្ទ");
        break;
    case 2:
        System.out.println("ថ្ងៃអង្គារ");
        break;
    case 3:
        System.out.println("ថ្ងៃពុធ");
        break;
    default:
        System.out.println("ថ្ងៃផ្សេង");
}
\`\`\`

---

## 2. Match Case ក្នុង Python

Python 3.10+ បានណែនាំ **Match Case** ដែលជាជម្រើសសម្រាប់ Switch Statement។

**ឧទាហរណ៍:**

\`\`\`python
day = 3
match day:
    case 1:
        print("ថ្ងៃចន្ទ")
    case 2:
        print("ថ្ងៃអង្គារ")
    case 3:
        print("ថ្ងៃពុធ")
    case _:
        print("ថ្ងៃផ្សេង")
\`\`\`

---

## 3. ភាពខុសគ្នារវាង Switch Statements និង If/Else Statements

| លក្ខណៈ            | Switch Statement                    | If/Else Statement                  |
|---------------------|-------------------------------------|------------------------------------|
| **ការប្រើប្រាស់**   | ផ្គូផ្គងតម្លៃជាក់លាក់            | ពិនិត្យលក្ខខណ្ឌស្មុគស្មាញ         |
| **ភាពងាយស្រួល**   | អានបានស្រួលសម្រាប់តម្លៃច្រើន     | សមស្របសម្រាប់លក្ខខណ្ឌផ្សេងៗ   |
| **ឧទាហរណ៍**        | \`switch (day)\`                     | \`if age >= 18\`                    |

---

## 4. ការប្រើ Switch Statements ឬ Match Case

Switch/Match Case ត្រូវបានប្រើសម្រាប់៖
- **ការផ្គូផ្គងតម្លៃ:** ឧទាហរណ៍ កំណត់ថ្ងៃនៃសប្តាហ៍។
- **ការជ្រើសរើសជម្រើស:** ឧទាហរណ៍ ជ្រើសរើសជម្រើសនៅក្នុង Menu។
- **ការគ្រប់គ្រងលំហូរ:** ជួយឱ្យកូដមានភាពច្បាស់លាស់។

**ឧទាហរណ៍ Python Match Case:**

\`\`\`python
choice = input("ជ្រើសរើសជម្រើស (a, b, c): ")
match choice:
    case "a":
        print("អ្នកជ្រើសរើស A")
    case "b":
        print("អ្នកជ្រើសរើស B")
    case "c":
        print("អ្នកជ្រើសរើស C")
    case _:
        print("ជម្រើសមិនត្រឹមត្រូវ")
\`\`\`

---

## 5. ការប្រើ Match Case ក្នុងកម្មវិធី

Match Case អាចប្រើសម្រាប់៖
- **ការគ្រប់គ្រងជម្រើស:** ឧទាហរណ៍ កម្មវិធី Menu។
- **ការផ្គូផ្គងទិន្នន័យ:** ឧទាហរណ៍ ពិនិត្យប្រភេទទិន្នន័យ។
- **ការកែលម្អកូដ:** ធ្វើឱ្យកូដអានបានស្រួលជាង If/Else នៅក្នុងករណីខ្លះ។

**ឧទាហរណ៍:**

\`\`\`python
grade = input("បញ្ចូលចំណាត់ថ្នាក់ (A, B, C, D, F): ")
match grade:
    case "A":
        print("ល្អឥតខ្ចោះ!")
    case "B":
        print("ល្អ!")
    case "C":
        print("មធ្យម")
    case _:
        print("ត្រូវការកែលម្អ")
\`\`\`

---

## 6. ហេតុអ្វីសំខាន់ក្នុងការប្រើ Switch Statements/Match Case?

- **ភាពច្បាស់លាស់:** ធ្វើឱ្យកូដអានបានស្រួលជាង If/Else នៅក្នុងករណីតម្លៃជាក់លាក់។
- **ប្រសិទ្ធភាព:** កាត់បន្ថយការសរសេរកូដស្មុគស្មាញ។
- **ភាពបត់បែន:** អនុញ្ញាតឱ្យគ្រប់គ្រងជម្រើសច្រើន។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Match Case ក្នុង Python</h3>
<p>បង្កើតកម្មវិធីដែលប្រើ Match Case ដើម្បីកំណត់ថ្ងៃនៃសប្តាហ៍។</p>
<pre><code class="language-python">
day = int(input("បញ្ចូលលេខថ្ងៃ (1-7): "))
match day:
    case 1:
        print("ថ្ងៃចន្ទ")
    case 2:
        print("ថ្ងៃអង្គារ")
    case 3:
        print("ថ្ងៃពុធ")
    case _:
        print("ថ្ងៃផ្សេង")
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Match Case សម្រាប់ Menu</h3>
<p>បង្កើតកម្មវိធីដែលប្រើ Match Case ដើម្បីជ្រើសរើសជម្រើស។</p>
<pre><code class="language-python">
choice = input("ជ្រើសរើសជម្រើស (a, b, c): ")
match choice:
    case "a":
        print("អ្នកជ្រើសរើស A")
    case "b":
        print("អ្នកជ្រើសរើស B")
    case "c":
        print("អ្នកជ្រើសរើស C")
    case _:
        print("ជម្រើសមិនត្រឹមត្រូវ")
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Switch Statement ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ទុកទិន្នន័យ',
        'ផ្គូផ្គងតម្លៃជាក់លាក់',
        'បង្កើត Loop',
        'បង្កើត Function'
      ],
      correct: 1,
      explanation: 'Switch Statement ប្រើសម្រាប់ផ្គូផ្គងតម្លៃជាក់លាក់។'
    },
    {
      question: 'តើ Python ប្រើអ្វីជំនួស Switch Statement?',
      options: ['If/Else', 'Match Case', 'For Loop', 'While Loop'],
      correct: 1,
      explanation: 'Python 3.10+ ប្រើ Match Case ជំនួស Switch Statement។'
    },
    {
      question: 'តើ `break` ក្នុង Switch Statement មានន័យថាអ្វី?',
      options: [
        'បន្តទៅ Case បន្ទាប់',
        'បញ្ឈប់ការប្រតិបត្តិ Switch',
        'រំលង Case បច្ចុប្បន្ន',
        'បង្កើត Case ថ្មី'
      ],
      correct: 1,
      explanation: '`break` បញ្ឈប់ការប្រតិបត្តិ Switch បន្ទាប់ពី Case ត្រូវគ្នា។'
    },
    {
      question: 'តើ `default` ក្នុង Switch Statement មានន័យថាអ្វី?',
      options: [
        'Case ដំបូង',
        'Case ចុងក្រោយ',
        'ប្រតិបត្តិប្រសិនបើគ្មាន Case ត្រូវគ្នា',
        'បង្កើត Variable'
      ],
      correct: 2,
      explanation: '`default` ប្រតិបត្តិប្រសិនបើគ្មាន Case ណាមួយត្រូវគ្នា។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nday = 2\nmatch day:\n    case 1:\n        print("ចន្ទ")\n    case 2:\n        print("អង្គារ")\n    case _:\n        print("ផ្សេង")\n```',
      options: ['ចន្ទ', 'អង្គារ', 'ផ្សេង', 'Error'],
      correct: 1,
      explanation: '`day = 2` ត្រូវគ្នានឹង `case 2`, ដូច្នេះបង្ហាញ "អង្គារ"។'
    },
    {
      question: 'តើ Match Case នៅក្នុង Python ត្រូវបានណែនាំនៅក្នុង Version ណា?',
      options: ['Python 2.7', 'Python 3.5', 'Python 3.10', 'Python 4.0'],
      correct: 2,
      explanation: 'Match Case ត្រូវបានណែនាំនៅក្នុង Python 3.10។'
    },
    {
      question: 'តើ Switch Statement មានភាពងាយស្រួលជាង If/Else នៅក្នុងករណីណា?',
      options: [
        'លក្ខខណ្ឌស្មុគស្មាញ',
        'តម្លៃជាក់លាក់ច្រើន',
        'ការគណនាលេខ',
        'ការផ្ទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: 'Switch Statement ងាយស្រួលជាងសម្រាប់តម្លៃជាក់លាក់ច្រើន។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដខាងក្រោម?\n```python\nchoice = "b"\nmatch choice:\n    case "a":\n        print("A")\n    case "b":\n        print("B")\n    case _:\n        print("ផ្សេង")\n```',
      options: ['A', 'B', 'ផ្សេង', 'Error'],
      correct: 1,
      explanation: '`choice = "b"` ត្រូវគ្នានឹង `case "b"`, ដូច្នេះបង្ហាញ "B"។'
    },
    {
      question: 'តើ `_` ក្នុង Match Case មានន័យថាអ្វី?',
      options: [
        'Case ដំបូង',
        'Default Case',
        'Variable ថ្មី',
        'Loop ថ្មី'
      ],
      correct: 1,
      explanation: '`_` ក្នុង Match Case ជា Default Case សម្រាប់ករណីដែលមិនត្រូវគ្នា។'
    },
    {
      question: 'តើ Switch Statement មាននៅក្នុង Python ដែរឬទេ?',
      options: [
        'មានជាផ្លូវការ',
        'មិនមាន ប៉ុន្តែមាន Match Case',
        'មានតែនៅ Python 2',
        'មាននៅគ្រប់ Version'
      ],
      correct: 1,
      explanation: 'Python មិនមាន Switch Statement ជាផ្លូវការ ប៉ុន្តែមាន Match Case នៅ Python 3.10+។'
    },
    {
      question: 'តើអ្វីជាគោលបំណងសំខាន់នៃ Switch Statement?',
      options: [
        'ផ្ទុកទិន្នន័យ',
        'ផ្គូផ្គងតម្លៃជាក់លាក់',
        'បង្កើត Loop',
        'គ្រប់គ្រង Hardware'
      ],
      correct: 1,
      explanation: 'Switch Statement ប្រើសម្រាប់ផ្គូផ្គងតម្លៃជាក់លាក់។'
    },
    {
      question: 'តើភាសាណាខាងក្រោមមាន Switch Statement ជាផ្លូវការ?',
      options: ['Python', 'Java', 'Ruby', 'PHP'],
      correct: 1,
      explanation: 'Java មាន Switch Statement ជាផ្លូវការ។'
    }
  ],
  lab: {
    task: `
បង្កើតកម្មវិធី Python ដែលប្រើ Match Case ដើម្បីគ្រប់គ្រងជម្រើស។

**តម្រូវការ:**
1. **ការបញ្ចូលទិន្នន័យ:**
   - ស្នើសុំឈ្មោះអ្នកប្រើ។
   - ស្នើសុំជម្រើស (A, B, C, D) ដែលតំណាងឱ្យចំណាត់ថ្នាក់។
2. **ការប្រើ Match Case:**
   - ប្រើ Match Case ដើម្បីបង្ហាញសារដែលត្រូវគ្នានឹងជម្រើស៖
     - A: "ល្អឥតខ្ចោះ!"
     - B: "ល្អ!"
     - C: "មធ្យម"
     - D: "ត្រូវការកែលម្អ"
     - ផ្សេង: "ជម្រើសមិនត្រឹមត្រូវ"
3. **ការបង្ហាញលទ្ធផល:**
   - បង្ហាញឈ្មោះអ្នកប្រើ និងសារដែលត្រូវគ្នានឹងជម្រើស។

**ការណែនាំ:** ប្រើ VS Code ឬ PyCharm ដើម្បីសរសេរកម្មវិធី។ ត្រូវប្រាកដថាប្រើ Python 3.10+ សម្រាប់ Match Case។
    `,
    solution: `
\`\`\`python
name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
grade = input("បញ្ចូលចំណាត់ថ្នាក់ (A, B, C, D): ").upper()
match grade:
    case "A":
        print(f"សួស្តី {name}! ល្អឥតខ្ចោះ!")
    case "B":
        print(f"សួស្តី {name}! ល្អ!")
    case "C":
        print(f"សួស្តី {name}! មធ្យម")
    case "D":
        print(f"សួស្តី {name}! ត្រូវការកែលម្អ")
    case _:
        print(f"សួស្តី {name}! ជម្រើសមិនត្រឹមត្រូវ")
\`\`\`
`
  }
};

export default ConceptLesson3_3Content;
