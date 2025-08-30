import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson2_3Content: LessonContent = {
  title: 'Layouts in Compose',
  objectives: [
    'យល់ដឹងពីរបៀបរៀបចំ UI ដោយប្រើ Composables',
    'ស្គាល់ពីការប្រើប្រាស់ `Column`, `Row`, និង `Box` Composables',
    'រៀនពីការកែប្រែ Layouts ដោយប្រើ `Modifier`',
    'យល់ដឹងពីការ Alignment និង Arrangement នៅក្នុង Layouts',
    'អនុវត្តការបង្កើត Layout ដែលស្មុគស្មាញ'
  ],
  content: `
# Layouts in Compose 📐

---

ការកសាង UI នៅក្នុង Jetpack Compose ពាក់ព័ន្ធនឹងការរៀបចំ Composables (Components) ទៅក្នុង Layouts ។ Compose ផ្តល់នូវ Composables ជាច្រើនសម្រាប់រៀបចំ Layouts របស់អ្នក។

## 1. Fundamental Layouts

-   **\`Column\`:** រៀបចំ Composables តាមបណ្តោយ **បញ្ឈរ** (Vertical) ។ វាមាន Properties សម្រាប់ Alignment និង Arrangement ។
    -   **\`verticalArrangement\`**: កំណត់ការរៀបចំតាមបណ្តោយបញ្ឈរ (ឧ. \`Arrangement.SpaceAround\`) ។
    -   **\`horizontalAlignment\`**: កំណត់ Alignment តាមបណ្តោយផ្តេក (ឧ. \`Alignment.CenterHorizontally\`) ។

-   **\`Row\`:** រៀបចំ Composables តាមបណ្តោយ **ផ្តេក** (Horizontal) ។ វាមាន Properties ស្រដៀងគ្នា។
    -   **\`horizontalArrangement\`**: កំណត់ការរៀបចំតាមបណ្តោយផ្តេក (ឧ. \`Arrangement.SpaceBetween\`) ។
    -   **\`verticalAlignment\`**: កំណត់ Alignment តាមបណ្តោយបញ្ឈរ (ឧ. \`Alignment.CenterVertically\`) ។

-   **\`Box\`:** ប្រើដើម្បី **ត្រួតលើគ្នា** (Stack) Composables ។ វាអនុញ្ញាតឱ្យអ្នកដាក់ Items នៅពីលើគ្នា។
    -   **\`contentAlignment\`**: កំណត់ Alignment របស់ Child Composables នៅខាងក្នុង Box (ឧ. \`Alignment.Center\`) ។

## 2. Modifiers: គន្លឹះនៃ Layouts

**Modifier** គឺជា Objects ដែលប្រើដើម្បីកែប្រែ Composables ។ វាមានសារៈសំខាន់សម្រាប់ការគ្រប់គ្រង Layout ។

-   **\`Modifier.padding(all: Dp)\`**: បន្ថែម Space នៅជុំវិញ Component ។
-   **\`Modifier.size(width: Dp, height: Dp)\`**: កំណត់ទំហំរបស់ Component ។
-   **\`Modifier.fillMaxWidth()\`**: ធ្វើឱ្យ Component មានទទឹងពេញ Layout ។
-   **\`Modifier.weight(weight: Float)\`**: ផ្តល់ទំហំដែលទាក់ទងគ្នា (Relative Size) ដល់ Items នៅខាងក្នុង \`Row\` ឬ \`Column\` ។

\`\`\`kotlin
// ឧទាហរណ៍៖ ការប្រើ weight
Row(modifier = Modifier.fillMaxWidth()) {
    Text(text = "Left", modifier = Modifier.weight(1f))
    Text(text = "Right", modifier = Modifier.weight(2f))
}
\`\`\`
Text "Right" នឹងមានទទឹងទ្វេដងនៃ Text "Left" ។

## 3. Composing a Complex Layout

យើងអាចផ្សំ Layouts ជាច្រើនដើម្បីបង្កើត UI ស្មុគស្មាញ។

\`\`\`kotlin
@Composable
fun UserProfileCard() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        // Avatar
        Box(
            modifier = Modifier
                .size(64.dp)
                .background(Color.Gray, shape = CircleShape)
        )
        
        // Info Column
        Column(
            modifier = Modifier
                .weight(1f)
                .padding(horizontal = 16.dp)
        ) {
            Text("Sokha", style = MaterialTheme.typography.headlineSmall)
            Text("Kotlin Developer", style = MaterialTheme.typography.bodyMedium)
        }
        
        // Follow Button
        Button(onClick = {}) {
            Text("Follow")
        }
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Arrangement និង Alignment</h3>
<p>យើងអាចប្រើ Arrangement និង Alignment ដើម្បីដាក់ Items នៅចំកណ្តាល Layout ។</p>
<pre><code class="language-kotlin">
@Composable
fun CenteredColumn() {
    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text("Centered")
        Text("In a Column")
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `Column` Composable ប្រើសម្រាប់រៀបចំ Composables តាមរបៀបណា?',
      options: [
        'ផ្តេក (Horizontal)',
        'បញ្ឈរ (Vertical)',
        'ត្រួតលើគ្នា (Stacked)',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`Column` រៀបចំ Items តាមបណ្តោយបញ្ឈរ។'
    },
    {
      question: 'តើ `Box` Composable ប្រើសម្រាប់អ្វី?',
      options: [
        'រៀបចំ Items តាមបណ្តោយផ្តេក',
        'រៀបចំ Items តាមបណ្តោយបញ្ឈរ',
        'ត្រួតលើគ្នា Composables',
        'បន្ថែម Padding'
      ],
      correct: 2,
      explanation: '`Box` ប្រើដើម្បីត្រួតលើគ្នា Composables ។'
    },
    {
      question: 'តើ `Modifier` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Logic',
        'កែប្រែ UI Components',
        'គ្រប់គ្រង Data',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`Modifier` គឺជា Objects ដែលប្រើដើម្បីកែប្រែ Behavior ឬ Appearance របស់ Composables ។'
    },
    {
      question: 'តើ `Modifier.padding(16.dp)` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Padding 16dp នៅជុំវិញ Component',
        'កំណត់កម្ពស់ 16dp',
        'កំណត់ទទឹង 16dp',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`padding` បន្ថែម Space នៅជុំវិញ Component ។'
    },
    {
      question: 'តើ `Modifier.weight()` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ទំហំជាដាច់ខាត',
        'កំណត់ទំហំដែលទាក់ទងគ្នា',
        'កំណត់ទំហំអក្សរ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`weight` ប្រើដើម្បីផ្តល់ទំហំដែលទាក់ទងគ្នាដល់ Items នៅក្នុង `Row` ឬ `Column` ។'
    },
    {
      question: 'តើ `verticalArrangement` Property ប្រើជាមួយ Layout ណា?',
      options: [
        '`Row`',
        '`Column`',
        '`Box`',
        '`Text`'
      ],
      correct: 1,
      explanation: '`verticalArrangement` ប្រើជាមួយ `Column` ដើម្បីកំណត់ការរៀបចំតាមបណ្តោយបញ្ឈរ។'
    },
    {
      question: 'តើ `Arrangement.SpaceBetween` ធ្វើអ្វី?',
      options: [
        'ដាក់ Items នៅចំកណ្តាល',
        'ដាក់ Items ឱ្យនៅដាច់ពីគ្នាពេញ Space',
        'ដាក់ Items ជាប់គ្នា',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`SpaceBetween` ដាក់ Items ដាច់ពីគ្នា ហើយមាន Space ស្មើគ្នារវាងពួកវា។'
    },
    {
      question: 'តើ `Alignment.CenterHorizontally` ប្រើសម្រាប់អ្វី?',
      options: [
        'តម្រឹម Items ទៅកណ្តាលតាមបណ្តោយផ្តេក',
        'តម្រឹម Items ទៅកណ្តាលតាមបណ្តោយបញ្ឈរ',
        'តម្រឹម Items ទៅខាងឆ្វេង',
        'តម្រឹម Items ទៅខាងស្តាំ'
      ],
      correct: 0,
      explanation: '`CenterHorizontally` ប្រើដើម្បីតម្រឹម Child Composables ទៅកណ្តាលតាមបណ្តោយផ្តេក។'
    },
    {
      question: 'តើអ្នកអាចបញ្ចូល `Column` ទៅក្នុង `Row` បានទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលប្រើ Plugin',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'អ្នកអាចផ្សំ Layout Composables តាមដែលអ្នកចង់បាន។'
    },
    {
      question: 'តើ `Modifier.size(64.dp)` នឹងកំណត់អ្វី?',
      options: [
        'កម្ពស់ 64dp',
        'ទទឹង 64dp',
        'កម្ពស់និងទទឹង 64dp',
        'Padding 64dp'
      ],
      correct: 2,
      explanation: '`size()` កំណត់កម្ពស់និងទទឹងដូចគ្នា។'
    }
  ],
  lab: {
    task: `
បង្កើត Card UI មួយដូចក្នុងឧទាហរណ៍ដោយប្រើ \`Row\` និង \`Column\` ។

**តម្រូវការ:**

1.  **Layout:**
    -   ប្រើ \`Row\` ជា Layout មេ។
    -   នៅក្នុង \`Row\` នោះ, បង្កើត \`Box\` សម្រាប់រូបភាព Avatar និង \`Column\` សម្រាប់ Text ។

2.  **Components:**
    -   ប្រើ \`Box\` ដែលមាន \`Modifier.size()\` និង \`Modifier.background()\` ។
    -   ប្រើ \`Column\` ដែលមាន \`Text\` ចំនួនពីរ។
    -   ប្រើ \`Button\` នៅខាងចុង \`Row\` ។

3.  **Modifiers:**
    -   ប្រើ \`Modifier.padding()\` ដើម្បីបន្ថែម Space ។
    -   ប្រើ \`Modifier.weight(1f)\` លើ \`Column\` ដើម្បីឱ្យវាមាន Space ពេញ។

**ការណែនាំ:** ត្រូវប្រើ \`import androidx.compose.ui.unit.dp\` និង \`import androidx.compose.ui.graphics.Color\` ។
    `,
    solution: `
\`\`\`kotlin
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

@Composable
fun UserCard() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        // Avatar
        Box(
            modifier = Modifier
                .size(64.dp)
                .background(Color.Gray, shape = CircleShape)
        )
        
        // Profile Info
        Column(
            modifier = Modifier
                .weight(1f)
                .padding(horizontal = 16.dp)
        ) {
            Text("Sokha", style = androidx.compose.material3.MaterialTheme.typography.titleMedium)
            Text("Jetpack Compose Learner", style = androidx.compose.material3.MaterialTheme.typography.bodySmall)
        }
        
        // Action Button
        Button(onClick = { /* TODO: Add action */ }) {
            Text("View Profile")
        }
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewUserCard() {
    UserCard()
}
\`\`\`
`
  }
};

export default KotlinLesson2_3Content;