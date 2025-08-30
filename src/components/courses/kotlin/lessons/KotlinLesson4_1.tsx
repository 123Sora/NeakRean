import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson4_1Content: LessonContent = {
  title: 'Navigation Component (Traditional Views)',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Navigation Component',
    'ស្គាល់ពី Components សំខាន់ៗរបស់ Navigation Component',
    'រៀនពីរបៀបប្រើប្រាស់ Navigation Graph',
    'យល់ដឹងពីរបៀប Navigate រវាង Fragments',
    'អនុវត្តការបញ្ជូនទិន្នន័យរវាង Destinations'
  ],
  content: `
# Navigation Component (Traditional Views) 🧭

---

**Navigation Component** គឺជា Library មួយរបស់ Android Jetpack ដែលជួយគ្រប់គ្រងការ Navigation (ការផ្លាស់ប្តូរអេក្រង់) នៅក្នុង App របស់អ្នក។ វាធ្វើឱ្យការផ្លាស់ប្តូររវាង Activities, Fragments, និង View-based UI ផ្សេងៗទៀតមានភាពងាយស្រួលនិងសុវត្ថិភាព។

## 1. Components សំខាន់ៗ

-   **Navigation Graph:** ជា XML Resource File ដែលជាកន្លែងកណ្តាលសម្រាប់គ្រប់គ្រងការ Navigation ទាំងអស់នៅក្នុង App របស់អ្នក។ វាបង្ហាញពី **Destinations** និង **Actions** ។
-   **NavHost:** ជា Container ទទេ (Empty Container) ដែលបង្ហាញ **Destinations** ពី Navigation Graph ។
-   **NavController:** ជា Object ដែលគ្រប់គ្រងការ Navigation នៅក្នុង \`NavHost\` ។ វាជា Brains របស់ Navigation Component ។



## 2. ការរៀបចំ Project

ដើម្បីប្រើ Navigation Component, អ្នកត្រូវបន្ថែម Dependencies ទៅក្នុង File \`build.gradle\` របស់ Module ។

\`\`\`groovy
dependencies {
    def nav_version = "2.7.0"
    
    // Kotlin
    implementation("androidx.navigation:navigation-fragment-ktx:$nav_version")
    implementation("androidx.navigation:navigation-ui-ktx:$nav_version")
}
\`\`\`

## 3. Navigation Graph

Navigation Graph គឺជា XML File ដែលត្រូវបានបង្កើតនៅក្នុង Folder \`res/navigation\` ។

\`\`\`xml
<navigation xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/nav_graph"
    app:startDestination="@id/homeFragment">

    <fragment
        android:id="@+id/homeFragment"
        android:name="com.example.myapp.HomeFragment"
        android:label="Home"
        tools:layout="@layout/fragment_home">
        <action
            android:id="@+id/action_homeFragment_to_detailFragment"
            app:destination="@id/detailFragment" />
    </fragment>
    
    <fragment
        android:id="@+id/detailFragment"
        android:name="com.example.myapp.DetailFragment"
        android:label="Detail"
        tools:layout="@layout/fragment_detail">
        <argument
            android:name="message"
            app:argType="string" />
    </fragment>
</navigation>
\`\`\`
-   **\`<fragment>\`**: តំណាងឱ្យ Destination ។
-   **\`<action>\`**: កំណត់ការផ្លាស់ប្តូរពី Destination មួយទៅ Destination មួយទៀត។
-   **\`<argument>\`**: សម្រាប់បញ្ជូនទិន្នន័យរវាង Destinations ។

## 4. ការ Navigate រវាង Fragments

យើងប្រើ \`NavController\` ដើម្បី Navigate ។

\`\`\`kotlin
// នៅក្នុង HomeFragment
override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)
    
    val button = view.findViewById<Button>(R.id.button)
    button.setOnClickListener {
        val action = HomeFragmentDirections.actionHomeFragmentToDetailFragment("Hello from Home!")
        findNavController().navigate(action)
    }
}
\`\`\`
-   **\`findNavController()\`**: ទទួលបាន Instance របស់ \`NavController\` ។
-   **Safe Args:** គឺជា Gradle Plugin ដែលបង្កើត Classes សុវត្ថិភាពសម្រាប់ Actions និង Arguments ។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការទទួលទិន្នន័យនៅក្នុង Destination</h3>
<p>យើងនឹងបង្ហាញពីរបៀបទទួល \`message\` Argument នៅក្នុង DetailFragment ។</p>
<pre><code class="language-kotlin">
import androidx.navigation.fragment.navArgs

class DetailFragment : Fragment(R.layout.fragment_detail) {
    private val args: DetailFragmentArgs by navArgs()
    
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        
        val message = args.message
        val textView = view.findViewById<TextView>(R.id.textView)
        textView.text = message
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Navigation Component ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Network Requests',
        'គ្រប់គ្រង State',
        'គ្រប់គ្រងការផ្លាស់ប្តូរអេក្រង់ (Navigation)',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Navigation Component ជួយគ្រប់គ្រងការ Navigation នៅក្នុង App ។'
    },
    {
      question: 'តើ `Navigation Graph` គឺជាអ្វី?',
      options: [
        'UI Component',
        'Database Schema',
        'XML File សម្រាប់គ្រប់គ្រង Navigation',
        'Kotlin Class'
      ],
      correct: 2,
      explanation: 'Navigation Graph គឺជា XML File ដែលបង្ហាញពី Destinations និង Actions ។'
    },
    {
      question: 'តើ `NavHost` គឺជាអ្វី?',
      options: [
        'Destination',
        'Container សម្រាប់បង្ហាញ Destinations',
        'Controller សម្រាប់ Navigation',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`NavHost` គឺជា Container ដែលបង្ហាញ Destinations ពី Navigation Graph ។'
    },
    {
      question: 'តើ `NavController` ប្រើសម្រាប់អ្វី?',
      options: [
        'រៀបចំ UI',
        'គ្រប់គ្រងការ Navigation',
        'គ្រប់គ្រងទិន្នន័យ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`NavController` គ្រប់គ្រងការ Navigation នៅក្នុង `NavHost` ។'
    },
    {
      question: 'តើ `Safe Args` ជួយអ្វីខ្លះ?',
      options: [
        'ជួយឱ្យ App លឿនជាងមុន',
        'បង្កើត Type-safe Classes សម្រាប់ Actions និង Arguments',
        'កាត់បន្ថយ Bug',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Safe Args គឺជា Plugin ដែលបង្កើត Classes ដែលមានសុវត្ថិភាពសម្រាប់ Navigation ។'
    },
    {
      question: 'តើ `startDestination` Property នៅក្នុង Navigation Graph ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Destination ចុងក្រោយ',
        'កំណត់ Destination ដំបូង',
        'កំណត់ Action',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`startDestination` កំណត់ Destination ដំបូងដែលត្រូវបង្ហាញនៅពេល App ចាប់ផ្តើម។'
    },
    {
      question: 'តើ `<action>` Tag ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីកំណត់ Destination',
        'ដើម្បីកំណត់ការផ្លាស់ប្តូរពី Destination មួយទៅមួយទៀត',
        'ដើម្បីកំណត់ Argument',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`<action>` កំណត់ការផ្លាស់ប្តូរពី Destination មួយទៅមួយទៀត។'
    },
    {
      question: 'តើអ្នកអាចបញ្ជូនទិន្នន័យរវាង Destinations ដោយប្រើ Tag ណា?',
      options: [
        '`<fragment>`',
        '`<action>`',
        '`<argument>`',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`<argument>` ត្រូវបានប្រើដើម្បីបញ្ជូនទិន្នន័យរវាង Destinations ។'
    },
    {
      question: 'តើ `findNavController()` Function ប្រើសម្រាប់អ្វី?',
      options: [
        'ស្វែងរក Fragment',
        'ស្វែងរក Activity',
        'ស្វែងរក `NavController`',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: '`findNavController()` ទទួលបាន Instance របស់ `NavController` ។'
    },
    {
      question: 'តើ Navigation Component គាំទ្រការ Navigate រវាង Activities ដែរឬទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលប្រើ Fragment',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'Navigation Component គាំទ្រការ Navigate រវាង Activities, Fragments, និង UI ផ្សេងៗទៀត។'
    }
  ],
  lab: {
    task: `
បង្កើត App ដែលមានអេក្រង់ពីរគឺ HomeFragment និង DetailFragment ។ ប្រើ Navigation Component ដើម្បី Navigate ពី Home ទៅ Detail ហើយបញ្ជូន String មួយទៅកាន់ DetailFragment ។

**តម្រូវការ:**

1.  **Project:**
    -   បង្កើត Project Android ថ្មីមួយ។
    -   បន្ថែម Dependency របស់ Navigation Component និង Safe Args ។

2.  **Files:**
    -   បង្កើត Fragment ពីរគឺ \`HomeFragment\` និង \`DetailFragment\` ។
    -   បង្កើត Layout XML ពីរសម្រាប់ Fragment នីមួយៗ។
    -   បង្កើត Navigation Graph (\`nav_graph.xml\`) ។

3.  **Logic:**
    -   នៅក្នុង Navigation Graph, កំណត់ \`startDestination\` ជា \`HomeFragment\` ។
    -   បង្កើត \`<action>\` ពី HomeFragment ទៅ DetailFragment ។
    -   បង្កើត \`<argument>\` ក្នុង DetailFragment សម្រាប់ String ។
    -   នៅក្នុង \`HomeFragment\`, ប្រើ \`findNavController().navigate()\` ដើម្បី Navigate និងបញ្ជូនទិន្នន័យ។
    -   នៅក្នុង \`DetailFragment\`, ប្រើ \`navArgs()\` ដើម្បីទទួលទិន្នន័យហើយបង្ហាញវានៅលើ \`TextView\` ។
    `,
    solution: `
\`\`\`xml
<navigation xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/nav_graph"
    app:startDestination="@id/homeFragment">

    <fragment
        android:id="@+id/homeFragment"
        android:name="com.example.myapplication.HomeFragment"
        android:label="Home"
        tools:layout="@layout/fragment_home">
        <action
            android:id="@+id/action_homeFragment_to_detailFragment"
            app:destination="@id/detailFragment" />
    </fragment>
    
    <fragment
        android:id="@+id/detailFragment"
        android:name="com.example.myapplication.DetailFragment"
        android:label="Detail"
        tools:layout="@layout/fragment_detail">
        <argument
            android:name="message"
            app:argType="string" />
    </fragment>
</navigation>
\`\`\`

\`\`\`kotlin
// HomeFragment.kt
class HomeFragment : Fragment(R.layout.fragment_home) {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        view.findViewById<Button>(R.id.button_navigate).setOnClickListener {
            val action = HomeFragmentDirections.actionHomeFragmentToDetailFragment("Hello from Home!")
            findNavController().navigate(action)
        }
    }
}
\`\`\`

\`\`\`kotlin
// DetailFragment.kt
import androidx.navigation.fragment.navArgs

class DetailFragment : Fragment(R.layout.fragment_detail) {
    private val args: DetailFragmentArgs by navArgs()
    
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val message = args.message
        view.findViewById<TextView>(R.id.textView_message).text = message
    }
}
\`\`\`
`
  }
};

export default KotlinLesson4_1Content;