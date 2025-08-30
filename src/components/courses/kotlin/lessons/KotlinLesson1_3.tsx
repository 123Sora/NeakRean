import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson1_3Content: LessonContent = {
  title: 'Android Studio Setup',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Android Studio',
    'រៀនពីរបៀបដំឡើង Android Studio',
    'ស្គាល់ពី Components សំខាន់ៗរបស់ Android Studio',
    'រៀនពីរបៀបបង្កើត Android Project ដំបូងរបស់អ្នក',
    'យល់ដឹងពីរបៀបដំណើរការ App នៅក្នុង Android Emulator ឬ Physical Device'
  ],
  content: `
# Android Studio Setup 💻

---

**Android Studio** គឺជា Integrated Development Environment (IDE) ផ្លូវការដែលផ្តល់ដោយ Google សម្រាប់ការអភិវឌ្ឍ Android ។ វាផ្អែកលើ IntelliJ IDEA របស់ JetBrains ដែលជាក្រុមហ៊ុនបង្កើត Kotlin ។ Android Studio ផ្តល់នូវសំណុំឧបករណ៍ (Tools) ដ៏ពេញលេញសម្រាប់ការសរសេរ Code, Debugging, Testing, និង Deploying ។

## 1. ការដំឡើង Android Studio

### ជំហានទី 1: ទាញយក
ចូលទៅកាន់គេហទំព័រផ្លូវការរបស់ Google ដើម្បីទាញយក Android Studio ។

### ជំហានទី 2: ការដំឡើង
ដំណើរការ Installer ដែលបានទាញយក។ ត្រូវប្រាកដថាអ្នកដំឡើង **Android SDK**, **Android SDK Platform-Tools**, និង **Android Emulator** ។

## 2. Components សំខាន់ៗរបស់ Android Studio

-   **Code Editor:** កន្លែងដែលអ្នកសរសេរ Code (Kotlin/Java) និង Design UI (XML) ។
-   **Project Pane:** បង្ហាញ Files និង Directories ទាំងអស់របស់ Project របស់អ្នក។
-   **Gradle:** Build System របស់ Android ។ វាគ្រប់គ្រង Dependencies និងការ Compile Project ។
-   **Logcat:** បង្ហាញ Logs ពី App របស់អ្នកនៅពេលវាដំណើរការ។ វាមានសារៈសំខាន់សម្រាប់ការ Debugging ។
-   **Layout Inspector:** ឧបករណ៍សម្រាប់ Debugging UI ។ វាបង្ហាញ Hierarchy របស់ Views នៅក្នុង App របស់អ្នក។

## 3. ការបង្កើត Project ដំបូង

### ជំហានទី 1: បើក Android Studio
ជ្រើសរើស "New Project" ។

### ជំហានទី 2: ជ្រើសរើស Project Template
ជ្រើសរើស "Empty Activity" ដែលជា Template សាមញ្ញបំផុត។

### ជំហានទី 3: កំណត់រចនាសម្ព័ន្ធ Project
-   **Name:** ឈ្មោះ Project របស់អ្នក (ឧ. MyFirstApp) ។
-   **Package name:** Unique Identifier របស់ App (ឧ. com.example.myfirstapp) ។
-   **Save location:** ទីតាំងដែល Project ត្រូវបានរក្សាទុក។
-   **Language:** ជ្រើសរើស **Kotlin** ។
-   **Minimum SDK:** ជ្រើសរើសកំណែ Android ទាបបំផុតដែល App របស់អ្នកនឹងដំណើរការ។

### ជំហានទី 4: បញ្ចប់
ចុច "Finish" ហើយ Android Studio នឹងចាប់ផ្តើមបង្កើត Project ។ នេះអាចចំណាយពេលពីរបីនាទី។

## 4. ការដំណើរការ App ដំបូងរបស់អ្នក

### ជំហានទី 1: បង្កើត Android Emulator
-   ទៅកាន់ **Device Manager** (រូបទូរស័ព្ទ) ។
-   ចុច "Create device" ។
-   ជ្រើសរើស Hardware Profile (ឧ. Pixel 5) ។
-   ជ្រើសរើស System Image (កំណែ Android) ។

### ជំហានទី 2: ដំណើរការ App
-   ជ្រើសរើស Emulator របស់អ្នកពី Menu នៅលើ Toolbar ។
-   ចុច Button **Run** (រូបត្រីកោណបៃតង) ។
-   Android Studio នឹង Compile Code របស់អ្នកហើយដំឡើង App នៅលើ Emulator ។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការមើល Code របស់ Main Activity</h3>
<p>នៅពេលអ្នកបង្កើត Empty Activity Project, អ្នកនឹងឃើញ File ពីរ៖ \`MainActivity.kt\` និង \`activity_main.xml\` ។</p>
<pre><code class="language-kotlin">
// MainActivity.kt
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}
</code></pre>
<p>Code នេះជាកន្លែងដែល Logic របស់ App របស់អ្នកត្រូវបានសរសេរ។</p>
<pre><code class="language-xml">
// activity_main.xml
&lt;?xml version="1.0" encoding="utf-8"?>
&lt;androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    &lt;TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

&lt;/androidx.constraintlayout.widget.ConstraintLayout>
</code></pre>
<p>Code នេះជាកន្លែងដែល UI របស់ App របស់អ្នកត្រូវបាន Design ។</p>
`
  ],
  quiz: [
    {
      question: 'តើ Android Studio គឺជាអ្វី?',
      options: [
        'Editor សម្រាប់ HTML',
        'IDE ផ្លូវការសម្រាប់ Android Development',
        'Compiler សម្រាប់ Java',
        'Emulator'
      ],
      correct: 1,
      explanation: 'Android Studio គឺជា IDE ផ្លូវការដែលផ្តល់ដោយ Google សម្រាប់ការអភិវឌ្ឍ Android ។'
    },
    {
      question: 'តើ IDE មានន័យដូចម្តេច?',
      options: [
        'Integrated Development Environment',
        'Internet Development Editor',
        'Interactive Debugging Editor',
        'Internal Development Environment'
      ],
      correct: 0,
      explanation: 'IDE គឺជាពាក្យកាត់សម្រាប់ Integrated Development Environment ។'
    },
    {
      question: 'តើ Language មួយណាដែលអ្នកត្រូវជ្រើសរើសនៅពេលបង្កើត Project ថ្មីសម្រាប់មេរៀននេះ?',
      options: [
        'Java',
        'C++',
        'Kotlin',
        'Python'
      ],
      correct: 2,
      explanation: 'អ្នកត្រូវជ្រើសរើស Kotlin ដើម្បីបន្តមេរៀន។'
    },
    {
      question: 'តើ Android Emulator ប្រើសម្រាប់អ្វី?',
      options: [
        'សរសេរ Code',
        'Debug Network Requests',
        'ធ្វើត្រាប់តាម Device និម្មិតដើម្បីដំណើរការ App',
        'គ្រប់គ្រង Project Files'
      ],
      correct: 2,
      explanation: 'Emulator ត្រូវបានប្រើដើម្បីដំណើរការ App របស់អ្នកនៅលើ Device និម្មិត។'
    },
    {
      question: 'តើ File `activity_main.xml` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Logic',
        'គ្រប់គ្រង UI Layout',
        'គ្រប់គ្រង Data',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`activity_main.xml` គឺជា File XML សម្រាប់ Design UI Layout ។'
    },
    {
      question: 'តើ `Logcat` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញ UI',
        'បង្ហាញ Logs របស់ App',
        'បង្ហាញ Code',
        'បង្កើត Project'
      ],
      correct: 1,
      explanation: 'Logcat គឺជាឧបករណ៍សម្រាប់បង្ហាញ Logs ពី App របស់អ្នក។'
    },
    {
      question: 'តើ `Minimum SDK` កំណត់អ្វីខ្លះ?',
      options: [
        'ទំហំ Project',
        'កំណែ Android ទាបបំផុតដែល App នឹងដំណើរការ',
        'កំណែ Kotlin',
        'ចំនួន Libraries'
      ],
      correct: 1,
      explanation: 'Minimum SDK កំណត់កំណែ Android ទាបបំផុតដែល App របស់អ្នកអាចដំណើរការបាន។'
    },
    {
      question: 'តើ `Gradle` នៅក្នុង Android Studio គឺជាអ្វី?',
      options: [
        'UI Tool',
        'Build System',
        'Testing Framework',
        'Database'
      ],
      correct: 1,
      explanation: 'Gradle គឺជា Build System ដែលគ្រប់គ្រង Dependencies និងការ Compile Project ។'
    },
    {
      question: 'តើការដំឡើង Android Studio ទាមទារឱ្យមានការដំឡើង Components ណាខ្លះ?',
      options: [
        'Android SDK',
        'Android SDK Platform-Tools',
        'Android Emulator',
        'គ្រប់ចម្លើយទាំងអស់'
      ],
      correct: 3,
      explanation: 'ដើម្បីឱ្យ Android Studio ដំណើរការបានត្រឹមត្រូវ អ្នកត្រូវដំឡើង Components ទាំងនេះ។'
    },
    {
      question: 'តើ `setContentView()` នៅក្នុង `MainActivity.kt` ធ្វើអ្វី?',
      options: [
        'កំណត់ Content របស់ TextView',
        'ភ្ជាប់ Code (Activity) ជាមួយ UI Layout (XML)',
        'កំណត់ Content របស់ Button',
        'បង្កើត UI'
      ],
      correct: 1,
      explanation: '`setContentView()` ភ្ជាប់ File Kotlin Code ជាមួយ UI Layout (XML) ។'
    }
  ],
  lab: {
    task: `
បង្កើត Android Project ដំបូងរបស់អ្នកនៅក្នុង Android Studio ហើយដំណើរការវា។

**តម្រូវការ:**

1.  **Project Creation:**
    -   បើក Android Studio ។
    -   បង្កើត Project ថ្មីមួយ។
    -   ជ្រើសរើស **Empty Activity** Template ។
    -   កំណត់ **Language** ទៅជា **Kotlin** ។

2.  **App Modification:**
    -   ចូលទៅកាន់ File \`activity_main.xml\` ។
    -   ផ្លាស់ប្តូរ Text "Hello World!" ទៅជា "Hello, I am [Your Name]!" ។

3.  **App Run:**
    -   បង្កើត Android Emulator មួយ។
    -   ដំណើរការ App នៅលើ Emulator នោះ។

**ការណែនាំ:** ប្រសិនបើអ្នកជួបបញ្ហា សូមពិនិត្យមើល Logcat ដើម្បីមើល Error Message ។
    `,
    solution: `
\`\`\`xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/myTextView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello, I am [Your Name]!"
        android:textSize="24sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
\`\`\`
<p>
**ចំណាំ:** អ្នកមិនចាំបាច់កែប្រែ Code នៅក្នុង \`MainActivity.kt\` ទេ ព្រោះការផ្លាស់ប្តូរត្រូវបានធ្វើនៅក្នុង File XML ។
</p>
`
  }
};

export default KotlinLesson1_3Content;