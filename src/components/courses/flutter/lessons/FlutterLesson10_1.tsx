import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson10_1Content: LessonContent = {
  title: 'ការប្រើ Unit Testing ក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Unit Testing ក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបប្រើ Package `test` សម្រាប់ Unit Testing',
    'រៀនសរសេរករណីសាកល្បង (Test Cases) សម្រាប់ Logic និង Functions',
    'អនុវត្តន៍ការបង្កើត Unit Tests សម្រាប់ Flutter App',
    'ស្គាល់ការប្រើ Mocking ដើម្បីសាកល្បង Dependencies',
    'យល់ពីការគ្រប់គ្រង Asynchronous Operations នៅក្នុង Unit Tests',
    'រៀនបច្ចេកទេស Debugging នៅពេលសរសេរការសាកល្បង',
    'ស្វែងយល់ពីការប្រើ Flutter DevTools ដើម្បីវិភាគ Test Results'
  ],
  content: `
# ការប្រើ Unit Testing ក្នុង Flutter 🧪

---

**Unit Testing** គឺជាវិធីសាស្ត្រសាកល្បងដែលផ្តោតលើការសាកល្បងផ្នែកតូចៗនៃកូដ (ឧទាហរណ៍ Functions ឬ Methods) ដើម្បីធានាថាពួកវាដំណើរការត្រឹមត្រូវ។ នៅក្នុងមេរៀននេះ យើងនឹងប្រើ Package \`test\` ដើម្បីសរសេរករណីសាកល្បងសម្រាប់ Flutter App។

---

## 1. អ្វីទៅជា Unit Testing?

**Unit Testing** គឺជាការសាកល្បងឯកតាកូដតូចៗ (Units) ដែល៖
- ផ្តោតលើ Functions, Methods, ឬ Classes។
- ពិនិត្យថាតើ Unit នីមួយៗផ្តល់លទ្ធផលត្រឹមត្រូវ។
- ជួយរកឃើញ Bugs នៅដើមដំបូង។

---

## 2. ការដំឡើង Unit Testing

### 2.1 បន្ថែម Package
បន្ថែម \`test\` Package ទៅ \`pubspec.yaml\`:

\`\`\`yaml
dev_dependencies:
  test: ^1.24.0
\`\`\`

ដំណើរការ Command: \`flutter pub get\`

### 2.2 បង្កើត Test Folder
- បង្កើត Folder \`test\` នៅក្នុង Project Root។
- បង្កើត Test Files ដែលមានឈ្មោះបញ្ចប់ដោយ \`_test.dart\` (ឧទាហរណ៍ \`calculator_test.dart\`)។

---

## 3. ការសរសេរ Unit Tests

**ឧទាហរណ៍កូដ:** សាកល្បង Function សម្រាប់គណនា។

### 3.1 កូដ Calculator
\`\`\`dart
// lib/calculator.dart
class Calculator {
  int add(int a, int b) => a + b;
  int subtract(int a, int b) => a - b;
}
\`\`\`

### 3.2 Unit Test
\`\`\`dart
// test/calculator_test.dart
import 'package:test/test.dart';
import 'package:my_app/calculator.dart';

void main() {
  group('Calculator', () {
    late Calculator calculator;

    setUp(() {
      calculator = Calculator();
    });

    test('should add two numbers correctly', () {
      expect(calculator.add(2, 3), equals(5));
      expect(calculator.add(-1, 1), equals(0));
    });

    test('should subtract two numbers correctly', () {
      expect(calculator.subtract(5, 3), equals(2));
      expect(calculator.subtract(3, 5), equals(-2));
    });
  });
}
\`\`\`

**ការពន្យល់:**
- \`group\`: រៀបចំករណីសាកល្បងជាក្រុម។
- \`setUp\`: រៀបចំ Object មុនពេលសាកល្បង។
- \`test\`: កំណត់ករណីសាកល្បងនីមួយៗ។
- \`expect\`: ពិនិត្យថាតើលទ្ធផលស្មើនឹងតម្លៃដែលរំពឹងទុក។

### 3.3 ដំណើរការ Tests
- ដំណើរការ Command: \`flutter test\`
- លទ្ធផលនឹងបង្ហាញថាតើ Tests ទាំងអស់ Pass ឬ Fail។

---

## 4. ការប្រើ Mocking

**Mocking** ប្រើដើម្បីសាកល្បង Dependencies ដោយបង្កើត Fake Objects។ បន្ថែម Package \`mockito\`:

\`\`\`yaml
dev_dependencies:
  mockito: ^5.4.0
\`\`\`

**ឧទាហរណ៍កូដ:**

### 4.1 Service
\`\`\`dart
// lib/api_service.dart
class ApiService {
  Future<String> fetchData() async {
    return 'Data from API';
  }
}
\`\`\`

### 4.2 Mocking Test
\`\`\`dart
// test/api_service_test.dart
import 'package:test/test.dart';
import 'package:mockito/mockito.dart';
import 'package:my_app/api_service.dart';

// Mock Class
class MockApiService extends Mock implements ApiService {}

void main() {
  group('ApiService', () {
    late MockApiService mockApiService;

    setUp(() {
      mockApiService = MockApiService();
    });

    test('should fetch data correctly', () async {
      when(mockApiService.fetchData()).thenAnswer((_) async => 'Mocked Data');
      expect(await mockApiService.fetchData(), equals('Mocked Data'));
    });
  });
}
\`\`\`

---

## 5. ការគ្រប់គ្រង Asynchronous Operations

- ប្រើ \`async/await\` នៅក្នុង Tests សម្រាប់ Functions ដែល Asynchronous។
- ប្រើ \`Future\` នៅក្នុង \`expect\` សម្រាប់លទ្ធផល Asynchronous។

**ឧទាហរណ៍:**
\`\`\`dart
test('should fetch data asynchronously', () async {
  expect(await mockApiService.fetchData(), equals('Mocked Data'));
});
\`\`\`

---

## 6. ការបង្កើនប្រសិទ្ធភាព និង Debugging

- **រៀបចំ Tests:** ប្រើ \`group\` និង \`setUp\` ដើម្បីរៀបចំកូដ។
- **Debugging:** ប្រើ \`print\` ឬ Flutter DevTools ដើម្បីតាមដាន Errors។
- **ការពារ Code Coverage:** សាកល្បងគ្រប់ Branch នៃ Logic។
- **ប្រើ Flutter DevTools:** វិភាគ Memory Usage និង Performance នៅពេលសាកល្បង។

---

## 7. ការប្រើ Flutter DevTools

- **Logging:** ប្រើ \`print\` ដើម្បីតាមដាន Test Results។
- **Performance Tab:** វិភាគ Test Execution Time។
- **Memory Tab:** តាមដាន Memory Usage។

**ការបើក DevTools:**
- ដំណើរការ \`flutter test --machine\` ឬបើក DevTools នៅក្នុង IDE។

---

## 8. គន្លឹះសម្រាប់ Unit Testing

- សរសេរ Tests សម្រាប់ Logic សំខាន់ៗ។
- ប្រើ \`mockito\` សម្រាប់ Dependencies។
- ប្រើ \`async/await\` សម្រាប់ Asynchronous Operations។
- ប្រើ Flutter DevTools ដើម្បី Debug និងវិភាគ Performance។
- សាកល្បងគ្រប់ Edge Cases។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការសាកល្បង Function បូក</h3>
<p>សាកល្បង Function ដែលបូកលេខ។</p>
<pre><code class="language-dart">
test('should add two numbers correctly', () {
  final calculator = Calculator();
  expect(calculator.add(2, 3), equals(5));
});
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Mocking</h3>
<p>ប្រើ Mocking ដើម្បីសាកល្បង API Service។</p>
<pre><code class="language-dart">
test('should fetch data correctly', () async {
  when(mockApiService.fetchData()).thenAnswer((_) async => 'Mocked Data');
  expect(await mockApiService.fetchData(), equals('Mocked Data'));
});
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការសាកល្បង Asynchronous</h3>
<p>សាកល្បង Asynchronous Function។</p>
<pre><code class="language-dart">
test('should fetch data asynchronously', () async {
  expect(await mockApiService.fetchData(), equals('Mocked Data'));
});
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Unit Testing ប្រើសម្រាប់អ្វី?',
      options: [
        'សាកល្បង UI',
        'សាកល្បង Functions ឬ Methods',
        'បង្កើត Animations',
        'ទាញទិន្នន័យពី API'
      ],
      correct: 1,
      explanation: 'Unit Testing ប្រើសម្រាប់សាកល្បង Functions ឬ Methods។'
    },
    {
      question: 'តើ Package អ្វីត្រូវបន្ថែមទៅ `pubspec.yaml` សម្រាប់ Unit Testing?',
      options: [
        'http',
        'test',
        'provider',
        'sqflite'
      ],
      correct: 1,
      explanation: '`test` Package ត្រូវបន្ថែមសម្រាប់ Unit Testing។'
    },
    {
      question: 'តើ `group` នៅក្នុង Unit Testing ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'រៀបចំករណីសាកល្បងជាក្រុម',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`group` រៀបចំករណីសាកល្បងជាក្រុម។'
    },
    {
      question: 'តើ `setUp` នៅក្នុង Unit Testing ធ្វើអ្វី?',
      options: [
        'បង្កើត Animation',
        'រៀបចំ Object មុនពេលសាកល្បង',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`setUp` រៀបចំ Object មុនពេលសាកល្បង។'
    },
    {
      question: 'តើ Package អ្វីប្រើសម្រាប់ Mocking?',
      options: [
        'http',
        'mockito',
        'provider',
        'sqflite'
      ],
      correct: 1,
      explanation: '`mockito` ប្រើសម្រាប់ Mocking Dependencies។'
    },
    {
      question: 'តើ `expect` នៅក្នុង Unit Testing ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'ពិនិត្យលទ្ធផលនៃ Test',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`expect` ពិនិត្យថាតើលទ្ធផលស្មើនឹងតម្លៃដែលរំពឹងទុក។'
    },
    {
      question: 'តើ Command អ្វីប្រើដើម្បីដំណើរការ Unit Tests?',
      options: [
        'flutter run',
        'flutter test',
        'flutter build',
        'flutter clean'
      ],
      correct: 1,
      explanation: '`flutter test` ប្រើដើម្បីដំណើរការ Unit Tests។'
    },
    {
      question: 'តើ Flutter DevTools ជួយអ្វីនៅក្នុង Unit Testing?',
      options: [
        'បង្កើត Widget',
        'វិភាគ Memory Usage និង Performance',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Flutter DevTools វិភាគ Memory Usage និង Test Execution Time។'
    },
    {
      question: 'តើការប្រើ `async/await` នៅក្នុង Unit Testing ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'គ្រប់គ្រង Asynchronous Operations',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`async/await` គ្រប់គ្រង Asynchronous Operations នៅក្នុង Tests។'
    },
    {
      question: 'តើ Mocking នៅក្នុង Unit Testing មានគោលបំណងអ្វី?',
      options: [
        'បង្កើត Widget',
        'បង្កើត Fake Objects សម្រាប់ Dependencies',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Mocking បង្កើត Fake Objects សម្រាប់សាកល្បង Dependencies�।'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលមាន Unit Tests សម្រាប់ Calculator Class។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត \`Calculator\` Class នៅក្នុង \`lib/calculator.dart\` ដែលមាន Methods \`add\`, \`subtract\`, និង \`multiply\`។
   - បង្កើត Stateless Widget មួយឈ្មោះ \`CalculatorApp\` ដែលប្រើ \`MaterialApp\`។

2. **Unit Testing Setup:**
   - បន្ថែម \`test\` Package ទៅ \`pubspec.yaml\`។
   - បង្កើត \`test/calculator_test.dart\` សម្រាប់ Unit Tests។

3. **Test Cases:**
   - សរសេរ Tests សម្រាប់ \`add\`, \`subtract\`, និង \`multiply\` Methods។
   - ប្រើ \`group\` និង \`setUp\` ដើម្បីរៀបចំ Tests។
   - សាកល្បង Edge Cases (ឧទាហរណ៍ លេខអវិជ្ជមាន, សូន្យ)។

4. **Performance Optimization:**
   - ប្រើ \`expect\` ដើម្បីពិនិត្យលទ្ធផល។
   - ប្រើ \`print\` ដើម្បី Debug ប្រសិនបើ Tests មិន Pass។

5. **Performance Testing:**
   - ប្រើ \`flutter test\` ដើម្បីដំណើរការ Tests។
   - ប្រើ Flutter DevTools ដើម្បីវិភាគ Test Execution Time។

**ការណែនាំ:** សាកល្បង App និង Tests នៅលើ Emulator និងឧបករណ៍ពិត និងប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។
    `,
    solution: `
\`\`\`dart
// lib/calculator.dart
class Calculator {
  int add(int a, int b) => a + b;
  int subtract(int a, int b) => a - b;
  int multiply(int a, int b) => a * b;
}

// lib/main.dart
import 'package:flutter/material.dart';

void main() {
  runApp(const CalculatorApp());
}

class CalculatorApp extends StatelessWidget {
  const CalculatorApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Calculator App')),
        body: const Center(child: Text('Calculator App')),
      ),
    );
  }
}

// test/calculator_test.dart
import 'package:test/test.dart';
import 'package:my_app/calculator.dart';

void main() {
  group('Calculator', () {
    late Calculator calculator;

    setUp(() {
      calculator = Calculator();
    });

    test('should add two numbers correctly', () {
      expect(calculator.add(2, 3), equals(5));
      expect(calculator.add(-1, 1), equals(0));
      expect(calculator.add(0, 0), equals(0));
    });

    test('should subtract two numbers correctly', () {
      expect(calculator.subtract(5, 3), equals(2));
      expect(calculator.subtract(3, 5), equals(-2));
      expect(calculator.subtract(0, 0), equals(0));
    });

    test('should multiply two numbers correctly', () {
      expect(calculator.multiply(2, 3), equals(6));
      expect(calculator.multiply(-2, 3), equals(-6));
      expect(calculator.multiply(0, 5), equals(0));
    });
  });
}
\`\`\`
`
  }
};

export default FlutterLesson10_1Content;