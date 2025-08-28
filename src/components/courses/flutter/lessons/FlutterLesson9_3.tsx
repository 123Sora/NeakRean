import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson9_3Content: LessonContent = {
  title: 'ការប្រើ Secure Storage និង Encryption ក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Secure Storage និង Encryption',
    'ស្វែងយល់ពីរបៀបប្រើ `flutter_secure_storage` សម្រាប់រក្សាទុកទិន្នន័យសម្ងាត់',
    'រៀនរក្សាទុក និងទាញយកទិន្នន័យដូចជា User Credentials ដោយសុវត្ថិភាព',
    'អនុវត្តន៍ការបង្កើត App ដែលរក្សាទុក Credentials ដោយប្រើ Secure Storage',
    'ស្គាល់ការគ្រប់គ្រង Asynchronous Operations ជាមួយ Secure Storage',
    'យល់ពីការប្រើ Encryption ដើម្បីការពារទិន្នន័យ',
    'រៀនបច្ចេកទេសការពារ Security នៅពេលប្រើ Secure Storage',
    'ស្វែងយល់ពីការប្រើ Flutter DevTools ដើម្បីវិភាគ App'
  ],
  content: `
# ការប្រើ Secure Storage និង Encryption ក្នុង Flutter 🔐

---

**Secure Storage** គឺជាវិធីសាស្ត្រសម្រាប់រក្សាទុកទិន្នន័យសម្ងាត់ (ដូចជា Passwords ឬ Tokens) ដោយប្រើ Encryption។ នៅក្នុងមេរៀននេះ យើងនឹងប្រើ Package \`flutter_secure_storage\` ដើម្បីបង្កើត App ដែលរក្សាទុក User Credentials ដោយសុវត្ថិភាព។

---

## 1. អ្វីទៅជា Secure Storage និង Encryption?

- **Secure Storage**: ជាកន្លែងរក្សាទុកទិន្នន័យសម្ងាត់នៅលើឧបករណ៍ ដែលត្រូវបានការពារដោយ Encryption។
- **Encryption**: ជាដំណើរការបម្លែងទិន្នន័យទៅជាទម្រង់ដែលមិនអាចអានបាន លើកលែងតែមាន Key ត្រឹមត្រូវ។
- **flutter_secure_storage**: Package ដែលប្រើ Keychain (iOS) និង Keystore (Android) ដើម្បីរក្សាទុកទិន្នន័យដោយសុវត្ថិភាព។

---

## 2. ការដំឡើង flutter_secure_storage

បន្ថែម \`flutter_secure_storage\` ទៅ \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  flutter_secure_storage: ^8.0.0
\`\`\`

ដំណើរការ Command: \`flutter pub get\`

### 2.1 ការកំណត់សម្រាប់ Android
- បន្ថែម \`minSdkVersion\` ទៅ \`android/app/build.gradle\`:
  \`\`\`gradle
  android {
      defaultConfig {
          minSdkVersion 18
      }
  }
  \`\`\`

---

## 3. ការប្រើ Secure Storage

**flutter_secure_storage** អនុញ្ញាតឱ្យរក្សាទុកទិន្នន័យជា Key-Value Pairs ដោយប្រើ Encryption។

**ឧទាហរណ៍កូដ:**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SecureStorageScreen(),
    );
  }
}

class SecureStorageScreen extends StatefulWidget {
  const SecureStorageScreen({Key? key}) : super(key: key);

  @override
  _SecureStorageScreenState createState() => _SecureStorageScreenState();
}

class _SecureStorageScreenState extends State<SecureStorageScreen> {
  final _storage = const FlutterSecureStorage();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  String _storedEmail = '';
  String _storedPassword = '';

  @override
  void initState() {
    super.initState();
    _loadCredentials();
  }

  Future<void> _loadCredentials() async {
    final email = await _storage.read(key: 'email');
    final password = await _storage.read(key: 'password');
    setState(() {
      _storedEmail = email ?? '';
      _storedPassword = password ?? '';
    });
  }

  Future<void> _saveCredentials() async {
    await _storage.write(
      key: 'email',
      value: _emailController.text.trim(),
    );
    await _storage.write(
      key: 'password',
      value: _passwordController.text.trim(),
    );
    await _loadCredentials();
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Credentials ត្រូវបានរក្សាទុក!')),
    );
  }

  Future<void> _deleteCredentials() async {
    await _storage.delete(key: 'email');
    await _storage.delete(key: 'password');
    await _loadCredentials();
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Credentials ត្រូវបានលុប!')),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Secure Storage App')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
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
            Row(
              children: [
                ElevatedButton(
                  onPressed: _saveCredentials,
                  child: const Text('រក្សាទុក'),
                ),
                const SizedBox(width: 16),
                ElevatedButton(
                  onPressed: _deleteCredentials,
                  child: const Text('លុប'),
                ),
              ],
            ),
            const SizedBox(height: 20),
            Text('Stored Email: $_storedEmail', style: const TextStyle(fontSize: 16)),
            Text('Stored Password: $_storedPassword', style: const TextStyle(fontSize: 16)),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }
}
\`\`\`

**លទ្ធផល:** App អនុញ្ញាតឱ្យរក្សាទុក និងលុប User Credentials ដោយប្រើ Secure Storage។

---

## 4. ការគ្រប់គ្រង Asynchronous Operations

- **flutter_secure_storage** ប្រើ \`async/await\` ព្រោះការងារជាមួយ Storage ជា Asynchronous។
- ប្រើ \`Future<void>\` សម្រាប់ Methods ដែលទាក់ទងនឹង Storage។
- ត្រូវប្រាកដថា UI មិន Block នៅពេលទាញយកទិន្នន័យ។

---

## 5. ការបង្កើនប្រសិទ្ធភាព Performance និង Security

- **ប្រើ \`const\` Constructors:** កាត់បន្ថយ Widget Rebuilds។
- **ការពារ Input:** ប្រើ \`.trim()\` ដើម្បីលុបចោល Spaces នៅក្នុង Input។
- **ការគ្រប់គ្រង Error:** ប្រើ \`try/catch\` ដើម្បីគ្រប់គ្រង Errors នៅពេលធ្វើការជាមួយ Storage។
- **ការពារ Data Leakage:** កុំបង្ហាញ Sensitive Data (ដូចជា Password) នៅក្នុង UI ផ្ទាល់។
- **ប្រើ Flutter DevTools:** វិភាគ Memory Usage និង Performance។

---

## 6. ការប្រើ Flutter DevTools

- **Memory Tab:** តាមដាន Memory Usage នៅពេលប្រើ Secure Storage។
- **Performance Tab:** វិភាគ Frame Rendering Time។
- **Widget Inspector:** ពិនិត្យ Widget Tree និង Rebuilds។

**ការបើក DevTools:**
- ដំណើរការ \`flutter run --profile\` ឬបើក DevTools នៅក្នុង IDE។

---

## 7. គន្លឹះសម្រាប់ Secure Storage

- ប្រើ \`flutter_secure_storage\` សម្រាប់ទិន្នន័យសម្ងាត់។
- ប្រើ \`async/await\` ដើម្បីគ្រប់គ្រង Asynchronous Operations។
- ការពារ Input និងគ្រប់គ្រង Errors។
- កុំបង្ហាញ Sensitive Data នៅក្នុង UI។
- ប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការរក្សាទុក Credentials</h3>
<p>រក្សាទុក Email និង Password ទៅ Secure Storage។</p>
<pre><code class="language-dart">
Future<void> _saveCredentials() async {
  await _storage.write(
    key: 'email',
    value: _emailController.text.trim(),
  );
  await _storage.write(
    key: 'password',
    value: _passwordController.text.trim(),
  );
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការទាញយក Credentials</h3>
<p>ទាញយក Email និង Password ពី Secure Storage។</p>
<pre><code class="language-dart">
Future<void> _loadCredentials() async {
  final email = await _storage.read(key: 'email');
  final password = await _storage.read(key: 'password');
  setState(() {
    _storedEmail = email ?? '';
    _storedPassword = password ?? '';
  });
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការលុប Credentials</h3>
<p>លុប Email និង Password ពី Secure Storage។</p>
<pre><code class="language-dart">
Future<void> _deleteCredentials() async {
  await _storage.delete(key: 'email');
  await _storage.delete(key: 'password');
}
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Secure Storage ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុកទិន្នន័យសាមញ្ញ',
        'រក្សាទុកទិន្នន័យសម្ងាត់ដោយ Encryption',
        'បង្កើត Animations',
        'ទាញទិន្នន័យពី API'
      ],
      correct: 1,
      explanation: 'Secure Storage ប្រើសម្រាប់រក្សាទុកទិន្នន័យសម្ងាត់ដោយ Encryption។'
    },
    {
      question: 'តើ Package អ្វីត្រូវបន្ថែមទៅ `pubspec.yaml` សម្រាប់ Secure Storage?',
      options: [
        'http',
        'flutter_secure_storage',
        'provider',
        'sqflite'
      ],
      correct: 1,
      explanation: '`flutter_secure_storage` Package ត្រូវបន្ថែមសម្រាប់ Secure Storage។'
    },
    {
      question: 'តើ `flutter_secure_storage` ប្រើអ្វីនៅលើ iOS?',
      options: [
        'Keystore',
        'Keychain',
        'Shared Preferences',
        'Hive'
      ],
      correct: 1,
      explanation: '`flutter_secure_storage` ប្រើ Keychain នៅលើ iOS។'
    },
    {
      question: 'តើ Method អ្វីប្រើសម្រាប់រក្សាទុកទិន្នន័យទៅ Secure Storage?',
      options: [
        'write',
        'read',
        'delete',
        'insert'
      ],
      correct: 0,
      explanation: '`write` ប្រើសម្រាប់រក្សាទុកទិន្នន័យទៅ Secure Storage។'
    },
    {
      question: 'តើ Method អ្វីប្រើសម្រាប់ទាញទិន្នន័យពី Secure Storage?',
      options: [
        'write',
        'read',
        'delete',
        'insert'
      ],
      correct: 1,
      explanation: '`read` ប្រើសម្រាប់ទាញទិន្នន័យពី Secure Storage។'
    },
    {
      question: 'តើការប្រើ `const` Constructor ជួយ Secure Storage App ដោយរបៀបណា?',
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
      question: 'តើ Flutter DevTools ជួយអ្វីនៅក្នុង Secure Storage App?',
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
      question: 'តើការប្រើ `.trim()` នៅក្នុង Input ជួយអ្វី?',
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
      question: 'តើការប្រើ `async/await` នៅក្នុង Secure Storage មានគោលបំណងអ្វី?',
      options: [
        'បង្កើត Animations',
        'គ្រប់គ្រង Asynchronous Operations',
        'កំណត់ Theme',
        'បង្កើត Widget'
      ],
      correct: 1,
      explanation: '`async/await` គ្រប់គ្រង Asynchronous Operations នៅពេលធ្វើការជាមួយ Storage។'
    },
    {
      question: 'តើការកុំបង្ហាញ Sensitive Data នៅក្នុង UI ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'ការពារ Data Leakage',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'ការកុំបង្ហាញ Sensitive Data ការពារ Data Leakage។'
    }
  ],
  lab: {
    task: `
บង្កើត Flutter App ដែលប្រើ \`flutter_secure_storage\` ដើម្បីរក្សាទុក User Credentials ដោយសុវត្ថិភាព។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`SecureStorageApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`SecureStorageScreen\` សម្រាប់បង្ហាញ UI។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Secure Storage App"។

2. **Secure Storage Setup:**
   - បន្ថែម \`flutter_secure_storage\` Package ទៅ \`pubspec.yaml\`។
   - កំណត់ \`minSdkVersion\` នៅក្នុង \`android/app/build.gradle\`។

3. **Credentials Functionality:**
   - បន្ថែម \`TextField\` ពីរសម្រាប់ Email និង Password។
   - បន្ថែម \`ElevatedButton\` ពីរសម្រាប់រក្សាទុក និងលុប Credentials។
   - បង្ហាញ Stored Credentials នៅក្នុង UI។

4. **Performance Optimization:**
   - ប្រើ \`const\` Constructors សម្រាប់ Widgets ឋិតិវន្ត។
   - ប្រើ \`.trim()\` ដើម្បីការពារ Input Errors។
   - ប្រើ \`SnackBar\` ដើម្បីបង្ហាញ Feedback នៅពេលរក្សាទុក ឬលុប។

5. **Performance Testing:**
   - ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Widget Rebuilds និង Memory Usage។

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងឧបករណ៍ពិត និងប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

void main() {
  runApp(const SecureStorageApp());
}

class SecureStorageApp extends StatelessWidget {
  const SecureStorageApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SecureStorageScreen(),
    );
  }
}

class SecureStorageScreen extends StatefulWidget {
  const SecureStorageScreen({Key? key}) : super(key: key);

  @override
  _SecureStorageScreenState createState() => _SecureStorageScreenState();
}

class _SecureStorageScreenState extends State<SecureStorageScreen> {
  final _storage = const FlutterSecureStorage();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  String _storedEmail = '';
  String _storedPassword = '';

  @override
  void initState() {
    super.initState();
    _loadCredentials();
  }

  Future<void> _loadCredentials() async {
    final email = await _storage.read(key: 'email');
    final password = await _storage.read(key: 'password');
    setState(() {
      _storedEmail = email ?? '';
      _storedPassword = password ?? '';
    });
  }

  Future<void> _saveCredentials() async {
    await _storage.write(
      key: 'email',
      value: _emailController.text.trim(),
    );
    await _storage.write(
      key: 'password',
      value: _passwordController.text.trim(),
    );
    await _loadCredentials();
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Credentials ត្រូវបានរក្សាទុក!')),
    );
  }

  Future<void> _deleteCredentials() async {
    await _storage.delete(key: 'email');
    await _storage.delete(key: 'password');
    await _loadCredentials();
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Credentials ត្រូវបានលុប!')),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Secure Storage App')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
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
            Row(
              children: [
                ElevatedButton(
                  onPressed: _saveCredentials,
                  child: const Text('រក្សាទុក'),
                ),
                const SizedBox(width: 16),
                ElevatedButton(
                  onPressed: _deleteCredentials,
                  child: const Text('លុប'),
                ),
              ],
            ),
            const SizedBox(height: 20),
            Text('Stored Email: $_storedEmail', style: const TextStyle(fontSize: 16)),
            Text('Stored Password: $_storedPassword', style: const TextStyle(fontSize: 16)),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }
}
\`\`\`
`
  }
};

export default FlutterLesson9_3Content;