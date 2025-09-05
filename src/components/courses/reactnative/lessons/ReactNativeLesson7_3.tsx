import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson7_3Content: LessonContent = {
  title: 'App Store និង Play Store Publishing',
  objectives: [
    'យល់ពីដំណើរការនៃការ Publish កម្មវិធីទៅកាន់ App Store និង Google Play Store',
    'រៀនពីរបៀប Sign និង Build កម្មវិធីសម្រាប់ Production',
    'ស្គាល់ពីឧបករណ៍សំខាន់ៗដូចជា Xcode និង Android Studio',
    'រៀនពីតម្រូវការចាំបាច់សម្រាប់ Store Listing',
    'យល់ពីដំណើរការ Review និង Update កម្មវិធី'
  ],
  content: `
# App Store និង Play Store Publishing 🚀

---

បន្ទាប់ពីបង្កើត App ហើយជំហានបន្ទាប់គឺការដាក់ឱ្យអ្នកប្រើប្រាស់ទាញយកបាន។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីដំណើរការនៃការ Publish App ទៅកាន់ **Google Play Store** និង **Apple App Store** ។

## 1. ភាពខុសគ្នារវាង Store ទាំងពីរ

| លក្ខណៈវិនិច្ឆ័យ | Google Play Store (Android) | Apple App Store (iOS) |
|---|---|---|
| **តម្លៃ** | One-time fee: $25 | Annual fee: $99 |
| **ឧបករណ៍** | Android Studio, \`keytool\` | Xcode |
| **Format** | Android App Bundle (.aab) | iOS App Archive (.ipa) |
| **Review Process**| លឿន (ប៉ុន្មានម៉ោងទៅប៉ុន្មានថ្ងៃ) | យឺត (ច្រើនថ្ងៃ) និងតឹងរ៉ឹង |
| **Requirements**| Keystore, Build.gradle | Certificates, Provisioning Profiles |

## 2. ជំហានសម្រាប់ Google Play Store

### ជំហានទី ១៖ ការរៀបចំ Android Studio

1.  បើក Project នៅក្នុង Android Studio (\`android/\` folder) ។
2.  ចូលទៅ \`Build -> Generate Signed Bundle / APK...\` ។
3.  ជ្រើសរើស **Android App Bundle** ។
4.  បង្កើត Keystore ថ្មី។ Keystore គឺជា File ដែលផ្ទុក Private Key របស់ App ។
    * **\`keytool\`** ត្រូវបានប្រើដើម្បីបង្កើត Keystore File ។
    * រក្សាទុក Keystore File នេះឱ្យមានសុវត្ថិភាព។

### ជំហានទី ២៖ ការ Sign App Bundle

1.  បញ្ចូលព័ត៌មាន Keystore (Password, Alias) នៅក្នុង \`~/.gradle/gradle.properties\` ។
2.  នៅក្នុង \`android/app/build.gradle\` កំណត់ \`signingConfigs\` និង \`buildTypes\` សម្រាប់ \`release\` ។
3.  ដំណើរការ \`npx react-native build-android --mode=release\` ដើម្បីបង្កើត App Bundle ។
    * File \`.aab\` នឹងត្រូវបានបង្កើតនៅក្នុង \`android/app/build/outputs/bundle/release/\` ។

### ជំហានទី ៣៖ ការ Publish នៅក្នុង Google Play Console

1.  បង្កើត Developer Account និងបង់ថ្លៃ $25 ។
2.  បង្កើត App ថ្មីនៅក្នុង Play Console ។
3.  Upload File \`.aab\` ។
4.  បំពេញព័ត៌មាន Store Listing (ឈ្មោះ, Description, Screenshots)។
5.  ដាក់ App សម្រាប់ Review ។

## 3. ជំហានសម្រាប់ Apple App Store

### ជំហានទី ១៖ ការរៀបចំ Xcode

1.  បើក Project នៅក្នុង Xcode (\`ios/\` folder) ។
2.  នៅក្រោម \`General\` tab សូមពិនិត្យមើល \`Bundle Identifier\` និង \`Version\` ។

### ជំហានទី ២៖ Certificates និង Provisioning Profiles

1.  ចូលទៅ Apple Developer Account ($99/ឆ្នាំ)។
2.  បង្កើត **App ID** ។
3.  បង្កើត **Distribution Certificate** ។
4.  បង្កើត **Provisioning Profile** ដែលភ្ជាប់ Certificate, App ID, និង Devices ។

### ជំហានទី ៣៖ ការ Build App

1.  នៅក្នុង Xcode, ចូលទៅ \`Product -> Archive\` ។
2.  Archiving នឹងបង្កើត File \`.ipa\` ។
3.  ប្រើ Xcode's Organizer ដើម្បី Validate និង Distribute App ទៅកាន់ App Store Connect ។

### ជំហានទី ៤៖ ការ Publish នៅក្នុង App Store Connect

1.  ចូលទៅ App Store Connect ។
2.  បង្កើត App ថ្មី។
3.  បំពេញព័ត៌មាន Store Listing (ឈ្មោះ, Description, Screenshots)។
4.  ដាក់ App សម្រាប់ Review ។ ក្រុម Apple នឹងពិនិត្យមើល App របស់អ្នកយ៉ាងលម្អិត។

## 4. ការ Update App

* **Versioning:** រាល់ពេលដែលអ្នកធ្វើ Update ថ្មី អ្នកត្រូវតែបង្កើន \`version\` និង \`buildNumber\` ។
    * **Android:** \`versionCode\` និង \`versionName\` នៅក្នុង \`build.gradle\` ។
    * **iOS:** \`CFBundleVersion\` និង \`CFBundleShortVersionString\` នៅក្នុង Xcode ។
* **Process:** ដំណើរការ Publish Process ម្តងទៀតដើម្បី Upload App Version ថ្មី។
`,
  examples: [],
  quiz: [
    {
      question: 'តើ Keystore File ប្រើសម្រាប់គោលបំណងអ្វី?',
      options: [
        'រក្សាទុកលេខសម្ងាត់របស់ User',
        'Sign App សម្រាប់ Production',
        'គ្រប់គ្រង State',
        'រៀបចំ Navigation'
      ],
      correct: 1,
      explanation: 'Keystore គឺជា File ដែលមាន Private Key សម្រាប់ Sign App Bundle ។'
    },
    {
      question: 'តើ File Format សម្រាប់ Android Production Build គឺអ្វី?',
      options: ['.ipa', '.apk', '.aab', '.zip'],
      correct: 2,
      explanation: 'Android App Bundle (.aab) គឺជា Format ដែលត្រូវបានណែនាំសម្រាប់ការ Publish ទៅ Play Store ។'
    },
    {
      question: 'តើឧបករណ៍ណាដែលប្រើសម្រាប់ Publish App ទៅកាន់ App Store?',
      options: ['Android Studio', 'Xcode', 'Visual Studio Code', 'Expo'],
      correct: 1,
      explanation: 'Xcode គឺជា IDE ដែលប្រើសម្រាប់ Build និង Upload App ទៅកាន់ App Store ។'
    },
    {
      question: 'តើការ Publish App ទៅ App Store ទាមទារតម្លៃអ្វីខ្លះ?',
      options: [
        'Free',
        'Annual fee: $99',
        'One-time fee: $25',
        'Monthly fee: $50'
      ],
      correct: 1,
      explanation: 'Apple Developer Program ទាមទារការបង់ថ្លៃប្រចាំឆ្នាំ $99។'
    },
    {
      question: 'តើយើងត្រូវធ្វើអ្វីនៅពេលដែលយើង Update App?',
      options: [
        'លុប App ចាស់',
        'បង្កើត App ថ្មី',
        'បង្កើន Version Number',
        'បង់ថ្លៃម្តងទៀត'
      ],
      correct: 2,
      explanation: 'រាល់ពេលដែលយើង Update App យើងត្រូវតែបង្កើន Version Number (ដូចជា `versionCode`) ។'
    }
  ],
  lab: {
    task: `
**ការអនុវត្តន៍៖ Generate Signed App Bundle (.aab)**

អនុវត្តន៍ការបង្កើត Signed Android App Bundle សម្រាប់ Production ។

**តម្រូវការ:**

1.  បើក Terminal ហើយចូលទៅក្នុង Folder របស់ Project ។
2.  បង្កើត Keystore ថ្មីដោយប្រើ Command ដូចខាងក្រោម (បំពេញព័ត៌មានដោយខ្លួនឯង)៖
    \`\`\`bash
    keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
    \`\`\`
3.  រៀបចំ Project ដើម្បីប្រើ Keystore នោះ។
4.  ដំណើរការ Command សម្រាប់ Build App Bundle ។
    \`\`\`bash
    npx react-native build-android --mode=release
    \`\`\`
5.  ស្វែងរក File \`.aab\` ដែលបានបង្កើត។

**ការណែនាំ:** ត្រូវប្រាកដថាអ្នកបានដំឡើង Java Development Kit (JDK) ត្រឹមត្រូវ។
    `,
    solution: `
\`\`\`bash
# ជំហានទី ១៖ បង្កើត Keystore File
keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

# ជំហានទី ២៖ បើក android/gradle.properties ហើយបន្ថែមព័ត៌មាន Keystore
# ជំនួសតម្លៃជាមួយតម្លៃរបស់អ្នក
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=your_password
MYAPP_UPLOAD_KEY_PASSWORD=your_password

# ជំហានទី ៣៖ បើក android/app/build.gradle
# រៀបចំ signingConfigs ដូចខាងក្រោម
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            storeFile file(MYAPP_UPLOAD_STORE_FILE)
            storePassword MYAPP_UPLOAD_STORE_PASSWORD
            keyAlias MYAPP_UPLOAD_KEY_ALIAS
            keyPassword MYAPP_UPLOAD_KEY_PASSWORD
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...

# ជំហានទី ៤៖ ដំណើរការ Build Command
npx react-native build-android --mode=release
\`\`\`
`
  }
};

export default ReactNativeLesson7_3Content;