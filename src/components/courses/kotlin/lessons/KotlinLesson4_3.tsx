import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson4_3Content: LessonContent = {
  title: 'Deep Linking',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Deep Linking',
    'ស្គាល់ពីប្រភេទ Deep Linking (Explicit vs. Implicit)',
    'រៀនពីរបៀបបង្កើត Deep Link នៅក្នុង Navigation Component (Traditional Views)',
    'រៀនពីរបៀបបង្កើត Deep Link នៅក្នុង Jetpack Compose Navigation',
    'អនុវត្តការធ្វើតេស្ត Deep Link'
  ],
  content: `
# Deep Linking 🔗

---

**Deep Linking** គឺជាវិធីមួយដើម្បីអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ចូលទៅកាន់អេក្រង់ជាក់លាក់មួយនៅក្នុង App របស់អ្នកដោយផ្ទាល់ពីខាងក្រៅ App ។ ឧទាហរណ៍៖ ចុចលើ Link ពី Website, Email ឬ Push Notification ដើម្បីបើកអេក្រង់ Profile នៅក្នុង App ។

## 1. ប្រភេទ Deep Linking

-   **Explicit Deep Link:** ប្រើ Intent ដើម្បីបញ្ជាក់ Destination របស់ App ។ ជាធម្មតាប្រើសម្រាប់ Internal Linking ។
-   **Implicit Deep Link:** ប្រើ Intent Filters ដើម្បីអនុញ្ញាតឱ្យ App អាចបើកបានពី URL ខាងក្រៅ។

## 2. Deep Linking នៅក្នុង Navigation Component (Traditional Views)

ដើម្បីបង្កើត Implicit Deep Link, អ្នកត្រូវបន្ថែម \`<deepLink>\` Tag ទៅក្នុង Destination នៅក្នុង Navigation Graph ។

\`\`\`xml
<fragment
    android:id="@+id/detailFragment"
    android:name="com.example.myapp.DetailFragment"
    android:label="Detail"
    tools:layout="@layout/fragment_detail">
    <argument
        android:name="message"
        app:argType="string" />
    <deepLink
        app:uri="myapp://detail/{message}" />
</fragment>
\`\`\`
-   **\`app:uri\`**: កំណត់ URI របស់ Deep Link ។ \`"{message}"\` ជា Placeholder សម្រាប់ Argument ។

បន្ទាប់មក, អ្នកត្រូវបន្ថែម \`<nav-graph>\` Tag ទៅក្នុង \`AndroidManifest.xml\` ។

\`\`\`xml
<activity android:name=".MainActivity" android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="myapp" android:host="detail" />
    </intent-filter>
</activity>
\`\`\`

## 3. Deep Linking នៅក្នុង Jetpack Compose Navigation

នៅក្នុង Compose, យើងប្រើ \`deepLinks\` Parameter នៅក្នុង \`composable\` Function ។

\`\`\`kotlin
import androidx.navigation.NavDeepLink
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController

@Composable
fun AppNavigation() {
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = "home") {
        composable(
            "detail/{message}",
            deepLinks = listOf(navDeepLink { uriPattern = "myapp://detail/{message}" })
        ) { backStackEntry ->
            val message = backStackEntry.arguments?.getString("message")
            DetailScreen(message)
        }
    }
}
\`\`\`
-   **\`navDeepLink\`**: គឺជា Builder Function សម្រាប់បង្កើត \`NavDeepLink\` ។
-   **\`uriPattern\`**: កំណត់ URI របស់ Deep Link ។

បន្ទាប់មក, អ្នកត្រូវបន្ថែម Intent Filter ស្រដៀងគ្នានៅក្នុង \`AndroidManifest.xml\` ។

## 4. ការធ្វើតេស្ត Deep Link

អ្នកអាចធ្វើតេស្ត Deep Link របស់អ្នកដោយប្រើ \`adb\` Command នៅក្នុង Terminal ។

\`\`\`bash
adb shell am start -W -a android.intent.action.VIEW -d "myapp://detail/HelloFromDeepLink" com.example.myapp
\`\`\`
-   **\`myapp://detail/HelloFromDeepLink\`**: គឺជា URI ដែលអ្នកបានកំណត់។
-   **\`com.example.myapp\`**: គឺជា Package Name របស់ App របស់អ្នក។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្កើត Deep Link សម្រាប់ Home Screen</h3>
<p>យើងអាចបង្កើត Deep Link សម្រាប់ Home Screen ដើម្បីឱ្យអ្នកប្រើប្រាស់បើក App របស់អ្នកពីខាងក្រៅ។</p>
<pre><code class="language-kotlin">
// នៅក្នុង Compose Navigation
composable("home", deepLinks = listOf(navDeepLink { uriPattern = "myapp://home" })) {
    HomeScreen()
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Deep Linking គឺជាអ្វី?',
      options: [
        'ជា Link ទៅកាន់ Website',
        'ជាវិធីដើម្បីបើកអេក្រង់ជាក់លាក់ក្នុង App ពីខាងក្រៅ App',
        'ជា Link ទៅកាន់ Play Store',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Deep Linking អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ចូលទៅកាន់អេក្រង់ជាក់លាក់មួយនៅក្នុង App ដោយផ្ទាល់ពីខាងក្រៅ។'
    },
    {
      question: 'តើ `Implicit Deep Link` ប្រើអ្វីខ្លះ?',
      options: [
        'Intent Filters',
        'Explicit Intents',
        'Database',
        'File'
      ],
      correct: 0,
      explanation: 'Implicit Deep Link ប្រើ Intent Filters ដើម្បីចាប់ URI ។'
    },
    {
      question: 'តើ `Explicit Deep Link` ប្រើអ្វីខ្លះ?',
      options: [
        'Intent Filters',
        'Explicit Intents',
        'Database',
        'File'
      ],
      correct: 1,
      explanation: 'Explicit Deep Link ប្រើ Explicit Intents ដើម្បីបញ្ជាក់ Destination ។'
    },
    {
      question: 'តើ Tag ណាដែលប្រើសម្រាប់កំណត់ Deep Link នៅក្នុង Navigation Graph (XML)?',
      options: [
        '`<fragment>`',
        '`<action>`',
        '`<deepLink>`',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`<deepLink>` Tag ត្រូវបានប្រើសម្រាប់កំណត់ Deep Link នៅក្នុង XML ។'
    },
    {
      question: 'តើ Parameter ណាដែលប្រើសម្រាប់កំណត់ Deep Link នៅក្នុង Compose?',
      options: [
        '`arguments`',
        '`deepLinks`',
        '`startDestination`',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`deepLinks` Parameter ត្រូវបានប្រើនៅក្នុង `composable` Function ។'
    },
    {
      question: 'តើ `uriPattern` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Path របស់ File',
        'កំណត់ Pattern របស់ URI ដែល App អាចចាប់បាន',
        'កំណត់ Path របស់ Folder',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`uriPattern` កំណត់ Pattern របស់ URI ដែល App អាចចាប់បាន។'
    },
    {
      question: 'តើ `adb` Command ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើតេស្ត Network',
        'ធ្វើតេស្ត UI',
        'ធ្វើតេស្ត Deep Link',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`adb` Command អាចប្រើដើម្បីធ្វើតេស្ត Deep Link ។'
    },
    {
      question: 'តើ `<data>` Tag នៅក្នុង `AndroidManifest.xml` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីកំណត់ Data Type',
        'ដើម្បីកំណត់ URL Scheme និង Host',
        'ដើម្បីកំណត់ Data',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`<data>` Tag កំណត់ URL Scheme និង Host របស់ Deep Link ។'
    },
    {
      question: 'តើ Deep Link អាចបញ្ជូនទិន្នន័យបានទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលប្រើ Intent',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Deep Link អាចបញ្ជូនទិន្នន័យតាមរយៈ Path ឬ Query Parameters ។'
    },
    {
      question: 'តើ `android.intent.category.BROWSABLE` ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើឱ្យ App បើកក្នុង Browser',
        'ធ្វើឱ្យ App អាចបើកបានពី Browser',
        'ធ្វើឱ្យ App អាច Search បាន',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Category `BROWSABLE` អនុញ្ញាតឱ្យ App អាចបើកបានពី Browser ។'
    }
  ],
  lab: {
    task: `
បង្កើត App ដែលមាន Deep Link ដើម្បីបើកអេក្រង់ Detail ហើយបង្ហាញ Message ដែលបានបញ្ជូនមកតាមរយៈ Link ។

**តម្រូវការ:**

1.  **Project:**
    -   ប្រើ Project ពី Lab មុន (Jetpack Compose Navigation) ។

2.  **Navigation Logic:**
    -   នៅក្នុង \`NavHost\`, បន្ថែម \`deepLinks\` Parameter ទៅក្នុង \`composable\` របស់ "result" Destination ។
    -   កំណត់ \`uriPattern\` ដូចជា \`"myapp://result/{count}"\` ។
    -   ត្រូវប្រាកដថា \`composable\` របស់ "result" ទទួល Argument ។

3.  **AndroidManifest.xml:**
    -   បន្ថែម \`<intent-filter>\` ទៅក្នុង \`<activity>\` នៅក្នុង \`AndroidManifest.xml\` ។
    -   កំណត់ \`android:scheme\` និង \`android:host\` ឱ្យត្រូវនឹង URI Pattern របស់អ្នក។

4.  **Test:**
    -   រត់ App លើ Emulator ។
    -   ប្រើ \`adb\` Command ដើម្បីធ្វើតេស្ត Deep Link ។

**ការណែនាំ:** ត្រូវប្រាកដថា URI Pattern និង Argument Name ត្រូវគ្នានឹងគ្នា។
    `,
    solution: `
\`\`\`kotlin
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.sp
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import androidx.navigation.navDeepLink

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()
            NavHost(navController = navController, startDestination = "home") {
                composable("home") {
                    // Home Screen
                    Column(
                        modifier = Modifier.fillMaxSize(),
                        verticalArrangement = Arrangement.Center,
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        Text("Home Screen", fontSize = 24.sp)
                    }
                }
                
                composable(
                    "result/{count}",
                    arguments = listOf(navArgument("count") { type = NavType.IntType }),
                    deepLinks = listOf(navDeepLink { uriPattern = "myapp://result/{count}" })
                ) { backStackEntry ->
                    val count = backStackEntry.arguments?.getInt("count") ?: 0
                    ResultScreen(count)
                }
            }
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
        Text(text = "The final count from Deep Link is:", fontSize = 24.sp)
        Text(text = "$count", fontSize = 48.sp)
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewResultScreen() {
    ResultScreen(100)
}
\`\`\`

\`\`\`xml
<activity android:name=".MainActivity" android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>

    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="myapp" android:host="result" />
    </intent-filter>
</activity>
\`\`\`
`
  }
};

export default KotlinLesson4_3Content;