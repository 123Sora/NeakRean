import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson10_3Content: LessonContent = {
  title: 'ការប្រើ Integration Testing ក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Integration Testing ក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបប្រើ Package `integration_test` សម្រាប់ Integration Testing',
    'រៀនសរសេរករណីសាកល្បង (Test Cases) សម្រាប់ App Flow និង Interactions',
    'អនុវត្តន៍ការបង្កើត Integration Tests សម្រាប់ Flutter App',
    'ស្គាល់ការប្រើ Driver និង WidgetTester ដើម្បីសាកល្បង UI Interactions',
    'យល់ពីការគ្រប់គ្រង Asynchronous Operations នៅក្នុង Integration Tests',
    'រៀនបច្ចេកទេស Debugging នៅពេលសរសេរការសាកល្បង',
    'ស្វែងយល់ពីការប្រើ Flutter DevTools ដើម្បីវិភាគ Test Results'
  ],
  content: `
# ការប្រើ Integration Testing ក្នុង Flutter 🚀

---

**Integration Testing** គឺជាវិធីសាស្ត្រសាកល្បងដែលផ្តោតលើការសាកល្បង App ទាំងមូល ឬផ្នែកសំខាន់ៗរបស់វា ដើម្បីធានាថាសមាសធាតុផ្សេងៗ (UI, Logic, Services) ដំណើរការរួមគ្នាបានត្រឹមត្រូវ។ នៅក្នុងមេរៀននេះ យើងនឹងប្រើ Package \`integration_test\` ដើម្បីសរសេរករណីសាកល្បងសម្រាប់ Flutter App។

---

## 1. អ្វីទៅជា Integration Testing?

**Integration Testing** គឺជាការសាកល្បងដែល៖
- ពិនិត្យ App Flow ទាំងមូល ឬផ្នែកសំខាន់ៗ។
- ធ្វើការជាមួយ UI Interactions ដូចជា Taps, Text Input, និង Navigation។
- ដំណើរការនៅលើ Emulator ឬឧបករណ៍ពិត ដើម្បី Simulate User Behavior។
- ប្រើ \`integration_test\` Package ដើម្បីធ្វើការជាមួយ Flutter Driver និង WidgetTester។

---

## 2. ការដំឡើង Integration Testing

### 2.1 បន្ថែម Package
បន្ថែម \`integration_test\` Package ទៅ \`pubspec.yaml\`:

\`\`\`yaml
dev_dependencies:
  flutter_test:
    sdk: flutter
  integration_test:
    sdk: flutter
\`\`\`

ដំណើរការ Command: \`flutter pub get\`

### 2.2 បង្កើត Test Folder
- បង្កើត Folder \`integration_test\` នៅក្នុង Project Root។
- បង្កើត Test Files ដែលមានឈ្មោះបញ្ចប់ដោយ \`_test.dart\` (ឧទាហរណ៍ \`app_test.dart\`)។

### 2.3 កំណត់ Driver
- បន្ថែម \`test_driver\` Folder នៅក្នុង Project Root។
- បង្កើត File \`test_driver/integration_driver.dart\`:

\`\`\`dart
import 'package:integration_test/integration_test_driver.dart';

Future<void> main() => integrationDriver();
\`\`\`

---

## 3. ការសរសេរ Integration Tests

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
        child: Text('Counter: $_counter', style: const TextStyle(fontSize: 24), key: const Key('counterText')),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        child: const Icon(Icons.add),
        key: const Key('incrementButton'),
      ),
    );
  }
}
\`\`\`

### 3.2 Integration Test
\`\`\`dart
// integration_test/app_test.dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:my_app/main.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('Counter App should increment counter when button is tapped', (WidgetTester tester) async {
    // Build the app
    await tester.pumpWidget(const CounterApp());

    // Verify initial counter value
    expect(find.byKey(const Key('counterText')), findsOneWidget);
    expect(find.text('Counter: 0'), findsOneWidget);
    expect(find.text('Counter: 1'), findsNothing);

    // Tap the FloatingActionButton
    await tester.tap(find.byKey(const Key('incrementButton')));
    await tester.pumpAndSettle();

    // Verify updated counter value
    expect(find.text('Counter: 0'), findsNothing);
    expect(find.text('Counter: 1'), findsOneWidget);
  });
}
\`\`\`

**ការពន្យល់:**
- \`IntegrationTestWidgetsFlutterBinding\`: ចាប់ផ្តើម Integration Test Environment។
- \`testWidgets\`: កំណត់ Integration Test។
- \`WidgetTester\`: ប្រើដើម្បី Render Widgets និង Interact ជាមួយ UI។
- \`pumpWidget\`: Render Widget នៅក្នុង Test Environment។
- \`find.byKey\`: ស្វែងរក Widgets ដោយ Key។
- \`expect\`: ពិនិត្យថាតើ Widget មាននៅក្នុង UI។
- \`pumpAndSettle\`: Trigger Frame Update និងរង់ចាំ Asynchronous Operations។

### 3.3 ដំណើរការ Tests
- ដំណើរការ Command សម្រាប់ Emulator ឬឧបករណ៍:
  \`\`\`bash
  flutter test integration_test/app_test.dart
  \`\`\`
- សម្រាប់ Advanced Integration Testing:
  \`\`\`bash
  flutter drive --driver=test_driver/integration_driver.dart --target=integration_test/app_test.dart
  \`\`\`

---

## 4. ការប្រើ Finder និង Matcher

- **Finder**: ប្រើ \`find.byKey\`, \`find.text\`, \`find.byType\` ដើម្បីស្វែងរក Widgets។
- **Matcher**: ប្រើ \`findsOneWidget\`, \`findsNothing\`, \`findsNWidgets\` ដើម្បីពិនិត្យ Widget Count។

**ឧទាហរណ៍:**
\`\`\`dart
expect(find.byKey(const Key('counterText')), findsOneWidget);
expect(find.text('Counter: 0'), findsOneWidget);
\`\`\`

---

## 5. ការគ្រប់គ្រង Asynchronous Operations

- ប្រើ \`tester.pumpAndSettle()\` សម្រាប់ Asynchronous UI Updates។
- ប្រើ \`Future\` ឬ \`Stream\` នៅក្នុង Tests សម្រាប់ Asynchronous Behavior។

**ឧទាហរណ៍:**
\`\`\`dart
testWidgets('should handle async update', (WidgetTester tester) async {
  await tester.pumpWidget(const CounterApp());
  await tester.tap(find.byKey(const Key('incrementButton')));
  await tester.pumpAndSettle();
  expect(find.text('Counter: 1'), findsOneWidget);
});
\`\`\`

---

## 6. ការបង្កើនប្រសិទ្ធភាព និង Debugging

- **រៀបចំ Tests:** ប្រើ \`testWidgets\` និង Keys ដើម្បីសម្គាល់ Widgets។
- **Debugging:** ប្រើ \`print\` ឬ Flutter DevTools ដើម្បីតាមដាន Errors។
- **ការពារ Code Coverage:** សាកល្បងគ្រប់ App Flows និង Interactions។
- **ប្រើ Flutter DevTools:** វិភាគ Memory Usage និង Performance នៅពេលសាកល្បង។

---

## 7. ការប្រើ Flutter DevTools

- **Logging:** ប្រើ \`print\` ដើម្បីតាមដាន Test Results។
- **Performance Tab:** វិភាគ Test Execution Time។
- **Widget Inspector:** ពិនិត្យ Widget Tree នៅក្នុង Test Environment។

**ការបើក DevTools:**
- ដំណើរការ \`flutter test --machine\` ឬបើក DevTools នៅក្នុង IDE។

---

## 8. គន្លឹះសម្រាប់ Integration Testing

- សរសេរ Tests សម្រាប់ App Flows សំខាន់ៗ។
- ប្រើ \`find.byKey\` ដើម្បីសម្គាល់ Widgets យ៉ាងច្បាស់។
- ប្រើ \`pumpAndSettle\` សម្រាប់ Asynchronous Updates។
- ប្រើ Flutter DevTools ដើម្បី Debug និងវិភាគ Performance។
- សាកល្បងនៅលើ Emulator និងឧបករណ៍ពិត។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការសាកល្បង Initial Counter Value</h3>
<p>សាកល្បងថាតើ Counter App បង្ហាញតម្លៃដំបូងត្រឹមត្រូវ។</p>
<pre><code class="language-dart">
testWidgets('should display initial counter value', (WidgetTester tester) async {
  await tester.pumpWidget(const CounterApp());
  expect(find.byKey(const Key('counterText')), findsOneWidget);
  expect(find.text('Counter: 0'), findsOneWidget);
});
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការសាកល្បង Button Interaction</h3>
<p>សាកល្បង Interaction ជាមួយ FloatingActionButton។</p>
<pre><code class="language-dart">
testWidgets('should increment counter when button is tapped', (WidgetTester tester) async {
  await tester.pumpWidget(const CounterApp());
  await tester.tap(find.byKey(const Key('incrementButton')));
  await tester.pumpAndSettle();
  expect(find.text('Counter: 1'), findsOneWidget);
});
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការសាកល្បង Asynchronous Update</h3>
<p>សាកល្បង Asynchronous UI Update។</p>
<pre><code class="language-dart">
testWidgets('should handle async update', (WidgetTester tester) async {
  await tester.pumpWidget(const CounterApp());
  await tester.tap(find.byKey(const Key('incrementButton')));
  await tester.pumpAndSettle();
  expect(find.text('Counter: 1'), findsOneWidget);
});
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Integration Testing ប្រើសម្រាប់អ្វី?',
      options: [
        'សាកល្បង Functions',
        'សាកល្បង App Flow ទាំងមូល',
        'បង្កើត Animations',
        'ទាញទិន្នន័យពី API'
      ],
      correct: 1,
      explanation: 'Integration Testing ប្រើសម្រាប់សាកល្បង App Flow ទាំងមូល។'
    },
    {
      question: 'តើ Package អ្វីប្រើសម្រាប់ Integration Testing?',
      options: [
        'http',
        'integration_test',
        'provider',
        'sqflite'
      ],
      correct: 1,
      explanation: '`integration_test` Package ប្រើសម្រាប់ Integration Testing។'
    },
    {
      question: 'តើ `find.byKey` នៅក្នុង Integration Testing ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'ស្វែងរក Widget ដោយ Key',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`find.byKey` ស្វែងរក Widget ដោយ Key នៅក្នុង UI។'
    },
    {
      question: 'តើ `pumpAndSettle` នៅក្នុង Integration Testing ធ្វើអ្វី?',
      options: [
        'បង្កើត Animation',
        'Trigger Asynchronous UI Updates',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`pumpAndSettle` Trigger Asynchronous UI Updates នៅក្នុង Tests។'
    },
    {
      question: 'តើ `IntegrationTestWidgetsFlutterBinding` ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'ចាប់ផ្តើម Integration Test Environment',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`IntegrationTestWidgetsFlutterBinding` ចាប់ផ្តើម Integration Test Environment។'
    },
    {
      question: 'តើ Command អ្វីប្រើដើម្បីដំណើរការ Integration Tests?',
      options: [
        'flutter run',
        'flutter test',
        'flutter build',
        'flutter clean'
      ],
      correct: 1,
      explanation: '`flutter test` ប្រើដើម្បីដំណើរការ Integration Tests។'
    },
    {
      question: 'តើ Flutter DevTools ជួយអ្វីនៅក្នុង Integration Testing?',
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
      question: 'តើ `tester.tap` នៅក្នុង Integration Testing ធ្វើអ្វី?',
      options: [
        'បង្កើត Animation',
        'Simulate Tap Interaction',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`tester.tap` Simulate Tap Interaction នៅក្នុង UI។'
    },
    {
      question: 'តើ `findsOneWidget` នៅក្នុង Integration Testing ធ្វើអ្វី?',
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
      question: 'តើការប្រើ `print` នៅក្នុង Integration Testing ជួយអ្វី?',
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
បង្កើត Flutter App ដែលមាន Integration Tests សម្រាប់ Counter App។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`CounterApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`CounterScreen\` ដែលបង្ហាញ Counter និង FloatingActionButton។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Counter App"។
   - បន្ថែម \`Key\` ទៅ \`Text\` Widget និង \`FloatingActionButton\`។

2. **Integration Testing Setup:**
   - បន្ថែម \`integration_test\` Package ទៅ \`pubspec.yaml\`។
   - បង្កើត \`integration_test/app_test.dart\` សម្រាប់ Integration Tests។
   - បង្កើត \`test_driver/integration_driver.dart\` សម្រាប់ Driver។

3. **Test Cases:**
   - សរសេរ Test ដើម្បីពិនិត្យ Initial Counter Value។
   - សរសេរ Test ដើម្បីពិនិត្យ Counter Increment បន្ទាប់ពី Tap FloatingActionButton។
   - សរសេរ Test ដើម្បីពិនិត្យថាតើ FloatingActionButton មាននៅក្នុង UI។

4. **Performance Optimization:**
   - ប្រើ \`find.byKey\` និង \`expect\` ដើម្បីពិនិត្យ UI។
   - ប្រើ \`pumpAndSettle\` សម្រាប់ UI Updates។
   - ប្រើ \`print\` ដើម្បី Debug ប្រសិនបើ Tests មិន Pass។

5. **Performance Testing:**
   - ប្រើ \`flutter test integration_test/app_test.dart\` ឬ \`flutter drive\` ដើម្បីដំណើរការ Tests។
   - ប្រើ Flutter DevTools ដើម្បីវិភាគ Widget Tree និង Test Execution Time។

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
        child: Text('Counter: $_counter', style: const TextStyle(fontSize: 24), key: const Key('counterText')),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        child: const Icon(Icons.add),
        key: const Key('incrementButton'),
      ),
    );
  }
}

// test_driver/integration_driver.dart
import 'package:integration_test/integration_test_driver.dart';

Future<void> main() => integrationDriver();

// integration_test/app_test.dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:my_app/main.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('Counter App should display initial counter value', (WidgetTester tester) async {
    await tester.pumpWidget(const CounterApp());
    expect(find.byKey(const Key('counterText')), findsOneWidget);
    expect(find.text('Counter: 0'), findsOneWidget);
    expect(find.text('Counter: 1'), findsNothing);
  });

  testWidgets('Counter App should increment counter when button is tapped', (WidgetTester tester) async {
    await tester.pumpWidget(const CounterApp());
    await tester.tap(find.byKey(const Key('incrementButton')));
    await tester.pumpAndSettle();
    expect(find.text('Counter: 0'), findsNothing);
    expect(find.text('Counter: 1'), findsOneWidget);
  });

  testWidgets('Counter App should have FloatingActionButton', (WidgetTester tester) async {
    await tester.pumpWidget(const CounterApp());
    expect(find.byKey(const Key('incrementButton')), findsOneWidget);
    expect(find.byType(FloatingActionButton), findsOneWidget);
  });
}
\`\`\`
`
  }
};

export default FlutterLesson10_3Content;