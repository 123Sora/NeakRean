import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson6_3Content: LessonContent = {
  title: 'ការដាក់ App ទៅកាន់ App Store',
  objectives: [
    'យល់ដឹងពីដំណើរការទាំងមូលនៃការដាក់ App ទៅកាន់ App Store',
    'ស្គាល់ពីតម្រូវការបច្ចេកទេសនិងទម្រង់ឯកសារ',
    'រៀនពីរបៀបបង្កើត Certificates និង Provisioning Profiles',
    'ស្គាល់ពីរបៀបប្រើ TestFlight សម្រាប់ Beta Testing',
    'យល់ដឹងពីគោលការណ៍ណែនាំ (Guidelines) របស់ App Store'
  ],
  content: `
# ការដាក់ App ទៅកាន់ App Store 🚀

---

បន្ទាប់ពីអ្នកបានបង្កើត App របស់អ្នកហើយ ជំហានបន្ទាប់គឺត្រូវចែករំលែកវាទៅកាន់ពិភពលោក។ **App Store** គឺជាកន្លែងតែមួយគត់សម្រាប់អ្នកប្រើប្រាស់ iOS ដើម្បីទាញយកកម្មវិធីរបស់អ្នក។ ដំណើរការនេះមានច្រើនជំហាន ប៉ុន្តែវាមានលក្ខណៈវិជ្ជាជីវៈនិងរៀបរយ។

## 1. តម្រូវការជាមុន (Prerequisites)

-   **Apple Developer Program Account:** អ្នកត្រូវតែមានគណនី Apple Developer ដែលមានតម្លៃ $99 ក្នុងមួយឆ្នាំ។ នេះអនុញ្ញាតឱ្យអ្នកដាក់ App ទៅកាន់ App Store, ប្រើ TestFlight, និងប្រើប្រាស់ Services របស់ Apple ផ្សេងទៀត។
-   **App Store Connect:** ជា Platform របស់ Apple ដែលអ្នកប្រើសម្រាប់គ្រប់គ្រង App របស់អ្នក (ដាក់ Build, បង្ហាញព័ត៌មាន, មើល Analytics)។

## 2. ជំហានសម្រាប់ដាក់ App

### ជំហានទី 1: រៀបចំ App ក្នុង Xcode
-   **Clean Up Code:** លុបកូដដែលមិនចាំបាច់, \`print()\` statements, និង Test Code។
-   **Update App Version:** នៅក្នុង Xcode, ទៅកាន់ \`General\` Tab របស់ Target របស់អ្នក ហើយផ្លាស់ប្តូរ \`Version\` និង \`Build\` Number។
-   **Add App Icon and Launch Screen:** ត្រូវប្រាកដថាអ្នកបានបន្ថែម Icon សម្រាប់ App របស់អ្នកគ្រប់ទំហំទាំងអស់។

### ជំហានទី 2: បង្កើត App ID និង Certificates
-   **App ID:** នៅក្នុង Developer Account, បង្កើត Unique Identifier មួយសម្រាប់ App របស់អ្នក (ឧ. \`com.yourcompany.yourappname\`)។
-   **Certificates:** បង្កើត **Distribution Certificate**។ នេះអនុញ្ញាតឱ្យអ្នក Sign App របស់អ្នកសម្រាប់ការដាក់លក់។
-   **Provisioning Profile:** ភ្ជាប់ App ID ទៅនឹង Certificate។

### ជំហានទី 3: បង្កើត Listing ក្នុង App Store Connect
-   **App Store Connect > My Apps > +:** បង្កើត App Record ថ្មីមួយ។
-   **ព័ត៌មាន App:** បំពេញព័ត៌មានដូចជា App Name, Subtitle, Description, Keywords, និង Screenshots។
-   **Pricing and Availability:** កំណត់តម្លៃនិងប្រទេសដែល App របស់អ្នកអាចដាក់លក់បាន។

### ជំហានទី 4: Upload Build
-   **Archive:** នៅក្នុង Xcode, ជ្រើសរើស \`Product > Archive\`។ នេះនឹងបង្កើត Build សម្រាប់ App Store។
-   **Distribute App:** នៅពេល Archive បញ្ចប់, នៅក្នុង Organizer Window, ជ្រើសរើស Build របស់អ្នកហើយចុច \`Distribute App\`។ ជ្រើសរើស \`App Store Connect\` ហើយអនុវត្តតាមការណែនាំ។

### ជំហានទី 5: Beta Testing ជាមួយ TestFlight
-   **TestFlight:** បន្ទាប់ពី Upload Build រួច, វានឹងលេចឡើងនៅក្នុង TestFlight របស់ App Store Connect។
-   **Internal Testers:** អ្នកអាចអញ្ជើញក្រុមការងាររបស់អ្នកឱ្យ Test App។
-   **External Testers:** បន្ទាប់ពី Internal Testing រួច, អ្នកអាចដាក់ App ឱ្យក្រុម Test ខាងក្រៅ។ Build ទាំងនេះត្រូវឆ្លងកាត់ការ Review សាមញ្ញដោយ Apple ។

### ជំហានទី 6: Submit សម្រាប់ Review
-   **Submit for Review:** នៅក្នុង App Store Connect, ជ្រើសរើស Build ដែលអ្នកចង់ដាក់លក់។
-   **Review Team:** Apple Review Team នឹងពិនិត្យមើល App របស់អ្នកដើម្បីធានាថាវាគោរពតាម App Store Review Guidelines។
-   **Release:** ប្រសិនបើ App របស់អ្នកត្រូវបាន Approved, អ្នកអាច Release វាបាន។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការកំណត់ Version និង Build Number ក្នុង Xcode</h3>
<p>ក្នុង Xcode, ទៅកាន់ Project Navigator > Target > General Tab។</p>
<pre><code class="language-swift">
// Version (Marketing Version): 1.0.0
// Build Number: 1 (ប្តូររាល់ពេល Upload)
//
// ឧទាហរណ៍៖
// Version: 1.0.0 (ដាក់ទៅ 1.0.1 ពេលមាន Update ធំ)
// Build: 1 (ពេល Upload ថ្មី, ផ្លាស់ប្តូរទៅ Build 2)
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្នកត្រូវមានគណនីអ្វីដើម្បីដាក់ App ទៅកាន់ App Store?',
      options: [
        'Google Account',
        'Microsoft Developer Account',
        'Apple Developer Program Account',
        'Facebook Developer Account'
      ],
      correct: 2,
      explanation: 'អ្នកត្រូវមាន Apple Developer Program Account ដែលមានតម្លៃ $99 ក្នុងមួយឆ្នាំ។'
    },
    {
      question: 'តើ `App Store Connect` ប្រើសម្រាប់អ្វី?',
      options: [
        'សរសេរកូដ',
        'គ្រប់គ្រង App របស់អ្នកបន្ទាប់ពីវាត្រូវបានបង្កើត',
        'ទិញ App',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`App Store Connect` គឺជា Platform សម្រាប់គ្រប់គ្រង App Store Listing និង Process របស់ App របស់អ្នក។'
    },
    {
      question: 'តើ `TestFlight` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដាក់ App សម្រាប់លក់',
        'សាកល្បង App មុនពេលដាក់លក់ (Beta Testing)',
        'ទាញយក App',
        'ធ្វើ Animation'
      ],
      correct: 1,
      explanation: '`TestFlight` គឺជាឧបករណ៍របស់ Apple សម្រាប់ធ្វើ Beta Testing App របស់អ្នក។'
    },
    {
      question: 'តើ `App Icon` ជាផ្នែកមួយនៃតម្រូវការដើម្បីដាក់ App ទេ?',
      options: [
        'ជាតម្រូវការ',
        'មិនមែនទេ',
        'វាអាស្រ័យលើប្រភេទ App',
        'វាជាតម្រូវការតែសម្រាប់ iPad'
      ],
      correct: 0,
      explanation: '`App Icon` គឺជាតម្រូវការចាំបាច់ដើម្បីដាក់ App ទៅកាន់ App Store។'
    },
    {
      question: 'តើ `Archive` នៅក្នុង Xcode ធ្វើអ្វី?',
      options: [
        'បង្កើត File .zip របស់ Project',
        'បង្កើត Build ដែលអាចដាក់លក់បាន',
        'បម្រុងទុកកូដ',
        'លុបកូដដែលមិនចាំបាច់'
      ],
      correct: 1,
      explanation: '`Archive` គឺជា Process ដែលបង្កើត Build សម្រាប់ដាក់លក់។'
    },
    {
      question: 'តើ `App Store Review Guidelines` មានសារៈសំខាន់ដែរឬទេ?',
      options: [
        'សំខាន់ណាស់ App របស់អ្នកត្រូវគោរពតាមវា',
        'មិនសំខាន់ទេ',
        'សំខាន់តែសម្រាប់ App ដែលមាន Payment',
        'សំខាន់តែសម្រាប់ App ដែលមាន Ads'
      ],
      correct: 0,
      explanation: 'App Store Review Guidelines គឺជាច្បាប់ដែល App របស់អ្នកត្រូវគោរពតាមដើម្បីត្រូវបាន Approved។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង `Version` និង `Build` Number?',
      options: [
        'គ្មានភាពខុសគ្នាទេ',
        '`Version` សម្រាប់ Internal Use ចំណែក `Build` សម្រាប់ Public',
        '`Version` សម្រាប់ Public ចំណែក `Build` សម្រាប់ Internal Use',
        '`Version` ប្រើតែសម្រាប់ TestFlight'
      ],
      correct: 2,
      explanation: '`Version` គឺជាលេខដែលអ្នកប្រើប្រាស់ឃើញ ចំណែក `Build` គឺជាលេខសម្រាប់បែងចែករវាង Build ផ្សេងៗ។'
    },
    {
      question: 'តើ `App ID` ប្រើសម្រាប់អ្វី?',
      options: [
        'ជា Unique Identifier សម្រាប់ App របស់អ្នក',
        'ជាឈ្មោះរបស់ App',
        'ជាលេខកូដសម្ងាត់',
        'ជាលេខសម្រាប់ Test'
      ],
      correct: 0,
      explanation: '`App ID` គឺជា Unique Identifier ដែលសម្គាល់ App របស់អ្នក។'
    },
    {
      question: 'តើ `Provisioning Profile` ភ្ជាប់ Certificate ទៅនឹងអ្វី?',
      options: [
        'Hardware',
        'File',
        'Project',
        'App ID'
      ],
      correct: 3,
      explanation: '`Provisioning Profile` ភ្ជាប់ Certificate ទៅនឹង App ID។'
    },
    {
      question: 'តើ `External Testers` ត្រូវឆ្លងកាត់ការ Review របស់ Apple ដែរឬទេ?',
      options: [
        'មិនបាច់ទេ',
        'បាច់តែពេលមាន Bug',
        'បាច់តែពេលមាន Features ថ្មី',
        'បាច់ដើម្បីធានាថា App មិនបំពានច្បាប់'
      ],
      correct: 3,
      explanation: 'Builds សម្រាប់ External Testers ត្រូវឆ្លងកាត់ការ Review សាមញ្ញដោយ Apple។'
    }
  ],
  lab: {
    task: `
រៀបចំគម្រោង SwiftUI មួយសម្រាប់ដាក់លក់ទៅកាន់ App Store។

**តម្រូវការ:**

1.  **Xcode Project:**
    -   បង្កើត Project ថ្មីមួយនៅក្នុង Xcode។
    -   ទៅកាន់ Target Settings > General Tab។

2.  **Version and Build:**
    -   កំណត់ \`Version\` ទៅ \`1.0.0\`។
    -   កំណត់ \`Build\` ទៅ \`1\`។

3.  **App Icon:**
    -   បន្ថែម Asset Catalog ថ្មីមួយសម្រាប់ App Icon។
    -   ស្វែងរក App Icon Generator តាម Online ហើយទាញយករូបភាព Icon គ្រប់ទំហំ។
    -   បន្ថែមរូបភាពទាំងនោះទៅក្នុង Asset Catalog។

4.  **Info.plist:**
    -   ពិនិត្យមើល \`Info.plist\` ដើម្បីធានាថាឈ្មោះ App និង Identifier ត្រឹមត្រូវ។

**ការណែនាំ:** នេះជាការអនុវត្តន៍ដែលអ្នកអាចធ្វើបានតែមួយជំហានប៉ុណ្ណោះ។ ជំហានបន្ទាប់ទៀតតម្រូវឱ្យមាន Apple Developer Account។
    `,
    solution: `
\`\`\`swift
// នេះមិនមែនជាកូដទេ តែជាការណែនាំក្នុង Xcode

// ជំហានទី 1: បើក Xcode ហើយបង្កើត Project ថ្មី
// File > New > Project... > iOS > App

// ជំហានទី 2: បើក Project Navigator, ជ្រើសរើស Project របស់អ្នក
// នៅក្នុង Sidebar, ជ្រើសរើស Target របស់អ្នក។
// នៅក្នុង Tab Bar ខាងលើ, ជ្រើសរើស "General"។

// ជំហានទី 3: កែប្រែ Version និង Build
// នៅក្រោមផ្នែក "Identity", ស្វែងរក "Version" និង "Build"។
// កែប្រែតម្លៃរបស់វាទៅជា 1.0.0 និង 1។

// ជំហានទី 4: បន្ថែម App Icon
// នៅក្នុង Project Navigator, ស្វែងរក "Assets.xcassets"។
// ចុច Right-Click លើកន្លែងទទេ ហើយជ្រើសរើស "New App Icon"។
// ប្រើ App Icon Generator តាម Online ដើម្បីទាញយករូបភាព App Icon គ្រប់ទំហំ។
// ទាញយករូបភាពទាំងនោះទៅក្នុង Slot នីមួយៗក្នុង Xcode។

// ជំហានទី 5: Clean Code (Optional)
// នៅក្នុង Project របស់អ្នក, លុបកូដដែលមិនចាំបាច់, print statements ឬ Log.
// ធ្វើឱ្យប្រាកដថា App របស់អ្នកដំណើរការបានល្អ។

// ឥឡូវនេះ Project របស់អ្នកបានត្រៀមរួចរាល់សម្រាប់ការ Archive និង Upload ។
\`\`\`
`
  }
};

export default SwiftLesson6_3Content;