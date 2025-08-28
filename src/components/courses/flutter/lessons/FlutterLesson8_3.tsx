import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson8_3Content: LessonContent = {
  title: 'ការប្រើ SQLite Database ក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ SQLite Database នៅក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបប្រើ SQLite សម្រាប់រក្សាទុកទិន្នន័យស្មុគស្មាញ',
    'រៀនបង្កើត Database និង Table សម្រាប់រក្សាទុក Todo Items',
    'អនុវត្តន៍ CRUD Operations (Create, Read, Update, Delete) ជាមួយ SQLite',
    'ស្គាល់ការប្រើ Package `sqflite` សម្រាប់ធ្វើការជាមួយ SQLite',
    'យល់ពីការគ្រប់គ្រង Asynchronous Operations ជាមួយ SQLite',
    'រៀនបច្ចេកទេសការពារ Performance នៅពេលប្រើ SQLite',
    'ស្វែងយល់ពីការប្រើ Flutter DevTools ដើម្បីវិភាគ App'
  ],
  content: `
# ការប្រើ SQLite Database ក្នុង Flutter 🗄️

---

**SQLite** គឺជា Relational Database ដែលស្រាល និងបង្កប់នៅក្នុងឧបករណ៍ ស័ក្តិសមសម្រាប់រក្សាទុកទិន្នន័យស្មុគស្មាញ។ នៅក្នុងមេរៀននេះ យើងនឹងបង្កើត Todo App ដែលប្រើ SQLite សម្រាប់រក្សាទុក Todo Items ដោយអនុវត្តន៍ CRUD Operations។

---

## 1. អ្វីទៅជា SQLite?

**SQLite** គឺជា Local Relational Database ដែល៖
- រក្សាទុកទិន្នន័យជា Tables ជាមួយ Columns និង Rows។
- គាំទ្រទិន្នន័យស្មុគស្មាញ និង SQL Queries។
- លឿន និងមិនតម្រូវការ Server។

---

## 2. ការដំឡើង SQLite

បន្ថែម \`sqflite\` និង \`path\` Packages ទៅ \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  sqflite: ^2.3.0
  path: ^1.8.3
\`\`\`

ដំណើរការ Command: \`flutter pub get\`

---

## 3. ការបង្កើត Database និង Table

### 3.1 បង្កើត Database Helper
បង្កើត Class \`DatabaseHelper\` សម្រាប់គ្រប់គ្រង Database និង CRUD Operations។

**ឧទាហរណ៍កូដ:**

\`\`\`dart
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class DatabaseHelper {
  static final DatabaseHelper instance = DatabaseHelper._init();
  static Database? _database;

  DatabaseHelper._init();

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB('todos.db');
    return _database!;
  }

  Future<Database> _initDB(String fileName) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, fileName);

    return await openDatabase(path, version: 1, onCreate: _createDB);
  }

  Future _createDB(Database db, int version) async {
    await db.execute('''
      CREATE TABLE todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        isCompleted INTEGER NOT NULL
      )
    ''');
  }

  Future<void> insertTodo(Todo todo) async {
    final db = await database;
    await db.insert('todos', todo.toMap());
  }

  Future<List<Todo>> getTodos() async {
    final db = await database;
    final result = await db.query('todos');
    return result.map((json) => Todo.fromMap(json)).toList();
  }

  Future<void> updateTodo(Todo todo) async {
    final db = await database;
    await db.update(
      'todos',
      todo.toMap(),
      where: 'id = ?',
      whereArgs: [todo.id],
    );
  }

  Future<void> deleteTodo(int id) async {
    final db = await database;
    await db.delete('todos', where: 'id = ?', whereArgs: [id]);
  }

  Future<void> close() async {
    final db = await database;
    db.close();
  }
}

class Todo {
  final int? id;
  final String title;
  final bool isCompleted;

  Todo({this.id, required this.title, this.isCompleted = false});

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'title': title,
      'isCompleted': isCompleted ? 1 : 0,
    };
  }

  factory Todo.fromMap(Map<String, dynamic> map) {
    return Todo(
      id: map['id'],
      title: map['title'],
      isCompleted: map['isCompleted'] == 1,
    );
  }
}
\`\`\`

---

## 4. ការបង្កើត Todo App ជាមួយ SQLite

**ឧទាហរណ៍កូដ:**

\`\`\`dart
import 'package:flutter/material.dart';
import 'database_helper.dart';

void main() {
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

class TodoScreen extends StatefulWidget {
  const TodoScreen({Key? key}) : super(key: key);

  @override
  _TodoScreenState createState() => _TodoScreenState();
}

class _TodoScreenState extends State<TodoScreen> {
  final TextEditingController _controller = TextEditingController();
  final DatabaseHelper _dbHelper = DatabaseHelper.instance;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('SQLite Todo App')),
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
                  ),
                ),
                const SizedBox(width: 8),
                ElevatedButton(
                  onPressed: () async {
                    if (_controller.text.isNotEmpty) {
                      await _dbHelper.insertTodo(Todo(title: _controller.text));
                      _controller.clear();
                      setState(() {});
                    }
                  },
                  child: const Text('បន្ថែម'),
                ),
              ],
            ),
          ),
          Expanded(
            child: FutureBuilder<List<Todo>>(
              future: _dbHelper.getTodos(),
              builder: (context, snapshot) {
                if (!snapshot.hasData) {
                  return const Center(child: CircularProgressIndicator());
                }
                final todos = snapshot.data!;
                return ListView.builder(
                  itemCount: todos.length,
                  itemBuilder: (context, index) {
                    final todo = todos[index];
                    return ListTile(
                      title: Text(todo.title),
                      trailing: IconButton(
                        icon: const Icon(Icons.delete),
                        onPressed: () async {
                          await _dbHelper.deleteTodo(todo.id!);
                          setState(() {});
                        },
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

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}
\`\`\`

**លទ្ធផល:** App អនុញ្ញាតឱ្យបន្ថែម និងលុប Todo Items ដោយរក្សាទុកទិន្នន័យនៅក្នុង SQLite Database។

---

## 5. ការគ្រប់គ្រង Asynchronous Operations

- SQLite ប្រើ \`async/await\` សម្រាប់ការងារជាមួយ Database។
- ប្រើ \`FutureBuilder\` ដើម្បីធ្វើបច្ចុប្បន្នភាព UI នៅពេលទាញយកទិន្នន័យ។

---

## 6. ការបង្កើនប្រសិទ្ធភាព Performance

- **ប្រើ \`const\` Constructors:** កាត់បន្ថយ Widget Rebuilds។
- **ប្រើ \`FutureBuilder\`:** កំណត់ Rebuild Area។
- **បិទ Database:** ប្រើ \`close()\` Method នៅពេលមិនប្រើ។
- **កាត់បន្ថយ Queries:** ប្រើ Queries ដែលមានប្រសិទ្ធភាព។
- **ប្រើ Flutter DevTools:** វិភាគ Memory Usage និង Performance។

---

## 7. ការប្រើ Flutter DevTools

- **Memory Tab:** តាមដាន Memory Usage នៅពេលប្រើ SQLite។
- **Performance Tab:** វិភាគ Frame Rendering Time។
- **Widget Inspector:** ពិនិត្យ Widget Tree និង Rebuilds។

**ការបើក DevTools:**
- ដំណើរការ \`flutter run --profile\` ឬបើក DevTools នៅក្នុង IDE។

---

## 8. គន្លឹះសម្រាប់ SQLite

- ប្រើ SQLite សម្រាប់ទិន្នន័យស្មុគស្មាញ។
- ប្រើ \`sqflite\` Package សម្រាប់គ្រប់គ្រង Database។
- ប្រើ \`FutureBuilder\` សម្រាប់ UI Updates។
- បិទ Database នៅពេលមិនប្រើ។
- ប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបង្កើត Database Helper</h3>
<p>បង្កើត Class សម្រាប់គ្រប់គ្រង SQLite Database។</p>
<pre><code class="language-dart">
class DatabaseHelper {
  static final DatabaseHelper instance = DatabaseHelper._init();
  static Database? _database;

  DatabaseHelper._init();

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB('todos.db');
    return _database!;
  }

  Future<Database> _initDB(String fileName) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, fileName);
    return await openDatabase(path, version: 1, onCreate: _createDB);
  }

  Future _createDB(Database db, int version) async {
    await db.execute('''
      CREATE TABLE todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        isCompleted INTEGER NOT NULL
      )
    ''');
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបន្ថែម Todo</h3>
<p>បន្ថែម Todo Item ទៅ SQLite Database។</p>
<pre><code class="language-dart">
Future<void> insertTodo(Todo todo) async {
  final db = await database;
  await db.insert('todos', todo.toMap());
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបង្ហាញ Todos</h3>
<p>ប្រើ <code>FutureBuilder</code> ដើម្បីបង្ហាញ Todos។</p>
<pre><code class="language-dart">
FutureBuilder<List<Todo>>(
  future: _dbHelper.getTodos(),
  builder: (context, snapshot) {
    if (!snapshot.hasData) {
      return const Center(child: CircularProgressIndicator());
    }
    final todos = snapshot.data!;
    return ListView.builder(
      itemCount: todos.length,
      itemBuilder: (context, index) {
        final todo = todos[index];
        return ListTile(
          title: Text(todo.title),
          trailing: IconButton(
            icon: const Icon(Icons.delete),
            onPressed: () async {
              await _dbHelper.deleteTodo(todo.id!);
              setState(() {});
            },
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
      question: 'តើ SQLite Database ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុកទិន្នន័យសាមញ្ញ',
        'រក្សាទុកទិន្នន័យស្មុគស្មាញជា Tables',
        'បង្កើត Animations',
        'ទាញទិន្នន័យពី API'
      ],
      correct: 1,
      explanation: 'SQLite ប្រើសម្រាប់រក្សាទុកទិន្នន័យស្មុគស្មាញជា Tables។'
    },
    {
      question: 'តើ Package អ្វីត្រូវបន្ថែមទៅ `pubspec.yaml` សម្រាប់ SQLite?',
      options: [
        'http',
        'provider',
        'sqflite',
        'hive'
      ],
      correct: 2,
      explanation: '`sqflite` Package ត្រូវបន្ថែមសម្រាប់ SQLite Database។'
    },
    {
      question: 'តើ Method អ្វីប្រើសម្រាប់បើក SQLite Database?',
      options: [
        'openDatabase()',
        'createDatabase()',
        'initDatabase()',
        'getDatabase()'
      ],
      correct: 0,
      explanation: '`openDatabase()` ប្រើសម្រាប់បើក SQLite Database។'
    },
    {
      question: 'តើ `FutureBuilder` នៅក្នុង SQLite App ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'ធ្វើបច្ចុប្បន្នភាព UI នៅពេលទាញទិន្នន័យ',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`FutureBuilder` ធ្វើបច្ចុប្បន្នភាព UI នៅពេលទាញទិន្នន័យ។'
    },
    {
      question: 'តើការប្រើ `const` Constructor ជួយ SQLite App ដោយរបៀបណា?',
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
      question: 'តើ Flutter DevTools ជួយអ្វីនៅក្នុង SQLite App?',
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
      question: 'តើ Method អ្វីប្រើសម្រាប់បន្ថែម Todo ទៅ SQLite Database?',
      options: [
        'add()',
        'insert()',
        'update()',
        'delete()'
      ],
      correct: 1,
      explanation: '`insert()` ប្រើសម្រាប់បន្ថែម Todo ទៅ SQLite Database�।'
    },
    {
      question: 'តើការបិទ Database នៅក្នុង SQLite ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'កាត់បន្ថយ Memory Usage',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'ការបិទ Database កាត់បន្ថយ Memory Usage។'
    },
    {
      question: 'តើ `Todo.fromMap` ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'បម្លែង Map ទៅជា Todo Object',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`Todo.fromMap` បម្លែង Map ទៅជា Todo Object។'
    },
    {
      question: 'តើការកាត់បន្ថយ Queries នៅក្នុង SQLite ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'បង្កើន Performance',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'ការកាត់បន្ថយ Queries បង្កើន Performance នៃ App។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter Todo App ដែលប្រើ SQLite Database ដើម្បីរក្សាទុក Todo Items។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`SQLiteApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`TodoScreen\` សម្រាប់បង្ហាញ UI។
   - បន្ថែម \`AppBar\` ជាមួយ Title "SQLite Todo App"។

2. **SQLite Setup:**
   - បង្កើត \`DatabaseHelper\` Class សម្រាប់គ្រប់គ្រង Database។
   - បង្កើត Table \`todos\` ជាមួយ Columns: \`id\`, \`title\`, \`isCompleted\`។

3. **Todo Functionality:**
   - បន្ថែម \`TextField\` សម្រាប់បញ្ចូល Todo Item ថ្មី។
   - បន្ថែម \`ElevatedButton\` សម្រាប់បញ្ជាក់ការបន្ថែម Todo។
   - បង្ហាញបញ្ជី Todo ដោយប្រើ \`FutureBuilder\` និង \`ListView.builder\`។
   - បន្ថែម \`IconButton\` សម្រាប់លុប Todo Item�।

4. **Performance Optimization:**
   - ប្រើ \`const\` Constructors សម្រាប់ Widgets ឋិតិវន្ត។
   - ប្រើ \`FutureBuilder\` ដើម្បីកំណត់ Rebuild Area។
   - បិទ Database នៅពេលមិនប្រើ។

5. **Performance Testing:**
   - ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Widget Rebuilds និង Memory Usage។

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងឧបករណ៍ពិត និងប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។
    `,
    solution: `
\`\`\`dart
// database_helper.dart
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class DatabaseHelper {
  static final DatabaseHelper instance = DatabaseHelper._init();
  static Database? _database;

  DatabaseHelper._init();

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB('todos.db');
    return _database!;
  }

  Future<Database> _initDB(String fileName) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, fileName);
    return await openDatabase(path, version: 1, onCreate: _createDB);
  }

  Future _createDB(Database db, int version) async {
    await db.execute('''
      CREATE TABLE todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        isCompleted INTEGER NOT NULL
      )
    ''');
  }

  Future<void> insertTodo(Todo todo) async {
    final db = await database;
    await db.insert('todos', todo.toMap());
  }

  Future<List<Todo>> getTodos() async {
    final db = await database;
    final result = await db.query('todos');
    return result.map((json) => Todo.fromMap(json)).toList();
  }

  Future<void> deleteTodo(int id) async {
    final db = await database;
    await db.delete('todos', where: 'id = ?', whereArgs: [id]);
  }

  Future<void> close() async {
    final db = await database;
    db.close();
  }
}

class Todo {
  final int? id;
  final String title;
  final bool isCompleted;

  Todo({this.id, required this.title, this.isCompleted = false});

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'title': title,
      'isCompleted': isCompleted ? 1 : 0,
    };
  }

  factory Todo.fromMap(Map<String, dynamic> map) {
    return Todo(
      id: map['id'],
      title: map['title'],
      isCompleted: map['isCompleted'] == 1,
    );
  }
}

// main.dart
import 'package:flutter/material.dart';
import 'database_helper.dart';

void main() {
  runApp(const SQLiteApp());
}

class SQLiteApp extends StatelessWidget {
  const SQLiteApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: TodoScreen(),
    );
  }
}

class TodoScreen extends StatefulWidget {
  const TodoScreen({Key? key}) : super(key: key);

  @override
  _TodoScreenState createState() => _TodoScreenState();
}

class _TodoScreenState extends State<TodoScreen> {
  final TextEditingController _controller = TextEditingController();
  final DatabaseHelper _dbHelper = DatabaseHelper.instance;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('SQLite Todo App')),
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
                  ),
                ),
                const SizedBox(width: 8),
                ElevatedButton(
                  onPressed: () async {
                    if (_controller.text.isNotEmpty) {
                      await _dbHelper.insertTodo(Todo(title: _controller.text));
                      _controller.clear();
                      setState(() {});
                    }
                  },
                  child: const Text('បន្ថែម'),
                ),
              ],
            ),
          ),
          Expanded(
            child: FutureBuilder<List<Todo>>(
              future: _dbHelper.getTodos(),
              builder: (context, snapshot) {
                if (!snapshot.hasData) {
                  return const Center(child: CircularProgressIndicator());
                }
                final todos = snapshot.data!;
                return ListView.builder(
                  itemCount: todos.length,
                  itemBuilder: (context, index) {
                    final todo = todos[index];
                    return ListTile(
                      title: Text(todo.title),
                      trailing: IconButton(
                        icon: const Icon(Icons.delete),
                        onPressed: () async {
                          await _dbHelper.deleteTodo(todo.id!);
                          setState(() {});
                        },
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

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}
\`\`\`
`
  }
};

export default FlutterLesson8_3Content;