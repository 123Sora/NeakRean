import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson6_3Content: LessonContent = {
  title: 'Performance Optimization',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Performance Optimization',
    'ស្គាល់ពីឧបករណ៍សម្រាប់វាស់ Performance',
    'រៀនពីរបៀបធ្វើ Optimization សម្រាប់ Network, Database និង UI',
    'យល់ដឹងពីរបៀបប្រើ Coroutines ដើម្បីបង្កើន Performance',
    'អនុវត្តការធ្វើ Optimization'
  ],
  content: `
# Performance Optimization 🚀

---

**Performance Optimization** គឺជាដំណើរការនៃការបង្កើនល្បឿននិងប្រសិទ្ធភាពរបស់ App ។ App ដែលមាន Performance ល្អ នឹងផ្តល់នូវបទពិសោធន៍ដ៏ល្អដល់អ្នកប្រើប្រាស់។

## 1. ហេតុអ្វីត្រូវធ្វើ Optimization?

-   **User Experience (UX):** App ដែលលឿននិងមិនគាំង ធ្វើឱ្យអ្នកប្រើប្រាស់ពេញចិត្ត។
-   **Battery Life:** App ដែលមានប្រសិទ្ធភាព ប្រើថ្មតិច។
-   **System Resources:** App ប្រើ Memory និង CPU តិច។



## 2. Tools for Performance Analysis

-   **Android Studio Profiler:** ឧបករណ៍ដ៏សំខាន់សម្រាប់វិភាគ Performance របស់ App ។ វាអាចវាស់ CPU, Memory, Network និង Energy Usage ។
-   **Lint:** វិភាគ Static Code ដើម្បីរក Potential Issues ។

## 3. Optimization Techniques

### 3.1. Network Optimization

-   **Background Threads:** ប្រើ Coroutines (\`Dispatchers.IO\`) ដើម្បីធ្វើ Network Calls ។ មិនត្រូវធ្វើ Network Calls នៅលើ Main Thread ។
-   **Caching:** ប្រើ Library ដូចជា OkHttp ដើម្បី Cache Data ។
-   **Pagination:** ហៅទិន្នន័យពី API ជា Page ៗ (មិនមែនទាំងអស់ក្នុងពេលតែមួយ) ។

### 3.2. Database Optimization

-   **Background Threads:** ធ្វើ Database Operations (\`INSERT\`, \`UPDATE\`, \`DELETE\`) នៅលើ Background Thread ។ Room Library ធ្វើការងារនេះដោយស្វ័យប្រវត្តិ។
-   **Proper Indexing:** ប្រើ \`index\` នៅក្នុង Room ដើម្បីបង្កើនល្បឿន Query ។

### 3.3. UI Optimization

-   **Avoid UI Overdraw:** កុំដាក់ View ពីលើ View ច្រើនពេក។
-   **Lazy Composables:** ប្រើ \`LazyColumn\` ឬ \`LazyRow\` សម្រាប់បង្ហាញ List ដែលមានចំនួនច្រើន។
-   **State Management:** ប្រើ State តែនៅកន្លែងដែលត្រូវការ Recomposition ។

## 4. Coroutines for Performance

Coroutines គឺជាឧបករណ៍ដ៏ល្អសម្រាប់ Performance Optimization ។

-   **Lightweight:** Coroutines មានលក្ខណៈស្រាលជាង Thread ធម្មតា។
-   **Concurrency:** អាចរត់ Task ច្រើនក្នុងពេលតែមួយដោយមិន Block Main Thread ។
-   **Structured Concurrency:** គ្រប់គ្រង Coroutines ឱ្យមានសណ្តាប់ធ្នាប់ដោយប្រើ \`viewModelScope\` ឬ \`lifecycleScope\` ។

## 5. Other Best Practices

-   **Use \`lateinit\` Wisely:** ប្រើ \`lateinit\` សម្រាប់ Variables ដែលមិនអាច null ហើយប្រាកដថានឹងត្រូវបាន Initialize ។
-   **Avoid Leaking Context:** កុំប្រើ Context យូរពេក។ ប្រើ \`applicationContext\` ពេលដែល Context ត្រូវការយូរជាង Activity ។
-   **Optimize Images:** ប្រើ Library ដូចជា Coil ឬ Glide ដើម្បី Load Images ហើយ Compress Images ឱ្យបានត្រឹមត្រូវ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`LazyColumn\` ជំនួស \`Column\`</h3>
<p>ប្រសិនបើអ្នកមាន List ច្រើន, \`LazyColumn\` មាន Performance ល្អជាង \`Column\` ។</p>
<pre><code class="language-kotlin">
// មិនមានប្រសិទ្ធភាព
@Composable
fun BadList() {
    val items = (1..1000).toList()
    Column {
        items.forEach { item ->
            Text("Item \$item")
        }
    }
}

// មានប្រសិទ្ធភាព
@Composable
fun GoodList() {
    val items = (1..1000).toList()
    LazyColumn {
        items(items) { item ->
            Text("Item \$item")
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Performance Optimization ធ្វើអ្វីខ្លះ?',
      options: [
        'ធ្វើឱ្យ App លឿន',
        'ធ្វើឱ្យ App ប្រើ Memory តិច',
        'ធ្វើឱ្យ App ប្រើថ្មតិច',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 3,
      explanation: 'Performance Optimization ជួយឱ្យ App លឿន ប្រើ Memory និងថ្មតិច។'
    },
    {
      question: 'តើ Android Studio Profiler ប្រើសម្រាប់អ្វី?',
      options: [
        'សរសេរ Code',
        'វាស់ Performance របស់ App',
        'រៀបចំ UI',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Android Studio Profiler គឺជាឧបករណ៍សម្រាប់វាស់ Performance របស់ App ។'
    },
    {
      question: 'តើ Network Calls គួររត់នៅលើ Thread ណា?',
      options: [
        'Main Thread',
        'Background Thread',
        'UI Thread',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Network Calls គួររត់នៅលើ Background Thread (ដូចជា \`Dispatchers.IO\`) ។'
    },
    {
      question: 'តើ \`LazyColumn\` មានគុណសម្បត្តិអ្វីលើ \`Column\`?',
      options: [
        'ងាយស្រួលប្រើ',
        'មាន Performance ល្អសម្រាប់ List ដែលមានចំនួនច្រើន',
        'ងាយស្រួលក្នុងការធ្វើ Animations',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '\`LazyColumn\` មាន Performance ល្អសម្រាប់ List ដែលមានចំនួនច្រើន។'
    },
    {
      question: 'តើ Pagination ធ្វើអ្វី?',
      options: [
        'បង្ហាញទិន្នន័យទាំងអស់ក្នុងពេលតែមួយ',
        'ហៅទិន្នន័យពី API ជា Page ៗ',
        'រក្សាទុកទិន្នន័យក្នុង Local',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Pagination គឺជាការហៅទិន្នន័យពី API ជា Page ៗ។'
    },
    {
      question: 'តើការធ្វើ Database Operations គួររត់នៅលើ Thread ណា?',
      options: [
        'Main Thread',
        'Background Thread',
        'UI Thread',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Database Operations គួររត់នៅលើ Background Thread ។'
    },
    {
      question: 'តើអ្វីទៅជា UI Overdraw?',
      options: [
        'ការដាក់ View ពីលើ View ច្រើនពេក',
        'ការដាក់ View តិចពេក',
        'ការប្តូរពណ៌ View',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'UI Overdraw គឺជាការដាក់ View ពីលើ View ច្រើនពេកដែលធ្វើឱ្យ Performance យឺត។'
    },
    {
      question: 'តើ \`Lint\` ជួយអ្វីខ្លះក្នុងការ Optimization?',
      options: [
        'វាស់ Memory',
        'វិភាគ Static Code ដើម្បីរក Potential Issues',
        'ធ្វើការ Test UI',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '\`Lint\` វិភាគ Static Code ដើម្បីរក Potential Issues ។'
    },
    {
      question: 'តើ \`applicationContext\` គួរប្រើនៅពេលណា?',
      options: [
        'នៅពេលដែល Context ត្រូវការយូរជាង Activity',
        'នៅពេលដែល Context ត្រូវការសម្រាប់ UI',
        'នៅពេលដែល Context ត្រូវការសម្រាប់ View',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '\`applicationContext\` ត្រូវបានណែនាំនៅពេល Context ត្រូវការយូរជាង Activity ។'
    },
    {
      question: 'តើ Coroutines ជួយ Optimization យ៉ាងដូចម្តេច?',
      options: [
        'ធ្វើឱ្យ Code វែង',
        'ធ្វើឱ្យ Code គាំង',
        'ធ្វើឱ្យ Task យូរអាចរត់ដោយមិន Block Main Thread',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Coroutines ធ្វើឱ្យ Task យូរអាចរត់ដោយមិន Block Main Thread ។'
    }
  ],
  lab: {
    task: `
បង្កើត App មួយដែលមាន \`LazyColumn\` ដើម្បីបង្ហាញ List ចំនួន 1000 Items ។ រត់ App ហើយមើលពីប្រសិទ្ធភាពរបស់វា។

**តម្រូវការ:**

1.  **Project:**
    -   បង្កើត Project Compose ថ្មី។

2.  **UI:**
    -   បង្កើត Composable មួយឈ្មោះ \`EfficientListScreen\` ។
    -   ប្រើ \`LazyColumn\` ដើម្បីបង្ហាញ List នៃ Items ។
    -   បង្កើត List ចំនួន 1000 Items (ឧ. \`(1..1000).toList()\`) ។

3.  **Test:**
    -   រត់ App ហើយ Scroll មើល List ។
    -   សាកល្បងប្តូរ \`LazyColumn\` ទៅជា \`Column\` ហើយរត់ម្តងទៀត។ សង្កេតមើលពីភាពខុសគ្នារបស់ Performance (ឧ. Scrolling យឺតឬអត់) ។

**ការណែនាំ:** \`LazyColumn\` នឹង Render តែ Items ដែលមើលឃើញនៅលើអេក្រង់ប៉ុណ្ណោះ។
    `,
    solution: `
\`\`\`kotlin
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            EfficientListScreen()
        }
    }
}

@Composable
fun EfficientListScreen() {
    val items = (1..1000).toList()
    
    LazyColumn {
        items(items) { item ->
            Text(
                text = "Item number: \$item",
                modifier = Modifier.padding(8.dp)
            )
        }
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewEfficientListScreen() {
    EfficientListScreen()
}
\`\`\`
`
  }
};

export default KotlinLesson6_3Content;