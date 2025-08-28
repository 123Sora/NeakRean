import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson11_1Content: LessonContent = {
  title: 'ការប្រើ Firebase Cloud Firestore ក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពី Firebase Cloud Firestore និងមុខងាររបស់វា',
    'ស្វែងយល់ពីរបៀបបន្ថែម Firebase ទៅក្នុង Flutter Project',
    'រៀនរក្សាទុក ទាញយក និងធ្វើបច្ចុប្បន្នភាពទិន្នន័យជាមួយ Firestore',
    'អនុវត្តន៍ការបង្កើត App ដែលប្រើ Firestore សម្រាប់ CRUD Operations',
    'ស្គាល់ការគ្រប់គ្រង Asynchronous Operations ជាមួយ Firestore',
    'រៀនបច្ចេកទេស Debugging នៅពេលធ្វើការជាមួយ Firestore',
    'ស្វែងយល់ពីការប្រើ Firebase Console ដើម្បីគ្រប់គ្រងទិន្នន័យ',
    'យល់ពីការបង្កើនប្រសិទ្ធភាព Performance និង Security នៅក្នុង Firestore'
  ],
  content: `
# ការប្រើ Firebase Cloud Firestore ក្នុង Flutter 🔥

---

**Firebase Cloud Firestore** គឺជា NoSQL Database ដែលអនុញ្ញាតឱ្យរក្សាទុក និងធ្វើសមកាលកម្មទិន្នន័យជាមួយ Real-time Updates។ នៅក្នុងមេរៀននេះ យើងនឹងបង្កើត Flutter App ដែលប្រើ Firestore សម្រាប់ CRUD (Create, Read, Update, Delete) Operations។

---

## 1. អ្វីទៅជា Firebase Cloud Firestore?

- **Firestore** គឺជា Cloud-based NoSQL Database ដែល៖
  - ផ្តល់ Real-time Data Synchronization។
  - គាំទ្រ Offline Mode។
  - ប្រើ Collections និង Documents សម្រាប់រក្សាទុកទិន្នន័យ។
  - ផ្តល់ Security Rules ដើម្បីការពារទិន្នន័យ។

---

## 2. ការដំឡើង Firebase ក្នុង Flutter

### 2.1 បន្ថែម Firebase ទៅ Project
1. **បង្កើត Firebase Project:**
   - ចូលទៅ Firebase Console (https://console.firebase.google.com/) ហើយបង្កើត Project ថ្មី។
   - បន្ថែម App (iOS/Android) ទៅ Firebase Project។

2. **បន្ថែម Firebase Packages:**
   បន្ថែម Packages ទៅ \`pubspec.yaml\`:

   \`\`\`yaml
   dependencies:
     firebase_core: ^2.24.0
     cloud_firestore: ^4.13.0
   \`\`\`

   ដំណើរការ Command: \`flutter pub get\`

3. **កំណត់ Firebase Configuration:**
   - ទាញយក \`google-services.json\` (Android) ឬ \`GoogleService-Info.plist\` (iOS) ពី Firebase Console។
   - ដាក់ File ទាំងនេះនៅក្នុង:
     - Android: \`android/app\`
     - iOS: \`ios/Runner\`
   - បន្ថែម Firebase Initialization នៅក្នុង \`main.dart\`:

   \`\`\`dart
   import 'package:firebase_core/firebase_core.dart';
   import 'firebase_options.dart';

   Future<void> main() async {
     WidgetsFlutterBinding.ensureInitialized();
     await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
     runApp(const NotesApp());
   }
   \`\`\`

4. **កំណត់ Android minSdkVersion:**
   នៅក្នុង \`android/app/build.gradle\`:

   \`\`\`gradle
   android {
       defaultConfig {
           minSdkVersion 19
       }
   }
   \`\`\`

---

## 3. ការប្រើ Firestore សម្រាប់ CRUD Operations

**ឧទាហរណ៍កូដ:** Notes App ដែលរក្សាទុក Notes នៅក្នុង Firestore។

\`\`\`dart
// lib/main.dart
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  runApp(const NotesApp());
}

class NotesApp extends StatelessWidget {
  const NotesApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: NotesScreen(),
    );
  }
}

class NotesScreen extends StatefulWidget {
  const NotesScreen({Key? key}) : super(key: key);

  @override
  _NotesScreenState createState() => _NotesScreenState();
}

class _NotesScreenState extends State<NotesScreen> {
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _contentController = TextEditingController();
  final CollectionReference _notes = FirebaseFirestore.instance.collection('notes');

  Future<void> _addNote() async {
    if (_titleController.text.isNotEmpty && _contentController.text.isNotEmpty) {
      await _notes.add({
        'title': _titleController.text.trim(),
        'content': _contentController.text.trim(),
        'timestamp': FieldValue.serverTimestamp(),
      });
      _titleController.clear();
      _contentController.clear();
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Note ត្រូវបានបន្ថែម!')),
      );
    }
  }

  Future<void> _updateNote(String id, String title, String content) async {
    await _notes.doc(id).update({
      'title': title,
      'content': content,
      'timestamp': FieldValue.serverTimestamp(),
    });
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Note ត្រូវបានធ្វើបច្ចុប្បន្នភាព!')),
    );
  }

  Future<void> _deleteNote(String id) async {
    await _notes.doc(id).delete();
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Note ត្រូវបានលុប!')),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Notes App')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _titleController,
              decoration: const InputDecoration(
                labelText: 'ចំណងជើង',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: _contentController,
              decoration: const InputDecoration(
                labelText: 'ខ្លឹមសារ',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: _addNote,
              child: const Text('បន្ថែម Note'),
            ),
            const SizedBox(height: 20),
            Expanded(
              child: StreamBuilder(
                stream: _notes.orderBy('timestamp', descending: true).snapshots(),
                builder: (context, AsyncSnapshot<QuerySnapshot> snapshot) {
                  if (!snapshot.hasData) {
                    return const Center(child: CircularProgressIndicator());
                  }
                  return ListView(
                    children: snapshot.data!.docs.map((doc) {
                      return ListTile(
                        title: Text(doc['title']),
                        subtitle: Text(doc['content']),
                        trailing: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            IconButton(
                              icon: const Icon(Icons.edit),
                              onPressed: () => _showUpdateDialog(doc.id, doc['title'], doc['content']),
                            ),
                            IconButton(
                              icon: const Icon(Icons.delete),
                              onPressed: () => _deleteNote(doc.id),
                            ),
                          ],
                        ),
                      );
                    }).toList(),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _showUpdateDialog(String id, String title, String content) {
    final updateTitleController = TextEditingController(text: title);
    final updateContentController = TextEditingController(text: content);

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('ធ្វើបច្ចុប្បន្នភាព Note'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: updateTitleController,
              decoration: const InputDecoration(labelText: 'ចំណងជើង'),
            ),
            TextField(
              controller: updateContentController,
              decoration: const InputDecoration(labelText: 'ខ្លឹមសារ'),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('បោះបង់'),
          ),
          TextButton(
            onPressed: () {
              _updateNote(id, updateTitleController.text.trim(), updateContentController.text.trim());
              Navigator.pop(context);
            },
            child: const Text('រក្សាទុក'),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    _titleController.dispose();
    _contentController.dispose();
    super.dispose();
  }
}
\`\`\`

**ការពន្យល់:**
- \`Firebase.initializeApp\`: ចាប់ផ្តើម Firebase។
- \`FirebaseFirestore.instance.collection\`: ចូលទៅ Collection នៅក្នុង Firestore។
- \`StreamBuilder\`: ធ្វើ Real-time Updates សម្រាប់ Notes List។
- \`FieldValue.serverTimestamp\`: បន្ថែម Timestamp សម្រាប់ Sorting។
- \`SnackBar\`: បង្ហាញ Feedback នៅពេល CRUD Operations។

---

## 4. ការគ្រប់គ្រង Firestore Security Rules

បន្ថែម Security Rules នៅក្នុង Firebase Console:

\`\`\`
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /notes/{noteId} {
      allow read, write: if request.auth != null;
    }
  }
}
\`\`\`

**ការពន្យល់:** អនុញ្ញាតឱ្យអាន និងសរសេរទិន្នន័យបានតែនៅពេល User បាន Login។

---

## 5. ការគ្រប់គ្រង Asynchronous Operations

- Firestore Operations គឺ Asynchronous ដូច្នេះត្រូវប្រើ \`async/await\`។
- ប្រើ \`StreamBuilder\` សម្រាប់ Real-time Data Updates។
- គ្រប់គ្រង Errors ដោយប្រើ \`try/catch\`:

\`\`\`dart
Future<void> _addNote() async {
  try {
    await _notes.add({...});
  } catch (e) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Error: $e')),
    );
  }
}
\`\`\`

---

## 6. ការបង្កើនប្រសិទ្ធភាព Performance និង Debugging

- **ប្រើ \`const\` Constructors:** កាត់បន្ថយ Widget Rebuilds។
- **ប្រើ Keys:** សម្គាល់ Widgets សម្រាប់ Testing។
- **Debugging:** ប្រើ Firebase Console និង \`print\` ដើម្បីតាមដាន Errors។
- **Performance:** ប្រើ \`StreamBuilder\` ដើម្បីកាត់បន្ថយ Network Calls។
- **ប្រើ Flutter DevTools:** វិភាគ Memory Usage និង Widget Tree។

---

## 7. ការប្រើ Firebase Console

- **Firestore Database:** ពិនិត្យ Collections និង Documents។
- **Security Rules:** កំណត់ Rules ដើម្បីការពារទិន្នន័យ។
- **Analytics:** តាមដាន App Usage។

---

## 8. គន្លឹះសម្រាប់ Firestore

- បន្ថែម Firebase ត្រឹមត្រូវជាមួយ \`google-services.json\` និង \`GoogleService-Info.plist\`។
- ប្រើ \`StreamBuilder\` សម្រាប់ Real-time Updates។
- កំណត់ Security Rules ដើម្បីការពារទិន្នន័យ។
- ប្រើ \`try/catch\` សម្រាប់ Error Handling។
- ប្រើ Flutter DevTools និង Firebase Console សម្រាប់ Debugging។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបន្ថែម Note</h3>
<p>បន្ថែម Note ទៅ Firestore។</p>
<pre><code class="language-dart">
Future<void> _addNote() async {
  await _notes.add({
    'title': _titleController.text.trim(),
    'content': _contentController.text.trim(),
    'timestamp': FieldValue.serverTimestamp(),
  });
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការទាញយក Notes ជាមួយ StreamBuilder</h3>
<p>ទាញយក Notes ជាមួយ Real-time Updates។</p>
<pre><code class="language-dart">
StreamBuilder(
  stream: _notes.orderBy('timestamp', descending: true).snapshots(),
  builder: (context, AsyncSnapshot<QuerySnapshot> snapshot) {
    if (!snapshot.hasData) {
      return const Center(child: CircularProgressIndicator());
    }
    return ListView(
      children: snapshot.data!.docs.map((doc) {
        return ListTile(
          title: Text(doc['title']),
          subtitle: Text(doc['content']),
        );
      }).toList(),
    );
  },
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការលុប Note</h3>
<p>លុប Note ពី Firestore។</p>
<pre><code class="language-dart">
Future<void> _deleteNote(String id) async {
  await _notes.doc(id).delete();
}
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Firebase Cloud Firestore ជាអ្វី?',
      options: [
        'SQL Database',
        'NoSQL Database ដែលផ្តល់ Real-time Updates',
        'Package សម្រាប់ Animations',
        'API Client'
      ],
      correct: 1,
      explanation: 'Firestore គឺជា NoSQL Database ដែលផ្តល់ Real-time Updates។'
    },
    {
      question: 'តើ Package អ្វីត្រូវបន្ថែមសម្រាប់ Firestore?',
      options: [
        'http',
        'cloud_firestore',
        'provider',
        'sqflite'
      ],
      correct: 1,
      explanation: '`cloud_firestore` Package ត្រូវបន្ថែមសម្រាប់ Firestore។'
    },
    {
      question: 'តើ `StreamBuilder` ប្រើសម្រាប់អ្វីនៅក្នុង Firestore?',
      options: [
        'បង្កើត Widget',
        'ធ្វើ Real-time Data Updates',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`StreamBuilder` ធ្វើ Real-time Data Updates នៅក្នុង UI។'
    },
    {
      question: 'តើ `FieldValue.serverTimestamp` ធ្វើអ្វី?',
      options: [
        'បង្កើត Animation',
        'បន្ថែម Timestamp សម្រាប់ Sorting',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`FieldValue.serverTimestamp` បន្ថែម Timestamp សម្រាប់ Sorting។'
    },
    {
      question: 'តើ Security Rules នៅក្នុង Firestore មានគោលបំណងអ្វី?',
      options: [
        'បង្កើត Widget',
        'ការពារទិន្នន័យ',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Security Rules ការពារទិន្នន័យនៅក្នុង Firestore។'
    },
    {
      question: 'តើ Command អ្វីប្រើដើម្បីទាញ Packages?',
      options: [
        'flutter run',
        'flutter pub get',
        'flutter build',
        'flutter clean'
      ],
      correct: 1,
      explanation: '`flutter pub get` ប្រើដើម្បីទាញ Packages។'
    },
    {
      question: 'តើ Flutter DevTools ជួយអ្វីនៅក្នុង Firestore App?',
      options: [
        'បង្កើត Widget',
        'វិភាគ Memory Usage និង Performance',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Flutter DevTools វិភាគ Memory Usage និង Widget Tree។'
    },
    {
      question: 'តើ `try/catch` នៅក្នុង Firestore ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'គ្រប់គ្រង Errors',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`try/catch` គ្រប់គ្រង Errors នៅក្នុង Firestore Operations។'
    },
    {
      question: 'តើ Firebase Console ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'គ្រប់គ្រង Collections និង Security Rules',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Firebase Console គ្រប់គ្រង Collections និង Security Rules។'
    },
    {
      question: 'តើ `const` Constructor ជួយ Firestore App ដោយរបៀបណា?',
      options: [
        'បង្កើត Animation',
        'កាត់បន្ថយ Widget Rebuilds',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`const` Constructor កាត់បន្ថយ Widget Rebuilds។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ Firebase Cloud Firestore សម្រាប់ Notes App។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`NotesApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`NotesScreen\` សម្រាប់បង្ហាញ UI។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Notes App"។

2. **Firebase Setup:**
   - បន្ថែម \`firebase_core\` និង \`cloud_firestore\` Packages ទៅ \`pubspec.yaml\`។
   - កំណត់ Firebase ជាមួយ \`google-services.json\` (Android) និង \`GoogleService-Info.plist\` (iOS)។
   - ចាប់ផ្តើម Firebase នៅក្នុង \`main.dart\`។

3. **CRUD Functionality:**
   - បន្ថែម \`TextField\` ពីរសម្រាប់ Title និង Content។
   - បន្ថែម \`ElevatedButton\` សម្រាប់បន្ថែម Note។
   - បង្ហាញ Notes ជាមួយ \`StreamBuilder\` និង \`ListView\`។
   - បន្ថែម Edit និង Delete Buttons សម្រាប់កែ និងលុប Notes។

4. **Performance Optimization:**
   - ប្រើ \`const\` Constructors សម្រាប់ Widgets ឋិតិវន្ត។
   - ប្រើ \`.trim()\` ដើម្បីការពារ Input Errors។
   - ប្រើ \`SnackBar\` ដើម្បីបង្ហាញ Feedback។
   - ប្រើ \`try/catch\` សម្រាប់ Error Handling។

5. **Performance Testing:**
   - ប្រើ Firebase Console ដើម្បីពិនិត្យ Collections និង Documents។
   - ប្រើ Flutter DevTools ដើម្បីវិភាគ Widget Tree និង Memory Usage។

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងឧបករណ៍ពិត និងប្រើ Firebase Console និង Flutter DevTools សម្រាប់ Debugging។
    `,
    solution: `
\`\`\`dart
// lib/main.dart
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  runApp(const NotesApp());
}

class NotesApp extends StatelessWidget {
  const NotesApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: NotesScreen(),
    );
  }
}

class NotesScreen extends StatefulWidget {
  const NotesScreen({Key? key}) : super(key: key);

  @override
  _NotesScreenState createState() => _NotesScreenState();
}

class _NotesScreenState extends State<NotesScreen> {
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _contentController = TextEditingController();
  final CollectionReference _notes = FirebaseFirestore.instance.collection('notes');

  Future<void> _addNote() async {
    try {
      if (_titleController.text.isNotEmpty && _contentController.text.isNotEmpty) {
        await _notes.add({
          'title': _titleController.text.trim(),
          'content': _contentController.text.trim(),
          'timestamp': FieldValue.serverTimestamp(),
        });
        _titleController.clear();
        _contentController.clear();
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Note ត្រូវបានបន្ថែម!')),
        );
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error: $e')),
      );
    }
  }

  Future<void> _updateNote(String id, String title, String content) async {
    try {
      await _notes.doc(id).update({
        'title': title,
        'content': content,
        'timestamp': FieldValue.serverTimestamp(),
      });
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Note ត្រូវបានធ្វើបច្ចុប្បន្នភាព!')),
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error: $e')),
      );
    }
  }

  Future<void> _deleteNote(String id) async {
    try {
      await _notes.doc(id).delete();
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Note ត្រូវបានលុប!')),
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Notes App')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _titleController,
              decoration: const InputDecoration(
                labelText: 'ចំណងជើង',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: _contentController,
              decoration: const InputDecoration(
                labelText: 'ខ្លឹមសារ',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: _addNote,
              child: const Text('បន្ថែម Note'),
            ),
            const SizedBox(height: 20),
            Expanded(
              child: StreamBuilder(
                stream: _notes.orderBy('timestamp', descending: true).snapshots(),
                builder: (context, AsyncSnapshot<QuerySnapshot> snapshot) {
                  if (!snapshot.hasData) {
                    return const Center(child: CircularProgressIndicator());
                  }
                  return ListView(
                    children: snapshot.data!.docs.map((doc) {
                      return ListTile(
                        title: Text(doc['title']),
                        subtitle: Text(doc['content']),
                        trailing: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            IconButton(
                              icon: const Icon(Icons.edit),
                              onPressed: () => _showUpdateDialog(doc.id, doc['title'], doc['content']),
                            ),
                            IconButton(
                              icon: const Icon(Icons.delete),
                              onPressed: () => _deleteNote(doc.id),
                            ),
                          ],
                        ),
                      );
                    }).toList(),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _showUpdateDialog(String id, String title, String content) {
    final updateTitleController = TextEditingController(text: title);
    final updateContentController = TextEditingController(text: content);

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('ធ្វើបច្ចុប្បន្នភាព Note'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: updateTitleController,
              decoration: const InputDecoration(labelText: 'ចំណងជើង'),
            ),
            TextField(
              controller: updateContentController,
              decoration: const InputDecoration(labelText: 'ខ្លឹមសារ'),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('បោះបង់'),
          ),
          TextButton(
            onPressed: () {
              _updateNote(id, updateTitleController.text.trim(), updateContentController.text.trim());
              Navigator.pop(context);
            },
            child: const Text('រក្សាទុក'),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    _titleController.dispose();
    _contentController.dispose();
    super.dispose();
  }
}
\`\`\`
`
  }
};

export default FlutterLesson11_1Content;