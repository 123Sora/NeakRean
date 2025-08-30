import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson8_3Content: LessonContent = {
  title: 'File Storage',
  objectives: [
    'យល់ដឹងពី Storage Options ក្នុង Android',
    'ស្គាល់ពី Internal និង External Storage',
    'រៀនពីរបៀបរក្សាទុក File នៅក្នុង Internal Storage',
    'យល់ដឹងពី Storage Access Framework',
    'អនុវត្តការរក្សាទុកនិងអាន Text File'
  ],
  content: `
# File Storage 📁

---

ក្រៅពី SharedPreferences និង Room, យើងក៏អាចប្រើ File Storage សម្រាប់រក្សាទុកទិន្នន័យផងដែរ។ Android មានប្រភេទ Storage ពីរគឺ **Internal Storage** និង **External Storage** ។

## 1. Internal vs. External Storage

-   **Internal Storage:**
    -   ឯកជន (Private) សម្រាប់ App របស់អ្នក។
    -   នៅពេល Uninstall App, Data ទាំងអស់នៅក្នុង Internal Storage ត្រូវបានលុបចោល។
    -   មិនទាមទារ Permission ពិសេសដើម្បី Access ។
-   **External Storage:**
    -   អាចចូលបានដោយ App ផ្សេងៗ និង User ។
    -   Data នៅតែមាន បើទោះជា App ត្រូវបាន Uninstall ក៏ដោយ។
    -   ទាមទារ Permission (\`READ_EXTERNAL_STORAGE\`, \`WRITE_EXTERNAL_STORAGE\`) ។
    


## 2. Internal Storage

Internal Storage ជាកន្លែងដែលមានសុវត្ថិភាពបំផុតសម្រាប់ Data ដែលឯកជន។

### របៀបរក្សាទុក File
យើងប្រើ \`openFileOutput()\` សម្រាប់សរសេរ File ។
\`\`\`kotlin
import android.content.Context

fun saveToFile(context: Context, filename: String, content: String) {
    context.openFileOutput(filename, Context.MODE_PRIVATE).use {
        it.write(content.toByteArray())
    }
}
\`\`\`
-   \`use\` គឺជា Extension Function ដែលធានាថា Stream នឹងត្រូវបិទវិញដោយស្វ័យប្រវត្តិ។

### របៀបអាន File
យើងប្រើ \`openFileInput()\` សម្រាប់អាន File ។
\`\`\`kotlin
fun readFromFile(context: Context, filename: String): String {
    return context.openFileInput(filename).bufferedReader().useLines { lines ->
        lines.fold("") { some, text ->
            some + text
        }
    }
}
\`\`\`

## 3. Storage Access Framework (SAF)

ចាប់ពី Android 10 (API 29) ឡើងទៅ Google បានណែនាំ **Scoped Storage** ដែលកំណត់ឱ្យ App នីមួយៗមាន Storage ឯកជនរបស់ខ្លួន។ សម្រាប់ External Storage (Public), គួរប្រើ **Storage Access Framework (SAF)** ។

-   SAF អនុញ្ញាតឱ្យ User ជ្រើសរើសទីតាំងសម្រាប់រក្សាទុក File ។
-   វាមានភាពងាយស្រួលនិងសុវត្ថិភាពជាងការស្នើសុំ Permission ពីមុនៗ។
-   យើងប្រើ Intent ដូចជា \`ACTION_CREATE_DOCUMENT\` ឬ \`ACTION_OPEN_DOCUMENT\` ។

## 4. Temporary Files

សម្រាប់រក្សាទុក File បណ្តោះអាសន្ន យើងប្រើ \`cacheDir\` ។
\`\`\`kotlin
import java.io.File

fun createTempFile(context: Context, filename: String): File {
    return File(context.cacheDir, filename)
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`cacheDir\`</h3>
<p>យើងអាចបង្កើត File នៅក្នុង \`cacheDir\` សម្រាប់រក្សាទុកទិន្នន័យបណ្តោះអាសន្ន។</p>
<pre><code class="language-kotlin">
// សរសេរទិន្នន័យទៅ Temp File
fun saveToCache(context: Context, content: String) {
    val tempFile = File(context.cacheDir, "temp.txt")
    tempFile.writeText(content)
}

// អានទិន្នន័យពី Temp File
fun readFromCache(context: Context): String {
    val tempFile = File(context.cacheDir, "temp.txt")
    return if (tempFile.exists()) {
        tempFile.readText()
    } else {
        "File not found"
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Internal Storage មានគុណសម្បត្តិអ្វី?',
      options: [
        'អាចចូលដោយ App ផ្សេង',
        'ឯកជនសម្រាប់ App របស់អ្នក',
        'ទាមទារ Permission',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Internal Storage គឺឯកជនសម្រាប់ App របស់អ្នក។'
    },
    {
      question: 'តើ Data នៅក្នុង Internal Storage ត្រូវបានលុបនៅពេលណា?',
      options: [
        'នៅពេល App ត្រូវបាន Uninstall',
        'នៅពេល Restart Device',
        'នៅពេល App ត្រូវបានបិទ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Data នៅក្នុង Internal Storage ត្រូវបានលុបនៅពេល Uninstall App ។'
    },
    {
      question: 'តើ External Storage ទាមទារ Permission ដែរឬទេ?',
      options: [
        'មិនទាមទារទេ',
        'ទាមទារ',
        'ទាមទារតែពេល Read',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'External Storage ទាមទារ Permission ដូចជា `READ_EXTERNAL_STORAGE` ។'
    },
    {
      question: 'តើ `openFileOutput()` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់អាន File',
        'សម្រាប់សរសេរ File',
        'សម្រាប់លុប File',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`openFileOutput()` ប្រើសម្រាប់សរសេរ File ទៅក្នុង Internal Storage ។'
    },
    {
      question: 'តើ `cacheDir` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់រក្សាទុក File ធំៗ',
        'សម្រាប់រក្សាទុក File បណ្តោះអាសន្ន',
        'សម្រាប់រក្សាទុក File ដែលមានសុវត្ថិភាព',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`cacheDir` ប្រើសម្រាប់រក្សាទុក File បណ្តោះអាសន្ន។'
    },
    {
      question: 'តើ `Storage Access Framework (SAF)` ជួយអ្វីខ្លះ?',
      options: [
        'ជួយឱ្យ App អាច Access Folder របស់ App ផ្សេង',
        'ជួយឱ្យ User ជ្រើសរើស Folder សម្រាប់រក្សាទុក File',
        'ជួយឱ្យ App មាន Memory ច្រើន',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'SAF ជួយឱ្យ User ជ្រើសរើស Folder សម្រាប់រក្សាទុក File ជាសាធារណៈ។'
    },
    {
      question: 'តើ `Context.MODE_PRIVATE` សម្រាប់ File Storage មានន័យដូចម្តេច?',
      options: [
        'File អាចចូលបានដោយ App ផ្សេង',
        'File អាចចូលបានដោយ App របស់អ្នកប៉ុណ្ណោះ',
        'File អាចចូលបានដោយ User ទាំងអស់',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`Context.MODE_PRIVATE` ធ្វើឱ្យ File ឯកជនសម្រាប់ App របស់អ្នក។'
    },
    {
      question: 'តើ `use` Extension Function ផ្តល់អត្ថប្រយោជន៍អ្វី?',
      options: [
        'ធ្វើឱ្យ File ធំ',
        'ធានាថា Stream នឹងត្រូវបិទវិញដោយស្វ័យប្រវត្តិ',
        'ធ្វើឱ្យ App គាំង',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`use` Extension Function ធានាថា Stream នឹងត្រូវបិទវិញដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើការប្រើ `ACTION_CREATE_DOCUMENT` គឺសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Select File',
        'សម្រាប់បង្កើត File ថ្មី',
        'សម្រាប់លុប File',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`ACTION_CREATE_DOCUMENT` ប្រើសម្រាប់បង្កើត File ថ្មីនៅក្នុង External Storage ។'
    },
    {
      question: 'តើ File Storage គួរប្រើសម្រាប់ទិន្នន័យប្រភេទណា?',
      options: [
        'Small Key-Value Data',
        'Structured Data',
        'Large Files ដូចជា Image ឬ Video',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'File Storage ល្អបំផុតសម្រាប់ Large Files ។'
    }
  ],
  lab: {
    task: `
បង្កើត App មួយដែលមាន EditText និង Button ។ នៅពេលចុច Button, រក្សាទុក Text នោះទៅក្នុង File នៅក្នុង Internal Storage ។ បន្ទាប់មកនៅពេល App ចាប់ផ្តើមម្តងទៀត, អាន File នោះហើយបង្ហាញវានៅលើ TextView ។

**តម្រូវការ:**

1.  **UI:**
    -   \`EditText\` សម្រាប់ Input Text ។
    -   \`Button\` សម្រាប់ Save Text ។
    -   \`TextView\` សម្រាប់បង្ហាញ Text ដែលបាន Saved ។

2.  **Logic:**
    -   នៅពេល App ចាប់ផ្តើម, អាន Text ពី File (ប្រសិនបើមាន) ហើយបង្ហាញវានៅលើ TextView ។
    -   នៅពេលចុច Button, ទទួលបាន Text ពី EditText ហើយសរសេរវាទៅក្នុង File មួយឈ្មោះ \`my_text_file.txt\` នៅក្នុង Internal Storage ។
    `,
    solution: `
\`\`\`kotlin
import android.content.Context
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import java.io.File

class MainActivity : AppCompatActivity() {

    private lateinit var contentEditText: EditText
    private lateinit var saveButton: Button
    private lateinit var savedContentTextView: TextView

    private val FILE_NAME = "my_text_file.txt"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        contentEditText = findViewById(R.id.content_edit_text)
        saveButton = findViewById(R.id.save_button)
        savedContentTextView = findViewById(R.id.saved_content_text_view)

        // អាន File នៅពេល App ចាប់ផ្តើម
        val savedText = readFromFile(this, FILE_NAME)
        savedContentTextView.text = "Saved Text: \$savedText"

        saveButton.setOnClickListener {
            val content = contentEditText.text.toString()
            saveToFile(this, FILE_NAME, content)
            savedContentTextView.text = "Saved Text: \$content"
        }
    }

    private fun saveToFile(context: Context, filename: String, content: String) {
        context.openFileOutput(filename, Context.MODE_PRIVATE).use {
            it.write(content.toByteArray())
        }
    }

    private fun readFromFile(context: Context, filename: String): String {
        val file = File(context.filesDir, filename)
        return if (file.exists()) {
            context.openFileInput(filename).bufferedReader().useLines { lines ->
                lines.fold("") { some, text ->
                    some + text
                }
            }
        } else {
            "No content saved yet."
        }
    }
}
\`\`\`
`
  }
};

export default KotlinLesson8_3Content;