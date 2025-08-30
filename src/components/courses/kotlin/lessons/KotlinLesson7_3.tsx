import type { LessonContent } from '../../../../types/LessonTypes';

const KotlinLesson7_3Content: LessonContent = {
  title: 'App Deployment to Play Store',
  objectives: [
    'យល់ដឹងពីដំណើរការនៃការ Deploy App ទៅ Play Store',
    'រៀបចំ App សម្រាប់ Production Release',
    'រៀនពីរបៀបបង្កើត Signing Key',
    'រៀនពីរបៀប Upload App Bundle (.aab)',
    'ស្គាល់ពី Concept របស់ Release Tracks (Internal, Closed, Open, Production)'
  ],
  content: `
# App Deployment to Play Store 🚀

---

បន្ទាប់ពីបានសាងសង់ App រួចហើយ ជំហានបន្ទាប់គឺការដាក់ App របស់អ្នកនៅលើ Google Play Store ដើម្បីឱ្យអ្នកប្រើប្រាស់អាច Download បាន។ ដំណើរការនេះមានជំហានសំខាន់ៗមួយចំនួន។

## 1. ការរៀបចំ App សម្រាប់ Release

មុននឹង Deploy, អ្នកត្រូវរៀបចំ Code និង Configuration មួយចំនួន៖
-   **Debug vs. Release Build:** អ្នកតែងតែធ្វើការក្នុង Debug Mode ប៉ុន្តែត្រូវ Build App ក្នុង Release Mode សម្រាប់ Production ។
-   **Obfuscation & Shrinking:** ប្រើ ProGuard ឬ R8 ដើម្បីកាត់បន្ថយទំហំ App និងធ្វើឱ្យ Code មានសុវត្ថិភាព។
-   **Version Code & Version Name:**
    -   **\`versionCode\`**: ជាចំនួនគត់ (Integer) ដែលត្រូវតែកើនឡើងរាល់ពេល Release ថ្មី។
    -   **\`versionName\`**: ជា String សម្រាប់បង្ហាញឱ្យអ្នកប្រើប្រាស់ឃើញ (ឧ. "1.0.1") ។

## 2. Signing Your App

រាល់ App ដែល Upload ទៅ Play Store ត្រូវតែ Sign ជាមួយ **Signing Key** ។
-   **Signing Key** គឺជា File (\`.jks\` ឬ \`.keystore\`) ដែលបញ្ជាក់ថា App នោះជារបស់អ្នក។
-   អ្នកអាចបង្កើត Key នេះដោយប្រើ Android Studio ។

### ជំហានបង្កើត Signing Key:
1.  ចូលទៅ **Build -> Generate Signed Bundle / APK...**
2.  ជ្រើសរើស **Android App Bundle** ហើយចុច **Next** ។
3.  ចុច **Create new...** ដើម្បីបង្កើត Key Store File ។
4.  បំពេញព័ត៌មានទាំងអស់ (Key store path, password, key alias, password) ។

## 3. Creating App Bundle (\`.aab\`)

Google Play Store ទទួលយក **Android App Bundle** (\`.aab\`) ជា Format ផ្លូវការ។
-   **App Bundle** ធ្វើឱ្យទំហំ App តូចជាង APK ព្រោះវាបង្កើត Optimized APK សម្រាប់ Device នីមួយៗ។
-   ដើម្បីបង្កើត \`.aab\`, ត្រូវប្រាកដថាបានជ្រើសរើស **Android App Bundle** នៅពេល Generate Signed Bundle ។

## 4. Google Play Console

**Google Play Console** គឺជា Platform សម្រាប់ Publish App ។
-   អ្នកត្រូវបង់ប្រាក់ម្តង ($25) ដើម្បីមាន Account Developer ។
-   នៅក្នុង Console, អ្នកអាចបង្កើត App ថ្មី, បំពេញព័ត៌មាន, Upload \`.aab\`, និងគ្រប់គ្រង Release Tracks ។

## 5. Release Tracks

Play Store មាន Track បួនប្រភេទសម្រាប់ Test និង Launch App៖
-   **Internal Testing:** សម្រាប់ Test ជាមួយ Internal Testers (20-100 នាក់) ។
-   **Closed Testing:** សម្រាប់ Test ជាមួយ Testers ជាក្រុមតូច។
-   **Open Testing:** សម្រាប់ Test ជាសាធារណៈ។
-   **Production:** សម្រាប់ Launch App ឱ្យអ្នកប្រើប្រាស់ទាំងអស់ Download បាន។


`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការកំណត់ Version Code & Name</h3>
<p>នៅក្នុង File \`build.gradle\` (Module) ។</p>
<pre><code class="language-groovy">
android {
    defaultConfig {
        applicationId "com.yourcompany.yourapp"
        minSdk 24
        targetSdk 34
        versionCode 1
        versionName "1.0"
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `versionCode` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់បង្ហាញ Version ឱ្យអ្នកប្រើប្រាស់ឃើញ',
        'ជាចំនួនគត់ដែលត្រូវតែកើនឡើងរាល់ Release',
        'សម្រាប់ដាក់ឈ្មោះ App',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`versionCode` ជាចំនួនគត់ដែលត្រូវតែកើនឡើងរាល់ Release ។'
    },
    {
      question: 'តើ Signing Key ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់ធ្វើឱ្យ App អាចរត់បាន',
        'សម្រាប់បញ្ជាក់ថា App ជារបស់អ្នក',
        'សម្រាប់លុប App',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Signing Key ប្រើសម្រាប់បញ្ជាក់ថា App ជារបស់ Developer ។'
    },
    {
      question: 'តើ `.aab` គឺជាអ្វី?',
      options: [
        'Android Application Package',
        'Android App Bundle',
        'Android Build File',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`.aab` គឺជា Android App Bundle ដែលជា Format ផ្លូវការរបស់ Google Play Store ។'
    },
    {
      question: 'តើ Track ណាដែលប្រើសម្រាប់ Launch App ឱ្យអ្នកប្រើប្រាស់ទាំងអស់?',
      options: [
        'Internal Testing',
        'Closed Testing',
        'Open Testing',
        'Production'
      ],
      correct: 3,
      explanation: 'Production Track ប្រើសម្រាប់ Launch App ឱ្យអ្នកប្រើប្រាស់ទាំងអស់។'
    },
    {
      question: 'តើ ProGuard/R8 ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីធ្វើឱ្យ App ធំ',
        'ដើម្បីកាត់បន្ថយទំហំ App និងធ្វើឱ្យ Code មានសុវត្ថិភាព',
        'ដើម្បីបន្ថែម Library',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'ProGuard/R8 ប្រើដើម្បីកាត់បន្ថយទំហំ App និង Obfuscate Code ។'
    },
    {
      question: 'តើ `versionName` ប្រើសម្រាប់អ្វី?',
      options: [
        'សម្រាប់បង្ហាញ Version ឱ្យអ្នកប្រើប្រាស់ឃើញ',
        'សម្រាប់ Build Number',
        'សម្រាប់ Internal Use',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: '`versionName` ប្រើសម្រាប់បង្ហាញ Version ឱ្យអ្នកប្រើប្រាស់ឃើញ។'
    },
    {
      question: 'តើ Google Play Console គឺជាអ្វី?',
      options: [
        'ជា IDE សម្រាប់ Android',
        'ជា Platform សម្រាប់ Publish App',
        'ជា Database',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Google Play Console គឺជា Platform សម្រាប់ Publish App ទៅ Play Store ។'
    },
    {
      question: 'តើការបង់ប្រាក់សម្រាប់ Google Play Developer Account ធ្វើឡើងប៉ុន្មានដង?',
      options: [
        'ម្តងក្នុងមួយឆ្នាំ',
        'ម្តងក្នុងមួយខែ',
        'ម្តងសម្រាប់ Lifetime',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'ការបង់ប្រាក់សម្រាប់ Google Play Developer Account គឺម្តងសម្រាប់ Lifetime ($25) ។'
    },
    {
      question: 'តើ Android App Bundle (AAB) ផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះ?',
      options: [
        'ធ្វើឱ្យ App មានទំហំធំ',
        'ធ្វើឱ្យ App មានទំហំតូច',
        'ធ្វើឱ្យ App មានសុវត្ថិភាព',
        'ធ្វើឱ្យ App អាច Run បាន'
      ],
      correct: 1,
      explanation: 'Android App Bundle ធ្វើឱ្យទំហំ App ដែលអ្នកប្រើប្រាស់ Download តូចជាងមុន។'
    },
    {
      question: 'តើ Internal Testing Track ត្រូវបានប្រើនៅពេលណា?',
      options: [
        'សម្រាប់ Launch App ឱ្យអ្នកប្រើប្រាស់ទាំងអស់',
        'សម្រាប់ Test ជាមួយ Internal Testers ជាក្រុមតូច',
        'សម្រាប់ Test ជាសាធារណៈ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'Internal Testing Track ត្រូវបានប្រើសម្រាប់ Test ជាមួយ Internal Testers ជាក្រុមតូច។'
    }
  ],
  lab: {
    task: `
រៀបចំ App ដែលអ្នកបានបង្កើតពីមេរៀនមុន (Todo App ឬ News App) សម្រាប់ Production Release ។

**តម្រូវការ:**

1.  **Version:**
    -   ប្តូរ \`versionCode\` និង \`versionName\` នៅក្នុង \`build.gradle\` (Module) ។

2.  **Signing Key:**
    -   បង្កើត Signing Key ដោយប្រើ Android Studio ។

3.  **App Bundle:**
    -   Generate Signed App Bundle (\`.aab\`) ។

4.  **Google Play Console:**
    -   ចូលទៅ Google Play Console ។
    -   បង្កើត App ថ្មីមួយ។
    -   បំពេញព័ត៌មាន App (Title, Description, Screenshots) ។
    -   Upload \`.aab\` ទៅកាន់ Internal Testing Track ។

5.  **Test:**
    -   បន្ថែម Email របស់អ្នកជា Internal Tester ។
    -   Install App ពី Link របស់ Play Store ។
    `,
    solution: `
\`\`\`groovy
// build.gradle (Module)
android {
    ...
    defaultConfig {
        applicationId "com.example.yourappname"
        minSdk 24
        targetSdk 34
        versionCode 1
        versionName "1.0"
        
        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
    }
    ...
}
\`\`\`

**Note:** The lab solution for this lesson is primarily a set of steps to be followed in Android Studio and Google Play Console. The code provided is a simple example of the \`build.gradle\` file, which is a key part of the preparation. The main lab activity is hands-on work outside of the code editor.
`
  }
};

export default KotlinLesson7_3Content;