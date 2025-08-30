import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson6_2Content: LessonContent = {
  title: 'Extension Functions',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Extension Functions',
    'ស្គាល់ពីគុណសម្បត្តិរបស់ Extension Functions',
    'រៀនពីរបៀបបង្កើត Extension Functions',
    'យល់ដឹងពីរបៀបប្រើប្រាស់ Extension Properties',
    'អនុវត្តការបង្កើត Extension Functions សម្រាប់ Android Views'
  ],
  content: `
# Extension Functions 🛠️

---

**Extension Functions** គឺជា Feature ដ៏មានឥទ្ធិពលមួយនៅក្នុង Kotlin ដែលអនុញ្ញាតឱ្យយើងបន្ថែម Function ថ្មីៗទៅក្នុង Class ដែលមានស្រាប់ដោយមិនបាច់ Inherit Class នោះ ឬប្រើ Design Pattern ដូចជា Decorator ។

## 1. ហេតុអ្វីត្រូវប្រើ Extension Functions?

-   **Readability:** ធ្វើឱ្យ Code ងាយស្រួលអាននិងយល់។
-   **Conciseness:** កាត់បន្ថយការសរសេរ Code ដដែលៗ។
-   **Reusability:** អាច Reuse Function នៅក្នុង File ផ្សេងៗគ្នាដោយគ្រាន់តែ Import ចូល។

## 2. Syntax របស់ Extension Functions

Syntax គឺសាមញ្ញ៖ \`fun ClassName.functionName(parameters): ReturnType { ... }\`

\`\`\`kotlin
// ឧទាហរណ៍៖ ការបន្ថែម Extension Function ទៅ Class String
fun String.addGreeting(): String {
    return "Hello, \$this!"
}

val name = "Sokha"
val greeting = name.addGreeting() // ប្រើដូចជា Function ធម្មតា
// greeting នឹងមានតម្លៃ "Hello, Sokha!"
\`\`\`
-   \`String\` គឺជា **Receiver Type** ។
-   \`this\` Keyword នៅក្នុង Function តំណាងឱ្យ Object ដែលហៅ Function នោះ។

## 3. Extension Functions សម្រាប់ Android

Extension Functions ត្រូវបានគេប្រើប្រាស់យ៉ាងទូលំទូលាយនៅក្នុង Android Development សម្រាប់ Class ដូចជា \`Context\`, \`View\`, និង \`Activity\` ។

\`\`\`kotlin
import android.content.Context
import android.widget.Toast

// Extension Function សម្រាប់ Context
fun Context.showToast(message: String) {
    Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
}

// នៅក្នុង Activity ឬ Fragment
context.showToast("This is an extension function!")
\`\`\`
នេះធ្វើឱ្យ Code របស់អ្នកមើលទៅស្អាតនិងខ្លីជាងមុន។

## 4. Extension Properties

ក្រៅពី Functions, យើងក៏អាចបង្កើត **Extension Properties** បានដែរ។

\`\`\`kotlin
val String.hasNumbers: Boolean
    get() = this.any { it.isDigit() }

val myString = "abc123"
val result = myString.hasNumbers // result នឹងមានតម្លៃ true
\`\`\`
-   Extension Properties មិនអាចរក្សាទុក State បានទេ (Backing Field) ។

## 5. លក្ខខណ្ឌនៃការប្រើប្រាស់

-   Extension Function មិនអាច Access \`private\` ឬ \`protected\` Members របស់ Class បានទេ។
-   Extension Function គ្រាន់តែជា Static Function ដែលមាន Syntax ពិសេស។
-   ប្រសិនបើ Class មាន Function ដែលមានឈ្មោះដូចគ្នាទៅនឹង Extension Function, Function របស់ Class នឹងត្រូវបានហៅមុន។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Extension Function សម្រាប់ View</h3>
<p>យើងអាចបង្កើត Extension Function សម្រាប់ View ដើម្បីធ្វើឱ្យ Visible ឬ Gone ។</p>
<pre><code class="language-kotlin">
import android.view.View

fun View.show() {
    this.visibility = View.VISIBLE
}

fun View.hide() {
    this.visibility = View.GONE
}

// នៅក្នុង Activity
myTextView.hide()
myButton.show()
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Extension Function គឺជាអ្វី?',
      options: [
        'Function ដែល Inherit ពី Class ផ្សេង',
        'Function ដែលបន្ថែម Function ថ្មីទៅ Class ដែលមានស្រាប់',
        'Function ដែលប្តូរ Behavior របស់ Class',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Extension Function បន្ថែម Function ថ្មីទៅ Class ដែលមានស្រាប់ដោយមិនបាច់ Inherit ។'
    },
    {
      question: 'តើ \`this\` Keyword នៅក្នុង Extension Function តំណាងឱ្យអ្វី?',
      options: [
        'Class របស់ Extension Function',
        'Object ដែលហៅ Extension Function នោះ',
        'Context',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '\`this\` Keyword តំណាងឱ្យ Object ដែលហៅ Function នោះ។'
    },
    {
      question: 'តើ Extension Functions អាច Access \`private\` Members របស់ Class បានទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលប្រើ Reflection',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Extension Functions មិនអាច Access \`private\` ឬ \`protected\` Members បានទេ។'
    },
    {
      question: 'តើ Extension Functions ជួយអ្វីខ្លះ?',
      options: [
        'ធ្វើឱ្យ Code វែង',
        'ធ្វើឱ្យ Code ងាយស្រួលអាន',
        'បង្កើន Memory Usage',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Extension Functions ជួយធ្វើឱ្យ Code ងាយស្រួលអាននិងខ្លី។'
    },
    {
      question: 'តើ \`val String.hasNumbers\` គឺជាអ្វី?',
      options: [
        'Extension Function',
        'Extension Property',
        'Global Property',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'នេះគឺជា Extension Property ។'
    },
    {
      question: 'តើ Extension Functions ត្រូវបាន Compile ទៅជាអ្វី?',
      options: [
        'Inline Functions',
        'Static Functions',
        'Anonymous Functions',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Extension Functions ត្រូវបាន Compile ទៅជា Static Functions ។'
    },
    {
      question: 'តើ Class ណាដែលត្រូវបានគេពេញនិយមប្រើ Extension Functions នៅក្នុង Android?',
      options: [
        'Context, View, Activity',
        'Database',
        'Network',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 0,
      explanation: 'Extension Functions ត្រូវបានគេពេញនិយមប្រើជាមួយ Context, View, Activity ។'
    },
    {
      question: 'តើ \`fun String.isEmpty()\` នឹង Override \`String.isEmpty()\` របស់ Kotlin Standard Library ដែរឬទេ?',
      options: [
        'Override',
        'មិន Override ទេ',
        'អាស្រ័យលើ Version របស់ Kotlin',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'មិន Override ទេ ព្រោះ Function របស់ Class ដើមនឹងត្រូវបានហៅមុន។'
    },
    {
      question: 'តើ Extension Properties អាចមាន Backing Field ដែរឬទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលប្រើ Delegate',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Extension Properties មិនអាចមាន Backing Field បានទេ។'
    },
    {
      question: 'តើ Extension Functions ជួយដោះស្រាយបញ្ហាអ្វី?',
      options: [
        'ការបំបែក Code',
        'ធ្វើឱ្យ Class អាច Reuse បាន',
        'កាត់បន្ថយ Code ដែលដដែលៗ',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 2,
      explanation: 'Extension Functions ជួយកាត់បន្ថយ Code ដែលដដែលៗ។'
    }
  ],
  lab: {
    task: `
បង្កើត App មួយដែលមាន EditText និង Button ។ បង្កើត Extension Functions ពីរសម្រាប់ \`EditText\` គឺ \`clearText()\` និង \`getText()\` ។ នៅពេលចុច Button, ប្រើ Extension Functions ទាំងនោះដើម្បីទទួលបាន Text ពី EditText ហើយបង្ហាញវានៅលើ Toast ។

**តម្រូវការ:**

1.  **Layout:**
    -   មាន \`EditText\` មួយ។
    -   មាន \`Button\` មួយ។

2.  **Extension Functions:**
    -   បង្កើត Extension Function មួយឈ្មោះ \`clearText()\` សម្រាប់ \`EditText\` ដែល Set Text ទៅជា String ទទេ។
    -   បង្កើត Extension Function មួយឈ្មោះ \`getText()\` សម្រាប់ \`EditText\` ដែលត្រឡប់តម្លៃរបស់ Text ។
    -   បង្កើត Extension Function មួយឈ្មោះ \`showToast()\` សម្រាប់ \`Context\` ។

3.  **Logic:**
    -   នៅក្នុង \`onClick\` Listener របស់ Button, ប្រើ \`getText()\` ដើម្បីទទួលបាន Text ។
    -   ប្រើ \`showToast()\` ដើម្បីបង្ហាញ Text នោះ។
    -   បន្ទាប់មក, ប្រើ \`clearText()\` ដើម្បីលុប Text នៅក្នុង \`EditText\` ។
    `,
    solution: `
\`\`\`kotlin
import android.content.Context
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val myEditText = findViewById<EditText>(R.id.my_edit_text)
        val myButton = findViewById<Button>(R.id.my_button)
        
        myButton.setOnClickListener {
            val text = myEditText.getText()
            this.showToast(text)
            myEditText.clearText()
        }
    }
}

// Extension Functions
fun EditText.clearText() {
    this.text.clear()
}

fun EditText.getText(): String {
    return this.text.toString()
}

fun Context.showToast(message: String) {
    Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
}
\`\`\`
`
  }
};

export default KotlinLesson6_2Content;