import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson11_3Content: LessonContent = {
  title: 'ការប្រើ CI/CD សម្រាប់ Flutter Apps',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ CI/CD នៅក្នុងការអភិវឌ្ឍន៍ Flutter Apps',
    'ស្វែងយល់ពីរបៀបបន្ថែម CI/CD Pipeline ដោយប្រើ GitHub Actions',
    'រៀនកំណត់រចនាសម្ព័ន្ធ Pipeline សម្រាប់ Testing និង Building Flutter Apps',
    'អនុវត្តន៍ការបង្កើត CI/CD Pipeline សម្រាប់ Flutter Project',
    'ស្គាល់ការធ្វើ Automated Testing នៅក្នុង CI/CD',
    'រៀនបច្ចេកទេស Debugging នៅពេល Pipeline បរាជ័យ',
    'ស្វែងយល់ពីការបង្កើនប្រសិទ្ធភាព CI/CD Pipeline',
    'យល់ពីការដាក់ឱ្យប្រើប្រាស់ (Deploy) Flutter Apps ទៅ App Stores'
  ],
  content: `
# ការប្រើ CI/CD សម្រាប់ Flutter Apps 🚀

---

**CI/CD** (Continuous Integration/Continuous Deployment) គឺជាវិធីសាស្ត្រដែលអនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ធ្វើការសាកល្បង និងដាក់ឱ្យប្រើប្រាស់កម្មវិធីដោយស្វ័យប្រវត្តិ។ នៅក្នុងមេរៀននេះ យើងនឹងប្រើ **GitHub Actions** ដើម្បីបង្កើត CI/CD Pipeline សម្រាប់ Flutter App។

---

## 1. អ្វីទៅជា CI/CD?

- **Continuous Integration (CI):** ធ្វើការសាកល្បង និង Build ដោយស្វ័យប្រវត្តិនៅពេល Code ត្រូវបាន Push ទៅ Repository។
- **Continuous Deployment (CD):** ដាក់ឱ្យប្រើប្រាស់ App ទៅ App Stores ឬ Servers ដោយស្វ័យប្រវត្តិ។
- **អត្ថប្រយោជន៍:**
  - កាត់បន្ថយ Errors ដោយសាកល្បងជាប្រចាំ។
  - សន្សំពេលវេលាក្នុងការដាក់ឱ្យប្រើប្រាស់។
  - បង្កើនគុណភាព Code។

---

## 2. ការដំឡើង CI/CD ជាមួយ GitHub Actions

### 2.1 តម្រូវការជាមុន
- Flutter Project ដែល Host នៅលើ GitHub Repository។
- Flutter SDK ត្រូវបានកំណត់រចនាសម្ព័ន្ធត្រឹមត្រូវ។
- GitHub Account និង Repository។

### 2.2 បង្កើត GitHub Actions Workflow
1. បង្កើត Folder \`.github/workflows\` នៅក្នុង Project Root។
2. បង្កើត File \`flutter_ci.yml\` នៅក្នុង \`.github/workflows\`:

\`\`\`yaml
name: Flutter CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      # Checkout code
      - uses: actions/checkout@v4

      # Set up Java
      - uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'adopt'

      # Set up Flutter
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.24.0'
          channel: 'stable'

      # Install dependencies
      - name: Install dependencies
        run: flutter pub get

      # Run tests
      - name: Run tests
        run: flutter test

      # Build APK
      - name: Build APK
        run: flutter build apk --release

      # Upload artifact
      - name: Upload APK
        uses: actions/upload-artifact@v4
        with:
          name: app-release
          path: build/app/outputs/flutter-apk/app-release.apk
\`\`\`

**ការពន្យល់:**
- \`on\`: កំណត់ Events ដែល Trigger Workflow (ឧទាហរណ៍ Push ឬ Pull Request ទៅ Branch \`main\`)។
- \`runs-on\`: ប្រើ Ubuntu Server សម្រាប់ CI។
- \`actions/checkout\`: Clone Repository។
- \`actions/setup-java\`: ដំឡើង Java សម្រាប់ Android Build។
- \`subosito/flutter-action\`: ដំឡើង Flutter SDK។
- \`flutter pub get\`: ទាញ Dependencies។
- \`flutter test\`: ដំណើរការ Unit និង Widget Tests។
- \`flutter build apk\`: Build APK សម្រាប់ Android។
- \`actions/upload-artifact\`: Upload APK ទៅ GitHub Artifacts។

---

## 3. ការបន្ថែម Automated Testing

- **Unit Tests:** បន្ថែម Tests នៅក្នុង Folder \`test\`។
- **Widget Tests:** បន្ថែម Widget Tests នៅក្នុង Folder \`test\`។
- **Integration Tests:** បន្ថែម Integration Tests នៅក្នុង Folder \`integration_test\`។

**ឧទាហរណ៍កូដ (Unit Test):**

\`\`\`dart
// test/calculator_test.dart
import 'package:test/test.dart';
import 'package:my_app/calculator.dart';

void main() {
  group('Calculator', () {
    late Calculator calculator;

    setUp(() {
      calculator = Calculator();
    });

    test('should add two numbers correctly', () {
      expect(calculator.add(2, 3), equals(5));
    });
  });
}
\`\`\`

**ការដំណើរការ Tests:**
- Tests នឹងត្រូវបានដំណើរការដោយស្វ័យប្រវត្តិនៅក្នុង Workflow (\`flutter test\`)។

---

## 4. ការដាក់ឱ្យប្រើប្រាស់ (Deployment)

### 4.1 Deploy ទៅ Google Play Store
1. **បង្កើត Keystore:**
   \`\`\`bash
   keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key
   \`\`\`

2. **កំណត់ Keystore នៅក្នុង \`android/app/build.gradle\`:**
   \`\`\`gradle
   android {
       signingConfigs {
           release {
               keyAlias 'key'
               keyPassword 'your_key_password'
               storeFile file('/path/to/key.jks')
               storePassword 'your_store_password'
           }
       }
       buildTypes {
           release {
               signingConfig signingConfigs.release
           }
       }
   }
   \`\`\`

3. **បន្ថែម Deployment Step នៅក្នុង \`flutter_ci.yml\`:**
   \`\`\`yaml
   - name: Deploy to Google Play
     uses: r0adkll/sign-android-release@v1
     with:
       releaseDirectory: build/app/outputs/flutter-apk
       signingKeyBase64: \${{ secrets.SIGNING_KEY }}
       alias: \${{ secrets.ALIAS }}
       keyStorePassword: \${{ secrets.KEYSTORE_PASSWORD }}
       keyPassword: \${{ secrets.KEY_PASSWORD }}
   \`\`\`

4. **បន្ថែម Secrets នៅក្នុង GitHub Repository:**
   - ចូលទៅ Settings > Secrets and variables > Actions។
   - បន្ថែម Secrets: \`SIGNING_KEY\`, \`ALIAS\`, \`KEYSTORE_PASSWORD\`, \`KEY_PASSWORD\`។

### 4.2 Deploy ទៅ App Store (iOS)
- ប្រើ Fastlane ឬ Manual Upload ទៅ App Store Connect។
- កំណត់ \`ios/Runner/Info.plist\` និង Export Options។

---

## 5. ការគ្រប់គ្រង Asynchronous Operations

- **Asynchronous Builds:** GitHub Actions គ្រប់គ្រង Asynchronous Tasks ដោយស្វ័យប្រវត្តិ។
- **Error Handling:** ប្រើ \`try/catch\` នៅក្នុង Tests និង Monitor Workflow Logs។

**ឧទាហរណ៍:**
\`\`\`dart
test('should handle async operation', () async {
  try {
    final result = await someAsyncFunction();
    expect(result, equals(expectedValue));
  } catch (e) {
    fail('Async operation failed: $e');
  }
});
\`\`\`

---

## 6. ការបង្កើនប្រសិទ្ធភាព និង Debugging

- **បង្កើនប្រសិទ្ធភាព Pipeline:**
  - Cache Dependencies ដើម្បីកាត់បន្ថយ Build Time។
  - ប្រើ Matrix Builds សម្រាប់ Multiple Platforms (Android/iOS)។
- **Debugging:**
  - ពិនិត្យ GitHub Actions Logs នៅក្នុង Repository > Actions។
  - បន្ថែម \`echo\` ឬ \`print\` នៅក្នុង Workflow Steps សម្រាប់ Debugging។
- **ប្រើ Flutter DevTools:** វិភាគ Performance នៅពេលសាកល្បង Locally។

**Cache Dependencies:**
\`\`\`yaml
- name: Cache Flutter dependencies
  uses: actions/cache@v4
  with:
    path: |
      ~/.pub-cache
      **/pubspec.lock
    key: \${{ runner.os }}-flutter-\${{ hashFiles('**/pubspec.lock') }}
\`\`\`

---

## 7. ការប្រើ GitHub Actions Dashboard

- **Workflow Logs:** ពិនិត្យ Build និង Test Results។
- **Artifacts:** ទាញយក APK ឬ IPA Files។
- **Triggers:** កំណត់ Events (Push, Pull Request)។

---

## 8. គន្លឹះសម្រាប់ CI/CD

- បន្ថែម Tests សម្រាប់ Unit, Widget, និង Integration Testing។
- ប្រើ Secrets សម្រាប់ Sensitive Data (Keystore, Passwords)។
- Cache Dependencies ដើម្បីកាត់បន្ថយ Build Time។
- ពិនិត្យ Workflow Logs សម្រាប់ Debugging។
- ប្រើ Flutter DevTools សម្រាប់ Local Performance Testing។
- សាកល្បង Pipeline នៅលើ Emulator និងឧបករណ៍ពិត។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ GitHub Actions Workflow</h3>
<p>កំណត់រចនាសម្ព័ន្ធ Workflow សម្រាប់ Testing និង Building APK។</p>
<pre><code class="language-yaml">
name: Flutter CI
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'adopt'
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.24.0'
      - run: flutter pub get
      - run: flutter test
      - run: flutter build apk --release
      - uses: actions/upload-artifact@v4
        with:
          name: app-release
          path: build/app/outputs/flutter-apk/app-release.apk
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Caching Dependencies</h3>
<p>Cache Dependencies ដើម្បីកាត់បន្ថយ Build Time។</p>
<pre><code class="language-yaml">
- name: Cache Flutter dependencies
  uses: actions/cache@v4
  with:
    path: |
      ~/.pub-cache
      **/pubspec.lock
    key: \${{ runner.os }}-flutter-\${{ hashFiles('**/pubspec.lock') }}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Signing APK</h3>
<p>Sign APK សម្រាប់ Deployment។</p>
<pre><code class="language-yaml">
- name: Deploy to Google Play
  uses: r0adkll/sign-android-release@v1
  with:
    releaseDirectory: build/app/outputs/flutter-apk
    signingKeyBase64: \${{ secrets.SIGNING_KEY }}
    alias: \${{ secrets.ALIAS }}
    keyStorePassword: \${{ secrets.KEYSTORE_PASSWORD }}
    keyPassword: \${{ secrets.KEY_PASSWORD }}
</code></pre>
`],
  quiz: [
    {
      question: 'តើ CI/CD ជាអ្វី?',
      options: [
        'Database Management',
        'Continuous Integration និង Continuous Deployment',
        'Animation Framework',
        'API Client'
      ],
      correct: 1,
      explanation: 'CI/CD គឺ Continuous Integration និង Continuous Deployment។'
    },
    {
      question: 'តើ Tool អ្វីត្រូវបានប្រើនៅក្នុងមេរៀននេះសម្រាប់ CI/CD?',
      options: [
        'Jenkins',
        'GitHub Actions',
        'CircleCI',
        'Travis CI'
      ],
      correct: 1,
      explanation: 'GitHub Actions ត្រូវបានប្រើសម្រាប់ CI/CD។'
    },
    {
      question: 'តើ `flutter test` នៅក្នុង CI/CD Pipeline ធ្វើអ្វី?',
      options: [
        'Build APK',
        'Run Unit និង Widget Tests',
        'Deploy App',
        'Clean Project'
      ],
      correct: 1,
      explanation: '`flutter test` Run Unit និង Widget Tests។'
    },
    {
      question: 'តើ `actions/checkout` នៅក្នុង GitHub Actions ធ្វើអ្វី?',
      options: [
        'Build App',
        'Clone Repository',
        'Run Tests',
        'Deploy App'
      ],
      correct: 1,
      explanation: '`actions/checkout` Clone Repository។'
    },
    {
      question: 'តើ Secrets នៅក្នុង GitHub Actions ប្រើសម្រាប់អ្វី?',
      options: [
        'Run Tests',
        'Store Sensitive Data ដូចជា Keystore Passwords',
        'Build App',
        'Clean Project'
      ],
      correct: 1,
      explanation: 'Secrets Store Sensitive Data ដូចជា Keystore Passwords។'
    },
    {
      question: 'តើ Command អ្វីប្រើដើម្បី Build APK?',
      options: [
        'flutter run',
        'flutter build apk --release',
        'flutter test',
        'flutter clean'
      ],
      correct: 1,
      explanation: '`flutter build apk --release` Build APK។'
    },
    {
      question: 'តើ Flutter DevTools ជួយអ្វីនៅក្នុង CI/CD?',
      options: [
        'Run Tests',
        'វិភាគ Performance និង Widget Tree',
        'Deploy App',
        'Clean Project'
      ],
      correct: 1,
      explanation: 'Flutter DevTools វិភាគ Performance និង Widget Tree។'
    },
    {
      question: 'តើ Caching Dependencies ជួយអ្វីនៅក្នុង CI/CD?',
      options: [
        'Run Tests',
        'កាត់បន្ថយ Build Time',
        'Deploy App',
        'Clean Project'
      ],
      correct: 1,
      explanation: 'Caching Dependencies កាត់បន្ថយ Build Time។'
    },
    {
      question: 'តើ `actions/upload-artifact` ធ្វើអ្វី?',
      options: [
        'Run Tests',
        'Upload Build Outputs ទៅ GitHub',
        'Deploy App',
        'Clean Project'
      ],
      correct: 1,
      explanation: '`actions/upload-artifact` Upload Build Outputs ទៅ GitHub។'
    },
    {
      question: 'តើការប្រើ `try/catch` នៅក្នុង Tests ជួយអ្វី?',
      options: [
        'Build App',
        'គ្រប់គ្រង Errors',
        'Deploy App',
        'Clean Project'
      ],
      correct: 1,
      explanation: '`try/catch` គ្រប់គ្រង Errors នៅក្នុង Tests។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលមាន CI/CD Pipeline ដោយប្រើ GitHub Actions។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Flutter App សាមញ្ញ (ឧទាហរណ៍ Counter App)។
   - បន្ថែម Unit Tests នៅក្នុង \`test\` Folder។

2. **CI/CD Setup:**
   - បង្កើត GitHub Repository សម្រាប់ Flutter Project។
   - បន្ថែម \`.github/workflows/flutter_ci.yml\` សម្រាប់ CI/CD Pipeline។
   - កំណត់ Workflow ដើម្បី:
     - Checkout Code។
     - ដំឡើង Java និង Flutter SDK។
     - ទាញ Dependencies (\`flutter pub get\`)។
     - ដំណើរការ Tests (\`flutter test\`)។
     - Build APK (\`flutter build apk --release\`)។
     - Upload APK ទៅ GitHub Artifacts។

3. **Testing:**
   - បន្ថែម Unit Tests យ៉ាងហោចណាស់ ២ សម្រាប់ Counter Logic។
   - សាកល្បង Pipeline ដោយ Push Code ទៅ GitHub។

4. **Performance Optimization:**
   - បន្ថែម Caching សម្រាប់ Dependencies។
   - ប្រើ \`print\` ឬ Logs សម្រាប់ Debugging Pipeline Failures។

5. **Performance Testing:**
   - ពិនិត្យ Workflow Logs នៅក្នុង GitHub Actions Dashboard។
   - ប្រើ Flutter DevTools ដើម្បីវិភាគ Performance នៅ Locally។

**ការណែនាំ:** សាកល្បង App និង Pipeline នៅលើ Emulator និងឧបករណ៍ពិត និងប្រើ GitHub Actions Dashboard សម្រាប់ Debugging។
    `,
    solution: `
\`\`\`dart
// lib/main.dart
import 'package:flutter/material.dart';

void main() {
  runApp(const CounterApp());
}

class CounterApp extends StatelessWidget {
  const CounterApp({Key? key}) : super(key: key);

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
        child: Text('Counter: $_counter', style: const TextStyle(fontSize: 24)),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        child: const Icon(Icons.add),
      ),
    );
  }
}

// lib/calculator.dart
class Calculator {
  int add(int a, int b) => a + b;
  int increment(int value) => value + 1;
}

// test/calculator_test.dart
import 'package:test/test.dart';
import 'package:my_app/calculator.dart';

void main() {
  group('Calculator', () {
    late Calculator calculator;

    setUp(() {
      calculator = Calculator();
    });

    test('should add two numbers correctly', () {
      expect(calculator.add(2, 3), equals(5));
      expect(calculator.add(-1, 1), equals(0));
    });

    test('should increment number correctly', () {
      expect(calculator.increment(5), equals(6));
      expect(calculator.increment(0), equals(1));
    });
  });
}

// .github/workflows/flutter_ci.yml
name: Flutter CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'adopt'
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.24.0'
          channel: 'stable'
      - name: Cache Flutter dependencies
        uses: actions/cache@v4
        with:
          path: |
            ~/.pub-cache
            **/pubspec.lock
          key: \${{ runner.os }}-flutter-\${{ hashFiles('**/pubspec.lock') }}
      - name: Install dependencies
        run: flutter pub get
      - name: Run tests
        run: flutter test
      - name: Build APK
        run: flutter build apk --release
      - name: Upload APK
        uses: actions/upload-artifact@v4
        with:
          name: app-release
          path: build/app/outputs/flutter-apk/app-release.apk
\`\`\`
`
  }
};

export default FlutterLesson11_3Content;