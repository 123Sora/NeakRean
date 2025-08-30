import type { LessonContent } from '../../../../types/LessonTypes';

const SwiftLesson5_2Content: LessonContent = {
  title: 'ការបង្កើត Custom Views',
  objectives: [
    'យល់ដឹងពីសារៈសំខាន់នៃការបង្កើត Custom Views',
    'រៀនពីរបៀបបំបែក View ធំមួយទៅជា Custom Sub-Views',
    'ស្គាល់ពីរបៀបប្រើ `View` Protocol និង `body` Property',
    'អនុវត្តការបង្កើត Reusable Components សម្រាប់កម្មវិធីរបស់អ្នក',
    'យល់ដឹងពីរបៀបប្រើ Parameters និង Modifiers នៅក្នុង Custom Views'
  ],
  content: `
# ការបង្កើត Custom Views 🎨

---

កម្មវិធីដែលមានគុណភាពខ្ពស់ត្រូវបានសាងសង់ឡើងពី Components ដែលអាចប្រើប្រាស់ឡើងវិញបាន (Reusable Components)។ នៅក្នុង SwiftUI, នេះមានន័យថាការបំបែក View ធំមួយទៅជា Views តូចៗជាច្រើនដែលគេហៅថា **Custom Views**។ ការធ្វើបែបនេះធ្វើឱ្យកូដរបស់អ្នកមានលក្ខណៈស្អាតជាងមុន ងាយស្រួលថែទាំ និងអាចប្រើឡើងវិញបាន។

## 1. ហេតុអ្វីបានជាត្រូវបង្កើត Custom Views?

-   **Modular Code:** ការបំបែកកូដទៅជាបំណែកតូចៗធ្វើឱ្យកូដមានលក្ខណៈរៀបរយនិងងាយស្រួលអាន។
-   **Reusable Components:** អ្នកអាចប្រើ Custom View ដូចគ្នាទៅកន្លែងផ្សេងៗគ្នានៃកម្មវិធីរបស់អ្នកដោយមិនចាំបាច់សរសេរកូដម្តងទៀត។
-   **Easier to Debug:** ប្រសិនបើមានបញ្ហា អ្នកអាចដឹងភ្លាមថាបញ្ហានោះនៅក្នុង Custom View មួយណា។
-   **Maintainability:** ការផ្លាស់ប្តូរការរចនានៅកន្លែងតែមួយនឹងធ្វើបច្ចុប្បន្នភាពនៅគ្រប់កន្លែងដែល View នោះត្រូវបានប្រើ។

## 2. របៀបបង្កើត Custom View

រាល់ View ទាំងអស់នៅក្នុង SwiftUI (ដូចជា \`Text\`, \`Button\`, \`VStack\`) គឺគ្រាន់តែជា \`struct\` ដែលគោរពតាម Protocol **\`View\`**។ ដើម្បីបង្កើត Custom View មួយ អ្នកគ្រាន់តែបង្កើត \`struct\` មួយហើយផ្តល់ \`body\` Property ទៅវា។

\`\`\`swift
// នេះជា Custom View ដ៏សាមញ្ញមួយ
struct CustomTitleView: View {
    var body: some View {
        Text("សូមស្វាគមន៍!")
            .font(.largeTitle)
            .fontWeight(.bold)
            .foregroundColor(.blue)
    }
}

// របៀបប្រើប្រាស់
struct ContentView: View {
    var body: some View {
        VStack {
            CustomTitleView() // ប្រើ Custom View ដូចជា Built-in View
            Text("នេះជាអត្ថបទរង")
        }
    }
}
\`\`\`

---

## 3. Custom View ជាមួយ Parameters

Custom Views កាន់តែមានប្រយោជន៍នៅពេលដែលអ្នកអាចផ្តល់ Parameters ទៅវា។ Parameters អនុញ្ញាតឱ្យ Custom View របស់អ្នកមានលក្ខណៈបត់បែន។

\`\`\`swift
// Custom View ជាមួយ Parameters
struct CustomButton: View {
    var title: String
    var action: () -> Void // Closure ជា parameter

    var body: some View {
        Button(action: action) {
            Text(title)
                .padding()
                .frame(maxWidth: .infinity)
                .background(.purple)
                .foregroundColor(.white)
                .cornerRadius(10)
        }
    }
}

// របៀបប្រើប្រាស់
struct ButtonExampleView: View {
    var body: some View {
        VStack {
            CustomButton(title: "ចុចនៅទីនេះ") {
                print("Button ត្រូវបានចុច!")
            }
        }
        .padding()
    }
}
\`\`\`

---

## 4. Custom View ជាមួយ \`ViewModifier\`

សម្រាប់ Modifiers ដែលត្រូវបានប្រើម្តងហើយម្តងទៀត អ្នកអាចបង្កើត Custom View Modifier ផ្ទាល់ខ្លួនរបស់អ្នក។ វាជួយកាត់បន្ថយការសរសេរកូដដែលកើតឡើងដដែលៗ។

\`\`\`swift
// Custom View Modifier
struct CardModifier: ViewModifier {
    func body(content: Content) -> some View {
        content
            .padding()
            .background(.white)
            .cornerRadius(10)
            .shadow(color: .black.opacity(0.2), radius: 5, x: 0, y: 2)
    }
}

// Extension ដើម្បីងាយស្រួលប្រើ
extension View {
    func asCard() -> some View {
        self.modifier(CardModifier())
    }
}

// របៀបប្រើប្រាស់
struct ModifierExampleView: View {
    var body: some View {
        VStack {
            Text("នេះជា Card ទីមួយ")
                .asCard()
            
            Text("នេះជា Card ទីពីរ")
                .asCard()
        }
        .padding()
        .background(.gray.opacity(0.1))
    }
}
\`\`\`
`,
  examples: [
    `<h3>ឧទាហរណ៍៖ ការប្រើ Content Parameters</h3>
<p>អ្នកអាចទទួល Views ផ្សេងទៀតជា Parameters ដោយប្រើ \`Content\` Type។</p>
<pre><code class="language-swift">
import SwiftUI

struct CustomContainer<Content: View>: View {
    var title: String
    let content: Content
    
    init(title: String, @ViewBuilder content: () -> Content) {
        self.title = title
        self.content = content()
    }
    
    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text(title)
                .font(.headline)
            content // បង្ហាញ content ដែលបានส่งមក
        }
        .padding()
        .background(.gray.opacity(0.1))
        .cornerRadius(10)
    }
}

struct ContentContainerExample: View {
    var body: some View {
        CustomContainer(title: "ប្រអប់ព័ត៌មាន") {
            VStack(alignment: .leading) {
                Text("ឈ្មោះ៖ សុខា")
                Text("អាយុ៖ 30")
            }
        }
    }
}
</code></pre>
`
  ],
  quiz: [
    {
      question: 'តើអ្វីជាអត្ថប្រយោជន៍មួយនៃការបង្កើត Custom Views?',
      options: [
        'ធ្វើឱ្យកម្មវិធីដំណើរការលឿន',
        'ធ្វើឱ្យកូដអាចប្រើប្រាស់ឡើងវិញបាន',
        'ធ្វើឱ្យកូដពិបាកយល់',
        'គ្មានអត្ថប្រយោជន៍ទេ'
      ],
      correct: 1,
      explanation: 'ការបង្កើត Custom Views ធ្វើឱ្យកូដរបស់អ្នកអាចប្រើប្រាស់ឡើងវិញបាន។'
    },
    {
      question: 'តើ Custom View ត្រូវគោរពតាម Protocol មួយណា?',
      options: [
        '`Codable`',
        '`Identifiable`',
        '`View`',
        '`ObservableObject`'
      ],
      correct: 2,
      explanation: 'ដើម្បីក្លាយជា View, `struct` នោះត្រូវតែគោរពតាម Protocol `View`។'
    },
    {
      question: 'តើ Closure Parameter មួយណាដែលត្រឹមត្រូវសម្រាប់ `Button`?',
      options: [
        '`var action: () -> Void`',
        '`var action: () -> Bool`',
        '`var action: () -> String`',
        '`var action: () -> Int`'
      ],
      correct: 0,
      explanation: 'Action Closure របស់ `Button` មិនមាន Return Value ដូច្នេះវាជា `() -> Void`។'
    },
    {
      question: 'តើ `ViewModifier` ប្រើសម្រាប់អ្វី?',
      options: [
        'បង្កើត View ថ្មី',
        'កែប្រែ View ដែលមានស្រាប់',
        'គ្រប់គ្រង State',
        'ទាញយកទិន្នន័យ'
      ],
      correct: 1,
      explanation: '`ViewModifier` ត្រូវបានប្រើដើម្បីអនុវត្ត Modifiers ច្រើនទៅលើ View មួយ។'
    },
    {
      question: 'តើ `ContentView` គួរមានទំហំធំ ឬតូច?',
      options: [
        'ធំ',
        'តូច',
        'វាអាស្រ័យលើកូដ',
        'គ្មានចម្លើយណាត្រឹមត្រូវទេ'
      ],
      correct: 1,
      explanation: 'តាមការអនុវត្តន៍ល្អ `ContentView` គួរមានទំហំតូច និងសាមញ្ញដោយការប្រើប្រាស់ Custom Views។'
    },
    {
      question: 'តើ `ContentView` នៅក្នុង SwiftUI គឺជាអ្វី?',
      options: [
        'ជា Class',
        'ជា Struct',
        'ជា Enum',
        'ជា Tuple'
      ],
      correct: 1,
      explanation: '`ContentView` គឺជា `struct` ដែលគោរពតាម Protocol `View`។'
    },
    {
      question: 'តើ `init` Function នៅក្នុង Custom View ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីចាប់ផ្តើម Custom View',
        'ដើម្បីផ្តល់តម្លៃទៅ Properties របស់ View',
        'ដើម្បីចាប់ផ្តើម App',
        'ដើម្បីគ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`init` ត្រូវបានប្រើដើម្បីផ្តល់តម្លៃទៅ Properties របស់ View នៅពេលដែលវាត្រូវបានបង្កើត។'
    },
    {
      question: 'តើ `asCard()` នៅក្នុងឧទាហរណ៍ខាងលើ គឺជាអ្វី?',
      options: [
        'ជា Function',
        'ជា `ViewModifier`',
        'ជា `Extension`',
        'ជា Custom Modifier'
      ],
      correct: 3,
      explanation: '`asCard()` គឺជា Custom Modifier ដែលបានបង្កើតនៅក្នុង Extension របស់ `View`។'
    },
    {
      question: 'តើ `@ViewBuilder` ប្រើសម្រាប់អ្វី?',
      options: [
        'ដើម្បីបង្កើត Views ពី Array',
        'ដើម្បីអនុញ្ញាតឱ្យ Closure មួយមាន Views ជាច្រើន',
        'ដើម្បីបង្កើត Button',
        'ដើម្បីគ្រប់គ្រង State'
      ],
      correct: 1,
      explanation: '`@ViewBuilder` គឺជា Result Builder ដែលអនុញ្ញាតឱ្យ Closure មាន Views ជាច្រើន។'
    },
    {
      question: 'តើ View មួយណាដែលមិនមែនជា Built-in View?',
      options: [
        '`VStack`',
        '`Text`',
        '`CustomButton`',
        '`List`'
      ],
      correct: 2,
      explanation: '`CustomButton` គឺជា View ដែលយើងបានបង្កើតដោយខ្លួនឯង។'
    }
  ],
  lab: {
    task: `
បង្កើត Custom View មួយឈ្មោះ \`ProfileCardView\` ដែលបង្ហាញព័ត៌មានរបស់មនុស្សម្នាក់ៗ។

**តម្រូវការ:**

1.  **Custom View:**
    -   បង្កើត \`struct\` មួយឈ្មោះ \`ProfileCardView\`។
    -   មាន Properties ពីរគឺ \`name: String\` និង \`title: String\`។
    -   \`ProfileCardView\` ត្រូវមាន \`VStack\` មួយដែលបង្ហាញ \`name\` និង \`title\`។

2.  **Modifiers:**
    -   អនុវត្ត Modifiers មួយចំនួនដូចជា \`padding\`, \`background\`, \`cornerRadius\`, និង \`shadow\` ទៅលើ Card View របស់អ្នក។

3.  **Parent View:**
    -   នៅក្នុង \`ContentView\` របស់អ្នក, ប្រើ \`ProfileCardView\` ពីរដង ដោយផ្តល់ Parameters ខុសៗគ្នា។

**ការណែនាំ:** ព្យាយាមបង្កើត \`struct\` មួយទៀតសម្រាប់ Model data ដូចជា \`Person\` ដើម្បីអនុវត្តការរៀនពីមុន។
    `,
    solution: `
\`\`\`swift
import SwiftUI

// Optional: Model
struct Person: Identifiable {
    let id = UUID()
    let name: String
    let title: String
}

// Step 1: Custom View
struct ProfileCardView: View {
    var name: String
    var title: String
    
    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            Text(name)
                .font(.headline)
            Text(title)
                .font(.subheadline)
                .foregroundColor(.secondary)
        }
        .padding()
        .frame(width: 200)
        .background(.white)
        .cornerRadius(10)
        .shadow(color: .black.opacity(0.1), radius: 5, x: 0, y: 5)
    }
}

// Step 2: Parent View
struct CustomViewLab: View {
    var people: [Person] = [
        Person(name: "សុខា", title: "អ្នកអភិវឌ្ឍន៍ iOS"),
        Person(name: "នីតា", title: "អ្នករចនា UI/UX")
    ]
    
    var body: some View {
        VStack(spacing: 20) {
            Text("បញ្ជីប្រវត្តិរូប")
                .font(.title)
                .fontWeight(.bold)
            
            ForEach(people) { person in
                ProfileCardView(name: person.name, title: person.title)
            }
        }
        .padding()
        .background(.gray.opacity(0.1))
    }
}
\`\`\`
`
  }
};

export default SwiftLesson5_2Content;