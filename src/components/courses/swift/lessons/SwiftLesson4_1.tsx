import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson4_1Content: LessonContent = {
  title: 'URLSession និង Networking',
  objectives: [
    'យល់ដឹងពីគោលគំនិតនៃការហៅ API (API Calls)',
    'ស្គាល់ពីរបៀបប្រើ `URLSession` ដើម្បីទាញយកទិន្នន័យពី Internet',
    'រៀនពីរបៀបបង្កើត Request និងគ្រប់គ្រង Response',
    'យល់ដឹងពីរបៀបគ្រប់គ្រង Error នៅពេល Network'
  ],
  content: `
# URLSession និង Networking 🌐

---

កម្មវិធីទូរស័ព្ទភាគច្រើនត្រូវការភ្ជាប់ទៅ Internet ដើម្បីទាញយកទិន្នន័យ (ដូចជាអត្ថបទ រូបភាព ឬព័ត៌មានផ្សេងៗ) ពី Server។ **Networking** គឺជាដំណើរការនៃការទាក់ទងជាមួយ Server ទាំងនោះ។ នៅក្នុង Swift, Class ដ៏សំខាន់សម្រាប់ធ្វើការងារនេះគឺ **\`URLSession\`**។

## 1. គោលគំនិតនៃការហៅ API (API Calls)

**API (Application Programming Interface)** គឺជាសំណុំនៃច្បាប់ដែលអនុញ្ញាតឱ្យកម្មវិធីមួយទាក់ទងជាមួយកម្មវិធីមួយទៀត។ នៅក្នុងបរិបទ Networking, API គឺជា URL មួយដែលអ្នកអាចផ្ញើសំណើ (Request) ទៅកាន់ Server ហើយ Server នឹងផ្ញើការឆ្លើយតប (Response) មកវិញ។

**ដំណើរការទូទៅនៃ Networking:**
1.  **Request:** កម្មវិធីរបស់អ្នកផ្ញើសំណើទៅកាន់ URL របស់ API ។
2.  **Server Processing:** Server ទទួលសំណើ ធ្វើការងារមួយចំនួន (ឧ. ស្វែងរកទិន្នន័យក្នុង Database)។
3.  **Response:** Server ផ្ញើការឆ្លើយតបមកវិញជាទម្រង់ JSON ឬទិន្នន័យផ្សេងទៀត។
4.  **Client Processing:** កម្មវិធីរបស់អ្នកទទួល Response ហើយធ្វើការបកប្រែ (Parse) ទិន្នន័យនោះ។

## 2. ការប្រើប្រាស់ \`URLSession\`

\`URLSession\` គឺជា Framework របស់ Apple ដែលអនុញ្ញាតឱ្យអ្នកផ្ញើ Requests ទៅកាន់ URL ។ វាងាយស្រួលប្រើសម្រាប់ទាញយកទិន្នន័យតាមរយៈ HTTP/HTTPS។

**ប្រភេទ Data Task:**
-   **\`dataTask(with: URL)\`:** ទាញយកទិន្នន័យទាំងមូលពី URL។
-   **\`downloadTask(with: URL)\`:** ទាញយកឯកសារ (Files) ទៅកាន់ Disk ។
-   **\`uploadTask(with: URL)\`:** ផ្ញើទិន្នន័យ (Upload) ទៅកាន់ Server ។

សម្រាប់មេរៀននេះ យើងនឹងផ្តោតលើ \`dataTask\`។

\`\`\`swift
// ជំហានទី 1: កំណត់ URL
guard let url = URL(string: "https://api.example.com/data") else {
    print("Invalid URL")
    return
}

// ជំហានទី 2: បង្កើត Request
let task = URLSession.shared.dataTask(with: url) { data, response, error in
    // ជំហានទី 4: ដំណើរការ Response នៅក្នុង Closure
    if let error = error {
        print("Error: \\(error.localizedDescription)")
        return
    }

    // ពិនិត្យ Response
    guard let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200 else {
        print("Invalid response")
        return
    }

    // ពិនិត្យ Data
    guard let data = data else {
        print("No data received")
        return
    }

    // ជំហានទី 5: ធ្វើការជាមួយ Data (JSON Parsing)
    // មេរៀនបន្ទាប់យើងនឹងរៀនពីរបៀប parse JSON
    print("Received data with size: \\(data.count) bytes")
}

// ជំហានទី 3: ចាប់ផ្តើម Task
task.resume()
\`\`\`

---

## 3. Asynchronous Programming

ការហៅ Network គឺធ្វើឡើងដោយ **Asynchronous** ដែលមានន័យថាវាដំណើរការនៅ Background ដូច្នេះកម្មវិធីរបស់អ្នកមិនគាំង (Freeze) រង់ចាំ Response នោះទេ។ \`URLSession.dataTask\` ដំណើរការនៅ Background Thread ហើយនៅពេលដែលវាបានទិន្នន័យហើយ វាហៅ Closure (Block of code) មួយដើម្បីធ្វើការជាមួយទិន្នន័យនោះ។

**គន្លឹះ៖**
-   **\`URLSession.shared\`:** គឺជា Object មួយដែលត្រូវបានប្រើប្រាស់រួមគ្នា។
-   **\`task.resume()\`:** ចាប់ផ្តើមការហៅ Network។
-   **Closure:** Closure \`(data, response, error)\` ត្រូវបានហៅនៅពេលដែល Request បានបញ្ចប់។

---

## 4. ការគ្រប់គ្រង Error

វាមានសារៈសំខាន់ខ្លាំងណាស់ក្នុងការគ្រប់គ្រង Error ក្នុងកំឡុងពេល Network Call។ \`dataTask\` Closure ផ្តល់នូវ \`error\` Parameter សម្រាប់ធ្វើការងារនេះ។

**ប្រភេទ Error ទូទៅ:**
-   **Network Unavailable:** មិនមាន Internet Connection។
-   **Invalid URL:** URL ខុស។
-   **Server Error:** Server មានបញ្ហា (HTTP Status Code 400, 500)។
-   **JSON Parsing Error:** ទិន្នន័យដែលបានទទួលមកខុសពីទម្រង់ដែលយើងរំពឹងទុក។

\`\`\`swift
// ឧទាហរណ៍ការគ្រប់គ្រង Error
if let error = error {
    print("Error: \\(error.localizedDescription)")
    return
}
// ពិនិត្យ HTTP Status Code
if let httpResponse = response as? HTTPURLResponse, !(200...299).contains(httpResponse.statusCode) {
    print("Server Error: \\(httpResponse.statusCode)")
    return
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការទាញយក Data ពី Server</h3>
<p>ឧទាហរណ៍ពេញលេញនៃការទាញយកទិន្នន័យជា String ពី Server មួយ។</p>
<pre><code class="language-swift">
import SwiftUI

func fetchData() {
    guard let url = URL(string: "https://jsonplaceholder.typicode.com/posts/1") else {
        print("URL មិនត្រឹមត្រូវ")
        return
    }
    
    let task = URLSession.shared.dataTask(with: url) { data, response, error in
        if let error = error {
            print("មានបញ្ហា៖ \\(error.localizedDescription)")
            return
        }
        
        guard let data = data, let stringData = String(data: data, encoding: .utf8) else {
            print("គ្មានទិន្នន័យ")
            return
        }
        
        print("ទិន្នន័យដែលបានទទួល៖")
        print(stringData)
    }
    
    task.resume()
}

// ហៅ function ពេល View លេចឡើង
struct NetworkingView: View {
    var body: some View {
        Button("ទាញយកទិន្នន័យ") {
            fetchData()
        }
        .onAppear {
            fetchData() // ហៅពេល View ចាប់ផ្តើម
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Class មួយណាដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយសម្រាប់ Networking នៅក្នុង Swift?',
      options: [
        '`URLRequest`',
        '`URLSession`',
        '`URLData`',
        '`JSONDecoder`'
      ],
      correct: 1,
      explanation: '`URLSession` គឺជា Class សំខាន់សម្រាប់ Networking នៅក្នុង Swift។'
    },
    {
      question: 'តើ `API` តំណាងឱ្យអ្វី?',
      options: [
        'Application Protocol Interface',
        'Advanced Programming Interface',
        'Application Programming Interface',
        'Apple Programming Interface'
      ],
      correct: 2,
      explanation: 'API តំណាងឱ្យ Application Programming Interface ដែលអនុញ្ញាតឱ្យកម្មវិធីទាក់ទងគ្នា។'
    },
    {
      question: 'តើ `task.resume()` មានតួនាទីអ្វី?',
      options: [
        'លុប task',
        'ចាប់ផ្តើម Networking task',
        'បញ្ឈប់ task',
        'រក្សាទុក task'
      ],
      correct: 1,
      explanation: '`task.resume()` គឺជាវិធីសាស្ត្រដែលប្រើដើម្បីចាប់ផ្តើម Networking task។'
    },
    {
      question: 'តើការហៅ Network ត្រូវបានចាត់ទុកជា Programming ប្រភេទណា?',
      options: [
        'Synchronous',
        'Asynchronous',
        'Linear',
        'Static'
      ],
      correct: 1,
      explanation: 'ការហៅ Network គឺ Asynchronous ដែលមានន័យថាវាដំណើរការនៅ Background ដើម្បីកុំឱ្យកម្មវិធីគាំង។'
    },
    {
      question: 'តើ `dataTask` Closure ផ្តល់ Parameters ប៉ុន្មាន?',
      options: [
        '1',
        '2',
        '3',
        '4'
      ],
      correct: 2,
      explanation: 'Closure របស់ `dataTask` ផ្តល់ Parameters បីគឺ `data`, `response`, និង `error`។'
    },
    {
      question: 'តើ `HTTP Status Code 200` មានន័យដូចម្តេច?',
      options: [
        'Error',
        'Server មានបញ្ហា',
        'OK (Request ទទួលបានជោគជ័យ)',
        'Not Found'
      ],
      correct: 2,
      explanation: '`HTTP Status Code 200` មានន័យថា Request បានជោគជ័យ។'
    },
    {
      question: 'តើ URL មួយណាដែលត្រឹមត្រូវសម្រាប់ `URLSession.dataTask`?',
      options: [
        '`var url = URL(string: "http://example.com")`',
        '`let url = "http://example.com"`',
        '`let url = URL(string: "example.com")`',
        '`let url = URL(string: nil)`'
      ],
      correct: 0,
      explanation: '`URL(string: ...)` ត្រូវបានប្រើដើម្បីបង្កើត Object មួយពី URL String។'
    },
    {
      question: 'តើ `response` Parameter នៅក្នុង `dataTask` Closure ជាប្រភេទអ្វី?',
      options: [
        '`Data`',
        '`URLResponse`',
        '`String`',
        '`Error`'
      ],
      correct: 1,
      explanation: '`response` Parameter គឺមានប្រភេទជា `URLResponse`។'
    },
    {
      question: 'តើអ្វីជាហេតុផលមួយដែល Network Request អាចបរាជ័យ?',
      options: [
        'Invalid URL',
        'គ្មាន Internet Connection',
        'Server មិនដំណើរការ',
        'គ្រប់ចម្លើយទាំងអស់គឺត្រឹមត្រូវ'
      ],
      correct: 3,
      explanation: 'មានហេតុផលជាច្រើនដែលអាចធ្វើឱ្យ Network Request បរាជ័យដូចជា URL ខុស គ្មាន Internet ឬ Server មានបញ្ហា។'
    },
    {
      question: 'តើ `URLSession.shared` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Session ថ្មីរាល់ពេល',
        'ប្រើ Session រួមគ្នាដើម្បីសន្សំសំចៃ Memory',
        'រក្សាទុកទិន្នន័យ',
        'សម្រាប់តែ Test ប៉ុណ្ណោះ'
      ],
      correct: 1,
      explanation: '`URLSession.shared` គឺជា Object Session មួយដែលត្រូវបានប្រើប្រាស់រួមគ្នា។'
    },
    {
      question: 'តើ `JSONDecoder` ត្រូវបានប្រើសម្រាប់អ្វី?',
      options: [
        'ទាញយកទិន្នន័យពី Network',
        'បកប្រែ JSON Data ទៅជា Swift Object',
        'បង្កើត JSON Data',
        'ដាក់ Data ទៅ Server'
      ],
      correct: 1,
      explanation: '`JSONDecoder` ត្រូវបានប្រើដើម្បីបកប្រែ JSON Data ទៅជា Swift Objects ។'
    }
  ],
  lab: {
    task: `
បង្កើត Function មួយដើម្បីទាញយកព័ត៌មានពី API មួយហើយបង្ហាញលទ្ធផលនៅក្នុង Console។

**តម្រូវការ:**

1.  **Function:**
    -   បង្កើត Function មួយឈ្មោះ \`fetchPosts()\`។
    -   ប្រើ \`URLSession.shared.dataTask\` ដើម្បីទាញយកទិន្នន័យពី URL នេះ: \`https://jsonplaceholder.typicode.com/posts/1\`។

2.  **ការគ្រប់គ្រង Error:**
    -   ត្រូវប្រាកដថាបានពិនិត្យមើល \`error\` Parameter។
    -   ត្រូវប្រាកដថាបានពិនិត្យមើល \`response\` Status Code (គួរតែជា 200)។

3.  **ការបង្ហាញលទ្ធផល:**
    -   នៅពេលដែលទិន្នន័យបានទទួលជោគជ័យ សូមបកប្រែវាទៅជា String ហើយបង្ហាញវាទៅកាន់ Console។

**ការណែនាំ:** ត្រូវប្រាកដថាបានរត់កូដនៅក្នុង Main Queue ដើម្បីធ្វើបច្ចុប្បន្នភាព UI (ទោះបីជាក្នុង Lab នេះយើងប្រើតែ Console ក៏ដោយ តែនេះជា Good Practice)។
    `,
    solution: `
\`\`\`swift
import SwiftUI

func fetchPosts() {
    guard let url = URL(string: "https://jsonplaceholder.typicode.com/posts/1") else {
        print("URL មិនត្រឹមត្រូវ")
        return
    }

    let task = URLSession.shared.dataTask(with: url) { data, response, error in
        DispatchQueue.main.async {
            // ជំហានទី 1: ពិនិត្យ Error
            if let error = error {
                print("មានបញ្ហា៖ \\(error.localizedDescription)")
                return
            }

            // ជំហានទី 2: ពិនិត្យ Response
            guard let httpResponse = response as? HTTPURLResponse,
                  (200...299).contains(httpResponse.statusCode) else {
                print("Server Error ឬ Invalid Response")
                return
            }

            // ជំហានទី 3: ពិនិត្យ Data
            guard let data = data else {
                print("គ្មានទិន្នន័យ")
                return
            }
            
            // ជំហានទី 4: បកប្រែ Data ទៅជា String
            if let jsonString = String(data: data, encoding: .utf8) {
                print("ទិន្នន័យដែលបានទទួល៖")
                print(jsonString)
            } else {
                print("មិនអាចបកប្រែ Data បាន")
            }
        }
    }
    task.resume()
}

struct NetworkLabView: View {
    var body: some View {
        VStack(spacing: 20) {
            Button("ទាញយកទិន្នន័យ") {
                fetchPosts()
            }
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson4_1Content;