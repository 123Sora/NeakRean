import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson7_1Content: LessonContent = {
  title: 'Core Data Basics',
  objectives: [
    'យល់ដឹងពីអ្វីទៅជា Core Data និងតួនាទីរបស់វា',
    'ស្គាល់ពីការរៀបចំ Core Data Stack ជាមួយ SwiftUI',
    'រៀនពីរបៀបបង្កើត Entities និង Attributes',
    'អនុវត្តការរក្សាទុក (Saving) និងទាញយក (Fetching) ទិន្នន័យ',
    'ស្គាល់ពីការប្រើប្រាស់ `@FetchRequest` Property Wrapper'
  ],
  content: `
# Core Data Basics 💾

---

**Core Data** គឺជា Framework របស់ Apple ដែលអនុញ្ញាតឱ្យអ្នករក្សាទុកនិងគ្រប់គ្រងទិន្នន័យនៅក្នុងកម្មវិធីរបស់អ្នក។ វាមិនមែនជា Database ទេ ប៉ុន្តែជា Object Graph Management Framework ដែលមានស្រទាប់ Database នៅពីក្រោម (ជាធម្មតា SQLite)។ Core Data ងាយស្រួលប្រើសម្រាប់រក្សាទុកទិន្នន័យដែលមានរចនាសម្ព័ន្ធស្មុគស្មាញ (Relational Data)។

## 1. ហេតុអ្វីត្រូវប្រើ Core Data?

-   **Object-Oriented:** អ្នកអាចធ្វើការជាមួយទិន្នន័យរបស់អ្នកជា Swift Objects ដោយផ្ទាល់។
-   **Performance:** វាត្រូវបានបង្កើតឡើងដើម្បីគ្រប់គ្រងទិន្នន័យដែលមានចំនួនច្រើន។
-   **Integration:** វារួមបញ្ចូលគ្នាយ៉ាងល្អជាមួយ SwiftUI តាមរយៈ Property Wrappers ដូចជា \`@FetchRequest\` និង \`@Environment\`។
-   **Scalability:** សមរម្យសម្រាប់ទាំង App តូចនិងធំ។

## 2. ការរៀបចំ Core Data Stack

**Core Data Stack** គឺជាសំណុំនៃ Objects ដែលធ្វើការជាមួយគ្នាដើម្បីគ្រប់គ្រង Data ។
-   **Managed Object Model:** កំណត់រចនាសម្ព័ន្ធ (Schema) របស់ទិន្នន័យរបស់អ្នក (Entities, Attributes, Relationships)។
-   **Persistent Store Coordinator:** គ្រប់គ្រង Storage (ឧ. SQLite file)។
-   **Managed Object Context:** គឺជា Workspace របស់អ្នក។ វាជាកន្លែងដែលអ្នកបង្កើត, កែប្រែ, និងលុប Objects។

\`\`\`swift
// នេះជា Core Data Stack ដែលត្រូវបានបង្កើតដោយ SwiftUI
import CoreData

struct PersistenceController {
    static let shared = PersistenceController()
    
    let container: NSPersistentContainer
    
    init() {
        container = NSPersistentContainer(name: "YourAppName")
        container.loadPersistentStores { (storeDescription, error) in
            if let error = error as NSError? {
                fatalError("Unresolved error \\(error), \\(error.userInfo)")
            }
        }
    }
}
\`\`\`

## 3. ការបង្កើត Entities និង Attributes

នៅក្នុង Xcode, អ្នកនឹងប្រើ \`YourAppName.xcdatamodeld\` file ដើម្បីរចនាម៉ូដែលទិន្នន័យរបស់អ្នក។
-   **Entity:** ស្រដៀងនឹង Class ឬ Struct។ ឧទាហរណ៍៖ \`Task\`។
-   **Attribute:** Properties របស់ Entity។ ឧទាហរណ៍៖ \`name\` (String), \`isCompleted\` (Boolean), \`createdAt\` (Date)។

## 4. ការរក្សាទុក (Saving) និងទាញយក (Fetching)

-   **Saving:** ដើម្បីរក្សាទុកទិន្នន័យ អ្នកត្រូវបង្កើត Object ថ្មីនៅក្នុង **Managed Object Context** ហើយបន្ទាប់មកហៅ \`save()\` method។
-   **Fetching:** ដើម្បីទាញយកទិន្នន័យ អ្នកអាចប្រើ \`NSFetchRequest\` ឬ \`@FetchRequest\` នៅក្នុង SwiftUI។

\`\`\`swift
// ការរក្សាទុក Data
func saveTask(name: String, context: NSManagedObjectContext) {
    let newTask = Task(context: context)
    newTask.name = name
    newTask.isCompleted = false
    newTask.createdAt = Date()

    do {
        try context.save()
    } catch {
        print("Error saving: \\(error.localizedDescription)")
    }
}

// ការប្រើប្រាស់ @FetchRequest
struct ContentView: View {
    @Environment(\\.managedObjectContext) var managedObjectContext
    
    @FetchRequest(sortDescriptors: []) var tasks: FetchedResults<Task>
    
    var body: some View {
        List {
            ForEach(tasks) { task in
                Text(task.name ?? "N/A")
            }
        }
        .onAppear {
            saveTask(name: "រៀន Core Data", context: managedObjectContext)
        }
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Predicates ជាមួយ @FetchRequest</h3>
<p>យើងអាចប្រើ Predicates ដើម្បីទាញយកទិន្នន័យដែលមានលក្ខខណ្ឌ។</p>
<pre><code class="language-swift">
import SwiftUI

// ទាញយកតែ Tasks ដែលមិនទាន់បានបញ្ចប់
@FetchRequest(
    sortDescriptors: [SortDescriptor(\\.createdAt)],
    predicate: NSPredicate(format: "isCompleted == %d", false)
)
private var incompleteTasks: FetchedResults<Task>

struct IncompleteTasksView: View {
    var body: some View {
        List(incompleteTasks) { task in
            Text(task.name ?? "Untitled")
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Core Data ជា Database ឬជា Framework?',
      options: [
        'Database',
        'Framework',
        'Framework ដែលមាន Database នៅពីក្រោម',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'Core Data គឺជា Framework របស់ Apple ដែលមានស្រទាប់ Database នៅពីក្រោម។'
    },
    {
      question: 'តើ `Managed Object Context` ដើរតួជាអ្វី?',
      options: [
        'កន្លែងផ្ទុក Data',
        'Workspace សម្រាប់ធ្វើការជាមួយ Data',
        'មធ្យោបាយសម្រាប់ Fetch Data',
        'Model'
      ],
      correct: 1,
      explanation: '`Managed Object Context` គឺជា Workspace សម្រាប់ធ្វើការជាមួយ Objects របស់អ្នក។'
    },
    {
      question: 'តើ `Entity` នៅក្នុង Core Data ស្រដៀងនឹងអ្វីនៅក្នុង Swift?',
      options: [
        'Protocol',
        'Enum',
        'Struct ឬ Class',
        'Closure'
      ],
      correct: 2,
      explanation: '`Entity` នៅក្នុង Core Data គឺជា Blueprint សម្រាប់ Objects ដូចជា Class ឬ Struct។'
    },
    {
      question: 'តើ `@FetchRequest` ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុក Data',
        'ទាញយក Data ពី Web',
        'ទាញយក Data ពី Core Data Store',
        'លុប Data'
      ],
      correct: 2,
      explanation: '`@FetchRequest` គឺជា Property Wrapper របស់ SwiftUI សម្រាប់ទាញយក Data ពី Core Data Store។'
    },
    {
      question: 'តើអ្វីជាប្រភេទ File ទូទៅបំផុតសម្រាប់ Core Data Store?',
      options: [
        '.json',
        '.sqlite',
        '.txt',
        '.plist'
      ],
      correct: 1,
      explanation: 'ជាទូទៅ Core Data ប្រើ SQLite file ដើម្បីរក្សាទុក Data។'
    },
    {
      question: 'តើ `NSPersistentContainer` ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង View',
        'គ្រប់គ្រង Core Data Stack',
        'គ្រប់គ្រង Networking',
        'គ្រប់គ្រង UserDefaults'
      ],
      correct: 1,
      explanation: '`NSPersistentContainer` គឺជា Object ដែលគ្រប់គ្រង Core Data Stack ទាំងមូល។'
    },
    {
      question: 'តើ `Predicate` ប្រើសម្រាប់អ្វីនៅក្នុង `@FetchRequest`?',
      options: [
        'តម្រៀប Data',
        'ត្រង (Filter) Data',
        'ធ្វើ Animation',
        'រក្សាទុក Data'
      ],
      correct: 1,
      explanation: '`Predicate` ត្រូវបានប្រើដើម្បីត្រង (Filter) Data នៅពេលទាញយក។'
    },
    {
      question: 'តើ `managedObjectContext.save()` អាចបោះ Error ទេ?',
      options: [
        'បាន',
        'មិនបានទេ',
        'បានតែពេលមាន Network Error',
        'បានតែពេល App គាំង'
      ],
      correct: 0,
      explanation: '`save()` Method អាចបោះ Error ដូច្នេះវាត្រូវតែនៅក្នុង `do-try-catch` Block។'
    },
    {
      question: 'តើ `Core Data` ជា Solution ដ៏ល្អសម្រាប់រក្សាទុក Data បែបណា?',
      options: [
        'Data តូចៗដូចជា Settings',
        'Data ធំដែលមាន Relationships',
        'រូបភាពនិងវីដេអូ',
        'Files'
      ],
      correct: 1,
      explanation: 'Core Data ល្អបំផុតសម្រាប់រក្សាទុក Data ដែលមានចំនួនច្រើននិងមាន Relationship ស្មុគស្មាញ។'
    },
    {
      question: 'តើ `@Environment(\\.managedObjectContext)` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត Context ថ្មី',
        'ទទួល Managed Object Context ពី Environment',
        'រក្សាទុក Data',
        'ធ្វើបច្ចុប្បន្នភាព UI'
      ],
      correct: 1,
      explanation: '`@Environment` Property Wrapper ត្រូវបានប្រើដើម្បីទទួលបាន Context ដែលត្រូវបានផ្តល់ឱ្យពី Parent View។'
    },
    {
      question: 'តើ `xcdatamodeld` file ប្រើសម្រាប់អ្វី?',
      options: [
        'រចនា UI',
        'សរសេរកូដ',
        'កំណត់រចនាសម្ព័ន្ធ Core Data Model',
        'រក្សាទុក Data'
      ],
      correct: 2,
      explanation: '`xcdatamodeld` file គឺជា Visual Editor សម្រាប់រចនាម៉ូដែលទិន្នន័យរបស់ Core Data។'
    }
    
  ],
  lab: {
    task: `
បង្កើត App សាមញ្ញមួយដែលប្រើ Core Data ដើម្បីរក្សាទុកបញ្ជីការងារ។

**តម្រូវការ:**

1.  **Core Data Model:**
    -   បង្កើត Project ថ្មីជាមួយ "Use Core Data" នៅក្នុង Xcode។
    -   នៅក្នុង \`xcdatamodeld\` file, បង្កើត \`Entity\` មួយឈ្មោះ \`Task\` ដែលមាន Properties \`name\` (String), \`isCompleted\` (Boolean), និង \`createdAt\` (Date)។

2.  **View:**
    -   នៅក្នុង \`ContentView\`, ប្រើ \`@Environment\` ដើម្បីទទួលបាន \`managedObjectContext\`។
    -   ប្រើ \`@FetchRequest\` ដើម្បីទាញយក \`Task\` ទាំងអស់។
    -   បង្ហាញបញ្ជី \`Task\` នៅក្នុង \`List\`។

3.  **មុខងារ:**
    -   បន្ថែម Button មួយដើម្បីរក្សាទុក \`Task\` ថ្មីទៅក្នុង Core Data។
    -   បន្ថែម \`onDelete\` modifier ទៅលើ \`List\` ដើម្បីអាចលុប \`Task\` បាន។

**ការណែនាំ:** ប្រើ \`PersistenceController\` ដែលត្រូវបានបង្កើតដោយ Xcode ដោយស្វ័យប្រវត្តិ។
    `,
    solution: `
\`\`\`swift
import SwiftUI
import CoreData

struct ContentView: View {
    @Environment(\\.managedObjectContext) private var viewContext
    
    @FetchRequest(
        sortDescriptors: [SortDescriptor(\\.createdAt, order: .reverse)],
        animation: .default
    )
    private var tasks: FetchedResults<Task>
    
    @State private var newTaskName: String = ""
    
    var body: some View {
        NavigationView {
            VStack {
                HStack {
                    TextField("បន្ថែមការងារថ្មី...", text: $newTaskName)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    Button("បន្ថែម") {
                        addItem()
                    }
                }
                .padding()
                
                List {
                    ForEach(tasks) { task in
                        Text(task.name ?? "Untitled")
                    }
                    .onDelete(perform: deleteItems)
                }
            }
            .navigationTitle("បញ្ជីការងារ")
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    EditButton()
                }
            }
        }
    }
    
    private func addItem() {
        withAnimation {
            let newItem = Task(context: viewContext)
            newItem.name = newTaskName
            newItem.isCompleted = false
            newItem.createdAt = Date()
            
            do {
                try viewContext.save()
                newTaskName = "" // លុប TextField
            } catch {
                let nsError = error as NSError
                fatalError("Unresolved error \\(nsError), \\(nsError.userInfo)")
            }
        }
    }
    
    private func deleteItems(offsets: IndexSet) {
        withAnimation {
            offsets.map { tasks[$0] }.forEach(viewContext.delete)
            
            do {
                try viewContext.save()
            } catch {
                let nsError = error as NSError
                fatalError("Unresolved error \\(nsError), \\(nsError.userInfo)")
            }
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson7_1Content;