import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson4_2Content: LessonContent = {
  title: 'ការប្រើ Named Routes',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Named Routes នៅក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបកំណត់ Named Routes នៅក្នុង `MaterialApp`',
    'រៀនប្រើ `Navigator.pushNamed` និង `Navigator.pop` សម្រាប់ Navigation',
    'ស្គាល់ការបញ្ជូន Arguments ទៅ Named Routes',
    'អនុវត្តន៍ការបង្កើត App ដែលប្រើ Named Routes សម្រាប់ Multiple Screens',
    'យល់ពីការគ្រប់គ្រង Route និង Initial Route'
  ],
  content: `
# ការប្រើ Named Routes 🛤️

---

**Named Routes** គឺជាវិធីសាស្ត្រដែលប្រើឈ្មោះ (String) ដើម្បីកំណត់ Routes នៅក្នុង Flutter។ វាធ្វើឱ្យការគ្រប់គ្រង Navigation កាន់តែសាមញ្ញ និងងាយស្រួលថែទាំជាងការប្រើ \`MaterialPageRoute\` ដោយផ្ទាល់។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបកំណត់ និងប្រើ Named Routes។

---

## 1. អ្វីទៅជា Named Routes?

**Named Routes** គឺជា Routes ដែលត្រូវបានកំណត់ជាមួយឈ្មោះជាក់លាក់នៅក្នុង \`MaterialApp\`។ អ្នកអាចប្រើ \`Navigator.pushNamed\` ដើម្បីបើក Screen ដោយផ្អែកលើឈ្មោះ។

- **គុណសម្បត្តិ:**
  - កាត់បន្ថយ Boilerplate Code។
  - ងាយស្រួលគ្រប់គ្រង Routes នៅកន្លែងតែមួយ។
  - សមស្របសម្រាប់ Apps ដែលមាន Multiple Screens។

---

## 2. ការកំណត់ Named Routes

Named Routes ត្រូវបានកំណត់នៅក្នុង \`MaterialApp\` ដោយប្រើ Property \`routes\`។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/home',
      routes: {
        '/home': (context) => HomeScreen(),
        '/detail': (context) => DetailScreen(),
      },
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Navigator.pushNamed(context, '/detail'),
          child: Text('ទៅទំព័រលម្អិត'),
        ),
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រលម្អិត')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Navigator.pop(context),
          child: Text('ត្រឡប់ក្រោយ'),
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បើក \`HomeScreen\` ដំបូង ហើយអាចផ្លាស់ទៅ \`DetailScreen\` ដោយប្រើ \`Navigator.pushNamed\`។

---

## 3. ការបញ្ជូន Arguments ទៅ Named Routes

អ្នកអាចបញ្ជូន Arguments ទៅ Named Routes ដោយប្រើ Parameter \`arguments\` នៅក្នុង \`Navigator.pushNamed\`។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/home',
      routes: {
        '/home': (context) => HomeScreen(),
        '/detail': (context) => DetailScreen(),
      },
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.pushNamed(context, '/detail', arguments: 'សួស្តីពីទំព័រដើម!');
          },
          child: Text('ទៅទំព័រលម្អិត'),
        ),
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final String data = ModalRoute.of(context)!.settings.arguments as String;
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រលម្អិត')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(data, style: TextStyle(fontSize: 20)),
            ElevatedButton(
              onPressed: () => Navigator.pop(context),
              child: Text('ត្រឡប់ក្រោយ'),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** \`DetailScreen\` បង្ហាញអត្ថបទ "សួស្តីពីទំព័រដើម!" ដែលបញ្ជូនតាម Named Route។

---

## 4. ការត្រឡប់ Data ជាមួយ Named Routes

អ្នកអាចត្រឡប់ Data ពី Named Route ដោយប្រើ \`Navigator.pop\`។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/home',
      routes: {
        '/home': (context) => HomeScreen(),
        '/settings': (context) => SettingsScreen(),
      },
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: ElevatedButton(
          onPressed: () async {
            final result = await Navigator.pushNamed(context, '/settings');
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(content: Text(result as String? ?? 'គ្មានទិន្នន័យ')),
            );
          },
          child: Text('ទៅទំព័រការកំណត់'),
        ),
      ),
    );
  }
}

class SettingsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រការកំណត់')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Navigator.pop(context, 'ការកំណត់បានរក្សាទុក!'),
          child: Text('រក្សាទុកនិងត្រឡប់'),
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** នៅពេលត្រឡប់ពី \`SettingsScreen\`, \`HomeScreen\` បង្ហាញ SnackBar ជាមួយ Data "ការកំណត់បានរក្សាទុក!"។

---

## 5. ការប្រើ onGenerateRoute

\`onGenerateRoute\` អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រង Routes ដែលមិនត្រូវបានកំណត់ជាមុន។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/home',
      onGenerateRoute: (settings) {
        if (settings.name == '/home') {
          return MaterialPageRoute(builder: (context) => HomeScreen());
        } else if (settings.name == '/detail') {
          final String data = settings.arguments as String;
          return MaterialPageRoute(builder: (context) => DetailScreen(data: data));
        }
        return null;
      },
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Navigator.pushNamed(context, '/detail', arguments: 'សួស្តី!'),
          child: Text('ទៅទំព័រលម្អិត'),
        ),
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  final String data;
  DetailScreen({required this.data});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រលម្អិត')),
      body: Center(child: Text(data)),
    );
  }
}
\`\`\`

**លទ្ធផល:** បើក \`HomeScreen\` និងផ្លាស់ទៅ \`DetailScreen\` ជាមួយ Data ដោយប្រើ \`onGenerateRoute\`។

---

## 6. គន្លឹះសម្រាប់ Named Routes

- កំណត់ Named Routes នៅក្នុង \`MaterialApp.routes\`។
- ប្រើ \`initialRoute\` ដើម្បីកំណត់ Screen ដំបូង។
- បញ្ជូន Arguments ដោយប្រើ \`Navigator.pushNamed\`។
- ប្រើ \`onGenerateRoute\` សម្រាប់ Dynamic Routes។
- ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Route Names និង Navigation Stack។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Named Routes</h3>
<p>បើក Screen ដោយប្រើ \`Navigator.pushNamed\`។</p>
<pre><code class="language-dart">
MaterialApp(
  initialRoute: '/home',
  routes: {
    '/home': (context) => HomeScreen(),
    '/detail': (context) => DetailScreen(),
  },
)
ElevatedButton(
  onPressed: () => Navigator.pushNamed(context, '/detail'),
  child: Text('ទៅទំព័រលម្អិត'),
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបញ្ជូន Arguments</h3>
<p>បញ្ជូន Data ទៅ Named Route។</p>
<pre><code class="language-dart">
ElevatedButton(
  onPressed: () => Navigator.pushNamed(context, '/detail', arguments: 'សួស្តី!'),
  child: Text('ទៅទំព័រលម្អិត'),
)
class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final String data = ModalRoute.of(context)!.settings.arguments as String;
    return Scaffold(body: Center(child: Text(data)));
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការត្រឡប់ Data</h3>
<p>ត្រឡប់ Data ពី Named Route។</p>
<pre><code class="language-dart">
ElevatedButton(
  onPressed: () async {
    final result = await Navigator.pushNamed(context, '/settings');
    print(result);
  },
  child: Text('ទៅទំព័រការកំណត់'),
)
class SettingsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          onPressed: () => Navigator.pop(context, 'ទិន្នន័យ!'),
          child: Text('ត្រឡប់'),
        ),
      ),
    );
  }
}
</code></pre>
`],
  quiz: [
    {
      question: 'តើ Named Routes គឺជាអ្វី?',
      options: [
        'Routes ដែលប្រើ Widget',
        'Routes ដែលកំណត់ដោយឈ្មោះ',
        'Routes ដែលប្រើ State',
        'Routes ដែលប្រើ Theme'
      ],
      correct: 1,
      explanation: 'Named Routes គឺជា Routes ដែលកំណត់ដោយឈ្មោះនៅក្នុង `MaterialApp`។'
    },
    {
      question: 'តើ Property ណាដែលប្រើដើម្បីកំណត់ Named Routes?',
      options: ['home', 'routes', 'theme', 'builder'],
      correct: 1,
      explanation: 'Property `routes` នៅក្នុង `MaterialApp` ប្រើសម្រាប់កំណត់ Named Routes។'
    },
    {
      question: 'តើ `Navigator.pushNamed` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Screen ដោយប្រើឈ្មោះ',
        'យក Screen ចេញ',
        'កំណត់ Theme',
        'បង្កើត Widget'
      ],
      correct: 0,
      explanation: '`Navigator.pushNamed` បន្ថែម Screen ថ្មីដោយប្រើឈ្មោះ Route។'
    },
    {
      question: 'តើ `initialRoute` មានតួនាទីអ្វី?',
      options: [
        'កំណត់ Screen ដំបូង',
        'បញ្ជូន Data',
        'បង្កើត Route',
        'កំណត់ Theme'
      ],
      correct: 0,
      explanation: '`initialRoute` កំណត់ Screen ដំបូងនៃ App។'
    },
    {
      question: 'តើអ្នកអាចបញ្ជូន Arguments ទៅ Named Route បានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅក្នុង StatefulWidget', 'បានតែនៅក្នុង StatelessWidget'],
      correct: 0,
      explanation: 'អាចបញ្ជូន Arguments ទៅ Named Route ដោយប្រើ `arguments`។'
    },
    {
      question: 'តើវិធីណាដែលប្រើដើម្បីទទួល Arguments នៅ Named Route?',
      options: [
        'Navigator.pop',
        'ModalRoute.of(context)!.settings.arguments',
        'setState',
        'Provider.of'
      ],
      correct: 1,
      explanation: '`ModalRoute.of(context)!.settings.arguments` ប្រើសម្រាប់ទទួល Arguments។'
    },
    {
      question: 'តើ `onGenerateRoute` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ Theme',
        'គ្រប់គ្រង Dynamic Routes',
        'បង្កើត Widget',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`onGenerateRoute` ប្រើសម្រាប់គ្រប់គ្រង Dynamic Routes។'
    },
    {
      question: 'តើអ្នកអាចត្រឡប់ Data ពី Named Route បានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅក្នុង StatefulWidget', 'បានតែនៅក្នុង StatelessWidget'],
      correct: 0,
      explanation: 'អាចត្រឡប់ Data ពី Named Route ដោយប្រើ `Navigator.pop`។'
    },
    {
      question: 'តើអ្វីជាគុណសម្បត្តិនៃ Named Routes?',
      options: [
        'កាត់បន្ថយ Boilerplate Code',
        'បង្កើត Animation',
        'គ្រប់គ្រង State',
        'កំណត់ Theme'
      ],
      correct: 0,
      explanation: 'Named Routes កាត់បន្ថយ Boilerplate Code និងងាយស្រួលថែទាំ។'
    },
    {
      question: 'តើ `Navigator.pushNamed` ត្រូវការ Parameter អ្វី?',
      options: ['context, Route', 'context, String', 'Widget, State', 'Theme, Layout'],
      correct: 1,
      explanation: '`Navigator.pushNamed` ត្រូវការ `context` និង `String` (ឈ្មោះ Route)។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Named Routes នៅក្នុង StatelessWidget បានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅក្នុង StatefulWidget', 'បានតែនៅក្នុង MaterialApp'],
      correct: 0,
      explanation: 'អាចប្រើ Named Routes ទាំងនៅក្នុង StatelessWidget និង StatefulWidget។'
    },
    {
      question: 'តើ Flutter DevTools អាចជួយអ្វីក្នុង Named Routes?',
      options: [
        'បង្កើត Route',
        'ពិនិត្យ Route Names និង Navigation Stack',
        'កំណត់ Theme',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: 'Flutter DevTools អាចប្រើដើម្បីពិនិត្យ Route Names និង Navigation Stack។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដ `Navigator.pushNamed(context, "/detail")`?',
      options: [
        'បន្ថែម Screen ដែលមានឈ្មោះ "/detail"',
        'យក Screen ចេញ',
        'បង្កើត Widget',
        'កំណត់ Theme'
      ],
      correct: 0,
      explanation: '`Navigator.pushNamed(context, "/detail")` បន្ថែម Screen ដែលមានឈ្មោះ "/detail"។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ Named Routes ដើម្បីផ្លាស់ប្តូររវាង Multiple Screens។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`NamedRouteApp\` ដែលប្រើ \`MaterialApp\`។
   - កំណត់ \`initialRoute\` ទៅ "/home" និងកំណត់ Named Routes សម្រាប់ 3 Screens: \`HomeScreen\` ("/home"), \`DetailScreen\` ("/detail"), និង \`SettingsScreen\` ("/settings")។
   - បន្ថែម \`AppBar\` នៅគ្រប់ Screen ជាមួយ Title សមស្រប។

2. **Navigation:**
   - នៅ \`HomeScreen\`, បន្ថែម \`ElevatedButton\` ពីរដែលនាំទៅ "/detail" និង "/settings"។
   - នៅ \`DetailScreen\`, បញ្ជូន Arguments "សួស្តីពីទំព័រដើម!" និងបង្ហាញវានៅក្នុង \`Text\` Widget។
   - នៅ \`SettingsScreen\`, បន្ថែម \`ElevatedButton\` ដែលត្រឡប់ Data "ការកំណត់បានរក្សាទុក!" ទៅ \`HomeScreen\`។

3. **Data Handling:**
   - នៅ \`HomeScreen\`, បង្ហាញ \`SnackBar\` ដែលបង្ហាញ Data ដែលត្រឡប់ពី \`SettingsScreen\`។
   - បន្ថែម \`ElevatedButton\` នៅ \`DetailScreen\` និង \`SettingsScreen\` ដើម្បីត្រឡប់ក្រោយ។

**ការណែនាំ:** ប្រើ \`Navigator.pushNamed\` និង \`Navigator.pop\`។ សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីពិនិត្យ Route Names និង Navigation Stack។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(NamedRouteApp());

class NamedRouteApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/home',
      routes: {
        '/home': (context) => HomeScreen(),
        '/detail': (context) => DetailScreen(),
        '/settings': (context) => SettingsScreen(),
      },
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () => Navigator.pushNamed(context, '/detail', arguments: 'សួស្តីពីទំព័រដើម!'),
              child: Text('ទៅទំព័រលម្អិត'),
            ),
            ElevatedButton(
              onPressed: () async {
                final result = await Navigator.pushNamed(context, '/settings');
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text(result as String? ?? 'គ្មានទិន្នន័យ')),
                );
              },
              child: Text('ទៅទំព័រការកំណត់'),
            ),
          ],
        ),
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final String data = ModalRoute.of(context)!.settings.arguments as String;
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រលម្អិត')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(data, style: TextStyle(fontSize: 20)),
            ElevatedButton(
              onPressed: () => Navigator.pop(context),
              child: Text('ត្រឡប់ក្រោយ'),
            ),
          ],
        ),
      ),
    );
  }
}

class SettingsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រការកំណត់')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Navigator.pop(context, 'ការកំណត់បានរក្សាទុក!'),
          child: Text('រក្សាទុកនិងត្រឡប់'),
        ),
      ),
    );
  }
}
\`\`\`
`
  }
};

export default FlutterLesson4_2Content;
