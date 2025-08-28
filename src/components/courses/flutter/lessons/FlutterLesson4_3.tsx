import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson4_3Content: LessonContent = {
  title: 'ការរុករកកម្រិតខ្ពស់ជាមួយ GetX',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃការរុករកកម្រិតខ្ពស់ជាមួយ GetX',
    'ស្វែងយល់ពីរបៀបប្រើ GetX Package សម្រាប់ Navigation',
    'រៀនប្រើ `Get.to`, `Get.back`, និង `Get.off` សម្រាប់គ្រប់គ្រង Navigation',
    'ស្គាល់ការបញ្ជូន Parameters និងទទួល Results ជាមួយ GetX',
    'អនុវត្តន៍ការបង្កើត App ដែលប្រើ GetX Navigation សម្រាប់ Multiple Screens',
    'យល់ពីគុណសម្បត្តិនៃ GetX ធៀបនឹង Navigator និង Named Routes',
    'ស្វែងយល់ពីការប្រើ GetX សម្រាប់ Dynamic Routes និង Dialogs'
  ],
  content: `
# ការរុករកកម្រិតខ្ពស់ជាមួយ GetX 🚀

---

**GetX** គឺជា Package ដ៏មានឥទ្ធិពលនៅក្នុង Flutter ដែលផ្តល់នូវវិធីសាស្ត្រសាមញ្ញ និងបត់បែនសម្រាប់ការគ្រប់គ្រង Navigation, State Management និង Dependency Injection។ នៅក្នុងមេរៀននេះ យើងនឹងផ្តោតលើការប្រើ GetX សម្រាប់ **Navigation** ដែលធ្វើឱ្យការផ្លាស់ប្តូររវាង Screens កាន់តែងាយស្រួល និងមានប្រសិទ្ធភាព។

---

## 1. អ្វីទៅជា GetX Navigation?

**GetX Navigation** គឺជាវិធីសាស្ត្រដែលប្រើ \`GetX\` Package ដើម្បីគ្រប់គ្រងការផ្លាស់ប្តូររវាង Screens ដោយមិនចាំបាច់ប្រើ \`Navigator\` ឬ \`MaterialPageRoute\` ដោយផ្ទាល់។ GetX ផ្តល់នូវ API សាមញ្ញដូចជា \`Get.to\`, \`Get.back\`, និង \`Get.off\`។

- **គុណសម្បត្តិ:**
  - កាត់បន្ថយ Boilerplate Code ធៀបនឹង Navigator។
  - គាំទ្រ Dynamic Navigation និង Named Routes។
  - ងាយស្រួលបញ្ជូន Parameters និងទទួល Results។
  - អាចប្រើសម្រាប់ Dialogs, SnackBars និង BottomSheets។

---

## 2. ការដំឡើង GetX Package

ដើម្បីប្រើ GetX ត្រូវបន្ថែម Package ទៅក្នុង \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  get: ^4.6.5
\`\`\`

បន្ទាប់មក ដំណើរការ \`flutter pub get\` ដើម្បីទាញ Package។

---

## 3. ការប្រើ Get.to និង Get.back

- **Get.to:** បើក Screen ថ្មីដោយបន្ថែមទៅលើ Navigation Stack។
- **Get.back:** ត្រឡប់ទៅ Screen មុន។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Get.to(DetailScreen()),
          child: Text('ទៅទំព័រលម្អិត'),
        ),
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រលម្អិត')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Get.back(),
          child: Text('ត្រឡប់ក្រោយ'),
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បើក \`HomeScreen\` ដំបូង ហើយអាចផ្លាស់ទៅ \`DetailScreen\` ដោយប្រើ \`Get.to\` និងត្រឡប់ក្រោយដោយ \`Get.back\`។

---

## 4. ការបញ្ជូន Parameters ជាមួយ GetX

អ្នកអាចបញ្ជូន Parameters ទៅ Screen ថ្មីដោយប្រើ \`arguments\` នៅក្នុង \`Get.to\`។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Get.to(
            DetailScreen(),
            arguments: 'សួស្តីពីទំព័រដើម!',
          ),
          child: Text('ទៅទំព័រលម្អិត'),
        ),
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final String data = Get.arguments as String;
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រលម្អិត')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(data, style: TextStyle(fontSize: 20)),
            ElevatedButton(
              onPressed: () => Get.back(),
              child: Text('ត្រឡប់ក្រោយ'),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** \`DetailScreen\` បង្ហាញអត្ថបទ "សួស្តីពីទំព័រដើម!" ដែលបញ្ជូនតាម \`Get.to\`។

---

## 5. ការត្រឡប់ Results ជាមួយ GetX

អ្នកអាចត្រឡប់ Results ពី Screen ទៅ Screen មុនដោយប្រើ \`Get.back(result: ...)\`។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: ElevatedButton(
          onPressed: () async {
            final result = await Get.to(SettingsScreen());
            Get.snackbar('លទ្ធផល', result ?? 'គ្មានទិន្នន័យ');
          },
          child: Text('ទៅទំព័រការកំណត់'),
        ),
      ),
    );
  }
}

class SettingsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រការកំណត់')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Get.back(result: 'ការកំណត់បានរក្សាទុក!'),
          child: Text('រក្សាទុកនិងត្រឡប់'),
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** នៅពេលត្រឡប់ពី \`SettingsScreen\`, \`HomeScreen\` បង្ហាញ SnackBar ជាមួយ Results "ការកំណត់បានរក្សាទុក!"។

---

## 6. ការប្រើ Named Routes ជាមួយ GetX

GetX គាំទ្រ Named Routes ដោយកំណត់នៅក្នុង \`GetMaterialApp\`។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      initialRoute: '/home',
      getPages: [
        GetPage(name: '/home', page: () => HomeScreen()),
        GetPage(name: '/detail', page: () => DetailScreen()),
      ],
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Get.toNamed('/detail', arguments: 'សួស្តី!'),
          child: Text('ទៅទំព័រលម្អិត'),
        ),
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final String data = Get.arguments as String;
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រលម្អិត')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(data, style: TextStyle(fontSize: 20)),
            ElevatedButton(
              onPressed: () => Get.back(),
              child: Text('ត្រឡប់ក្រោយ'),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បើក \`HomeScreen\` និងផ្លាស់ទៅ \`DetailScreen\` ដោយប្រើ Named Route \`/detail\`។

---

## 7. ការប្រើ GetX សម្រាប់ Dialogs និង SnackBars

GetX អនុញ្ញាតឱ្យបង្ហាញ Dialogs និង SnackBars ដោយប្រើ API សាមញ្ញ។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () => Get.defaultDialog(
                title: 'ការជូនដំណឹង',
                content: Text('នេះគឺជា Dialog ពី GetX!'),
                confirm: ElevatedButton(
                  onPressed: () => Get.back(),
                  child: Text('បិទ'),
                ),
              ),
              child: Text('បង្ហាញ Dialog'),
            ),
            ElevatedButton(
              onPressed: () => Get.snackbar(
                'ការជូនដំណឹង',
                'នេះគឺជា SnackBar ពី GetX!',
              ),
              child: Text('បង្ហាញ SnackBar'),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បង្ហាញ Dialog និង SnackBar ដោយប្រើ GetX API។

---

## 8. គុណសម្បត្តិនៃ GetX Navigation

- **សាមញ្ញ:** កាត់បន្ថយ Boilerplate Code ធៀបនឹង \`Navigator.push\`។
- **បត់បែន:** គាំទ្រ Named Routes, Dynamic Navigation, Dialogs, និង SnackBars។
- **រហ័ស:** មិនតម្រូវឱ្យបង្កើត \`MaterialPageRoute\`។
- **អនុវត្តន៍ខ្ពស់:** សមស្របសម្រាប់ Apps ដែលមាន Complexity ខ្ពស់។

---

## 9. គន្លឹះសម្រាប់ GetX Navigation

- បន្ថែម \`get\` Package ទៅ \`pubspec.yaml\`។
- ប្រើ \`GetMaterialApp\` ជំនួស \`MaterialApp\`។
- ប្រើ \`Get.to\` ឬ \`Get.toNamed\` សម្រាប់បើក Screen ថ្មី។
- ប្រើ \`Get.back\` ដើម្បីត្រឡប់ក្រោយ។
- ប្រើ \`arguments\` សម្រាប់បញ្ជូន Parameters និង \`Get.back(result: ...)\` សម្រាប់ Results។
- ប្រើ \`Get.defaultDialog\` និង \`Get.snackbar\` សម្រាប់ Dialogs និង SnackBars។
- ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Navigation Stack។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបើក Screen ថ្មីជាមួយ Get.to</h3>
<p>បើក Screen ថ្មីដោយប្រើ \`Get.to\`។</p>
<pre><code class="language-dart">
ElevatedButton(
  onPressed: () => Get.to(DetailScreen()),
  child: Text('ទៅទំព័រលម្អិត'),
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបញ្ជូន Parameters</h3>
<p>បញ្ជូនអត្ថបទទៅ Screen ថ្មី។</p>
<pre><code class="language-dart">
ElevatedButton(
  onPressed: () => Get.to(DetailScreen(), arguments: 'សួស្តី!'),
  child: Text('ទៅទំព័រលម្អិត'),
)
class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final String data = Get.arguments as String;
    return Scaffold(body: Center(child: Text(data)));
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការត្រឡប់ Results</h3>
<p>ត្រឡប់ Results ពី Screen។</p>
<pre><code class="language-dart">
ElevatedButton(
  onPressed: () async {
    final result = await Get.to(SettingsScreen());
    Get.snackbar('លទ្ធផល', result ?? 'គ្មានទិន្នន័យ');
  },
  child: Text('ទៅទំព័រការកំណត់'),
)
class SettingsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          onPressed: () => Get.back(result: 'ទិន្នន័យ!'),
          child: Text('ត្រឡប់'),
        ),
      ),
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Named Routes ជាមួយ GetX</h3>
<p>ប្រើ Named Routes ជាមួយ \`Get.toNamed\`</p>
<pre><code class="language-dart">
GetMaterialApp(
  initialRoute: '/home',
  getPages: [
    GetPage(name: '/home', page: () => HomeScreen()),
    GetPage(name: '/detail', page: () => DetailScreen()),
  ],
)
ElevatedButton(
  onPressed: () => Get.toNamed('/detail', arguments: 'សួស្តី!'),
  child: Text('ទៅទំព័រលម្អិត'),
)
</code></pre>
`],
  quiz: [
    {
      question: 'តើ GetX Navigation គឺជាអ្វី?',
      options: [
        'ការគ្រប់គ្រង State',
        'ការផ្លាស់ប្តូររវាង Screens ដោយប្រើ GetX',
        'ការកំណត់ Theme',
        'ការបង្កើត Layout'
      ],
      correct: 1,
      explanation: 'GetX Navigation គឺជាការផ្លាស់ប្តូររវាង Screens ដោយប្រើ GetX Package។'
    },
    {
      question: 'តើ Package ណាដែលត្រូវបន្ថែមដើម្បីប្រើ GetX?',
      options: ['flutter_bloc', 'provider', 'get', 'material'],
      correct: 2,
      explanation: '`get` Package ត្រូវបន្ថែមទៅ `pubspec.yaml`។'
    },
    {
      question: 'តើ `Get.to` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Screen ថ្មីទៅ Stack',
        'យក Screen ចេញពី Stack',
        'កំណត់ Theme',
        'បង្កើត Widget'
      ],
      correct: 0,
      explanation: '`Get.to` បន្ថែម Screen ថ្មីទៅលើ Navigation Stack។'
    },
    {
      question: 'តើ `Get.back` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Screen ថ្មី',
        'ត្រឡប់ទៅ Screen មុន',
        'បញ្ជូន Data',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`Get.back` ត្រឡប់ទៅ Screen មុននៅក្នុង Navigation Stack។'
    },
    {
      question: 'តើ `GetMaterialApp` ប្រើជំនួសអ្វី?',
      options: ['Scaffold', 'MaterialApp', 'Navigator', 'AppBar'],
      correct: 1,
      explanation: '`GetMaterialApp` ប្រើជំនួស `MaterialApp` សម្រាប់ GetX Navigation។'
    },
    {
      question: 'តើអ្នកអាចបញ្ជូន Parameters ជាមួយ `Get.to` បានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅក្នុង StatefulWidget', 'បានតែនៅក្នុង StatelessWidget'],
      correct: 0,
      explanation: 'អាចបញ្ជូន Parameters ដោយប្រើ `arguments` នៅក្នុង `Get.to`។'
    },
    {
      question: 'តើវិធីណាដែលប្រើដើម្បីទទួល Parameters នៅ GetX?',
      options: ['Navigator.pop', 'Get.arguments', 'setState', 'Provider.of'],
      correct: 1,
      explanation: '`Get.arguments` ប្រើសម្រាប់ទទួល Parameters។'
    },
    {
      question: 'តើ `Get.off` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Screen ថ្មី',
        'ជំនួស Screen បច្ចុប្បន្ន',
        'បង្កើត Dialog',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`Get.off` ជំនួស Screen បច្ចុប្បន្នដោយ Screen ថ្មី។'
    },
    {
      question: 'តើ `Get.toNamed` ប្រើសម្រាប់អ្វី?',
      options: [
        'បន្ថែម Screen ដោយប្រើឈ្មោះ',
        'យក Screen ចេញ',
        'បង្កើត Widget',
        'កំណត់ Theme'
      ],
      correct: 0,
      explanation: '`Get.toNamed` បន្ថែម Screen ថ្មីដោយប្រើឈ្មោះ Route។'
    },
    {
      question: 'តើ `getPages` នៅក្នុង `GetMaterialApp` មានតួនាទីអ្វី?',
      options: [
        'កំណត់ Theme',
        'កំណត់ Named Routes',
        'គ្រប់គ្រង State',
        'បង្កើត Layout'
      ],
      correct: 1,
      explanation: '`getPages` កំណត់ Named Routes សម្រាប់ GetX Navigation។'
    },
    {
      question: 'តើ `Get.defaultDialog` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញ Dialog',
        'បន្ថែម Screen',
        'គ្រប់គ្រង State',
        'កំណត់ Theme'
      ],
      correct: 0,
      explanation: '`Get.defaultDialog` ប្រើសម្រាប់បង្ហាញ Dialog ដោយសាមញ្ញ។'
    },
    {
      question: 'តើអ្នកអាចត្រឡប់ Results ជាមួយ `Get.back` បានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅក្នុង StatefulWidget', 'បានតែនៅក្នុង StatelessWidget'],
      correct: 0,
      explanation: 'អាចត្រឡប់ Results ដោយប្រើ `Get.back(result: ...)`។'
    },
    {
      question: 'តើគុណសម្បត្តិសំខាន់នៃ GetX Navigation គឺជាអ្វី?',
      options: [
        'សាមញ្ញ និងកាត់បន្ថយ Boilerplate Code',
        'បង្កើត Animation',
        'គ្រប់គ្រង State តែប៉ុណ្ណោះ',
        'កំណត់ Theme'
      ],
      correct: 0,
      explanation: 'GetX Navigation សាមញ្ញ និងកាត់បន្ថយ Boilerplate Code។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ GetX Navigation ដើម្បីផ្លាស់ប្តូររវាង Multiple Screens។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`GetXApp\` ដែលប្រើ \`GetMaterialApp\`។
   - កំណត់ \`initialRoute\` ទៅ "/home" និងកំណត់ Named Routes សម្រាប់ 3 Screens: \`HomeScreen\` ("/home"), \`DetailScreen\` ("/detail"), និង \`SettingsScreen\` ("/settings")។
   - បន្ថែម \`AppBar\` នៅគ្រប់ Screen ជាមួយ Title សមស្រប (ឧទាហរណ៍៖ "ទំព័រដើម").

2. **Navigation:**
   - នៅ \`HomeScreen\`, បន្ថែម \`ElevatedButton\` ពីរដែលនាំទៅ "/detail" (ប្រើ \`Get.toNamed\`) និង \`SettingsScreen\` (ប្រើ \`Get.to\`)។
   - នៅ \`DetailScreen\`, បញ្ជូន Parameter "សួស្តីពីទំព័រដើម!" និងបង្ហាញវានៅក្នុង \`Text\` Widget។
   - នៅ \`SettingsScreen\`, បន្ថែម \`ElevatedButton\` ដែលត្រឡប់ Result "ការកំណត់បានរក្សាទុក!"។

3. **Data Handling:**
   - នៅ \`HomeScreen\`, បង្ហាញ \`Get.snackbar\` ដែលបង្ហាញ Result ដែលត្រឡប់ពី \`SettingsScreen\`។
   - បន្ថែម \`ElevatedButton\` នៅ \`DetailScreen\` និង \`SettingsScreen\` ដើម្បីត្រឡប់ក្រោយ។

4. **Dialog:**
   - នៅ \`HomeScreen\`, បន្ថែម \`ElevatedButton\` ដែលបង្ហាញ \`Get.defaultDialog\` ជាមួយ Title "ការជូនដំណឹង" និង Content "នេះគឺជា Dialog ពី GetX!"។

**ការណែនាំ:** បន្ថែម \`get\` Package ទៅ \`pubspec.yaml\`។ សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីពិនិត្យ Navigation Stack។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() => runApp(GetXApp());

class GetXApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      initialRoute: '/home',
      getPages: [
        GetPage(name: '/home', page: () => HomeScreen()),
        GetPage(name: '/detail', page: () => DetailScreen()),
        GetPage(name: '/settings', page: () => SettingsScreen()),
      ],
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () => Get.toNamed('/detail', arguments: 'សួស្តីពីទំព័រដើម!'),
              child: Text('ទៅទំព័រលម្អិត'),
            ),
            ElevatedButton(
              onPressed: () async {
                final result = await Get.to(SettingsScreen());
                Get.snackbar('លទ្ធផល', result ?? 'គ្មានទិន្នន័យ');
              },
              child: Text('ទៅទំព័រការកំណត់'),
            ),
            ElevatedButton(
              onPressed: () => Get.defaultDialog(
                title: 'ការជូនដំណឹង',
                content: Text('នេះគឺជា Dialog ពី GetX!'),
                confirm: ElevatedButton(
                  onPressed: () => Get.back(),
                  child: Text('បិទ'),
                ),
              ),
              child: Text('បង្ហាញ Dialog'),
            ),
          ],
        ),
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final String data = Get.arguments as String;
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រលម្អិត')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(data, style: TextStyle(fontSize: 20)),
            ElevatedButton(
              onPressed: () => Get.back(),
              child: Text('ត្រឡប់ក្រោយ'),
            ),
          ],
        ),
      ),
    );
  }
}

class SettingsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រការកំណត់')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Get.back(result: 'ការកំណត់បានរក្សាទុក!'),
          child: Text('រក្សាទុកនិងត្រឡប់'),
        ),
      ),
    );
  }
}
\`\`\`
`
  }
};

export default FlutterLesson4_3Content;
