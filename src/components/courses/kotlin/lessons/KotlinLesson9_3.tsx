import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson9_3Content: LessonContent = {
  title: 'Secure Storage',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Secure Data Storage',
    'ស្គាល់ពី Android Keystore System',
    'រៀនពីរបៀបប្រើ EncryptedSharedPreferences',
    'យល់ដឹងពីរបៀបប្រើ Encrypted File Storage',
    'អនុវត្តការរក្សាទុក Sensitive Data ឱ្យមានសុវត្ថិភាព'
  ],
  content: `
# Secure Storage 🛡️

---

ការរក្សាទុក Sensitive Data ដូចជា API Keys, User Tokens, ឬ Financial Data នៅក្នុង App គឺជាកិច្ចការដ៏សំខាន់និងមានហានិភ័យ។ យើងត្រូវប្រើវិធីសាស្ត្រដែលមានសុវត្ថិភាពដើម្បីការពារ Data ទាំងនោះពី Hacker ។

## 1. ហេតុអ្វីត្រូវប្រើ Secure Storage?

-   **Data Breaches:** ការរក្សាទុក Data ក្នុង File ធម្មតាអាចត្រូវបាន Access ដោយ Hacker ។
-   **Security:** ការប្រើ Secure Storage នឹង Encrypt Data របស់អ្នក។
-   **Compliance:** គោរពតាមតម្រូវការសុវត្ថិភាព។

## 2. Android Keystore System

**Android Keystore System** គឺជា Component របស់ Android ដែលអនុញ្ញាតឱ្យយើងរក្សាទុក Cryptographic Keys នៅក្នុង Container ដែលមានសុវត្ថិភាព។ Key ទាំងនោះមិនអាចត្រូវបាន Extract ពី Device បានឡើយ។

## 3. EncryptedSharedPreferences

\`EncryptedSharedPreferences\` គឺជា Wrapper លើ SharedPreferences ដែល Encrypt Data របស់វាដោយស្វ័យប្រវត្តិ។

### របៀបប្រើ EncryptedSharedPreferences
1.  **Dependencies:**
    \`\`\`groovy
    dependencies {
        implementation("androidx.security:security-crypto:1.1.0-alpha06")
    }
    \`\`\`
2.  **Implement Logic:**
    \`\`\`kotlin
    import android.content.Context
    import androidx.security.crypto.EncryptedSharedPreferences
    import androidx.security.crypto.MasterKeys

    val masterKeyAlias = MasterKeys.getOrCreate(MasterKeys.AES256_GCM_SPEC)
    
    fun getEncryptedSharedPreferences(context: Context): EncryptedSharedPreferences {
        return EncryptedSharedPreferences.create(
            context,
            "secret_shared_prefs",
            masterKeyAlias,
            EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
            EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
        ) as EncryptedSharedPreferences
    }
    
    // រក្សាទុក Data
    fun saveSecret(context: Context, key: String, value: String) {
        val sharedPrefs = getEncryptedSharedPreferences(context)
        with(sharedPrefs.edit()) {
            putString(key, value)
            apply()
        }
    }
    \`\`\`
-   \`MasterKeys.AES256_GCM_SPEC\` ប្រើសម្រាប់បង្កើត Master Key ។

## 4. Encrypted File Storage

\`EncryptedFile\` គឺជា Class សម្រាប់ Encrypt File ទាំងមូល។ វាល្អសម្រាប់រក្សាទុក Files ដែលមាន Sensitive Data ។

### របៀបប្រើ EncryptedFile
\`\`\`kotlin
import java.io.File
import androidx.security.crypto.EncryptedFile
import androidx.security.crypto.MasterKeys

// រក្សាទុក Data
fun saveToFile(context: Context, filename: String, content: String) {
    val masterKeyAlias = MasterKeys.getOrCreate(MasterKeys.AES256_GCM_SPEC)
    val file = File(context.filesDir, filename)
    val encryptedFile = EncryptedFile.Builder(
        context,
        file,
        masterKeyAlias,
        EncryptedFile.FileEncryptionScheme.AES256_GCM_HKDF_4KB
    ).build()
    
    encryptedFile.openFileOutput().bufferedWriter().use { writer ->
        writer.write(content)
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការអានពី EncryptedSharedPreferences</h3>
<p>ការអាន Data ពី \`EncryptedSharedPreferences\` គឺដូចគ្នានឹង SharedPreferences ធម្មតាដែរ។</p>
<pre><code class="language-kotlin">
fun readSecret(context: Context, key: String): String? {
    val sharedPrefs = getEncryptedSharedPreferences(context)
    return sharedPrefs.getString(key, null)
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Android Keystore System ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់រក្សាទុក Password',
        'សម្រាប់រក្សាទុក Cryptographic Keys',
        'សម្រាប់រក្សាទុក Text File',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Android Keystore System ប្រើសម្រាប់រក្សាទុក Cryptographic Keys នៅក្នុង Container ដែលមានសុវត្ថិភាព។'
    },
    {
      question: 'តើ `EncryptedSharedPreferences` ធ្វើអ្វីខ្លះ?',
      options: [
        'រក្សាទុក Data ក្នុង Plain Text',
        'Encrypt Data ដោយស្វ័យប្រវត្តិ',
        'រក្សាទុក Data ក្នុង Database',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`EncryptedSharedPreferences` Encrypt Data របស់វាដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ `MasterKeys.AES256_GCM_SPEC` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់បង្កើត Access Token',
        'សម្រាប់បង្កើត Master Key',
        'សម្រាប់ Encrypt File',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`MasterKeys.AES256_GCM_SPEC` ប្រើសម្រាប់បង្កើត Master Key ។'
    },
    {
      question: 'តើ `EncryptedFile` ល្អសម្រាប់ Data ប្រភេទណា?',
      options: [
        'សម្រាប់ Small Key-Value Data',
        'សម្រាប់ Large File',
        'សម្រាប់ Database',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`EncryptedFile` ល្អបំផុតសម្រាប់ Encrypt File ទាំងមូល។'
    },
    {
      question: 'តើ SharedPreferences ធម្មតាមានសុវត្ថិភាពសម្រាប់ Sensitive Data ដែរឬទេ?',
      options: [
        'មានសុវត្ថិភាព',
        'មិនមានសុវត្ថិភាពទេ',
        'បានតែពេលប្រើ ProGuard',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'SharedPreferences ធម្មតាមិន Encrypt Data ទេ។'
    },
    {
      question: 'តើ `security-crypto` Library ផ្តល់អ្វីខ្លះ?',
      options: [
        'Provides Database Access',
        'Provides UI Components',
        'Provides Encryption Utilities',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`security-crypto` Library ផ្តល់ Encryption Utilities ដូចជា `EncryptedSharedPreferences` ។'
    },
    {
      question: 'តើ Cryptographic Key ដែលបានរក្សាទុកនៅក្នុង Android Keystore អាចត្រូវបាន Extract ពី Device បានដែរឬទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេល Root Device',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Key ដែលនៅក្នុង Android Keystore មិនអាចត្រូវបាន Extract ពី Device បានទេ។'
    },
    {
      question: 'តើ `openFileOutput()` របស់ `EncryptedFile` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់អាន Data',
        'សម្រាប់សរសេរ Data',
        'សម្រាប់លុប Data',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`openFileOutput()` ប្រើសម្រាប់សរសេរ Data ទៅក្នុង Encrypted File ។'
    },
    {
      question: 'តើ `AES256_GCM_SPEC` គឺជាអ្វី?',
      options: [
        'ជា Algorithm សម្រាប់ Encrypt',
        'ជា Class សម្រាប់ Encrypt',
        'ជា Master Key',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`AES256_GCM_SPEC` គឺជា Algorithm Specification សម្រាប់ Encrypt ។'
    },
    {
      question: 'តើ Secure Storage ជួយការពារពីបញ្ហាអ្វី?',
      options: [
        'Data Breaches',
        'Poor Performance',
        'ANR',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Secure Storage ជួយការពារ App របស់អ្នកពី Data Breaches ។'
    }
  ],
  lab: {
    task: `
បង្កើត App មួយដើម្បីរក្សាទុក Secret API Key របស់អ្នកដោយប្រើ \`EncryptedSharedPreferences\` ។

**តម្រូវការ:**

1.  **Dependencies:**
    -   បន្ថែម \`security-crypto\` Dependency ។

2.  **UI:**
    -   មាន \`EditText\` មួយសម្រាប់ Input Secret Key ។
    -   មាន \`Button\` មួយសម្រាប់ Save Secret Key ។
    -   មាន \`TextView\` មួយសម្រាប់បង្ហាញ Secret Key ដែលបាន Save ។

3.  **Logic:**
    -   បង្កើត Utility Function សម្រាប់ \`EncryptedSharedPreferences\` ។
    -   នៅពេលចុច Button, ទទួលបាន Text ពី EditText ហើយ Save វានៅក្នុង EncryptedSharedPreferences ។
    -   នៅពេល App ចាប់ផ្តើម, អាន Secret Key ដែលបាន Save ហើយបង្ហាញវានៅលើ TextView ។
    `,
    solution: `
\`\`\`kotlin
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.security.crypto.EncryptedSharedPreferences
import androidx.security.crypto.MasterKeys

class MainActivity : AppCompatActivity() {

    private lateinit var secretEditText: EditText
    private lateinit var saveButton: Button
    private lateinit var savedSecretTextView: TextView

    private val KEY_SECRET = "api_secret_key"
    private lateinit var encryptedSharedPreferences: EncryptedSharedPreferences

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        secretEditText = findViewById(R.id.secret_edit_text)
        saveButton = findViewById(R.id.save_button)
        savedSecretTextView = findViewById(R.id.saved_secret_text_view)

        setupEncryptedSharedPreferences()
        loadSecretKey()

        saveButton.setOnClickListener {
            val secretKey = secretEditText.text.toString()
            saveSecretKey(secretKey)
            loadSecretKey()
        }
    }

    private fun setupEncryptedSharedPreferences() {
        val masterKeyAlias = MasterKeys.getOrCreate(MasterKeys.AES256_GCM_SPEC)
        encryptedSharedPreferences = EncryptedSharedPreferences.create(
            this,
            "secret_prefs",
            masterKeyAlias,
            EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
            EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
        ) as EncryptedSharedPreferences
    }

    private fun saveSecretKey(secretKey: String) {
        with(encryptedSharedPreferences.edit()) {
            putString(KEY_SECRET, secretKey)
            apply()
        }
    }

    private fun loadSecretKey() {
        val savedKey = encryptedSharedPreferences.getString(KEY_SECRET, "Not set")
        savedSecretTextView.text = "Saved Secret Key: \n\$savedKey"
    }
}
\`\`\`
`
  }
};

export default KotlinLesson9_3Content;