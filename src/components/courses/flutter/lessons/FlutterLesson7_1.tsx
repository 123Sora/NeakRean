import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson7_1Content: LessonContent = {
  title: 'ការបង្កើត Todo App ជាមួយ Flutter',
  objectives: [
    'យល់ដឹងអំពីរបៀបបង្កើត Todo App ដ៏សាមញ្ញជាមួយ Flutter',
    'ស្វែងយល់ពីការគ្រប់គ្រង State ដោយប្រើ Provider',
    'រៀនបង្កើត UI សម្រាប់បញ្ជី Todo',
    'អនុវត្តន៍ការបន្ថែម និងលុប Todo Items',
    'ស្គាល់ការប្រើ TextField សម្រាប់បញ្ចូលទិន្នន័យ',
    'យល់ពីការប្រើ ListView.builder សម្រាប់បង្ហាញបញ្ជីថាមវន្ត',
    'រៀនបច្ចេកទេសការពារ Performance នៅក្នុង Todo App',
    'ស្វែងយល់ពីការប្រើ Flutter DevTools ដើម្បីវិភាគ App'
  ],
  content: `
# ការបង្កើត Todo App ជាមួយ Flutter 📋

---

**Todo App** គឺជាគម្រោងសាមញ្ញដែលអនុញ្ញាតឱ្យអ្នកប្រើបន្ថែម និងលុប Todo Items។ នៅក្នុងមេរៀននេះ យើងនឹងប្រើ **Provider** សម្រាប់គ្រប់គ្រង State និង **ListView.builder** សម្រាប់បង្ហាញបញ្ជី។

---

## 1. ទិដ្ឋភាពទូទៅនៃ Todo App

**Todo App** នឹងមានលក្ខណៈពិសេសដូចជា៖
- បញ្ចូល Todo Item ថ្មីតាមរយៈ \`TextField\`។
- បង្ហាញបញ្ជី Todo Items ដោយប្រើ \`ListView.builder\`។
- លុប Todo Item នៅពេលចុចលើ Icon។
- គ្រប់គ្រង State ដោយប្រើ \`Provider\`។

---

## 2. ការដំឡើង Provider

បន្ថែម \`provider\` ទៅ \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  provider: ^6.0.0
\`\`\`

---

## 3. ការបង្កើត State Management ជាមួយ Provider

បង្កើត Class \`TodoModel\` ដែលប្រើ \`ChangeNotifier\` សម្រាប់គ្រប់គ្រងបញ្ជី Todo។

**ឧទាហរណ៍កូដ:**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class TodoModel extends ChangeNotifier {
  final List<String> _todos = [];

  List<String> get todos => _todos;

  void addTodo(String todo) {
    _todos.add(todo);
    notifyListeners();
  }

  void removeTodo(int index) {
    _todos.removeAt(index);
    notifyListeners();
  }
}
\`\`\`

---

## 4. ការបង្កើត UI សម្រាប់ Todo App

បង្កើត UI ដែលមាន \`TextField\` សម្រាប់បញ្ចូល Todo និង \`ListView.builder\` សម្រាប់បង្ហាញបញ្ជី។

**ឧទាហរណ៍កូដ:**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => TodoModel(),
      child: const MyApp(),
    ),
  );
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
      appBar: AppBar(title: const Text('Todo App')),
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
                        context.read<TodoModel>().addTodo(value);
                        _controller.clear();
                      }
                    },
                  ),
                ),
                const SizedBox(width: 8),
                ElevatedButton(
                  onPressed: () {
                    if (_controller.text.isNotEmpty) {
                      context.read<TodoModel>().addTodo(_controller.text);
                      _controller.clear();
                    }
                  },
                  child: const Text('បន្ថែម'),
                ),
              ],
            ),
          ),
          Expanded(
            child: Consumer<TodoModel>(
              builder: (context, todoModel, child) {
                return ListView.builder(
                  itemCount: todoModel.todos.length,
                  itemBuilder: (context, index) {
                    return ListTile(
                      title: Text(todoModel.todos[index]),
                      trailing: IconButton(
                        icon: const Icon(Icons.delete),
                        onPressed: () => context.read<TodoModel>().removeTodo(index),
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

**លទ្ធផល:** App អនុញ្ញាតឱ្យបញ្ចូល Todo Item ថ្មី និងលុប Todo Item ដែលមានស្រាប់។

---

## 5. ការបង្កើនប្រសិទ្ធភាព Performance

- **ប្រើ \`const\` Constructors:** កាត់បន្ថយ Widget Rebuilds។
- **ប្រើ \`Consumer\`:** កំណត់ Rebuild Area នៅក្នុង Provider។
- **ប្រើ \`ListView.builder\`:** Render Items តាមតម្រូវការ។
- **បញ្ឈប់ Resources:** បញ្ឈប់ \`TextEditingController\` នៅក្នុង \`dispose\`។

**ឧទាហរណ៍កូដ (បន្ថែម dispose):**

\`\`\`dart
class TodoScreen extends StatelessWidget {
  final TextEditingController _controller = TextEditingController();

  TodoScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Todo App')),
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
                        context.read<TodoModel>().addTodo(value);
                        _controller.clear();
                      }
                    },
                  ),
                ),
                const SizedBox(width: 8),
                ElevatedButton(
                  onPressed: () {
                    if (_controller.text.isNotEmpty) {
                      context.read<TodoModel>().addTodo(_controller.text);
                      _controller.clear();
                    }
                  },
                  child: const Text('បន្ថែម'),
                ),
              ],
            ),
          ),
          Expanded(
            child: Consumer<TodoModel>(
              builder: (context, todoModel, child) {
                return ListView.builder(
                  itemCount: todoModel.todos.length,
                  itemBuilder: (context, index) {
                    return ListTile(
                      title: Text(todoModel.todos[index]),
                      trailing: IconButton(
                        icon: const Icon(Icons.delete),
                        onPressed: () => context.read<TodoModel>().removeTodo(index),
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

---

## 6. ការប្រើ Flutter DevTools

- **Widget Inspector:** ពិនិត្យ Widget Tree និង Rebuilds។
- **Performance Tab:** វិភាគ Frame Rendering Time។
- **Memory Tab:** តាមដាន Memory Usage។

**ការបើក DevTools:**
- ដំណើរការ \`flutter run --profile\` ឬបើក DevTools នៅក្នុង IDE។

---

## 7. គន្លឹះសម្រាប់ Todo App

- ប្រើ \`Provider\` សម្រាប់គ្រប់គ្រង State។
- ប្រើ \`ListView.builder\` សម្រាប់បញ្ជីថាមវន្ត។
- បន្ថែម \`dispose\` សម្រាប់ \`TextEditingController\`។
- ប្រើ \`Consumer\` ដើម្បីកំណត់ Rebuild Area។
- ប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបន្ថែម Todo Item</h3>
<p>ប្រើ <code>TextField</code> និង <code>Provider</code> ដើម្បីបន្ថែម Todo។</p>
<pre><code class="language-dart">
class TodoScreen extends StatelessWidget {
  final TextEditingController _controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Todo App')),
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
                        context.read<TodoModel>().addTodo(value);
                        _controller.clear();
                      }
                    },
                  ),
                ),
                const SizedBox(width: 8),
                ElevatedButton(
                  onPressed: () {
                    if (_controller.text.isNotEmpty) {
                      context.read<TodoModel>().addTodo(_controller.text);
                      _controller.clear();
                    }
                  },
                  child: const Text('បន្ថែម'),
                ),
              ],
            ),
          ),
          // ...
        ],
      ),
    );
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបង្ហាញបញ្ជី Todo</h3>
<p>ប្រើ <code>ListView.builder</code> និង <code>Consumer</code>។</p>
<pre><code class="language-dart">
Consumer<TodoModel>(
  builder: (context, todoModel, child) {
    return ListView.builder(
      itemCount: todoModel.todos.length,
      itemBuilder: (context, index) {
        return ListTile(
          title: Text(todoModel.todos[index]),
          trailing: IconButton(
            icon: const Icon(Icons.delete),
            onPressed: () => context.read<TodoModel>().removeTodo(index),
          ),
        );
      },
    );
  },
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ State Management ជាមួយ Provider</h3>
<p>បង្កើត <code>TodoModel</code> ដើម្បីគ្រប់គ្រងបញ្ជី Todo។</p>
<pre><code class="language-dart">
class TodoModel extends ChangeNotifier {
  final List<String> _todos = [];

  List<String> get todos => _todos;

  void addTodo(String todo) {
    _todos.add(todo);
    notifyListeners();
  }

  void removeTodo(int index) {
    _todos.removeAt(index);
    notifyListeners();
  }
}
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Todo App នៅក្នុងមេរៀននេះប្រើ Package អ្វីសម្រាប់ State Management?',
      options: [
        'Riverpod',
        'Provider',
        'BLoC',
        'Redux'
      ],
      correct: 1,
      explanation: 'Todo App ប្រើ `Provider` សម្រាប់គ្រប់គ្រង State។'
    },
    {
      question: 'តើ `ListView.builder` ជួយអ្វីក្នុង Todo App?',
      options: [
        'បង្កើត Animations',
        'Render Items តាមតម្រូវការ',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`ListView.builder` Render Items តាមតម្រូវការ ដើម្បីបង្កើន Performance។'
    },
    {
      question: 'តើ `TextField` នៅក្នុង Todo App ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'បញ្ចូល Todo Item ថ្មី',
        'លុប Todo Item',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`TextField` ប្រើសម្រាប់បញ្ចូល Todo Item ថ្មី។'
    },
    {
      question: 'តើ `Consumer` នៅក្នុង Provider ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'កំណត់ Rebuild Area',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`Consumer` កំណត់ Rebuild Area នៅពេល State ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ `ChangeNotifier` នៅក្នុង Provider ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'ជូនដំណឹងនៅពេល State ផ្លាស់ប្តូរ',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`ChangeNotifier` ជូនដំណឹងនៅពេល State ផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើការប្រើ `const` Constructor ជួយ Todo App ដោយរបៀបណា?',
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
      question: 'តើ Flutter DevTools ជួយអ្វីក្នុង Todo App?',
      options: [
        'បង្កើត Widget',
        'វិភាគ Widget Tree និង Performance',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Flutter DevTools វិភាគ Widget Tree, Frame Rendering, និង Memory Usage។'
    },
    {
      question: 'តើការបន្ថែម `dispose` Method ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'បញ្ឈប់ Resources ដូចជា TextEditingController',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`dispose` Method បញ្ឈប់ Resources ដើម្បីការពារ Memory Leaks។'
    },
    {
      question: 'តើ `ListTile` នៅក្នុង Todo App ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Animation',
        'បង្ហាញ Todo Item និង Delete Button',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`ListTile` បង្ហាញ Todo Item និង Delete Button។'
    },
    {
      question: 'តើការបំបែក Widgets តូចៗជួយ Todo App ដោយរបៀបណា?',
      options: [
        'បង្កើត Animation',
        'កាត់បន្ថយ Rebuild Area',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'ការបំបែក Widgets តូចៗកាត់បន្ថយ Rebuild Area។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter Todo App ដែលគ្រប់គ្រង State ដោយប្រើ Provider។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`TodoApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateless Widget មួយឈ្មោះ \`TodoScreen\` សម្រាប់បង្ហាញ UI។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Todo App"។

2. **State Management:**
   - បង្កើត \`ChangeNotifier\` Class ឈ្មោះ \`TodoModel\` ដែលគ្រប់គ្រងបញ្ជី Todo។
   - ប្រើ \`ChangeNotifierProvider\` និង \`Consumer\` ដើម្បីបន្ថែម និងលុប Todo Items។

3. **UI Requirements:**
   - បន្ថែម \`TextField\` សម្រាប់បញ្ចូល Todo Item ថ្មី។
   - បន្ថែម \`ElevatedButton\` សម្រាប់បញ្ជាក់ការបន្ថែម Todo។
   - បង្ហាញបញ្ជី Todo ដោយប្រើ \`ListView.builder\`។
   - បន្ថែម \`IconButton\` សម្រាប់លុប Todo Item។

4. **Performance Optimization:**
   - ប្រើ \`const\` Constructors សម្រាប់ Widgets ឋិតិវន្ត។
   - បន្ថែម \`dispose\` Method សម្រាប់ \`TextEditingController\`។

5. **Performance Testing:**
   - ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Widget Rebuilds។

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => TodoModel(),
      child: const TodoApp(),
    ),
  );
}

class TodoModel extends ChangeNotifier {
  final List<String> _todos = [];

  List<String> get todos => _todos;

  void addTodo(String todo) {
    _todos.add(todo);
    notifyListeners();
  }

  void removeTodo(int index) {
    _todos.removeAt(index);
    notifyListeners();
  }
}

class TodoApp extends StatelessWidget {
  const TodoApp({Key? key}) : super(key: key);

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
      appBar: AppBar(title: const Text('Todo App')),
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
                        context.read<TodoModel>().addTodo(value);
                        _controller.clear();
                      }
                    },
                  ),
                ),
                const SizedBox(width: 8),
                ElevatedButton(
                  onPressed: () {
                    if (_controller.text.isNotEmpty) {
                      context.read<TodoModel>().addTodo(_controller.text);
                      _controller.clear();
                    }
                  },
                  child: const Text('បន្ថែម'),
                ),
              ],
            ),
          ),
          Expanded(
            child: Consumer<TodoModel>(
              builder: (context, todoModel, child) {
                return ListView.builder(
                  itemCount: todoModel.todos.length,
                  itemBuilder: (context, index) {
                    return ListTile(
                      title: Text(todoModel.todos[index]),
                      trailing: IconButton(
                        icon: const Icon(Icons.delete),
                        onPressed: () => context.read<TodoModel>().removeTodo(index),
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

export default FlutterLesson7_1Content;