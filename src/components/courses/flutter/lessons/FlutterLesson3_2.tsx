import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson3_2Content: LessonContent = {
  title: 'ការគ្រប់គ្រងស្ថានភាពជាមួយ Provider',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Provider នៅក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបប្រើ `Provider` Package ដើម្បីគ្រប់គ្រង App State',
    'រៀនបង្កើត ChangeNotifier និង ChangeNotifierProvider',
    'ស្គាល់ការប្រើ Consumer និង Provider.of ដើម្បីចូលប្រើ State',
    'អនុវត្តន៍ការបង្កើត App ដែលប្រើ Provider សម្រាប់ State Management',
    'យល់ពីគុណសម្បត្តិនៃ Provider ធៀបនឹង setState'
  ],
  content: `
# ការគ្រប់គ្រងស្ថានភាពជាមួយ Provider 📦🔄

---

**Provider** គឺជា State Management Solution ដ៏ពេញនិយមនៅក្នុង Flutter ដែលអនុញ្ញាតឱ្យចែករំលែក State រវាង Widgets ឬ Screens ផ្សេងគ្នា។ វាសាមញ្ញ និងមានប្រសិទ្ធភាពជាង \`setState\` សម្រាប់ App State។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបប្រើ \`Provider\` Package ដើម្បីគ្រប់គ្រង State។

---

## 1. អ្វីទៅជា Provider?

**Provider** គឺជា Package ដែលជួយគ្រប់គ្រង App State ដោយផ្តល់ State ទៅ Widgets ដែលត្រូវការ។ វាប្រើ **Dependency Injection** ដើម្បីធ្វើឱ្យ State អាចចូលប្រើបាននៅទូទាំង Widget Tree។

**គុណសម្បត្តិនៃ Provider:**
- សាមញ្ញ និងងាយស្រួលប្រើ។
- អនុញ្ញាតឱ្យចែករំលែក State ទូទាំង App។
- កាត់បន្ថយ Boilerplate Code បើធៀបនឹង \`setState\`។

---

## 2. ការដំឡើង Provider Package

ដើម្បីប្រើ Provider ត្រូវបន្ថែម Package ទៅក្នុង \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  provider: ^6.0.0
\`\`\`

បន្ទាប់មក ដំណើរការ \`flutter pub get\` ដើម្បីទាញ Package។

---

## 3. ការបង្កើត ChangeNotifier

\`ChangeNotifier\` គឺជា Class ដែលរក្សាទុក State និងជូនដំណឹងដល់ Widgets នៅពេល State ផ្លាីប្តូរ។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class CounterModel extends ChangeNotifier {
  int _counter = 0;

  int get counter => _counter;

  void increment() {
    _counter++;
    notifyListeners();
  }
}
\`\`\`

**ពន្យល់:**
- \`_counter\` គឺជា State។
- \`notifyListeners()\` ជូនដំណឹងដល់ Widgets ដែលភ្ជាប់ជាមួយ \`CounterModel\`។

---

## 4. ការប្រើ ChangeNotifierProvider

\`ChangeNotifierProvider\` ផ្តល់ \`ChangeNotifier\` ទៅ Widget Tree។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class CounterModel extends ChangeNotifier {
  int _counter = 0;
  int get counter => _counter;
  void increment() {
    _counter++;
    notifyListeners();
  }
}

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CounterModel(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Provider Counter')),
        body: Center(
          child: Consumer<CounterModel>(
            builder: (context, counterModel, child) {
              return Text('Counter: '$'{counterModel.counter}');
            },
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () => Provider.of<CounterModel>(context, listen: false).increment(),
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បង្ហាញ Counter ដែលកើនឡើងនៅពេលចុច FloatingActionButton។

---

## 5. Consumer និង Provider.of

- **Consumer:** Widget ដែលចូលប្រើ State និង Rebuild នៅពេល State ផ្លាស់ប្តូរ។
- **Provider.of:** វិធីសាស្ត្រដើម្បីចូលប្រើ State ដោយផ្ទាល់ ដោយមិនត្រូវការ Rebuild (ប្រើ \`listen: false\` សម្រាប់ Actions)។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class SwitchModel extends ChangeNotifier {
  bool _isSwitched = false;
  bool get isSwitched => _isSwitched;

  void toggleSwitch() {
    _isSwitched = !_isSwitched;
    notifyListeners();
  }
}

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => SwitchModel(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Provider Switch')),
        body: Center(
          child: Consumer<SwitchModel>(
            builder: (context, switchModel, child) {
              return Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Switch(
                    value: switchModel.isSwitched,
                    onChanged: (value) => switchModel.toggleSwitch(),
                  ),
                  Text(switchModel.isSwitched ? 'បើក' : 'បិទ'),
                ],
              );
            },
          ),
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បង្ហាញ Switch ដែលប្តូរស្ថានភាព និង Text ដែលផ្លាស់ប្តូរទៅតាម State។

---

## 6. គុណសម្បត្តិនៃ Provider ធៀបនឹង setState

- **Provider:** សមស្របសម្រាប់ App State ដែលចែករំលែករវាង Widgets ផ្សេងគ្នា។
- **setState:** សមស្របសម្រាប់ Local State នៅក្នុង Widget តែមួយ។
- Provider កាត់បន្ថយ Boilerplate Code និងធ្វើឱ្យ Code កាន់តែស្អាត។
- Provider អនុញ្ញាតឱ្យ Rebuild Widgets ជាក់លាក់តែប៉ុណ្ណោះ។

---

## 7. គន្លឹះសម្រាប់ Provider

- បន្ថែម \`provider\` Package ទៅ \`pubspec.yaml\`។
- ប្រើ \`ChangeNotifierProvider\` នៅ Root នៃ App។
- ប្រើ \`Consumer\` សម្រាប់ Widgets ដែលត្រូវ Rebuild។
- ប្រើ \`Provider.of\` ជាមួយ \`listen: false\` សម្រាប់ Actions។
- ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Provider State Changes។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Counter ជាមួយ Provider</h3>
<p>បង្កើត Counter ដោយប្រើ Provider។</p>
<pre><code class="language-dart">
class CounterModel extends ChangeNotifier {
  int _counter = 0;
  int get counter => _counter;
  void increment() {
    _counter++;
    notifyListeners();
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Consumer<CounterModel>(
            builder: (context, model, child) => Text('Counter: '$'{model.counter}'),
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () => Provider.of<CounterModel>(context, listen: false).increment(),
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Switch ជាមួយ Provider</h3>
<p>បង្កើត Switch ដោយប្រើ Provider។</p>
<pre><code class="language-dart">
class SwitchModel extends ChangeNotifier {
  bool _isSwitched = false;
  bool get isSwitched => _isSwitched;
  void toggleSwitch() {
    _isSwitched = !_isSwitched;
    notifyListeners();
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Consumer<SwitchModel>(
            builder: (context, model, child) => Switch(
              value: model.isSwitched,
              onChanged: (value) => model.toggleSwitch(),
            ),
          ),
        ),
      ),
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ TextField ជាមួយ Provider</h3>
<p>បង្កើត TextField ដោយប្រើ Provider។</p>
<pre><code class="language-dart">
class TextModel extends ChangeNotifier {
  String _inputText = '';
  String get inputText => _inputText;
  void updateText(String text) {
    _inputText = text;
    notifyListeners();
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Consumer<TextModel>(
            builder: (context, model, child) => Column(
              children: [
                TextField(
                  onChanged: (value) => model.updateText(value),
                  decoration: InputDecoration(labelText: 'បញ្ចូលអត្ថបទ'),
                ),
                Text('អត្ថបទ: '$'{model.inputText}'),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Provider គឺជាអ្វី?',
      options: [
        'Layout Widget',
        'State Management Solution',
        'Theme Manager',
        'Navigation System'
      ],
      correct: 1,
      explanation: 'Provider គឺជា State Management Solution សម្រាប់ចែករំលែក State។'
    },
    {
      question: 'តើ Package ណាដែលត្រូវបន្ថែមដើម្បីប្រើ Provider?',
      options: ['flutter', 'provider', 'material', 'cupertino'],
      correct: 1,
      explanation: '`provider` Package ត្រូវបន្ថែមទៅ `pubspec.yaml`។'
    },
    {
      question: 'តើ `ChangeNotifier` មានតួនាទីអ្វី?',
      options: [
        'បង្កើត Widget',
        'រក្សាទុក State និងជូនដំណឹង',
        'កំណត់ Theme',
        'គ្រប់គ្រង Layout'
      ],
      correct: 1,
      explanation: '`ChangeNotifier` រក្សាទុក State និងជូនដំណឹងនៅពេល State ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ `notifyListeners()` ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget Tree',
        'ជូនដំណឹងដល់ Widgets អំពី State Change',
        'លុប State',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`notifyListeners()` ជូនដំណឹងដល់ Widgets ដែលភ្ជាប់ជាមួយ State។'
    },
    {
      question: 'តើ Widget ណាដែលប្រើសម្រាប់ផ្តល់ State ទៅ Widget Tree?',
      options: ['Consumer', 'ChangeNotifierProvider', 'Provider.of', 'StatelessWidget'],
      correct: 1,
      explanation: '`ChangeNotifierProvider` ផ្តល់ State ទៅ Widget Tree។'
    },
    {
      question: 'តើ `Consumer` Widget មានតួនាទីអ្វី?',
      options: [
        'បង្កើត State',
        'ចូលប្រើ State និង Rebuild UI',
        'កំណត់ Theme',
        'គ្រប់គ្រង Layout'
      ],
      correct: 1,
      explanation: '`Consumer` ចូលប្រើ State និង Rebuild UI នៅពេល State ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ `Provider.of` ជាមួយ `listen: false` ប្រើសម្រាប់អ្វី?',
      options: [
        'Rebuild Widget',
        'ចូលប្រើ State សម្រាប់ Actions',
        'បង្កើត State',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`Provider.of` ជាមួយ `listen: false` ប្រើសម្រាប់ Actions ដោយមិន Rebuild។'
    },
    {
      question: 'តើ Provider សមស្របសម្រាប់ State ប្រភេទណា?',
      options: [
        'Local State',
        'App State',
        'Ephemeral State',
        'Static State'
      ],
      correct: 1,
      explanation: 'Provider សមស្របសម្រាប់ App State ដែលចែករំលែកទូទាំង App។'
    },
    {
      question: 'តើអ្វីជាគុណសម្បត្តិនៃ Provider ធៀបនឹង setState?',
      options: [
        'សាមញ្ញជាងសម្រាប់ Local State',
        'ចែករំលែក State ទូទាំង App',
        'មិនត្រូវការ Package',
        'មិន Rebuild Widget'
      ],
      correct: 1,
      explanation: 'Provider អនុញ្ញាតឱ្យចែករំលែក State ទូទាំង App។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `Consumer` នៅក្នុង StatelessWidget បានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅក្នុង StatefulWidget', 'បានតែនៅក្នុង Provider'],
      correct: 0,
      explanation: '`Consumer` អាចប្រើបានទាំងនៅក្នុង StatelessWidget និង StatefulWidget។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូດ `notifyListeners()`?',
      options: [
        'បង្កើត Widget Tree',
        'ជូនដំណឹងដល់ Widgets អំពី State Change',
        'លុប State',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`notifyListeners()` ជូនដំណឹងដល់ Widgets ដែលភ្ជាប់ជាមួយ State។'
    },
    {
      question: 'តើ `ChangeNotifierProvider` ត្រូវដាក់នៅឯណា?',
      options: [
        'នៅ Root នៃ App',
        'នៅក្នុង StatelessWidget',
        'នៅក្នុង Consumer',
        'នៅក្នុង setState'
      ],
      correct: 0,
      explanation: '`ChangeNotifierProvider` ត្រូវដាក់នៅ Root នៃ App។'
    },
    {
      question: 'តើ Provider អាចគ្រប់គ្រង Local State បានទេ?',
      options: [
        'បាទ/ចាស',
        'ទេ',
        'បានតែនៅក្នុង StatefulWidget',
        'បានតែនៅក្នុង App State'
      ],
      correct: 0,
      explanation: 'Provider អាចគ្រប់គ្រងទាំង Local State និង App State ប៉ុន្តែសមស្របជាងសម្រាប់ App State។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ \`Provider\` Package ដើម្បីគ្រប់គ្រង App State។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`ProviderApp\` ដែលប្រើ \`MaterialApp\`។
   - បន្ថែម \`ChangeNotifierProvider\` នៅ Root នៃ App។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Provider Lab"។

2. **Counter Feature:**
   - បង្កើត \`CounterModel\` (ChangeNotifier) ដែលមាន Counter និង Methods សម្រាប់បង្កើន (+1) និងបន្ថយ (-1)។
   - បង្ហាញ Counter នៅក្នុង \`Text\` Widget ដោយប្រើ \`Consumer\`។
   - បន្ថែម \`FloatingActionButton\` ពីរសម្រាប់បង្កើន និងបន្ថយ Counter។

3. **Switch Feature:**
   - បង្កើត \`SwitchModel\` (ChangeNotifier) ដែលគ្រប់គ្រងស្ថានភាពបើក/បិទ។
   - បង្ហាញ \`Switch\` Widget និង \`Text\` Widget ដែលបង្ហាញស្ថានភាព ("បើក" ឬ "បិទ") ដោយប្រើ \`Consumer\`។

4. **TextField Feature:**
   - បង្កើត \`TextModel\` (ChangeNotifier) ដែលរក្សាទុកអត្ថបទ។
   - បន្ថែម \`TextField\` ដែលអនុញ្ញាតឱ្យបញ្ចូលអត្ថបទ និងបង្ហាញអត្ថបទនៅក្នុង \`Text\` Widget។

**ការណែនាំ:** បន្ថែម \`provider\` Package ទៅ \`pubspec.yaml\`។ សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីពិនិត្យ State Changes។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class CounterModel extends ChangeNotifier {
  int _counter = 0;
  int get counter => _counter;

  void increment() {
    _counter++;
    notifyListeners();
  }

  void decrement() {
    _counter--;
    notifyListeners();
  }
}

class SwitchModel extends ChangeNotifier {
  bool _isSwitched = false;
  bool get isSwitched => _isSwitched;

  void toggleSwitch() {
    _isSwitched = !_isSwitched;
    notifyListeners();
  }
}

class TextModel extends ChangeNotifier {
  String _inputText = '';
  String get inputText => _inputText;

  void updateText(String text) {
    _inputText = text;
    notifyListeners();
  }
}

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => CounterModel()),
        ChangeNotifierProvider(create: (context) => SwitchModel()),
        ChangeNotifierProvider(create: (context) => TextModel()),
      ],
      child: ProviderApp(),
    ),
  );
}

class ProviderApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Provider Lab')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Consumer<CounterModel>(
                builder: (context, counterModel, child) => Text(
                  'Counter: '$'{counterModel.counter}',
                  style: TextStyle(fontSize: 20),
                ),
              ),
              SizedBox(height: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  FloatingActionButton(
                    onPressed: () => Provider.of<CounterModel>(context, listen: false).increment(),
                    child: Icon(Icons.add),
                  ),
                  SizedBox(width: 10),
                  FloatingActionButton(
                    onPressed: () => Provider.of<CounterModel>(context, listen: false).decrement(),
                    child: Icon(Icons.remove),
                  ),
                ],
              ),
              SizedBox(height: 20),
              Consumer<SwitchModel>(
                builder: (context, switchModel, child) => Column(
                  children: [
                    Switch(
                      value: switchModel.isSwitched,
                      onChanged: (value) => switchModel.toggleSwitch(),
                    ),
                    Text(switchModel.isSwitched ? 'បើក' : 'បិទ', style: TextStyle(fontSize: 20)),
                  ],
                ),
              ),
              SizedBox(height: 20),
              Consumer<TextModel>(
                builder: (context, textModel, child) => Column(
                  children: [
                    TextField(
                      onChanged: (value) => textModel.updateText(value),
                      decoration: InputDecoration(
                        labelText: 'បញ្ចូលអត្ថបទ',
                        border: OutlineInputBorder(),
                      ),
                    ),
                    SizedBox(height: 10),
                    Text('អត្ថបទ: '$'{textModel.inputText}', style: TextStyle(fontSize: 20)),
                  ],
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

export default FlutterLesson3_2Content;
