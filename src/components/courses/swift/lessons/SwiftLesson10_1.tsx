import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson10_1Content: LessonContent = {
  title: 'CloudKit Integration',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា CloudKit និងតួនាទីរបស់វា',
    'រៀនពីរបៀបរៀបចំ CloudKit នៅក្នុង Xcode',
    'អនុវត្តការរក្សាទុក (Saving) និងទាញយក (Fetching) ទិន្នន័យ',
    'ស្គាល់ពី Public Database និង Private Database',
    'យល់ដឹងពីការប្រើប្រាស់ `CKRecord` និង `CKRecord.ID`'
  ],
  content: `
# CloudKit Integration ☁️

---

**CloudKit** គឺជា Framework របស់ Apple ដែលអនុញ្ញាតឱ្យអ្នករក្សាទុកទិន្នន័យ App របស់អ្នកនៅក្នុង iCloud ។ វាផ្តល់នូវ Solution  Backend ដ៏សាមញ្ញមួយ ដែលអ្នកមិនចាំបាច់សរសេរ Server-side Code ឬគ្រប់គ្រង Database ដោយខ្លួនឯងនោះទេ។ CloudKit ត្រូវបានបែងចែកជា Public Database និង Private Database ។

## 1. ហេតុអ្វីត្រូវប្រើ CloudKit?

-   **Backend ងាយស្រួល:** មិនចាំបាច់បង្កើត Server Backend ផ្ទាល់ខ្លួនទេ។
-   **Synchronization:** ធ្វើ Synchronization ទិន្នន័យរវាង Devices របស់អ្នកប្រើប្រាស់ដោយស្វ័យប្រវត្តិ។
-   **សុវត្ថិភាព:** Apple គ្រប់គ្រងសុវត្ថិភាពនិងការ Authentication ។
-   **Cost-effective:** សម្រាប់ទំហំទិន្នន័យជាក់លាក់មួយ Apple ផ្តល់ឱ្យដោយឥតគិតថ្លៃ។

## 2. ការរៀបចំ CloudKit

### ជំហានទី 1: បើក CloudKit Capability
នៅក្នុង Xcode, ទៅកាន់ Project Navigator -> Target -> Signing & Capabilities -> + Capability -> ជ្រើសរើស "CloudKit" ។

### ជំហានទី 2: រៀបចំ iCloud Container
-   នៅពេលអ្នកបើក CloudKit Capability, Xcode នឹងបង្កើត iCloud Container មួយដោយស្វ័យប្រវត្តិ។
-   ទៅកាន់ CloudKit Dashboard (developer.apple.com) ដើម្បីគ្រប់គ្រង Database Schema របស់អ្នក។

## 3. ការរក្សាទុក (Saving) ទិន្នន័យ

យើងនឹងប្រើ \`CKContainer\` និង \`CKDatabase\` ដើម្បីធ្វើការជាមួយទិន្នន័យ។

\`\`\`swift
import CloudKit

// កូដសម្រាប់ Saving data
func saveMessage(text: String) {
    let container = CKContainer.default()
    let privateDatabase = container.privateCloudDatabase
    
    // CKRecord តំណាងឱ្យ Object ដែលអ្នកចង់រក្សាទុក
    let messageRecord = CKRecord(recordType: "Message")
    messageRecord["text"] = text as CKRecordValue
    messageRecord["createdAt"] = Date() as CKRecordValue
    
    // Saving to the database
    privateDatabase.save(messageRecord) { (record, error) in
        if let error = error {
            print("Error saving record: \\(error.localizedDescription)")
        } else {
            print("Record saved successfully!")
        }
    }
}
\`\`\`
**ចំណាំ:** អ្នកត្រូវតែបង្កើត Record Type "Message" និង Fields "text" និង "createdAt" នៅក្នុង CloudKit Dashboard ជាមុនសិន។

## 4. ការទាញយក (Fetching) ទិន្នន័យ

### Fetching a single record
\`\`\`swift
func fetchMessage(recordID: CKRecord.ID) {
    let container = CKContainer.default()
    let privateDatabase = container.privateCloudDatabase
    
    privateDatabase.fetch(withRecordID: recordID) { (record, error) in
        if let error = error {
            print("Error fetching record: \\(error.localizedDescription)")
        } else if let messageRecord = record {
            let messageText = messageRecord["text"] as? String
            print("Fetched message: \\(messageText ?? "N/A")")
        }
    }
}
\`\`\`

### Fetching multiple records with \`CKQuery\`
\`\`\`swift
func fetchAllMessages() {
    let container = CKContainer.default()
    let privateDatabase = container.privateCloudDatabase
    
    let predicate = NSPredicate(value: true) // Fetches all records
    let query = CKQuery(recordType: "Message", predicate: predicate)
    
    privateDatabase.perform(query, inZoneWith: nil) { (records, error) in
        if let error = error {
            print("Error fetching records: \\(error.localizedDescription)")
        } else if let records = records {
            for record in records {
                let messageText = record["text"] as? String
                print("Fetched message: \\(messageText ?? "N/A")")
            }
        }
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ CloudKit ជាមួយ SwiftUI</h3>
<p>យើងអាចប្រើ \`@State\` និង \`@Published\` ដើម្បីគ្រប់គ្រងស្ថានភាពទិន្នន័យ។</p>
<pre><code class="language-swift">
import SwiftUI
import CloudKit

class CloudKitViewModel: ObservableObject {
    @Published var messages: [String] = []
    
    func fetchMessages() {
        let container = CKContainer.default()
        let publicDatabase = container.publicCloudDatabase
        let predicate = NSPredicate(value: true)
        let query = CKQuery(recordType: "Message", predicate: predicate)
        
        publicDatabase.perform(query, inZoneWith: nil) { [weak self] (records, error) in
            guard let self = self else { return }
            if let records = records {
                let fetchedMessages = records.compactMap { $0["text"] as? String }
                DispatchQueue.main.async {
                    self.messages = fetchedMessages
                }
            }
        }
    }
}

struct CloudKitView: View {
    @StateObject private var viewModel = CloudKitViewModel()
    
    var body: some View {
        List(viewModel.messages, id: \\.self) { message in
            Text(message)
        }
        .onAppear {
            viewModel.fetchMessages()
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ CloudKit គឺជាអ្វី?',
      options: [
        'Local Database',
        'Framework សម្រាប់រក្សាទុកទិន្នន័យក្នុង iCloud',
        'Networking Library',
        'UI Framework'
      ],
      correct: 1,
      explanation: 'CloudKit គឺជា Framework ដែលផ្តល់ដោយ Apple ដើម្បីរក្សាទុកទិន្នន័យនៅក្នុង iCloud ។'
    },
    {
      question: 'តើ CloudKit មាន Database ប្រភេទអ្វីខ្លះ?',
      options: [
        'Local និង Remote',
        'Public និង Private',
        'SQL និង NoSQL',
        'Primary និង Secondary'
      ],
      correct: 1,
      explanation: 'CloudKit មាន Public Database ដែលអាចចូលប្រើបានដោយអ្នកប្រើប្រាស់ទាំងអស់ និង Private Database សម្រាប់ទិន្នន័យផ្ទាល់ខ្លួន។'
    },
    {
      question: 'តើ `CKRecord` តំណាងឱ្យអ្វី?',
      options: [
        'Table',
        'Database',
        'Object មួយនៅក្នុង Database',
        'Field'
      ],
      correct: 2,
      explanation: '`CKRecord` តំណាងឱ្យ Object មួយដែលអ្នករក្សាទុកឬទាញយកពី Database។'
    },
    {
      question: 'តើ `CKQuery` ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុកទិន្នន័យ',
        'លុបទិន្នន័យ',
        'ទាញយកទិន្នន័យដែលមានលក្ខខណ្ឌ',
        'កែប្រែទិន្នន័យ'
      ],
      correct: 2,
      explanation: '`CKQuery` ត្រូវបានប្រើដើម្បីទាញយក Records ដែលមានលក្ខខណ្ឌជាក់លាក់។'
    },
    {
      question: 'តើ Database មួយណាដែលសមរម្យសម្រាប់រក្សាទុកទិន្នន័យផ្ទាល់ខ្លួនរបស់ User?',
      options: [
        'Public Database',
        'Private Database',
        'Shared Database',
        'Local Database'
      ],
      correct: 1,
      explanation: 'Private Database ត្រូវបានប្រើសម្រាប់រក្សាទុកទិន្នន័យផ្ទាល់ខ្លួនរបស់ User ។'
    },
    {
      question: 'តើ `CKContainer.default()` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Record',
        'ចាប់ផ្តើម CloudKit Container',
        'ចាប់ផ្តើម Database',
        'រក្សាទុកទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`CKContainer.default()` ផ្តល់នូវ Instance របស់ CloudKit Container ដែលត្រូវបានកំណត់រចនាសម្ព័ន្ធនៅក្នុង Xcode ។'
    },
    {
      question: 'តើ `NSPredicate` នៅក្នុង CloudKit ប្រើសម្រាប់អ្វី?',
      options: [
        'តម្រៀបទិន្នន័យ',
        'ត្រង (Filter) ទិន្នន័យ',
        'រក្សាទុកទិន្នន័យ',
        'លុបទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`NSPredicate` ត្រូវបានប្រើដើម្បីត្រងទិន្នន័យដែលទាញយកដោយ `CKQuery`។'
    },
    {
      question: 'តើ CloudKit គាំទ្រការធ្វើ Synchronization ទេ?',
      options: [
        'គាំទ្រដោយស្វ័យប្រវត្តិ',
        'មិនគាំទ្រទេ',
        'គាំទ្រតែលើ iPad',
        'គាំទ្រតែពេល Network មិនល្អ'
      ],
      correct: 0,
      explanation: 'CloudKit ធ្វើ Synchronization ទិន្នន័យរវាង Devices ដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើការរៀបចំ CloudKit ត្រូវធ្វើនៅក្នុង Xcode ប៉ុណ្ណោះឬ?',
      options: [
        'ត្រូវតែនៅក្នុង Xcode',
        'ត្រូវតែនៅក្នុង CloudKit Dashboard',
        'ត្រូវធ្វើនៅក្នុងទាំងពីរ',
        'មិនចាំបាច់ធ្វើទេ'
      ],
      correct: 2,
      explanation: 'ការរៀបចំត្រូវធ្វើនៅក្នុង Xcode (Capabilities) និងនៅក្នុង CloudKit Dashboard (Schema) ។'
    },
    {
      question: 'តើ `CKRecord.ID` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ប្រភេទ Record',
        'កំណត់ Unique Identifier សម្រាប់ Record មួយ',
        'កំណត់ Unique Identifier សម្រាប់ Database',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`CKRecord.ID` គឺជា Unique Identifier របស់ Record មួយ។'
    }
  ],
  lab: {
    task: `
បង្កើត App សាមញ្ញមួយដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់រក្សាទុកនិងមើល Messages នៅក្នុង CloudKit Public Database ។

**តម្រូវការ:**

1.  **ការរៀបចំ:**
    -   បង្កើត Project SwiftUI ថ្មីមួយ។
    -   បើក CloudKit Capability នៅក្នុង Xcode ។
    -   នៅក្នុង CloudKit Dashboard, បង្កើត **Record Type** មួយឈ្មោះ \`Message\` ដែលមាន Field មួយឈ្មោះ \`text\` (String) ។

2.  **UI:**
    -   ប្រើ \`TextField\` សម្រាប់បញ្ចូល Message ថ្មី។
    -   ប្រើ \`Button\` សម្រាប់រក្សាទុក Message ។
    -   ប្រើ \`List\` ដើម្បីបង្ហាញ Messages ដែលបានទាញយក។

3.  **Logic:**
    -   បង្កើត Class មួយ (ឧ. \`CloudKitManager\`) ដើម្បីគ្រប់គ្រង CloudKit Operations ។
    -   ប្រើ \`saveMessage(text: String)\` ដើម្បីរក្សាទុក Record ថ្មីទៅក្នុង Public Database ។
    -   ប្រើ \`fetchMessages()\` ដើម្បីទាញយក Records ទាំងអស់ពី Public Database ហើយបង្ហាញនៅក្នុង \`List\`។

**ការណែនាំ:** ត្រូវប្រើ \`CKContainer.default().publicCloudDatabase\` ។
    `,
    solution: `
\`\`\`swift
// ContentView.swift
import SwiftUI
import CloudKit

// ViewModel
class MessageViewModel: ObservableObject {
    @Published var messages: [String] = []
    @Published var newText: String = ""
    
    private let database = CKContainer.default().publicCloudDatabase
    
    func saveMessage() {
        let newRecord = CKRecord(recordType: "Message")
        newRecord["text"] = newText as CKRecordValue
        
        database.save(newRecord) { [weak self] _, error in
            if let error = error {
                print("Error saving: \\(error.localizedDescription)")
            } else {
                DispatchQueue.main.async {
                    self?.newText = ""
                    self?.fetchMessages()
                }
            }
        }
    }
    
    func fetchMessages() {
        let query = CKQuery(recordType: "Message", predicate: NSPredicate(value: true))
        
        database.perform(query, inZoneWith: nil) { [weak self] records, error in
            guard let self = self, let records = records else { return }
            
            let fetchedMessages = records.compactMap { $0["text"] as? String }
            DispatchQueue.main.async {
                self.messages = fetchedMessages
            }
        }
    }
}

// UI View
struct CloudKitLabView: View {
    @StateObject private var viewModel = MessageViewModel()
    
    var body: some View {
        NavigationView {
            VStack {
                HStack {
                    TextField("Enter a message...", text: $viewModel.newText)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    
                    Button("Save") {
                        if !viewModel.newText.isEmpty {
                            viewModel.saveMessage()
                        }
                    }
                    .buttonStyle(.borderedProminent)
                }
                .padding()
                
                List(viewModel.messages, id: \\.self) { message in
                    Text(message)
                }
            }
            .navigationTitle("CloudKit Messages")
            .onAppear {
                viewModel.fetchMessages()
            }
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson10_1Content;