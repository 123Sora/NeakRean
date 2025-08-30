import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson4_3Content: LessonContent = {
  title: 'Concurrency ជាមួយ Async/Await',
  objectives: [
    'យល់ដឹងពីគោលគំនិតរបស់ Concurrency (Asynchronous Programming)',
    'ស្គាល់ពីរបៀបប្រើ `async` និង `await` Keywords',
    'រៀនពីរបៀបបង្កើត `async` Function និងហៅវា',
    'យល់ដឹងពីរបៀបប្តូរមក Main Actor ដោយប្រើ `@MainActor`'
  ],
  content: `
# Concurrency ជាមួយ Async/Await 🚀

---

នៅក្នុង Swift 5.5, Apple បានណែនាំវិធីសាស្ត្រថ្មីមួយសម្រាប់ដោះស្រាយ Concurrency (ការដំណើរការកូដស្របគ្នា) ដែលមានឈ្មោះថា **\`async\`/\`await\`**។ វិធីសាស្ត្រនេះធ្វើឱ្យការសរសេរកូដ Asynchronous មានលក្ខណៈសាមញ្ញ និងងាយស្រួលយល់ជាងមុន ដោយមិនចាំបាច់ប្រើ Completion Handlers (Closures) ស្មុគស្មាញឡើយ។

## 1. ហេតុអ្វីត្រូវប្រើ Async/Await?

ពីមុន ការហៅ Network ត្រូវបានធ្វើឡើងដោយប្រើ Closures ដែលអាចនាំឱ្យមាន "Callback Hell" នៅពេលដែលអ្នកមានការហៅ Network ច្រើន។ \`async\`/\`await\` ធ្វើឱ្យកូដមើលទៅដូចជា Synchronous Code ប៉ុន្តែវានៅតែដំណើរការនៅ Background។

**ពីមុន (Completion Handler):**
\`\`\`swift
func fetchData(completion: @escaping (Result<Data, Error>) -> Void) {
    // ...
    // ... កូដស្មុគស្មាញ
    // ...
    completion(.success(data))
}
\`\`\`

**ឥឡូវ (Async/Await):**
\`\`\`swift
func fetchData() async throws -> Data {
    // កូដមើលទៅដូចជា Synchronous
    let (data, _) = try await URLSession.shared.data(from: url)
    return data
}
\`\`\`
កូដទីពីរនេះងាយស្រួលអាននិងសរសេរជាង។

---

## 2. របៀបប្រើប្រាស់ \`async\` និង \`await\`

-   **\`async\` Keyword:** ដាក់នៅពីមុខ Function ដើម្បីប្រាប់ Compiler ថា Function នេះដំណើរការ Asynchronous ហើយអាចរង់ចាំ (\`await\`) សម្រាប់លទ្ធផល។
-   **\`await\` Keyword:** ដាក់នៅពីមុខការហៅ Function ដែលមាន \`async\`។ វាប្រាប់ Program ឱ្យរង់ចាំរហូតដល់ Function នោះបញ្ចប់ការងាររបស់វា ហើយបន្ទាប់មកបន្តដំណើរការ។

\`\`\`swift
// ឧទាហរណ៍៖ Async Function
func fetchUser() async -> User {
    // ... កូដសម្រាប់ទាញយក User Data
    return user
}

// ឧទាហរណ៍៖ ការហៅ Async Function
struct ContentView: View {
    @State private var user: User?

    var body: some View {
        Button("ទាញយក User") {
            // ហៅ Async Function នៅក្នុង Task
            Task {
                user = await fetchUser()
            }
        }
    }
}
\`\`\`

---

## 3. Main Actor និង \`@MainActor\`

ដោយសារកូដ \`async\` ដំណើរការនៅ Background Threads, អ្នកមិនអាចធ្វើបច្ចុប្បន្នភាព UI ដោយផ្ទាល់ពី Background Thread បានទេ។ SwiftUI ផ្តល់នូវ Property Wrapper **\`@MainActor\`** ដើម្បីធានាថាកូដត្រូវបានរត់នៅលើ Main Thread។

-   **\`@MainActor\`:** ដាក់នៅពីមុខ Function ឬ Class ដើម្បីប្រាប់ Compiler ឱ្យរត់កូដនោះនៅលើ Main Thread។
-   **\`Task\`:** ជា Container សម្រាប់រត់ Asynchronous Code។

\`\`\`swift
// Class នេះត្រូវបានរត់នៅលើ Main Thread ដូច្នេះវាអាចធ្វើបច្ចុប្បន្នភាព UI បាន
@MainActor
class ViewModel: ObservableObject {
    @Published var data: String = "No Data"

    func fetchData() async {
        do {
            let (data, _) = try await URLSession.shared.data(from: URL(string: "...")!)
            // ការផ្លាស់ប្តូរ Property នេះនឹងធ្វើបច្ចុប្បន្នភាព UI
            self.data = String(data: data, encoding: .utf8)!
        } catch {
            print("Error")
        }
    }
}
\`\`\`
ដោយប្រើ \`@MainActor\`, អ្នកមិនចាំបាច់ប្រើ \`DispatchQueue.main.async\` ទៀតទេ។

---

## 4. \`URLSession\` ជាមួយ Async/Await

\`URLSession\` មាន \`async\` Methods រួចហើយ។ នេះធ្វើឱ្យការហៅ Network កាន់តែងាយស្រួល។

\`\`\`swift
func fetchPosts() async throws -> [Post] {
    let url = URL(string: "https://jsonplaceholder.typicode.com/posts")!
    let (data, _) = try await URLSession.shared.data(from: url)
    
    let decoder = JSONDecoder()
    let posts = try decoder.decode([Post].self, from: data)
    return posts
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការហៅ Function Async នៅក្នុង SwiftUI View</h3>
<p>ប្រើ \`Task\` ដើម្បីហៅ Async Function នៅក្នុង View Body។</p>
<pre><code class="language-swift">
import SwiftUI

struct MyAsyncView: View {
    @State private var postTitle: String = "Loading..."

    var body: some View {
        VStack {
            Text(postTitle)
                .font(.title)
        }
        .task { // \`.task\` modifier រត់ code នៅពេល View លេចឡើង
            do {
                let posts = try await fetchPosts()
                if let firstPost = posts.first {
                    postTitle = firstPost.title
                }
            } catch {
                postTitle = "Failed to load data"
            }
        }
    }
    
    func fetchPosts() async throws -> [Post] {
        let url = URL(string: "https://jsonplaceholder.typicode.com/posts")!
        let (data, _) = try await URLSession.shared.data(from: url)
        return try JSONDecoder().decode([Post].self, from: data)
    }
}

// Model Post ពីមេរៀនមុន
struct Post: Codable, Identifiable {
    let id: Int
    let title: String
    let body: String
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `async` Keyword ប្រើសម្រាប់អ្វី?',
      options: [
        'ប្រាប់ Function ថាវាដំណើរការ Synchronous',
        'ប្រាប់ Function ថាវាអាចរង់ចាំការងារ Asynchronous',
        'ធ្វើឱ្យ Function ដំណើរការលឿន',
        'ធ្វើឱ្យ Function ដំណើរការនៅ Main Thread'
      ],
      correct: 1,
      explanation: '`async` ប្រាប់ថា Function នេះអាចរង់ចាំ (`await`) សម្រាប់លទ្ធផល។'
    },
    {
      question: 'តើ `await` Keyword ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីចាប់ផ្តើម `async` Function',
        'ដើម្បីបញ្ឈប់ `async` Function',
        'ដើម្បីរង់ចាំលទ្ធផលពី `async` Function',
        'ដើម្បីធ្វើឱ្យ Function ដំណើរការយឺត'
      ],
      correct: 2,
      explanation: '`await` ត្រូវបានប្រើដើម្បីរង់ចាំរហូតដល់ `async` Function បញ្ចប់។'
    },
    {
      question: 'តើ `async`/`await` ដោះស្រាយបញ្ហាអ្វី?',
      options: [
        'Prop-drilling',
        'JSON Parsing',
        'Callback Hell (Closure-based Asynchronous Code)',
        'Layout Problems'
      ],
      correct: 2,
      explanation: '`async`/`await` ជួយដោះស្រាយបញ្ហា "Callback Hell" ដោយធ្វើឱ្យ Asynchronous Code មើលទៅដូចជា Synchronous Code។'
    },
    {
      question: 'តើ `Task { ... }` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីរត់កូដ Synchronous',
        'ដើម្បីរត់កូដ Asynchronous នៅក្នុង Context មួយ',
        'ដើម្បីបង្កើត Thread ថ្មី',
        'ដើម្បីបង្កើត Class ថ្មី'
      ],
      correct: 1,
      explanation: '`Task` គឺជា Container សម្រាប់រត់ Asynchronous Code។'
    },
    {
      question: 'តើ `@MainActor` ប្រើសម្រាប់អ្វី?',
      options: [
        'ធ្វើឱ្យកូដដំណើរការនៅ Background Thread',
        'ធ្វើឱ្យកូដដំណើរការនៅ Main Thread',
        'ធ្វើឱ្យ Class អាចត្រូវបាន Observable',
        'ធ្វើឱ្យ Struct អាចត្រូវបាន Codable'
      ],
      correct: 1,
      explanation: '`@MainActor` ធានាថាកូដត្រូវបានរត់នៅលើ Main Thread ដែលចាំបាច់សម្រាប់ការធ្វើបច្ចុប្បន្នភាព UI។'
    },
    {
      question: 'តើ `URLSession.shared.data(from: ...)` ជាប្រភេទ Function អ្វី?',
      options: [
        'Synchronous',
        'Asynchronous',
        'Blocking',
        'Non-Blocking'
      ],
      correct: 1,
      explanation: '`data(from: ...)` គឺជា `async` Method ដែលដំណើរការ Asynchronous។'
    },
    {
      question: 'តើកូដខាងក្រោមត្រឹមត្រូវឬទេ? `Text("...").task { fetchData() }`',
      options: [
        'ត្រឹមត្រូវ',
        'មិនត្រឹមត្រូវទេ ព្រោះ `fetchData()` មិនមែនជា `async`',
        'មិនត្រឹមត្រូវទេ ព្រោះ `task` មិនត្រូវជាមួយ `Text`',
        'មិនត្រឹមត្រូវទេ ព្រោះ `fetchData()` មិនមាន `await`'
      ],
      correct: 1,
      explanation: '`task` Modifier ត្រូវការ `async` Code ដើម្បីរត់។`'
    },
    {
      question: 'តើ `async` Function ដែលមាន `throws` ត្រូវតែប្រើជាមួយอะไร?',
      options: [
        '`try`',
        '`try await`',
        '`await`',
        '`try await` និង `do-catch`'
      ],
      correct: 3,
      explanation: '`async` Function ដែលមាន `throws` ត្រូវតែត្រូវបានហៅដោយប្រើ `try await` នៅក្នុង `do-catch` Block។'
    },
    {
      question: 'តើ Closure-based Asynchronous Code មានគុណវិបត្តិអ្វី?',
      options: [
        'ធ្វើឱ្យកូដពិបាកអាន',
        'អាចនាំឱ្យមាន "Callback Hell"',
        'ពិបាកគ្រប់គ្រង Error',
        'គ្រប់ចម្លើយទាំងអស់គឺត្រឹមត្រូវ'
      ],
      correct: 3,
      explanation: 'Closure-based Asynchronous Code មានគុណវិបត្តិជាច្រើនដូចជា "Callback Hell" និងធ្វើឱ្យកូដពិបាកយល់។'
    },
    {
      question: 'តើ `async`/`await` ជំនួស Closure-based Approach ទាំងស្រុងដែរឬទេ?',
      options: [
        'ជំនួសទាំងស្រុង',
        'ជំនួសសម្រាប់តែ Networking ប៉ុណ្ណោះ',
        'មិនជំនួសទេ វាជាជម្រើសមួយផ្សេងទៀត',
        'វាអាស្រ័យលើ Developer'
      ],
      correct: 2,
      explanation: '`async`/`await` មិនបានជំនួស Completion Handler ទាំងស្រុងទេ ប៉ុន្តែវាជាជម្រើសល្អជាងសម្រាប់ករណីភាគច្រើន។'
    }
  ],
  lab: {
    task: `
កែប្រែកូដ \`PostListView\` ពីមេរៀនមុនឱ្យប្រើ \`async\`/\`await\` ជំនួសវិញ។

**តម្រូវការ:**

1.  **ViewModel:**
    -   នៅក្នុង \`PostListViewModel\`, កែប្រែ \`fetchPosts()\` Function ឱ្យទៅជា \`async\` Function។

2.  **View:**
    -   នៅក្នុង \`ContentView\`, ប្រើ \`.task\` Modifier ដើម្បីហៅ \`fetchPosts()\` ។
    -   ត្រូវប្រាកដថាបានគ្រប់គ្រង Error ដោយប្រើ \`do-try-catch\` Block។

3.  **UI Update:**
    -   ត្រូវប្រាកដថា \`viewModel\` Class ត្រូវបានកំណត់ដោយ \`@MainActor\` ដើម្បីអនុញ្ញាតឱ្យការធ្វើបច្ចុប្បន្នភាព UI នៅលើ Main Thread ។

**ការណែនាំ:** ត្រូវចងចាំថាការងារធ្ងន់ៗគួរត្រូវបានធ្វើនៅ Background Thread។
    `,
    solution: `
\`\`\`swift
import SwiftUI

// Model
struct Post: Codable, Identifiable {
    let id: Int
    let title: String
    let body: String
}

// ViewModel ជាមួយ @MainActor
@MainActor
class PostListViewModel: ObservableObject {
    @Published var posts = [Post]()
    @Published var isLoading = false
    
    func fetchPosts() async {
        isLoading = true
        guard let url = URL(string: "https://jsonplaceholder.typicode.com/posts") else {
            print("Invalid URL")
            isLoading = false
            return
        }

        do {
            let (data, _) = try await URLSession.shared.data(from: url)
            let decodedPosts = try JSONDecoder().decode([Post].self, from: data)
            self.posts = decodedPosts
        } catch {
            print("Failed to fetch or decode posts: \\(error)")
        }
        isLoading = false
    }
}

// View
struct PostListView: View {
    @StateObject private var viewModel = PostListViewModel()

    var body: some View {
        NavigationView {
            if viewModel.isLoading {
                ProgressView("កំពុងទាញយក...")
            } else {
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
            }
            .navigationTitle("Posts")
            .task {
                await viewModel.fetchPosts()
            }
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson4_3Content;