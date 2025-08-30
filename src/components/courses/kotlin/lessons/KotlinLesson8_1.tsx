import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson8_1Content: LessonContent = {
  title: 'SharedPreferences',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា SharedPreferences',
    'ស្គាល់ពីការប្រើប្រាស់ SharedPreferences ក្នុង Android',
    'រៀនពីរបៀបរក្សាទុក និងអាន Key-Value Data',
    'យល់ដឹងពីរបៀបប្រើ `apply` vs `commit`',
    'អនុវត្តការរក្សាទុក User Settings'
  ],
  content: `
# SharedPreferences 🔑

---

**SharedPreferences** គឺជាវិធីសាស្ត្រងាយស្រួលនិងលឿនបំផុតសម្រាប់រក្សាទុក **Key-Value Data** តូចៗ នៅក្នុង Android ។ វាល្អបំផុតសម្រាប់រក្សាទុក User Settings ឬ State របស់ App ដែលមិនទាមទារ Structured Data ។

## 1. ពេលណាគួរប្រើ SharedPreferences?

-   សម្រាប់រក្សាទុក Settings របស់ App (ដូចជា Dark/Light Mode)។
-   សម្រាប់រក្សាទុក User's preferences (ដូចជាការបើក/បិទ Notifications)។
-   សម្រាប់រក្សាទុក Login State តូចៗ (ឧ. \`isLoggedIn = true\`)។

**មិនគួរប្រើ** SharedPreferences សម្រាប់៖
-   រក្សាទុក Data ច្រើន (ដូចជា List នៃ Object)។
-   រក្សាទុក Structured Data (ដូចជា User Profile ដែលមានឈ្មោះ, អាយុ, អាសយដ្ឋាន)។ សម្រាប់ករណីនេះ គួរប្រើ Room Database ។

## 2. របៀបប្រើ SharedPreferences

### ជំហានទី ១៖ ទទួលបាន Instance របស់ SharedPreferences
យើងប្រើ \`getSharedPreferences()\` ឬ \`getDefaultSharedPreferences()\` ។
-   **\`getSharedPreferences("filename", Context.MODE_PRIVATE)\`**: អនុញ្ញាតឱ្យអ្នកដាក់ឈ្មោះ File ផ្ទាល់ខ្លួន។
-   **\`PreferenceManager.getDefaultSharedPreferences(context)\`**: ទទួលបាន Instance ដែលមានឈ្មោះ Default ។

### ជំហានទី ២៖ រក្សាទុក Data
យើងប្រើ \`editor\` ដើម្បីរក្សាទុក Data ។
\`\`\`kotlin
import android.content.Context
import android.content.SharedPreferences

fun saveString(context: Context, key: String, value: String) {
    val sharedPref: SharedPreferences = context.getSharedPreferences(
        "MyPref",
        Context.MODE_PRIVATE
    )
    with(sharedPref.edit()) {
        putString(key, value)
        apply() // ឬ commit()
    }
}
\`\`\`
-   **\`apply()\`**: រក្សាទុក Data ក្នុង Background ។ មិន Block Main Thread ។
-   **\`commit()\`**: រក្សាទុក Data នៅលើ Main Thread ។ វា Block Main Thread រហូតដល់ចប់។ គួរប្រើ \`apply()\` ជានិច្ច លើកលែងតែករណីពិសេស។

### ជំហានទី ៣៖ អាន Data
\`\`\`kotlin
fun readString(context: Context, key: String): String? {
    val sharedPref: SharedPreferences = context.getSharedPreferences(
        "MyPref",
        Context.MODE_PRIVATE
    )
    return sharedPref.getString(key, null) // តម្លៃ Default គឺ null
}
\`\`\`

## 3. លក្ខខណ្ឌពិសេស

-   **Privacy:** SharedPreferences អាចចូលបានតែដោយ App របស់អ្នកប៉ុណ្ណោះ។
-   **Security:** វាមិន Encrypt Data ទេ។ មិនត្រូវរក្សាទុក Password ឬ Sensitive Data ទេ។
-   **UI Updates:** សម្រាប់ UI Updates ទៅតាម SharedPreferences Change គួរប្រើ \`OnSharedPreferenceChangeListener\`។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ រក្សាទុក និងអាន Dark Mode Setting</h3>
<p>យើងអាចប្រើ Boolean ដើម្បីរក្សាទុក User's choice ។</p>
<pre><code class="language-kotlin">
// រក្សាទុក State
fun saveThemeMode(context: Context, isDarkMode: Boolean) {
    val sharedPref = context.getSharedPreferences("Settings", Context.MODE_PRIVATE)
    sharedPref.edit().putBoolean("dark_mode", isDarkMode).apply()
}

// អាន State
fun getThemeMode(context: Context): Boolean {
    val sharedPref = context.getSharedPreferences("Settings", Context.MODE_PRIVATE)
    return sharedPref.getBoolean("dark_mode", false) // false គឺជាតម្លៃ Default
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ SharedPreferences ប្រើសម្រាប់រក្សាទុក Data ប្រភេទណា?',
      options: [
        'Structured Data',
        'Large Files',
        'Small Key-Value Data',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'SharedPreferences ល្អបំផុតសម្រាប់រក្សាទុក Small Key-Value Data តូចៗ។'
    },
    {
      question: 'តើ `apply()` ធ្វើអ្វីខ្លះ?',
      options: [
        'រក្សាទុក Data ក្នុង Background',
        'រក្សាទុក Data នៅលើ Main Thread',
        'លុប Data ទាំងអស់',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`apply()` រក្សាទុក Data ក្នុង Background ដោយមិន Block Main Thread ។'
    },
    {
      question: 'តើ `commit()` មានគុណវិបត្តិអ្វី?',
      options: [
        'ធ្វើឱ្យ App គាំង',
        'វា Block Main Thread',
        'មិនអាចប្រើបានជាមួយ Strings',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`commit()` Block Main Thread ដែលអាចធ្វើឱ្យ App គាំង (ANR) ។'
    },
    {
      question: 'តើ SharedPreferences រក្សាទុក Data ក្នុង Format អ្វី?',
      options: [
        'SQLite Database',
        'JSON',
        'XML',
        'Binary'
      ],
      correct: 2,
      explanation: 'SharedPreferences រក្សាទុក Data ក្នុង File XML ។'
    },
    {
      question: 'តើ SharedPreferences អាចរក្សាទុក Password ឬ Sensitive Data បានដោយសុវត្ថិភាពទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេល Encrypt',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'SharedPreferences មិន Encrypt Data ទេ។ មិនគួររក្សាទុក Sensitive Data ទេ។'
    },
    {
      question: 'តើ `Context.MODE_PRIVATE` មានន័យដូចម្តេច?',
      options: [
        'File អាចចូលបានដោយ App ផ្សេង',
        'File អាចចូលបានដោយ App របស់អ្នកប៉ុណ្ណោះ',
        'File អាចចូលបានដោយ User ទាំងអស់',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`Context.MODE_PRIVATE` មានន័យថា File អាចចូលបានដោយ App របស់អ្នកប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ `PreferenceManager.getDefaultSharedPreferences()` ផ្តល់ Instance របស់ File ឈ្មោះអ្វី?',
      options: [
        'MyPref',
        'Default.xml',
        'package_name_preferences.xml',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'វាផ្តល់ Instance របស់ File ដែលមានឈ្មោះ Default គឺ `package_name_preferences.xml` ។'
    },
    {
      question: 'តើ `sharedPref.edit()` ត្រឡប់អ្វី?',
      options: [
        'SharedPreferences',
        'SharedPreferences.Editor',
        'Context',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`sharedPref.edit()` ត្រឡប់ Object របស់ `SharedPreferences.Editor` ។'
    },
    {
      question: 'តើ `getString(key, "default_value")` ធ្វើអ្វី?',
      options: [
        'អាន String',
        'អាន String ហើយត្រឡប់ `default_value` បើរក Key មិនឃើញ',
        'រក្សាទុក String',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'វាអាន String ហើយត្រឡប់ `default_value` ប្រសិនបើ Key នោះមិនមាន។'
    },
    {
      question: 'តើការរក្សាទុក Data មួយចំនួនដូចជា User List ក្នុង SharedPreferences អាចមានបញ្ហាអ្វីខ្លះ?',
      options: [
        'Performance យឺត',
        'Memory ខ្ពស់',
        'ទាំងអស់ខាងលើ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'ការរក្សាទុក Data ច្រើនក្នុង SharedPreferences នឹងធ្វើឱ្យ Performance យឺត។'
    }
  ],
  lab: {
    task: `
បង្កើត App មួយដែលមាន Button មួយនិង TextView មួយ។ នៅពេលចុច Button, រក្សាទុកចំនួននៃការចុចនៅក្នុង SharedPreferences ។ នៅពេល App ត្រូវបានបើកម្តងទៀត, អានចំនួននោះហើយបង្ហាញវានៅលើ TextView ។

**តម្រូវការ:**

1.  **UI:**
    -   \`TextView\` សម្រាប់បង្ហាញចំនួន Count ។
    -   \`Button\` សម្រាប់បង្កើន Count ។

2.  **Logic:**
    -   នៅពេល App ចាប់ផ្តើម, អានចំនួន Count ពី SharedPreferences ហើយបង្ហាញវា។
    -   នៅពេលចុច Button, បង្កើន Count មួយហើយរក្សាទុកវាទៅ SharedPreferences ។
    -   ត្រូវប្រើ \`apply()\` ដើម្បីរក្សាទុក Data ។
    `,
    solution: `
\`\`\`kotlin
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private lateinit var countTextView: TextView
    private lateinit var incrementButton: Button
    private var clickCount = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        countTextView = findViewById(R.id.count_text_view)
        incrementButton = findViewById(R.id.increment_button)

        // អានតម្លៃ Count ពី SharedPreferences
        loadCount()
        updateTextView()

        incrementButton.setOnClickListener {
            clickCount++
            updateTextView()
            saveCount()
        }
    }

    private fun saveCount() {
        val sharedPref = getSharedPreferences("MyClickCounter", MODE_PRIVATE)
        with(sharedPref.edit()) {
            putInt("click_count", clickCount)
            apply()
        }
    }

    private fun loadCount() {
        val sharedPref = getSharedPreferences("MyClickCounter", MODE_PRIVATE)
        clickCount = sharedPref.getInt("click_count", 0)
    }

    private fun updateTextView() {
        countTextView.text = "Count: \$clickCount"
    }
}
\`\`\`
`
  }
};

export default KotlinLesson8_1Content;