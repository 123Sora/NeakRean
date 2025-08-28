import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson9_2Content: LessonContent = {
  title: 'ការប្រើ Social Login ជាមួយ OAuth ក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ OAuth និង Social Login',
    'ស្វែងយល់ពីរបៀបប្រើ Firebase Authentication សម្រាប់ Google Sign-In',
    'រៀនកំណត់ Google Sign-In នៅក្នុង Flutter Project',
    'អនុវត្តន៍ការបង្កើត App ដែលគាំទ្រ Google Sign-In',
    'ស្គាល់ការគ្រប់គ្រង User Session និង Sign-Out',
    'យល់ពីការប្រើ Asynchronous Operations ជាមួយ OAuth',
    'រៀនបច្ចេកទេសការពារ Security នៅពេលប្រើ Social Login',
    'ស្វែងយល់ពីការប្រើ Flutter DevTools ដើម្បីវិភាគ App'
  ],
  content: `
# ការប្រើ Social Login ជាមួយ OAuth ក្នុង Flutter 🌐

---

**Social Login** ជាមួយ **OAuth** អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ចូលទៅក្នុង App ដោយប្រើគណនីសង្គមដូចជា Google, Facebook, ឬ Twitter។ នៅក្នុងមេរៀននេះ យើងនឹងប្រើ Firebase Authentication ដើម្បីអនុវត្ត Google Sign-In។

---

## 1. អ្វីទៅជា OAuth និង Social Login?

**OAuth** គឺជា Protocol ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ផ្តល់សិទ្ធិឱ្យ App ចូលប្រើគណនីសង្គមរបស់ពួកគេដោយមិនចាំបាច់បញ្ចូលលេខសម្ងាត់។ **Social Login** ប្រើ OAuth ដើម្បីផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់តាមរយៈគណនីសង្គម។

---

## 2. ការដំឡើង Firebase និង Google Sign-In

### 2.1 បន្ថែម Firebase
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
  google_sign_in: ^6.1.0
\`\`\`

6. កែ File \`android/build.gradle\`:
   - បន្ថែម \`classpath 'com.google.gms:google-services:4.3.15'\`។
7. កែ File \`android/app/build.gradle\`:
   - បន្ថែម \`apply plugin: 'com.google.gms.google-services'\`។
8. ដំណើរការ Command: \`flutter pub get\`

### 2.2 កំណត់ Google Sign-In
1. នៅក្នុង Firebase Console ចូលទៅកាន់ Authentication > Sign-in method > Google ហើយបើកវា។
2. បញ្ចូល SHA-1 Key សម្រាប់ Android:
   - បង្កើត SHA-1 Key ដោយប្រើ Command:
     \`\`\`bash
     keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
     \`\`\`
   - បញ្ចូល SHA-1 Key នៅក្នុង Firebase Console។
3. សម្រាប់ iOS បន្ថែម Reversed Client ID ពី \`GoogleService-Info.plist\` ទៅ \`ios/Runner/Info.plist\`:
   \`\`\`xml
   <key>CFBundleURLTypes</key>
   <array>
     <dict>
       <key>CFBundleTypeRole</key>
       <string>Editor</string>
       <key>CFBundleURLSchemes</key>
       <array>
         <string>com.googleusercontent.apps.YOUR_REVERSED_CLIENT_ID</string>
       </array>
     </dict>
   </array>
   \`\`\`

---

## 3. ការបង្កើត Google Sign-In App

**ឧទាហរណ៍កូដ:**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';

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

class AuthScreen extends StatelessWidget {
  const AuthScreen({Key? key}) : super(key: key);

  Future<void> _signInWithGoogle(BuildContext context) async {
    try {
      final GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();
      if (googleUser == null) return;

      final GoogleSignInAuthentication googleAuth = await googleUser.authentication;
      final credential = GoogleAuthProvider.credential(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );

      await FirebaseAuth.instance.signInWithCredential(credential);
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
      appBar: AppBar(title: const Text('Google Sign-In')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => _signInWithGoogle(context),
          child: const Text('ចូលជាមួយ Google'),
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
        title: const Text('Google Sign-In App'),
        actions: [
          IconButton(
            icon: const Icon(Icons.logout),
            onPressed: () async {
              await GoogleSignIn().signOut();
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

**លទ្ធផល:** App អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ចូលជាមួយ Google Account និងចាកចេញ។

---

## 4. ការគ្រប់គ្រង User Session

- ប្រើ \`FirebaseAuth.instance.currentUser\` ដើម្បីទាញព័ត៌មានអ្នកប្រើប្រាស់។
- ប្រើ \`FirebaseAuth.instance.authStateChanges()\` ដើម្បីតាមដានការផ្លាស់ប្តូរស្ថានភាព Authentication។

---

## 5. ការបង្កើនប្រសិទ្ធភាព Performance និង Security

- **ប្រើ \`const\` Constructors:** កាត់បន្ថយ Widget Rebuilds។
- **ការពារ Errors:** គ្រប់គ្រង Errors ដោយប្រើ \`try/catch\` និង \`SnackBar\`។
- **ប្រើ SHA-1 Key:** ធានាសុវត្ថិភាពសម្រាប់ Android Google Sign-In។
- **ប្រើ Flutter DevTools:** វិភាគ Memory Usage និង Performance។

---

## 6. ការប្រើ Flutter DevTools

- **Memory Tab:** តាមដាន Memory Usage នៅពេលប្រើ Google Sign-In។
- **Performance Tab:** វិភាគ Frame Rendering Time។
- **Widget Inspector:** ពិនិត្យ Widget Tree និង Rebuilds។

**ការបើក DevTools:**
- ដំណើរការ \`flutter run --profile\` ឬបើក DevTools នៅក្នុង IDE។

---

## 7. គន្លឹះសម្រាប់ Social Login

- កំណត់ Firebase និង Google Sign-In ដោយប្រុងប្រយ័ត្ន។
- បន្ថែម SHA-1 Key សម្រាប់ Android និង Reversed Client ID សម្រាប់ iOS។
- ប្រើ \`try/catch\` ដើម្បីគ្រប់គ្រង Errors។
- ប្រើ \`StreamBuilder\` ឬ \`FutureBuilder\` សម្រាប់ UI Updates។
- ប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការចូលជាមួយ Google</h3>
<p>ប្រើ Google Sign-In ជាមួយ Firebase Authentication។</p>
<pre><code class="language-dart">
Future<void> _signInWithGoogle(BuildContext context) async {
  final GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();
  if (googleUser == null) return;

  final GoogleSignInAuthentication googleAuth = await googleUser.authentication;
  final credential = GoogleAuthProvider.credential(
    accessToken: googleAuth.accessToken,
    idToken: googleAuth.idToken,
  );

  await FirebaseAuth.instance.signInWithCredential(credential);
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការចាកចេញ</h3>
<p>ចាកចេញពី Google Sign-In និង Firebase Authentication។</p>
<pre><code class="language-dart">
await GoogleSignIn().signOut();
await FirebaseAuth.instance.signOut();
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបន្ថែម SHA-1 Key</h3>
<p>បង្កើត SHA-1 Key សម្រាប់ Android។</p>
<pre><code class="language-bash">
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
</code></pre>
`],
  quiz: [
    {
      question: 'តើ OAuth ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុកទិន្នន័យ',
        'ផ្តល់សិទ្ធិចូលប្រើគណនីសង្គម',
        'បង្កើត Animations',
        'ទាញទិន្នន័យពី API'
      ],
      correct: 1,
      explanation: 'OAuth ផ្តល់សិទ្ធិចូលប្រើគណនីសង្គមដោយមិនចាំបាច់បញ្ចូលលេខសម្ងាត់។'
    },
    {
      question: 'តើ Package អ្វីត្រូវបន្ថែមទៅ `pubspec.yaml` សម្រាប់ Google Sign-In?',
      options: [
        'http',
        'google_sign_in',
        'provider',
        'sqflite'
      ],
      correct: 1,
      explanation: '`google_sign_in` Package ត្រូវបន្ថែមសម្រាប់ Google Sign-In។'
    },
    {
      question: 'តើ SHA-1 Key ប្រើសម្រាប់អ្វីនៅក្នុង Google Sign-In?',
      options: [
        'បង្កើត Widget',
        'ផ្ទៀងផ្ទាត់ Android App',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'SHA-1 Key ផ្ទៀងផ្ទាត់ Android App នៅក្នុង Firebase។'
    },
    {
      question: 'តើ Method អ្វីប្រើសម្រាប់ចូលជាមួយ Google?',
      options: [
        'signInWithEmailAndPassword',
        'signInWithCredential',
        'signOut',
        'createUserWithEmailAndPassword'
      ],
      correct: 1,
      explanation: '`signInWithCredential` ប្រើសម្រាប់ចូលជាមួយ Google។'
    },
    {
      question: 'តើ `GoogleSignIn().signIn()` ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'បើក Google Sign-In Dialog',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`GoogleSignIn().signIn()` បើក Dialog សម្រាប់ជ្រើសគណនី Google។'
    },
    {
      question: 'តើការប្រើ `const` Constructor ជួយ Google Sign-In App ដោយរបៀបណា?',
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
      question: 'តើ Flutter DevTools ជួយអ្វីនៅក្នុង Google Sign-In App?',
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
      question: 'តើ Reversed Client ID ប្រើសម្រាប់អ្វីនៅក្នុង iOS?',
      options: [
        'បង្កើត Widget',
        'ផ្ទៀងផ្ទាត់ Google Sign-In',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Reversed Client ID ផ្ទៀងផ្ទាត់ Google Sign-In សម្រាប់ iOS។'
    },
    {
      question: 'តើការប្រើ `try/catch` នៅក្នុង Google Sign-In ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'គ្រប់គ្រង Errors',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`try/catch` គ្រប់គ្រង Errors នៅពេលចូលជាមួយ Google។'
    },
    {
      question: 'តើ `FirebaseAuth.instance.authStateChanges()` ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'តាមដានការផ្លាស់ប្តូរស្ថានភាព Authentication',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`authStateChanges()` តាមដានការផ្លាស់ប្តូរស្ថានភាព Authentication។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ Google Sign-In ជាមួយ Firebase Authentication។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`GoogleSignInApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateless Widget មួយឈ្មោះ \`AuthScreen\` សម្រាប់បង្ហាញ Google Sign-In Button។
   - បង្កើត Stateless Widget មួយឈ្មោះ \`HomeScreen\` សម្រាប់បង្ហាញបន្ទាប់ពី Login។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Google Sign-In App"។

2. **Firebase Setup:**
   - បន្ថែម \`firebase_core\`, \`firebase_auth\`, និង \`google_sign_in\` Packages ទៅ \`pubspec.yaml\`។
   - កំណត់ Firebase នៅក្នុង Firebase Console និងបន្ថែម Configuration Files។
   - បន្ថែម SHA-1 Key សម្រាប់ Android និង Reversed Client ID សម្រាប់ iOS។
   - ចាប់ផ្តើម Firebase នៅក្នុង \`main.dart\`។

3. **Google Sign-In Functionality:**
   - បន្ថែម \`ElevatedButton\` សម្រាប់ Google Sign-In។
   - បន្ថែម \`IconButton\` នៅក្នុង \`HomeScreen\` សម្រាប់ Sign-Out។
   - ប្រើ \`GoogleSignIn\` និង \`FirebaseAuth\` ដើម្បីគ្រប់គ្រង Authentication។

4. **Performance Optimization:**
   - ប្រើ \`const\` Constructors សម្រាប់ Widgets ឋិតិវន្ត។
   - គ្រប់គ្រង Errors ដោយប្រើ \`try/catch\` និង \`SnackBar\`។

5. **Performance Testing:**
   - ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Widget Rebuilds និង Memory Usage។

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងឧបករណ៍ពិត និងប្រើ Flutter DevTools ដើម្បីវិភាគ Performance។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const GoogleSignInApp());
}

class GoogleSignInApp extends StatelessWidget {
  const GoogleSignInApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: AuthScreen(),
    );
  }
}

class AuthScreen extends StatelessWidget {
  const AuthScreen({Key? key}) : super(key: key);

  Future<void> _signInWithGoogle(BuildContext context) async {
    try {
      final GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();
      if (googleUser == null) return;

      final GoogleSignInAuthentication googleAuth = await googleUser.authentication;
      final credential = GoogleAuthProvider.credential(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );

      await FirebaseAuth.instance.signInWithCredential(credential);
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
      appBar: AppBar(title: const Text('Google Sign-In App')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => _signInWithGoogle(context),
          child: const Text('ចូលជាមួយ Google'),
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
        title: const Text('Google Sign-In App'),
        actions: [
          IconButton(
            icon: const Icon(Icons.logout),
            onPressed: () async {
              await GoogleSignIn().signOut();
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

export default FlutterLesson9_2Content;