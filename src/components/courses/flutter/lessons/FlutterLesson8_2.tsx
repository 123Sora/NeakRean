import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson8_2Content: LessonContent = {
  title: 'ការប្រើ Hive Database ក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំนិតនៃ Hive Database នៅក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបប្រើ Hive សម្រាប់រក្សាទុកទិន្នន័យស្មុគស្មាញ',
    'រៀនបង្កើត Hive Box សម្រាប់រក្សាទុក និងទាញយកទិន្នន័យ',
    'អនុវត្តន៍ការបង្កើត Todo App ដែលប្រើ Hive សម្រាប់រក្សាទុក Todos',
    'ស្គាល់ការប្រើ Hive Adapter សម្រាប់ Custom Objects',
    'យល់ពីការគ្រប់គ្រង Asynchronous Operations ជាមួយ Hive',
    'រៀនបច្ចេកទេសការពារ Performance នៅពេលប្រើ Hive',
    'ស្វែងយល់ពីការប្រើ Flutter DevTools ដើម្បីវិភាគ App'
  ],
  content: `
# ការប្រើ Hive Database ក្នុង Flutter 📦

---

**Hive** គឺជា NoSQL Database ដែលលឿន និងស្រាល សម្រាប់រក្សាទុកទិន្នន័យនៅលើឧបករណ៍។ វាស័ក្តិសមសម្រាប់ទិន្នន័យស្មុគស្មាញជាង Shared Preferences។ នៅក្នុងមេរៀននេះ យើងនឹងបង្កើត Todo App ដែលប្រើ Hive សម្រាប់រក្សាទុក Todos។

---

## 1. អ្វីទៅជា Hive Database?

**Hive** គឺជា Local Database ដែល៖
- រក្សាទុកទិន្នន័យជា Key-Value Pairs។
- គាំទ្រទិន្នន័យស្មុគស្មាញដោយប្រើ Custom Objects និង Adapters។
- លឿន និងមិនតម្រូវការ Server។

---

## 2. ការដំឡើង Hive

បន្ថែម \`hive\` និង \`hive_flutter\` ទៅ \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  hive: ^2.2.3
  hive_flutter: ^1.1.0
dev_dependencies:
  hive_generator: ^2.0.0
  build_runner: ^2.4.0
\`\`\`

ດំណើរការ Command: \`flutter pub get\`

---

## 3. ការបង្កើត Hive Box និង Adapter

### 3.1 បង្កើត Model Class
បង្កើត Class \`Todo\` ដែលប្រើ Hive Annotations។

**ឧទាហរណ៍កូដ:**

\`\`\`dart
import 'package:hive/hive.dart';

part 'todo.g.dart';

@HiveType(typeId: 0)
class Todo {
  @HiveField(0)
  final String title;

  @HiveField(1)
  final bool isCompleted;

  Todo({required this.title, this.isCompleted = false});
}
\`\`\`

### 3.2 បង្កើត Adapter
- បង្កើត Adapter ដោយប្រើ Command:
  \`\`\`bash
  flutter pub run build_runner build
  \`\`\`
- នេះនឹងបង្កើត File \`todo.g.dart\`។

### 3.3 ចុះឈ្មោះ Adapter និងបើក Box
- ចុះឈ្មោះ Adapter និងបើក Hive Box នៅក្នុង \`main.dart\`:

\`\`\`dart
import 'package:hive_flutter/hive_flutter.dart';

Future<void> main() async {
  await Hive.initFlutter();
  Hive.registerAdapter(TodoAdapter());
  await Hive.openBox<Todo>('todos');
  runApp(const MyApp());
}
\`\`\`

---

## 4. ការបង្កើត Todo App ជាមួយ Hive

**ឧទាហរណ៍កូដ:**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'todo.dart';

void main() async {
  await Hive.initFlutter();
  Hive.registerAdapter(TodoAdapter());
  await Hive.openBox<Todo>('todos');
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: TodoScreen(),
    );
  }
}

class TodoScreen extends StatelessWidget {
  final TextEditingController _controller = TextEditingController();

  TodoScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Hive Todo App')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _controller,
                    decoration: const InputDecoration(
                      hintText: 'បញ្ចូល Todo ថ្មី',
                      border: OutlineInputBorder(),
                    ),
                    onSubmitted: (value) {
                      if (value.isNotEmpty) {
                        Hive.box<Todo>('todos').add(Todo(title: value));
                        _controller.clear();
                      }
                    },
                  ),
                ),
                const SizedBox(width: 8),
                ElevatedButton(
                  onPressed: () {
                    if (_controller.text.isNotEmpty) {
                      Hive.box<Todo>('todos').add(Todo(title: _controller.text));
                      _controller.clear();
                    }
                  },
                  child: const Text('បន្ថែម'),
                ),
              ],
            ),
          ),
          Expanded(
            child: ValueListenableBuilder(
              valueListenable: Hive.box<Todo>('todos').listenable(),
              builder: (context, Box<Todo> box, _) {
                return ListView.builder(
                  itemCount: box.length,
                  itemBuilder: (context, index) {
                    final todo = box.getAt(index)!;
                    return ListTile(
                      title: Text(todo.title),
                      trailing: IconButton(
                        icon: const Icon(Icons.delete),
                        onPressed: () => box.deleteAt(index),
                      ),
                    );
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** App អនុញ្ញាតឱ្យបន្ថែម និងលុប Todo Items ដោយរក្សាទុកទិន្នន័យនៅក្នុង Hive Database។

---

## 5. ការគ្រប់គ្រង Asynchronous Operations

- Hive ប្រើ \`async/await\` សម្រាប់ការបើក Box និងការងារជាមួយ Database។
- ប្រើ \`ValueListenableBuilder\` ដើម្បីធ្វើបច្ចុប្បន្នភាព UI នៅពេលទិន្នន័យផ្លាស់ប្តូរ។

---

## 6. ការបង្កើនប្រសិទ្ធភាព Performance

- **ប្រើ \`const\` Constructors:** កាត់បន្ថយ Widget Rebuilds។
- **ប្រើ \`ValueListenableBuilder\`:** កំណត់ Rebuild Area។
- **បិទ Box:** ប្រើ \`Hive.close()\` នៅពេលមិនប្រើ។
- **ប្រើ Flutter DevTools:** វិភាគ Memory Usage និង Performance។

---

## 7. ការប្រើ Flutter DevTools

- **Memory Tab:** តាមដាន Memory Usage នៅពេលប្រើ Hive
- **Performance Tab:** វិភាគ Frame Rendering Time។
- **Widget Inspector:** ពិនិត្យ Widget Tree និង Rebuilds។

**ការបើក DevTools:**
- ដំណើរការ \`flutter run --profile\` ឬបើក DevTools នៅក្នុង IDE។

---

## 8. គន្លឹះសម្រាប់ Hive Database

- ប្រើ Hive សម្រាប់ទិន្នន័យស្មុគស្មាញ។
- បង្កើត Adapter សម្រាប់ Custom Objects។
- ប្រើ \`ValueListenableBuilder\` សម្រាប់ UI Updates។
- បិទ Box នៅពេលមិនប្រើ។
- ប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្កើត Todo Model</h3>
<p>បង្កើត Model Class ជាមួយ Hive Annotations។</p>
<pre><code class="language-dart">
@HiveType(typeId: 0)
class Todo {
  @HiveField(0)
  final String title;

  @HiveField(1)
  final bool isCompleted;

  Todo({required this.title, this.isCompleted = false});
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបើក Hive Box</h3>
<p>ចុះឈ្មោះ Adapter និងបើក Box។</p>
<pre><code class="language-dart">
Future<void> main() async {
  await Hive.initFlutter();
  Hive.registerAdapter(TodoAdapter());
  await Hive.openBox<Todo>('todos');
  runApp(const MyApp());
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបង្ហាញ Todos</h3>
<p>ប្រើ <code>ValueListenableBuilder</code> ដើម្បីបង្ហាញ Todos។</p>
<pre><code class="language-dart">
ValueListenableBuilder(
  valueListenable: Hive.box<Todo>('todos').listenable(),
  builder: (context, Box<Todo> box, _) {
    return ListView.builder(
      itemCount: box.length,
      itemBuilder: (context, index) {
        final todo = box.getAt(index)!;
        return ListTile(
          title: Text(todo.title),
          trailing: IconButton(
            icon: const Icon(Icons.delete),
            onPressed: () => box.deleteAt(index),
          ),
        );
      },
    );
  },
)
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Hive Database ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុកទិន្នន័យសាមញ្ញ',
        'រក្សាទុកទិន្នន័យស្មុគស្មាញជា Key-Value Pairs',
        'បង្កើត Animations',
        'ទាញទិន្នន័យពី API'
      ],
      correct: 1,
      explanation: 'Hive ប្រើសម្រាប់រក្សាទុកទិន្នន័យស្មុគស្មាញជា Key-Value Pairs។'
    },
    {
      question: 'តើ Package អ្វីត្រូវបន្ថែមទៅ `pubspec.yaml` សម្រាប់ Hive?',
      options: [
        'http',
        'provider',
        'hive',
        'shared_preferences'
      ],
      correct: 2,
      explanation: '`hive` និង `hive_flutter` Packages ត្រូវបន្ថែមសម្រាប់ Hive Database�।'
    },
    {
      question: 'តើ Hive Adapter ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'រក្សាទុក Custom Objects',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Hive Adapter ប្រើសម្រាប់រក្សាទុក Custom Objects។'
    },
    {
      question: 'តើ Command អ្វីប្រើសម្រាប់បង្កើត Hive Adapter?',
      options: [
        'flutter pub get',
        'flutter pub run build_runner build',
        'flutter build apk',
        'flutter run'
      ],
      correct: 1,
      explanation: '`flutter pub run build_runner build` បង្កើត Adapter សម្រាប់ Hive។'
    },
    {
      question: 'តើ `ValueListenableBuilder` នៅក្នុង Hive ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'ធ្វើបច្ចុប្បន្នភាព UI នៅពេលទិន្នន័យផ្លាស់ប្តូរ',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`ValueListenableBuilder` ធ្វើបច្ចុប្បន្នភាព UI នៅពេលទិន្នន័យផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើការប្រើ `const` Constructor ជួយ Hive App ដោយរបៀបណា?',
      options: [
        'បង្កើត Animation',
        'កាត់បន្ថយ Widget Rebuilds',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`const` Constructor កាត់បន្ថយ Widget Rebuilds។'
    },
    {
      question: 'តើ Flutter DevTools ជួយអ្វីនៅក្នុង Hive App?',
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
      question: 'តើ Method អ្វីប្រើសម្រាប់បើក Hive Box?',
      options: [
        'Hive.openBox()',
        'Hive.createBox()',
        'Hive.initBox()',
        'Hive.getBox()'
      ],
      correct: 0,
      explanation: '`Hive.openBox()` ប្រើសម្រាប់បើក Hive Box។'
    },
    {
      question: 'តើ `Hive.initFlutter()` ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'រៀបចំ Hive សម្រាប់ Flutter',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`Hive.initFlutter()` រៀបចំ Hive សម្រាប់ប្រើនៅក្នុង Flutter។'
    },
    {
      question: 'តើការបិទ Box នៅក្នុង Hive ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'កាត់បន្ថយ Memory Usage',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'ការបិទ Box កាត់បន្ថយ Memory Usage។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter Todo App ដែលប្រើ Hive Database ដើម្បីរក្សាទុក Todo Items។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`HiveApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateless Widget មួយឈ្មោះ \`TodoScreen\` សម្រាប់បង្ហាញ UI។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Hive Todo App"។

2. **Hive Setup:**
   - បង្កើត \`Todo\` Class ជាមួយ Hive Annotations។
   - បង្កើត Adapter ដោយប្រើ \`build_runner\`។
   - ចុះឈ្មោះ Adapter និងបើក Hive Box នៅក្នុង \`main.dart\`។

3. **Todo Functionality:**
   - បន្ថែម \`TextField\` សម្រាប់បញ្ចូល Todo Item ថ្មី។
   - បន្ថែម \`ElevatedButton\` សម្រាប់បញ្ជាក់ការបន្ថែម Todo។
   - បង្ហាញបញ្ជី Todo ដោយប្រើ \`ValueListenableBuilder\` និង \`ListView.builder\`។
   - បន្ថែម \`IconButton\` សម្រាប់លុប Todo Item។

4. **Performance Optimization:**
   - ប្រើ \`const\` Constructors សម្រាប់ Widgets ឋិតិវន្ត។
   - ប្រើ \`ValueListenableBuilder\` ដើម្បីកំណត់ Rebuild Area។

5. **Performance Testing:**
   - ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Widget Rebuilds និង Memory Usage�।

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងឧបករណ៍ពិត និងប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។
    `,
    solution: `
\`\`\`dart
// todo.dart
import 'package:hive/hive.dart';

part 'todo.g.dart';

@HiveType(typeId: 0)
class Todo {
  @HiveField(0)
  final String title;

  @HiveField(1)
  final bool isCompleted;

  Todo({required this.title, this.isCompleted = false});
}

// main.dart
import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'todo.dart';

void main() async {
  await Hive.initFlutter();
  Hive.registerAdapter(TodoAdapter());
  await Hive.openBox<Todo>('todos');
  runApp(const HiveApp());
}

class HiveApp extends StatelessWidget {
  const HiveApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: TodoScreen(),
    );
  }
}

class TodoScreen extends StatelessWidget {
  final TextEditingController _controller = TextEditingController();

  TodoScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Hive Todo App')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _controller,
                    decoration: const InputDecoration(
                      hintText: 'បញ្ចូល Todo ថ្មី',
                      border: OutlineInputBorder(),
                    ),
                    onSubmitted: (value) {
                      if (value.isNotEmpty) {
                        Hive.box<Todo>('todos').add(Todo(title: value));
                        _controller.clear();
                      }
                    },
                  ),
                ),
                const SizedBox(width: 8),
                ElevatedButton(
                  onPressed: () {
                    if (_controller.text.isNotEmpty) {
                      Hive.box<Todo>('todos').add(Todo(title: _controller.text));
                      _controller.clear();
                    }
                  },
                  child: const Text('បន្ថែម'),
                ),
              ],
            ),
          ),
          Expanded(
            child: ValueListenableBuilder(
              valueListenable: Hive.box<Todo>('todos').listenable(),
              builder: (context, Box<Todo> box, _) {
                return ListView.builder(
                  itemCount: box.length,
                  itemBuilder: (context, index) {
                    final todo = box.getAt(index)!;
                    return ListTile(
                      title: Text(todo.title),
                      trailing: IconButton(
                        icon: const Icon(Icons.delete),
                        onPressed: () => box.deleteAt(index),
                      ),
                    );
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
\`\`\`
`
  }
};

export default FlutterLesson8_2Content;