import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson5_3Content: LessonContent = {
  title: 'ការបង្កើនប្រសិទ្ធភាព (Performance Optimization)',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃ Performance នៅក្នុង SwiftUI',
    'ស្គាល់ពីរបៀបដែល SwiftUI View ត្រូវបានបង្កើតឡើងវិញ (Re-rendered)',
    'រៀនពីរបៀបប្រើ `Equatable` និង `Hashable` ដើម្បីបង្កើនប្រសិទ្ធភាព',
    'យល់ដឹងពីរបៀបប្រើ `onAppear` និង `onDisappear`',
    'ស្គាល់ពីឧបករណ៍ (Tools) សម្រាប់វាស់ស្ទង់ Performance'
  ],
  content: `
# ការបង្កើនប្រសិទ្ធភាព (Performance Optimization) 🚀

---

នៅក្នុងកម្មវិធីធំៗនិងស្មុគស្មាញ ការយកចិត្តទុកដាក់ទៅលើ Performance គឺមានសារៈសំខាន់ខ្លាំងណាស់។ ការធ្វើឱ្យកម្មវិធីរបស់អ្នកដំណើរការលឿននិងរលូនធ្វើឱ្យអ្នកប្រើប្រាស់មានបទពិសោធន៍ដ៏ល្អ។ មេរៀននេះនឹងបង្រៀនអ្នកពីគន្លឹះសំខាន់ៗដើម្បីបង្កើនប្រសិទ្ធភាពកម្មវិធី SwiftUI របស់អ្នក។

## 1. ការយល់ដឹងពី View Re-rendering

នៅក្នុង SwiftUI, Views ត្រូវបានបង្កើតឡើងវិញ (Re-rendered) នៅពេលដែល State ដែលវាពឹងផ្អែកលើផ្លាស់ប្តូរ។ SwiftUI មានយន្តការដ៏ឆ្លាតវៃដើម្បីធ្វើបច្ចុប្បន្នភាពតែ View ដែលត្រូវការប៉ុណ្ណោះ។ យ៉ាងណាក៏ដោយ កំហុសមួយចំនួនអាចធ្វើឱ្យ Views ជាច្រើនត្រូវបានបង្កើតឡើងវិញដោយមិនចាំបាច់ ដែលនាំឱ្យមានការដំណើរការយឺត។

**ឧទាហរណ៍នៃការ Re-render:**
\`\`\`swift
struct ReRenderExampleView: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            // \`Text\` នេះនឹង Re-render នៅពេល \`count\` ផ្លាស់ប្តូរ
            Text("រាប់: \\(count)")
            
            // \`Button\` នេះក៏នឹង Re-render ដែរ
            Button("បង្កើន") {
                count += 1
            }
        }
    }
}
\`\`\`

## 2. ការប្រើប្រាស់ \`Equatable\`

ប្រសិនបើ \`struct\` របស់អ្នកគោរពតាម Protocol \`Equatable\` ហើយអ្នកប្រើវានៅក្នុង \`List\` ឬ \`ForEach\` SwiftUI នឹងពិនិត្យមើលថាធាតុមួយណាដែលបានផ្លាស់ប្តូរ ហើយធ្វើបច្ចុប្បន្នភាពតែធាតុនោះប៉ុណ្ណោះ។ នេះជួយបង្កើនប្រសិទ្ធភាពយ៉ាងខ្លាំង។

**ការអនុវត្តន៍:**
-   **Step 1:** ធ្វើឱ្យ \`struct\` របស់អ្នកគោរពតាម \`Equatable\`។
-   **Step 2:** ប្រើ \`.equatable()\` modifier ទៅលើ Custom View របស់អ្នក។

\`\`\`swift
// នេះជា struct ដែលមាន Equatable
struct MyData: Equatable, Identifiable {
    let id = UUID()
    var name: String
}

// Custom View ដែលប្រើ \`.equatable()\`
struct DataRow: View, Equatable {
    let data: MyData
    
    static func == (lhs: DataRow, rhs: DataRow) -> Bool {
        return lhs.data.name == rhs.data.name
    }
    
    var body: some View {
        Text(data.name)
    }
}
\`\`\`

---

## 3. \`Hashable\` និង \`Identifiable\`

-   **\`Identifiable\`:** ប្រើសម្រាប់ \`ForEach\` ដើម្បីផ្តល់ Unique ID ដល់ធាតុនីមួយៗ។ នេះមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ Performance នៅពេលដែល \`Array\` ផ្លាស់ប្តូរ។
-   **\`Hashable\`:** ត្រូវបានប្រើសម្រាប់ \`Set\` ឬ \`Dictionary\`។ វាក៏ជួយបង្កើន Performance ផងដែរដោយការផ្តល់ Unique Hash Value ដល់ Object មួយ។

## 4. \`onAppear\` និង \`onDisappear\`

**\`onAppear\`** និង **\`onDisappear\`** modifiers ត្រូវបានហៅនៅពេលដែល View មួយលេចឡើងឬបាត់ទៅវិញពី View Hierarchy។ វាងាយស្រួលប្រើសម្រាប់ចាប់ផ្តើមឬបញ្ឈប់ការងារដែលចំណាយធនធានច្រើន (Resource-intensive work) ដូចជា Networking Call ឬ Location Tracking។

\`\`\`swift
struct ExpensiveDataView: View {
    @StateObject private var viewModel = DataViewModel()
    
    var body: some View {
        List(viewModel.data) { item in
            Text(item.name)
        }
        .onAppear {
            viewModel.fetchData() // ចាប់ផ្តើមការងារនៅពេល View លេចឡើង
        }
        .onDisappear {
            viewModel.cancelTask() // បញ្ឈប់ការងារនៅពេល View បាត់ទៅវិញ
        }
    }
}
\`\`\`

---

## 5. ឧបករណ៍សម្រាប់វាស់ស្ទង់ Performance

-   **Xcode Instruments:** ជាឧបករណ៍ដ៏មានឥទ្ធិពលនៅក្នុង Xcode ដើម្បីវាស់ស្ទង់ Memory, CPU Usage, និង UI Rendering។ ប្រើវាដើម្បីស្វែងរក Bottlenecks នៅក្នុងកម្មវិធីរបស់អ្នក។
-   **Debug Preview:** Xcode Preview អាចប្រាប់អ្នកពីចំនួនដងដែល View មួយត្រូវបាន Re-render។
-   **Print Statement:** ប្រើ \`print()\` ដើម្បីតាមដាន Function ដែលត្រូវបានហៅម្តងហើយម្តងទៀត។

\`\`\`swift
struct MyView: View {
    var body: some View {
        Text("Hello, world!")
        // ប្រើ \`print()\` ដើម្បីតាមដាន
        let _ = print("MyView's body is called!")
        return Text("Hello, World!")
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ \`Hashable\`</h3>
<p>ការប្រើប្រាស់ \`Hashable\` សម្រាប់ \`Set\`។</p>
<pre><code class="language-swift">
import SwiftUI

struct User: Hashable {
    let id: UUID
    let name: String
}

func exampleHashable() {
    var setOfUsers: Set<User> = []
    let user1 = User(id: UUID(), name: "សុខា")
    let user2 = User(id: UUID(), name: "សុខា")
    
    setOfUsers.insert(user1)
    setOfUsers.insert(user2)
    
    print("ចំនួន Users: \\(setOfUsers.count)") // លទ្ធផល: 2
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ Views នៅក្នុង SwiftUI ត្រូវបានបង្កើតឡើងវិញ (Re-rendered) នៅពេលណា?',
      options: [
        'នៅពេលដែល App ចាប់ផ្តើម',
        'នៅពេលដែល State ដែលវាពឹងផ្អែកលើផ្លាស់ប្តូរ',
        'នៅពេលដែលអ្នកចុចលើ Button',
        'នៅពេលដែល Networking Call ត្រូវបានបញ្ចប់'
      ],
      correct: 1,
      explanation: 'Views ត្រូវបាន Re-rendered នៅពេលដែល State ដែលវាពឹងផ្អែកលើផ្លាស់ប្តូរ។'
    },
    {
      question: 'តើ Protocol មួយណាដែលជួយបង្កើន Performance នៅក្នុង `List` និង `ForEach`?',
      options: [
        '`Codable`',
        '`Identifiable`',
        '`Equatable`',
        '`Comparable`'
      ],
      correct: 2,
      explanation: '`Equatable` ជួយបង្កើន Performance ដោយប្រាប់ SwiftUI ឱ្យធ្វើបច្ចុប្បន្នភាពតែធាតុដែលបានផ្លាស់ប្តូរប៉ុណ្ណោះ។'
    },
    {
      question: 'តើ `onAppear()` modifier ប្រើសម្រាប់អ្វី?',
      options: [
        'គ្រប់គ្រង Error',
        'ធ្វើ Animation',
        'ចាប់ផ្តើមការងារនៅពេល View លេចឡើង',
        'បិទ App'
      ],
      correct: 2,
      explanation: '`onAppear()` ត្រូវបានប្រើដើម្បីចាប់ផ្តើមការងារដូចជា Networking នៅពេល View លេចឡើង។'
    },
    {
      question: 'តើ `Xcode Instruments` ប្រើសម្រាប់អ្វី?',
      options: [
        'សរសេរកូដ',
        'រចនា UI',
        'វាស់ស្ទង់ Performance របស់កម្មវិធី',
        'បង្កើត View'
      ],
      correct: 2,
      explanation: '`Xcode Instruments` គឺជាឧបករណ៍សម្រាប់វាស់ស្ទង់ Performance របស់កម្មវិធី។'
    },
    {
      question: 'តើការប្រើ `print()` នៅខាងក្នុង `body` Property អាចជួយអ្វី?',
      options: [
        'វាស់ស្ទង់ CPU Usage',
        'ធ្វើឱ្យកម្មវិធីដំណើរការលឿន',
        'តាមដានចំនួនដងដែល View ត្រូវបាន Re-render',
        'គ្មានប្រយោជន៍ទេ'
      ],
      correct: 2,
      explanation: 'ការប្រើ `print()` នៅក្នុង `body` អាចជួយឱ្យអ្នកដឹងថាតើ View របស់អ្នកត្រូវបាន Re-render ចំនួនប៉ុន្មានដង។'
    },
    {
      question: 'តើ `Hashable` ត្រូវបានប្រើប្រាស់ជាមួយ Data Structure មួយណា?',
      options: [
        '`Array`',
        '`Set`',
        '`Tuple`',
        '`String`'
      ],
      correct: 1,
      explanation: '`Hashable` ត្រូវបានប្រើជាមួយ `Set` ឬ `Dictionary` ដើម្បីធានាថាធាតុនីមួយៗមាន Unique Hash Value។'
    },
    {
      question: 'តើ `Identifiable` Protocol ប្រើសម្រាប់អ្វី?',
      options: [
        'ផ្តល់ Unique ID ដល់ View',
        'បកប្រែ JSON Data',
        'ធ្វើ Animation',
        'គ្រប់គ្រង State'
      ],
      correct: 0,
      explanation: '`Identifiable` ត្រូវបានប្រើដើម្បីផ្តល់ Unique ID ដល់ View ឬ Model Data នៅក្នុង `ForEach`។'
    },
    {
      question: 'តើការគ្រប់គ្រង Performance មានសារៈសំខាន់ចំពោះកម្មវិធីប្រភេទណា?',
      options: [
        'កម្មវិធីធំនិងស្មុគស្មាញ',
        'កម្មវិធីតូច',
        'គ្រប់កម្មវិធីទាំងអស់',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 2,
      explanation: 'ការបង្កើនប្រសិទ្ធភាពមានសារៈសំខាន់សម្រាប់គ្រប់កម្មវិធីទាំងអស់ ទាំងធំនិងតូច។'
    },
    {
      question: 'តើការ Re-render ញឹកញាប់ពេកអាចនាំឱ្យមានបញ្ហាអ្វី?',
      options: [
        'ការប្រើប្រាស់ Memory កើនឡើង',
        'ការប្រើប្រាស់ CPU កើនឡើង',
        'ការដំណើរការយឺតនិងមិនរលូន',
        'គ្រប់ចម្លើយទាំងអស់គឺត្រឹមត្រូវ'
      ],
      correct: 3,
      explanation: 'ការ Re-render ញឹកញាប់ពេកអាចនាំឱ្យមានបញ្ហាជាច្រើនដូចជា Memory ខ្ពស់ និងការដំណើរការយឺត។'
    },
    {
      question: 'តើ `onDisappear()` modifier ប្រើសម្រាប់អ្វី?',
      options: [
        'ចាប់ផ្តើមការងារ',
        'បញ្ឈប់ការងារដែលកំពុងរត់',
        'ធ្វើ Animation',
        'ផ្លាស់ប្តូរ View'
      ],
      correct: 1,
      explanation: '`onDisappear()` ត្រូវបានប្រើដើម្បីបញ្ឈប់ការងារដែលមិនចាំបាច់នៅពេល View បាត់ទៅវិញពីអេក្រង់។'
    },
    {
      question: 'តើ `SwiftUI` ត្រូវការ `Equatable` ដើម្បីធ្វើបច្ចុប្បន្នភាព Views ដែរឬទេ?',
      options: [
        'ត្រូវការជានិច្ច',
        'មិនត្រូវការទេ',
        'វាជួយបង្កើនប្រសិទ្ធភាពប៉ុណ្ណោះ',
        'វាអាស្រ័យលើប្រភេទ Data'
      ],
      correct: 2,
      explanation: '`Equatable` មិនមែនជាតម្រូវការទេ ប៉ុន្តែវាជួយបង្កើនប្រសិទ្ធភាពយ៉ាងខ្លាំង។'
    }
  ],
  lab: {
    task: `
បង្កើត View មួយដែលបង្ហាញបញ្ជីឈ្មោះមនុស្ស ហើយប្រើ \`Equatable\` ដើម្បីបង្កើនប្រសិទ្ធភាព។

**តម្រូវការ:**

1.  **Model:**
    -   បង្កើត \`struct\` មួយឈ្មោះ \`Person\` ដែលមាន Properties \`id: UUID\` និង \`name: String\`។
    -   \`Person\` ត្រូវគោរពតាម \`Identifiable\` និង \`Equatable\`។

2.  **Custom View:**
    -   បង្កើត Custom View មួយឈ្មោះ \`PersonRow\` ដែលទទួល Parameter \`person: Person\`។
    -   \`PersonRow\` ត្រូវគោរពតាម \`Equatable\` និងមាន \`static func ==\` ដើម្បីពិនិត្យមើលតែ \`name\` ប៉ុណ្ណោះ។

3.  **ViewModel:**
    -   បង្កើត \`ObservableObject\` មួយដែលមាន Array of \`Person\`។
    -   មាន Function មួយឈ្មោះ \`updatePerson(id: UUID, newName: String)\`។

4.  **View:**
    -   នៅក្នុង Parent View, បង្ហាញ \`List\` នៃ \`PersonRow\`។
    -   ដាក់ Button មួយដែលហៅ \`updatePerson()\`។
    -   បើក \`Debug Navigator\` នៅក្នុង Xcode ហើយមើលថា តើ \`PersonRow\` ប៉ុន្មានត្រូវបាន Re-render។

**ការណែនាំ:** ព្យាយាម update តែ person មួយគត់នៅក្នុង Array ហើយមើលថាតើមានអ្វីកើតឡើង។
    `,
    solution: `
\`\`\`swift
import SwiftUI

// Step 1: Model
struct Person: Identifiable, Equatable {
    let id = UUID()
    var name: String
    
    // ត្រូវតែអនុវត្ត Equatable
    static func == (lhs: Person, rhs: Person) -> Bool {
        return lhs.id == rhs.id && lhs.name == rhs.name
    }
}

// Step 2: Custom View
struct PersonRow: View, Equatable {
    var person: Person
    
    // ត្រូវតែអនុវត្ត Equatable សម្រាប់ View
    static func == (lhs: PersonRow, rhs: PersonRow) -> Bool {
        // ពិនិត្យមើលតែ person របស់វា
        return lhs.person == rhs.person
    }
    
    var body: some View {
        HStack {
            Text(person.name)
            Spacer()
            Text("(\\(person.id.uuidString.prefix(4)))")
                .font(.caption)
                .foregroundColor(.secondary)
        }
        // តាមដាន Re-rendering
        let _ = print("PersonRow for \\(person.name) is re-rendered")
    }
}

// Step 3: ViewModel
class PersonListViewModel: ObservableObject {
    @Published var people = [
        Person(name: "សុខា"),
        Person(name: "វណ្ណារ៉ា"),
        Person(name: "នីតា")
    ]
    
    func updatePerson(id: UUID, newName: String) {
        if let index = people.firstIndex(where: { $0.id == id }) {
            people[index].name = newName
        }
    }
}

// Step 4: View
struct PerformanceLabView: View {
    @StateObject private var viewModel = PersonListViewModel()
    
    var body: some View {
        NavigationView {
            VStack {
                List {
                    ForEach(viewModel.people) { person in
                        PersonRow(person: person)
                    }
                }
                .listStyle(.insetGrouped)
                
                Button("Update សុខា") {
                    if let personToUpdate = viewModel.people.first {
                        viewModel.updatePerson(id: personToUpdate.id, newName: "សុខា (បានកែ)")
                    }
                }
                .padding()
            }
            .navigationTitle("Performance Lab")
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson5_3Content;