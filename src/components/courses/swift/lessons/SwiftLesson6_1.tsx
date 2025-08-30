import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson6_1Content: LessonContent = {
  title: 'ការបង្កើត Todo App',
  objectives: [
    'អនុវត្តការប្រើប្រាស់ `State`, `Binding`, និង `ObservableObject`',
    'រៀនពីរបៀបគ្រប់គ្រង Data ក្នុង App',
    'ប្រើ `List` និង `ForEach` ដើម្បីបង្ហាញទិន្នន័យ',
    'បង្កើត User Interface សម្រាប់បន្ថែម, កែប្រែ, និងលុប Todo',
    'យល់ដឹងពីការរៀបចំកូដជា `Model`, `ViewModel`, និង `View` (MVVM)'
  ],
  content: `
# ការបង្កើត Todo App 📝

---

ការបង្កើត Todo App គឺជាគម្រោងដ៏ល្អមួយសម្រាប់អនុវត្តគោលការណ៍សំខាន់ៗរបស់ SwiftUI ដូចជា **State Management** និង **Data Flow**។ នៅក្នុងមេរៀននេះ យើងនឹងបង្កើត App សាមញ្ញមួយដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់គ្រប់គ្រងបញ្ជីការងាររបស់ពួកគេ។

## 1. ការរៀបចំគម្រោង (Project Setup)

យើងនឹងប្រើ Pattern **MVVM (Model-View-ViewModel)** ដើម្បីរៀបចំកូដរបស់យើង។
-   **Model:** តំណាងឱ្យទិន្នន័យ។ នៅក្នុងករណីនេះ វាជា \`TodoItem\`។
-   **ViewModel:** ជាតំណភ្ជាប់រវាង Model និង View។ វាផ្ទុក Logic របស់ App ហើយគ្រប់គ្រង Data ។
-   **View:** ជាផ្នែក UI ដែលអ្នកប្រើប្រាស់ឃើញ។

\`\`\`swift
// Step 1: Model
struct TodoItem: Identifiable, Codable {
    let id = UUID()
    var title: String
    var isCompleted: Bool = false
}

// Step 2: ViewModel
class TodoViewModel: ObservableObject {
    // ប្រើ @Published ដើម្បីធ្វើបច្ចុប្បន្នភាព UI ដោយស្វ័យប្រវត្តិ
    @Published var todos: [TodoItem] = []
    
    // Function សម្រាប់បន្ថែម Todo
    func addTodo(title: String) {
        let newTodo = TodoItem(title: title)
        todos.append(newTodo)
    }
    
    // Function សម្រាប់លុប Todo
    func deleteTodo(at offsets: IndexSet) {
        todos.remove(atOffsets: offsets)
    }
    
    // Function សម្រាប់ប្តូរស្ថានភាព Todo
    func toggleCompletion(for todo: TodoItem) {
        if let index = todos.firstIndex(where: { $0.id == todo.id }) {
            todos[index].isCompleted.toggle()
        }
    }
}
\`\`\`

## 2. ការសាងសង់ UI (View)

យើងនឹងបង្កើត \`ContentView\` ដើម្បីបង្ហាញបញ្ជី Todo និង UI សម្រាប់បញ្ចូលថ្មី។

\`\`\`swift
// Step 3: View
struct TodoView: View {
    // ប្រើ @StateObject ដើម្បីបង្កើត ViewModel Instance
    @StateObject private var viewModel = TodoViewModel()
    @State private var newTodoTitle: String = ""

    var body: some View {
        NavigationView {
            VStack {
                // UI សម្រាប់បន្ថែម Todo ថ្មី
                HStack {
                    TextField("បញ្ចូល Todo ថ្មី...", text: $newTodoTitle)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    Button("បន្ថែម") {
                        if !newTodoTitle.isEmpty {
                            viewModel.addTodo(title: newTodoTitle)
                            newTodoTitle = "" // លុបទិន្នន័យក្នុង TextField
                        }
                    }
                    .padding(.horizontal)
                }
                .padding()

                // បញ្ជី Todo
                List {
                    ForEach($viewModel.todos) { $todo in
                        TodoRow(todo: $todo)
                    }
                    .onDelete(perform: viewModel.deleteTodo)
                }
                .listStyle(InsetGroupedListStyle())
            }
            .navigationTitle("បញ្ជីការងារ")
        }
    }
}
\`\`\`

## 3. Row View និង Binding

ដើម្បីឱ្យយើងអាចធ្វើបច្ចុប្បន្នភាព TodoItem នីមួយៗបាន យើងត្រូវប្រើ **\`@Binding\`** ។

\`\`\`swift
struct TodoRow: View {
    @Binding var todo: TodoItem

    var body: some View {
        HStack {
            Image(systemName: todo.isCompleted ? "checkmark.circle.fill" : "circle")
                .foregroundColor(todo.isCompleted ? .green : .gray)
                .onTapGesture {
                    todo.isCompleted.toggle()
                }
            Text(todo.title)
                .strikethrough(todo.isCompleted) // គូសបន្ទាត់ពីលើអត្ថបទ
            Spacer()
        }
    }
}
\`\`\`
នៅក្នុង \`ForEach\` របស់ \`TodoView\` យើងបានប្រើ \`$viewModel.todos\` ដែលផ្តល់ \`Binding\` ដល់ធាតុនីមួយៗ។ នេះអនុញ្ញាតឱ្យ \`TodoRow\` ផ្លាស់ប្តូរ \`todo\` Property ដោយផ្ទាល់។

`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ UserDefaults ដើម្បីរក្សាទុកទិន្នន័យ</h3>
<p>កម្មវិធី Todo នឹងបាត់ទិន្នន័យនៅពេលបិទ។ យើងអាចប្រើ \`UserDefaults\` ដើម្បីរក្សាទុកវា។</p>
<pre><code class="language-swift">
// បន្ថែម Logic នេះទៅក្នុង TodoViewModel
import Foundation

class TodoViewModel: ObservableObject {
    @Published var todos: [TodoItem] = [] {
        didSet {
            // រាល់ពេល Data ផ្លាស់ប្តូរ, រក្សាទុកវា
            saveTodos()
        }
    }

    init() {
        loadTodos()
    }
    
    private func saveTodos() {
        if let encoded = try? JSONEncoder().encode(todos) {
            UserDefaults.standard.set(encoded, forKey: "my_todos")
        }
    }
    
    private func loadTodos() {
        if let savedData = UserDefaults.standard.data(forKey: "my_todos") {
            if let decodedTodos = try? JSONDecoder().decode([TodoItem].self, from: savedData) {
                self.todos = decodedTodos
                return
            }
        }
        self.todos = []
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ `Model` នៅក្នុង MVVM តំណាងឱ្យអ្វី?',
      options: [
        'User Interface',
        'Business Logic',
        'Data Structure',
        'Networking'
      ],
      correct: 2,
      explanation: 'Model តំណាងឱ្យ Data របស់កម្មវិធី។'
    },
    {
      question: 'តើ `@StateObject` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីគ្រប់គ្រង Simple State',
        'ដើម្បីបង្កើតនិងគ្រប់គ្រង `ObservableObject` Instance នៅក្នុង View',
        'ដើម្បីចែករំលែក Data រវាង Views',
        'ដើម្បីធ្វើ Animation'
      ],
      correct: 1,
      explanation: '`@StateObject` ត្រូវបានប្រើដើម្បីបង្កើតនិងគ្រប់គ្រង `ObservableObject` នៅពេល View ត្រូវបានបង្កើត។'
    },
    {
      question: 'តើ `ObservableObject` ប្រើជាមួយ Property Wrapper មួយណា?',
      options: [
        '`@State`',
        '`@Published`',
        '`@EnvironmentObject`',
        '`@Binding`'
      ],
      correct: 1,
      explanation: '`@Published` គឺជា Property Wrapper ដែលធ្វើឱ្យ Properties របស់ `ObservableObject` អាចធ្វើបច្ចុប្បន្នភាព View ដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ `ForEach` នៅក្នុង `List` ត្រូវការអ្វីដើម្បីឱ្យដំណើរការបានត្រឹមត្រូវ?',
      options: [
        'Data ដែលគោរពតាម `Codable`',
        'Data ដែលគោរពតាម `Identifiable`',
        'Data ដែលគោរពតាម `Hashable`',
        'Data ដែលគោរពតាម `Equatable`'
      ],
      correct: 1,
      explanation: '`ForEach` ត្រូវការ Data ដែលគោរពតាម `Identifiable` ដើម្បីអាចសម្គាល់ធាតុនីមួយៗបាន។'
    },
    {
      question: 'តើ `Binding` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត View ថ្មី',
        'គ្រប់គ្រង Data ក្នុង ViewModel',
        'បង្កើតការតភ្ជាប់ Data ពី Parent View ទៅ Child View',
        'រក្សាទុក Data'
      ],
      correct: 2,
      explanation: '`Binding` ត្រូវបានប្រើដើម្បីបង្កើតការតភ្ជាប់ទិសពីរ (Two-way) ទៅកាន់ State របស់ Parent View។'
    },
    {
      question: 'តើ `UserDefaults` ប្រើសម្រាប់អ្វី?',
      options: [
        'រក្សាទុក File ធំៗ',
        'រក្សាទុក Data សាមញ្ញៗ',
        'គ្រប់គ្រង Networking',
        'ធ្វើ Animation'
      ],
      correct: 1,
      explanation: '`UserDefaults` គឺសមរម្យសម្រាប់រក្សាទុក Data សាមញ្ញៗដូចជា Settings ឬ Prefs។'
    },
    {
      question: 'តើ `onDelete` modifier ប្រើសម្រាប់អ្វី?',
      options: [
        'លុប View',
        'លុបធាតុនៅក្នុង `List`',
        'លុប File',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`onDelete` modifier ត្រូវបានប្រើដើម្បីអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់លុបធាតុពី `List`។'
    },
    {
      question: 'តើ MVVM តំណាងឱ្យអ្វី?',
      options: [
        'Model View-View-Model',
        'Model Visual-View-Model',
        'Multiple View-Model',
        'Model View-Value-Model'
      ],
      correct: 0,
      explanation: 'MVVM តំណាងឱ្យ Model-View-ViewModel។'
    },
    {
      question: 'តើ `TextField` ត្រូវការ `Binding` ទេ?',
      options: [
        'ត្រូវការ',
        'មិនត្រូវការទេ',
        'វាអាស្រ័យលើកូដ',
        'ត្រូវការតែពេលអ្នកប្រើ `@State`'
      ],
      correct: 0,
      explanation: '`TextField` ត្រូវការ `Binding` ទៅកាន់ `String` ដើម្បីធ្វើបច្ចុប្បន្នភាព Text នៅពេលវាយបញ្ចូល។'
    },
    {
      question: 'តើ `Codable` ត្រូវប្រើដើម្បីអ្វីក្នុងគម្រោងនេះ?',
      options: [
        'ដើម្បីរក្សាទុក Data ទៅ `UserDefaults`',
        'ដើម្បីបង្កើត Model',
        'ដើម្បីធ្វើបច្ចុប្បន្នភាព UI',
        'ដើម្បីគ្រប់គ្រង State'
      ],
      correct: 0,
      explanation: '`Codable` ត្រូវបានប្រើដើម្បីបកប្រែ `TodoItem` ទៅជា `Data` សម្រាប់រក្សាទុកក្នុង `UserDefaults`។'
    }
  ],
  lab: {
    task: `
បន្ថែមមុខងារទៅ Todo App ដោយអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់កែប្រែចំណងជើងរបស់ TodoItem។

**តម្រូវការ:**

1.  **View:**
    -   បន្ថែម \`NavigationLink\` ទៅកាន់ \`TodoRow\`។
    -   នៅពេលចុចលើ Row, វានឹងរុញទៅ View ថ្មីមួយ។

2.  **Detail View:**
    -   បង្កើត View ថ្មីមួយឈ្មោះ \`TodoDetailView\`។
    -   \`TodoDetailView\` គួរតែមាន \`Binding\` ទៅកាន់ \`TodoItem\` មួយ។
    -   ប្រើ \`TextField\` ដើម្បីបង្ហាញនិងកែប្រែចំណងជើងរបស់ TodoItem។

3.  **State Management:**
    -   នៅពេលអ្នកប្រើប្រាស់វាយបញ្ចូលក្នុង \`TextField\`, ចំណងជើងរបស់ TodoItem គួរតែធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិ។
    -   ចំណងជើងរបស់ \`NavigationTitle\` គួរតែបង្ហាញចំណងជើងបច្ចុប្បន្នរបស់ TodoItem។

**ការណែនាំ:** ត្រូវប្រើ \`@Binding\` ទៅក្នុង \`TodoDetailView\` ដើម្បីធ្វើបច្ចុប្បន្នភាព Data ដោយផ្ទាល់។
    `,
    solution: `
\`\`\`swift
import SwiftUI

// កូដសម្រាប់ Model និង ViewModel ពីខាងលើ

// Step 1 & 2: Detail View
struct TodoDetailView: View {
    @Binding var todo: TodoItem
    
    var body: some View {
        Form {
            TextField("ចំណងជើង", text: $todo.title)
        }
        .navigationTitle(todo.title)
        .navigationBarTitleDisplayMode(.inline)
    }
}

// Step 3: កែប្រែ TodoView
struct TodoView: View {
    @StateObject private var viewModel = TodoViewModel()
    @State private var newTodoTitle: String = ""

    var body: some View {
        NavigationView {
            VStack {
                HStack {
                    TextField("បញ្ចូល Todo ថ្មី...", text: $newTodoTitle)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    Button("បន្ថែម") {
                        if !newTodoTitle.isEmpty {
                            viewModel.addTodo(title: newTodoTitle)
                            newTodoTitle = ""
                        }
                    }
                    .padding(.horizontal)
                }
                .padding()

                List {
                    ForEach($viewModel.todos) { $todo in
                        NavigationLink(destination: TodoDetailView(todo: $todo)) {
                            TodoRow(todo: $todo)
                        }
                    }
                    .onDelete(perform: viewModel.deleteTodo)
                }
                .listStyle(InsetGroupedListStyle())
            }
            .navigationTitle("បញ្ជីការងារ")
        }
    }
}
\`\`\`
`
  }
};

export default SwiftLesson6_1Content;