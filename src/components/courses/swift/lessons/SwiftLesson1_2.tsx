import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson1_2Content: LessonContent = {
  title: 'មូលដ្ឋានគ្រឹះនៃភាសា Swift',
  objectives: [
    'យល់ដឹងពី Types ទិន្នន័យជាមូលដ្ឋាន (Basic Data Types) នៅក្នុង Swift',
    'ស្គាល់ពីរបៀបប្រកាស Variables និង Constants',
    'រៀនពីរបៀបបង្កើត Arrays និង Dictionaries',
    'យល់ដឹងពី Control Flow (If-Else, Loops, Switch)',
    'រៀនពីរបៀបបង្កើត Functions'
  ],
  content: `
# មូលដ្ឋានគ្រឹះនៃភាសា Swift ✍️

---

នៅក្នុងមេរៀននេះ យើងនឹងរៀនអំពីមូលដ្ឋានគ្រឹះនៃភាសា Swift ដែលជាជំហានដំបូងដ៏សំខាន់សម្រាប់ការសរសេរកូដ។ យើងនឹងសិក្សាអំពីប្រភេទទិន្នន័យ (Data Types) ការប្រកាសអថេរ (Variables) និងថេរ (Constants) រចនាសម្ព័ន្ធទិន្នន័យ (Data Structures) និងរបៀបបង្កើតមុខងារ (Functions)។

---

## 1. Types ទិន្នន័យ (Data Types)

Swift មានប្រភេទទិន្នន័យជាមូលដ្ឋានជាច្រើនសម្រាប់រក្សាទុកព័ត៌មាន។

-   **Int:** ប្រើសម្រាប់លេខគត់ (ឧទាហរណ៍៖ 1, -10, 500)។
-   **Double:** ប្រើសម្រាប់លេខទសភាគ (ឧទាហរណ៍៖ 3.14, -2.5)។
-   **String:** ប្រើសម្រាប់អត្ថបទ (ឧទាហរណ៍៖ "សួស្តី!", "Swift Programming")។
-   **Bool:** ប្រើសម្រាប់តម្លៃឡូស៊ីក (Logical Value) មានតែពីរតម្លៃគឺ \`true\` ឬ \`false\`។

\`\`\`swift
let age: Int = 30
let price: Double = 9.99
let greeting: String = "ជំរាបសួរ!"
let isLoggedin: Bool = true
\`\`\`

---

## 2. Variables និង Constants

នៅក្នុង Swift អ្នកអាចប្រកាសតម្លៃដោយប្រើ \`var\` ឬ \`let\`។

-   **Variables (\`var\`):** តម្លៃដែលអាចផ្លាស់ប្តូរបាននៅពេលក្រោយ។
-   **Constants (\`let\`):** តម្លៃដែលមិនអាចផ្លាស់ប្តូរបាននៅពេលដែលបានកំណត់រួចហើយ។ វាមានសុវត្ថិភាពជាងក្នុងការប្រើប្រាស់ \`let\` តាមដែលអាចធ្វើបាន។

\`\`\`swift
// Variable: តម្លៃអាចផ្លាស់ប្តូរបាន
var name = "សុខ"
name = "វណ្ណារ៉ា" // ត្រឹមត្រូវ

// Constant: តម្លៃមិនអាចផ្លាស់ប្តូរបាន
let language = "Swift"
// language = "Kotlin" // នឹងមាន Error
\`\`\`

---

## 3. Arrays និង Dictionaries

ទាំងពីរនេះគឺជាប្រភេទ Collections ដែលប្រើសម្រាប់រក្សាទុកទិន្នន័យច្រើន។

-   **Arrays:** រៀបចំទិន្នន័យតាមលំដាប់ (Ordered Collection)។ ការចូលប្រើទិន្នន័យគឺតាមរយៈ Index ដែលចាប់ផ្តើមពី 0។
-   **Dictionaries:** រៀបចំទិន្នន័យដោយប្រើ Key-Value Pair។ Key ត្រូវតែមានលក្ខណៈពិសេស (Unique)។

\`\`\`swift
// Array of Strings
var fruits = ["apple", "banana", "mango"]
print(fruits[0]) // បង្ហាញ "apple"

// Dictionary
var person = [
    "name": "សុខ",
    "age": "30"
]
print(person["name"]!) // បង្ហាញ "សុខ"
\`\`\`

---

## 4. Control Flow

Control Flow ជួយឱ្យអ្នកគ្រប់គ្រងលំដាប់នៃការប្រតិបត្តិកូដ។

### If-Else

ប្រើសម្រាប់លក្ខខណ្ឌ (Conditions)។

\`\`\`swift
let score = 85
if score >= 90 {
    print("អ្នកបាននិទ្ទេស A")
} else if score >= 80 {
    print("អ្នកបាននិទ្ទេស B")
} else {
    print("អ្នកត្រូវខិតខំទៀត")
}
\`\`\`

### Loops

ប្រើសម្រាប់ធ្វើប្រតិបត្តិការម្តងហើយម្តងទៀត។

-   **for-in loop:** ប្រើសម្រាប់រាប់ (Iterate) លើ Collections។

\`\`\`swift
let numbers = [1, 2, 3, 4]
for number in numbers {
    print(number)
}
\`\`\`

### Switch

ប្រើសម្រាប់លក្ខខណ្ឌច្រើន។

\`\`\`swift
let day = "Monday"
switch day {
case "Monday":
    print("ថ្ងៃច័ន្ទ")
case "Tuesday":
    print("ថ្ងៃអង្គារ")
default:
    print("ថ្ងៃផ្សេងទៀត")
}
\`\`\`

---

## 5. Functions

**Functions** គឺជាប្លុកកូដដែលមានឈ្មោះ ហើយអាចប្រើបានម្តងហើយម្តងទៀត។

\`\`\`swift
// Function ដែលគ្មាន Parameter និងគ្មាន return
func sayHello() {
    print("ជំរាបសួរ!")
}
sayHello()

// Function ដែលមាន Parameter និងមាន return
func sum(a: Int, b: Int) -> Int {
    return a + b
}
let result = sum(a: 5, b: 10)
print(result) // បង្ហាញ 15
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើប្រាស់ Optional</h3>
<p>នៅក្នុង Swift, Optional ត្រូវបានប្រើដើម្បីដោះស្រាយបញ្ហាតម្លៃ nil។</p>
<pre><code class="language-swift">
var myName: String? = "ពិសិដ្ឋ"
print(myName!) // Forced Unwrapping: ប្រើប្រាស់ដោយប្រយ័ត្ន!

if let name = myName {
    print("ឈ្មោះរបស់ខ្ញុំគឺ \(name)") // Optional Binding: វិធីសាស្រ្តមានសុវត្ថិភាព
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ លំហាត់សាមញ្ញ</h3>
<p>បង្កើត Function ដែលគណនាទំហំនៃរង្វង់។</p>
<pre><code class="language-swift">
import Foundation // ត្រូវការសម្រាប់ค่า Pi

func calculateCircleArea(radius: Double) -> Double {
    let pi = Double.pi
    return pi * radius * radius
}

let circleArea = calculateCircleArea(radius: 5.0)
print("ផ្ទៃរង្វង់គឺ: \(circleArea)")
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ \`let\` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'ប្រកាសតម្លៃដែលអាចផ្លាស់ប្តូរបាន',
        'ប្រកាសតម្លៃដែលមិនអាចផ្លាស់ប្តូរបាន',
        'ប្រកាស Function',
        'ប្រកាស Array'
      ],
      correct: 1,
      explanation: '`let` ត្រូវបានប្រើដើម្បីប្រកាសតម្លៃថេរ (Constant) ដែលមិនអាចផ្លាស់ប្តូរបាន។'
    },
    {
      question: 'តើ \`Double\` ប្រើសម្រាប់ប្រភេទទិន្នន័យអ្វី?',
      options: [
        'លេខគត់',
        'អត្ថបទ',
        'លេខទសភាគ',
        'តម្លៃឡូស៊ីក'
      ],
      correct: 2,
      explanation: '`Double` ត្រូវបានប្រើសម្រាប់លេខទសភាគ។'
    },
    {
      question: 'តើលក្ខខណ្ឌមួយណាដែលត្រឹមត្រូវសម្រាប់ \`for-in loop\`?',
      options: [
        'ធ្វើប្រតិបត្តិការម្តងប៉ុណ្ណោះ',
        'ធ្វើប្រតិបត្តិការដោយមិនមានលក្ខខណ្ឌ',
        'ធ្វើប្រតិបត្តិការម្តងហើយម្តងទៀតលើ Collection',
        'ប្រើសម្រាប់តែលេខគត់'
      ],
      correct: 2,
      explanation: '`for-in loop` ត្រូវបានប្រើដើម្បីធ្វើប្រតិបត្តិការម្តងហើយម្តងទៀតលើ Array, Dictionary, ឬ Range។'
    },
    {
      question: 'តើ Function ដែលមាន \`-> Int\` មានន័យដូចម្តេច?',
      options: [
        'Function នោះទទួលតម្លៃ Int',
        'Function នោះ return តម្លៃ Int',
        'Function នោះគ្មាន return value',
        'Function នោះគ្មាន parameter'
      ],
      correct: 1,
      explanation: '`-> Int` បង្ហាញថា Function នោះនឹង return តម្លៃជាប្រភេទ Int។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Array និង Dictionary?',
      options: [
        'Array រក្សាទុកតម្លៃដោយគ្មានលំដាប់ ចំណែក Dictionary មានលំដាប់',
        'Array រក្សាទុកទិន្នន័យដោយប្រើ Key-Value Pair ចំណែក Dictionary ប្រើ Index',
        'Array រក្សាទុកទិន្នន័យតាមលំដាប់ដោយប្រើ Index ចំណែក Dictionary ប្រើ Key-Value Pair',
        'ទាំងពីរគឺដូចគ្នា'
      ],
      correct: 2,
      explanation: 'Array ប្រើ Index ដើម្បីចូលប្រើទិន្នន័យតាមលំដាប់ ចំណែក Dictionary ប្រើ Key-Value Pair។'
    }
  ],
  lab: {
    task: `
បង្កើត Swift Playground ដើម្បីសាកល្បងមូលដ្ឋានគ្រឹះនៃ Swift។

**តម្រូវការ:**

1.  **Variables and Constants:**
    -   ប្រកាស Constant មួយឈ្មោះ \`myName\` ដែលមានតម្លៃជាឈ្មោះរបស់អ្នក។
    -   ប្រកាស Variable មួយឈ្មោះ \`currentYear\` ដែលមានតម្លៃឆ្នាំបច្ចុប្បន្ន។ ផ្លាស់ប្តូរតម្លៃ \`currentYear\` ទៅជាឆ្នាំបន្ទាប់។

2.  **Data Structures:**
    -   បង្កើត Array នៃ \`String\` មួយឈ្មោះ \`countries\` ដែលមានប្រទេសចំនួន 3។ បន្ថែមប្រទេសថ្មីមួយទៀតចូលទៅក្នុង Array នោះ។
    -   បង្កើត Dictionary មួយឈ្មោះ \`student\` ដែលមាន Key \`"name"\`, \`"major"\` និង \`"gpa"\`។

3.  **Control Flow and Functions:**
    -   សរសេរ \`if-else\` ដើម្បីពិនិត្យមើលថាតើ GPA របស់និស្សិតនោះខ្ពស់ជាង 3.5 ឬអត់។
    -   បង្កើត Function មួយឈ្មោះ \`greetUser\` ដែលទទួលឈ្មោះជា Parameter ហើយបង្ហាញសារជំរាបសួរ។

**ការណែនាំ:** ប្រើ Xcode Playgrounds ដើម្បីអនុវត្តន៍កូដនេះ។
    `,
    solution: `
\`\`\`swift
import Foundation

// 1. Variables and Constants
let myName = "សុខា"
var currentYear = 2025
currentYear = 2026 // Change the year

// 2. Data Structures
var countries = ["Cambodia", "Thailand", "Vietnam"]
countries.append("Singapore") // Add a new country
print("ប្រទេសទាំងអស់: \(countries)")

var student = [
    "name": "ពិសិដ្ឋ",
    "major": "Computer Science",
    "gpa": "3.8"
]
print("ព័ត៌មាននិស្សិត: \(student)")

// 3. Control Flow and Functions
if let gpaString = student["gpa"], let gpa = Double(gpaString) {
    if gpa > 3.5 {
        print("និស្សិតមាន GPA ល្អ")
    } else {
        print("និស្សិតត្រូវខិតខំទៀត")
    }
}

func greetUser(name: String) {
    print("ជំរាបសួរ, \(name)!")
}

greetUser(name: myName)
\`\`\`
`
  }
};

export default SwiftLesson1_2Content;