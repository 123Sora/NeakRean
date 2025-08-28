import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson4_1Content: LessonContent = {
  title: 'មូលដ្ឋាននៃការរុករក (Navigation)',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ Navigation នៅក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបប្រើ Navigator ដើម្បីផ្លាស់ប្តូររវាង Screens',
    'រៀនប្រើ `Navigator.push` និង `Navigator.pop` សម្រាប់ Basic Navigation',
    'ស្គាល់ការបញ្ជូន Data ទៅ Screen ផ្សេង',
    'អនុវត្តន៍ការបង្កើត App ដែលមាន Multiple Screens',
    'យល់ពី Stack-based Navigation និង Navigation Stack'
  ],
  content: `
# មូលដ្ឋាននៃការរុករក (Navigation) 🚀

---

**Navigation** នៅក្នុង Flutter គឺជាដំណើរការនៃការផ្លាស់ប្តូររវាង Screens ឬ Pages នៅក្នុង App។ Flutter ប្រើ **Navigator** Widget ដើម្បីគ្រប់គ្រង Navigation Stack។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបប្រើ \`Navigator.push\` និង \`Navigator.pop\` ដើម្បីផ្លាស់ប្តូររវាង Screens។

---

## 1. អ្វីទៅជា Navigation?

**Navigation** គឺជាវិធីសាស្ត្រដែលអនុញ្ញាតឱ្យអ្នកប្រើផ្លាស់ប្តូរពី Screen មួយទៅ Screen ផ្សេងទៀត។ Flutter ប្រើ **Stack-based Navigation** ដែល Screens ត្រូវបានដាក់ជាជង់ (Stack)។

- **Navigator:** Widget ដែលគ្រប់គ្រង Navigation Stack។
- **Navigator.push:** បន្ថែម Screen ថ្មីទៅលើ Stack។
- **Navigator.pop:** យក Screen ចេញពី Stack និងត្រឡប់ទៅ Screen មុន។

---

## 2. ការប្រើ Navigator.push និង Navigator.pop

**Navigator.push** ប្រើសម្រាប់បើក Screen ថ្មី ហើយ **Navigator.pop** ប្រើសម្រាប់ត្រឡប់ទៅ Screen មុន។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: FirstScreen(),
    );
  }
}

class FirstScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => SecondScreen()),
            );
          },
          child: Text('ទៅទំព័រទីពីរ'),
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រទីពីរ')),
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

**លទ្ធផល:** បង្ហាញ Screen ទីមួយជាមួយប៊ូតុងដែលនាំទៅ Screen ទីពីរ និងប៊ូតុងនៅ Screen ទីពីរដើម្បីត្រឡប់ក្រោយ។

---

## 3. ការបញ្ជូន Data ទៅ Screen ផ្សេង

អ្នកអាចបញ្ជូន Data ទៅ Screen ថ្មីតាមរយៈ Constructor នៃ Widget។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: FirstScreen(),
    );
  }
}

class FirstScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => SecondScreen(data: 'សួស្តីពីទំព័រដើម!'),
              ),
            );
          },
          child: Text('ទៅទំព័រទីពីរ'),
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  final String data;

  SecondScreen({required this.data});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រទីពីរ')),
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

**លទ្ធផល:** Screen ទីពីរបង្ហាញអត្ថបទ "សួស្តីពីទំព័រដើម!" ដែលបញ្ជូនពី Screen ទីមួយ។

---

## 4. ការត្រឡប់ Data ពី Screen

អ្នកអាចត្រឡប់ Data ពី Screen ទៅ Screen មុនដោយប្រើ \`Navigator.pop\`។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: FirstScreen(),
    );
  }
}

class FirstScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រដើម')),
      body: Center(
        child: ElevatedButton(
          onPressed: () async {
            final result = await Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => SecondScreen()),
            );
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(content: Text(result ?? 'គ្មានទិន្នន័យ')),
            );
          },
          child: Text('ទៅទំព័រទីពីរ'),
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ទំព័រទីពីរ')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Navigator.pop(context, 'ទិន្នន័យត្រឡប់!'),
          child: Text('ត្រឡប់ជាមួយទិន្នន័យ'),
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** នៅពេលត្រឡប់ពី Screen ទីពីរ Screen ទីមួយបង្ហាញ SnackBar ជាមួយទិន្នន័យ "ទិន្នន័យត្រឡប់!"។

---

## 5. Stack-based Navigation

Flutter ប្រើ Navigation Stack ដែល Screens ត្រូវបានដាក់ជាជង់។
- **Push:** បន្ថែម Screen ថ្មីទៅលើ Stack។
- **Pop:** យក Screen ចេញពី Stack។

**ឧទាហរណ៍៖** បើអ្នក \`push\` Screen A → B → C ហើយបន្ទាប់មក \`pop\` ពី C នោះអ្នកនឹងត្រឡប់ទៅ B។

---

## 6. គន្លឹះសម្រាប់ Basic Navigation

- ប្រើ \`Navigator.push\` និង \`MaterialPageRoute\` សម្រាប់បើក Screen ថ្មី។
- ប្រើ \`Navigator.pop\` ដើម្បីត្រឡប់ក្រោយ។
- បញ្ជូន Data តាមរយៈ Constructor ឬ Arguments។
- ប្រើ \`async/await\` សម្រាប់ទទួល Data ពី Screen ផ្សេង។
- ប្រើ Flutter DevTools ដើម្បីពិនិត្យ Navigation Stack។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបើក Screen ថ្មី</h3>
<p>បើក Screen ថ្មីជាមួយ \`Navigator.push\`។</p>
<pre><code class="language-dart">
ElevatedButton(
  onPressed: () {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => SecondScreen()),
    );
  },
  child: Text('ទៅទំព័រទីពីរ'),
)
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបញ្ជូន Data</h3>
<p>បញ្ជូនអត្ថបទទៅ Screen ថ្មី។</p>
<pre><code class="language-dart">
ElevatedButton(
  onPressed: () {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => SecondScreen(data: 'សួស្តី!'),
      ),
    );
  },
  child: Text('ទៅទំព័រទីពីរ'),
)
class SecondScreen extends StatelessWidget {
  final String data;
  SecondScreen({required this.data});
  @override
  Widget build(BuildContext context) {
    return Scaffold(body: Center(child: Text(data)));
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការត្រឡប់ Data</h3>
<p>ត្រឡប់ Data ពី Screen ទីពីរ។</p>
<pre><code class="language-dart">
ElevatedButton(
  onPressed: () async {
    final result = await Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => SecondScreen()),
    );
    print(result);
  },
  child: Text('ទៅទំព័រទីពីរ'),
)
class SecondScreen extends StatelessWidget {
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
      question: 'តើ Navigation នៅក្នុង Flutter គឺជាអ្វី?',
      options: [
        'ការគ្រប់គ្រង State',
        'ការផ្លាស់ប្តូររវាង Screens',
        'ការកំណត់ Theme',
        'ការបង្កើត Layout'
      ],
      correct: 1,
      explanation: 'Navigation គឺជាការផ្លាស់ប្តូររវាង Screens នៅក្នុង App។'
    },
    {
      question: 'តើ Widget ណាដែលគ្រប់គ្រង Navigation Stack?',
      options: ['Scaffold', 'Navigator', 'MaterialApp', 'AppBar'],
      correct: 1,
      explanation: '`Navigator` Widget គ្រប់គ្រង Navigation Stack។'
    },
    {
      question: 'តើ `Navigator.push` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Screen ថ្មីទៅ Stack',
        'យក Screen ចេញពី Stack',
        'កំណត់ Theme',
        'បង្កើត Widget'
      ],
      correct: 0,
      explanation: '`Navigator.push` បន្ថែម Screen ថ្មីទៅលើ Navigation Stack។'
    },
    {
      question: 'តើ `Navigator.pop` ធ្វើអ្វី?',
      options: [
        'បន្ថែម Screen ថ្មី',
        'យក Screen ចេញនិងត្រឡប់ក្រោយ',
        'បញ្ជូន Data',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`Navigator.pop` យក Screen ចេញនិងត្រឡប់ទៅ Screen មុន។'
    },
    {
      question: 'តើ `MaterialPageRoute` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Animation',
        'បង្កើត Route សម្រាប់ Navigation',
        'គ្រប់គ្រង State',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`MaterialPageRoute` បង្កើត Route សម្រាប់ Navigation ជាមួយ Material Animation។'
    },
    {
      question: 'តើអ្នកអាចបញ្ជូន Data ទៅ Screen ថ្មីបានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅក្នុង StatefulWidget', 'បានតែនៅក្នុង StatelessWidget'],
      correct: 0,
      explanation: 'អាចបញ្ជូន Data ទៅ Screen ថ្មីតាមរយៈ Constructor ឬ Arguments។'
    },
    {
      question: 'តើវិធីណាដែលប្រើដើម្បីទទួល Data ពី Screen ផ្សេង?',
      options: ['setState', 'async/await', 'Provider', 'Bloc'],
      correct: 1,
      explanation: 'ប្រើ `async/await` ជាមួយ `Navigator.push` ដើម្បីទទួល Data។'
    },
    {
      question: 'តើ Navigation Stack គឺជាអ្វី?',
      options: [
        'List នៃ Widgets',
        'ជង់នៃ Screens',
        'Theme នៃ App',
        'State នៃ App'
      ],
      correct: 1,
      explanation: 'Navigation Stack គឺជាជង់នៃ Screens ដែលគ្រប់គ្រងដោយ Navigator។'
    },
    {
      question: 'តើអ្វីជាលទ្ធផលនៃកូដ `Navigator.pop(context, "ទិន្នន័យ")`?',
      options: [
        'បន្ថែម Screen',
        'ត្រឡប់ Data ទៅ Screen មុន',
        'បង្កើត Widget',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`Navigator.pop(context, "ទិន្នន័យ")` ត្រឡប់ Data ទៅ Screen មុន។'
    },
    {
      question: 'តើ `Navigator.push` ត្រូវការ Parameter អ្វី?',
      options: ['context, Route', 'Widget, State', 'Theme, Layout', 'Event, State'],
      correct: 0,
      explanation: '`Navigator.push` ត្រូវការ `context` និង `Route` (ឧទាហរណ៍៖ `MaterialPageRoute`)។'
    },
    {
      question: 'តើអ្នកអាចប្រើ Navigation នៅក្នុង StatelessWidget បានទេ?',
      options: ['បាទ/ចាស', 'ទេ', 'បានតែនៅក្នុង StatefulWidget', 'បានតែនៅក្នុង MaterialApp'],
      correct: 0,
      explanation: 'អាចប្រើ Navigation ទាំងនៅក្នុង StatelessWidget និង StatefulWidget។'
    },
    {
      question: 'តើអ្វីជាវិធីសាមញ្ញបំផុតដើម្បីផ្លាស់ប្តូរទៅ Screen ថ្មី?',
      options: ['setState', 'Navigator.push', 'Provider', 'Bloc'],
      correct: 1,
      explanation: '`Navigator.push` គឺជាវិធីសាមញ្ញបំផុតដើម្បីផ្លាស់ប្តូរទៅ Screen ថ្មី។'
    },
    {
      question: 'តើ Flutter DevTools អាចជួយអ្វីក្នុង Navigation?',
      options: [
        'បង្កើត Route',
        'ពិនិត្យ Navigation Stack',
        'កំណត់ Theme',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: 'Flutter DevTools អាចប្រើដើម្បីពិនិត្យ Navigation Stack។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ Basic Navigation ដើម្បីផ្លាស់ប្តូររវាង Multiple Screens។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`NavigationApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត 3 Screens: \`HomeScreen\`, \`DetailScreen\`, និង \`SettingsScreen\`។
   - បន្ថែម \`AppBar\` នៅគ្រប់ Screen ជាមួយ Title សមស្រប (ឧទាហរណ៍៖ "ទំព័រដើម").

2. **Navigation:**
   - នៅ \`HomeScreen\`, បន្ថែម \`ElevatedButton\` ពីរដែលនាំទៅ \`DetailScreen\` និង \`SettingsScreen\`។
   - នៅ \`DetailScreen\`, បញ្ជូនអត្ថបទ "សួស្តីពីទំព័រដើម!" និងបង្ហាញវានៅក្នុង \`Text\` Widget។
   - នៅ \`SettingsScreen\`, បន្ថែម \`ElevatedButton\` ដែលត្រឡប់ Data "ការកំណត់បានរក្សាទុក!" ទៅ \`HomeScreen\`។

3. **Data Handling:**
   - នៅ \`HomeScreen\`, បង្ហាញ \`SnackBar\` ដែលបង្ហាញ Data ដែលត្រឡប់ពី \`SettingsScreen\`។
   - បន្ថែម \`ElevatedButton\` នៅ \`DetailScreen\` និង \`SettingsScreen\` ដើម្បីត្រឡប់ក្រោយ។

**ការណែនាំ:** ប្រើ \`Navigator.push\` និង \`Navigator.pop\`។ សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីពិនិត្យ Navigation Stack។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(NavigationApp());

class NavigationApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomeScreen(),
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
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => DetailScreen(data: 'សួស្តីពីទំព័រដើម!'),
                  ),
                );
              },
              child: Text('ទៅទំព័រលម្អិត'),
            ),
            ElevatedButton(
              onPressed: () async {
                final result = await Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => SettingsScreen()),
                );
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text(result ?? 'គ្មានទិន្នន័យ')),
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
  final String data;

  DetailScreen({required this.data});

  @override
  Widget build(BuildContext context) {
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

export default FlutterLesson4_1Content;
