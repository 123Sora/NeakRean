import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson5_1Content: LessonContent = {
  title: 'ការធ្វើ HTTP Requests នៅក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ HTTP Requests នៅក្នុង Flutter',
    'ស្វែងយល់ពីរបៀបប្រើ `http` Package សម្រាប់ធ្វើ API Calls',
    'រៀនប្រើ HTTP Methods ដូចជា GET និង POST',
    'ស្គាល់ការគ្រប់គ្រង Responses និង Errors ពី API',
    'អនុវត្តន៍ការបង្កើត App ដែលទាញទិន្នន័យពី API',
    'យល់ពីការប្រើ async/await សម្រាប់ HTTP Requests',
    'ស្វែងយល់ពីការប្រើ API Key និង Authentication'
  ],
  content: `
# ការធ្វើ HTTP Requests នៅក្នុង Flutter 🌐

---

**HTTP Requests** គឺជាវិធីសាស្ត្រដែលអនុញ្ញាតឱ្យ Flutter App ទំនាក់ទំនងជាមួយ Server ដើម្បីទាញ ឬផ្ញើទិន្នន័យ។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបប្រើ \`http\` Package ដើម្បីធ្វើ HTTP Requests (GET និង POST) និងគ្រប់គ្រង Responses។

---

## 1. អ្វីទៅជា HTTP Requests?

**HTTP Requests** គឺជាការស្នើសុំទៅ Server ដើម្បីទទួល ឬផ្ញើទិន្នន័យ។ វិធីសាស្ត្រទូទៅរួមមាន៖
- **GET:** ទាញទិន្នន័យពី Server។
- **POST:** ផ្ញើទិន្នន័យទៅ Server។
- **PUT:** ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ។
- **DELETE:** លុបទិន្នន័យ។

Flutter ប្រើ \`http\` Package ដើម្បីធ្វើ HTTP Requests។

---

## 2. ការដំឡើង http Package

ដើម្បីប្រើ HTTP Requests ត្រូវបន្ថែម \`http\` Package ទៅក្នុង \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  http: ^1.2.0
\`\`\`

បន្ទាប់មក ដំណើរការ \`flutter pub get\` ដើម្បីទាញ Package។

---

## 3. ការធ្វើ GET Request

**GET Request** ប្រើសម្រាប់ទាញទិន្នន័យពី API Endpoint។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String _data = 'គ្មានទិន្នន័យ';

  Future<void> fetchData() async {
    try {
      final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts/1'));
      if (response.statusCode == 200) {
        setState(() {
          _data = response.body;
        });
      } else {
        setState(() {
          _data = 'បរាជ័យ: '$'{response.statusCode}';
        });
      }
    } catch (e) {
      setState(() {
        _data = 'កំហុស: $e';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('HTTP GET Request')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(_data, style: TextStyle(fontSize: 16)),
            ElevatedButton(
              onPressed: fetchData,
              child: Text('ទាញទិន្នន័យ'),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បង្ហាញទិន្នន័យ JSON ពី API Endpoint នៅពេលចុចប៊ូតុង។

---

## 4. ការធ្វើ POST Request

**POST Request** ប្រើសម្រាប់ផ្ញើទិន្នន័យទៅ Server។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String _result = 'គ្មានលទ្ធផល';

  Future<void> postData() async {
    try {
      final response = await http.post(
        Uri.parse('https://jsonplaceholder.typicode.com/posts'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'title': 'សួស្តី',
          'body': 'នេះគឺជាការសាកល្បង POST Request',
          'userId': 1,
        }),
      );
      if (response.statusCode == 201) {
        setState(() {
          _result = 'ជោគជ័យ: '$'{response.body}';
        });
      } else {
        setState(() {
          _result = 'បរាជ័យ: '$'{response.statusCode}';
        });
      }
    } catch (e) {
      setState(() {
        _result = 'កំហុស: $e';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('HTTP POST Request')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(_result, style: TextStyle(fontSize: 16)),
            ElevatedButton(
              onPressed: postData,
              child: Text('ផ្ញើទិន្នន័យ'),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បង្ហាញលទ្ធផលនៃ POST Request នៅពេលចុចប៊ូតុង។

---

## 5. ការគ្រប់គ្រង Errors

គួរតែប្រើ \`try-catch\` ដើម្បីគ្រប់គ្រង Errors នៅពេលធ្វើ HTTP Requests។

- **Status Codes:**
  - \`200\`: ជោគជ័យ (GET)
  - \`201\`: ជោគជ័យ (POST)
  - \`404\`: មិនរកឃើញ Endpoint
  - \`500\`: Server Error

**ឧទាហរណ៍:** មើលកូដខាងលើសម្រាប់ការគ្រប់គ្រង Errors ដោយប្រើ \`try-catch\`។

---

## 6. ការប្រើ API Key និង Authentication

API មួយចំនួនតម្រូវឱ្យប្រើ **API Key** ឬ **Authentication**។ អ្នកអាចបន្ថែម Headers ទៅក្នុង Request។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
Future<void> fetchDataWithApiKey() async {
  try {
    final response = await http.get(
      Uri.parse('https://api.example.com/data'),
      headers: {'Authorization': 'Bearer YOUR_API_KEY'},
    );
    if (response.statusCode == 200) {
      print(response.body);
    } else {
      print('បរាជ័យ: '$'{response.statusCode}');
    }
  } catch (e) {
    print('កំហុស: $e');
  }
}
\`\`\`

---

## 7. គន្លឹះសម្រាប់ HTTP Requests

- បន្ថែម \`http\` Package ទៅ \`pubspec.yaml\`។
- ប្រើ \`async/await\` សម្រាប់ HTTP Requests។
- គ្រប់គ្រង Errors ដោយប្រើ \`try-catch\`។
- ពិនិត្យ Status Code ដើម្បីធានាថា Request ជោគជ័យ។
- ប្រើ Headers សម្រាប់ API Key ឬ Authentication។
- ប្រើ Flutter DevTools ដើម្បីពិនិត្យ HTTP Requests និង Responses។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ GET Request</h3>
<p>ទាញទិន្នន័យពី API Endpoint។</p>
<pre><code class="language-dart">
Future<void> fetchData() async {
  final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts/1'));
  if (response.statusCode == 200) {
    print(response.body);
  } else {
    print('បរាជ័យ: '$'{response.statusCode}');
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ POST Request</h3>
<p>ផ្ញើទិន្នន័យទៅ API Endpoint។</p>
<pre><code class="language-dart">
Future<void> postData() async {
  final response = await http.post(
    Uri.parse('https://jsonplaceholder.typicode.com/posts'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({'title': 'សួស្តី', 'body': 'នេះគឺជាការសាកល្បង', 'userId': 1}),
  );
  if (response.statusCode == 201) {
    print(response.body);
  } else {
    print('បរាជ័យ: '$'{response.statusCode}');
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Error Handling</h3>
<p>គ្រប់គ្រង Errors នៅពេលធ្វើ Request។</p>
<pre><code class="language-dart">
Future<void> fetchData() async {
  try {
    final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts/1'));
    if (response.statusCode == 200) {
      print(response.body);
    } else {
      print('បរាជ័យ: '$'{response.statusCode}');
    }
  } catch (e) {
    print('កំហុស: $e');
  }
}
</code></pre>
`],
  quiz: [
    {
      question: 'តើ HTTP Requests គឺជាអ្វី?',
      options: [
        'ការគ្រប់គ្រង State',
        'ការទំនាក់ទំនងជាមួយ Server',
        'ការកំណត់ Theme',
        'ការបង្កើត Layout'
      ],
      correct: 1,
      explanation: 'HTTP Requests គឺជាការទំនាក់ទំនងជាមួយ Server ដើម្បីទាញ ឬផ្ញើទិន្នន័យ។'
    },
    {
      question: 'តើ Package ណាដែលប្រើសម្រាប់ HTTP Requests?',
      options: ['http', 'provider', 'get', 'flutter_bloc'],
      correct: 0,
      explanation: '`http` Package ត្រូវបន្ថែមទៅ `pubspec.yaml` សម្រាប់ HTTP Requests។'
    },
    {
      question: 'តើ `GET` Request ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្ញើទិន្នន័យ',
        'ទាញទិន្នន័យ',
        'លុបទិន្នន័យ',
        'ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`GET` Request ប្រើសម្រាប់ទាញទិន្នន័យពី Server។'
    },
    {
      question: 'តើ `POST` Request ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញទិន្នន័យ',
        'ផ្ញើទិន្នន័យ',
        'លុបទិន្នន័យ',
        'ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`POST` Request ប្រើសម្រាប់ផ្ញើទិន្នន័យទៅ Server។'
    },
    {
      question: 'តើ Status Code `200` មានន័យអ្វី?',
      options: [
        'បរាជ័យ',
        'ជោគជ័យ (GET)',
        'ជោគជ័យ (POST)',
        'មិនរកឃើញ'
      ],
      correct: 1,
      explanation: 'Status Code `200` មានន័យថា GET Request ជោគជ័យ។'
    },
    {
      question: 'តើ Status Code `201` មានន័យអ្វី?',
      options: [
        'បរាជ័យ',
        'ជោគជ័យ (GET)',
        'ជោគជ័យ (POST)',
        'មិនរកឃើញ'
      ],
      correct: 2,
      explanation: 'Status Code `201` មានន័យថា POST Request ជោគជ័យ។'
    },
    {
      question: 'តើ `try-catch` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'គ្រប់គ្រង Errors',
        'កំណត់ Theme',
        'ផ្ញើ Data'
      ],
      correct: 1,
      explanation: '`try-catch` ប្រើសម្រាប់គ្រប់គ្រង Errors នៅពេលធ្វើ HTTP Requests។'
    },
    {
      question: 'តើ `http.get` ត្រូវការ Parameter អ្វី?',
      options: ['Uri', 'Widget', 'State', 'Theme'],
      correct: 0,
      explanation: '`http.get` ត្រូវការ `Uri` Parameter សម្រាប់ Endpoint។'
    },
    {
      question: 'តើ Headers នៅក្នុង POST Request ប្រើសម្រាប់អ្វី?',
      options: [
        'បញ្ជូន Data',
        'កំណត់ Content Type ឬ Authentication',
        'បង្កើត Widget',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: 'Headers ប្រើសម្រាប់កំណត់ Content Type ឬ Authentication។'
    },
    {
      question: 'តើ `jsonEncode` ប្រើសម្រាប់អ្វី?',
      options: [
        'បំលែង JSON ទៅ Object',
        'បំលែង Object ទៅ JSON String',
        'បង្កើត Widget',
        'គ្រប់គ្រង Errors'
      ],
      correct: 1,
      explanation: '`jsonEncode` បំលែង Object ទៅ JSON String សម្រាប់ POST Request។'
    },
    {
      question: 'តើ Status Code `404` មានន័យអ្វី?',
      options: [
        'ជោគជ័យ',
        'មិនរកឃើញ Endpoint',
        'Server Error',
        'Authentication Error'
      ],
      correct: 1,
      explanation: 'Status Code `404` មានន័យថាមិនរកឃើញ Endpoint។'
    },
    {
      question: 'តើ `async/await` ប្រើសម្រាប់អ្វីនៅក្នុង HTTP Requests?',
      options: [
        'បង្កើត Widget',
        'រង់ចាំ Response ពី Server',
        'កំណត់ Theme',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`async/await` ប្រើសម្រាប់រង់ចាំ Response ពី Server។'
    },
    {
      question: 'តើ Flutter DevTools អាចជួយអ្វីក្នុង HTTP Requests?',
      options: [
        'បង្កើត Endpoint',
        'ពិនិត្យ Requests និង Responses',
        'កំណត់ Theme',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: 'Flutter DevTools អាចប្រើដើម្បីពិនិត្យ HTTP Requests និង Responses។'
    },
    {
      question: 'តើ API Key ប្រើនៅក្នុង Headers ដោយរបៀបណា?',
      options: [
        'Content-Type',
        'Authorization',
        'User-Agent',
        'Accept'
      ],
      correct: 1,
      explanation: 'API Key ត្រូវបានបញ្ជូននៅក្នុង Header `Authorization`។'
    },
    {
      question: 'តើ `response.body` ផ្តល់អ្វី?',
      options: [
        'Status Code',
        'ទិន្នន័យពី Server',
        'Headers',
        'Error Message'
      ],
      correct: 1,
      explanation: '`response.body` ផ្តល់ទិន្នន័យពី Server ជាទម្រង់ String។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលប្រើ \`http\` Package ដើម្បីធ្វើ HTTP Requests ទៅ API។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`HttpApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`HomeScreen\` សម្រាប់បង្ហាញទិន្នន័យ។
   - បន្ថែម \`AppBar\` ជាមួយ Title "HTTP Request App"។

2. **GET Request:**
   - បន្ថែម \`ElevatedButton\` ដែលធ្វើ GET Request ទៅ \`https://jsonplaceholder.typicode.com/posts/1\`។
   - បង្ហាញទិន្នន័យ (\`title\` និង \`body\`) នៅក្នុង \`Text\` Widgets។
   - បង្ហាញ \`CircularProgressIndicator\` នៅពេលទាញទិន្នន័យ។

3. **POST Request:**
   - បន្ថែម \`ElevatedButton\` ដែលធ្វើ POST Request ទៅ \`https://jsonplaceholder.typicode.com/posts\` ជាមួយទិន្នន័យ \`title\`, \`body\`, និង \`userId\`។
   - បង្ហាញលទ្ធផលនៃ POST Request នៅក្នុង \`SnackBar\`។

4. **Error Handling:**
   - គ្រប់គ្រង Errors ដោយប្រើ \`try-catch\` និងបង្ហាញ Error Message នៅក្នុង \`SnackBar\`។

**ការណែនាំ:** បន្ថែម \`http\` Package ទៅ \`pubspec.yaml\` សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីពិនិត្យ HTTP Requests។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() => runApp(HttpApp());

class HttpApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String _title = 'គ្មានទិន្នន័យ';
  String _body = 'គ្មានទិន្នន័យ';
  bool _isLoading = false;

  Future<void> fetchData() async {
    setState(() {
      _isLoading = true;
    });
    try {
      final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts/1'));
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        setState(() {
          _title = data['title'];
          _body = data['body'];
          _isLoading = false;
        });
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('បរាជ័យ: '$'{response.statusCode}')),
        );
        setState(() {
          _isLoading = false;
        });
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('កំហុស: $e')),
      );
      setState(() {
        _isLoading = false;
      });
    }
  }

  Future<void> postData() async {
    try {
      final response = await http.post(
        Uri.parse('https://jsonplaceholder.typicode.com/posts'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'title': 'សួស្តី',
          'body': 'នេះគឺជាការសាកល្បង POST',
          'userId': 1,
        }),
      );
      if (response.statusCode == 201) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('ជោគជ័យ: '$'{response.body}')),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('បរាជ័យ: '$'{response.statusCode}')),
        );
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('កំហុស: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('HTTP Request App')),
      body: Center(
        child: _isLoading
            ? CircularProgressIndicator()
            : Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('ចំណងជើង: $_title', style: TextStyle(fontSize: 16)),
                  SizedBox(height: 10),
                  Text('ខ្លឹមសារ: $_body', style: TextStyle(fontSize: 16)),
                  SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: fetchData,
                    child: Text('ទាញទិន្នន័យ'),
                  ),
                  ElevatedButton(
                    onPressed: postData,
                    child: Text('ផ្ញើទិន្នន័យ'),
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

export default FlutterLesson5_1Content;
