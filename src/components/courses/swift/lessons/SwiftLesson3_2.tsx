import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson3_2Content: LessonContent = {
  title: 'Observable Objects សម្រាប់ State Management កម្រិតខ្ពស់',
  objectives: [
    'យល់ដឹងពីដែនកំណត់របស់ @State សម្រាប់ទិន្នន័យស្មុគស្មាញ',
    'ស្គាល់ពីរបៀបប្រើប្រាស់ @ObservableObject និង @Published',
    'រៀនពីរបៀបបង្កើត Class ដែលអាចត្រូវបានតាមដាន (Observable)',
    'ប្រើប្រាស់ @StateObject និង @ObservedObject ដើម្បីគ្រប់គ្រងទិន្នន័យ',
    'យល់ពីភាពខុសគ្នារវាង @StateObject និង @ObservedObject'
  ],
  content: `
# Observable Objects សម្រាប់ State Management កម្រិតខ្ពស់ 📈

---

សម្រាប់ការគ្រប់គ្រង State សម្រាប់ទិន្នន័យសាមញ្ញដូចជា \`Int\` ឬ \`String\`, \`@State\` គឺគ្រប់គ្រាន់ហើយ។ ប៉ុន្តែសម្រាប់ទិន្នន័យដែលស្មុគស្មាញជាងនេះ ដូចជា Class ឬ Object, SwiftUI ផ្តល់នូវវិធីសាស្ត្រថ្មីមួយគឺ **Observable Objects**។ នេះអនុញ្ញាតឱ្យយើងចែករំលែកទិន្នន័យជាច្រើនទៅកាន់ Views ផ្សេងទៀតបានយ៉ាងងាយស្រួល។

## 1. ហេតុអ្វីបានជាត្រូវប្រើ Observable Objects?

\`@State\` ត្រូវបានរចនាឡើងសម្រាប់ទិន្នន័យសាមញ្ញនៅក្នុង View តែមួយ។ វាមិនមានប្រសិទ្ធភាពទេនៅពេលដែលអ្នកចង់ចែករំលែកទិន្នន័យស្មុគស្មាញ (ឧ. Array of Objects) ទៅកាន់ Views ជាច្រើន។ **Observable Objects** អាចដោះស្រាយបញ្ហានេះបាន។

## 2. ការបង្កើត Observable Object

ដើម្បីបង្កើត Observable Object អ្នកត្រូវធ្វើតាមជំហានទាំងនេះ៖
1.  **ប្រកាស Class:** បង្កើត \`Class\` មួយដែលគោរពតាម Protocol **\`ObservableObject\`**។
2.  **ប្រកាស \`Published\` Property:** ប្រើ Property Wrapper **\`@Published\`** នៅពីមុខ Properties ណាដែលអ្នកចង់ឱ្យ SwiftUI តាមដាន។ នៅពេលដែលតម្លៃរបស់ Property ទាំងនេះផ្លាស់ប្តូរ Object នឹងធ្វើការជូនដំណឹងទៅ SwiftUI។

\`\`\`swift
// Model: Observable Object
class UserSettings: ObservableObject {
    @Published var username: String = "Guest"
    @Published var isNightMode: Bool = false
}
\`\`\`
---

## 3. ការប្រើប្រាស់ @StateObject និង @ObservedObject

ដើម្បីប្រើប្រាស់ Observable Object នៅក្នុង View របស់អ្នក អ្នកត្រូវប្រើ Property Wrappers ពីរគឺ **\`@StateObject\`** និង **\`@ObservedObject\`**។

-   **\`@StateObject\`:** ប្រើដើម្បីបង្កើតនិងគ្រប់គ្រង Object មួយនៅក្នុង View ។ View ដែលប្រើ \`@StateObject\` គឺជា "ម្ចាស់" នៃ Object នោះ។ Object នឹងនៅតែមាន (persist) ទោះបីជា View ត្រូវបានបង្កើតឡើងវិញក៏ដោយ។ វាគឺជា "Source of Truth" សម្រាប់ Observable Object ។
    \`\`\`swift
    // View មេ: ម្ចាស់នៃ Object
    struct MasterView: View {
        @StateObject private var settings = UserSettings()
        
        var body: some View {
            VStack {
                Text("ឈ្មោះ៖ \\(settings.username)")
                // ...
            }
        }
    }
    \`\`\`
-   **\`@ObservedObject\`:** ប្រើដើម្បីមើលការផ្លាស់ប្តូររបស់ Object ដែលជាកម្មសិទ្ធិរបស់ View ផ្សេងទៀត។ View ដែលប្រើ \`@ObservedObject\` មិនមែនជាម្ចាស់ Object នោះទេ វាកាន់តែដូចជាតំណភ្ជាប់ដែលគ្រាន់តែតាមដាន។
    \`\`\`swift
    // View កូន: តាមដាន Object
    struct ProfileView: View {
        @ObservedObject var settings: UserSettings
        
        var body: some View {
            TextField("ផ្លាស់ប្តូរឈ្មោះ", text: $settings.username)
        }
    }
    \`\`\`

---

## 4. ភាពខុសគ្នារវាង @StateObject និង @ObservedObject

| លក្ខណៈ       | **@StateObject**                        | **@ObservedObject**                     |
| :------------ | :------------------------------------ | :----------------------------------- |
| **តួនាទី**    | បង្កើតនិងគ្រប់គ្រង Object | តាមដាន Object ដែលបានបង្កើតរួចហើយ |
| **ភាពជាម្ចាស់** | ម្ចាស់នៃ Object (Lifetime Management) | មិនមែនជាម្ចាស់ទេ |
| **ការប្រើប្រាស់** | ប្រើនៅក្នុង View មេដែលបង្កើត Object | ប្រើនៅក្នុង View កូនដែលទទួល Object |
| **អត្ថប្រយោជន៍** | ធានាថា Object នៅតែមាន | ងាយស្រួលចែករំលែក Object |

**គន្លឹះ៖** ប្រើ \`@StateObject\` នៅពេលអ្នកបង្កើត Object ថ្មីនៅក្នុង View មួយ។ ប្រើ \`@ObservedObject\` នៅពេលអ្នកទទួលបាន Object នោះជា Argument ពី View ផ្សេងទៀត។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើប្រាស់ ObservableObject</h3>
<p>បង្កើត Counter ជាមួយ ObservableObject។</p>
<pre><code class="language-swift">
import SwiftUI

class Counter: ObservableObject {
    @Published var value = 0
    
    func increment() {
        value += 1
    }
}

struct CounterView: View {
    @StateObject var counter = Counter() // ម្ចាស់ Object
    
    var body: some View {
        VStack {
            Text("តម្លៃ: \\(counter.value)")
                .font(.largeTitle)
            Button("បង្កើន") {
                counter.increment()
            }
        }
    }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការចែករំលែក ObservableObject</h3>
<p>ចែករំលែក Object ពី View មេទៅ View កូន។</p>
<pre><code class="language-swift">
struct ChildView: View {
    @ObservedObject var counter: Counter // តាមដាន Object
    
    var body: some View {
        Button("បង្កើនពី Child") {
            counter.increment()
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Property Wrapper មួយណាដែលប្រើដើម្បីបង្កើត Observable Object នៅក្នុង View?',
      options: [
        '`@ObservedObject`',
        '`@StateObject`',
        '`@Published`',
        '`@State`'
      ],
      correct: 1,
      explanation: '`@StateObject` ត្រូវបានប្រើដើម្បីបង្កើត Observable Object នៅក្នុង View។'
    },
    {
      question: 'តើ Class មួយណាដែលត្រូវគោរពតាម Protocol `ObservableObject`?',
      options: [
        '`Published`',
        '`Observed`',
        '`ObservableObject`',
        '`Object`'
      ],
      correct: 2,
      explanation: 'ដើម្បីក្លាយជា Observable Object Class ត្រូវតែគោរពតាម Protocol `ObservableObject`។'
    },
    {
      question: 'តើអ្វីជាតួនាទីរបស់ `@Published`?',
      options: [
        'បង្កើត View',
        'ផ្តល់សញ្ញាថា Property នេះត្រូវបានបោះពុម្ពផ្សាយ',
        'ប្រាប់ SwiftUI ឱ្យតាមដាន Property របស់ Observable Object',
        'បញ្ជាក់ថា Property នេះជា private'
      ],
      correct: 2,
      explanation: '`@Published` ប្រាប់ SwiftUI ឱ្យតាមដាន Property របស់ Observable Object ហើយធ្វើបច្ចុប្បន្នភាព Views ដែលប្រើវា។'
    },
    {
      question: 'តើអ្វីជាភាពខុសគ្នាសំខាន់រវាង `@StateObject` និង `@ObservedObject`?',
      options: [
        '`@ObservedObject` គឺជាម្ចាស់ Object ចំណែក `@StateObject` មិនមែន',
        '`@StateObject` ប្រើសម្រាប់ Views កូន ចំណែក `@ObservedObject` ប្រើសម្រាប់ Views មេ',
        '`@StateObject` គឺជាម្ចាស់ Object ចំណែក `@ObservedObject` គ្រាន់តែតាមដាន',
        'គ្មានភាពខុសគ្នាទេ'
      ],
      correct: 2,
      explanation: '`@StateObject` គឺជាម្ចាស់ Object ដែលធានាថា Object នៅតែមាន ចំណែក `@ObservedObject` គ្រាន់តែតាមដានវា។'
    },
    {
      question: 'តើ Observable Object ប្រើសម្រាប់ទិន្នន័យប្រភេទណា?',
      options: [
        'ទិន្នន័យស្មុគស្មាញដូចជា Class',
        'ទិន្នន័យសាមញ្ញដូចជា Int និង String',
        'តែ Static Data ប៉ុណ្ណោះ',
        'តែ Arrays ប៉ុណ្ណោះ'
      ],
      correct: 0,
      explanation: 'Observable Objects ត្រូវបានប្រើសម្រាប់គ្រប់គ្រងទិន្នន័យស្មុគស្មាញដូចជា Class ។'
    },
    {
      question: 'តើនៅពេលណាដែលយើងគួរប្រើ `@StateObject`?',
      options: [
        'នៅពេលដែលយើងចង់ចែករំលែក Object ទៅកាន់ View កូន',
        'នៅពេលដែលយើងបង្កើត Object នៅក្នុង View មួយ',
        'នៅពេលដែលយើងចង់ផ្លាស់ប្តូរតម្លៃពី View កូន',
        'នៅពេលដែលយើងចង់បិទ View'
      ],
      correct: 1,
      explanation: '`@StateObject` ត្រូវបានប្រើនៅពេលអ្នកបង្កើត Object ថ្មីនៅក្នុង View។'
    },
    {
      question: 'តើ `ObservableObject` អាចជា `struct` បានដែរឬទេ?',
      options: [
        'បាន',
        'មិនបានទេ វាត្រូវតែជា Class',
        'បានតែពេលប្រើជាមួយ SwiftUI',
        'វាអាស្រ័យលើកំណែរបស់ Swift'
      ],
      correct: 1,
      explanation: '`ObservableObject` គឺជា Protocol សម្រាប់ Class តែប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ `@Published` អាចប្រើនៅពីមុខ Variable មួយនៅក្នុង `struct` បានទេ?',
      options: [
        'បាន',
        'មិនបានទេ វាត្រូវតែប្រើនៅក្នុង `class` ដែលគោរពតាម `ObservableObject`',
        'បានតែជាមួយ Property `private`',
        'បានតែជាមួយ `var`'
      ],
      correct: 1,
      explanation: '`@Published` អាចប្រើបានតែជាមួយ Properties នៅក្នុង Class ដែលគោរពតាម `ObservableObject`។'
    },
    {
      question: 'តើអ្វីកើតឡើងចំពោះ `@StateObject` នៅពេលដែល View ត្រូវបានបង្កើតឡើងវិញ (Re-rendered)?',
      options: [
        'Object នោះនឹងត្រូវបានបង្កើតឡើងវិញ',
        'Object នោះនឹងនៅតែមាន (Persist)',
        'Object នោះនឹងត្រូវបានលុប',
        'វាអាស្រ័យលើកូដ'
      ],
      correct: 1,
      explanation: '`@StateObject` ធានាថា Object នឹងនៅតែមានទោះបីជា View ត្រូវបានបង្កើតឡើងវិញក៏ដោយ។'
    },
    {
      question: 'តើនៅពេលណាដែលយើងគួរប្រើ `@ObservedObject`?',
      options: [
        'នៅពេលដែលយើងបង្កើត Object ថ្មី',
        'នៅពេលដែលយើងចង់ឱ្យ View តាមដាន Object ដែលបានបង្កើតរួចហើយ',
        'នៅពេលដែលយើងចង់គ្រប់គ្រង State សាមញ្ញ',
        'នៅពេលដែលយើងចង់ប្រើ Binding'
      ],
      correct: 1,
      explanation: '`@ObservedObject` ត្រូវបានប្រើនៅពេលដែល View កូនទទួល Object មួយពី View មេ ហើយចង់តាមដានការផ្លាស់ប្តូររបស់វា។'
    },
    {
      question: 'តើ Property Wrapper មួយណាដែលជា "Source of Truth" សម្រាប់ Observable Object?',
      options: [
        '`@ObservedObject`',
        '`@StateObject`',
        '`@Published`',
        '`@Binding`'
      ],
      correct: 1,
      explanation: '`@StateObject` គឺជា "Source of Truth" សម្រាប់ Observable Object។'
    }
  ],
  lab: {
    task: `
បង្កើត App សាមញ្ញមួយដែលប្រើប្រាស់ Observable Object ដើម្បីគ្រប់គ្រងទិន្នន័យ។

**តម្រូវការ:**

1.  **Observable Object:**
    -   បង្កើត Class មួយឈ្មោះ \`TaskManager\` ដែលគោរពតាម \`ObservableObject\`។
    -   មាន Property មួយឈ្មោះ \`tasks\` ដែលជា Array of Strings និងមាន \`@Published\`។
    -   មាន Function មួយឈ្មោះ \`addTask(name: String)\` ដើម្បីបន្ថែម Task ថ្មី។

2.  **Parent View:**
    -   បង្កើត View មួយឈ្មោះ \`TaskListView\`។
    -   ប្រើ \`@StateObject var taskManager = TaskManager()\`។
    -   ប្រើ \`List\` និង \`ForEach\` ដើម្បីបង្ហាញ Tasks។
    -   បន្ថែម \`TextField\` និង \`Button\` ដើម្បីឱ្យអ្នកប្រើប្រាស់អាចបន្ថែម Task ថ្មី។

3.  **Child View (Optional):**
    -   បង្កើត Child View មួយដែលទទួល \`taskManager\` ជា \`@ObservedObject\` ហើយបង្ហាញព័ត៌មានផ្សេងៗ។

**ការណែនាំ:** ត្រូវប្រាកដថា TextField ប្រើ Binding ជាមួយ State របស់វាផ្ទាល់។
    `,
    solution: `
\`\`\`swift
import SwiftUI

class TaskManager: ObservableObject {
    @Published var tasks: [String] = []
    
    func addTask(name: String) {
        if !name.isEmpty {
            tasks.append(name)
        }
    }
}

struct TaskListView: View {
    @StateObject private var taskManager = TaskManager()
    @State private var newTaskName = ""
    
    var body: some View {
        NavigationView {
            VStack {
                HStack {
                    TextField("បញ្ចូល Task ថ្មី", text: $newTaskName)
                        .textFieldStyle(.roundedBorder)
                    
                    Button("បន្ថែម") {
                        taskManager.addTask(name: newTaskName)
                        newTaskName = "" // Clear the text field
                    }
                    .padding()
                    .background(.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
                }
                .padding()
                
                List {
                    ForEach(taskManager.tasks, id: \\.self) { task in
                        Text(task)
                    }
                }
            }
            .navigationTitle("បញ្ជី Task")
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson3_2Content;