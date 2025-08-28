import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson1_1Content: LessonContent = {
  title: 'ណែនាំអំពី Flutter',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា Flutter និងតួនាទីរបស់វា',
    'ស្វែងយល់ពីប្រវត្តិសង្ខេបនៃ Flutter',
    'ស្គាល់ការប្រើប្រាស់ Flutter ក្នុង Mobile App Development',
    'យល់ពីរបៀបដែល Flutter ដំណើរការជាមួយ Dart',
    'ប្រៀបធៀប Flutter ជាមួយ Native iOS និង Android Development'
  ],
  content: `
# ណែនាំអំពី Flutter 🌟📱

---

**Flutter** គឺជា UI Toolkit ដែលអភិវឌ្ឍដោយ Google សម្រាប់បង្កើតកម្មវិធី Cross-Platform ដែលមានភាពស្រស់ស្អាត និងដំណើរការលឿន។ វាអនុញ្ញាតឱ្យអ្នកបង្កើតកម្មវិធីសម្រាប់ iOS, Android, Web, និង Desktop ដោយប្រើ Codebase តែមួយ។ Flutter ប្រើភាសា **Dart** ដែលជាភាសាដ៏ទំនើប និងងាយស្រួលរៀន។

---

## 1. អ្វីទៅជា Flutter?

Flutter គឺជា Open-source Framework ដែលអនុញ្ញាតឱ្យអ្នកបង្កើត User Interface (UI) ដែលមានភាព Responsive និង Native-like។ លក្ខណៈពិសេសរបស់ Flutter រួមមាន៖
- **Cross-Platform Development:** បង្កើតកម្មវិធីសម្រាប់ Platforms ច្រើន (iOS, Android, Web, Desktop) ដោយប្រើ Codebase តែមួយ។
- **Widget-Based:** Flutter ប្រើ Widgets ដើម្បីបង្កើត UI ដែលអាចប្ដូរតាមបំណងបាន។
- **High Performance:** Flutter ប្រើ Skia Graphics Engine ដើម្បី Render UI ដែលធ្វើឱ្យវាលឿន និង Smooth។
- **Hot Reload:** អនុញ្ញាតឱ្យអ្នកឃើញការផ្លាស់ប្តូរនៅក្នុង Code ភ្លាមៗ ដែលជួយសម្រួលដល់ការអភិវឌ្ឍ។
- **Rich Ecosystem:** មាន Packages និង Plugins ជាច្រើននៅលើ Pub.dev សម្រាប់បន្ថែម Features ដូចជា Camera, Maps, និង Database។

Flutter ត្រូវបានប្រើប្រាស់នៅក្នុងកម្មវិធីល្បីៗដូចជា Google Ads, Alibaba, និង eBay។

---

## 2. ប្រវត្តិសង្ខេបនៃ Flutter

Flutter មានការវិវឌ្ឍដ៏គួរឱ្យចាប់អារម្មណ៍៖
- **២០១៥:** Google បានចាប់ផ្តើមអភិវឌ្ឍ Flutter ជាគម្រោងផ្ទៃក្នុង។
- **២០១៧:** Flutter ត្រូវបានណែនាំជាលើកដំបូងនៅ Dart Developer Summit។
- **២០១៨:** Flutter 1.0 ត្រូវបានចេញផ្សាយជាផ្លូវការ ដោយផ្តោតលើ Mobile App Development។
- **២០១៩:** Flutter បានពង្រីកការគាំទ្រទៅ Web និង Desktop (Beta)។
- **២០២១:** Flutter 2.0 បាននាំមកនូវ Stable Support សម្រាប់ Web និង Desktop។
- **២០២៣:** Flutter 3.0 បានធ្វើឱ្យប្រសើរឡើងនូវ Performance និង Material 3 Support។
- **២០២៥:** Flutter បច្ចុប្បន្ន (Flutter 3.x) បន្តការគាំទ្រសម្រាប់ Multi-Platform Development ជាមួយ Features ទំនើបៗ។

---

## 3. តើ Flutter ប្រើសម្រាប់អ្វី?

Flutter ត្រូវបានប្រើជាចម្បងសម្រាប់ការអភិវឌ្ឍកម្មវិធី Mobile ប៉ុន្តែវាក៏មានការប្រើប្រាស់ផ្សេងទៀត៖
- **Mobile Apps:** បង្កើត Apps សម្រាប់ iOS និង Android ដោយប្រើ Codebase តែមួយ។
- **Web Apps:** បង្កើត Web Applications ដែល Responsive ជាមួយ Flutter Web។
- **Desktop Apps:** បង្កើត Desktop Apps សម្រាប់ Windows, macOS, និង Linux។
- **UI Prototyping:** ប្រើ Flutter សម្រាប់បង្កើត Prototypes ដែលមានភាព Interactive។
- **Embedded Systems:** ប្រើ Flutter នៅក្នុង Embedded Devices ដូចជា Smart TVs និង IoT Devices។

---

## 4. តើ Flutter ដំណើរការជាមួយ Dart យ៉ាងដូចម្តេច?

Flutter ប្រើ **Dart** ជាភាសាសរសេរកម្មវិធី៖
- **Dart** គឺជាភាសា Object-Oriented ដែលមាន Syntax ស្រដៀងនឹង JavaScript និង Java។
- Dart គាំទ្រការបង្កើត Widgets និង UI Components នៅក្នុង Flutter។
- **Hot Reload** នៅក្នុង Flutter ត្រូវបានអនុញ្ញាតដោយសារតែ Dart’s JIT (Just-In-Time) Compilation។
- Dart ក៏គាំទ្រ AOT (Ahead-Of-Time) Compilation ដែលធ្វើឱ្យកម្មវិធី Flutter ដំណើរការលឿន។
- Flutter និង Dart ធ្វើការរួមគ្នាដើម្បីបង្កើត UI ដែល Consistent នៅលើ Platforms ផ្សេងៗ។

---

## 5. ការប្រៀបធៀប Flutter ជាមួយ Native iOS និង Android Development

| Framework/Platform | ភាសា              | គោលបំណង                           | គុណសម្បត្តិ                        | គុណវិបត្តិ                       |
| :----------------- | :---------------- | :---------------------------------- | :---------------------------------- | :-------------------------------- |
| **Flutter**        | Dart              | Cross-Platform (iOS, Android, Web, Desktop) | Codebase តែមួយ, Hot Reload, UI Customization | Learning Curve សម្រាប់ Dart, App Size ធំ |
| **Native iOS**     | Swift/Objective-C | iOS Apps                           | Performance លឿន, Native Features | Code សម្រាប់ iOS ប៉ុណ្ណោះ        |
| **Native Android** | Kotlin/Java       | Android Apps                       | Performance លឿន, Native Features | Code សម្រាប់ Android ប៉ុណ្ណោះ    |

**ឧទាហរណ៍កូដ Flutter សាមញ្ញ:**

\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('សូមស្វាគមន៍មកកាន់ Flutter!'),
        ),
        body: Center(
          child: Text(
            'សួស្តី! នេះជា Flutter App!',
            style: TextStyle(fontSize: 24),
          ),
        ),
      ),
    );
  }
}
\`\`\`

នៅក្នុងឧទាហរណ៍ខាងលើ:
- **Dart** ប្រើដើម្បីបង្កើត Widget Tree។
- **MaterialApp** និង **Scaffold** ជួយបង្កើត UI Structure។
- **Text** Widget បង្ហាញសារនៅកណ្តាលអេក្រង់។

---

## 6. ហេតុអ្វីត្រូវរៀន Flutter?

Flutter គឺជាជម្រើសដ៏ល្អសម្រាប់អ្នកអភិវឌ្ឍន៍៖
- **Cross-Platform:** សន្សំពេលវេលា និងធនធានដោយប្រើ Codebase តែមួយ។
- **Hot Reload:** ជួយអ្នកអភិវឌ្ឍន៍ធ្វើការផ្លាស់ប្តូរលឿន និងឃើញលទ្ធផលភ្លាមៗ។
- **Performance:** ជិតស្នើនឹង Native Apps ដោយសារតែ AOT Compilation។
- **Rich Widgets:** មាន Widgets សម្រាប់បង្កើត UI ដ៏ស្អាត និង Customizable។
- **Community Support:** មាន Pub.dev, Stack Overflow, និង Flutter Community ដ៏ធំ។
- **Market Demand:** Flutter កំពុងមានប្រជាប្រិយភាព និងតម្រូវការការងារខ្ពស់។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្ហាញសារជាមួយ Flutter</h3>
<p>បង្កើត App សាមញ្ញដែលបង្ហាញសារនៅកណ្តាលអេក្រង់។</p>
<pre><code class="language-dart">
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text('សួស្តី! នេះជា Flutter!'),
        ),
      ),
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត Button សាមញ្ញ</h3>
<p>បន្ថែម Button ដែលបង្ហាញ Alert Dialog នៅពេលចុច។</p>
<pre><code class="language-dart">
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: ElevatedButton(
            onPressed: () {
              showDialog(
                context: context,
                builder: (context) => AlertDialog(
                  title: Text('Flutter'),
                  content: Text('សួស្តី! អ្នកបានចុច Button!'),
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
      question: 'តើ Flutter គឺជាអ្វី?',
      options: [
        'ភាសាសរសេរកម្មវិធី Server-side',
        'UI Toolkit សម្រាប់ Cross-Platform Development',
        'Database Management System',
        'Web Browser'
      ],
      correct: 1,
      explanation: 'Flutter គឺជា UI Toolkit សម្រាប់បង្កើត Cross-Platform Apps។'
    },
    {
      question: 'តើនរណាបានអភិវឌ្ឍ Flutter?',
      options: [
        'Microsoft',
        'Google',
        'Apple',
        'Facebook'
      ],
      correct: 1,
      explanation: 'Flutter ត្រូវបានអភិវឌ្ឍដោយ Google។'
    },
    {
      question: 'តើភាសាណាដែល Flutter ប្រើ?',
      options: [
        'Java',
        'Dart',
        'Swift',
        'Kotlin'
      ],
      correct: 1,
      explanation: 'Flutter ប្រើភាសា Dart។'
    },
    {
      question: 'តើ Flutter អាចបង្កើតកម្មវិធីសម្រាប់ Platform ណាខ្លះ?',
      options: [
        'iOS ប៉ុណ្ណោះ',
        'Android ប៉ុណ្ណោះ',
        'iOS, Android, Web, Desktop',
        'Web ប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: 'Flutter គាំទ្រ iOS, Android, Web, និង Desktop។'
    },
    {
      question: 'តើអ្វីជា Feature ដ៏ល្អរបស់ Flutter?',
      options: [
        'Hot Reload',
        'SQL Database',
        'Native Compilation',
        'Browser Rendering'
      ],
      correct: 0,
      explanation: 'Hot Reload ជួយអ្នកអភិវឌ្ឍឃើញការផ្លាស់ប្តូរភ្លាមៗ។'
    },
    {
      question: 'តើ Flutter បានចេញផ្សាយជាផ្លូវការនៅឆ្នាំណា?',
      options: [
        '២០១៥',
        '២០១៨',
        '២០២១',
        '២០២៣'
      ],
      correct: 1,
      explanation: 'Flutter 1.0 ត្រូវបានចេញផ្សាយនៅឆ្នាំ ២០១៨។'
    },
    {
      question: 'តើ Widget នៅក្នុង Flutter មានតួនាទីអ្វី?',
      options: [
        'គ្រប់គ្រង Database',
        'បង្កើត UI Components',
        'គ្រប់គ្រង Network',
        'សរសេរ Server-side Logic'
      ],
      correct: 1,
      explanation: 'Widgets នៅក្នុង Flutter ប្រើសម្រាប់បង្កើត UI Components។'
    },
    {
      question: 'តើ Package Repository សម្រាប់ Flutter មានឈ្មោះអ្វី?',
      options: [
        'NPM',
        'Pub.dev',
        'Maven',
        'Cocoapods'
      ],
      correct: 1,
      explanation: 'Pub.dev ជា Package Repository សម្រាប់ Flutter។'
    },
    {
      question: 'តើ Flutter ប្រើ Graphics Engine អ្វី?',
      options: [
        'OpenGL',
        'Skia',
        'DirectX',
        'Vulkan'
      ],
      correct: 1,
      explanation: 'Flutter ប្រើ Skia Graphics Engine។'
    },
    {
      question: 'តើអ្វីជាគុណសម្បត្តិសំខាន់នៃ Flutter?',
      options: [
        'Codebase ផ្សេងគ្នាសម្រាប់រាល់ Platform',
        'Cross-Platform Development ជាមួយ Codebase តែមួយ',
        'Performance យឺត',
        'គ្មាន Hot Reload'
      ],
      correct: 1,
      explanation: 'Flutter អនុញ្ញាតឱ្យបង្កើត Apps សម្រាប់ Platforms ច្រើនជាមួយ Codebase តែមួយ។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App សាមញ្ញមួយដែលបង្ហាញអំពីមុខងារជាមូលដ្ឋានរបស់ Flutter។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Flutter App ដែលមាន \`MaterialApp\` និង \`Scaffold\`។
   - កំណត់ Title នៃ App ជា "Flutter Introduction Lab"។

2. **Main Content:**
   - បន្ថែម \`AppBar\` ដែលមានអត្ថបទ "សូមស្វាគមន៍មកកាន់ Flutter!"។
   - បន្ថែម \`Text\` Widget នៅកណ្តាលអេក្រង់ដែលបង្ហាញសារ "សួស្តី! នេះជា Flutter App!"។
   - បន្ថែម \`ElevatedButton\` ដែលនៅពេលចុច បង្ហាញ \`AlertDialog\` ជាមួយសារ "សួស្តីពី Flutter!"។

3. **Basic Styling:**
   - កំណត់ \`fontSize: 24\` សម្រាប់ \`Text\` Widget។
   - បន្ថែម Basic Styling សម្រាប់ \`ElevatedButton\` (ឧទាហរណ៍៖ ពណ៌ផ្ទៃខាងក្រោយ)។

**ការណែនាំ:** ដំឡើង Flutter SDK និង Android Studio ឬ VS Code សម្រាប់ការអភិវឌ្ឍ។ សាកល្បង App នៅលើ Emulator ឬ Physical Device។
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
      title: 'Flutter Introduction Lab',
      home: Scaffold(
        appBar: AppBar(
          title: Text('សូមស្វាគមន៍មកកាន់ Flutter!'),
          backgroundColor: Colors.blue,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'សួស្តី! នេះជា Flutter App!',
                style: TextStyle(fontSize: 24),
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  showDialog(
                    context: context,
                    builder: (context) => AlertDialog(
                      title: Text('Flutter'),
                      content: Text('សួស្តីពី Flutter!'),
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

export default FlutterLesson1_1Content;
