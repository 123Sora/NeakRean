import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson2_1Content: LessonContent = {
  title: 'Introduction to Jetpack Compose',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Jetpack Compose',
    'ស្គាល់ពីគុណសម្បត្តិសំខាន់ៗរបស់ Jetpack Compose',
    'ប្រៀបធៀប Jetpack Compose ជាមួយ View System បែបប្រពៃណី (XML)',
    'យល់ដឹងពីគោលការណ៍របស់ Declarative UI',
    'រៀនពីរបៀបរៀបចំ Project សម្រាប់ Jetpack Compose'
  ],
  content: `
# Introduction to Jetpack Compose 🚀

---

**Jetpack Compose** គឺជាឧបករណ៍ (Toolkit) ដ៏ទំនើបរបស់ Android សម្រាប់ការបង្កើត UI ។ វាផ្លាស់ប្តូរពីវិធីសាស្ត្រប្រពៃណី (Traditional XML-based View System) ទៅជាវិធីសាស្ត្រ **Declarative UI** ដែលមានមូលដ្ឋានលើ Kotlin ។ Jetpack Compose ធ្វើឱ្យការសរសេរ Code សម្រាប់ UI កាន់តែសាមញ្ញ លឿន និងមានអនុភាព។

## 1. អ្វីទៅជា Declarative UI?

-   **Declarative UI** គឺជា Paradigms មួយដែលអ្នកគ្រាន់តែ **ពិពណ៌នា** (Describe) ពីអ្វីដែល UI របស់អ្នកគួរតែមើលទៅដូចជាក្នុងស្ថានភាពជាក់លាក់មួយ។
-   នៅពេលស្ថានភាពផ្លាស់ប្តូរ, Framework នឹងធ្វើបច្ចុប្បន្នភាព UI ដោយស្វ័យប្រវត្តិ។
-   ផ្ទុយពីវិធីសាស្ត្រ **Imperative UI** បែបប្រពៃណីដែលអ្នកត្រូវ **បញ្ជា** (Command) ពីរបៀបផ្លាស់ប្តូរ UI ដោយដៃ (ឧ. \`myButton.setText("New Text")\`) ។

## 2. ហេតុអ្វីត្រូវប្រើ Jetpack Compose?

-   **Less Code:** ត្រូវការ Code តិចជាងដើម្បីបង្កើត UI ដូចគ្នា។
-   **Intuitiveness:** ការសរសេរ UI ដោយប្រើ Kotlin គឺមានលក្ខណៈវិចារណញាណជាង XML ។
-   **Accelerates Development:** អាចមើល Preview របស់ UI ដោយមិនចាំបាច់រត់ App លើ Emulator ។
-   **Interoperable:** អាចប្រើ Jetpack Compose នៅក្នុង Project ដែលមាន View System បែបប្រពៃណី និងផ្ទុយមកវិញ។
-   **Modern:** វាត្រូវបានរចនាឡើងសម្រាប់ Kotlin និងគាំទ្រ Features ទំនើបៗដូចជា Coroutines ។

## 3. ប្រៀបធៀបជាមួយ XML View System

| លក្ខណៈពិសេស       | Jetpack Compose                            | Traditional View System (XML)              |
| -------------------- | ------------------------------------------ | ------------------------------------------ |
| **ភាសា** | Kotlin                                     | XML + Java/Kotlin                          |
| **Paradigm** | Declarative                                | Imperative                                 |
| **ការបង្កើត UI** | សរសេរ UI ដោយផ្ទាល់នៅក្នុង Kotlin Code       | បង្កើត UI នៅក្នុង XML File និង Connect ជាមួយ Code |
| **រដ្ឋ (State)** | UI ត្រូវបានធ្វើបច្ចុប្បន្នភាពដោយ State     | UI ត្រូវបានធ្វើបច្ចុប្បន្នភាពដោយដៃ (Manual)     |
| **Preview** | Live Preview នៅក្នុង Android Studio          | Static Preview (មិនអាចធ្វើអន្តរកម្មបាន)           |

## 4. ការរៀបចំ Project

ដើម្បីចាប់ផ្តើម Project ថ្មីជាមួយ Jetpack Compose, អ្នកត្រូវ៖

1.  **ប្រើ Android Studio Bumblebee (ឬថ្មីជាងនេះ):** កំណែចាស់មិនមានមុខងារពេញលេញសម្រាប់ Compose ទេ។
2.  **បង្កើត Project ថ្មី:** ជ្រើសរើស "Empty Compose Activity" Template ។
3.  **Gradle Configuration:** Project ថ្មីនឹងមាន Configuration ដែលចាំបាច់រួចជាស្រេចនៅក្នុង File \`build.gradle\` ។

\`\`\`groovy
// build.gradle.kts (Module: app)
android {
    buildFeatures {
        compose = true
    }
    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.1" // កំណែ Compiler
    }
}

dependencies {
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.material3:material3")
    // ... dependencies ផ្សេងៗទៀត
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Hello World នៅក្នុង Jetpack Compose</h3>
<p>នេះជា Code សម្រាប់ UI សាមញ្ញ "Hello World!" នៅក្នុង Compose ។</p>
<pre><code class="language-kotlin">
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview

@Composable
fun Greeting(name: String) {
    Text(text = "Hello $name!")
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    Greeting("Android")
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Jetpack Compose គឺជាអ្វី?',
      options: [
        'ជាភាសាសរសេរកម្មវិធី',
        'ជា Database សម្រាប់ Android',
        'ជាឧបករណ៍សម្រាប់បង្កើត UI របស់ Android',
        'ជា Library សម្រាប់ Networking'
      ],
      correct: 2,
      explanation: 'Jetpack Compose គឺជាឧបករណ៍ទំនើបសម្រាប់បង្កើត UI របស់ Android ។'
    },
    {
      question: 'តើ Paradigms របស់ Jetpack Compose ត្រូវបានគេហៅថាអ្វី?',
      options: [
        'Imperative UI',
        'Declarative UI',
        'Reactive UI',
        'Procedural UI'
      ],
      correct: 1,
      explanation: 'Jetpack Compose ប្រើ Declarative UI Paradigm ។'
    },
    {
      question: 'តើ Jetpack Compose ប្រើភាសាអ្វីសម្រាប់ការសរសេរ UI?',
      options: [
        'Java',
        'XML',
        'Kotlin',
        'C++'
      ],
      correct: 2,
      explanation: 'Jetpack Compose ប្រើ Kotlin សម្រាប់ការសរសេរ UI ។'
    },
    {
      question: 'តើការប្រើ Jetpack Compose ជួយកាត់បន្ថយអ្វីខ្លះ?',
      options: [
        'ចំនួន Bugs',
        'ទំហំរបស់ App',
        'ចំនួន Code ដែលត្រូវសរសេរ',
        'ចំនួន Libraries'
      ],
      correct: 2,
      explanation: 'Jetpack Compose ជួយកាត់បន្ថយ Code ដែលត្រូវសរសេរសម្រាប់ UI ។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Jetpack Compose នៅក្នុង Project ដែលមាន XML View System បានទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលប្រើ Plugin',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Jetpack Compose អាចធ្វើការជាមួយ XML View System បានយ៉ាងរលូន (Interoperable) ។'
    },
    {
      question: 'តើ `Preview` Annotation ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីបង្ហាញ UI នៅក្នុង Emulator',
        'ដើម្បីបង្ហាញ UI នៅក្នុង Editor ដោយមិនចាំបាច់រត់ App',
        'ដើម្បីបោះពុម្ព UI',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`@Preview` Annotation អនុញ្ញាតឱ្យអ្នកមើល Preview របស់ Composable នៅក្នុង Android Studio ។'
    },
    {
      question: 'តើ `Text` Composable ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញរូបភាព',
        'បង្ហាញ Text',
        'បង្ហាញ Button',
        'បង្ហាញ List'
      ],
      correct: 1,
      explanation: '`Text` Composable គឺជា Component សម្រាប់បង្ហាញ Text នៅលើ UI ។'
    },
    {
      question: 'តើ `Composable` Annotation មានតួនាទីអ្វីខ្លះ?',
      options: [
        'បង្ហាញថា Function អាចត្រូវបានហៅពី Function ផ្សេងទៀត',
        'បង្ហាញថា Function នេះអាចបង្កើត UI បាន',
        'បង្ហាញថា Function នេះអាចប្រើ Coroutines',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`@Composable` Annotation ត្រូវតែដាក់លើ Functions ដែលបង្កើត UI ។'
    },
    {
      question: 'តើ Project Template ណាដែលត្រូវជ្រើសរើសដើម្បីចាប់ផ្តើមជាមួយ Compose?',
      options: [
        'Basic Activity',
        'Empty Views Activity',
        'Empty Compose Activity',
        'Full Screen Activity'
      ],
      correct: 2,
      explanation: 'Template "Empty Compose Activity" ផ្តល់នូវ Setup ពេញលេញសម្រាប់ Compose ។'
    },
    {
      question: 'តើការប្រើ Declarative UI Paradigm មានន័យដូចម្តេច?',
      options: [
        'ការបញ្ជាឱ្យ UI ផ្លាស់ប្តូរដោយដៃ',
        'ការពិពណ៌នា UI ក្នុងស្ថានភាពនីមួយៗ',
        'ការប្រើ Loops ដើម្បីបង្កើត UI',
        'ការប្រើ Buttons ដើម្បីបង្កើត UI'
      ],
      correct: 1,
      explanation: 'Declarative UI ផ្តោតលើការពិពណ៌នាពីរបៀបដែល UI គួរតែមើលទៅ។'
    }
  ],
  lab: {
    task: `
បង្កើត Project ថ្មីជាមួយ Jetpack Compose ហើយផ្លាស់ប្តូរ Text "Hello Android" ទៅជា "Hello [Your Name]!" ។

**តម្រូវការ:**

1.  **Project Creation:**
    -   បើក Android Studio ។
    -   បង្កើត Project ថ្មីមួយ។
    -   ជ្រើសរើស **Empty Compose Activity** Template ។

2.  **Code Modification:**
    -   នៅក្នុង File \`MainActivity.kt\`, ស្វែងរក Function \`Greeting\` ។
    -   ប្តូរ Parameter \`name\` នៅក្នុង Function \`Greeting\` ទៅជាឈ្មោះរបស់អ្នក។

3.  **Preview:**
    -   ប្រើ \`@Preview\` ដើម្បីមើលការផ្លាស់ប្តូរនៅក្នុង Editor ។

**ការណែនាំ:** អ្នកមិនចាំបាច់រត់ App លើ Emulator ទេ គ្រាន់តែប្រើ Preview គឺគ្រប់គ្រាន់ហើយ។
    `,
    solution: `
\`\`\`kotlin
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.myfirstcomposeapp.ui.theme.MyFirstComposeAppTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyFirstComposeAppTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Greeting("Sokha") // ផ្លាស់ប្តូរ "Android" ទៅជាឈ្មោះរបស់អ្នក
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    MyFirstComposeAppTheme {
        Greeting("Sokha")
    }
}
\`\`\`
`
  }
};

export default KotlinLesson2_1Content;