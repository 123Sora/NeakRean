import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson1_2Content: LessonContent = {
  title: 'Kotlin Basics',
  objectives: [
    'យល់ដឹងពីការប្រកាស Variables ដោយប្រើ `var` និង `val`',
    'ស្គាល់ពី Data Types មូលដ្ឋានរបស់ Kotlin',
    'រៀនពីរបៀបសរសេរ Functions',
    'យល់ដឹងពី Control Flow ដូចជា `if`, `when`, និង `for`',
    'អនុវត្តការប្រើប្រាស់ Nullable Types'
  ],
  content: `
# Kotlin Basics 🧠

---

នៅក្នុងមេរៀននេះ យើងនឹងស្វែងយល់ពី Concept មូលដ្ឋានរបស់ Kotlin ដែលអ្នកត្រូវតែដឹងមុនពេលចាប់ផ្តើមសរសេរ Code សម្រាប់ Android ។

## 1. Variables

Kotlin មានពីរប្រភេទសម្រាប់ Variables៖ \`val\` និង \`var\` ។

-   **\`val\` (Immutable):** សម្រាប់ Value ដែលមិនអាចផ្លាស់ប្តូរបាន (read-only) ។ វាតំណាងឱ្យ "value" ។
    \`\`\`kotlin
    val name: String = "Sokha"
    // name = "Dara" // នឹងមាន Error
    \`\`\`

-   **\`var\` (Mutable):** សម្រាប់ Value ដែលអាចផ្លាស់ប្តូរបាន។ វាតំណាងឱ្យ "variable" ។
    \`\`\`kotlin
    var age: Int = 25
    age = 26 // អាចផ្លាស់ប្តូរបាន
    \`\`\`
**ចំណាំ:** Kotlin មាន **Type Inference** ដែលអនុញ្ញាតឱ្យ Compiler ស្គាល់ Type ដោយស្វ័យប្រវត្តិ។
    \`\`\`kotlin
    val message = "Hello" // Compiler ស្គាល់ថាជា String
    \`\`\`

## 2. Data Types

Kotlin មាន Data Types មូលដ្ឋានដូចជា៖
-   **Numbers:** \`Int\`, \`Double\`, \`Float\`, \`Long\`, \`Short\`, \`Byte\`
-   **Booleans:** \`Boolean\` (true, false)
-   **Characters:** \`Char\`
-   **Text:** \`String\`
-   **Arrays:** \`Array<Type>\`
-   **Lists:** \`List<Type>\` (Immutable), \`MutableList<Type>\` (Mutable)

## 3. Functions

Functions នៅក្នុង Kotlin ត្រូវបានប្រកាសដោយប្រើ Keyword \`fun\` ។

\`\`\`kotlin
// Function ដែលមាន Parameters និង Return Value
fun add(a: Int, b: Int): Int {
    return a + b
}

// Function មួយបន្ទាត់ (Single-expression function)
fun subtract(a: Int, b: Int) = a - b
\`\`\`

## 4. Control Flow

### \`if\` Expression
\`if\` នៅក្នុង Kotlin គឺជា Expression ដែលអាច Return តម្លៃបាន។
\`\`\`kotlin
val result = if (age > 18) "Adult" else "Minor"
\`\`\`

### \`when\` Expression
\`when\` គឺស្រដៀងទៅនឹង \`switch\` Statement នៅក្នុងភាសាដទៃ។ វាមានអនុភាពខ្លាំងជាង \`if\` ។
\`\`\`kotlin
fun getDayOfWeek(day: Int) {
    when (day) {
        1 -> println("Monday")
        2 -> println("Tuesday")
        in 3..5 -> println("Mid-week")
        else -> println("Other day")
    }
}
\`\`\`

### \`for\` Loop
\`\`\`kotlin
// Loop តាម Range
for (i in 1..5) {
    println(i)
}

// Loop តាម Items ក្នុង List
val fruits = listOf("Apple", "Banana", "Orange")
for (fruit in fruits) {
    println(fruit)
}
\`\`\`

## 5. Nullable Types

Kotlin គាំទ្រ Null Safety ។
-   **Non-nullable:** Type ធម្មតាដែលមិនអាចមានតម្លៃ \`null\` ។ \`String\`, \`Int\` ។
-   **Nullable:** Type ដែលអាចមានតម្លៃ \`null\` ដោយបន្ថែម \`?\` ទៅលើ Type ។ \`String?\`, \`Int?\` ។

\`\`\`kotlin
var name: String? = "Sokha"
name = null // អាចធ្វើបាន

// Safe call operator
val length = name?.length // នឹងមិនមាន Error ប្រសិនបើ name គឺ null
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`when\` ជាមួយ Nullable Type</h3>
<p>យើងអាចប្រើ \`when\` ដើម្បីគ្រប់គ្រង Nullable Type ។</p>
<pre><code class="language-kotlin">
fun checkValue(value: Any?) {
    when (value) {
        null -> println("Value is null")
        is String -> println("Value is a String of length \\(value.length)")
        is Int -> println("Value is an Int")
        else -> println("Unknown type")
    }
}

fun main() {
    checkValue(null)
    checkValue("Hello")
    checkValue(10)
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `val` និង `var` ខុសគ្នាត្រង់ណា?',
      options: [
        '`val` អាចផ្លាស់ប្តូរបាន ចំណែក `var` មិនអាច',
        '`var` សម្រាប់ String ចំណែក `val` សម្រាប់ Int',
        '`val` មិនអាចផ្លាស់ប្តូរបាន ចំណែក `var` អាច',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 2,
      explanation: '`val` គឺ Immutable (មិនអាចផ្លាស់ប្តូរបាន) ចំណែក `var` គឺ Mutable (អាចផ្លាស់ប្តូរបាន) ។'
    },
    {
      question: 'តើ `Type Inference` នៅក្នុង Kotlin គឺអ្វី?',
      options: [
        'ជា Error',
        'ជាវិធីដើម្បីបង្ខំឱ្យ Type ត្រឹមត្រូវ',
        'ជាមុខងារដែល Compiler ស្គាល់ Type ដោយស្វ័យប្រវត្តិ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Type Inference អនុញ្ញាតឱ្យ Compiler ស្គាល់ Type ដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ `fun` Keyword ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Variable',
        'បង្កើត Function',
        'បង្កើត Class',
        'បង្កើត Loop'
      ],
      correct: 1,
      explanation: '`fun` គឺជា Keyword សម្រាប់ប្រកាស Function មួយ។'
    },
    {
      question: 'តើ `if` នៅក្នុង Kotlin អាច Return តម្លៃបានទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលមាន `else`',
        'បានតែពេលមាន `return`'
      ],
      correct: 0,
      explanation: '`if` នៅក្នុង Kotlin គឺជា Expression ដែលអាច Return តម្លៃបាន។'
    },
    {
      question: 'តើ `when` Expression ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើម្តងទៀតនូវ Code',
        'បង្កើតเงื่อนไข',
        'ជាជំនួសសម្រាប់ `if-else if` ដែលមានអនុភាពជាង',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`when` គឺស្រដៀងទៅនឹង `switch` នៅក្នុងភាសាដទៃនិងមានអនុភាពខ្លាំងជាង `if-else if` ។'
    },
    {
      question: 'តើ `for (i in 1..5)` នឹងធ្វើ Loop ប៉ុន្មានដង?',
      options: [
        '4 ដង',
        '5 ដង',
        '6 ដង',
        'គ្មានកំណត់'
      ],
      correct: 1,
      explanation: 'Loop នេះនឹងដំណើរការ 5 ដង (ពី 1 ដល់ 5) ។'
    },
    {
      question: 'តើ `String?` មានន័យដូចម្តេច?',
      options: [
        'ជា String ដែលមិនអាចផ្លាស់ប្តូរបាន',
        'ជា String ដែលអាចមានតម្លៃ `null`',
        'ជា Error',
        'ជា Type ថ្មី'
      ],
      correct: 1,
      explanation: '`?` បង្ហាញថា Type នោះអាចមានតម្លៃ `null` ។'
    },
    {
      question: 'តើ Operator ណាដែលប្រើសម្រាប់ Safe Call?',
      options: [
        '`.`',
        '`!`',
        '`?.`',
        '`: ` '
      ],
      correct: 2,
      explanation: 'Safe call operator (`?.`) ត្រូវបានប្រើដើម្បីការពារ NullPointerException ។'
    },
    {
      question: 'តើ `Float` និង `Double` ខុសគ្នាត្រង់ណា?',
      options: [
        '`Float` សម្រាប់ Integer ចំណែក `Double` សម្រាប់ Decimal',
        '`Float` ជា Single-precision floating-point ចំណែក `Double` ជា Double-precision floating-point',
        'គ្មានភាពខុសគ្នាទេ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`Double` មានទំហំធំជាងនិងមានភាពជាក់លាក់ជាង `Float` ។'
    },
    {
      question: 'តើ `listOf("a", "b")` នឹងបង្កើត `MutableList` ឬ `ImmutableList`?',
      options: [
        'MutableList',
        'ImmutableList',
        'Array',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`listOf()` នឹងបង្កើត List ដែលមិនអាចផ្លាស់ប្តូរបាន (Immutable) ។'
    }
  ],
  lab: {
    task: `
សរសេរ Program Kotlin មួយដើម្បីគណនាផលបូកនៃលេខពីរហើយពិនិត្យមើលថាតើលទ្ធផលជាលេខគូ (Even) ឬលេខសេស (Odd) ។

**តម្រូវការ:**

1.  **Variables:**
    -   បង្កើត \`var\` មួយឈ្មោះ \`num1\` និង \`var\` មួយឈ្មោះ \`num2\` ហើយកំណត់តម្លៃ។
    -   បង្កើត \`val\` មួយឈ្មោះ \`sum\` ដែលជាផលបូករបស់ \`num1\` និង \`num2\` ។

2.  **Function:**
    -   បង្កើត \`fun\` មួយឈ្មោះ \`checkEvenOrOdd(number: Int)\` ។

3.  **Control Flow:**
    -   នៅក្នុង \`checkEvenOrOdd\` Function, ប្រើ \`if\` Statement ដើម្បីពិនិត្យមើលថាតើ \`number\` ជាលេខគូ (Even) ឬលេខសេស (Odd) ។

4.  **Output:**
    -   បោះពុម្ពលទ្ធផលទៅកាន់ Console ។
    `,
    solution: `
\`\`\`kotlin
fun main() {
    var num1 = 10
    var num2 = 15
    
    val sum = num1 + num2
    
    println("The sum is: $sum")
    checkEvenOrOdd(sum)
}

fun checkEvenOrOdd(number: Int) {
    if (number % 2 == 0) {
        println("The number is Even.")
    } else {
        println("The number is Odd.")
    }
}
\`\`\`
`
  }
};

export default KotlinLesson1_2Content;