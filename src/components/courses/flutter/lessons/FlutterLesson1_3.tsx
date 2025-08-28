import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson1_3Content: LessonContent = {
  title: 'ការដំឡើង និងការរៀបចំ Flutter',
  objectives: [
    'យល់ដឹងអំពី​ development enviroment សម្រាប់ Flutter',
    'រៀនរបៀបដំឡើង Flutter SDK និង Tools ចាំបាច់',
    'ស្វែងយល់ពីការរៀបចំ Android Studio ឬ VS Code សម្រាប់ Flutter',
    'បង្កើត Flutter Project ដំបូង និងសាកល្បងនៅលើ Emulator ឬ Physical Device',
    'ដោះស្រាយបញ្ហាទូទៅនៅពេលដំឡើង Flutter'
  ],
  content: `
# ការដំឡើង និងការរៀបចំ Flutter 🛠️🚀

---

ការចាប់ផ្តើមអភិវឌ្ឍជាមួយ **Flutter** តម្រូវឱ្យមានការរៀបចំ​ development enviroment ឱ្យបានត្រឹមត្រូវ។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបដំឡើង Flutter SDK, Android Studio ឬ VS Code, និងរបៀបបង្កើត Flutter Project ដំបូង។

---

## 1. តើ​ development enviroment  Flutter មានអ្វីខ្លះ?

ការអភិវឌ្ឍ Flutter តម្រូវឱ្យមានឧបករណ៍ដូចខាងក្រោម៖
- **Flutter SDK:** ផ្តល់ Libraries និង Tools សម្រាប់បង្កើត Flutter Apps។
- **Dart SDK:** ត្រូវបានរួមបញ្ចូលជាមួយ Flutter SDK។
- **IDE:** Android Studio, Visual Studio Code, ឬ IntelliJ IDEA។
- **Android SDK:** សម្រាប់ Android Development និង Emulator។
- **Xcode (សម្រាប់ macOS):** សម្រាប់ iOS Development និង Simulator។
- **Device ឬ Emulator:** សម្រាប់សាកល្បងកម្មវិធី។

---

## 2. ការដំឡើង Flutter SDK

### ជំហានទី ១: ទាញយក Flutter SDK
- ចូលទៅកាន់ [Flutter Official Website](https://flutter.dev/docs/get-started/install)។
- ទាញយក Flutter SDK សម្រាប់ប្រព័ន្ធប្រតិបត្តិការរបស់អ្នក (Windows, macOS, Linux)។
- ពន្លាឯកសារ ZIP ទៅកាន់ទីតាំងមួយ (ឧទាហរណ៍៖ \`C:\\flutter\` នៅលើ Windows)។
- បន្ថែម Flutter \`bin\` Folder ទៅក្នុង PATH Environment Variable៖
  - Windows: បន្ថែម \`C:\\flutter\\bin\` ទៅ System PATH។
  - macOS/Linux: បន្ថែម \`export PATH="$PATH:/path/to/flutter/bin"\` ទៅ \`.zshrc\` ឬ \`.bashrc\`។

### ជំហានទី ២: ពិនិត្យការដំឡើង
- បើក Terminal ឬ Command Prompt។
- វាយ \`flutter doctor\` ដើម្បីពិនិត្យថាតើមាន Tools អ្វីខ្លះដែលត្រូវការបន្ថែម។
- **លទ្ធផលឧទាហរណ៍:**
  \`\`\`
  [✓] Flutter (Channel stable, 3.x.x, on macOS 14.x)
  [✗] Android toolchain - develop for Android devices
  [✗] Xcode - develop for iOS and macOS
  [✓] Chrome - develop for the web
  [✓] VS Code (version 1.x.x)
  \`\`\`
- ដោះស្រាយបញ្ហាដែល \`flutter doctor\` បង្ហាញ (ឧទាហរណ៍៖ ដំឡើង Android SDK ឬ Xcode)។

---

## 3. ការរៀបចំ Android Studio ឬ VS Code

### ជម្រើសទី ១: Android Studio
- **ទាញយក:** ទាញយក [Android Studio](https://developer.android.com/studio)។
- **ដំឡើង Plugins:**
  - បើក Android Studio > File > Settings > Plugins។
  - ស្វែងរក និងដំឡើង "Flutter" និង "Dart" Plugins។
- **កំណត់ Android SDK:**
  - ចូលទៅ SDK Manager > ដំឡើង Android SDK Platforms និង Tools។
  - បង្កើត Android Virtual Device (AVD) សម្រាប់ Emulator។
- **បង្កើត Project:**
  - File > New > New Flutter Project > ជ្រើសរើស "Application" > បញ្ចូល Project Name។
  - ចុច Run ដើម្បីសាកល្បងនៅលើ Emulator។

### ជម្រើសទី ២: Visual Studio Code
- **ទាញយក:** ទាញយក [VS Code](https://code.visualstudio.com/)។
- **ដំឡើង Extensions:**
  - បើក Extensions Marketplace > ដំឡើង "Flutter" និង "Dart" Extensions។
- **កំណត់ Flutter SDK:**
  - បើក VS Code > Command Palette (\`Ctrl+Shift+P\`) > វាយ \`Flutter: Select Device\`។
- **បង្កើត Project:**
  - Command Palette > \`Flutter: New Project\` > បញ្ចូល Project Name។
  - ចុច Run ដើម្បីសាកល្បងនៅលើ Emulator ឬ Device។

---

## 4. ការបង្កើត Flutter Project ដំបូង

- **បង្កើត Project:**
  - នៅ Terminal ឬ Command Prompt វាយ៖
    \`\`\`bash
    flutter create my_first_app
    cd my_first_app
    \`\`\`
- **រចនាសម្ព័ន្ធ Project:**
  - \`lib/main.dart\`: ឯកសារចម្បងសម្រាប់ Dart Code។
  - \`pubspec.yaml\`: ឯកសារសម្រាប់កំណត់ Dependencies និង Assets។
  - \`android/\` និង \`ios/\`: Folders សម្រាប់ Native Code។
- **សាកល្បង Project:**
  - ភ្ជាប់ Device ឬបើក Emulator។
  - វាយ \`flutter run\` ដើម្បីសាកល្បង App។

  ---

**ឧទាហរណ៍កូដនៅក្នុង \`lib/main.dart\`:**
\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My First Flutter App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('សូមស្វាគមន៍មកកាន់ Flutter!'),
        ),
        body: Center(
          child: Text('នេះជា App ដំបូងរបស់ខ្ញុំ!'),
        ),
      ),
    );
  }
}
\`\`\`

---

## 5. ការដោះស្រាយបញ្ហាទូទៅ

- **បញ្ហា: Flutter Doctor បង្ហាញថា Android SDK មិនត្រូវបានដំឡើង**
  - ដំណោះស្រាយ: ចូលទៅ Android Studio > SDK Manager > ដំឡើង Android SDK Platforms និង Tools។
- **បញ្ហា: Emulator មិនដំណើរការ**
  - ដំណោះស្រាយ: បង្កើត AVD ថ្មីនៅក្នុង Android Studio > AVD Manager។
- **បញ្ហា: Flutter Command Not Found**
  - ដំណោះស្រាយ: ពិនិត្យ PATH Environment Variable និងបន្ថែម Flutter \`bin\` Folder។
- **បញ្ហា: iOS Simulator មិនដំណើរការ (macOS)**
  - ដំណោះស្រាយ: ដំឡើង Xcode និង Command Line Tools (\`xcode-select --install\`)។

---

## 6. គន្លឹះសម្រាប់ការរៀបចំ Flutter

- តែងតែរក្សា Flutter SDK ឱ្យទាន់សម័យដោយប្រើ \`flutter upgrade\`។
- ប្រើ \`flutter doctor\` ជាប្រចាំដើម្បីពិនិត្យ​ development enviroment ។
- សាកល្បង App នៅលើ Devices ផ្សេងៗ (iOS, Android) ដើម្បីធានាភាព Compatible។
- រៀនប្រើ Pub.dev ដើម្បីស្វែងរក Packages ដែលជួយសម្រួលការអភិវឌ្ឍ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្កើត Flutter Project ដំបូង</h3>
<p>បង្កើត App សាមញ្ញជាមួយ Text Widget។</p>
<pre><code class="language-dart">
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'First App',
      home: Scaffold(
        appBar: AppBar(title: Text('Flutter ដំបូង')),
        body: Center(child: Text('សួស្តី Flutter!')),
      ),
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បន្ថែម Button នៅក្នុង Flutter App</h3>
<p>បន្ថែម Button ដែលបង្ហាញ Alert Dialog។</p>
<pre><code class="language-dart">
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'First App',
      home: Scaffold(
        appBar: AppBar(title: Text('Flutter ដំបូង')),
        body: Center(
          child: ElevatedButton(
            onPressed: () {
              showDialog(
                context: context,
                builder: (context) => AlertDialog(
                  title: Text('សួស្តី'),
                  content: Text('នេះជា Flutter App ដំបូង!'),
                  actions: [
                    TextButton(
                      onPressed: () => Navigator.pop(context),
                      child: Text('បិទ'),
                    ),
                  ],
                ),
              );
            },
            child: Text('ចុចខ្ញុំ!'),
          ),
        ),
      ),
    );
  }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជា Tool ចម្បងសម្រាប់អភិវឌ្ឍ Flutter?',
      options: [
        'Flutter SDK',
        'Node.js',
        'Java SDK',
        'Python'
      ],
      correct: 0,
      explanation: 'Flutter SDK គឺជា Tool ចម្បងសម្រាប់អភិវឌ្ឍ Flutter Apps។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីពិនិត្យបរិស្ថាន Flutter?',
      options: [
        'flutter run',
        'flutter doctor',
        'flutter create',
        'flutter build'
      ],
      correct: 1,
      explanation: '`flutter doctor` ពិនិត្យ​ development enviroment  Flutter។'
    },
    {
      question: 'តើ IDE ណាដែលត្រូវបានណែនាំសម្រាប់ Flutter?',
      options: [
        'Notepad',
        'Android Studio',
        'Photoshop',
        'Excel'
      ],
      correct: 1,
      explanation: 'Android Studio និង VS Code ត្រូវបានណែនាំសម្រាប់ Flutter�।'
    },
    {
      question: 'តើឯកសារ `pubspec.yaml` មានតួនាទីអ្វី?',
      options: [
        'រក្សាទុក UI Code',
        'កំណត់ Dependencies និង Assets',
        'រក្សាទុក Native Code',
        'បង្កើត Emulator'
      ],
      correct: 1,
      explanation: '`pubspec.yaml` កំណត់ Dependencies និង Assets សម្រាប់ Flutter Project។'
    },
    {
      question: 'តើ Command ណាដែលប្រើដើម្បីបង្កើត Flutter Project ថ្មី?',
      options: [
        'flutter run',
        'flutter create',
        'flutter doctor',
        'flutter build'
      ],
      correct: 1,
      explanation: '`flutter create` ប្រើសម្រាប់បង្កើត Flutter Project ថ្មី។'
    },
    {
      question: 'តើអ្វីជា Emulator នៅក្នុង Flutter?',
      options: [
        'ឧបករណ៍សម្រាប់សរសេរ Code',
        'កម្មវិធីសម្រាប់សាកល្បង App នៅលើកុំព្យូទ័រ',
        'Database System',
        'Web Server'
      ],
      correct: 1,
      explanation: 'Emulator ជួយសាកល្បង App នៅលើកុំព្យូទ័រ។'
    },
    {
      question: 'តើ Xcode ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'Android Development',
        'iOS Development',
        'Web Development',
        'Database Management'
      ],
      correct: 1,
      explanation: 'Xcode ត្រូវបានប្រើសម្រាប់ iOS Development និង Simulator។'
    },
    {
      question: 'តើអ្វីជាបញ្ហាទូទៅនៅពេលដំឡើង Flutter?',
      options: [
        'Flutter Command Not Found',
        'Database Connection Error',
        'Web Server Failure',
        'UI Rendering Error'
      ],
      correct: 0,
      explanation: 'Flutter Command Not Found គឺជាបញ្ហាទូទៅបណ្តាលមកពី PATH មិនត្រឹមត្រូវ។'
    },
    {
      question: 'តើ Plugin ណាដែលត្រូវដំឡើងនៅក្នុង Android Studio សម្រាប់ Flutter?',
      options: [
        'Java Plugin',
        'Flutter Plugin',
        'Python Plugin',
        'CSS Plugin'
      ],
      correct: 1,
      explanation: 'Flutter និង Dart Plugins ត្រូវបានដំឡើងនៅក្នុង Android Studio។'
    },
    {
      question: 'តើអ្វីជាគន្លឹះដើម្បីរក្សា Flutter SDK ឱ្យទាន់សម័យ?',
      options: [
        'flutter run',
        'flutter upgrade',
        'flutter doctor',
        'flutter create'
      ],
      correct: 1,
      explanation: '`flutter upgrade` ធ្វើឱ្យ Flutter SDK ទាន់សម័យ។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter Project ដំបូង និងសាកល្បងនៅលើ Emulator។

**តម្រូវការ:**

1. **ការរៀបចំបរិស្ថាន:**
   - ដំឡើង Flutter SDK និង Android Studio ឬ VS Code។
   - ដំឡើង Flutter និង Dart Plugins។
   - ពិនិត្យបរិស្ថានជាមួយ \`flutter doctor\`។

2. **បង្កើត Project:**
   - បង្កើត Flutter Project ថ្មីឈ្មោះ "my_first_app" ដោយប្រើ \`flutter create my_first_app\`។
   - បើក Project នៅក្នុង Android Studio ឬ VS Code។

3. **កែកូដ:**
   - កែ \`lib/main.dart\` ដើម្បីបង្ហាញ AppBar ជាមួយ Title "My First App"។
   - បន្ថែម Text Widget នៅកណ្តាលអេក្រង់ជាមួយសារ "សួស្តី! នេះជា App ដំបូងរបស់ខ្ញុំ!"។
   - បន្ថែម ElevatedButton ដែលបង្ហាញ AlertDialog នៅពេលចុច។

4. **សាកល្បង:**
   - ភ្ជាប់ Emulator ឬ Physical Device។
   - ដំណើរការ App ដោយប្រើ \`flutter run\`។

**ការណែនាំ:** ត្រូវប្រាកដថា Android SDK និង Emulator ត្រូវបានដំឡើងត្រឹមត្រូវ។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My First App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('My First App'),
          backgroundColor: Colors.blue,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'សួស្តី! នេះជា App ដំបូងរបស់ខ្ញុំ!',
                style: TextStyle(fontSize: 24),
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  showDialog(
                    context: context,
                    builder: (context) => AlertDialog(
                      title: Text('សួស្តី'),
                      content: Text('នេះជា App ដំបូងរបស់ខ្ញុំ!'),
                      actions: [
                        TextButton(
                          onPressed: () => Navigator.pop(context),
                          child: Text('បិទ'),
                        ),
                      ],
                    ),
                  );
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.blue,
                  padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                ),
                child: Text(
                  'ចុចខ្ញុំ!',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
\`\`\`
`
  }
};

export default FlutterLesson1_3Content;
