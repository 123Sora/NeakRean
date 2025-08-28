import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson8_1Content: LessonContent = {
  title: 'ការប្រើ Local Storage ជាមួយ Shared Preferences ក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Local Storage នៅក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបប្រើ Shared Preferences សម្រាប់រក្សាទុកទិន្នន័យសាមញ្ញ',
    'រៀនរក្សាទុក និងទាញយកទិន្នន័យដូចជា String និង Integer',
    'អនុវត្តន៍ការបង្កើត App ដែលរក្សាទុក Counter Value',
    'ស្គាល់ការគ្រប់គ្រង Asynchronous Operations ជាមួយ Shared Preferences',
    'យល់ពីការប្រើ `async/await` សម្រាប់ការងារជាមួយ Storage',
    'រៀនបច្ចេកទេសការពារ Performance នៅពេលប្រើ Shared Preferences',
    'ស្វែងយល់ពីការប្រើ Flutter DevTools ដើម្បីវិភាគ App'
  ],
  content: `
# ការប្រើ Local Storage ជាមួយ Shared Preferences ក្នុង Flutter 💾

---

**Shared Preferences** គឺជា Package ដែលអនុញ្ញាតឱ្យរក្សាទុកទិន្នន័យសាមញ្ញ (Key-Value Pairs) នៅលើឧបករណ៍។ វាស័ក្តិសមសម្រាប់រក្សាទុកទិន្នន័យតូចៗដូចជា Settings ឬ Counter Values។ នៅក្នុងមេរៀននេះ យើងនឹងបង្កើត Counter App ដែលរក្សាទុកតម្លៃ Counter ដោយប្រើ Shared Preferences។

---

## 1. អ្វីទៅជា Shared Preferences?

**Shared Preferences** គឺជា Local Storage ដែលរក្សាទុកទិន្នន័យជា Key-Value Pairs នៅលើឧបករណ៍។ វាគាំទ្រទិន្នន័យប្រភេទ៖
- \`String\`
- \`int\`
- \`double\`
- \`bool\`
- \`List<String>\`

---

## 2. ការដំឡើង Shared Preferences

បន្ថែម \`shared_preferences\` ទៅ \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  shared_preferences: ^2.2.0
\`\`\`

ដំណើរការ Command: \`flutter pub get\`

---

## 3. ការប្រើ Shared Preferences

**Shared Preferences** ប្រើ \`async/await\` ដើម្បីរក្សាទុក និងទាញយកទិន្នន័យ។

**ឧទាហរណ៍កូដ:**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

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

  @override
  void initState() {
    super.initState();
    _loadCounter();
  }

  Future<void> _loadCounter() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _counter = prefs.getInt('counter') ?? 0;
    });
  }

  Future<void> _incrementCounter() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _counter++;
      prefs.setInt('counter', _counter);
    });
  }

  Future<void> _resetCounter() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _counter = 0;
      prefs.setInt('counter', _counter);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Shared Preferences Counter')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('ចំនួន:', style: TextStyle(fontSize: 20)),
            Text('$_counter', style: const TextStyle(fontSize: 40)),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: _incrementCounter,
              child: const Text('បន្ថែម'),
            ),
            ElevatedButton(
              onPressed: _resetCounter,
              child: const Text('កំណត់ឡើងវិញ'),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** App រក្សាទុកតម្លៃ Counter នៅក្នុង Shared Preferences និងទាញយកវាឡើងវិញនៅពេលបើក App។

---

## 4. ការគ្រប់គ្រង Asynchronous Operations

- Shared Preferences ប្រើ \`async/await\` ព្រោះការងារជាមួយ Storage ជា Asynchronous។
- ប្រើ \`Future<void>\` សម្រាប់ Methods ដែលទាក់ទងនឹង Storage។
- ត្រូវប្រាកដថា UI មិន Block នៅពេលទាញយកទិន្នន័យ។

---

## 5. ការបង្កើនប្រសិទ្ធភាព Performance

- **កាត់បន្ថយ I/O Operations:** កុំរក្សាទុកទិន្នន័យញឹកញាប់ពេក។
- **ប្រើ \`const\` Constructors:** កាត់បន្ថយ Widget Rebuilds។
- **បំបែក Widgets:** ធ្វើឱ្យ Rebuilds កើតឡើងតែលើ Widget តូចៗ។
- **ប្រើ Flutter DevTools:** វិភាគ Memory Usage និង Performance។

---

## 6. ការប្រើ Flutter DevTools

- **Memory Tab:** តាមដាន Memory Usage នៅពេលប្រើ Shared Preferences។
- **Performance Tab:** វិភាគ Frame Rendering Time។
- **Widget Inspector:** ពិនិត្យ Widget Tree និង Rebuilds។

**ការបើក DevTools:**
- ដំណើរការ \`flutter run --profile\` ឬបើក DevTools នៅក្នុង IDE។

---

## 7. គន្លឹះសម្រាប់ Shared Preferences

- ប្រើ Shared Preferences សម្រាប់ទិន្នន័យសាមញ្ញ។
- ប្រើ \`async/await\` ដើម្បីគ្រប់គ្រង Asynchronous Operations។
- កាត់បន្ថយ I/O Operations ដើម្បីបង្កើន Performance។
- ប្រើ Flutter DevTools ដើម្បីវិភាគ App។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការរក្សាទុក Counter</h3>
<p>រក្សាទុក Counter Value ទៅ Shared Preferences។</p>
<pre><code class="language-dart">
Future<void> _incrementCounter() async {
  final prefs = await SharedPreferences.getInstance();
  setState(() {
    _counter++;
    prefs.setInt('counter', _counter);
  });
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការទាញយក Counter</h3>
<p>ទាញយក Counter Value ពី Shared Preferences។</p>
<pre><code class="language-dart">
Future<void> _loadCounter() async {
  final prefs = await SharedPreferences.getInstance();
  setState(() {
    _counter = prefs.getInt('counter') ?? 0;
  });
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការកំណត់ឡើងវិញ Counter</h3>
<p>កំណត់ Counter Value ទៅ 0 និងរក្សាទុក។</p>
<pre><code class="language-dart">
Future<void> _resetCounter() async {
  final prefs = await SharedPreferences.getInstance();
  setState(() {
    _counter = 0;
    prefs.setInt('counter', _counter);
  });
}
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Shared Preferences ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុកទិន្នន័យស្មុគស្មាញ',
        'រក្សាទុកទិន្នន័យសាមញ្ញជា Key-Value Pairs',
        'បង្កើត Animations',
        'ទាញទិន្នន័យពី API'
      ],
      correct: 1,
      explanation: 'Shared Preferences ប្រើសម្រាប់រក្សាទុកទិន្នន័យសាមញ្ញជា Key-Value Pairs។'
    },
    {
      question: 'តើ Package អ្វីត្រូវបន្ថែមទៅ `pubspec.yaml` សម្រាប់ Shared Preferences?',
      options: [
        'http',
        'provider',
        'shared_preferences',
        'flutter_launcher_icons'
      ],
      correct: 2,
      explanation: '`shared_preferences` Package ត្រូវបន្ថែមសម្រាប់ Local Storage។'
    },
    {
      question: 'តើ Shared Preferences គាំទ្រទិន្នន័យប្រភេទណាខ្លះ?',
      options: [
        'String, int, double, bool, List<String>',
        'Images, Videos',
        'Complex Objects',
        'Database Tables'
      ],
      correct: 0,
      explanation: 'Shared Preferences គាំទ្រទិន្នន័យប្រភេទ String, int, double, bool, និង List<String>។'
    },
    {
      question: 'តើការប្រើ `async/await` នៅក្នុង Shared Preferences មានគោលបំណងអ្វី?',
      options: [
        'បង្កើត Animations',
        'គ្រប់គ្រង Asynchronous Operations',
        'កំណត់ Theme',
        'បង្កើត Widget'
      ],
      correct: 1,
      explanation: '`async/await` គ្រប់គ្រង Asynchronous Operations នៅពេលធ្វើការជាមួយ Storage។'
    },
    {
      question: 'តើ Method អ្វីប្រើសម្រាប់ទាញយក Instance នៃ Shared Preferences?',
      options: [
        'SharedPreferences.getInstance()',
        'SharedPreferences.create()',
        'SharedPreferences.load()',
        'SharedPreferences.init()'
      ],
      correct: 0,
      explanation: '`SharedPreferences.getInstance()` ប្រើសម្រាប់ទាញយក Instance។'
    },
    {
      question: 'តើការប្រើ `const` Constructor ជួយអ្វីនៅក្នុង App?',
      options: [
        'បង្កើត Animation',
        'កាត់បន្ថយ Widget Rebuilds',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`const` Constructor កាត់បន្ថយ Widget Rebuilds ដើម្បីបង្កើន Performance។'
    },
    {
      question: 'តើ Flutter DevTools ជួយអ្វីនៅក្នុង Shared Preferences App?',
      options: [
        'បង្កើត Widget',
        'វិភាគ Memory Usage និង Performance',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Flutter DevTools វិភាគ Memory Usage, Frame Rendering, និង Widget Tree។'
    },
    {
      question: 'តើការកាត់បន្ថយ I/O Operations ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'បង្កើន Performance',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'ការកាត់បន្ថយ I/O Operations បង្កើន Performance នៃ App។'
    },
    {
      question: 'តើ Method អ្វីប្រើសម្រាប់រក្សាទុក Integer ទៅ Shared Preferences?',
      options: [
        'setString',
        'setInt',
        'setDouble',
        'setBool'
      ],
      correct: 1,
      explanation: '`setInt` ប្រើសម្រាប់រក្សាទុក Integer។'
    },
    {
      question: 'តើ Method អ្វីប្រើសម្រាប់ទាញ Integer ពី Shared Preferences?',
      options: [
        'getString',
        'getInt',
        'getDouble',
        'getBool'
      ],
      correct: 1,
      explanation: '`getInt` ប្រើសម្រាប់ទាញ Integer។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ Shared Preferences ដើម្បីរក្សាទុក Counter Value។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`SharedPrefsApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`CounterScreen\` សម្រាប់បង្ហាញ UI។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Shared Preferences Counter"។

2. **Counter Functionality:**
   - បង្ហាញ Counter Value នៅកណ្តាល Screen។
   - បន្ថែម \`ElevatedButton\` ពីរសម្រាប់បន្ថែម និងកំណត់ឡើងវិញ Counter។
   - រក្សាទុក Counter Value ទៅ Shared Preferences។
   - ទាញយក Counter Value ពី Shared Preferences នៅពេលបើក App។

3. **Performance Optimization:**
   - ប្រើ \`const\` Constructors សម្រាប់ Widgets ឋិតិវន្ត។
   - ប្រើ \`async/await\` សម្រាប់ការងារជាមួយ Shared Preferences។

4. **Performance Testing:**
   - ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Widget Rebuilds និង Memory Usage។

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងឧបករណ៍ពិត និងប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  runApp(const SharedPrefsApp());
}

class SharedPrefsApp extends StatelessWidget {
  const SharedPrefsApp({Key? key}) : super(key: key);

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

  @override
  void initState() {
    super.initState();
    _loadCounter();
  }

  Future<void> _loadCounter() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _counter = prefs.getInt('counter') ?? 0;
    });
  }

  Future<void> _incrementCounter() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _counter++;
      prefs.setInt('counter', _counter);
    });
  }

  Future<void> _resetCounter() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      _counter = 0;
      prefs.setInt('counter', _counter);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Shared Preferences Counter')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('ចំនួន:', style: TextStyle(fontSize: 20)),
            Text('$_counter', style: const TextStyle(fontSize: 40)),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: _incrementCounter,
              child: const Text('បន្ថែម'),
            ),
            ElevatedButton(
              onPressed: _resetCounter,
              child: const Text('កំណត់ឡើងវិញ'),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`
`
  }
};

export default FlutterLesson8_1Content;