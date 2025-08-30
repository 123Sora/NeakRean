import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson5_2Content: LessonContent = {
  title: 'JSON Parsing with Moshi',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា JSON Parsing',
    'ស្គាល់ពីគុណសម្បត្តិរបស់ Moshi',
    'រៀនពីរបៀបរៀបចំ Moshi សម្រាប់ Project',
    'យល់ដឹងពីរបៀបបង្កើត Data Class ជាមួយ Moshi',
    'អនុវត្តការ Parse JSON String'
  ],
  content: `
# JSON Parsing with Moshi 📋

---

**JSON (JavaScript Object Notation)** គឺជា Format សម្រាប់បញ្ជូនទិន្នន័យពី Server ទៅ Client ។ **JSON Parsing** គឺជាដំណើរការនៃការបំប្លែង JSON String ទៅជា Native Object (ដូចជា Kotlin Data Class) ។ **Moshi** គឺជា Library របស់ Square សម្រាប់ Parse JSON ទៅជា Kotlin/Java Object ។

## 1. ហេតុអ្វីត្រូវប្រើ Moshi?

-   **Fast:** វាមានល្បឿនលឿនក្នុងការ Parse JSON ។
-   **Kotlin-friendly:** វាដំណើរការបានល្អជាមួយ Kotlin ដោយមាន \`Kotlin-Codegen\` ។
-   **Type-safe:** ដូច Retrofit, វាធ្វើឱ្យការ Parse មានសុវត្ថិភាព។

## 2. ការរៀបចំ Project

អ្នកត្រូវបន្ថែម Dependencies របស់ Moshi ទៅក្នុង File \`build.gradle\` ។

\`\`\`groovy
dependencies {
    // Moshi
    implementation("com.squareup.moshi:moshi:1.14.0")
    // Moshi Kotlin CodeGen (ត្រូវបន្ថែម KAPT)
    ksp("com.squareup.moshi:moshi-kotlin-codegen:1.14.0")
    
    // សម្រាប់ Retrofit (មេរៀនមុន)
    implementation("com.squareup.retrofit2:converter-moshi:2.9.0")
}
\`\`\`
**ចំណាំ:** អ្នកត្រូវបន្ថែម Plugin \`id("com.google.devtools.ksp")\` ទៅក្នុង \`build.gradle\` ផងដែរ។

## 3. Moshi Basics

### Step 1: កំណត់ Data Class

អ្នកត្រូវបន្ថែម Annotation \`@JsonClass(generateAdapter = true)\` នៅលើ Data Class ។

\`\`\`kotlin
import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class User(
    val name: String,
    val age: Int,
    @Json(name = "is_active")
    val isActive: Boolean
)
\`\`\`
-   **\`@JsonClass\`**: ប្រាប់ Moshi ឱ្យបង្កើត Adapter សម្រាប់ Class នេះ។
-   **\`@Json(name = "...")\`**: ប្រើដើម្បី Map ឈ្មោះ Property នៅក្នុង Kotlin ជាមួយ Key នៅក្នុង JSON ដែលមានឈ្មោះខុសគ្នា។

### Step 2: បង្កើត Moshi Instance

\`\`\`kotlin
import com.squareup.moshi.Moshi
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory

val moshi = Moshi.Builder()
    .addLast(KotlinJsonAdapterFactory())
    .build()
\`\`\`
-   **\`KotlinJsonAdapterFactory\`**: ផ្តល់នូវ Reflection-based Adapter សម្រាប់ Kotlin ។

### Step 3: Parse JSON String

\`\`\`kotlin
val json = """
{
    "name": "Sokha",
    "age": 25,
    "is_active": true
}
"""

val adapter = moshi.adapter(User::class.java)
val user = adapter.fromJson(json)
\`\`\`
-   \`adapter()\` Function នឹងបង្កើត \`JsonAdapter\` ដែលអាច Parse JSON ទៅជា Object បាន។
-   \`fromJson()\` Function ធ្វើការ Parse JSON String ទៅជា Object ។

## 4. Moshi ជាមួយ Retrofit

យើងបានប្រើ Moshi Converter នៅក្នុងមេរៀនមុន។ \`Retrofit\` ប្រើ \`MoshiConverterFactory\` ដើម្បីធ្វើការ Parse ដោយស្វ័យប្រវត្តិ។

\`\`\`kotlin
Retrofit.Builder()
    .baseUrl(...)
    .addConverterFactory(MoshiConverterFactory.create())
    .build()
\`\`\`
នៅពេល \`Retrofit\` ទទួល JSON Response, \`Moshi\` នឹងបំប្លែងវាទៅជា \`Data Class\` ដែលអ្នកបានកំណត់ដោយស្វ័យប្រវត្តិ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការ Parse List នៃ Objects</h3>
<p>អ្នកអាច Parse JSON Array ទៅជា List របស់ Objects ។</p>
<pre><code class="language-kotlin">
import com.squareup.moshi.Types

val listOfUsers = """
[
    {"name": "Dara", "age": 22, "is_active": false},
    {"name": "Srey Leak", "age": 24, "is_active": true}
]
"""
val type = Types.newParameterizedType(List::class.java, User::class.java)
val adapter = moshi.adapter<List<User>>(type)
val users = adapter.fromJson(listOfUsers)
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ JSON Parsing គឺជាអ្វី?',
      options: [
        'ការបំប្លែង JSON String ទៅជា Native Object',
        'ការបំប្លែង Kotlin Object ទៅជា JSON String',
        'ការរៀបចំ UI',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'JSON Parsing គឺជាដំណើរការនៃការបំប្លែង JSON String ទៅជា Native Object ។'
    },
    {
      question: 'តើ `Moshi` ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើ HTTP Requests',
        'Parse JSON',
        'គ្រប់គ្រង State',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Moshi គឺជា Library សម្រាប់ Parse JSON ។'
    },
    {
      question: 'តើ Annotation ណាដែល Moshi ទាមទារនៅលើ Data Class?',
      options: [
        '`@Serializable`',
        '`@JsonClass(generateAdapter = true)`',
        '`@Parcelize`',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`@JsonClass(generateAdapter = true)` គឺជា Annotation ដែល Moshi ត្រូវការដើម្បីបង្កើត Adapter ។'
    },
    {
      question: 'តើ `@Json(name = "...")` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីប្តូរឈ្មោះ Property',
        'ដើម្បី Map ឈ្មោះ Property ជាមួយ Key នៅក្នុង JSON',
        'ដើម្បីលុប Property',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`@Json(name = "...")` ប្រើដើម្បី Map Property របស់ Kotlin ជាមួយ Key របស់ JSON ដែលមានឈ្មោះខុសគ្នា។'
    },
    {
      question: 'តើ `Moshi.Builder().addLast(KotlinJsonAdapterFactory()).build()` ធ្វើអ្វីខ្លះ?',
      options: [
        'បង្កើត Retrofit Instance',
        'បង្កើត Moshi Instance',
        'បង្កើត Database',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'វាគឺជា Code សម្រាប់បង្កើត Moshi Instance ដែលអាច Parse Kotlin Objects បាន។'
    },
    {
      question: 'តើ `JsonAdapter.fromJson()` ធ្វើអ្វី?',
      options: [
        'បំប្លែង Object ទៅ JSON',
        'បំប្លែង JSON ទៅ Object',
        'ធ្វើ HTTP Request',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`fromJson()` ធ្វើការ Parse JSON String ទៅជា Object ។'
    },
    {
      question: 'តើ Moshi ធ្វើការជាមួយ Retrofit តាមរយៈអ្វី?',
      options: [
        '`MoshiClient`',
        '`MoshiConverterFactory`',
        '`MoshiRetrofit`',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Moshi ធ្វើការជាមួយ Retrofit តាមរយៈ `MoshiConverterFactory` ។'
    },
    {
      question: 'តើ `ksp` (Kotlin Symbol Processing) ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Run Code',
        'សម្រាប់ Generate Code របស់ Moshi',
        'សម្រាប់ Compile Code',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`ksp` ត្រូវបានប្រើដើម្បី Generate Code សម្រាប់ Moshi ។'
    },
    {
      question: 'តើ `JsonClass` Annotation ជួយអ្វីខ្លះ?',
      options: [
        'ជួយ Moshi ឱ្យបង្កើត Code',
        'ជួយ Moshi ឱ្យ Parse JSON',
        'ជួយ Moshi ឱ្យ Compile Code',
        'ជួយ Moshi ឱ្យ Run Code'
      ],
      correct: 0,
      explanation: '`@JsonClass(generateAdapter = true)` ប្រាប់ Moshi Codegen ឱ្យបង្កើត Adapter ។'
    },
    {
      question: 'តើ Moshi ត្រូវបានរចនាឡើងសម្រាប់ភាសាអ្វី?',
      options: [
        'Java',
        'Kotlin',
        'Python',
        'Java និង Kotlin'
      ],
      correct: 3,
      explanation: 'Moshi ត្រូវបានរចនាឡើងសម្រាប់ Java និងមានការគាំទ្រពិសេសសម្រាប់ Kotlin ។'
    }
  ],
  lab: {
    task: `
បង្កើត Project ថ្មីមួយ ហើយប្រើ Moshi ដើម្បី Parse JSON String ខាងក្រោមទៅជា Kotlin Data Class ហើយបង្ហាញ \`name\` និង \`isStudent\` នៅលើអេក្រង់។

**JSON String:**
\`\`\`json
{
    "user_name": "Sokha",
    "user_age": 25,
    "is_student": true
}
\`\`\`

**តម្រូវការ:**

1.  **Dependencies:**
    -   បន្ថែម Moshi និង Moshi Codegen Dependencies ។
    -   បន្ថែម Plugin \`id("com.google.devtools.ksp")\` ។

2.  **Data Class:**
    -   បង្កើត Data Class មួយឈ្មោះ \`StudentProfile\` ។
    -   ប្រើ \`@JsonClass\` និង \`@Json\` Annotation សម្រាប់ Property ដែលមានឈ្មោះខុសគ្នា។

3.  **Parsing Logic:**
    -   បង្កើត Moshi Instance ។
    -   ប្រើ \`adapter.fromJson()\` ដើម្បី Parse JSON String ។
    -   បង្ហាញ \`name\` និង \`isStudent\` នៅលើ Text Composables ។
    `,
    solution: `
\`\`\`kotlin
// build.gradle (Module)
plugins {
    id("com.google.devtools.ksp") version "1.9.0-1.0.12"
}
dependencies {
    implementation("com.squareup.moshi:moshi-kotlin:1.14.0")
    ksp("com.squareup.moshi:moshi-kotlin-codegen:1.14.0")
}
\`\`\`

\`\`\`kotlin
// data/StudentProfile.kt
import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class StudentProfile(
    @Json(name = "user_name")
    val name: String,
    @Json(name = "user_age")
    val age: Int,
    @Json(name = "is_student")
    val isStudent: Boolean
)
\`\`\`

\`\`\`kotlin
// MainActivity.kt
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
import com.squareup.moshi.Moshi
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import com.example.moshiparsing.data.StudentProfile

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val jsonString = """
            {
                "user_name": "Sokha",
                "user_age": 25,
                "is_student": true
            }
        """.trimIndent()
        
        val moshi = Moshi.Builder().addLast(KotlinJsonAdapterFactory()).build()
        val adapter = moshi.adapter(StudentProfile::class.java)
        val studentProfile = adapter.fromJson(jsonString)

        setContent {
            if (studentProfile != null) {
                StudentProfileScreen(profile = studentProfile)
            } else {
                Text("Error parsing JSON")
            }
        }
    }
}

@Composable
fun StudentProfileScreen(profile: StudentProfile) {
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Name: \${profile.name}", fontSize = 24.sp)
        Text("Is Student: \${profile.isStudent}", fontSize = 24.sp)
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewStudentProfileScreen() {
    StudentProfileScreen(profile = StudentProfile("Dara", 22, true))
}
\`\`\`
`
  }
};

export default KotlinLesson5_2Content;