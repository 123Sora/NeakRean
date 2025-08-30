import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson2_4Content: LessonContent = {
  title: 'Navigation និង Lists',
  objectives: [
    'យល់ដឹងពីរបៀបបង្កើត Lists សម្រាប់បង្ហាញទិន្នន័យ',
    'រៀនពីរបៀបប្រើ `List` View និង `ForEach`',
    'ស្គាល់ពីរបៀបរៀបចំ Navigation នៅក្នុង SwiftUI',
    'ប្រើប្រាស់ `NavigationView` និង `NavigationLink` ដើម្បីផ្លាស់ប្តូរអេក្រង់',
    'យល់ដឹងពីរបៀបបង្កើត Detail Views'
  ],
  content: `
# Navigation និង Lists  navigations and list in swiftui 🗺️

---

កម្មវិធីទូរស័ព្ទភាគច្រើនបង្ហាញទិន្នន័យក្នុងទម្រង់ជាបញ្ជី (List) ហើយមាន Navigation ដើម្បីផ្លាស់ប្តូរអេក្រង់។ នៅក្នុង SwiftUI \`List\` និង \`NavigationView\` គឺជា Views សំខាន់ពីរដែលជួយសម្រួលដល់ការងារនេះ។

## 1. ការបង្កើត List ជាមួយ \`List\` និង \`ForEach\`

\`List\` ត្រូវបានប្រើដើម្បីបង្ហាញទិន្នន័យជាជួរៗ (rows)។ វាក៏មានលក្ខណៈពិសេសដូចជា Scrolling និងការបំបែកជួរដោយស្វ័យប្រវត្តិ។

-   **\`List\` View:** ជា Container View សម្រាប់ Views ផ្សេងទៀត។
-   **\`ForEach\`:** ជា View ដែលប្រើសម្រាប់រាប់ (iterate) លើ Collection of data (ឧ. Array)។ វាងាយស្រួលប្រើសម្រាប់បង្កើត Views ឡើងវិញដោយស្វ័យប្រវត្តិពីទិន្នន័យ។

\`\`\`swift
struct SimpleListView: View {
    let fruits = ["Apple", "Banana", "Mango", "Pineapple"]

    var body: some View {
        List {
            ForEach(fruits, id: \\.self) { fruit in
                Text(fruit)
            }
        }
    }
}
\`\`\`

## 2. Navigation

Navigation គឺជាការផ្លាស់ប្តូរពីអេក្រង់មួយទៅអេក្រង់មួយទៀត។ នៅក្នុង SwiftUI អ្នកប្រើប្រាស់ \`NavigationView\` និង \`NavigationLink\`។

-   **\`NavigationView\`:** ជា Container View ដែលផ្តល់នូវ Navigation Bar នៅខាងលើអេក្រង់។ វាជា View មេសម្រាប់ Navigation ទាំងមូល។
-   **\`NavigationLink\`:** ជា View ដែលអាចចុចបាន ហើយនៅពេលចុច វានឹងរុញ View ថ្មីចូលទៅក្នុង Navigation Stack។

\`\`\`swift
// View មេ
struct MainView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("អេក្រង់មេ")
                NavigationLink(destination: DetailView()) {
                    Text("ទៅកាន់អេក្រង់លម្អិត")
                }
            }
            .navigationTitle("ទំព័រដើម")
        }
    }
}

// View លម្អិត
struct DetailView: View {
    var body: some View {
        Text("នេះជាអេក្រង់លម្អិត!")
            .navigationTitle("អេក្រង់លម្អិត")
    }
}
\`\`\`

## 3. ការបញ្ចូល List និង Navigation ជាមួយគ្នា

ការរួមបញ្ចូលគ្នារវាង \`List\` និង \`NavigationLink\` គឺជាគំរូទូទៅនៅក្នុងកម្មវិធីជាច្រើន។ អ្នកអាចបង្កើត List នៃទិន្នន័យ ហើយនៅពេលចុចលើធាតុណាមួយ វានឹងនាំទៅកាន់អេក្រង់លម្អិត។

\`\`\`swift
// Model សម្រាប់ទិន្នន័យ
struct Fruit: Identifiable {
    let id = UUID()
    let name: String
}

// View មេ
struct ContentView: View {
    let fruits = [
        Fruit(name: "Apple"),
        Fruit(name: "Banana"),
        Fruit(name: "Mango")
    ]
    
    var body: some View {
        NavigationView {
            List {
                ForEach(fruits) { fruit in
                    NavigationLink(destination: FruitDetailView(fruit: fruit)) {
                        Text(fruit.name)
                    }
                }
            }
            .navigationTitle("បញ្ជីផ្លែឈើ")
        }
    }
}

// View លម្អិត
struct FruitDetailView: View {
    let fruit: Fruit
    
    var body: some View {
        Text("នេះជា \(fruit.name)!")
            .font(.title)
            .navigationTitle(fruit.name)
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ List ជាមួយ Sections</h3>
<p>រៀបចំ List របស់អ្នកជាផ្នែកៗដើម្បីឱ្យមើលទៅមានរបៀបរៀបរយ។</p>
<pre><code class="language-swift">
import SwiftUI

struct SectionsList: View {
    var body: some View {
        List {
            Section(header: Text("ក្រុម A")) {
                Text("ធាតុទី 1")
                Text("ធាតុទី 2")
            }
            
            Section(header: Text("ក្រុម B")) {
                Text("ធាតុទី 3")
                Text("ធាតុទី 4")
            }
        }
        .listStyle(.grouped)
    }
}
</code></pre>
<hr>
<h3>ឧទាហរណ៍៖ ការប្រើ Toolbar Navigation</h3>
<p>បន្ថែមប៊ូតុងទៅ Toolbar របស់ Navigation Bar។</p>
<pre><code class="language-swift">
import SwiftUI

struct ToolbarExample: View {
    var body: some View {
        NavigationView {
            Text("ទំព័រមេ")
                .navigationTitle("Toolbar")
                .toolbar {
                    ToolbarItem(placement: .navigationBarTrailing) {
                        Button("បន្ថែម") {
                            print("Add Button Tapped!")
                        }
                    }
                }
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើ View មួយណាដែលប្រើសម្រាប់បង្ហាញទិន្នន័យជាជួរៗ?',
      options: [
        '`VStack`',
        '`HStack`',
        '`List`',
        '`ForEach`'
      ],
      correct: 2,
      explanation: '`List` ត្រូវបានប្រើដើម្បីបង្ហាញទិន្នន័យជាជួរៗ (rows)។'
    },
    {
      question: 'តើអ្វីជាតួនាទីរបស់ `ForEach`?',
      options: [
        'រៀបចំ Views ពីលើចុះក្រោម',
        'ធ្វើម្តងទៀតលើ Collection of data ដើម្បីបង្កើត Views',
        'ដាក់ View ពីលើគ្នា',
        'ផ្លាស់ប្តូរអេក្រង់'
      ],
      correct: 1,
      explanation: '`ForEach` ត្រូវបានប្រើដើម្បីរាប់លើ Array ឬ Collection ដើម្បីបង្កើត Views សម្រាប់ធាតុនីមួយៗ។'
    },
    {
      question: 'តើ `NavigationLink` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្ហាញអត្ថបទ',
        'គ្រប់គ្រង State',
        'តំណភ្ជាប់ដើម្បីផ្លាស់ប្តូរទៅ View ថ្មី',
        'បង្កើតប៊ូតុង'
      ],
      correct: 2,
      explanation: '`NavigationLink` បង្កើតតំណភ្ជាប់ដើម្បីរុញ View ថ្មីចូលទៅក្នុង Navigation Stack។'
    },
    {
      question: 'តើ View មួយណាជា View មេសម្រាប់ Navigation?',
      options: [
        '`List`',
        '`NavigationView`',
        '`VStack`',
        '`DetailView`'
      ],
      correct: 1,
      explanation: '`NavigationView` គឺជា View មេដែលផ្តល់នូវ Navigation Bar និងគ្រប់គ្រង Navigation Stack។'
    },
    {
      question: 'តើ `id: \\.self` នៅក្នុង `ForEach` ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ពណ៌',
        'កំណត់អត្តសញ្ញាណតែមួយគត់ (Unique Identifier) សម្រាប់ធាតុនីមួយៗ',
        'កំណត់ទំហំ',
        'គ្មានន័យអ្វីទេ'
      ],
      correct: 1,
      explanation: '`id: \\.self` ប្រើដើម្បីកំណត់អត្តសញ្ញាណតែមួយគត់សម្រាប់ធាតុនីមួយៗនៅក្នុង Array ដែលមិនមាន Property `id`។'
    },
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍នៃការប្រើ `List`?',
      options: [
        'មាន Scrolling ដោយស្វ័យប្រវត្តិ',
        'ការបែងចែកជួរដោយស្វ័យប្រវត្តិ',
        'ការប្រើប្រាស់មានលក្ខណៈសាមញ្ញ',
        'គ្រប់ចម្លើយទាំងអស់គឺត្រឹមត្រូវ'
      ],
      correct: 3,
      explanation: '`List` ផ្តល់នូវលក្ខណៈពិសេសដូចជា Scrolling និងការបែងចែកជួរដោយស្វ័យប្រវត្តិ។'
    },
    {
      question: 'តើ `Section(header: ...)` ប្រើសម្រាប់អ្វីនៅក្នុង `List`?',
      options: [
        'បង្កើតប៊ូតុងថ្មី',
        'រៀបចំ List ជាក្រុមៗ',
        'ផ្លាស់ប្តូរពណ៌',
        'បង្កើត Sub-menu'
      ],
      correct: 1,
      explanation: '`Section` ប្រើដើម្បីរៀបចំធាតុនៅក្នុង List ជាក្រុមៗ។'
    },
    {
      question: 'តើ `navigationTitle(...)` modifier ប្រើសម្រាប់អ្វី?',
      options: [
        'កំណត់ចំណងជើងនៃ App',
        'កំណត់ចំណងជើងនៃ Navigation Bar',
        'កំណត់ចំណងជើងនៅក្នុង View',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: '`navigationTitle` modifier ត្រូវបានប្រើដើម្បីកំណត់ចំណងជើងដែលបង្ហាញនៅក្នុង Navigation Bar។'
    },
    {
      question: 'តើ SwiftUI ប្រើអ្វីដើម្បីដឹងថាធាតុមួយនៅក្នុង List គឺមានលក្ខណៈ Unique?',
      options: [
        'ID',
        'Index',
        'Name',
        'Length'
      ],
      correct: 0,
      explanation: 'SwiftUI ត្រូវការ Unique Identifier (ID) ដើម្បីដឹងថាធាតុមួយមានលក្ខណៈប្លែក។'
    },
    {
      question: 'តើ `List` អាចផ្ទុក View ណាបានខ្លះ?',
      options: [
        'តែ Text ប៉ុណ្ណោះ',
        'តែ Image ប៉ុណ្ណោះ',
        'Views ណាដែលត្រូវគ្នាជាមួយ `List`',
        'តែ Button ប៉ុណ្ណោះ'
      ],
      correct: 2,
      explanation: '`List` អាចផ្ទុក Views ជាច្រើនប្រភេទ។'
    },
    {
      question: 'តើអ្វីជាតួនាទីរបស់ `toolbar` modifier?',
      options: [
        'គ្រប់គ្រង State របស់ App',
        'បន្ថែមកន្លែងទំនេរជុំវិញ Toolbar',
        'ដាក់ធាតុ (Items) ទៅក្នុង Toolbar',
        'បិទ Toolbar'
      ],
      correct: 2,
      explanation: '`toolbar` modifier ត្រូវបានប្រើដើម្បីបន្ថែម Buttons ឬ Views ផ្សេងៗទៀតទៅក្នុង Navigation Bar។'
    }
  ],
  lab: {
    task: `
បង្កើត App សាមញ្ញមួយដែលបង្ហាញបញ្ជីឈ្មោះមនុស្ស ហើយនៅពេលចុចលើឈ្មោះនីមួយៗ វានឹងបង្ហាញអេក្រង់លម្អិត។

**តម្រូវការ:**

1.  **Model:**
    -   បង្កើត struct មួយឈ្មោះ \`Person\` ដែលមាន Property \`name\` និង \`age\`។
    -   ត្រូវប្រាកដថា \`Person\` គោរពតាម Protocol \`Identifiable\`។

2.  **View មេ:**
    -   ប្រើ \`NavigationView\` ជា Container។
    -   ប្រើ \`List\` និង \`ForEach\` ដើម្បីបង្ហាញបញ្ជីឈ្មោះមនុស្សមួយចំនួន។
    -   នៅក្នុង \`ForEach\` ប្រើ \`NavigationLink\` ដើម្បីភ្ជាប់ទៅកាន់ View លម្អិត។

3.  **View លម្អិត:**
    -   បង្កើត View ថ្មីមួយឈ្មោះ \`PersonDetailView\` ដែលទទួល Object \`Person\` ជា Parameter។
    -   បង្ហាញឈ្មោះនិងអាយុរបស់មនុស្សនោះ។

**ការណែនាំ:** ប្រើ Array នៃ \`Person\` Objects ដើម្បីផ្តល់ទិន្នន័យ។
    `,
    solution: `
\`\`\`swift
import SwiftUI

// Step 1: Model
struct Person: Identifiable {
    let id = UUID()
    let name: String
    let age: Int
}

// Step 2: Main View
struct MainPersonView: View {
    let people = [
        Person(name: "សុខា", age: 25),
        Person(name: "វណ្ណារ៉ា", age: 30),
        Person(name: "នីតា", age: 22),
        Person(name: "កុសល", age: 28)
    ]

    var body: some View {
        NavigationView {
            List {
                ForEach(people) { person in
                    NavigationLink(destination: PersonDetailView(person: person)) {
                        HStack {
                            Image(systemName: "person.circle.fill")
                                .foregroundColor(.blue)
                            Text(person.name)
                        }
                    }
                }
            }
            .navigationTitle("បញ្ជីមនុស្ស")
        }
    }
}

// Step 3: Detail View
struct PersonDetailView: View {
    let person: Person
    
    var body: some View {
        VStack(spacing: 20) {
            Image(systemName: "person.fill")
                .font(.system(size: 80))
            Text("ឈ្មោះ៖ \\(person.name)")
                .font(.title)
                .fontWeight(.bold)
            Text("អាយុ៖ \\(person.age) ឆ្នាំ")
                .font(.body)
                .foregroundColor(.secondary)
        }
        .navigationTitle(person.name)
        .padding()
    }
}
\`\`\`
`
  }
};

export default SwiftLesson2_4Content;