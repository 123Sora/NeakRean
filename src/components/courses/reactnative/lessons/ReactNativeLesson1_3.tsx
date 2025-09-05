import type { LessonContent } from '../../../../types/LessonTypes';

const ReactNativeLesson1_3Content: LessonContent = {
  title: 'ការដំឡើងនិងការរៀបចំ Enviroment  React Native',
  objectives: [
    'យល់ដឹងពីជម្រើសនៃការដំឡើង (Expo vs. React Native CLI)',
    'រៀបចំ Enviroment អភិវឌ្ឍន៍សម្រាប់ React Native CLI',
    'ដំឡើង Node.js, Watchman, Ruby, JDK, Android Studio, និង Xcode',
    'កំណត់ Path Variables ឱ្យបានត្រឹមត្រូវ',
    'បង្កើតនិងដំណើរការ Project ដំបូងជាមួយ React Native CLI'
  ],
  content: `
# ការដំឡើងនិងការរៀបចំ Enviroment  React Native

---

នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបដំឡើង Enviroment អភិវឌ្ឍន៍សម្រាប់ React Native។ យើងមានជម្រើសពីរគឺ **Expo CLI** និង **React Native CLI**។ យើងនឹងផ្តោតលើការដំឡើង **React Native CLI** ដែលផ្តល់ឱ្យយើងនូវការគ្រប់គ្រងពេញលេញលើ Native Modules។

---

## 1. ជម្រើសនៃការដំឡើង: Expo vs. React Native CLI

### Expo CLI
* **លក្ខណៈ:** ងាយស្រួលនិងលឿនក្នុងការចាប់ផ្តើម។ មិនតម្រូវឱ្យដំឡើង Xcode ឬ Android Studio ទេ។
* **គុណសម្បត្តិ:**
    * Setup លឿនបំផុត។
    * មាន Tools ជាច្រើន (ដូចជា Over-the-air updates)។
    * ប្រើ Expo Go App សម្រាប់ Test App លើទូរស័ព្ទពិត។
* **គុណវិបត្តិ:**
    * មិនអាចប្រើ Native Modules ទាំងអស់បានទេ។
    * មិនអាចសរសេរ Native Code (Java/Kotlin/Objective-C/Swift) បានដោយផ្ទាល់។

### React Native CLI
* **លក្ខណៈ:** តម្រូវឱ្យមានការដំឡើង Enviroment  Native (Xcode, Android Studio)។ ផ្តល់ការគ្រប់គ្រងពេញលេញ។
* **គុណសម្បត្តិ:**
    * មានសិទ្ធិចូលប្រើ Native Modules ទាំងអស់។
    * អាចសរសេរ Native Code បាន។
    * ល្អសម្រាប់ Project ធំៗដែលត្រូវការ Custom Features។
* **គុណវិបត្តិ:**
    * Setup ស្មុគស្មាញនិងចំណាយពេលយូរ។
    * ត្រូវការ Hard Drive Space ច្រើន។

> 💡 **សេចក្តីណែនាំ:** សម្រាប់អ្នកចាប់ផ្តើមដំបូង អ្នកអាចសាកល្បង **Expo** ជាមុនសិន។ ប៉ុន្តែប្រសិនបើអ្នកចង់រៀនពីមូលដ្ឋានគ្រឹះនិងគ្រប់គ្រង Project ពេញលេញ **React Native CLI** គឺជាជម្រើសដ៏ល្អបំផុត។

---

## 2. ការដំឡើងសម្រាប់ React Native CLI

យើងនឹងបន្តការដំឡើងដោយប្រើ React Native CLI។ ត្រូវប្រាកដថាអ្នកបានដំឡើង **Node.js** និង **npm** រួចរាល់។

### **ជំហានទី ១: ដំឡើង Node.js និង Watchman**

1.  **Node.js:** ចូលទៅកាន់ [nodejs.org](https://nodejs.org/) ហើយដំឡើងកំណែ LTS។ Node.js ភ្ជាប់មកជាមួយ npm រួចជាស្រេច។
2.  **Watchman (សម្រាប់ macOS):** Watchman គឺជាឧបករណ៍របស់ Facebook ដែលប្រើដើម្បីមើលការផ្លាស់ប្តូរឯកសារ។ ដំឡើងដោយប្រើ Homebrew៖
    \`\`\`bash
    brew install watchman
    \`\`\`

### **ជំហានទី ២: ដំឡើង JDK (Java Development Kit)**

React Native CLI សម្រាប់ Android តម្រូវឱ្យមាន JDK។

1.  **ដំឡើង OpenJDK:** ចូលទៅកាន់ [adoptium.net](https://adoptium.net/temurin/releases/) ហើយដំឡើង OpenJDK 11 LTS។
2.  **កំណត់ Path Variable:** បន្ទាប់ពីដំឡើងរួច សូមកំណត់ Environment Variables សម្រាប់ JAVA_HOME។
    * **Windows:** បើក System Properties -> Environment Variables -> New System Variable -> Variable name: \`JAVA_HOME\`, Variable value: \`C:\\Program Files\\Eclipse Adoptium\\jdk-11.0.12.7-hotspot\` (ផ្លូវអាចខុសគ្នា)។
    * **macOS:** បើក Terminal ហើយបន្ថែមបន្ទាត់ខាងក្រោមទៅក្នុងឯកសារ \`.bash_profile\` ឬ \`.zshrc\`៖
        \`\`\`bash
        export JAVA_HOME=$(/usr/libexec/java_home -v 11)
        \`\`\`

### **ជំហានទី ៣: ដំឡើង Android Studio និង Android SDK**

Android Studio គឺចាំបាច់ដើម្បីទទួលបាន Android SDK និងបង្កើត Android Emulator។

1.  **ដំឡើង Android Studio:** ចូលទៅកាន់ [developer.android.com/studio](https://developer.android.com/studio) ហើយដំឡើង Android Studio។
2.  **ដំឡើង Android SDK:**
    * បើក Android Studio។
    * ចូលទៅ Settings/Preferences -> Appearance & Behavior -> System Settings -> **Android SDK**។
    * ជ្រើសរើស **SDK Platform** ដូចជា Android 13.0 (Tiramisu)។
    * ចូលទៅ **SDK Tools** ហើយដំឡើង "Android SDK Build-Tools", "Android SDK Platform-Tools", និង "Google Play services"។
3.  **កំណត់ Environment Variables:** កំណត់ PATH Variables សម្រាប់ Android SDK។
    * **Windows:** បន្ថែម \`%USERPROFILE%\\AppData\\Local\\Android\\Sdk\\platform-tools\` ទៅក្នុង Path System Variables។
    * **macOS:** បន្ថែមបន្ទាត់ខាងក្រោមទៅក្នុងឯកសារ \`.bash_profile\` ឬ \`.zshrc\`៖
        \`\`\`bash
        export ANDROID_HOME=$HOME/Library/Android/sdk
        export PATH=$PATH:$ANDROID_HOME/emulator
        export PATH=$PATH:$ANDROID_HOME/platform-tools
        \`\`\`

### **ជំហានទី ៤: ដំឡើង Xcode (សម្រាប់ iOS)**

Xcode គឺចាំបាច់សម្រាប់ iOS Simulator និង iOS Development ។ ជំហាននេះគឺសម្រាប់តែអ្នកប្រើប្រាស់ macOS ប៉ុណ្ណោះ។

1.  **ដំឡើង Xcode:** បើក App Store ហើយដំឡើង Xcode។
2.  **ដំឡើង Command Line Tools:** បើក Terminal ហើយដំណើរការ៖
    \`\`\`bash
    xcode-select --install
    \`\`\`
3.  **ដំឡើង iOS Simulator:** បើក Xcode -> Preferences -> Components -> ទាញយក iOS Simulator។

### **ជំហានទី ៥: បង្កើតនិងដំណើរការ Project ដំបូង**

បន្ទាប់ពីដំឡើងអ្វីៗគ្រប់យ៉ាងរួចរាល់ យើងអាចបង្កើត Project React Native ថ្មី។

1.  **បើក Terminal ឬ Command Prompt** ហើយដំណើរការ Command ខាងក្រោម៖
    \`\`\`bash
    npx react-native init MyAwesomeProject
    \`\`\`
    Command នេះនឹងបង្កើត Folder ឈ្មោះ \`MyAwesomeProject\` ដែលមានឯកសារទាំងអស់សម្រាប់ Project។

2.  **ចូលទៅក្នុង Project Folder:**
    \`\`\`bash
    cd MyAwesomeProject
    \`\`\`

3.  **ដំណើរការ App លើ Android:**
    \`\`\`bash
    npx react-native run-android
    \`\`\`
    Command នេះនឹងចាប់ផ្តើម Android Emulator (ប្រសិនបើមិនទាន់បើក) ហើយដំណើរការ App របស់អ្នក។

4.  **ដំណើរការ App លើ iOS:**
    \`\`\`bash
    npx react-native run-ios
    \`\`\`
    Command នេះនឹងចាប់ផ្តើម iOS Simulator ហើយដំណើរការ App របស់អ្នក។
`,
  examples: [],
  quiz: [
    {
      question: 'តើជម្រើសដំឡើង React Native មួយណាដែលល្អបំផុតសម្រាប់អ្នកចាប់ផ្តើមដំបូងដែលចង់ Setup លឿន?',
      options: ['React Native CLI', 'Expo CLI', 'Android Studio', 'Xcode'],
      correct: 1,
      explanation: 'Expo CLI គឺងាយស្រួលនិងលឿនបំផុតសម្រាប់ការចាប់ផ្តើម។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីបង្កើត Project React Native ថ្មីដោយប្រើ CLI?',
      options: ['npm create react-native-app', 'npx react-native init MyApp', 'expo init MyApp', 'react-native start'],
      correct: 1,
      explanation: '`npx react-native init MyApp` គឺជា Command ផ្លូវការសម្រាប់បង្កើត Project ថ្មី។'
    },
    {
      question: 'តើ Xcode ត្រូវការសម្រាប់អភិវឌ្ឍន៍កម្មវិធីសម្រាប់ Platform មួយណា?',
      options: ['Windows', 'Android', 'iOS', 'Web'],
      correct: 2,
      explanation: 'Xcode គឺចាំបាច់សម្រាប់បង្កើតនិងដំណើរការកម្មវិធីនៅលើ iOS។'
    },
    {
      question: 'តើអ្វីជាគុណវិបត្តិដ៏ធំមួយនៃ Expo CLI?',
      options: ['Setup ស្មុគស្មាញ', 'មិនអាចប្រើ Native Modules ទាំងអស់បានទេ', 'ដំណើរការយឺត', 'មិនគាំទ្រ Android'],
      correct: 1,
      explanation: 'Expo មានកំណត់លើការប្រើប្រាស់ Native Modules។'
    },
    {
      question: 'តើ Watchman ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: ['គ្រប់គ្រង Packages', 'មើលការផ្លាស់ប្តូរឯកសារ', 'បង្កើត UI', 'ដំណើរការ Servers'],
      correct: 1,
      explanation: 'Watchman ត្រូវបានប្រើដើម្បីមើលការផ្លាស់ប្តូរឯកសារក្នុង Project ហើយធ្វើការ Hot Reload។'
    }
  ],
  lab: {
    task: `
**ការដំឡើងនិងការធ្វើតេស្ត Enviroment **

អនុវត្តតាមជំហានខាងក្រោមដើម្បីដំឡើង Enviroment  React Native CLI របស់អ្នកឱ្យបានត្រឹមត្រូវ។

1. **ដំឡើង Node.js** ពីគេហទំព័រផ្លូវការ។
2. **ដំឡើង JDK** និង **Android Studio**។ កុំភ្លេចកំណត់ \`JAVA_HOME\` និង \`ANDROID_HOME\` Path Variables។
3. **សម្រាប់ macOS:** ដំឡើង **Xcode** និង **Watchman**។
4. **បង្កើត Project ថ្មី** ដោយប្រើ Command: \`npx react-native init TestProject\`.
5. **ចូលទៅក្នុង Project** ហើយ **ដំណើរការវា** ទាំងនៅលើ Android Emulator និង iOS Simulator (ប្រសិនបើអាច) ។
6. **ថតរូប Screenshot** របស់ App ដែលដំណើរការនៅលើ Emulator/Simulator ហើយផ្ញើវាជាភស្តុតាង។

**ចំណាំ:** ប្រសិនបើអ្នកជួបបញ្ហាណាមួយ សូមពិនិត្យមើលឯកសារផ្លូវការរបស់ React Native នៅលើគេហទំព័រ [reactnative.dev](https://reactnative.dev/docs/environment-setup)។
    `,
    solution: `
_ដំណោះស្រាយសម្រាប់ Lab នេះមិនមានជាកូដទេ ព្រោះវាជាកិច្ចការដំឡើង Enviroment ។ ដំណោះស្រាយគឺការអនុវត្តន៍តាមជំហានខាងលើឱ្យបានត្រឹមត្រូវនិងការបង្ហាញភស្តុតាង (Screenshot) នៃ App ដែលដំណើរការបានជោគជ័យ។_
    `
  }
};

export default ReactNativeLesson1_3Content;