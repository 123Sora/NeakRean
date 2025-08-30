import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson9_1Content: LessonContent = {
  title: 'Firebase Authentication',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃការប្រើប្រាស់ Firebase Auth',
    'រៀបចំ Project ជាមួយ Firebase Authentication',
    'អនុវត្តការ Login និង Register ជាមួយ Email & Password',
    'រៀនពីរបៀបធ្វើ Reset Password',
    'គ្រប់គ្រង User Session'
  ],
  content: `
# Firebase Authentication 🔒

---

**Firebase Authentication** គឺជា Backend-as-a-Service (BaaS) ដ៏ពេញនិយមមួយរបស់ Google ដែលផ្តល់នូវ Authentication Solution យ៉ាងងាយស្រួលនិងសុវត្ថិភាព។ វាជួយឱ្យយើងគ្រប់គ្រង User Registration, Login, និង Session Management ដោយមិនបាច់បង្កើត Backend Server ដោយខ្លួនឯង។

## 1. ហេតុអ្វីត្រូវប្រើ Firebase Auth?

-   **ងាយស្រួលប្រើ:** ផ្តល់នូវ Library និង SDK ដែលងាយស្រួល Implement ។
-   **Method ច្រើន:** Support Authentication Methods ជាច្រើនដូចជា Email/Password, Google Sign-In, Facebook, Phone Number, Anonymous, etc.
-   **Security:** Firebase គ្រប់គ្រង Security ទាំងអស់ឱ្យយើង។

## 2. ការរៀបចំ Project

### ជំហានទី ១: បន្ថែម Firebase ទៅ Project
-   ចូលទៅ **Tools -> Firebase** នៅក្នុង Android Studio ។
-   ជ្រើសរើស **Authentication** ហើយធ្វើតាមជំហានដែលវាណែនាំ។

### ជំហានទី ២: បន្ថែម Dependencies
\`\`\`groovy
dependencies {
    implementation(platform("com.google.firebase:firebase-bom:33.1.0"))
    implementation("com.google.firebase:firebase-auth")
}
\`\`\`
ត្រូវប្រាកដថាបានបន្ថែម Google Services Plugin ផងដែរ។

## 3. Email & Password Authentication

### Step 1: Register User
យើងប្រើ \`createUserWithEmailAndPassword\` ដើម្បីបង្កើត User ថ្មី។
\`\`\`kotlin
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase

private lateinit var auth: FirebaseAuth

// នៅក្នុង onCreate()
auth = Firebase.auth

fun registerUser(email: String, password: String) {
    auth.createUserWithEmailAndPassword(email, password)
        .addOnCompleteListener(this) { task ->
            if (task.isSuccessful) {
                // Sign in success, update UI with the signed-in user's information
                val user = auth.currentUser
                // ... update UI
            } else {
                // If sign in fails, display a message to the user.
                // ... show error message
            }
        }
}
\`\`\`

### Step 2: Login User
យើងប្រើ \`signInWithEmailAndPassword\` ដើម្បី Login User ដែលមានស្រាប់។
\`\`\`kotlin
fun loginUser(email: String, password: String) {
    auth.signInWithEmailAndPassword(email, password)
        .addOnCompleteListener(this) { task ->
            if (task.isSuccessful) {
                // Sign in success
                val user = auth.currentUser
                // ... navigate to main screen
            } else {
                // If sign in fails
                // ... show error message
            }
        }
}
\`\`\`

## 4. គ្រប់គ្រង User Session

-   **Current User:** យើងអាចទទួលបាន User ដែលបាន Login ដោយប្រើ \`auth.currentUser\` ។
-   **Sign Out:** យើងប្រើ \`auth.signOut()\` ដើម្បី Logout User ។
-   **AuthStateListener:** យើងអាចស្តាប់ការប្រែប្រួលរបស់ Auth State ដោយប្រើ \`addAuthStateListener\` ។

\`\`\`kotlin
fun logout() {
    auth.signOut()
}

fun isUserLoggedIn(): Boolean {
    return auth.currentUser != null
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`AuthStateListener\`</h3>
<p>យើងអាចស្តាប់ការប្រែប្រួលរបស់ Auth State ដើម្បី Update UI ដោយស្វ័យប្រវត្តិ។</p>
<pre><code class="language-kotlin">
private val authStateListener = FirebaseAuth.AuthStateListener { firebaseAuth ->
    val user = firebaseAuth.currentUser
    if (user != null) {
        // User is signed in
        Log.d("Auth", "User is signed in with uid: \${user.uid}")
    } else {
        // User is signed out
        Log.d("Auth", "User is signed out")
    }
}

// នៅក្នុង onStart()
override fun onStart() {
    super.onStart()
    auth.addAuthStateListener(authStateListener)
}

// នៅក្នុង onStop()
override fun onStop() {
    super.onStop()
    auth.removeAuthStateListener(authStateListener)
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Firebase Authentication គឺជាអ្វី?',
      options: [
        'ជា Library សម្រាប់ Database',
        'ជា Backend-as-a-Service សម្រាប់ Authentication',
        'ជា Library សម្រាប់ UI',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Firebase Auth គឺជា BaaS ដែលផ្តល់ Authentication Solution ។'
    },
    {
      question: 'តើ `createUserWithEmailAndPassword` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ Login User',
        'សម្រាប់ Register User ថ្មី',
        'សម្រាប់ Reset Password',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`createUserWithEmailAndPassword` ប្រើសម្រាប់ Register User ថ្មី។'
    },
    {
      question: 'តើ `auth.currentUser` ត្រឡប់អ្វី បើ User មិនទាន់ Login?',
      options: [
        'User Object',
        'Null',
        'Error',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'វាត្រឡប់ Null ប្រសិនបើ User មិនទាន់ Login ។'
    },
    {
      question: 'តើ `auth.signOut()` ធ្វើអ្វី?',
      options: [
        'លុប User Account',
        'Reset Password',
        'Logout User',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`auth.signOut()` ធ្វើការ Logout User ។'
    },
    {
      question: 'តើ Firebase Auth អាចគ្រប់គ្រង User Session បានដោយរបៀបណា?',
      options: [
        'ដោយប្រើ Backend API',
        'ដោយស្វ័យប្រវត្តិ',
        'ដោយប្រើ Local Storage',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Firebase Auth គ្រប់គ្រង User Session ដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ `AuthStateListener` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីធ្វើ Network Request',
        'ដើម្បីស្តាប់ការប្រែប្រួលរបស់ Auth State',
        'ដើម្បីធ្វើ UI Update',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`AuthStateListener` ប្រើដើម្បីស្តាប់ការប្រែប្រួលរបស់ Auth State ។'
    },
    {
      question: 'តើ Firebase Auth Support Authentication Methods អ្វីខ្លះ?',
      options: [
        'Email/Password',
        'Google Sign-In',
        'Phone Number',
        'ទាំងអស់ខាងលើ'
      ],
      correct: 3,
      explanation: 'Firebase Auth Support Methods ជាច្រើន។'
    },
    {
      question: 'តើ `addOnCompleteListener` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីស្តាប់ Result របស់ Task',
        'ដើម្បីចាប់ផ្តើម Task',
        'ដើម្បីលុប Task',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`addOnCompleteListener` ប្រើដើម្បីស្តាប់ Result របស់ Asynchronous Task ។'
    },
    {
      question: 'តើ Firebase Auth ត្រូវការ Backend Server ដែរឬទេ?',
      options: [
        'ត្រូវការ',
        'មិនត្រូវការទេ',
        'បានតែពេលធ្វើ Login',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Firebase Auth ជួយឱ្យយើងមិនបាច់បង្កើត Backend Server សម្រាប់ Authentication ទេ។'
    },
    {
      question: 'តើ Firebase Auth មានសុវត្ថិភាពឬទេ?',
      options: [
        'មានសុវត្ថិភាព',
        'មិនមានសុវត្ថិភាព',
        'មានសុវត្ថិភាពតិចតួច',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Firebase Auth ត្រូវបានរចនាឡើងដើម្បីផ្តល់នូវ Security ល្អ។'
    }
  ],
  lab: {
    task: `
បង្កើត App មួយដែលមាន Login Screen និង Home Screen ។ ប្រើ Firebase Authentication ដើម្បីគ្រប់គ្រង User Login និង Logout ។

**តម្រូវការ:**

1.  **Project:**
    -   ភ្ជាប់ Project ជាមួយ Firebase ។
    -   Enable Email/Password Sign-in Method នៅក្នុង Firebase Console ។

2.  **UI:**
    -   **Login Screen:** មាន \`EditText\` ពីរសម្រាប់ Email និង Password, \`Button\` មួយសម្រាប់ Login និង \`Button\` មួយសម្រាប់ Register ។
    -   **Home Screen:** មាន \`TextView\` សម្រាប់បង្ហាញ Email របស់ User និង \`Button\` សម្រាប់ Logout ។

3.  **Logic:**
    -   ប្រើ Firebase Auth ដើម្បី Login និង Register User ។
    -   នៅពេល Login ជោគជ័យ, Navigate ទៅ Home Screen ។
    -   នៅពេល Logout, Navigate ទៅ Login Screen វិញ។
    -   នៅពេល App ចាប់ផ្តើម, ពិនិត្យមើល \`auth.currentUser\` ។ បើមាន, ទៅ Home Screen ផ្ទាល់។
    `,
    solution: `
\`\`\`kotlin
// MainActivity.kt (Login Screen)
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase

class MainActivity : AppCompatActivity() {

    private lateinit var auth: FirebaseAuth
    private lateinit var emailEditText: EditText
    private lateinit var passwordEditText: EditText
    private lateinit var loginButton: Button
    private lateinit var registerButton: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        auth = Firebase.auth
        emailEditText = findViewById(R.id.email_edit_text)
        passwordEditText = findViewById(R.id.password_edit_text)
        loginButton = findViewById(R.id.login_button)
        registerButton = findViewById(R.id.register_button)

        if (auth.currentUser != null) {
            startActivity(Intent(this, HomeActivity::class.java))
            finish()
        }

        loginButton.setOnClickListener {
            val email = emailEditText.text.toString()
            val password = passwordEditText.text.toString()
            if (email.isNotEmpty() && password.isNotEmpty()) {
                auth.signInWithEmailAndPassword(email, password)
                    .addOnCompleteListener(this) { task ->
                        if (task.isSuccessful) {
                            startActivity(Intent(this, HomeActivity::class.java))
                            finish()
                        } else {
                            Toast.makeText(this, "Login failed: \${task.exception?.message}", Toast.LENGTH_SHORT).show()
                        }
                    }
            }
        }

        registerButton.setOnClickListener {
            // Implement register logic similar to login
        }
    }
}

// HomeActivity.kt
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase

class HomeActivity : AppCompatActivity() {

    private lateinit var auth: FirebaseAuth
    private lateinit var userEmailTextView: TextView
    private lateinit var logoutButton: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)

        auth = Firebase.auth
        userEmailTextView = findViewById(R.id.user_email_text_view)
        logoutButton = findViewById(R.id.logout_button)

        userEmailTextView.text = auth.currentUser?.email ?: "Guest"

        logoutButton.setOnClickListener {
            auth.signOut()
            startActivity(Intent(this, MainActivity::class.java))
            finish()
        }
    }
}
\`\`\`
`
  }
};

export default KotlinLesson9_1Content;