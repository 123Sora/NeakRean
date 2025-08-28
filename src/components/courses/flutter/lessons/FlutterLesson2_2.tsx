import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson2_2Content: LessonContent = {
  title: 'Stateful Widgets',
  objectives: [
    'យល់ដឹងអំពីអ្វីទៅជា Stateful Widgets និងតួនាទីរបស់វា',
    'ស្វែងយល់ពីរបៀបបង្កើត Stateful Widgets និងគ្រប់គ្រង State',
    'រៀនប្រើ `setState` ដើម្បីធ្វើការផ្លាស់ប្តូរ UI',
    'ស្គាល់ Lifecycle នៃ Stateful Widgets (initState, dispose)',
    'អនុវត្តន៍ការបង្កើត UI ដែលផ្លាស់ប្តូរ ដូចជា Counter App'
  ],
  content: `
# Stateful Widgets 🔄🛠️

---

**Stateful Widgets** គឺជា Widgets ដែលអាចផ្លាស់ប្តូរ State (ស្ថានភាព) ក្នុងពេលដំណើរការ។ វាត្រូវបានប្រើសម្រាប់បង្កើត UI ដែលមានភាព Dynamic ដូចជាការផ្លាស់ប្តូរដោយផ្អែកលើការបញ្ចូលពីអ្នកប្រើប្រាស់។ Stateful Widgets មាន State Class ដែលគ្រប់គ្រងការផ្លាស់ប្តូរ។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបបង្កើត និងគ្រប់គ្រង Stateful Widgets។

---

## 1. អ្វីទៅជា Stateful Widgets?

Stateful Widgets គឺជា Widgets ដែលមាន State ខាងក្នុងដែលអាចផ្លាស់ប្តូរ។ នៅពេល State ផ្លាស់ប្តូរ Flutter នឹង Rebuild Widget Tree ដើម្បីបង្ហាញការផ្លាស់ប្តូរ។ លក្ខណៈពិសេស៖
- **Mutable State:** មាន State Class ដែលរក្សាទុកទិន្នន័យដែលផ្លាស់ប្តូរ។
- **setState:** Method ដើម្បីធ្វើការផ្លាស់ប្តូរ State និង Rebuild UI។
- **Lifecycle Methods:** \`initState\` (ក្នុងពេលចាប់ផ្តើម), \`dispose\` (ក្នុងពេលបញ្ចប់)។
- **Examples:** \`TextField\`, \`Checkbox\`, \`Counter\`។
- **Usage:** ប្រើសម្រាប់ UI ដែលត្រូវការការផ្លាស់ប្តូរ ដូចជា Forms, Counters, ឬ Animations។

Stateful Widgets គឺសំខាន់សម្រាប់កម្មវិធីដែលមាន Interaction។

---

## 2. របៀបបង្កើត Stateful Widgets

ដើម្បីបង្កើត Stateful Widget ត្រូវបន្តពី \`StatefulWidget\` និងបង្កើត State Class ដែល Override \`createState\`។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

class CounterWidget extends StatefulWidget {
  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _count = 0;

  void _increment() {
    setState(() {
      _count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('ចំនួន: $_count'),
        ElevatedButton(
          onPressed: _increment,
          child: Text('បន្ថែម'),
        ),
      ],
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      body: Center(child: CounterWidget()),
    ),
  ));
}
\`\`\`

**ពន្យល់:** \`_count\` គឺជា State ដែលផ្លាស់ប្តូរដោយ \`setState\` នៅពេលចុច Button។

---

## 3. ការគ្រប់គ្រង State ជាមួយ setState

\`setState\` គឺជា Method ដែលប្រាប់ Flutter ថា State បានផ្លាស់ប្តូរ និងត្រូវ Rebuild Widget។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
class ToggleWidget extends StatefulWidget {
  @override
  _ToggleWidgetState createState() => _ToggleWidgetState();
}

class _ToggleWidgetState extends State<ToggleWidget> {
  bool _isOn = false;

  void _toggle() {
    setState(() {
      _isOn = !_isOn;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(_isOn ? 'បើក' : 'បិទ'),
        ElevatedButton(
          onPressed: _toggle,
          child: Text('ប្តូរ'),
        ),
      ],
    );
  }
}
\`\`\`

**លទ្ធផល:** បង្ហាញ "បើក" ឬ "បិទ" ដោយផ្លាស់ប្តូរនៅពេលចុច Button។

---

## 4. Lifecycle នៃ Stateful Widgets

Stateful Widgets មាន Lifecycle Methods សំខាន់ៗ៖
- **initState:** ហៅនៅពេល Widget ត្រូវបានបង្កើតដំបូង ប្រើសម្រាប់ការចាប់ផ្តើម (Initialization)។
- **didUpdateWidget:** ហៅនៅពេល Parent Widget ផ្លាស់ប្តូរ។
- **dispose:** ហៅនៅពេល Widget ត្រូវបានដកចេញ ប្រើសម្រាប់ការសម្អាត (Cleanup)។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
class LifecycleWidget extends StatefulWidget {
  @override
  _LifecycleWidgetState createState() => _LifecycleWidgetState();
}

class _LifecycleWidgetState extends State<LifecycleWidget> {
  @override
  void initState() {
    super.initState();
    print('initState: ចាប់ផ្តើម');
  }

  @override
  void dispose() {
    print('dispose: បញ្ចប់');
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Text('Lifecycle Demo');
  }
}
\`\`\`

**ពន្យល់:** បង្ហាញ Logs នៅពេលចាប់ផ្តើម និងបញ្ចប់ Widget។

---

## 5. ការប្រៀបធៀប Stateless និង Stateful Widgets

| ប្រភេទ Widget    | ការផ្លាស់ប្តូរ State | Lifecycle Methods    | ឧទាហរណ៍              | គុណវិបត្តិ            |
| :----------------- | :------------------- | :------------------- | :-------------------- | :-------------------- |
| **Stateless**      | មិនអាច              | គ្មាន                | Text, Container       | មិនអាចផ្លាស់ប្តូរ UI  |
| **Stateful**       | អាច                  | initState, dispose    | Counter, Form         | ស្មុគស្មាញជាង        |

ប្រើ Stateful Widgets នៅពេលត្រូវការការផ្លាស់ប្តូរ។

---

## 6. ការបង្កើត Counter App ដោយប្រើ Stateful Widgets

ឧទាហរណ៍នៃ Counter App ដែលប្រើ Stateful Widget ដើម្បីគ្រប់គ្រងចំនួន។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

class CounterApp extends StatefulWidget {
  @override
  _CounterAppState createState() => _CounterAppState();
}

class _CounterAppState extends State<CounterApp> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  void _decrementCounter() {
    setState(() {
      if (_counter > 0) _counter--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Counter App')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('ចំនួន: $_counter', style: TextStyle(fontSize: 24)),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(onPressed: _decrementCounter, child: Text('-')),
                SizedBox(width: 20),
                ElevatedButton(onPressed: _incrementCounter, child: Text('+')),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

void main() {
  runApp(MaterialApp(home: CounterApp()));
}
\`\`\`

**លទ្ធផល:** បង្ហាញចំនួន និង Button ដើម្បីបន្ថែម/ដក។

---

## 7. គន្លឹះក្នុងការប្រើ Stateful Widgets

- ប្រើ \`setState\` តែនៅពេលចាំបាច់ដើម្បីជៀសវាង Rebuild ច្រើនដង។
- សម្អាត Resources នៅក្នុង \`dispose\` ដូចជា Subscriptions ឬ Controllers។
- ប្រើ Stateful Widgets សម្រាប់ Local State និង State Management Tools (ដូចជា Provider) សម្រាប់ Global State។
- ពិនិត្យ Widget Tree ដើម្បីធានាថា State ត្រូវបានគ្រប់គ្រងត្រឹមត្រូវ។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ បង្កើត Stateful Widget សម្រាប់ Counter</h3>
<p>បង្កើត Counter ដែលផ្លាស់ប្តូរដោយ Button។</p>
<pre><code class="language-dart">
class SimpleCounter extends StatefulWidget {
  @override
  _SimpleCounterState createState() => _SimpleCounterState();
}
class _SimpleCounterState extends State<SimpleCounter> {
  int _count = 0;
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('$_count'),
        ElevatedButton(onPressed: () => setState(() => _count++), child: Text('បន្ថែម')),
      ],
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ប្រើ initState និង dispose</h3>
<p>បង្កើត Widget ដែលប្រើ Lifecycle។</p>
<pre><code class="language-dart">
class TimerWidget extends StatefulWidget {
  @override
  _TimerWidgetState createState() => _TimerWidgetState();
}
class _TimerWidgetState extends State<TimerWidget> {
  @override
  void initState() {
    super.initState();
    print('ចាប់ផ្តើម Timer');
  }
  @override
  void dispose() {
    print('បញ្ចប់ Timer');
    super.dispose();
  }
  @override
  Widget build(BuildContext context) {
    return Text('Timer Demo');
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត Toggle Switch</h3>
<p>បង្កើត Switch ដែលផ្លាស់ប្តូរ State។</p>
<pre><code class="language-dart">
class SwitchWidget extends StatefulWidget {
  @override
  _SwitchWidgetState createState() => _SwitchWidgetState();
}
class _SwitchWidgetState extends State<SwitchWidget> {
  bool _isSwitched = false;
  @override
  Widget build(BuildContext context) {
    return Switch(
      value: _isSwitched,
      onChanged: (value) => setState(() => _isSwitched = value),
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ បង្កើត TextField ជាមួយ State</h3>
<p>បង្កើត TextField ដែលរក្សាទុក Input។</p>
<pre><code class="language-dart">
class InputWidget extends StatefulWidget {
  @override
  _InputWidgetState createState() => _InputWidgetState();
}
class _InputWidgetState extends State<InputWidget> {
  TextEditingController _controller = TextEditingController();
  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
  @override
  Widget build(BuildContext context) {
    return TextField(controller: _controller);
  }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Stateful Widgets គឺជាអ្វី?',
      options: [
        'Widgets ដែលមិនផ្លាស់ប្តូរ State',
        'Widgets ដែលផ្លាស់ប្តូរ State',
        'Widgets សម្រាប់ Layout',
        'Widgets សម្រាប់ Text'
      ],
      correct: 1,
      explanation: 'Stateful Widgets មាន State ដែលផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ Method ណាដែលប្រើដើម្បីផ្លាស់ប្តូរ State?',
      options: ['build', 'initState', 'setState', 'dispose'],
      correct: 2,
      explanation: '`setState` ផ្លាស់ប្តូរ State និង Rebuild UI។'
    },
    {
      question: 'តើ Lifecycle Method ណាដែលហៅនៅពេលចាប់ផ្តើម?',
      options: ['dispose', 'initState', 'build', 'setState'],
      correct: 1,
      explanation: '`initState` ហៅនៅពេល Widget ចាប់ផ្តើម។'
    },
    {
      question: 'តើអ្វីជាគុណវិបត្តិនៃ Stateful Widgets?',
      options: [
        'សាមញ្ញ',
        'ស្មុគស្មាញជាង Stateless',
        'មិនអាចផ្លាស់ប្តូរ UI',
        'Performance យឺតជាង'
      ],
      correct: 1,
      explanation: 'Stateful Widgets ស្មុគស្មាញជាងដោយសារតែមាន State។'
    },
    {
      question: 'តើ State Class មានតួនាទីអ្វី?',
      options: [
        'បង្កើត Widget',
        'គ្រប់គ្រង State និង Lifecycle',
        'កំណត់ Properties',
        'បង្កើត Lists'
      ],
      correct: 1,
      explanation: 'State Class គ្រប់គ្រង State និង Lifecycle Methods។'
    },
    {
      question: 'តើ `dispose` ហៅនៅពេលណា?',
      options: [
        'នៅពេលចាប់ផ្តើម',
        'នៅពេលបញ្ចប់ Widget',
        'នៅពេល Rebuild',
        'នៅពេលផ្លាស់ប្តូរ State'
      ],
      correct: 1,
      explanation: '`dispose` ហៅនៅពេល Widget ត្រូវបានដកចេញ។'
    },
    {
      question: 'តើ Stateful Widgets គួរប្រើនៅពេលណា?',
      options: [
        'នៅពេល UI ឋិតថេរ',
        'នៅពេល UI ផ្លាស់ប្តូរ',
        'នៅពេលគ្រប់គ្រង Database',
        'នៅពេលសរសេរ Text'
      ],
      correct: 1,
      explanation: 'ប្រើសម្រាប់ UI ដែលផ្លាស់ប្តូរ ដូចជា Counters។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដដែលប្រើ `setState` ដើម្បីបន្ថែមចំនួន?',
      options: [
        'Error',
        'UI មិនផ្លាស់ប្តូរ',
        'UI ផ្លាស់ប្តូរ',
        'State បាត់បង់'
      ],
      correct: 2,
      explanation: '`setState` ធ្វើឱ្យ UI Rebuild ជាមួយ State ថ្មី។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នារវាង Stateless និង Stateful?',
      options: [
        'Stateless មាន State, Stateful គ្មាន',
        'Stateless គ្មាន State, Stateful មាន',
        'ទាំងពីរមាន State',
        'ទាំងពីរគ្មាន State'
      ],
      correct: 1,
      explanation: 'Stateless គ្មាន State, Stateful មាន State ដែលផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ `createState` មានតួនាទីអ្វី?',
      options: [
        'បង្កើត Widget Tree',
        'ត្រឡប់ State Class',
        'ផ្លាស់ប្តូរ State',
        'សម្អាត Resources'
      ],
      correct: 1,
      explanation: '`createState` ត្រឡប់ State Class សម្រាប់ Stateful Widget។'
    },
    {
      question: 'តើអ្វីជាឧទាហរណ៍នៃ Stateful Widget?',
      options: [
        'Text',
        'Container',
        'Counter',
        'Row'
      ],
      correct: 2,
      explanation: 'Counter គឺជាឧទាហរណ៍នៃ Stateful Widget ព្រោះវាផ្លាស់ប្តូរ State។'
    },
    {
      question: 'តើអ្វីជា Lifecycle Method សម្រាប់ការសម្អាត?',
      options: ['initState', 'build', 'dispose', 'setState'],
      correct: 2,
      explanation: '`dispose` ប្រើសម្រាប់ការសម្អាត Resources។'
    },
    {
      question: 'តើ Stateful Widgets អាចបង្កើត Custom Widgets បានដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'តែនៅក្នុង Stateless', 'តែនៅក្នុង AppBar'],
      correct: 0,
      explanation: 'អាចបង្កើត Custom Stateful Widgets ដើម្បីគ្រប់គ្រង State។'
    },
    {
      question: 'តើអ្វីជាគុណសម្បត្តិនៃ Stateful Widgets?',
      options: [
        'មិនអាចផ្លាស់ប្តូរ UI',
        'អាចផ្លាស់ប្តូរ UI ដោយផ្អែកលើ State',
        'Performance យឺតជាង',
        'សាមញ្ញជាង Stateless'
      ],
      correct: 1,
      explanation: 'អាចផ្លាស់ប្តូរ UI ដោយផ្អែកលើ State ដែលផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលបើមិនប្រើ `setState` នៅពេលផ្លាស់ប្តូរ Variable?',
      options: [
        'UI ផ្លាស់ប្តូរ',
        'UI មិនផ្លាស់ប្តូរ',
        'Error',
        'App បិទ'
      ],
      correct: 1,
      explanation: 'បើមិនប្រើ `setState` UI នឹងមិន Rebuild ទេ។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ Stateful Widgets ដើម្បីបង្កើត Counter App ដែលផ្លាស់ប្តូរ។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateful Widget មួយឈ្មោះ \`CounterPage\` ដែលមាន \`Scaffold\`។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Stateful Widgets Lab"។

2. **Main Content:**
   - បង្កើត State ដែលរក្សាទុកចំនួន (int _counter = 0)។
   - បង្ហាញ \`Text\` នៅកណ្តាលដែលបង្ហាញ "ចំនួន: $_counter" ជាមួយ \`fontSize: 24\`។
   - បន្ថែម Row ដែលមាន Button ពីរ៖ "+" ដើម្បីបន្ថែម និង "-" ដើម្បីដក (មិនឱ្យតិចជាង 0)។
   - ប្រើ \`setState\` ដើម្បីផ្លាស់ប្តូរ _counter។

3. **Lifecycle:**
   - បន្ថែម \`initState\` ដើម្បី Print "Counter ចាប់ផ្តើម"។
   - បន្ថែម \`dispose\` ដើម្បី Print "Counter បញ្ចប់"។

**ការណែនាំ:** សាកល្បង App និងពិនិត្យ Logs សម្រាប់ Lifecycle។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';

class CounterPage extends StatefulWidget {
  @override
  _CounterPageState createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int _counter = 0;

  @override
  void initState() {
    super.initState();
    print('Counter ចាប់ផ្តើម');
  }

  @override
  void dispose() {
    print('Counter បញ្ចប់');
    super.dispose();
  }

  void _increment() {
    setState(() {
      _counter++;
    });
  }

  void _decrement() {
    setState(() {
      if (_counter > 0) _counter--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Stateful Widgets Lab'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'ចំនួន: $_counter',
              style: TextStyle(fontSize: 24),
            ),
            SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(onPressed: _decrement, child: Text('-')),
                SizedBox(width: 20),
                ElevatedButton(onPressed: _increment, child: Text('+')),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

void main() {
  runApp(MaterialApp(home: CounterPage()));
}
\`\`\`
`
  }
};

export default FlutterLesson2_2Content;