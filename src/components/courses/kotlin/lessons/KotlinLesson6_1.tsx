import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson6_1Content: LessonContent = {
  title: 'Coroutines',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Asynchronous Programming',
    'ស្គាល់ពី Concept របស់ Coroutines',
    'រៀនពីរបៀបប្រើប្រាស់ `suspend`, `launch` និង `runBlocking`',
    'យល់ដឹងពី `CoroutineScope` និង `Dispatchers`',
    'អនុវត្តការធ្វើ Network Request ដោយប្រើ Coroutines'
  ],
  content: `
# Coroutines 🤖

---

**Coroutines** គឺជា Design Pattern សម្រាប់ធ្វើ **Asynchronous Programming** នៅក្នុង Kotlin ។ វាអនុញ្ញាតឱ្យយើងសរសេរ Code សម្រាប់ Task ដែលចំណាយពេលយូរ (Long-running tasks) ដូចជា Network Calls ឬ Database Operations ដោយមិនបាច់ Block Main Thread (UI Thread) ។

## 1. Asynchronous vs. Synchronous Programming

-   **Synchronous:** ការហៅ Function មួយៗត្រូវរង់ចាំឱ្យ Function មុនចប់សិនទើបអាចបន្តទៅមុខទៀតបាន។ បើ Task ណាដែលយូរ វាធ្វើឱ្យ App របស់អ្នកគាំង (Frozen) ។
-   **Asynchronous:** ការហៅ Function មួយៗមិនចាំបាច់រង់ចាំគ្នាទេ។ UI Thread នៅតែមានលទ្ធភាពធ្វើការផ្សេងៗទៀតបាន។



## 2. Coroutine Concepts

-   **Suspend Function:** ជា Function ដែលអាចត្រូវបានគេផ្អាក (Suspended) និងបន្ត (Resumed) វិញនៅពេលក្រោយ។ វាតែងតែត្រូវបានហៅពី Coroutine ឬ Suspend Function ផ្សេងទៀត។
-   **CoroutineScope:** កំណត់ Lifecycle របស់ Coroutine ។ នៅពេល Scope ត្រូវបានលុបចោល (Cancelled) Coroutine ទាំងអស់ដែលនៅក្នុងនោះក៏ត្រូវបានលុបចោលដែរ។
-   **Dispatcher:** កំណត់ Thread ណាដែល Coroutine ត្រូវរត់។
    -   **\`Dispatchers.Main\`**: Main Thread (UI Thread) ។ ប្រើសម្រាប់ UI Operations ។
    -   **\`Dispatchers.IO\`**: Thread Pool សម្រាប់ I/O Operations (Network, Disk) ។
    -   **\`Dispatchers.Default\`**: Thread Pool សម្រាប់ CPU-intensive tasks (Sorting, heavy calculations) ។

## 3. Creating a Coroutine

យើងប្រើ **Coroutine Builders** ដូចជា \`launch\` ឬ \`async\` ដើម្បីបង្កើត Coroutine ។

\`\`\`kotlin
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

// ឧទាហរណ៍៖ ការហៅ Network នៅក្នុង Coroutine
fun fetchDataFromApi() {
    GlobalScope.launch(Dispatchers.IO) {
        // Code នេះនឹងរត់នៅក្នុង IO Thread
        val data = getSomeData()
        
        // ប្តូរទៅ Main Thread វិញដើម្បី Update UI
        launch(Dispatchers.Main) {
            updateUi(data)
        }
    }
}

suspend fun getSomeData(): String {
    // ធ្វើការងារយូរដូចជា Network Call
    kotlinx.coroutines.delay(2000) // Simulate delay
    return "Data is here!"
}
\`\`\`
-   **\`GlobalScope.launch\`**: បង្កើត Coroutine ថ្មី។ \`GlobalScope\` មិនត្រូវបានណែនាំឱ្យប្រើក្នុង Production ទេ។ សម្រាប់ Android គួរប្រើ \`viewModelScope\` ឬ \`lifecycleScope\` ។
-   **\`runBlocking\`**: Block Current Thread រហូតដល់ Coroutine ចប់។ ប្រើសម្រាប់ Main Function ឬ Test ។

## 4. \`withContext\`

\`withContext\` គឺជា Function ដែលពេញនិយមសម្រាប់ប្តូរ Dispatcher នៅពេលកំពុងធ្វើការនៅក្នុង Coroutine ។

\`\`\`kotlin
suspend fun fetchAndShowData() {
    val data = withContext(Dispatchers.IO) {
        // ធ្វើការងារយូរនៅក្នុង IO Thread
        getSomeData()
    }
    
    // បន្ទាប់ពីចប់, Code នឹងបន្តនៅក្នុង Thread ដើមវិញ (ក្នុងករណីនេះ Main Thread)
    updateUi(data)
}
\`\`\`
\`withContext\` គឺល្អជាងការប្រើ \`launch\`  nested ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`viewModelScope\` ជាមួយ Coroutines</h3>
<p>យើងប្រើ \`viewModelScope\` នៅក្នុង ViewModel ដើម្បីគ្រប់គ្រង Coroutines ។</p>
<pre><code class="language-kotlin">
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch

class MyViewModel : ViewModel() {
    fun fetchUserData() {
        viewModelScope.launch {
            // ហៅ Repository method ដែលមាន suspend
            val user = userRepository.getUser()
            // Update State...
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Asynchronous Programming គឺអ្វី?',
      options: [
        'ការរត់ Code ជាលំដាប់លំដោយ',
        'ការរត់ Code ដោយមិនបាច់រង់ចាំ Task ដែលយូរ',
        'ការធ្វើ UI Updates',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Asynchronous Programming អនុញ្ញាតឱ្យរត់ Code ដោយមិនបាច់រង់ចាំ Task ដែលយូរ។'
    },
    {
      question: 'តើ `suspend` Keyword ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីធ្វើឱ្យ Function ដំណើរការយឺត',
        'ដើម្បីកំណត់ថា Function អាចត្រូវបានផ្អាកនិងបន្តវិញ',
        'ដើម្បីធ្វើឱ្យ Function ដំណើរការលឿន',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`suspend` កំណត់ថា Function អាចត្រូវបានផ្អាកនិងបន្តវិញនៅពេលក្រោយ។'
    },
    {
      question: 'តើ `Dispatchers.Main` ប្រើសម្រាប់អ្វី?',
      options: [
        'រត់ Network Calls',
        'រត់ Database Operations',
        'រត់ UI Operations',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`Dispatchers.Main` គឺសម្រាប់ Main Thread (UI Thread) ។'
    },
    {
      question: 'តើ `viewModelScope` គឺជាអ្វី?',
      options: [
        'Coroutine Scope ដែលមាននៅក្នុង ViewModel',
        'Coroutine Scope សម្រាប់ App ទាំងមូល',
        'Thread Pool',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`viewModelScope` គឺជា Coroutine Scope ដែលត្រូវបានកំណត់ដោយ ViewModel ។'
    },
    {
      question: 'តើ `runBlocking` ធ្វើអ្វីខ្លះ?',
      options: [
        'មិន Block Thread',
        'Block Current Thread រហូតដល់ Coroutine ចប់',
        'ធ្វើឱ្យ App គាំង',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`runBlocking` Block Current Thread រហូតដល់ Coroutine ចប់។'
    },
    {
      question: 'តើ `withContext` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីចាប់ផ្តើម Coroutine ថ្មី',
        'ដើម្បីប្តូរ Dispatcher នៅក្នុង Coroutine',
        'ដើម្បីលុប Coroutine',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`withContext` គឺជា Function ដែលប្រើសម្រាប់ប្តូរ Dispatcher នៅពេលកំពុងធ្វើការនៅក្នុង Coroutine ។'
    },
    {
      question: 'តើ `Dispatchers.IO` ប្រើសម្រាប់ Task ប្រភេទណា?',
      options: [
        'សម្រាប់ UI Operations',
        'សម្រាប់ I/O Operations (Network, Disk)',
        'សម្រាប់ CPU-intensive tasks',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`Dispatchers.IO` គឺសម្រាប់ I/O Operations ។'
    },
    {
      question: 'តើ `GlobalScope` ត្រូវបានណែនាំឱ្យប្រើក្នុង Android Production ដែរឬទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលមាន Task តិច',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`GlobalScope` មិនត្រូវបានណែនាំឱ្យប្រើទេព្រោះវាមាន Lifecycle របស់ App ទាំងមូល។'
    },
    {
      question: 'តើ `launch` គឺជាអ្វី?',
      options: [
        'Coroutine Builder',
        'Coroutine Dispatcher',
        'Coroutine Scope',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`launch` គឺជា Coroutine Builder សម្រាប់បង្កើត Coroutine ។'
    },
    {
      question: 'តើអ្វីជាគុណសម្បត្តិរបស់ Coroutines លើ Traditional Threading?',
      options: [
        'ងាយស្រួលក្នុងការសរសេរ Code',
        'មិនបាច់គ្រប់គ្រង Thread ដោយខ្លួនឯង',
        'មានលក្ខណៈស្រាលជាង (Lightweight)',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 3,
      explanation: 'Coroutines ងាយស្រួលប្រើ មិនបាច់គ្រប់គ្រង Thread ហើយមានលក្ខណៈស្រាលជាង។'
    }
  ],
  lab: {
    task: `
បង្កើត App មួយដែលមាន Button សម្រាប់ហៅ Suspend Function ដែលចំណាយពេលយូរ ហើយបង្ហាញ Loading State និងលទ្ធផលចុងក្រោយនៅលើ UI ។

**តម្រូវការ:**

1.  **UI:**
    -   បង្កើត \`Text\` សម្រាប់ Loading Message ។
    -   បង្កើត \`Text\` សម្រាប់បង្ហាញលទ្ធផល។
    -   បង្កើត \`Button\` សម្រាប់ចាប់ផ្តើម Coroutine ។

2.  **ViewModel:**
    -   ប្រើ \`viewModelScope\` ដើម្បីហៅ Coroutine ។
    -   ប្រើ \`mutableStateOf\` ដើម្បីគ្រប់គ្រង State (Loading, Result) ។

3.  **Suspend Function:**
    -   បង្កើត Suspend Function មួយឈ្មោះ \`fetchData()\` ដែល Simulate ការងារយូរដោយប្រើ \`delay(2000)\` ។

4.  **Logic:**
    -   នៅពេលចុច Button, Set State ជា "Loading..." ។
    -   ហៅ \`fetchData()\` នៅក្នុង \`viewModelScope.launch(Dispatchers.IO)\` ។
    -   នៅពេល \`fetchData()\` ចប់, Update State ទៅជាលទ្ធផល។
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
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.sp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.viewmodel.compose.viewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class CoroutineViewModel : ViewModel() {
    var result by mutableStateOf("Ready")
        private set
        
    fun fetchData() {
        result = "Loading..."
        viewModelScope.launch(Dispatchers.IO) {
            val data = simulateNetworkRequest()
            // ប្តូរទៅ Main Thread វិញដើម្បី Update UI
            withContext(Dispatchers.Main) {
                result = data
            }
        }
    }
    
    private suspend fun simulateNetworkRequest(): String {
        delay(2000) // ធ្វើពុតថាចំណាយពេល 2 វិនាទី
        return "Data Fetched Successfully!"
    }
}

@Composable
fun CoroutineScreen(viewModel: CoroutineViewModel = viewModel()) {
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(text = viewModel.result, fontSize = 24.sp)
        
        Button(onClick = { viewModel.fetchData() }) {
            Text("Fetch Data")
        }
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewCoroutineScreen() {
    CoroutineScreen()
}
\`\`\`
`
  }
};

export default KotlinLesson6_1Content;