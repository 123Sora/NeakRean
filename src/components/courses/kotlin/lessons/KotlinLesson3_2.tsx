import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson3_2Content: LessonContent = {
  title: 'ViewModel',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា ViewModel និងសារៈសំខាន់របស់វា',
    'ស្គាល់ពី Lifecycle របស់ ViewModel',
    'រៀនពីរបៀបបង្កើត ViewModel Class',
    'យល់ដឹងពីរបៀបប្រើប្រាស់ ViewModel ជាមួយ Jetpack Compose',
    'អនុវត្តការរក្សាទុក State ឆ្លងកាត់ Configuration Changes'
  ],
  content: `
# ViewModel 🧩

---

**ViewModel** គឺជា Class របស់ Android Jetpack ដែលត្រូវបានរចនាឡើងដើម្បីរក្សាទុកនិងគ្រប់គ្រង UI-related Data តាមរបៀបដែលគាំទ្រដល់ **Lifecycle** ។ ViewModel ជួយឱ្យទិន្នន័យរបស់អ្នកនៅរស់ (Survive) នៅពេលដែល Activity ឬ Fragment ត្រូវបានបំផ្លាញដោយសារតែ Configuration Changes ដូចជាការបង្វិលអេក្រង់ (Screen Rotation) ។

## 1. ហេតុអ្វីត្រូវប្រើ ViewModel?

-   **Lifecycle Awareness:** ViewModel អាចនៅរស់បានយូរជាង View Controller (Activity/Fragment) ។
-   **Separation of Concerns:** វាបំបែក Logic របស់ UI (UI Layer) ចេញពី Business Logic (Data Layer) ។
-   **Data Persistence:** ទិន្នន័យនៅតែរក្សាដដែលនៅពេល Configuration Changes ។

## 2. ViewModel Lifecycle

ViewModel មាន Lifecycle ផ្ទាល់ខ្លួន។ 

-   **\`onCreate()\`**: ViewModel ត្រូវបានបង្កើតនៅពេល ViewModel ត្រូវបានស្នើសុំដំបូង។
-   **Configuration Changes:** នៅពេលបង្វិលអេក្រង់, Activity ត្រូវបានបំផ្លាញប៉ុន្តែ ViewModel នៅតែរស់។
-   **\`onCleared()\`**: ViewModel ត្រូវបានបំផ្លាញនៅពេល View Controller (Activity/Fragment) ត្រូវបានបំផ្លាញជាអចិន្ត្រៃយ៍ (ឧ. អ្នកប្រើប្រាស់ចុច Back Button) ។

## 3. ការបង្កើត ViewModel Class

អ្នកត្រូវ Extend Class \`ViewModel\` ពី Androidx Library ។

\`\`\`kotlin
import androidx.lifecycle.ViewModel

class MyViewModel : ViewModel() {
    // UI-related data
    var count = 0
    
    fun incrementCount() {
        count++
    }
}
\`\`\`
**ចំណាំ:** ដើម្បីឱ្យ State របស់ ViewModel ធ្វើបច្ចុប្បន្នភាព UI ដោយស្វ័យប្រវត្តិ អ្នកត្រូវប្រើ \`mutableStateOf\` (ដូចនៅក្នុងមេរៀនមុន) ។

## 4. ការប្រើប្រាស់ ViewModel ជាមួយ Compose

ដើម្បីប្រើ ViewModel នៅក្នុង Composable Function, យើងប្រើ \`viewModel()\` Function ។

\`\`\`kotlin
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue

class MyViewModel : ViewModel() {
    var count by mutableStateOf(0)
        private set
    
    fun incrementCount() {
        count++
    }
}

@Composable
fun CounterScreen(myViewModel: MyViewModel = viewModel()) {
    Button(onClick = { myViewModel.incrementCount() }) {
        Text("Count: '$'{myViewModel.count}")
    }
}
\`\`\`
\`viewModel()\` Function នឹងផ្តល់នូវ Instance របស់ \`MyViewModel\` ដែលមាននៅក្នុង Scope របស់ Composition ។

## 5. State Persistence

ការប្រើ ViewModel ជួយឱ្យទិន្នន័យរបស់អ្នកមិនបាត់បង់នៅពេលបង្វិលអេក្រង់។ 

\`\`\`kotlin
// ឧទាហរណ៍៖ បើអ្នកមិនប្រើ ViewModel
// នៅពេលបង្វិលអេក្រង់, counter នឹងចាប់ផ្តើមពី 0 វិញ
@Composable
fun CounterWithoutViewModel() {
    var count by remember { mutableStateOf(0) }
    Button(onClick = { count++ }) {
        Text("Count: $count")
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ViewModel ជាមួយ \`TextField\`</h3>
<p>យើងនឹងបង្កើត TextField ដែលរក្សាទុក Text របស់វា ទោះបីជាបង្វិលអេក្រង់ក៏ដោយ។</p>
<pre><code class="language-kotlin">
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue

class MyTextFieldViewModel : ViewModel() {
    var text by mutableStateOf("")
        private set
    
    fun onTextChanged(newText: String) {
        text = newText
    }
}

@Composable
fun MyTextFieldScreen(myViewModel: MyTextFieldViewModel = viewModel()) {
    TextField(
        value = myViewModel.text,
        onValueChange = { myViewModel.onTextChanged(it) },
        label = { Text("Enter text here") }
    )
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ ViewModel គឺជាអ្វី?',
      options: [
        'Class សម្រាប់ UI',
        'Class សម្រាប់រក្សាទុក UI-related Data',
        'Database',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'ViewModel គឺជា Class ដែលត្រូវបានរចនាឡើងដើម្បីរក្សាទុក UI-related Data ។'
    },
    {
      question: 'តើ ViewModel អាចនៅរស់បានយូរប៉ុណ្ណា?',
      options: [
        'នៅរស់ដរាបណា App កំពុងដំណើរការ',
        'នៅរស់ដរាបណា Activity ឬ Fragment នៅរស់',
        'នៅរស់ដរាបណា Activity/Fragment របស់វានៅរស់ ហើយមិនត្រូវបានបំផ្លាញជាអចិន្ត្រៃយ៍',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'ViewModel នៅរស់ឆ្លងកាត់ Configuration Changes ។'
    },
    {
      question: 'តើ `onCleared()` Function នៅក្នុង ViewModel ត្រូវបានហៅនៅពេលណា?',
      options: [
        'នៅពេល App បិទ',
        'នៅពេល Screen បង្វិល',
        'នៅពេល ViewModel ត្រូវបានបំផ្លាញជាអចិន្ត្រៃយ៍',
        'នៅពេល UI ត្រូវបានបំផ្លាញ'
      ],
      correct: 2,
      explanation: '`onCleared()` ត្រូវបានហៅនៅពេល ViewModel ត្រូវបានបំផ្លាញជាអចិន្ត្រៃយ៍។'
    },
    {
      question: 'តើ `viewModel()` Function ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត ViewModel Object',
        'ផ្តល់នូវ Instance របស់ ViewModel ទៅ Composable',
        'បំផ្លាញ ViewModel',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`viewModel()` Function ផ្តល់នូវ Instance របស់ ViewModel ដែលមាននៅក្នុង Scope របស់ Composition ។'
    },
    {
      question: 'តើ ViewModel ជួយដោះស្រាយបញ្ហាអ្វី?',
      options: [
        'Network Issues',
        'Data Persistence ឆ្លងកាត់ Configuration Changes',
        'Database Errors',
        'Syntax Errors'
      ],
      correct: 1,
      explanation: 'ViewModel ត្រូវបានរចនាឡើងដើម្បីដោះស្រាយបញ្ហា Data Persistence ឆ្លងកាត់ Configuration Changes ។'
    },
    {
      question: 'តើ Composable Function អាចប្រើ State ដោយមិនបាត់បង់នៅពេល Configuration Changes បានទេ ប្រសិនបើវាមិនប្រើ ViewModel?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលប្រើ `remember`',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`remember` រក្សាទុក State តែនៅក្នុង Composition ប៉ុណ្ណោះ វានឹងបាត់បង់នៅពេល Activity ត្រូវបានបំផ្លាញ។'
    },
    {
      question: 'តើ `private set` នៅក្នុង `var text by mutableStateOf("") private set` ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើឱ្យ `text` មិនអាចផ្លាស់ប្តូរបាន',
        'អនុញ្ញាតឱ្យផ្លាស់ប្តូរ `text` តែនៅក្នុង Class ប៉ុណ្ណោះ',
        'ធ្វើឱ្យ `text` អាចផ្លាស់ប្តូរបានពីគ្រប់ទីកន្លែង',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`private set` អនុញ្ញាតឱ្យ Setter របស់ Variable អាចចូលប្រើបានតែនៅក្នុង Class នោះប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ Separating Concern មានន័យដូចម្តេច?',
      options: [
        'ការបំបែក Files',
        'ការបំបែក Code ជា Modules',
        'ការបំបែក Logic របស់ UI ពី Business Logic',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Separating Concern គឺការបំបែក Logic របស់ UI ចេញពី Business Logic ។'
    },
    {
      question: 'តើ ViewModel ត្រូវបានប្រើសម្រាប់ Logic ប្រភេទណា?',
      options: [
        'UI-related Logic',
        'Network Logic',
        'Database Logic',
        'Business Logic'
      ],
      correct: 0,
      explanation: 'ViewModel ត្រូវបានប្រើសម្រាប់ UI-related Logic ។'
    },
    {
      question: 'តើ Class មួយណាដែល ViewModel ត្រូវ Extend?',
      options: [
        'AppCompatActivity',
        'Fragment',
        'ViewModel',
        'View'
      ],
      correct: 2,
      explanation: 'ViewModel ត្រូវ Extend Class `ViewModel` ពី Androidx Library ។'
    }
  ],
  lab: {
    task: `
បង្កើត App Counter ដែលប្រើ ViewModel ដើម្បីរក្សាទុកចំនួន Click ទោះបីជាបង្វិលអេក្រង់ក៏ដោយ។

**តម្រូវការ:**

1.  **ViewModel Class:**
    -   បង្កើត Class មួយឈ្មោះ \`CounterViewModel\` ដែល Extend ពី \`ViewModel\` ។
    -   ប្រើ \`mutableStateOf\` ដើម្បីរក្សាទុកចំនួន Click ។
    -   បង្កើត Function មួយឈ្មោះ \`incrementCount()\` ដើម្បីបង្កើនចំនួន Click ។

2.  **Composable UI:**
    -   បង្កើត Composable មួយឈ្មោះ \`CounterScreen\` ។
    -   ប្រើ \`viewModel()\` ដើម្បីទទួលបាន Instance របស់ \`CounterViewModel\` ។
    -   ប្រើ \`Text\` ដើម្បីបង្ហាញចំនួន Click ។
    -   ប្រើ \`Button\` ដើម្បីហៅ Function \`incrementCount()\` នៅក្នុង ViewModel ។

3.  **Test:**
    -   រត់ App លើ Emulator ។
    -   Click លើ Button ច្រើនដង។
    -   បង្វិលអេក្រង់ ហើយមើលថាតើចំនួននៅរក្សាដដែលឬទេ ។
    `,
    solution: `
\`\`\`kotlin
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.sp

// ViewModel
class CounterViewModel : ViewModel() {
    var count by mutableStateOf(0)
        private set
    
    fun incrementCount() {
        count++
    }
}

// Composable UI
@Composable
fun CounterScreen(viewModel: CounterViewModel = viewModel()) {
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "Count: \${viewModel.count}",
            fontSize = 30.sp
        )
        
        Button(onClick = { viewModel.incrementCount() }) {
            Text("Increment")
        }
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewCounterScreen() {
    CounterScreen()
}
\`\`\`
`
  }
};

export default KotlinLesson3_2Content;