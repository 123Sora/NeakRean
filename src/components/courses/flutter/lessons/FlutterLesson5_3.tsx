import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson5_3Content: LessonContent = {
  title: 'ការរួមបញ្ចូល REST API នៅក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ REST API និងការរួមបញ្ចូលជាមួយ Flutter',
    'ស្វែងយល់ពីរបៀបប្រើ `http` Package សម្រាប់ REST API Calls',
    'រៀនប្រើ HTTP Methods (GET, POST, PUT, DELETE) ជាមួយ REST API',
    'ស្គាល់ការបង្កើត Model Classes សម្រាប់ JSON Responses',
    'អនុវត្តន៍ការបង្កើត App ដែលទាញ និងបង្ហាញទិន្នន័យពី REST API',
    'យល់ពីការគ្រប់គ្រង Errors និង Status Codes',
    'ស្វែងយល់ពីការប្រើ Authentication និង API Key ជាមួយ REST API',
    'រៀនបង្ហាញទិន្នន័យ API នៅក្នុង UI Components ដូចជា ListView'
  ],
  content: `
# ការរួមបញ្ចូល REST API នៅក្នុង Flutter 🌍

---

**REST API** (Representational State Transfer) គឺជាវិធីសាស្ត្រដែលអនុញ្ញាតឱ្យ Flutter App ទំនាក់ទំនងជាមួយ Server ដើម្បីទាញ ផ្ញើ ធ្វើបច្ចុប្បន្នភាព ឬលុបទិន្នន័យ។ នៅក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបរួមបញ្ចូល REST API ដោយប្រើ \`http\` Package និងបង្ហាញទិន្នន័យនៅក្នុង UI។

---

## 1. អ្វីទៅជា REST API?

**REST API** គឺជាចំណុចប្រទាក់ដែលអនុញ្ញាតឱ្យ Client (ឧទាហរណ៍៖ Flutter App) ទំនាក់ទំនងជាមួយ Server ដោយប្រើ HTTP Methods ដូចជា៖
- **GET:** ទាញទិន្នន័យ។
- **POST:** បង្កើតទិន្នន័យថ្មី។
- **PUT:** ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ។
- **DELETE:** លុបទិន្នន័យ។

REST API ត្រឡប់ទិន្នន័យជាទម្រង់ **JSON**។

---

## 2. ការដំឡើង http Package

ដើម្បីប្រើ REST API ត្រូវបន្ថែម \`http\` Package ទៅក្នុង \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  http: ^1.2.0
\`\`\`

បន្ទាប់មក ដំណើរការ \`flutter pub get\` ដើម្បីទាញ Package។

---

## 3. ការបង្កើត Model Class

ដើម្បីគ្រប់គ្រង JSON Responses ពី REST API យើងបង្កើត **Model Class**។

**ឧទាហរណ៍ Model Class:**

\`\`\`dart
class Post {
  final int id;
  final String title;
  final String body;
  final int userId;

  Post({required this.id, required this.title, required this.body, required this.userId});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: json['id'],
      title: json['title'],
      body: json['body'],
      userId: json['userId'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'body': body,
      'userId': userId,
    };
  }
}
\`\`\`

---

## 4. ការធ្វើ GET Request ជាមួយ REST API

**GET Request** ប្រើសម្រាប់ទាញទិន្នន័យពី REST API Endpoint។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class Post {
  final int id;
  final String title;
  final String body;
  final int userId;

  Post({required this.id, required this.title, required this.body, required this.userId});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: json['id'],
      title: json['title'],
      body: json['body'],
      userId: json['userId'],
    );
  }
}

void main() => runApp(RestApiApp());

class RestApiApp extends StatelessWidget {
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
  List<Post> _posts = [];
  bool _isLoading = false;

  Future<void> fetchPosts() async {
    setState(() {
      _isLoading = true;
    });
    try {
      final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts'));
      if (response.statusCode == 200) {
        final List<dynamic> data = jsonDecode(response.body);
        setState(() {
          _posts = data.map((json) => Post.fromJson(json)).toList();
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('REST API Integration')),
      body: _isLoading
          ? Center(child: CircularProgressIndicator())
          : _posts.isEmpty
              ? Center(child: Text('គ្មានទិន្នន័យ'))
              : ListView.builder(
                  itemCount: _posts.length,
                  itemBuilder: (context, index) {
                    return ListTile(
                      title: Text(_posts[index].title),
                      subtitle: Text(_posts[index].body),
                    );
                  },
                ),
      floatingActionButton: FloatingActionButton(
        onPressed: fetchPosts,
        child: Icon(Icons.download),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បង្ហាញបញ្ជី Posts ពី REST API នៅក្នុង \`ListView\`។

---

## 5. ការធ្វើ POST Request ជាមួយ REST API

**POST Request** ប្រើសម្រាប់បង្កើតទិន្នន័យថ្មីនៅលើ Server។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class Post {
  final int id;
  final String title;
  final String body;
  final int userId;

  Post({required this.id, required this.title, required this.body, required this.userId});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: json['id'],
      title: json['title'],
      body: json['body'],
      userId: json['userId'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'body': body,
      'userId': userId,
    };
  }
}

void main() => runApp(RestApiApp());

class RestApiApp extends StatelessWidget {
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

  Future<void> createPost() async {
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
        final data = jsonDecode(response.body);
        final post = Post.fromJson(data);
        setState(() {
          _result = 'ជោគជ័យ: '$'{post.title}';
        });
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('បានបង្កើត Post: '$'{post.title}')),
        );
      } else {
        setState(() {
          _result = 'បរាជ័យ: '$'{response.statusCode}';
        });
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('បរាជ័យ: '$'{response.statusCode}')),
        );
      }
    } catch (e) {
      setState(() {
        _result = 'កំហុស: $e';
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('កំហុស: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('REST API POST')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(_result, style: TextStyle(fontSize: 16)),
            ElevatedButton(
              onPressed: createPost,
              child: Text('បង្កើត Post'),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បង្ហាញលទ្ធផលនៃ POST Request នៅក្នុង \`SnackBar\`។

---

## 6. ការធ្វើ PUT និង DELETE Requests

- **PUT Request:** ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ។
- **DELETE Request:** លុបទិន្នន័យ។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
Future<void> updatePost(int id) async {
  try {
    final response = await http.put(
      Uri.parse('https://jsonplaceholder.typicode.com/posts/$id'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'title': 'បានធ្វើបច្ចុប្បន្នភាព',
        'body': 'នេះគឺជាការធ្វើបច្ចុប្បន្នភាព',
        'userId': 1,
      }),
    );
    if (response.statusCode == 200) {
      print('ជោគជ័យ: '$'{response.body}');
    } else {
      print('បរាជ័យ: '$'{response.statusCode}');
    }
  } catch (e) {
    print('កំហុស: $e');
  }
}

Future<void> deletePost(int id) async {
  try {
    final response = await http.delete(Uri.parse('https://jsonplaceholder.typicode.com/posts/$id'));
    if (response.statusCode == 200) {
      print('បានលុប Post');
    } else {
      print('បរាជ័យ: '$'{response.statusCode}');
    }
  } catch (e) {
    print('កំហុស: $e');
  }
}
\`\`\`

---

## 7. ការប្រើ Authentication និង API Key

API មួយចំនួនតម្រូវឱ្យប្រើ **API Key** ឬ **Authentication**។

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

## 8. គន្លឹះសម្រាប់ REST API Integration

- បន្ថែម \`http\` Package ទៅ \`pubspec.yaml\`។
- បង្កើត Model Classes សម្រាប់ JSON Responses។
- ប្រើ \`async/await\` និង \`try-catch\` សម្រាប់ HTTP Requests។
- ពិនិត្យ Status Codes (200, 201, 404, 500) ដើម្បីគ្រប់គ្រង Responses។
- បន្ថែម Headers សម្រាប់ Authentication ឬ API Key។
- ប្រើ \`ListView.builder\` សម្រាប់បង្ហាញ JSON Arrays។
- ប្រើ Flutter DevTools ដើម្បីពិនិត្យ HTTP Requests និង JSON Responses។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ GET Request ជាមួយ REST API</h3>
<p>ទាញបញ្ជី Posts ពី REST API។</p>
<pre><code class="language-dart">
Future<void> fetchPosts() async {
  final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts'));
  if (response.statusCode == 200) {
    final List<dynamic> data = jsonDecode(response.body);
    List<Post> posts = data.map((json) => Post.fromJson(json)).toList();
    print(posts.length);
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ POST Request ជាមួយ REST API</h3>
<p>បង្កើត Post ថ្មី។</p>
<pre><code class="language-dart">
Future<void> createPost() async {
  final response = await http.post(
    Uri.parse('https://jsonplaceholder.typicode.com/posts'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({'title': 'សួស្តី', 'body': 'នេះគឺជាការសាកល្បង', 'userId': 1}),
  );
  if (response.statusCode == 201) {
    final post = Post.fromJson(jsonDecode(response.body));
    print(post.title);
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ PUT និង DELETE Requests</h3>
<p>ធ្វើបច្ចុប្បន្នភាព និងលុប Post។</p>
<pre><code class="language-dart">
Future<void> updatePost(int id) async {
  final response = await http.put(
    Uri.parse('https://jsonplaceholder.typicode.com/posts/$id'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({'title': 'បានធ្វើបច្ចុប្បន្នភាព', 'body': 'នេះគឺជាការធ្វើបច្ចុប្បន្នភាព', 'userId': 1}),
  );
  print(response.statusCode == 200 ? 'ជោគជ័យ' : 'បរាជ័យ');
}

Future<void> deletePost(int id) async {
  final response = await http.delete(Uri.parse('https://jsonplaceholder.typicode.com/posts/$id'));
  print(response.statusCode == 200 ? 'បានលុប' : 'បរាជ័យ');
}
</code></pre>
`],
  quiz: [
    {
      question: 'តើ REST API គឺជាអ្វី?',
      options: [
        'Database',
        'ចំណុចប្រទាក់សម្រាប់ទំនាក់ទំនងជាមួយ Server',
        'Programming Language',
        'Widget'
      ],
      correct: 1,
      explanation: 'REST API គឺជាចំណុចប្រទាក់សម្រាប់ទំនាក់ទំនងជាមួយ Server ដោយប្រើ HTTP Methods។'
    },
    {
      question: 'តើ Package ណាដែលប្រើសម្រាប់ REST API Calls?',
      options: ['http', 'provider', 'get', 'flutter_bloc'],
      correct: 0,
      explanation: '`http` Package ត្រូវបន្ថែមទៅ `pubspec.yaml` សម្រាប់ REST API Calls។'
    },
    {
      question: 'តើ `GET` Request ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើតទិន្នន័យ',
        'ទាញទិន្នន័យ',
        'ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`GET` Request ប្រើសម្រាប់ទាញទិន្នន័យពី Server។'
    },
    {
      question: 'តើ `POST` Request ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញទិន្នន័យ',
        'បង្កើតទិន្នន័យថ្មី',
        'លុបទិន្នន័យ',
        'ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`POST` Request ប្រើសម្រាប់បង្កើតទិន្នន័យថ្មីនៅលើ Server។'
    },
    {
      question: 'តើ `PUT` Request ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញទិន្នន័យ',
        'បង្កើតទិន្នន័យ',
        'ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 2,
      explanation: '`PUT` Request ប្រើសម្រាប់ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ។'
    },
    {
      question: 'តើ `DELETE` Request ប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញទិន្នន័យ',
        'បង្កើតទិន្នន័យ',
        'ធ្វើបច្ចុប្បន្នភាពទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 3,
      explanation: '`DELETE` Request ប្រើសម្រាប់លុបទិន្នន័យ។'
    },
    {
      question: 'តើ Status Code `200` មានន័យអ្វី?',
      options: [
        'បរាជ័យ',
        'ជោគជ័យ (GET/PUT)',
        'ជោគជ័យ (POST)',
        'មិនរកឃើញ'
      ],
      correct: 1,
      explanation: 'Status Code `200` មានន័យថា GET ឬ PUT Request ជោគជ័យ។'
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
      question: 'តើ Model Class ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'គ្រប់គ្រង JSON Responses',
        'កំណត់ Theme',
        'ធ្វើ HTTP Request'
      ],
      correct: 1,
      explanation: 'Model Class ប្រើសម្រាប់គ្រប់គ្រង JSON Responses ជា Dart Objects�।'
    },
    {
      question: 'តើ `jsonDecode` ធ្វើអ្វី?',
      options: [
        'បំលែង Object ទៅ JSON',
        'បំលែង JSON String ទៅ Dart Object',
        'បង្កើត Widget',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`jsonDecode` បំលែង JSON String ទៅ Dart Object។'
    },
    {
      question: 'តើ `try-catch` ប្រើសម្រាប់អ្វីនៅក្នុង REST API?',
      options: [
        'បង្កើត Widget',
        'គ្រប់គ្រង Errors',
        'កំណត់ Theme',
        'ផ្ញើ Data'
      ],
      correct: 1,
      explanation: '`try-catch` ប្រើសម្រាប់គ្រប់គ្រង Errors នៅពេលធ្វើ API Calls។'
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
      question: 'តើ `ListView.builder` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Model Class',
        'បង្ហាញ JSON Data ជាបញ្ជី',
        'ធ្វើ HTTP Request',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`ListView.builder` ប្រើសម្រាប់បង្ហាញ JSON Data ជាបញ្ជី។'
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
      question: 'តើ Flutter DevTools អាចជួយអ្វីក្នុង REST API Integration?',
      options: [
        'បង្កើត Endpoint',
        'ពិនិត្យ HTTP Requests និង Responses',
        'កំណត់ Theme',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: 'Flutter DevTools អាចប្រើដើម្បីពិនិត្យ HTTP Requests និង Responses។'
    }
  ],
  lab: {
    task: `
បង្កើត Flutter App ដែលរួមបញ្ចូល REST API ដោយប្រើ \`http\` Package ដើម្បីទាញ បង្កើត ធ្វើបច្ចុប្បន្នភាព និងលុបទិន្នន័យ។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`RestApiApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`HomeScreen\` សម្រាប់បង្ហាញទិន្នន័យ។
   - បន្ថែម \`AppBar\` ជាមួយ Title "REST API App"។

2. **Model Class:**
   - បង្កើត \`Post\` Model Class ដែលមាន Fields: \`id\`, \`title\`, \`body\`, និង \`userId\`។
   - បន្ថែម \`fromJson\` និង \`toJson\` Methods។

3. **GET Request:**
   - បន្ថែម \`ElevatedButton\` ដែលធ្វើ GET Request ទៅ \`https://jsonplaceholder.typicode.com/posts\`។
   - បំលែង JSON Response ទៅ \`List<Post>\` និងបង្ហាញនៅក្នុង \`ListView.builder\`។
   - បង្ហាញ \`CircularProgressIndicator\` នៅពេលទាញទិន្នន័យ។

4. **POST Request:**
   - បន្ថែម \`ElevatedButton\` ដែលធ្វើ POST Request ទៅ \`https://jsonplaceholder.typicode.com/posts\` ជាមួយទិន្នន័យ \`title\`, \`body\`, និង \`userId\`។
   - បង្ហាញលទ្ធផលនៅក្នុង \`SnackBar\`។

5. **PUT Request:**
   - បន្ថែម \`ElevatedButton\` ដែលធ្វើ PUT Request ទៅ \`https://jsonplaceholder.typicode.com/posts/1\` ដើម្បីធ្វើបច្ចុប្បន្នភាព Post។
   - បង្ហាញលទ្ធផលនៅក្នុង \`SnackBar\`។

6. **DELETE Request:**
   - បន្ថែម \`ElevatedButton\` ដែលធ្វើ DELETE Request ទៅ \`https://jsonplaceholder.typicode.com/posts/1\`។
   - បង្ហាញលទ្ធផលនៅក្នុង \`SnackBar\`

7. **Error Handling:**
   - គ្រប់គ្រង Errors ដោយប្រើ \`try-catch\` និងបង្ហាញ Error Message នៅក្នុង \`SnackBar\`។

**ការណែនាំ:** បន្ថែម \`http\` Package ទៅ \`pubspec.yaml\`។ សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីពិនិត្យ HTTP Requests និង JSON Responses។
    `,
    solution: `
\`\`\`dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class Post {
  final int id;
  final String title;
  final String body;
  final int userId;

  Post({required this.id, required this.title, required this.body, required this.userId});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: json['id'],
      title: json['title'],
      body: json['body'],
      userId: json['userId'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'body': body,
      'userId': userId,
    };
  }
}

void main() => runApp(RestApiApp());

class RestApiApp extends StatelessWidget {
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
  List<Post> _posts = [];
  bool _isLoading = false;
  String _result = 'គ្មានលទ្ធផល';

  Future<void> fetchPosts() async {
    setState(() {
      _isLoading = true;
    });
    try {
      final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts'));
      if (response.statusCode == 200) {
        final List<dynamic> data = jsonDecode(response.body);
        setState(() {
          _posts = data.map((json) => Post.fromJson(json)).toList();
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

  Future<void> createPost() async {
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
        final post = Post.fromJson(jsonDecode(response.body));
        setState(() {
          _result = 'បានបង្កើត: '$'{post.title}';
        });
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('បានបង្កើត Post: '$'{post.title}')),
        );
      } else {
        setState(() {
          _result = 'បរាជ័យ: '$'{response.statusCode}';
        });
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('បរាជ័យ: '$'{response.statusCode}')),
        );
      }
    } catch (e) {
      setState(() {
        _result = 'កំហុស: $e';
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('កំហុស: $e')),
      );
    }
  }

  Future<void> updatePost() async {
    try {
      final response = await http.put(
        Uri.parse('https://jsonplaceholder.typicode.com/posts/1'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'title': 'បានធ្វើបច្ចុប្បន្នភាព',
          'body': 'នេះគឺជាការធ្វើបច្ចុប្បន្នភាព',
          'userId': 1,
        }),
      );
      if (response.statusCode == 200) {
        final post = Post.fromJson(jsonDecode(response.body));
        setState(() {
          _result = 'បានធ្វើបច្ចុប្បន្នភាព: '$'{post.title}';
        });
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('បានធ្វើបច្ចុប្បន្នភាព Post: '$'{post.title}')),
        );
      } else {
        setState(() {
          _result = 'បរាជ័យ: '$'{response.statusCode}';
        });
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('បរាជ័យ: '$'{response.statusCode}')),
        );
      }
    } catch (e) {
      setState(() {
        _result = 'កំហុស: $e';
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('កំហុស: $e')),
      );
    }
  }

  Future<void> deletePost() async {
    try {
      final response = await http.delete(Uri.parse('https://jsonplaceholder.typicode.com/posts/1'));
      if (response.statusCode == 200) {
        setState(() {
          _result = 'បានលុប Post';
        });
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('បានលុប Post')),
        );
      } else {
        setState(() {
          _result = 'បរាជ័យ: '$'{response.statusCode}';
        });
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('បរាជ័យ: '$'{response.statusCode}')),
        );
      }
    } catch (e) {
      setState(() {
        _result = 'កំហុស: $e';
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('កំហុស: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('REST API App')),
      body: _isLoading
          ? Center(child: CircularProgressIndicator())
          : SingleChildScrollView(
              child: Column(
                children: [
                  Padding(
                    padding: EdgeInsets.all(16.0),
                    child: Text(_result, style: TextStyle(fontSize: 16)),
                  ),
                  ElevatedButton(
                    onPressed: fetchPosts,
                    child: Text('ទាញបញ្ជី Posts'),
                  ),
                  ElevatedButton(
                    onPressed: createPost,
                    child: Text('បង្កើត Post'),
                  ),
                  ElevatedButton(
                    onPressed: updatePost,
                    child: Text('ធ្វើបច្ចុប្បន្នភាព Post'),
                  ),
                  ElevatedButton(
                    onPressed: deletePost,
                    child: Text('លុប Post'),
                  ),
                  if (_posts.isNotEmpty)
                    SizedBox(
                      height: 400,
                      child: ListView.builder(
                        itemCount: _posts.length,
                        itemBuilder: (context, index) {
                          return ListTile(
                            title: Text(_posts[index].title),
                            subtitle: Text(_posts[index].body),
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

export default FlutterLesson5_3Content;
