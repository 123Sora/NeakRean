import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson1_2Content: LessonContent = {
  title: 'មូលដ្ឋានភាសា Dart',
  objectives: [
    'យល់ដឹងអំពីភាសា Dart និងរចនាសម្ព័ន្ធមូលដ្ឋានរបស់វា',
    'ស្វែងយល់ពី Variables, Data Types, និង Operators ក្នុង Dart',
    'រៀនប្រើ Control Flow (if, for, while) និង Functions',
    'ស្គាល់ការប្រើប្រាស់ Lists, Maps, និង Sets ក្នុង Dart',
    'អនុវត្តន៍ការសរសេរ Dart Code សម្រាប់ Flutter'
  ],
  content: `
# មូលដ្ឋានភាសា Dart 🖥️✨

---

**Dart** គឺជាភាសាសរសេរកម្មវិធី Object-Oriented ដែលបង្កើតឡើងដោយ Google សម្រាប់ប្រើជាមួយ Flutter។ វាមាន Syntax សាមញ្ញ និងទំនើប ស្រដៀងនឹង JavaScript និង Java។ Dart គឺជាភាសាដ៏សំខាន់សម្រាប់ Flutter ព្រោះវាអនុញ្ញាតឱ្យអ្នកបង្កើត Widgets និង Logic សម្រាប់កម្មវិធី Cross-Platform។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនអំពីមូលដ្ឋាននៃភាសា Dart។

---

## 1. អ្វីទៅជា Dart?

Dart គឺជាភាសាដែលត្រូវបានរចនាឡើងសម្រាប់ភាពងាយស្រួលក្នុងការអភិវឌ្ឍ និង Performance ខ្ពស់។ លក្ខណៈពិសេសរបស់ Dart រួមមាន៖
- **Object-Oriented:** គាំទ្រ Classes, Objects, Inheritance, និង Encapsulation។
- **JIT និង AOT Compilation:** JIT (Just-In-Time) សម្រាប់ Hot Reload នៅពេលអភិវឌ្ឍ និង AOT (Ahead-Of-Time) សម្រាប់ Performance នៅពេល Deploy។
- **Type-Safe:** គាំទ្រ Static Typing (ឧទាហរណ៍៖ \`int\`, \`String\`) និង Dynamic Typing (\`dynamic\`)។
- **Asynchronous Programming:** គាំទ្រ \`async\` និង \`await\` សម្រាប់ការគ្រប់គ្រង Operations ដែលចំណាយពេលយូរ។
- **Rich Standard Library:** មាន Functions និង Collections ដែលជួយសម្រួលការអភិវឌ្ឍ។

Dart ត្រូវបានប្រើនៅក្នុង Flutter ដើម្បីបង្កើត UI Components (Widgets) និង Logic សម្រាប់កម្មវិធី។

---

## 2. Variables និង Data Types

Dart មាន Data Types ជាច្រើនសម្រាប់គ្រប់គ្រងទិន្នន័យ៖
- **Numbers:** \`int\` (ចំនួនគត់), \`double\` (ចំនួនទសភាគ)។
- **Strings:** \`String\` (អក្សរឬឃ្លា)។
- **Booleans:** \`bool\` (true/false)។
- **Lists:** បណ្តុំទិន្នន័យដែលមានលំដាប់ (ឧទាហរណ៍៖ \`[1, 2, 3]\`)។
- **Maps:** បណ្តុំទិន្នន័យបែប Key-Value (ឧទាហរណ៍៖ \`{'name': 'Sok', 'age': 25}\`)។
- **Sets:** បណ្តុំទិន្នន័យដែលមិនមានស្ទួន (ឧទាហរណ៍៖ \`{1, 2, 3}\`)។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
void main() {
  // Variables និង Data Types
  int age = 25;
  double height = 1.75;
  String name = "Sokha";
  bool isStudent = true;

  print('ឈ្មោះ: $name');
  print('អាយុ: $age');
  print('កម្ពស់: $height');
  print('ជានិស្សិត: $isStudent');
}
\`\`\`

**លទ្ធផល:**
\`\`\`
ឈ្មោះ: Sokha
អាយុ: 25
កម្ពស់: 1.75
ជានិស្សិត: true
\`\`\`

---

## 3. Control Flow

Dart គាំទ្រ Control Flow ដូចជា \`if\`, \`for\`, \`while\`, និង \`switch\`៖
- **if Statement:** ប្រើសម្រាប់លក្ខខណ្ឌ។
- **for Loop:** ប្រើសម្រាប់ការធ្វើឡើងវិញ។
- **while Loop:** ប្រើសម្រាប់ការធ្វើឡើងវិញផ្អែកលើលក្ខខណ្ឌ។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
void main() {
  int score = 85;

  // if Statement
  if (score >= 80) {
    print('អបអរសាទរ! អ្នកបាននិទ្ទេស A។');
  } else {
    print('សូមព្យាយាមបន្ត។');
  }

  // for Loop
  for (int i = 1; i <= 5; i++) {
    print('លេខ: $i');
  }
}
\`\`\`

**លទ្ធផល:**
\`\`\`
អបអរសាទរ! អ្នកបាននិទ្ទេស A។
លេខ: 1
លេខ: 2
លេខ: 3
លេខ: 4
លេខ: 5
\`\`\`

---

## 4. Functions

Functions នៅក្នុង Dart ជួយរៀបចំ Code ឱ្យមានភាពងាយស្រួលគ្រប់គ្រង។ Functions អាចមាន Parameters និង Return Types។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
void main() {
  String greeting = sayHello("Sokha");
  print(greeting);

  int sum = addNumbers(5, 10);
  print('បូក: $sum');
}

String sayHello(String name) {
  return 'សួស្តី $name!';
}

int addNumbers(int a, int b) {
  return a + b;
}
\`\`\`

**លទ្ធផល:**
\`\`\`
សួស្តី Sokha!
បូក: 15
\`\`\`

---

## 5. Collections (Lists, Maps, Sets)

Dart មាន Collections ដ៏សំខាន់សម្រាប់គ្រប់គ្រងទិន្នន័យ៖
- **Lists:** បណ្តុំទិន្នន័យដែលមានលំដាប់។
- **Maps:** បណ្តុំទិន្នន័យបែប Key-Value។
- **Sets:** បណ្តុំទិន្នន័យដែលមិនមានស្ទួន។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
void main() {
  // List
  List<String> names = ['Sokha', 'Dara', 'Srey'];
  print('ឈ្មោះ: $names');
  names.add('Vannak');
  print('បន្ទាប់ពីបន្ថែម: $names');

  // Map
  Map<String, int> ages = {'Sokha': 25, 'Dara': 30};
  print('អាយុ: $ages');
  ages['Srey'] = 22;
  print('បន្ទាប់ពីបន្ថែម: $ages');

  // Set
  Set<int> numbers = {1, 2, 3, 3}; // 3 មិនស្ទួន
  print('លេខ: $numbers');
}
\`\`\`

**លទ្ធផល:**
\`\`\`
ឈ្មោះ: [Sokha, Dara, Srey]
បន្ទាប់ពីបន្ថែម: [Sokha, Dara, Srey, Vannak]
អាយុ: {Sokha: 25, Dara: 30}
បន្ទាប់ពីបន្ថែម: {Sokha: 25, Dara: 30, Srey: 22}
លេខ: {1, 2, 3}
\`\`\`

---

## 6. ការប្រើ Dart ជាមួយ Flutter

Dart ត្រូវបានប្រើនៅក្នុង Flutter ដើម្បីបង្កើត Widgets និង Logic។ ឧទាហរណ៍ខាងក្រោមបង្ហាញពីការប្រើ Dart ដើម្បីបង្កើត Flutter App៖

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
        appBar: AppBar(title: Text('Dart នៅក្នុង Flutter')),
        body: Center(
          child: Text(
            greetUser('Sokha'),
            style: TextStyle(fontSize: 24),
          ),
        ),
      ),
    );
  }
}

String greetUser(String name) {
  return 'សួស្តី $name! សូមស្វាគមន៍មកកាន់ Flutter!';
}
\`\`\`

**លទ្ធផល:** បង្ហាញអត្ថបទ "សួស្តី Sokha! សូមស្វាគមន៍មកកាន់ Flutter!" នៅកណ្តាលអេក្រង់។

---

## 7. ហេតុអ្វីត្រូវរៀន Dart?

- **សាមញ្ញនិងទំនើប:** Syntax ងាយស្រួលរៀន ស្រដៀងនឹង JavaScript និង Java។
- **ប្រើជាមួយ Flutter:** Dart គឺជាភាសាចម្បងសម្រាប់ Flutter។
- **Performance ខ្ពស់:** AOT Compilation ធ្វើឱ្យកម្មវិធី Flutter ដំណើរការលឿន។
- **Community Support:** មានឯកសារ និងឧបករណ៍ជំនួយជាច្រើននៅ Pub.dev និង Dart.dev។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ប្រើ Variables និង Data Types</h3>
<p>បង្ហាញព័ត៌មានអ្នកប្រើប្រាស់ជាមួយ Variables។</p>
<pre><code class="language-dart">
void main() {
  String name = "Sokha";
  int age = 25;
  double height = 1.75;
  bool isStudent = true;
  print('ឈ្មោះ: $name, អាយុ: $age, កម្ពស់: $height, ជានិស្សិត: $isStudent');
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ប្រើ Control Flow</h3>
<p>ប្រើ if និង for ដើម្បីពិនិត្យនិទ្ទេស។</p>
<pre><code class="language-dart">
void main() {
  int score = 90;
  if (score >= 80) {
    print('និទ្ទេស A');
  } else {
    print('និទ្ទេសផ្សេង');
  }
  for (int i = 1; i <= 3; i++) {
    print('ការពិនិត្យលើកទី: $i');
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ប្រើ Function</h3>
<p>បង្កើត Function សម្រាប់គណនាផលបូក។</p>
<pre><code class="language-dart">
void main() {
  int result = add(10, 20);
  print('ផលបូក: $result');
}
int add(int a, int b) {
  return a + b;
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ប្រើ List និង Map</h3>
<p>គ្រប់គ្រងទិន្នន័យជាមួយ Collections។</p>
<pre><code class="language-dart">
void main() {
  List<String> students = ['Sokha', 'Dara'];
  students.add('Vannak');
  print('និស្សិត: $students');
  Map<String, int> scores = {'Sokha': 85, 'Dara': 90};
  scores['Vannak'] = 88;
  print('និទ្ទេស: $scores');
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Dart គឺជាអ្វី?',
      options: [
        'Database Management System',
        'ភាសាសរសេរកម្មវិធីសម្រាប់ Flutter',
        'Web Browser',
        'UI Framework'
      ],
      correct: 1,
      explanation: 'Dart គឺជាភាសាសរសេរកម្មវិធីសម្រាប់ Flutter។'
    },
    {
      question: 'តើ Data Type ណាដែលប្រើសម្រាប់ចំនួនទសភាគ?',
      options: ['int', 'double', 'String', 'bool'],
      correct: 1,
      explanation: 'double ប្រើសម្រាប់ចំនួនទសភាគ។'
    },
    {
      question: 'តើអ្វីជា Collections នៅក្នុង Dart?',
      options: [
        'Functions',
        'Lists, Maps, Sets',
        'Widgets',
        'Classes'
      ],
      correct: 1,
      explanation: 'Collections នៅក្នុង Dart គឺ Lists, Maps, និង Sets។'
    },
    {
      question: 'តើអ្វីជាលក្ខណៈពិសេសនៃ Dart សម្រាប់ Flutter?',
      options: [
        'Hot Reload',
        'SQL Database',
        'Native Rendering',
        'Browser Compilation'
      ],
      correct: 0,
      explanation: 'Hot Reload ជួយអ្នកអភិវឌ្ឍឃើញការផ្លាស់ប្តូរភ្លាមៗ។'
    },
    {
      question: 'តើអ្វីជា Control Flow នៅក្នុង Dart?',
      options: [
        'Functions សម្រាប់គណនា',
        'if, for, while',
        'Widgets សម្រាប់ UI',
        'Packages សម្រាប់ Pub.dev'
      ],
      correct: 1,
      explanation: 'Control Flow នៅក្នុង Dart គឺ if, for, while។'
    },
    {
      question: 'តើ Function នៅក្នុង Dart មានតួនាទីអ្វី?',
      options: [
        'បង្កើត UI',
        'រៀបចំ Code និងអនុវត្ត Logic',
        'គ្រប់គ្រង Database',
        'Render Graphics'
      ],
      correct: 1,
      explanation: 'Functions ជួយរៀបចំ Code និងអនុវត្ត Logic។'
    },
    {
      question: 'តើ Set នៅក្នុង Dart មានលក្ខណៈពិសេសអ្វី?',
      options: [
        'អនុញ្ញាតឱ្យមានទិន្នន័យស្ទួន',
        'មិនអនុញ្ញាតឱ្យមានទិន្នន័យស្ទួន',
        'មាន Key-Value Pairs',
        'មានលំដាប់'
      ],
      correct: 1,
      explanation: 'Set មិនអនុញ្ញាតឱ្យមានទិន្នន័យស្ទួន។'
    },
    {
      question: 'តើអ្វីជា AOT Compilation?',
      options: [
        'Compilation សម្រាប់ Hot Reload',
        'Compilation សម្រាប់ Performance នៅពេល Deploy',
        'Compilation សម្រាប់ Database',
        'Compilation សម្រាប់ Web'
      ],
      correct: 1,
      explanation: 'AOT Compilation ធ្វើឱ្យកម្មវិធី Flutter ដំណើរការលឿននៅពេល Deploy។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដ `List<int> numbers = [1, 2, 2]; numbers.add(3); print(numbers);`?',
      options: [
        '[1, 2, 2]',
        '[1, 2, 3]',
        '[1, 2, 2, 3]',
        '[1, 2]'
      ],
      correct: 2,
      explanation: 'កូដនេះបន្ថែម 3 ទៅ List ដូច្នេះលទ្ធផលគឺ [1, 2, 2, 3]។'
    },
    {
      question: 'តើ Dart គាំទ្រ Asynchronous Programming ដែរឬទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'តែនៅក្នុង Flutter ប៉ុណ្ណោះ', 'តែនៅក្នុង Web Apps'],
      correct: 0,
      explanation: 'Dart គាំទ្រ Asynchronous Programming ដោយប្រើ `async` និង `await`។'
    }
  ],
  lab: {
    task: `
បង្កើត Dart Program សាមញ្ញមួយដែលបង្ហាញពីមុខងារជាមូលដ្ឋាននៃ Dart។

**តម្រូវការ:**

1. **Variables និង Data Types:**
   - បង្កើត Variables ដើម្បីរក្សាទុកឈ្មោះ (String), អាយុ (int), និងនិទ្ទេស (double)។
   - បង្ហាញ Variables ទាំងនេះជាមួយ \`print\`។

2. **Control Flow:**
   - ប្រើ \`if\` Statement ដើម្បីពិនិត្យថាតើនិទ្ទេសធំជាងឬស្មើ 80 ដើម្បីបង្ហាញសារ "និទ្ទេស A" ឬ "និទ្ទេសផ្សេង"។

3. **Function:**
   - បង្កើត Function មួយឈ្មោះ \`calculateAverage\` ដែលទទួល Parameters ជា List នៃនិទ្ទេស (List<double>) ហើយត្រឡប់នូវនិទ្ទេសជាមធ្យម។

4. **Collections:**
   - បង្កើត List ដែលមានឈ្មោះនិស្សិត និង Map ដែលរក្សាទុកឈ្មោះនិងនិទ្ទេស។
   - បន្ថែមទិន្នន័យថ្មីទៅ List និង Map។

**ការណែនាំ:** សាកល្បងកូដនៅក្នុង DartPad (dartpad.dev) ឬ Flutter Project។
    `,
    solution: `
\`\`\`dart
void main() {
  // Variables និង Data Types
  String name = "Sokha";
  int age = 25;
  double grade = 85.5;
  print('ឈ្មោះ: $name, អាយុ: $age, និទ្ទេស: $grade');

  // Control Flow
  if (grade >= 80) {
    print('និទ្ទេស A');
  } else {
    print('និទ្ទេសផ្សេង');
  }

  // Function
  List<double> grades = [90.0, 85.5, 88.0];
  double average = calculateAverage(grades);
  print('និទ្ទេសជាមធ្យម: $average');

  // Collections
  List<String> students = ['Sokha', 'Dara'];
  students.add('Vannak');
  print('និស្សិត: $students');

  Map<String, double> studentGrades = {'Sokha': 85.5, 'Dara': 90.0};
  studentGrades['Vannak'] = 88.0;
  print('និទ្ទេស: $studentGrades');
}

double calculateAverage(List<double> grades) {
  double sum = 0;
  for (double grade in grades) {
    sum += grade;
  }
  return sum / grades.length;
}
\`\`\`
`
  }
};

export default FlutterLesson1_2Content;
