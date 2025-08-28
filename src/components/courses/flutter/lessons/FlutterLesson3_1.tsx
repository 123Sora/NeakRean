import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson3_1Content: LessonContent = {
  title: 'មូលដ្ឋាននៃការគ្រប់គ្រងស្ថានភាព',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ State នៅក្នុង Flutter',
    'ស្វែងយល់ពីភាពខុសគ្នារវាង Stateless និង Stateful Widgets',
    'រៀនប្រើ `setState` ដើម្បីគ្រប់គ្រងស្ថានភាពសាមញ្ញ',
    'ស្គាល់ប្រភេទនៃ State ដូចជា Local State និង App State',
    'អនុវត្តន៍ការបង្កើត UI ដែលផ្លាស់ប្តូរដោយផ្អែកលើ State',
    'យល់ពី Lifecycle នៃ Stateful Widget'
  ],
  content: `
# មូលដ្ឋាននៃការគ្រប់គ្រងស្ថានភាព 🧠🔄

---

**State** នៅក្នុង Flutter គឺជាទិន្នន័យដែលអាចផ្លាស់ប្តូរនៅពេល App កំពុងដំណើរការ។ ឧទាហរណ៍៖ តម្លៃនៃ Counter, ស្ថានភាពបើក/បិទនៃ Switch, ឬទិន្នន័យដែលបានទាញពី API។ ការគ្រប់គ្រងស្ថានភាព (State Management) គឺជាវិធីសាស្ត្រដើម្បីធ្វើឱ្យ UI ឆ្លើយតបនឹងការផ្លាស់ប្តូរទាំងនេះ។

---

## 1. អ្វីទៅជា State?

**State** គឺជាព័ត៌មានដែល Widget ឬ App ត្រូវការដើម្បីបង្ហាញ UI។ វាអាចជា៖
- **Local State:** ស្ថានភាពដែលប្រើនៅក្នុង Widget តែមួយ (ឧទាហរណ៍៖ តម្លៃ Counter)។
- **App State:** ស្ថានភាពដែលចែករំលែករវាង Widgets ឬ Screens ផ្សេងគ្នា (ឧទាហរណ៍៖ ទិន្នន័យអ្នកប្រើ)។

Flutter ប្រើ **StatelessWidget** និង **StatefulWidget** ដើម្បីគ្រប់គ្រង State៖
- **StatelessWidget:** សម្រាប់ UI ដែលមិនផ្លាស់ប្តូរ (ឧទាហរណ៍៖ Text ឋិតនឹង)។
- **StatefulWidget:** សម្រាប់ UI ដែលផ្លាីប្តូរ (ឧទាហរណ៍៖ Counter, Switch)។

---

## 2. StatelessWidget និង StatefulWidget

- **StatelessWidget:** មិនមាន State។ វាបង្ហាញ UI ដែលផ្អែកលើ Props ឬ Data ថេរ។
- **StatefulWidget:** មាន State Object ដែលរក្សាទុកទិន្នន័យ និងអនុញ្ញាតឱ្យ UI ផ្លាស់ប្តូរនៅពេល State ផ្លាស់ប្តូរ។

**ឧទាហរណ៍កូដ (StatelessWidget):**

\`\`\`dart
import 'package:flutter/material.dart';

class MyStatelessWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(child: Text('អត្ថបទឋិតនឹង')),
      ),
    );
  }
}

void main() => runApp(MyStatelessWidget());
\`\`\`

**ឧទាហរណ៍កូដ (StatefulWidget):**

\`\`\`dart
import 'package:flutter/material.dart';

class MyStatefulWidget extends StatefulWidget {
  @override
  _MyStatefulWidgetState createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(child: Text('ចុច: $_counter ដង')),
        floatingActionButton: FloatingActionButton(
          onPressed: _incrementCounter,
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}

void main() => runApp(MyStatefulWidget());
\`\`\`

**លទ្ធផល:** បង្ហាញ Counter ដែលកើនឡើងនៅពេលចុច FloatingActionButton។

---

## 3. ការប្រើ setState

\`setState\` គឺជាវិធីសាមញ្ញបំផុតសម្រាប់គ្រប់គ្រង Local State។ វាប្រាប់ Flutter ឱ្យ Rebuild Widget Tree នៅពេល State ផ្លាស់ប្តូរ។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

class SwitchExample extends StatefulWidget {
  @override
  _SwitchExampleState createState() => _SwitchExampleState();
}

class _SwitchExampleState extends State<SwitchExample> {
  bool _isSwitched = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Switch(
                value: _isSwitched,
                onChanged: (value) {
                  setState(() {
                    _isSwitched = value;
                  });
                },
              ),
              Text(_isSwitched ? 'បើក' : 'បិទ'),
            ],
          ),
        ),
      ),
    );
  }
}

void main() => runApp(SwitchExample());
\`\`\`

**លទ្ធផល:** បង្ហាញ Switch ដែលប្តូរស្ថានភាព និង Text ដែលផ្លាីប្តូរទៅតាមស្ថានភាព។

---

## 4. ប្រភេទនៃ State

- **Local State:** គ្រប់គ្រងនៅក្នុង Widget តែមួយដោយប្រើ \`setState\` (ឧទាហរណ៍៖ Counter, Switch)។
- **App State:** ចែករំលែករវាង Widgets ឬ Screens ផ្សេងគ្នា (ឧទាហរណ៍៖ ទិន្នន័យអ្នកប្រើ, Theme)។ ត្រូវការ State Management Solutions ដូចជា Provider, Riverpod, ឬ Bloc។
- **Ephemeral State:** ស្ថានភាពបណ្តោះអាសន្ននៅក្នុង Widget តែមួយ។
- **Global State:** ស្ថានភាពដែលប្រើទូទាំង App។

---

## 5. Lifecycle នៃ Stateful Widget

StatefulWidget មាន Lifecycle ដែលជួយគ្រប់គ្រង State៖
- **createState:** បង្កើត State Object។
- **initState:** ហៅនៅពេល Widget ត្រូវបានបង្កើតដំបូង។
- **build:** បង្កើត Widget Tree។
- **setState:** ធ្វើឱ្យ Widget Rebuild។
- **dispose:** ហៅនៅពេល Widget ត្រូវបានលុបចេញ។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

class LifecycleExample extends StatefulWidget {
  @override
  _LifecycleExampleState createState() => _LifecycleExampleState();
}

class _LifecycleExampleState extends State<LifecycleExample> {
  int _counter = 0;

  @override
  void initState() {
    super.initState();
    print('initState: Widget ត្រូវបានបង្កើត');
  }

  @override
  void dispose() {
    print('dispose: Widget ត្រូវបានលុប');
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(child: Text('Counter: $_counter')),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            setState(() {
              _counter++;
            });
          },
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}

void main() => runApp(LifecycleExample());
\`\`\`

**លទ្ធផល:** បង្ហាញ Counter និងបោះពុម្ព Lifecycle Events នៅ Console។

---

## 6. គន្លឹះសម្រាប់ State Management

- ប្រើ \`StatelessWidget\` សម្រាប់ UI ដែលមិនផ្លាស់ប្តូរ។
- ប្រើ \`StatefulWidget\` និង \`setState\` សម្រាប់ Local State សាមញ្ញ។
- ពិចារណាប្រើ State Management Solutions (ឧទាហរណ៍៖ Provider) សម្រាប់ App State។
- ប្រើ \`initState\` និង \`dispose\` ដើម្បីគ្រប់គ្រង Resources។
- ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Widget Tree និង State Changes។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ Counter ជាមួយ setState</h3>
<p>បង្កើត Counter ដែលកើនឡើងនៅពេលចុច។</p>
<pre><code class="language-dart">
class CounterApp extends StatefulWidget {
  @override
  _CounterAppState createState() => _CounterAppState();
}

class _CounterAppState extends State<CounterApp> {
  int _counter = 0;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(child: Text('Counter: $_counter')),
        floatingActionButton: FloatingActionButton(
          onPressed: () => setState(() => _counter++),
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Switch ជាមួយ setState</h3>
<p>បង្កើត Switch ដែលប្តូរស្ថានភាព។</p>
<pre><code class="language-dart">
class SwitchApp extends StatefulWidget {
  @override
  _SwitchAppState createState() => _SwitchAppState();
}

class _SwitchAppState extends State<SwitchApp> {
  bool _isSwitched = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Switch(
            value: _isSwitched,
            onChanged: (value) => setState(() => _isSwitched = value),
          ),
        ),
      ),
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ TextField ជាមួយ State</h3>
<p>បង្កើត TextField ដែលបង្ហាញអត្ថបទដែលបញ្ចូល។</p>
<pre><code class="language-dart">
class TextFieldApp extends StatefulWidget {
  @override
  _TextFieldAppState createState() => _TextFieldAppState();
}

class _TextFieldAppState extends State<TextFieldApp> {
  String _inputText = '';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextField(
                onChanged: (value) => setState(() => _inputText = value),
                decoration: InputDecoration(labelText: 'បញ្ចូលអត្ថបទ'),
              ),
              Text('អត្ថបទ: $_inputText'),
            ],
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
      question: 'តើ State នៅក្នុង Flutter គឺជាអ្វី?',
      options: [
        'ទិន្នន័យដែលផ្លាស់ប្តូរបាន',
        'Widget ដែលមិនផ្លាស់ប្តូរ',
        'Layout នៃ App',
        'Theme នៃ App'
      ],
      correct: 0,
      explanation: 'State គឺជាទិន្នន័យដែលផ្លាស់ប្តូរបាន ដែលធ្វើឱ្យ UI ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ Widget ណាដែលប្រើសម្រាប់ UI ដែលផ្លាស់ប្តូរ?',
      options: ['StatelessWidget', 'StatefulWidget', 'Container', 'Row'],
      correct: 1,
      explanation: '`StatefulWidget` ប្រើសម្រាប់ UI ដែលផ្លាីប្តូរដោយផ្អែកលើ State។'
    },
    {
      question: 'តើ `setState` មានតួនាទីអ្វី?',
      options: [
        'បង្កើត Widget',
        'ធ្វើឱ្យ Widget Tree Rebuild',
        'កំណត់ Theme',
        'គ្រប់គ្រង Layout'
      ],
      correct: 1,
      explanation: '`setState` ប្រាប់ Flutter ឱ្យ Rebuild Widget Tree នៅពេល State ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ Local State គឺជាអ្វី?',
      options: [
        'State ដែលចែករំលែកទូទាំង App',
        'State ដែលប្រើនៅក្នុង Widget តែមួយ',
        'State ដែលមិនផ្លាស់ប្តូរ',
        'State ដែលប្រើនៅក្នុង API'
      ],
      correct: 1,
      explanation: 'Local State គឺជា State ដែលប្រើនៅក្នុង Widget តែមួយ។'
    },
    {
      question: 'តើ Lifecycle Method ណាដែលហៅនៅពេល Widget ត្រូវបានបង្កើតដំបូង?',
      options: ['build', 'dispose', 'initState', 'setState'],
      correct: 2,
      explanation: '`initState` ត្រូវបានហៅនៅពេល Widget ត្រូវបានបង្កើតដំបូង។'
    },
    {
      question: 'តើ `dispose` Method មានតួនាទីអ្វី?',
      options: [
        'បង្កើត State',
        'លុប Resources នៅពេល Widget បាត់',
        'Rebuild Widget Tree',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`dispose` លុប Resources នៅពេល Widget ត្រូវបានលុបចេញ។'
    },
    {
      question: 'តើ StatelessWidget អាចផ្លាស់ប្តូរ State បានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅក្នុង App State', 'បានតែនៅក្នុង Local State'],
      correct: 1,
      explanation: '`StatelessWidget` មិនអាចផ្លាស់ប្តូរ State បានទេ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដ `setState(() => _counter++)`?',
      options: [
        'កើន Counter និង Rebuild UI',
        'បង្កើត Widget ថ្មី',
        'លុប Widget',
        'កំណត់ Theme'
      ],
      correct: 0,
      explanation: '`setState(() => _counter++)` កើន Counter និង Rebuild UI។'
    },
    {
      question: 'តើ App State គឺជាអ្វី?',
      options: [
        'State ដែលប្រើនៅក្នុង Widget តែមួយ',
        'State ដែលចែករំលែកទូទាំង App',
        'State ដែលមិនផ្លាស់ប្តូរ',
        'State ដែលប្រើនៅក្នុង Layout'
      ],
      correct: 1,
      explanation: 'App State គឺជា State ដែលចែករំលែកទូទាំង App។'
    },
    {
      question: 'តើ Widget ណាដែលសមស្របសម្រាប់ TextField ដែលផ្លាស់ប្តូរអត្ថបទ?',
      options: ['StatelessWidget', 'StatefulWidget', 'Container', 'Row'],
      correct: 1,
      explanation: '`StatefulWidget` សមស្របសម្រាប់ TextField ដែលផ្លាស់ប្តូរ State។'
    },
    {
      question: 'តើ Lifecycle Method ណាដែលបង្កើត Widget Tree?',
      options: ['initState', 'build', 'dispose', 'setState'],
      correct: 1,
      explanation: '`build` Method បង្កើត Widget Tree។'
    },
    {
      question: 'តើអ្នកអាចប្រើ `setState` នៅក្នុង StatelessWidget បានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅក្នុង initState', 'បានតែនៅក្នុង dispose'],
      correct: 1,
      explanation: '`setState` អាចប្រើបានតែនៅក្នុង StatefulWidget។'
    },
    {
      question: 'តើ Ephemeral State គឺជាអ្វី?',
      options: [
        'State ដែលចែករំលែកទូទាំង App',
        'State បណ្តោះអាសន្ននៅក្នុង Widget តែមួយ',
        'State ដែលមិនផ្លាស់ប្តូរ',
        'State ដែលប្រើនៅក្នុង API'
      ],
      correct: 1,
      explanation: 'Ephemeral State គឺជា State បណ្តោះអាសន្ននៅក្នុង Widget តែមួយ។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ \`StatefulWidget\` និង \`setState\` ដើម្បីគ្រប់គ្រង Local State។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateful Widget មួយឈ្មោះ \`StateManagementApp\` ដែលប្រើ \`MaterialApp\`។
   - បន្ថែម \`AppBar\` ជាមួយ Title "State Management Lab"។

2. **Counter Feature:**
   - បង្កើត Counter ដែលបង្ហាញតម្លៃនៅក្នុង \`Text\` Widget។
   - បន្ថែម \`FloatingActionButton\` ពីរសម្រាប់បង្កើន (+1) និងបន្ថយ (-1) តម្លៃ Counter។

3. **Switch Feature:**
   - បន្ថែម \`Switch\` Widget ដែលប្តូរស្ថានភាពបើក/បិទ។
   - បង្ហាញ Text ដែលបង្ហាញស្ថានភាព ("បើក" ឬ "បិទ")។

4. **TextField Feature:**
   - បន្ថែម \`TextField\` ដែលអនុញ្ញាតឱ្យអ្នកប្រើបញ្ចូលអត្ថបទ។
   - បង្ហាញអត្ថបទដែលបញ្ចូលនៅក្នុង \`Text\` Widget។

**ការណែនាំ:** ប្រើ \`setState\` ដើម្បីធ្វើឱ្យ UI ផ្លាស់ប្តូរទៅតាម State។ សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីពិនិត្យ State Changes។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';

class StateManagementApp extends StatefulWidget {
  @override
  _StateManagementAppState createState() => _StateManagementAppState();
}

class _StateManagementAppState extends State<StateManagementApp> {
  int _counter = 0;
  bool _isSwitched = false;
  String _inputText = '';

  void _incrementCounter() => setState(() => _counter++);
  void _decrementCounter() => setState(() => _counter--);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('State Management Lab')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text('Counter: $_counter', style: TextStyle(fontSize: 20)),
              SizedBox(height: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  FloatingActionButton(
                    onPressed: _incrementCounter,
                    child: Icon(Icons.add),
                  ),
                  SizedBox(width: 10),
                  FloatingActionButton(
                    onPressed: _decrementCounter,
                    child: Icon(Icons.remove),
                  ),
                ],
              ),
              SizedBox(height: 20),
              Switch(
                value: _isSwitched,
                onChanged: (value) => setState(() => _isSwitched = value),
              ),
              Text(_isSwitched ? 'បើក' : 'បិទ', style: TextStyle(fontSize: 20)),
              SizedBox(height: 20),
              TextField(
                onChanged: (value) => setState(() => _inputText = value),
                decoration: InputDecoration(
                  labelText: 'បញ្ចូលអត្ថបទ',
                  border: OutlineInputBorder(),
                ),
              ),
              SizedBox(height: 10),
              Text('អត្ថបទ: $_inputText', style: TextStyle(fontSize: 20)),
            ],
          ),
        ),
      ),
    );
  }
}

void main() => runApp(StateManagementApp());
\`\`\`
`
  },
};

export default FlutterLesson3_1Content;
