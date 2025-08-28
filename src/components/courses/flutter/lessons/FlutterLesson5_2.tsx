import type { LessonContent } from '../../../../types/LessonTypes';

const FlutterLesson5_2Content: LessonContent = {
  title: 'ការវិភាគ JSON នៅក្នុង Flutter',
  objectives: [
    'យល់ដឹងអំពីគោលគំនិតនៃ JSON និងការវិភាគ JSON',
    'ស្វែងយល់ពីរបៀបប្រើ `dart:convert` សម្រាប់ JSON Parsing',
    'រៀនបំលែង JSON ទៅជា Dart Objects',
    'ស្គាល់ការបង្កើត Model Classes សម្រាប់ JSON Data',
    'អនុវត្តន៍ការបង្កើត App ដែលទាញ និងបង្ហាញ JSON Data ពី API',
    'យល់ពីការគ្រប់គ្រង JSON Arrays និង Nested JSON',
    'ស្វែងយល់ពីការប្រើ Tools ដើម្បីបង្កើត Model Classes'
  ],
  content: `
# ការវិភាគ JSON នៅក្នុង Flutter 📊

---

**JSON** (JavaScript Object Notation) គឺជាទម្រង់ទិន្នន័យស្រាល ដែលប្រើសម្រាប់ផ្ទុក និងផ្លាស់ប្តូរទិន្នន័យ។ នៅក្នុង Flutter យើងប្រើ \`dart:convert\` Package ដើម្បីបំលែង JSON ទៅជា Dart Objects និងបង្ហាញទិន្នន័យនៅក្នុង UI។

---

## 1. អ្វីទៅជា JSON?

**JSON** គឺជាទម្រង់ទិន្នន័យដែលមាន៖
- **Object:** មាន Key-Value Pairs (ឧទាហរណ៍៖ \`{"name": "សុខា"}\`)។
- **Array:** បណ្តុំនៃ Objects ឬ Values (ឧទាហរណ៍៖ \`[{"id": 1}, {"id": 2}]\`)។

**ឧទាហរណ៍ JSON:**

\`\`\`json
{
  "id": 1,
  "title": "សួស្តី",
  "body": "នេះគឺជាការសាកល្បង",
  "userId": 1
}
\`\`\`

---

## 2. ការបំលែង JSON ទៅ Dart Objects

Flutter ប្រើ \`dart:convert\` Package ដើម្បីបំលែង JSON។
- **jsonDecode:** បំលែង JSON String ទៅ Dart Object (Map ឬ List)។
- **jsonEncode:** បំលែង Dart Object ទៅ JSON String។

**ឧទាហរណ៍កូដ៖**

\`\`\`dart
import 'dart:convert';

void main() {
  String jsonString = '''
  {
    "id": 1,
    "title": "សួស្តី",
    "body": "នេះគឺជាការសាកល្បង",
    "userId": 1
  }
  ''';
  Map<String, dynamic> data = jsonDecode(jsonString);
  print(data['title']); // បង្ហាញ: សួស្តី
}
\`\`\`

---

## 3. ការបង្កើត Model Classes

ដើម្បីធ្វើឱ្យការគ្រប់គ្រង JSON កាន់តែងាយស្រួល យើងបង្កើត **Model Classes** ដើម្បីបំលែង JSON ទៅជា Dart Objects។

**ឧទាហរណ៍កូដ៖**

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

## 4. ការទាញ JSON Data ពី API

ភ្ជាប់ \`http\` Package ជាមួយ \`dart:convert\` ដើម្បីទាញ និងបំលែង JSON Data។

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
  Post? _post;

  Future<void> fetchPost() async {
    try {
      final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts/1'));
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        setState(() {
          _post = Post.fromJson(data);
        });
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
      appBar: AppBar(title: Text('JSON Parsing')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            if (_post != null) ...[
              Text('ចំណងជើង: '$'{_post!.title}', style: TextStyle(fontSize: 16)),
              Text('ខ្លឹមសារ: '$'{_post!.body}', style: TextStyle(fontSize: 16)),
            ] else
              Text('គ្មានទិន្នន័យ'),
            ElevatedButton(
              onPressed: fetchPost,
              child: Text('ទាញទិន្នន័យ'),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

**លទ្ធផល:** បង្ហាញ \`title\` និង \`body\` ពី API Endpoint នៅក្នុង UI។

---

## 5. ការគ្រប់គ្រង JSON Arrays

API មួយចំនួនផ្តល់ JSON Arrays។ យើងប្រើ \`List\` ដើម្បីគ្រប់គ្រង។

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
  List<Post> _posts = [];

  Future<void> fetchPosts() async {
    try {
      final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts'));
      if (response.statusCode == 200) {
        final List<dynamic> data = jsonDecode(response.body);
        setState(() {
          _posts = data.map((json) => Post.fromJson(json)).toList();
        });
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
      appBar: AppBar(title: Text('JSON Array Parsing')),
      body: _posts.isEmpty
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

**លទ្ធផល:** បង្ហាញបញ្ជី Posts ពី API Endpoint នៅក្នុង \`ListView\`។

---

## 6. ការប្រើ Tools សម្រាប់ Model Classes

អ្នកអាចប្រើ Tools ដូចជា **json_to_dart** ឬ **https://javiercbk.github.io/json_to_dart/** ដើម្បីបង្កើត Model Classes ដោយស្វ័យប្រវត្តិ។

**ឧទាហរណ៍ JSON:**

\`\`\`json
{
  "id": 1,
  "title": "សួស្តី",
  "body": "នេះគឺជាការសាកល្បង",
  "userId": 1
}
\`\`\`

**Model Class ដែលបង្កើតដោយ Tool:**

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
}
\`\`\`

---

## 7. គន្លឹះសម្រាប់ JSON Parsing

- បន្ថែម \`http\` Package សម្រាប់ទាញ JSON Data។
- ប្រើ \`dart:convert\` សម្រាប់ \`jsonDecode\` និង \`jsonEncode\`។
- បង្កើត Model Classes ដើម្បីគ្រប់គ្រង JSON Data។
- ប្រើ \`List\` សម្រាប់ JSON Arrays។
- គ្រប់គ្រង Errors ដោយប្រើ \`try-catch\`។
- ប្រើ Tools ដើម្បីបង្កើត Model Classes ដោយស្វ័យប្រវត្តិ។
- ប្រើ Flutter DevTools ដើម្បីពិនិត្យ JSON Data និង HTTP Responses។
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការបំលែង JSON</h3>
<p>បំលែង JSON String ទៅ Dart Object។</p>
<pre><code class="language-dart">
String jsonString = '{"id": 1, "title": "សួស្តី"}';
Map<String, dynamic> data = jsonDecode(jsonString);
print(data['title']); // បង្ហាញ: សួស្តី
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ Model Class</h3>
<p>បង្កើត Model Class សម្រាប់ JSON Data។</p>
<pre><code class="language-dart">
class Post {
  final int id;
  final String title;
  Post({required this.id, required this.title});
  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(id: json['id'], title: json['title']);
  }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ JSON Array</h3>
<p>គ្រប់គ្រង JSON Array ពី API។</p>
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
`],
  quiz: [
    {
      question: 'តើ JSON គឺជាអ្វី?',
      options: [
        'Programming Language',
        'ទម្រង់ទិន្នន័យស្រាល',
        'Database',
        'Widget'
      ],
      correct: 1,
      explanation: 'JSON គឺជាទម្រង់ទិន្នន័យស្រាលសម្រាប់ផ្ទុក និងផ្លាស់ប្តូរទិន្នន័យ។'
    },
    {
      question: 'តើ Package ណាដែលប្រើសម្រាប់ JSON Parsing?',
      options: ['http', 'dart:convert', 'provider', 'get'],
      correct: 1,
      explanation: '`dart:convert` Package ប្រើសម្រាប់ JSON Parsing។'
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
      question: 'តើ `jsonEncode` ធ្វើអ្វី?',
      options: [
        'បំលែង JSON String ទៅ Dart Object',
        'បំលែង Dart Object ទៅ JSON String',
        'បង្កើត Widget',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`jsonEncode` បំលែង Dart Object ទៅ JSON String។'
    },
    {
      question: 'តើ Model Class ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Widget',
        'គ្រប់គ្រង JSON Data',
        'កំណត់ Theme',
        'ធ្វើ HTTP Request'
      ],
      correct: 1,
      explanation: 'Model Class ប្រើសម្រាប់គ្រប់គ្រង JSON Data ជា Dart Objects�।'
    },
    {
      question: 'តើ `factory` Constructor នៅក្នុង Model Class ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'បំលែង JSON ទៅ Dart Object',
        'ផ្ញើ Data',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`factory` Constructor បំលែង JSON ទៅ Dart Object។'
    },
    {
      question: 'តើ JSON Array ត្រូវបានគ្រប់គ្រងដោយអ្វីនៅក្នុង Dart?',
      options: ['Map', 'List', 'String', 'Widget'],
      correct: 1,
      explanation: 'JSON Array ត្រូវបានគ្រប់គ្រងដោយ `List` នៅក្នុង Dart។'
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
      question: 'តើ Tools ដូចជា json_to_dart ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើ HTTP Request',
        'បង្កើត Model Classes ដោយស្វ័យប្រវត្តិ',
        'បង្កើត Widget',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: 'Tools ដូចជា json_to_dart ប្រើសម្រាប់បង្កើត Model Classes ដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ `toJson` Method នៅក្នុង Model Class ធ្វើអ្វី?',
      options: [
        'បំលែង JSON ទៅ Dart Object',
        'បំលែង Dart Object ទៅ JSON',
        'បង្កើត Widget',
        'គ្រប់គ្រង Errors'
      ],
      correct: 1,
      explanation: '`toJson` Method បំលែង Dart Object ទៅ JSON។'
    },
    {
      question: 'តើ JSON Object មានទម្រង់បែបណា?',
      options: [
        'List នៃ Values',
        'Key-Value Pairs',
        'String',
        'Widget'
      ],
      correct: 1,
      explanation: 'JSON Object មានទម្រង់ជា Key-Value Pairs។'
    },
    {
      question: 'តើ `http` Package ត្រូវបានប្រើជាមួយ JSON Parsing ដោយរបៀបណា?',
      options: [
        'បង្កើត Model Class',
        'ទាញ JSON Data ពី API',
        'បង្កើត Widget',
        'កំណត់ Theme'
      ],
      correct: 1,
      explanation: '`http` Package ប្រើសម្រាប់ទាញ JSON Data ពី API។'
    },
    {
      question: 'តើ Flutter DevTools អាចជួយអ្វីក្នុង JSON Parsing?',
      options: [
        'បង្កើត Model Class',
        'ពិនិត្យ JSON Data និង Responses',
        'កំណត់ Theme',
        'គ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: 'Flutter DevTools អាចប្រើដើម្បីពិនិត្យ JSON Data និង HTTP Responses។'
    },
    {
      question: 'តើ `map` Method នៅក្នុង JSON Array ធ្វើអ្វី?',
      options: [
        'បង្កើត Widget',
        'បំលែង JSON Objects ទៅ Dart Objects',
        'ផ្ញើ Data',
        'គ្រប់គ្រង Errors'
      ],
      correct: 1,
      explanation: '`map` Method បំលែង JSON Objects ទៅ Dart Objects នៅក្នុង JSON Array។'
    },
    {
      question: 'តើអ្នកគួរប្រើអ្វីដើម្បីគ្រប់គ្រង Errors នៅពេល Parsing JSON?',
      options: [
        'setState',
        'try-catch',
        'Provider',
        'Bloc'
      ],
      correct: 1,
      explanation: '`try-catch` ប្រើសម្រាប់គ្រប់គ្រង Errors នៅពេល Parsing JSON។'
    }
  ],
  lab: {
    task: `
บង្កើត Flutter App ដែលប្រើ \`http\` Package និង \`dart:convert\` ដើម្បីទាញ និងបង្ហាញ JSON Data ពី API។

**តម្រូវការ:**

1. **App Structure:**
   - បង្កើត Stateless Widget មួយឈ្មោះ \`JsonApp\` ដែលប្រើ \`MaterialApp\`។
   - បង្កើត Stateful Widget មួយឈ្មោះ \`HomeScreen\` សម្រាប់បង្ហាញទិន្នន័យ។
   - បន្ថែម \`AppBar\` ជាមួយ Title "JSON Parsing App"។

2. **Model Class:**
   - បង្កើត \`Post\` Model Class ដែលមាន Fields: \`id\`, \`title\`, \`body\`, និង \`userId\`។
   - បន្ថែម \`fromJson\` និង \`toJson\` Methods។

3. **Single Post:**
   - បន្ថែម \`ElevatedButton\` ដែលធ្វើ GET Request ទៅ \`https://jsonplaceholder.typicode.com/posts/1\`។
   - បំលែង JSON Response ទៅ \`Post\` Object និងបង្ហាញ \`title\` និង \`body\` នៅក្នុង \`Text\` Widgets។
   - បង្ហាញ \`CircularProgressIndicator\` នៅពេលទាញទិន្នន័យ។

4. **Post List:**
   - បន្ថែម \`ElevatedButton\` ដែលធ្វើ GET Request ទៅ \`https://jsonplaceholder.typicode.com/posts\`។
   - បំលែង JSON Array ទៅ \`List<Post>\` និងបង្ហាញនៅក្នុង \`ListView.builder\`។

5. **Error Handling:**
   - គ្រប់គ្រង Errors ដោយប្រើ \`try-catch\` និងបង្ហាញ Error Message នៅក្នុង \`SnackBar\`។

**ការណែនាំ:** បន្ថែម \`http\` Package ទៅ \`pubspec.yaml\`។ សាកល្បង App នៅលើ Emulator និងប្រើ Flutter DevTools ដើម្បីពិនិត្យ JSON Data។
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

void main() => runApp(JsonApp());

class JsonApp extends StatelessWidget {
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
  Post? _singlePost;
  List<Post> _posts = [];
  bool _isLoading = false;

  Future<void> fetchSinglePost() async {
    setState(() {
      _isLoading = true;
    });
    try {
      final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts/1'));
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        setState(() {
          _singlePost = Post.fromJson(data);
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
      appBar: AppBar(title: Text('JSON Parsing App')),
      body: _isLoading
          ? Center(child: CircularProgressIndicator())
          : SingleChildScrollView(
              child: Column(
                children: [
                  if (_singlePost != null) ...[
                    Padding(
                      padding: EdgeInsets.all(16.0),
                      child: Column(
                        children: [
                          Text('ចំណងជើង: '$'{_singlePost!.title}', style: TextStyle(fontSize: 16)),
                          Text('ខ្លឹមសារ: '$'{_singlePost!.body}', style: TextStyle(fontSize: 16)),
                        ],
                      ),
                    ),
                  ],
                  ElevatedButton(
                    onPressed: fetchSinglePost,
                    child: Text('ទាញ Post តែមួយ'),
                  ),
                  ElevatedButton(
                    onPressed: fetchPosts,
                    child: Text('ទាញបញ្ជី Posts'),
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

export default FlutterLesson5_2Content;
