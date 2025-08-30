import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson4_2Content: LessonContent = {
  title: 'JSON Parsing ជាមួយ Codable',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា JSON',
    'ស្គាល់ពីរបៀបប្រើ `Codable` Protocol សម្រាប់ Encoding និង Decoding',
    'រៀនពីរបៀបបកប្រែ JSON Data ទៅជា Swift Structs ដោយប្រើ `JSONDecoder`',
    'អនុវត្តការបកប្រែ JSON ជាមួយនឹង Networking'
  ],
  content: `
# JSON Parsing ជាមួយ Codable 🧩

---

បន្ទាប់ពីទាញយកទិន្នន័យពី API ហើយ ទិន្នន័យនោះជាធម្មតាមានទម្រង់ជា **JSON (JavaScript Object Notation)**។ JSON គឺជាទម្រង់ស្តង់ដារមួយសម្រាប់ផ្លាស់ប្តូរទិន្នន័យ។ ដើម្បីធ្វើការជាមួយទិន្នន័យនេះនៅក្នុង Swift, អ្នកត្រូវបកប្រែ (Parse) វាទៅជា Swift Object វិញ។ នៅក្នុង Swift 5, ការងារនេះគឺងាយស្រួលបំផុតដោយប្រើ Protocol **\`Codable\`** ។

## 1. អ្វីទៅជា JSON?

JSON គឺស្រដៀងនឹង Dictionary នៅក្នុង Swift ដែលប្រើ Key-Value Pair។
\`\`\`json
{
  "name": "Jane Doe",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Physics"]
}
\`\`\`

## 2. ការប្រើប្រាស់ \`Codable\` Protocol

**\`Codable\`** គឺជា Type Alias សម្រាប់ Protocol ពីរគឺ **\`Encodable\`** និង **\`Decodable\`**។
-   **\`Encodable\`:** ប្រើសម្រាប់បកប្រែ Swift Object ទៅជា Data (ឧ. JSON)។
-   **\`Decodable\`:** ប្រើសម្រាប់បកប្រែ Data (ឧ. JSON) ទៅជា Swift Object។

ដើម្បីប្រើប្រាស់ \`Codable\` អ្នកគ្រាន់តែប្រកាស \`struct\` ឬ \`class\` របស់អ្នកឱ្យគោរពតាម Protocol នេះ។ Properties របស់ \`struct\` ត្រូវតែត្រូវគ្នានឹង Keys នៅក្នុង JSON Data។

\`\`\`swift
// Model របស់យើងត្រូវតែគោរពតាម Codable
struct User: Codable {
    let name: String
    let age: Int
    let isStudent: Bool
    let courses: [String]
}
\`\`\`

---

## 3. ការបកប្រែ JSON ជាមួយ \`JSONDecoder\`

**\`JSONDecoder\`** គឺជា Class ដែលបកប្រែ JSON Data ទៅជា Object របស់ Swift ។ ដំណើរការនេះត្រូវបានគេហៅថា **Decoding**។

**ជំហាននៃការ Decoding:**
1.  **មាន JSON Data:** ត្រូវប្រាកដថាអ្នកមានទិន្នន័យជា \`Data\` Type។
2.  **បង្កើត \`JSONDecoder\`:** បង្កើត Instance របស់ \`JSONDecoder\`។
3.  **ហៅ \`decode()\`:** ហៅ \`decode()\` method ដោយបញ្ជាក់ពីប្រភេទ Object ដែលអ្នកចង់បាន (ឧ. \`User.self\`)។

\`\`\`swift
// ឧទាហរណ៍៖ ការបកប្រែ JSON Data
let jsonData = """
{
  "name": "Sokha",
  "age": 28,
  "isStudent": true,
  "courses": ["Computer Science", "SwiftUI"]
}
""".data(using: .utf8)!

let decoder = JSONDecoder()

do {
    let user = try decoder.decode(User.self, from: jsonData)
    print("ឈ្មោះ៖ \\(user.name), អាយុ៖ \\(user.age)")
} catch {
    print("បរាជ័យក្នុងការបកប្រែ JSON: \\(error)")
}
\`\`\`

---

## 4. ភ្ជាប់ Codable ជាមួយនឹង Networking

ឥឡូវនេះយើងនឹងបញ្ចូលគ្នានូវ Networking (មេរៀនមុន) ជាមួយនឹង JSON Parsing។

\`\`\`swift
// Model
struct Post: Codable {
    let userId: Int
    let id: Int
    let title: String
    let body: String
}

// Function សម្រាប់ទាញយកនិងបកប្រែ
func fetchAndDecode() {
    guard let url = URL(string: "https://jsonplaceholder.typicode.com/posts/1") else { return }

    let task = URLSession.shared.dataTask(with: url) { data, _, error in
        guard let data = data, error == nil else {
            print("មានបញ្ហា Network")
            return
        }
        
        // ប្រើ DispatchQueue.main.async ព្រោះការបកប្រែអាចចំណាយពេល
        DispatchQueue.main.async {
            do {
                let decoder = JSONDecoder()
                // ប្រើ decoder.decode(...)
                let post = try decoder.decode(Post.self, from: data)
                print("Title: \\(post.title)")
                print("Body: \\(post.body)")
            } catch {
                print("JSON Parsing Error: \\(error)")
            }
        }
    }
    task.resume()
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការដោះស្រាយ Key មិនត្រូវគ្នា</h3>
<p>ប្រសិនបើ Key នៅក្នុង JSON មិនដូច Property Name នៅក្នុង Swift, អ្នកអាចប្រើ \`CodingKeys\`។</p>
<pre><code class="language-swift">
import SwiftUI

struct MyProfile: Codable {
    let firstName: String
    let lastName: String
    
    // JSON Keys គឺ snake_case
    enum CodingKeys: String, CodingKey {
        case firstName = "first_name"
        case lastName = "last_name"
    }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការបកប្រែ Array of JSON Objects</h3>
<p>ប្រសិនបើ JSON Response ជា Array នៃ Objects, អ្នកគ្រាន់តែបកប្រែ Array នោះ។</p>
<pre><code class="language-swift">
struct Post: Codable, Identifiable {
    let userId: Int
    let id: Int
    let title: String
    let body: String
}

// ... នៅក្នុង Networking Function ...
let posts = try JSONDecoder().decode([Post].self, from: data)
print("ចំនួន Posts: \\(posts.count)")
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `Codable` Protocol ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង State',
        'បកប្រែទិន្នន័យរវាង Swift Object និង Data',
        'រៀបចំ Layouts',
        'ធ្វើឱ្យកម្មវិធីដំណើរការលឿន'
      ],
      correct: 1,
      explanation: '`Codable` ត្រូវបានប្រើសម្រាប់ Encoding (Swift to Data) និង Decoding (Data to Swift)។'
    },
    {
      question: 'តើ `JSONDecoder` ប្រើសម្រាប់អ្វី?',
      options: [
        'បកប្រែ Swift Object ទៅជា JSON',
        'បកប្រែ JSON Data ទៅជា Swift Object',
        'ទាញយកទិន្នន័យពី Network',
        'គ្រប់គ្រង File System'
      ],
      correct: 1,
      explanation: '`JSONDecoder` គឺសម្រាប់ Decoding (បកប្រែ JSON Data ទៅជា Swift Object)។'
    },
    {
      question: 'តើ `Encodable` និង `Decodable` ជាផ្នែកមួយនៃ Protocol ណា?',
      options: [
        '`Codable`',
        '`Identifiable`',
        '`ObservableObject`',
        '`Equatable`'
      ],
      correct: 0,
      explanation: '`Codable` គឺជា Type Alias សម្រាប់ `Encodable` និង `Decodable`។'
    },
    {
      question: 'តើ `JSON` តំណាងឱ្យអ្វី?',
      options: [
        'JavaScript Object Notation',
        'Java Syntax Object',
        'Joker Object Network',
        'JSON Object Node'
      ],
      correct: 0,
      explanation: 'JSON តំណាងឱ្យ JavaScript Object Notation។'
    },
    {
      question: 'តើ `try decoder.decode(Post.self, from: data)` នឹងធ្វើអ្វី?',
      options: [
        'បកប្រែ `data` ទៅជា `Post` Object',
        'បកប្រែ `Post` Object ទៅជា Data',
        'ទាញយក `data` ពី Server',
        'បោះ Error'
      ],
      correct: 0,
      explanation: 'វាហៅ `decode()` Method ដើម្បីបកប្រែ `data` ទៅជា `Post` Object។'
    },
    {
      question: 'តើ `CodingKeys` ប្រើសម្រាប់ករណីណា?',
      options: [
        'នៅពេលដែល Property Name នៅក្នុង Struct ខុសពី Key Name នៅក្នុង JSON',
        'នៅពេលដែលទិន្នន័យមានចំនួនច្រើន',
        'នៅពេលដែលអ្នកប្រើ Async/Await',
        'នៅពេលដែលអ្នកមិនចង់បកប្រែទិន្នន័យ'
      ],
      correct: 0,
      explanation: '`CodingKeys` ត្រូវបានប្រើនៅពេលដែល Key Name នៅក្នុង JSON មិនត្រូវគ្នានឹង Property Name នៅក្នុង Swift Struct។'
    },
    {
      question: 'តើ `JSONEncoder` ប្រើសម្រាប់អ្វី?',
      options: [
        'បកប្រែ JSON Data ទៅជា Swift Object',
        'បកប្រែ Swift Object ទៅជា JSON Data',
        'ទាញយកទិន្នន័យពី Network',
        'គ្រប់គ្រង File'
      ],
      correct: 1,
      explanation: '`JSONEncoder` ត្រូវបានប្រើដើម្បី Encoding (បកប្រែ Swift Object ទៅជា Data)។'
    },
    {
      question: 'តើ `Decodable` Protocol ប្រើសម្រាប់ Encoding ឬ Decoding?',
      options: [
        'Encoding',
        'Decoding',
        'ទាំងពីរ',
        'មិនប្រើសម្រាប់ទាំងពីរទេ'
      ],
      correct: 1,
      explanation: '`Decodable` ត្រូវបានប្រើសម្រាប់ Decoding (បកប្រែ Data ទៅជា Swift Object)។'
    },
    {
      question: 'តើ `do-try-catch` Block ប្រើសម្រាប់អ្វីនៅពេលបកប្រែ JSON?',
      options: [
        'ដើម្បីបង្កើត Function',
        'ដើម្បីគ្រប់គ្រង Potential Errors ពេល Decoding',
        'ដើម្បីធ្វើឱ្យកូដដំណើរការលឿន',
        'គ្មានហេតុផលអ្វីទេ'
      ],
      correct: 1,
      explanation: '`do-try-catch` ត្រូវបានប្រើដើម្បីគ្រប់គ្រង Error ដែលអាចកើតឡើងក្នុងពេល Decoding JSON។'
    },
    {
      question: 'តើ `struct` អាចគោរពតាម Protocol `Codable` បានដែរឬទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលមាន Properties ទាំងអស់ជា `String`',
        'បានតែពេលប្រើជាមួយ `class`'
      ],
      correct: 0,
      explanation: '`struct` អាចគោរពតាម Protocol `Codable` បានយ៉ាងងាយស្រួល។'
    },
    {
      question: 'តើការបកប្រែ JSON ជា Synchronous ឬ Asynchronous?',
      options: [
        'Synchronous',
        'Asynchronous',
        'វាអាស្រ័យលើកូដ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 0,
      explanation: 'ការបកប្រែ JSON ខ្លួនវាកើតឡើងនៅលើ Thread ដែលអ្នកហៅវា ដូច្នេះវាគឺជា Synchronous Operation។'
    }
  ],
  lab: {
    task: `
បង្កើត App សាមញ្ញមួយដែលទាញយកបញ្ជី Post ពី Server ហើយបង្ហាញវានៅក្នុង List។

**តម្រូវការ:**

1.  **Model:**
    -   បង្កើត \`struct\` មួយឈ្មោះ \`Post\` ដែលមាន Properties \`id\`, \`title\` និង \`body\`។
    -   \`struct\` ត្រូវតែគោរពតាម \`Codable\` និង \`Identifiable\`។

2.  **ViewModel:**
    -   បង្កើត \`class\` មួយឈ្មោះ \`PostListViewModel\` ដែលគោរពតាម \`ObservableObject\`។
    -   មាន Property \`@Published var posts = [Post]()\`។
    -   មាន Function មួយឈ្មោះ \`fetchPosts()\` ដែលប្រើ \`URLSession\` ដើម្បីទាញយកទិន្នន័យពី \`https://jsonplaceholder.typicode.com/posts\`។
    -   នៅក្នុង \`fetchPosts()\`, ត្រូវបកប្រែ JSON Data ទៅជា Array of \`Post\` Objects ហើយដាក់វាទៅក្នុង \`posts\` Property។

3.  **View:**
    -   នៅក្នុង \`ContentView\`, ប្រើ \`@StateObject\` ដើម្បីបង្កើត \`PostListViewModel\`។
    -   ប្រើ \`List\` និង \`ForEach\` ដើម្បីបង្ហាញ Posts ។
    -   ហៅ \`fetchPosts()\` នៅក្នុង \`onAppear()\` Modifier។

**ការណែនាំ:** ត្រូវប្រាកដថាអ្នកចាប់ Error ពេលបកប្រែ JSON។
    `,
    solution: `
\`\`\`swift
import SwiftUI

// Step 1: Model
struct Post: Codable, Identifiable {
    let id: Int
    let title: String
    let body: String
}

// Step 2: ViewModel (ObservableObject)
class PostListViewModel: ObservableObject {
    @Published var posts = [Post]()

    func fetchPosts() {
        guard let url = URL(string: "https://jsonplaceholder.typicode.com/posts") else {
            return
        }
        
        URLSession.shared.dataTask(with: url) { data, response, error in
            DispatchQueue.main.async {
                guard let data = data, error == nil else {
                    print("Error: \\(error?.localizedDescription ?? "Unknown Error")")
                    return
                }

                do {
                    let decodedPosts = try JSONDecoder().decode([Post].self, from: data)
                    self.posts = decodedPosts
                } catch {
                    print("JSON Decoding Error: \\(error)")
                }
            }
        }.resume()
    }
}

// Step 3: View
struct PostListView: View {
    @StateObject private var viewModel = PostListViewModel()
    
    var body: some View {
        NavigationView {
            List {
                ForEach(viewModel.posts) { post in
                    VStack(alignment: .leading) {
                        Text(post.title)
                            .font(.headline)
                        Text(post.body)
                            .font(.body)
                            .foregroundColor(.secondary)
                    }
                }
            }
            .navigationTitle("Posts")
            .onAppear {
                viewModel.fetchPosts()
            }
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson4_2Content;