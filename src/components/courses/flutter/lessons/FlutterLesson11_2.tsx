import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson11_2Content: LessonContent = {
  title: 'ការប្រើ Push Notifications ជាមួយ Firebase Cloud Messaging (FCM) ក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពី Firebase Cloud Messaging (FCM) និងមុខងាររបស់វា',
    'ស្វែងយល់ពីរបៀបបន្ថែម FCM ទៅក្នុង Flutter Project',
    'រៀនទទួល និងបង្ហាញ Push Notifications នៅក្នុង App',
    'អនុវត្តន៍ការបង្កើត App ដែលប្រើ FCM សម្រាប់ Notifications',
    'ស្គាល់ការគ្រប់គ្រង Background និង Foreground Notifications',
    'រៀនបច្ចេកទេស Debugging នៅពេលធ្វើការជាមួយ FCM',
    'ស្វែងយល់ពីការប្រើ Firebase Console ដើម្បីផ្ញើ Notifications',
    'យល់ពីការបង្កើនប្រសិទ្ធភាព Performance និង Security នៅក្នុង FCM'
  ],
  content: `
# ការប្រើ Push Notifications ជាមួយ Firebase Cloud Messaging (FCM) ក្នុង Flutter 📩

---

**Firebase Cloud Messaging (FCM)** គឺជា Platform ដែលអនុញ្ញាតឱ្យផ្ញើ Push Notifications ទៅឧបករណ៍។ នៅក្នុងមេរៀននេះ យើងនឹងបង្កើត Flutter App ដែលទទួល និងបង្ហាញ Notifications ដោយប្រើ FCM។

---

## 1. អ្វីទៅជា Firebase Cloud Messaging (FCM)?

- **FCM** គឺជា Service ដែល៖
  - អនុញ្ញាតឱ្យផ្ញើ Notifications ទៅឧបករណ៍ iOS, Android, និង Web។
  - គាំទ្រ Foreground និង Background Notifications។
  - អនុញ្ញាតឱ្យផ្ញើ Notifications ដោយប្រើ Firebase Console ឬ Server API។

---

## 2. ការដំឡើង FCM ក្នុង Flutter

### 2.1 បន្ថែម Firebase ទៅ Project
1. **បង្កើត Firebase Project:**
   - ចូលទៅ Firebase Console (https://console.firebase.google.com/) ហើយបង្កើត Project ថ្មី។
   - បន្ថែម App (iOS/Android) ទៅ Firebase Project។

2. **បន្ថែម FCM Packages:**
   បន្ថែម Packages ទៅ \`pubspec.yaml\`:

   \`\`\`yaml
   dependencies:
     firebase_core: ^2.24.0
     firebase_messaging: ^14.7.0
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
   import 'package:firebase_messaging/firebase_messaging.dart';
   import 'firebase_options.dart';

   Future<void> main() async {
     WidgetsFlutterBinding.ensureInitialized();
     await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
     runApp(const NotificationApp());
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

5. **កំណត់ iOS Permissions:**
   បន្ថែម Permissions នៅក្នុង \`ios/Runner/Info.plist\`:

   \`\`\`xml
   <key>UIBackgroundModes</key>
   <array>
       <string>remote-notification</string>
   </array>
   \`\`\`

---

## 3. ការប្រើ FCM សម្រាប់ Push Notifications

**ឧទាហរណ៍កូដ:** Notification App ដែលទទួល និងបង្ហាញ Push Notifications។

\`\`\`dart
// lib/main.dart
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'firebase_options.dart';

// Background Message Handler
Future<void> _firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  await Firebase.initializeApp();
  print('Background message: '$'{message.notification?.title}');
}

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  FirebaseMessaging.onBackgroundMessage(_firebaseMessagingBackgroundHandler);
  runApp(const NotificationApp());
}

class NotificationApp extends StatelessWidget {
  const NotificationApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: NotificationScreen(),
    );
  }
}

class NotificationScreen extends StatefulWidget {
  const NotificationScreen({Key? key}) : super(key: key);

  @override
  _NotificationScreenState createState() => _NotificationScreenState();
}

class _NotificationScreenState extends State<NotificationScreen> {
  String? _token;
  List<String> _notifications = [];

  @override
  void initState() {
    super.initState();
    _setupFCM();
  }

  Future<void> _setupFCM() async {
    FirebaseMessaging messaging = FirebaseMessaging.instance;

    // Request permission for iOS
    NotificationSettings settings = await messaging.requestPermission(
      alert: true,
      badge: true,
      sound: true,
    );

    if (settings.authorizationStatus == AuthorizationStatus.authorized) {
      print('User granted permission');
    }

    // Get FCM Token
    _token = await messaging.getToken();
    print('FCM Token: $_token');
    setState(() {});

    // Handle Foreground Messages
    FirebaseMessaging.onMessage.listen((RemoteMessage message) {
      if (message.notification != null) {
        setState(() {
          _notifications.add(''$'{message.notification!.title}: '$'{message.notification!.body}');
        });
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(''$'{message.notification!.title}: '$'{message.notification!.body}')),
        );
      }
    });

    // Handle Background Messages (when app is opened from notification)
    FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) {
      if (message.notification != null) {
        setState(() {
          _notifications.add(''$'{message.notification!.title}: '$'{message.notification!.body}');
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Notification App')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('FCM Token: '$'{_token ?? 'Loading...'}', style: const TextStyle(fontSize: 16)),
            const SizedBox(height: 20),
            const Text('Received Notifications:', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            Expanded(
              child: ListView.builder(
                itemCount: _notifications.length,
                itemBuilder: (context, index) {
                  return ListTile(
                    title: Text(_notifications[index]),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

**ការពន្យល់:**
- \`FirebaseMessaging.onBackgroundMessage\`: គ្រប់គ្រង Background Notifications។
- \`FirebaseMessaging.onMessage\`: គ្រប់គ្រង Foreground Notifications។
- \`FirebaseMessaging.onMessageOpenedApp\`: គ្រប់គ្រង Notifications នៅពេល App ត្រូវបានបើក។
- \`requestPermission\`: ស្នើសុំ Permission សម្រាប់ Notifications នៅលើ iOS។
- \`SnackBar\`: បង្ហាញ Notification Content នៅក្នុង UI។

---

## 4. ការផ្ញើ Notifications ពី Firebase Console

1. ចូលទៅ Firebase Console > Cloud Messaging > New Notification។
2. បញ្ចូល Title និង Body។
3. បញ្ជាក់ Target (ឧទាហរណ៍ User Segment ឬ Specific Token)។
4. ផ្ញើ Notification ហើយពិនិត្យនៅក្នុង App។

---

## 5. ការគ្រប់គ្រង Asynchronous Operations

- FCM Operations គឺ Asynchronous ដូច្នេះត្រូវប្រើ \`async/await\`។
- ប្រើ \`Stream\` (ឧទាហរណ៍ \`FirebaseMessaging.onMessage\`) សម្រាប់ Real-time Notifications។
- គ្រប់គ្រង Errors ដោយប្រើ \`try/catch\`:

\`\`\`dart
Future<void> _setupFCM() async {
  try {
    _token = await FirebaseMessaging.instance.getToken();
  } catch (e) {
    print('Error getting FCM token: $e');
  }
}
\`\`\`

---

## 6. ការបង្កើនប្រសិទ្ធភាព Performance និង Debugging

- **ប្រើ \`const\` Constructors:** កាត់បន្ថយ Widget Rebuilds។
- **Debugging:** ប្រើ \`print\` និង Firebase Console ដើម្បីតាមដាន Notifications។
- **Performance:** កាត់បន្ថយ Notification Frequency ដើម្បីការពារ Battery Drain។
- **ប្រើ Flutter DevTools:** វិភាគ Memory Usage និង Widget Tree។

---

## 7. ការប្រើ Firebase Console

- **Cloud Messaging:** ផ្ញើ Test Notifications។
- **Analytics:** តាមដាន Notification Engagement។
- **Device Tokens:** ពិនិត្យ FCM Tokens។

---

## 8. គន្លឹះសម្រាប់ FCM

- កំណត់ Firebase ត្រឹមត្រូវជាមួយ \`google-services.json\` និង \`GoogleService-Info.plist\`។
- គ្រប់គ្រង Foreground និង Background Notifications។
- ស្នើសុំ Permission សម្រាប់ iOS។
- ប្រើ \`try/catch\` សម្រាប់ Error Handling។
- ប្រើ Firebase Console និង Flutter DevTools សម្រាប់ Debugging។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការទទួល Foreground Notification</h3>
<p>គ្រប់គ្រង Notification នៅពេល App កំពុងដំណើរការ។</p>
<pre><code class="language-dart">
FirebaseMessaging.onMessage.listen((RemoteMessage message) {
  if (message.notification != null) {
    print('Foreground message: '$'{message.notification!.title}');
  }
});
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការទទួល Background Notification</h3>
<p>គ្រប់គ្រង Notification នៅពេល App មិនដំណើរការ។</p>
<pre><code class="language-dart">
Future<void> _firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  await Firebase.initializeApp();
  print('Background message: '$'{message.notification?.title}');
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការស្នើសុំ Permission សម្រាប់ iOS</h3>
<p>ស្នើសុំ Permission សម្រាប់ Notifications។</p>
<pre><code class="language-dart">
NotificationSettings settings = await FirebaseMessaging.instance.requestPermission(
  alert: true,
  badge: true,
  sound: true,
);
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Firebase Cloud Messaging (FCM) ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុកទិន្នន័យ',
        'ផ្ញើ Push Notifications',
        'បង្កើត Animations',
        'ទាញទិន្នន័យពី API'
      ],
      correct: 1,
      explanation: 'FCM ប្រើសម្រាប់ផ្ញើ Push Notifications។'
    },
    {
      question: 'តើ Package អ្វីត្រូវបន្ថែមសម្រាប់ FCM?',
      options: [
        'http',
        'firebase_messaging',
        'provider',
        'sqflite'
      ],
      correct: 1,
      explanation: '`firebase_messaging` Package ត្រូវបន្ថែមសម្រាប់ FCM។'
    },
    {
      question: 'តើ `FirebaseMessaging.onMessage` ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'គ្រប់គ្រង Foreground Notifications',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`FirebaseMessaging.onMessage` គ្រប់គ្រង Foreground Notifications។'
    },
    {
      question: 'តើ `requestPermission` នៅក្នុង FCM ធ្វើអ្វី?',
      options: [
        'បង្កើត Animation',
        'ស្នើសុំ Permission សម្រាប់ Notifications',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`requestPermission` ស្នើសុំ Permission សម្រាប់ Notifications។'
    },
    {
      question: 'តើ `FirebaseMessaging.onBackgroundMessage` ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'គ្រប់គ្រង Background Notifications',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`FirebaseMessaging.onBackgroundMessage` គ្រប់គ្រង Background Notifications។'
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
      question: 'តើ Flutter DevTools ជួយអ្វីនៅក្នុង FCM App?',
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
      question: 'តើ `try/catch` នៅក្នុង FCM ជួយអ្វី?',
      options: [
        'បង្កើត Animation',
        'គ្រប់គ្រង Errors',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`try/catch` គ្រប់គ្រង Errors នៅក្នុង FCM Operations។'
    },
    {
      question: 'តើ Firebase Console ប្រើសម្រាប់អ្វីនៅក្នុង FCM?',
      options: [
        'បង្កើត Widget',
        'ផ្ញើ Notifications និងតាមដាន Engagement',
        'ទាញទិន្នន័យ',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: 'Firebase Console ផ្ញើ Notifications និងតាមដាន Engagement។'
    },
    {
      question: 'តើ `const` Constructor ជួយ FCM App ដោយរបៀបណា?',
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
បង្កើត Flutter App ដែលប្រើ Firebase Cloud Messaging (FCM) សម្រាប់ Notifications។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`NotificationApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`NotificationScreen\` សម្រាប់បង្ហាញ UI។
   - បន្ថែម \`AppBar\` ជាមួយ Title "Notification App"។

2. **FCM Setup:**
   - បន្ថែម \`firebase_core\` និង \`firebase_messaging\` Packages ទៅ \`pubspec.yaml\`។
   - កំណត់ Firebase ជាមួយ \`google-services.json\` (Android) និង \`GoogleService-Info.plist\` (iOS)។
   - ចាប់ផ្តើម Firebase នៅក្នុង \`main.dart\`។

3. **Notification Functionality:**
   - បង្ហាញ FCM Token នៅក្នុង UI។
   - ទទួល Foreground និង Background Notifications។
   - បង្ហាញ Notifications នៅក្នុង \`ListView\`។
   - ប្រើ \`SnackBar\` ដើម្បីបង្ហាញ Notification Content។

4. **Performance Optimization:**
   - ប្រើ \`const\` Constructors សម្រាប់ Widgets ឋិតិវន្ត។
   - ប្រើ \`try/catch\` សម្រាប់ Error Handling។
   - ប្រើ \`print\` សម្រាប់ Debugging Notifications។

5. **Performance Testing:**
   - ប្រើ Firebase Console ដើម្បីផ្ញើ Test Notifications។
   - ប្រើ Flutter DevTools ដើម្បីវិភាគ Widget Tree និង Memory Usage

**ការណែនាំ:** សាកល្បង App នៅលើ Emulator និងឧបករណ៍ពិត និងប្រើ Firebase Console និង Flutter DevTools សម្រាប់ Debugging។
    `,
    solution: `
\`\`\`dart
// lib/main.dart
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'firebase_options.dart';

// Background Message Handler
Future<void> _firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  await Firebase.initializeApp();
  print('Background message: '$'{message.notification?.title}');
}

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  FirebaseMessaging.onBackgroundMessage(_firebaseMessagingBackgroundHandler);
  runApp(const NotificationApp());
}

class NotificationApp extends StatelessWidget {
  const NotificationApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: NotificationScreen(),
    );
  }
}

class NotificationScreen extends StatefulWidget {
  const NotificationScreen({Key? key}) : super(key: key);

  @override
  _NotificationScreenState createState() => _NotificationScreenState();
}

class _NotificationScreenState extends State<NotificationScreen> {
  String? _token;
  List<String> _notifications = [];

  @override
  void initState() {
    super.initState();
    _setupFCM();
  }

  Future<void> _setupFCM() async {
    try {
      FirebaseMessaging messaging = FirebaseMessaging.instance;

      // Request permission for iOS
      NotificationSettings settings = await messaging.requestPermission(
        alert: true,
        badge: true,
        sound: true,
      );

      if (settings.authorizationStatus == AuthorizationStatus.authorized) {
        print('User granted permission');
      }

      // Get FCM Token
      _token = await messaging.getToken();
      print('FCM Token: $_token');
      setState(() {});

      // Handle Foreground Messages
      FirebaseMessaging.onMessage.listen((RemoteMessage message) {
        if (message.notification != null) {
          setState(() {
            _notifications.add(''$'{message.notification!.title}: '$'{message.notification!.body}');
          });
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text(''$'{message.notification!.title}: '$'{message.notification!.body}')),
          );
        }
      });

      // Handle Background Messages
      FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) {
        if (message.notification != null) {
          setState(() {
            _notifications.add(''$'{message.notification!.title}: '$'{message.notification!.body}');
          });
        }
      });
    } catch (e) {
      print('Error setting up FCM: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Notification App')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('FCM Token: '$'{_token ?? 'Loading...'}', style: const TextStyle(fontSize: 16)),
            const SizedBox(height: 20),
            const Text('Received Notifications:', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            Expanded(
              child: ListView.builder(
                itemCount: _notifications.length,
                itemBuilder: (context, index) {
                  return ListTile(
                    title: Text(_notifications[index]),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`
`
  }
};

export default FlutterLesson11_2Content;