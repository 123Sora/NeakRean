import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson4_2Content: LessonContent = {
  title: 'Navigation in Jetpack Compose',
  objectives: [
    'យល់ដឹងពីរបៀបដែល Navigation ដំណើរការនៅក្នុង Jetpack Compose',
    'ស្គាល់ពី Components សំខាន់ៗរបស់ Compose Navigation',
    'រៀនពីរបៀប Navigate រវាង Composables',
    'យល់ដឹងពីរបៀបបញ្ជូនទិន្នន័យរវាង Composables',
    'អនុវត្តការប្រើប្រាស់ Back Stack'
  ],
  content: `
# Navigation in Jetpack Compose 🛣️

---

**Jetpack Compose Navigation** គឺជា Library មួយដែលត្រូវបានរចនាឡើងជាពិសេសសម្រាប់ការគ្រប់គ្រងការ Navigation នៅក្នុង App ដែលប្រើ Jetpack Compose ។ វាផ្តល់នូវវិធីសាស្ត្រដែលសាមញ្ញនិង Declarative សម្រាប់ផ្លាស់ប្តូរអេក្រង់។

## 1. Components សំខាន់ៗ

-   **\`NavHost\`**: ជា Composable ដែលបង្ហាញ UI របស់ Destination បច្ចុប្បន្ន។
-   **\`NavController\`**: ជា Object ដែលគ្រប់គ្រងការ Navigation ។
-   **\`NavGraph\`**: គឺជា Collection របស់ Destinations ដែលអាច Navigate បាន។ នៅក្នុង Compose, NavGraph ត្រូវបានកំណត់ដោយ Code ។



## 2. ការរៀបចំ Project

ដើម្បីប្រើ Navigation ក្នុង Compose, អ្នកត្រូវបន្ថែម Dependency ខាងក្រោមទៅក្នុង File \`build.gradle\` របស់ Module ។

\`\`\`groovy
dependencies {
    def nav_version = "2.7.0"
    
    // For Jetpack Compose
    implementation("androidx.navigation:navigation-compose:$nav_version")
}
\`\`\`

## 3. ការ Navigate រវាង Composables

យើងប្រើ \`NavHost\` និង \`NavController\` ដើម្បីគ្រប់គ្រងការ Navigate ។

\`\`\`kotlin
// នៅក្នុង MainActivity.kt
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController

@Composable
fun AppNavigation() {
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = "home") {
        composable("home") { HomeScreen(navController) }
        composable("detail/{message}") { backStackEntry ->
            val message = backStackEntry.arguments?.getString("message")
            DetailScreen(message, navController)
        }
    }
}

// នៅក្នុង HomeScreen.kt
@Composable
fun HomeScreen(navController: NavHostController) {
    Column {
        Text("Home Screen")
        Button(onClick = { navController.navigate("detail/Hello from Compose!") }) {
            Text("Go to Detail")
        }
    }
}
\`\`\`
-   **\`rememberNavController()\`**: បង្កើតនិងចងចាំ \`NavController\` ។
-   **\`NavHost\`**: កំណត់ Graph របស់ Navigation ។
-   **\`composable()\`**: កំណត់ Destination ដែលជា Composable ។

## 4. ការបញ្ជូនទិន្នន័យ (Arguments)

យើងអាចបញ្ជូនទិន្នន័យដោយប្រើ Arguments នៅក្នុង Path ។

-   **Define Argument:** \`composable("detail/{message}")\`
-   **Navigate with Argument:** \`navController.navigate("detail/Hello from Compose!")\`
-   **Receive Argument:** ប្រើ \`backStackEntry.arguments?.getString("message")\` ។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបញ្ជូន Object</h3>
<p>យើងអាចបញ្ជូន Object ដោយប្រើ Serialization ដូចជា Gson ឬ Kotlinx Serialization ។</p>
<pre><code class="language-kotlin">
// ត្រូវបន្ថែម Dependency សម្រាប់ Serialization
@Serializable
data class User(val name: String, val age: Int)

navController.navigate("profile/'$'{Gson().toJson(user)}")
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `NavHost` នៅក្នុង Compose គឺជាអ្វី?',
      options: [
        'ជា Class',
        'ជា Composable ដែលបង្ហាញ UI របស់ Destination បច្ចុប្បន្ន',
        'ជា XML File',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`NavHost` គឺជា Composable ដែលបង្ហាញ UI របស់ Destination ។'
    },
    {
      question: 'តើ `rememberNavController()` ប្រើសម្រាប់អ្វី?',
      options: [
        'ចងចាំ UI State',
        'បង្កើតនិងចងចាំ `NavController` Instance',
        'ចងចាំ Back Stack',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`rememberNavController()` បង្កើតនិងចងចាំ `NavController` Instance ។'
    },
    {
      question: 'តើ `composable("home")` កំណត់អ្វីខ្លះ?',
      options: [
        'Destination ឈ្មោះ "home"',
        'Action ឈ្មោះ "home"',
        'Argument ឈ្មោះ "home"',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`composable()` កំណត់ Destination ដែលមាន Route ឈ្មោះ "home" ។'
    },
    {
      question: 'តើអ្នកអាចបញ្ជូនទិន្នន័យរវាង Composables តាមរបៀបណា?',
      options: [
        'ដោយប្រើ Global Variable',
        'ដោយប្រើ Arguments នៅក្នុង Route',
        'ដោយប្រើ Singleton',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'អ្នកអាចបញ្ជូនទិន្នន័យដោយប្រើ Arguments នៅក្នុង Route ។'
    },
    {
      question: 'តើ `backStackEntry` ផ្តល់អ្វីខ្លះ?',
      options: [
        'Arguments',
        'NavController',
        'UI',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`backStackEntry` ផ្តល់នូវ Arguments ដែលបានបញ្ជូនមក។'
    },
    {
      question: 'តើ `NavHostController` ជាអ្វី?',
      options: [
        'ជា Class',
        'ជា Type alias សម្រាប់ `NavController`',
        'ជា Interface',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`NavHostController` គឺជា Type alias សម្រាប់ `NavController` ។'
    },
    {
      question: 'តើ `startDestination` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Destination ចុងក្រោយ',
        'កំណត់ Destination ដំបូងដែលត្រូវបង្ហាញ',
        'កំណត់ Action',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`startDestination` កំណត់ Destination ដំបូងដែលត្រូវបង្ហាញ។'
    },
    {
      question: 'តើ Back Stack នៅក្នុង Compose គ្រប់គ្រងដោយ Component ណា?',
      options: [
        'NavController',
        'NavHost',
        'composable',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`NavController` គ្រប់គ្រង Back Stack របស់ Composables ។'
    },
    {
      question: 'តើការប្រើ Path Argument ដូចជា `detail/{message}` មានគុណសម្បត្តិអ្វីខ្លះ?',
      options: [
        'វាធ្វើឱ្យ Code ងាយស្រួលអាន',
        'វាធ្វើឱ្យ Argument មានសុវត្ថិភាព (Type-safe)',
        'វាធ្វើឱ្យ Navigate កាន់តែលឿន',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'ការប្រើ Path Argument ធ្វើឱ្យការបញ្ជូនទិន្នន័យមានសុវត្ថិភាព។'
    },
    {
      question: 'តើ `popBackStack()` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Destination ថ្មីទៅ Stack',
        'ត្រឡប់ទៅ Destination មុន',
        'Clear Stack ទាំងអស់',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`popBackStack()` យក Destination ចុងក្រោយចេញពី Stack ហើយត្រឡប់ទៅ Destination មុន។'
    }
  ],
  lab: {
    task: `
បង្កើត App Counter ដែលមានអេក្រង់ពីរគឺ "CounterScreen" និង "ResultScreen" ។ ប្រើ Compose Navigation ដើម្បី Navigate ពីអេក្រង់មួយទៅអេក្រង់មួយទៀត ហើយបញ្ជូនចំនួន Click ទៅកាន់ ResultScreen ។

**តម្រូវការ:**

1.  **Dependencies:**
    -   បន្ថែម \`navigation-compose\` Dependency ។

2.  **Composable Functions:**
    -   បង្កើត Composable មួយឈ្មោះ \`CounterScreen\` ដែលមាន Button សម្រាប់ Increment Counter ។
    -   បង្កើត Composable មួយឈ្មោះ \`ResultScreen\` ដែលទទួល Argument ជា Int ។

3.  **Navigation Logic:**
    -   នៅក្នុង \`NavHost\`, កំណត់ \`startDestination\` ជា "counter" ។
    -   កំណត់ \`composable\` សម្រាប់ "counter" និង "result/{count}" ។
    -   នៅក្នុង \`CounterScreen\`, ប្រើ \`NavController\` ដើម្បី Navigate ទៅ "result" ដោយបញ្ជូន \`count\` ។
    -   នៅក្នុង \`ResultScreen\`, ទទួល Argument ហើយបង្ហាញវា។
    `,
    solution: `
\`\`\`kotlin
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.size
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
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController

@Composable
fun AppNavHost() {
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = "counter") {
        composable("counter") {
            CounterScreen(navController)
        }
        composable("result/{count}") { backStackEntry ->
            val count = backStackEntry.arguments?.getString("count")?.toIntOrNull() ?: 0
            ResultScreen(count)
        }
    }
}

@Composable
fun CounterScreen(navController: NavHostController) {
    var count by remember { mutableStateOf(0) }
    
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(text = "Count: $count", fontSize = 30.sp)
        Spacer(modifier = Modifier.size(16.dp))
        Button(onClick = { count++ }) {
            Text("Increment")
        }
        Spacer(modifier = Modifier.size(16.dp))
        Button(onClick = { navController.navigate("result/$count") }) {
            Text("Show Result")
        }
    }
}

@Composable
fun ResultScreen(count: Int) {
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(text = "The final count is:", fontSize = 24.sp)
        Text(text = "$count", fontSize = 48.sp)
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewApp() {
    AppNavHost()
}
\`\`\`
`
  }
};

export default KotlinLesson4_2Content;