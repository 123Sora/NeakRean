import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson9_2Content: LessonContent = {
  title: 'OAuth Integration',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា OAuth 2.0',
    'រៀបចំ Project សម្រាប់ Google Sign-In',
    'អនុវត្តការ Login ជាមួយ Google Sign-In',
    'យល់ដឹងពីរបៀបទទួលបាន User Profile Data',
    'គ្រប់គ្រង Token សម្រាប់ API Calls'
  ],
  content: `
# OAuth Integration 🌐

---

**OAuth (Open Authorization)** គឺជា Protocol ស្តង់ដារមួយដែលអនុញ្ញាតឱ្យ User ផ្តល់សិទ្ធិឱ្យ App របស់អ្នកចូលប្រើ Data របស់ពួកគេនៅលើ Service ផ្សេង (ឧ. Google, Facebook) ដោយមិនបាច់ចែករំលែក Password ។

## 1. OAuth vs. Firebase Auth

-   **Firebase Auth:** ងាយស្រួលនិងលឿនបំផុតសម្រាប់ Authentication ។
-   **OAuth Integration (ដោយផ្ទាល់):** ផ្តល់នូវភាពបត់បែនច្រើនជាងមុននិងអាចគ្រប់គ្រង Access Token ដោយខ្លួនឯង។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបធ្វើ OAuth ជាមួយ Google Sign-In ។

## 2. ការរៀបចំ Project ជាមួយ Google Sign-In

### ជំហានទី ១: បង្កើត Project នៅ Google Console
-   ចូលទៅ Google Cloud Console ហើយបង្កើត Project ថ្មី។
-   បង្កើត **OAuth 2.0 Client ID** សម្រាប់ Android App របស់អ្នកដោយបញ្ចូល Package Name និង SHA-1 Key ។

### ជំហានទី ២: បន្ថែម Dependencies
\`\`\`groovy
dependencies {
    implementation("com.google.android.gms:play-services-auth:21.2.0")
}
\`\`\`

## 3. Google Sign-In Logic

### Step 1: Configurate GoogleSignInClient
\`\`\`kotlin
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions

private lateinit var googleSignInClient: GoogleSignInClient

// នៅក្នុង onCreate()
val gso = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
    .requestEmail()
    .build()

googleSignInClient = GoogleSignIn.getClient(this, gso)
\`\`\`

### Step 2: Launch Sign-In Intent
យើងប្រើ \`signInLauncher\` ដើម្បីហៅ Google Sign-In Screen ។
\`\`\`kotlin
private val signInLauncher = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
    val task = GoogleSignIn.getSignedInAccountFromIntent(result.data)
    try {
        val account = task.getResult(ApiException::class.java)
        // Sign-in ជោគជ័យ
        val email = account.email
        // ... navigate
    } catch (e: ApiException) {
        // Sign-in failed
    }
}

fun signInWithGoogle() {
    val signInIntent = googleSignInClient.signInIntent
    signInLauncher.launch(signInIntent)
}
\`\`\`

## 4. គ្រប់គ្រង User Data & Token

-   **Profile Data:** \`GoogleSignInAccount\` Object មានផ្ទុកព័ត៌មានរបស់ User ដូចជា email, displayName, photoUrl ។
-   **Token:** យើងអាចទទួលបាន ID Token ឬ Access Token ដើម្បីប្រើប្រាស់ជាមួយ Backend Server ផ្ទាល់ខ្លួន។

## 5. Sign Out

ដើម្បី Logout User ពី Google Account យើងប្រើ \`signOut()\` ។
\`\`\`kotlin
fun signOutFromGoogle() {
    googleSignInClient.signOut()
        .addOnCompleteListener(this) {
            // Logout successful
        }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការទទួលបាន ID Token</h3>
<p>យើងអាចទទួលបាន ID Token ពី \`GoogleSignInAccount\` ដើម្បីផ្ញើទៅ Backend Server សម្រាប់ Authentication ។</p>
<pre><code class="language-kotlin">
fun handleSignInResult(completedTask: Task<GoogleSignInAccount>) {
    try {
        val account = completedTask.getResult(ApiException::class.java)
        val idToken = account.idToken // ទទួលបាន ID Token
        // ... ផ្ញើ ID Token ទៅ Backend Server
    } catch (e: ApiException) {
        Log.w("GoogleSignIn", "signInResult:failed code=" + e.statusCode)
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ OAuth គឺជាអ្វី?',
      options: [
        'ជា Library សម្រាប់ Database',
        'ជា Protocol សម្រាប់ Authorization',
        'ជា Library សម្រាប់ Network',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'OAuth គឺជា Protocol សម្រាប់ Authorization ដែលអនុញ្ញាតឱ្យ App ចូលប្រើ Data ដោយមិនបាច់មាន Password ។'
    },
    {
      question: 'តើ Google Sign-In ផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះ?',
      options: [
        'ធ្វើឱ្យ User Login បានលឿន',
        'មានសុវត្ថិភាព',
        'ទទួលបាន User Profile Data',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 3,
      explanation: 'Google Sign-In ធ្វើឱ្យ User Login បានលឿន មានសុវត្ថិភាព និងទទួលបាន User Profile Data ។'
    },
    {
      question: 'តើ `GoogleSignInOptions.DEFAULT_SIGN_IN` ធ្វើអ្វី?',
      options: [
        'ស្នើសុំ Email Permission',
        'ស្នើសុំ Basic Profile Data',
        'ស្នើសុំ All Permissions',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`DEFAULT_SIGN_IN` ស្នើសុំ Basic Profile Data ដូចជា ID និង Basic Profile ។'
    },
    {
      question: 'តើ `registerForActivityResult` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ចាប់ផ្តើម Activity ដោយរង់ចាំ Result',
        'សម្រាប់ចាប់ផ្តើម Activity ដោយមិនរង់ចាំ Result',
        'សម្រាប់រៀបចំ Layout',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`registerForActivityResult` ប្រើសម្រាប់ចាប់ផ្តើម Activity ដោយរង់ចាំ Result ត្រឡប់មកវិញ។'
    },
    {
      question: 'តើ SHA-1 Key ប្រើសម្រាប់អ្វីនៅក្នុង Google Console?',
      options: [
        'សម្រាប់ Encrypt Data',
        'សម្រាប់បញ្ជាក់ Identity របស់ App',
        'សម្រាប់រក្សាទុក Password',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'SHA-1 Key ប្រើសម្រាប់បញ្ជាក់ Identity របស់ App របស់អ្នក។'
    },
    {
      question: 'តើ Access Token ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Login User',
        'សម្រាប់ Access Protected Resources នៅលើ Server',
        'សម្រាប់រក្សាទុក Local Data',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Access Token ប្រើសម្រាប់ Access Protected Resources នៅលើ Server ។'
    },
    {
      question: 'តើ `signOut()` ធ្វើអ្វី?',
      options: [
        'លុប User Account',
        'Logout User ពី Google Account',
        'Logout User ពី App តែប៉ុណ្ណោះ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`signOut()` ធ្វើការ Logout User ពី Google Account ។'
    },
    {
      question: 'តើ `GoogleSignInClient` គឺជាអ្វី?',
      options: [
        'ជា Class សម្រាប់ Configuration',
        'ជា Class ដែលគ្រប់គ្រង Google Sign-In Flow',
        'ជា UI Component',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`GoogleSignInClient` គឺជា Class ដែលគ្រប់គ្រង Google Sign-In Flow ។'
    },
    {
      question: 'តើ `requestEmail()` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ស្នើសុំ Email Address',
        'សម្រាប់ស្នើសុំ User ID',
        'សម្រាប់ស្នើសុំ User Name',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`requestEmail()` ប្រើសម្រាប់ស្នើសុំ Email Address របស់ User ។'
    },
    {
      question: 'តើ Google Sign-In ត្រូវការ Backend Server ដែរឬទេ?',
      options: [
        'បានតែពេលប្រើ ID Token',
        'មិនត្រូវការទេ',
        'បានតែពេលធ្វើ Login',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'ប្រសិនបើអ្នកចង់ផ្ទៀងផ្ទាត់ Authentication នៅលើ Backend Server អ្នកត្រូវផ្ញើ ID Token ។'
    }
  ],
  lab: {
    task: `
បង្កើត App មួយដែលមាន Button សម្រាប់ Google Sign-In ។ នៅពេលចុច Button, Login ជាមួយ Google Account ហើយបង្ហាញព័ត៌មានរបស់ User ដូចជា Name និង Email ។

**តម្រូវការ:**

1.  **Project:**
    -   រៀបចំ Google Sign-In Project នៅ Google Cloud Console ។
    -   បន្ថែម \`play-services-auth\` Dependency ។

2.  **UI:**
    -   មាន \`SignInButton\` ឬ \`Button\` មួយសម្រាប់ Sign-In ។
    -   មាន \`TextView\` ពីរសម្រាប់បង្ហាញ Name និង Email ។
    -   មាន \`Button\` មួយសម្រាប់ Sign-Out ។

3.  **Logic:**
    -   Implement Google Sign-In Flow ។
    -   នៅពេល Sign-In ជោគជ័យ, ទទួលបាន \`GoogleSignInAccount\` ហើយបង្ហាញ Name និង Email របស់ User ។
    -   Implement Sign-Out Functionality ។
    `,
    solution: `
\`\`\`kotlin
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.SignInButton
import com.google.android.gms.common.api.ApiException

class MainActivity : AppCompatActivity() {

    private lateinit var googleSignInClient: GoogleSignInClient
    private lateinit var signInButton: SignInButton
    private lateinit var signOutButton: Button
    private lateinit var nameTextView: TextView
    private lateinit var emailTextView: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val gso = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestEmail()
            .build()
        googleSignInClient = GoogleSignIn.getClient(this, gso)

        signInButton = findViewById(R.id.sign_in_button)
        signOutButton = findViewById(R.id.sign_out_button)
        nameTextView = findViewById(R.id.name_text_view)
        emailTextView = findViewById(R.id.email_text_view)

        signInButton.setOnClickListener { signIn() }
        signOutButton.setOnClickListener { signOut() }

        updateUI()
    }

    private fun updateUI() {
        val account = GoogleSignIn.getLastSignedInAccount(this)
        if (account != null) {
            nameTextView.text = "Name: \${account.displayName}"
            emailTextView.text = "Email: \${account.email}"
            signInButton.visibility = android.view.View.GONE
            signOutButton.visibility = android.view.View.VISIBLE
        } else {
            nameTextView.text = "Name: Not signed in"
            emailTextView.text = "Email: Not signed in"
            signInButton.visibility = android.view.View.VISIBLE
            signOutButton.visibility = android.view.View.GONE
        }
    }

    private fun signIn() {
        val signInIntent = googleSignInClient.signInIntent
        signInLauncher.launch(signInIntent)
    }

    private val signInLauncher = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
        val task = GoogleSignIn.getSignedInAccountFromIntent(result.data)
        try {
            val account = task.getResult(ApiException::class.java)
            updateUI()
        } catch (e: ApiException) {
            // ... show error
        }
    }

    private fun signOut() {
        googleSignInClient.signOut()
            .addOnCompleteListener(this) {
                updateUI()
            }
    }
}
\`\`\`
`
  }
};

export default KotlinLesson9_2Content;