import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson10_2Content: LessonContent = {
  title: 'ការប្រើ Widget Testing ក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Widget Testing ក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបប្រើ Package `flutter_test` សម្រាប់ Widget Testing',
    'រៀនសរសេរករណីសាកល្បង (Test Cases) សម្រាប់ Widgets',
    'អនុវត្តន៍ការបង្កើត Widget Tests សម្រាប់ Flutter App',
    'ស្គាល់ការប្រើ Finder និង Matcher ដើម្បីសាកល្បង UI',
    'យល់ពីការគ្រប់គ្រង Asynchronous Operations នៅក្នុង Widget Tests',
    'រៀនបច្ចេកទេស Debugging នៅពេលសរសេរការសាកល្បង',
    'ស្វែងយល់ពីការប្រើ Flutter DevTools ដើម្បីវិភាគ Test Results'
  ],
  content: `
# ការប្រើ Widget Testing ក្នុង Flutter 🖼️

---

**Widget Testing** គឺជាវិធីសាស្ត្រសាកល្បងដែលផ្តោតលើការសាកល្បង Widgets នៅក្នុង Flutter App ដើម្បីធានាថា UI ដំណើរការត្រឹមត្រូវ។ នៅក្នុងមេរៀននេះ យើងនឹងប្រើ Package \`flutter_test\` ដើម្បីសរសេរករណីសាកល្បងសម្រាប់ Widgets។

---

## 1. អ្វីទៅជា Widget Testing?

**Widget Testing** គឺជាការសាកល្បង Widgets ដែល៖
- ពិនិត្យ UI Elements ដូចជា \`Text\`, \`Button\`, ឬ \`TextField\`។
- ធ្វើការជាមួយ Interactions ដូចជា Taps ឬ Text Input។
- ប្រើ \`flutter_test\` Package ដើម្បី Render Widgets នៅក្នុង Test Environment។

---

## 2. ការដំឡើង Widget Testing

### 2.1 Package
Package \`flutter_test\` ត្រូវបានរួមបញ្ចូលដោយស្វ័យប្រវត្តិនៅក្នុង Flutter SDK។ មិនចាំបាច់បន្ថែមទៅ \`pubspec.yaml\` ទេ។

### 2.2 បង្កើត Test Folder
- បង្កើត Folder \`test\` នៅក្នុង Project Root។
- បង្កើត Test Files ដែលមានឈ្មោះបញ្ចប់ដោយ \`_test.dart\` (ឧទាហរណ៍ \`counter_app_test.dart\`)។

---

## 3. ការសរសេរ Widget Tests

**ឧទាហរណ៍កូដ:** សាកល្បង Counter App។

### 3.1 Counter App
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
\`\`\`

### 3.2 Widget Test
\`\`\`dart
// test/counter_app_test.dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:my_app/main.dart';

void main() {
  testWidgets('Counter App should increment counter when button is tapped', (WidgetTester tester) async {
    // Build the app and trigger a frame
    await tester.pumpWidget(const CounterApp());

    // Verify initial counter value
    expect(find.text('Counter: 0'), findsOneWidget);
    expect(find.text('Counter: 1'), findsNothing);

    // Tap the FloatingActionButton
    await tester.tap(find.byIcon(Icons.add));
    await tester.pump();

    // Verify updated counter value
    expect(find.text('Counter: 0'), findsNothing);
    expect(find.text('Counter: 1'), findsOneWidget);
  });
}
\`\`\`

**ការពន្យល់:**
- \`testWidgets\`: កំណត់ Widget Test។
- \`WidgetTester\`: ប្រើដើម្បី Render Widgets និង Interact ជាមួយ UI។
- \`pumpWidget\`: Render Widget នៅក្នុង Test Environment។
- \`find\`: ស្វែងរក Widgets ដោយ Text, Icon, ឬ Type។
- \`expect\`: ពិនិត្យថាតើ Widget មាននៅក្នុង UI។
- \`pump\`: Trigger Frame Update បន្ទាប់ពី Interaction។

### 3.3 ដំណើរការ Tests
- ដំណើរការ Command: \`flutter test\`
- លទ្ធផលនឹងបង្ហាញថាតើ Tests ទាំងអស់ Pass ឬ Fail។

---

## 4. ការប្រើ Finder និង Matcher

- **Finder**: ប្រើ \`find.byType\`, \`find.text\`, \`find.byIcon\` ដើម្បីស្វែងរក Widgets។
- **Matcher**: ប្រើ \`findsOneWidget\`, \`findsNothing\`, \`findsNWidgets\` ដើម្បីពិនិត្យ Widget Count។

**ឧទាហរណ៍:**
\`\`\`dart
expect(find.byType(FloatingActionButton), findsOneWidget);
expect(find.text('Counter: 0'), findsOneWidget);
\`\`\`

---

## 5. ការគ្រប់គ្រង Asynchronous Operations

- ប្រើ \`tester.pump()\` ឬ \`tester.pumpAndSettle()\` សម្រាប់ Asynchronous Updates។
- ប្រើ \`Future\` ឬ \`Stream\` នៅក្នុង Tests សម្រាប់ Asynchronous Widgets។

**ឧទាហរណ៍:**
\`\`\`dart
testWidgets('should handle async update', (WidgetTester tester) async {
  await tester.pumpWidget(const CounterApp());
  await tester.tap(find.byIcon(Icons.add));
  await tester.pumpAndSettle();
  expect(find.text('Counter: 1'), findsOneWidget);
});
\`\`\`

---

## 6. ការបង្កើនប្រសិទ្ធភាព និង Debugging

- **រៀបចំ Tests:** ប្រើ \`testWidgets\` និង \`group\` ដើម្បីរៀបចំករណីសាកល្បង។
- **Debugging:** ប្រើ \`print\` ឬ Flutter DevTools ដើម្បីតាមដាន Errors។
- **ការពារ Code Coverage:** សាកល្បងគ្រប់ Interactions និង States នៃ Widget។
- **ប្រើ Flutter DevTools:** វិភាគ Memory Usage និង Performance នៅពេលសាកល្បង។

---

## 7. ការប្រើ Flutter DevTools

- **Logging:** ប្រើ \`print\` ដើម្បីតាមដាន Test Results។
- **Performance Tab:** វិភាគ Test Execution Time។
- **Widget Inspector:** ពិនិត្យ Widget Tree នៅក្នុង Test Environment�।

**ការបើក DevTools:**
- ដំណើរការ \`flutter test --machine\` ឬបើក DevTools នៅក្នុង IDE។

---

## 8. គន្លឹះសម្រាប់ Widget Testing

- សរសេរ Tests សម្រាប់ Widgets សំខាន់ៗ។
- ប្រើ \`find\` និង \`expect\` ដើម្បីពិនិត្យ UI។
- ប្រើ \`pump\` ឬ \`pumpAndSettle\` សម្រាប់ Asynchronous Updates។
- ប្រើ Flutter DevTools ដើម្បី Debug និងវិភាគ Performance។
- សាកល្បងគ្រប់ Interactions និង States។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការសាកល្បង Text Widget</h3>
<p>សាកល្បងថាតើ Text Widget បង្ហាញតម្លៃត្រឹមត្រូវ។</p>
<pre><code class="language-dart">
testWidgets('should display initial counter value', (WidgetTester tester) async {
  await tester.pumpWidget(const CounterApp());
  expect(find.text('Counter: 0'), findsOneWidget);
});
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការសាកល្បង Button Interaction</h3>
<p>សាកល្បង Interaction ជាមួយ FloatingActionButton�।</p>
<pre><code class="language-dart">
testWidgets('should increment counter when button is tapped', (WidgetTester tester) async {
  await tester.pumpWidget(const CounterApp());
  await tester.tap(find.byIcon(Icons.add));
  await tester.pump();
  expect(find.text('Counter: 1'), findsOneWidget);
});
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការសាកល្បង Asynchronous Update</h3>
<p>សាកល្បង Asynchronous UI Update។</p>
<pre><code class="language-dart">
testWidgets('should handle async update', (WidgetTester tester) async {
  await tester.pumpWidget(const CounterApp());
  await tester.tap(find.byIcon(Icons.add));
  await tester.pumpAndSettle();
  expect(find.text('Counter: 1'), findsOneWidget);
});
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Widget Testing ប្រើសម្រាប់អ្វី?',
      options: [
        'សាកល្បង Functions',
        'សាកល្បង UI Widgets',
        'បង្កើត Animations',
        'ទាញទិន្នន័យពី API'
      ],
      correct: 1,
      explanation: 'Widget Testing ប្រើសម្រាប់សាកល្បង UI Widgets។'
    },
    {
      question: 'តើ Package អ្វីប្រើសម្រាប់ Widget Testing?',
      options: [
        'http',
        'flutter_test',
        'provider',
        'sqflite'
      ],
      correct: 1,
      explanation: '`flutter_test` Package ប្រើសម្រាប់ Widget Testing។'
    },
    {
      question: 'តើ `find.text` នៅក្នុង Widget Testing ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'ស្វែងរក Text Widget',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`find.text` ស្វែងរក Text Widget នៅក្នុង UI។'
    },
    {
      question: 'តើ `pumpWidget` នៅក្នុង Widget Testing ធ្វើអ្វី?',
      options: [
        'បង្កើត Animation',
        'Render Widget នៅក្នុង Test Environment',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`pumpWidget` Render Widget នៅក្នុង Test Environment។'
    },
    {
      question: 'តើ `findsOneWidget` នៅក្នុង Widget Testing ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'ពិនិត្យថាមាន Widget មួយ',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`findsOneWidget` ពិនិត្យថាមាន Widget មួយនៅក្នុង UI។'
    },
    {
      question: 'តើ `tester.tap` នៅក្នុង Widget Testing ធ្វើអ្វី?',
      options: [
        'បង្កើត Animation',
        'Simulate Tap Interaction',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`tester.tap` Simulate Tap Interaction នៅក្នុង UI�।'
    },
    {
      question: 'តើ Command អ្វីប្រើដើម្បីដំណើរការ Widget Tests?',
      options: [
        'flutter run',
        'flutter test',
        'flutter build',
        'flutter clean'
      ],
      correct: 1,
      explanation: '`flutter test` ប្រើដើម្បីដំណើរការ Widget Tests។'
    },
    {
      question: 'តើ Flutter DevTools ជួយអ្វីនៅក្នុង Widget Testing?',
      options: [
        'បង្កើត Widget',
        'វិភាគ Memory Usage និង Performance',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Flutter DevTools វិភាគ Memory Usage, Widget Tree, និង Test Execution Time។'
    },
    {
      question: 'តើ `pumpAndSettle` នៅក្នុង Widget Testing ធ្វើអ្វី?',
      options: [
        'បង្កើត Animation',
        'Trigger Asynchronous UI Updates',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`pumpAndSettle` Trigger Asynchronous UI Updates នៅក្នុង Tests�।'
    },
    {
      question: 'តើការប្រើ `print` នៅក្នុង Widget Testing ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'Debug Test Results',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`print` ជួយ Debug Test Results។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលមាន Widget Tests សម្រាប់ Counter App។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`CounterApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`CounterScreen\` ដែលបង្ហាញ Counter និង FloatingActionButton។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Counter App"។

2. **Widget Testing Setup:**
   - បង្កើត \`test/counter_app_test.dart\` សម្រាប់ Widget Tests។
   - ប្រើ \`flutter_test\` Package។

3. **Test Cases:**
   - សរសេរ Test ដើម្បីពិនិត្យ Initial Counter Value។
   - សរសេរ Test ដើម្បីពិនិត្យ Counter Increment បន្ទាប់ពី Tap FloatingActionButton។
   - សរសេរ Test ដើម្បីពិនិត្យថាតើ FloatingActionButton មាននៅក្នុង UI។

4. **Performance Optimization:**
   - ប្រើ \`find\` និង \`expect\` ដើម្បីពិនិត្យ UI។
   - ប្រើ \`pump\` ឬ \`pumpAndSettle\` សម្រាប់ UI Updates។
   - ប្រើ \`print\` ដើម្បី Debug ប្រសិនបើ Tests មិន Pass។

5. **Performance Testing:**
   - ប្រើ \`flutter test\` ដើម្បីដំណើរការ Tests។
   - ប្រើ Flutter DevTools ដើម្បីវិភាគ Widget Tree និង Test Execution Time

**ការណែនាំ:** សាកល្បង App និង Tests នៅលើ Emulator និងឧបករណ៍ពិត និងប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។
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

// test/counter_app_test.dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:my_app/main.dart';

void main() {
  testWidgets('Counter App should display initial counter value', (WidgetTester tester) async {
    await tester.pumpWidget(const CounterApp());
    expect(find.text('Counter: 0'), findsOneWidget);
    expect(find.text('Counter: 1'), findsNothing);
  });

  testWidgets('Counter App should increment counter when button is tapped', (WidgetTester tester) async {
    await tester.pumpWidget(const CounterApp());
    await tester.tap(find.byIcon(Icons.add));
    await tester.pump();
    expect(find.text('Counter: 0'), findsNothing);
    expect(find.text('Counter: 1'), findsOneWidget);
  });

  testWidgets('Counter App should have FloatingActionButton', (WidgetTester tester) async {
    await tester.pumpWidget(const CounterApp());
    expect(find.byType(FloatingActionButton), findsOneWidget);
  });
}
\`\`\`
`
  }
};

export default FlutterLesson10_2Content;