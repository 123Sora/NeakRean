import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson2_4Content: LessonContent = {
  title: 'State in Jetpack Compose',
  objectives: [
    'យល់ដឹងស៊ីជម្រៅពី Concept របស់ State និង `mutableStateOf`',
    'រៀនពីរបៀបប្រើ `remember` ដើម្បីរក្សាទុក State',
    'ស្គាល់ពី `State Hoisting` និងសារៈសំខាន់របស់វា',
    'យល់ដឹងពី `Stateful` និង `Stateless` Composables',
    'អនុវត្តការគ្រប់គ្រង State សម្រាប់ UI ដែលធ្វើអន្តរកម្ម'
  ],
  content: `
# State in Jetpack Compose ⚙️

---

**State** នៅក្នុង Jetpack Compose គឺជាតម្លៃណាមួយដែលអាចផ្លាស់ប្តូរបាន ហើយការផ្លាស់ប្តូរនោះនឹងធ្វើឱ្យ UI ត្រូវបានធ្វើបច្ចុប្បន្នភាពឡើងវិញ។ ការគ្រប់គ្រង State ឱ្យបានត្រឹមត្រូវគឺជាគន្លឹះក្នុងការកសាង UI ដែលមានលក្ខណៈ Responsive ។

## 1. What is State?

-   State គឺជាទិន្នន័យដែលផ្លាស់ប្តូរតាមពេលវេលា។ ឧទាហរណ៍៖
    -   អត្ថបទនៅក្នុង \`TextField\` ។
    -   ស្ថានភាពរបស់ \`CheckBox\` (Checked ឬ Unchecked) ។
    -   ចំនួនទឹកប្រាក់នៅក្នុង Shopping Cart ។

-   នៅពេល State ផ្លាស់ប្តូរ, Compose នឹងដំណើរការ **Recomposition** ដែលជាដំណើរការនៃការហៅ Composable Functions ឡើងវិញដើម្បីធ្វើបច្ចុប្បន្នភាព UI ។

## 2. Managing State

-   **\`mutableStateOf\`**: បង្កើត Object \`State\` ដែលអាចផ្លាស់ប្តូរបាន។
-   **\`remember\`**: គឺជា Helper Function ដែលការពារ State មិនឱ្យបាត់បង់នៅពេល Recomposition កើតឡើង។
-   **\`by\` Keyword**: អនុញ្ញាតឱ្យអ្នកប្រើ Syntax ខ្លីជាង (\`var name by remember { mutableStateOf("") }\`) ជំនួសឱ្យ (\`val name = remember { mutableStateOf("") }\`) ។

\`\`\`kotlin
import androidx.compose.runtime.remember
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue

@Composable
fun SimpleCounter() {
    var count by remember { mutableStateOf(0) }
    
    Button(onClick = { count++ }) {
        Text("Count: $count")
    }
}
\`\`\`

## 3. Stateful vs. Stateless Composables

-   **Stateful Composable:** ជា Composable ដែលមាន State ផ្ទាល់ខ្លួន។ វាធ្វើឱ្យ Composable នោះពិបាកក្នុងការ Reuse និង Test ។
-   **Stateless Composable:** ជា Composable ដែលមិនមាន State ផ្ទាល់ខ្លួន។ វាទទួលបាន State តាមរយៈ Parameters និងបញ្ចេញ Events តាមរយៈ Lambdas ។

**Stateful:**
\`\`\`kotlin
@Composable
fun MyButton() {
    // Stateful
    var clicks by remember { mutableStateOf(0) }
    Button(onClick = { clicks++ }) {
        Text("Clicked $clicks times")
    }
}
\`\`\`
**Stateless:**
\`\`\`kotlin
@Composable
fun MyStatelessButton(clicks: Int, onButtonClick: () -> Unit) {
    // Stateless
    Button(onClick = onButtonClick) {
        Text("Clicked $clicks times")
    }
}
\`\`\`
Stateless Composables ត្រូវបានគេពេញនិយមជាងព្រោះវាងាយស្រួលក្នុងការ Reuse និងគ្រប់គ្រង។

## 4. State Hoisting

**State Hoisting** គឺជា Patterns មួយដែលយើងផ្លាស់ប្តូរ State ពី Composable ទៅកាន់ Parent Composable របស់វា។ វាជួយឱ្យយើងបង្កើត **Stateless Composables** ។

-   **គោលការណ៍:**
    1.  **State:** ត្រូវបាន Define នៅក្នុង Parent Composable ។
    2.  **Event:** Child Composable ទទួល State តាមរយៈ Parameters និងបញ្ចេញ Events (តាមរយៈ Lambdas) ទៅ Parent ។

\`\`\`kotlin
// Parent Composable
@Composable
fun CounterScreen() {
    var count by remember { mutableStateOf(0) }
    
    MyStatelessButton(
        clicks = count,
        onButtonClick = { count++ }
    )
}

// Child Composable (Stateless)
@Composable
fun MyStatelessButton(clicks: Int, onButtonClick: () -> Unit) {
    Button(onClick = onButtonClick) {
        Text("Clicked $clicks times")
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`remember\` ជាមួយ \`TextField\`</h3>
<p>យើងនឹងបង្កើត TextField ដែលរក្សាទុក Text ដែលបានបញ្ចូល។</p>
<pre><code class="language-kotlin">
@Composable
fun NameInput() {
    var name by remember { mutableStateOf("") }

    TextField(
        value = name,
        onValueChange = { name = it },
        label = { Text("Enter your name") }
    )
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ State នៅក្នុង Compose គឺជាអ្វី?',
      options: [
        'ជា Class',
        'ជា Value ដែលអាចផ្លាស់ប្តូរបាន',
        'ជា Keyword',
        'ជា Constant'
      ],
      correct: 1,
      explanation: 'State គឺជា Value ដែលអាចផ្លាស់ប្តូរហើយធ្វើឱ្យ UI ធ្វើបច្ចុប្បន្នភាព។'
    },
    {
      question: 'តើ `Recomposition` កើតឡើងនៅពេលណា?',
      options: [
        'នៅពេល App ចាប់ផ្តើម',
        'នៅពេល State ផ្លាស់ប្តូរ',
        'នៅពេល Screen ប្តូរ',
        'នៅពេល Click លើ Button'
      ],
      correct: 1,
      explanation: 'Recomposition គឺជាដំណើរការដែល Compose ធ្វើបច្ចុប្បន្នភាព UI នៅពេល State ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ `remember` Function ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីចងចាំ Password',
        'ដើម្បីរក្សាទុក State នៅពេល Recomposition',
        'ដើម្បីរក្សាទុក File',
        'ដើម្បីរក្សាទុក Network Data'
      ],
      correct: 1,
      explanation: '`remember` ការពារ State មិនឱ្យបាត់បង់នៅពេល Recomposition កើតឡើង។'
    },
    {
      question: 'តើ `mutableStateOf` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត State ដែលមិនអាចផ្លាស់ប្តូរបាន',
        'បង្កើត State ដែលអាចផ្លាស់ប្តូរបាន',
        'បង្កើត Class',
        'បង្កើត Function'
      ],
      correct: 1,
      explanation: '`mutableStateOf` បង្កើត Object State ដែលអាចផ្លាស់ប្តូរបាន។'
    },
    {
      question: 'តើ `State Hoisting` គឺជាអ្វី?',
      options: [
        'ការផ្លាស់ប្តូរ State ពី Child ទៅ Parent',
        'ការបង្កើត UI ថ្មី',
        'ការគ្រប់គ្រង Layouts',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'State Hoisting គឺជា Patterns ដែល State ត្រូវបានផ្លាស់ប្តូរទៅកាន់ Parent Composable ។'
    },
    {
      question: 'តើ Composable មួយណាដែលងាយស្រួលក្នុងការ Reuse និង Test?',
      options: [
        'Stateful Composable',
        'Stateless Composable',
        'Both',
        'None'
      ],
      correct: 1,
      explanation: 'Stateless Composables ងាយស្រួលក្នុងការ Reuse និង Test ព្រោះពួកគេមិនមាន State ផ្ទាល់ខ្លួន។'
    },
    {
      question: 'តើ `by` Keyword ជួយអ្វីខ្លះក្នុងការគ្រប់គ្រង State?',
      options: [
        'ធ្វើឱ្យ State មិនអាចផ្លាស់ប្តូរបាន',
        'ផ្តល់ Syntax ខ្លីជាងសម្រាប់ Access Value',
        'បង្កើត `remember` Object',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`by` Keyword ផ្តល់នូវ Syntax ដែលសាមញ្ញជាងសម្រាប់ Access និង Set Value របស់ State ។'
    },
    {
      question: 'តើ `TextField(value = name, onValueChange = { name = it })` បង្ហាញពី Concept អ្វី?',
      options: [
        'State Hoisting',
        'Imperative UI',
        'XML Layouts',
        'Stateful Composables'
      ],
      correct: 0,
      explanation: 'នេះគឺជាឧទាហរណ៍នៃ State Hoisting ដែល State (value) ត្រូវបានបញ្ជូនទៅ Child (TextField) ហើយ Event (onValueChange) ត្រូវបានបញ្ជូនត្រឡប់មក Parent វិញ។'
    },
    {
      question: 'តើ Recomposition មានន័យថាអ្វី?',
      options: [
        'ការចាប់ផ្តើម App ឡើងវិញ',
        'ការហៅ Composable Functions ឡើងវិញ',
        'ការលុប UI',
        'ការ Compile App'
      ],
      correct: 1,
      explanation: 'Recomposition គឺជាការហៅ Composable Functions ឡើងវិញដើម្បីធ្វើបច្ចុប្បន្នភាព UI ។'
    },
    {
      question: 'តើការគ្រប់គ្រង State ត្រឹមត្រូវមានសារៈសំខាន់អ្វី?',
      options: [
        'ធ្វើឱ្យ App ធំជាងមុន',
        'ធ្វើឱ្យ App យឺត',
        'ធ្វើឱ្យ UI មានលក្ខណៈ Responsive',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'ការគ្រប់គ្រង State ត្រឹមត្រូវជួយឱ្យ UI មានលក្ខណៈ Responsive ។'
    }
  ],
  lab: {
    task: `
បង្កើត UI មួយដែលមាន \`TextField\` សម្រាប់បញ្ចូលឈ្មោះ និង \`Button\` មួយ។ នៅពេលចុច Button, UI នឹងបង្ហាញឈ្មោះនោះ។

**តម្រូវការ:**

1.  **Layout:**
    -   ប្រើ \`Column\` ដើម្បីរៀបចំ Components របស់អ្នក។
    -   ប្រើ \`Modifier.padding()\` ដើម្បីបន្ថែម Space ។

2.  **State:**
    -   ប្រើ \`var nameInput by remember { mutableStateOf("") }\` ដើម្បីរក្សាទុកឈ្មោះដែលបានបញ្ចូល។
    -   ប្រើ \`var greetingText by remember { mutableStateOf("") }\` ដើម្បីរក្សាទុក Text ដែលត្រូវបង្ហាញ។

3.  **Components:**
    -   ប្រើ \`TextField\` ដើម្បីអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បញ្ចូលឈ្មោះ។
    -   ប្រើ \`Button\` ដែលមាន \`onClick\` Handler ។
    -   ប្រើ \`Text\` ដើម្បីបង្ហាញឈ្មោះនៅពេលចុច Button ។

**ការណែនាំ:** នៅពេលចុច Button, អ្នកត្រូវ Set តម្លៃរបស់ \`greetingText\` ទៅជា \`nameInput\` ។
    `,
    solution: `
\`\`\`kotlin
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun GreetingApp() {
    var nameInput by remember { mutableStateOf("") }
    var greetingText by remember { mutableStateOf("") }
    
    Column(
        modifier = Modifier.padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        TextField(
            value = nameInput,
            onValueChange = { nameInput = it },
            label = { Text("Enter your name") }
        )
        
        Spacer(modifier = Modifier.size(16.dp))
        
        Button(onClick = {
            greetingText = "Hello, \\(nameInput)!"
        }) {
            Text("Say Hello")
        }
        
        Spacer(modifier = Modifier.size(16.dp))
        
        Text(
            text = greetingText,
            fontSize = 24.sp
        )
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewGreetingApp() {
    GreetingApp()
}
\`\`\`
`
  }
};

export default KotlinLesson2_4Content;