import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson3_3Content: LessonContent = {
  title: 'LiveData and StateFlow',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា LiveData និង StateFlow',
    'ប្រៀបធៀប LiveData ជាមួយ StateFlow',
    'រៀនពីរបៀបប្រើប្រាស់ LiveData ជាមួយ ViewModel និង Compose',
    'រៀនពីរបៀបប្រើប្រាស់ StateFlow ជាមួយ ViewModel និង Compose',
    'យល់ដឹងពីការប្រើប្រាស់ `collectAsStateWithLifecycle`'
  ],
  content: `
# LiveData and StateFlow 🔄

---

**LiveData** និង **StateFlow** គឺជា Classes សម្រាប់គ្រប់គ្រង **State** ដែលអនុញ្ញាតឱ្យអ្នកបង្កើត Data Stream ដែលអាចត្រូវបានគេស្តាប់ (Observed) ។ ពួកវាមានប្រយោជន៍ជាពិសេសសម្រាប់ការធ្វើបច្ចុប្បន្នភាព UI ដោយស្វ័យប្រវត្តិនៅពេលទិន្នន័យផ្លាស់ប្តូរ។

## 1. LiveData

-   **Description:** \`LiveData\` គឺជា Data Holder Class ដែលអាចត្រូវបានគេស្តាប់ (Observable) ។ វាជាផ្នែកមួយនៃ Android Architecture Components ។
-   **Lifecycle Awareness:** LiveData គឺ **Lifecycle-aware** ដែលមានន័យថាវាធ្វើបច្ចុប្បន្នភាព UI តែនៅពេល View Controller (Activity/Fragment) នៅរស់ប៉ុណ្ណោះ។
-   **Usage:** LiveData ត្រូវបានគេប្រើប្រាស់យ៉ាងទូលំទូលាយនៅក្នុង Traditional View System ។

\`\`\`kotlin
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class MyViewModel : ViewModel() {
    private val _count = MutableLiveData<Int>()
    val count: LiveData<Int> = _count
    
    init {
        _count.value = 0
    }
    
    fun incrementCount() {
        _count.value = (_count.value ?: 0) + 1
    }
}
\`\`\`
**ចំណាំ:** យើងប្រើ \`MutableLiveData\` សម្រាប់ Internal Logic ហើយបើកបង្ហាញ \`LiveData\` ទៅ UI ។

## 2. StateFlow

-   **Description:** \`StateFlow\` គឺជា Observable Data Holder Flow ។ វាជាផ្នែកមួយនៃ **Kotlin Coroutines** ។
-   **Hot Flow:** StateFlow គឺជា Hot Flow ដែលមានន័យថាវាបញ្ចេញតម្លៃ (Emits Values) ទោះបីជាគ្មាន Observer ក៏ដោយ។
-   **Usage:** ពេញនិយមជាង LiveData សម្រាប់ Project ថ្មីដែលប្រើ Coroutines ។

\`\`\`kotlin
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.MutableStateFlow
import androidx.lifecycle.ViewModel

class MyViewModel : ViewModel() {
    private val _count = MutableStateFlow(0)
    val count: StateFlow<Int> = _count
    
    fun incrementCount() {
        _count.value++
    }
}
\`\`\`

## 3. LiveData vs. StateFlow

| លក្ខណៈពិសេស       | LiveData                                 | StateFlow                                |
| -------------------- | ---------------------------------------- | ---------------------------------------- |
| **Origin** | Android Jetpack                           | Kotlin Coroutines                        |
| **Lifecycle** | Lifecycle-aware by default              | Requires \`collectAsStateWithLifecycle\`   |
| **Initial Value** | Does not require an initial value      | **Requires an initial value** |
| **Nature** | \`Observer\` Pattern                       | \`Flow\` Pattern                           |
| **Use Case** | Simple UI State, Non-reactive data      | Complex data flows, Coroutines, Reactive UI |

## 4. ការប្រើប្រាស់ជាមួយ Compose

### ជាមួយ LiveData
\`\`\`kotlin
import androidx.compose.runtime.livedata.observeAsState

@Composable
fun CounterScreen(viewModel: MyViewModel = viewModel()) {
    val count by viewModel.count.observeAsState(initial = 0)
    
    Button(onClick = { viewModel.incrementCount() }) {
        Text("Count: $count")
    }
}
\`\`\`
\`observeAsState()\` គឺជា Extension Function ដែលប្រែក្លាយ LiveData ទៅជា State ដែលអាចត្រូវបានប្រើនៅក្នុង Compose ។

### ជាមួយ StateFlow
\`\`\`kotlin
import androidx.compose.runtime.collectAsState
import androidx.lifecycle.compose.collectAsStateWithLifecycle

@Composable
fun CounterScreen(viewModel: MyViewModel = viewModel()) {
    // ប្រើ collectAsStateWithLifecycle ដើម្បី Lifecycle-aware
    val count by viewModel.count.collectAsStateWithLifecycle() 
    
    Button(onClick = { viewModel.incrementCount() }) {
        Text("Count: $count")
    }
}
\`\`\`
\`collectAsStateWithLifecycle()\` គឺជា Function ដែលពេញនិយមបំផុតសម្រាប់ StateFlow ជាមួយ Compose ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`StateFlow\` ជាមួយ Data Class</h3>
<p>យើងអាចប្រើ StateFlow ដើម្បីគ្រប់គ្រង State របស់ Data Class ។</p>
<pre><code class="language-kotlin">
data class User(val name: String, val age: Int)

class UserViewModel : ViewModel() {
    private val _user = MutableStateFlow(User("N/A", 0))
    val user: StateFlow<User> = _user
    
    fun updateUser(name: String, age: Int) {
        _user.value = User(name, age)
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `LiveData` និង `StateFlow` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Network',
        'គ្រប់គ្រង Data Stream',
        'គ្រប់គ្រង Database',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'ពួកគេទាំងពីរត្រូវបានប្រើដើម្បីគ្រប់គ្រង Data Stream ដែលអាចត្រូវបានគេស្តាប់។'
    },
    {
      question: 'តើ `LiveData` មានលក្ខណៈពិសេសមួយណាដែល `StateFlow` មិនមានដោយស្វ័យប្រវត្តិ?',
      options: [
        'Hot Flow',
        'Initial Value',
        'Lifecycle Awareness',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'LiveData គឺ Lifecycle-aware ដោយស្វ័យប្រវត្តិ ចំណែក StateFlow ត្រូវការ Extension Function ដូចជា `collectAsStateWithLifecycle` ។'
    },
    {
      question: 'តើ `StateFlow` ទាមទារ Initial Value ទេ?',
      options: [
        'ទាមទារ',
        'មិនទាមទារទេ',
        'ទាមទារតែពេល UI ផ្លាស់ប្តូរ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'StateFlow ទាមទារ Initial Value នៅពេលត្រូវបានបង្កើត។'
    },
    {
      question: 'តើ `observeAsState()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ប្រែក្លាយ LiveData ទៅជា State សម្រាប់ Compose',
        'ប្រែក្លាយ StateFlow ទៅជា State សម្រាប់ Compose',
        'ប្រែក្លាយ UI ទៅជា State',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`observeAsState()` គឺជា Extension Function ដែលប្រែក្លាយ LiveData ទៅជា State ។'
    },
    {
      question: 'តើ `collectAsStateWithLifecycle()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ប្រែក្លាយ LiveData ទៅជា State',
        'ប្រែក្លាយ StateFlow ទៅជា State ដោយគិតពី Lifecycle',
        'ប្រែក្លាយ UI ទៅជា State',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`collectAsStateWithLifecycle()` ត្រូវបានប្រើដើម្បីប្រមូល StateFlow ដោយគិតពី Lifecycle ។'
    },
    {
      question: 'តើ `MutableLiveData` និង `LiveData` ខុសគ្នាត្រង់ណា?',
      options: [
        '`MutableLiveData` អាចផ្លាស់ប្តូរតម្លៃបាន ចំណែក `LiveData` មិនបាន',
        '`LiveData` អាចផ្លាស់ប្តូរតម្លៃបាន ចំណែក `MutableLiveData` មិនបាន',
        'គ្មានភាពខុសគ្នាទេ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`MutableLiveData` អាចផ្លាស់ប្តូរតម្លៃបាន ហើយជាធម្មតាត្រូវបានប្រើសម្រាប់ Logic ផ្ទៃក្នុង។'
    },
    {
      question: 'តើ LiveData ត្រូវបានគេចាត់ទុកជា Hot Flow ឬ Cold Flow?',
      options: [
        'Hot Flow',
        'Cold Flow',
        'ទាំងពីរ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'LiveData ត្រូវបានគេចាត់ទុកជា Hot Flow ព្រោះវាបញ្ចេញតម្លៃដរាបណាមាន Observer យ៉ាងតិចមួយ។'
    },
    {
      question: 'តើ StateFlow ត្រូវបានគេចាត់ទុកជា Hot Flow ឬ Cold Flow?',
      options: [
        'Hot Flow',
        'Cold Flow',
        'ទាំងពីរ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'StateFlow គឺជា Hot Flow ព្រោះវាបញ្ចេញតម្លៃទោះបីជាគ្មាន Observer ក៏ដោយ។'
    },
    {
      question: 'តើ `_count.value++` នៅក្នុង StateFlow ត្រូវបានហៅនៅពេលណា?',
      options: [
        'នៅពេល UI ផ្លាស់ប្តូរ',
        'នៅពេល ViewModel ត្រូវបានបង្កើត',
        'នៅពេល Function `incrementCount()` ត្រូវបានហៅ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'តម្លៃត្រូវបានផ្លាស់ប្តូរនៅពេល Function `incrementCount()` ត្រូវបានហៅ។'
    },
    {
      question: 'តើ Class ណាដែល LiveData និង StateFlow គួរតែត្រូវបានប្រើ?',
      options: [
        'Activity',
        'Fragment',
        'ViewModel',
        'Composables'
      ],
      correct: 2,
      explanation: 'LiveData និង StateFlow គួរតែត្រូវបានប្រើនៅក្នុង ViewModel ។'
    }
  ],
  lab: {
    task: `
បង្កើត App Counter ដែលប្រើ \`StateFlow\` ដើម្បីគ្រប់គ្រង State ។

**តម្រូវការ:**

1.  **ViewModel:**
    -   បង្កើត Class មួយឈ្មោះ \`CounterViewModel\` ដែល Extend ពី \`ViewModel\` ។
    -   ប្រើ \`MutableStateFlow\` ដើម្បីរក្សាទុកចំនួន Click ។
    -   បង្កើត Function មួយឈ្មោះ \`incrementCount()\` ដើម្បីបង្កើនចំនួន Click ។

2.  **Composable UI:**
    -   បង្កើត Composable មួយឈ្មោះ \`CounterScreen\` ។
    -   ប្រើ \`viewModel()\` ដើម្បីទទួលបាន Instance របស់ \`CounterViewModel\` ។
    -   ប្រើ \`collectAsStateWithLifecycle()\` ដើម្បីប្រមូល StateFlow ទៅជា State ។
    -   ប្រើ \`Text\` ដើម្បីបង្ហាញចំនួន Click ។
    -   ប្រើ \`Button\` ដើម្បីហៅ Function \`incrementCount()\` នៅក្នុង ViewModel ។

3.  **Dependency:**
    -   ត្រូវប្រាកដថាអ្នកបានបន្ថែម Dependency \`lifecycle-runtime-compose\` និង \`kotlinx-coroutines-core\` ។

**ការណែនាំ:** ត្រូវប្រាកដថាអ្នកបាន Import Classes ត្រឹមត្រូវ។
    `,
    solution: `
\`\`\`kotlin
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.sp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.StateFlow

// ViewModel
class CounterViewModel : ViewModel() {
    private val _count = MutableStateFlow(0)
    val count: StateFlow<Int> = _count.asStateFlow()
    
    fun incrementCount() {
        _count.value++
    }
}

// Composable UI
@Composable
fun CounterScreen(viewModel: CounterViewModel = viewModel()) {
    val count by viewModel.count.collectAsStateWithLifecycle()
    
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "Count: \${count}",
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

export default KotlinLesson3_3Content;