import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson7_3Content: LessonContent = {
  title: 'ការដាក់ផ្សាយ Flutter App ទៅ App Store និង Play Store',
  objectives: [
    'យល់ដឹងអំពីដំណើរការដាក់ផ្សាយ Flutter App ទៅ App Store និង Play Store',
    'ស្វែងយល់ពីការរៀបចំ App សម្រាប់ Deployment',
    'រៀនកំណត់រូបតំណាង (App Icon) និង Launch Screen',
    'ស្គាល់ការបង្កើត Build សម្រាប់ iOS និង Android',
    'យល់ពីការបង្កើត Developer Account សម្រាប់ App Store និង Play Store',
    'អនុវត្តន៍ការដាក់ផ្សាយ App ទៅ App Store Connect',
    'រៀនការបង្កើត Bundle និង APK សម្រាប់ Play Store',
    'ស្វែងយល់ពីការធ្វើតេស្ត App មុនពេលដាក់ផ្សាយ'
  ],
  content: `
# ការដាក់ផ្សាយ Flutter App ទៅ App Store និង Play Store 🚀

---

ការដាក់ផ្សាយ **Flutter App** ទៅ **App Store** (iOS) និង **Play Store** (Android) គឺជាជំហានចុងក្រោយនៃការអភិវឌ្ឍ App។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនជំហានសំខាន់ៗដើម្បីរៀបចំ និងដាក់ផ្សាយ App។

---

## 1. ទិដ្ឋភាពទូទៅនៃការដាក់ផ្សាយ App

ការដាក់ផ្សាយ App ទាមទារការរៀបចំ និងការធ្វើតេស្តឱ្យបានត្រឹមត្រូវ។ ជំហានសំខាន់ៗរួមមាន៖
- កំណត់រូបតំណាង (App Icon) និង Launch Screen។
- ធ្វើតេស្ត App នៅលើ Emulator និងឧបករណ៍ពិត។
- បង្កើត Build សម្រាប់ iOS (IPA) និង Android (APK/AAB)។
- បង្កើត Developer Account និងដាក់ផ្សាយ App។

---

## 2. ការរៀបចំ App សម្រាប់ Deployment

### 2.1 កំណត់ App Icon
- បង្កើតរូបតំណាង App ដែលមានទំហំផ្សេងៗគ្នាសម្រាប់ iOS និង Android។
- ប្រើ Package \`flutter_launcher_icons\` ដើម្បីបង្កើត Icons៖
  - បន្ថែម \`flutter_launcher_icons\` ទៅ \`pubspec.yaml\`:
    \`\`\`yaml
    dev_dependencies:
      flutter_launcher_icons: ^0.13.1
    flutter_launcher_icons:
      android: true
      ios: true
      image_path: "assets/icon/icon.png"
    \`\`\`
  - ដំណើរការ Command: \`flutter pub run flutter_launcher_icons:main\`

### 2.2 កំណត់ Launch Screen
- សម្រាប់ Android: កែ File \`android/app/src/main/res/drawable/launch_background.xml\`។
- សម្រាប់ iOS: កែ Launch Screen នៅក្នុង \`ios/Runner/Assets.xcassets/LaunchImage.imageset\`។

### 2.3 កំណត់ App Metadata
- កែ File \`pubspec.yaml\` ដើម្បីកំណត់ \`name\`, \`description\`, និង \`version\`:
  \`\`\`yaml
  name: my_app
  description: A new Flutter application.
  version: 1.0.0+1
  \`\`\`

---

## 3. ការធ្វើតេស្ត App មុនពេលដាក់ផ្សាយ

- **Unit Testing:** សរសេរ Tests សម្រាប់ Logic នៅក្នុង App។
- **Integration Testing:** សាកល្បង App នៅលើ Emulator និងឧបករណ៍ពិត។
- **Performance Testing:** ប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។
- **Crash Reporting:** ប្រើ Package ដូចជា \`sentry\` ឬ \`firebase_crashlytics\`។

---

## 4. ការបង្កើត Build សម្រាប់ Android

### 4.1 បង្កើត KeyStore សម្រាប់ Signing
- បង្កើត KeyStore ដោយប្រើ Command:
  \`\`\`bash
  keytool -genkey -v -keystore ~/my_app.keystore -alias my_app -keyalg RSA -keysize 2048 -validity 10000
  \`\`\`
- កែ File \`android/key.properties\`:
  \`\`\`
  storePassword=your_password
  keyPassword=your_password
  keyAlias=my_app
  storeFile=/path/to/my_app.keystore
  \`\`\`

### 4.2 កែ File \`android/app/build.gradle\`
- បន្ថែម Signing Config:
  \`\`\`gradle
  android {
      ...
      signingConfigs {
          release {
              keyAlias keystoreProperties['keyAlias']
              keyPassword keystoreProperties['keyPassword']
              storeFile file(keystoreProperties['storeFile'])
              storePassword keystoreProperties['storePassword']
          }
      }
      buildTypes {
          release {
              signingConfig signingConfigs.release
          }
      }
  }
  \`\`\`

### 4.3 បង្កើត APK ឬ App Bundle
- សម្រាប់ APK:
  \`\`\`bash
  flutter build apk --release
  \`\`\`
- សម្រាប់ App Bundle (AAB):
  \`\`\`bash
  flutter build appbundle --release
  \`\`\`

---

## 5. ការបង្កើត Build សម្រាប់ iOS

### 5.1 កំណត់ Bundle Identifier
- កែ File \`ios/Runner/Info.plist\`:
  \`\`\`xml
  <key>CFBundleIdentifier</key>
  <string>com.example.myapp</string>
  \`\`\`

### 5.2 បង្កើត Build Archive
- បើក Xcode និងជ្រើស \`Runner\` Project។
- កំណត់ Signing Team នៅក្នុង \`Signing & Capabilities\`។
- បង្កើត Archive:
  - ជ្រើស \`Product > Archive\` នៅក្នុង Xcode។
  - នាំចេញ IPA File ពី Archive។

---

## 6. ការបង្កើត Developer Account

### 6.1 Apple Developer Account
- ចុះឈ្មោះនៅ [Apple Developer Program](https://developer.apple.com/programs/) ($99/ឆ្នាំ)។
- បង្កើត App ID នៅក្នុង [Apple Developer Portal](https://developer.apple.com/account)។

### 6.2 Google Play Developer Account
- ចុះឈ្មោះនៅ [Google Play Console](https://play.google.com/console) ($25 ម្តងគត់)។
- បង្កើត App នៅក្នុង Play Console។

---

## 7. ការដាក់ផ្សាយ App

### 7.1 ដាក់ផ្សាយទៅ App Store
- បើក [App Store Connect](https://appstoreconnect.apple.com/)។
- បង្កើត App ថ្មី និងបំពេញ Metadata (ឈ្មោះ, ការពិពណ៌នា, Screenshots)។
- បង្ហោះ IPA File ដោយប្រើ Xcode ឬ \`Transporter\` App។
- ដាក់ស្នើ App សម្រាប់ Review។

### 7.2 ដាក់ផ្សាយទៅ Play Store
- បើក [Google Play Console](https://play.google.com/console)។
- បង្កើត App ថ្មី និងបំពេញ Metadata (ឈ្មោះ, ការពិពណ៌នា, Screenshots)។
- បង្ហោះ AAB ឬ APK File។
- ដាក់ស្នើ App សម្រាប់ Review។

---

## 8. គន្លឹះសម្រាប់ការដាក់ផ្សាយ App

- ធ្វើតេស្ត App ឱ្យបានហ្មត់ចត់មុនពេលដាក់ផ្សាយ។
- ប្រើ \`flutter_launcher_icons\` សម្រាប់ App Icon។
- បន្ថែម Crash Reporting ដើម្បីតាមដាន Errors។
- បំពេញ Metadata និង Screenshots ឱ្យបានច្បាស់លាស់។
- ប្រើ Flutter DevTools ដើម្បីវិភាគ Performance មុនពេល Build។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ កំណត់ App Icon</h3>
<p>ប្រើ <code>flutter_launcher_icons</code> ដើម្បីបង្កើត App Icon។</p>
<pre><code class="language-yaml">
dev_dependencies:
  flutter_launcher_icons: ^0.13.1
flutter_launcher_icons:
  android: true
  ios: true
  image_path: "assets/icon/icon.png"
</code></pre>
<p>ដំណើរការ Command: <code>flutter pub run flutter_launcher_icons:main</code></p>
<hr>
<h3>ឧទាហរណ៍៖ កំណត់ Signing សម្រាប់ Android</h3>
<p>បង្កើត <code>key.properties</code> File។</p>
<pre><code class="language-properties">
storePassword=your_password
keyPassword=your_password
keyAlias=my_app
storeFile=/path/to/my_app.keystore
</code></pre>
<p>កែ <code>android/app/build.gradle</code>:</p>
<pre><code class="language-gradle">
android {
    ...
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត App Bundle</h3>
<p>ដំណើរការ Command ដើម្បីបង្កើត AAB៖</p>
<pre><code class="language-bash">
flutter build appbundle --release
</code></pre>
`],
  quiz: [
    {
      question: 'តើជំហានដំបូងសម្រាប់ការដាក់ផ្សាយ Flutter App គឺជាអ្វី?',
      options: [
        'បង្កើត App Icon',
        'ធ្វើតេស្ត App',
        'បង្កើត Developer Account',
        'បង្កើត Build'
      ],
      correct: 1,
      explanation: 'ធ្វើតេស្ត App ឱ្យបានហ្មត់ចត់គឺជាជំហានដំបូងដើម្បីធានាគុណភាព។'
    },
    {
      question: 'តើ Package អ្វីជួយបង្កើត App Icon សម្រាប់ Flutter?',
      options: [
        'flutter_test',
        'flutter_launcher_icons',
        'provider',
        'http'
      ],
      correct: 1,
      explanation: '`flutter_launcher_icons` ជួយបង្កើត App Icon សម្រាប់ iOS និង Android។'
    },
    {
      question: 'តើ File អ្វីត្រូវកែសម្រាប់ Signing នៅក្នុង Android?',
      options: [
        'Info.plist',
        'key.properties',
        'pubspec.yaml',
        'build.gradle'
      ],
      correct: 1,
      explanation: '`key.properties` ត្រូវបានប្រើសម្រាប់កំណត់ Signing Config។'
    },
    {
      question: 'តើ Command អ្វីប្រើសម្រាប់បង្កើត App Bundle?',
      options: [
        'flutter run',
        'flutter build apk',
        'flutter build appbundle',
        'flutter pub get'
      ],
      correct: 2,
      explanation: '`flutter build appbundle` បង្កើត AAB File សម្រាប់ Play Store។'
    },
    {
      question: 'តើអ្វីត្រូវការសម្រាប់ការដាក់ផ្សាយ App ទៅ App Store?',
      options: [
        'APK File',
        'IPA File',
        'AAB File',
        'KeyStore'
      ],
      correct: 1,
      explanation: 'IPA File ត្រូវការសម្រាប់ការដាក់ផ្សាយទៅ App Store។'
    },
    {
      question: 'តើតម្លៃនៃ Apple Developer Program គឺជាអ្វី?',
      options: [
        '$25/ឆ្នាំ',
        '$99/ឆ្នាំ',
        '$50/ឆ្នាំ',
        'ឥតគិតថ្លៃ'
      ],
      correct: 1,
      explanation: 'Apple Developer Program មានតម្លៃ $99/ឆ្នាំ។'
    },
    {
      question: 'តើ Google Play Console មានតម្លៃប៉ុន្មាន?',
      options: [
        '$25 ម្តងគត់',
        '$99/ឆ្នាំ',
        '$50/ឆ្នាំ',
        'ឥតគិតថ្លៃ'
      ],
      correct: 0,
      explanation: 'Google Play Console មានតម្លៃ $25 ម្តងគត់។'
    },
    {
      question: 'តើ Flutter DevTools ជួយអ្វីមុនពេលដាក់ផ្សាយ App?',
      options: [
        'បង្កើត App Icon',
        'វិភាគ Performance',
        'បង្កើត Build',
        'បង្ហោះ App'
      ],
      correct: 1,
      explanation: 'Flutter DevTools ជួយវិភាគ Performance និង Widget Tree។'
    },
    {
      question: 'តើ File អ្វីត្រូវកែសម្រាប់ Bundle Identifier នៅក្នុង iOS?',
      options: [
        'build.gradle',
        'Info.plist',
        'key.properties',
        'pubspec.yaml'
      ],
      correct: 1,
      explanation: '`Info.plist` ត្រូវបានប្រើសម្រាប់កំណត់ Bundle Identifier។'
    },
    {
      question: 'តើកម្មវិធីអ្វីប្រើសម្រាប់បង្ហោះ IPA File ទៅ App Store Connect?',
      options: [
        'Xcode',
        'Android Studio',
        'Transporter',
        'Flutter DevTools'
      ],
      correct: 2,
      explanation: '`Transporter` App ឬ Xcode ត្រូវបានប្រើសម្រាប់បង្ហោះ IPA File។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App និងរៀបចំវាសម្រាប់ដាក់ផ្សាយទៅ App Store និង Play Store។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Flutter App សាមញ្ញ (ឧ. Counter App)។
   - កំណត់ \`name\`, \`description\`, និង \`version\` នៅក្នុង \`pubspec.yaml\`។

2. **App Icon និង Launch Screen:**
   - បន្ថែម \`flutter_launcher_icons\` Package និងកំណត់ App Icon។
   - កំណត់ Launch Screen សម្រាប់ iOS និង Android។

3. **Testing:**
   - សរសេរ Unit Test សម្រាប់ Counter Logic។
   - សាកល្បង App នៅលើ Emulator និងឧបករណ៍ពិត។
   - ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Performance។

4. **Build Preparation:**
   - បង្កើត KeyStore សម្រាប់ Android និងកំណត់ Signing Config។
   - កំណត់ Bundle Identifier សម្រាប់ iOS។
   - បង្កើត APK ឬ AAB សម្រាប់ Android។
   - បង្កើត IPA File សម្រាប់ iOS។

5. **Documentation:**
   - រៀបចំ Metadata (ឈ្មោះ, ការពិពណ៌នា, Screenshots) សម្រាប់ App Store និង Play Store។

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងឧបករណ៍ពិត និងប្រើ Flutter DevTools ដើម្បីធានា Performance។
    `,
    solution: `
\`\`\`dart
// main.dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: CounterScreen(),
    );
  }
}

class CounterScreen extends StatefulWidget {
  const CounterScreen({Key? key}) : super(key: key);

  @override
  _CounterScreenState createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Counter App')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('ចំនួន:', style: TextStyle(fontSize: 20)),
            Text('$_counter', style: const TextStyle(fontSize: 40)),
            ElevatedButton(
              onPressed: _incrementCounter,
              child: const Text('បន្ថែម'),
            ),
          ],
        ),
      ),
    );
  }
}

// pubspec.yaml
name: counter_app
description: A simple Flutter counter application.
version: 1.0.0+1
environment:
  sdk: '>=2.12.0 <3.0.0'
dependencies:
  flutter:
    sdk: flutter
dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_launcher_icons: ^0.13.1
flutter_launcher_icons:
  android: true
  ios: true
  image_path: "assets/icon/icon.png"

// test/counter_test.dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Counter increments correctly', () {
    int counter = 0;
    counter++;
    expect(counter, 1);
  });
}
\`\`\`

**ការរៀបចំ Android:**
1. បង្កើត KeyStore:
\`\`\`bash
keytool -genkey -v -keystore ~/counter_app.keystore -alias counter_app -keyalg RSA -keysize 2048 -validity 10000
\`\`\`
2. បង្កើត \`android/key.properties\`:
\`\`\`
storePassword=your_password
keyPassword=your_password
keyAlias=counter_app
storeFile=/path/to/counter_app.keystore
\`\`\`
3. កែ \`android/app/build.gradle\`:
\`\`\`gradle
android {
    ...
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
\`\`\`
4. បង្កើត AAB:
\`\`\`bash
flutter build appbundle --release
\`\`\`

**ការរៀបចំ iOS:**
1. កែ \`ios/Runner/Info.plist\`:
\`\`\`xml
<key>CFBundleIdentifier</key>
<string>com.example.counterapp</string>
\`\`\`
2. បើក Xcode និងកំណត់ Signing Team។
3. បង្កើត Archive និងនាំចេញ IPA File។

**Metadata សម្រាប់ App Store/Play Store:**
- ឈ្មោះ: Counter App
- ការពិពណ៌នា: A simple counter application built with Flutter.
- Screenshots: ថតរូប Screen នៅលើឧបករណ៍ផ្សេងៗ។
`
  }
};

export default FlutterLesson7_3Content;