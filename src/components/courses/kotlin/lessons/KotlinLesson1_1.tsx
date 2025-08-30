import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson1_1Content: LessonContent = {
  title: 'Introduction to Kotlin',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Kotlin និងប្រវត្តិរបស់វា',
    'ស្គាល់ពីលក្ខណៈពិសេសសំខាន់ៗរបស់ Kotlin',
    'យល់ដឹងពីមូលហេតុដែល Google ជ្រើសរើស Kotlin ជាភាសាផ្លូវការសម្រាប់ Android Development',
    'ប្រៀបធៀប Kotlin ជាមួយ Java',
    'រៀនពីរបៀបសរសេរ Program "Hello, World!" នៅក្នុង Kotlin'
  ],
  content: `
# Introduction to Kotlin 🚀

---

**Kotlin** គឺជាភាសាសរសេរកម្មវិធីដែលមានលក្ខណៈជា **Statically Typed** និង **General-purpose** ដែលត្រូវបានបង្កើតឡើងដោយក្រុមហ៊ុន **JetBrains** ។ វាត្រូវបានរចនាឡើងដើម្បីធ្វើការជាមួយ Java Platform (JVM) ហើយត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយសម្រាប់ការអភិវឌ្ឍ Android, Web, និង Server-side ។

## 1. ប្រវត្តិរបស់ Kotlin

-   Kotlin ត្រូវបានចាប់ផ្តើមបង្កើតនៅឆ្នាំ **2010** ដោយ JetBrains ។
-   កំណែដំបូង (Kotlin 1.0) ត្រូវបានចេញផ្សាយនៅឆ្នាំ **2016** ។
-   នៅឆ្នាំ **2017**, Google បានប្រកាសថា Kotlin គឺជាភាសាផ្លូវការសម្រាប់ Android Development ។
-   នៅឆ្នាំ **2019**, Google បានប្រកាសថា Kotlin គឺជាភាសាតែមួយគត់ (Kotlin-first) សម្រាប់ Android ។

## 2. លក្ខណៈពិសេសសំខាន់ៗ

-   **Concise (សង្ខេប):** Kotlin ត្រូវការ Code តិចជាង Java សម្រាប់ភារកិច្ចដូចគ្នា។
-   **Safe:** កាត់បន្ថយ Bug ដូចជា \`NullPointerException\` ដោយមាន **Null Safety** ដែលត្រូវបានបញ្ចូលទៅក្នុងភាសា។
-   **Interoperable:** អាចធ្វើការជាមួយ Java Code យ៉ាងរលូន។ អ្នកអាចហៅ Functions ពី Java Class ទៅ Kotlin និងផ្ទុយមកវិញ។
-   **Modern:** មាន Features ទំនើបៗដូចជា **Coroutines** សម្រាប់ Asynchronous Programming ។
-   **Expression-based:** Control flow statements ដូចជា \`if\`, \`when\`, និង \`try\` អាច Return តម្លៃបាន។

## 3. ហេតុអ្វីត្រូវរៀន Kotlin?

-   **សម្រាប់ Android:** Kotlin បានក្លាយជាភាសាដែលពេញនិយមបំផុតសម្រាប់ Android Development ដោយសារតែវាមានភាពងាយស្រួលនិងសុវត្ថិភាពជាង Java ។
-   **ការងារ:** តម្រូវការសម្រាប់ Developer ដែលចេះ Kotlin កំពុងកើនឡើងយ៉ាងឆាប់រហ័ស។
-   **ផលិតភាព:** វាជួយបង្កើនល្បឿននៃការអភិវឌ្ឍនិងកាត់បន្ថយ Bug ។

## 4. ប្រៀបធៀប Kotlin ជាមួយ Java

| លក្ខណៈពិសេស       | Kotlin                                   | Java                                     |
| -------------------- | ---------------------------------------- | ---------------------------------------- |
| **Null Safety** | Yes (Null-safe by default)               | No (Can lead to \`NullPointerException\`)  |
| **Conciseness** | Concise (Less boilerplate code)          | Verbose (More code needed for same task) |
| **Data Classes** | Built-in (Simplifies model classes)      | No (Need to write boilerplate code)      |
| **Semicolon** | Optional                                 | Required                                 |
| **Type Inference** | Yes (Compiler can infer types)           | No (Must specify types explicitly)       |
| **Coroutines** | Yes (First-class support for async)      | No (Requires external libraries like RxJava) |

## 5. Program "Hello, World!"

នេះជាកូដ Program ដំបូងរបស់អ្នកនៅក្នុង Kotlin ។ 

\`\`\`kotlin
fun main() {
    println("Hello, World!")
}
\`\`\`
-   **\`fun main()\`:** គឺជា Main Function ដែលជាចំណុចចាប់ផ្តើម (Entry Point) របស់ Program ។
-   **\`println()\`:** គឺជា Function ដែលបោះពុម្ព Text ទៅកាន់ Console ។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រៀបធៀប Hello World ជាមួយ Java</h3>
<p>យើងនឹងប្រៀបធៀបភាពសង្ខេបរបស់ Kotlin ជាមួយ Java ។</p>
<pre><code class="language-java">
// Java Code
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
</code></pre>
<pre><code class="language-kotlin">
// Kotlin Code
fun main() {
    println("Hello, World!")
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Kotlin ត្រូវបានបង្កើតឡើងដោយក្រុមហ៊ុនណា?',
      options: [
        'Google',
        'Apple',
        'JetBrains',
        'Microsoft'
      ],
      correct: 2,
      explanation: 'Kotlin ត្រូវបានបង្កើតឡើងដោយក្រុមហ៊ុន JetBrains ។'
    },
    {
      question: 'តើ Google បានប្រកាសថា Kotlin ជាភាសាផ្លូវការសម្រាប់ Android នៅឆ្នាំណា?',
      options: [
        '2010',
        '2016',
        '2017',
        '2019'
      ],
      correct: 2,
      explanation: 'Google បានប្រកាសនៅឆ្នាំ 2017 ហើយបានប្រកាសថា Kotlin-first នៅឆ្នាំ 2019 ។'
    },
    {
      question: 'តើលក្ខណៈពិសេសមួយណាដែលជួយកាត់បន្ថយ `NullPointerException`?',
      options: [
        'Coroutines',
        'Type Inference',
        'Null Safety',
        'Data Classes'
      ],
      correct: 2,
      explanation: 'Null Safety នៅក្នុង Kotlin ជួយការពារ NullPointerException ។'
    },
    {
      question: 'តើ Kotlin អាចធ្វើការជាមួយ Java Code បានទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលប្រើ Plugin',
        'បានតែនៅលើ Desktop'
      ],
      correct: 0,
      explanation: 'Kotlin ត្រូវបានរចនាឡើងដើម្បីធ្វើការជាមួយ Java យ៉ាងរលូន (Interoperable) ។'
    },
    {
      question: 'តើ Main Function នៅក្នុង Kotlin ត្រូវសរសេរយ៉ាងដូចម្តេច?',
      options: [
        '`public void main()`',
        '`fun main()`',
        '`main()`',
        '`main(args: String[])`'
      ],
      correct: 1,
      explanation: 'Main Function នៅក្នុង Kotlin ត្រូវបានសរសេរដោយប្រើ Keyword `fun` ។'
    },
    {
      question: 'តើ `println()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បោះពុម្ព Text ទៅ Console',
        'លុប Text',
        'អានពី Keyboard',
        'បង្កើត String'
      ],
      correct: 0,
      explanation: '`println()` គឺជា Function សម្រាប់បោះពុម្ព Text ទៅ Console ។'
    },
    {
      question: 'តើ Kotlin ត្រូវបិទដោយ `Semicolon (;)` ដែរឬទេ?',
      options: [
        'ត្រូវ',
        'មិនត្រូវទេ',
        'ត្រូវតែសម្រាប់ Functions',
        'ជាជម្រើស (Optional)'
      ],
      correct: 3,
      explanation: 'Semicolon គឺស្រេចតែចិត្តនៅក្នុង Kotlin ។'
    },
    {
      question: 'តើ Coroutines នៅក្នុង Kotlin ប្រើសម្រាប់អ្វី?',
      options: [
        'ការគណនាគណិតវិទ្យា',
        'Asynchronous Programming',
        'Networking',
        'Database Operations'
      ],
      correct: 1,
      explanation: 'Coroutines គឺជាវិធីរបស់ Kotlin សម្រាប់ការធ្វើ Asynchronous Programming ។'
    },
    {
      question: 'តើ Data Class ជួយអ្វីខ្លះ?',
      options: [
        'បង្កើត UI',
        'Simplifies model classes ដោយបង្កើត Functions ដូចជា `equals()` និង `toString()` ដោយស្វ័យប្រវត្តិ',
        'បង្កើត Functions',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Data Class ជួយកាត់បន្ថយ Boilerplate Code សម្រាប់ Model Classes ។'
    },
    {
      question: 'តើ Kotlin ជាភាសា `Statically Typed` ឬ `Dynamically Typed`?',
      options: [
        'Statically Typed',
        'Dynamically Typed',
        'ទាំងពីរ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Kotlin គឺជាភាសា Statically Typed ដែលមានន័យថា Types ត្រូវបានពិនិត្យនៅពេល Compile Time ។'
    }
  ],
  lab: {
    task: `
សរសេរ Program Kotlin មួយដើម្បីបោះពុម្ពឈ្មោះរបស់អ្នក។

**តម្រូវការ:**

1.  **Program:**
    -   បង្កើត File Kotlin ថ្មីមួយ។
    -   នៅក្នុង Main Function, ប្រើ \`println()\` ដើម្បីបោះពុម្ពឈ្មោះរបស់អ្នក។

2.  **Output:**
    -   Program ត្រូវតែបោះពុម្ព Text ដូចខាងក្រោម៖
        \`\`\`
        Hello, I am [Your Name].
        \`\`\`

**ការណែនាំ:** អ្នកអាចប្រើ Kotlin Playground Online ដើម្បីអនុវត្ត។
    `,
    solution: `
\`\`\`kotlin
fun main() {
    val myName = "Sokha" // ជំនួស "Sokha" ទៅជាឈ្មោះរបស់អ្នក
    println("Hello, I am $myName.")
}
\`\`\`
`
  }
};

export default KotlinLesson1_1Content;