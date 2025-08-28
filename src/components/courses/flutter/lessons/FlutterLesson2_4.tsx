import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson2_4Content: LessonContent = {
  title: 'សមាសភាគ Material និង Cupertino',
  objectives: [
    'យល់ដឹងអំពី Material Design និង Cupertino Design Systems នៅក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបប្រើ Material Widgets ដូចជា AppBar, FloatingActionButton, Drawer, Card',
    'ស្គាល់ Cupertino Widgets ដូចជា CupertinoNavigationBar, CupertinoButton, CupertinoSwitch, CupertinoActionSheet',
    'រៀនប្រើ MaterialApp និង CupertinoApp ដើម្បីកំណត់ Theme និង Navigation',
    'អនុវត្តន៍ការបង្កើត UI ដែលប្រើទាំង Material និង Cupertino Components ក្នុង App តែមួយ',
    'ប្រៀបធៀបភាពខុសគ្នារវាង Material និង Cupertino សម្រាប់ Android និង iOS',
    'ស្វែងយល់ពីការប្រើ Themes ដើម្បីប្ដូរតាមបំណង UI'
  ],
  content: `
# សមាសភាគ Material និង Cupertino 🎨📱

---

**Material Design** និង **Cupertino Design** គឺជា Design Systems ពីរផ្សេងគ្នាដែល Flutter ផ្តល់ជូន។ Material Design ត្រូវបានរចនាឡើងសម្រាប់ Android ជាមួយរូបរាងទំនើប និង Animations ដ៏រស់រវើក ខណៈ Cupertino Design ត្រូវបានរចនាឡើងសម្រាប់ iOS ជាមួយរូបរាងសាមញ្ញ និង Native។ នៅក្នុងមេរៀននេះ យើងនឹងស្វែងយល់ពីរបៀបប្រើ Components ទាំងនេះ និងរបៀបបង្កើត UI ដែលគាំទ្រទាំង Android និង iOS។

---

## 1. អ្វីទៅជា Material និង Cupertino Design?

- **Material Design:** បង្កើតដោយ Google សម្រាប់ Android Apps។ វាផ្តោតលើ Shadows, Animations, និង Bold Colors ដើម្បីបង្កើត UI ដ៏ទាក់ទាញ។ Widgets សំខាន់ៗ៖ \`AppBar\`, \`FloatingActionButton\`, \`Card\`, \`Drawer\`។
- **Cupertino Design:** តម្រង់តាម iOS Apps ដោយ Apple។ វាមានរូបរាង Minimalist និង Native សម្រាប់អ្នកប្រើ iOS។ Widgets សំខាន់ៗ៖ \`CupertinoNavigationBar\`, \`CupertinoButton\`, \`CupertinoSwitch\`, \`CupertinoActionSheet\`។

**ភាពខុសគ្នា:**
- Material: ប្រើ Shadows និង Depth (ឧទាហរណ៍៖ Elevation នៅក្នុង \`Card\`)។
- Cupertino: សាមញ្ញ ជាមួយ Blurred Backgrounds និង iOS-specific Animations។

---

## 2. ការប្រើ Material Components

Material Components ត្រូវបានផ្តល់ដោយ Package \`material.dart\` និងប្រើជាមួយ \`MaterialApp\`។ Widgets សំខាន់ៗ៖
- **AppBar:** បង្ហាញ Toolbar នៅផ្នែកខាងលើ។
- **Card:** បង្ហាញ Content ក្នុងប្រអប់ជាមួយ Elevation។
- **FloatingActionButton (FAB):** ប៊ូតុងអណ្តែតសម្រាប់ Actions សំខាន់ៗ។
- **Drawer:** បង្ហាញ Navigation Menu ដែលអាចបើក/បិទបាន។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: Text('កម្មវិធី Material'),
        backgroundColor: Colors.blue,
      ),
      drawer: Drawer(
        child: ListView(
          children: [
            DrawerHeader(
              decoration: BoxDecoration(color: Colors.blue),
              child: Text('ម៉ឺនុយ', style: TextStyle(color: Colors.white, fontSize: 24)),
            ),
            ListTile(title: Text('ទំព័រដើម'), onTap: () {}),
            ListTile(title: Text('ការកំណត់'), onTap: () {}),
          ],
        ),
      ),
      body: Center(
        child: Card(
          elevation: 4.0,
          child: Padding(
            padding: EdgeInsets.all(16.0),
            child: Text('កាត Material', style: TextStyle(fontSize: 20)),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: Icon(Icons.add),
        backgroundColor: Colors.blue,
      ),
    ),
  ));
}
\`\`\`

**លទ្ធផល:** បង្ហាញ \`AppBar\`, \`Drawer\`, \`Card\`, និង \`FloatingActionButton\` ក្នុង Material Design។

---

## 3. ការប្រើ Cupertino Components

Cupertino Components ត្រូវបានផ្តល់ដោយ Package \`cupertino.dart\` និងប្រើជាមួយ \`CupertinoApp\`។ Widgets សំខាន់ៗ៖
- **CupertinoNavigationBar:** Navigation Bar សម្រាប់ iOS។
- **CupertinoButton:** ប៊ូតុងសម្រាប់ iOS។
- **CupertinoSwitch:** ប៊ូតុងប្តូរសម្រាប់ iOS។
- **CupertinoActionSheet:** បង្ហាញ Menu ជម្រើសនៅផ្នែកខាងក្រោម។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/cupertino.dart';

void main() {
  runApp(CupertinoApp(
    home: CupertinoPageScaffold(
      navigationBar: CupertinoNavigationBar(
        middle: Text('កម្មវិធី Cupertino'),
        backgroundColor: CupertinoColors.systemBlue,
      ),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CupertinoButton(
              color: CupertinoColors.activeBlue,
              child: Text('បើក Action Sheet'),
              onPressed: () {},
            ),
            SizedBox(height: 20),
            CupertinoSwitch(value: true, onChanged: (value) {}),
          ],
        ),
      ),
    ),
  ));
}
\`\`\`

**លទ្ធផល:** បង្ហាញ \`CupertinoNavigationBar\`, \`CupertinoButton\`, និង \`CupertinoSwitch\` ក្នុង Cupertino Design។

---

## 4. MaterialApp និង CupertinoApp

- **MaterialApp:** បង្កើត App ជាមួយ Material Design Theme។ Properties សំខាន់ៗ៖ \`theme\`, \`home\`, \`routes\`, \`darkTheme\`។
- **CupertinoApp:** បង្កើត App ជាមួយ Cupertino Design Theme។ Properties សំខាន់ៗ៖ \`theme\`, \`home\`។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    theme: ThemeData(
      primarySwatch: Colors.green,
      brightness: Brightness.light,
    ),
    home: Scaffold(
      appBar: AppBar(title: Text('Material Theme')),
      body: Center(child: Text('សួស្តីពី Material!')),
    ),
  ));
}
\`\`\`

**លទ្ធផល:** App ជាមួយ Material Theme ពណ៌បៃតង។

---

## 5. ការបង្កើត UI ជាមួយ Material និង Cupertino

អ្នកអាចប្រើទាំង Material និង Cupertino Components ក្នុង App តែមួយដើម្បីគាំទ្រ Cross-Platform។

**ឧទាហរណ៍កូដ (Hybrid UI):**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class HybridApp extends StatefulWidget {
  @override
  _HybridAppState createState() => _HybridAppState();
}

class _HybridAppState extends State<HybridApp> {
  bool _switchValue = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Hybrid UI')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Card(
                elevation: 4.0,
                child: Padding(
                  padding: EdgeInsets.all(16.0),
                  child: Text('កាត Material'),
                ),
              ),
              CupertinoButton(
                color: CupertinoColors.activeBlue,
                child: Text('បើក Action Sheet'),
                onPressed: () {
                  showCupertinoModalPopup(
                    context: context,
                    builder: (context) => CupertinoActionSheet(
                      title: Text('ជម្រើស'),
                      actions: [
                        CupertinoActionSheetAction(
                          child: Text('ជម្រើស 1'),
                          onPressed: () => Navigator.pop(context),
                        ),
                        CupertinoActionSheetAction(
                          child: Text('ជម្រើស 2'),
                          onPressed: () => Navigator.pop(context),
                        ),
                      ],
                      cancelButton: CupertinoActionSheetAction(
                        child: Text('បោះបង់'),
                        onPressed: () => Navigator.pop(context),
                      ),
                    ),
                  );
                },
              ),
              SizedBox(height: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('ប្តូរ:'),
                  CupertinoSwitch(
                    value: _switchValue,
                    onChanged: (value) {
                      setState(() {
                        _switchValue = value;
                      });
                    },
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

void main() {
  runApp(HybridApp());
}
\`\`\`

**លទ្ធផល:** បង្ហាញ UI ដែលប្រើទាំង Material (\`Card\`) និង Cupertino (\`CupertinoButton\`, \`CupertinoSwitch\`, \`CupertinoActionSheet\`)។

---

## 6. ការប្រៀបធៀប Material និង Cupertino

| Design System | ប្រព័ន្ធ | Widgets | លក្ខណៈពិសេស |
| :------------ | :------- | :------ | :------------ |
| **Material**  | Android  | AppBar, Card, FAB, Drawer | Shadows, Animations, Bold Colors |
| **Cupertino** | iOS      | CupertinoNavigationBar, CupertinoButton, CupertinoSwitch | Minimalist, Blurred Backgrounds, iOS Native |

**ការណែនាំ:** ប្រើ Material សម្រាប់ Android Apps និង Cupertino សម្រាប់ iOS Apps។ សម្រាប់ Cross-Platform Apps អាចប្រើ Hybrid Approach ដោយជ្រើសរើស Components ដែលសមស្របនឹង Platform។

---

## 7. ការប្ដូរតាមបំណង Themes

អ្នកអាចប្ដូរតាមបំណង UI ដោយប្រើ \`ThemeData\` (សម្រាប់ Material) ឬ \`CupertinoThemeData\` (សម្រាប់ Cupertino)។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    theme: ThemeData(
      primarySwatch: Colors.red,
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.red,
          foregroundColor: Colors.white,
        ),
      ),
    ),
    home: Scaffold(
      appBar: AppBar(title: Text('Custom Theme')),
      body: Center(child: ElevatedButton(child: Text('ប៊ូតុង'), onPressed: () {})),
    ),
  ));
}
\`\`\`

**លទ្ធផល:** App ជាមួយ Material Theme ពណ៌ក្រហម។

---

## 8. គន្លឹះសម្រាប់ Material និង Cupertino

- ប្រើ \`MaterialApp\` ឬ \`CupertinoApp\` ដើម្បីកំណត់ Theme សមស្រប។
- បន្ថែម Custom Themes ដើម្បីធ្វើឱ្យ UI ស្របគ្នានឹង Brand។
- សាកល្បង App នៅលើ Android និង iOS Devices ដើម្បីធានា Native Look។
- ប្រើ \`Platform\` Class ដើម្បីជ្រើសរើស Material ឬ Cupertino Components ដោយផ្អែកលើ Platform។
- ប្រើ Flutter Inspector ដើម្បីពិនិត្យ Widget Hierarchy និង Theme Issues។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Material Card និង ElevatedButton</h3>
<p>បង្កើត Card ជាមួយ ElevatedButton។</p>
<pre><code class="language-dart">
Card(
  elevation: 4.0,
  child: Padding(
    padding: EdgeInsets.all(16.0),
    child: ElevatedButton(
      onPressed: () {},
      child: Text('ចុចខ្ញុំ'),
    ),
  ),
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Cupertino Action Sheet</h3>
<p>បង្កើត Cupertino Action Sheet។</p>
<pre><code class="language-dart">
CupertinoButton(
  child: Text('បើក Action Sheet'),
  onPressed: () {
    showCupertinoModalPopup(
      context: context,
      builder: (context) => CupertinoActionSheet(
        title: Text('ជម្រើស'),
        actions: [
          CupertinoActionSheetAction(
            child: Text('ជម្រើស 1'),
            onPressed: () => Navigator.pop(context),
          ),
        ],
        cancelButton: CupertinoActionSheetAction(
          child: Text('បោះបង់'),
          onPressed: () => Navigator.pop(context),
        ),
      ),
    );
  },
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Material Drawer</h3>
<p>បង្កើត Drawer ជាមួយ Menu Items។</p>
<pre><code class="language-dart">
Drawer(
  child: ListView(
    children: [
      DrawerHeader(
        decoration: BoxDecoration(color: Colors.blue),
        child: Text('ម៉ឺនុយ', style: TextStyle(color: Colors.white)),
      ),
      ListTile(title: Text('ទំព័រដើម'), onTap: () {}),
    ],
  ),
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Cupertino Switch និង Navigation Bar</h3>
<p>បង្កើត Cupertino UI ជាមួយ Switch។</p>
<pre><code class="language-dart">
CupertinoPageScaffold(
  navigationBar: CupertinoNavigationBar(middle: Text('Cupertino')),
  child: Center(
    child: CupertinoSwitch(value: true, onChanged: (value) {}),
  ),
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Material SnackBar</h3>
<p>បង្ហាញ SnackBar នៅពេលចុច FAB។</p>
<pre><code class="language-dart">
FloatingActionButton(
  onPressed: () {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('សួស្តី!')),
    );
  },
  child: Icon(Icons.add),
)
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Material Design ត្រូវបានបង្កើតសម្រាប់ Platform ណា?',
      options: ['iOS', 'Android', 'Web', 'Desktop'],
      correct: 1,
      explanation: 'Material Design ត្រូវបានបង្កើតសម្រាប់ Android Apps។'
    },
    {
      question: 'តើ Widget ណាដែលប្រើសម្រាប់ Navigation Bar នៅក្នុង Cupertino?',
      options: ['AppBar', 'CupertinoNavigationBar', 'FloatingActionButton', 'Card'],
      correct: 1,
      explanation: '`CupertinoNavigationBar` ប្រើសម្រាប់ iOS Navigation។'
    },
    {
      question: 'តើ `MaterialApp` មានតួនាទីអ្វី?',
      options: [
        'បង្កើត App ជាមួយ Cupertino Theme',
        'បង្កើត App ជាមួយ Material Theme',
        'គ្រប់គ្រង State',
        'បង្កើត Layout'
      ],
      correct: 1,
      explanation: '`MaterialApp` បង្កើត App ជាមួយ Material Design Theme។'
    },
    {
      question: 'តើ Widget ណាដែលប្រើសម្រាប់ Button អណ្តែតនៅក្នុង Material?',
      options: ['CupertinoButton', 'ElevatedButton', 'FloatingActionButton', 'TextButton'],
      correct: 2,
      explanation: '`FloatingActionButton` ជា Button អណ្តែតនៅក្នុង Material Design។'
    },
    {
      question: 'តើ `CupertinoSwitch` មានតួនាទីអ្វី?',
      options: [
        'បង្ហាញ Navigation Bar',
        'ប្តូរស្ថានភាពបើក/បិទ',
        'បង្កើត Card',
        'បង្ហាញ Menu'
      ],
      correct: 1,
      explanation: '`CupertinoSwitch` ប្រើសម្រាប់ប្តូរស្ថានភាពបើក/បិទនៅក្នុង iOS។'
    },
    {
      question: 'តើ Package ណាដែលផ្តល់ Cupertino Components?',
      options: ['material.dart', 'cupertino.dart', 'widgets.dart', 'foundation.dart'],
      correct: 1,
      explanation: '`cupertino.dart` ផ្តល់ Cupertino Components។'
    },
    {
      question: 'តើ `Drawer` Widget មានតួនាទីអ្វីនៅក្នុង Material?',
      options: [
        'បង្ហាញ Navigation Menu',
        'បង្កើត Card',
        'បង្ហាញ Button',
        'គ្រប់គ្រង Theme'
      ],
      correct: 0,
      explanation: '`Drawer` បង្ហាញ Navigation Menu នៅក្នុង Material Design។'
    },
    {
      question: 'តើ `CupertinoActionSheet` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញ Navigation Bar',
        'បង្ហាញ Menu ជម្រើស',
        'បង្កើត Button',
        'បង្ហាញ Card'
      ],
      correct: 1,
      explanation: '`CupertinoActionSheet` បង្ហាញ Menu ជម្រើសនៅផ្នែកខាងក្រោម។'
    },
    {
      question: 'តើ `ThemeData` នៅក្នុង `MaterialApp` មានតួនាទីអ្វី?',
      options: [
        'កំណត់ Layout',
        'កំណត់ Theme នៃ App',
        'គ្រប់គ្រង State',
        'បង្កើត Widgets'
      ],
      correct: 1,
      explanation: '`ThemeData` កំណត់ Theme នៃ Material App។'
    },
    {
      question: 'តើ Widget ណាដែលប្រើសម្រាប់បង្ហាញ List Item នៅក្នុង Material?',
      options: ['ListTile', 'CupertinoListTile', 'Text', 'Container'],
      correct: 0,
      explanation: '`ListTile` ប្រើសម្រាប់បង្ហាញ List Item នៅក្នុង Material Design�।'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Material និង Cupertino?',
      options: [
        'Material សម្រាប់ iOS, Cupertino សម្រាប់ Android',
        'Material សម្រាប់ Android, Cupertino សម្រាប់ iOS',
        'ទាំងពីរសម្រាប់ Web',
        'ទាំងពីរដូចគ្នា'
      ],
      correct: 1,
      explanation: 'Material សម្រាប់ Android, Cupertino សម្រាប់ iOS។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដ `Card(elevation: 4.0, child: Text("កាត"))`?',
      options: [
        'កាតជាមួយ Shadow',
        'ប៊ូតុងអណ្តែត',
        'Navigation Bar',
        'Switch'
      ],
      correct: 0,
      explanation: '`Card` បង្ហាញប្រអប់ជាមួយ Shadow (Elevation)។'
    },
    {
      question: 'តើ `CupertinoPageScaffold` មានតួនាទីអ្វី?',
      options: [
        'បង្កើត Button',
        'បង្កើត Scaffold សម្រាប់ iOS',
        'បង្កើត Card',
        'គ្រប់គ្រង Theme'
      ],
      correct: 1,
      explanation: '`CupertinoPageScaffold` បង្កើត Scaffold សម្រាប់ iOS UI។'
    },
    {
      question: 'តើ `SnackBar` នៅក្នុង Material Design ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញ Navigation Menu',
        'បង្ហាញសារជាបណ្តោះអាសន្ន',
        'បង្កើត Button',
        'បង្ហាញ Switch'
      ],
      correct: 1,
      explanation: '`SnackBar` បង្ហាញសារជាបណ្តោះអាសន្ននៅផ្នែកខាងក្រោម។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Material និង Cupertino Components ក្នុង App តែមួយបានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'តែនៅក្នុង iOS', 'តែនៅក្នុង Android'],
      correct: 0,
      explanation: 'អាចប្រើទាំង Material និង Cupertino Components ក្នុង App តែមួយសម្រាប់ Cross-Platform UI។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើទាំង Material និង Cupertino Components ដើម្បីបង្កើត UI ដែលគាំទ្រ Cross-Platform។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateful Widget មួយឈ្មោះ\`CrossPlatformAp\` ដែលប្រើ\`MaterialAp\`។
   - បន្ថែម\`AppBa\` ជាមួយ Title "Cross-Platform UI Lab"។
   - បន្ថែម\`Drawe\` ជាមួយ Menu Items ពីរ៖ "ទំព័រដើម" និង "ការកំណត់"។

2. **Material Components:**
   - បង្កើត\`Car\` នៅក្នុង Body ដែលមាន\`ListTil\` ជាមួយ\`title: "ធាតុ Material\`,\`subtitle: "ព័ត៌មានលម្អិត\`, និង\`leading: Icon(Icons.info\`។
   - បន្ថែម\`FloatingActionButto\` ដែលបង្ហាញ\`SnackBa\` ជាមួយសារ "សកម្មភាព!" នៅពេលចុច។

3. **Cupertino Components:**
   - បន្ថែម\`CupertinoButto\` នៅក្នុង\`Car\` ដែលបង្ហាញ\`CupertinoActionShee\` ជាមួយជម្រើសពីរ៖ "ជម្រើស 1", "ជម្រើស 2" និងប៊ូតុង "បោះបង់"។
   - បន្ថែម\`CupertinoSwitc\` ដែលប្តូរស្ថានភាពបើក/បិទ និងបង្ហាញស្ថានភាពនៅក្នុង\`Tex\` Widget។

4. **Theme Customization:**
   - កំណត់\`ThemeDat\` ជាមួយ\`primarySwatch: Colors.blu\` និង\`elevatedButtonThem\` ដែលមាន\`backgroundColor: Colors.blu\`។

**ការណែនាំ:** សាកល្បង App នៅលើ Android និង iOS Emulators ដើម្បីមើលភាពខុសគ្នានៃ UI។ ប្រើ Flutter Inspector ដើម្បីពិនិត្យ Widget Hierarchy។
`,
    solution:`
\`\`\`dart
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class CrossPlatformApp extends StatefulWidget {
  @override
  _CrossPlatformAppState createState() => _CrossPlatformAppState();
}

class _CrossPlatformAppState extends State<CrossPlatformApp> {
  bool _switchValue = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.blue,
            foregroundColor: Colors.white,
          ),
        ),
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('Cross-Platform UI Lab'),
        ),
        drawer: Drawer(
          child: ListView(
            children: [
              DrawerHeader(
                decoration: BoxDecoration(color: Colors.blue),
                child: Text('ម៉ឺនុយ', style: TextStyle(color: Colors.white, fontSize: 24)),
              ),
              ListTile(title: Text('ទំព័រដើម'), onTap: () {}),
              ListTile(title: Text('ការកំណត់'), onTap: () {}),
            ],
          ),
        ),
        body: Center(
          child: Card(
            elevation: 4.0,
            margin: EdgeInsets.all(16.0),
            child: Padding(
              padding: EdgeInsets.all(16.0),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  ListTile(
                    title: Text('ធាតុ Material'),
                    subtitle: Text('ព័ត៌មានលម្អិត'),
                    leading: Icon(Icons.info),
                  ),
                  CupertinoButton(
                    color: CupertinoColors.activeBlue,
                    child: Text('បើក Action Sheet'),
                    onPressed: () {
                      showCupertinoModalPopup(
                        context: context,
                        builder: (context) => CupertinoActionSheet(
                          title: Text('ជម្រើស'),
                          actions: [
                            CupertinoActionSheetAction(
                              child: Text('ជម្រើស 1'),
                              onPressed: () => Navigator.pop(context),
                            ),
                            CupertinoActionSheetAction(
                              child: Text('ជម្រើស 2'),
                              onPressed: () => Navigator.pop(context),
                            ),
                          ],
                          cancelButton: CupertinoActionSheetAction(
                            child: Text('បោះបង់'),
                            onPressed: () => Navigator.pop(context),
                          ),
                        ),
                      );
                    },
                  ),
                  SizedBox(height: 20),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(_switchValue ? 'បើក' : 'បិទ'),
                      SizedBox(width: 10),
                      CupertinoSwitch(
                        value: _switchValue,
                        onChanged: (value) {
                          setState(() {
                            _switchValue = value;
                          });
                        },
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(content: Text('សកម្មភាព!')),
            );
          },
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}

void main() {
  runApp(CrossPlatformApp());
}
\`\`\`
`
  }
};

export default FlutterLesson2_4Content;
