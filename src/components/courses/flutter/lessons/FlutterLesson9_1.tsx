import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson9_1Content: LessonContent = {
  title: 'ការប្រើ Firebase Authentication ក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Firebase Authentication',
    'ស្វែងយល់ពីរបៀបប្រើ Firebase Authentication សម្រាប់ Email/Password Login',
    'រៀនកំណត់ Firebase នៅក្នុង Flutter Project',
    'អនុវត្តន៍ការបង្កើត Login/Register Screen ជាមួយ Firebase',
    'ស្គាល់ការគ្រប់គ្រង User Session និង Sign-Out',
    'យល់ពីការប្រើ Asynchronous Operations ជាមួយ Firebase',
    'រៀនបច្ចេកទេសការពារ Security នៅពេលប្រើ Firebase Authentication',
    'ស្វែងយល់ពីការប្រើ Flutter DevTools ដើម្បីវិភាគ App'
  ],
  content: `
# ការប្រើ Firebase Authentication ក្នុង Flutter 🔒

---

**Firebase Authentication** គឺជាសេវាកម្មរបស់ Firebase ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ធ្វើការចូល (Login) និងចុះឈ្មោះ (Register) ដោយប្រើ Email/Password ឬវិធីសាស្ត្រផ្សេងទៀត។ នៅក្នុងមេរៀននេះ យើងនឹងបង្កើត App ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ចូល និងចុះឈ្មោះដោយប្រើ Email/Password។

---

## 1. អ្វីទៅជា Firebase Authentication?

**Firebase Authentication** គឺជាសេវាកម្មដែលផ្តល់៖
- ការគ្រប់គ្រងអ្នកប្រើប្រាស់ (User Management)។
- វិធីសាស្ត្រចូលជាច្រើន (Email/Password, Social Logins, Anonymous, ជាដើម)។
- សុវត្ថិភាព និងភាពងាយស្រួលក្នុងការប្រើប្រាស់។

---

## 2. ការដំឡើង Firebase

### 2.1 បន្ថែម Firebase ទៅ Flutter Project
1. បង្កើត Project នៅក្នុង [Firebase Console](https://console.firebase.google.com/)។
2. បន្ថែម Android និង iOS Apps ទៅ Firebase Project។
3. ទាញយក File \`google-services.json\` (Android) និង \`GoogleService-Info.plist\` (iOS)។
4. ដាក់ File ទាំងនេះនៅក្នុង៖
   - Android: \`android/app\`
   - iOS: \`ios/Runner\`
5. បន្ថែម Firebase Packages ទៅ \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  firebase_core: ^2.15.0
  firebase_auth: ^4.7.0
\`\`\`

6. កែ File \`android/build.gradle\`:
   - បន្ថែម \`classpath 'com.google.gms:google-services:4.3.15'\` នៅក្នុង \`dependencies\`។
7. កែ File \`android/app/build.gradle\`:
   - បន្ថែម \`apply plugin: 'com.google.gms.google-services'\`។
8. ដំណើរការ Command: \`flutter pub get\`

### 2.2 ចាប់ផ្តើម Firebase
- ចាប់ផ្តើម Firebase នៅក្នុង \`main.dart\`:

\`\`\`dart
import 'package:firebase_core/firebase_core.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const MyApp());
}
\`\`\`

---

## 3. ការបង្កើត Login/Register Screen

**ឧទាហរណ៍កូដ:**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: AuthScreen(),
    );
  }
}

class AuthScreen extends StatefulWidget {
  const AuthScreen({Key? key}) : super(key: key);

  @override
  _AuthScreenState createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool _isLogin = true;

  Future<void> _authAction() async {
    try {
      if (_isLogin) {
        await _auth.signInWithEmailAndPassword(
          email: _emailController.text.trim(),
          password: _passwordController.text.trim(),
        );
      } else {
        await _auth.createUserWithEmailAndPassword(
          email: _emailController.text.trim(),
          password: _passwordController.text.trim(),
        );
      }
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const HomeScreen()),
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
      appBar: AppBar(title: Text(_isLogin ? 'ចូល' : 'ចុះឈ្មោះ')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: _emailController,
              decoration: const InputDecoration(
                labelText: 'អ៊ីម៉ែល',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: _passwordController,
              decoration: const InputDecoration(
                labelText: 'លេខសម្ងាត់',
                border: OutlineInputBorder(),
              ),
              obscureText: true,
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: _authAction,
              child: Text(_isLogin ? 'ចូល' : 'ចុះឈ្មោះ'),
            ),
            TextButton(
              onPressed: () {
                setState(() {
                  _isLogin = !_isLogin;
                });
              },
              child: Text(_isLogin ? 'ចុះឈ្មោះ' : 'ចូល'),
            ),
          ],
        ),
      ),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('ផ្ទាំងគ្រប់គ្រង'),
        actions: [
          IconButton(
            icon: const Icon(Icons.logout),
            onPressed: () async {
              await FirebaseAuth.instance.signOut();
              Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) => const AuthScreen()),
              );
            },
          ),
        ],
      ),
      body: const Center(child: Text('សូមស្វាគមន៍!')),
    );
  }
}
\`\`\`

**លទ្ធផល:** App អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ចុះឈ្មោះ ចូល និងចាកចេញដោយប្រើ Firebase Authentication។

---

## 4. ការគ្រប់គ្រង User Session

- ប្រើ \`FirebaseAuth.instance.currentUser\` ដើម្បីពិនិត្យអ្នកប្រើប្រាស់បច្ចុប្បន្ន។
- ប្រើ \`FirebaseAuth.instance.authStateChanges()\` ដើម្បីតាមដានការផ្លាស់ប្តូរស្ថានភាព Authentication។

---

## 5. ការបង្កើនប្រសិទ្ធភាព Performance និង Security

- **ប្រើ \`const\` Constructors:** កាត់បន្ថយ Widget Rebuilds។
- **ការពារ Input:** ប្រើ \`.trim()\` ដើម្បីលុបចោល Spaces នៅក្នុង Email/Password។
- **ការគ្រប់គ្រង Error:** បង្ហាញ Error Messages ដោយប្រើ \`SnackBar\`។
- **ប្រើ Flutter DevTools:** វិភាគ Memory Usage និង Performance។

---

## 6. ការប្រើ Flutter DevTools

- **Memory Tab:** តាមដាន Memory Usage នៅពេលប្រើ Firebase។
- **Performance Tab:** វិភាគ Frame Rendering Time។
- **Widget Inspector:** ពិនិត្យ Widget Tree និង Rebuilds។

**ការបើក DevTools:**
- ដំណើរការ \`flutter run --profile\` ឬបើក DevTools នៅក្នុង IDE។

---

## 7. គន្លឹះសម្រាប់ Firebase Authentication

- បន្ថែម Firebase ដោយប្រុងប្រយ័ត្ន ដោយធ្វើតាមជំហាននៅក្នុង Firebase Console។
- ប្រើ \`async/await\` សម្រាប់ Asynchronous Operations។
- ការពារ Input និងគ្រប់គ្រង Errors។
- ប្រើ \`StreamBuilder\` ឬ \`FutureBuilder\` សម្រាប់ UI Updates។
- ប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការចុះឈ្មោះអ្នកប្រើប្រាស់</h3>
<p>ប្រើ Firebase Authentication ដើម្បីចុះឈ្មោះអ្នកប្រើប្រាស់។</p>
<pre><code class="language-dart">
await FirebaseAuth.instance.createUserWithEmailAndPassword(
  email: _emailController.text.trim(),
  password: _passwordController.text.trim(),
);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការចូលអ្នកប្រើប្រាស់</h3>
<p>ប្រើ Firebase Authentication ដើម្បីចូលអ្នកប្រើប្រាស់។</p>
<pre><code class="language-dart">
await FirebaseAuth.instance.signInWithEmailAndPassword(
  email: _emailController.text.trim(),
  password: _passwordController.text.trim(),
);
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការចាកចេញ</h3>
<p>ប្រើ Firebase Authentication ដើម្បីចាកចេញ។</p>
<pre><code class="language-dart">
await FirebaseAuth.instance.signOut();
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Firebase Authentication ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុកទិន្នន័យ',
        'គ្រប់គ្រងអ្នកប្រើប្រាស់ និង Login',
        'បង្កើត Animations',
        'ទាញទិន្នន័យពី API'
      ],
      correct: 1,
      explanation: 'Firebase Authentication ប្រើសម្រាប់គ្រប់គ្រងអ្នកប្រើប្រាស់ និង Login។'
    },
    {
      question: 'តើ Package អ្វីត្រូវបន្ថែមទៅ `pubspec.yaml` សម្រាប់ Firebase Authentication?',
      options: [
        'http',
        'firebase_auth',
        'provider',
        'sqflite'
      ],
      correct: 1,
      explanation: '`firebase_auth` Package ត្រូវបន្ថែមសម្រាប់ Firebase Authentication។'
    },
    {
      question: 'តើ File អ្វីត្រូវដាក់នៅក្នុង `android/app` សម្រាប់ Firebase?',
      options: [
        'GoogleService-Info.plist',
        'google-services.json',
        'pubspec.yaml',
        'build.gradle'
      ],
      correct: 1,
      explanation: '`google-services.json` ត្រូវដាក់នៅក្នុង `android/app`។'
    },
    {
      question: 'តើ Method អ្វីប្រើសម្រាប់ចុះឈ្មោះអ្នកប្រើប្រាស់?',
      options: [
        'signInWithEmailAndPassword',
        'createUserWithEmailAndPassword',
        'signOut',
        'authStateChanges'
      ],
      correct: 1,
      explanation: '`createUserWithEmailAndPassword` ប្រើសម្រាប់ចុះឈ្មោះអ្នកប្រើប្រាស់។'
    },
    {
      question: 'តើ `FirebaseAuth.instance.currentUser` ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'ទាញព័ត៌មានអ្នកប្រើប្រាស់បច្ចុប្បន្ន',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`FirebaseAuth.instance.currentUser` ទាញព័ត៌មានអ្នកប្រើប្រាស់បច្ចុប្បន្ន។'
    },
    {
      question: 'តើការប្រើ `const` Constructor ជួយ Firebase App ដោយរបៀបណា?',
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
      question: 'តើ Flutter DevTools ជួយអ្វីនៅក្នុង Firebase App?',
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
      question: 'តើ Method អ្វីប្រើសម្រាប់ចាកចេញពី Firebase Authentication?',
      options: [
        'signInWithEmailAndPassword',
        'createUserWithEmailAndPassword',
        'signOut',
        'authStateChanges'
      ],
      correct: 2,
      explanation: '`signOut` ប្រើសម្រាប់ចាកចេញ។'
    },
    {
      question: 'តើការប្រើ `.trim()` នៅក្នុង Email/Password ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'ការពារ Input Errors',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`.trim()` លុប Spaces ដើម្បីការពារ Input Errors។'
    },
    {
      question: 'តើ `StreamBuilder` នៅក្នុង Firebase Authentication ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'ធ្វើបច្ចុប្បន្នភាព UI នៅពេល Authentication State ផ្លាស់ប្តូរ',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`StreamBuilder` ធ្វើបច្ចុប្បន្នភាព UI នៅពេល Authentication State ផ្លាស់ប្តូរ។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ Firebase Authentication សម្រាប់ Email/Password Login និង Register។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`FirebaseAuthApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`AuthScreen\` សម្រាប់បង្ហាញ Login/Register UI។
   - បង្កើត Stateless Widget មួយឈ្មោះ \`HomeScreen\` សម្រាប់បង្ហាញបន្ទាប់ពី Login។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Firebase Auth App"។

2. **Firebase Setup:**
   - បន្ថែម \`firebase_core\` និង \`firebase_auth\` Packages ទៅ \`pubspec.yaml\`។
   - កំណត់ Firebase នៅក្នុង Firebase Console និងបន្ថែម Configuration Files។
   - ចាប់ផ្តើម Firebase នៅក្នុង \`main.dart\`។

3. **Auth Functionality:**
   - បន្ថែម \`TextField\` ពីរសម្រាប់ Email និង Password។
   - បន្ថែម \`ElevatedButton\` សម្រាប់ Login ឬ Register។
   - បន្ថែម \`TextButton\` ដើម្បីប្តូររវាង Login និង Register។
   - បន្ថែម \`IconButton\` នៅក្នុង \`HomeScreen\` សម្រាប់ Sign-Out។

4. **Performance Optimization:**
   - ប្រើ \`const\` Constructors សម្រាប់ Widgets ឋិតិវន្ត។
   - ការពារ Input ដោយប្រើ \`.trim()\`។
   - គ្រប់គ្រង Errors ដោយប្រើ \`SnackBar\`។

5. **Performance Testing:**
   - ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Widget Rebuilds និង Memory Usage។

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងឧបករណ៍ពិត និងប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const FirebaseAuthApp());
}

class FirebaseAuthApp extends StatelessWidget {
  const FirebaseAuthApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: AuthScreen(),
    );
  }
}

class AuthScreen extends StatefulWidget {
  const AuthScreen({Key? key}) : super(key: key);

  @override
  _AuthScreenState createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool _isLogin = true;

  Future<void> _authAction() async {
    try {
      if (_isLogin) {
        await _auth.signInWithEmailAndPassword(
          email: _emailController.text.trim(),
          password: _passwordController.text.trim(),
        );
      } else {
        await _auth.createUserWithEmailAndPassword(
          email: _emailController.text.trim(),
          password: _passwordController.text.trim(),
        );
      }
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const HomeScreen()),
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
      appBar: AppBar(title: Text(_isLogin ? 'ចូល' : 'ចុះឈ្មោះ')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: _emailController,
              decoration: const InputDecoration(
                labelText: 'អ៊ីម៉ែល',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: _passwordController,
              decoration: const InputDecoration(
                labelText: 'លេខសម្ងាត់',
                border: OutlineInputBorder(),
              ),
              obscureText: true,
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: _authAction,
              child: Text(_isLogin ? 'ចូល' : 'ចុះឈ្មោះ'),
            ),
            TextButton(
              onPressed: () {
                setState(() {
                  _isLogin = !_isLogin;
                });
              },
              child: Text(_isLogin ? 'ចុះឈ្មោះ' : 'ចូល'),
            ),
          ],
        ),
      ),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Firebase Auth App'),
        actions: [
          IconButton(
            icon: const Icon(Icons.logout),
            onPressed: () async {
              await FirebaseAuth.instance.signOut();
              Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) => const AuthScreen()),
              );
            },
          ),
        ],
      ),
      body: const Center(child: Text('សូមស្វាគមន៍!')),
    );
  }
}
\`\`\`
`
  }
};

export default FlutterLesson9_1Content;